FROM node:13-slim as builder

RUN npm install -g @angular/cli@9.0.7

WORKDIR /app
COPY app/ .

RUN npm install && ng build --prod

FROM nginx:1.15

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/localhorst/ /usr/share/nginx/html/
RUN chown -R nginx /usr/share/nginx/html/

EXPOSE 80