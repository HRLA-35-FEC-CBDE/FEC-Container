# REI Co-op Nav Bar Mockup Client + Server (Docker + Redux)

This is the repo for the client and server.
Mockup of the REI store page's navigation bar and search functionality. Now with Docker and Redux!

## Table of Contents

- [REI Co-op Nav Bar Mockup Client (Docker + Redux)](#rei-co-op-nav-bar-mockup-client-docker--redux)
  - [Table of Contents](#table-of-contents)
  - [Microservices](#microservices)
  - [Usage](#usage)
  - [Requirements](#requirements)

## Microservices

1. [Proxy](https://github.com/HRLA-35-FEC-CBDE/REI-Nav-Proxy)
2. [Nav](https://github.com/HRLA-35-FEC-CBDE/REI-Nav)
   1. [Dockerized](https://github.com/HRLA-35-FEC-CBDE/REI-Nav-Container)
3. [Body](https://github.com/HRLA-35-FEC-CBDE/Brandon_body)
4. [Reviews](https://github.com/HRLA-35-FEC-CBDE/chris_reviews)

## Usage

1. Fork and clone repo(s)
2. Install dependencies
   1. `npm scripts`
   2. `docker-compose up` for Dockerized services
3. Start up each microservice
4. Start the proxy server
   1. Only connects the navigation bar and the product view.
   2. Other modules are images.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 12.16.2 (This is the safest version to use.)
- etc
