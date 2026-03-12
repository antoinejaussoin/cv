FROM node:22-alpine as Node

WORKDIR /home/node/app
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN chown -R node:node /home/node/app

USER node

RUN npm ci

COPY --chown=node:node ./src ./src
COPY --chown=node:node ./public ./public
COPY --chown=node:node ./astro.config.mjs ./astro.config.mjs
COPY --chown=node:node ./tsconfig.json ./tsconfig.json

RUN npm run build

FROM nginx:alpine

COPY --from=Node /home/node/app/dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]