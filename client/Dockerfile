# Use the official Node.js image from Docker Hub
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Create .next directory if it doesn't exist
RUN mkdir -p .next

# Change ownership of the app directory to node user
RUN chown -R node:node /app

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["npx", "next", "start", "--port", "5000"]
