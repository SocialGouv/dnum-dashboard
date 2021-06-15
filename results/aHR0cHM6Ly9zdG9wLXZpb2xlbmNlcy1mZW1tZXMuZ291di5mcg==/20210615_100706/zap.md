
# ZAP Scanning Report

Generated on Tue, 15 Jun 2021 09:59:19


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 2 |
| Low | 6 |
| Informational | 5 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 1 | 
| Content Security Policy (CSP) Header Not Set | Medium | 3 | 
| X-Frame-Options Header Not Set | Medium | 3 | 
| Cookie No HttpOnly Flag | Low | 2 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cookie Without Secure Flag | Low | 2 | 
| Feature Policy Header Not Set | Low | 4 | 
| Strict-Transport-Security Header Not Set | Low | 5 | 
| X-Content-Type-Options Header Missing | Low | 5 | 
| Base64 Disclosure | Informational | 6 | 
| Modern Web Application | Informational | 4 | 
| Non-Storable Content | Informational | 4 | 
| Storable and Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 14 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=8)
  
  
  * Method: `GET`
  
  
  * Evidence: `38144624932762`
  
  
  
  
Instances: 1
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: DinersClub</p><p>Bank Identification Number: 381446</p><p>Brand: DISCOVER</p><p>Category: BUSINESS CARD</p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
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
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/sitemap.xml](https://stop-violences-femmes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/sitemap.xml](https://stop-violences-femmes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/sitemap.xml](https://stop-violences-femmes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-arlv.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-arlv.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/sitemap.xml](https://stop-violences-femmes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/sitemap.xml](https://stop-violences-femmes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/sitemap.xml](https://stop-violences-femmes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/sitemap.xml](https://stop-violences-femmes.gouv.fr/sitemap.xml)
  
  
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

  
  
  
  
### Feature Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=12)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=8)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=12)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=12)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=8)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000678e1c7458555157f1964ef7e55385f6024c672d6ebbbd34136b4172e12481130834a2557b0a280085a7662a02ea21e1dfb0948519711d6dc42020c8cb41c42623ce3bded6b110c29b48456f7f5c818b200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab200009ef7815940f768fc241d338eb9bc9e730c1ed35228d12730ccecb7ca4b19a2808f05298220a2800dfa18b5ebc88794bca65ad8251aa5f15e473fa5632e2be5ec1619c7cd5a29890952c0e7745afbab6200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20001121962f1d09254a328a349dedad1f375e6bbf88726da22bf6d9e3907697326a08a06993a00a2800d15026e556f461b7dfb0948519711d6dded1fc9b1c2bda3d6a7dff76d3f6b6f4e20058c9cdb3f4cf200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab200094f9db8be7b0acae6cdcd3608dddf6733f8d0825aed7924172c4bfad512a37110892443cbf0a28000094013f3e6ae306dfb0948519711d6dd9d3adf03a9e22e21d4abc34eec5436b88d911e3a9567bba200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0o`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/sitemap.xml](https://stop-violences-femmes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `uHrXWz4WLVZQYdIqJlLL3fNyljz02cvXfEy2MEJXmt6rHZeRRz6XpJJhyF+3W/QFRbNPX59mw11DoMMeeL8cDgkOk50=`
  
  
  
  
Instances: 6
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�]u�Mu�Mt�M��M4�M��M4�M9�M4�M4�mw���s���M4�޷�M4�M4�M4�M4�}4�M4ӯ�H���M4�M4�4�\x000f�t�}4�M4Әm��7�M4�F��Ǟoo9k֛�M4�\x001e�����y�^{_z���{�w���n\x001c뽝���m���~��^�{]��]w���kny�\x001a��4�뭚�g��W�u����9����ޝs���G<q�5s���w\x001eݷ^w���G6��<㞟��\�_\x001b�M4�M4�m4�M4�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab200094f9db8be7b0acae6cdcd3608dddf6733f8d0825aed7924172c4bfad512a37110892443cbf0a28000094013f3e6ae306dfb0948519711d6dd9d3adf03a9e22e21d4abc34eec5436b88d911e3a9567bba200000000200000000";

window.Wpo=!!window.Wpo;try{(function(){(function(){})();var _s=15;try{var js,ls,Os=S(427)?0:1,zs=S(600)?0:1,sS=S(352)?0:1,SS=S(866)?0:1,_S=S(481)?0:1,oS=S(265)?0:1,zS=S(467)?0:1;for(var i_=(S(227),0);i_<ls;++i_)Os+=S(753)?1:2,zs+=S(820)?1:2,sS+=(S(837),2),SS+=S(826)?1:2,_S+=S(612)?1:2,oS+=S(236)?1:2,zS+=S(239)?2:3;js=Os+zs+sS+SS+_S+oS+zS;window.iS===js&&(window.iS=++js)}catch(I_){window.iS=js}var J_=!0;function I(s,_){s+=_;return s.toString(36)}
function l_(s){var _=80;!s||document[l(_,198,185,195,185,178,185,188,185,196,201,163,196,177,196,181)]&&document[l(_,198,185,195,185,178,185,188,185,196,201,163,196,177,196,181)]!==l(_,198,185,195,185,178,188,181)||(J_=!1);return J_}function l(s){var _=arguments.length,J=[],z=1;while(z<_)J[z-1]=arguments[z++]-s;return String.fromCharCode.apply(String,J)}function o_(){}l_(window[o_[L(_s,125,112,124,116)]]===o_);l_(typeof ie9rgb4!==I(1242178186184,_s));
l_(RegExp("\x3c")[l(_s,131,116,130,131)](function(){return"\x3c"})&!RegExp(I(42874,_s))[I(1372190,_s)](function(){return"'x3'+'d';"}));
var Z_=window[l(_s,112,131,131,112,114,119,84,133,116,125,131)]||RegExp(l(_s,124,126,113,120,139,112,125,115,129,126,120,115),l(_s,120))[I(1372190,_s)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),_i=+new Date+(S(677)?788749:6E5),Ii,ji,Ji,li=window[l(_s,130,116,131,99,120,124,116,126,132,131)],oi=Z_?S(83)?3E4:44322:S(451)?6919:6E3;
document[L(_s,112,115,115,84,133,116,125,131,91,120,130,131,116,125,116,129)]&&document[L(_s,112,115,115,84,133,116,125,131,91,120,130,131,116,125,116,129)](L(_s,133,120,130,120,113,120,123,120,131,136,114,119,112,125,118,116),function(s){var _=68;document[l(_,186,173,183,173,166,173,176,173,184,189,151,184,165,184,169)]&&(document[L(_,186,173,183,173,166,173,176,173,184,189,151,184,165,184,169)]===I(1058781915,_)&&s[l(_,173,183,152,182,185,183,184,169,168)]?Ji=!0:document[L(_,186,173,183,173,166,
173,176,173,184,189,151,184,165,184,169)]===I(68616527598,_)&&(Ii=+new Date,Ji=!1,Oi()))});function L(s){var _=arguments.length,J=[];for(var z=1;z<_;++z)J.push(arguments[z]-s);return String.fromCharCode.apply(String,J)}function Oi(){if(!document[l(58,171,175,159,172,179,141,159,166,159,157,174,169,172)])return!0;var s=+new Date;if(s>_i&&(S(800)?873427:6E5)>s-Ii)return l_(!1);var _=l_(ji&&!Ji&&Ii+oi<s);Ii=s;ji||(ji=!0,li(function(){ji=!1},S(610)?0:1));return _}Oi();
var SI=[S(564)?24379996:17795081,S(845)?2147483647:27611931586,S(887)?1712317450:1558153217];function iI(s){var _=65;s=typeof s===L(_,180,181,179,170,175,168)?s:s[L(_,181,176,148,181,179,170,175,168)](S(53)?36:32);var J=window[s];if(!J[L(_,181,176,148,181,179,170,175,168)])return;var z=""+J;window[s]=function(s,_){ji=!1;return J(s,_)};window[s][l(_,181,176,148,181,179,170,175,168)]=function(){return z}}for(var jI=(S(709),0);jI<SI[I(1294399190,_s)];++jI)iI(SI[jI]);l_(!1!==window[L(_s,102,127,126)]);
window.__={ji:"0881073028017800ef13f297e9e78fc6c3b24ad67cdfbcd33ad1e0140d3e5f9b644407b6e64de909cf4c6a03472157daf3b653026f2a2694134df607b31ef1ba753b724fbc0452442644e6eb26c4c2e035aff9c8168d1d161e81aba14b8e9c4f82d7ae22400138e4a910e82895df8ec0742fd0bb55582225832d6c5dbe7f64e7"};function JI(s){var _=+new Date,J;!document[L(80,193,197,181,194,201,163,181,188,181,179,196,191,194,145,188,188)]||_>_i&&(S(696)?750824:6E5)>_-Ii?J=l_(!1):(J=l_(ji&&!Ji&&Ii+oi<_),Ii=_,ji||(ji=!0,li(function(){ji=!1},S(655)?0:1)));return!(arguments[s]^J)}function S(s){return 218>s}
(function(){var s=/(\A([0-9a-f]{1,4}:){1,6}(:[0-9a-f]{1,4}){1,1}\Z)|(\A(([0-9a-f]{1,4}:){1,7}|:):\Z)|(\A:(:[0-9a-f]{1,4}){1,7}\Z)/ig,_=document.getElementsByTagName("head")[0],J=[];_&&(_=_.innerHTML.slice(0,1E3));while(_=s.exec(""))J.push(_)})();})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000678e1c7458555157f1964ef7e55385f6024c672d6ebbbd34136b4172e12481130834a2557b0a280085a7662a02ea21e1dfb0948519711d6dc42020c8cb41c42623ce3bded6b110c29b48456f7f5c818b200000000200000000";

window.Wpo=!!window.Wpo;try{(function(){(function(){})();var _s=15;try{var js,ls,Os=S(427)?0:1,zs=S(600)?0:1,sS=S(352)?0:1,SS=S(866)?0:1,_S=S(481)?0:1,oS=S(265)?0:1,zS=S(467)?0:1;for(var i_=(S(227),0);i_<ls;++i_)Os+=S(753)?1:2,zs+=S(820)?1:2,sS+=(S(837),2),SS+=S(826)?1:2,_S+=S(612)?1:2,oS+=S(236)?1:2,zS+=S(239)?2:3;js=Os+zs+sS+SS+_S+oS+zS;window.iS===js&&(window.iS=++js)}catch(I_){window.iS=js}var J_=!0;function I(s,_){s+=_;return s.toString(36)}
function l_(s){var _=80;!s||document[l(_,198,185,195,185,178,185,188,185,196,201,163,196,177,196,181)]&&document[l(_,198,185,195,185,178,185,188,185,196,201,163,196,177,196,181)]!==l(_,198,185,195,185,178,188,181)||(J_=!1);return J_}function l(s){var _=arguments.length,J=[],z=1;while(z<_)J[z-1]=arguments[z++]-s;return String.fromCharCode.apply(String,J)}function o_(){}l_(window[o_[L(_s,125,112,124,116)]]===o_);l_(typeof ie9rgb4!==I(1242178186184,_s));
l_(RegExp("\x3c")[l(_s,131,116,130,131)](function(){return"\x3c"})&!RegExp(I(42874,_s))[I(1372190,_s)](function(){return"'x3'+'d';"}));
var Z_=window[l(_s,112,131,131,112,114,119,84,133,116,125,131)]||RegExp(l(_s,124,126,113,120,139,112,125,115,129,126,120,115),l(_s,120))[I(1372190,_s)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),_i=+new Date+(S(677)?788749:6E5),Ii,ji,Ji,li=window[l(_s,130,116,131,99,120,124,116,126,132,131)],oi=Z_?S(83)?3E4:44322:S(451)?6919:6E3;
document[L(_s,112,115,115,84,133,116,125,131,91,120,130,131,116,125,116,129)]&&document[L(_s,112,115,115,84,133,116,125,131,91,120,130,131,116,125,116,129)](L(_s,133,120,130,120,113,120,123,120,131,136,114,119,112,125,118,116),function(s){var _=68;document[l(_,186,173,183,173,166,173,176,173,184,189,151,184,165,184,169)]&&(document[L(_,186,173,183,173,166,173,176,173,184,189,151,184,165,184,169)]===I(1058781915,_)&&s[l(_,173,183,152,182,185,183,184,169,168)]?Ji=!0:document[L(_,186,173,183,173,166,
173,176,173,184,189,151,184,165,184,169)]===I(68616527598,_)&&(Ii=+new Date,Ji=!1,Oi()))});function L(s){var _=arguments.length,J=[];for(var z=1;z<_;++z)J.push(arguments[z]-s);return String.fromCharCode.apply(String,J)}function Oi(){if(!document[l(58,171,175,159,172,179,141,159,166,159,157,174,169,172)])return!0;var s=+new Date;if(s>_i&&(S(800)?873427:6E5)>s-Ii)return l_(!1);var _=l_(ji&&!Ji&&Ii+oi<s);Ii=s;ji||(ji=!0,li(function(){ji=!1},S(610)?0:1));return _}Oi();
var SI=[S(564)?24379996:17795081,S(845)?2147483647:27611931586,S(887)?1712317450:1558153217];function iI(s){var _=65;s=typeof s===L(_,180,181,179,170,175,168)?s:s[L(_,181,176,148,181,179,170,175,168)](S(53)?36:32);var J=window[s];if(!J[L(_,181,176,148,181,179,170,175,168)])return;var z=""+J;window[s]=function(s,_){ji=!1;return J(s,_)};window[s][l(_,181,176,148,181,179,170,175,168)]=function(){return z}}for(var jI=(S(709),0);jI<SI[I(1294399190,_s)];++jI)iI(SI[jI]);l_(!1!==window[L(_s,102,127,126)]);
window.__={ji:"08909e57c10178002f486290ba40671ac3b24ad67cdfbcd31d453ff74b4d22491686955c52154b01c56b5afc968e25bf8ae7f46311b05af1b0edc1f899ef8094dfc1aa37fd73a17b95038de63bd05e01906c511b180455f20cf1efb4c69a160046ce0d2c7666c73bb9c0e9ba3edd2bce064dd2fbc20de322007b615322b90b14"};function JI(s){var _=+new Date,J;!document[L(80,193,197,181,194,201,163,181,188,181,179,196,191,194,145,188,188)]||_>_i&&(S(696)?750824:6E5)>_-Ii?J=l_(!1):(J=l_(ji&&!Ji&&Ii+oi<_),Ii=_,ji||(ji=!0,li(function(){ji=!1},S(655)?0:1)));return!(arguments[s]^J)}function S(s){return 218>s}
(function(){var s=/(\A([0-9a-f]{1,4}:){1,6}(:[0-9a-f]{1,4}){1,1}\Z)|(\A(([0-9a-f]{1,4}:){1,7}|:):\Z)|(\A:(:[0-9a-f]{1,4}){1,7}\Z)/ig,_=document.getElementsByTagName("head")[0],J=[];_&&(_=_.innerHTML.slice(0,1E3));while(_=s.exec(""))J.push(_)})();})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20001121962f1d09254a328a349dedad1f375e6bbf88726da22bf6d9e3907697326a08a06993a00a2800d15026e556f461b7dfb0948519711d6dded1fc9b1c2bda3d6a7dff76d3f6b6f4e20058c9cdb3f4cf200000000200000000";

window.Wpo=!!window.Wpo;try{(function(){(function(){})();var _s=15;try{var js,ls,Os=S(427)?0:1,zs=S(600)?0:1,sS=S(352)?0:1,SS=S(866)?0:1,_S=S(481)?0:1,oS=S(265)?0:1,zS=S(467)?0:1;for(var i_=(S(227),0);i_<ls;++i_)Os+=S(753)?1:2,zs+=S(820)?1:2,sS+=(S(837),2),SS+=S(826)?1:2,_S+=S(612)?1:2,oS+=S(236)?1:2,zS+=S(239)?2:3;js=Os+zs+sS+SS+_S+oS+zS;window.iS===js&&(window.iS=++js)}catch(I_){window.iS=js}var J_=!0;function I(s,_){s+=_;return s.toString(36)}
function l_(s){var _=80;!s||document[l(_,198,185,195,185,178,185,188,185,196,201,163,196,177,196,181)]&&document[l(_,198,185,195,185,178,185,188,185,196,201,163,196,177,196,181)]!==l(_,198,185,195,185,178,188,181)||(J_=!1);return J_}function l(s){var _=arguments.length,J=[],z=1;while(z<_)J[z-1]=arguments[z++]-s;return String.fromCharCode.apply(String,J)}function o_(){}l_(window[o_[L(_s,125,112,124,116)]]===o_);l_(typeof ie9rgb4!==I(1242178186184,_s));
l_(RegExp("\x3c")[l(_s,131,116,130,131)](function(){return"\x3c"})&!RegExp(I(42874,_s))[I(1372190,_s)](function(){return"'x3'+'d';"}));
var Z_=window[l(_s,112,131,131,112,114,119,84,133,116,125,131)]||RegExp(l(_s,124,126,113,120,139,112,125,115,129,126,120,115),l(_s,120))[I(1372190,_s)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),_i=+new Date+(S(677)?788749:6E5),Ii,ji,Ji,li=window[l(_s,130,116,131,99,120,124,116,126,132,131)],oi=Z_?S(83)?3E4:44322:S(451)?6919:6E3;
document[L(_s,112,115,115,84,133,116,125,131,91,120,130,131,116,125,116,129)]&&document[L(_s,112,115,115,84,133,116,125,131,91,120,130,131,116,125,116,129)](L(_s,133,120,130,120,113,120,123,120,131,136,114,119,112,125,118,116),function(s){var _=68;document[l(_,186,173,183,173,166,173,176,173,184,189,151,184,165,184,169)]&&(document[L(_,186,173,183,173,166,173,176,173,184,189,151,184,165,184,169)]===I(1058781915,_)&&s[l(_,173,183,152,182,185,183,184,169,168)]?Ji=!0:document[L(_,186,173,183,173,166,
173,176,173,184,189,151,184,165,184,169)]===I(68616527598,_)&&(Ii=+new Date,Ji=!1,Oi()))});function L(s){var _=arguments.length,J=[];for(var z=1;z<_;++z)J.push(arguments[z]-s);return String.fromCharCode.apply(String,J)}function Oi(){if(!document[l(58,171,175,159,172,179,141,159,166,159,157,174,169,172)])return!0;var s=+new Date;if(s>_i&&(S(800)?873427:6E5)>s-Ii)return l_(!1);var _=l_(ji&&!Ji&&Ii+oi<s);Ii=s;ji||(ji=!0,li(function(){ji=!1},S(610)?0:1));return _}Oi();
var SI=[S(564)?24379996:17795081,S(845)?2147483647:27611931586,S(887)?1712317450:1558153217];function iI(s){var _=65;s=typeof s===L(_,180,181,179,170,175,168)?s:s[L(_,181,176,148,181,179,170,175,168)](S(53)?36:32);var J=window[s];if(!J[L(_,181,176,148,181,179,170,175,168)])return;var z=""+J;window[s]=function(s,_){ji=!1;return J(s,_)};window[s][l(_,181,176,148,181,179,170,175,168)]=function(){return z}}for(var jI=(S(709),0);jI<SI[I(1294399190,_s)];++jI)iI(SI[jI]);l_(!1!==window[L(_s,102,127,126)]);
window.__={ji:"0896151b06017800218dd01b8ecfd46bc3b24ad67cdfbcd34da195c5c9ce3e0817ec85a1961eaed255aa7c0c86c958ad2099e607aaa000746227e58d715c19b896fd0e40436ffa4b27448e547125078d2e7a8f8a48f519ba75ecceaf20b7c79c87f3b7acaf3b0c801f4af254ec5d665e5820f3aa2906bbf27a18b9809882ac94"};function JI(s){var _=+new Date,J;!document[L(80,193,197,181,194,201,163,181,188,181,179,196,191,194,145,188,188)]||_>_i&&(S(696)?750824:6E5)>_-Ii?J=l_(!1):(J=l_(ji&&!Ji&&Ii+oi<_),Ii=_,ji||(ji=!0,li(function(){ji=!1},S(655)?0:1)));return!(arguments[s]^J)}function S(s){return 218>s}
(function(){var s=/(\A([0-9a-f]{1,4}:){1,6}(:[0-9a-f]{1,4}){1,1}\Z)|(\A(([0-9a-f]{1,4}:){1,7}|:):\Z)|(\A:(:[0-9a-f]{1,4}){1,7}\Z)/ig,_=document.getElementsByTagName("head")[0],J=[];_&&(_=_.innerHTML.slice(0,1E3));while(_=s.exec(""))J.push(_)})();})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab200009ef7815940f768fc241d338eb9bc9e730c1ed35228d12730ccecb7ca4b19a2808f05298220a2800dfa18b5ebc88794bca65ad8251aa5f15e473fa5632e2be5ec1619c7cd5a29890952c0e7745afbab6200000000200000000";

window.Wpo=!!window.Wpo;try{(function(){(function(){})();var _s=15;try{var js,ls,Os=S(427)?0:1,zs=S(600)?0:1,sS=S(352)?0:1,SS=S(866)?0:1,_S=S(481)?0:1,oS=S(265)?0:1,zS=S(467)?0:1;for(var i_=(S(227),0);i_<ls;++i_)Os+=S(753)?1:2,zs+=S(820)?1:2,sS+=(S(837),2),SS+=S(826)?1:2,_S+=S(612)?1:2,oS+=S(236)?1:2,zS+=S(239)?2:3;js=Os+zs+sS+SS+_S+oS+zS;window.iS===js&&(window.iS=++js)}catch(I_){window.iS=js}var J_=!0;function I(s,_){s+=_;return s.toString(36)}
function l_(s){var _=80;!s||document[l(_,198,185,195,185,178,185,188,185,196,201,163,196,177,196,181)]&&document[l(_,198,185,195,185,178,185,188,185,196,201,163,196,177,196,181)]!==l(_,198,185,195,185,178,188,181)||(J_=!1);return J_}function l(s){var _=arguments.length,J=[],z=1;while(z<_)J[z-1]=arguments[z++]-s;return String.fromCharCode.apply(String,J)}function o_(){}l_(window[o_[L(_s,125,112,124,116)]]===o_);l_(typeof ie9rgb4!==I(1242178186184,_s));
l_(RegExp("\x3c")[l(_s,131,116,130,131)](function(){return"\x3c"})&!RegExp(I(42874,_s))[I(1372190,_s)](function(){return"'x3'+'d';"}));
var Z_=window[l(_s,112,131,131,112,114,119,84,133,116,125,131)]||RegExp(l(_s,124,126,113,120,139,112,125,115,129,126,120,115),l(_s,120))[I(1372190,_s)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),_i=+new Date+(S(677)?788749:6E5),Ii,ji,Ji,li=window[l(_s,130,116,131,99,120,124,116,126,132,131)],oi=Z_?S(83)?3E4:44322:S(451)?6919:6E3;
document[L(_s,112,115,115,84,133,116,125,131,91,120,130,131,116,125,116,129)]&&document[L(_s,112,115,115,84,133,116,125,131,91,120,130,131,116,125,116,129)](L(_s,133,120,130,120,113,120,123,120,131,136,114,119,112,125,118,116),function(s){var _=68;document[l(_,186,173,183,173,166,173,176,173,184,189,151,184,165,184,169)]&&(document[L(_,186,173,183,173,166,173,176,173,184,189,151,184,165,184,169)]===I(1058781915,_)&&s[l(_,173,183,152,182,185,183,184,169,168)]?Ji=!0:document[L(_,186,173,183,173,166,
173,176,173,184,189,151,184,165,184,169)]===I(68616527598,_)&&(Ii=+new Date,Ji=!1,Oi()))});function L(s){var _=arguments.length,J=[];for(var z=1;z<_;++z)J.push(arguments[z]-s);return String.fromCharCode.apply(String,J)}function Oi(){if(!document[l(58,171,175,159,172,179,141,159,166,159,157,174,169,172)])return!0;var s=+new Date;if(s>_i&&(S(800)?873427:6E5)>s-Ii)return l_(!1);var _=l_(ji&&!Ji&&Ii+oi<s);Ii=s;ji||(ji=!0,li(function(){ji=!1},S(610)?0:1));return _}Oi();
var SI=[S(564)?24379996:17795081,S(845)?2147483647:27611931586,S(887)?1712317450:1558153217];function iI(s){var _=65;s=typeof s===L(_,180,181,179,170,175,168)?s:s[L(_,181,176,148,181,179,170,175,168)](S(53)?36:32);var J=window[s];if(!J[L(_,181,176,148,181,179,170,175,168)])return;var z=""+J;window[s]=function(s,_){ji=!1;return J(s,_)};window[s][l(_,181,176,148,181,179,170,175,168)]=function(){return z}}for(var jI=(S(709),0);jI<SI[I(1294399190,_s)];++jI)iI(SI[jI]);l_(!1!==window[L(_s,102,127,126)]);
window.__={ji:"08478e1b23017800fc1dc0d957049d56c3b24ad67cdfbcd3cac4464a9bd7cd3b49e41f014222c6f2751a9f19720aab6cfdfe73b8edae4f38d16dbc56f973741fa52c9950df8941701fd84658e27cac2d32ccf0e984f6554b465aaa39515cc3f41c82543527cd9cf9a4b648950a6466a6224e78e8ac8e1124e6b820dba30d0c50"};function JI(s){var _=+new Date,J;!document[L(80,193,197,181,194,201,163,181,188,181,179,196,191,194,145,188,188)]||_>_i&&(S(696)?750824:6E5)>_-Ii?J=l_(!1):(J=l_(ji&&!Ji&&Ii+oi<_),Ii=_,ji||(ji=!0,li(function(){ji=!1},S(655)?0:1)));return!(arguments[s]^J)}function S(s){return 218>s}
(function(){var s=/(\A([0-9a-f]{1,4}:){1,6}(:[0-9a-f]{1,4}){1,1}\Z)|(\A(([0-9a-f]{1,4}:){1,7}|:):\Z)|(\A:(:[0-9a-f]{1,4}){1,7}\Z)/ig,_=document.getElementsByTagName("head")[0],J=[];_&&(_=_.innerHTML.slice(0,1E3));while(_=s.exec(""))J.push(_)})();})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
Instances: 4
  
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
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/sitemap.xml](https://stop-violences-femmes.gouv.fr/sitemap.xml)
  
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000d666a166f9ca44cec4e9a5ecc1b04f9d64a656d34b290d09eb85ccb93ae7d8d7?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=86400`
  
  
  
  
Instances: 1
  
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
  
  
  * Evidence: `1712317450`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1058781915`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `24379996`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1294399190`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1058781915`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1712317450`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `24379996`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1294399190`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
Instances: 14
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>2147483647, which evaluates to: 2038-01-19 03:14:07</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
