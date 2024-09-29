# ---[frontend build]--- #
FROM node:22 AS build
WORKDIR /build
COPY ./insash_website_frontend/ .
RUN npm install
RUN npm run build --omit=dev

# ---[serve]--- #
FROM nginx:1.27.1
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /build/dist/insash_website/ /var/www/website
RUN chown -R www-data:www-data  /var/www/
CMD nginx -g "daemon off;"
