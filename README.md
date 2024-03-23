Steps to generate webClientId 
first go to android folder and generate SHA-1 KEY
cd android
 keytool -keystore app/debug.keystore -list -v 
 Go to Google Cloud Platform Console and click Create Credentials -> OAuthClientID. Choose type Android and paste the SHA-1 hash and fill in the form 
Create another Client by clicking Create Credentials, but choose type Web application this time.   
Use the webclient in your code
                                      ─╯
