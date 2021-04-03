
# ZAP Scanning Report

Generated on Sat, 3 Apr 2021 15:28:40


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 7 |
| Low | 10 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Secure Pages Include Mixed Content (Including Scripts) | Medium | 8 | 
| Source Code Disclosure - Perl | Medium | 1 | 
| Source Code Disclosure - PHP | Medium | 2 | 
| Sub Resource Integrity Attribute Missing | Medium | 12 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 9 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 8 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 12 | 
| Dangerous JS Functions | Low | 1 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Private IP Disclosure | Low | 5 | 
| Secure Pages Include Mixed Content | Low | 3 | 
| Strict-Transport-Security Header Not Set | Low | 9 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 9 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 6 | 
| Storable and Cacheable Content | Informational | 5 | 
| Timestamp Disclosure - Unix | Informational | 12 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 35 | 

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

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/IMG/pdf/sdd_rapportrevuegobelets.pdf](https://developpement-durable.sports.gouv.fr/IMG/pdf/sdd_rapportrevuegobelets.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=rh«{;êôæ\x0011Sí>µ{;85ºóMÕ\x0016Çæ=\x0006Záä?-ü6\x0000\x001b«-qñ\x0007»¸\x000fÙß\x001a\x0001&pgle*;XR\x001d0¼\x001d\x0004SCÙ¬\x0011£z¯mmåþÛtåvfUé}[Í\x000b\³ÿ,M&î&®?æqce4Ú44ÓÇ\x0016Ægõ#B/m6pÄð5\x0001#L»Ql\x0008#¥l\x0007fBSZÝ¯ËF©\x0001\x0012ÞÀã\x0002ÅªU'Ñå\x0016M2y\x0015\x0001Ê¢äç4â\x0003!xmjµd$=S&\x001a§ø×\x0005ÿ,VÈ%Ò`dº	jìHaD»Ä
\x000b
%qÂ°õ\x0015¯a#Ý\x00130`Ñø\x00088¬Ûù@@\x001fZ7WÔ%´6M9F5ÌÝôÇÈðë:»lýØøÓQ0;A)Ab®ï8Ý¼2ÛëcTì\x0016#\x001d`ÈÊÌú\x0015H3®¦OçO>8ïä^±ÁNr3\ì/l­©¬ÚzDäkÕFì£JÈ\x0001mÂóÚ© \x0001[* v¯\x0007·ÆÃW_Î`W÷à\x0016CL\x0000zæ\x0001Æàz?\x0006`ÖIÉl\x0015Û!X	'í¡¡RÄÝÙ	`ÄÑkÑÙgþ«+!\x0007ê%6HôÇpñ\x001d3,+47$a\x0011\x0015\x0006\x00136,;Ö\x001dE[å\x0008Ç+àh¨ù»\x0012\x0011fÎ.\x0013\x0013ö+ï\x0001±qìf\x0003eCÖ\x0016_ëÎ R;¸ª\x0019Ì\x0003hr\x0012gW +ÂYìOE:)¡ö#]³\x00049êýÅSò*+J Ê9`·÷f\x001e	µü!ôóÐ½\x0013[\x0007\x0005(úðgbX³yâ\x0016jX@³wÔ¾¶),\x0017¹WÎøBûR¹x\x¯¸hG\x001c8hí&úö´7YrçãÝ¨B0hÅ5ÿr\x0008à\x0008+*%!¾\x0015ZvøÊ\x0019¦W28Þt\x001fFÖ=ªè|àòÜnir`ð\x0004	J£Æ|Èçª\x001f\x000c\x0017f,\x001a2W+ÆÉ«XH+]¹^{Êë®ùôþãµfhænBº\x0012gôÌ"¿åW8	»BHñY\x0014ògFuó\x000fAxÝ
j3 ¥Àa\x0016pE]\x0016Õ×\x0015%$¬:
DZyºÊßxèjÖ¼wÿy¿ï\x000c\£Q2n°Ah¡ôk¤öFÎ|yL*\x0001"\x001e \x000b¸^Ù4x8\x0005ööQ¬÷t¡¿Õrn\x0007ñ¨:{¶\x0006\x000brµ¤´¾¤çÕ[\x0018+Ôc\x0017Ú4)Ä¨m0>CÀ¬\x0016\x000cAÁÕbv\x000fEbI\x0002uD³®5SóÉ¤ðñ»[u\x0019ºRw¬ëç`Ý\x0015³ºSô3e5|«É§ÐU\x001a.LI5HÔ¨?½L\x0013rrÆÈ¸$Y­\x0012È\x0010e$=¸\x0004\x0015¨Æ\x0012Ô\x001eañmûÖ$³¸/Ä\x000f1¡gZSéÓµn¯\x0017-ºjÚ\x0016\x0004«þÖ\x0006\x0015J<¥tI¢ñ·\x001dÛzcû\x0016Øg1ð\x001f]"£\x0013­\x0011gÿf?>`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/IMG/pdf/mds_-_module_formation_benevoles.pdf](https://developpement-durable.sports.gouv.fr/IMG/pdf/mds_-_module_formation_benevoles.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=0úð½¿ÿÎ7öéSßÚºé\x001dñ\x0007«PÁÎ5¨`ç¶-;·_sÏ_~ñïßóï¿ø©ÙÐODÁï$øqÑ\x000cLÎsÍ¬B\x0005G\x001e<üøÃû/[¨àû\x0010'8¸ûûó]hz·ý*\x0011ô(\x001fO/N±\x000b\x0010*H,âäB^~/¨À43q\x000bà<=
4¨À±\x000e\x0015x\x0018ºÍ\x000bü	T\x0002\x0011\x0010T°AtåA\x0005(\x0004\x0001\x0015*T¨P¡B
\x0015ª¦Ôó\x0007ïoz¯ój\x0013
6>Ö¯PVòÁ&Z\x0013¼«Þ\x0008>r®@Ô\x0002\x0018| r|HF°dHÏ;Ð¡\x00056ø\x0016T\x000eÛØ\x0010K¦%¾¢*\x0015QÜ\x0000N\x0005Z¯Vi¤\x000be§?d¶9Fæ\x0016\x0006Mó\x0003æy-þÀÒo5\x0018gf§gls¸Ï\x0011Î\x0006³\x001c+¬ÔyEÔ¡\x0002ýú×»lJ\x0003@§\x0002^Ê×ÄD®ì$-¤«×C¯\x0000\x000cvÞOÛÉ³6²\x001d£û¾ÉpÂÎæýe>ÍC\x0002Q³>PÁ}\x0002Gx®*RC®óE6ã
EmkÜNôhm÷\x000eÒÕã	ÅØÅR=$(\x0019 
\x0017Ë¼Ñ¤Íå¢\x00038Ó­÷Áíd+NuL\x001fã\x001a
æÂ!kÀov¹Æ(ª\x0017Ã[\x001dd;ã6bF6¹°(çU´}ñëmk¥\x0001Nä5¨@àÕjMb³\x0015o]f|Ã\x0018Ý	ûìÄi\x0007uÖAµQ0èÁNwQ®!_x6!Kõh]Ê
rM\x0004Ãj¨Ú\x00145´Ä\x0001	2\x0006
_­gâ)'íy
T\x000fNw\x0012LË7\x0014NX2y\x0013SçD¶T\x000b³9:\x0010¶PÎ!\x000cÆ.@¾\x0002ÎF´ÚNÚ5èñO\x0007c\x0016Êé\x001d¡\\x0003\x0018Ùi'ÛqºÛ\x0017Hdó\x0015O]L
rQ90,Ý @/\x001d*Ð¼&ÀU	¼\-VãÉ¬Ó\x001f1\x0013®>0Û\x001aT Ô-\x000b:HÆÀx&Ã1[¶\x0018¨ÖÓ\x001aöPU`\x001fI^#
àì!sB9ù#%rrvyxr~`lnxÐ4j\x0019×¡~£µÏ´Ð?»Ðo¶öëþ\x0018Æùá¹E+á¤ü!¶TådU\x0000¯¦è9\x0014ºô\x0011D/M\x000e´·þó§\x001eøÖ\x001d»nøüÍÛ?ñ\x000e¨\x0000\x001c7ß¾uÓ½ùäá¯ÞxêÞ]ãG÷E{¬tò\x0004ñÜÃ\x0017\x0003\x0015\x00005»A9ê\x0018ÿÒ±êÉãÁ<8õè÷^ýîùooßòN¨`UÛ6ïØºùæ­[vlÛ²cû5÷~ùÆc»ðÚ\x000bÏ[G\x0007l\x0012nÇWãçY
\x001e;täáýûwk8Áå\x0008\x0015üâ'}È\x0003¤
*/ÎÄ\x0008ëû@\x0005]m\x0017s÷zê\x000bÈ>Ð \x0002M×É¤\x0013qi\x0015*h\x0012î´! 
¢+\x000f*x\x0013  B
\x0015*T¨P¡BuÉë¯|©é]Î«P\x0008*Ø8ú8¾9Eþiç{F¾ÒÞU\x001f9W (Ð£ Ãs¡bJE\x001d©=\x0015²±a\x001d*\A:´¼¥tÄ`lÔgóT[Q¹
^DÒRãe=;\x001e\x001c/I<x;í\x001d¡MA\x0017£l\x0016sz¦\x0017Ìó\x0003FËºSA¿É<h\x001e±L\x0019mSv×?E°@EÎÖ\x0008­Àa÷_VUÍN\x001fny×\x0010:'fË\ÍÁ¨Ñé\x001dÀéÕ¶;yÆAµÎNw`\x0018vÌKîä¥¤ÖÀËH
x\x0011Ø;´\x000e²ºò!ð\x0000£\x0007¸r5J{ü¡\x0005Ê5¦mço³\x0013-8Ó\x0001^']ÌW(6¢³Nï\x0018ÁôcZ·\x001dêpÐÝsÀë&²yWµ\x0016¯V\x0013ù| \x001es8]#\x0018Ñ®¿\x000eãé×¸\x0002²RÊJ	\x0002#ê¢í¯\x0011\x00132¸(Aá5¢ -{Â©EÆ?;{\x001dt»nC#OcäipN{zýÑ©d\x0016+ÖZè@IRë\x0012ø|È
I®5®@]\x0018E\x0012åz¡\x0014\x000fKrO;¨~Ýg\x0000gº\þ¡pÜ-âÙ"\x0015O-ùCÓ´{ÈA÷Ø5»\x0006j\x0003G8@×°?<ÊP¥J¸ÊÅs%o"íðÌp*(0\x0003«Oã

\x0015_]HJYY]wÐYB¡ß>0Ù¼¤T«B:wyÃs¸kÀÁtjI\x0007­vÈ\x0001÷`º ÎZÈ\x0014\U>.ÀéÒ0\x0010pëU}1«`êÔÆëzw	,·:_Jf\x0002q\x00110/L/YF\x0006L£\x0003Æ©~£¹ß8ßo´£\x0001Ò,Ö\x00013dZÌÖ	ë²pù\x0013\x0002'óÐþBÖ\x0016Û*Wp©>,ë\x0012\x0005!äqövÿö¹g\x001e¼û[çB\x0005;·n^
vmÛ|Ç¶M»¯ÿÔ?Üöµ3ûî±>ýHê¥\x0013Çë§]$T@>ûP³{ôøO	àxêDêWG\x0017îé¸ÿöã_½þO{´i'¸qÛ5m[vl»\x0006\x0008@¢`û5úñ\x0007÷å>´¯ýÔ¿Ø¦'ªù¢¬ý¢>oiPÁ\x0013\x001f?zðð\x001fyd(Ð:¹\x001b\x0016*Ø»W
\x001eX
Z_ü§¦7Ù¯>³\x000b\x0013éÅ©ôâtò< S'_¼»ÿë_ÿêÃB\x0005t4\x0018à¹\x001a
þD\x0008*Ø º"¡7Q\x0008\x0002*T¨P¡B
\x0015*T°®ûä&a¹³é-Î«P\x0008*Ø8úh¿3Ùà8Áº>Z®W¢,9:\x0015Ã\x0012AØµ\x0003=þ`Õ à\x001c¨`5\x00048á@1Weðô\x0016 ­A\x0005â¥
D5\x0017oEY\x0011$%[ªxCy\x00079n±\x000e\x0018ç\x0006¾¹>ã¬Á<7h6
ÏMÏ\x0019m#\x000bÔ\x0018é	¦my>Ä«\x0005©Á\x000b°'\x000ewñ2\x000fæCVë\¬\x000bÉX
óGL¤Ó\x0000=ù©VÇ*QpZsÎo¡Ü=ÁÈd2³\áÃ¢å¥¼(×ôµMî@ª(*¢¤Êê
\x000fAªVë\x00196ëõ\x0005æµ}ú]Ðö8K0íN_\x001fãé%]pÿZû\x001b¾\x0003î¦ï÷Ìñ£P\x000epRZRà&}Iª×ëùl.è\x000fÎãTÔ½ýÛh·!\x0014ÍäéR-,«5'g	Ü\x0010YåÀÐäF½.çJ\,qÐÞ1³×NwÚà¶}=} Å¡íå']ÝÐp,5[¬¹x9)È\x0005Q\x0001£\x0013àÍ\x001b"ø¬(oÛk\x000fþ§\x0000\x0016¥XÎä¸ÃéÂé~Í \x0015vw\x0001Ñ\x0011L\x0017Fµ;èvm@í6¢\x001d#»=©dÍ}øF\x0015 º-Vb	vû¦\x001dd7|\x0018ÕA0½¾Ðd*\x0015«~NÌ\x0008r\x0019Ü/\x0015Ú&Û'
/©5A-sJ¶XËsÐFu/í6²Í\x000eé\x0005-d\x0001Ü>ò¬Ëg&MÙ"^\x0001Ë\x0000zDE\x0003#R\x001a
AÒÖ\x0003ÄB\x001aòº,¯ÀùST°<
\x00156`Hïü\x0002>n^\x001a²\x000eè\Á8c±@³\x0002
-\x0000\x000b¯ßh\\x0011r\x0005ãV;æ	ÇrÕ"/s²|\x000eB\x0000çP\\x0003r.\x00041ìuõv¿ðÌñ\x0007ïþæÛ¡MëPÁmÛ7ßõ©Í\x0007¾|ý\x000bwï\x00188¸úÇÃùSO×NA¨àù»¾þv¨à\x0002\x0002 ñC?hzþò\x0012ÿ\x0012ÐüÉã¹ß>É<ýðÀïþùÍõ½ë¶Ü\x0006\x0003\x000e6ïÐ¤C\x0005;·_³c\x001b4+¸y+8ÿÄm×Üòé­\x000fìüû>| ÷÷/óæz¹ð!Rã5¨à(Ð¡ÃG\x001e9°ï^½k¯\x0011\x0005\x001b\x0015*Ø·wï¾=»÷íùá\x0003÷ïÀÞ\x001fN´ü[j±é\x001dö«PãéÅIvaR
b\x000b3\x0011å} '|âbîþÙ3¯?T q\x0005P\x001et3dÀëªú§ãüM<ÎGj-ß¨¤t5ýb.T\x0008*Ø ºR¡\x0002\x0014
\x0015*T¨P¡B
Õ%+Oÿ©¦77¯N!¨`ãè£ú¶ärÁ	ÖõFtñb¼fõÏÉr¢Zr¥ãx*¥"66²ÌmìûA\x0005@àaTÄD¹JV\x0012*Ì_*àm£\x0015Í\x0000\x0013¤t±ì
,\x0018>n±\x000e,¦yÍ©À<`\x001d4\x001bg'Æ­Ã&Û\x001cv¸GÝ\x0011\x0013[vrJVP«0°\x0000ö\x0011\x0004Qâdµ&È¹*\x001f³\x0018å\x001aíl¼EßÞî õàõ­îí·?4çtÉjQ«Ú}Q
4{è¢ IÕ`\x0003\x000e<¦PG\x0013$ã²\x0013=6¢Mkå¯\x0013\x000bú»ãY­\x0003Þî ú<~c:ç*Õ\x0013¼\\x0014¬ê!Ï`èB¹')Ú9\x0011=\x0018¥uðé.·o8^Ê\x0014\x0001Ñ®\x0013:\x0018¤\x0014«\x0002)ù\x0012Y\x0007í\x001dµQ]Ëdl"Z`\x0000D 5ýÛõh\x0006¶à(q¡º\x0016ªH¨"ø/0]Ðô\x0000Ü\x0002p\¡\x0003
´/m÷R"Á:ý¡y0{8Óc'Zôáh$F«'\x0004Ý¦½W
ïÄiÇ?ÊPàÂD¥\x000c®\x0013^-¼àZÏæ
á@xA÷=À¨N Æ=\x0010NÌ±9²ÂÅ8!§¨\x0002XÈ`éiO©H|ULdËÞ\x0008k'ÝCËdÇ\x0012Þ
Ç\x0008ÞêÀ`\x0002\x0002x_8á«Ë\x0013\x0002\x00135/9ëNMðp® /¡Q1p¢UY^Qä×\x0015©¡(
A\x0012Ë\!ñûb\x0018á6ÍcÃ¦EÃäüÀipÐ81h5ÌÌ¯B\x0005FíÄ´Ð;c1ÌXÍó¤ÇÊ§J\\x0005¼
çp}'l\x0013¡ß<÷ôCß¹ûö\x001b¯ÿû­×¬C\x0005;·ê	\x0008[nßºù;×}âÈ×þâûî8òçGó'OèPÁ\x001fvß¹F\x0008|éB\x0002 ýþ­MoÓ_^â_Ò
N\x001e/þË1ïsû'ößû«[¾|ÿg?ùN¨`&p\x0013¿±uÕµàöÏ_÷à­7ÿæ#¯½êZçªÅ\x000f\x0005\x0015¼|øÈÑ#G\x001e?tøðþ\x0003ûa¿^Óe\x0001\x0015\x001c{ü1|ª?¶0 K/Í¦`\x0015*H-L¯B\x0005í½ ¼ûãcC\x0017\x0004\x0015¸hÂí$!]@\x0013^'Ë¦EQÎ
Öÿ¥tjTRàJðÚ\x001baËûÿ5÷¦o
<æ¿âvðxð,¯4ýâßU\x0008*Ø ºR¡7Q\x0008\x0002*T¨P¡B
\x0015*T¤~÷ôÃMok^µBPÁÆÑGòUÉëYïe\x0013¬ëiçE
\3]çe¹"K¾\x001c§":Q`KGl\x0019x|/¨`+`Cv\x0016>Ê$\x0012Bµ¤®\x0015\Úö¨,+jcE\x001b5QJæ70gwÎÍëPÁà¬µoÆd0\x0006MÓ£óÃ³öEÒ°ÌôS¾Xv©*ÆxµÀIeIßÅ¯V\x00049Wªã¬r
Ûð\x000e-¡à,
(¸ÉÝ®uÞ1ª]?']ÀH<½¯xD9«9\x0003\x0008JCQh¢»(Ãûj\x0007\x0019î¦¯ñÙtÎ\x001bZIfÐF´Ã\x001e·F\x0014`Äk\x000e\x0012r\x00056ü5ø¦d\x0007N÷»ý3lÎY\x0013ÒZ\x001a¼¨JRC\x0011$Ia¯Cªé\Ðç·àäÖvosm\x0004Ýå\x000bM¤rX¥\x001eÕ¬Â\x0006½¨y)\x000b\x0006^-XpúÆ1ºkÉqFß¼o#Z	0Ò.\x0018Ê@ÀÞ½
o\x0001Ãd|áä\¶ÄT \x0014À,IªÖ\x0004o(5\x0000¹\x0002u\x001d*\x0000#®ñ¹|1\x001cKaÞÀ4áì3\x0006¯\x000emÍ\x0000ãípP}sÈ\x001fcstUHIj
Z
@3\x0004I\x0010ÁR\x0012Áè*56")×(Fv«²í³Çí\x001f
',ù²·.°²Z\x0015äª\x0008Y2¯dµ`*Oø#³kÈFu,áglÄY\x001b\x0004':ld'\x0014Ñ®yA@®tu\x0007#l\x001e+×C\x0001s%Ê kï
n\x001f\x001cÑ,¯Hâ*¯e&H"'ÕòÕx<ëòF\x0016íÔÕ18³h\x0018\x001b\x00182\x000eÌL\x0019ff{g,ý¦>³µÏ4\x000f¤\x0003\x0006\x0003¦Å©%\x000cÄcùj¾ÆsÐ !6	*\x0000\x001f\x0019
*ðõvúÅÏ\x000e|ïÞ;þüú®Õ:Ñ°\x0019½\x000e\x0015lº}ëæû>sí±oüÍüð.Ó\x0013\x000f^x²üò3ÕOÕO\x001d\x001b?ô
»í+MoÓ_^Ò¡\x0002áäÒÇ??8{èþ\x0017ïøêÏ_\x000b¡­ Q°}Ë8\x0015htÁ5ß¸vË7¯ÿì£ßºãÔ§ÆZNûp»¸jð~aËæ\x001c¨àÈc=¶oß¾½{öìÓ¨
\x000e\x0015¼òâ\x000bAl.²4 ¦B\x00050\x0001PÁtÔ>\x001b£ý\x000cîÕäaH\x000fMè\x001a\x001f\x001bºÈ»ADÁÛ \x0002p\x0019\x000cÍ&ã:TtAE~%\x001f|#ºxÜAÌ º\x0008þ2Ukù¦\x000fj]\x0008*Ø º¡7Q\x0008\x0002*T¨P¡B
\x0015*T\x001fs=tÏ-Moh^ÍBPÁÆÑE~IÒ(ÆÞôM5}E}h}\x0008\x000bM-/\x0000n¢\x0017\x0015Sä,\x0005\x000b\x0019"\x001d8F\x0014,§ÃËZÀÁrú-¨àn\x0006àÁ©\x0008¹Ë"\x0016eWW\x000f.YüÁª\x0015òzY#l\x000ewûgìC¦¹\x0001ãÜ i~Àd1\x0018Íý33æéÑùñé¥á9¬Ïêè\¢º0¦×\x001bÉ×<5)Á«y©QÔ|MHdòÎpÂÊx1²\x0003[5ÌoÕ·Õ;¨\x001eÚ5H»H§ÁNtÚ6î$½ÁðT:ç(×C\x0015Nß¼¯6Vt@ßç¨mçoh\x001báy^ÊëÑTÆá\x000bM®^¸w\x001e\x0012\x0005§õíü\x001aNÐQÝ¤sÐ\x001f±$Òtcy¹¬4\x0004eE\x0016À¼®@£\x0000A\x0012¥\x0006¸|±ÄI×¨Å
´kOo%Ý}¡¸9WrrVi\x00049Wã²?Æ<þ)\x0007Kè°áÐ:` 8Ó]àékñL@\x0006ª\x0007ú3-³Ó\x001d\x0018KdU?/§eµ"B.BKSÐÓ.Ö¶pê\x00080âA)ù$£1\x000báê·Sí0Ä:ë OÛ?\x0000Ùp0Ø6î÷úgbIG¾\x0014à´\x0008\x000c ¢Â \x0003è\x0000¿ ¸:_Ìä|Þr\x000eÀ´\x0008x©\x001d´§Ï\x0017Hfìðª¤´Ò(Ëj¡
î]Ñ\x0019Î2î!è@µÛéV;Ýb#Î.9Z1¢d\x000c`h\x0004<öÃ;\x000bAVo \x001c7¥óDYR\x001auN¬	ª¤C\x0005¢\x0004WvU\x0015Î6'Ë\x0002+\x0007",Fú&\x0016IÃ\x001cfZè\x001f\x001b\x00196O\x000eÌýF\x000bÄ	Ö^ÓB¯q¾×hé\x0003?\x0019µÚ­ÿ½ó£:Óþÿ>>Çg\x0002B\x0001Ã\x001aÛ`ÖØE(`qÂ\x0018@ ¢\x0010 @°
¶1ÁFølì\x0005\x0019MêÉY\x0013º{¦§{º»ºbésîêÊ-¾o×ì_ÝªÑx@Z\x0016i$ÍÈº/Ï)J­º÷Öpè~÷yÈiG(\x0016ÍU
ÈJ'ä\x001f¡Â!ªárr-±òE\x000bøt\x0012ÔßýOä'ãSðhO×ßüí³¿øù=7¬]¿fÅí«YÁÆÕË7¬\ºqåÒM+Ü¹rÉ#k¯úõ\x001d?8öÈOûýi_ùàËtÝ^YÓ¯?=\x001f¨@VäÍ\x000bÞ©¿¸\x0004â\x000f\x000eì­Ôí¼ù¼i÷Ö\x000fî^·íÛ«îZ¹d³Ì\x0018M,Û¸êrù(ÿñ¶É×ôÞkÿu×O~ô×ß¼:¢iò¸\x0000º9\x000fØÛ=\x001bðÜ®çyöÙG¶nÝ²e¶{¿Ø4ó¯íÛ\x001f×4Õ{1ßª\x000fFb¦¡¸±Áì¢&\x0007e%MC	ãña(f\x001eá&\x001fx(DÝ\x00146Máªþöá_æ³ô{ö¼x¦PÓÏ
bÑ\x0010Ã0ct!þ\x0007\x0006

ê¢Èþ+b=/tº«_¾ò¬ï\x001cfÞ T°HôÏ
\x0015À\x0010\x0004X°`Á\x0005\x000b\x0016,X°Î_ÝxÍ¬¹yÁ»² T°xtÖ\x001fHìÿjJy\x0011ÈÕæ\x001f4	*TÀbIàctÙY\x0013ASÂÿ\x0005\x0008Á\x0017Ñ\x0005© ª¥|M,K\x0002#\x0008\x0017\x001a*\x0010OpÂ<Íúb)\x000bå\x001c²öê&ºµ\x0013]c
T0ªëÒõèGû
Ã¦q¤ÝµLaf²rwGÒÖ<=]\x0015¢²²¥épÜ2í\x001d!ì](¡ìú')¦\x0004MVL]n¿.B\x0012\x0019Üá\x001eµâm\x0016¬I	/hr¸ºB±LÁQf"XT\x001aÄÒÉÈ\x0003Q¬Õd©m;Õ¢fãòÏ$M.ï\x0000fo\x0015;l\x0005î\x0004G\x0014$ \x0011%Û\x001cÓ\x0003þ¨)s\x00168#«<
2\x001a$8¾&ª',°àh¶\x0010Oº½)ÒÙ§¶Ý­x\x0003JµØÝ=ñ´¥Â\x0005¹Z¼Â\x0013\x0019Â\x001bÒn\x0000\x000c\x0000SzP`6ÊÕï
ÇSD<M\x0006ÂS£\x0017P\x0007òÍ\x0010
³Ý\x0017\x001cIf1°_È(Ô\x0004?\x0007*\x0010Õ8'ò\x001cpi`\x0019>[ CÑ\x0014*ÿ8ÂÙiÁ)¤Äa\x001b~Ø~\x0004,\x000bÈc¸½Ý\x0017Ð%ÓD¾\x0018¨²i^¨(\x0006\x0005³íu`Å àL¡\x0014
-k\x0008%ÛåÉ×\x0005£\x001cî.ù®â\x0019¤Â\x00069)Yª\x0006£i'0J8:Q²ÙF\x0002¸\x0002!T\x0007\x0006y>;\x001dîá`d*DQ£Û?b#5*SÛ[\x001cîpb2WrÒ\\x0017AÀ\x0004\x0018\x000b A>Åñ mBÿ$O¸P©9ç+¾HÊJz\x0006ÍTÇ$Ú6jÒ\x000cMv÷hûºµ£Z\x0000\x0015\x0000¢`\x0006*0hÆ&äc§Þ8bÅ-N¯7M\x0016«´ 2¢¤@\x0005¼Â\x000cw¨@8ù»ÿÉOäßL<>18ø7§:\x0015¬_³b¬ÕË\x0015³PÁª%_õïîZ§yâ~ÛkO'\x000eì/\x001fÜO×Íô¸ç	\x0015èvoYð6ýÅ%æ|ÜK\x001f|9ñö\x000b¶\x0017\x001fýè'·?yí{WÉ+µtÃ\x0015Kf£+f\x0004\x0002\x0011¬\x0007PÁ~÷Ú½¿¼ÿÈ\x001f~¯ïî¸§ùÏvKÏ\x0004*xAå
Ù±cë#[·<¼¨¡^zQ7zÜKÙT¨ \x0002¼÷!T°0JLÎ(i\x001aN\x000eÆÍ£IÜè'\x0011yu<\x0014
Ü\x0014!kÂ_}ååù,ý;ï¼5O¨ \x001c
V«4
   ¾ä·`\x0000'¸ ïøþ\x001e2- ]\x0000¡E¢n¨àS\x0018\x0000\x000b\x0016,X°`Á\x0005\x000bÖù©¯}õ+®ºoe^ÚPÁâÑÙ}\x0004ôqlÁ¢s¥ÿXÏhø³\x001f«P'@£\x0001k"8\x0013øúeæT\x0010IÙdFà*5¹ D*
*]°\x0001%\x0007
Æníx§v¼\x0003\x001c':Gõ]Z]¯^Ûo\x0018\x0019\x001a@º¦ð¶)¢ÉL4 \x000e/4\x001aOse*'\x0003áqÊÑ\x001ahB°zl´\x0001 \x0005Á;í®P\x000cÉ\x0014½e6JóIoÈQ½\x0016¼Õ\x0002\x0013\x0003Ì®qy\x0007Õó¼\x0003
:©&ÕT\x0002QIC_\x0012Deb¥²T :áô\x000cà6\x001bÙ`G¬è!pÄëQ²I~Ñí?\x000e®VñUødU(\x00085\x0001ð\x0003\x0012'KÅ	ÀQ\x0014\x0018ç$y\x001d«ùb<\x0012§\\x001e-ØÎ\x000f2\x0002Yc¸£Õ\x001f\x001eNçt\x001e\x000b'ÓÞ!\x001b¡Qòª\x0003rlÆ©N§g4@³\x0005/Í&h"ítyµ\x0008Þ
\x001e\x0000\x0000ÐbîöGôé\x001cIó1A*ÉkË+ýªÒ÷\x0006ÝN¤Y¡P C$êò®\x001e/R\x000f#\x0015Ã\x0011\x0004;Û\x001b\x001dîÎ@DÉQjáÒ\x001cWæùªÊ\x0012ð3-Î\x0013Jrü
+?§4§\nï\x0004\x0008AÀZ\x0001\x00117`T³ÓÓ\x0013é3E,Ãý\x0011\x0003åêGÉ6hRy	h°Mò+òëðT*ë¬°±R5Î¹Ã1|)%]¢I
yÂýáÑD\x0006,\x001f+¦T7\x0006^¬Òÿ¥XLÀ¦¯°b±*¦²%w$euùÛ\x001cV»Æ·èÌ-£¦öÁñ®î±¡N­\x000e@\x0005*N Pdh\x001d\x001dïÔ\x0006\x000cÈ$á"ü¡p¶gØª ,+\x000f~#Õá_ðnAÁ\x0014²Ääñ¡¿½óÖî\x001fº÷¦\x001bnûÆ\x0015ëW_¾qÍ
«©D¬{Ö,{êß¾õÇ\x001foèÝñ õÆs÷_©\x001cÜ¯v·eýéÇë\x0007Tðñ»\x0016¼Mq­ÛW}oõàË?¾dy{ý/6í¼áª\x001f¯^ºiÅ×åÅÚ(/¢
31\x0016Ën_µtýª%·¯^vÿ÷nüÕc[\x001bÞ}Ë4Ððùæ\x000b\x0015ìÚýìÎ>ú(H@Øº\x0015tð\x0017"ø<TðÎÛocÅEá\x0010*X\x000c:\x0015*H`§
@Æ<¾¥ùØ<¡PÀ_©TØÏºy@AAAªÊÎSé\x000b<X\x0008\x0015,\x0012ýÓC\x0005Â\x0010\x0004X°`Á\x0005\x000b\x0016,X°ÎC5ýáù\x0005obBA¨`ñèL?\x00159õ-ÈG@çUg\x0011À"-
ÑrÁY"~k*t¦DúæT\x0010(æÇbp9_DFØ\x000b
\x0015HUeòvop\x001cÁûô]cãm#Ú\x000e+Ï;µÀ¬`Ð¨ÕZGèà\x0014ÖiÂ§°zb¤ïôôº¼öé^ÂÞ\x0001\x000c
°\x0006\x001b^/\x000bÅ\x001b\x0011¬\x0015#{n],E\x0015Ê*á¥"+ãi}zÔwX°F+Þ\x0010¤³Ó\x001fÖ&Ò\x0018ÍÆ9VÚÄê½ÍlE\x0017D@\x0014\x0014é\x0010p\x000c\x0008\x0011.l\x0006ß\x001fU»í6ü(\x001b )WW06)\x000e>WË1b¯I¬ )¾\x0004B\x0011Ì\x001cAÇ\x001d,%_©æÒÙ@08ÜÃ3!\x0008x=B6NÛßïòö\x0011\x000eÜ¡Q,\x0011ç¿Â\x00154ÙH
éê÷É³DÇX!Ï\x0015Éå
á`ÄSÝV¢\x0019ø\x000c\x0010
51\x0010N\x0018³%\x0017'fåù\x0016$À\x0015¨8¼Úò+Pªò¹lÉçNÙÝÇ\x0011ªÓ7ñÆ1ªÃ$êIÆ\x001f\x001a¥§
\x00157ËÅ9>'IUuºÔÍ¡'3#Np<Ç\x0017ä!ÒÙ|(\x001cÃn­|W6¼U¹yyÎå»êò\x0004ú\x0001êDð\x001678¦®\x0008B4cTÇ´w4Ds%_K\x0003Z@,èD2ívyõ6¢Ã6ÉsQ-NOO0ªMå°2\x000bB\x00108AÙ©*Ôd	R
 \x0013|E^>VÌdJ\x001ew@G¹z­Dë\x0014Ö8E6æq¤Iki\x001b1vöé\x0006:FGå§Ná
T¢`¢M7©\x0019èÐ\x0019»uS#fÌêòz\x0013ÉD±TæXFäYeÐêÓr\x0001 \x0002Á\x0001|%\"95:rè½w_xtë½7Ý°nõò_¹üv¥\x0019½ñ%*Tpß7í¾õÆ?ÿò®¡][}o¿TøàµY¨}OÓ¶\x001fÍ\x0007*xíA|¡;õ\x0017ºýÕûsziúµ'\x001fÜ¼û¦«våÒÍ+¾¾YÉ>ø,W\x0000Â,n[µôö+W<´îæß>ýDËÁ\x0003¶±l$2¨`çs»¶=þØV¹\x001eYPAKsÂ\x001e1
\x0016æB\x00051y\x0015Ì£1Ôp*Tp| oPvthPAÐï+Ë\x0010*ú\x0002	\x001có÷ißý¹úÿ3LéÂ\x000c\x0019B\x0005D\x0002T\x0000C\x0010`Á\x0005\x000b\x0016,X°`Á:·µçû\x0016¼}	õß\x0010*XLúòLé!ïàtúÔ=üåç\x0001tKE«Õr<ëJÇl± \x0012\x000fZ¡/	\x0012VD\x0010K¨X(ÉÒ\x0015IdkÒ
"©\x000c1í\x001d²ôê\x000c\x001d#º.ù86Ñ©5tjõícÚ\x001e½nÄ<9IlNÍ~Ük¦°FDÙÏn\x0005[é\x001bQ²	4ÐÉF\x001byÌ&`6¢Íá\x001a\x000e-©¬»Â$Y¡(H4'2Èdóa
£úmx«ÚÅÆ¨\x0016ÒÙ\x0015M\x0014+~N,\x0001ÿ~àçÏr\x0002\x0003:ÿò
Ål)\x0018O¹ý#(©±`
6¢ÞF\x001cEÀ\x0016þÃ
TpD\x0016Õ6_p$²æÊÞf¥2°&\x0010å)T@\x0001	¤9'<'Ð¥J"vù&ÒÙgÅAv\x0003~T\x0016F5âö&L\x001e\x0014!ÿñ°|´¢õ\x0008ÖdÅÛH×`8eÊ!ËòR\x0003÷Ì³\x001cM3¹xÒi\x001egÀ5Ê·jÅ\x001b	g'0È¢4\x0017åÄ¢Xc\x0015WF'OK±Ê¥\x000btÈ\x001f5®\x001ej·-fü\x0005o°\x0019V \x0002¢^>âö\x0016O` 2e\x000b\x000er|¦Vcõ\x00012ùá\x0014\x0015¨\x0000\x0015"È?¨ÕÄ\x0013'ÄJ5É\x0005\x0011Ó3\x0008\x0001R\x001e\x0010e@¤.`õ6\x0005\x0000^
X\x000bB´»}ºdÎ!ßUM1\x0000	Wa¸r¾\x0018\x000fl8Ù`\x001a+ÚhÅïËÛ\x0013OdòTE¾+¡Â	
9ÊóÅðyMfK>_ÄÙ;Q²Õ7°ú)¢ÁD6N-\x00136vª}`¼§st¨K¯?É\x0015·)Ù\x0007²:Æ&»Æ\x0003\x0006ÞF\x0010Þ@(Íé
ÏÏ%pÎ7T 0\x001bàúX+çr^w´îÀþ'·ÿì×_µòßW._¿rÙF\x0000\x0015\x0000§Í+üüWìÛðo\x001fm¹WÿÒ¶à;{\x001f¼JÏ
,{\x001f=s¨àÚ9úNäÍçª'}\x000f\x0014oÿ[ç{\x0008lÝ>æà>ºnoñÀ^ßojÛr×Þï_óÀÕß¹ê2y½nW\x0012\x0010>\x0007\x0015Ü¾zÙú5?ºñÖ?<÷lû_ÿL\x001aÆóøüã\x000fvìÜùØã=üðh¡A\x0002U;vî\x0018\x001b\x001drR\x0004
\x0016bý	ãàg ©(2~*Tð\x001f\x001f~8\x001f¨`ûöÇÏ(
\x0014ê$1'»]B±0ûJ(((¨Ï	\x0010\x0005^í¿õüÞö,Øò3\x0015
\x0016.\x0005¨àS\x0018\x0000\x000b\x0016,X°`Á\x0005\x000bÖ¹«\x001b¯¹rÁß·B©PÁâÑü0äÿ%í\x000bþØW\x0013¦(y.\*`ñ\x0010\x0008YS!K2dN\x0005ç\x0003\x0015XãA[,èHE3\x0002[\x0004FTZÔ¢t\x0001>ßã\x0004±H³¡D
±»Fæ^¡[kèÒ\x0019\x0014¢\x0000@\x0005:}ïAÙ\x0008Ã\x001bsú¢Ý3b£Úíó\x0010ü\x0015è¨·â
\x0016ìl%ì=þ ±PòWÙ$'\x0016y©¢à\x0004*$ Ðl!v{\x0018Õ`­VÐ£?f#\x001dîÞD\x001a­r	^ÌóbQÊò÷Ò\&_\x000e%3Nw@Ù;PªÉ\x001d=Ùgo@ÉfjE	|bÙ×ßD¹:}¡ÑhÚ£ý´æ%xN\x0012Xq\x0006*\x0000'â,` *é\x0003åB)\x001aO;|Á	ÊÕ-ÿ\x0014\x0000*\x0010¬ØÇÊÉ\x0011\x001b~X\x0019l\x0003Nµ;ÜCÞ 1÷ø4#YS\x0012+ÔÅ\x000fL¾\x0014
­éal·âÍÊè@L/8)8\x0018>©®"\x001f«|fc¹¢'DÜþQÌÞ\x0010
h¡ö÷\x0010¢ÙF´Ú\x0016\x0004quÀí­nÿ`$fÌ\x0017\U&*Ú	\x0016ø\x001dðÀò@\x001b8¡ \x0005BMN\x0010%gyºXI¤r\x001eØh\x001e×N
\x0014\x001eãc\x0000càGQ¢AAAZq²{Ú7\x0016I ÅJ\x0011²T\x0012$\x0015ª\x001c%`\x0019ÁpÅdÆëñM\x0012Ô\x0000\x0000'PùV\x0011\x0016¯/0d®*×N\x0010iyV\x0019>WaâÜt02ew\x000f#ò\x0010Mêè,dj6\x0013Í\x0016ªÍLv\x001a1Sw¯n [7Ò­ÓuhõíÚñ6 6­¡];Ù©ìÒO\x001e7Y¤Ã\x0011\x000c3¹|cÄ\x001ayeòÏ7T\x0000\\x0017$\x000eIR0\x001a[ÿöákÏ<}ÿ­?Øxõë×¬¸}Õå\x001bV.Û\x0004´äÎÕK\x001e¾î\x001b¿¾ó\x0007
ýtê'¢ïí+\x001c|\x0006\x000eü3PAáÝÝg\x0002\x0015\{ª\x0006wþ²úþ^\x0006h\x001f\x0003\\x000b.Vã\x0002f\x000e\x001aÁO¨ Z·®ÛS9¸?úæs}Ý÷ëÛ®ÛúÍ+îV kmX½T>nZµlóêåV-Wâ\x000fþð+¼góý{úëLÛJ>Ï	ó
vîÚµëùç~úi} â\x0004\x0003*xã×QÛÂ T°¨4\x0017*O\x000eÆMÇãS#\x0011«þT¨`ÏK/Î\x0007*øí\x001b¯\x0013¨ ÏC§\x0002((¨Ój±\x0011\x0005³úÔ=|^3\x0011 T°Ht@\x0005Â\x0010\x0004X°`Á\x0005\x000b\x0016,X°ÎE}í«_I|´àïX¡TA¨`ñèý\x0018Dªd\x0017çç?çV_Þ¬ãAÇ?ÍÑT2\x0002<
\x0012A3PàsPÁ©YVBÑ)P9	.¤ä\x000b|¥LNä+5éù\x0015p)V|á¨	%\x000cÆ\x001e¡kÌÐ6ªï\x0000Äõ²ºÇ
ÇÍ&£\x001dy¢9o8{#\x0013£Séé\x001fBÿ°à\x001fYðC6êhB©\x000eOP\x001bKâ%:ÆñE^¨p|\x0015\x0010\x00053]_IäÈ\x0014ËÉxÒå\x000b\x0018Iû\x0015ÓÑFlÆì­ÞÐp&OÑ\¨ÊGi.R¤ýò¥Ü^=áèµQ-V¢\x0001!\x001b¬x½\x0012+ÐQnÿH(n
Ç-Ó>-ØµZñf`Ýoos\x0007£i$SöÐB\x0015iF`XI=P¢\x0010f\x0002\x0011¾|EKf
.ùj\x000ew\x001fno\x0006Ö\x0007äÇ\x0008þ1\x001d²¢ld|{NÏü\x0005Ât3B\x0018pY\x0007+%ÖÇGWeó©7\x0010¶R®ã &@¡&,X\x0003no&M\x0005ÚË\x0008qNJÙP:o\x000f'Lé~Ò d­Ð X\x00074¡d;éìóõþÁ\x0017 ]}ÀCà¤±ËÓ\x001b\x0019r9\x0007ËÅ\x0005±À	,xPl4f¡\x0002@KðòkUùV9)WdÂ±,æ\x000bQînlT¡\x0002ÅÞAÖQh¦ÝÓXÂ/û+L\x0017óP\x0001´\x0002°àø¨\x0006\x0013éR%\x001eMØÝ^\x0003Fõ)s\x000e@\x0008Ü\x000er\x0010")S\x0007\x0018aÅD	%3ö`Ødw)ø\x0001\x000eò ÷üõX³h#Ý\x0003ÎÖ\x001d6¸\x0006\x001c\x001c7w\x000fNôõé\x0006»µ#\x001dccíZ}V¯Ñ\x00101C»ÖÐ¡\x001dï\x001e<>e1éP$+\x0017Yjép\x0001 \x0002eR%Q\x0010RÉ¢\x001d\x000f¿±ûù­wlÚtÍÕëW_qûªå\x001bVÊZ²yõ»®\ºý¦kÞúñ¶g\x001eÄ^ß\x0011?°¿pðrÝÞY¨@Ö÷ÜzæPÁZEàü_l¦ëöÒïï«Îè¢
\x0000\x0008Á\x001c«óèW@ËW®Û[O\x000eîK¿ûâðS?{kãwX»æî+þeÓªË6¬^²~µ|\ºiÕÒÍ«o^\x0005L'Ö¯\zßõßÚõó|øÆ¯GÚZC.\x0017KÓÜ©OÅ\x0019:\x0015ìÜµëÙ\x001d;\x001eÝ¶m&û`\x0011@\x0005G\x001cRp\x0002l\x0016*¦p7y)\x001f5\x0005-\x0000*H\x0018\x0012\x0010*X0¨ nÿ80\x001e\x0019ÃSÚ \x0002\x0015¸IÔ¥,\x0016a³(ÊÙ?\x0003G\x001c?TàrPÙlaSÍ\x0005ø¿\x0017((¨H(ûfð<¡\x0005\x0010*X$ºt \x0002\x0018\x0000\x000b\x0016,X°`Á\x0005\x000bÖükàW\x0017ü*Ô¬ T°xôÅ|^ð§åé\x000b>GR; c+IUA(
¬·D\x0012©ß\x0008ZS¡S9S5C\x0014\x0000¨à\x0014Þ@!\x0013ÝA,@¦¢)-IbE\x0014ær\x0005ò=\x0008çÇ¸åÅT¾Hy|(181Ù£3të';µ\x000eÝ¤jAß¥×\x000fOMì\x0016{\x0008õ%\x0010Otr÷!d\x000b\x001dAÉC6òc\x000b@Öãöf§;\x0018Èìe&Ì\x0005AdTszµ\x001f
\x001aèwK5áK¹B8\x001a#§=zì±¢-\x0008Ñ\x0010vwW<mÊÉlLdÑ`Ô`îSs\x0004¬x½\x0015?jÁZð&h§\\x0003þÐd"CåËþ\x0012\x0013%	»s\x0004%»¬X\x000bJ¶ T«ÝÕå\x000bi\x00139æU¾È\x00084'ñ¬(0<à
xyn%\x0011XV¤«|®ÌÆ2\x0005W81åô\x000cà6%ÄáJ\x0014ÈÃÄÉFÒÑæñ
ÅÖR5Èði±Fó\x0012\x0003\x0012\x0001Ä*hì**\x0014°¿TI%Ó\x001e+°âm(Ù\x0000â¢Õ\x0017\x001aIåÐ<íÌUì±Ù\x0017\x001aÅí Õ\x001fEÈ£Àê\x0001o´\x001a\x001bÙéô\x0004ãÖDÆ^¨\x00042ix\x0012£:lzùöH§&\x0010:LYJ´üÜf\x0011¤<- Ñ)ð\x001c_å¥
-¤Õp<GzÃzjº\x0007¥Z\x0000º ¯"5UÁéî	'\x000c4V¨øh6Á
9V,Éß.(×äxN\x0019 <:^\x001e++³ùP(J:Ýz\±°`À|@¾+Oh(]D#Eåùt¸Àm­V¢Q\x0019f\x0003p* 4¸£w: fðTÙ,º#i»+`´
\x000e\x001b{{õ}]ÚÁÎ±ö1­fT§Q\x0012\x00104 \x0004a¢C7Ñ©è0é\x0010\x001c÷ø\x0003élºD³Ò	V±hP\x0012\x001fNÿ;"Vgò\x000b5kè=ãWPe¼vGç±ú·öïÙzçæÍßùæm«WlX³bãªË×¯\²aÍ»¯ZöÔÍ×¾wÿ\x001d}Ï?jÿÝóé¯\x0016\x000e¾Rq*x}_Ö¦Gï;-TðÜ-ß>)ù|\x0006'Ø!ÿÕºµ3PÁºëäó\x0017×ß\x0008ò\x0014\x000e¾\}\x001f}à¢q*ø)
\x0012\x0000\x0005 jÝ>ºnOµ\x000eÌ,Zq\x0015á\x0001êÎÁÏ¥\x000f\x00001u{*u{3|I¿ã?ýðæ\x001d7üëO¯\¶é¯o\	¸
«@\x0002Ê\x0015$Uÿô»k_ÚòÀÇoýn¢¯;\x0015ð\x000b\x000csv\x00062'¡\x0017fü
{~ÛãoÝºuË<ºÀçDÛ·?>`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=rh«{;êôæ\x0011Sí>µ{;85ºóMÕ\x0016Çæ=\x0006Záä?-ü6\x0000\x001b«-qñ\x0007»¸\x000fÙß\x001a\x0001&pgle*;XR\x001d0¼\x001d\x0004SCÙ¬\x0011£z¯mmåþÛtåvfUé}[Í\x000b\³ÿ,M&î&®?æqce4Ú44ÓÇ\x0016Ægõ#B/m6pÄð5\x0001#L»Ql\x0008#¥l\x0007fBSZÝ¯ËF©\x0001\x0012ÞÀã\x0002ÅªU'Ñå\x0016M2y\x0015\x0001Ê¢äç4â\x0003!xmjµd$=S&\x001a§ø×\x0005ÿ,VÈ%Ò`dº	jìHaD»Ä</p><p>\x000b
%qÂ°õ\x0015¯a#Ý\x00130`Ñø\x00088¬Ûù@@\x001fZ7WÔ%´6M9F5ÌÝôÇÈðë:»lýØøÓQ0;A)Ab®ï8Ý¼2ÛëcTì\x0016#\x001d`ÈÊÌú\x0015H3®¦OçO>8ïä^±ÁNr3\ì/l­©¬ÚzDäkÕFì£JÈ\x0001mÂóÚ© \x0001[* v¯\x0007·ÆÃW_Î`W÷à\x0016CL\x0000zæ\x0001Æàz?\x0006`ÖIÉl\x0015Û!X	'í¡¡RÄÝÙ	`ÄÑkÑÙgþ«+!\x0007ê%6HôÇpñ\x001d3,+47$a\x0011\x0015\x0006\x00136,;Ö\x001dE[å\x0008Ç+àh¨ù»\x0012\x0011fÎ.\x0013\x0013ö+ï\x0001±qìf\x0003eCÖ\x0016_ëÎ R;¸ª\x0019Ì\x0003hr\x0012gW +ÂYìOE:)¡ö#]³\x00049êýÅSò*+J Ê9`·÷f\x001e	µü!ôóÐ½\x0013[\x0007\x0005(úðgbX³yâ\x0016jX@³wÔ¾¶),\x0017¹WÎøBûR¹x\x¯¸hG\x001c8hí&úö´7YrçãÝ¨B0hÅ5ÿr\x0008à\x0008+*%!¾\x0015ZvøÊ\x0019¦W28Þt\x001fFÖ=ªè|àòÜnir`ð\x0004	J£Æ|Èçª\x001f\x000c\x0017f,\x001a2W+ÆÉ«XH+]¹^{Êë®ùôþãµfhænBº\x0012gôÌ"¿åW8	»BHñY\x0014ògFuó\x000fAxÝ</p><p>j3 ¥Àa\x0016pE]\x0016Õ×\x0015%$¬:</p><p>DZyºÊßxèjÖ¼wÿy¿ï\x000c\£Q2n°Ah¡ôk¤öFÎ|yL*\x0001"\x001e \x000b¸^Ù4x8\x0005ööQ¬÷t¡¿Õrn\x0007ñ¨:{¶\x0006\x000brµ¤´¾¤çÕ[\x0018+Ôc\x0017Ú4)Ä¨m0>CÀ¬\x0016\x000cAÁÕbv\x000fEbI\x0002uD³®5SóÉ¤ðñ»[u\x0019ºRw¬ëç`Ý\x0015³ºSô3e5|«É§ÐU\x001a.LI5HÔ¨?½L\x0013rrÆÈ¸$Y­\x0012È\x0010e$=¸\x0004\x0015¨Æ\x0012Ô\x001eañmûÖ$³¸/Ä\x000f1¡gZSéÓµn¯\x0017-ºjÚ\x0016\x0004«þÖ\x0006\x0015J<¥tI¢ñ·\x001dÛzcû\x0016Øg1ð\x001f]"£\x0013­\x0011gÿf?></p>
  
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
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="#" class="newsletter fond_gris" method="post" id="inscription_newsletter">`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://developpement-durable.sports.gouv.fr/m/" class="connect" method="post">`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://developpement-durable.sports.gouv.fr/m/" class="connect" method="post">`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://developpement-durable.sports.gouv.fr/m/ressources/resultats" method="get">`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="https://developpement-durable.sports.gouv.fr/m/ressources/resultats" method="get">`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="#" class="newsletter fond_gris" method="post" id="inscription_newsletter">`
  
  
  
  
Instances: 9
  
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

  
  
  
  
### Private IP Disclosure
##### Low (Medium)
  
  
  
  
#### Description
<p>A private IP (such as 10.x.x.x, 172.x.x.x, 192.168.x.x) or an Amazon EC2 private hostname (for example, ip-10-0-56-78) has been found in the HTTP response body. This information might be helpful for further attacks targeting internal systems.</p>
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/articles-techniques/article/organiser-un-conference-en-ligne](https://developpement-durable.sports.gouv.fr/articles-techniques/article/organiser-un-conference-en-ligne)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.10.10.82`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/rediffusion-journee-technique-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/rediffusion-journee-technique-du)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.10.10.82`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/retour-sur-la-web-conference](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/retour-sur-la-web-conference)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.10.10.82`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/programme-des-webconferences-en](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/programme-des-webconferences-en)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.10.10.82`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/formation-en-ligne-evenement](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/formation-en-ligne-evenement)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.10.10.82`
  
  
  
  
Instances: 5
  
### Solution
<p>Remove the private IP address from the HTTP response body.  For comments, use JSP/ASP/PHP comment instead of HTML/JavaScript comment which can be seen by client browsers.</p>
  
### Other information
<p>10.10.10.82</p><p>10.10.10.82</p><p></p>
  
### Reference
* https://tools.ietf.org/html/rfc1918

  
#### CWE Id : 200
  
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
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du](https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du)
  
  
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
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/](https://developpement-durable.sports.gouv.fr/ressources/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
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
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/local/cache-css/](https://developpement-durable.sports.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/local/cache-js/](https://developpement-durable.sports.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ecrire/](https://developpement-durable.sports.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/plugins/](https://developpement-durable.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/local/](https://developpement-durable.sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/plugins-dist/](https://developpement-durable.sports.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
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
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/robots.txt](https://developpement-durable.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/sitemap.xml](https://developpement-durable.sports.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/](https://developpement-durable.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/lib/](https://developpement-durable.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr](https://developpement-durable.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
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
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/ressources/actualites/?debut_articles=20](https://developpement-durable.sports.gouv.fr/ressources/actualites/?debut_articles=20)
  
  
  * Method: `GET`
  
  
  * Parameter: `debut_articles`
  
  
  
  
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
  
  
  
  
* URL: [https://developpement-durable.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://developpement-durable.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
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
  
  
  
  
Instances: 35
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://developpement-durable.sports.gouv.fr/ressources/actualites/article/les-etablissements-publics-du</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [id] attribute </p><p></p><p>The user input found was:</p><p>formulaire_action=recommander</p><p></p><p>The user-controlled value was:</p><p>recommander_to</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
