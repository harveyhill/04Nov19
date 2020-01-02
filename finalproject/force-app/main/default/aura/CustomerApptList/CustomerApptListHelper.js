({
    setCols : function ()
    {	const cols =
        [	{ 	label: 'Date', fieldName: 'Start_Time__c', type: 'date' },
         	{	label: 'Time', fieldName: 'Time', type: 'text', },
         	{	label: 'Doctor', fieldName: 'DoctorName', type: 'text' },
            {	label: 'Status', fieldName: 'Status__c', type: 'text' },
         	{	label: 'Message', fieldName: 'Message__c', type: 'text' }
        ];
     	return cols;        
    },

	loadAppts : function (component) 
    {	let action = component.get( "c.getCustomerAppts" );
     	action.setCallback( this, function (response)
        {	if ( response.getState() == "SUCCESS" )
            {	let rows = response.getReturnValue();
             	for ( let row of rows )
                {   row.DoctorName = row.Doctor_Contact__r.Name;
                 	row.Time = $A.localizationService.formatDate(row.Start_Time__c, "hh:mm a");
                } 
             	component.set("v.data", response.getReturnValue() );
            }
        }
                          );
     	$A.enqueueAction(action);
		
	}
})