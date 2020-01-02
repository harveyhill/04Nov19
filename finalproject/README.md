Revature Project 2

# Getting the Package to Deploy in Your Org
### Author: Brady Achterberg

Either from lack of integration or my own inexperience, the metadata currently provided in our package.xml doesn't let you deploy your community straight from the clone.  You'll get a bunch of complaints like "no CustomSite named Doctor found" and "can't access object permissions".  You can fix all the errors with some light admin-style changes in your target org.

## Enable Communities

Communities can't be enabled straight from the manifest.  Go to Setup, search "Communities", click Enable Communities, set any available domain name.  Community settings like the one in bradys-org-w-community should work then.

## Add Doctor and Customer Communities

A whole community can't be added straight from the manifest.  Go to Setup, click "All Communities", click Add New Community.  Template: Build Your Own.  Name: Customer.  URL: customer.  Then do it again, but name Doctor and URL doctor.  All the metadata for our doctor and customer settings should now work. 

When deploying, you'll also have to replace the username in the <siteAdmin> tag in sites/Customer.size-meta.xml and sites/Doctor.site-meta.xml with your own username.  This sets you as the admin for the community sites instead of a user that's not in your org.  You can also just right-click those two files and click "Retrieve Source from Org" to set the correct metadata before deploying the full manifest.

## Add Community Customer and Partner Users for Testing

When you deploy your org, it's obviously all metadata.  But if you want to actually look at our functionality you need test data, or at least a few activated doctors and customers.  The static Data Factory class has two methods to help you: CreateData and CreateAppts.

CreateData takes an argument, n, and creates 2n Contact records: n with record type Doctor and n with record type Customer.  It also creates an account, Southern Heart, from which both our communities flow.  (Southern Heart is instantiated enabled as a partner and only inserted once no matter how many times you call the class.)  Each Contact has a lookup to Southern Heart.  Doctor Contacts have random Genders, Languages and Specialties.  Customer records all have the last name 'Last%' (where the % is some number) and Doctors all have last name 'DrLast%'.  CreateData also makes two dummy Residences and adds all doctors to one of them.