global class DoctorAppointmentController {
    @auraEnabled
    global static List<Appointment__c[]> getAppointmentsByDay(DateTime startDay, Datetime endDay){
        List<Appointment__c[]> appointments = new List<Appointment__C[]>();
        ID UserID= [SELECT ContactID FROM User WHERE id=:UserInfo.getuserID()][0].ContactId;
        for(integer i=1;i<=7;i++)
            appointments.add([SELECT customer__r.Name, customer__r.email, Start_time__c, Description__c, Language_Preference__c, residence__r.office_location__r.Name FROM Appointment__c WHERE Doctor__c=:UserID AND DAY_IN_WEEK(Start_time__c)=:i AND Start_time__c>=:startDay AND Start_Time__C<=:EndDay ORDER BY Start_time__c]);
        return appointments;
    }
    @auraEnabled
    global static String[] getAppointmentStatusValues(){
        String[] filterList=new String[]{'All'};
            List<Schema.PickListEntry> picklistEntries=appointment__c.status__c.getDescribe().getPickListValues();
        for (integer i=0;i<picklistEntries.size();i++)
        {
            filterList.add(picklistEntries[i].getValue());
        }
        return filterList;
    }
    @auraEnabled
    global static List<Appointment__c> getAppointmentsByStatus(String Status, String TimeFrame, String Period)
    {	
        System.debug(Status+TimeFrame+Period);
                ID UserID= [SELECT ContactID FROM User WHERE id=:UserInfo.getuserID()][0].ContactId;
        string query='SELECT customer__r.Name, start_time__c, end_time__c, description__c, language_preference__c, status__c,'+ 
            'customer__r.Phone, customer__r.Email, doctor_message__c, Residence__r.office_location__r.Name FROM Appointment__c';
        if(TimeFrame=='Past') {
            if(Period!='All')
                query=query+' WHERE end_time__c<TODAY AND start_time__c=LAST_N_DAYS:'+Period;
            else
                query=query+' WHERE end_time__c<TODAY';
        }
        else {
            if(Period!='All')
                query=query+' WHERE end_time__c=NEXT_N_DAYS:'+Period;
            else
                query=query+' WHERE end_time__c>TODAY';
        }
        if(Status!='All')
            query=query+' AND status__c=\''+status+'\'';
        query=query+' AND Doctor__c=\''+UserID+'\'';
        return Database.query(query);
    }
    @auraEnabled
    global static void updateAppointment(Appointment__c appointment){
        update appointment;
    }
}