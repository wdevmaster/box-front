FROM node:15.12.0

COPY package-lock.json /app/
COPY package.json /app/

WORKDIR /app

RUN npm install

CMD npm run dev

EXPOSE 4000
