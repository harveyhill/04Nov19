({
	mainInit: function(component, event, helper) {
		let action = component.get("c.getAppointmentPending");
        
        action.setCallback(this, function(response){
       		//use a console.log(response.getReturnValue()); to test
      		component.set("v.appointments", response.getReturnValue()); 
        });
        $A.enqueueAction(action);
	}
})