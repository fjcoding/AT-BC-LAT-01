FROM alpine:latest
WORKDIR /usr/src/app
COPY ./package.json .
RUN apk add --update nodejs npm
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "app/src/main/server.js" ]