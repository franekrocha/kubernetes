FROM ubuntu:latest

# Install GNOME desktop environment
RUN apt update && apt install ubuntu-desktop
# Add a normal user
ARG USER=ubuntu
RUN useradd -m $USER
RUN adduser $USER sudo
USER $USER
WORKDIR /home/$USER
# Enable remote desktop and remote control
grdctl rdp enable

