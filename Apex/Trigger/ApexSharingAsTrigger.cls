trigger ShareExampleAccountTrigger on Account (before update) {

    if(trigger.isUpdate) {
        // We create a list of AccountShare records, because we want to operate dml on conllections.
        List<AccountShare> acctShr = new List<AccountShare>();
        // We declare a new AccountShare record. 
        AccountShare oldOwner;

        // We iterate over the updated accounts.
        for(Account a:trigger.new) {
            Account oldAcct = trigger.oldMap.get(a.Id);
            // If the owner is different, we share it back to the old owner.
            if(a.ownerId != oldAcct.ownerId ) {
                oldOwner.AccountId = a.Id;
                oldOwner.UserOrGroupID = oldAcct.Id;
                oldOwner.AccountAccessLevel = 'Edit';
                oldOwner.RowCause = Schema.AccountShare.RowCause.Manual;
                acctShr.add(oldOwner);
            }
        } 
        // We insert the new share records.
        Database.insert(acctShr);
    }
}
