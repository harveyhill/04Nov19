// utility class to create test data used by functions in TestUpdateCompletedAppointments and 
// TestCustomerSearchRequestController apex classes
@isTest
public class UtilityTestClass {
    public static void testFactory(){
        // insert a doctor
        Account testAccount = new Account(Name='Test');
        insert testAccount;
        testAccount = [SELECT Id FROM Account WHERE Name='Test' LIMIT 1];
        
        //insert doctor;
		Id recordTypeId=[SELECT ID FROM RecordType WHERE Name='Doctor' and sObjectType='Contact' LIMIT 1].Id;
        Contact testDoctor = new Contact(AccountId=testAccount.Id, FirstName='Test', LastName='Doctor', 
                                         Sex__c='Male', Specialization__c='Proctologist', 
                                         Email='test@gmail.com', Language__c='English;Spanish', RecordTypeId=recordTypeId);
        insert testDoctor;
        
        // insert a residence
        Office_Location__c testOffice = new Office_Location__c(Name='Test', Zip_Code__c=12345, State__c='PA',
                                                               City__c='Meadville', 
                                                               Street_Address__c='12345 Way');
        insert testOffice;
        testOffice = [SELECT Id FROM Office_Location__c WHERE Name='Test' LIMIT 1];
        testDoctor = [SELECT Id FROM Contact WHERE Name='Test Doctor' LIMIT 1];
        Residence__c testResidence = new Residence__c(Doctor__c=testDoctor.Id, 
                                                      Office_Location__c=testOffice.Id);
        insert testResidence;
        
        // insert a customer
        recordTypeId=[SELECT ID FROM RecordType WHERE Name='Customer' and sObjectType='Contact' LIMIT 1].Id;
        Contact testCustomer = new Contact(AccountId=testAccount.Id, Email='test@gmail.com', 
                                           FirstName='Test', LastName='Customer', RecordTypeId=recordTypeId);
        insert testCustomer;
    }
}