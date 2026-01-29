# 1. Use official Node.js base image
FROM node:18-alpine

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy rest of the application
COPY . .

# 6. Expose application port
EXPOSE 3000

# 7. Start the application
CMD ["node", "server.js"]
