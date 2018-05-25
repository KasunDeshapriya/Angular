var app = angular.module("Myapp", ['Myapp.controllers', 'ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
    when("/Person", {
        templateUrl: "partials/Person.html",
        controller: "PersonController"
    }).
     when("/", {
         templateUrl: "partials/PeopleList.html",
         controller: "MainController"
     }).

     when("/About", {
         templateUrl: "partials/About.html",
         controller: "AboutController"
     }).
     when("/Contact", {
         templateUrl: "partials/Contact.html",
         controller: "ContactController"
     })
}]);