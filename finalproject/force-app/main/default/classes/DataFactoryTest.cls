@isTest
public class DataFactoryTest {
	@isTest (seeAllData = true)
    public static void testWithAccount ()
    {
        Test.startTest();
        DataFactory.createData(10);
        Test.stopTest();
    }
    
    @isTest
    public static void testWithoutAccount ()
    {	Test.startTest();
        DataFactory.createData(10);
        Test.stopTest();
    }
    
    @isTest
    public static void testAppts ()
    {	Contact dr = new Contact( FirstName = 'Doctor', LastName = 'Test0000' );
     	Contact cust = new Contact( FirstName = 'Customer', LastName = 'Test0000' );
     	cust.RecordTypeId = DoctorTraits.recTypeCust;
     	insert dr; insert cust;
     	DataFactory.createAppts(dr, cust, 4);
    }
    
    @isTest
    public static void testDestroy ()
    {
        Test.startTest();
        DataFactory.createData(10);
        Test.stopTest();
        DataFactory.DestroyData();
    }
}