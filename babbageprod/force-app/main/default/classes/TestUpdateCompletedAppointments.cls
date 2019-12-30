/* Hey, why is the entirety of this class commmented out?
 * 
 * Well that's because it inserts appointment records with start times in the past in order to test our
 * UpdateCompletedAppointments apex class, but a validation rule that we set on the Appointment__c object
 * prevents just this thing. So the test method in this class will ALWAYS FAIL unless you temporarily turn off
 * the validation rule to complete the test and uncomment the code below. 
 * 
 * MAKE SURE THAT YOU IMMEDIATELY ACTIVATE THE VALIDATION RULE AGAIN AND RECOMMENT THE CODE BELOW AFTER 
 * COMPLETION!!!! */

@isTest
public class TestUpdateCompletedAppointments {
    // Dummy CRON expression: midnight on March 15.
    // Because this is a test, job executes
    // immediately after Test.stopTest().
    public static String CRON_EXP = '0 0 0 15 3 ? 2022';
    /*
    @isTest static void testScheduledJob(){
        UtilityTestClass.testFactory();
        
        // grab test customer, doctor, and residence
        Contact testDoctor = [SELECT Id FROM Contact WHERE Name='Test Doctor' LIMIT 1];
        Contact testCustomer = [SELECT Id FROM Contact WHERE Name='Test Customer' LIMIT 1];
        Office_Location__c testOffice = [SELECT Id FROM Office_Location__c WHERE Name='Test' LIMIT 1];
        Residence__c testResidence = [SELECT Id FROM Residence__c WHERE Doctor__c=:testDoctor.Id AND
                                      Office_Location__c=:testOffice.Id];
        
        // make a bunch of fake appointments, 50 in the past with status rejected, 50 in the past with status
        // confirmed, 50 in the future with status rejected, and 50 in the future with status confirmed
        List<Appointment__c> testAppointments = new List<Appointment__c>();
        Appointment__c tempAppointment;
        for(Integer i = 0; i < 50; i++){
            tempAppointment = new Appointment__c(Customer__c=testCustomer.Id, Doctor__c=testDoctor.Id, 
                                                 Residence__c=testResidence.Id, Status__c='Rejected', 
                                                 Start_Time__c=(DateTime.now().addDays(
                                                     -Integer.valueOf(Math.ceil(Math.random() * 20)))));
            testAppointments.add(tempAppointment);
        }
        for(Integer i = 0; i < 50; i++){
            tempAppointment = new Appointment__c(Customer__c=testCustomer.Id, Doctor__c=testDoctor.Id, 
                                                 Residence__c=testResidence.Id, Status__c='Confirmed', 
                                                 Start_Time__c=(DateTime.now().addDays(
                                                     -Integer.valueOf((Math.ceil(Math.random() * 20))))));
            testAppointments.add(tempAppointment);
        }
        
        for(Integer i = 0; i < 50; i++){
            tempAppointment = new Appointment__c(Customer__c=testCustomer.Id, Doctor__c=testDoctor.Id, 
                                                 Residence__c=testResidence.Id, Status__c='Rejected', 
                                                 Start_Time__c=(DateTime.now().addDays(
                                                     Integer.valueOf(Math.ceil(Math.random() * 20)))));
            testAppointments.add(tempAppointment);
        }
        
        for(Integer i = 0; i < 50; i++){
            tempAppointment = new Appointment__c(Customer__c=testCustomer.Id, Doctor__c=testDoctor.Id, 
                                                 Residence__c=testResidence.Id, Status__c='Confirmed', 
                                                 Start_Time__c=(DateTime.now().addDays(
                                                     Integer.valueOf(Math.ceil(Math.random() * 20)))));
            testAppointments.add(tempAppointment);
        }
        insert testAppointments;
        
        // schedule and run the test job
        Test.startTest();
        String jobId = System.schedule('ScheduledApexTest', CRON_EXP, new UpdateCompletedAppointments());
        Test.stopTest();
        
        // grab appointments
        List<Appointment__c> pastRejectedApps = [SELECT Id FROM Appointment__c WHERE Status__c='Rejected' AND
                                                 Start_Time__c <:DateTime.now()];
        List<Appointment__c> pastCompletedApps = [SELECT Id FROM Appointment__c WHERE Status__c='Completed' 
                                                  AND Start_Time__c <:DateTime.now()];
        List<Appointment__c> futureRejectedApps = [SELECT Id FROM Appointment__c WHERE Status__c='Rejected' 
                                                   AND Start_Time__c >:DateTime.now()];
        List<Appointment__c> futureConfirmedApps = [SELECT Id FROM Appointment__c WHERE Status__c='Confirmed' 
                                                    AND Start_Time__c >:DateTime.now()];
        
        // we should have 50 in the past with the status of rejected, 50 in the past with the status of 
        // completed, 50 in the future with the status of rejected, and 50 in the future with the status of 
        // confirmed
        System.assertEquals(50, pastRejectedApps.size());
        System.assertEquals(50, pastCompletedApps.size());
        System.assertEquals(50, futureRejectedApps.size());
        System.assertEquals(50, futureConfirmedApps.size());
    }*/
}