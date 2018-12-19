FROM node:10

# create directory
RUN mkdir -p /usr/server/reducr/
WORKDIR /usr/server/reducr/

COPY package*.json /usr/server/reducr/

RUN npm install --production

# bundling app source
COPY . /usr/server/reducr/

EXPOSE 9001
CMD [ "npm", "start" ]