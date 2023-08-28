# Use an official Python runtime as the base image
FROM python AS backend

# Set the working directory to /app
WORKDIR /app

# Copy the backend source code to the container
COPY . /app/

# Install backend dependencies
RUN pip install -r requirements.txt

# Expose port 5020 for the Flask app
EXPOSE 5020

# Run the Flask app
CMD ["python", "app.py"]
