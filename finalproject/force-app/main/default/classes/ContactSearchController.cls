public class ContactSearchController {
    /*
    @AuraEnabled
    public static List<Contact> getDoctors(String specialty, String gender, String language) {
        List<Contact> docList = new List<Contact>();
        Final String recTypeDoc = Schema.SObjectType.Contact.getRecordTypeInfosByName()
                                        .get('Doctor').getRecordTypeId();
        //docList = database.query('Select Id, Name, Speciality__c, Gender__c, Languages__c From Contact Where RecordTypeId=:recTypeDoc AND Speciality__c=:specialty AND Gender__c=:gender AND Languages__c includes :language');
		docList = database.query('Select Id, Name, Speciality__c, Gender__c, Languages__c From Contact Where RecordTypeId=:recTypeDoc limit 5');
        
        return docList;
}*/
}