# OpenShift Service Mesh

Easy way to install OpenShift Service Mesh operators in an online OpenShift cluster.

```
oc apply -f https://raw.githubusercontent.com/franekrocha/kubernetes/master/openshift-servicemesh/01-subscriptions.yaml
```

Wait until the installation is succeeded:

```
oc get csv -n openshift-operators
```

Create the Control Plane:

```
oc apply -f https://raw.githubusercontent.com/franekrocha/kubernetes/master/openshift-servicemesh/02-controlplane.yaml
```
