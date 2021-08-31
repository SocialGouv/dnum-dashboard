
# ZAP Scanning Report

Generated on Tue, 31 Aug 2021 21:28:13


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 10 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 12 | 
| Sub Resource Integrity Attribute Missing | Medium | 1 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 12 | 
| Cookie without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 2 | 
| Dangerous JS Functions | Low | 5 | 
| Incomplete or No Cache-control Header Set | Low | 11 | 
| Permissions Policy Header Not Set | Low | 11 | 
| Private IP Disclosure | Low | 1 | 
| Secure Pages Include Mixed Content | Low | 12 | 
| Strict-Transport-Security Header Not Set | Low | 9 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 9 | 
| Information Disclosure - Suspicious Comments | Informational | 19 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 8 | 
| Storable and Cacheable Content | Informational | 3 | 
| Timestamp Disclosure - Unix | Informational | 6 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 15 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-chronologiques/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-chronologiques/)
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.haut-conseil-egalite.gouv.fr/IMG/pdf/avis_hce_sur_loi_audiovisuel.pdf" class="pdf" title="Avis - La loi sur l&#039;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko) (nouvelle fenêtre)" target="_blank">
					          Avis - La loi sur l&#8217;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko)
					        </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/education/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/education/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000259787&amp;dateTexte=&amp;categorieLien=id" class="lien-rj lien-rj-c1" title="LOI n&#176; 2005-380 du 23 avril 2005 d&#039;orientation et de programme pour l&#039;avenir de l&#039;&#233;cole | Legifrance (HTML – 81.6 ko) (nouvelle fenêtre)" target="_blank">
				    <img src="squelettes/img/drapeaux/drapeau_france.gif" class="drapeau" alt="" />
				    Loi n&#176;&nbsp;2005-380 du 23 avril 2005 d&#8217;orientation et de programme pour l&#8217;avenir de l&#8217;école 
				  </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.haut-conseil-egalite.gouv.fr/IMG/pdf/avis_hce_sur_loi_audiovisuel.pdf" class="pdf" title="Avis - La loi sur l&#039;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko) (nouvelle fenêtre)" target="_blank">
					          Avis - La loi sur l&#8217;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko)
					        </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.haut-conseil-egalite.gouv.fr/IMG/pdf/avis_hce_sur_loi_audiovisuel.pdf" class="pdf" title="Avis - La loi sur l&#039;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko) (nouvelle fenêtre)" target="_blank">
				          Avis - La loi sur l&#8217;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko)
				        </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/cadres-de-la-politique-publique/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/cadres-de-la-politique-publique/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000423967" class="lien-rj lien-rj-c1" title="D&#233;tail d&#039;un texte (HTML – 61.9 ko) (nouvelle fenêtre)" target="_blank">
				    <img src="squelettes/img/drapeaux/drapeau_france.gif" class="drapeau" alt="" />
				    Loi n&#176;2004-1486 du 30 décembre 2004 portant création de la haute autorité de lutte contre les discriminations et pour l’égalité (consolidée)
				  </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/image-des-femmes/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/image-des-femmes/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2010:095:0001:0024:FR:PDF" class="lien-rj lien-rj-c1" title="LexUriServ.do?uri=OJ:L:2010:095:0001:0024:FR:PDF (PDF – 908.6 ko) (nouvelle fenêtre)" target="_blank">
				    <img src="squelettes/img/drapeaux/drapeau_eu.gif" class="drapeau" alt="" />
				    Directive 2010/13/UE du Parlement européen et du Conseil du 10 mars 2010 visant à la coordination de certaines dispositions législatives, réglementaires et administratives des Etats membres relatives à la fourniture de services de médias audiovisuels (directive dite &#171;&nbsp;services de médias audiovisuels&nbsp;&#187;)
				  </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/elections-municipales-et-communautaires-sans-obligations-paritaires-le-pouvoir](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/elections-municipales-et-communautaires-sans-obligations-paritaires-le-pouvoir)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.haut-conseil-egalite.gouv.fr/IMG/pdf/hce_-_vigilance_egalite_10_sur_les_intercommunalites_13_novembre_2020.pdf" target="_blank"><strong>Lire la Vigilance</strong></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.assemblee-nationale.fr/commissions/delf-index.asp" title="Assembl&#233;e Nationale - D&#233;l&#233;gation aux droits des femmes (nouvelle fenêtre)" target="_blank">
				  <img src='local/cache-vignettes/L75xH69/an-2-9977c-dc254.gif?1572271946' width='75' height='69' alt='' class='spip_logo spip_logos' />
				</a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/reperes-juridiques/](https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/reperes-juridiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000423967" class="lien-rj lien-rj-c" title="D&#233;tail d&#039;un texte (HTML – 61.9 ko) (nouvelle fenêtre)" target="_blank">
				    <img src="squelettes/img/drapeaux/drapeau_france.gif" class="drapeau" alt="" />
				    Loi n&#176;2004-1486 du 30 décembre 2004 portant création de la haute autorité de lutte contre les discriminations et pour l’égalité (consolidée)
				  </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/famille-et-droit-patrimonial/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/famille-et-droit-patrimonial/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.legifrance.gouv.fr/affichTexte.do;jsessionid=1BEC14C5A3602DA91FD146FA48BFD0C2.tpdjo06v_2?cidTexte=JORFTEXT000021984900&amp;categorieLien=id" class="lien-rj lien-rj-c1" title="Directive 2010/18/UE du Conseil portant application de l&#039;accord-cadre r&#233;vis&#233; sur le cong&#233; parental conclu par BUSINESSEUROPE, l&#039;UEAPME, le CEEP et la CES et abrogeant la directive 96/34/CE | Legifrance (HTML – 11.9 ko) (nouvelle fenêtre)" target="_blank">
				    <img src="squelettes/img/drapeaux/drapeau_eu.gif" class="drapeau" alt="" />
				    Directive 2010/18/UE du Conseil du 08 mars 2010 portant application de l’accord-cadre révisé sur le congé parental conclu par BusinessEurope, l’UEAPME, le CEEP et la CES et abrogeant la directive 96/34/CE 
				  </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000423967" class="lien-rj lien-rj-c1" title="D&#233;tail d&#039;un texte (HTML – 61.9 ko) (nouvelle fenêtre)" target="_blank">
				    <img src="squelettes/img/drapeaux/drapeau_france.gif" class="drapeau" alt="" />
				    Loi n&#176;2004-1486 du 30 décembre 2004 portant création de la haute autorité de lutte contre les discriminations et pour l’égalité (consolidée)
				  </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/presidente/article/danielle-bousquet-ancienne-presidente](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/presidente/article/danielle-bousquet-ancienne-presidente)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000026909413&amp;dateTexte=&amp;categorieLien=id" target="_blank">arrêté du 8 janvier 2013</a>`
  
  
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-l-election-des](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-l-election-des)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="http://e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
Instances: 1
  
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
<p>The identified library jquery, version 3.2.1 is vulnerable.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `* jQuery JavaScript Library v3.2.1`
  
  
  
  
Instances: 1
  
### Solution
<p>Please upgrade to the latest version of jquery.</p>
  
### Other information
<p>CVE-2020-11023</p><p>CVE-2020-11022</p><p>CVE-2019-11358</p><p></p>
  
### Reference
* https://blog.jquery.com/2019/04/10/jquery-3-4-0-released/
* https://nvd.nist.gov/vuln/detail/CVE-2019-11358
* https://github.com/jquery/jquery/commit/753d591aea698e57d6db58c9f722cd0808619b1b
* https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="resultats-recherche.html" method="get" class="form-search" id="form_search">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/liens-utiles/" method="get" class="form-filter pas_surlignable">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="resultats-recherche.html" method="get" class="form-search" id="form_search">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="resultats-recherche.html" method="get" class="form-search" id="form_search">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form_send" name="form_send" method="post" action="/liens-utiles/#" enctype="multipart/form-data">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form_send" name="form_send" method="post" action="/#" enctype="multipart/form-data">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form_send" name="form_send" method="post" action="/faq/#" enctype="multipart/form-data">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form_send" name="form_send" method="post" action="/#" enctype="multipart/form-data">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="resultats-recherche.html" method="get" class="form-search" id="form_search">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/faq/" method="get" class="form-filter">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="resultats-recherche.html" method="get" class="form-search" id="form_search">`
  
  
  
  
Instances: 11
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "search" ].</p>
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communique-de-presse-2020](https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communique-de-presse-2020)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/acces-reserves.html](https://haut-conseil-egalite.gouv.fr/acces-reserves.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/a-la-rencontre-des-associations/article/a-la-rencontre-des-associations](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/a-la-rencontre-des-associations/article/a-la-rencontre-des-associations)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/](https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/pied-de-page/offres-d-emploi/](https://haut-conseil-egalite.gouv.fr/pied-de-page/offres-d-emploi/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/presidente/article/a-la-rencontre-des-associations-1627](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/presidente/article/a-la-rencontre-des-associations-1627)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/pied-de-page/offres-d-emploi/fiches-de-poste-150/article/le-haut-conseil-a-l-egalite-entre-les-femmes-et](https://haut-conseil-egalite.gouv.fr/pied-de-page/offres-d-emploi/fiches-de-poste-150/article/le-haut-conseil-a-l-egalite-entre-les-femmes-et)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/ecrire/](https://haut-conseil-egalite.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communiques-de-presse-2019](https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communiques-de-presse-2019)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communique-de-presse-2021](https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communique-de-presse-2021)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/](https://haut-conseil-egalite.gouv.fr/presse/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 68 [https://haut-conseil-egalite.gouv.fr/presse/communiques/?filter=2020].</p><p>Predicted response size: 368.</p><p>Response Body Length: 15,449.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgcs-hautconseilegalite.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgcs-hautconseilegalite.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgcs-hautconseilegalite.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgcs-hautconseilegalite.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/robots.txt](https://haut-conseil-egalite.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgcs-hautconseilegalite.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgcs-hautconseilegalite.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/reforme-du-cumul-des-mandats-une](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/reforme-du-cumul-des-mandats-une)
  
  
  * Method: `GET`
  
  
  * Parameter: `//e.issuu.com/embed.js`
  
  
  * Evidence: `<script type="text/javascript" src="//e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-l-election-des](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-l-election-des)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://e.issuu.com/embed.js`
  
  
  * Evidence: `<script type="text/javascript" src="http://e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1615808829](https://haut-conseil-egalite.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/ajaxCallback.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/ajaxCallback.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-b434aace.js?1613654526](https://haut-conseil-egalite.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-b434aace.js?1613654526)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/robots.txt](https://haut-conseil-egalite.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/sitemap.xml](https://haut-conseil-egalite.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-chronologiques/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-chronologiques/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
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

  
  
  
  
### Private IP Disclosure
##### Low (Medium)
  
  
  
  
#### Description
<p>A private IP (such as 10.x.x.x, 172.x.x.x, 192.168.x.x) or an Amazon EC2 private hostname (for example, ip-10-0-56-78) has been found in the HTTP response body. This information might be helpful for further attacks targeting internal systems.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/les-ancien-ne-s-membres/2013-a-2015/article/m-nicolas-sadoul](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/les-ancien-ne-s-membres/2013-a-2015/article/m-nicolas-sadoul)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.13.60.233`
  
  
  
  
Instances: 1
  
### Solution
<p>Remove the private IP address from the HTTP response body.  For comments, use JSP/ASP/PHP comment instead of HTML/JavaScript comment which can be seen by client browsers.</p>
  
### Other information
<p>10.13.60.233</p><p>172.19.11.9</p><p></p>
  
### Reference
* https://tools.ietf.org/html/rfc1918

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Secure Pages Include Mixed Content
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes mixed content, that is content accessed via HTTP instead of HTTPS.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/reperes-statistiques/](https://haut-conseil-egalite.gouv.fr/parite/reperes-statistiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/reperes-statistiques/](https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/reperes-statistiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/revision-constitutionnelle-le-hce-appelle-a-faire-de-la-constitution-un-texte](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/revision-constitutionnelle-le-hce-appelle-a-faire-de-la-constitution-un-texte)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/UserFiles/Images/fr de rugy db.PNG`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/violences-de-genre/actualites/article/violences-faites-aux-femmes-en](https://haut-conseil-egalite.gouv.fr/violences-de-genre/actualites/article/violences-faites-aux-femmes-en)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.haut-conseil-egalite.gouv.fr/IMG/UserFiles/Images/DVg3SrkXUAEuT9T.jpg`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/sante-droits-sexuels-et-reproductifs/reperes-statistiques/](https://haut-conseil-egalite.gouv.fr/sante-droits-sexuels-et-reproductifs/reperes-statistiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/violences-de-genre/reperes-statistiques/](https://haut-conseil-egalite.gouv.fr/violences-de-genre/reperes-statistiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/presidente/article/les-membres-du-hce](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/presidente/article/les-membres-du-hce)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/jpg/dsc_1039.jpg?docid=2265&doctype=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/toutes-les-actualites/article/les-travaux-du-hce-vous-ont-ete-utiles-faites-le-nous-savoir](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/toutes-les-actualites/article/les-travaux-du-hce-vous-ont-ete-utiles-faites-le-nous-savoir)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/UserFiles/Images/Appel à témoignage _.png`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-statistiques/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-statistiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/enjeux-europeens-et-internationaux/reperes-statistiques-31/](https://haut-conseil-egalite.gouv.fr/enjeux-europeens-et-internationaux/reperes-statistiques-31/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/secretariat-general/article/l-equipe](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/secretariat-general/article/l-equipe)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/jpg/bergs_paola.jpg?docid=2256&doctype=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/secretariat-general/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/secretariat-general/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/jpg/bergs_paola.jpg?docid=2256&doctype=`
  
  
  
  
Instances: 12
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-css/](https://haut-conseil-egalite.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/squelettes/](https://haut-conseil-egalite.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/](https://haut-conseil-egalite.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-js/](https://haut-conseil-egalite.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lib/](https://haut-conseil-egalite.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/squelettes-dist/](https://haut-conseil-egalite.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins-dist/](https://haut-conseil-egalite.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/](https://haut-conseil-egalite.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins/](https://haut-conseil-egalite.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L66xH95/arton984-5c73c`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `M3DseiEquCoHb8kqJlLL3fNyljz02Z+QC5UDX6+IC6CKESmQTEXOUjBuAdJ9wLbnXtHB+hbbLWultyxw4pFMOS2B8UA=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `/8cSglEkiF2QLS4qJlLL3fNyljz02VhkcWqVNb0gCRoYeDDfYJNMQe9GrfPtvHkyR3F95Lksy76XIHPqEcaNrRtQbyI=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L75xH69/an-2-9977c-dc254`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/)
  
  
  * Method: `GET`
  
  
  * Evidence: `be/wp-content/uploads/2017/04/Analyse2017-humour-sexiste`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L109xH141/arton1675-f6512`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/serve/MUIEANmfk2BbgPxtDXjm7WZMUOCwuKtEF9sHOMSKIOZxav1g1D6MQJU57kbks_6yXJz4iiFzP032UFehgpA5UMfbXFcg5rogHA7qqfLRKPMA0ig2KfUFTvJcYz-ZAq8NHob_7yNyqZ56am2fDSSblcl2ANol3FY9x-s5ofJl-5ixRbqtqIHG52fU-E7UzOGZbiI0TXKhsF34_5Xm`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/v2/p/Contact/Liste-des-CIDFF/73`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/robots.txt](https://haut-conseil-egalite.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `GSk8ZQREG62Dxw4qJlLL3fNyljz02SPQqxOhaUyZm/VJ2EJR++48zhHQLYlUc51c7bEENAFDRXzI37QOn/G1MYq6F+M=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `PDhyQh/ooQIifP5kG/7wVyK8lNCIAKgql+qgAol+6iA1zC4uxBU6yyakCDNBY3DIOI68Jfc/8T81dksKwe4Np905s+jdA1WQ13CXvGx+wEYUwQzhZZ1IOR9H3PGtZBrbz4XBjNSes5pwqG1z+gmSy3OvteLPuzNzgoheZkedVvPIvhMV+nVNDk2FUkzmuw==`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>��\x001a��\x001ar\x0017��('z�^����\x0011��������s��</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/](https://haut-conseil-egalite.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins/](https://haut-conseil-egalite.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/squelettes-dist/](https://haut-conseil-egalite.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins-dist/](https://haut-conseil-egalite.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/](https://haut-conseil-egalite.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-js/](https://haut-conseil-egalite.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lib/](https://haut-conseil-egalite.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/squelettes/](https://haut-conseil-egalite.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-css/](https://haut-conseil-egalite.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1615808829)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 19
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bSELECT\b and was detected 18 times, the first in the element starting with: "	select,", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/](https://haut-conseil-egalite.gouv.fr/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-js/](https://haut-conseil-egalite.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/](https://haut-conseil-egalite.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins-dist/](https://haut-conseil-egalite.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins/](https://haut-conseil-egalite.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lib/](https://haut-conseil-egalite.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/](https://haut-conseil-egalite.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/ecrire/](https://haut-conseil-egalite.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-css/](https://haut-conseil-egalite.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/robots.txt](https://haut-conseil-egalite.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
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

  
  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1613654526`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1600163253`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1630418734`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1600159733`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1615808829`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `40231098`
  
  
  
  
Instances: 6
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1613654526, which evaluates to: 2021-02-18 13:22:06</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `urlPage`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `send`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `send`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher](https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action_args`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `urlPage`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `urlPage`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `send`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher](https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher](https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `emailFrom`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `urlPage`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `copy`
  
  
  
  
Instances: 15
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://haut-conseil-egalite.gouv.fr/</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [value] attribute </p><p></p><p>The user input found was:</p><p>urlPage=https://haut-conseil-egalite.gouv.fr</p><p></p><p>The user-controlled value was:</p><p>https://haut-conseil-egalite.gouv.fr</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
