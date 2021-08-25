FROM alpine:latest
COPY ./src ./app
COPY ./package.json .
RUN apk add --update nodejs npm
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "node" ]
CMD [ "--experimental-json-modules", "app/main/server.js" ]