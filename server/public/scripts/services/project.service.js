app.service('ProjectService', ['$http', function ($http) {
    let self = this;
    // console.log('Project Service Started');

    self.entryList = { result:[]};
    self.projectList = { result: []};
    
    self.addEntry = function (entryToAdd) {
        console.log('Adding Entry: ', entryToAdd);
        $http({
            method: 'POST',
            url: '/',
            data: entryToAdd,
        }).then(function (response) {
            console.log(response);
            self.getEntries();
        }).catch(function (error) {
            console.log('Error: ', error);
        })
    }

    self.addProject = function (projectToAdd) {
        console.log('Adding Project: ', projectToAdd);
        $http({
            method: 'POST',
            url: '/',
            data: eprojectToAdd,
        }).then(function (response) {
            console.log(response);
            self.getProjects();
        }).catch(function (error) {
            console.log('Error: ', error);
        })
    }

    self.getEntries = function () {
        // console.log('in getEntries');
        $http.get('/entries').then(function (response) {
            console.log(response.data);
            self.entryList.result = response.data;
        }).catch(function (error) {
            console.log('Error', error);
        })
    }

    self.getProjects = function () {
        $http.get('/projects').then(function (response) {
            console.log(response);
            self.projectList.result = response.data;
        }).catch(function (error) {
            console.log('Error', error);
        })
    }

    self.deleteEntry = function (id) {
        console.log('delete clicked');
        
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