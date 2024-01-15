**DISCLAIMER: WIP (Work in Progress)**

### 1. About the project

Please refer to [THE-DOC.md](/THE-DOC.md) which has all the details of the project covered in a comprehensible format.

### 2. Build from source

To build and run the `Docker` image ensure you have [Docker](https://docs.docker.com/get-docker/) installed. Afterwards, run:

```bash
# Replace <tag> with a tag of your choice
docker build -t ripple:<tag> .

# You can try listing your images
docker images

# Run the image. Replace <tag> with the tag you chose earlier
docker run -d -p 3000:3000 ripple:<tag>

# => Visit http://localhost:3000 to see the app running
```

If you don't want to use `Docker`, ensure you have [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io/installation) installed. If you are open to using the binary distribution of `pnpm`, there is an easy way to install and manage `Node.js` versions:

```bash
# Install pnpm
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Install latest version of Node.js
pnpm env use --global latest
```

Once done, you can:

```bash
# Build the project
pnpm install && pnpm build

# Run the built project
pnpm start

# => Visit http://localhost:3000 to see the app running
```

### 3. Deploy to Cloud Run

You need to prepare a `Docker` image to deploy to `Cloud Run`. First, ensure you have the [gcloud](https://cloud.google.com/sdk/docs/install) CLI installed. Afterwards, run:

```bash
# Login to your GCP account and setup Docker
gcloud auth login --no-launch-browser
gcloud auth configure-docker

# Select your project. Replace <project-id> with your project ID
gcloud config set project <project-id>

# Push the image to GCR. Replace <tag> with the tag you chose earlier during the build and <project-id> with your project ID
docker tag ripple:<tag> gcr.io/<project-id>/ripple:<tag>
docker push gcr.io/<project-id>/ripple:<tag>

# Clean dangling images
docker image prune
```

### 4. References

- Empty...
