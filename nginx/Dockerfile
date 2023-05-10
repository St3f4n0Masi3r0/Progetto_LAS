FROM nginx:alpine
# Use the official Nginx image as the base image


# Copy the website files to the appropriate directory in the container
COPY . /usr/share/nginx/html

# Copy the configuration file into the container
COPY conf /etc/nginx

# Remove the default configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Expose port 80 to the host
EXPOSE 80
