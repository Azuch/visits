FROM node/alpine

WORKDIR /usr/app

COPY ./package.json .
RUN npm start
COPY . .

CMD ["npm", "start"]