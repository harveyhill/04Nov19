({
	createDoctorUser : function(component, event, helper) {
		var action = component.get("c.createCommunityUser");
        
        action.setParams({
            "recordId": component.get("v.recordId")
        });
        
        action.setCallback(this, function(response){
            
        });
        
        $A.enqueueAction(action);
	}
})