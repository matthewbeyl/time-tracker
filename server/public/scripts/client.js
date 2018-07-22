// console.log('JS is GO');
const app = angular.module('timeApp', ['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        contoller: 'HomeController as vm'
    }).when( '/entries', {
        templateUrl: '/views/entry.html',
        controller: 'EntryController as vm'
    }).when('/manage', {
        templateUrl: '/views/manage.html',
        controller: 'ManageController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});