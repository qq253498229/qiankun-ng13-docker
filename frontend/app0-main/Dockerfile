FROM node:18.0.0-alpine3.15 as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --registry --registry=https://registry.npmmirror.com
COPY . .
RUN npm run build

FROM nginx:1.21.6-alpine
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
