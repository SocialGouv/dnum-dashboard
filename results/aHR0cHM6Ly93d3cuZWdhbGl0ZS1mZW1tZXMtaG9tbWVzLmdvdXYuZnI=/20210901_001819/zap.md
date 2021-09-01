
# ZAP Scanning Report

Generated on Wed, 1 Sep 2021 00:06:30


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 9 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Sub Resource Integrity Attribute Missing | Medium | 10 | 
| X-Frame-Options Header Not Set | Medium | 11 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Cookie without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 11 | 
| Dangerous JS Functions | Low | 1 | 
| Incomplete or No Cache-control Header Set | Low | 11 | 
| In Page Banner Information Leak | Low | 2 | 
| Permissions Policy Header Not Set | Low | 11 | 
| Secure Pages Include Mixed Content | Low | 4 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 12 | 
| Charset Mismatch  | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 9 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 1 | 
| Storable and Cacheable Content | Informational | 3 | 
| Storable but Non-Cacheable Content | Informational | 7 | 
| Timestamp Disclosure - Unix | Informational | 8 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~default/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~default/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
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

  
#### CWE Id : 693
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://arretonslesviolences.gouv.fr/" target="_blank" rel="noopener"><img loading="lazy" class="alignnone size-full wp-image-28356" src="https://www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Arretonslesviolences.gouv.fr" width="249" height="75" /></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://arretonslesviolences.gouv.fr/" target="_blank" rel="noopener"><img loading="lazy" class="alignnone size-full wp-image-28356" src="https://www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Arretonslesviolences.gouv.fr" width="249" height="75" /></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://arretonslesviolences.gouv.fr/" target="_blank" rel="noopener"><img loading="lazy" class="alignnone size-full wp-image-28356" src="https://www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Arretonslesviolences.gouv.fr" width="249" height="75" /></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://arretonslesviolences.gouv.fr/" target="_blank" rel="noopener"><img loading="lazy" class="alignnone size-full wp-image-28356" src="https://www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Arretonslesviolences.gouv.fr" width="249" height="75" /></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="https://arretonslesviolences.gouv.fr/"><img src="//www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="https://arretonslesviolences.gouv.fr/"></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://arretonslesviolences.gouv.fr/" target="_blank" rel="noopener"><img loading="lazy" class="alignnone size-full wp-image-28356" src="https://www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Arretonslesviolences.gouv.fr" width="249" height="75" /></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://arretonslesviolences.gouv.fr/" target="_blank" rel="noopener"><img loading="lazy" class="alignnone size-full wp-image-28356" src="https://www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Arretonslesviolences.gouv.fr" width="249" height="75" /></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://arretonslesviolences.gouv.fr/" target="_blank" rel="noopener"><img loading="lazy" class="alignnone size-full wp-image-28356" src="https://www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Arretonslesviolences.gouv.fr" width="249" height="75" /></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" href="https://arretonslesviolences.gouv.fr/"><img src="//www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="https://arretonslesviolences.gouv.fr/"></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~default/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~default/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://arretonslesviolences.gouv.fr/" target="_blank" rel="noopener"><img loading="lazy" class="alignnone size-full wp-image-28356" src="https://www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Arretonslesviolences.gouv.fr" width="249" height="75" /></a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://arretonslesviolences.gouv.fr/" target="_blank" rel="noopener"><img loading="lazy" class="alignnone size-full wp-image-28356" src="https://www.egalite-femmes-hommes.gouv.fr/wp-content/uploads/2020/10/banniere-alv.png" alt="Arretonslesviolences.gouv.fr" width="249" height="75" /></a>`
  
  
  
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11"/>`
  
  
  
  
Instances: 10
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 345
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/organisation-du-ministere/actions-dispositifs-interministeriels/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/organisation-du-ministere/actions-dispositifs-interministeriels/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/category/droits-des-femmes/actions-gouvernementales-pour-legalite-reelle-entre-les-femmes-et-les-hommes/](https://www.egalite-femmes-hommes.gouv.fr/category/droits-des-femmes/actions-gouvernementales-pour-legalite-reelle-entre-les-femmes-et-les-hommes/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/biographie-de-elisabeth-moreno/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/biographie-de-elisabeth-moreno/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/category/presse/agenda/](https://www.egalite-femmes-hommes.gouv.fr/category/presse/agenda/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/acteurs-et-partenaires/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/acteurs-et-partenaires/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/cabinet-elisabeth-moreno/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/cabinet-elisabeth-moreno/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/organisation-du-ministere/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/organisation-du-ministere/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/dossiers/](https://www.egalite-femmes-hommes.gouv.fr/dossiers/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 11
  
### Solution
<p>Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive. </p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

  
#### CWE Id : 1021
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://www.egalite-femmes-hommes.gouv.fr" method="get">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://www.egalite-femmes-hommes.gouv.fr" method="get">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://www.egalite-femmes-hommes.gouv.fr" method="get">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search-form" action="https://www.egalite-femmes-hommes.gouv.fr/">`
  
  
  
  
Instances: 11
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 2: "s" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Cookie without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/robots.txt](https://www.egalite-femmes-hommes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-ddf-v2.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-ddf-v2.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-ddf-v2.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-ddf-v2.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-ddf-v2.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-ddf-v2.cegedim.cloud-HTTP`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 1275
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cross-Domain JavaScript Source File Inclusion
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes one or more script files from a third-party domain.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~default/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~default/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07`
  
  
  * Evidence: `<script type="text/javascript" src="https://tarteaucitron.io/load.js?locale=fr&iswordpress=true&domain=www.egalite-femmes-hommes.gouv.fr&uuid=1434aa2322b367eac714f7672789eecd3452dc07"></script>`
  
  
  
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-includes/js/jquery/jquery.min.js?ver=3.5.1](https://www.egalite-femmes-hommes.gouv.fr/wp-includes/js/jquery/jquery.min.js?ver=3.5.1)
  
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/robots.txt](https://www.egalite-femmes-hommes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/acteurs-et-partenaires/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/acteurs-et-partenaires/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/dossiers/](https://www.egalite-femmes-hommes.gouv.fr/dossiers/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/cabinet-elisabeth-moreno/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/cabinet-elisabeth-moreno/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/organisation-du-ministere/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/organisation-du-ministere/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/wp-sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/biographie-de-elisabeth-moreno/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/biographie-de-elisabeth-moreno/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/category/presse/agenda/](https://www.egalite-femmes-hommes.gouv.fr/category/presse/agenda/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 11
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### In Page Banner Information Leak
##### Low (High)
  
  
  
  
#### Description
<p>The server returned a version banner string in the response content. Such information leaks may allow attackers to further target specific issues impacting the product and version in use.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/xmlrpc.php](https://www.egalite-femmes-hommes.gouv.fr/xmlrpc.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/xmlrpc.php?rsd](https://www.egalite-femmes-hommes.gouv.fr/xmlrpc.php?rsd)
  
  
  * Method: `GET`
  
  
  * Evidence: `Apache/2.4.38`
  
  
  
  
Instances: 2
  
### Solution
<p>Configure the server to prevent such information leaks. For example:</p><p>Under Tomcat this is done via the "server" directive and implementation of custom error pages.</p><p>Under Apache this is done via the "ServerSignature" and "ServerTokens" directives.</p>
  
### Other information
<p>There is a chance that the highlight in the finding is on a value in the headers, versus the actual matched string in the response body.</p>
  
### Reference
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/08-Testing_for_Error_Handling/

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Permissions Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Permissions Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Permissions Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~default/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~default/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
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

  
  
  
  
### Secure Pages Include Mixed Content
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes mixed content, that is content accessed via HTTP instead of HTTPS.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/publications/droits-des-femmes/egalite-entre-les-femmes-et-les-hommes/chiffres-cles-de-legalite-femmes-hommes-en-2011/](https://www.egalite-femmes-hommes.gouv.fr/publications/droits-des-femmes/egalite-entre-les-femmes-et-les-hommes/chiffres-cles-de-legalite-femmes-hommes-en-2011/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/organisation-du-ministere/chronologie-des-dispositions-en-faveur-de-legalite-des-femmes-et-des-hommes/ladoption-de-lordonnance-du-21-avril-1944/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/organisation-du-ministere/chronologie-des-dispositions-en-faveur-de-legalite-des-femmes-et-des-hommes/ladoption-de-lordonnance-du-21-avril-1944/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/embed/video/x1q81qw`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/reseaux-sociaux2/](https://www.egalite-femmes-hommes.gouv.fr/reseaux-sociaux2/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/widget/jukebox?list[]=%2Fplaylist%2Fx4hgoo_droitsdesfemmes_3-questions-a-sylviane-giampino%2F1&&autoplay=0&mute=0`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/lactualite-en-region/](https://www.egalite-femmes-hommes.gouv.fr/lactualite-en-region/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://carte-droits-des-femmes.fr`
  
  
  
  
Instances: 4
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=object codebase=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0</p><p>tag=embed src=http://static.issuu.com/webembed/viewers/style1/v2/IssuuReader.swf</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/category/presse/agenda/](https://www.egalite-femmes-hommes.gouv.fr/category/presse/agenda/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/robots.txt](https://www.egalite-femmes-hommes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/acteurs-et-partenaires/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/acteurs-et-partenaires/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/dossiers/](https://www.egalite-femmes-hommes.gouv.fr/dossiers/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/organisation-du-ministere/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/organisation-du-ministere/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/wp-sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/cabinet-elisabeth-moreno/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/cabinet-elisabeth-moreno/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/le-ministere/biographie-de-elisabeth-moreno/](https://www.egalite-femmes-hommes.gouv.fr/le-ministere/biographie-de-elisabeth-moreno/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.</p>
  
### Other information
<p>This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.</p><p>At "High" threshold this scan rule will not alert on client or server error responses.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx
* https://owasp.org/www-community/Security_Headers

  
#### CWE Id : 693
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/robots.txt](https://www.egalite-femmes-hommes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `f4IbDk2LtxWIRlkqJlLL3fNyljz02ZAApRp4oSnASQUQ5Th3HIenQiTYQp/zj7AnD8gBfPYs8+vzNfrNr6swzX47veg=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `j6fEQyKSU/gYRZUqJlLL3fNyljz02YNN+aPW6upGyIKWAREfLWw6HrULVIgsr2h+h5VB0RnyqCl8VaZg3iNlBgweeio=`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
  * Method: `GET`
  
  
  * Evidence: `bXRsaV9oZWlnaHQ9MTYmbXRsaV9pbWFnZV90eXBlPXBuZyZtdGxpX2xlZnRvcnJpZ2h0PWxlZnQ`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `ZdkexLMhuKkB8bgqJlLL3fNyljz02XXNkcrEULm2s5azC5Y4p8ri6yDMwJ8Gqizz3PXpJ8+25jb4hx7InMIRJNAM81U=`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>mtli_height=16&mtli_image_type=png&mtli_leftorright=left</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Charset Mismatch 
##### Informational (Low)
  
  
  
  
#### Description
<p>This check identifies responses where the HTTP Content-Type header declares a charset different from the charset defined by the body of the HTML or XML. When there's a charset mismatch between the HTTP header and content body Web browsers can be forced into an undesirable content-sniffing mode to determine the content's correct character set.</p><p></p><p>An attacker could manipulate content on the page to be interpreted in an encoding of their choice. For example, if an attacker can control content at the beginning of the page, they could inject script using UTF-7 encoded text and manipulate some browsers into interpreting that text.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fdossiers%2Fegalite-en-droits-et-dignite%2F](https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fdossiers%2Fegalite-en-droits-et-dignite%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fpublications%2F](https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fpublications%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fcommunique-bilan-du-grenelle-des-violences-conjugales-25-11-2020%2F](https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fcommunique-bilan-du-grenelle-des-violences-conjugales-25-11-2020%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fle-ministere%2Fbiographie-de-elisabeth-moreno%2F](https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fle-ministere%2Fbiographie-de-elisabeth-moreno%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fle-ministere%2Facteurs-et-partenaires%2F](https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fle-ministere%2Facteurs-et-partenaires%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fdossiers%2F](https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fdossiers%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fle-ministere%2Fcabinet-elisabeth-moreno%2F](https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fle-ministere%2Fcabinet-elisabeth-moreno%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fdossiers%2Fegalite-professionnelle%2F](https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fdossiers%2Fegalite-professionnelle%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fle-ministere%2Forganisation-du-ministere%2Factions-dispositifs-interministeriels%2F](https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fle-ministere%2Forganisation-du-ministere%2Factions-dispositifs-interministeriels%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fle-ministere%2F](https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fle-ministere%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2F](https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fle-ministere%2Forganisation-du-ministere%2F](https://www.egalite-femmes-hommes.gouv.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Fwww.egalite-femmes-hommes.gouv.fr%2Fle-ministere%2Forganisation-du-ministere%2F)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Force UTF-8 for all text content in both the HTTP header and meta tags in HTML or encoding declarations in XML.</p>
  
### Other information
<p>There was a charset mismatch between the HTTP Header and the XML encoding declaration: [UTF-8] and [null] do not match.</p>
  
### Reference
* http://code.google.com/p/browsersec/wiki/Part2#Character_set_handling_and_detection

  
#### CWE Id : 436
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
Instances: 9
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bSELECT\b and was detected in the element starting with: "<script> /* <![CDATA[ */var tribe_l10n_datatables = {"aria":{"sort_ascending":": activer pour trier la colonne ascendante","sort", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~default/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~default/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~http:/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
				</a>`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="mobile_toggle">
					<span class="mobile_button">
						Menu &nbsp;
						<span class="symbol_menu">&equiv;</span>
						<span class="symbol_cross">&#x2573;</span>
					</span><!-- class="mobile_button" -->
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml](https://www.egalite-femmes-hommes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/robots.txt](https://www.egalite-femmes-hommes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
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

  
  
  
  
### Storable but Non-Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, but will not be retrieved directly from the cache, without validating the request upstream, in response to similar requests from other users. </p>
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~oneday/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~week/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~undefined/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~month/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~agenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~stream/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/](https://www.egalite-femmes-hommes.gouv.fr/calendar/action~posterboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
Instances: 7
  
### Solution
<p></p>
  
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
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20180413`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1464714369`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `20160719`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `20160421`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1464714369`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20160719`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr/](https://www.egalite-femmes-hommes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20160421`
  
  
  
  
* URL: [https://www.egalite-femmes-hommes.gouv.fr](https://www.egalite-femmes-hommes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `20180413`
  
  
  
  
Instances: 8
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>20180413, which evaluates to: 1970-08-22 13:40:13</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
