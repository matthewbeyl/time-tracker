app.controller('EntryController', ['ProjectService', function(ProjectService){
    let self = this;
    console.log('in EC');
    

    self.entryList = ProjectService.entryList;
    self.addEntry = ProjectService.addEntry;
    self.getEntries = ProjectService.getEntries;

    ProjectService.getEntries();
}])