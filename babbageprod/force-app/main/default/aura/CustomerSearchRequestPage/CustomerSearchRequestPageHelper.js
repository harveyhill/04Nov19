({
    helperHandleCustomerSearchResults : function(component, event) {
        // the event is carrying a list of residences that are going to be put into the
        // duallistbox in the MatchingDoctors component, but we're going to format
        // everything all pretty-like so that the options in the duallistbox look like
        // Doctor Name, Office Location Name
        var residencesList = event.getParam("matchingDoctorResidences");
        
        // declare and populate list of strings that will have label elements in form
        // Doctor Name, Office Location Name
        // value elements will be in form Residence__c.Id + ' ' +
        // Residence__c.Doctor__c so that we can populate the appointment request form
        // later without needing another database callout
        var selectOptions = [];
        var i;
        var tempString = "";
        var tempIdString = "";
        for(i = 0; i < residencesList.length; i++){
            tempIdString = residencesList[i].Id + " " + residencesList[i].Doctor__c;
            tempString = residencesList[i].Doctor__r.Name + ", " + 
                residencesList[i].Office_Location__r.Name;
            selectOptions.push({value:tempIdString, 
                                label:tempString});
            tempString = "";
            tempIdString = ""
        }
        
        // set it in the component
        component.set("v.matchingDoctorsList", selectOptions);
    },
    
    helperHandleDoctorSelected : function(component, event) {
        // the event is carrying a string in the format Doctor Name, Office Location 
        // Name that is going to be put into the aura attributes chosenDoctor and 
        // chosenResidence on the CustomerRequestPageComponent
        component.set("v.selectedDoctorResidence", event.getParam("selectedDoctor"));
        component.set("v.selectedId", event.getParam("selectedId"));
    }
})