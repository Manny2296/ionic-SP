
# build stage
FROM node:alpine as build-stage
COPY . ./ionic-SP
WORKDIR /ionic-SP

RUN npm install
COPY . .
RUN npm run build

EXPOSE 8100 35729

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /ionic-SP/www/ /usr/share/nginx/www/
COPY nginx.conf /etc/nginx/nginx.conf
# ADD cors_support /etc/nginx/cors_support
CMD ["nginx", "-g", "daemon off;"]


