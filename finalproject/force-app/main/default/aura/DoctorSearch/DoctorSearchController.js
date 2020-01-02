({
    //Doctor search controller
    
    init : function (component, event, helper) 
    {
    	//Specialty
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

    SortDoctor : function (component, event, helper) {
        let specialty = component.find("specialtyId").get("v.value");
        let gender = component.find("genderId").get("v.value");
        let language = component.find("langId").get("v.value");
        let getDoctors = component.get("c.getDoctors");

        getDoctors.setParams({"specialty" : specialty, "gender" : gender, "language" : language});
        getDoctors.setCallback(this, function(response) {
            if(response.getState() === "SUCCESS") {
                component.set("v.Docs", response.getReturnValue());
            }
        });
        $A.enqueueAction(getDoctors);
    }
})