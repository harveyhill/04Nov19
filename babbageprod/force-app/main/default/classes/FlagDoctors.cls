global class FlagDoctors implements Schedulable{
    global void execute(SchedulableContext ctx){
        // grab all appointments that have occurred between 1 and 12 months ago
        DateTime oneMonthAgo = DateTime.now().addMonths(-1);
        DateTime oneYearAgo = DateTime.now().addMonths(-12);
        List<Appointment__c> pastYearsAppointments = [SELECT Id, Doctor__c, Customer__c FROM Appointment__c
                                                      WHERE Start_Time__c<:oneMonthAgo AND 
                                                      Start_Time__c>:oneYearAgo];
        
        // grab all doctors and customers
        Id doctorRecordTypeId = [SELECT Id FROM RecordType WHERE Name='Doctor' and sObjectType='Contact'
                                 LIMIT 1].Id;
        Id customerRecordTypeId = [SELECT Id FROM RecordType WHERE Name='Customer' and sObjectType='Contact'
                                   LIMIT 1].Id;
        List<Contact> doctors = [SELECT Id FROM Contact WHERE RecordTypeId=:doctorRecordTypeId];
        List<Contact> customers = [SELECT Id FROM Contact WHERE RecordTypeId=:customerRecordTypeId];
        
        // initialize list to hold ids of doctors to flag and map to hold counts of customer bookings
        List<Id> doctorIdsToFlag = new List<Id>();
        Map<String, Integer> customerBookings = new Map<String, Integer>();
        Integer currentValue;
        
        // iterate through each doctor
        for(Contact currentDoctor : doctors){
            
            // iterate through each appointment
            for(Appointment__c currentAppointment : pastYearsAppointments){
                // check if the doctor is the doctor for the current appointment, if they are upsert map 
                // values
                if(currentAppointment.Doctor__c == currentDoctor.Id){
                    if(customerBookings.containsKey(currentAppointment.Customer__c)){
                        // the customer for this appointment is already in our map, find the value for them
                        // and increment it by 1
                        currentValue = customerBookings.get(currentAppointment.Customer__c);
                        customerBookings.put(currentAppointment.Customer__c, (currentValue + 1));
                    }
                    
                    else{
                        // the customer for this appointment is not in our map, add them to the map with the
                        // value of 1
                        customerBookings.put(currentAppointment.Customer__c, 1);
                    }
                }
            }
            
            // map is complete for this doctor - grab the values, put them in a list, and count the number
            // of values that are only 1
            List<Integer> mapValues = customerBookings.values();
            Integer oneTimeBookings = 0;
            for(Integer i : mapValues){
                if(i == 1){
                    oneTimeBookings += 1;
                }
            }
            
            // add the doctor's id to the list of flagged ids if the number of one time bookings is greater
            // than or equal to 5 and reset the map
            if(oneTimeBookings >= 5){
                doctorIdsToFlag.add(currentDoctor.Id);
            }
            customerBookings = new Map<String, Integer>();
        }
        
        // grab all doctors whose ids are in the flag list and flag them
        List<Contact> flaggedDoctors = [SELECT Id, Flagged__c FROM Contact WHERE Id IN:doctorIdsToFlag];
        for(Contact currentDoctor : flaggedDoctors){
            currentDoctor.Flagged__c = true;
        }
        update flaggedDoctors;
    }
}