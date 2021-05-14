
# ZAP Scanning Report

Generated on Mon, 29 Mar 2021 18:00:23


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 8 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 2 | 
| Sub Resource Integrity Attribute Missing | Medium | 11 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 1 | 
| Cookie Without SameSite Attribute | Low | 2 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 1 | 
| Dangerous JS Functions | Low | 5 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 11 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 11 | 
| Information Disclosure - Suspicious Comments | Informational | 9 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 7 | 
| Retrieved from Cache | Informational | 5 | 
| Storable and Cacheable Content | Informational | 3 | 
| Storable but Non-Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 23 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/](https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/](https://solidarites-sante.gouv.fr/actualites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/recherche-et-innovation/recherches-impliquant-la-personne-humaine/](https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/recherche-et-innovation/recherches-impliquant-la-personne-humaine/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/sante/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/sante/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr](https://solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/](https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/](https://solidarites-sante.gouv.fr/ministere/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/](https://solidarites-sante.gouv.fr/actualites/presse/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/)
  
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr](https://solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="site-associe__link link--site xiti_click" href="http://www.securite-sociale.fr/" title="Sécurité sociale" target="_blank" onclick="return ATTag.click.send({elem:this, name:'sites_associes_logo', level2:15, type:'action'});">
									<img src='local/cache-gd2/d1/5346e056e2a93cf330b7527fc4c3b1.png?1609442398' alt='S&#233;curit&#233; sociale' width='250' height='166.25' class='site-associe__visuel media-object' />
								</a>`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="site-associe__link link--site xiti_click" href="http://www.securite-sociale.fr/" title="Sécurité sociale" target="_blank" onclick="return ATTag.click.send({elem:this, name:'sites_associes_logo', level2:15, type:'action'});">
									<img src='local/cache-gd2/d1/5346e056e2a93cf330b7527fc4c3b1.png?1609442398' alt='S&#233;curit&#233; sociale' width='250' height='166.25' class='site-associe__visuel media-object' />
								</a>`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/](https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/](https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/](https://solidarites-sante.gouv.fr/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/](https://solidarites-sante.gouv.fr/ministere/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr](https://solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/recherche-et-innovation/recherches-impliquant-la-personne-humaine/](https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/recherche-et-innovation/recherches-impliquant-la-personne-humaine/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/](https://solidarites-sante.gouv.fr/actualites/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/sante/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/sante/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet" />`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/](https://solidarites-sante.gouv.fr/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/](https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/](https://solidarites-sante.gouv.fr/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method='post' action='/actualites/#' name="formulaire_filtrer_articles" id="formulaire_filtrer_articles">`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/](https://solidarites-sante.gouv.fr/ministere/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/](https://solidarites-sante.gouv.fr/actualites/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/](https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method='post' action='/actualites/presse/communiques-de-presse/#' name="formulaire_filtrer_articles" id="formulaire_filtrer_articles">`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/](https://solidarites-sante.gouv.fr/actualites/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method='post' action='/actualites/presse/#' name="formulaire_filtrer_articles" id="formulaire_filtrer_articles">`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr](https://solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/](https://solidarites-sante.gouv.fr/ministere/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method='post' action='/ministere/#' name="formulaire_filtrer_articles" id="formulaire_filtrer_articles">`
  
  
  
  
Instances: 11
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "page" "recherche" ].</p>
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ecrire/](https://solidarites-sante.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 70 [https://solidarites-sante.gouv.fr/spip.php?page=login&url=%2Fecrire%2F].</p><p>Predicted response size: 370.</p><p>Response Body Length: 441.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/sitemap.xml](https://solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-portail-dares.cegedim.cloud-HTTP`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://platform.twitter.com/widgets.js`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr](https://solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/le-ministre-la-ministre-deleguee-et-le-secretaire-d-etat/](https://solidarites-sante.gouv.fr/ministere/le-ministre-la-ministre-deleguee-et-le-secretaire-d-etat/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/acteurs/instances-rattachees/conference-nationale-de-sante/](https://solidarites-sante.gouv.fr/ministere/acteurs/instances-rattachees/conference-nationale-de-sante/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/](https://solidarites-sante.gouv.fr/affaires-sociales/lutte-contre-l-exclusion/lutte-pauvrete-gouv-fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/](https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/](https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/](https://solidarites-sante.gouv.fr/ministere/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/](https://solidarites-sante.gouv.fr/actualites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/recherche-et-innovation/recherches-impliquant-la-personne-humaine/](https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/recherche-et-innovation/recherches-impliquant-la-personne-humaine/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr](https://solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/sante/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/sante/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/](https://solidarites-sante.gouv.fr/actualites/presse/)
  
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/robots.txt](https://solidarites-sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/](https://solidarites-sante.gouv.fr/actualites/presse/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/sitemap.xml](https://solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, must-revalidate`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/](https://solidarites-sante.gouv.fr/actualites/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/](https://solidarites-sante.gouv.fr/ministere/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr](https://solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/](https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/sante/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/sante/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/lib/](https://solidarites-sante.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/prive/](https://solidarites-sante.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/plugins/](https://solidarites-sante.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/squelettes/](https://solidarites-sante.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/cache-js/](https://solidarites-sante.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/plugins-dist/](https://solidarites-sante.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/cache-gd2/](https://solidarites-sante.gouv.fr/local/cache-gd2/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/](https://solidarites-sante.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/cache-vignettes/](https://solidarites-sante.gouv.fr/local/cache-vignettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/cache-css/](https://solidarites-sante.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/squelettes-dist/](https://solidarites-sante.gouv.fr/squelettes-dist/)
  
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/](https://solidarites-sante.gouv.fr/ministere/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/sitemap.xml](https://solidarites-sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `QJPWp8be08tTc3UqJlLL3fNyljz02Z6Vjfp4e13bqUQj35Yn4t7bguJlsmJUWoQ+gns1WiDiI2zlf+2lL4sY7CvYFGE=`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/](https://solidarites-sante.gouv.fr/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/](https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr](https://solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/recherche-et-innovation/recherches-impliquant-la-personne-humaine/](https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/recherche-et-innovation/recherches-impliquant-la-personne-humaine/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/sante/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/sante/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/](https://solidarites-sante.gouv.fr/actualites/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `50NGeQMU5ZOq5g8qJlLL3fNyljz02f3YYNI7fHML7P9jU2QdVoCIqL2LQfyUEaZ28EOIJ5U+MPxMhm/ec5JjGJmJmPs=`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>��?M\x001f�٥���\x000f�a�iu��k��</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://solidarites-sante.gouv.fr/prive/](https://solidarites-sante.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/lib/](https://solidarites-sante.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/squelettes-dist/](https://solidarites-sante.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/cache-vignettes/](https://solidarites-sante.gouv.fr/local/cache-vignettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/cache-css/](https://solidarites-sante.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/](https://solidarites-sante.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/plugins/](https://solidarites-sante.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/cache-gd2/](https://solidarites-sante.gouv.fr/local/cache-gd2/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/cache-js/](https://solidarites-sante.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/squelettes/](https://solidarites-sante.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/plugins-dist/](https://solidarites-sante.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr](https://solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/](https://solidarites-sante.gouv.fr/actualites/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/](https://solidarites-sante.gouv.fr/actualites/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `From`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr](https://solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `From`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/](https://solidarites-sante.gouv.fr/actualites/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr](https://solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `From`
  
  
  
  
Instances: 9
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected in the element starting with: "<script type="text/javascript">tarteaucitron.user.atLibUrl = '586774';</p><p>tarteaucitron.user.atMore = function () { /* add here you", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/](https://solidarites-sante.gouv.fr/actualites/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/](https://solidarites-sante.gouv.fr/ministere/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/recherche-et-innovation/recherches-impliquant-la-personne-humaine/](https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/recherche-et-innovation/recherches-impliquant-la-personne-humaine/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/sante/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/rapports/sante/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/](https://solidarites-sante.gouv.fr/actualites/presse/communiques-de-presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr](https://solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/actualites/](https://solidarites-sante.gouv.fr/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/](https://solidarites-sante.gouv.fr/ministere/documentation-et-publications-officielles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/](https://solidarites-sante.gouv.fr/systeme-de-sante-et-medico-social/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="recherche"></a>`
  
  
  
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/](https://solidarites-sante.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/cache-css/](https://solidarites-sante.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/cache-vignettes/](https://solidarites-sante.gouv.fr/local/cache-vignettes/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/cache-gd2/](https://solidarites-sante.gouv.fr/local/cache-gd2/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/plugins-dist/](https://solidarites-sante.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/ecrire/](https://solidarites-sante.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/local/cache-js/](https://solidarites-sante.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
Instances: 7
  
### Solution
<p>The content may be marked as storable by ensuring that the following conditions are satisfied:</p><p>The request method must be understood by the cache and defined as being cacheable ("GET", "HEAD", and "POST" are currently defined as cacheable)</p><p>The response status code must be understood by the cache (one of the 1XX, 2XX, 3XX, 4XX, or 5XX response classes are generally understood)</p><p>The "no-store" cache directive must not appear in the request or response header fields</p><p>For caching by "shared" caches such as "proxy" caches, the "private" response directive must not appear in the response</p><p>For caching by "shared" caches such as "proxy" caches, the "Authorization" header field must not appear in the request, unless the response explicitly allows it (using one of the "must-revalidate", "public", or "s-maxage" Cache-Control response directives)</p><p>In addition to the conditions above, at least one of the following conditions must also be satisfied by the response:</p><p>It must contain an "Expires" header field</p><p>It must contain a "max-age" response directive</p><p>For "shared" caches such as "proxy" caches, it must contain a "s-maxage" response directive</p><p>It must contain a "Cache Control Extension" that allows it to be cached</p><p>It must have a status code that is defined as cacheable by default (200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501).   </p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### CWE Id : 524
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Retrieved from Cache
##### Informational (Medium)
  
  
  
  
#### Description
<p>The content was retrieved from a shared cache. If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance. </p>
  
  
  
* URL: [https://solidarites-sante.gouv.fr](https://solidarites-sante.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 262`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/soins-et-maladies/maladies/maladies-infectieuses/coronavirus/](https://solidarites-sante.gouv.fr/soins-et-maladies/maladies/maladies-infectieuses/coronavirus/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 5`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/affaires-sociales/personnes-agees/](https://solidarites-sante.gouv.fr/affaires-sociales/personnes-agees/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 178`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/robots.txt](https://solidarites-sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 257`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 263`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/robots.txt](https://solidarites-sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr](https://solidarites-sante.gouv.fr)
  
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/sitemap.xml](https://solidarites-sante.gouv.fr/sitemap.xml)
  
  
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
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616004000`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609442557`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609442372`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616499807`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615800361`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1607589169`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1610472957`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609442371`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1617038984`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1612432083`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615276389`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615822428`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609442396`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1617032833`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609442397`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609442383`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609442375`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609442398`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1617032828`
  
  
  
  
* URL: [https://solidarites-sante.gouv.fr/](https://solidarites-sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615472787`
  
  
  
  
Instances: 23
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1616004000, which evaluates to: 2021-03-17 18:00:00</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
