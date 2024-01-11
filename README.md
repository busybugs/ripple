### Build from source

We don't have an `Docker` image (yet). First ensure you have [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io/installation) installed. If you are open to use the binary distribution of `pnpm`, there is an easy way to install and manage `Node.js` versions:

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
cd build && node index.js
```

Feel free to refer to the [@sveltejs/adapter-node](https://kit.svelte.dev/docs/adapter-node) docs to configure `HOST`, `PORT` environment variables, etc. further.

