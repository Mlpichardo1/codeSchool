/* global angular*/
(function() {
var app = angular.module('carRental', []);

app.directive('carAvail', function() {
    return {
        restrict: 'E',
        templateURL: 'car-avail.html'
    };
});

app.controller('RentalController', function(){
    this.products = cars;
});

var cars = [
    {
        name: 'Ford',
        image: "https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202017/Magazine-Articles/April/Google-Auto-Profile-images-2017/PRF-496",
        type: 'SUV',
        description: '7 passenger vehicle w/ Navigation and heated seats.',
        price: 119.95,
        canPurchase: true,
        available: 3
    },
    {
        name: 'Honda',
        image: "https://www.leithcars.com/assets/stock/colormatched_01/white/640/cc_2018hoc010002_01_640/cc_2018hoc010002_01_640_wa.jpg",
        type: 'Sedan',
        description: '5 passenger vehicle w/ Navigation and 30mpg Highway',
        price: 99.95,
        canPurchase: true,
        available: 5

    }];
    
})();

