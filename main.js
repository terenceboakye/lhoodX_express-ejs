/*
*@desc     :   This is a simple express.js server  
*               
*
*@author  :   Terence Boakye Mensah
*              Teiman-Accra
*
*@book_used:    get_programming_with_nodejs
*                  (johnattan wexler)
*               listing 8.1 & 9.5 & 9.7 
*
*@date     :   Tues, 14th January, 2025
*              time(06:35:00 PM)
*
*/
const port = 3000, 
    express = require("express"),
    app = express();
   
    homeController = require("./controllers/homeController")
    errorController = require("./controllers/errorController")
    layouts = require("express-ejs-layouts");

    //defining middleware functions 
    app.use((req, res, next) => {
    console.log(`Request made to : ${req.url}`);
    next();

});    

/*
*@desc  :   The routes' callback functrion is stored 
*           in the homeController.js file assigned
*@func  :   sendReqParam("controller/homeController.js")
*@added :   listing 9.7ff 
*/ 
app.get("/items/:vegetable", homeController.sendReqParam );  


/*
*@desc  :   The routes' callback functrion is stored 
*           in the homeController.js file assigned
*@func  :   respondWithName("controller/homeController.js")
*@added :   listing 10.2 
*/ 
app.get("/name/:myName", homeController.respondWithName);   


/*
*@desc  :   Capturing a pposted data from 
*           the request body in main.js.
*  
*list   :   listing 9.5 
*
*
*@date  :   wed, 15th January, 2025
*              time(11:50:00PM).
*/
app.use(
    express.urlencoded({ 
        extended: false
    })
);

//make known to express>js to use the package(view/layouts.ejs)
app.use(layouts);

//Parses URL encoded data
app.use(express.json());

//add a templating engine
app.set("view engine", "ejs");

//registered to express.js -- main.js("Controllers/errorController.js")
app.use(errorController.respondNoPageFound);
app.use(errorController.respondInternalError);

app.use(express.static("./public"));

app.listen(port, () => {
    console.log(`The Express server has started and`+
             `is running at http://localhost:${port}`);
});    

