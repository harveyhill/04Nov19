@isTest
public class TestCustomerSearchRequestController {
    @isTest static void testReturnMatchingDoctors(){
        // test with no specifications, gender specified, language specified, specialization specified
        UtilityTestClass.testFactory();
        String male = 'Male';
        String spanish = 'Spanish';
        String proctologist = 'Proctologist';
        String generalTest = 'SELECT Id FROM Residence__c';
        String genderTest = 'SELECT Id FROM Residence__c WHERE Doctor__r.Sex__c=\'' + male + '\'';
        String languageTest = 'SELECT Id FROM Residence__c WHERE Doctor__r.Language__c INCLUDES(\'' +
            spanish + '\')';
        String specializationTest = 'SELECT Id FROM Residence__c WHERE Doctor__r.Specialization__c=\'' +
            proctologist + '\'';
        List<Residence__c> generalResults = CustomerSearchRequestPageController.returnMatchingDoctors(
            generalTest);
        List<Residence__c> genderResults = CustomerSearchRequestPageController.returnMatchingDoctors(
            genderTest);
        List<Residence__c> languageResults = CustomerSearchRequestPageController.returnMatchingDoctors(
            languageTest);
        List<Residence__c> specializationResults = CustomerSearchRequestPageController.returnMatchingDoctors(
            specializationTest);
        Id expectedId = [SELECT Id FROM Residence__c LIMIT 1].Id;
        System.assertEquals(expectedId, generalResults[0].Id);
        System.assertEquals(expectedId, genderResults[0].Id);
        System.assertEquals(expectedId, languageResults[0].Id);
        System.assertEquals(expectedId, specializationResults[0].Id);
    }
    
    @isTest static void testInsertSearchRecord(){
        // test insertion of search record
        UtilityTestClass.testFactory();
        Contact testCustomer = [SELECT Id FROM Contact WHERE Name='Test Customer' LIMIT 1];
        Search__c testSearch = new Search__c(Contact__c=testCustomer.Id);
        CustomerSearchRequestPageController.insertSearchRecord(testSearch);
        testSearch = [SELECT Id, Contact__c FROM Search__c LIMIT 1];
        System.assertEquals(testCustomer.Id, testSearch.Contact__c);
    }
    
    @isTest static void testGetGenderOptions(){
        // returned options should be male and female
        List<String> expectedGenderOptions = new List<String>();
        expectedGenderOptions.add('Male');
        expectedGenderOptions.add('Female');
        List<String> actualGenderOptions = CustomerSearchRequestPageController.getGenderOptions();
        System.assertEquals(expectedGenderOptions, actualGenderOptions);
    }
    
    @isTest static void testGetSpecializationOptions(){
        // returned options should be Cardiologist, Chiropractor, General Practitioner, Oncologist,	OBGYN,
        // and Proctologist
        List<String> expectedSpecializationOptions = new List<String>();
        expectedSpecializationOptions.add('Cardiologist');
        expectedSpecializationOptions.add('Chiropractor');
        expectedSpecializationOptions.add('General Practitioner');
        expectedSpecializationOptions.add('Oncologist');
        expectedSpecializationOptions.add('OBGYN');
        expectedSpecializationOptions.add('Proctologist');
        List<String> actualSpecializationOptions = 
            CustomerSearchRequestPageController.getSpecializationOptions();
        System.assertEquals(expectedSpecializationOptions, actualSpecializationOptions);
    }
    
    @isTest static void testGetLanguageOptions(){
        // returned options should be English, Spanish, French, and Chinese
        List<String> expectedLanguageOptions = new List<String>();
        expectedLanguageOptions.add('English');
        expectedLanguageOptions.add('Spanish');
        expectedLanguageOptions.add('French');
        expectedLanguageOptions.add('Chinese');
        List<String> actualLanguageOptions = CustomerSearchRequestPageController.getLanguageOptions();
        System.assertEquals(expectedLanguageOptions, actualLanguageOptions);
    }
    
    @isTest static void testGetDoctorLanguages(){
        // returned languages should be English and Spanish
        UtilityTestClass.testFactory();
        List<String> expectedLanguages = new List<String>();
        expectedLanguages.add('English');
        expectedLanguages.add('Spanish');
        Contact testDoctor = [SELECT Id FROM Contact WHERE LastName='Doctor' LIMIT 1];
        List<string> actualLanguages = CustomerSearchRequestPageController.getDoctorLanguages(testDoctor.Id);
        System.assertEquals(expectedLanguages, actualLanguages);
    }
}