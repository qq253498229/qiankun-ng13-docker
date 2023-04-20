FROM node:18.16.0-alpine3.17 as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY .yarnrc .
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx:1.23.4-alpine
ENV TZ=PRC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone



RUN echo "server { \
    listen       80; \
    add_header Access-Control-Allow-Origin *;\
    add_header Access-Control-Allow-Headers X-Requested-With;\
    add_header Access-Control-Allow-Methods GET,POST,OPTIONS;\
    server_name  localhost; \
    root /usr/share/nginx/html; \
    index index.html index.htm; \
    location / { \
        alias /usr/share/nginx/html/;\
        try_files \$uri \$uri/ /index.html; \
    } \
}" > /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/app0-main /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
