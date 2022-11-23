FROM node:16-alpine

WORKDIR /web/

COPY ./*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
