FROM registry.redhat.io/ubi9/skopeo:9.3-5

# Copy the 'oc-mirror' binary to the container
COPY oc-mirror /tmp/oc-mirror

# Grant execution permission to 'oc-mirror'
RUN chmod +x /tmp/oc-mirror
