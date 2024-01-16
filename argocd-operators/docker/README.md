# docker

To build the docker image.

1. Download the oc-mirror plugin:

```
wget https://mirror.openshift.com/pub/openshift-v4/x86_64/clients/ocp/latest/oc-mirror.tar.gz
```

2. Extract the archive:

```
tar xvzf oc-mirror.tar.gz
```

3. Build and tag the image:

```
podman login redhat registry.redhat.io
podman build . -t quay.io/<your-user>/mirror:1.0
```

4. Push the image:

```
podman login quay.io
podman push quay.io/<your-user>/mirror:1.0
```

Source: [Installing the oc-mirror OpenShift CLI plugin](https://docs.openshift.com/container-platform/4.14/installing/disconnected_install/installing-mirroring-disconnected.html#installation-oc-mirror-installing-plugin_installing-mirroring-disconnected)

