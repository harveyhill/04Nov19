({
    helperDoInit : function(component){
        // Prepare a new record from template
        component.find("appointmentRecordCreator").getNewRecord(
            "Appointment__c", // sObject type (entityAPIName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.newAppointment");
                var error = component.get("v.recordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                }
                else {
                    console.log("Record template initialized: " + rec.apiName);
                }
            })
        );
    },
    
    helperGetLanguages : function(component){
        // populate languages
        var languageOptions = component.get("c.getDoctorLanguages");
        languageOptions.setParams({"doctorId": component.get("v.chosenDoctorId")});
        languageOptions.setCallback(this, function(response){
            component.set("v.languageOptions", response.getReturnValue());
        });
        $A.enqueueAction(languageOptions);
    },
    
    helperDoctorResidenceChange : function(component){
        // chosenDoctorResidence attribute is in the form Doctor Name, Office Location 
        // Name so split it around the comma and set chosenDoctor and chosenResidence
        // attributes to prepopulate form
        var doctorResidence = "" + component.get("v.chosenDoctorResidence");
        var commaIndex = doctorResidence.indexOf(",");
        var doctor = doctorResidence.substring(0, commaIndex);
        var residence = doctorResidence.substring(commaIndex + 1);
        component.set("v.chosenDoctor", doctor.trim());
        component.set("v.chosenResidence", residence.trim());
    },
    
    helperIdChange : function(component){
        // set Ids
        var ids = "" + component.get("v.chosenId");
        var spaceIndex = ids.indexOf(" ");
        component.set("v.newAppointment.Doctor__c", ids.substring(spaceIndex + 1));
        component.set("v.chosenDoctorId", ids.substring(spaceIndex + 1));
        component.set("v.newAppointment.Residence__c", ids.substring(0, spaceIndex));
        
        // get id of contact associated with current user
        var contactId = component.get("c.getContactId");
        contactId.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){
                component.set("v.currentContactId", response.getReturnValue());
            }
        });
        $A.enqueueAction(contactId);
    },
    
    helperHandleRequestAppointment : function(component){
        // the customer has set Start_Time__c, we have to set the 
        // Language_Preference__c, Customer__c, Doctor__c, and Residence__c, and 
        // Description__c 
        component.set("v.newAppointment.Language_Preference__c", 
                      component.find("languageField").get("v.value"));
        component.set("v.newAppointment.Customer__c", 
                      component.get("v.currentContactId"));
        component.set("v.newAppointment.Description__c", 
                      component.get("v.enteredDescription"));
        
        // Doctor__c and Residence__c are stored in the form Residence__c + ' ' +
        // Doctor__c in the chosenId attribute
        var ids = "" + component.get("v.chosenId");
        var spaceIndex = ids.indexOf(" ");
        component.set("v.newAppointment.Doctor__c", ids.substring(spaceIndex + 1).trim());
        component.set("v.newAppointment.Residence__c", ids.substring(0, spaceIndex).trim());
        
        component.find("appointmentRecordCreator").saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                // record is saved successfully
                var resultsToast = $A.get("e.force:showToast");
                if(resultsToast){
                    resultsToast.setParams({
                        "title": "Success!",
                        "message": "You have requested an appointment."
                    });
                    resultsToast.fire();
                }
            } else {
                console.log(JSON.stringify(saveResult.error));
            }
        });
    },
    
    validateAppointmentForm: function(component) {
        // make sure Start_Time__c is populated and that a doctor and location have
        // been chosen
        var startTimeField = component.find("startTimeField").get("v.value");
        var doctorField = component.find("doctorField").get("v.value");
        var residenceField = component.find("residenceField").get("v.value");
        var validAppointment = true;
        var validToast = $A.get("e.force:showToast");
        if((startTimeField == null) || (new Date(startTimeField) < new Date())){
            validAppointment = false;
            if(validToast){
                validToast.setParams({"title": "Failure",
                                      "message": "You must choose an appointment start time that is in the future."});
                validToast.fire();
            }
            else{
                console.log("Failure: You must choose an appointment start time that is in the future.");
            } 
        }
        else if(!doctorField){
            validAppointment = false;
            if(validToast){
                validToast.setParams({"title": "Failure",
                                      "message": "You must choose a Doctor and Location."});
                validToast.fire();
            }
            else{
                console.log("Failure: You must choose a Doctor and Location.");
            } 
        }
        return validAppointment;
        
    }
})