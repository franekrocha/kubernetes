#!/bin/sh

# Start ollama in the background
ollama serve &

# Wait for ollama to start
sleep 10

# Pull the model
ollama pull 
