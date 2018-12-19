# Reducr

version: 1.0.0

Please make sure to install nvm: https://github.com/creationix/nvm

# General Notes:
- node project runs in port 9001 but you can map the port to a different port
  when running the docker image.
- there's no need to use http2 for this
- I am using eslint node recommended rules but they are very loose
- Testing the util module functions only.
- The port this server is using is always going to be 9001 as it's meant
  to be ran in a docker container which can be mapped to a different port
  by docker

# Installation
```
nvm install && nvm use
npm install
```

# Usage

## Test
Testing is done with jest
```
npm run test
```

## Lint code
```
npm run lint
```

## Run for dev environments
```
npm run dev
```

## Run in Production mode
```
npm run start
```

# Using with docker

## build
```
docker build -t iancl/reducr .
```

## run
for production
```
docker run -p 9090:9001 -e "NODE_ENV=production" iancl/reducr
```

for development
```
    docker run -p 9090:9001 iancl/reducr
```