
# ZAP Scanning Report

Generated on Thu, 6 May 2021 03:20:56


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 1 |
| Low | 7 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| CSP: Wildcard Directive | Medium | 2 | 
| Cookie No HttpOnly Flag | Low | 7 | 
| Cookie Without SameSite Attribute | Low | 12 | 
| Cookie Without Secure Flag | Low | 7 | 
| Dangerous JS Functions | Low | 3 | 
| Feature Policy Header Not Set | Low | 7 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 9 | 
| X-Content-Type-Options Header Missing | Low | 1 | 
| Base64 Disclosure | Informational | 5 | 
| CSP: Notices | Informational | 2 | 
| Information Disclosure - Suspicious Comments | Informational | 4 | 
| Modern Web Application | Informational | 5 | 
| Non-Storable Content | Informational | 10 | 
| Storable and Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 7 | 

## Alert Detail


  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>style-src, style-src-elem, style-src-attr, img-src, connect-src, frame-src, font-src, media-src, manifest-src, prefetch-src, form-action</p><p></p><p>The directive(s): form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `script-src 'self' chat.vizir.co code.jquery.com cdn.jsdelivr.net 'sha256-Ihbm16nGVdxMm/rbAVGyCDHqcoNYOjn0yfeXD93OF+E=' 'report-sample'; object-src 'none'; frame-ancestors 'none'; report-uri /api/csp-report;`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `script-src 'self' chat.vizir.co code.jquery.com cdn.jsdelivr.net 'sha256-Ihbm16nGVdxMm/rbAVGyCDHqcoNYOjn0yfeXD93OF+E=' 'report-sample'; object-src 'none'; frame-ancestors 'none'; report-uri /api/csp-report;`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Other information
<p>The response contained multiple CSP headers, one or more of them contained a report-uri directive and therefore they could not be merged. The first identified header/policy was analyzed.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/favicon.ico](https://siao-preprod.cegedim-hds.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Parameter: `serverTime`
  
  
  * Evidence: `Set-Cookie: serverTime`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/sitemap.xml](https://siao-preprod.cegedim-hds.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `serverTime`
  
  
  * Evidence: `Set-Cookie: serverTime`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `serverTime`
  
  
  * Evidence: `Set-Cookie: serverTime`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `sessionExpiry`
  
  
  * Evidence: `Set-Cookie: sessionExpiry`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/robots.txt](https://siao-preprod.cegedim-hds.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `serverTime`
  
  
  * Evidence: `Set-Cookie: serverTime`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `serverTime`
  
  
  * Evidence: `Set-Cookie: serverTime`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `sessionExpiry`
  
  
  * Evidence: `Set-Cookie: sessionExpiry`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `sessionExpiry`
  
  
  * Evidence: `Set-Cookie: sessionExpiry`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-siao-preprod.cegedim-hds.fr-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-siao-preprod.cegedim-hds.fr-HTTP`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `serverTime`
  
  
  * Evidence: `Set-Cookie: serverTime`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/robots.txt](https://siao-preprod.cegedim-hds.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `serverTime`
  
  
  * Evidence: `Set-Cookie: serverTime`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/robots.txt](https://siao-preprod.cegedim-hds.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-siao-preprod.cegedim-hds.fr-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-siao-preprod.cegedim-hds.fr-HTTP`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `sessionExpiry`
  
  
  * Evidence: `Set-Cookie: sessionExpiry`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-siao-preprod.cegedim-hds.fr-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-siao-preprod.cegedim-hds.fr-HTTP`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/robots.txt](https://siao-preprod.cegedim-hds.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `sessionExpiry`
  
  
  * Evidence: `Set-Cookie: sessionExpiry`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `serverTime`
  
  
  * Evidence: `Set-Cookie: serverTime`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/robots.txt](https://siao-preprod.cegedim-hds.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `sessionExpiry`
  
  
  * Evidence: `Set-Cookie: sessionExpiry`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `serverTime`
  
  
  * Evidence: `Set-Cookie: serverTime`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `serverTime`
  
  
  * Evidence: `Set-Cookie: serverTime`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/favicon.ico](https://siao-preprod.cegedim-hds.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Parameter: `serverTime`
  
  
  * Evidence: `Set-Cookie: serverTime`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/sitemap.xml](https://siao-preprod.cegedim-hds.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `serverTime`
  
  
  * Evidence: `Set-Cookie: serverTime`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/robots.txt](https://siao-preprod.cegedim-hds.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `serverTime`
  
  
  * Evidence: `Set-Cookie: serverTime`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `sessionExpiry`
  
  
  * Evidence: `Set-Cookie: sessionExpiry`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/vendor.5368bbd7d0cbd221323b.js](https://siao-preprod.cegedim-hds.fr/vendor.5368bbd7d0cbd221323b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bypassSecurityTrustHtml`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/polyfills.aa105357c20dc86be210.js](https://siao-preprod.cegedim-hds.fr/polyfills.aa105357c20dc86be210.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/main.9ac5f2ee7ddf24427fc5.js](https://siao-preprod.cegedim-hds.fr/main.9ac5f2ee7ddf24427fc5.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/scripts.b4f65a4d21d23fe87145.js](https://siao-preprod.cegedim-hds.fr/scripts.b4f65a4d21d23fe87145.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/vendor.5368bbd7d0cbd221323b.js](https://siao-preprod.cegedim-hds.fr/vendor.5368bbd7d0cbd221323b.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/main.9ac5f2ee7ddf24427fc5.js](https://siao-preprod.cegedim-hds.fr/main.9ac5f2ee7ddf24427fc5.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/polyfills.aa105357c20dc86be210.js](https://siao-preprod.cegedim-hds.fr/polyfills.aa105357c20dc86be210.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/runtime.e558781869b272d65629.js](https://siao-preprod.cegedim-hds.fr/runtime.e558781869b272d65629.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 7
  
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
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/quill-core-style.871a10f666e73c21483f.css](https://siao-preprod.cegedim-hds.fr/quill-core-style.871a10f666e73c21483f.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/legacy-style.5b4295e5b30fe205a41d.css](https://siao-preprod.cegedim-hds.fr/legacy-style.5b4295e5b30fe205a41d.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/quill-snow-style.bf73d4cf25140f23d667.css](https://siao-preprod.cegedim-hds.fr/quill-snow-style.bf73d4cf25140f23d667.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/font-awesome-style.44e052769816c4a54181.css](https://siao-preprod.cegedim-hds.fr/font-awesome-style.44e052769816c4a54181.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/styles.f9061f83925f4199fd50.css](https://siao-preprod.cegedim-hds.fr/styles.f9061f83925f4199fd50.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/leaflet-style.2adb0d482e163aa37dc2.css](https://siao-preprod.cegedim-hds.fr/leaflet-style.2adb0d482e163aa37dc2.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/isteven-style.9c253127b802c74488bc.css](https://siao-preprod.cegedim-hds.fr/isteven-style.9c253127b802c74488bc.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-store`
  
  
  
  
Instances: 9
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/favicon.ico](https://siao-preprod.cegedim-hds.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `ig/EbGNkp2OILYEqJlLL3fNyljz02Uuiad2SN2TAxAwJ670GwSvC/d+S5W0axWugPxNH5peEajKJwbpFYh1cqBaIX3k=`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/main.9ac5f2ee7ddf24427fc5.js](https://siao-preprod.cegedim-hds.fr/main.9ac5f2ee7ddf24427fc5.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `api/demandeHebergements/exportFinPeca3Jours`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/robots.txt](https://siao-preprod.cegedim-hds.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `ZSe/QqNrZIsVsDgqJlLL3fNyljz02e+8WDJYl+wAXr7gYX453MCpVHwAwmdU/43Nx7hnIan1HkjnIusUVmF57446zwE=`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/vendor.5368bbd7d0cbd221323b.js](https://siao-preprod.cegedim-hds.fr/vendor.5368bbd7d0cbd221323b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `N1lVoJqI5ZWLB6wqJlLL3fNyljz02RuiX3EL315y/k6ZvLNVTtlzcBgCKVV0QeQbB+xlIvKl1bw+DmTvBEBSTQrLt+A=`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�\x000f�lcd�c�-�*&R���r�<��K�iݒ7d��\x000c	�\x0006�+��ߒ�m\x001a�k�?\x0013G旄j2���Eb\x001d\�\x0016�_y</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### CSP: Notices
##### Informational (Medium)
  
  
  
  
#### Description
<p>Info Items:</p><p>1:180: A draft of the next version of CSP deprecates report-uri in favour of a new report-to directive.</p><p></p>
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `script-src 'self' chat.vizir.co code.jquery.com cdn.jsdelivr.net 'sha256-Ihbm16nGVdxMm/rbAVGyCDHqcoNYOjn0yfeXD93OF+E=' 'report-sample'; object-src 'none'; frame-ancestors 'none'; report-uri /api/csp-report;`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `script-src 'self' chat.vizir.co code.jquery.com cdn.jsdelivr.net 'sha256-Ihbm16nGVdxMm/rbAVGyCDHqcoNYOjn0yfeXD93OF+E=' 'report-sample'; object-src 'none'; frame-ancestors 'none'; report-uri /api/csp-report;`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Other information
<p>The response contained multiple CSP headers, one or more of them contained a report-uri directive and therefore they could not be merged. The first identified header/policy was analyzed.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/polyfills.aa105357c20dc86be210.js](https://siao-preprod.cegedim-hds.fr/polyfills.aa105357c20dc86be210.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/vendor.5368bbd7d0cbd221323b.js](https://siao-preprod.cegedim-hds.fr/vendor.5368bbd7d0cbd221323b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Query`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/main.9ac5f2ee7ddf24427fc5.js](https://siao-preprod.cegedim-hds.fr/main.9ac5f2ee7ddf24427fc5.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/scripts.b4f65a4d21d23fe87145.js](https://siao-preprod.cegedim-hds.fr/scripts.b4f65a4d21d23fe87145.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 4
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSERNAME\b and was detected in the element starting with: "(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+auO":function(t,e,n){var r=n("XKFU"),i=n("lvtm");r(r.S,"Math",{cbrt:f", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/scripts.b4f65a4d21d23fe87145.js](https://siao-preprod.cegedim-hds.fr/scripts.b4f65a4d21d23fe87145.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="ql-action"></a>`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript">
      var appID = '5e73a199f7cefb002fa1e866';
      var url = 'https://chat.vizir.co'
      ! function() {
        var e, l, t, a, c = document,
          r = c.getElementById,
          s = c.createElement,
          i = c.getElementsByTagName,
          n = 'n',
          d = 'https://chat.vizir.co/static/widget/';
        r.call(c, n) || (l = s.call(c, 'script'), l.id = n, l.src = d + 'new.js', t = i.call(c, 'script')[0], t.parentNode.insertBefore(l, t)), n += '_', r.call(c, n) || (e = s.call(c, 'link'), e.rel = 'stylesheet', e.id = n, e.href = d + 'm.css', a = i.call(c, 'head')[0], a.appendChild(e, a))
      }();
    </script>`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/polyfills.aa105357c20dc86be210.js](https://siao-preprod.cegedim-hds.fr/polyfills.aa105357c20dc86be210.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript">
      var appID = '5e73a199f7cefb002fa1e866';
      var url = 'https://chat.vizir.co'
      ! function() {
        var e, l, t, a, c = document,
          r = c.getElementById,
          s = c.createElement,
          i = c.getElementsByTagName,
          n = 'n',
          d = 'https://chat.vizir.co/static/widget/';
        r.call(c, n) || (l = s.call(c, 'script'), l.id = n, l.src = d + 'new.js', t = i.call(c, 'script')[0], t.parentNode.insertBefore(l, t)), n += '_', r.call(c, n) || (e = s.call(c, 'link'), e.rel = 'stylesheet', e.id = n, e.href = d + 'm.css', a = i.call(c, 'head')[0], a.appendChild(e, a))
      }();
    </script>`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/vendor.5368bbd7d0cbd221323b.js](https://siao-preprod.cegedim-hds.fr/vendor.5368bbd7d0cbd221323b.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" (click)="incrementHour($event)">\n                            <span class="pi pi-chevron-up"></span>\n                        </a>`
  
  
  
  
Instances: 5
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/](https://siao-preprod.cegedim-hds.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr](https://siao-preprod.cegedim-hds.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/assets/fonts/roboto-v20-latin-regular.woff2](https://siao-preprod.cegedim-hds.fr/assets/fonts/roboto-v20-latin-regular.woff2)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/assets/fonts/roboto-v20-latin-italic.woff2](https://siao-preprod.cegedim-hds.fr/assets/fonts/roboto-v20-latin-italic.woff2)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/robots.txt](https://siao-preprod.cegedim-hds.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/assets/fonts/roboto-v20-latin-700.woff2](https://siao-preprod.cegedim-hds.fr/assets/fonts/roboto-v20-latin-700.woff2)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/assets/fonts/roboto-v20-latin-italic.woff](https://siao-preprod.cegedim-hds.fr/assets/fonts/roboto-v20-latin-italic.woff)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/assets/fonts/roboto-v20-latin-700.woff](https://siao-preprod.cegedim-hds.fr/assets/fonts/roboto-v20-latin-700.woff)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/sitemap.xml](https://siao-preprod.cegedim-hds.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/assets/fonts/roboto-v20-latin-regular.woff](https://siao-preprod.cegedim-hds.fr/assets/fonts/roboto-v20-latin-regular.woff)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/favicon.ico](https://siao-preprod.cegedim-hds.fr/favicon.ico)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/primeicons.ttf](https://siao-preprod.cegedim-hds.fr/primeicons.ttf)
  
  
  * Method: `GET`
  
  
  * Evidence: `20126717`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/primeicons.ttf](https://siao-preprod.cegedim-hds.fr/primeicons.ttf)
  
  
  * Method: `GET`
  
  
  * Evidence: `53265154`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/primeicons.ttf](https://siao-preprod.cegedim-hds.fr/primeicons.ttf)
  
  
  * Method: `GET`
  
  
  * Evidence: `515463132`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/primeicons.ttf](https://siao-preprod.cegedim-hds.fr/primeicons.ttf)
  
  
  * Method: `GET`
  
  
  * Evidence: `313265154`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/primeicons.ttf](https://siao-preprod.cegedim-hds.fr/primeicons.ttf)
  
  
  * Method: `GET`
  
  
  * Evidence: `302326717`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/primeicons.ttf](https://siao-preprod.cegedim-hds.fr/primeicons.ttf)
  
  
  * Method: `GET`
  
  
  * Evidence: `515467546`
  
  
  
  
* URL: [https://siao-preprod.cegedim-hds.fr/primeicons.ttf](https://siao-preprod.cegedim-hds.fr/primeicons.ttf)
  
  
  * Method: `GET`
  
  
  * Evidence: `267176454`
  
  
  
  
Instances: 7
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>20126717, which evaluates to: 1970-08-21 22:45:17</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
