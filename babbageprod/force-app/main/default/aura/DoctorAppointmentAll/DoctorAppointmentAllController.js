({
    init : function(component, event, helper) {
        helper.getStatusList(component, "v.StatusOptions");
        var rowActions=helper.getRowActions.bind(this,component);
        component.set("v.AppointmentsColumns", 
                      [{label:'Patient Name', fieldName:'Customer_Name', type: 'string', sortable:true},
                       {label:'Appointment Description',fieldName:'Description__c', type: 'string', sortable:true},
                       {label:'Language Preference', fieldName:'Language_Preference__c', type: 'string', sortable:true},
                       {label:'Message to Patient', fieldName:'Doctor_Message__c',type:'string', editable:true, sortable:true},
                       {label:'Appointment Office', fieldName:'Office_Name',type: 'string', sortable:true},     
                       {label: 'Start time', fieldName: 'Start_Time__c', type: 'date', typeAttributes:{
                           year: "2-digit",
                           month: "numeric",
                           day: "2-digit",
                           hour: "2-digit",
                           minute: "2-digit",
                           hour12: true
                       }, sortable:true, editable:true},
                       {label: 'End time', fieldName: 'End_Time__c', type:'date', typeAttributes:{
                           year: "2-digit",
                           month: "numeric",
                           day: "2-digit",
                           hour: "2-digit",
                           minute: "2-digit",
                           hour12: true
                       }, sortable:true,editable:true},
                       {label: 'Phone Number', fieldName:'Customer_Phone', Type:'phone', 
                        sortable:true,cellAttributes:{iconName:'utility:outbound_call',iconPosition:'left'}},
                       {label: 'Email', fieldName:'Customer_Email', Type:'String', 
                        sortable:true,cellAttributes:{iconName:'utility:email',iconPosition:'left'}},
                       {label: 'Status', fieldName: 'Status__c', Type:'String', sortable:true},
                       {type: 'action',typeAttributes:{rowActions :rowActions }}
                      ]);
        component.find('statusselect').set('v.value','All');
        component.find('timeselect').set('v.value','Present');
        component.find('periodselect').set('v.value','7');
        helper.updateAppointments(component);
    },
    handleRowActions:function(component,event,helper){
        let action = event.getParam('action');
        let row = event.getParam('row');
        
        switch(action.name)
        {
            case'approve':
                helper.approveAppointment(component,row);
                break;
            case'deny':
                helper.denyAppointment(component,row);
                break;
            case'update':
                helper.updateAppointment(component,row,true);
                break;
            case'reschedule':
                helper.rescheduleAppointment(component,row);
                break;
        }
    },
    updateAppointments: function(component,event,helper){
        helper.updateAppointments(component);
    },
    refreshAppointments: function(component,event,helper){
        component.set('v.AppointmentsList',null);
        helper.updateAppointments(component);
    },
    updateSort: function(component,event,helper){
        let field=event.getParam('fieldName');
        let direction=event.getParam('sortDirection');
        component.set("v.SortCategory",field);
        component.set("v.SortDirection",direction);
        helper.sortData(component,field,direction, "v.AppointmentsList");
    }
})