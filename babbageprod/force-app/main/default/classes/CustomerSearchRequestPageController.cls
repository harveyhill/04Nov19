public without sharing class CustomerSearchRequestPageController {
    // function to return matching doctors based on soql query
    @AuraEnabled
    public static List<Residence__c> returnMatchingDoctors(string searchquery){
        List<Residence__c> matchingDoctors = Database.query(searchquery);  
        return matchingDoctors;
    }
    
    // function to insert search record when user clicks 'Search' button on CustomerSearchPage
    @AuraEnabled
    public static void insertSearchRecord(Search__c searchToInsert){
        insert searchToInsert;
    }
    
    // function to return gender options for CustomerSearchPage
    @AuraEnabled
    public static List<String> getGenderOptions(){
        List<Schema.PicklistEntry> picklistValues = Contact.Sex__c.getDescribe().getPicklistValues();
        List<String> returnedOptions = new List<String>();
        for(Schema.PicklistEntry spe : picklistValues){
            returnedOptions.add(spe.getValue());
        }
        return returnedOptions;
    }
    
    // function to return specialization options for CustomerSearchPage
    @AuraEnabled
    public static List<String> getSpecializationOptions(){
        List<Schema.PicklistEntry> picklistValues = 
            Contact.Specialization__c.getDescribe().getPicklistValues();
        List<String> returnedOptions = new List<String>();
        for(Schema.PicklistEntry spe : picklistValues){
            returnedOptions.add(spe.getValue());
        }
        return returnedOptions;
    }
    
    // function to return language options for CustomerSearchPage
    @AuraEnabled
    public static List<String> getLanguageOptions(){
        List<Schema.PicklistEntry> picklistValues = 
            Contact.Language__c.getDescribe().getPicklistValues();
        List<String> returnedOptions = new List<String>();
        for(Schema.PicklistEntry spe : picklistValues){
            returnedOptions.add(spe.getValue());
        }
        return returnedOptions;
    }
    
    // function to return language options for CustomerRequestPage
    @AuraEnabled
    public static List<String> getDoctorLanguages(String doctorId){
        Contact doctor = [SELECT Id, Language__c FROM Contact WHERE Id=:doctorId LIMIT 1];
        return doctor.Language__c.split(';');
    }
    
    // function to get id of contact associated with current community user to allow insertion of search
    // and appointment records
    @AuraEnabled
    public static Id getContactId(){
        id userId = UserInfo.getUserId();
		User u = [select id, contactId from User where id = : userId];
		id getContactId = u.contactId;
		return getContactId;
    }
}