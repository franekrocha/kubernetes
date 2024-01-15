# module-mirror

Required values:

* **namespace**: Namespace in which the mirroring Jobs will run. A job is executed per catalog. **Default:** paas-mirror.
* **image**: Name of the image that will execute the Job. It needs to contain the "skopeo" tool. **Default:** registry.redhat.io/ubi9/skopeo:9.3-5.
* **catalog**: Public catalog from which we are going to mirror the images.. **Default:** registry.redhat.io/redhat/redhat-operator-index:v4.12.
* **ocMirror**: URL where to get the "oc-mirror" plugin binary. **Default:** https://mirror.openshift.com/pub/openshift-v4/x86_64/clients/ocp/4.12.9/oc-mirror.tar.gz.
* **path**: Path in the private repository to which the images will be uploaded, it can be a docker registry or a folder within a docker registry. **Default:** artifactory.apps.mirror.sandbox658.opentlc.com/caas-ocp4/olm-4.12/extras/registry.redhat.io.

Catalogs with the different versions of the technologies that we are going to install:

* **catalogs.servicemesh-v2-2-3**: Name and version of the catalog to be mirrored..
* **catalogs.servicemesh-v2-2-3.packages.servicemeshoperator**: Package or list of packages to be included in this catalog.
* **catalogs.servicemesh-v2-2-3.packages.servicemeshoperator.channel**: Operator channel from which the operator version is to be obtained. **Default:** stable.
* **catalogs.servicemesh-v2-2-3.packages.servicemeshoperator.version**: Specific version to be installed of this operator. WARNING: Make sure that version exists in the public catalog. **Default:** 2.2.3-0.

