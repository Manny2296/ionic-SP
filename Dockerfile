
# build stage
FROM node:alpine as build-stage
COPY . ./ionic-SP
WORKDIR /ionic-SP

RUN npm install
COPY . .
RUN npm run build

EXPOSE 8100 35729
CMD ["ionic", "serve"]


