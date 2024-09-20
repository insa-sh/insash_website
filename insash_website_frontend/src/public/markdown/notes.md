# Construction de base
https://dev.to/janirefdez/create-a-rest-api-with-go-1j52

# Connexion à une DB
https://dev.to/janirefdez/connect-rest-api-to-database-with-go-d8m

# Sécuriser
https://blog.stackademic.com/building-a-secure-api-with-golang-42b563d42c0d

# Todo

- gen_random_uuid ()

- ajouter un slug aux articles généré automatiquement par le titre
- trier par date côté serveur (paramètres dans l'URL)
    ex : https://github.com/DYSTOpyy?tab=repositories&q=aka&type=&language=&sort=name
    sort := r.URL.Query().Get("sort")
- rechercher dans le titre/description pas le contenu (même chose ?)
ASTUCE POUR CHERCHER & HIGHLIGHT TEXTE https://dev.to/this-is-angular/search-and-highlight-text-feature-using-angular-l98
- sanitize input (parameterized query SQL)

- UUID aléatoires généré automatiquement côté DB

- filtrer par tag côté serveur
- uniformiser les logs partout 
   ex : utils.LogEvent(fmt.Sprintf("%s - %s (%s) 200 GetArticle", r.Method, r.URL.Path, r.RemoteAddr))
- rendu des fichiers markdown (faire coté angular pour styliser) (feuille de style global à angular)
- organiser les articles/images