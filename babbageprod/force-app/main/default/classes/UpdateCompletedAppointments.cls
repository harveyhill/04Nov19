global class UpdateCompletedAppointments implements Schedulable {
    global void execute(SchedulableContext ctx){
        // we're updating appointments that have been completed (i.e. they're status is confirmed and they
        // are in the past) in order to activate a process that sends a survey to the patient
        List<Appointment__c> completedAppointments = [SELECT Id, Status__c FROM Appointment__c WHERE 
                                                      Status__c='Confirmed' AND Start_Time__c <:DateTime.now()];
        for(Appointment__c a : completedAppointments){
            a.Status__c = 'Completed';
        }
        update completedAppointments;
    }
}