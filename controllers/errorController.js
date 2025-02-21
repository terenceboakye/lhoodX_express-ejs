/*
*@desc      :   Controls the error handling across the routes 
*               and pages during requests 
*
*@author    :   Terence Boakye Mensah
*               Teiman-Accra
*
*@book_used :   get_programming_with_nodejs
*                  (johnattan wexler)
*               listing 11.3 
*
*@date      :   Sat, 8th February, 2025
*               time(4:35:00 PM)
*
*/

//Catch all errors-- internal Server Error
exports.respondInternalError = (error, req, res, next) => {

    res.statusCode = 500;
    let errorCode = res.statusCode;

    console.log(`ERROR occurred: ${error.stack}`);
    res.sendFile(`${errorCode}.html`, { root: "public" });

    next(error);

}

//error-- no page found
exports.respondNoPageFound = (req, res) => {

    res.statusCode = 404;
    let errorCode = res.statusCode;
    res.sendFile(`${errorCode}.html`, { root: "public" });

   // res.send(__dirname);
}