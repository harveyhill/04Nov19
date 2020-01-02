@isTest
private class TestFlagDoctors {
    static testmethod void testScheduledJob() {
        // Create Test Doctor and Customer
        Final String recTypeDoc = Schema.SObjectType.Contact.getRecordTypeInfosByName()
                                        .get('Doctor').getRecordTypeId();
        Final String recTypeCust = Schema.SObjectType.Contact.getRecordTypeInfosByName()
                                        .get('Customer').getRecordTypeId();
        Contact doc = new Contact();
        	doc.LastName = 'Dawkins';
        	doc.RecordTypeId = recTypeDoc;
        Contact cust = new Contact();
        	cust.LastName = 'Henry';
        	cust.RecordTypeId = recTypeCust;
        String CRON_EXP = '0 0 0 1 10 ? 2020';
        
        
        //Insert contacts and Appointment
        insert doc;
        insert cust;
        
        
        // Create Appointment between six months and one year ago
        Appointment__c app = new Appointment__c();
        	app.Doctor_Contact__c = doc.Id;
        	app.Customer_Contact__c = cust.Id;
        	app.Start_Time__c = DateTime.now() - 200;
        insert app;
        
        // Query for the flagged field of the doctor we just inserted
        ID docID = doc.ID;
        Contact doctor = database.query('Select Flagged__c From Contact Where ID =: docID');
        Boolean flagged = doctor.Flagged__c;
        System.assertEquals(false, flagged);
        
        Test.startTest();
        String jobId = System.schedule('ScheduledApexTest',
            CRON_EXP, 
            new FlagDoctors());
        
        
        Test.stopTest();
        
        // Assert that flagged field was changed from false to true
        System.assertEquals(true, flagged);
    }
}