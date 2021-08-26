FROM alpine
COPY ./src ./application
COPY ./package.json .
RUN apk add --update nodejs npm
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "node" ]
CMD ["--experimental-json-modules", "application/main/server.js"]
