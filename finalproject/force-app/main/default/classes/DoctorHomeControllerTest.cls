@isTest
public class DoctorHomeControllerTest 
{
    @isTest
    public static void runTests ()
    {
        /* TODO: Code a test that:
				- Sets a mock doctor with some appts
				- Fetches appts with getDoctorAppts() as if that doctor was viewing the page
				- Inserts a fake appointment
				- Updates the appointment with UpdateAppointment()
		*/
        DataFactory.createData(1); // create one doctor, one customer, and one appt between them
        Contact customer = [ 	SELECT Id
                            	FROM Contact 
                            	WHERE RecordTypeId =: DoctorTraits.recTypeCust 
                            	AND LastName LIKE '%Last0' 
                           ][0];
        Appointment__c myApp = [ 	SELECT Id, Status__c, Message__c 
                                	FROM Appointment__c 
                                	WHERE Customer_Contact__c =: customer.Id 
                               ];
        DoctorHomeController.updateAppointment( 'Test', 'Reject', (String) myApp.id );
        Appointment__c checkApp = 
        	[	SELECT Id, Message__c, Status__c
                FROM Appointment__c
                WHERE Id =: myApp.Id
            ];
        System.assertEquals(checkApp.Status__c, 'Cancelled');
        System.assertEquals(checkApp.Message__c, 'Test');
    }
}