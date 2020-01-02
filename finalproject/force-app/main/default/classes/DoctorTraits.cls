// Interior utility class for accessing picklist arrays
public class DoctorTraits 
{	// Save record type ID's for contact as final strings
    public static final String recTypeDoc = Schema.SObjectType.Contact.getRecordTypeInfosByName()
                                        			.get('Doctor').getRecordTypeId();
    public static final String recTypeCust = Schema.SObjectType.Contact.getRecordTypeInfosByName()
                                        			.get('Customer').getRecordTypeId();
    
    // Fetch doctor picklist fields and return them as lists of strings
    static public List<String> genderOptions()
    {   List<String> genders = new List<String>{};
        for ( PicklistEntry gend : Contact.Gender__c.getDescribe().getPicklistValues() )
            genders.add( gend.getLabel() );
        return genders;
    }
    static public List<String> langOptions()
    {   List<String> languages = new List<String>{};
        for ( PicklistEntry lang : 	Contact.Languages__c.getDescribe().getPicklistValues() )
            languages.add( lang.getLabel() );
        return languages;
    }
    static public List<String> specOptions()
    {   List<String> specialities = new List<String>{};
        for ( PicklistEntry spec : 	Contact.Speciality__c.getDescribe().getPicklistValues() )
            specialities.add( spec.getLabel() );
        return specialities; 
    }
}