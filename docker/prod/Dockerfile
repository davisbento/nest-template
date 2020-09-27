FROM node:12-alpine

WORKDIR /app
COPY . /app

RUN npm ci
RUN npm run release

FROM node:12-alpine

WORKDIR /app

COPY --from=0 /app/dist /app/dist
COPY --from=0 /app/package.json /app
COPY --from=0 /app/package-lock.json /app
COPY --from=0 /app/.git /app

RUN npm ci --production

EXPOSE 8080

CMD node dist/main.js
