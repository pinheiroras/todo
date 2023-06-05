FROM node:20.2.0 as builder
#RUN mkdir /app/node_modules && chown node:node /app/node_modules
WORKDIR '/app'

USER node
COPY --chown=node:node package.json package-lock.json* ./
#RUN npm install vite@latest

RUN npm i
COPY --chown=node:node . .
RUN npm run build
RUN chown -R node:node /app/node_modules

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html