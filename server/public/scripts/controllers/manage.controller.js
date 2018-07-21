app.controller('ManageController', ['ProjectService', function (ProjectService){
    let self = this;
    console.log('in MC');

    self.projectList = [];
    self.projectList = ProjectService.projectList;
    self.addProject = ProjectService.addProject;
    self.getProjects = ProjectService.getProjects;
    self.deleteEntry = ProjectService.deleteEntry;

    ProjectService.getProjects();
}])