public with sharing class EnableDoctorCommunityUserController {
    // required user fields shared by all community users
    private String comLocale = 'en_US';
    private String comLanguage = 'en_US';
    private String comEmailEnc = 'UTF-8';
    private String comTimeZone = 'America/Los_Angeles';

    // get the id for the doctor community login user profile ('Hey, we didn't hard code the ID!')
    private String comProf = [SELECT Name, Id FROM Profile WHERE Name='Doctor Community Login User'].Id;

    // this is a controller extension so we have to involve the standard controller and have a private instance of the 
    // object that's being controlled
    private Doctor__c doc;
    public EnableDoctorCommunityUserController (ApexPages.StandardController stdController){
        this.doc = (Doctor__c) stdController.getRecord();
    }

    // alright, do the dirty work
    public void makeDoctorUser(){
        // get the doctor record currently being viewed
        Doctor__c docObj = [SELECT Id, First_Name__c, Last_Name__c, Email__c FROM Doctor__c WHERE 
        Id=:ApexPages.currentPage().getParameters().get('id') LIMIT 1];

        // initialize new user and give all of the constant field values we set earlier
        User docUser = new User();
        docUser.LocaleSidKey = comLocale;
        docUser.TimeZoneSidKey = comTimeZone;
        docUser.ProfileID = comProf;
        docUser.LanguageLocaleKey = comLanguage;
        docUser.EmailEncodingKey = comEmailEnc;

        // 'map' equal field values from doctor record to new user
        docUser.LastName = docObj.Last_Name__c;
        docUser.FirstName = docObj.First_Name__c;
        docUser.Email = docObj.Email__c;

        // set alias as first initial, last name
        docUser.Alias = docObj.First_Name__c.substring(0, 1) + docObj.Last_Name__c;

        // generate a unique username
        DateTime d = DateTime.now();
        docUser.Username = docUser.Alias + String.valueOf(d.getTime()) + '@aol.com';

        // grab the associated contact and assign
        String contactName = docObj.First_Name__c + ' ' + docObj.Last_Name__c;
        docUser.ContactId = [SELECT Id FROM Contact WHERE Name=:contactName LIMIT 1].Id;

        // give a community role and insert user
        docUser.PortalRole = 'PersonAccount';
        insert docUser;

    }
}