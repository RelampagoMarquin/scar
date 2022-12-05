FROM node:16-alpine

WORKDIR /api/

COPY ./*.json .

RUN npm install

COPY . .

RUN npx prisma migrate dev

EXPOSE 3030

CMD [ "npm", "run", "start:dev"]
