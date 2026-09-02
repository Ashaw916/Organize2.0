# Builder stage
FROM node:26-alpine AS builder
WORKDIR /app

# Copy package files first to leverage layer caching
COPY package*.json ./
COPY client/package*.json ./client/

# Install dependencies
RUN npm install

# Copy the rest and build the client
COPY . .
RUN npm run build

# Production image
FROM node:26-alpine
WORKDIR /app
ENV NODE_ENV=production

# Install only production deps
COPY package*.json ./
RUN npm install --production

# Copy built client and server files
COPY --from=builder /app/client/build ./client/build
COPY . .

EXPOSE 3001
CMD ["node", "server.js"]
