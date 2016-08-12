var app = angular.module('recipeApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: "index.html"
        })
});
app.controller('mainController', function($log){
    $log.info("I am ready to load!");
});
