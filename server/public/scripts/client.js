console.log('JS is GO');

const app = angular.module('timeApp', []);

app.controller('EntryController', ['$http', function ($http) {
    let self = this;
    self.entryList = [];

    self.addEntry = function (entryToAdd) {
        console.log('Adding Entry: ', entryToAdd);
        $http({
            method: 'POST',
            url: '/entries',
            data: entryToAdd,
        }).then(function (response) {
            console.log(response);
            self.getEntries();
        }).catch(function (error) {
            console.log('Error: ', error);
        })
    }

    self.getEntries = function () {
        $http({
            method: 'GET',
            url: '/entries',
        }).then(function (response) {
            console.log(response);
            self.entryList = response.data;
        }).catch(function (error) {
            console.log('Error', error);
        })
    }

    self.getEntries();
}])