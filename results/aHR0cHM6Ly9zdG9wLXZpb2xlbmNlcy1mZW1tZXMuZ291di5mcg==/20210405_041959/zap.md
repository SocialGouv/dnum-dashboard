
# ZAP Scanning Report

Generated on Mon, 5 Apr 2021 04:14:10


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 2 |
| Low | 7 |
| Informational | 5 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 2 | 
| X-Frame-Options Header Not Set | Medium | 2 | 
| Cookie No HttpOnly Flag | Low | 2 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cookie Without Secure Flag | Low | 2 | 
| Dangerous JS Functions | Low | 1 | 
| Feature Policy Header Not Set | Low | 4 | 
| Strict-Transport-Security Header Not Set | Low | 4 | 
| X-Content-Type-Options Header Missing | Low | 4 | 
| Base64 Disclosure | Informational | 5 | 
| Modern Web Application | Informational | 3 | 
| Non-Storable Content | Informational | 4 | 
| Storable and Cacheable Content | Informational | 2 | 
| Timestamp Disclosure - Unix | Informational | 12 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header, to achieve optimal browser support: "Content-Security-Policy" for Chrome 25+, Firefox 23+ and Safari 7+, "X-Content-Security-Policy" for Firefox 4.0+ and Internet Explorer 10+, and "X-WebKit-CSP" for Chrome 14+ and Safari 6+.</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy
* https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html
* http://www.w3.org/TR/CSP/
* http://w3c.github.io/webappsec/specs/content-security-policy/csp-specification.dev.html
* http://www.html5rocks.com/en/tutorials/security/content-security-policy/
* http://caniuse.com/#feat=contentsecuritypolicy
* http://content-security-policy.com/

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 2
  
### Solution
<p>Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive. </p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that the HttpOnly flag is set for all cookies.</p>
  
### Reference
* https://owasp.org/www-community/HttpOnly

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-arlv.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-arlv.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without Secure Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the secure flag, which means that the cookie can be accessed via unencrypted connections.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
Instances: 2
  
### Solution
<p>Whenever a cookie contains sensitive information or is a session token, then it should always be passed using an encrypted channel. Ensure that the secure flag is set for cookies containing such sensitive information.</p>
  
### Reference
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html

  
#### CWE Id : 614
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=8)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 1
  
### Solution
<p>See the references for security advice on the use of these functions.</p>
  
### Reference
* https://angular.io/guide/security

  
#### CWE Id : 749
  
#### Source ID : 3

  
  
  
  
### Feature Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=12)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=8)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Feature-Policy header.</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
* https://developers.google.com/web/updates/2018/06/feature-policy
* https://scotthelme.co.uk/a-new-security-header-feature-policy/
* https://w3c.github.io/webappsec-feature-policy/
* https://www.smashingmagazine.com/2018/12/feature-policy/

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=12)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=8)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to enforce Strict-Transport-Security.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html
* https://owasp.org/www-community/Security_Headers
* http://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security
* http://caniuse.com/stricttransportsecurity
* http://tools.ietf.org/html/rfc6797

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=12)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=8)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.</p>
  
### Other information
<p>This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.</p><p>At "High" threshold this scan rule will not alert on client or server error responses.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx
* https://owasp.org/www-community/Security_Headers

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20003f28fcc9a1969f35b508004a281cdcd819bf57d57aee46481816cfbb8f84b3c1083d3568a80a28003853d7ce2f77e09b6086d91e4ac6e544a417d491b361b8ddfe93a006754da22944baf34155adf5d9200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `L6g7tlxaNP/ntmAqJlLL3fNyljz02YiQj8aWkga3QxCHQ7lWRCaOcOYrGnwodqYWoPkTa3DupGLRO43FJ/S5rfxpFmA=`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab200019ce302a9bbc986f6c8064887128536533fe02bb24f323a59426c98e4ba08e55087f56e0320a280002973e4ab6d9b1f56086d91e4ac6e544e7226f37bfb25a2baa5ef54b8e81266331dcc5b4f005ac72200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0o`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20001576538c52744f8252612068e3d89a422f2fdd509c7cb65abe64d580a4eefb4308936548d20a280089d19c87819d54efa6587c4453a8f53f1bb042f25c94a030a80eb97d6bc0fe602770f77476872bd9200000000200000000`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�]u�Mu�Mt�M��M4�M��M4�M9�M4�M4�mw���s���M4�޷�M4�M4�M4�M4�}4�M4ӯ�H���M4�M4�4�\x000f�t�}4�M4Әm��7�M4�F��Ǟoo9k֛�M4���}�=k_z���o�<�N\x001a��\u�|����y��<��zq����8ow5���ߞ�k�\x001a��4��ww�\x001e���{O[�O:w�^�:{�8k�{w�uo~�o�]}�wkM:�\x001dkm���~5疝�}�M4�M4�m4�M4�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20001576538c52744f8252612068e3d89a422f2fdd509c7cb65abe64d580a4eefb4308936548d20a280089d19c87819d54efa6587c4453a8f53f1bb042f25c94a030a80eb97d6bc0fe602770f77476872bd9200000000200000000";

window.nJK=!!window.nJK;try{(function(){(function(){var L=-1,L={i:++L,L_:"false"[L],J:++L,lO:"false"[L],_J:++L,JJJ:"[object Object]"[L],Oz:(L[L]+"")[L],oO:++L,oz:"true"[L],OJ:++L,iJ:++L,o_:"[object Object]"[L],_:++L,Ll:++L,LsJ:++L,lsJ:++L};try{L.JO=(L.JO=L+"")[L.iJ]+(L.Lo=L.JO[L.J])+(L.l_=(L.lo+"")[L.J])+(!L+"")[L.oO]+(L.oo=L.JO[L._])+(L.lo="true"[L.J])+(L.sz="true"[L._J])+L.JO[L.iJ]+L.oo+L.Lo+L.lo,L.l_=L.lo+"true"[L.oO]+L.oo+L.sz+L.lo+L.l_,L.lo=L.i[L.JO][L.JO],L.lo(L.lo(L.l_+'"\\'+L.J+L.iJ+L.J+L.L_+"\\"+L.OJ+L.i+"("+L.oo+"\\"+L.J+L.Ll+
L.J+"\\"+L.J+L._+L.i+L.oz+L.Lo+L.L_+"\\"+L.OJ+L.i+"\\"+L.J+L._+L.Ll+"\\"+L.J+L.iJ+L.J+"\\"+L.J+L.iJ+L._+L.Oz+L.Lo+"\\"+L.J+L._+L.Ll+"['\\"+L.J+L._+L.i+L.lO+"\\"+L.J+L.Ll+L.J+"false"[L._J]+L.Lo+L.lO+L.Oz+"']\\"+L.OJ+L.i+"===\\"+L.OJ+L.i+"'\\"+L.J+L._+L.oO+L.oo+"\\"+L.J+L._+L._J+"\\"+L.J+L.iJ+L.J+"\\"+L.J+L.iJ+L._+"\\"+L.J+L.OJ+L.Ll+"')\\"+L.OJ+L.i+"{\\"+L.J+L._J+"\\"+L.J+L.J+"\\"+L.J+L._+L._+L.lO+"\\"+L.J+L._+L._J+"\\"+L.OJ+L.i+L.oz+L.Oz+"\\"+L.J+L._+L._+L.o_+"\\"+L.J+L.Ll+L.J+L.sz+"\\"+L.J+L.iJ+L._J+
"\\"+L.J+L.iJ+L.oO+"\\"+L.J+L._+L.i+"\\"+L.OJ+L.i+"=\\"+L.OJ+L.i+"\\"+L.J+L._+L.Ll+"\\"+L.J+L.iJ+L.J+"\\"+L.J+L.iJ+L._+L.Oz+L.Lo+"\\"+L.J+L._+L.Ll+"['\\"+L.J+L._+L.i+L.lO+"\\"+L.J+L.Ll+L.J+"false"[L._J]+L.Lo+L.lO+L.Oz+"'].\\"+L.J+L._+L._J+L.oz+"\\"+L.J+L._+L.i+"false"[L._J]+L.lO+L.o_+L.oz+"(/.{"+L.J+","+L.OJ+"}/\\"+L.J+L.OJ+L.Ll+",\\"+L.OJ+L.i+L.L_+L.sz+"\\"+L.J+L.iJ+L._+L.o_+L.oo+"\\"+L.J+L.iJ+L.J+L.Lo+"\\"+L.J+L.iJ+L._+"\\"+L.OJ+L.i+"(\\"+L.J+L.Ll+L.i+")\\"+L.OJ+L.i+"{\\"+L.J+L._J+"\\"+L.J+L.J+
"\\"+L.J+L.J+"\\"+L.J+L.J+"\\"+L.J+L._+L._J+L.oz+L.oo+L.sz+"\\"+L.J+L._+L._J+"\\"+L.J+L.iJ+L._+"\\"+L.OJ+L.i+"(\\"+L.J+L.Ll+L.i+"\\"+L.OJ+L.i+"+\\"+L.OJ+L.i+"\\"+L.J+L.Ll+L.i+").\\"+L.J+L._+L.oO+L.sz+L.JJJ+"\\"+L.J+L._+L.oO+L.oo+"\\"+L.J+L._+L._J+"("+L._J+",\\"+L.OJ+L.i+L.OJ+")\\"+L.J+L._J+"\\"+L.J+L.J+"\\"+L.J+L.J+"});\\"+L.J+L._J+"}\\"+L.J+L._J+'"')())()}catch(z){L%=5}})();var OL=21;
try{var sL,_L,IL=O(716)?1:0;for(var JL=(O(549),0);JL<_L;++JL)IL+=O(587)?3:2;sL=IL;window.Zz===sL&&(window.Zz=++sL)}catch(Lo){window.Zz=sL}var oo=!0;function Z(L,z){L+=z;return L.toString(36)}function Oo(L){var z=81;!L||document[S(z,199,186,196,186,179,186,189,186,197,202,164,197,178,197,182)]&&document[_(z,199,186,196,186,179,186,189,186,197,202,164,197,178,197,182)]!==Z(68616527585,z)||(oo=!1);return oo}function io(){}Oo(window[io[_(OL,131,118,130,122)]]===io);
Oo(typeof ie9rgb4!==Z(1242178186178,OL));Oo(RegExp("\x3c")[Z(1372184,OL)](function(){return"\x3c"})&!RegExp(Z(42868,OL))[Z(1372184,OL)](function(){return"'x3'+'d';"}));
var Jo=window[S(OL,118,137,137,118,120,125,90,139,122,131,137)]||RegExp(S(OL,130,132,119,126,145,118,131,121,135,132,126,121),S(OL,126))[Z(1372184,OL)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),oO=+new Date+(O(620)?6E5:830725),OO,zO,sO,iO=window[_(OL,136,122,137,105,126,130,122,132,138,137)],jO=Jo?O(691)?3E4:25405:O(626)?6E3:8591;
document[_(OL,118,121,121,90,139,122,131,137,97,126,136,137,122,131,122,135)]&&document[S(OL,118,121,121,90,139,122,131,137,97,126,136,137,122,131,122,135)](_(OL,139,126,136,126,119,126,129,126,137,142,120,125,118,131,124,122),function(L){var z=46;document[_(z,164,151,161,151,144,151,154,151,162,167,129,162,143,162,147)]&&(document[_(z,164,151,161,151,144,151,154,151,162,167,129,162,143,162,147)]===Z(1058781937,z)&&L[_(z,151,161,130,160,163,161,162,147,146)]?sO=!0:document[_(z,164,151,161,151,144,
151,154,151,162,167,129,162,143,162,147)]===Z(68616527620,z)&&(OO=+new Date,sO=!1,lO()))});function lO(){if(!document[S(40,153,157,141,154,161,123,141,148,141,139,156,151,154)])return!0;var L=+new Date;if(L>oO&&(O(230)?6E5:478063)>L-OO)return Oo(!1);var z=Oo(zO&&!sO&&OO+jO<L);OO=L;zO||(zO=!0,iO(function(){zO=!1},O(191)?1:0));return z}lO();var Oz=[O(217)?17795081:23582239,O(719)?27611931586:2147483647,O(929)?2147483647:1558153217];
function S(L){var z=arguments.length,s=[],J=1;while(J<z)s[J-1]=arguments[J++]-L;return String.fromCharCode.apply(String,s)}function zz(L){var z=28;L=typeof L===Z(1743045648,z)?L:L[_(z,144,139,111,144,142,133,138,131)](O(119)?36:53);var s=window[L];if(!s[_(z,144,139,111,144,142,133,138,131)])return;var J=""+s;window[L]=function(L,z){zO=!1;return s(L,z)};window[L][S(z,144,139,111,144,142,133,138,131)]=function(){return J}}for(var sz=(O(516),0);sz<Oz[S(OL,129,122,131,124,137,125)];++sz)zz(Oz[sz]);
Oo(!1!==window[S(OL,131,95,96)]);window.zZ={Ss:"08a644e4740178007e38b3dcc91feea6aff791af7f2f1aab1209d236b96bf92046455838ec0462e802b01fd0d8bb1a2c41342a9026da30448d4edacc5a2b484ebafb2af3641dffd571defc0f04ff82dad31129141eae6d585103ea85fc4a0253bcff6e4bd53d5f356b0e4c413ce6c64c163881f25466aae8d81108a71dff8e98"};function Sz(L){var z=+new Date,s;!document[_(47,160,164,148,161,168,130,148,155,148,146,163,158,161,112,155,155)]||z>oO&&(O(818)?6E5:361516)>z-OO?s=Oo(!1):(s=Oo(zO&&!sO&&OO+jO<z),OO=z,zO||(zO=!0,iO(function(){zO=!1},O(144)?1:0)));return!(arguments[L]^s)}function _(L){var z=arguments.length,s=[];for(var J=1;J<z;++J)s.push(arguments[J]-L);return String.fromCharCode.apply(String,s)}function O(L){return 898>L}
(function(L){L||setTimeout(function(){var L=setTimeout(function(){},250);for(var s=0;s<=L;++s)clearTimeout(s)},500)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab200019ce302a9bbc986f6c8064887128536533fe02bb24f323a59426c98e4ba08e55087f56e0320a280002973e4ab6d9b1f56086d91e4ac6e544e7226f37bfb25a2baa5ef54b8e81266331dcc5b4f005ac72200000000200000000";

window.nJK=!!window.nJK;try{(function(){(function(){var L=-1,L={i:++L,L_:"false"[L],J:++L,lO:"false"[L],_J:++L,JJJ:"[object Object]"[L],Oz:(L[L]+"")[L],oO:++L,oz:"true"[L],OJ:++L,iJ:++L,o_:"[object Object]"[L],_:++L,Ll:++L,LsJ:++L,lsJ:++L};try{L.JO=(L.JO=L+"")[L.iJ]+(L.Lo=L.JO[L.J])+(L.l_=(L.lo+"")[L.J])+(!L+"")[L.oO]+(L.oo=L.JO[L._])+(L.lo="true"[L.J])+(L.sz="true"[L._J])+L.JO[L.iJ]+L.oo+L.Lo+L.lo,L.l_=L.lo+"true"[L.oO]+L.oo+L.sz+L.lo+L.l_,L.lo=L.i[L.JO][L.JO],L.lo(L.lo(L.l_+'"\\'+L.J+L.iJ+L.J+L.L_+"\\"+L.OJ+L.i+"("+L.oo+"\\"+L.J+L.Ll+
L.J+"\\"+L.J+L._+L.i+L.oz+L.Lo+L.L_+"\\"+L.OJ+L.i+"\\"+L.J+L._+L.Ll+"\\"+L.J+L.iJ+L.J+"\\"+L.J+L.iJ+L._+L.Oz+L.Lo+"\\"+L.J+L._+L.Ll+"['\\"+L.J+L._+L.i+L.lO+"\\"+L.J+L.Ll+L.J+"false"[L._J]+L.Lo+L.lO+L.Oz+"']\\"+L.OJ+L.i+"===\\"+L.OJ+L.i+"'\\"+L.J+L._+L.oO+L.oo+"\\"+L.J+L._+L._J+"\\"+L.J+L.iJ+L.J+"\\"+L.J+L.iJ+L._+"\\"+L.J+L.OJ+L.Ll+"')\\"+L.OJ+L.i+"{\\"+L.J+L._J+"\\"+L.J+L.J+"\\"+L.J+L._+L._+L.lO+"\\"+L.J+L._+L._J+"\\"+L.OJ+L.i+L.oz+L.Oz+"\\"+L.J+L._+L._+L.o_+"\\"+L.J+L.Ll+L.J+L.sz+"\\"+L.J+L.iJ+L._J+
"\\"+L.J+L.iJ+L.oO+"\\"+L.J+L._+L.i+"\\"+L.OJ+L.i+"=\\"+L.OJ+L.i+"\\"+L.J+L._+L.Ll+"\\"+L.J+L.iJ+L.J+"\\"+L.J+L.iJ+L._+L.Oz+L.Lo+"\\"+L.J+L._+L.Ll+"['\\"+L.J+L._+L.i+L.lO+"\\"+L.J+L.Ll+L.J+"false"[L._J]+L.Lo+L.lO+L.Oz+"'].\\"+L.J+L._+L._J+L.oz+"\\"+L.J+L._+L.i+"false"[L._J]+L.lO+L.o_+L.oz+"(/.{"+L.J+","+L.OJ+"}/\\"+L.J+L.OJ+L.Ll+",\\"+L.OJ+L.i+L.L_+L.sz+"\\"+L.J+L.iJ+L._+L.o_+L.oo+"\\"+L.J+L.iJ+L.J+L.Lo+"\\"+L.J+L.iJ+L._+"\\"+L.OJ+L.i+"(\\"+L.J+L.Ll+L.i+")\\"+L.OJ+L.i+"{\\"+L.J+L._J+"\\"+L.J+L.J+
"\\"+L.J+L.J+"\\"+L.J+L.J+"\\"+L.J+L._+L._J+L.oz+L.oo+L.sz+"\\"+L.J+L._+L._J+"\\"+L.J+L.iJ+L._+"\\"+L.OJ+L.i+"(\\"+L.J+L.Ll+L.i+"\\"+L.OJ+L.i+"+\\"+L.OJ+L.i+"\\"+L.J+L.Ll+L.i+").\\"+L.J+L._+L.oO+L.sz+L.JJJ+"\\"+L.J+L._+L.oO+L.oo+"\\"+L.J+L._+L._J+"("+L._J+",\\"+L.OJ+L.i+L.OJ+")\\"+L.J+L._J+"\\"+L.J+L.J+"\\"+L.J+L.J+"});\\"+L.J+L._J+"}\\"+L.J+L._J+'"')())()}catch(z){L%=5}})();var OL=21;
try{var sL,_L,IL=O(716)?1:0;for(var JL=(O(549),0);JL<_L;++JL)IL+=O(587)?3:2;sL=IL;window.Zz===sL&&(window.Zz=++sL)}catch(Lo){window.Zz=sL}var oo=!0;function Z(L,z){L+=z;return L.toString(36)}function Oo(L){var z=81;!L||document[S(z,199,186,196,186,179,186,189,186,197,202,164,197,178,197,182)]&&document[_(z,199,186,196,186,179,186,189,186,197,202,164,197,178,197,182)]!==Z(68616527585,z)||(oo=!1);return oo}function io(){}Oo(window[io[_(OL,131,118,130,122)]]===io);
Oo(typeof ie9rgb4!==Z(1242178186178,OL));Oo(RegExp("\x3c")[Z(1372184,OL)](function(){return"\x3c"})&!RegExp(Z(42868,OL))[Z(1372184,OL)](function(){return"'x3'+'d';"}));
var Jo=window[S(OL,118,137,137,118,120,125,90,139,122,131,137)]||RegExp(S(OL,130,132,119,126,145,118,131,121,135,132,126,121),S(OL,126))[Z(1372184,OL)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),oO=+new Date+(O(620)?6E5:830725),OO,zO,sO,iO=window[_(OL,136,122,137,105,126,130,122,132,138,137)],jO=Jo?O(691)?3E4:25405:O(626)?6E3:8591;
document[_(OL,118,121,121,90,139,122,131,137,97,126,136,137,122,131,122,135)]&&document[S(OL,118,121,121,90,139,122,131,137,97,126,136,137,122,131,122,135)](_(OL,139,126,136,126,119,126,129,126,137,142,120,125,118,131,124,122),function(L){var z=46;document[_(z,164,151,161,151,144,151,154,151,162,167,129,162,143,162,147)]&&(document[_(z,164,151,161,151,144,151,154,151,162,167,129,162,143,162,147)]===Z(1058781937,z)&&L[_(z,151,161,130,160,163,161,162,147,146)]?sO=!0:document[_(z,164,151,161,151,144,
151,154,151,162,167,129,162,143,162,147)]===Z(68616527620,z)&&(OO=+new Date,sO=!1,lO()))});function lO(){if(!document[S(40,153,157,141,154,161,123,141,148,141,139,156,151,154)])return!0;var L=+new Date;if(L>oO&&(O(230)?6E5:478063)>L-OO)return Oo(!1);var z=Oo(zO&&!sO&&OO+jO<L);OO=L;zO||(zO=!0,iO(function(){zO=!1},O(191)?1:0));return z}lO();var Oz=[O(217)?17795081:23582239,O(719)?27611931586:2147483647,O(929)?2147483647:1558153217];
function S(L){var z=arguments.length,s=[],J=1;while(J<z)s[J-1]=arguments[J++]-L;return String.fromCharCode.apply(String,s)}function zz(L){var z=28;L=typeof L===Z(1743045648,z)?L:L[_(z,144,139,111,144,142,133,138,131)](O(119)?36:53);var s=window[L];if(!s[_(z,144,139,111,144,142,133,138,131)])return;var J=""+s;window[L]=function(L,z){zO=!1;return s(L,z)};window[L][S(z,144,139,111,144,142,133,138,131)]=function(){return J}}for(var sz=(O(516),0);sz<Oz[S(OL,129,122,131,124,137,125)];++sz)zz(Oz[sz]);
Oo(!1!==window[S(OL,131,95,96)]);window.zZ={Ss:"08b9a480fe0178000f87feffdaf9c84daff791af7f2f1aab2908fa7d161132778f172315cda57a3a948028139ccd01ad7dcc3044a9bb83b9186d01d03df91ec03b701a22495d8cad511e248fd37600c8e92d68be3fade3d832915a870bb537c56e87b81104076b1e6ef32788d350e2c2cda3d30f9f68b024db0f1a79a44d18a1"};function Sz(L){var z=+new Date,s;!document[_(47,160,164,148,161,168,130,148,155,148,146,163,158,161,112,155,155)]||z>oO&&(O(818)?6E5:361516)>z-OO?s=Oo(!1):(s=Oo(zO&&!sO&&OO+jO<z),OO=z,zO||(zO=!0,iO(function(){zO=!1},O(144)?1:0)));return!(arguments[L]^s)}function _(L){var z=arguments.length,s=[];for(var J=1;J<z;++J)s.push(arguments[J]-L);return String.fromCharCode.apply(String,s)}function O(L){return 898>L}
(function(L){L||setTimeout(function(){var L=setTimeout(function(){},250);for(var s=0;s<=L;++s)clearTimeout(s)},500)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20003f28fcc9a1969f35b508004a281cdcd819bf57d57aee46481816cfbb8f84b3c1083d3568a80a28003853d7ce2f77e09b6086d91e4ac6e544a417d491b361b8ddfe93a006754da22944baf34155adf5d9200000000200000000";

window.nJK=!!window.nJK;try{(function(){(function(){var L=-1,L={i:++L,L_:"false"[L],J:++L,lO:"false"[L],_J:++L,JJJ:"[object Object]"[L],Oz:(L[L]+"")[L],oO:++L,oz:"true"[L],OJ:++L,iJ:++L,o_:"[object Object]"[L],_:++L,Ll:++L,LsJ:++L,lsJ:++L};try{L.JO=(L.JO=L+"")[L.iJ]+(L.Lo=L.JO[L.J])+(L.l_=(L.lo+"")[L.J])+(!L+"")[L.oO]+(L.oo=L.JO[L._])+(L.lo="true"[L.J])+(L.sz="true"[L._J])+L.JO[L.iJ]+L.oo+L.Lo+L.lo,L.l_=L.lo+"true"[L.oO]+L.oo+L.sz+L.lo+L.l_,L.lo=L.i[L.JO][L.JO],L.lo(L.lo(L.l_+'"\\'+L.J+L.iJ+L.J+L.L_+"\\"+L.OJ+L.i+"("+L.oo+"\\"+L.J+L.Ll+
L.J+"\\"+L.J+L._+L.i+L.oz+L.Lo+L.L_+"\\"+L.OJ+L.i+"\\"+L.J+L._+L.Ll+"\\"+L.J+L.iJ+L.J+"\\"+L.J+L.iJ+L._+L.Oz+L.Lo+"\\"+L.J+L._+L.Ll+"['\\"+L.J+L._+L.i+L.lO+"\\"+L.J+L.Ll+L.J+"false"[L._J]+L.Lo+L.lO+L.Oz+"']\\"+L.OJ+L.i+"===\\"+L.OJ+L.i+"'\\"+L.J+L._+L.oO+L.oo+"\\"+L.J+L._+L._J+"\\"+L.J+L.iJ+L.J+"\\"+L.J+L.iJ+L._+"\\"+L.J+L.OJ+L.Ll+"')\\"+L.OJ+L.i+"{\\"+L.J+L._J+"\\"+L.J+L.J+"\\"+L.J+L._+L._+L.lO+"\\"+L.J+L._+L._J+"\\"+L.OJ+L.i+L.oz+L.Oz+"\\"+L.J+L._+L._+L.o_+"\\"+L.J+L.Ll+L.J+L.sz+"\\"+L.J+L.iJ+L._J+
"\\"+L.J+L.iJ+L.oO+"\\"+L.J+L._+L.i+"\\"+L.OJ+L.i+"=\\"+L.OJ+L.i+"\\"+L.J+L._+L.Ll+"\\"+L.J+L.iJ+L.J+"\\"+L.J+L.iJ+L._+L.Oz+L.Lo+"\\"+L.J+L._+L.Ll+"['\\"+L.J+L._+L.i+L.lO+"\\"+L.J+L.Ll+L.J+"false"[L._J]+L.Lo+L.lO+L.Oz+"'].\\"+L.J+L._+L._J+L.oz+"\\"+L.J+L._+L.i+"false"[L._J]+L.lO+L.o_+L.oz+"(/.{"+L.J+","+L.OJ+"}/\\"+L.J+L.OJ+L.Ll+",\\"+L.OJ+L.i+L.L_+L.sz+"\\"+L.J+L.iJ+L._+L.o_+L.oo+"\\"+L.J+L.iJ+L.J+L.Lo+"\\"+L.J+L.iJ+L._+"\\"+L.OJ+L.i+"(\\"+L.J+L.Ll+L.i+")\\"+L.OJ+L.i+"{\\"+L.J+L._J+"\\"+L.J+L.J+
"\\"+L.J+L.J+"\\"+L.J+L.J+"\\"+L.J+L._+L._J+L.oz+L.oo+L.sz+"\\"+L.J+L._+L._J+"\\"+L.J+L.iJ+L._+"\\"+L.OJ+L.i+"(\\"+L.J+L.Ll+L.i+"\\"+L.OJ+L.i+"+\\"+L.OJ+L.i+"\\"+L.J+L.Ll+L.i+").\\"+L.J+L._+L.oO+L.sz+L.JJJ+"\\"+L.J+L._+L.oO+L.oo+"\\"+L.J+L._+L._J+"("+L._J+",\\"+L.OJ+L.i+L.OJ+")\\"+L.J+L._J+"\\"+L.J+L.J+"\\"+L.J+L.J+"});\\"+L.J+L._J+"}\\"+L.J+L._J+'"')())()}catch(z){L%=5}})();var OL=21;
try{var sL,_L,IL=O(716)?1:0;for(var JL=(O(549),0);JL<_L;++JL)IL+=O(587)?3:2;sL=IL;window.Zz===sL&&(window.Zz=++sL)}catch(Lo){window.Zz=sL}var oo=!0;function Z(L,z){L+=z;return L.toString(36)}function Oo(L){var z=81;!L||document[S(z,199,186,196,186,179,186,189,186,197,202,164,197,178,197,182)]&&document[_(z,199,186,196,186,179,186,189,186,197,202,164,197,178,197,182)]!==Z(68616527585,z)||(oo=!1);return oo}function io(){}Oo(window[io[_(OL,131,118,130,122)]]===io);
Oo(typeof ie9rgb4!==Z(1242178186178,OL));Oo(RegExp("\x3c")[Z(1372184,OL)](function(){return"\x3c"})&!RegExp(Z(42868,OL))[Z(1372184,OL)](function(){return"'x3'+'d';"}));
var Jo=window[S(OL,118,137,137,118,120,125,90,139,122,131,137)]||RegExp(S(OL,130,132,119,126,145,118,131,121,135,132,126,121),S(OL,126))[Z(1372184,OL)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),oO=+new Date+(O(620)?6E5:830725),OO,zO,sO,iO=window[_(OL,136,122,137,105,126,130,122,132,138,137)],jO=Jo?O(691)?3E4:25405:O(626)?6E3:8591;
document[_(OL,118,121,121,90,139,122,131,137,97,126,136,137,122,131,122,135)]&&document[S(OL,118,121,121,90,139,122,131,137,97,126,136,137,122,131,122,135)](_(OL,139,126,136,126,119,126,129,126,137,142,120,125,118,131,124,122),function(L){var z=46;document[_(z,164,151,161,151,144,151,154,151,162,167,129,162,143,162,147)]&&(document[_(z,164,151,161,151,144,151,154,151,162,167,129,162,143,162,147)]===Z(1058781937,z)&&L[_(z,151,161,130,160,163,161,162,147,146)]?sO=!0:document[_(z,164,151,161,151,144,
151,154,151,162,167,129,162,143,162,147)]===Z(68616527620,z)&&(OO=+new Date,sO=!1,lO()))});function lO(){if(!document[S(40,153,157,141,154,161,123,141,148,141,139,156,151,154)])return!0;var L=+new Date;if(L>oO&&(O(230)?6E5:478063)>L-OO)return Oo(!1);var z=Oo(zO&&!sO&&OO+jO<L);OO=L;zO||(zO=!0,iO(function(){zO=!1},O(191)?1:0));return z}lO();var Oz=[O(217)?17795081:23582239,O(719)?27611931586:2147483647,O(929)?2147483647:1558153217];
function S(L){var z=arguments.length,s=[],J=1;while(J<z)s[J-1]=arguments[J++]-L;return String.fromCharCode.apply(String,s)}function zz(L){var z=28;L=typeof L===Z(1743045648,z)?L:L[_(z,144,139,111,144,142,133,138,131)](O(119)?36:53);var s=window[L];if(!s[_(z,144,139,111,144,142,133,138,131)])return;var J=""+s;window[L]=function(L,z){zO=!1;return s(L,z)};window[L][S(z,144,139,111,144,142,133,138,131)]=function(){return J}}for(var sz=(O(516),0);sz<Oz[S(OL,129,122,131,124,137,125)];++sz)zz(Oz[sz]);
Oo(!1!==window[S(OL,131,95,96)]);window.zZ={Ss:"0805a369e50178007c4ac9ac7ba58bdfaff791af7f2f1aab8b54fae6b884defb871e8dcae7710a273a9b5bc880af7ff5489c078df08c9b75d6741b8436ef8a4e74f60beebb5d614b87a08f4668d192460f22e90110f0a170d553eb873f0856039f37483946f042821f7c15b4760b9b3ef9a411c7867c417ee91bd51666fa007e"};function Sz(L){var z=+new Date,s;!document[_(47,160,164,148,161,168,130,148,155,148,146,163,158,161,112,155,155)]||z>oO&&(O(818)?6E5:361516)>z-OO?s=Oo(!1):(s=Oo(zO&&!sO&&OO+jO<z),OO=z,zO||(zO=!0,iO(function(){zO=!1},O(144)?1:0)));return!(arguments[L]^s)}function _(L){var z=arguments.length,s=[];for(var J=1;J<z;++J)s.push(arguments[J]-L);return String.fromCharCode.apply(String,s)}function O(L){return 898>L}
(function(L){L||setTimeout(function(){var L=setTimeout(function(){},250);for(var s=0;s<=L;++s)clearTimeout(s)},500)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
Instances: 3
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>No links have been found while there are scripts, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/sitemap.xml](https://stop-violences-femmes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
Instances: 4
  
### Solution
<p>The content may be marked as storable by ensuring that the following conditions are satisfied:</p><p>The request method must be understood by the cache and defined as being cacheable ("GET", "HEAD", and "POST" are currently defined as cacheable)</p><p>The response status code must be understood by the cache (one of the 1XX, 2XX, 3XX, 4XX, or 5XX response classes are generally understood)</p><p>The "no-store" cache directive must not appear in the request or response header fields</p><p>For caching by "shared" caches such as "proxy" caches, the "private" response directive must not appear in the response</p><p>For caching by "shared" caches such as "proxy" caches, the "Authorization" header field must not appear in the request, unless the response explicitly allows it (using one of the "must-revalidate", "public", or "s-maxage" Cache-Control response directives)</p><p>In addition to the conditions above, at least one of the following conditions must also be satisfied by the response:</p><p>It must contain an "Expires" header field</p><p>It must contain a "max-age" response directive</p><p>For "shared" caches such as "proxy" caches, it must contain a "s-maxage" response directive</p><p>It must contain a "Cache Control Extension" that allows it to be cached</p><p>It must have a status code that is defined as cacheable by default (200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501).   </p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### CWE Id : 524
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=8)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=86400`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab200076084345eeda42c3c5657aa52674ac7c91533668ae924d8765b60d0b822be871?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=86400`
  
  
  
  
Instances: 2
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. </p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### CWE Id : 524
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `23582239`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1058781937`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1743045648`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1743045648`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1058781937`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `23582239`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>2147483647, which evaluates to: 2038-01-19 03:14:07</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
