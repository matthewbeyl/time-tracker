app.service('ProjectService', ['$http', function ($http) {
    let self = this;
    console.log('Project Service Started');

    self.entryList = {
        result: []
    }
    
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

    self.deleteEntry = function (id) {
        console.log(id);
        $http({
            url: `/entries/${id}`,
            method: 'DELETE'
        }).then(function (response) {
            console.log(response);
            self.getEntries();
        }).catch(function (error) {
            console.log('Error on Delete', error)
        })
    }
}])