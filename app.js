var app = angular.module('recipeApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: "index.html"
        })
        .when('/recipe-list',{
            templateUrl: "list.html"
        })
        .when('/recipe',{
            templateUrl: "recipe.html"
        })
        .otherwise({
            redirectTo: "/"
        })
});
app.controller('mainController', function($log){
    $log.info("I am ready to load!");
});
