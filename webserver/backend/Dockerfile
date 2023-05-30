FROM node:latest AS backend
WORKDIR /app/backend
COPY expressjs/ .
RUN npm install
CMD ["node", "server.js"]