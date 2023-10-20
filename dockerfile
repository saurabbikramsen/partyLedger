# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container

# Copy the rest of your application's source code to the container

COPY . .

# Install dependencies
RUN npm install


# Expose port 8888 for the Nest.js app
EXPOSE 8888


# Start the Nest.js application
CMD ["npm", "start", "dev"]
