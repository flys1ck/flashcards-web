FROM node:16
WORKDIR /usr/flashcards-web
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "serve"]
