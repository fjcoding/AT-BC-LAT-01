FROM alpine:latest
COPY ./package.json .
RUN apk add --update nodejs npm
RUN npm install
COPY ./src ./app
EXPOSE 3000
ENTRYPOINT [ "node" ]
CMD [ "--experimental-json-modules", "app/main/server.js" ]