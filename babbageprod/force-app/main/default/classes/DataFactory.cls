public class DataFactory{
    enum UserType {Doctor,Customer}
    static string defaultEmail='test@test.com';
    static string[] LastNameList=new List<String>{
        'Smith','Johnson','Williams',
        'Jones','Brown','Davis',
        'Miller','Wilson','Moore',
        'Taylor','Anderson','Thomas',
        'Hall','Allen','Young',
        'Hernandaz','Sanchez','Morris'
    };
    static string[] FirstNameMaleList=new List<String>{
        'James','John','Robert',
        'Michael','William','David',
        'Richard','Joseph','Thomas',
        'Charles','Christopher','Daniel'
    };
    static string[] FirstNameFemaleList=new List<String>{
        'Mary','Patricia','Jennifer',
        'Linda','Elizabeth','Barbara',
        'Susan','Jessica','Sarah',
        'Karen','Nancy','Margaret'
    };

    //includes Washington DC as DC
    static string[] StateList=new List<String>{
        'AL','AK','AZ','AR','CA',
        'CO','CT','DE','DC','FL',
        'GA','HI','ID','IL','IN',
        'IA','KS','KY','LA','ME',
        'MD','MA','MI','MN','MS',
        'MO','MT','NE','NV','NH',
        'NJ','NM','NY','NC','ND',
        'OH','OK','OR','PA','RI',
        'SC','SD','TN','TX','UT',
        'VT','VA','WA','WV','WI','WY'
    };

    static string[] StreetNameList=new List<String>{
        'Generic st',
        'Boring rd',
        'Sample st'
    };

    static string[] CityList=new List<String>{
        'GenericVille',
        'BoringTown',
        'SampleWay'
    };

    static string[] OfficeNameList=new List<String>{
        'Generic Plus',
        'Boring Central',
        'Sample Office'
    };

    static string[] DescriptionList=new List<String>{
        'Owie ouchie',
        'Oof. I\'m hurting really bad',
        'Yowch',
        'Big boo boo'
    };

    static string defaultDoctorMessage='Default Message';

    public static void CreateAll(integer n){
        InitalizeAccounts();
        CreateOfficeLocations(n);
        CreateContacts(n);
        CreateResidences(3);
        CreateAppointments(3);
        CreateSearches(6);
        CreateDoctorSurveys(3);
        CreateOfficeSurveys(3);        
    }
    public static void InitalizeAccounts(){
        if([SELECT ID FROM Account WHERE Name='Doctor Account' LIMIT 1].size()!=1)
        {
            Account newAcc = new Account();
            newAcc.Name='Doctor Account';
            insert newAcc;
        }
        if([SELECT ID FROM Account WHERE Name='Customer Account' LIMIT 1].size()!=1)
        {
            Account newAcc=new Account();
            newAcc.Name='Customer Account';
            insert newAcc;
        }
    }
    /* Use BabbageCommunityUser.cls to create Users
    public static void CreateUsers(integer n, UserType type){
        ID profileID= [SELECT ID FROM Profile WHERE Name='Babbage Customer User' LIMIT 1].ID;
        Account userAccount=[SELECT ID FROM Account WHERE name=':type.name() Account' LIMIT 1];
        if(userAccount==null)
        {
            userAccount=new Account();
            userAccount.name=type.Name()+' Account';
            insert userAccount;
        }

        List<Contact> insertList=new List<Contact>();
        for(integer i=0;i<n;i++){
            User u=new User();
            u.profileID=profileID;
            u.email=defaultEmail;
            u.LastName=LastNameList[Integer.valueof(Math.random()*LastNameList.size())];
            //u.FirstName=FirstNameMaleList[Integer.valueof(Math.random()*FirstNameMaleList.size())];
            if(type==UserType.Doctor){


            }
            else if(type==UserType.Customer){

            }
        }
    }
    */
    public static void CreateContacts(integer n){
        CreateDoctors(n);
        createCustomers(n);
    }
    public static void CreateDoctors(integer n){
        List<Contact> contactList=new List<Contact>();
        ID accountID=[SELECT ID FROM Account WHERE Name='Doctor Account' LIMIT 1].ID;
        ID recordTypeID=[SELECT ID FROM RecordType WHERE Name='Doctor' and sObjectType='Contact' LIMIT 1].ID;
        for(integer i=0;i<n;i++)
        {	
            Contact newCont=new Contact();
            newCont.RecordTypeID=recordTypeID;
            newCont.AccountID =accountID;
            newCont.email=defaultEmail;
            if (Math.Random()>=0.5){
                newCont.sex__c='Male';
                newCont.FirstName=FirstNameMaleList[Integer.valueof(Math.random()*FirstNameMaleList.size())];
                newCont.LastName=LastNameList[Integer.valueof(Math.random()*LastNameList.size())];
            }
            else{
                newCont.sex__c='Female';
                newCont.FirstName=FirstNameFemaleList[Integer.valueof(Math.random()*FirstNameFemaleList.size())];
                newCont.LastName=LastNameList[Integer.valueof(Math.random()*LastNameList.size())];
            }

            List<Schema.PickListEntry> LanguageList=Contact.language__c.getDescribe().getPicklistValues();
            newCont.language__c='';
            for(integer j=Integer.valueof(Math.floor(Math.Random()*2));j>=0;j--)
            {
                integer randNum=Integer.valueof(Math.Random()*(LanguageList.size()));
                newCont.language__c=LanguageList[randNum].getValue()+';'+newCont.language__c;
                LanguageList.remove(randNum);
            }

            List<Schema.PickListEntry> specList=Contact.specialization__c.getDescribe().getPicklistValues();
            newCont.specialization__c=specList[Integer.valueof(Math.floor(Math.random()*(specList.size())))].getValue();
            contactList.add(newCont);
        }
        insert contactList;

    }
    public static void CreateCustomers(integer n){
        List<Contact> contactList=new List<Contact>();
        ID accountID=[SELECT ID FROM Account WHERE Name='Customer Account' LIMIT 1].ID;
        ID recordTypeID=[SELECT ID FROM RecordType WHERE Name='Customer' and sObjectType='Contact' LIMIT 1].ID;
        for(integer i=0;i<n;i++)
        {
            Contact newCont=new Contact();
            newCont.RecordTypeID=recordTypeID;
            newCont.AccountID =accountID;
            newCont.email=defaultEmail;
            newCont.phone=(Math.mod(Integer.valueof(Math.Random()*999),899)+100)+'-'+
                (Math.mod(Integer.valueof(Math.Random()*999),899)+100)+'-'+
                (Math.mod(Integer.valueof(Math.Random()*9999),8999)+1000);
            newCont.age__c=Integer.valueof(Math.floor(Math.Random()*60))+14;
            newCont.mailingStreet=Integer.valueof((Math.Random()*9999))+' '+
                StreetNameList[Integer.valueof(Math.Random()*StreetNameList.size())];
            newCont.mailingCity=CityList[Integer.valueof(Math.Random()*CityList.size())];
            newCont.mailingState=StateList[Integer.valueof(Math.Random()*StateList.size())];
            newCont.mailingPostalCode=String.valueof(Integer.valueof(Math.Random()*99999));
            newCont.BirthDate=Date.today()-Integer.valueof(newCont.age__c*365)-Integer.valueof(Math.random()*364);
            if (Math.Random()>=0.5){
                newCont.sex__c='Male';
                newCont.FirstName=FirstNameMaleList[Integer.valueof(Math.random()*FirstNameMaleList.size())];
                newCont.LastName=LastNameList[Integer.valueof(Math.random()*LastNameList.size())];
            }
            else{
                newCont.sex__c='Female';
                newCont.FirstName=FirstNameFemaleList[Integer.valueof(Math.random()*FirstNameFemaleList.size())];
                newCont.LastName=LastNameList[Integer.valueof(Math.random()*LastNameList.size())];
            }

            List<Schema.PickListEntry> conditionsList=Contact.conditions__c.getDescribe().getPicklistValues();
            newCont.conditions__c='';
            for(Double j=Math.Random()*10;j>6;j=j-3)
            {
                integer randNum=Integer.valueof(Math.floor(Math.Random()*(conditionsList.size())));
                newCont.conditions__c=conditionsList[randNum].getValue()+';'+newCont.conditions__c;
                conditionsList.remove(randNum);
            }
            contactList.add(newCont);

        }
        insert contactList;
    }
    public static void CreateAppointments(integer maxAppointment){
        List<Contact> DocList=[SELECT ID,Language__c FROM Contact WHERE RecordTypeID in (SELECT ID FROM RecordType WHERE SObjectType='Contact' AND Name = 'Doctor')];
        List<Contact> CustList=[SELECT ID FROM Contact WHERE RecordTypeID in (SELECT ID FROM RecordType WHERE SObjectType='Contact' AND Name = 'Customer')];
        List<Residence__C> ResList=[SELECT ID, Doctor__c FROM Residence__c];
        List<Appointment__c> appointList=new List<Appointment__C>();
        Map<ID,ID> ResDocMap=new Map<ID,ID>();
        Map<ID,List<String>> DocLanMap=new Map<ID,List<String>>();
        for (integer i=0;i<ResList.size();i++)
        {
            ResDocMap.put(ResList[i].ID,ResList[i].Doctor__c);
        }
        for(integer i=0;i<DocList.size();i++)
        {
            DocLanMap.put(DocList[i].ID, DocList[i].Language__c.split(';'));
        }

        List<Schema.PicklistEntry> statusList = appointment__c.status__c.getDescribe().getPicklistValues();
        for(integer i=0;i<CustList.size();i++)
        {
            for(integer j=0;j<Integer.valueof(Math.Random()*(maxAppointment-1))+1;j++)
            {
                Appointment__c newAppointment = new Appointment__C();
                newAppointment.Customer__c=CustList[i].ID;
                newAppointment.Residence__c=ResList[Integer.valueof(Math.Random()*(ResList.size()))].ID;
                newAppointment.Doctor__c=ResDocMap.get(newAppointment.Residence__c);
                List<String> lanList=DocLanMap.get(newAppointment.Doctor__c);
                newAppointment.language_preference__c=lanList[Integer.valueof(Math.Random()*(lanList.size()))];
                
                newAppointment.description__c=DescriptionList[Integer.valueof(Math.Random()*(DescriptionList.size()))];
                newAppointment.status__c=statusList[Integer.valueof(Math.Random()*(statusList.size()))].getValue();
                switch on newAppointment.status__c{
                    when 'Confirmed','Changed','Rejected','Rescheduled'{
                        newAppointment.doctor_message__c=defaultDoctorMessage;
                    }
                    when 'Completed'{
                        newAppointment.status__c='Confirmed';
                        
                    }

                }
                newAppointment.start_time__c=DateTime.now().addDays(
                    Integer.valueof((Math.Random()*14)+1)).addHours(
                        Integer.valueof((Math.Random()*4))-2).addMinutes(
                            Integer.valueof((Math.Random()*60)));
                appointList.add(newAppointment);
            }
        }
        insert appointList;
    }
    public static void CreateOfficeLocations(integer n){
        List<Office_Location__c> officeList=new List<Office_Location__c>();
        for (integer i=0;i<n;i++){
            Office_Location__c office = new Office_Location__c();
            office.street_address__c=Integer.valueof((Math.Random()*9999))+' '+
                StreetNameList[Integer.valueof(Math.Random()*StreetNameList.size())];
            office.Name=OfficeNameList[Integer.valueof(Math.Random()*OfficeNameList.size())];
            office.city__c=CityList[Integer.valueof(Math.Random()*CityList.size())];
            office.State__c=StateList[Integer.valueof(Math.Random()*StateList.size())];
            office.zip_code__c=Integer.valueof(Math.Random()*99999);
            office.phone__c=(Math.mod(Integer.valueof(Math.Random()*999),899)+100)+'-'+
                (Math.mod(Integer.valueof(Math.Random()*999),899)+100)+'-'+
                (Math.mod(Integer.valueof(Math.Random()*9999),8999)+1000);
                
            officeList.add(office);
        }
        insert officeList;
    }
    public static void CreateResidences(integer maxRes){
        List<Contact> DocList=[SELECT ID FROM Contact WHERE RecordTypeId in (SELECT ID FROM RecordType WHERE SObjectType='Contact' AND Name = 'Doctor')];
        List<Office_location__c> LocList=[SELECT ID FROM Office_Location__c];
        List<Residence__c> ResList=new List<Residence__c>();
        for (integer i=0; i<DocList.size();i++){
            List<Office_Location__c> TempLocList=LocList;
            Integer randNumRes=Integer.valueof(Math.Random()*(maxRes-1))+1;
            for(integer j=0;j<randNumRes;j++){
                Integer rand=Integer.valueof(Math.Random()*(TempLocList.size()));
                Residence__c newResidence=new Residence__C();
                newResidence.doctor__c=DocList[i].Id;
                newResidence.office_location__c=TempLocList[rand].Id;
                if(tempLocList.size()>1)
                    tempLocList.remove(rand);
                ResList.add(newResidence);
            }
        }
        insert ResList;
    }
    public static void CreateOfficeSurveys(integer maxSurvey){

    }
    public static void CreateDoctorSurveys(integer maxSurvey){

    }
    public static void CreateSearches(integer maxSearch){
        List<Search__c> searchList=new List<Search__c>();
        List<Contact> CustList=[SELECT ID FROM Contact WHERE RecordTypeID in (SELECT ID FROM RecordType WHERE SObjectType='Contact' AND Name = 'Customer')];
        for (integer i=0;i<custList.size();i++){
            for (integer j=0;j<maxSearch;j++){
                Search__c newSearch=new Search__C();
                newSearch.contact__c=custList[i].Id;
                List<Schema.PicklistEntry> specList=contact.specialization__c.getDescribe().getPickListValues();
                newSearch.Specialization__c=specList[Integer.valueof(Math.Random()*specList.size())].getValue();
                List<Schema.PicklistEntry> langList=contact.language__c.getDescribe().getPickListValues();
                newSearch.Language__c=langList[Integer.valueof(Math.Random()*langList.size())].getValue();
                Double randNum=Math.Random();
                if(randNum<0.3){
                    newSearch.sex__c='Male';
                }
                else if(randNum<0.6){
                    newSearch.sex__c='Female';
                }
                //newSearch.TimeStamp__c=DateTime.now().addDays(
                //    -1*Integer.valueof((Math.Random()*14)+1)).addHours(
                //        Integer.valueof((Math.Random()*4))-2).addMinutes(
                //            Integer.valueof((Math.Random()*60)));
                searchList.add(newSearch);
            }
        }
        insert searchList;
    }
    public static void DeleteAll(){
        DELETE [SELECT ID FROM Search__C];
        DELETE [SELECT ID FROM Appointment__c];
        DELETE [SELECT ID FROM Residence__c];
        DELETE [SELECT ID FROM Office_Location__c];
        DELETE [SELECT ID FROM Case];
        DELETE [SELECT ID FROM Contact];
    }
}