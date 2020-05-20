 ![Bildschirmfoto 2020-05-17 um 00 52 52](https://user-images.githubusercontent.com/45396540/82131756-e6417100-97d8-11ea-9aff-df5728be28d9.png)

# KNOW YOUR CITY
Take a look at the current running version of the application [here](https://sopra-fs20-group-19-client.herokuapp.com/map).

This is a SoPra Project from Students at the University of Zurich, realized in FS20.

## Introduction

KNOW YOUR CITY is a complement to ubiquitous map services as Google Maps. It should help people find places of everyday life: 

- Fountains
- Fireplaces
- Toilets
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
- Heroku: Used to build, run and deploy the application

Server:
- SpringBoot: Used to build the REST service with Spring
- MongoDB: Database used to store all location and user data
- Gradle: Used to build the application
- Postman: Used to test the API calls
- SonarQube: Used to analyse code and test quality


## High-level components

- [Map](https://github.com/SOPRAFS20Group19/SOPRA_FS20_Group19_Client/blob/master/src/components/map/Map.js) controls the most important component of the application: the map. It handles the current position of the user and stores the chosen filters if the user wants to see just some specific location types.
- [MapService](https://github.com/SOPRAFS20Group19/SOPRA_FS20_Group19_Client/blob/master/src/components/map/MapService.js) is called by Map and renders the map itself by accessing the Google Maps API and our MongoDB database to get coordinates and informations about our locations which it shows to the user with the help of Map Markers and Popups after clicking on such a Marker.
- [AppRouter](https://github.com/SOPRAFS20Group19/SOPRA_FS20_Group19_Client/blob/master/src/components/shared/routers/AppRouter.js) controls which components are rendered for each specific URL path. Like that it handles a crucial part of the logic of the application. For example it calls [MapRouter](https://github.com/SOPRAFS20Group19/SOPRA_FS20_Group19_Client/blob/master/src/components/shared/routers/MapRouter.js) if the map should be displayed. MapRouter then controls which components are rendered for each specific URL path in connection with the map.
- [App](https://github.com/SOPRAFS20Group19/SOPRA_FS20_Group19_Client/blob/master/src/App.js) is the main class of the file, rendering AppRouter. 

## Launch & Deployment

As a new developer, first zip download or git clone our repository.

For your local development environment you'll need Node.js >= 8.10. You can download it [here](https://nodejs.org). All other dependencies including React get installed with:

### `npm install`

This has to be done before starting the application for the first time (only once).

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console. It is recommended to use Google Chrome.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>

Every push to the master branch automatically redeploys the heroku application and thus is "going live". If you don't want that you have to push to another branch because every push to the master is automatically a new release.

## Illustrations

To get access to all the functionalities of KNOW YOUR CITY you have to register first. Afterwards you can login:
<img width="860" alt="Registration" src="https://user-images.githubusercontent.com/45396540/82139659-d7cf7580-9829-11ea-906d-0b7c1530316b.PNG">

On the map you can see fountains, fireplaces, recycling stations, public toilets, ping pong tables and benches:
 ![Bildschirmfoto 2020-05-17 um 00 52 52](https://user-images.githubusercontent.com/45396540/82131756-e6417100-97d8-11ea-9aff-df5728be28d9.png)

If you click on a location on the map an information window pops up. You can click on the button to get more information about this location:
<img width="958" alt="PopUp" src="https://user-images.githubusercontent.com/45396540/82139668-eb7adc00-9829-11ea-8ee6-c1eebf0be3bd.PNG">

At the location information page you can rate the location and chat with other users about it:
<img width="960" alt="LocationInfo" src="https://user-images.githubusercontent.com/45396540/82139669-ef0e6300-9829-11ea-836b-2a5c142c9645.PNG">


By clicking at the "Profile options" button at the sidebar of the map, you can access your profile page. You can see your friends list and your favorite locations:
<img width="949" alt="UserProfile1" src="https://user-images.githubusercontent.com/45396540/82139673-f59cda80-9829-11ea-86b9-15466067e1ea.PNG">


By clicking at one of your friends, you get to their profile where you can chat with each other:
<img width="907" alt="FriendChat" src="https://user-images.githubusercontent.com/45396540/82139675-f9c8f800-9829-11ea-93b3-c2fb55cf780a.PNG">


You can edit your profile and add a profile picture:
<img width="951" alt="EditPicture" src="https://user-images.githubusercontent.com/45396540/82139677-fd5c7f00-9829-11ea-8d79-a713ff6ecc53.PNG">


To view all the current users of KNOW YOUR CITY you can click on the users button at the sidebar:
<img width="959" alt="Users" src="https://user-images.githubusercontent.com/45396540/82139680-00f00600-982a-11ea-8a5f-64c5661051da.PNG">


If you only want to see some location types, you can use the filter:
![Filter2](https://user-images.githubusercontent.com/45396540/82493381-26119c80-9ae8-11ea-8548-7d0a869c157b.png)


If you are wandering around and you discover a new location which is not stored in our database yet, you can add the location by clicking at the plus at the sidebar:
<img width="946" alt="AddLocation" src="https://user-images.githubusercontent.com/45396540/82139685-09e0d780-982a-11ea-902d-d50db1849e5c.PNG">


You can get your coordinates or set them manually:
<img width="949" alt="AddPingpong" src="https://user-images.githubusercontent.com/45396540/82139871-6abcdf80-982b-11ea-94d0-ccae1f458155.PNG">


You can add some additional information to help other users decide if they want to go to that location or not:
<img width="954" alt="InfosPingpong" src="https://user-images.githubusercontent.com/45396540/82139689-11a07c00-982a-11ea-8423-e96a84f77699.PNG">


## Roadmap 

As a new developer you could add the following functionalities: 

- Users could upload pictures of the locations for a better understanding of how this place looks.

- The database could be extended to bigger regions than just the city of Zurich.

- Users could filter for their favorite locations on the map.


## Authors and acknowledgement

KNOW YOUR CITY was built as a SoPra Project at the University of Zurich in FS20.

Idea and realization by group 19: Lena, Luca, Luis, Maximilian, Tim.

Contact: knowyourcity@gmx.ch

We thank the whole SoPra team for their tipps and tricks, especially our tutor Anja.

Thanks to grillstelle.ch for providing us the fireplace database.

Thanks to Stadt Zürich for the free and public data access of fountains, recycling stations and toilets databases.

Thanks to Lucas Pelloni for the template.

## License 

This project is licensed under the Apache 2.0 License - see the [License.md](LICENSE) file for details.


