#!/bin/bash

# Define environment variables (update these as needed)
export NODE_ENV=production
export DATABASE_URL="mysql://root:P@ssW0rd231@localhost:3306/DBName"


# Install project dependencies
echo "Installing dependencies..."
npm install

# Run Prisma migrations
echo "Running Prisma migrations..."
npm run migrate

# Build the Nuxt application
echo "Building the Nuxt application..."
npm run build

# Start the Nuxt application
echo "Starting the Nuxt application..."
npm run dev

echo "Deployment complete!"
