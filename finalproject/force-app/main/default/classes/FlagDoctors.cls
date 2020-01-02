global class FlagDoctors implements Schedulable {
    global void execute(SchedulableContext ctx) {
        // Query for all Appointments between one year and sizx months ago
        // and all Appointments between six months ago and now
        Contact[] docList = new List<Contact>(); 
        DateTime cutoffMin = DateTime.now() - 365;
        DateTime cutoffMax = DateTime.now() - 183;
        List<Appointment__c> appList = database.query('Select Id, Customer_Contact__c, Doctor_Contact__c, Start_Time__c From Appointment__c Where Start_Time__c >:cutoffMin AND Start_Time__c <:cutoffMax');
        List<Appointment__c> appList2 = database.query('Select Id, Customer_Contact__c, Doctor_Contact__c, Start_Time__c From Appointment__c Where Start_Time__c <:cutoffMin');
        
        // iterate through both lists of appoints to find matches
        // if theres no match that means that the customer didn't reschedule with the doctor 
        // in the second half of the year and is then flagged
        Boolean flagged = true;
        for (Appointment__c app : appList) {
            for (Appointment__c app2 : appList2) {
                if ((app.Doctor_Contact__c == app2.Doctor_Contact__c) && (app.Customer_Contact__c == app.Customer_Contact__c)) {
                    flagged = false;
                } 
                Contact doc = new Contact();
                doc.Id = app.Doctor_Contact__c;
                doc.Flagged__c = flagged;
                docList.add(doc);
            }
        }
        // update the list of flagged doctors
    	update docList;
    }
}