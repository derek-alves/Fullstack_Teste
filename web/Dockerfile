FROM node:15.0.1-alpine as build-step

WORKDIR /usr/src/web

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

FROM nginx:1.19.3-alpine

COPY --from=build-step /usr/src/web/build /usr/share/nginx/html