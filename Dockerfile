# Use an official Node.js runtime as the base image
FROM node AS frontend

# Set the working directory to /app
WORKDIR /app

# Copy the frontend source code to the container
COPY app/ /app/

# Install frontend dependencies and build the app
RUN npm install
# RUN npm run build

# Expose port 3000 for the React app
EXPOSE 3000

# Run the React app
CMD ["npm", "start"]
