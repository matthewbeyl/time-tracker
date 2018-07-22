app.controller('HomeController', ['ProjectService', function (ProjectService){
    let self = this;

    let projectList = [];
    let entryList = [];
    self.projectList = ProjectService.projectList;
    self.entryList = ProjectService.entryList;
    self.getEntries = ProjectService.getEntries;
    self.getProjects = ProjectService.getProjects;

    ProjectService.getEntries();
    ProjectService.getProjects();
}])