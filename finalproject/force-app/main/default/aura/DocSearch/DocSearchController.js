({
    onAccountsLoaded: function( component, event, helper ) {
        var cols = [
            {
                'label': 'Full Name',
                'fieldName': 'Name',
                'type': 'text'
            },
            {
                'label': 'Speciality',
                'fieldName': 'Speciality__c',
                'type': 'Picklist'
            },
            {
                'label': 'Gender',
                'fieldName': 'Gender__C',
                'type': 'Picklist'
            },
            {
                'label': 'Language',
                'fieldName': 'Language__C',
                'type': 'url'
            },
            {
                'label': 'Action',
                'type': 'button',
                'typeAttributes': {
                    'label': 'View details',
                    'name': 'view_details'
                }
            }
        ];
        component.set( 'v.cols', cols );
        component.set( 'v.rows', event.getParam( 'Contacts' ) );
    },
    onRowAction: function( component, event, helper ) {
        var action = event.getParam( 'action' );
        var row = event.getParam( 'row' );
        if ( action.name == 'view_details' ) {
            var navigation = component.find( 'navigation' );
            navigation.navigate({
                'type': 'standard__recordPage',
                'attributes': {
                    'objectApiName': 'Contact',
                    'recordId': row.Id,
                    'actionName': 'view'
                }
            });
        }
    }
})