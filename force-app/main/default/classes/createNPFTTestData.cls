public class createNPFTTestData {
    public static void insertTestData(){
        List<Customer__c> testCustomers = new List<Customer__c>();
        testCustomers.add(new Customer__c(First_Name__c='Tom', Last_Name__c='Hanks', Age__c=57, 
                                          City__c='Herndon', Country__c='USA', Sex__c='Male', State__c='VA', 
                                          Street_Address__c='357 People Road', Zip_Postal_Code__c='20170'));
        insert testCustomers;

        Customer__c td = [SELECT Id, FullName__c FROM Customer__c WHERE First_Name__c='Tom' LIMIT 1];
        System.debug(td.FullName__c);
    }
}