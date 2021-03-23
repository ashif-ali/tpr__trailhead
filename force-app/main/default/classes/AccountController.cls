public with sharing class AccountController {
   
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContacts(Id recordId){
        try {
            return [
            SELECT Name, Title, Email, Phone
            FROM Contact
            WHERE AccountId = :recordId
            WITH SECURITY_ENFORCED
       ];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
