# Startup Project
- cd Progetto_Las/
- chmod ugo+rw -R monitoring/grafana # allow grafana to read data volume
- docker-compose up -d # start all container detached


# Useful commands
- docker-compose up # start all container with log
- docker-compose down # stop all container
- docker-compose down --rmi all -v --remove-orphans # stop all container and remove images
