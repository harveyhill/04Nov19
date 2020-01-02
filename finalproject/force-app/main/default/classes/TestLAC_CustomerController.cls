@isTest
public class TestLAC_CustomerController {

   
    @isTest (seeAllDAta=true)
    public static void runTests()
    {
        System.debug( LAC_CustomerController.getDoctors('Any', 'Any', 'Any') );
        System.debug( LAC_CustomerController.getDoctors('Dermatology','Male','English') );
        
        // LAC_CustomerController.getAppointments();
        
        LAC_CustomerController.getAvailableDoctorGenderOptions();
        LAC_CustomerController.getAvailableDoctorLanguageOptions();
        LAC_CustomerController.getAvailableDoctorSpecialtyOptions();
    }
}