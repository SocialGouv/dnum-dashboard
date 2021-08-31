
# ZAP Scanning Report

Generated on Tue, 31 Aug 2021 22:47:36


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 9 |
| Informational | 6 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| CSP: Wildcard Directive | Medium | 10 | 
| Reverse Tabnabbing | Medium | 11 | 
| Sub Resource Integrity Attribute Missing | Medium | 11 | 
| Vulnerable JS Library | Medium | 1 | 
| Cookie No HttpOnly Flag | Low | 3 | 
| Cookie without SameSite Attribute | Low | 3 | 
| Cookie Without Secure Flag | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 11 | 
| Dangerous JS Functions | Low | 1 | 
| Incomplete or No Cache-control Header Set | Low | 11 | 
| Permissions Policy Header Not Set | Low | 11 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 11 | 
| Base64 Disclosure | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 2 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 10 | 
| Storable and Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 58 | 

## Alert Detail


  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>script-src, style-src, img-src, connects-src, frame-src, font-src, media-src, object-src, manifest-src, worker-src, prefetch-src, form-action</p><p></p><p>The directive(s): form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Evidence: `frame-ancestors 'none';`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `frame-ancestors 'none';`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `frame-ancestors 'none';`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `frame-ancestors 'none';`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `frame-ancestors 'none';`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Evidence: `upgrade-insecure-requests;`
  
  
  
  
Instances: 10
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 693
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/7](https://rappel.conso.gouv.fr/categorie/7)
  
  
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
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/36](https://rappel.conso.gouv.fr/categorie/36)
  
  
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
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/25](https://rappel.conso.gouv.fr/categorie/25)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link" target="_blank" href="https://pro.rappel.conso.gouv.fr">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/account_key.svg" alt=""> -->
                                            <svg class="icon-account_key" aria-hidden="true"><use xlink:href="#account_key"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accès Pro</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/13](https://rappel.conso.gouv.fr/categorie/13)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="nav-link" target="_blank" href="https://pro.rappel.conso.gouv.fr">
                                        <span class="nav-link-illus">
                                            <!-- <img class="nav-link-img" src="./assets/img/entete/account_key.svg" alt=""> -->
                                            <svg class="icon-account_key" aria-hidden="true"><use xlink:href="#account_key"></use></svg>

                                        </span>
                                        <span class="nav-link-txt">Accès Pro</span>
                                    </a>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/2](https://rappel.conso.gouv.fr/categorie/2)
  
  
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

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/2](https://rappel.conso.gouv.fr/categorie/2)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/7](https://rappel.conso.gouv.fr/categorie/7)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/36](https://rappel.conso.gouv.fr/categorie/36)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/25](https://rappel.conso.gouv.fr/categorie/25)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/13](https://rappel.conso.gouv.fr/categorie/13)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/40](https://rappel.conso.gouv.fr/categorie/40)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
Instances: 11
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 345
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 3.4.1 is vulnerable.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/js/all.min.js](https://rappel.conso.gouv.fr/assets/js/all.min.js)
  
  
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

  
#### CWE Id : 1004
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
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
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 1275
  
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
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/7](https://rappel.conso.gouv.fr/categorie/7)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/614523/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/25](https://rappel.conso.gouv.fr/categorie/25)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/614523/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/13](https://rappel.conso.gouv.fr/categorie/13)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/614523/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/614523/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/614523/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/2](https://rappel.conso.gouv.fr/categorie/2)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/614523/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/614523/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/614523/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/36](https://rappel.conso.gouv.fr/categorie/36)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/614523/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/614523/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/40](https://rappel.conso.gouv.fr/categorie/40)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tag.aticdn.net/614523/smarttag.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://tag.aticdn.net/614523/smarttag.js"></script>`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/js/all.min.js](https://rappel.conso.gouv.fr/assets/js/all.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
Instances: 1
  
### Solution
<p>See the references for security advice on the use of these functions.</p>
  
### Reference
* https://angular.io/guide/security

  
#### CWE Id : 749
  
#### Source ID : 3

  
  
  
  
### Incomplete or No Cache-control Header Set
##### Low (Medium)
  
  
  
  
#### Description
<p>The cache-control header has not been set properly or is missing, allowing the browser and proxies to cache content.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/45](https://rappel.conso.gouv.fr/categorie/45)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/55](https://rappel.conso.gouv.fr/categorie/55)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/2](https://rappel.conso.gouv.fr/categorie/2)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/40](https://rappel.conso.gouv.fr/categorie/40)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/36](https://rappel.conso.gouv.fr/categorie/36)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/7](https://rappel.conso.gouv.fr/categorie/7)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/25](https://rappel.conso.gouv.fr/categorie/25)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/13](https://rappel.conso.gouv.fr/categorie/13)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, no-store`
  
  
  
  
Instances: 11
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Permissions Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Permissions Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Permissions Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/2](https://rappel.conso.gouv.fr/categorie/2)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/7](https://rappel.conso.gouv.fr/categorie/7)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/36](https://rappel.conso.gouv.fr/categorie/36)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/40](https://rappel.conso.gouv.fr/categorie/40)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/25](https://rappel.conso.gouv.fr/categorie/25)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/13](https://rappel.conso.gouv.fr/categorie/13)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Permissions-Policy header.</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
* https://developers.google.com/web/updates/2018/06/feature-policy
* https://scotthelme.co.uk/a-new-security-header-feature-policy/
* https://w3c.github.io/webappsec-feature-policy/
* https://www.smashingmagazine.com/2018/12/feature-policy/

  
#### CWE Id : 693
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Server Leaks Version Information via "Server" HTTP Response Header Field
##### Low (High)
  
  
  
  
#### Description
<p>The web/application server is leaking version information via the "Server" HTTP response header. Access to such information may facilitate attackers identifying other vulnerabilities your web/application server is subject to.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/36](https://rappel.conso.gouv.fr/categorie/36)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/7](https://rappel.conso.gouv.fr/categorie/7)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/13](https://rappel.conso.gouv.fr/categorie/13)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/25](https://rappel.conso.gouv.fr/categorie/25)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/2](https://rappel.conso.gouv.fr/categorie/2)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `Microsoft-IIS/10.0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
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
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/7](https://rappel.conso.gouv.fr/categorie/7)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/36](https://rappel.conso.gouv.fr/categorie/36)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/13](https://rappel.conso.gouv.fr/categorie/13)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/25](https://rappel.conso.gouv.fr/categorie/25)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/2](https://rappel.conso.gouv.fr/categorie/2)
  
  
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

  
#### CWE Id : 319
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/36](https://rappel.conso.gouv.fr/categorie/36)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8G3LpDJST_VKhz3_q8cUweg55JJmBw2HcUroKgrag5zHxRQbs8xCa-kfCz9v5riFVl_MKKy2B2c8VWHXAyFQfmru76jWwMdU3pRoxu3zMv_mUsWLFAZjsPNvCX_iV0F6DGdCYUNm5jpKxwYfa5xJKs0`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/13](https://rappel.conso.gouv.fr/categorie/13)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8G3LpDJST_VKhz3_q8cUwehqdvQN63ImAR5QoF8uyGe31IKp025Wcejp0v6pgBpE_rZPEtP0Lg1q8gcZBPxsXMCgtI7QQTgX-wDsXxCLn6D8KVDwVr0YyjKn9Fx5ht2q6BXF4DxCNFwvtRoSj7AsR74`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8G3LpDJST_VKhz3_q8cUwehW7ZtVoAAROarcrzDF254FqLIz1Rhu63dkKXcgBPvXmYrxA1fx48i9OHgobQ5W9zH2cPPIuRtHlon-dYW6kTHFfKb8mMVY6EhY_o1ztH7r6MYgFrLMYZlt7pFdVHlBXwk`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/2](https://rappel.conso.gouv.fr/categorie/2)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8G3LpDJST_VKhz3_q8cUwegOwap1pT3sFPs857fsHwnlcPLd4QSpRWjSiepebsRPIxAmPOAg3yhk5-fvXmgV7UFVQkJFc261ccC2vyKgM1U7zGXPrQO2JrIsuUMX5c_2yAv4T42gnKRAP9f_5MZUs4U`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8G3LpDJST_VKhz3_q8cUwehXCyzRWLBSue30SdbUXn9cxADwdkbV_K3cEd0Vi3QRjQe-mPiEDClbGwjEGTz9ikcq8VQ2mXk-fsJ3ncLAN-eoEcJVWKTvuWkRw_OxK8lC6wyArnXzLWc1Pu7N7KolXbY`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8G3LpDJST_VKhz3_q8cUweiWo2mTgaTJhtLWnqEZkModQzp-WSm9j2obO8ouunJTrAgFIiN5masyAa5L0_rBrY_mjmzykOeOA9z2sRgAkJz7g6_aHcwk1uI65exiB_e58EsMHE2RnedOMyqM5x_MJhw`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/25](https://rappel.conso.gouv.fr/categorie/25)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8G3LpDJST_VKhz3_q8cUwegj-niqNZGdBaR7abOh_j95K09eUPKTVHlm2LfsUfHu45PaBVW2Q8o78h9v0IbtUR-O4Dka0Kxa3y2z2EZqCzBT88HcuX8x8M_7ERCCnpfwYZrtFfRhwcD5sLU1ii_S52U`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8G3LpDJST_VKhz3_q8cUweg61_qX-Ms5nhHYkT6qQ_wDrr-mAN-9kA_twhOVCkrrwhYQlQpDg-z_oagCb-DNZ62YbUcD5tYDh615e8xbx5yuRt8_UEHYBSYC28iVKa79Qd3PpCFRacfIx_c86tvsFbQ`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `/Type/Font/Subtype/Type1/BaseFont/CAAAAA+MarianneRegular`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/7](https://rappel.conso.gouv.fr/categorie/7)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8G3LpDJST_VKhz3_q8cUwegE0H5rNQr3eYnrMsCjMlNSu2xwpri94JcHbQm80b7RXIALlpEKExi1q1h4mbD-id5Oj5ak-pa2oobOoIJlhbu3Jq-QrAt79ETj4nMVBHgnV1p4O28sWMR9cl4__ziFXEw`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8G3LpDJST_VKhz3_q8cUweh8fn38BSl-DEE_PYjYaj-y9-jvR9bYf-PlfF3KpPCWbxJOMbU11qD6zvSzmv6A3aW1sG_hTltBEi8LsHibZ71SCTigea3YSy8tXG1xh2koikmP2D4U5pL2HNrorY1Qp2A`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
  * Method: `GET`
  
  
  * Evidence: `CfDJ8G3LpDJST_VKhz3_q8cUwehIhK2RFuE6ovV3jG7mrjw6pTk2vknVU2gFm-Rf3wQsl9TUGhiaYaCZgzbNH6I7MQm3A5LIICAu-LzwbjN9dyYmELxllEnxpaZY-75CnraNPR02hQChA0aap2bCShV_sYM`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>	���mˤ2RO�J�=���\x0014��9�f\x0007
�qJ�*</p><p>ڃ���\x0014\x001b��Bk�\x001f\x000b?o清V_�(��\x0007g<Ua�\x0003!P~j�����Tޔh���2��Rŋ\x0014\x0006c��o	�WAz\x000cgBaCf�:J�\x0006\x001fk�I*�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/js/all.min.js](https://rappel.conso.gouv.fr/assets/js/all.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/js/all.min.js](https://rappel.conso.gouv.fr/assets/js/all.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
Instances: 2
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bFROM\b and was detected in the element starting with: "!function(n,t){"object"==(typeof exports=="undefined"?"undefined":_typeof(exports))&&"undefined"!=typeof module?t(exports,requir", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/13](https://rappel.conso.gouv.fr/categorie/13)
  
  
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
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/25](https://rappel.conso.gouv.fr/categorie/25)
  
  
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
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/7](https://rappel.conso.gouv.fr/categorie/7)
  
  
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
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/36](https://rappel.conso.gouv.fr/categorie/36)
  
  
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
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/2](https://rappel.conso.gouv.fr/categorie/2)
  
  
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
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/7](https://rappel.conso.gouv.fr/categorie/7)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/2](https://rappel.conso.gouv.fr/categorie/2)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/robots.txt](https://rappel.conso.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/](https://rappel.conso.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/25](https://rappel.conso.gouv.fr/categorie/25)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/13](https://rappel.conso.gouv.fr/categorie/13)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/categorie/36](https://rappel.conso.gouv.fr/categorie/36)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/sitemap.xml](https://rappel.conso.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/refresh](https://rappel.conso.gouv.fr/refresh)
  
  
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
  
  
  * Evidence: `0000043039`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000051899`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000077467`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000093385`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000102681`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000082757`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000103941`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000024167`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000077927`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr](https://rappel.conso.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `20210722`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000042756`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000066657`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000104112`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000081958`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000051878`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000105514`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000018154`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000082151`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000066677`
  
  
  
  
* URL: [https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf](https://rappel.conso.gouv.fr/assets/files/RAPPELCONSO_FAQ.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000093980`
  
  
  
  
Instances: 58
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>0000043039, which evaluates to: 1970-01-01 11:57:19</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
