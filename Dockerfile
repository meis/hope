FROM node:9.10.0-alpine
RUN apk add -U util-linux

WORKDIR /app
COPY package.json package-lock.json /app/

RUN npm install

COPY . /app
RUN npm run build

CMD ["npm", "start"]
