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
app.controller('mainController', function($http, $log){
    $log.info("I am ready to load!");

    this.spoonacularData = [];
    this.recipeTitle = '';
    this.recipeCookTime = 0;
    this.recipeImageFilename = '';
    this.recipeImageUrl = "https://spoonacular.com/recipeImages/" + this.recipeImageFilename;

    this.getSpoonacularData = function(){
        var self = this;
        $http({
            url: 'spoonacular_results.js', //'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=french&limitLicense=false&number=25'
            method: 'get',
            dataType: 'json'
        }).then (function (response){
            $log.log('success: ', response);
            self.spoonacularData = response.data.results;
            $log.log('spoonacularData: ', self.spoonacularData);
        });
    };

    this.getSpoonacularData();
});

