FROM node:latest AS backend
WORKDIR /app/backend
COPY expressjs/ .
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]