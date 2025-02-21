/*
*@desc      :   Contains the logics of the server which includes the   
*               includes the routes callback functions and processes 
*               the request body
*
*@author    :   Terence Boakye Mensah
*               Teiman-Accra
*
*@book_used :   get_programming_with_nodejs
*                  (johnattan wexler)
*               listing 9.6  
*
*@date      :   Tues, 18th January, 2025
*               time(11:05:00 PM)
*.
*/


/*
*@desc  :   This function handles the GET /vegetable/ 
*           routes request
*
*@note  :   This function will be exported to the main.js
*/
exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
}

/*
*@desc  :   This function render a view from a controller 
*
*@note  :   This function will be exported to the main.js 
*           and also respond with a custom EJS view
*
*@list  :   listing 10.2
*
*@date  :   fri, 7th February, 2025
*               time(11:20:00 PM)
*/
exports.respondWithName = (req, res)=>{
    let paramsName =  req.params.myName;
    res.render("index", {name: paramsName});
    res.render("layout")
   
}

