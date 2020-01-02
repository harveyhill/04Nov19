({
    
    doInit : function(component, event, helper) {
		let getCustomerInfo = component.get("c.getCustomerInfo");
        
        getCustomerInfo.setCallback(this, function(response) {
            if(response.getState() === "SUCCESS") {
                console.log(response.getReturnValue());
                component.set("v.customer", response.getReturnValue());
            }
        });
        
        $A.enqueueAction(getCustomerInfo);
        
	},
})