# Base image for the backend
FROM node:latest AS backend

# Set the working directory for the backend
WORKDIR /app/backend

# Copy the backend files
COPY expressjs/ .

# Install backend dependencies
RUN npm install

# Expose the backend port
EXPOSE 3000

# Start the backend server
CMD ["node", "server.js"]