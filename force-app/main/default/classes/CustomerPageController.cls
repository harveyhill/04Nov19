public without sharing class CustomerPageController {
    public list<Doctor__c> doctorList{get;set;}
    public List<SelectOption> specialtyList{get
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


    string sexPref{get;set;}
    public string specialtyPref{get;set;}
    string languagesPref{get;set;}
    public CustomerPageController() {

    }
    public void updateList()
    {
        string queryString='SELECT Name, sex__c, specialty__c, languages__c FROM Doctor__c';
        if(sexPref!=null || specialtyPref!=null || languagesPref!=null)
            queryString=queryString+' WHERE';
        if(sexPref!=null)
            queryString=queryString+' sex__c'+sexPref;
        if(specialtyPref!=null)
            queryString=queryString+' specialty__c'+specialtyPref;
        if(languagesPref!=null)
            queryString=queryString+' languages__c'+languagesPref;
        doctorList=Database.query(querySTring);
    }
}
