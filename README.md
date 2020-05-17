 <img width="348" alt="Bildschirmfoto 2020-05-17 um 00 34 39" src="https://user-images.githubusercontent.com/45396540/82131545-91046000-97d6-11ea-8377-6851606d97d3.png"> 
 
![Bildschirmfoto 2020-05-17 um 00 52 52](https://user-images.githubusercontent.com/45396540/82131756-e6417100-97d8-11ea-9aff-df5728be28d9.png)

# KNOW YOUR CITY
A SoPra Project at the University of Zurich in FS20.

## Introduction

KNOW YOUR CITY is a complement to ubiquitous map services as Google Maps. It should help people find places of everyday life: 

- Fountains
- Fireplaces
- Recycling Stations 
- Table Tennis Spots
- Beautiful Benches

Our target audience are people who want to spend a nice summer evening in Zurich with BBQ and a round of table tennis. But don't forget about the others: A normal resident could find a new recycling station here. Or what if a stressed businessman has to pee urgently while travelling? KNOW YOUR CITY will show him the nearest toilet for sure.

Furthermore, the application is a remote meeting place for people who want to get to know their city better. You can: 

- rate locations
- leave a comment about a location
- chat with your friends
- take a look at your friends favorite locations
- add a new location if it's missing in the database.

Have fun!

## Technologies

Client:
- React: Used to design the User Interface with JavaScript

Server:
- SpringBoot: Used to build the REST service with Spring
- MongoDB: Database used to store all location and user data
- Gradle: Used to build the application
- Postman: Used to test the API calls
- SonarQube: Used to analyse code and test quality


## High-level components

- [Map](https://github.com/SOPRAFS20Group19/SOPRA_FS20_Group19_Client/blob/master/src/components/map/Map.js) controls the most important component of the application: the map. It handles the current position of the user and stores the chosen filters if the user wants to see just some specific location types.
- [MapService](https://github.com/SOPRAFS20Group19/SOPRA_FS20_Group19_Client/blob/master/src/components/map/MapService.js) is called by Map and renders the map itself by accessing the Google Maps API and our MongoDB database to get coordinates and informations about our locations which it shows to the user with the help of Map Markers and Popups after clicking on such a Marker.
- [AppRouter](https://github.com/SOPRAFS20Group19/SOPRA_FS20_Group19_Client/blob/master/src/components/shared/routers/AppRouter.js) controls which components are rendered for each specific URL path. Like that it handles part of the logic of the application. For example it calls [MapRouter](https://github.com/SOPRAFS20Group19/SOPRA_FS20_Group19_Client/blob/master/src/components/shared/routers/MapRouter.js) if the map should be displayed. MapRouter then controls which components are rendered for each specific URL path in connection with the map.
- [App](https://github.com/SOPRAFS20Group19/SOPRA_FS20_Group19_Client/blob/master/src/App.js) is the main class of the file, rendering AppRouter. 

## Launch & Deployment

dd

## Illustrations (RAUS IM SERVER!)

dd

## Roadmap 

dd

## Authors and acknowledgement

A SoPra Project at the University of Zurich in FS20.

Idea and realization by group 19: Lena, Luca, Luis, Maximilian, Tim.

Contact: knowyourcity@gmx.ch


## License 

This project is licensed under the Apache 2.0 License - see the [License.md](LICENSE) file for details.





- Read the React [Docs](https://reactjs.org/docs/getting-started.html)
- Do this React [Getting Started](https://reactjs.org/tutorial/tutorial.html) Tutorial (it doesn’t assume any existing React knowledge)
- Get an Understanding of [CSS](http://localhost:3000) and [HTML](https://www.w3schools.com/html/html_intro.asp)!

Once you have done all of this, in the template there are two main external dependencies that you should look at:

- [styled-components](https://www.styled-components.com/docs)
  It removes the mapping between components and styles (i.e. external css files). This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it
* [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) Declarative routing for React being a collection of navigational components that compose declaratively with your application. 

<!-- ## IDE Recommendation
As a student, you have the possibility with [JetBrains](https://www.jetbrains.com/student/) to obtain a free individual license and have access to several IDEs. 
We recommend you to use [WebStorm](https://www.jetbrains.com/webstorm/specials/webstorm/webstorm.html?gclid=EAIaIQobChMIyPOj5f723wIVqRXTCh3SKwtYEAAYASAAEgLtMvD_BwE&gclsrc=aw.ds) for your front-end. 
Once you have downloaded and installed it, you can add the following WebStorm plugins: 
> Go to Preferences > Plugins > Browse Repositories and look for: 
* [styled-components](https://plugins.jetbrains.com/plugin/9997-styled-components) (provides coding assistance like CSS Highlighting for Styled Components)
* [prettier](https://plugins.jetbrains.com/plugin/10456-prettier) (a smart code formatter)
* [Material Theme UI](https://plugins.jetbrains.com/plugin/8006-material-theme-ui) (Material Theme for Jetbrains IDEs, allowing a total customization of the IDE including Themes, Color Schemes, Icons and many other features.)

Feel free to use other IDEs (e.g. [VisualStudio](https://code.visualstudio.com/)) if you want.  -->

## Prerequisites and Installation

For your local development environment you'll need Node.js >= 8.10. You can download it [here](https://nodejs.org). All other dependencies including React get installed with:

### `npm install`

This has to be done before starting the application for the first time (only once).

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console (use Google Chrome!).

### `npm run test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).


>Thanks to Lucas Pelloni for the template
