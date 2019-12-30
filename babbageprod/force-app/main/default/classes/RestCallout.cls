public class RestCallout {
    private static final String clientId = '3MVG9LBJLApeX_PBTWQ_60mzH4qSoqPrlBzxMV5SF.HSTLSlUFmyMHHyM838yIfO.0YXIlGQ3eZiy2AZzFpJp';
    private static final String clientSecret = '37A1F1CA43556803828A7998C8BA0EBB99B9331C0935BD36B6DC2B1EACB4273A';
    private static final String username = 'cliu.jonathan@cunning-fox-e9s5yy.com';
    private static final String password = 'asdf1234';
    
    public class deserializeResponse
    {
        public String id;
        public String access_token;
    }
    
    public static String ReturnAccessToken ()
    {
	    String reqbody = 'grant_type=password&client_id='+clientId+'&client_secret='+clientSecret+'&username='+username+'&password='+password;                
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setBody(reqbody);
        req.setMethod('POST');
        req.setEndpoint('https://login.salesforce.com/services/oauth2/token');
        HttpResponse res = h.send(req);
        System.debug(res.getBody());
        deserializeResponse resp1 = (deserializeResponse)JSON.deserialize(res.getbody(),deserializeResponse.class);    
        return resp1.access_token;
    }
    
    public static HttpResponse AddBasicAppointment(){
        Http http=new Http();
        HttpRequest request=new HttpRequest();
        request.setEndpoint('https://cunning-fox-e9s5yy-dev-ed.my.salesforce.com/services/data/v46.0/sobjects/Appointment__c');
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json;charset=UTF-8');
        request.setHeader('Authorization','Bearer ' + ReturnAccessToken());
        List<Residence__c> res=[SELECT ID FROM Residence__c LIMIT 1];
        ID DoctorID=[SELECT ID FROM RecordType WHERE Name='Doctor' and sObjectType='Contact' LIMIT 1].ID;
        ID CustomerID=[SELECT ID FROM RecordType WHERE Name='Customer' and sObjectType='Contact' LIMIT 1].ID;
        Contact Doctor= [SELECT ID FROM CONTACT WHERE RecordTypeID=:DoctorID LIMIT 1].get(0);
        Contact Customer=[SELECT ID FROM CONTACT WHERE RecordTypeID=:CustomerID LIMIT 1].get(0);
        request.setBody('{"Start_Time__c":"2020-3-20","Customer__c":"'+Customer.ID+
                        '","Doctor__c":"'+Doctor.ID+
                        '","Description__c":"None","Language_Preference__c":"English","Status__c":"Pending","Residence__c":"'+
                        res[0].ID+'"}');
        System.debug(request.getBody());
        HttpResponse response = http.send(request);
        if(response.getStatuscode()!=201){
            System.assert(false,'Insert failed: '+response.getStatusCode()+response.getStatus()+response.getBody());
        }
            return response;
    }
}