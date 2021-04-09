
# ZAP Scanning Report

Generated on Fri, 9 Apr 2021 13:57:12


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 2 |
| Medium | 4 |
| Low | 10 |
| Informational | 6 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 3 | 
| CSP: Wildcard Directive | Medium | 5 | 
| Reverse Tabnabbing | Medium | 11 | 
| Source Code Disclosure - Perl | Medium | 2 | 
| Vulnerable JS Library | Medium | 1 | 
| Cookie No HttpOnly Flag | Low | 3 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cookie Without Secure Flag | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 11 | 
| CSP: Notices | Low | 5 | 
| Dangerous JS Functions | Low | 2 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 11 | 
| Base64 Disclosure | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 4 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 10 | 
| Storable and Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 42 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/document/bb2fb6df-9e0c-4b73-bafc-9df54fb8ce36/Interne/ListeDesProduits](https://rappel.conso.gouv.fr/document/bb2fb6df-9e0c-4b73-bafc-9df54fb8ce36/Interne/ListeDesProduits)
  
  
  * Method: `GET`
  
  
  * Evidence: `500106123556`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/fiche-rappel/435/Rapex](https://rappel.conso.gouv.fr/fiche-rappel/435/Rapex)
  
  
  * Method: `GET`
  
  
  * Evidence: `4260432844047`
  
  
  
  
Instances: 2
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 500106</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### PII Disclosure
##### High (Medium)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/affichettePDF/84/Interne](https://rappel.conso.gouv.fr/affichettePDF/84/Interne)
  
  
  * Method: `GET`
  
  
  * Evidence: `2477410848544996`
  
  
  
  
Instances: 1
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Mastercard</p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>script-src, script-src-elem, script-src-attr, style-src, style-src-elem, style-src-attr, img-src, connect-src, frame-src, font-src, media-src, object-src, manifest-src, worker-src, prefetch-src, form-action</p><p></p><p>The directive(s): form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Other information
<p>The response contained multiple CSP headers, these were merged (intersected) into a single policy for evaluation:</p><p>upgrade-insecure-requests; frame-ancestors 'none'</p><p>Note: The highlighting and evidence for this alert may be inaccurate due to these multiple headers.</p>
  
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

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/79](https://rappel.conso.gouv.fr/categorie/79)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link" target="_blank" href="https://pro.rappel.conso.gouv.fr">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/account_key.svg" alt=""> -->
                                            <svg class="icon-account_key" aria-hidden="true"><use xlink:href="#account_key"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accès Pro</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link" target="_blank" href="https://pro.rappel.conso.gouv.fr">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/account_key.svg" alt=""> -->
                                            <svg class="icon-account_key" aria-hidden="true"><use xlink:href="#account_key"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accès Pro</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/45](https://rappel.conso.gouv.fr/categorie/45)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link" target="_blank" href="https://pro.rappel.conso.gouv.fr">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/account_key.svg" alt=""> -->
                                            <svg class="icon-account_key" aria-hidden="true"><use xlink:href="#account_key"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accès Pro</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/61](https://rappel.conso.gouv.fr/categorie/61)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link" target="_blank" href="https://pro.rappel.conso.gouv.fr">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/account_key.svg" alt=""> -->
                                            <svg class="icon-account_key" aria-hidden="true"><use xlink:href="#account_key"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accès Pro</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link" target="_blank" href="https://pro.rappel.conso.gouv.fr">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/account_key.svg" alt=""> -->
                                            <svg class="icon-account_key" aria-hidden="true"><use xlink:href="#account_key"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accès Pro</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link" target="_blank" href="https://pro.rappel.conso.gouv.fr">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/account_key.svg" alt=""> -->
                                            <svg class="icon-account_key" aria-hidden="true"><use xlink:href="#account_key"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accès Pro</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link" target="_blank" href="https://pro.rappel.conso.gouv.fr">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/account_key.svg" alt=""> -->
                                            <svg class="icon-account_key" aria-hidden="true"><use xlink:href="#account_key"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accès Pro</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link" target="_blank" href="https://pro.rappel.conso.gouv.fr">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/account_key.svg" alt=""> -->
                                            <svg class="icon-account_key" aria-hidden="true"><use xlink:href="#account_key"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accès Pro</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/40](https://rappel.conso.gouv.fr/categorie/40)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link" target="_blank" href="https://pro.rappel.conso.gouv.fr">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/account_key.svg" alt=""> -->
                                            <svg class="icon-account_key" aria-hidden="true"><use xlink:href="#account_key"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accès Pro</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/64](https://rappel.conso.gouv.fr/categorie/64)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link" target="_blank" href="https://pro.rappel.conso.gouv.fr">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/account_key.svg" alt=""> -->
                                            <svg class="icon-account_key" aria-hidden="true"><use xlink:href="#account_key"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accès Pro</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/80](https://rappel.conso.gouv.fr/categorie/80)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link" target="_blank" href="https://pro.rappel.conso.gouv.fr">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/account_key.svg" alt=""> -->
                                            <svg class="icon-account_key" aria-hidden="true"><use xlink:href="#account_key"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accès Pro</span>
                                    </a>`
  
  
  
  
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
  
  
  
* URL: [https://rappel.conso.gouv.fr/document/d0153882-ea6a-42e3-9f7e-8ae9833e4d40/Interne/ListeDesProduits](https://rappel.conso.gouv.fr/document/d0153882-ea6a-42e3-9f7e-8ae9833e4d40/Interne/ListeDesProduits)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#4E2I0uT2Y`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/affichettePDF/673/Rapex](https://rappel.conso.gouv.fr/affichettePDF/673/Rapex)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#fgxZ`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#4E2I0uT2Y</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 3.4.1 is vulnerable.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/js/jquery.min.js](https://rappel.conso.gouv.fr/assets/js/jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `/*! jQuery v3.4.1`
  
  
  
  
Instances: 1
  
### Solution
<p>Please upgrade to the latest version of jquery.</p>
  
### Other information
<p>CVE-2020-11023</p><p>CVE-2020-11022</p><p></p>
  
### Reference
* https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BWROUTEID`
  
  
  * Evidence: `Set-Cookie: BWROUTEID`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BWROUTEID`
  
  
  * Evidence: `Set-Cookie: BWROUTEID`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BWROUTEID`
  
  
  * Evidence: `Set-Cookie: BWROUTEID`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BWROUTEID`
  
  
  * Evidence: `Set-Cookie: BWROUTEID`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BWROUTEID`
  
  
  * Evidence: `Set-Cookie: BWROUTEID`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BWROUTEID`
  
  
  * Evidence: `Set-Cookie: BWROUTEID`
  
  
  
  
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
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `.AspNetCore.Antiforgery.O33mliWV2hE`
  
  
  * Evidence: `Set-Cookie: .AspNetCore.Antiforgery.O33mliWV2hE`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `.AspNetCore.Antiforgery.O33mliWV2hE`
  
  
  * Evidence: `Set-Cookie: .AspNetCore.Antiforgery.O33mliWV2hE`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `.AspNetCore.Antiforgery.O33mliWV2hE`
  
  
  * Evidence: `Set-Cookie: .AspNetCore.Antiforgery.O33mliWV2hE`
  
  
  
  
Instances: 3
  
### Solution
<p>Whenever a cookie contains sensitive information or is a session token, then it should always be passed using an encrypted channel. Ensure that the secure flag is set for cookies containing such sensitive information.</p>
  
### Reference
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html

  
#### CWE Id : 614
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cross-Domain JavaScript Source File Inclusion
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes one or more script files from a third-party domain.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/79](https://rappel.conso.gouv.fr/categorie/79)
  
  
  * Method: `GET`
  
  
  * Parameter: `//tag.aticdn.net/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="//tag.aticdn.net/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/61](https://rappel.conso.gouv.fr/categorie/61)
  
  
  * Method: `GET`
  
  
  * Parameter: `//tag.aticdn.net/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="//tag.aticdn.net/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `//tag.aticdn.net/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="//tag.aticdn.net/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/45](https://rappel.conso.gouv.fr/categorie/45)
  
  
  * Method: `GET`
  
  
  * Parameter: `//tag.aticdn.net/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="//tag.aticdn.net/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `//tag.aticdn.net/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="//tag.aticdn.net/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Parameter: `//tag.aticdn.net/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="//tag.aticdn.net/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/40](https://rappel.conso.gouv.fr/categorie/40)
  
  
  * Method: `GET`
  
  
  * Parameter: `//tag.aticdn.net/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="//tag.aticdn.net/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `//tag.aticdn.net/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="//tag.aticdn.net/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/80](https://rappel.conso.gouv.fr/categorie/80)
  
  
  * Method: `GET`
  
  
  * Parameter: `//tag.aticdn.net/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="//tag.aticdn.net/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `//tag.aticdn.net/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="//tag.aticdn.net/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/64](https://rappel.conso.gouv.fr/categorie/64)
  
  
  * Method: `GET`
  
  
  * Parameter: `//tag.aticdn.net/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="//tag.aticdn.net/smarttag.js"></script>`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure JavaScript source files are loaded from only trusted sources, and the sources can't be controlled by end users of the application.</p>
  
### Reference
* 

  
#### CWE Id : 829
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### CSP: Notices
##### Low (Medium)
  
  
  
  
#### Description
<p>Warnings:</p><p>1:1: The upgrade-insecure-requests directive is an experimental directive that will be likely added to the CSP specification.</p><p></p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Other information
<p>The response contained multiple CSP headers, these were merged (intersected) into a single policy for evaluation:</p><p>upgrade-insecure-requests; frame-ancestors 'none'</p><p>Note: The highlighting and evidence for this alert may be inaccurate due to these multiple headers.</p>
  
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

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/js/jquery.min.js](https://rappel.conso.gouv.fr/assets/js/jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/js/bootstrap.bundle.min.js](https://rappel.conso.gouv.fr/assets/js/bootstrap.bundle.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/45](https://rappel.conso.gouv.fr/categorie/45)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/61](https://rappel.conso.gouv.fr/categorie/61)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/40](https://rappel.conso.gouv.fr/categorie/40)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/64](https://rappel.conso.gouv.fr/categorie/64)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/80](https://rappel.conso.gouv.fr/categorie/80)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/79](https://rappel.conso.gouv.fr/categorie/79)
  
  
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
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/40](https://rappel.conso.gouv.fr/categorie/40)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/64](https://rappel.conso.gouv.fr/categorie/64)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/80](https://rappel.conso.gouv.fr/categorie/80)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/94](https://rappel.conso.gouv.fr/categorie/94)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/79](https://rappel.conso.gouv.fr/categorie/79)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/61](https://rappel.conso.gouv.fr/categorie/61)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/85](https://rappel.conso.gouv.fr/categorie/85)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/45](https://rappel.conso.gouv.fr/categorie/45)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
Instances: 11
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Server Leaks Version Information via "Server" HTTP Response Header Field
##### Low (High)
  
  
  
  
#### Description
<p>The web/application server is leaking version information via the "Server" HTTP response header. Access to such information may facilitate attackers identifying other vulnerabilities your web/application server is subject to.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/64](https://rappel.conso.gouv.fr/categorie/64)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/40](https://rappel.conso.gouv.fr/categorie/40)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/79](https://rappel.conso.gouv.fr/categorie/79)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/61](https://rappel.conso.gouv.fr/categorie/61)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/45](https://rappel.conso.gouv.fr/categorie/45)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to suppress the "Server" header or provide generic details.</p>
  
### Reference
* http://httpd.apache.org/docs/current/mod/core.html#servertokens
* http://msdn.microsoft.com/en-us/library/ff648552.aspx#ht_urlscan_007
* http://blogs.msdn.com/b/varunm/archive/2013/04/23/remove-unwanted-http-response-headers.aspx
* http://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/45](https://rappel.conso.gouv.fr/categorie/45)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/61](https://rappel.conso.gouv.fr/categorie/61)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/64](https://rappel.conso.gouv.fr/categorie/64)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/40](https://rappel.conso.gouv.fr/categorie/40)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/79](https://rappel.conso.gouv.fr/categorie/79)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8I2dGE8PB-RLkRIGiqcxqVj_a7ioj3xC-YF83T7MW-DF9q3tnbBSp8W8-zjvdeDtehoZe4q65D62FWD6xeo-gPA78v8knI54MizY0PaC1EgiMfcnPfGzzPu_skiCPL3noDg7fA_n2wDaBAQar9jwgdg`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8I2dGE8PB-RLkRIGiqcxqVg8d6gcBNOtLztFV76_gpIqAWMAb8JXJgyh1-6H9HT0l9tM0hRGazuOnNF8iDnHh8EYKqvYp8e9js-Fiyebuw3Sbc114NoPjFjukGsUykNHuTdNl3HHh00gLaFmXgNlCaU`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/79](https://rappel.conso.gouv.fr/categorie/79)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8I2dGE8PB-RLkRIGiqcxqVjQkFqxy3zYknYoqoAMo2TtlCcbqQ2s0bzWpqZo-7Jm87fqnUkhIgf4bDEsq6E7YRkBQ1YpjemuMdz1JLeLal6siAy0tQ4VTHEI2HU_zdgfVDVVbIJFS0jHGPsXXp9_6Qw`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8I2dGE8PB-RLkRIGiqcxqVg9i71lnIBBCqRKWmgn5AvRgsK8L_ZXmqD-OyAmy2aKeqFzhIqWYxEhr0msLhoeODM4qcrFjF0ZpZN-h3B1xrthBLZJ4piZ-Zh584E9syoglzT4mNM6w12SLEGqVtWN58s`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/61](https://rappel.conso.gouv.fr/categorie/61)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8I2dGE8PB-RLkRIGiqcxqVhv1pjXxAzIdpQAGdqQLcVQBGySGn_oHWix_9VRHY96sh7Kw4imgdXRL-r1Q-4icB1U3elrfjN2GyIvrOHCTIEGem4YvvucZ93uNS7CjEZgmE33Mkwqxd58sO1YaLHMwpk`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8I2dGE8PB-RLkRIGiqcxqVijLLowDGjbIIMBUKtUnoWcPmy0GzovKKmtUq0QLEQ-j41ENdqJ5_gDo9F3W398ciQXfbTBg8ZompBkfdQRtoX1B7HbrTVs7e1ysXnssC_4NTmICJ37zfJ4rqJI-v_qvjY`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8I2dGE8PB-RLkRIGiqcxqVjb5vDkeah_OYTp_5wMNqIMVCcao-3c3bSRkchddqHBdqFtI25K8ISnWZrtXT4EgdhveYI5yBYYLr-YJQhiKy-QPKzlIMKwCyJbhNvC-MXRbNq16f2z8z5WBX0ruLNtCpQ`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8I2dGE8PB-RLkRIGiqcxqVgpxuGz-lUM13bkZylyyqQsSa_mNrd1LjjK54oNoOyTa0IWjZ7lWuiLx14SA2kOptsLQVE4wI-DPwL48ireKXmtgE5o6ZjhIAVPba6MG_jMt2_m4uT6_N2FswTqPs65r64`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/64](https://rappel.conso.gouv.fr/categorie/64)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8I2dGE8PB-RLkRIGiqcxqVjHX01hC7sKRj_4__-t0A35j_-Qq44t4BkDncqk8yZwXO9QLKSJA52CKDB4bPwcXWQnlPzyv1iaRCceju45XFOy81LMcsKbXiKlEbvXugvmAD625YMPW2j-53XIGciKMbw`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/40](https://rappel.conso.gouv.fr/categorie/40)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8I2dGE8PB-RLkRIGiqcxqVhi_eUOMxMfPZJ9Cs82ChexLDEzFrrVUvY3NcbAL83N8uxa106hg2E4ZJvraPzAtsgmzsVCWU30JY04zOvftH9h55gP10y4IwWQh8tpSYphK_zHCUIU3rXkVgw-qlTGOAc`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/45](https://rappel.conso.gouv.fr/categorie/45)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8I2dGE8PB-RLkRIGiqcxqVgXCkXfKh5RJlw6zfxs9fACvZm5nO14xiZs-ppXhGYKCvXJxbvtJwSzE9zs1G2QNIKF7ShTHrcrRFoIobDVfDbrlpvk5eLbfjgI3JJC51rV_xkrDo8UzSCjW0rSj9qu5iM`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `1/space/G/eacute/n/r/a/l/i/t/s/Q/u/quoteright/e/hyphen/c`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>	�����\x0018O\x000f\x0007�K�\x0012\x0006��1�X�k���|B��|�>�[����흰R�ż�8�u��z\x001a\x0019{���>�\x0015`���>��;��$��x2,�����H"1�'=�����H�<��8;|\x000f��\x0000�\x0004\x0004\x001a�����</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/js/bootstrap.bundle.min.js](https://rappel.conso.gouv.fr/assets/js/bootstrap.bundle.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/js/widget-a11y.js](https://rappel.conso.gouv.fr/assets/js/widget-a11y.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/js/jquery.min.js](https://rappel.conso.gouv.fr/assets/js/jquery.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/js/smoothscroll.js](https://rappel.conso.gouv.fr/assets/js/smoothscroll.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
Instances: 4
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bFROM\b and was detected 2 times, the first in the element starting with: "        from: i,", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/64](https://rappel.conso.gouv.fr/categorie/64)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link dropdown-toggle"
                                       href="#" id="navbarDropdown"
                                       role="button"
                                       tabindex="0"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/accessibilite.svg" alt=""> -->
                                            <svg class="icon-accessibilite" aria-hidden="true"><use xlink:href="#accessibilite"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accessibilité</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/40](https://rappel.conso.gouv.fr/categorie/40)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link dropdown-toggle"
                                       href="#" id="navbarDropdown"
                                       role="button"
                                       tabindex="0"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/accessibilite.svg" alt=""> -->
                                            <svg class="icon-accessibilite" aria-hidden="true"><use xlink:href="#accessibilite"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accessibilité</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/80](https://rappel.conso.gouv.fr/categorie/80)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link dropdown-toggle"
                                       href="#" id="navbarDropdown"
                                       role="button"
                                       tabindex="0"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/accessibilite.svg" alt=""> -->
                                            <svg class="icon-accessibilite" aria-hidden="true"><use xlink:href="#accessibilite"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accessibilité</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link dropdown-toggle"
                                       href="#" id="navbarDropdown"
                                       role="button"
                                       tabindex="0"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/accessibilite.svg" alt=""> -->
                                            <svg class="icon-accessibilite" aria-hidden="true"><use xlink:href="#accessibilite"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accessibilité</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link dropdown-toggle"
                                       href="#" id="navbarDropdown"
                                       role="button"
                                       tabindex="0"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/accessibilite.svg" alt=""> -->
                                            <svg class="icon-accessibilite" aria-hidden="true"><use xlink:href="#accessibilite"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accessibilité</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link dropdown-toggle"
                                       href="#" id="navbarDropdown"
                                       role="button"
                                       tabindex="0"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/accessibilite.svg" alt=""> -->
                                            <svg class="icon-accessibilite" aria-hidden="true"><use xlink:href="#accessibilite"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accessibilité</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link dropdown-toggle"
                                       href="#" id="navbarDropdown"
                                       role="button"
                                       tabindex="0"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/accessibilite.svg" alt=""> -->
                                            <svg class="icon-accessibilite" aria-hidden="true"><use xlink:href="#accessibilite"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accessibilité</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/61](https://rappel.conso.gouv.fr/categorie/61)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link dropdown-toggle"
                                       href="#" id="navbarDropdown"
                                       role="button"
                                       tabindex="0"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/accessibilite.svg" alt=""> -->
                                            <svg class="icon-accessibilite" aria-hidden="true"><use xlink:href="#accessibilite"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accessibilité</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link dropdown-toggle"
                                       href="#" id="navbarDropdown"
                                       role="button"
                                       tabindex="0"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/accessibilite.svg" alt=""> -->
                                            <svg class="icon-accessibilite" aria-hidden="true"><use xlink:href="#accessibilite"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accessibilité</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/45](https://rappel.conso.gouv.fr/categorie/45)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link dropdown-toggle"
                                       href="#" id="navbarDropdown"
                                       role="button"
                                       tabindex="0"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/accessibilite.svg" alt=""> -->
                                            <svg class="icon-accessibilite" aria-hidden="true"><use xlink:href="#accessibilite"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accessibilité</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/79](https://rappel.conso.gouv.fr/categorie/79)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link dropdown-toggle"
                                       href="#" id="navbarDropdown"
                                       role="button"
                                       tabindex="0"
                                       data-toggle="dropdown"
                                       aria-haspopup="true"
                                       aria-expanded="false">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/accessibilite.svg" alt=""> -->
                                            <svg class="icon-accessibilite" aria-hidden="true"><use xlink:href="#accessibilite"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accessibilité</span>
                                    </a>`
  
  
  
  
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
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/45](https://rappel.conso.gouv.fr/categorie/45)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/61](https://rappel.conso.gouv.fr/categorie/61)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/79](https://rappel.conso.gouv.fr/categorie/79)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/64](https://rappel.conso.gouv.fr/categorie/64)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/40](https://rappel.conso.gouv.fr/categorie/40)
  
  
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
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
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
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000108821`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000013945`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000004359`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000107761`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000010234`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000125151`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000000015`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000013801`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000109256`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000118789`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000107698`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000107358`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000108213`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000108148`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000013614`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000014283`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `20210108`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000080473`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000000000`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20210108`
  
  
  
  
Instances: 42
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>0000108821, which evaluates to: 1970-01-02 06:13:41</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
