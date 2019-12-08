public with sharing class DoctorController {
    
    public String choosenApp {get; set;}
    public String userID = UserInfo.getUserId();
    User user = database.query('Select FirstName, LastName From User Where ID=\'' + UserID + '\' Limit 1');
   	Doctor__c doctor = database.query('Select Name, ID, First_Name__c, Last_Name__c, Specialty__c, Email__c From Doctor__c Where Last_Name__c=\'' + user.LastName + '\' Limit 1');
    public Appointment__c returnedApp {Get; Set { returnedApp = value; }}
     
    
    // Query for Docter using last name of the user logged in
    public List<Doctor__c> GetDoctor() {
        List<Doctor__c> docList = database.query('Select First_Name__c, Last_Name__c, Specialty__c, Email__c From Doctor__c Where Last_Name__c=\'' + user.LastName + '\'');
    	return docList;
    }
    
    // Query for Appointments using name of the doctor assiated with the user logged in
    // Sort the Query by Start time and dont show any appointments already past
    public List<Appointment__c> GetApprovedAppointments() {
        ID docID = doctor.ID;
        datetime present = system.now();
        List<Appointment__c> appList = database.query('Select Name, Start_Time__c, End_Time__c, Customer__c, Description__c From Appointment__c Where Doctor__c=:docID AND End_Time__c >:present AND Status__c=\'Approved\'');
        return appList;
    }
    
    public List<SelectOption> GetPendingAppointments() {
           	ID docID = doctor.ID;
            datetime present = system.now();
            List<Appointment__c> appList = database.query('Select ID From Appointment__c Where Doctor__c=:docID AND End_Time__c >:present AND Status__c=\'Pending\'');
            List<SelectOption> appNames = new List<SelectOption>();
            for (Appointment__c app : appList) {
                appNames.add(new SelectOption(app.ID, app.ID));
            }
            return appNames;
    }
    
    public void ViewAppointmentDetails() {
        if (choosenApp == null) {
        	List<Appointment__c> appList = database.query('Select Name, Start_Time__c, End_Time__c, Customer__r.FullName__c, Description__c, status__c From Appointment__c');            
        	Appointment__c app = appList[0];
            returnedApp = app;
        
        } else {
            ID appID = (ID) choosenApp;
        	Appointment__c app = database.query('Select Name, Start_Time__c, End_Time__c, Customer__r.FullName__c, Description__c, status__c From Appointment__c Where Id=:appID');
    		returnedApp = app;
        }
	}
    
    //Status updates to Confirmed
    public void AcceptAppointment() {
        ID appID = (ID) choosenApp;
        Appointment__c app = database.query('Select Name, Start_Time__c, End_Time__c, Customer__r.FullName__c, Description__c, status__c From Appointment__c Where Id=:appID');
        app.Status__c = 'Confirmed';
        update app;
    }
    
    //Status updates to Cancelled
    public void CancelAppointment() {
        ID appID = (ID) choosenApp;
        Appointment__c app = database.query('Select Name, Start_Time__c, End_Time__c, Customer__r.FullName__c, Description__c, status__c From Appointment__c Where Id=:appID');
        app.Status__c = 'Cancelled';
        update app;
    }
}