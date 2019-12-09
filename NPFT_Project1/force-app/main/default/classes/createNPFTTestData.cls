public class createNPFTTestData {
    public static void insertTestData(){
        // insert customers
        List<Customer__c> testCustomers = new List<Customer__c>();
        testCustomers.add(new Customer__c(First_Name__c='Tom', Last_Name__c='Hanks', Age__c=57, 
                                          City__c='Herndon', Country__c='USA', Sex__c='Male', State__c='VA', 
                                          Street_Address__c='357 People Road', Zip_Postal_Code__c='20170'));
        testCustomers.add(new Customer__c(Age__c = 31, City__c='Reston', Country__c='USA', 
                                          First_Name__c= 'Harvey', Last_Name__c='Hill', Sex__c='Male',
                                          State__c= 'VA', Street_Address__c='11730 American Plaza Blvd',
                                          Zip_Postal_Code__c='20170'));
        testCustomers.add(new Customer__c(Age__c=26, City__c='Herndon', Country__c='US', 
                                          First_Name__c='John', Last_Name__c='Big', Sex__c='Male', 
                                          State__c='VA', Street_Address__c='2282 Austoria Drive',
                                          Zip_Postal_Code__c='20170'));
        insert testCustomers;

        // insert account
        Account doctorAccount = new Account(Name='Doctor');
        upsert doctorAccount;

        // grab account
        doctorAccount = [SELECT Id FROM Account WHERE Name='Doctor' LIMIT 1];

        // insert contacts for each doctor
        List<Contact> testContacts = new List<Contact>();
        testContacts.add(new Contact(FirstName='Ben', LastName='Learn', AccountId=doctorAccount.Id));
        testContacts.add(new Contact(FirstName='Francesco', LastName='Ward', AccountId=doctorAccount.Id));
        testContacts.add(new Contact(FirstName='Simon', LastName='Jose', AccountId=doctorAccount.Id));
        testContacts.add(new Contact(FirstName='Bailey', LastName='Dawkins', AccountId=doctorAccount.Id));
        testContacts.add(new Contact(FirstName='Jonathan', LastName='Liu', AccountId=doctorAccount.Id));
        testContacts.add(new Contact(FirstName='Emily', LastName='Blunt', AccountId=doctorAccount.Id));

        insert testContacts;

        // temp contact to create lookup relationship
        Contact tempContact;
        String fullName;

        // insert doctors
        List<Doctor__c> testDoctors = new List<Doctor__c>();

        fullName = 'Ben Learn';
        tempContact = [SELECT Id FROM Contact WHERE Name=:fullName LIMIT 1];
        testDoctors.add(new Doctor__c(First_Name__c='Ben', Last_Name__c='Learn', Email__c='blearn@gmail.com', 
                                        Languages_Spoken__c='Chinese', Phone_Number__c='8654125796', Sex__c='Male', 
                                        Specialty__c='Neurosurgeon', Account__c=doctorAccount.Id, Contact__c=tempContact.Id));

        fullName = 'Francesco Ward';
        tempContact = [SELECT Id FROM Contact WHERE Name=:fullName LIMIT 1];
        testDoctors.add(new Doctor__c(First_Name__c='Francesco', Last_Name__c='Ward', Email__c='fward@gmail.com', 
                                        Languages_Spoken__c= 'English;Chinese', Phone_Number__c='987532587',
                                        Sex__c='Male', Specialty__c='Plastic Surgeon', Account__c=doctorAccount.Id, 
                                        Contact__c=tempContact.Id));
        
        fullName = 'Simon Jose';
        tempContact = [SELECT Id FROM Contact WHERE Name=:fullName LIMIT 1];
        testDoctors.add(new Doctor__c(First_Name__c='Simon', Last_Name__c='Jose', Email__c='sjose@gmail.com', 
                                        Languages_Spoken__c='English;Spanish;Chinese', Phone_Number__c='8527531598',
                                        Sex__c='Male', Specialty__c='Family Medicine', Account__c=doctorAccount.Id, 
                                        Contact__c=tempContact.Id));
        
        fullName = 'Bailey Dawkins';
        tempContact = [SELECT Id FROM Contact WHERE Name=:fullName LIMIT 1];
        testDoctors.add(new Doctor__c(First_Name__c='Bailey', Last_Name__c='Dawkins', Email__c='bdawkins@gmail.com', 
                                        Languages_Spoken__c='English;Spanish', Phone_Number__c='5548659657',
                                        Sex__c='Male', Specialty__c='Cardiologist', Account__c=doctorAccount.Id, 
                                        Contact__c=tempContact.Id));

        fullName = 'Jonathan Liu';
        tempContact = [SELECT Id FROM Contact WHERE Name=:fullName LIMIT 1];
        testDoctors.add(new Doctor__c(First_Name__c='Jonathan', Last_Name__c='Liu', Email__c='jliu@gmail.com', 
                                        Languages_Spoken__c='English', Phone_Number__c='4125879654',
                                        Sex__c='Male', Specialty__c='Allergist', Account__c=doctorAccount.Id, 
                                        Contact__c=tempContact.Id));

        fullName = 'Emily Blunt';
        tempContact = [SELECT Id FROM Contact WHERE Name=:fullName LIMIT 1];
        testDoctors.add(new Doctor__c(First_Name__c='Emily', Last_Name__c='Blunt', Email__c='eblunt@gmail.com', 
                                        Languages_Spoken__c='English', Phone_Number__c='8569874523',
                                        Sex__c='Female', Specialty__c='Orthopedic Specialist', Account__c=doctorAccount.Id,
                                        Contact__c=tempContact.Id));
        insert testDoctors;


        // insert office locations
        List<Office_Location__c> testOffices = new List<Office_Location__c>();
        testOffices.add(new Office_Location__c(City__c='North Hollywood', Country__c='USA', Name='Sacred Heart', State__c='VA',
                                                Street_Address__c='12629 Riverside Drive', Zip_Postal_Code__c='20170'));
        testOffices.add(new Office_Location__c(City__c='Reston', Country__c='USA', Name='Revature Office', State__c='VA',
                                                Street_Address__c='11730 Plaza America Blvd', Zip_Postal_Code__c='20170'));
        testOffices.add(new Office_Location__c(City__c='Arlington', Country__c='US', Name='Virginia Hospital Center', 
                                                State__c='VA', Street_Address__c='1701 N George Mason Drive', 
                                                Zip_Postal_Code__c='20170'));
        insert testOffices;

        // insert appointments
        List<Appointment__c> testAppointments = new List<Appointment__c>();
        Doctor__c tempDoctor;
        Customer__c tempCustomer;

        tempDoctor = [SELECT Id FROM Doctor__c WHERE First_Name__c='Ben' AND Last_Name__c='Learn' LIMIT 1];
        tempCustomer = [SELECT Id FROM Customer__c WHERE FullName__c='John Big' LIMIT 1];
        testAppointments.add(new Appointment__c(Doctor__c=tempDoctor.Id, Customer__c=tempCustomer.Id, 
                                                Start_Time__c=DateTime.newInstance(2019, 11, 28, 13, 0, 0), 
                                                End_Time__c=DateTime.newInstance(2019, 11, 28, 14, 0, 0)));

        tempDoctor = [SELECT Id FROM Doctor__c WHERE First_Name__c='Bailey' AND Last_Name__c='Dawkins' LIMIT 1];
        tempCustomer = [SELECT Id FROM Customer__c WHERE FullName__c='Harvey Hill' LIMIT 1];
        testAppointments.add(new Appointment__c(Doctor__c=tempDoctor.Id, Customer__c=tempCustomer.Id, 
                                                Start_Time__c=DateTime.newInstance(2019, 11, 29, 10, 0, 0), 
                                                End_Time__c=DateTime.newInstance(2019, 11, 29, 11, 0, 0)));
        
        tempDoctor = [SELECT Id FROM Doctor__c WHERE First_Name__c='Simon' AND Last_Name__c='Jose' LIMIT 1];
        tempCustomer = [SELECT Id FROM Customer__c WHERE FullName__c='Tom Hanks' LIMIT 1];
        testAppointments.add(new Appointment__c(Doctor__c=tempDoctor.Id, Customer__c=tempCustomer.Id, 
                                                Start_Time__c=DateTime.newInstance(2019, 11, 26, 16, 0, 0), 
                                                End_Time__c=DateTime.newInstance(2019, 11, 26, 17, 0, 0)));

        tempDoctor = [SELECT Id FROM Doctor__c WHERE First_Name__c='Francesco' AND Last_Name__c='Ward' LIMIT 1];
        tempCustomer = [SELECT Id FROM Customer__c WHERE FullName__c='Tom Hanks' LIMIT 1];
        testAppointments.add(new Appointment__c(Doctor__c=tempDoctor.Id, Customer__c=tempCustomer.Id, 
                                                Start_Time__c=DateTime.newInstance(2019, 11, 20, 12, 0, 0), 
                                                End_Time__c=DateTime.newInstance(2019, 11, 20, 13, 0, 0)));

        insert testAppointments;

        // insert residences
        List<Residence__c> testResidences = new List<Residence__c>();
        Office_Location__c sh = [SELECT Id FROM Office_Location__c WHERE Name='Sacred Heart' LIMIT 1];
        Office_Location__c ro = [SELECT Id FROM Office_Location__c WHERE Name='Revature Office' LIMIT 1];
        Office_Location__c vhc = [SELECT Id FROM Office_Location__c WHERE Name='Virginia Hospital Center' LIMIT 1];

        tempDoctor = [SELECT Id FROM Doctor__c WHERE First_Name__c='Ben' AND Last_Name__c='Learn' LIMIT 1];
        testResidences.add(new Residence__c(Doctor__c=tempDoctor.Id, Office_Location__c=sh.id));
        testResidences.add(new Residence__c(Doctor__c=tempDoctor.Id, Office_Location__c=ro.id));

        tempDoctor = [SELECT Id FROM Doctor__c WHERE First_Name__c='Simon' AND Last_Name__c='Jose' LIMIT 1];
        testResidences.add(new Residence__c(Doctor__c=tempDoctor.Id, Office_Location__c=sh.id));
        testResidences.add(new Residence__c(Doctor__c=tempDoctor.Id, Office_Location__c=ro.id));
        testResidences.add(new Residence__c(Doctor__c=tempDoctor.Id, Office_Location__c=vhc.id));

        tempDoctor = [SELECT Id FROM Doctor__c WHERE First_Name__c='Bailey' AND Last_Name__c='Dawkins' LIMIT 1];
        testResidences.add(new Residence__c(Doctor__c=tempDoctor.Id, Office_Location__c=ro.id));
        testResidences.add(new Residence__c(Doctor__c=tempDoctor.Id, Office_Location__c=vhc.id));
        testResidences.add(new Residence__c(Doctor__c=tempDoctor.Id, Office_Location__c=sh.id));

        tempDoctor = [SELECT Id FROM Doctor__c WHERE First_Name__c='Francesco' AND Last_Name__c='Ward' LIMIT 1];
        testResidences.add(new Residence__c(Doctor__c=tempDoctor.Id, Office_Location__c=ro.id));
        testResidences.add(new Residence__c(Doctor__c=tempDoctor.Id, Office_Location__c=sh.id));

        tempDoctor = [SELECT Id FROM Doctor__c WHERE First_Name__c='Emily' AND Last_Name__c='Blunt' LIMIT 1];
        testResidences.add(new Residence__c(Doctor__c=tempDoctor.Id, Office_Location__c=vhc.id));
        
        tempDoctor = [SELECT Id FROM Doctor__c WHERE First_Name__c='Jonathan' AND Last_Name__c='Liu' LIMIT 1];
        testResidences.add(new Residence__c(Doctor__c=tempDoctor.Id, Office_Location__c=vhc.id));
        
        insert testResidences;
    }

    public static void clearTestData(){
        // delete appointments and residences
        List<Appointment__c> testAppointments = [SELECT Id FROM Appointment__c];
        delete testAppointments;
        List<Residence__c> testResidences = [SELECT Id FROM Residence__c];
        delete testResidences;

        // delete customers and office locations
        List<Customer__c> testCustomers = [SELECT Id FROM Customer__c];
        delete testCustomers;
        List<Office_Location__c> testOffices = [SELECT Id FROM Office_Location__c];
        delete testOffices;

        // delete doctor account and doctors
        List<Doctor__c> testDoctors = [SELECT Id FROM Doctor__c];
        delete testDoctors;
    }
}