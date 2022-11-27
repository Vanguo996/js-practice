FROM node

RUN mkdir -p /home/server

WORKDIR /home/server

COPY . /home/server/

EXPOSE 80

CMD npm install express && node server.js