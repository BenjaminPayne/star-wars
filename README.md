# Star Wars

## Setup

### Requirements
Ensure `npm` is [installed on the local system](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

In the root directory of this project, run the command:

```
npm i
```

This will install the required node modules to run this project.

### Running

To start the application execute the following command:

```
npm run start
```

This will start a HTTP server at the following address: [http://localhost:4200/](http://localhost:4200/)

### Tests

The Angular tests can be ran via: 

```
npm run test
```

This works best with Chrome installed on your machine, but it's not a requirement.


## Challenges

### Planet specific routing

Early on I knew I wanted to split the planet list and planet detail aspect of this task into the routes `/planets` and `/planets/:id`

This would allow me to decouple the list of planets from the detail of an individual planet.

Originally I was planning on having the name of the planet be the `:id` in the route e.g. `localhost:4200/planets/tatooine`, but the API only supported retrieving planets via an arbitrary number field, e.g. `/api/planets/1`

A simplified response from `api/planets` looked as such:

```
// GET /api/planets

{
  ...
  results": [
      {
          "name": "Tatooine", 
          "rotation_period": "23", 
          "orbital_period": "304", 
          "diameter": "10465", 
          "climate": "arid", 
          "gravity": "1 standard", 
          "terrain": "desert", 
          "surface_water": "1", 
          "population": "200000", 
          "residents": [
              "https://swapi.py4e.com/api/people/1/", 
              "https://swapi.py4e.com/api/people/2/",
              ...
          ], 
          "films": [
              "https://swapi.py4e.com/api/films/1/", 
              "https://swapi.py4e.com/api/films/3/",
              ...
          ], 
          "created": "2014-12-09T13:50:49.641000Z", 
          "edited": "2014-12-20T20:58:18.411000Z", 
          "url": "https://swapi.py4e.com/api/planets/1/"
      },
      ...
  ]   
}
```

As this response lacked the numerical identifier field as a property, it was hard for me to construct a URL to query a specific planet for.

I resolved this issue by doing some string manipulation of the `url` property in order to derive the correct identifier.

This allowed the component at the `planets/:id` route to query the API for a response on initialisation.

Ideally this identifier would have been provided in the planet response object.


## Design Decisions

I've split the project into the following seperate sections:

* Core
* Screens
* Shared

This is to aid in the management of angular components and modules.

_**Core**_ is designed to hold various application wide services or models that are only to be defined once. For example, the API service and the various response models are defined within this module.

_**Screens**_ is designed to contain the various different sections of the application. If we were to introduce a `Vehicles` section within the application, then it would exists along side the `Planets` section.
The aim is to allow for the lazy loading of modules, components and routes, as well allowing the grouping of specific components and services that pertain to only that section.

_**Shared**_ is designed to hold components that may be common between each of the various screens.

## Future Improvements

I'd like to improve the test coverage for the various components, pipes and services.
Instead of just planets, adding support for viewing the other resources exposed by the API would be nice.
