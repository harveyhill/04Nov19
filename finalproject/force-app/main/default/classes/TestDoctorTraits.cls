@IsTest
public with sharing class TestDoctorTraits {
	@IsTest (seeAllData=true)
    static public void runTest() {	
        List<String> genders = new List<String>{};
            for ( PicklistEntry gend : Contact.Gender__c.getDescribe().getPicklistValues() ) {
                genders.add( gend.getLabel() );
            }
        
        List<String> languages = new List<String>{};
            for ( PicklistEntry lang : 	Contact.Languages__c.getDescribe().getPicklistValues() ) {
                languages.add( lang.getLabel() );
            }
        
        List<String> specialities = new List<String>{};
            for ( PicklistEntry spec : 	Contact.Speciality__c.getDescribe().getPicklistValues() ) {
                specialities.add( spec.getLabel() );
            }
        
        System.AssertEquals(DoctorTraits.specOptions(), specialities);
        System.AssertEquals(DoctorTraits.genderOptions(), genders);
        System.AssertEquals(DoctorTraits.langOptions(), languages);
        
        System.AssertEquals(DoctorTraits.recTypeCust, '0126g000000Mc5UAAS');
        System.AssertEquals(DoctorTraits.recTypeDoc, '0126g000000Mc5VAAS');
    }
    
}