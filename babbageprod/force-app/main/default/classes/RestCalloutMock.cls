@istest
global class RestCalloutMock  implements HttpCalloutMock{
    global HttpResponse respond(HttpRequest request){
        HttpResponse response = new HttpResponse();
        if(request.getEndpoint()=='https://login.salesforce.com/services/oauth2/token'){
            response.setBody('{"accesstoken":"bobsyouruncle"}');
        }
        else{
            Appointment__c appt= (Appointment__c)JSON.deserialize(request.getBody(),Appointment__c.class);
            insert appt;
        }
        
        response.setStatusCode(201);
        return response; 
    }
}