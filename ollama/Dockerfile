FROM ollama/ollama:latest

# Start the ollama service in the background and download the model
RUN ollama serve & && sleep 30 && ollama pull deepseek-r1:7b-qwen-distill-q4_K_M
