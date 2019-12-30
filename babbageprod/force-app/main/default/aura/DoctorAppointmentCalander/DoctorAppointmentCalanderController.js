({
    
    init : function(component, event, helper) {
        
        let now=new Date();
        let start=new Date();
        let end=new Date();
        start.setDate(now.getDate()-now.getDay());
        end.setDate(now.getDate()+(7-now.getDay()-1));
        component.set('v.timeFrameStart',start);
        component.set('v.timeFrameEnd',end);
        
        helper.updateAppointments(component);

    },
    updateAppointments : function(component,event,helper){
        component.set('v.appointments',null);
        helper.updateAppointments(component);
    },
    NextTimeFrame : function(component, event, helper) {
        let start=new Date();
        let end=new Date();
        start.setTime(component.get('v.timeFrameStart').getTime()+(86400000 *7));
        end.setTime(component.get('v.timeFrameEnd').getTime()+(86400000 *7));
        component.set('v.timeFrameStart',start);
        component.set('v.timeFrameEnd',end);
        
        helper.updateAppointments(component);
    },
    LastTimeFrame : function(component, event, helper) {
        let start=new Date();
        let end=new Date();
        start.setTime(component.get('v.timeFrameStart').getTime()-(86400000 *7));
        end.setTime(component.get('v.timeFrameEnd').getTime()-(86400000 *7));
        component.set('v.timeFrameStart',start);
        component.set('v.timeFrameEnd',end);
        
        helper.updateAppointments(component); 
    }
})