
# ZAP Scanning Report

Generated on Thu, 6 May 2021 00:58:16


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 5 |
| Low | 9 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Source Code Disclosure - Perl | Medium | 1 | 
| Sub Resource Integrity Attribute Missing | Medium | 10 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 10 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 12 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 10 | 
| Dangerous JS Functions | Low | 4 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 1 | 
| X-Content-Type-Options Header Missing | Low | 12 | 
| Base64 Disclosure | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 10 | 
| Storable and Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 3 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 5 | 

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
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/comment/reply/](https://dares.travail-emploi.gouv.fr/comment/reply/)
  
  
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

  
  
  
  
### Source Code Disclosure - Perl
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - Perl</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sites/default/files/ce4b16a6ad3469697795b8207425b570/appel_a_contributions_genre_et_informalite.pdf](https://dares.travail-emploi.gouv.fr/sites/default/files/ce4b16a6ad3469697795b8207425b570/appel_a_contributions_genre_et_informalite.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#21292`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#21292</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script id="infogram_0_ffcdb04e-6f53-4cd9-bdda-f81d7145893d" title="Zoom sur : Itv DSN" src="https://e.infogram.com/js/dist/embed.js?CK0" type="text/javascript"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.js$](https://dares.travail-emploi.gouv.fr/profiles/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.svg](https://dares.travail-emploi.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script id="infogram_0_ffcdb04e-6f53-4cd9-bdda-f81d7145893d" title="Zoom sur : Itv DSN" src="https://e.infogram.com/js/dist/embed.js?CK0" type="text/javascript"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css$](https://dares.travail-emploi.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.css$](https://dares.travail-emploi.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://tag.aticdn.net/615552/smarttag.js"></script>`
  
  
  
  
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

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 1-7-min is vulnerable.</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/assets/vendor/jquery.ui/ui/jquery-1-7-min.js?v=1.12.1](https://dares.travail-emploi.gouv.fr/core/assets/vendor/jquery.ui/ui/jquery-1-7-min.js?v=1.12.1)
  
  
  * Method: `GET`
  
  
  * Evidence: `jquery-1-7-min.js`
  
  
  
  
Instances: 1
  
### Solution
<p>Please upgrade to the latest version of jquery.</p>
  
### Other information
<p>CVE-2020-11023</p><p>CVE-2020-11022</p><p>CVE-2015-9251</p><p>CVE-2019-11358</p><p>CVE-2012-6708</p><p></p>
  
### Reference
* https://nvd.nist.gov/vuln/detail/CVE-2012-6708
* https://github.com/jquery/jquery/issues/2432
* http://research.insecurelabs.org/jquery/test/
* http://blog.jquery.com/2016/01/08/jquery-2-2-and-1-12-released/
* http://bugs.jquery.com/ticket/11290
* https://blog.jquery.com/2019/04/10/jquery-3-4-0-released/
* https://nvd.nist.gov/vuln/detail/CVE-2019-11358
* https://nvd.nist.gov/vuln/detail/CVE-2015-9251
* https://github.com/jquery/jquery/commit/753d591aea698e57d6db58c9f722cd0808619b1b
* https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche" method="get" id="views-exposed-form-dares-search-module-global-search-block" accept-charset="UTF-8" role="search">`
  
  
  
  
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
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche" method="get" id="views-exposed-form-dares-search-module-global-search-block" accept-charset="UTF-8" role="search">`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/recherche" method="get" id="views-exposed-form-dares-search-module-global-search-block" accept-charset="UTF-8" role="search">`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/node/8](https://dares.travail-emploi.gouv.fr/node/8)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `POST`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/node/2133](https://dares.travail-emploi.gouv.fr/node/2133)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/user/login/](https://dares.travail-emploi.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/index.php/filter/tips](https://dares.travail-emploi.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/user/password/](https://dares.travail-emploi.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/node/32](https://dares.travail-emploi.gouv.fr/node/32)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/index.php/user/register/](https://dares.travail-emploi.gouv.fr/index.php/user/register/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/index.php/user/login/](https://dares.travail-emploi.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/index.php/user/password/](https://dares.travail-emploi.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/index.php/](https://dares.travail-emploi.gouv.fr/index.php/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/user/register/](https://dares.travail-emploi.gouv.fr/user/register/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 47 [https://dares.travail-emploi.gouv.fr/actualites].</p><p>Predicted response size: 347.</p><p>Response Body Length: 434.</p>
  
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
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://e.infogram.com/js/dist/embed.js?CK0`
  
  
  * Evidence: `<script id="infogram_0_ffcdb04e-6f53-4cd9-bdda-f81d7145893d" title="Zoom sur : Itv DSN" src="https://e.infogram.com/js/dist/embed.js?CK0" type="text/javascript"></script>`
  
  
  
  
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
  
  
  * Parameter: `https://e.infogram.com/js/dist/embed.js?CK0`
  
  
  * Evidence: `<script id="infogram_0_ffcdb04e-6f53-4cd9-bdda-f81d7145893d" title="Zoom sur : Itv DSN" src="https://e.infogram.com/js/dist/embed.js?CK0" type="text/javascript"></script>`
  
  
  
  
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
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/libraries/bootstrap/dist/js/bootstrap.min.js?qsn5yu](https://dares.travail-emploi.gouv.fr/libraries/bootstrap/dist/js/bootstrap.min.js?qsn5yu)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/modules/contrib/tacjs/assets/vendor/tarteaucitron.js/tarteaucitron.js?v=1.4](https://dares.travail-emploi.gouv.fr/modules/contrib/tacjs/assets/vendor/tarteaucitron.js/tarteaucitron.js?v=1.4)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/assets/vendor/jquery.ui/ui/widgets/menu-min.js?v=1.12.1](https://dares.travail-emploi.gouv.fr/core/assets/vendor/jquery.ui/ui/widgets/menu-min.js?v=1.12.1)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/assets/vendor/jquery/jquery.min.js?v=3.5.1](https://dares.travail-emploi.gouv.fr/core/assets/vendor/jquery/jquery.min.js?v=3.5.1)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/qui-sommes-nous](https://dares.travail-emploi.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/emploi-chomage/emploi](https://dares.travail-emploi.gouv.fr/emploi-chomage/emploi)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/emploi-chomage/chomage-et-demandeurs-demploi](https://dares.travail-emploi.gouv.fr/emploi-chomage/chomage-et-demandeurs-demploi)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/actualites](https://dares.travail-emploi.gouv.fr/actualites)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/enquetes](https://dares.travail-emploi.gouv.fr/enquetes)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/README.txt](https://dares.travail-emploi.gouv.fr/README.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/filter/tips](https://dares.travail-emploi.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/revue-travail-et-emploi](https://dares.travail-emploi.gouv.fr/revue-travail-et-emploi)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
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
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/align.module.css?qsn5yu](https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/align.module.css?qsn5yu)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/ajax-progress.module.css?qsn5yu](https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/ajax-progress.module.css?qsn5yu)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/clearfix.module.css?qsn5yu](https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/clearfix.module.css?qsn5yu)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/details.module.css?qsn5yu](https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/details.module.css?qsn5yu)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sites/default/files/styles/image_100/public/2021-01/Dares_neutre3.png?itok=Q1NDw6V1](https://dares.travail-emploi.gouv.fr/sites/default/files/styles/image_100/public/2021-01/Dares_neutre3.png?itok=Q1NDw6V1)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/autocomplete-loading.module.css?qsn5yu](https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/autocomplete-loading.module.css?qsn5yu)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/fieldgroup.module.css?qsn5yu](https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/fieldgroup.module.css?qsn5yu)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/themes/custom/dares_theme/images/DARES_FAVICON-16x16.ico](https://dares.travail-emploi.gouv.fr/themes/custom/dares_theme/images/DARES_FAVICON-16x16.ico)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/hidden.module.css?qsn5yu](https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/hidden.module.css?qsn5yu)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/container-inline.module.css?qsn5yu](https://dares.travail-emploi.gouv.fr/core/modules/system/css/components/container-inline.module.css?qsn5yu)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/robots.txt](https://dares.travail-emploi.gouv.fr/robots.txt)
  
  
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
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.svg](https://dares.travail-emploi.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/2020-11/Vectordonnees`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/robots.txt](https://dares.travail-emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `Zk1vqxahGMgOZyAqJlLL3fNyljz02WlSgOVyL5ZaE8IQQqYQ4pPiTk9MRlYtbsu0Vg9myoCBkxV0JrkErfyKR/dXZBnO`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/sites/default/files/styles/image_100/public/2021-01/Dares_neutre3`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.js$](https://dares.travail-emploi.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/2020-11/Vectordonnees`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.js$](https://dares.travail-emploi.gouv.fr/profiles/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/2020-11/Vectordonnees`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `k57f89KArkGL5dMqJlLL3fNyljz02UZtljOQoHLc932yXo7FLIRk0ukW+A0RKjE46YRUaLR7bud0LWlHEb60a35txcnj`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/admin/](https://dares.travail-emploi.gouv.fr/admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/2020-11/Vectordonnees`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `f7yqafC7Wy17p0kqJlLL3fNyljz02d+v7aC7sGcgmNkokUlAIIU97vt/nuG7CpfGfG8rDKCDbjqIAPOTU3XSBVcclRyw`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.svg](https://dares.travail-emploi.gouv.fr/profiles/*.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/2020-11/Vectordonnees`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/profiles/*.css$](https://dares.travail-emploi.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/2020-11/Vectordonnees`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/2020-11/Vectordonnees`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css$](https://dares.travail-emploi.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/2020-11/Vectordonnees`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�ȭz��y����ߊW��m6��u�W���ݢy�z</p>
  
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
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css$](https://dares.travail-emploi.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/comment/reply/](https://dares.travail-emploi.gouv.fr/comment/reply/)
  
  
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
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/comment/reply/](https://dares.travail-emploi.gouv.fr/comment/reply/)
  
  
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
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css$](https://dares.travail-emploi.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.css](https://dares.travail-emploi.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.js$](https://dares.travail-emploi.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.jpg](https://dares.travail-emploi.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.js](https://dares.travail-emploi.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/core/*.jpeg](https://dares.travail-emploi.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
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
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/robots.txt](https://dares.travail-emploi.gouv.fr/robots.txt)
  
  
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
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/](https://dares.travail-emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1787281443`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/sitemap.xml](https://dares.travail-emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `1032982852`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr](https://dares.travail-emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1787281443`
  
  
  
  
Instances: 3
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1787281443, which evaluates to: 2026-08-21 03:04:03</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/enquetes?page=1&search_api_fulltext](https://dares.travail-emploi.gouv.fr/enquetes?page=1&search_api_fulltext)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/actualites?op=Appliquer](https://dares.travail-emploi.gouv.fr/actualites?op=Appliquer)
  
  
  * Method: `GET`
  
  
  * Parameter: `op`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/recherche?search_api_fulltext=ZAP](https://dares.travail-emploi.gouv.fr/recherche?search_api_fulltext=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `search_api_fulltext`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/enquetes?search_api_fulltext=ZAP](https://dares.travail-emploi.gouv.fr/enquetes?search_api_fulltext=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `search_api_fulltext`
  
  
  
  
* URL: [https://dares.travail-emploi.gouv.fr/actualites?search_api_fulltext=ZAP](https://dares.travail-emploi.gouv.fr/actualites?search_api_fulltext=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `search_api_fulltext`
  
  
  
  
Instances: 5
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://dares.travail-emploi.gouv.fr/enquetes?page=1&search_api_fulltext</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [meta] tag [content] attribute </p><p></p><p>The user input found was:</p><p>page=1</p><p></p><p>The user-controlled value was:</p><p>width=device-width, initial-scale=1, shrink-to-fit=no</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
