
  
  

# Company website and dashboard frontend

## Product Description

This module contains the ChymeraVR company website and dashboard frontend for advertisers and developers

The frontend dashboard consumes backend APIs which achieve following purposes:

*  **Chymera User** - API for generic chymera user

* Registration, login and access control

* Payments and payouts

* Test devices for testing VR ads

*  **Advertiser**

* Managing campaigns, adgroups and ads

* Targeting module

* Bidding and budgeting

* Analytics dashboard to understand ad performance

*  **Publisher**

* Managing apps and ad placements

* Managing earnings

## Technologies used

* Frontend framework - React

* Routing - React Router

* CSS framework - React Semantic (***unfortunately the support has been discontinued and hence UI might not render correctly in this project***)

* Bundling - webpack

## Getting started

* Install docker

`bash install_docker.sh `

* From project root, build docker image

`sudo docker build -t websiteui . `

* Starting docker container

* For dev purpose

* Start container with DEBUG='True'

`sudo docker run -d --net=host --name websiteui-container -e DEBUG='True' websiteui`

* For product purpose

* Start container without DEBUG='True'

`sudo docker run -d --net=host --name websiteui-container -e websiteui`

* Now dev server is live at :3000 port

* For testing, access backend APIs through postman using collection https://www.getpostman.com/collections/d468561862a4da8c770d

## Understanding project components

### Semantic

React semantic is the CSS framework of Semantic library built for ReactJS. It uses LESS for defining CSS properties. semantic/src/themes/default contains the default theme values. Custom values specific to chymera has been written in semantic/src/themes/chymera.

*semantic/src/definition* contains the CSS definitions, that uses variables defined in themes. 
*semantic/src/semantic.less* imports the CSS definitions
*semantic/src/theme.config* imports themes for specific UI elements
*semantic/gulpfile.js* manages build

 For changing CSS values of existing elements change the theme.
 For introducing or editing elements, create it in definitions.
To build use `gulp build`

### React and react router
*src/index.js* is the entry point for the project

## License

This project is licensed under the MIT License

  

## Authors

* Rubbal Sidhu

* Sushil Kumar - [Github](https://github.com/sushilmiitb)