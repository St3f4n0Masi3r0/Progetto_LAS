FROM node:latest


EXPOSE 4200

WORKDIR /usr/src/app/

COPY package*.json ./


#RUN npm install -g @angular/cli

RUN npm install

COPY . .

CMD [ "npm", "start" ]
#RUN ng serve