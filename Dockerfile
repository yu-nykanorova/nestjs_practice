FROM node:24-alpine
LABEL mainteiner="Some DEV"

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm i --production

COPY dist/ ./dist

