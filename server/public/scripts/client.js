console.log('JS is GO');
const app = angular.module('timeApp', ['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '/views/entry.html',
        contoller: 'EntryController as vm'
    }).when( '/entry', {
        templateUrl: '/views/entry.html', //either works
        controller: 'EntryController as vm'
    }).when('/manage', {
        templateUrl: 'views/manage.html', //either works, we learned this way
        controller: 'ManageController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});

// app.controller('EntryController', ['$http', function ($http) {
//     let self = this;
//     self.entryList = [];

    // self.addEntry = function (entryToAdd) {
    //     console.log('Adding Entry: ', entryToAdd);
    //     $http({
    //         method: 'POST',
    //         url: '/entries',
    //         data: entryToAdd,
    //     }).then(function (response) {
    //         console.log(response);
    //         self.getEntries();
    //     }).catch(function (error) {
    //         console.log('Error: ', error);
    //     })
    // }

    // self.getEntries = function () {
    //     $http({
    //         method: 'GET',
    //         url: '/entries',
    //     }).then(function (response) {
    //         console.log(response);
    //         self.entryList = response.data;
    //     }).catch(function (error) {
    //         console.log('Error', error);
    //     })
    // }

    // self.deleteEntry = function (id) {
    //     console.log(id);
    //     $http({
    //         url: `/entries/${id}`,
    //         method: 'DELETE'
    //     }).then(function (response) {
    //         console.log(response);
    //         self.getEntries();
    //     }).catch(function (error) {
    //         console.log('Error on Delete', error)
    //     })
    // }


    // self.getEntries();
// }])