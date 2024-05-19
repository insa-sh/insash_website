FROM node:latest
WORKDIR /app

# on installe angular GLOBALEMENT donc c'est OK
RUN npm install -g @angular/cli@16

COPY package*.json ./
RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]
