
# ZAP Scanning Report

Generated on Tue, 31 Aug 2021 22:04:20


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 9 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 12 | 
| Sub Resource Integrity Attribute Missing | Medium | 12 | 
| Vulnerable JS Library | Medium | 2 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 12 | 
| Cookie without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 12 | 
| Dangerous JS Functions | Low | 6 | 
| Incomplete or No Cache-control Header Set | Low | 11 | 
| Permissions Policy Header Not Set | Low | 11 | 
| Secure Pages Include Mixed Content | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 12 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 6 | 
| Storable and Cacheable Content | Informational | 4 | 
| Storable but Non-Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 13 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 6 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://jeunes.gouv.fr/-Communiques-de-M-Blanquer-](https://jeunes.gouv.fr/-Communiques-de-M-Blanquer-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Presse-](https://jeunes.gouv.fr/-Presse-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Equipe-ministerielle-](https://jeunes.gouv.fr/-Equipe-ministerielle-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Actions-ministerielles-](https://jeunes.gouv.fr/-Actions-ministerielles-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-9424](https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-9424)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/extensions/](https://jeunes.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Publications-](https://jeunes.gouv.fr/-Publications-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd](https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Missions-et-organisation-](https://jeunes.gouv.fr/-Missions-et-organisation-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/-Publications-](https://jeunes.gouv.fr/-Publications-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/share.php?u=https://jeunes.gouv.fr/-Publications-" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/L-entree-en-seconde-en-2019-une](https://jeunes.gouv.fr/L-entree-en-seconde-en-2019-une)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/share.php?u=https://jeunes.gouv.fr/L-entree-en-seconde-en-2019-une" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Equipe-ministerielle-](https://jeunes.gouv.fr/-Equipe-ministerielle-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/share.php?u=https://jeunes.gouv.fr/-Equipe-ministerielle-" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Missions-et-organisation-](https://jeunes.gouv.fr/-Missions-et-organisation-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/share.php?u=https://jeunes.gouv.fr/-Missions-et-organisation-" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Parcoursup-ouverture-du-site-d](https://jeunes.gouv.fr/Parcoursup-ouverture-du-site-d)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/share.php?u=https://jeunes.gouv.fr/Parcoursup-ouverture-du-site-d" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Communiques-de-M-Blanquer-](https://jeunes.gouv.fr/-Communiques-de-M-Blanquer-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="btn-inscrire" title="Ouvrir les alertes presse de sports.gouv.fr, nouvelle fenêtre" target="_blank" href="http://www.sports.gouv.fr/presse/#sl-inscription">S'INSCRIRE</a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd](https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043575274" target="_blank"> Le décret n&#176;&nbsp;2021-699 du 1er juin 2021 </a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-8831](https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-8831)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/share.php?u=https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-8831" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Journee-nationale-de-lutte-contre](https://jeunes.gouv.fr/Journee-nationale-de-lutte-contre)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/share.php?u=https://jeunes.gouv.fr/Journee-nationale-de-lutte-contre" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Actions-ministerielles-](https://jeunes.gouv.fr/-Actions-ministerielles-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/share.php?u=https://jeunes.gouv.fr/-Actions-ministerielles-" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-9424](https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-9424)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/share.php?u=https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-9424" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Presse-](https://jeunes.gouv.fr/-Presse-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="btn-inscrire" title="Ouvrir les alertes presse de sports.gouv.fr, nouvelle fenêtre" target="_blank" href="http://www.sports.gouv.fr/presse/#sl-inscription">S'INSCRIRE</a>`
  
  
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/-Organisation-du-ministere-1104-](https://jeunes.gouv.fr/-Organisation-du-ministere-1104-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Publications-](https://jeunes.gouv.fr/-Publications-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Missions-et-organisation-](https://jeunes.gouv.fr/-Missions-et-organisation-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Actions-ministerielles-](https://jeunes.gouv.fr/-Actions-ministerielles-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Accueils-collectifs-de-mineurs-1109-](https://jeunes.gouv.fr/-Accueils-collectifs-de-mineurs-1109-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-coj-](https://jeunes.gouv.fr/-coj-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-A-la-Une-](https://jeunes.gouv.fr/-A-la-Une-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Equipe-ministerielle-](https://jeunes.gouv.fr/-Equipe-ministerielle-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-COLO-1182-](https://jeunes.gouv.fr/-COLO-1182-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Ressources-1171-](https://jeunes.gouv.fr/-Ressources-1171-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Vacances-et-loisirs-collectifs-1108-](https://jeunes.gouv.fr/-Vacances-et-loisirs-collectifs-1108-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Travaux-](https://jeunes.gouv.fr/-Travaux-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
Instances: 12
  
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
<p>The identified library jquery, version 1.4.2 is vulnerable.</p>
  
  
  
* URL: [https://jeunes.gouv.fr/squelettes/javascript/jquery-1.4.2.js](https://jeunes.gouv.fr/squelettes/javascript/jquery-1.4.2.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `jquery-1.4.2.js`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.js?1622726660](https://jeunes.gouv.fr/prive/javascript/jquery.js?1622726660)
  
  
  * Method: `GET`
  
  
  * Evidence: `* jQuery JavaScript Library v3.2.1`
  
  
  
  
Instances: 2
  
### Solution
<p>Please upgrade to the latest version of jquery.</p>
  
### Other information
<p>CVE-2011-4969</p><p>CVE-2020-11023</p><p>CVE-2020-11022</p><p>CVE-2015-9251</p><p>CVE-2019-11358</p><p>CVE-2012-6708</p><p></p>
  
### Reference
* https://nvd.nist.gov/vuln/detail/CVE-2012-6708
* https://github.com/jquery/jquery/issues/2432
* http://research.insecurelabs.org/jquery/test/
* https://bugs.jquery.com/ticket/9521
* http://blog.jquery.com/2016/01/08/jquery-2-2-and-1-12-released/
* http://bugs.jquery.com/ticket/11290
* https://blog.jquery.com/2019/04/10/jquery-3-4-0-released/
* https://nvd.nist.gov/vuln/detail/CVE-2019-11358
* https://nvd.nist.gov/vuln/detail/CVE-2015-9251
* https://github.com/jquery/jquery/commit/753d591aea698e57d6db58c9f722cd0808619b1b
* https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/
* https://nvd.nist.gov/vuln/detail/CVE-2011-4969
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://jeunes.gouv.fr/-Presse-](https://jeunes.gouv.fr/-Presse-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Missions-et-organisation-](https://jeunes.gouv.fr/-Missions-et-organisation-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Communiques-de-M-Blanquer-](https://jeunes.gouv.fr/-Communiques-de-M-Blanquer-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd](https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/extensions/](https://jeunes.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Actions-ministerielles-](https://jeunes.gouv.fr/-Actions-ministerielles-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Publications-](https://jeunes.gouv.fr/-Publications-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Equipe-ministerielle-](https://jeunes.gouv.fr/-Equipe-ministerielle-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-9424](https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-9424)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
Instances: 11
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "page" "search-text" ].</p>
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/Bulletin-Officiel-de-la-Jeunesse](https://jeunes.gouv.fr/Bulletin-Officiel-de-la-Jeunesse)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Ministere-3406](https://jeunes.gouv.fr/Ministere-3406)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Vacances-et-loisirs-collectifs](https://jeunes.gouv.fr/Vacances-et-loisirs-collectifs)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/ecrire/](https://jeunes.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Organisation-du-ministere](https://jeunes.gouv.fr/Organisation-du-ministere)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Concours-et-recrutement](https://jeunes.gouv.fr/Concours-et-recrutement)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Ressources](https://jeunes.gouv.fr/Ressources)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Statistiques](https://jeunes.gouv.fr/Statistiques)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Soutien-aux-associations-de](https://jeunes.gouv.fr/Soutien-aux-associations-de)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Fonds-d-experimentation-pour-la](https://jeunes.gouv.fr/Fonds-d-experimentation-pour-la)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Information-des-jeunes](https://jeunes.gouv.fr/Information-des-jeunes)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Rapport](https://jeunes.gouv.fr/Rapport)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 61 [https://jeunes.gouv.fr/-Bulletin-Officiel-de-la-Jeunesse-215-].</p><p>Predicted response size: 361.</p><p>Response Body Length: 428.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://jeunes.gouv.fr/robots.txt](https://jeunes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-jeunes.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-jeunes.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-jeunes.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-jeunes.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-jeunes.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-jeunes.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/-Publications-](https://jeunes.gouv.fr/-Publications-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Accueils-collectifs-de-mineurs-1109-](https://jeunes.gouv.fr/-Accueils-collectifs-de-mineurs-1109-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-COLO-1182-](https://jeunes.gouv.fr/-COLO-1182-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Ressources-1171-](https://jeunes.gouv.fr/-Ressources-1171-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Equipe-ministerielle-](https://jeunes.gouv.fr/-Equipe-ministerielle-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Vacances-et-loisirs-collectifs-1108-](https://jeunes.gouv.fr/-Vacances-et-loisirs-collectifs-1108-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Travaux-](https://jeunes.gouv.fr/-Travaux-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Actions-ministerielles-](https://jeunes.gouv.fr/-Actions-ministerielles-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Organisation-du-ministere-1104-](https://jeunes.gouv.fr/-Organisation-du-ministere-1104-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-A-la-Une-](https://jeunes.gouv.fr/-A-la-Une-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-coj-](https://jeunes.gouv.fr/-coj-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Missions-et-organisation-](https://jeunes.gouv.fr/-Missions-et-organisation-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1622726660](https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1622726660)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://jeunes.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1622726660](https://jeunes.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1622726660)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://jeunes.gouv.fr/plugins/tarteaucitron/lib/tarteaucitron/tarteaucitron.js](https://jeunes.gouv.fr/plugins/tarteaucitron/lib/tarteaucitron/tarteaucitron.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/ajaxCallback.js?1622726660](https://jeunes.gouv.fr/prive/javascript/ajaxCallback.js?1622726660)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.js?1622726660](https://jeunes.gouv.fr/prive/javascript/jquery.js?1622726660)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://jeunes.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-3f2fbcf8.js?1630394996](https://jeunes.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-3f2fbcf8.js?1630394996)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd](https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Actions-ministerielles-](https://jeunes.gouv.fr/-Actions-ministerielles-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/extensions/](https://jeunes.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Publications-](https://jeunes.gouv.fr/-Publications-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/robots.txt](https://jeunes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Equipe-ministerielle-](https://jeunes.gouv.fr/-Equipe-ministerielle-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Presse-](https://jeunes.gouv.fr/-Presse-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/sitemap.xml](https://jeunes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, must-revalidate`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Missions-et-organisation-](https://jeunes.gouv.fr/-Missions-et-organisation-)
  
  
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

  
  
  
  
### Permissions Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Permissions Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Permissions Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://jeunes.gouv.fr/-Actions-ministerielles-](https://jeunes.gouv.fr/-Actions-ministerielles-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/extensions/](https://jeunes.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Communiques-de-M-Blanquer-](https://jeunes.gouv.fr/-Communiques-de-M-Blanquer-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-9424](https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-9424)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Equipe-ministerielle-](https://jeunes.gouv.fr/-Equipe-ministerielle-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Missions-et-organisation-](https://jeunes.gouv.fr/-Missions-et-organisation-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd](https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Publications-](https://jeunes.gouv.fr/-Publications-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Presse-](https://jeunes.gouv.fr/-Presse-)
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/En-Allemagne](https://jeunes.gouv.fr/En-Allemagne)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/embed/video/xns7ex`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Interruption-volontaire-de](https://jeunes.gouv.fr/Interruption-volontaire-de)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.jeunes.gouv.fr//IMG/UserFiles/Images/infographie-ivg_2017-f4429.jpg`
  
  
  
  
* URL: [https://jeunes.gouv.fr/anouslacolo](https://jeunes.gouv.fr/anouslacolo)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.jeunes.gouv.fr//IMG/UserFiles/Images/Kake_colos2018_DECOUVERTE.jpg`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Accueils-collectifs-de-mineurs-6234](https://jeunes.gouv.fr/Accueils-collectifs-de-mineurs-6234)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://jeunes.gouv.fr/prive/vignettes/defaut.png?docid=7607&doctype=doc`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Accueils-collectifs-de-mineurs-ACM](https://jeunes.gouv.fr/Accueils-collectifs-de-mineurs-ACM)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://3452220.fls.doubleclick.net/activityi;src=3452220;type=jeune105;cat=2013-570;ord=1;num=9637804840935.812?`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Nature-et-agriculture](https://jeunes.gouv.fr/Nature-et-agriculture)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/embed/video/xfs2fi`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Informations-Brexit](https://jeunes.gouv.fr/Informations-Brexit)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.jeunes.gouv.fr//IMG/UserFiles/Images/brexit_logo_couleur_rvb.jpg`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Internats](https://jeunes.gouv.fr/Internats)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/embed/video/xhrf63`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Creer-son-entreprise](https://jeunes.gouv.fr/Creer-son-entreprise)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/embed/video/xbenah`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Centres-et-acteurs](https://jeunes.gouv.fr/Centres-et-acteurs)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/embed/video/xewda3`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Creation-d-un-guide-a-l-attention](https://jeunes.gouv.fr/Creation-d-un-guide-a-l-attention)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.jeunes.gouv.fr//IMG/UserFiles/Images/Capture d’écran 2019-05-23 à 18.31.01.png`
  
  
  
  
Instances: 11
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=iframe src=http://www.dailymotion.com/embed/video/xns7ex</p><p>tag=iframe src=http://www.dailymotion.com/embed/video/xns7ex</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://jeunes.gouv.fr/Quelles-formations](https://jeunes.gouv.fr/Quelles-formations)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/squelettes-dist/](https://jeunes.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Enseignements-europeens-et](https://jeunes.gouv.fr/Enseignements-europeens-et)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Nouveau-lycee](https://jeunes.gouv.fr/Nouveau-lycee)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/local/](https://jeunes.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Portea-le-portail-de-l](https://jeunes.gouv.fr/Portea-le-portail-de-l)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/plugins/](https://jeunes.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/squelettes/](https://jeunes.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/](https://jeunes.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/lib/](https://jeunes.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Orientation-active](https://jeunes.gouv.fr/Orientation-active)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Le-socle-commun-de-connaissances](https://jeunes.gouv.fr/Le-socle-commun-de-connaissances)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Deplacement-de-Jean-Michel-9424`
  
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `jL3X8dVCDYqVhfUqJlLL3fNyljz02ZfQS0Bxhwf0ENOVy7XRjUnMZuijf0qyZvfFhh/zV/Ksh/o4e8Ni8deLYBlJNzI=`
  
  
  
  
* URL: [https://jeunes.gouv.fr/robots.txt](https://jeunes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `b5hscWCz932/rLgqJlLL3fNyljz02TcZm3U+nIO4cstsD5rA7KUmC1nvL3sErpmjiHbRGqpYMRHP/XY81VltEh5wQCU=`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Missions-et-organisation-](https://jeunes.gouv.fr/-Missions-et-organisation-)
  
  
  * Method: `GET`
  
  
  * Evidence: `Deplacement-de-Jean-Michel-9424`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Actions-ministerielles-](https://jeunes.gouv.fr/-Actions-ministerielles-)
  
  
  * Method: `GET`
  
  
  * Evidence: `Deplacement-de-Jean-Michel-9424`
  
  
  
  
* URL: [https://jeunes.gouv.fr/extensions/](https://jeunes.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Deplacement-de-Jean-Michel-9424`
  
  
  
  
* URL: [https://jeunes.gouv.fr/sitemap.xml](https://jeunes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/-Vacances-et-loisirs-collectifs-1108-`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/xEtzPbeSMxxWCQqJlLL3fNyljz02bhFuUS3wR3y4V6g5vZHNUVe3b3F5Xr1MCahKd6z/VCz7gaMnEsL5Q5UJxxvheY=`
  
  
  
  
* URL: [https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd](https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/jorf/article_jo/JORFARTI000043575274`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Concours-et-recrutement](https://jeunes.gouv.fr/Concours-et-recrutement)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/-Concours-et-recrutement-416-`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Vacances-et-loisirs-collectifs](https://jeunes.gouv.fr/Vacances-et-loisirs-collectifs)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/-Vacances-et-loisirs-collectifs-1108-`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Equipe-ministerielle-](https://jeunes.gouv.fr/-Equipe-ministerielle-)
  
  
  * Method: `GET`
  
  
  * Evidence: `Deplacement-de-Jean-Michel-9424`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>
�eiǦz{~u�y��2'!z_��n</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://jeunes.gouv.fr/prive/](https://jeunes.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/lib/](https://jeunes.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Le-socle-commun-de-connaissances](https://jeunes.gouv.fr/Le-socle-commun-de-connaissances)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Quelles-formations](https://jeunes.gouv.fr/Quelles-formations)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/squelettes-dist/](https://jeunes.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/plugins/](https://jeunes.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Portea-le-portail-de-l](https://jeunes.gouv.fr/Portea-le-portail-de-l)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/squelettes/](https://jeunes.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Orientation-active](https://jeunes.gouv.fr/Orientation-active)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/local/](https://jeunes.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Enseignements-europeens-et](https://jeunes.gouv.fr/Enseignements-europeens-et)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Nouveau-lycee](https://jeunes.gouv.fr/Nouveau-lycee)
  
  
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
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://jeunes.gouv.fr/extensions/](https://jeunes.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Actions-ministerielles-](https://jeunes.gouv.fr/-Actions-ministerielles-)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Presse-](https://jeunes.gouv.fr/-Presse-)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Missions-et-organisation-](https://jeunes.gouv.fr/-Missions-et-organisation-)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Publications-](https://jeunes.gouv.fr/-Publications-)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd](https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Communiques-de-M-Blanquer-](https://jeunes.gouv.fr/-Communiques-de-M-Blanquer-)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-9424](https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-9424)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Equipe-ministerielle-](https://jeunes.gouv.fr/-Equipe-ministerielle-)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected in the element starting with: "<script type="text/javascript">tarteaucitron.user.xitiId = '485183';</p><p>tarteaucitron.user.xitiMore = function () {};</p><p>(tarteaucitro", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Equipe-ministerielle-](https://jeunes.gouv.fr/-Equipe-ministerielle-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-9424](https://jeunes.gouv.fr/Deplacement-de-Jean-Michel-9424)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Actions-ministerielles-](https://jeunes.gouv.fr/-Actions-ministerielles-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Publications-](https://jeunes.gouv.fr/-Publications-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Missions-et-organisation-](https://jeunes.gouv.fr/-Missions-et-organisation-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/extensions/](https://jeunes.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a title='Etudes et Formations'>Etudes et Formations</a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Presse-](https://jeunes.gouv.fr/-Presse-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/-Communiques-de-M-Blanquer-](https://jeunes.gouv.fr/-Communiques-de-M-Blanquer-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd](https://jeunes.gouv.fr/protocole-sanitaire-acm-session-bafa-bafd)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/lib/](https://jeunes.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://jeunes.gouv.fr/local/](https://jeunes.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://jeunes.gouv.fr/plugins/](https://jeunes.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://jeunes.gouv.fr/squelettes-dist/](https://jeunes.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/](https://jeunes.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://jeunes.gouv.fr/ecrire/](https://jeunes.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/robots.txt](https://jeunes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/extensions/](https://jeunes.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/sitemap.xml](https://jeunes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1622726660`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1630395003`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1630394993`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1626679138`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1625129300`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1622454035`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1625820527`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1629798975`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1613643925`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1630394996`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1626102302`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1630394992`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1576775137`
  
  
  
  
Instances: 13
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1622726660, which evaluates to: 2021-06-03 13:24:20</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://jeunes.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://jeunes.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://jeunes.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://jeunes.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://jeunes.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://jeunes.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
Instances: 6
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://jeunes.gouv.fr/spip.php?page=recherche&recherche=Rechercher</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [name] attribute </p><p></p><p>The user input found was:</p><p>page=recherche</p><p></p><p>The user-controlled value was:</p><p>recherche</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
