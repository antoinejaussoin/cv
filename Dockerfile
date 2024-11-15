FROM node:20-alpine AS node

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm i

COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json
COPY ./astro.config.mjs ./astro.config.mjs
COPY ./tailwind.config.cjs ./tailwind.config.cjs
COPY ./public ./public

RUN npm run build

FROM nginx:alpine

COPY --from=node /home/node/app/dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]