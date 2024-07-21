# website-insash-api & wesite-insash-database

## Lancement

- Se placer à la racine
- Placer les .env nécessaire dans `cmd/` et `database/`
- Placer la database_mock.sql dans `database/`
- `docker compose up`

## Fonctionnement

### Docker

- `website-insash-api` 
  - utilise un dockerfile pour copier & installer les dépendances, puis se run
  - il bind le port 8080:8080 pour rendre accessible l'api
  - il utilise le fichier `cmd/.env` pour set les variables d'environnement du docker afin de se connecter à la DB

- `website-insash-database` 
    - utilise l'image postgres:16
    - il bind le port 5432:5432 pour pouvoir modifier la DB localement *(pour le développement uniquement ! en prod ne pas bind)*
    - il utilise `database/.env` pour setup les variables d'environnement de l'utilisateur de la DB, son mot de passe et le nom de la DB
    - elle utilise une database de test à l'initialisation, qui provient de `database/database_mock.sql`

Les deux dockers sont reliés par un réseaux "backend" ce qui permet d'enregistrer dans les etc/hosts le nom du container avec l'ip, plus pratique car on sait pas l'ip à l'avance sinon

### website-insash-api

Ecrite en Go, exposées sur le port 8080
- `assets` : contient les documents en .md et leurs images, et images de membres
- `cmd` : contient le main et le certificat pour https (selfsigned pour l'instant et pas inclus dans le repo)
- `database` : contient les fichiers d'initialisation de la database et ses var. d'environnement
- `internal` :
    - `handlers` : les fonctions associées aux différentes url
    - `models` : les classes correspondant aux données que l'on reçoit quand on fait une requête à la DB
    - `utils` : contient une fonction pour log les accès à l'api

#### Url/endpoints et leurs utilités : 
Uniquement avec la méthode GET, pas de POST/UPDATE/DELETE puisque on a pas de système d'user pour gérer qui peut faire quoi

- `/document/article?search=___&tag=___&sort=___&uuid=___&slug=___`
renvoie les articles avec les conditions, cad 
    - `search` : si le titre/la description de l'article contient le terme cherché
    - `tag` : (possibilité d'en mettre plusieurs) si l'article possède le tag cherché
    - `sort` : asc/desc possible, trie par date 
    - `slug` : si l'article possède le slug précisé (exactement)
    - `uuid` : idem que slug mais avec uuid
- `/document/project?search=___&tag=___&sort=___&uuid=___&slug=___`
idem mais pour les projets
- `/documents/article/tags` : renvoie les tags avec le nombre d'articles dans lesquels ils apparaissent
- `/documents/project/tags` 
- `/documents/article/authors/{slug}` : renvoie les auteurs de l'article avec le slug précisé 
- `/documents/project/authors/{slug}` 
- `/images/documents/article/{slug}/{filename}` : renvoie l'image {filename} stockée dans le dossier assets/images/articles/{slug de l'article}
- `/images/documents/project/{slug}/{filename}`
- `/images/members/{filename}` : renvoie l'image nom stockée dans /assets/images/members
- `/markdown/article/{'content' de l'article}` : idem mais pour markdown
- `/markdown/project/{'content' du projet}` :
- `/members` : retourne la liste des membres

Si ce n'est pas une image ou un .md, alors le résultat renvoyé est sous la forme d'un json

### website-insash-database

Database en postgres version 16\
Contient la table member, article et article_author (contient les auteurs de chaque article)\
Exposé sur le port 5432 pour accéder à la DB le temps du Dev, *ENLEVER CA EN PROD*

#### Table document

Parmi les éléments notables
- `UUID` identifiant unique de chaque document, pas destiné à être connu des visiteurs
- `type` project ou article
- `slug` identifiant du document dans l'URL mais aussi dans les dossiers des images, identifiant du projet "que verront les utilisateurs"
- `content` nom du fichier markdown contenant le contenu du document stocké sur l'api
- `image` chemin sur l'api menant à l'image d'en tête du document

#### Table membre

- `UUID` idem que pour article
- `website/github/linkedin/mail` pas obligatoire mais dans ce cas mettre '' lors de l'ajout d'un nouveau membre, pas NULL

#### Table article_author

Lie un membre et un article par leurs UUID respectifs, sachant qu'un article peut être écrit par plusieurs auteurs et inverse

### Procédure d'ajout d'un article

1. Ajouter l'article à la DB :\
    a. NE PAS REMPLIR : UUID, content, slug (ils seront mis automatiquement à partir du titre)\
    b. Dans 'type', mettre soit 'project' soit 'article'\
    c. Mettre le nom de l'image dans 'image' : après insertion, il va automatiquement remplacé cette colonne par {slug}/{nom de l'image}\
    d. Remplir le reste normalement
2. Lier les auteurs au document via leurs UUID dans document_author
3. Dans l'api dans /assets/markdown/article ou /project, déposer le md du document sous la forme {slug}.md (ça doit correspondre au 'content' du document inséré !)\
Il sera donc accessible via https://adresseApi/markdown/article/slugdemonarticle (ou /project/slugdemonprojet)
4. Dans l'api dans /assets/images/articles ou /project, créer un dossier avec le nom {slug} et déposer dedans l'image d'en tête nomImage.jpg\
C'est dans ce dossier que seront toutes les images liées à l'article : celle en en tête mais aussi celles dans l'article\
Elles seront donc toutes accessible via https://adresseApi/images/article/slugdemonarticle/nomImage.jpg (cela doit correspondre à 'image' du document inséré dans la DB !)

Normalement c'est bon

### Procédure d'ajout d'un membre

1. Ajouter le membre à la DB :\
a. L'UUID est généré automatiquement\
b. Remplir le reste normalement, citation/website/github/linkedin/mail peuvent être NULL
c. Pour l'avatar, mettre le nom du fichier simplement, ex: avatar-karen.jpg
2. Mettre dans l'api dans assets/images/members le fichier avatar-karen.jpg

Normalement c'est bon

### Point à améliorer/discuter/demander conseils

- la sécurité générale (SQL injection, Path Traversal... pour ne citer que les plus probables)
- mettre le vrai certificat https pour l'api, ou juste dans le serveur NGINX/apache/jsp qui gèrera le tout une fois en production
- mettre l'api sur le même docker en production que le frontend, comme conseillé par sylvain
- améliorer la procédure d'ajout d'article/de membre via une page de création d'article ptet
- bugs pas encore repérés ?


- ne pas chercher les articles par auteur via le surname mais autre chose (exemple un slug créé ?)
- commenter comme il faut
- rédiger une documentation complète de l'API, la database et le site web (chaque composant) (avec docusaurus ou autre)