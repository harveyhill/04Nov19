({
	show : function(component, event, helper) {
		let boolCheck = component.get("v.display");
        component.set("v.display", !boolCheck);
	}
})
