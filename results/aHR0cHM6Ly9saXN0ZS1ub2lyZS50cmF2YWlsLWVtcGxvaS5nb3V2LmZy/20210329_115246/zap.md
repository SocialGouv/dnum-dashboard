
# ZAP Scanning Report

Generated on Mon, 29 Mar 2021 11:36:31


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 1 |
| Low | 4 |
| Informational | 6 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 8 | 
| Cookie Without SameSite Attribute | Low | 1 | 
| Feature Policy Header Not Set | Low | 8 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 1 | 
| Base64 Disclosure | Informational | 2 | 
| Content-Type Header Missing | Informational | 1 | 
| Modern Web Application | Informational | 8 | 
| Retrieved from Cache | Informational | 4 | 
| Storable and Cacheable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 18 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr](https://liste-noire.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/personnes-morales.html](https://liste-noire.travail-emploi.gouv.fr/personnes-morales.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/accessibilite.html](https://liste-noire.travail-emploi.gouv.fr/accessibilite.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/index.html](https://liste-noire.travail-emploi.gouv.fr/index.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/contact.html](https://liste-noire.travail-emploi.gouv.fr/contact.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/plan.html](https://liste-noire.travail-emploi.gouv.fr/plan.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/personnes-physiques.html](https://liste-noire.travail-emploi.gouv.fr/personnes-physiques.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/](https://liste-noire.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 8
  
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

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/index.html](https://liste-noire.travail-emploi.gouv.fr/index.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-portail-dares2.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-portail-dares2.cegedim.cloud-HTTP`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Feature Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/accessibilite.html](https://liste-noire.travail-emploi.gouv.fr/accessibilite.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/personnes-morales.html](https://liste-noire.travail-emploi.gouv.fr/personnes-morales.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/index.html](https://liste-noire.travail-emploi.gouv.fr/index.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/](https://liste-noire.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/contact.html](https://liste-noire.travail-emploi.gouv.fr/contact.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr](https://liste-noire.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/plan.html](https://liste-noire.travail-emploi.gouv.fr/plan.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/personnes-physiques.html](https://liste-noire.travail-emploi.gouv.fr/personnes-physiques.html)
  
  
  * Method: `GET`
  
  
  
  
Instances: 8
  
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

  
  
  
  
### Incomplete or No Cache-control and Pragma HTTP Header Set
##### Low (Medium)
  
  
  
  
#### Description
<p>The cache-control and pragma HTTP header have not been set properly or are missing allowing the browser and proxies to cache content.</p>
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/plan.html](https://liste-noire.travail-emploi.gouv.fr/plan.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/robots.txt](https://liste-noire.travail-emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/personnes-physiques.html](https://liste-noire.travail-emploi.gouv.fr/personnes-physiques.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/](https://liste-noire.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/print.css](https://liste-noire.travail-emploi.gouv.fr/css/print.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr](https://liste-noire.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/index.html](https://liste-noire.travail-emploi.gouv.fr/index.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/contact.html](https://liste-noire.travail-emploi.gouv.fr/contact.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/personnes-morales.html](https://liste-noire.travail-emploi.gouv.fr/personnes-morales.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/accessibilite.html](https://liste-noire.travail-emploi.gouv.fr/accessibilite.html)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 11
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/sitemap.xml](https://liste-noire.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
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

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/condamnations/condamnations-personnes-physiques.pdf](https://liste-noire.travail-emploi.gouv.fr/condamnations/condamnations-personnes-physiques.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `/Type/OutputIntent/S/GTS_PDFA1/OutputConditionIdentifier`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/index.html](https://liste-noire.travail-emploi.gouv.fr/index.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `BIGipServerpool-dicom-portail-dares2`
  
  
  
  
Instances: 2
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�<�{󮶛�"{^����d����\x0003_κ�n�*'v+b�r\x001dz{b~'�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/sitemap.xml](https://liste-noire.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure each page is setting the specific and appropriate content-type value for the content being delivered.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx

  
#### CWE Id : 345
  
#### WASC Id : 12
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr](https://liste-noire.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="plan"></a>`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/personnes-physiques.html](https://liste-noire.travail-emploi.gouv.fr/personnes-physiques.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="plan"></a>`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/](https://liste-noire.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="plan"></a>`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/plan.html](https://liste-noire.travail-emploi.gouv.fr/plan.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="plan"></a>`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/personnes-morales.html](https://liste-noire.travail-emploi.gouv.fr/personnes-morales.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="plan"></a>`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/accessibilite.html](https://liste-noire.travail-emploi.gouv.fr/accessibilite.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="plan"></a>`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/index.html](https://liste-noire.travail-emploi.gouv.fr/index.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="plan"></a>`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/contact.html](https://liste-noire.travail-emploi.gouv.fr/contact.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="plan"></a>`
  
  
  
  
Instances: 8
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Retrieved from Cache
##### Informational (Medium)
  
  
  
  
#### Description
<p>The content was retrieved from a shared cache. If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance. </p>
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/](https://liste-noire.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr](https://liste-noire.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 3`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/](https://liste-noire.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 3`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/robots.txt](https://liste-noire.travail-emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
Instances: 4
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request.</p>
  
### Other information
<p>The presence of the 'Age' header indicates that that a HTTP/1.1 compliant caching server is in use.</p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/personnes-morales.html](https://liste-noire.travail-emploi.gouv.fr/personnes-morales.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/robots.txt](https://liste-noire.travail-emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/accessibilite.html](https://liste-noire.travail-emploi.gouv.fr/accessibilite.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/sitemap.xml](https://liste-noire.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/contact.html](https://liste-noire.travail-emploi.gouv.fr/contact.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/](https://liste-noire.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/personnes-physiques.html](https://liste-noire.travail-emploi.gouv.fr/personnes-physiques.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr](https://liste-noire.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/plan.html](https://liste-noire.travail-emploi.gouv.fr/plan.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/index.html](https://liste-noire.travail-emploi.gouv.fr/index.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/print.css](https://liste-noire.travail-emploi.gouv.fr/css/print.css)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. </p>
  
### Other information
<p>In the absence of an explicitly specified caching lifetime directive in the response, a liberal lifetime heuristic of 1 year was assumed. This is permitted by rfc7234.</p>
  
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
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `89361702`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `14893617`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `46808511`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `40425532`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `86170213`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `90425532`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `35106383`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `12765957`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `04255319`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `84042553`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `88297872`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `91489362`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `93617021`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `00000000`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `94680851`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `10638298`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `41489362`
  
  
  
  
* URL: [https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css](https://liste-noire.travail-emploi.gouv.fr/css/bootstrap-cssify-840c1bf.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `92553191`
  
  
  
  
Instances: 18
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>89361702, which evaluates to: 1972-10-31 06:41:42</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
