public without sharing class CustomerPageController {
    public List<Doctor__c> doctorList{get;set;}
    public List<SelectOption> specialtyList{get
    {
        List<SelectOption> specialtyOptions=new List<SelectOption>();
        List<Schema.PicklistEntry> specialtyPicklist = Doctor__c.specialty__c.getDescribe().getPickListValues();
        for (Schema.PicklistEntry entry : specialtyPicklist)
        {
            specialtyOptions.add(new SelectOption(entry.getValue(),entry.getLabel()));
        }
        return specialtyOptions;
    }}
    public List<SelectOption> languagesList{get
    {
        List<SelectOption> languagesOptions=new List<SelectOption>();
        List<Schema.PicklistEntry> languagesPicklist = Doctor__c.languages_spoken__c.getDescribe().getPickListValues();
        for(Schema.PicklistEntry entry: languagesPicklist)
        {
            languagesOptions.add(new SelectOption(entry.getValue(),entry.getLabel()));
        }
        return languagesOptions;
    }}
    public List<SelectOption> sexList{get
    {
        List<SelectOption> sexOptions=new List<SelectOption>();
        List<Schema.PicklistEntry> sexPickList = Doctor__c.sex__c.getDescribe().getPickListValues();
        for(Schema.PicklistEntry entry: sexPickList)
        {
            sexOptions.add(new SelectOption(entry.getValue(),entry.getLabel()));
        }
        return sexOptions;
    }}


    public string sexPref{get;set;}
    public string specialtyPref{get;set;}
    public string languagesPref{get;set;}
    public CustomerPageController() {

    }
    public void updateList()
    {
        string queryString='SELECT Name, sex__c, specialty__c, Languages_Spoken__c, email__c FROM Doctor__c';
        boolean multiFilter=false;
        if(sexPref!=null || specialtyPref!=null || languagesPref.length()>2)
            queryString=queryString+' WHERE';
        if(sexPref!=null){
            queryString=queryString+' sex__c=\''+sexPref+'\'';
            multifilter=true;
        }
        if(specialtyPref!=null){
            if(multifilter==true)
                queryString=queryString+ ' AND';
            queryString=queryString+' specialty__c=\''+specialtyPref+'\'';
            multifilter=true;
        }
        if(languagesPref.length()>2){
            if(multifilter==true)
                queryString=queryString+ ' AND';
            languagesPref=languagesPref.substring(1,languagesPref.length()-1); //gets ride of brackets
            languagesPref=languagesPref.replace(', ',';');
            queryString=queryString+' Languages_Spoken__c includes(\''+languagesPref+'\')';
            multifilter=true;
        }
        SYstem.debug(querySTring);
        doctorList=Database.query(queryString);
    }
}
