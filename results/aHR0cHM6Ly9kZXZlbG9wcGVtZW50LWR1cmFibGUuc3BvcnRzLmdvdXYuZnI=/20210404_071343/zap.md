
# ZAP Scanning Report

Generated on Sun, 4 Apr 2021 07:08:29


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 6 |
| Low | 9 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Secure Pages Include Mixed Content (Including Scripts) | Medium | 8 | 
| Source Code Disclosure - Perl | Medium | 1 | 
| Sub Resource Integrity Attribute Missing | Medium | 12 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 10 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 8 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 12 | 
| Dangerous JS Functions | Low | 1 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Secure Pages Include Mixed Content | Low | 3 | 
| Strict-Transport-Security Header Not Set | Low | 9 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 9 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 3 | 
| Storable and Cacheable Content | Informational | 8 | 
| Timestamp Disclosure - Unix | Informational | 12 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 29 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/video-sensibilisation-aux-15](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/video-sensibilisation-aux-15)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/module-de-formation-des-benevoles](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/module-de-formation-des-benevoles)
  
  
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
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/pages/SPORT-et-DEVELOPPEMENT-DURABLE/199414186798337" class="facebook" target='_blank' title="Nouvelle fenêtre"></a>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/pages/SPORT-et-DEVELOPPEMENT-DURABLE/199414186798337" class="facebook" target='_blank' title="Nouvelle fenêtre"></a>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/module-de-formation-des-benevoles](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/module-de-formation-des-benevoles)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/pages/SPORT-et-DEVELOPPEMENT-DURABLE/199414186798337" class="facebook" target='_blank' title="Nouvelle fenêtre"></a>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/pages/SPORT-et-DEVELOPPEMENT-DURABLE/199414186798337" class="facebook" target='_blank' title="Nouvelle fenêtre"></a>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/pages/SPORT-et-DEVELOPPEMENT-DURABLE/199414186798337" class="facebook" target='_blank' title="Nouvelle fenêtre"></a>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/pages/SPORT-et-DEVELOPPEMENT-DURABLE/199414186798337" class="facebook" target='_blank' title="Nouvelle fenêtre"></a>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/pages/SPORT-et-DEVELOPPEMENT-DURABLE/199414186798337" class="facebook" target='_blank' title="Nouvelle fenêtre"></a>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/pages/SPORT-et-DEVELOPPEMENT-DURABLE/199414186798337" class="facebook" target='_blank' title="Nouvelle fenêtre"></a>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/video-sensibilisation-aux-15](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/video-sensibilisation-aux-15)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/pages/SPORT-et-DEVELOPPEMENT-DURABLE/199414186798337" class="facebook" target='_blank' title="Nouvelle fenêtre"></a>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/pages/SPORT-et-DEVELOPPEMENT-DURABLE/199414186798337" class="facebook" target='_blank' title="Nouvelle fenêtre"></a>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/pages/SPORT-et-DEVELOPPEMENT-DURABLE/199414186798337" class="facebook" target='_blank' title="Nouvelle fenêtre"></a>`
  
  
  
  
Instances: 11
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Secure Pages Include Mixed Content (Including Scripts)
##### Medium (Medium)
  
  
  
  
#### Description
<p>The page includes mixed content, that is content accessed via HTTP instead of HTTPS.</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://static.ak.fbcdn.net/connect.php/js/FB.Share`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://static.ak.fbcdn.net/connect.php/js/FB.Share`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://static.ak.fbcdn.net/connect.php/js/FB.Share`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://static.ak.fbcdn.net/connect.php/js/FB.Share`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://static.ak.fbcdn.net/connect.php/js/FB.Share`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://static.ak.fbcdn.net/connect.php/js/FB.Share`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/module-de-formation-des-benevoles](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/module-de-formation-des-benevoles)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://static.ak.fbcdn.net/connect.php/js/FB.Share`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/video-sensibilisation-aux-15](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/video-sensibilisation-aux-15)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://static.ak.fbcdn.net/connect.php/js/FB.Share`
  
  
  
  
Instances: 8
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=script src=http://static.ak.fbcdn.net/connect.php/js/FB.Share</p><p>tag=iframe src=http://www.facebook.com/plugins/like.php?href=https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du&layout=button_count&show_faces=false&action=like&font=verdana&colorscheme=light</p><p>tag=script src=http://platform.twitter.com/widgets.js</p><p>tag=iframe src=http://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FSPORT-et-DEVELOPPEMENT-DURABLE%2F199414186798337&send=false&layout=standard&width=0&show_faces=false&action=like&colorscheme=light&font=lucida+grande&height=21</p><p>tag=img src=http://logp5.xiti.com/hit.xiti?s=511403&s2=15&p=&di=&an=&ac=</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - Perl
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - Perl</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/IMG/pdf/sdd_charteetablissementsms.pdf](https://developpement-durable.sports.gouv.fr/IMG/pdf/sdd_charteetablissementsms.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#qYG2`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#qYG2</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js"></script>`
  
  
  
  
Instances: 12
  
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
<p>The identified library jquery, version 1.7.2.min is vulnerable.</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/squelettes/js/jquery-1.7.2.min.js](https://developpement-durable.sports.gouv.fr/squelettes/js/jquery-1.7.2.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `jquery-1.7.2.min.js`
  
  
  
  
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
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="#" class="newsletter fond_gris" method="post" id="inscription_newsletter">`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://developpement-durable.sports.gouv.fr/m/ressources/resultats" method="get">`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://developpement-durable.sports.gouv.fr/m/" class="connect" method="post">`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://developpement-durable.sports.gouv.fr/m/" class="connect" method="post">`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://developpement-durable.sports.gouv.fr/m/ressources/resultats" method="get">`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://developpement-durable.sports.gouv.fr/m/ressources/resultats" method="get">`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form method="post" action="/ressources/actualites/article/les-etablissements-publics-du">`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="#" class="newsletter fond_gris" method="post" id="inscription_newsletter">`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="#" class="newsletter fond_gris" method="post" id="inscription_newsletter">`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://developpement-durable.sports.gouv.fr/m/" class="connect" method="post">`
  
  
  
  
Instances: 10
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 2: "newsletter_courriel" "newsletter[submit]" ].</p>
  
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
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ecrire/](https://developpement-durable.sports.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/l-exposition-secondes-vies-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/l-exposition-secondes-vies-du)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/programme-sdd-2015-504](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/programme-sdd-2015-504)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/rapport-2015-mission-sport-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/rapport-2015-mission-sport-et)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/plus-d-activite-physique-et-moins](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/plus-d-activite-physique-et-moins)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/le-4-mai-prochain-l-association](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/le-4-mai-prochain-l-association)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/des-financements-pour-les](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/des-financements-pour-les)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-france-face-a-l-euro-2016-le](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-france-face-a-l-euro-2016-le)
  
  
  * Method: `GET`
  
  
  
  
Instances: 8
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 81 [https://developpement-durable.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F].</p><p>Predicted response size: 381.</p><p>Response Body Length: 452.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/robots.txt](https://developpement-durable.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dsb5-sdd-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dsb5-sdd-preprod.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dsb5-sdd-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dsb5-sdd-preprod.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dsb5-sdd-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dsb5-sdd-preprod.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://static.ak.fbcdn.net/connect.php/js/FB.Share`
  
  
  * Evidence: `<script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://platform.twitter.com/widgets.js`
  
  
  * Evidence: `<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://platform.twitter.com/widgets.js`
  
  
  * Evidence: `<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://platform.twitter.com/widgets.js`
  
  
  * Evidence: `<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://static.ak.fbcdn.net/connect.php/js/FB.Share`
  
  
  * Evidence: `<script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://static.ak.fbcdn.net/connect.php/js/FB.Share`
  
  
  * Evidence: `<script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://dsb5-sdd-preprod.cegedim.cloud/m/xtcore.js"></script>`
  
  
  
  
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
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/squelettes/js/jquery-1.7.2.min.js](https://developpement-durable.sports.gouv.fr/squelettes/js/jquery-1.7.2.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/video-sensibilisation-aux-15](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/video-sensibilisation-aux-15)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/module-de-formation-des-benevoles](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/module-de-formation-des-benevoles)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
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
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/robots.txt](https://developpement-durable.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/sitemap.xml](https://developpement-durable.sports.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
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

  
  
  
  
### Secure Pages Include Mixed Content
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes mixed content, that is content accessed via HTTP instead of HTTPS.</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FSPORT-et-DEVELOPPEMENT-DURABLE%2F199414186798337&send=false&layout=standard&width=0&show_faces=false&action=like&colorscheme=light&font=lucida+grande&height=21`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FSPORT-et-DEVELOPPEMENT-DURABLE%2F199414186798337&send=false&layout=standard&width=0&show_faces=false&action=like&colorscheme=light&font=lucida+grande&height=21`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FSPORT-et-DEVELOPPEMENT-DURABLE%2F199414186798337&send=false&layout=standard&width=0&show_faces=false&action=like&colorscheme=light&font=lucida+grande&height=21`
  
  
  
  
Instances: 3
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=iframe src=http://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FSPORT-et-DEVELOPPEMENT-DURABLE%2F199414186798337&send=false&layout=standard&width=0&show_faces=false&action=like&colorscheme=light&font=lucida+grande&height=21</p><p>tag=img src=http://logp5.xiti.com/hit.xiti?s=511403&s2=14&p=&di=&an=&ac=</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/plugins/](https://developpement-durable.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/squelettes-dist/](https://developpement-durable.sports.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/prive/](https://developpement-durable.sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/local/cache-js/](https://developpement-durable.sports.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/local/cache-css/](https://developpement-durable.sports.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/squelettes/](https://developpement-durable.sports.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/plugins-dist/](https://developpement-durable.sports.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/lib/](https://developpement-durable.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/local/](https://developpement-durable.sports.gouv.fr/local/)
  
  
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

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L340xH205/arton780-e10ab`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L340xH244/arton776-87ac8`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `BIGipServerpool-dsb5-sdd-preprod`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L250xH151/arton780-8ef2e`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L340xH245/arton761-7b005`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L340xH482/arton767-1c355`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L340xH197/arton775-a3563`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L548xH331/arton780-d03db`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L340xH192/arton779-01903`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/module-de-formation-des-benevoles](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/module-de-formation-des-benevoles)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L340xH236/arton755-a5860`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/robots.txt](https://developpement-durable.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `BIGipServerpool-dsb5-sdd-preprod`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `BIGipServerpool-dsb5-sdd-preprod`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>��\x001a��\x001ar\x0017��('z�^����LG�Nj�h��4��ti</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/local/](https://developpement-durable.sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/plugins-dist/](https://developpement-durable.sports.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/local/cache-css/](https://developpement-durable.sports.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/plugins/](https://developpement-durable.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/lib/](https://developpement-durable.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/local/cache-js/](https://developpement-durable.sports.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/squelettes/](https://developpement-durable.sports.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/prive/](https://developpement-durable.sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/squelettes-dist/](https://developpement-durable.sports.gouv.fr/squelettes-dist/)
  
  
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
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/video-sensibilisation-aux-15](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/video-sensibilisation-aux-15)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/module-de-formation-des-benevoles](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/module-de-formation-des-benevoles)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
Instances: 8
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected 2 times, the first in the element starting with: "<!--</p><p>  xtnv = document;        //parent.document or top.document or document</p><p>  xtsd = "http://logp5";</p><p>  xtsite = "511403";</p><p>  xtn", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
Instances: 3
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected in the element starting with: "<script type="text/javascript"></p><p>  <!--</p><p>  xtnv = document;        //parent.document or top.document or document</p><p>  xtsd = "http://", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/module-de-formation-des-benevoles](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/module-de-formation-des-benevoles)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<img width="1" height="1" alt="" src="http://logp5.xiti.com/hit.xiti?s=511403&s2=15&p=&di=&an=&ac=">
</noscript>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/outils-d-auto-evaluation-des-15)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<img width="1" height="1" alt="" src="http://logp5.xiti.com/hit.xiti?s=511403&s2=15&p=&di=&an=&ac=">
</noscript>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/lancement-du-guide-sports-dans-la)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<img width="1" height="1" alt="" src="http://logp5.xiti.com/hit.xiti?s=511403&s2=15&p=&di=&an=&ac=">
</noscript>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/la-plateforme-rso-du-cnosf-est)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<img width="1" height="1" alt="" src="http://logp5.xiti.com/hit.xiti?s=511403&s2=15&p=&di=&an=&ac=">
</noscript>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" target="_blank"><img src="IMG/jpg/ans_logo_rvb_300.jpg" alt="" /></a>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='pagination_articles' id='pagination_articles'></a>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/a-decouvrir-publication-du-recueil)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<img width="1" height="1" alt="" src="http://logp5.xiti.com/hit.xiti?s=511403&s2=15&p=&di=&an=&ac=">
</noscript>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" target="_blank"><img src="IMG/jpg/ans_logo_rvb_300.jpg" alt="" /></a>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/video-sensibilisation-aux-15](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/video-sensibilisation-aux-15)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<img width="1" height="1" alt="" src="http://logp5.xiti.com/hit.xiti?s=511403&s2=15&p=&di=&an=&ac=">
</noscript>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<img width="1" height="1" alt="" src="http://logp5.xiti.com/hit.xiti?s=511403&s2=15&p=&di=&an=&ac=">
</noscript>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<img width="1" height="1" alt="" src="http://logp5.xiti.com/hit.xiti?s=511403&s2=15&p=&di=&an=&ac=">
</noscript>`
  
  
  
  
Instances: 11
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>A noScript tag has been found, which is an indication that the application works differently with JavaScript enabled compared to when it is not.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/m/la-sndds-pour-ma-structure](https://developpement-durable.sports.gouv.fr/m/la-sndds-pour-ma-structure)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/m/acteurs](https://developpement-durable.sports.gouv.fr/m/acteurs)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/m/ressources](https://developpement-durable.sports.gouv.fr/m/ressources)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
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
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/robots.txt](https://developpement-durable.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/revue-bibliographique-et)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/sitemap.xml](https://developpement-durable.sports.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/m](https://developpement-durable.sports.gouv.fr/m)
  
  
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
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1567176340`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1583430356`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `36470484`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1567483516`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1530175962`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1601968456`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1599210632`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1568361503`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1601896973`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1595933092`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1593535894`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1552382630`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1567176340, which evaluates to: 2019-08-30 14:45:40</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_to`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_from`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `newsletter_courriel`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `newsletter[submit]`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `recommander_email`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
Instances: 29
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [id] attribute </p><p></p><p>The user input found was:</p><p>formulaire_action=recommander</p><p></p><p>The user-controlled value was:</p><p>recommander_to</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
