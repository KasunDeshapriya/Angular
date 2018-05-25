angular.module("Myapp.controllers", [])
.controller("PersonController", function ($scope, PersonService) {
    $scope.message = "Person";
    $scope.AddPerson = function () {
        PersonService.AddPersonToDB($scope.person);
    }
})
.controller("MainController", function ($scope, PersonService) {
    debugger
    $scope.message = "PlayerList";
    PersonService.GetPersonFromDB().then(function (d) {
        debugger
        $scope.PlayerList = d.data.list;
    })

})

//.controller("AboutController", function ($scope) {
//    $scope.message = "About";
//})
//.controller("ContactController", function ($scope) {
//    $scope.message = "Contact";
//})
.factory("PersonService", ["$http", function ($http) {
    var fac = {};

    fac.AddPersonToDB = function (person) {
        $http.post("/Person/AddPerson", person).success(function (response) {
            alert(response.status);
        })
    }
    fac.GetPersonFromDB = function () {
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
        return $http.get(baseUrl+"/Person/GetPerson");
    }
    return fac;
}])
;
