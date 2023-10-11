#!/bin/bash

# Function to handle SIGTERM (does nothing)
do_nothing() {
  # Do nothing
  :
}

# Set the trap to call the 'do_nothing' function when SIGTERM is received
trap 'do_nothing' SIGTERM

# Your script logic goes here
while true; do
  # Do some work here...
  echo "Hello world!"
  sleep 3
done
