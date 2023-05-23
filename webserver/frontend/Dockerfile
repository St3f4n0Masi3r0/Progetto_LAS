
FROM node:latest AS frontend
WORKDIR /app/frontend
COPY angular/ .
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=frontend /app/frontend/dist/las-app /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080