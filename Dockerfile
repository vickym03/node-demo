# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Expose a port (if your Node.js application listens on a specific port)
# EXPOSE 3000

# Define the command to start your Node.js application
CMD ["npm", "run", "start"]
