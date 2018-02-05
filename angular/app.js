/* global angular*/
(function() {
var app = angular.module('carRental', []);

app.controller('RentalController', function(){
    this.products = cars;
});

var cars = [
    {
        name: 'Ford',
        image: "http://st.motortrend.com/uploads/sites/10/2015/11/2016-ford-explorer-xlt-suv-angular-front.png?interpolation=lanczos-none&fit=around|300:199",
        type: 'SUV',
        description: '6 passenger vehicle w/ Navigation and heated seats.',
        price: 119.95,
        canPurchase: true,
        soldOut: false
    },
    {
        name: 'Honda',
        image: "https://www.leithcars.com/assets/stock/colormatched_01/white/640/cc_2018hoc010002_01_640/cc_2018hoc010002_01_640_wa.jpg",
        type: 'Sedan',
        description: '5 passenger vehicle w/ Navigation and 30mpg Highway',
        price: 99.95,
        canPurchase: true,
        soldOut: false
    }];
    
})();