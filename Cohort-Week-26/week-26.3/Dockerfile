FROM node:23-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
RUN npm install typescript

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start" ]