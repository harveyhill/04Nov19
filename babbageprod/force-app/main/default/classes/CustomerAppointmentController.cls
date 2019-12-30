//This Controller will Query the information in the custom Object:
//Appointment__c; The Status__c
public class CustomerAppointmentController {
    
    @AuraEnabled
    public static List<Appointment__c> getAppointmentConfirmed(){
        List<Appointment__c> appointments = [SELECT Name, Doctor__r.Name, Residence__r.Office_Location__r.Name, Residence__r.Office_Location__r.Full_Address__c, Start_Time__c, End_Time__c, Status__c, 
                                             Doctor_Message__c FROM Appointment__c WHERE Status__c = 'Confirmed'];
        
        return appointments;
    }
    
    @AuraEnabled
    public static List<Appointment__c> getAppointmentPending(){
        List<Appointment__c> appointments = [SELECT Name, Doctor__r.Name, Residence__r.Office_Location__r.Name, Residence__r.Office_Location__r.Full_Address__c, Start_Time__c, End_Time__c, Status__c, 
                                             Doctor_Message__c FROM Appointment__c WHERE Status__c = 'Pending'];
        
        return appointments;
    }
    
    @AuraEnabled
    public static List<Appointment__c> getAppointmentRescheduled(){
        List<Appointment__c> appointments = [SELECT Name, Doctor__r.Name, Residence__r.Office_Location__r.Name, Residence__r.Office_Location__r.Full_Address__c, Start_Time__c, End_Time__c, Status__c, 
                                             Doctor_Message__c FROM Appointment__c WHERE Status__c = 'Rescheduled'];
        
        return appointments;
    }
    
    @AuraEnabled
    public static List<Appointment__c> getAppointmentRejected(){
        List<Appointment__c> appointments = [SELECT Name, Doctor__r.Name, Residence__r.Office_Location__r.Name, Residence__r.Office_Location__r.Full_Address__c, Start_Time__c, End_Time__c, Status__c, 
                                             Doctor_Message__c FROM Appointment__c WHERE Status__c = 'Rejected'];

        return appointments;
    }
}