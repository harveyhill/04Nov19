public with sharing class ContactController {
/*   
     @AuraEnabled
    public static List<String> getAvailableDoctorSpecialityOptions() {
        List<String> pickListValuesList= new List<String>();
		Schema.DescribeFieldResult fieldResult = Contact.Speciality__c.getDescribe();
		List<Schema.PicklistEntry> spec = fieldResult.getPicklistValues();
		for( Schema.PicklistEntry pickListVal : spec){
			pickListValuesList.add(pickListVal.getValue());
		}     system.debug('speciality');
		return pickListValuesList;
    }

    // Returning a list of Strings filled with the picklist values of Gender__c
    
    public static List<String> getAvailableDoctorGenderrOptions() {
        
        List<String> pickListValuesList= new List<String>();
		Schema.DescribeFieldResult fieldResult = Contact.Gender__c.getDescribe();
		List<Schema.PicklistEntry> gend = fieldResult.getPicklistValues();
        system.debug(fieldResult.getPicklistValues());
		for( Schema.PicklistEntry pickListVal : gend){
			pickListValuesList.add(pickListVal.getValue());
		}     system.debug('language');
		return pickListValuesList;
    }

    // Returning a list of Strings filled with the picklist values of Languages__c
   
    public static List<String> getAvailableDoctorLanguageeOptions() {
        List<String> pickListValuesList= new List<String>();
		Schema.DescribeFieldResult fieldResult = Contact.Languages__c.getDescribe();
		List<Schema.PicklistEntry> lang = fieldResult.getPicklistValues();
		for( Schema.PicklistEntry pickListVal : lang){
			pickListValuesList.add(pickListVal.getValue());
		}
        system.debug('language');
		return pickListValuesList;
    }
  
    public static List<Contact> getDoctorss(String specialty, String gender, String language) {
       //List<Contact> Docs = new List<Contact>();
       // Final String recTypeDoc = Schema.SObjectType.Contact.getRecordTypeInfosByName().get('Doctor').getRecordTypeId();
        //docList = database.query('Select Id, Name, Speciality__c, Gender__c, Languages__c From Contact Where RecordTypeId=:recTypeDoc AND Speciality__c=:specialty AND Gender__c=:gender AND Languages__c includes :language');
		//docList = database.query('Select Id, Name, Speciality__c, Gender__c, Languages__c From Contact Where RecordTypeId=:recTypeDoc limit 5');
        
        //return docList;
        
        Id recTypeDoc = Schema.SObjectType.Contact.getRecordTypeInfosByName().get('Doctor').getRecordTypeId();
 
             Id devRecordTypeId = Schema.SObjectType.Contact.getRecordTypeInfosByName().get('Customer').getRecordTypeId();
        system.debug(recTypeDoc+'  Cust   '+devRecordTypeId);
        
        //Qyery 10 accounts
       // List<Contact> Docs = database.query('Select Id, Name, Speciality__c, Gender__c, Languages__c From Contact Where RecordTypeId=:devRecordTypeId limit 10');
       List<Contact>  Docs = database.query('Select Id, Name, Speciality__c, Gender__c, Languages__c From Contact Where RecordTypeId=:recTypeDoc AND Speciality__c=:specialty AND Gender__c=:gender'); // AND Languages__c includes :language');
        //return list of accounts
        return Docs;
        
    } 

    @AuraEnabled

    public static List <Contact> fetchAccounts() {
        Id recTypeDoc = Schema.SObjectType.Contact.getRecordTypeInfosByName().get('Doctor').getRecordTypeId();
 
             Id devRecordTypeId = Schema.SObjectType.Contact.getRecordTypeInfosByName().get('Customer').getRecordTypeId();
       // system.debug(recTypeDoc+'  Cust   '+devRecordTypeId);
        //Qyery 10 accounts
        List<Contact> docList = database.query('Select Id, Name, Speciality__c, Gender__c, Languages__c From Contact Where RecordTypeId=:devRecordTypeId');
        
        //return list of accounts
             
        
        return docList;
    } 
*/}