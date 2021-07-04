"use strict";
exports.__esModule = true;
var logger = function (req, res, next) {
    var url = req.url;
    console.log(url + " was visited");
    next();
};
exports["default"] = logger;
