var app = angular.module('TopCryptocurrencies.controllers',[]);

app.controller('AppCrtlr',function($scope, $http){
    console.log("Hello world from controller");
    
    $http.get('/cryptocurrencies').then((res) => {
        console.log("I got the data which I requested");
        //console.log(res.data);
        $scope.nameFilter;
        $scope.currencies = res.data;
        
    });
    
    //$scope.currencies = currencies;
});