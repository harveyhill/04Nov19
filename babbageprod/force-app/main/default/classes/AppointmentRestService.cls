@RestResource(urlMapping='/Appointments/*')
global with sharing class AppointmentRestService {
    @HttpPatch
    global static void UpdateRecord(DateTime start_time, DateTime end_time, ID Customer, ID Doctor, String Description,
                                    String Language, String Status, String Message, ID Residence, String Name)
    {
        RestRequest request = RestContext.request;
        String AppointmentID=request.requestURI.substring(
            request.requestURI.lastIndexOf('/')+1);
        
        Appointment__c appointmentUpdate=new Appointment__c();
        if(start_time!=null)appointmentUpdate.Start_Time__c=start_time;
        if(Customer!=null)appointmentUpdate.Customer__c=Customer;
        if(Doctor!=null)appointmentUpdate.Doctor__c=Doctor;
        if(Description!=null)appointmentUpdate.Description__c=Description;
        if(Language!=null)appointmentUpdate.Language_Preference__c=Language;
        if(Status!=null)appointmentUpdate.Status__c=Status;
        if(Message!=null)appointmentUpdate.Doctor_message__c=Message;
        if(Residence!=null)appointmentUpdate.Residence__c=Residence;
        update appointmentUpdate;
        
    } 

}