FROM alpine:latest
EXPOSE 3000
RUN apk add --update nodejs npm
COPY ./package.json .
RUN npm install
COPY ./src ./app
ENTRYPOINT [ "node" ]
CMD [ "--experimental-json-modules", "app/main/server.js" ]
