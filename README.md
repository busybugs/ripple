### Build from source

We provide a `Docker` image for building `ripple` from source. To build and run the image ensure you have [Docker](https://docs.docker.com/get-docker/) installed and follow:

```bash
# Replace <tag> with a tag of your choice
docker build -t ripple:<tag> .

# You can try listing your images
docker images

# Run the image. Replace <tag> with the tag you chose earlier
docker run -d -p 3000:3000 ripple:<tag>

# => Visit http://localhost:3000 to see the app running
```

If you don't want to use `Docker`, ensure you have [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io/installation) installed. If you are open to use the binary distribution of `pnpm`, there is an easy way to install and manage `Node.js` versions:

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

### References

- Empty...