({
	helperHandleChange : function(component) {
		// fire an event that will update the selectedDoctor aura attribute in 
		// CustomerSearchRequestPage
		var changeEvent = component.getEvent("doctorSelected");
        
        // chosen doctor is holding the id of the residence, but we want the label
        // of the option in the dual list box for pretty formatting
        var chosenDoctor = component.get("v.chosenDoctor");
		var matchingDoctors = component.get("v.matchingDoctorsList");
		var i;
		var selectedDoctor = "";        
        for(i = 0; i < matchingDoctors.length; i++){
            if(matchingDoctors[i].value == chosenDoctor){
                selectedDoctor = matchingDoctors[i].label;
                break;
            }
        }
        changeEvent.setParams({"selectedDoctor" : selectedDoctor,
                               "selectedId" : chosenDoctor});
        changeEvent.fire();
	}
})