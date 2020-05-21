# Blockchain based Crowd-Funding Platform Dev-Project

## Translations
- [한국어](/translations/ko.md) 🇰🇷

## Team members
- 정휘선, 이은미, 전새희, 이동호, 금정민, 최다올

## Architecture
![](./static/images/architecture.png)

## Pre-Installed
The following libraries / Framework are pre-installed.

### React.js and core framework
- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Babel](https://babeljs.io)
- [Express.js](https://expressjs.com)

### GraphQL
- [Apollo Client](https://github.com/apollographql/apollo-client)
- [React Apollo](https://github.com/apollographql/react-apollo)
- [React Apollo Hooks](https://github.com/trojanowski/react-apollo-hooks)
- [GraphQL Code Generator](https://graphql-code-generator.com)

### State Management
- [MobX 5](https://github.com/mobxjs/mobx)
- [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree)

### Styling
- [styled-components](https://www.styled-components.com)

### Asset Management
- [next-optimized-images](https://github.com/cyrilwanner/next-optimized-images)

### Deployment
- [Serverless Framework](https://serverless.com)
- [AWS Lambda](https://aws.amazon.com/lambda)
- [Dotenv](https://github.com/motdotla/dotenv)

## 1. Getting Started
```bash
# Clone the repository
$ git clone https://github.com/halsaram/project-www.git
$ cd project-www

# Flush git project
$ rm -rf .git

# Initialize your own git project
$ git init

# Install yarn
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update && sudo apt-get install yarn

# Install dependencies
$ yarn

# Start development server
$ yarn dev
```

## 2. Folder Structure
### 5. `/src/pages`
File-based page routing. All the aliases are handled through `export {default}`, but all implementations are done inside `/services`.
```typescript
export { default } from '~/services/home/pages/index'
```
> I've separated the code with service module for future scalability. Separate common elements used in page implementations such as `/queries`, `/helpers`, `/components` by service name [https://softwareengineering.stackexchange.com/questions/338597/folder-by-type-or-folder-by-feature](https://softwareengineering.stackexchange.com/questions/338597/folder-by-type-or-folder-by-feature)

If you set `generatePageAliases` to `true` in `options.json`, this boilerplate traverse all `/services/**/pages/**.tsx` and generate page aliases in `/pages` automatically when `yarn dev`.

## 3. Development
```bash
# Start development server
$ yarn dev
```

## 4. Build
```bash
# Build server and client bundles
$ yarn build
```

## 5. Error
```bash
# wapack error
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## Quorum-examples
### Running with Docker

1. Install Docker (https://www.docker.com/get-started)
    - If your Docker distribution does not contain `docker-compose`, follow [this](https://docs.docker.com/compose/install/) to install Docker Compose
    - Make sure your Docker daemon has at least 4G memory
    - Required Docker Engine 18.02.0+ and Docker Compose 1.21+
    
1. Download and run `docker-compose`
   ```sh
   curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" > ./docker-compose
   sudo mv ./docker-compose /usr/bin/docker-compose
   sudo chmod +x /usr/bin/docker-compose
   ```
   ```sh
   git clone https://github.com/jpmorganchase/quorum-examples
   cd quorum-examples
   docker-compose up -d
   ```
1. By default, the Quorum network is created with Tessera privacy managers and Istanbul BFT consensus. To use Raft consensus, set the environment variable `QUORUM_CONSENSUS=raft` before running `docker-compose`
   ```sh
   QUORUM_CONSENSUS=raft docker-compose up -d
   ```
1. Run `docker ps` to verify that all quorum-examples containers (7 nodes and 7 tx managers) are **healthy**
1. Run `docker logs <container-name> -f` to view the logs for a particular container
1. __Note__: to run the 7nodes demo, use the following snippet to open `geth` Javascript console to a desired node (using container name from `docker ps`) and send a private transaction
   ```sh
   $ docker exec -it quorum-examples_node1_1 geth attach /qdata/dd/geth.ipc
   Welcome to the Geth JavaScript console!

   instance: Geth/node1-istanbul/v1.7.2-stable/linux-amd64/go1.9.7
   coinbase: 0xd8dba507e85f116b1f7e231ca8525fc9008a6966
   at block: 70 (Thu, 18 Oct 2018 14:49:47 UTC)
    datadir: /qdata/dd
    modules: admin:1.0 debug:1.0 eth:1.0 istanbul:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

   > loadScript('/examples/private-contract.js')
   ```
1. Shutdown Quorum Network
   ```sh
   docker-compose down
   ```

---
## 프론트 기획 및 개발(KumJungMin)

<center><img src="/git_image/front.png"></center>
