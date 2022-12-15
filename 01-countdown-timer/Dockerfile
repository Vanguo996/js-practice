FROM node:12-alpine

RUN mkdir /app

WORKDIR /app

COPY . /app

EXPOSE 9090

CMD npm install express && node server.js