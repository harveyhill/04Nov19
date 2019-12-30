({
	loadOptions : function(component, event, helper) {
		// function to populate controller options on load
		helper.helperLoadOptions(component);
	},
    
    handleSearch : function(component, event, helper){
        // function to create and insert search record and return matching doctors
        helper.helperHandleSearch(component);
    }
})