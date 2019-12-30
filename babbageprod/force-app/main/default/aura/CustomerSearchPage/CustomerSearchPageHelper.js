({
    helperLoadOptions : function(component) {
        // populate gender options select
        var genderSelect = component.get("c.getGenderOptions");
        genderSelect.setCallback(this, function(response) {
            if(response.getState() === "SUCCESS"){
                component.set("v.genderOptions", response.getReturnValue());
            }
        });
        
        // populate specialization options select
        var specializationSelect = component.get("c.getSpecializationOptions");
        specializationSelect.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){
                component.set("v.specializationOptions", response.getReturnValue());
            }
        });
        
        // populate language options dual list
        var languageDual = component.get("c.getLanguageOptions");
        languageDual.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){
                var returnedOptions = response.getReturnValue();
                var selectOptions = [];
                var i;
                for(i = 0; i < returnedOptions.length; i++){
                    selectOptions.push({value:returnedOptions[i], 
                                        label:returnedOptions[i]});
                }
                component.set("v.languageOptions", selectOptions);
            }
        });
        
        // get id of contact associated with current user
        var contactId = component.get("c.getContactId");
        contactId.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){
                component.set("v.currentContactId", response.getReturnValue());
            }
        })
        
        // enqueue all the actions
        $A.enqueueAction(genderSelect);
        $A.enqueueAction(specializationSelect);
        $A.enqueueAction(languageDual);
        $A.enqueueAction(contactId);
    },
    
    helperHandleSearch : function(component){
        // base soql query
        // we want the customer to be able to see both the name of the doctor and the
        // name of the office, so we will be querying the residence__c object
        var soqlQuery = "SELECT Id, Doctor__r.Name, Office_Location__r.Name FROM Residence__c";
        
        // validate and populate search object
        var selectedSpecialization = component.find("specializations").get("v.value");
        var selectedGender = component.find("genders").get("v.value");
        var selectedLanguages = component.get("v.selectedLanguages");
        if(selectedSpecialization != ""){
            component.set("v.search.Specialization__c", selectedSpecialization);
            
            // add specialization to soql query
            soqlQuery = soqlQuery + " WHERE Doctor__r.Specialization__c='" + 
                selectedSpecialization + "'";
        }
        if(selectedGender != ""){
            component.set("v.search.Sex__c", selectedGender);
            
            // add where clause if not already in soql query, add gender to
            // soql query
            if(soqlQuery.indexOf("WHERE") != -1){
                soqlQuery = soqlQuery + " AND Doctor__r.Sex__c='" + selectedGender + "'";
            }
            else{
                soqlQuery = soqlQuery + " WHERE Doctor__r.Sex__c='" + selectedGender + "'";
                
            }
        }
        if(selectedLanguages.length != 0){
            var soqlLanguages = "";
            if(selectedLanguages.length == 1){
                component.set("v.search.Language__c", selectedLanguages[0]);
                soqlLanguages = selectedLanguages[0];
            }
            else if(selectedLanguages.length > 1){
                let i;
                let languagesString = "";
                for(i = 0; i < selectedLanguages.length; i++){
                    if(i == 0){
                        languagesString = selectedLanguages[i];
                    }
                    else{
                        languagesString = languagesString + ";" + selectedLanguages[i];
                    }
                }
                component.set("v.search.Language__c", languagesString);
                soqlLanguages = languagesString;
            }
            
            // add where clause if not already in soql query, add language to
            // soql query
            if(soqlQuery.indexOf("WHERE") != -1){
                soqlQuery = soqlQuery + " AND Doctor__r.Language__c INCLUDES('" + 
                    soqlLanguages + "')";
            }
            else{
                soqlQuery = soqlQuery + " WHERE Doctor__r.Language__c INCLUDES('" +
                    soqlLanguages + "')";
            }
        }
        
        component.set("v.search.Contact__c", component.get("v.currentContactId"));
        
        // insert it
        var insertSearch = component.get("c.insertSearchRecord");
        insertSearch.setParams({"searchToInsert" : component.get("v.search")});
        insertSearch.setCallback(this, function(response){});
        
        // send SOQL query and return matching results
        var returnResults = component.get("c.returnMatchingDoctors");
        returnResults.setParams({"searchquery" : soqlQuery});
        returnResults.setCallback(this, function(response){
            // when the soql results return, this component will fire an event that 
            // the CustomerSearchRequestPage component will handle and use to update
            // the MatchingDoctors component
            
            // alert the user if no doctors match their search filters
            var callbackEvent = component.getEvent("queryResults");
            callbackEvent.setParams({"matchingDoctorResidences" : 
                                     response.getReturnValue()});
            callbackEvent.fire();
            try{
                if(response.getReturnValue().length == 0){
                    var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title": "Search Failure:",
                            "message": "Sorry, no doctors in our network match your selected criteria."
                        });
                        resultsToast.fire();
                    }
                }
            }
            catch(err){
                var resultsToast = $A.get("e.force:showToast");
                if(resultsToast){
                    resultsToast.setParams({
                        "title": "Search Failure:",
                        "message": "Sorry, no doctors in our network match your selected criteria."
                    });
                    resultsToast.fire();
                } 
            }
        });
        
        // enqueue the actions
        $A.enqueueAction(insertSearch);
        $A.enqueueAction(returnResults);
    }
})