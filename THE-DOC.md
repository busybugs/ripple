### Ripple: Resource Flow Optimizer - THE DOC

**DISCLAIMER: WIP (WORK IN PROGRESS)**

#### 1. Introduction

We are `Busy Bugs`, a team of 4 enthusiastic students from *Assam down town University*, *Guwahati*. `Ripple` is first and foremost a tool to make resource utilization efficient which in the process reduces waste and costs.

#### 2. Problem Statement

- Traditional resource optimization techniques have stood the test of time and have been used for decades. But there are limitations to everything. Traditional methods often rely on manual data collection and analysis, limiting their ability to provide real-time insights and most importantly, optimize dynamically. There are other non-trivial issues like scalability challenges and integration issues that become a very big hurdle in the optimization phase.
- We aim to make this process a little bit easier by offering a way to optimize the workflow to make it more efficient, flexible, cost-effective, easy to use and tweak *(important! needs are unique and relative.)* while providing real-time insights and suggestions.
- This goal of our project aligns with United nation's Sustainable Development Goal no. 12: `Responsible Consumption and Production`.
- We (`Busy Bugs`) live in an area which has been witnessing immense growth during the last few years. This is a good thing but the amount of waste that is being generated and the resource misuse in the process is extremely high. This was one of the key challenges we wanted to tackle with `ripple` and our primary motivation.

#### 3. Implementation

We are very cautious of over-engineering. We have chosen our tools by striking a fine balance between velocity, flexibility, reliability and control.

##### 3.1. Infrastructure

- Our front-end is essentially a self-contained `SvelteKit` app that can independently scale. With the help of [Docker](https://www.docker.com/) we can easily create an image and host it on [Cloud Run](https://cloud.google.com/run?hl=en), which is arguably the best choice for us as it has no additional infrastructure maintenance.
- For database, we went with the all time reliable [Postgres](https://www.postgresql.org/) and [Cloud SQL for Postgres](https://cloud.google.com/sql/postgresql?hl=en) to host our database.
- [Redis](https://redis.io/) on [Memorystore](https://cloud.google.com/memorystore?hl=en) fulfill all our caching needs.
- [Compute Engine](https://cloud.google.com/compute?hl=en) instance is used to host our `API` server. This choice was simple cause we wanted full control over the system for our `API` server.
- other `GCP` tools that make this project possible *(and well integrated!)*...

##### 3.2. Design
- Our base design revolved around: items, formulae, properties and constraints.
- Users can create categories and arrange them. They can create items under each category and define properties on them. <br>
  e.g. Item "Mango" with properties *color*, *shape* etc.
- There are two "super categories" - raw materials and processed items.
- Processed items are raw materials that have altered properties based on result of a formula application.
- Users can create concrete and generic formulae that define a way through which an item should be processed. <br>
  e.g. Formula "Machine" that lets say sorts the mangoes according to their color.
- Users can create constraints that work as guard during the optimization process. <br>
  e.g. Constraint *cost* should be lower than ₹ 1 lakh per month.
- Users can create a base PERT-like diagram to define their flow.
- Users click the optimize button and the solution goes through all the constraints and tries to modify the flow in a way that reaches all goals. If the goal is unreachable, it prompts the user to modify the constraints or lower the production target.
- Users can create observation pins in the flow and connect their hardware with `ripple` to get real-time analytics while `ripple` makes suggestions to modify the architecture and more.
- Visual scripting is a very big part of what `ripple` is + Plugin API is crucial.
- This is not an exhaustive list of all the nuts and bolts!

##### 3.3. Front-end

- `Svelte + SvelteKit` - Our development velocity is highest with [SvelteKit](https://kit.svelte.dev/).
- `Tailwind + shadcn-svelte` - [shadcn/ui](https://ui.shadcn.com/) is absolutely fantastic. We use the `Svelte` port [shadcn-svelte](https://www.shadcn-svelte.com/) for this project which provides us with very customizable components which never slows us down!
- `TypeScript` - We like our app typed!
- other libraries and tools that make our features possible like [d3](https://d3js.org/) for visualization and more...

##### 3.4. Back-end

Our backend is broadly divided into two parts: a `SvelteKit` adapter server and our `API` server.

- `Node.js` - This is what runs the auto generated adapter server.
- `Actix Web` - Our backbone, the `API` server.
- `Tensorflow + Official Rust bindings` - The heart of our project.
- `gRPC` - The service connector.
- `Postgres` - The database.
- other tools that make this project possible...

#### 4. Feedback / Testing / Iteration

As of the time of writing, the solution is not yet ready for exposure considering its not "complete to test". But we have a baseline for testing in the future.

- End-to-end testing will be enabled by [Playwright](https://playwright.dev/).
- User interaction is the most important part. We can start small by letting the team members build mockup workflows and optimize them. For a wider range of testing, our friends, juniors and seniors in college are ready to deploy our solution for their in-ground businesses and startups. This will give us real world exposure and invaluable insights to the team.
- Challenges are a part of every new venture. `Ripple` is no exception. One of the hardest challenge we faced so far was data sourcing to train our models. Our needs were very diverse. At the end of the day, we started collecting data from multiple sources throughout *Guwahati*. We collected data on resources, constraints, historical, estimated forecast and more and tabulated then in the format we desire. `Data Lakes` are a key part of our solution.

#### 5. Success and Completion of Solution

Our solution is far from complete. So this will have to wait.

#### 6. Scalability / Next Steps

Our solution is far from complete. So this will have to wait.
