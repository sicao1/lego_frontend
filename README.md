# Capstone: The Lego Terrarium - Frontend  #
This Django application manages Lego sets, allowing users to track details of their Lego collection, wishlist items, and more.

## Installing ##
* Fork this repository
* Clone your forked repository
* npm i

This application fetches from an external API - https://rebrickable.com/api/.  
To generate an API Key - https://rebrickable.com/register/

## Approach ##
The frontend architecture was constructed leveraging a suite of technologies for the best user experience. React serves as the foundational framework, enhanced by the robust state management capabilities of Redux-Toolkit and Redux-Thunk. The interface design was crafted using Tailwind CSS, complemented by supplementary dependencies such as Heroicons and Paginate, enriching the visual aesthetics and functionality of the application.

Routing within the frontend was orchestrated by React Router Dom, facilitating smooth navigation and interaction throughout the site. Furthermore, the integration of React Redux Provider bolsters the application's efficiency in managing and propagating state across components.

Initially established on React, the codebase underwent refactoring, particularly focusing on enhancing form functionality by migrating to React Redux-Toolkit.

To ensure a seamless deployment and hosting experience, the frontend was deployed on Netlify, maintaining a separate Git repository specifically designated for the backend, fostering a modular and efficient development and deployment workflow.

## Screenshots ##
<img width="800" alt="lego terrarium landing page" src="https://i.imgur.com/aGOjkeV.png" >

## User Stories ##
* As a user I want to be able to keep track of all the lego sets I own and see them online in one place so that I can easily update, add and delete my collections list.
* As a user I want to easily be able to add new sets to the list.
* As a user I want to be able to edit the details of a set if needed.
* As a user I want to be able to sort the list.

## Planned Features ##
* Add a wishlist section
* Add user login
* Have the ability to share the collection list with other users of the app
* Have the ability to post on a community forum

## Helpful Links ##
Live site: https://jazzy-pothos-85e300.netlify.app/<br />
Github backend: https://github.com/sicao1/lego_backend
