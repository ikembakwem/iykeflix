FROM node:14.19.1-alpine 

WORKDIR /app 
COPY package*.json ./
RUN npm install --only=production
COPY ./ ./
CMD ["npm", "start"]

