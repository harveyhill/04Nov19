({
    // Called when user pushes the "Accept/Reject" button
    sendMessage : function(component, event, helper) 
    {	var setEvent = component.getEvent("updateAppt");
     	// console.log( "Message: " + component.find("drmsg").get("v.value") );
        setEvent.setParams(	{ "message" : component.find("drmsg").get("v.value"),
                           	  "status" : component.get("v.appt_status") 
                            }
                          );
        setEvent.fire();
        component.destroy();
        
    }
})