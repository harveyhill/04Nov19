({
	init : function(component, event, helper) 
    {	component.set( "v.columns", helper.setCols() );
     	helper.loadAppts(component);
	}
})