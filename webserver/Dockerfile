# Base image for the backend
FROM node:latest AS backend

# Set the working directory for the backend
WORKDIR /app/backend

# Copy the backend files
COPY backend/ .

# Install backend dependencies
RUN npm install

# Expose the backend port
EXPOSE 3000

# Start the backend server
CMD ["node", "server.js"]


# Base image for the frontend
FROM node:latest AS frontend

# Set the working directory for the frontend
WORKDIR /app/frontend

# Copy the frontend files
COPY frontend/package*.json ./
COPY frontend .

# Install frontend dependencies
RUN npm install
RUN npm run build

# Use Nginx as the web server for serving the frontend
FROM nginx:latest

# Copy the built frontend files to the Nginx web server directory
COPY --from=frontend /app/frontend/dist/las-app /usr/share/nginx/html

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the web server port
EXPOSE 8080
