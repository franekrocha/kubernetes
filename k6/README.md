# k6

This is an example of how to run a "k6" load test inside Kubernetes.

## Procedure

Create the "k6" Namespace:

```
kubectl create namespace
```

Create the "script" ConfigMap:

```
kubectl create configmap script --from-file script.js -n k6
```

Create the "k6" Job:

```
kubectl create -f job.yaml
```

Delete the "k6" Job:

```
kubectl delete job k6
```
