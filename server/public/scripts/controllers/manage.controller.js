app.controller('ManageController', ['ProjectService', function (ProjectService){
    let self = this;

    self.getEntries = ProjectService.getEntries;
    self.deleteEntry = ProjectService.deleteEntry;
}])