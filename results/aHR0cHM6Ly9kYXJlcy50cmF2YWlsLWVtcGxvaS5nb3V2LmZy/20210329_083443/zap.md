
# ZAP Scanning Report

Generated on Mon, 29 Mar 2021 08:13:41


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 9 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Sub Resource Integrity Attribute Missing | Medium | 10 | 
| Absence of Anti-CSRF Tokens | Low | 8 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 1 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 10 | 
| Dangerous JS Functions | Low | 3 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 1 | 
| X-Content-Type-Options Header Missing | Low | 12 | 
| Base64 Disclosure | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 6 | 
| Storable and Cacheable Content | Informational | 5 | 
| Timestamp Disclosure - Unix | Informational | 2 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 2 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.js$](https://dares.travail-emploi.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css](https://dares.travail-emploi.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.jpeg](https://dares.travail-emploi.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css$](https://dares.travail-emploi.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.js](https://dares.travail-emploi.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.gif](https://dares.travail-emploi.gouv.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.png](https://dares.travail-emploi.gouv.fr/core/*.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.jpg](https://dares.travail-emploi.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
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

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/filter/tips](https://dares.travail-emploi.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://travail-emploi.gouv.fr/" class="text-right link-external" target="_blank">Accéder au site du ministère du Travail<span class="sr-only">-Nouvelle-fenêtre</span></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://travail-emploi.gouv.fr/" class="text-right link-external" target="_blank">Accéder au site du ministère du Travail<span class="sr-only">-Nouvelle-fenêtre</span></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.svg](https://dares.travail-emploi.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://travail-emploi.gouv.fr/" class="text-right link-external" target="_blank">Accéder au site du ministère du Travail<span class="sr-only">-Nouvelle-fenêtre</span></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.css$](https://dares.travail-emploi.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://travail-emploi.gouv.fr/" class="text-right link-external" target="_blank">Accéder au site du ministère du Travail<span class="sr-only">-Nouvelle-fenêtre</span></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/admin/](https://dares.travail-emploi.gouv.fr/admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://travail-emploi.gouv.fr/" class="text-right link-external" target="_blank">Accéder au site du ministère du Travail<span class="sr-only">-Nouvelle-fenêtre</span></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.js$](https://dares.travail-emploi.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://travail-emploi.gouv.fr/" class="text-right link-external" target="_blank">Accéder au site du ministère du Travail<span class="sr-only">-Nouvelle-fenêtre</span></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css$](https://dares.travail-emploi.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://travail-emploi.gouv.fr/" class="text-right link-external" target="_blank">Accéder au site du ministère du Travail<span class="sr-only">-Nouvelle-fenêtre</span></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://travail-emploi.gouv.fr/" class="text-right link-external" target="_blank">Accéder au site du ministère du Travail<span class="sr-only">-Nouvelle-fenêtre</span></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.js$](https://dares.travail-emploi.gouv.fr/profiles/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://travail-emploi.gouv.fr/" class="text-right link-external" target="_blank">Accéder au site du ministère du Travail<span class="sr-only">-Nouvelle-fenêtre</span></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.svg](https://dares.travail-emploi.gouv.fr/profiles/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://travail-emploi.gouv.fr/" class="text-right link-external" target="_blank">Accéder au site du ministère du Travail<span class="sr-only">-Nouvelle-fenêtre</span></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://travail-emploi.gouv.fr/" class="text-right link-external" target="_blank">Accéder au site du ministère du Travail<span class="sr-only">-Nouvelle-fenêtre</span></a>`
  
  
  
  
Instances: 11
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script id="infogram_0_9f247f0a-ba4c-4038-9d37-b25fd9c66084" title="Zoom sur : Acemo flash février 2021" src="https://e.infogram.com/js/dist/embed.js?nh2" type="text/javascript"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.js$](https://dares.travail-emploi.gouv.fr/profiles/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.svg](https://dares.travail-emploi.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css$](https://dares.travail-emploi.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.css$](https://dares.travail-emploi.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script id="infogram_0_9f247f0a-ba4c-4038-9d37-b25fd9c66084" title="Zoom sur : Acemo flash février 2021" src="https://e.infogram.com/js/dist/embed.js?nh2" type="text/javascript"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.js$](https://dares.travail-emploi.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
Instances: 10
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche" method="get" id="views-exposed-form-dares-search-module-global-search-block" accept-charset="UTF-8" role="search">`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche" method="get" id="views-exposed-form-dares-search-module-global-search-block" accept-charset="UTF-8" role="search">`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/" method="post" id="dares-homepage-newsletter-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche" method="get" id="views-exposed-form-dares-search-module-global-search-block" accept-charset="UTF-8" role="search">`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche" method="get" id="views-exposed-form-dares-search-module-global-search-block" accept-charset="UTF-8" role="search">`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/" method="post" id="dares-homepage-newsletter-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche" method="get" id="views-exposed-form-dares-search-module-global-search-block" accept-charset="UTF-8" role="search">`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche" method="get" id="views-exposed-form-dares-search-module-global-search-block" accept-charset="UTF-8" role="search">`
  
  
  
  
Instances: 8
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 2: "edit-search-api-fulltext" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Big Redirect Detected (Potential Sensitive Information Leak)
##### Low (Medium)
  
  
  
  
#### Description
<p>The server has responded with a redirect that seems to provide a large response. This may indicate that although the server sent a redirect it also responded with body content (which may include sensitive details, PII, etc.).</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `POST`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 108 [https://dares.travail-emploi.gouv.fr/abonnement-newsletter?newsletter_subscriber_email=foo-bar%40example.com].</p><p>Predicted response size: 408.</p><p>Response Body Length: 679.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dares-site-v2.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dares-site-v2.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/robots.txt](https://dares.travail-emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dares-site-v2.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dares-site-v2.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dares-site-v2.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dares-site-v2.cegedim.cloud-HTTP`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cross-Domain JavaScript Source File Inclusion
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes one or more script files from a third-party domain.</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.js$](https://dares.travail-emploi.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/615552/smarttag.js`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/615552/smarttag.js`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.js$](https://dares.travail-emploi.gouv.fr/profiles/*.js$)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/615552/smarttag.js`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/615552/smarttag.js`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.svg](https://dares.travail-emploi.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/615552/smarttag.js`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://e.infogram.com/js/dist/embed.js?nh2`
  
  
  * Evidence: `<script id="infogram_0_9f247f0a-ba4c-4038-9d37-b25fd9c66084" title="Zoom sur : Acemo flash février 2021" src="https://e.infogram.com/js/dist/embed.js?nh2" type="text/javascript"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://e.infogram.com/js/dist/embed.js?nh2`
  
  
  * Evidence: `<script id="infogram_0_9f247f0a-ba4c-4038-9d37-b25fd9c66084" title="Zoom sur : Acemo flash février 2021" src="https://e.infogram.com/js/dist/embed.js?nh2" type="text/javascript"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/615552/smarttag.js`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css$](https://dares.travail-emploi.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/615552/smarttag.js`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.css$](https://dares.travail-emploi.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/615552/smarttag.js`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
Instances: 10
  
### Solution
<p>Ensure JavaScript source files are loaded from only trusted sources, and the sources can't be controlled by end users of the application.</p>
  
### Reference
* 

  
#### CWE Id : 829
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sites/default/files/js/js_UjLqboMLs9X4YspuzBNGeDwOH7pdzMlU5F0dsmLNKRo.js](https://dares.travail-emploi.gouv.fr/sites/default/files/js/js_UjLqboMLs9X4YspuzBNGeDwOH7pdzMlU5F0dsmLNKRo.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sites/default/files/js/js_WuTKtE4PrcGTvllQJSYD03ZKR1gdsuGUFp6mxJRuxhQ.js](https://dares.travail-emploi.gouv.fr/sites/default/files/js/js_WuTKtE4PrcGTvllQJSYD03ZKR1gdsuGUFp6mxJRuxhQ.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sites/default/files/js/js_urnE2jg2-RKnQrIH_ssO_sn6Mp4_t20aW_jGTyMJS-I.js](https://dares.travail-emploi.gouv.fr/sites/default/files/js/js_urnE2jg2-RKnQrIH_ssO_sn6Mp4_t20aW_jGTyMJS-I.js)
  
  
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
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.gif](https://dares.travail-emploi.gouv.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.js](https://dares.travail-emploi.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css$](https://dares.travail-emploi.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.jpeg](https://dares.travail-emploi.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.jpg](https://dares.travail-emploi.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.js$](https://dares.travail-emploi.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css](https://dares.travail-emploi.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.png](https://dares.travail-emploi.gouv.fr/core/*.png)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/user/login/](https://dares.travail-emploi.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/index.php/user/password/](https://dares.travail-emploi.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/user/password/](https://dares.travail-emploi.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/filter/tips](https://dares.travail-emploi.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/index.php/filter/tips](https://dares.travail-emploi.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/index.php/](https://dares.travail-emploi.gouv.fr/index.php/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/index.php/user/login/](https://dares.travail-emploi.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=21600, public`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/README.txt](https://dares.travail-emploi.gouv.fr/README.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/robots.txt](https://dares.travail-emploi.gouv.fr/robots.txt)
  
  
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
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/web.config](https://dares.travail-emploi.gouv.fr/web.config)
  
  
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

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sites/default/files/js/js_VtafjXmRvoUgAzqzYTA3Wrjkx9wcWhjP0G4ZnnqRamA.js](https://dares.travail-emploi.gouv.fr/sites/default/files/js/js_VtafjXmRvoUgAzqzYTA3Wrjkx9wcWhjP0G4ZnnqRamA.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sites/default/files/css/css_HWZgEeDskjP5eZtPwBIHWTxtvZVsVGUKJGJzfI4fu3U.css](https://dares.travail-emploi.gouv.fr/sites/default/files/css/css_HWZgEeDskjP5eZtPwBIHWTxtvZVsVGUKJGJzfI4fu3U.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sites/default/files/js/js_UjLqboMLs9X4YspuzBNGeDwOH7pdzMlU5F0dsmLNKRo.js](https://dares.travail-emploi.gouv.fr/sites/default/files/js/js_UjLqboMLs9X4YspuzBNGeDwOH7pdzMlU5F0dsmLNKRo.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sites/default/files/css/css_7jw5TmCLPyoKGgzu3onOcvzzwA4RRQV5WkvzDYqJePU.css](https://dares.travail-emploi.gouv.fr/sites/default/files/css/css_7jw5TmCLPyoKGgzu3onOcvzzwA4RRQV5WkvzDYqJePU.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sites/default/files/2020-11/Vectordonnees.svg](https://dares.travail-emploi.gouv.fr/sites/default/files/2020-11/Vectordonnees.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/themes/custom/dares_theme/images/DARES_FAVICON-16x16.ico](https://dares.travail-emploi.gouv.fr/themes/custom/dares_theme/images/DARES_FAVICON-16x16.ico)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sites/default/files/css/css_Y4H_4BqmgyCtG7E7YdseTs2qvy9C34c51kBamDdgark.css](https://dares.travail-emploi.gouv.fr/sites/default/files/css/css_Y4H_4BqmgyCtG7E7YdseTs2qvy9C34c51kBamDdgark.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/modules/custom/dares_core/images/Logo_DARES.png](https://dares.travail-emploi.gouv.fr/modules/custom/dares_core/images/Logo_DARES.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sites/default/files/2020-11/Vector_publication_0.svg](https://dares.travail-emploi.gouv.fr/sites/default/files/2020-11/Vector_publication_0.svg)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/robots.txt](https://dares.travail-emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sites/default/files/css/css_XTkC6oplZ7Eewk_0x8qvH-hhWdvYSTHfksTfR_xhZZU.css](https://dares.travail-emploi.gouv.fr/sites/default/files/css/css_XTkC6oplZ7Eewk_0x8qvH-hhWdvYSTHfksTfR_xhZZU.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/README.txt](https://dares.travail-emploi.gouv.fr/README.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.js$](https://dares.travail-emploi.gouv.fr/profiles/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_iKjzhJzexxc_pdk2ViaDA5NUf0AcShlNvwwSfB49fGM`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_iKjzhJzexxc_pdk2ViaDA5NUf0AcShlNvwwSfB49fGM`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css$](https://dares.travail-emploi.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_iKjzhJzexxc_pdk2ViaDA5NUf0AcShlNvwwSfB49fGM`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/robots.txt](https://dares.travail-emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `sE9cLqzDqOZ6frIqJlLL3fNyljz02Sjtug5de1rj6a/iLyO0zawYdGAN1gPz3zruTfzFZrO+WBNjkIMZ+hcquLrkHmO0`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.css$](https://dares.travail-emploi.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_iKjzhJzexxc_pdk2ViaDA5NUf0AcShlNvwwSfB49fGM`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.svg](https://dares.travail-emploi.gouv.fr/profiles/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_iKjzhJzexxc_pdk2ViaDA5NUf0AcShlNvwwSfB49fGM`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/admin/](https://dares.travail-emploi.gouv.fr/admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_iKjzhJzexxc_pdk2ViaDA5NUf0AcShlNvwwSfB49fGM`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.js$](https://dares.travail-emploi.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_iKjzhJzexxc_pdk2ViaDA5NUf0AcShlNvwwSfB49fGM`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_7jw5TmCLPyoKGgzu3onOcvzzwA4RRQV5WkvzDYqJePU`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `msM9QvQ4QsgYT0YqJlLL3fNyljz02YUM0Fcvgq1EL3CqFPv3GXe+Bsw3jd4ZlH3acRiSzHnLR3uklxFvPRrjOGoc2EMA`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `rcGoLbXDD0qKpNUqJlLL3fNyljz02WG+tb9BRd+ePtjOEsvVxiJCt5ogWSKhbgkuxBYsYLeepX5ofNcq+CkKKzgnkQYq`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.svg](https://dares.travail-emploi.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_iKjzhJzexxc_pdk2ViaDA5NUf0AcShlNvwwSfB49fGM`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�ȭz��y����ߊW���,��,�"��\x0012s{\x001c\��d�X�\x000c\x000eMQ�\x0000q(e6�0I�x��</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.css$](https://dares.travail-emploi.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.svg](https://dares.travail-emploi.gouv.fr/profiles/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.js$](https://dares.travail-emploi.gouv.fr/profiles/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.svg](https://dares.travail-emploi.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/filter/tips](https://dares.travail-emploi.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css$](https://dares.travail-emploi.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/admin/](https://dares.travail-emploi.gouv.fr/admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.js$](https://dares.travail-emploi.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected in the element starting with: "<script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/","scriptPath":null,"pathPrefi", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.svg](https://dares.travail-emploi.gouv.fr/profiles/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/admin/](https://dares.travail-emploi.gouv.fr/admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.css$](https://dares.travail-emploi.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.js$](https://dares.travail-emploi.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css$](https://dares.travail-emploi.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/filter/tips](https://dares.travail-emploi.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.js$](https://dares.travail-emploi.gouv.fr/profiles/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.svg](https://dares.travail-emploi.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.gif](https://dares.travail-emploi.gouv.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css](https://dares.travail-emploi.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.jpg](https://dares.travail-emploi.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.js](https://dares.travail-emploi.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.png](https://dares.travail-emploi.gouv.fr/core/*.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.jpeg](https://dares.travail-emploi.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/robots.txt](https://dares.travail-emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=21600`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css$](https://dares.travail-emploi.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=21600`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=21600`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=21600`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `383780755`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `383780755`
  
  
  
  
Instances: 2
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>383780755, which evaluates to: 1982-02-28 21:45:55</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/recherche?search_api_fulltext=ZAP](https://dares.travail-emploi.gouv.fr/recherche?search_api_fulltext=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `search_api_fulltext`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/erreur-404?search_api_fulltext=ZAP](https://dares.travail-emploi.gouv.fr/erreur-404?search_api_fulltext=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `search_api_fulltext`
  
  
  
  
Instances: 2
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://dares.travail-emploi.gouv.fr/recherche?search_api_fulltext=ZAP</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [value] attribute </p><p></p><p>The user input found was:</p><p>search_api_fulltext=ZAP</p><p></p><p>The user-controlled value was:</p><p>zap</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
