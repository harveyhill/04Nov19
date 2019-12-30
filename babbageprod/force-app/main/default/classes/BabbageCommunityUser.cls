public class BabbageCommunityUser {
    
    @AuraEnabled
    public static void createCommunityUser(Id recordId){
        // required user fields shared by all community users
        String comLocale = 'en_US';
        String comLanguage = 'en_US';
        String comEmailEnc = 'UTF-8';
        String comTimeZone = 'America/New_York';
        
        // initialize new user and give all of the constant field values we set earlier
        User newUser = new User();
        newUser.LocaleSidKey = comLocale;
        newUser.TimeZoneSidKey = comTimeZone;
        newUser.LanguageLocaleKey = comLanguage;
        newUser.EmailEncodingKey = comEmailEnc;
        
        Contact contactUser = [SELECT Id, FirstName, LastName, Email, RecordType.Name FROM Contact 
                               WHERE Id=:recordId];
        
        // 'map' equal field values from doctor record to new user
        newUser.LastName = contactUser.LastName;
        newUser.FirstName = contactUser.FirstName;
        newUser.Email = contactUser.Email;
        
        // set alias as first initial, last name
        newUser.Alias = contactUser.FirstName.substring(0, 1) + contactUser.LastName;
        
        // generate a unique username
        String todayDate = Datetime.now().format('yyyy-MM-dd');
        todayDate = todayDate.substring(0, 4) + todayDate.substring(5, 7) + todayDate.substring(8, 10);
        newUser.Username = newUser.Alias + todayDate + '@aol.com';
        
        // assign the associated contact
        newUser.ContactId = recordId;
        
        // give a community role and insert user
        newUser.PortalRole = 'PersonAccount';
        
        String comProf;
        
       	// get the id for the community user profile ('Hey, we didn't hard code the ID!')
        if(contactUser.RecordType.Name == 'Doctor'){
            comProf = [SELECT Name, Id FROM Profile WHERE Name='Babbage Doctor User'].Id;
        }
        else if(contactUser.RecordType.Name == 'Customer'){
            comProf = [SELECT Name, Id FROM Profile WHERE Name='Babbage Customer User'].Id;
        }
        
        newUser.ProfileID = comProf;
        insert newUser;
        
    }
}