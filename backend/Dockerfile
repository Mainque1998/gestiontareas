# Use an official Node.js runtime as a parent image
FROM node:19

# Set the working directory in the container
WORKDIR /usr/src/app/backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]