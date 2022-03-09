import logonPage from '../pages/LogonPage'

describe('Logon', () => {
  it('user should be to login', function() {
   logonPage.go();
   logonPage.fillForm();
   logonPage.submit();
   logonPage.validAccess()
  });
});