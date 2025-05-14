# Use the official Node.js image with Bun runtime
FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN bun run build

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["bun", "run", "start", "--port", "5000"]
