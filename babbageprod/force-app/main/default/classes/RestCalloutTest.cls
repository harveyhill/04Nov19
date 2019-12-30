@istest
public class RestCalloutTest {
    @testSetup
    public static void setup(){
        Datafactory.createall(10);
    }
    @istest
    public static void testCallout(){
        Test.setMock(HttpCalloutMock.class, new RestCalloutMock()); 
        Test.startTest();
        HttpResponse response=RestCallout.AddBasicAppointment();
        Test.stopTest();
        System.assert(response.getStatuscode()==201,'Callout was not successful');
    }
}