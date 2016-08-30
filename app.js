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
app.factory("recipe_list_data", function($http, $q){
    var service = {};
    var baseUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=french&limitLicense=false&number=25';
    var url = '';
    //var searchTerm = '';


    // var makeUrl = function(){
    //     url = baseUrl + searchTerm;
    // };

    // service.setSearch = function(s){
    //     searchTerm = s;
    //     makeUrl();
    // };

    service.callSpoonacularData = function(){
        var defer = $q.defer();
        $http({
            url: 'spoonacular_results.js',
            method: 'get',
            dataType: 'json'
            // headers: {
            //     "Content-Type": "X-My-Favorite-Field"
            // }
        }).then(function(response){
            console.log("success");
            data = response.data;
            defer.resolve(data);

        }, function(response){
            defer.reject(reponse);
        });
        return defer.promise;
    };
    return service;
});
app.controller('mainController', function($http, $log, recipe_list_data){
    $log.info("I am ready to load!");

    this.spoonacularData = [];
    this.recipeTitle = '';
    this.recipeCookTime = 0;
    this.recipeImageFilename = '';
    this.recipeImageUrl = "https://spoonacular.com/recipeImages/" + this.recipeImageFilename;

    this.getSpoonacularData = function(){
        var self = this;
        recipe_list_data.callSpoonacularData().then (function (data){
            $log.log('success: ', data);
            self.spoonacularData = data.results;
            $log.log('spoonacularData: ', self.spoonacularData);
        });
    };

    this.getSpoonacularData();
});

