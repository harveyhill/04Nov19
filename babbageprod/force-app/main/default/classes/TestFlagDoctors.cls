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
public class TestFlagDoctors {
    // Dummy CRON expression: midnight on March 15.
    // Because this is a test, job executes
    // immediately after Test.stopTest().
    public static String CRON_EXP = '0 0 0 15 3 ? 2022';
    
    /*
    @isTest static void testFlagging(){
        // make two doctors and five customers
        DataFactory.InitalizeAccounts();
        DataFactory.CreateDoctors(2);
        DataFactory.CreateCustomers(5);
        DataFactory.CreateOfficeLocations(1);
        
        // give each doctor a residence at our office location
        Id doctorRecordTypeId = [SELECT Id FROM RecordType WHERE Name='Doctor' and sObjectType='Contact'
                                 LIMIT 1].Id;
        List<Contact> doctors = [SELECT Id FROM Contact WHERE RecordTypeId=:doctorRecordTypeId];
        Office_Location__c office = [SELECT Id FROM Office_Location__c LIMIT 1];
        List<Residence__c> doctorResidences = new List<Residence__c>();
        doctorResidences.add(new Residence__c(Doctor__c=doctors[0].Id, Office_Location__c=office.Id));
        doctorResidences.add(new Residence__c(Doctor__c=doctors[1].Id, Office_Location__c=office.Id));
        insert doctorResidences;
        
        // make a bunch of appointments
        Id customerRecordTypeId = [SELECT Id FROM RecordType WHERE Name='Customer' and sObjectType='Contact'
                                   LIMIT 1].Id;
        List<Contact> customers = [SELECT Id FROM Contact WHERE RecordTypeId=:customerRecordTypeId];
        List<Appointment__c> testAppointments = new List<Appointment__c>();
        for(Integer i = 0; i < 5; i++){
            testAppointments.add(new Appointment__c(Start_Time__c=DateTime.now().addMonths(-2), 
                                                    Customer__c=customers[i].Id, Doctor__c=doctors[0].Id,
                                                    Residence__c=doctorResidences[0].Id));
            testAppointments.add(new Appointment__c(Start_Time__c=DateTime.now().addMonths(-3), 
                                                    Customer__c=customers[i].Id, Doctor__c=doctors[0].Id,
                                                    Residence__c=doctorResidences[0].Id));
        }
        for(Integer i = 0; i < 5; i++){
            testAppointments.add(new Appointment__c(Start_Time__c=DateTime.now().addMonths(-2), 
                                                    Customer__c=customers[i].Id, Doctor__c=doctors[1].Id,
                                                    Residence__c=doctorResidences[1].Id));
        }
        insert testAppointments;
        
        Test.startTest();
        String jobId = System.schedule('ScheduledApexTest', CRON_EXP, new FlagDoctors());
        Test.stopTest();
        
        List<Contact> badDoctors = [SELECT Id FROM Contact WHERE Flagged__c=true];
        System.assertEquals(1, badDoctors.size());
    }*/
}