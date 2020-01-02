public with sharing class LAC_CustomerController 
{
    final static Id recTypeDoc = Schema.SObjectType.Contact.getRecordTypeInfosByName().get('Doctor').getRecordTypeId();
    
    @AuraEnabled
    public static List<Contact> getDoctors(String specialty, String gender, String language) 
    {
        String recTypeDoc = DoctorTraits.recTypeDoc;
        String q = 	'SELECT Id, Name, Speciality__c, Gender__c, Languages__c ' +
            		'FROM Contact ' +
            		'WHERE RecordTypeId=:recTypeDoc';
        if ( specialty != 'Any' ) q += ' AND Speciality__c=:specialty';
        if ( gender != 'Any' ) q += ' AND Gender__c=:gender';
        if ( language != 'Any' ) q += ' AND Languages__c=:language';
        System.debug(q);
        List<Contact> retlist = database.query(q);
        for ( Contact c : retlist ) System.debug('Contact: ' + c);
        return retlist;
    }
    

    // getting personal customer info based on the user ID logged in
    @AuraEnabled
    public static Contact getCustomerInfo() {
        String userFullName = UserInfo.getName();
        Contact customer = database.query('Select Id, Name, Email, Phone From Contact Where Name=:userFullName Limit 1');
        return customer;
    }
    
    @AuraEnabled
	public static List<Appointment__c> getCustomerAppts ( )
    {	// get community contact id from current user id
        User u = [ SELECT Id, ContactId FROM User WHERE id =: userInfo.getUserId()];
        Contact cust = [ SELECT Id FROM Contact WHERE id =: u.ContactId ];
        // return all appointments connected to doctor along with their related customers
        List<Appointment__c> allAppts = 
        	[ 	SELECT Id, Start_Time__c, Message__c, Status__c, Doctor_Contact__r.Id, Doctor_Contact__r.Name
                FROM Appointment__c
             	WHERE Customer_Contact__c = :cust.Id
            ];
        return allAppts;
    }

    // getting List of Appointments based on the user ID logged in
    @AuraEnabled
    public static List<Appointment__c> getAppointments() {
        String userFullName = UserInfo.getName();
      //  Contact customer = database.query('Select ID From Contact Where Name=:userFullName Limit 1');
       // ID customerID = customer.ID;
        List<Appointment__c> appList = new List<Appointment__c>();
        appList = database.query('Select ID, Name, Start_Time__c, End_Time__c, Status__c, Message__c, Customer_Contact__c, Doctor_Contact__c from Appointment__c where Customer_Contact__c=:customerID');
         appList = database.query('Select ID, Name, Start_Time__c, End_Time__c, Status__c, Message__c, Customer_Contact__c, Doctor_Contact__c from Appointment__c');
        return appList; 
        // datetime present = system.now();
        // String confirmed = 'Confirmed';
        
    }

    // Returning a list of Strings filled with the picklist values of Specialty__c
    @AuraEnabled
    public static List<String> getAvailableDoctorSpecialtyOptions() 
    {	List<String> specs = DoctorTraits.specOptions();
     	specs.add(0, 'Any');
     	return specs;
    }

    // Returning a list of Strings filled with the picklist values of Gender__c
  @AuraEnabled
    public static List<String> getAvailableDoctorGenderOptions() 
    {	List<String> genders = DoctorTraits.genderOptions();
     	genders.add(0, 'Any');
     	return genders;
    }

    // Returning a list of Strings filled with the picklist values of Languages__c
   @AuraEnabled
    public static List<String> getAvailableDoctorLanguageOptions() 
    {	List<String> langs = DoctorTraits.langOptions();
     	langs.add(0, 'Any');
     	return langs;
	}


    @AuraEnabled
    public static void CreateApp(String docID, String startTime){
        try 
        {
            //get the user name and get related customer
            String userFullName = UserInfo.getName();
			final String recTypeDoc = Schema.SObjectType.Contact.getRecordTypeInfosByName()
                                        .get('Doctor').getRecordTypeId();
            
            //Contact doc = [Select ID From Contact WHERE ID=:docID Limit 1];
            Contact cust = [Select Id, Name, Email, Phone From Contact Where Name=:userFullName Limit 1];

            Id custId = cust.Id;
            Appointment__c app = new Appointment__c();
            app.Customer_Contact__c = custId;
            app.Doctor_Contact__c = docID;
            app.Start_Time__c = (null != startTime ? DateTime.parse(startTime) : DateTime.now().addDays(1));
            insert app;
        } 
        catch (DmlException exc) 
        {
            System.debug(exc.getMessage());
        } 
    }
}

/*List<String> pickListValuesList= new List<String>();
		Schema.DescribeFieldResult fieldResult = Contact.Speciality__c.getDescribe();
		List<Schema.PicklistEntry> spec = fieldResult.getPicklistValues();
        pickListValuesList.add('Any');
		for( Schema.PicklistEntry pickListVal : spec){
			pickListValuesList.add(pickListVal.getValue());
            
		}
        
		return pickListValuesList;
    */
        /*
        List<String> pickListValuesList= new List<String>();
		Schema.DescribeFieldResult fieldResult = Contact.Languages__c.getDescribe();
		
        List<Schema.PicklistEntry> lang = fieldResult.getPicklistValues();
        pickListValuesList.add('Any');
		for( Schema.PicklistEntry pickListVal : lang){
			pickListValuesList.add(pickListVal.getValue());
		}
		return pickListValuesList;
  */

/*
        List<String> pickListValuesList= new List<String>();
		Schema.DescribeFieldResult fieldResult = Contact.Gender__c.getDescribe();
		List<Schema.PicklistEntry> gend = fieldResult.getPicklistValues();
        pickListValuesList.add('Any');
		for( Schema.PicklistEntry pickListVal : gend){
			pickListValuesList.add(pickListVal.getValue());
		}     
        
		return pickListValuesList;
    */
        /*Docs = database.query('Select Id, Name, Speciality__c, Gender__c, Languages__c' +
                              'From Contact' +
                              'Where RecordTypeId=:devRecordTypeId'
                             );    

      	if (specialty!='Specialty')
            Docs = database.query('Select Id, Name, Speciality__c, Gender__c, Languages__c From Contact Where RecordTypeId=:devRecordTypeId AND Speciality__c=:specialty');
      	// system.debug(specialty+' '+gender+' '+language);
      	if (gender!='Gender')
            Docs = database.query('Select Id, Name, Speciality__c, Gender__c, Languages__c From Contact Where RecordTypeId=:devRecordTypeId AND Gender__c=:gender');
      	if (language!='Languages')
            Docs = database.query('Select Id, Name, Speciality__c, Gender__c, Languages__c From Contact Where RecordTypeId=:devRecordTypeId AND Languages__c includes :language');
        return Docs;*/