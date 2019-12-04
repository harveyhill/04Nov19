public without sharing class CustomerPageController {
    public list<Doctor__c> doctorList{get;set;}
    public List<SelectOption> specialties{get
    {
        List<SelectOption> specialtyOptions=new List<SelectOption>();
        List<Schema.PicklistEntry> specialtyPicklist = Doctor__c.specialty__c.getDescribe().getPickListValues();
        for (Schema.PicklistEntry entry : specialtyPicklist)
        {
            specialtyOptions.add(new SelectOption(entry.getValue(),entry.getLabel()));
        }
        return specialtyOptions;
    }
    set;}


    string sex{get;set;}
    public string specialty{get;set;}
    string languages{get;set;}
    public CustomerPageController() {

    }
    public void updateList()
    {
        string queryString='SELECT Name, sex__c, specialty__c, languages__c FROM Doctor__c';
        if(sex!=null || specialties!=null || languages!=null)
            queryString=queryString+' WHERE';
        if(sex!=null)
            queryString=queryString+' sex__c'+sex;
        if(specialties!=null)
            queryString=queryString+' specialty__c'+specialties;
        if(languages!=null)
            queryString=queryString+' languages__c'+languages;
        doctorList=Database.query(querySTring);
    }
}
