#
# Builder stage.
# This state compile our TypeScript to get the JavaScript code
#
FROM node:alpine3.11

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

WORKDIR ./dist/src

COPY ./build.config.json ./../config.json

CMD node ./server.js

