FROM node:latest
WORKDIR /app

RUN npm install -g @angular/cli@16

COPY package.json ./package.json
RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "1000"]
