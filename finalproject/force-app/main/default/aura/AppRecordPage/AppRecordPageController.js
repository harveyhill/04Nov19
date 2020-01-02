({
    doInit : function(component, event, helper) {
        let getApps = component.get("c.getAppointments");
        
        getApps.setCallback(this, function(response) {
            if(response.getState() === "SUCCESS") {
                console.log(response.getReturnValue());
                component.set("v.Apps", response.getReturnValue());
            }
        });
        
        $A.enqueueAction(getApps);
        
	},
})