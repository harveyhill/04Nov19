({
    setCols : function()
    {   const cols = 
        [   {label: 'Full Name', fieldName: 'Name', type: 'text'},
            {label: 'Speciality', fieldName: 'Speciality__c', type: 'Picklist'},
            {label: 'Gender', fieldName: 'Gender__c', type: 'Picklist'},
            {label: 'Language', fieldName: 'Languages__c', type: 'Picklist'}, 
            {	'label': 'Action',
                'type': 'button',
                'typeAttributes': 
             	{	iconName: 'action:approval',
                    'label': 'Schedule',
                    'name': 'view_details'
                }
            }		
        ];
     	return cols;
    },
    
    loadPicklists : function(component)
    {   //Speciality
        let getSpecialityOptions = component.get("c.getAvailableDoctorSpecialtyOptions");
        
        getSpecialityOptions.setCallback(this, function(response) {
            if(response.getState() === "SUCCESS") {
                component.set("v.specOptions", response.getReturnValue());
            }
        });
        
        //Gender
        let getGenderOptions = component.get("c.getAvailableDoctorGenderOptions");
        
        getGenderOptions.setCallback(this, function(response) {
            if(response.getState() === "SUCCESS") {
                component.set("v.genderOptions", response.getReturnValue());
            }
        });
        
        //Languages
        let getLangOptions = component.get("c.getAvailableDoctorLanguageOptions");
        getLangOptions.setCallback(this, function(response) {
            if(response.getState() === "SUCCESS") {
                component.set("v.langOptions", response.getReturnValue());
            }
        });
     
        $A.enqueueAction(getSpecialityOptions);
        $A.enqueueAction(getGenderOptions);
        $A.enqueueAction(getLangOptions);
    },
    
	loadDrs : function(component) 
    {	let specialty = component.find("specialtyId").get("v.value");
        let gender = component.find("genderId").get("v.value");
        let language = component.find("langId").get("v.value");
     	console.log('Specialty: ' + specialty + 'Gender' + gender + 'Language' + language );
     	// Controller Apex call
     	let getDoctors = component.get("c.getDoctors");
     	getDoctors.setParams( { "specialty" : specialty, "gender" : gender, "language" : language } );
		getDoctors.setCallback	(this, function (response) 
        {	if(response.getState() === "SUCCESS")
                component.set("v.Docs", response.getReturnValue());
        }						);
     	$A.enqueueAction(getDoctors);
	}
})