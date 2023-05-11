FROM mongo:latest
RUN mkdir /config
WORKDIR /config
COPY mongosetup.js .
COPY mongosetup.sh .
RUN chmod +x /config/mongosetup.sh
CMD [ "bash", "-c", "/config/mongosetup.sh"]