app.controller('EntryController', ['ProjectService', function (ProjectService){
    let self = this;
    console.log('in EC');
    
    self.entryList = [];
    self.entryList = ProjectService.entryList;
    self.addEntry = ProjectService.addEntry;
    self.getEntries = ProjectService.getEntries;
    self.deleteEntry = ProjectService.deleteEntry;

    ProjectService.getEntries();
}])