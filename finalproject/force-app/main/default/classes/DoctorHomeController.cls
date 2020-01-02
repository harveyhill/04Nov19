public class DoctorHomeController 
{
    @AuraEnabled
	public static List<Appointment__c> getDoctorAppts ( )
    {	// get community contact id from current user id
        User u = [ SELECT Id, ContactId FROM User WHERE id =: userInfo.getUserId()];
        Contact dr = [ SELECT Id FROM Contact WHERE id =: u.ContactId ];
        // return all appointments connected to doctor along with their related customers
        List<Appointment__c> allAppts = 
        	[ 	SELECT Id, Start_Time__c, Message__c, Status__c, Customer_Contact__r.Id, Customer_Contact__r.Name
                FROM Appointment__c
             	// WHERE Status__c = 'Pending'
             	WHERE Doctor_Contact__c = :dr.Id
            ];
        return allAppts;
    }
    
    @AuraEnabled
    public static void updateAppointment (String msg, String status, String apptId)
    {	// System.debug(msg);
        Appointment__c thisAppt = 
        	[	SELECT Id, Status__c, Message__c 
                FROM Appointment__c
                WHERE Id =: apptId
            ];
     	if (status == 'Accept') thisAppt.Status__c = 'Confirmed';
     	else thisAppt.Status__c = 'Cancelled';
     	thisAppt.Message__c = msg;
     	// System.debug(thisAppt.Message__c);
     	update thisAppt;
    }
}