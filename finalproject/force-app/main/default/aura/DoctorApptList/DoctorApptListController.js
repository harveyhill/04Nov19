({
	init : function(component, event, helper) 
    {	component.set( "v.columns", helper.setCols() );
     	helper.loadAppts(component);
	},
    // Fired whenever user clicks a button on a row
    handleRowAction : function(component, event, helper) 
    {	let row = event.getParam('row');
     	let action = event.getParam('action');
     	component.set("v.currentrow", row);
     	helper.openModalBox(row, action, component);
	},
    // Handles custom event fired whenever the modal box component is sent off
    updateAppt : function (component, event, helper)
    {	let row = component.get("v.currentrow");
     	helper.updateApptHelper(component, event, row);
    }
})