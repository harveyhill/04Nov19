public class DataFactory 
{	
    // Save doctor picklist vals as lists of strings
    static private List<String> genders = DoctorTraits.genderOptions();
    static private List<String> languages = DoctorTraits.langOptions();
    static private List<String> specialities = DoctorTraits.specOptions();
    
    public static void createData( Integer n )
    {   // Initialize list objects to populate and insert
        List<Appointment__c> appList = new List<Appointment__c>();
        List<Contact> drList = new List<Contact>();
        List<Contact> custList = new List<Contact>();
        List<ContactResidence__c> conResList = new List<ContactResidence__c>();
        Account southernHeart;
        try // Look for Southern Heart account in the org
        {	southernHeart = [ SELECT Id, Name FROM Account WHERE Name = 'Southern Heart' LIMIT 1 ];
        } catch ( QueryException qe )
        {	// Add Southern Heart account if it doesn't exist already
        	southernHeart = new Account(name = 'Southern Heart');
         	insert southernHeart;
            southernHeart.IsPartner = true;
            update southernHeart;
        }
        // Create 2 residences
        Residence__c reston = new Residence__c 
            (	Name = 'Robert E. Lee Memorial Hospital',
                Street_Address__c = '11730 Plaza America Blvd',
             	City__c = 'Reston',
             	Postal_Code__c = 20170,
             	State__c = 'VA',
             	Country__c = 'US'
            ); upsert reston;
        Residence__c herndon = new Residence__c
        	(	Name = 'Southern Hospitality Family Care',
                Street_Address__c = '2282 Astoria Drive',
             	City__c = 'Herndon',
             	Postal_Code__c = 20190,
             	State__c = 'VA',
             	Country__c = 'US'
            ); upsert herndon;
        // Create n Doctors and n Customers
        for(Integer i = 0 ; i < n ; i++)
        {   Contact obj = new Contact();
            obj.AccountId = southernHeart.Id;
            obj.LastName = 'Last'+i;
            obj.recordTypeId = DoctorTraits.recTypeCust;
            custList.add(obj);
        }
        for (Integer i = 0 ; i < n ; i++)
        {	Contact obj = new Contact();
            obj.AccountId = southernHeart.Id;
            obj.LastName = 'DrLast'+i;
            obj.recordTypeId = DoctorTraits.recTypeDoc;
         	obj.Gender__c = genders[ Integer.valueOf( Math.random() * genders.size() ) ];
         	obj.Languages__c = languages[ Integer.valueOf( Math.random() * languages.size() ) ];
         	obj.Speciality__c = specialities[ Integer.valueOf( Math.random() * specialities.size() ) ];
            // obj.Gender__c = (0 == Math.mod( i , 2 ) ? 'Female': 'Male');
            drList.add(obj);
        } 
        upsert custList; upsert drList;
        
        // Add each doctor to the Reston residence using junction object
        for( Contact dr : drList )
        {
            ContactResidence__c obj = new ContactResidence__c();
            obj.Contact__c = dr.Id;
            obj.Residence__c = reston.Id;
            conResList.add(obj);
        }
        insert conResList;
        
        // Create n appointments between doctors and customers at the Reston location
        for(Integer j = 0; j < n; j++)
        {
            appList.add (new Appointment__c(    Status__c = 'Pending',
                                                Start_Time__c = DateTime.now().addDays(j),
                                                Customer_Contact__c = custList.get( j ).Id,
                                                Doctor_Contact__c = drList.get( j ).Id,
            									Residence__c = reston.Id
                         )					);
        }
        insert appList;
    }
    // Create many appointments between the same two contacts
    public static void CreateAppts (Contact dr, Contact cust, Integer n)
    {	List<Appointment__c> applist = new List<Appointment__c>();
     	for ( Integer i = 0 ; i < 1 ; i++ )
        {	applist.add( new Appointment__c	(   Status__c = 'Pending',
                                                Start_Time__c = DateTime.now().addDays(i),
                                                Customer_Contact__c = cust.Id,
                                                Doctor_Contact__c = dr.Id
                                          	)
                        );
        }
     	insert applist;
    }
    public static void DestroyData ()
    {
        List<Contact> dummyContacts = [ SELECT Id, LastName
                                       	FROM Contact 
                                       	WHERE LastName LIKE '%Last%'
                                      ];
        // List<Appointment__c> dummyAppts = [	SELECT Id 
        //                                   	FROM Appointment__c
        //                                  ];
        delete dummyContacts;
    }
}