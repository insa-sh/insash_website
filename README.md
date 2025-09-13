# Bienvenue sur le repo du site web du Club Info

## Infos pratiques:
- Lien du site : https://insash.org/
- Ce repository contient 2 sites biens organisés : 
    - Le frontend (avec `Angular`)
    - Le backend (avec `Strapi`)
- Fonctionne avec `Docker`
- Nécessite des .env pour le lancer correctement


# développement

## Commande pour lancer en mode développement
`docker compose --profile dev up`

## Etapes à suivre pour que tout fonctionne en mode développement
- Installer et lancer Docker
- Créer tous les .env nécessaires (voir les fichiers .env.example dans chaque dossier)
- Commenter la ligne `url: "http://localhost/insash-website-data",` dans `server.ts` **NE PAS PUSH CETTE MODIF**
- Lancer la commande `docker compose --profile dev up`
- Ouvrir Strapi : http://localhost:1337/ et créer un compte, remplir la DB pour avoir des données de test
- Dans paramètres>rôles>public autoriser **find** et **findone** pour rendre la DB publique et autoriser le front du site à y accéder