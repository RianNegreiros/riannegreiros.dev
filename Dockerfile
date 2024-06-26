# syntax=docker/dockerfile:1

FROM node:20.15.0

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Expose the port the app runs on.
EXPOSE 3000

# Run the application.
CMD npm run dev
