
# ZAP Scanning Report

Generated on Sat, 3 Apr 2021 16:07:54


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 2 |
| Medium | 5 |
| Low | 10 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 3 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 12 | 
| Source Code Disclosure - PHP | Medium | 2 | 
| Sub Resource Integrity Attribute Missing | Medium | 2 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 12 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 4 | 
| Dangerous JS Functions | Low | 11 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
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


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_etatdeslieux-sexisme-vf-2.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_etatdeslieux-sexisme-vf-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `504552553316`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `503596596596`
  
  
  
  
Instances: 2
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 504552</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### PII Disclosure
##### High (Medium)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_etatdeslieux-sexisme-vf-2.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_etatdeslieux-sexisme-vf-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `370444370556500`
  
  
  
  
Instances: 1
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: American Express</p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
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

  
#### CWE Id : 16
  
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
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.haut-conseil-egalite.gouv.fr/IMG/pdf/avis_hce_sur_loi_audiovisuel.pdf" class="pdf" title="Avis - La loi sur l&#039;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko) (nouvelle fenêtre)" target="_blank">
				          Avis - La loi sur l&#8217;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko)
				        </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/](https://haut-conseil-egalite.gouv.fr/parite/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.haut-conseil-egalite.gouv.fr/IMG/pdf/vigilance_egalite_elections_2020.pdf" class="pdf" title="Vigilance &#233;galit&#233; : Elections municipales et communautaires de mars 2020  (PDF – 103 ko) (nouvelle fenêtre)" target="_blank">
				          Vigilance égalité&nbsp;: Elections municipales et communautaires de mars 2020  (PDF – 103 ko)
				        </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/violences-de-genre/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/violences-de-genre/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.haut-conseil-egalite.gouv.fr/IMG/pdf/avis_violences_conjugales_grenelle.pdf" class="pdf" title="Avis : Violences conjugales, pour une culture de la protection des femmes et des enfants (PDF – 738.7 ko) (nouvelle fenêtre)" target="_blank">
					          Avis&nbsp;: Violences conjugales, pour une culture de la protection des femmes et des enfants (PDF – 738.7 ko)
					        </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/image-des-femmes/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/image-des-femmes/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2010:095:0001:0024:FR:PDF" class="lien-rj lien-rj-c1" title="LexUriServ.do?uri=OJ:L:2010:095:0001:0024:FR:PDF (PDF – 908.6 ko) (nouvelle fenêtre)" target="_blank">
				    <img src="squelettes/img/drapeaux/drapeau_eu.gif" class="drapeau" alt="" />
				    Directive 2010/13/UE du Parlement européen et du Conseil du 10 mars 2010 visant à la coordination de certaines dispositions législatives, réglementaires et administratives des Etats membres relatives à la fourniture de services de médias audiovisuels (directive dite &#171;&nbsp;services de médias audiovisuels&nbsp;&#187;)
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
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/parite/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.haut-conseil-egalite.gouv.fr/IMG/pdf/vigilance_egalite_elections_2020.pdf" class="pdf" title="Vigilance &#233;galit&#233; : Elections municipales et communautaires de mars 2020  (PDF – 103 ko) (nouvelle fenêtre)" target="_blank">
					          Vigilance égalité&nbsp;: Elections municipales et communautaires de mars 2020  (PDF – 103 ko)
					        </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.haut-conseil-egalite.gouv.fr/IMG/pdf/avis_hce_sur_loi_audiovisuel.pdf" class="pdf" title="Avis - La loi sur l&#039;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko) (nouvelle fenêtre)" target="_blank">
					          Avis - La loi sur l&#8217;audiovisuel ne doit pas oublier les femmes (PDF – 571.3 ko)
					        </a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.assemblee-nationale.fr/commissions/delf-index.asp" title="Assembl&#233;e Nationale - D&#233;l&#233;gation aux droits des femmes (nouvelle fenêtre)" target="_blank">
				  <img src='local/cache-vignettes/L75xH69/an-2-9977c-dc254.gif?1572271946' width='75' height='69' alt='' class='spip_logo spip_logos' />
				</a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-juridiques-13/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000423967" class="lien-rj lien-rj-c1" title="D&#233;tail d&#039;un texte (HTML – 61.9 ko) (nouvelle fenêtre)" target="_blank">
				    <img src="squelettes/img/drapeaux/drapeau_france.gif" class="drapeau" alt="" />
				    Loi n&#176;2004-1486 du 30 décembre 2004 portant création de la haute autorité de lutte contre les discriminations et pour l’égalité (consolidée)
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

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/cp_remise_fnyssen-rapportculture_20180216.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/cp_remise_fnyssen-rapportculture_20180216.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?={ö\x0008\x000fg©ó8 \x0008T(Z\x0010\x001b\x0015¡dxàáêf(¸©Û7¡o\x001e\x000f±Üþ&\x000fÂÈ·qr5&¦Ë_P¡ï¿Û\x0010\x0005¨®þ\x0005f( h\x0011u	_Ôkö/ô¹Xa{þÔá>Ñ¤|¦¤|ø\x0010ÛpáÛ8ÞRl\x0016ãe`Â\x0017\x0001+Ú¿Hm~ hR-íö:µ-b³ÙrRÌ`òc:¨u´Åî\x0007,\x0012|8Ï%zY\x000b&&Ê¢\x001a\x0013Ä>!èk\x0014\x0015¹@\x0010Ô¨E0Aþÿfww8~p\x0001`hNü¤ìù1\x0011Ý\x000e\x0016
+\x0011Ûõ'^\x0005\x001f.l:óû#-(RL\x00107¿îw\x0002Â)\x0012ÑÊÔç\x0002AæÇÄ³ë[iªCÁ÷VÌ	ýFl><\x0015¸AÁ\x000bs\x0007~±[0!dá·ê§ÃD´&S/ç h\x0011Í	êJðL©[ÁÃ7]^íùZYeñ\x0006Óc¢a\x0001èF`àÃÄÜA0 ß²Ðc"Z\x0000b+ïQ\x0017_)L	A\x001044kP£^ºåÓèZ&"\x0002%N}
gûÃCt?°°6!&RÇ~Ýï(Í¯®¢\x001cáKýe\x001f\x001e\x0005M\x0010¶\x0011\x0013ÑéÆ,ôzFª(WÎ¨¶£çâd"\x0008ZD`":î¤±¢YrCL\x000c\x0019UÙ²A*\x0002÷\x001bQ°Y \x0011\x0013SdQÒN£\x0005\x0007<A\x00104\x0016ÁÄèPdMß\x0018¬1Ýw\x0010Xt ]öáQ\x0017\x001a\x000cm5bb,01ÄÎÂÖ\x0018BÅBÐRZ
\x0013ÍÖ?çZcúý×N¶\x0018ÒCOÜþóú\x0018]ê)ûð!v,upA#&x\x0016¼>5&ò®\x0019\x0002:AÐZ
\x0013Caè¿RF\x000c\x0013`bÐbÄ ðáÁÐ=´mÇy\x0016\x0015x~q¡\x000fý\x0007F@Ð²Z\x0010\x0013N©ÝÖ£\x001dß~*\x001ak\x001a5\x0005&§`Ñ	ÖÑë
\x0011ê²><è°ðhHí0Ï¢\x0002\x0013N©ÝÖ~¾\x0018k Å5®,RÚ¸Á\wé½Î¢ÅpÑ\x000eÇ\x000f.N ¡xD\x0004i9ä\x001ffràüÊlâÔ_ oùûán÷u¿ÓËùýw\x001b?\x0017Þé \x0014ä\x0002Ó-AQDæÏBo©¤>\x001aUà\x0018***3u.öÿ\x0002G¹
endstream
endobj
19 0 obj
<</Type/XObject/Subtype/Image/Width 525/Height 231/ColorSpace/DeviceGray/Matte[ 0 0 0] /BitsPerComponent 8/Interpolate false/Filter/FlateDecode/Length 8719>>
stream
xí]m´ \x00106\x0002\x0011`\x0004"\x0018Á\x0008F \x0011`\x0004"\x0018Á\x0008FØwù\x001e`PÜÕ»½}y~Ü-0Ì\x000cðMSq\x000cÂ$(\x0012x¢UaæÂ:H`*1\x0000mb¤ãB±'al«b;\x0010\x0011o¡*:ÌBÌÜ«N¬>³Qç\x001eÉ8R±\x000böàHàU\x001fÌÃ ÐG\x000c\x0011èÇ6Øv1±«S¯\x0014>\x0016\x00102ªÈät·+\x0000O¯¹s¡T\x001c`\x000cÔÔó`#^"Ã\x0008&\x0017ÛØ\x001e*tú=\x0019Èâe·\x000eºRÉp)öÈ`\x001bl¶\x0011¯a\x0008ÒÆÀ¬\x0005\x0003
9O\x0005Ên-p¥áRìa²õo#^ \x0003\x0012uf²\x0006+Pø\x0004u!¥*¤¹T2Ü=2,¶¢[\x0013ñ\x0002\x0019V4G±Wø°7\x0013GXEç]©d¸\x0014;d Q[½B\x0006{§ød~Q©yÓ¿g\x001b»zOlÄ¤ªNÇqÆ¸Î6{W*\x0019.Å\x000e\x0019:WÑvÐAÏìLR<£[t|ëÕ
£HïvN¡#%oâ¦Õlð®e©dx\x0013;d\x0018\x001d\x0019Ì=\x001d'\x0003LµÓ\x0007Ð8¹\x0016Ò­>ØÉ)töD ¬õqÙEÐ½J7±C\x0006uUëkêÓd0c?½u2úG\x000bb7§P¡op2µß±WÉð&òdPCuvÓ¼@\x0006{	d¨1c»Õ1ÃÁÀa4W2Ü<\x0019Ô=~Ò\x0015l\x0016NA7ô\x00083<shv âéæÉ ÕdxL] ¹á\x0006èjô(pd\x0018Õ\x0005\x0019\Å§Éð\x0008®jñØ©\x0019\x00183¦	¹Q(VË>KÙ\x0012dÁÓJ\x001b\x0010/
ùVZäïÖõí\x0012gÉÐ\x0019,\x0004B\x0006wcàÖ %C°æ4ÑÀ\x0003ÐÄJ\x0017%\x001a2l¶å:\x0015w\x000c,Ì`!Ø.$YÝ\x0018\x001d\x0019ì\x0013À»J;%j£ÙN0õmÿ\x00162øÓÍ?©ðF,\x0019Üªxà^%Ã
Èa4?õ\x000b\x001f\x00080õ&2`pd\x000f-%Zo¯áRdÉ°5Ý6q?B\x0006¼:24D\x0004þ	o¯áRäÈ@\\x001d¯êW'^JÎ¢1CàmÎ~\x000eÒ¦á\x0016ä¦ª\x0016\x0019©N
\x001aÎâd½¦\x0001«\x000e\x000cà1¥oÎnÚ\ìà]±\x0000XSÉð"rN<ºô@ßÌLÖc2ØÞ(ïÕ^E¿²à-ñÆ¡GÈðD;\x001a>L\x0019{\x000co"G\x0006\x0011\x0001<*d&k\x0001\x0019V¤Ùil\x0001Õ\x0004O#
%ÃM«­d¸\x000192Ä\Pu¬u&ëvL9hÙ(ÒkQ\x001bTãM(Y×-éÙD?õFÖÓ¨á\x0006dÈ+eì\x0003
ë!&5zp2ÕC\x00022HÍµµäZ
 ©BÃòðº´ð±WÉð&2d\x000cðyPÑ\x0007ÍBúh²]'ÐV³úíö3èÈÉ\x001bÄ\x0001ãJ\x001b!jöE(,®âM\x001bMDÊn\x001892ØN}ãrZÒyØ®i \x0019ì\x0012´°dÙ6;º&M)s\x0005Y\"¹¸Ö¾\x0014\x00192¨\x001fÔÈ<l%Ûaþ&fÓÊö9t\x000c6Çb)¥®ú÷jc5§<\x0019ìøUøÍwóÙX÷ö\x0000xJ\x0006\x000fvq­})p20ßB½¼9Ü"kÑ[\x000c\x0019Âw\x001e\x001evgDª\x0001d`\x000cÉæèÌ\x0000W2¼
\x000cªZÝU?>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=\x0013ÃH0S®¬\x001fÉ\x000eUËv5»\x0014ÂÛC%£¹MÇlÞ¾\x00174Ä>\x0002tJÅWhVò¦øzÔVJ~IáRí\x001dª\x0004åì"6^Ð
+\x0007\x0002	 ü;\õ\x001fsõo\x0008àLb×ú\x0005e¾åèÀjq@Ú/\x0008ßâ\x0019È'
÷\x0005ùOÇ>>mí3}).ê*
ÞG¶Þ\x0001¬úÝcIòh\x001fÐ£¶¢;Ó¼\x0005Kÿ@4_vjkNª|ê<F\x001aT2¾íÙÎ¦Àh¼
Cd\x0007³íÿaäú£ÉÙ«§2ëî8Y¢É&¥É£\x0016\x0011Â§,UR\x00051ßÕä\x0003:\x0011zÞ@º4B¶·âxSÒü\x0004Ýýò$ü£Ëy²\x0013Kß
\x0005­Ñu¡Ý.D\x0002¨O\x0003%Ùu!zÜ\x000e-dIÕ¶Û\x000bê¬Ñ±¼\x001aÐR\x0017fÎ\x0018¸KKa-G\x0001Ö\x0001¯`»\x0011GÑ8\x000b¸Ôx\x0010{·ö¼_ÖÿûÀj'\x0011\x0010Iû0Ö\x0003 öì/Kkú\Î\x0003ò\x001c5£Üð\x0014ùùíM¬§Uô·\x0017\x001c_
¸×Ã?d-\x0006õúûÞÖs´]¬útÇK¥ Úf
Ã¨{\x001d}þ'pýÌÛ
Ã.¯»\x001fÃ¤X\x0007êæ$\x00174æ¼8e`Ev\x001cú\x0011£\x000e-Fñw@´ä©¸Z<¾¦\x001a!âXò\x0007>:5ìçj\x001f\x000bÎªtí:¦]ßÚaÏ/u\x001fQ!\x0017Ý¶ô~Ws\x0018¨È,6\x0012®ÑW[(Õþ
ç%\x0008ÓªoÅÛFÖn|J¹	rqBþ¾:'|§LÈÇ\x0006åt\x0007²E\x001a½í&[Dü/Û¹¹qU/,°
G±hC8SåÜp¨U|S\x001a¶j\x0011§?5ãö\x0007,oFe¿\x001eÃÐß\x0001µC\x0005Ö\x001e!\	·2¿p¦\x000bÏ{Îö\x0017Í\x0017ØjØ*q\x000e4ÏÝÀ¹ª½|'¹\x0012õ¾\x0016\x001e§¨'ñÒº2üÉBnäåÿæüñä×jÜ_Î×u]ï\x0016¤ïz¢+K\x0004Õu"ÄÝYòdÊ;h\x0010k4þyQ-\x0017íb¯]\x0003\x001f¦\x0003¯1<ÇA[Éi\x001eÞý\x000fp¿\x0003Qí1GvM'{%S9ü}îN¡?h;\x000b»×ws\x00163Ç&\x001dÛ\x0001YÁ+Å>êxb?».Õ£Ps¤i!ÐøáÍ~!÷\x0003Ý*´Î\x0002\x001bÌ®t<¹m ½ÚÎMÅ¨2\x000cBÔÕXMaràbLñ-+f²\x0010rÄ&®3»PW\x001fªQdþÅõç3Ò©ëyÓ\x0008>ÙqÅ\x0012\x0000ó½}wM\x0017L\x0013(}öàuÅz7Öui\x0001E4\x001duáGQ¡eCFÈzl÷{õõöÃ§üóÀÏÆ8Ú\x001c"Ï\x0012°}!aç®i°3Zºå­\x001dn?\<Ö+çp¶zÊñrf:D#5ñïÔ'±'©tç¿Sÿ]?w)¥[êÅ+¥\x0007õSíS\x0002'>Ùv¹
Gß\x0001ºB\x0006;\x000eûðsj¥çÃ?¸j'Ïe\x0015èQZÒ
ÐþÇ	xQk`ôÕo\x001d \x0014Bõ	5¨û èKõó°',¬Û+Î\x0012&µM«3¼Ö"LhÎ\x001aªhse-\x0004É3ãnhGé÷>klÛeÀÎ:ÐÞð©Ù·J½­+ríÐ :\x0002ÖvGd£@6£èQümÙ`$ñâï­^\x0013:\x001e4Öwîi¶×ÊY¼\x0003$áj¬\x0018¹¯HRân»\x0005ÁO\x001c,\x001dm2K7AüUÚ×eð$"$5Á¬º¶\x000b¦û\x0001\x000b\x001d[p\x0008T\x001azPð\x0007¥¨~Úî\x000e²×Iª¡²B£ZûS"'/!·òånm\x0011ãË»»Åj¿&\x0014\x0018Úª¹}\x0018;ÇÎÖÕj±Oá»Ñ_9<]Êú\x0002ë¿|/VÃX\x0005îcxù(«Ú7¯¸fHÄ¯/W'Ïÿt\x001f×ùDS#	\x001dè\x0006>Ü.ßNÇÝ-ð¸ÜÁHÎF`\x001fã\x0004ÿF&õà[.¬³®§+tTª\x001eâi¸¶]\x0012uî¶¬/ü/ÞOçÞNêÓ^\x000eV\x0016W"j\Iå+ÊT\x0003u@}ÕÍ£\x0002ØÌ IVåY:ª@·
ì!7S£áÑd³à°Ü\x0001ú½½MUÕ¡Ãäµ³L^YC3e³nz¿Kô3¤­RÙÃ`F¼på¹qD¼\x0012æä'õÌ\x0007)z+¶¾><\x001d
%ûÜØÛê7LÙÕà/]z\x001d\x001bV\x0013¬Ú\x0008jjÝ´·)|ë\x0014¡E6§&wÝU\x0008.25»ò9Ê(·ï/ä\x0015«é\x0016×\x0017rÃ\x0001\x0014S\x001ewéÞi¼¥Wlè\x0016YïF\x0015è´
rBüIBtW!\x0008­+Kn\x0000:jËª£à/»ªP&»vX\x001a-®²ÿÏv$Én\x00031tïSÔ\x0005ÊÁ!9ÇÛöý·\x0016ñ@Im;~D}fs\x0010\x0003\x0012\x0010©(Ý\x0006ÀëÜ$H\x0016Û\x001c§ì¯tç\x0016¦ó¾D\x0006Z¤)Ú\x001ewtÈ_\x001b¸·ÂÚ¨HY6tuÆ 
¯·hL©Ù4ïa¦×\x0015¯:Åþ>kmqW«Mx·µò>4\x000eémë­)w\x001fpÁq@ÙT.òQb»Iá
\x0008ö´|°ªÍ¸t3x\x001a
rÀé¦°t¸*YfÆ\x000bÌÅI½ñwC7Ïèn.\x00143ÐïãTDÖ	\x0011^5\x0019\x001eòó=´Wõ\x0000(!u\x001cvøÚ°\x001b[êÆ9\x00190Â('4ÎªÞö\x0011Í¼Qxé`×\x000eÊ\x0006^\x0013Ø¸º3c·ÖrÏ$që^tË¤ñ¡µF\x00059\x0001ê6õþ»ú¸2ç°1UXO ¯P\x000e~n(üoC×Õ¯§nÑÄí_\x001dms:\x001aÕ"ÈÉ°µû+£\x001b\x0008\x0012Xb\x0005\x000c\x0012qhÄÏmñ./Ì\x0016Ò#µ._A\x001d¢\x0006\x000b>F3»só_ÜZé/\x000c:`Õ\Öú\x001ai§\x0005Ý\x0004t¹²²©Ç^Wç<Æ^\x0017\x0000\x001esA^÷ªÈX\x001aM\x001bØÑ\x0016ò5\x0016å`Ü^×\x0011)ÊtõÑ§\x0017¶§lû\x0016,§£°Ð5Ý^s±^Fmï¹rH¸âö\x001b\x0018w|ãtOb_\x0007ç\x0014vê+\x0006Â(	åÃU+F³a/âa0#Âh2ÞFýµð*ëHá+1òðÊgwÿnYçífzZ=ö·ô÷ê­ô\x0017eä\x001eÄ½^ó¨²dZ0¢<N\x0007+j$ì¿h\ñ±\x0008®9¼d²Âò¡]\x0002f\x0000þ]Ýs7Ý´vôúäÖ\x0000~IÏ	ÛÆ^8i+ÛÜ\x001f´I/%Ç\x00159<ÁùÇ\x0014C>_=æ6º\x0017bvØÌ\x0000¶»ðjèC\x000eîô9¿7LUeÇw£æ'\x000bGw^\x000f\x0001«¡¯õ6~UiÔ±òx­Ll£À\x0016÷w2Sõ¾Þ!ÁäGÏ,ÜÍWïVRzNÏ\x000c_ßÉ\x000bm\x001a\x0015R0ê¾F\x0005FµXµ{4W W<3S(ýpICÑ4ï|:\x0017FìfàLk¯¹\x0014ô/Xõ±Zh)\x0012Ia£8Q\x0017Ú¤©ÀD¡\x0018½N,\x0002côù6ò¯jzÇ×ñ»k°\x0010SMÁ÷S\x001fcÖ÷\x001dóx\x001d{¼\x000c'jÆÃ9»a	Ðò/S\x0010³K[gk4S¥N'\x0013\x0007MF\x0014äZ}±ëHR\x0002;mýOß]\x0017¸$ÝVã\x0002­wÛÝ.²>\x000c¡IÜSÑ¶\x000bÖÐ\x0017\x0005ýð¤ÌÙìe\x0019\x00182½«¡\x001e\x0006|MÒmÉ)Þ!T;)F>U\x0013\x0004]'òqUQ\x001ea\x001aOf+ÙMµÄ±dúKUI4ùü=s\x0014oK\x0003ÄV;1fo¦k?KáÑíw\x000cïÞ&\x0005í\x00089ähÊåÄ\x0015¢êYO§Ê{|\x0018m6+î\x0016
¶/¸À¦IÄ/k¸kÑ}!Ê(Ø2Kô*´È­NUh¨-±I´!\x0001¿\x0011Ý2è5WÁ/Æô¨'\x0001X§\x0016\x00149É	·Þj\x0004hx¨ºÍ4CL_¿LÉ¬Û\x0010È\x0016\x001fã\x000eí
el4ßY\x0006\x001f\x0008\x000b²
·BÍTk¼íbáTÍð u­B\x0005abgùh*{.êkî\x001cqÇ¼å8Ò«þýôØß[´Õyx¾9\x0019ÿù\x000b;ù\x001f+¾½lø@%dzI¦%¦G?8\x000fÉ\x000fTéë¸~³ï
Ì&\x0014 ¸N²mh4RÉØ?I¡wOyÌ¬%kI)§¢áæû/Ýã§Æ©ä`é7ôl,W¥ò£8\x0010]Jk9\x0013©z\x0005l>cJçß\x0000ÚÒf\x0017Òn\x0000-ýrÅ\x001bA½\x0005v`ièªã \x0008òæÏdá\x0006A\x0007Òv
kõÅþúã(*Ü[Ügä.'\x000e¯âoRb$Y¹1"ËXµÑ®Ûge×Ë\x001a\x001c<÷Xºak¸|\x001d\x001b7xf+ÂÝ\x00153¢LÚ1+ðzUÈâÑe\x000f\x0003À©\x001aè;É/K0X%-åq·lÑ´äÏ½Ûo÷É\x0013ÿg«½ï6¾5Â=si£=æòÍ»a8ÙÖùÎ99ó,íÙ§<'×|¾)$\x001a¬´Ï¦\x0017,[c¼¬u¥Û¶@°U­\x001d$Æ;\x001dW°JZñ\h5}V\x0005¹øe¬gK,l\x0019(U>÷¸q²#ª¿3uõú%{²ÇZUÚ3SÑ>Uú
Òn)_\x001a¬ø?.·Hö#S\x0016XûñI09³X\x0008ÈëI\x001aÄ\x0014\x0011¡ç#GÚ~#È¹]5[N0÷{¦\x0011\x0015AD\x000b24¡7Å|
6Ø\x000b¡»ïU?j\x001býÞS
\x0014¨ê*ÅÍ4\x0015ÉÊ\x0017=ñîí§f5c\x001d¬\x001bãå¢Ô=&¼g\x000f\x001aèç¶ºJ¹
Ü:L«È!/6×Ã×_3-;ËËêq¬}¦~ô§Â}´\x0004jï\x0008o»Jfè+DC¼W\x0011ÒOÑ¥U£\x0011C4p\x0006ø4	º²r%Ê§)ÜÞc>Çkf=;Ô#fpÁ©\x001e3ÉS\x0000=|Þ80åç8×âP!LÑ§Ð+§|\x001fN\x0004.¶W¡S·%ÿL2kêyû¤fä\x0018Âó¦ø\x000câ ÚÝQPÓq::³é{¬4\x001cÏ\x000cMÏcõ³ª.V)Û\x0006_¡.µªÛPJ\x0010öôôÜ®6Su­æ
®\x0019E{Òs?²¿Æ\x0007*eá*ï&c\x0015\9\x0007£äÚ]\x0005pÒ³.[¡Àèý\x0019\x00187§AåµH9µ\x000bJ\x000e\x0013åL\x001d©\x0013+81éÊÓ\x0018 ýÐ&)\x0017<.ÙÜTß£\x0008ôL+ìû¦xPµM·Nrd,:\x001fgAFvÖ±îsËÊ\x001e\x0008Á
hõ<K~\x0004ÅÒiØ°»¤¤J½a°z\x001eã¿,'_Ét!§XÎØTó°×öbaÓß9Lñ\x0008Çí,5_ü\x001b\x0004>C\x001aù\x0003æ#\x0001èíÈ½\x0013\x001f=¥¡Là6Fõ¬Q^ªà?!^è\x000bg*çZQ*\x000féjÍ'	IÊw@½´w\x001c¦£PB#êòÎå§S½FäÍ6v\x0015CùÀM\x0013å\x0004þ>HE¥:ôzØñXàXÇ6NþHÚÓuè\x0003ãsÒixÍ{°¤j\x0018Ã£õÛÚ4çVÍß\x0005×\x0005U\x000eì#,N£Qø\x0014æâ-\x0012}·\x000b\x0012]3Jä\x0010\x0019â ¡tÞc\x0015ÜÇL\x0013\x001c*\x0010ÑöA¹7º
 áàõ\x000c»\x0017ÙóÕ\x0001¼Æj\x000bM!íV*­\x0001jÚ¯6Ù~³\x0014r¾'b2ÖÍñI2/P\x000euÀL¾è\x0005/tñÜzf¸ÊZçR58WPl,òç-Du\x0012w+ #«qXAy§3`\x0000§Õ g¡rUnXpfÃf!Çµe»\+Åï°ñ$·!T.ÊGò¼ \x0014\x0010M:cT\x0012.\x001e¶¶»uJA36¢åqB¢\x0019çù
]R¹Y\x0000æ;ç\x000elVÍ.wÃb°¶ÿ?[gi{óßZ®8McÔ\x0012¿#mi~NwÈµ<ã[\x000bÉGÿì×ÏÙ]\x0004´ß#6\x0001\x0019år=î»áfÜÇ}Ã&§ß}\q9d\x001b´Ìî\x0013Jm»ù{ !ÑW¶±¿"qò²¯Hi\x001f-¦c]Õþ%£X[èF«ñ}ý·õëþo\x001eöü¬\x001c»ô­­×ôP¯M+¸×Õõ9>¹þl¿ñ·R¾°B\x000e\x001dÁýßã¸Ëfªðr%÷÷PÒ8ÁÔ£Tn©.Ystµ<u|Z\x000c'f\x001d²3çIÇPàçknWv9×¿t.­ËöÈx"à2	'Ò|éh_Ô­¸]}!BÑ\x001c
þØ¼µdftñmäâ4\x001b¬¬\x0004¹ê]Z^»?çÕÉÅöW2"¿Æi8\x0015à¬©è1\x0010È4ó\x0010}ÖÂÿ4RH}\x000fàø!ÔX\x0001»Ä·Ëh®¾eØ4bø{\x001a;½ä\x0010+\x0019cË¡y¯O¶BÄL\x001d~µ\x0002mó\x0001éÿa»\Ò$7 |¹@ÍGò\x0012:·öý·.âDê±7Õd#\x0001J2ãQi%!eÏF4'­{\x0001\x001a£¿/g\x0019\x001aoÃw%\x0003@Â1\x0003µ:Ç
4gnÀ\x0016:*È"\x000b§[{OÓ´mg¹âí0?Ð#-Á\x0013Ô\x000f*¤\x0014 ¹Ñ"M\x0012æT\x000b^©¼,ò"0|À\x0010áoçAmÃÒ#èî+¯ã~æÌìj5nÃÎ¥ \x0015­\x0002µÚ â$(Ü\x000cT±\x0004$£ù\x0008\Æ°ºrT\x000fkþ£ú©_4¨E2¨ü\x0008Ð¹\x001bïõôz<ncU×+y\x0013\x0002¦Í\x0012ÌiïfóÊF2Ì¸»{|= ¼Á<¹Z#[\x001b:@´9÷åP\x0017ì!>öÝJý½Æ·ü6³¶ó7³âËà×ÖNW\x0003ãÛcéj¡{;K|\x001d8la¯¯Gk\æÌ½FÆv\x0016í­¦âdT¦ÝðØÙ\x0017ñôþòE]B\x0000ÿXj^ë¬0Õ\x001eLÏàø*`acB´°[~\x0012+¨]í câeS\x0003\NýVUÑÕ­ýðuIåët\x0015å{¿Æ¾b\x0002»ªÍRm?t\x0000ðc©b¬¹¦kÒü ÑT)¡Ñæ²Ð·\*ö.¸¸ÐÝú«ZÜ\x000b\x0005ÈR}¡ð1RÖ³Ügfú\x0013ooÅ'î§.Ä=[IÙÎY\x0007[¶\x001d\x0013´ÈªÌZqãè\x0004ÕIuÔÇ*I×©·Lâ\x001dÕ\x0010Øãù\x000cED|
Ú\x0001x¥2×C)´÷PcUí²æ3Ö@(ïßRÞÓ7lSÝ~êK_¡r~£8:jÝ+û\«H	\x0018wöý\x000e'²«Q1\x0003¶¡7Ð?A¢Xø¦½¹ßs´\x001dq@5BÛ\x0016\x0011á\x001b§&ÀËõqdL0V\x0010,¶uTC©xN Z\x0005Å«§Ý\x0000Û9\x0001øñ/p7£ûY*8ÁËk¡P×OÑ\x0012a\x000eøÖ\x000f)\x0018\\x000f¯tgHÂÁAÂÀ¡ì¨V¦>LMlp~ÕzÝ3ñÞv\x0003tOÃ©)C«BÅ>pUÓ\x0015÷x]ÏxÌ\x00076°üAè=àÉ$4êù.×ò\x0007?Ã>§a\x0005fÞ_½_mÑ
\¡f+öOëi1õ\x0010Ë\x0016ô\x000c\x0014.Ç\x000fÇ)]@u
Pa»[·»a\x000b·W\x0018åGçØwá\x0011[ÆÕÇêÇdÝ°\x0002%»vý\x0011ûTõôüÔ\Ü·¿lââ¨\x0015ß.÷4WA;×\x0017-Ûf\x0015î<-Ø\x0014\x0016\x0015²Ù\x0011Åhô¡K¹\x001b·µQãaèÏ\x000c®³Ä1K\x0016:¡Í\x0003ç´ÝN\x0006\x000778Z¸TG\x0016õ=f©õ\x0018±\x001d¥,Æ¶ÆÍj\x001bÕßQZ®ûÈ\x0013Ð\x001d²+­ÓOgÇ¦¶RF?Û¬È¿Ú{\x0016c\x0010>®\x001dá°)(Àk@\x0017å\x001cä:Pºü"sÜù`{\x000bgÞá9ZWàÖpH#û­2«Áòó®\x001d.¦¼SÍ«Nå@w.Õb\x0013ÒmUI\x001f©µ\x0003ÔP
¨¤(i5.\x0000\x000b4;ú^\x0012Á*¼e¢PÍêXK\x0010"nOÂE}$\x000fãR/ÊgâìNª;ÿ«ow0¯'\x0018inÊL\x0006fB\x0018Ä+
oÕg]ëÊû2psÕì\x001c­õ¡T,{¡[ü¼Sój\x0019à7°lÙ;4é»Õí:¿C]×ÍJ\x0004ÅÆX·Ü8¯mÓF­¨fÐ\x001eÂ\x001bÏÿuÖK´¢V¿ÜÖpÄÒ
s¶:ÏÍ®æÒÓ\x0006««|ù\x0000øbyl\x0004Í©ãV6½\x000e»\\x001bª\x000b:\x0004Bl¯`ô|Paït¾µ¹Ö­Øâ\x0016U5|HáSÅåÎæ[ãÌMÙÔï/\x0005+*¥úmBiùôÍÁ~|3Q\x0000û¾\x0019ý\x0007Ø³uøÎÝÂØUáhÁ:>\x0014U\x0010Á_©£\x0019Ó¸³ÛPyå>0ÂÆª«,n\x0008Ýô\x0000íÕp\x0005Ø¯ ÔÆ;tÌ]¤)Zwê>`;k¼P·GQ\x0019øã=I\x0015Û\x0000\x001d	xÆià
h\x0016º×¶
ÓlY²so\x001cqmÀ)$4Çd?ÃúAKÈ°léô¡ô`ã¢ªÉFû«\x000câ4g\x0012\x0016AÀÔ\x0001þÛVäc\x0007cÜN\x000bSb>,í\x001b*¨qËlÂC|7ºÅ)
\x001f«xèèÍ¯Õ\x0000ÍMWæ\x0002G}Nc,\x0017Ì\ó[z¼Mohl\x000e«z¿_ãr¹\x00143&Am¦z\x0011¤ë³W<¥\x0008?È?(.\x0004ªðEå\x000f¡Çê$BéËè¦\x0006©ZH
ïý44*(è\x0014o!¸XVÅÐïõÞr\x0018ö.YJDcn	Á\x001cÊ¨´\x0000¿g#	ú¤uEQî? ér«J¡
ßÉå2Fã\x0006#17\x001dzÍ<2óÖÞS"^mÛY.µ[\x000f-G#ôNÝ\x0013Ô\x000fBå\í\x0005à\x0010²W§Z¤{:5S\x0017yY2\x0018Ã\x0007ÜòaûÑæÚÞï
¨\x000e|\x001d÷35O¿¯Ë\x0015/\x000bu¦Õ\x0006\x0015'6r\x000f y y¤\x00100|!EÜ\x0007Å@Çü\x0001\x0014M
Çcû¾Ðô·Qê8ÞwbÜxÿ\x0017NA¯#Âa
\x0014)äAÌóÜ\x0007µ¾W\x0018\x000f1[é\x0017\x0013P´/X©>Bs+Ý\x0003Â\x001bÌã³j+Ò\x001cÕ+öu<«¶nö£vWzÔì!ò\x0002íÿcÖ¯»­_f]{õÅ¬ÊÆiå"EA/Q­À$\x001a\x001eË
çK­g«+\x0007]¤¤ñH°¤ò1ñëÀéfiñx\x0010a¿|c¨ÚÎ"Käs6-¯d\x001f¹¶\x0013ñ©ñ\x001aþPÝñk%\x0015\x000eÐMzüÞì?/\x0012í=}-N®ûö n¯Kc×\x0010ø\x0001\x0003ÉÅ\x00075~ÎÙòØËLÐÏ£Ï\x0016Ù)ÀK"^
ËÌâ¼òAuH¿Yòñ\x0014 ÇÅ\x001e\x0011*i$ãRïõ]øÝ\x000eÈk__Aôwî\x001cß/\x000fSaËãwaãÅØì?yl®T\x0006¡kØ
ÃË=²y8¤Pîß ,9\x001b\x00017\6T£\x001a÷wpù9ÂÊ@«/VoÈU¨C1®:îÍØøÑ\x001cbö8\x0004>Õ\x0013ÏçÌÖ\x001cáCß)ê/	\x0017\x0007î»},÷vdòÛ_èØÆ§ü¸vòÏAwDò,5\x001d¤ß<MY\x0012ès\x0019Þ\x0010mxqË]â;Uß3\x0014(°\x0018$\x0019îQ¦:­Lé\x00007È§û¶\x0013 ôo\x000cM¹@{i»ép ÙYD^è¤Q)Fë©ÁfJÏPélÂØAÉ«!%Ý2\x000cýÐEÚ\x0001ÿÃèµ¾=·ÝÏØ\x0005óv?Æ)ÐLJM¤ÔuoTû\x0014{ÑT°Bº°º¼\x0013b8\x0014.\x000fVäxÏ1~<S­ \x0004ü\x001b6>ÐÚ~0õê»smÝg¼]\x001e³§Õ\x0010k7n¶jpe'ÎOlb¨w-Ü	rIR!¨(j Ö\x0008´
WÚ\x0001qB:Gèï"xn7~óh+øuã\\x001c6ìÒP\x0005õY\x000câÑ¡E8ô²»aXØd~f$°T]MH3¬=\jÒ§]Â¯«úöæû©nñ$\x0011ÖV]·\x000e®uaS\x000b@ZÚ

ô:/6C!`¿£ýJ\x0013ü¶I\x0005Ü¯§%8Û:FpçHP­ëéKWâ\x0011\x0015ØÎÿC Kþ\x0004+Yýõ|\x0004Ðß¤Ê=6\x0015D
U2]ª»PÀv\x0013\x0019õ,ÑoU\x0006jÃ\x000eN±´"âDiÿü=8*uñlÛ;jOì\x0007À\x001e\x0013í\x0015t1C@\x0004À6Ý=½ Ò!\x0010þna=h#iY[ÑótNí¸\x0000}Ænx\x0007éxæ6Þ~\x001eÁiP;a
ÿ\x0010 O\x0004P0^\x0002'îÈ#Æ\x0014öË\x000fnÌô\x0000NYÈ·º^¨Q¤)Ì8Ré>xë\x001c\x00186q'ï\x0016sâîü=Ç·?6î^Û~¾`wÓê^\x001aó\x0017¸Ð ¬\x001b9
°¦\x000e@\x0008ÄRI8ýðièÑþ\x001afTt©ðxCÞÇò,\x000c¹\x0018\x0010º\x0018)Eé'èd)d9W¡CÜ\x0015\x000fÿ²ZËr×ç;ùR.T&EäsCU¤GùGËq\x0015mÜ½Cê\x0011/U°¹%U3EÐ²æ<6\x0007
}ÓÚ­i1îø]ÄÔcÿ\x0011¹\x001e]×X\x001e\x0004n½®ã|¶ÞÙÚ×!Y¬ü\x0004$_Â`ö/ëUÏ\x001b7\x000cCw\x0003þ\x000f7æ\%êÃöÚ"K\x000e\x0005¼õ\x0002Aq\x0001
ô {ÿzI>R¯LE dËÒ\x0013ùD>B
kn\x0001Á3×´``±¼2Ê\x0002x\x0016u@r\x0002`\x001eyl~ôðÓ<å!é­:,Ðm©.»¡% rY/\x0003[\x0006ûe¨3Ô$¹\x0018f\x001dDS,Ærè¢A2%È 
,³~T\x0012xnÅhÑ4H¸Í\|\x001eZP\x0001¨ºw¾DóyMU¡ 2áX\x001dÕípÓ]Ä¢L!\x0013C\x0016\x000cS7\x0012¡¹6Î¬¦\\ÕwÕ×ÆCðç°é²	÷ÕÃ¹1$\x000feÁÅwÀÝ,MQ=4ôZvD¾#«\x0007PJ\x0010m*\x0002Ù \x0018Rí®8Þ$P\x0010I\x001f9.¸@P\x001cÓl$òÈ'¨Å\x0004&_\x0018[Dó\x001bN\x0016?¿\x000e\x001f×Áåu\x0015ívx}\x0019>¬ñGáº^tÅ\x001f\x0012!¬Ë\x001cc\x0005Îq6Øá,·þ\x001e¾=ùês«ÜµÌ-q#nQúÇ8³µej8sÐ·éüø
¦Q>~_?+
\x0008ùêFÂêús¸Ýëv\x001f[Ü\x0017%~O	¿ú]´gt\x001eù¿­\x00101C¡É³r\
M©0¬|Kö\x0016"¶&ÛS,dÝ¼Dv\x0013\x0007¸BÅ\x0003g²ÎD\x0002Åa\x0013\x0001Ài\x0014G\x0005®8mc=!Ù	»~¬vªØÆ£>yµ¹>\x001fï.òNüXOeA\x0011+\x00151mÐ¢ïlz\x0017j¿¼õ³¥Ô	æ\x001cJ
æUGoz¬qs×nVÑ\x0015ù¯\x001d2ð¼Õ»çz\x0014ïyn^à%®\x001aè2ÍyÚÍs=ÍR}±@gÁÀÒé\x001e{rQG{$³³\x0012\x001dEü>Cbãó\x000c(Û\x001e)ßá±\x001aÃSl\x001bçté`4>«#²ßºÍwÑgÂ¯Â\x0004J\x001bÿu7ì0Þ`\x0010¨
4nKè\x0004;w]®âÙþ¹ÎþùfÔ'oÆöZ*K\x000bá¤D?°ò\x00198Õý±vÖ){c\x001aFa
Õf}#ÂCw¯ÌÉj\x000buÙ\x001cÌ\x0007º\x001aÈ«îO\x0012\x000b:/jJ÷8Û\x000eÅ\x0010þ/Ô²x0Èq2gèU¨Ø-¿ùQ\x001c¢\x0017\x0010´+r?Í~E°D»"Ú-AR\x0003çÆ"(KÕXÿ®;Ôç\x0001p\x0004J`øÇ0wâ¸:âÛt&q\x000b¦Ù·nIEJM\x000fÕeÇ©Ñfb]éS\x000efâd4®;DâÍ§uxúòé0ü\x0015`\x0000#)4\x001c
endstream
endobj
1955 0 obj
<</CS/DeviceRGB/I true/K false/S/Transparency/Type/Group>>
endobj
1985 0 obj
<</BitsPerComponent 8/ColorSpace 1956 0 R/Decode[0.0 255.0]/Filter/FlateDecode/Height 25/Intent/RelativeColorimetric/Length 405/Name/X/SMask 1991 0 R/Subtype/Image/Type/XObject/Width 34>>stream
H|åW\x0002A\x0014Åßªk
¶ÝÝ­Ø­(XØbw¡²\x0018\x0008Æ"#»ð:î91Þ/óa~çÎ}w\x001ew|zjL\x001a\x0019"	ô¡i\x000f¢\x0000ÜÀUq½ÚÕåyzZ5ÖßÓÕ"¯¯-ÉÏËJK
\x0013ühL\x0014.>"íµXL·\x000cÃ\éÏ\x000fw¶u\x001bKÚ©É¡¶Ò\x0000Ê\x0003Îñ)§S8xÞÁsX\x0008YYq§;\x0018 á\x0012_þ-\x0007©ô\x0007Zi$\x0012NN¯ ÁoðìÁ\x001dU\x0001H&_\x0016\x000en3\x0017@ªa\x0001$-rd»Q\x0011@î\x001fÂÐ\x001b+Þ'\x0013ÜI\x0005®´æ<,ZËÆ\O&¬Aén\Çã0þ\x0015ß\x0001\x001306ãG"¦^ÿ	Z	©\}+\x000b\x0013±\x001a\x0013qZ´BÂÀÞ\x0003k³óÂüÐÓ8\x000e
â¢¦\x0011õÊî©1[ÿZ&!ÆM'-ì©wPtr^Y]û°Z»~xq}÷Ð»À ãêo\x000bí%Ë)©ë\x0018Riu{g×÷f³a.\x0013~¢Ü=E¡²êÆ¾qÕ"ü\x0017áj)\x000eÅ\x00081>\x0004\x0018\x0000fªt.
endstream
endobj
1986 0 obj
<</BitsPerComponent 8/ColorSpace 1957 0 R/Decode[0.0 255.0]/Filter/FlateDecode/Height 20/Intent/RelativeColorimetric/Length 289/Name/X/SMask 1992 0 R/Subtype/Image/Type/XObject/Width 24>>stream
Hb`à\x0010\x0017áçåda`fddd\x0001%ÇÀÐ@?wG[\x000b3}-5ey\x00191^6 ¸aLycKcCeq~^^fJblT·½\x000e\x001f\x0003MAG7\x0010t¶·0\x0010´ÆÛð2p¹Ut÷¢¶L[6\x0006 :4áÞ®,S\x0006\x0006©°\x0016tñÎTM\x0006\x0006Åèvtñ\x0008\x0005\x0006\x0006íd\x000cñÚ\x0000A\x0006\x0006,tk»ËØ\x0018¬ÐÅ{rÍ\x0019\x00188K0 ÎÀÀïáüæ0I\x0006\x0006\x0011ÿjtñ\x001a_\x0001\x0006\x0006qb`\x0000t#Ë\x0015;°\x0003Å\x001d"sÊ\x001a[ZÚá2íéFÀÐdÕµó\x0008LÊ.®ªojíìëë®V\x0001?#+¯¨±µkPx\FaiY§\x0018\x0003\x0012`á\x0011QÕ³tts1`gÀ\x0000,\x001cüÂü \x0006@\x0001\x0000ÆU¥O
endstream
endobj
1987 0 obj
<</BitsPerComponent 8/ColorSpace 1958 0 R/Decode[0.0 255.0]/Filter/FlateDecode/Height 21/Intent/RelativeColorimetric/Length 272/Name/X/SMask 1993 0 R/Subtype/Image/Type/XObject/Width 26>>stream
Hb`\x0001F ```fãäå\x0017\x0011bg`båà\x0011\x0010VÖÒ761³°¶wvuóô\x000eð²\x0011ã7²ut÷
KIÍÈÊÎ-(*.©¨ªÈ÷WõH/,¯©««\x0007ÆÆ¦Æúú& ¨\x000eSÐ\x000e©nhjÆ\x0000µa²ºIuX$ëüEtë±Êø	jc©ñåÅ!SéÉC¦Ì]=\x0011LS\x0013b,6ú<;&ù(l®®Ï±bÆ*mÉ ]O¶94vLS\x0006ðZL¦ú4\x0003\x0006Ñ&LP¤ÇÀïVZ[\x0006j
\x00025\x0018Ø\x000c\x001d¼\x0002C "2&>>>!!>ÂÇNOPPDD\\X\JAEEMMSSMUI\x0001 À\x0000DuÕî
endstream
endobj
1988 0 obj
<</BitsPerComponent 8/ColorSpace 1959 0 R/Decode[0.0 255.0]/Filter/FlateDecode/Height 21/Intent/RelativeColorimetric/Length 335/Name/X/SMask 1994 0 R/Subtype/Image/Type/XObject/Width 32>>stream
Hb`À\x0005XØùÙ±IpðK«\x001aÚ¸ùz[K¢J\x0008)¨éÚ{$fæU×7V)ÄX¹\x0004åµ\x000c-ì½¢S²Ëë:û'M2mÚ´Î\x0004%v\x0011\x0015C\x000b×è¤ìêú¶î¾þ)3gN\x0001\x0005ý©
\x00126\x0011yeõ-]ý\x0013&ÌÀ\x0000ýÉÒ\x0012AÕý¦\x0000¦ôþDqÑð\x0016l2\x0010Ð\x0015'ÄíG¾3Ý­\x0011·|[\x0000\x0017]\x001d\x001ey\x001f\x000e\x0006óò)8å[ÜÙ\x0019'áÖàÂÌ [¾ÞA)­\x001f§|\x0015\x0003hL\x0017.ùÞ"\x0013\x0006\x0006ÎÀV4] 0uêä¾ö\x0004\x001d\x0006\x00066çº©Ó"S`ÒÄþþ¶¦Æúªâx?K9`ìå¶ôt47ÖVW\x0016æ¦'D\x0004{:Ù\x0019ëi(Ë
q°\x0000åµ=¢b#¼\x001d¬ÍuÕ¤\x0004y9X\x0018S
´\x0000\x000fX)8\x0004\x0000\x0004\x0018\x0000W\x0006(
endstream
endobj
1989 0 obj
<</BitsPerComponent 8/ColorSpace 1960 0 R/Decode[0.0 255.0]/Filter/FlateDecode/Height 24/Intent/RelativeColorimetric/Length 326/Name/X/SMask 1995 0 R/Subtype/Image/Type/XObject/Width 30>>stream
Hb`@\x0000&\x0006\x0006FFffVN>A!QI)9	v  3§ ¸´¦¶±©w`dTd£4\x0003\x0003¡½§_`pDLjV^QIiemCCCSkWWgu¨\x001a\x0003OQsk{WWïÄ	&L\x000c\x0006S@DW,PÖ4£k
VÐ¤ÎÀãR3\x0019·¬LP\x0007\x001eYý´^ì Y6«Â	8eUùl3»p¬ÊmàÞØU\x001e(ËÀ&kîS×?\x0015S\x0001H\x0016\x0018"F\x001e)\x001d}'c\x0005\x0006¿sly\x0017\x00050Y àÕ°\x000b+hAq`w¢<"þ8-ýsë<ß \x0014½\x000c,\x0012&ñUp\x000bºb%\x0018P\x0000³k\E[/Ø\x0018²@À¯e\x001bRÜÒ\x0003î\x0016Ãe``W´òÏnìÔ\x001aM\x0016è\x0000I3¯ä²|_\x0011¬²@ya]\x00077k\x0001\x001c² \x0010PPáÀ-\x000b\x0002\x0000\x0001\x0006\x0000¾\x001fÞõ
endstream
endobj
1990 0 obj
<</BitsPerComponent 8/ColorSpace 1961 0 R/Decode[0.0 255.0]/Filter/FlateDecode/Height 24/Intent/RelativeColorimetric/Length 368/Name/X/SMask 1996 0 R/Subtype/Image/Type/XObject/Width 32>>stream
Hb`À\x000e\x00189ùÄ$ØD\x0018\x0018\x0018\x0018Â¢²Ê\x001aÖ.\x0001¡þÒPIfn~!\x00195m#K\x0017øì²ÆÎÎÖªHyf\x001e)5-c\x001bgï°Ä´¼¢º¶®	¦O={öÜ¹sgNJ\x0017µÈ.¬¬mêé:múÌ¹óçÏ\x0000ÓÓd\x0014#k¦Ï,*¯:\x0005$H>ER.c:\x001eùdqét<òSbÅ\x0012&ã\x0014# \x0010=	§ôÜ	A|\x0002a\x0013qË÷zqñøuâ4î\x0004/6v\x000f<ò½\x001el,îí8ågu¸03»4áoubf°®Ám~=\x0003E5NùÙ¥f\x000c\x000c¦³qHÏ¥ËÀ _,\x000fàùógN6iROKM®*\x0003fþt 0\x0010Ì9sú¤ÎÎæê¢¼Ì¸po7[\x0003%^\x0006\x0006øú¾îÎ¦â´¤(_wGs=uUY\x0011~.VHÊ\x0013u\x0008\x000c\x000föpµ3ÑQ\x0010àbef¥VhÊ\x0014\x0014\x0015àç\x000022`\x0003\x0000\x0001\x0006\x00007BK
endstream
endobj
1961 0 obj
[/Indexed/DeviceRGB 159 1997 0 R]
endobj
1996 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceGray/Decode[0.0 1.0]/Filter/DCTDecode/Height 24/Intent/RelativeColorimetric/Length 352/Name/X/Subtype/Image/Type/XObject/Width 32>>stream
ÿØÿî\x0000\x000eAdobe\x0000d\x0000\x0000\x0000\x0000\x0000ÿÛ\x0000C\x0000\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0003\x0002\x0002\x0002\x0003\x0004\x0003\x0003\x0003\x0003\x0004\x0005\x0004\x0004\x0004\x0004\x0004\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0007\x0008\x0008\x0008\x0007\x0005	



	\x000c\x000c\x000c\x000c\x000c\x000c\x000c\x000f\x000c\x000c\x000c\x000c\x000c\x000c\x000cÿÝ\x0000\x0004\x0000\x0004ÿÀ\x0000\x000b\x0008\x0000\x0018\x0000 \x0001\x0000\x0011\x0000ÿÄ\x0000Ò\x0000\x0000\x0001\x0000\x000b\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000	\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008
\x000b\x0010\x0000\x0000\x0000\x0000\x0001\x0000VK\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008	
\x0011\x0012\x0013\x0014\x0015\x0016\x0017\x0018\x0019\x001a!"#$%&'()*123456789:ABCDEFGHIJQRSTUVWXYZabcdefghijqrstuvwxyz¡¢£¤¥¦§¨©ª±²³´µ¶·¸¹ºÁÂÃÄÅÆÇÈÉÊÑÒÓÔÕÖ×ØÙÚáâãäåæçèéêðñòóôõö÷øùúÿÚ\x0000\x0008\x0001\x0000\x0000\x0000?\x0000?@ \x0010\x001fÿÐ?@ \x0010\x001fÿÑ?@ \x0010\x001fÿÙ
endstream
endobj
1997 0 obj
<</Filter/FlateDecode/Length 370>>stream
H\x0014Æ\x000b©`\x0014áÿÿk¶­¾Ò9\x001aB\x0014\x001df4*!ÔY½×½kýþÂ^¯ö^??\x0000Ö4pÐ¦©º®Ïúù¨ë\x0007ôù¨\x001e÷ê\x000e*Øí^]«Û\x0005ÜÀµ¼ò|½\x0014²(Ë¼<gç<+òÓ¹8\x0015Ùw§yæ§4ûNÒÏ8=ÆéW\x000cÏ1qø\x001c>£}\x0002Â 	ý8ô£\x001fíwQ°
\x0003ïà{Ýf\x000f¶`»\x000evë¶ÞÊß¸¾·Ü­\x0017[°r<×ñÎÆ­\x0017öÊ±\07]Ç.gÆr¦/­ØZËÒ>LÕ±T\x0007j¨sCÊÜ.Ûl«­I*YÊÄRES\x0011ÍéØ\x0000²`L\x0005]\x0016ti¤I¼&òªÈ©cN\x0011YEd¦\x0002#ó´,PÒ\x0008I<phÂ\x0013\x0014YRd-\x0018Ó@
\x0004zÐ\x0016õ\x0005ª?Bý\x0011ÙãQ\x000eqÄ¡\x001c pÀ¸!Æ\x0011\x0018Kt[.CtÁÿVÿ\x001dÐ ÷NõÞ(ü
a\x001d
ï uÈî?ý	0\x0000ÞÖ8
endstream
endobj
1960 0 obj
[/Indexed/DeviceRGB 149 1998 0 R]
endobj
1995 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceGray/Decode[0.0 1.0]/Filter/DCTDecode/Height 24/Intent/RelativeColorimetric/Length 352/Name/X/Subtype/Image/Type/XObject/Width 30>>stream
ÿØÿî\x0000\x000eAdobe\x0000d\x0000\x0000\x0000\x0000\x0000ÿÛ\x0000C\x0000\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0003\x0002\x0002\x0002\x0003\x0004\x0003\x0003\x0003\x0003\x0004\x0005\x0004\x0004\x0004\x0004\x0004\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0007\x0008\x0008\x0008\x0007\x0005	



	\x000c\x000c\x000c\x000c\x000c\x000c\x000c\x000f\x000c\x000c\x000c\x000c\x000c\x000c\x000cÿÝ\x0000\x0004\x0000\x0004ÿÀ\x0000\x000b\x0008\x0000\x0018\x0000\x001e\x0001\x0000\x0011\x0000ÿÄ\x0000Ò\x0000\x0000\x0001\x0000\x000b\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000	\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008
\x000b\x0010\x0000\x0000\x0000\x0000\x0001\x0000VK\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008	
\x0011\x0012\x0013\x0014\x0015\x0016\x0017\x0018\x0019\x001a!"#$%&'()*123456789:ABCDEFGHIJQRSTUVWXYZabcdefghijqrstuvwxyz¡¢£¤¥¦§¨©ª±²³´µ¶·¸¹ºÁÂÃÄÅÆÇÈÉÊÑÒÓÔÕÖ×ØÙÚáâãäåæçèéêðñòóôõö÷øùúÿÚ\x0000\x0008\x0001\x0000\x0000\x0000?\x0000?@ \x0010\x001fÿÐ?@ \x0010\x001fÿÑ?@ \x0010\x001fÿÙ
endstream
endobj
1998 0 obj
<</Filter/FlateDecode/Length 346>>stream
H\x0014ÆvP\x0010EÑÿÿ\x0010#Xè> \x0001T\x0014ìDD±Ñl\x00145Ã¬=gÝÏ\x0007îý®\x001eîõzU_eQ¾²ÈË2/¼È³\x001cdÏ\x000c<\x001fÙóþ|Ü\x001e·ëýÞ@\¯É5AFi\x0012¥q&a\x0012I\x0014Æ ¼ÄÑ\x0019Dàr
Áùp>\x0006çÓþtØ\x001d\x0003ÿ°Û\x001eö[h°÷\x0017ø®ï¹þfµý[mÝ¥ç.Àf5sÎzî¬göj6YNÇ\x000bg¼°­=;£¹=Í©e:aôÊP\x000cúc`ö,`h¡\x000e»C½\x000b\x001dhÙSLU65ÙT%C\x000cU44\x0011ªw\x0005]A}¹\x0003z"ßùÄÃÐ$^\x00139U`U­Ø.bTQ\x0011\x0003CéÐ
¢\x0015ªpÌS2GÊl[bÛ"Ó\x0016éH7\x0005ºÈ\x0006¢\x001a$\x0010E@;\x0014Ñ!qÀ·q¾U\x0007\x001chþ\x0000¶Qc5(\x0003ï
1
!0\x00184Ñ8FÕ¿hü_\x0001\x0000ÁxÚ
endstream
endobj
1959 0 obj
[/Indexed/DeviceRGB 153 1999 0 R]
endobj
1994 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceGray/Decode[0.0 1.0]/Filter/DCTDecode/Height 21/Intent/RelativeColorimetric/Length 352/Name/X/Subtype/Image/Type/XObject/Width 32>>stream
ÿØÿî\x0000\x000eAdobe\x0000d\x0000\x0000\x0000\x0000\x0000ÿÛ\x0000C\x0000\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0003\x0002\x0002\x0002\x0003\x0004\x0003\x0003\x0003\x0003\x0004\x0005\x0004\x0004\x0004\x0004\x0004\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0007\x0008\x0008\x0008\x0007\x0005	



	\x000c\x000c\x000c\x000c\x000c\x000c\x000c\x000f\x000c\x000c\x000c\x000c\x000c\x000c\x000cÿÝ\x0000\x0004\x0000\x0004ÿÀ\x0000\x000b\x0008\x0000\x0015\x0000 \x0001\x0000\x0011\x0000ÿÄ\x0000Ò\x0000\x0000\x0001\x0000\x000b\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000	\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008
\x000b\x0010\x0000\x0000\x0000\x0000\x0001\x0000VK\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008	
\x0011\x0012\x0013\x0014\x0015\x0016\x0017\x0018\x0019\x001a!"#$%&'()*123456789:ABCDEFGHIJQRSTUVWXYZabcdefghijqrstuvwxyz¡¢£¤¥¦§¨©ª±²³´µ¶·¸¹ºÁÂÃÄÅÆÇÈÉÊÑÒÓÔÕÖ×ØÙÚáâãäåæçèéêðñòóôõö÷øùúÿÚ\x0000\x0008\x0001\x0000\x0000\x0000?\x0000?@ \x0010\x001fÿÐ?@ \x0010\x001fÿÑ?@ \x0010\x001fÿÙ
endstream
endobj
1999 0 obj
<</Filter/FlateDecode/Length 347>>stream
H\x0014ÄºP\x0018áû¿ã\x0018CB¤I©D2\x000f!
§Ý`>ÿ^Ï»¾ï\x0017öùÀ¡Ï\x001b¼Áûõz=±'ì=î\x000fp/î ÈAçE\x0015y§i¥Ð,EYp\x0011Ê\x0012¦(EIþP\x001c£$Jâ0\x000e8
âà\x0016·(ð£Ð\x000f\x0003?¼]\x0002ÿ|»xþÕóÏ'ÿrºz·?¶ÞqsÜ­\x000e`»ÜoÜÝÚÙ¥³\x0001î|íÚ«½r¦K0·\x0005ug¦k\x001b\x000b08SÝ±õ¹¥a¦6\x0003Æxf¨¶©ÚP]\x0002M±4ÙÒeSLM2UÑ\x001c*\x001aÊh¢\x0008@Äk@äÇâ`,r@\x0015XE`ä!#ó´<¤%¸¾ÈõD¶7bº#\x001a±ÀP\x0002Ý\x0019öI&ù~ïµùnkÐmqT¥\x0008"Ø\x000eÁ
¬3í:MÖév
kÕú­*Ö¬ö\x0015¨t2Ö(S_¬^¢\x001a%ÜZ©\x0003ª%²úÓ©ý\x000b0\x0000A1Ð
endstream
endobj
1958 0 obj
[/Indexed/DeviceRGB 131 2000 0 R]
endobj
1993 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceGray/Decode[0.0 1.0]/Filter/DCTDecode/Height 21/Intent/RelativeColorimetric/Length 352/Name/X/Subtype/Image/Type/XObject/Width 26>>stream
ÿØÿî\x0000\x000eAdobe\x0000d\x0000\x0000\x0000\x0000\x0000ÿÛ\x0000C\x0000\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0003\x0002\x0002\x0002\x0003\x0004\x0003\x0003\x0003\x0003\x0004\x0005\x0004\x0004\x0004\x0004\x0004\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0007\x0008\x0008\x0008\x0007\x0005	



	\x000c\x000c\x000c\x000c\x000c\x000c\x000c\x000f\x000c\x000c\x000c\x000c\x000c\x000c\x000cÿÝ\x0000\x0004\x0000\x0004ÿÀ\x0000\x000b\x0008\x0000\x0015\x0000\x001a\x0001\x0000\x0011\x0000ÿÄ\x0000Ò\x0000\x0000\x0001\x0000\x000b\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000	\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008
\x000b\x0010\x0000\x0000\x0000\x0000\x0001\x0000VK\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008	
\x0011\x0012\x0013\x0014\x0015\x0016\x0017\x0018\x0019\x001a!"#$%&'()*123456789:ABCDEFGHIJQRSTUVWXYZabcdefghijqrstuvwxyz¡¢£¤¥¦§¨©ª±²³´µ¶·¸¹ºÁÂÃÄÅÆÇÈÉÊÑÒÓÔÕÖ×ØÙÚáâãäåæçèéêðñòóôõö÷øùúÿÚ\x0000\x0008\x0001\x0000\x0000\x0000?\x0000?@ \x0010\x001fÿÐ?@ \x0010\x001fÿÑ?@ \x0010\x001fÿÙ
endstream
endobj
2000 0 obj
<</Filter/FlateDecode/Length 304>>stream
H\x001cÄBP\x0000á÷Òb\x0010²&\x0014\x0016\x0016¦k©f{ç?ßùßoØï?°\x0017ôz=çãùh \x0007ÔÔMS!uUWe]
2/ª²(!Py\x000e@\x000e\x001cä\x0019(²"O,ÍÓ\x0004I,$Nã\x0008Â4	(âð\x001e\x0005~\x0014ÜÂû5ð=ÿâúW÷öíÞ¼óÕ=]<Ç;9îq{vìãÞ>î6ÐÁ^\x001f¶+gcí7Ön½°-Ó^¶el¬Ùz¡¯\x0016úÒÐj\x0019Sk®|Í®61UÙÔeS©8WÄ\x00194\x0011f
È¼\x000eI¼.rºÄiÒ\x0018\x0011Ç*$°ªÈLyZáG2KÉcJfI!D\x0006\x0017h\\x0018á<5DÈ\x0001O
8rÀ\x0011ý1Ñc¡O\x000cÁ1\x0006ïBô°Cã\x001dôÁÇ\x0008ê·©^ÂZT¯Eb-¢û'À\x0000­\x0002Qm
endstream
endobj
1957 0 obj
[/Indexed/DeviceRGB 142 2001 0 R]
endobj
1992 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceGray/Decode[0.0 1.0]/Filter/DCTDecode/Height 20/Intent/RelativeColorimetric/Length 349/Name/X/Subtype/Image/Type/XObject/Width 24>>stream
ÿØÿî\x0000\x000eAdobe\x0000d\x0000\x0000\x0000\x0000\x0000ÿÛ\x0000C\x0000\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0003\x0002\x0002\x0002\x0003\x0004\x0003\x0003\x0003\x0003\x0004\x0005\x0004\x0004\x0004\x0004\x0004\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0007\x0008\x0008\x0008\x0007\x0005	



	\x000c\x000c\x000c\x000c\x000c\x000c\x000c\x000f\x000c\x000c\x000c\x000c\x000c\x000c\x000cÿÝ\x0000\x0004\x0000\x0003ÿÀ\x0000\x000b\x0008\x0000\x0014\x0000\x0018\x0001\x0000\x0011\x0000ÿÄ\x0000Ò\x0000\x0000\x0001\x0000\x000b\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000	\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008
\x000b\x0010\x0000\x0000\x0000\x0000\x0001\x0000VK\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008	
\x0011\x0012\x0013\x0014\x0015\x0016\x0017\x0018\x0019\x001a!"#$%&'()*123456789:ABCDEFGHIJQRSTUVWXYZabcdefghijqrstuvwxyz¡¢£¤¥¦§¨©ª±²³´µ¶·¸¹ºÁÂÃÄÅÆÇÈÉÊÑÒÓÔÕÖ×ØÙÚáâãäåæçèéêðñòóôõö÷øùúÿÚ\x0000\x0008\x0001\x0000\x0000\x0000?\x0000?@ ?ÿÐ?@ ?ÿÑ?@ ?ÿÙ
endstream
endobj
2001 0 obj
<</Filter/FlateDecode/Length 325>>stream
H\x0014Ä	`\x0018áÿÿkÆÒö|\x0014¥\x0012*û\x001a¡Dy;×}ï\x0017V\x0014phQ|\x000fìýyÃòRçY\x0006Ï³\x0017ÈÀ+}=Ó'H\x001fÏ4IÁ#~$÷\x0004ÜoI|ãk|n×K):ß®a\x0014QxÎÇKx<öáaw:l`¿9l×Ýj¿]í7Ýz±]Î·«`³\x000cÖK¿´ðWó\x0019X\x0006çÎ=7©ãã»¶çZkN\x001dsj\x001bSÇXk
Æ#½dj\x000e04[ïÛCÕ6Tk¨ZúßHï\x0001SëbhÊP\x0007½ÞEº4¥ÝW$U\x0016Á,:B\x000fñ=Ä.Ø.b\x0015ù\x0015é@Ë"-\x000b-ov\x0000×@l\x00031\x0014â(ÄRmhRj\x0011\x0012M@Å\x0016^jâB\x0013\x0013ZÐÀx@Õùf\x001dÊ5ªAY²Z"ª,^a
\x0003ð
UhìÁÿ\x0005\x0018\x00002hÜ
endstream
endobj
1956 0 obj
[/Indexed/DeviceRGB 161 2002 0 R]
endobj
1991 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceGray/Decode[0.0 1.0]/Filter/DCTDecode/Height 25/Intent/RelativeColorimetric/Length 364/Name/X/Subtype/Image/Type/XObject/Width 34>>stream
ÿØÿî\x0000\x000eAdobe\x0000d\x0000\x0000\x0000\x0000\x0000ÿÛ\x0000C\x0000\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0002\x0003\x0002\x0002\x0002\x0003\x0004\x0003\x0003\x0003\x0003\x0004\x0005\x0004\x0004\x0004\x0004\x0004\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0005\x0007\x0008\x0008\x0008\x0007\x0005	



	\x000c\x000c\x000c\x000c\x000c\x000c\x000c\x000f\x000c\x000c\x000c\x000c\x000c\x000c\x000cÿÝ\x0000\x0004\x0000\x0005ÿÀ\x0000\x000b\x0008\x0000\x0019\x0000"\x0001\x0000\x0011\x0000ÿÄ\x0000Ò\x0000\x0000\x0001\x0000\x000b\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000	\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008
\x000b\x0010\x0000\x0000\x0000\x0000\x0001\x0000VK\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0001\x0002\x0003\x0004\x0005\x0006\x0007\x0008	
\x0011\x0012\x0013\x0014\x0015\x0016\x0017\x0018\x0019\x001a!"#$%&'()*123456789:ABCDEFGHIJQRSTUVWXYZabcdefghijqrstuvwxyz¡¢£¤¥¦§¨©ª±²³´µ¶·¸¹ºÁÂÃÄÅÆÇÈÉÊÑÒÓÔÕÖ×ØÙÚáâãäåæçèéêðñòóôõö÷øùúÿÚ\x0000\x0008\x0001\x0000\x0000\x0000?\x0000?@ \x0010\x0008\x000fÿÐ?@ \x0010\x0008\x000fÿÑ?@ \x0010\x0008\x000fÿÒ?@ \x0010\x0008\x000fÿÙ
endstream
endobj
2002 0 obj
<</Filter/FlateDecode/Length 368>>stream
H\x001cÄ\x000bjP\x0014áÿÿoætº 	µ©bT¨éF¹KlÌÌYÎ·õþþÂ~þ_\x0013Ø7hV×ðÐº®êïªiUV ÄUË\x0012\x0018Eq\x001cã\x001cZäïÆ;Ëó,¿ÞY½,M^i\x000cÒ$J0Ã$
ã Hâ ü\x0008~\x0014xQèE¾\x0017úÏÀsý§ë=\x001cÿáxîýéÜ\x001eÎõá^ÝëÅ½ûÙ^¿îàbßÎÖÅ¶.§ý\x0017°ööÑ´-Ó>§qÚëà\x0008vúÑÔ­Ýö¸ÛZæ\x0006\x001cõA_ï
m¯«æF5×¹Q\x000c°V\x000cm¥kK]·òV]l2ß(¶Oy
ÔÅDEe.*°	Ë	ZIh5CËéX\x0016Gòt\x0004]\x0000ü\àæ\x0010+¡á\x000c1\x00113\x0005ü`\x00028\x001a|_d)\x0001\x000c)4 \x0011C¢\x0001\x0018b< ÆtoDw\x001bý.Owy(Õáû\x001dêpd£ÚPj³ä_h±dkH´½\x0016ÓûÓè~Açnÿ\x0013`\x0000ìlù
endstream
endobj
1978 0 obj
<</AntiAlias false/ColorSpace/DeviceRGB/Coords[-128.0 0.0 128.0 0.0]/Domain[0.0 1.0]/Extend[false false]/Function 2003 0 R/ShadingType 2>>
endobj
1979 0 obj
<</AntiAlias false/ColorSpace/DeviceRGB/Coords[0.0 0.0 1.0 0.0]/Domain[0.0 1.0]/Extend[true true]/Function 2004 0 R/ShadingType 2>>
endobj
1980 0 obj
<</AntiAlias false/ColorSpace/DeviceRGB/Coords[0.0 0.0 1.0 0.0]/Domain[0.0 1.0]/Extend[true true]/Function 2005 0 R/ShadingType 2>>
endobj
1981 0 obj
<</AntiAlias false/ColorSpace/DeviceRGB/Coords[0.0 0.0 1.0 0.0]/Domain[0.0 1.0]/Extend[true true]/Function 2006 0 R/ShadingType 2>>
endobj
1982 0 obj
<</AntiAlias false/ColorSpace/DeviceRGB/Coords[0.0 0.0 1.0 0.0]/Domain[0.0 1.0]/Extend[true true]/Function 2007 0 R/ShadingType 2>>
endobj
1983 0 obj
<</AntiAlias false/ColorSpace/DeviceRGB/Coords[0.0 0.0 1.0 0.0]/Domain[0.0 1.0]/Extend[true true]/Function 2008 0 R/ShadingType 2>>
endobj
1984 0 obj
<</AntiAlias false/ColorSpace/DeviceRGB/Coords[0.0 0.0 1.0 0.0]/Domain[0.0 1.0]/Extend[true true]/Function 2009 0 R/ShadingType 2>>
endobj
2009 0 obj
<</Bounds[0.0069336 0.92264 0.97863]/Domain[0.0 1.0]/Encode[0.0 1.0 0.0 1.0 1.0 0.0 0.0 1.0]/FunctionType 3/Functions[2010 0 R 2011 0 R 2012 0 R 2013 0 R]>>
endobj
2010 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Hú±3åÇPF\x0000\x0001\x0006\x0000cNA
endstream
endobj
2011 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 31/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Hú±3å\x0007>\x0005íJ!\x000b¥¡¡»Ò)G\x0000\x0001\x0006\x0000ß
endstream
endobj
2012 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 123/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
HDÄk\x000bÁP\x001cÀá«$iI.ÍKrÙlû4ÂÂ³ù<ûyå?RO\x000fÏ¿È*cÊð«ØQ\x0003á£\x0003´/¶èXóXUw/?È\x0017b^e3²©u3&¤cÒ¥<Ô\x0010å\x0001×¾èqérîü´­Ä1^IËàÔäØ\x0010u\x000eb_{\x000b0\x0000üy
endstream
endobj
2013 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
HúynÊÏ¡\x0000\x0002\x000c\x0000ð¨Á
endstream
endobj
2008 0 obj
<</Bounds[0.10762 0.99886]/Domain[0.0 1.0]/Encode[0.0 1.0 0.0 1.0 0.0 1.0]/FunctionType 3/Functions[2014 0 R 2015 0 R 2015 0 R]>>
endobj
2014 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 168/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
H4Ä	\x000eÁ@\x0014\x0000Ð#£Síü?WA©ÖÒR±\x0006ESK¬±\x0004±Sq
SäåbíÈð\x0013w8!Ñ%\x0013I8DéÉ>I
\x001f1å\x0012Õ\x0015U/ö$m\x0018ÕF²>ô1ÍL¤ìTær3àòs0\x0016`,Ñ\Rs\x00055ÇÁXÜµ\x0005k¥=-í±|Àòc\x0013­Xõ\x001c¨]Xýõ[ q\x001b\x000flrOh¾ícË\x0007ûÍQûó\x0015`\x0000J@|\x0019
endstream
endobj
2015 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
HªØõ¼b(#\x0000\x0003\x0000\x000eA
endstream
endobj
2007 0 obj
<</Bounds[0.0011393 0.92264]/Domain[0.0 1.0]/Encode[0.0 1.0 0.0 1.0 1.0 0.0]/FunctionType 3/Functions[2016 0 R 2016 0 R 2017 0 R]>>
endobj
2016 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Hºt]èÒPF\x0000\x0001\x0006\x0000ònÁ
endstream
endobj
2017 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/FunctionType 0/Length 192/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
õóÎõóÎõóÎõòÍõòÌóòÌóñÊóñÈòñÇòðÅòðÄñðÂñðÁðïÀðï¼ðî»ïî¹îî·íí³îí³íí°ìì¯íì¬ëì¨ëë§êë¤ëë¢êë éêéêéêèéèéçéæçæçåæäåäåãäáã~áâyáâwáâràánÞàjÞßfÝßdÜÞ`ÜÞYÜÝTÚÜOÚÜKÙÜFØÛ@ØÚ9ØÚ0ÖÚ'ÕÙ\x001eÕÙ\x0017ÔØ\x0016Ó×\x0016Ó×\x0014Ò×\x0012
endstream
endobj
2006 0 obj
<</Bounds[0.0011393 0.89818]/Domain[0.0 1.0]/Encode[0.0 1.0 0.0 1.0 1.0 0.0]/FunctionType 3/Functions[2018 0 R 2019 0 R 2020 0 R]>>
endobj
2018 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Hú¸xçÇ¡\x0000\x0002\x000c\x0000A
endstream
endobj
2019 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 59/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Hú¸xçG\x0008Z¸\x0003;¿\x001d'·
>ÍÝ
G\x001fÑì-\x00084\x000b\x0007±\x0019¦oBF\x001f¦mÄ¦n \x0000\x0003\x0000ÕÒH
endstream
endobj
2020 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 32/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Hz?ií{RÑäuÔB\x001f¦¬Ç¦nÀ ²\x0000\x0001\x0006\x0000Î;8
endstream
endobj
2005 0 obj
<</Bounds[0.0213704 0.07736]/Domain[0.0 1.0]/Encode[0.0 1.0 0.0 1.0 0.0 1.0]/FunctionType 3/Functions[2021 0 R 2022 0 R 2023 0 R]>>
endobj
2021 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Húûdáß¡\x0000\x0002\x000c\x0000 
endstream
endobj
2022 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 134/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
HTÂë
\x0001A\x0000Ñ\x0007$I\x0012QäKRV.\x0011ñNÛØ¦\x001dë1ö+;\x001fN×Ïäöÿú{!9ÛÏÓ·9b\x000eî\x001e³#Þº\x001eñÆ]»+[/Ý\x0005z¡§è	j\x001a¡¨\x0001Q?zYd\x0017ÙA¶­4l\x00126ì NPãQETÜ2¢"¢ÍãçÞ\x0002\x000c\x0000ãÊ3
endstream
endobj
2023 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
Hú{%úïPF\x0000\x0001\x0006\x0000Ì\x0001
endstream
endobj
2004 0 obj
<</Bounds[0.0011393 0.87645]/Domain[0.0 1.0]/Encode[0.0 1.0 0.0 1.0 1.0 0.0000001]/FunctionType 3/Functions[2024 0 R 2024 0 R 2025 0 R]>>
endobj
2024 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 17/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
HÚy1sçPF\x0000\x0001\x0006\x0000\x001dá|Á
endstream
endobj
2025 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 185/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
HDÂi\x000bÁ`\x0000\x0000àßë$!¥H$IR"ErfÑ2¹÷Úñî>0æGxùâé1Þ\x000bãêö\³ñß©öÂÔ\x0017¦<'¨lek$[CTz\x000cÄ{_¸÷[\x0017\x001dh¶QÎhqzýn0ZýªÕZ\x0003j\x0015¨\x0015Z)ÓJé,\x0017ÑT8JùÛÙ½Ù	é-LQ0IÁÄ|ä£k.²âÂ\x0004\x001b"Øà
,\x0019ßñÏ®^\x001cxpàÆh\x0017vqNÐ³ã#À\x0000e\x0012ã
endstream
endobj
2003 0 obj
<</Bounds[0.5]/Domain[0.0 1.0]/Encode[0.0 0.5 0.5 1.0]/FunctionType 3/Functions[2026 0 R 2026 0 R]>>
endobj
2026 0 obj
<</BitsPerSample 8/Decode[0.0 1.0 0.0 1.0 0.0 1.0]/Domain[0.0 1.0]/Encode[0.0 63.0]/Filter/FlateDecode/FunctionType 0/Length 67/Order 1/Range[0.0 1.0 0.0 1.0 0.0 1.0]/Size[64]>>stream
HTÂ
À0\x0008\x0004ÀýÇ+Åí-\x0010IN··[Ëº9ÇQQí@AñlY"i¿åîwëg©0wÊ=>l;\x0002\x000c\x0000\x0008Yºà
endstream
endobj
1977 0 obj
<</Metadata 2027 0 R>>
endobj
2027 0 obj
<</Length 1447/Subtype/XML/Type/Metadata>>stream
<?xpacket begin="ï»¿" id="W5M0MpCehiHzreSzNTczkc9d"?>`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?={ö\x0008\x000fg©ó8 \x0008T(Z\x0010\x001b\x0015¡dxàáêf(¸©Û7¡o\x001e\x000f±Üþ&\x000fÂÈ·qr5&¦Ë_P¡ï¿Û\x0010\x0005¨®þ\x0005f( h\x0011u	_Ôkö/ô¹Xa{þÔá>Ñ¤|¦¤|ø\x0010ÛpáÛ8ÞRl\x0016ãe`Â\x0017\x0001+Ú¿Hm~ hR-íö:µ-b³ÙrRÌ`òc:¨u´Åî\x0007,\x0012|8Ï%zY\x000b&&Ê¢\x001a\x0013Ä>!èk\x0014\x0015¹@\x0010Ô¨E0Aþÿfww8~p\x0001`hNü¤ìù1\x0011Ý\x000e\x0016
+\x0011Ûõ'^\x0005\x001f.l:óû#-(RL\x00107¿îw\x0002Â)\x0012ÑÊÔç\x0002AæÇÄ³ë[iªCÁ÷VÌ	ýFl><\x0015¸AÁ\x000bs\x0007~±[0!dá·ê§ÃD´&S/ç h\x0011Í	êJðL©[ÁÃ7]^íùZYeñ\x0006Óc¢a\x0001èF`àÃÄÜA0 ß²Ðc"Z\x0000b+ïQ\x0017_)L	A\x001044kP£^ºåÓèZ&"\x0002%N}
gûÃCt?°°6!&RÇ~Ýï(Í¯®¢\x001cáKýe\x001f\x001e\x0005M\x0010¶\x0011\x0013ÑéÆ,ôzFª(WÎ¨¶£çâd"\x0008ZD`":î¤±¢YrCL\x000c\x0019UÙ²A*\x0002÷\x001bQ°Y \x0011\x0013SdQÒN£\x0005\x0007<A\x00104\x0016ÁÄèPdMß\x0018¬1Ýw\x0010Xt ]öáQ\x0017\x001a\x000cm5bb,01ÄÎÂÖ\x0018BÅBÐRZ</p><p>\x0013ÍÖ?çZcúý×N¶\x0018ÒCOÜþóú\x0018]ê)ûð!v,upA#&x\x0016¼>5&ò®\x0019\x0002:AÐZ</p><p>\x0013Caè¿RF\x000c\x0013`bÐbÄ ðáÁÐ=´mÇy\x0016\x0015x~q¡\x000fý\x0007F@Ð²Z\x0010\x0013N©ÝÖ£\x001dß~*\x001ak\x001a5\x0005&§`Ñ	ÖÑë</p><p>\x0011ê²><è°ðhHí0Ï¢\x0002\x0013N©ÝÖ~¾\x0018k Å5®,RÚ¸Á\wé½Î¢ÅpÑ\x000eÇ\x000f.N ¡xD\x0004i9ä\x001ffràüÊlâÔ_ oùûán÷u¿ÓËùýw\x001b?\x0017Þé \x0014ä\x0002Ó-AQDæÏBo©¤>\x001aUà\x0018***3u.öÿ\x0002G¹</p><p>endstream</p><p>endobj</p><p>19 0 obj</p><p><</Type/XObject/Subtype/Image/Width 525/Height 231/ColorSpace/DeviceGray/Matte[ 0 0 0] /BitsPerComponent 8/Interpolate false/Filter/FlateDecode/Length 8719>></p><p>stream</p><p>xí]m´ \x00106\x0002\x0011`\x0004"\x0018Á\x0008F \x0011`\x0004"\x0018Á\x0008FØwù\x001e`PÜÕ»½}y~Ü-0Ì\x000cðMSq\x000cÂ$(\x0012x¢UaæÂ:H`*1\x0000mb¤ãB±'al«b;\x0010\x0011o¡*:ÌBÌÜ«N¬>³Qç\x001eÉ8R±\x000böàHàU\x001fÌÃ ÐG\x000c\x0011èÇ6Øv1±«S¯\x0014>\x0016\x00102ªÈät·+\x0000O¯¹s¡T\x001c`\x000cÔÔó`#^"Ã\x0008&\x0017ÛØ\x001e*tú=\x0019Èâe·\x000eºRÉp)öÈ`\x001bl¶\x0011¯a\x0008ÒÆÀ¬\x0005\x0003</p><p>9O\x0005Ên-p¥áRìa²õo#^ \x0003\x0012uf²\x0006+Pø\x0004u!¥*¤¹T2Ü=2,¶¢[\x0013ñ\x0002\x0019V4G±Wø°7\x0013GXEç]©d¸\x0014;d Q[½B\x0006{§ød~Q©yÓ¿g\x001b»zOlÄ¤ªNÇqÆ¸Î6{W*\x0019.Å\x000e\x0019:WÑvÐAÏìLR<£[t|ëÕ
£HïvN¡#%oâ¦Õlð®e©dx\x0013;d\x0018\x001d\x0019Ì=\x001d'\x0003LµÓ\x0007Ð8¹\x0016Ò­>ØÉ)töD ¬õqÙEÐ½J7±C\x0006uUëkêÓd0c?½u2úG\x000bb7§P¡op2µß±WÉð&òdPCuvÓ¼@\x0006{	d¨1c»Õ1ÃÁÀa4W2Ü<\x0019Ô=~Ò\x0015l\x0016NA7ô\x00083<shv âéæÉ ÕdxL] ¹á\x0006èjô(pd\x0018Õ\x0005\x0019\Å§Éð\x0008®jñØ©\x0019\x00183¦	¹Q(VË>KÙ\x0012dÁÓJ\x001b\x0010/</p><p>ùVZäïÖõí\x0012gÉÐ\x0019,\x0004B\x0006wcàÖ %C°æ4ÑÀ\x0003ÐÄJ\x0017%\x001a2l¶å:\x0015w\x000c,Ì`!Ø.$YÝ\x0018\x001d\x0019ì\x0013À»J;%j£ÙN0õmÿ\x00162øÓÍ?©ðF,\x0019Üªxà^%Ã
Èa4?õ\x000b\x001f\x00080õ&2`pd\x000f-%Zo¯áRdÉ°5Ý6q?B\x0006¼:24D\x0004þ	o¯áRäÈ@\\x001d¯êW'^JÎ¢1CàmÎ~\x000eÒ¦á\x0016ä¦ª\x0016\x0019©N
\x001aÎâd½¦\x0001«\x000e\x000cà1¥oÎnÚ\ìà]±\x0000XSÉð"rN<ºô@ßÌLÖc2ØÞ(ïÕ^E¿²à-ñÆ¡GÈðD;\x001a>L\x0019{\x000co"G\x0006\x0011\x0001<*d&k\x0001\x0019V¤Ùil\x0001Õ\x0004O#
%ÃM«­d¸\x000192Ä\Pu¬u&ëvL9hÙ(ÒkQ\x001bTãM(Y×-éÙD?õFÖÓ¨á\x0006dÈ+eì\x0003</p><p>ë!&5zp2ÕC\x00022HÍµµäZ</p><p> ©BÃòðº´ð±WÉð&2d\x000cðyPÑ\x0007ÍBúh²]'ÐV³úíö3èÈÉ\x001bÄ\x0001ãJ\x001b!jöE(,®âM\x001bMDÊn\x001892ØN}ãrZÒyØ®i \x0019ì\x0012´°dÙ6;º&M)s\x0005Y\"¹¸Ö¾\x0014\x00192¨\x001fÔÈ<l%Ûaþ&fÓÊö9t\x000c6Çb)¥®ú÷jc5§<\x0019ìøUøÍwóÙX÷ö\x0000xJ\x0006\x000fvq­})p20ßB½¼9Ü"kÑ[\x000c\x0019Âw\x001e\x001evgDª\x0001d`\x000cÉæèÌ\x0000W2¼
\x000cªZÝU?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-l-election-des](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-l-election-des)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="http://e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-le-cumul-des](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-le-cumul-des)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="http://e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
Instances: 2
  
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
<p>The identified library jquery, version 3.2.1 is vulnerable.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="resultats-recherche.html" method="get" class="form-search" id="form_search">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/liens-utiles/" method="get" class="form-filter pas_surlignable">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="resultats-recherche.html" method="get" class="form-search" id="form_search">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form_send" name="form_send" method="post" action="/#" enctype="multipart/form-data">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="/faq/" method="get" class="form-filter">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="resultats-recherche.html" method="get" class="form-search" id="form_search">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="resultats-recherche.html" method="get" class="form-search" id="form_search">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form_send" name="form_send" method="post" action="/faq/#" enctype="multipart/form-data">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form_send" name="form_send" method="post" action="/liens-utiles/#" enctype="multipart/form-data">`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="form_send" name="form_send" method="post" action="/#" enctype="multipart/form-data">`
  
  
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communiques-de-presse-2019](https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communiques-de-presse-2019)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/](https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/a-la-rencontre-des-associations/article/a-la-rencontre-des-associations](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/a-la-rencontre-des-associations/article/a-la-rencontre-des-associations)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/ecrire/](https://haut-conseil-egalite.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communique-de-presse-2020](https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communique-de-presse-2020)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/article/associations-et-syndicats](https://haut-conseil-egalite.gouv.fr/liens-utiles/article/associations-et-syndicats)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/acces-reserves.html](https://haut-conseil-egalite.gouv.fr/acces-reserves.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/pied-de-page/offres-d-emploi/](https://haut-conseil-egalite.gouv.fr/pied-de-page/offres-d-emploi/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communique-de-presse-2021](https://haut-conseil-egalite.gouv.fr/presse/communiques/article/communique-de-presse-2021)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/presidente/article/a-la-rencontre-des-associations-1627](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/presidente/article/a-la-rencontre-des-associations-1627)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/](https://haut-conseil-egalite.gouv.fr/presse/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 68 [https://haut-conseil-egalite.gouv.fr/presse/communiques/?filter=2019].</p><p>Predicted response size: 368.</p><p>Response Body Length: 15,444.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgcs-hautconseilegalite.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgcs-hautconseilegalite.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
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

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cross-Domain JavaScript Source File Inclusion
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes one or more script files from a third-party domain.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-relatif-a-l](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-relatif-a-l)
  
  
  * Method: `GET`
  
  
  * Parameter: `//e.issuu.com/embed.js`
  
  
  * Evidence: `<script type="text/javascript" src="//e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/reforme-du-cumul-des-mandats-une](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/reforme-du-cumul-des-mandats-une)
  
  
  * Method: `GET`
  
  
  * Parameter: `//e.issuu.com/embed.js`
  
  
  * Evidence: `<script type="text/javascript" src="//e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-le-cumul-des](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-le-cumul-des)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://e.issuu.com/embed.js`
  
  
  * Evidence: `<script type="text/javascript" src="http://e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-l-election-des](https://haut-conseil-egalite.gouv.fr/parite/actualites/article/projet-de-loi-sur-l-election-des)
  
  
  * Method: `GET`
  
  
  * Parameter: `http://e.issuu.com/embed.js`
  
  
  * Evidence: `<script type="text/javascript" src="http://e.issuu.com/embed.js" async="true"></script>`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/](https://haut-conseil-egalite.gouv.fr/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-chronologiques/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/reperes-chronologiques/)
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/bibliographie/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/robots.txt](https://haut-conseil-egalite.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/liens-utiles/](https://haut-conseil-egalite.gouv.fr/liens-utiles/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/sitemap.xml](https://haut-conseil-egalite.gouv.fr/sitemap.xml)
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/reperes-statistiques/](https://haut-conseil-egalite.gouv.fr/pied-de-page/ressources/reperes-statistiques/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/secretariat-general/article/l-equipe](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/secretariat-general/article/l-equipe)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/jpg/bergs_paola.jpg?docid=2256&doctype=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/parite/reperes-statistiques/](https://haut-conseil-egalite.gouv.fr/parite/reperes-statistiques/)
  
  
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
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/secretariat-general/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/secretariat-general/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://haut-conseil-egalite.gouv.fr/IMG/jpg/bergs_paola.jpg?docid=2256&doctype=`
  
  
  
  
Instances: 12
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://haut-conseil-egalite.gouv.fr/IMG/gif/france-flag.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_onu.gif</p><p>tag=img src=http://www.haut-conseil-egalite.gouv.fr/squelettes/img/drapeaux/drapeau_eu.gif</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/squelettes/](https://haut-conseil-egalite.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins-dist/](https://haut-conseil-egalite.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-css/](https://haut-conseil-egalite.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/](https://haut-conseil-egalite.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-js/](https://haut-conseil-egalite.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lib/](https://haut-conseil-egalite.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/squelettes-dist/](https://haut-conseil-egalite.gouv.fr/squelettes-dist/)
  
  
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

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/robots.txt](https://haut-conseil-egalite.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `DPmXprr8ULZUDQ8qJlLL3fNyljz02dBCUMJqgNNsY7kklqqkogfqO+kZgrvuHoyUhleiSZCTFqElq0d7/Eimgk8GPgI=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L101xH141/arton1645-143fc`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/v2/p/Contact/Liste-des-CIDFF/73`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `eXJn+ckFWLEFxoYqJlLL3fNyljz02c3bLTgVFIkQPjXsLbAvDVoMjCx+CHTknaEVks+7jC0Ru62Cv4IP4lLVgSEMdjA=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/zoom-sur/)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L66xH95/arton984-5c73c`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2`
  
  
  
  
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
  
  
  * Evidence: `R1slXsgFdxF5rS4qJlLL3fNyljz02TwsShKDF7853sgQU3bJlqz+5GoGfer+cj66k04tB8LmYEYOijtClhMq/RUKPbU=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/serve/MUIEANmfk2BbgPxtDXjm7WZMUOCwuKtEF9sHOMSKIOZxav1g1D6MQJU57kbks_6yXJz4iiFzP032UFehgpA5UMfbXFcg5rogHA7qqfLRKPMA0ig2KfUFTvJcYz-ZAq8NHob_7yNyqZ56am2fDSSblcl2ANol3FY9x-s5ofJl-5ixRbqtqIHG52fU-E7UzOGZbiI0TXKhsF34_5Xm`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `PDhyQh/ooQIifP5kG/7wVyK8lNCIAKgql+qgAol+6iA1zC4uxBU6yyakCDNBY3DIOI68Jfc/8T81dksKwe4Np905s+jdA1WQ13CXvGx+wEYUwQzhZZ1IOR9H3PGtZBrbz4XBjNSes5pwqG1z+gmSy3OvteLPuzNzgoheZkedVvPIvhMV+nVNDk2FUkzmuw==`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>\x000c�����P�T
\x000f*&R���r�<���BP�j��lc�$����\x0007�;�\x0019���\x001e���W�I��\x0016�%�G{�H��O\x0006>\x0002</p>
  
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
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/squelettes-dist/](https://haut-conseil-egalite.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/](https://haut-conseil-egalite.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins/](https://haut-conseil-egalite.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins-dist/](https://haut-conseil-egalite.gouv.fr/plugins-dist/)
  
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067](https://haut-conseil-egalite.gouv.fr/prive/javascript/jquery.form.js?1613654067)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
Instances: 19
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bWHERE\b and was detected 9 times, the first in the element starting with: "		// For CommonJS and CommonJS-like environments where a proper `window`", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
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
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/presse/](https://haut-conseil-egalite.gouv.fr/presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lettre-d-information/](https://haut-conseil-egalite.gouv.fr/lettre-d-information/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/](https://haut-conseil-egalite.gouv.fr/a-propos-du-hce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/](https://haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="top"></a>`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
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
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/lib/](https://haut-conseil-egalite.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/local/cache-css/](https://haut-conseil-egalite.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/plugins/](https://haut-conseil-egalite.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/prive/](https://haut-conseil-egalite.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/ecrire/](https://haut-conseil-egalite.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
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
  
  
  * Evidence: `40231098`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1613654526`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1600163253`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1600159733`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1617458469`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1613654067`
  
  
  
  
Instances: 6
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>40231098, which evaluates to: 1971-04-11 15:18:18</p>
  
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
  
  
  * Parameter: `formulaire_action_args`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `urlPage`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `send`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `urlPage`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `copy`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `send`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher](https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `urlPage`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher](https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher](https://haut-conseil-egalite.gouv.fr/resultats-recherche.html?recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `emailFrom`
  
  
  
  
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
