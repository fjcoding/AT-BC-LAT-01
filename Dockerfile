FROM alpine
RUN apk add --update nodejs npm
COPY ./package.json .
RUN npm install
EXPOSE 3000
COPY ./src ./app
ENTRYPOINT [ "node" ]
CMD ["--experimental-json-modules", "app/main/server.js"]
