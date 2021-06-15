
# ZAP Scanning Report

Generated on Tue, 15 Jun 2021 05:28:34


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 2 |
| Medium | 5 |
| Low | 8 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Hash Disclosure - Mac OSX salted SHA-1 | High | 1 | 
| PII Disclosure | High | 6 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 12 | 
| Source Code Disclosure - Perl | Medium | 8 | 
| Source Code Disclosure - PHP | Medium | 4 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 1 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 12 | 
| Dangerous JS Functions | Low | 8 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 11 | 
| Base64 Disclosure | Informational | 11 | 
| Information Disclosure - Suspicious Comments | Informational | 19 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 7 | 
| Storable and Cacheable Content | Informational | 4 | 
| Timestamp Disclosure - Unix | Informational | 5 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 11 | 

## Alert Detail


  
  
  
  
### Hash Disclosure - Mac OSX salted SHA-1
##### High (Medium)
  
  
  
  
#### Description
<p>A hash was disclosed by the web server. - Mac OSX salted SHA-1</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/A3_Noyade_chaleur_corrigee.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/A3_Noyade_chaleur_corrigee.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `A884AF84A884AF84A884AF84A884AF84A884AFA8FD2CFFFF`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that hashes that are used to protect credentials or other resources are not leaked by the web server or database. There is typically no requirement for password hashes to be accessible to the web browser.      </p>
  
### Other information
<p>A884AF84A884AF84A884AF84A884AF84A884AFA8FD2CFFFF</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage
* http://openwall.info/wiki/john/sample-hashes

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/A3_Noyade_chaleur_corrigee.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/A3_Noyade_chaleur_corrigee.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `5252522752525227`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/SeBaignerSansDanger_A3_v4-3.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/SeBaignerSansDanger_A3_v4-3.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `505526462526515312`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/SeBaignerSansDanger_A3_v4-3-2.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/SeBaignerSansDanger_A3_v4-3-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `505526462526515312`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/Se_baigner_en_toute_securite_.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/Se_baigner_en_toute_securite_.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `505526462526515312`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/Guide-loisirs-nautiques-en-MER_2018.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/Guide-loisirs-nautiques-en-MER_2018.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `501469682698262`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/CPPREVENTIONDESNOYADES11JUIN_2019_004_.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/CPPREVENTIONDESNOYADES11JUIN_2019_004_.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `503503503503`
  
  
  
  
Instances: 6
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Mastercard</p><p>Bank Identification Number: 525252</p><p>Brand: MASTERCARD</p><p>Category: </p><p>Issuer: CREDIT SAISON CO., LTD.</p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/](https://preventionete.sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/extensions/](https://preventionete.sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Equipement-1](https://preventionete.sports.gouv.fr/Equipement-1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins/](https://preventionete.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Avant-une-sortie,5](https://preventionete.sports.gouv.fr/Avant-une-sortie,5)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/local/](https://preventionete.sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/lib/](https://preventionete.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes/](https://preventionete.sports.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes-dist/](https://preventionete.sports.gouv.fr/squelettes-dist/)
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Equitation](https://preventionete.sports.gouv.fr/Equitation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Equitation" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Secours-en-montagne](https://preventionete.sports.gouv.fr/Secours-en-montagne)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Secours" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Memento-prevention](https://preventionete.sports.gouv.fr/Memento-prevention)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.preventionete.sports.gouv.fr/doc_PE/PreventionEte2018_GB.pdf" target="_blank">mémento haute définition</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Baignade](https://preventionete.sports.gouv.fr/Baignade)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Baignade" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Meteo](https://preventionete.sports.gouv.fr/Meteo)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.meteofrance.com/previsions-meteo-montagne" target="_blank">prévisions montagne</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Escalade](https://preventionete.sports.gouv.fr/Escalade)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Escalade" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Delta-parapente,4](https://preventionete.sports.gouv.fr/Delta-parapente,4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.preventionete.sports.gouv.fr/IMG/pdf/secours-2009-GB-1.pdf" target="_blank">Les secours lors de la pratique du vol libre (en anglais)</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Kiteboard](https://preventionete.sports.gouv.fr/Kiteboard)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Kiteboard" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Balisages](https://preventionete.sports.gouv.fr/Balisages)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Balisages" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Cyclisme,36](https://preventionete.sports.gouv.fr/Cyclisme,36)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Cyclisme" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Surf](https://preventionete.sports.gouv.fr/Surf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Surf" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/VTT](https://preventionete.sports.gouv.fr/VTT)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=VTT" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/Le_c-o-d-e-_de_la_plage-2018-guide-BDpages-2.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/Le_c-o-d-e-_de_la_plage-2018-guide-BDpages-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#6M16`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/Le_c-o-d-e-_de_la_plage-2018-guide-BDpages.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/Le_c-o-d-e-_de_la_plage-2018-guide-BDpages.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#6M16`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/Affiche_VTT_choix_de_piste_BD.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/Affiche_VTT_choix_de_piste_BD.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#d4hp`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/2_PreventionEte_VTT_420x594_Sauts.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/2_PreventionEte_VTT_420x594_Sauts.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#zZdv`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/ReglesNavigation-2018-A4.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/ReglesNavigation-2018-A4.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#tcjP`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/PreventionEte2017_100x145_GB.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/PreventionEte2017_100x145_GB.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#oThg`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/Flyer-securite-Mediterranee.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/Flyer-securite-Mediterranee.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#6Gru`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/jpg/regles_surf_ok.jpg](https://preventionete.sports.gouv.fr/IMG/jpg/regles_surf_ok.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#D2XX`
  
  
  
  
Instances: 8
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#6M16</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/affiches_ACCEM_canyon_escalade.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/affiches_ACCEM_canyon_escalade.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=î¿4&kKbbÓ\x0011ë\x001c}\x001aJty7ßÅW¢û¶ùåÞÑûK>ÔvÄ\x000eÃ¿@éï|÷·;z]¡.\x0018í\x001dýI¥¥·\x0015?k:'üâ\x001f4ÿ\x0000,\^i÷ò$\x000fué\x0018¤r\x0015XÇÌ\x0014,v\x0007ãª×®ã­\x0001Þ{\x000bÚX´²<DÏ@ðÞßì¶vþÈkñéå8LðÑ;\x000fMíöì¡©ÂÒ\x0000ÃzW=;ùÿ\x00008ë£þfNÚK{§\x0003±\x0010CÐ\x0000\x000b+\x0002\x000eÀ
¯\x0013°©9è=¯ì¦\x000eÓn35rçB·\x0006þÊ{NÓös\x000e¾\fã#ÌÇ¯MÁý\x0008/Üqê=óÁÿ\x00008Ye\x001brQ ê\x0004J¦ë\x0016`>ìæ#ÿ\x0000\x0003Ü`ú²Ê¼¢\x0007é.>Å@\x001dòJ¿ª\x0007é(ªÊ>ü[j>Kÿ\x0000tIläYïYxÑd\x0013Nßä¿\x0004@S²\x0003ï@3a\x000c½ìè&\x0004Ju[\x00119-¶ØæÇ&°Á1"SªØñÌùm´~Å2²ß\x001dö\x001fpÏ\x0003yûó\x0002ûó"õµ
Iù5(6HÓ² ì?\x0012w$ñÓíL¥äÈwä\x0000å\x0011Ü\x001f,í\x000eÐÉ¯\x001eCî\x001d\x0000î	Ì0\x0007\x0015ÈNj]b®wßùÆ\x0015Sæ»\x0012ÍJ	éîL\x0012
~5ú3´ö8\x000fÎã¿éÿ\x0000¸z¯eÿ\x0000Æáþwû õ\x000fîÏÑúó¬ÿ\x0000ÎißG-öl¤\x0019#FaQ°vPµï¿\x0013/ü\x0010r\x0003\x001czÈó¯¹ß{k\x001cãÔDñ#õ!´¡³\x001f|ñNy3æé®lUÙ±WfÅ][gQ!!*9\x0010*@®ä
ªrQ¢EòêÊ5{òêÑÏ³>YÒ<µ§F¾_\x0008m¥\x0001ýU<¦äÍÔm¸ô éUö>\x0006\x0010ü½p\x001døü^dþ)ú/²ôØpc\x001e\x0005pìoÅæX½Ä#|}sj\x001fóºV¥y-ÛÝÜ,rÈïé AÇ'b\x001baZ
­in_`ðåÈfg0	'VÖn¬÷<¶Oc±d¨hWS|è¢×Se\x0014 É<ù6\x0004\x001fUeÜ=Ã&¯«Tþ¢\x000cÚcìîÎìmåÀ$:ÌñOà
ýØÃC¢ì½åÀ\x000f|Ï\x0014¾\x0000þ¦eë¥iíÓ9ßÿ\x0000ç1l4ðÑh0=Ì\x0004²\x001c_0¿Þ7Èþy£í\x001foqcÛ\x0004LÏó¥éËê?ì]F»Û,pÛ\x000cL|½1ýgìVK-»g|ïù©~b\}oUÊÂ¡\x0017¢ =FÃçÔÓâ'<´{S7hË,¯¸r\x0003Ü?\x001eoë»C.º\Y
÷\x000eÜ\x0013x X\x0005\x0014g ¿ç\x001d¿ ì¿2`UÕec\x0004rÖ\x0008Ûb\x0000$»u\x000bñ
\x0005¡;×¶öSÙ}¥\x0013)<"\"\x0000ÕÐ\x0007sÝ¿G«ös°!¯Éì
p¯kßæ¾¼0\x001e+×Ç=ÕçoÊ­'ó
mÓVÊ¶Ü½ $t\x00000PÀð`Mx¯¾Û\x001e¹ì=£Ø¸;DDe_\x000eæ<ë¸àú~»²°ëxFA|7[Î»îJ"¸h+ÄõÈ)Ñüä\x001f×L×§3\x001c
x\x0007,ÿ\x0000viü\x000eÍÐs\x0018bGy¥öÙu\x000eGÌb\x0007ÏGí²«Êi¿áF­ÿ\x00009Må/\x0015³Ëp\x0017`¶ð\x0007ËÔô×î4Ì\þÙè´ûDÊUÒ\x0011ÿ\x0000à\x000e>oj´¸v2þ¬â¸W®#õÛæsÈ_¿þmk{8\x001e\x0018 ,å¤#3\x0000:) \x0000\x0007­{S1öÚHö¿\x000ca\x0013\x0018ÆÍÊ¬·GÏû·GipÆ1 FÎüÉ>äÊÎÌÛTRsÍ¹Á¼r?6*ìØ«³¤~RùøþZjðj¼KÆµIPuhÜQ©^ãí
Æà\x0003µs}Ø}§ü9jÀ±!ß\x0013±ýnç²;Cò\x0019£å!ä\x0016¡s\x000f®¥~ìú·c¬h6ack{Ûw\x00151·\x0016*ÊCñ#\x000fp\x0008ëGãÏ¦íl{\x0018dèhüÁÜ\x0017Ý1æÁÚPØÆq=
\x001f°î\x000b\x001c*öÇ¸9
¹ÿ\x0000mò+Ø(îi<ê¢ÂP\x0006jgìîqôó\x0003ì:Ù{5¤;ì¦?ß+\x000bé:rü\x0006\x0017\x001dOÈÿ\x0000õ#e\x000cÀ\x001azt§9\x0005~a|r\x001b³»\x001fÔ<8Ëú>¹ýRý
^.³7\x001c\x0011>^©ÿ\x0000¾-ñëcR>áKüçÿ\x0000¹óò>¤«[Xb{0ðjl¨{ $Új|9æ¾Ð{_=x8±\1õ?Å?pòù\x0005Û^ÓKX\x000e<w\x0018u?Å/Ô<+[\x0001\x000fÄÛÕcò³Ïùm«A«*ú\x0019+"
#¬\x0007¸­G¸\x0015Û9NÅí3Ù¹ã¬\x000b\x0004wÄ/;ÙZó Í\x001c`lGx;"®!õÔ®}f}\x001fóL¨ôï,¦\x001b©ìFô#fG_¡>°vÆ\x001e1Ë§ãpGÌ>ñ\x0019aí<]'	~=àý¬p¶o\x00023Í>`ÿ\x0000/°¼¾}-º\x0013^\x0012F&\x0003Ø\x0010Ñ|ê}Îp:¯ø\x001fâ¼y%\x0001Üb'ú`ñbñÌÞ9â8ÿ\x0000LQéªö?\x000eòïüáÎ¥°Tºè.å@\x0010¡ñåBÍO]¤ö\x000b\x0006#yg)×M >ò~ÖÝ7±¸qïRÐ?IûV¾¨Íö@\x001f\x0012þoþ~Ùy\x0002Õ|¿äã\x0010\x0001F \x000cp®õ\x0008z4øÞµc¶/nûO³à4ú>\x001b\x001b\x0013\x0011éòïÿ\x00007\x001f¶= \x001e\x000e¬lHå\x001fwãûk31ç-®xKI¿ôïbº¸bÔ\x001dØñ\x0002ÄÔç`ËY#)\x001fâ\x0004¾_%LJ_Î\x0004¦ì»\x0010<3ëwç¿\x0016å«ùøú°4QwfqP´ëÖ»~ÍOLú_ÚMTpi2H¸3=|þO½öî bÓd$ó÷Ëf7häQïú³æ×å\x0017ç-ïåEÏ8«-£ß[¢ò¯\x0017\x001e4ß£W·v\x0017oäìØõ@ýP¿´w\x001fÁ|s²;f}+\x001bÄýQý]Å=¹µ\x0017#}cFô\x001f=ùoóÂÓê¥¢8«ZÎ\x0000OS½GóÆM;6{¶´´¹\x000e\x000fL¯9Ðø~üß`Á¯Óv¼8vó¾¡ðý#æ¼2Z\x001aî=Ær½sþpãF¿Éeqql§ý×UGú¥o½9ÍO°:|á)Àwm!öïöEØÜ37	J>[KïÝ\x0010£ \x001c~x~UùgòÃËÆÚ\x0000\x000e¦^3\x000cõCÌs%E\x0000@º(PxþÑßKí\x001fbèû/KÃ\x001fïlpnrÜ^ÝÕ}+WUÛ¥ìý?\x0008þòÇ	'ÔwßáWÒ¾*ö\x0012\=OÙïá\x0013þqGË\x001a,zZê|dÔO$¸vûqü[ _ÙR \x001a·ÜþÈÞ{\x0013£Ó#,(åÜLqß¯ØíýÒà\x0018HÑÉ¸<ã¿/!÷¨j2?.'ìöÉWæüãæ~ 5In%C\x001a£ª*ÜkC¿CCO
l{gÙ<}©Å2M\x0000@\x0000Ý{ÜîÔön\x001d¡Ä214\x0001ªéïS·¾6ëÄ\x0000p\x000eù\x0001å\x000fË\x0017:	)þì½xÿ\x0000À|\x0011¥OSÙ\x0007f,|òÈWËÓ\x001f±«\x0017³ú=\x0008âÉGÏ$|¶\x001fcm{,û/à0\x0017ç)¼½å\x0008þ¯¥+]º*B¾+ì]ÛýE|«[íF8q\Èä"8b>'ô\x0002×ªö«O¦\x001c8ýdr\x0011\x001c1ùÐ
èôçvÛç×<Sùùë«þgÖ\x001b\x0010ÚT\x0011m\x0015BmÐ¹?\x0013Ã]ÂònØö?jm#Ã\x000fæGÇ©û¼7í>ÞÍÚ\x001bHðÇù±åñïülÛÙ­¾ãsãOË/$\x001fÌMZßH\x0012¬"bÜïEU,h;±\x0002<}³]Øýü£8oìù\x0001=¶p{3Cùì±Å|7×Ü/æ©q/ ¥ºÓ>¬ù;òKòN6j®Ð\«Ë¹-'4àÕ"j»|!ióÏ£´\x001dEX"	ïÎòâ\x001c'VÝÔû¦²1i1\x001cQ\x0004ÆWÅgscò®Ìv[£¦CògÉ~HP×Vö±Ó~WSr¯¹\x0012¿\x001a}\x0014ÍXö³ô"ç\x0018\x000e·WþìÓ®\x001d¢Ò}Qó¯ýÑ¥_­K/B~ý1þvù3ÈÈc´Ýh(\x0012Ò\x001aNÀÆ¼>ö\x0003\x0004½¢ìý\x0008¨J\x0003Ë\x001coýÈ¯µ\x0012í½\x0016Te\x001ft#ÿ\x0000\x0012)ÂÒYºôä~wÿ\x0000¾Óo¬®-4»[XÞ5yB"\x0002À¯*+³\x001aV´Ú½6ëÏhûwxå\x000cP$\x0010\x000c¨
Å^ÄA®öÃ\x0014á(ã e@o·BQ1i\x0008,E=³çÖxäéÖlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]H¿&ãeþ£ÄÛ<C·Ægï\x001fp~¬öKüG\x0017õOû©1ßï\x001bç;4/^Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»\x0013fÉ\x0000ª¸\x001dä¦L\x00066\x001aà	®xå±\x0013H-9a=Åí3*8Ñl×Nå7Z;æ\11%Yi\x0005»djïV§|Î\x0016$³\x000b
½³yëóïDòK/.A\x000fî£\x0005Ü|øì§ýb3­ìÿ\x0000g5\x001aÁp§ùÒô·Áêû/Ù]gi,XÏ\x000fó¤D#öî~\x0000£®u;-\x0008ñ¸sþU\x001cáÓéÏ&~cÎ[>©\x000b[h\x0011¼,Û\x0019äãÈ\x000fòT\x0012\x0001÷$ÓÃ=\x0013²ý\x0018åÅWðÆëâv}_°ÿ\x0000àiáLOW! ?ÉÂè2ko ÆuÌôÌzz\x0015cþìjT\x000fa¾ùâû»¹/äi§fy\x001cÌÄ$õ$ÉÏO\x0004\x0000\x0011\x0000\x0001È
tÅ8¢#\x0010\x0000\x0002\x0002\x000f(V¹,ÄÔjIÀù6Õ<Ø«³b®Í»%>DÕl´å×f³4÷B-\x001b,M!\x0005¸«\x0011F4Véá\x001c2\x0011â£WVëaÚXgàâr\x0008ñ\x0018\x0002\x000cl\x000b#â\x0016\x0004Ò»çÕùöþå?2YÎòYDþa²Í7ï\x0018Âç÷rB­ðÇÇtn#hK|`\x000e»°¡`ì8ÇS¾ÞOÎßðVÔktÙ"\x0006I
>AB1ô!ÌHÍó\x0017·Éf YO_çÖØ¿7¥±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015?çå\x001f+ j6þq²_~æî\x0004è¿\x0003õÐPû§9ÂööC ë±÷¿Tÿ\x0000À·|RÑÌïÕú;¾ôßO({tÏzÎ\x0013þkÿ\x0000ÊÔò}£Nü®ì?Ñ'ñ>\x001e\x001fõ£+ó5Î²u>>!|ÆÇàøÿ\x0000ü\x0010;\x0017ù/]>\x0011PÉûÈÿ\x0000õ\x000f­\x0005w\x0017¤çÀï·ÍËæÈ\Ø«³b®Ï?óô/=º~òÔMDa%ÜÊ\x000fR\x000f§\x0015}¿¼úsö7Ó\x000fû¥?à?Ù øÚ7\x0015'ý¿Þ¦ruo£>Dç\x0018ý.fÅ]\x0015vH<µåMCÎW\x000be¤[Mw;t\x0018ÚFû\x001d½úeñK!¨O·\x000bW­Å£\x001eYÆ\x0011\x001ddDGÚµ&çlì_ó^cüÒ­µ¿0Å\x001d¼wSz)\x0010<ªÜ\x0019Ç0µQP¦b|@ÌíGgäÓÄJ{YªêòÝí~¶3K\x0006\x0018GÊ\x0016#µÑëÜ¥\x001dÂÊh½³Õóì¿>\x001d\x001f_½Ð$jG}mê íê@YGo»6ýf\x001dâþOÿ\x0000Ás³|m6<ã9ðêä\x001f®!
¨%T7}½Îñù9'Í»6*ìk(~¢¸¤\x001av;\x0014;6*ìØ«³ÍóþYÿ\x0000\x0015ù\x0017Y·QVØÎ¾Æ\x0006\x0012ÿ\x0000\x0002§5}§\x000cü·{¯aµí\x001c\x0012ègÀÏ\x0006\x001fyDZ·\x0017\x0019ù§Ï.~ñd\x0019ô\x001fþ}·æÓ¡ùÂM5Ág*S·8OÏ°ús¤ì\x001c9k¼\x001f³wÅà±¢ñô#'\y"~\x0012¸\x001f¼ u\x0004ªWÀçÞ\ô\x0017ãä6*ìùÌ¶þUno\x001bM,Q\x0016ì­+Jû\x0016`>g+É@Yï\x0003ç³¤ÒKU#\x0018nDe*ï\x0010\x001cGì\x000bytÉ\x0006Xá-Í»6*ìØ«°£CÑ¢òü\x0002ÒÜR5,Tx\x0006bÄ}ää!\x000e\x0001AÉÔj\x000e¢\ræjþ\x0000\x000fÐÛ\x001e[á¾MÆk6*ìøÿ\x0000?Aÿ\x0000Kÿ\x0000¶yÿ\x0000Òg\x0007í\x000f÷þ¯é/Õÿ\x0000ð\x001fÿ\x0000\x0015Ëÿ\x0000
ÿ\x0000y\x0014ßNû'ç2rÏ¾&9únÿ\x0000XÔJù#Dÿ\x0000 Ä½kö*Øý\x001d3Õ;:\Xaî\x000fÀÞÙbð»CP?Û$~{þ=r(ççû6/\x001a¡\x0015v~{¿çá2\x0007óõØ\x0006´¶´\x0007çé\x0003üsÎ;oûãî\x001fsöü\x000bÅvl?¯ýÑOl»\x001f3$Í\x000bë(¼Ø«³b®Í»6*ìúÿ\x0000>¹³ç¬k\x0017\x001bü6§M¾)	ëþÇ:ÏgªGÈ}ïÏðb`Á\x001eü?(×éKu\x0013°ùçÚ<î_\x0012Ø«³b®Í»6*ìØ«³b®È×õ¡å½2óP&W·Zÿ\x0000¨¿U|\x0011'¸\x0012çè4ÿ\x0000Í\x000cÎcþ¹\x0017\x0003?'×7\x0006íÚVêìXüÉ®y\x00016þB<\x0000\x0001ÐS&éàlvlUØ,\x001d\x0015vlUÙ±WfÅ]\x0015vlUÙ±WbÖ÷/hÂHÁ¨e$\x0010}ÈJ"B±ÜXO\x0018È*@\x0010y,/FòRA\x001d\x000849ß<ÿ\x00009/æ\x000f*qIf\x0017q
|3üMOi\x0005\x001bþ\x0008¶r:ïetÚ­Àà=ñØ|¹}Ïv§°Z-mÇÂ~=ú^_*fZoo,h²\x0011*ø>çþ\x000b¯ß\õÇÿ\x0000ç.4sZ{)Ovø£¯úê*?Ù(\x001eùç]¡ì^l;ã¬Ëi|è|µàuªÒ\°ÖXùzgþþðg6>t±Ôþ\x0019ë÷â3Õ:7 Õ£YíeIcn\x0019OÈFyþ}\x001c±\x001e\x0019\x0002\x000fq\x0014~×Ìs`	pÎ&2\x001cÄù\x0014ò]!.D2MGÞ2]mª×¾k§ªØÕæNØ}o©W¾bK\x0012m]i\x0005{a×þ\x001cÇðÙZKú/âé'sôió6\x0007\x0015v\x0005¼¸úºW¿l³\x001c8Ë^Ið\x000beþGòÉó]ê[\x001fîÇÅ)ðA×ïè2*Mslê_mÇ\x0018\x0004AE\x0000\x0000\x0007@\x0006ÀdN·ôWêVk3Oû\x0018p{ä\x001fÍ?4ÿ\x0000¯Q\x001aÁ\x0005Q|\x000b~Ó}û\x000fa\x0019C{Ìób®Í»	uvû#æs7L9¸zÈ=ÿ\x0000ò"ÏW\x0007²¢\x000f¤PÂ\Íp\x001fFá°¢æ¯P}Ldøãós6±"ØH×þ\x0016¿Ç\x0004f3\x0007fÅ]\x0015v#snÑJ\x0003#\x0018\x001eàâªJa`êhA¨9ä7ùZO*Ü\x0018¦&©üWÀûÿ\x0000~dÄÛ\x0013oaÑµeÕ£æ6q³\x000f\x0003ãò9Ü¿+u±©Øv5\x0003ÄüNêÑÌnÓ1L\x000bÍ&Ös \x001f\x000cý=ó¥S ÁåqÅ]LUÙç}f&ü¼ÕÖê!Kyw éÄ~¸ú2ñê
ÃÔ\x001edÃÌf'þñ6¯¸è~=	\x001ce\x000eª@ øÓ(iyÃ)BAØ¸üUnlUÙ±WfÅ]\x0015vl\x0014®ÍØ]¬Gë[L1¸ÿ\x00008B¢lÛ¨|\x0018~¼óÇå\x000c5\x0002§ö¡j}\x0004\x001c¿'&ùòzW\x0013¸>\x000e?QÃIÇøÌ¡Fë\x0013º!SøãÈ#AÇþã´²{¸?ðÇúg NRÒó¬UÙ±WfÀ®Í+³dUÙDW
»(®\x001bWcp«³b®Ä§ÑFsÙIû*¾5æ@\x001dÍ3É\x001eJ>¶©l|f¯ë9.ND¹=\\x001c-$\x001e	OÕ¼ÌG\x001dâù°+³b®Ê#
«±¤S
»+
»6
WfÀ®Êf\x0008*v\x0003s[\x0002»\x000cóN§ÎÚáÆ\x001fÿ\x0000Q6QôíGÒ\x001bÁê§ô\x000e#èåxÿ\x0000²n¹éb+ÖÒò¬e)WfÅ]\x0005+³dUÙ±WfÅ]\x0015vCõ#Yjïê²sÔ¡¥~bg[ÙþÔjtQà\x0004J=\x0004Ç\x0015{âäÓF{ýÉ¥¶±-¨â\x0008#ß|·åu­v@<6þ½\x001eÜç­á\x000fö_­£ò1ï(Áæ);ªþ9"Ñüi¢7«\x001aqÑÔa÷i{G¨×Çd\x0008õE_¿©r1éãpºÕe»\x001cXÐx
²U³æÅ]\x0015vlUÙ±Wd\x0005õ4ÉÈ¸ÿ\x0000Á#á\x000e_\x0016cÅØ+È¿\x001dï¥ÞXg|Ú&\x0003ñÉC,|þs²\x001a:eMNÈÇ-
íÊ¿h/!þÄ×:Ïeu\x001e\x0006®\x0017üW\x001fôÁÃÕÆàèòúS-z\x001d¾ü1×¯EÎ­m©/÷z\x000cÿ\x0000Å¨G\x001fASíÆÒ\x000exä%ð;\x001f½å»
^\x00198ÏðÊQùú>î\x001aÀÉÞ)\x000fÜpß<\x001díXîlUÙ±Wfë»\x0018E1Web®Í»6*ìØ«³b®Í»\x001aF(!ØÜPìØ¥Ù±K³b®Í»=íù
ÿ\x0000\x001c\x0018?×þ&r\x0012|SÚñ©{£þä;;\x0016Eå]\x0015vlUÙ±WfÅ]\x0015vlUØ\x0007Qþïé\x0019ªú~.Â\x001c×º§fÅ]KOî×åL|¹Ãô`±½Ù±WfÅ]y©_\x0010F)\x0006³åtÑ\x0018YõRGÜi?IDñ\x0000{Å»\x0013ÀÉÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±bìp\x0018¦Å.Í»6*ìØ«³b®Ë\x0002¸«±ø«±ñÈÐ°t$0 ::\x0011\x0014XÊ"B#ÍØY&´¾BÔG\x0011\x0001°¼"
ZØ\x000fãØN«ÓzüTèÕþqN/´4\x0004\x000e\x0018ó\x001e¬R÷sý\x001e^çí>Í4!\x001eq¹aq\x001b\x001fÑåî}³ùm­ÊûÐÏï\x001eÖ¦}&ä;ªnÐë]¶ö¡ý\x001fæ\x000f-ÿ\x00005\x000f©ÄÜìn«hõ®Çröüv=òþÅí\x0001W+Øé9=ÚcQ\x001döèGóeûX\x0007ãÿ\x0000«£\x001dt§\x001dWM"\x001bô¥\x000b Ùd#ÅO_\x000fÀeç\ö¯sa¥vX\x0015Â®ÇôÀ®Í]\x0015vlUÙ±WfÉR»	µ.ÛëÈRákµ9\x000e¹\x0004róçÞ\x001c|¸#>«Ò/?65_Ë)Dºd´NA&øïNÇÝhsÌþlü¼»ò£\x001bk$\x0000ÔHµäë\x0001¸ùôÌ)b0ýn$±\x0018þ·êäÿ\x0000üä®ùÁ\x0010Ó¯8[ß:ñ{i¨c£q\x0019?\x000büâö92òGæÃ)[]TÔ\x001a\x0005¸ÿ\x0000_þjûòüyú\x001f~<Ý\x000bÃ>ÿ\x0000ç\x000ecdÕü \x001dAi,{\x001eäÀOCÿ\x0000\x0015¿þÎz	X8¨Ü\x001e3\x001cÇæÌ±4,QÁVRA\x0004P:2ðªÌÀW
»\x001e\x0006\x000bWeàWfÉR»\x001c\x00066®Ç`WfÂ®Ï9þp\ú±ÇüÄþ|\x0003t\x001eä¸ÀïüÏú\x001ayË&óDµ¹AûÈ#\x0004ømÏÝ×ïÀ%º\x0001Ý	¦j¢\x000bù¢cðÈÄ\x000fõO¿\x000f*¼Ò·°þþò?îëûIà=×õdg\x001e¨i\x0001æí Á'ÖP|
ö½ûs¯ä\x001aØ^8.\x000bWc°R»6I]\x0015vX\x0015Å]¦*ì¼UÙ`W\x0015v8
b®ËÅ]\x0015vlSNÎ}ù«þÓÙ\x0014Ñæ"1òêßßNN\x0002Ë8Gåk?­Ü=\x0013â?ÃñÎ\x000fä'ôÎ¡\x000cDUCsooýt\x0006dÓÐuë¿©[;¤q\x001f3¶zñß,{TýÙÐñÀ9\x001a\x000cñj\x0003©]\x0001ÔË/üI¿·2Oq?è°ÿ\x0000ª¨g´øñØvÌV\x\x0018¢ÝÓ³bf¦*ìx\x0014Å\x000eËÅ4ì\x000fvÜcsà­ú)TU÷\x0019â>»æSkÝ)Lõ¿\x0013mþ¡üXæ<¹µ\x0017yÖêOð\x00191È¡&Í]¡ØúbvKaû#ä3æÝ÷³þ¼¿Ý\x0017Çu_ÞKúÇï,²\x001f²>C\x0014Ì\x0017\x0015S6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Á:Ú[­¤x¤\x001d\x0019\x0018«}àãË,FâLOx$\x001f±³\x001eIc7\x0012Aï\x0006¾æØäTüÄÖu¸Ä7÷RÆ?eçÒ\x000boôæÃ7jê3\x0019äqésröl¢¥dw\x0019\x0013úTÖ\x0005MÀ\x0003èÈnjr®lUÙ±WdË>j½òmÀ¾Ó&hg\x0000¨u¡Ùº\x0010Aû³7G­É£\x001e)\x0018ËqcÏÞåéusÒË\x0019á<¬yûÖI\x0018QF\x0017jzúÔïwví,Ò±gv5,ORNQ4³HÎd\x0013d­9rË,¤I$Ù%µP¦\x0000ÊZaöæÿ\x0000,1N¹ÝS\x0014ùñ"¿Nfiµ¹t¦ñÎPþ©1û¬\x001a¬sxå(ÿ\x0000T÷,xÄh\x0003k^`¼ó$¿XÔ'âZS®Îià\x000b\x0013AíÓ#¨ÕdÔË$¥#ß"e÷±Ï¨sÅ9\x0019\x001eù\x0012~öÑ\x0004{(¦\x0014f+»6*ìØ«±ñÈÐ°t$0 
\x0008#¡\x0007\x00085¸H5¸w\Éù¬Ì'Ô/\x0019\x0000 Sq)\x0000|¹S6gµu\x0012\x0014rä®î9~·`{G1\x0014rN»¸åúÔ½\x0005\x001f²>ìÜ\=Ó\x0019%bìz³\x0012IùÙLÌÙ$òàJFFÎþõ@)Ó\x0011È±o6*ìØ«³¡yóc]ò²\x0008l/î#~Êsää¯ÉGÐ3w¥í½NV<\x0000r\x0017cäl;}?kgÓä\x0007uØù\x001bP{dr\x0006\x001e]þ~yôQõ)Çú¼Pýè£3'í6²|òËáQûrgÛú©óÉ/\x000f¸\x0005¢Î1û#9©¬Üëz×³K<öävvûØþmDó)ÊR=ò&Gít¹sK1¹#ÞI?zº M¦\x0016å
+³b®ÉFç}WBOJÆöê\x0004þX§\x0007Ü¬\x0006l0vl\x0002¡q\x001dÑ£÷\x0017;\x0016».\x0011Pâ;£">â¦Ñ+õ\x0000ý\x0018\x0013TóEþ¹_®ÝO=zú»ÿ\x0000ÄÊókrçúç)ZF_ykËªÉë¥ï?ymcTè\x0000ú00ÜUù±WfÅ]-.ä°fÚ9\x0010WRU\x0011¸#Ädá3DFàD3Ì
A\x001cÙ¢+±Å/õ\x0019µYZâêGW5gv,Ì}Ù'%,²)"yI?2%ñHO2MµÊ¡v\x001b`<©­¼Ø«³b®Í»6*ì=ÑüÑåêþºÞ¦§Òãß§ì5¹tÿ\x0000ÝÎQþ¬~â\x001c¬:¬>J?ÕÜV4jÿ\x0000h\x0003ó\x0018i{ù­j+ÂãP¼|\x001eæV\x001fqc\x0019;WQT²ä#Îr?yohæÉ´²Lûç#úV\x0011z(û²\x001eÌ\ÔîOSÂm×j¹X\x0010ìØ«°ÓJÖî´'õlg\x0007ÛâÙ\x000eÝ7R\x000edaÔO\x0001¸JQ=ñ&?s~,óÂn\x00121=ñ$}ËY\x0003ìEpÛZóÖ«æAÂþöæu\x0002dØ}ÄÓ2u\x001d¥S¶Lîý.F}~\ûNr¾Dþ©
Çö@\x001fFEs\à*fÅ]\x0015vlUÙ±WfÅ]\x0015vX%MG\Rì\x0011=ì·B;0\x001dýyd²J\É>òÊS2æIh
`l­y±WfÅ]Ú\x0007/¼­'­¦ÜKnç©Ù+ìhw\x001eÆ£34ºÜSÅRþ#îr´ú¬sxäb|\x000b\x001e1&Ì\x0001Î?ç üÐ\x0017é\x0019iJ}ë÷ñ­}ë\Þÿ\x0000¢eW/S¸ÿ\x0000D:ª¯\x0010üêPúËÍó\x000bWóHá¨ÞÜLÈò±Oø\x001añü3UªíLú­²dq¯']¨í\x001cÚ§9Hw\x0012kåÉU XþÈ\x0003!Ù«uÊ¹±Waµî½w©E\x001dµÄòÉ\x000c"Fò3"\x000f\x0004RH_¢S,De)\x0011\x001f¤\x0012H\x001eày9\x0013ÔO \x0011\x0003$=ÝËB\x0005Ü\x0001S9ã®ËV(j6#¡Â
$\x001avLaüÅÖ­ÑQ¼Xÿ\x0000\Ê\x0017î
LÚGµu\x0011\x00142ä\x0003¸NU÷»\x0008öx\x0019']ÜrýjF\x0004;ñ\x001fvEn®ä¾s,îÎíÕ'æNù­ÎCr$òmÁÌÍIï;ª\x0001N¶ªO¤¿«i,=)Ê6(Ôù©\x0007'4°1=à~ÆXòË\x0011¸\x000fx$}Îe
±ß%rþgëÓ\x0002¯©ß0=Aºøllje±ÍþVOõ¹Çµ5\x0007\éåúÔ¾®öGÜ2\x001duy%ó\x0019'vw=Yc÷ÕÏ!ÈnDÞMºùÌÌÙ$=Õ@§L\x000f°o6*ìz9RA\x0006 #¸Â
n\x0012
;&ù­Ç	µ]FðDváõ)O\x000fµÓÛ¦mkêDx|\ÝÇ/Öìiç\x0003ÄwqKõ©z	Zñ\x0015ùd2iáÈK1êI©?2sU)\x0019\x001b;\de¹U\x0002E³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Ï¤_?ñÀ²ÿ\x0000Q¿âm!Û¿ã3÷¸?V{%þ#ú§ýÔÍï÷óÎ\x0017¯BæÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WblÔÉ\x0000ªµÀ®ôË\x0000b\x001aá]ÅÍ2øÁ	Ý­,]ßS¾fC\x001b\x0012Y]Ë¶E¯5JfÃ\x001e\x0016\x0004³};EåÛ8æ7ç.ù{\x0019mB`$"«
|R7Ék·Í¨=óªì¾ÂÍ¯5;uÚ#ãú±ýÔö¼«\x000cvë3´\x0007Çô\x000b)åÝÍ¯Ë\x0000{(ÝÈ]³çÇæWüäæ«çNVö\x0004ÙZ¨ûÖ\x001få8¥>KOÏcì¯d°èêSýä¼Ç¤{ë~ì\x001fø\x001féû>§÷³ó\x001eî_È<ßZóä÷õØz1û\x001füÏo£<ÔÌ\cRw$çr\x0005>¤\x0005l\x0018)<·8Ü)k6*ìØ«³b®ÏS~Lÿ\x0000Î\x001eù«ó£ö¶ÿ\x0000T±mþ·uXÐò\x0016äöâ¼|XfÛKÙy5\x001bC¼¾yÛþÝè»\x001aã)qäÿ\x0000SÇR?\x0013Ê?\x0013~HinÖ.õ>\x0003>´þLÎ\x0006y[ò¸%Ö ¥oÕ¸Qé+
}7QþÌ¹÷ÎÇKØøðn}G¼òù?7öÿ\x0000ü\x00125©qÆ|\x001cgø`}DyÏÊÉ¯ZMÃ;ÿ\x0000çå\\x001f[½òëª¯«\x000fî
\x0005#?&\x001e\x00000\x0000Óöj:\x001cØêôã>3\x000eñ·¿£Æ{=Û2ì^=@¿L½_Ò¶Ø~j\x0010Éé0lüëþQ~dj\x001fó~eUEeÒfê\x000eã¯\x0019¢=«±§\x0005=³ÍtÙå¤ÉÅÜh½ûs·;+\x0017´\x001aIb$\x00118B]Ò«¿\x001d\x0013éc\x0013­<zgéÊÞfµó¾­§H%¶¹eÇuaQò=ê
Aß=O\x001eA	\x000eDX~
Öi'£É,Y\x0005J\x0004ÆCÌ1æR¨Ãü±Ã[\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vy÷þròá4¼¡©éyL°4öþ>´\x0003Ô@=Ú?Ùf·´pxø¥\x001eµcÞ7{?c»Wù3]-ÔL'ýYúOÊïà¯m'¦àçÉù÷_æÇø#Í
¡\5-µhý1S°¸­\x0011ÿ\x0000d\x000bÇîY|3ì=Oòß\x0011ÉúCþ
]ùÝ\x0018Ï\x0011êÀx¿Ì	|¶?\x0002ßÅÍyw\x0019÷«=	øñ%Í»6*ìø-ÿ\x0000?(¸i¼ë\x0012±Ù4Ûp¾ÀÉ3~²sÏ{xþ÷üÑ÷ì?ø\x0013D\x000eÏ'¿4ïý,\x0007èN´ÿ\x0000±ôçÏÌç\x001fhGgsüªÿ\x0000oóGç+)Ñ,dh	Þæ_Ý@\x0007¨Ô
òNGÀf~AQô»ÎÁä;gÚÍ\x001fcßd\x001c_Ìª!úiF[©Ï§?ßóí\x001d+Cãsæë¶¾Px+\x0014\x0000ø\x0017þòOîÇçW¦ì\x0008Ç|üÁð.Ûÿ\x0000Öl÷\x001d$\x00061üùÔ§òúGû/z]. [e\x0014Ï¢Oò\x001eù}n,´KH-!\x0014øb@µ§BÄnÇÝ9ÒâÃ\x001cB¢\x0000÷>%®í,Úùqæ§.ù\x0012~]ß\x0004\x0003¹v5Ï0Î{yOüQäKé\x0015A{7åIì\x0011Â¹\x001fì\x0019³UÛ8¸ð*/}ÿ\x0000\x0003moå{K\x0018é1(\x001f±ö²n.=öÏ_¾|?^hÒõ²Ücê?Tÿ\x0000Å.}9ä6p:<Þ\x000eHË¸ïîêýkí/fÿ\x0000)hòáæe\x0003Ãýhú£þÈ\x0004âdõ\x0014lýG«\x0006\x0015\x001b²þ}1Ì¼UÙ±WfÅ]\x0015vlUÙ±Wa/4dó\x001dÎ7÷w\x0010É\x000bm_D*vù\x001c¯$8Á\x001dà¤Ô\x001d>Hä\x001cá(È{âAý
©âk{û'ÓfÚaI#vF\x001e\x000c¤>ñ?!Âiý\x001cÅdä@#ÜwdÀ×:ïüã¯ÿ\x0000Á>nÒ5"h±ÞD®kOCéµ}¨Ù¡Éáåó\x001fnÏ5íVóº\x001cØúr#ß\x0011Ä>Ð§:sR=³õ\x000b®þ1ÌØ«³ÏßóZcêÞHÖ¢¼Å£H¤u\x0006"$\x0004|¸×5Ý£\x001e,2÷_Ëw³ö3(ÅÚ\x0018	åâ\x0008óéW¶4qóÀóßcó·ÊÖ¬¬\x001aò1è^\x0001×Ö\x0000XÞ¢ñÃâ éìíWæquä}á³Û.ÂþEÖO\x0010\x001eëÇýItÿ\x00004Ü~\x000e¹Ñb;vÏFfÍâ\x00143b®Í»6*ìØ«³b®Ï\x001fóô\x001fùH´¿ûgù=&p~Ðÿ\x0000y\x001fêþý_ÿ\x0000\x0001ÿ\x0000ñ\¿ðß÷Môï²~yó+9gß\x0013\x001cý Î\x0011ß}{È\x001aGù\x0011Ê?i3Ó»$Þ\x0018ü~òü1ÿ\x0000\x0004\x001c|\x001d§ÌÄüá\x0014ðRC¬Í»çhlØ«³óµÿ\x00009ít·^Ôx×áKe5ñ\x0010¦y¯lÍ/Ü\x001f¶ÿ\x0000àk\x0003\x001eÌÅ}LÏû2Ù
F>ñÆi\x001fPEæÅ]\x0015vlUÙ±Wg×OùõN¿pk·ÔPx\x001aý`¤P}ùÙ{:>³ý_ÒüÕÿ\x0000\x0006LâÑÿ\x0000úf\x0012½Hý§>¼gfüÒæÅ]\x0015vlUÙ±WfÅ]\x0015vyþs\x0013ÌCË>DÖg©\x0006KAHñ1ÿ\x0000\x0012Í_jO\x000c|ö{Ïat¿í\x001c\x0011î\x0011ÿ\x00000\x0019~EªòqóÏÍ^ys÷{ Í»1Å\x000eÄñbìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®É7|å¨y:O[L¸\x0006®ü[á?ë/CôÀÕèqjÅd¼~UÚ\x001d´#Ã\x0011ó\x001bqæ\x0013\x001d?VJnVîÈ}Çæ:\x001cõ×?ç1&µã\x000e½\x00071ÓÖfù´dÐÿ\x0000±+þ©Ï:í\x001fb#-ðJ¿£._?Öøçkÿ\x0000ÀÆ2¹ig_ÐÉ¸øHoó\x0007Þô]3ó\x0018=\x0012ú:ÿ\x0000~?Â,ö6t¿; }6å%4Ý+G\x001f44a÷gkû\x001b6ÖHçÌ|ÆÏöbj{0ÖhJ>|â}Ò\x0016\x0019¹µÖ×««ût#æ\x000eùÓ¿Kü=sCàîé-\x0007ú\x0007ãé83ô\x0005óÍY±W\x001d²3që¾Ý\x0006Ã6xaÂ=î³4ø¹õÿ\x0000å_Ã¶BYE'Þ!e~íÏ¹ÆY[ýaèz
Î\x001c³á\x0008Ã\x000e"üÊóGøfÅfMTÄWí7Ð?\x001ad§5nÑñ¦lUÙ±WfÅ]ýXÕÀöÍmñuú¸}?ù\x0019\x0000K)äîÓSþ\x0005GõÂ¼Êq\x001eÛvÂª3Uêa'ÅßßñÙå\x001füAqn9ÅæX«³b®Í»\x0008<ÍåøüËlÖÒlz£+v?×Û\x00084i1Òµ&Òå\x0012¯N<Gy~ÂúëÉ7ÆXÉWSÑö=Aús &îoV¸·^wV\x0015SÜ\x001cõfªÇ­ÛÇu\x0017ÙqZw\x0007¸?#äSI\x0014ò+ÛF±¢~ªiý¸g\x0008\Ø«²\x0005ù¡þ°r¢²CûÅú>ÐúGêÉÄÑg\x0013LËWÿ\x0000Q¸\x0015û/ð§¡ûð\x0007ån³úRÄBÆ¯\x0001âÕ;©þ\x001fF3\x0014Vb\x001el±ú¥Ç1ödßéï&\x0006\x000c_+\x0015vlUÙ±WfÅ]\x0015vlUØÖA *z\x0011Côâ­ÄÔg¼¹sþ\x0016ÕÀeGFù\x001aé\x0007pä\x001dÃ×µ8ÿ\x0000KÙU7,ªÃæ7Éådm¨ê\x00177ÄmFßÝÚ´ûC'&3Ø$makm\x0015¸;í÷(§ë9ßs\x001d¥çyTÃjìm0Ú»+
»6*ìØ«³`¥vl
ìØ«±¼pÚ»\x000burVÞj¾ßþ"pMò§úËúóÉÞK[j\x0016®Ý\x0004ª>ý¿dË.Od×#2ÛJ\x0007^'ðß=Ó1gfÁJìØ\x0015Ù°+³b®Ê"¸m]#
»+
»#^q¾ý\x001d§ÜKZ\x001fLóo~¼1\x001b²4ÓD·úÕÌiÛ'ä7Îqù3cÂ)îHÜ² >ÀTþ¼RÏ#)óÕÇ'!Ø\x0016?NßÃ;fPÔÀ³b®ÆÉZ»\x001b]\x0015vl+³`WfÅ]\x0015vl*ìa\x0018m]+³dUÙ±WfÅ]\x0015vI´ßYÞÇÜ,R\x000fö/B~æË\x0007"Î<°\x001fï{opße%Bß*ïø`¢\x001a!Ø\x001f^ÓÎw=±ÿ\x0000uÊëô\x0002iøa"ÈQ§a; \x0015mÁ\x0014?#Ç3BQæ\x0008#á»\x0002,SjÜMGQÝîÄztc\x0013õ½"cuo_Ûµ"þI£|Ï¥´ÙaÚ\x0004¿$=CÞ(üÂäÆt¹ÄºOÒ¯\x001dãó\x000cÍ\x0000¸¤¿±0àÞÌ:g@±¼MB$3Up\x0008úsç
nZLÅ.q5û~/o|`\x0016!<&Ý7Pi³	±K,o]]\x0015v4UØÜUÙ±WfÅ]\x0015vlUÙ±We\x0011\QNÆbfÅ6ìØ¥Ù±Wg½ÿ\x0000"\x00054\x0018?×þ&Ù	>'í?øÔ½Ñÿ\x0000r\x001d"òÎÍ»6*ìØ«³b®Í»6*ì\x0003¨ÿ\x0000wôÇÏÉÄÔý?\x0017a\x000ekÝS³b®É%§÷kòÍ.AÜàúC°FZÞìØ«³b®Í»>fùÖÃô^§yoü\x0012\x0001ò,Hü\x000eZý	ÙÙ|\8åß\x0008ýÎÈÎ.ÅÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlX»\x001c\x0006)\x0001ØìRìØ«³b®Í»6*ìp\x0018«±Ø«³b®Í»\x0010»µKøÞaÊ9\x0014£\x0010Î£ß)Íe\x0015ò=Ä4fÄ2Æ¾ ÷\x0011ÉyKÍ\x0017>K¿·Õl[öò+¡ùu\x0007Ø±Ão#Äþ~Ð.|¹pÜµ\x001d\x001dù[?í4`V#ò*
\x001fö9æzÐt\x0019ÄùG'Õå.¿­òM}ö^¨då\x000c¿PîçúßdùÛPµòÆ¹eæû\x0015\x001f¡¼Å
.cý¾\x0019Ðöª±çÿ\x0000\x0005:]ðÔ¡IÄÇ\x001b\x0011÷ç¥é²ø±\x0012ù¾³§ËâÄKæù/ó\x0017Ê-ä}RãN;¢5coæ·C÷\x001f¿\x000c@Ì\\x0011È«³b®Í»6*ìØUÙ°«±àS\x0005«²ð+²®Ç\x0015\c!A¨#¨9Âÿ\x00000,\x0012UkÝ1(ãwtaÜ¨ì}»öÌL¸z\x0013.\x001e¡ú
ÿ\x00008Ûÿ\x00009a5¬±è>j
EñÏÅ\x0019ý¿i\x000f@çuý¢GB\x001fË¿ÌÑ\x0001tý@þæ´I\x000fTöoòâ?,,µ±a-l^ÿ\x000091ÿ\x00008·þ42ùË }tsÛ
Rz\x000f·\x001füXGQÑúízM\x0008qQ¸=\x000egÛü¶&8*ÊH \x0010GPF)U°Ò»,
áä®Ç\x0001L
ì¼UÙ°«³S
»<ùyõÍNsÙ\x0008AþÄ\x0001úó"\x001cò{\x001f ô-c\x001e5o¼ç¨4_BÒ\x0018\T\x0008H?ês\x001cóh/'¼ÔÜwrGß+Í3èÒ\x001bÍ3F\x000f «öã>ÝÈùn2ñ;æÚ%|Þ£y;Õôn¨\x001a©û-ó÷ÁXü×Ôu1Ízz|Cýaßõäe\x000bä¦\x001dÊ:¯ÖPdµ4?Êz\x001fÎñgy\x001e¡\x001aÍ\x0003\x0007F\x0015\x000c
AÊª^}4
nÅ$\x0005Xu\x0007\x0004âªY±WcÅ]Å]\x0015vX\x0018«±ø«³b®Í*vlRìu1E»<ßù±«}võmü0-\x000fúÍ¹ü)À6EéþO³ô 2®\x0001ÿ\x0000_÷÷¬<#_ÖßÃ#2%Þu»û\x0010\x000fv?¨\x001cëÚíÇÕ-'ùbsÿ\x0000
r°ÅXGëLâÊ?\x001cò·­¾µ¨Ú¡ÜzOû\x001dÿ\x0000dKazÖ¹/§m)ÿ\x0000$¿lö\x0016c4¼k6)v`+»\x001e\x00051C²ñM;6*ì°+»\x000bu¶1ZÎÃ¨Ïü)Â\x0017*ÅyJÅõçÇLÊn{qÏ`ù%==6ÔÅJ~ýó\x001a\ÚÇ5Æås/úç% W"J±ÔÅ\x000eËÅiÙ±K²Y\x000fÙ\x001f!6ëÿ\x0000½õåþè¾9ªþò_Ö?yeýò\x0018¦`¸ª±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]H¿&ãeþ£ÄÛ<C·Ægï\x001fp~¬öKüG\x0017õOû©1ßï\x001bç;4/^Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«±6zdUEJàI$ã\x0000Å\x001f\x000c\x001c°¦æê\x0008!?³²åÛþ9\x001b\x0002Y¦r¦ÙÎ<Ñæëo.À÷wÒ¬0 «;\x0001ýO\x001bÙ»Òh§¨\x0001<r4Ú\¹x¢e#È\x0001lîÖÂ;$2ÌB êN|êüÒÿ\x0000¶ºÖ\x000bÚyyL\x0011n
ÃÈÃüè3Vÿ\x0000Tç´öG±pÅSÔzó\x0007Ò=ç¯Ýï~ì\x000fø\x001bÃ
dÕ9sðÇÒ?¬ì\x001eö%¬yøÐÅ`8÷áûGä;~¿xæöú]JFáÚI\x0018Õf'Ä¾z^<c\x0018á\x0000\x000e@lûV\x001c1Ã\x0011\x0018\x0001\x0018@
\x0003äó¦k/!,Ç©&¤à\±¹O6*ìØ«³b®ÎùYä\x0016üÑÖm4\x0008î!µ{¹=5bB\x0003B@ÛrÍN*;±\x0002»æF\x000f1\x000b\x0002úKÛ=¦;/O<æ2³\x0018óü\x000egÉdéÞ\x0019÷sòSþpgÊÿ\x0000.î£ý'¨-\x000f¯r ¢7pîì[x0é¤ìx7>£ÞSò\x0007´\x001fðDÖvµÂ'ÁÆ\x0007sýis?
\x001eI,×.Ý\x0006{9T 
¢l\x0000ÍãåÄÚ\x0013\x001d\x001d\x0015v|\x001dÿ\x0000~N|Æa´JZjÊY¨6[è$\x001fìÁY=Ø¿y÷ni|)ñRûß°?à[ÛßÒ<Ï¯	¡ç_OËxû©9°ñ=GêÎÃÿ\x0000>àüÿ\x0000ô\x001dü©Éð¿9´öcÑ¾Ô°øï"\x001e~9ØZÚýÑ÷Çôÿ\x0000·³<@k±U\x001cµÝÊ2ÿ\x0000z~
wð~Øúsì\x000evÌÉVlUÙ±WfÅ]\x0015vFµ\x001f9éDÂÖîòÚ\x0019)\x001cFkÒÌ\x000eÿ\x0000,ªYc\x0013D}áÏÅ Í<På\x001eñ\x0019\x0011ó\x0001pBz\x000c\x0003Ëq¸\x000brñWfÅ]\x0015v5Ô8*z\x001d)\x0006¿Ì\x001b	¿*¼Õ{
1K§ê2\x0008Ø¯§)hÏÜ\x0017<<N\x000c¿F¾\x0005ý\x0006ìÌí]\x00163=Æ\QâóâKô²8Ïª¢½Æ~*|û\x000fæc¯Û\x0011Âî\x0004åzQÔû«SòÏPÓf\x0019à$:á.ÙìÙvf£&	s÷â(±ùSÓ%Olè9éVfÅ]
ÿ\x0000çç\x001a\x0019³óEý(·\x001az¥|Z)d¯àëøg\x0003í\x0004+ =ñûýoÖ¿ð!Ôñèòcë\x001c¤ü'\x0018ÿ\x0000ÄãN5R=òCÿ\x0000>éü²ò¿æ\x0017×çÖlã»Ô¬¤¢\x0013\x0012ñ¬N
\x0018D~\x0002ÁÔîÁÚË{\x000fO-\x000b®n\x0017ü\x0014û_YÙþ\x001cpÌÃ\x0016A!.\x001d¤e\x001fésª=+«Wò4t¡ 9ö\x0008\x0012ÕDq(TQ@ª\x0000\x0000x\x00003¸\x0002e##gsÞRW\x000b\x0017fÅ]ßÌ_,:h×úI\x0000ýjÖhEzUÐª røüH\x0018÷\x001d§eêÿ\x0000'\x001e_æN2ÿ\x0000JA_\x001bp ø\x001cü¥O\x000b[;FÛ2\x000fÌ\x001ag\x0011Oè¤eÄ\x0001\x001dC%­sôÛÿ\x00008ÃçÁùäý+S-ÊO«$RïSêCû¦¯¹+ËéÏSìüÞ6(*?
ý¯ìßäívl|\x0019«?Xûé\§¦ä{çzÍÇ¨fÅ]\x0015vlUÙ±Wc]Ä`³\x001a\x0001¹'¶)\x0002Ý]üÌÿ\x0000Èògå(®oÒêávô-?~Õð,§Ó_\x0003W\x0004xf§QÚ°ó6{ï vO°zþÓ£\x001cf\x0011?ÅÐ>GÔ~Hí\x001eNÔùçç¯ó\x001fÌ\x0016ÞlÖoõK\x0008Þ+{«©§7§$Y\¿\x0013Çm«Ûló|ó\x0019&d9\x0012OÍûS²t³ÒiñâÈD¥\x0008F\x0004¢b\x0004ory\x001añ\x0000\x001eÃ!ÑÊÐ°t$2A\x001dA\x001d\x0008Ê\x0006ÎÒQâ\x0014Wçê»ò¿Í+ç}\x000bNÖ\x0013¥Ý\x0013SÀ¼jÄ}\x0004»§ÉâB2ï\x0000ýçolhÎS	þ\x000cúY\x0010Æ¤^\x000cGÉÞd:	üÊÒÿ\x0000Mèz\x00153Y\Æ\x0007»ÄÀ~¼£Q\x001e(Hw÷;^ÉÍàê1Où¹ ~R\x0005|g\x0007ß>&ÿ\x0000Ï¼ÿ\x00008¿å_ùùzñøÚjÔkÑnR¾ÿ\x0000gS\x001f»\x0014Î\x0013±5^\x0016N\x0003Ê[|z?Vÿ\x0000ÁC°?¤üÄ\x0005Ï\x000f¨ùã?WËê÷\x0002ßEê/!Ô~¬ûÑüzæÅ]\x0015vlUÙ±WfÅ]\x0012?çè?òiöÏ?òzLàý¡þò?Õý%ú¿þ\x0003ÿ\x0000â¹á¿ï"éßdüóæVrÏ¾&9ú\x000cÿ\x0000y]ýkÈVËþû¹ºNµÿ\x0000vrú:ç£ö!¼#Þ_à¡\x000e\x001eÒ Ø×èHïÅ\x001fè\x0019î\x000cß>LÍ»?7ßóW[óþ¯QN2D¿:Bçö±¼Òø}Áûþ\x0007ÐàìÌ>bGç9'ö`g3Pú*'6*ìØ«³b®Í»>Ïÿ\x0000Ï­ìøi:ÍÅ\x000fÇw\x0002W·Á\x0019?ñ¾ÿ\x0000Fw\x001eÏ\x000fLû?àÅóàt$~r\x001fñ)N¢w\x001f,úkóÚ[\x0015vlUÙ«»\x000b[YµSC4@¿\x001aÿ\x0000\\x0018ïoð&ütÀ×\x001ee±´\x001c¥¹\x0007J´¨\x0007âp\x001cu\x001f6Èé2Oa\x0019\x001ftIý\x000eâN\x0003ÿ\x0000\x001biòÛkÿ\x0000#ãÿ\x0000°xÑï\x001f0ÙüýNéeúà|\x000ex#þ~CçX#ò½¬ÑÈo/¢\x0004#ªF!;\x0013· ~s½»x@\x0003ÎCôØ¿àSÙò:éNQ#ÃÇ.`äc\x001f¸m|uð\x0019ðÇ8\x0017ë¤ç6*ì£\x000b±±vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015v/ku%afGSPÊH û\x0011\x0004Å\x0010\x0008î-y1Ç á\x0004\x001e`\x000bã¡!GB
\x000evÿ\x00009\x0013æAbtï­¶ä~úÖ
\x0001øyõÞµåööûT¨Îcý\x000ci|O\x0013üßá÷×èåäðßè\x001bAâø¾\x0018þ¥\x000eûøGÓäË?Ç7Þ£êoüôøéá_ã×ß;{Sùøó\x0003qè%\x0007S°Ë°Ã´æ\x0008z\x0017å§ÿ\x0000Ä×Ëê
Ã
\x001eO\x0003O²¿Iü+Ú:§Ù]2Oaoè&ýNç5ygÄ]®(pÆ?þhÿ\x0000\x0014_3¡¬1|\x0011ûwoöGð¦
Ê[\x000elUÙ±WfÅ]ÍPÖO fÇOËâëµ\x001cþ\x000f«$â1éßÍ3ô\x0005\x001fÃ\x000b³%Åzþ\x001aZý¬ÿ\x0000S	>.üÞÿ\x0000Ìÿ\x0000(ÿ\x0000â\x000b3\x001dÍ3b®Ê¥qWeqÅ]*ìå?^L:Ô]¶ZÏ\x0018£(êê?öñ\x001bxe3eÞWÖÅz\x0012Ý±Øÿ\x0000)þ!^pM%Ñã\x001bµQEcÔ\x001f\x0000\x0003m§~jÑMØúÄB¬£â\x001e#Ä|³ÐùKSÍ³b®Ê 0¡Ü\x001e¸«`Ó|óÆÇÈ:Û[¹¤\x00125íÅÍPÿ\x0000±;}ùqõ\x0006ã¸z=Øÿ\x0000\x0010Ø\x0017y\x0013¤u\x001fHß=\x0011´¼ß6*ì®8«±´Å]»6*ìØ«³b®Ï8þlè\x0006Îè_ ýÜÀ\x0006>\x000e\x0007ñ\x0019|\x000bt\x000bÓ¼¨	â6ì~$Üª¡É§äÿ\x0000¤,ä\x0008ÀÊd«¯p)Eú2\x0013c4ÎÌêXQxÑOu¬­­fÁJìØ\x0015ÙT®*ì®8m]Â®Í»6*ìØ)]\x0002»\x0019$Be(z0 ý;b«¸\x0010Glñ\x001cñµ¬£fÈ\x001f5?ÙSÞ"ar£ñ\x0019ìÝ.ôjPGp:Hßxß1^\x001bw\x0001µ£?²Ä}Ç\x0007`B\x001f6*ìØ)]\x0002»6\x0005vlUØÒ0Ú»<÷ù³­Î.> \x001aF+âjMk\x0018ÇVè\x0007¤y:Â3\x001fÖ\x0008øÃ0¯µ\x0006tÏË»\x0001§éî\x000böGúS+å®FË\x0015ó-ÇÖ.¤?Êx£&Ù]1Hs`WfÅ]Ep«±¤S
«²°«³`¥vl
ìØ\x0015Ù±WfÅ]EpÚ»\x0019]\x0002»6\x0005vlUÙ%ò¡õ.
¹é<REô²ÕáÉÁ9ûÝ;\x001e¹\x0006\x000eÉon\x0006¦ñ_³Äÿ\x0000ã"\x000e\x000f÷Ð7ÓLÞí7¿{²"FFÚÝëÏ6Òi·h¼¥µ¯ª¤¶\x000f*Nz?²]«á\x0013§¡#p=Òîÿ\x00009Öë4Ã0£×oqè~\x0005è7\x0002Rm$4Y>ÉðaÐýø[å;ôòýÊé¨üì®×Ó¥=Ñ¾ÔDÿ\x0000<fªG÷ÍÏ¶]âDj 7\x0003Õç\x001føïÜâvn¤Ì\x0011-¤\x000f\x000cÇt»ýÒæÖìÍÚ}b3Æe÷ìß#W<uÞ±\x001cÝ1W`ËËG¯Ùuä?Q\x001fAÉ\x0010\x001dò(vlUØÒ1WcqWfÅ]\x0015vlUÙ±WfÅ]EqC±\x0014;6)·fÅ.Ï~þF¯\x001d\x0006ÛÜÉÿ\x0000\x0013l|GÚSþ\x0015?óÜg[È¼Ã³b®Í»6*ìØ«³b®Í»\x0000ê?Ýý#1óòq5?OÅØC÷TìØ«²GgýÚæÏ\x0017 îp}!Ø'-ovlUÙ±WfÅ]	ü÷ÓGë¸\x0014\x0013$r\x000f»üW,\x000fµ{1ÄÓD4Ê?mþg\x001dÂõnÍ»6*ìØ«³b®Í»6*ìØ±v<\x000cRì¼RìØ«³b®Í»6*ìp\x0018«±Ø«³b®Í»6*ìØUØ[åý[ü\x0019æK
J´è9ü>?îÉù53öGãb5Ìzù¿±âý©Ðþg\x0004«õ\x000fóyý«?-$?NÕ¼²ÿ\x0000\x0014úy\x001aïÅvWýÿ\x00003Zæþ\x0018Öï´ÊQ\x0018Ô¨\x001f&¨È{;ªñq÷|c·ÜÇÙmgæ0çT}ñÛî¢~fÁþ.òææeÞD
cr{óxÉù®ÿ\x0000N)sÛ>rÍ»6*ìØ«³a¥vX\x0015Â®ÇàWfÀ®Í»6\x0015vl»8WæGå¹¼-¨iëñõ!û_å/¿ïÔoY°ÞáÄË÷\x000fÐùÅßùÊ%Ñ?-yB!\x0004-­Ó\x001d£\x001d£ÿ\x0000'ò7ìô?
)\x001bü»üÈm\x0011û\x0013oÑXõø\x001fòâ?,¯\x0016ZØòa-l^­ÿ\x00009-ÿ\x00008Ã\x001fc}{ËÑªê@r% [Ö«ØKàzIßâ¡ÏM«\x0007\x0001\x0008¨#¡\x0019°\x000esòhZÙ9\x0014«©!\x0010FÄ\x0010z\x0011\x0003\x0012ªXü»6JÙ°«²ÀÁjì¶a\x0018,z
ÏÑ¶\x0007#A+CªÝ3²ÊOü\x0013nfrré\x001a\x000b8BØOÔ3ÚÊ\x0000_
¾ìÄ·\x0015ádò5Å\x0006Ø9«Y\x0000ógåõ¿\x0001\x0000ã³±öaßç×-©2-\x001fÌréd+|qÿ\x0000)íò9Å´­ZûòæèÃ*5øã'áaüÊQûòÒ8\x0008âgWvþfH~ÍÜ\x001f\x0003þ,ô¶«E®Â·6æ¨ßx=Áð#("H§ÞÙ½¤\x0014#ñ÷\x0018iÇ\x0002\x0010¸ìUÙ`W\x0015v>Å]\x0015vlUÙ±dì°+»\x001c\x00051bìFæålãiì¢? +iR(ÌÌ\x0011z\x0000úsÅºëj2Épÿ\x0000jF,~\Ê\x001b7½ÆÚ\x0001j\x0012ôP\x0006z³ÈºWè>\x0018È£2óoïú©ò6Zy\x0016¿wõËaÐ\x001a\x000fÛ\x001bù?Õ´»â¡à\x0018Ç#Íwcõ.£\x001e\x0006¿pÎ!ù[mëêh\x001d¿
\x001c¶|$ÎüÕ'\x000bV\x001fÌT~5þ\x0019ê +5¼«\x001dÇ\x0014[±Ø­;6)vlUØî8«±Ø­;	|Æieqÿ\x0000\x0018dÿ\x0000!!\x001b¦ï<ë¯ëÏ\x0019(Û2^ÔN{+ÊiÇOµ\x001fñJ~¬Å<ÚKÆ5c[×o×\x001c\x0008¤¿6,\x0015v]1Wd®\x001f²>C>m×ÿ\x0000{?ëËýÑ|oUýä¿¬~òË!û#ä1LÁqU3b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»>~Lÿ\x0000Ç\x0002ËýFÿ\x0000¶xnÿ\x0000ÏÞ>àýYìø/ê÷Rc7¿Þ7Ï:vh^½\x000b\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vQ4Å[\x0002¸>L\x0004+"W\x0002É/\x001c°E\x0008ømùa=ÍÝ3&\x0010C ³±å{ëþ9\x001b\x0002Y®¥ò¦ÙÎüÇæHtdº¹q\x001cQ©grv
\x0005IÍÎK,²\x0011²M\x0000\x001b0á¢b\x0010\x0006R\x0000\x0001Ô¡XiËjY\x0008UQRO@\x0006|{üãüÙ¹üÒ¿ylÑ·»\x0005\x001br#§6êOo³ÐgÒ}ØÐìÌ`P3?T¿G¸?`û/ìÜ;\x0017\x0008\x0003BòO­÷\x000fèÚñß2kí­ÊH$D§à_o\x0013î³9\x0006t¯hÇ3b®Í»6*ìõäüá¿?;8ÜÃ\x000fÔ´óÿ\x0000\x001fw ª·ücO·'Ì\x0000å×lÛé;/&§z¡Þ_8öÛÍ\x001fbÜL¼Lêp¢Gõ(ýþHY®Ö\x001fsà3Ï\x001euò}çåþ£s¢êiéÜÚÊÑÈ½ª:\x0011â¬(Ê{\x000ekrâ8¤c.aí»?_´1G63q\x0012\x001f\x001fÒ9\x0014B8qQß#Ö·RXÈÀÌ#\x0006GSFVSPA\x001b\x000eàå`ÖáÎ\x0006@c!` ò ®"¹úYÿ\x0000ZüîóßËvú£õØ¿qz´È\x0005ZAG_
ýõ\x001eÎÕþk\x0018Q´½ïÁÞØû<{\x000fW,Cè¯\x0019þéï/·«\x001e¹ÑjvíÍÄ(fÅ]\x0015vyÏþr«ò|~uyVïKy]Ä>±iµO­\x0010$(ÿ\x0000]yGþË5£¥üÎ3\x001e¼Ç¼=Ç±½»ü¬Rj\x0007Ñúëð5/½´¾\x0003Û¾~n4=jëÊwê\x0016NÐÝ[J²FãfI\x0010Ô\x001f ÇÐsÌ!36 ¿tj4ðÕã9(N&$t"B\x0003(aCÐçé¯ò\x0003óßóËËöºõ½\x0016W^\x00171\x000f÷\é´ò¯Ä¾(ÊsÕ4Z¡©øûß=¦ì)ö&ªx%È\x001b¿\x0003Èþæ\x000b\x001e/EçhÌçQÍ»6*ìóüå^¯êS½ÿ\x0000	ÜÉo{\x0012zE´Ä #FûHÅjT¯ÄHâ>Ök;F33á<öê\x001eßØÌÚlZÜ	áõ}1údG"/¿n½\x0015í\x001cºgæyÞé±gcRÌI$¤½sËI·ï\x0018ÄDP\x0014;!éûÿ\x0000/ÿ\x0000±¿ü´Ôíü·¬Lóè×R,H\x001d\x001bWsDhÉ©\x0011héöEy-\x0008<º>Êí)aÄíî|kÛÿ\x0000b±v\x0019jpÄG4\x0001¡^ \x001b¥Üyô÷\x0001»¶\x0012\x000eC¨üsïfz\x0013ñâK\x0015vlUÙ±WgæÃþs2Ùm|ý­*ô3£}-\x0012\x0013øòþÕ\x0015^ÿ\x0000Ð\x001fºýfà¿æòhj=ãÿ\x0000>ÉüÖúå­÷®[â¾·j	ý!fAì¯ÅÀ\x001fÎç:\x001eÀÔØ8ÏMÇé|þ\x000b½Á<zÈ¨xs÷â~"ÇÀ õ\x0018©G\x001f#W³¯~tK3b®Ï\x001fóóß&CEÓuÄZKÏNµ\x001fðÑ¿9Oh1\#.ã_?ì}ÿ\x0000þ\x0004:ÿ\x0000\x000fQ\x0001þ8	\x000f|\x000fêc§=	_\x0011#ÿ\x0000\x0008üÂÿ\x0000\x0002ùÚÖÞVã\x0006¤hþ\x001cßâéõ\x0015T®sCØÙü, tß©õø%v_ç»>r\x0003ÕÜ6û\x0012OÁ\x0019zÐûo¡¼ôâ6*ìØ«³b®ÏÌ'üä·G¼ã¬éª¼Q/$xÇs~õ\x0007ü\x000bò~/\x000b,ûwý/ß¾Ék¿= ÁîN8ýhz\x000fÛ\x0016EnÜÐ\x001flúaÿ\x0000>Âóç×ô½KË7Åk:\D\x000fòL8°\x001f'Jõu>Ïæ¸Ê\x001dÆþoÿ\x0000Á{³|<Øµ\x0000m8\x001f|
²_b_¨¥\x0008o\x001cúkóâ[\x0015vlUÙÌ¿1?9|¿ùQ\x0017­æ\x000bø-vª£5eoõbZÈßìTæ.}T0}d\x0007}Ù}ªíSZ|r\x0015\x0011ï¨T&ìçÎoÍ/ùùÌ\x0016ü­ü`ÒÀ¹»øWæ°¡©ß§'_u\x0019Ìê= \x0003lcâSî\x001dÿ\x0000\x0002)J¥«É_ÐÇ¹øÊCî\x0007ÞNþs÷gÎÌßùÈï4þn]oQàcþóÆ}(\x0007·¦
NÅù\x001f|æu\x001aüªF»¹\x0007Ûû#ÙM\x001fd×"_Ïªé¥uð¤|vë\x0017AC0\x001e¹[6*ìØ«³ô)ÿ\x0000>ýóqó?-`sW±{cã@ÞªýË Qì3Ò;\x0017/\x001e\x0010;\x001f§ô¿\x0015Á7EùnÑ,þÎ\x0003öÂÒ+åâçß=±×ÊPÉ\x0010J
¶à\x0011ìqH5»³ò}­Å7uYÒ\x0016)5¥Óq³+Å!£\x0003Ø+?0qÈù\x001f¸¿£:s\x001d^\x0018.3±Þ'\x001fÚÉÆ>c?L\x001f?qþrùnÇ^B=Ic\x000bp£ögOAÿ\x0000\x0004*?É#=OE¨üÆ1/½ø3Ú^Æ=«Éò¸\x001eøKxýk\x001e/EçdÌ×RÍ»6*ìØ«³b®Ï\x001fóô\x001fùH´¿ûgù=&p~Ðÿ\x0000y\x001fêþý_ÿ\x0000\x0001ÿ\x0000ñ\¿ðß÷Môï²~yó+9gß\x0013\x001cû½ÿ\x0000>ÓÔ>³äùà¯÷ZÂéÉ#o§®z\x0007`Êñ\x0011Ý#÷\x0007ãÿ\x0000ø,âá×F_ÎÅ\x001f²R	. >?£>gJø¢\x00076*ìüéÿ\x0000Îvùf/yóPpB]§¨hÈÑªì{Ñ÷\x0019æ±Ã4¯­\x0011ò~Ýÿ\x0000Æ®:ÍÄ#Î\x001cPî"DýÄ\x0014úÉ¹ öÏ\x001fæôäVlUÙ±WfÅ]\x0015v}Êÿ\x0000bÙz>T¾äÔä\x0000×¨X!\x0003ñ-÷³â±ý/Ð\x001fÿ\x0000à½[wa\x001flæj'â\x001f,úE;á\x000cØ«±\x001bÖÕ\x001aY\x000f\x0014PYè\x0000\x0015'\x00014Ê12 \x000eg`ìü¦þ`ù²o:k\x0017Ú¼¬Å®î§îvõ\x001d\x000f\x0006v\x001bggÊrHË¼ó/èeè££Á\x0010\x0002¡\x0008Çý(\x0001Æ\x0000\x001e\x0003!¼ÏûòiA~Qb{¿\x0014Ó²«Ó²É'®+NÊÅ.Í»\x001aØ±-\n(w\x001cØ«©\x0015l.lU¾9±V¸æÅ]Ç6*î9±WqÍ»lU®9±WS6*à3b­ñÍµLØ«TÏptÏ@/ÒzW¦Eo.>°äö\x001b\x000cÚâ\x0008uYgÄ_hþ]y_ü/bâIGæFËþÄmó®)§ÛúïSÐnr\x0019§Â=ìðCû¯Ío4ìL1\x001aMqT_\x0010¿´ßÃéÉ6k]ä<Ø«³b®Í»6*ìj_Þ\x001fÍ\x000f¥Öçú]þN­4÷O×3!Æz\x001aZýôæ«?ÔXIñoæïüvn>Qÿ\x0000Ä\x0017\x0004f;\x0017æÅ]\x0015vlUÙ±WfÅ]\x000bóCÉW'Sµ_ÿ\x0000|£±þïï¾]	tlz\x001fu¿P}VS¸û\x0004÷öþsùiçS©\x0001§]\x001fÞ¨ýÛ\x001fÚQû'Ü\x000e##8¬\x0007Í\x001a\x0017Õ¹|\x0004üCÀÿ\x0000#[[
ÊÅ]ó_@úý²ÞÆ>8~×º\x001fèwûòÈ\x0016q,¿Ê\x001aÕå07Ù~ë\x000fëO!yüAdæ²ÇðIó\x001d\x000fÒ?FB!IgtïÑÓ\x0003ào~G·ÑL\x00146*ìØ«³b®ÆñÅ]LUÙX«°·WÒbÖà{YÅQÇÒ\x000fb=Æ\x0010i Ò*Êñì$\x0012ÆhAÿ\x00001d²oËíK¸¿Æ{ýÛ|¿ê
ÕÄ\x001e­pùÖ«Ô¯³\x000eßÃ=V$\x0001pEGÈæ;CÈ\x0019x\x001e£\x001dµ\x0015vl\x0014®Í]\x0002»\x001aF\x001bWeS$®ÊÅ]\x0015vl\x0014®Ï yÞ×êzÊÅû-ÿ\x0000eG\x001eOiÐ%õ­b?äÓîÛ;ïå}ç×4ÈÔõ>ãQø\x001c£'6óy× ônØÿ\x00000
÷ìÎW!l\x0018Þ7
»6*ìØ«³`¥vl»6*ìóæ$\x000b}­G\x000ca
u£\x001a\x001a}ù\x000eMÐäôï-Hmì^Eê\x000bó\x0003=
mh¶1¬1
"\x0000ª=ÙE´¼ÖiLì]·$Ôý8®\x0015SÍÙ°+³`WfÅ]F\x001bWc:dÙ±WfÈÒ»6\x0005vlUÙ±WfÂ®Æ\x0011L*ì¬i]"®Á\x0016Me"Li\x00180ù\ ÒA§aß,ÖÒòC\x0017÷RÒXÿ\x0000Ôr\x001fuiôd¦7e1EØBfb~\x0010j\x0007¿L\x0007bX\x0015ØÇA !A\x0014 ÷\x00198ÈÄØæ7
Ø<w\x0019Ã\x001fË\x0006\x0019_ËEø	\Üé\x0013\x0013ONànÐ×°§úÜO|ú\x0013°;N=«UÄ6ó¯ºAå»B'I1<áÈ;áßïÜÏíu\x0011rî*8N¿Ì½èÎäß1\x001f1Ú%^\x0017\x0011±xÎÅd]§¿\ñÜì³ÙÙ?ï\x001fwwÃÒb±¿\x0013Õôÿ\x0000ÑÒñ]Ñ¾$>*zd¯9æÔ¯$6ñÛ\x0019\x0007íÛº¸ÿ\x0000Qþ\x0016û)úr|Ã>cÜìd\x0018;6*ìØ«²®*ìf*ìØ«³b®Í»6*ìØ«²®*ìaÛ\x00164ìØ¥Ùô\x001bòU8h\x0016êçþ\x001d²\x0012|;Ú#z©ûÇûìê5Þ\x000by»v^\x0014»6*ìØ«³b®Í»6*ì\x0005¨v~c(ÏÉÅÔý.Â\x000c×:fÅ]+/îÇù÷Í/¤;?Ò\x001d²ç!Ù±WfÅ]\x0015vx»þrJEmNÝGÚ\x0016Â¿Kµ?QË"ú×²\x0000ø2?Óý\x0001Ùç/vìØ«³b®Í»6*ìØ¡Ù±C±àS\x0014»/\x0014»6*ìØ«³b®Í»\x001e\x0006*ì¼UÙ±WfÅ]\x0015vl*ì°+]?<éÍ¨éòÿ\x0000¼	\x0010÷\x000c\x0010§ÝÙãÇ\x0013n>xqDÛÜ¿ç\x001c|Ö¾Ró5qpÆÚ`z\x0018ç\x001c\x0008?I\x0007èÉÇænª5»M\x0007ÍÉÒe\x0016óøÊ»WýY\x0003gö\x001c¿-xCcá·Ü_+ön_ÔeÀz\x001e!ð5÷\x0010ö_-y@Å\x001fü&ï\x0000{»Aß³Woõâ+ºg¦¾¸ø£6*ìØ«³d©]\x0003\x001bWc²*ìØ«³b®ÍÙ²Jìp\x0018-]é]só\x0003òÉu®W\x0000-ÇVNOèß¯1²áâÜ8Ù0ñn\x001fnÎ7ÿ\x0000ÎTËäb']¥Ó\x0016)ÄöþÇ»EíÕ?gm²#ùyùÚ\x0013
/S¨\x001e(íÖ3ü­þOüGåÒ¬Yxv-x²ðì^Õÿ\x00009+ÿ\x00008Û\x001fæ\x000cmæ¯+ð{A$±GB·+Jú±·©N£ýÙþ·Úô  æ¿.Ý\x000cd«\x0002\x00084 ìA\x0019xUnl*ì°0\x0015v?\x0002»\x0008<Ówõ\x000b\x001b{2(?^N!!1Ò`úÅÄiâÃ<µå\x001b_­_ÛGJÖTû©ýY.ND¹=wZÒ¶¿È?ÙìÅ§\x0019â9°«³b®ÈÇ¼­\x0017`1=\x0004S\x001b÷Sý\x000fq¦@Òk¤jÏ¤ÉÍwSöÄ\á¾BÖeò¶ lçÙ\x001dý9\x0014önýÿ\x0000[!a¶BÙ÷,V·õãÝrSâ;ôîPÐòÌ°1WcñWfÅ]\x0016TìØ«±ÁqE»\x001d»6)vsÏÌýOô~È
\x001af\x0008>][ð\x00198
Ù\x0006Gåk_¬\=\x0010\x0016þç]\x0007M:½Ô6ÃöÝAùWÃ/&¤ê\x0017?SåþU'éíÐ
\x0017aÐtÌVx¡5ß9æÍÇ£§pþyP}Õ?Ã,6qdþQÍ|\x0014á¯É»^w3ËÙc\x0003éfþÌÓ$÷ÎÒ(ÓÅûöç¡²·fÅ³b®Ç\x0001\x001dÅiÙ±K²é\x001d¾f\x0014±¹ÿ\x0000/ÿ\x0000\x00118BQÚ`¬ñÿ\x0000®¿¯<d:fSkÙûç³<ªkamÿ\x0000\x0018Sõf)j/\x0019Õ¿ývýx}P\x0019tÅ]\x0002«²ñWd¢\x001f²>C>m×ÿ\x0000{?ëËýÑ|oUýä¿­/¼²È~Èù\x000cS0\ULØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Ï¤_?ñÀ²ÿ\x0000Q¿âm!Û¿ã3÷¸?V{%þ#ú§ýÔÍï÷óÎ\x0017¯BæÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±We\x0013LU°+;äÀA(Jà)fã±L ·å·7tÌ¨A\x0016Èì¬9dZûPãß6\x0018ñ1%iºW*m\x001do^Å\x001aYQ\x0014U\x0000\x000f\x0012NÃ6ø4æd\x0000,@n°²\x0018Iä\x0000²~OEÓt¥sz*¤ì\x0007Ó<ÿ\x0000ç ¿?¬¼Õg&¥\x0016;/©0Ú2\x0014××v©\x0003z\x0001á\ö_f½É¦Í\x0003Që¸­ûö'Ø¼ú<ÑÕj*4\x000f\x000c9Êä*ÏAÏÞÃ¼ëç\x001bkv°³«#ôZ\x0003Z\x000eçõgsÔzxþlUÙ±Wguüÿ\x0000qó\x001fçÁ4KSõpÔîZ¤	½
^\x0011\x001fÊÛ6\x001a]\x0006MIô»Ï'íïjô½\x001bÍ?WLqõLü:{Í\x0005\x0019n\x0016\x001e§èÏ²\x001fó\üªôïuU\x001a®¢´>¤ËûÛþ+q·óIÍ»=3¶Ñö6<\x001bËÔ|ù|=£ÿ\x0000F«µn\x0018¿sº'ÖGô¥ú#_\x0014¦kÖa°Ïs*\x0000\x0001@:\x000cß¾HM óå¯üügþq÷ôõ¢ùëL·\x0016ª±ß*Þ
Ñ%Û©-ÿ\x0000\x0015z&r]¹¢â\x001e,y«ÝÞý\x0007ÿ\x0000\x0002¿iü	\x000eSé2ÄOIõùÜÇ½2°ïÓ>/g\x000eýNg°ç
ÿ\x0000>?åJy4¼~:f¡Æ\x000bª	?ºý\x001a7ù\x000cÝÀÍ×dë?-¦[\x001fÖùü\x0010=þYÒ\x0013\x0001ûÜW8yÿ\x0000:?\x0011ËÌ\x0004-Ü>²íÔtÏÑR°aQ¸9éoÄ\\x001c¼UÙ±WfÅ]/ùÎÉ¿ùU^kêÕ8Øêuº²1ýôcäÿ\x0000\x0010\x001dÔvÏ6í/Ê[Òý¯ÿ\x0000\x0003ÞþTÑF27\x000fîåÞb>òÛÞ
{g/¨´=FØkÿ\x00008)ùýÿ\x0000*_\x001aUüt½Q)*~\x0018§é\x0014¾Â§å`Çì\x000ccë/>\x0013ôËoqè\ø#{3ü­¦ñqÞá\x0006CúPþ(þç·V¯ õV£¨ÏÐFz3ñG\x0015vlUÙ±Wgç·þsò\x0013þT÷[P°©\x001a\x000f9kYb\x001e\x0000\x0013ÍGòµ\x0007ÙÏ7í}\x0017åçcéãßÕûOþ\x0007^Òÿ\x0000+é|<òá¨ÊùÊ?Ã/²óO,çõV¨Ï\x0013+Ï%$\x0011¸#¨#¾hêÄZ3?X\x001eD¼QÒln.AY¤µ¤\x0007¨fK~9ëøI1\x0004÷\x000f¹üçí\x001cqÇ$cÈN@{\x0019}ùä¯.uËsb®Í»?6_ó÷\x0002ãÏúÑ^Ó¢ý"\x0018ÁÏ0íSy¥ïý\x0001û«Ø\x0018ðöf\x000fê¶ROí\x0005\x0010d\x0017þq÷ó5¿(<Í§ë Ò(¦\x000b8ñO_¹Iaî\x0006cèµ\x001fÈ%ç¿¸»iû v¾&\x000e¦7\x001fëÇÕ\x001f´*O\x001fª¥sõ\x0005\x0004ër$d2°\x0005HÜ\x0010w\x0004g«\x0003oÀ\x0012£ÌlXçLW\x000b\x0017g\x000fÿ\x0000üº?SÔôh×Ò@Ï\x0000¥O­\x0017ï#\x0003Ýxý9®Áãã|¶÷Þ³ÙNÔþKÖâÌMDH	V^ò\x0006Õ­äô\x001cüÌhº´Þ[»úÜÞT\x0008Ø«ÆÁÒ\x0008Ï,\x0008#¡·ï]F\x0008êqÊ\x0012Þ2÷HS!#¦~«¼æ¨¼ñ¥Ùë\x0016ÔôîíâhkNj\x001aA4ú3×0ä\x0019b$:_ÎîÑÑËExeÎ\x0012Où¦Ó¯\x0002GJrç^·6*ìØ«³á/üü¯Ê_¡¼Ùoª(\x0001/¬ã$,Q¿áLyçý½ xû¯?àK®ñ´RÄyãÈÒÌ	\x000f·9ÓÚ«O\x0003ëþp+Ï¿à<ZE#R\x001dB9,ßæôxþU\x0010|ÌnÆÍáæ\x001fÒôþ>.óþ	]ùÞÎ\x001cñ\x0011´¿ØÈª^§4>Ûçè=%ø"Í»6*ìø\x001dÿ\x0000?!ÐEyØ]\x0001µÝ¼ÿ\x0000â#è\x0011¯Þ3Ï;v\x001c9o¾ þÐýÿ\x0000\x0002OÙü?ÌË8ü\x0008ÿ\x0000ß\x0014îÁªð9àLç_eFæÅ]\x0015vlUÙ±Wg×ùõÇöÖt6¯û¢å?á£ø×;?g²}Q÷\x001fÐüÑÿ\x0000\x0006-\x0017÷\x0019ÿ\x0000­\x0003öH~¯R^>ºçdüÖæÅ]ÿ\x0000ùÉ-\x001fô\x0017õËjP
FåÀðY$2(ûgkãÃcúGí6ýÿ\x0000ì\x001fA§ûT\x0007Æ1\x0011ý\x000cÜòEù\x000cöüûWóô\x0016©säë·¤7Êgµ\x0007 1ñ¨ÿ\x0000üã\x001dÎo{\x0007UÃ#õÜ{ÃåðYì/\x001f\x000cu\x001e¬~ÿ\x0000RGcþl¿Ý!5\x0008ª9ÝsínwOÊFlUÙ±WfÅ]\x0015v|7ÿ\x0000ÊÇÍzz\x0013ð-\x0008\x001e\x0004ÜOSôÐ}ÙÀû@x?«úKõ·ü\x0008\x0007ø\x0016CþÜÜcýiÆöOÏ>mç0ûªaSÿ\x0000çØßk¦ê:'`\x0005ÔbêÜ\x0013ÖH¾\x0019\x0014{´d7Ê6Î·ÙýEHã=w\x001f\x0007çø.öAÉ\x001eª#è>\x001cÿ\x0000«=â~\x0007oóÝF:Þ\x001bgÙÜî\x001fÒØ«³Îó_óZOüäUÛß\x0005ä\x0001¾­v\x0017µ*¬¦ã4Ý	\x001e*TïÍv:±Gb9\x0017·ö[ÚÌÞÏd2Çê«\x0019å*ê;¥çóµx.\x000c\x0007n\x0019ñãÏ¿ó\x001evòs¿Õ-ãÔ`\x001ffKi\x0007"?ã\x001bñp|@\x0004W¡9Åfì\¸ù\x000e!äý9Ù¿ðMìý`\x001cr8¥ÔL\x001aÿ\x0000M\x001b	ª_#õÛç\x001bSÿ\x0000|óvH¹Ñu\x0005ã×ý\x001aCÔÓöAÍ|´9cÎ2ù\x0017°ÃíF7Ó\x0011ÿ\x0000>#ï*âu=\x0008Ä,?!<×©ÓÐÑµ\x0006© ÿ\x0000Foô¨Á\x001d\x0016Ir¾E_i´X¾¬øùñýn3¨î0O?ç\x001f|Ñù`uoMÒÐHóO^#yvðÃE\x0014x¥\x0012\x0007^Ú}\x001e¿/,g:&£gaçUÕË:¹¢ãõ*¹÷Ûþ}Åcõ_#h\x0007«}rÛw§\x0014ßþ\x0007=\x0013°£X}ä¿\x001aÿ\x0000ÁW'\x0017h×óqÀ}òý)%ùøþöÎñä\x0016lUÙÄ¿ç$|Õþ\x000bò~±¨\x0003FK)Q\x000fùRMiïVÌ
~O\x000f\x0014ûvz¿e4×`ÇÐä>è#÷+[¯7\x0003ß?0\x0003<¥ûýfÅ.Í»6*ìØ«³b®Í»\x0018Mq`¼
eb­æÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015v{?R¸ôêVzF\x0008q\x001fsùo|#ÞÍ)ü¯ú~øO(¬6ôvð-û+ü~fÉÖ¾ºf\x0008\x000b1 \x001b{\x000cÙAõt\x0003¹Üæ«$øËµÇ\x000e\x0000øÏ~e>i¾à\x001fÝ¯Á\x0010ÿ\x0000$wúzà¼©µfÅ]\x0015vlUÙ±WdcP5ý\x001f«6~Yê}ùM\x000f££ÁþQvûØÿ\x0000L\x00058ïGÃKQD\x001fNj³ýE\x0012\x000f¿5¥õub£îE\x0018#1ØSÏ3b´ìØ¡Ù±WfÅ]\x0015v2Xe(à\x0015`A\x0007¡\x0007¨ÅW#\x0014!Än\x000eyC]Ò¥ò.¢¬ñW\x0012D|V½>²s \x001e Þ7zåÚëöÄ\x001f´W\x0003ãüsÕVi\x001aÏ\x0011ª:Sìs\x001d¡äÓBmØ£lT~\x0011©b3@·
Ñ¸ª° \x0010v8ªäs\x0019\x000c»\x0010j3Ï\x001a\x000c­ù«µ§÷2\x0010µ=8°ßGCôåÇÔ\x001bNáé\x001a\x000f1Yí ¯Ò>Ðþ9èKSÍsb®Í»6*ìØ«³b®Ê¥qWeqÅ]tüâ¶\x0011ÝÅ êñPÿ\x0000±'úåÐnÒ¼)h]|\x001fõí>S¸7V\x0016Ò\x001e¦%ü\x0005?U.mEë\x0011z7\x0012(þsúòA	nlUÙ±WfÅ]\x0005+³`¥vl
ìi\6®ÆL»6*ìó'æÍÕµ\x001fS´±«}#á?«/&ørz·¦õ-¸ÿ\x0000+\x0011÷ï¿É¹yZNË(?zéÈ\x0018MyÝ)27~¢s°e-l+6\x0005v7JÕØÜ*ìØ«³b®Í¥vyÏ³W[\x001fä´#õ\x001cÉÙº<§åä¥÷\x000füsÓG®b´¼³\x001aEp«±¤S
»+
»6
WfÈ«³b®ÍJáWc\x0008Ãjì¬*ìØ)]"®Í»6*ìØ«±¤d­]ÆÙ°+²XÃôÎ\x0008Þ[3B;\Ô\x001fö\x000eiòaæ=ÍÇ»îvDò¶·fÅ]\x0015vDüéåóæ\x001bFH\x0019ã"H\x001cuY\x0013u þ\x0019Ðö\x0017i\x001d\x0006xËøO¦^ãú¹´å îh÷ÿ\x0000P1Ý\x001báqâ§®FWT\x0012\Øy0\x0012=]\x000c\x00176\x000by\x000eÅ©Û?\x001cõßk4\x0003W§ñ\x0007Õ\x000fPý?gÜòÝàôçø
Çþ\x0017._&A}iÎ)mí\x0001å\x0019ñöú3§gS×°¼ù`f{~ÓC"Sß%üTd¢Î\x000eÂh`õ£w\x001f±Ä4ÀÆr(vlUÙ±We\x0011\UØÒ)»+\x0015vlUÙ±WfÅ]³W$\x0015ØÜ*ìpÈ »>þN¯\x001d\x0006Ëþ1÷»\x001c®Oû@oUßú\x0003³¢ñþHýg)\x0007Ìêø\x000fÒì[,nvlUÙ±WfÅ]\x0015vlUØ\x0012üV3ôe\x0019¾\x001bQô»#Ù®u\x000eÍ»$6&±§6X~o§ú]òç%Ù±Wc9ü\}«½é\x0016õäì~I³Áß·>¾»"ÿ\x0000¾â\x000e_Ç,\x000f´{-\x000e\x001d0=òûkô;8Æ\x0017­vlUÙ±WfÅ]\x0014;6(v<
beâfÅ]\x0015vlUÙ±WcÀ¦*ì¼UÙ±WfÅ]\x0015vl4®Ë\x0002¸UØü
ìk(pTô;\x001c\x0015h"Õ­çkWYc4e!ø\x0010j\x000e\x0015h\x0016§[ò\x001e©¥õM¸£\x001e\x0001\x0018J¿o£<ÇV?/­ºH\x0000~Ø¾G­\x001fí\x0018K¤À\x0007íê~ê:ÂØþ`hZþÂ
fÊßÕð&XÌ.>þ?N\x0008Ò¯?HÛÅp?Ý«}à\x001cô¸\x001b\x0003ÜúÔ
øGÏ\x001a\x001føgT¼Ó§Õîe|È\x001fÁùc6-Â®ÇL
ì¼
ìØ«³b®Í¥vl*ìx\x0019\x001bWeâ®ÍØà0Z»9\x000fæ×Zµ\x000be¥Äb¬\x0000þñG_ö@tñéÙ±ñn9¸ÙqÞáö§üâüä\x001c¾H»Ëº¬Ón\x001fnÇýçº\x0010OHØìÃ 'I(|ëë¨Ò®â\x001bÂÄõ\x001dÓèíí·l\x000c\x000fÁ\x000c\x000b9ÿ\x0000Ìüú7iQ\x0013/cQö\ì& ìÝ\x001fÁ¨ß´s½fküòÇ\x0001ÕØìi]
» \x001f\x0013ý_K;"ýæ¿Ã%
Ë8sdSÔ»Sà\x0018þ\x0019Åÿ\x0000, \x0013j°×öC·Ü§.&Ùòg^j£û\x001fz¯1ÜwæÅ]\x0006*ì~*ìòq¬JÝ)*\x001føÌòn'®è¼²QþK\x000f×¯\x0014;ùÒò")»6*ìØ²v8.(·c±C³bvlRì°+»<ÿ\x0000ùÅêÜCj:"\x0016#ÝßË \x0019ÅèL¶ã\x001bÊh>Cý¼\x0001ùI§ýjù§#h£'émá\3)'Í÷\x001e\x0001\x0007í·à7ÏI\¡­æYÅ¿9§ã\x0015´^.í÷\x0000?[Y¿£«Èþ\x0000\x000f¼ÿ\x0000f\x0008ü´áo<çö¤
?Øÿ\x0000\x001c\x0013LyÒnRG\x001f÷ìÎÉ±axà1E».«²ñK³b®ÇLPì¼UØIæQ[\x001bøÂÿ\x0000ñ\x0013%\x001d¦\x001aO\x001fúëúóÆ6Ì¦×³\x001cö/Ï=:Ôÿ\x0000Å)ú³\x001a\ÚÇuÆâQþ[~¼Ò\x0015Ksb®Í»\x001c\x0006*ìEöGÈgÍºÿ\x0000ïgýyº/ê¿¼õ¥÷Y\x000fÙ\x001f!f\x000b©\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙôògþ8\x0016_ê7üM³Ä;wüf~ñ÷\x0007êÏd¿ÄqTÿ\x0000º\x0019½þñ¾yÓ³Bõè\Ø«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»\x001aZiW\x0005® ï\x0001\x0016*à\x0019§\x000bÆ,S[{RpêóeÂ\x0008%Øéü²'¨ñ®ù±Ç,ëLÒ9Slàÿ\x0000\x001fúåÄ\x001eµü¼`}8Wy\x001cû\x000eÃÅ\x0000ùíodv&^Ð@mÖGé\x001fç¢ìOgóöÌøpÕ3´cï? nÊîníü·\x001f©rw?e\x0007Úoþ=3å÷æçF¥ù)\x0017
éZT·Bx\x0002ÇöÛÜì;\x0001õÙ\x001d³G¤\ºÌóøw\x0007ê?g½ÁØ±¸,êÉ!¿Ãù£ðKÉ<ÃæÉõóÅ\x0008HÇOñ?æ3çHö¬_6*ìØ«³Ö\x001fó¾]ò¿¼Ñ\x000eç\x0008Ì©0¥¢ã\x000b\\x0003UI@¡`ãd\x001c¢°nTÍÇeC\x001eL9:òî¿7Î=½Õk49dÒ\x001a1þðr\x0010êcÝ]vºÜU!®ÙjN~´Í.
\x0016\x0014µ³!5
Æ¡Q@è\x0015@\x0000\x000fz\b"(l\x001fræi\x0019LHîI6OÄ¤$×s²M-fÅ]õ\x001d:\x001d^\x0019-.dTd\x0018UYXQ\x0002
22¢Û,±HN&¥\x0012\x0008#¡\x001bÁ¦ã?4ßóßÓ~Bù}*l¥ýõ£BÇe¯óFjò
Ñywhi\x000ef=9äýßì´QíÝ,ríÇ\x001fNH÷Lu÷Kùtd\x0016ózë^ýóÏ\x0019­{u|ý\x0003ÿ\x0000Î\x0008~|\x000fÍ.*ùùjZPH¤©ø¤_}Fÿ\x0000)j~ÐÏFì}g\x000e\x0013õGoGâÿ\x0000ø#û7üªñ`?uä?£?âé\x001eÿ\x0000$ö\x001fIª:\x001c÷.oß$AæÅ]\x0015vxóþsòwþV×ç{då}§VêÞ¬Á\x0007ïc\x001fëÇR\x0007vU\x0019¥í}/×8î?Ké¿ð=íßä­lDC/îçÝ¹ôû	EYËé6ý\x000eÙùÖ\x0007<Ñûu>ÏÐ¿üà÷çïü®_/-óòÕ4ÀÏSñI\x001d)\x0014Þõ\x0003ÿ\x0000µ?hg¤vF·ó\x0010£õGcúß¿àì×ò>«\x0003÷YnQî¿?m#ä^Aé5GCÕÍëåHLØ«³b®Î!ÿ\x00009\x000fù5oùéåë\x000ej,Äz²ýÜè\x000f\x0006ù\x001aò\x0019»æ\x0006»J501ëÌ{Þ³Ù~Þaê¡}?Lãüè\x001e¬y­\x0004¾rûóâ/üã7üâ¶§ù³æ\x0013i¨ÀðiúuÇ\x001dBG\x0014\x001c£mí×ùÈ¡§ÙOþÏ.\x000f³û:YçDPõ|:?X{]í\x001eÊÒñcL±¼@wH}g¸\x000f´íßG\x0017\x0017"%Û©é¢h£\x0010¨D\x0014U\x0000\x0000;\x0001Ó=/ñ!6l¤8üPìØ«²ã¹Å]?Î¿2ÿ\x0000<Í«j`òYï®\x0019\x000fz!ÿ\x0000\x0003<WÄÉ)w÷¿¡^Ïi?'¤Ã\x000e8\x0003ïá\x0017ö²HWíÃ1\x001eS?C¿ó?ÿ\x0000ò³<om;r»Ó\x0008´}Ê ýË\x001ft_r='±õ>6 \x000f8ìCñ7ü\x0011û\x0017ù7])DT3~ò>ò}Cý6ÿ\x0000\x0014ö/MýùìüÞ>ZÍ»?:ó¿ÿ\x0000ò©üÛpöéÆËQ­Ý½\x0007Â\x000bÞ ÿ\x0000VJ;+(Ï4ím/×)n?Köïü\x000f;wùWE\x0011#sÅû¹='ã\x001f´\x0014úÎ_U}ÆÙÛ¿ç\x001e¿ç?!üòõ·u\x001d>{·µ2\x0004&U\x001e9eZ2³Z|©ú\x001eÚ\x001ax\x0008\x0010Mu·ö£þ\x0006í}Tõ\x0018òF\x0002uq1'Ô\x0005\x0013±ëJ3ØúÍÈ\x001aW=³ù\x001bÿ\x00009Ó¤þxkQyzÚÆæÖYRFI$xÙIy\x0015øMj@4ùf÷IÛ\x0011ÔÏ\x0002/½òh¿àu±4çQ,\x0000\x000f¨ÕîÈÂ9T\x001c÷.oß$AfÅ]1?çç¾Qúþ¦ëJ7µ»hÿ\x0000:TÃG§´\x0018®\x0011q¯ö>ûÿ\x0000\x0002\x001dw©Ëÿ\x0000\x001c\x0004¾\x0007õI1ÓGÏþ\×%òÅí¾¥nHÚhåB?6\x000c?Vq\x0018çÀA\x001d
¿QêôÃSXåÊq1>é
Mò\x00149úµò¶¿\x0017¬-µ;r\x000cw0Ç2j)"\x001f¯={\x001cøÀê-üëÖi$±K$bÍ4Æx<0û,pÖæÅ]\x001e?çé:\x0017\x000b\x0017SQö£¹ú¥\x001dâMW´0Þ2÷¹úoþ\x0003º|^pø\x0003÷\x0004×MmÏYÇ¿H&y±Wc\x000c	>\x0000W\x0016$Ó°ÛRòõîÍyo41Ë_M¤^¯\x0012À\x0006¥Eiã\x000cy>\x000e>\x001dV<ÄJ2#"ûèìÐ`za>AÊo=»ÿ\x0000>ùó_øoÏVöìÔKè'·#±n>ªþ1Ð|ó}Ø83\x0001Þ\x0008ý?¡òoø'è¿1ÙÒçQÂøOû¤\x001dòòO~óÑßR<Ø«³óÿ\x00009×¤\x001d+ó\x0003T4 êòöPF\x000fü2ó>Ø\x000eiyÑû\x0003öÿ\x0000ü\x000e3ø½ú<qùNGî)õª\x000có/<ÑsäBÛX±n7\x0016$ÑòCìz\x001flÕâÈqÈHs\x0006Þ÷]£·\x0014ðÏxÎ&'â)\x0010Ê\x001cP÷ÏÔÏåï-ÿ\x00001t=rÈÖ\x001b¸\x0012Uöä7Sî¦ª}ÆzÎ\x000c£4DQoç·iö|»?<ðOêOÃ¯Ç\x001c=2TöÉ^ë\x0016fÅ]\x0015vlUÙðÓþ~yÿ\x0000)mý²£ÿ\x0000¨à} þôT}åúßþ\x0004\x001fâY?áòÿ\x0000¦xÓ;ì|ÞÎa÷DÃ'\x001f|¹ü±Ölõû/ïm&Y\x0000­9(ÙÐû:§Øåú|Ç\x000cÄBê;_³aÚx'|§\x0013\x001fqè~\x0007u'¨
ùúòwí|õ§[k\x001a{s·º%ÿ\x0000â´>ã¡ð ç¬âÈ2ÄHr"ßÏ~z\x001c³ÃT¡#\x0013ð,qÔ¡ öÉ.Zà­Í»6*ìØ«³b®Ï¿óòûñoå\x000bx6ýî¡\x0017}þ\x0018ä;g5Ûò¬@H}ÅöÏø\x0012ââ×J]Ø¥öÊ(ý<|uöÏ¹çï×éÎ~ç\x0001-~­ù§tøäºm½î$ÏJìaXcñûËñ'ü\x0012§ÅÚy|1þÂ)\x0015ñ¬èÏeæíòô&lUÙçÏùÉÏÊKïÎÿ\x0000.KåÝ2â+i&&w1R·.?
Nä\x000f¢¹­í
1ÔÃ\x0010,oiìmãì]PÔd¦#\x0019\x0000#Wr\x0015{üUí¥\x0010·#¾|ó\x0007üû§Ï\x001a?&¶KKµ\x001d=)Â±ú$TýyÆO°óG\x001fqýoÒÚ_ø)ö~o¨Î\x001fÖö&I¢ß¡ëQ'ÌóÞuò &óD½ êb×\x001f|%ó_³òãç\x0013ð\x0017÷[×é=±ìýWÑ\x001fùÒàÿ\x0000wÂ¬·(Ý\x0008Î'¦Ï¥9ê7ÇUu*Ãæ\x0018\x0003\x00127¬Ç9EÄ;Á\x0007îV\x0006½0\x0016\x0006æób®Í»)±Alc1akób¶ìØ­»>ÿ\x0000Î6ÿ\x0000Î\x0001Ý~néñy_º{\x001b\x0019Ç+x£@ÓÊ¤%þ\x0018Ñº¡£\x001f\x0015\x0002OK ìS<s4\x000f!Ô¾%í_ü\x0012áÙ9N\x000c\x0010\x00192GiÊF¡\x0013Ý¶ò#¯*KîoÄGõGý\x0012ûË_õrÔ¾ø?êmÿ\x0000Ðþ?çKìýOÿ\x0000ÉßÕÿ\x0000©aÿ\x0000gÿ\x0000\x0014ý&Þ\x00037ý\x0012ûË_õrÔ¾ø?ê?è\x001fó¥ö~¥ÿ\x0000¿«ÿ\x0000RÃþÏþ)ß¤ÛÀfÿ\x0000¢_ykþ®Zß\x0007ýRÇý\x000fãþt¾ÏÔ¿òwõêXÙÿ\x0000Å;ôx\x000cßôKï-ÕËRûàÿ\x0000ªXÿ\x0000¡üÎÙúþNþ¯ýK\x000fû?ø§~o\x0001þ}å¯ú¹j_|\x001fõK\x001fô?ùÒû?Rÿ\x0000ÉßÕÿ\x0000©aÿ\x0000gÿ\x0000\x0014ïÒmà3Ñ/¼µÿ\x0000W-Kïþ©cþñÿ\x0000:_gê_ù;ú¿õ,?ìÿ\x0000âúM¼\x0006Büóÿ\x0000>¼´\x0016¬þ[Õ&úÚV;µC\x001bËÎ%RëqQÙá^\x001bóý×³¿à¿>05\x0018cÀydñ\x000f:7î°½53_mí&<ßå\x001bï!_Ï£êÐ´\x0017vÎRXÚÔP\x0008!!	\x00078ü¸)\x0018ÈQ\x001cß£t:ìzìQÍBP¸øù5G\x0012
#yS»6*ìØ«³b®ÏZ]Oõ-Û¶z¶8p
*rOÛì?$ùe|©dÛzâø¹ë÷t\x0018#N·õè2¼óá\x0015ÞÙ\x001cFûæ÷¿CY}R3In*¾á\x0007Ú?OO¿$­vOsb®Í»6*ìØ«³b®È¥áå#|ókTCªÊnEö×åí¿ÕtEñ7ü\x0011-üp6ZÒÌ®\x001cÀ´A_\x000cÓå7#ïc#»á\x000f>Ü½RíÇOYÇÜiü1^9R-eS\x0015vV)vlPìØ¢\x0015§fÅ\x000eÈ¼´¾gµhiûÕø£>\x000c;|¡ÉDÓ(MôMLés\x0007ý³\x000foìÈ?å?9ÆÚ\ÆFI@|+ñ/û\x0013êÊa?ó~ÅÔe¨\x001bçØý#;&VÖÂsb®ÎGù· ývÙo£\x001f\x001c&Oä?Ðþ¼²\x0005K1ò~¡èJ`o²ý>cúä«Èzÿ\x0000øÅ$cY\x0013àæ:\x001f¤o¢
J|Á§þ}øä¦Libe\x0011»\x001b»6*ìØ«³b®Í»8'ç:þòÙ¿Éqø·\x001bn7¡y ü2q/È_\x0016mÿ\x0000\x0018ÿ\x0000ÈK	sbÞ`\x0014ºýlÓ"Å&ÊÅ]\x0015vlUÙ±WfÅ]\x0002»6
WfÀ®Ê+ÕÙÂ¿9íú4Ýþ5ýG/Æ[q³ÿ\x0000#KýêªXÊüZþ1øÇ"äoÏ)ýÓ¬?Vw<©©çù°R»6\x0005vjW\x0015v06®ÊÂ®Í»<­çi=mjJv1÷q\x0019\x001eMñäõÍ
xX/ú¬^z¨õÌVå`WfÅ]#
«±¹%vlUÙ²4®Í]\x0015vQ\x0015ÃjìfI]\x0015vl+³`WfÅ]\x0015vQ\x0015Â®ÆL*ì\x001f¥êM¥J&@\x000eÅYOFV\x0014e>Ä\A¦Q4ì	8PÇÓ¯\x001aí^´÷ÀX»\x0012À®Í»6*ìãwpúZ6·j½l5\x000b{ÈÉ\x0012\x0011Èü³é>ÇÉù½\x001cx·¸\x0000~\/\x0015«\x001e\x0016³\x001cñÆP?
Ã>µVKg?îØ6÷¥FuèßÖPã£\x0000~ýóç)ÇF=Ä{@mºð$xdÊÂþßÞU\x001fðFÇ#\x001emæ\x0016à\x001eÔH/¢?³\x0003°ù£©Ä\x000ei\x0003¹Ù\x0016ÊÚÝ\x0015vlUÙ±WfÅ]#\x0015vV*ìØ«²\x0015v!WfÅ]\UÙôcòxèV#þ)\x001f¬å2|\x001f·Mêr[ô\x0007dÞ6¬Ì?É\x0019\x0013ê>ç¹pv\x000cËÜ§fÅ]\x0015vlUÙ±WfÅ]o»?çß)Ëô\x001fQôdw5®Ù±Waþk\x0018ùØàäí´ßK°n^å;6*ì\x0003\x001bò¦cÄÜ\x0019\Ï¹Ø;2\x001cÇgÏ\x000fÍùþ±¯^\x0007Uÿ\x0000E\x0019h}×°#Ã¥Çî'æK³bô\x000eÍ»6*ìØ¡Ù±C±àS\x0014»/\x0014»6*ìØ«³b®Ì1WcÀ¦*ì¼UÙ±WfÅ]\x0015vl +²À®\x001bWcò*ìØ«³b®Á_Ð\x001bæm<ý!W§»Äãøg{F82ãtÞ\x000bäþÕ\x000f6\x0019÷Hýñ/²¼Í~\x0017HòN¨>Ô/$DûCpA?/¥õ´«R{F\x0007ÜHþ\x0019èwêX~ÿ\x0000ÎMZ\x000b/8j¨\x0005\x0001¸ä?Ù¢µ\x001c\x0001\¿sÂqô¦\x0005vl
ìØ«³aWfÉ+²À®\x0005v8
`Weâ®Ë\x0002¸y+±ÀS\x0002»/\x0015vl»<±ùåfòµÚê\x0016X¤n@ØnGÓÔ}#5¹¡Âl8\x0019aÂl?[ÿ\x0000ç\x0015¿6¢üÙÑ¤òî±In­¢ôÝ_^Ø õ+^
þÅºï^GóRy¶Ñg\x0014\x0012¯Ã*ø7Èõ\x0019|aËÇ>0üùüøü£ò{XÄÕ­d¬²\x001fÚÿ\x00002\x001f¾þã&9scÅ²À®\x0005v8
`æ®ÎUùÀül\x0010xÌ?\x0000rÜ|Û!Íù-kpO\x001fÖ3þSGËR
á\x0013Ô?Y>LçÉùÅ©kO\x0017_ã\x0002¹CCÊqÀS\x0015vX\x0015Å]\x0003\x0015vyófÛÑÔKÛ\x000fÒ*?_\x000eMÑzäçmÇùXãÐ§7VHw-\x0012\x0013ÿ\x0000\x00022Ô^o\x001f£+¯0üp×\x0002i	\x0005qWcÀ¦,]\x0015vlY;,
â®Ç\x0001LQÍÙx¦Lóýç×u9Û²°AþÄ\x0001\x0011äÚ\x001e½åØ}\x001bXÇ¯Þs¨þMZq·sûR*ý
+ür¹\x0012,WÎò4ðR~óýÙ²¶\x0014ÂóÏsóº/åø&þÌº
±z/ã¤NÞ,\x0007Ü?·:?åÕtÈy\x000b¹úM\x0007à2\x0013æÄ5æ½k§ÿ\x0000&î\x0019Ð\x0000È1cùx«³b®Ç\x001d]\x0014»6*ì.Öa7\x0016³ ï\x0013øS*&É¸JàÃõç\x0014mM¯k9ë KêévÇÁ\x0008ûÆ6²ò?0/\x000b©\x0007½~ñ\x000c\x0012|x\x0018«²ñWfÅ]X¾Èù\x000cù·_ýìÿ\x0000¯/÷Eñ½W÷þ´¾òË!û#ä1ùâªfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015v}"üÿ\x0000\x0005úÿ\x0000\x0013lñ\x000eÝÿ\x0000\x0019¼}Áú³Ù/ñ\x001c_Õ?î¤Æo¼otìÐ½z\x00176*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìaza¥^\x0012¸I¤ZºÅ\\x000eóS&"\vÕÂé®éÆ\x0008M­ìya\x0015Õõ3.\x0018ÑlÇL¯lßêTï\x001cxÉgZ^ZmIüöÿ\x0000òå
§\x0019µ\x0007\x001f
Wá\x001eôÿ\x0000^§®Ã¯¢{=ìÔ»@ñËÓs=eä?[è¾Éû\x001f>Ú;\x0010wYùGôôv»¯ÅåôÐ\x0006²û·ð\x001dóæ\x000f<Åuæ«¾Ô%ifsRÌ\x0000:\x0000;\x0001°ÏyÓia¦0#\x0011Ð?Sèt8ô8Æ,Q\x0011ä\x0007ãsæñÛé5\x0019\x000cÓ1f=ÏêÂ\ÊsÐ±WfÅ]\x0014;\x0015·¸{GYbb®2²\x0010ÀÔ\x0010GB\x000fLA¦3 î\x000eÄ\x001f7gèóþq\x000fþr\x0001?>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/jpg/kit.jpg](https://preventionete.sports.gouv.fr/IMG/jpg/kit.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=¿Ëõ5Íu3åµf\x001b¿DA->è¡Ôz\x0007½·É¤Çø:kEÙßd<xÒ\x0015\x0005::\x0000ýÃ%cõ÷sÝìýÉ¤á\x001eß»\x000f\x0011×a]®\x0007\x0003Y\x0016K½1î\x000fgËò}\x0017£gÚ¸Kß÷Ãó¾Ð\x001fäß]MkJ \x0001YHJ@ï\x000e½=¿.ÚëZw\x0015v @\x000eî\x001f´CóGE\x0015F¹¢<³¤r	\x0004;Ú"\x0006\x001dúô\x001dçð×U9à¤¹£Å°ø<ïîWv¢úã8YoQ\x001dëò·\x001fØ­ÇÀ\x0019MåÉb{dj\x0017¯Ê0IÓÖÉ¿FB¤£cÇË@YÐXEóecÞ\x0019\x0002	÷\x000f(ÂQ.à\x001aú³"ãá§sÅZZt»¨ p!W¸#ÈoÇÎxùoi:IÔ99êÙz2\x001a)×ÌZÖ®\½Qý\x001f§87fäg\x001aáæ,üHxýä¦£\x0018É\x000bG\x001b×tëÎzÕT[w¾²áÅ*\x0000ÂCÃ\x0000=ÀïÓë¦\x001dO¶\x001bt8ò!6mg]g`Wö·=¤\\x000e\x001d:Ów±Jù_o¥N4µ]À.mÄ\x000e÷£´öÚü\x000f8[În»&b$ºG\x0015\x00130*À\x0007lá\x000f,Ç*Í\  r¢ \x0003Ðu6FSâ\x0002¦ºWå\x001dj-Tw^BI%)íGËNWP.Þ\x001bý¹ñöí­Þ\éZ\x001c1ÀXRÞ86)¾×××\x0017½,Ee\x0005ë6ßóßP?¢Q\x0018\x000c\H¯7È(t@£ÚoÏmìðßëh­±ð½ÚM.Ð<Ã¥Þ>è	»»~Mºm¿Ï®/ÂêÚ\x001a¡'{´ÕèðMÔw;v´Ö©QmÐ(o-\x0013màÛ¤¡¹T~4Ê<\x0004¥úúÁ;!ò^&nO\x0019J¿ÀÖö:95¶Eø¨Wéhq8Ç\x001bãüe\x0004máè4êÅ69$\x0002\x0017ákÍbÛ\x0000¾è\x0018E¯y¿Da\x001düuåæK$öK"þUd*DI>U(=Î^åY¦Y\x0010a	\x001c\x0012\x0000·Ãæ5¥¼çôÑãw;ëF\x000c	ø±âØZmª5hÞó\x0003ØSyL¦N¨\x0015¥Â®*\x0001|Èçà¡JP\x001f$é\x001c{Áß±:Ù3<|K¥P¾ÈÊïá«\x0010Üv#\x001aÓËáñÙfRù\x001c\x000f\x0000Gæú\x0015Ãg68I¸#Ks\x0011"%ÛOÆ<Æ×º²Ç^\x0013 V£\x0015Îp&d²©$åÌC)ÜO´ã|:y¿1½AæG\x0018Û\x0008à¦Ï4+MÈ6àoð\x0004PÖW
­¿1A|¸>P{}ñjÓ
'(Ý@|?§sÅJV¤ÿ\x0000\x0018¿Þ¬ý\x0012Òîz©\¨b8®Í±zq/O1ªI6æ\x000e»Äzê\x0014CÃ}Ù¨¯®=0Åõ¯£;¤ÙBÎaä2@%¹\x0008Az#ÉÔ\x0008\x000bjB\x001bZUck\x001f-=ºi½fôß¨MûQL^EO;)¢ ÛU¹¥ÆT´ÛÂ¿J^\x0010dóå¾0â»[_\x0019 \x0018Wä\\x0018@TQÄ\x0002¦AUvñQxäTGÄÝûQ×ÞË»³#»z'{6Wòþ=.ã¥k¶°ô\x0007W\x0018ë·
JChYòê¹±6\x0016÷Ú\x000fmÂÛ=YÊÇÅ¤'
-h\x001eß\x0007Á¾?Úµ$z-[a«\x0005P½\x001a(£E\x0015Çÿ\x0000«¯ðÀqÇüÃ«kF¯?H?FÃþüCUA:ÍúPíÿ\x0000õoÆ^©£Çÿ\x0000ßAþ®ãû)µE\x0019ûJ>¤}
¿ï}¹T~H=#ô?­ý ÖJÇN¡>ä>¿Û\x001d\x0014UZ(£E\x0015ÍÏ'ý$¡©©Ï7ôîWc\x000cLüdÄOù0\x0004ÅG8ÌÞ&­\x0016ü²ªSÖ\x000b\x0005\x0012èÊñ\x000f0\x0012 OV ìÇÈHÉ,=¥\x0015"þ^ÉUÁ¹
©êUPÂý®ùS\x001eàJ¾J¶f¦ø\x001eh®³k¤s\x0015ÌÄ¿ÊV\x0019ÔË$L\x0019|x4kÜ\x00058Tè¢\x0014Q¢ø>\x001f\>Øh¢¹Dôàþ\x001cîmÿ\x0000vr\x001böÈ®jñõwôiÛ?\x0017r¨WI?Jÿ\x0000Ôd¾4Íuyª9WÖ\x0014U³Ò÷³v@\x0012²å\x00018ö;8nc\x000fÜ7ê>ÀÖ´Ôëê\x0001\x0000.x\x0001tg°yk4s¦B\x0014o`´òçÌr¨¾â·\x000bpE£\x0016­/(8³&\\x001c^/\x001f\x0011j5©Ì?\x0018\x001d\x001e=¥c]7mñQÈ\x001fÊU\x0010(\x0019#@ÝwÕ\x0019özörévg§ëÈoLv\x001f1^Rf©1¥*Cd\x0007l\x0011â2âQ©\x0006à¦ÁC 
À¸höêN\x001fy&\x000eÊÉfq\x0018$ã¢ió":ü\x0014¬6âT­+#RU{(\x001b\x0015»x¿¸3
ÌJOâ¼i]¤ÌÍF¥\x000f)!\x000c².ö1\x0017@õ&k\x000bKÊ# \x0003ô\x0000\x001dÃÇVet¦½:îSebXÇÏ}	kBQSz²8âÀ\x0005II$\x0000NÜ\x0005WãÕ£u\x0002\x00038Íç\x001dâëhwEáN¡¥)7ÓÃåO~¤ªê/}[?rû\x001e£×"Âï°oÿ\x0000«ö\x001fU§Ú?üï§·åùMÀ|aU?t\x0017í{ÛËù=Î|\W'þZ\x0000\x001böv\x0013ÙÓnÐöí¯sç½þ5_ß\x001añÖ\x0015½I~ôïEeP)»·í\x001e¥\x0010\x000eÔw\x000f
jVÝf\x0014ÀhïÞaÛaßoo\x001d´\x001aÑ{í³(´TÇ(¾ïï°\x0017æ\x0001\x001e\x000eúæ´N¤X
T ÀL;T ôö\x0018\x000c"?XÃ£k\x0006Ý\x001c¯ó{jÑBù$\x0013w\x0001D bî\x001fr\x0006ê\x0002\x001e!ÓZ\x000eºàpl/Iî0î³ks÷iLÝ\x0002¨"Bl@){¶ß·Ú\x0001Ó»êë§ïî«NK.h¹¸\x0017¬ËvÊ\x0015>Òª\x0000\x001bNâQÑã9ÚªÒ,¸\x0001\x0002ÿ\x00007¹Yä§'yÅé¸\x000eÝDC`ðñ\x001dýQ\x0008K\x001a¦)Ï\x0012:Å!¤
n4Däø­il¡MyVI\x0001|8Ü_³¬«r7û\x0001\x0000ê\x000cp)ÖòH\x0007[É)Þ¯A\x0003\x001f´\x0007´:Á­6TÛs[ÇË\x0013|\x0017\x0019du¡?\x000b>\x0015×Ô\x0015OBCÏ\x0016ó7i¡~ú°'¹¬g\x0012Ý¥\x0001\x0002\x0001Cm¶\x0001\x0010í\x0001ê";éAO\x0012â¥\x0016ZOt·Ø\x000f-^ZAûæ:%)\x0008D®\x000bCPqÖ<ë\x001eSj¿\x0001Ü@\x0000Â"#Û±DL"o\x001dºn;ôðÐ\x0016x!\x001cM"¸[O­-vgÉÂ±3w\x001a9ª.\x0013qðmÒ(\x001c\x0018óáÜ®*n=n*éAØ:lM*DÇÊ|$³Àjlä÷&5§Kéq \x000b
7\x0016¿öiå\x0015âÜ\ýåßÉ\íÒ\x0001\x0011Ø{Öz\x0007xºbQè \x0008xé×\x001f§rÖØëÖlsO\x0013º­
:\x000bQCv\x0013qoO¶Ü\x000f*h&9g\x001f\x0002©Ä0©×QÜA%læaàx\x000fqÝ;P¨Åßm\x001dNvÀÇ¨\x0000ùJeMêNáeCIh*à"ÜO¿ØmMüÛæ<Á[!N$\x0003Þ',bD¢ oº"$fs\x0015=º\x0000\x0000ÙÓ;w\x0015\x0018\x0008éi$#o\x001f£Mù;Ós<
\x001fáA¿tÛ»æ<\x0007\x0011îû¦ï¬öy=þ³Xä\x0000ßt\x000f'$Ü\x0000Â"S¹\x0012íók;XÌ{\x0007SM$(tÝVFrÎ¥:²«ö¨¢M'\x00070DÓ9w1\x0000PÂ>Ñ1î0ýqÖÏÀ\x001f\x0001<<Â°øÒ\x0015ÞÔ»y¯û\x0015æ)ì§o@
¾ìR!\x001eîþ&\x0001ð(ÔÖ&$4±á¥Å\x0015öwG\x000f[­\x0005&9­\x0003ºnx\ù8ÜóøDÖ]6ÀÙ'.×ê\x00086óÞ®R~æíQIG
\x0007OxHQ\x000f­®îÇ0\x0010_óEµñO;lE\x001c¹Ò¬\x0018ëÐLdHs µY
¶	
\x0016<ì/~\x0007Îmä¹§\x000e#\x0012eÅ"ð\x0018Ã$(»NG\x0011õ¦%Sa\x001d\x0016:l\x0001@\x001fª=tÉÊï\x0000©©,Z]±\x0005\x0005Ô\x000b%µ^ô·\x000bhnéO\x0014Ç-2<B\x0007\x0015\x000f'.\x0003·ÉJ\x0015ßçübÄÉ+R\x001a·0\x0014ØJ\x0005\x00057Ü2-F &\x001ec¨\x001b@ù5§²·5½RtU<~µ¤î^õºômÿ\x0000µívä´*\x0017=¾^#´sú\x001c)VåÎVíüem\x000bkbRîwjG£\x0016ïË÷@«ütaÅaéÜ¡zõ×|¾ÊÇ¼\x0014\x0015²æxy\x000f"/ØiÓë\x000eãÆ¸\x0014¤ÍFt¸>È9^Ä\x001eÏ \x0003;vle_xÖt¡>´¥Mû`ÒE\x0018tD\x0003p8NÇy¤\x0002*!ÓÌ(\x0007P\x0001ÛLûW%\x0011ú /\x0000Gx>åIÞ®m¼­¶§dGRîV\x0014\x0007rÝ#ç<¼ôý¤ùt_1xÍë5ÈS¢ê=É\x001e11N\x001dÅò\Æ)Ì!â\x0002;é¶¦%Eá5%6<oÙR\äyðÂ¢\x0016ü`7W¦Üª³*`)Ó\x0003lbOØ;w\x0001zûÂ\x0002\x001bö°tjJûÈø\x0014£\x0011æ\x0012\x001dCÊ{|õ`e\x0004ÁÔà;|åñùCm\x0014ã\x0018\x001fk\x0000.ÕpTL¨û\x0004Ý¥
ÄÝv\x0000è\x001e:+r°K\x0011!)ö\x0002øøì`ùõÇmn6\x0008çX§
A/h\x0000î;o¸Ê>ÍjÈqMØ¦£-J¾£{yk\x0010º	\x0006(\x0018@
¹ºõ\x001d¼w\x0001Ö¹yÂoÙJ,<èu)
6Ô>}'H¡îû~Qù>®ºvS±Ê\x0017clP\x001d¶\x000f
Ç\ZõØ-I\x0016\x0007[(Pí\x0011\x0002õù¾®VFÜRbxU°û@~¾Ü(zk9â\x0008óTíz;ºqô>df*ZsGó¾ÁÉ#æoã¸$P/Ô×\x0018g\oÛC­0\x0010m\x000få|sº{<EÄ\x001a×éWmz_\x001e/²÷J¤¹Åôâç¶\x000f´Ë:Sè\x001d5ºª\x001a£E\x0014h¢\x0014T\x0010zÛ\x0018ÁZÄáÜ`(·¸n^áíêx0\x0011\x0012ï¶ûtßUýjQöþèsd\x000fÖ3fÝFìmå\x001d©? ¢ß±¿V\x0016\x000bõl`¸çc(Ü_Éæå\í&¦ç(	ú|Þ\x0003¯l\x0014xòtHrÀ^¯m·ì7ÕØwú.ºÜî\x001eYí¬+
Bù:t\x0011/´zèæk\x001aÕ{{ÕD@OÐ@v(À >ÐüÍp+\x000bÚ´÷k*é~Ï\x0011ù5Í`	vÜÏÎ¬º\x0000\x0006:e\x001e»]ü\x0004;}¿SI¯O[oÍ#[×O\x0002be%¦\x0013â ñ$ò\x001fB1ò\x0012²\x0008ÆÃÆÈÉÊ(@\±qÍLáÂí
rEÎ@î1PLÆ\x00001ÇËM2ê\x0014¥\x0011Öy3cÖò%¨ì ]KqA(H·Ó\x0002A>åuù#/Ì±ËÍ*°ÂK®<Tl\x0012
Ô|"Ã¶ÓyO\x0018×äÖ¢¤mY!C¬vÓØ÷\x0010D¿³­9MUÊ¬m»,¿pÃ\x0017×f\x0019\x001d\x0003\x0015fÅ|ådÄ=ý·
Výíi²vÌã¶»\x00071O\x0002[\x0005,$ùu\x001e`s¸5èWK?Uÿ\x0000[7ü\x0016w.þ\x001ffíÑâ&<âd\nÁEIa\x0017Z\x0001I¸
A$\\x0000Ù$ÿ\x0000Fv	¯1Ä\x0000\x001d!P\x001beþmãê½\x0001\x001d»\x0013]£ÁN1(Ý\x0000®¡Ê>ÝAo{gï5àâa%W#á\x000fÙUêÜíÿ\x0000Õ?Ñc\x0016Ù×¹å<R\x00081¡8 Aò\x0012ñó\x0011qÛYH¼ý! \x001b~°mç\x0001Ck\x001f\x0002r»\x0012äçf"e\x0013¸TÕz\x0015É\x0017äíØ\x000bå(SD\x0003o\x001d`Æ{mo8¹\x0011ò¶\x0012\x0013Ø8â_¶ÆúmnWçM½Íú¤ú`ðS{_yf ÏzÈcåH/¨\x0017/äi\x0007J}'iåNm/1â{äã:TE²j$*ÇâõX}îd(¢4Ù¹¯6vrC&`+f\x0012\x0005På(@Ý7°Û#Ú£¥û¾Jq¹W$bò/\x0012\x0014.Äwí`\x000f+¦}aýZ=é\x001düî!1·\x001eÔ\x001düz¥\x000091u-<{\x0014(çN×cÖ®ß²zÙÃ\x0017Ñë£æ®J«w-Ü!úbK²\;s\x0010\x000c\x0003ÝÔ§\x0001Ü\x0007mX¸2Q5Ëmaq
¼5 ¬vjô×Îºó\x0019wñ\x0010EQJu%/ê\x001dJ6óÉ ð\x0013\x0004Ó?wyN\x0000o\x001f\x001eð\x001e¡òõÒ¢#R\x001cÊPùæÙþè¬\x000fJiÇJ{;-ý£J´_¨;\x0000í±¿E¶Ûý}uv\x001b%=Ä\x0000ªè
!W\x0007¹Yd\x001f\x0017³ÃóÂ>Ñö\x0007Ë­Rò Ö_]\x001fºú\x001fµY´$71\x0000
a\x000e\x0001ÓÃåß¦ºx-\x000f¥åç ÍOî«>ÅáL*w\x0010G`.Á¸ûwù\x00045ÊZdý(®¦[k\x001dò
(P8\x00192\x001c¦\x0002õ\x0000î\x0000\x0010ê>Á7w»\x0006\x0019R´X\x0000x^ºxñùÜVQ\x0005V1öî1´G´\x000b¸ì\x001buðßZRã%ü\x0006U­UÙ+\x000eªÍöÕúJw\x0014L&\x0001\x0000\x0011\x0001\x001dÃo\x000f¬\x001d\x0007Y\x001c#\x0004~\x001eJáÄ¶ÒþÈþþçBÃËqô(\x0017\x0008\x0017nåÐ.ä\x0013L©\x0000{7í\x0013lc}Îý7ðß\\x0006@ïCñÄx(ÛO÷áb+Uç]
\x001a\x001eO]$ù®yyiðãÄúPYB+ÏPQmd®¢ïp!JéÀ\x0015düM²f0"\x0003°Ú:ÃYÌ2Ð ó<U¤ó·3Ã¶Õ-ôc0ÖÙß-í©¨rR\x00128\x0000O\x000eu$&M\x0013$²\x000eÛ´t¶Æ½`ñ"9rS\x0011Ä[æ\x0001Ûºbý#	VDå\x0012¨\x0006ê\x0003ªºã*U¤!K\x000f6®\x0004,XØ\x001e\x0016ãä=|\x001b8HË8ÉO¸\x0014÷i\x0017\x0007W\x001evµ¸×\x0017\x001e®¼
áæfÈ¸r9h|\x0005Ë>©1Q3ÈÌ7yb¨Ã86ýµ\x0019PÏbRØ\x000c¨\x0001S.­ÏI÷ÄÜæ\x0019Xl¥Éì\x001bpâØäxrWbãVî¡lÄmÜá\x0012ÊÆ={\x001bð
<mèòyê6"\x000c\x001dî`\x0001\x001eßnÛMú}PÔ­ã;~&°Z@nöãz]Åö\x000fA\x0010\x001dÇa
Ãå\x001e/³Gç£¼
4¥E"{ÞïAÛ®ã×Çç×\x001e3¿º5¼ÊÖ«vUÐ	\x0000\x001b<\x0000zíí×dºáP\x0004ó5²="°oYLqM0!\x0007ßê\x001d7\x000eí×[öäiRÂ·ãÒG\x0016ÂdPÌ\x0012ÊÐíHZ\x001aÖ¸\x0005pÙ©$fiq\x0007
ô{Q t¹fäp)\x0013¸þZ\x0006?oi\x000c!\x0019õ+'\x0017Ó?'zÔU¤\èQ\x0000Þ\x0016¸÷yÓÛcDþ].K)ºEÀ&Âàp®Ær\x001f8¸ÕGW%E0Ép9#!b¼WiÍ6<I¤£î7÷tZz`\x0013c"ãÞ|2Î\x0019@\x0013¶\x0015Áp(	»6\x0001Úcv&~a©\x000c.4\x0019RÚ\x001ct\x00146\x001cY ^ãW\x0013À\x001bi* _MOdá\x000fòVãI*Ð\x0008½ãËÈ8¬£êWò9*_\x0016â k\x0012ù»ò|ºáÖW³4RÆµÊÕR\x0007Y\x0017\x0018KÓ\x0014l1,UJò*\x0014©\x0019e\x000eg#Ü!Ú^¯x?%nbU\x000e\x000e]1f¶\x000eÚV@C 	J®{ò>cH3óÌ<Ö¸@\x0019nÄSÌ\x001eÕé\x0004©#Î\x0000>p|ö®\ó>\x0015õ\x000eä¦,aÎ,Ö¤Öx¨©OehZÂ@¥ÏÝhöAÃ&lEZ|­\x001eäÕQmÙÊíîX»¸-'sôÃjåWµ°AX÷®\x0012\x0008BÂ\x001cR\x000f\x0007\x00144­D\x0010H\x0004_G\x0019Tæ²\x0004ç\x0010\x0017\x000eÂë¸*áÏP¹P\x0000ð\x0004=ñQä(S)ÉØba!ÈmÊr\x0008w\x0001;ì   ;ü©6$}\x0017
¯ÄcWTÃøÐÆ£ s\x001dzÆ¾)E£³vûÅl°üTÌb°Á¥¬k-+"ÂT\x0001Iy\x0000ùÁP\x0004{£`!´Ãu@ñ
¨ûÀóëô+ôu]e¸a[ó:¾]ÁIÞmû@Õª\x0002û\x0000\x000c¡ÄÃóëççÙ¹\x0008e­õ\x0019¡¦3]JÜ	BG$$IM \x0015é\x0017´a×ÚÏ«®ll*{T£\x001cÜ)>Z\x001dY:®ôh¢\x0014W\x001fþ®¿Ã\x0001Ç\x001fòC\x000e~­­\x001a¼ý ý\x001aw\x000fúwñ
U\x0004ë7éC·ÿ\x0000Õ¿\x0019z¦\x001fÿ\x0000}\x0007ú»ì¦Õ\x0014gí(úô*ÿ\x0000½öåýQú5 ôÒ\x0010þ·öY+\x001d:ûúÿ\x0000ltQUh¢\x0014T	úsï3ðUÑÍ¼4>'È<~\x0005°O)sìæ\x0011°AÞánó\x00196â­r#ÉhèwdEë'Ñ# TÄªy¥\x0015 þ¼°æo\x001fÔÌN¸üõÐ_íÕ\x0004q«/ËæÜpfÕ³Ç¦T¹ÍÑqãäì¤;³\x0003æ#\x001fÚÔ@*§pìQ[Ë¢4QF+àø}pûa¢å\x0013Óøs¹·ýÙÈoÛ"¹«ÇÕßÑ§nz ü]Ê¡]$ý*sÿ\x0000QøÓ5Õæ¨å_Z4QVÿ\x0000æ/¹\x001cÿ\x0000a>´ò\x001fæ\x000fÿ\x0000_÷¦³Åÿ\x00009oüb~¨aâ\x0002\x001cÍW\x0010¸6\x0005\x001bãÏ×\x0007!D¯hYc,Y¯Ä\x001a\x0019#±øs:ÜQëßØ!¿³^e{;5íF­áé;E;?åi\x0004ÿ\x0000Yõ¿\x0017¿«ÂmHÓðtq¾vZ¯ç]\è\x00127Ò\x0013Ô÷*·GÉpµ\x0018f8cÃð\x0013áéñN½Z~\x0017eïjÜ\x001a-Ò°Î\x001bÏpËÈÃ \x0015òcTlIÊwã@\\x001eHÓ)\x0001ú?p(\x0013ßó>m\Î7í\x000e¤ÖUíµb}_ì\x0003\x001bãëñµ§í2\x0013ÜÑ«øéåÆõo¨®tAx¸ã¥ÍçÓõã\x0019åß£º\x001bð:õó¿
>zÙÍNµ\x0010T^ú¶tâû\x0011ñÛ"Ãt\x000f\x001fýÚ<5Z}£ÿ\x0000Îú{ÿ\x0000¸\x000f*§Þ\x001b5½þïs¿\x0017\x0015É»WeòP/§R&\x001bì\x001e&\x0000Û¦ÿ\x0000>½ÐÆkÜþÚ®ÏíxÝ\x0006[JÉ\x0017âÒ?½\x0014¡AÉN	\x0013ËP¢÷L\x0000\x0000!Ô6(ïÔzëSm\x0008â,yV}»
vÆ\x0002íÛ¶ÁÝ¸\x0006Þ\x001bí·××\x0015®ò¼Eê\x0014§fñ\x0005CáLØ{»\x0003·b]fÂ°¥Ä ëp]"
\x001d6Hé\x0014¨%Óîº\x0000\x0000³näV_]kÙVôRÁÖ$ØÊ$r"\x0005\x0001\x0010\x001f\x000e½CZNF[&âÕª§YR\x0002Þõf{\x001fÜ?yOî|D¡òO\x001d
ÂuFÀ§ß­9o°\x0002 lO³
dª]ÅM\x0000\x000eã\x0007P\x0000\x001dÃìë)Ç>E»¾ý&¯`{Ô iôb£ïèö	U)\x0000ÂQ/nÄ\x0010\x001dÊ=Â\x001b\x0008u\x000ffµ\x001cO©»\x0019%kb:Þ·\x001d	çsæ¤·ÚÙLÄ!À½v(U»ë_u	@í:áPéÉW<å}R^¥ »ê^\x0007xhY4£ÖY6\x0016I	B\x0011®K(µM`m$tb@\x001b£¸}éT°¼ÉëG´\x000eI¯hf7\x001e	ç\x0006/
¿\x0000\x001eMèY\x0005wìîóçÄpò_ë\x0003Øwõgí\êùÎí®£â\x001aOP÷Ì5ÌõiñZPoT42¢5¤\x0011ªÄ\x0003Ã
yàêÌnÏ-1Ç¯LÅ¶¯»ÌúÁ\x001cõ\x0014±\x00086Àn÷«\x001d%ÊC\x0018»\x0014)ÃÓ^¤í<«}AÀÁÜxA­¹I@uV:AU¯ËÏ_#}hÚOtKtä:y¿\x001fð7V\x0016kÑÖÈ#ÆðQð®Æê\x0016¹í½i½ë\x0016é£:¢ \x0014È1\x0013&I3\x0015'w"\x0000%\x0012\x0016CßN9\x0013\x0014wÙ2à!÷[jeÇì¶â\x001f³è6=5ê©n
ý'&Jq¥mÆãÁ\\x00149pàHäxsíåkÖ¶*áì¿\x0019 ñÓçTÊÛ÷
¾[Í0îuÀî\x000e¡Ì©ÍÔzÖÓ\x0018á\x001d>\x0014t£ÃýeKyokt¨¨)\x0004ùn|½ª¾à\x0000ùG§Ì\x0003ìÜC o­¿\x0001kOâyÚõ\x001bñ=ßèp \x000cQ\x000fx6\x000f=¿T<\x0007XÕ\x000bIû\x0012«¹uä6²\x0013ä¹±÷9U&Ûqíè\x001eÏø}]n6\x0014\x0004¨Ý@V2I7<ê\x0018
\x001bûÃæÛY@Ø`pOj>SY\x001bkÄÕÄ
"ý¼|ÂÞÿ\x0000¨\x0010!Ìa\x0015;HP0QMAE2&@::Ý \x000c@0{¢ a\x000e¾\x001aÂêÖºB]<Ð~\x0012~«°[·ÍÆ¶Ó
æÚJÞIN£À\x001e
>K\x0003kßãÏ±µÜÆµ\x0008:´#k¶U¤UeJÊÜ<cv¯2Lï\x001f$W¢V$übj­÷Ügd¼ %Ý"¸\x001fwUo­\x001eÓ{?¥ì¯\x001cÓ­?#»à´vê7ì<íû\x0015&`ö*æ$f÷S©BMOuõ\x0001ð
\x0010@\x0017Pí<G\x000b|+¥\x0010ûX4ÃqQØr¼WÉ½nú¶¢Rù6eD\x0017"è¯pÉó(9v±Lªicã\x0003î\x0001! l>\õ\x0003ÚWªGÉks ¸Ø¦.ÐÊÊu$ñû \x001c.9\x000f~ô÷ºÞÅ%Qöª\x0011\x001687
SiSãn*Uô¨ü.\x0007îöW×\x0019\x000eøéÃÌ¿^²ÄøÊ*÷%â[dZÌèâo0OQå$\x001ccÛ\x0018s	ÔQ4X¹6â\x0000q\x001d¶ååçe\x000eeÖ·¿ÃÖ¢«þèz9öÓúîM\x0001À©Iåöf\x0017¥À\x0005­dê\x0003Qâ
»
½d«ÑyN\x0001G\x0016î:e\\x001aTÖ;êä+\x0011½3kÜcF]°uÅi%l1)uó>,«a!à$(û¸ñYýÕ·r£)¶2ÛZ\x0014\x000e¥pô~uc}¼ö\x001f!òm&ì¼«ºR	ï\x0011ðn,\x0005ÅÍø*Ü£®ê,LVS\x0013Î\x001ds3qsÅq.Ö¥,ýC\x0018|Ë\x001bxág\x0010än¹;\x001a	b\x0000\x0004\x0001·v®GL½·÷\x0006S8 \x0004ÏÅ%CSMä%&ß
ü4cáç¦»ø½­Ibdw1Ù¤¨ê}¾ 'µ§	µHÔHì\x001cþÛq¯\x001cK\x0002î¡¬øöAs%\x0017©\x0012\x001fOÐ%:j+?I2;­Én EXI¢ÕâGÜ½\x0000\x0013kÓõbu'\x0018ÞCkIiMi\x001aÙp»Äq²{@æ|ÔÆÜ7#·\x0000y¦l2®äRM¤\x0005[½<I\x0016\x001dµoKÈWLpñ\x0017tù±!{\x0014q\x000c±~vC\x0000\x0015Ä[Ã¸R\x001br*@!¦Ü¢:yä¶þ'(\x0003\x0000ëGáx|t!¿ìR^/?À¼\x001eãª@7\x00177A<xØr\x0017·\x0003b®wòïF4ämk \x0019¼%\x0006U;s+tQt²¦Y#\x0000±RJ\x001cEÔL o\À\x001bÅ\x0011
E[gÈÃ^d]+Æ«a7*	ò\x0011ÃX=­Ô¸\x0019U3\x0012pSS\x0000Z	oW/?n\x000e
:J¼Â\x0001;À¡Ü\x0001æ{Ä\x00107B\x000c^»D4Åñ¬\x0001)X¹µú56EÈ¢;á:ÉEÂÑÞO¿è¬r¦\x0005
Þ]À\x0007`ëÓm¾Î¶GØqDXûô¸Ìª/­rG·Þ¬YÌ\x0005ÜÃà\x0003öÇmc¥T¾$(_«%&å\x001d=\x0004<\x0003æùõæÔ»ZÔ£\x0005aAJ\x001c«\x000eáÒ}Ê\x0017cî !à\x001bn%þxGX}YdZâ\x001bP\x000f$Ý
Â¯÷!×ÛüÑêË·1KÞ²ß­´zªü¢YoÏV\x0003â?T~Þ¸õUùEefCeÀ8Õ²ãÔ¿PuÙ1W¨q\x001cët¼vò©Íôvÿ\x0000f_ç©ßØ$õâî5\x0005\x001eÛ½jAæ2XÏ
ôÏ&B½úVG/PÈ|lÔÚj¨j\x0014Q¢4QP3ë~pN© c\x0001[[Ä@¹ïaÐ:j¾«ÿ\x0000Ê\x0005ÐïñÙÏµRvSô3êÅ¿äøÏ\x001aç%\x0017\x0005\x0013{\x0015\x0000\x001f \x001bn\x0003ã×^Ù+ô×\x0003»k0Ýr{ÿ\x0000uùßgÕùõÖ»\x0003jÉ¤ý"\x0001\x0008-Èq\x0001\x0000ï1CqÜwÜGYRÊUÁâooß¥\x000b9\x0014
°¢`÷@»`Û]ü\x0005ù«¸Ó\x000b
t\r÷MghTö2	S\x000eæ(|Þ\x001dG\x\x000bòÞuÈí7â¨¤§ÍÎq\x000c\x000bÇ\x000eÃACAF<´ZæÝ&Þ·K®F%æ>µXß\x0014NVÑÆè\x0005\x00002«8ìE2\x001cê\x0014¢ÞÜ¹¼FÎÇHÜùW[b\x0013
jY\x0000\x0012\x0007$ß*tì
º:»¼!ô·`²©ºk \x0004·Å(lñ.8¿ \¨ÂÆ´û>rB\x000eF¤H§KU°5É\x0016òTlS\x001d îÈ\x000eV0ìQ³LlmTüaÄ|gzá\x001fý	\x0000Èé¿Kï½§PÝäò©ÝzÎõ\x0013,©)qÑÐâÃLê(.Âë\x0002ýÞÑÚxv\x0012+èËÙWØdtN\x00022\x0010ãDÉu
*Jeæ\x001c\x0001lÂq°5µ\x0004¹o\x0011ðOÙo`¤ò\x0006£Æç.×¦m \x001eÌµ¨S¢~õ]Ä\x0018í\x0010£cx$\x00051(5g\`²\x000e'±\x0013\x000f!$»§+©Ü'0ú¤¼ê\x0015¬©LÇW\x000f\x000bFÓ~\x0003¾ñ·i÷ëÑl\x0016ÔÛÙ\x001f(DZ'äþ×.8X*-"\x0010\x0000HáÊÏ¢\x0018y~aãY¨q\x0010)Þ\x001d\x001dGq\x0011(\x001cé}ð\x0007å&åùõ\x0014y\x001e!\x000e¸ÚY\x001cBõ\x0010æ\x001d´ù\x0013²m©\x000cC\x0007Æp÷PØÒ¢\x000fÓvY>scYÊ\x000en÷o¬Ò±õhlÛd»h*v!ªDvSy\x001fÛ\x0005 \x0019\x0000\x0002p^Ðn\x000c¡Ì\x0004.ÚbVMïQH¼Tªäxö,q÷?Ý¦nõÜx­··§î-Ôå£B\x0000<\x0017gAîz¯\x001f²-JàR\x000fíÖêelTÃ5n+ÁCL«s/\ò"Õt°cû
ávbÑî$ãäV¡ÖñÐ[\x001cR¾LW\x001eä
\x00056îFT(qÄH	\x000cé¶¾\x001a|èY²oÛqïUéöÓÜ[Ç(ïX·\x0007­àâÎgF6\x001b(H_8&LÆ86î¾j
½Ò£[kù5
~=\x000bÅÒbÓÇè¹\x0008º\x001cwU9<ÙÄ\x001cÊI#_§g\x0007LÄËå~4Íª$N*âØ«/\x0016sN¢fLèÀtW¯§YXØlº·^!:u\x00166âO \x0007Óp\x0002Æçyùíçú½v×Z±ogvtXø¾¿4ÊaQ»°²¬ jYh>Í`u¶»\x0014(]$éÞçd Þ\x001e2U¶ÏÙü ,´qÊú%ÊNR+²±oQ::fr9jà2K7P¦ û\x0007ªx¬¬\x000cþ8eñ/%øjH7\x0007\x0011Ûè¯½Á´ó»_;/og#»\x000b!\x0001Õ4ú$\x00026´pV {	\x001dÓÈÕêO\x0016\x0003_\x0002×ê\x0001Ð7Ò£I\x0001°ú­á^Zk\x0005ºR\x0010¡ªü\x000f`\x001có+|µNPå.Æ\x0013î#Ð\x0003oÍ\x001ddñ\x0018ò\x001aïw;M(Ù<T¥\x0000\x0011\x000f¾\x0007ptßmö\x001f<4¶\x0016VO\x000b\x0013Xî¿ô `õ^óÿ\x0000uÚ\x0001±zoÔzïõuÀâ\x0010,	ôÚ±.AiiBï\x001bpåîÒ\x0017
\x0007\x00071@@J\x0002>ÀÜÁ×§]\x0007CÐßo»mDù+iHt&ü	ó\x0013ÃÓW\x0013¶å*´þó~µÂÑè1¬¥À«í¸\x0010\x0013£\x000b\x0001\x001eØ5j\x0002nÝ\x0004Î²ï\x001b°Q~ûßû[§øÓ'-$\x000cc|5ß°XöVòÒþ6?«ã\ÌÌq´c¸
7ï¨\x0002JP\x0000*R¸\x001e ZµzýËù¨d[ËUñÕ?\x0019ÖåüMÏ\x0017ìló0ý\x0002ÍBñÿ\x0000\x001eüeÇèNB¦î\x0004Åî0y\x001duO÷\x0017´Öòðs\x0014Èc\x001aS`§<Ä\x000f!óööVYy÷áøh
eä\x0002Ó²R\x0016nBi\x0016UïÞÕktÁ:çöCUS
\dÐ\x0017!L<â]m(r:y\x0011\x00127Ie%\x001d6Ø>íd'\x0000ÜCqÔ9ëOQò!ÆÎb[(U®\x001bH)·;\x0005yi\x000cu\x001edLaÉÑBÜVÝãÄY:Ç\x0011pn\x0007m(#}DòÙ\x000cÁnDSf#aÔp´DVcâËxªëwë.\x000b\x0010ÊÙ±Ök\x001cä/ßDSOm±DuÆ?©{·\x001eÐyÂÔ[_n#æ<<¬Óº¡2DvÄ¶]È¶éR\x0014¸éa"Ü®¤^Ü¹[ÑjL9êÄØ£\x0014åF8¬S],Í\ãír\x001abécR»ÉUê\x001eí\x0008
KÞí5\x0013 =Î ·êlG¦-ÌSÓðÅ'\x0013nÏ jÓìOh¨RRÌ-ç\x001d\x000fF\x0001(õýô´y]Û£Þ°î\x0002ypçdo¯5fàF$¸@Ø+v©þDãé,{o¯Ë4q_°\x0003÷ÐãÎ±\x001d1U±\x0017Ø\x0001DÏ÷E
kuÐÄÍÎU\x0018-ITE8p\x0017àO\x001eCìÔÔ	°2;M¬¦\x001eCsq¯HmM¸ÉÔ7\x0004ùEøÊå>\x0018âpMMÀä\x0011ûÙË¿b·¼tÌ?vA8Ãà:µòP#(%jI\x0007´r\x001eá¾\x0010,¤¨\x001apã0\x0007Óbìa\x0000ê#¿°\x0003åë¬\-Ã¥rBWe-\x001a¨D\x0008pØ?<\x001bxý}\x0002¶£~çìÕÇaÿ\x0000B:î=5¶5\x000fMZ»!ì\x001e\x0006\x0001úÝt¦9
T¤Ã·\x000eQ\x000eö§pÕR*C\x000bÆÊ*¦â\x0018¥Y²(äX9\x001d \x0018§\x0010>áÓ]S\x001e\x0014¹	bpIh\x001aí¤\x001f)­¸aKÎ\x0015\x0005ÚÂÔùpï14ã+0~[zÝ\x0006ôØ» @äÆÂb«ôÎ.È¨ßYË\x0001ízÉ¼T¹ÝùFÜ¢tCäÓc{í[ke1ÉK!ö#ø8\x001ciAÄ\x0010m{Ý=kw\x0013L\x001c¢%:\ZK¡$_\x0014t¬\x001f1I5*Ò	Íñj³+ÕÖªÎÝ}\x00199Ë=âx¤Ý%o\x0002äáÅKUz0é\x001cAôJ\x000c¬Bo0\x0004è\x0010©\x001dB\x0002\x0011¢f\x001c()jÇnÌaaí\KyHà<Ä\x001béása{Sø6ËS¥Fe6\x0018gôdñ*Tg\x0000+I·\x0003ÈØrã~Þ\x000c'\x001e\x0014ñÓYSØ#êfjíÎÚâ~\x0013ãüoywfåóL#öäÄù¦\x001d\x0016Nëñ¸î)&©ÈäÛþ\x00193\x0010w&Ê8rÑ÷fáÄBÙÙCPåCÏ.6\x0014
{í,µ­a6	°ÒIÔk®<âÐ$äq¯8ú$%E\x000c\x0004iÖ\x0005%bÚ@\x0017ãÄÞÜ*\x000bÜÇIÃ\x0019xi¨ùäÁWðs\x000c\x001eBËÇ\x00150P@\x0013$gé "§aDH\x0005í)zêÉ@ù1ÇÜ}µ´àIH
Õm#½Ä\sóÔTVüWW\x0012CiCW·\x001d`\x000f-û=ÚÅH\x0001ÉéM°\x0018\x001a¸\x0003\x0000\x001cª\x0014\x0007É0Ê\x0010LCÃì\x001f\x001ePÃºsM0u6ú/çï\x000eU«ZÆ=ï/¾ßíM~\x001f¸Æ¼\x001f%ÿ\x0000­j³Ù¯Ïg.{÷ÿ\x0000\x00137\x000fÆS^ ûCñ´ÿ\x0000°X?\x001a]Y
¯th¢\x0014W\x001fþ®¿Ã\x0001Ç\x001fòC\x000e~­­\x001a¼ý ý\x001aw\x000fúwñ
U\x0004ë7éC·ÿ\x0000Õ¿\x0019z¦\x001fÿ\x0000}\x0007ú»ì¦Õ\x0014gí(úô*ÿ\x0000½öåýQú5 ôÒ\x0010þ·öY+\x001d:ûúÿ\x0000ltQUh¢\x0014T úç	º>]iYç»î0Æb\x000e7Jfü³XaÁJ(#"jè[B\x0002µ55lg@+Öü<¿ÐÕjs©%>õ\x0005LÕ\x0003L`(§Ò-*³\x001flíòndÈyfñÈ;}¯Ñ¹Û\x0008Çñ ã¬°ö³Miøó0é>1
;\x0018i\x0016ån³à#ÿ\x0000¤\x000eíu\x001c\x001cJQR¹¢4QF+àø}pûa¢å\x0013Óøs¹·ýÙÈoÛ"¹«ÇÕßÑ§nz ü]Ê¡]$ý*sÿ\x0000QøÓ5Õæ¨å_Z4Q^N\x000cB ±Ô ¨\x0012PÇ!KÜ'!Ha1\x0000¿\x0013\x00146ÛÛ¬O­
°·\x001c\x0005HJ	"×¸\x0003·müÝ¤©N%)6QP\x0000ù
ùÔ>Öùa²:Öü{Äz\x0006%Âð\x0015g¶\x0007rÙ\x0012b%ø¼@ïË?Ç\x0011\x0006víê­c\x0018ÅpR¨ *n;y³öÝ{ÅÜÈötÄmí¯Ç¸ë®9=æZ}JQqo¸Ì\x0014\x0003wTRT~Æøñ.\x0014(¦öeº'µö£pwO\2½ÁÛ	m¸-:¶t\x001d\x0008m\x000fNsà¥\x0001@\x0000\x000bd¦á\x0003­àuZãi¥Årg"e{ÅþÝjghh)µÐoV«F³²>9\x0010hM[¸YV`'P \x0001MØ\x0001°o©·ÙCnn|¶Ûg¬»×pds\x001b9
m²cÇm\x0012V\x0000i´Ù!GÃ\x0017(J\x0011Äé@¹¨ÃÚS5Ãî\x0007ºEµpìf\x000f	4+Æh)R$8¦\x0011róª%JH\x000bà	&âäÔêßU_¨Àõh\x000eî1Æ\x0013mûòL\x0011\x0000>Q4
?ªÓí\x001fþuÓßüMÀ|aU?t\x0014]\x001bØyz}ø¸®UÑ\x0012¦fèBm¸Å
{¡8+×^ÿ\x0000\x001a¯ïxó\x0006
¡3À}©\x001fÞ¸\x0006*b\x001f[ùºÔ²«oÔ¼Â²-Ú.	ô(í¸û4[ß¤ÉH-;£ÍÙÆ²Hn
\x0007]\x0000Á¿³®¹­\x0015ü\x0013ä¬\x0016:f\x0003\x0014ÝCå\x001dôq­~ç²)¸XâC\x0007p¡G`ñ\x000f\x0000ùõ×W\x001bR4jCÊBm`k6Ô\x0003\x001be\x0014ß·ôB>Ðùu±\x001cÝGe$df¬2-nt¢Qc\x0000\x0010Ê)¶æ\x001d÷Øw\x001fgÔÖà>O5#	W.~Ï52AB|Jn;\x0002¤ï\x0015I¿q@È\x0014 a\x0017^÷ÞÃm¼Íµ¡Ç=(NÂ^22
\x0016ÜðU¡HI\x0016¸&ö6í­¬Lø)q%0½\x001a<Ô:¥IOê\x0008Z\x0001åÝ¸\x001c=ê<ÏÇ¾8Ó¬\x0018EÇÍØg\¡j±1Zá0àSv©c\x001dEº|á'$l/ÅãõÖUºbQ2\x0014Â\x001a¥³½úV¥áö®]ì×É\x0019V\x001fvC\x0008\x000fëºx¤\x000b\x0003ssÌó75í\x001eÛýu>Øý·\x001eîÛîíTî½­\x0003[\x000cGðì¥º@Zô\x0002R	\x0000ò¸¹#\x0003\x0018Ü±ñ0ðÌ×Xñ\x00111ÆD5t«¡\x001d\x0018\x0007\Äd>YÚ¨¦\x0010!;»S
»vÛ^tÓ¦»w¢ûU==Úªö9¥]\x000buÐ££i\x0017P°áÛ_<ÞÒ¾Ñ{ãÚ£«9\x000e¸u2.*6ýÈ4ä|\x0018Å%hÔ\x000bÉF¥»+½cÄXvVL¥\x0012J\x0006?a
\x0005\x0002o¹z~{m¾ëçöéúMWboó|ß;¶®Óûúÿ\x0000lt
OöÄýOìô×5©F(þOæÆÔ\x0004
ñ\x001dàBûÆòÅ"
\x0000c\x0008ë¨Ý\x0003îÄ\x000b×æ×U6â\x001c·Å'÷'µ^à­¨jR^Ò¢¤²G{Hº­q`\x0000ãÏ¾*{ªÐÕú#H©K<¾=C)Ø¡XÜñN1ÊÏÜÄR\x0016;Èy\x0011Ù\x001a.ÑQT@õ¸Y\x0005\x001aµ\x0004»­ÛùeRûNûRFÚ­/aìu÷cÀúÄý¬ñ\x0016¿`\x0007ýÊ°=?Ù\x0010læg:GÊë°<\x001bP)\x001ack8\x000bqáÌ¬9F\x0013(²µ<³åô-\x000em\x0016WQkDúÿ\x0000LFO*ø\x000cº\x0004³0UÕiFdM1øvl"-Ò\x0000*i\x0010¡¶¼¦.V\/'Öüµ\x001dDÄ'Ý5ÓqGÜ«\x0006FQ¥-¶Ü\x0004\x0013`;\x0000½À\x0003²Ã|\x0005\x0002¶(À=¦/èD=W®µYBB\x0002ÐßrþÚ#jSzÏ\x0014ö\x001f(\x001f5¾n?G}ºm¿³p)ëÝ\x00045ÏYV |»9ûíù\x001aøØª°tÚB=Ë¶ï(UX½bíÛgÎ\x0000þa\ÇÈ7Y'­T!¶\x0010\x0012(\x001f'Mp4pá¤Fü}ßw²±ÇÈ-!ä:¨®%_
\x0002Å\Á'¹\x001b_\x001b4ö§«y \x0010aÚº\x0019R"£V9ÊªÕ$²\x0004j$\x000f½
æ\x00015Ê¬\x0019l_5Çj\x00135\x0001\x0012*°\x0014Ûis\x001câD\\x000bq\x0017î©«ø=·ÒÞäb1ó\x0010s.¥;\x0005¶ô¢C)JP7J·$é	\x0006ã\x0007{Ç(ñâa\x001b
:ÐÕÝfÚÜí ®µC%pÄÙr\x0015=Åx¹¸M\x000eõQ\x0002\x001eDL4BU¸ùME_\x001bÝ;W$ÆKo¼ã\x001e\x0012®ß£ky\x001d·\x000e=¾^ß6Õòû=Kf3¯\x0014áïý¥n\x0012\x0001*Òl-Ë
	çráCÈb¬'lÏè\x0019](\x0004g\x0005(õë\x0015w>Âhú½âï¥q4á³vÒë/\x000cE\x0004\x0013+\x0013í\x0000ô/£Ü1\x0012ôm±ÔËZl!\x001f\x0000òâá\x0003ÈxÞÞSMÙÛ{nîO²cIÆeVó@Û$^ä \_!)! ÞV\x001b\x0005jaýjË\x0010î&Á\x0016t\x0013\x0002ù¨éí]"»C\x001d«çHÈ=j¢­t\x0014Ô1v\x001dz;Ï`·F9¼¬'\x001a¦\x0016(R\x000f+[\x001f~¢¼\x0013!·åª&M%©	åb\x0008°\x001cH7!@bü.x^·\x001f¹¬ÓYc+Ã ;ò¦di\x0015?¤¼¤Q¯Ê.~áøã¢
Õ\x001f\x0011/`õ\x001e¬-Ó·¢¥>³\x0019 #UNÝ-ê\x0012ã°³ï¡V)Qæl\x0002nMþÄqÜCD &2\x0001¹\x0005òýáê){\x0008É\x000fº?(þÝD\x0013&+Å1û\x0001µXÇ12\x001bBVø\x000bãX³Å(nâGa\x0011ü÷_\x001dþMo Râ\x0006\x0001ä\x0015h´7Üÿ\x0000=ùðù¾RësáJøï¯M&ÝEª¯±M¹DÛ\x0008\x0007À»k4¦5-Åb\x0014b±#·\x0008Ûøýru×o1¥\x001eÛ\x001aÄv¢%S¡G¦Ûtön\x001f.+\x001a© a\x000f\x001dÿ\x0000®++\x001fl\x0015fcöÜC¦»'á\x000fM(\x0012-S©èíýïÌ¿ÏS¿°IëÅ(_§\x000fZÿ\x0000±\x0013\x0015éÞCôTéWò~Cãf¦ÓSåC´h¢\x0014Q¢\x000f[T~"·î\x0002ùî\x0001Ü>\x0001±àÇ¯PñÕ}Wÿ\x0000\x000b¡¿ã³\x0014j¥YH\x000eû\x001dõY³Û\x001f\x0019ñ\î}\x001c%/¾¢f(\x0007P!v8ôö\x000fË¯m\x0014
Ï¦¼®\x0010Skð¯j7í\x0005\x0007}·ÜGÙõ\x0003ç×\x00164zù¿Ýª\x000e\x0000S\x0008\x0006á¶Þ>>\x0000>ß[}¬RSèðÞR<«"ÊDJ"#¶ÚîkBTg$µ¥¾c{&W®)[g*±$\x0018µ.î¸]R5lo\x001eåÎíb\x0010\x0013ñ8\x001bf¹H*!=¦<\x0019N]µ\x001eèæ<µ¬£xos}\x001aç\x0002`\x000by¾`Q6ó0yû\x0007iô¤\x0016\x001dhÈ¦/ã>%ÀÌD_E+ØÑÔ°
ï\x0000\x0000K·]BrûHõ%ÍqÆºy	Å6ã$$¼ÚV/n6Pæ	\x001cÇ\x0013p=µéD\x001e~¯Og¨=GÝ©T¾»oXáøñISÍFRnÛÛÖSÀ\x0002«Þ°Q°4FÏ-\x000eñívãpxâRËyÉ ­Âéjpçb$y)/=\x0008Èv\x0019\x0014­ZGÆ Ù¤cdÓE·ÞÈQÕÙ¾Î}4ÙØ¶ ¹\x00124ìªx\x001f\x0015\x001aÈ·"=$Æ¼ùê·´\x0007Pò\x000ezZNÝÚ\x0004\x000b\x001b
VkQøN<´ü'UôÜyñçYY\x001aæ\x001bµ"£k.,j'9\x0000ã^I«¶ý¥í\x0002CÎÀ)n%tQ\x001d·\x001eº{åzO±e´\x001bÊa1í¤\x000eéðJxùx\x001fPÖ\x000bÚ·¯\x001b>W¬á7nàÆ8£räiA*çÄép,Ú@\x001cyS\x0001}àk+!¾?\x0005¸ó¤%\x001c$8XßzÙGî\x0004E\x0008ZÇ!-Tr¨\x0007ºá\x0003(Ìû	÷Ø6Õ\êç²\x000eÜ\unm«'Õ²ûRW=ÍÛ^¦{,þ·.¨còQ¶¯_"§?¶ÀðÓ\x000f"Yì\¶¸¸ñ·2xR\x0002ôÕï\x0005é+ã\x0018\x0017å¦f­«\x001b2ô\x0007'RÃ8¾lªüw\x001fq\x0005Ù\x0000p¦ND¤\x000bÃ-«ULÉª_0uI²Ø
Ã±T|³\x000biâ¢xÞË\x0007Z´6\x0003ç\x000ef½Zé®ñÙ¾×Û¹Å\x001b+\x0019þ`\x001e*BÁ{ÅH\x0004ÉØ:Íì\x0012ÞÊ\x0002ÜO
\x0007"DjB³D+FâDÓfª$òû\x0011Ü¾YÊmÔ\x000f86\x000567y½£¾úi9\x001a\x001c§S%å\x001f\x0019}z¼PU\x0004!Ä:¥²T¾â\x0016l¤rK\x0003±²\x0005¸RÆ|°ã»+[Uy\x0008é%þ\x0011Ä\x0004íZe¹\x0016¬dJd¡|«\x0016;¸±2J¶²ÇùklTW\x0014 ä(ëª¤äã;àK\x001a\x0018&ÉWæµÿ\x0000l
oî^/ubW%Q ¥ai}&Ò#<¸ÊøI\x0017¶­<Óp{*hø½b¥"!±\x0004\x001bù	ª)òy/Sr*8[\x0012ÃH\x0015\x000cÆÛBë\x0018T¿à\x0019SHÁ1ÖQÜ0\x001c¥\x0000\x000f,Fäû'õ^N7<¾OyN¦Y»$ù\x000feÉòßÉÃçjùòýk^Éù,Þ\x001c{Bí6[wucV"gã²\x0000CñÏ\x0016ç>\x0011Ñb¥\x0014ü+xÖ×5xÝdb»¼ %1GÜ\x0012a\x0001
Ç¨\x0008x|Úô%Ä¯ÕÕÿ\x0000\x0011Ý>Êùóiå%n0xÑI\x0005\x000eyR>\x0008\x0007ÑÂ¯Hr¨\x001dÅðßoµò}]d¬Ô¡IuTÄ\x0003À¥\x0000Ü½>ä\x00005Áµu6¥#\x0005N\x0006LÝ\x0004Çñ\x0001\x000f«áì
cuàÓg÷GiÉu°\x0003FÞ"¹zjîÛz¬cj¥úô\x000fa#\x0019]®×+â\x000b\rmúhýÜkE`P:®¬së¾iÄ¾\{B(àæ\x0000ì\x0001ºÃÔÖºk¶Ì÷È\x000f8\x0010{u\x0011aèï[*SÃ¶b¬zâC¨ü\x0013ÉWú^\x001cxöÛ¢ó8r
Ü½ÍIë9ëïó¼*kDD6*38³Q*\x0017=\x0007\x0013Ãº3iìÎÉ@!§í\x000e\x0013sð·I¹ÕP9<©Ý\x001b;»2ç9.H$\x0012\x0015s¡\x0017åaÚ ;mÈ-©#5º\x001fä\x0010ìÄ(JÀða¤q²tà²x$©)\x001cJJkA¹Ae\x0008"á,É<jÎe¥f0Ö{²9]ûÜIv\x0012«+ZÈ³f*Ò²¸K!HdxU\x000e°ÄHªGiS\x0003qDyì3 ãëQS}O`áÈ>>»´7V+}`¿ \x001dBRêÝ*;¶6²\x0017«Q	\x0004\x001e)¸>t°v:\x001fÙç)W)\x001aåÚ²¹âìÑ\x000f\x0016\x0005jìû,ºGQ«ÆÎ\x001b¶pÜThéº:j\x0008î\x001aHr;x÷þN²ç\x0001èýÑùDû«nevÖYÌ>Q¤´ú\x0015À(\x001b¨\x000eN§¶Ë¸±ãÄò\x0003OwÅ¶E#\x001dªc&mÊ¢Î\x0013\x0008v¤t
¢ç\x0015\x0004vèCo­¨Ð\x001cèe{¤Æ[[ú«l)çmdó<Ï£·\x001c¼¼Ý@¡r.¹*\x001cc¹\x001aéÉNQ\x000fF}\x001f<ÍÀ«ÇÊE¼^&Ë\x0008ô	Ú³7¨ªÞ\x0002\x001e\x0003¥tôûx\x0015\x0019ÃJe¡Ä(\x000eïæí§\x000e:\x0006ò\x0010Ô\x0008óq6ðNøvãmj	Rn/ÀÃ;Ö\x0008¥-4;&!ºP/\x0018æ\x0005Ò:ÙÆZX åh\x0016tZªÞJq\x001e.ÄfÎZ»IÑe£¨eQV-UA¸
\x001d§MëÓÍï»:IºQ%\x00164Þi|PFµ§É`8Ë\x0003¶yÙ»Ã1¶q¨ÅdÌ¶¢-wq¤ý<¤>s\x001c	6á¤Vy5ì^pÂ}¦l5;d\x001a§\x001a¥ö$Q<u¢ªõR\x0010Ý$ \x000eX ¼s¢*ÙMÌNáõ\x000fmîì/P¶Ûy¾½Q4é\x001dÜ}ãV"\x000c¨ùljeE±¸\x0006âÜÎí¥Llal\x001bÁ·pøïól\x001awµ§ÂHAº4z+}<\x0012\x0001ì¥Ó\x0006Gò¾à¢\x0000\x0005ö|Ý|7ßY\x0005mF<UW¿\x0004a\x0001÷	°Mý¡·MÇ];ÃÓ[%\*Ð"
@0Ì\x0011í\x0010÷Ónû:éRÜ8Ú±\x0019«\x001cíorO¢@Å?¸;ÇÚ\x001fð\x0000ÖºÛfC¦\x001bêÒ\x0016\x0007Ï]1EÍ\x001d´ýT¸³Rãó\x0019£'»ÆØïéy¼_+0U£Yo9·1²øb"Zí¢(0\x00076Ò\x0013
Ä\x0010?Ot7gä÷¤¨\x0006ÅÁ·ã¨.bÒ0I\x0017R¬IR¬t \x000e67)\x001ciÐ¸©N\x0011ì\x0012\x0011Ý@±*Zø\\x000eÀ\x0010\x0008*$ðºEêHð~S¹±ôøäÖFpÝíS2Ð¯>|î2Hµ4sã\x001c~±÷\x0019ÇnJ\x000531\x000fQ7ª§ð
÷\x0011\x001dC»\x0015'\x0019Ìà1§K°¤'7\x0016¿zúl\x000e\x001c	J®\x0001·{Ð)ÏË!G\x001b¸¤¹f\x000b&JçÅÕ\x0010\x0010£û .\x0000æI\x0015\x001d\x000fùKÉþ\x000eÁZ¸k\x001aÕxíqÄÙ\x0002ùQÌY\x001eW¢ÝæìË(ÆÊ¡`emwæÒ\x000e"!×\x0012j-\x0012*IºMD^Ñîî1û?\x0003½åµ½3ü®\x001ec(q¨Ëq^\x000b*RG¡´c¯UÉ¹\x001cEé«+tn,\x0014vö\x0010Gf[\x000f\x0010µ¨
Jãqr{\x0000<æLI,¾¤T\ÃÇ\x001eS¾¾g¬}¯¹×Z\x00026'.ÄOâ(Ð²YqnBa\x001c7ªì\x0001TòLð\x000fðç\x0000LÂs*>àÛ¿,¤MÙ·¨[nDö£½\x00108TÝºRêP¢J\x0014Xªß\x0008^âôâÅî\x0015n¶^ÃeÐÂ³­Ç[¡Ä[Q\x0008±)&ÄG\x0001ä6ì¨eUßÆÂ\x000bàI\x0004Jò(^\x001b\x0014C¹ÓQr¡Ó\x0004Ã·e\x000e ÕÕÂÇ\x0008Ì°àÿ\x0000u¿ïEfø¹Î_\x001as·ÈWè]èãûkßå\x001aÿ\x0000©j¾|=¾\x0016þÿ\x0000ÄÍÃñ×«>Ðfòöòì\x000c\x0017ÅJ®¬WÚ4QF+ÿ\x0000W_áãù!?VÖ^~~;ý;øªuô¡Ûÿ\x0000êß½SGÿ\x0000¾ý]ÇöSj3ö}Hú\x0015Þûrþ¨ý\x001azGé\x0008[ûA¬B}È}¶:(ª´QTäHUS4Ó!¢0\x0010!\x0000Lsæ\x0010)HRâ#Ð\x0003E\x0015\x000eüÛô¦äW\x0018rO,²¼<6V´Íc¦ø£\x0011oÍiÙÅÄ\x0016Am!Ýå\x000cuß¹©äÝ'-I&ê²þÆØñ&Öí"Æ0ùz(­³à;ÕIjâÖDÌ\x0010W»¬ÙC*ÚïY\x001f"\s*S#_º"Xì,Û[
_èFñ\x0008Åª4¢ãX¶A\x0006é Tû+uôQF(ÑE|\x001f\x000f®\x001fl4Q\¢zp\x000ew6ÿ\x0000»9
ûdW5xú»ú4íÏD\x001f¹T+¤¥Nê2_\x001afº¼Õ\x001c«ëF(ÑEkvZâN\x0000Í';ë=NÅÚ Â¸Q­[ZLcùÍÄü;ÏÜqÜ\x0017\x0005;õ\x0001Ô'Ô/g~u7SÛ\x0010Â2ª)>µ\x001büH)%IQq«x*$\x0015.\x000bñµK;#®\x001dNéúD|\x0006Qã¿\x0018¯ÿ\x0000FPµ¬ZwPH°úM'Èi9ÇN9[¸ñ//\x0002Ã0ÏÝpÀÂ\x0015µ:gb2\x0014¹K(õÊ¬&Ú&¹]ªÇ/$L
©Ý»úFèÇE÷\x000fFæ¿¸¥äúsêÄE% »\x0015å=â(¥Ôð-
)\x0008\x001a}\x001c/J½Uê¾\x000fªPXÉIÁFÇïÿ\x0000XÕ*lu¯D¶z\x0012\x0016ÒÒàP\x0007UÔJE¯[i«\x000bPE÷«Y»8Á\x001e\x000eÜ\x0008mþM ,ã¿ÖÕiöÿ\x0000;éïþ&à>0ªú	Á\x001bØÿ\x0000îû9ñq\#(o-\x001d0îDöØã¸î\x0001¶½Ðo5ïñ«þø×q¥¡XÖÀía?ÞÈ£$r{;vþxÆñÜ?ãkNÂÜýÑù½Ú¹úTCÀÃ·Ìc\x0007òu¸Å´qòÖ¿\x0012äÚ²å\x0005C°\x0000Þ>\x0001ò\x0000ï¾ÿ\x0000SYt§È+Mõ,6xÌ ëÌÜ\x000e S\x0008\x0014»x´}¾Ý\x001aSä\x0014©ÞÂk8ÄÀ\x0002"aè\x001dzõÛÝ\x0001éòu×:SnU ç\x0017N®ÚÏ7÷Ç¸¾ð	D\x0000CÚ;è\x0000\x000eUæÒãe \x000bú)C\x001c\x0006Lå\x0003¹]Âqßm\x0001¿qÇØPê?&»R\x001atAt­Ð4vÔÈæ\x000cÞ\x0015AqJ¦¨ÝkQÀFbUaÝ\x0008\x0014\x0000\x0005\x001b r{§U\x0003v
"DÈ;OM»zSS¯I\x0004÷ùHmxø(²UÞ±°½Ç\x0013Äq±¸í·¹}*DEGI\x0019Qó\x000ef\x0016Ô2*(e×\x00185N©Î}Ìcû\x0008Ï¦6ú\x001a:Å¶X	²DGïç:ù-Ký1YwØ¯¨ÒI%KÜ8ëx4{}ß÷yÖE.ÍúÏÔ\x00047û:°¬§£Ä^oEPe\x0015Hp\x0010`{=\x001eOr¯À»ô\x0000ß[ÜM&nup@\x0010.Â\x001bxë°¬K7>jöòú\x0011üÍscXµ¤p½\x001eR¡\x001fÌþ^\x001a5£Ë^ÿ\x0000\x000e²1@÷
\x0002;J\x001d¥ßmÍ¸\x0014<}ºÒu^¬Â~\x001b®ðó_É[H\x000b¼Ab] \x000bóáÈ\x0003ÙÇ³\x001eÚÚ~\x0012qÉß)¹'ñ ²\x0017\x0015u\x0017R×ªÂÖ>\2\x000eä\x0013]BÅZyÙÐ`D@§\x0015Ä\x0007p(í\x0019õ§{·Òý£#+\x001dz²\x0012ð\x0010V:Ö8[üäÀMNÞÏý-Éu[©0ð1>M°ëîX\x0010$÷Áàr\x0010lI qµo_3½\x000eù\x0010¬ýÏ-á\x001cÇ>ºw55F·GGS/¥jEE¼maÊj\x0012(Þ\x00161³vlZÁ\x0010D 	mx¡¹ö¤N^e\x000e\x0015Êæµ\x0005(jâtr-Ú\x0007\x001f çW«Èû±®çödu6V\x0018°C©	\x001c\x0002\x0005ô®ä\x0002\x0001{`*\x000eâm¹C\x0007X,\x00149fðgd²°÷ì7+Î$+lq"Ìmi²\x0015&nÔ)P|×á\ö\x001d\x0005ü\x0004bô*f(\x0016\x001dAÖ
UÚ\x0001#··ìª{lKs\x000eó$Ml9\x0019ád\x0012x¨%+åÍ&ÄXZ®s\x0012µê\x0005Ú\x000eNÏ\x001d§cAGÖ,\x001d`\x0017î\x0006\x0007!\x0015ÃöWæ+\x0008ó\x0018\x0014Z\x0015Ù4Õ3\x0000¤£
¤FæMñ_a´#½/ä·aùÞÃ3\x0011ËGNC\x0008µ# ¥\x001f\x00166wVyªÚMÀ'²úT8\x001e5C\x0007äÇA9+\x0007\x0015àT!v²déÈìs\x0004Bì'"Å\x001b#f_À}Öì\x0011ú£¶¹\x0012l¥Ø%¶\x0014;T«ÛÊx^þÔÇìÌÜ\x000fYI\x0014u8mÀXqO\x0005p ÒxXZÔäÔð$\x000cËs«\x0001aÈùtÄrÙ\x0017gÃø²Qµ52¨\x0000UG'dWuªÊ¢äJOI\x0015Ñöá§\x001e?l?_Äisåßmz|ÜÅ¿b
Ø¸pàS²Å§A66<]°>apx_c¦Ã\x0010ê¸blnÄ\x001eE6pùÓL¥Êº\x0014,\x0006ì\x0008U\x001d¬Þ;\x0017CH»]Få7x¦Q:cu\x0002\x0007 ½gÈ6ÖOoà$\x0016
*t+a\x001e@9\x001eß-(cöÆÝ!iKEÆÊn¤Iq(ánwaFéó+¬KBS+q\x0016zjjáFõ»`2üd¯\x000f(/²ñ\x0013/Ø8AÓ9È©IQ\x0006
Bv»n\x0005]Babn]03Ø¬®ÒËHÂîvÄ\ªÚîyöûµü\x001e\x001e9è\x0018ÏR8Å­\x0008.¬÷MÓ¥E$8Û°Z°ëa¬s5\x001céË
¼¢Ú´rêns\x0007å8|æ\x00111iv¨öZÁçYV¯Û±L²Æ/Þ(ú\x0010[Þ\x0012
x\x000b\x0005\7\x001c{;oD|\x000e\x001b$&*\kHJR¸¥+næßm\x000f\x0010âmÚ4ÜÛU«"ê¾ðØJ:vV>ÉúÎ9r$Q,Âÿ\x0000ò|¬J0-\x001c¼"o\x0014­\ZÈ8)\x001cCî\x0008\x0014 P\x000bóì3¾çÓ/¦\x001cuØO°\x001dh©EHm<ô·~	\x0000ñ²mov{§o+!²²/Éu\x000e½,).q
W¬:[â\x0002\x0002Sk(ö 8\x000e,q|Æ+Ç"/\x0019,¶ë½§IÒ*Vë@;É8)M¹G~¯Pr*\x0005±\x001eÀÛ-ñãs~~=A-Ip:
\x0012Oîn\x0008Óäì¹\x0002ü9\x001b,W;\x001bñÕBêb\x0001]ÏEyI\x0015@\x001f&V4æa0\x0006ý	Ìí\x0003\x001cCä8j´çqë[*àTn+Ò\x001dcsm8r	\x001a¼\x0000ß>7\x0003\x001f/a>ZZ«\x0017
åëu\x0001\x0010\x001f\x0010ö]52h%=ë\x0003ç©	\x0010a¤]7°¬z±\x0011LÀA\x001f\x001eá\x00110øl%\x0011\x0001Û]}voöÞù­È°ã\x0000BT8V
Ì\x001b!L¡æLP÷ö
<Dw\x001d½á
dndÕ8uX~5°b1ce\x000bÚÎëé(sB&\x0003\x0007»°\x0000øxu\x0001Ó\x0015ð¿Zÿ\x0000'\x0001ôß<Ò>B\x0008è\x0004'\x0010\x0003ûwv¨{ÿ\x0000 ý]uÔ¡Úo]\x0014Èdè½é1!\x001a ;\x00113\x0018àPØ\x0001°\x0007_`\x0007Ou(º\x0001&¸åÄR]Ê*À^Á(à`Ø\x0003äñÒ-¨_Ë]õ\x001d&äÔåú:ve\x0001è zÿ\x0000WÈß^)Bý8º×ü¥ø¯R¤ñöNéAÿ\x0000ìüÆÍM®§ºhÑE\x001a(£E\x0015\x0002>¹.\x000cÖÜ\x0013îio0u\x0010ÿ\x0000ÊÁ\x0007xxê¿é+ý`
@æ_Î|Qªr\x000e\x0006½ú®áà\x0004|gÆMsR\x0013«\x001bb{@Ca1T\x001dÀ<zuùC^Ûª+¥GµëÉç''Â \x0013kyê¯¥ÿ\x0000§©ÿ\x00007òõÓÕ\x001cò|ÿ\x0000ìÒ­*¾}^§+ºe÷ÄzxÇqê>;¶IB\x0002HãG­'ÏózkÐ$Äz\x0014Â#ó\x0018z\x0007Ëã®êKkaÖÝ:R¤Zþ9V´\x001eam´\x0002°AI·\x0010	±·gÕÙ\x0014;k½â©	#g·ã<}b¸Ñë\x0011,]KÊMd\x0017\x001f\x000bX£\x0002\x0010Ì»É\x00161Sä|çË!¼ lC\x001bbî!\x0012{Dî×vJ³\x000fâc>ìò\x001bÚÕ¨x½Ò´÷®/}CY\x000fcmê?´¦ÜÇo)âíÎËñ\x0008\x0008XehXWuI:x\qåYûK4(°xó\x0003ÃH\x0016B\x0017\x0006WS2ÇT÷LÙsE+fyÈ/U:ª*æBnÖüY\x0000(u\x0014M\x0006\x0004(bé~Î½;;\x0007`F-?åÒÐU¬]z\x0001:âUsÆükCÛ­\x0012zÏ×¬þg\x001câÇ<äHa³¡¤4Ê´'ÁJ4¥	RG$\x0004\\x0000\x0005&Ð0îxwÜ?=¸í×ç\x001fn¬*Ûh?ã$\x000f\x0010ÆÜ}ú©³\x0019\x0011Ùu¨¸¦Æ°O%ymå=¦²)\x001d0\x0002:íÝ¸xõü÷Nºîµ)ÑgIPóñú5 ¶Û_\x0015¤\x0013ç\x0017¬ük÷\x0011ÏÛËF¼YC\x0015F²-\x000et^¢d÷\x0002
.\x000b¹ä(û p1\x00047(Ã¬\x000e²Ëè
¼­±È(\x0002=ãX¡Îv\x0014%¥­\x0012@¶´\x0015§É¨\x001bÛÍÊSt*s¬ÎSÞT£F\ÑÒ2ÒuèÀ\x0016ÐòñQódl\x0015eÈ\x0005B£sbc\x0003&»Õ)¥²Æ(j:ê6ÊÚ[Ï
ò\x0006ìi¤c¤
R\x001bwÎ«_G.\x0017·¦õ÷t+}Cê\x001fKßwú_\x0015íjâ),Od\x001f²2ê\x0001Ð½)âB'oP«ñ¬ö+²þ,È\ÅÈ
éö"$¹\x000ba*¾QÊ¯\x001b£6Üà	½Dý§)¹Cî¶ò/«=1Ò-Ø­±JMZ£?ô®¤Ü\x000fowæí¯®ßdok
íÓ\x0016wÖÝq´å\x0019!¼\x0015X=
X\x0016Z|.idè°\x0001"É]k·{
AîÜÆ/i»b3:\x0014@À %\x001e¿[QÚtYd¨\x000f/\x001a¶\x001a["Ö\x0016­§ãI«¶k\x000c"6ÜE>Ó\x0018 \x00048¹°cÔHÏ3Pýá8~JÄê,G\x0008\x0014\x0000Âº%W´Ç\x00000m@Ë;Æv (\x0005Ôº\x0016\x000bîªöÔ,lR\x0008±<¨o«Û\x0003\x0017ºq\x000eBÌ\x0016Áf£9\x0014\x0005¼9	)ç/\x001f!:¯Á6\x001c\x0005NA×Þ:k'Uyñë$DmÚí1\x0003·^¥p`Ön\x0014¨\x0001º²lô\x001b\x0010ÃÔE¹÷×¸\x001d:Þ÷æÑºÙ\x0002ù8Í©\¸)é>oså¯Îµôâ_Gº±énY
fv\x0013(û
¦Ö»!gJ­èà+(Üàb\x000fhî\x0000a\x000ex\x0006úSä\x0015\x0018Ò<ÿ\x0000{\x0010\x0013	¶\x001fÏ\x0008´>]ôân²{/ZEu\x0012	\x0002þ_--"Ù;w\x0017\x0019\x001e;<rVm¼E\x0015\x001c}ì]>\x0013l`lE\x000e\x001f¤\x0001<ÑèAÖAÈc¤H iNÜq@¸\x001eíoâá=&J` \x0005I}A\x0008'\x001eK>@7­\x0000ävunæH×ÚcåÁµuÍ\x0015ñc¸ÀFc\x0019H\çÉ¯,\x000e±W²ÜåEX:ÊÇÜ\x0011l\x0006T \x0006@£¯#zÔ7÷Îê{*ò¸Kqm%
$¡:n5h=ÑË·»]7>R6*\x001aâ|&ÉÂEV\x001c$\x0012T<K§\x00166\x0016$
&B \x0005û\x001d»·1÷0c\x0018Â&1Îq\x00111DLa\x0011\x0011\x0011ë¨ËR\x0008\x0013á\x000eËð÷¹T&·~ê}J+QÔ«Å^R<·ò×â ª+\x0001< ¦ä\x00140* ©{N\x001dr	\x0003Þß\x001dØ\x001aè­,Ê^¿dßg.Ï(®\x0010Â\x001cÒ^BFe%c±È\x0000\x0004s7áæ©TÃ\x001ccÈÜ®Ätô³\x000c\5õ	³&\x0018o1¤ÐÏï÷¬6ÕY|iy9LúB»W>êU¬\x000bU\x0016Æ*\x0008\x001bV'mô£!¹¡GÈn¦\x001cF5V#B~ÈGe»A=£Éçåh¶®;òÑ³bã·nùxÇD|»é\x001fñkQâ´$|\x0005blG\x000e+¬\x0011Æî>`¨ïÄ\x001czgSÎL¯l3¨íÂÇî\x0003ZÂýº¯ÓQ5;\x001b2*
(û¢;ô´_fa6¶9(ÃCaµ§Zu<}ÃÀ\x001a}`¶ÝÚ÷\x0008vBx8¢Jíûn\x001d¶·.ÊÛ(ÓÌ\x001dHÐEU\x0000\x0012H\x000b ª;G ':ßö{Ô_¿·Ä<Cm)¼çÊ{R¥HÔ8§ÜäØ\x0000ôÚ¥Ì#ZÃÙðcð\x0008ã{ý0<ïÙæ¦ÏÔÇ\x0011ä¼áÅ&w¬\x001cÙ¼¦wÁ3\x0015üÝ\x0018»hÃû[H&+±ºQ\x001a¼*\x0005hþR	U\x001d4\x0014U\x0001:è\x0001\x0004§\x0003\x0006#g
V\x000b<\x0010|¤Ö½"è\x0004Ü(\x001eÁ{G\x001bÀT»6¶/|íô¯ÂhKaAÆÜ)MÒ¤ÌØ\x0010H·Û\Ú<¤goZ±c¨ÂÕ2+ÛDÎ+¬»9Êç
ò²\x0016=\x0019lÁÇÅ04ÜÁ\x000eÝIDCîdJ\x0011HeK­­"Aú­\x001fh¸o°òÓ\x001dHV«óãbO£ÝåUç\x0014§6NãT6¯èîf:¥\x0010Óíñ-B5¨X
V\x0017\x001aSÌÖµW#¢7T1
 n	._)dÌB©\x001cDHª&7iì8\x0008{5t\x0000w\x000fw³Éæ§û2C\x0012\x0011  \x0015\x000f"»G¸iÔds\x0015!THJ\x001eÀÛq\x0010\x000f\x001eÐöka£r²úÊ>%m\x0016rû\x0001N¦\x0000\x0000\x0001¶éá°xm¶³ÚÝµÕRR{¾å[ªQ Tö\x001dÃÀvú¾!­\x0001þËûæµ<\x0006¯Á7½X9&\x0011G'q· \x0007A
üDCÃonñ-±\x0011JûKBâüxûµÕ."<\x0007\x0014Ûm2·q¿)qÎ\x0007\x001cÈ\x000c ã\x0018dnTÁÙ®.¢æéT=áYÛ¨\x0019\x0006°ÁrI8e ©|æÎÐ\x0012\x0001¶î(´ÐöëÛ«\x001b¹Q½vS>¶à!lcÜ%IRTx\x000e\x0004
ì=û\x0003pb\x000e<ÁÉ8Yd\x001b%:
\x000bO;\x001b\x0002&ö"Å$+RQ\»a
g\x001bêÜ=âÍâw)Ä+Pä\x001ecä
ºµ1»&ÂÃ\x001a\x0016\x000bªK(g°ª{\x0010LâªÂc,å"u\x001e£¥=¡Ü¹ýÜþöÞl¢\x0001õC\x0011
¤k	A7QQµy\x0004$\x000eÒM`Îäññ¶ë\x001bS\x0002¯\´!K#A+\x0004([ø[ÔO`°¥U¦âßQÉ8LÙ	0ï\x001f9½>¯Zä>%ÎV\x0015èøÿ\x0000(ÏRÙ4Ìï%ÃÅ
Ù xÁÙH©\"\x001bì \x0006SW\x000b?qô[¸§qÒr)·\x0016¨ÏÇNµ8uxjn÷²THI\x0003àðì­éÈÆoDÈSÇne%)}§\x0000 )"Úí\x0016½øß\x001eÄB-ñ\x000f§~4Ìå¯füyÈ\x000etf\x000ci3ááÇ,øØ®ü$5òÓ%vÍ&Ëìû"F\x0005f\x0004\x0004\x0008#¾á¹µÈû§«2¦cÞÇl¸ï&@/÷]yÆþ\x0002
/Ýl\x0013u\]D\x0001ËFda6cONjnçq6t'\x0010¯«\x000bXsàIæ*\x001eG\x0015BÍ\x0018¦ Ù´jÈ¤áå¡å¶2@\x0004D\x0004@J@\x0011ö\x0006ý5bã1ÿ\x0000·1ñPN>Ð'ýø¨Uàeáç²¶]íþÑUú\x0011z8\x000c«à>!dp\x0003õ\x0015êëç«ÙÔYÝþÁÔÝÃñW±\x001d\x0016{g\x000f'O°?\x00155*º±õ\x0000Q¢4Q\úºÿ\x0000\x000c\x0007\x001cÉ\x000c9ú¶´jóôôiÜ?éßÄ5T\x0013¬ß¥\x000eßÿ\x0000Vüeê<ýô\x001fêî?²TQ´£êGÐ«þ÷ÛõGèÔÒ?HCúßÚ
d¬tê\x0013îCëý±ÑEU¢¤ä"2j\x0014§!Êb\x001c(\x0018!Jb¦\x0001\x0003\x0014À;\x0008\x000fA
\x0014W0þ¡¸?¸»(Ç`~+[¹{r{ìkH¸d¼-ÁÞ\x001e§Ë:ËLqXÏÏó\x0006*¶[*òp\x000fZâÃ~½läbHÙFiÈ¡ñ(¤PP¥\x0015*^Õhøü)ïï\x0010å\x0013¬3e¶÷í¼¸ÁèñÃ&Þr\x0001!«5ÏÆ\x0018|6Â.\x001a\x0016£P¬ÁÇ°+D\x000cUÓfsª²ë
¢¤£E\x0014h¢\x0014WÁðúáöÃE\x0015Ê'§\x0007ðçsoû³ß¶EsW«¿£NÜôAø»BºIúTçþ£%ñ¦k«ÍQÊ¾´h¢\x0014Q¢4QF*.=\ÄKÅÆ\x000f\x0010È\x0011#ö+¶Õiö\x0017ÓÁÿ\x0000¼Ü\x0007Æ\x0015SïAþÓ½ÿ\x0000ð÷;ña\2p¡Ñj`\x001d»DvéÓÝ.½Ø\x001cÏ\x000bÿ\x0000Æ«ûã^0À
õ\x0006xÿ\x0000Ä£ûÑYo=_Ñµ<\x000f=mÙ^ZÈµ\ÞHw\x0007p÷7ßnôö\x000fË¬ÈFé­\x0017þ\x001f\x001aSÇËØûo°\x000fO\x000f\x00110']ëMÿ\x0000µ\x0013ä¥\x000bE|ÕJ=½½¦\x0000ñß}úüòh­\x0010oÎíÛ¼¾=Á¾ÿ\x0000ñ@\x0003¦Úæµ\x0014Ð'UøT1\x0003\x0015\x0002\x0018Nâ%PÝ¦&\x0000PÄÛ~ã¦QÜ\x000bíùt\x001eG÷Váç¬kJÐ¦Â\x0005Âb|\x001anòö\&>$l\x001aé2ÔíÛ\x0011@\x0005\x000b\x0005\x0018ç¸\x0017p{	\x0000(nÜÞ%ßK\x000c+Ùgm(\x001b\x0007¯p*3êfè",_³:¡cck\róZ\x001eMÔ\Ê\x001dU.ªÇ\Î\(eVTç\x0003\x0019C¨s\x0007qÌ©L"?.¥\x00140@`Y	·»n\x0017÷j¨>ó\x0007Õb>y>ÿ\x0000Þ²©öÓrì\x0001ÿ\x0000¢l";{v,\x0018þh\x001bPwP¤¥þ³m)ÒD7ïÇ~®J\x0010¤û\x0012õ\x0014\x0013ÃúA?ù£Y\x0014Ó÷\x00136ÿ\x0000\x0001Ûo`ù~mO±\x0005]P¼T·
¸Ù5|Ý}aÖð­\x0005ü\x001aÈ¤Ü\x0014 \x0018L!ãÓmü>¸k@\x001bV²Ý
ªÄ_íÕï\x001f/æ7\ø®V¢|µóË\x000fó?®|O5q©5ï±\x00015@60y \x0007)Ê"U\x0004v\x000eÓm¸.ÚÕ\x0011êÎªÉJî\x0005emN4û+R
Ã\x0007Ê8vñòyùûÒ\x0017 ÝN¼JW!îåM\x0005n\x000bÜjôß\x0013&/ZÖ\x0018À\x0012m£p9J~ùÙ\x0002ø§°øj{eHÖéÇÀ[Ës\x0019êÊ¦Ü\x0002ï£Hçr\x0012=åW¬¿«Ï\x0013sjn\x000c°R\x001bÊ.r\x0019ñ>
A\x0001Ëq\x0000ýÁ\x001c\x0007\x0003jéê\x000fÃ®6|k|¹¨pÓíAE¿\x0013`%Io»(¡\x0015\x0014J+5¢ÉÉ"àë\x0000±R'±Ça\x0010Õ\x001bÇÃl;)öKø ¨k¹ä\x0002A$¡Wwvu{§\x001b<\x0016³9f\x000cÒ\x0014[nËsH\x0004ê
rçP1ÏKàNn²¯ðöÑì+Z¿É<Ínã*Nà\x0012\x0011äQÑr\x000eî\x0017jÛÑ?h¶2\x00072FØè	
¾újØû¯¨®µ\x000biáeËpC¥*m<xi*çÇÏg½T®½Iéÿ\x0000Q#éV\x00006ã.Y\x0019	N¦%§V«%+ñ\x0011Ä[R
\x001c4ª£f\x0001Ív\x001dé+\x0014ùæÑòO\x001ck\x001aß\x0016hñÕ°|anuÕo?ò±$lëF°*f;¹\x0006\x0015?(§:A\x0000\x0010±\x001bGØ¨\x000fÁ.ï9lâ\x0019t!¶~Ê§\x0012\x0005«\x000f\x000bvÕNkraÛRq\x0018é!ÜÈ\x0016\x0008bÁ\x000e$\x000fdsRE£m\H\x0017ä±Ü©U©FÍ1\x0002¦i\x0008¸<Z¹G1Ý¥æÔ_¹T+sù$d\x001929\x0007ÈvÙ\x0012nå\x0013í'h¢éÏ²'I¶Óm;mìE*
\x0001\x0007Uî\x0002Ç"xîS;tuQÆd)\x001aPì4­×lâÚP\x001aAm_J¤ñÓË*òÝº²\®w\x0015V=²ãf±&¹\x0008C´uô`\x0014\x0002TRjvðÈ6(B\x0011¸}]YÜ^ÐÁàSá`¡À×ö \x001fpÚ¢ÜôÜ\x0019cy²Pà\x0008+$\x001f)<>|êÀGÏcå"L
$!¤\x0019É°Q\x0012IêO\x001b(AMB\x0002iÊ{Æ\x0000"B>YÊc\x0014å1M¶ä}6ÃZÖêÉñHU\x0011Àéµ¬+G\x001f>T7\x001fRä¸½	¹+¿öªMþ\x000e*\x0003Ê\x0001®pç¢¶\x0008Ï|w®d,ó$clÉzs9jm9P~Ôíc ¥g]¼¯¢¥*U¨Ãªª^IöP{D\x0007·o\x001c}¡±¸­ÅÔî!ÍO0²´\x0000nGÂçÏI6çæ5ëËöFÙ»§±²ÙEH¸¦6T¶W­	
\x0002À´«\x0002¢\x0005\x0002­Ç{E¯!}:.\x001c
ÊTkû:ãéTmª6z°j+çù	hq\x001cóâáê5D+2úrÒ¢i4UT]\x001a0¥PÂ¸C°õ+ÙS/¶{\x0002Ê]</`\ùM¼À\x000e5\·çB²]%Ì¦RòP]ek\x0001Ç¬®ä\x0000Lr;j\x0008Ô³¤jRÉ\x001ai¤Ê\x0013ÑìQ\x0019\x0015f£l·e²Z.ùÂ\x0006<PüVÃí'ïo²%c\x0008@3\x0008\x0016Á\x0016ýñ\x001eOù@
[(Rµ'¿æ\x000e½+ö1è~_o>:¥JØ\x0012bÙ)6VåãÃÎ\x0005E]NÜ°±oú*ÃY¹ñ%j\x0016 \x0005\x0012Ú\x0012\x0000ã¤RH\x0016ò\Õ%2à
\x0000ìpP\x000fÜ\x0002"Qö\x0008\x0018£°\x000fòµ}RÃ®¥\x0012\x001aR^#Ó~7ªö¼\x000f±¼AË\x001bÞÞ\x001eïíp½H\x0017\x0013¬2\x0004Ç31-ÕSÊµ®DóDÞQ&\x0012Eû
\x001d{H'8oÊ:º\x0001\x000cfS1'»û~ÍZîä¤?·þO\x0016O«:U~a\­ÙÀñ­^Æü\x0008p\x0003\x000fA\x0000ý0ÞÃ\x0000{\x00004Ï1£(Ü q©Ûå	$s¬Z\x0004:·\x0001ñPý6ÖDA±ðmYÊÉjüO\x001a·5Ø÷\x001cÊo¹08ýrõùuÜã£Ûº8ÖÃy©%À.lO¼\x001bVþ\x0001ýp:}NÅòoöçÞ¥zÄUº¶w\x00077p\x0001
\x001b\x0000l!Ü;]¼>mi>ÉaÏ\x000c\x0012xy+qÄjP¹½Y¯<\x0006\x001f1R\x0014ÉD\x000c\x000fhpØ\x0004\x000f°l#¾º¶¥!aV5/ê6"Õpý¢æî\x0004ûG¯A>þ;|
m"Jµï\x000büÝµ¯¹Smèúb®i1>äÊÓÄ:ïÿ\x0000ß¨õé¯\x0016±ä«Û­GËÆ|LW©¯û&ô _'ä>6jkõ?TGF(ÑE\x001a(®ýx\x00142Xë\x001d\x001c¾%an\x0010ÿ\x0000ÏÀ\x0007òu\x0003Äÿ\x0000òt,åó\x0014j¤|é·±gVÏþ«øÉ®]\x0002AnËþf½ÐRF£é¯"H
E\x0002G:õ#ÅO¿³m½»ï¿Ö×]"±OjÕWÉ¼7i
*\x0000{\x0007rõ\x000eºÀ¨ú7­g\x0012¤,n*ô\x001ccÜEAAð\x0012ÁÐ|Dv\x0011ð×\x001e®ÂP¿\x001d:ÒSÃ#Øk´swu\x001ei\x0004M©äÁÒ2\x0011vË%Á³^mó	:Aë¸÷VvÔé£æK º\x0007tW¦î0\x000fx\x0014½¥\x0010\x0001\x001d'îg=X§ZmQKK
HPRðI\x0007É[{9/FÊ·=]fK\x0011^ï¡E*) Ý\x001c<¾Zo[;\x0000E\x0013y(£îmæ	
²ä\x0003:p>aª\\x001bÅC\x0018MÔwßK
ÁRYK*P-p\x0000°òÚÞji¿9O¨n²¥\Üªæä\x0013ÛY\x0004_\x001c{»\x0014îðß®Ûxüøë9KêwWt\x0000ò[öëIA
}N¶4¤Àñµf|o-01; 	»¶ßsmáÛ®Þ\x0007\x001b YÖïÀ r\x001c¥!HÔóLm\x000eÀße\x0007·Ýîð\x000f\x001eºÂèðÓ\x0014¥¶"÷Qµ9I®´\x0015U_9ÌlÍµ\x0018û;äÐ8£+\x0013Z`ñ7Uo(É\x001d#NI#ñÞY·\x0003&&1|CH¢ÇÈ,úê\x000b-`"Ó\x0003ØiQ-/\x0013\x000bÂ½y\x00174¸\x0007uM[Oh ûý´ÎXî\x0017:ÒÕy&\x0013SÊ"Ó±2Vr\x0013r¨V\x0016(d@\x0000±±Ö6åóÜ\x0014=Ár¡¸ôÔ}Õnbz±µ\x0017·§ #&ËDÃ¤\x0015²°./Ú°Gv×í«+ìí9¹ýzá\x0003«;yÅ?¤µ\x001cSqåÃ·Ù\x0008Mô´ê~Ú·-w
tÄ\x0011
sò5©ZåÁÏÀJ\x001e\x0002M\x0016î\x001c8{0É AbÜ.ôe\x0001dH©\x0014çP\x0015\x0002¦7MxÍ¸q3¶ÎåshÎI\x0019ÆRT,t`³ä½µ}l®¨ìÎ¢ìLoTvÆ\x001eØyH
ÍnAP\x00011Ö.­\Ç#Eø\x000fmoÕ:·FáÅ)\x000c½V¼òÆó)Uk1%U+Ê¿\x0015°ÕÍãxÙKÁ,\x0005Ï¶ZÜ¢«'\x0016¨8\x0008ðó\x001c]\x0018

\x0013±±1ÐRÃ\x000eÈyd­<¬4ü\x001f=¹Þ<l*\x0006Ü\x0019MÍ×lÛ¹MëºaBmò\x0015|±uôÜ\x0006\x0013«P¹>íªA8üÔcð5:®²ª¹uoÙ\x0003\x0015Òç\x0005]-\x0001.ÎRJäáàtéÖ6¿T6ðð\x000fH=7\x00122}/pYÜlÒÚ\x0001<t®äðìµ«çgõ¸ìXxhø@a´¥[£\x000b\x0019õ\x0004
ºÚ\x0000x\x0005}>µ+â-ÛÎ6MØ©\x0004Ào»o\x00010\x0007»·Í¶­×¬ù«Ë\x001f\x0000r½*\x00180W´ÃÔ
\x001bJ=
QÜÃ¶ûô(kUû"(\x000fyKµ«u\x0011\x001d/\x0016J{¡\x0017¿Ï«\x001c5#MÄ7ÉxNòÞ,A
1oUP½æG¬'6eÝÂÃY¨8~b¤S#\x0012wÕiö ÝR6þÅ0qê))A b\x0012~\x0010·h·:RÌøØ9YxÍ6\x0015ã6ÇU§@uZnéÔ³{$[áqÎ¡5J²s{_® fU<dÎ#\x0015Ó\x0018=EÊn~¥\x0010±ªÊI¢¢EQ¤¢u7R«\x0001ÈÎ7\x0000\x0012¼ÄÈFV)ÅÝ!H^7áe(ñô\÷«Ëw6¸z\x001ef+(ðô­6R\x00128Ü~j7¿;+e6ë¯åÊ\x0000b
¦å\x0002Gc(?ñIâ?6úÕ9®°¢ÂMP\x0017ÑûtË\x000b¨%Ä\x0010¢.8\x0013sÎÃ>Ên
ñ\x001c¹Mó\x001c·¡ÁÝ	 qP!\x0016ÜxÅw{i°·?k¥Á«°¢%\x0000\x0007\x0003´ÁÚ\x0003Ýjº	ÒøÙwFûÎ4§°Ae
2°\x0011¨pïzà  ßD­²:oÎIo1-\x0000bt\x0002t¸«qÒ\x0007?\x000cß½oËõO\ev}ëÅ+5HE¢vÌÄï£\x0013SâeX2\x001d¢ï÷\x0003høÃv\x0011ªbI\x0003¸\x0004CVõÜ¾;\x001cà}.!¶[\x001fclZÍ 'ÚõjÆ\x000f!q¸8ø«1JBt\x0004øh\x0016íI\x001c\x0012|ôà!_©YZ\x001f¥;8P\x0015KJ¯8;)\x0010À\x0002{,Ò[á\x000en¢#æ\x001ba\x000eâé%ÜÆc>éõVÐêÿ\x0000(²ý)\x0007´yH\x001d
;QÁàÙ\x000få
É7ðZ\x001clGaWo®Åóù§DUá\x0010\x0014¼Ú$Õ\x0014JXö¥0v6D\x0003tÑ/»¸îcS\x0008ë\x000bÕ\x0001Z	+RI*$Ü¨Ò{k3y	YT+Mç¸\x0000\x001c9z+bq¤÷ÔÑ«ª²NØ\x0019Ã'âtS.ÍÑ!Mî\x001c ©¸{K¸]µ\x0016n¬RäÌùM
°ø%\x0016å¦¿¥ý9Ç#+
óZÐV¥\x0015iºG0<õÎg¨Zv8ç5ï\x0008Ó©ì5\x001dñ1Ëñ·Õ\x0008\x001a÷0êÖcÎÑ2t~¨|stÞ×ddZ$C¹;®ç\x0002"\x0000\x001aÍ¹6îo|ô¥Äÿ\x0000(Ïã&j~°4ñ\x0000ñ\x0017?:£«`\x001cÌ4æ\x0007\x001ffæ1Ö-p´ñÐcd«¬8ð¨²Ê\x0003\x000cÇ1eDªo\x0019I×\x0012ºË$Æ(¼wÅÂNfÓAÁí8²ZVzVÊ	vQ©Ho\x0003j×í\x001fÛPÜË¶Z­\x0007;n°¨û÷¦®¥0ÛMNt*\x0013³¿n÷Ï«vÏÖòIÔG§Ëòxøï×®m°PÚ\'ëPÌ\x001e*)î§¿:¬ó.S\x0003\x0010\x0000v)M·¼?¡\x0011ðÛm(1\x000bÅ ê·\x001aÒ{2û _Ý¬"ó\x000eA\x0002H%÷·\x0003\x0008ø\x0007û\x0007úYù1?ºùÔþeæ¸^öóÒfBz@Ä6Ê\x0018\x0004\x0007·nãu\x0010\x0011ë®ÂkJXxk`*äy|Õ½Â´²\pY\x0001V½é0úÔ¯hl³q\x0011HÈ\x000eÕ\x0002\x0014«y$@\x00141Ql¶à©Î\x0004)
\x001b¶C@f!K\x0011\x0008²A6\x0008>]Gù{´+q)ÆTëC[i\x0017=¿8s·:ÁÜ²Ä\x0001"/Ô\x0002ª *#\x001d*»pla1\x0013t.\x0010d¢)ûû	\x0013w
B'(\x0006¸KJunG\x000f²¶­%.¨
Kò&ÿ\x0000\x000bÍ]äv3mÈq\x000e=â'PTt©E-óºä?±XWv\x0004Ý
©¨ÅÛ±Is®t>YqT\x0014ª
E±TP
±KÐ|ó\x0000\x0004\x0000uÄy+qèu¤EH$/RQpï\x001bÝVIYKHKâb«\x0014V	ä	µøì
²^M6ä#cµ2	e1\x0011]£õÄ\x000e\x001b@#¤Rp²f/P\x0013 \x001f\x0013keï\x0015Ø¬;\x000eB\x0016AV B·f¡Îýµ¬Ë!Õ¦B
_A·|\x0010£ÇïÆÔz´zP\x0000/ÍÈvþ%\x0000zííÒ%+\x0019\x0008Ú.ÛãþüVc(qrC'HTw@þàÕú\x0007ú9\x000eü3\x0010ð\x001b+\x000f¨5¦¾yý/âoûóü¦î\x001f¢½§ëáÔ½¯/Op'ÿ\x0000ªMY
¨ÑE\x001a(®?ý]\x0003?ä\x001cý[Z5yúAú4î\x001fôïâ\x001aª	ÖoÒoÿ\x0000«~2õM\x001e?þú\x000fõw\x001fÙMª(ÏÚQõ#èUÿ\x0000{íËú£ôjAé\x001f¤!ýoí\x0006²V:u	÷!õþØè¢ªÑE\x001a(®iýK*ö»G3ªy N@ä\óçÇ1O8yê
8U/\x000bz¯e\x0019õ­ì¯R¶\©ì9mH\x0008"Ù3®áµuëw)\x0015\x0012ªéS¢¥\x000bÒù¼n3¸NJ#0?\ë±Á%9aOæ^Fì9b\x0004\x0015O0Ò/9
\x0015*ÑÜVPã \x000bGvL\x0001R÷\x0014Th¢\x0014Q¢ø>\x001f\>Øh¢¹Dôàþ\x001cîmÿ\x0000vr\x001böÈ®jñõwôiÛ?\x0017r¨WI?Jÿ\x0000Ôd¾4Íuyª9WÖ\x0014Q¢h³ýròÕº´ð#¬5¬yl~("ä\x0019ÊFÂ¼vÉÈ·pS ¸"á"´à%6Û\x0008m¨Ó¬Ùü®Õé6äÜ¸7K\x0019\x0018Yo²å¢ZekBV\x0014B6RHò8Sç¦X|vàê&\x000f\x0007oÅÅËÊFiÔ\§Sn:­:¸$\\x0010GeQÇË<í×\x0006b+}èIX¬Øê£99 \x0008"Ô\x001eÊIÂ3vùÈ6nDÐCÎp©ØBK¾À\x0000\x001aç£YÌ®æé6ÛÜYÇÌì,7ßt¤¸ë!kYJ\x0012\x0002¥\x0012HJRò\x0000p®ÝPÃãvÿ\x0000Q³<;~\x000e*&VK,¢åZ\x001bmÕ%	Ô¢I°\x0000\Oi§RU1*-ý]?rº\x001bø~?Å~§-:­^Ñ¿ç<ÿ\x0000Äí¿ñTûÐ´ïü=ÎüXW\x001e\x0010M¨\x0001ö\x0000M ÛpÛî\x000b¯x2
Hù$[Å_÷Æ¼dc\x0001'ÂoûÑY´Uî0\x0007Ý\x001eÊ\x001fÈÖ¥\x0013þ/ËÙ[di6W\x0003YÆ/\x001eñ~ìþÐùCçÐ\x0006£dñ4 \x0014¬êáÇ¶³ÌU8nýÌ#ÚPÜ7\x0013\x0007¼bxÉ®¥h\x000b
5ÎÚÂìw×\x0019N%
-q\x0000Ûß¥Ks	N=\x0007a8¨oÓî¨\x0007·Y¼'G4¨\x0013æ4\x0002«\x0002.)TÔ\x000c'\x001e¿Û\x000eþñ@Å\x001d¿ã\x0017¨|¡® é?
ö·Éé®\x001cî(%\	MÀ=£Ê<£Î8WÛUâ"UydÙÑ!HÄó%¦\x000e_í\x0016;âVÞpw.!°e\x001eºYÁcJj?\x0005¾'Óä>57w>}­»TH\x000e¸)¿Ì?dTv¿²OIÙfÜ|D¼Û»|°d@Çè
Ú¦=\x0013dØ¥\x0004ÈO½zã,¢#*\x001b`\x0004©#æ÷*g§IÉÈ\$x\x001e\x0004s·+òòßÓç÷)¶\x0010\x0012Â\x001e\x0002\x001b{ztùµÅ­ÀÓ\YßÍh`\x000f¾\x000ce\x0004@=á/d\x000fM¾@ÛPFù·åm[þFÿ\x0000÷õwzOu{\x0013u\x0012üÆáÇûÁØ¬Â@\x0002TÙÛüþN¬L_¶®¨\x000fjïä5|\x0005(u\x0000Û[µ¢I<ë(Ûô ú¦ûzÆyÓðÇ£öM]\x0013\x0000	\x000c>?\x001f`\x0008ë\O*×UÀó×¿Ó»°vùv\x001d¾Î»\x0000\x000f*Æ5ÜóáÎ³õÌ¥¾q$\x001b\x0013*«îVts	\x0019²jb¥!0è?>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/jpg/Activites_en_montagne_jeunes.jpg](https://preventionete.sports.gouv.fr/IMG/jpg/Activites_en_montagne_jeunes.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=÷Ùçÿ\x0000]RÊ¼÷ö­ý5?Ú\x0003Ádðoô¯\x0005|DµÐ|[á\x001b?\x0010kv7µ¿\x0001üEÑ¿±<oà¿\x0014Zi®óif='ÄzDð}ªëBñ£êövñùÖoß²v½ûqhÓÿ\x0000ÁVàxOâVûI\x000b=cö³ýüoâM;áÏì~=xbÊßÃ¾9Ö<	âýL
ü>øý£\x001bk
\x0013âW<mo¥ø3âu®gñ\x0017Hñ\x001dïü$Z-î·ùçuâÿ\x0000ºn£/õø'¯ü\x0014wOñ¼3%Ïaý|g¬:_ºïû=¿4«Ë\x0006ÞYÎo¬A®
.ê×ý0Ý×½pöqæÒÆeT'¡:ò¯«IB¼U*·q£Vm4¡QÂOXÕ§iBq|ðÍòüf\x0005àó\x001a
¡\x0018áñq\x001eÓ\x000fVèrEµ.Dã58s¸¦Ý*ÝF2} éréz't\x0013púÆ¢h:\x000b^2~ûU¹ÒtÛ=6KÉ#ýçï¯&·óÿ\x0000íë\x0019¯çûãoí\x000b®ËûIþÐ¾(ð¿â\x000f\x0008øGÄþ0ø9ðçÃÿ\x0000\x0011<\x0013á³¬j\x001e#ðoôß>\x0008ñ\x0006¯á\x0008äÑµ±¯^Þ|Að¾«àý;Å\x001a\x0016t>Ój,¬Í³ J?
?à\x001f·§í\x0005­¯ÅÝ\x001e\x000fØ'örñ
È´ñ\x0016yâ\x000b\x001f\x0018þÛ>>ð"j\x001a\x001eáÿ\x0000
ý¿À\x0000¡ñ\x001cqÜi:±âMoUñÖmsöË?\x000e_©û\x0019üÌý­þ>~Êúçü\x0014Ïá¯Àÿ\x0000ØãLðÞð\x0017ö^ý§ý4=_Á·°^øCÅ^-ø{ãÝCâ/`ðÝïqu¯iÞ\x000fÆz­ÏÄ\x0003}t|gã+¿\x0012xûcY²½ûmî8¶UÃ\Cæ¸*XÉÒË"9\§AóC	Âæ%Zu0øÌ<jFx^zw£%IóÂWp_=Å9¾\x001f\x001d\x000f
å*TgN¬êò¸Ær¨¨SærKÊÊé«E¯z_ó|\x0015øã\x001bÛo\x0011?À/\x0010xöè}ª/\x001e~Ö~?º\x001aã¤\x0012uðeÌþ+Öm"Ç?gþÃÐ¸ }#héþ\x001cü0Ôþ	üDðï|Aªh2Ïñ[áÿ\x0000Å\x0006¾Ã6w~\x0018°×ô\x001f\x001cÿ\x0000Âs¥èz=¡\x0014W_c³°ñeô\x001aokÇÛ:ã5úã¨\x001eK]>y\x0015?wy4-'ßÙç'ÓÍçË÷÷=kóûâþ¹£øïÆú/|?ñ\x000bá_Ãûïz®±â+¯_\x0014u]wMð¬Þ0C¹ÐáNiz¦jC¬jö:åþ0ñ6«>áBïÃcX½]bòÏG¯Ì¸wsÎ.«<¦\x0012<¾¾\x000f\x001a±\x0014é<v)a½\x001a¼2úÕkc18¨Ñ¥G\x001b<3t°´°ÔjIÆ\x001c<o\x001ako	øýPñ#8nqÂäùö\x000b\x0011ÊyªC*©?«fµ)Gí×]_\x0013ì)É¨T¬á	>g\x0004yß\x0003¦µ¨+}å¹òöÿ\x0000\x0018DHü¾¿®?N£Ç¼g\x000fx§Á>3ÜRÒkào\x00122é^$¹C¡ÞÜtÿ\x0000?\x0016ÙØÙ}£µ®½yÛ§yeâ{o\x0018é\x001e(³YÛZ¶Kõ¶â¹{;4Ô-\x001eâ\x0011%¬ÓZ_Ç=¸}ëì¿l³¬ß\x0018xz?\x0014ø_Ä\x001a\x0003ÉåSG¼Úá_ç´¿Ki.týB2?{çYßÛÁ}oÿ\x0000\x001fV½E}f\x0002ø,M\x001c>):j7Ábâõp§8¬&%öU(§*zòÎ1iì\x000f\x0013òq\x001f\x000bbsL\x0011G\x0019ZT0|WÃ\x0018È7\x001a\x0018¼f\x0007Ùg¹4ý£jC	J\x001c&--gã14g\x0019B¬â½\x001bÃzµmn$Û\x0015Ë¢©ù\x0013É}òbO3\x0019ÿ\x0000[ôö®ÇVñ\x001eá+(u}OVK_µ\ÛXÚÁ
^^jº¡xþN£é\x001a}½Åþ¯¬j2#OÑô¸.µK«þg_N~Â\x001fðK?Ûsöùøiðïã\x001fô\x0004þ\x0008xïEKûO¿\x0015<Q\x000f\x001f[}7R¼ð÷?á\x0007øYðþóUñ>¥6¯iz­¹ñÆ«ðêÒêëKÿ\x0000ÎkúÞÿ\x0000xÿ\x0000Á)ÿ\x0000bø'F³eñ÷â¥oñâ÷ôkÛSö®ý ¯4m\x0007BøMmöi\x0017PÔþ\x001bxNóPáÏÁ=\x0004Ú#Pñ\x000fÚ5?\x0019\x001b_¶\x000bß\x001eÞYÞ^Y×»ðï\x0019ÅF¦cV8\x000c2xGÙUÄVQ³ï)ÐU9n§UóÆ.-Ñ|Ö_ñÓ\x001fxs&­à¬%N/Î«PæÁÔÅÐÄ`2Lºu£\x001a8Ú\x000cnaì'8BX<¾:Uå\x0019Â\x0019¦\x001anåøJ?àµ¯ÿ\x0000\x0004îøûkøáïÄÿ\x0000ÛßFÖ|	ñ\x001föOýô]SKÒu¿\x000b¬ü_¥Gñ\x001fOø£¡]j\x0011XxâÏÅ·æ¯¯ü?²¹þÝðm¾á¯\x0007èëãËÍgÃCó£Â^0Ò<y¡Ã­è©[Äº¨i:Öw¤kÞ\x001f×´{É,uÏ\x000bøH¾ÞûH×t\x001bøç²Õì'ÍÍµÉÈã¯ôñûzÁÇZ\x001dÕÇ¾
Á-t½\x000bãG­æ¿ð÷l?\x0019Ø]7ìÕðºex¬în>\x0019ÀÂ\x001bÚ\x0013Æúd\M§Á¥}áÍ­Ý¾{y«øÇF¼»±\x001fÌ\x001fü4Þ\x0015Ò%´¹×u\x0017kÚ¶½â/\x0018xËÆ~$¹ûO|mã\x0018k\x0017!ñ5É\x000cÄË^×o/¯®:ý\x001fcëùß\x0017!Âøl.QeÓ¥\x001cã,Â¬.\x0013ÙJ42é©Õ«O0j.ÕÞ'¥\x001aueõ©¬F/\x00138:UyùÅ\x001cCqnyñ\x001f\x0010cªf\x0019Öm+\x001b«Ê¥9MA(B\x0014aG\x000f§\x0018QÂa©Æ4°Øjt°´!
\x0014iB>íà»öÖm:I\x000b5«î¹\x000b¤§ÖnzzWì\x0007ü\x0011\x000bâüÞ\x0004ý ?i/Ù>þo/Âÿ\x0000\x0015¼=mû[|/¦\x001bk\x000f\x0018i×ú\x001fÃ\x001fÚ\x0003C³iD³Í¯}£á>Ïcþkÿ\x0000\x0015%çü¾×âoo>Ç«Úîlw\x001bíäÛ»þ[s\x001f¦\x000fþ}>²ýü{ÿ\x0000
öæý¾+»:éßð¼¦ø\x0017â}³y0ÿ\x0000Â7ûLxcUø]gs{#þèYé¿\x0010n<\x0001ªÜyùÿ\x0000S_xoK)ã\x0015>g\x000c.uJ¶]ï\x0017*ð\-´·´xê8JjVO­To_ÅRU¨Õ¦þÕ6×øáyCÿ\x0000&³¶nk¨¬ßwùãüþ5 \x0018\x0018\x001dªÍ5£b}ëþ^ßS_Ö
wvµ¯æ|{¿K|Ý¿FCHN\x0001>&Ãê?_ð¦´lF:~_ãMÊ+ªüÿ\x0000!jÚmZ×ë{ßò°\x0012&ãíóùw?ä)R>_ïztçò©Xí\x0018\x001càüßç¯\x0018þ|RmKÝO~½­¯Ì¢'nxè¾¿?ç®iÖ÷
ksotë-î­î\x0014×\x0019Òcÿ\x0000¢ýj&$öç¯_oþ½1þéü?¨ú­£wêô«ç÷SZ4ÓO³[?÷l2¬ÑG,xÙ"+¯Oºê\x0018tïþzÔµÌx:ìÞøW@ºlfM2ÉOûñD°H\x0013\x001bw®¾®\x0012çeksF2ÿ\x0000À¢¥úyJ~Ò'üðúm$¤¶õ·È(¢³@¢(\x0000¢(\x0000¢(\x0000¢(\x0000¢(\x0000¢(\x0000¯0øÍá_øN~\x0012üHðÇçÍ¯ø+ÄZu¬cø¯åÒ§þÏëéz°q×\x001cW§ÑYV¥\x001aôªRÃVéKÎ5\x0017,¿\x000b¯âÜe\x0019-ã(ÉzÆJKòôîüöþÌþ+ÙámcÂ·Ö}\x000fU{ËhÛï¥°t±üüþæþÞû×þ>½«éEÖU\x0019\79ãù_âwåø\x0013ûNxËD15¯¯õë­~ç<9â§þØÒ'ÏC\x000e4ðAqßý\x0012ó<=B\x0012i6Ç\x0013ë=¿fóµ+8ô;ì+þp~¾	f¼3ã®we6?\x0019qÝ5Ä\x0014>¡­<æ\x001c\x001e#Â¨Ð§&ëÏ0 ³ª©7\x0017O;£ËÊù¡\x001fé>\x0011Ípø¼jVjaZ¤ùå\x0018·FJ3ÃÍ·ÓÙISëiRú\x001fÎÏ~\x0019~ßðG?ß\x001a¾"þÅß\x0003ïÿ\x0000kÏØ?ã§¯<}}û<øSñ\x0015ÿ\x0000>	øÏXxîµ
CÃz\x001eo¬kÚl0ÝI=Ô<9¡ø£A×ü.4{?\x0012YèúÇìï+Ã~:þÝ?ðYø(ÂísàOÀ¿ø'ïgÿ\x0000\x0005üV¶O
øÇ¥ôK
êËqm®iw\x001f\x0012>$Gà=\x0007Ãz>¥\x0014\x0013Øë\x0017\x001aVuª]Zý³Gûgúgúgõ
/|+\x0001Ì'Ñ\x0014®x]JÙû±$ü;ÕY¾'ø5NeñEÌ@æ7¹¹~Ü\x0001
¼ë×ØWÑd\x001e#ñÞ3\x0015ñ~}ôFÁxâ¾O\x000c¢\x0018/\x0013³^\x0010ñ"¥lÒ¾C£Ê3$áÜµÐÈ¸°ßVÂÎ®xáÅbe¡R²",D9«åX(ªØZ\x001cWW/Êëº¾Ó.§Ëâ©F¼ý¥j8lEhK\x0011G\x000f)JoØÆrTÔ½Ç\x0018¥\x0017ó¯ü\x0013_ö5Ñ¿à¿²WgË]cOñ'á¼Ö<iñCÅl3[Xøâ/f}bãOç2ÿ\x0000cèö\x0016zWt{àµûV Ùë\x001fc³¼¼¼³¯Ò?þ3\x001e\x0015ñ·õÉ$Ûkg¨Á\x000e Ä\x0006\x0003N¼ó,ïÎ\x000füðµ¸àwÈ\x0006¾\þ\x0008\x0004kO'§a©9ý-¿:ô\x0006ßãW.¼%àBÎMf×JVhu¡u¥E5­Í½µÀ³íåóæí\x0010}¢ßìüZu¯ÊpÞ\x001c}'óÏ\x0013høª¼4ñ\x0017\x001dÇuxÇ\x000fÆë1Äpu~!¡RÎ¨ÏØWÂá\x000c$1´iÆ\x000ec£§\x001c\x0015:q ¡\x0008úÆpÎ\x001f,yd³\x001cº\x00068)`¥\x0005£5\x001c4¨º\x0013Rg)*äù¤ÝæÜÕ£öÁ\x0019]UR7+/Ýeÿ\x0000?â;}y÷Ã­;ÄÚ?tM\x001fÅïc6¹¥Z­×Z}Ä·P][Ú&ÒàÉ<\x0016Ò}¡íV\x0013qûç<æ½\x0006¿éw3ZùæAç\x0018¬¯\x001fâ³L«/Ì196iKØf9N#\x0019¥^¾[¥ö1x\x001aµ'Ä(Þ\x000e­)ºrZgó6"h×­F\x0015i×*ÕiÂ½'ÍJ´!7\x0018Õ¦úÂ¢\Ñí{kk²(¯hÄþ\x000b¾;ü\x0007ømû)~ÝðQ\x0010~Ûß\x0010à²ÿ\x0000³M×ÇßÚ[Æ\x001f\x001d?g¯¿ðNo\x0015üJà÷í\x0007ð³â\x0006¤Ï£ü.Õ ðO<Y¥Ùü[øotu_\x000eÜ¯çÐâWwiköË;+="÷Yú»Ä\x001a÷?b_\x0000Á\x0007ko?°çííà?Ù/öEñ\x001fíçðïÄ_\x0008¼eðÚ/\x001eþÖz]í\x001fðËYÑ>\x001føóÇ~\x0003ð÷.E±ñâ4wþ"?ÛwÞ\x0017¶Ó.¼Qö!e¤Z^h¶WÙ\x001d\x0015\x000e\x0017ûNËkëcWRé'\x0015tvvNñqÑ%¥®ú½þgiþ%Õ~%ü\x0010³ñá?\x0018ø+\ñïÂ»\x0012éÞ\x0005ñÞ\x000eãï	j¾+ðz¥üg£­åå®ã
\x0002çPFñ\x000e5\x000bËm3\µ»´ûmÚÛ}¥¿Í#öAøoÿ\x0000\x0004ìÿ\x0000
|søóðÛöèð¯À?Ù³Á_¶×?h¿Øù<aá\x000fÚ¯ömÕþ0|QÕï>\x001bügÓü7£éw^5>\x000fÔ¡ðÜðxæêËB¹[_\x0007jvwl:¾c{þÔPá{k²Knß2c>W¶½¯ø\x001fÆ÷ìi¬þÍÚ\x000f¿oo³\x0007ìaÿ\x0000\x0005nÿ\x0000§Eâÿ\x0000¾\x0000ð\x0017Åÿ\x0000_·í×Ú®~>| Ò¼goáÿ\x0000\x0018~Ïÿ\x0000³ùø¡¡x{Å>>Õü)à?\x0017øâ7ü+Û\x0000[\ø¢çÂö\x0010\x001e$ÑµcÃGWí¿àþ!ðÔ_ðPOÞ
ÿ\x0000Uj·×`+/\x00195OÛoöuý­|3ñNÏà'ìÓ®ÿ\x0000b[[ü\x000fð\x0017ÀKörx»Âß\x0016o~"Ë4þ1ð|cã/\x000f·­//¬ï/,ìµaýuÑB}mªÛg}6×¿æ7¹£\©7tDÕí½ôwûç£þ\x000e5Ö|yà_Ù·ö øÍð»Dðçþ"ü
ÿ\x0000§~Æß\x0012¼\x001b£xÇT¸Ñ<%©x\x001bß\x001fx[Ãúg5<]i¾\x001cÔµï\x0014iV\x001aÎ¡n>Ñi¥Ý]Ý&J\ÿ\x0000àß´ÿ\x0000ÇO\x0002~Û_µgü\x0014sâ?Ã¯µßÅØCãßì«ð?àÿ\x0000ìËáï\x0013é?\x0003¿fß>9ð5+ý\x0013áÜþ'1|@øñ'ÆÞ'Åµ\x0017øZÝV¼ð}öÇ/,ÒËö+öÒý¾\x0011þÝß\x0007l>\x0008|i¹ñ´ï¿\x000c>,YÝø\x001fY´Ðuø¼Mð§Æ:4(Ååþ¬Ú/R¹ÓÛIÖ­þÂnßJÔ¯
Þ«-­gõå\x000e7r¿[Yú SQ6rMó]tÒß~½ÏåOö\x0007ý>4k_ðl>\x0010|*Ð¼OáßÚÛöµýÿ\x0000io\x001aø¸øïûKÃ¾;øñsâ¥çô\x001f#Äw¾$û5æ©ø¿áÖáo\x0000h\x001aªÖvÖúBøvòêîÖÍMèùÄ_´>½ÿ\x0000\x0005\x0015ÿ\x0000uü\x000fÿ\x0000,ü\x0002ýÿ\x0000lo\x001d!Ñ?d¯\x001e5ÿ\x0000\x0002nþ\x0017ü\x0011ý|5û=øÇáþ#üCÕü¨^yzÄäü8¾·ø{¤Yiv~&ñÎ©ö¡gi¬\x0005Ñu_í2n:%{$­¢Ýi÷l
vmÛ^e$ïªkÎÚþ\x0016??\x0004øOþ
[âÏø*/ü\x0016ÓöPý~#~Ï\x001f\x0000¼\x000bâÿ\x0000¿³GÅ\x000f?´wÄí3Åþ-ø»ðªÇãìÙá³esð\x0007áÆ%¿üGã+Ë\x000f\x000fëcÇ\x001a¦]ij,îìïÚÎòÓ\x0013ãÿ\x0000ü\x0011ëáÀ¿ø(Ïü\x001bùðCáþ&ø«ötø}àß~\x0000ø½{cªxÃ>)öxÕ\x001föÂð6©ñ¢K8ÿ\x0000á\x0017\x0007âWí\x0007â
wÆ\x001a­Û[h:©l,´{\x001f²èövÓ/ÂßØ÷á_Â?Úö¨ý¯|-wâé¾(þ×ÚGÀ­\x001bâ«ªØ\xBÊßö|ð®¹àÏ\x0005Oá=*ßH´¿Óo/ô]vqâ\x0017Ôõm].î¬ìÚÁ4u7iwõ.Efµ×ð°{F³Ú<·Z7¢»mêöÓKjûÏçü\x0014gàoÅ_\x001fðV?ø&\x001e\x000eÑüI§xfÛöRÿ\x0000¤øNóâ¦¥êW^\x001eø{â\x0005<\x0017àm\x0002óÄ\x001aµ^^7ö±¥O£,÷6×z¥Ò²i\x001bÍ¥î?ïß\x0005ÿ\x0000d/ß\x0001<\x0019û\x0014~ÖºWü\x0017òïö¦ðúwÃïðLÏ^$ñßfÿ\x0000^ ð¿þÝi¬ø\x001fKÃ?ð®u/¿\x0010¯à²ñê\x001aôÏ±ÿ\x0000iÞ_è¢îÒÏHÖ.ÿ\x0000Ò\x0012\x001c[m©5ë¹J­\·IYk´¯ñlû-?M\x000fæMøïâoÙ\x000bþ\x000bqñ?Yñ÷ì»ûPë>\x001eÿ\x0000þÎ°_~\x000f\|/ø_\x000fô?¾-øuªüAðÄ=\x0003âç4}sþ\x0010¿\x0007Z|&°ñm¿~ j6\x001e#Õmt/\x000bZ6³hµõåçàt³çìýû\x001fxö«ýoO?ð\oß\x001d|[ñÿ\x0000ãÆ«¢ø'ö\x0013ñ/µ/\x001f·Â?þ/Õ5\x000cx£Àú\x001eàÿ\x0000\x0010x\x001fS×ücáÍN\x000f\x000b|Hð÷õm\x000bý/LþÇÕîÿ\x0000¶[YÑ´ôK¢NÎÚé¦Ýúß¢ûUµ½ÔôwÝ¸ü-;hÖ·Þúmmÿ\x0000Ú§]ýtÏ\x0000~Æ~\x0005ý²àðP?Ø¿áGÂOÙá§ì]ûi|\x0018ÇÚí
û6êö\x001c\x001aÕ>\x0004|GÖ?gøJ<gð¿â\x001e¦xkÃ·ú6ã(>#è\x001e3þÞ¾Õõ}\x001bÁÞ%Ò5Uýÿ\x0000,xö¸ñ_ì5áï\x0010~×úÅ\x001dgÄ:Ä¯2|\x0012Ö¾=xzÇÃ\x001f´N·û0Aâi-~\x0007k´\x001e§ÁmkgñkWðÝ¼Ú¦²D\x0002îïJ»Ñouw¼Õî¯/n¿Zh¢1åw½ô¶ßðIs¼yl÷¾²º^Ú7ÕÝÜþB´_\x000cÿ\x0000ÁHµÏø+¿ü\x0016öfýþ ~Î\x001f\x0004|=ñ#Äÿ\x0000±·Å?_´?ÅÛ\x000f\x0015ø¯âÂ]\x001fâ'ì×¥èvÀO#Ûx{Å6]\x001fÄ³5ÿ\x0000¯m<1¥ÜÚÙfîÒöòÎèqß´Ïü\x0011×á¿ÀÛWþ
óýþ\x0018h\x001f\x0014üuð\x0013Á÷¿\x001d~\x001f~Ðzµý©â/\x000føþÓá_<=ûcè:Æãamÿ\x0000\x0008àâOÇ«\x0012x¯RÓuÌi\x0017FÎÖÆÊÑí<5ckmý5ü:ý¾\x0011|1ý¯?hßÛSÃ·\x001e.¿µ\x000f¾\x000ex\x000fâ=¦¡«ÙÜx:×Jø)¦êú?¯<5£Á¥[_éú¡a©Ã\x0006¿q}«ê×\x0003J±{\x000b=%V7¿]Ójé§eÚÚþn£ºi·î¥-ÓnÛ?Nwõ¶<yâ?ø,çü\x0011GÆO¼Aªx\x0013áç?à¥W^-ñv¥ßÞh>\x0016¾ñ'À_º\x0006\x000f5;{ylôS­]\\x001b-\x0014_Oký«vní,ÅÓZ2¯åWìýÿ\x0000\x0004üý Wþ
ïmû\x0018ø¿Ã:¯ü\x0013?ö\x0005ý¡>'ÁR>\x0000ÜIe®Ãá/\x0011xçöGàÁ.I\x0018³ý¾2KñÛÆ>\x001d·sv~ÏâQ«æÓXÒ\x0001þÂ(¡Å7w÷|ý\x0004§ed¾Ï.ýo&¥o.f­ß[ÛCø\x0014øÝð_àìûhÁD¬ÿ\x0000n/ßðY_Ù§Åß´\x0017í_ñgãïÀ/\x001bÿ\x0000Á<<cñ
ÛàïíCðwã3éÚÆàtÓü!à¿\x0012h_ð¸¼\x0011u.«à\x0014[x}\x0006ØÚcZ\x001bÏ±ÚYµÞ·Çÿ\x0000Ù\x001fáÿ\x0000µoø&gí-¬~ÏðV\x001fÙ\x0013þ	õà?Ø§â'ìÝksð\x001fQñ\x0006ûm~É_\x0010´ÿ\x0000\x001e$ñ¾ñsöÒ>\x001b[øó^²ðÇÝ\x0007[¿Õ5û{\x001d(ýUÕlÅî£]ÙhÞ\x001a¼þõh¤áÙÙvßõ)U·/º½´NÞZ¥×¾úZÇñåû'êÿ\x0000³geoÛçÆ¿\x0004ÿ\x0000`\x000fø*ü\x0014{á\x0007Æ\x0019ü\x0013Òÿ\x0000j\x001f·:Ã«ü_ýªþ\x0013YÚøÁúæ±ð\x001fÃ.´ÐüoñnoÙÛBOíM\x001bÃ\x0010xWÁ'º½×³ñ{á­\x001bì^£ÿ\x0000\x0004ñ?ûy§?à3ý¸õø%Îû<x÷ãWÃ¿Û;@ø¦¿\x000e~\x0004üq\Òíþ\x0017|$ýußúE§Ä­;YÒ´¹u[\x001dxZ\x001doÅ\x001e
³Ðw]¿õ{ë¯\x000e
#ú¼¢ïßeg÷ßïÐQ>owY.®êý]­¿f¶»\x0014QZ\x0019\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005r~-ðoü{¥/¼ká½\x001fÅz
k\x001e\x0018ñ\x0012èÞ!Ólµm)uß\x0006øJñ5gy\x0014Ð\x001dGÃþ*ÐôO\x0010é\x0017\x000c7Yjº]õ¦Û«PÕÖQ@'guºÕ\x001fÂÀþ\x0001h\x001e\x001cñF¡ûDü@ý |AðÓáßííÿ\x0000\x0005\x001añÿ\x0000e>\x0012øã\x001d\x0010Â®ý­õý{Ä\x001f´¿Æý/à®¨|KñWÃòë\x0015±·ÓüUqÿ\x0000\x0008\x001e¯jÛ\x0007Gñ±¬^YÙÿ\x0000C\x000f~.|3ø½ð×AøÍðÇÇ^\x001døð·Å\x000cþ(ðÿ\x0000ü+wý±¢k\x001a=·Ú\x0013P¸·Ú?µ}³Lº³¾±¿Ñç×TÒõK[Í\x001eòÎÏX³¼³¯çsþ	\x0005ûZ|\x0001ý~%xö½ý¬¾"i_\x0008¾\x000eülý¿lï\x0011x3â\x0007,õ]Uõ­oÃ¿ðT?\x00175ð~§èº~±â{ÆÇGñ§<E?ô=+U×µ=\x0006ÚïY6FËÃW·v_h\x001fµÀ\x001fÙ_â\x0007ü\x0016+ã\x0007ÃCAñ\x0007ì«á¯ß³÷Å¿º\x001fn­õ\x001fâ/í\x0013ûOþÍ>\x000fñþ\x0015ü/³Ó¾Ù\x0015æ½ñSâ}çu[\x000féPÄUñ±¬^ZZYYë\x0006Ïà3ª50õ1ÔªÔ©ZYznPpµ|lé{:IA8ÕSJ.\Ò¯ïÉÙ%ú\x000eUJ\x0018`jS§Np\x0018z®»¿3tð¥'RR¼\níxÞÍjÏØ\x0007ø¿Âÿ\x0000\x0010<%á\x001dø#Z³ñ'<máí\x001fÅ\x0015ñ\x001eîö\x001e!ðßtÛ}WCÖ,üèãìzä\x0013ÛùðZÝgþ??Ó+óþ\x000b\x001bo\x0016«û\x0008x³Ã:§ü"Þ2øåû#øGÇcì>\x001eëµGÁûo\x0016}¢D?ô9ì?Ñõ\x000eÂÖêò¾ýþ\x000cxËà\x0007ìkû3ü\x0015ñþù>!x\x0007á\x00174ß\x0019YÂé{\x000eâ«ødñ\x000f<7oq\x000c\x0011M¦øWTÖ/¼+§ÜA?Ù~Ë¥Ùýý\x000e½\x0013öø\x0019à¯ÚGàÿ\x0000>\x000büD³}CÂ^8ÑæÑõkHï&°ÉËÞòÏP³ÿ\x0000JÓu6þ+\x001dWFÖ ÿ\x0000JÒõí.Îóþ\øù5!ÇÒª«K\x000fXÉ=jR£n=\x001f4`å\x000eû_KCV\x0012ÄàêR·³©_\x000f$ÔþÌêÑIúJQKÞçÛ?\x0005¿à ?²ÿ\x0000Çï?µÂþ6PñìQñ\x0006\x001f_\x001et½WF¼ðÝ§5çÓµ{ÏµÚjºÂZiw\x0016´Ã*°Ô<B.-ôÍ2ëÂÚË]²i"Êöûñ\x0017Ã¿\x001a ÿ\x0000ÿ\x0000ÁH¼#ûW|8³Ô/¿cÏØ[á×Æo¿\x0002þ)4\x0012Xh´'í\x0015ñ±ôo\x0006|TñÃ³s\x001cwú÷Á¿\x000fü6|\x001d¤xÀ]/Å\x001e2¹»Ö|7öÝ\x001eÒó\x001e]iÿ\x0000\x0004xð÷<[ñ\x000b[øùûJ~Ñ_\x0019<1ñcXðÞµñOÀZ·|\x0019ðëÃ\x001aæðzoî?hÈþ\x0001ü?øW¬þÑZÆa\x001cð[ë\x001f\x00155ÝSíBêóíwlý|ð</ðÿ\x0000Ã:/<\x0019¢é¾\x001bðÏô«
\x001fHÒt>×L°°Ò´«x¬4ý?OÓìã·µÓtÝ6ÖÞ\x000b\x001d?N±ÖÖÖÖÖÎÎÏý\x000e¾£7âjX5L6
5-Z\x000e\x0015+T§hK¸Ó»rvÖRåå²²7»ó9O\x000eÏ
'\x0015(Þ§J\x0012æmg9$£\x0018ê*æçmë\x001eU}\x000f\x0015Ïgá\x0013M¦]$>!Ãzâè7\x001f<ÖzN°úmÂiw\x0016éæyÐÙß'û<\x0007=ëø\x0003ý¯?à^8ýþ\x0013þÎI\x00140øDøA6ñ\x001böøÁ¥i×¢|OøÙûF|QÖ>\x0013^YÉ¬_ÙÛ_\x001fá_4ß
Øø[N¿û7Ù­¼Q«øYYÞøÃW7è#ò¨çæÿ\x0000¦À}<ÎO·Ôs_ßðRßÙøþÒß±·Ç/Úe?Û<ð\x0007ôß\x000bùpÃlði¶	âo\x0000HeýßäøßÃþ\x001cÿ\x0000HöúWÎ`1²ÃTTpÕêÓ%8Ýû)Æ¦\x001ernêò,EYE5ËÏfâÜbãïc°PÅÑ¹\x001c«Ó¥QÑiÙ*ÙÎ	E{±æ­Fì4y¡.js_ðÃâ_\x0017ÙxgAÛ©M%gre½µÍæ¥¬jºçØôû;=>ÏÌÔ5-JòêH4­\x001fOßý*ë©É¯tñÇì}û|,ø?­~Ñ\x0012ÿ\x0000aÿ\x0000>\x0010ø\x0011á%|Câ\x0010ë\x001e'øvß\x0010¼+áSj\x001e&ñoÁ{}~:\x000e¥Ú{­\x0019ì´´\x001b`×µ¥­¥Ñ-ÿ\x0000héVºÅ¶ö»áÉ¾'|Cýbýü\x0015û3þÏÚ\x000eâïÛ\x001bãM¶¹ ø\x001eó\æ3kg\x0007ÃmzÛÄzµÅÇü}h9Ö|cflï<7eöÏØ½#Ç\x001e)ðçìñÿ\x0000\x0005TñÇí¯ñÇ?\x0010ÿ\x0000iO\x0001øÍð_âüµx>\x0007ÁðëâgÃOøIþ\x000bÇð\x0013á%¥¶áo\x0004øWâ¥4-\x000e\x0006¿Òµß\x001dê(Òï
ç1y{g^Õ)áiÔ£\x000cEGõw]I×HO\x0010¨KÙP\x001aÜ](×¥
ªqz¨Ó¡)*\x001e%\x0018¼U7QÕ©B\x001c¥EÁÑåP ç\x0017<DªB¯½)R«(Ñ¡FJÕ*ÅJgüç§®üG®xwÇï<7ªXhpßÉàÿ\x0000\x000fø_EÕtÛT¹Ö,öGã=râÿ\x0000PÔ-/5)ôkeao¥}K¶ûMÝØÅåæOÒ\x001f³7Â\x0010þÐ¶gìEð\x0007Áöwþ#øûW|\x001eÖ¯¡Ó¡w»Ð~\x001eü%ñVñGâ>Lù6\x0015ðoï¯®.\x000f§¨Í|¹àí_Oð_ÂO\x0002ÍãMsMÐ_Oð?#Ô[X¾ÙÑí´[8ÜysÈÍ49ò
¼\x0010¯µ÷é_ØOü\x001b9û;|0ð·Â/¿ðR\x001fÞ\x0015Õo>2|Yñ?~\x000f~Ïkq$w~\x0015ý<!ý5]cÃz<þ)ÍGâÄ\x0018õÙüS«ê¹Ôî´?\x000bh¶8´±½Ö-5~ü	_\x0019Ór»¡«%JP%:Ü¡
j)Srö¿¿«8·g\x0016ä½è£²«RÃá)T­Å¨Ú\x001c§Võ!MJRçiÅ(û©Ë(Y6ù\x001bÓWí÷â{\x0006~Âÿ\x0000¶oìg×Qðïì§ûBëZ\³LÐ Õ4Ï>0¾Ó\x0019%\x001féVðä\x0011?\x001f'Í_å\x0015ð?Ãz6¹û?i\x0017ÔÝÖÃÄ\x000eü9§Ý$.a¦¥§}¾KyV9\x000c7wòAopyµºµûaÁ¯ôÿ\x0000øÛ\ñì_ûe\jyv~Ê\x001f´YiVîéchGÁ¿\x001a\x000f4à\x000f¶Mé<À\x0005\x0018\x0000\x00000?Î7öz`ÿ\x0000\x000bü\x0005\x0011ùU~\x001eøNV\x001f#áÎngå$\x001fã_§a¨òWPRç£ïEtN\¶¾«T¾]ì¡o\x000ca¨qß\x0013eùÅ,>6oÀ¹\x000f\x001f©\x0005R°¬Ç,£ÀÔ»ýí<D#ì±+BIJdíÏ\x001d_>0¾Õ\x000e±àï\x0016]B>"x!í¬üCû?ü$\x0016\x0017)çh~8Ó#ÿ\x0000U6âK_ßê\x0016ðN?²õ?µé\x0017Í¼÷?\x0008üGñ_À_\x000fÿ\x0000i¶7:Ç¾\x000cßê_ðxFÎ=?\x0012þ\x000bø8-¾%ø\x001a3æùSj_a³·ñO\x000cæäÚx£K´6Vföó\x0015ó×Æ\x001f\x0006ø.´\x000ea¶¸øà(¯¢¸Ó	(üwàË.ãXðòù`ùØCáùW"ßU\x0003ìívDkÂßÓá~©ñwÁ¢\x001dR
7Ã×þ ÖëËeÎm%Õþ\x0002yd»Ó¤h/íú\x001b«PAÁÉèÅP¥Áâ°\x0018¸ûJr£Q5(ÿ\x0000\x0017\x000fÊ ïª÷é«FZëh½\x0014¬¿´8_ð\x001exUâF+\x0017\x001fì.\x001dÇq\x0006IÄr£<VapVK\x0008c²Þ% ¹gW\x0019Äü#ÃarÞ$Ã8*ØÌÂYUÃ¼\x0017\x0014Q¡\x001fÙoþ1ðoÅø-/>&x\x0007ÄÖ~,ð\x0007ÿ\x0000ao\x000cüaðF¹¥ò¯,5Û/Þ\x00006zxy!¼³HûGOÍ­Þ¯}³G½ÅåÙ?Ñ_Ã\x0014ÒN¸Í} PXó¤ÂÛ|Óý"O3çy_ñí_Ãïì\x0003ñÃáoì½ûa7í9¬h>0Óÿ\x0000g\x001f\x000füsð¿Zñ6§½þð¦âÿ\x0000Ç>\x0013Ôíþ#Ë¤YÇ%þð³Å\x001aõ÷ÂÚÊØÝécUÖ|Egkyd©d?²­\x0007Ä\x001aGt­\x001fÄ¾\x001aÖ4ÝsCÖ¬-5­\x0007Ä\x001a\x000e¥m©iZÎ\x000cw:~©£ê\x0012\ZÞYÞE ¸·¿±ì½~µüùÅùml¿\x0017¢ãRXzx\x000c.\x001a&Tù#8ÐN*.Ü±æ\[i.~uWHTþbTÊ±¹\x0016cåJ5êG\x0017S\x0019Æáá\x000b7Ê1|µ2Ìó)&	â²lÓ\x000c£ÀbãMBTd©4ªR¨£Þ~Ùÿ\x0000\x000b~%ücýþ(x+à\x001fÂ?\x001a#¶ð÷¾\x0010kßÚRéVÐüKøiã\x001f\x000füHð~ªj\x0010É\x001f øZð¼\x001e\x0015Ö<ÿ\x0000ô_ì½NóíìuñÇü\x0012»âí\x001bñZûöáñ\x000fÇï\x001c¾\x0013[êßµmÏ¾\x001dxWã¥³a©xWKñÃÿ\x0000\x000eÿ\x0000ÂOð¿ÀòêÀZê_\x000f>\x0018øBKð¾±áÌè:ªÙêövvw·w¶Cô¯Á¾5´×bÂúo#[\x0011YfØ³þZ[ÿ\x0000Ón¿i·÷üý\x0001Øçiùº¯ÌùùAß¯½|Ý<_³Àb03¡Jj´ãR\x0015µZRs¢ë(Ê+ÞXP§\x000eJ^Ï¬ ïRÑÎX_i£UêÃÙÅÆt\x0013½*«¬i¹E·É*nµW\x0017\x000e[§MI?e\x0016~B~Ùÿ\x0000±/<)eûVþ×±÷íKûC~É?\x0017üYðÄÿ\x0000\x0010¾*øOàÖ·§\x000f¿\x001d<aðÀúÆ§á½s_ðÖ©§Ï.ã{Ë\x000b;\x000eçÅ\x001e\x0015ÚæçífóìcY¼ÕïuÏ¿ø&Wü\x0013óö%ý»>\x000cø·ãgíKáß´ÿ\x0000ÆÍ\x0013ã\x0007|+â¿\x001bügø÷ñwÄºlµ
\x0013Â\x0010¼\x000f®^éOü?a\x0015ìÞ
ñîaqnþÕs¥Þ]Ùñyö;?éÎëL°Öm/4]VÙ.´½jÎçGÕ-æýä7:n¥\x000c\x001a¼÷k[á÷÷é_Ì·ü\x00103Ä\x0017ß\x000e¾0~Ö\x001f³&·#ÿ\x0000hé~\x0012ð»\x001d¼»Ñá×¿g¿\x0011?fÏ\x001cI\x0014oÿ\x0000-æ°·øs=Çö[¯øóÍ}&_fuøw4qØÖË%Ô¡RYSª°*Îj*­>IÊ0¿ïJ\±RTbÒ2UÉ×sÀP«VUhbäêCÚQ§§<E\x000cL¡J£(VÄc³,ª)¨)µM´Ü¥9Kê/¿ðKý3öAÓ$ý¯à:6­û?þÓ¿\x0006àÅWß\x0008ü;âß\x0019øáGí?ðÿ\x0000N1ÞøÃàÿ\x0000ü\x0015ã\x001f\x0012ëö³êZÆ\x0005ÅÇÿ\x0000²®-EÞ«kiiö;?\x0012^xsÄ\x001býàýÿ\x0000kÏ_·_ìÑðÓöøRÏg¡øûMxüAá+Ë¸®õ¿\x001e>Ñßì3øqâ9\x0016(ö¿µ:\x0011q=½§ö®u£xÎÈYë\x0016yÎRÈÊÁ°èû\x0019GOõy¯øú×ä\x001fìªéß°Wü\x0015ûãÇì¿váOÙ÷þ
SáXiOÙêÕ-¼%§~Ô>
âÛãG4MgÓôÍcÆºgö§?±à8»û/t{%Íæh}~\x0012Î«ã]l»\x001dZUëF¶Â×­9J«9#^»c\x001fßSænQ©\x001eiGÊÆá)eµ¨â0ñ\x001c&"qÃâ(ÁF\x0014©ÖO
^\x0010IF\x000e­HÇ\x000fUB)T©RQRssþ"|\x000cuÇùþ_Ê¬U\x000589üêê¶TLôïÆkíRzuéÛb»\x0002§péï\x001eÙÇåÓz¶9\x001d\x000fëOýßùÝQ)ÁÊã\x001f®ztü«*r½ºþ\x0016·\x0005Ù\x0018=G¿#ÿ\x0000­Ò®\x001b\x001f0<côÿ\x0000?N\x0018°ÉÏ§ÿ\x0000ª¼Ú´µ}Ï+õÑüìM¹~\x0018Þûëþbã~S¾ëGéÿ\x0000ë£\x0001¹_Ëúsêf¾v\x001binÄàû³õ\x0007úçó¥\x0008HÈÇõúM¢µÛ×M6·ÞJ[Kðÿ\x0000!PzÔL¸8UÀöþÓõ¯Åÿ\x0000Úö·ý¼µßÛwÆ²?ì?\x001fì»áCð'à'Ã_ß\x0010uÏÚ_EøâOøZ·Åo\x0012kZWü	áðöûO¹ð¦é~\x001f¸\x001aÏ¦TÕF«uþE3ò6¯ÿ\x0000\x0005rý¨ÿ\x0000iÿ\x0000\x001e\x0005ø\x0015ðögñÿ\x0000ÁOÿ\x0000\x001b¾:Cû4ø£ö¶øyâ¯\x0006üWýþ\x001aèöz·\x0007ÅOÿ\x0000\x0000þ(i÷òj<ø øGÁþ1¿ðÿ\x0000õO
Ú]|9ºµÿ\x0000Ä~$¼:=Ö4öô#*©£	Ð§
µã:©S©\x0017R\x0012v½\x0008Êv¤ùa)t9Þ1&ÒÃâ¦¥9S£(QrziÎ\x0010j0å«%\x0007*Î.ãïjÒþäHcxË.åó\x0011Ðìÿ\x0000ÿ\x0000OJ¿ï	üAý®¿cÏÛ×ãoì­ÿ\x0000\x0004ûðNñÓÀÚ×ìÍð£ã·|)û^~Òß\x00125_\x000fx?Ç\x001ao|yàÿ\x0000\x0016xÇÃþ'ñ\x000e£â\x0016\x001b|f°Òô­+PÓìoô¯\x0006Úø§þ+
bÎËG³û\x001d§ïßìIûSøoöÙý|\x000bûCøcÃ:¿n5éüCá\x001f|;×¦KÍoáwÅ\x001f\x0001ëú¾"|?×5\x0008­¬ã»Bñ\x001e9Óµ\x000f°éGTÐnô}gìvlû\x001dá±qtZ3¥B³¦å\x0005Z1\x0010ç¤ëSê{>{MFò÷½º±¤k¾yR©NTªÂ­zMIOÙJXy¨Tö5eN\x0011«\x0015Í\x0006ÜW»Î­-\x000fªÎzvão_çÒ¥Éõ?¨B\x001eüTµ£iÚÉ/ëÐÙ¤÷DÇûØ=¸\x001fáõïV\x0003ñÎsíTêu9\x001eýë9½\x001aôüoþFrON½;l~\x0014ÁS~\x000bê²çÃÿ\x0000ß·ìÕñëÆ³¼Cã?\x001bt\x0018ôß3ø=ãûÍ{Uðÿ\x0000Ã\x0019<yqá\x001e\x000bñ\x0004¾\x000fø5­Ç ÕüAá_\x0011è:_-t\x001f¶xG¼Ö?âq_ÏoÆÿ\x0000\x001a/ÇíBúOÿ\x0000µ7Å¯ÚBÇÂú\x000ffø{¡øOÀÚ¯ü\x001fâ«;ýKà\x001fn<\x001f¨YþÏ\x0008¼7/,þ$ønóÆ^\x001cÔ4}WÄz§îµï?évwvb¿¾	áâ6·¹·ê\x0016ûÐÜBBû>xüÈæH¾¿­\x0004½ºUTK«TùUVi\x0011\x0013þYÇ\x001aH\x0007sÔ~\x0015ò\AÃÕóÌN
¬8?ÈháéÔz<=<·\x0005[0«aêS'0¯bó
~Î*g\x000c\x0016'\x000b\x001a´1\x0015)ÏXÒ:ÃÊ\x0019V¶_ÅJ¬©¸ýz\x0018E**<Î¢§&\x001aÕ&ãVò¤Ü*ÁJ.Ò_òïÿ\x0000\x0004¶Â¶¦¥{ðËáí!}ào\x001dx\x0003öøaãï\x001f\x0011¾\x001d~Ðúo#ðÇ~(øâÇìÇãüiñ³C³°³þÞð¿<cð¬x?C¿µÕ?·´¿íÍ\x001fìéÔ0iÈn~þç¯\x001f·\x0014×Yvdy\x0007ðùïÿ\x0000¡ý=éµ¿\x000eätxo$Ád|~mÑÀ<J§Ï1Çæu/\x0019Æ¸×ÄRÃá):xwxl-:XjP¡¥C\x000f\x0018òRñ5åÄVÄÎ\x0016«J
ÑÁQ\x001f
\x0005
Té'
R«ZJu=´­'Qª§9¨Ã£ðGãçü\x0013¿öý<yñ\x0007öÿ\x0000Y\x000eê¾\x0012ñ¦°þ7øáÿ\x0000\x0004àñYCøcñ\x001f^óâO\x0019þÍ>(óíí¾
|NÔ­s?ü"\x0002\x001b_\x0002ë·6Ã\x0000ÙØèÞ
o]ýÿ\x0000à¡ÿ\x0000\x000e?ieñôë\x001f\x0015x\x001bâïÃ¯<7ñ³öYøá¤'¾8ü1¹Em¨[øÂwI.±áY¾Ñ\x0004\x0010kö?Ú\x0015Õ­Õ¥èÑïnÍý¯Ï¯Û7þ	û,þÛ·ú'¾"h*øoñßÁ°\x0008<\x0003ûM|\x0008ñL¿\x000b>?x=\x0011\x00046ÖñxÓJ¶¹ÅZEÿ\x0000m\x0003Æ\x0016:ö¥ÿ\x0000¦
\x001bû\x001eòööðúØ6\x001f\x001a·§YYG\x0015N7IWÓ¬»ÔUÖ¶r¾o°«A¹a\x001ce\x0006ù§¨ùi»´Ü¨Ô_À,eûÉ7(Å¶Ï>.Á=àZõ¾7|bý?f\x000f\x000fØøVÂçÄþ2ñ#x'þ\x0010\x000b\x000b\x001b\x000b<½î³â
\x001fÀ\x0017\x001e\x001fÒõ(aó<ûô­SíòùÍ}5û<øÃöIðÿ\x0000Âì¯ØÃEøKkðÇÄÆ¥Ùü	ð®áï4D·°×5=/PðÞ§è>/òeH4«\x0018hsëÖº¥Õ­åöÅíåßØÿ\x0000:¼Aÿ\x0000\x0004ÿ\x0000ÿ\x0000Èü9ÓõO\x0005ü"ý½¿f?ÚcáÎ§¥ê:\x001a·íðwÆÞ\x0000ø¡§èÚ­Þwe?þ\x0002ÏyªëÚ\x0016·\x0007>)¸ÕôÍxÜy"	o"ø/ÿ\x0000\x0004Iý²u?\x0002Cð+ã§ígðöcýU¼Ô¼Kû:Á8¼\x001bão\x000b^xüêB\x000b}cLÖþ6|bPñ¾£ëÖPA¬éöpxJÕIÝy£ý³\x0017û*½j~Ï\x0011{E	Çýbµj>ÏNg\x001aS:©\x0015Êâí\x0018»ÉÊQ²¾Q«:u£:s\fý\x001a\x0013U4å«J£wçWOÙÓ½ËÔ~Ñ¿·?ÅO\x0016<Cû\x0014Á5´èþ1þÖW×k¢üRøàö\x0013ÞþÏ±Þx^×XñÄ?\x001bÇgy ê^0ÐbÉðÿ\x0000,à×WûuZÎîÓYñ5ðuïë¯ì\x0019û\x000bü-ý>	Â«ð\x001e¥«øßÆ¾,×¯> |søßâñç|AøéñgZó&ñ\x0007<Wx÷\x0017·pCæÉ<\x001e\x0018Ð>Ýwm¡iÝgZ¼ñ.³¬zïìÓû.~Ïÿ\x0000±ßÂ'àìÕðÇÃß
~\x001bé73jgCÐþÙsy¬kwI\x001a^xÅ Ö.5\x000f\x0011ø«ÄG\x0004\x0017\x001e ñ\x001e«ªjdµ³³³û\x001d¾(Ï':í§N\x0016Ãá¹dïR¬×ïkÉm)-\x00158E¹{:P\¼Ü¥)>4&ª,N&P©^Î0y½\x0008>^hRçJrSi)Õ¨¹êÁrZ1QQò¿\x000cÇÆ¿ß\x001a¾\x000c´mÿ\x0000\x000b{àÿ\x0000Äï¿hîBÿ\x0000\x0010ü\x0013®xJ;?é2ë\x001e~9úWñGû4xÿ\x0000Äÿ\x0000\x0001>\x0013ÝÜÛ¾¬i¾\x000fÑü\x001bâK\x0016OôËo\x0016ø\x0001$ðO-î-ÓÌ»ó¬õï\x000fß}£éÞ¿»e\x0001NW
zúdóý+ù\x0011ÿ\x0000¾~Ë~)ÿ\x0000|x»^ý²ÿ\x0000gë­\x0013^ø\x000bûI|fµÓ~*~ÎúÞ¥6àoß\x0011lõÍz
õÄ³Ô-á	øuáýVÿ\x0000Ç\x001e\x000f¾×û\x0007Å7_Û\x001e\x001aûf¬^hþ\x001aü÷Ä\x0013Åñ~EK
{'åøÕÃÒ«V\x0018xbhË\x000f:X¼,kÕ(P©S"5+Î\x0014\pÓ£9ÆUa%ù\x0007|!â|\x0005ËeÈ«×ÄÊªS¤ê`«S_XP«U¨ÆTý*r<!$¯.XC\x000c$>ÖËl"ù(÷Oõ~Uº\x0019\x000féçóPÎ±«ª¢¼e~VW>ýd9ú~±ü³Õÿ\x0000m¯Ú²Ïoá/\x0007ü(ð\x001d¼\x0016\x001arkZ>$jO
äÞH¸··±Àz\3y¿èÿ\x0000g{¬ûWë?\x001b¿ho\x0011Z4ºÏí	ã=5f¶Ô¤þËð/¼\x000fà4{=\x001fTñ$w\x0011ÉmáýST\x0010ýÞ\x0008?ªÝ]µu¯Ãð>\x000eñF&<ØÌNQò«Ê\U|ed´Ûû7\x000bÂ´µ×ëjúZúÛùB\x0007ãêC¥|\x000e\x0016KÎ\x0013«[\x0015QZ*Kx*x¼=+M¼BºÕ'ÊÏÛ#¸·ÉÝ²¯Üÿ\x0000®õþtâí\x0006éD_÷¦ßOàýäô¯ÁÛ\x001a|dD¼þÑ_\x001e6Ã7¿wÿ\x0000	ýµ.úø²Îó=\x0012Þêi¡¿Ñô¯³æñ¯;Sñ¿|;o¬üPøå¯Kqg~×Þ|Wñ²CöË
X°û<Úv¡§Úÿ\x0000ª·Ò»ÇßÖ½ª\x001e\x0006c¥&ëq\x001e\x00060XÑ±ÀbjÍJt½¬yUZ¸h?u¥.j´®®ìuRàJ¼§QJteÉªå\x0019Î©\x0016zxò;5Ì¤öM¥¢·_\x0014¾(øoÂ-ÇÛ<I£è«4.º­«jVzUï\x0012ãÌÔ/î-âó¦ôÇ¶;×Å^\x000eø»oû@ü]øUû7~ÍÚ®®üXøõñ#Ã\x0007¼\x0005ãÏ\x0014GÃ¿\x0006¼+ã\x000f\x0017Ý\x000b-/Xñ\x0007î¬$_û\x001cI=þ£øVÃU»×nmmt0nî­lîÿ\x0000?ïôzÅO\x0012xZÇDÒ¼]~xÃÃËo\x001e·ñ[Äß5É¼/qmo\x000fü%¤ÚµyáØ-î í_jÍÞ;WÕÞ\x001bý?à¢Z_/ÿ\x0000iO\x0003þËß\x0014ü\x000f\x000fÀHtÚ'Ãþ4øÚGÂ½KFÕ~\x000cë\x001a\x001fÅHõ¯\x000cx?Äwvþ<ñ%Ü\x0016¾\x0010¿±Ó´û\x000f\x000e[\x001b£©ý°ÝÚÇïé%ávCýRXÊ¸ìÂGÆ9c)ÑËpØ^W:´%W\x0011õJ\x001e2T\)ºUc'	}¯\x000bxuB¶#\x000bRX,Ó6ÃMáq5eõxá0r£Y©ÏÚª51>ÑB\x000b¼>±A¸·Fpjû9ÿ\x0000 í\x0017ÿ\x0000\x0004 Ð,ÿ\x0000à>9ÿ\x0000eü\x001dº¿ñ?>\x001f~ÏÍ/Â¿\x0012ÝZAm¯x³öð\x0006¾\x001b´\x0016ùOqq\x001e©üHøÝ¥Ï}¨/îFiâÛ%»»µ\x0004Iñì\x0019áÏÙ×öêø)ðcöìñç¬þ üIøà\x000fÙú=zßÆÖÖº·Âï\x001f²ï|i©G'Ã»w³·Õ<\x0007¯hß\x0017üAãûíCP±Õâ}þöË?±ý²Îóú\x0019ý>?ø/ö¬ý¾	~Ò_\x000f%ÝàÏ\x001f\x000c|\x001bñ/Cçâ}6\x000f\x0016èz¬Ú\x001e¡$-å
c@¾¸¸Ðõ\x0006~Íªi·\x0005H¯æûþ	s§[ü\x001føçÿ\x0000\x0005Tým þÈÐ~\x0000ÿ\x0000ÁAþ)øáÿ\x0000\x0006ï#Ã
¾=éú?ÅO\x0001iu¼ÙòtØ~ß®O§rEÐºàâ¿_âª2x
XnQ
dâÝ:Òqºkâ¯\x000c>®ÿ\x0000
­«?¦xV²XÚi¨¸V¥\x0018¸ÅÇÚÓRµMG÷R­\x001fu+Ý^ü©\x001fHÁ¹Z¿\x000f~\x0007~Û±©7üMbÿ\x0000ø(Wí\x0019ðóHµ@ñÄ>\x001axóZ³øàMZ\x0008ß÷Ûë\x0017Zßn!!<îÈþ+ù«ÿ\x0000hÞ/Ãïø-ïü\x0015óám²ù:_Æ\x000f\x001f±\x000fí\x0015\x0005º¨x¶t\x0004k>\x0000ñ>¡æ\x0019	}Nÿ\x0000Yiàçíf\x0017c\x0007¯ô©^ö]WÛà°µºÔÃÑyNg+y^NÚ+\x0016cKØã±TÒ´c^ªïÜÜ\x0016¯{ò·å{lQE\x0015Úq\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005\x0014Q@\x0005|sã§ÙûyþÍcþzþÌµºß¿²;×ØÕñ¯Ä#·öóýñÒOÙ·öÃ_ûçÇ_²\x001bÔËìÿ\x0000~¦÷ý{©ÿ\x0000¤3Ñkq»öSý§Wûß³çÆüþ\x001bxW~Ëö\x001f\x000b\x0013[ZÐµ«Ë¯\x001a·ì±û$[üFÐ%ñ¬t¯\x0002é?\x0015åøYªZE6\x0015ºÖu]Oâe½û[jwL-»³²E´{ßOý¬¹ý¿i¯Ùÿ\x0000ã0ÿ\x0000Ìqâ0kÊe?\x0016:\º'Æ\x0008üQ\x0005ö£ñ\x0013öMý|\x001b{àõµ;¯\x000fÙü7Ó>&ë\x0016:ýÅÚê2ÝO\x0017eø{go\x0004Ú]\x0016­ák²ÆîD±Oã^æ\x0010·°Û^ôR¶Í¿e£3ÿ\x0000h\x0018óûfÿ\x0000Á?¦ÿ\x0000z×í7\x0011úKð6éÿ\x0000öv±/üIàÙçDð÷t-[Ãzå·ÄÚ\x0002úM'Z´Æý4ýsöø§¯hWo4I'Øõ}\x0007SÒõ}:v\x0007íZmå¥ç\x0001®cöOøËßØ\x000eOîø«öþûø	â\x0016ÿ\x0000Ú_ç¿£þÉÿ\x0000\x0011üWñ_àÅ¼muo}â	>%ü|ðÔ\x0016v\x0010éÖãJøñïâ_<7oö[`a\x0012ÙøsÂú]´óýû»«v¼¹\x0002êäæankßÉ.÷7øXrmSòµ\x001b¿>zÖ_Üxïíé\x001eèÿ\x0000cf\x001fòÇöôýßþú¹ñD?ûVºßÚ|íø³û\x0004·ý]¦³\x001fýüýÿ\x0000jB\x0007þ8Ï\x0007ýº\x0013}ìßóÇöêý¤ÿ\x0000¾µýf\x001fý«ÝýªÎß\x001f°KúþØwqÿ\x0000ß²íR?Ï¾8¡+óJû8¿^XÂ_­ø\x001d¨E¿³W_ëÖûïÀ\x0007íËû|'øG¿dI?ïç>!§þÛ×Kûz\x001d\x00004Éyýßí#û\x0016·çûc|
Oý¹o\x001f·íîsà¿ØâoÞxOâä\ÿ\x0000à=t·üWìã\x001cßóÇöýäÿ\x0000¾l¯ü?¿ô¶9\x001eøpßújö|û<¿´\x0007íæ£þïÂ÷ÿ\x0000¾¿d?ÙÅz÷ûö\x0005|oû<ÉÚ7öùû\x001cþ\x0012H>²þÉ?³úí*¦ýèy¹/Âÿ\x0000¡øj?úvÖþØ\x001f\x0005µÿ\x0000Ú\x001bösøð{ÂÚ£ëþ2Ã)§ê^"û`Ñí¤Ñ<gá¿\x0011ÌoNe¨^\x000f6×G\x000bc\x0005ÑûS[d\x0005\x0005ÁR\x0007ü`oí\x0006ßóÏKðL¿÷ëâoåÿ\x0000ÚuÑÿ\x0000ÁEoµ-/ö/øí¨hú¡¥j6/¦¶Ôt»Û­:þÙÓÇ\x001e\x0017ó$·¼´Þê\x0003åyÑ\x0013\x000cÀù\x0004H88ðT\x0018Ä°oí\x0012¿ÝðßäãÒ\x001f\x001fxJoý§Q;Z¥ª0W½îµ²ùzRmO\x000eït±
(ígÍmßÏimÕîî}ñ_\x0005~ß<x{öWùçûyþÈßù\x0017â\x001fûSzûÖ¾sý£>\x0011Ø|^Ñþ\x0015Yj>2´ðbx\x000böø%ñfÒêúÚÞåuíCáÇtï\x0011Yx:ßí7ú`óÅRÛ&Úæ\x0016ºº¶¹¹_³Y^°û3i$ÚiZÓ|µ"ÞÚßç¢üÙôe|!û\x0011Gåk\x001f·
zþÝ¿\x0017$ÿ\x0000¿Þ\x0002øC7þÔ¯»ëáÿ\x0000ØÖ?+Ä?¶òzþÛß\x0011dÿ\x0000¿ß
þ	Ïÿ\x0000µ(\x0014íïÈkøu=iÿ\x0000ée_ÚZÕî¿j\x001fØ.8À/7h{HóÃÝþÍ\x001f\x00116öãý^	üN9¯Yýþ\x001ex«á'ì©û7ü,ñÕ¥½>\x001cü\x0011øeà\x0016XÚßÃª[YøÂþ\x000cÑô}bÚßT¶-m¨Å
ýñ­Õ¹6÷@oBT|ßöR?iØ6Tm®¿\x0013þ9F¥yÃ¿ìÁñbAù}ú
ì?b?\x0014xÆß±çì½âÿ\x0000\x0018k¼Yâo?\x000bµß\x0013xWº{Í[[Öõ/\x0007iwZ¦©©Þ?Ïu{{w,óÜÎykÇ$?zÞWû£KüË±¾\x0014Ò~·ªâÿ\x00005o;÷<·à,{?nÿ\x0000ø(\x0013Ïo
~Çr~^\x0003ø\x0017þÒ¯¾ëá\x001f1lýº?nçÿ\x0000Þ\x000bý¥ü¼/ñr\x000fý¥_dxkÅ^\x001bñÞ¥áoM×¬,uï\x0011øbòóJ¼òÞÛÄ>\x0010×µ\x001f\x000bøGX\x001c¬zâ='SÑukV!íu+K«WPÊEU?ç/ý)²÷Ô¨z\x0006\x0014ý~\x001d|=øMð\x0013Àþ\x0000ø[ã¸¾&x\x0017Aºñ«hÞ6QÑµXõiuo\x001fx£\Öb\x0017þ\x001dÿ\x00004ßØúö¥ªhd[Ûf\x001bK¿ôÔº¯¤kàoø&,b\x000fØ£áLAvüIñÅ?\x0014øÿ\x0000ñE;zãôÍ}óN?\x000cÂ¿"j+T¨rjrNOvÓµß­(ª +ñ£âÍ£~Ý?\x0014ìËyiâ\x0001xSP¹y´Ý\x000fÃÉÿ\x0000¢­ï»\x001fðý¯ÆoÛr!àÚËá?÷V>#ðÍ¨OÝâ\x001dKUÐ®üÏ_"ÓU±=ðkùÏécÂx6ð\x0003Ä\x001eÁÓ\v/3:Ùu()9ÕÍ0x\x000cV3)§\x0015\x0014åz\x000c\x001c,ºn=n}7\x0007â£â\x000c
y>X©Æ\x0012{{«KÚëåITÊÚ6ô\x0011{p¼\x0007'þû\x001f¦:}kó\x000fþ
Áÿ\x0000\x0005\x0000¶ý?f\x000f\x0017k>\x001d¼K¯þ<ð÷´z=½Ê%þaömsâ¦¡\x001fq,:\x000fÃÑ¨XÏöàû&©â¯
hýo+ô3Æ\x001e'Á¾\x0015ñ'äÐüOâuðÞ©k­á¿\x0004èïâ\x001f\x0018kßÙVÒÜ\x001fÂú\x00042[É¬kÚähÚ|\x0013ÿ\x0000¥\ÿ\x0000¡û×ùÔþÐðP\x001föÿ\x0000]|qý­¼\x0017âO\x0011ü\x001fð\x000f¬î5Ù¶=zÏÁþ-\x000c|:ñ
åÏÃÿ\x0000ú¥¿-íôø´Ý\x001fÄz^â?\x001e\x001e\x000b]S^Õ.µ{Ì\x001bÏ±ýü1ú\x0015ø\x0017xÍÆØþ#Ìèbó~\x0005ðÒ,û:ÈpÌ\x001fö\x0017æ´ùñ\x00197\x0008àécq¸Z
mS	Uâñ8ô0J%â1x?¯K\x0017ý¯syF\x0012\x0008J\x00141y¥¡Zj^Ï\x000b	ZlTç\x00055ûm9\x0014¦ç´\%ý"Á¾ÿ\x0000ðMÝcösø{­~Ú\x001e4\x0014·ý hÍ\x001eÚëÀú>°i×¾\x0018ü\x001fÖ<½fÞMBKÞÙøÃât²Xë¾ ·ÇÚt¿\x000bÚèú=åååï,ëúNþÒûß«Wó+á¿ø:Cö\x000fÔ¬V\x0013|!ý§ü'¨!âÆßÂ^\x0000ñ
·eòü½BÏâ&,ÐÂcÇüxÚýòÇß\x001f±\x0017ü\x0016\x000böeÿ\x0000üW×>\x0015|\x0007ð·Æ;;\x000eü:¹ø©xâ\x0017t\x000chï
·¥è7\x001dv~ ñ
Õæ¥g.±c=ÅÇú.ÿ\x0000.mûm\x001fH\x000e\x0005ú\ñO\x0013q·Þ&økÅ9\x0006\x0002\x000e¦3\x0019Q,\x001c¸{x\x0005ìðùvUÅQÆÕÃO\x0001a\x001d\x001c<*a]\FcluUÆâ±uc¸_\x000fÁe9na­6ý8ÞXÅb$½¥j²Üê8Î¤¹­Ëu\x0008þî1\_R}­µvü¿¯éô÷¯Òß
ßÇªè\x001a&¦2ßi:}Ø=IûE¤2\x001cân\x0019\x001dëòµ¯S\x001c7\x001fí\x001c^?ýUú\x0001ð\x0007Ä\x0011k¿\x000etÛ05Æsy£\!?:¬3yög¹É°¹·ú\x000eÞÐ²Çká¼Wñ\x0003ó,DïÅ|\x0015ÍðJ«´kc¸K7V\x001am'©âLv*ÚóRÁU~ê>sÄü\x00076UÆÓÿ\x0000eÆJÚ_\x000c1tÓRw´\x001d\5(·ÒSVÙîUùÕûV\y¿\x0012tëeoøóð¦§\x001fÀ÷\x001a©6~¤sÓ=}ëôV¼\x0017Çß\x0000¼/ñ\x000fÄRxWÖ<Ciy%­NOÙb³2ù{~Ó§Ï0bd%³0\ç\x001d±+pÞoÅ|*ò|
¸ª\x000b\x0011R5ëÃ\x000f\x000faö³IÞ<Ê¯²j:swGáµbå\x000b-ù¢þææköÎÿ\x0000F~Ã·wSÇ¿\x001aþ\x001bjZoÄñgo¦Ü|Pøkâ\x001b\x0005xÏU°°ìÖ\x0016þ#mµ\x001d\x0007ÄM´\x0010[Øj\x001aß5=RÖÒÖÒÆÎ÷ìVÊ¹ØÓþ\x0008Ãû\x0007~Ã¾9âÂ¯\x0000øÅÿ\x0000\x0014tä|?ñ\x0007â÷!ñ»á\x0013u\x000bÁq'ììô¿\x000fø_AÔ¦yà:Ä\x001e\x001cþÞ6¿èvzÅåçÛ?¥ßød\x0002ÐÁâßü
Òÿ\x0000ùWGü2O?è`ñoþ\x0005iü«¯Â£áÏqÊI\x001cÎ¤rRö\x000f\x0001þ±ÏêêQO\x000e¡Í¦\x001d§(º\x0017öN.QZù°P¬k³Z.ú»þ?\x0015foØëàwìwñÆ÷àÞªé²þÐß\x0018<Cñ³â\x0012ë\x001a§ö¬)â\x0012eäÑô;t²³Gð®,ßØú<ÿ\x0000j»µþÔ¼\x0017è_cùÃ_ðH\x001fØ·Fý|gû\x0017ë\x0013ñ'~\x000cxÃâï>6D¾'×`Å¾\x000fñçþÏke¨x\x001fÄz\x001e£K Â+¢Ù[èzAû=×ÚôÏ¶Úxë6Íí¥ïôAâßÙëàÇ<1¯x×Ç\x0011ï<\x0015àß
iwzï<]âß\x0012xcÃ~\x0019ðÞ¦Ä÷\x001a³®ëúÅ£i¶vÑ<÷úõõ­¥½¢\x0016»;rÕðóà¯À\x000fÞ\x000cÐ¾#|&ø¹\x000fÄï¾)·óÃ~:ø{ã\x001f\x0006xÏÁþ µêæÊâçCñG­µ
\x001bR\x001b»{\x0019î,onEµÅ­å®EØr¼ðð³ÅøW­61\x0018F\x0003\x0015Z¼3å\x001aÕ19e9QË«J¤R\x000ej°£(¸Ê*VNÍó
8Ûi»'gºN6¾û]éÚþ§óû\x001aÿ\x0000Á\x0014aoØâd\x001f\x0018þ\x0019øgÇ\x001e8ø¥CsoáO\x0015ü_ñNâû\x0003%ä2[^Ká
?Ið÷´m7SÁç±:Íöªj¶Ö·7zEí§Úï>Ùöçü2oÀy¾)ü{ø½ªx&×Ä^*ý¦~\x001eø7áoÆK?\x0011L5\x000cx«ÀÞ\x0007Òu}\x0013KÐäðíäRXÃ\x0005Þ«Ïc¯HÔímtd9ýÿ\x0000Ið'ý\x000c\x001e-ÿ\x0000À­/ÿ\x0000tÃ$ø\x0013þ\x000f\x0016ÿ\x0000àVÿ\x0000Êºxï\x000bübÌñUq¸üdqXøz8JÕ«g÷°´kÐÅS ¥\x001e^JPÅQ¥8rÓUéÆ³¨¹Ë]»¹;÷V_Êõ½ö?]'þ
Üÿ\x0000uèÿ\x0000\x0011l|c
Ç\x001b¯\x0004Xx¦\x000f\x0018[ü\x0001Õ>*Ë¨|\x0013}VÚä\[ÛÞhóè_ð]èðãÉ:}ïn®îíÑ//o,þÛg_¦~$ý¾\x000cx«ö¯øSûeêv:Ü\x0018¾
ü.ñ?Â\x001f\x0005­§mgàø|%â©5O´I¨x}4ÿ\x00006óRÓm|Aâ;\x001d\x001eâ\x000bë[[[]zóíwz=åìµ×ì·ðÒÊ}>Ö÷ÅÞ!³¸Õ®ÃI·ºÔ´+iµ+Ølîµ\x0017³ÓâJIonâÓì/ïÌ\x0016äÜ­­¥Ýáÿ\x0000C³`¸'ìÿ\x0000ðKÄÇü=áß·\x001e ×¼\x000b¨ÙèÞ5Ñ4_\x0013xWVÕü!¬_é¶Úæ¥x§K°²¸¿ðþ¥{£^Øj¶Ú~¯
¥ÝÖsk{h\x0005Ø-¶;Ã\x001a3)Sa,\©àñY|%_>£>\\x0016:Ãã¨YÅóG\x0017AªxOuã\x0018*²,ù+¿µ-­ñ--ÿ\x0000%óO­åâü\x001bÛÿ\x0000\x0004öøñ\x0017Ä^<Óí~4|'Òüg©G«xÓáoÂ\x001f6\x0015øYâKtoo#Ãþ\x001a×.ô6òì®t}\x0017\Òô½0`xnÏG
 }ÕñÃþ	Õû\x001fþÐ?\x0004þ\x001cü\x0001ñÏÂ;
?À_\x0005ì,4ÿ\x0000÷\x001e	Ôµ_\x0007øÃá\x0012iVvv\x0016÷\x001f\x000füa¥^G¬é³M\x0016aý±o}>©k¯]ZÙÞøÏX½³³¼¯Þ\x001fød\x0002ÐÁâßü
Òÿ\x0000ùWGü2O?è`ñoþ\x0005iü«ª¯áßx©eÓÄæu+O*gÔ\x0010þó\x000bSÙÆ«
Qµt\¨:ÜþÂô[pE5Ë_Ý»zvÒÿ\x0000\x000eûíþ}ÁÏÙ#þ	÷û<~ÆZ|MðÊ\x001f\x001føÃâ7Ä}7Mñ§Å¯\x001e;Õ>(üNÖü=£ãû\x001fÂïâMb;hlü7g,pNt}*Æ×íW_cþØûgØô±ü
ñ?þ
Ûÿ\x0000xüHñ¿<_¥¯Ç_ºWõWÖ|Kð×á7ÄÛ-\x000bá¥¨M1¹¸û7õÿ\x0000	x¦çM³Yg?ÙÚV«k¥igý\x0013G³ÑìþÇg_Ö×ì§ðîÆÚâò÷Äþ'µ²µk««««ý\x001e+{khÎââyt´\x0018¢#=ÍÄç
\x0001bÀqTôÙáw´/_ð÷õ½sB×4ëMWEÖ´}gÃú¬i:¼Wº~©¥ê\x0016zmÍ£§ÞÙK\x0015Åµý÷6V÷"æÐêôðÞ\x001exÙÇâ³<.g\x001a\x0018üu:4±xgÑæÄSÃ¨Æ*ÆQtä°ëÜÃ®T¨AÊ4\x0014æäÔkÞéïk¦Õ´·OFï½ícùøÑÿ\x0000\x0004.ÿ\x0000~|jøyð;áÇ~ |5ðì÷¦øKð\x0005¿Âß\x001fË¤^O\x000f5[}{Ä)¼ñ.âÉuý{R×íÿ\x0000µ®|Aqö]P\x0011ö?¶cÙYYÙÓýà\x001f±ÿ\x0000ìmñûÂÿ\x0000´gÂ\x0018þÑ§¼\x001fmâ\x000bM\x001bIñ¯ÄÝ\x001bTð«ÿ\x0000ÂG¡ßø{PþÔÓô\x000f\x0005ønÿ\x0000X\x001d?Sìú}ö«u¥£i{ygzm-	þ¥¿á|	ÿ\x0000C\x0007ð+Kÿ\x0000å]\x001fðÉ>\x0004ÿ\x0000¡Å¿ø\x0015¥ÿ\x0000ò®¶ÿ\x0000Pürx
ùd³iO\x0001§§ÃUÏiÖxæ\x0013©<j©:°F±\x0013ÄV©UsûÕ')·w$ÎZÖ³m÷¿Ëîµÿ\x0000\x0007×Sà
øçá?ì7û?ü\x0018ý¨ÿ\x0000h/Úÿ\x0000Àú\x001e¥mñö°ðöãË«ûy´\x001b\x0008txìæÖ$ð\x000eou¦ÍãmWKÒµÏ\x0018}ºûUþÔ×´Ë;Ë?ìoôË;ÏÜ_ød\x0002ÐÁâßü
Òÿ\x0000ùWGü2O?è`ñoþ\x0005iü«¯Ãø3âv\x0016.\x001a\x000f\x000fK0Ã,&6,â!Ã{z\x0018B²Q\ÔÕz\x0014ªZéÞ®¤û:½/\x0014÷³Zíkú_óùÿ\x00007ß·'ü\x0012\x001bö0ÿ\x0000x¯Cøñ§Ã~0ðßÄÝ\x000fM¶Ðÿ\x0000ád|)ñ%·¼U­è6\x000eïa£øûKCñ.¯E¦ï\x000b
FûCþÞ¶´ÿ\x0000B´Ö~Åö;*÷ßØëö\x0014ý?a/ÂïÙãÀ¿ØzF¿x<Aâ\x000b÷ñ'ü¨Á
Å½ç<Ay\x001ccQÎÒâx4ý\x001eÆÇKÐtË[»Ï±èÖÛ7¿lýÄÿ\x0000Ið'ý\x000c\x001e-ÿ\x0000À­/ÿ\x0000tÃ$ø\x0013þ\x000f\x0016ÿ\x0000àVÿ\x0000Êºô+x]ã\x000e#)£VÅÆ¦O%G.|¥§ìæªShÊðq£7)Q§5*T¥ïBy` ù*µÊþ\x001d,´Ón¿?Áùßù¥ý?à_±'ìkñÇÅÿ\x0000\x001f¾\x000fxwÇòxÃÄÚ?|=§i>0ñ°×¼'à?\x000føÉñâ=\x001fÁze¶¥ê\x0010Áw§Ëýö\x0012j¾(Õ-t¿¶YZ^¥ÝÞ\x000f§¿bïØ³à¿ì\x0019ðÿ\x0000àÀøK[Á§üMñ\x0016êO\x001bk¶Þ!Ö?·¼S\x000eewo\x001dÝ£Å\x000e¦ØhZN§Áö\x001fµ[\ÞÞ^^ÞÞÞ×íçü2O?è`ñoþ\x0005iü«£þ\x0019'Àô0x·ÿ\x0000\x0002´¿þUÓÌ<0ñ6xæx¨c)`V%b³ØÖUÿ\x0000³uö±ã/«}s\x0012é«$§Z¬íÍRmi.VÛOùµé\x0015åo?GØþeÿ\x0000kÿ\x0000ø#\x0007ì]ûe|Sºøáã\x001b_¿\x000b~/ë\x0016vº<yð;Æ°x+Rñµ­¤Zu´¾)Óõ=\x000bÄº-åä\x0016\x0016ðX\k\x0016:Vª]ZÚÚ
fòðZZ\x0003ô\x0017ìCÿ\x0000\x0004ïý¿à^\x0012ñ\x0017ÿ\x0000g_	ê¶7þ4¹Ón¼sã¿\x0018ksxÇ3HþÐ\x001a<zæ¯ö}?OÏMþÓ½\x0016\x001a>¥h:_úUåá³ûeååå~óÃ$ø\x0013þ\x000f\x0016ÿ\x0000àVÿ\x0000Êºä¼Uð\x000bà¬luO\x001cüNÁ^«¯h\x0017Òõ/\x0016xÂ~\x001eÓõ/\x0013øP¶Ò¼9áë\x000bÍbÊÎÚï_×õK´½\x0017H·êZ¶¥r-,í®ï\x001dAºÞ\x001axËÊ©äXz­Â4©Ã/«S\x001fÙQqthÊ\x0012ç£COcFnT©8AÂ\x0011äé×ä»eÙ½Ûl·ó¾÷?!j¯Ù\x000bàßíá¿¾\x0013øÑg¯^hÿ\x0000
þ1ø'ãcðî«\x000es7|\x000e5Hì4ýRâK=BY¼7©ÚjÖ\x001aÆbmn®í?ãÏX³¼³ûe|áûsÿ\x0000Á%ÿ\x0000dø(W|	ñ3ãÝÄ\x001b/\x0019x\x0013Co
Åª|;ñ\x001e\x0016ÿ\x0000Â_Û7ºý¿üO\x001dî®Åw§Yêº«5½ÎýªÚVôlàÚ\x000b?èËö\øk¨I\x0015¼A{.~Ún¥\x001d© Ý>|¶Ö÷¦Âþ(t§6wÖöÆ÷ì×!nþÍsix@[µv¯gû3|)Ôu
cKÓ¼o¬ê\x001aæµµ×´Û=cÃ÷u¨ZE¨Ù[ë\x0016péÒÜé³^X\E\x0005½ìV¦êÖånÔ5£-cø[âöU<\x0015L»\x0013C\x0005<½bÖ	áóÊT¾ª±Êqq¤\x0017,q1\x001e!;ºd'\x0018´Fh¤´Zm¥ÜS¾¯ÝÅ3ö\x001cýô?ÚSáíS£hzÆñ\x001bá\x000fì÷\x000fìÇàm2ÓYþ\x0010½+áµÍËéI.5½Æ©©kÚf{¡éúö¸-²îÛívwÎòÍß³?ìEð#öRý|Aû2|3Ó|C}ð»Å¯ÄcÄÖ¾.Ö\x0013WÖõø£ö|IeyªXYèÿ\x0000ècFx<9§ù\x0010ZÜÚéz]Û///>Ùyyûÿ\x0000\x000càOú\x0018<[ÿ\x0000Z_ÿ\x0000*èÿ\x0000Ið'ý\x000c\x001e-ÿ\x0000À­/ÿ\x0000u_	¼Z¯Aa«V£S\x000e	{\x0019çT¥\x000beóÄÔÁ'Í\x0007&°ÕqøêâåË\x0019â*»Y´\x001c4­tíuºµ¥ÿ\x0000\x0007Û_ç_ÇðIßØ¯â'ìyàOØ_ð\x0016°\x0007>\x0015Üßê_\x000cµk?\x0012Ì\x0012ü\x0007â\x001dWVÖ5ÍSÅ\x001a'îmïe:±¨k¡Ö-ï¬uM\x0007Tµºû\x001dæ>Ç£ýÃ¿eOø!oìGû*ü\Ð~;ZMñãgÅ_\x0006Þ[j^\x0005ñ\x0017Ç\x001f\x001cYxÛÁ:­\x0006Òõ\x000fGðç|/a>±§m\x0007HÔ5ßíïì»°o´{;KÛKKÛOé¥þ\x0003|\x000eÆöÿ\x0000\x000câ|ñüF½ð­÷í<\x0004|MáTñ¥Ï´ÝcOðö¡âø<,l³7¬õÍSKÑ.5ñbtË]WR´²7úð\x0006ì?á|	ÿ\x0000C\x0007ð+Kÿ\x0000å]zTü=ñ²\x000f\x001b§¸á3*¸Øê1â\x0007Ë­62¤¥/ÞÂX¹I¼R¥R\x0011Ä?hëFnsmòWë)jîµÚü¿.ß+ô?\x000f?f_ØàìãßÚ[â/Â8ü[\x0006»ûUüN\x001f\x0015¾%[ø[¶Õt«\x001f\x0010ý§Ä\x0017ñéþ\x0013³KÓåÑô\x001fíO\x0016øûì÷Óêwñ4û\x001fÛ>Çggggó§íÿ\x0000\x0004}ý?lï?ð¼|soñGá¯Æ;&ÇC×>#|\x000fñóx\x0013^ñN§Ù[Xix¢Þ÷Gñ\x000e¨Ï¦Ø[ÛØÛê6úU®©u¥ÚÙYÞ^ÞYÙYýúNÿ\x0000Ið'ý\x000c\x001e-ÿ\x0000À­/ÿ\x0000uÊ\|\x0000ø%kâý7áíÇÄÙàñî± ê>(Ò¼\x0011?¼+\x000fõ_\x000ch÷v\x001an±âM?Ãf5Ý\x0007LÔu-+OÔ5{k#¦Z]êVw·bîöÊ¹pþ\x0018xÃÌ¥PÅÒ¥T¡O\x000bS\x001d\x001cò1\x0015pÔèÑÃÃ\x000fV\U£
\x0014iSTç\x0019E{*r·4bÐ¡ZüËâÑ¶ôÓK¿ëÏW×ù¹ý¿à?±¯ìçáoÚKÂþ\x0014ºøÇâÈ¿j÷\x0006¾)k?\x0011|}§ø]ÿ\x0000?Qµ¼·Ô%ðýý´htÍföêîßU:ô\x001a¡¶Õt½\x001cÚYÚZYÞÚ^zàÿ\x0000²Ä/\x001f±çÁ½{OñâøCö!ñ'|Mðq´ÿ\x0000\x0014Ãm¬j\x0017>\x001f:|\x001a5\x0003£É\x0016±¦øªÿ\x0000G±Õ¼Oý\x0006v.í3£^höìuý\x0011Ã$ø\x0013þ\x000f\x0016ÿ\x0000àVÿ\x0000Êº?á|	ÿ\x0000C\x0007ð+Kÿ\x0000å]tVðëÆF+ëµ±ñ+ÛÇ\x0013íÞyMMWX\x0019e¢åb¤²úµ0¤¿q)ÁÝI¡Ú»{µ¶Ûùwïçÿ\x0000o\x001fß\x0014þ\x0018|>øÝð÷Æ\x001f
>+øOKñÏÃ¿\x001fè\x001fñwuÈôícJ¼xÞHä0Éoug4\x0017QÁ}§j63Úê^©kg«è÷wvwø£ÿ\x0000Á·ßðN];Å^µ©ÍûCx¯Áº.­&«¦ü\x001eñ/ÅñqðÞ\x0019$ÍOòôÏ\x000bi~2þÌþ[\x0018Újw<ý®îð\x0013ëÓþ\x0019'Àô0x·ÿ\x0000\x0002´¿þUÑÿ\x0000\x000càOú\x0018<[ÿ\x0000Z_ÿ\x0000*ë\x001c£Ã/\x00192\x001a8\x0019>2\x0019m\x001cSæ¯K	ª\x0014åQ¨ÃÚ¨Så:Êîjj\x0015Ôb­WFÂ\x0015 ­\x001d\x0013³~oK·ëGÑXüäÐt\x001d\x001bÂú\x001eá
év\x001a\x0007<7£é¾\x001fðþ¥ÛCg¦èú&go¦iz^g\x000f\x0015§X[Ác§[ÁþkkkqÇÓ²ûìø¯j§þZx{[_Ïìn??/ú×Ð\x001fðÉ>\x0004ÿ\x0000¡Å¿ø\x0015¥ÿ\x0000ò®ºß\x0001|\x0000ð¯ÃÏ\x0011Ãâm+Xñ
Ýì\x0016vb
F{\x0007µ1Þ$I)òíôûib<¯ïH
íÍkÂ~\x0010qÖQÅY\x0016qÃ`V\x001b\x0005á1¸ºÌé×«ì©âiT­5\x0016¹êÍCNíÎsRrºå#J§<dÖÒNOÉ.×o­½tì{å\x0014Q_×çXQE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0000QE\x0014\x0001­ëZGôm[Ä:ö¡g£èZ\x0006¨kzÖ­2[XizFi-ö¥¨^Îÿ\x0000ºÎÊÆÞ{J­½²$\x000c×ùÿ\x0000ÁI?à¨_\x001b¿à¥¿\x001e´oo/þ\x0010ü\x000bøSsñ\x0017Ã¿³/<%¤hö3O^>¼ÐíµO\x001e|Cñ&³o®ÝKã¿\x001a_ü9ªÿ\x0000gh_Ùz_ô¿²xrÏí§ÄºÆ³ýlÿ\x0000ÁÊ_¶\³ì\x000bª|\x000fð¶­{§üUý´/uo4]ÅÍ®§£ü\x001dÒìm5¯Ú\x001bÅHðÅn<\x0007soðè@'¶ºm[â~Öì¸\x0003üñ|;ªjº4V±@®¯\x001bè~\x001bk\x0016ßöe×¼Us\x001e·ªiqÆ¿òÃÂ¾\x0017ý\x001eÞ\x000e9¼³çýÁì*Åæ5ó¼û\x0001Åá0·ÃåQ¥Vµ8Ë4ibkÊÔ'N¥ZÔ0|ï
C\x0011R§³JXe\x0003óÎ>Ìó
8J9~U¥­^Õqó«JIC\x0002ù¡M'UMS¥S\x0014¡\x000cEHÆ3§M):¤ê5ì\x0013x¯ã$2Ã¬xöøÇ£êºzC-¿Û¼Z0Ðf&ÿ\x0000¼Igya©Cÿ\x0000?\x0016ùµÇ{Îµ÷\x0007ì½ûMk\x0014Ç^
øe¢Gñ\x0003á¾¥kSëþ\x0017æÛÃ¾0ðæµ5Ý«Ûiw^]xoYTÓ/t­cF\x0017×V¿j?lÑï>Çx>ÇùâO\x001bØÚx?X×Ä\x000f\x0015¯ü$\x001a³"fIôí\x0016êòÎ!\x0018OÝu+»9çÿ\x0000Qÿ\x0000\x001e¿c¯}ýíeðï¾:ü@ñmÆíOUÔ|%\x001f/Ûb[húo|+yâíSD°ýÜ~N£ÚøÄ\x0012'ÿ\x0000Jº\x0017wñù_»gu²\»4È£Fµ\x0015ö¸léb1O+[<»\x001f_
V¦\x0017\x00117N5ñ\x00184j`ñ8ZtªÖÃÑ¯\x001cLêa)Kòìº93\x0003Ë6:²ÂªtpÊT¨¬lqÿ\x0000]ÂÑ­Nz4Óp£®Ö*yJ\x0011«V:QöSïÏü\x0012Ká-ÇÆ_ÛgâWí\x0007­Zý«Â_²_æø{á[É·ù7?\x001f¾<é°_ø²óO#x¦À\x0005­àÐõ\x000fùzÒî¾#Wèü\x0015\x001fÅ\x001f\x0012üw\x0007ìÿ\x0000û\x0014ü\x0011Ö<\x001fáÿ\x0000ÿ\x0000´×µ/\x001ax«\ñæ¬k^
Ñ>\x0006þÎ_Øÿ\x0000\x0012<qmâÍ\x001fÃ\x001aï4\x001exÏþ\x0010\x000f\x0000}ÇTÒÿ\x0000·­uícGþØ³ûeá='ü\x0011ÓáEÏÂÿ\x0000ø'ïÁ¿\x0010kVgñ§í\x00117?jO\x001d3pïªüsÔ<7\x001fÈ?sýðÒ?\x0000hgÿ\x0000¨_Nµç\x001aF¡ÿ\x0000\x000b_þ
û\xé¿}¥~Ì\x001f\x0001þ\x0003þÊ>\x0017hÞI­Ä?\x0011SPý¤>,\G²O*\x001dJËûWáÎ¨\x001e.¿âWküÃãN$\x0016øÄI6ªÑÂWÄK\x0000¦à¨á*ÑËòÇË'ïB8´ëÍ|3~ÑIY»ÿ\x0000jpÎM\x000còl¢áVt¨ýbqåu±0x¬\÷dãí(B[ÅrÙ­Ú\x0012¯|Y{û\x0010üo?\x0010üA¥ø«ÇìµñÓÇ\x001e,Ñô\x0014ð®âO\x0015[|\x001fñ\x0019×5Í\x001fÂÿ\x0000lÔ?á\x001bÓu-RIçÓô·].×ý\x000fíþv\x0007Áÿ\x0000CÃ²MÑøWÃ\x0010ÎpéVòÉ÷Ä÷\x001fýzþõ?o¶?\x000bÿ\x0000à¶\x0006¤<¿öiøÙ¦á\x0012\x0018fñ?u\x000ciøùûd×ÚÄ\x0010[Ûþ¯á3Á\x001aq±Ñ£WwÙíì4Õ_/ï¥½´ïþyýqÒ¿¨>Ø:1ã\c©F\x0019m-"¢¹¦ñ³$bb¯x¨¨énk»£ñ?¤]u\x001c'
aîÜÜñÕ5øù#\x001c\x0012rNÚÛäõê·þ¿àÜ9®¿h\x000fÛ£Ä\x000e&oìß³'ª£í\x0012|gÖäY9ÿ\x0000L\x001fÙÐ}¡û.y=¿¬\x00103æßåü¹Íïü\x0013³âGí\x0011ðçÆÿ\x0000\x001f¼Mû>|xñ?ÁOÅ_\x0010¼\x0003à=JÖÏÁþ\x0000ñÿ\x0000¼Gmà¿\x0005Z_[ÉâO	øóÃú¤Wh÷^0ÕN¨iZæªÚÚÝ^Y}³¡¯ÙÍGöîÿ\x0000ø*ïÂ:EçÇßÙGÄW¾4Öæðæñì¯ã
\x0011õy4McÄ[Þ^x'ãg©M¥øUû=¿kkuö_±Ùÿ\x0000¦}¿|zã\x000e\x0018\x001e a±9î\x001f
\E¨a*`sµ\x001d\x000c\x000cWµ­\x001a¸L³\x0013ö4©RªIâ"á
Ug(òRÝøÅ9>QÁÜ7ãjâaÂå\x0018\x0018ÕK\x000f:s©F\x0015¤£(^ü²¨îÚWºkªôÔIfr¿Æ}NwúåéÈxÎÝ¦Ð¦dWimoì.¼µÞïû¿å®Ïëþs5_Úïþ
¥â8\x001aÑÿ\x0000hÙ_á¾\x001d\x0011u\x000fÿ\x0000²Ö«â\x001dWfüyÿ\x0000ÂÎø¹â\x001d.	¿ëãJº´ü9¯
ñþ8üaò/Ú\x001föáý«~,iÚ.º¿t?\x0010ü
øi©'_±Éðÿ\x0000à>à»_±Íþ>¹uÓð¯Äq^#p\x000e\x0001)Ïiãg\x0016¤ðù^Yb+»5u
¸Ü\x001e[Ië¢y\µåNÇÓâ<@ÈiÅû\x001f­â'f¹U\x000fc\x001dmkÎ´¡\x001du·¦¶º?\x001f\x0016xh|<ý¥>$xgËòí,<WñGÃöpî\x001d_á×í\x001bñ§ÁrYÇ²?*òk=/û\x000fí\x001eG?eû\x001d@\x001fðmÿ\x0000¥ð¯ü\x0015ËHÐLÐÁ\x0017ÄØÿ\x0000ã¿¦2y>ã^?³/Ý\x0018§\x0018´kéÀìÂÚ×í	ZüÏý½gß\x0006<3ð\x0017Ç_	|\x001b¦øCÃ>\x001bñÎ»à\x001f\x0017C¥É'?ú}ö®j÷º¡¨jºÜ¾+ðÕõ[û«µk£í£ý,c×?à¿\x001fôïÙ×þ
µû%üSñNGÃ\x001b=\x0013ÇÞ\x0006ø³â±øk üwÁÿ\x0000\x0007|\x0015ã}~öy~Ë£xZ/~,ø¡ë\x001aõÀµµÒµ_¶äc#ý\x001dð£Ä,Ä?¢ÖmàeZrî ^°Øøáéã0Î\aC\x0011AV§G\x0011¡	WÀâ]XF&ºp%Îã8·üïìå?\x0012òìu
sT³,6cY%v)e¸\x000eÜc(¹ÁÐÃÎñ¹y\x0013KOõ\x0012¢+àÔ*	¦Þ\x0019%d\x00082Ë+¢E\x001añw|\x0000;g8Éç\x0007\x0004Ý·ÑnÛÑ%¦­ôÜªÜÜAi\x000c\x0017\x0013Coo
yM3¤qD«¼B¨ã© t\x0007
xÿ\x0000~3h:Wm¢\x000fíÛÕ$	"Êi±¿8ÅÞ1wÐ¨Êsr\x000f\x0015ó÷|[¯ø¦o3X½y ó\x000eola\x0003GoÉQ¾Õr:\x000c\x000e+¶65h{ó·Ù~êÛyY÷íß±ãbóÌ&\x001eñ¤ã¨ºBQöqµê=\x0013×hó;nâÚ¿´ø¿ã\x000cH%°ð¦É¥û²ë7\x000bþ§û>Ýñöbæà\x000bQ¨ºÉ\x0015à3\Mu<×73Mqspþd×\x0013;Í,Î?å¤?oÿ\x0000PªN[8^?úÝ¹íøûU À\x0003ÍxµjÖÄIÊ¬´Ó+á¶²»ùõzj­¯Ìb1Õñs¯;¥ðSÚÃ\x001f+nÛë'd-I¸\x000e\x0000ã¿^¿F01éý*DÜÍµWs7Ê«Ó×>¼æ³äõåc÷Ù¯ÏÐqlm\x001fx/ÞluüqÆ>ÎWÛ§ôÆzÿ\x0000_>9ÿ\x0000ÇÁ=<\x000fªøD·øÝ­üJÔü7¨ßhzü\x0011ø3ñ³ãF7té~Í¨xOñ§Ãþ ð&¥¬Es'=½®¾ËuÍååxûÁt?e(î7Ü|\x000bý¾-ü8]Çü&Ó~Æß\x0012ÿ\x0000á\x0018û1ù#¼Ø¦O\x0014\x000b9e9?ñN}¨ÏStéµ\x0019T§\x0006ß*R"îÞÞü£}ÞÍÚÚÛKú4²|Þ´yéå¸ÉAÅM?«Ôqþh¹Es'ºk·Cöj¤B¤å°¿çÓ$úúq_\x001eþÍ·Ïìqû_æßöwý þ\x001eü@ñ$?iþÐø{ý¥7~+èÿ\x0000cCöÏíþ3·ðÿ\x0000Äm7ìb?ôü8-éó½}z	É\x0018àt5¬ ÒzI[ºÝwGV\x0015hÏ­)ÒoxN2¶]$h:qFíÍDþ&{|¹ý:qÒ¤\x0005³Ã#uçøÿ\x0000/óíÚ²¾¶òOï¿ù
I´Þ¾løÿ\x0000öîøûâoÙ§öañÿ\x0000Ä\x0002Ã¤7ÄmCRð7Âÿ\x0000z&ÃÁ>\x001bøñÇ\x001bøQà\x0018|@ÖoâW£ø\x000fÁþ#ñüQ¨j³ÚéÙz_ö=ååÛ,ëøÿ\x0000þÃ?\x0013ÿ\x0000à\x001f´ªü\x0004øâëï>\x0019ñÒê\x0010~\x000eþÐ:Íé×\x001a$Ö®cÕ~ ÛxÂ4¼Õ-¬þ0xkÅ:ýïtã}wy®èZüwkMbîÊÏûëøÁðá÷Ç¯\x0010>\x000b|Wðí·>\x001cüPð·à¿\x0019h7Cb_èõw\x001fg¸_Þé\x0005ö¬@~Õ¥ê¶zÅ³¼³³¯çö±ø¿¤~Êþ\x0010Ñ?aø,Woÿ\x0000mOÙwÇ~\x0015ÖGì«ûUx?ÂwïÆ;ø¾\x000cx_KDðÿ\x0000Ç\x0002xBö/\x001e\x0014øËðËAÕt¯'öøYq\x0019iWgXñ-¯{ã\x0003eÏÊ°¾\x0006¦
»öu\x0014ã_\x000f^ÜÞÆ¤T£	rÉÆ\x0012MNQg%Í	IBPªG÷_\x0001¼RÇøUÅK:ÊéPÄO\x0013©æ¹v!(C8Ê*UÂâ'%S©S\x0007^l%\x001cf\x0017\x0015J3tñThºÔq\x0018u[
[ù¶ý~\x0006ü"Ô>\x0000øgâ~·ðÇÁçuÛÏ\x0013êçÄZæ\x000e±xÿ\x0000iñÎ°wözÇÛ,,ï!µò?Ò,lmn~Ëkiþþò\x001fsF\x000ct|oÛuâ{»vûûüqâ\x000bËybÿ\x0000¦3D1_e~Îµìðe\x0006øâÿ\x00003Ãw
ß;âÚÿ\x0000þ&Qý¢I£Q7Ùn ûG^y=+â$þ\x0005d_½¦Ï"²õtUÔ\x001e9#ÿ\x0000®ÑH~½½+ùâ8ÜV?\x0013Ç18N&\x0014¸Ë
G\x000b\x001aøÕÖ\x001f\x000fF·\x0013S¥ ªÎq¥J#\x0005\x001at£N¶Õì¿ª~px\x0015ø¾¬ù¤×ùVIºSÂu\x001b}½ø)$®üô>³ø
ûA~Ñÿ\x0000²_Ä
Sâì§ñÏÆ\x0002|kâXlãñøut\x0010ø\x000fâ\x0014:m´éð²>\x0018x·OÖ<\x0007ã\x000bÍ6Òâxt}fûJµñNkuyi£xÈ×è®§ÿ\x0000\x0007
ÿ\x0000ÁIô¥²Ä>\x0003ý¼q«5q^x®ÿ\x0000À\x0019¼'¨kolÆ/5]\x000fBø¹q¡YêSEä}¤épZéþ\ììÍ~Híù±óç®Õ\x0003äÓ÷~_ùÏç\ß-$ÍfÚû­ßwËò
»<ÏÞcòÏõ¯¤É¸»=Ë\x001c\x001d,|¥ä¥J½:UãKùU)UªÂ1WåjrG[FòÛÞ ý\x001dü%ã<N33>\x0014£C<¬åÆf9F3\x001bTÆÍÎ.­\^\x001f\x0003¥ÄV¶­«:µuíjâ¥)I¿°¾=ÿ\x0000ÁS?à¥_¶þ­áOÙ»Qøïáz\x001fí\x000fâÝ7áT^\x0007ýü\x0018þ\x0000µÃÅFK_\x0010Iâ!Ö<añCSð®áÓª^øGÒüG ÚëÖ¤h÷èw®Hý|7gû4|Cøð\x000bÀÒ]ë¿
~<Oÿ\x0000
ÃM²]x\ø)û6j¾$ø;â\x000e[Ëåýª÷Æß\x0015b¼ø·ñ7Ä\x0016ðóâ\x0019êº=Øÿ\x0000Ðô{;??e
xÄ\x001fµïÀÝÂ¿Øí¨|-¹¹ø¨Zkw/g
ÿ\x0000¿á$ðüa\x001ep÷ûcMÐ|Y}ªéöÿ\x0000ò÷wkö>+úPø{ð÷Âÿ\x0000\x000c4\x000b\x000cx.Þþ×DÄþ0ñÚÞjW:Ûj¾9ñ>©âß\x0010}âæI%³Ó¦×µëí?Oóókö¯±×Ñg\x0019î+\x0011ÂÓÅb#.çÃ¸Æ\x0019Ð|E*Øj´é(F4ëQ¡çJ¶*4ç\x000bFGùÝâo\x0006pÎMÇ<GÃ\x0019\x0016S\x001c³'Ê0ù~[O÷ø^&½lfMã«æ\x0015qXêØÏ\x0012êæX¨8)Ã\x000fJ\x001f\x0006éÐSs­SðôüNÔ?iIôß?³Bë\x001açÄo\x0013Mm\x001e±â«¯\x000cxJðßÁ?\x000f;ý\øñ\x0002ãXÒôø´ÛÍ\x0006ÖIÿ\x0000°<?>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/CPPREVENTIONDESNOYADES11JUIN_2019_004_.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/CPPREVENTIONDESNOYADES11JUIN_2019_004_.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=%]~!V\x0016ÏMÏMÏO/íI/N/O¯\x0007ÓëÅj0½)½=v@,\x001fJï>\x0005¥/ûÒ\x0007ÓGÒÇÓUé³ÒÇ\x001db;7vZ4Ïg¬L 6-ÓP²M\x0013YKQfÒ¦ÄJ×LKßS[bKÓ­S§R§\x00123Rc{2m2\x001d3·\x001fìLL÷L¯äL¿L4383,SIfúÅåsd²:3&3^´ËÒ3R;3S3Óâc333³3/g\x0016¤gd*\x0012qNSíÿïù¿è¶Fó­¦ú)©°|ØV^ÉB)RIY)emÉÚaRJ6l\x001cq`ÄmRvìD¶WÊ\x0007RTvXÊ1)ÒnhÕÐªSR>)Ñ;¬\x001d\x0006\x0007È3\x001as£±¸ÑØÜe\x001cÎ¼.w\x0019?·\x0000gÞ\x001cn1¹Üb®áær-7yy¯ãÌÛ;ËõÜV¾dù\x001aÇ\x001bbL|ï°¤³å+	Ëg7ù\x001cä^ßoQI/BÅÅò¹Xhù_¡U\x001bê·þ\x000bÒ&¡íW¡]ÇÊç¾/FÅäó GG<:n¨ÿ!óY<GhðUBg?OÅòyþoSñJ¡µb×ò( Ôð³ÄØêQÿ&õ¨ÙßA-n¹
µ¹]¥õ¨Ë\x0017£¨ø½w¡^ú\x0019î3Ô?ú\x0005i°Ð°«P¡¨Ì[ÿä\x0017£¨Ìmÿ\x001eñh¼¡èqó\x00199,{Ê¦~¢\x0012\x0003ý§ýmõlÌôh¶ÐËõhÁU¨¢\x001e-ý;hÐ«Ð\x0006¡-W¡\x001dõhÏ\x0017£âcòy õqUºâSBxzG¿ \x0010:}\x0015:àÙ¬Ïê/F!W>/\¡bû
]Öiì}6\x0015j!u¹WUBÞóB­:|¶}q^=Ê¿
iÛÎòY Ý¼Ï{¯Þ¿FÅ­Ú]º^z|B}êäïºù¶6_zy,\x0014.¹_BJ>?jã¤î¼zþ¾ì£¡u|ûðgût9§ÔÍ\x0001µkØ[[ºgÔÆüfõbºÚÔâBY¡Ñ&Gèþ\x0012hä:¦Ð\x0014¡r_Kt¾$O^\x0010köÐ|/¿7ñ\x001e\x0012Ôæçìi¡åf¼¡U\x001fÄ¦æKµ	©]ÏäÅø.$}\x0008©Ýã=j[öÉÚ=ìH\x001d?°elh]XöpC¯_õç©Þ\x001c]ÞSjç©Üìá&¦oáfuÚ7cáßË½½Oþ\x001dnéÉ\x0016×¡UW¡úûò®«Ð¾:ûk=ö2UÕ¡zûëåýò²O¶,ùì^Ø¦äÊ\x001eXg¿»³Â½¼OÙ·ÂQoIþ\x0008Ë\x0014=(,ûO8éÉe
ëþÁºícÖSXöð\x0018Âã½uá­Ú¼¨±¥v4Ïj×H¹É[Úþr\x000e¬¿¶ê­«Úürym{ýêÍù´+íÑõ\x0016½)<Ûô;,{RX÷ C^NÒ1È\x001e\x0014^êµû[9¨~\x001e¿Nm¯/×å^¡¿ëþV>-ø,}.OÖÍEurd|n§ÓÕø@sô\x0000\x0001m\x000céÙFç[Ï4\x0003:z2Hoá5yç\x0001r6
W{yLætÆÖTÏ"ê{õw&\x0018ÐÏËeºÿÏöòÆìÑ\x0003ÄÞ\x0000±\x0017þ\x000e¸\x0019 ö\x0006H
P\x0012c\x0003Ê¼üY/zg³ÚsÓ+y\x0014[
ú8ÕäKúU?\x000f×ËÁÏ0µyXÇ©¶´NbjÀÌ:í§yãébüÅKÆ6`¶'ë^ú]ê\x0005K®B_ëë.SY\x001dª®«=£ýOÎf+J>{þÚPråÜU÷Uâµ]SÇ'õ×¬¿ðÏ­«ðËg¬°®ëC&\x0017]ÎWGM\OxñT+Wj/þôSòJÄ[w\x0011Yc ¡ºë-grD$ßÄg¤ÕUÎ1Bv\x001e\x0015\x0019"\x000fªý®Þg+kP×DDöºÈÀ:ëOô"\x000fõ\x0016=:R*6{O-*tÌQBc=Û2È\x0004o~Dîtg¦\x000b=_B.Ì\x0011;\d¡P¥ÙÿÈr&,\x0013Ziòqd­SÝ\x000b#\x001b¶	íôüµWè\x0003sO\x001c3~2ú\x0011Ù;"çjÌ\x0019PómnÊ\x001e\x0010m`Hí±ÏHlG\x001b\x001b¿Gå\x000c\x001amaâ,Zhü¨ó\x0018míÕuðlt6¹<*gÄ¨\x000f£{ä<\x0016sXTÎUQ9OEãÆ¿Ñ¬ÇdüÑÑÞç8\x0013\x000fQ9\x000bEå\x000c\x0014=":ãJühîÖó@TÎBQ9\x000bEç{r/çFå<\x0010]lìë:¢r\x0006®¯\x0013«µ÷Ú=Jøè&£\x0013ÝndúmF\x001b\x001bmþ¿ocüozWæ¶q7é_TííÖÏ-+§@¨P;¡"¡®B=ê|ö\x0016*\x0016\x001a(ô Ðp¡R¡´Ð(¡±B\x0013&	=#4]èy¡9Bó\x0016
Uz´Lh¥ÐZ¡BÛv
í\x0015ú@è°Ð1ï§þÊç'Bç<Rý\x001aËÊu<·Pc¯o§¼O\x0019CnS¡\x0016BF~ù³µP\x0007Ó×ÜÎWÆÛMè^¡>Bac'wy^îP¡â<+4Zh±;QhP¹Ð\x000c¡\x0017æ
Í\x0017Z$´Øû\^ç³VÐzïs¾×n}úMBÛv	í\x0013:(täÊ§ú'÷¸PÕßñYë³Æ/1\x0007ui !µÏ|\x001döt×£óæ;_ûYÛ¾Öî5\x0001¡Þ|ü&W>¯i&ÔÒúy¨_(\x001a\x001a\x001c\x001a\x0016*	%¡¡1¡ñ¡²ÐÔÐ´ÐÌÐìÐË¡\x0005¡ÐÒÐÐÐÐÐÐ\x001e)\x0007BBGC'B§CÕ¡\x000ba;\x001b\x000eóÂùPA¸\x0015ÿn'¥(ÜU¨G¸w¸8<0ü`hfxx¨"\\x001aNGAcÃ\x0013ÂÂÏ§\x000fÏ	Ï\x000b/\x000cWÉ¿W×7·w÷?\x0008\x001f\x000e\x001f\x000b
\x0012>\x0017®¸\x0006Æ¦\x0016ÂHëHHçH·È½>°Ö|PdhäáH<LLÊ#3"/\æFæG\x0016FF\x0016{e¹«ñ«¤¬ll\x0017~WöE\x000eBG¤\x001cR\x00159\x001b9\x001fµ¢\x0001¨a´ì	Í¯ú\x000b÷\x000b¹üâB\x0003~q¡!¿¸\x0010ä\x0017\x0017\x001aó\x000bMøÅ<~q¡)¿¸p\x0003¿µÐ<X\x0010¼Óº1Ø)ØÛj\x001f\x0005ÓVÏàÈà·­ûcOZ¡`Yð)ëàÔàÓÖ7³oYCëë­IÁmÁÖ\x0014~}aÑÿÇ=óùøFó}5ú/,òH2Ka\x000fz{T\WUSø Ç«Þp/õ(ídÝBÉºu\x000b%ë\x0016>ãéN÷ôUö|Ïñ>çy´°Î3+½/³Ú\x0016o²«x_ñÁâ#RG«¤->\x001f²BPCS·Zn\x0011i\x001b·\x000cu\x000cu)>\x0012ê\x001eê%kUY|VÖe4T"su\x001d¿´añ\x001b\x001b6¿±á\x0004E\x001b¼?ØÇò\x0007û\x0007#V\x000e¿·Ñ08"X*ó	>jÝ\x0014\x001c\x0013|Ü*\x0008N\x0008þ³U\x0018\x0012üÕ*¸6¸Öj\x001d|;ø¶u{ðTðÕæÿ±u_Í7Ý¯\x000b\x000eèðÕ\\x000bß\x0000þNø;á;¹ý\x0004;ûÇ"/Eþ#øéEþ7àûÁ¶wÂ\x000f¤í\x001d\x001dwvGaGÛ\x0016a¸ÛIÑÿMýîðyn/Eÿw\x0004£óª>÷"üÅuôa
òGá;Áwïlzëá\x0004ðÛèÍÿé¶\x0015<ì¨-µß¤WÔ½qeèyZyç\x0000|.µ\x0016­^Gò\x0018mCH®ïIÛ'°v\x001d=é	úÑéNR°#|Gø"·\x001bò,|\x0017, \x0007;Q[Dí×Ü{\x0014ýÒnh*ßÉù\x0004\x001dãéX[5;Ü
ä\x0006»Ðcs%6Å\x001bö\x0003úD»½¿Dði¿¬n{\x001c|Oð`êølðEôé§m):I4_ôÇ\x0004\x0017aózøö+ï;Cí,ôïGÿ9ø<¬\x0001\x000f£ÞýwÛîfÁAî^}ò¾$ÝýÝUÇªVô\x0015\x0001×):\x000eý±3Dõ}\x001fb¡\x0002~	µ}Ñ¿~\x001bøcàFðMôOºÿ$aÿ¿	NãÖ\x000eøß\x0016¾Få¾RÿvÁ#®D¯:ÖIÿdÁ?+úy\x0012A§\x0008;ù`\x000bÚ&ÀYà
î%j\x001f\x0011þ]Eû üZp\x0017ø¢;\ç(p\x0012\	Vå`bN3yVg3h>\x001dÐßP)ï	6ò°\x0012,\x0007µí
hn¢v\x0019\x0003HÊÌ7ó®¼àJ°\x0012,\x0007«@ÕïæDZY\x0006ý?Ö¨/_\x0003.ò$`9X\x0005ö±lð\x0013EiE¾\x001f<CÛY\x001e®\x0004+ÁrP-ÌÂ\x001bÏ©3\x0007|>\x0001\x000fcç°öÙwÒ¿Cð,xÒÿ
8\x001a\x001c\x0001\x0012	þSbá\x0006æë\x001cÁ\x0013\x001eN&\x00066jl ©ÁB
\x0016j°PCT\x001c¡ö\x0008#d ÃXnöo"fv£Á\x0011ànE"á°1å%ÒÔÚnør¦×>Äîæ¡ÅÞªQj·@Ò\x0002I\x000bVw\x000bµ,¸\x0019\Cd.1N0ñåà,¯­®Çù\x001bôÿÄ-Ïz\x0005\x001c
\x00007§@µy¶\x0007ñÆ.¬í\x0011þU\x000fÕ{Ûéç\x00039j­A\x0013ið\x000cúßbfG3Z{\x0006þdà\x001fÔÃ\x0006µW\x0016\x0012¹Ó*æ#ßÅÌîB²5Ò
, \x000bÝI~{:ÐZð)ä\x001fÎÂ?¯;ï÷ä´F&\x001fª¦¯?%ø%²ÙTð\x0006¼±\x0014v¬÷à\x001f\x0000+¼\x001c(û\x000fûvb`·Î~à\x0007ê
?¹Ô-Q\x0004V)\x001fh§¼sØ® NÞ\x001d´Zå_®mÝ¥ôJk³&\x00074s¶Uµ¹5µu¤«ãVøYÔþÞ\x001bããô'IÛ¡ÿ3üLñ\x001fWÿ(J®V4óÕ> û£=\x000eýFðÐ/ó²G%y \w\x0007Ö`\x0012ùàõà­<e?x)§ÎfÎb«µ÷ë,ËÊU>ÏCµyç	ßÜ¤\x0000ü p£Î/ùöUâù!òö
Í¢þ=Ää.Õô·&örU"s§1§ùÜ·Ã¬b¹+ËÀ¼ìQ\x000fK\x001eXC­aU\x001aÜÌzY\x0003nf\x0007Ñ\¯mÅoÓj2+h2q¨OùöÊé¯µNU\9«ønb÷¢ÕªÀ§ä\x0007Õïª½HVÉ1]é\x0012áïéÎBÏ¼ü3\x0019M}ÊBp\x0016¸1pò\x001f²r\x0007è.ÃÊ=HíZ\x000fÍ
U~p -µ§¢ÿêá.Ýëèí+º\x001bú~ÍOo/"\x0003ß\x0004_ÀXèIÉ\x001eèªýnPð¸\x001eíæ2_É*:ks\x0019ã<]kÎì·+:\x0005®Hì_aù%4Ï`ù?àÿ\x0003¾/öw¨ç\x0005Õr1}\x001e¥h-?\x0001>äo`é¹BíßÃLµÁÂN³ÿê9JÎ	ý4Â§qz9áf\x0019ÆÛW©KÏwó¬uXË×º¿Qoøñû)ó;N÷w§©ZsÞSÞ½\x0007¾\x000fã­b\x0014+>e%æÓO²½½V{ètfì×x½Õ\x0014Â·såìêÛÊ¨éÊiÐw/}ÛF[¢ÝîæÔ5N«Áz\x0006¶\x0007;\x0014|Á½_,÷`\x001eW¸qOû%á÷bí#\x000fÕÚ«Ø¹\x000bE®+ø¡¢DÝMÊÄ\x0003N\x000e~xVcÀÄÀqW½·\x0014\x000b­Á\x001fa'
ÿ\x001dÆþ
~îÅ\x0018³´ú\x0008<\x0008fÔcrÊÒQLÑS«ð×hT°\x0007=µRú9\x0018;\x0001ÿlÍ\x0000^4êèÞ¢?ç\x0003·(úÏïë\x0017Å\x0013ÌS5í`7ÿ~ö\x0011åûS(vv[±³\x0015;[±ó[ôè'UbFÒ\x001dIÔZ·ªµ'ïë\x0017Â«~#s²å)ë\x000crêþÚÖ\x001e\x0002?ÄðjGp\x001dòBð&$-\x001fÎ\x001bØü\x0010kgÁ
p	¸ØÕ\x001d°/6ûb³/6ûb³/6ûâ¥¾jÙi£N\x001b<°\x0011\x000b\x001báßSG!^Gÿ\x0015aÆ«¼ôm\x001evæÑê\x000c\x0016TÒ~~êávVöaÿ\x000eV«ÎÎdWO\x001b¼Û>e³»5Ëí@5-s?ÊÙ¾9·~à¯°Ö\x001cûÕà>p1m}h»
ùGà\x000eW¢4P¨ã
T*ºYÕqwúWËJçY1~Ý§ã«Ñxà/è\x0007Õ«JÖõôv7qò!8Ó»§ìgv¶\x0010ûµýxøÔU&\x001eh¥3å¿AðeîD6-ÑÜ
?§w7ñÆ\¼®\x0012Ça¦\x001cäýÑÿ\x0010ü\x0014¬\x0000·p¯\x0008\x001cã)*¹¤ó"ó«ü1\x000fkøU&rT"PÌ\x000c\x00163ãr¶¦:¿{eÔ­b@î­\x0017ßÕxñ]¿Ì²ó\x0012'¥íê\x0013÷nÝwÜòÎ\x001bà¿ ¯Ðóû*Y\x0011}9\x001bë¹è+´
q.z\x0014Íwô¾énÕ,íptè}ÙmLí/hõSÅ\x001b7ÅÂ\x0005p1ú%ÄIÎó¦úÖ9\x0004ß\x0017ì¤è\x0016è\x001c¹ÄF9úo\x0013Qï+ú\x0017¢Ó¨ÈWMçYföðYjo§¶\x0019ÑÒ\x001b\x000bæ®º\x0018ìÇ³zr*x\x001d°zÌù\x001d¤Ü¸]cOùHg°\x0007-à|8\x0011ÉÓjª°³\x001eÜ\x000b¾\x0007¾£àNð	ö¦÷ÙgW)úß/\x0003W]«Ù¾¯ç7·-§¸÷=~%X	UZ«7/ÿ	üß\x001fÍàÝ\x0014472nÎj\x000f+ÁrP-¼æxZ½©\x0012A\x000cTÿa¢b8gÝ'À\x00108á\x0018Î}¸ru[\x0011?oñ,4rÍ¥.\x0012A\x001dÅq,ßêáJ°\x0012,\x0007Åÿv½\x0006Þ&f¶úJ«k±6\x001fÜOÝ<Æþ$üJ\x000fW`9µ:®'ÕWî:åsn
ü\x0018\x001cªöiåz¨þáà,V?8=9õMôð\x0015p48\x0002$ôä\x0016hÀ¼\x000bÍ>\x001bý·ú·
ÿ±ÿ\x001dÁ\x001f#ßçáhp\x0004¸\x0019¼CãÚ-H¶ yVÏºÎÏuúþ³tKð\x001fÀ'8[\x0016p\x000fº³k;NÅ3¨'Ø\x0019z\x000e´û`ù\x0017ðOr{]Aß~üwjÇ
ÑÿC*qoôð\x0015p48\x0002ÔõuöÊýÞa\x0003¯×\x0015a\x001fÅÚµà|N\x0008XGy\x001f¾Mü¿Líû\x001e¾\x0002\x0006GÑ\x0011º7ëSüïè{EAÕYM«Õðyx \x001a/}à¯d-´ÔZÜXéÕ=®\x0012ÿ:í»\x0012þcx8qÑè?É,\x0018ÔÛë»z{\x0015ohTìt'Ñ7X\x000b~5=_M­É¢=ÀkýyÎ¿yà\x0001á\x0017¨Ü3ü;ðI/jæYK.Î4ô_gÅýut-\x0019µ+\x0019x.ü[%®¤\x0003ó²\x0005Ü^ç±ü\x0018ÖÚÂ¯Ôû¯Üpµv4k\x0015s×içZÜ¶~eÞälÿïÜnÊY¡'XAo²:î\x0002¹\x001d;K°ð\x001aÖ,÷iiµ\x0016;¿Ô¾¹¼§r¹\x0011Ë\è\x001eà.ü¸òb¡
ÜËº®\x0002÷²Z«À½ôö\x0017Âÿ'®ÂK\x0017ô\x000cà¼DvÚ
ºôí-½#»?\x0001Ç*:¼9q¶\x0007ÑýU<\x000bþMô_¥í\x000fYéå*	¤5\x001b\x0004\x001eEþ\x000eúÁ!àü@µbÎ0ÝéÐù©FNÎðMÁNX»þ\x000bô¹î\x000en\x0013}OåÞáÏ'~·µoþS:ûn\x0013ÖÎDsß$\x001e\x0016û·i¨ÜýÐ»Së\x001bËJî8w³®ûê\x001eÓ¹{ºGù@\x0003#©=ÇµZoÄ\x0012½\x0013zkmN?vùº$_­\x00017Öº\x0016ó\x001e©-òCÈ\x000f!ÿ\x0018ùQäï#\x001fµßñ\x0014sóÈÎ¸\x0017\­Ïõ\x001fÖ\x0011\x0005x\x001fë,çÆ½=nêÛÿ¦÷kÉr#ðð§ôYóÒÝz×\x000e4bÕW±º×+'wgî ';©½sÑµzò|xµð
\x0019CkËÀr/{h«ýä·õÞ-:sÏ¥ÿä«ÀSÂ¯¤Ï÷»7
þ«¢[ÿ1Òß2;ãÐyÈÓTIKîA¿Ò1º×ë\x001dÙá­²cnm\x0007¸µm#'\x0017?´`ÞÛs/û1ÑÒÌ/¹(K«O9!ü\ïãþ¬+7\x000bw\x00069v\x0014mGÑv:|>Ëþ\x001aO,e^^åÖ\x001fgDßç»\x0015á"ù¡ÞÊÝ¶ôóèæôÊ?\x0015~¢ÞÍ7:a¡\x000bø-=/É¹QWåj÷\x0006Ý\x0017èáGÄ¹¹MßG$ôeìw8ke\ÃÔN`,8AÑï.!sêøºòþñþñôJý9\x0018\x001dó÷ud3¿Ö:ë.æ÷a§1þ_M\x000fª÷nç\x0003øõ¶îÜ	ßWoëÎÏ\x0018ËuÚ\x0013?+È}Èm.yôó±àSD{BÿÊ\x0013ø	gÂGô¶.£ÓþÜ¨wvg\x001a6\x001f÷P}Ø\x0008|HïéþÕà?ê=Âù/\x001d{ )\x001e(æ\x000e~V%zOw¾\x000c¿Ú³ôç\x000fôp9ò?ñ·\x0002õL 5Oï\x0001`¼#Á.ÞÙRwÕæ´Ú¡7wû7zsw¾óþð0=|\x0004,fve\x001eC:k\x0012½ö\x0012$-èç\n1³Àç2µ6Î,½UI­ÜDü·q¢Þæ÷À7ýO\x000f\x000f!X\x0008a!¾hVq×k«\x0012·-ýHæº2ã>ÚÚ·Ïp_þ\x0006÷åop\x000b»ûÝõ®$ úv\x001aÍ÷ybSÎí±Ö^Ûº½á'\x001bD2Y­	®C^\x0008ÞÄÎ.ñïftYWnÎËØ¼\x001bûft=ÀïêÝSúÏ(°Ù\x0016m\x0019i\x0015#­R_¹\x000f©å@oÿ\x001eð{\x001aEXXf\x0010ÿÂ÷Ã\x000f=\x0003a|¥8ûû\x0007zQõÝ»çYA¿ÅÂ\x0019¬u·Ò^IæQ|É½UðawÈÇQ¹/ËýZk\x0005[ éáN\x0015~´«}k|ëÞÄ\ü\x0011ü¢³]Ñ¿SÑm\x000fNÖ¶þ\x000e<åËØì\x000fv\x0003\x0017b­Üø
\x000b\x001f­ñðàcñr¶ª\x0007r£øó\x001c÷¾GyKÿò9\x0001v½G´Ö\x001b\x001eÞfoøò9[ÕZnTO&þ\x001aîw3.\x0013\x001b]åÞÌËËðyXèÎÏôýS¢þwóeÄÆÍº9ÇttÎ\x0012øÆðeè\x001c\x0002ÛÓª\x0010Ìc6j[ÿ\x0002qÿBäÐ|Y~VyûHî\x000et\x0001_ÐxC³¹Î¦ÄÉÓä@Å]Ø\\x000c+}ÎÃßU¹h£·çX¡ü¥þÒëÏr.ý
~þ-\x001b,ºô\x001aüí`¹þÜ«}\x001d\þ\x0004xÍÀYÈMÛ¥ðK±¶\x0018ü\x001dßÁ\x001f@Gäö\x0003ôh{ðip\x001cØ\x0013<\x0000)úlEë,"ÐRtð/Àë=^ÿj°¶gÌ\x0002ï§ÕsðyÔ\x001e\x0006Ï#á)ö $\x001fÃ\x001bûÝyz5ø>µ\x0001×aÍA§?8\x0004ù\x001e¯}¨@²\x0004I_øK´j\x0003\x000cÜ\x0008¾	D3\x000c\x000e>\x0000_\x00036\x0003Ô´Ñ!ýAßú³J\x001cã\x0016`¾J|Ú÷\x0010ø.òðkÁ]è\x0018ï=PsXèlæBy»'8\x000fof\x0001¾\x0008´À\x0017ÁE5z:Ý`ü¯\x0012ßÏÁ3Ôþ\x001aËsÌèào0G§\x0006ÍX\x001c¦WÇàw{c¹qåJÛ	´¨\x0012\x000bÿøB³¨&Ê(æÒó¹ôv.}Sä\x000cx\x0012ÉÍá[ùàQØ
,\x0000ï\x0004?âY&\x0002ÿ=_ÓKp0üÙ©&&Un/oW£·ï÷à»!'*ì\x001cÅ\x0000\x0016xBÑ]êÀcÊû·3×g.½¤mDÿ\x0007&6°ö<}ø\x0014¿à«\x0007tUÊjFü+Î4³|ñ\x0013]qt6X x\x0003Ø\x0013,£¶\x000cke*\x0011ª¼\x000fò"Ðò°@÷\x0005ø\x0017=TÍ(ÞÞïy¾Y\x0007*¿Êç¨=K«»è¡ð³\x0008ÿû>03ÂH_5ñ\x000c\x001fGg\x0005^Úc²úÊÝÇÌúÍog6¢¿±æ^}+\x0005?\x000e;ßEÑa\x0015;ýÀsøm\x0016µÌ¦ï&ä'Õ¾\x000bô9÷ò\x0019Q.^ªQ¸2¼\x0011_ù~\x00008|ÄÃ\x0002ÚÎÃê¿Í=Ô¾\x000eâOë4£>\x0001¾\x0002þúÒ\x0004/2Æ\x0006HÞ¿	¾Y\x001b\x0008¿\x001f§¶¹ò1*Dr/µs©\x0007vçNx³ÒóÕcöíÈÍø\x0015ø\x0012\x0013XH`yç%åMfÛÁºÞÄjýY «ø\<\x000fvL&Ü	þáR'õ$üv\x0003ÑæWM\x000eä)»³úÜI¬­ð^ê+ý4ûÈ\x0002²Í{ê+÷\x001eø>È«°ó)<Ð¾\x0006l\x000b\x00165ÎVð^vºKÂ·
\x0015fEd\x0000û\x0005¼Ô\x0003½ É\x001bÄ­Í¾ ^;ÃÚ÷½\x0006\x0001M®h
þ\x0008ü\x000eò±ð½À,\x0011ø$ò×½½@ãyÇ«\x0007ÌÞ1\x001c}r]jö\x0014f3ÿ³ÀwÁµ ùÜ÷\x0006óu	þ-ð<mwùÇ¾á`\x0014/UÃ7¢v\x001d|pHMµö\x0010ùØ	.\x0001\x0017{ë×<K#+_Í\x0018\x0002öE¾\x0011¾+ú±Æ¾ãÛÌÓk
vF\x001fÜiæ:¢\x0005ÞWM6Þ\x0007¿\x0018ùPxWý@%\x0011Õ\x0018ü\x001e\x0019óI %ÖLF\x001aBoß¼ô²þ	\x000bj~Àx\x0005}[ÀóäáAd%àÃh'\x000f7d,fÊóòj\x0001±­¡;îx¯;Y¥\x001ay#ü°ÎCÍ½\x000eý=T\x000b\x0015Ô.ñ°}g$>, 
¨Ý\x0001¾IÛ¼c<Ë;ü\x0016¼il\x0011øh6ô¾]£ßNéÊwr.ònùvý£ï]E»¿ÿnæîÉ\x001b*ßï]ýfÎ\x0006ndüµÅî\x001d¸VW:ÁÙ©¼ý\x000eü'î\x0001îªüÍKÏçÖ0»Î¾pÚ¸\x0019}ºû\x0013=c(oW¹ÒhTt>q\x0017Yú~I4­¾4­ú)ú+y§\x0011\x0000;¸\x0013umb¡Âs¯3\x001c\x000b\x0017´60VÀÎ|?á\x001cëæë;ßU9TGy{þ\x0017.öHEg´s\x0008k¢imSô\x0015VHö(º§\x0014e\x0014\x000b\x001fê(°Ó[ß*Ø[\x001dj*ú§`á\x001cx\x0008\x0006.wô}N\x001bE{­£·û\x0002½×Ûç4ñ\x000f£ú-²*±ö(o\x001dT\x0014}å·©¾¿;v
hÕÑÑïïµræèì;\x000bèÛb}§M«å`7$­Uß¿VG½híP$ó	m÷ðP¿GäzÖ\x0016¨èÛJå}écû\x0014ýgõWoàmÛVo=µú
äN¾#|cV¿Õ6Ð&Ø^ßºØkíç4ëÚß×Û?Õu­¼ýý`­Ý¶Uß7\x000b\x001c¤è<Î6ßu´g
Þá<+ø\x0006|;ç5ì\x0008ï;&míûiû\x001cü°vF£Ô÷\x001f<ý¼ý%]Ë¶FÅP»\x0019ýl¬ñoóW~; ûìët-Û·éZV}_\x0014|@Ñú³¢ã`¡\x001fÖØÍ5gÚïbSùjûCÝ5à\x0017£\x0019ÆB
m¿\x0002\x000c|Ç§\x001e^A\x001fNø¾*\x001d|úSò¢H.øô¯Ì\x0017}gu/°;j^µ'ñW{ýeÙ¾ÃÚ\x001fEß}vSØ«tçòý^÷\°\x0005ØAQ¬	Z\x001fÂÏ\x0004ø\x000e¡yHW:üAß\x0004ÝM°ù®o¡à\x000b¾ßê~¤=±>ÂÂµ'ö\x0005ËÒo¡»§\x0015\x0003yðÿ	ßo§_\x000bÿ5ä?G"vÜ
Mw\x0018Ø\x001b<¥è\x001c\x0007(ú\x001b"¿ h»à\x000f´Fç[ýh¶\x0001ÃÔ\x0016ÂÂ\x000fEó\x0018\x0012äî4Åð·Qû6x\x0016	Oqþ\x001d>\x0001?	\x001cd
8^ÑGoí\x001eÔþ
þ0ý	 3\x000b¬¤v3ü\x001bð\x0004\x0007ÿ\x00119\x0017ik¬í\x0000¿\x0007fÀ÷Ðì\x000cÏ¸ÿâßßDö'ü\x0004kqZuEs;òáÂ¿OVÁ?\x0001¾
ÞN«ÍÝ'p£\x001dåÝSà%3GÊû\x001b"¹\x0000¯#$ÏRÞù\x0016X
ÆÚÃf¾hcf
\x001e\x0004>6³þ\x0012ð\x0018µ9-¼Mßî@s:5þáé_§\x001bOT"{¢òÆcøÙ]\x0000vçxÛ÷'jñ¤½\x0016\x000bDÿ\x0005p\x000búóÁ=`\x0004dÔ®´Wèg\x0019ú·b\x0001ûôø±[\x0011{× \x0014Á÷DÓÄX/0¨û3mûeúé Ó\x0017\x000b¿\x0004óßÈ¨[ãíè¿H-kÄÝK«[x\x0016¾u^0ë\x000e\x001fî§-¾u§·aç\x0017ètÄ>þ´ï£í
ä¬2¿Õ4Ï2+±¥=ìü\x001a\x001eMûYZDç_@\x0013!xÏ\x0019c"çÞ¯*úþä%eâð.ð\x001eð\x0001Úîï"ð#ð/ÈáY1øo`qùyº¿\x000b3°3\x0007\x001eÏÛä\x0007w!8\x000e\x001cyâo@\x0013!oQû(È¼8Íyâ?x>\x0007{'N@nr\x001akÐ5«ë¿\x000eI\x0013Ìà\x0010\x0015\x000eÖl©È*öiôië\x0005_\x0007+Ü\x0008ï¼d+ü!N\9¬\x001dû\x0013Z\x0011u~³ÌÖ¡Ó\x0000ýy_|\x0010\x000fÒg\x0019(Ç¦é\x0015Qáþ\x0016dM¹Ä\x0007¢ÕwÑ?\x000fÏJt'\x00073§\x000eþ÷\x000fGNrÉZ.ñ`ÕÝ$¸\x0006ý³ÄÌ$âÇä«J\äg\x001d9ÿÍÞwWUtk¯ÙûÌÉÞû\x000c!\x0016ô.$\x0010#M\x0004\x0004¤(HSz1 B\x0008\x0008 ED¤t&"6T\x0004A¤4Þ{ïM\x000c$¹3ïÙzI>ÿÿó»Þ{ÿùï9OÞY³fÍì5kÖ=g7Á	{ÎË¨\x001bSÌ»ÀL\x0005`K¢\x0005\x0010kM\x0001ÂzåVAXøeÃÚ\x0003Ð¶ÄØ\x0003(µ /à£DEàSæêDæ\x001eÄú0Í|[Ô\x001cX\x0013xÑ 8\x000büÔ íÏ ·ïS\x001c2­\x000c\x0006ö@²$°\x0001J\x000bn\x000bº\x0019$O\x0003¾5Ò Ì\x0007º\x0018J\x0000Þ\x0004\x0007W\x0011?î\x0000z\x0010°\x00118}
2ôWEéFÐGÑ\x0000dÞ\x0003.@éZÐ_¾\x0004|
ø<ø\x0018HEÝpko\x0002»\x0000wA2\x001e4Æ%îâ¯^þì\x0006\x0007ç#´Ö\x001eµ*@r\x0013ø\x0005@/\x0002=
:Y\x0002º\x000fp\x0006°\x0004êæFÝtÈT\x0003=\x0016¥=@·\x0006_\x00021À\x0015`Y\x0002v\x0005>Z+qÝ<èa¸ç\x0018¯5\x000bX\x0005u1jv
¥\x0018\x0011ÿ\x001eu1ûöxà:ÈÏ\x0004î\x0000>	\x000c÷0<ãáq
\x0000\x0016A\x000b\x0018»­Ð&æ\x0017
D@þ$d>\x0001ý\x0018$Ãs]\x0003ZA\x0006³¡\x00022O oÑ(\x0000\x001aiíLa´\x000cÍ\x0008ô_|ÒX´\x0003Íðêà/\x0006\x001fÖkm 3Z\x000b[xØV·\x000f\x0019>\x0002\x000b(\x001d\x0007ÄìpèAô\x0004NAkáy|\x0018X\x0019ø4J·.Zåg¿ÿ\x0016Úl\x0007ú\x0019´Û¸\x0000ÉÑhg\x0012hèceY³ÉÀg!\x0013¾â/Àð.CéK@hRäÂ\x0015_\x0006B{\x0012\x001cë\x0006®Ø\x000fü°7õZáu\x0001·³\x0013\x0005Ä\x0012GÖxxc=ò«G]+	ø1p>øa¯\x0002Zl\x0003g=èÃ¸:,AÀÂùuÔØa\x000fh9d\x001cÈO\x0005'<³+Ào\x000c\x0001¢Ï\x0002Þ&0\x001cm{y·\x000e\x0000±
,Ì>CÏ\x0003\x0003Që5È§ÆÚ±ú\x0003÷9\x0015Ð¿Ý\x0012|¬n\x000bÀá	­À¥U[aOr\x0019tx¦0\x0002ú\x000fÀBD\x000b l^\x0001ÂöäVØ?æÚ?·a«\x0001èPbD\x0001Z\x0017ð\x000f¢¢A:À÷9\x0015ÙªK\x000bÏ1ÄhÍ©ûîæ´AÌÂIB]N7¿\x0015ùÍóib\x0012ÎR¸áðsà6|ó\x0005_[\x0018NKö\x000eV\x0019ðo¢n\x000f5\x0018è	º#°\x000eZ»\x001cÄuù§\x0019ÉQ{Ãéà\x000cõO<Êà·uæ\x0014¥\x001eÎORp\x001e\x0012³àÏ6uùvp:¢t"h\x0016.\x0003ó1vÏ \x001f\x0004
41'$|\x001dN-âAÇoM]#Cé8¯xÀ??ÑHÇ]\x000eí4F­8!©d8ì\x0001kªæg÷ÏF\x0016â\x000cd!ÎC4¦M7çTÒ·\x001aß\x000bº¹·åÛ
ÍjnÒ Þ\x000bÉþ  +¡t5j\x0007'*Ü\x001a8ÇÓÌ~iÈD¡V,°-Jw\x0011¥1 SPú\x0001Z(\x000cþ\x001cð\x0013@Di\x0000t'ÐÃÂ}04Û\x0017î\x0003Jû\x001a:­qúmm	EÁùriÜ\x000fzº¡E\x0016ÜË§\x001b\x0014U×ÁI\x0001=	G\x000cÚ;\x000cZ\x000c|\x000e\Ò Av\x0013ôe`,ä	2£%CP>\x0007Ý\x0016ô|\ñ\x0002dúÞÒD´ã ýUÀÙ~ÏMOº³\x0004ï#\x0018©¨R\x0005Î ´eø/ì¦å\x0015iæ$0?Zîî÷Áð\x000f9\x0012U
ÒAÔ]\x0004\x001cÖpâÁOÓÄÈXEÓÌ³j¡´zÚ<iÔ@ó#!\x0013g8üj¸ÏhyéC /8Ë
ÍÆß8í\x000bcFÞZÒÝ¦TÝÌ\x001b\x0013m¾þçNOÑý\x001cÞÞBßöZv\x000få4ø3au\x0003L-kõ\x0003]\x0010íÄ¦ÝÃ7\x0008÷>#
êÝÁ£àäÌiÐQ\x0006ÅãèU<fm\x001d®Õ\x0017-wD\x000f\x001a\x000cXÐmñ°¤?k¬ÎÈð(Ã1ïßÑ\x001e\x0012«Ì4c	äüiCÛµ!ãÓ<lÐv\x001e\Åf¢ÆØ[\x0018u³4s6\x001eÎ\x0007í¤556fN;\x001f\x00006ÄÕ×A\x001bµ@·5ì&jÅ¾
Éuha\x000cèQàï66_\x0014\x001b(}\x000fýhí=p\x001eä\x0015Úã`¾Âvþ7ÀX¡\x000fGa	aK\x001eoF­ï\x0002\x000eCKwà ÌÔMÈ§¡2¸V%ÆÂ~_Á öïf^êú2\x0006OÂ\x0006v åíaýûÚ0=¯±\x001c®²\x001f\x00026d¢Ý{X\x0017÷`{×a	aI£·|Ö¶}\x001dldZ\x0003ÇÓ\x00141¸V\x000c$·¢Ö:ÈL\x0006.AiCýÓc	 Ï1Æ-àç\x0001þþt\x000eKb¼ÝÃ£6Úpj

øZ\x0005«6fXg´<\x0011~`\x0005´·Ê¿i§\x001cf*{ØS¡ÖeÔZ\x0005É4X{,$\x0017Ã2£
\x001d(HY`iË0ã¦ÿSÃ+Ú_#¦µ£ÂÀ\x0017ÑÃ¾ÇËXc®²Ù_³téçáµlZÓÞr"zU\x000eµÂ~Õ´<\x0004§Ä©=ìª½ééOkú9XÝyÈÀ\x000fð:\x001aº
ùO°üeM3Æaß\x0008Éà7æÇ\x001bÔ~i\x0019|ñ*á\x0019\x000f\x000c¢4?F]\x0003ã=\x000c\x001c
¼kb¾ª\x0001\x000b\x0002ëù2ÆË
ðçÑx¶qÆgj{XÕ4\x000fVq\x000fßäÞ­Þ=ßÃ\\x0018ú\x000eô6Èb¹À1£V	G1øËï
JXD\x0011g!Ù\x001e\x0018GW\x001dê=ð!øÀëðÆÃ4A?+ÁJcaÃÛaÕðEZr\x0016$ügà'B²\x000eèúàÏFÏw^\x0008~í´À\x001eX}×ÍÜ\%mRúqÌWc³Z1§Ob\\x0005Ãq-m5¾¯Ïfz\x000fÆXòC²q\x001aö<¨òé6cüÕtê§¦e"¼ç,ó;\x001dÿ¤Ñ 9à;Od8i-ÌSÖiÍÍðiø=H\x0003:\x000et\x001cèòæ9í´xó,½æ÷\x0000\x0001è\x0017ÌócæÉ|M¯\x0005}\x0019ôEC_ñèºKÍ[nÀ7O\x0003êv>Á»Ynáý6ß\x001b4¿# 2¿sO6¿æH6¿\x0007Iû2hÞr#ß0o¹1têrC§
\x000e¼kÞr#¯ö\x0003'
Ê+ \x000föåYÐwAe\x0006d\x001b`{óÞ\x001bÓ·Ô£á>\x0007Þü,ÐáZçÑçà\x0017\x0006?Ò ¬Ñ\x0001^Áx t1Pÿ\x0008$kàZ\x0017Áß6ËS		sRPÚ\x0002ò#qÅMÐR
p ®^\x001d¥P×HÆ\x0005].°\x0001ü; K¡0¿(zò\x001cè\x0012 G;{\x000c\x0006%h¼É'\x0018Di\x000bpF µïÌ;pÐÂ#h!\x000et\x001cèòæ÷òZþgÐÙÙP«\x0016ú\\x000e}nYÞB)ú\x0016\x000bÎ\x000bÀµÀ(Í¡±¬ü\x000côçhs\x0005èQù
8\x000eüÅ w¾azhÞÂ¡{kì°<¾\x0017©é ¡7óMzZ\ê9ÓTÌùæ]s®ÒÔåFaNÚ@`~ j¡¸Ô5DÝT:u\x001aèhs5èÝ /£\x0014\x0016º\x000f3hÇ<Cä°áÁó$Ú½Ú3¢;õìð\x0012
HlÔ¾$}ç÷Lã\x001aùIßY¤§S6ò(@y¨\x0010EQ\x0019z*R5ªGM©nãizÞ vÔ^¦Þ4Ì\x000f¤¼T\x001e ² [©Nõ©\x0019µÖWmLýi°ö\x001c]©\x0007%ÓpüÁp\x001dEAí3P4ÅÒ#Tjhïü<½@¡×éMê@/Ñ+ÔFPv\x0012u\x001b5ªCõ\x001a?õd~jÛ¤qýü4	­äÀ;C\x001fÔ¾¹¨n1ªÐãô\x0004=IÍéE\x0012TÐ\x0000\x001aB\x001d)zR_\x001a:\x0011tRMjH¥èmðsR¤ÖC\x0001¡âºÝòTªR-ªCOQ\x000bj£û]¥4:Q7êE¯Ò(¿\x0007YÉ¥Jè\x0016âé1ªMu©\x0011µ¤¶dÓCô\x001c
¢·¨3u§$êgÞeÚ®\¯vâ9`k`G`w`2p@»6Iâ-à\x0018àdàlà"àvmzu\x0010«\x001b[;ûGÛµëÖC\x0006Þ4hq`$0\x001f°4°RûÄ.¬ÚÀ\x0006ÀÆí»¿ÜÍj\x0006l
l\x000fì
ì\x0001L\x0006öïØ³M;k0p\x0014p"p&p\x0001p1pn¸µ\x0001¸\x0015¸\x0013¸?±{ïnÖQàiàEàuà\x001d`AÛJ|¹]¢í\x0000#9ùtaO»0°$0\x0016\x0000¬\x0002¬\x0001¬ó²i§!°	°9ðE`G`"°çË=Ûw·û\x0002\x0007\x0000ô0üÀ1ÀÀ©ÀYÀùÀE½ô\x001cÙK«\x001b[»{uéÞÑ>\x0008<\x000e<\x000b¼\x000c¼	LéÕ­]\x0000\x0001\x001d`40\x001f°8°\¯^±q*ÀÀ\x0006À&ÀÀö\x001aË\x0005\x0012IÀþÀ!ÀQÀñ\x001aË\x0007¦\x0002g\x0003\x0017\x0002\x0017\x0003¿\x0007®Ñ\x0018\x001fØ\x000cÜ\x0001Ü\x000b<\x000c<	<ß«wÛ^«ÀÛÀ{\x0006%\x0007\x0006ªWï\x001e½d40\x0006\x001fX\x0014X\x001aX.IkRV\x0000V\x0005Ö\x0004Ö\x00036\x0002>\x00074»q®}Oô¿
½ÎsSÿ\x0012ÅðâÐÿ;ÚÚcØÚJ
þ·å,äÂ4Ó^/3þ"
íç\¼sùïPL{ï?Ç¨¿\x001c3Âu«&Ó\x001e\x0013\x001fÌ.ñ/cÖ¿yÿ\x0001#ÿ2æGO\x0005Rv\x001f\x0011ÜÏSÿ\x0014TÙ)ç¿Hå\x0000Åu|*ø/¥¨ð¿\x0016¡¢ÿBÊt$ýçøÏuÂt\x0004ÿçå/aÞm$é¨?fÓbZC;é$Ýd\x0016fY<«É°ö,
aãÙl¶­a;ÙIv[<\x001foÀûñ|2_ÀòM|??ÏS#bDIQIÔ\x0013ÍEWÑO\x0014Å\x0002½\x0006Íµa\x0015
3åÛfÊÊ\x001f}_ÞÊT\x001eÐË|/Iv_ÞÏ÷fe¬¯ngl?ºyÆ|6ÊØ~¶èLù¢äëdÊ·ÌÏ4lû3æ³\x0017Ïo)ß7cÿóÌÌX÷ûù"¥3åËÜ×ë¯Hl¦òÁÈsí\x001f¢Â#,Ö(\x0016\x000fÜÒ6]ûª¢>w»î÷Ó~zõÏ¤KÆûiU?­ã§M2ö¢äÈ£,1_&-£|Ùf\x0019óqf¡\¹LùøLùíò;2å/fÊ_Î/\x001fui"!:S>!£|BLùÌåõ2å\x001bdÊ7Ì8\x0015ëiTZ3íØ\x0004êÈ¦ÂÛ¶Õ\x001fÒ+u<1;ÒÎX\x0011E\x0001¯®ZçÕQkÔJµJs\x0002ì\x0012»¤å®²«ÄØuv8»ÅnPÕUu²Ôãêq\x001d7=pQKùâ<gÓ\x001có\x000b"eú#Bºf\x0019Ï®ïFzÒTZGG)Eë>\x0004u¯¢½§{u¼Æ\x001aëzÏh4£Ô>9¿¾[Õ÷<UÔY\x0012<R÷é\x001cÒuJßiñl:\x0001é:µ¸ÎíÕ¸Ní×¸AÕXh\x000c\x0015TGu_WêÒcH×©ã:]¥ó'®»Oò¤/yÊ<íKñ%ïo}ô·\x0001úû$úû{IC<F÷¨Mèáfôp+zø{Évì@ÉNp\ô2s¹yr;Gj­fÓZ\x0015^mï	­õj%\x0005tViM	2\x0011	0é¿âºþ`=ªÁ:e¡,å¥AøCXsÖ²DÖãXd¯°$zd#é]6}@cØ5vÆ²Ûì6cwÙ]\x001aoL&ð\x0000\x000fÐDîqÞçYyVÄ³óìô\x0001ÏÍsÓd^\x0017¢)¼\x0004/ASy,oDÓx\x0012ïM+x\x001fÞVjïß~ä¯ó\x0001´\x000fáCh
\x001fÆÑZ>§uü}þ>­ç³ù\x001eÚ BÚjîx\x0011Oi¢¨Ié¢®¨Ë¸&¦1a%Y\x001f2Ëng·cåì\x000ev\x0007VÞîdwbñv\x0017»\x000b{Øîe÷b	vo»7{Äîc÷a\x0015ì_\x0002ÃYEç\x0019§
»â\x000cs\x0019Kó"½ZüU¯7\x0016j\x001fêÊo\x0006Fñ\x0014ÅUP\x0004U\x0001U@dQT!\x0011©¨""«*¦(UB\x0010\x000f¨RªV\x000f©D6UV\x0015ÙU\x00139T¼\x00179UJ\x0010¹T\x0005UAÄ¨JªÈ­ª¨*"ªªª¼ªª&ò©\x001aªxPÕT5E~UGÕ\x0011\x0005TkÕZ\x00144ÿRX\x0014R\x001dUGQXuVE\x0011ÕMu\x0013EÕËêeQL½¢^\x0011ÅUoÕ[P}T\x001fQR½ª^\x0015¥Ô@5PVo¨7ÄCj¨\x001a*Ê¨áj¸(«Fª"V½£Þ\x0011qê]õ®(§Æª±¢¼\x001a¯Æx5QM\x0014\x000f«IjHPÕdñª¦
jº.*ªj¦¨¤f©Y¢²­f*j®+\x001eUóÕ|QU-P\x000bÄcj¡Z(ª©Ej¨®¾P_\x001aê+õx\}­¾\x00165Õ·ê[QK}§¾\x0013µÕ2µL<¡V¨\x0015¢úQý(êªÕjµ¨§Öªµ¢¾Z¯Ö\x0006j£Ú(T?©DCµEm\x0011O©mjh¤~V?§Õ/ê\x0017ÑXíR»Ä3jÚ#¨}jxV\x001dP\x0007Äsê:"ªKêh¦®ª«âyu]]\x0017ÍÕMuS´P·Õ¯¢¥6Þ6ð_\x0004ÏÅX
KÑ^,¥kïas}\x001fufc\x0005°Î$á1\x0014ä\x0005yAàÅyqrD\x001díÝ\»­Ý<»½ÝBvG»#)»³Ý²Ø=í\x0014i'ÙIÕN¶)JåWùé\x0001UP\x0015Ôk¼°*LÙTQU²«âª8åP%UIÊ©J«ÒKQe(FÅªX¼§¾<åQ\x000f«)¯zD=BùTEU\x001eTUeÊ¯\x001eUR\x0001õzL{+ã\x000bÁÿ\x0016VO¨'¨j¥ZQQÕNµ£bªê@ÅU'ÕJ¨DH%UwÕJ©\x001eª\x0007VI*\x001eRÉ*Ê¨¾ª/U\x0003Ô\x0000UÔ SCÔ\x0010*§©aT^P#(^R£èa5Z¦\x0004õz\x001eQãÔ8ª &¨	TQ½¯Þ§Jê\x0003õ\x0001UVSÔ\x0014í¯§©iô¨¡fPUõ¡ú\x001eS\x001f©¨£æPu5OÍ£\x001aêcõ1=®>QPMõ©új©ÏÕçT[}©¾¤'Ôbµê¨oÔ7TW-QK¨ZªR}µ\-§\x0006ðOÂÿ5Ô¾s
=¥}ç:j¤6hïù´Ú¤½mcµY{ÛgÔVím¨íÚË>«vh/ûÚ©½lSµ[Çfj¯\x0019Ï«ý:f4WÕajwÄ·TWÔ\x0015j¥®©kÔZÝP7è\x0005uKÝÂ¹WøþQ<|m	m[6kÅZiv\x0007Öõ­õ-ñ@j D°j°ªöÃÿ=Ö§}à¿­ïßÖç[_\x000c¬¯¤Ùm±.\x0003ÿ¶±ÛØ1»«ÞÏG²<^Ô¶Q\x001eªD5¨\x001e5¦æú~¡«Þ¿÷Ó;Ë4&Ó,Z@_ÒRZEh\x0007í§ãt®ë=±\x0000ó"úè\x0015\x0014ñ*ÒÞ\x0011ý&G¼´OÄë:MÒÔ\x0000¤I\x0011\x0003ö\x001849â
¤}"ÞÔio-7\x0004iRÄP¤½#ÞB\x001c1\x000ci\x0011:MÖr#&E¼´wÄ(¤É\x0011ï í\x0013ñ®Nûh¹1H"ÞCÚ;b,ÒäqHûDô'®K\x0007kì\x001d1\crÄh}þF&`ä½"&úyß×Ì$_3\x001føìkf¯©¾F¦ù\x001aákd¦¯\x000f}Ìò5ò¯9¾Fæú\x001açkd¾¯}|âkd¡¯O},ò5ò¯ñzü½"¦C#³¡\x0005S#_ø\x001aùÒ×ÈW¾F\x0016û\x001aùÚ×È·¾Fø¶ò¯¥¾fùùÞ×Ìr_3+|üàkäG_#«|¬ö5²Æ×ÈZ_#ë}lð5²Ñ×È&_#?ù\x001aù\x001c\x001aù\x0006²\x0012\x001aY÷75²Å×ÈV_#Û|l÷5ò³¯_|ìô5²Ë×Èn_#{|ìó5²ß×È\x0001ßV\x000eú9äkæ°¯#¾fú9ækä¯¾FNù\x001a9íkä¯ÍÐÈ\x000ehd/,åøßÔÈ9_#ç}\ð5rÑ×È%_#W|\õ5rÍ×Èu_#7|Üò5rÛ×È¯¾Fîø\x001aùÍ×È]_#÷|¤ú\x001aIóm%=¬\x0019ÂqXX3\x000e\x000fkÆ\x0011¾fÎB#¡ÐH±\x0014ó\x001aM¿qÖJ°\x001d|h \x0012\x001dE'ÑU¼$zÞ¢xU¼.\x0011b¤x[\x0012ïè»àãâ8)NÓâ8+Îóâ¸(.Ëâ¸*®ëâ¸)n\x0012ÌÿQbÛÙv}éæ×¹¢¾¨O\4\x0014
Iö¢\x0003Y¢³èB\x0001ÑSô¤ H\x0012I\x0014!E²Þ	ô\x0015}É\x0015ýEòÄ\x0000ñ&Ä\x00141\x001e\x0010KÅ\x0016\x000e=\x001cz\x0018§\x000c1äXù¬\x0007­üV\x0001« UÈ*l\x0015±ZÅÌÈtnát=¼_ÉãM2eºNøìÄ?$û\x0012¥ÍÙHÔ%dE[æ
`Å­âäÞW/|Ýh+ÝÊaå´rY1æÝwZö?¯Ë©0e±¢¬\x0007,Û
XÒ
Z\x0011c¹g,ee±"-sÞeé±
Ô4u¸õ¨U<«ºU.K b®/\x0016ÏÄ\x001a±V¬\x0013ëÅ\x0006±Ql\x0012?ÍbËiÜ9bnqù]³øD|¢õ½Hh?ª5·Z_ï¸¸ðGës´Ô'ºt©X&¾\x0017ËÅ
ñX)~\x0014«Äê?c´>WÌÕ­Ï\x0017óÍ\x0013b¡ný3¡½³îá\x0016Ýº\x0019i½\x000cEÿi«2\x000eèì¸¯3Sï/Z\x0017ê\x0019kÐõìî|1½ICh(½EÃh8Ðëúm\x001aÿ.ú.¡÷ô*\x001fGãi\x0002M¤÷i\x0012} ×ü\x0014JÓh:Í ô¡ö\x0000\x001fÑlCsi\x001eÍ§µ?ø\x0016Ò§´>£Ïé\x000bí\x001d¾¢Åô5}CßÒ\x0012úNûeô=-§\x0015ô\x0003­¤\x001fµçXMkh-­£õ´6j?ò\x0013m¦-´¶ÑvúY{_h'í¢Ý´öÒ>íc\x000eÐA:Dé\x0008\x001d¥cÚã tNÓ\x0019:Kç´ÿ¹@\x0017é\x0012]¦+t®iotnÒ-ºM¿Ò\x001dúRè.Ý£TJ£tmÆ?Í\x001bógx\x0013þ,7åÍøó¼9oÁ[òV¼5¿ÈÛð¶¼\x001doÏ;ð¼\x0013ïÌ»ð®ü%È»ñîüeÞ¿Âgò½|\x001fßÏ\x000fðü\x0010?Ìð£ü\x0018?ÎOðü\x0014?ÍÏð³ü\x001c?Ï/ðÂáøeáò+ü*¿Æ¯ó\x001bü&¿Åoó_ù\x001dþ\x001bOáwù=ÊÓxºvAæi{!,a"("ÄÓ¢±xF4\x0011-E+ñ¢h#ºWÄ\x00101T¼%qâ\x00031U|.¾\x0010_ÅbøNl\x0015ÛÄvñ³Ø!~\x0011;Å.±[ì\x0011{Å>±_\x001c\x0010\x0007Å!qX\x001c\x0011GÅ1«²UÅüßVk§µËÚmí±öZû¬ýÖ\x0001ë uÈ:l\x001d±ZÇ¬ãÖ	ë¤uÊ:m±ÎZç¬óÖ\x0005ë¢uÉºl]±®Z×¬ëÖ
ë¦uËºmýjÝ±~³R¬»Ö=+ÕJ³Òí\x001d%«Ë\x001aòqYSÖµå\x0013²¬+ëÉú²|R6OÉFòiÙX>#Ègås²©l&Íe\x000bÙR¶­å\x000bòEÙF¶íô§þtÒ.²«|I&Ên²»|Yö¯È²L½e²ì#ûÊWe?ýé/_\x0003ä@9H¾!\x0007Ë7å\x00109T¾%Éár\x001c)ß£ä;r´|WïÉ±r\x001c/'Èò}9I~ 'Ë)rª&§Ë\x0019r¦üPÎ\x001fÉÙò\x0013¹P~*\x0017ÉÏäçò\x000bù¥üJ._ËoÌÿ~ßÉ¥rü^.+ä\x000fr¥üQ®«å\x001a¹V®ëå\x0006¹Qn?ÉÍrÜ*·Éíòg¹Cþ"wÊ]r·Ü#÷Ê}r¿< \x000fÊCò°<"Êcò¸<!OÊSò´<#ÏÊsò¼¼ /ÊKò²¼"¯Êkòº¼#)ò®¼'SeL\x000fRÉ9r®'çËå\x0002yCÞ·ämù«Ó×yÕéç¼æôw^w\x00068\x0003AÎ\x001bÎ`çMg3ÔyË}Ííï¾î\x000ep\x0007ºÜ7ÜÁîî\x0010÷-w;Ü\x001dátßvG¹ï¸£ÝwÝ1îdw;ÕæNwg¸3Ý\x000fÝYîGîlw;×çÎw?v\x0017¸¸ºÜÏÜÏÝ/Ü/Ý¯ÜÅî×î\x000fîJ÷Gw»Ú]ã®u×¹ÜÜ-îVw»ÝýÙÝáþâîtw¹»Ý½î1÷{Ê=ãs/¸WÜkî
÷¦{Ë½íþêÞqsSÜ»î=7ÍM÷Èc\x001e÷gy¶\x0017ðNx'½SÞiïwÖ;ç÷.x\x0017½KÞeïwÕ»æ]÷nx7½[ÞmïWï÷âÝõîy©^\x001e¢\x0010\x000bñ\x0008Y!;\x0014\x0008ÉP0\x0014\x0011rBnÈ\x000bB*%\x0014\x0019Ê\x001a
=\x0010\x000ee\x000be\x000få\x0008å\x000cå
Åròòò\x001e\x000cå\x000f\x0015\x0008\x0015\x000c\x0015
\x0015\x000e\x0015	\x0015
M	M
M\x000bM\x000fÍ\x0008Í\x000c}\x0018\x0015ú(4;4'474/4\x001fß>ãl\x001fgì\x0003ù\x000c®=(NÎ?\x0014õt|ß%Ôñ}h.ZÐ>ÑZ¼@\x0007\x0010M\x000f\x001e¢\x0007\x001dÖ\x0011ï
:"Æ±tBL\x0012è$"û)Ä­Ó[g\x0010·Î"n\x0013ßoé<"ÄE«¢U\x0011Nà¹íØ\x000eµ#íH\x00163örcÓì¬ñì2ÎÛo8Ã);s\x001fx\x000eg£sÃ©{[·ÏÕÑþ:EPN*¨c~C½\x0003¬#À
íõ%Ü¡ÄÕFP\x000bAïh");åq×ëü\x001ewÆ}îF\x0007ÜÍÈîÑÔ\x0014ÔûOï\x0000J¿=r÷\x0019¾{@ãOî![Ü#\x001a·¹LMÍ´¨²\x0016U\x000eÓ"ÚJE«¿G\x0013¡sk£q½r3dAI$J²f(É\(A	§\x0008=k±zî*póß*óÊÄym^\x0004¯ËëÅâOísÆQÀùÖù¤sÕ¹ªÛãö|þóÿPÍ\x0018aÿÿ¯ÿ;\x0011ÖÄÐ¿\x001a7ÿ'cfl/;ÊÎò5\x001dLä¬¥cf\x0003D³§ud\x001a8ÙLÇH\x0013\x001dÃ±±Ã_ýÿI<üÇhøÿ\x0019\x0001ï.ÿ¯EÃ?¢tü¾?*V×»\x000f³÷\x0008ï<Ì¾£Þyüæï;îê]ÇózÇ1\x001d{\x0019zÇ¢­ö9m©/\x0018»ü=vòn\x0019ã¦\x0017éeõ¢¼\x0007¼h/ÝËáåôry1^n/×Ëç=èå÷
x\x0005½B^a¯WÔ+æ\x0015÷Jx%ÿ4Ú\x000eýóx«"£Ü¿\x0014u\x0017þcÜUYT¤Êú\x000fÑw½»ÁÝ\x0018¼ùO£ð\x001e\x001d÷¹\x0007ÜCîßã±Ê®r &_ú?FåÔË*§Ê¥bþKÑ9ClöRÿ\x0017¢sCÆY6}+\x001bÃS4kÄP!|ç^µf\x001d¨\x0014ëÄ:QyÖu¡xö\x0012ëF\x000f³Y?ªÀú³	TMfÓ¨5ûm£¶¼'O¢×y2\x0006ñü
\x001aÎßäÃèm>¿Ccø»|,MÀ·ç\x001fð\{{ÜãO\x0017¢\x0019"ZDÓ\]¤y¢´(Kß8QV"âïDÄß»·ÝÖ,k\x001b·³ÚYYNû¶}å²ïØwXb§°Ü\x0001­.'0"ð\x000eË\x001bx70\x0015\x000cL\x0008LbÅ\x0002\x0003ÓX©ÀÀ\x0002V6°0°U\x000e|\x0013XÇj\x00066\x0004¶³g\x0003»\x0003»YëÀ¾À\x0001öBàPà\x0008k«÷\x0006©¬C ]ï
\x0006Ë\x0004Y-ÊÇØ``Iöc°t°,[\x001d\x000bÆ±õÁ`\x0002Û\x0010¬\x0018¬È6ïÏØ¦`µ`5öS°F°\x0006Û\x001c¬\x001d¬Í¶\x0004ë\x0006ë²­Á\x0006Á\x0006l[°I°	Û\x001el\x001alÊ~\x000e6\x000f6g;/\x0004Û±_]]ØÞ\x0008}ÛÏö9mvl¿ÓÁéÌ\x000e:]$vÔIvÙ\x0005\x001dg§°:ÎþÀné8{¥¹ÜmÁ¥ÛÊíÇÛx3¼ã|`èÐd¾:ü|¾\x001b]o\Z±>çû8*QÀß{\x0014Õ{x]>G\x000c.Ò»9HMn¹[®sôÇ<eSÒVSÑá®\x0002« Û|=¡K}V,6MÂS6\x001b¨\x001dcç¶óØyí|öv~»]Ð.d\x0017¶ØEíbvq»]Ò.e¶\x001f²ËØeíX;Î.gg¿°l\x0017ÛÍö°½l\x001fÛÏ\x000e°ì\x0010;Ì°£ì\x0018;ÎN°ì\x0014;ÍÎ°³ì\x001c;Ï.°°,q[ü*îßD¸+îT&Òÿ\x000eÏÒC±8N\x001a,üZ!+Î~rê <úciÍ\x0015Ó#-Mæ¹´²ú\x0013ÔZ­¤÷UôÇ¡ªúãRMªE\x001eÕ×\x001fEMõ'\x000b=OÍõþ°µþDQ{ýy:ëO4õ¢$ÊF¯R?ÊA\x0003õ'^bX\x0016\x0016I¹õ\x001a¡¼,\x001fËGùðtÌz½6¢üz½6§\x0002øV· Vj!È\x0012©0)Âz³d*Ê^g¯ë5= \x0012ìm6J²1l\x000cÖ+x2=¤Wð×T­d?RY¶­§8¶m¦ò8oÇÊKÀº\x001eNZãÔéÅ?ÎÂÖøga\x000fiMååq<Nï\x0018\x0013xùm\x0018¯©wõx=½clÌ\x001bë\x001dcSÞl½ïé@\x0001½ãyIï\x0018;#)èrÆëÌuæQ¤ó±³¢ÝÎ\x001eÊîìs\x000eRNçsBï¥û»\x0003¨\x001eC¨°\x000cTBG\x000f©ñãTVûñÝ\x0014§½÷!zX{ð# }ø	zDûñSTAß[¡Ú£JÚ_ ÊÚ§_ÒsdÿªÌ[þ1MþXÊè±äË0¼¢5#\x0012¼¾±0"\x001b#
èý]s\x0018WPïÞ^¡\x0008ËÁ¸B\x0018W\x0014Æ\x0015í,r>×#úÒùrcù1ÆÎ\x0019ç\x001c\x0015u.8Wô¸ÌHË`¤q\x0018i\x0002FZAÇ¿9úþ`¾Ëx\x000c£®Q?¡ãÒmª¯£Rª¾31#ªË»úß¾_9¶ÇÊ1²ÆX÷ô\x0007pÉYgVí\x000f\x001egMXiþCN¯?ÑE\x0015^EëÂhÄÂ\x001cÛÐK\x0000zÐK\x0010zÐûÞVä@;.fÝBÎóÎó¤ôù\x0000Ê¢ï¾Æê¹\x001fïL¡<ú\x001eì\x001b*ì,q~ \x0004}'vª:×;ÔAï!Q7½[\x0018Cýôî`!
Ö±ÿk cý>¹_¹ÿNGðc´\x0014\x0016ð\x001fí]wT\x0014Éöîêaafh!I¡g\x0000\x0001\x0015\x0010\x0010\x0004  b$ç(¢\x0011\x0006E0\x0007²	TDE	¢â IÅY×9"\x00060Á¯ºPD×}»ïß÷Ï;u¨[ÝÃtwÕ½õ}ßíîé®A\x0011p\x0004E@-:\x0014\x0001GQ\x0004ÔCf5@v5Bÿ5A>g`ç ÆÅ®B]£ÝZF\x0017{\x000cU	\x001b{	ÕÅ\x0010ì5äx9\x0001@$\x0019Ò,\x000c£2HÌ:ËM îÛÂ<Ùó9öØ9ø\x001dEîr¤}÷\x0008æÆDQç>È#äw`^ÕÀ:\x001c\x001b®K\x000eü\x001fÑXX;àëY-0Ú>°©økQÝ<ªèHÈ¯{Çá^äþ\x0013dßB8!\x001c\x0002\x0008h\x0008\x0010\x000eÑ\x0011\x000e1\x0010\x000e	#\x001cb"\x001c\x0012A8ÄB8ÄF8ÄA8D \x001c\x0012C8$pH\x0002á\x0010\x0017á$Â!)C2\x0008¨ß\x00157Â\x001eppGZ5\x001c¿º\x000e\x0003\x0016G©\x0006t\x0001\x001f\x0000¶`\x001cðGç\x000fÂA,\x000bµ\x0000¤Õ \x0013îµ\x0000ì\x0004{Á~p\x0018Ôfp
´Â±¹\x0005Çá)x	Þ\x0010ü\x00198\x0007Àeq%\\x0003×£;\x001cèÂÞkÃ±0@v*d?ÊÎ\x0000\x0016ÈÎ\x0004#õ\x0001#õ\x0005£õ\x0003Èú\x0003+d\x00035²pæQ6\x0008Ø \x001b\x000cÆ \x001b\x0006\x001cJÙ\x0018àl>]²Bè²ÈVÑRøÄdSÎer(ËØÁ\x0014E¶I [Ç\x0014Cö\x000bS\x001cÙ^æ\x0010dû\x0012ê¬µ\x0018@û	\x0007:\x0010	Ä ÏãpI\x001fÖS!ÛSÚ\x0001â\x0001ì%AØG\x001e¬}\x0001\x001fÖ~À\x0018Öþ\x0000ê\x0008Ø7SX\x0007á°\x000e\x0002f°\x000e\x0006¶Ô½\x001fÀ\x000eÖ\x0011À\x001eÖP/à°W°\x0005N°\x0005ÆÁ:\x000eu>põ&à
ëtI\x000cýu\x0015:óñ	\x001d\x0003{
£\x001aöS\x0008ÖµL¨7`\x001f\x0019ÔÝLLaX÷2°îc`8ì\x001bT?LkL\x0007Îªéo#!Ï.À`+±Ll\x0013¶\x0003Û\x001dÀ@\x001e;]ÆnÁÌ¿\x001dÎí¯×ó`$ÉÂX×±Dá`\x0014&Gà
\x0011r*ìw0ìÅ\x001e8ZùpJ\x0001ö";\x0013ìCÖ\x0007"ë\x000bÊõ\x0007åÈ\x0006
dýÀ~d\x0003A%²Aà\x0000²ÁLEÊÂ>*Q\x0016öR\x0019ÙZ¦
²uLUd¿0Õíeª#ÛÇÔ ,ì±&²Ö`\x000bòßVä¹\x0002ä¹Bä¹mÈsÛÏv \x0015!/îD+FÛ<·ò\x0007S\x0012¸\x0014\x001aqi4â2hÄeÑ\x000fE#.F\\x001e¸\x0002\x001aq	aè®n\x001aÂ
\x000cÍt FýDz¯+º§^\x001bãC.þz&
H£XA1"KíÚ
\x0018:Ð
¥"Â^'Ù(VPM]!\x0003â\x0010¡0 \x0005s\x001a\x0008GøBq,\x0001&É`
ð\x0006@(Ë\x001b²ÏÔþóÂø\x001c|\x0011gÑòi»iûÏÄ\x0017¢èøºµµUÀ*dmcmgíXÛÀjd5±YÇXÇY'X-D7\x00134B \x0013\x000cB`²>°>²>±>³¾°zY}l\x0008{ìuìõì
ìLv\x0016;ÃÎeç±\x000f±«ØÙ¿±«Ù5ì#ìZv\x001dûwö-ö\x001dö]ö}öCöcöSösv;û%»ÝÅ\x0011æ09"\x001c\x0016ÍápD9\x0004G£ÇÑç\x0018p\x000c9F\x001cÃãð9Æ\x001c\x0013)g8ÇcÎ±ààäâXr¬8ÖÑ\x001c\x001b-Ç3cOp\x0008Q $\x0008.!Iô\x0010\x001f<¡@P× ¡¬\x000fC\x001e\x001d*\x0007gÈiáx$díxÑqð0£\x0013Ew?\x0013(\x0013CY8:÷:VA«À$\x0018erË¨bTaRnF7Ôm0WÁd¨\\x0005ê;¬G\x000e±@5\x000e¹{\x0004ÌÙ\x000fbv0Û¾\x0019÷MÌ\x0005q·+ân7ÄÝî»' îö@Üí¸Û\x000bq÷DÄÝ\x0010wOFÜíÍî¬=#\x000eÚ\x001f1õBÄÔÉ\x0014dêTØÏjlêßñèæÁÄOß<ÄB£¡Ñ\x0014Aã(ÆQ\x001e£\x0006ê¹\x0001êùpÔó	¨ç^H£LîÏüèèM°=\x000e£ÎëÚbJãÿç(þóxì\x001d¸!(R0\x0014)4äa\x0006ò'ü)ü)ü9\x0004ùS\x0002ùü)ü)ü)ü)ü)ü9\x0014ùS\x000eúM\x0006ÿzôl:1èè	¨7¿ÎXjÎ£8ÅP\x0002\x0014§8SÚ×ïrèb¾+\x000bUÉ\x0000
|é\x00089Ð,@LG,"ÙÅ×à=øôU
\x000cÁ¥qy\\x001d×¡9Ñ\x0003èAô\x0010z\x0018}6}\x000e=P%Ô	MBÐ!ô\x0008\x0003Âà\x0011&ÄpÂ\x0018A"¬Ñ-1p$f\x0012D0\x0011JD\x00111Ä,b\x000e@$\x0011\x0014b)N,'V\x0011kõD&Mä\x0012ùÄ&b\x000bQ@l#v\x0010;]Ä\x001eb/QJT\x0010ÄA¢ø¨!ê\x0006¢8F N\x0012§³Äyâ\x0002q¸B\#n\x001076¢è$º·ÄûÿÝUþ¿{.ÿî¹Ä1q¨ùé\â\x0013ä|ë¿uO9 qkÐ\x001dÀLê^¯wÕüË{d\x0006î£ÛÀ-ñ\x00039{ÿ\x001ag@ßr^\x001c¼Åº¡F7ÅÍáØÁunø\x0004|\x0012>\x0005\x0007B¬¨·º¦õ«B]Ç\x001a\àV~,æ,ÔU¯ÁºFöËb÷Sq ® ýPÜþX¨«i\x000bìË\x0014È\x0007?\x0014Øç\x001fË_\x0015È\x001f?\x00148J?¨|_\x000eü©À\x0012þ'%öWÝûc¬õc\x0019úSQû±|í_ÿñ¢-üïÜÄ\x0000Ø\x001dÈ£ ×;Bíòíé'ÔPck±lýlÃva¥0ÿ©Æê±ã0\x0003º]ãG¢k½ÿnmþ\x001fÕnÿIýËó\x001fýgG8ÐdSy\x000ffCå\x0002ë¤Qö@]ã\x0000@\x0007æÑ8dû,ØÎ\x00069°\x000b¨·wo\x0017\x000e\x000eWÔ\x0013`Ák¯t¡w`¼\x0003ïa»\x001b|@ù	¶?^ØîÃ©7à¸\x00109:Îmazj*\x001bù7.Þç!Ã\x001c\x001bÀ%a[
m\x0019êý\x001cWåa[\x0001Wm5\x001cfn¸\x0006õæ\x000fÈ±:°­ëÂ¶\x001e®\x0007Ûú¸>F½ÑÄ\x0000¶
qêM<\x001bñ°½	ß\x0004ÛñÍ°½6\x0016=ÅÕ	£ÑÆÑ¹Ôsâè°¿t9º=õdCúXFw¤ûQÏé¦Áv8õV`ÈÕ	°H=1¾¾\x0014¶Óèõ\x0018õã\x0006ØndBdfâ0ÄÃD"0 \x0012)\x0002Hèn\x000cî\x0011Y¯hh\x0003l7\x001eíãP©\x0002B	ê\x000c\x001aT}(Ã¨,i÷ÿÆ\x0019y\x0006Çü¿þ2÷»\x0006\x0001H\x0000¤AÀ _\x0002¤A\x0000Ò \x0000i\x00104\x0008@¿û\x0000H\x0000¤A\x0000Ò \x0000i\x00104\x0008@\x001a\x0004 
Ò8R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012\x0001H\x0000¤D\x0000R"\x0000)\x0011\x0008@J\x0004 %\x0002\x0012ùö|§(RÏgDk1ÅlR ¸!¢æÖ-
ñ\x0002b*\µ\x0018\x0007Ç&E\x0018t=ËÑ1ÒÁÒc\x0000! 0ÃP'9Ô\x001f´FaR²\x0002º3
sÃü±ÙX\x000c\x0004Ñ ,\x001eþQw¬HÕA\x001b\x0013t«:¯ÝûJo!MEª´ºuÉü\x0002¬\x0017)\x0010j$\x0005´=\x00054\x001cà8×\x0018\x001ebÝ\x000e±w'{$:à:Rtàh\x0001\x001d\x001eW\x0002:LÚD!\x0006\x0017èÉãC¨\x0005&5ÙovhXtH|L4O$¨Â\a À¨è@\x0012©@­aq¥\Â\x0002âbfÇ\x0004Ç«ØÅÄÅÆÄùÅÁo¨ÊÔç4®ì÷Ï½Â¢\x000c<ãý¢bUÜílH%\x0019QÞpÒ4ãXLæ\x0016ÉýÿÈqH\x0016õ9K³q³ãiýKJÑva±¡Aq*c<íUì=]G\x0018106s\x0018nàÀ#Mx¤z\x0014~Ù!Ï ¸¹a\x0001A¤\x0000¨
\x001e`êS\x0002\x0008Rp=\x000b\x0017\x0000­³x\x001d`?}\¾PãÛ»^L«×;Ð°bq¸³¯£ç&\x000f%sÏÔCO_ÑÈê·wCý#ï[¶; mØFKý¥ì}\x001f¬Û?°ÝY©Ñu\x0002I±Õ\x001fÙþ!k$\x0018¬äUejö\Ú	\x0005óîÐÕ\x0011'¾*]Z:S2çÞïMgyµïôbªhÀM¿ê¼#?:-Õ¬ª»`e«ÒÞmn2NÃò4vtíº9æÀÅ;Ú´ñ6MÛÅÕY!6E>NNmF'®{\x000eï¢,d¸lºÓ\v«`÷ä5%ÊÎ\x0012\x000fîÚ
"|KçßZå<lÒ\x0003\x0017¢Ws-«7­~[ë!÷Òkê\x0011Ñ){\Ô;Äip\x001am\x0017\x0000\x00118"tR\x0011\x000e©"\x0001Õ¸¤B´èm¶­Ú\x0014k

4æ¬]BHQ]HNT7é¹áá\x0010Ëê\x0018ýiî§J½ò&ÓJ1Òú\x0007e!\x0017Òt*\x0018[`f\x0017\x001a\x001f\x001f;ÂÈ( .Ò0ê\x000c\x0003b¢b#Â¨µF±q1s\x0002âg\x001b
¸ò"r"\x000cJCø/¤7	ç%.\x000cÐxr\x001céømÄÓF}ÝABBÂ¯v\x0010\x0014÷/¶\x001cOr©ãÕ\x0014¢Bðë&iÌæ#hßYU\x0012ù¡ode¬ß·\x001a½\x0016\x001b¿ø]ìeÃÒæñÊ\x000e*\x0017;
\x0017:ÊÄ\x001e?s"pü)±ÞW|>ù_Út&ÜìÁqUÃ³sOÖww:]}áÖ ¨e­¿"²íïø;*Â¶o&\x001f\x0010ñ,
þ|BßjúÆ´ÌªT£*ßV¿xG¤\x0008h)G\x0016\x001fØ/j-^ëà×U>aKói\x0019ç§Þ¦½Êçó?6ÊÕ°.<÷.ø==TRÍýM×ZfÏªgÅò7|Þ¿Çe>¿å7Z³Åï¬h\x001f<L_O6fÊºËkå.\x001f\x000bk?Êµµ\x0008x6/Öâ0ÍÇñ_VÊI\x0015K\x001a¹c\x0017ùõ5å+\«$\x0005\x000c\x0000QìÙ \x0014k~Ñ3/ÅýY\x001fB±æÁ£Æ(¶è\x001fÁ
mrXÿ¤W\x001eüy`gXH4Ü*c*|ÇC`fFóx|\x0012\x0016~0û¾HÆÿ#Ç÷õsÚ|þh¾ü°Fðüä$©ÏÃ|?Ç¥ë|»='=Û¡jûi\x000c£\x0011ÆJë\x0012?.Ø­,\x0000\x0007ç;B;åðâX^÷'!Å®¥¬>µèÂ®\x0010ËcZ²´ß	eÚ\x0004´?¨ZÙÁÍ7½c\x001eë\x00153²}½\x0008éÔP·Ìã{²{vtÂ\x00155'KU:v¾Õx7\x001es^~ñÖº\x0017W\x0013{W}ÜçnYûr©ÎÑcK*Ö^-Ó»äõÉô÷³³Ö?Vêk\x0015qz1snü]ñ	_c-ã·\x000b>"úeÁ¦ÇS\x001f,}w5_LyõÎKd\x001a®Úª\x0008N|q,æ®7ÎQuä÷4jlÃö×yJÖòÊ<:ùMM;ýâ\x001b\x001a%Ã\x0011YÐ\x000f7\x0014Ü\x000c\x0010óx&\x0018©´Apuúªÿó¾\x0016ÏûB\x001a§_l©)©jâæ\x001eÔÇC \x0016í\x0018KÚóDIv?µ\x0008¹¸¹{ðLH>µHçêñIÇ×\x000b0'MüMü\x000cL,üM\x000cLøÆæ\x0006æÆÃù\x0006æ¦¼`?>`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=î¿4&kKbbÓ\x0011ë\x001c}\x001aJty7ßÅW¢û¶ùåÞÑûK>ÔvÄ\x000eÃ¿@éï|÷·;z]¡.\x0018í\x001dýI¥¥·\x0015?k:'üâ\x001f4ÿ\x0000,\^i÷ò$\x000fué\x0018¤r\x0015XÇÌ\x0014,v\x0007ãª×®ã­\x0001Þ{\x000bÚX´²<DÏ@ðÞßì¶vþÈkñéå8LðÑ;\x000fMíöì¡©ÂÒ\x0000ÃzW=;ùÿ\x00008ë£þfNÚK{§\x0003±\x0010CÐ\x0000\x000b+\x0002\x000eÀ</p><p>¯\x0013°©9è=¯ì¦\x000eÓn35rçB·\x0006þÊ{NÓös\x000e¾\fã#ÌÇ¯MÁý\x0008/Üqê=óÁÿ\x00008Ye\x001brQ ê\x0004J¦ë\x0016`>ìæ#ÿ\x0000\x0003Ü`ú²Ê¼¢\x0007é.>Å@\x001dòJ¿ª\x0007é(ªÊ>ü[j>Kÿ\x0000tIläYïYxÑd\x0013Nßä¿\x0004@S²\x0003ï@3a\x000c½ìè&\x0004Ju[\x00119-¶ØæÇ&°Á1"SªØñÌùm´~Å2²ß\x001dö\x001fpÏ\x0003yûó\x0002ûó"õµ
Iù5(6HÓ² ì?\x0012w$ñÓíL¥äÈwä\x0000å\x0011Ü\x001f,í\x000eÐÉ¯\x001eCî\x001d\x0000î	Ì0\x0007\x0015ÈNj]b®wßùÆ\x0015Sæ»\x0012ÍJ	éîL\x0012</p><p>~5ú3´ö8\x000fÎã¿éÿ\x0000¸z¯eÿ\x0000Æáþwû õ\x000fîÏÑúó¬ÿ\x0000ÎißG-öl¤\x0019#FaQ°vPµï¿\x0013/ü\x0010r\x0003\x001czÈó¯¹ß{k\x001cãÔDñ#õ!´¡³\x001f|ñNy3æé®lUÙ±WfÅ][gQ!!*9\x0010*@®ä
ªrQ¢EòêÊ5{òêÑÏ³>YÒ<µ§F¾_\x0008m¥\x0001ýU<¦äÍÔm¸ô éUö>\x0006\x0010ü½p\x001døü^dþ)ú/²ôØpc\x001e\x0005pìoÅæX½Ä#|}sj\x001fóºV¥y-ÛÝÜ,rÈïé AÇ'b\x001baZ</p><p>­in_`ðåÈfg0	'VÖn¬÷<¶Oc±d¨hWS|è¢×Se\x0014 É<ù6\x0004\x001fUeÜ=Ã&¯«Tþ¢\x000cÚcìîÎìmåÀ$:ÌñOà
ýØÃC¢ì½åÀ\x000f|Ï\x0014¾\x0000þ¦eë¥iíÓ9ßÿ\x0000ç1l4ðÑh0=Ì\x0004²\x001c_0¿Þ7Èþy£í\x001foqcÛ\x0004LÏó¥éËê?ì]F»Û,pÛ\x000cL|½1ýgìVK-»g|ïù©~b\}oUÊÂ¡\x0017¢ =FÃçÔÓâ'<´{S7hË,¯¸r\x0003Ü?\x001eoë»C.º\Y
÷\x000eÜ\x0013x X\x0005\x0014g ¿ç\x001d¿ ì¿2`UÕec\x0004rÖ\x0008Ûb\x0000$»u\x000bñ</p><p>\x0005¡;×¶öSÙ}¥\x0013)<"\"\x0000ÕÐ\x0007sÝ¿G«ös°!¯Éì
p¯kßæ¾¼0\x001e+×Ç=ÕçoÊ­'ó
mÓVÊ¶Ü½ $t\x00000PÀð`Mx¯¾Û\x001e¹ì=£Ø¸;DDe_\x000eæ<ë¸àú~»²°ëxFA|7[Î»îJ"¸h+ÄõÈ)Ñüä\x001f×L×§3\x001c</p><p>x\x0007,ÿ\x0000viü\x000eÍÐs\x0018bGy¥öÙu\x000eGÌb\x0007ÏGí²«Êi¿áF­ÿ\x00009Må/\x0015³Ëp\x0017`¶ð\x0007ËÔô×î4Ì\þÙè´ûDÊUÒ\x0011ÿ\x0000à\x000e>oj´¸v2þ¬â¸W®#õÛæsÈ_¿þmk{8\x001e\x0018 ,å¤#3\x0000:) \x0000\x0007­{S1öÚHö¿\x000ca\x0013\x0018ÆÍÊ¬·GÏû·GipÆ1 FÎüÉ>äÊÎÌÛTRsÍ¹Á¼r?6*ìØ«³¤~RùøþZjðj¼KÆµIPuhÜQ©^ãí
Æà\x0003µs}Ø}§ü9jÀ±!ß\x0013±ýnç²;Cò\x0019£å!ä\x0016¡s\x000f®¥~ìú·c¬h6ack{Ûw\x00151·\x0016*ÊCñ#\x000fp\x0008ëGãÏ¦íl{\x0018dèhüÁÜ\x0017Ý1æÁÚPØÆq=
\x001f°î\x000b\x001c*öÇ¸9</p><p>¹ÿ\x0000mò+Ø(îi<ê¢ÂP\x0006jgìîqôó\x0003ì:Ù{5¤;ì¦?ß+\x000bé:rü\x0006\x0017\x001dOÈÿ\x0000õ#e\x000cÀ\x001azt§9\x0005~a|r\x001b³»\x001fÔ<8Ëú>¹ýRý
^.³7\x001c\x0011>^©ÿ\x0000¾-ñëcR>áKüçÿ\x0000¹óò>¤«[Xb{0ðjl¨{ $Új|9æ¾Ð{_=x8±\1õ?Å?pòù\x0005Û^ÓKX\x000e<w\x0018u?Å/Ô<+[\x0001\x000fÄÛÕcò³Ïùm«A«*ú\x0019+"
#¬\x0007¸­G¸\x0015Û9NÅí3Ù¹ã¬\x000b\x0004wÄ/;ÙZó Í\x001c`lGx;"®!õÔ®}f}\x001fóL¨ôï,¦\x001b©ìFô#fG_¡>°vÆ\x001e1Ë§ãpGÌ>ñ\x0019aí<]'	~=àý¬p¶o\x00023Í>`ÿ\x0000/°¼¾}-º\x0013^\x0012F&\x0003Ø\x0010Ñ|ê}Îp:¯ø\x001fâ¼y%\x0001Üb'ú`ñbñÌÞ9â8ÿ\x0000LQéªö?\x000eòïüáÎ¥°Tºè.å@\x0010¡ñåBÍO]¤ö\x000b\x0006#yg)×M >ò~ÖÝ7±¸qïRÐ?IûV¾¨Íö@\x001f\x0012þoþ~Ùy\x0002Õ|¿äã\x0010\x0001F \x000cp®õ\x0008z4øÞµc¶/nûO³à4ú>\x001b\x001b\x0013\x0011éòïÿ\x00007\x001f¶= \x001e\x000e¬lHå\x001fwãûk31ç-®xKI¿ôïbº¸bÔ\x001dØñ\x0002ÄÔç`ËY#)\x001fâ\x0004¾_%LJ_Î\x0004¦ì»\x0010<3ëwç¿\x0016å«ùøú°4QwfqP´ëÖ»~ÍOLú_ÚMTpi2H¸3=|þO½öî bÓd$ó÷Ëf7häQïú³æ×å\x0017ç-ïåEÏ8«-£ß[¢ò¯\x0017\x001e4ß£W·v\x0017oäìØõ@ýP¿´w\x001fÁ|s²;f}+\x001bÄýQý]Å=¹µ\x0017#}cFô\x001f=ùoóÂÓê¥¢8«ZÎ\x0000OS½GóÆM;6{¶´´¹\x000e\x000fL¯9Ðø~üß`Á¯Óv¼8vó¾¡ðý#æ¼2Z\x001aî=Ær½sþpãF¿Éeqql§ý×UGú¥o½9ÍO°:|á)Àwm!öïöEØÜ37	J>[KïÝ\x0010£ \x001c~x~UùgòÃËÆÚ\x0000\x000e¦^3\x000cõCÌs%E\x0000@º(PxþÑßKí\x001fbèû/KÃ\x001fïlpnrÜ^ÝÕ}+WUÛ¥ìý?\x0008þòÇ	'ÔwßáWÒ¾*ö\x0012\=OÙïá\x0013þqGË\x001a,zZê|dÔO$¸vûqü[ _ÙR \x001a·ÜþÈÞ{\x0013£Ó#,(åÜLqß¯ØíýÒà\x0018HÑÉ¸<ã¿/!÷¨j2?.'ìöÉWæüãæ~ 5In%C\x001a£ª*ÜkC¿CCO
l{gÙ<}©Å2M\x0000@\x0000Ý{ÜîÔön\x001d¡Ä214\x0001ªéïS·¾6ëÄ\x0000p\x000eù\x0001å\x000fË\x0017:	)þì½xÿ\x0000À|\x0011¥OSÙ\x0007f,|òÈWËÓ\x001f±«\x0017³ú=\x0008âÉGÏ$|¶\x001fcm{,û/à0\x0017ç)¼½å\x0008þ¯¥+]º*B¾+ì]ÛýE|«[íF8q\Èä"8b>'ô\x0002×ªö«O¦\x001c8ýdr\x0011\x001c1ùÐ</p><p>èôçvÛç×<Sùùë«þgÖ\x001b\x0010ÚT\x0011m\x0015BmÐ¹?\x0013Ã]ÂònØö?jm#Ã\x000fæGÇ©û¼7í>ÞÍÚ\x001bHðÇù±åñïülÛÙ­¾ãsãOË/$\x001fÌMZßH\x0012¬"bÜïEU,h;±\x0002<}³]Øýü£8oìù\x0001=¶p{3Cùì±Å|7×Ü/æ©q/ ¥ºÓ>¬ù;òKòN6j®Ð\«Ë¹-'4àÕ"j»|!ióÏ£´\x001dEX"	ïÎòâ\x001c'VÝÔû¦²1i1\x001cQ\x0004ÆWÅgscò®Ìv[£¦CògÉ~HP×Vö±Ó~WSr¯¹\x0012¿\x001a}\x0014ÍXö³ô"ç\x0018\x000e·WþìÓ®\x001d¢Ò}Qó¯ýÑ¥_­K/B~ý1þvù3ÈÈc´Ýh(\x0012Ò\x001aNÀÆ¼>ö\x0003\x0004½¢ìý\x0008¨J\x0003Ë\x001coýÈ¯µ\x0012í½\x0016Te\x001ft#ÿ\x0000\x0012)ÂÒYºôä~wÿ\x0000¾Óo¬®-4»[XÞ5yB"\x0002À¯*+³\x001aV´Ú½6ëÏhûwxå\x000cP$\x0010\x000c¨
Å^ÄA®öÃ\x0014á(ã e@o·BQ1i\x0008,E=³çÖxäéÖlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]H¿&ãeþ£ÄÛ<C·Ægï\x001fp~¬öKüG\x0017õOû©1ßï\x001bç;4/^Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»\x0013fÉ\x0000ª¸\x001dä¦L\x00066\x001aà	®xå±\x0013H-9a=Åí3*8Ñl×Nå7Z;æ\11%Yi\x0005»djïV§|Î\x0016$³\x000b</p><p>½³yëóïDòK/.A\x000fî£\x0005Ü|øì§ýb3­ìÿ\x0000g5\x001aÁp§ùÒô·Áêû/Ù]gi,XÏ\x000fó¤D#öî~\x0000£®u;-\x0008ñ¸sþU\x001cáÓéÏ&~cÎ[>©\x000b[h\x0011¼,Û\x0019äãÈ\x000fòT\x0012\x0001÷$ÓÃ=\x0013²ý\x0018åÅWðÆëâv}_°ÿ\x0000àiáLOW! ?ÉÂè2ko ÆuÌôÌzz\x0015cþìjT\x000fa¾ùâû»¹/äi§fy\x001cÌÄ$õ$ÉÏO\x0004\x0000\x0011\x0000\x0001È
tÅ8¢#\x0010\x0000\x0002\x0002\x000f(V¹,ÄÔjIÀù6Õ<Ø«³b®Í»%>DÕl´å×f³4÷B-\x001b,M!\x0005¸«\x0011F4Véá\x001c2\x0011â£WVëaÚXgàâr\x0008ñ\x0018\x0002\x000cl\x000b#â\x0016\x0004Ò»çÕùöþå?2YÎòYDþa²Í7ï\x0018Âç÷rB­ðÇÇtn#hK|`\x000e»°¡`ì8ÇS¾ÞOÎßðVÔktÙ"\x0006I
>AB1ô!ÌHÍó\x0017·Éf YO_çÖØ¿7¥±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015?çå\x001f+ j6þq²_~æî\x0004è¿\x0003õÐPû§9ÂööC ë±÷¿Tÿ\x0000À·|RÑÌïÕú;¾ôßO({tÏzÎ\x0013þkÿ\x0000ÊÔò}£Nü®ì?Ñ'ñ>\x001e\x001fõ£+ó5Î²u>>!|ÆÇàøÿ\x0000ü\x0010;\x0017ù/]>\x0011PÉûÈÿ\x0000õ\x000f­\x0005w\x0017¤çÀï·ÍËæÈ\Ø«³b®Ï?óô/=º~òÔMDa%ÜÊ\x000fR\x000f§\x0015}¿¼úsö7Ó\x000fû¥?à?Ù øÚ7\x0015'ý¿Þ¦ruo£>Dç\x0018ý.fÅ]\x0015vH<µåMCÎW\x000be¤[Mw;t\x0018ÚFû\x001d½úeñK!¨O·\x000bW­Å£\x001eYÆ\x0011\x001ddDGÚµ&çlì_ó^cüÒ­µ¿0Å\x001d¼wSz)\x0010<ªÜ\x0019Ç0µQP¦b|@ÌíGgäÓÄJ{YªêòÝí~¶3K\x0006\x0018GÊ\x0016#µÑëÜ¥\x001dÂÊh½³Õóì¿>\x001d\x001f_½Ð$jG}mê íê@YGo»6ýf\x001dâþOÿ\x0000Ás³|m6<ã9ðêä\x001f®!
¨%T7}½Îñù9'Í»6*ìk(~¢¸¤\x001av;\x0014;6*ìØ«³ÍóþYÿ\x0000\x0015ù\x0017Y·QVØÎ¾Æ\x0006\x0012ÿ\x0000\x0002§5}§\x000cü·{¯aµí\x001c\x0012ègÀÏ\x0006\x001fyDZ·\x0017\x0019ù§Ï.~ñd\x0019ô\x001fþ}·æÓ¡ùÂM5Ág*S·8OÏ°ús¤ì\x001c9k¼\x001f³wÅà±¢ñô#'\y"~\x0012¸\x001f¼ u\x0004ªWÀçÞ\ô\x0017ãä6*ìùÌ¶þUno\x001bM,Q\x0016ì­+Jû\x0016`>g+É@Yï\x0003ç³¤ÒKU#\x0018nDe*ï\x0010\x001cGì\x000bytÉ\x0006Xá-Í»6*ìØ«°£CÑ¢òü\x0002ÒÜR5,Tx\x0006bÄ}ää!\x000e\x0001AÉÔj\x000e¢\ræjþ\x0000\x000fÐÛ\x001e[á¾MÆk6*ìøÿ\x0000?Aÿ\x0000Kÿ\x0000¶yÿ\x0000Òg\x0007í\x000f÷þ¯é/Õÿ\x0000ð\x001fÿ\x0000\x0015Ëÿ\x0000
ÿ\x0000y\x0014ßNû'ç2rÏ¾&9únÿ\x0000XÔJù#Dÿ\x0000 Ä½kö*Øý\x001d3Õ;:\Xaî\x000fÀÞÙbð»CP?Û$~{þ=r(ççû6/\x001a¡\x0015v~{¿çá2\x0007óõØ\x0006´¶´\x0007çé\x0003üsÎ;oûãî\x001fsöü\x000bÅvl?¯ýÑOl»\x001f3$Í\x000bë(¼Ø«³b®Í»6*ìúÿ\x0000>¹³ç¬k\x0017\x001bü6§M¾)	ëþÇ:ÏgªGÈ}ïÏðb`Á\x001eü?(×éKu\x0013°ùçÚ<î_\x0012Ø«³b®Í»6*ìØ«³b®È×õ¡å½2óP&W·Zÿ\x0000¨¿U|\x0011'¸\x0012çè4ÿ\x0000Í\x000cÎcþ¹\x0017\x0003?'×7\x0006íÚVêìXüÉ®y\x00016þB<\x0000\x0001ÐS&éàlvlUØ,\x001d\x0015vlUÙ±WfÅ]\x0015vlUÙ±WbÖ÷/hÂHÁ¨e$\x0010}ÈJ"B±ÜXO\x0018È*@\x0010y,/FòRA\x001d\x000849ß<ÿ\x00009/æ\x000f*qIf\x0017q</p><p>|3üMOi\x0005\x001bþ\x0008¶r:ïetÚ­Àà=ñØ|¹}Ïv§°Z-mÇÂ~=ú^_*fZoo,h²\x0011*ø>çþ\x000b¯ß\õÇÿ\x0000ç.4sZ{)Ovø£¯úê*?Ù(\x001eùç]¡ì^l;ã¬Ëi|è|µàuªÒ\°ÖXùzgþþðg6>t±Ôþ\x0019ë÷â3Õ:7 Õ£YíeIcn\x0019OÈFyþ}\x001c±\x001e\x0019\x0002\x000fq\x0014~×Ìs`	pÎ&2\x001cÄù\x0014ò]!.D2MGÞ2]mª×¾k§ªØÕæNØ}o©W¾bK\x0012m]i\x0005{a×þ\x001cÇðÙZKú/âé'sôió6\x0007\x0015v\x0005¼¸úºW¿l³\x001c8Ë^Ið\x000beþGòÉó]ê[\x001fîÇÅ)ðA×ïè2*Mslê_mÇ\x0018\x0004AE\x0000\x0000\x0007@\x0006ÀdN·ôWêVk3Oû\x0018p{ä\x001fÍ?4ÿ\x0000¯Q\x001aÁ\x0005Q|\x000b~Ó}û\x000fa\x0019C{Ìób®Í»	uvû#æs7L9¸zÈ=ÿ\x0000ò"ÏW\x0007²¢\x000f¤PÂ\Íp\x001fFá°¢æ¯P}Ldøãós6±"ØH×þ\x0016¿Ç\x0004f3\x0007fÅ]\x0015v#snÑJ\x0003#\x0018\x001eàâªJa`êhA¨9ä7ùZO*Ü\x0018¦&©üWÀûÿ\x0000~dÄÛ\x0013oaÑµeÕ£æ6q³\x000f\x0003ãò9Ü¿+u±©Øv5\x0003ÄüNêÑÌnÓ1L\x000bÍ&Ös \x001f\x000cý=ó¥S ÁåqÅ]LUÙç}f&ü¼ÕÖê!Kyw éÄ~¸ú2ñê
ÃÔ\x001edÃÌf'þñ6¯¸è~=	\x001ce\x000eª@ øÓ(iyÃ)BAØ¸üUnlUÙ±WfÅ]\x0015vl\x0014®ÍØ]¬Gë[L1¸ÿ\x00008B¢lÛ¨|\x0018~¼óÇå\x000c5\x0002§ö¡j}\x0004\x001c¿'&ùòzW\x0013¸>\x000e?QÃIÇøÌ¡Fë\x0013º!SøãÈ#AÇþã´²{¸?ðÇúg NRÒó¬UÙ±WfÀ®Í+³dUÙDW</p><p>»(®\x001bWcp«³b®Ä§ÑFsÙIû*¾5æ@\x001dÍ3É\x001eJ>¶©l|f¯ë9.ND¹=\\x001c-$\x001e	OÕ¼ÌG\x001dâù°+³b®Ê#
«±¤S</p><p>»+</p><p>»6</p><p>WfÀ®Êf\x0008*v\x0003s[\x0002»\x000cóN§ÎÚáÆ\x001fÿ\x0000Q6QôíGÒ\x001bÁê§ô\x000e#èåxÿ\x0000²n¹éb+ÖÒò¬e)WfÅ]\x0005+³dUÙ±WfÅ]\x0015vCõ#Yjïê²sÔ¡¥~bg[ÙþÔjtQà\x0004J=\x0004Ç\x0015{âäÓF{ýÉ¥¶±-¨â\x0008#ß|·åu­v@<6þ½\x001eÜç­á\x000fö_­£ò1ï(Áæ);ªþ9"Ñüi¢7«\x001aqÑÔa÷i{G¨×Çd\x0008õE_¿©r1éãpºÕe»\x001cXÐx
²U³æÅ]\x0015vlUÙ±Wd\x0005õ4ÉÈ¸ÿ\x0000Á#á\x000e_\x0016cÅØ+È¿\x001dï¥ÞXg|Ú&\x0003ñÉC,|þs²\x001a:eMNÈÇ-
íÊ¿h/!þÄ×:Ïeu\x001e\x0006®\x0017üW\x001fôÁÃÕÆàèòúS-z\x001d¾ü1×¯EÎ­m©/÷z\x000cÿ\x0000Å¨G\x001fASíÆÒ\x000exä%ð;\x001f½å»</p><p>^\x00198ÏðÊQùú>î\x001aÀÉÞ)\x000fÜpß<\x001díXîlUÙ±Wfë»\x0018E1Web®Í»6*ìØ«³b®Í»\x001aF(!ØÜPìØ¥Ù±K³b®Í»=íù
ÿ\x0000\x001c\x0018?×þ&r\x0012|SÚñ©{£þä;;\x0016Eå]\x0015vlUÙ±WfÅ]\x0015vlUØ\x0007Qþïé\x0019ªú~.Â\x001c×º§fÅ]KOî×åL|¹Ãô`±½Ù±WfÅ]y©_\x0010F)\x0006³åtÑ\x0018YõRGÜi?IDñ\x0000{Å»\x0013ÀÉÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±bìp\x0018¦Å.Í»6*ìØ«³b®Ë\x0002¸«±ø«±ñÈÐ°t$0 ::\x0011\x0014XÊ"B#ÍØY&´¾BÔG\x0011\x0001°¼"
ZØ\x000fãØN«ÓzüTèÕþqN/´4\x0004\x000e\x0018ó\x001e¬R÷sý\x001e^çí>Í4!\x001eq¹aq\x001b\x001fÑåî}³ùm­ÊûÐÏï\x001eÖ¦}&ä;ªnÐë]¶ö¡ý\x001fæ\x000f-ÿ\x00005\x000f©ÄÜìn«hõ®Çröüv=òþÅí\x0001W+Øé9=ÚcQ\x001döèGóeûX\x0007ãÿ\x0000«£\x001dt§\x001dWM"\x001bô¥\x000b Ùd#ÅO_\x000fÀeç\ö¯sa¥vX\x0015Â®ÇôÀ®Í]\x0015vlUÙ±WfÉR»	µ.ÛëÈRákµ9\x000e¹\x0004róçÞ\x001c|¸#>«Ò/?65_Ë)Dºd´NA&øïNÇÝhsÌþlü¼»ò£\x001bk$\x0000ÔHµäë\x0001¸ùôÌ)b0ýn$±\x0018þ·êäÿ\x0000üä®ùÁ\x0010Ó¯8[ß:ñ{i¨c£q\x0019?\x000büâö92òGæÃ)[]TÔ\x001a\x0005¸ÿ\x0000_þjûòüyú\x001f~<Ý\x000bÃ>ÿ\x0000ç\x000ecdÕü \x001dAi,{\x001eäÀOCÿ\x0000\x0015¿þÎz	X8¨Ü\x001e3\x001cÇæÌ±4,QÁVRA\x0004P:2ðªÌÀW</p><p>»\x001e\x0006\x000bWeàWfÉR»\x001c\x00066®Ç`WfÂ®Ï9þp\ú±ÇüÄþ|\x0003t\x001eä¸ÀïüÏú\x001ayË&óDµ¹AûÈ#\x0004ømÏÝ×ïÀ%º\x0001Ý	¦j¢\x000bù¢cðÈÄ\x000fõO¿\x000f*¼Ò·°þþò?îëûIà=×õdg\x001e¨i\x0001æí Á'ÖP|
ö½ûs¯ä\x001aØ^8.\x000bWc°R»6I]\x0015vX\x0015Å]¦*ì¼UÙ`W\x0015v8</p><p>b®ËÅ]\x0015vlSNÎ}ù«þÓÙ\x0014Ñæ"1òêßßNN\x0002Ë8Gåk?­Ü=\x0013â?ÃñÎ\x000fä'ôÎ¡\x000cDUCsooýt\x0006dÓÐuë¿©[;¤q\x001f3¶zñß,{TýÙÐñÀ9\x001a\x000cñj\x0003©]\x0001ÔË/üI¿·2Oq?è°ÿ\x0000ª¨g´øñØvÌV\x\x0018¢ÝÓ³bf¦*ìx\x0014Å\x000eËÅ4ì\x000fvÜcsà­ú)TU÷\x0019â>»æSkÝ)Lõ¿\x0013mþ¡üXæ<¹µ\x0017yÖêOð\x00191È¡&Í]¡ØúbvKaû#ä3æÝ÷³þ¼¿Ý\x0017Çu_ÞKúÇï,²\x001f²>C\x0014Ì\x0017\x0015S6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Á:Ú[­¤x¤\x001d\x0019\x0018«}àãË,FâLOx$\x001f±³\x001eIc7\x0012Aï\x0006¾æØäTüÄÖu¸Ä7÷RÆ?eçÒ\x000boôæÃ7jê3\x0019äqésröl¢¥dw\x0019\x0013úTÖ\x0005MÀ\x0003èÈnjr®lUÙ±WdË>j½òmÀ¾Ó&hg\x0000¨u¡Ùº\x0010Aû³7G­É£\x001e)\x0018ËqcÏÞåéusÒË\x0019á<¬yûÖI\x0018QF\x0017jzúÔïwví,Ò±gv5,ORNQ4³HÎd\x0013d­9rË,¤I$Ù%µP¦\x0000ÊZaöæÿ\x0000,1N¹ÝS\x0014ùñ"¿Nfiµ¹t¦ñÎPþ©1û¬\x001a¬sxå(ÿ\x0000T÷,xÄh\x0003k^`¼ó$¿XÔ'âZS®Îià\x000b\x0013AíÓ#¨ÕdÔË$¥#ß"e÷±Ï¨sÅ9\x0019\x001eù\x0012~öÑ\x0004{(¦\x0014f+»6*ìØ«±ñÈÐ°t$0 
\x0008#¡\x0007\x00085¸H5¸w\Éù¬Ì'Ô/\x0019\x0000 Sq)\x0000|¹S6gµu\x0012\x0014rä®î9~·`{G1\x0014rN»¸åúÔ½\x0005\x001f²>ìÜ\=Ó\x0019%bìz³\x0012IùÙLÌÙ$òàJFFÎþõ@)Ó\x0011È±o6*ìØ«³¡yóc]ò²\x0008l/î#~Êsää¯ÉGÐ3w¥í½NV<\x0000r\x0017cäl;}?kgÓä\x0007uØù\x001bP{dr\x0006\x001e]þ~yôQõ)Çú¼Pýè£3'í6²|òËáQûrgÛú©óÉ/\x000f¸\x0005¢Î1û#9©¬Üëz×³K<öävvûØþmDó)ÊR=ò&Gít¹sK1¹#ÞI?zº M¦\x0016å
+³b®ÉFç}WBOJÆöê\x0004þX§\x0007Ü¬\x0006l0vl\x0002¡q\x001dÑ£÷\x0017;\x0016».\x0011Pâ;£">â¦Ñ+õ\x0000ý\x0018\x0013TóEþ¹_®ÝO=zú»ÿ\x0000ÄÊókrçúç)ZF_ykËªÉë¥ï?ymcTè\x0000ú00ÜUù±WfÅ]-.ä°fÚ9\x0010WRU\x0011¸#Ädá3DFàD3Ì
A\x001cÙ¢+±Å/õ\x0019µYZâêGW5gv,Ì}Ù'%,²)"yI?2%ñHO2MµÊ¡v\x001b`<©­¼Ø«³b®Í»6*ì=ÑüÑåêþºÞ¦§Òãß§ì5¹tÿ\x0000ÝÎQþ¬~â\x001c¬:¬>J?ÕÜV4jÿ\x0000h\x0003ó\x0018i{ù­j+ÂãP¼|\x001eæV\x001fqc\x0019;WQT²ä#Îr?yohæÉ´²Lûç#úV\x0011z(û²\x001eÌ\ÔîOSÂm×j¹X\x0010ìØ«°ÓJÖî´'õlg\x0007ÛâÙ\x000eÝ7R\x000edaÔO\x0001¸JQ=ñ&?s~,óÂn\x00121=ñ$}ËY\x0003ìEpÛZóÖ«æAÂþöæu\x0002dØ}ÄÓ2u\x001d¥S¶Lîý.F}~\ûNr¾Dþ©</p><p>Çö@\x001fFEs\à*fÅ]\x0015vlUÙ±WfÅ]\x0015vX%MG\Rì\x0011=ì·B;0\x001dýyd²J\É>òÊS2æIh</p><p>`l­y±WfÅ]Ú\x0007/¼­'­¦ÜKnç©Ù+ìhw\x001eÆ£34ºÜSÅRþ#îr´ú¬sxäb|\x000b\x001e1&Ì\x0001Î?ç üÐ\x0017é\x0019iJ}ë÷ñ­}ë\Þÿ\x0000¢eW/S¸ÿ\x0000D:ª¯\x0010üêPúËÍó\x000bWóHá¨ÞÜLÈò±Oø\x001añü3UªíLú­²dq¯']¨í\x001cÚ§9Hw\x0012kåÉU XþÈ\x0003!Ù«uÊ¹±Waµî½w©E\x001dµÄòÉ\x000c"Fò3"\x000f\x0004RH_¢S,De)\x0011\x001f¤\x0012H\x001eày9\x0013ÔO \x0011\x0003$=ÝËB\x0005Ü\x0001S9ã®ËV(j6#¡Â
$\x001avLaüÅÖ­ÑQ¼Xÿ\x0000\Ê\x0017î
LÚGµu\x0011\x00142ä\x0003¸NU÷»\x0008öx\x0019']ÜrýjF\x0004;ñ\x001fvEn®ä¾s,îÎíÕ'æNù­ÎCr$òmÁÌÍIï;ª\x0001N¶ªO¤¿«i,=)Ê6(Ôù©\x0007'4°1=à~ÆXòË\x0011¸\x000fx$}Îe
±ß%rþgëÓ\x0002¯©ß0=Aºøllje±ÍþVOõ¹Çµ5\x0007\éåúÔ¾®öGÜ2\x001duy%ó\x0019'vw=Yc÷ÕÏ!ÈnDÞMºùÌÌÙ$=Õ@§L\x000f°o6*ìz9RA\x0006 #¸Â
n\x0012
;&ù­Ç	µ]FðDváõ)O\x000fµÓÛ¦mkêDx|\ÝÇ/Öìiç\x0003ÄwqKõ©z	Zñ\x0015ùd2iáÈK1êI©?2sU)\x0019\x001b;\de¹U\x0002E³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Ï¤_?ñÀ²ÿ\x0000Q¿âm!Û¿ã3÷¸?V{%þ#ú§ýÔÍï÷óÎ\x0017¯BæÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WblÔÉ\x0000ªµÀ®ôË\x0000b\x001aá]ÅÍ2øÁ	Ý­,]ßS¾fC\x001b\x0012Y]Ë¶E¯5JfÃ\x001e\x0016\x0004³};EåÛ8æ7ç.ù{\x0019mB`$"«</p><p>|R7Ék·Í¨=óªì¾ÂÍ¯5;uÚ#ãú±ýÔö¼«\x000cvë3´\x0007Çô\x000b)åÝÍ¯Ë\x0000{(ÝÈ]³çÇæWüäæ«çNVö\x0004ÙZ¨ûÖ\x001få8¥>KOÏcì¯d°èêSýä¼Ç¤{ë~ì\x001fø\x001féû>§÷³ó\x001eî_È<ßZóä÷õØz1û\x001füÏo£<ÔÌ\cRw$çr\x0005>¤\x0005l\x0018)<·8Ü)k6*ìØ«³b®ÏS~Lÿ\x0000Î\x001eù«ó£ö¶ÿ\x0000T±mþ·uXÐò\x0016äöâ¼|XfÛKÙy5\x001bC¼¾yÛþÝè»\x001aã)qäÿ\x0000SÇR?\x0013Ê?\x0013~HinÖ.õ>\x0003>´þLÎ\x0006y[ò¸%Ö ¥oÕ¸Qé+</p><p>}7QþÌ¹÷ÎÇKØøðn}G¼òù?7öÿ\x0000ü\x00125©qÆ|\x001cgø`}DyÏÊÉ¯ZMÃ;ÿ\x0000çå\\x001f[½òëª¯«\x000fî
\x0005#?&\x001e\x00000\x0000Óöj:\x001cØêôã>3\x000eñ·¿£Æ{=Û2ì^=@¿L½_Ò¶Ø~j\x0010Éé0lüëþQ~dj\x001fó~eUEeÒfê\x000eã¯\x0019¢=«±§\x0005=³ÍtÙå¤ÉÅÜh½ûs·;+\x0017´\x001aIb$\x00118B]Ò«¿\x001d\x0013éc\x0013­<zgéÊÞfµó¾­§H%¶¹eÇuaQò=ê
Aß=O\x001eA	\x000eDX~</p><p>Öi'£É,Y\x0005J\x0004ÆCÌ1æR¨Ãü±Ã[\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vy÷þròá4¼¡©éyL°4öþ>´\x0003Ô@=Ú?Ùf·´pxø¥\x001eµcÞ7{?c»Wù3]-ÔL'ýYúOÊïà¯m'¦àçÉù÷_æÇø#Í
¡\5-µhý1S°¸­\x0011ÿ\x0000d\x000bÇîY|3ì=Oòß\x0011ÉúCþ</p><p>]ùÝ\x0018Ï\x0011êÀx¿Ì	|¶?\x0002ßÅÍyw\x0019÷«=	øñ%Í»6*ìø-ÿ\x0000?(¸i¼ë\x0012±Ù4Ûp¾ÀÉ3~²sÏ{xþ÷üÑ÷ì?ø\x0013D\x000eÏ'¿4ïý,\x0007èN´ÿ\x0000±ôçÏÌç\x001fhGgsüªÿ\x0000oóGç+)Ñ,dh	Þæ_Ý@\x0007¨Ô
òNGÀf~AQô»ÎÁä;gÚÍ\x001fcßd\x001c_Ìª!úiF[©Ï§?ßóí\x001d+Cãsæë¶¾Px+\x0014\x0000ø\x0017þòOîÇçW¦ì\x0008Ç|üÁð.Ûÿ\x0000Öl÷\x001d$\x00061üùÔ§òúGû/z]. [e\x0014Ï¢Oò\x001eù}n,´KH-!\x0014øb@µ§BÄnÇÝ9ÒâÃ\x001cB¢\x0000÷>%®í,Úùqæ§.ù\x0012~]ß\x0004\x0003¹v5Ï0Î{yOüQäKé\x0015A{7åIì\x0011Â¹\x001fì\x0019³UÛ8¸ð*/}ÿ\x0000\x0003moå{K\x0018é1(\x001f±ö²n.=öÏ_¾|?^hÒõ²Ücê?Tÿ\x0000Å.}9ä6p:<Þ\x000eHË¸ïîêýkí/fÿ\x0000)hòáæe\x0003Ãýhú£þÈ\x0004âdõ\x0014lýG«\x0006\x0015\x001b²þ}1Ì¼UÙ±WfÅ]\x0015vlUÙ±Wa/4dó\x001dÎ7÷w\x0010É\x000bm_D*vù\x001c¯$8Á\x001dà¤Ô\x001d>Hä\x001cá(È{âAý
©âk{û'ÓfÚaI#vF\x001e\x000c¤>ñ?!Âiý\x001cÅdä@#ÜwdÀ×:ïüã¯ÿ\x0000Á>nÒ5"h±ÞD®kOCéµ}¨Ù¡Éáåó\x001fnÏ5íVóº\x001cØúr#ß\x0011Ä>Ð§:sR=³õ\x000b®þ1ÌØ«³ÏßóZcêÞHÖ¢¼Å£H¤u\x0006"$\x0004|¸×5Ý£\x001e,2÷_Ëw³ö3(ÅÚ\x0018	åâ\x0008óéW¶4qóÀóßcó·ÊÖ¬¬\x001aò1è^\x0001×Ö\x0000XÞ¢ñÃâ éìíWæquä}á³Û.ÂþEÖO\x0010\x001eëÇýItÿ\x00004Ü~\x000e¹Ñb;vÏFfÍâ\x00143b®Í»6*ìØ«³b®Ï\x001fóô\x001fùH´¿ûgù=&p~Ðÿ\x0000y\x001fêþý_ÿ\x0000\x0001ÿ\x0000ñ\¿ðß÷Môï²~yó+9gß\x0013\x001cý Î\x0011ß}{È\x001aGù\x0011Ê?i3Ó»$Þ\x0018ü~òü1ÿ\x0000\x0004\x001c|\x001d§ÌÄüá\x0014ðRC¬Í»çhlØ«³óµÿ\x00009ít·^Ôx×áKe5ñ\x0010¦y¯lÍ/Ü\x001f¶ÿ\x0000àk\x0003\x001eÌÅ}LÏû2Ù</p><p>F>ñÆi\x001fPEæÅ]\x0015vlUÙ±Wg×OùõN¿pk·ÔPx\x001aý`¤P}ùÙ{:>³ý_ÒüÕÿ\x0000\x0006LâÑÿ\x0000úf\x0012½Hý§>¼gfüÒæÅ]\x0015vlUÙ±WfÅ]\x0015vyþs\x0013ÌCË>DÖg©\x0006KAHñ1ÿ\x0000\x0012Í_jO\x000c|ö{Ïat¿í\x001c\x0011î\x0011ÿ\x00000\x0019~EªòqóÏÍ^ys÷{ Í»1Å\x000eÄñbìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®É7|å¨y:O[L¸\x0006®ü[á?ë/CôÀÕèqjÅd¼~UÚ\x001d´#Ã\x0011ó\x001bqæ\x0013\x001d?VJnVîÈ}Çæ:\x001cõ×?ç1&µã\x000e½\x00071ÓÖfù´dÐÿ\x0000±+þ©Ï:í\x001fb#-ðJ¿£._?Öøçkÿ\x0000ÀÆ2¹ig_ÐÉ¸øHoó\x0007Þô]3ó\x0018=\x0012ú:ÿ\x0000~?Â,ö6t¿; }6å%4Ý+G\x001f44a÷gkû\x001b6ÖHçÌ|ÆÏöbj{0ÖhJ>|â}Ò\x0016\x0019¹µÖ×««ût#æ\x000eùÓ¿Kü=sCàîé-\x0007ú\x0007ãé83ô\x0005óÍY±W\x001d²3që¾Ý\x0006Ã6xaÂ=î³4ø¹õÿ\x0000å_Ã¶BYE'Þ!e~íÏ¹ÆY[ýaèz
Î\x001c³á\x0008Ã\x000e"üÊóGøfÅfMTÄWí7Ð?\x001ad§5nÑñ¦lUÙ±WfÅ]ýXÕÀöÍmñuú¸}?ù\x0019\x0000K)äîÓSþ\x0005GõÂ¼Êq\x001eÛvÂª3Uêa'ÅßßñÙå\x001füAqn9ÅæX«³b®Í»\x0008<ÍåøüËlÖÒlz£+v?×Û\x00084i1Òµ&Òå\x0012¯N<Gy~ÂúëÉ7ÆXÉWSÑö=Aús &îoV¸·^wV\x0015SÜ\x001cõfªÇ­ÛÇu\x0017ÙqZw\x0007¸?#äSI\x0014ò+ÛF±¢~ªiý¸g\x0008\Ø«²\x0005ù¡þ°r¢²CûÅú>ÐúGêÉÄÑg\x0013LËWÿ\x0000Q¸\x0015û/ð§¡ûð\x0007ån³úRÄBÆ¯\x0001âÕ;©þ\x001fF3\x0014Vb\x001el±ú¥Ç1ödßéï&\x0006\x000c_+\x0015vlUÙ±WfÅ]\x0015vlUØÖA *z\x0011Côâ­ÄÔg¼¹sþ\x0016ÕÀeGFù\x001aé\x0007pä\x001dÃ×µ8ÿ\x0000KÙU7,ªÃæ7Éådm¨ê\x00177ÄmFßÝÚ´ûC'&3Ø$makm\x0015¸;í÷(§ë9ßs\x001d¥çyTÃjìm0Ú»+</p><p>»6*ìØ«³`¥vl</p><p>ìØ«±¼pÚ»\x000burVÞj¾ßþ"pMò§úËúóÉÞK[j\x0016®Ý\x0004ª>ý¿dË.Od×#2ÛJ\x0007^'ðß=Ó1gfÁJìØ\x0015Ù°+³b®Ê"¸m]#</p><p>»+</p><p>»#^q¾ý\x001d§ÜKZ\x001fLóo~¼1\x001b²4ÓD·úÕÌiÛ'ä7Îqù3cÂ)îHÜ² >ÀTþ¼RÏ#)óÕÇ'!Ø\x0016?NßÃ;fPÔÀ³b®ÆÉZ»\x001b]\x0015vl+³`WfÅ]\x0015vl*ìa\x0018m]+³dUÙ±WfÅ]\x0015vI´ßYÞÇÜ,R\x000fö/B~æË\x0007"Î<°\x001fï{opße%Bß*ïø`¢\x001a!Ø\x001f^ÓÎw=±ÿ\x0000uÊëô\x0002iøa"ÈQ§a; \x0015mÁ\x0014?#Ç3BQæ\x0008#á»\x0002,SjÜMGQÝîÄztc\x0013õ½"cuo_Ûµ"þI£|Ï¥´ÙaÚ\x0004¿$=CÞ(üÂäÆt¹ÄºOÒ¯\x001dãó\x000cÍ\x0000¸¤¿±0àÞÌ:g@±¼MB$3Up\x0008úsç
nZLÅ.q5û~/o|`\x0016!<&Ý7Pi³	±K,o]]\x0015v4UØÜUÙ±WfÅ]\x0015vlUÙ±We\x0011\QNÆbfÅ6ìØ¥Ù±Wg½ÿ\x0000"\x00054\x0018?×þ&Ù	>'í?øÔ½Ñÿ\x0000r\x001d"òÎÍ»6*ìØ«³b®Í»6*ì\x0003¨ÿ\x0000wôÇÏÉÄÔý?\x0017a\x000ekÝS³b®É%§÷kòÍ.AÜàúC°FZÞìØ«³b®Í»>fùÖÃô^§yoü\x0012\x0001ò,Hü\x000eZý	ÙÙ|\8åß\x0008ýÎÈÎ.ÅÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlX»\x001c\x0006)\x0001ØìRìØ«³b®Í»6*ìp\x0018«±Ø«³b®Í»\x0010»µKøÞaÊ9\x0014£\x0010Î£ß)Íe\x0015ò=Ä4fÄ2Æ¾ ÷\x0011ÉyKÍ\x0017>K¿·Õl[öò+¡ùu\x0007Ø±Ão#Äþ~Ð.|¹pÜµ\x001d\x001dù[?í4`V#ò*</p><p>\x001fö9æzÐt\x0019ÄùG'Õå.¿­òM}ö^¨då\x000c¿PîçúßdùÛPµòÆ¹eæû\x0015\x001f¡¼Å
.cý¾\x0019Ðöª±çÿ\x0000\x0005:]ðÔ¡IÄÇ\x001b\x0011÷ç¥é²ø±\x0012ù¾³§ËâÄKæù/ó\x0017Ê-ä}RãN;¢5coæ·C÷\x001f¿\x000c@Ì\\x0011È«³b®Í»6*ìØUÙ°«±àS\x0005«²ð+²®Ç\x0015\c!A¨#¨9Âÿ\x00000,\x0012UkÝ1(ãwtaÜ¨ì}»öÌL¸z\x0013.\x001e¡ú
ÿ\x00008Ûÿ\x00009a5¬±è>j
EñÏÅ\x0019ý¿i\x000f@çuý¢GB\x001fË¿ÌÑ\x0001tý@þæ´I\x000fTöoòâ?,,µ±a-l^ÿ\x000091ÿ\x00008·þ42ùË }tsÛ</p><p>Rz\x000f·\x001füXGQÑúízM\x0008qQ¸=\x000egÛü¶&8*ÊH \x0010GPF)U°Ò»,</p><p>áä®Ç\x0001L</p><p>ì¼UÙ°«³S</p><p>»<ùyõÍNsÙ\x0008AþÄ\x0001úó"\x001cò{\x001f ô-c\x001e5o¼ç¨4_BÒ\x0018\T\x0008H?ês\x001cóh/'¼ÔÜwrGß+Í3èÒ\x001bÍ3F\x000f «öã>ÝÈùn2ñ;æÚ%|Þ£y;Õôn¨\x001a©û-ó÷ÁXü×Ôu1Ízz|Cýaßõäe\x000bä¦\x001dÊ:¯ÖPdµ4?Êz\x001fÎñgy\x001e¡\x001aÍ\x0003\x0007F\x0015\x000c
AÊª^}4
nÅ$\x0005Xu\x0007\x0004âªY±WcÅ]Å]\x0015vX\x0018«±ø«³b®Í*vlRìu1E»<ßù±«}võmü0-\x000fúÍ¹ü)À6EéþO³ô 2®\x0001ÿ\x0000_÷÷¬<#_ÖßÃ#2%Þu»û\x0010\x000fv?¨\x001cëÚíÇÕ-'ùbsÿ\x0000</p><p>r°ÅXGëLâÊ?\x001cò·­¾µ¨Ú¡ÜzOû\x001dÿ\x0000dKazÖ¹/§m)ÿ\x0000$¿lö\x0016c4¼k6)v`+»\x001e\x00051C²ñM;6*ì°+»\x000bu¶1ZÎÃ¨Ïü)Â\x0017*ÅyJÅõçÇLÊn{qÏ`ù%==6ÔÅJ~ýó\x001a\ÚÇ5Æås/úç% W"J±ÔÅ\x000eËÅiÙ±K²Y\x000fÙ\x001f!6ëÿ\x0000½õåþè¾9ªþò_Ö?yeýò\x0018¦`¸ª±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]H¿&ãeþ£ÄÛ<C·Ægï\x001fp~¬öKüG\x0017õOû©1ßï\x001bç;4/^Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«±6zdUEJàI$ã\x0000Å\x001f\x000c\x001c°¦æê\x0008!?³²åÛþ9\x001b\x0002Y¦r¦ÙÎ<Ñæëo.À÷wÒ¬0 «;\x0001ýO\x001bÙ»Òh§¨\x0001<r4Ú\¹x¢e#È\x0001lîÖÂ;$2ÌB êN|êüÒÿ\x0000¶ºÖ\x000bÚyyL\x0011n
ÃÈÃüè3Vÿ\x0000Tç´öG±pÅSÔzó\x0007Ò=ç¯Ýï~ì\x000fø\x001bÃ
dÕ9sðÇÒ?¬ì\x001eö%¬yøÐÅ`8÷áûGä;~¿xæöú]JFáÚI\x0018Õf'Ä¾z^<c\x0018á\x0000\x000e@lûV\x001c1Ã\x0011\x0018\x0001\x0018@</p><p>\x0003äó¦k/!,Ç©&¤à\±¹O6*ìØ«³b®ÎùYä\x0016üÑÖm4\x0008î!µ{¹=5bB\x0003B@ÛrÍN*;±\x0002»æF\x000f1\x000b\x0002úKÛ=¦;/O<æ2³\x0018óü\x000egÉdéÞ\x0019÷sòSþpgÊÿ\x0000.î£ý'¨-\x000f¯r ¢7pîì[x0é¤ìx7>£ÞSò\x0007´\x001fðDÖvµÂ'ÁÆ\x0007sýis?</p><p>\x001eI,×.Ý\x0006{9T </p><p>¢l\x0000ÍãåÄÚ\x0013\x001d\x001d\x0015v|\x001dÿ\x0000~N|Æa´JZjÊY¨6[è$\x001fìÁY=Ø¿y÷ni|)ñRûß°?à[ÛßÒ<Ï¯	¡ç_OËxû©9°ñ=GêÎÃÿ\x0000>àüÿ\x0000ô\x001dü©Éð¿9´öcÑ¾Ô°øï"\x001e~9ØZÚýÑ÷Çôÿ\x0000·³<@k±U\x001cµÝÊ2ÿ\x0000z~</p><p>wð~Øúsì\x000evÌÉVlUÙ±WfÅ]\x0015vFµ\x001f9éDÂÖîòÚ\x0019)\x001cFkÒÌ\x000eÿ\x0000,ªYc\x0013D}áÏÅ Í<På\x001eñ\x0019\x0011ó\x0001pBz\x000c\x0003Ëq¸\x000brñWfÅ]\x0015v5Ô8*z\x001d)\x0006¿Ì\x001b	¿*¼Õ{
1K§ê2\x0008Ø¯§)hÏÜ\x0017<<N\x000c¿F¾\x0005ý\x0006ìÌí]\x00163=Æ\QâóâKô²8Ïª¢½Æ~*|û\x000fæc¯Û\x0011Âî\x0004åzQÔû«SòÏPÓf\x0019à$:á.ÙìÙvf£&	s÷â(±ùSÓ%Olè9éVfÅ]
ÿ\x0000çç\x001a\x0019³óEý(·\x001az¥|Z)d¯àëøg\x0003í\x0004+ =ñûýoÖ¿ð!Ôñèòcë\x001c¤ü'\x0018ÿ\x0000ÄãN5R=òCÿ\x0000>éü²ò¿æ\x0017×çÖlã»Ô¬¤¢\x0013\x0012ñ¬N
\x0018D~\x0002ÁÔîÁÚË{\x000fO-\x000b®n\x0017ü\x0014û_YÙþ\x001cpÌÃ\x0016A!.\x001d¤e\x001fésª=+«Wò4t¡ 9ö\x0008\x0012ÕDq(TQ@ª\x0000\x0000x\x00003¸\x0002e##gsÞRW\x000b\x0017fÅ]ßÌ_,:h×úI\x0000ýjÖhEzUÐª røüH\x0018÷\x001d§eêÿ\x0000'\x001e_æN2ÿ\x0000JA_\x001bp ø\x001cü¥O\x000b[;FÛ2\x000fÌ\x001ag\x0011Oè¤eÄ\x0001\x001dC%­sôÛÿ\x00008ÃçÁùäý+S-ÊO«$RïSêCû¦¯¹+ËéÏSìüÞ6(*?
ý¯ìßäívl|\x0019«?Xûé\§¦ä{çzÍÇ¨fÅ]\x0015vlUÙ±Wc]Ä`³\x001a\x0001¹'¶)\x0002Ý]üÌÿ\x0000Èògå(®oÒêávô-?~Õð,§Ó_\x0003W\x0004xf§QÚ°ó6{ï vO°zþÓ£\x001cf\x0011?ÅÐ>GÔ~Hí\x001eNÔùçç¯ó\x001fÌ\x0016ÞlÖoõK\x0008Þ+{«©§7§$Y\¿\x0013Çm«Ûló|ó\x0019&d9\x0012OÍûS²t³ÒiñâÈD¥\x0008F\x0004¢b\x0004ory\x001añ\x0000\x001eÃ!ÑÊÐ°t$2A\x001dA\x001d\x0008Ê\x0006ÎÒQâ\x0014Wçê»ò¿Í+ç}\x000bNÖ\x0013¥Ý\x0013SÀ¼jÄ}\x0004»§ÉâB2ï\x0000ýçolhÎS	þ\x000cúY\x0010Æ¤^\x000cGÉÞd:	üÊÒÿ\x0000Mèz\x00153Y\Æ\x0007»ÄÀ~¼£Q\x001e(Hw÷;^ÉÍàê1Où¹ ~R\x0005|g\x0007ß>&ÿ\x0000Ï¼ÿ\x00008¿å_ùùzñøÚjÔkÑnR¾ÿ\x0000gS\x001f»\x0014Î\x0013±5^\x0016N\x0003Ê[|z?Vÿ\x0000ÁC°?¤üÄ\x0005Ï\x000f¨ùã?WËê÷\x0002ßEê/!Ô~¬ûÑüzæÅ]\x0015vlUÙ±WfÅ]\x0012?çè?òiöÏ?òzLàý¡þò?Õý%ú¿þ\x0003ÿ\x0000â¹á¿ï"éßdüóæVrÏ¾&9ú\x000cÿ\x0000y]ýkÈVËþû¹ºNµÿ\x0000vrú:ç£ö!¼#Þ_à¡\x000e\x001eÒ Ø×èHïÅ\x001fè\x0019î\x000cß>LÍ»?7ßóW[óþ¯QN2D¿:Bçö±¼Òø}Áûþ\x0007ÐàìÌ>bGç9'ö`g3Pú*'6*ìØ«³b®Í»>Ïÿ\x0000Ï­ìøi:ÍÅ\x000fÇw\x0002W·Á\x0019?ñ¾ÿ\x0000Fw\x001eÏ\x000fLû?àÅóàt$~r\x001fñ)N¢w\x001f,úkóÚ[\x0015vlUÙ«»\x000b[YµSC4@¿\x001aÿ\x0000\\x0018ïoð&ütÀ×\x001ee±´\x001c¥¹\x0007J´¨\x0007âp\x001cu\x001f6Èé2Oa\x0019\x001ftIý\x000eâN\x0003ÿ\x0000\x001biòÛkÿ\x0000#ãÿ\x0000°xÑï\x001f0ÙüýNéeúà|\x000ex#þ~CçX#ò½¬ÑÈo/¢\x0004#ªF!;\x0013· ~s½»x@\x0003ÎCôØ¿àSÙò:éNQ#ÃÇ.`äc\x001f¸m|uð\x0019ðÇ8\x0017ë¤ç6*ì£\x000b±±vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015v/ku%afGSPÊH û\x0011\x0004Å\x0010\x0008î-y1Ç á\x0004\x001e`\x000bã¡!GB
\x000evÿ\x00009\x0013æAbtï­¶ä~úÖ</p><p>\x0001øyõÞµåööûT¨Îcý\x000ci|O\x0013üßá÷×èåäðßè\x001bAâø¾\x0018þ¥\x000eûøGÓäË?Ç7Þ£êoüôøéá_ã×ß;{Sùøó\x0003qè%\x0007S°Ë°Ã´æ\x0008z\x0017å§ÿ\x0000Ä×Ëê</p><p>Ã
\x001eO\x0003O²¿Iü+Ú:§Ù]2Oaoè&ýNç5ygÄ]®(pÆ?þhÿ\x0000\x0014_3¡¬1|\x0011ûwoöGð¦
Ê[\x000elUÙ±WfÅ]ÍPÖO fÇOËâëµ\x001cþ\x000f«$â1éßÍ3ô\x0005\x001fÃ\x000b³%Åzþ\x001aZý¬ÿ\x0000S	>.üÞÿ\x0000Ìÿ\x0000(ÿ\x0000â\x000b3\x001dÍ3b®Ê¥qWeqÅ]*ìå?^L:Ô]¶ZÏ\x0018£(êê?öñ\x001bxe3eÞWÖÅz\x0012Ý±Øÿ\x0000)þ!^pM%Ñã\x001bµQEcÔ\x001f\x0000\x0003m§~jÑMØúÄB¬£â\x001e#Ä|³ÐùKSÍ³b®Ê 0¡Ü\x001e¸«`Ó|óÆÇÈ:Û[¹¤\x00125íÅÍPÿ\x0000±;}ùqõ\x0006ã¸z=Øÿ\x0000\x0010Ø\x0017y\x0013¤u\x001fHß=\x0011´¼ß6*ì®8«±´Å]»6*ìØ«³b®Ï8þlè\x0006Îè_ ýÜÀ\x0006>\x000e\x0007ñ\x0019|\x000bt\x000bÓ¼¨	â6ì~$Üª¡É§äÿ\x0000¤,ä\x0008ÀÊd«¯p)Eú2\x0013c4ÎÌêXQxÑOu¬­­fÁJìØ\x0015ÙT®*ì®8m]Â®Í»6*ìØ)]\x0002»\x0019$Be(z0 ý;b«¸\x0010Glñ\x001cñµ¬£fÈ\x001f5?ÙSÞ"ar£ñ\x0019ìÝ.ôjPGp:Hßxß1^\x001bw\x0001µ£?²Ä}Ç\x0007`B\x001f6*ìØ)]\x0002»6\x0005vlUØÒ0Ú»<÷ù³­Î.> \x001aF+âjMk\x0018ÇVè\x0007¤y:Â3\x001fÖ\x0008øÃ0¯µ\x0006tÏË»\x0001§éî\x000böGúS+å®FË\x0015ó-ÇÖ.¤?Êx£&Ù]1Hs`WfÅ]Ep«±¤S
«²°«³`¥vl</p><p>ìØ\x0015Ù±WfÅ]EpÚ»\x0019]\x0002»6\x0005vlUÙ%ò¡õ.
¹é<REô²ÕáÉÁ9ûÝ;\x001e¹\x0006\x000eÉon\x0006¦ñ_³Äÿ\x0000ã"\x000e\x000f÷Ð7ÓLÞí7¿{²"FFÚÝëÏ6Òi·h¼¥µ¯ª¤¶\x000f*Nz?²]«á\x0013§¡#p=Òîÿ\x00009Öë4Ã0£×oqè~\x0005è7\x0002Rm$4Y>ÉðaÐýø[å;ôòýÊé¨üì®×Ó¥=Ñ¾ÔDÿ\x0000<fªG÷ÍÏ¶]âDj 7\x0003Õç\x001føïÜâvn¤Ì\x0011-¤\x000f\x000cÇt»ýÒæÖìÍÚ}b3Æe÷ìß#W<uÞ±\x001cÝ1W`ËËG¯Ùuä?Q\x001fAÉ\x0010\x001dò(vlUØÒ1WcqWfÅ]\x0015vlUÙ±WfÅ]EqC±\x0014;6)·fÅ.Ï~þF¯\x001d\x0006ÛÜÉÿ\x0000\x0013l|GÚSþ\x0015?óÜg[È¼Ã³b®Í»6*ìØ«³b®Í»\x0000ê?Ýý#1óòq5?OÅØC÷TìØ«²GgýÚæÏ\x0017 îp}!Ø'-ovlUÙ±WfÅ]	ü÷ÓGë¸\x0014\x0013$r\x000f»üW,\x000fµ{1ÄÓD4Ê?mþg\x001dÂõnÍ»6*ìØ«³b®Í»6*ìØ±v<\x000cRì¼RìØ«³b®Í»6*ìp\x0018«±Ø«³b®Í»6*ìØUØ[åý[ü\x0019æK
J´è9ü>?îÉù53öGãb5Ìzù¿±âý©Ðþg\x0004«õ\x000fóyý«?-$?NÕ¼²ÿ\x0000\x0014úy\x001aïÅvWýÿ\x00003Zæþ\x0018Öï´ÊQ\x0018Ô¨\x001f&¨È{;ªñq÷|c·ÜÇÙmgæ0çT}ñÛî¢~fÁþ.òææeÞD
cr{óxÉù®ÿ\x0000N)sÛ>rÍ»6*ìØ«³a¥vX\x0015Â®ÇàWfÀ®Í»6\x0015vl»8WæGå¹¼-¨iëñõ!û_å/¿ïÔoY°ÞáÄË÷\x000fÐùÅßùÊ%Ñ?-yB!\x0004-­Ó\x001d£\x001d£ÿ\x0000'ò7ìô?
)\x001bü»üÈm\x0011û\x0013oÑXõø\x001fòâ?,¯\x0016ZØòa-l^­ÿ\x00009-ÿ\x00008Ã\x001fc}{ËÑªê@r% [Ö«ØKàzIßâ¡ÏM«\x0007\x0001\x0008¨#¡\x0019°\x000esòhZÙ9\x0014«©!\x0010FÄ\x0010z\x0011\x0003\x0012ªXü»6JÙ°«²ÀÁjì¶a\x0018,z
ÏÑ¶\x0007#A+CªÝ3²ÊOü\x0013nfrré\x001a\x000b8BØOÔ3ÚÊ\x0000_
¾ìÄ·\x0015ádò5Å\x0006Ø9«Y\x0000ógåõ¿\x0001\x0000ã³±öaßç×-©2-\x001fÌréd+|qÿ\x0000)íò9Å´­ZûòæèÃ*5øã'áaüÊQûòÒ8\x0008âgWvþfH~ÍÜ\x001f\x0003þ,ô¶«E®Â·6æ¨ßx=Áð#("H§ÞÙ½¤\x0014#ñ÷\x0018iÇ\x0002\x0010¸ìUÙ`W\x0015v>Å]\x0015vlUÙ±dì°+»\x001c\x00051bìFæålãiì¢? +iR(ÌÌ\x0011z\x0000úsÅºëj2Épÿ\x0000jF,~\Ê\x001b7½ÆÚ\x0001j\x0012ôP\x0006z³ÈºWè>\x0018È£2óoïú©ò6Zy\x0016¿wõËaÐ\x001a\x000fÛ\x001bù?Õ´»â¡à\x0018Ç#Íwcõ.£\x001e\x0006¿pÎ!ù[mëêh\x001d¿</p><p>\x001c¶|$ÎüÕ'\x000bV\x001fÌT~5þ\x0019ê +5¼«\x001dÇ\x0014[±Ø­;6)vlUØî8«±Ø­;	|Æieqÿ\x0000\x0018dÿ\x0000!!\x001b¦ï<ë¯ëÏ\x0019(Û2^ÔN{+ÊiÇOµ\x001fñJ~¬Å<ÚKÆ5c[×o×\x001c\x0008¤¿6,\x0015v]1Wd®\x001f²>C>m×ÿ\x0000{?ëËýÑ|oUýä¿¬~òË!û#ä1LÁqU3b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»>~Lÿ\x0000Ç\x0002ËýFÿ\x0000¶xnÿ\x0000ÏÞ>àýYìø/ê÷Rc7¿Þ7Ï:vh^½\x000b\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vQ4Å[\x0002¸>L\x0004+"W\x0002É/\x001c°E\x0008ømùa=ÍÝ3&\x0010C ³±å{ëþ9\x001b\x0002Y®¥ò¦ÙÎüÇæHtdº¹q\x001cQ©grv</p><p>\x0005IÍÎK,²\x0011²M\x0000\x001b0á¢b\x0010\x0006R\x0000\x0001Ô¡XiËjY\x0008UQRO@\x0006|{üãüÙ¹üÒ¿ylÑ·»\x0005\x001br#§6êOo³ÐgÒ}ØÐìÌ`P3?T¿G¸?`û/ìÜ;\x0017\x0008\x0003BòO­÷\x000fèÚñß2kí­ÊH$D§à_o\x0013î³9\x0006t¯hÇ3b®Í»6*ìõäüá¿?;8ÜÃ\x000fÔ´óÿ\x0000\x001fw ª·ücO·'Ì\x0000å×lÛé;/&§z¡Þ_8öÛÍ\x001fbÜL¼Lêp¢Gõ(ýþHY®Ö\x001fsà3Ï\x001euò}çåþ£s¢êiéÜÚÊÑÈ½ª:\x0011â¬(Ê{\x000ekrâ8¤c.aí»?_´1G63q\x0012\x001f\x001fÒ9\x0014B8qQß#Ö·RXÈÀÌ#\x0006GSFVSPA\x001b\x000eàå`ÖáÎ\x0006@c!` ò ®"¹úYÿ\x0000ZüîóßËvú£õØ¿qz´È\x0005ZAG_</p><p>ýõ\x001eÎÕþk\x0018Q´½ïÁÞØû<{\x000fW,Cè¯\x0019þéï/·«\x001e¹ÑjvíÍÄ(fÅ]\x0015vyÏþr«ò|~uyVïKy]Ä>±iµO­\x0010$(ÿ\x0000]yGþË5£¥üÎ3\x001e¼Ç¼=Ç±½»ü¬Rj\x0007Ñúëð5/½´¾\x0003Û¾~n4=jëÊwê\x0016NÐÝ[J²FãfI\x0010Ô\x001f ÇÐsÌ!36 ¿tj4ðÕã9(N&$t"B\x0003(aCÐçé¯ò\x0003óßóËËöºõ½\x0016W^\x00171\x000f÷\é´ò¯Ä¾(ÊsÕ4Z¡©øûß=¦ì)ö&ªx%È\x001b¿\x0003Èþæ\x000b\x001e/EçhÌçQÍ»6*ìóüå^¯êS½ÿ\x0000	ÜÉo{\x0012zE´Ä #FûHÅjT¯ÄHâ>Ök;F33á<öê\x001eßØÌÚlZÜ	áõ}1údG"/¿n½\x0015í\x001cºgæyÞé±gcRÌI$¤½sËI·ï\x0018ÄDP\x0014;!éûÿ\x0000/ÿ\x0000±¿ü´Ôíü·¬Lóè×R,H\x001d\x001bWsDhÉ©\x0011héöEy-\x0008<º>Êí)aÄíî|kÛÿ\x0000b±v\x0019jpÄG4\x0001¡^ \x001b¥Üyô÷\x0001»¶\x0012\x000eC¨üsïfz\x0013ñâK\x0015vlUÙ±WgæÃþs2Ùm|ý­*ô3£}-\x0012\x0013øòþÕ\x0015^ÿ\x0000Ð\x001fºýfà¿æòhj=ãÿ\x0000>ÉüÖúå­÷®[â¾·j	ý!fAì¯ÅÀ\x001fÎç:\x001eÀÔØ8ÏMÇé|þ\x000b½Á<zÈ¨xs÷â~"ÇÀ õ\x0018©G\x001f#W³¯~tK3b®Ï\x001fóóß&CEÓuÄZKÏNµ\x001fðÑ¿9Oh1\#.ã_?ì}ÿ\x0000þ\x0004:ÿ\x0000\x000fQ\x0001þ8	\x000f|\x000fêc§=	_\x0011#ÿ\x0000\x0008üÂÿ\x0000\x0002ùÚÖÞVã\x0006¤hþ\x001cßâéõ\x0015T®sCØÙü, tß©õø%v_ç»>r\x0003ÕÜ6û\x0012OÁ\x0019zÐûo¡¼ôâ6*ìØ«³b®ÏÌ'üä·G¼ã¬éª¼Q/$xÇs~õ\x0007ü\x000bò~/\x000b,ûwý/ß¾Ék¿= ÁîN8ýhz\x000fÛ\x0016EnÜÐ\x001flúaÿ\x0000>Âóç×ô½KË7Åk:\D\x000fòL8°\x001f'Jõu>Ïæ¸Ê\x001dÆþoÿ\x0000Á{³|<Øµ\x0000m8\x001f|
²_b_¨¥\x0008o\x001cúkóâ[\x0015vlUÙÌ¿1?9|¿ùQ\x0017­æ\x000bø-vª£5eoõbZÈßìTæ.}T0}d\x0007}Ù}ªíSZ|r\x0015\x0011ï¨T&ìçÎoÍ/ùùÌ\x0016ü­ü`ÒÀ¹»øWæ°¡©ß§'_u\x0019Ìê= \x0003lcâSî\x001dÿ\x0000\x0002)J¥«É_ÐÇ¹øÊCî\x0007ÞNþs÷gÎÌßùÈï4þn]oQàcþóÆ}(\x0007·¦
NÅù\x001f|æu\x001aüªF»¹\x0007Ûû#ÙM\x001fd×"_Ïªé¥uð¤|vë\x0017AC0\x001e¹[6*ìØ«³ô)ÿ\x0000>ýóqó?-`sW±{cã@ÞªýË Qì3Ò;\x0017/\x001e\x0010;\x001f§ô¿\x0015Á7EùnÑ,þÎ\x0003öÂÒ+åâçß=±×ÊPÉ\x0010J</p><p>¶à\x0011ìqH5»³ò}­Å7uYÒ\x0016)5¥Óq³+Å!£\x0003Ø+?0qÈù\x001f¸¿£:s\x001d^\x0018.3±Þ'\x001fÚÉÆ>c?L\x001f?qþrùnÇ^B=Ic\x000bp£ögOAÿ\x0000\x0004*?É#=OE¨üÆ1/½ø3Ú^Æ=«Éò¸\x001eøKxýk\x001e/EçdÌ×RÍ»6*ìØ«³b®Ï\x001fóô\x001fùH´¿ûgù=&p~Ðÿ\x0000y\x001fêþý_ÿ\x0000\x0001ÿ\x0000ñ\¿ðß÷Môï²~yó+9gß\x0013\x001cû½ÿ\x0000>ÓÔ>³äùà¯÷ZÂéÉ#o§®z\x0007`Êñ\x0011Ý#÷\x0007ãÿ\x0000ø,âá×F_ÎÅ\x001f²R	. >?£>gJø¢\x00076*ìüéÿ\x0000Îvùf/yóPpB]§¨hÈÑªì{Ñ÷\x0019æ±Ã4¯­\x0011ò~Ýÿ\x0000Æ®:ÍÄ#Î\x001cPî"DýÄ\x0014úÉ¹ öÏ\x001fæôäVlUÙ±WfÅ]\x0015v}Êÿ\x0000bÙz>T¾äÔä\x0000×¨X!\x0003ñ-÷³â±ý/Ð\x001fÿ\x0000à½[wa\x001flæj'â\x001f,úE;á\x000cØ«±\x001bÖÕ\x001aY\x000f\x0014PYè\x0000\x0015'\x00014Ê12 \x000eg`ìü¦þ`ù²o:k\x0017Ú¼¬Å®î§îvõ\x001d\x000f\x0006v\x001bggÊrHË¼ó/èeè££Á\x0010\x0002¡\x0008Çý(\x0001Æ\x0000\x001e\x0003!¼ÏûòiA~Qb{¿\x0014Ó²«Ó²É'®+NÊÅ.Í»\x001aØ±-\n(w\x001cØ«©\x0015l.lU¾9±V¸æÅ]Ç6*î9±WqÍ»lU®9±WS6*à3b­ñÍµLØ«TÏptÏ@/ÒzW¦Eo.>°äö\x001b\x000cÚâ\x0008uYgÄ_hþ]y_ü/bâIGæFËþÄmó®)§ÛúïSÐnr\x0019§Â=ìðCû¯Ío4ìL1\x001aMqT_\x0010¿´ßÃéÉ6k]ä<Ø«³b®Í»6*ìj_Þ\x001fÍ\x000f¥Öçú]þN­4÷O×3!Æz\x001aZýôæ«?ÔXIñoæïüvn>Qÿ\x0000Ä\x0017\x0004f;\x0017æÅ]\x0015vlUÙ±WfÅ]\x000bóCÉW'Sµ_ÿ\x0000|£±þïï¾]	tlz\x001fu¿P}VS¸û\x0004÷öþsùiçS©\x0001§]\x001fÞ¨ýÛ\x001fÚQû'Ü\x000e##8¬\x0007Í\x001a\x0017Õ¹|\x0004üCÀÿ\x0000#[[</p><p>ÊÅ]ó_@úý²ÞÆ>8~×º\x001fèwûòÈ\x0016q,¿Ê\x001aÕå07Ù~ë\x000fëO!yüAdæ²ÇðIó\x001d\x000fÒ?FB!IgtïÑÓ\x0003ào~G·ÑL\x00146*ìØ«³b®ÆñÅ]LUÙX«°·WÒbÖà{YÅQÇÒ\x000fb=Æ\x0010i Ò*Êñì$\x0012ÆhAÿ\x00001d²oËíK¸¿Æ{ýÛ|¿ê
ÕÄ\x001e­pùÖ«Ô¯³\x000eßÃ=V$\x0001pEGÈæ;CÈ\x0019x\x001e£\x001dµ\x0015vl\x0014®Í]\x0002»\x001aF\x001bWeS$®ÊÅ]\x0015vl\x0014®Ï yÞ×êzÊÅû-ÿ\x0000eG\x001eOiÐ%õ­b?äÓîÛ;ïå}ç×4ÈÔõ>ãQø\x001c£'6óy× ônØÿ\x00000
÷ìÎW!l\x0018Þ7</p><p>»6*ìØ«³`¥vl»6*ìóæ$\x000b}­G\x000ca</p><p>u£\x001a\x001a}ù\x000eMÐäôï-Hmì^Eê\x000bó\x0003=
mh¶1¬1</p><p>"\x0000ª=ÙE´¼ÖiLì]·$Ôý8®\x0015SÍÙ°+³`WfÅ]F\x001bWc:dÙ±WfÈÒ»6\x0005vlUÙ±WfÂ®Æ\x0011L*ì¬i]"®Á\x0016Me"Li\x00180ù\ ÒA§aß,ÖÒòC\x0017÷RÒXÿ\x0000Ôr\x001fuiôd¦7e1EØBfb~\x0010j\x0007¿L\x0007bX\x0015ØÇA !A\x0014 ÷\x00198ÈÄØæ7</p><p>Ø<w\x0019Ã\x001fË\x0006\x0019_ËEø	\Üé\x0013\x0013ONànÐ×°§úÜO|ú\x0013°;N=«UÄ6ó¯ºAå»B'I1<áÈ;áßïÜÏíu\x0011rî*8N¿Ì½èÎäß1\x001f1Ú%^\x0017\x0011±xÎÅd]§¿\ñÜì³ÙÙ?ï\x001fwwÃÒb±¿\x0013Õôÿ\x0000ÑÒñ]Ñ¾$>*zd¯9æÔ¯$6ñÛ\x0019\x0007íÛº¸ÿ\x0000Qþ\x0016û)úr|Ã>cÜìd\x0018;6*ìØ«²®*ìf*ìØ«³b®Í»6*ìØ«²®*ìaÛ\x00164ìØ¥Ùô\x001bòU8h\x0016êçþ\x001d²\x0012|;Ú#z©ûÇûìê5Þ\x000by»v^\x0014»6*ìØ«³b®Í»6*ì\x0005¨v~c(ÏÉÅÔý.Â\x000c×:fÅ]+/îÇù÷Í/¤;?Ò\x001d²ç!Ù±WfÅ]\x0015vx»þrJEmNÝGÚ\x0016Â¿Kµ?QË"ú×²\x0000ø2?Óý\x0001Ùç/vìØ«³b®Í»6*ìØ¡Ù±C±àS\x0014»/\x0014»6*ìØ«³b®Í»\x001e\x0006*ì¼UÙ±WfÅ]\x0015vl*ì°+]?<éÍ¨éòÿ\x0000¼	\x0010÷\x000c\x0010§ÝÙãÇ\x0013n>xqDÛÜ¿ç\x001c|Ö¾Ró5qpÆÚ`z\x0018ç\x001c\x0008?I\x0007èÉÇænª5»M\x0007ÍÉÒe\x0016óøÊ»WýY\x0003gö\x001c¿-xCcá·Ü_+ön_ÔeÀz\x001e!ð5÷\x0010ö_-y@Å\x001fü&ï\x0000{»Aß³Woõâ+ºg¦¾¸ø£6*ìØ«³d©]\x0003\x001bWc²*ìØ«³b®ÍÙ²Jìp\x0018-]é]só\x0003òÉu®W\x0000-ÇVNOèß¯1²áâÜ8Ù0ñn\x001fnÎ7ÿ\x0000ÎTËäb']¥Ó\x0016)ÄöþÇ»EíÕ?gm²#ùyùÚ\x0013
/S¨\x001e(íÖ3ü­þOüGåÒ¬Yxv-x²ðì^Õÿ\x00009+ÿ\x00008Û\x001fæ\x000cmæ¯+ð{A$±GB·+Jú±·©N£ýÙþ·Úô  æ¿.Ý\x000cd«\x0002\x00084 ìA\x0019xUnl*ì°0\x0015v?\x0002»\x0008<Ówõ\x000b\x001b{2(?^N!!1Ò`úÅÄiâÃ<µå\x001b_­_ÛGJÖTû©ýY.ND¹=wZÒ¶¿È?ÙìÅ§\x0019â9°«³b®ÈÇ¼­\x0017`1=\x0004S\x001b÷Sý\x000fq¦@Òk¤jÏ¤ÉÍwSöÄ\á¾BÖeò¶ lçÙ\x001dý9\x0014önýÿ\x0000[!a¶BÙ÷,V·õãÝrSâ;ôîPÐòÌ°1WcñWfÅ]\x0016TìØ«±ÁqE»\x001d»6)vsÏÌýOô~È
\x001af\x0008>][ð\x00198
Ù\x0006Gåk_¬\=\x0010\x0016þç]\x0007M:½Ô6ÃöÝAùWÃ/&¤ê\x0017?SåþU'éíÐ</p><p>\x0017aÐtÌVx¡5ß9æÍÇ£§pþyP}Õ?Ã,6qdþQÍ|\x0014á¯É»^w3ËÙc\x0003éfþÌÓ$÷ÎÒ(ÓÅûöç¡²·fÅ³b®Ç\x0001\x001dÅiÙ±K²é\x001d¾f\x0014±¹ÿ\x0000/ÿ\x0000\x00118BQÚ`¬ñÿ\x0000®¿¯<d:fSkÙûç³<ªkamÿ\x0000\x0018Sõf)j/\x0019Õ¿ývýx}P\x0019tÅ]\x0002«²ñWd¢\x001f²>C>m×ÿ\x0000{?ëËýÑ|oUýä¿­/¼²È~Èù\x000cS0\ULØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Ï¤_?ñÀ²ÿ\x0000Q¿âm!Û¿ã3÷¸?V{%þ#ú§ýÔÍï÷óÎ\x0017¯BæÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±We\x0013LU°+;äÀA(Jà)fã±L ·å·7tÌ¨A\x0016Èì¬9dZûPãß6\x0018ñ1%iºW*m\x001do^Å\x001aYQ\x0014U\x0000\x000f\x0012NÃ6ø4æd\x0000,@n°²\x0018Iä\x0000²~OEÓt¥sz*¤ì\x0007Ó<ÿ\x0000ç ¿?¬¼Õg&¥\x0016;/©0Ú2\x0014××v©\x0003z\x0001á\ö_f½É¦Í\x0003Që¸­ûö'Ø¼ú<ÑÕj*4\x000f\x000c9Êä*ÏAÏÞÃ¼ëç\x001bkv°³«#ôZ\x0003Z\x000eçõgsÔzxþlUÙ±Wguüÿ\x0000qó\x001fçÁ4KSõpÔîZ¤	½
^\x0011\x001fÊÛ6\x001a]\x0006MIô»Ï'íïjô½\x001bÍ?WLqõLü:{Í\x0005\x0019n\x0016\x001e§èÏ²\x001fó\üªôïuU\x001a®¢´>¤ËûÛþ+q·óIÍ»=3¶Ñö6<\x001bËÔ|ù|=£ÿ\x0000F«µn\x0018¿sº'ÖGô¥ú#_\x0014¦kÖa°Ïs*\x0000\x0001@:\x000cß¾HM óå¯üügþq÷ôõ¢ùëL·\x0016ª±ß*Þ</p><p>Ñ%Û©-ÿ\x0000\x0015z&r]¹¢â\x001e,y«ÝÞý\x0007ÿ\x0000\x0002¿iü	\x000eSé2ÄOIõùÜÇ½2°ïÓ>/g\x000eýNg°ç</p><p>ÿ\x0000>?åJy4¼~:f¡Æ\x000bª	?ºý\x001a7ù\x000cÝÀÍ×dë?-¦[\x001fÖùü\x0010=þYÒ\x0013\x0001ûÜW8yÿ\x0000:?\x0011ËÌ\x0004-Ü>²íÔtÏÑR°aQ¸9éoÄ\\x001c¼UÙ±WfÅ]/ùÎÉ¿ùU^kêÕ8Øêuº²1ýôcäÿ\x0000\x0010\x001dÔvÏ6í/Ê[Òý¯ÿ\x0000\x0003ÞþTÑF27\x000fîåÞb>òÛÞ</p><p>{g/¨´=FØkÿ\x00008)ùýÿ\x0000*_\x001aUüt½Q)*~\x0018§é\x0014¾Â§å`Çì\x000ccë/>\x0013ôËoqè\ø#{3ü­¦ñqÞá\x0006CúPþ(þç·V¯ õV£¨ÏÐFz3ñG\x0015vlUÙ±Wgç·þsò\x0013þT÷[P°©\x001a\x000f9kYb\x001e\x0000\x0013ÍGòµ\x0007ÙÏ7í}\x0017åçcéãßÕûOþ\x0007^Òÿ\x0000+é|<òá¨ÊùÊ?Ã/²óO,çõV¨Ï\x0013+Ï%$\x0011¸#¨#¾hêÄZ3?X\x001eD¼QÒln.AY¤µ¤\x0007¨fK~9ëøI1\x0004÷\x000f¹üçí\x001cqÇ$cÈN@{\x0019}ùä¯.uËsb®Í»?6_ó÷\x0002ãÏúÑ^Ó¢ý"\x0018ÁÏ0íSy¥ïý\x0001û«Ø\x0018ðöf\x000fê¶ROí\x0005\x0010d\x0017þq÷ó5¿(<Í§ë Ò(¦\x000b8ñO_¹Iaî\x0006cèµ\x001fÈ%ç¿¸»iû v¾&\x000e¦7\x001fëÇÕ\x001f´*O\x001fª¥sõ\x0005\x0004ër$d2°\x0005HÜ\x0010w\x0004g«\x0003oÀ\x0012£ÌlXçLW\x000b\x0017g\x000fÿ\x0000üº?SÔôh×Ò@Ï\x0000¥O­\x0017ï#\x0003Ýxý9®Áãã|¶÷Þ³ÙNÔþKÖâÌMDH	V^ò\x0006Õ­äô\x001cüÌhº´Þ[»úÜÞT\x0008Ø«ÆÁÒ\x0008Ï,\x0008#¡·ï]F\x0008êqÊ\x0012Þ2÷HS!#¦~«¼æ¨¼ñ¥Ùë\x0016ÔôîíâhkNj\x001aA4ú3×0ä\x0019b$:_ÎîÑÑËExeÎ\x0012Où¦Ó¯\x0002GJrç^·6*ìØ«³á/üü¯Ê_¡¼Ùoª(\x0001/¬ã$,Q¿áLyçý½ xû¯?àK®ñ´RÄyãÈÒÌ	\x000f·9ÓÚ«O\x0003ëþp+Ï¿à<ZE#R\x001dB9,ßæôxþU\x0010|ÌnÆÍáæ\x001fÒôþ>.óþ	]ùÞÎ\x001cñ\x0011´¿ØÈª^§4>Ûçè=%ø"Í»6*ìø\x001dÿ\x0000?!ÐEyØ]\x0001µÝ¼ÿ\x0000â#è\x0011¯Þ3Ï;v\x001c9o¾ þÐýÿ\x0000\x0002OÙü?ÌË8ü\x0008ÿ\x0000ß\x0014îÁªð9àLç_eFæÅ]\x0015vlUÙ±Wg×ùõÇöÖt6¯û¢å?á£ø×;?g²}Q÷\x001fÐüÑÿ\x0000\x0006-\x0017÷\x0019ÿ\x0000­\x0003öH~¯R^>ºçdüÖæÅ]ÿ\x0000ùÉ-\x001fô\x0017õËjP
FåÀðY$2(ûgkãÃcúGí6ýÿ\x0000ì\x001fA§ûT\x0007Æ1\x0011ý\x000cÜòEù\x000cöüûWóô\x0016©säë·¤7Êgµ\x0007 1ñ¨ÿ\x0000üã\x001dÎo{\x0007UÃ#õÜ{ÃåðYì/\x001f\x000cu\x001e¬~ÿ\x0000RGcþl¿Ý!5\x0008ª9ÝsínwOÊFlUÙ±WfÅ]\x0015v|7ÿ\x0000ÊÇÍzz\x0013ð-\x0008\x001e\x0004ÜOSôÐ}ÙÀû@x?«úKõ·ü\x0008\x0007ø\x0016CþÜÜcýiÆöOÏ>mç0ûªaSÿ\x0000çØßk¦ê:'`\x0005ÔbêÜ\x0013ÖH¾\x0019\x0014{´d7Ê6Î·ÙýEHã=w\x001f\x0007çø.öAÉ\x001eª#è>\x001cÿ\x0000«=â~\x0007oóÝF:Þ\x001bgÙÜî\x001fÒØ«³Îó_óZOüäUÛß\x0005ä\x0001¾­v\x0017µ*¬¦ã4Ý	\x001e*TïÍv:±Gb9\x0017·ö[ÚÌÞÏd2Çê«\x0019å*ê;¥çóµx.\x000c\x0007n\x0019ñãÏ¿ó\x001evòs¿Õ-ãÔ`\x001ffKi\x0007"?ã\x001bñp|@\x0004W¡9Åfì\¸ù\x000e!äý9Ù¿ðMìý`\x001cr8¥ÔL\x001aÿ\x0000M\x001b	ª_#õÛç\x001bSÿ\x0000|óvH¹Ñu\x0005ã×ý\x001aCÔÓöAÍ|´9cÎ2ù\x0017°ÃíF7Ó\x0011ÿ\x0000>#ï*âu=\x0008Ä,?!<×©ÓÐÑµ\x0006© ÿ\x0000Foô¨Á\x001d\x0016Ir¾E_i´X¾¬øùñýn3¨î0O?ç\x001f|Ñù`uoMÒÐHóO^#yvðÃE\x0014x¥\x0012\x0007^Ú}\x001e¿/,g:&£gaçUÕË:¹¢ãõ*¹÷Ûþ}Åcõ_#h\x0007«}rÛw§\x0014ßþ\x0007=\x0013°£X}ä¿\x001aÿ\x0000ÁW'\x0017h×óqÀ}òý)%ùøþöÎñä\x0016lUÙÄ¿ç$|Õþ\x000bò~±¨\x0003FK)Q\x000fùRMiïVÌ
~O\x000f\x0014ûvz¿e4×`ÇÐä>è#÷+[¯7\x0003ß?0\x0003<¥ûýfÅ.Í»6*ìØ«³b®Í»\x0018Mq`¼</p><p>eb­æÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015v{?R¸ôêVzF\x0008q\x001fsùo|#ÞÍ)ü¯ú~øO(¬6ôvð-û+ü~fÉÖ¾ºf\x0008\x000b1 \x001b{\x000cÙAõt\x0003¹Üæ«$øËµÇ\x000e\x0000øÏ~e>i¾à\x001fÝ¯Á\x0010ÿ\x0000$wúzà¼©µfÅ]\x0015vlUÙ±WdcP5ý\x001f«6~Yê}ùM\x000f££ÁþQvûØÿ\x0000L\x00058ïGÃKQD\x001fNj³ýE\x0012\x000f¿5¥õub£îE\x0018#1ØSÏ3b´ìØ¡Ù±WfÅ]\x0015v2Xe(à\x0015`A\x0007¡\x0007¨ÅW#\x0014!Än\x000eyC]Ò¥ò.¢¬ñW\x0012D|V½>²s \x001e Þ7zåÚëöÄ\x001f´W\x0003ãüsÕVi\x001aÏ\x0011ª:Sìs\x001d¡äÓBmØ£lT~\x0011©b3@·</p><p>Ñ¸ª° \x0010v8ªäs\x0019\x000c»\x0010j3Ï\x001a\x000c­ù«µ§÷2\x0010µ=8°ßGCôåÇÔ\x001bNáé\x001a\x000f1Yí ¯Ò>Ðþ9èKSÍsb®Í»6*ìØ«³b®Ê¥qWeqÅ]tüâ¶\x0011ÝÅ êñPÿ\x0000±'úåÐnÒ¼)h]|\x001fõí>S¸7V\x0016Ò\x001e¦%ü\x0005?U.mEë\x0011z7\x0012(þsúòA	nlUÙ±WfÅ]\x0005+³`¥vl</p><p>ìi\6®ÆL»6*ìó'æÍÕµ\x001fS´±«}#á?«/&ørz·¦õ-¸ÿ\x0000+\x0011÷ï¿É¹yZNË(?zéÈ\x0018MyÝ)27~¢s°e-l+6\x0005v7JÕØÜ*ìØ«³b®Í¥vyÏ³W[\x001fä´#õ\x001cÉÙº<§åä¥÷\x000füsÓG®b´¼³\x001aEp«±¤S</p><p>»+</p><p>»6</p><p>WfÈ«³b®ÍJáWc\x0008Ãjì¬*ìØ)]"®Í»6*ìØ«±¤d­]ÆÙ°+²XÃôÎ\x0008Þ[3B;\Ô\x001fö\x000eiòaæ=ÍÇ»îvDò¶·fÅ]\x0015vDüéåóæ\x001bFH\x0019ã"H\x001cuY\x0013u þ\x0019Ðö\x0017i\x001d\x0006xËøO¦^ãú¹´å îh÷ÿ\x0000P1Ý\x001báqâ§®FWT\x0012\Øy0\x0012=]\x000c\x00176\x000by\x000eÅ©Û?\x001cõßk4\x0003W§ñ\x0007Õ\x000fPý?gÜòÝàôçø
Çþ\x0017._&A}iÎ)mí\x0001å\x0019ñöú3§gS×°¼ù`f{~ÓC"Sß%üTd¢Î\x000eÂh`õ£w\x001f±Ä4ÀÆr(vlUÙ±We\x0011\UØÒ)»+\x0015vlUÙ±WfÅ]³W$\x0015ØÜ*ìpÈ »>þN¯\x001d\x0006Ëþ1÷»\x001c®Oû@oUßú\x0003³¢ñþHýg)\x0007Ìêø\x000fÒì[,nvlUÙ±WfÅ]\x0015vlUØ\x0012üV3ôe\x0019¾\x001bQô»#Ù®u\x000eÍ»$6&±§6X~o§ú]òç%Ù±Wc9ü\}«½é\x0016õäì~I³Áß·>¾»"ÿ\x0000¾â\x000e_Ç,\x000f´{-\x000e\x001d0=òûkô;8Æ\x0017­vlUÙ±WfÅ]\x0014;6(v<</p><p>beâfÅ]\x0015vlUÙ±WcÀ¦*ì¼UÙ±WfÅ]\x0015vl4®Ë\x0002¸UØü</p><p>ìk(pTô;\x001c\x0015h"Õ­çkWYc4e!ø\x0010j\x000e\x0015h\x0016§[ò\x001e©¥õM¸£\x001e\x0001\x0018J¿o£<ÇV?/­ºH\x0000~Ø¾G­\x001fí\x0018K¤À\x0007íê~ê:ÂØþ`hZþÂ
fÊßÕð&XÌ.>þ?N\x0008Ò¯?HÛÅp?Ý«}à\x001cô¸\x001b\x0003ÜúÔ
øGÏ\x001a\x001føgT¼Ó§Õîe|È\x001fÁùc6-Â®ÇL</p><p>ì¼</p><p>ìØ«³b®Í¥vl*ìx\x0019\x001bWeâ®ÍØà0Z»9\x000fæ×Zµ\x000be¥Äb¬\x0000þñG_ö@tñéÙ±ñn9¸ÙqÞáö§üâüä\x001c¾H»Ëº¬Ón\x001fnÇýçº\x0010OHØìÃ 'I(|ëë¨Ò®â\x001bÂÄõ\x001dÓèíí·l\x000c\x000fÁ\x000c\x000b9ÿ\x0000Ìüú7iQ\x0013/cQö\ì& ìÝ\x001fÁ¨ß´s½fküòÇ\x0001ÕØìi]</p><p>» \x001f\x0013ý_K;"ýæ¿Ã%
Ë8sdSÔ»Sà\x0018þ\x0019Åÿ\x0000, \x0013j°×öC·Ü§.&Ùòg^j£û\x001fz¯1ÜwæÅ]\x0006*ì~*ìòq¬JÝ)*\x001føÌòn'®è¼²QþK\x000f×¯\x0014;ùÒò")»6*ìØ²v8.(·c±C³bvlRì°+»<ÿ\x0000ùÅêÜCj:"\x0016#ÝßË \x0019ÅèL¶ã\x001bÊh>Cý¼\x0001ùI§ýjù§#h£'émá\3)'Í÷\x001e\x0001\x0007í·à7ÏI\¡­æYÅ¿9§ã\x0015´^.í÷\x0000?[Y¿£«Èþ\x0000\x000f¼ÿ\x0000f\x0008ü´áo<çö¤</p><p>?Øÿ\x0000\x001c\x0013LyÒnRG\x001f÷ìÎÉ±axà1E».«²ñK³b®ÇLPì¼UØIæQ[\x001bøÂÿ\x0000ñ\x0013%\x001d¦\x001aO\x001fúëúóÆ6Ì¦×³\x001cö/Ï=:Ôÿ\x0000Å)ú³\x001a\ÚÇuÆâQþ[~¼Ò\x0015Ksb®Í»\x001c\x0006*ìEöGÈgÍºÿ\x0000ïgýyº/ê¿¼õ¥÷Y\x000fÙ\x001f!f\x000b©\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙôògþ8\x0016_ê7üM³Ä;wüf~ñ÷\x0007êÏd¿ÄqTÿ\x0000º\x0019½þñ¾yÓ³Bõè\Ø«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»\x001aZiW\x0005® ï\x0001\x0016*à\x0019§\x000bÆ,S[{RpêóeÂ\x0008%Øéü²'¨ñ®ù±Ç,ëLÒ9Slàÿ\x0000\x001fúåÄ\x001eµü¼`}8Wy\x001cû\x000eÃÅ\x0000ùíodv&^Ð@mÖGé\x001fç¢ìOgóöÌøpÕ3´cï? nÊîníü·\x001f©rw?e\x0007Úoþ=3å÷æçF¥ù)\x0017
éZT·Bx\x0002ÇöÛÜì;\x0001õÙ\x001d³G¤\ºÌóøw\x0007ê?g½ÁØ±¸,êÉ!¿Ãù£ðKÉ<ÃæÉõóÅ\x0008HÇOñ?æ3çHö¬_6*ìØ«³Ö\x001fó¾]ò¿¼Ñ\x000eç\x0008Ì©0¥¢ã\x000b\\x0003UI@¡`ãd\x001c¢°nTÍÇeC\x001eL9:òî¿7Î=½Õk49dÒ\x001a1þðr\x0010êcÝ]vºÜU!®ÙjN~´Í.
\x0016\x0014µ³!5</p><p>Æ¡Q@è\x0015@\x0000\x000fz\b"(l\x001fræi\x0019LHîI6OÄ¤$×s²M-fÅ]õ\x001d:\x001d^\x0019-.dTd\x0018UYXQ\x0002
22¢Û,±HN&¥\x0012\x0008#¡\x001bÁ¦ã?4ßóßÓ~Bù}*l¥ýõ£BÇe¯óFjò
Ñywhi\x000ef=9äýßì´QíÝ,ríÇ\x001fNH÷Lu÷Kùtd\x0016ózë^ýóÏ\x0019­{u|ý\x0003ÿ\x0000Î\x0008~|\x000fÍ.*ùùjZPH¤©ø¤_}Fÿ\x0000)j~ÐÏFì}g\x000e\x0013õGoGâÿ\x0000ø#û7üªñ`?uä?£?âé\x001eÿ\x0000$ö\x001fIª:\x001c÷.oß$AæÅ]\x0015vxóþsòwþV×ç{då}§VêÞ¬Á\x0007ïc\x001fëÇR\x0007vU\x0019¥í}/×8î?Ké¿ð=íßä­lDC/îçÝ¹ôû	EYËé6ý\x000eÙùÖ\x0007<Ñûu>ÏÐ¿üà÷çïü®_/-óòÕ4ÀÏSñI\x001d)\x0014Þõ\x0003ÿ\x0000µ?hg¤vF·ó\x0010£õGcúß¿àì×ò>«\x0003÷YnQî¿?m#ä^Aé5GCÕÍëåHLØ«³b®Î!ÿ\x00009\x000fù5oùéåë\x000ej,Äz²ýÜè\x000f\x0006ù\x001aò\x0019»æ\x0006»J501ëÌ{Þ³Ù~Þaê¡}?Lãüè\x001e¬y­\x0004¾rûóâ/üã7üâ¶§ù³æ\x0013i¨ÀðiúuÇ\x001dBG\x0014\x001c£mí×ùÈ¡§ÙOþÏ.\x000f³û:YçDPõ|:?X{]í\x001eÊÒñcL±¼@wH}g¸\x000f´íßG\x0017\x0017"%Û©é¢h£\x0010¨D\x0014U\x0000\x0000;\x0001Ó=/ñ!6l¤8üPìØ«²ã¹Å]?Î¿2ÿ\x0000<Í«j`òYï®\x0019\x000fz!ÿ\x0000\x0003<WÄÉ)w÷¿¡^Ïi?'¤Ã\x000e8\x0003ïá\x0017ö²HWíÃ1\x001eS?C¿ó?ÿ\x0000ò³<om;r»Ó\x0008´}Ê ýË\x001ft_r='±õ>6 \x000f8ìCñ7ü\x0011û\x0017ù7])DT3~ò>ò}Cý6ÿ\x0000\x0014ö/MýùìüÞ>ZÍ»?:ó¿ÿ\x0000ò©üÛpöéÆËQ­Ý½\x0007Â\x000bÞ ÿ\x0000VJ;+(Ï4ím/×)n?Köïü\x000f;wùWE\x0011#sÅû¹='ã\x001f´\x0014úÎ_U}ÆÙÛ¿ç\x001e¿ç?!üòõ·u\x001d>{·µ2\x0004&U\x001e9eZ2³Z|©ú\x001eÚ\x001ax\x0008\x0010Mu·ö£þ\x0006í}Tõ\x0018òF\x0002uq1'Ô\x0005\x0013±ëJ3ØúÍÈ\x001aW=³ù\x001bÿ\x00009Ó¤þxkQyzÚÆæÖYRFI$xÙIy\x0015øMj@4ùf÷IÛ\x0011ÔÏ\x0002/½òh¿àu±4çQ,\x0000\x000f¨ÕîÈÂ9T\x001c÷.oß$AfÅ]1?çç¾Qúþ¦ëJ7µ»hÿ\x0000:TÃG§´\x0018®\x0011q¯ö>ûÿ\x0000\x0002\x001dw©Ëÿ\x0000\x001c\x0004¾\x0007õI1ÓGÏþ\×%òÅí¾¥nHÚhåB?6\x000c?Vq\x0018çÀA\x001d
¿QêôÃSXåÊq1>é</p><p>Mò\x00149úµò¶¿\x0017¬-µ;r\x000cw0Ç2j)"\x001f¯={\x001cøÀê-üëÖi$±K$bÍ4Æx<0û,pÖæÅ]\x001e?çé:\x0017\x000b\x0017SQö£¹ú¥\x001dâMW´0Þ2÷¹úoþ\x0003º|^pø\x0003÷\x0004×MmÏYÇ¿H&y±Wc\x000c	>\x0000W\x0016$Ó°ÛRòõîÍyo41Ë_M¤^¯\x0012À\x0006¥Eiã\x000cy>\x000e>\x001dV<ÄJ2#"ûèìÐ`za>AÊo=»ÿ\x0000>ùó_øoÏVöìÔKè'·#±n>ªþ1Ð|ó}Ø83\x0001Þ\x0008ý?¡òoø'è¿1ÙÒçQÂøOû¤\x001dòòO~óÑßR<Ø«³óÿ\x00009×¤\x001d+ó\x0003T4 êòöPF\x000fü2ó>Ø\x000eiyÑû\x0003öÿ\x0000ü\x000e3ø½ú<qùNGî)õª\x000có/<ÑsäBÛX±n7\x0016$ÑòCìz\x001flÕâÈqÈHs\x0006Þ÷]£·\x0014ðÏxÎ&'â)\x0010Ê\x001cP÷ÏÔÏåï-ÿ\x00001t=rÈÖ\x001b¸\x0012Uöä7Sî¦ª}ÆzÎ\x000c£4DQoç·iö|»?<ðOêOÃ¯Ç\x001c=2TöÉ^ë\x0016fÅ]\x0015vlUÙðÓþ~yÿ\x0000)mý²£ÿ\x0000¨à} þôT}åúßþ\x0004\x001fâY?áòÿ\x0000¦xÓ;ì|ÞÎa÷DÃ'\x001f|¹ü±Ölõû/ïm&Y\x0000­9(ÙÐû:§Øåú|Ç\x000cÄBê;_³aÚx'|§\x0013\x001fqè~\x0007u'¨</p><p>ùúòwí|õ§[k\x001a{s·º%ÿ\x0000â´>ã¡ð ç¬âÈ2ÄHr"ßÏ~z\x001c³ÃT¡#\x0013ð,qÔ¡ öÉ.Zà­Í»6*ìØ«³b®Ï¿óòûñoå\x000bx6ýî¡\x0017}þ\x0018ä;g5Ûò¬@H}ÅöÏø\x0012ââ×J]Ø¥öÊ(ý<|uöÏ¹çï×éÎ~ç\x0001-~­ù§tøäºm½î$ÏJìaXcñûËñ'ü\x0012§ÅÚy|1þÂ)\x0015ñ¬èÏeæíòô&lUÙçÏùÉÏÊKïÎÿ\x0000.KåÝ2â+i&&w1R·.?
Nä\x000f¢¹­í
1ÔÃ\x0010,oiìmãì]PÔd¦#\x0019\x0000#Wr\x0015{üUí¥\x0010·#¾|ó\x0007üû§Ï\x001a?&¶KKµ\x001d=)Â±ú$TýyÆO°óG\x001fqýoÒÚ_ø)ö~o¨Î\x001fÖö&I¢ß¡ëQ'ÌóÞuò &óD½ êb×\x001f|%ó_³òãç\x0013ð\x0017÷[×é=±ìýWÑ\x001fùÒàÿ\x0000wÂ¬·(Ý\x0008Î'¦Ï¥9ê7ÇUu*Ãæ\x0018\x0003\x00127¬Ç9EÄ;Á\x0007îV\x0006½0\x0016\x0006æób®Í»)±Alc1akób¶ìØ­»>ÿ\x0000Î6ÿ\x0000Î\x0001Ý~néñy_º{\x001b\x0019Ç+x£@ÓÊ¤%þ\x0018Ñº¡£\x001f\x0015\x0002OK ìS<s4\x000f!Ô¾%í_ü\x0012áÙ9N\x000c\x0010\x00192GiÊF¡\x0013Ý¶ò#¯*KîoÄGõGý\x0012ûË_õrÔ¾ø?êmÿ\x0000Ðþ?çKìýOÿ\x0000ÉßÕÿ\x0000©aÿ\x0000gÿ\x0000\x0014ý&Þ\x00037ý\x0012ûË_õrÔ¾ø?ê?è\x001fó¥ö~¥ÿ\x0000¿«ÿ\x0000RÃþÏþ)ß¤ÛÀfÿ\x0000¢_ykþ®Zß\x0007ýRÇý\x000fãþt¾ÏÔ¿òwõêXÙÿ\x0000Å;ôx\x000cßôKï-ÕËRûàÿ\x0000ªXÿ\x0000¡üÎÙúþNþ¯ýK\x000fû?ø§~o\x0001þ}å¯ú¹j_|\x001fõK\x001fô?ùÒû?Rÿ\x0000ÉßÕÿ\x0000©aÿ\x0000gÿ\x0000\x0014ïÒmà3Ñ/¼µÿ\x0000W-Kïþ©cþñÿ\x0000:_gê_ù;ú¿õ,?ìÿ\x0000âúM¼\x0006Büóÿ\x0000>¼´\x0016¬þ[Õ&úÚV;µC\x001bËÎ%RëqQÙá^\x001bóý×³¿à¿>05\x0018cÀydñ\x000f:7î°½53_mí&<ßå\x001bï!_Ï£êÐ´\x0017vÎRXÚÔP\x0008!!	\x00078ü¸)\x0018ÈQ\x001cß£t:ìzìQÍBP¸øù5G\x0012</p><p>#yS»6*ìØ«³b®ÏZ]Oõ-Û¶z¶8p</p><p>*rOÛì?$ùe|©dÛzâø¹ë÷t\x0018#N·õè2¼óá\x0015ÞÙ\x001cFûæ÷¿CY}R3In*¾á\x0007Ú?OO¿$­vOsb®Í»6*ìØ«³b®È¥áå#|ókTCªÊnEö×åí¿ÕtEñ7ü\x0011-üp6ZÒÌ®\x001cÀ´A_\x000cÓå7#ïc#»á\x000f>Ü½RíÇOYÇÜiü1^9R-eS\x0015vV)vlPìØ¢\x0015§fÅ\x000eÈ¼´¾gµhiûÕø£>\x000c;|¡ÉDÓ(MôMLés\x0007ý³\x000foìÈ?å?9ÆÚ\ÆFI@|+ñ/û\x0013êÊa?ó~ÅÔe¨\x001bçØý#;&VÖÂsb®ÎGù· ývÙo£\x001f\x001c&Oä?Ðþ¼²\x0005K1ò~¡èJ`o²ý>cúä«Èzÿ\x0000øÅ$cY\x0013àæ:\x001f¤o¢</p><p>J|Á§þ}øä¦Libe\x0011»\x001b»6*ìØ«³b®Í»8'ç:þòÙ¿Éqø·\x001bn7¡y ü2q/È_\x0016mÿ\x0000\x0018ÿ\x0000ÈK	sbÞ`\x0014ºýlÓ"Å&ÊÅ]\x0015vlUÙ±WfÅ]\x0002»6</p><p>WfÀ®Ê+ÕÙÂ¿9íú4Ýþ5ýG/Æ[q³ÿ\x0000#KýêªXÊüZþ1øÇ"äoÏ)ýÓ¬?Vw<©©çù°R»6\x0005vjW\x0015v06®ÊÂ®Í»<­çi=mjJv1÷q\x0019\x001eMñäõÍ
xX/ú¬^z¨õÌVå`WfÅ]#
«±¹%vlUÙ²4®Í]\x0015vQ\x0015ÃjìfI]\x0015vl+³`WfÅ]\x0015vQ\x0015Â®ÆL*ì\x001f¥êM¥J&@\x000eÅYOFV\x0014e>Ä\A¦Q4ì	8PÇÓ¯\x001aí^´÷ÀX»\x0012À®Í»6*ìãwpúZ6·j½l5\x000b{ÈÉ\x0012\x0011Èü³é>ÇÉù½\x001cx·¸\x0000~\/\x0015«\x001e\x0016³\x001cñÆP?
Ã>µVKg?îØ6÷¥FuèßÖPã£\x0000~ýóç)ÇF=Ä{@mºð$xdÊÂþßÞU\x001fðFÇ#\x001emæ\x0016à\x001eÔH/¢?³\x0003°ù£©Ä\x000ei\x0003¹Ù\x0016ÊÚÝ\x0015vlUÙ±WfÅ]#\x0015vV*ìØ«²\x0015v!WfÅ]\UÙôcòxèV#þ)\x001f¬å2|\x001f·Mêr[ô\x0007dÞ6¬Ì?É\x0019\x0013ê>ç¹pv\x000cËÜ§fÅ]\x0015vlUÙ±WfÅ]o»?çß)Ëô\x001fQôdw5®Ù±Waþk\x0018ùØàäí´ßK°n^å;6*ì\x0003\x001bò¦cÄÜ\x0019\Ï¹Ø;2\x001cÇgÏ\x000fÍùþ±¯^\x0007Uÿ\x0000E\x0019h}×°#Ã¥Çî'æK³bô\x000eÍ»6*ìØ¡Ù±C±àS\x0014»/\x0014»6*ìØ«³b®Ì1WcÀ¦*ì¼UÙ±WfÅ]\x0015vl +²À®\x001bWcò*ìØ«³b®Á_Ð\x001bæm<ý!W§»Äãøg{F82ãtÞ\x000bäþÕ\x000f6\x0019÷Hýñ/²¼Í~\x0017HòN¨>Ô/$DûCpA?/¥õ´«R{F\x0007ÜHþ\x0019èwêX~ÿ\x0000ÎMZ\x000b/8j¨\x0005\x0001¸ä?Ù¢µ\x001c\x0001\¿sÂqô¦\x0005vl</p><p>ìØ«³aWfÉ+²À®\x0005v8</p><p>`Weâ®Ë\x0002¸y+±ÀS\x0002»/\x0015vl»<±ùåfòµÚê\x0016X¤n@ØnGÓÔ}#5¹¡Âl8\x0019aÂl?[ÿ\x0000ç\x0015¿6¢üÙÑ¤òî±In­¢ôÝ_^Ø õ+^
þÅºï^GóRy¶Ñg\x0014\x0012¯Ã*ø7Èõ\x0019|aËÇ>0üùüøü£ò{XÄÕ­d¬²\x001fÚÿ\x00002\x001f¾þã&9scÅ²À®\x0005v8</p><p>`æ®ÎUùÀül\x0010xÌ?\x0000rÜ|Û!Íù-kpO\x001fÖ3þSGËR
á\x0013Ô?Y>LçÉùÅ©kO\x0017_ã\x0002¹CCÊqÀS\x0015vX\x0015Å]\x0003\x0015vyófÛÑÔKÛ\x000fÒ*?_\x000eMÑzäçmÇùXãÐ§7VHw-\x0012\x0013ÿ\x0000\x00022Ô^o\x001f£+¯0üp×\x0002i	\x0005qWcÀ¦,]\x0015vlY;,</p><p>â®Ç\x0001LQÍÙx¦Lóýç×u9Û²°AþÄ\x0001\x0011äÚ\x001e½åØ}\x001bXÇ¯Þs¨þMZq·sûR*ý</p><p>+ür¹\x0012,WÎò4ðR~óýÙ²¶\x0014ÂóÏsóº/åø&þÌº
±z/ã¤NÞ,\x0007Ü?·:?åÕtÈy\x000b¹úM\x0007à2\x0013æÄ5æ½k§ÿ\x0000&î\x0019Ð\x0000È1cùx«³b®Ç\x001d]\x0014»6*ì.Öa7\x0016³ ï\x0013øS*&É¸JàÃõç\x0014mM¯k9ë KêévÇÁ\x0008ûÆ6²ò?0/\x000b©\x0007½~ñ\x000c\x0012|x\x0018«²ñWfÅ]X¾Èù\x000cù·_ýìÿ\x0000¯/÷Eñ½W÷þ´¾òË!û#ä1ùâªfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015vlUÙ±WfÅ]\x0015v}"üÿ\x0000\x0005úÿ\x0000\x0013lñ\x000eÝÿ\x0000\x0019¼}Áú³Ù/ñ\x001c_Õ?î¤Æo¼otìÐ½z\x00176*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìØ«³b®Í»6*ìaza¥^\x0012¸I¤ZºÅ\\x000eóS&"\vÕÂé®éÆ\x0008M­ìya\x0015Õõ3.\x0018ÑlÇL¯lßêTï\x001cxÉgZ^ZmIüöÿ\x0000òå
§\x0019µ\x0007\x001f</p><p>Wá\x001eôÿ\x0000^§®Ã¯¢{=ìÔ»@ñËÓs=eä?[è¾Éû\x001f>Ú;\x0010wYùGôôv»¯ÅåôÐ\x0006²û·ð\x001dóæ\x000f<Åuæ«¾Ô%ifsRÌ\x0000:\x0000;\x0001°ÏyÓia¦0#\x0011Ð?Sèt8ô8Æ,Q\x0011ä\x0007ãsæñÛé5\x0019\x000cÓ1f=ÏêÂ\ÊsÐ±WfÅ]\x0014;\x0015·¸{GYbb®2²\x0010ÀÔ\x0010GB\x000fLA¦3 î\x000eÄ\x001f7gèóþq\x000fþr\x0001?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 3.2.1 is vulnerable.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048)
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/extensions/](https://preventionete.sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/extensions/](https://preventionete.sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Pendant-une-sortie](https://preventionete.sports.gouv.fr/Pendant-une-sortie)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Memento-prevention](https://preventionete.sports.gouv.fr/Memento-prevention)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Randonnee](https://preventionete.sports.gouv.fr/Randonnee)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/lib/](https://preventionete.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Avant-une-sortie,5](https://preventionete.sports.gouv.fr/Avant-une-sortie,5)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Equipement-1](https://preventionete.sports.gouv.fr/Equipement-1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/lib/](https://preventionete.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
Instances: 11
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 2: "page" "recherche" ].</p>
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/ecrire/](https://preventionete.sports.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 73 [https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F].</p><p>Predicted response size: 373.</p><p>Response Body Length: 444.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/robots.txt](https://preventionete.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Baignade](https://preventionete.sports.gouv.fr/Baignade)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Cyclisme,36](https://preventionete.sports.gouv.fr/Cyclisme,36)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Via-ferrata](https://preventionete.sports.gouv.fr/Via-ferrata)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/VTT](https://preventionete.sports.gouv.fr/VTT)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Activite-aquatique-1](https://preventionete.sports.gouv.fr/Activite-aquatique-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Equitation](https://preventionete.sports.gouv.fr/Equitation)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Escalade](https://preventionete.sports.gouv.fr/Escalade)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Pendant-une-sortie](https://preventionete.sports.gouv.fr/Pendant-une-sortie)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Avant-une-sortie,5](https://preventionete.sports.gouv.fr/Avant-une-sortie,5)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Equipement-1](https://preventionete.sports.gouv.fr/Equipement-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Randonnee](https://preventionete.sports.gouv.fr/Randonnee)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Memento-prevention](https://preventionete.sports.gouv.fr/Memento-prevention)
  
  
  * Method: `GET`
  
  
  * Parameter: `//s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-de372a6e.js?1612274538](https://preventionete.sports.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-de372a6e.js?1612274538)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/ajaxCallback.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/ajaxCallback.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1620213048](https://preventionete.sports.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1620213048](https://preventionete.sports.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes-dist/](https://preventionete.sports.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Equipement-1](https://preventionete.sports.gouv.fr/Equipement-1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins/](https://preventionete.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Avant-une-sortie,5](https://preventionete.sports.gouv.fr/Avant-une-sortie,5)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/local/](https://preventionete.sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/extensions/](https://preventionete.sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/](https://preventionete.sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes/](https://preventionete.sports.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/lib/](https://preventionete.sports.gouv.fr/lib/)
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Avant-une-sortie,5](https://preventionete.sports.gouv.fr/Avant-une-sortie,5)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Equipement-1](https://preventionete.sports.gouv.fr/Equipement-1)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Memento-prevention](https://preventionete.sports.gouv.fr/Memento-prevention)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Randonnee](https://preventionete.sports.gouv.fr/Randonnee)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Escalade](https://preventionete.sports.gouv.fr/Escalade)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Pendant-une-sortie](https://preventionete.sports.gouv.fr/Pendant-une-sortie)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/VTT](https://preventionete.sports.gouv.fr/VTT)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/sitemap.xml](https://preventionete.sports.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/robots.txt](https://preventionete.sports.gouv.fr/robots.txt)
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes-dist/](https://preventionete.sports.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes/](https://preventionete.sports.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/doc_PE/PreventionEte2018_FR.pdf](https://preventionete.sports.gouv.fr/doc_PE/PreventionEte2018_FR.pdf)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr/preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins/](https://preventionete.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/doc_PE/PreventionEte2018_FR.pdf%3Cbr%20class='autobr'%20/%3E](https://preventionete.sports.gouv.fr/doc_PE/PreventionEte2018_FR.pdf%3Cbr%20class='autobr'%20/%3E)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/jpg/PreventionEte2019_1024x768_Mer_Jetski3.jpg](https://preventionete.sports.gouv.fr/IMG/jpg/PreventionEte2019_1024x768_Mer_Jetski3.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/doc_PE/PreventionEte2018_GB.pdf](https://preventionete.sports.gouv.fr/doc_PE/PreventionEte2018_GB.pdf)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/](https://preventionete.sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/local/](https://preventionete.sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/doc_PE/PreventionEte2018_SP.pdf](https://preventionete.sports.gouv.fr/doc_PE/PreventionEte2018_SP.pdf)
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/VTT](https://preventionete.sports.gouv.fr/VTT)
  
  
  * Method: `GET`
  
  
  * Evidence: `/IMG/pdf/1_PreventionEte_VTT_420x594_Choix`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Equipement-1](https://preventionete.sports.gouv.fr/Equipement-1)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Pendant-une-sortie](https://preventionete.sports.gouv.fr/Pendant-une-sortie)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Randonnee](https://preventionete.sports.gouv.fr/Randonnee)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Escalade](https://preventionete.sports.gouv.fr/Escalade)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Avant-une-sortie,5](https://preventionete.sports.gouv.fr/Avant-une-sortie,5)
  
  
  * Method: `GET`
  
  
  * Evidence: `/IMG/pdf/LC_montagne_ete_2018_guideBDpages`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Memento-prevention](https://preventionete.sports.gouv.fr/Memento-prevention)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/pdf/PreventionEte2018_100x145_FR_BD5`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Cyclisme,36](https://preventionete.sports.gouv.fr/Cyclisme,36)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/col-de-la-bonette-1442836_1280`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Via-ferrata](https://preventionete.sports.gouv.fr/Via-ferrata)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>��\x0006��_�_ϭ�ޞب�K^�T����ǟx�(h�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1620213048)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
Instances: 19
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bWHERE\b and was detected in the element starting with: "	// an expected string. This accounts for the case where a form", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Randonnee](https://preventionete.sports.gouv.fr/Randonnee)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Partager"><img src="squelettes/prevete/css/img/template/reseaux_sociaux/partager.png" alt="partager" /></a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="Partenaires" target="_self"><ul class="liste_sponsors">
		<li>
		<!--
<span class='spip_document_6 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/anmsm.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_134 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo-association-rmcbfm-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_135 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_chamoniarde-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_75 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logodecathlon2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_7 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/domaineskiablesdefrance.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_68 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/FFCAM3.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_71 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoFFCK.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_160 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/LogoFC_FFESSM-quadri-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_72 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoFFME.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_69 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoFFRP.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_111 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/png/Logo_FFS-2.png' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_63 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/png/ffvl3.png' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_251 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/MAIF_Logo_prevention_rv90.jpg' alt="Maif logo" title="Maif logo" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_66 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/MBF4.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_127 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_MCF_2017.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_87 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/MFBLEURVBsmall.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_62 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/quechua4.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_128 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/png/Logo_SNAM.png' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_73 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoSNGM.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_133 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_usc.jpg' alt="" title="" class="ajustable" /><!-- </span> --></li>
	</ul>
</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/VTT](https://preventionete.sports.gouv.fr/VTT)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Partager"><img src="squelettes/prevete/css/img/template/reseaux_sociaux/partager.png" alt="partager" /></a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Escalade](https://preventionete.sports.gouv.fr/Escalade)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Partager"><img src="squelettes/prevete/css/img/template/reseaux_sociaux/partager.png" alt="partager" /></a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Pendant-une-sortie](https://preventionete.sports.gouv.fr/Pendant-une-sortie)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Partager"><img src="squelettes/prevete/css/img/template/reseaux_sociaux/partager.png" alt="partager" /></a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Memento-prevention](https://preventionete.sports.gouv.fr/Memento-prevention)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Partager"><img src="squelettes/prevete/css/img/template/reseaux_sociaux/partager.png" alt="partager" /></a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Equipement-1](https://preventionete.sports.gouv.fr/Equipement-1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Partager"><img src="squelettes/prevete/css/img/template/reseaux_sociaux/partager.png" alt="partager" /></a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="Partenaires" target="_self"><ul class="liste_sponsors">
		<li>
		<!--
<span class='spip_document_6 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/anmsm.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_134 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo-association-rmcbfm-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_135 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_chamoniarde-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_75 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logodecathlon2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_7 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/domaineskiablesdefrance.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_68 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/FFCAM3.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_71 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoFFCK.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_160 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/LogoFC_FFESSM-quadri-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_72 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoFFME.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_69 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoFFRP.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_111 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/png/Logo_FFS-2.png' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_63 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/png/ffvl3.png' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_251 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/MAIF_Logo_prevention_rv90.jpg' alt="Maif logo" title="Maif logo" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_66 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/MBF4.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_127 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_MCF_2017.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_87 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/MFBLEURVBsmall.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_62 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/quechua4.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_128 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/png/Logo_SNAM.png' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_73 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoSNGM.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_133 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_usc.jpg' alt="" title="" class="ajustable" /><!-- </span> --></li>
	</ul>
</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Avant-une-sortie,5](https://preventionete.sports.gouv.fr/Avant-une-sortie,5)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Partager"><img src="squelettes/prevete/css/img/template/reseaux_sociaux/partager.png" alt="partager" /></a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/lib/](https://preventionete.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='pagination_recents' id='pagination_recents'></a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/extensions/](https://preventionete.sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='pagination_recents' id='pagination_recents'></a>`
  
  
  
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/](https://preventionete.sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes-dist/](https://preventionete.sports.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/lib/](https://preventionete.sports.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/ecrire/](https://preventionete.sports.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins/](https://preventionete.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/local/](https://preventionete.sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/extensions/](https://preventionete.sports.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
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

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/robots.txt](https://preventionete.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/sitemap.xml](https://preventionete.sports.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
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

  
  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1580112923`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1620213048`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1612274538`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1608728686`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/](https://preventionete.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `631330826`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1580112923, which evaluates to: 2020-01-27 08:15:23</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fextensions%2F](https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fextensions%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Flib%2F](https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Flib%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Flib%2F](https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Flib%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fextensions%2F](https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fextensions%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionete.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
Instances: 11
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://preventionete.sports.gouv.fr/spip.php?page=login&url=%2Fextensions%2F</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [value] attribute </p><p></p><p>The user input found was:</p><p>page=login</p><p></p><p>The user-controlled value was:</p><p>login</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
