app.controller('EntryController', ['ProjectService', function (ProjectService){
    let self = this;
    // console.log('in EC');
    
    self.projectList = [];
    self.entryList = [];
    self.projectList = ProjectService.projectList;
    self.entryList = ProjectService.entryList;
    self.addEntry = ProjectService.addEntry;
    self.getEntries = ProjectService.getEntries;
    self.deleteEntry = ProjectService.deleteEntry;
    self.getProjects = ProjectService.getProjects;

    ProjectService.getEntries();
    ProjectService.getProjects();
}])