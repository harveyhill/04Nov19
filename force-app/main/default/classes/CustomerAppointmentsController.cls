public without sharing class CustomerAppointmentsController {
    public String typeAppointment;
    public String statusPref {get; set;}
    public List<Appointment__c> result {get; set;}


    public List<SelectOption> statusList{get
    {
        List<SelectOption> statusOptions=new List<SelectOption>();
        List<Schema.PicklistEntry> statusPicklist = Appointment__c.status__c.getDescribe().getPickListValues();
        for (Schema.PicklistEntry entry : statusPicklist)
        {
            statusOptions.add(new SelectOption(entry.getValue(),entry.getLabel()));
        }
        return statusOptions;
    }}

    public CustomerAppointmentsController(){}

    public void updateAppointments()
    {
        string queryString='SELECT Description__c, Doctor__c, Status__c, Start_Time__c FROM Appointment__c';
        if(statusPref.length()>2){
            queryString += ' WHERE';
            statusPref=statusPref.substring(1,statusPref.length()-1); //gets ride of brackets
            statusPref=statusPref.replace(', ','\',\'');
            queryString=queryString+' Status__c IN(\''+statusPref+'\')';
            System.debug(queryString);
        }
        result = Database.query(queryString);
    }
}
