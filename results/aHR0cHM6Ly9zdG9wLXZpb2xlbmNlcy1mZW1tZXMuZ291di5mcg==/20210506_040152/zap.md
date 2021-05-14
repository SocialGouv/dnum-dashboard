
# ZAP Scanning Report

Generated on Thu, 6 May 2021 03:54:04


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 2 |
| Low | 7 |
| Informational | 5 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 1 | 
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
| Timestamp Disclosure - Unix | Informational | 16 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (Medium)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `345329333477013`
  
  
  
  
Instances: 1
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: American Express</p>
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=8)
  
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=12)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=8)
  
  
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
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=8)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=12)
  
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=8)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=12)
  
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `SPEvWULbHI0UUEcqJlLL3fNyljz02XlVofxlp+tVGY0nW1zmiHlTqDuOK/0yMpppP9b8nV0IBlONwsPG8t/v5jROidI=`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000cced5418d3eb75e5eec73aba506c8c535950a9f2c1eb409d1fdf07f8d28bd51108765813410a28001ab04810ea779b002ac62f72c35fc6ebb8cc845e469526c8538af58ecc540b310e344bac7b862624200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000467f8b121ffad21744caf387b02bab3cdf77f95893e282e76a40e0afadac9e9108bded194e0a280037906ccf855def29276fb7a6cb01bf8591dffbfcd17d83cb37e606518cb8f4aff5cf3731aa6034ec200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0o`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20008a1eb12929edd501c811254e3be8d3809ad2ee89010d9bf6cd578e8e98f7276e08f2b580c90a2800bc82e13f2daf53856208d620b5127441f062423e8b5ad0310bcea6836307222e4c6caa719c6c1398200000000200000000`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>H�/YB�\x001c�\x0014PG*&R���r�<��yU��e��U\x0019�'[\�yS�;�+�22�i?���]\x0008\x0006S��������4N��</p>
  
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
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000cced5418d3eb75e5eec73aba506c8c535950a9f2c1eb409d1fdf07f8d28bd51108765813410a28001ab04810ea779b002ac62f72c35fc6ebb8cc845e469526c8538af58ecc540b310e344bac7b862624200000000200000000";

window.BTqN=!!window.BTqN;try{(function(){(function(){var I=-1,I={J:++I,OI:"false"[I],L:++I,oZ:"false"[I],IL:++I,LLL:"[object Object]"[I],Zs:(I[I]+"")[I],zZ:++I,zs:"true"[I],ZL:++I,jL:++I,zI:"[object Object]"[I],I:++I,Oo:++I,O_L:++I,o_L:++I};try{I.LZ=(I.LZ=I+"")[I.jL]+(I.Oz=I.LZ[I.L])+(I.oI=(I.oz+"")[I.L])+(!I+"")[I.zZ]+(I.zz=I.LZ[I.I])+(I.oz="true"[I.L])+(I._s="true"[I.IL])+I.LZ[I.jL]+I.zz+I.Oz+I.oz,I.oI=I.oz+"true"[I.zZ]+I.zz+I._s+I.oz+I.oI,I.oz=I.J[I.LZ][I.LZ],I.oz(I.oz(I.oI+'"\\'+I.L+I.jL+I.L+I.OI+"\\"+I.ZL+I.J+"("+I.zz+"\\"+I.L+I.Oo+
I.L+"\\"+I.L+I.I+I.J+I.zs+I.Oz+I.OI+"\\"+I.ZL+I.J+"\\"+I.L+I.I+I.Oo+"\\"+I.L+I.jL+I.L+"\\"+I.L+I.jL+I.I+I.Zs+I.Oz+"\\"+I.L+I.I+I.Oo+"['\\"+I.L+I.I+I.J+I.oZ+"\\"+I.L+I.Oo+I.L+"false"[I.IL]+I.Oz+I.oZ+I.Zs+"']\\"+I.ZL+I.J+"===\\"+I.ZL+I.J+"'\\"+I.L+I.I+I.zZ+I.zz+"\\"+I.L+I.I+I.IL+"\\"+I.L+I.jL+I.L+"\\"+I.L+I.jL+I.I+"\\"+I.L+I.ZL+I.Oo+"')\\"+I.ZL+I.J+"{\\"+I.L+I.IL+"\\"+I.L+I.L+"\\"+I.L+I.I+I.I+I.oZ+"\\"+I.L+I.I+I.IL+"\\"+I.ZL+I.J+I.zs+I.Zs+"\\"+I.L+I.I+I.I+I.zI+"\\"+I.L+I.Oo+I.L+I._s+"\\"+I.L+I.jL+I.IL+
"\\"+I.L+I.jL+I.zZ+"\\"+I.L+I.I+I.J+"\\"+I.ZL+I.J+"=\\"+I.ZL+I.J+"\\"+I.L+I.I+I.Oo+"\\"+I.L+I.jL+I.L+"\\"+I.L+I.jL+I.I+I.Zs+I.Oz+"\\"+I.L+I.I+I.Oo+"['\\"+I.L+I.I+I.J+I.oZ+"\\"+I.L+I.Oo+I.L+"false"[I.IL]+I.Oz+I.oZ+I.Zs+"'].\\"+I.L+I.I+I.IL+I.zs+"\\"+I.L+I.I+I.J+"false"[I.IL]+I.oZ+I.zI+I.zs+"(/.{"+I.L+","+I.ZL+"}/\\"+I.L+I.ZL+I.Oo+",\\"+I.ZL+I.J+I.OI+I._s+"\\"+I.L+I.jL+I.I+I.zI+I.zz+"\\"+I.L+I.jL+I.L+I.Oz+"\\"+I.L+I.jL+I.I+"\\"+I.ZL+I.J+"(\\"+I.L+I.Oo+I.J+")\\"+I.ZL+I.J+"{\\"+I.L+I.IL+"\\"+I.L+I.L+
"\\"+I.L+I.L+"\\"+I.L+I.L+"\\"+I.L+I.I+I.IL+I.zs+I.zz+I._s+"\\"+I.L+I.I+I.IL+"\\"+I.L+I.jL+I.I+"\\"+I.ZL+I.J+"(\\"+I.L+I.Oo+I.J+"\\"+I.ZL+I.J+"+\\"+I.ZL+I.J+"\\"+I.L+I.Oo+I.J+").\\"+I.L+I.I+I.zZ+I._s+I.LLL+"\\"+I.L+I.I+I.zZ+I.zz+"\\"+I.L+I.I+I.IL+"("+I.IL+",\\"+I.ZL+I.J+I.ZL+")\\"+I.L+I.IL+"\\"+I.L+I.L+"\\"+I.L+I.L+"});\\"+I.L+I.IL+"}\\"+I.L+I.IL+'"')())()}catch(l){I%=5}})();var JI=99;
try{var oI,zI,sI=J(218)?0:1,_I=J(967)?0:1,Ij=J(49)?1:0,jj=J(626)?0:1,Jj=J(582)?0:1,Zj=J(48)?1:0,_j=J(858)?0:1,jJ=J(65)?1:0;for(var JJ=(J(691),0);JJ<zI;++JJ)sI+=J(275)?1:2,_I+=J(111)?1:2,Ij+=J(262)?1:2,jj+=J(492)?1:2,Jj+=(J(729),2),Zj+=(J(466),2),_j+=(J(103),2),jJ+=(J(559),3);oI=sI+_I+Ij+jj+Jj+Zj+_j+jJ;window.Ss===oI&&(window.Ss=++oI)}catch(LJ){window.Ss=oI}var oJ=!0;function L(I,l){I+=l;return I.toString(36)}
function zJ(I){var l=36;!I||document[z(l,154,141,151,141,134,141,144,141,152,157,119,152,133,152,137)]&&document[Z(l,154,141,151,141,134,141,144,141,152,157,119,152,133,152,137)]!==z(l,154,141,151,141,134,144,137)||(oJ=!1);return oJ}function Z(I){var l=arguments.length,O=[];for(var S=1;S<l;++S)O.push(arguments[S]-I);return String.fromCharCode.apply(String,O)}function SJ(){}zJ(window[SJ[Z(JI,209,196,208,200)]]===SJ);zJ(typeof ie9rgb4!==L(1242178186100,JI));
zJ(RegExp("\x3c")[L(1372106,JI)](function(){return"\x3c"})&!RegExp(Z(JI,219,150,199))[L(1372106,JI)](function(){return"'x3'+'d';"}));
var Il=window[Z(JI,196,215,215,196,198,203,168,217,200,209,215)]||RegExp(z(JI,208,210,197,204,223,196,209,199,213,210,204,199),L(-81,JI))[z(JI,215,200,214,215)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),jl=+new Date+(J(94)?424249:6E5),Jl,ll,Ll,Zl=window[z(JI,214,200,215,183,204,208,200,210,216,215)],sl=Il?J(925)?27860:3E4:J(96)?7879:6E3;
document[z(JI,196,199,199,168,217,200,209,215,175,204,214,215,200,209,200,213)]&&document[Z(JI,196,199,199,168,217,200,209,215,175,204,214,215,200,209,200,213)](z(JI,217,204,214,204,197,204,207,204,215,220,198,203,196,209,202,200),function(I){var l=4;document[Z(l,122,109,119,109,102,109,112,109,120,125,87,120,101,120,105)]&&(document[Z(l,122,109,119,109,102,109,112,109,120,125,87,120,101,120,105)]===L(1058781979,l)&&I[Z(l,109,119,88,118,121,119,120,105,104)]?Ll=!0:document[Z(l,122,109,119,109,102,
109,112,109,120,125,87,120,101,120,105)]===z(l,122,109,119,109,102,112,105)&&(Jl=+new Date,Ll=!1,_l()))});function _l(){if(!document[Z(22,135,139,123,136,143,105,123,130,123,121,138,133,136)])return!0;var I=+new Date;if(I>jl&&(J(376)?343134:6E5)>I-Jl)return zJ(!1);var l=zJ(ll&&!Ll&&Jl+sl<I);Jl=I;ll||(ll=!0,Zl(function(){ll=!1},J(37)?1:0));return l}_l();var il=[J(874)?23434455:17795081,J(270)?2147483647:27611931586,J(157)?1588920682:1558153217];
function lL(I){var l=24;I=typeof I===L(1743045652,l)?I:I[z(l,140,135,107,140,138,129,134,127)](J(45)?36:37);var O=window[I];if(!O[Z(l,140,135,107,140,138,129,134,127)])return;var S=""+O;window[I]=function(I,l){ll=!1;return O(I,l)};window[I][Z(l,140,135,107,140,138,129,134,127)]=function(){return S}}for(var LL=(J(206),0);LL<il[L(1294399106,JI)];++LL)lL(il[LL]);zJ(!1!==window[Z(JI,165,183,212,177)]);window.SS={I_:"088bca4dd40178001cae9e4db5b0eb59e86ef72a161c7f7224511a60bee32f1de082a9a5c577e6e18746d74584bf7ba43365038356fa2991be058f6e2163d3880ab28480abf24b9f2b802a1f946a73bccdbe1746059f267d65155aa07bf0815d09bace13e827fb4a5127d8b70e7d37bf7d02f0b06dbdb170b680b9220d50e6da"};
function z(I){var l=arguments.length,O=[],S=1;while(S<l)O[S-1]=arguments[S++]-I;return String.fromCharCode.apply(String,O)}function oL(I){var l=+new Date,O;!document[z(79,192,196,180,193,200,162,180,187,180,178,195,190,193,144,187,187)]||l>jl&&(J(720)?349116:6E5)>l-Jl?O=zJ(!1):(O=zJ(ll&&!Ll&&Jl+sl<l),Jl=l,ll||(ll=!0,Zl(function(){ll=!1},J(382)?0:1)));return!(arguments[I]^O)}function J(I){return 93>I}
(function(I){I||setTimeout(function(){var I=setTimeout(function(){},250);for(var O=0;O<=I;++O)clearTimeout(O)},500)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20008a1eb12929edd501c811254e3be8d3809ad2ee89010d9bf6cd578e8e98f7276e08f2b580c90a2800bc82e13f2daf53856208d620b5127441f062423e8b5ad0310bcea6836307222e4c6caa719c6c1398200000000200000000";

window.BTqN=!!window.BTqN;try{(function(){(function(){var I=-1,I={J:++I,OI:"false"[I],L:++I,oZ:"false"[I],IL:++I,LLL:"[object Object]"[I],Zs:(I[I]+"")[I],zZ:++I,zs:"true"[I],ZL:++I,jL:++I,zI:"[object Object]"[I],I:++I,Oo:++I,O_L:++I,o_L:++I};try{I.LZ=(I.LZ=I+"")[I.jL]+(I.Oz=I.LZ[I.L])+(I.oI=(I.oz+"")[I.L])+(!I+"")[I.zZ]+(I.zz=I.LZ[I.I])+(I.oz="true"[I.L])+(I._s="true"[I.IL])+I.LZ[I.jL]+I.zz+I.Oz+I.oz,I.oI=I.oz+"true"[I.zZ]+I.zz+I._s+I.oz+I.oI,I.oz=I.J[I.LZ][I.LZ],I.oz(I.oz(I.oI+'"\\'+I.L+I.jL+I.L+I.OI+"\\"+I.ZL+I.J+"("+I.zz+"\\"+I.L+I.Oo+
I.L+"\\"+I.L+I.I+I.J+I.zs+I.Oz+I.OI+"\\"+I.ZL+I.J+"\\"+I.L+I.I+I.Oo+"\\"+I.L+I.jL+I.L+"\\"+I.L+I.jL+I.I+I.Zs+I.Oz+"\\"+I.L+I.I+I.Oo+"['\\"+I.L+I.I+I.J+I.oZ+"\\"+I.L+I.Oo+I.L+"false"[I.IL]+I.Oz+I.oZ+I.Zs+"']\\"+I.ZL+I.J+"===\\"+I.ZL+I.J+"'\\"+I.L+I.I+I.zZ+I.zz+"\\"+I.L+I.I+I.IL+"\\"+I.L+I.jL+I.L+"\\"+I.L+I.jL+I.I+"\\"+I.L+I.ZL+I.Oo+"')\\"+I.ZL+I.J+"{\\"+I.L+I.IL+"\\"+I.L+I.L+"\\"+I.L+I.I+I.I+I.oZ+"\\"+I.L+I.I+I.IL+"\\"+I.ZL+I.J+I.zs+I.Zs+"\\"+I.L+I.I+I.I+I.zI+"\\"+I.L+I.Oo+I.L+I._s+"\\"+I.L+I.jL+I.IL+
"\\"+I.L+I.jL+I.zZ+"\\"+I.L+I.I+I.J+"\\"+I.ZL+I.J+"=\\"+I.ZL+I.J+"\\"+I.L+I.I+I.Oo+"\\"+I.L+I.jL+I.L+"\\"+I.L+I.jL+I.I+I.Zs+I.Oz+"\\"+I.L+I.I+I.Oo+"['\\"+I.L+I.I+I.J+I.oZ+"\\"+I.L+I.Oo+I.L+"false"[I.IL]+I.Oz+I.oZ+I.Zs+"'].\\"+I.L+I.I+I.IL+I.zs+"\\"+I.L+I.I+I.J+"false"[I.IL]+I.oZ+I.zI+I.zs+"(/.{"+I.L+","+I.ZL+"}/\\"+I.L+I.ZL+I.Oo+",\\"+I.ZL+I.J+I.OI+I._s+"\\"+I.L+I.jL+I.I+I.zI+I.zz+"\\"+I.L+I.jL+I.L+I.Oz+"\\"+I.L+I.jL+I.I+"\\"+I.ZL+I.J+"(\\"+I.L+I.Oo+I.J+")\\"+I.ZL+I.J+"{\\"+I.L+I.IL+"\\"+I.L+I.L+
"\\"+I.L+I.L+"\\"+I.L+I.L+"\\"+I.L+I.I+I.IL+I.zs+I.zz+I._s+"\\"+I.L+I.I+I.IL+"\\"+I.L+I.jL+I.I+"\\"+I.ZL+I.J+"(\\"+I.L+I.Oo+I.J+"\\"+I.ZL+I.J+"+\\"+I.ZL+I.J+"\\"+I.L+I.Oo+I.J+").\\"+I.L+I.I+I.zZ+I._s+I.LLL+"\\"+I.L+I.I+I.zZ+I.zz+"\\"+I.L+I.I+I.IL+"("+I.IL+",\\"+I.ZL+I.J+I.ZL+")\\"+I.L+I.IL+"\\"+I.L+I.L+"\\"+I.L+I.L+"});\\"+I.L+I.IL+"}\\"+I.L+I.IL+'"')())()}catch(l){I%=5}})();var JI=99;
try{var oI,zI,sI=J(218)?0:1,_I=J(967)?0:1,Ij=J(49)?1:0,jj=J(626)?0:1,Jj=J(582)?0:1,Zj=J(48)?1:0,_j=J(858)?0:1,jJ=J(65)?1:0;for(var JJ=(J(691),0);JJ<zI;++JJ)sI+=J(275)?1:2,_I+=J(111)?1:2,Ij+=J(262)?1:2,jj+=J(492)?1:2,Jj+=(J(729),2),Zj+=(J(466),2),_j+=(J(103),2),jJ+=(J(559),3);oI=sI+_I+Ij+jj+Jj+Zj+_j+jJ;window.Ss===oI&&(window.Ss=++oI)}catch(LJ){window.Ss=oI}var oJ=!0;function L(I,l){I+=l;return I.toString(36)}
function zJ(I){var l=36;!I||document[z(l,154,141,151,141,134,141,144,141,152,157,119,152,133,152,137)]&&document[Z(l,154,141,151,141,134,141,144,141,152,157,119,152,133,152,137)]!==z(l,154,141,151,141,134,144,137)||(oJ=!1);return oJ}function Z(I){var l=arguments.length,O=[];for(var S=1;S<l;++S)O.push(arguments[S]-I);return String.fromCharCode.apply(String,O)}function SJ(){}zJ(window[SJ[Z(JI,209,196,208,200)]]===SJ);zJ(typeof ie9rgb4!==L(1242178186100,JI));
zJ(RegExp("\x3c")[L(1372106,JI)](function(){return"\x3c"})&!RegExp(Z(JI,219,150,199))[L(1372106,JI)](function(){return"'x3'+'d';"}));
var Il=window[Z(JI,196,215,215,196,198,203,168,217,200,209,215)]||RegExp(z(JI,208,210,197,204,223,196,209,199,213,210,204,199),L(-81,JI))[z(JI,215,200,214,215)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),jl=+new Date+(J(94)?424249:6E5),Jl,ll,Ll,Zl=window[z(JI,214,200,215,183,204,208,200,210,216,215)],sl=Il?J(925)?27860:3E4:J(96)?7879:6E3;
document[z(JI,196,199,199,168,217,200,209,215,175,204,214,215,200,209,200,213)]&&document[Z(JI,196,199,199,168,217,200,209,215,175,204,214,215,200,209,200,213)](z(JI,217,204,214,204,197,204,207,204,215,220,198,203,196,209,202,200),function(I){var l=4;document[Z(l,122,109,119,109,102,109,112,109,120,125,87,120,101,120,105)]&&(document[Z(l,122,109,119,109,102,109,112,109,120,125,87,120,101,120,105)]===L(1058781979,l)&&I[Z(l,109,119,88,118,121,119,120,105,104)]?Ll=!0:document[Z(l,122,109,119,109,102,
109,112,109,120,125,87,120,101,120,105)]===z(l,122,109,119,109,102,112,105)&&(Jl=+new Date,Ll=!1,_l()))});function _l(){if(!document[Z(22,135,139,123,136,143,105,123,130,123,121,138,133,136)])return!0;var I=+new Date;if(I>jl&&(J(376)?343134:6E5)>I-Jl)return zJ(!1);var l=zJ(ll&&!Ll&&Jl+sl<I);Jl=I;ll||(ll=!0,Zl(function(){ll=!1},J(37)?1:0));return l}_l();var il=[J(874)?23434455:17795081,J(270)?2147483647:27611931586,J(157)?1588920682:1558153217];
function lL(I){var l=24;I=typeof I===L(1743045652,l)?I:I[z(l,140,135,107,140,138,129,134,127)](J(45)?36:37);var O=window[I];if(!O[Z(l,140,135,107,140,138,129,134,127)])return;var S=""+O;window[I]=function(I,l){ll=!1;return O(I,l)};window[I][Z(l,140,135,107,140,138,129,134,127)]=function(){return S}}for(var LL=(J(206),0);LL<il[L(1294399106,JI)];++LL)lL(il[LL]);zJ(!1!==window[Z(JI,165,183,212,177)]);window.SS={I_:"088aaa5674017800d388c1437ae077b9e86ef72a161c7f7251b3bca079f97f317749f4d20af9a7b5a82f964eca4e27412096bc4703094ff6fb0e89cd3b27255909caded30f345329333477013a24161c440e792baf7b78bd676340fd87aef772e03fe1cedc27f63de17f69d63a77296e9d242db160dce89b54a778385ce37334"};
function z(I){var l=arguments.length,O=[],S=1;while(S<l)O[S-1]=arguments[S++]-I;return String.fromCharCode.apply(String,O)}function oL(I){var l=+new Date,O;!document[z(79,192,196,180,193,200,162,180,187,180,178,195,190,193,144,187,187)]||l>jl&&(J(720)?349116:6E5)>l-Jl?O=zJ(!1):(O=zJ(ll&&!Ll&&Jl+sl<l),Jl=l,ll||(ll=!0,Zl(function(){ll=!1},J(382)?0:1)));return!(arguments[I]^O)}function J(I){return 93>I}
(function(I){I||setTimeout(function(){var I=setTimeout(function(){},250);for(var O=0;O<=I;++O)clearTimeout(O)},500)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000467f8b121ffad21744caf387b02bab3cdf77f95893e282e76a40e0afadac9e9108bded194e0a280037906ccf855def29276fb7a6cb01bf8591dffbfcd17d83cb37e606518cb8f4aff5cf3731aa6034ec200000000200000000";

window.BTqN=!!window.BTqN;try{(function(){(function(){var I=-1,I={J:++I,OI:"false"[I],L:++I,oZ:"false"[I],IL:++I,LLL:"[object Object]"[I],Zs:(I[I]+"")[I],zZ:++I,zs:"true"[I],ZL:++I,jL:++I,zI:"[object Object]"[I],I:++I,Oo:++I,O_L:++I,o_L:++I};try{I.LZ=(I.LZ=I+"")[I.jL]+(I.Oz=I.LZ[I.L])+(I.oI=(I.oz+"")[I.L])+(!I+"")[I.zZ]+(I.zz=I.LZ[I.I])+(I.oz="true"[I.L])+(I._s="true"[I.IL])+I.LZ[I.jL]+I.zz+I.Oz+I.oz,I.oI=I.oz+"true"[I.zZ]+I.zz+I._s+I.oz+I.oI,I.oz=I.J[I.LZ][I.LZ],I.oz(I.oz(I.oI+'"\\'+I.L+I.jL+I.L+I.OI+"\\"+I.ZL+I.J+"("+I.zz+"\\"+I.L+I.Oo+
I.L+"\\"+I.L+I.I+I.J+I.zs+I.Oz+I.OI+"\\"+I.ZL+I.J+"\\"+I.L+I.I+I.Oo+"\\"+I.L+I.jL+I.L+"\\"+I.L+I.jL+I.I+I.Zs+I.Oz+"\\"+I.L+I.I+I.Oo+"['\\"+I.L+I.I+I.J+I.oZ+"\\"+I.L+I.Oo+I.L+"false"[I.IL]+I.Oz+I.oZ+I.Zs+"']\\"+I.ZL+I.J+"===\\"+I.ZL+I.J+"'\\"+I.L+I.I+I.zZ+I.zz+"\\"+I.L+I.I+I.IL+"\\"+I.L+I.jL+I.L+"\\"+I.L+I.jL+I.I+"\\"+I.L+I.ZL+I.Oo+"')\\"+I.ZL+I.J+"{\\"+I.L+I.IL+"\\"+I.L+I.L+"\\"+I.L+I.I+I.I+I.oZ+"\\"+I.L+I.I+I.IL+"\\"+I.ZL+I.J+I.zs+I.Zs+"\\"+I.L+I.I+I.I+I.zI+"\\"+I.L+I.Oo+I.L+I._s+"\\"+I.L+I.jL+I.IL+
"\\"+I.L+I.jL+I.zZ+"\\"+I.L+I.I+I.J+"\\"+I.ZL+I.J+"=\\"+I.ZL+I.J+"\\"+I.L+I.I+I.Oo+"\\"+I.L+I.jL+I.L+"\\"+I.L+I.jL+I.I+I.Zs+I.Oz+"\\"+I.L+I.I+I.Oo+"['\\"+I.L+I.I+I.J+I.oZ+"\\"+I.L+I.Oo+I.L+"false"[I.IL]+I.Oz+I.oZ+I.Zs+"'].\\"+I.L+I.I+I.IL+I.zs+"\\"+I.L+I.I+I.J+"false"[I.IL]+I.oZ+I.zI+I.zs+"(/.{"+I.L+","+I.ZL+"}/\\"+I.L+I.ZL+I.Oo+",\\"+I.ZL+I.J+I.OI+I._s+"\\"+I.L+I.jL+I.I+I.zI+I.zz+"\\"+I.L+I.jL+I.L+I.Oz+"\\"+I.L+I.jL+I.I+"\\"+I.ZL+I.J+"(\\"+I.L+I.Oo+I.J+")\\"+I.ZL+I.J+"{\\"+I.L+I.IL+"\\"+I.L+I.L+
"\\"+I.L+I.L+"\\"+I.L+I.L+"\\"+I.L+I.I+I.IL+I.zs+I.zz+I._s+"\\"+I.L+I.I+I.IL+"\\"+I.L+I.jL+I.I+"\\"+I.ZL+I.J+"(\\"+I.L+I.Oo+I.J+"\\"+I.ZL+I.J+"+\\"+I.ZL+I.J+"\\"+I.L+I.Oo+I.J+").\\"+I.L+I.I+I.zZ+I._s+I.LLL+"\\"+I.L+I.I+I.zZ+I.zz+"\\"+I.L+I.I+I.IL+"("+I.IL+",\\"+I.ZL+I.J+I.ZL+")\\"+I.L+I.IL+"\\"+I.L+I.L+"\\"+I.L+I.L+"});\\"+I.L+I.IL+"}\\"+I.L+I.IL+'"')())()}catch(l){I%=5}})();var JI=99;
try{var oI,zI,sI=J(218)?0:1,_I=J(967)?0:1,Ij=J(49)?1:0,jj=J(626)?0:1,Jj=J(582)?0:1,Zj=J(48)?1:0,_j=J(858)?0:1,jJ=J(65)?1:0;for(var JJ=(J(691),0);JJ<zI;++JJ)sI+=J(275)?1:2,_I+=J(111)?1:2,Ij+=J(262)?1:2,jj+=J(492)?1:2,Jj+=(J(729),2),Zj+=(J(466),2),_j+=(J(103),2),jJ+=(J(559),3);oI=sI+_I+Ij+jj+Jj+Zj+_j+jJ;window.Ss===oI&&(window.Ss=++oI)}catch(LJ){window.Ss=oI}var oJ=!0;function L(I,l){I+=l;return I.toString(36)}
function zJ(I){var l=36;!I||document[z(l,154,141,151,141,134,141,144,141,152,157,119,152,133,152,137)]&&document[Z(l,154,141,151,141,134,141,144,141,152,157,119,152,133,152,137)]!==z(l,154,141,151,141,134,144,137)||(oJ=!1);return oJ}function Z(I){var l=arguments.length,O=[];for(var S=1;S<l;++S)O.push(arguments[S]-I);return String.fromCharCode.apply(String,O)}function SJ(){}zJ(window[SJ[Z(JI,209,196,208,200)]]===SJ);zJ(typeof ie9rgb4!==L(1242178186100,JI));
zJ(RegExp("\x3c")[L(1372106,JI)](function(){return"\x3c"})&!RegExp(Z(JI,219,150,199))[L(1372106,JI)](function(){return"'x3'+'d';"}));
var Il=window[Z(JI,196,215,215,196,198,203,168,217,200,209,215)]||RegExp(z(JI,208,210,197,204,223,196,209,199,213,210,204,199),L(-81,JI))[z(JI,215,200,214,215)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),jl=+new Date+(J(94)?424249:6E5),Jl,ll,Ll,Zl=window[z(JI,214,200,215,183,204,208,200,210,216,215)],sl=Il?J(925)?27860:3E4:J(96)?7879:6E3;
document[z(JI,196,199,199,168,217,200,209,215,175,204,214,215,200,209,200,213)]&&document[Z(JI,196,199,199,168,217,200,209,215,175,204,214,215,200,209,200,213)](z(JI,217,204,214,204,197,204,207,204,215,220,198,203,196,209,202,200),function(I){var l=4;document[Z(l,122,109,119,109,102,109,112,109,120,125,87,120,101,120,105)]&&(document[Z(l,122,109,119,109,102,109,112,109,120,125,87,120,101,120,105)]===L(1058781979,l)&&I[Z(l,109,119,88,118,121,119,120,105,104)]?Ll=!0:document[Z(l,122,109,119,109,102,
109,112,109,120,125,87,120,101,120,105)]===z(l,122,109,119,109,102,112,105)&&(Jl=+new Date,Ll=!1,_l()))});function _l(){if(!document[Z(22,135,139,123,136,143,105,123,130,123,121,138,133,136)])return!0;var I=+new Date;if(I>jl&&(J(376)?343134:6E5)>I-Jl)return zJ(!1);var l=zJ(ll&&!Ll&&Jl+sl<I);Jl=I;ll||(ll=!0,Zl(function(){ll=!1},J(37)?1:0));return l}_l();var il=[J(874)?23434455:17795081,J(270)?2147483647:27611931586,J(157)?1588920682:1558153217];
function lL(I){var l=24;I=typeof I===L(1743045652,l)?I:I[z(l,140,135,107,140,138,129,134,127)](J(45)?36:37);var O=window[I];if(!O[Z(l,140,135,107,140,138,129,134,127)])return;var S=""+O;window[I]=function(I,l){ll=!1;return O(I,l)};window[I][Z(l,140,135,107,140,138,129,134,127)]=function(){return S}}for(var LL=(J(206),0);LL<il[L(1294399106,JI)];++LL)lL(il[LL]);zJ(!1!==window[Z(JI,165,183,212,177)]);window.SS={I_:"0843a0ef5c01780000510aea5a9ad784e86ef72a161c7f7297fed36834f0b918198fba5f9a46aa299d152fda104efe0d906f1d89e52df8d9af62bef05bbbcef0b766044a8ee6207b3aa5825616a02ed3fde32e9c61e17f02403b43f6a661a1ab75c6798be7600a696476e1e84c4842b7444c567709db0c6bf4d2cf6161eff04c"};
function z(I){var l=arguments.length,O=[],S=1;while(S<l)O[S-1]=arguments[S++]-I;return String.fromCharCode.apply(String,O)}function oL(I){var l=+new Date,O;!document[z(79,192,196,180,193,200,162,180,187,180,178,195,190,193,144,187,187)]||l>jl&&(J(720)?349116:6E5)>l-Jl?O=zJ(!1):(O=zJ(ll&&!Ll&&Jl+sl<l),Jl=l,ll||(ll=!0,Zl(function(){ll=!1},J(382)?0:1)));return!(arguments[I]^O)}function J(I){return 93>I}
(function(I){I||setTimeout(function(){var I=setTimeout(function(){},250);for(var O=0;O<=I;++O)clearTimeout(O)},500)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=86400`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005151509a7ed0a3b0bbe8d224119c82f1745ee9cc40d968c3634b22170c136ef8?type=8)
  
  
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
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1058781979`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1588920682`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `23434455`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `23434455`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1058781979`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1294399106`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1588920682`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1743045652`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1743045652`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1294399106`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
Instances: 16
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>2147483647, which evaluates to: 2038-01-19 03:14:07</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
