# MVC-example
Simple example of MVC architecture. Project based and modyfied of https://github.com/utimur/mvc
## Description of MVC
Here is simple diagram of components of MVC pattern in C4 notation. Each component is responsible for a different part of the processes. In MVC pattern you have 3 layers / components:
1. **Controller.** *Processes HTTP requests, extracts parameters from requests. Used to implement the loose coupling between interface and logic layers*
2. **Model.** *Stores business logic and logic of working with entities, works directly with the database. Essentially the core of the application*
3. **Component.** *UI. Renders content based on data from the model. Users see and work directly with the view*

![mvc](https://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/Merkush1/MVC-example/plantUMLBranch/umlSrc/mvc-component-diagram.iuml)

## Run app
1. Install the necessary packages with `npm install`
2. Install express and handlebars with `npm i express hbs`
3. To run app just use `npm start`





