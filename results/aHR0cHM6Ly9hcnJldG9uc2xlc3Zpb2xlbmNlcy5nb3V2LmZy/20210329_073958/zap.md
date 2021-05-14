
# ZAP Scanning Report

Generated on Mon, 29 Mar 2021 07:19:27


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 5 |
| Low | 10 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 1 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 12 | 
| Sub Resource Integrity Attribute Missing | Medium | 1 | 
| Vulnerable JS Library | Medium | 3 | 
| X-Frame-Options Header Not Set | Medium | 3 | 
| Absence of Anti-CSRF Tokens | Low | 12 | 
| Cookie No HttpOnly Flag | Low | 12 | 
| Cookie Without SameSite Attribute | Low | 13 | 
| Cookie Without Secure Flag | Low | 12 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 1 | 
| Dangerous JS Functions | Low | 5 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 12 | 
| Strict-Transport-Security Header Not Set | Low | 11 | 
| X-Content-Type-Options Header Missing | Low | 5 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 12 | 
| Modern Web Application | Informational | 12 | 
| Non-Storable Content | Informational | 3 | 
| Storable and Cacheable Content | Informational | 8 | 
| Timestamp Disclosure - Unix | Informational | 12 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 12 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab2000c59cb9948c47de0fa9d3f86258ea24aa50fb295c2876caf03a56bdbb229fa807?type=8](https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab2000c59cb9948c47de0fa9d3f86258ea24aa50fb295c2876caf03a56bdbb229fa807?type=8)
  
  
  * Method: `GET`
  
  
  * Evidence: `38144624932739`
  
  
  
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/comment-effacer-mes-traces](https://arretonslesviolences.gouv.fr/comment-effacer-mes-traces)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles](https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/le-25-novembre-prenons-25-secondes-pour-rappeler-les-outils-qui-sauvent](https://arretonslesviolences.gouv.fr/focus/le-25-novembre-prenons-25-secondes-pour-rappeler-les-outils-qui-sauvent)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/comment-effacer-mes-traces](https://arretonslesviolences.gouv.fr/comment-effacer-mes-traces)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/besoin-d-aide](https://arretonslesviolences.gouv.fr/besoin-d-aide)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/besoin-d-aide/violences-au-sein-du-couple](https://arretonslesviolences.gouv.fr/besoin-d-aide/violences-au-sein-du-couple)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006070158&amp;idArticle=LEGIARTI000022456706&amp;dateTexte=&amp;categorieLien=cid" target="_blank">article 316-3 du CESEDA</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles](https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/le-25-novembre-prenons-25-secondes-pour-rappeler-les-outils-qui-sauvent](https://arretonslesviolences.gouv.fr/focus/le-25-novembre-prenons-25-secondes-pour-rappeler-les-outils-qui-sauvent)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus](https://arretonslesviolences.gouv.fr/focus)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-de-formation](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-de-formation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
Instances: 1
  
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
<p>The identified library jquery, version 3.4.1 is vulnerable.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/themes/sigv2/js/bundle.js?qobt8x](https://arretonslesviolences.gouv.fr/themes/sigv2/js/bundle.js?qobt8x)
  
  
  * Method: `GET`
  
  
  * Evidence: `{jquery:"3.4.1"`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/js/js_Am3OAZ-3nUhK2DY5Bhi5SOePEcHxDXQQEikmvFa0_lU.js](https://arretonslesviolences.gouv.fr/sites/default/files/js/js_Am3OAZ-3nUhK2DY5Bhi5SOePEcHxDXQQEikmvFa0_lU.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `/*! jQuery v3.4.1`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/js/js_iMfJ9yYpxYKH-7wGiXBMh4l9eVChZ2auWEcZdvUeuxs.js](https://arretonslesviolences.gouv.fr/sites/default/files/js/js_iMfJ9yYpxYKH-7wGiXBMh4l9eVChZ2auWEcZdvUeuxs.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `/*! jQuery v3.4.1`
  
  
  
  
Instances: 3
  
### Solution
<p>Please upgrade to the latest version of jquery.</p>
  
### Other information
<p>CVE-2020-11023</p><p>CVE-2020-11022</p><p></p>
  
### Reference
* https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/chiffres-de-reference-violences-faites-aux-femmes](https://arretonslesviolences.gouv.fr/je-suis-professionnel/chiffres-de-reference-violences-faites-aux-femmes)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
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

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="user-login-form" data-drupal-selector="user-login-form" action="/index.php/user/login/" method="post" id="user-login-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `POST`
  
  
  * Evidence: `<form class="user-pass" data-drupal-selector="user-pass" action="/user/password/" method="post" id="user-pass" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="user-pass" data-drupal-selector="user-pass" action="/user/password/" method="post" id="user-pass" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-de-formation](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-de-formation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="webform-submission-form webform-submission-add-form webform-submission-outils-de-formation-form webform-submission-outils-de-formation-add-form webform-submission-outils-de-formation-paragraph-415-form webform-submission-outils-de-formation-paragraph-415-add-form js-webform-details-toggle webform-details-toggle col-xs-12 col-md-8 col-tbl-8 nocolpadding" data-drupal-selector="webform-submission-outils-de-formation-paragraph-415-add-form" novalidate="" action="/je-suis-professionnel/outils-de-formation" method="post" id="webform-submission-outils-de-formation-paragraph-415-add-form" accept-charset="UTF-8" data-webform-id="outils_de_formation"
                                data-component="webform">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Evidence: `<form class="user-login-form" data-drupal-selector="user-login-form" action="/user/login/" method="post" id="user-login-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login](https://arretonslesviolences.gouv.fr/index.php/user/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="user-login-form" data-drupal-selector="user-login-form" action="/index.php/user/login" method="post" id="user-login-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="user-login-form" data-drupal-selector="user-login-form" action="/user/login/" method="post" id="user-login-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `POST`
  
  
  * Evidence: `<form class="user-pass" data-drupal-selector="user-pass" action="/index.php/user/password/" method="post" id="user-pass" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login](https://arretonslesviolences.gouv.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="user-login-form" data-drupal-selector="user-login-form" action="/user/login" method="post" id="user-login-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="user-pass" data-drupal-selector="user-pass" action="/index.php/user/password/" method="post" id="user-pass" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password](https://arretonslesviolences.gouv.fr/index.php/user/password)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="user-pass" data-drupal-selector="user-pass" action="/index.php/user/password" method="post" id="user-pass" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password](https://arretonslesviolences.gouv.fr/user/password)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="user-pass" data-drupal-selector="user-pass" action="/user/password" method="post" id="user-pass" accept-charset="UTF-8">`
  
  
  
  
Instances: 12
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "edit-name" "edit-pass" "form_build_id" "form_id" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login](https://arretonslesviolences.gouv.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login](https://arretonslesviolences.gouv.fr/index.php/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login](https://arretonslesviolences.gouv.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login](https://arretonslesviolences.gouv.fr/index.php/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login](https://arretonslesviolences.gouv.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login](https://arretonslesviolences.gouv.fr/index.php/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-arlv.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-arlv.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login](https://arretonslesviolences.gouv.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login](https://arretonslesviolences.gouv.fr/index.php/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
Instances: 13
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login](https://arretonslesviolences.gouv.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login](https://arretonslesviolences.gouv.fr/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login](https://arretonslesviolences.gouv.fr/index.php/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login](https://arretonslesviolences.gouv.fr/index.php/user/login)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-de-formation](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-de-formation)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js?hl=fr`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/themes/sigv2/js/bundle.js?qobt8x](https://arretonslesviolences.gouv.fr/themes/sigv2/js/bundle.js?qobt8x)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/js/js_CUdzpImh63bOY45-ccnKJkqldpZo8v0F4tQJGqJE_-s.js](https://arretonslesviolences.gouv.fr/sites/default/files/js/js_CUdzpImh63bOY45-ccnKJkqldpZo8v0F4tQJGqJE_-s.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab2000c59cb9948c47de0fa9d3f86258ea24aa50fb295c2876caf03a56bdbb229fa807?type=8](https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab2000c59cb9948c47de0fa9d3f86258ea24aa50fb295c2876caf03a56bdbb229fa807?type=8)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/js/js_iMfJ9yYpxYKH-7wGiXBMh4l9eVChZ2auWEcZdvUeuxs.js](https://arretonslesviolences.gouv.fr/sites/default/files/js/js_iMfJ9yYpxYKH-7wGiXBMh4l9eVChZ2auWEcZdvUeuxs.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/js/js_Am3OAZ-3nUhK2DY5Bhi5SOePEcHxDXQQEikmvFa0_lU.js](https://arretonslesviolences.gouv.fr/sites/default/files/js/js_Am3OAZ-3nUhK2DY5Bhi5SOePEcHxDXQQEikmvFa0_lU.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab2000c59cb9948c47de0fa9d3f86258ea24aa50fb295c2876caf03a56bdbb229fa807?type=8](https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab2000c59cb9948c47de0fa9d3f86258ea24aa50fb295c2876caf03a56bdbb229fa807?type=8)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab2000c59cb9948c47de0fa9d3f86258ea24aa50fb295c2876caf03a56bdbb229fa807?type=12](https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab2000c59cb9948c47de0fa9d3f86258ea24aa50fb295c2876caf03a56bdbb229fa807?type=12)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles](https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/le-25-novembre-prenons-25-secondes-pour-rappeler-les-outils-qui-sauvent](https://arretonslesviolences.gouv.fr/focus/le-25-novembre-prenons-25-secondes-pour-rappeler-les-outils-qui-sauvent)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sitemap.xml](https://arretonslesviolences.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus](https://arretonslesviolences.gouv.fr/focus)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles](https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/comment-effacer-mes-traces](https://arretonslesviolences.gouv.fr/comment-effacer-mes-traces)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.svg](https://arretonslesviolences.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.jpg](https://arretonslesviolences.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.css](https://arretonslesviolences.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.jpeg](https://arretonslesviolences.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.js](https://arretonslesviolences.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.png](https://arretonslesviolences.gouv.fr/core/*.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.js$](https://arretonslesviolences.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.css$](https://arretonslesviolences.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.gif](https://arretonslesviolences.gouv.fr/core/*.gif)
  
  
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

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/chiffres-de-reference-violences-faites-aux-femmes](https://arretonslesviolences.gouv.fr/je-suis-professionnel/chiffres-de-reference-violences-faites-aux-femmes)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab2000c59cb9948c47de0fa9d3f86258ea24aa50fb295c2876caf03a56bdbb229fa807?type=8](https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab2000c59cb9948c47de0fa9d3f86258ea24aa50fb295c2876caf03a56bdbb229fa807?type=8)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab2000c59cb9948c47de0fa9d3f86258ea24aa50fb295c2876caf03a56bdbb229fa807?type=12](https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab2000c59cb9948c47de0fa9d3f86258ea24aa50fb295c2876caf03a56bdbb229fa807?type=12)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000a2ea2f33d4f72176ceae7699c16252c3fbf1362e28abcc5f6ac26dfbdcae4a1b08fed76d120a2800a49ab31b6ecb9fecd3e13be0aeabe3d8934d0c8eb25d239631b767eb9e56b316d6bf072a45c615b5200000000200000000`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_0hHz8SUrag7aEh1DKXBaPRDOUqJ6plYpg3kkXMhm9R8`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_0hHz8SUrag7aEh1DKXBaPRDOUqJ6plYpg3kkXMhm9R8`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_0hHz8SUrag7aEh1DKXBaPRDOUqJ6plYpg3kkXMhm9R8`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_0hHz8SUrag7aEh1DKXBaPRDOUqJ6plYpg3kkXMhm9R8`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `JfiVsIxF/vX1u9cqJlLL3fNyljz02epXWjUWG7y2MjGpRCU3GHrg+8Il7JXjdZI5TkKDlZSw2pni2P8aWkBotmF5nl0=`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab200030d1d5a2d8bd5fba7db1c927447c9b507b9b5a544cf047fa2d38376c9d18fcff08e2bc5da40a2800d85a2e0a2ac9e454e59bac418414e3163cfd798a7df04ad578919d29b65223cba5debf46ddefd93b200000000200000000`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_0hHz8SUrag7aEh1DKXBaPRDOUqJ6plYpg3kkXMhm9R8`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab200034e0b18cc559aff8954c3b0201986633f8509f469800530a119b280231e4bf7108792bd2d40a2800db03a842021a49d1d3e13be0aeabe3d83597c1ee066f94fdb8522952ef756ebdf9df7e054c15cee2200000000200000000`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles](https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_0hHz8SUrag7aEh1DKXBaPRDOUqJ6plYpg3kkXMhm9R8`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab2000c59cb9948c47de0fa9d3f86258ea24aa50fb295c2876caf03a56bdbb229fa807?type=12](https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab2000c59cb9948c47de0fa9d3f86258ea24aa50fb295c2876caf03a56bdbb229fa807?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0o`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_0hHz8SUrag7aEh1DKXBaPRDOUqJ6plYpg3kkXMhm9R8`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�]u�Mu�Mt�M��M4�M��M4�M9�M4�M4�mw���s���M4�޷�M4�M4�M4�M4�}4�M4ӯ�H���M4�M4�4�\x000f�t�}4�M4Әm��7�M4�F��Ǟoo9k֛�M4kg����w���^�q��}s^��g7}��߭��ƛq�_�6���uƞ�[���w���m\x001a��4k�Zo}[��\x001b���ww�ݷ�i�{w|�~\x001d��\x001eon]�z�V�뷛��zo}zw��ӽ��:ז��M4�M4�m4�M4�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.png](https://arretonslesviolences.gouv.fr/core/*.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.gif](https://arretonslesviolences.gouv.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/profiles/*.js](https://arretonslesviolences.gouv.fr/profiles/*.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.jpg](https://arretonslesviolences.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.css$](https://arretonslesviolences.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.css](https://arretonslesviolences.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.svg](https://arretonslesviolences.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.jpeg](https://arretonslesviolences.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.js](https://arretonslesviolences.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/profiles/*.css$](https://arretonslesviolences.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/profiles/*.css](https://arretonslesviolences.gouv.fr/profiles/*.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.js$](https://arretonslesviolences.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Ensure each page is setting the specific and appropriate content-type value for the content being delivered.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx

  
#### CWE Id : 345
  
#### WASC Id : 12
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
Instances: 10
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bFROM\b and was detected 122 times, the first in the element starting with: "<!-- BEGIN OUTPUT from 'themes/sigv2/templates/layout/html.html.twig' -->", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
Instances: 2
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected in the element starting with: "<script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/index.php\/","scriptPath":null", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/comment-effacer-mes-traces](https://arretonslesviolences.gouv.fr/comment-effacer-mes-traces)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles](https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab200034e0b18cc559aff8954c3b0201986633f8509f469800530a119b280231e4bf7108792bd2d40a2800db03a842021a49d1d3e13be0aeabe3d83597c1ee066f94fdb8522952ef756ebdf9df7e054c15cee2200000000200000000";

window.eXbI=!!window.eXbI;try{(function(){(function _s(){var _=!1;function J(_){for(var J=0;_--;)J+=z(document.documentElement,null);return J}function z(_,J){var O="vi";J=J||new Z;return is(_,function(_){_.setAttribute("data-"+O,J.IJ());return z(_,J)},null)}function Z(){this.zi=1;this.oi=0;this.sZ=this.zi;this.LS=null;this.IJ=function(){this.LS=this.oi+this.sZ;if(!isFinite(this.LS))return this.reset(),this.IJ();this.oi=this.sZ;this.sZ=this.LS;this.LS=null;return this.sZ};this.reset=function(){this.zi++;this.oi=0;this.sZ=this.zi}}var ss=!1;
function O(_,J){var O=document.createElement(_);J=J||document.body;J.appendChild(O);O&&O.style&&(O.style.display="none")}function Ss(J,O){O=O||J;var z="|";function Z(_){_=_.split(z);var J=[];for(var O=0;O<_.length;++O){var ss="",Ss=_[O].split(",");for(var Is=0;Is<Ss.length;++Is)ss+=Ss[Is][Is];J.push(ss)}return J}var Ss=0,is="datalist,details,embed,figure,hrimg,strong,article,formaddress|audio,blockquote,area,source,input|canvas,form,link,tbase,option,details,article";is.split(z);is=Z(is);is=new RegExp(is.join(z),
"g");while(is.exec(J))is=new RegExp((""+new Date)[8],"g"),_&&(ss=!0),++Ss;return O(Ss&&1)}function is(_,J,z){(z=z||ss)&&O("div",_);_=_.children;var Z=0;for(var Ss in _){z=_[Ss];try{z instanceof HTMLElement&&(J(z),++Z)}catch(is){}}return Z}Ss(_s,J)})();var js=72;
try{var ls,Os,sS=S(573)?0:1,SS=S(768)?0:1,_S=S(526)?0:1,iS=S(501)?0:1,oS=S(12)?1:0,zS=S(166)?1:0;for(var __=(S(622),0);__<Os;++__)sS+=(S(831),2),SS+=S(535)?1:2,_S+=(S(164),2),iS+=S(511)?1:2,oS+=(S(560),2),zS+=S(470)?1:3;ls=sS+SS+_S+iS+oS+zS;window.ZZ===ls&&(window.ZZ=++ls)}catch(i_){window.ZZ=ls}var I_=!0;function I(s){var _=arguments.length,J=[];for(var z=1;z<_;++z)J.push(arguments[z]-s);return String.fromCharCode.apply(String,J)}
function J_(s){var _=49;!s||document[I(_,167,154,164,154,147,154,157,154,165,170,132,165,146,165,150)]&&document[l(_,167,154,164,154,147,154,157,154,165,170,132,165,146,165,150)]!==L(68616527617,_)||(I_=!1);return I_}function l(s){var _=arguments.length,J=[],z=1;while(z<_)J[z-1]=arguments[z++]-s;return String.fromCharCode.apply(String,J)}function l_(){}J_(window[l_[I(js,182,169,181,173)]]===l_);J_(typeof ie9rgb4!==L(1242178186127,js));
J_(RegExp("\x3c")[L(1372133,js)](function(){return"\x3c"})&!RegExp(L(42817,js))[l(js,188,173,187,188)](function(){return"'x3'+'d';"}));
var Z_=window[I(js,169,188,188,169,171,176,141,190,173,182,188)]||RegExp(I(js,181,183,170,177,196,169,182,172,186,183,177,172),L(-54,js))[L(1372133,js)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),Si=+new Date+(S(798)?473612:6E5),_i,ii,Ii,ji=window[I(js,187,173,188,156,177,181,173,183,189,188)],Li=Z_?S(18)?3E4:30925:S(825)?6065:6E3;
document[l(js,169,172,172,141,190,173,182,188,148,177,187,188,173,182,173,186)]&&document[l(js,169,172,172,141,190,173,182,188,148,177,187,188,173,182,173,186)](I(js,190,177,187,177,170,177,180,177,188,193,171,176,169,182,175,173),function(s){var _=51;document[l(_,169,156,166,156,149,156,159,156,167,172,134,167,148,167,152)]&&(document[I(_,169,156,166,156,149,156,159,156,167,172,134,167,148,167,152)]===L(1058781932,_)&&s[l(_,156,166,135,165,168,166,167,152,151)]?Ii=!0:document[l(_,169,156,166,156,
149,156,159,156,167,172,134,167,148,167,152)]===l(_,169,156,166,156,149,159,152)&&(_i=+new Date,Ii=!1,Oi()))});function Oi(){if(!document[I(7,120,124,108,121,128,90,108,115,108,106,123,118,121)])return!0;var s=+new Date;if(s>Si&&(S(922)?740795:6E5)>s-_i)return J_(!1);var _=J_(ii&&!Ii&&_i+Li<s);_i=s;ii||(ii=!0,ji(function(){ii=!1},S(899)?0:1));return _}Oi();var Zi=[S(239)?17795081:20774843,S(270)?27611931586:2147483647,S(113)?1558153217:1373803789];function L(s,_){s+=_;return s.toString(36)}
function sI(s){var _=74;s=typeof s===l(_,189,190,188,179,184,177)?s:s[I(_,190,185,157,190,188,179,184,177)](S(521)?48:36);var J=window[s];if(!J[I(_,190,185,157,190,188,179,184,177)])return;var z=""+J;window[s]=function(s,_){ii=!1;return J(s,_)};window[s][l(_,190,185,157,190,188,179,184,177)]=function(){return z}}for(var II=(S(832),0);II<Zi[l(js,180,173,182,175,188,176)];++II)sI(Zi[II]);J_(!1!==window[I(js,173,160,170,145)]);window.zs={iS:"08ba5c0d8f01780063617d914439196970245d929b8978130541039528eaab3f269c3cb99f13bc2c5c9de6c057174d13633792a268ff25b20f8a76ad869c3497b7881837b4fc672bc5b8b22a200c720ecabe9a22acba4449e78e009ff7c15a2bb13294b0c9b76c0822f4a2f10f5d53dfc4e816b1910e27448d78693663388cf5"};
function jI(s){var _=+new Date,J;!document[I(70,183,187,171,184,191,153,171,178,171,169,186,181,184,135,178,178)]||_>Si&&(S(463)?429375:6E5)>_-_i?J=J_(!1):(J=J_(ii&&!Ii&&_i+Li<_),_i=_,ii||(ii=!0,ji(function(){ii=!1},S(995)?0:1)));return!(arguments[s]^J)}function S(s){return 342>s}(function JI(_){return _?0:JI(_)*JI(_)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab200030d1d5a2d8bd5fba7db1c927447c9b507b9b5a544cf047fa2d38376c9d18fcff08e2bc5da40a2800d85a2e0a2ac9e454e59bac418414e3163cfd798a7df04ad578919d29b65223cba5debf46ddefd93b200000000200000000";

window.eXbI=!!window.eXbI;try{(function(){(function _s(){var _=!1;function J(_){for(var J=0;_--;)J+=z(document.documentElement,null);return J}function z(_,J){var O="vi";J=J||new Z;return is(_,function(_){_.setAttribute("data-"+O,J.IJ());return z(_,J)},null)}function Z(){this.zi=1;this.oi=0;this.sZ=this.zi;this.LS=null;this.IJ=function(){this.LS=this.oi+this.sZ;if(!isFinite(this.LS))return this.reset(),this.IJ();this.oi=this.sZ;this.sZ=this.LS;this.LS=null;return this.sZ};this.reset=function(){this.zi++;this.oi=0;this.sZ=this.zi}}var ss=!1;
function O(_,J){var O=document.createElement(_);J=J||document.body;J.appendChild(O);O&&O.style&&(O.style.display="none")}function Ss(J,O){O=O||J;var z="|";function Z(_){_=_.split(z);var J=[];for(var O=0;O<_.length;++O){var ss="",Ss=_[O].split(",");for(var Is=0;Is<Ss.length;++Is)ss+=Ss[Is][Is];J.push(ss)}return J}var Ss=0,is="datalist,details,embed,figure,hrimg,strong,article,formaddress|audio,blockquote,area,source,input|canvas,form,link,tbase,option,details,article";is.split(z);is=Z(is);is=new RegExp(is.join(z),
"g");while(is.exec(J))is=new RegExp((""+new Date)[8],"g"),_&&(ss=!0),++Ss;return O(Ss&&1)}function is(_,J,z){(z=z||ss)&&O("div",_);_=_.children;var Z=0;for(var Ss in _){z=_[Ss];try{z instanceof HTMLElement&&(J(z),++Z)}catch(is){}}return Z}Ss(_s,J)})();var js=72;
try{var ls,Os,sS=S(573)?0:1,SS=S(768)?0:1,_S=S(526)?0:1,iS=S(501)?0:1,oS=S(12)?1:0,zS=S(166)?1:0;for(var __=(S(622),0);__<Os;++__)sS+=(S(831),2),SS+=S(535)?1:2,_S+=(S(164),2),iS+=S(511)?1:2,oS+=(S(560),2),zS+=S(470)?1:3;ls=sS+SS+_S+iS+oS+zS;window.ZZ===ls&&(window.ZZ=++ls)}catch(i_){window.ZZ=ls}var I_=!0;function I(s){var _=arguments.length,J=[];for(var z=1;z<_;++z)J.push(arguments[z]-s);return String.fromCharCode.apply(String,J)}
function J_(s){var _=49;!s||document[I(_,167,154,164,154,147,154,157,154,165,170,132,165,146,165,150)]&&document[l(_,167,154,164,154,147,154,157,154,165,170,132,165,146,165,150)]!==L(68616527617,_)||(I_=!1);return I_}function l(s){var _=arguments.length,J=[],z=1;while(z<_)J[z-1]=arguments[z++]-s;return String.fromCharCode.apply(String,J)}function l_(){}J_(window[l_[I(js,182,169,181,173)]]===l_);J_(typeof ie9rgb4!==L(1242178186127,js));
J_(RegExp("\x3c")[L(1372133,js)](function(){return"\x3c"})&!RegExp(L(42817,js))[l(js,188,173,187,188)](function(){return"'x3'+'d';"}));
var Z_=window[I(js,169,188,188,169,171,176,141,190,173,182,188)]||RegExp(I(js,181,183,170,177,196,169,182,172,186,183,177,172),L(-54,js))[L(1372133,js)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),Si=+new Date+(S(798)?473612:6E5),_i,ii,Ii,ji=window[I(js,187,173,188,156,177,181,173,183,189,188)],Li=Z_?S(18)?3E4:30925:S(825)?6065:6E3;
document[l(js,169,172,172,141,190,173,182,188,148,177,187,188,173,182,173,186)]&&document[l(js,169,172,172,141,190,173,182,188,148,177,187,188,173,182,173,186)](I(js,190,177,187,177,170,177,180,177,188,193,171,176,169,182,175,173),function(s){var _=51;document[l(_,169,156,166,156,149,156,159,156,167,172,134,167,148,167,152)]&&(document[I(_,169,156,166,156,149,156,159,156,167,172,134,167,148,167,152)]===L(1058781932,_)&&s[l(_,156,166,135,165,168,166,167,152,151)]?Ii=!0:document[l(_,169,156,166,156,
149,156,159,156,167,172,134,167,148,167,152)]===l(_,169,156,166,156,149,159,152)&&(_i=+new Date,Ii=!1,Oi()))});function Oi(){if(!document[I(7,120,124,108,121,128,90,108,115,108,106,123,118,121)])return!0;var s=+new Date;if(s>Si&&(S(922)?740795:6E5)>s-_i)return J_(!1);var _=J_(ii&&!Ii&&_i+Li<s);_i=s;ii||(ii=!0,ji(function(){ii=!1},S(899)?0:1));return _}Oi();var Zi=[S(239)?17795081:20774843,S(270)?27611931586:2147483647,S(113)?1558153217:1373803789];function L(s,_){s+=_;return s.toString(36)}
function sI(s){var _=74;s=typeof s===l(_,189,190,188,179,184,177)?s:s[I(_,190,185,157,190,188,179,184,177)](S(521)?48:36);var J=window[s];if(!J[I(_,190,185,157,190,188,179,184,177)])return;var z=""+J;window[s]=function(s,_){ii=!1;return J(s,_)};window[s][l(_,190,185,157,190,188,179,184,177)]=function(){return z}}for(var II=(S(832),0);II<Zi[l(js,180,173,182,175,188,176)];++II)sI(Zi[II]);J_(!1!==window[I(js,173,160,170,145)]);window.zs={iS:"08f1496a66017800150f65acd1b72d5770245d929b897813e4528c33d3fa12e8d739fe005da6df4327e725454bb37434e1da5bf716d8642dcbd43e5362cbb9013052c153add05c3cbca4d289cc651c8227859bb54504adbf59f39c021d75882d8af80d921982d9a7227c453dca3a467f29e9ed03d87e91c7fcd8d2157d3df488"};
function jI(s){var _=+new Date,J;!document[I(70,183,187,171,184,191,153,171,178,171,169,186,181,184,135,178,178)]||_>Si&&(S(463)?429375:6E5)>_-_i?J=J_(!1):(J=J_(ii&&!Ii&&_i+Li<_),_i=_,ii||(ii=!0,ji(function(){ii=!1},S(995)?0:1)));return!(arguments[s]^J)}function S(s){return 342>s}(function JI(_){return _?0:JI(_)*JI(_)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/le-25-novembre-prenons-25-secondes-pour-rappeler-les-outils-qui-sauvent](https://arretonslesviolences.gouv.fr/focus/le-25-novembre-prenons-25-secondes-pour-rappeler-les-outils-qui-sauvent)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000a2ea2f33d4f72176ceae7699c16252c3fbf1362e28abcc5f6ac26dfbdcae4a1b08fed76d120a2800a49ab31b6ecb9fecd3e13be0aeabe3d8934d0c8eb25d239631b767eb9e56b316d6bf072a45c615b5200000000200000000";

window.eXbI=!!window.eXbI;try{(function(){(function _s(){var _=!1;function J(_){for(var J=0;_--;)J+=z(document.documentElement,null);return J}function z(_,J){var O="vi";J=J||new Z;return is(_,function(_){_.setAttribute("data-"+O,J.IJ());return z(_,J)},null)}function Z(){this.zi=1;this.oi=0;this.sZ=this.zi;this.LS=null;this.IJ=function(){this.LS=this.oi+this.sZ;if(!isFinite(this.LS))return this.reset(),this.IJ();this.oi=this.sZ;this.sZ=this.LS;this.LS=null;return this.sZ};this.reset=function(){this.zi++;this.oi=0;this.sZ=this.zi}}var ss=!1;
function O(_,J){var O=document.createElement(_);J=J||document.body;J.appendChild(O);O&&O.style&&(O.style.display="none")}function Ss(J,O){O=O||J;var z="|";function Z(_){_=_.split(z);var J=[];for(var O=0;O<_.length;++O){var ss="",Ss=_[O].split(",");for(var Is=0;Is<Ss.length;++Is)ss+=Ss[Is][Is];J.push(ss)}return J}var Ss=0,is="datalist,details,embed,figure,hrimg,strong,article,formaddress|audio,blockquote,area,source,input|canvas,form,link,tbase,option,details,article";is.split(z);is=Z(is);is=new RegExp(is.join(z),
"g");while(is.exec(J))is=new RegExp((""+new Date)[8],"g"),_&&(ss=!0),++Ss;return O(Ss&&1)}function is(_,J,z){(z=z||ss)&&O("div",_);_=_.children;var Z=0;for(var Ss in _){z=_[Ss];try{z instanceof HTMLElement&&(J(z),++Z)}catch(is){}}return Z}Ss(_s,J)})();var js=72;
try{var ls,Os,sS=S(573)?0:1,SS=S(768)?0:1,_S=S(526)?0:1,iS=S(501)?0:1,oS=S(12)?1:0,zS=S(166)?1:0;for(var __=(S(622),0);__<Os;++__)sS+=(S(831),2),SS+=S(535)?1:2,_S+=(S(164),2),iS+=S(511)?1:2,oS+=(S(560),2),zS+=S(470)?1:3;ls=sS+SS+_S+iS+oS+zS;window.ZZ===ls&&(window.ZZ=++ls)}catch(i_){window.ZZ=ls}var I_=!0;function I(s){var _=arguments.length,J=[];for(var z=1;z<_;++z)J.push(arguments[z]-s);return String.fromCharCode.apply(String,J)}
function J_(s){var _=49;!s||document[I(_,167,154,164,154,147,154,157,154,165,170,132,165,146,165,150)]&&document[l(_,167,154,164,154,147,154,157,154,165,170,132,165,146,165,150)]!==L(68616527617,_)||(I_=!1);return I_}function l(s){var _=arguments.length,J=[],z=1;while(z<_)J[z-1]=arguments[z++]-s;return String.fromCharCode.apply(String,J)}function l_(){}J_(window[l_[I(js,182,169,181,173)]]===l_);J_(typeof ie9rgb4!==L(1242178186127,js));
J_(RegExp("\x3c")[L(1372133,js)](function(){return"\x3c"})&!RegExp(L(42817,js))[l(js,188,173,187,188)](function(){return"'x3'+'d';"}));
var Z_=window[I(js,169,188,188,169,171,176,141,190,173,182,188)]||RegExp(I(js,181,183,170,177,196,169,182,172,186,183,177,172),L(-54,js))[L(1372133,js)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),Si=+new Date+(S(798)?473612:6E5),_i,ii,Ii,ji=window[I(js,187,173,188,156,177,181,173,183,189,188)],Li=Z_?S(18)?3E4:30925:S(825)?6065:6E3;
document[l(js,169,172,172,141,190,173,182,188,148,177,187,188,173,182,173,186)]&&document[l(js,169,172,172,141,190,173,182,188,148,177,187,188,173,182,173,186)](I(js,190,177,187,177,170,177,180,177,188,193,171,176,169,182,175,173),function(s){var _=51;document[l(_,169,156,166,156,149,156,159,156,167,172,134,167,148,167,152)]&&(document[I(_,169,156,166,156,149,156,159,156,167,172,134,167,148,167,152)]===L(1058781932,_)&&s[l(_,156,166,135,165,168,166,167,152,151)]?Ii=!0:document[l(_,169,156,166,156,
149,156,159,156,167,172,134,167,148,167,152)]===l(_,169,156,166,156,149,159,152)&&(_i=+new Date,Ii=!1,Oi()))});function Oi(){if(!document[I(7,120,124,108,121,128,90,108,115,108,106,123,118,121)])return!0;var s=+new Date;if(s>Si&&(S(922)?740795:6E5)>s-_i)return J_(!1);var _=J_(ii&&!Ii&&_i+Li<s);_i=s;ii||(ii=!0,ji(function(){ii=!1},S(899)?0:1));return _}Oi();var Zi=[S(239)?17795081:20774843,S(270)?27611931586:2147483647,S(113)?1558153217:1373803789];function L(s,_){s+=_;return s.toString(36)}
function sI(s){var _=74;s=typeof s===l(_,189,190,188,179,184,177)?s:s[I(_,190,185,157,190,188,179,184,177)](S(521)?48:36);var J=window[s];if(!J[I(_,190,185,157,190,188,179,184,177)])return;var z=""+J;window[s]=function(s,_){ii=!1;return J(s,_)};window[s][l(_,190,185,157,190,188,179,184,177)]=function(){return z}}for(var II=(S(832),0);II<Zi[l(js,180,173,182,175,188,176)];++II)sI(Zi[II]);J_(!1!==window[I(js,173,160,170,145)]);window.zs={iS:"08de1ad7f1017800dfc18ffe7596441a70245d929b89781304859ad1f1b13f763e8338fc23085a50c64b5ef0b40bd92e9136632d2c6d95ea51dcfa86dce02f63559f1adff6b92ae902537c58a6a969d61f06849897e6a0c3c6ba0ad7848bb84668fc8cb79140dac769d5d99a56acb55fffa6bd7a665564f5104990ca86c38da9"};
function jI(s){var _=+new Date,J;!document[I(70,183,187,171,184,191,153,171,178,171,169,186,181,184,135,178,178)]||_>Si&&(S(463)?429375:6E5)>_-_i?J=J_(!1):(J=J_(ii&&!Ii&&_i+Li<_),_i=_,ii||(ii=!0,ji(function(){ii=!1},S(995)?0:1)));return!(arguments[s]^J)}function S(s){return 342>s}(function JI(_){return _?0:JI(_)*JI(_)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sitemap.xml](https://arretonslesviolences.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.gif](https://arretonslesviolences.gouv.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.css$](https://arretonslesviolences.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.css](https://arretonslesviolences.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.jpg](https://arretonslesviolences.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.js](https://arretonslesviolences.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.jpeg](https://arretonslesviolences.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.js$](https://arretonslesviolences.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1373803789`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1373803789`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1058781932`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20774843`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `20774843`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1058781932`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1373803789, which evaluates to: 2013-07-14 12:09:49</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `op`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `form_id`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `op`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `form_id`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `pass`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `op`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `name`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `name`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `form_id`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `name`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `op`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `op`
  
  
  
  
Instances: 12
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://arretonslesviolences.gouv.fr/user/login/</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [button] tag [value] attribute </p><p></p><p>The user input found was:</p><p>op=Se connecter</p><p></p><p>The user-controlled value was:</p><p>se connecter</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
