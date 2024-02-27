FROM node:16.14-alpine3.15 as angular

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM httpd:alpine3.15

WORKDIR /usr/local/apache2/htdocs

COPY --from=angular /app/dist/angular-project .

