FROM node:20

WORKDIR /app

COPY package*.json .
# RUN npm cache clean --force && npm install

RUN npm install

COPY . .

EXPOSE 5173

# ENV NODE_OPTIONS="--max-old-space-size=4096"

# ENTRYPOINT npm run dev
 
ENTRYPOINT ["npm", "run", "dev"]