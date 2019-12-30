({
    doInit: function(component, event, helper) {
        helper.helperDoInit(component);
    },
    
    doctorResidenceChange : function(component, event, helper){
        helper.helperDoctorResidenceChange(component);
        helper.helperDoInit(component);
    },
    
    idChange : function(component, event, helper){
        helper.helperIdChange(component);
        helper.helperGetLanguages(component);
    },
    
    handleRequestAppointment : function(component, event, helper) {
        if(helper.validateAppointmentForm(component)){
            helper.helperHandleRequestAppointment(component); 
            helper.helperDoInit(component);
        }
    }
})