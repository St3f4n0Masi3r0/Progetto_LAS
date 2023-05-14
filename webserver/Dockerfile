FROM node:latest as build

WORKDIR /usr/src/app/

COPY test_app/ .

# Build the Angular application
RUN npm run build --prod

# Use Nginx as the base image for exposing the Angular app
FROM nginx:latest

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the Angular build output
COPY --from=build /usr/src/app/dist/test_app /usr/share/nginx/html

# Expose port 80
EXPOSE 80
