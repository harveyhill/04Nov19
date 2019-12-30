({
    updateAppointments : function(component) {
        let appointmentByDay=component.get('c.getAppointmentsByDay');
        appointmentByDay.setParams({startDay:component.get('v.timeFrameStart'),
                                    endDay:component.get('v.timeFrameEnd')});
        appointmentByDay.setCallback(this, function(response){
            if(response.getState()=="SUCCESS"){
                component.set("v.appointments",response.getReturnValue());
            }
        });
        $A.enqueueAction(appointmentByDay);  
    },
})