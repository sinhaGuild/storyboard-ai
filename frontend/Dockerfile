# Build step #1: build the React front end
FROM node:lts-alpine as build-step
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json  ./
COPY ./src ./src
COPY ./public ./public
COPY ./dist ./dist
# ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm install
# RUN npm run build
CMD [ "npm", "run", "build" ]
# RUN npm run dev

# Build step #2: build an Caddy container
FROM caddy:alpine
EXPOSE 80
EXPOSE 443
COPY --from=build-step /app/dist /usr/share/caddy