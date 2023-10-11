# Use the Fedora base image
FROM fedora

# Create the /app directory
RUN mkdir /app

# Copy the script.sh file to the /app directory inside the container
COPY script.sh /app/

# Assign execute permissions to the script.sh file
RUN chmod +x /app/script.sh

# Set the entrypoint to the script.sh file
ENTRYPOINT ["/app/script.sh"]
