# Use an official Node.js runtime as a parent image
FROM node:19 AS builder

# Set the working directory in the container
WORKDIR /usr/src/app/frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build

# Use a smaller image for serving the Angular app
FROM nginx:alpine

# Copy the built Angular app to the nginx public directory
COPY --from=builder /usr/src/app/frontend/dist /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 4200

# Define the command to run nginx
CMD ["nginx", "-g", "daemon off;"]