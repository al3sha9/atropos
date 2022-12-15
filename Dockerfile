FROM node
WORKDIR /Desktop/solid/daisy
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run" , "dev"]