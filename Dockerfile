FROM node:latest
WORKDIR /app

# on installe angular GLOBALEMENT donc c'est OK
RUN npm install -g @angular/cli@16

COPY package*.json ./

# on met dans un script les deux commandes car il ne peut y avoir qu'un CMD dans un dockerfile
CMD ["bash", "start.sh"]