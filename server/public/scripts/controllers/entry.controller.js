app.controller('EntryController', ['ProjectService', function(ProjectService){
    let self = this;

    self.entryList = ProjectService.entryList;
    self.addEntry = ProjectService.addEntry;
    self.getEntries = ProjectService.getEntries;
}])