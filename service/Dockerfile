FROM node:16.14.2

WORKDIR /app

ENV PORT=3000

COPY package.json package-lock.json /app/

RUN npm install && npm cache clean --force

COPY ./ ./

CMD ["npm","run","start"]
