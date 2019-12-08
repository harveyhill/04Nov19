public without sharing class CustomerInfoController {
    


    public Customer__c customerInfo {get{
        List<Customer__c> custList = [SELECT Age__c, City__c, Country__c, First_Name__c, Last_Name__c FROM Customer__c LIMIT 1];
        
        if(custList.size() == 0)
        {
            return null;
        }
        else {
            return custList.get(0);
        }
    }}
 
}
