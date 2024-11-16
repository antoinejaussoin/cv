FROM node:20.15.0-alpine AS node

ENV NODE_ENV=production
ENV NETLIFY=true
ENV ASTRO_SITE=https://www.jaussoin.com


WORKDIR /home/node/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm i --include=dev

COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json
COPY ./astro.config.ts ./astro.config.ts
COPY ./tailwind.config.ts ./tailwind.config.ts
COPY ./percy.json ./percy.json
COPY ./eslint.config.mjs ./eslint.config.mjs
COPY ./prettier.config.mjs ./prettier.config.mjs
COPY ./cli ./cli
COPY ./favicons.data.json ./favicons.data.json
COPY ./public ./public

RUN npm run generate:favicons
RUN npm run build-docker

FROM nginx:alpine

COPY --from=node /home/node/app/dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]