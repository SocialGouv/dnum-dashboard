
# ZAP Scanning Report

Generated on Sat, 3 Apr 2021 16:59:33


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 6 |
| Low | 8 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 12 | 
| Source Code Disclosure - Perl | Medium | 4 | 
| Source Code Disclosure - PHP | Medium | 4 | 
| Sub Resource Integrity Attribute Missing | Medium | 10 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 10 | 
| Dangerous JS Functions | Low | 8 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Secure Pages Include Mixed Content | Low | 3 | 
| Strict-Transport-Security Header Not Set | Low | 1 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 1 | 
| Information Disclosure - Suspicious Comments | Informational | 19 | 
| Modern Web Application | Informational | 11 | 
| Storable and Cacheable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 5 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 5 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr](https://preventionhiver.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-](https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Equipement-](https://preventionhiver.sports.gouv.fr/-Equipement-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-](https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Menu-cote-](https://preventionhiver.sports.gouv.fr/-Menu-cote-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Rubrique-1-](https://preventionhiver.sports.gouv.fr/-Rubrique-1-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/](https://preventionhiver.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Avant-une-sortie-](https://preventionhiver.sports.gouv.fr/-Avant-une-sortie-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Sliders-](https://preventionhiver.sports.gouv.fr/-Sliders-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Activites-aeriennes-](https://preventionhiver.sports.gouv.fr/-Activites-aeriennes-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Menu-BAS-](https://preventionhiver.sports.gouv.fr/-Menu-BAS-)
  
  
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
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Partenaires](https://preventionhiver.sports.gouv.fr/Partenaires)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="https://www.facebook.com/sharer.php?u=&t=Partenaires" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;"><img  title="Facebook" src="squelettes/prevhiver/css/img/template/reseaux_sociaux/icon_facebook.png" />
								</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Mentions-legales-et-donnees-personnelles](https://preventionhiver.sports.gouv.fr/Mentions-legales-et-donnees-personnelles)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.preventionhiver.sports.gouv.fr" target="_blank">www.preventionhiver.sports.gouv.fr</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Activites-aeriennes-](https://preventionhiver.sports.gouv.fr/-Activites-aeriennes-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.wedze.fr/conseils/bien-choisir-ses-skis" target="_blank">conseils pour bien choisir vos skis</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-](https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.chamoniarde.com/yetis/" target="_blank">ici</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Hors-piste](https://preventionhiver.sports.gouv.fr/Hors-piste)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="https://www.facebook.com/sharer.php?u=&t=Hors-piste" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;"><img  title="Facebook" src="squelettes/prevhiver/css/img/template/reseaux_sociaux/icon_facebook.png" />
								</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Preparez-vous](https://preventionhiver.sports.gouv.fr/Preparez-vous)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.chamoniarde.com/yetis/" target="_blank">ici</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Conseils](https://preventionhiver.sports.gouv.fr/Conseils)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="https://www.facebook.com/sharer.php?u=&t=Conseils" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;"><img  title="Facebook" src="squelettes/prevhiver/css/img/template/reseaux_sociaux/icon_facebook.png" />
								</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Meteo](https://preventionhiver.sports.gouv.fr/Meteo)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.meteofrance.com/previsions-meteo-montagne" target="_blank">prévisions montagne de Météo-France</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Signalisation](https://preventionhiver.sports.gouv.fr/Signalisation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="https://www.facebook.com/sharer.php?u=&t=Signalisation" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;"><img  title="Facebook" src="squelettes/prevhiver/css/img/template/reseaux_sociaux/icon_facebook.png" />
								</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Menu-BAS-](https://preventionhiver.sports.gouv.fr/-Menu-BAS-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.preventionhiver.sports.gouv.fr" target="_blank">www.preventionhiver.sports.gouv.fr</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Freestyle](https://preventionhiver.sports.gouv.fr/Freestyle)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="https://www.facebook.com/sharer.php?u=&t=Freestyle" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;"><img  title="Facebook" src="squelettes/prevhiver/css/img/template/reseaux_sociaux/icon_facebook.png" />
								</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Activite-aerienne-1](https://preventionhiver.sports.gouv.fr/Activite-aerienne-1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.wedze.fr/conseils/bien-choisir-son-casque" target="_blank">conseils pour bien choisir votre casque</a>`
  
  
  
  
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
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/IMG/pdf/guide_avalanche-2.pdf](https://preventionhiver.sports.gouv.fr/IMG/pdf/guide_avalanche-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#JSY0S`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/IMG/pdf/mementopreventionhiver2019_esp.pdf](https://preventionhiver.sports.gouv.fr/IMG/pdf/mementopreventionhiver2019_esp.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#aYjm`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/IMG/pdf/preventionhiver2019_fichescasque.pdf](https://preventionhiver.sports.gouv.fr/IMG/pdf/preventionhiver2019_fichescasque.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#po3I`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/IMG/pdf/mementopreventionhiver2019_gb.pdf](https://preventionhiver.sports.gouv.fr/IMG/pdf/mementopreventionhiver2019_gb.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#rRHIYSLFLGDY`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#JSY0S</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/IMG/pdf/programme_ddcspp_05.pdf](https://preventionhiver.sports.gouv.fr/IMG/pdf/programme_ddcspp_05.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=å´ýÛ¯tyI\x0018<àyòüGJáN\x0018@?\x0015\x001d0pN¸tÂ\x0019\x001aâ.À\x0017F¾*ðn\x0015­ª¢;:º.y¼.1!L2äÖã~;'le\x001eóg~v~6¾\x001eÚ\x001d&A\x000c
±
È\x0003aî~Tõ­hbñÎ.Üý)\x0002ÃZ[HX÷i´ù\x000f,\x000fzrèôÑ­zæ\x0016óê°u;U×ãt´eµ°<Í¼¾¾VQ9Å¤óÑ<ñÇ»wé\x0017æyhÁ¥'t°Ý\É>dçÖ²Úò@6ÈòógªwYÐ90ª\x0002y.)£­ÒÍ	>k\x0007R0ß¿~\x0014	\x0014rg\x001e^©ölgsæÏç\x0005 vä\x000f<\x0018ÿ\x0000\x0016ZW¬\x0008\x001aà\x0005]ÏßJöolF\x001fúG'=ýá\x0017üÄþEëE¼â\x0017ð»yf¶,-ÔR\x0017+}\x001dË:¡æä<¤"<«Í4¼4³sHXp¤3UÂÝQçöÂòÐieÁwÝ;<à\x0003:z×¡À¬\x0012ì\x0000\x001cü¤­fZ\x0010\x0013
\x001aê\x000bÂÏ&m¤\x001e\x0004Çïl\x000fô>÷Õ-ó\x001dRW½'eÍ-\x0002½`Mæ\x000f-ºR^ç\x0011ïíH\x0000³ªM
ä[\x00109ØýÕåÑX\x0017R\x0017dyLç§z\x0005òA0\x0017\x0013@\x000b'Ø[L1[GÞ«\x0016Îw\x0014½ Á`\x0000¤røóö.¹fKu.ìª£©b\x0000\x001f3IIÈ÷%I`öG30ÖUòÕÏà-ßB\x0014}ªö·¡hÀ÷·±\x0012<£Ì§>
øüë^´ÐÅøCã«ù¶»\x0007
ô\x001dÄs(<\x0003âÁ\x0010øÊ[üÔ¨ÁºúGé{»;{«<¹P\x0001ýñoø5\x0005'kÃ¶`qö\x0001öWUÃý]ÈÕøØ?¿äÿ\x0000Ö7üä§pz¤I¸óQÖyåÝ;É²IÈ\x0000\x0010\x001a1åèp*4ñIäÝ°»ß-àv\x001fã\x001d3q\x0008ï}\x0019µy÷ú@NÛ;(<:\x0003_QJ%÷\x00177!F°E\ÍM\x0002Ulÿ\x0000s×Ò²ùFcùFÑí?ôJ^\x000bÙüqëeNò:FßÏ	\x001fOÅ&e¾nq÷ÛimÆs]<4õH=Û\x0017*9½\x0000$câi{Í#cãùÊi£³Ìü,·yýïó7êX\x0019\x0005VþÔô¿¬ùDG\x0001È\x001céõßÓ;\x0001÷R¿ð_é\x0014L£¾öÎß¡ù)\x001fII\x00174þ7Ð³4}o®¤%c²(¡.fE\x0018;°
\x0019Ë{zã\x0018Ý±c>¶¨9¸'\x0002~^6;ÿ\x0000 ^mçð	n-WWYÖâóMiDjQD71¿ìXD<Ç\x001d3>S'Xÿ\x0000 ?ÎÐGÁ0cnrC@ä\x001f,`^ÿ\x0000ð]ÿ\x0000UæÝ>þôåµ\x001dzéCÁ$-\x0004yc2¯ùøÑ\x000fÀ6ix¥Ö7\x0004\x001f?ÑcéQX\x0002
Ó#\x001e<Xóü×;üÕÍ\x0005 \x000f0	¯xê»xr/ê&'##:øáTìAô4éãA¥\x0015v½}³Õ»\x0004\x0003±Úè\x001fä»Mw6\x001bÜô\x001e[V:Xµà^[ÈüëÍdË§[ª´r\x0005+¶\x0007(#î¯nÒÅ«&Læ\x001dAÄ\x001f\x0010H?\x0011ºÇ\x0003\x0001\x0018Ø\x001dÁô\x0015è\x000b\x0010)$I&×Ê*¦G(å\x001fd`mA\x000b-A)Þ8Þç~{ðª
àx¾ÐÇ\ú×çxvÜíËs·³ÁcË\x000cZza,cªà\x0000>UíZ\x0016fW8ê²O~<Ök[\x0015Ä¼¸æèqÔW\x001azUíá{_±aîÙ	QN|±{WÉ)agÞ8fùs7^
=âX¥â	 °´[GfçY\x0011¹\x0007/BÌ\x0000É\x0018=6É§LiÔO$\x0003Kaá\x001cDa¹Ï6L\x0008
"@]æ(ÞÇntvä¤>\x0008ìþÇ\x0000¶Fï>ÔO \x0005«
¶éñ÷¦fKÛ\x0005¼¤øÇ\x001bKÞºêµ¬õZÖ\x000eM\x0002ùY'Ú|(,}JiÄE\x001a2\x0016ÃL\x000eÌ¸ÛldU\x0015º	Ò õXÜòä7ýBséÚe½¤eP\x00009\x0000\x000c\
H¬´ÚòY]!·\x0012O+$^õ¦Z~T\x00122\x00122sÌß³\x001eô\x0013A{WÕ ºn'¯ÑGØNbÙ\x0018Ï@\x0007Ç­d\x0005A\x0014R6¿:]rLcvXó¶Äô\x0006½-G$^·áþþ\x0016ä`
)$*GU\x0015Ñ\x0001!éðsÀ\x001cìAqÔûTòY\x0004\x0015Ó;ªÙ³|u¯\x0002õ\x000b®I\x0004lCm\x0001½\x0014¥\x00029/id4-ÊA\x001d<`JÁbJñcg\x0018\x0007lã\x0019Û9\x0019¡dEï\x000fðÂXVu r£T0èw\x0007zq\x000eS¡6Ç\x0016VÒZ~\x0012p\x0004x\x0011hTG4äÔ¸\x000bwE(×L¥\x0018\x0002¸ÉÛ\x0007j³\ZW3\x0001Î\x0004w ê\x0004t:®3Ãã\x000fË
 QéÕ	ÓôÑ¬ô-V\x0018lb?ªÆXF\x0000ròg \x00003Ózì&L8ÎtsÏ|án%Æ´GøÄ©\x000eÓã¶	Ö\x0000\x0007v
\x0000\x0007á;Á	?´K\x0014·Òô·XÑ\x0019áRYT)oÍ¦äóó£³Y\x000e+(\x00178Ê@\x0004\x0007¯'+ä³ãQ5¸ð\x0010\x0000%¢È\x0000_ªÎhY|\x001b¡Û^é\x0012á%NóF\x001e(À\x0007ùc\x0019ÛsÐäTw\x001bâ³EÖ5å­iÕ\x0007gj¢uxó¯.©\x001e\x0015Ã¢\x0015ÎsAs·=*ê¾	`Ý·ÛcIÀV\x0016×÷Ê.ñÝ"³\x0010z1\x001b\x0001ÏÊ·\x000eÒæ?\x0017\x001cÍ8ÐGKßê\x000b[àxÍÉ\x0007î\x0000$\x001aÿ\x0000zÁ­.Ø.7X\x0005ë\x001bhû¨Ø)\x000b\x000e@ò\x0007­\x001dòã\x0003!. dÙçÔ¯xì,r\x0018\x0000\x0014
\x000e\r3A£ô,
}ñvß¦\x0007&3æ\x0002ÛO¸[\x0003`\x001avùço\x001dnLøòwù¼ÿ\x0000$/\x001ddïåä¤[\x0012Öõeòc\x00014¡¡nR¬3È àû/jÓ°r°p$/\x00196H: {ÙÛÊùF{C{®\´_JZy\x000bêÀ\x001a@\x001bu®¾\x001f\x0005o»-àÝ[¸s¸ÔmäI[¶\x0001xs\x0001ÔìXµr®ÖæCÞBààæ2Èå¨[~ \x0016íÀ°d
\x0010A;\x001f\x000ei\x0006\x001a;\x001eª<×{u[\x0018ÒÊïO0Å\x0011ÏuöI\x001d\x0015qa\x0007
\x0013zú_µOÀè° ¶\x0006ð§ÌïQÁûX\x0013^dÈ{S{f^1¸Í`\x0012A!X\x0000\x0008\x001eþØ¤rø`\x0012
§Ç)`åp§c´¸¹\x0001Ôt¸\x0013~Ï\x000f4ô¿Ö$×;û;àe±?g9ÛÔ\x001fQ\x000c
ªæ±t·²C	kØHp7cÄr6¶ºM±·d\x0007\x0018Ûû\x001e\x0014q½Ö
iÜ¦îyvç©XÑ½ÅÜ®\x001a&\x0004ªà\x000eÌzýÔP\x0002ô;¯	_RÅ\x000f¶½wòÅb\x0010wX$ðNªÜ\x0004å}>"µ!fò³Û¤e±(ñ`¯À{Ä¬$\x0015¡j\x0010XIÞº²çª6öö¬^ÛJ4\x0003Í	wZâÅÕÇt±¢\x0001çæqX¶*K¹¡	&Ú!}\x0012¤yÏ\ÿ\x0000E{Ën\x0010£ÝfËë¥¥¼äò;ÂIè­!\x0007ªåÛØÛ7\x0012®äè¢\x0007Øf+\x000fØ\x0019\x000c|>g7dh2¶¾\x0005ê;«Xâ= +AÛ\x0017\x0014kü/s\x0006 Û4\x0016Í\x0012\x0008Þ\x0018y²I ¨<¥S\x001eC}¬àÔ×i3³0äf>\x001b\x000bXX\x0000,eó$PØ×Ç­¦\x001dÁÄËc²rÞ\x001cðâ\\x001eúä\x0001¾`ºþ\x001d)<áXðNÓ,î\x0005Öl9ÕÊÕÙ¿JY§8<m¢î\x0011r?»¼ã§þjØß?"Ç\x000fù¥äûOóX±áß¼æö©ª\x0006íYñÅÓÍÕ¿÷±×8í\x0000ÿ\x0000«¿ÆÅõF·®\x0000?æßñR}oRü8ýå¿âõ¹OÜë\x000fh¶\Ç\x001cÖeGÄ¤Û~\x0015Ô2^\x001bÆc¾°>\x0012-\x000b\x0019¥Ü\x001aJé0?çF¡amà;Éàe±E<ewÆ|KÄW\x0016\x0016²]ÛÄÓºBËÞE\x0002Â	ävt\crÛ·6Ã|
×ø¸Vc¢ÈÆê!¤kc\x0003:\x0012Z<:ó½ÏÃcá¸lA\x001bÎ\\x000eÈ_Õ 8øò\x001b
ßÍJc7\x0016\x0018\x0003Ý Ð\\x000e:ú	ñéÉ)ö	Â÷\x001c\x0019­ëV\x0017O\x001c³Åj¼ï\x001b3).9ö,\x0014âÃd}¬ÓþÊá;\x0007"xCØÅFþ·P\x000f]üÓ~Öç3?\x0017\x001aXÁk]) à\x0001¦ú¼#¦ÛòMøÄíÈ'¢ó@

¹\x0002GM¼3ôM\x0007ú¨þmçþôV¹Øßcò\x001c·>ßþñwøÈþ´ç\x001f½Iþ1¿j>º,Rk¼M©w\x000bq{e,Ñ\x0018\x000có<\x0004òä\x001c3\x0014Tæ\x001bÄyÖÝÙØZr2dÒ\x001cøÜt\x000f2dåü-k=¯ÉpÅÂQds5½á\x001e
d<ü@ÔMyy$8¼¤E\x000b.æDx\x0000Î~Ë&çèíÚ\x0007\x0014ñÎ©}q¯¬YÃ\x0006\x00126Á\x0012H\\x001d¹3\x0015Uló3\x0015\x001f\x001aà\x0019ù9R=ÓÖì4è\x0000ßêJí\x0008ÀáÐDÌB×Hù7p¼qhi\x001d
\x000b$r\x0002ýÊ?âAÆ.'sz\x0015ähnz\x0001jvH\x0008ºO\6?ÜæþéCÿ\x00001¡tIgþiòÿ\x0000Ì/écLøûµNk¦ÊÎóª>\x001f®:U¡%SP\x0001ZÚîy\x001b(I\úÖV±;!\x0017²»ôÆkÆ½ÕH_0Ê\x0018bUÍdErXóBâh¢f\x0005r<ñý4\x0002¼ªBúºî\x000eW®+\x0010<\x0016a\x000b\x0004cÏ­d\x0002M\x000b$H11^\x0011IPÚP0Ê\x001fJõc¥\x000b·½å\x0005HÛ\x0019Í`[kÚ\x0008]\x0005\x0004Û®ût¬¹$Ð»R\x0004 \x0004ýÕá	KBû[dlmÐ×id\x001dHYiâ=|ñX/5Z\x0010Ò.w84,¨!\x0000ÿÓºz\x001f\x0019\x001e\x001cg·^W_3ÑüÂ¦ÍK]kô\x000båR¸<)ÆÜgn'·;ôxÏÚCè}½\x000fCQÎ°î¥£<XBp¤ÛV)T&·\x0017qÅ\x0006D^áòøðÆ\x000fæ\x001eÿ\x0000vNÕ#.HÉ(\x0015&íK´«\x001aöìG\x0005"l}\x0007_ûêk\x000f\x0018=À{-j|MýðO1±Ý;©¿­*\x001bÃöwº¥ó>\x0019uñ\x0012£úô®÷¶6zÇeæ\x0016IÇ\x0015Ñt,µ±µ¹$þ\x0008»'jºçïVAÔu·f¾³6ì«ñðA\x0003ÌÓr[\x0011wª~	äùAÃ`´¼Üh¢ E&»æ\x0003\Ò/¥¸\x000bMÝ7³ø¸ÆAwsu vl\x000e\x0006ÃßÊ~WtÚ\x0003õø¦Ð9ÇpEÅ\x001d45#ÁíÕ¹\x001c÷R6ÃwK Dfx\x0017niX³ñò¨ÇÎ×\x000b¤ù®.æ äHl$ò\x0000\x0001ðR"C\x000e¼¤r¨\x001d\x00052&ÖE¡6H\x0007çwZtB\x00114òî¸_é¯\x000c~)Vº¶	ãZÆq³[\x0001öë÷)c³ÞÌÆ²«w|ÎÈÄÌ|R{Õ_Ln|°7(É-l\x0013â×¹MIµdí¬#±Q\x001cj\x0015\x0007EQ>B\x0013ià\x0014°Y û\x0018Íb½¤%$¬F	\x0004ïû
bPÖÑ\x000bkìÏîîÿ\x00003ÿ\x0000è!H4xµDP"!\x0014!\x0008¡\x0008E\x0008B(B\x0011B\x0010\x0010P"!\x0014!\x0008¡\x0008E\x0008B(B\x0011B\x0010\x0010P*£Ä\%oxòrîÌÍ¹ê»ù\x001e¿.&ÉQ\x000f\x0017ÍOñ¹5dËÃKÈQùîUÿ\x00004k\x0007kYcNR<,3â\x001e¾ÞãÈÓ¶<\x001d÷Qs3J\x00055x{J¿Óð\óÛá\x001bv\x0007ØúRÒHÒ6\x001b¬¢uÓ$k*>Go³|\x0019¬Gsd¡\3ÆY\x0008ó\x0004\x001dÜEE½»©8\x0008Ù7¥\x0018öÚ\x001c<E¬\x0003Ë·9>\x0015òÀ÷÷òøôÆÆ/Ü&òJ\x0001¤ê\x000cwËe"Ís\x0003Å0,Ê\x0004Al¡SØuøW²X;¦äRAÄ¿ÒÎLxúºÔ\x0010]£K(\x000bãA^êB\x0012Ö9Ó®"U?f\x001cÈ\x000fUóÈö\x0015¬Û±\x0014£ÈÉ¬JPoÍ']¼ëpïîý².%ÀÏüÖ¥öÍõ )sãzéK½!}wo'à(\x001dM\x0014¼"ÐÄêÎ\x0015\x0001n¼Ì:\x000f¯P\x0016t».\x0003F¼Ã\x0018'Î¼\x0005zJÂL·égù¨µ¤/¥c>Uêò­\x000bèJTavÍ\x0007tU!dÚ©\x0007o¾±)@\x00102^~ös¾\x000b|(ª^½!?8N+k#\x001c§»ïD¤3;*\x000eê	\x0019ËmçüôÖq´\x0002\x000f[û\x0015ÿ\x0000ýá<?äùò¿\x0019¹qñI\x00193òrÛèpO\x000fD±ù\x00115ú¦%%²\x00106ÒÑëx46Ks#s\x0002 È{Ð2B·2ãÈò°\x0007\x0018Éæ¯u\x001dÐÐ\x0005~tßvK²Â.\x0016%ls÷Ñ6L¹\x0019Ä"cÄÍÆËtð:7eX-{b|D28Þ\x0018ØÃÜùè ð®£hÚÃÅo"\x0014È¤ðÈ@Á'ÔúýzÒ²0ÙY°\x000bÙDú8ÂÅà=·pÇ\x0011\x0008Ï\x0002fÎØ 1»
x\x001aù¤;\x0019^Ð\x0001sÈ4u<
EVÊîÓ^7\x0001KÄ°Â\x0015¤ý\x0000Ä;Èæp\x000fô
L9y¬A\x000eçä\x0014¿\x0000í\x000f\x0008íôúøÄP±ø1p\x0018Ùæ9ØmHòò\x001f6¼s6C#uì\x001a\x0018=f´HÈ»Ñl¡µï\x001dQ\x0001Ù_³¬@\x0017£/ÚÀû¼±ÔmzZ+Ýö§W°ýÃà_+îahåÍ\x0006SòçnL¹pñ\x000eã\x001d\x0003Al°eÑ\x0008h6Afj¶g¦]E,\x000c¢IF{ÜFòç,K;ÿ\x0000
ÇQ#×uh\x0007o>¾K­ðÊv{³c\x001b/¿\x0012&|·°H8e\x001f$¼B\%Ë4\x001c½ ¸5Ö@&o\x0016ÒÖÆÞ\x001bgnç\x0013 2\x0006Ùææ\x001cÞG\x0004a}Æk2Nþõ
\x0015Ë¢Ð;=Ù^ÌðÌN\x0013/ÈNHËá.ÊkóÙ8îçFÌdaÈm\x0016È\x0018÷FèCap-.>ð©lìZ dd\x000c^èªwÌUà ÝÏ/1\x001eXæ 
Ì\x0013õtXíõõXñ\x000c\x000e\x000fÄq\x0018ì³Þ2^ÑI\x0006;xÆ~U1øÍvsÄbW5Ä\x0018Ä®kXI\x0007|ë
\x001bKº !¨c)È^ä±#Ç¾\x001fÂ\x0018ç>¦°sý|×¡­òçãä¥x?a;#4ík1\x001f\x0013¸°2Gñ\x0019\x001aY÷\x0019ó\x001föèicsÚØcÍPujy§\x0008óVáû\x0018mí§·UïÜ\x0001)-Îäò©Îrv$ôÀÁÊù`9lX)³Ú(R­~¸'	ÂàÜ2l\x001eé\x0012D\x0006Tb~úc'Éà¼éí\x0011¹Ò\x001a\x0005½\x0017Æl067ýôzlq¥Ë\x0012Û¸È\x000b(çdî,ã#/³\x0011ËlfG}ùxy§>¨Ûj¿\x001f%l³¸\x001fg\x001dÃ\x000cØðÃÇðå\x000ef{\x001d$¸ßqäi[ÊsØ]þêBÑ\x0011`$Àäo§Y\x001b{\x0002G\x0014©Óóe^`9XK\x000f´:©Æ6È\x0008¿©yCuÆøf;88o\x0012sc\x001cÈ\x001bqÞk2#Õ\x001c\x0018Ì{"\x0010åJ\x0003¤GK\x0010¹»áqiÕÈÐoQ¬bPÂB·êN$UåP \x00179\x0007*\x000eØÛâ+\x00177rõ®ÛÞ¤=\x0018fãCÙ¬8²\x001dookqò\x001b\x001bs!Ç{!\x0018ÑÇß¼HÉI²\x0007\x0007
eûÆÑ´>"µÓoæ»êXMÏ=Àµ-pªr#æy×noÒÃs}\x0000
q\x0003*®¶½¯ªKÕq7Wf·ò[öOeø\x001fh28ÞF{ñ\x001d,¹¼HãÈxM±¸­\x001dÍ`È¢0ómßCÍÆö1¬²»cÃ]qO"ÀÌÍmÍ\x000b\x000f\x0010\x0002Lçnm÷\x001b|)\x0007ÈI¯jÏºhßn/\x0017±ýÁ\x00139¬Â:²ø\x0001p\x0010|E7tÜÒøêk\x001eâ]Þ2A\x0004\x0016\x0002\x0017ÄZ=³Ly]å¹\x0012ý]yyyøXs\x0013XýP\x0007qu{\x0017\x000e~>*\x0017p>Îq\x001eû&FãI<Ü[%\x0008¸qwm9w\x000fh~[ËÙ4BnñÌd¯¸\x0008
¸§­5ÝSë\x0016³xÑ\x0004Qª«!,3Ë+|,	Ã`2ô>ÂF\x0017\x0018Û¸çÏõ¥ÛõúVé\x0017²ý*L\\x0019ÜÉ&\x0007cC\x000cqI\x0008@KY<òæ¸DðH\x0012\x001604	\x0005\x0003¤Ib
BÞ$ÂËe:©ÉU2!#çÅâöSL*ýBYÛa]\x00033ðÎ-Âñ"Å&dv{C\x0005½ðÀr1ä'M+/!ýçß®`vÑ\x001b¡×3SÑté\x000c×\x0013¤|²Ét^nðç
9 çÁ9#¢ zÖ
qåìÙ\x000e
æ|÷]\x001f´Ýà\x0019ïÈâ\x0019Ñã\x0016efñîó;åÏ\x000f\x000c>û\x0015Ð°eäq{Ú=H~«\x001e-çR.¥é,Öà\x0005hÚ%<âQ¹d\x0019çN|å[$\x0006Ç\x00038Å(âíÖ\x0001­4¹Ö\x000fc{&Ù°c-H¥Äk8D$Æc\x001eeåMx0äj{÷i,`Ç¥Gú´DÍ,P\x0005ä\x00120R2W\x0000\x0010}=)@½öTgµXÑbñ\x000c±Ë\x001d\x00132²\x001b\x001b¢qtf6Êö°°¸¸\x0016ZI$¶$î³tm\x001a+\x0015\x000cÄÉ&ä³t\x0006±{Öme-XÝu8r|Y¤Òb±\x000b,+Ï#\x001b£\x0013;Vâ\x0017º\x00068¶\x001eôæ8úÖGZ\x0002'áC+w°»Ã8Ü<{}àÔÊCv«	yiR0åèÙÀ9¾\x0007óÂwYkïÃvÝæ¢âGLq¼¶õ¦®f³ê§=Û_¹	=\x001dóê0E\x0000»7íY\x0016Üjñ}a\x0014Æ²áq·½$à\x001ahî²sôÐhô$lll«ç\x001aq|åÖ\x001b\x0012cÉ±' \x0007çÖ¶l\x000cAV|<\x0012L¹-b4éG©¤I®]yü\x0002´M3RÕ\x0005ôÈn6$(û>Ì|ÍAå=\x0017ÍBäËþö\x0008o@M¡:¬µ\x000eo	\x0000=}ýª=Â ¦Igê^yc5 ,$Bfq ·á£ÞÈØl\x001dÛRðÜl\x001f¤îkK\x0004¥ÙçÒt§\x0016÷\x000f«ôC)9ÀýV\x0000\x0004c\x0018ÅHOÁÍXæ¥áo\x0015ÑÙÄßÑ\x001elG%¬\x0000	\x001aí\x0019,h\x001b\x0001.ëh\x0000\x0000Ù(cFû»µrt.ÒtÝ}\x0015ÒPÃ IáüOñÍk/´Òt&\x0005G\x001e\x0001\x000e^øy\x0011¿îò\x000b0æ\x0000u=ëÌ.»¦µ9çñ\x0002}£\x0006T=E$R<OvB9bîß\x000b2\x001aÄ=¡ã\x001efÎÀ\x001cCIn¶\x0002tp÷\x0011ÛB\x0017Y\x001f²#é,]2»*W\x0001\x0001¿df77¾\x000fsÝ ,8\x0018\x001e#Ñ\x0014aÌ%¡À¡\x000bUâ~³32¡Ê\x000ch\x000c\x0003?Ô:7¿Föe=Âiå$¿¼q\x0000\x0010Öl\x001a6]2H"\x0019b\x0000\x001dIØP\x0013\x0017j8÷\x001dáíá±%Ä&ÄZÌhÈ\x0011²c;Zù\x0016½
y.\x0001ïÒÚ±T¢¾,íMá|*º\x00028\x0000n¾eÉ\x0008\x0000óñ\x0013ü\x0013NcÇ/òö¦Ék6æ|§\x001f\x0000\x001b|ÌÛ@ýë\x001c©O­\x001b»\x000f"LÅíçÝ»¯|wÛ4ÚÈ6ÌÂÞ6\x0018hÔä|¶'á°õ\x0006E[üÓ	g.ëCÁyÚ.å\x0006?Æö½Ú»Ì\x001aE\x0010ù´³Õ Ó£±FñZØò\x0001L=:õìPº\x0008vÍ(EóI5Ô´Uß=Ù\x0019\x0011«\x0017;¬\x0000\x000b	\x0008!	½\x0006oo1,\x0002;îN7'ÒÖ\)7¡«=[.ýR1«DÐ1¶Þ1öÂi£iGy,í&êë¡ä¾\x0012ÄÄ s uþ÷Vüµ\Òd¯©rsµèjô^.²úØ\x000c	ë°\x001euíÒÄ\x0004,k>!êYl×¾\x0001Õ¯C^º"\x0000wRÁN_\x0003Ðò6uÑñ£GéX/{mg0F+\x0014¸ÎÜÇÛÔ×­m¤)b#s·\x0000ç@ê´\x000b|\x00123Ò\x000e)mÒ\x0014°V&ºb«â\x0007Ê²&I	\x001bT°»Ð¿9n\x0000\ñÈI^QéÒ­p'ty¤¥Ù¤üëäj«K¾ç§ñ\x000cWÐ¬¡ôÜgãI>=)îBL´jâ×úé.\x0010P\x0008dò9Ü\x001f¬Úê\x0014üÒÙaj²Ït ¨\x0016Ê¾#úYöòÅ(Â\x0000óA6VcMu»ÛÂ¿:Eã~Î´^Ò­Ä\x001a\x001cÒ(Äs!å>¿e÷Û|ò°d'r¤IYiÙ-k§v\x001fÒO\x0012ìTºðe¦8ø^\x000bá/Ë\x0014v\x0003[\x000b_[\x0007\x0000HT>Úß\x0005»I¤J/ Üòl\x0001¿TcÈø\x0018\x0000£s±è6T\x001fÍ^\x0011é¿³Ý¶`Â1¦\x0000\x0000÷jtvhz³F\x0003Ø/r$\x0001s{AqÄ·Z\x0014Æ¡k$2	VV=<\x000e\x0001Þ	P;\x001bÀüV×7¡¬n(Îÿ\x0000æ2HÜN\ÉHè%·äâT£¨ví\x0007\x0011Û$7VöÝâ$H\x001dË,Ê±`*ó#rÊ9wS·L\x001aÀ\x0000\x000f3ìè¼tn=\x0007µrI=\x0002q\\x0017\x0017ß\x0001.%¬ÈA.»5(ÍìFéS]ú@T\x0016vs:wWWZ8Wð9ûJ¹Ïí±ô÷5è`i\x0007ÀRñÁî\x0004W3j\x000b\x0013Ð\x0015F=¸î¸ãîìË\x0001\x0003'¼\x0002Â´îÒãáÉãºµw\x0013FÜÈÊ£b=o¼\x001ffçabØ\x001c\x000fßaô\x001dÄ¸tL"\x0014àùu\x001aÿ\x0000AûûÇµq\x0017\x0013ë½¡0Æ\x001bA\x001c`i\x0002*äF\x000fè"®N9¼#'¦õ°ß$¸ÄÚÝ\x0019è§vU½÷\x0016Ë;ItxáÆp\x0005Ît&Ì§\x001d)~×ZÄ7\x0010\÷~WHzì_t]ð|\x0002L54¤´¸\x0001¼=í\x001fìá½âö{\x001d®#nþF:8¯jpa©e5bä1húÃeqøgmxB3gan[®ø\x0003rÛnIÉcf%¶\x001bÒ.Ýcv¨gi;SÚYÎNtÏB(\x0017\x0011M\x0017zZÖÖ6É:Z\x0000²MY%:áàV+Õ©®ÑnÍÐã\x0006±!\x0007d$^!Ô×BM23÷\x0010\x00102süÂ¡û\x0005¿\x0014ê(L·U°'s[\x000fµ>´­F-F\x001eaö})\x0019\x0005\x0014çjM;f'µÕf3`ÞÑ³ÀÆOÆìX+cªÍ'²9
\x0007P½Fö7Ëà¤\x001b\x001bgºé£½dä\x001d<\x0014¬X\x000bÈKN¥ó@ÎH\x001e[¯c:OÚ~éF;I°¾`å5#îã8!1¿Þ³vëÖ8ÙYRê1ËLÎßddgo*ÃAç[x¬È\x000bÍ&­r!\ù\x0003æqç^ëXRÀ¯¨ÃGçÀî½\x0008X09ÃÓÞµ^Ô\x001bÅwµÏ\x000bCí¿ï\x0017ûcþpBRÓ/Ý@AâÞ³ìà¼F\x001fúG'=5\x0017üÄþD%m\x0017\x0006 Í,à;ó?
ÙLE\x0005¸¹¶X\x001a48dkl\¹SÔ?zÙ\x000bÍ,\x001a\x000bR·«÷(ËAí?Lâ\x0006îÓ½IPb@Ë=ò3û*R\\x0007±·µ'-
#Íá²bQuS´`¯â¦m>K{¨IV\x000c¸Ùõ\x000cí%æTA\x0014,¶N±"\x0017Üó?êÿ\x0000«XòÙd\x0005¤îÒ4æçÒUÃ'r|yézRø×«ë´\x0001?À$<PkºS¾m\x001f\x001f\x0005\x0015IÅÑh×\x0016jW\x0006ktÞ%ñ+6Ç¾]²|¶©§bë½\x0003Ûb\x001aû«Rø§(\x0018ã\x0003[=Ryt\x001aOÓ½ì\x0014å¦q\x000c\x001a)5³÷8È<¤yz\x0010*
H
\x001d
\x0002XN-vÄ\x0012\x000f´{\x0013\x0003´>Öì;:\x001bÞ[³ÝÆ
2ÌOÙ]ñÐz
!³¸£x}\x001edò\x0002¾+qìïadíX{\x0001\x000c´\x001eã}wÒ4I5¾ãngq~2=j\x000c<KÆ}¤óM²ú¤\x0018<®@_	þ\x001cØ
TQZûøfgÍ\x0005£Äþw}tü^Èvw³;M ã[d_äÃ¿òÜRÚZÞ¯Á6µ>Äµ¦ï5Iæ»uå-\x001clXàõåy6\x0018öR)Ä\x001d~I¹ä>ÁnúO/ó#Ò¦/\x000e\x0006>\x001fÖôÔà#\x001fÉsïp)æ(d¢àÁGÖ `l\x0008\x001e*~Ò{\x0018ÐxE\x0012áíT6áC>\x0003àÈõ\x000båRÐpX!;7Uuvÿ\x0000G/¡h\GÒ\x001f\x0011Ï\x0004\x0019K\x001aw¨üáëûµ(ã!?¡Iz]µ°6Á\x00163ä\x0014|p\x0000©vÆ#Ø
ö
Z\x0004Ù\x000fê{ãââ\~°¡¾p\x0001À\x0019Î½´\x0016±	*ã"ÒDJ¦N\x0001Ç\
É±\x0019\x0016WIF³VÃªÉÐ \x0019nC\x0010\x000c\x0005Æ0=Mg/ÞöI\x0013|\x001avóJ¼K EÄ<¶ìXC\x000eêGëúûÒqLc6\x0012R´¬Ù!aÛ¨#Üz(\x0002NÌn¸_Rg¸2Z´ò¤«\x0016'ì°ô©ÿ\x00006fQ\x001bÒi\x001cÏi£ÉMËÄ\x0018øé¬\x0001ÚCI 8Pê	Ü\x0015bÅâÙ9H>X­hÝÚ%kÅ1õúÜ~lÌsËN£¤)F×_ux§?\x0006q¦~~¬dXû\Ç\x0005¾\x0015ì¸¯nõiÔL\x000fY:'4Y
sìµ9T\x0002lWÈúæ¡õ\x0016\x0014Þ\">jECÜQÂheÑ_\x0011à'¨ÛÎG%óM×³b´\x000b²©\x0005MÝ¯)W
IÃw\x000bÒ³õ\x0002!^yN1¾\x0000ø×fë"Ð\x0010\x00121i¢\x001cÅ{ÞL\x0016ÆÙ\x001bæ²Ø\x0014zô¤K^\x0017\x0010·{pÒgÄ##À1ÐzÓ£8"÷¬Z	N\x001d(<\x0015í'éNûÎ(SU \x0000(#Ë>ØDBth¦©;:ÎXºÆÄ!mÎGéR3NY²7»ÊÊøâÞ
m
àÝ²¬Ê\x0013\x000f\x0010\x001fÑXÇ9vÜb74Ù\x000b=f«¥òéi²·j\x001cÙô¥y§Í!$» ¶g»ÝAÈ_cækÒPB\x0017k§tÌ®F[\x001b(°³\x0008]W"X\x0014¼@±\x0003\x0019\x001eÞUç>k
ZW &ß\x000cjPë\x0001ð
O\x001eL±·ÚQö4áÑ%ë]­9\x0013\x001f<äRü\x0011^ï\x001b¶|oðì\x0000²õ9¥u[Xò>{Ò\x000f¸\x0019÷¬\x0000\x0000ÚÌ¾É¦vw\x001e
c\x001brñÂÐÅ6²Æ)Ü÷g±àöøV7{,]\x001dò^&¿\x0010èðé\x001dåÔ¤îÊÒ\x0000|.TmëJµäì° iÈqá°÷N}6êYÔÜ\x00009y<Ç@|±I»Á(7MÊBÓ®Î§;Ç8î1áwóø{R¥´6G5\x0014\x0016VÅ)43ZÝ©\x000c{©\x0017£¦|'ØúÐèÈ£ô%A\x0015ºQí\x0002¨Ý~7ÕTÍ'±íB×T[É\x001a.äNÎy\ó`vðþuÚ3»]>)¡úa»°U<×3Åà\x0013E%:h8»¾¾I\x0001²çµî
[½Kv\x000b\x0002¡\x0005bÁ\x001f")¯døü\>\x00072@ë2\x0017
 \x0011E­\x001e#ñS®;Á¥Í=´\x001a\x001b¹#{qð>+0ÒR\x000f\x0015h7õ¥¤9@-bTñ\x0012\x0006Êªq±ô§¼\x001fC<Ò8:¦yp :¹îßï\x001cOÉ\x0014Q¶®6\x0000l\x0000<<e\x00072»´¹æá<Ú¹Eb¸>LMGq\x001cfä÷Í\x0007H-;>­~e)ìl~íÕtî_ß_çKÇ\x0001:¯5Øf×\a<×1:%½¸*f9+Îq£\x001e-ºúT¯j;I\x000bâ\x0011´;V°h«2µÎ\x0013Â¥Æ¸ÕQ\x001b\x001fguü\x0012;Ê\x001aé\x0007z½¯Âëdµ¯v	«êW¼¢âÚBì\x0011\x0018³&GÜ§§Æp^ÙcaA¡á÷dú­\x0007¼#ðy³%ÔÚä\x0006äþdÓ&F<Û\x0001h¡`Fú¡ÍM}«}\x0018Ì0McÝ[Í\x001cAgëÝ»\x0001×`H9ý »¢µÎ\x0003Ûsç²P_\x001b¤s_9º¢<¬n¤³û2éÀsH\x000e\x0000\x0003Î\x0004Ýï/ç¾Àno`((5l8ªÆUÓ?(t\x0019EïØ\x0010¾E[\x0018é¶Çñn\x0012âe0Û¹½\x000e¾W¥1ç°i\x000fÒ9~è5¥~Ný\x001aèéº¾à­§\x0007ñ$º%µµÝ5ÄD*Ì\x0006	\x0005·9÷®AÄäfTÏ£Hs6\x0014	ò]\x001f\x000fï\x001167\x001b! \x0013âkÍ X@¿\x0015¨J¼Gt
ÄAZ\x0016Ê;¨æÁééLXòÆìNý\x0013i"lËÐâ?AJsÜÀe32\x0006/*]©-f·+&âµ¦Òi\x0001õ\x0019V\x001fÎï'1-ú¸=\x0000 \x000bKAzSª\x001d7ò*\x0015Ê67Ç¿µ&M%+m7xJY\x0005Ã»gG!\x001dXùÑ$·I\x0006±Î'èBí»AÓ²Áõç\x0019V_\x00178=\x000eÀS\x0001çIÎ \x0014¬2hÚ\x001eæ\x0010×\x0000ZMQ\x0007À¥½
î\x000bQ$`;ù{Ro\x0004sê¼e\x0015\x001cöwJÇº¹ñ.Aü6¬\x0001ñ^Õ¤×T±÷ßir²X]!! ,\x0018&í\x0006vùVw²ÆÐâ&Þ ýÔ:clzV\x000eJ\x0003²\x00133l_Q\x000b0\x0019d\x001c­N Æ¸§¤N\x0001&PnT@¸ÆÝ/\x0003.\x000e\x001ffý·È\x0015Ù}\x001fñæbcH@\x0012;S	å®H>Ú\x0015ì®d'¹.Çv¦ôN
3·^#Ó!XRóTaKÇ\x001b¶=ÙýÖMrX{i\x0003C\x0004\x0007"æµÇâEzêSöS
g\x0017\x0018èz\æ4=ÊUÙp?s\x0018¿"æö\x0003CÝIýWj\x000f~º\3^«\x0006Y[\x000cA\x0003\x0003\x0001\\x0001Ðc\x0003ÒµãÆ'3\x000còd\x0006Ã\x001f =ÕJ`pØDF\x0000À#"E¤\x001b÷Ý¯O\x00165¢+H°+Üoßv±un"ºÖnÚúâN{¦us'*\x0012ã\x0007\x0000»`yR9\x001cB\Lï6òAÕ@n*¶\x0000\x000e	x0Ù\x0018\x0001\x0015dìn÷&úø¤\x0019Ä\x000cga°\x0004\x0001gæ77Õwküi¨ñ-âj\x00177\x000c×q	*¸îÂA=zÓÌ¾3>\¢i\x001eKÛ@8\x0000Ò+qó\x0003V\x00182\x001cXÌ,`\x000cuÛI.\x0006Å\x001fOV.)Ý
-\x00004Ý´Û¾8ô¤\x000f\x0013w]××|±ÏÜÅÏ'_~¾yÎõ±~Ý³´éï<¯DwüÕ\x000c;!«WwçZä¯ç#åXüû±~\x001a_\x000bQÎÇZ¯
MqqgpÉ5Ð"weI\x0019òI92+nIÎFþõ\x0011Ç'ÄsÇçüâ@q=\x00089l9<+\x001f1¬d\x0005±îÀ	h\x001d?\x0000µ{/\x0014ïk\x0008i¶`\x000eGÁ6øc_¿à{{§IÜÜ\x0005e\x000fÈ³lF\x001dY
ÇñI0_ÞDí.¢.çù@%\x0017\x0010gw0ÔÛ\x0006¬·qæÒ
Cî}AÆÈ$Ç.D.\x001b5~\x001a¿}NÎáá»¤u\x000b.ÜÌ\x00191ÈÀ¶ü¥yAÆ\x0006Âãqq¤2±Ä8I\x0015½Ür÷R÷'ãåÄ Ìh\x0001 ÞÚE
7`×[´çî¶±¥í\x000e`ª\x0006ö¡BØÛÍ<8·\x000e(ã+w³¹»"	\x0001\x000e±ÆS±RÈ¡¹OB¹Ã
ELåö³'%¥~Ç\x001b\x0000
Áì¶\x0006\x000bÄj\x001bç9ô|@q"üút^\x000cØbÝáÔ:\x0013Wõt_]ðÁ°\x001dómáùùü¿\x001aÞ½\x001fpWºC !ºKc¾¥ÜÝì­ù.Wé+´l¿$ÙÔ\x001d%tÓÉ¾Òwò¯5\x0007,¦Cgª¹³è~5Þ)WËH®ðtÛá^±Bívb9\x000b=Vô\x000ezô¡bPÜ7¬AYÚ\x0010ó
óÉ&Èr\x0001Üz×ÖE\x000b¶XQý±A+\x0014,n^^k+¤/¨nÌwMöYN[Ëá^Ð\x000b"ëBQÛ¸\x0000\x000cz\x0003Xë\x0008Òòø#\x0018ñWk$/¸£2\x0011±\x001f\x001a-&J\x0017d=:ô \x000b@BéTï·V\x0018\x001b|ú×º´ìBÿÔ±úö£.á·µèâeò?
ÙâhqÜÒÔ$I¥òâ\x0008\x001b/Îs[^!ß`)¿¥ÉÅW,'µ-8\x001eÒxú\x0015\x0000íìv§®î[ÏÖ÷$KõmKF1`6âù+ \x0001­¿i7ô)Ú×µ»+~ækõB<R$Q¯Ç
>ýª\x001eF´î\x0005\x000f2¥\x001bâ7*\x0016y\x0004¶# ²vöÑ»ÔÀmù¤·i$%ÙÎ¼o$ÝçÞ¨Ï¸
ç¿®\x001aNwR
Æç\x001bz/¦jS\x001b0Bj½ê\x0002PàëRØ¹È®V(×Ãàx>©ÃÝÇnÖáN\x0019p\x0001'Ì:æ½ËÈyÚ¡Ãi=ÞîÔhn	>íÓëë¢Uäo³æ=j$X^º\x0010SKX¶úzHÄZÄ\x000fÖÆ3ëY\x00123O%Jp¤-§ÂÒÊøD\x0019,N\x0005$M§wAz\x0001w%\x001fk:Ô×ë\x001fÕ×ºÉ²òzí¿Ê¶=÷H?t¼mmÓ¯å¾ý\x0002VàÎ\x000c}cTLÎò	\x001bÄ\x0006Êª\x0001-Ëï^Ë57ö\x0016ê+ÇI©¡´6ê9|mm»µ
ª\x0015T\x0000=ô¨2Tç$Ù'\êÀ7w\x0011\x001fÂcÓ\x001eÔ«cµè6\x0006\x0000,õåHR_²¹Ç\x001euïvW§d. »Hî)õ\x001d~úð·Å&\S¨'v;µ0iÂÇXáæ\x0008q\x0004\x001d$\x001ei\x001f-µ
n	àò[v6T$edb0\x0019pz©Þía\x0004k¡	ÜótJu\x000ewvA-c¨A:#ÃæªÀÏÄÜ8¬·úÅíÜ¤þ¯Ê g`IÉ5-,r|Æ5£È\x0004Ó\x001b"G\x000f[yÄx£r\x000cqÇ\x0018\x0002¨1üþj_5+UÀ»ÐÊÛ~5\x0014\x001a<\x0002\ÈáÔüTGÊ]àßòqÿ\x0000UK<)Çrq\x0002\x0004i_ë*<KÌ@8ý!ì\x000fºtUìN¡»4|©Þ
ÿ\x0000'\x001fõSu¥eï\x000b×\x000czÑÝÐNu\x0015ÉpèÝÿ\x0000ÁÇýUùf)\x001cüÍa¤#QX|¥Þ
ÿ\x0000'\x001fõW\ºµÌcgrO1 \x0000°ÖQò{þN?ê®ï¯Ü(Ïzþþ#óJöÊ>Rï\x0006ÿ\x0000ú«¢]vXFò¿û£^èµî²;Á¿äãþªnGÅ·WRwq»³{1ÇÏÒîhYF²ï^\x0005ÓÉÇýTÄ<}ýKÄeº¹9ÀT$o%QÔÀu;W¬_ |º9Ê\x001cz7üÕP³Ú6¹­ÉÌ×RÚ[Ò(÷¬?ÞTèDÖô´ÅÓ¹ÝHY¢:6üã¿¸~2Ö¯\x0000X.î\x0017Ë¦s~»jÀµ£ Iºgô'âùK¼\x001bþN?ê§v©ê4VÍrÎÇv271Æäã4yÐK\x0007¸íeyòx7üÕSRê\x0017P(\x001dô02äÍ4 k#Å\x001f)wÉÇýUòuË¤Û½÷F½Ò\x0012B»Á¿äãþªàq\x0005Ïú«çøÆ½Ð\x0017ºÊ>Rï\x0006ÿ\x0000ú«¡õÛ¡¿|ÿ\x0000îy§Éy¨£å.ðoù8ÿ\x0000ª
×;c9c¹õ¥)bBNG	q6I$lM}M¦Ï\x0019ém¨Z±Eæ\x0001d\x001e~ãæ?\x001cVlu\x0014ÞfØH(~×K#\x0012Oíþ*]Å2\x0002Â\x0016\x0017\x0017¶¡-þHm®Tó\x0006n®1º¨ò-âòòß\x0004+à×zâÁæ¡åLsm\x0000ªK
V1Õ .i\x0014hÑ\x001ecØ«D=¡Øq\x0001ú®½\x0008èV\$\x001c`c¥lÄs\x0006¨¹x'Ì³úÝTÿ\x0000Üc©1I»Ë~0çö)TêcG·U³P«¨ìN=°MCè2\x001dýéÐªmÇ\x0013~>k?G×\x0018»¹ï\x0019vå@\x0002ç4m°NG¬¼}^Â½»©"ÞCv\x0007.\x0015=·&QjÅÑ¤i8
½¿\x000cF\\x0010³¿V;=?¦¥çÉbÑÝïÕ9\x0017Hh\x0002}3§Zw \x000f°2c\x001cÃãò¦ò`G\x000b 8ó=Rqðè\x0019!¬hÛ9àzÇõ¤®N)z«\x0016=ªBF	öpkÅ%Iúk_¬Iö}+\x001bXéBÃº¾T\x001dÔC,z\x0001Ð{@\x0016±pðY.½/Ok5æ¸nñó\x001eCáY=×Éd\x0002Íä\x001eA*=¹ºÝö_O<{Ö6¼Ói%s\x0004l¡\x0014aA\x001f\x0001bZòð	:uõ¢×´ÄÖóG[r\x0004§eß\x0014¬D^é	\G$ë\x001c´8\x0017Ùh;×ÆáÑù>Ò8
õGs¶O©¥&:ÉÈud<=Ä¤ÑªÛ¦ÞÄ­\x0014%\Ès#\x001e>Êjoi4Ù!êz¬3Íõwl?@½3Jµ·ºÁä;d¨cªè×ÐÐé\x0011ðç?tYdyæ2\x0017ìz/\x001a\x000b\x0012ód:jÕÐ\x0000(Rqé\x0017Ü**\x000er7Çøé\x0017¶ÒÍ6\x0015ñ«ë+\x0013ªÌæG]5ñ\x0011!é^2;^8©¼®)\x001cQK#ß\x001e;KbkKciqqk\x0001Ù ¸@æâIÜ° ·¹ÕKw¿\P\x000eX\x000f*ÉÔÔÚvU¾ÛØÚÒôö²\/"· èÌ:ãÚA\x0004¤\x0001_RÙ­º\x0005\x000b\x001få½\x0016JÇI^$I^`VBÖT]ÒO*a`ÀßrFøö÷£Ú@\Ç£ª±fQÌãÄþdz
\x000c$K\x0016z$Þ½xUÿ\x0000&ÆZ G6\x0001Æ~t»A>²Vâþo¾õàl!M\x000e1\x001aã \x0003rO­"÷\x0017\x0015$¨ÙI÷z\x001cz£¬\x0005R7\x0019ò÷¥#°PM;­í
yhçÍ7´.![»¦·TfdÏ¨ÀÚ:/VÊy\x001c¥ßXÐã[ò\x001d~	Ý}¨^Ú\x0006xãï0< uüiZÓÍ%$h³\¯©ý
\x0000ºÒu;¶ý9¡$yÉõÇJØc¦ý*-¹Z\x0014÷{\x0013*3NÜ[÷\x0000{:O®ÎtÍf8ûÝAÔ,¾.FÉÛ>gI\x0019Ù½\x0014³e2\x000bIqOê¨5mÌ+Ý×â¤¹oSÃjÎä\x0002J¡ÝA=H\x001eYó¨Zê¼«Ûu¼c"lvb¾Wº\x0008ç²"âckßóÖ@º,Ð¾As\x0015¢ð¯K­z\x0019J\x0011u__-¸\x0011ÇôUëñ>Õà²½ºBïab£¼l±ý\x0011^\x0001|dÒ\x00125ÕÛHyP|ÏJSBÃR\x00126£|°\x001c3\x0017Ô]þúU+\x0012W ZI¿½]</0ñ\x001dÈ\x001eBdeÜ\x000e /@´/\x0016,Ä­¬O3\x0000\x0013¿Ç¥-Ü×2\x0007µbé\x0000NzÐöú9®7nøÒádÔOsm\x001e\x001b¹ÎYñäÞ9-S7>+ÆÛÎéû2\x0019\x000fwë<ÔE\x0001<|ÊuKÇ9m\x0002\x0006\x0002óg\x0003ËÊ¢>q²\x001aÙD7ÿ\x0000G5VõÎ\x0017µÒ§[ËÎïPÏ2(\x0003Ðç­m8³¸´\x0006ºî¢ÒÒmO6wÈÐÖ°4ÑæIò$rO\x001e\x0002Õ%×tçîf~r9ßËze\x0010i\x0005ªbõ\x0004Ó\x00062O½ÖÐ4w7[óóRfkõV]út\x0015\x000eâJñ!H	!rNXô\x0014Õ*Ìâ­\x0016-nÒx¦\x0000¼BCåøÓ¤1¸\x0011ÑEeGa/\x000cÛ¼\x0008?\x0005Aâ»AÔ#\x000f\x0010h_\x0002'\x001b\x00126Û×5ÐÚá36)¾\x000eOB·cXHqk\x001c,¼n\x0007ðW·GÖÿ\x0000([Ç$¨`×-	êµ¡äÅ¥Æ¬ù­ëG¡ \x0010@&º>{®«¤³\[<Ê\x0006\x000bG#.G¡\x0000àÒL\x001d\x0013
-6	ø©l\x000e9Ã\x0018óK\x0010wÎîå|wíÐáiV.Ñµ4\x0004\x000b©Y±ç#Mbb\x001e	Ïzï\x0012°Éã\x0019\x0019FåÒow!ï
WoÕ½uI/Ú\x000e¥pá^òà\x0012q+~ã^ÇI÷äõ+Ün3n)\x001f\x001eäýíÝÞäQ>¦ëb|6ä­|ó§{s#¾<Ý\x001dü·&>Å¢V\x0019ü[#r%R9\x0019$|\x000f"òiVNÔ8ïRà÷2Ã\x0000î_ì±\x0004Ójáø¬Nþ
=ùb7QNxf\x0004yfý'ÂãËÍ9øJÒÞþ\x0018õ\x000bY¦u\x0007c\x0007ÓzK/Ô:FÀ'5«u\x00157ÞÉhº\x0004Å\x001a\x0007¨Oÿ\x0000ÊO¨lØHÇLTi\x0014»LÖx½5\x0008}O­b²-BèºHb\x0000)ËÊÒz)	\x0014¨ÔVHðT\x0003ÊÄí ì°¥ï$6³oÃÓ¥?8?6\x0017|Ô\x001apØ\ñuÉf
l\x0011\x0017\x0002G!V}«»¼{Ù9\x0014\x0000	ÜôÀþsXò	4.8
KD±3ééÞ:có¤ÃÏ\x001f\x000eµì\x0005®u97 Æ9'¸±¶G¼é\x0004Öª°<ý¿Ù\x000c¹¶Rº=íÛe¥Ø!÷ÏZu0°Öò\x001c¼ÖqÛ gN\x001dQ³æG`\x001bæI²wå~\x001d\x0002ÃÔ4i\x001eåf¼·,Ñ·æÝ÷Aü\yük\x0008å\x0015I¸D&mÑ´º8\x000b\x001b\x000eÅ>m`æ0ØVÏP§8ö¦¤Ræ6LÑc$d¨sëI»\x0019axÿ\x0000XHÓfaâ\x0007¦\x000f#ºõñØB8«¥à+yõ=.^DR\x001aKVñFåü¾j~\x0015)\x0004Ýá\x000cp¿4ÍëgÃ¹ÎlSmÉ¢OÂh\x0000Ç'\x0001ç¸\x001cuh\x001cM\x000f\x0010B²:<.Ã\x0005\x0018t8ß\x0015ð÷f²ðð &gvâ\x0001\x00061ÈùÜ½©8ne=)°Iræ¡\x00147Nõ+>hY\x0011\x000f¬WÛÔ×\HÚ|:[¨h[ªÈªè~*À\x0011ª·\x000eâ¹\x001c1â\idãâñ»âÂÓô¦í×d\x0005Æë§Y\x001fâÁ\x0018ý(\x000e+*[ä^¸ì{\x000e!ïÊßÎy_vpâ>j[ =Êã?\x000cV%å\x0001)ýø÷üÿ\x00007\x0012ÿ\x0000Y/7d?§&Úelu6Ñ\x001c|2´²VD¦òúOãìxo».vÿ\x00005á+=\D\x0004`w`\x0000ª\x0006\x0000\x001eÀt\x0014 4p­Âçy\x0019\x000fÉq|sãeÎqq'Ä\x0012JÃÒmâ¾ò\x0019\õê§çY½Ô²\x001e·$ÙcjÚ¿ä ÒLÊ`Ø\x0003¿1o@<ý«60¿`7G.iHã/4\x0012u§oÆ1Jfò¸u(à1Y93â¼.\x0007y63±H.Òl\x0007
-p¯qú\x0013í%µU&P¸\x0001ØøóÎ)9{òY°ÍîÔoCwên%\x0005\x0002<ñ¹\x0003s½6i!xæx¤\x0003Gº[ÂeLÆÇ\x0018S¶ÔåÀkÀR¯aa£cÚ¯4á,Ç\x001cÇ\x0000<zR`a%$º§ä¶c\x001b\x001f\x0017^_oZËU	&N#h\x0008ÝsÏÆlw¹Ùzd¤®½¿\x0015¢Gy{\x000cÒj\x000e¤É²\x0018ÎyGÇ\x001dk9\\x0018E$ËÈKÌX\x0008Ñ|ê®~ÁÑ}h|\x000fk Æ·
;ËiÇ?²±$¿nCÉ`Æ1ÓmÉ½\x001a6\x001by~tæ\x0012\x0013Ïá\x0003îùS\x001eÚÎºÐÉ\x0014\x0016eBAÇEøu\x000c%ûK\x0002êN#P$(_ò\x000b\x0007PçÖ@Ï3\x0000?4¬N\x0006}«	 nCK\x001eÐZyºg\x000b2\x0018Xö4óiÜ/\x0018/n^eIÚUæÃ±å>@ùhÖ6!¡\x00006\x0000l\x0012ØÐ¶\x00160\x0006´
\x0000l\x0002@§ê\x0002(þÚLTÙ	Ä÷÷\x001a\x0016ÖÌ#Áïdó\x0003ÑG©§\x0011&Ï¹!3¬Rq\x0019hÜôä:(÷JìæÃ¯#¼¶-Î¤÷Ç=æGZvsÝ'ýÊ6\x0018\×]ê\çÊÝ.ä
Ð{\x0013¹µTÓ\x000b)[ÀÞ.nÌ|FêóR"DÆµy¬©¯ÞýC(å\x0018\x0007Ôzô£E,Ý¾ë\x0002\x0013\x001b´kÔî­\x0010\x0004;»µ·êçÌÓÌy[\x0019²É!èDà7>T:$».Ì-å\x0016Â|Æ°8wæÃ\x0019O^Vòåö\x0014òN$wÓîLnyðNÙæ\x0017\x0010\x0007¬ÒÞ\Û\x0002¦[ÍFÏJQ!
9FqÐ\x0001ä\x0000ô¨0\x001cò¦Y\x001e\x001c7÷¨£ZÐcã;¥¸\x00058\x0000\x0019JBîB«}¬g|tÞ\x00111§Qh.åd\x000bOYÄ¦3\x0013^ñ\x00196X\x001cCIª²ÐhÑÈcÜ\x001a=?>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/IMG/pdf/labaseraquettelow.pdf](https://preventionhiver.sports.gouv.fr/IMG/pdf/labaseraquettelow.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=}¼\x0015Oµ\x000b¯csq'r^(çþÃý`*ëËg³é\*N%îê¯Oõ|6\x0015Mäïãns×©ßyÌÛÞTpGÅÄãil.O&åÌLcÇ¦ô{»ØY:
y<^Åàh\x001d¾p z¯Õ+\x000fÚÃe°øIl÷WFé,3@	é×V×\x000fNkr\x0011\x000bÕ7ÔÆ\x000cEµJ£×È2hÍ¸$çL±Åb	}¤­
5|`x\x000cOÆ\x0015!\x0010ÀÆ»àß\x0004\x0016_$\x001a\x0001Yåõì:Í\x001cº·\x0013ÖÒÒÑ\x0001Ç-¿þø;rZ!\x0016K¹ì»zHøv\x0016%ó|>´åpäY&
?£³Û÷öÝN`'[æUh\x0001ã\x0003\x001dÿ\x0017\x0002
	Â\x0001Bd ¦OÌkwüÑpü<wu»¯æÏo²g»ûj½ùüR{¸M_æË7§G\x000e£R¢^4¬mØÖub.Iâ\x0017íWÍ\x001e\x000c`
ì@ç\x00109ÍS°pc\x001dÝD\(g0SÓS\x000cÚ,G\x000ei×6¬\x000e³Î°íÚßÒÇ°SêãëòÃ]l\x0019\x0005ë\x001f5¸]K\¶Ñ}l\à¥jÉ\x001c}D \x0012D\x001c\x0012£²ej¹Hª6\x0005\x0013×¹r¥xS(~\x0002ÿC½Z.ÕÀaüy®U
¹l"_,7Ïß_~W
¿ÿûû÷o3ç±:vö}ÙB)\x0017>´Y¬Ñët1\x0004\x00150è
¤r×zé<ä	dî1ÿØ}è¾¨ämGá¸wSÉ§Óg\x0016<Á\x0002*ÀøK¦ÕýH&=\x000bz}^A:¯X9:<:>
\x0007N\x001bU êã}ùµQ,K1×Ê\x0002ÇåÎ\x000b¹BÍÙbÞÒ²\x00194t\x001f\x001cæªóÎ\x00006&Vè66
*Þ,_*Na:aý]0x_?\x000292\x0008d04Ø\x000bïhkïe¬\x001cFé\x0013\x000f°»ä©[Í§ \x0011}=]-mÝ\x0003\x000cgùååÒ½¡W\x0008\x0017¤KîÓböÄ¶,ç²\x0004n×,eÑÈt2\x001bÂú¦Õa4¯o\x0000·Õ¨ÔªùqD7\x000c>Æ 0\x0018 \x0002,\x0006#î8N¦3x*7\x0019Oä
790×b:\x0014¹¼\x0007\x0007WÌ_ÿâ2íJó\£ðÏ9«kÓ´I\x001aScÀ	Q&\x0005\x0004dDà\x0005^dÁ\x0001\x0011$\x0006\x0005\x0014
 È,  ó \x00088$mcÚæÄtu\x001fÓ§_îÏÏ½}ï}í\*\x001aN\x0016rÌg7À\x001aí²\x0005|§Ãª\x0014ø\x0006~mr%ÿ}úÃ³áW\x0013$\x0006Å\x0012ÉD³¨gß}÷ä%U&`peZ\x001aR\x0019L\x0006¢h7v\x0006hîÐ¢°øO¼&\x0006\x0016+Ù[ÕzõT3ñã¨x;=2ñYZÇî^	/KÅ|\x0016\x00197=ÂÏÍáfp³\x000b2½A«_YõÇérõü¼\¯×ív£Z*w?}\x0006QywÝjw;­;Òï\x001f>}<}øóëãçn­\x000cz³ù\x001aRL\x0000êZ\x000bå«­F):
2ùL½ÞFráýHù²]ÈäÑxªÞArx,Ë¾sÚKK\x0012Ãeé³\x0018\x0010VTûÙL*\x001e\x0006ýî-çÎî¡Çé
ïïîÕú÷wmäîãÏ¿\x001a´ëÝ d°H,`\x0019{EÃ!\x0010p(ÐÛ\x0016õÐäp\x0018UÂàð¸7
\x0010¤]1\x001b\x0015\x0002Üä\x000cêù?
\x0003\x0015 °À\x000fPÃ\x0000ð½ iý|-\x001eúv\x0012¤M# áÆÑè\x000f½ÆÃ±>r\x0011^áä\ÈèÚ(ÖN½Vp}\x0002þLg0)$\x001aE\x0008¯:¬:Ó¦Áh²y#vNgP0¦P¨) \x0002<x\x0012H$f0\x00194Æ<]¤Ý<.äófµrQ,JÅj,R¸º½é¶+¹``/-ç\x0013û\x0016\x0018Ò.«LfËÝ¢\x0010ð9\x000c.´l´ùRßþëg£XJJ#y\x001cÖ,úû'Ï¾\x001dá(ØY¾ûÝhvï½[\x000c\x0000Ë	9­Ü\x0019²P©\x0014H\x0017Õ;ÑdÈ\x0017Ä½cÃ\x0018h?v¸\x0006E*«}Í åP)4æ<\x000e;\x001a\x001fÇÌP\x0004°N«Õ¯zâUP\x0001óV»Ý\x001d\x000czw=p®3¹æàú² Í_\x001enõ\x001f\x001e¾ôÛ_\x001e¿~ýß¯Íj6\x0015<æ«tìxÿ U@.¯ÊgQÿQ¸v\x0005²Hýü4\x0014/6::RÌæÝ~¿UøbgçÇ>ïªZÁçr¨ó\x000bÔÑÉW#\x000cJÆÞÍ¥OBÁc2þÃp4r´k\x000fÄOz§Ùºîôo>~èµ+õ«éCq'\x0012rùRØær\x0002&:09Ú´ò\x001d§I³¬4m{};6Îl³­Y<Êü4z\x0008=:B\x0001\x001b\x001b\x0001Bxù\x0002\x000b½\x0016\x001aÅT>èMgÏ¢\x0007vK¥\x000f=\x001d\x001e'®!µLØ.«øª\x0015(ÑLøÍj\x0005$â	\x0005*£C¥Ó\x0004rËI$PÈ!Þ\x0013=v¯ê5 £Ð\x0008cÓ\x0004\x0002Ð\x0000\x0011O\x0004¸6Gg±Y\x000bÌy\x001aßê:ÉeÍ\x000eR/ä/rX)S¼ìöoï®«	¯{k}·¼{kÕËËË\x0006\x00182¯!\x001e»Àa£y'òÍ¿QT©BÊ] \x00168TêÜØ§ÿyYäM\x0012!ot\x0005zã³ì¥NÞ9lªP@\x001a\x001dÀ²í.$~¸.ðÔÑ×\x0004ÚZ8{ìTò¸Öí_[bgfiT\x0012\x000e\x0000-fb\x0014\x001e\x001b&²¤j­ÎhÜæîU#lO÷ûÝZ«W>Kt\x001fnc'H¿UCõfïÃÃ]ýòÏ_¾þñûW0î\x0013äy¤P,T«¹l>O®»«Z2\x0017ÎöbíÎe1\x001eI\x0016Ún÷²R®õ\x0007½ÁÍe*gÓiÕ(çpã30¯Æ©\HåÍ$Ãh8t°ï?8=õù'álò\x001ciä~ûì¤t?¸m6\x001aw\x0003@Á­e©Íå-ê¬® ¸U\x0005o~zä{\x000cË²mÞ8ØuFÍéq;Ö-7]+$dq#c¸)ÌÔØ4PÂèëa\x0002LóQ"\x0015<ôí¬làéÁºZ.âÐHèh<½,F\x000eÞ¬jM«.O¨T;uiKÐ\x0012W²$\x0004ôy\x0012Ê\x001b\x000cJ!Éåuî`ÐkÓk×\x001c&\x0019DÄã	$\x0012L%Òèt\x0016[Ì$³8L!ì:¥KÝN%\x001fKgâçe¤Ý¼\x001aÜ½ï!é¨Çes\x0005\x000bçÇ;fL¯ÕhaH³®ø,\x0006\x0003xÚ`{3Aå.JD4,\x0006Gå1ÍPHãOHrÑ,¡p\x001cmjÍn×at×*Ba¸\<h\x000f¤EëQ8äsµ
¶C§°löí5X	¦VX¼\x001e\x00158M$11\x0006F\x0001%L`çx T
\x001b{@\x0008nÇ"\x000bÜ|è4ºïÆÕíà®Ó½ª\x0015­ëË@ýþá&\x0014¸ûý·ÇÇ?ÿÿ×_¿u\x0012ñJ±\©Ô\x001bµj)_DÚWÝþà
É]*F¿Ùj^¤¢É\ÿý}¯3¸é½\x0007	ÓlTÊL:~Ûl°Ï\x0017ã#Ãcx2³¸S(¸\x0002\x001e·ïÐ»åóØü
r©´[åÞÍU»R»º¿¿¾,%¶M  J¥\x001aÃ{ðvc\x0005æã^þ^Ø
\x0007\x0002G«
Å¼n·Kô6i/SH\x001fïmYå|\x000eÂ¡\x0013±h\x000c\x001e75>ú\x001a ÀÓçã,íú¦Z!\x00150æÈLhÕ³ë²Õ\x0012.n\x0008MàïÔÊéãwû`$-g÷ír1[\x0002¨F"W+\6%\\x0005\x001aÁäÃ[#¿Ãj°;7ô0N&æ(ótö<Bc°Ù|2ÂdÝ¡t\x001e¬dÃ¡P¢4no\x0007½Þm¯{w·½Ç\x0017¹à?L¢4\x0018\x000cz½umE+ç¢ËâeJµY\x0002TÊÄK\x0014º0\x00076\x0011
èÓDÉNÄÍ±`Fºö7ÇeÞúÖñ7ô\×Ù×2mÒ¨Ò 4\x0008¨4\x0012¡$¥ØD)Jðk\x001e5\x00106Û\x001eÎ9ûì7ó¬çYÿ¬×µÖwÝÏ
\x001cqn\x0014×ÕK\x0016pÉ¨>\x00042&Ò¬hfEÂieSÍ\x001f\x001b\x0015(tÍ-­`Ã38õÃ$,D%õ£\x0010\x0018\x0014°&°P(\x0002/Vh6\þK(W®\x0015nJwõB®Ôj=><6ï\x001a\x000fùÔM"WMyoª/¯éäË_¯?~üüõë÷¿Oßïr¥\x000cxu >Ùt*ê­Z¥V¿ºò
ÀõB&qî;>¾ª´µû§Vó¶Ë¥ã¡g?Q8Ü¦\x0005\x0001o|KïlïB ú\x00079Ú\x0013\x0008
vy\x000f\x001cë¦í=çÊ¦I±}FÁ©ÒWÉtµRJAE([(^ùvÍZ©fAÄQê-ÛëE9\x0017ýö
añúv7\x00164zÝaYº²¥ÐØ"`}f@\x0008xJ86HDãx,\x0006ÝÛ\x0001kkû³\x0003;4Æ\x001d¢	èO½H$M¶º}à\\x0017Rà}äQËu\x001e
ÃÁàÙ%ºÍ*þ `yI:6??+\x0014\x0005)ÁÌ$\x000c¢B¢·Ù­\x001bËjýeÍ87=L\x00035:\x000e(\x000c6¡K\x001fáM\x0008ÄF÷%\x0004eÒñàÉ¡ãà"\x0010*7\x001bÍ\x0006\x0018\x000b¿Õî<>KEÜkj±\x0008XÍªyÅhTI§8L:9<%\x0012fµB&6ëÁ3è\x0014\x00045Ìb1¨2½x\x0010Õññ}Ï\x0010)THÀÀ!ÐÔÉùQ"\x001aÂxS|.\x0013T9õÎÍ YµìùÏ\x0002N%\x00075@6ÙÌ\x0001<D&bP8t_/HO¨>\x001cà\mÚ;
E®Kz£V.\x0016n«oß¿<?Ôî®C Ü?g3åÆãóËËs½õíÇß¿ÿù·pT}\x0002\x0015\x0011\x0010<Éæò¥CÙZº^®ùR¾X-ÝÞVò× Ï\x001bºi|ýúõå!}\x0015\x0003Ý)\x0011rLëédìÌµº \x0011
Æ\x0007»;z°Ø~
>¦õÞ@cßgÇÍéÚ6\x0019tZ÷ÑééY$I^N Íäó¾r\x0015
{\x001d[&R$ª\x000c\x0016£Z<Åccam1Ë?°kT,\x001a
\x0006Ý²Üè°:=\x0017W!(n7îìôRñ$\x001f \x0002r\x00131îwï?¶w÷a°x\x000c²·§\x000b\x000eëì ð#Åªv\x001cC\x0018àØRJ"ÆbË|Ò­]PÊÍ:¥B¾ ]Ö©5+*B&â²\x000cÎô¼qÓf5¨dZ³Õf7*§iT:{lÉ`2y\x0012åX4ÉfÏé\x001dñ2pn(\x00119Þv\x0004.wåt¾\-æo\x0012\x001e÷<î¯ÍOLÈV-[ÚY\x0010g\x0013,:Bcðg¤â\x0019!e\x0001¬S\x0019$4H%ôu¡¨¥åq\x0014ìíÞ¼éÂ\x000b¤ðù\x0002©R£[ÀÂÛÑ#\x0012)
Ù\x0006µ÷9bs(·Í	Å\x0017\x0007Ù!\x0004\x0012OZ7$4\x0002\x0000\x001c\x0001Ã¢ÿÏnä\x0000+-X}Óh±ù\x0005¤x--Ýµ^~þüþx[ÏÜÞ×\x001f\x001bdµy×z~©e[ÿüë÷¯_¯×Ï_\x001e^ï·¥|&
ÜÁ\x0012È\x0003è:[oÖ\x001fîµj\x0011¼}äâ2«Ý??Ü®Ã@ø"àÝÕ«txß¼\x0008¸ËÆõ D\x0012L \x000eëÃÅBÂ¼¿çÚÝ4®Ègçw\^ÿ/Æ\x0011¨R.õþxò<z\x0015:q\x001bçÅe£yS<F!Ò\x0018T<*±{C\x00117Jk6\x00194º¥MãÐµ»\x0013G<{Þ=÷ª\&fpd:\x000bØ\x001b½¿óÝ»pxGWOwçÿÒáÃ;Øv¬øÀ»´nS28\5s×ÈdÒW	(\x001e
'âû\x001aÑâØÛX·-®9\x000fL"ÑÒ}K¯RJ''ø³ZÓºÉ(é,[Û\x001bK3\&1ÂèÇÑ9,ÎÌ°nT	9,zå$_)çS g×\x0019(>>ßæ»û¾¸?xy\x0003¥\x0012'6½|auk{ßc«D\Æ y\x0000´\x000eÞX@£ÐDÖ\x0008gr'S	½°·pÜYI¿ýðçû?>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/IMG/pdf/faispastonyeti-2.pdf](https://preventionhiver.sports.gouv.fr/IMG/pdf/faispastonyeti-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=\x001c\x001b\x001efÝé\x0018}H,y\x0014ÕvëYYÆ*Oì92géãå	³­cgÊêãå!"W\x001cU¹æÍ_ºÆrÄÚÀÎ\x0007«\x001d^}°>4\x0012j
\x0000Ò@½ÓF\x0011~÷u\x0017|´Ú\x0019þÝpq\x0005Ý:ß\x0014êß\x0016çÜ¼³ï¤\x0014÷ÊÁ`ÈNÙ\x0004 C$\x000f×di°jy ¨}ÿøÿÙ/\x0013¨¨Î+\x0000ß7\x000bÃì\x0003Ã¾£¬F\x0008 ,Âà"c£,e\x0010$¨Q«hL\bÕs4à\x0011£µv±MÒ&'µ§§¦j5\x0015\x001az¤QÁÔ´Æ-bªXµ§-\x0011ayýßÌ\x001by<þ7ófà9áóñ/ïÞûßÿþ÷ýwh×Ü\x0000*0,pr\x0006e\x0018\x000c*$ç!\x0017¾\x0015=K½+£6ø½?D½?÷¨Ý?	Ý\x0018_¡]\x0012\x0018-)Õ\x0010P¢\x0006(Õ Ü\x001cDcÁÀ ÄÚ6ÅÈ·"%@¡\x0002¡¤t%DO°x}\©ÇÎéï~PP÷Ò'\x000bo?VÕvruÇÄú\x001dºcË©Êÿpö¿¢k\x0012¾òÃ¯IµXuFR\x0008u\x0007G \x0000>"Ô_¬ªwY\x001bö\x0017·Ú´óAû
¿=¾ò¡®asï´\x000b[É¬³?êÎ8¼ôë\x000f\x000bëcvfî	]\x0013Wª]\x0018\x0014'5xz
OyÈ|ä\x000fÕ/P[§îësÏ<\\x0015
Z'×Gî:/qLp¯B:WraõòÚ§Æ=½ä­Ý$yc}SÓ¾ü(¹è6ÍðÓ/[]¤üÌAú9*\x0007PöÍ`\x000e\x000ffs0\x000bù1K\x00060©j{ÒÝÖ±\x0001_4i\x0014çªñ\x0004aEÙx\x0002Ø¸}Ù\x0000w[\x0008ÏÖ>¼,\x0008ø@É»·¶@äí¿i+ï¶Î­îè\»±«gUe\x0017Y}èHRVXï
 WpÅb\x0006\x000f¦¡:>¯¼xFm{Çå=FÓõ\x0015ÿyºW×fKo3%°ÑY§`ÍÇÓÄ¥Þ7Å¦ß7&æ>ê\¸öûÕi¼vÀdzp´«ûq]W÷£]Ýÿ|ßØÝ¸ÑÔ»wåÇ5i%\x0006½B,\x0016¡T\x00019O\x0014\x000e¢äÊAÔ8þh\x001cDMûBíÓ\x0010ÂxïtyEÊ¦_4ÄZgr¹Ô7o#gÛÜ=ý¯=Jüñ¤ë¡oø5*ËE'\x0005Ô½AÝ\x0017Å\x00128Æ\x001bJ¾\x0010uèÑ Û=ùæ¨ºe\x001d\x0013.l!3/o#õ£{æÏ+\x001fë6g}\x001cá7Mé|³\x0012\x0008"F\x0008Dø¡X¡"Â\x0017¶ë¢àÝÑæv(Ù\x001e
ÛÒ"aM|\x0008TFx!ÔÓLé\x000bÆ|D\x0019b\x0006âd.æ\x0005ØÉ`\x001a-\x0002ýËa~AB0\x0008\x0010Ñ\x0010!\x001e\x0004\\x0006\x0011¸\x000e\x0002R\x0007='|ëâóÔHGkå ÖLÀ×Ngê§\x00157\x0007pw\x0010­\x001d<\x0010>tM\x0018îºÄ\x0007ê\x001e¦j×x\x0004ÊÂ| &5\x0012vN\x001cc®-ÎÔ¤Z¤·%9\x001cªb\x0002¡|´\x0017\x0018B<\x0006Ô²Q¨&ò2×$¥+
\x0008³\x001fÃ\x00113jM_´v¤X\x0008süÝacb\x0018Ú´Sû¯¥Ù8\x001a^ò³Ôã\x0010|M¤b@µzo\x0015¼$\x0011Yö\x000fÃ\x000fö j²?BEXj\x0003³î8[\x001b{zeÁ½ä°£ýõo¨ò2ò\x000cÑãýÙ)Épñwç\x0012ªd#\x000f×ãë¶t¸ÏÉ%D?ÍI\x0018a\x0011FxÑñøt\x0019î;ó{I\x0017)\x0013¸Äpÿ\x0008Ï4\x0014\x000evn\x0004 ÿ\x001d¨ÿ#}\x0018øÒ0ûÏ\x000bÓ6Wë-[c¾z®mKÖ\x0011\x001f\x001c±;Á<\x001b¾g`KÎ¸rå7" `«\x0004t
T¹\x0014Ò\x0018­\x0019Ôï7¦çcö{æØÒg-í@9ÖzTKëu\x0011A\x0010ò9ò&°`î3æÙXåØòÁæ\x0018\x0000hQ«¢Q³Zw8Y\x001e\x000e{rJZÆÞs\x00100|gí9o÷Gx8èÚ¼­¸àÆÎÄïZÏc¯3vùÄÈ\x0019û¶ro¸|s6~|r¯ÄÃú}P÷\x0018ó»Æ}\x0017\x0003î
æ÷\x0002ø»m³ß<nMÌ¼MYë\x001cÁí/o\x001bLy-<ç\x001dÊò\x0019\x001blpþ2|Æ¾³á\x0003çYÙ8O®3`Ûà\x001b.îl¿q{ë\x0007[#o¸l3÷ÈnûÅãL¹öÍ\x0015\x0003Ü\x0019rÖN\x000e\x0016vî`Î\x001bë³µå?îÛÇÞ\x0005¸óÄ£½Üdç\x0003ÆO®3åú®q9Æö\x0001·\x001f®ï
÷\x000eXßF\x001cÙyÛ\x0013gNrÄë\x001eÀ}\x0017¸3ç´É#¹¾³\x0001~±rÞÖý`ón@ø!2å\x0012øÇò\x0000ø{?ãë«\x0003àOÓ©_kßÍ#DAE\x0000IbDVû¬/²´Ì¾ù=«oÕ±ÎÇ û;Òµ\x0004y!FalQ?½8VÕi&n\x0011bÔcTäÕXõÙUÁ.\x0004Ú'+IÂ>óÖw\x0003æ0ïlé²m³eqº¶üâ²kË\x000f¦¬½õpïìÁ©+ì#\x0005SýyöÑâd°ïEx9,û\x001dn]N2½§gï©¾¸?É¬~2K¦ßXÔ'Ì%Ï¶Ç×6\x000eF7C\x0007k\x000f3ÇfÈ²7®61@ËO`ÏctÙúÏäÅýu¹ôëáÖbÚ²·n¿516¹öëãì0íãìbcÉô_ßÓ³xYòÖ9æþ\x0019gÃ!û\x000c±>bbÄö+'p6R0>2ía÷,\x001e\x0018W\ÎÙÊK\>råéxÛÈ\x001d{ë§àüfé¦"â\x0004\x0000âAªÓ~®b¸b\x0008k«­¿\x001b\x0002\x0018¿\x001flý®èi|;~§Å5¸
\x0005â\x0018\x0012í\x0011F\x0018jä\x0006R4Ty<\x0018DÜ¿'-L\x0014T¸\x0001P,pr\x0016e<¯\x00010(\x0001JÕhì.%ÊµrÂúÅh®\x0004µ¥n6ÐX0hú÷­0Qó§¦
àUäÓ<\x0005j\x0011e^>¢ªð)ªMIK¼úÊïÂ_v%þðÒû)u+þz¢ªCW_Õ¥«[Ò9a¿á¿ñ¿Ì¼\x0017^pÍ÷ÍÏÕ²S.P\x0007ùp\x0014q\x0018\x000c\x0003°XsÔuCÔig5\x001fªlK<½®kÊ­ä\x000bï3N¿mztÅ7©\x001f}¹vÚ®·b
ÚÅ¡)²"­ZüÉUX úùÈÇ\x0002äk¾
òXäª8\x0003ÌU\x000bÊkË6}çxåª¢ü\x0008?íºs\x001fíèè¼²îÞýµíO.îî%o,Û»gM¶J¶tïÏÖÔv¾Ør÷ÏÊ/ÊÉF~åP¨,m¶\x000bÀ\x001cl\x0019SZÈf0'³1ÌbÖí
 ûÁ$aø¥óÞ¾WTÊÆã <\x001c¤¨ui<\x0001\x0012\x0014å4
\x001aeS=h®6ööeð¸ÓLhï4
!G(\x0011Öfðlm!¼Z[\x0004¶Ð¶¶À¨[-ÊÛ7õ[¿}ºv©gù|#9ïêÈ,\x0010ô(\x000ez,\x0019\x000eÉbº\x0004`æ\x0010
W¯\x001eÚÓÝ{có·õ\x0019\x000fSum¦¸ô6S3Pºi÷M±S\x001e\x0018Ó_}l\¾¡ýé\x000f:7\x000fwu=ªëê~x|¤§÷á{íOþ»qÓ °°`\x0014v@®\x0000Ú\x001eÈ1(\x001cDÉ\x0003¨q\x0010\x0003ÑðÄÍ\x000e¿ÄS\x0016¡z3cïè}n$ÙÐÑ¼y±Ì:¹Ú8ñ·ùm1Õñ_ú.s;'5\x0010' \x0010Ý\x0017\x0014Åèî(c¼¡tPûºúdûøkþ\x0007\x0017´;»¾gÊ¥jR©Ôºò¡nUúd÷¥)ÚxYZ\x0018ü\x000b"¾¿ø£ý\x0007"¦z*aý¸PØ5i\x000cl×E
)µéÑ(Ø\x0018\x0006K¢ü¡4Ô\x0013\x000cÒ\x0017ùòÑ^P\x0018¬nr\x0018ýöË=8ªê\x000càßÝ½7ÙÝ$»I6	\x001b6»É&@\x0008$$\x0011M6<S5¥\x001dI*òJ\x0008\x000f\x0011G(\x0002a\x0000íHéT<\x001cd°/\x0001¥V§NÇ:E\x0001m\x0007\x0004§RE\x0002ÑòR(/¥ÈPð\x000f!A ·çîÞÜ=÷{÷n6l\x0018vg~sÞßù\x001eçï.k\x0000?³\x00119_À]~L\x00041D\x0001c\x000fÃö\x0010\\x0004\x0010ñÝÄÔMÌa`	\x0013R\x001eTCoÔ+»7Uó't/êÉ§8©:±kp ²zAN
5oõE\x000c6qPïÉg½ýý¹KÈ-ºó\x0011bíÈ\x0002XéË¥%90«¿\x0003\x001asÒ\x00149iFn\x0006"\x001d&¸RÁg³@Ñ\x0000Â÷VNè	}3\x0011\x001e#\x0003\x000ffØà©Ò\x001cXl_72\x000cûQ.^Ö6Wö¦B\x0017Ì@9o*²\x0013\x0003>ÈG²R¡,)\x001e²
\x000cÜ
ßPÙb)sá-ÄsNwòCæÞ}¦ì\x000eÞÒ\x001b°oÙ*¤Ø¯\x0007~Ñí$iÁ\x00026Úþ¾\x001b~ÚZc´cþW\x001e}\x001eò\x0010#F\x0018½Ì\x0016¾×|/Ýk$Ôól´ã\x001f£û8¿äÍ\x0011=\x001bß_³ô-)18 ð¿R
Ò\x001c\x0007¡ß\x0011\\x000cÚ4½h2h}\x000eµZ{ëµQM/½c´}iëÕb§'^¤yzbEça
Pná\x0016ð%¡J\x0000Õ%|AmsW\x001b'Íío\x000eZ+\x001fó%tµ}ò}(2#Y\x0015	&Èç\x000càb\x0000ÜHo7\x0013À\x0005]m¬ÄëÒ<ù|·(+\x0013)¨LBX\x00116±$©Í
U\x001c;ÂÈÆt¦Ú(ó\x0010ç4l\x001ba?½öØTÖjÉ í¯×ß¡ên`]ñu$;Hòºc£ìPç\x0012P}\x001dêYÕ»ä§Pü¯åg-}û*Ü[ùýß\x0005ü>Ðî\x000cþ>\x0004½\x0015òÞÉß\x001d\x0017éþ1Ê÷\x0006OjSå0>Âûæ1d{\x0014%\x0013Ú~rùx¿\x000b[«ð\x0013ÍN¹\x000cP®Åç(bA±K\x0011OF¹\x00175gÈcN/Í7ø^jy\x0016gÒùq\x0011ô íE\x001aW;÷ø9#¼\x001f)í^iú :Æ\x0004ëãb~Á¿\x0003ÜØ¿ü@X¿\x001fjçKñ^PäÖ¨ÆòþHwô&l¦¾#\x0014}Ho ~æhg7\x0014H¾¥/NZw\x0016\x0017¢\x001eø~\x0004\x001f¹\x0008sµîa`Ï8'X\x0005Ç\x0016:áx\x0013*\x0005\x0016\x0006ÚR)ô1Ï	ããáNý\x0011C\x0000^\x000e \x0005(gÅ\x000bPÆÉÚâxg]6VÆÊàºúü¿ÌÎ4òG­í-¶öÖ6P¶·\x0014ÙÄ>Pç
±ým¦ó\x0002ã×©í*ñºbÅÆd}4\x0019û¨É\x0015ÇËY~¬R^¹l¾\x0017×Ð§Ö\x001f¤§Jb\ì«\x0010Û\x0015F\x0011VD²ÛØ5æÏÁÆ©s±9\x0015*sü\x001cÂ:|Ï
q}\x0005\x00178Ã\x0002\x0015²RBÚÔ×94ÉÁÇu¼WP¤\x001f6F+Ióå>Ë­d\x0003TÈð÷q²¶J½R¶\x0006_ë\x001fçdml\x001f¹¼JÉ~l½ZI\x001cd\x0013öÄíêì£ôË×àòtÀtüBÓ·s>.C+_O¥ÐG¾'Áq
Ò>D¿rJý\x0014ñä0Ûh¾íEô%\x0016\x0007\x001d\x001f\x0015¾Qa\x0005¦/)¸ªìE;/¤8É÷«B wPîÂÂÙ¥â÷BøÍ Çýß\x000fÒ7D\x0016úp\x0006}SHì\]m(üþª9»·D\x001aÇ>Þ\x0004ÀC\x0018=i\x0014op·Gþ\x000cG
O[»e\CqV
À£:I`F\x0018L\x0017\x000cÐ(cZ
ä`äó§°iÓ R¯\x0007+Àä$I\x0001\x001aRLÌLG_nÑ ÚäÕÕk²7OÜ1ø­GÞ·}îeï®ù×}\x001f,¸îÛ5ïºïÝÇÛÊÿ<å»âM£Ïå®(:êxÒþ±eá\x001fL=¼\x000fà]\x000cÛa:û¾¡)óã¤Ue;·Ö\x001e¼ý+ÞµWÚÌ×\x001chæüÏ_u<°sá¥ª×ê÷\x0016­¯ÙèyfØÇs¼´\x000cã\x0004«\x0011\x001eFú\x0008G:>b£#«ñ0z!'y\x000b=¿<räM<þ\x0017\x0007[¶ÍxféøçÏýÑâïÚþô£\x000b×ÇÌ½Ú¶aãÍÛ§V^øï¾Ç6¾8÷ÙÓgvn¸Õqâ%?¹âÂÅ\x000fëÇ.­C9¦\x000eÉªM\x0000X^èi\x001c;jèäQåêÒL\-úÛXöªM
q\x0014\x001e¢a\x0001¨Éëc\x0018øÖk¶Ôï7Yöï\x0000ó'\x001fåÀnpþëïÉ{·Ô¶§aÉñ\x0003ËÿªåÅu_\x001dzyÃÉÃØxêðæM§\x000e¿úÛS­Û6}âW/yãåËg¿ðÛSOþôÂñ1£¾92lÐù/²\x0012Î\x001e\x0002\x0013Âvî0dke\x0010\x0006\x0012ös­à<Ó\x001a7áôÕÏ^k[2ÿ6?{ÒoÆÖ(³Ö ÿÔ$êãA
\x000f\x0008 ?ßhdæl}eùK·ù/\k?8þòYU\x0017(\x001cqñûº\x00031ÄäT{£zÚ¶e«¯ÝØûöÍ\x0017wÞ¼uyÇÍ[vÝî¸²çÿ÷'÷7<×ü§  /\x000e½(Ì #1Dt`Õ\x0004£$Y\x0007)!*"Ô­¢/\x0004ÝsLéÆº\x0001ö\x0015?y3ÿíyç}®àk\x000e¯âÇ~òk¾f×ü¶ª-\x000f]\x001c¸<ÿóôÙ\x000f¹\x0006Ø\x0005S`\x00074ÀNê¡ Ì\x0002ïù×Íßm\Ö¯5uÓs¹oN¾2ä½9mÞw~~©òwõ¼Òx¨Ô6Ìtr3÷&}í\x00038#4xÒauU>¬\x001f9\x0008^\x0018>°ÇXX;¢\x0000+\x0007À¢!.\x00019iÐöÖË@å¸Ìd(4s~¹4ÎJ¶XÚ\x0011è©óÿ\x0008c\x0012Æ\x001eíA¸\x0008\x0010\x0017\x0001â#©\x001bÃÄ\x0012&	a\x0010j¼Sy3\x001cª7êÉ§x^ÕÐè#¼m½ \x001fB\x0016\x0004òVA<\x000b?sÙayY?o­\x001bY\x0010VN\x0012òÑêª°lh.<éÏE9X.@Ì@¹jÛ\x000e#S\x0012 ?gðë¡\x000fz\x0002!NÂ7KÑ\x0000÷§'ÁââldÃ@¿\x000fÖiÿ*û.õÀcýû\x0004òq\x000e9'
>mQ©	Ð53J>Ðû2÷wº#ìÏ5sÙ\x001d¼¥·`ß²UH;±_\x0004ÚZc´ãz'p]¹j+.6DÛßwÓ¯Ïî=ñÑ¥GÏ\x001a\x000f1bÄÑk1òàn~»WI{ú\x0019Ñm¬x6ÒgÃµíqÂK\x0012\x000eBé ÌÕÂ¡"7\9¤±põ£É×§w~Oê\x0012®ßôÆ-\$Yù\x001c\x000bf\x0018¨J´tâKPi£zg[,}b\x001fÞ/_\x0013ÜÍÉ	ª£rx\x0005Ê-&È3\x0018 \x000béìB¸@éRiK}RÝ-Ap;\x001daE$!l"VY)ÇF© É±i¬³z\x0008õT!F2Ýå6vÚÀm\x0012bkÇìRÓQ=zúÔ|ÙSbk8vÑÆH1ÕãW=¶hµ#é7
´3\x001cé\x0018bk::óYLð}Àï¾\x000b´û;ë\x0010|´æKwÏ\x0005ä÷vwqpA÷\x001cëÆö\x000eÁ\x0004¯Ãçô¤Ù¿5øZ\x000fÜ Aò!î\x000b>¤·\x001d¯â«f\x000fþfRuÖÐ]qVh:\x0012b­°àKÅy¦ÈQ)á|Òü¥Ø_C.Éæ ýðÜD\x0003A\x001fOHëHçG:ÿ!íE³vvIþÓ­Ú]"sI~\x000ez£(çæ\x0013ÏÕÎj¬UÞ\x00055{çvoBC;£¤¸\x0012Ïxfi6(Î\x0002A6É.\x0001áÕXYh3O»àØÂ,³«lMNøÏ\x0002\x0017,ÉM;õC*Ç\x0000PÎ\x0001xY26P/êb»íBÞÆå\x0008ý,¯\x0011 \x0014É\x001em4ÀÁfO<¢ØÖv°ÐÚÞR\x0014(ý\x0014ùË6Ôwãpõvë¤×'f²^¤W)#Êù?ûe\x0002\x0014Õ\x0006à\x000b\x0018á\x0012¹QÁ\x0014*B\x0001C°\x0012#Qã\x0005rH\x0016\x0014u\x0017Qj5Æ
Ùe\x0018«RI6UÙÄ­ì[[nò@6&¤bÖc(\x001a¼ @Cn\x001d`fDzû13ú¦_÷\x0007\x000eÁª0U_u¿¿ÿþûÿÿî~ÿ\x001b\x0016\x0012®o¡éñ=ÓÆ"Ù2JÏOÜ'}	}}Ò\x0018Þ'æ	É4\x0012cËîkØH-ûìq.AÎ×\x0017bK°]ÆOÓe·\x00162\x0019wì±\x000e¡Âæâ:4[\x001cÛ\x0014\x001d|
|\x001dª=\x000cÞµÐs4j£¥¬>\x001bL#µÔ5ËØó4¸.[_úDCZÃÂ6e½h\6_F°ÃO\x0014«ì;i}<vRü4ÿðu,|4ï\x001fÁ.g\x0008zÄ\x0018dÜ8¢±õI{@<\x000fø¾X9Cìµig½>ÛONxûI8W$gbSCËã\x000f\x00184\x001e*6ÖV[ü\x0016{8ºBó·¯éÁ\x0017ÔZã÷\x0004\x0002ö7±øýUAè8\x001a(R!\x001aqÆ\x0019M¤APäÛ
å£umÁì²½²lW\x0011Èv\x0001\x0016¬µB\x00002yÈ áL&\x001dc

54Ô\x0011²\x001ac\x0015b¥ÊÈr'#i®Jñ¦ÀX§¢¨<Ï\x0003I\x001f\x0007~V\x0015úU^[Ô_÷Æ\x001cßØ«9±A0h¾ÈÒÎú(±ijQðÕ	ù\x0013Î*~åP)[\x0003*ÀJp|TP\x000er\x0015ÿ\x0015úW:ïºàûÙ\x001b!'ó;bÿóÖÀÜªwàüêÝpÁ·áÜò¦¸ÃYçÂ\x000f&ýeêöð	ë&Ç8¦yxK*\x0001x\x0015ù³\x0001õçe\x000c*2KÍ0ú*8·ø­âöïwkûÏôéÿ«þÃ·ïu|ýZ>GÓl\x0008wO¿àÍ\x0007º£\x0007{ûo\x0016µ¶WlïéýWv¾¸H««8\x0008a]Á\x0017Gö.vµ-êë¾®¤8ï÷uu\x0015¥úWJ´½ÕùûkñÉ^®)\x000e¨^(¤°HÆÙr3xXbHBßÝs\x0012ãíü+Ë\x0015Ê§÷åsÊ¹µ5	Å·®\x001c»}¥òúõê¦Ö»7\x000c]]MPÛÕ\x000cûºa?¢\x000f=÷÷´ÀG}]\x0010ê´\x0010êµÆ¶ÿ\x0001ÔõõÀ\x0016m§ö|OkÍÛ\x001b?z£µn{âÿ®Å»5\\x0002j\x0013n5À£±FÌù4^¶_Õp{î^Ýo²t+\x0017îÜ\x00114Ï\x001eD\x0005ÂÎ<\x0013¯\x0008d.ªn©yÙÉûô\x000f¯\x001eè×Õfué¢Z\x000cÓb[
/Ð3\x0012>»Å:q-°ØfCØü{úÅù=º\x000f\x000eé
7Ê\x0007\x001ev?\x001ch;>ðèÞI\x0008;\x0011Ý\x001fÞ¼u.³´tçs³f8Å\x0000
P¨À\x0007¥@TÃD#ââ<L\\x0004àÊ;Â\x0013áüñDø"¢\Ã\x001c2Ï÷,[Q9³¢ðAü»àüK{`ÒÙßÁ¿|ýÁesê§\x0014zÿ¨\k÷y?0¤!Ö`tW£wËjp\x0002dIOr*í
C¾ô(/ìÿgÞ­¨\x0019r/)ã¿è\x0005{&î\x0018g9(\x0008õ\x0007ûâ§Ò¸`ðî(R:ÛØ¾\x0011>\x0019¬{Î\x000bdL\x0000Ò\x0011\x0019Ï YS<@j;wQ@©\x0018øYÉg\x000890þD6F<HF\x0001é(!³\x0011v6Ä~8<%ò\x0011à8B\x0014#¯6Ú¢n>M
%ÖQ@®¥£YSÔV\x001anV`ê±¯éÝ5Ö5IHÍòF\x0004I% ÙÇ\x0005lGud_üt°wö´\x0011×£Ò¸i ("\x0008lî\x00032Ñ;?}e\x001dÈjA \x0007HCµàew'0Ý^
ü\x000f\x000c?wü~¦øþKîJ°y¦\x001fx\x000fÅð\x001eÊÁãG\x0014E\x0004
ÁÞÆz<[\x000b3Mõ©Õ\x001e*\x0010â`ÊÁ3p&¬ÁkÆOW`|§óÕ§©\x0013Ê\x0005\x000b$\x0001ÐñYÂ)3	küg£Û'Úõ6\x0013¿­´\x0017«J6þ\x001bÎÏ!!A<Ö{çu\x0011¢O>\x0008Æ\x0019gqUdÓá¿+ÉøµC9ý9\x0018çé\x0010«¡È¿×Æç£·ÏÑ;"BìV`ð4µ|t<)cBì	µmk\x001d¡~\x0008gm\x000eÍGköùÆ»¦\x00109ÎHóÂ·7úÇ1Ó^\x0006b\x0015r\x0010çä8ÔÆ[Dù\x0019ÁîÇ:±ôÌ2\x0005Afg÷Ùz\x001c0½p¹\x001d$\x0012\x0001?ä7¿ÛúÆ0=ããþÀòÙ\x0007µn¨U"T\x0018jOnK\L{4ä§\x0008\x0010ã¶\x0015iþpÖ\x001biLBæ©B_è<¾½\x0012:Ôä\x000c\x0008ñ8ùÆý\x001ann­å@èþØj¯ìµøûê\x000cXw\x0004<¹\x000fì»Á¾;lð;Ï·\x0018#Ü1=@~¿<ö\x0007_åÅz\x0004Hëq|\x0013\x0011|\x0015c¦ÆG±E7nÜ/\x001eÿ9ñ\x0010ü ésâ\x001afL¤\x001cðúC;?X¤1k~sÎ.;\x001eó\x001cÚöËÚ".|{ç{Ú¾áõ/÷xÎúÇÎ\x0013õPöQHËwÎä\x0019ß7Ú\x001dæäÍÚ½¥y|¿øÞ=´;¿øÖ°;â½$sÒþS|¦ùï\x0013ñì\x0012övoIwø. ì!ÓwG¤Lºþ v/øi3\x000fÖ\x001aû
¿õ\x0005_\x0008ì\x0001ü3ý\x001c\x0011ÓÅ\x0000hd\x0000Drû\x0011léù±ÌÜGD±\x0000\x0010ì§¹8ÖÃÓä®9ë.¨¨©~Ü7a¸<S
¯ªþ¾ÚSªA9xQbiÏlÝ²å$\x0019íù±\x001dM<\x000e\x001a\x0004;4¿ä'¶Ik\x0010ý#Ø$úBÑÓ0HD±Z6\x001a\x001ci$\;Ã!
[¦CcAç-JflúRã³YÆ\x001eÓ\x0010ä|ãrõð9$»\x001cÛ\x001d>]Î8a.ß3hÔFò\x0014mzæôM:Ñ,y4AÇ<Ï¢%Ù³2W#Åôh6eOú$p}N¼øp»¸O¤ÜXØ`ûåÉ"Ïx_ÆõíÅz=£å\x0014\x0013_p½h\x000fñ¬m!#øaklH}}¤õñ³@ÛCgl½h>)\x001ebÎ1ÿbQ?Tl»ú¼5À\x0015Ô\x0015âß\x000c>Ø·/6fùmñöÑ\x0012YÀ t´5¾MP.²ÈËqÆ\x0019=Äj(ò¹\x0001å£qmEØÓ\x000eY^rí\x0002X+,+dZ!3t
kh¨M°úi\x0014RÉj\x0016«\x0004²R\x0005ÀkN\x0000,S ¾Z\x0002ÖzùÙå\x0007¿¤~'aß'+NÍø<·>â«õG×õE\x001eÍÕE\x001eIï~áPJkðØ\x0006ÿ?Ì¨õØê]¥ÊU|'Ë\x0010Uà\x0004X\x000e¡ö(È\x0010\x001f\x0017­W²ß6ùsqø\x000f^ïÏ»\x0010t$«9ü»m\x0003sªvÁù\x0017÷À¤óÅ0ñm	ÿÈ¾8kÒÇAoFl\x0017 \åæ&Yª\x0014ÅÈ§Åè\x000fÔ\x0012äßR\x0015%J\x001cÅ\x00119#pëñc\x001flìê+[Ö®Ë)¸¯;ôz·áË\x001b;s\x0013Z
q-çc[\x000caÉmú\x0015[º´ætô,h3$Ç4\x001bBÒ;ôÛ÷ë
µïv÷TeïÜ¶¦àó#¥\x001a\x0018¼Q6\x0008ëö÷ë*3\x000cÜÜ\x000fáíõû÷n^¤\x0010R/)J~\x0011\x0004°\x0010ÙJ´\x0007à\x0015TÓ{)\
vlY²áûo3vÝ©ßýu{óùúÎ¦\x001emÇ]Ø×~\x0007vµ5À»×µ7/·Õ]«ºS[söVõÙS«OW\¼VõÃÕº«Õ7êk:Z\x001a{´=í\x000fû{»¡A÷\x0000>Òi!41Ø\x001f¶övÝ?ÓÓZ]ÒV·'âî`¯Æ\x001a{ÇKÀ½±\x0006x4Öüý2\x0001êÊ\x0002èýM7ÐMC7ì
¸¢ÈjXÍhFÐ\x001aGGD@À}©\x0018h*	)\x0013 Æ¤Ò81qÊe\x001c'£¨è¨IÊ\x0019×â::.(\x00117\x00147°\x001bxó~/ðûñ~o4iLúWzû}÷Þwÿ»ÿ\x000bôxãvð\x001a×âº«ãç>V\x0017[÷UL¦;\x0003Yø<²¤dê\x0018e\x0001YîÚ5él^ï\x0017ä¿àäm öK¥w×Î¼Ò<}öIõÄ\x0019GÛGÏ:Ú=ýxÛè¶Q¹§ZGû¯:íkêô\x001bªøÔª8\x0016|¾ñéÆÃç\x001fç=7ñîÓK\x001e=ÝñZ]¿«µõ~¥ºõÖÖ¶[U\x0008ÝßPÓú\x001b
'ç¬^³,2Y\x0019M\x0005|<Ã\x0010¤\x0004îfàa!2\x001a!r+ð4\x0003/\x0002}\x000f&\x0010\x0013	Å(t`Ýüuô\x0013J´>n¯¦.S¬-<\x0014û¯7¨)Gcª¢1û\x0017ªÿKî­è¥qg\x0002^ñúA\x000f» \x000f\x000f»¡@Ã.³È\x001dP,Úë´nÂµHöþX³9"\x0018´z)~E\x0004bÃ\x0005\x000cL\x000cñ%Ê°*c\x0008T¤Eô\x0018Ë1+Ò#`qÒ\x0000x52\x0018Â}¡0Ì\x0017¦÷>ûöÁøÂ¸@9D5±a,>Bu°ñÍ¾¯¸Ð<
\x0011Ø\x0019§\x001eBØCl³
pé\x0006®6@l!nàf\x0005dN4\x0017sr§µ9Ô\jm^5'\x001aË­æàMAýMÜk½	6G\x0007`\x0006\x0004\x001d 7ãÂaeú`øh¸uyk\x0005^Ëæ$6\x001fÍ\x001b\x001a\x0002Åýüp>òBN\x001e`sT	Î\x0005\x0005á>0ÆÏ\x0003¢Ä¢\x000e]ìá\x0000Ý¾)r	ü!2DcÇ*lÿr«óñ`Mî/ÅöôÃvbûåÃ	8\x001fÆK]4¹Î^>°\x0004}^öc´w©ÓÝ<áâîÎ¶#IoCZTÄçxºù\x0008d²^y¾¶DVV&²·åÇ{ÝÎö>CÉK\x0008_s\x0008\x001c8pà 7âì}OþÚqIC\x0002{Çîã½\x0016Ùü#ä«õÎþ ýçdñ×Ám\x0007\x0010ÐúÍáol)=üMÈ6¦¯9kLÍ§íoJ®±qKìáó\x0013é3Km±ÖG|û6±e0¾b]!ÕM\x000c©R	¤à2\x0005©:Øvª\x001eNÇ¾Í©§pdqå\x001a¬§ÌéØ»'g,ÊE\x0008
\x0006 \x0004´pëú¶¾[\x000fa¹Üy:?È1\x001e\x0018\x000e\x000fN¬sø\x0011sikøä°úôÑÙ\x0011ªÓ³Ã.ýl_(n\x00073Z{¼ìeJwcãÆl0Ç'¤oÌeÊwæ¥z£»¥zXë3¾ý,=Os|kÝñ5ö³¥7&\x0008´±¯\x0000Ý;A¹\x0017ôï;\x000fèóøú\x0015´>½<½»ÈÖÍéÐ­\x0000B.G&mOrM\x0017;;\x000bm
U\x0006©\x0017ÓU\x001e¹\x0007Í\x0007|:på\x001a»ß
æú\x0018ñ\x0001Í^O»èBé§?!ô\x001b]ö¡ùÄÌ8$ýLÆ1ßvAÄ\x0017ÍÏ´¼k,þÍÑïÌhgÏ\x0017w\x0006ã<qMÖùÞ+2öÍñ\x001bíÜ
î\x0008R\x0007¸å»\x0017hqAó±YmÐÍÏÉ4v_t´yÞy£º2µ´Xâ9_w9Ï]Ø%H_óÜ=T¿ñÔÙï³D\x0008ö\x000fÿ½\x0011\x000cg_\x000bêàÜkl[O\x0010\X\x0010\x00045\x0005!è*ëÁ¿\x0004àíqÂz
1"]IÐ¡é\x0013u¶5àv\x0012\x000b;×&9qêÂN1QxyRh9\x0010)Qµ\x001c\x001fêÑÌ¡åGÜW\x001d%{Z\x0013-W¡ÚhÏ²¼\x0019v]^\x001e§$÷à¶\x00139z\x0018ô\x000b
×¶ÞÎDrO®~ÂÎ9¼:Z°g\x0017[\x000cÛz]ô2:I"êÜ69Nc0.¤\x000b
çq÷çÃ§S\x0012_.õñ&ÒÖõh|¢ï\x0017\x001a¶õñÙ±^HY#ê\x001c'Iâ)¹ã\x001dqNé§Î%ö4MÚI¼G\x0006ûëú,Ü6§®oëûäZN¿RÈ#SÔURØ9_IBÈW\x0012òIý{Su¦¬¥s}ÃÕÅ@_\x001epû
ü@Û°GIècà\x001b\x001eÛùl1ð\x0005Ç×JÎY~¢\x0007¹VH÷E2¹\x001fÍ\x0007<çA;?Ò\x001f\x001dã¢NùT¿%wOÊ8o¼SüBµ°*\x0012KÆÎ­§`b\x0004¶ËÏ«ãýáâ\x001fµß\x0008çJõß\x000eÜzg_gÙùMq¦4\x0018¦\x001dßæ\x0012Ú$¶Fþ>Â#pà §`\x0011øíE=\x0012¿¶¢ÿíÛâÉÊHA'9\x0014S(2i\ä])4A\x0001
!ù\x0004S1yº¹ä\x0011L±\\x000eY<\x0000&¹\x0003LjË)®Ì,E´øÄý?Éþ¼ÿÆC1[f\\x001b¶mæ½o\x001bmÎ¿\x0011³aÂ!\x001ay½oÅ°AúôïD:Óu¿p*ì\Ø\x0001StäA%\x00149U1¥~ÿ~\x0010S\x001b°6çzÄöÙO\x000e.B/TÆÔT ì#ï£¬½\x000b\x001edüuú±øÏÆo\x0018ô®òõÀÙ}Ó¥¹Þ>±b±ø·í%¬Û\x0004w\x001d¸>gHðÀ9ss¦Ty§mtJ**½A5,£Aõ\Z}s,®ÇaâYR\x001bT1¸?\x001dcëi
ªè\x00117¦6µ|¹ª¹åô÷\x001f\x001c{÷QKÕüêõE-oO½ÓRúÎ'ªÛ.]¸XùÛØÁã°\x001eãÜ
\x0019«#Ç\x0002^t\x0003ÈÆú\x0017\x000e\x000c\x000c¯5eî¾­\x001böÖ_=û¸©ñ:ºë
ºyõlóå3Çêk\x000fï;qlÿöï\x000fîÜR¹ë¦¿U}ýÅº>_³sãÕU_ÿyíñ=ÛÿYûÃÞ=§0g\x000f\x001døþÂñ\x001f½T{¬öêÙó?]:Ww·¡îþÃ¦Ûêææ&¤jyZ[\x001e!K;\x001b·4Öÿãw?\x001fß§îÐ½®\x0006|ëN0¸.`ñÂí¸Ë§Kî=SQ\x001eé\x0002Ï \x0013ëu\x001fe\x0005úu©ØQøÿ#\x000c\x0018\x001dá÷ÊÖÃ\x000bÕ£/Êµ-*ßf,«BEåU¨\x0018×Ùr)n/©BÓÞÛò\x0017~&Í=Ü3ùTëÌËê¤ô\x001bøloªâÒnjÏ\x000f|Þ±l|°g^Òøô­¨\x000eü]¥jØÙÚz·RÝz«²µíö.\x001aw#Ô´ñös¿_½¦|h²2\x000e\x000cØdp·\x0000\x000f\x000bÑ`\x000c[§\x0005xQðÅ\x0004b\x0014&\x0008Á\x0004c}\x00031\x0001p'1©xQöúó«Â7Í<p°\x000cýæÇehÌáÅ(óÛ\x001b?Í:?`^Xgd³(\x000f¾©°\x000bò1\x0005FÈ×ñqÚå°#QÖwo«GæOôd÷4¥ß/\x0005ÖÏ¬½1bg\x0013\x0011\x0004+3\x0006Ã
LEZD±"=\x0002ÊS\x0006Â\x001bqa0£¿\x001f\x0014ùÀ´pß^Iqß>õ\x001bîå\x0006ý\x0002ML\x001aóg¨Î§ì»)4\x000fÓ\x0003\x0008ìS\x000f#´1"\x001bâl\x0003\ºk7\x0011[¤\x001b¸YÔJz"\x001aÍ¥@Ï©=Wùr«)¼	Ø>\x001f¿îÎ²w.2+_ö{ ?¾³\x0003ä\x001c²2}°&o-·"\x0017-×ä£ÁðAò\x0000\x001f¥\x0012]>*ì\x0007´e¿\x001câ$Î\x0010*Ð~ØÃoA %ÑC\x000c³\x0007\x0005BEê ø(c\x0008,O·.\x001fk×
·Ã¬\x0001þTû¹ù0Wá
i\x0012èëÄØÍ\x0007Âæå \x0007£Í\x000bæä\x001a[äÀê\x001a×Ðv$émHô'ÇÊGVV&²÷9ö\x0014!÷Ä®Ã\x000bìíãgý\x00112ö>Ëj?ÿ\x00108pàÀAoDþ\x001eúÅæÒg\x0005ùR$²w\x001c8è>Î±H`óøhz þ?ûå\x0002\x0014Õu\x0006àÿ²\x000f`aYÀ\x0017°ì.dÔ\x0011PË. F
èøj#\x0011\x0014A\x000eÚÌ8U£6©tl4
bÚf&I}t¦SITÛ¨(\x000fMÕ\x001amF%1\x0011«ÓÎ\x0018\x001f\x0010\x0013_i#,Êí¹ì½ì¹çs÷î²ÂÌ7çqÿóÿuÎYRrs#Ñ\x000eId
¬ùÞÊöV\x0017í»5á´±·>bK°:ÂW­±gÅw\x0018"]ÇÓ\x0014\x0005\x0005±&È|©EHc\x0019â7©1\x001d\\x001eÞ§èÕÒ/ñ3:HE6Û8\x0000»Ð\x0008};ç\x001fKs6l\x001e±ëí¢®Á¨\x000b# æÉ9³Ø
6Y1;q?z|\x0010ç\x001c¢\*çËi¼¨×Ì°#\¾Y(sÒõ¦%ÏÒ«E·EÃÞÁæ1¼ªÅGËÚPj*½j²¡î\x001fjÌ\x0002ù¡e 3\x0014üç¹çìsÊóß\x0001yNy¦Xc²OÞ)6âÌö@®\x0013eÉ½ì*öÒî7\x001b±\x000fõî#ö§ÙEÆ\x0015\x0007E±§ÝÏ9Æ>ÌÓrJÆI%Çd¬É\x001cÓl²a9¦é ù@Û¬O-± ÅÌ\x0001+ß´·Ußd]Ðâ\x0012èL(b¦R\x0013´ÜÉÖi¨@¹dê`ä<P\x001eXµdÇ÷gÔ\x001f-ø »K\x0002¬Ãe©1¦Ô\x0004íÞPØÎ:·ÚQ«S2Æ¬ ÅLV\x0013¬z\x000e`\x0017«&9j6«É²|\x0014ÚDD­+\x0011¾ü\x001dÎ­LõñØ®´\x0008sV¸ú
\x0011^½\x0007÷g@¤E\x0000×\x0003ä¢\x0013µ\x0013\x0010N¬/áÄæs1:öXèF{lÀuÌõ~ii?8í£\x0003k\x0005:ÏfÆ{OÙX\x0018Ïe¢u9:¿¾@ûH­S£],ûY8ulÙýYó*{ÓtRçôÊ=¾Kç#WDê»ôþ±K'ï+æôry,¹ÕjSØ+Í¡\x001as\x0019ä-\x000b£­sQèþ¦¯­×+÷Ð¢¦f3M\x000f\x000b·Þ«¾A>ßóÝàÃ­u\x001bü­K­|!Öá{ÓìÁu«éuSô¸I9Ü\x000fÜ\x000e\x001cBØ¦K1Ç°_±/±\x0007n\x000fi+mLÚë¢Ø¢È¡\x0006\x001fÈ=É¸+|"ê¬\x0013²~Xþ³ìeæå##Ô\x0010û°jUÛÔüa5ÉÒ¥ðÏ ô/\x001fÍe£·\x000bÓÛüþ\x0014¸¸:Õÿ»a%åw8nÁS ~\x000bj?]\x000eù­\x0017£\x001c]¼)¬tò&½Gnò0À\x0000}Å Í¼1ìµ\x001bf¦¯X¢¯J\x0000 á¡P©xÅ\x0014* \x0005`\x0006ÊD\x0016 J±±ÄÂ\x0000,ÐH©
%*ÌGÿ&=e\x0006\x0017ãë/\x001ef3¬\x0018UdÙ0qmêâ=\x0019o{>\x001b÷¥W&ì®nËygQëØ·J¾É|«äÆ\x001dó®?úú¤KéÏÙOÇÿÄüQäbÝAn!ìRØÛM	|\x0008\x000ba?TG\x001fÖ¯NùØ\;¡Åº³äë¬¦5ÞI'×óÓ7ñ³Î >^Ï\x00175<{sÒ{Õ§r^ýÏOXTíÈ1Í³\x0018¹¹Ñ\x0000ËFs¼þ«u/\x0014t²È}½++¿µ3{b«w<bHwR«÷1±?¾@þM\x0018g\x0017¶u\x0014.½Õ¾iù­»ç\ï?¹Õë¾æ\x001dí¼æ\x001dùã\x001bí¿|­½ãµ·î|RV>ê,ôþÌA1\x001d$³DfÆ\x0002\x0014\x0019\x0001æ\x000e2Fý¢xzÉá¿¾Ùtíòù»­W/|wñO¾<u´þøÑ½ïí9´ëjx{Ûö\x0003;~·­nû\x001b[êvlÞ¼ÇÖÍuonÝR·sÛÖý¨=¾o×Ï\x001d?ÜôÅß\x000fI4~~¬©áó£õg6Ô£ñ¡ó'\x001c»pêøÉK-Í-_]þ×õÛ7ÛÚï~woïø\x000fßàÛ¿åïü÷Ö½=7¯ÔÍ½Ú23áÒ\x0019\x0010\x0018z©9bÈ¥f.åògÆ'ïÜ:§¡Ñ9Õ\x0018ñ\x0004²ýHB\x0014BÂX\x0006&iHnªÑ×
k¦ rÑ8\x0003½ãvtû¤Å\x000cÖÏ(})ãùÝ·\x0017n:ÌWo<È×ÖÝ«¨=àõl\x00148Øé©­¿ç©mà«jøªFÞór=_YsGßyÏz¾bí!¾ôé\x0013]³tþÞÄÉW¼å·yÇååÏ/
ó±ù×¼YEm\x001dÓÜ¸»þ77n\x001fy§½ãòÎÎ¯?èìlû\x0010±ç¿9Àó··]k;3wÝË\x0012\x0013\x0012Ìè\x0018A\XH8:ñA D\x0006Ò·¡\x0008+Âpm0Ø/Ã\x0010É,sº±ø\x0007åkæì\x001eõþòÖü\x0013\x001bø¢S5üÆµßNÙYu!gÃÄ´:>°x\x0007tÂý Ü	er¨±\x0000}[ò\x000fsã*ïÄÓ5üÌ7Êd\x000f7ÆEX!xû¾\x0008~
q6Ø\x000c/ä<\x0002¯N\x001a
¯\x0014M}Ä+\x0013GÁ¯\x0011/æ\x000ee\x0019V¨L\x001f\x0002\x0015iC`qúÃGå#CÁøaJ<5\x0019{j\x0015KÈ`\x0004ººÿ¸>"¢Ðõ\x0011ú>Â\x0010\x0006a"²\x0017Dõè\x00101HL\x0008Ä\x0008ëÝ\x000cÇ[J}OAým
æ]
ö
ôÖ²\x0018DA¸§;í!x´
¾·?
]DS\x0006ÅÂª,G÷{ò[ôfö\x0016e ·(\x0003^Î\x001b	ÏuÀ\x0011IÝoQ\x0005ñ\x000e\x0008o\x0007µó¬	àt\x001d×mKÄ \x0005|6@åð$xÉ=\x0012^\x001cúí{3\x0011°üÑTôæ±ßc!\x000eBl¦\x000fH}w\x000c¾\x000fµ#ýÖL\x0014ïa­ïM¸ÞX·;ÂÑÅ\x001eFb++\x0005W\x0007þBøÓ;\x001cíÆÍèþÎa_0¬éPdExÍ\x0006þÂñgY·ÎÐß9[É£³ÎÃ\x0000\x0003\x000c0ÀÃÆ]|dßÿï¤4óQý]\x0007\x0003¤c|T¸ëÃ¶w_d2Ò®$rÁÊJ\x0012¥Oë­Î`|ÔºþAÄ'\x0018(ýPòKÎ\x000bã\x0011z\x001d¸c¢¡Àl<ÔæÇú[©\x0015óoùä¼ÔïÑå_KÓÉ\x000bm\x0001Âi\x0011º\x0008HE6Û\x0010vôß\x001dït	\x0019¼µ\Îú	¨SÁÂè³dXßÔdp\x0012\x0011)¸\x001fbû"|\x0017â2â\x000b¹§V\x001b´¬W%ÄX\x0005kV[zë¯V\x001d4yÚÚpÄ&Ô\x0018kµ±·yÓbC(yZ¡Ö»Ï	ví@Ü\x0005Ä=Ñs~q'pò;vÖlØ}#éQKrLÚÄ)Ï´ì.\x0003uýu¤Í²\x0018QîJÚ=ÛBÛ\x001f¿wi>±î]Mß8õýY>¾©½\x0001¬\ÑêÔ§xg8¥í´X²ò\x001d¨\x0006iyfíAË½ôkÀ×3E=©å¢VÓÔÚ\x0006ß\x0019¤­a)\x001e½Î¥Ú9$ãÉÚ'f\x001e(±d­g\x0017V}*rÏq½\x0003å9@M¹·1tÙ)~\x0007º#4åLÅ.fN)ç)Ðy\x000et®ñþ DU¢\x0019Î=mU©pn¥\x0015Z\x0011Z	k\x000fÿþ¹
Þ}<\x0019L \x0007ù'ü\x001e\x001d\x0011\x00010ÁÐ\x00038Å¶»/6W\x0004ï\x0007BÍAîä¢=Þ]¬ç[²-\x001dÍÓ>Ú	¹{g³âï\x0018\x0013S3-Ë\x0002ÿ~N\x000f~Ü&'1/ÑÉûT{\x0019ßió,\x001d,½ä\x0001tÊlÀpa-\x0015½\Õ¬u©¬!õ©É¸Dÿ\¨Îr
òVê«\x0003És¾^.K[GêcÚ¦WöIÛX6ºH=.Ôº%\x000c"Òw=ö"+\x001bK²\x0006?.|ìs}%ý
;õnl?Ú¾4p¿È1)'[C'cïKê$uÑü%}ÁcMgù&W!%î4p?IÝ2Èo±Â\x001fÂ7ßjy ä\x0016\x001fZÜXõÌ²µæ/mo¦~={¯|4ÎF÷\x0019\x001779\x001aiù[u2\\-ÿ üÝ@þH\x0015_Xáðz\x0017vÿ¾ÉÑÅ!»øH\x0000\x001e\x0006\x0018 ¯]ÊëÃ]·áÆ½ý÷Æª\x0004ôûÀC¡Rx\x001f	*B Á"6Êl\x0019Ö"ã\x0000\x0016Z´± \x0000¥\x0001(ÑÈ|§}Åf'c\x0000æÅ¢ï	FÎó?öË\x0004(+
Àÿ\x000c3Ü§rÈ­Dð@NE@FEå\x0012o\x0011\x001bYÕT­\x0016¸QSA¢Y9V£\x0007 D\x0003¨x[Q¹!Aq\x0017]\x0015V1ê\x001aQcÂ%h	Ê\x000cWïkf\x0006{z^\x000fÃ\x0008ÁÚbª¾ú_¿~ý¿ÿê÷÷Y«lqÐß;÷ Õ±\x001fíÏ¬©r~Mã³MÎ§ÃN\x00065Øç\x0004¿rHõ­µÙ1±ÚpQf$§½\x0012.C\x0010b¥ ¸\x0002!\x0007ë4RÞ1ñaªï\x000b\x000bzãR¶µ{Ö­]ß$Âÿv"á_±ð-ÝúÎóxÄM§]¼Ý¦/íÝòËó8÷&ÂÑ³¾ÝcV½`Úôºv'³\x0008'Ï:W­À2GÇäºö©\x0008\x0017ºv{tí@ÞCc»\x0015/ùîk\x0013ÜûßQ\x001d¹%:Ø\x001fõùZò3¿¦\x0015úÆý¦y_>z0ëVY^ùÕK§.\x0016:z,/;íH^æáéÉg2¿O:x.;kÏìï÷_ÉÎ8Tp<-\x001d­IÍÍJM)Ìù.£ê§üÿùcéýë¥%\x000c\x0014W\x0014U_+.¬./.º_^RüàFYù³ûw\x001e4üö¤±õÍËN\x0001¿èâ·\x0012\x0004¯ß¾\x0016\x001ch|jóëtWÁó*\x0016OsKX+?ÀûØÑñ~1Fû®
3ñr¶ÕðÒá·*·&\x00055èó\x0019¡ÉYhi¦\x001bhma1o´ê¤\x0011¦Ê\5¶	:}Æ \x001e²í²ûß
ðü®­9¯F¥7ÌY´ÿwb½OÒS;ÿ½¿:/û¶Ö=*ý¥WÌÉWwþð.$©°kUb1\x0011\x0019_HD$\x0014\x0010\x0011ùDÄÎB",új÷ÒÐÊ./ß\x000eW\x001e×zZÊ;k×ïïüÖ5¶ÄÇ·òSøüÇß	\x0004Oð\x0005ÓøíÿMë&ü£x´&7ÿñ\x0018+cä\x001a W\x0000«R
ÚýD\x0007\x0007K\x0012]\x0005Ð\x0011\x0018Èù\x0008C)Âb0G~y6\x0006òZ	¦èÙªF9f¼?0oRþ_ßÌ$ßë'\x0010~¥¿\x0019þÄ)Ñ½Êbã¨kÜ"v0ä¢ó \x0017BÑ@É3#si£íí\x0004bîõí]^A¶«^ó\x0001´÷cá'\x001c6\x00046Dq°wÆDø;oü ±gú\x0004H@û|æh	Qc \x000cí\x001b>æã$ÒÊ\x0010BFëÃ¬(F¬z`ª	K\x0011Æ\x0008uxÿc
\x0012ì!Di\x0010à\x000c\x0012Ü\x0001@yPù\x0000T?\x00105\x0005QW\x0010
\x0005ÐT\x0000-\x0005\x0018
øÞªh·ÇÊêµ}1è¬\x001aêþÓß^eÉfçH
øË$sØúÉ¾\x0019\x0013`÷ôþ÷!òÙÝ¨\x0017Å»Ûôô¢µ6£ \x001cõ"z?\x0010õ@ó\x0011ÀÓU±\6±ß\x001f´ÿf ­*\x0017YèÃ\x000eWë~ý5òCñ~LÊq°Íi\x000c¬¶\x001e\x0005¡d\x000c°½!,2Ñ\x0003g
^{º&úBÜÉïOò\êo¿\x0019ÈÞ¡\x0017\x0013Ãµì&Ô?6Ì_©);8­}ø×ÏÁ¹ó*C¿Á@'.;Ô±ýû±utXä»6y5­!Ðg\x001d\x0001Ã\x000c3Ì0\x001f\x001b¦!=\x001f\x0011Â\x0019C°º\x0016ùp4Â\x0008Î |Gxz*\x0019£\x001dÄ¢\x0002Üþ²lêËÞþø3ª\x001f::Nòø2T6÷¶årÀCS
xê0MC
%¥p,¼îây
ñüûg¨×Tè÷¨×½P÷§<GÚ6EM\x0005Æ°Y`l¶@%tÈùÞ5bX{¢±%FHê ´)\x000eÃ\x0018·*Ö2é\x0016£'Ê/¬÷>Ðý"Ç¦\x0008C.BÁ&yé+\x0006²ü¦ÎË\x001bDòÚË¥"v(ê»¢u31ÃåS½\x0015}äYÓ\x0007é÷þKÌ3­aI\x001fô1n-]\x0005F<ú¨z¤Ö1¬e\x0017ã\x000c~SõÓã]\x0001·É\x0016\x000bnl,ûð\x0019cÜ\x0019OÏ;n=6tÿeÔ\x000eÎ¾üÊ-õZ\x000eû°½¡ödÆ®S½\x000c>Ëò\x000bCºÏ8p>ÐãÃT\x000bØzfÐË´·Tp61ÕZÁÆá]·þe+\x000cõ/+/ò_ØZQ½0ÅYFLdåZf½brF·\x0007w>Ézïúz·zÇ4ÉT\x0013ä7­5
¥!Æð8Æ\x000c~ÞdJÁLbü \x001añgs°×V?òÇ\x0001áÿl\x0000W.ÀT41\x0015IW$]DRÄT%!Ôë\x001eI¿¦®Cr2ÒÍ\x00036m¶P&\x001e:èðïØõ  Ri¯+o¿k¯ÓQa«±k\x000eÛ\x001eÏÓíÀÙÛ_¦m\x0018pþõ0Ýc\x0011}LÕC×%µ¾\x0017Â
ÝÞãJ®J÷pkèsb}bÝ®\x00188½X]ýØ¿wo°æÜÄõ&nâ9.e,¾OÇI±\x000eº\x001eúZú¼\x001e\x000eÃz¤\x001c\x0014Dqq'¡^ssn\x001cÚ\x001cWr½;\x0002æyÜ=ñó\x0012{cö¢¯Ç=CïÝ\x0013'¹v`íåJÚFÄ³\i;©1vôg0qbò¯¯\x0018QíÇî+ÃW©8böðiº>zÌq1æ0è£Ù*\x0007\>1y¢?ó\x000bO¦kLíàüÇú«):ÀåªÏ\x0003aÎ5Ö\x0000ôd\x0007®*Ü^k
¢ÍDß	fo\x0006¦±ä·Åá£ë,»	õFÕ@^\x00120Ì0
`[ð\x0007¾n\x0007\x0012Û»Uª!cõYz\x0000t"pèJ\x0013N!L\x0001B\x0019\x0008Ñ\x0001å~0 \x0006V"\x0016k\x0003,×Æß£³¢\x001f,ï@9X!@[È\x0012M¥ZÈV\x0003CÎ\x0006ÙÚ_NÛdrpqÎø\x0013«î9[[ïr.ªyòÙ¨fçÐFÇ\x0005µãy5\x001fÄÜÔR.Q
\x0002V0äB0\ Ä
¸\x0004+\­ZÊÙlzC;Þñ¾É±%õ\x0013¯lhs/û¼cvÅNÂçÆvbæÍäÍ6\x001fÑÔÉóm\x0010øoxÝv °¿Î£®Ýaz]»\x0013\x000f1»Nà¾¨¶Íof]»\x000b9p\x0016AÞw@kít¤ÎSÆÎäý¨Ýoùwöu\x0012\x000f×ÄïX7\x00175ùZÒÌ¿Hú©\x0003Dû¸y\x0017LÍû!ýô\x0019éyÙi©¹Y)ó³RÒ.g§\x001f:zââ¶¤3\x0015±çïÍÞv®÷ù©ªé±§oÏÞU²8+=#®àxZznfJÊÕ\x000b'ß¿^ZÒoÊK«¯\x0015\x0017ã_*+n×=ô{kKS§ßJtò[î¶7Dþ«ßÊ\^Ü0òy%è?«\x0004§c#Zß\x0005,zQ7gIeµgHmÓÂÀªjï\x0005\x0007\x000fÚy9OP÷BÊ[\x0015¡\x00060ÇÌJÙÇ{½ÁÊOÙmL*\x001bwø_Q\x000fT\x0006lH¾ë»vÏM¯ÀM9Sx~Ñ\x0016\x000bÖdØ¯ÿö±oÀW\x0015._>µ4kÒUmáBl'À\x0017èEÄ\x0011 \x0014×ÉVmå\x001an¥í°§eôÂtþÔg\x0005\x000bvåw%\x0015\x0013«\x0012ÈøB"\x0002\x0011PÆ\x0005DÄ¶RbyÔ­.?ß\x000eWzëzÉ¼Ò kÁÑ³®}\x0003~x3ÿmoÚ. WíÇ@ò
_ð0¹£ëQ`êíxxØµ6ÕUUå¢t\x0018ô\x001a\x0000J1hcÐ¡ÃF·\x001füý2\x0001nê8\x0003ð/Ë-Y²|áKmN;
\x0018\x000c>p8\\x000ci99iR \x000c!Ü\x0016\ ÐfHHèARÊ0¡&t:eB9:¤¥	ÐP\x0002ä¦¤M\x001a á¡øuW~2«}»ï=Ë\x0012r;ÒÌ7»oßî¿ÿþÿ¿ÿÿ\x0014Û\x0001â\x0014HBX\x0011\x0000bGg¶"\x0011\x0019á&ÍÔbóÜ¡+lÛf\x001d\x001fP¿Ø5âý\x001f\x000b¥Ç×\x0008cöÏ¿Yôú£ÿêûBÖéÄ§¢\x001at8\x001fLEù`YÏñK[GX'­ûÙ°Á1Y)\x0010X
/\x0015kgûÚaÓð,ØPÔ\x0007Ö\x0017\x0006
¢LX5¤;ÌÍ´Bez7¨@TvAf#ª2\x0012áQk,\x000ch1\x0019[:Å\x0016e@©ÊýÓ\x0004° ¡
\x0010á\x0001Bç\x0007ô~"¢\x0013Dv\x0012\x000f\x0018;AT\x00070u\x0002s\x0007aÕN%$µ\x0015Øõµ£5ÖZ«¦ÞÒÄ\x0013-ÆSíDÞêÊàÚë\x0014î\x0017Å\x001a¡&Ëæ®'¸^ùZ6¢:T[Ð\x001b\x0016\x000fH9½QÎO4ª\x0006d \x001aÐ=\x0011¦;âáá8\x0013ôÖkÝ5S®\x000e\x0004ºVgêÃ¡Ì\x0011\x0007Ër»Ãæâ,tÎ×ãÕy=á,~=Æv¨Fµp*²C~\x0011}_¹¿µ\x001d\x0017J8ER5mw\x001f×\x0003_j¿kGÒ·"­±«a¿rÕ ÏÎÆe>ôSù3N 
¶ß\x0002\x0011\x0007ÅÅ¡8\x0008ÐÏ²r¥.Ø>' Ô&@\x0010!Bt\x00154\x0006\x0001w_\x0003C\x0008FËbA\x0017ìx\x0008á;¥\x0017ÀÖ,\x0018ü\x001d\x001fö"5\x001aHA»`©V-ô|¥çÈ¥v\x001fµûû¢§¿ÖúÓFJ¾ðÕÏ<û­U\x0003Ð?R\x0007&£\x0002ü(C[ßÓRã¸õp\:æ-\x0007\x0011å-£Àk=±¯É{-Ö-;R\x000fN¤¯\x001dÚp ¾\x0003¨g\x0011òÙÓ·s\x0011NÜGã	¨FÅ\x0016c\x0011¦Z\x000b1'z¦çóÆxÅy\x0008\x001bÒËÉ:\x000fuNèÃD{°ÎÀzÏ:¿\_NÒ\x001cµëÔØÞ\x0017Ù´läë¹h}ÕÚW>jõM^¬úÓç¼wj÷ðØÂsWp\x000esÀý<àîk¼ï;'è\x001c!É\x001d 3\x0014r\x000bë½\x0003\x0018rÁ;\x000fyÝg\x0006äþ¬<@Ëì!\x0003é9ôyYç£íI¯S<\x001bË_Ô3­#ÓÆ*Î$Y¯v\x001eÝÊè`§c\x0011o8âè,\x0017\x001f\?Qri»óâG2Îò!ç¾´ëF \x0011Î>J²åî\x0013m\x0017X1Â»W<Á'Ö<¯9~Èãä'æy)\x001bòl$1&gsÊ§¼}x>äå%¹8ó/ï^²l«x\x00192år\x0005o\x000fÉ]ãÄ\x00067f8y1\x001eñjN"|ºÐ\x0006gça¬mí|\x001bÃ\x0010c\x0017\x0017Ù`yO¼âÁþÌây²Ã\x0001"ò\x0010C´m´÷Åq9<ói°Ì\x001c´G©!\x001c>ÝÚK/Ïqìgi\x0011q\x0011­{\x001fö¹óçLÛ'&å¡µ\x0003Ã¼÷àíå¥\x000fcÒ:Öûv9\x001dxr:¤
]û\x000c% ÇÔôéõrãyZ¾\x000e,]xrÛum¸ãB'Å3Gyúá1,æz¢ÇØ)Ò'§\x0003Õ'[O>\x000f\x0013ïÊ0\x001dÕ\x0012ã1ad_ç=ÏKG¶ôz\x0005^óh\x0019N¤\x001eô9¼dRç¡eðÖÓ2hY\x0012;ÊìÁ;\x0003Ý\x001fFÉ¦mÍ\¯ãè¢år¾\x001aû±ì%ñ\x0005-OÎ6:úÞ#\x0019Ö¹(»±Þ3íÈò1Ão¼£ÏÇ:§ä<\x001c¿ó|Ú~áþ©ÇSb-p®Æ\x0006ç\x0017XÅo\x0003ñü~'~?Ì'ÇÚæâ±wvè­Ñ¤\x0015"\x0001\x0004\x0008\x0011"\x0010h­ÆÖ,\x0018ü\x001d·þ$ýÖ-ã¤±aU±\x0000$³=Ä°©\x0014©è$³8[\x00180Æg"f¨\x0004Ï\x0018
0É|Ýti\x001d`*ÑÒLé e2L&Áº\x0000&\x0018Û(³è5)Îy}'Æ½8æå_ÏjÌÞ;çÒßÏ½÷ÖM¹;¦~Ü÷µ±ç{½RòQygì\x000b­Ç£67FTëêÃÊa?L?´3\x001döAæ\x0000<ah\x0008_èh°¼:öXú±Ú+mÿøÝ£¾n\x0019WØtg`Í5×æU7\õã¿jû\x00175Ý\x00190¼éNnYÓ­4¹F¡±\x001c46Pd@\x00013úrËèª+®å\x0015W\Kïä£9\x00039nð¼_µTÔÞ¼ý×µ
Ô¼´iÁ8ôÿè»ÈOÈ0A)²ËT{lb}Ýë.]<ýí½;w¿ým[÷ïüù¶»~ñ«=;w¼¸y÷ÑÊçö\x001bòÔ\x001bïeNX³+½pÁÖø¼g_\x001e¹x»eÆ#IÏlkèÿÆ7\x001eØùÚ/ßÝWWwöÝ£
\x001f\x001e;Rï#Ï4\x001e>xæúúONýåÄå/.^þöÖµ»÷\7\x0004Áu]Øõõ¥ßvûç)mÜg§ ×\x0017\x001f%ÌüöÆ÷&}Ù\òÐá·F^¼0¸ÒÕZV}W1åïçJJ\x001f¯²0C¿ì2HÚèØÐÚ­ÏK5g>ô§7{~g[KNe0rÉ\x0001aÚº\x0006¡zõ\x0001¡â¹½®Éãr~Pü¢Ïðü]å(7­¤X!Bô5+[!~í=ÓÀ-­\x0019å»Zß×:¥ö0{ýa¡zíAa6¢²öPµîBÕÒ#Â´òSÿ\x0019=âó;¹ùÍRÿ\x0014qÈ.in\x0019=õß®ï_s½¼äºëw(¶\x000e­¹~ûèêæË+.ü£þ'ÿVW¾ëÍu¥/¬3hrÙ({÷îÖøØXY£\x0001\x0003Ê°Q\x0008t%ÀB£a\x0013£XÄÉßÇ#\x0012\x00116\x0003á\x0014Û\x0007\x0015Ù!\x0019è¥ÑL}ØüõÎ­3ÿ³oÁå¢c«ÆeÂ¨½O|3xCÁ\x0007i5ö:ËÖI\x001fd½¿V(}ïGBiíø=iÚH
\x001eÎ\x000f\x001al#;jÇ$EÃÊ!=`sq\x0016l(ì\x0003ë\x0003ÄÆ¢L¨-è
²Óà±\x001ePÖ
*Ó»&U\x0019î¶$Ñ\x000c½tZ°¶bÙ\x0011Çu\x001a"	>¨Û\x0000\x0013\x0016$´\x0001"ÜÏèüÞDtÈNbð\x0001£DùÉGÌ\x001d$Ú\x0007$õ\x0015:W_}­·J5W\x000e\\x0013Ä\x001ce%òV°k\x00128çâ\x001aóï\x0010³\x0001ìê®!îZê¯u\x0008·Ës»ÃÓ}RÝy~VZWþ¨F5`¦3\x0001Jº!+"\x001cì¢\x001e\x000fÚ\x0006xOü-ëÐøÔXX\x0001g"²üSsðxd·
*\x0018µ\x0010Û¡\x001c½\x001b`>z­û»áá»È)Æ\x000f¾78ÿv¦Æø»D&%iì_6\x0019­±«a¿rÕ ÏÎÆ¥>ôSøY,\x001al¯`ûÌ$Õ\x001fÀç
¶mÿßÖ\x000b\x0017\x001a7Ö\x0002úÌ\x0013 D\x0010!º
ú\x001c!,Ø50D\x001b)'È`ÇC\x0008ÿ\x0010³FÐù=FnÝ6ZÇ×¦ \x001d0ÉbK÷;u¾Ìa­Q3Çý}9{²µ¼9jÎÆç\x000f)­W£_\x0012Â\x0019¦A\x0006=\x0014PÈÇmÁÝ/ úq<F={æçÓcík
íkpËêÓûÞi~z\x001d8Ð¿$;Òl=¸=c@=ã÷ûÏø\x0013µVD\x001cêG\x0013X\x0018}\x000b5G-¼u¬q3"\x001ea%Î@êK\x0017¿³¡6QA?\x000b^jÏ£Æ.jæ*É!ß«9£\x000fÕÎ÷Õ·þ²©¯2:\x0012k¼µJvV³/6é¨îø®à{JÜ\x0005òÎwÎ\x0017ô]²SkXkÉg;k.0ÞtOY\x001d\x0018óè}YûHòÌÙåÆÚ!ò'Sg½$zÉØ]i
K6ïY¿X¶UÐSâ\x000f*Î¾Ð°åód;(Ùrqá ;þJþ ãÚ.\x0013XgÉæçC<R?Vq|Ì²\x000b×7s0uP\x001bú®ÈC.Ö¹qÏò-Ç¿¼X c¹7\x001dã´­\x0019qÏÔYÁV½Y1Â\x0019\x0005ûÉå\x000bÉ\x001d¦b¥£=åægcÅÅÙ/\x0017 ¨®3\x0000ÿËÞå±°» .\x000fyJi\x0015\x0015\x0011\x0005v\x0011pâ«
\x0002ÈÛØÚT\x001b
Dª3ïñ1¦S¨5&>\x001d­¦MjÆ7bâ[[1(b1ÆZ³¨Q»Øp{.Ü»ç³»°8Svøæ¼þóÿÿÏÎ¹pßæi}áÖÛ\x0001PSäðãñ\x0017´ÛÊ[óýáDF?ÁËý!³A\x0008Fá\x000c\x0016¡AÄð¥\x0010a_´­Í¤q!hL\x001f'¨ûë\x0000göf»¡2\¥G\x0018xô£¹*\ÅV\x000fUM÷a´ÈÊ()]w\x000ceÌÄ6)¹Ï%´5²\x0016baÉ\x001e®®¶¡áÑ
J¼Ô¶F$Kê7gÖ\x000c­ã/(©5<ZYG[KhSå\x0018Ës-é3©3â¹\x001al
yX?I\x0017¾\x0016îX4//µ<x_k\x001d\x0015öi)òZ¡N©\,cªG¸¶V0®eÄópY¡~\x0013{e\x0016ä\x0008¶|!ÄEk¦\x0018\x000fBL1cLmÆõÆú±¸è øßÞO¹5¾Sì!ÅÇÄ7¦Ã\x0006Ò\x001ebIÚ\x001fÒ~Ö\x0012bn©ûJÈg\x0013{\x0008uZþÐÎ\x0012)'w\x000e)ï2q!}Þã<áî[p³ØðÍàGùè\x0018¿Q\x001c\x0008·/;\x0007µ°r{¢xE\x001e²ÐK/öFâÂïeÖî9koÆ,)Íð\x0000à(4â.¦'ßFòÌ«2O\x000eO¶
¤+\x0001\x0014è»\x001dÕ³ºÈ4LAÙY2x¦bu"J\x000cd:"Í
 Õ\x0015`¼­ÌôP8¼\x0011à¶<na¿­é{ÃöÎ¼6üÙÿÑìÿUí]Y×Â·§Vm\x001c{1¤4ò¢ÏÁ×½
¼®£:ë\x000bG`:\x001clÄ4ø\x000còà0l|%zÇ?\x001f~Ü ÏÑêÃR\x001eê§­xö¼|Þ\x000fú?%è£âuÍa©ºçIÓuMSQßp®/#P9"í¡`á\x0013ýþ¥ÏôG²\x001eéçr}	¼8]óÐÌÕMú³\x001b[Øoæíz'Qá |¤ Da<zÃJ&xïÛê¦;µW\x001f\x001cÛûÑÎÃeÛ¶\x001eÝ³íÃ7/Z´ûôßU¼¶b¿:w¥\x000b$\x0015\x0001LD$"P=¨pµsÚ#êùe¢\x000eì)[{éðÇÖ\øüÔs\x0015'm¤¼úLù³\x0015§¾¼yåü¹Æûÿjhjl:ýXw9ðnÂã»Jèï"£ññÇM©Á×/{*.\x001es¨­	É~üãäÍlNÞÃú)cÖm	uýým)SÊ2Ò¬\x0014 ûf1+²À¬`\x001d6°êÔ2V»ô(½¶Yz-xóS6%j3\x001bê¸\x0002½y¼l;Ëør	\x0019ÙrVê·õ\x001c·½%bößØ¤UÇÙ5åìÕÇÙÂRT÷\x0018;£ô\x0018[Pt¦%-¹öE\<¶¿\x0014¸üàö~®9zl]óè	\x000f\x000c\x0013\x001f\x0018&\x0017Ô=]¼ü©þÄ\x001f_üôÕû?±·7µ°·þ`øoõÊºGgæ»P¹yË¢¨éÙ¿ì×?Ä\x0017m9 4\x0001t,@%!ãÞ	<¬¤\x0005¼\x0011þÀ\x001e&\x0000ÅÅ\x000fÑ\x000fá\x0008:AZ#}X±ïÉ\x0007\x0006íûí7Ã%O\x0013\x000e\x0016ÕÇ±X?öò;ì³KÙq9Cæxqò=mwÁÅc \x0013\x0003y!Þ°.~ l\x0018\x0015ÖZv\x0007ëyVÄÂïÂü °¿\x001aò\x0011\x0005¯(3B¼ +Ð\x0013´*\x0017\x0008vhË!Z\x001c¸\x001cãÏ\x0019úkýI^\x0002\x000e/\x0019i7Ât\x00032;áh'º³¸t\x0011¹
¸v\x0012·.¢è$Ê. ¢!±ííì{kÍKCð¼\x001aï±Õï¶¤íÝæîÞ(\x0013\x0014zCiì/à½Q`}B×ß*nî*íÏá­ÁþPîù¼à¾Äû??X
ÞJ\x0018ê" \x000bo@wÆ{§C¤\x0012è£\x0005ÁÈÿ0Ø|Xoã{ÌK£~\x0006sÂ|[}æü\x0015ÇAb¤\x0014\x001fw;¶Æ 'âÐYø²¯¤í\x000eäÞ¯|Oho2-M\x001aÔÂÊ_E|¯T:;¨¸[­÷gîç}²Â©§÷Ê¨-õtLÿ_~nLOï·²E×\x001b\x000b½ôÒK/¯\x0002®9lß½tÀôg%=\x0013½ØÔ\x0004êí\x001f\x0001\x0015§}J/ZÅ\x0007áK\x0001\x001f3'ki®¹ùd;³®½À×·
Ýå-{Õ\x0015¼\x0011ý¥\x0012ÐÈ!ÁM\x000e#]] ÎCÞN[_G\x0019çj:NÁêíór6i®\x0011®\x001dÏõ!»\x0006Ê¤\x0010l\x000e@7c \x000f×Æëx°\x001dhló}\U\x0008\x0005_*	¨(¥%¬Sòë{p{.é°-PX\x0017Ú
\x001dm5Âo
|·V%yk×¡éê=Ý±µ9`Í|[âe\x000f»ðº­±µu/,ÙËx!ü¡ã\\x000fìì\x001bë¢ûB0WtW\x0010î\x0000L¿p®±\x001f×ÛAº¯H¶ÒÆhkÓæ½\x0007%!Ú\x000fâq\x000f4;ðýj×KÙ\x000b<~B;\x0002p=\x0004[ñ=Âý\x0010®OóÝÄO"?±¼$Å* ¸?\x0004ÛÌÅW\x0014[.RÎÞ\x001eBþrNæÎ\x0010¯\x001a3Â{MÌ\x000bkÎ
éÌP|èÌÙ\x000c\x0014B8\x0017Äo\x00133úhq$Ý\x001fx<igÎÜy ÝK¤ý¢Å«T\x0019Ò:s!Êc+î\x0014Rühkòz>)±&ê ÕÍøHóÅ\x000f1@ê\x0000gÓýáë\x0012¨)òÅ\iÄ¯¯ßök³ý!ÞY\x000e/ûç\x0004mop¨\x0003@4\x0003 EÄH;Ð0m\x0008ëÂ>¡°Äå¡5f8AýÁ\x0001Î-5\x0011îúÊpG/ÀØn®
W±Õ\x0011Ê²,_F\x000b\x0012\x0018b\x001bc\+	öl³$Có¯u~'çXG\x000f*µB\x0018r[#íÅçh\x0008uZÙ^gÄ:,ÍÕ\x0010äD¶pze¨µxÝØÖ\x0008ëi?IÞd°F;\x000cY\x000f©®aÌËY\x0002÷\x0003ï3i3\x001dÄ¢v¬±.èÃÇ[K\x0019&Çuáãí}Æu(ëÇ\x0012Ö#én×K±¤\x0013·Uh\x0013Ío<64qÁõã>ô\x0008c*\x001a£Ø$Ú\x00133þú	>	cï(/,ä\x000bmÏûeÒ'3É:Fýø¾Ë\x0008ò¸Ý^Zò\x0017¤\x001c\x0011Í%Ø"Z¤\x0010G³gP\x0010\x0013R¬F"\x0006Kíó\x0016¯\x001bÝ\x0007î-\x000c0ùV¸Yì'øVÀ¿\x001dL¿'*VÅIF4Üw	jaåö" u¸±Èº^z±?\x001f±öÌ×î`Äg8å{9B¡;@\x0019ò;AäªÌ# »LçÉ\x0012\x0018ï\x0006¢\x0010ÑÈ´\x0003\x0019<S­A)@ÑA:F\x001aF*òk2úW+Ù\x0005Õ\x00152Èó	q7(ÅãÝ±ëvæ|1tÿ¬è\x0003³j£÷½~køîìêð­É\x0017\x0006¬Õ^ö_\x001b}Ýoqh¥çÜ>\x0017ä%¾W\·¾\x0013ºÿ`Ã¦ÜGOJbë^\x000cNÐ5Õ¨_³æGý¥Ìzý\x001bñºæ8Äx!._×7NgG}H.\x001b\x001bSgÏ­×,~úüÐ'Ï÷%?4LEýÃ\x0012¾7D&Ü×\x000fGr&pº&Ô\x0019?Ó\x001fÛÄ²wÿþñ{I}\x001dIÈIÈ¯$3$º2\x000e½[k5§±áßìwµ_>8¾oÇî£ù`Û·¼¿|Ö½\x0003\x000bwUö\°K	Éóbh-$\x0016WîJYÆÆ
¯E;ÊÇ|þ\x0003{j/:}ã\ÅIrA½ÓÔ«¨¨<{âàîo«>8Òðýùìû_MSß½êÐ÷îU\x0008¼W-R_?:ÿçé\x0003j®úÉÏ\x001f\x0002·\x000bGáì	pÇ\x0015d	KdùÀØF²l1\x0006\x001bc.[¾R(\x0013 6\x0000>(¥ô \x001cÉ@\x000b\x000c\x0002Æ\x000e.&$%¤´4´\x001d\x001a 
iB9\x000c¡¦3¤`L Ð@\x0007sËÈ²aû~Y²­þýuWf¢æ]íñö½·o÷­2>?4ëNË9-æ\x00193\x001f<sª}húÚú\x0016ÿöqÆÈí$#ëU\x001c[M´UD\x0002+ðþù\x0019DÚ¿èæ¾MÆn8Bªj9ëòÙ»É(C-U8®\x0016Ùì´²\x0003ÙÔ#5È\x0006d\x001dò2b\x001b±¨²_#©óöqk\x000fÙ\x001b\x001bHÕºÃ¤cÃ!RùÓ£dFicûÈü+X\x0010æ=86+ï9\x0013\x0019ÄQÐÜñ0~Ö-ÓÒå÷LûjZL'ë\x001f¶ÕÜvaëcòo\x000bÕ÷ZN-=Ý¸¿ìí+2KJ
¢5\x001a¥
o^<2\x0010!qH\x0017r^\x000e1tS\x0012Ð?½8$I\x001a
Ã#\x0006(Æ\x0019Æi\x0017\x0017V'\x001eYzägëÉ?þà¢Ñ\x0018=D©ÀëëkôVûÚ0xap\x0012l*\x001a\x00085\x0003`cA_àdWç÷¥YIðÝX\x0014\x0003åÉÝÊ>½ \x0002\x0010\x001b\x000eé
\x0019$pñÂðc¢X¤\x0007t}\x0012?!
 !~Bæ'ä> \x0008õ\x0002(= ÌCT\x001e ö\x0010\x001b{;9×Õ¼ëIþµ\x0011-éÊÅ¬;¬;ÂéÊå'.O\x000fSBU¿8XcLºâPëE²å¸åCá{©qz2îÿ\x0018xªw\x0004\x000cUâû@bÉò\x0001W\x001f\x0019¥Eh{%W{Ó,>\
\x000b3ô\x0016{Y~¨D?é£ '\añÃð\x0016²åä8IÇýâË<ã¯<Ò³¦VøuGâORHµÜí\x0016ü¾ÈMu=\x0002½G¾"áÖm¥¢¸X\x001ah~Ó>î\x0005rßu_\x0012|ö\x0011\x0008\x0012$Hî@Ä\x001aÒmßDßD´/\x0011y c"oè¹øåÍª+-
Ç\x0015Ü!Nä7Ýç©l±5ü±®;öz2Ï\x0015{\]5×±Þ¬K÷s¤ÊC O¥\x0002u\x0018äcÉÕó±n+óm¥
þo®NWwý¦eäñÆÛÈ\x0013ÇkëÐM	Ù*\x0005¤È$ G\x0013$\x0008\x0006kIÃoçê\x000e¿±L´¶Å á\x000c´"}®@ÏgÉÓXûb¬¶%òl00lÒ#½x25"òmk³úµà¨¯m÷v·ú¸«\x0003\x001fWõ\x0010ó±X¿Íþò\x0007½çB1àªN®êé-bkp±\x001eÄKìÏ7}F:ë\x0002}\x0006\x0010¾3ø%}wÐwÐ\x0019u¸o¨5
5\x001dÖ§t7\x0008ØÁÒÇ®ÏE[D}@\x0017ò±³;×\x000eB¶\x000búP\x0008pÉÊ\x0007´L±9ûÅØ'!{ìúØî\x0010GBý"qb\x0000ç:\x0008Ù+$GÌ_b{'&¥`,	Ä*ÓvF,ÚÉ'wÎ«±#4é3:N¨1vú\x000béE³³a£PÜñï&±ó(\x0016\x001bvûÃ°\x0015«¢²éxq\x0016Sýr¶L¿°î97d9Óy\x000eî­Ë½ÑW\x000eK/%@Ó"=\x0003\x001d4-ÖÃ¥%\x0006X\x0015
ø"­:\x000f\x0002\x0018e\x00009HvHGÉ¯s%¿në§ÇðÛùdpþ\x0018\x001c.iù{ºúQÓàÖS´&ÄVÒ´ÉÔÓ¿Î×ÉFI¥%éÐµN´î|XóÉdýî\á\x000fz]¯ñ·"ªç\x0008´Ó}FqRÆ\x0018/\x0013^ÖÅÙZòåØfÅRu|r¨²s\x000eo,=ã0^.¼ÅÇ¶RæD<;\x001deëðe8èÈkÏµîs®W·¶s¥×f«ÓØÍ³Çæòd\x001byãìÖ	ëä CÞÕ+ÐÏ·ÃHÍ1Ê\x0004J\x000e,Ý\x0002ri½|#¶&=ÎÁ´rO\x0004|K¯+\x0013\x0018KÛ)`\x001d´lF|\x0008ùQÔ6zßdö8Û?Aÿ°öBî¨»Bûâ\x0010k\x000c»\x0004Ï\x0013c?hþ\x000bè,ÐõR\x001fä`Á^ð¥zË{À\x0002÷6°½\x0011:q|?[ÜQã×óBÛÛÃ\x0012\x001f\x0013\x0011YMÐB\x0002Aø\x001aÍB"óe¬úþ_~¡>@')\x0000`1Û	³<`¦Öç\x0018<ë&3(¦3\x0018£\x0006(\x000e\x0003(côO³Ræ!¥<qp\x001e.¦RLqÂd\x001eO£%hã$%*\x0017¡V&d)X\x0010[_²3uWùGY{ç]\x001c±÷û_e¿5ëÓÁ¯?ÙoóÈÏvM¾zxoËú
W¯7¹Ò26¯¹-}ÒµÖ²U÷Mßº·ot³©¨ Ù<\x0018\x0019RÖÜòÌæ\x0013óÍYÜoë­e?üÚ´eÉ\x001dÓ[3o^\x0018}µµ(÷9½àjÛÂË-C
/=\x0018Rxµmha³¹\x0013YØÜ:|Ñí\x001d¿ äâü×·¼8\x001eõ6LÐØ3C-ÌwÐÎ±8ïõe?~ùÎfrùbãí·ó»\x0003»ÞüåÚmû¦Îý}£¾põ(ÉÄçQØbtÎóL\}K ÿ¶ªfm=\x001e[ó«ýÓNÿíÈÁÏO\x001c;ÞôãÇ>úà³\x001f\x001em8{âØQ¯¸t¡ñìÝësþ{&#ò«O¡'p¹Q9õöÍoÍ¹gÖô/½êÄ\x0001Ð||\x00109\x0004Æ_dTÞ3U=0M/¿û°4ç\x0013SVÆîö¾3v¢\x0017ß%Sì'Kwü´ÍD\x0007µx\x000f½¬% ^C\x0014ãwa+\x000fg76*\x0007Ésß'Æð÷H\x0018ü\x0005Ç½Ïã=+ï"û}È\x001f7-H5²j5	ÍÞJú-ø3´¡T®;B*~~¯?D*V5ÓÚG\x0017]3\x000f+¾j\x001e>\x0012\x0019uÍ<bô5sö\x001bmÆoßhË\x001dËq³-oÜÍ¶|\x000e®Îõqc®æ]1\x000fB2p¾±ôFëÜ_¶­¹ÿðxÝÆú­çêÍíç¶<"çë\x001fó\x001bîÞû¤êw6\x000f.))ËCð\x0018ADH\x0017r\x00027&\x001aEtá	!\x0001Ñ£z#qH\x0002R¹(®ú©ý\x0003N\x001e$[Ú\x0002­§/áìMJ`b|\x0004¬Éé\x0007\x0006BMA\x001alô\x0003ÜZduN
,\x0018¨ä\x0018\x0014\x0003åÉÝÊ>½`Fb4\x0014DA\x0010ÅW,?&r¾D¸såø\x0019i\x0000	ñ\x00032?!÷\x0001=|D¨\x0017(¼Dé\x0001a^ ò\x0000µhÜ$Ü\x0003´bH\x001cqg½É½®ä_Hõ~
t¾q\x0017\x001dt0\­ò¾±°67\x0015ê0G½R4À«<TS\x0006k)ðt[\x001eêiw÷Wôé¸ÿ§ê#Á\x0018®>²û?!>ÈÖ(aþÞ\x0016ý7¡ý5û`£Õ\x0007\¹lh\x0012Ìí\x0017\x0007³Ð\x0007Bù¸Ëh(VALjÑåIx\x0007q9{rg»Ã}cüGâ?<¡H|LÂº#ñ'Oqé$øQº¢B\x0016è½ñ\x0015±GJµÜÉ	~ÿïOQ\,
ôþGÕ\x0011¼\x0008\x0004	\x0012$H ÙKB\x0003}'\x0006é"þ$Q\x0004:&ø\x001eYÄ/ï
ÃÇÿTÄËd\x0010«Äó ³Úø}bý®ÌaÕÅäsÕ\x0006Oì\x0013é£û]ñÿd°l\x0014ÓÇW:ØÊô\x001e2(ÐA¾
Qw§Ròê\©ìlãJK7&_ÅïçQwÌ\x0015k÷»s<5\x0016)Äúð°PHJ@:\x001bðßR\x0002Øcit\x0006ºQ×!X× á"h\x0005êtI×éùB}ü¶h¤7tèî 3Ï.\x000e\x001dò?öË\x00058ªêãßîÞM²ym\x0004l\x0012AQB^<Â.I\x0002&$DðJBxkTìPÅT£8>*\x0016ÐR;ícÕV­Õ):\x0016*H\x0018a\x0004*U¢òHªíðl\x001e$$»-·çf\x001f9÷Üïì#»!´Mf~sîýÎw¾ó?ßùî9\x0018Çx_´ûãã+Þä¥?±°òòë­\x001ev<¶·ýÕìk\x000c_ÖäKýùêëíÞy»NwýzÀ×Ë\x001b#ÕüM\x0004\x0015þ½¸¾\x0019Ct?kµ <cxç"&«õW¹íÔÈø°¾è\x0019ÈñWøªäé<\x0019xºX\x0006F+?tnv
Ô¹ÆÆQÄäÄQh£ãªp]lÎX½n,²±îöÃ\x001bª&Ñu²ëååÊ\x0001¯.Øµc{ÎK·\x001eê\x001aû¾\x000c&>îÚ9uín±¼q¿\x0011¤Ñw¶ÝÕ\x000bg6\x001f¼ZæÍM¿³ùåü~p\x0017§QQk´~ä·g¼\x001cqÏ	¤¾¹-'o¼\x001aÆææå\aCÖË«cE^<Õ\x001dRÒ\x0018é®\x001f­Æj\x00034Ö$Àé\x0007ãáôºx{ë"\x0001\x001aH{¦6\x0011Þ/\x001b	1j\x0001®÷\x0006ìÿS$\x00112ÈôF-À\x0014Òfkì-K6ý¬éõqõ9l	\x0019dg'E©»´J²\x001cOÓ\x001dX(\¶ú4½ø÷Ì¨C5IA3ÕÞñ´¶lúY#×ÅÓ­íÇby²»ú|Èæ%­QÓ×\x001a);\x0017AîkÔÈAc"v6.\x001b\x0007\x001bÏ¥ÙQ/½5ã-Ô^\x0004»Ý\x0015~\x0017ä6'®qÌXZ\x000bkcíN\x001dNMô;º\x001eÌGû:õ\x0004;Fª5Òï¶Ï·×î´!ï>Aîgdßµr?Íè3jØZ|.#27­íwÍ-Èç71¹3
Ê¸9\x0011MÎXl~L´¿ WfCúy¹fÇ²}n÷Ý[d1019V¬Ù\x0007YlêûPÔ-¦\x0011©I´ÞÝÔ¬\x000e°}bê\x0005Û;EÝqrÂÛ\x001fwûÏKÞs\x0008©jÿïà`\x001dü­<\x0011¾~ý}\x0010\x000f
ëì¿\x0013ì(?8k÷¾¤Mº&\x0006\x001e1T0ä×\x0008C\x000c\x0011HBf\x001a©¾\x0002Z¯\x0001&¥»;´¨ªT³<
ÀÉ2\x000eKý JßÇ\x0012\x000fTzA\x001bÊ)\x0016EÊßi$ß¹\x0011\x0000!\x0000\x0005áö÷ÅÒ~²a'"\x0019"úOQæR\x000e%\x001cæµÞ\x0019FÖ\x001eJZiÝ#\x000cÚûÇ\x0016EmöDâ+w§¾{ß?²wÝ{nò{ë\x001b+}¾ýè#çÎ¿=ãÂUSn³5su»yãÖnË+.´×æ\ìN#¶Ù-é\x0015Í]å3ÎvLÊi²dæ5['-úÎ\ýãï»ß%ó%mÖùs/õäÎ»Ü3½ ­'gZ³u"\x00197!¯¹`ÍÊ!1r¬éy-Ö3Û{f\x0017·tÝûI}Í¦ºC;«\x0017\x0015\x0017\x0014è@O´\x0016{Ï\x001c²¾|\x001dÀËë×n¼r¥Y¼xötGÝ;¯¿õî¿ÙüØ\x001fç-ÝñU|ìÊ-Á0ç\x0001â>æ>$§h\x001d\x0008¥µ*Ó£;ôwí¨7lßwüG>Þ÷Í±C9ùù©c\x000eú¤nÿ©Ã\x0007ê|;ýéÁM­ç[Ïu¶_2]<6ì\=D­\x000b'BVv\.Yo±ýhÂÆ1aÇöAäÑ\x000fUáGþ\x00021\x001d\x000c)ln¶ºÃR±ª³»|ñ·ÝÅq¿³Æh\x0011	¿\x0014G¯ýxçæýâªç?\x0016Wß}X,Û-\x000e?3é
\x0011ÔÛDUÖ¯Äv¥?ýH\ùò_Å\x0007Þù§¸aý\x0017â½âpxø}ÀáÏÝ=v\x0017a'a;áy\x0011¢7e¿\x0015MÏî\x0015m"±_8(V¿Q/Öno\x0010kª¿ûwiYmö\x000eÛ\x001d\x000b;lù:m\x0005å¶9\x0015WmWmE]¶¹"']ò)»bUØÞ÷ÖÉ¤f²¦6YÇ8·Õ²`u[×Ó·]þàÎ¯^ê27në2ü¹Ùzê\x0017×Ä¯k»t´üWL\x001aw»<DI¨ú\x0018æ%7ù@,!`ø/'¬\x000e1ÚHµA¥\x001et=^Û(R\x000b©!Z¨\x001e;\x0012¶äÝ\x000e[	so\x001b\x0010¶æ6ç6x4+\x0019î¾%\x000e¥ÄÀò\x001b7Kâ8=¤é´®|ayLr\x0010Kr\x0019\x0004ö?Õu@=h\x0006\x0008!Àh\x0003@P\x0000	ö\x0010?ÐõP?\x0008óð~\x0012Ñ\x000f"û\x001eC¥$ªx{\x0007ûz\x000fÇ\x0010F:Î®¤\x001bàÎñån\x0007;¡APEÎâ
ÙcàgÓÇ{Ê¿{hã\x001ez,+ÜC±°,Y~ö¯ÎþÑ# <q8L\x001b\x0016\x0006·jÕ½zxçÿ@"­_º£ÓtA°ôæXøéÖÞ\x001cø{\x0017oqÜÇ\x001b·ÀÚq	½ëVä°ä½*9\x001aîqÁ\x0002$\x000cR\x001e|ÅYëÃ\x001dg§tgÝ\x0008÷/wEXF:±©YtM\x000c½\x0011\x0019þÚëÎ;Cä/|Å
a°÷$PèzJ;Øùüÿ­;\x0010<5Ø.êÔQ"9EE\x0018b!\x0018LF\x0010C\x0006û^\x001cB0fè~ø_!öÀÀ|_ñkÖ\x0008#É\x000c\x0018q\x001c»;ú3f âù«ÃÝø87ýþÌ\x001bçe\x000cl~ll\x001cãõyÒMÛc	ñäDÉ\x000c\x000e¼ðPÈ
ÓA\x000eiL%ïNì6GëxÊø+m:Ý\x0015O\x0016\x001d+·ç:È":U*H$º
*;ô³\x0001ä6ºÅTö<è	\x0011H\x0006=bÃú1?½8zÆ>Ì±'N]½\x001aYÍ\x000e\x0012m\x0004i£\x0010Ý4û§uðrÁúbýîòç)¯¼ø¾hò7g¾æ¦?q\x0003µw×s>oöÆ_]Rt~\x0019úÖ\x0001ùÎ~\x0003åç:;9K\x0018X<ì\á!;¯@©\x0017;Ë\x0014s«ÀíyFkçùñ´¡ç
«Eå>\x0016G¶ÏÓÜì¹å<x{Å>c¹Áææip7\x0007º.Z'2§Ç8H~\x0015z\x001aQÔ½Üa¹äiFsã¡æyñ¹ß\x0007'.7¤Î1¬\x001eìWÏìán^nmqrâ®fØ½C¿y$/X(|xµãNäÇ«\x0015Þ÷Åjòð}»«cOß\x0019zPs'z¨WÅ>qjÏSMq¿Cd=ØÚxu.ý>LU	ð^I\x001c©Mu	púAxGÛGCM<]\x000c3GÁ`ü\x0012\x0012\x0008£Õ\x0000\x0005\x0000#alMß3fãõg#ýÉs\x0016çÕ91j±>=Òv"]oþ<Mo9¦7\x001f··ô³ÔZ¿\x001c¯\x0017\x001bÓ£êK	*
×ÂxPÎiiÑ¸Ñïa¼7`ùpÙHkÔØ[ìµõ¾\x000bî}°xS8-÷YPÆDçü´öuI­)È³'\x001b:VÀýY;ëC÷³vVêÃb1~²1\x001cí&­=7Rk\x0012ú0rM\x00025ê72v#6²ÓcãÈ\x001c´6#\x0013½Ëôj)X;¶\x001eÎ\x001a\x0014ú¾Zþ\x001a\x0014¾Ì¼¬\x001f«\x001díçô±ùÂÖëü\x001edZ~\x0013\x0012\x000bÛwl/e¹Ó*cñò¨È=«\x0019©9^})òì)«»ì:y9FÆaõi­ª[#O¤¦±xlÌ\x001cb\x001f'øÿÎ\x000b3÷'õþ\x000eÿ6gã\x0011[\x0002|ñð\x0018Xx².8é\x0018\x001a(¢ß\x0012\x0001D\x0018b@"¤ª\x0016Q\x0017ÈZ\x001d\x0008ò^Ü¤]\x001e\x0005 ±\x000ca©TqìKôÞSé
\x000f#,¿/¦èí'LÐ\x0001d\x0000ÌwØ\x0017yÉB\x0005Þ\x0010I\x0011ag>E\x000fr(á0\x000f¡8\x001c ü;VHrPDþA*PU\x001a\x001bRuÏ·_ûhÛ6swÃSÿjÚ3óâÕiù­Ö':Í{î4ï/h1\x0017¬©yÍÖìVKù¼\x0016KQÎ7m©¹\x0017»3J¾µTÕ|ß½sy»¹¶øuÖÂNÛ¬Ê«¶Â%]¶¢
Ò\x0016¶÷äå6['±Y9ÍÖôü\x0016K~U»ùáÕmæ'\x001fÿÌòÃ]oZïúð?ì	T×\x0015ï?ÌÂ\x000c0Ã"À0@p\x0001QÜY\x0014\x0010ã\x0001¤\x001a\x0015¢â¸´©±V\x0005ãzÒkâBzjsì1iê±9&¶$j¬&j1V\x0007-V\x0004
¢(\x0008*(Û0¢¯ï\x0005ÿùçý³1dð9ç;÷íï¾ûî»÷Í'Xw/ñË%\x0005\x0013v¥¼\x001f=/(Ä+A\x000cT\x0012­«³qhð¸×\x0000»¦g66Ö ºÚ[ÏÎýóà\x0003\x0007¬Îúºlè´O~ì'LÙÀäLlU\x0000¿Ê\x0002uyÊ;Ø\x0008k°Á0o¬Öô%­\x0004ÁÔµ¼Ðµ\x0007]\x0016æÝPü¥ bñµ+OÖVÞ«¹}óþÍK?\(9úû\x000bgÏXÂõó§¿+»ZpåIÓ£öêæG£«CÜî\x0014GU\x0011(ªK´4ÏÝ¤êX\x001dYWÕß­²\x0010Ü®ý@I\x000bNQN\x0017O@Pq¡WZCÓMÊYZÛÒ*ÚÆö<\x0017B6\x0002íHv\x0008Åì/DG«ÐöÜ\x0012´tD>
ã86}9Àç\x0013äq\x0018Møô*ZW¶æU -,A¿=\x0006SGñ\x0018c& ×;ù\x0016ù\x001c \x00179ÄîG¡9'Qú¡R´ñ«JW¶üé.ÊZÐô|jZkÇ$ì\x000bÉ4´/\x0018C=Në33;\x0012'7>P¯À¾3,ºF\x0015FûÎÄZåÄù\x000f[7þáIËÉ\x000f[¥\x001far[Å\x001f?{~s/Bå«þwdðÄ£±«+\x0005àf\x0001îFÐõ÷Áxcä\x0018B+_uäØ^~ öÖÅVÐçñÅÄ¸9ÁÚá\x001b\x0017
;cBàqlÎNÌ.¼vNDX\x001eê\x0007\x0019^\x001eà	ó\x0003{&\x000b¼`¢\x000fÄºI ÈRÛË\x0001ZÇé\x000c°Pÿ¨\x0001\x001dqè&øÝÀ\x0006\x0008m¨\x000b8v\x0011±\x0015Hº8[H­@Æ\x0005e«Ø:\x000f{`¼0¾Ô«}@I0'ÈS7öÄÂîØ®å'u\x001eÂkl\x001c\x0000Ë\x0007û©c}z@Î¸¡ý³qìàá\x000c!"¾:¶\x001bÿÝûa\x0006
ùêï\x0001"Õ9z
r´f°nx\x0000,\x000eî«¶A:+\x0007.\x0008Òäèä¾2\x0018â(èÔÉÞ¾a
\x0016ú;cºÕSò¥yÃ9.'¯©\x0015+^ IOÄãÀ§´¿ø0<gï»°\x0005òÇ
bGìsö¶gï\x000f»á{°·?¸ç"ü¾\x0011ôÒK/½Ø\x000bJÀ_iÿüØ>²uH`oßèÅ6H¦#îð\x0011ÿ²rq?©¢ÿÏ\x001aÃ£Ìnc÷ys7¶¹ãÌkJosÎ`+,ÑÅ\x001c\x001bÚZOcçïñ§(\x0018!\x0016B³\x0004Æ:a,-uàz4³QffeÍÑÔMÏcJÃ}Ä0D(\x00009ÖY?¥Y¦´} _7§XJ\x0019ÈXuKÚLÁC×]´ÒÖq\x001eÌs*0~ô½aéÚÍºve5{ÈLìgJ\x0017sÎÍµ%í¦Ö4ç\x001cæì'ãÞ\x001b¾\z\x0018k·æL]õ3R\x001fýfÜ0> }Ç ÿfoýîõ$èÇ\x0007½2{\x000ea¬?c\x000féírõËÁp\x001d~ÊP'¶>l\x001dIûÖç`8GNM\x0006g%ØóÌ\x001cç5ív®u¹tâÊ\x0013$¸ú¸î¦Ó&fÝ`.Ç}üË~$\x001f0å7\oÂØÝ\x0018èËÚßÀ.Ìµu~dìM¸+Ò$Þ7Ç=ü\x001d/Ø¶ãz+\x0006÷gÄÎ\kÞÑ8À±\x0016é}ZÇ÷CÚÛàìÆÎÂµ?â1?6KGÂ\qí\x0004¿!½IÒ[&Ùh'ÿÞ\x0019
\x0013·
sª,(ÍôÒ4~Z|õdu¶\x001f¼\x001bî\x0001<°ÏÏ]«w\x0008V ÿ1\x000eúÝÆl7nÜ(,Gà}>KörxV8Tªº6ÔUùß!²vRG\x0011®\x0017
¶_
Ã2\x000c	¡²!²²}ý)^\x0002\x0008\x0007óö\x001fCØ«t>KÑË\x000e\x001a©+G2ÚHeRÙFêdïÃÜÏ\x001aÇ®ØW·z\x001dÁK©ÞC !!uå\x0008V«\x0004i®Áþ&öÐÛo¨cg?ßøùÌñQZ[DjÛ¢ø6]{\x0014Ã^ºz\x0014Q\x0017pYãØmQ½:û\x0004úëD\x0011ÖdíMÒy(\x0001Y/¶\x001ez:±tá,ÒmG>A\x001fö\x0005,=YvâÒIï\x001e¹lE\x0018Ãµ\x000eûLlÝ6'Øs\x001fù$_Ò³\x001fÓO	wÚÙ/`Í1¡\x0013é¾Ø¾ 7}¯õ¸`ÛíÏÄ·Ã>3á>õ|í£¬;Ö\x0011Ûù]Ï½\x000bC\à^¶õ}àÇúVxù½p#Ó¯\x0013º~6'
Z/V¼@\x0012[!BøK\x0000A/½Ø
J ß\x0015ähK?í\x000eÂÿ}Z4Ï[\x000cé®ÐÉ<´¹ZæÐÈÌg644Y\x001cÌÄÌÀL\x0002¤jë\Ä9\x0001¼&\x0004uÒÌÑÍeó&TsjqÑ'\x00053ÐÆ`	Þ`1Ð6Å\x0004\x0001%\x0018\x0011À¢c"7ß­>»»¥õÚü\x0007O³ç<RfínU\x0016/¢Ü\x0017ûàÙø:ÕÈÔíééï$ÕµÇ­n\x0019\x0012{¿-bI£27ë©ò@ÊÄ´\x00165tÌnéHÑÔ0¾N5jl­*<¥^¹pCSÛ7»«s¾¨Û¸qÔ5}ã*\x0015Gæ6ÏFã/oCI·¢Ä¼eã%ø$HuÔÄ E<ÎYÙÓ^O­p»ãé\x001atéÜwù¹?±ìhÕk)û/ùg¼ËI+ña³°\x0001×\x0000dl\x0001Xº\x001b`ùÇ\x001a~\x000bðÛ\x0000\x000bp{ê:<.\x0013|ßÞë\x0018ÿÙyÏÕ_åÏ,-,¸ÐÚPÛQïÖÃÒ\x001fóó¯ÿçÌ÷%\x0017Î1\x0005\x001ewºøüéSX©¾uã®ª½	Ýizôphuq û"p¯*\x0001÷òXÕÖöÖÆvÕaµ\x0015~t»gÕUû´à\x0014`¨ÛaÚg½Ý¬¿\©üõØBÕhÞVDÁz\x0004\x001c$J;â\x000e õGo£\x001d.EYùh\x0010\x001cÃ1ê[Ì×\x0008\x000f!ÇÙçPüÁ2´á\x001f\x0015hs^\x0005ÚòùOhýÌ(Ft\x001cñá(\x001ewÌLk×ÅsxETü\x0017(ìo%(ûH%Êù²\x001cm:\Þ[_ÿ"ãÍ¶\x0019­\x001d³Z:~a\x000ejßiîHÔð,&îjä¸ZÕpL8Mb]{ò[
Ê\x001dÛÛ.~Ôª¼ýôÃ¶öë{\x0011*ßPqë_bcÃñó\x00027Ê4îF û=0^\x0018\x001f/¯\x0004¾@Ãò`¿\x0007l\x001a\x0000{bCàqº]1`Gô@X;,\x0000\x0016\x0007{Cz@\x001f\x001fèÙ#ÉÀ,\x0008òÉÞ2\x0018*\x0016\x001cÛJnÄ
7F¡ÔÏ\x0008Ï\x000e8t\x0013ünB`#6@Ô\x0005\x001c»ØJ$Vâd\x0005ÎVâb\x0001R+qA\x0019âj\x0005æä_sò°\x000eOL?\x00131«§"×æ%p\x0010æàXüÞ`Ø\x0013\x0017sH×óÓÎ\x0018Ü02\x0008~Ó_?\x000fiâ¾\x0017ÌÃm	R\x0008ÓÅ~°\x001dð> \x0007
p\x001eZ7"\x0010rãBmc\x0003­\x001d6E\x0004Ã²P\x001fõÙÓ\x0003ôs ÿh[L÷qQN"PàÀï\x0007¯O\x0005Ð>RøÏÌY=%¯X;ãâxòZ±â\x0005ôD\V¬ Íòý9Ò÷ó¸¡ÇÞ¹ô=sVÄýýrâ8\x0003ðµ}gûÎØ`\x000c¾;\x0003æý0&öÙæQÒð\x0008I\x0001ór0¨JP\x0004Ä1P\x0016p\x0012"%mHP+\x0005"\x0012©*Ô¦-¥iS\x0001U	äA\x001305/Cbª¡\x0002cc\x000fOg}·öìì?»{ö£êôifÿùgþÇü3»'¿Íâ¿{åñÖÛ	±¬	ïuâ°¦\x0011Z\x0013\x0004âÄ\x0013'\x0016H£5ÖïÇ8Z\x0006V¤X×F(a#ý%þwìv§§²R\x001a@­d\x0019`\x0012#}l<KÐ7\x001aãåYÜúøÝ]ýHü\x00143óDùtÏDsDëô§\x000c¶[¡À\x0004RPâ 8;(Jv@ÜÛdG,Üï3m1£§è¨dìü\x0014¶í²«Òedòó¨\x0004\x001bø¨Ï>K\x0017^\x0008Á>wô\x0019ctØñlÚfÐ6â\x000eã2FkÊ¶Ó)\x0003)9q*1Ð~J\x0008mDª\x0017~OrÖõÝQ²\x001d©OÑÓL½¹MØ\x0016éôFn"Y\x001fóÇ(\x001e³1Èg¦/ÎC\x000es>:Ï7\x0008î\x0005ÐÞ\x0003lëEæ©î\x000c\x000bgÇ\x0012ò\x0001ù¡È5D~vÂé\x0008õ@ë§.ï³(\x000fØ\x001d«kOÛÎ¼\x000b|ò!¶y_Ùü³þóûÎÚB×Cö¯
,\x000fz¹ÒÔ^
"óD>b{%ò\x000bõ«OU~,xÌ¼L³¿Ü¾êÁ(h±gY¯~õöJTÈ·\x0002¶/¨.WØÙÕ«W\x001d,§F{-Ùìy\x0015í
£=WÉ, ­5¬\x0016¸\x001a4s>Ùag½'w#_\x0017"ûØ»\x0005=_È×;;¢¹ò7ý¬¤$¨^
çõÀµ2ÙLÛÕ¯}.\x001bÌõB²Õ
±øÙ ôC~WO°\x0003\x0014PA\x0001Û2äÛðg¹eûü<ûi\x0013©­÷VdÛÈ	®ÖãÒZu·\x0018ëj­¦m@õ\x0018W ÊNéÚ¼´+{G$­ÌMÑtþ\x00036Ü§|Ä_Ìç|,\x0016\x00185¹`Ö÷Ës&÷ùGo¼ë\x0017p}e_ôÖÑ[\x0017[SÕãh+uµ,l\x000ed]EÕåyyÇXØj\x001d»xj¾]ëªEÆP\x001f\x0004ð±\x0014ÊØCøÃt<Kj?,Sé0ó4ºoÌ¼Bós1Tc\x0012ç\x000fk\x001bWÍEâÂà}òs~¨Ö´~û%Á\x001aÖ\x0007Ñ\x001ehò©ãhOXø<ù%<\x0006Q>Tkó{­/XCcÔ_\x0013>auËÖ@!7Æî\x0003\x000bÌ\x0016_³\x001eæ¦6$ä\x0019Ë?V\x000fzgO\x0012ø!Ø\x0003l
EVL\x0019ÔÃ×µ\x001d¬°óþpqò}À~\x001bd#2^Ï\x0003o¿¹ÒÓNÑ"ë\x0008I\x0002 \x0010'N4éû\x000eIfö\x0006C\x001b\x001a\x001cóÆYËÓ\x0000FÀ\x0013\x0008enó,AXlE\x0008\x000b\x0005Ècó(\x000f¥\x0000<îêÒ]À!Ë\x001f¡ãÃ\x0013\x0001FPf§ä¥:ÌgqáÌSHÕ2W@é3<Îõeæà1<Êâ¤²ô\x0004ééÝ»6½ÞN.¼ÔØüÑOnÝ~ÿõæÚõ%Á©Ëå¯µ´}ðüí¶_6\x0006gÏù&8uÎµæ\x0019\x001bnµìùÙíÀò¦àMÁé\x000f³,j
ÎzðZ[~éµ§¶5µ\x001cÝÑ\x001e¸øòéoö=3ü¨o	ì2x\x001fL<hÛ8øó>ï]\x001dÿqÕ\x0019¿Dfíýá¹Å¡©Ó\x001d\x00003Sù^\x0002Àªâ¼Âúº7\x001a\x001bÈ§Ç«­ß}°øýÿ\x001e²ð­Ï¼É¶Ú`ö:eU\x0000kv\x0000¬ß	°aW¨íèS6î
µ\x0015¿\x0000X½\x0016ìfz\x0010ª ±ò
û\x001d{\x001e>{æ_5ÁÛ7IÃ¥ºsÇ\x000e\óá¿>rðÀé£\x000e²¢²S¡±µ\x001dùäÒùºÿ\þêzÓ·7¤µüõÆ×÷ÕW§fÔWCúÇ¡èjý­`EEóí\x001f\x000cûúlzÆW' ³¾Úyé¤5ãü1«ë\x0007 ëøÉKoÜS\x0015\x0008®¡­mã¶Õ¹Û}ð\x001a½6\x0011HÜJ¤¥ïi¿¬!?úÃ\x0017dÛîs¤ò;È0ØGÇÿDÙOÀöGbýî?HÞ\x001bgÉ³¿ÿ¼ø»:òÂo.-+>%3ö\x0013©S×,tMø3µý\x001e±\x001d"Ó~[K¶¼[Gªö^ Uo^$[\x001aÈ÷×^¿³¸üÛ;-h\x000eÎäkÃ%!fÜ
>8íj ¿ør`â¤+ÅW\x0002y¯\x0004î{­uÙ¦Æ}´NÏnon9E©ù9!\x0017Ö|ôÉ\x001eßá\x001ez´ EMºIúQ²(\x001e\x0013nãÜ}¼2\x0010FO\x000f Lp&ÀÓ£=ðêQðÓÉ£àåI#£¼î+GÂæü\X=*\x001b\x000fî\x0007åúÁ²Á÷\x001e²o+dBYN_ÔÇ	m\x0016ð89á»)Ê_\x0001Ë]Äz±õ\x0012ö^Dê!	Q"±\x0007$õ\x0000G7pöä\x0008Hé&©\x0011àê&n\x000c´\x0008áß¹F`ï_EAÉ´ÞÃ^ËÿÞ{Xöy Í¯|ßæ9\x0012`	½7ç\x000fíò»iJÏßM¯Lßq#áyÿ0X3Ö\x0003Ëé=_>¨oç½¿B~¦í#Yn\x0018Oß²Ozwo!ÛßÍCè»gz¦\x000b*Æçt¼C_J\x000eFvä`[áp¨ÈóÁ¹°4\x0003\x00059\x000f+¨|¡7\x0003Ók\x000f½\x0003õ¾'î\x0015Ï|çÒ¦Wß5±x§¤Ljõ^¾âÈi'Î{åËåÔüßýä¸cûhàÞ¼Yu.ã?íÏcum¤o'ô
"\x0010'N8±ÀYJl±¾\x0007ãà$L ÖX×Gèàª$RoÔ¯þc ×kÿã²dqÏL$7#3Cù¼\x001f¢~oøÉëw7ÎH}ïlÎ"±'\x000flPâI)N(Nv@1mh+S¬ )ðÏ\x000cEìÎ¼"Ñ\x001a]N.û&û8Ân\x0003\x000fõÙKñYºÚ\x000eÂr/?ôerh?FI¥¸8Ü:2l\x000cÓÅôÙ~jØ~6\x000e&\x0016þ9öûç¥êøbÆ?ÏF±É\x001b£g«»þCÏÏhå\x000eËK´÷¡;~É³Ñ^t±yFëèùc6oò¸|wù t³­9û\x0016üì+2^\x001fC¥oÑÚá×åï"ÞÈ6¯Ó¹¶ \x001e½8±uY_Uz\,øø»\x0017y\x0016Ýcªý\x0010Ù\x0013ÌÃìöK´×fö\x0005Ë§=mÄöGT\x001f>M½<\x0018í1Z«"qt
,/ÚóqþòÕsçy\x0010¬­×¹®Á=`äÆ\x0007½;CÏ/\x0014Ý\x000b¨\x001f\x0006÷
¿OF5¬ç£¨&uï.$NáÝø"ª%½3£jEñ#~ðç\x000b=ã8õÎ°\x0004õ¦·'h-Ðv mÿòè\x00008_á3k³)JKYÇÊ<P·Î\x000b%\x0019©\x0010«#\x001cG.õ;ßN±[JAø¹À®\x0006u!ºþ}r+Yáµ>\x001b9ç
ÔM\x000bTu·R¶õÄ\x0018\x0017m]\x001dýê¼´Ö\x0013ãÜäÜ´\x001b\x0007F%ÿxbe"õõ~Ú\x000f]lÚqÍ³ >e.oÇoÃ)àú\x0005Ì/©æÛµ:\x0005Èú¬>¶®¨ÏûÖ\x0014¶~A_)Ï~^GÒÊx]¿¤íkÆìM»ZOo¾ÊW»±=>\x0016¸-TúöP¿ÐÎ uÉ\x0015\x001dTWÑSäá1VO\x0019÷3ëûlØu\x0019ýBI;\x000f³o\x0018\x0003¦ÄùÆÇÈc9`Ç0ßT¹äâ,äý@s>~ÞW>¯~f-ßÌz\x001aßx{X\x000e$$WüHüØa>ýÕä\x0016Ë=f\x0017«g®\x000e4{Õ\x0005s	K/\x0017¢*c:>hd||È\x0019.²þßöäb³Âá\x0012/Ô>ça¾
<pv\x001dóÀ|#h=°êÈ¯\x0012rÚ3Z$\x0013\x001a\x00198q¢«HÑ¬Ñ^áN»ó¡5OÙ¦\x0001á	\x0001enó,AXlE\x001c\x000bM ëÍ§LI\x0006\x0002°À­¥4ÜÎwÑïtú§À@¿¡y¥\x001cóÃz"æ±¤jPbÿ²_.PM\x001di\x0000þC\x0012 ¼A@\x0004B\x0010êVX-¶"Z«à[\x0011PÐ¶ºÚS×\x001eQ|ÔÚú@eë\x0003´»ÝÕn×µ»«nµ¾­¢v«íñµR
(ÈÓG\x0015Ñ"\x0015\x0002!÷Ù¹ÈÍdnH {JÎùÎÌýgæÿÿûÿÿÌÜLä1Á\x000cÆwÀ¸\x000eÇñøb@åßÿì#Ê·55_ÛÞ¨*ÞÔ¤>;«MZªb³\x000e2ì½,\x0015»7IÉÆ%7²±3êÕã741ûö3ÌwUlöt,Çc±ÉJv¬D%\x001bT«Ù úæ©ÚTöËéÅ±\x0017F¦Â	H0\x0013¾\x0019¸cwRòÏ\x001b¡7hâ.­C1«/ëû¬-§T¸|Û\x0002Ä`ßGãÓ}Ç¹ã¯R>@?VT\x0015ÏÛW\x0010ðÎ±[Aiÿ*P¸¥eYCê\x001ae;ÛXºC\x0018n|ù'mýÛ0Û\x0001Ò?Q9{GTUÜDê\x0006ôèÁOõUÿ-ºöý×_\x0017;[tþìéÂógs\x000bÏ9}ýâÎç_Ì»WUòS}]M³JU\x0018¶	!ÌÃU÷J&ÙÝÊ\x0003\x0017céE\÷pÔæýy
õ)>·lÝoý\x0000·ò­Z¹ý£{åUcÞ7\x0010u³,t-Ó±^Í¬ÈbI5ì\x0004\5ìÆçQ&\x0002uÈfÎ~4fW\x001eÊ8T6ä\C\x000bä¹È\x001dàñcZ"\x00089ü7\x0017¢ù\x0007+Ðú/ËQæþr´öí+hý	dÃ?k\x0006.'Ý²K(qO\x0011zo_	ú`O\x0019Zõ\x001bhåÞ
ôÁÖ;oÕµLÞØ\x0012ÌÕ\x000e¯>L!EÉÆO}ÌyÈD¼¯\x001e2¼ZýRTµzÐÐjuHìýæeUûp­ä4ª
qÝ\x0016ý	¡²Ä?ïXéjm-ÁG\x0017¸Úp\x0013@7æéñÁøõÐmÈ1¾8o>Z¸¾\\x000b÷ì­mùk|µÏ£=\x001cáý!\x001dý\x001bØ<¼?l²<\x000fÌ H\x000fÃ½!Íß\x0003fõ}>\x001dÁí8/g\x0008±¶ÆV\x000eÂ±W`¼06Ðþ\x0013=C¬º\x0001ñSBba¤\x0016ÂÚ\x0002Øt\x0001[\x000b 3\x0013».`o&\x000eÀ±\x00138u\x0002g!DÂ¸«\x0019\x0018»=0}´wî\êî{ÉÜ;Lww9ØÀ\x0000OX\x0013Þ¯õ^Ú\x001a=À"÷Ð\x0016|\x000fm\x000c¥\x00140§\x0017¾Ü!M{î¿íqíDo\x0017\x0018í÷\x0015ÚîÑn\x0005w_+¬D0ÊÝ\x0011*ZýÎÆ1°ÄýÌéÊ\x001a\x001a\x000c+\x0006ûÃï¼Zïbò>~\x0003Ç"Å¯\x0017êe\x000fÁRñïî®\x0011Sàêû&åÎ0c÷ÕópÏtõNq\x0011+4ÈîyÅvÄ\x0008.ü¿ÃìÙîyW×>ýÚòöÿöëµëïÖÝ[#Hfåð) \x001ezèáYãü\x001ev÷]Ù\x0003\x001d·\x001cdÝÝõÑe°rF"¿ÇO§N|×®öÁVLÅKKGsÌóÇ:³Ö\x0014M\x001dçûÑ\x0019ä:RGgõ³6ÇT:\x001b\x0003¬¥\x0010å`±a<ÚË´º~+BrÝ\x001a\x0018ãëäÏÑ[£\x001b#9ßÂídÐOb\x0005¾Øg?×ÊE¼¾Vî'ÒöEírÝ³n¼7n\x0008)2!æv¤?îñÕù%Ò÷C¡}æråf¦/Î\x0002cBrS|îê;;±¦«y íò!çtÖÞËT½ÆâKÓg^Sâb^SãdÝÎÌçövoøñö¾Ð\x0017køsø:ý ýÌÐCÙ¯´}L\x001b§Ù78§Dí¾Ðú´w\x0013²MóÏAÒ\x0016Í&¹Vï¬¥ùÔ}ïDý@_§\x0010¦äÌ\x001f-§Ær&£êé
ß´Z\x0013¨Ccq4È%\x0019G¾O=Z­>	Ö%Ï®PL\x000cb
ÚûZà¾\x0013·Ð{PçêýÕQ
PcFî-\x0001_:Ú\x001büw4¶Ç¨ïH©\x000fÚÞ\x0017Ê©Ðþ\x0012<·äÌ©±:1­\x0011ÝByëjKè\x001d:ð6Næ\x0016[Ò_c¹4;ò|"kZ`osß±\x0019þÎPµÜ\x0017®/òât®õií·Óö\!\x001d\x0011Ü×d÷ý\µï0P\x000c\x0010!\x0001x\x0003÷Ã%mÏ¦ð
EÆé\x000eÃñy\x0019ÛÊ]ä'FE¡NêÂ.Íù\x0003Û	qnþ!Ä\x0005û¡.j\x000c×jëÂ\\x0008qÜ1Æ]<\x0018¯\x000f³"ì
ûdkÊ|\x001dÔ÷ââC!è\x0013²\x0008ÊÚp­Ü\x001e²o¬\x0015òÍÀWm\x001eZ¶\x0013®Å@.i\x001f'çGPdáÄà<	aô²^H}?\x001dÙä´µü8µÊ$¼9Úq²%û\x0011öµ\x0006º)¶"y:èÐû¤
R\x0016AÑ¥gCkRFØÓÓ#Ñ/§ù£ç7?\x000eRº\x000f¤M.2¦´µ|;z~Kõý5
å]\x000cÞ\x0017)1ÐKê2¨\x000b©qû´\
úb$\x0006uIÖ/á\x001bÙ7VãBµFË§\x001f%ßBµ¥o#ïJ«\x001b>Pôsÿs»òS8H¡t±ö\x001b ]ÿ{@¯¥ù@Á\x0012\x0005DÖTÊ\x0014\x001adg	|ï"È\x001aaÏzèÁ2ÈâXÁX¦>&a\x000fØÌt@ª\x000b´2Ó\x0004f8\x001b'¥\x0003M$ÇôNÈc=ÀP;©Úçi\x00148ù«x¿5@
@¼#9á5<¦\x0008áHg²If2`\x0019§0ÎL\x0012\x0008âqL&\x000f{)(ãì[\x000b¶«ÔÅ9ª\x0005
êµkOO°lm¦ýl}5YÉÆMW²c\x0016(Õ\x0019û\x0018¦ôßj¶rE\x0013¤dã\x0013ìk¸å¥dÓV54\x001fÚÆ6n-­;1úBt*\x001cp\x0012Rõ8\x0005ÉX¾âÅÏ=Î¯n\x0018}u#\x001a=n÷\x000bcp>c\x001d(ØÕXw\x0007éØÐ0øè\x0004YBä(IA
÷ÍóÒyXîÿ\­\[\x0015÷ö*ÿù\x0007Ê\x0002\x0003\x0016ÿÍ\x001e~\x0003°l'ÀÒ\x001d¦£ñ\x0017%\x001fÃ¤¿\x001eJ¹[s¯®i@ÊG-\x000fîV>¸}£ ìæõ¼ë·óKîV\x0014ßª­¹S§l¨minn@\x001a¦\x0011iÔõèféµ{\x0007÷î9°úÛo\x0017\x0006ß,r
ª,²¨,ö--|¯¡añ-Õ)k\x0013\oæç­|+=nç[¹_\x0001ïâËöóëëS62-+×3Ì\x0015MÌÂ¾W4r8Ï¤/0\x0010xgiÜÒ\x000f£\A¾,GËóPãWH\x0006Gñø1-G\x0010øBkóÐlnÎr´î2´&ù"\x001a):Æg\x000eXÀ\x0019äµñ*zóÓËhIö%ôÖ;ÐÄ]74Ë\x000f¡»ËZÞ]\­1½Kjl\x0019ëÇ,Rp]qíÔÇìGLôÈ\x001aõËQÕêÁC«Õ!±÷ãWÕ«~Ô¨*ÁõZ¸½¹Yóð»þÃàí\x000en"aza<1Þ\x0018¹¨íÛÇ¯g\x001cçÇ\x0017ã£{\x000e` ­\x0014Â\x001de\x0010ëé\x000c)þ\x001e07¸\x000fÌëï\x0003o\x0004{Á\x0014ß^\x0010fo\x0003~x®·`©\x0018föõ?\x000c{\x0001¶F\x000fMQý-ÊfÌá\x0003 kh0,\x001f¤¹A½!­¯G+³Cfc^\x000fô\x0014E/r±@±¨5¶ByÐÕ½+#¶è\x0019aÕ\x0002§´\x000bX[\x0018NbÛ\x0005dÿc¿\£ºÊ\x0000üïænÍco&!ûÊ@$\x0010 ÙM\x0002TëPHS <äÕ6<µRQ\x0001)\x0005\x000bÒÊc\x000c´\x0004ú@tÔ2v´:£¥ÐÖ¾Vë0êT
L)Xä5P,:%IÝ5Çswï&÷û»lXÚÙùæ¼þsÎÿ:çÜ\x001d\x0000\x0019Q\x0019\x0003Y\x0003 ;J,Q"ò0àäDIn\x0014ðÞâ|J\x0011ÅÎÜI'Bo^.nK:4\x0015Á#µe°kÒHØ9qàïRè\x001dj¡å÷Ç
o°\x0006îûûBw~i!,*-ö\¨\x0013Íô-5\x0006î}ç
ö´ä\x0007É\x001fn\x0019\x001e\x0018i§ú\x0008ø!\x001e>|ÙÒ@}0Vò-è\x0012õû·úBòËÔB\x000b|)]èûÖHtÃ%#\x0003éìJoJ¸·*ÑoL¼Þ\x0013Ëôé)®^q3â¼ö9uôh)\x0014_ø_î®ÖÔDû{ \x000cyó­4£(½fÉßÍü\x0013\.C¢s%¯Ðk@$IÜhò#i¾\x0003à8þCÌø\x001cI\x0012\x001fò óm{åªÙ6bÑJw)±*`Û\x0010é\x001c\´ý\x0003Õ¶HöÔpëÆÃ'Ø<åü!\x0014\x001b¥*Í\x0004\x0013²ÌÐ\x0001
Y\x001c2Ív½>\x0013©K¥\¯WÍ\x000b¶ëc<YFf\x0002­7§B©Ñ\x0008\x000eªs1Å©,
Á­Ú\x0001\x0014sB2ù\x0014M±ÈLÉCTÀÎÕ\x0013ªK{æJ±0¨ubu.ã\x0017fíhõTçhÆ~ÌÚ\x0014OÙu±µ±\x0018Ç[h|©Ô§O8=±5â\x0019ëXòKOWe»â0àg¦ïº­CäwjÝcï\x001aÕù5¨ç°òÞ¬¼Þ\x001cL\x000f¥}J±:f+f3¶¯Þ½ªº¿xë z³rèýèÊÝ\x0001Í\x00136ï°8òrOi\x001f7§xvJuN\5qVú\x0011\x001b\x000fßl?Oç''³?{Æx¹¥ÙwÎs§Y;Ìh.èÙ©w\x0016yùÅ®\x0017&orûÖÖñ-¦Þ9è<1%«\x000fzî\x0018_£ç\x0013\x0017½x²stï\x000cNõâ§ë\x001f\x001dýÑµØ=øòò\x000fØ}À»·xy\x001ejKßöL\x0001Þ[R\x000cÿü\x0003ÚVIØ\x0019}§×:áÏÍ6°\x0019M¨_
\x0004¿kRýÇÓ[BàS+¨ej:[*ëcRi×W\x0015\x000b¤­Zô¨Êé9VM©Êñ\x001e§%C¨ÏòNøÂr[J-Õ·\x0006\x0010Ý\x0010Ýk\x0011\x0019L/
²/<,b\)ÇÎsëÈéÍÁê\x001e¬_P×Q}CrRÝÔ[FÕ'ôa}ì¾1¦dë¼>vL?·<ÏÍ\x0019ó(eX9E\x001f¦¿ä:\x0002¹\x001dè\x000fÅZP·ë\x0014súæ³²&íÜ:¶mRË«Ö\x0014´õ:d\x001dl}¥-¼ý<¬<¦\x00132Ù¬ÚÑÕõn\x001fgHüè\x0011´zhìgãè£)9{×1ú²6ðò\x0002ëÇbÌÚÅ^µ?O_d.Ï>T\x001dÝ0û5r:mô\x0000õ\x0019\x001b\x0017,ÿx9 \x0019ã­Åì_OK«a`ïms¡\x0008\x001f¬	}\x00178\x0014ß\x0003Õ\x000eÕ÷VÆ\x000e\x001ek4ú}\x0019®^\x0012\x0017Ä	µ@$ñ@(#\x0006çUbW~\x000e\x0016Ã/7Ï\x0019Ul¸'\x0007 \x0012\x0016|\x0016a~Ì£Ì\x0003_cú¾\x00050*\x001d É\x0012ìÃ"õS¦e\x0003T¦Ñÿ2ôV\x0018o\x0006e	C¶»£`\x0006Âô(pW\x000c4!Ü)ÓHýÒdÏÉ\ò
w\ûï;»{|íÛ:>ûË¶Îî×Ûã½´¯ÇwxY§éNÿ%ævú§<ÚíÿùK>ÿÇÏûü\x0017·uû]Üéoßé¿sA§¿iSïg»½=§>÷é«ëëÿ1j!¼\x000c÷À«p¯×`\x001e¼\x0000\x001bª+<üHçäw·Æ=3~]19\x0003`JV?3\x0001î 1ê(J}ÿüå¿<:ô\x0003g­øÝ©aK÷¾Yºòë+¿òÝ[mo;zå7Þ_÷\x0003gmßyñ\ùÔ¼]d|p\x0001Öî\x0005xp_l¬ý1À§áîý¯Í8yñÃû{®^_\x0017ñz;Hw÷õ\x0000Þ\x000eâ÷v\x0012Bû¯¹tñ£íþ¸»býù+6åà_óºTòhûÇÕ;O^s·\x001c¿ÒÐzöÓ¦§>êZvÿåËÓòÎ\x001dM)8ÌXxþ¸\x000bÇ9í\x000b§«¶øüë¶z}ë·û}\x001bÎûo7¼B\x000cð2½\x000eRZ	ÞÓ[¾é\x00152ÿ§GÈêß@~8÷od\x0012¼HÇ^Rp@Ñ\x001fHîÆ#dáÓd\x000beë3§ÈC£ß"¥\x001aÙH¡óÆþ=õ\x001eùö·Ér×^RÐpÜÿ/òÐÁÓdÛ¯Ú¼\x001b7îX4ÿº·qÞgÿk¤9\x00125\x000bº\x0002yÕ8»Ã?ù«Þú	½5õ\x001fzGÍ¾Ú³¬¥³ûÈî®î­]Ý'ì%§fíyr].½±\x0003\x0018äQn¡\x0014\x001aß9\x000eJ1Å%I\x0006\x001f\x0007MÆIÛ\x0015©\x0002xD3L\x001d"Ââò!°¾¦\x0004¶xÊa{ýphi¨Ç'VBë¤Ðz[Ç'UÂV:¾|¸\x0015Æd¤Â¸¬tøn\x0013vÝV	QÙ\x001d\x0013*âJhÍMãÁ
\x001b4\x000f-ûJò\x0003åÍÈâÒBXTZ\x0000wYE¨J7\x0005|ì\x0004~<J(6
½jû~\x001b1A¤\x000c\x0002Â a\x001a ©q$m\x0000¤\x000f\x0000s\x000cdÄHf\x000cdÅHv\x0014XbDÄ0hÉÜ(ÈS µ¥·¸@¾Ïï[là{Vn2ÂíùY°¢Ò\x000eÛêÃ.úVIïU<ß¡Í·\x000eoUÚ`â\x001dZ"Ýù´eÏ\x0005%\x001dÊ\x0004càÛFïÞ\x001fL_H§ïòÒò¢À;.½Û;ãð6K>hi\x0018\x0001\x000f\x001bJßbkÀö{·8ôþÍ°æ@MfZNÎH(Ït.¤{;Ò·*ÑoL<ß\x0014Ëôé)®^q3â¼öYpI7Ô\x0017óg\x0014ECÁó\x0007Ò\x0012íç"nÞlJ´/¿ÈR¼\x0012{®ÙCè¹&$I$7\x0012ë»$=Ñof\x0012>\x00193IJ¢s$I|\x0010ÊÁå\x001b¤ï_<j¥»ð(R`EÊÁ\x0000[;ý¢Õ­\x0008©ÇË>-l¬ûa±V¯!\x0014;ý¬IO	YfhÈÉÊzE½¯Ì
qúÌþ±àxP^µNhN½\x001eYK?cÍ©PBõuP½
AR\x001de¨^\x000cýc}ýþ1©í¢8h_\x001e--\x000c"Ò§\x0007&Ï[CÉËBI\x001fªËÐ¯§JgÖoçgG \x0003O\x001fQG6ZcõU¤sÃÙ\x0013éÚzöéÅh ¶E³^¬¶òæÅKïhb\x0016XF¢·ÿ9\x0014«¡ÿL³çF¯­/\x0006íYÓô)çröÔY¥,v\x000féèÊé³û+ï¸bl?æ\x000eDýÃêÆÛK9ÎÚÌYWãGÅZØ\^\x001cõ|ÈÆKµ~\x0004kbñÇê\Âìä­Ø\x0019mì#]·\x0018Ñ\x000f];LÙz¸ø`¹®Ô\x0011Ó	µ\x001f[\x0017±\x0005ó¿^c9\x0010ÑYÓÑC/G°õ±óÁË÷pç#\ÑËpùÍÙS/·°ûI7¿1ì~ÁæcùÙéTø\x00013âcv_®N3æ\x0003²\x000e÷þää R
FØ?±\x0010ÎnpBÛ*\x0007Å\x000em«åR¦¶Û×ØáÌJ'4;¥7q¿t\x0008~ÓWP;Ü)\x0014AM-ÛFd¢\x0019¯¡{Ý
\x0006xcu±@ÚÆÞ\x0013Õ¹=Ç«szUÞ@\x0019¬\x0007ú(´Oú|ïWçö1âá-.ÓÔô\x0014¨\x0006­n\x000e<}BýléI	âÑ«+e±6;¯¯\x0014Ôãnµôú°õUc­&Ú'ãVàáô»¾@]PË²},nÅ¸jA=\x001fcuÓ[ÕSµ®B\x000få\x001euB\x0010\x000fR²\x0004dMrÝ¤ã\x0005ê&	ãÈ«æ!¥j\x001d\x00133®°¤díªcõÁä\x0014°zkì1á¾amàÙùG©'»/æ\x0003lpûköBöÇbå
W\x000f$®¨\x000f9ùùÍiMµ\x0015³\x0019ñg\x001dO&ÿ5>Áb«ÌáHlø?ûe\x0002\x0015åu\x0005à;\x000b\x000cÀ\x0000²	ÌL\x00001\x00124.,u5\x001aDÅMâ\x0012m«m²¸Å%Ñ¸4*
jQR\x001bÅ\x0013£ÕÆ\x001dÄhI\x0013OOêÆ¨Xp\x0003Q«¶\x00111Ê0Ì¾¾\x0016øÿ7ï\x001ff`\x0014Û3sÎwÞvß}÷Ýwß»ÿðí²7¾õùæÒÞ\x0002ßVæÚüAp#õ]` (õrÃ7\x0003wì£âÕ.ÊgHê\x0008\x0014uH*òG8ë#pâ¤µ\x0008<\x0010\x0004«£âóy\x0011V¯¾ó^(Ý\x001b¬´VJBÔ\x0019[@R3#`úFx\x0002tÅ\x001fú±î¦>/\\x0018Ëb\x000c&\x001aËÈñ\x001b\x0018á
0ØÃ(Ãôñ¤3Ê\x0006F² Û\x000cv0¨\x0019n'ÃX¥fÇ9 AÑ^}úÌ
ÏÐÕõjMyZs\x0019e\x0005õ
×V×7|Y§[ñ[µ~ÖÄ:ýøwëô©9\x001aÝþ"þß%:}ÍN­îJnþÐ\x0002µný\x0006í©uõÒû\x001eg¯ï}5pªÛIq\x001a\x0014C:À»p´4ÜþÇ!]+zYþ¸\x0014
^2piÄ |Û±ÀíaòÀvI3s\x0002¦ýåJøüòÑ«\x000e\x0006MÚzZùÁ;\x00113÷]é2aqþ[qÓ?úeJÞ¾á3\x000eV¾:ã`UDÖ±[¯õßþ·\x0000áÜÏ\x0000²ò\x0001fo62§À\x000e6dáVaÂ3þyçî&ÿpýÎ\x000fÕ÷ÿU[_{\x001fé\x001e?@úúZ¤S×¢\x001f=xv©ªêæc§6uÏÙ\x0019\x0003\x0019x½ìÍ\x0010Wä>íÛªKT?E-©¨ZY^óæºK\x000f{åXYVófâµJe`µJäW]*\x0008¨V	\x001b¹uAØ¾ò\x001c\x0004_þÇ¯\x001f=N[¦ÕÏûT¯[8ýnÏwH\x0006ðûTÁ¥h#\x0012
ÛzúW4©°\x0014ÍÝRfw>Bà0\x001e/â\x0012T|ªÐ¤ý×Ñò\x00037Ð÷Ï¢âb$¤ÉÚJßïQ×ùgQ_\x0001òE\x0008úïDo\x0014V ùþ\x001d\x0017ë\x0017Î»p|ê\x0013]|JýÓ¡©uú\x0016Iy¢ ïÓç®¶[¿{ÚèÌÚúm\x001bê5WrÕK\x001bqÜf>»'4(ÐÛ\x000f¿Ü\x0001ø\x000b \x0010\x0013	Å(1
'/\x00049ãs|\x0006Á`,;\x0010'sÑ¡íaÊ«\x001d »\x0012VÆuuý»\x0018Èégd×`u_.k0ÌøZ,ûqtGXY×ÿu\x000b¹Öb^gYL'ÈÃä\x0000ð\x001fL\x000cói\x001c\x001e\x0000©
?èý\x001b&\x0012\x0018ümíl{àeD`ü	^0Â6@ô\x0010?'\\x001c«\x0003´\x0002·VâÞ\x0002¤-¤]\x000bðh\x0001vâÕ\x0002dÖ\x0010pñn\x0001>vàËÂ\x001f\x0013$øßÎÅr0æ3H71$\x0006û@fÂ;|Ää/ä¡~Æ\Ää¹Y¡7Þ&\x001b\x0019×frjHh°±íEçø\x00100æø(©+¤c39}cücú\x000eXÜ+\x001cÞï\x0012bØ;'ò_Ü\x0017â¼òü%\x0015[`î\x0001óÊ¼Aöäª!Ï8:·x%&Ïôe¤Ã¹ónB\x0019óbþý\»u\x0013Ü¨tokÿ¶\x0006Æ~·\x0001\x0003míKçÏ¾\x001fsä5\x000fÛ4ö|s\x0011~\x00108qâÄÉDñsÛçN'üøïE¶\x0011'#à\x0000<XyXë\x001eÜ¯°\x0003^ÅL\x0010«Nö\x0007Qäqr¾5}|ã|sZ\x000bÍ~köØb\x001bÍ\x000f4¿zÛ£½>°G?ÛV¥P\x0008½¤®Ð×C
}<Ü1R#íê¿Àu3æv\x001f³<9fo\x001ecÍgëæ´u\x001a×7µ
¶yJ!J"\x00069þ'«Àv+p)\x0007#æ:S6Ö6	3\x001ea¼xñÔµ\x0015_
J­
}f\x001býZ¨¿9[ùJ[çÛê¯ÖêµWÖ^_9Ò·­=\x0013¾32×i¶:*Ol±ÙZL±Ç<ÁxoBØwEÐt_ä¬ý\x000e°ß\x0007vÛüÈÉ~ Þ\x0018à®GêWPÚ´w©\x0011¥\x001eR7i£o¢Ïb\x001c,÷¦ ú-Æ\x0004\{ùögá\x0013ßhgÀñszÈ}PôÒÖæñÍá[v.<ëYÄ\x0015Íß|gÁs\x0006Ô¥Å7ëüÉxä\x0001\x001a¼w}æ|çIê¦øzD\x000cpl"b\x000fjLÙzÆ<û¦\x0011Û×äÛÂwøâzWiz¬ÙÜùÞ\x0014É3äõ-;Ö¬íâOkwï\9ú:Ý4{¬ùoÏVcXÛ\x0016È{ËwmÙ\x0003¹.\x0019wÞ)J\x000f¨©¬PøgF\x0008A¨\x0010¸=_\x000eùü@\x0002xr\x001bþd\x0002ã·p\x000f1@\x0008Ëh\F\x0013m¦4c\x0018\x0017YöDSæ÷ÀëEceÉÅ¨¬L{)Ê§A\x0015åÝ zAf¬GÉ\x000cíÒÆ¶·öB7ªèæ}ý\x001d%S\x0003Ý!\x0012¸¶pÖµbO£,»ÄÄ`×
éýÍµ\x001bûXk°iv\x0015yê\x001cÖ>c]pi"Ur`Ëú\x001bçMu1W$ÐÏÑ%æÚ\x0010CÇYOlã<M1D?mÿ\\x001c.ãÄ¦º\x0019ó¾Ìã.Üþ8b.gE,«/Ðk!+¶\3b\x000f{.{mKsºHF}Ä~âxô{±ð\x0017a_,ÙGó\x0003a'>r#C±æ3Ò÷s],e9gLYo?´2f'¡ã\x0007ZlRl¡é¤»GZü1O\x0013}4ã{Î\x001aÔxãó3Ï\ä³u\x001e\x0016>¥Å"±wFÆ§\x00159Ö
çø´\x000ep}¶¼ñ[ <³é[ómI~3ÀÅìW`tùw\x0012å3$u\x0004í\x000b+\x0000\x0002'N\x001cß\x000eäê¨Ø|ÄlûÌ5ÝW\x0008éÞÀa¼ÌH­x7ÕS)¤ðl'I62%½Ü\x0001:ã\x001bàal¡0\x00163\x0004wÄr¡ø½ëî\x00060ÊÓ86ÚË(+dð2VH´\x0011V\x0018n'ÃxH°¡Ø'c
{ûÞ®ùõO÷®RkNçª5ó0ëÕrÍõ
W¾hÐ^-ÔêJs\x001btE+4ú/ÿ¤Õ>¨Óß;ªÓ×\x001c×ëë>×êÏ,Pk?O«Ñd¬>¢O85\x001f
Øü0j®â¬,\x001dB
\x0014\x0019HbøÇ·®ãªºþ¸ìé3+Pü±ìGý&Gô÷}\x000bï¿Ïém	\x0006ÓPO¡$}ÂÌÓ¾º\x00166ê÷û\x0003\x0003ÆÌ\x0013I\x00122\x0004¾i¸$ä\x0008U|»ãÄ=\x0015JÙÄUBå{ËÂ§ÿY\x0015=ãð­ð\x000f¿¹ÓuõI\x0007Jå¡«¾r\x0013ÍÛ"Ù\x0005\x0000ù\x0000YÙ\x0001æ\x0014ÐaÆ²7\x0019ä¼~éõýÍ×7?î{þÞèqGÆ\x000fÌÛ9${÷ÑÅK\x000eÌùÝî¯çôÙ°g`ÈÒmJÃ\x001cF?.¥\x000bE¾Eþ¡D\x0016²v¯{Ð\x0017E.'NµûPu/rãåG±\x001bË1eµ19e\x000f{ºz³µJ\x0018@àK%l_öwÑêê3ÔÚ)4èæ.jÐet>ÿ4\x001c\x000eá÷©\x0008S9ß©íÈsÞq´]æí¿gGc]\x00193ÈÁí°ã(`åE4µ¤\x0012­ZPÆ»\x001dA.\x0016rv ,FcÈÛõ0Öû\x0016!ßzî¼\x0016í¯DËw¨ê\x0016|p¶jlÒ\x0013m|ªZ?4µ®e¤Õé\x0013ëôñÒÅÆÝÕvM{ ¹V­Q1qºAû´|ùýÿê=ä\x0010ür+0J\x0011\x0017B(öyðÙ/÷à¨ª3»÷n²»É>BÞlv7Y\x0012 1!id\x0010â@JÀÊ[y¤­£el!\x0001\x0007\x0006Á¶\x0012Z\x0007tìCg\x0004aª\x000evJký£h¡¡å\x0011\x001b`Z-\x001d\x0015
T&ÙÀí9»÷fï=çÞ½»\x001b68»ß×w¾óï|ç|7\x0008ìÿ\x0012\x0003\x0007\x0019i°Ü\x000b\x001b« Ã[\x0002»\x001bKáé\x0019eÐ5½\x000c:Q}ç´Ùæír.NQïÏë'@{\x001b~X\x000bË\x000b³`yQ6¬\x0018¥¬òäÀJO6ÌÍ·A¹Ñ\x0000Näs§ÂÙà{Ç­\x0008ôçÿén1ú\x0004À\x0010|1Ä8\x001a#Æ(1Å9JÒ4\x001e%\x0016
X£ÀÆBGÇ\x001e\x0005\x0019\x0011"Éf"r\x0011\x000eñí¹]s±×°ýÕé©°¤0\x001b¶LñÀ.7ºP>ëS\x001eÂ9\x0008ëÚ^[\x000ckËÐZòPà½oÅï=*ç;2 Öjb^ï·\x000b¿û·Ú\x001fR¿ÃÈû}±­¦\x0018\x0011¼ì÷AãDx\x001cùà2?Ï=r±<÷­\x0014ý±Ì\x000533Óa|
\x0017ðÅ(\x00155¤oR|'ð½Å¹DK\x001a-9g$rµ¥sß\x0014Ì£üÅ)ê[ó³mÛfH´Oc%ûC©z\x001bÎfÉßíøKt\x000c:û\x0004Þ. ø\x0011 I$In\x0005CÐ%:w&QÁ'¹ìdnø¶`!èGì;bÿoRó9\x000eòÑJ'Â\x001a£µisò\x0018s"\x001dWZW­?V´Ø\x0016­íJ¾v¿òñ\D\x0011§\x0007o	¦¥ !Ý\x000c
¨^hÀ}z±^/K}òº(Û ÚÃuRÐMÊ\x00061Ay
\x000fNds\x0001\x0002.ôº¹ÄÒ	A\ò1BÎ%ËAX\x0011\x0016±ÄØdu%"S±þÇv¸u²ýè{p z¶\x001eZ¿Mm¤Ú<µýDº\x001eËF[¥Vl:«Oë:j:cµ_mÝxëÕr¾Zî\x0016;dñpÊî7y÷åwÉ\x0005Ä½"Ê>\x0008}#hsÈqòí¡éëwª¬!sê(òäÞd²a{WØ·\b?ÕG\x000cÝ¤¿Yý¬¹¤<ë-W:cr\x001f4aú)1BúEmïªòPëc	-~ñJóüþ°â±/Ú\x001cê92äwF®5rWî\x0010Ë¿JvÅ<\x001e\x0018wÝEî¶6c-Ú{B³C©\x001eön©Ì¡­Âz´uTß\x0015·GéX±Çº»ZÆqBY\x0016gLHÞ\x0007ù\x0018ásÖ~1Iy§h{ÃßúS9\x0003\x001c[\x000f\x0017ÛÐÓV\x0000çÖJ8\x0002}½í\x000eø`¡\x0013JRR!?d¾ÿ»x¼\x001e \x0007¨\x0015©áu\x0016\ÖGò\x001d\x001d.õpt\x0017ÎUÙ\x0007ÿ>É>Ð-rªÂ6Ð]ÊIA¤6*ÞJûåÃ¥é[*lºrd÷\x0014=a\x0013a\x001fÍ\x000e/\x0017 VÄ++½|h¿\x001ar}r¤\x000eêZÄ8«¤Í\x001dîöd@¥W¼¯V&;<Æ{)óYºir¤n/¹\x0006EW­B$uù>ÇP»\x000eubÛ\x0012u¼L'J\x0003¥n\x0008ÕQÇê£éêu²¹ÃöðD\x0018#ôÑÖ\x000eÑ!ÙH®M±ÜcØ>\x000cáóIûÉ}Ì!æ¾\x000cÙ\x000bá\x0010(¬Á\ð1¹_ê\x0019\x0019Â×dí¶\x000e¹7r/Tÿóq2ÆÈ1m4]´X§îAí\x001c"8»x5@hqHó\x000bi{ØÚ³§ÞWC¨½awb\x0007-ÞH{2bÈ±S
&8ñ}\x0007ôn\x000fÈ¾	)AÞùÅL}õÕOMî9\x001e\x0018Ê\x00045\x0005H$V,?\x0012øxÅåHRzîqqÑ\x0018Ý2;ÄR[t,!X¬Â¢\x0008Y¨\x0005\x0018+ûDp}F\x001a'\x0005½C&{Qû{\x000cæ!ªè\x0019ôî\x0015"ù;Í¨ßæÌ§0O\x0003-\x00110W{4r7»"d\x000e\x0006ù¯9]\x0007+wþ¬µýú×g_öÍ¾÷+úú7µöõoÝôUÿ_^ï?÷úààø|_\x001cñ
}è{Ë7ôÙaßÐ¥C¾¡ï÷
õ¾88ôácÿóu-¹6ÔÒtÕ×°è_¾\x0019_\x0011O=!Ì}oÓï¾<ï³Ò'ìmcÿlé¨8{`E_õñ\x000e¡é\x0003Ä\x001dÂì×\x001e|¿±Å]1{¬'µÙ]bjÊ/H¹Ó¤ÅeÅ®\x0007wÂ\x000f~Ý]·tk
ÌYo\x0003hú1Xíà\x0017ï;á\{äRIíöCvî6ãÔÇ^\x001e÷ÐÁóÅ\x001e½4±ëôg{þëí8y¹êáß/wàsÒÞwìÖm¯ò°á9u{À_>ú|õÏ~ã\x000bºù%=×þ\x000e÷Ýÿö\x0019ÏÞ¾öî>}ejåÞ#ÙðÈÓhîÞ m{\x0002¥¤\x000bÆÍû8Ó}Üðøú=0v÷Aãê?\,ÙúO+W\x001f»0áÉS_N~öÌUoçÙ¾)ÓÏÏÈú¸[óñ)ý0üMñãP}¡§dÕWýV_\x001bX¹}Ð·¡î£¡Éð&z£Þ\x0012y;P6½/Tïï\x0015¶\x001eº ìx­WØ2í=á\x00109	Ô÷;!ãþãÂÌ\x0006VÞ\x000cÚ\x0001{\x0004Ðo\x0013t«~+Ì:xQxüBÇ¯>ì[ÿPïåùúo4/ùfhN´,ýfè®û¾öÍþù`UÓç\x0003wï¸ÖÿÇg®÷÷<Ó?x¶kðÆÙæ¬Y:\x0016½Þ..ÉHãD\x0014@BN\x00075V#,peÂúJ7ì6\x0011º¦úÙÕX
¨½síz²a\x0002lì'äÃ¢lX^í/G+«<9°Ô	\x0019fðpz¿ïÎÈÈG ôçÿé\x0012>Ap#\x0004\x001fg\x000cq %N¤Æ1\x0006LQ`´(H\x0012\x0006¬Q`c¡cc×HF\x0004`¹LDøÞ8GA~5·9\x001fô:h° µ8\x001f:¼Å°\x001bå3Lgc|r\x0010Î(\x000fuxK`]¹\x0013ZÇå \x001cåÏC«<7ÞX;ÔX0N|ï\x0000 5ñ·U¹Ñ\x0000\x000bÝYðÓq(·ù}\x0011\x000f\x001fì"|ð\x0000ö\x0001%÷a¿4çZ¡Üd\x0018þþHt¬D[,³tw\x0016\x0015sÔhÉ7#_¬--û¦`\x001edî{	[ÿô6.÷Ýc©öe¬XÖ¬á\x0013íËä/¶\x001fEgß\x0015S"ãhÌS\x0002ºÓ\x0002$I$É­ÀÔ,Úo$A,k\x0004>Ñ±$~ä\x0014#\x0012+7n\x001d³fqùh\x0015<v¤¨Í£çQêZÖgÍv\x000fñÔ­$\x0017ÎHÖÉSËE7pPfÆt34Ô§ \x0001#kKÈ¤BÆÂÇÍ~=¡cÁ~I6¤N´ñ¼ii²ç \x0000ÙìTÁ­\x0003p!r\x0011vÔ¶!rÄ1ÜÇq=\x000baEXD\x0019«¼®MAVMÇ\x0018\x0003Û#Ú$ÙÛnDh³M´¦Wi
r,Ò=©í7Ò}Ú"\7\x0012»´ÚÎòQ<|\x0010o?E«/r´³ö\x000eØ\x0018}ñð\x0007¾\x0007v\x0008¼]þû\x0002Á{\x0013RÊúÉ»%»dòN¼R{\x0018Êú. t2Ä1´Ü#i\x000f)Gé'ÙÚaúp©\x000b·3Ì^}!úiPö\x0011¢¶X¶QúÃÎ²\x000fV<¨ê øz\x000eäþØ ùuÎagÇ\x0019\x0005{Uý\x0000t{hçM³¼jçÁ²UéÈ\x0018U»Ë´8UÒËò\x0005Í.ÝJç\x0019ÉRlRß)=\x001aõ³âå\x001fò\x001cÉ\x0018×òÐl#ã%ì\\x0018gÇ²ö¦ÐâI-æÂbq&JóYçJ»ÛÌ}B gî­ËnpBO[\x0001[ë@H¥¬Æ>iwÂ
\x000fÎ¶ýñ\x0010ø>®â\x0000¼¨QÊZ^\x0019,SÃêçÂûäm¼F5òÛT´æÑ6\x0017'ôTÙ\x0006ÏTf\x000ctO²\x000fÑ]!¯ÛDìBoå\x0018ß*,/.ÈÑ{A\x0007\x0010Ð©h\x000bÞ\x001b\x0017(¥ºWÞÇöÉÇÛ<{¦ÖOê`Í¥Í\x000bY\x000fë1ÈJC ¤Q++kUúäzü~£Éýý2ê:\x0003ð?Ã<Av\x0005%3\x000cJÜ 
u	3ãFâ\x0012d\x0011Ybk\S9uc\x0011R÷\x0008hªh\x0015M¤VcÓDãÖ½'ç¦­Öå DQ¬(êiÛ\x0011Ô ÌðäöÎò7wî{³\x0000ÅÃp¾ó¿÷ßå_îï}ÈlÛH?H\x001bV½î¯4½]?~]áw\x001dcÉ±Ìü¬áë¬Ï¼6>1Ôy\x0018Br0-hl1Â:Ú\x0018~L:Ò'!\x001dc;^Ì\x0007Z\x001ell±Rb&ó/jáÅDÚ\x0012ÈÌ»h>ù¶(yr4§/bõAÉ+?fZ\B1ÐìPë\x0001»5±±EYW;´u\x0017º\x0016.Ô6MOÛ_d
Rë±mÓÑrA«\x001fÆ~,××»\x0015÷ëLu ÔÎWCu¶ùþ7\x0017¨Lß\x0000-ß\x0006æçj«¾EWòU,¼\x0019y·\x0005!Ç\x0017\x0000N:i-^±HªnlºlOz½hôNL÷ê\x000fà\x000e\x0016¦8Éd\x0001Þu\x0007?3\x00082DHça|Oò\x0005Ä»¾·'À8\x001f³.Ã·tÌ[ø \x000bÇç
3P\x000eu©nBa\x000b$;A\x0013$º@\x0002ñ\x0016â\x0015X\x0006Ëyûö­ÈÕ£=oÝ7hÝ3¼¡ûÑ\x0010\x001as_?zÑ3ýº/\x000clå±&öáÑ&ö¾\x0011üüà8~?ÙÄÖíÔ7]û]0¹\x001di&!ý\x0005°üîË´ò\x0003/§ToG\x00177 ¿/C£Ëò^ÆYÆ/DñçV£wÎ-o\x001esfåó²ý×wæo:õ¬\x001fÆæíøWrÖæòq³?(\x001dU4ÿðõ~éëö`s%éK¥>«e²Ô\x000f%\x0010¿\x0010ÂæmUL,=óZÿÝ¾¸\x0018¼RóäCV|\x0013<ïpMÄúT?Ñn¹Z¯Ùå¶ê§ÚâËuC\x0017+2ñ³¡½\x000fùx.Ý)ÜRÜí Íß!Qþf¿bÜ×ÿì>ãäÕ´Cå*í®²n\x000bËjûÆ^ª\x001b\x001aýé)X¼\x0015`I©(¼ßILÏx^üßÃðÝeÝòÏü{ÀÆKuoþúìÝ\x0001}¶\x001cëqø¢jsU}ì¶ª'Úìk÷#{ÞªbºÞ©Ü©r\x0004Õæ?5ýrëçÍ}Ö8ma~öØZv$\x001cÅç\x0014#\x0008üN ÅJ4íÛ\x001b¨èÐ
TøQ%îm¼\x0013\x0010}-ý­m­áeÎí\x0008BÖ#ÿµÿ@³\x000f×¢Â5Ík¶V>Y0ëQcÊä\x0017/M5â.S\x001bØÄ:vøèûú¸Ï\x001a<o¼¶ù¾ª\x0004¡Â¢ù¯á\x0013<\x000c£¼ºaTØG%WÝgïáRh'$\x0006À¯¢T°ZÓ\x001b6£¢`ýþ¯,\x001bFFäÊ¡¯Ã(%Ì\x0008÷z\x0005ÃôW\x0019Y\x0011!¦\x000c\x0018\x0005c]\x000b±µ
Ç\x0004c<Àüt\x0010Òÿ1\x001eí¬\x001d`Zg\x001báå&ò6@á\x0006ÞnÒÅE|ÜÀ×
üÜÀ_\x0008=\x0001n\x0010è$Ý0=÷\x0002ïÜéè{Ê]¸»íu\x000f)
òyJ(ÐõÅ÷Z\x0014\x0014[î¶ºGöµÃúÂpx¿Owx¯§ù¬ÏyãÏz­\x001cû"1ùåè¼o¯|bzã|¤ª\x0002aÙ6Ë\x0005"]\x001fÈVÃÞ-9àß{Æ|LÇùHÁß\x0019»x¾;~ut­8C¸Pùüéè»§#ï\x001bgînEkðfäý*â¿j1\x0005ÿ?y\4ìq¢£sØ\x001a7k\x001511ÒÎeç¯m~ÆýÔõ\x0014ö\x0018)¤\x0001\x0008Ì\x0008:é¤NÚ\x001bßùHÖÑ÷h'	-Gò®NÚ\x000e9í·ïÔ§ÏÈC==!\x0014[âÓxçt4½«\x0008ÍÑbì+fßQ_Gv\x001dÍí(vÒgGó:êçjü|ëdd0ÜÇ\x001bF`rX\x0017IrÏüwk»UÏëk×fÔ)Zæáæ°´s:n\x000cß¶MË³\x000eÏÕ×C
aØg#j	Ø<«ùÒ¨ÇÏ]±ô#Pa}8J,0¾øÙß\x0002ÙW\x000c±þä|þÎß{¡8¾\x001bÛ\x0003\x001dØtä3}izÒwòY¨\x0003\x001fÎæÚ\x001d{ÎÆáÊÜÎ¶Óæ\x0016×<¸'±ùâu\x0005GuâN=	­±A\x0018%´ì\x001bþþ±î# ëÆÐôjRRìéÃô¼vÒ®u.®è£\x0016ñO-±?[ÂÈ³lçl\x000bäFÐ_ÜÓÆ:CZ|ÿ\x001cÙ"ç&sh³F4\x001br$`Óºf"µ(;	e\x000c-w\x0014lî@Ò\x001f'ëVÿÖÚ¢Ä"cÑvxiq1ë&è3±¶b5'´ïÕ6ê}-\x0014ÄvðKl_í5»³R{BµJ­Ib¨uH³-±ÏP-cêQpïÑtd~ùy&ÖGp\x001f5ÈócÊúíO±u¶ê)gà9ê`}íöE\x001a¿÷'ûuêÅ*¨ÎRÂUT¤\x0019\x000eË%*8\x0010\x0017
\x0012ü×Ñ?oL\x001f)@¬\x000c@ã%F#³±"zÓ3OÏA\x001b\x001fki\x001bÃÖH%pì\x0003¥\x000c]ñg«b\x0002õÑ\x0001úf¸g³ô7ËhÓ{Ó\x0001èÊ@ßïrL\\x0006Ñ`k×Ö9\x001e\x000e¾ÎNÊ¾D\x0018£¥ô¥õÓxØûA¶q¶­ìgGÃ`É´Hþ³±o×\x0008 6UÊxcd¾2a;¤?ZÞ<\x001a¡y¹\x0018e">Qlk-¾ê8,ï\x001clÓmÄ\x0018­\x0008ä|Öþ­ÔQæ3eè¶øþhiqðìè\x0018Û¹t<½µ\x000f®#mÑâ\x0015[¡y¬¹áüä¥åMÈ6ßgÂêZ\x00116ùcíÖ_cþä\´ú£úFÆ'T\x0017d~H;p?»Ú\x0011YSr\x000eÈXZ½ýIû6{M V~|´yD÷\x0013±\x0017|\x0014ÚÇvûÐrÖÈ[q·\x0016\x000c»\x001fªyß\x0002J\x0013-ß\x0005Ê\x0016²Öo\x0004£¼\x001b\x000e3/\x001cö\x000coFÞmb<Â·	N:i
Ò $QÞB¶ªËödØ¦uÌT\x0000\x0013\x0001\x0016)B¦).0Â»îàgË$\x000b\x0019N.@\x001a&VÿGÁgÙÏðAâõ4
É>\x0000^\x0000*ÆÜ\x0004þÇ \x0015ë'º@
	n,@$:A\x0002ñ\x0002Äã|$úË\x0017úsq\x001eí»oÐ¼g\x0018\x0019<\x0002ËQ\x000f\x000c1
lêv=û×\x0013MlÝ\x001fØ»ûØÛÚý\x0006¶v­YÕØTû$Mi`ßÁ2Á\x0008~Nd`\x0013·ÞbgÝ<Ð<ïæN4íÒ\x0006Zñ1J©X&¯FãO\x0017 ±ídGl9~/g×OÏ¯å_}²{î	ôóühÒº¿ \x001f¡_nüîîüEªí\x0017¿f_°$q1xe,öËÞí;¼èHÐ\x001by_úv²Z&\x0007ä\x001cHLb\x0016HSxôÍÞå3cï\x000f=\x000bÏ?\x001aTrõfkõ\x0013í+õ\x0012Ì¶ê§Úê§±k+\x001e
ôm¥Úgå\x00172Èþ\x0004öz½ýÓ!³O](¾\ÿæ'×i7UÕÇþ¶ª.Ö8~Åù{1¡ëöÉ}aI©cr>\x0005ïå{$í» Üx¹~è6<ßòs?F§\x001e,Wù¬úR\x0016Xð\x0015ó·ÛQkÏ>\x001c\XþpÐ¨ë×îT@ÈJ)G×Û\x0015 }p»ïJ}SÖÒFÃ¢9?½È\x001c]c\x0018.9$p\x0014W| \x0018ù=úú:Zqð\x0006*Ø[Vâ÷\x0001F½]ßöäEî@ û\x000cõÿü\x0012Ê?T
öW³\x001f­©m|?³áe\x0002W'î0µMÌxÆ\x001dóÀð_öË5¸©ã
ÀçJW¶eËü\x001fz\x0019
\x0018\x001bc Ø²
mJy\x001aR \x0014R\x0018l\x0012\x001fmÆ¸æQ\x0010\x00021-\x0010
$MÚ4é¡S\x00122C\x0002í´!0ÓLh¡1elÒðJfRèd ±±eÛs¯î5W«Ý«§ÒJãov÷ìîÙ³gÏî¹¶áÓþW÷öõßs{àÜ>A¸°lÏÞ
6|Å\x001dK,ìhSX/ÑqPnÐãÄK¥h³-\x0001íVcm,3èàþ\\x0013¬*+§jË`gã\x0018Ø=­\x0002vM\x001b\x000b;°¨<3u¬dëSSFÁ·ÇÙááVXQ\x0007+FäCs\x0002³²Ô*Ùøå<\x0013ñ:)~\x000bÉAðOúqqB\x0017\x0007ô1\x001f&\x000c1 %\x0006¤FAZ\x0014\x0018£ =\x00022ÂÀ\x0014\x0005a\x0015\x0001f\x001a\x001c\x001bK\x0018dk ôç"\x0005bNP½7ñÎOÑæ¶b¤<E\x0007Óó3aõ8\x0007|¿a´×Ä¼\x0011«\x001c´sª/\x000fmsÃºj\x0017<ZV9(_ÊC+Kó%\x001e´ç;Ë\x0008£ä·>\x001eß3\x000eÎ÷­2R¯YV3l¨)òû\x000fcã¥<t \x000fÖ¢\x000f¾^V0ä\x00032ïµ ?\x0016Ú²á¾Ì4(Ñs>$@¼x'ìò\x0011ßûhrS¢ä{gò:¶\x0019\wôDÄÔÒ"ºñsõ3?ùdÂú3Tò_;ª3,ùû_ùçé¸~Ã\x0018Ï¸ÊÙ-àÓ$@$I\x000c79{xçÒ$¡:EÐÅ;^Ä\x0006Î(ý0lß\x001a¶U«ø"\Ea\x0010\x0019­?\x001cÈù!®\x001b¬a3K\x001eL¨ë£+\x001a\x001fhéÆã\x001f©<4Ò¡!Ã\x0008
rYe½Ò&ûÔrÕ¸z¢OªKmÆ|Jûn]Ñmì«ËHQ¼\x000eìh³\x0003mwªKÄ	r[{ËÆz&¥ÂØbì·Pú1¤,¾`ã3er\x0011\x001bââü÷¡ MN\x00186°lå>BÝ«Y£\x001dÏÔm3QÖ?¡î#R»#\x0019G[;ÞhÎv^´9k8~$õ³tXA¾ïÜÝ»®Ü{õ="ë\x000eb¬xG\x0002ê\x0010x/I´t:U²\x0000;Àß~uè\x000b°|/(ã@×G[¦º\x0017¿hvQýN\x0001v1Î@K¯ÿ\x0000üüÍ:?Ö9«m 3\x0014[\x0018çH-)óY{g­°_+V\x0002ì¥ÍÑº\x000b\x000c;\x0018û&÷\x001a`\x0003åîúù5¶\x000f2\x000eT:X{\x000f\x0016ïZ÷Mó\x001c\x0019ëkÆ3-Þ\x0018ïÖ\x001dÐ_­3\x001c­ê3fí1æ\x001eµú¼,ÿ±ÞCê9j;ù~²ö¯õf°î\x0015óÝ¡ìé\x0007b~À»(/AþØT\x000cï·Û¡»Õ¦Âîc¯ì\x0011eßt@eZ\x001a$ÂOü\x001e®Ñ\x0003Ôñ\x0000µ2Sôr)¶õwå~}|h¼Ü§î'ÇÖè\x0000&ãº¿^P \x0013:«ÍÞîêìÎñ3Hg\x0019±H`Ûs\x0016Ë®*³¯¬4{ÎUe\x000b«-\x0017_\x001cöÃ\x0008\x0015¨g²h¿Þg«ºTêdV¯£ÈÉ¹Z:Xº´t3u~2`]Æ¯Î\x00132Þ_®ôã\x0002úUÔ1Öb¡¶ÏO\x0017O·±RWÏ¡êã=#ny¿n\x0015\©«	\x0018o\x0008\x001cC£GÊhcÆÑÖ&æu5~r>õ~Èuú\x000clÛÝäX>P¯2µç:j\(v\x001b\x0008\x001b\x000cu\x0008;\x0003l íâOÚ^Y¾#Ïì£Úf\x0008]\x001fË^j\1Î\x0019ãD\x001cÒbê\x0003­=\x0012ë»I}ÀõÉ¸§Æ\x0018Í\x001f8óÛ!Ð\x0006µNÚ}¥Þ\x0005Y×ÐxÊùI¹\x0010ëÆ\x0008sj\x001eððúìB¸´ÁNäå{À¿ìYc÷û^øó¦IÜ¸ÞF×\x001d!=Zlï\x000b¸
\x0001$\x0016ë\x0011!5\x001619ÜTþõÝ´%\x000e3÷53ÂCªºÒ\x0016Y\x001a"KºÈWC%KÅÈ!°Hf¡ª®´IDù\x000c\x0013@i
þooÙ\x0017ÒQ	°\x0000ù
ÁB¤\x0011û\x001d8ÎI\x0005kòÉÉ±"\x000fÈÌyª²)
æªJ9\x0004l6\x000bS ³Ð\x0007sì9\x0019k\x001f~Ýpð×<îÆ«©W=\x001397¼î>ï²=ÞÓ\x0018ôÞ:2èýäAïÕßz¼\x0017\x001b\x0018|§õöàSK{½MÈÌz½s\x0014¤vwáî~ï«ï~tç­\x0013§î¬?~BX~æ¨Ðü÷ß\x000b+þIX¼ù¤wÆÌ+IÍ7n?¾çvoÏÒS7`Üîµ\x0014n\x0017²Ý{{ËZ_ùxîc×ZZßüptÓöÃ\x0005\S\x001bn²\x0015r·§ÌØ}Ìºêwÿ\x001c±ø¥SöÒÕ/dpóÛÑÉØ?ï;è¨6	óò\x000e¾æ\x0003e¯ulüËÇU;Î^´·ûfí¾î[uÏö ç?­]}âÒì-¿I¶çÁøøËú'~Á\x001b¿÷Þý³·ó6¾Vµ¯çÖ\x0014\x001c[»ë\x001fÿ¹oÆþEºu/r°ö\x0005\x0008Jû\x0001ÇÂý¿z§`g×É[þöï	3\x000f,²v\x001cHvìo{N\x001a÷ÀÁÓ¶ï\x001eûWEëá+å:/\x0016\x0017|Ô¥ÏÿðÎ*{¥\x0013&]»<bc¿gõVwÃº~Ï·æ^ðL×½.èà0¾Wo¨À¶ù¨`ÜÒ%¬<tAØ<½þ=a©ñMÁ\x00100ö\x001eaÜ/¤´¾%,<ô°õà\x0005aË/{<\x001bWâY²¤ï³Ùêx	\x0017¯YM7\x0006§¯½Ù¿ÿG}ýçw÷õ{V\x0010.4ÿä¥Í\x000e\x0003\x0007¾äN.~8\x0010;ø°!ÅH\x0019¯ÆìtXdÏeð
;´WÀÆ# }B	,/ÍÊ44>¶Óöb÷Re4À\x0002´¿m¼\x0013v4]Ó*à©ca'Öw$0¢}¢[ëÊ ­Ê	,\x0015#ò|hNp\x001e.µÂ2W\x001e¸³àÒAÐØvÉ`J\x001eúqqB\x0017'ô1\x001f\x0006\x000c1"%\x0006¤FIZ\x0018#$=B2ÂÄ\x0014!a\x0015\x0001f-¸@,aÍ@ìËA
bÕ[\x0013ïü\x0014Un»¹­"ùÅÙÐVís\x001bæµ©1ÌAS}9¨Ã]\x000eëpGñ\x001b`EI¾DøÎ´ÂRg.LÃor^²)\x001eß1âÅòº_Ê3Áñ.ÉnÉ\x001f1ðÁNÔõ4æáµ\x000fÔ9oe©\x0015\x0016;r ÞbR^çóG\x0002ÄL((98_~#±\x0010y(Þù&¼×±Íàº#¤'")ÕÕâgFÂÿx+8övj¼ý\x0015-=ÆÇÛÉßðüL--|<cËq]0ê,\x0002>Ñ\x0002$I$Épb="|îóñÿ\x000b¹?\x0015Râ\x001d/Ibe«0lÿS8;Ï¤\x0015åærE¸\x0012B<\x0012
Ue!E\x0016îzZc#íd/¡®\x0011ª,õX>¶q\x001cT§¥@£É\x0008
H}¯l0¥\x000f!Ê|rY&×%J^O©Ód
êy¬~¢¯\x0011\x0002#u:°£Ý\x000eÄÉÉ¥ÜVd<\x001f1#YªR©+þ åZe(ÐÆUd"\x0016¤@¶[±uÈv,±ÌÇºn°õ	Wg0=fÌÃOH;cá\x001b­}kÅÇ½öA°sÓÒC\x000bw\x000f¬¡Ü\x001dñÝrÁÝ{¯Ü\x001båî«Û´waH\x0006DóÇ\x00019\ ^G\x0008zÈ±¬>µý¤N\x000e½¬õÕºÉuÚj}*_>eÚ\x001eÄV_µü¤¶Gkl8g¤å_.\x0016ÔØ¢ù1\x0004½Ál }á7qÖ\x0001ó(m­8\x000fvÈ;Gµ\x0011·´XÕZy/i1Né\x000b\x0016\x0003ZgJ»§Ô;Døê_Æ^5ß ïMÀ¥ÄflAàú¬w\x0016;äÅ7«N»3Á|\x00124>Õý¬»\x0011Ä\x0017´{æ'cÄ\x001aÕ>`{føê\x000b.¥.æÐõ£Ìpy½\x0003º[m]ûR\x00036\x0016¿¦ãÿÓo\x000fu<À\x0014="µ|ähÍWú&áÂ\x0013qíÏ³ê÷Æg}Ö]m\x0019è\x001cTY\x0006º°ìª4{ÎVY$°> #ËÌÂ\x0007\x0013²{U¤onÌâþËn¹\x0000Eu\x0001ø¿û\x0002å-¸ì\x0004TQØ\x00150ÆDyú\x0006\x0014Ó 6­M$ÈQ4Æ¨8M4R
Ú4mSÇÄGi4Z[ë8Z'Ìtb|DÁgÚª­\x001aYÝ\x000b·çî\x0003ï=÷Ü»Ë\x0002B§ìÌ7çìÎùÿÿüÿÎ¹)HO
Ú	é6rHã´iØG\x0014B=F>p-Ñ\x0016a\x001eÏGW|J>¸\x001bËN\x0019§MãÎSòáéñ`C Ï\x000b=ø\x001aÁ^Hû\x0010ÓÃõIáÄõM\x001cÉ\x0005>ÏÉ;×)Äuá2\x0013IËd»Ü1à+nCéÀýÀöÐ¹%Á?BìH{Áý%îä\x001d®\x0014/\x001cR<OÞ¾DöAÊ©n¼ð\x0018ãöHû"ÆBL\x0017AÎÓ/\x0017¥\x0010^^%êT$ßÄb.»>I~à1\x0017³%V\\x001f¥úÄZÇb&\x0016gnl'¢;Yéã:*Ø\x000f..6ÀWø7\x000eû\x001eÐacÎÿÛw.Çu0ê ¨A;b`\x0001ºv5£ì©ìM´´¨g<5Q¶@\x000b Å|/)"Pè`2\x0005\x001cæyÉ\	æ\x0010\x001dô\x001a±þ\x0000:t%©\x0000rÑÿYABØ¹yhl\x001f@,«gïÄ\x0000§\x001débäsZ¼nãl14âLGñÊ
\x000bª<yâ×kÚÃO}gKÏh¶Ël¶G¤Ì~@?½ Î­°ÐoÔµÙî°ÙOí³Ó×Øé{\x0007íts½>¾ÔBZè¬Â\x0016z*jaAýiU­ô[ûíô?\x001b;è»+ÛèÒtÖ÷Úó_¸ß¿ØBç\x0015Xé)wí\x0013ïZËk[-\x0017\±ýF¶¾C	kÐY\Û\x000eñ?=¥YöæÊÜJ*þÕ'zÕì2È-\x0007ÃÛ\x0002½òfÂÚ½aK\x001b¯&üèKñqKë\x0003Ù1È7?"\x0007ý_ø:È«vPQ\x001b÷ø©ÿ6çÏ\x0006\x001cþ2þ¹Ã\x0017LÙõ·¨»ý¨ªí\x0000,
z\x0000³øÍû\x00175þ=ýùÃçSRß=\x001eªZõ\x001eåã/¹\x0001¨;¤Yýé·£+O32¡ö#
+mh¼Áe«\x00012w\}²yô+\x001f]O,ùüF\Ì­³òÈ_È¢\ß8\x0003)ß]\x001fRmµm´Ó+7ÙíÕÅ·é9ò\x0019\x0019\x001cDq:dy§Ô½_3ë\x000f41\x001bÞ½Ìø+£#Î}LþÂ$íºÄTïobÖïûY_wÕörÉÃö\x0019E\x0016:\x001bÕVdÏ{`Ï{õuOÅz©Öb=ÿ\x000eÃ4¾¿k^© ôè67P\x0017Öæ`D4B\x0018*§`¤¿\x0002\x000cç\x0013£¡:e(l\x0008['?9Ò\x0001Û\x001b±\x0015õk\x0011ËÇ\x001a`¿\x0012bûÀÁ~(ç~\x000c\x0014\x001f,\x001c\x0012	k'\x000e-I\x000e_7g$Á[ýÍ,#`)\x0011ÌÉqðãáà¹øH\x0007%Cú7\x0010¥Ã¢`®.\x0014Æ\x0006¨\x001cùÐ{ÈY\x000btí;~T\x001f ë\x0003ä½¢Qö\x0000ª\x001eÂÏGü»I\x000f¨}$Ð\x00074>\x0010Ô\x0005}DK"\x0013â\x0003¡\x001cÜÿÃ\x0010\x0011\x0018D,çéë÷©;°ï+û¶ÅQãm+FïÁê\x0014ömCoñä}ÛXìYÞ \x0015è
Z¾\x0005oPó\x001f\x001a\x0005\x000bQ\x001aúN\x0018á§pÞóÐ7ß/1àlS\x0002`ÙH½Ãö­ïÖ\x001bìÁéI°.5\x0001ÊÇè]ïp\x0003îÇÆ¢th$Ì7CF\x001a+åo©¾/°ç"\x001e1rÞ	ìûÑ\x0013ïSx{úâ­Øò¶*®Q÷7ôÿþO*9Mm¿ý©gÍ³~öu¬ºîêµ~\x001fç_÷lû²ÎÂj\x0019tE10À\x0000\x0003\x000cÐèÿé7ùÿ	C\x000b£i\x0019ª¯kfA\x001eÍP\x0006kïÕKì\x0015Êhd)\x0006·x? 'Kù"'éë\x000b\½\b°~Wýö4Ï}ÅÀý\x0010Â@Q0>À\x000f25jHGL
\x000cI®6]\x0013àjcé¾C\x001eÈ\x001fïìd\x001c]|\x001bø<5o[\x0018¯VA¼Xä·Þá»³ucàôupD\x0010"\x0018CëÁ Â·h}\Çú\x0013ü¥øþ²Ä±~#y\x0017¶¹ô¤¿Z5Ú.ê\x0012óÛ\x0018ùâÉ?ÜfWíwuÏb{ôÖÿ®ÆÈ\x001b¿½ñÇS\x000eºR\x000b¾ìA,w¸=ÓìÙæ}ë,¹ec\x0014g\x000c\x001e7Á<\x0002»\x0005KÐëÇ×\x001ap\x001b\x0012>êðÂw_Ø]ã\x0018£øº\x0004¾Q\x0012¶Iú=üÇusó!G<Ö¼\x0018Ð¢\x001dà?%>· \x0007úx®¥òLª\x0011<?ò"È«T,±y1±¼xSÒz©ú&åÁSÍã\x0008Æ%â%U¤s%¨1oìwá|òôä#-Z')\x00179\x0016É sÄëwñLè)á|Ò]ÇV4¯R{È/éH½\x000b$½Þ\x0003R\x001dæ^dØÄE¢6=P\x0005\x0017J
pÙ¬å,±\x001ctíµÊXh\x001d¾_eÐ\x001f~
Ähä\x0011uRå\x0000il«pµr\x000c8&$÷8l¦"Û[3ÂdÓ£4\x001dCÚÎ\x000e±\x001bãäìhm\x001bË¹1ZÛ9¶eÿ³}ÄÙäÐöÉaÌçc\x000f,U>-C28õ\x001a]úÙýtö]-ÞOÃäø\x0018WfÄd¬~>#f[L¿\x0013K£\x0012µ.\x001cÒ8­c.a¼s½3ÆËã:ä5<\x0019¶^Ê\x001f\¿`¾¬\x001b\x0003kÉeßõÝ~ñd\x0004L
áz1¸ã¤>ÉIIð
ãëL
¡>RßDwê\x0015ñ;nrÅ\x0018ßK§N%ß\x000eî¯I)XÌð=á~JÅÔSîx¾+9ûò7|\x000f1ÂZ©¼bÔ	¡\x001eIú\x0005¾y¨c±øà¹Áë\x0010ß\x000f÷Ì\x0008ê+½êW7\x001ej§PÏ¼>~¾\x0018øÞDî\x000bAÎ$|rë\x001cðõu.\x0019\x001e\x0004ÿ¨Ö\x0003,w÷uØÂóÇüâ:\x0018uwÑßa\x0002(
<\x001a`\x0000ßñÊÈãìÝ¯Ç^§½C=ùµ*å\x0002-\x0000ù^P$A¡\x0018Ád
\x0008ÌóÀ\\x000fÌ!0%HÈ\x001cÄj8t·Å¢ûl¢?À¬ 2ìüt÷\Ä0\x0015À´@H>ÃGò]äu\\x001c/É&¡\x0011'+ð\x0011ÓÑþ³\x0006ø\x001cÿE
Í|}ÛÑl\x001bÙl\x001b?¹Ù2ï{zZq\x000bSÔBOGd-h¡óÊZé\x0015ÛÚè\x0013ìô£vúÞ6úZÞõ.[ÔB?øaU+ý³Ý6ú
\x001a¿¿Ýf?µÐB\x0017\x0016Xèé\x0005­t6K¡Î)¶Ð¹3ïÓ\x0017Þ±×¶XÎ¿tµu·¢¦Ã\x001fÖ¢ó¸\x000e±Ê
\x0019U\x0007
/\x001f¸¸´±)a¤ù·A³\x001cÌ¿Ó\x000c}iG |Ö«Têº\x0003¡Ëþx=aê?\x000fü

r£dQ@+P¡­\x0004XþKÊ\x0006\x0000s=@E½³­Üî¹ÿWm\x0017â^ãËÊHsq*¶Aèß«\x001ckJ(;q-ñ'Ç®$ü áh\x0008·ñõ£6gßg7|z;¹úØ7£J.ÞºuV\x0016yó\x000bYð\x001bg í_7\x0013_k³o´ÙWn²ÛW\x00154Ó3àc\x0014C\x0018H¦;Ê×}É5^ejö~Í¬Ë?Í¤\x0011ç>&\x00020ª5ggÿÐÄlDþ¼±çrûë«¾µ/*²ÐÙ¨r|$«ø{zÎk\x000fÛ\x001aë,ÖKµ\x0016ëw\x0018¦©tçû5zÒ£\x001bÝ@õ>¬Áh½q*\x0012®¢¸ÿ²_ö±M]W\x0000?ÏösâØmø#	IH@8Ð\x0010ì|\x0011­ô¯v-´|e\x0010º®H¥SB)E-B 4-¬]·U\x0013­öGÑ¦µ[7µj·íInÕX\x0017¶\x0005J nZ7 µóÆÛyösòÞ}÷>û96Î*;úé^ß{î¹ç{î=\x0007¶4\x0005aû4x®³\x0011\x000eÎkç\x0011©ß×Ñ\x0000ÏRÆ\x000fÎ\x000e««=àtß\x0000ûYTB|ÿâ\x0002X3u
<\x001d©\x001bõ¡¯nºôaL\x000e´7À\x000cêbýLÛ4Ø>»
Ö×Ã*OµÕ\x0013\x001a\x000f¬«)Û=%PÏÁb>\x0007\x0011,±\x000f#L9À%,Y\x001f'Ö\x000cP0\x000e
Ç-MÆÝ\x00004)6HAzpZ\iâV´\x001eÄã:z-Õ¶j3\x0007î"¸¯Îµ­6Vw3]Û$]\x0012{°vn
\x0005áþº)ª\x001a´®&Þ.ö:!d³BÀÄ¥üÎg£ÞKm«Ó\x0006÷c­<¿[\x000euMÕÐq×`ÔõDs
|³±\x0012ÖM-CÿK5u¸\x0007¹\x000fëÝÀ$èdÇgÅ"WñH |W&qñw:Sui¢Ô\Õãï\x0015\x0006¯E\x0013
ÿÐ%µ©I:æ	÷q\x001f<dÍu|Æç§o\x0016R5Ë¾ì\x001fGO%·wYÄ»,â]\x0016!O<y²\x0001g\x0015!8ûÚ'u7\çMÌ1ùe1{¿/\x000eÙ*\x0002\x0001®\x001cwJ7\x0005t×{y¬"^=}éÚlf§Ñ8\x001a±/Ñ!A3\x0007-E\x0005Ðé(6»
Ú%°O"ÍµÉs\x001a9y.1OÓ16¯#ô*uë;ÙV\x0008àL>´;ø¥#ZÉ'.î£\x000b)FJ\x0008r\x000c<ò<KÖ×s*(÷íÍÅí\x000cÈv\x0007äï>ùLRÝ/\x0015\x001bôìOeÜÉeëÉ\x001aµ_¹G²ýi2Fì"ÏÊH|3\x0019o=_ä$->éäH*¹]zúõrDº³~\x0005{Ï\x001a#ßD?\x0000êûGÊÒúä\x001e\x0001 Ëz©v1lÖ³W©ÛOÙµ_@ç;éçhl\x0018:Y1¡ùF³\x0016gMü\x0014vøýdgJÚÄ8S\x001aYÖÙ*cäìX>%\x001b'ó\x0016+Ò\x000eÒ&j>°bÃ¸7T;\x0019w$sÑÄ\x0011CæQôÐü¡ñhÂÙêå\x0012-\x0017Y9Ì²\x001aKV~\x0013öÒâ«´·@s?\x00191¡Þ	F\x001eyÌ1òî$Ëi\x000eÒOÂ\x001eÒæ»Dä(ë#Ñ;O2.Ô;Á°\x0016[êfø¨÷^T"A0Áá®R¸°Ý\x000f\x0003|H%ÚìûcÞêSë\x00030ßåòq¢\x001fa\x000b@\x0004k÷YèÍÏ%Úd:æ`\x001bÂýºÉe\x001a>6Ã!~Øä9FÿL'¶îký!ì4­0Ðä\x0016?í\x001ex±¶`×
3QW	 UÒ/\x0013a\x0010&Ú\x0008eJÆÂ^OîCÓ£$ÂË±àe\x0019ù»Ô\x0015(Ç4²\x0016¼.G]Çk×iæ,ê¾R?Í®0¡SO&AkÂ\x0007ËX¿Õ¢\x001eSÉ(PÑôðÚõ4\x0019å¤þVBL\x001f1ÇÔÉk×²JûI»Uò\x0014¿HT>Sbª\x0013á'k\x001fÒ/Ò7ÍÑöæÕ2¤Ü¨>°\x0011/Mì(ú4qaMá\x0017-¯Xv2Ï\x0012'\x001a\x001d\x000c}¤\x000e£9®\x001d+?)úi~ÑòìGx­>¿ÉbÉ\x0001Å\x001f=\x001bh¹Ým\x0008ßdS\x001auÃ¿#­0¸Í7ú\x001b \x000eö7ûÆúöwOÎâf~>d\x000b^\x0017Æk'Oº½"çû|Ì6¡_ÿª`y¹\x001dV:!Æ

ËSä^%%tîIÂ2
K
r·Ì]Jµ|4¾\x0004ÿÅQÿàKPc\x0005oG}8~'$¿\x0010i@Y\x001f\x001fU\x0008p#>\x000eK\x0008\x0016\x001bd\x0011å{)²CÍív\x0006¹Û$Ðï[ðý¿¥È\x0006\x001b_ywãsÂõË/^{°ýÑ\x0019Do÷I´yéçÂ­«®\x0008V~1²\x0010Y°ò²°àÞËÂüîËÂ=»¯
¯¼\x001e\x0015ÎÿbD¸ôÎpñG#Âà«Qáý\x001fD\x0013o\x0008\x001fÿrDøìHT8½aXØknÅµ\x000bI}!Ì_74¼ý+Ã\x0003\x000f\x001d~Í¼÷z\x0001ìÄ;¹\x000bÁ¶¬÷3çÚ×þ\x0016ÜüÎúÕ¯þ1à\½wv÷ò®î}<,x\x0018Ìwm9;_w7ï|ÃíìÞgq¯zªØ|ç\x00163,~\x0004`õ.m/\x0003<z\x0003Ùú=à\x001f?lZôã÷Ë\x001f8:X[{è-ûß­[ôLyûaNÉ=ò]p>}ßtì|cß¡9½ø÷ì%\x001fy'_ø\x0000Ê.üÙ`òù\x000f ëÓ¿vGm{¢#õ
#/þX¸\x0019ÞÆø00!Ý¿\x0017¿òósâÞ\x0015÷.;.vÀ[lù¬{wüVñÃ3âo\x0015wÿä¸ûûgÿ»õëÿ\x0011î^~EX@Ëd¬¸,Ü¶æ²°rÿèÑ\x0017®\=uhøê__\x0012ÅsÝ/}gG%¾è~$Àe\x0016?"é®ñ!u¼	º&;`E\x0007\x001eá]-S¡¯£\x0011¾Õ5\x001d×ý\x0006xÖ\x0000\x0007çMGgUAÕ\x001cÛ+Ó>$ó¯BÝ\x001cG!ôÔNÝáZ8¾ôu\x001aó#\x0015¤Ø\x001ch\x0006O´Ô@o[}Ætöu6Â\x000eÔÛ\\x0003\x001b\x001a* §Ú\x0003kð|ÖVÿ°®¦\x000cº«J¡ÃU\x0004U&.v.©_\x0010qqÒoóÜ`Ê\x0011æ\x000ccÉ\x0012|\x0006°fqP8\x000eliP&ö4p¤A±AJÒÀÉÓâJ\x0013·L)âêâM¹5([uMª¥\x0012µ\x0016\x0013Ü\ê\x0007\x001b+a_k=ÖÛÆX½ÈdMôIíp\x001dl	\x0005à\x001bXG¥ú³Fñ¾÷Ôx`i¥\x001bÂ%Pcæb¿%r\x0011Äï¹%6x`ZE,&±z?\x0018tÆcð\x000cÖö\x001dÍÕñ\x001aþ~
k\x001a­ÖI¬
ÆÎ¥±À\x0012³'\x001b¿ß²EPf
\x0017³2]&JýÉEÍê=\x0018ä*¿W\x0018¼.\x0016M4üClÖ¦&é¸'ÄÇ±*?ñ§	\x0019+#\x0014oÜhÉu,ó\x001bû©<÷-9ç=&âs#B<yòd\x0003ë,ÑëÚÇ\x0018\x0015\x0003ùºðeÂR+rÁìåïÅo[Ëq§\x0004^E?°öñÞ \x001b¼¾\x0011[³á?+\x000eÉä§ 5f\x0013Dì6èp\x0014A\x001b¶íØ"\x001f\x001dW´mÄ\]ZcÓèheò4}ª}É½eûB\x0005<\x00048\x0000\x001fÚ-µ~#õ\x0013ß\x0013ó\x001e¤\x0013)C&SÆõÖÐÚT×'ö¬ìLö\x0006%Û¹øy¹\x0008}©Ø	)è%Çí}Éö6¢Ó.£¾d2öã=/Ö¼\ÍäY\x0019Õª-.¤\x0002ÆîMâþû\x0015ß\x0013sÊ÷ 1î\x0007ýwC3¡ÌÓöWêÓ\x001b'mUÉQü£Ù¬ç\x0008 öYÓW¬ÕØ\x0003jûGåub@ÓCÊ©úy2V£²\x0018*u%Ê\x001f¤Ý,{©ùA9\x000f2v~J\x000cus¢×\x0001ÂNæ<ëü(-ÕÆýH¦Ã¨,
U¬(÷D¯¯¹_ÉügÜ\x0017=ÛYï¡8ëÜyM>%YOæ'ë\x001chçL»ûzvhÎ'3$sÇº÷	Ø{Qï\x0010ÅFZ¾Ðt¤{n¬ïÉîs*ºTz\x0018sÔ<¥\x001bÄkëúb\x0018ÜàÓ[|0°©RÆ\x0017gs|ì\x0014¶ÿx,\x0000;ZÜ`\x0006\<A>>4¥Í\x0002\x0010+a[0rL%û´5¤l\x000böpÿë\x001dðéÛÓlâ¹&wôdÈ\x0015íéÄ~È}­¿É\x0015oq\x001cÇ°uÆúý8ÿ[\x001cå\x001ezwº}ë$S3êjF_Â¨7b\x0019k#f5a³v5\x0017V´£s\x0016ú<UE¶W\x0018ðr<ä~D9f!Æxú\x0018¹.BìEÓ\x001f!ö\x000e\x0013úÂ=ÃÄ~J\x001b{¨d(6'Æ[%,cD\x0014ýV^ñ=Ñ'ä²£ëyõZÕ:Å\x0011r^½¾ÿ\x001fûå\x0002ÔÔ\x0006àÿæA 	\x0004w\x0008A$\x0004±¯\x001a@ÐÙ­(øB¬¶ë³ºuì*Z¬¢õø\x0000kÕuÖi¶;³¶µ;BGíì¶cëN·3\x001dE­«CÁ]ÙÝÑºS[X#\¸{nr7'çÞ<!í\x000cùæóÿüÿþsþ$ +[F°//\x0017·ÑÁVB<\x001cìu%Ã³'\x001bó'`\x001fq
æ+î[6îÀ¹Î0 ÛÉ.98ÅÔ­'åÃùËÈºð\!Åä?n\x0007®\x0014{\·S
Èàûàk\Å\x0010¿7¤3ÁÇEuãöà¹@X'tÏ\x001d|"³/v\x0019ü|\x0008v½#|Ø\x001a&\x0001¯*³F&«ËPý_o¯÷v´Øï\x0001-oþéoCÜ"KîíSêû\x0018H23Ji4\``!¼
b î\x000b&Ø×\\x001c\x000cR\x001f>\x000c).)\x000f\x0007(×8Ræ\x0001¥,adæ»Áó\x0018ó¼ \x00041D¨3Å.`e&)Ñÿ\x0013ôÖ%"F\x0005\x0003ÌBcsxÌæ`û¹HVÇÉê\x0011ST6=³yÌ"0Ó\x0007fp\x0014yA!	µé*÷Æ£@\x000105*J:ç¹âJ·%¬®ÿtA½Ùr}u{çÑ¼\x0007=c\x0010c'?è\x0019?¯.Xh¦g,0ÓE|ÊÌtA©¶¦®<ÖmùìþÏE\x000bÝ~¦;.YèO,ôgº-M\x0015fK\x0015+@k
q\x001dìXùczfE{×±7»;[\x0016}Û]Oí`¤°\x001dÝËê§N>^sþnjEÃ=CÉÉ¿jã\x001f\x000cTIBæoj[\x001f¿ï¨\x0005g\x0016¾}M7ÿäa/ì\x0008\x0019ëÑ¥Ø\x0006°é\x0004âäS6¢ï¯\x001e\x0007Øð\x0016ÀúcÎ°ã\x001b;®ñ\x0004¤;óøEÍÚ/ÿeL=r>TöÚijÅ¿K­üêßÏhv¾'·îmå\x0004ÌüðúÛí\x0013ën<2UßúoÖ3ÿ¸­lk¢bÚ®Kì\x000c»×\x0004E¾ÏÝc¡«võX6ï¶X¶Lþ6A\x0003M£\x0000h.ò"£Þt)«¹É¬4üÑÊ\x000f4hoõ\x0005&äµ&æï2»Ï¶0;>hîÛY}¿÷¥rs/)/\Âæßò'ôú®¯ëtÝ9ÒÙ}ë\x0018Ã´îÞ³&\x001e½ê:D\x0012å\x001fX]¬Î\x00041H
Ï\x0005CQ\8¬4&À¶	# &Ï\x0008&#S2¬mm~:\x001cÈóCù#ál\x0003W+¬ûùË\x0007W$¢½´,¥\x001c^L]ÈÃ?Þúâ.ûr~Ñcû¶gSàô\x0004XüX\x001c\x0005GÃâ_\x0000K\x0010ËFÄÀ<m¤õ\x001ct\x001eä±\x001e\x0011MÙ~Ë\x0007
Iú\x0011Ù\x0000 ÷\x0013A~Bá\x0003Á>\x0010â!J\x001fPyÚ\x000bB=$ÌK4$(2á\x001eÀÊG !b\x0011Zì=\x0019¬Ú3°5eT°\x001cfÅÃÑz¨\x000eQ];ïßÚÆê«AíÎ©°.S\x0007ËSÙú\x0013m­Aýï;ªI\x000bÁH\x0015\x0018äRkÝõço\x0015wIàâ2N\x0015\x0004Ë\x000cq°77ÍçÔr1ØêyÕ¸dXe·úý\x001bB
^\x0012m­Ïå(\x0016¿RCºB
:Êö;$Ð9ã	Él,)Ûýfk\x0011êúµ\x001eù«&\x0005ºöøZkTz=ðÕßõ}òçîÑ!ê%KØ0\x0007ô£,.²¶\x0004:\x001e¾\x0010õZpPV$Ð±\x001cú\x000cþ½CÎ¿Z\x0006=w\x000c\x000c1Ä\x0010Cø\x001bU9#
ô\x001b7ç\x00142Ò@çÎ\x0010þ#ú,£\x0018°|iï\x0008I0A\x0012vCÄ\x0013ÃZwÃúÞêñ'¤½ÅÆÄlÆÇp½µÃ\x001b\x001b
r	äªB`ZI{:ÏãÆûçx}G}Ø\x0018_(ÏÉ¨\x001c÷ÊCmf\x001ctÈf$J Eh\x00110kù°cQ\x0008Â·öÁçØ6³_Ï³µ9\x0012·GÈ\x000fwöõt$ãj/1=Ùß=<¿;{º\x001b7wmõÄ'Oâê\x000f½\x001ap\x001d\x001fW±\x001a\x0008ÿH{±w½ÛI\x0000Nï\x0000ÿ;, #$o¿¸\x000eÑ5vý"ï\x0011®ÓÞwgä#É\x001eb,\x0004âc\x0013ô\x0005[ïj![\x001ctQÎ{:ñ\x0010;[]I<ýuA$ÖB>âú\å`>âñ&ÄAt-~&>þÐ:¹7Äu³Ï¤3\x0015ÍgB\ñ¼\x0014)~W\x001dÆ±1Ü'±\x0018\x000bå¬Ð½\x00119\x0016\x0007¡÷Ãé\x001cDòWÈ\x000f±\x001cryV\x0002¾áv	½\x001b¤sè\x0007.ÖÝ#r] \x0006ù# Oè¼IyJ|ßÝÈ\x001dwótI÷T(\x0007I±\x0012Êå\x0004D&%Ï\x0017ÅAë¦D¸½\x000e±kûÑZÛÊDøb\x000eâ¤rø¹|$tä[®\x000cÀ$ÀD)¹åÏO$[çðVÊÓ\x0018ö_¬ÖÓi
¦eLd÷ÍÑáÝ7F÷Øp\x0000ÍõÜÌàæ­mosV$Ó¥iX "¥`,ÒgBNeKm¤Oûü1À\x001c	\x0013a­ës~²m¶Ü\x0011\x001d­\x0015\x0017XËgótÙçû¿ÖÈ×tfól0a}\x0007»\x0004|$®G²9¨Í±Ç@\x000e¯Íá­éç­·ö¹ï\x000eë\x0004ú|\x001d\x000eóM9Øþ\x000e¶áû\x0011ö'ÚLòä+a\x001cY\x000e\x0016K!¸nÑ¸b¾á~\x0010cÁ·Qä|Hçîr´§-ü3\x0013²CBúì\x0013:w¹³\x001eÁsÆt|\x0010ZKÊ\x0013§ssqÎ¸.1ÛHg%£
$}¤;Ç¿o¸n!{rp\x000eÄ¼;öñüææK¼«¡³ÂÕÐìPëµXí×bãó¯Wèû\x0018¥¯D\x001ee\x0000\x0018\x0018b\x0008o8È\x0004ù#\x0017\x0007_­Y!+×\x0000°¹"ÌF)Æ|/xc\x0007`Ì%\x0011êL±\x0000s\0\x0013¡\x0000HDïý
\x0016b[7\x001b-BD²Z¹Mí\x0017qó³8fzÁ\x000c\x0002E\x001eR£¶1ÝÊ5ÓD(@¾N×É\x0016n½4¶ê\x0002S¾ê\x0003¦ øôýç\x000eÿ`þz¹óò´ï»\x000bsî÷ÊÐ3¾¤ºÐLÏX`¦\x0008\x0014é©/éy\x0015OèÍ;;-§j»és\x0007ºè³UtÝ23½¬ô1]ÀÊÖ³kW<¶¼²ÿqçº®®;ùö,íèNÚ©¶µûºUe¸§_Ûp×PÑpÏ°üý\x001bÃKN\ÑþF·ê\ëÆ6Ã\x001a*\x001aï\x0019^þ¨%%éå£j(\©\x0012 ¢\x001e`ÓIW\x0003lx\x000b òw\x0010Zý®,vïYþàÇJc}chúÑÆ°´ºÐäCRÅì9«\x0008~ý\x001dI¿¼\x001dö»\x0013\x0000\x001b9X½8H&ãØ°¿ÿ<]§Øú¶dõg­i\x001b¯´e¨¶Âº7A²ù\x00145éËQûoü0îèß2Õû©¼¹M\x001bÛvn».ánk¢âÛnÊ\x0017ÿ¯}î^\x000b]µËbÙ\ÝcÙy£×\x0008çQl\x001aEh` ì\x0002£½Äh(1¹Á\x0002Ù{Éx·ÙúQ+óÆ-ÌÎÓwû¶¬ìè-){BÎ\x000f1JQî¬2Ó\x0015§ºznÖ=éºS×Ù}«agWn^\x001a^õ$\x0016Ê;tD´^Ë*@n¸\x0012Ê£ rL2ÔL2ÂÉ\x0019phòH8?\x0012jóÒá`õíË5I\x0013\x0002ñ>øà¶¯F¹\x0014æ&FÂë\x0013Rà0ò«\x0016Ùá/\áø±:jò°!3	¦ÄÀ"tVGÿbXbk§ÇBZÄî¡\x001eíC\x0005\x0008I\x0000ú\x0019Ù\x0000 ÷\x0013A~@á%Á>\x0010â%J/QyÚ\x0007B= Ì\x000b4$(aÂ=`\x0018"{7ìoÈ@×ÁÂ^ÓØöÿì	lTÇ\x0019ÿ·§w×öúX¯]Û`9b\x001bs¬×Æ#&
$@\x0002åH+5¥\x001cn¸B\x0012\x0004â(\x0006\x001a¦´\x0001ÒHQ¥ÒH@
Q\x000f©4ªª´ªÚ\x0006\x0012bZ0\x0010ª\x0006÷
)­c¼X~Ù}»7ï·owm¯SíJæúgæÿÿùgþ·õ.\x001b,.óÀÖúPn¥9{ óõ~%gïkªç§u\x0013JaÕè\x0002XFòÏrî}_^>\x0002æ\x0015dÃÄ\x000ckô\x001b#\x0015~¡ÔgÚaùè°Ó_\x0005f'ù>y\x001fì%ßEÛ®.
ÙLíåóÜ/
`Ï\x0003÷ægBµÝ\x0012_$\x000b½/Tï\\x0008¿Í¤:(9i¸ä Tä\x001d>¸ÊÊ$ïÍNGYì\x001c¸_xºjÈ&·[Ê=xÈjû%ÿøk6jK*|þ
_ÉÕk)¿ßÎ2yzeH&MÄýlMõû&~
Úd{ªc'ÍÀa,\x00063^¼§NÛL&($»\x0015Å@$S¨3&ZÃ¨|¼{$²®Q\x001bì\x0011Ïþñ¬µ)c­fhr9`z¦\x0013P\x001cÐHÆ£m¶NÆÔm¥m»úe\x001a2\w r¼ütª\x0003a<Ñµèì#ÿ¼\x0010Ö£(íBB\x000e©g\x0011²\x0015ÜLå+e¶AÜÈ:X[o,P\x000cýzFô/!xâ\\x001fs\x001bµn<ûæakÆ£\x0011ÛèaTGÑÙ&ãC_Ú¢w¦Fä\x0013õK<cFü\x0012O|ÅZk\x0004Á+q÷+y|ú®Æø·$²&[G×\x0000õúzsEúDß.½qÌæH¤Ý\x0003µÛ·G1¿²2^I0YßÇï\x0001Z\x001dx¿	û\x0010_`ç\x001dËç¼/ybíù
QjÎX`¯J\x0017Nü\lío°³õv?½Ø\x0015ßÂ»c Ötï\x0016\x0017{üÈ.M\x000c ~\x0016ù\dÈ§*{\x000c\x0017\x0016#Btì\x0011Å\x0000vïqk Îcù\x0002ó+¯}¨Ø\x001d¡0¦âð_¬³ÐÔµbÙoÔÏ¢çÏ\x000eÓKå3v
¥N¿['z c£\x0017.µBû\x0006Jº}ã\x0019\x001fÜ[àáô³\x0011jÍ\x0000\x0001\x000ba¹¿Ô£mºO%o\x0011Ïcå\x001bh0ìÿP\x0015>84Ú.wLÊ»Û^\x001b¼PÛs¡&Bël%x¾&··½6O¾Rsùx¥c}\x000bjÈzS¤þõ\x001bÌýu¬í7ke\x001b¸>#r!¬¤´*6ZÃm\x0016?RWõYÔãl[4'*Ë·¹Ø^~nÜ/\x001f\x0002±K³/»%L@©\x0007,ê22Æ¶±¾PÛªîçç°óó\x0011yLÇ|\x0003³WÀ¢^\x001dÇô\x0011Ù\x0018\x0010íØÃ¯­\x0019-1½ul\x0016ÉéÉÇ\x0013/Q\x0019+ þ\x000c ý\x0001\x001eÎVØ~Ì÷óg×ç÷Dãó½æ\y_èùG'Æ°ûÃîÍú\x000cãý\x0010+fyùsàûõb?#ôÎZÕ¶bûc÷\x0001»\x000b\x001a[8áç7\x0012Ê¤Äòç¾Ú\x0002¸Öâv,÷·°í\x0012õ8\x0019ûÉÞûMuÿþ£¬Ov&Å]ÙiñÉÄ\x0002\x0019Ò¤I\x0004çBÙt\x001c\x000e\x0011ugNÙ\x0017ç`±\x001bp²\x0001\x0016eËHòX<Jx$\x000e\x0016",ÀÈÂyXÀ\x0017\x000cBeg¸ÈF>îKÉÛWAÊû]áþ\x0008\x000f2Pùf2æSd)
Î°Üç
2_a\x001eSgûâás,ý<à¹:Ì¡8\x0000fg9¤eOÖíú¼rß9yõìãrï<f×?{Þ~ùNwÇSÿêÞÕØ\x0019¼§¹3X¿ðvïì¥]½ótõÎ\x0013ñxWïÜÇºzï[ÔÕ;´\x001f$íù¤=kqWïlÑ\x001c:öä§½\x000bvv\x0007ß|åÎÝ·zÞ)në\x0000ß'÷ò0áEÂö(¦Ê\x0003·óV¸^±¡íjÕú3\x001fVµýË
goY×v½jÝ¯V­=u¹jÍÉ+_=uµrÜÆ×³àµ$\x0005Øð-0my\x0015
÷Èvô\Þ£'ßõ­}ûZõó¿ë¬ÙsáãÉ­í·§´^úÏÔ½¤¾ó÷´ý·\x001fÝóµs\x001dc´](ów&\x001dùYÎÎd\x0015îùasûkfÛ¶c&Óï\x0001l:\x0002ðõo\x0003´¼\x000cðÌ+\x0000\x001bû\x0008Òæï¾ïeë«ÿØ9ÏÖßüuÂ¢Óç}­G¥¢½'\x001cO¼u±¼õâ­)?øÄøýO¦mnÿ[MåõvÏóRÁó¦\x0008\x000fßêþìÙÜÝóô®`ïÖÝwïn[ÿßà<¿îËÓÄ/gbÐ¦\x0010KÎ Ò\x0019YÎÊ¦æ\x0013=\x001coÉ¶çÎËOìwýèüâå\x001d;:û¾üx8ñAbmÖîÞ=oô\x0004¯óÓ;\x0017_ê¹ÛÞz'øÞ¬Õ«\x001f.&/»"ÅG)SD(!µ¡9×\x0005ËG\x0017ÀúrØ\x001d\x0018\x0003f3ÆÁþæjøÆôÁ¡µy\x001cìm\x001c\x000b
nGHxm0W
Û:Ê,ÁÜlØ<©"´÷\x0001bß`Ù¶Bö û´ÎPÊæ°?÷óã\x000c1×UÎcS]\x0019¬\x00185\x0002W/~X5ª\x0000å3Ïr\x001398Ï~Ã»ïx)\x0005Ry\x0010°\x000c\x0002Ö$±
\x0000ö$ÉH\x0010G8\x0013Ä\x0000	\x0015'ÙqâÆÄäèÀÊä\x0011
\x0008%Êû_¦0X9f¨¡ùæ~Ó\x0002$®ª*\x001dþJ8@rÈÁ\x0001Îk<µ§i,l\\x0001kÆrÏ²r*ÿ¬$o;í_P\x000bS23 Â$ô\x001cJ¿Dr=Í+S³2à©ª"ØÙP\x0015úiMÂ/4ïF|°­¾\x0002¾R]\x001c²úÏqÔ\x0007Ô\x0017O±YùPM¾¯¨\x001fÚ\x0017É\x0012¹3ô\x001eÑ·Q\x0002u\x000e\x001c®ù(9h sNöÌ&ïÍNGYì\x001cüÅ9»ÉM_Ü¡ùÙjkMEøcFªíN\x0006ïÇ·\x001c+VXÊgéßðýÑ8Hu<Þ\x001dæ2¹Ã2¤I&Í@áy]¶¥ú}K\x0000we§¥2\x0013þ\x0018ùSÙ>hñÒ\x0013t\x0016/X`.";\x00152\x0014\x0019¤\x0010)ù>#óõÆyxÖ×ÓW´n²:\x001båïXvO´[¡9Ó	MF\x0003"Ð>R6*4)2M\»1T:úç*2Mì¡²¿ÎÓ¹Mì\x001aÑ~gtïéÊxµÅ\x000c¥Dg/Á')¥ÒôÑö\x0008B¶\x000enB>!ësëÈ»¹6?\x0011²¾\x0002VWEß\x0012E_ÑÞüºzrzs\x0013g/V·xu\x001cH;g"û$z\x0006úÂ\x001eÉî1Pz|b$¦Êç@ø½ÜqÍÝþ7}\x000f°vh
I;OUFærs|ÀÀèâôuê+qï\x0015?±\x000bÓK#Ïèå\x0015Ù+X\x000f]S§.òh
\x001f7®Ò\x0007GìÓ;[ÍºÖFÖ¼/ø³#¿\x001fêsí¨ßø8\x0010¬-:\x0013,\x000eõæëµH6æÝÁÎ\à\x001f,îUs\x0018ÐÛ[s¶"ßðgÊ#zªt0xN\x001c\x0016{|Ü¡wíX÷\x000e³\x0015g6F-o¿Þ=×ÀßqÁ¾zo¡î½çýÌÄ\x000b\x0016kªØáKÌþXgÀÛÂ¾\x0017¨\x000f
ÆÈ·¢7÷
ï\x001f4Öb½_h®½Ïaö5¥ÐÞBØPB\x0008ZJTíM^8:þ£\x0018^¿LÂd\x000b@\x0003a9ßÌÔ-aØ±H\x001f\x000b&Ï\x00063SÃe\x001dÙ®É\x000c?_[jÿT\x0013|¿6§çBMà{µ¹ÑºÒ&%×W+_©ËëþåÄÌcxÌÍ`I èÉìÃâgJCçR[¬aü\x000c
|ãçX\x0004rÖøë~®Ç\x001fCÎÈÚ*û\x0018Ý\x001b\x0018
XÃDê¡\x001d³ ò\x0016µ¼h.&\x001f©7pãü|\x0016l>»·j\x001dl\x001e²\x001e¯\x001f/\x001b°hmÓèeålbÖ\x000eèÌÃö	\x0008æbz°g&j³>ÆìÖ=#ÁilÅl×9;\x001f4s°8´ªmÀöÆü¨]Îf,þ4>78\x0016àöÆl4²\x0016«3v&\x0012Y\x0013gQ]åÁ]ÀÖEïU-§²	9[ÑFNi7*:\x0016%7³H9»´\x0010®¼\x001eÎó4çFó}¸,õÇöxÖRÖ';Åól\x0003!MD°TÊ÷ì\x0018X\x001clþÇ~\x0000Eyd\x0001øÍ%303Üç\x001cÀ\x0007È Ä\x0010\x0015\x000fÀ\x0013oÑTÔhâG¼À \x0018AÄM¹µ[»ë\x0019ÝM"jåº&[IeS\x001e \x0004\x0010Ee]Eã dÁÞþ\x0019ýçþ\x0001©ª¯ºÿî×¯ß{ýºß\x0010rÿ¾(eh\x00187Í\x0015à\x0005RéÒöÖÔ§æ\x0000SiL±ÉVDBB&\x0014;H6¶\x00131B\x00009~Ûd¸?^Ü>?\x0006õ=\x0001£6ÊR\x0004ã×$QÜ>?ñ\x001d0ÎN(Äu±1\x000cF³}L\x001d1ÃomqËÌÜóhÑÒ 	âÍH(ÈA¥7÷\x0017¶èª³\x001b~H} ­­m\x00198©^8«Q?~f£~
$ÍhÔ¥ úlriúÑXgÊ\x0016þ¯ût-7ö5ënÏ½ÑÃ=ßó\x0013ønRü\x0005S)jo¹ù¯ÚÓà:ùow\x0002Þ9vSµäóê¥_T,þ¼ºïÜ#·\x0002S÷ú¿µ¿4hÙñÛ!W\x001fpä\x0015 Z¹;ø\x000fgÜç\x0014©ÖýX\x001b¹«¢>vÏõ&mAUSìö²§C×{GñåÕ\x0001Ë\\x0008[÷ï\x001au~ÅÓØ§zÍn\x000cÕîü©.&§ôQôæK\x000f¢Öþç^Äûço§úI5éØ\x0005¥æÿôo;*\x0012eý\x000bE\x0000+ö\x0000¬Ü\x000bíý"ÝwÎ#¯\x000c¯/y\x0018½àd¹jáéÍÊ/\x001aWò8f×Õºõ\x0015÷5#oUzÖp}\x0018xÕ@â£»C6¶ê?ØÐÒºrskóïÓï>æyî¹«¨\x0018	 \x0018Çæ8¦Øq8Åãþ\x0015rá\x0015#^G²¼\x0013#>\x000eïmMø\x0006E\x001cªBë?»>:V6~z\x001b­ZTß69ÍJ¾0Áù4\x001d£Óï?ÜÜR»³IWßÚV¹ñÎÝóQqÃ#døuWrlCcù\x0000L_>\x0017´®Î0#È\x000b>\x001c\x0012\x000c¹#ÂaÇÈþ\x0006¶è\x000f\x001fÇw;¹}Â`¤á·­~Ø\x0003å/\x0015£¡\x0012!,\x000e\x000f0ì7rÁß.õÅè\x000f\x0015;JwN\\x0018lÖÂa!5T\x0005\x001f\x000c\x000eLu dD(`ù vVD*!\x0013³rp ¬
°,¥Ë EöðPüÂ¾>0?Øû7C:fÊ\x001bRüÝ`P`8\x0017g\x0019ñÁP\x001eû+Âë&øÝ ôé\x0002:°\x0013\x001cÀÙA\\x001c@ì\x0000\x0012\x0007Ú+\x001b\x001c2n,æ<ïC@7ÔW\x0005S=ëë÷ë^\x0012x·¿\x000c¶â:c¨ÝºÑÙFÕ¢­¸æPõiq?ÌÇoø<üa\x001eám*÷án"Ão\x000bGÞ÷Î"3Æ&F*7Cý\x000cqÙk}g~Ïb=<\x000cV\x000f1Æ Ø2\x0006&\x0016ª|`N \x0017ñàÿÇ\x0004 \x0000èXt\x0016ªÖúsÚß\x0001ª\x0016q {ëÓ«Rz¢þX«+Ò\x0004®â^­(ð9r~\x0015Q<~"rNM¥°[ÿÄéé|j¯ö·3ø_¼$ì£Vs»;V½¿?YõÍ\x001eÏiïc\x0008?C\x0008zé¥^º
ßsHØÓo[/áúôtþôÒu\x0008G#^wæòÒe¡?\x000fþx7{ð³2Æ#ÖÛ²­kíÕÙ{Ø\x0012#kãlñóÅ\x0004p8 \x0016öx±3Äa»\x000c-³\x001fG\x001a§ÏÓ æÍÖEfë{ÉS­	L<Ö¡Ám(\x000b
l·Á­©oj\x00031r'þb\­ömÂ6O³6Î6Æ\Gs3Ä»ÝFÊvý>Æ9	þ®À\x0015Ø}êHÞy¶5]á#úëØòÂxvõ99\x0012·®²ÝÖü¦÷m½;93
\x000fÌt8æwù\x000e\x0018Zæ8X®1\x001b§Í`Î±}Óß'6ùì!Ê3Þ<%¯3À6ÎÐMaÛÃÂ\x001fVÎBI³écGöbO´e¿,>³Å^	dy¢ßL9R,Hû°ä\x001d1\x0007YöU\x0012ôYÍS#É0ãG¼c\fÆßÚyZµÅJ|HñfË\x0017V;	û³­eÅJî±Æå¼Iï\x0003[¼Ùò5ÿ¬µUÿo\x000ei\x000c÷¸8ÎË»kkþ|4Ûé·
úÙäHùÊz¦»É\oM\x0007ëyÐ[Â³'ÖòÏ2\x000f9p$Á\x0017n¬Cùï^R±ÜÔ\x0019ÚJü}a\x001c¼¹<xÕþ<¹\x0000±|\x000cÏØÒ\x0018Æk8Në3e©VÃ3ê¤õ5¾\x0016\x0013c\x0019ãxp?\x001fDJÛ*Ôî-¥îÍWÔnÍ¥nT¿åq\x000cÆ\x000c­a\í®/W{ rµë­*ál_'\x0018ýá´ë·°o9¦aØI²Û°òY[A{k\x00183}ÓæèÄ
\x0018k\x0004d93ôx\x0013dHºÍôóÍí{Ñ\x0012ô0ý ÍÓub´\x0002#¦oc«¡}kiãl²/Æ\x0005\x000cY¹>
A\x0017]Fk²ÿrÎl¾¥NÓ7Ý6Öy\x0001Y'É.
ck±¡ë&êäÏYøÍ°µ£1¦
$[ÙÖÎî\x00033vZFKòËtnÌØZÄ%'4Ü±/á,_ØÁÈ\x001ff\x001e\x0010óeÌÂOf.²3)V$\x001fwÆÚ\x0019Z;oó±¸Ó¤¼\x0014XÎî»Eî²Ü!3!ä.1\x001e\x000c]\x0016ùGÐmÁøpì¯¯¹áÊB\x0005Teâ\x001a¿ÜTçe/ê=½öS-ý÷À\x0015A0±ê{aàsäÜY\x0004\x0011\x0008Wo\x0004½ôb/\x001c\x0011\x0002ÿ¨Kòð× !c	?M
`b:i62),L¶IÖ¼$Õ
)vÌÂDãü(\x0017à>\x0000rüÎ)¨wOôrÞÄ\x0004ãQâ²2Ì !À8ãüx\x001b\x0018g\x0003Ibëu±1FFÛÈ\x001bF\x0012q\x001c\x0012%N·?<\x001aó
Z´é\x000c\x0017UTï\x0004&îtëOuå»~ÑUdÕ5H~ 1¡N\x001fÖ¨\x001f=£Q4³Q?ÎF°üXÌ\x0018jíôFý\x001b×§a¦6êGÍiÒOÙÖÜzøXkkí¾æ_n­{ ;åó/\x0014\x0002_"à@<éWHÌ;8p\x0012Ûu
CµÅøÎ\x001eE\­ü~\x0007\x001aÄÑzì>¤è¡û]O\½rú(²\x001f\x0016\x001dª\x000c~ïýbs{ôË9*yûlUHnÙ¡E7uÚ
ÃÖ|{;bÞÞsÁ¯-)ô\x00194&S*LwrOâK}SxÉk\x000f\x0005d_z\x0018õ	Ë¿Ö\x0018_e@SÙ]õL³ûZÂÊz­\x0011Í¶ÇCÖ|w/bÉÙë¡\x0007¾óóÚrÐ	2\x00002
\x0001V}ÊI>zA^XÙ ÙUV\x0017[PþTSXQ¯-(«Óä]~\x0014[ú8úýk÷"âkÊÃ|þ{ÙÉ»¦ãSSÂ¥ ún·/BàÿÊ$ËÕÏÛÞÒ]¯_±ççÖ5ùÕÍ\x0019®¢7W_F3§}âe_#O8ãs¼=Fv×©Î ?å×È»#Yn1â\x000e;BÎ _G÷ò:$;®¢wþ~\x0003múì:Úpè:Zù°mnZ~¬­ùEåÕìFý=-ú³G[jótW\x000b£ªÌ\x001f~<¬rsuQà\x0017^Éa\x000fÀÈ1}y\Ð¸`V7d¨\x0003a6\x0014v&\x000cí#úÃÇñá=Âýa²ÌÃ`£5?ìòÛ\x001f\x0013ÂçÂT\x0007l\x0018\x0016\x0002y	]ãg.\x0019\x0005Õß¡b\x0015­Lµ\x0012Þ\x001b(wÃýá­~~°°¯\x000fÌ\x000föþ?ûe\x0002\x001bÕq\x0006àÿíaïa{×·×ÞÃ`ÀÆ\x0001\x001f\x001cöÚæP Ã-\x0010Î&\x0001' (ÍÑ
Hâp³¨ÚªI¨
UBQÃ\x0011µj\x0014´´Em\x0012k\x0007°¦¨R($Å.v§3»o×oçÍ¼}{ØëTû¤Osÿó_3³\x000bOägxqeøëßr
@Úõ£²aÃ8;ì4\x0012vW\x0017Â¾B¼·$ò·O*uÅy°
Ë¬Ã2W|EX5Ò[>\x0004\x00058\x001eÁr\x000b¯uÏ'Ä\x0000Í\x0010¢2ºA@\x001fE\x0012"$1L\x000cQÀ\x0018"¦\x00080@R$HJ\x0018Xx\x0008l¬\x0012¤í4L6&Üùâ\x001dáâ;2\x001c ÷eÈØD\x001dÔÚ,ÐPâ½ø84­Øó\x0006Eë=ö½m/oÚwÊòam¡Ís×á7Jz¯¯Ä÷zýÈ,x\x000c¿_3Ò 0Aëc}C~;²2Å\x0000OÉâïpý2ð¾\x0017yÞá­å|\x001fHýPWÕæX Ô¨÷èF~sÅ:wB%è±÷ÇÕAÓ»4Ôo÷Å2¾ÖÕLÃÌÓ¿LÔ¹ÈÍ\x001bÝOc±\x0008é¯½\x0010kû"Ø@l¶âßWûKZ¹R\x0017ëÜ$¤lBøúC\x0010'N8ÑÀ~\x0013\x0019c}¯Å	\x000fç\x0017È¤± !Ö9\x0014'zØ.#Ã`æ}Ã\x0006]\x000eÞÉ&"­Ó}¬1\x0016¡ÌW;WíÞá\x0013eùÁü©Æ\x000f´<ArC\x0002LI2A
¦Úlô¬º¿-é÷ÔE|ãL\x0019¾qÿ¯ß$U-)}ë§bÜf\x0003ÖiÀõv8\x0005/¾¶Ëc\x0013\x0015É\x0014\x000e\x0016LªÂÒ:Þ\x001c\x0004ÖÚ\x000c]ðêè\x0012uÏÅe8ÎÓWiO%=C\x001f\x000f"\x001buîÃkÓ>SS4NÑöY¤ãjm
æ«`ùÇ\x001fL×L\x00188ã\x000e\x0008¼\x0003\x001c Çw7ÐøÇ¥sTÈ	E6K/é^Òqº\x000cXCót¤Çé5jí\x000b°¶CÒÇ]\x000buAü@ûMûA6Ò\x001b\x001f*Ö\x0001sTÆ¶ö§Ô\x0006©¿´>Ar·L\x0017¥8òr¯*G¥º+Ä'¼y¬<ãÄ\x00153fyqeÅs>TëÌXÇ;;\]8yÃ\x0001K7<ÞýÀÓgâY\x0008â+YN(ä\x000c}6¸g\x0011¥s©Æ_¼¸ðòg?ïL*å\x0007¿ÁÖÉÎ%KG¥sþùÔ8ùíZç4Á'\Ð¶Ñ\x000e­
<hkôÞ¶ÝÓîhpÀ3.ò«vø}v
[\x0007P)¡B\x001bØöôqÆHÛ7Vënm`é«»9õxÿr¬Ç¹©û¿\x001fÚËÒz®¦ö^)ñÒ\ê¡çJ´ÅÒê)Åy+IE\x001de©w.\x0014öÕX5Õ @	ð÷õ·uc¤\x001d0_/§S÷´uý²¶¤O*£#W&¥?¦´'O_%û|}Ux^^ô´Í\x001aw{UãÒy¼ù´L7c~\x0015%Sº®Zç¦övSrè=YóYréýdúPº»)ÝÝ,Yú@]Xz\x0005ø!H,¤Ðý´î,;C¶\x0017\x0012ûé}öê9r8qe!Ë\x000f\x0005_ñô¦ó/Î2ÝY9Åñ,6
ñVÒ[ÿúÀº,¼Ñ{rü£$Cv~\x00181£ýâGÁf^,é}ªq}".SÐßËue\x0016øç\x0016\x0017´Rï¼ô½÷ö4\x000eü6x{ï\x000c«\x001f"%ë-\x0008 NpHÿ1JF\x001e\x000e\x0005¥\x0017Î&.ÉH¥)àgI\x0010\x0016«`\x0011Å£!²Eò\x0000\x000bT0?\x0004¾Ááë\x0014¤o¢\x0011ÿ®×{ÉÇL7{ûk)æa&á¹yz/d~i`ÅÜ ÌIRÇlshÌ
G(fâ\x001bsnÁ8óæ\x001fµ×\x001e¸VûM4Û´\x0013%Àv|&0æýýéë>î9y¬çþµ#Ý÷?jú¼ëÝgîü·iÅ½ÞÇu=½¤»ÿá¥Ý\x000ff.ë~ð\x0008¥]¸ìêµ¼«oÞã]}\x000bëºû?ÙÝ·rMwß\x001aÂÆî¾\x001d?ééûóù¾\x0007·OõÞ¿µý\x001fw/8ßí+_a\x001dÎ"Èý
Ê\x001e÷\x000eÊ×C\x001aÒös\x000es^,Iû4æ\x0015Ì\x000eÌ6\x0004Ù{ï\x0019z£}ÄÖwn>´ñwcw~ðYÙ«7º«ö·|>iõ©Ë£*×\x001cMK\x001f¹D¯Oÿ\x0019MÆw@\x0019xÿuMðd%\x0014ÍÜlñì\x000f³j;a[ðÂ)ûã/ä¯=ñ§Ñ[Î·\x0015?ÿÞÍÒ=ï6áPÛ&\x001f»Ñå>výûHËÝ¦Kÿ*ÝsùvùÑÖ/*w\¾U:çä\x001fmÉÏ\x001f×Á¦W`Ä3ÉÛ/}:éÈÕ»\x0015G[îN>Ürgò®«·Ë×·Þ*ÓÞWÐÙÑù&³óC!«óC
\x0001·!
SØÙÚøñE'o¢\x0017_GÛ^ý\x000bÚpê\x001aÚqú\x0006j:Óv\x0012ÞlG/ý \x0015­õ\x001e ?´ðÄ_jÁkò~Òg]Dåio£\x0014¥¹ÂY$,ºj\x0016ÿ\x0001MÑCBÈ{Ô_F_;Óvýâ\x0006záë¨i÷­þ§q¾ÌùfWß\5ü"¹ôóÞ/¯ý¬§·óP÷ý«ßïG×W\x001e?±Ë£éÀ8\x00059¤ß&\x0013áQ{\x001al)Ë=5ppêX8<½\x0018\x000eàrÿ¢rpÚXØ\\x000fcô\x001a°sl	\x0015"Pe5BcË³\x0007!R]_ZäñÙ>ìÃ¦ÊÑð½	# a\x001d\x001ecúQY°bD&ÔågÀ\x0013\x0012êò3=ýj sÉúú,Ìgó`}±\x001dÖárm¡
*ÈV-k¸P?2\x000b9Ò "ÙàÏËpbêÂØ0\x001að~B\x000cÐ\x000c!Ú(£\x001b\x0004ôQ !
$F!\x0002a`
\x0013s\x0018$Ir\x0008¤ Ç*´S1é,L.u?Dãí\x0018N8à-ËÍ	°\x0018ß£Ïá7ç\x0000~\x000eMþûí÷bå(Ø8Þ	«GgCø¦Ñ÷ú*|¯±yÙ)PbÔûßÝ¡ôMÜ¯Új5E¹°»zÇ/\x0007#ðÏ\x0007/á÷}s©\x0013ÖÉñ¿ëÌ÷
¿Õä¯Í±@©)\x0001\\x001a¯\x001f\x001cÃ B}_	÷^\x0014ÿæ
÷·)VoÑ`¾?ùóµ®~d\x001aî¤¿özÎE2)òÏ0}ºÆö×÷
±¶)\x0012\x001cÿ¾c4-X ?âßÿç×ñwc¬óXðõ N8q"AHB\x0010ëû,NdX¶"}¬ó(Nô0/Gú\x001fÂÙÞaÌu8\x0004\x001bÞ-\x0007c\x000bB\x000e£¤×Ñ}¼qÞ\x001cL^7Æ²·¯.j}\x0013<Þ:ZÇlC\x0010 Âh)I&¨6\x001b¡\x00065bÝ×öô\x0018©ýÞyó¥kür©²Úl¬§êI²~\x0015&\x0003\x0014h\x0005p\x0010½1N\x0001\x0006êb@ì³`RD,T)ÅÊ\x0018gÍãÉRKïc\x0013\x0006ôtaò0
{(aaÌcõ©%KÍ¼Põd¿`>\x000f\x0016\x001b\x000b\x0004ú%;ØÞáÚ\x001eÌoJ¶©µ7\x001c¿ªñY¨ñå­Q\x001bK^nsí3ÏB:î»\x000fü÷\x00030î
½)C«íwJd\x0005Ý#Ó'G¦\x001b%+7a¯-Ã~ÖZZg¥:í§\x0000(ýèºÌÇ\x000c9,ù\x000eý<ÿ²tUÊ\x0011Y9ÄZÃ³«c\x0008>÷Çò\x000f;,\x0003ráÿ`yÂÒÓAÍ÷éÀ¢LilYþaøsÜvnTÄQ¦»JgÎ)ÞXÀýBQûË|ÃÑ?@wÖ¹QÊYÆYñÇWáÜ¨Íå`þVÒWv6\x0019ºód«½\x000bX9Â;Û¾{)XÞÒã´}Júótå+ýäÿÂD­\x001e~»0\x0017:¾kÖ<hkÌó>Ú\x001a½ýlqÀOgg\x0001ðÂaö°Jn\x001d@%
m`Y)mkÅµ¤\x0014ÛRÜ¾~Î\x001c²Ö·þ!¬KCq2|z¢Ð:ÊÓzKS{®X{1¸ìõûJ­½¸¯·y|jOóxkïÕñÖ/[¼åJ¬¨¥$åâ6§~yF"üýr\x000fú¸\x0003øþî\x0005w\x001cp O9\x001e\x0001EAE@¹\x0007HO|DÑ`\x0012í\x0004ñ]M\x001a«ÕÄZ5Ñ ñ
&tÚÆIÚL}ÚfâXm¦N£`\x0010\x0014\x0005õ¤í\x0010\x0011å}w²Ý\x001f÷»ãw{»÷»;@ìÌÝÌgöñÛý¾w\x0017RL§Sâh\x000f\x001fMÒ\x001e´\x001cüqw+±ouØ:Ú\x000ekmóÖ<XõðÇø\x001e°n«½Bzµ<,zn^bÁ7=g£\x001e\x001bãè)ßøûô\x0012\x000e)y<\®´ÇN|M>M¿ÄÞ7=fÍl;øëÖ\x0010Æx|IöÓ¾ãù Å[/!ûaÓM!?\x001e|¹\x000eyÇóF±Ç*Ç.þRG}üØóãçðâ\x000b?.\x000e5$¥ÛçJ|IõC;\x000bÔz¡äÇ¡Fù5#q\x001dÆºÂm&íb&\x0010sR
Øùã$6¤zçÛ`PL±û%\x000bÞ\x0005¥oe0#\x0001§sÐ{ÿ®Úî·GmaµßówÁ[\x000eÉb» ¢·øÈz\x0008¼xq\x0017¿|(é\x001a|\x0016$44ÈgêFæ\x0005\x0000ç\x0006¯pÌõ9\x0004rYü]g¶\x0000³\àe\x0017`×ME\x0017ÛP\x0019\x0000QR\x000b>\x0000LAs3Ñ·\x0019<Øq\x000e\x001f¾\x000fæÖÆ¢}ã\x0014=k§cLS
Có£À}cmê×Ã\x00147ìI\x001c\x0013_¹ú9áN´¾ºë"\2ý38\x0006lFgb\x000bm\x000bÁÈSæ½Í\x001d××ÙQ[ÔÖQõIKkõ\x001fÚÚ¯nÜrhõÃ¦+\x001bß^ÞÔºrÙ£\x0015ËZ{hlY±¢©eÕ[Í\x001d\x001b~Óf*ÞÕa:öI§ù¯4¯~a4U\x001d7\x000c'M¦\x001fJLæ\x000bOÍMeÆ¶ÆÂ{ÿ.ÿ¦#\x0003FºÏX\x0018{\x0011\x000eMþ\x001aÆXÇTÎ"J\x0010Å\x0016»v´HYvoØþ4ÅÕuû«hVU\x000fMýYa ¯j2ú\x000fo4\x00105@\x0004XÆ¢ÿBYÆ\x00001È\x0000\x0012FZ
º\x001bÒ\x0011©]Ë"\x0016é_p(tÈ|YLú
ù°Ö(³\x0016í
y}ÏÙ5%UI×\x001aÒjµE·hª´ÅUµH·æÍ¯k\x0013c·ýYÎl<\x0000Æ¿\x0018½èV]ÚÂú!¹wîGeÔÕ\x0004Æ>øÞ'´¾\\x0012b¨`Â\x000c\x0015"+!r\x0010a¸!t¿~øî:ãòSµpûÛpKÑe¸êà\x0015øæ»ð/Ñ\x001cßv\x0012q\x001cÙöð]¸¹à*â{\x0016J»c"\x0014;\x000cy)åÿ\x0013Np	¦\x0008íÏû\x0016{¿\x0002.\x000c>\x0007èb÷Lý;L?z\x0017nEö¿ÏúP\\x000fW¿Ñütæë­æió[ÍÓxµÕ<y}»yÇ\x0019ù§O;:k÷µuTîï4UMZºt¶\x001ae.é!\x001a£\x0010\x0011ñb\x0006¼\x0018ì\x0007\x0016\x000f\x0004[5CÀþñÉ`ov\x0012Ø=\x001cì\x001a÷lØÍÍäá`\x000fb®:¸ÛöhÌ'Wáû(\x0015ùq!àC}"Ø÷br\x001fø`±·!5\x000eü"i0X\x0014\x001f\x0006ò7\x0010ùq¡ ÿP°°`eYd`ã¾ÓÑß,\x000fíÑð@ì#ñ8¯Vâ\x0010Àòc\x0011¢\x0001@Ü\x000fHú\x0001i/õ\x0011>\x001eàÛ\x0007È=@á!~\x001e t\x00137	ð@\x0012\x000c\x001d\x0015\x0007Û\x001f\x0008G\x000cæîØ^Ü%Ï3Ñ\x0008ö]gß²8\x0011\x00032U
P0$\x001clÎH@oYå
ïãwz\x000fÉ¶[Õ#Õ`qBå½³¿Ó\x000b¸{½\x00001;R\x00052ü}»mÄÿ\x000eé×ø\x0000Ë\x001bÏÆI\x001f¨\x0000+\x000f\x0006;³\x0012»cãéß6Ö¿Q>Ê\x001a\x00066\x0007«G¨Á\x0012\x0014ó|îmÇß6K\x001cÂºßãè}KSÈºëQÍÙ5Ð5ä\x000e¬ÝìÛ\x001aÉXî\x0001\x0006\x0008¿}ÏóÛ4oR¿CÖ¯ÆvAÅÿ\x0003>=$Säæ²)vë'
\x000cd\x0005\x0005Èk×}\x0007ÚÞÂú eO÷çýÑl½\x000ft­v×ëu®\x0019\x0008¼xñâ¥7ÈR¡h ï3/½Cý#3²¯%/}\x0018¨\x001a(ï×9ø±,\x0012i@D:!Â5ÐW2#<×þÐdæñ9v\x001c\x00133 Cî\x0003Æ)\x0015 K)\x0007Y~rÉæø}1oO&i\x001e÷ù2IúXû4
_\x0010ìBvÇ ¢9b\x0018\x000en\x001cðG\x0004`\x0004\x0012æÀ÷\x0004RZ¡½Á\x00085"³¿³5\x0010Ûç­½ñËÕµ´xÐdÒô¸\x001a7!;Ik]É»úê@È·¾Ì§³\x001c¸«O¨î\¥;9s·\x001eØó\x0011`Ï},ïÛÎ=c?¦õq¬÷\x0007í\x001eÁ×á{øòIr\x001cä\x0013ö8ì\x0005ûHþ8ÌQÆÎl§í¥í±ÛÇâ\x0003Í\x0018@¶ä')^V\x001bH9ÆíÀmäçÙÖRlpf\x0013-FÎìv&æNß¶9.­§ø ¨vî°\x0011ÔK\x0007U\x0006)zpð_\x000fü9Ë­+w\x000fñÌô\x000bÄ\x0018K\|­ÐÙ³;\x0017\Óî\x0000gõ@=³NÎ\x0011\x001e\x0017^§gÕIþø±&?\x0006\x0010k\x0002'^_$¨¶SrG¬_J¬\x001dâK«GÊù\x0011:ßø¹ÁsÃþ-»cL\x00100¬\x0001ÕkÔ ú\x001d(ñ_Gò\x0018 U(Àóö F\x0001Ð¡\x0016¡\x0011Û·vs\x001cZv½ØÒòû:'h	køc=b\x0004²eA\x000cÜØ ui*SUª³"%ÈxãûÑAÆÊ\x0014©\x0012õ+G©Ø>ÛnZÇ¨_\x0012\x0004ï¥ª\x001a¾JRì\x001f?\x0019d¦\x0002²6O:i\x000fZk+q#­qÂ¿ãrHëHôÛæ	6á-MVJ¶ê«¤\x0007=¯íFjA÷%ä>_\x000e>ÇkÇëë\x0008}þÝzÂwg}þ~|>-vò$ÂöócDô'Ça­à7Á.jËµ¤\x0017!ÉO=f·]]`yÆmÀóCË\x0007-·v`y#ÅÍ®\x0016	õ¡#Øä¬\x000eI>à~êÜYÍë	rõCÈ
\x001f¡ü;Ää'ÅFÔq=^¶½Ú¦åÜN@\x001dÐòà\x0010kB¼ø¾g"RÐ½ïçæ[¨ÛKcÁ­µü7\x001eïÕvo¿ïÞ\x001dÎh~ªÇvAEo¸\x0002}\x0001À\x0017w\x000e¢'½«¿gIöw$ó\x0002\x0000°ç\x0006¯ æö9<rùø»Æl'Ì"ð²y!frÌàÆè_htÏEq¤Ê-ßpØµãÑEø\x0002om\x000cJ¼iJÏÉñ£3À\x00147La\x0012	È§¼\x0016¨·\x0017|ô
\üâïá\x0008°	-Ï `NAÑ¬ê§kL?6\x001a¾è4>8i4þ·´³³ñËöö\x001fµµ×\x001dmk¿s¸µíö_ZÛn\x001dnk¿Æ5ÇZÛî\x001coï¨=Õi4\x0018Í
¥&sã9¹	ñ¨Ìd~Æ
çÍO\x001bÿöÔØüù£ÇÕK*þS\x0018z®=\x0006 ½g,\x0001Ó®À´°óPÅ§R8(ì\x0002)\x0007«\x0003
¯Ö§\x0017U=Ñ\x0014V4¤Ï+»\x0016\x001d´x»\x0008dÀþ÷#\x0002\x0019¨\x001d\x0018\x0003|ü&0þ¡ÓÅþñy"iØ44Þý]Âè\x0018hÐ8Í2'Î\x0004"\x001eõG"R8ÒT6\x000e¨"g\x0012²ÞöËYw(|]iUò[ÍâÛO´\x0007n>Ò~\Ó¢{¯¬bdÚù\x000bJÕý1ry¡B\x001ab¨\x0010\x0005Õ3\x000cåL¡Ed\x0005Í¨\x0007ÒE÷\x001fÿ¼®ë½¯jaáªàÆ}áÏ?¼\x0000\x0017î½\x0004ï¬èZ¶ö:÷«ï`ÞJ¸êè]¸åD-ü\x0000±íØ]¸5ï\x001f0[0f\x00043yí[½á:|MYÞV'±~ùì\x000bpTÕ\x0019ÿ½ûÞl²!¯}oÈ$G$i\x0005y)o*L\x0005B\x0014éÐÖ"D\x0014\x001a @ PëXv\x001c:\x0003:\x0014@«UéµSÛj	HÐ¦ÒÖ¡EDj3`²áôÜÍ½áîÙsîÞ}äÑ½3ßsÏýÏÿÿç?ÿ9ÿ.ôÂ\x0005´~ÊiT jHðê3¨èp\x0017Úr\x0014û~ô\x0012Úþü'èÑ¦/ûç.íñÏZÖã\x001dYXî}·úãºöüÍ¯º\x000eÞê=¿ãÓ+gK
\x000b=.¼Cn\x000eaÜ:0^\x0001å&\x001dÌu¤Â£\x0013|°§¶\x0010\x000e6\x0016Ã¾úq°wjÑÒm\x0008vn\x0018hÛðØºBØ][\x0000»j
`gu>ü\x0000³£*\x000fZ+saëä\x001cØTá\x000bô\x0005ùXfFfòàZ<\x\¢¬]/3ja¡+
6OÌý¢\x001fQ­\x0005\x0013X\x0003æ8ONÉuã]°:/\x001bVø2`¹/\x001dVädÀÊ\x0004TÇfÂ7½éPo3A\x000bìý\x000c\x0007.q\x001b&F\x0000Má\x0008m\x000cèâ>J\x000c1b\x0002S#Ä\x0012%É\x0011`\x0014\x0016\0V±MÅ¤a²úÆ
Ô9¯H<îÑ\x001b\x0006j@>\x0004w¥[à;Å®@íÜßP\x001c¨«ñ®ÙR}ÜkðÃ%ÎÀ½\x001d¨m¾Ð;}\x0015þÖ46\x0003\x00169mPm5@®x¯»1>B÷áK²&Å\x0004kÇ9ñoØ~ßH¿S\x0018oÂ¿Ö\x00169\x0002kdÅ@ªm+±Ì\{*Tõø7\x0017\x0017øÍ2\q\x0017ÒY\x0012Îp>Z»Ã^£FKMµ.
W\x001dJßµ[ë½Lÿ/¸?¿nÌ8ö>yÝ:ÞÐØ¤+/\x0017Rhð\x0011Æ\x0004RZ[µYoÖ´¿ñÂ¶ÿ\x000e\x0012OâQù8ÿÚm\x001cé\x00150-@øZF A\x0004ÑbZ4#}%\x001dË\x001fé\J\x0010?,k\x0010?¤9sã?FûÄIvlMN¶\x00089N#ïjm
\x0007ñð%¡Kî,L\x000eÏAÙ\x0000õ\x0016\x0013ÔYPk6âÖ\x0014hi}é]Þ\x0006È\x0013sÈ¹\x0010v¥¶ÞlÉF=ä$qàÆ~{0n\x0011\x000f7Ðz1NÜOÃXMÂ·häXóämè³GôW¿->¤\x0010ý\x0014\x0008õ#5ÓÆÕè%ý&ñÚhý¢ÅVm¼"Ñ­4NÓ\x0017É^Å3îäRNßÒ1nîÎ\x0019\x001a<ûpç\x000eî\x0001©/½c,9²O¶\x001eÑ\x00077\x0010zIýÀ°Ï²)[\x001by§ë¤}\x000f±É\x0013©Ð\x00072J¶\x0014ôë\x000eò²\x0007a÷â\x0003+®n\x0006´ïá|¦Ù¤Æ\x0012\x001b¿\x001e\x0008]\x0017-\x0017\x0006¿3r\x00193ÖZIÿ¸Ð\x0018ÈßCò\x000bõ\x00167j³â¡ *\x0017é<Â/Zì¨¹@Û\x001fÒÂ\x0019\x0019<Ç´¼¡Ì
w\x001eXç<Ü½ ßËÜcùFÙ[Z\x001e±âJó%Ã:?Jg¶/\x001e¢OÍC">Ôý$Wüa­\x0015wJ|Y6Yg;Üw¥>kÏÉøÒd31wéõðÞj'tµ¸àÂzÌ#N\x0011\x0008î¯wÂ?7z`Ãx\x001bàé£î\x0011þOÔò\x0000UJÍ@[%{¯½WkîP¥	~Æ\x0006Çù\x0008dE&`¦\x0006Nmpðèr«ÿb¹­÷R[ogijï¹ÒÔ¾Î2¼¥ö±,ú¨Ü:Ë¬g¶x´÷gè¡\x0018ÄµÉ}ÓÞ¡JDþNöÆøàyò÷j­²nRçà\^6ÎÓõ\x0004µ<a¿£fj²6!65¼\x0018#¡¯\x0015×Pääã$AsåóµÄ8¡C­MRNîs5Ñ¯&ík	¾\x000fÌiCÇBú´5jÙë®¡Ø§ÆD\x001bj&Cö©k¡Å%Cñ¥î\x001fmo¤¹òXi):äß(zkø`H;Ì<§äUÈÚX{LÙ\x0007ê\x0013yOî/-6¬¯*CÉmò\Òö!k/Xù\x001b\x0014[.sÆôrw0Ï#a·\x0004×\x0000Cuò!_*üíq7QãY}WPÿ#ëy_¿É{\x001bÅq\x001eÂ#H \x00128\x001d\x0002û\x001f!Öü\x001b.Jß|]¿8%VÅ*X$²0J\x0016\x0010Ì'IVÏ<
s#ä^\x0015Ü#c\x000cá}6¦\x000c_pNí\x0000náî3±å+\x0000.,ã\x0010)Ð\x0001L3c=\x0016Y\x00112Ó\x001cÊ\x000c\x0005îé
LSàëx=kç¸¶\x001eëùÆÞ·Ñ\x0003s\x000e¡I°\x0015]1§0í\x0008N"ÝÝ·¿õÓ\x001eÿ_^ï÷ß8å÷Öáï»zÒï\x0017ø\x000c¿_ÓÞç¿z¼¯ï_\x001d¸\x0015ÞOâ\x0016÷ÿ-!Ì\x0003ëy­÷«+\x001bºÿû³·oÖÀ	lë\x0003ö\x0002à÷Ó(wÙ;¨Q×´ïíaèÀ\x001cï¢CÝmg>*ûñù/ª:wµnË3Ö{oêW;r¼
ÍÉÆÔFÎÜ\x0008®\x0007\x000cÓ¿û\æÃïæ?vº»¤å\x0014/}ù]OÞô\x0016³V_ï2H*\x0018w\x001f?¹y¯mÉN¹ïî7¾ñ³7Yµ|-þGV\x0019\x0000 \x00023\x0011t¦¯Ñ:
Æx\x0017if¶¼½í·/?xþÊ\x0003×+=£ºõÃke\x0013º/ZÒ.ÿ\x0019Ò/¿Ïe\~?)Â\x0018ü=÷ò»oÌy¥\x000b=yø\x001czâ'¿Gß{ê-Ô¼û
Ô´ýWhù´#¨,õ\x0004²$u\x000c¬=ã×(å¾ß¡w¡Í¿ø\x0018í8ö1ÚùâEôxãY4^ÓÂÆ®=8ö
xÞÁNôíÂ7\x0019{Aî\x000c*9t\x0011mZû\x0007t/\x0017
º³¨ø¥.ôÄQì÷ÑKhû\x000b M_öÏ[Úãµ¬Ç?[	,3sUåÞ¾NsW½yëü3·Ñ¥\x0007_yµÍc0èxgÜ\x001c@±YVXSä\x001dUyðtÃ¸\x0000ûêÇÁÞ©ECB[}Q@¿`§
¿ï¬ÉïOÎÍ\x0013sà±r/<2Þ
kìÐ	+s2`$\x001dcVÍÖÊ\8ÐP\x000c»j
`©7\x0003õZ\x0010Ö&à"\x0010Æì\x0018\x0007&'
³\x000eæØSà¡B\x0007lÇkßõH>E³.)fÛ¦äBK\x0007Ö\x0014dþ§\x0007ü\x0016ú	è4	àýoOR£6\x0002\x0018ñb\x001c\x0018\¦\x0002\x000f7\x000c$\x00108Ã\x000f\x0001Ú\x0018ÑÅ\x0001}\x0018bÄ\x0018\x0005¦(1G%B#Ä\x001a\x0005)4¸`¬b;\x0006qÆáÞ\x0018í\x0008w£TÓ|øðO²\x0018`¡+
ZÊ=\x001a´j¸¤³µ2\x000fÖ8¡ylæ@}£ÜéB}\x0016îôEN\x001bÔ¥ ×\x0004|vÃðÅIú3Õfµã\x001c°§¶0Pç£MTãñú7ºau~¶Xßé1â°
ÇiÃ\x0006S
àÅ¿=\\x0010ú6ÜxÅÜKãkêHÔ¨ÑRF¢\x001eE[²¼¤÷ÞF¦\x0004£\x000f÷ç×¦ùó5x\x0012O\x0004¥©\x001féÜ\x0015°ÿ	á+\x0006A\x0004	\x0012Du#Òô] v\x001c\x0017p=Ð|>%\x000f\x000eëSd\x001cÊqh×Û9\x000e²±E»
²EÔÈÆ\x001356³)-é/ÍÚ<µ6Y:ÔÌÏP_óy
ÔX0ÕbZ³\x0011êÄVê×ÉÆCÉÓä\x0006õÐôRúµòq¹Nó\x000c\x0006ðáÜqc¿=Ü\x0000¾ìÝû6U$EÄJY)ã¬oJò,YdÑ\x001fè§à¯àcº
]Ñ¢ÆÏ¡Ò¥dC)ÞÑø\x0002ÁûËÚ\x0007Z\x000eD³f5þªÍ\x001bµzXë\x001b
Xç$\x001eù¢&NJ±ÊàsNÞ\x0001r$¹ÁwÙ=AkÕ@Ú¥}§ö¥¹
ònÒ/ÆºÂ}céeÝJ~ÓÖá¦Ì\x000bÚ\x000b-¦n½>R'sï	{Äô?$oÂì\x0007M¬KjòHIÐú\x0019>\x0004Ù ä3-ïBbCñ7(Ö2\x0010½\xY¥ü$®j¿Ób+Ï »<\x000c§eïì\x000bPÓG\x001aÀ¿\x0007ð\x0008\x0015,\x0000
X\x0004ËÃ\x0017IÀ\x0007Ô'¾m±½VTzêX½ÑAGk§^«'3­\x000f\x0014\x0014:c¯Þ]gî¦wz­¨×i=u¬ön¦UK\x000c("¨çØªTH`oÿyÍf÷O\x0012:üg~³¯o¿ïÛo÷ÛMXû(¦uNX%w\x001d´]Fnéeæ,'<NãÄ¹u'fî'úlsý\x0016¹³9ÁÙ»XLw~òì\x0007±3#vVÜÉ
Ö\x001e9!o¼sÙÝ\x001b)üø,'
®®Ñ±\x0008³ÊV\x0016©m¥«ëÔP5I
¡\x0012)<k_$FÝÒ
È\x00002m¥NjE+uÔím­mº®ë\x0008#qü3±O\x0015"üZO¾\x0018\x001a2ÂM4\x000bíÕ©*\x0013ÆRZû,u\x001a¬!UêÓUM_$\x0007mÎQItXç0°ÚÑÊ±-¹Í¦Ü¥_æ\x0018£å,}2gy-c®Ö/sÌí¶Kùc¡¡í²üÒQã:\x0011]zÛxW)#Öak2dÛ\x000e­ÔcÃ\x001a·ëÒËíÓúI;]¾Òvdµ9ÉÈeÖÆÐå2µ>Özh=¸º¹}d\9k¡íÓ{ÂÚ'Z\x0017kOÄtºì\x0019¥u\x001eÈy´\x000fÌ=óíºøÆÑËµMëåÅ9u.ô\x0014¼x;ÉQ¹Ä:».9Cç
g\x001d.ñ§}eÄT'wígUOòö´Eï-wo8g\x0015\x000fú®rÑGø"ÜI~\x0000\x0001\x001e¾&jàÊ\x001a
ñ®«\x0019uuW½fµ]½:\x000e
¾?ì\x001f×zBt5Â.#ðáÃSÂK¢§ç¯¯H¸s'0oì\x0008¿WB\x0001ì¼ÌaÌ¦E\x0013â\x001e3	fxÀtªN3M©n Èå\x0006\x0003Ä+\x0000¢ñ§[ë9J<ûólL±1\x0019êï\x0015ÊdÜ\x001eå§\x0012r4\x000e&¹ÁD\x000fÀa¼äâµLMHV­ùøÚ´Óhñ¢ýhbà&¤Ý8?`*m\x001c¶	ßtj4w}ÜÒvñ\x000bùvU¹éhéþ\x0011³é^UéÞa³éî~Sû­?µ=iØó¤í
¦v_[ÛµÃ\x001dí÷wvï\x001f2üK«©veyïÈs¦Ò£øþ>HØ²áW$¯|²
¿E\x0013$®ãL°ÏýößU¼}¬:¥ÂØ¬-1Þ\x0019S|­nnñÿ\x001b\x001b^Ý^×»á|}Öòý§-ÿëégo¦íªûY»»î±¾¼æafñafùåÌ?|{+cé§'¾Vö÷!\x0005»+ã×~Y²íò£\x0011\x0015õ­º\x001aÛôïº¢\x001e¶\x0010túé!2þUùØ·*"üùLââON'jÒ\x0016ú+r ¿´JSj|Yf¸?ªÔp?³ÂÐ¬[e¼ØP­¸~^Òÿú\x0005?~×ÏCì
CÀ+òöü\x0017\x0015BK·~~»éxgÁ\x0007_¢ÅÇQAÞ'h¤l/Ú÷Å¾GBÌfAÚ¿]Aï\x001d¨C\x000e\EÅ%Õè-í¿Ñ\x000bnÅÐò\x0015-­FËòÎ Qbré'Pü\x001fkÑÚ­\x0006´Tu\x000c)|rÓÖtì3öuÓ?êÐÆýØïò\x001b¨h~KÇô×\x001e§üæ±9O)XfrQ«éý&ó­ÏÚÛoî|b2<1ýûæ¢Y\x0003ð-\x0011(¹±\x0011°nØ Ø\x0004¥ãR`ÛdØ:zH¯²
Sõ
\x0008õ-bÝ`X1\x0010V¦¨aÙhX<8
\x0016ÆGBÁÀ\x0008\x0017\x0017a)ç\x000b\x000c\x0005"ÌÃ2+j,z\x0005ß·MÆë\x0019\x0008ù±ý@\x0017\x0016\x0008Ãþ\x001e¤\x000c¥ÂR\x001f­RÂ´(\x0015,Hx\x001eRcáýQ	\x0016¿¼]»cmCàÃ¬$xwø X×S\x0018ß\x001f
â5ûïÃ\x0010/¡|)"\x0018\x0012e~ Áç3VÒ;Äa\x0006`¤`ý$O\x0019¿>Dú\x0014õ"ò^@Ñ\x000bø÷\x001e\x0010è\x0005A^¢ô`/\x0008ñÐ\x001e\x0010F,Tb-\x0005ÃDaÔD¾÷ÖÝñ¬\x0011#¬\x0013Ç \x001a¬íTüOVÁïªaCf¢åýÛ1öé½áB}\x0003~37÷Íþ7¾Ë\x0017\x0012÷ù\x001cu8èñ;<Xn½Ócú(N\x001a[\x0004{ÚÐ@X:Dßç\x0017¬ï¼7ë\x001fcý}±et\x0012¼72\x001eVàß-Âú­¿SÄßµBü»f®æ9ÈÂqöîÛÖÄÙXï4	x÷Þý\x001aß§¾~zò\x0016\x0005I¢Ï\x000bëDA>\x001d\x0006|÷},NÈ0ßçû<ÿÔõ×\x0002é3,\x00104\x001báë\x0019\x000f\x001f>|xC¿=HñKßc>zé=È÷½\x0007¿&ÂÞAò§}fÔùùÒ(lm\x0000Æ^°úÄpGÞ\x0013\x00191YzÌS_Yú¢DÚ®'ÒÁïóÁr\x0019d\x0007\x0007Âè \b\x000elí,{\x001dEôÛûùYô<\x001a²£/KdþhÌp\x0005\x000cÄÿ4ØïXLPJlàºðÏJXW\x0018&A\x0018§NË°ÆxòbØ\x0010|µù(øÞß¦/DD7í\x0007«îÎzXr¬5Ùs7\x0006îÆÔSÿ=µånÌÜSoúÃkóöÃx¸³ÞøéN{²<=B¨0Ñ`Ío!×¼·ä>8rßÞ&ï\x0004»,1æ¤KBAÌqÒ#á÷Óu-¦o\x0012gÿhywæÙåé&cÃÓ\x0018­ö\x0013kÑ8pö\x0017Sz\lÏi½±À\x0011Ï/mn\x000cÉsCÙd­ç\x0003Ï_Öy§çÐ~ðü\x0012;;¬Ø²ìðæ:\x0013^\x001c`éãåqW±Nl\x000cÇ7±üp¹\x0017xqæÅu¯t\x00177ÈÚy¹as3ka-Bo,á\x00033é~Æ\x001dÂô±V1ÅrÁÝ¼âå57\x0017x÷\x000fã\]±¹<ß]ösX÷V·>us'å»}\øÍýz\x0012®®\x0001c\x0006«ÔP_\x0014\x000bÙáð¬}Aá~\x0000z\x0019V
ÑI­u\x001dQ'Û\x0016d>BV+2\x001e£åGâØ¦c¿VÄ)%7?O
B
\x0019á&cZx{uªÊdHU	%\x0013C\x001a.ÓTV9«<ªÏè~H\x000f;»~<?Òß¢w`KÎFk/e¶hóäÉ¶¬Ë\x001cúÄtðìºøÅñ¥å»}\/·î¡½.é>½}(õrö\x0018m£«dëåÎã.Èmê8vIh?i{´:ÊcKOè å\lúä®>9ÍçØu²CÅ-½&ÑuÒ²ôY`í³Ëþ2Î\x0008+.¢ç³g\\x0019">bzgEÎ®ÓñtÑïÆ\x001aöÞ\x0007Þh{ä:(_i¬ý\x0010ËSÑ5P¾°ôº\x0013z=´-Òw<+÷Xw\x0007\x001dW^>±ÌYïÂAø}QxðFf(\x0002áâ2
Ô®\x0016Þr
Ô`ºÞvòwj«-²\x0007wLóKlo\x000bëD="¸\x0010aÏ\x0011øðá	S´§g¯/É^¿Fþr(\x00009^0b\x0016îicL§ê$Óºaª\x0008sôøïF\x000c¾ûÔhL\x0012¾ô&(\x0001ò\x0001¦\x0010\x0008m¡?Ùß*g\x001fÛ9¸ªMn²IJÏè&\x0013ºa¼¼d#\x0017Ç!'X!Yòî?õ[N£E\x001b¡7RÊQ\x000c|sä\x0008¦à0æ\x0010\x0002I\x0015Eì\x001c}¾óÂÎõ?\x000fli2]þÈü½-¦\x000bûZMÆ}­m5\x001f=h¹°ýaËùÖ¶êíMæ\x0013\x001b~4¾ôzGù¸\x000b\x001d\x000bbNu¾(¯B\x0001pÐ¦·ÒÕê(R®ý\x000eåÏ;r]Æ9Hð¼9Uêòw3K\x000cMº\x000fê\x001agmºaYPÜxùõ­µ·'îªiÑï®ÿY@W^ûH[v©9s¡I_büiÜæ[ã·_º-ô\x000b2\x0015
úV]Å\x0016ÝÎKÍÚ2Có¨2ÃýQ;k\x001fd¾ýUMò\x000f\x000fh
*þ5ð÷'\x001bRËj\x001eýýrmê:\x0003øw\x001d;±8IâÄñ+\x0004ò.IY!v\x0012G¡¡G§\x0015\x0018y:@tÐi\x0014FÛ¥\x0004\x0002$\x0004(¢]Õ?6iVT6¶ºB\x001fcê
êZ\x0001Z\x001c§!\x0004\x001a:Q \x0011\x0004!øì\û:¹¾>çú\x0010-ýtÞßë<¾ëýço[\x000f\\x001c°®øÍ§ãgüüMíS&·:®ÙZ\x001dWmmö¾\x0012¼Ö²×~Ã² ëbzJï\x0019&µ÷¬DË#¹÷4döÚk:nÎÞs\x0002­Þq\x001cÕm?j_8ä;å\x00000ó\x001dTly\x0007åÄ½dp°G#H²âK4çýnÔp\x0008s°\x001b½¾ù4úI<\x001bï\x0000ãÈÆ_÷\x0011\x001a×ÜV­þ
Í\x0015g>´\x0007:ÑúßC¯Lú\x0004Ù3\x0012°\x001e\x000c>\x00071/~\x0016\x001eîA¬­ïC
Û.;W-é¿_µ¤PÅýsÞ¾?¯±ïæ»GïÞ½ö»»\x0003\x0017ö9Ñ¹_|ùÕAKa®îÇ\x0019j¨:\x0001Z¦åÃnLsE>ì²åEæ<hÅ²wâz%\x001b^\x0005/=fUÙé°<K\x000b5ãS¡:3e\x0008¶]\x001b$5©ðÓiÐT\x000bÍ¬N['ëÏë°£,\x0017¶å@ci\x000e.sñ<·]¬Ïm\x0005î¹!ú×ÂÅl\x000böíEfXýªå|bí
ÖG\x0015ö,,5%CJ\x000efümÄ_!&&r°2u\x0018pÿ\x0011D2ÊÄ\x0000Ò\x0008#\x0000±\x0011 .Läa \x0008\x0012e\x0018Ä\x0007IB\x0008¨$1HÔ\x0004\cø%a1ZwÇÍ\x0011|3Æ\x001aì\x0001î2?.\x0006f¤¨àù\x001c\x001dÔL\x0018Êgáä2yn'Î¯¬®uzXßkZsåu<6_\x0004Sñ{%e@m6À(Å}ë±®ñ\x0012\x0006*4ñ°:?ÃõmÐ6­`(_\x0007õ
ÃùÏÊxõ,x\x0001Ë«Ëòãë¸X,Æy­B£ldTã\x0010éüÉiû}a ¼\7\x0016óÔÌO£<ù%Álf2NH\x0019åÁ£®¯gQô\x0017æO¢V3l,\x001fÅx&ÔÕI\x001fô9fÑFø©A\x0010%J(¡ö\x0019~<$èþ\x0019Í\x0007\x000f\x0013\x00125b}H1gÆÔnë4\x001aF5¦ct!\x001eÄúpõ\x0004S$ÁÊõ7\x001dOÃ\x0014ÄJÁ ²x\x0005ãR\x0008¿¨Îë´~\x000c*9e\x001e¹\x001c6\x0012ãd`Â6\x001b0F\x000c[71Ãu#®§b\x0012Á#\x0011¼û\x0012EPSæÑÖ©Et©0I\¬Ít®OÌ\x0006¶\x0005Ò¯\x0016Ô\x0003õÛ_¿Pn ó\x0002=i~¤ä\x0004ë[$}	õÌÅ!\x0018[CÙH¡\x0006_üÅ7\x0019£\x0007î¾û¾³w}èîs%\x001fá	Èsùãü1õ\x000c½Îï£Ùâo¿ØZg/\x000c¯õgI°Nh\x0007Éo/\x001d´Ø0d|ë±"Ì5ÑæRöEh^O^uÂþ\x0004*\x001a7Âù\x0012kÓÎ­¿ó%ÔËÏ{Ôqì»¿ýöª\x000bÏ±ÈØ}¤Í\x0017óª×O[ôÎü¥Årf}Î\x0018Å\x001fÑûJ\x001dõï\x001c÷EèûC	ÉnÊ\x001d öyä\x0013Î\x001duÿI¶¼U4\x0019Ô{HyÄî\x0008ÉfÚÙ"¾)´ýg|ý¥kÒþ\x0006¢¨¦ÐGGj³ùy"#cUFè~Ù\x0000<è]t®\x001fîëÙ`ÇRa,þ
b\x0000Ê¤\x0000V\Z8¬"%mÌBYo\x000e¯óZ/õíã¯-Æ¶ÍUIáä6³\x000c}St¿«HsÏ^¤\x0019häa¨m/âµ¸ñb
Ë £Xº'»õYaÂªTét\x0004°l\x000cë\x0012Àï³HÉã\x0016?ó<m\x000bW·ðêb²,\x0014;|ÖHõ\x0008mñ/\x001dÇ¶Kq½_Ê¼Û®=áÕ=cÖ\x0000ñÈ\x001bj\x0013Æ=ý|Ýü¾¡ºPùÎ#é\x0011ö	ý\x0016Ú#¦S(ï£P\x0007-IÐ\x0016/h¶\x0013bDÛ+a\x001c½ì\x0011³Ð'ôE\x0018±Xb(ôÛg_\x0008ý¤¶WÜgd§ðÌÈ|ë´ý$Þ\x0017gp¯hº}ôÐâCØ[þ¾Rm'a¡\x000eÁ\x0012Ï\x0014éÞ#BIG['v}î-)¶¤¸ãr*ÆßþØ òã+)pq½\x0011çs½ Çãrýp¾wxò=.;¹y/¼_fv"e8è/"\x0005\x0013°%Q¢\x0004NL:b\x000cÿEpÏßhQø¿Ë\x0017jåðl"¸X\x0014 \x000bEX@B%Î|\x0001?\x000cy\x001cÏ\x0004ÈÜ\x0000©J 3\x0017ó4¦Xÿ§à·/cR»¿\x001b÷À¶gÆ\x0003äáqlxM\x0016¦L	0'ÞÍì\x0000xÂ¬ \x0019$3xL'P\x001füE3k\x000cõG\x0006îü\x001bZ±òh¶êOH\x0001Gð]!ñ\x0001æ/\x001cG\x0011#ÿ\x0008%%~ô©'P¶ñsgqÖ\x0017Nkö\x0017ÎÒ)'ïÌküîÎ»+¿qnÖ\x001cGzå_jéQ$\x001dZÿ\x0001E>§Ã|\x001ci[ÚÑêÅ§Ð4ê<Áô\x000f\x0007ä[¾¾òøÞ\x001bökÖ\x0016Çé»:/ÏÚÞýíüÞÎe[¿=·¤©ë»ªï§µv\µáñ'ºþýtcÏgñØÒ^GÍ¶\x001f±ã{ì7J0SYÚ0»í}\x0016Ç÷Í\x001dW*q»d_çMËþî~ë\x001bçnYÙú\x000e÷ü6{µÅ~}êîÎ%m}6¬{\x0001+¿Õ~½³Ï~Ãº¹ãJAöö¸äÞ3¶÷¬\x0005×!ýÒ¿¤Õë\x0015»>EÏï8ê>v.¯ù\x0003®mBjØ}|\x0013ó\x001e\x0017»£ô8h>Dñ¯EÕ{Pã¡óhËo»Ð¦Ò\x0013(_4æ\x0002\x0019ºcH³§\x0003­Ùt\x0006-9\x0018Ú¼4¼ÿo8Ð>¶Íú\x001cMvím :¸õÆc(å-\x0007Z¨\x001b5\x001cìF[ÞëFõ\x001b®Þ¯yîöà%ýUb<×?øTí­{ËÞþ_ÿÉ#\x0003÷®½ug «e`Ð±vÿÞu\x001bÍÐjË|ØeË(Í\x0015,ù®r«5\x001b6=nµ9i°Â j
ª3TPcHÚÌ\x0014¨\x001d\x001a\x0011gi¡Á2Ñ¥oKSY.g\x000f\x000fp|ôÄí×S²`]Þ¥¿:3\x0015j2#ãÏ£B\x001d»w\x0013´°H¯I
\x0019\x0018ñ\x0017<f\x000e?ã]?f\x0004"1\x0011F:BÈÂ$6\x0002Ä<\x000c\x0014! \x000cø\x0010H\x0008\x0012U\x0008$\x0007ÛNÂ+\x0005ÑóîõH¼\x0017c\x0005\x0003ö[\x000fî2[&\x0001F	Õø½Ü89ÓvWæ»rQ¸ùÇ¹<×T\x000b¯=\x0005kóÝy®·ë¸\x001cÌÖçë D\x0015\x0007Y1Ënã(Æ*\x0003ëO&'ÀÏ

°\x0013ãì\x0016Z|Øo\x0005Öÿ\x001de9ð«\x001f5y\x0019.?Iþb±\x000cÏ\x0000y±1î8À?O¡äM6éÜ{Áæ\x001c\x0006ÆNÎz\x0018òÓhæ%a®Q\x0015\x0017Kÿ¹¬0;2ÊÁx½O!¯¬d¯Fô\x0017ÆO¢V3êúz\x0019\x001bOOl¥fö\x0005{´~ú\x000bcâ>+\x0017"üD#\x0012%J`1\Bcâ\x001d\x0012\x0019\x0014ÏDóÁÃDÒv$\x001bé3cØ¸Q¦ÃÚ"M:¥Îï£õ­\x000bVG }È\x000fÅ>\x0014ÄÉ <A\x0001åñ\x0004%q¥\x001b«]\x0016¯t{
Ïñ.ÜaÊùë2\x0004rê\x0002{l"¹\x000cØf#þÚw\x0018\x0013W7qídLb\x0010¨\x0003ì\x0013öÓêBÆaû\x000c\x00183W¦¬\x0013\x0013.b²Õ\x0001êW\x0007`³XTÏê\x0008É\x000cæ<\x0004²>\ÿüE~IÚpâ\x0018)\x0002Ù\x0017?R\x000bÃwÞÄ+MR0&|\x001bHuá»á%Sl¾p-¯.ÔïóFQ|à¯÷/C¸ô\x0006\x0012ba¢ù@+\Kòæ\x0007m\x001fq\x0016Û#>´u´=\x0013úKóxV¶øK²]Ì\x0017±X\x0011÷÷ÿì	lTÇ\x0019g½û|¬Y¯\x000fÍÚëÓ\x0010°Mð±k \\x0006+¡¶9\x0014Ã¤%MQR±\x0006l0\x0005SÒ¦QHH=\x0010¥	9	
4TP¢
À^ÛkÀW\x0000!Ä!\x0015+åþo½\x000b³óþÙ÷Ö\x0017(õJæ½þù¯yë¯Î¸\'qòäNTOj5¯¨E¾¦üÔ\x0001¯CM\x0016«G,ÿäÙz\x0010è÷g§æ}åç\x001b\x0004Í\x001f?ÆÚËû \x0012CÖ7E\x001d\x0008jS´OõÄYs­ ¾açðL\x0012o¼Í"Û¾û©YÑ\x001eå÷¥P·ÏÏY\x0010PM	Î\x0011Ñù#:\x0003üÉ*âà§\x0016g§¿¿2ÄLZË³,87Ê$pm"qmJ Ç[H4Ñ§íg\x0001_ì\x0006Blú\x000er\x0019°>v±qý\x001e@·hN&Ø7èÈ¢8ÃýÓ£#¨+=ênÍèÈ»çôÖ
ô»Éð\x0012Í¼»\x001f4dÆPç¨³Õ©!/[$\x0003tg\x0005ÁZ\x0012¬%=nm\x0006æCîÏ5ø¾crìX.¢\x001dÃtç"²þtûÈ³}Üº:ðöÉmvÐãg¶ß-+kcû¹6Nkpý6Vµï£³]\x0013³·ÕÉûÍûcç×Åb$ùÊøÄë·ñý\x0006Ä\x0017óG _á7"Ç#êçmãõcqPä\x0017Ë?â\x001b\x001a\x000f.nX-*ldsÉ®%È½(^l­¢ñGê	'6î¯\x0016\x0014µÅ\x0016Û#¢<!ú°üó¹ÄúÑzDÖó\x00177Qü}ÖccÔ\x000b\x001fÇGïH½`{·5\x000f\x0018\x000bÏ\x0003áÜ4Þp_\x001f\x001fG6[Ý÷y]\x0019s¯ùÞñ^¼2§¶ÒeÞ¾\x0016ü\x001a»i\x0003\x0005«)é£\x000fÍè);BCºZ{½Eê;ÆÂ	Ï\x0006\x0015E\x00102_y\x001aaÂy\x001eaN\x0017
Ì
*Ìè§N!ü\x000f¤\x0005Ã7¾ÔA"\x0013æ+[àAî\x001aNÈ\x00108#áÄ±x°\x0002£¡ï9#!Ó`¼\x0010ái½\x0014\x0000Ó=Ló¯©È»V¦\x000052	|\x0012m6¬ùåã+¾¡«ª¾¦«t'À^Qã\x0018þNIÂa\x001aSUC_r¦»û¼²\x001aõæþ¦ý¾¾ºð$ i\x000e0óø,ûknäþÚy+÷­\x000bí¹o¹ÚsöÕÞÎÞ[s3§ÒÕ:sk«³tkK]£¥¾¸¼¥~£µ®dk³ÔÑæ,Ë\+\­³vÕ_ÍßUw5¿²árÁö\x000bMóÊ\x001a_j\TU{mòÞ[9@¶=57ìUÎkv¸ZæT6¶ÍÚéº\¸íâ¥\x0005^ý;ë/\x0017È²Õ`Kõ¹\x001b9®\x0003ú·
\x001a\x0000Ä¶Ñõo=K\x0016]ºfÛ{®©8LWnÿ.8@óÂ·ÑPR
þ½\x0007|
|¦-~CPË;NZöáEºý\x000b´|ù):%øÃü·tcå9ú¢és\x001aÎ¾Ø/¨¹º¾|è\x0012­Xõ-®5W^æ öÔñ~#ÝzÐE\x001dh¦_¼ý hQûýÂ%wîÏðÇ¢ö\x0007Ó^¹ÕþÚûwÚ/~pïþ}ÿ½_WqåêQÇÊ¢a{ìCIÕø4²«uí0T\x0001\x0015yÃÉ\x001bYÉúg\x0012ÉêÔþ¤Äb"KÇ¤\x0005/~aÅEoþ"yÉºµ¥íÆÒ\x00043)M&¥©±ÝÂ±©îõY»v\x001bî¦ÛüõOH#of\x000f&/°\x0015bIq
øØM>ü?±rÐ\x00007Ó\x0007ÈPIO\x0012á\x000b$I×3$\x0003\x0000\Gî®\x0008êEô=¡\x0007ºHp7\x0010ÒIB»@X'0vðNÐ/@L\x0001\x0012ÑIÌ@$\x0010\x0005*\x0016°xö¯w/'÷Ð9ñ4`\x0005\x0012Àw\x000bª×lS\x0018Y`!?ÍL!;ò=Ï\x0000FÂ]Ô}÷7vWÂ½)ß©kÓàKÅï9¹\x0015áòó\K\x0014É1A`³|[IïÄK^k \x0012¤#ã"äQV°=ì8Rñ= ï4²Ã>¼6&¬\x0019\x001eïöOö_íNcQ\x0012KfÆÉèPÉ\x001d¼×zò¾÷¼å»Aþ=m÷Ö\x000fáêÍ»	»s"&N\x000c²^¹\x001aü\x001aûè]â¾>\x001a\x0012d6ëHß¯K?Ó
\x0006ë\x001aùÓ»ÁOÚ¶Þþõ[±Âð¤ëZ&öC
Ç\x0014%}ôÑG\x001f \x000b¦äI_}t/ñÿ¢¡Oº®úè>ôñTô}\x000f×Í­ÛaÔTÝ@XQ\x000bñ]èS\x001b\x000b´ß;Ö\x001d6a2Zä\x0003%ÎÓf\x0004Kd|?£q,áa÷<o§ÍãZ\x001e\x001fyï|V\x000f?\x0017Ñï\x001d\x001fo2ô`\x00046[á_T\x0007+é \x0019H÷hh#\x0000³§åáûÍH?6\x0017ÓB, Û,Û*Ç<\x00120i´MË¸YÅ^59-\x0005::£¯+v\x0004\x0012\x0017­yï¬\ 5\x0011¨Lgc«5æZýïÌZ?\x001dò9Åîõ$¢ÜÿîwNÎ*xGû1ï8º\x0006;îÕ¡{üÌÎeíeí~ÔÇÍã×fmTèDìâå1Dþ=Zà¾°ý¨^Ì.?9`õZ5Æ[1W¤Ë«Ð>>lm!kjIá3/ÔH'/ï/\x000eI\x0004ñEe\x001d¨èPÔ.¶_ø5\x0010þê·\x0007­oA\x000e\x0015y\x0012ù ²ßEkðzÕêÀß\x001eã÷h©éSÛï¢Ü¢µ(Ú\x0003H¾¾#k¨íOÔgAü\x0015õ*È\x000b¶§ýùØ(¨#\x0005~ô`µ%ªYtsÍ_\x001dk9\x000fD9Æj\x0002]GT\x001bØ8\x0010\x0003¤\x001bBÈ¥	äÂæ\x0004âÜ(èáñsÝ¦\x0004Ò¸ÎJÅË·üÓõ\x000b\x00072ôØ
Øô\x001däè\x001f?{ÉeÀÞyY~MÐbó½Ø±`ß\x0018`Ý¨pÝÕÃÃhSfÔ=gzÔÝó£#;È¾{^~Û\x000c¶ò}OºW\x0019MÆD2=âo/Äë\x000bÃ
d\x0014èÎ}À\x0016\x000f6¤õkð\x001dcßy|ú
\x001eY\x0003.£¶.+ÉxuçzÖsj<­÷Ù<\x001f\x0012D²\x0008'ç\x0019³ózgvÜÆõ?êcõðk óY[lR¯
\x0019÷ép]¢µ}dù>	÷QM\x001f\x000fk/j\x0013\x0016\x0013$\x000f6dìn^\x001f«WRêCs&\x0011Ôg¾°úÀê\x0001\x00057¬f\x0014kJD\x0019.g||bÂÕ½¢î5\x0014ñ÷\x000bQÙøg?1ÁüP³¯\x001d>÷èÞçt£õ$Ê¤>\x0017Ý3üÞgã'·èÜ\x0011Ô0º\x0010_óL¸Oâá¼Ók¼\x001b\x0008'ÎUIÄõ³DáÝ®|î`÷{¯\x001b\x001fRcW°^§aº~\x0014,é£\x000fí·P©«µ×Ø\x001d[¤ù\x0011`Ì\x000b¹\x0018&%Ï\x000bÓ	fsÌ
*Ìè§N¡\x001fäñIFB\x0006\x0005\x00132\x0010ÎC\x000b`\x0005rÂ:Æ\x000b\x0018¦Ã\x001f\x0002`
ðL\x0008!	p^Z\x0018a^\x001aèy6\x0014¾1a¾Íü\x001dÚü>\x0019æç\x0007ÈT
LaÜ	&í³2&Eÿü¯7ªÑ\x001fWÿ®Í<F\x0007aÏ|Ò	\x000eQ2ö(\x001dò\x0015þfÉïêXpÿ¾±\x0010Z-ëE|þÀðêéÛ#[wË^þíÌâß\x001cNYóçSC*Ï\\x001f»¯övöîó×óv4´Î¬¬ÿ®°¢±eNy³k£ÍYâh­+ñ´ÅæeåÍõË\x001c­Îbw_K}±»ß=îtËmms7¹T¸Zgï¬¿2m\x0017PÙÐV¸ýÒ¥"GsýR·|kÝrG[]ñÖ¶ÚRÐ±l[Sãâ\x001dÍsUsÃ¾·æföþ[¹ëë®\x000e³6bZÎêbZÎÂæïF¾}öáª#tõö¯hé¬w\x001ffn£\x0012ù\x001dø'çá³Às0ñ\x001b:êõtóG\x0017éM§éBéSª×:7ç\x0018\x001dv ¾¾¿®OüÆ 9¾þ_Ðÿ±_®±Q\x001dW\x0000>wÞõÚk/6¶÷
66 Ø<l¯Ij\x0008¸)$ÆÈ/ !ÅyBI m\x00101¶\x001bü¨ZEªJéV\x0010\x0015E­*\x0011Fm"\x0002~À\x001a\x0012 ÒÐ\x0016\x001cð£ÎÝ}wvæîÝÝëµ£ìJfî3gÎ9sÎÌÝÄ£½è±«¨ã\x000fÑÃSH%i¿±é\x001ddè¼v\x0018DíoºPË[.ÔÚñ9ÚU;4¶vËÐØ\x001a¾\x0015aMÍ7ÿ[ÝrçÞk=wï~ùáÁccèr[Ï\x001fÛ:*\x0016)»Js «,7bºËsáHy\x001etâ~KÑ<x¶À\x0001?ÊÉ¦¬ÙÐ`KzG
lyb¹ö£\x001f¨¿=¼¹ñîØÃ
·ïm®½Ø_¹åÝ¶úl³¢Ñ1\x000b\x001a3S#æ§3Ý¶Èá\x0017
^÷ÏKrà©EV÷zõsR A\x0006»¿lËâã
eIzp(8°â¯\x000f;7µÌÁàkÝýã¦\x0000EQN\x0001*\x0019QË&B´\x0011\x0010\x0017\x0001º0ÐI|\x0018\x0018Â !\x0004\x0012%â7b1)4\P)>\x000ff\x001a6ì·\x0005cÃýûtj¨ÊHæ\x0005VhwfÃÑ\x0015yn¦ò~óÝqËçÃsK³ 9×ì>«\x001b\x0018÷Ü6|Çómµ9	\x0012â Sé9Çy?¢\x0012/\x0019¯5\x0007ß\x001f\x0015¦xxl¡ÕíÃ+\x0016\x0015'~\x000eÿ=Óê\x0007{ó\x001dðHv\x001aö;Åí¿û¬	S÷li¼\x0016ßiàÅ\x000cÈ«pîI¾ö8Ï9ÎÿpwFÞY3åöý$÷´aÒ1ô1¢ñùçÕ\x0010ûEô345©,W®êÄâ¬r8¸é¶3Ú¿`1\x0016\x0002}\x00041bÄ!\x0015õ|¤î³+üÄ­BÊéÎ­\x0018ò1ëWH3Õ9c{ý·\x000c¼tA?\x0018¡ÈªC\x000eÝÚ\x0011méÄxº\x00003þRÎ×j Ü å\x0004¥ñ:7¾¾°¥ö½òB\x000bdHÝ~òü{¬°\x0015ØÀ³P«\x0004;¶Ù\x0006Ø½ð_ýfÜ&a\x00120^~¨Í5Rú¤|7æ¼Í|¬MmÁôÑd¤ÈIõ!\x001cÅl ç²Ù\x0014LO$þ\x0005i0Ý,\x001fBõIî}\x001b9Öcßø±p\x001aòÕ>ÙN\x0005\x001c½ï{\x0016Î³\x000bZ\x001b\x0003»\x0014]¾÷¿¼ÐC³ÝNÑí§SÄ\x0006¿1\x0011ßÉ¾¿\x000e\x000cÍ\x0006\x000f\x0001~k3öÏNó±g~¶Sò\x001a'±,?©²¤­´x	cÄ\x001f5¿(1dÆä~r\x0010\x0010OZÝ0ý\x0017ÎaÔ\x001cMG°ýñÛ[JÍÐü\x0012]ØgZ
\x0005Ñr1È¾ÓÆ©q`èdÙ%\x001b,_i¹!VSÌ½\x0017Ë\x000b\x0011\x001d´3\x001asJ¼ÈsXJ=Ûðr^\x0005ìg\x0010ÿ1dèfæ;i'\x0017¸vÐ\x001a²ïuhû/u¯g¶Í¬ý\x0012Æ\ép¦Àµ½6èÛmÁX½Xü¸±Ï\x0006¿\
ZPÀLú©0s°oKq§D	àÄ\x0014\x0013-Ùwª<Ï~rªÀ¹4=¤>r\x0000Y~-\x001c²EØÎÍÉjx¿Å¡E\x0003\x0005ÆÑþüY#\x0017òMd\x000f÷F/ú='{ÇM£¾ï]òX	¹
?#OwhE¢¢\x001c8(À1pª=\x0014«¼þ\x0008ùVÐ§QìEøì¤¼+\x0016è¥Ê«\x0002çúÞ±t¹á÷Ðg»\x0012µç}W¦\x0010Çµ6Y\x0003\x001fµdjvfê`±B #G¶jb\0§D°¾__Åè3ì¥ÙOú2ñLøU"|/b?êIÝ~k3|'ß\x000bõòÂµ\x0003Åâ®¢Ë
×ð³¶WÄ<Ò\x0016roÈ\x0011ö\x0003âFî+KRl¤Å¶/,9ZôË\x0001vyÇÚcF.	cÇÜwJ½ÑôÓr¬½dÔ@Àqbä«}¬z$kÌ#jÜ\x0018û\x0015DÜ\x0003l£b\x001d\x000bñ¹ï\x0011)7°\x0002ß	?+0ÁgûíÐ·Gx§[¡r×Oö?Ü\x0003Us#}$$µ l5\x00181¤¢-B
Çhdy\x0017M\x0016{/®:Ã\x0000?H\x0004Ø\x0018\x0002Õ4\x0012\x00006Hd=_ u\x000c¾\x001f\x0002U$\x0006\x000fkCdM\x0010\x001e$àß9ñ\x0014\x0006À¬ö`Çêñx<Àj\x0002þÝ*LQ\x001cÀ\<'C5Iº\x0017¾oÆX¼­Ùûn.Ö[®÷Ì¯dð=\x0006\x000f0¸?BVúZl×
-þîÝÚÛz\x00065¼z\x000e=Ùý1Úÿ\x0017©:ÚÓHmx\x0017é
gPöm¤\x001e\ObDPñ7´èwÑsMï£UAå	\x0014={ä\x0003Tu|\x0010µn>Êx}ÁÖ[pænâáó_/yÕuÇYûÒi»Z·\x0012öMÊæßÿ#ç\x0015×óÅ\x000b_\x0017¾ÔûÂ_\x000cÜ)~ùâ¿\x000b»û¾¬hÿÄUÓzm ®ýÊM/ÝXÕÝ÷ÅÊ#}_Üxà³ÊÖAWõ¡k}[Û>¹TûÂà§Õ\x001dnTu\¾¾\x000eËnn½ÞWèz_Cëµþ:~>në[oàgë¸iût î°ëúºî¾U\x001cíýªôHïÍò®ó7]¼U×/në½¹¤àj1ñÆ?añ5WZgïèöÿ_øóxcõë¨HÓãük¯§B\x000fî$â6½ÊÞÂql?¶'Fº ±ôÆsíY´ì¸\x000b\x001dz­\x001fíÍ~\x0017©óð»wPÂÑ\x000b¨¹ç*ê8x\x001e5èßF\x001a©kTEEoºP\x000b¿ÎñËèÐ\x001bWÐ'n×Ô|3¶¦vhl­\x0018[Æ\x001eÜ:4¶þØÝá\x001a\x0019ùò{#ýÝÃ£\x0017Û\x000fì©ì*Ê®²Ü°èÆ\x001c)Ïn\x000cÿÜæÌ}\x0005\x000ex<×\x0002ÛçÎ9)ThtÌú¬ÙPÓÕ]÷Õ7n\x001fAu;îÔî¸=\»ýöðm#ã[ën
m¬ùÉ³6~N#OfjDìÇv\x001cñÚ%'Ýå\x001e¿\x000f\x0016fÁÎt¨ç}ÐÖï*M\x0018>O\x001e²&Ãx
Ø8pc\x0002\x000eL\x001a7ù
ÏÉ"(eF%#j\x0019ÐÈ6\x000câd@\x0017"ú0\x000f\x0003C$A"\x0003RÆg6Æ±
j5\x001agÂtcÅþÁÓæ¨Pa2À\x000c8°,Ë}ç\x001c«Xà¾ä¾Óhw:ß?¸l.<gÆ¬T÷]\x001ep~ã÷Ûð½Îßë3P\x0010\x0007YJÎm´Îq_Ìø\x001cáãõä"\x001bt,ïUèw»ç[¦s9ï{\x0016<µÐ
?æþqÇ\x0004¹ÏøXlÃ1yÈj\x0002g¢n"\x0016ÓWáÜ<|ý%ç\x000cÆÝ\x0019}oÍûêÛr?\x0005»L>ªr#}©ÅråªNïû\x000cýÂø\x0019T|\x001c¥Ä;õ\x000f'´Ómo4~
£KxúiÉq\x0006©'\x0010=\x00181bÄn
RN÷Ù\x0015C~ÒÏ¢¸éÎ­\x0018ò¡8Çè\x0014çÍÈ¨ÞRY©ÌÀ+Bzç`òRÇÓCÐ\x0011L¿ù´õ"Y×7ßÂ\x0001,Ñi ,A\x000fË
\x001eJãu¾°õRêE86!ï\x00187Pô
t\x0012r¥\x0014½2:ÈÓ¨Àí¶cl^ìÜd1â~"\x0001í±Pæï\x00120&ÕkgªW&AD§¢e_0»åÐ\x0011N\x001cB§ù\x001b\x001e9}bõBÝ\x0003)¾é\x000bæ·T\x001b¦b,\x001cßÈ±\x0014ðÔóÔ¸°Þ}ý³\x0000Øc´g¿¾O·\x000c©G¸.y&Ñlµø"ê\x0017Ëf\x0011Û¨vr\x0014Dl÷ÓÉ%\x0019\x0007V\x000c&`Ä0`/,ÿXëNØFY#@¡\x0016/n¬ÅÌ/fÞÈ°ò@]d¨¾³bÆÈI¿6È>3sOÌ\x0016	¾ÅZ´Î\x0005sÄìcÕ-\x0019WZühvÐÖdÚ\x0007t»¨u)R_vÆÚÔ¤ÅUB~RÇ¬\bÕ
­Þ\x0003bBúMÉ!\x001d¤\x000e)c´²òV;bùEóë\x0001õ,ô\x001büc"6Y'ÞÖ\x0001ïÝ2m<\h¶ÂÀ­Ð·ÇB´Vpí³À\x0007µ6X¨ÑÁLúa7ÀÉQ\x0000\x0014+\x0001þÏ~¹\x0000Ey]\x0001ø.»\x000bË²»¼\x001fb\x0015\x0010A\x0008²\x000fT\x0014\x0011Dñ9mDD\x0004MZ«£	Fi;I3(¨(OÛNãh;é´cc2¾11­ÓjMS­1VÙå% `ªv&\x0002Q'Ûó³»øïÝ{ÿÝå,Ã7÷þç{î9çûßµbckFËkùº´±þ¾=f1.aØ\x0005¹NP\x00028
\x001eÿføÉgq
ÜèÓ«¢ì­ïGe\x0002úñ¤\É÷=ã¶\x0004\x0015ÖÇyÿ»4Ò-?P\x0012 \x000f\x0006ÖÒJy­ÄRfÑ\x0018ûZb\x000eYGCSlóõ4RëùüµúòÆåFò2Gf\x0019\x001fNn\x001eãt\x0013a¯\x0002\x0014\x00087&*?~;D6\x0005½Ü>]Â.i[gòGgêóm[¬Ié[éñ Î#|×I-õû}ZÚ³Êõµ¤².+Ç¤.Í69;«\x001c3|#sCê22\x001e+ßb øM_\x000f5­æÑæ0jÏªÈx\x0018ù§æP*ì\x000fM×*_\x0002þÒt¬rÍðËÂ\x0017\x0001ß,ö\x0012»=µj\x0011\x001fMWh_\x0005Ö£Õ¼Õ@K­1´Ú`óh¸?|í¼\x0017Ç¸ÑÙùÜ½MÞéD\x0013_f\x001f<øº8òÙSyø\x000b<`Â\x001ea¹Ø\x000fÇ\x00189qb\x000f.ÞX\x0014ÜÝ\x0007Sw#É¸Gäij%^\x0008ÙÃb\x0006<íg¡\x001d,°A¶\x0003Ì7£°dd1k'jøÙ\x0011\x0002ïÉ \x0008è§,Ë\x0003ÆL\x0002N6K\x000eßÜ2ÆKs\x0003`¿ÄØûþðÝ\x0018\x0008íxWxÏ½t7B:Ál\x001b¤
Y<fHug¥·äµ·>Ôý\x001d\x0017¾_·\x001dlÂ[·^ÅË~ò\x0005\x001f÷¦ ©ZÃSÏáÉÓXNÁ¹bq\x0012£Yçqü[ð»?¿s¥uX"¨OÌÔaMWðÒc­¸tÉç8	Î9ñ\x001c¥\x001d¿9¶úÚ½äÚÖo5éEûý\x0011ErÕ<
\x001f]úUë#m¡[³ûzWRñùÎØ
COr-PÞxovyÓ¹Õn]þ¡º¦á!È9¾\x0001Ýÿ%mýÒ\x0010¿Ûp/e_Ã7\x001cj}·ºÒp_»«ù«¬í·rKn7ät6®4Ò°²¤£)k·ßj^±»ñnfµ¡G½¯ñº¶¡G]¥ïN®¬¿\x000fmº\x0006¨Ðß×d´·û5_®½ÜQõ7¼v×_pá²?¾.Û]ÑA«Î½¹£ä2ó\x0002N:ÒK*õx½Ï'ØËf.Móò/â9ÇÛpÙ&¼%æ,\x000eA'èz~`³B×jÇ»Ê®á5ÓXfs
\x0018\x000f<U\x0006¼þh+Þqø\x0006~÷£\x0016\Rq\x001bo\ñðÙüGÏæ-·\x0001èÌ-xØ»â½\x0007ÿøSoogÕÓç-e-ÍÇJî_®DåÓ£\x001db\x000f°75\x0006í\x0016J4?@Å	\x0011h}T Z\x0013®D«<Q>ü&\å/G\x0005\x001c\x0001\x001e óBËÖ½îwÿáÒ5ç.ïz°0½³SÖÙóuÏÂ\x0007s
âÜ]NÍK®
öF«Æù
ü\x0008_T\x0014\x001böÎq86!8{;S&¢Mq¡¨ Ò\x000f­u\x0006ãç÷\x0019.\x001cÙ\x0001Þ(ÊUBàË#\x0014¾RÃFpÀ\x001b\x0019ÿDCË\x0008!\x001e\x0006$Ct¸\x000e\x0011n\x0003@6\x0004¸;|\x0010x\x000c\x0000Å\x0000ðt\x0010/\x0002¾|\x000c \x0002üàÐ\x0004,Ïø\x0008¿\x000bF\x0013îÝ\x0017\x000c\x0013ÆK^
óE[\x0013#ÐîéQ¨\x0012îÙ
`Ï¡»Çî·òiÑèäñhã¤`T\x00189¶ï.Í§¼¿¹±<\x0018Ëö÷B\x001e®hÈø\x000eG#·@X+B$B©*\x0005Ú\x0010\x001bÊ!G©\x001c¾÷¹Ürê&¢bÈûOá[»úb·ã/\x0000VC>rB}PªÒ\x0003Mûös$s1TDpõ\x0008(EÆ÷·\x0008
ßö]¼·Fó®\x001aÉ;ÊûÈ¯´L\x001aþ\x0002Ë\x000c\x000f~Gº¹x{sÇËù7?EA$¸­ÝÝÑ¼ËfÎt\x0019mßëÍçw¿w\x001díÚfá!÷\x00189qâÄ=x®ÃÑ~o9\x0019\x001eÜ³°x´ëËÉÐá{\x0008»
wÍ]¼$\x000bT(P ¬(DqG°e+×:º.K?Àõ*6®\x001fê"BIrW4C!GÓ<ÜÑ4hSL­ù/KáÉú\x0001\x0019UÞ¥\x001d¾ý\x0014\x000fÆ\x0018±ÖtS;ÉUBáWT\x0018\x0010m©
\x0007ü\x0001/ô\x0012odùL³ú\x0003?ß\x0013\x0018kòË·r¶m­kËw½ñÚ#}²µ5Ï¸\x001cõeÛV\\x0003õc 9\x001fÊ}°G6Tç`¨ãõGÆ3n>ï¡È0%|\x000ea§¿%æQdä<\x000b992ná\x000b%0!û\x0014ßhzd>¨±\x0012-\x0019U~ÉØ\x0019¹`®#°o¬µÉ=eí\x0001-o¬ü±öZ'\x0002þZÕÀ\x00185Odìd½±öQÀ\x0017ZïC¨HÀWÊ¾Òê¿>¹\x000e­©ùeÄÀÏ\x000b-\x000eÖ>XÙ¦Õ"Å6­O\x001dcå²_BgU\x001b¶Î,ëÜ2ß!\x00021ØzOÐjGèÑ\x001f;#§d>hûEÓ³Ú7¢¶¬r@©Uª¯¼96Ï(ãÌÑì°ügÊ\x0018ç¶v¿läÝ-Ú;Ið½"PK´¼\x0004C\x000bÿèðì ÔúV\x0008j(2\x0013lÙß\x0014¾*\x000eC\x0005\x0013¹Ûÿ»õÇ}p1M\x0016#¤\x00054¦VK<ÓZR×\x0016\x000eéK@_
-$Ç¯E\x0013=ÑÍ\x0003Qî¸=Qù´1Á§÷ú\x0014eo}<ÀµSTÆ¶ÿÙÜW\x001aâûxÖ<EÛ\x0012ß~\x0016ëùA~ 8K!Añ`ªäå|\x001f¸¾ç\x0017én£_&±¶ËZ¯¯\x001asÃaîëLôåÌ¬g\x001a·Ð\x0007ÔÀb7	ê¾\x0014§zx6V\x0017äÚ\x0017³gSÇÓçÏ×J¬íñ[«ù\x0014]+ß¥qôQìÐbâ¯ÉÇb])EN¬¯#×¡ÄB6\x001fÚ\Ò\x0017j\x001e)û@BÛ\x0003Z¼ZÂ&\x001dj<¾­½¶È\x0017%V¾o¬\x0018u,\x0019+«¸)¹¤æKÊ^'J°Î¤àþ\x0013µBæU'´8­r@ä\x0016\x000fßw²n©{FÛ7©u\x001c¬Z´µï6kÉ\x000eû4\x001bæ~
ô'¸ äcçî#GíC­ïñþgZ?\x0018é7£¼«uná/°|0¨ª°+B\x00189qb/¾ð ën$Ñï.Ïa\x001a\x0019,òt\x0014\x00168@¶\x0003ÌW°ç\x0000Y<æ\x000eL\x000fK^Áï\x0015  û¦t7e\x0000s\x00082L¤Éá=
$¸Á·7\x0010\x0005o¦	@4\x0010\x000fÏÉ`wü¥t\x001e³í$ÍAf	0STð5=0@¶úSqøëWß»ø¤hÿ»onÞ~`vÚøHÙÊÜu1UW¬M<#ÑI8W§\x0018ÀXÊ9\x001csè\x0006~g\x0001¿áû	ö\x0012Ô'æJë°xÛUs¢
-ý'fsîñg(óHíî©kÛ\x001ek2ö>ülT!?\x0014iüÛOR*ôÝSg¬­õUMÊfÿòPÐú®©UúnÍ«÷^yó>jùéOC²~0vÑ±#\x0001Å\x0017[c÷5<Ð½ûÅãÖ»\x001e¹áÜµ	[>oÙ\x000bsj\x000c=êêúnuyã[M+Jn7®ÜÞÑ[v£cayÓ9;[:\x00165wÌ«Ôß×]¾¸íÓØ·ÏÝµÔUú®>ª9\x000c]ºí­Qi\x0017oNÞqæE~ùY¼úµ\x000fqW)vG¿6ÅUggÎ\x0018y\x0014ÁüÂKx.Ç}
x£ÿ\x0019<Æf.aÜý4vÝöe_þwîoÂ[¢ÿ©ó@\x0016p\x0006+k\x000cxÃÉv¼sw=þ±×ÇXnkÿ³[&ÀQVw\x0000ÿ{$»M6sïÍ\x00059\x0004ÝÍI\x0011\x0012¢\x0001D,\x0018B\x0008D<@A¶f¤\x0008%!\x0014\x0014\x0006{M¥Ó\x0019lKT\x0004«8¶¢BQ($i\x0008ÇÖ¡Ü\x0003ÁAÂ¾¾oðíËû¾o\x001cRwg~ó¾wþ¯÷ÿe0M\x001fºªvö ÕÛ{ÐÊ?ö \x001fo;{òÒíÙ³oôM­íí«\x0016ÃyãvUã/ë¶=ûîÏoö\ïB=«·½²¬Í	ëGÃºÒh/Ëu³Æ\x0005+Æ`Qf\x001244Ð WÃ´d¨+)TÔN¯sÖ>¨u6ÏMq>Þ¬sÖÍJ¨­\x0018ã|{cþMôðôÿ^qìPrüÁ}RÍGïJ³;?1Ô^¾VÓ|\x0013Í©íìü°½ ºÑ\x0010\x000bsÓC¦\x0001³ +\x0015VÙ²`=Ö7PûøíÎq³²(\x000b\x0016Öc[ÂÒï\x0008\x001b\x0006ì·\x0006|Oæe¤¸}X t)\x0003fü¯ÃÂ\x000cf\x0012Ãþ\x0010\x000c3Ò!@6\x0004ÈÃ$j\x000e\x0011E\x0018(C@\x0015"1A \x000eØ\x0010#¾58Y\x00120)\x0018=ÆäÍAë\x0008åþH¾9&ì\x000f#Æ¹G!\x001a½\x0016\x0016å`µ}\x0014l(Ïu×ö0ëV@µ­ÔSÛÚJ³¡eB\x0006,Æ:°ïs\x0003¥Æ5fxßîô$¨ÖÅAaL4¤I\x0018·-æáò\x001deðú­T«'rMØlì³¼ ýåû?Ãúü\x0002\x000b<2Zë§F\x0005RÓ\x001a1MØ\x001fõÖ$\x001c\x000b¹Q²aõÅ`aõÂæ£ÖûfâÏ»¦ý?Ô«á¬QÁÔ$ý7£­.¤0¸Ä.YÂ^¹È/º±Qf<uZ\x0019ªïS÷¿\x0017=Ò6\x000cæOfµ2çãá"q+ÂÏ\x001d\x0008\x0011"D\x0008\x0004m\x001bô»\x0015ahÐ\x001fD¾_\x0011\x0006\x000fy\x001eXo
ý½1-]*Óc:ÞÓßÜu ´GG´ä¸Ð\x0019|çÒìà³)XÄdr[«D\x0002\x0013T
(U« $F	Å\x00125§ïþö\x0017³c\x0018¶u¯óûöùð­¹sN1w;F9£³¾8Æ³§Ô½O	yQR0a½Í\x0018\x000bãÁ÷Í¶)8\x000e\x001a¢%ÇÐìÓPÖùÚXï7ëg\x0013Ö-Q@L±=bz	\x0017\x001f\x0002Õ%\x0014\x001f\x000bé.\x0016\x0017!?c»MbcÄFÌ^¡±`t\x000fÆbú\x0006º?\x0010;hyCgs(\x001e£gó\x001c<½¸û\x000c§Ïù&ûÜ}$~û\x0018âl²"ea\x0006®£ÊäÈ3gòì±Ðô&eï"±¶×'<}2\x001e4\x001bI;ü0@\x0006MW\x0001X\x0008Ýü|EAúHì\x000cGÞ\x0013ø\x0004\x00133ê½%íã#~ÔPâ!$v\x0017ùî1-ödlüÖ\x000bèËµ«\x0007­æóÅ](Ç\x00025-N\x0016ÊÙ\x0016b
_ñ½\x001d¼ã4y|þâú\CÄQì¡Ýí\x0001~f8rÉ< ï\x0014Ï\x001bBæ_yìæ}sÎ\x0014ÊEÊûÃwx}\x001bÀ;*k\x0003r´k;á\x00132&B¹I½Û³iwZ×ÈøóÜ\x0001\x0016+F©LRÃ©§,Ðù´\x0011:²<mß\x0008=ß7Áë
\x0010ÍHàëôcÿ°6²¶\x0014Ê\x0000\x001cØ »\x0017\x001bÌ¿ßß\x0012ã6q;y\x001egs±ûåÖ÷íîsÚ|¬kM´\x001c^[d¹\x000eåk\=\x0005	_\x001dË×ú¸ul\x001cÛ&x¾q{\x001cÓ1N{\x0003·»{\\x0002:¯ýüÕÑª¶òDI\x00190PÀxdùäút"¿mn~úóÛåþØÈ³×!÷ø¥¿ÑÇ}°}Ì¤\x0010ûïÌ£cÑ\x0017	¿|(E6\x001e8gËèçÒdøÑÖÈýç\x001c<6ù}öðÏ·+ÃÁ'¯OèIÎqíáÊåµ»âOî>^]üLÄØN±ÕAêÇ¹C¤\x001cj¼H\x001f\x0012ë\x001dõ|úSï\x0014©·H\x001c\x001c\x0006øv6±Gô\x001eñ î:i\x0017é3¿ãç\x0017w3¨¹ÆsO\x0004}-÷?/6Ô8òÄj\x0017'Bñ ÞeBO\x0007Mg¹ÿ8õ
$ãå}O3ð{®e\x0002«?+JËÍýµ¼ëi\x0013o]÷yÆw·WJr¾¼®²ºPÈXzJªCXS\x0004\x0011"\x0004z!sçO\x000e+j2\x0007â\x0000¸ÌàazlàL#¨	ûE¸O-NuLÅT
\x00021\x0018_Ëa
¦ \x001aÀßB½\x0017#&_\x0001p¯w~2)Ä\x0019ìÚI1wöTz×M
ï\x0004ÁD\x0011* \x001cÛ[¡J*GÓLsÜ§»L¾¶"N.)Æ4Ó^¦ûõ\x0007\x0017­ïBßAð\x0006Î¯Ý\x0014v¹ à=ùÛnôß@-Åï£<ØÅ³\x0004\x0019½\x0007ÉZ 9oBkg\x001d@¥¼r8ìú<iÃ¡³ßÞÒÓë¿ãpfTÚL¬ñ8¨xtsÊ}'ï©iù!:ö^Ê ÖüdæÖ¿\x0019ëßêJ°õ7q¿X!7m^Ì¤¾ø\x0008$mhüWÖÇ|ïÀ¿sçíû{uËr©aÓbÆ¸ùIIÕß'­9rþ[:¯Ú6\x001e¿lûIÏ§ÓVí³öÄ§5\x001b;®86w_·¿ØqÅöÓã\x00176v]+ªyîUJ;Qj¯oOlÿ×åñì\x001cÞWô\x0012¦­ó¢£¾ç3Û³ýêÁö½hÁ×]3R[Q<´b{vbö\x0004è/\x0011?>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/IMG/pdf/faispastonyeti.pdf](https://preventionhiver.sports.gouv.fr/IMG/pdf/faispastonyeti.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=\x001c\x001b\x001efÝé\x0018}H,y\x0014ÕvëYYÆ*Oì92géãå	³­cgÊêãå!"W\x001cU¹æÍ_ºÆrÄÚÀÎ\x0007«\x001d^}°>4\x0012j
\x0000Ò@½ÓF\x0011~÷u\x0017|´Ú\x0019þÝpq\x0005Ý:ß\x0014êß\x0016çÜ¼³ï¤\x0014÷ÊÁ`ÈNÙ\x0004 C$\x000f×di°jy ¨}ÿøÿÙ/\x0013¨¨Î+\x0000ß7\x000bÃì\x0003Ã¾£¬F\x0008 ,Âà"c£,e\x0010$¨Q«hL\bÕs4à\x0011£µv±MÒ&'µ§§¦j5\x0015\x001az¤QÁÔ´Æ-bªXµ§-\x0011ayýßÌ\x001by<þ7ófà9áóñ/ïÞûßÿþ÷ýwh×Ü\x0000*0,pr\x0006e\x0018\x000c*$ç!\x0017¾\x0015=K½+£6ø½?D½?÷¨Ý?	Ý\x0018_¡]\x0012\x0018-)Õ\x0010P¢\x0006(Õ Ü\x001cDcÁÀ ÄÚ6ÅÈ·"%@¡\x0002¡¤t%DO°x}\©ÇÎéï~PP÷Ò'\x000bo?VÕvruÇÄú\x001dºcË©Êÿpö¿¢k\x0012¾òÃ¯IµXuFR\x0008u\x0007G \x0000>"Ô_¬ªwY\x001bö\x0017·Ú´óAû
¿=¾ò¡®asï´\x000b[É¬³?êÎ8¼ôë\x000f\x000bëcvfî	]\x0013Wª]\x0018\x0014'5xz
OyÈ|ä\x000fÕ/P[§îësÏ<\\x0015
Z'×Gî:/qLp¯B:WraõòÚ§Æ=½ä­Ý$yc}SÓ¾ü(¹è6ÍðÓ/[]¤üÌAú9*\x0007PöÍ`\x000e\x000ffs0\x000bù1K\x00060©j{ÒÝÖ±\x0001_4i\x0014çªñ\x0004aEÙx\x0002Ø¸}Ù\x0000w[\x0008ÏÖ>¼,\x0008ø@É»·¶@äí¿i+ï¶Î­îè\»±«gUe\x0017Y}èHRVXï
 WpÅb\x0006\x000f¦¡:>¯¼xFm{Çå=FÓõ\x0015ÿyºW×fKo3%°ÑY§`ÍÇÓÄ¥Þ7Å¦ß7&æ>ê\¸öûÕi¼vÀdzp´«ûq]W÷£]Ýÿ|ßØÝ¸ÑÔ»wåÇ5i%\x0006½B,\x0016¡T\x00019O\x0014\x000e¢äÊAÔ8þh\x001cDMûBíÓ\x0010ÂxïtyEÊ¦_4ÄZgr¹Ô7o#gÛÜ=ý¯=Jüñ¤ë¡oø5*ËE'\x0005Ô½AÝ\x0017Å\x00128Æ\x001bJ¾\x0010uèÑ Û=ùæ¨ºe\x001d\x0013.l!3/o#õ£{æÏ+\x001fë6g}\x001cá7Mé|³\x0012\x0008"F\x0008Dø¡X¡"Â\x0017¶ë¢àÝÑæv(Ù\x001e
ÛÒ"aM|\x0008TFx!ÔÓLé\x000bÆ|D\x0019b\x0006âd.æ\x0005ØÉ`\x001a-\x0002ýËa~AB0\x0008\x0010Ñ\x0010!\x001e\x0004\\x0006\x0011¸\x000e\x0002R\x0007='|ëâóÔHGkå ÖLÀ×Ngê§\x00157\x0007pw\x0010­\x001d<\x0010>tM\x0018îºÄ\x0007ê\x001e¦j×x\x0004ÊÂ| &5\x0012vN\x001cc®-ÎÔ¤Z¤·%9\x001cªb\x0002¡|´\x0017\x0018B<\x0006Ô²Q¨&ò2×$¥+
\x0008³\x001fÃ\x00113jM_´v¤X\x0008süÝacb\x0018Ú´Sû¯¥Ù8\x001a^ò³Ôã\x0010|M¤b@µzo\x0015¼$\x0011Yö\x000fÃ\x000fö j²?BEXj\x0003³î8[\x001b{zeÁ½ä°£ýõo¨ò2ò\x000cÑãýÙ)Épñwç\x0012ªd#\x000f×ãë¶t¸ÏÉ%D?ÍI\x0018a\x0011FxÑñøt\x0019î;ó{I\x0017)\x0013¸Äpÿ\x0008Ï4\x0014\x000evn\x0004 ÿ\x001d¨ÿ#}\x0018øÒ0ûÏ\x000bÓ6Wë-[c¾z®mKÖ\x0011\x001f\x001c±;Á<\x001b¾g`KÎ¸rå7" `«\x0004t
T¹\x0014Ò\x0018­\x0019Ôï7¦çcö{æØÒg-í@9ÖzTKëu\x0011A\x0010ò9ò&°`î3æÙXåØòÁæ\x0018\x0000hQ«¢Q³Zw8Y\x001e\x000e{rJZÆÞs\x00100|gí9o÷Gx8èÚ¼­¸àÆÎÄïZÏc¯3vùÄÈ\x0019û¶ro¸|s6~|r¯ÄÃú}P÷\x0018ó»Æ}\x0017\x0003î
æ÷\x0002ø»m³ß<nMÌ¼MYë\x001cÁí/o\x001bLy-<ç\x001dÊò\x0019\x001blpþ2|Æ¾³á\x0003çYÙ8O®3`Ûà\x001b.îl¿q{ë\x0007[#o¸l3÷ÈnûÅãL¹öÍ\x0015\x0003Ü\x0019rÖN\x000e\x0016vî`Î\x001bë³µå?îÛÇÞ\x0005¸óÄ£½Üdç\x0003ÆO®3åú®q9Æö\x0001·\x001f®ï
÷\x000eXßF\x001cÙyÛ\x0013gNrÄë\x001eÀ}\x0017¸3ç´É#¹¾³\x0001~±rÞÖý`ón@ø!2å\x0012øÇò\x0000ø{?ãë«\x0003àOÓ©_kßÍ#DAE\x0000IbDVû¬/²´Ì¾ù=«oÕ±ÎÇ û;Òµ\x0004y!FalQ?½8VÕi&n\x0011bÔcTäÕXõÙUÁ.\x0004Ú'+IÂ>óÖw\x0003æ0ïlé²m³eqº¶üâ²kË\x000f¦¬½õpïìÁ©+ì#\x0005SýyöÑâd°ïEx9,û\x001dn]N2½§gï©¾¸?É¬~2K¦ßXÔ'Ì%Ï¶Ç×6\x000eF7C\x0007k\x000f3ÇfÈ²7®61@ËO`ÏctÙúÏäÅýu¹ôëáÖbÚ²·n¿516¹öëãì0íãìbcÉô_ßÓ³xYòÖ9æþ\x0019gÃ!û\x000c±>bbÄö+'p6R0>2ía÷,\x001e\x0018W\ÎÙÊK\>råéxÛÈ\x001d{ë§àüfé¦"â\x0004\x0000âAªÓ~®b¸b\x0008k«­¿\x001b\x0002\x0018¿\x001flý®èi|;~§Å5¸
\x0005â\x0018\x0012í\x0011F\x0018jä\x0006R4Ty<\x0018DÜ¿'-L\x0014T¸\x0001P,pr\x0016e<¯\x00010(\x0001JÕhì.%ÊµrÂúÅh®\x0004µ¥n6ÐX0hú÷­0Qó§¦
àUäÓ<\x0005j\x0011e^>¢ªð)ªMIK¼úÊïÂ_v%þðÒû)u+þz¢ªCW_Õ¥«[Ò9a¿á¿ñ¿Ì¼\x0017^pÍ÷ÍÏÕ²S.P\x0007ùp\x0014q\x0018\x000c\x0003°XsÔuCÔig5\x001fªlK<½®kÊ­ä\x000bï3N¿mztÅ7©\x001f}¹vÚ®·b
ÚÅ¡)²"­ZüÉUX úùÈÇ\x0002äk¾
òXäª8\x0003ÌU\x000bÊkË6}çxåª¢ü\x0008?íºs\x001fíèè¼²îÞýµíO.îî%o,Û»gM¶J¶tïÏÖÔv¾Ør÷ÏÊ/ÊÉF~åP¨,m¶\x000bÀ\x001cl\x0019SZÈf0'³1ÌbÖí
 ûÁ$aø¥óÞ¾WTÊÆã <\x001c¤¨ui<\x0001\x0012\x0014å4
\x001aeS=h®6ööeð¸ÓLhï4
!G(\x0011Öfðlm!¼Z[\x0004¶Ð¶¶À¨[-ÊÛ7õ[¿}ºv©gù|#9ïêÈ,\x0010ô(\x000ez,\x0019\x000eÉbº\x0004`æ\x0010
W¯\x001eÚÓÝ{có·õ\x0019\x000fSum¦¸ô6S3Pºi÷M±S\x001e\x0018Ó_}l\¾¡ýé\x000f:7\x000fwu=ªëê~x|¤§÷á{íOþ»qÓ °°`\x0014v@®\x0000Ú\x001eÈ1(\x001cDÉ\x0003¨q\x0010\x0003ÑðÄÍ\x000e¿ÄS\x0016¡z3cïè}n$ÙÐÑ¼y±Ì:¹Ú8ñ·ùm1Õñ_ú.s;'5\x0010' \x0010Ý\x0017\x0014Åèî(c¼¡tPûºúdûøkþ\x0007\x0017´;»¾gÊ¥jR©Ôºò¡nUúd÷¥)ÚxYZ\x0018ü\x000b"¾¿ø£ý\x0007"¦z*aý¸PØ5i\x000cl×E
)µéÑ(Ø\x0018\x0006K¢ü¡4Ô\x0013\x000cÒ\x0017ùòÑ^P\x0018¬nr\x0018ýöË=8ªê\x000càßÝ½7ÙÝ$»I6	\x001b6»É&@\x0008$$\x0011M6<S5¥\x001dI*òJ\x0008\x000f\x0011G(\x0002a\x0000íHéT<\x001cd°/\x0001¥V§NÇ:E\x0001m\x0007\x0004§RE\x0002ÑòR(/¥ÈPð\x000f!A ·çîÞÜ=÷{÷n6l\x0018vg~sÞßù\x001eçï.k\x0000?³\x00119_À]~L\x00041D\x0001c\x000fÃö\x0010\\x0004\x0010ñÝÄÔMÌa`	\x0013R\x001eTCoÔ+»7Uó't/êÉ§8©:±kp ²zAN
5oõE\x000c6qPïÉg½ýý¹KÈ-ºó\x0011bíÈ\x0002XéË¥%90«¿\x0003\x001asÒ\x00149iFn\x0006"\x001d&¸RÁg³@Ñ\x0000Â÷VNè	}3\x0011\x001e#\x0003\x000ffØà©Ò\x001cXl_72\x000cûQ.^Ö6Wö¦B\x0017Ì@9o*²\x0013\x0003>ÈG²R¡,)\x001e²
\x000cÜ
ßPÙb)sá-ÄsNwòCæÞ}¦ì\x000eÞÒ\x001b°oÙ*¤Ø¯\x0007~Ñí$iÁ\x00026Úþ¾\x001b~ÚZc´cþW\x001e}\x001eò\x0010#F\x0018½Ì\x0016¾×|/Ýk$Ôól´ã\x001f£û8¿äÍ\x0011=\x001bß_³ô-)18 ð¿R
Ò\x001c\x0007¡ß\x0011\\x000cÚ4½h2h}\x000eµZ{ëµQM/½c´}iëÕb§'^¤yzbEça
Pná\x0016ð%¡J\x0000Õ%|AmsW\x001b'Íío\x000eZ+\x001fó%tµ}ò}(2#Y\x0015	&Èç\x000càb\x0000ÜHo7\x0013À\x0005]m¬ÄëÒ<ù|·(+\x0013)¨LBX\x00116±$©Í
U\x001c;ÂÈÆt¦Ú(ó\x0010ç4l\x001ba?½öØTÖjÉ í¯×ß¡ên`]ñu$;Hòºc£ìPç\x0012P}\x001dêYÕ»ä§Pü¯åg-}û*Ü[ùýß\x0005ü>Ðî\x000cþ>\x0004½\x0015òÞÉß\x001d\x0017éþ1Ê÷\x0006OjSå0>Âûæ1d{\x0014%\x0013Ú~rùx¿\x000b[«ð\x0013ÍN¹\x000cP®Åç(bA±K\x0011OF¹\x00175gÈcN/Í7ø^jy\x0016gÒùq\x0011ô íE\x001aW;÷ø9#¼\x001f)í^iú :Æ\x0004ëãb~Á¿\x0003ÜØ¿ü@X¿\x001fjçKñ^PäÖ¨ÆòþHwô&l¦¾#\x0014}Ho ~æhg7\x0014H¾¥/NZw\x0016\x0017¢\x001eø~\x0004\x001f¹\x0008sµîa`Ï8'X\x0005Ç\x0016:áx\x0013*\x0005\x0016\x0006ÚR)ô1Ï	ããáNý\x0011C\x0000^\x000e \x0005(gÅ\x000bPÆÉÚâxg]6VÆÊàºúü¿ÌÎ4òG­í-¶öÖ6P¶·\x0014ÙÄ>Pç
±ým¦ó\x0002ã×©í*ñºbÅÆd}4\x0019û¨É\x0015ÇËY~¬R^¹l¾\x0017×Ð§Ö\x001f¤§Jb\ì«\x0010Û\x0015F\x0011VD²ÛØ5æÏÁÆ©s±9\x0015*sü\x001cÂ:|Ï
q}\x0005\x00178Ã\x0002\x0015²RBÚÔ×94ÉÁÇu¼WP¤\x001f6F+Ióå>Ë­d\x0003TÈð÷q²¶J½R¶\x0006_ë\x001fçdml\x001f¹¼JÉ~l½ZI\x001cd\x0013öÄíêì£ôË×àòtÀtüBÓ·s>.C+_O¥ÐG¾'Áq
Ò>D¿rJý\x0014ñä0Ûh¾íEô%\x0016\x0007\x001d\x001f\x0015¾Qa\x0005¦/)¸ªìE;/¤8É÷«B wPîÂÂÙ¥â÷BøÍ Çýß\x000fÒ7D\x0016úp\x0006}SHì\]m(üþª9»·D\x001aÇ>Þ\x0004ÀC\x0018=i\x0014op·Gþ\x000cG
O[»e\CqV
À£:I`F\x0018L\x0017\x000cÐ(cZ
ä`äó§°iÓ R¯\x0007+Àä$I\x0001\x001aRLÌLG_nÑ ÚäÕÕk²7OÜ1ø­GÞ·}îeï®ù×}\x001f,¸îÛ5ïºïÝÇÛÊÿ<å»âM£Ïå®(:êxÒþ±eá\x001fL=¼\x000fà]\x000cÛa:û¾¡)óã¤Ue;·Ö\x001e¼ý+ÞµWÚÌ×\x001chæüÏ_u<°sá¥ª×ê÷\x0016­¯ÙèyfØÇs¼´\x000cã\x0004«\x0011\x001eFú\x0008G:>b£#«ñ0z!'y\x000b=¿<räM<þ\x0017\x0007[¶ÍxféøçÏýÑâïÚþô£\x000b×ÇÌ½Ú¶aãÍÛ§V^øï¾Ç6¾8÷ÙÓgvn¸Õqâ%?¹âÂÅ\x000fëÇ.­C9¦\x000eÉªM\x0000X^èi\x001c;jèäQåêÒL\-úÛXöªM
q\x0014\x001e¢a\x0001¨Éëc\x0018øÖk¶Ôï7Yöï\x0000ó'\x001fåÀnpþëïÉ{·Ô¶§aÉñ\x0003ËÿªåÅu_\x001dzyÃÉÃØxêðæM§\x000e¿úÛS­Û6}âW/yãåËg¿ðÛSOþôÂñ1£¾92lÐù/²\x0012Î\x001e\x0002\x0013Âvî0dke\x0010\x0006\x0012ös­à<Ó\x001a7áôÕÏ^k[2ÿ6?{ÒoÆÖ(³Ö ÿÔ$êãA
\x000f\x0008 ?ßhdæl}eùK·ù/\k?8þòYU\x0017(\x001cqñûº\x00031ÄäT{£zÚ¶e«¯ÝØûöÍ\x0017wÞ¼uyÇÍ[vÝî¸²çÿ÷'÷7<×ü§  /\x000e½(Ì #1Dt`Õ\x0004£$Y\x0007)!*"Ô­¢/\x0004ÝsLéÆº\x0001ö\x0015?y3ÿíyç}®àk\x000e¯âÇ~òk¾f×ü¶ª-\x000f]\x001c¸<ÿóôÙ\x000f¹\x0006Ø\x0005S`\x00074ÀNê¡ Ì\x0002ïù×Íßm\Ö¯5uÓs¹oN¾2ä½9mÞw~~©òwõ¼Òx¨Ô6Ìtr3÷&}í\x00038#4xÒauU>¬\x001f9\x0008^\x0018>°ÇXX;¢\x0000+\x0007À¢!.\x00019iÐöÖË@å¸Ìd(4s~¹4ÎJ¶XÚ\x0011è©óÿ\x0008c\x0012Æ\x001eíA¸\x0008\x0010\x0017\x0001â#©\x001bÃÄ\x0012&	a\x0010j¼Sy3\x001cª7êÉ§x^ÕÐè#¼m½ \x001fB\x0016\x0004òVA<\x000b?sÙayY?o­\x001bY\x0010VN\x0012òÑêª°lh.<éÏE9X.@Ì@¹jÛ\x000e#S\x0012 ?gðë¡\x000fz\x0002!NÂ7KÑ\x0000÷§'ÁââldÃ@¿\x000fÖiÿ*û.õÀcýû\x0004òq\x000e9'
>mQ©	Ð53J>Ðû2÷wº#ìÏ5sÙ\x001d¼¥·`ß²UH;±_\x0004ÚZc´ãz'p]¹j+.6DÛßwÓ¯Ïî=ñÑ¥GÏ\x001a\x000f1bÄÑk1òàn~»WI{ú\x0019Ñm¬x6ÒgÃµíqÂK\x0012\x000eBé ÌÕÂ¡"7\9¤±põ£É×§w~Oê\x0012®ßôÆ-\$Yù\x001c\x000bf\x0018¨J´tâKPi£zg[,}b\x001fÞ/_\x0013ÜÍÉ	ª£rx\x0005Ê-&È3\x0018 \x000béìB¸@éRiK}RÝ-Ap;\x001daE$!l"VY)ÇF© É±i¬³z\x0008õT!F2Ýå6vÚÀm\x0012bkÇìRÓQ=zúÔ|ÙSbk8vÑÆH1ÕãW=¶hµ#é7
´3\x001cé\x0018bk::óYLð}Àï¾\x000b´û;ë\x0010|´æKwÏ\x0005ä÷vwqpA÷\x001cëÆö\x000eÁ\x0004¯Ãçô¤Ù¿5øZ\x000fÜ Aò!î\x000b>¤·\x001d¯â«f\x000fþfRuÖÐ]qVh:\x0012b­°àKÅy¦ÈQ)á|Òü¥Ø_C.Éæ ýðÜD\x0003A\x001fOHëHçG:ÿ!íE³vvIþÓ­Ú]"sI~\x000ez£(çæ\x0013ÏÕÎj¬UÞ\x00055{çvoBC;£¤¸\x0012Ïxfi6(Î\x0002A6É.\x0001áÕXYh3O»àØÂ,³«lMNøÏ\x0002\x0017,ÉM;õC*Ç\x0000PÎ\x0001xY26P/êb»íBÞÆå\x0008ý,¯\x0011 \x0014É\x001em4ÀÁfO<¢ØÖv°ÐÚÞR\x0014(ý\x0014ùË6Ôwãpõvë¤×'f²^¤W)#Êù?ûe\x0002\x0014Õ\x0006à\x000b\x0018á\x0012¹QÁ\x0014*B\x0001C°\x0012#Qã\x0005rH\x0016\x0014u\x0017Qj5Æ
Ùe\x0018«RI6UÙÄ­ì[[nò@6&¤bÖc(\x001a¼ @Cn\x001d`fDzû13ú¦_÷\x0007\x000eÁª0U_u¿¿ÿþûÿÿî~ÿ\x001b\x0016\x0012®o¡éñ=ÓÆ"Ù2JÏOÜ'}	}}Ò\x0018Þ'æ	É4\x0012cËîkØH-ûìq.AÎ×\x0017bK°]ÆOÓe·\x00162\x0019wì±\x000e¡Âæâ:4[\x001cÛ\x0014\x001d|
|\x001dª=\x000cÞµÐs4j£¥¬>\x001bL#µÔ5ËØó4¸.[_úDCZÃÂ6e½h\6_F°ÃO\x0014«ì;i}<vRü4ÿðu,|4ï\x001fÁ.g\x0008zÄ\x0018dÜ8¢±õI{@<\x000fø¾X9Cìµig½>ÛONxûI8W$gbSCËã\x000f\x00184\x001e*6ÖV[ü\x0016{8ºBó·¯éÁ\x0017ÔZã÷\x0004\x0002ö7±øýUAè8\x001a(R!\x001aqÆ\x0019M¤APäÛ
å£umÁì²½²lW\x0011Èv\x0001\x0016¬µB\x00002yÈ áL&\x001dc

54Ô\x0011²\x001ac\x0015b¥ÊÈr'#i®Jñ¦ÀX§¢¨<Ï\x0003I\x001f\x0007~V\x0015úU^[Ô_÷Æ\x001cßØ«9±A0h¾ÈÒÎú(±ijQðÕ	ù\x0013Î*~åP)[\x0003*ÀJp|TP\x000er\x0015ÿ\x0015úW:ïºàûÙ\x001b!'ó;bÿóÖÀÜªwàüêÝpÁ·áÜò¦¸ÃYçÂ\x000f&ýeêöð	ë&Ç8¦yxK*\x0001x\x0015ù³\x0001õçe\x000c*2KÍ0ú*8·ø­âöïwkûÏôéÿ«þÃ·ïu|ýZ>GÓl\x0008wO¿àÍ\x0007º£\x0007{ûo\x0016µ¶WlïéýWv¾¸H««8\x0008a]Á\x0017Gö.vµ-êë¾®¤8ï÷uu\x0015¥úWJ´½ÕùûkñÉ^®)\x000e¨^(¤°HÆÙr3xXbHBßÝs\x0012ãíü+Ë\x0015Ê§÷åsÊ¹µ5	Å·®\x001c»}¥òúõê¦Ö»7\x000c]]MPÛÕ\x000cûºa?¢\x000f=÷÷´ÀG}]\x0010ê´\x0010êµÆ¶ÿ\x0001ÔõõÀ\x0016m§ö|OkÍÛ\x001b?z£µn{âÿ®Å»5\\x0002j\x0013n5À£±FÌù4^¶_Õp{î^Ýo²t+\x0017îÜ\x00114Ï\x001eD\x0005ÂÎ<\x0013¯\x0008d.ªn©yÙÉûô\x000f¯\x001eè×Õfué¢Z\x000cÓb[
/Ð3\x0012>»Å:q-°ØfCØü{úÅù=º\x000f\x000eé
7Ê\x0007\x001ev?\x001ch;>ðèÞI\x0008;\x0011Ý\x001fÞ¼u.³´tçs³f8Å\x0000
P¨À\x0007¥@TÃD#ââ<L\\x0004àÊ;Â\x0013áüñDø"¢\Ã\x001c2Ï÷,[Q9³¢ðAü»àüK{`ÒÙßÁ¿|ýÁesê§\x0014zÿ¨\k÷y?0¤!Ö`tW£wËjp\x0002dIOr*í
C¾ô(/ìÿgÞ­¨\x0019r/)ã¿è\x0005{&î\x0018g9(\x0008õ\x0007ûâ§Ò¸`ðî(R:ÛØ¾\x0011>\x0019¬{Î\x000bdL\x0000Ò\x0011\x0019Ï YS<@j;wQ@©\x0018øYÉg\x000890þD6F<HF\x0001é(!³\x0011v6Ä~8<%ò\x0011à8B\x0014#¯6Ú¢n>M
%ÖQ@®¥£YSÔV\x001anV`ê±¯éÝ5Ö5IHÍòF\x0004I% ÙÇ\x0005lGud_üt°wö´\x0011×£Ò¸i ("\x0008lî\x00032Ñ;?}e\x001dÈjA \x0007HCµàew'0Ý^
ü\x000f\x000c?wü~¦øþKîJ°y¦\x001fx\x000fÅð\x001eÊÁãG\x0014E\x0004
ÁÞÆz<[\x000b3Mõ©Õ\x001e*\x0010â`ÊÁ3p&¬ÁkÆOW`|§óÕ§©\x0013Ê\x0005\x000b$\x0001ÐñYÂ)3	küg£Û'Úõ6\x0013¿­´\x0017«J6þ\x001bÎÏ!!A<Ö{çu\x0011¢O>\x0008Æ\x0019gqUdÓá¿+ÉøµC9ý9\x0018çé\x0010«¡È¿×Æç£·ÏÑ;"BìV`ð4µ|t<)cBì	µmk\x001d¡~\x0008gm\x000eÍGköùÆ»¦\x00109ÎHóÂ·7úÇ1Ó^\x0006b\x0015r\x0010çä8ÔÆ[Dù\x0019ÁîÇ:±ôÌ2\x0005Afg÷Ùz\x001c0½p¹\x001d$\x0012\x0001?ä7¿ÛúÆ0=ããþÀòÙ\x0007µn¨U"T\x0018jOnK\L{4ä§\x0008\x0010ã¶\x0015iþpÖ\x001biLBæ©B_è<¾½\x0012:Ôä\x000c\x0008ñ8ùÆý\x001ann­å@èþØj¯ìµøûê\x000cXw\x0004<¹\x000fì»Á¾;lð;Ï·\x0018#Ü1=@~¿<ö\x0007_åÅz\x0004Hëq|\x0013\x0011|\x0015c¦ÆG±E7nÜ/\x001eÿ9ñ\x0010ü ésâ\x001afL¤\x001cðúC;?X¤1k~sÎ.;\x001eó\x001cÚöËÚ".|{ç{Ú¾áõ/÷xÎúÇÎ\x0013õPöQHËwÎä\x0019ß7Ú\x001dæäÍÚ½¥y|¿øÞ=´;¿øÖ°;â½$sÒþS|¦ùï\x0013ñì\x0012övoIwø. ì!ÓwG¤Lºþ v/øi3\x000fÖ\x001aû
¿õ\x0005_\x0008ì\x0001ü3ý\x001c\x0011ÓÅ\x0000hd\x0000Drû\x0011léù±ÌÜGD±\x0000\x0010ì§¹8ÖÃÓä®9ë.¨¨©~Ü7a¸<S
¯ªþ¾ÚSªA9xQbiÏlÝ²å$\x0019íù±\x001dM<\x000e\x001a\x0004;4¿ä'¶Ik\x0010ý#Ø$úBÑÓ0HD±Z6\x001a\x001ci$\;Ã!
[¦CcAç-JflúRã³YÆ\x001eÓ\x0010ä|ãrõð9$»\x001cÛ\x001d>]Î8a.ß3hÔFò\x0014mzæôM:Ñ,y4AÇ<Ï¢%Ù³2W#Åôh6eOú$p}N¼øp»¸O¤ÜXØ`ûåÉ"Ïx_ÆõíÅz=£å\x0014\x0013_p½h\x000fñ¬m!#øaklH}}¤õñ³@ÛCgl½h>)\x001ebÎ1ÿbQ?Tl»ú¼5À\x0015Ô\x0015âß\x000c>Ø·/6fùmñöÑ\x0012YÀ t´5¾MP.²ÈËqÆ\x0019=Äj(ò¹\x0001å£qmEØÓ\x000eY^rí\x0002X+,+dZ!3t
kh¨M°úi\x0014RÉj\x0016«\x0004²R\x0005ÀkN\x0000,S ¾Z\x0002ÖzùÙå\x0007¿¤~'aß'+NÍø<·>â«õG×õE\x001eÍÕE\x001eIï~áPJkðØ\x0006ÿ?Ì¨õØê]¥ÊU|'Ë\x0010Uà\x0004X\x000e¡ö(È\x0010\x001f\x0017­W²ß6ùsqø\x000f^ïÏ»\x0010t$«9ü»m\x0003sªvÁù\x0017÷À¤óÅ0ñm	ÿÈ¾8kÒÇAoFl\x0017 \åæ&Yª\x0014ÅÈ§Åè\x000fÔ\x0012äßR\x0015%J\x001cÅ\x00119#pëñc\x001flìê+[Ö®Ë)¸¯;ôz·áË\x001b;s\x0013Z
q-çc[\x000caÉmú\x0015[º´ætô,h3$Ç4\x001bBÒ;ôÛ÷ë
µïv÷TeïÜ¶¦àó#¥\x001a\x0018¼Q6\x0008ëö÷ë*3\x000cÜÜ\x000fáíõû÷n^¤\x0010R/)J~\x0011\x0004°\x0010ÙJ´\x0007à\x0015TÓ{)\
vlY²áûo3vÝ©ßýu{óùúÎ¦\x001emÇ]Ø×~\x0007vµ5À»×µ7/·Õ]«ºS[söVõÙS«OW\¼VõÃÕº«Õ7êk:Z\x001a{´=í\x000fû{»¡A÷\x0000>Òi!41Ø\x001f¶övÝ?ÓÓZ]ÒV·'âî`¯Æ\x001a{ÇKÀ½±\x0006x4Öüý2\x0001êÊ\x0002èýM7ÐMC7ì
¸¢ÈjXÍhFÐ\x001aGGD@À}©\x0018h*	)\x0013 Æ¤Ò81qÊe\x001c'£¨è¨IÊ\x0019×â::.(\x00117\x00147°\x001bxó~/ðûñ~o4iLúWzû}÷Þwÿ»ÿ\x000bôxãvð\x001a×âº«ãç>V\x0017[÷UL¦;\x0003Yø<²¤dê\x0018e\x0001YîÚ5él^ï\x0017ä¿àäm öK¥w×Î¼Ò<}öIõÄ\x0019GÛGÏ:Ú=ýxÛè¶Q¹§ZGû¯:íkêô\x001bªøÔª8\x0016|¾ñéÆÃç\x001fç=7ñîÓK\x001e=ÝñZ]¿«µõ~¥ºõÖÖ¶[U\x0008ÝßPÓú\x001b
'ç¬^³,2Y\x0019M\x0005|<Ã\x0010¤\x0004îfàa!2\x001a!r+ð4\x0003/\x0002}\x000f&\x0010\x0013	Å(t`Ýüuô\x0013J´>n¯¦.S¬-<\x0014û¯7¨)Gcª¢1û\x0017ªÿKî­è¥qg\x0002^ñúA\x000f» \x000f\x000f»¡@Ã.³È\x001dP,Úë´nÂµHöþX³9"\x0018´z)~E\x0004bÃ\x0005\x000cL\x000cñ%Ê°*c\x0008T¤Eô\x0018Ë1+Ò#`qÒ\x0000x52\x0018Â}¡0Ì\x0017¦÷>ûöÁøÂ¸@9D5±a,>Bu°ñÍ¾¯¸Ð<
\x0011Ø\x0019§\x001eBØCl³
pé\x0006®6@l!nàf\x0005dN4\x0017sr§µ9Ô\jm^5'\x001aË­æàMAýMÜk½	6G\x0007`\x0006\x0004\x001d 7ãÂaeú`øh¸uyk\x0005^Ëæ$6\x001fÍ\x001b\x001a\x0002Åýüp>òBN\x001e`sT	Î\x0005\x0005á>0ÆÏ\x0003¢Ä¢\x000e]ìá\x0000Ý¾)r	ü!2DcÇ*lÿr«óñ`Mî/ÅöôÃvbûåÃ	8\x001fÆK]4¹Î^>°\x0004}^öc´w©ÓÝ<áâîÎ¶#IoCZTÄçxºù\x0008d²^y¾¶DVV&²·åÇ{ÝÎö>CÉK\x0008_s\x0008\x001c8pà 7âì}OþÚqIC\x0002{Çîã½\x0016Ùü#ä«õÎþ ýçdñ×Ám\x0007\x0010ÐúÍáol)=üMÈ6¦¯9kLÍ§íoJ®±qKìáó\x0013é3Km±ÖG|û6±e0¾b]!ÕM\x000c©R	¤à2\x0005©:Øvª\x001eNÇ¾Í©§pdqå\x001a¬§ÌéØ»'g,ÊE\x0008
\x0006 \x0004´pëú¶¾[\x000fa¹Üy:?È1\x001e\x0018\x000e\x000fN¬sø\x0011sikøä°úôÑÙ\x0011ªÓ³Ã.ýl_(n\x00073Z{¼ìeJwcãÆl0Ç'¤oÌeÊwæ¥z£»¥zXë3¾ý,=Os|kÝñ5ö³¥7&\x0008´±¯\x0000Ý;A¹\x0017ôï;\x000fèóøú\x0015´>½<½»ÈÖÍéÐ­\x0000B.G&mOrM\x0017;;\x000bm
U\x0006©\x0017ÓU\x001e¹\x0007Í\x0007|:på\x001a»ß
æú\x0018ñ\x0001Í^O»èBé§?!ô\x001b]ö¡ùÄÌ8$ýLÆ1ßvAÄ\x0017ÍÏ´¼k,þÍÑïÌhgÏ\x0017w\x0006ã<qMÖùÞ+2öÍñ\x001bíÜ
î\x0008R\x0007¸å»\x0017hqAó±YmÐÍÏÉ4v_t´yÞy£º2µ´Xâ9_w9Ï]Ø%H_óÜ=T¿ñÔÙï³D\x0008ö\x000fÿ½\x0011\x000cg_\x000bêàÜkl[O\x0010\X\x0010\x00045\x0005!è*ëÁ¿\x0004àíqÂz
1"]IÐ¡é\x0013u¶5àv\x0012\x000b;×&9qêÂN1QxyRh9\x0010)Qµ\x001c\x001fêÑÌ¡åGÜW\x001d%{Z\x0013-W¡ÚhÏ²¼\x0019v]^\x001e§$÷à¶\x00139z\x0018ô\x000b
×¶ÞÎDrO®~ÂÎ9¼:Z°g\x0017[\x000cÛz]ô2:I"êÜ69Nc0.¤\x000b
çq÷çÃ§S\x0012_.õñ&ÒÖõh|¢ï\x0017\x001a¶õñÙ±^HY#ê\x001c'Iâ)¹ã\x001dqNé§Î%ö4MÚI¼G\x0006ûëú,Ü6§®oëûäZN¿RÈ#SÔURØ9_IBÈW\x0012òIý{Su¦¬¥s}ÃÕÅ@_\x001epû
ü@Û°GIècà\x001b\x001eÛùl1ð\x0005Ç×JÎY~¢\x0007¹VH÷E2¹\x001fÍ\x0007<çA;?Ò\x001f\x001dã¢NùT¿%wOÊ8o¼SüBµ°*\x0012KÆÎ­§`b\x0004¶ËÏ«ãýáâ\x001fµß\x0008çJõß\x000eÜzg_gÙùMq¦4\x0018¦\x001dßæ\x0012Ú$¶Fþ>Â#pà §`\x0011øíE=\x0012¿¶¢ÿíÛâÉÊHA'9\x0014S(2i\ä])4A\x0001
!ù\x0004S1yº¹ä\x0011L±\\x000eY<\x0000&¹\x0003LjË)®Ì,E´øÄý?Éþ¼ÿÆC1[f\\x001b¶mæ½o\x001bmÎ¿\x0011³aÂ!\x001ay½oÅ°AúôïD:Óu¿p*ì\Ø\x0001StäA%\x00149U1¥~ÿ~\x0010S\x001b°6çzÄöÙO\x000e.B/TÆÔT ì#ï£¬½\x000b\x001edüuú±øÏÆo\x0018ô®òõÀÙ}Ó¥¹Þ>±b±ø·í%¬Û\x0004w\x001d¸>gHðÀ9ss¦Ty§mtJ**½A5,£Aõ\Z}s,®ÇaâYR\x001bT1¸?\x001dcëi
ªè\x00117¦6µ|¹ª¹åô÷\x001f\x001c{÷QKÕüêõE-oO½ÓRúÎ'ªÛ.]¸XùÛØÁã°\x001eãÜ
\x0019«#Ç\x0002^t\x0003ÈÆú\x0017\x000e\x000c\x000c¯5eî¾­\x001böÖ_=û¸©ñ:ºë
ºyõlóå3Çêk\x000fï;qlÿöï\x000fîÜR¹ë¦¿U}ýÅº>_³sãÕU_ÿyíñ=ÛÿYûÃÞ=§0g\x000f\x001døþÂñ\x001f½T{¬öêÙó?]:Ww·¡îþÃ¦Ûêææ&¤jyZ[\x001e!K;\x001b·4Öÿãw?\x001fß§îÐ½®\x0006|ëN0¸.`ñÂí¸Ë§Kî=SQ\x001eé\x0002Ï \x0013ëu\x001fe\x0005úu©ØQøÿ#\x000c\x0018\x001dá÷ÊÖÃ\x000bÕ£/Êµ-*ßf,«BEåU¨\x0018×Ùr)n/©BÓÞÛò\x0017~&Í=Ü3ùTëÌËê¤ô\x001bøloªâÒnjÏ\x000f|Þ±l|°g^Òøô­¨\x000eü]¥jØÙÚz·RÝz«²µíö.\x001aw#Ô´ñös¿_½¦|h²2\x000e\x000cØdp·\x0000\x000f\x000bÑ`\x000c[§\x0005xQðÅ\x0004b\x0014&\x0008Á\x0004c}\x00031\x0001p'1©xQöúó«Â7Í<p°\x000cýæÇehÌáÅ(óÛ\x001b?Í:?`^Xgd³(\x000f¾©°\x000bò1\x0005FÈ×ñqÚå°#QÖwo«GæOôd÷4¥ß/\x0005ÖÏ¬½1bg\x0013\x0011\x0004+3\x0006Ã
LEZD±"=\x0002ÊS\x0006Â\x001bqa0£¿\x001f\x0014ùÀ´pß^Iqß>õ\x001bîå\x0006ý\x0002ML\x001aóg¨Î§ì»)4\x000fÓ\x0003\x0008ìS\x000f#´1"\x001bâl\x0003\ºk7\x0011[¤\x001b¸YÔJz"\x001aÍ¥@Ï©=Wùr«)¼	Ø>\x001f¿îÎ²w.2+_ö{ ?¾³\x0003ä\x001c²2}°&o-·"\x0017-×ä£ÁðAò\x0000\x001f¥\x0012]>*ì\x0007´e¿\x001câ$Î\x0010*Ð~ØÃoA %ÑC\x000c³\x0007\x0005BEê ø(c\x0008,O·.\x001fk×
·Ã¬\x0001þTû¹ù0Wá
i\x0012èëÄØÍ\x0007Âæå \x0007£Í\x000bæä\x001a[äÀê\x001a×Ðv$émHô'ÇÊGVV&²÷9ö\x0014!÷Ä®Ã\x000bìíãgý\x00112ö>Ëj?ÿ\x00108pàÀAoDþ\x001eúÅæÒg\x0005ùR$²w\x001c8è>Î±H`óøhz þ?ûå\x0002\x0014Õu\x0006àÿ²\x000f`aYÀ\x0017°ì.dÔ\x0011PË. F
èøj#\x0011\x0014A\x000eÚÌ8U£6©tl4
bÚf&I}t¦SITÛ¨(\x000fMÕ\x001amF%1\x0011«ÓÎ\x0018\x001f\x0010\x0013_i#,Êí¹ì½ì¹çs÷î²ÂÌ7çqÿóÿuÎYRrs#Ñ\x000eId
¬ùÞÊöV\x0017í»5á´±·>bK°:ÂW­±gÅw\x0018"]ÇÓ\x0014\x0005\x0005±&È|©EHc\x0019â7©1\x001d\\x001eÞ§èÕÒ/ñ3:HE6Û8\x0000»Ð\x0008};ç\x001fKs6l\x001e±ëí¢®Á¨\x000b# æÉ9³Ø
6Y1;q?z|\x0010ç\x001c¢\*çËi¼¨×Ì°#\¾Y(sÒõ¦%ÏÒ«E·EÃÞÁæ1¼ªÅGËÚPj*½j²¡î\x001fjÌ\x0002ù¡e 3\x0014üç¹çìsÊóß\x0001yNy¦Xc²OÞ)6âÌö@®\x0013eÉ½ì*öÒî7\x001b±\x000fõî#ö§ÙEÆ\x0015\x0007E±§ÝÏ9Æ>ÌÓrJÆI%Çd¬É\x001cÓl²a9¦é ù@Û¬O-± ÅÌ\x0001+ß´·Ußd]Ðâ\x0012èL(b¦R\x0013´ÜÉÖi¨@¹dê`ä<P\x001eXµdÇ÷gÔ\x001f-ø »K\x0002¬Ãe©1¦Ô\x0004íÞPØÎ:·ÚQ«S2Æ¬ ÅLV\x0013¬z\x000e`\x0017«&9j6«É²|\x0014ÚDD­+\x0011¾ü\x001dÎ­LõñØ®´\x0008sV¸ú
\x0011^½\x0007÷g@¤E\x0000×\x0003ä¢\x0013µ\x0013\x0010N¬/áÄæs1:öXèF{lÀuÌõ~ii?8í£\x0003k\x0005:ÏfÆ{OÙX\x0018Ïe¢u9:¿¾@ûH­S£],ûY8ulÙýYó*{ÓtRçôÊ=¾Kç#WDê»ôþ±K'ï+æôry,¹ÕjSØ+Í¡\x001as\x0019ä-\x000b£­sQèþ¦¯­×+÷Ð¢¦f3M\x000f\x000b·Þ«¾A>ßóÝàÃ­u\x001bü­K­|!Öá{ÓìÁu«éuSô¸I9Ü\x000fÜ\x000e\x001cBØ¦K1Ç°_±/±\x0007n\x000fi+mLÚë¢Ø¢È¡\x0006\x001fÈ=É¸+|"ê¬\x0013²~Xþ³ìeæå##Ô\x0010û°jUÛÔüa5ÉÒ¥ðÏ ô/\x001fÍe£·\x000bÓÛüþ\x0014¸¸:Õÿ»a%åw8nÁS ~\x000bj?]\x000eù­\x0017£\x001c]¼)¬tò&½Gnò0À\x0000}Å Í¼1ìµ\x001bf¦¯X¢¯J\x0000 á¡P©xÅ\x0014* \x0005`\x0006ÊD\x0016 J±±ÄÂ\x0000,ÐH©
%*ÌGÿ&=e\x0006\x0017ãë/\x001ef3¬\x0018UdÙ0qmêâ=\x0019o{>\x001b÷¥W&ì®nËygQëØ·J¾É|«äÆ\x001dó®?úú¤KéÏÙOÇÿÄüQäbÝAn!ìRØÛM	|\x0008\x000ba?TG\x001fÖ¯NùØ\;¡Åº³äë¬¦5ÞI'×óÓ7ñ³Î >^Ï\x00175<{sÒ{Õ§r^ýÏOXTíÈ1Í³\x0018¹¹Ñ\x0000ËFs¼þ«u/\x0014t²È}½++¿µ3{b«w<bHwR«÷1±?¾@þM\x0018g\x0017¶u\x0014.½Õ¾iù­»ç\ï?¹Õë¾æ\x001dí¼æ\x001dùã\x001bí¿|­½ãµ·î|RV>ê,ôþÌA1\x001d$³DfÆ\x0002\x0014\x0019\x0001æ\x000e2Fý¢xzÉá¿¾Ùtíòù»­W/|wñO¾<u´þøÑ½ïí9´ëjx{Ûö\x0003;~·­nû\x001b[êvlÞ¼ÇÖÍuonÝR·sÛÖý¨=¾o×Ï\x001d?ÜôÅß\x000fI4~~¬©áó£õg6Ô£ñ¡ó'\x001c»pêøÉK-Í-_]þ×õÛ7ÛÚï~woïø\x000fßàÛ¿åïü÷Ö½=7¯ÔÍ½Ú23áÒ\x0019\x0010\x0018z©9bÈ¥f.åògÆ'ïÜ:§¡Ñ9Õ\x0018ñ\x0004²ýHB\x0014BÂX\x0006&iHnªÑ×
k¦ rÑ8\x0003½ãvtû¤Å\x000cÖÏ(})ãùÝ·\x0017n:ÌWo<È×ÖÝ«¨=àõl\x00148Øé©­¿ç©mà«jøªFÞór=_YsGßyÏz¾bí!¾ôé\x0013]³tþÞÄÉW¼å·yÇååÏ/
ó±ù×¼YEm\x001dÓÜ¸»þ77n\x001fy§½ãòÎÎ¯?èìlû\x0010±ç¿9Àó··]k;3wÝË\x0012\x0013\x0012Ìè\x0018A\XH8:ñA D\x0006Ò·¡\x0008+Âpm0Ø/Ã\x0010É,sº±ø\x0007åkæì\x001eõþòÖü\x0013\x001bø¢S5üÆµßNÙYu!gÃÄ´:>°x\x0007tÂý Ü	er¨±\x0000}[ò\x000fsã*ïÄÓ5üÌ7Êd\x000f7ÆEX!xû¾\x0008~
q6Ø\x000c/ä<\x0002¯N\x001a
¯\x0014M}Ä+\x0013GÁ¯\x0011/æ\x000ee\x0019V¨L\x001f\x0002\x0015iC`qúÃGå#CÁøaJ<5\x0019{j\x0015KÈ`\x0004ººÿ¸>"¢Ðõ\x0011ú>Â\x0010\x0006a"²\x0017Dõè\x00101HL\x0008Ä\x0008ëÝ\x000cÇ[J}OAým
æ]
ö
ôÖ²\x0018DA¸§;í!x´
¾·?
]DS\x0006ÅÂª,G÷{ò[ôfö\x0016e ·(\x0003^Î\x001b	ÏuÀ\x0011IÝoQ\x0005ñ\x000e\x0008o\x0007µó¬	àt\x001d×mKÄ \x0005|6@åð$xÉ=\x0012^\x001cúí{3\x0011°üÑTôæ±ßc!\x000eBl¦\x000fH}w\x000c¾\x000fµ#ýÖL\x0014ïa­ïM¸ÞX·;ÂÑÅ\x001eFb++\x0005W\x0007þBøÓ;\x001cíÆÍèþÎa_0¬éPdExÍ\x0006þÂñgY·ÎÐß9[É£³ÎÃ\x0000\x0003\x000c0ÀÃÆ]|dßÿï¤4óQý]\x0007\x0003¤c|T¸ëÃ¶w_d2Ò®$rÁÊJ\x0012¥Oë­Î`|ÔºþAÄ'\x0018(ýPòKÎ\x000bã\x0011z\x001d¸c¢¡Àl<ÔæÇú[©\x0015óoùä¼ÔïÑå_KÓÉ\x000bm\x0001Âi\x0011º\x0008HE6Û\x0010vôß\x001dït	\x0019¼µ\Îú	¨SÁÂè³dXßÔdp\x0012\x0011)¸\x001fbû"|\x0017â2â\x000b¹§V\x001b´¬W%ÄX\x0005kV[zë¯V\x001d4yÚÚpÄ&Ô\x0018kµ±·yÓbC(yZ¡Ö»Ï	ví@Ü\x0005Ä=Ñs~q'pò;vÖlØ}#éQKrLÚÄ)Ï´ì.\x0003uýu¤Í²\x0018QîJÚ=ÛBÛ\x001f¿wi>±î]Mß8õýY>¾©½\x0001¬\ÑêÔ§xg8¥í´X²ò\x001d¨\x0006iyfíAË½ôkÀ×3E=©å¢VÓÔÚ\x0006ß\x0019¤­a)\x001e½Î¥Ú9$ãÉÚ'f\x001e(±d­g\x0017V}*rÏq½\x0003å9@M¹·1tÙ)~\x0007º#4åLÅ.fN)ç)Ðy\x000et®ñþ DU¢\x0019Î=mU©pn¥\x0015Z\x0011Z	k\x000fÿþ¹
Þ}<\x0019L \x0007ù'ü\x001e\x001d\x0011\x00010ÁÐ\x00038Å¶»/6W\x0004ï\x0007BÍAîä¢=Þ]¬ç[²-\x001dÍÓ>Ú	¹{g³âï\x0018\x0013S3-Ë\x0002ÿ~N\x000f~Ü&'1/ÑÉûT{\x0019ßió,\x001d,½ä\x0001tÊlÀpa-\x0015½\Õ¬u©¬!õ©É¸Dÿ\¨Îr
òVê«\x0003És¾^.K[GêcÚ¦WöIÛX6ºH=.Ôº%\x000c"Òw=ö"+\x001bK²\x0006?.|ìs}%ý
;õnl?Ú¾4p¿È1)'[C'cïKê$uÑü%}ÁcMgù&W!%î4p?IÝ2Èo±Â\x001fÂ7ßjy ä\x0016\x001fZÜXõÌ²µæ/mo¦~={¯|4ÎF÷\x0019\x001779\x001aiù[u2\\-ÿ üÝ@þH\x0015_Xáðz\x0017vÿ¾ÉÑÅ!»øH\x0000\x001e\x0006\x0018 ¯]ÊëÃ]·áÆ½ý÷Æª\x0004ôûÀC¡Rx\x001f	*B Á"6Êl\x0019Ö"ã\x0000\x0016Z´± \x0000¥\x0001(ÑÈ|§}Åf'c\x0000æÅ¢ï	FÎó?öË\x0004(+
Àÿ\x000c3Ü§rÈ­Dð@NE@FEå\x0012o\x0011\x001bYÕT­\x0016¸QSA¢Y9V£\x0007 D\x0003¨x[Q¹!Aq\x0017]\x0015V1ê\x001aQcÂ%h	Ê\x000cWïkf\x0006{z^\x000fÃ\x0008ÁÚbª¾ú_¿~ý¿ÿê÷÷Y«lqÐß;÷ Õ±\x001fíÏ¬©r~Mã³MÎ§ÃN\x00065Øç\x0004¿rHõ­µÙ1±ÚpQf$§½\x0012.C\x0010b¥ ¸\x0002!\x0007ë4RÞ1ñaªï\x000b\x000bzãR¶µ{Ö­]ß$Âÿv"á_±ð-ÝúÎóxÄM§]¼Ý¦/íÝòËó8÷&ÂÑ³¾ÝcV½`Úôºv'³\x0008'Ï:W­À2GÇäºö©\x0008\x0017ºv{tí@ÞCc»\x0015/ùîk\x0013ÜûßQ\x001d¹%:Ø\x001fõùZò3¿¦\x0015úÆý¦y_>z0ëVY^ùÕK§.\x0016:z,/;íH^æáéÉg2¿O:x.;kÏìï÷_ÉÎ8Tp<-\x001d­IÍÍJM)Ìù.£ê§üÿùcéýë¥%\x000c\x0014W\x0014U_+.¬./.º_^RüàFYù³ûw\x001e4üö¤±õÍËN\x0001¿èâ·\x0012\x0004¯ß¾\x0016\x001ch|jóëtWÁó*\x0016OsKX+?ÀûØÑñ~1Fû®
3ñr¶ÕðÒá·*·&\x00055èó\x0019¡ÉYhi¦\x001bhma1o´ê¤\x0011¦Ê\5¶	:}Æ \x001e²í²ûß
ðü®­9¯F¥7ÌY´ÿwb½OÒS;ÿ½¿:/û¶Ö=*ý¥WÌÉWwþð.$©°kUb1\x0011\x0019_HD$\x0014\x0010\x0011ùDÄÎB",új÷ÒÐÊ./ß\x000eW\x001e×zZÊ;k×ïïüÖ5¶ÄÇ·òSøüÇß	\x0004Oð\x0005ÓøíÿMë&ü£x´&7ÿñ\x0018+cä\x001a W\x0000«R
ÚýD\x0007\x0007K\x0012]\x0005Ð\x0011\x0018Èù\x0008C)Âb0G~y6\x0006òZ	¦èÙªF9f¼?0oRþ_ßÌ$ßë'\x0010~¥¿\x0019þÄ)Ñ½Êbã¨kÜ"v0ä¢ó \x0017BÑ@É3#si£íí\x0004bîõí]^A¶«^ó\x0001´÷cá'\x001c6\x00046Dq°wÆDø;oü ±gú\x0004H@û|æh	Qc \x000cí\x001b>æã$ÒÊ\x0010BFëÃ¬(F¬z`ª	K\x0011Æ\x0008uxÿc
\x0012ì!Di\x0010à\x000c\x0012Ü\x0001@yPù\x0000T?\x00105\x0005QW\x0010
\x0005ÐT\x0000-\x0005\x0018
øÞªh·ÇÊêµ}1è¬\x001aêþÓß^eÉfçH
øË$sØúÉ¾\x0019\x0013`÷ôþ÷!òÙÝ¨\x0017Å»Ûôô¢µ6£ \x001cõ"z?\x0010õ@ó\x0011ÀÓU±\6±ß\x001f´ÿf ­*\x0017YèÃ\x000eWë~ý5òCñ~LÊq°Íi\x000c¬¶\x001e\x0005¡d\x000c°½!,2Ñ\x0003g
^{º&úBÜÉïOò\êo¿\x0019ÈÞ¡\x0017\x0013Ãµì&Ô?6Ì_©);8­}ø×ÏÁ¹ó*C¿Á@'.;Ô±ýû±utXä»6y5­!Ðg\x001d\x0001Ã\x000c3Ì0\x001f\x001b¦!=\x001f\x0011Â\x0019C°º\x0016ùp4Â\x0008Î |Gxz*\x0019£\x001dÄ¢\x0002Üþ²lêËÞþø3ª\x001f::Nòø2T6÷¶årÀCS
xê0MC
%¥p,¼îây
ñüûg¨×Tè÷¨×½P÷§<GÚ6EM\x0005Æ°Y`l¶@%tÈùÞ5bX{¢±%FHê ´)\x000eÃ\x0018·*Ö2é\x0016£'Ê/¬÷>Ðý"Ç¦\x0008C.BÁ&yé+\x0006²ü¦ÎË\x001bDòÚË¥"v(ê»¢u31ÃåS½\x0015}äYÓ\x0007é÷þKÌ3­aI\x001fô1n-]\x0005F<ú¨z¤Ö1¬e\x0017ã\x000c~SõÓã]\x0001·É\x0016\x000bnl,ûð\x0019cÜ\x0019OÏ;n=6tÿeÔ\x000eÎ¾üÊ-õZ\x000eû°½¡ödÆ®S½\x000c>Ëò\x000bCºÏ8p>ÐãÃT\x000bØzfÐË´·Tp61ÕZÁÆá]·þe+\x000cõ/+/ò_ØZQ½0ÅYFLdåZf½brF·\x0007w>Ézïúz·zÇ4ÉT\x0013ä7­5
¥!Æð8Æ\x000c~ÞdJÁLbü \x001añgs°×V?òÇ\x0001áÿl\x0000W.ÀT41\x0015IW$]DRÄT%!Ôë\x001eI¿¦®Cr2ÒÍ\x00036m¶P&\x001e:èðïØõ  Ri¯+o¿k¯ÓQa«±k\x000eÛ\x001eÏÓíÀÙÛ_¦m\x0018pþõ0Ýc\x0011}LÕC×%µ¾\x0017Â
ÝÞãJ®J÷pkèsb}bÝ®\x00188½X]ýØ¿wo°æÜÄõ&nâ9.e,¾OÇI±\x000eº\x001eúZú¼\x001e\x000eÃz¤\x001c\x0014Dqq'¡^ssn\x001cÚ\x001cWr½;\x0002æyÜ=ñó\x0012{cö¢¯Ç=CïÝ\x0013'¹v`íåJÚFÄ³\i;©1vôg0qbò¯¯\x0018QíÇî+ÃW©8böðiº>zÌq1æ0è£Ù*\x0007\>1y¢?ó\x000bO¦kLíàüÇú«):ÀåªÏ\x0003aÎ5Ö\x0000ôd\x0007®*Ü^k
¢ÍDß	fo\x0006¦±ä·Åá£ë,»	õFÕ@^\x00120Ì0
`[ð\x0007¾n\x0007\x0012Û»Uª!cõYz\x0000t"pèJ\x0013N!L\x0001B\x0019\x0008Ñ\x0001å~0 \x0006V"\x0016k\x0003,×Æß£³¢\x001f,ï@9X!@[È\x0012M¥ZÈV\x0003CÎ\x0006ÙÚ_NÛdrpqÎø\x0013«î9[[ïr.ªyòÙ¨fçÐFÇ\x0005µãy5\x001fÄÜÔR.Q
\x0002V0äB0\ Ä
¸\x0004+\­ZÊÙlzC;Þñ¾É±%õ\x0013¯lhs/û¼cvÅNÂçÆvbæÍäÍ6\x001fÑÔÉóm\x0010øoxÝv °¿Î£®Ýaz]»\x0013\x000f1»Nà¾¨¶Íof]»\x000b9p\x0016AÞw@kít¤ÎSÆÎäý¨Ýoùwöu\x0012\x000f×ÄïX7\x00175ùZÒÌ¿Hú©\x0003Dû¸y\x0017LÍû!ýô\x0019éyÙi©¹Y)ó³RÒ.g§\x001f:zââ¶¤3\x0015±çïÍÞv®÷ù©ªé±§oÏÞU²8+=#®àxZznfJÊÕ\x000b'ß¿^ZÒoÊK«¯\x0015\x0017ã_*+n×=ô{kKS§ßJtò[î¶7Dþ«ßÊ\^Ü0òy%è?«\x0004§c#Zß\x0005,zQ7gIeµgHmÓÂÀªjï\x0005\x0007\x000fÚy9OP÷BÊ[\x0015¡\x00060ÇÌJÙÇ{½ÁÊOÙmL*\x001bwø_Q\x000fT\x0006lH¾ë»vÏM¯ÀM9Sx~Ñ\x0016\x000bÖdØ¯ÿö±oÀW\x0015._>µ4kÒUmáBl'À\x0017èEÄ\x0011 \x0014×ÉVmå\x001an¥í°§eôÂtþÔg\x0005\x000bvåw%\x0015\x0013«\x0012ÈøB"\x0002\x0011PÆ\x0005DÄ¶RbyÔ­.?ß\x000eWzëzÉ¼Ò kÁÑ³®}\x0003~x3ÿmoÚ. WíÇ@ò
_ð0¹£ëQ`êíxxØµ6ÕUUå¢t\x0018ô\x001a\x0000J1hcÐ¡ÃF·\x001füý2\x0001nê8\x0003ð/Ë-Y²|áKmN;
\x0018\x000c>p8\\x000ci99iR \x000c!Ü\x0016\ ÐfHHèARÊ0¡&t:eB9:¤¥	ÐP\x0002ä¦¤M\x001a á¡øuW~2«}»ï=Ë\x0012r;ÒÌ7»oßî¿ÿþÿ¿ÿÿ\x0014Û\x0001â\x0014HBX\x0011\x0000bGg¶"\x0011\x0019á&ÍÔbóÜ¡+lÛf\x001d\x001fP¿Ø5âý\x001f\x000b¥Ç×\x0008cöÏ¿Yôú£ÿêûBÖéÄ§¢\x001at8\x001fLEù`YÏñK[GX'­ûÙ°Á1Y)\x0010X
/\x0015kgûÚaÓð,ØPÔ\x0007Ö\x0017\x0006
¢LX5¤;ÌÍ´Bez7¨@TvAf#ª2\x0012áQk,\x000ch1\x0019[:Å\x0016e@©ÊýÓ\x0004° ¡
\x0010á\x0001Bç\x0007ô~"¢\x0013Dv\x0012\x000f\x0018;AT\x00070u\x0002s\x0007aÕN%$µ\x0015Øõµ£5ÖZ«¦ÞÒÄ\x0013-ÆSíDÞêÊàÚë\x0014î\x0017Å\x001a¡&Ëæ®'¸^ùZ6¢:T[Ð\x001b\x0016\x000fH9½QÎO4ª\x0006d \x001aÐ=\x0011¦;âáá8\x0013ôÖkÝ5S®\x000e\x0004ºVgêÃ¡Ì\x0011\x0007Ër»Ãæâ,tÎ×ãÕy=á,~=Æv¨Fµp*²C~\x0011}_¹¿µ\x001d\x0017J8ER5mw\x001f×\x0003_j¿kGÒ·"­±«a¿rÕ ÏÎÆe>ôSù3N 
¶ß\x0002\x0011\x0007ÅÅ¡8\x0008ÐÏ²r¥.Ø>' Ô&@\x0010!Bt\x00154\x0006\x0001w_\x0003C\x0008FËbA\x0017ìx\x0008á;¥\x0017ÀÖ,\x0018ü\x001d\x001fö"5\x001aHA»`©V-ô|¥çÈ¥v\x001fµûû¢§¿ÖúÓFJ¾ðÕÏ<û­U\x0003Ð?R\x0007&£\x0002ü(C[ßÓRã¸õp\:æ-\x0007\x0011å-£Àk=±¯É{-Ö-;R\x000fN¤¯\x001dÚp ¾\x0003¨g\x0011òÙÓ·s\x0011NÜGã	¨FÅ\x0016c\x0011¦Z\x000b1'z¦çóÆxÅy\x0008\x001bÒËÉ:\x000fuNèÃD{°ÎÀzÏ:¿\_NÒ\x001cµëÔØÞ\x0017Ù´läë¹h}ÕÚW>jõM^¬úÓç¼wj÷ðØÂsWp\x000esÀý<àîk¼ï;'è\x001c!É\x001d 3\x0014r\x000bë½\x0003\x0018rÁ;\x000fyÝg\x0006äþ¬<@Ëì!\x0003é9ôyYç£íI¯S<\x001bË_Ô3­#ÓÆ*Î$Y¯v\x001eÝÊè`§c\x0011o8âè,\x0017\x001f\?Qri»óâG2Îò!ç¾´ëF \x0011Î>J²åî\x0013m\x0017X1Â»W<Á'Ö<¯9~Èãä'æy)\x001bòl$1&gsÊ§¼}x>äå%¹8ó/ï^²l«x\x00192år\x0005o\x000fÉ]ãÄ\x00067f8y1\x001eñjN"|ºÐ\x0006gça¬mí|\x001bÃ\x0010c\x0017\x0017Ù`yO¼âÁþÌây²Ã\x0001"ò\x0010C´m´÷Åq9<ói°Ì\x001c´G©!\x001c>ÝÚK/Ïqìgi\x0011q\x0011­{\x001fö¹óçLÛ'&å¡µ\x0003Ã¼÷àíå¥\x000fcÒ:Öûv9\x001dxr:¤
]û\x000c% ÇÔôéõrãyZ¾\x000e,]xrÛum¸ãB'Å3Gyúá1,æz¢ÇØ)Ò'§\x0003Õ'[O>\x000f\x0013ïÊ0\x001dÕ\x0012ã1ad_ç=ÏKG¶ôz\x0005^óh\x0019N¤\x001eô9¼dRç¡eðÖÓ2hY\x0012;ÊìÁ;\x0003Ý\x001fFÉ¦mÍ\¯ãè¢år¾\x001aû±ì%ñ\x0005-OÎ6:úÞ#\x0019Ö¹(»±Þ3íÈò1Ão¼£ÏÇ:§ä<\x001c¿ó|Ú~áþ©ÇSb-p®Æ\x0006ç\x0017XÅo\x0003ñü~'~?Ì'ÇÚæâ±wvè­Ñ¤\x0015"\x0001\x0004\x0008\x0011"\x0010h­ÆÖ,\x0018ü\x001d·þ$ýÖ-ã¤±aU±\x0000$³=Ä°©\x0014©è$³8[\x00180Æg"f¨\x0004Ï\x0018
0É|Ýti\x001d`*ÑÒLé e2L&Áº\x0000&\x0018Û(³è5)Îy}'Æ½8æå_ÏjÌÞ;çÒßÏ½÷ÖM¹;¦~Ü÷µ±ç{½RòQygì\x000b­Ç£67FTëêÃÊa?L?´3\x001döAæ\x0000<ah\x0008_èh°¼:öXú±Ú+mÿøÝ£¾n\x0019WØtg`Í5×æU7\õã¿jû\x00175Ý\x00190¼éNnYÓ­4¹F¡±\x001c46Pd@\x00013úrËèª+®å\x0015W\Kïä£9\x00039nð¼_µTÔÞ¼ý×µ
Ô¼´iÁ8ôÿè»ÈOÈ0A)²ËT{lb}Ýë.]<ýí½;w¿ým[÷ïüù¶»~ñ«=;w¼¸y÷ÑÊçö\x001bòÔ\x001bïeNX³+½pÁÖø¼g_\x001e¹x»eÆ#IÏlkèÿÆ7\x001eØùÚ/ßÝWWwöÝ£
\x001f\x001e;Rï#Ï4\x001e>xæúúONýåÄå/.^þöÖµ»÷\7\x0004Áu]Øõõ¥ßvûç)mÜg§ ×\x0017\x001f%ÌüöÆ÷&}Ù\òÐá·F^¼0¸ÒÕZV}W1åïçJJ\x001f¯²0C¿ì2HÚèØÐÚ­ÏK5g>ô§7{~g[KNe0rÉ\x0001aÚº\x0006¡zõ\x0001¡â¹½®Éãr~Pü¢Ïðü]å(7­¤X!Bô5+[!~í=ÓÀ-­\x0019å»Zß×:¥ö0{ýa¡zíAa6¢²öPµîBÕÒ#Â´òSÿ\x0019=âó;¹ùÍRÿ\x0014qÈ.in\x0019=õß®ï_s½¼äºëw(¶\x000e­¹~ûèêæË+.ü£þ'ÿVW¾ëÍu¥/¬3hrÙ({÷îÖøØXY£\x0001\x0003Ê°Q\x0008t%ÀB£a\x0013£XÄÉßÇ#\x0012\x00116\x0003á\x0014Û\x0007\x0015Ù!\x0019è¥ÑL}ØüõÎ­3ÿ³oÁå¢c«ÆeÂ¨½O|3xCÁ\x0007i5ö:ËÖI\x001fd½¿V(}ïGBiíø=iÚH
\x001eÎ\x000f\x001al#;jÇ$EÃÊ!=`sq\x0016l(ì\x0003ë\x0003ÄÆ¢L¨-è
²Óà±\x001ePÖ
*Ó»&U\x0019î¶$Ñ\x000c½tZ°¶bÙ\x0011Çu\x001a"	>¨Û\x0000\x0013\x0016$´\x0001"ÜÏèüÞDtÈNbð\x0001£DùÉGÌ\x001d$Ú\x0007$õ\x0015:W_}­·J5W\x000e\\x0013Ä\x001ce%òV°k\x00128çâ\x001aóï\x0010³\x0001ìê®!îZê¯u\x0008·Ës»ÃÓ}RÝy~VZWþ¨F5`¦3\x0001Jº!+"\x001cì¢\x001e\x000fÚ\x0006xOü-ëÐøÔXX\x0001g"²üSsðxd·
*\x0018µ\x0010Û¡\x001c½\x001b`>z­û»áá»È)Æ\x000f¾78ÿv¦Æø»D&%iì_6\x0019­±«a¿rÕ ÏÎÆ¥>ôSøY,\x001al¯`ûÌ$Õ\x001fÀç
¶mÿßÖ\x000b\x0017\x001a7Ö\x0002úÌ\x0013 D\x0010!º
ú\x001c!,Ø50D\x001b)'È`ÇC\x0008ÿ\x0010³FÐù=FnÝ6ZÇ×¦ \x001d0ÉbK÷;u¾Ìa­Q3Çý}9{²µ¼9jÎÆç\x000f)­W£_\x0012Â\x0019¦A\x0006=\x0014PÈÇmÁÝ/ úq<F={æçÓcík
íkpËêÓûÞi~z\x001d8Ð¿$;Òl=¸=c@=ã÷ûÏø\x0013µVD\x001cêG\x0013X\x0018}\x000b5G-¼u¬q3"\x001ea%Î@êK\x0017¿³¡6QA?\x000b^jÏ£Æ.jæ*É!ß«9£\x000fÕÎ÷Õ·þ²©¯2:\x0012k¼µJvV³/6é¨îø®à{JÜ\x0005òÎwÎ\x0017ô]²SkXkÉg;k.0ÞtOY\x001d\x0018óè}YûHòÌÙåÆÚ!ò'Sg½$zÉØ]i
K6ïY¿X¶UÐSâ\x000f*Î¾Ð°åód;(Ùrqá ;þJþ ãÚ.\x0013XgÉæçC<R?Vq|Ì²\x000b×7s0uP\x001bú®ÈC.Ö¹qÏò-Ç¿¼X c¹7\x001dã´­\x0019qÏÔYÁV½Y1Â\x0019\x0005ûÉå\x000bÉ\x001d¦b¥£=åægcÅÅÙ/\x0017 ¨®3\x0000ÿËÞå±°» .\x000fyJi\x0015\x0015\x0011\x0005v\x0011pâ«
\x0002ÈÛØÚT\x001b
Dª3ïñ1¦S¨5&>\x001d­¦MjÆ7bâ[[1(b1ÆZ³¨Q»Øp{.Ü»ç³»°8Svøæ¼þóÿÿÏÎ¹pßæi}áÖÛ\x0001PSäðãñ\x0017´ÛÊ[óýáDF?ÁËý!³A\x0008Fá\x000c\x0016¡AÄð¥\x0010a_´­Í¤q!hL\x001f'¨ûë\x0000göf»¡2\¥G\x0018xô£¹*\ÅV\x000fUM÷a´ÈÊ()]w\x000ceÌÄ6)¹Ï%´5²\x0016baÉ\x001e®®¶¡áÑ
J¼Ô¶F$Kê7gÖ\x000c­ã/(©5<ZYG[KhSå\x0018Ës-é3©3â¹\x001al
yX?I\x0017¾\x0016îX4//µ<x_k\x001d\x0015öi)òZ¡N©\,cªG¸¶V0®eÄópY¡~\x0013{e\x0016ä\x0008¶|!ÄEk¦\x0018\x000fBL1cLmÆõÆú±¸è øßÞO¹5¾Sì!ÅÇÄ7¦Ã\x0006Ò\x001ebIÚ\x001fÒ~Ö\x0012bn©ûJÈg\x0013{\x0008uZþÐÎ\x0012)'w\x000e)ï2q!}Þã<áî[p³ØðÍàGùè\x0018¿Q\x001c\x0008·/;\x0007µ°r{¢xE\x001e²ÐK/öFâÂïeÖî9koÆ,)Íð\x0000à(4â.¦'ßFòÌ«2O\x000eO¶
¤+\x0001\x0014è»\x001dÕ³ºÈ4LAÙY2x¦bu"J\x000cd:"Í
 Õ\x0015`¼­ÌôP8¼\x0011à¶<na¿­é{ÃöÎ¼6üÙÿÑìÿUí]Y×Â·§Vm\x001c{1¤4ò¢ÏÁ×½
¼®£:ë\x000bG`:\x001clÄ4ø\x000còà0l|%zÇ?\x001f~Ü ÏÑêÃR\x001eê§­xö¼|Þ\x000fú?%è£âuÍa©ºçIÓuMSQßp®/#P9"í¡`á\x0013ýþ¥ÏôG²\x001eéçr}	¼8]óÐÌÕMú³\x001b[Øoæíz'Qá |¤ Da<zÃJ&xïÛê¦;µW\x001f\x001cÛûÑÎÃeÛ¶\x001eÝ³íÃ7/Z´ûôßU¼¶b¿:w¥\x000b$\x0015\x0001LD$"P=¨pµsÚ#êùe¢\x000eì)[{éðÇÖ\øüÔs\x0015'm¤¼úLù³\x0015§¾¼yåü¹Æûÿjhjl:ýXw9ðnÂã»Jèï"£ññÇM©Á×/{*.\x001es¨­	É~üãäÍlNÞÃú)cÖm	uýým)SÊ2Ò¬\x0014 ûf1+²À¬`\x001d6°êÔ2V»ô(½¶Yz-xóS6%j3\x001bê¸\x0002½y¼l;Ëør	\x0019ÙrVê·õ\x001c·½%bößØ¤UÇÙ5åìÕÇÙÂRT÷\x0018;£ô\x0018[Pt¦%-¹öE\<¶¿\x0014¸üàö~®9zl]óè	\x000f\x000c\x0013\x001f\x0018&\x0017Ô=]¼ü©þÄ\x001f_üôÕû?±·7µ°·þ`øoõÊºGgæ»P¹yË¢¨éÙ¿ì×?Ä\x0017m9 4\x0001t,@%!ãÞ	<¬¤\x0005¼\x0011þÀ\x001e&\x0000ÅÅ\x000fÑ\x000fá\x0008:AZ#}X±ïÉ\x0007\x0006íûí7Ã%O\x0013\x000e\x0016ÕÇ±X?öò;ì³KÙq9Cæxqò=mwÁÅc \x0013\x0003y!Þ°.~ l\x0018\x0015ÖZv\x0007ëyVÄÂïÂü °¿\x001aò\x0011\x0005¯(3B¼ +Ð\x0013´*\x0017\x0008vhË!Z\x001c¸\x001cãÏ\x0019úkýI^\x0002\x000e/\x0019i7Ât\x00032;áh'º³¸t\x0011¹
¸v\x0012·.¢è$Ê. ¢!±ííì{kÍKCð¼\x001aï±Õï¶¤íÝæîÞ(\x0013\x0014zCiì/à½Q`}B×ß*nî*íÏá­ÁþPîù¼à¾Äû??X
ÞJ\x0018ê" \x000bo@wÆ{§C¤\x0012è£\x0005ÁÈÿ0Ø|Xoã{ÌK£~\x0006sÂ|[}æü\x0015ÇAb¤\x0014\x001fw;¶Æ 'âÐYø²¯¤í\x000eäÞ¯|Oho2-M\x001aÔÂÊ_E|¯T:;¨¸[­÷gîç}²Â©§÷Ê¨-õtLÿ_~nLOï·²E×\x001b\x000b½ôÒK/¯\x0002®9lß½tÀôg%=\x0013½ØÔ\x0004êí\x001f\x0001\x0015§}J/ZÅ\x0007áK\x0001\x001f3'ki®¹ùd;³®½À×·
Ýå-{Õ\x0015¼\x0011ý¥\x0012ÐÈ!ÁM\x000e#]] ÎCÞN[_G\x0019çj:NÁêíór6i®\x0011®\x001dÏõ!»\x0006Ê¤\x0010l\x000e@7c \x000f×Æëx°\x001dhló}\U\x0008\x0005_*	¨(¥%¬Sòë{p{.é°-PX\x0017Ú
\x001dm5Âo
|·V%yk×¡éê=Ý±µ9`Í|[âe\x000f»ðº­±µu/,ÙËx!ü¡ã\\x000fìì\x001bë¢ûB0WtW\x0010î\x0000L¿p®±\x001f×ÛAº¯H¶ÒÆhkÓæ½\x0007%!Ú\x000fâq\x000f4;ðýj×KÙ\x000b<~B;\x0002p=\x0004[ñ=Âý\x0010®OóÝÄO"?±¼$Å* ¸?\x0004ÛÌÅW\x0014[.RÎÞ\x001eBþrNæÎ\x0010¯\x001a3Â{MÌ\x000bkÎ
éÌP|èÌÙ\x000c\x0014B8\x0017Äo\x00133úhq$Ý\x001fx<igÎÜy ÝK¤ý¢Å«T\x0019Ò:s!Êc+î\x0014Rühkòz>)±&ê ÕÍøHóÅ\x000f1@ê\x0000gÓýáë\x0012¨)òÅ\iÄ¯¯ßök³ý!ÞY\x000e/ûç\x0004mop¨\x0003@4\x0003 EÄH;Ð0m\x0008ëÂ>¡°Äå¡5f8AýÁ\x0001Î-5\x0011îúÊpG/ÀØn®
W±Õ\x0011Ê²,_F\x000b\x0012\x0018b\x001bc\+	öl³$Có¯u~'çXG\x000f*µB\x0018r[#íÅçh\x0008uZÙ^gÄ:,ÍÕ\x0010äD¶pze¨µxÝØÖ\x0008ëi?IÞd°F;\x000cY\x000f©®aÌËY\x0002÷\x0003ï3i3\x001dÄ¢v¬±.èÃÇ[K\x0019&Çuáãí}Æu(ëÇ\x0012Ö#én×K±¤\x0013·Uh\x0013Ío<64qÁõã>ô\x0008c*\x001a£Ø$Ú\x00133þú	>	cï(/,ä\x000bmÏûeÒ'3É:Fýø¾Ë\x0008ò¸Ý^Zò\x0017¤\x001c\x0011Í%Ø"Z¤\x0010G³gP\x0010\x0013R¬F"\x0006Kíó\x0016¯\x001bÝ\x0007î-\x000c0ùV¸Yì'øVÀ¿\x001dL¿'*VÅIF4Üw	jaåö" u¸±Èº^z±?\x001f±öÌ×î`Äg8å{9B¡;@\x0019ò;AäªÌ# »LçÉ\x0012\x0018ï\x0006¢\x0010ÑÈ´\x0003\x0019<S­A)@ÑA:F\x001aF*òk2úW+Ù\x0005Õ\x00152Èó	q7(ÅãÝ±ëvæ|1tÿ¬è\x0003³j£÷½~køîìêð­É\x0017\x0006¬Õ^ö_\x001b}Ýoqh¥çÜ>\x0017ä%¾W\·¾\x0013ºÿ`Ã¦ÜGOJbë^\x000cNÐ5Õ¨_³æGý¥Ìzý\x001bñºæ8Äx!._×7NgG}H.\x001b\x001bSgÏ­×,~úüÐ'Ï÷%?4LEýÃ\x0012¾7D&Ü×\x000fGr&pº&Ô\x0019?Ó\x001fÛÄ²wÿþñ{I}\x001dIÈIÈ¯$3$º2\x000e½[k5§±áßìwµ_>8¾oÇî£ù`Û·¼¿|Ö½\x0003\x000bwUö\°K	Éóbh-$\x0016WîJYÆÆ
¯E;ÊÇ|þ\x0003{j/:}ã\ÅIrA½ÓÔ«¨¨<{âàîo«>8Òðýùìû_MSß½êÐ÷îU\x0008¼W-R_?:ÿçé\x0003j®úÉÏ\x001f\x0002·\x000bGáì	pÇ\x0015d	KdùÀØF²l1\x0006\x001bc.[¾R(\x0013 6\x0000>(¥ô \x001cÉ@\x000b\x000c\x0002Æ\x000e.&$%¤´4´\x001d\x001a 
iB9\x000c¡¦3¤`L Ð@\x0007sËÈ²aû~Y²­þýuWf¢æ]íñö½·o÷­2>?4ëNË9-æ\x00193\x001f<sª}húÚú\x0016ÿöqÆÈí$#ëU\x001c[M´UD\x0002+ðþù\x0019DÚ¿èæ¾MÆn8Bªj9ëòÙ»É(C-U8®\x0016Ùì´²\x0003ÙÔ#5È\x0006d\x001dò2b\x001b±¨²_#©óöqk\x000fÙ\x001b\x001bHÕºÃ¤cÃ!RùÓ£dFicûÈü+X\x0010æ=86+ï9\x0013\x0019ÄQÐÜñ0~Ö-ÓÒå÷LûjZL'ë\x001f¶ÕÜvaëcòo\x000bÕ÷ZN-=Ý¸¿ìí+2KJ
¢5\x001a¥
o^<2\x0010!qH\x0017r^\x000e1tS\x0012Ð?½8$I\x001a
Ã#\x0006(Æ\x0019Æi\x0017\x0017V'\x001eYzägëÉ?þà¢Ñ\x0018=D©ÀëëkôVûÚ0xap\x0012l*\x001a\x00085\x0003`cA_àdWç÷¥YIðÝX\x0014\x0003åÉÝÊ>½ \x0002\x0010\x001b\x000eé
\x0019$pñÂðc¢X¤\x0007t}\x0012?!
 !~Bæ'ä> \x0008õ\x0002(= ÌCT\x001e ö\x0010\x001b{;9×Õ¼ëIþµ\x0011-éÊÅ¬;¬;ÂéÊå'.O\x000fSBU¿8XcLºâPëE²å¸åCá{©qz2îÿ\x0018xªw\x0004\x000cUâû@bÉò\x0001W\x001f\x0019¥Eh{%W{Ó,>\
\x000b3ô\x0016{Y~¨D?é£ '\añÃð\x0016²åä8IÇýâË<ã¯<Ò³¦VøuGâORHµÜí\x0016ü¾ÈMu=\x0002½G¾"áÖm¥¢¸X\x001ah~Ó>î\x0005rßu_\x0012|ö\x0011\x0008\x0012$Hî@Ä\x001aÒmßDßD´/\x0011y c"oè¹øåÍª+-
Ç\x0015Ü!Nä7Ýç©l±5ü±®;öz2Ï\x0015{\]5×±Þ¬K÷s¤ÊC O¥\x0002u\x0018äcÉÕó±n+óm¥
þo®NWwý¦eäñÆÛÈ\x0013ÇkëÐM	Ù*\x0005¤È$ G\x0013$\x0008\x0006kIÃoçê\x000e¿±L´¶Å á\x000c´"}®@ÏgÉÓXûb¬¶%òl00lÒ#½x25"òmk³úµà¨¯m÷v·ú¸«\x0003\x001fWõ\x0010ó±X¿Íþò\x0007½çB1àªN®êé-bkp±\x001eÄKìÏ7}F:ë\x0002}\x0006\x0010¾3ø%}wÐwÐ\x0019u¸o¨5
5\x001dÖ§t7\x0008ØÁÒÇ®ÏE[D}@\x0017ò±³;×\x000eB¶\x000búP\x0008pÉÊ\x0007´L±9ûÅØ'!{ìúØî\x0010GBý"qb\x0000ç:\x0008Ù+$GÌ_b{'&¥`,	Ä*ÓvF,ÚÉ'wÎ«±#4é3:N¨1vú\x000béE³³a£PÜñï&±ó(\x0016\x001bvûÃ°\x0015«¢²éxq\x0016Sýr¶L¿°î97d9Óy\x000eî­Ë½ÑW\x000eK/%@Ó"=\x0003\x001d4-ÖÃ¥%\x0006X\x0015
ø"­:\x000f\x0002\x0018e\x00009HvHGÉ¯s%¿në§ÇðÛùdpþ\x0018\x001c.iù{ºúQÓàÖS´&ÄVÒ´ÉÔÓ¿Î×ÉFI¥%éÐµN´î|XóÉdýî\á\x000fz]¯ñ·"ªç\x0008´Ó}FqRÆ\x0018/\x0013^ÖÅÙZòåØfÅRu|r¨²s\x000eo,=ã0^.¼ÅÇ¶RæD<;\x001deëðe8èÈkÏµîs®W·¶s¥×f«ÓØÍ³Çæòd\x001byãìÖ	ëä CÞÕ+ÐÏ·ÃHÍ1Ê\x0004J\x000e,Ý\x0002ri½|#¶&=ÎÁ´rO\x0004|K¯+\x0013\x0018KÛ)`\x001d´lF|\x0008ùQÔ6zßdö8Û?Aÿ°öBî¨»Bûâ\x0010k\x000c»\x0004Ï\x0013c?hþ\x000bè,ÐõR\x001fä`Á^ð¥zË{À\x0002÷6°½\x0011:q|?[ÜQã×óBÛÛÃ\x0012\x001f\x0013\x0011YMÐB\x0002Aø\x001aÍB"óe¬úþ_~¡>@')\x0000`1Û	³<`¦Öç\x0018<ë&3(¦3\x0018£\x0006(\x000e\x0003(côO³Ræ!¥<qp\x001e.¦RLqÂd\x001eO£%hã$%*\x0017¡V&d)X\x0010[_²3uWùGY{ç]\x001c±÷û_e¿5ëÓÁ¯?ÙoóÈÏvM¾zxoËú
W¯7¹Ò26¯¹-}ÒµÖ²U÷Mßº·ot³©¨ Ù<\x0018\x0019RÖÜòÌæ\x0013óÍYÜoë­e?üÚ´eÉ\x001dÓ[3o^\x0018}µµ(÷9½àjÛÂË-C
/=\x0018Rxµmha³¹\x0013YØÜ:|Ñí\x001d¿ äâü×·¼8\x001eõ6LÐØ3C-ÌwÐÎ±8ïõe?~ùÎfrùbãí·ó»\x0003»ÞüåÚmû¦Îý}£¾põ(ÉÄçQØbtÎóL\}K ÿ¶ªfm=\x001e[ó«ýÓNÿíÈÁÏO\x001c;ÞôãÇ>úà³\x001f\x001em8{âØQ¯¸t¡ñìÝësþ{&#ò«O¡'p¹Q9õöÍoÍ¹gÖô/½êÄ\x0001Ð||\x00109\x0004Æ_dTÞ3U=0M/¿û°4ç\x0013SVÆîö¾3v¢\x0017ß%Sì'Kwü´ÍD\x0007µx\x000f½¬% ^C\x0014ãwa+\x000fg76*\x0007Ésß'Æð÷H\x0018ü\x0005Ç½Ïã=+ï"û}È\x001f7-H5²j5	ÍÞJú-ø3´¡T®;B*~~¯?D*V5ÓÚG\x0017]3\x000f+¾j\x001e>\x0012\x0019uÍ<bô5sö\x001bmÆoßhË\x001dËq³-oÜÍ¶|\x000e®Îõqc®æ]1\x000fB2p¾±ôFëÜ_¶­¹ÿðxÝÆú­çêÍíç¶<"çë\x001fó\x001bîÞû¤êw6\x000f.))ËCð\x0018ADH\x0017r\x00027&\x001aEtá	!\x0001Ñ£z#qH\x0002R¹(®ú©ý\x0003N\x001e$[Ú\x0002­§/áìMJ`b|\x0004¬Éé\x0007\x0006BMA\x001alô\x0003ÜZduN
,\x0018¨ä\x0018\x0014\x0003åÉÝÊ>½`Fb4\x0014DA\x0010ÅW,?&r¾D¸såø\x0019i\x0000	ñ\x00032?!÷\x0001=|D¨\x0017(¼Dé\x0001a^ ò\x0000µhÜ$Ü\x0003´bH\x001cqg½É½®ä_Hõ~
t¾q\x0017\x001dt0\­ò¾±°67\x0015ê0G½R4À«<TS\x0006k)ðt[\x001eêiw÷Wôé¸ÿ§ê#Á\x0018®>²û?!>ÈÖ(aþÞ\x0016ý7¡ý5û`£Õ\x0007\¹lh\x0012Ìí\x0017\x0007³Ð\x0007Bù¸Ëh(VALjÑåIx\x0007q9{rg»Ã}cüGâ?<¡H|LÂº#ñ'Oqé$øQº¢B\x0016è½ñ\x0015±GJµÜÉ	~ÿïOQ\,
ôþGÕ\x0011¼\x0008\x0004	\x0012$H ÙKB\x0003}'\x0006é"þ$Q\x0004:&ø\x001eYÄ/ï
ÃÇÿTÄËd\x0010«Äó ³Úø}bý®ÌaÕÅäsÕ\x0006Oì\x0013é£û]ñÿd°l\x0014ÓÇW:ØÊô\x001e2(ÐA¾
Qw§Ròê\©ìlãJK7&_ÅïçQwÌ\x0015k÷»s<5\x0016)Äúð°PHJ@:\x001bðßR\x0002Øcit\x0006ºQ×!X× á"h\x0005êtI×éùB}ü¶h¤7tèî 3Ï.\x000e\x001dò?öË\x00058ªêãßîÞM²ym\x0004l\x0012AQB^<Â.I\x0002&$DðJBxkTìPÅT£8>*\x0016ÐR;ícÕV­Õ):\x0016*H\x0018a\x0004*U¢òHªíðl\x001e$$»-·çf\x001f9÷Üïì#»!´Mf~sîýÎw¾ó?ßùî9\x0018Çx_´ûãã+Þä¥?±°òòë­\x001ev<¶·ýÕìk\x000c_ÖäKýùêëíÞy»NwýzÀ×Ë\x001b#ÕüM\x0004\x0015þ½¸¾\x0019Ct?kµ <cxç"&«õW¹íÔÈø°¾è\x0019ÈñWøªäé<\x0019xºX\x0006F+?tnv
Ô¹ÆÆQÄäÄQh£ãªp]lÎX½n,²±îöÃ\x001bª&Ñu²ëååÊ\x0001¯.Øµc{ÎK·\x001eê\x001aû¾\x000c&>îÚ9uín±¼q¿\x0011¤Ñw¶ÝÕ\x000bg6\x001f¼ZæÍM¿³ùåü~p\x0017§QQk´~ä·g¼\x001cqÏ	¤¾¹-'o¼\x001aÆææå\aCÖË«cE^<Õ\x001dRÒ\x0018é®\x001f­Æj\x00034Ö$Àé\x0007ãáôºx{ë"\x0001\x001aH{¦6\x0011Þ/\x001b	1j\x0001®÷\x0006ìÿS$\x00112ÈôF-À\x0014Òfkì-K6ý¬éõqõ9l	\x0019dg'E©»´J²\x001cOÓ\x001dX(\¶ú4½ø÷Ì¨C5IA3ÕÞñ´¶lúY#×ÅÓ­íÇby²»ú|Èæ%­QÓ×\x001a);\x0017AîkÔÈAc"v6.\x001b\x0007\x001bÏ¥ÙQ/½5ã-Ô^\x0004»Ý\x0015~\x0017ä6'®qÌXZ\x000bkcíN\x001dNMô;º\x001eÌGû:õ\x0004;Fª5Òï¶Ï·×î´!ï>Aîgdßµr?Íè3jØZ|.#27­íwÍ-Èç71¹3
Ê¸9\x0011MÎXl~L´¿ WfCúy¹fÇ²}n÷Ý[d1019V¬Ù\x0007YlêûPÔ-¦\x0011©I´ÞÝÔ¬\x000e°}bê\x0005Û;EÝqrÂÛ\x001fwûÏKÞs\x0008©jÿïà`\x001dü­<\x0011¾~ý}\x0010\x000f
ëì¿\x0013ì(?8k÷¾¤Mº&\x0006\x001e1T0ä×\x0008C\x000c\x0011HBf\x001a©¾\x0002Z¯\x0001&¥»;´¨ªT³<
ÀÉ2\x000eKý JßÇ\x0012\x000fTzA\x001bÊ)\x0016EÊßi$ß¹\x0011\x0000!\x0000\x0005áö÷ÅÒ~²a'"\x0019"úOQæR\x000e%\x001cæµÞ\x0019FÖ\x001eJZiÝ#\x000cÚûÇ\x0016EmöDâ+w§¾{ß?²wÝ{nò{ë\x001b+}¾ýè#çÎ¿=ãÂUSn³5su»yãÖnË+.´×æ\ìN#¶Ù-é\x0015Í]å3ÎvLÊi²dæ5['-úÎ\ýãï»ß%ó%mÖùs/õäÎ»Ü3½ ­'gZ³u"\x00197!¯¹`ÍÊ!1r¬éy-Ö3Û{f\x0017·tÝûI}Í¦ºC;«\x0017\x0015\x0017\x0014è@O´\x0016{Ï\x001c²¾|\x001dÀËë×n¼r¥Y¼xötGÝ;¯¿õî¿ÙüØ\x001fç-ÝñU|ìÊ-Á0ç\x0001â>æ>$§h\x001d\x0008¥µ*Ó£;ôwí¨7lßwüG>Þ÷Í±C9ùù©c\x000eú¤nÿ©Ã\x0007ê|;ýéÁM­ç[Ïu¶_2]<6ì\=D­\x000b'BVv\.Yo±ýhÂÆ1aÇöAäÑ\x000fUáGþ\x00021\x001d\x000c)ln¶ºÃR±ª³»|ñ·ÝÅq¿³Æh\x0011	¿\x0014G¯ýxçæýâªç?\x0016Wß}X,Û-\x000e?3é
\x0011ÔÛDUÖ¯Äv¥?ýH\ùò_Å\x0007Þù§¸aý\x0017â½âpxø}ÀáÏÝ=v\x0017a'a;áy\x0011¢7e¿\x0015MÏî\x0015m"±_8(V¿Q/Öno\x0010kª¿ûwiYmö\x000eÛ\x001d\x000b;lù:m\x0005å¶9\x0015WmWmE]¶¹"']ò)»bUØÞ÷ÖÉ¤f²¦6YÇ8·Õ²`u[×Ó·]þàÎ¯^ê27në2ü¹Ùzê\x0017×Ä¯k»t´üWL\x001aw»<DI¨ú\x0018æ%7ù@,!`ø/'¬\x000e1ÚHµA¥\x001et=^Û(R\x000b©!Z¨\x001e;\x0012¶äÝ\x000e[	so\x001b\x0010¶æ6ç6x4+\x0019î¾%\x000e¥ÄÀò\x001b7Kâ8=¤é´®|ayLr\x0010Kr\x0019\x0004ö?Õu@=h\x0006\x0008!Àh\x0003@P\x0000	ö\x0010?ÐõP?\x0008óð~\x0012Ñ\x000f"û\x001eC¥$ªx{\x0007ûz\x000fÇ\x0010F:Î®¤\x001bàÎñån\x0007;¡APEÎâ
ÙcàgÓÇ{Ê¿{hã\x001ez,+ÜC±°,Y~ö¯ÎþÑ# <q8L\x001b\x0016\x0006·jÕ½zxçÿ@"­_º£ÓtA°ôæXøéÖÞ\x001cø{\x0017oqÜÇ\x001b·ÀÚq	½ëVä°ä½*9\x001aîqÁ\x0002$\x000cR\x001e|ÅYëÃ\x001dg§tgÝ\x0008÷/wEXF:±©YtM\x000c½\x0011\x0019þÚëÎ;Cä/|Å
a°÷$PèzJ;Øùüÿ­;\x0010<5Ø.êÔQ"9EE\x0018b!\x0018LF\x0010C\x0006û^\x001cB0fè~ø_!öÀÀ|_ñkÖ\x0008#É\x000c\x0018q\x001c»;ú3f âù«ÃÝø87ýþÌ\x001bçe\x000cl~ll\x001cãõyÒMÛc	ñäDÉ\x000c\x000e¼ðPÈ
ÓA\x000eiL%ïNì6GëxÊø+m:Ý\x0015O\x0016\x001d+·ç:È":U*H$º
*;ô³\x0001ä6ºÅTö<è	\x0011H\x0006=bÃú1?½8zÆ>Ì±'N]½\x001aYÍ\x000e\x0012m\x0004i£\x0010Ý4û§uðrÁúbýîòç)¯¼ø¾hò7g¾æ¦?q\x0003µw×s>oöÆ_]Rt~\x0019úÖ\x0001ùÎ~\x0003åç:;9K\x0018X<ì\á!;¯@©\x0017;Ë\x0014s«ÀíyFkçùñ´¡ç
«Eå>\x0016G¶ÏÓÜì¹å<x{Å>c¹Áææip7\x0007º.Z'2§Ç8H~\x0015z\x001aQÔ½Üa¹äiFsã¡æyñ¹ß\x0007'.7¤Î1¬\x001eìWÏìán^nmqrâ®fØ½C¿y$/X(|xµãNäÇ«\x0015Þ÷Åjòð}»«cOß\x0019zPs'z¨WÅ>qjÏSMq¿Cd=ØÚxu.ý>LU	ð^I\x001c©Mu	púAxGÛGCM<]\x000c3GÁ`ü\x0012\x0012\x0008£Õ\x0000\x0005\x0000#alMß3fãõg#ýÉs\x0016çÕ91j±>=Òv"]oþ<Mo9¦7\x001f··ô³ÔZ¿\x001c¯\x0017\x001bÓ£êK	*
×ÂxPÎiiÑ¸Ñïa¼7`ùpÙHkÔØ[ìµõ¾\x000bî}°xS8-÷YPÆDçü´öuI­)È³'\x001b:VÀýY;ëC÷³vVêÃb1~²1\x001cí&­=7Rk\x0012ú0rM\x00025ê72v#6²ÓcãÈ\x001c´6#\x0013½Ëôj)X;¶\x001eÎ\x001a\x0014ú¾Zþ\x001a\x0014¾Ì¼¬\x001f«\x001díçô±ùÂÖëü\x001edZ~\x0013\x0012\x000bÛwl/e¹Ó*cñò¨È=«\x0019©9^})òì)«»ì:y9FÆaõi­ª[#O¤¦±xlÌ\x001cb\x001f'øÿÎ\x000b3÷'õþ\x000eÿ6gã\x0011[\x0002|ñð\x0018Xx².8é\x0018\x001a(¢ß\x0012\x0001D\x0018b@"¤ª\x0016Q\x0017ÈZ\x001d\x0008ò^Ü¤]\x001e\x0005 ±\x000ca©TqìKôÞSé
\x000f#,¿/¦èí'LÐ\x0001d\x0000ÌwØ\x0017yÉB\x0005Þ\x0010I\x0011ag>E\x000fr(á0\x000f¡8\x001c ü;VHrPDþA*PU\x001a\x001bRuÏ·_ûhÛ6swÃSÿjÚ3óâÕiù­Ö':Í{î4ï/h1\x0017¬©yÍÖìVKù¼\x0016KQÎ7m©¹\x0017»3J¾µTÕ|ß½sy»¹¶øuÖÂNÛ¬Ê«¶Â%]¶¢
Ò\x0016¶÷äå6['±Y9ÍÖôü\x0016K~U»ùáÕmæ'\x001fÿÌòÃ]oZïúð?ì	T×\x0015ï?ÌÂ\x000c0Ã"À0@p\x0001QÜY\x0014\x0010ã\x0001¤\x001a\x0015¢â¸´©±V\x0005ãzÒkâBzjsì1iê±9&¶$j¬&j1V\x0007-V\x0004
¢(\x0008*(Û0¢¯ï\x0005ÿùçý³1dð9ç;÷íï¾ûî»÷Í'Xw/ñË%\x0005\x0013v¥¼\x001f=/(Ä+A\x000cT\x0012­«³qhð¸×\x0000»¦g66Ö ºÚ[ÏÎýóà\x0003\x0007¬Îúºlè´O~ì'LÙÀäLlU\x0000¿Ê\x0002uyÊ;Ø\x0008k°Á0o¬Öô%­\x0004ÁÔµ¼Ðµ\x0007]\x0016æÝPü¥ bñµ+OÖVÞ«¹}óþÍK?\(9úû\x000bgÏXÂõó§¿+»ZpåIÓ£öêæG£«CÜî\x0014GU\x0011(ªK´4ÏÝ¤êX\x001dYWÕß­²\x0010Ü®ý@I\x000bNQN\x0017O@Pq¡WZCÓMÊYZÛÒ*ÚÆö<\x0017B6\x0002íHv\x0008Åì/DG«ÐöÜ\x0012´tD>
ã86}9Àç\x0013äq\x0018Møô*ZW¶æU -,A¿=\x0006SGñ\x0018c& ×;ù\x0016ù\x001c \x00179ÄîG¡9'Qú¡R´ñ«JW¶üé.ÊZÐô|jZkÇ$ì\x000bÉ4´/\x0018C=Në33;\x0012'7>P¯À¾3,ºF\x0015FûÎÄZåÄù\x000f[7þáIËÉ\x000f[¥\x001far[Å\x001f?{~s/Bå«þwdðÄ£±«+\x0005àf\x0001îFÐõ÷Áxcä\x0018B+_uäØ^~ öÖÅVÐçñÅÄ¸9ÁÚá\x001b\x0017
;cBàqlÎNÌ.¼vNDX\x001eê\x0007\x0019^\x001eà	ó\x0003{&\x000b¼`¢\x000fÄºI ÈRÛË\x0001ZÇé\x000c°Pÿ¨\x0001\x001dqè&øÝÀ\x0006\x0008m¨\x000b8v\x0011±\x0015Hº8[H­@Æ\x0005e«Ø:\x000f{`¼0¾Ô«}@I0'ÈS7öÄÂîØ®å'u\x001eÂkl\x001c\x0000Ë\x0007û©c}z@Î¸¡ý³qìàá\x000c!"¾:¶\x001bÿÝûa\x0006
ùêï\x0001"Õ9z
r´f°nx\x0000,\x000eî«¶A:+\x0007.\x0008Òäèä¾2\x0018â(èÔÉÞ¾a
\x0016ú;cºÕSò¥yÃ9.'¯©\x0015+^ IOÄãÀ§´¿ø0<gï»°\x0005òÇ
bGìsö¶gï\x000f»á{°·?¸ç"ü¾\x0011ôÒK/½Ø\x000bJÀ_iÿüØ>²uH`oßèÅ6H¦#îð\x0011ÿ²rq?©¢ÿÏ\x001aÃ£Ìnc÷ys7¶¹ãÌkJosÎ`+,ÑÅ\x001c\x001bÚZOcçïñ§(\x0018!\x0016B³\x0004Æ:a,-uàz4³QffeÍÑÔMÏcJÃ}Ä0D(\x00009ÖY?¥Y¦´} _7§XJ\x0019ÈXuKÚLÁC×]´ÒÖq\x001eÌs*0~ô½aéÚÍºve5{ÈLìgJ\x0017sÎÍµ%í¦Ö4ç\x001cæì'ãÞ\x001b¾\z\x0018k·æL]õ3R\x001fýfÜ0> }Ç ÿfoýîõ$èÇ\x0007½2{\x000ea¬?c\x000féírõËÁp\x001d~ÊP'¶>l\x001dIûÖç`8GNM\x0006g%ØóÌ\x001cç5ív®u¹tâÊ\x0013$¸ú¸î¦Ó&fÝ`.Ç}üË~$\x001f0å7\oÂØÝ\x0018èËÚßÀ.Ìµu~dìM¸+Ò$Þ7Ç=ü\x001d/Ø¶ãz+\x0006÷gÄÎ\kÞÑ8À±\x0016é}ZÇ÷CÚÛàìÆÎÂµ?â1?6KGÂ\qí\x0004¿!½IÒ[&Ùh'ÿÞ\x0019
\x0013·
sª,(ÍôÒ4~Z|õdu¶\x001f¼\x001bî\x0001<°ÏÏ]«w\x0008V ÿ1\x000eúÝÆl7nÜ(,Gà}>KörxV8Tªº6ÔUùß!²vRG\x0011®\x0017
¶_
Ã2\x000c	¡²!²²}ý)^\x0002\x0008\x0007óö\x001fCØ«t>KÑË\x000e\x001a©+G2ÚHeRÙFêdïÃÜÏ\x001aÇ®ØW·z\x001dÁK©ÞC !!uå\x0008V«\x0004i®Áþ&öÐÛo¨cg?ßøùÌñQZ[DjÛ¢ø6]{\x0014Ã^ºz\x0014Q\x0017pYãØmQ½:û\x0004úëD\x0011ÖdíMÒy(\x0001Y/¶\x001ez:±tá,ÒmG>A\x001fö\x0005,=YvâÒIï\x001e¹lE\x0018Ãµ\x000eûLlÝ6'Øs\x001fù$_Ò³\x001fÓO	wÚÙ/`Í1¡\x0013é¾Ø¾ 7}¯õ¸`ÛíÏÄ·Ã>3á>õ|í£¬;Ö\x0011Ûù]Ï½\x000bC\à^¶õ}àÇúVxù½p#Ó¯\x0013º~6'
Z/V¼@\x0012[!BøK\x0000A/½Ø
J ß\x0015ähK?í\x000eÂÿ}Z4Ï[\x000cé®ÐÉ<´¹ZæÐÈÌg644Y\x001cÌÄÌÀL\x0002¤jë\Ä9\x0001¼&\x0004uÒÌÑÍeó&TsjqÑ'\x00053ÐÆ`	Þ`1Ð6Å\x0004\x0001%\x0018\x0011À¢c"7ß­>»»¥õÚü\x0007O³ç<RfínU\x0016/¢Ü\x0017ûàÙø:ÕÈÔíééï$ÕµÇ­n\x0019\x0012{¿-bI£27ë©ò@ÊÄ´\x00165tÌnéHÑÔ0¾N5jl­*<¥^¹pCSÛ7»«s¾¨Û¸qÔ5}ã*\x0015Gæ6ÏFã/oCI·¢Ä¼eã%ø$HuÔÄ E<ÎYÙÓ^O­p»ãé\x001atéÜwù¹?±ìhÕk)û/ùg¼ËI+ña³°\x0001×\x0000dl\x0001Xº\x001b`ùÇ\x001a~\x000bðÛ\x0000\x000bp{ê:<.\x0013|ßÞë\x0018ÿÙyÏÕ_åÏ,-,¸ÐÚPÛQïÖÃÒ\x001fóó¯ÿçÌ÷%\x0017Î1\x0005\x001ewºøüéSX©¾uã®ª½	Ýizôphuq û"p¯*\x0001÷òXÕÖöÖÆvÕaµ\x0015~t»gÕUû´à\x0014`¨ÛaÚg½Ý¬¿\©üõØBÕhÞVDÁz\x0004\x001c$J;â\x000e õGo£\x001d.EYùh\x0010\x001cÃ1ê[Ì×\x0008\x000f!ÇÙçPüÁ2´á\x001f\x0015hs^\x0005ÚòùOhýÌ(Ft\x001cñá(\x001ewÌLk×ÅsxETü\x0017(ìo%(ûH%Êù²\x001cm:\Þ[_ÿ"ãÍ¶\x0019­\x001d³Z:~a\x000ejßiîHÔð,&îjä¸ZÕpL8Mb]{ò[
Ê\x001dÛÛ.~Ôª¼ýôÃ¶öë{\x0011*ßPqë_bcÃñó\x00027Ê4îF û=0^\x0018\x001f/¯\x0004¾@Ãò`¿\x0007l\x001a\x0000{bCàqº]1`Gô@X;,\x0000\x0016\x0007{Cz@\x001f\x001fèÙ#ÉÀ,\x0008òÉÞ2\x0018*\x0016\x001cÛJnÄ
7F¡ÔÏ\x0008Ï\x000e8t\x0013ünB`#6@Ô\x0005\x001c»ØJ$Vâd\x0005ÎVâb\x0001R+qA\x0019âj\x0005æä_sò°\x000eOL?\x00131«§"×æ%p\x0010æàXüÞ`Ø\x0013\x0017sH×óÓÎ\x0018Ü02\x0008~Ó_?\x000fiâ¾\x0017ÌÃm	R\x0008ÓÅ~°\x001dð> \x0007
p\x001eZ7"\x0010rãBmc\x0003­\x001d6E\x0004Ã²P\x001fõÙÓ\x0003ôs ÿh[L÷qQN"PàÀï\x0007¯O\x0005Ð>RøÏÌY=%¯X;ãâxòZ±â\x0005ôD\V¬ Íòý9Ò÷ó¸¡ÇÞ¹ô=sVÄýýrâ8\x0003ðµ}gûÎØ`\x000c¾;\x0003æý0&öÙæQÒð\x0008I\x0001ór0¨JP\x0004Ä1P\x0016p\x0012"%mHP+\x0005"\x0012©*Ô¦-¥iS\x0001U	äA\x001305/Cbª¡\x0002cc\x000fOg}·öìì?»{ö£êôifÿùgþÇü3»'¿Íâ¿{åñÖÛ	±¬	ïuâ°¦\x0011Z\x0013\x0004âÄ\x0013'\x0016H£5ÖïÇ8Z\x0006V¤X×F(a#ý%þwìv§§²R\x001a@­d\x0019`\x0012#}l<KÐ7\x001aãåYÜúøÝ]ýHü\x00143óDùtÏDsDëô§\x000c¶[¡À\x0004RPâ 8;(Jv@ÜÛdG,Üï3m1£§è¨dìü\x0014¶í²«Òedòó¨\x0004\x001bø¨Ï>K\x0017^\x0008Á>wô\x0019ctØñlÚfÐ6â\x000eã2FkÊ¶Ó)\x0003)9q*1Ð~J\x0008mDª\x0017~OrÖõÝQ²\x001d©OÑÓL½¹MØ\x0016éôFn"Y\x001fóÇ(\x001e³1Èg¦/ÎC\x000es>:Ï7\x0008î\x0005ÐÞ\x0003lëEæ©î\x000c\x000bgÇ\x0012ò\x0001ù¡È5D~vÂé\x0008õ@ë§.ï³(\x000fØ\x001d«kOÛÎ¼\x000b|ò!¶y_Ùü³þóûÎÚB×Cö¯
,\x000fz¹ÒÔ^
"óD>b{%ò\x000bõ«OU~,xÌ¼L³¿Ü¾êÁ(h±gY¯~õöJTÈ·\x0002¶/¨.WØÙÕ«W\x001d,§F{-Ùìy\x0015í
£=WÉ, ­5¬\x0016¸\x001a4s>Ùag½'w#_\x0017"ûØ»\x0005=_È×;;¢¹ò7ý¬¤$¨^
çõÀµ2ÙLÛÕ¯}.\x001bÌõB²Õ
±øÙ ôC~WO°\x0003\x0014PA\x0001Û2äÛðg¹eûü<ûi\x0013©­÷VdÛÈ	®ÖãÒZu·\x0018ëj­¦m@õ\x0018W ÊNéÚ¼´+{G$­ÌMÑtþ\x00036Ü§|Ä_Ìç|,\x0016\x00185¹`Ö÷Ës&÷ùGo¼ë\x0017p}e_ôÖÑ[\x0017[SÕãh+uµ,l\x000ed]EÕåyyÇXØj\x001d»xj¾]ëªEÆP\x001f\x0004ð±\x0014ÊØCøÃt<Kj?,Sé0ó4ºoÌ¼Bós1Tc\x0012ç\x000fk\x001bWÍEâÂà}òs~¨Ö´~û%Á\x001aÖ\x0007Ñ\x001ehò©ãhOXø<ù%<\x0006Q>Tkó{­/XCcÔ_\x0013>auËÖ@!7Æî\x0003\x000bÌ\x0016_³\x001eæ¦6$ä\x0019Ë?V\x000fzgO\x0012ø!Ø\x0003l
EVL\x0019ÔÃ×µ\x001d¬°óþpqò}À~\x001bd#2^Ï\x0003o¿¹ÒÓNÑ"ë\x0008I\x0002 \x0010'N4éû\x000eIfö\x0006C\x001b\x001a\x001cóÆYËÓ\x0000FÀ\x0013\x0008enó,AXlE\x0008\x000b\x0005Ècó(\x000f¥\x0000<îêÒ]À!Ë\x001f¡ãÃ\x0013\x0001FPf§ä¥:ÌgqáÌSHÕ2W@é3<Îõeæà1<Êâ¤²ô\x0004ééÝ»6½ÞN.¼ÔØüÑOnÝ~ÿõæÚõ%Á©Ëå¯µ´}ðüí¶_6\x0006gÏù&8uÎµæ\x0019\x001bnµìùÙíÀò¦àMÁé\x000f³,j
ÎzðZ[~éµ§¶5µ\x001cÝÑ\x001e¸øòéoö=3ü¨o	ì2x\x001fL<hÛ8øó>ï]\x001dÿqÕ\x0019¿Dfíýá¹Å¡©Ó\x001d\x00003Sù^\x0002Àªâ¼Âúº7\x001a\x001bÈ§Ç«­ß}°øýÿ\x001e²ð­Ï¼É¶Ú`ö:eU\x0000kv\x0000¬ß	°aW¨íèS6î
µ\x0015¿\x0000X½\x0016ìfz\x0010ª ±ò
û\x001d{\x001e>{æ_5ÁÛ7IÃ¥ºsÇ\x000e\óá¿>rðÀé£\x000e²¢²S¡±µ\x001dùäÒùºÿ\þêzÓ·7¤µüõÆ×÷ÕW§fÔWCúÇ¡èjý­`EEóí\x001f\x000cûúlzÆW' ³¾Úyé¤5ãü1«ë\x0007 ëøÉKoÜS\x0015\x0008®¡­mã¶Õ¹Û}ð\x001a½6\x0011HÜJ¤¥ïi¿¬!?úÃ\x0017dÛîs¤ò;È0ØGÇÿDÙOÀöGbýî?HÞ\x001bgÉ³¿ÿ¼ø»:òÂo.-+>%3ö\x0013©S×,tMø3µý\x001e±\x001d"Ó~[K¶¼[Gªö^ Uo^$[\x001aÈ÷×^¿³¸üÛ;-h\x000eÎäkÃ%!fÜ
>8íj ¿ør`â¤+ÅW\x0002y¯\x0004î{­uÙ¦Æ}´NÏnon9E©ù9!\x0017Ö|ôÉ\x001eßá\x001ez´ EMºIúQ²(\x001e\x0013nãÜ}¼2\x0010FO\x000f Lp&ÀÓ£=ðêQðÓÉ£àåI#£¼î+GÂæü\X=*\x001b\x000fî\x0007åúÁ²Á÷\x001e²o+dBYN_ÔÇ	m\x0016ð89á»)Ê_\x0001Ë]Äz±õ\x0012ö^Dê!	Q"±\x0007$õ\x0000G7pöä\x0008Hé&©\x0011àê&n\x000c´\x0008áß¹F`ï_EAÉ´ÞÃ^ËÿÞ{Xöy Í¯|ßæ9\x0012`	½7ç\x000fíò»iJÏßM¯Lßq#áyÿ0X3Ö\x0003Ëé=_>¨oç½¿B~¦í#Yn\x0018Oß²Ozwo!ÛßÍCè»gz¦\x000b*Æçt¼C_J\x000eFvä`[áp¨ÈóÁ¹°4\x0003\x00059\x000f+¨|¡7\x0003Ók\x000f½\x0003õ¾'î\x0015Ï|çÒ¦Wß5±x§¤Ljõ^¾âÈi'Î{åËåÔüßýä¸cûhàÞ¼Yu.ã?íÏcum¤o'ô
"\x0010'N8±ÀYJl±¾\x0007ãà$L ÖX×Gèàª$RoÔ¯þc ×kÿã²dqÏL$7#3Cù¼\x001f¢~oøÉëw7ÎH}ïlÎ"±'\x000flPâI)N(Nv@1mh+S¬ )ðÏ\x000cEìÎ¼"Ñ\x001a]N.û&û8Ân\x0003\x000fõÙKñYºÚ\x000eÂr/?ôerh?FI¥¸8Ü:2l\x000cÓÅôÙ~jØ~6\x000e&\x0016þ9öûç¥êøbÆ?ÏF±É\x001b£g«»þCÏÏhå\x000eËK´÷¡;~É³Ñ^t±yFëèùc6oò¸|wù t³­9û\x0016üì+2^\x001fC¥oÑÚá×åï"ÞÈ6¯Ó¹¶ \x001e½8±uY_Uz\,øø»\x0017y\x0016Ýcªý\x0010Ù\x0013ÌÃìöK´×fö\x0005Ë§=mÄöGT\x001f>M½<\x0018í1Z«"qt
,/ÚóqþòÕsçy\x0010¬­×¹®Á=`äÆ\x0007½;CÏ/\x0014Ý\x000b¨\x001f\x0006÷
¿OF5¬ç£¨&uï.$NáÝø"ª%½3£jEñ#~ðç\x000b=ã8õÎ°\x0004õ¦·'h-Ðv mÿòè\x00008_á3k³)JKYÇÊ<P·Î\x000b%\x0019©\x0010«#\x001cG.õ;ßN±[JAø¹À®\x0006u!ºþ}r+Yáµ>\x001b9ç
ÔM\x000bTu·R¶õÄ\x0018\x0017m]\x001dýê¼´Ö\x0013ãÜäÜ´\x001b\x0007F%ÿxbe"õõ~Ú\x000f]lÚqÍ³ >e.oÇoÃ)àú\x0005Ì/©æÛµ:\x0005Èú¬>¶®¨ÏûÖ\x0014¶~A_)Ï~^GÒÊx]¿¤íkÆìM»ZOo¾ÊW»±=>\x0016¸-TúöP¿ÐÎ uÉ\x0015\x001dTWÑSäá1VO\x0019÷3ëûlØu\x0019ýBI;\x000f³o\x0018\x0003¦ÄùÆÇÈc9`Ç0ßT¹äâ,äý@s>~ÞW>¯~f-ßÌz\x001aßx{X\x000e$$WüHüØa>ýÕä\x0016Ë=f\x0017«g®\x000e4{Õ\x0005s	K/\x0017¢*c:>hd||È\x0019.²þßöäb³Âá\x0012/Ô>ça¾
<pv\x001dóÀ|#h=°êÈ¯\x0012rÚ3Z$\x0013\x001a\x00198q¢«HÑ¬Ñ^áN»ó¡5OÙ¦\x0001á	\x0001enó,AXlE\x001c\x000bM ëÍ§LI\x0006\x0002°À­¥4ÜÎwÑïtú§À@¿¡y¥\x001cóÃz"æ±¤jPbÿ²_.PM\x001di\x0000þC\x0012 ¼A@\x0004B\x0010êVX-¶"Z«à[\x0011PÐ¶ºÚS×\x001eQ|ÔÚú@eë\x0003´»ÝÕn×µ»«nµ¾­¢v«íñµR
(ÈÓG\x0015Ñ"\x0015\x0002!÷Ù¹ÈÍdnH {JÎùÎÌýgæÿÿûÿÿÌÜLä1Á\x000cÆwÀ¸\x000eÇñøb@åßÿì#Ê·55_ÛÞ¨*ÞÔ¤>;«MZªb³\x000e2ì½,\x0015»7IÉÆ%7²±3êÕã741ûö3ÌwUlöt,Çc±ÉJv¬D%\x001bT«Ù úæ©ÚTöËéÅ±\x0017F¦Â	H0\x0013¾\x0019¸cwRòÏ\x001b¡7hâ.­C1«/ëû¬-§T¸|Û\x0002Ä`ßGãÓ}Ç¹ã¯R>@?VT\x0015ÏÛW\x0010ðÎ±[Aiÿ*P¸¥eYCê\x001ae;ÛXºC\x0018n|ù'mýÛ0Û\x0001Ò?Q9{GTUÜDê\x0006ôèÁOõUÿ-ºöý×_\x0017;[tþìéÂógs\x000bÏ9}ýâÎç_Ì»WUòS}]M³JU\x0018¶	!ÌÃU÷J&ÙÝÊ\x0003\x0017céE\÷pÔæýy
õ)>·lÝoý\x0000·ò­Z¹ý£{åUcÞ7\x0010u³,t-Ó±^Í¬ÈbI5ì\x0004\5ìÆçQ&\x0002uÈfÎ~4fW\x001eÊ8T6ä\C\x000bä¹È\x001dàñcZ"\x00089ü7\x0017¢ù\x0007+Ðú/ËQæþr´öí+hý	dÃ?k\x0006.'Ý²K(qO\x0011zo_	ú`O\x0019Zõ\x001bhåÞ
ôÁÖ;oÕµLÞØ\x0012ÌÕ\x000e¯>L!EÉÆO}ÌyÈD¼¯\x001e2¼ZýRTµzÐÐjuHìýæeUûp­ä4ª
qÝ\x0016ý	¡²Ä?ïXéjm-ÁG\x0017¸Úp\x0013@7æéñÁøõÐmÈ1¾8o>Z¸¾\\x000b÷ì­mùk|µÏ£=\x001cáý!\x001dý\x001bØ<¼?l²<\x000fÌ H\x000fÃ½!Íß\x0003fõ}>\x001dÁí8/g\x0008±¶ÆV\x000eÂ±W`¼06Ðþ\x0013=C¬º\x0001ñSBba¤\x0016ÂÚ\x0002Øt\x0001[\x000b 3\x0013».`o&\x000eÀ±\x00138u\x0002g!DÂ¸«\x0019\x0018»=0}´wî\êî{ÉÜ;Lww9ØÀ\x0000OX\x0013Þ¯õ^Ú\x001a=À"÷Ð\x0016|\x000fm\x000c¥\x00140§\x0017¾Ü!M{î¿íqíDo\x0017\x0018í÷\x0015ÚîÑn\x0005w_+¬D0ÊÝ\x0011*ZýÎÆ1°ÄýÌéÊ\x001a\x001a\x000c+\x0006ûÃï¼Zïbò>~\x0003Ç"Å¯\x0017êe\x000fÁRñïî®\x0011Sàêû&åÎ0c÷ÕópÏtõNq\x0011+4ÈîyÅvÄ\x0008.ü¿ÃìÙîyW×>ýÚòöÿöëµëïÖÝ[#Hfåð) \x001ezèáYãü\x001ev÷]Ù\x0003\x001d·\x001cdÝÝõÑe°rF"¿ÇO§N|×®öÁVLÅKKGsÌóÇ:³Ö\x0014M\x001dçûÑ\x0019ä:RGgõ³6ÇT:\x001b\x0003¬¥\x0010å`±a<ÚË´º~+BrÝ\x001a\x0018ãëäÏÑ[£\x001b#9ßÂídÐOb\x0005¾Øg?×ÊE¼¾Vî'ÒöEírÝ³n¼7n\x0008)2!æv¤?îñÕù%Ò÷C¡}æråf¦/Î\x0002cBrS|îê;;±¦«y íò!çtÖÞËT½ÆâKÓg^Sâb^SãdÝÎÌçövoøñö¾Ð\x0017køsø:ý ýÌÐCÙ¯´}L\x001b§Ù78§Dí¾Ðú´w\x0013²MóÏAÒ\x0016Í&¹Vï¬¥ùÔ}ïDý@_§\x0010¦äÌ\x001f-§Ær&£êé
ß´Z\x0013¨Ccq4È%\x0019G¾O=Z­>	Ö%Ï®PL\x000cb
ÚûZà¾\x0013·Ð{PçêýÕQ
PcFî-\x0001_:Ú\x001büw4¶Ç¨ïH©\x000fÚÞ\x0017Ê©Ðþ\x0012<·äÌ©±:1­\x0011ÝByëjKè\x001d:ð6Næ\x0016[Ò_c¹4;ò|"kZ`osß±\x0019þÎPµÜ\x0017®/òât®õií·Óö\!\x001d\x0011Ü×d÷ý\µï0P\x000c\x0010!\x0001x\x0003÷Ã%mÏ¦ð
EÆé\x000eÃñy\x0019ÛÊ]ä'FE¡NêÂ.Íù\x0003Û	qnþ!Ä\x0005û¡.j\x000c×jëÂ\\x0008qÜ1Æ]<\x0018¯\x000f³"ì
ûdkÊ|\x001dÔ÷ââC!è\x0013²\x0008ÊÚp­Ü\x001e²o¬\x0015òÍÀWm\x001eZ¶\x0013®Å@.i\x001f'çGPdáÄà<	aô²^H}?\x001dÙä´µü8µÊ$¼9Úq²%û\x0011öµ\x0006º)¶"y:èÐû¤
R\x0016AÑ¥gCkRFØÓÓ#Ñ/§ù£ç7?\x000eRº\x000f¤M.2¦´µ|;z~Kõý5
å]\x000cÞ\x0017)1ÐKê2¨\x000b©qû´\
úb$\x0006uIÖ/á\x001bÙ7VãBµFË§\x001f%ßBµ¥o#ïJ«\x001b>Pôsÿs»òS8H¡t±ö\x001b ]ÿ{@¯¥ù@Á\x0012\x0005DÖTÊ\x0014\x001adg	|ï"È\x001aaÏzèÁ2ÈâXÁX¦>&a\x000fØÌt@ª\x000b´2Ó\x0004f8\x001b'¥\x0003M$ÇôNÈc=ÀP;©Úçi\x00148ù«x¿5@
@¼#9á5<¦\x0008áHg²If2`\x0019§0ÎL\x0012\x0008âqL&\x000f{)(ãì[\x000b¶«ÔÅ9ª\x0005
êµkOO°lm¦ýl}5YÉÆMW²c\x0016(Õ\x0019û\x0018¦ôßj¶rE\x0013¤dã\x0013ìk¸å¥dÓV54\x001fÚÆ6n-­;1úBt*\x001cp\x0012Rõ8\x0005ÉX¾âÅÏ=Î¯n\x0018}u#\x001a=n÷\x000bcp>c\x001d(ØÕXw\x0007éØÐ0øè\x0004YBä(IA
÷ÍóÒyXîÿ\­\[\x0015÷ö*ÿù\x0007Ê\x0002\x0003\x0016ÿÍ\x001e~\x0003°l'ÀÒ\x001d¦£ñ\x0017%\x001fÃ¤¿\x001eJ¹[s¯®i@ÊG-\x000fîV>¸}£ ìæõ¼ë·óKîV\x0014ßª­¹S§l¨minn@\x001a¦\x0011iÔõèféµ{\x0007÷î9°úÛo\x0017\x0006ß,r
ª,²¨,ö--|¯¡añ-Õ)k\x0013\oæç­|+=nç[¹_\x0001ïâËöóëëS62-+×3Ì\x0015MÌÂ¾W4r8Ï¤/0\x0010xgiÜÒ\x000f£\A¾,GËóPãWH\x0006Gñø1-G\x0010øBkóÐlnÎr´î2´&ù"\x001a):Æg\x000eXÀ\x0019äµñ*zóÓËhIö%ôÖ;ÐÄ]74Ë\x000f¡»ËZÞ]\­1½Kjl\x0019ëÇ,Rp]qíÔÇìGLôÈ\x001aõËQÕêÁC«Õ!±÷ãWÕ«~Ô¨*ÁõZ¸½¹Yóð»þÃàí\x000en"aza<1Þ\x0018¹¨íÛÇ¯g\x001cçÇ\x0017ã£{\x000e` ­\x0014Â\x001de\x0010ëé\x000c)þ\x001e07¸\x000fÌëï\x0003o\x0004{Á\x0014ß^\x0010fo\x0003~x®·`©\x0018föõ?\x000c{\x0001¶F\x000fMQý-ÊfÌá\x0003 kh0,\x001f¤¹A½!­¯G+³Cfc^\x000fô\x0014E/r±@±¨5¶ByÐÕ½+#¶è\x0019aÕ\x0002§´\x000bX[\x0018NbÛ\x0005dÿc¿\£ºÊ\x0000üïænÍco&!ûÊ@$\x0010 ÙM\x0002TëPHS <äÕ6<µRQ\x0001)\x0005\x000bÒÊc\x000c´\x0004ú@tÔ2v´:£¥ÐÖ¾Vë0êT
L)Xä5P,:%IÝ5Çswï&÷û»lXÚÙùæ¼þsÎÿ:çÜ\x001d\x0000\x0019Q\x0019\x0003Y\x0003 ;J,Q"ò0àäDIn\x0014ðÞâ|J\x0011ÅÎÜI'Bo^.nK:4\x0015Á#µe°kÒHØ9qàïRè\x001dj¡å÷Ç
o°\x0006îûûBw~i!,*-ö\¨\x0013Íô-5\x0006î}ç
ö´ä\x0007É\x001fn\x0019\x001e\x0018i§ú\x0008ø!\x001e>|ÙÒ@}0Vò-è\x0012õû·úBòËÔB\x000b|)]èûÖHtÃ%#\x0003éìJoJ¸·*ÑoL¼Þ\x0013Ëôé)®^q3â¼ö9uôh)\x0014_ø_î®ÖÔDû{ \x000cyó­4£(½fÉßÍü\x0013\.C¢s%¯Ðk@$IÜhò#i¾\x0003à8þCÌø\x001cI\x0012\x001fò óm{åªÙ6bÑJw)±*`Û\x0010é\x001c\´ý\x0003Õ¶HöÔpëÆÃ'Ø<åü!\x0014\x001b¥*Í\x0004\x0013²ÌÐ\x0001
Y\x001c2Ív½>\x0013©K¥\¯WÍ\x000b¶ëc<YFf\x0002­7§B©Ñ\x0008\x000eªs1Å©,
Á­Ú\x0001\x0014sB2ù\x0014M±ÈLÉCTÀÎÕ\x0013ªK{æJ±0¨ubu.ã\x0017fíhõTçhÆ~ÌÚ\x0014OÙu±µ±\x0018Ç[h|©Ô§O8=±5â\x0019ëXòKOWe»â0àg¦ïº­CäwjÝcï\x001aÕù5¨ç°òÞ¬¼Þ\x001cL\x000f¥}J±:f+f3¶¯Þ½ªº¿xë z³rèýèÊÝ\x0001Í\x00136ï°8òrOi\x001f7§xvJuN\5qVú\x0011\x001b\x000fßl?Oç''³?{Æx¹¥ÙwÎs§Y;Ìh.èÙ©w\x0016yùÅ®\x0017&orûÖÖñ-¦Þ9è<1%«\x000fzî\x0018_£ç\x0013\x0017½x²stï\x000cNõâ§ë\x001f\x001dýÑµØ=øòò\x000fØ}À»·xy\x001ejKßöL\x0001Þ[R\x000cÿü\x0003ÚVIØ\x0019}§×:áÏÍ6°\x0019M¨_
\x0004¿kRýÇÓ[BàS+¨ej:[*ëcRi×W\x0015\x000b¤­Zô¨Êé9VM©Êñ\x001e§%C¨ÏòNøÂr[J-Õ·\x0006\x0010Ý\x0010Ýk\x0011\x0019L/
²/<,b\)ÇÎsëÈéÍÁê\x001e¬_P×Q}CrRÝÔ[FÕ'ôa}ì¾1¦dë¼>vL?·<ÏÍ\x0019ó(eX9E\x001f¦¿ä:\x0002¹\x001dè\x000fÅZP·ë\x0014súæ³²&íÜ:¶mRË«Ö\x0014´õ:d\x001dl}¥-¼ý<¬<¦\x00132Ù¬ÚÑÕõn\x001fgHüè\x0011´zhìgãè£)9{×1ú²6ðò\x0002ëÇbÌÚÅ^µ?O_d.Ï>T\x001dÝ0û5r:mô\x0000õ\x0019\x001b\x0017,ÿx9 \x0019ã­Åì_OK«a`ïms¡\x0008\x001f¬	}\x00178\x0014ß\x0003Õ\x000eÕ÷VÆ\x000e\x001ek4ú}\x0019®^\x0012\x0017Ä	µ@$ñ@(#\x0006çUbW~\x000e\x0016Ã/7Ï\x0019Ul¸'\x0007 \x0012\x0016|\x0016a~Ì£Ì\x0003_cú¾\x00050*\x001d É\x0012ìÃ"õS¦e\x0003T¦Ñÿ2ôV\x0018o\x0006e	C¶»£`\x0006Âô(pW\x000c4!Ü)ÓHýÒdÏÉ\ò
w\ûï;»{|íÛ:>ûË¶Îî×Ûã½´¯ÇwxY§éNÿ%ævú§<ÚíÿùK>ÿÇÏûü\x0017·uû]Üéoßé¿sA§¿iSïg»½=§>÷é«ëëÿ1j!¼\x000c÷À«p¯×`\x001e¼\x0000\x001bª+<üHçäw·Æ=3~]19\x0003`JV?3\x0001î 1ê(J}ÿüå¿<:ô\x0003g­øÝ©aK÷¾Yºòë+¿òÝ[mo;zå7Þ_÷\x0003gmßyñ\ùÔ¼]d|p\x0001Öî\x0005xp_l¬ý1À§áîý¯Í8yñÃû{®^_\x0017ñz;Hw÷õ\x0000Þ\x000eâ÷v\x0012Bû¯¹tñ£íþ¸»býù+6åà_óºTòhûÇÕ;O^s·\x001c¿ÒÐzöÓ¦§>êZvÿåËÓòÎ\x001dM)8ÌXxþ¸\x000bÇ9í\x000b§«¶øüë¶z}ë·û}\x001bÎûo7¼B\x000cð2½\x000eRZ	ÞÓ[¾é\x00152ÿ§GÈêß@~8÷od\x0012¼HÇ^Rp@Ñ\x001fHîÆ#dáÓd\x000beë3§ÈC£ß"¥\x001aÙH¡óÆþ=õ\x001eùö·Ér×^RÐpÜÿ/òÐÁÓdÛ¯Ú¼\x001b7îX4ÿº·qÞgÿk¤9\x00125\x000bº\x0002yÕ8»Ã?ù«Þú	½5õ\x001fzGÍ¾Ú³¬¥³ûÈî®î­]Ý'ì%§fíyr].½±\x0003\x0018äQn¡\x0014\x001aß9\x000eJ1Å%I\x0006\x001f\x0007MÆIÛ\x0015©\x0002xD3L\x001d"Ââò!°¾¦\x0004¶xÊa{ýphi¨Ç'VBë¤Ðz[Ç'UÂV:¾|¸\x0015Æd¤Â¸¬tøn\x0013vÝV	QÙ\x001d\x0013*âJhÍMãÁ
\x001b4\x000f-ûJò\x0003åÍÈâÒBXTZ\x0000wYE¨J7\x0005|ì\x0004~<J(6
½jû~\x001b1A¤\x000c\x0002Â a\x001a ©q$m\x0000¤\x000f\x0000s\x000cdÄHf\x000cdÅHv\x0014XbDÄ0hÉÜ(ÈS µ¥·¸@¾Ïï[là{Vn2ÂíùY°¢Ò\x000eÛêÃ.úVIïU<ß¡Í·\x000eoUÚ`â\x001dZ"Ýù´eÏ\x0005%\x001dÊ\x0004càÛFïÞ\x001fL_H§ïòÒò¢À;.½Û;ãð6K>hi\x0018\x0001\x000f\x001bJßbkÀö{·8ôþÍ°æ@MfZNÎH(Ït.¤{;Ò·*ÑoL<ß\x0014Ëôé)®^q3â¼öYpI7Ô\x0017óg\x0014ECÁó\x0007Ò\x0012íç"nÞlJ´/¿ÈR¼\x0012{®ÙCè¹&$I$7\x0012ë»$=Ñof\x0012>\x00193IJ¢s$I|\x0010ÊÁå\x001b¤ï_<j¥»ð(R`EÊÁ\x0000[;ý¢Õ­\x0008©ÇË>-l¬ûa±V¯!\x0014;ý¬IO	YfhÈÉÊzE½¯Ì
qúÌþ±àxP^µNhN½\x001eYK?cÍ©PBõuP½
AR\x001de¨^\x000cýc}ýþ1©í¢8h_\x001e--\x000c"Ò§\x0007&Ï[CÉËBI\x001fªËÐ¯§JgÖoçgG \x0003O\x001fQG6ZcõU¤sÃÙ\x0013éÚzöéÅh ¶E³^¬¶òæÅKïhb\x0016XF¢·ÿ9\x0014«¡ÿL³çF¯­/\x0006íYÓô)çröÔY¥,v\x000féèÊé³û+ï¸bl?æ\x000eDýÃêÆÛK9ÎÚÌYWãGÅZØ\^\x001cõ|ÈÆKµ~\x0004kbñÇê\Âìä­Ø\x0019mì#]·\x0018Ñ\x000f];LÙz¸ø`¹®Ô\x0011Ó	µ\x001f[\x0017±\x0005ó¿^c9\x0010ÑYÓÑC/G°õ±óÁË÷pç#\ÑËpùÍÙS/·°ûI7¿1ì~ÁæcùÙéTø\x00013âcv_®N3æ\x0003²\x000e÷þää R
FØ?±\x0010ÎnpBÛ*\x0007Å\x000em«åR¦¶Û×ØáÌJ'4;¥7q¿t\x0008~ÓWP;Ü)\x0014AM-ÛFd¢\x0019¯¡{Ý
\x0006xcu±@ÚÆÞ\x0013Õ¹=Ç«szUÞ@\x0019¬\x0007ú(´Oú|ïWçö1âá-.ÓÔô\x0014¨\x0006­n\x000e<}BýléI	âÑ«+e±6;¯¯\x0014Ôãnµôú°õUc­&Ú'ãVàáô»¾@]PË²},nÅ¸jA=\x001fcuÓ[ÕSµ®B\x000få\x001euB\x0010\x000fR²\x0004dMrÝ¤ã\x0005ê&	ãÈ«æ!¥j\x001d\x00133®°¤díªcõÁä\x0014°zkì1á¾amàÙùG©'»/æ\x0003lpûköBöÇbå
W\x000f$®¨\x000f9ùùÍiMµ\x0015³\x0019ñg\x001dO&ÿ5>Áb«ÌáHlø?ûe\x0002\x0015åu\x0005à;\x000b\x000cÀ\x0000²	ÌL\x00001\x00124.,u5\x001aDÅMâ\x0012m«m²¸Å%Ñ¸4*
jQR\x001bÅ\x0013£ÕÆ\x001dÄhI\x0013OOêÆ¨Xp\x0003Q«¶\x00111Ê0Ì¾¾\x0016øÿ7ï\x001ff`\x0014Û3sÎwÞvß}÷Ýwß»ÿðí²7¾õùæÒÞ\x0002ßVæÚüAp#õ]` (õrÃ7\x0003wì£âÕ.ÊgHê\x0008\x0014uH*òG8ë#pâ¤µ\x0008<\x0010\x0004«£âóy\x0011V¯¾ó^(Ý\x001b¬´VJBÔ\x0019[@R3#`úFx\x0002tÅ\x001fú±î¦>/\\x0018Ëb\x000c&\x001aËÈñ\x001b\x0018á
0ØÃ(Ãôñ¤3Ê\x0006F² Û\x000cv0¨\x0019n'ÃX¥fÇ9 AÑ^}úÌ
ÏÐÕõjMyZs\x0019e\x0005õ
×V×7|Y§[ñ[µ~ÖÄ:ýøwëô©9\x001aÝþ"þß%:}ÍN­îJnþÐ\x0002µný\x0006í©uõÒû\x001eg¯ï}5pªÛIq\x001a\x0014C:À»p´4ÜþÇ!]+zYþ¸\x0014
^2piÄ |Û±ÀíaòÀvI3s\x0002¦ýåJøüòÑ«\x000e\x0006MÚzZùÁ;\x00113÷]é2aqþ[qÓ?úeJÞ¾á3\x000eV¾:ã`UDÖ±[¯õßþ·\x0000áÜÏ\x0000²ò\x0001fo62§À\x000e6dáVaÂ3þyçî&ÿpýÎ\x000fÕ÷ÿU[_{\x001fé\x001e?@úúZ¤S×¢\x001f=xv©ªêæc§6uÏÙ\x0019\x0003\x0019x½ìÍ\x0010Wä>íÛªKT?E-©¨ZY^óæºK\x000f{åXYVófâµJe`µJäW]*\x0008¨V	\x001b¹uAØ¾ò\x001c\x0004_þÇ¯\x001f=N[¦ÕÏûT¯[8ýnÏwH\x0006ðûTÁ¥h#\x0012
ÛzúW4©°\x0014ÍÝRfw>Bà0\x001e/â\x0012T|ªÐ¤ý×Ñò\x00037Ð÷Ï¢âb$¤ÉÚJßïQ×ùgQ_\x0001òE\x0008úïDo\x0014V ùþ\x001d\x0017ë\x0017Î»p|ê\x0013]|JýÓ¡©uú\x0016Iy¢ ïÓç®¶[¿{ÚèÌÚúm\x001bê5WrÕK\x001bqÜf>»'4(ÐÛ\x000f¿Ü\x0001ø\x000b \x0010\x0013	Å(1
'/\x00049ãs|\x0006Á`,;\x0010'sÑ¡íaÊ«\x001d »\x0012VÆuuý»\x0018Èégd×`u_.k0ÌøZ,ûqtGXY×ÿu\x000b¹Öb^gYL'ÈÃä\x0000ð\x001fL\x000cói\x001c\x001e\x0000©
?èý\x001b&\x0012\x0018ümíl{àeD`ü	^0Â6@ô\x0010?'\\x001c«\x0003´\x0002·VâÞ\x0002¤-¤]\x000bðh\x0001vâÕ\x0002dÖ\x0010pñn\x0001>vàËÂ\x001f\x0013$øßÎÅr0æ3H71$\x0006û@fÂ;|Ää/ä¡~Æ\Ää¹Y¡7Þ&\x001b\x0019×frjHh°±íEçø\x00100æø(©+¤c39}cücú\x000eXÜ+\x001cÞï\x0012bØ;'ò_Ü\x0017â¼òü%\x0015[`î\x0001óÊ¼Aöäª!Ï8:·x%&Ïôe¤Ã¹ónB\x0019óbþý\»u\x0013Ü¨tokÿ¶\x0006Æ~·\x0001\x0003míKçÏ¾\x001fsä5\x000fÛ4ö|s\x0011~\x00108qâÄÉDñsÛçN'üøïE¶\x0011'#à\x0000<XyXë\x001eÜ¯°\x0003^ÅL\x0010«Nö\x0007Qäqr¾5}|ã|sZ\x000bÍ~köØb\x001bÍ\x000f4¿zÛ£½>°G?ÛV¥P\x0008½¤®Ð×C
}<Ü1R#íê¿Àu3æv\x001f³<9fo\x001ecÍgëæ´u\x001a×7µ
¶yJ!J"\x00069þ'«Àv+p)\x0007#æ:S6Ö6	3\x001ea¼xñÔµ\x0015_
J­
}f\x001býZ¨¿9[ùJ[çÛê¯ÖêµWÖ^_9Ò·­=\x0013¾32×i¶:*Ol±ÙZL±Ç<ÁxoBØwEÐt_ä¬ý\x000e°ß\x0007vÛüÈÉ~ Þ\x0018à®GêWPÚ´w©\x0011¥\x001eR7i£o¢Ïb\x001c,÷¦ ú-Æ\x0004\{ùögá\x0013ßhgÀñszÈ}PôÒÖæñÍá[v.<ëYÄ\x0015Íß|gÁs\x0006Ô¥Å7ëüÉxä\x0001\x001a¼w}æ|çIê¦øzD\x000cpl"b\x000fjLÙzÆ<û¦\x0011Û×äÛÂwøâzWiz¬ÙÜùÞ\x0014É3äõ-;Ö¬íâOkwï\9ú:Ý4{¬ùoÏVcXÛ\x0016È{ËwmÙ\x0003¹.\x0019wÞ)J\x000f¨©¬PøgF\x0008A¨\x0010¸=_\x000eùü@\x0002xr\x001bþd\x0002ã·p\x000f1@\x0008Ëh\F\x0013m¦4c\x0018\x0017YöDSæ÷ÀëEceÉÅ¨¬L{)Ê§A\x0015åÝ zAf¬GÉ\x000cíÒÆ¶·öB7ªèæ}ý\x001d%S\x0003Ý!\x0012¸¶pÖµbO£,»ÄÄ`×
éýÍµ\x001bûXk°iv\x0015yê\x001cÖ>c]pi"Ur`Ëú\x001bçMu1W$ÐÏÑ%æÚ\x0010CÇYOlã<M1D?mÿ\\x001c.ãÄ¦º\x0019ó¾Ìã.Üþ8b.gE,«/Ðk!+¶\3b\x000f{.{mKsºHF}Ä~âxô{±ð\x0017a_,ÙGó\x0003a'>r#C±æ3Ò÷s],e9gLYo?´2f'¡ã\x0007ZlRl¡é¤»GZü1O\x0013}4ã{Î\x001aÔxãó3Ï\ä³u\x001e\x0016>¥Å"±wFÆ§\x00159Ö
çø´\x000ep}¶¼ñ[ <³é[ómI~3ÀÅìW`tùw\x0012å3$u\x0004í\x000b+\x0000\x0002'N\x001cß\x000eäê¨Ø|ÄlûÌ5ÝW\x0008éÞÀa¼ÌH­x7ÕS)¤ðl'I62%½Ü\x0001:ã\x001bàal¡0\x00163\x0004wÄr¡ø½ëî\x00060ÊÓ86ÚË(+dð2VH´\x0011V\x0018n'ÃxH°¡Ø'c
{ûÞ®ùõO÷®RkNçª5ó0ëÕrÍõ
W¾hÐ^-ÔêJs\x001btE+4ú/ÿ¤Õ>¨Óß;ªÓ×\x001c×ëë>×êÏ,Pk?O«Ñd¬>¢O85\x001f
Øü0j®â¬,\x001dB
\x0014\x0019HbøÇ·®ãªºþ¸ìé3+Pü±ìGý&Gô÷}\x000bï¿Ïém	\x0006ÓPO¡$}ÂÌÓ¾º\x00166ê÷û\x0003\x0003ÆÌ\x0013I\x00122\x0004¾i¸$ä\x0008U|»ãÄ=\x0015JÙÄUBå{ËÂ§ÿY\x0015=ãð­ð\x000f¿¹ÓuõI\x0007Jå¡«¾r\x0013ÍÛ"Ù\x0005\x0000ù\x0000YÙ\x0001æ\x0014ÐaÆ²7\x0019ä¼~éõýÍ×7?î{þÞèqGÆ\x000fÌÛ9${÷ÑÅK\x000eÌùÝî¯çôÙ°g`ÈÒmJÃ\x001cF?.¥\x000bE¾Eþ¡D\x0016²v¯{Ð\x0017E.'NµûPu/rãåG±\x001bË1eµ19e\x000f{ºz³µJ\x0018@àK%l_öwÑêê3ÔÚ)4èæ.jÐet>ÿ4\x001c\x000eá÷©\x0008S9ß©íÈsÞq´]æí¿gGc]\x00193ÈÁí°ã(`åE4µ¤\x0012­ZPÆ»\x001dA.\x0016rv ,FcÈÛõ0Öû\x0016!ßzî¼\x0016í¯DËw¨ê\x0016|p¶jlÒ\x0013m|ªZ?4µ®e¤Õé\x0013ëôñÒÅÆÝÕvM{ ¹V­Q1qºAû´|ùýÿê=ä\x0010ür+0J\x0011\x0017B(öyðÙ/÷à¨ª3»÷n²»É>BÞlv7Y\x0012 1!id\x0010â@JÀÊ[y¤­£el!\x0001\x0007\x0006Á¶\x0012Z\x0007tìCg\x0004aª\x000evJký£h¡¡å\x0011\x001b`Z-\x001d\x0015
T&ÙÀí9»÷fï=çÞ½»\x001b68»ß×w¾óï|ç|7\x0008ìÿ\x0012\x0003\x0007\x0019i°Ü\x000b\x001b« Ã[\x0002»\x001bKáé\x0019eÐ5½\x000c:Q}ç´Ùæír.NQïÏë'@{\x001b~X\x000bË\x000b³`yQ6¬\x0018¥¬òäÀJO6ÌÍ·A¹Ñ\x0000Näs§ÂÙà{Ç­\x0008ôçÿén1ú\x0004À\x0010|1Ä8\x001a#Æ(1Å9JÒ4\x001e%\x0016
X£ÀÆBGÇ\x001e\x0005\x0019\x0011"Éf"r\x0011\x000eñí¹]s±×°ýÕé©°¤0\x001b¶LñÀ.7ºP>ëS\x001eÂ9\x0008ëÚ^[\x000ckËÐZòPà½oÅï=*ç;2 Öjb^ï·\x000b¿û·Ú\x001fR¿ÃÈû}±­¦\x0018\x0011¼ì÷AãDx\x001cùà2?Ï=r±<÷­\x0014ý±Ì\x000533Óa|
\x0017ðÅ(\x00155¤oR|'ð½Å¹DK\x001a-9g$rµ¥sß\x0014Ì£üÅ)ê[ó³mÛfH´Oc%ûC©z\x001bÎfÉßíøKt\x000c:û\x0004Þ. ø\x0011 I$In\x0005CÐ%:w&QÁ'¹ìdnø¶`!èGì;bÿoRó9\x000eòÑJ'Â\x001a£µisò\x0018s"\x001dWZW­?V´Ø\x0016­íJ¾v¿òñ\D\x0011§\x0007o	¦¥ !Ý\x000c
¨^hÀ}z±^/K}òº(Û ÚÃuRÐMÊ\x00061Ay
\x000fNds\x0001\x0002.ôº¹ÄÒ	A\ò1BÎ%ËAX\x0011\x0016±ÄØdu%"S±þÇv¸u²ýè{p z¶\x001eZ¿Mm¤Ú<µýDº\x001eËF[¥Vl:«Oë:j:cµ_mÝxëÕr¾Zî\x0016;dñpÊî7y÷åwÉ\x0005Ä½"Ê>\x0008}#hsÈqòí¡éëwª¬!sê(òäÞd²a{WØ·\b?ÕG\x000cÝ¤¿Yý¬¹¤<ë-W:cr\x001f4aú)1BúEmïªòPëc	-~ñJóüþ°â±/Ú\x001cê92äwF®5rWî\x0010Ë¿JvÅ<\x001e\x0018wÝEî¶6c-Ú{B³C©\x001eön©Ì¡­Âz´uTß\x0015·GéX±Çº»ZÆqBY\x0016gLHÞ\x0007ù\x0018ásÖ~1Iy§h{ÃßúS9\x0003\x001c[\x000f\x0017ÛÐÓV\x0000çÖJ8\x0002}½í\x000eø`¡\x0013JRR!?d¾ÿ»x¼\x001e \x0007¨\x0015©áu\x0016\ÖGò\x001d\x001d.õpt\x0017ÎUÙ\x0007ÿ>É>Ð-rªÂ6Ð]ÊIA¤6*ÞJûåÃ¥é[*lºrd÷\x0014=a\x0013a\x001fÍ\x000e/\x0017 VÄ++½|h¿\x001ar}r¤\x000eêZÄ8«¤Í\x001dîöd@¥W¼¯V&;<Æ{)óYºir¤n/¹\x0006EW­B$uù>ÇP»\x000eubÛ\x0012u¼L'J\x0003¥n\x0008ÕQÇê£éêu²¹ÃöðD\x0018#ôÑÖ\x000eÑ!ÙH®M±ÜcØ>\x000cáóIûÉ}Ì!æ¾\x000cÙ\x000bá\x0010(¬Á\ð1¹_ê\x0019\x0019Â×dí¶\x000e¹7r/Tÿóq2ÆÈ1m4]´X§îAí\x001c"8»x5@hqHó\x000bi{ØÚ³§ÞWC¨½awb\x0007-ÞH{2bÈ±S
&8ñ}\x0007ôn\x000fÈ¾	)AÞùÅL}õÕOMî9\x001e\x0018Ê\x00045\x0005H$V,?\x0012øxÅåHRzîqqÑ\x0018Ý2;ÄR[t,!X¬Â¢\x0008Y¨\x0005\x0018+ûDp}F\x001a'\x0005½C&{Qû{\x000cæ!ªè\x0019ôî\x0015"ù;Í¨ßæÌ§0O\x0003-\x00110W{4r7»"d\x000e\x0006ù¯9]\x0007+wþ¬µýú×g_öÍ¾÷+úú7µöõoÝôUÿ_^ï?÷úààø|_\x001cñ
}è{Ë7ôÙaßÐ¥C¾¡ï÷
õ¾88ôácÿóu-¹6ÔÒtÕ×°è_¾\x0019_\x0011O=!Ì}oÓï¾<ï³Ò'ìmcÿlé¨8{`E_õñ\x000e¡é\x0003Ä\x001dÂì×\x001e|¿±Å]1{¬'µÙ]bjÊ/H¹Ó¤ÅeÅ®\x0007wÂ\x000f~Ý]·tk
ÌYo\x0003hú1Xíà\x0017ï;á\{äRIíöCvî6ãÔÇ^\x001e÷ÐÁóÅ\x001e½4±ëôg{þëí8y¹êáß/wàsÒÞwìÖm¯ò°á9u{À_>ú|õÏ~ã\x000bºù%=×þ\x000e÷Ýÿö\x0019ÏÞ¾öî>}ejåÞ#ÙðÈÓhîÞ m{\x0002¥¤\x000bÆÍû8Ó}Üðøú=0v÷Aãê?\,ÙúO+W\x001f»0áÉS_N~öÌUoçÙ¾)ÓÏÏÈú¸[óñ)ý0üMñãP}¡§dÕWýV_\x001bX¹}Ð·¡î£¡Éð&z£Þ\x0012y;P6½/Tïï\x0015¶\x001eº ìx­WØ2í=á\x00109	Ô÷;!ãþãÂÌ\x0006VÞ\x000cÚ\x0001{\x0004Ðo\x0013t«~+Ì:xQxüBÇ¯>ì[ÿPïåùúo4/ùfhN´,ýfè®û¾öÍþù`UÓç\x0003wï¸ÖÿÇg®÷÷<Ó?x¶kðÆÙæ¬Y:\x0016½Þ..ÉHãD\x0014@BN\x00075V#,peÂúJ7ì6\x0011º¦úÙÕX
¨½síz²a\x0002lì'äÃ¢lX^í/G+«<9°Ô	\x0019fðpz¿ïÎÈÈG ôçÿé\x0012>Ap#\x0004\x001fg\x000cq %N¤Æ1\x0006LQ`´(H\x0012\x0006¬Q`c¡cc×HF\x0004`¹LDøÞ8GA~5·9\x001fô:h° µ8\x001f:¼Å°\x001bå3Lgc|r\x0010Î(\x000fuxK`]¹\x0013ZÇå \x001cåÏC«<7ÞX;ÔX0N|ï\x0000 5ñ·U¹Ñ\x0000\x000bÝYðÓq(·ù}\x0011\x000f\x001fì"|ð\x0000ö\x0001%÷a¿4çZ¡Üd\x0018þþHt¬D[,³tw\x0016\x0015sÔhÉ7#_¬--û¦`\x001edî{	[ÿô6.÷Ýc©öe¬XÖ¬á\x0013íËä/¶\x001fEgß\x0015S"ãhÌS\x0002ºÓ\x0002$I$É­ÀÔ,Úo$A,k\x0004>Ñ±$~ä\x0014#\x0012+7n\x001d³fqùh\x0015<v¤¨Í£çQêZÖgÍv\x000fñÔ­$\x0017ÎHÖÉSËE7pPfÆt34Ô§ \x0001#kKÈ¤BÆÂÇÍ~=¡cÁ~I6¤N´ñ¼ii²ç \x0000ÙìTÁ­\x0003p!r\x0011vÔ¶!rÄ1ÜÇq=\x000baEXD\x0019«¼®MAVMÇ\x0018\x0003Û#Ú$ÙÛnDh³M´¦Wi
r,Ò=©í7Ò}Ú"\7\x0012»´ÚÎòQ<|\x0010o?E«/r´³ö\x000eØ\x0018}ñð\x0007¾\x0007v\x0008¼]þû\x0002Á{\x0013RÊúÉ»%»dòN¼R{\x0018Êú. t2Ä1´Ü#i\x000f)Gé'ÙÚaúp©\x000b·3Ì^}!úiPö\x0011¢¶X¶QúÃÎ²\x000fV<¨ê øz\x000eäþØ ùuÎagÇ\x0019\x0005{Uý\x0000t{hçM³¼jçÁ²UéÈ\x0018U»Ë´8UÒËò\x0005Í.ÝJç\x0019ÉRlRß)=\x001aõ³âå\x001fò\x001cÉ\x0018×òÐl#ã%ì\\x0018gÇ²ö¦ÐâI-æÂbq&JóYçJ»ÛÌ}B gî­ËnpBO[\x0001[ë@H¥¬Æ>iwÂ
\x000fÎ¶ýñ\x0010ø>®â\x0000¼¨QÊZ^\x0019,SÃêçÂûäm¼F5òÛT´æÑ6\x0017'ôTÙ\x0006ÏTf\x000ctO²\x000fÑ]!¯ÛDìBoå\x0018ß*,/.ÈÑ{A\x0007\x0010Ð©h\x000bÞ\x001b\x0017(¥ºWÞÇöÉÇÛ<{¦ÖOê`Í¥Í\x000bY\x000fë1ÈJC ¤Q++kUúäzü~£Éýý2ê:\x0003ð?Ã<Av\x0005%3\x000cJÜ 
u	3ãFâ\x0012d\x0011Ybk\S9uc\x0011R÷\x0008hªh\x0015M¤VcÓDãÖ½'ç¦­Öå DQ¬(êiÛ\x0011Ô ÌðäöÎò7wî{³\x0000ÅÃp¾ó¿÷ßå_îï}ÈlÛH?H\x001bV½î¯4½]?~]áw\x001dcÉ±Ìü¬áë¬Ï¼6>1Ôy\x0018Br0-hl1Â:Ú\x0018~L:Ò'!\x001dc;^Ì\x0007Z\x001ell±Rb&ó/jáÅDÚ\x0012ÈÌ»h>ù¶(yr4§/bõAÉ+?fZ\B1ÐìPë\x0001»5±±EYW;´u\x0017º\x0016.Ô6MOÛ_d
Rë±mÓÑrA«\x001fÆ~,××»\x0015÷ëLu ÔÎWCu¶ùþ7\x0017¨Lß\x0000-ß\x0006æçj«¾EWòU,¼\x0019y·\x0005!Ç\x0017\x0000N:i-^±HªnlºlOz½hôNL÷ê\x000fà\x000e\x0016¦8Éd\x0001Þu\x0007?3\x00082DHça|Oò\x0005Ä»¾·'À8\x001f³.Ã·tÌ[ø \x000bÇç
3P\x000eu©nBa\x000b$;A\x0013$º@\x0002ñ\x0016â\x0015X\x0006Ëyûö­ÈÕ£=oÝ7hÝ3¼¡ûÑ\x0010\x001as_?zÑ3ýº/\x000clå±&öáÑ&ö¾\x0011üüà8~?ÙÄÖíÔ7]û]0¹\x001di&!ý\x0005°üîË´ò\x0003/§ToG\x00177 ¿/C£Ëò^ÆYÆ/DñçV£wÎ-o\x001esfåó²ý×wæo:õ¬\x001fÆæíøWrÖæòq³?(\x001dU4ÿðõ~éëö`s%éK¥>«e²Ô\x000f%\x0010¿\x0010ÂæmUL,=óZÿÝ¾¸\x0018¼RóäCV|\x0013<ïpMÄúT?Ñn¹Z¯Ùå¶ê§ÚâËuC\x0017+2ñ³¡½\x000fùx.Ý)ÜRÜí Íß!Qþf¿bÜ×ÿì>ãäÕ´Cå*í®²n\x000bËjûÆ^ª\x001b\x001aýé)X¼\x0015`I©(¼ßILÏx^üßÃðÝeÝòÏü{ÀÆKuoþúìÝ\x0001}¶\x001cëqø¢jsU}ì¶ª'Úìk÷#{ÞªbºÞ©Ü©r\x0004Õæ?5ýrëçÍ}Ö8ma~öØZv$\x001cÅç\x0014#\x0008üN ÅJ4íÛ\x001b¨èÐ
TøQ%îm¼\x0013\x0010}-ý­m­áeÎí\x0008BÖ#ÿµÿ@³\x000f×¢Â5Ík¶V>Y0ëQcÊä\x0017/M5â.S\x001bØÄ:vøèûú¸Ï\x001a<o¼¶ù¾ª\x0004¡Â¢ù¯á\x0013<\x000c£¼ºaTØG%WÝgïáRh'$\x0006À¯¢T°ZÓ\x001b6£¢`ýþ¯,\x001bFFäÊ¡¯Ã(%Ì\x0008÷z\x0005ÃôW\x0019Y\x0011!¦\x000c\x0018\x0005c]\x000b±µ
Ç\x0004c<Àüt\x0010Òÿ1\x001eí¬\x001d`Zg\x001báå&ò6@á\x0006ÞnÒÅE|ÜÀ×
üÜÀ_\x0008=\x0001n\x0010è$Ý0=÷\x0002ïÜéè{Ê]¸»íu\x000f)
òyJ(ÐõÅ÷Z\x0014\x0014[î¶ºGöµÃúÂpx¿Owx¯§ù¬ÏyãÏz­\x001cû"1ùåè¼o¯|bzã|¤ª\x0002aÙ6Ë\x0005"]\x001fÈVÃÞ-9àß{Æ|LÇùHÁß\x0019»x¾;~ut­8C¸Pùüéè»§#ï\x001bgînEkðfäý*â¿j1\x0005ÿ?y\4ìq¢£sØ\x001a7k\x001511ÒÎeç¯m~ÆýÔõ\x0014ö\x0018)¤\x0001\x0008Ì\x0008:é¤NÚ\x001bßùHÖÑ÷h'	-Gò®NÚ\x000e9í·ïÔ§ÏÈC==!\x0014[âÓxçt4½«\x0008ÍÑbì+fßQ_Gv\x001dÍí(vÒgGó:êçjü|ëdd0ÜÇ\x001bF`rX\x0017IrÏüwk»UÏëk×fÔ)Zæáæ°´s:n\x000cß¶MË³\x000eÏÕ×C
aØg#j	Ø<«ùÒ¨ÇÏ]±ô#Pa}8J,0¾øÙß\x0002ÙW\x000c±þä|þÎß{¡8¾\x001bÛ\x0003\x001dØtä3}izÒwòY¨\x0003\x001fÎæÚ\x001d{ÎÆáÊÜÎ¶Óæ\x0016×<¸'±ùâu\x0005GuâN=	­±A\x0018%´ì\x001bþþ±î# ëÆÐôjRRìéÃô¼vÒ®u.®è£\x0016ñO-±?[ÂÈ³lçl\x000bäFÐ_ÜÓÆ:CZ|ÿ\x001cÙ"ç&sh³F4\x001br$`Óºf"µ(;	e\x000c-w\x0014lî@Ò\x001f'ëVÿÖÚ¢Ä"cÑvxiq1ë&è3±¶b5'´ïÕ6ê}-\x0014ÄvðKl_í5»³R{BµJ­Ib¨uH³-±ÏP-cêQpïÑtd~ùy&ÖGp\x001f5ÈócÊúíO±u¶ê)gà9ê`}íöE\x001a¿÷'ûuêÅ*¨ÎRÂUT¤\x0019\x000eË%*8\x0010\x0017
\x0012ü×Ñ?oL\x001f)@¬\x000c@ã%F#³±"zÓ3OÏA\x001b\x001fki\x001bÃÖH%pì\x0003¥\x000c]ñg«b\x0002õÑ\x0001úf¸g³ô7ËhÓ{Ó\x0001èÊ@ßïrL\\x0006Ñ`k×Ö9\x001e\x000e¾ÎNÊ¾D\x0018£¥ô¥õÓxØûA¶q¶­ìgGÃ`É´Hþ³±o×\x0008 6UÊxcd¾2a;¤?ZÞ<\x001a¡y¹\x0018e">Qlk-¾ê8,ï\x001clÓmÄ\x0018­\x0008ä|Öþ­ÔQæ3eè¶øþhiqðìè\x0018Û¹t<½µ\x000f®#mÑâ\x0015[¡y¬¹áüä¥åMÈ6ßgÂêZ\x00116ùcíÖ_cþä\´ú£úFÆ'T\x0017d~H;p?»Ú\x0011YSr\x000eÈXZ½ýIû6{M V~|´yD÷\x0013±\x0017|\x0014ÚÇvûÐrÖÈ[q·\x0016\x000c»\x001fªyß\x0002J\x0013-ß\x0005Ê\x0016²Öo\x0004£¼\x001b\x000e3/\x001cö\x000coFÞmb<Â·	N:i
Ò $QÞB¶ªËödØ¦uÌT\x0000\x0013\x0001\x0016)B¦).0Â»îàgË$\x000b\x0019N.@\x001a&VÿGÁgÙÏðAâõ4
É>\x0000^\x0000*ÆÜ\x0004þÇ \x0015ë'º@
	n,@$:A\x0002ñ\x0002Äã|$úË\x0017úsq\x001eí»oÐ¼g\x0018\x0019<\x0002ËQ\x000f\x000c1
lêv=û×\x0013MlÝ\x001fØ»ûØÛÚý\x0006¶v­YÕØTû$Mi`ßÁ2Á\x0008~Nd`\x0013·ÞbgÝ<Ð<ïæN4íÒ\x0006Zñ1J©X&¯FãO\x0017 ±ídGl9~/g×OÏ¯å_}²{î	ôóühÒº¿ \x001f¡_nüîîüEªí\x0017¿f_°$q1xe,öËÞí;¼èHÐ\x001by_úv²Z&\x0007ä\x001cHLb\x0016HSxôÍÞå3cï\x000f=\x000bÏ?\x001aTrõfkõ\x0013í+õ\x0012Ì¶ê§Úê§±k+\x001e
ôm¥Úgå\x00172Èþ\x0004öz½ýÓ!³O](¾\ÿæ'×i7UÕÇþ¶ª.Ö8~Åù{1¡ëöÉ}aI©cr>\x0005ïå{$í» Üx¹~è6<ßòs?F§\x001e,Wù¬úR\x0016Xð\x0015ó·ÛQkÏ>\x001c\XþpÐ¨ë×îT@ÈJ)G×Û\x0015 }p»ïJ}SÖÒFÃ¢9?½È\x001c]c\x0018.9$p\x0014W| \x0018ù=úú:Zqð\x0006*Ø[Vâ÷\x0001F½]ßöäEî@ û\x000cõÿü\x0012Ê?T
öW³\x001f­©m|?³áe\x0002W'î0µMÌxÆ\x001dóÀð_öË5¸©ã
ÀçJW¶eËü\x001fz\x0019
\x0018\x001bc Ø²
mJy\x001aR \x0014R\x0018l\x0012\x001fmÆ¸æQ\x0010\x00021-\x0010
$MÚ4é¡S\x00122C\x0002í´!0ÓLh¡1elÒðJfRèd ±±eÛs¯î5W«Ý«§ÒJãov÷ìîÙ³gÏî¹¶áÓþW÷öõßs{àÜ>A¸°lÏÞ
6|Å\x001dK,ìhSX/ÑqPnÐãÄK¥h³-\x0001íVcm,3èàþ\\x0013¬*+§jË`gã\x0018Ø=­\x0002vM\x001b\x000b;°¨<3u¬dëSSFÁ·ÇÙááVXQ\x0007+FäCs\x0002³²Ô*Ùøå<\x0013ñ:)~\x000bÉAðOúqqB\x0017\x0007ô1\x001f&\x000c1 %\x0006¤FAZ\x0014\x0018£ =\x00022ÂÀ\x0014\x0005a\x0015\x0001f\x001a\x001c\x001bK\x0018dk ôç"\x0005bNP½7ñÎOÑæ¶b¤<E\x0007Óó3aõ8\x0007|¿a´×Ä¼\x0011«\x001c´sª/\x000fmsÃºj\x0017<ZV9(_ÊC+Kó%\x001e´ç;Ë\x0008£ä·>\x001eß3\x000eÎ÷­2R¯YV3l¨)òû\x000fcã¥<t \x000fÖ¢\x000f¾^V0ä\x00032ïµ ?\x0016Ú²á¾Ì4(Ñs>$@¼x'ìò\x0011ßûhrS¢ä{gò:¶\x0019\wôDÄÔÒ"ºñsõ3?ùdÂú3Tò_;ª3,ùû_ùçé¸~Ã\x0018Ï¸ÊÙ-àÓ$@$I\x000c79{xçÒ$¡:EÐÅ;^Ä\x0006Î(ý0lß\x001a¶U«ø"\Ea\x0010\x0019­?\x001cÈù!®\x001b¬a3K\x001eL¨ë£+\x001a\x001fhéÆã\x001f©<4Ò¡!Ã\x0008
rYe½Ò&ûÔrÕ¸z¢OªKmÆ|Jûn]Ñmì«ËHQ¼\x000eìh³\x0003mwªKÄ	r[{ËÆz&¥ÂØbì·Pú1¤,¾`ã3er\x0011\x001bââü÷¡ MN\x00186°lå>BÝ«Y£\x001dÏÔm3QÖ?¡î#R»#\x0019G[;ÞhÎv^´9k8~$õ³tXA¾ïÜÝ»®Ü{õ="ë\x000eb¬xG\x0002ê\x0010x/I´t:U²\x0000;Àß~uè\x000b°|/(ã@×G[¦º\x0017¿hvQýN\x0001v1Î@K¯ÿ\x0000üüÍ:?Ö9«m 3\x0014[\x0018çH-)óY{g­°_+V\x0002ì¥ÍÑº\x000b\x000c;\x0018û&÷\x001a`\x0003åîúù5¶\x000f2\x000eT:X{\x000f\x0016ïZ÷Mó\x001c\x0019ëkÆ3-Þ\x0018ïÖ\x001dÐ_­3\x001c­ê3fí1æ\x001eµú¼,ÿ±ÞCê9j;ù~²ö¯õf°î\x0015óÝ¡ìé\x0007b~À»(/AþØT\x000cï·Û¡»Õ¦Âîc¯ì\x0011eßt@eZ\x001a$ÂOü\x001e®Ñ\x0003Ôñ\x0000µ2Sôr)¶õwå~}|h¼Ü§î'ÇÖè\x0000&ãº¿^P \x0013:«ÍÞîêìÎñ3Hg\x0019±H`Ûs\x0016Ë®*³¯¬4{ÎUe\x000b«-\x0017_\x001cöÃ\x0008\x0015¨g²h¿Þg«ºTêdV¯£ÈÉ¹Z:Xº´t3u~2`]Æ¯Î\x00132Þ_®ôã\x0002úUÔ1Öb¡¶ÏO\x0017O·±RWÏ¡êã=#ny¿n\x0015\©«	\x0018o\x0008\x001cC£GÊhcÆÑÖ&æu5~r>õ~Èuú\x000clÛÝäX>P¯2µç:j\(v\x001b\x0008\x001b\x000cu\x0008;\x0003l íâOÚ^Y¾#Ïì£Úf\x0008]\x001fË^j\1Î\x0019ãD\x001cÒbê\x0003­=\x0012ë»I}ÀõÉ¸§Æ\x0018Í\x001f8óÛ!Ð\x0006µNÚ}¥Þ\x0005Y×ÐxÊùI¹\x0010ëÆ\x0008sj\x001eððúìB¸´ÁNäå{À¿ìYc÷û^øó¦IÜ¸ÞF×\x001d!=Zlï\x000b¸
\x0001$\x0016ë\x0011!5\x001619ÜTþõÝ´%\x000e3÷53ÂCªºÒ\x0016Y\x001a"KºÈWC%KÅÈ!°Hf¡ª®´IDù\x000c\x0013@i
þooÙ\x0017ÒQ	°\x0000ù
ÁB¤\x0011û\x001d8ÎI\x0005kòÉÉ±"\x000fÈÌyª²)
æªJ9\x0004l6\x000bS ³Ð\x0007sì9\x0019k\x001f~Ýpð×<îÆ«©W=\x001397¼î>ï²=ÞÓ\x0018ôÞ:2èýäAïÕßz¼\x0017\x001b\x0018|§õöàSK{½MÈÌz½s\x0014¤vwáî~ï«ï~tç­\x0013§î¬?~BX~æ¨Ðü÷ß\x000b+þIX¼ù¤wÆÌ+IÍ7n?¾çvoÏÒS7`Üîµ\x0014n\x0017²Ý{{ËZ_ùxîc×ZZßüptÓöÃ\x0005\S\x001bn²\x0015r·§ÌØ}Ìºêwÿ\x001c±ø¥SöÒÕ/dpóÛÑÉØ?ï;è¨6	óò\x000e¾æ\x0003e¯ulüËÇU;Î^´·ûfí¾î[uÏö ç?­]}âÒì-¿I¶çÁøøËú'~Á\x001b¿÷Þý³·ó6¾Vµ¯çÖ\x0014\x001c[»ë\x001fÿ¹oÆþEºu/r°ö\x0005\x0008Jû\x0001ÇÂý¿z§`g×É[þöï	3\x000f,²v\x001cHvìo{N\x001a÷ÀÁÓ¶ï\x001eûWEëá+å:/\x0016\x0017|Ô¥ÏÿðÎ*{¥\x0013&]»<bc¿gõVwÃº~Ï·æ^ðL×½.èà0¾Wo¨À¶ù¨`ÜÒ%¬<tAØ<½þ=a©ñMÁ\x00100ö\x001eaÜ/¤´¾%,<ô°õà\x0005aË/{<\x001bWâY²¤ï³Ùêx	\x0017¯YM7\x0006§¯½Ù¿ÿG}ýçw÷õ{V\x0010.4ÿä¥Í\x000e\x0003\x0007¾äN.~8\x0010;ø°!ÅH\x0019¯ÆìtXdÏeð
;´WÀÆ# }B	,/ÍÊ44>¶Óöb÷Re4À\x0002´¿m¼\x0013v4]Ó*à©ca'Öw$0¢}¢[ëÊ ­Ê	,\x0015#ò|hNp\x001e.µÂ2W\x001e¸³àÒAÐØvÉ`J\x001eúqqB\x0017'ô1\x001f\x0006\x000c1"%\x0006¤FIZ\x0018#$=B2ÂÄ\x0014!a\x0015\x0001f-¸@,aÍ@ìËA
bÕ[\x0013ïü\x0014Un»¹­"ùÅÙÐVís\x001bæµ©1ÌAS}9¨Ã]\x000eëpGñ\x001b`EI¾DøÎ´ÂRg.LÃor^²)\x001eß1âÅòº_Ê3Áñ.ÉnÉ\x001f1ðÁNÔõ4æáµ\x000fÔ9oe©\x0015\x0016;r ÞbR^çóG\x0002ÄL((98_~#±\x0010y(Þù&¼×±Íàº#¤'")ÕÕâgFÂÿx+8övj¼ý\x0015-=ÆÇÛÉßðüL--|<cËq]0ê,\x0002>Ñ\x0002$I$Épb="|îóñÿ\x000b¹?\x0015Râ\x001d/Ibe«0lÿS8;Ï¤\x0015åærE¸\x0012B<\x0012
Ue!E\x0016îzZc#íd/¡®\x0011ª,õX>¶q\x001cT§¥@£É\x0008
H}¯l0¥\x000f!Ê|rY&×%J^O©Ód
êy¬~¢¯\x0011\x0002#u:°£Ý\x000eÄÉÉ¥ÜVd<\x001f1#YªR©+þ åZe(ÐÆUd"\x0016¤@¶[±uÈv,±ÌÇºn°õ	Wg0=fÌÃOH;cá\x001b­}kÅÇ½öA°sÓÒC\x000bw\x000f¬¡Ü\x001dñÝrÁÝ{¯Ü\x001båî«Û´waH\x0006DóÇ\x00019\ ^G\x0008zÈ±¬>µý¤N\x000e½¬õÕºÉuÚj}*_>eÚ\x001eÄV_µü¤¶Gkl8g¤å_.\x0016ÔØ¢ù1\x0004½Ál }á7qÖ\x0001ó(m­8\x000fvÈ;Gµ\x0011·´XÕZy/i1Né\x000b\x0016\x0003ZgJ»§Ô;Døê_Æ^5ß ïMÀ¥ÄflAàú¬w\x0016;äÅ7«N»3Á|\x00124>Õý¬»\x0011Ä\x0017´{æ'cÄ\x001aÕ>`{føê\x000b.¥.æÐõ£Ìpy½\x0003º[m]ûR\x00036\x0016¿¦ãÿÓo\x000fu<À\x0014="µ|ähÍWú&áÂ\x0013qíÏ³ê÷Æg}Ö]m\x0019è\x001cTY\x0006º°ìª4{ÎVY$°> #ËÌÂ\x0007\x0013²{U¤onÌâþËn¹\x0000Eu\x0001ø¿û\x0002å-¸ì\x0004TQØ\x00150ÆDyú\x0006\x0014Ó 6­M$ÈQ4Æ¨8M4R
Ú4mSÇÄGi4Z[ë8Z'Ìtb|DÁgÚª­\x001aYÝ\x000b·çî\x0003ï=÷Ü»Ë\x0002B§ìÌ7çìÎùÿÿüÿÎ¹)HO
Ú	é6rHã´iØG\x0014B=F>p-Ñ\x0016a\x001eÏGW|J>¸\x001bËN\x0019§MãÎSòáéñ`C Ï\x000b=ø\x001aÁ^Hû\x0010ÓÃõIáÄõM\x001cÉ\x0005>ÏÉ;×)Äuá2\x0013IËd»Ü1à+nCéÀýÀöÐ¹%Á?BìH{Áý%îä\x001d®\x0014/\x001cR<OÞ¾DöAÊ©n¼ð\x0018ãöHû"ÆBL\x0017AÎÓ/\x0017¥\x0010^^%êT$ßÄb.»>I~à1\x0017³%V\\x001f¥úÄZÇb&\x0016gnl'¢;Yéã:*Ø\x000f..6ÀWø7\x000eû\x001eÐacÎÿÛw.Çu0ê ¨A;b`\x0001ºv5£ì©ìM´´¨g<5Q¶@\x000b Å|/)"Pè`2\x0005\x001cæyÉ\	æ\x0010\x001dô\x001a±þ\x0000:t%©\x0000rÑÿYABØ¹yhl\x001f@,«gïÄ\x0000§\x001débäsZ¼nãl14âLGñÊ
\x000bª<yâ×kÚÃO}gKÏh¶Ël¶G¤Ì~@?½ Î­°ÐoÔµÙî°ÙOí³Ó×Øé{\x0007íts½>¾ÔBZè¬Â\x0016z*jaAýiU­ô[ûíô?\x001b;è»+ÛèÒtÖ÷Úó_¸ß¿ØBç\x0015Xé)wí\x0013ïZËk[-\x0017\±ýF¶¾C	kÐY\Û\x000eñ?=¥YöæÊÜJ*þÕ'zÕì2È-\x0007ÃÛ\x0002½òfÂÚ½aK\x001b¯&üèKñqKë\x0003Ù1È7?"\x0007ý_ø:È«vPQ\x001b÷ø©ÿ6çÏ\x0006\x001cþ2þ¹Ã\x0017LÙõ·¨»ý¨ªí\x0000,
z\x0000³øÍû\x00175þ=ýùÃçSRß=\x001eªZõ\x001eåã/¹\x0001¨;¤Yýé·£+O32¡ö#
+mh¼Áe«\x00012w\}²yô+\x001f]O,ùüF\Ì­³òÈ_È¢\ß8\x0003)ß]\x001fRmµm´Ó+7ÙíÕÅ·é9ò\x0019\x0019\x001cDq:dy§Ô½_3ë\x000f41\x001bÞ½Ìø+£#Î}LþÂ$íºÄTïobÖïûY_wÕörÉÃö\x0019E\x0016:\x001bÕVdÏ{`Ï{õuOÅz©Öb=ÿ\x000eÃ4¾¿k^© ôè67P\x0017Öæ`D4B\x0018*§`¤¿\x0002\x000cç\x0013£¡:e(l\x0008['?9Ò\x0001Û\x001b±\x0015õk\x0011ËÇ\x001a`¿\x0012bûÀÁ~(ç~\x000c\x0014\x001f,\x001c\x0012	k'\x000e-I\x000e_7g$Á[ýÍ,#`)\x0011ÌÉqðãáà¹øH\x0007%Cú7\x0010¥Ã¢`®.\x0014Æ\x0006¨\x001cùÐ{ÈY\x000btí;~T\x001f ë\x0003ä½¢Qö\x0000ª\x001eÂÏGü»I\x000f¨}$Ð\x00074>\x0010Ô\x0005}DK"\x0013â\x0003¡\x001cÜÿÃ\x0010\x0011\x0018D,çéë÷©;°ï+û¶ÅQãm+FïÁê\x0014ömCoñä}ÛXìYÞ \x0015è
Z¾\x0005oPó\x001f\x001a\x0005\x000bQ\x001aúN\x0018á§pÞóÐ7ß/1àlS\x0002`ÙH½Ãö­ïÖ\x001bìÁéI°.5\x0001ÊÇè]ïp\x0003îÇÆ¢th$Ì7CF\x001a+åo©¾/°ç"\x001e1rÞ	ìûÑ\x0013ïSx{úâ­Øò¶*®Q÷7ôÿþO*9Mm¿ý©gÍ³~öu¬ºîêµ~\x001fç_÷lû²ÎÂj\x0019tE10À\x0000\x0003\x000cÐèÿé7ùÿ	C\x000b£i\x0019ª¯kfA\x001eÍP\x0006kïÕKì\x0015Êhd)\x0006·x? 'Kù"'éë\x000b\½\b°~Wýö4Ï}ÅÀý\x0010Â@Q0>À\x000f25jHGL
\x000cI®6]\x0013àjcé¾C\x001eÈ\x001fïìd\x001c]|\x001bø<5o[\x0018¯VA¼Xä·Þá»³ucàôupD\x0010"\x0018CëÁ Â·h}\Çú\x0013ü¥øþ²Ä±~#y\x0017¶¹ô¤¿Z5Ú.ê\x0012óÛ\x0018ùâÉ?ÜfWíwuÏb{ôÖÿ®ÆÈ\x001b¿½ñÇS\x000eºR\x000b¾ìA,w¸=ÓìÙæ}ë,¹ec\x0014g\x000c\x001e7Á<\x0002»\x0005KÐëÇ×\x001ap\x001b\x0012>êðÂw_Ø]ã\x0018£øº\x0004¾Q\x0012¶Iú=üÇusó!G<Ö¼\x0018Ð¢\x001dà?%>· \x0007úx®¥òLª\x0011<?ò"È«T,±y1±¼xSÒz©ú&åÁSÍã\x0008Æ%â%U¤s%¨1oìwá|òôä#-Z')\x00179\x0016É sÄëwñLè)á|Ò]ÇV4¯R{È/éH½\x000b$½Þ\x0003R\x001dæ^dØÄE¢6=P\x0005\x0017J
pÙ¬å,±\x001ctíµÊXh\x001d¾_eÐ\x001f~
Ähä\x0011uRå\x0000il«pµr\x000c8&$÷8l¦"Û[3ÂdÓ£4\x001dCÚÎ\x000e±\x001bãäìhm\x001bË¹1ZÛ9¶eÿ³}ÄÙäÐöÉaÌçc\x000f,U>-C28õ\x001a]úÙýtö]-ÞOÃäø\x0018WfÄd¬~>#f[L¿\x0013K£\x0012µ.\x001cÒ8­c.a¼s½3ÆËã:ä5<\x0019¶^Ê\x001f\¿`¾¬\x001b\x0003kÉeßõÝ~ñd\x0004L
áz1¸ã¤>ÉIIð
ãëL
¡>RßDwê\x0015ñ;nrÅ\x0018ßK§N%ß\x000eî¯I)XÌð=á~JÅÔSîx¾+9ûò7|\x000f1ÂZ©¼bÔ	¡\x001eIú\x0005¾y¨c±øà¹Áë\x0010ß\x000f÷Ì\x0008ê+½êW7\x001ej§PÏ¼>~¾\x0018øÞDî\x000bAÎ$|rë\x001cðõu.\x0019\x001e\x0004ÿ¨Ö\x0003,w÷uØÂóÇüâ:\x0018uwÑßa\x0002(
<\x001a`\x0000ßñÊÈãìÝ¯Ç^§½C=ùµ*å\x0002-\x0000ù^P$A¡\x0018Ád
\x0008ÌóÀ\\x000fÌ!0%HÈ\x001cÄj8t·Å¢ûl¢?À¬ 2ìüt÷\Ä0\x0015À´@H>ÃGò]äu\\x001c/É&¡\x0011'+ð\x0011ÓÑþ³\x0006ø\x001cÿE
Í|}ÛÑl\x001bÙl\x001b?¹Ù2ï{zZq\x000bSÔBOGd-h¡óÊZé\x0015ÛÚè\x0013ìô£vúÞ6úZÞõ.[ÔB?øaU+ý³Ý6ú
\x001a¿¿Ýf?µÐB\x0017\x0016Xèé\x0005­t6K¡Î)¶Ð¹3ïÓ\x0017Þ±×¶XÎ¿tµu·¢¦Ã\x001fÖ¢ó¸\x000e±Ê
\x0019U\x0007
/\x001f¸¸´±)a¤ù·A³\x001cÌ¿Ó\x000c}iG |Ö«Têº\x0003¡Ëþx=aê?\x000fü

r£dQ@+P¡­\x0004XþKÊ\x0006\x0000s=@E½³­Üî¹ÿWm\x0017â^ãËÊHsq*¶Aèß«\x001ckJ(;q-ñ'Ç®$ü áh\x0008·ñõ£6gßg7|z;¹úØ7£J.ÞºuV\x0016yó\x000bYð\x001bg í_7\x0013_k³o´ÙWn²ÛW\x00154Ó3àc\x0014C\x0018H¦;Ê×}É5^ejö~Í¬Ë?Í¤\x0011ç>&\x00020ª5ggÿÐÄlDþ¼±çrûë«¾µ/*²ÐÙ¨r|$«ø{zÎk\x000fÛ\x001aë,ÖKµ\x0016ëw\x0018¦©tçû5zÒ£\x001bÝ@õ>¬Áh½q*\x0012®¢¸ÿ²_ö±M]W\x0000?ÏösâØmø#	IH@8Ð\x0010ì|\x0011­ô¯v-´|e\x0010º®H¥SB)E-B 4-¬]·U\x0013­öGÑ¦µ[7µj·íInÕX\x0017¶\x0005J nZ7 µóÆÛyösòÞ}÷>û96Î*;úé^ß{î¹ç{î=\x0007¶4\x0005aû4x®³\x0011\x000eÎkç\x0011©ß×Ñ\x0000ÏRÆ\x000fÎ\x000e««=àtß\x0000ûYTB|ÿâ\x0002X3u
<\x001d©\x001bõ¡¯nºôaL\x000e´7À\x000cêbýLÛ4Ø>»
Ö×Ã*OµÕ\x0013\x001a\x000f¬«)Û=%PÏÁb>\x0007\x0011,±\x000f#L9À%,Y\x001f'Ö\x000cP0\x000e
Ç-MÆÝ\x00004)6HAzpZ\iâV´\x001eÄã:z-Õ¶j3\x0007î"¸¯Îµ­6Vw3]Û$]\x0012{°vn
\x0005áþº)ª\x001a´®&Þ.ö:!d³BÀÄ¥üÎg£ÞKm«Ó\x0006÷c­<¿[\x000euMÕÐq×`ÔõDs
|³±\x0012ÖM-CÿK5u¸\x0007¹\x000fëÝÀ$èdÇgÅ"WñH |W&qñw:Sui¢Ô\Õãï\x0015\x0006¯E\x0013
ÿÐ%µ©I:æ	÷q\x001f<dÍu|Æç§o\x0016R5Ë¾ì\x001fGO%·wYÄ»,â]\x0016!O<y²\x0001g\x0015!8ûÚ'u7\çMÌ1ùe1{¿/\x000eÙ*\x0002\x0001®\x001cwJ7\x0005t×{y¬"^=}éÚlf§Ñ8\x001a±/Ñ!A3\x0007-E\x0005Ðé(6»
Ú%°O"ÍµÉs\x001a9y.1OÓ16¯#ô*uë;ÙV\x0008àL>´;ø¥#ZÉ'.î£\x000b)FJ\x0008r\x000c<ò<KÖ×s*(÷íÍÅí\x000cÈv\x0007äï>ùLRÝ/\x0015\x001bôìOeÜÉeëÉ\x001aµ_¹G²ýi2Fì"ÏÊH|3\x0019o=_ä$->éäH*¹]zúõrDº³~\x0005{Ï\x001a#ßD?\x0000êûGÊÒúä\x001e\x0001 Ëz©v1lÖ³W©ÛOÙµ_@ç;éçhl\x0018:Y1¡ùF³\x0016gMü\x0014vøýdgJÚÄ8S\x001aYÖÙ*cäìX>%\x001b'ó\x0016+Ò\x000eÒ&j>°bÃ¸7T;\x0019w$sÑÄ\x0011CæQôÐü¡ñhÂÙêå\x0012-\x0017Y9Ì²\x001aKV~\x0013öÒâ«´·@s?\x00191¡Þ	F\x001eyÌ1òî$Ëi\x000eÒOÂ\x001eÒæ»Dä(ë#Ñ;O2.Ô;Á°\x0016[êfø¨÷^T"A0Áá®R¸°Ý\x000f\x0003|H%ÚìûcÞêSë\x00030ßåòq¢\x001fa\x000b@\x0004k÷YèÍÏ%Úd:æ`\x001bÂýºÉe\x001a>6Ã!~Øä9FÿL'¶îký!ì4­0Ðä\x0016?í\x001ex±¶`×
3QW	 UÒ/\x0013a\x0010&Ú\x0008eJÆÂ^OîCÓ£$ÂË±àe\x0019ù»Ô\x0015(Ç4²\x0016¼.G]Çk×iæ,ê¾R?Í®0¡SO&AkÂ\x0007ËX¿Õ¢\x001eSÉ(PÑôðÚõ4\x0019å¤þVBL\x001f1ÇÔÉk×²JûI»Uò\x0014¿HT>Sbª\x0013á'k\x001fÒ/Ò7ÍÑöæÕ2¤Ü¨>°\x0011/Mì(ú4qaMá\x0017-¯Xv2Ï\x0012'\x001a\x001d\x000c}¤\x000e£9®\x001d+?)úi~ÑòìGx­>¿ÉbÉ\x0001Å\x001f=\x001bh¹Ým\x0008ßdS\x001auÃ¿#­0¸Í7ú\x001b \x000eö7ûÆúöwOÎâf~>d\x000b^\x0017Æk'Oº½"çû|Ì6¡_ÿª`y¹\x001dV:!Æ

ËSä^%%tîIÂ2
K
r·Ì]Jµ|4¾\x0004ÿÅQÿàKPc\x0005oG}8~'$¿\x0010i@Y\x001f\x001fU\x0008p#>\x000eK\x0008\x0016\x001bd\x0011å{)²CÍív\x0006¹Û$Ðï[ðý¿¥È\x0006\x001b_ywãsÂõË/^{°ýÑ\x0019Do÷I´yéçÂ­«®\x0008V~1²\x0010Y°ò²°àÞËÂüîËÂ=»¯
¯¼\x001e\x0015ÎÿbD¸ôÎpñG#Âà«Qáý\x001fD\x0013o\x0008\x001fÿrDøìHT8½aXØknÅµ\x000bI}!Ì_74¼ý+Ã\x0003\x000f\x001d~Í¼÷z\x0001ìÄ;¹\x000bÁ¶¬÷3çÚ×þ\x0016ÜüÎúÕ¯þ1à\½wv÷ò®î}<,x\x0018Ìwm9;_w7ï|ÃíìÞgq¯zªØ|ç\x00163,~\x0004`õ.m/\x0003<z\x0003Ùú=à\x001f?lZôã÷Ë\x001f8:X[{è-ûß­[ôLyûaNÉ=ò]p>}ßtì|cß¡9½ø÷ì%\x001fy'_ø\x0000Ê.üÙ`òù\x000f ëÓ¿vGm{¢#õ
#/þX¸\x0019ÞÆø00!Ý¿\x0017¿òósâÞ\x0015÷.;.vÀ[lù¬{wüVñÃ3âo\x0015wÿä¸ûûgÿ»õëÿ\x0011î^~EX@Ëd¬¸,Ü¶æ²°rÿèÑ\x0017®\=uhøê__\x0012ÅsÝ/}gG%¾è~$Àe\x0016?"é®ñ!u¼	º&;`E\x0007\x001eá]-S¡¯£\x0011¾Õ5\x001d×ý\x0006xÖ\x0000\x0007çMGgUAÕ\x001cÛ+Ó>$ó¯BÝ\x001cG!ôÔNÝáZ8¾ôu\x001aó#\x0015¤Ø\x001ch\x0006O´Ô@o[}Ætöu6Â\x000eÔÛ\\x0003\x001b\x001a* §Ú\x0003kð|ÖVÿ°®¦\x000cº«J¡ÃU\x0004U&.v.©_\x0010qqÒoóÜ`Ê\x0011æ\x000ccÉ\x0012|\x0006°fqP8\x000eliP&ö4p¤A±AJÒÀÉÓâJ\x0013·L)âêâM¹5([uMª¥\x0012µ\x0016\x0013Ü\ê\x0007\x001b+a_k=ÖÛÆX½ÈdMôIíp\x001dl	\x0005à\x001bXG¥ú³Fñ¾÷Ôx`i¥\x001bÂ%Pcæb¿%r\x0011Äï¹%6x`ZE,&±z?\x0018tÆcð\x000cÖö\x001dÍÕñ\x001aþ~
k\x001a­ÖI¬
ÆÎ¥±À\x0012³'\x001b¿ß²EPf
\x0017³2]&JýÉEÍê=\x0018ä*¿W\x0018¼.\x0016M4üClÖ¦&é¸'ÄÇ±*?ñ§	\x0019+#\x0014oÜhÉu,ó\x001bû©<÷-9ç=&âs#B<yòd\x0003ë,ÑëÚÇ\x0018\x0015\x0003ùºðeÂR+rÁìåïÅo[Ëq§\x0004^E?°öñÞ \x001b¼¾\x0011[³á?+\x000eÉä§ 5f\x0013Dì6èp\x0014A\x001b¶íØ"\x001f\x001dW´mÄ\]ZcÓèheò4}ª}É½eûB\x0005<\x00048\x0000\x001fÚ-µ~#õ\x0013ß\x0013ó\x001e¤\x0013)C&SÆõÖÐÚT×'ö¬ìLö\x0006%Û¹øy¹\x0008}©Ø	)è%Çí}Éö6¢Ó.£¾d2öã=/Ö¼\ÍäY\x0019Õª-.¤\x0002ÆîMâþû\x0015ß\x0013sÊ÷ 1î\x0007ýwC3¡ÌÓöWêÓ\x001b'mUÉQü£Ù¬ç\x0008 öYÓW¬ÕØ\x0003jûGåub@ÓCÊ©úy2V£²\x0018*u%Ê\x001f¤Ý,{©ùA9\x000f2v~J\x000cus¢×\x0001ÂNæ<ëü(-ÕÆýH¦Ã¨,
U¬(÷D¯¯¹_ÉügÜ\x0017=ÛYï¡8ëÜyM>%YOæ'ë\x001chçL»ûzvhÎ'3$sÇº÷	Ø{Qï\x0010ÅFZ¾Ðt¤{n¬ïÉîs*ºTz\x0018sÔ<¥\x001bÄkëúb\x0018ÜàÓ[|0°©RÆ\x0017gs|ì\x0014¶ÿx,\x0000;ZÜ`\x0006\<A>>4¥Í\x0002\x0010+a[0rL%û´5¤l\x000böpÿë\x001dðéÛÓlâ¹&wôdÈ\x0015íéÄ~È}­¿É\x0015oq\x001cÇ°uÆúý8ÿ[\x001cå\x001ezwº}ë$S3êjF_Â¨7b\x0019k#f5a³v5\x0017V´£s\x0016ú<UE¶W\x0018ðr<ä~D9f!Æxú\x0018¹.BìEÓ\x001f!ö\x000e\x0013úÂ=ÃÄ~J\x001b{¨d(6'Æ[%,cD\x0014ýV^ñ=Ñ'ä²£ëyõZÕ:Å\x0011r^½¾ÿ\x001fûå\x0002ÔÔ\x0006àÿæA 	\x0004w\x0008A$\x0004±¯\x001a@ÐÙ­(øB¬¶ë³ºuì*Z¬¢õø\x0000kÕuÖi¶;³¶µ;BGíì¶cëN·3\x001dE­«CÁ]ÙÝÑºS[X#\¸{nr7'çÞ<!í\x000cùæóÿüÿþsþ$ +[F°//\x0017·ÑÁVB<\x001cìu%Ã³'\x001bó'`\x001fq
æ+î[6îÀ¹Î0 ÛÉ.98ÅÔ­'åÃùËÈºð\!Åä?n\x0007®\x0014{\·S
Èàûàk\Å\x0010¿7¤3ÁÇEuãöà¹@X'tÏ\x001d|"³/v\x0019ü|\x0008v½#|Ø\x001a&\x0001¯*³F&«ËPý_o¯÷v´Øï\x0001-oþéoCÜ"KîíSêû\x0018H23Ji4\``!¼
b î\x000b&Ø×\\x001c\x000cR\x001f>\x000c).)\x000f\x0007(×8Ræ\x0001¥,adæ»Áó\x0018ó¼ \x00041D¨3Å.`e&)Ñÿ\x0013ôÖ%"F\x0005\x0003ÌBcsxÌæ`û¹HVÇÉê\x0011ST6=³yÌ"0Ó\x0007fp\x0014yA!	µé*÷Æ£@\x000105*J:ç¹âJ·%¬®ÿtA½Ùr}u{çÑ¼\x0007=c\x0010c'?è\x0019?¯.Xh¦g,0ÓE|ÊÌtA©¶¦®<ÖmùìþÏE\x000bÝ~¦;.YèO,ôgº-M\x0015fK\x0015+@k
q\x001dìXùczfE{×±7»;[\x0016}Û]Oí`¤°\x001dÝËê§N>^sþnjEÃ=CÉÉ¿jã\x001f\x000cTIBæoj[\x001f¿ï¨\x0005g\x0016¾}M7ÿäa/ì\x0008\x0019ëÑ¥Ø\x0006°é\x0004âäS6¢ï¯\x001e\x0007Øð\x0016ÀúcÎ°ã\x001b;®ñ\x0004¤;óøEÍÚ/ÿeL=r>TöÚijÅ¿K­üêßÏhv¾'·îmå\x0004ÌüðúÛí\x0013ën<2UßúoÖ3ÿ¸­lk¢bÚ®Kì\x000c»×\x0004E¾ÏÝc¡«võX6ï¶X¶Lþ6A\x0003M£\x0000h.ò"£Þt)«¹É¬4üÑÊ\x000f4hoõ\x0005&äµ&æï2»Ï¶0;>hîÛY}¿÷¥rs/)/\Âæßò'ôú®¯ëtÝ9ÒÙ}ë\x0018Ã´îÞ³&\x001e½ê:D\x0012å\x001fX]¬Î\x00041H
Ï\x0005CQ\8¬4&À¶	# &Ï\x0008&#S2¬mm~:\x001cÈóCù#ál\x0003W+¬ûùË\x0007W$¢½´,¥\x001c^L]ÈÃ?Þúâ.ûr~Ñcû¶gSàô\x0004XüX\x001c\x0005GÃâ_\x0000K\x0010ËFÄÀ<m¤õ\x001ct\x001eä±\x001e\x0011MÙ~Ë\x0007
Iú\x0011Ù\x0000 ÷\x0013A~Bá\x0003Á>\x0010â!J\x001fPyÚ\x000bB=$ÌK4$(2á\x001eÀÊG !b\x0011Zì=\x0019¬Ú3°5eT°\x001cfÅÃÑz¨\x000eQ];ïßÚÆê«AíÎ©°.S\x0007ËSÙú\x0013m­Aýï;ªI\x000bÁH\x0015\x0018äRkÝõço\x0015wIàâ2N\x0015\x0004Ë\x000cq°77ÍçÔr1ØêyÕ¸dXe·úý\x001bB
^\x0012m­Ïå(\x0016¿RCºB
:Êö;$Ð9ã	Él,)Ûýfk\x0011êúµ\x001eù«&\x0005ºöøZkTz=ðÕßõ}òçîÑ!ê%KØ0\x0007ô£,.²¶\x0004:\x001e¾\x0010õZpPV$Ð±\x001cú\x000cþ½CÎ¿Z\x0006=w\x000c\x000c1Ä\x0010Cø\x001bU9#
ô\x001b7ç\x00142Ò@çÎ\x0010þ#ú,£\x0018°|iï\x0008I0A\x0012vCÄ\x0013ÃZwÃúÞêñ'¤½ÅÆÄlÆÇp½µÃ\x001b\x001b
r	äªB`ZI{:ÏãÆûçx}G}Ø\x0018_(ÏÉ¨\x001c÷ÊCmf\x001ctÈf$J Eh\x00110kù°cQ\x0008Â·öÁçØ6³_Ï³µ9\x0012·GÈ\x000fwöõt$ãj/1=Ùß=<¿;{º\x001b7wmõÄ'Oâê\x000f½\x001ap\x001d\x001fW±\x001a\x0008ÿH{±w½ÛI\x0000Nï\x0000ÿ;, #$o¿¸\x000eÑ5vý"ï\x0011®ÓÞwgä#É\x001eb,\x0004âc\x0013ô\x0005[ïj![\x001ctQÎ{:ñ\x0010;[]I<ýuA$ÖB>âú\å`>âñ&ÄAt-~&>þÐ:¹7Äu³Ï¤3\x0015ÍgB\ñ¼\x0014)~W\x001dÆ±1Ü'±\x0018\x000bå¬Ð½\x00119\x0016\x0007¡÷Ãé\x001cDòWÈ\x000f±\x001cryV\x0002¾áv	½\x001b¤sè\x0007.ÖÝ#r] \x0006ù# Oè¼IyJ|ßÝÈ\x001dwótI÷T(\x0007I±\x0012Êå\x0004D&%Ï\x0017ÅAë¦D¸½\x000e±kûÑZÛÊDøb\x000eâ¤rø¹|$tä[®\x000cÀ$ÀD)¹åÏO$[çðVÊÓ\x0018ö_¬ÖÓi
¦eLd÷ÍÑáÝ7F÷Øp\x0000ÍõÜÌàæ­mosV$Ó¥iX "¥`,ÒgBNeKm¤Oûü1À\x001c	\x0013a­ës~²m¶Ü\x0011\x001d­\x0015\x0017XËgótÙçû¿ÖÈ×tfól0a}\x0007»\x0004|$®G²9¨Í±Ç@\x000e¯Íá­éç­·ö¹ï\x000eë\x0004ú|\x001d\x000eóM9Øþ\x000e¶áû\x0011ö'ÚLòä+a\x001cY\x000e\x0016K!¸nÑ¸b¾á~\x0010cÁ·Qä|Hçîr´§-ü3\x0013²CBúì\x0013:w¹³\x001eÁsÆt|\x0010ZKÊ\x0013§ssqÎ¸.1ÛHg%£
$}¤;Ç¿o¸n!{rp\x000eÄ¼;öñüææK¼«¡³ÂÕÐìPëµXí×bãó¯Wèû\x0018¥¯D\x001ee\x0000\x0018\x0018b\x0008o8È\x0004ù#\x0017\x0007_­Y!+×\x0000°¹"ÌF)Æ|/xc\x0007`Ì%\x0011êL±\x0000s\0\x0013¡\x0000HDïý
\x0016b[7\x001b-BD²Z¹Mí\x0017qó³8fzÁ\x000c\x0002E\x001eR£¶1ÝÊ5ÓD(@¾N×É\x0016n½4¶ê\x0002S¾ê\x0003¦ øôýç\x000eÿ`þz¹óò´ï»\x000bsî÷ÊÐ3¾¤ºÐLÏX`¦\x0008\x0014é©/éy\x0015OèÍ;;-§j»és\x0007ºè³UtÝ23½¬ô1]ÀÊÖ³kW<¶¼²ÿqçº®®;ùö,íèNÚ©¶µûºUe¸§_Ûp×PÑpÏ°üý\x001bÃKN\ÑþF·ê\ëÆ6Ã\x001a*\x001aï\x0019^þ¨%%éå£j(\©\x0012 ¢\x001e`ÓIW\x0003lx\x000b òw\x0010Zý®,vïYþàÇJc}chúÑÆ°´ºÐäCRÅì9«\x0008~ý\x001dI¿¼\x001dö»\x0013\x0000\x001b9X½8H&ãØ°¿ÿ<]§Øú¶dõg­i\x001b¯´e¨¶Âº7A²ù\x00145éËQûoü0îèß2Õû©¼¹M\x001bÛvn».ánk¢âÛnÊ\x0017ÿ¯}î^\x000b]µËbÙ\ÝcÙy£×\x0008çQl\x001aEh` ì\x0002£½Äh(1¹Á\x0002Ù{Éx·ÙúQ+óÆ-ÌÎÓwû¶¬ìè-){BÎ\x000f1JQî¬2Ó\x0015§ºznÖ=éºS×Ù}«agWn^\x001a^õ$\x0016Ê;tD´^Ë*@n¸\x0012Ê£ rL2ÔL2ÂÉ\x0019phòH8?\x0012jóÒá`õíË5I\x0013\x0002ñ>øà¶¯F¹\x0014æ&FÂë\x0013Rà0ò«\x0016Ùá/\áø±:jò°!3	¦ÄÀ"tVGÿbXbk§ÇBZÄî¡\x001eíC\x0005\x0008I\x0000ú\x0019Ù\x0000 ÷\x0013A~@á%Á>\x0010â%J/QyÚ\x0007B= Ì\x000b4$(aÂ=`\x0018"{7ìoÈ@×ÁÂ^ÓØöÿì	lTÇ\x0019ÿ·§w×öúX¯]Û`9b\x001bs¬×Æ#&
$@\x0002åH+5¥\x001cn¸B\x0012\x0004â(\x0006\x001a¦´\x0001ÒHQ¥ÒH@
Q\x000f©4ªª´ªÚ\x0006\x0012bZ0\x0010ª\x0006÷
)­c¼X~Ù}»7ï·owm¯SíJæúgæÿÿùgþ·õ.\x001b,.óÀÖúPn¥9{ óõ~%gïkªç§u\x0013JaÕè\x0002XFòÏrî}_^>\x0002æ\x0015dÃÄ\x000ckô\x001b#\x0015~¡ÔgÚaùè°Ó_\x0005f'ù>y\x001fì%ßEÛ®.
ÙLíåóÜ/
`Ï\x0003÷ægBµÝ\x0012_$\x000b½/Tï\\x0008¿Í¤:(9i¸ä Tä\x001d>¸ÊÊ$ïÍNGYì\x001c¸_xºjÈ&·[Ê=xÈjû%ÿøk6jK*|þ
_ÉÕk)¿ßÎ2yzeH&MÄýlMõû&~
Úd{ªc'ÍÀa,\x00063^¼§NÛL&($»\x0015Å@$S¨3&ZÃ¨|¼{$²®Q\x001bì\x0011Ïþñ¬µ)c­fhr9`z¦\x0013P\x001cÐHÆ£m¶NÆÔm¥m»úe\x001a2\w r¼ütª\x0003a<Ñµèì#ÿ¼\x0010Ö£(íBB\x000e©g\x0011²\x0015ÜLå+e¶AÜÈ:X[o,P\x000cýzFô/!xâ\\x001fs\x001bµn<ûæakÆ£\x0011ÛèaTGÑÙ&ãC_Ú¢w¦Fä\x0013õK<cFü\x0012O|ÅZk\x0004Á+q÷+y|ú®Æø·$²&[G×\x0000õúzsEúDß.½qÌæH¤Ý\x0003µÛ·G1¿²2^I0YßÇï\x0001Z\x001dx¿	û\x0010_`ç\x001dËç¼/ybíù
QjÎX`¯J\x0017Nü\lío°³õv?½Ø\x0015ßÂ»c Ötï\x0016\x0017{üÈ.M\x000c ~\x0016ù\dÈ§*{\x000c\x0017\x0016#Btì\x0011Å\x0000vïqk Îcù\x0002ó+¯}¨Ø\x001d¡0¦âð_¬³ÐÔµbÙoÔÏ¢çÏ\x000eÓKå3v
¥N¿['z c£\x0017.µBû\x0006Jº}ã\x0019\x001fÜ[àáô³\x0011jÍ\x0000\x0001\x000ba¹¿Ô£mºO%o\x0011Ïcå\x001bh0ìÿP\x0015>84Ú.wLÊ»Û^\x001b¼PÛs¡&Bël%x¾&··½6O¾Rsùx¥c}\x000bjÈzS¤þõ\x001bÌýu¬í7ke\x001b¸>#r!¬¤´*6ZÃm\x0016?RWõYÔãl[4'*Ë·¹Ø^~nÜ/\x001f\x0002±K³/»%L@©\x0007,ê22Æ¶±¾PÛªîçç°óó\x0011yLÇ|\x0003³WÀ¢^\x001dÇô\x0011Ù\x0018\x0010íØÃ¯­\x0019-1½ul\x0016ÉéÉÇ\x0013/Q\x0019+ þ\x000c ý\x0001\x001eÎVØ~Ì÷óg×ç÷Dãó½æ\y_èùG'Æ°ûÃîÍú\x000cãý\x0010+fyùsàûõb?#ôÎZÕ¶bûc÷\x0001»\x000b\x001a[8áç7\x0012Ê¤Äòç¾Ú\x0002¸Öâv,÷·°í\x0012õ8\x0019ûÉÞûMuÿþ£¬Ov&Å]ÙiñÉÄ\x0002\x0019Ò¤I\x0004çBÙt\x001c\x000e\x0011ugNÙ\x0017ç`±\x001bp²\x0001\x0016eËHòX<Jx$\x000e\x0016",ÀÈÂyXÀ\x0017\x000cBeg¸ÈF>îKÉÛWAÊû]áþ\x0008\x000f2Pùf2æSd)
Î°Üç
2_a\x001eSgûâás,ý<à¹:Ì¡8\x0000fg9¤eOÖíú¼rß9yõìãrï<f×?{Þ~ùNwÇSÿêÞÕØ\x0019¼§¹3X¿ðvïì¥]½ótõÎ\x0013ñxWïÜÇºzï[ÔÕ;´\x001f$íù¤=kqWïlÑ\x001c:öä§½\x000bvv\x0007ß|åÎÝ·zÞ)në\x0000ß'÷ò0áEÂö(¦Ê\x0003·óV¸^±¡íjÕú3\x001fVµýË
goY×v½jÝ¯V­=u¹jÍÉ+_=uµrÜÆ×³àµ$\x0005Øð-0my\x0015
÷Èvô\Þ£'ßõ­}ûZõó¿ë¬ÙsáãÉ­í·§´^úÏÔ½¤¾ó÷´ý·\x001fÝóµs\x001dc´](ów&\x001dùYÎÎd\x0015îùasûkfÛ¶c&Óï\x0001l:\x0002ðõo\x0003´¼\x000cðÌ+\x0000\x001bû\x0008Òæï¾ïeë«ÿØ9ÏÖßüuÂ¢Óç}­G¥¢½'\x001cO¼u±¼õâ­)?øÄøýO¦mnÿ[MåõvÏóRÁó¦\x0008\x000fßêþìÙÜÝóô®`ïÖÝwïn[ÿßà<¿îËÓÄ/gbÐ¦\x0010KÎ Ò\x0019YÎÊ¦æ\x0013=\x001coÉ¶çÎËOìwýèüâå\x001d;:û¾üx8ñAbmÖîÞ=oô\x0004¯óÓ;\x0017_ê¹ÛÞz'øÞ¬Õ«\x001f.&/»"ÅG)SD(!µ¡9×\x0005ËG\x0017ÀúrØ\x001d\x0018\x0003f3ÆÁþæjøÆôÁ¡µy\x001cìm\x001c\x000b
nGHxm0W
Û:Ê,ÁÜlØ<©"´÷\x0001bß`Ù¶Bö û´ÎPÊæ°?÷óã\x000c1×UÎcS]\x0019¬\x00185\x0002W/~X5ª\x0000å3Ïr\x001398Ï~Ã»ïx)\x0005Ry\x0010°\x000c\x0002Ö$±
\x0000ö$ÉH\x0010G8\x0013Ä\x0000	\x0015'ÙqâÆÄäèÀÊä\x0011
\x0008%Êû_¦0X9f¨¡ùæ~Ó\x0002$®ª*\x001dþJ8@rÈÁ\x0001Îk<µ§i,l\\x0001kÆrÏ²r*ÿ¬$o;í_P\x000bS23 Â$ô\x001cJ¿Dr=Í+S³2à©ª"ØÙP\x0015úiMÂ/4ïF|°­¾\x0002¾R]\x001c²úÏqÔ\x0007Ô\x0017O±YùPM¾¯¨\x001fÚ\x0017É\x0012¹3ô\x001eÑ·Q\x0002u\x000e\x001c®ù(9h sNöÌ&ïÍNGYì\x001cüÅ9»ÉM_Ü¡ùÙjkMEøcFªíN\x0006ïÇ·\x001c+VXÊgéßðýÑ8Hu<Þ\x001dæ2¹Ã2¤I&Í@áy]¶¥ú}K\x0000we§¥2\x0013þ\x0018ùSÙ>hñÒ\x0013t\x0016/X`.";\x00152\x0014\x0019¤\x0010)ù>#óõÆyxÖ×ÓW´n²:\x001båïXvO´[¡9Ó	MF\x0003"Ð>R6*4)2M\»1T:úç*2Mì¡²¿ÎÓ¹Mì\x001aÑ~gtïéÊxµÅ\x000c¥Dg/Á')¥ÒôÑö\x0008B¶\x000enB>!ësëÈ»¹6?\x0011²¾\x0002VWEß\x0012E_ÑÞüºzrzs\x0013g/V·xu\x001cH;g"û$z\x0006úÂ\x001eÉî1Pz|b$¦Êç@ø½ÜqÍÝþ7}\x000f°vh
I;OUFærs|ÀÀèâôuê+qï\x0015?±\x000bÓK#Ïèå\x0015Ù+X\x000f]S§.òh
\x001f7®Ò\x0007GìÓ;[ÍºÖFÖ¼/ø³#¿\x001fêsí¨ßø8\x0010¬-:\x0013,\x000eõæëµH6æÝÁÎ\à\x001f,îUs\x0018ÐÛ[s¶"ßðgÊ#zªt0xN\x001c\x0016{|Ü¡wíX÷\x000e³\x0015g6F-o¿Þ=×ÀßqÁ¾zo¡î½çýÌÄ\x000b\x0016kªØáKÌþXgÀÛÂ¾\x0017¨\x000f
ÆÈ·¢7÷
ï\x001f4Öb½_h®½Ïaö5¥ÐÞBØPB\x0008ZJTíM^8:þ£\x0018^¿LÂd\x000b@\x0003a9ßÌÔ-aØ±H\x001f\x000b&Ï\x00063SÃe\x001dÙ®É\x000c?_[jÿT\x0013|¿6§çBMà{µ¹ÑºÒ&%×W+_©ËëþåÄÌcxÌÍ`I èÉìÃâgJCçR[¬aü\x000c
|ãçX\x0004rÖøë~®Ç\x001fCÎÈÚ*û\x0018Ý\x001b\x0018
XÃDê¡\x001d³ ò\x0016µ¼h.&\x001f©7pãü|\x0016l>»·j\x001dl\x001e²\x001e¯\x001f/\x001b°hmÓèeålbÖ\x000eèÌÃö	\x0008æbz°g&j³>ÆìÖ=#ÁilÅl×9;\x001f4s°8´ªmÀöÆü¨]Îf,þ4>78\x0016àöÆl4²\x0016«3v&\x0012Y\x0013gQ]åÁ]ÀÖEïU-§²	9[ÑFNi7*:\x0016%7³H9»´\x0010®¼\x001eÎó4çFó}¸,õÇöxÖRÖ';Åól\x0003!MD°TÊ÷ì\x0018X\x001clþÇ~\x0000Eyd\x0001øÍ%303Üç\x001cÀ\x0007È Ä\x0010\x0015\x000fÀ\x0013oÑTÔhâG¼À \x0018AÄM¹µ[»ë\x0019ÝM"jåº&[IeS\x001e \x0004\x0010Ee]Eã dÁÞþ\x0019ýçþ\x0001©ª¯ºÿî×¯ß{ýºß\x0010rÿ¾(eh\x00187Í\x0015à\x0005RéÒöÖÔ§æ\x0000SiL±ÉVDBB&\x0014;H6¶\x00131B\x00009~Ûd¸?^Ü>?\x0006õ=\x0001£6ÊR\x0004ã×$QÜ>?ñ\x001d0ÎN(Äu±1\x000cF³}L\x001d1ÃomqËÌÜóhÑÒ 	âÍH(ÈA¥7÷\x0017¶èª³\x001b~H} ­­m\x00198©^8«Q?~f£~
$ÍhÔ¥ úlriúÑXgÊ\x0016þ¯ût-7ö5ënÏ½ÑÃ=ßó\x0013ønRü\x0005S)jo¹ù¯ÚÓà:ùow\x0002Þ9vSµäóê¥_T,þ¼ºïÜ#·\x0002S÷ú¿µ¿4hÙñÛ!W\x001fpä\x0015 Z¹;ø\x000fgÜç\x0014©ÖýX\x001b¹«¢>vÏõ&mAUSìö²§C×{GñåÕ\x0001Ë\\x0008[÷ï\x001au~ÅÓØ§zÍn\x000cÕîü©.&§ôQôæK\x000f¢Öþç^Äûço§úI5éØ\x0005¥æÿôo;*\x0012eý\x000bE\x0000+ö\x0000¬Ü\x000bíý"ÝwÎ#¯\x000c¯/y\x0018½àd¹jáéÍÊ/\x001aWò8f×Õºõ\x0015÷5#oUzÖp}\x0018xÕ@â£»C6¶ê?ØÐÒºrskóïÓï>æyî¹«¨\x0018	 \x0018Çæ8¦Øq8Åãþ\x0015rá\x0015#^G²¼\x0013#>\x000eïmMø\x0006E\x001cªBë?»>:V6~z\x001b­ZTß69ÍJ¾0Áù4\x001d£Óï?ÜÜR»³IWßÚV¹ñÎÝóQqÃ#døuWrlCcù\x0000L_>\x0017´®Î0#È\x000b>\x001c\x0012\x000c¹#ÂaÇÈþ\x0006¶è\x000f\x001fÇw;¹}Â`¤á·­~Ø\x0003å/\x0015£¡\x0012!,\x000e\x000f0ì7rÁß.õÅè\x000f\x0015;JwN\\x0018lÖÂa!5T\x0005\x001f\x000c\x000eLu dD(`ù vVD*!\x0013³rp ¬
°,¥Ë EöðPüÂ¾>0?Øû7C:fÊ\x001bRüÝ`P`8\x0017g\x0019ñÁP\x001eû+Âë&øÝ ôé\x0002:°\x0013\x001cÀÙA\\x001c@ì\x0000\x0012\x0007Ú+\x001b\x001c2n,æ<ïC@7ÔW\x0005S=ëë÷ë^\x0012x·¿\x000c¶â:c¨ÝºÑÙFÕ¢­¸æPõiq?ÌÇoø<üa\x001eám*÷án"Ão\x000bGÞ÷Î"3Æ&F*7Cý\x000cqÙk}g~Ïb=<\x000cV\x000f1Æ Ø2\x0006&\x0016ª|`N \x0017ñàÿÇ\x0004 \x0000èXt\x0016ªÖúsÚß\x0001ª\x0016q {ëÓ«Rz¢þX«+Ò\x0004®â^­(ð9r~\x0015Q<~"rNM¥°[ÿÄéé|j¯ö·3ø_¼$ì£Vs»;V½¿?YõÍ\x001eÏiïc\x0008?C\x0008zé¥^º
ßsHØÓo[/áúôtþôÒu\x0008G#^wæòÒe¡?\x000fþx7{ð³2Æ#ÖÛ²­kíÕÙ{Ø\x0012#kãlñóÅ\x0004p8 \x0016öx±3Äa»\x000c-³\x001fG\x001a§ÏÓ æÍÖEfë{ÉS­	L<Ö¡Ám(\x000b
l·Á­©oj\x00031r'þb\­ömÂ6O³6Î6Æ\Gs3Ä»ÝFÊvý>Æ9	þ®À\x0015Ø}êHÞy¶5]á#úëØòÂxvõ99\x0012·®²ÝÖü¦÷m½;93
\x000fÌt8æwù\x000e\x0018Zæ8X®1\x001b§Í`Î±}Óß'6ùì!Ê3Þ<%¯3À6ÎÐMaÛÃÂ\x001fVÎBI³écGöbO´e¿,>³Å^	dy¢ßL9R,Hû°ä\x001d1\x0007YöU\x0012ôYÍS#É0ãG¼c\fÆßÚyZµÅJ|HñfË\x0017V;	û³­eÅJî±Æå¼Iï\x0003[¼Ùò5ÿ¬µUÿo\x000ei\x000c÷¸8ÎË»kkþ|4Ûé·
úÙäHùÊz¦»É\oM\x0007ëyÐ[Â³'ÖòÏ2\x000f9p$Á\x0017n¬Cùï^R±ÜÔ\x0019ÚJü}a\x001c¼¹<xÕþ<¹\x0000±|\x000cÏØÒ\x0018Æk8Në3e©VÃ3ê¤õ5¾\x0016\x0013c\x0019ãxp?\x001fDJÛ*Ôî-¥îÍWÔnÍ¥nT¿åq\x000cÆ\x000c­a\í®/W{ rµë­*ál_'\x0018ýá´ë·°o9¦aØI²Û°òY[A{k\x00183}ÓæèÄ
\x0018k\x0004d93ôx\x0013dHºÍôóÍí{Ñ\x0012ô0ý ÍÓub´\x0002#¦oc«¡}kiãl²/Æ\x0005\x000cY¹>
A\x0017]Fk²ÿrÎl¾¥NÓ7Ý6Öy\x0001Y'É.
ck±¡ë&êäÏYøÍ°µ£1¦
$[ÙÖÎî\x00033vZFKòËtnÌØZÄ%'4Ü±/á,_ØÁÈ\x001ff\x001e\x0010óeÌÂOf.²3)V$\x001fwÆÚ\x0019Z;oó±¸Ó¤¼\x0014XÎî»Eî²Ü!3!ä.1\x001e\x000c]\x0016ùGÐmÁøpì¯¯¹áÊB\x0005Teâ\x001a¿ÜTçe/ê=½öS-ý÷À\x0015A0±ê{aàsäÜY\x0004\x0011\x0008Wo\x0004½ôb/\x001c\x0011\x0002ÿ¨Kòð× !c	?M
`b:i62),L¶IÖ¼$Õ
)vÌÂDãü(\x0017à>\x0000rüÎ)¨wOôrÞÄ\x0004ãQâ²2Ì !À8ãüx\x001b\x0018g\x0003Ibëu±1FFÛÈ\x001bF\x0012q\x001c\x0012%N·?<\x001aó
Z´é\x000c\x0017UTï\x0004&îtëOuå»~ÑUdÕ5H~ 1¡N\x001fÖ¨\x001f=£Q4³Q?ÎF°üXÌ\x0018jíôFý\x001b×§a¦6êGÍiÒOÙÖÜzøXkkí¾æ_n­{ ;åó/\x0014\x0002_"à@<éWHÌ;8p\x0012Ûu
CµÅøÎ\x001eE\­ü~\x0007\x001aÄÑzì>¤è¡û]O\½rú(²\x001f\x0016\x001dª\x000c~ïýbs{ôË9*yûlUHnÙ¡E7uÚ
ÃÖ|{;bÞÞsÁ¯-)ô\x00194&S*LwrOâK}SxÉk\x000f\x0005d_z\x0018õ	Ë¿Ö\x0018_e@SÙ]õL³ûZÂÊz­\x0011Í¶ÇCÖ|w/bÉÙë¡\x0007¾óóÚrÐ	2\x00002
\x0001V}ÊI>zA^XÙ ÙUV\x0017[PþTSXQ¯-(«Óä]~\x0014[ú8úýk÷"âkÊÃ|þ{ÙÉ»¦ãSSÂ¥ ún·/BàÿÊ$ËÕÏÛÞÒ]¯_±ççÖ5ùÕÍ\x0019®¢7W_F3§}âe_#O8ãs¼=Fv×©Î ?å×È»#Yn1â\x000e;BÎ _G÷ò:$;®¢wþ~\x0003múì:Úpè:Zù°mnZ~¬­ùEåÕìFý=-ú³G[jótW\x000b£ªÌ\x001f~<¬rsuQà\x0017^Éa\x000fÀÈ1}y\Ð¸`V7d¨\x0003a6\x0014v&\x000cí#úÃÇñá=Âýa²ÌÃ`£5?ìòÛ\x001f\x0013ÂçÂT\x0007l\x0018\x0016\x0002y	]ãg.\x0019\x0005Õß¡b\x0015­Lµ\x0012Þ\x001b(wÃýá­~~°°¯\x000fÌ\x000föþ?ûe\x0002\x001bÕq\x0006àÿíaïa{×·×ÞÃ`ÀÆ\x0001\x001f\x001cöÚæP Ã-\x0010Î&\x0001' (ÍÑ
Hâp³¨ÚªI¨
UBQÃ\x0011µj\x0014´´Em\x0012k\x0007°¦¨R($Å.v§3»o×oçÍ¼}{ØëTû¤Osÿó_3³\x000bOägxqeøëßr
@Úõ£²aÃ8;ì4\x0012vW\x0017Â¾B¼·$ò·O*uÅy°
Ë¬Ã2W|EX5Ò[>\x0004\x00058\x001eÁr\x000b¯uÏ'Ä\x0000Í\x0010¢2ºA@\x001fE\x0012"$1L\x000cQÀ\x0018"¦\x00080@R$HJ\x0018Xx\x0008l¬\x0012¤í4L6&Üùâ\x001dáâ;2\x001c ÷eÈØD\x001dÔÚ,ÐPâ½ø84­Øó\x0006Eë=ö½m/oÚwÊòam¡Ís×á7Jz¯¯Ä÷zýÈ,x\x000c¿_3Ò 0Aëc}C~;²2Å\x0000OÉâïpý2ð¾\x0017yÞá­å|\x001fHýPWÕæX Ô¨÷èF~sÅ:wB%è±÷ÇÕAÓ»4Ôo÷Å2¾ÖÕLÃÌÓ¿LÔ¹ÈÍ\x001bÝOc±\x0008é¯½\x0010kû"Ø@l¶âßWûKZ¹R\x0017ëÜ$¤lBøúC\x0010'N8ÑÀ~\x0013\x0019c}¯Å	\x000fç\x0017È¤± !Ö9\x0014'zØ.#Ã`æ}Ã\x0006]\x000eÞÉ&"­Ó}¬1\x0016¡ÌW;WíÞá\x0013eùÁü©Æ\x000f´<ArC\x0002LI2A
¦Úlô¬º¿-é÷ÔE|ãL\x0019¾qÿ¯ß$U-)}ë§bÜf\x0003ÖiÀõv8\x0005/¾¶Ëc\x0013\x0015É\x0014\x000e\x0016LªÂÒ:Þ\x001c\x0004ÖÚ\x000c]ðêè\x0012uÏÅe8ÎÓWiO%=C\x001f\x000f"\x001buîÃkÓ>SS4NÑöY¤ãjm
æ«`ùÇ\x001fL×L\x00188ã\x000e\x0008¼\x0003\x001c Çw7ÐøÇ¥sTÈ	E6K/é^Òqº\x000cXCót¤Çé5jí\x000b°¶CÒÇ]\x000buAü@ûMûA6Ò\x001b\x001f*Ö\x0001sTÆ¶ö§Ô\x0006©¿´>Ar·L\x0017¥8òr¯*G¥º+Ä'¼y¬<ãÄ\x00153fyqeÅs>TëÌXÇ;;\]8yÃ\x0001K7<ÞýÀÓgâY\x0008â+YN(ä\x000c}6¸g\x0011¥s©Æ_¼¸ðòg?ïL*å\x0007¿ÁÖÉÎ%KG¥sþùÔ8ùíZç4Á'\Ð¶Ñ\x000e­
<hkôÞ¶ÝÓîhpÀ3.ò«vø}v
[\x0007P)¡B\x001bØöôqÆHÛ7Vënm`é«»9õxÿr¬Ç¹©û¿\x001fÚËÒz®¦ö^)ñÒ\ê¡çJ´ÅÒê)Åy+IE\x001de©w.\x0014öÕX5Õ @	ð÷õ·uc¤\x001d0_/§S÷´uý²¶¤O*£#W&¥?¦´'O_%û|}Ux^^ô´Í\x001aw{UãÒy¼ù´L7c~\x0015%Sº®Zç¦övSrè=YóYréýdúPº»)ÝÝ,Yú@]Xz\x0005ø!H,¤Ðý´î,;C¶\x0017\x0012ûé}öê9r8qe!Ë\x000f\x0005_ñô¦ó/Î2ÝY9Åñ,6
ñVÒ[ÿúÀº,¼Ñ{rü£$Cv~\x00181£ýâGÁf^,é}ªq}".SÐßËue\x0016øç\x0016\x0017´Rï¼ô½÷ö4\x000eü6x{ï\x000c«\x001f"%ë-\x0008 NpHÿ1JF\x001e\x000e\x0005¥\x0017Î&.ÉH¥)àgI\x0010\x0016«`\x0011Å£!²Eò\x0000\x000bT0?\x0004¾Ááë\x0014¤o¢\x0011ÿ®×{ÉÇL7{ûk)æa&á¹yz/d~i`ÅÜ ÌIRÇlshÌ
G(fâ\x001bsnÁ8óæ\x001fµ×\x001e¸VûM4Û´\x0013%Àv|&0æýýéë>î9y¬çþµ#Ý÷?jú¼ëÝgîü·iÅ½ÞÇu=½¤»ÿá¥Ý\x000ff.ë~ð\x0008¥]¸ìêµ¼«oÞã]}\x000bëºû?ÙÝ·rMwß\x001aÂÆî¾\x001d?ééûóù¾\x0007·OõÞ¿µý\x001fw/8ßí+_a\x001dÎ"Èý
Ê\x001e÷\x000eÊ×C\x001aÒös\x000es^,Iû4æ\x0015Ì\x000eÌ6\x0004Ù{ï\x0019z£}ÄÖwn>´ñwcw~ðYÙ«7º«ö·|>iõ©Ë£*×\x001cMK\x001f¹D¯Oÿ\x0019MÆw@\x0019xÿuMðd%\x0014ÍÜlñì\x000f³j;a[ðÂ)ûã/ä¯=ñ§Ñ[Î·\x0015?ÿÞÍÒ=ï6áPÛ&\x001f»Ñå>výûHËÝ¦Kÿ*ÝsùvùÑÖ/*w\¾U:çä\x001fmÉÏ\x001f×Á¦W`Ä3ÉÛ/}:éÈÕ»\x0015G[îN>Ürgò®«·Ë×·Þ*ÓÞWÐÙÑù&³óC!«óC
\x0001·!
SØÙÚøñE'o¢\x0017_GÛ^ý\x000bÚpê\x001aÚqú\x0006j:Óv\x0012ÞlG/ý \x0015­õ\x001e ?´ðÄ_jÁkò~Òg]Dåio£\x0014¥¹ÂY$,ºj\x0016ÿ\x0001MÑCBÈ{Ô_F_;Óvýâ\x0006záë¨i÷­þ§q¾ÌùfWß\5ü"¹ôóÞ/¯ý¬§·óP÷ý«ßïG×W\x001e?±Ë£éÀ8\x00059¤ß&\x0013áQ{\x001al)Ë=5ppêX8<½\x0018\x000eàrÿ¢rpÚXØ\\x000fcô\x001a°sl	\x0015"Pe5BcË³\x0007!R]_ZäñÙ>ìÃ¦ÊÑð½	# a\x001d\x001ecúQY°bD&ÔågÀ\x0013\x0012êò3=ýj sÉúú,Ìgó`}±\x001dÖárm¡
*ÈV-k¸P?2\x000b9Ò "ÙàÏËpbêÂØ0\x001að~B\x000cÐ\x000c!Ú(£\x001b\x0004ôQ !
$F!\x0002a`
\x0013s\x0018$Ir\x0008¤ Ç*´S1é,L.u?Dãí\x0018N8à-ËÍ	°\x0018ß£Ïá7ç\x0000~\x000eMþûí÷bå(Ø8Þ	«GgCø¦Ñ÷ú*|¯±yÙ)PbÔûßÝ¡ôMÜ¯Új5E¹°»zÇ/\x0007#ðÏ\x0007/á÷}s©\x0013ÖÉñ¿ëÌ÷
¿Õä¯Í±@©)\x0001\\x001a¯\x001f\x001cÃ B}_	÷^\x0014ÿæ
÷·)VoÑ`¾?ùóµ®~d\x001aî¤¿özÎE2)òÏ0}ºÆö×÷
±¶)\x0012\x001cÿ¾c4-X ?âßÿç×ñwc¬óXðõ N8q"AHB\x0010ëû,NdX¶"}¬ó(Nô0/Gú\x001fÂÙÞaÌu8\x0004\x001bÞ-\x0007c\x000bB\x000e£¤×Ñ}¼qÞ\x001cL^7Æ²·¯.j}\x0013<Þ:ZÇlC\x0010 Âh)I&¨6\x001b¡\x00065bÝ×öô\x0018©ýÞyó¥kür©²Úl¬§êI²~\x0015&\x0003\x0014h\x0005p\x0010½1N\x0001\x0006êb@ì³`RD,T)ÅÊ\x0018gÍãÉRKïc\x0013\x0006ôtaò0
{(aaÌcõ©%KÍ¼Põd¿`>\x000f\x0016\x001b\x000b\x0004ú%;ØÞáÚ\x001eÌoJ¶©µ7\x001c¿ªñY¨ñå­Q\x001bK^nsí3ÏB:î»\x000fü÷\x00030î
½)C«íwJd\x0005Ý#Ó'G¦\x001b%+7a¯-Ã~ÖZZg¥:í§\x0000(ýèºÌÇ\x000c9,ù\x000eý<ÿ²tUÊ\x0011Y9ÄZÃ³«c\x0008>÷Çò\x000f;,\x0003ráÿ`yÂÒÓAÍ÷éÀ¢LilYþaøsÜvnTÄQ¦»JgÎ)ÞXÀýBQûË|ÃÑ?@wÖ¹QÊYÆYñÇWáÜ¨Íå`þVÒWv6\x0019ºód«½\x000bX9Â;Û¾{)XÞÒã´}Júótå+ýäÿÂD­\x001e~»0\x0017:¾kÖ<hkÌó>Ú\x001a½ýlqÀOgg\x0001ðÂaö°Jn\x001d@%
m`Y)mkÅµ¤\x0014ÛRÜ¾~Î\x001c²Ö·þ!¬KCq2|z¢Ð:ÊÓzKS{®X{1¸ìõûJ­½¸¯·y|jOóxkïÕñÖ/[¼åJ¬¨¥$åâ6§~yF"üýr\x000fú¸\x0003øþî\x0005w\x001cp O9\x001e\x0001EAE@¹\x0007HO|DÑ`\x0012í\x0004ñ]M\x001a«ÕÄZ5Ñ ñ
&tÚÆIÚL}ÚfâXm¦N£`\x0010\x0014\x0005õ¤í\x0010\x0011å}w²Ý\x001f÷»ãw{»÷»;@ìÌÝÌgöñÛý¾w\x0017RL§Sâh\x000f\x001fMÒ\x001e´\x001cüqw+±ouØ:Ú\x000ekmóÖ<XõðÇø\x001e°n«½Bzµ<,zn^bÁ7=g£\x001e\x001bãè)ßøûô\x0012\x000e)y<\®´ÇN|M>M¿ÄÞ7=fÍl;øëÖ\x0010Æx|IöÓ¾ãù Å[/!ûaÓM!?\x001e|¹\x000eyÇóF±Ç*Ç.þRG}üØóãçðâ\x000b?.\x000e5$¥ÛçJ|IõC;\x000bÔz¡äÇ¡Fù5#q\x001dÆºÂm&íb&\x0010sR
Øùã$6¤zçÛ`PL±û%\x000bÞ\x0005¥oe0#\x0001§sÐ{ÿ®Úî·GmaµßówÁ[\x000eÉb» ¢·øÈz\x0008¼xq\x0017¿|(é\x001a|\x0016$44ÈgêFæ\x0005\x0000ç\x0006¯pÌõ9\x0004rYü]g¶\x0000³\àe\x0017`×ME\x0017ÛP\x0019\x0000QR\x000b>\x0000LAs3Ñ·\x0019<Øq\x000e\x001f¾\x000fæÖÆ¢}ã\x0014=k§cLS
Có£À}cmê×Ã\x00147ìI\x001c\x0013_¹ú9áN´¾ºë"\2ý38\x0006lFgb\x000bm\x000bÁÈSæ½Í\x001d××ÙQ[ÔÖQõIKkõ\x001fÚÚ¯nÜrhõÃ¦+\x001bß^ÞÔºrÙ£\x0015ËZ{hlY±¢©eÕ[Í\x001d\x001b~Óf*ÞÕa:öI§ù¯4¯~a4U\x001d7\x000c'M¦\x001fJLæ\x000bOÍMeÆ¶ÆÂ{ÿ.ÿ¦#\x0003FºÏX\x0018{\x0011\x000eMþ\x001aÆXÇTÎ"J\x0010Å\x0016»v´HYvoØþ4ÅÕuû«hVU\x000fMýYa ¯j2ú\x000fo4\x00105@\x0004XÆ¢ÿBYÆ\x00001È\x0000\x0012FZ
º\x001bÒ\x0011©]Ë"\x0016é_p(tÈ|YLú
ù°Ö(³\x0016í
y}ÏÙ5%UI×\x001aÒjµE·hª´ÅUµH·æÍ¯k\x0013c·ýYÎl<\x0000Æ¿\x0018½èV]ÚÂú!¹wîGeÔÕ\x0004Æ>øÞ'´¾\\x0012b¨`Â\x000c\x0015"+!r\x0010a¸!t¿~øî:ãòSµpûÛpKÑe¸êà\x0015øæ»ð/Ñ\x001cßv\x0012q\x001cÙöð]¸¹à*â{\x0016J»c"\x0014;\x000cy)åÿ\x0013Np	¦\x0008íÏû\x0016{¿\x0002.\x000c>\x0007èb÷Lý;L?z\x0017nEö¿ÏúP\\x000fW¿Ñütæë­æió[ÍÓxµÕ<y}»yÇ\x0019ù§O;:k÷µuTîï4UMZºt¶\x001ae.é!\x001a£\x0010\x0011ñb\x0006¼\x0018ì\x0007\x0016\x000f\x0004[5CÀþñÉ`ov\x0012Ø=\x001cì\x001a÷lØÍÍäá`\x000fb®:¸ÛöhÌ'Wáû(\x0015ùq!àC}"Ø÷br\x001fø`±·!5\x000eü"i0X\x0014\x001f\x0006ò7\x0010ùq¡ ÿP°°`eYd`ã¾ÓÑß,\x000fíÑð@ì#ñ8¯Vâ\x0010Àòc\x0011¢\x0001@Ü\x000fHú\x0001i/õ\x0011>\x001eàÛ\x0007È=@á!~\x001e t\x00137	ð@\x0012\x000c\x001d\x0015\x0007Û\x001f\x0008G\x000cæîØ^Ü%Ï3Ñ\x0008ö]gß²8\x0011\x00032U
P0$\x001clÎH@oYå
ïãwz\x000fÉ¶[Õ#Õ`qBå½³¿Ó\x000b¸{½\x00001;R\x00052ü}»mÄÿ\x000eé×ø\x0000Ë\x001bÏÆI\x001f¨\x0000+\x000f\x0006;³\x0012»cãéß6Ö¿Q>Ê\x001a\x00066\x0007«G¨Á\x0012\x0014ó|îmÇß6K\x001cÂºßãè}KSÈºëQÍÙ5Ð5ä\x000e¬ÝìÛ\x001aÉXî\x0001\x0006\x0008¿}ÏóÛ4oR¿CÖ¯ÆvAÅÿ\x0003>=$Säæ²)vë'
\x000cd\x0005\x0005Èk×}\x0007ÚÞÂú eO÷çýÑl½\x000ft­v×ëu®\x0019\x0008¼xñâ¥7ÈR¡h ï3/½Cý#3²¯%/}\x0018¨\x001a(ï×9ø±,\x0012i@D:!Â5ÐW2#<×þÐdæñ9v\x001c\x00133 Cî\x0003Æ)\x0015 K)\x0007Y~rÉæø}1oO&i\x001e÷ù2IúXû4
_\x0010ìBvÇ ¢9b\x0018\x000en\x001cðG\x0004`\x0004\x0012æÀ÷\x0004RZ¡½Á\x00085"³¿³5\x0010Ûç­½ñËÕµ´xÐdÒô¸\x001a7!;Ik]É»úê@È·¾Ì§³\x001c¸«O¨î\¥;9s·\x001eØó\x0011`Ï},ïÛÎ=c?¦õq¬÷\x0007í\x001eÁ×á{øòIr\x001cä\x0013ö8ì\x0005ûHþ8ÌQÆÎl§í¥í±ÛÇâ\x0003Í\x0018@¶ä')^V\x001bH9ÆíÀmäçÙÖRlpf\x0013-FÎìv&æNß¶9.­§ø ¨vî°\x0011ÔK\x0007U\x0006)zpð_\x000fü9Ë­+w\x000fñÌô\x000bÄ\x0018K\|­ÐÙ³;\x0017\Óî\x0000gõ@=³NÎ\x0011\x001e\x0017^§gÕIþø±&?\x0006\x0010k\x0002'^_$¨¶SrG¬_J¬\x001dâK«GÊù\x0011:ßø¹ÁsÃþ-»cL\x00100¬\x0001ÕkÔ ú\x001d(ñ_Gò\x0018 U(Àóö F\x0001Ð¡\x0016¡\x0011Û·vs\x001cZv½ØÒòû:'h	køc=b\x0004²eA\x000cÜØ ui*SUª³"%ÈxãûÑAÆÊ\x0014©\x0012õ+G©Ø>ÛnZÇ¨_\x0012\x0004ï¥ª\x001a¾JRì\x001f?\x0019d¦\x0002²6O:i\x000fZk+q#­qÂ¿ãrHëHôÛæ	6á-MVJ¶ê«¤\x0007=¯íFjA÷%ä>_\x000e>ÇkÇëë\x0008}þÝzÂwg}þ~|>-vò$ÂöócDô'Ça­à7Á.jËµ¤\x0017!ÉO=f·]]`yÆmÀóCË\x0007-·v`y#ÅÍ®\x0016	õ¡#Øä¬\x000eI>à~êÜYÍë	rõCÈ
\x001f¡ü;Ää'ÅFÔq=^¶½Ú¦åÜN@\x001dÐòà\x0010kB¼ø¾g"RÐ½ïçæ[¨ÛKcÁ­µü7\x001eïÕvo¿ïÞ\x001dÎh~ªÇvAEo¸\x0002}\x0001À\x0017w\x000e¢'½«¿gIöw$ó\x0002\x0000°ç\x0006¯ æö9<rùø»Æl'Ì"ð²y!frÌàÆè_htÏEq¤Ê-ßpØµãÑEø\x0002om\x000cJ¼iJÏÉñ£3À\x00147La\x0012	È§¼\x0016¨·\x0017|ô
\üâïá\x0008°	-Ï `NAÑ¬ê§kL?6\x001a¾è4>8i4þ·´³³ñËöö\x001fµµ×\x001dmk¿s¸µíö_ZÛn\x001dnk¿Æ5ÇZÛî\x001coï¨=Õi4\x0018Í
¥&sã9¹	ñ¨Ìd~Æ
çÍO\x001bÿöÔØüù£ÇÕK*þS\x0018z®=\x0006 ½g,\x0001Ó®À´°óPÅ§R8(ì\x0002)\x0007«\x0003
¯Ö§\x0017U=Ñ\x0014V4¤Ï+»\x0016\x001d´x»\x0008dÀþ÷#\x0002\x0019¨\x001d\x0018\x0003|ü&0þ¡ÓÅþñy"iØ44Þý]Âè\x0018hÐ8Í2'Î\x0004"\x001eõG"R8ÒT6\x000e¨"g\x0012²ÞöËYw(|]iUò[ÍâÛO´\x0007n>Ò~\Ó¢{¯¬bdÚù\x000bJÕý1ry¡B\x001ab¨\x0010\x0005Õ3\x000cåL¡Ed\x0005Í¨\x0007ÒE÷\x001fÿ¼®ë½¯jaáªàÆ}áÏ?¼\x0000\x0017î½\x0004ï¬èZ¶ö:÷«ï`ÞJ¸êè]¸åD-ü\x0000±íØ]¸5ï\x001f0[0f\x00043yí[½á:|MYÞV'±~ùì\x000bpTÕ\x0019ÿ½ûÞl²!¯}oÈ$G$i\x0005y)o*L\x0005B\x0014éÐÖ"D\x0014\x001a @ PëXv\x001c:\x0003:\x0014@«UéµSÛj	HÐ¦ÒÖ¡EDj3`²áôÜÍ½áîÙsîÞ}äÑ½3ßsÏýÏÿÿç?ÿ9ÿ.ôÂ\x0005´~ÊiT jHðê3¨èp\x0017Úr\x0014û~ô\x0012Úþü'èÑ¦/ûç.íñÏZÖã\x001dYXî}·úãºöüÍ¯º\x000eÞê=¿ãÓ+gK
\x000b=.¼Cn\x000eaÜ:0^\x0001å&\x001dÌu¤Â£\x0013|°§¶\x0010\x000e6\x0016Ã¾úq°wjÑÒm\x0008vn\x0018hÛðØºBØ][\x0000»j
`gu>ü\x0000³£*\x000fZ+saëä\x001cØTá\x000bô\x0005ùXfFfòàZ<\x\¢¬]/3ja¡+
6OÌý¢\x001fQ­\x0005\x0013X\x0003æ8ONÉuã]°:/\x001bVø2`¹/\x001dVädÀÊ\x0004TÇfÂ7½éPo3A\x000bìý\x000c\x0007.q\x001b&F\x0000Má\x0008m\x000cèâ>J\x000c1b\x0002S#Ä\x0012%É\x0011`\x0014\x0016\0V±MÅ¤a²úÆ
Ô9¯H<îÑ\x001b\x0006j@>\x0004w¥[à;Å®@íÜßP\x001c¨«ñ®ÙR}ÜkðÃ%ÎÀ½\x001d¨m¾Ð;}\x0015þÖ46\x0003\x00169mPm5@®x¯»1>B÷áK²&Å\x0004kÇ9ñoØ~ßH¿S\x0018oÂ¿Ö\x00169\x0002kdÅ@ªm+±Ì\{*Tõø7\x0017\x0017øÍ2\q\x0017ÒY\x0012Îp>Z»Ã^£FKMµ.
W\x001dJßµ[ë½Lÿ/¸?¿nÌ8ö>yÝ:ÞÐØ¤+/\x0017Rhð\x0011Æ\x0004RZ[µYoÖ´¿ñÂ¶ÿ\x000e\x0012OâQù8ÿÚm\x001cé\x00150-@øZF A\x0004ÑbZ4#}%\x001dË\x001fé\J\x0010?,k\x0010?¤9sã?FûÄIvlMN¶\x00089N#ïjm
\x0007ñð%¡Kî,L\x000eÏAÙ\x0000õ\x0016\x0013ÔYPk6âÖ\x0014hi}é]Þ\x0006È\x0013sÈ¹\x0010v¥¶ÞlÉF=ä$qàÆ~{0n\x0011\x000f7Ðz1NÜOÃXMÂ·häXóämè³GôW¿->¤\x0010ý\x0014\x0008õ#5ÓÆÕè%ý&ñÚhý¢ÅVm¼"Ñ­4NÓ\x0017É^Å3îäRNßÒ1nîÎ\x0019\x001a<ûpç\x000eî\x0001©/½c,9²O¶\x001eÑ\x00077\x0010zIýÀ°Ï²)[\x001by§ë¤}\x000f±É\x0013©Ð\x00072J¶\x0014ôë\x000eò²\x0007a÷â\x0003+®n\x0006´ïá|¦Ù¤Æ\x0012\x001b¿\x001e\x0008]\x0017-\x0017\x0006¿3r\x00193ÖZIÿ¸Ð\x0018ÈßCò\x000bõ\x00167j³â¡ *\x0017é<Â/Zì¨¹@Û\x001fÒÂ\x0019\x0019<Ç´¼¡Ì
w\x001eXç<Ü½ ßËÜcùFÙ[Z\x001e±âJó%Ã:?Jg¶/\x001e¢OÍC">Ôý$Wüa­\x0015wJ|Y6Yg;Üw¥>kÏÉøÒd31wéõðÞj'tµ¸àÂzÌ#N\x0011\x0008î¯wÂ?7z`Ãx\x001bàé£î\x0011þOÔò\x0000UJÍ@[%{¯½WkîP¥	~Æ\x0006Çù\x0008dE&`¦\x0006Nmpðèr«ÿb¹­÷R[ogijï¹ÒÔ¾Î2¼¥ö±,ú¨Ü:Ë¬g¶x´÷gè¡\x0018ÄµÉ}ÓÞ¡JDþNöÆøàyò÷j­²nRçà\^6ÎÓõ\x0004µ<a¿£fj²6!65¼\x0018#¡¯\x0015×Pääã$AsåóµÄ8¡C­MRNîs5Ñ¯&ík	¾\x000fÌiCÇBú´5jÙë®¡Ø§ÆD\x001bj&Cö©k¡Å%Cñ¥î\x001fmo¤¹òXi):äß(zkø`H;Ì<§äUÈÚX{LÙ\x0007ê\x0013yOî/-6¬¯*CÉmò\Òö!k/Xù\x001b\x0014[.sÆôrw0Ï#a·\x0004×\x0000Cuò!_*üíq7QãY}WPÿ#ëy_¿É{\x001bÅq\x001eÂ#H \x00128\x001d\x0002û\x001f!Öü\x001b.Jß|]¿8%VÅ*X$²0J\x0016\x0010Ì'IVÏ<
s#ä^\x0015Ü#c\x000cá}6¦\x000c_pNí\x0000náî3±å+\x0000.,ã\x0010)Ð\x0001L3c=\x0016Y\x00112Ó\x001cÊ\x000c\x0005îé
LSàëx=kç¸¶\x001eëùÆÞ·Ñ\x0003s\x000e¡I°\x0015]1§0í\x0008N"ÝÝ·¿õÓ\x001eÿ_^ï÷ß8å÷Öáï»zÒï\x0017ø\x000c¿_ÓÞç¿z¼¯ï_\x001d¸\x0015ÞOâ\x0016÷ÿ-!Ì\x0003ëy­÷«+\x001bºÿû³·oÖÀ	lë\x0003ö\x0002à÷Ó(wÙ;¨Q×´ïíaèÀ\x001cï¢CÝmg>*ûñù/ª:wµnË3Ö{oêW;r¼
ÍÉÆÔFÎÜ\x0008®\x0007\x000cÓ¿û\æÃïæ?vº»¤å\x0014/}ù]OÞô\x0016³V_ï2H*\x0018w\x001f?¹y¯mÉN¹ïî7¾ñ³7Yµ|-þGV\x0019\x0000 \x00023\x0011t¦¯Ñ:
Æx\x0017if¶¼½í·/?xþÊ\x0003×+=£ºõÃke\x0013º/ZÒ.ÿ\x0019Ò/¿Ïe\~?)Â\x0018ü=÷ò»oÌy¥\x000b=yø\x001czâ'¿Gß{ê-Ô¼û
Ô´ýWhù´#¨,õ\x0004²$u\x000c¬=ã×(å¾ß¡w¡Í¿ø\x0018í8ö1ÚùâEôxãY4^ÓÂÆ®=8ö
xÞÁNôíÂ7\x0019{Aî\x000c*9t\x0011mZû\x0007t/\x0017
º³¨ø¥.ôÄQì÷ÑKhû\x000b M_öÏ[Úãµ¬Ç?[	,3sUåÞ¾NsW½yëü3·Ñ¥\x0007_yµÍc0èxgÜ\x001c@±YVXSä\x001dUyðtÃ¸\x0000ûêÇÁÞ©ECB[}Q@¿`§
¿ï¬ÉïOÎÍ\x0013sà±r/<2Þ
kìÐ	+s2`$\x001dcVÍÖÊ\8ÐP\x000c»j
`©7\x0003õZ\x0010Ö&à"\x0010Æì\x0018\x0007&'
³\x000eæØSà¡B\x0007lÇkßõH>E³.)fÛ¦äBK\x0007Ö\x0014dþ§\x0007ü\x0016ú	è4	àýoOR£6\x0002\x0018ñb\x001c\x0018\¦\x0002\x000f7\x000c$\x00108Ã\x000f\x0001Ú\x0018ÑÅ\x0001}\x0018bÄ\x0018\x0005¦(1G%B#Ä\x001a\x0005)4¸`¬b;\x0006qÆáÞ\x0018í\x0008w£TÓ|øðO²\x0018`¡+
ZÊ=\x001a´j¸¤³µ2\x000fÖ8¡ylæ@}£ÜéB}\x0016îôEN\x001bÔ¥ ×\x0004|vÃðÅIú3Õfµã\x001c°§¶0Pç£MTãñú7ºau~¶Xßé1â°
ÇiÃ\x0006S
àÅ¿=\\x0010ú6ÜxÅÜKãkêHÔ¨ÑRF¢\x001eE[²¼¤÷ÞF¦\x0004£\x000f÷ç×¦ùó5x\x0012O\x0004¥©\x001féÜ\x0015°ÿ	á+\x0006A\x0004	\x0012Du#Òô] v\x001c\x0017p=Ð|>%\x000f\x000eëSd\x001cÊqh×Û9\x000e²±E»
²EÔÈÆ\x001356³)-é/ÍÚ<µ6Y:ÔÌÏP_óy
ÔX0ÕbZ³\x0011êÄVê×ÉÆCÉÓä\x0006õÐôRúµòq¹Nó\x000c\x0006ðáÜqc¿=Ü\x0000¾ìÝû6U$EÄJY)ã¬oJò,YdÑ\x001fè§à¯àcº
]Ñ¢ÆÏ¡Ò¥dC)ÞÑø\x0002ÁûËÚ\x0007Z\x000eD³f5þªÍ\x001bµzXë\x001b
Xç$\x001eù¢&NJ±ÊàsNÞ\x0001r$¹ÁwÙ=AkÕ@Ú¥}§ö¥¹
ònÒ/ÆºÂ}céeÝJ~ÓÖá¦Ì\x000bÚ\x000b-¦n½>R'sï	{Äô?$oÂì\x0007M¬KjòHIÐú\x0019>\x0004Ù ä3-ïBbCñ7(Ö2\x0010½\xY¥ü$®j¿Ób+Ï »<\x000c§eïì\x000bPÓG\x001aÀ¿\x0007ð\x0008\x0015,\x0000
X\x0004ËÃ\x0017IÀ\x0007Ô'¾m±½VTzêX½ÑAGk§^«'3­\x000f\x0014\x0014:c¯Þ]gî¦wz­¨×i=u¬ön¦UK\x000c("¨çØªTH`oÿyÍf÷O\x0012:üg~³¯o¿ïÛo÷ÛMXû(¦uNX%w\x001d´]Fnéeæ,'<NãÄ¹u'fî'úlsý\x0016¹³9ÁÙ»XLw~òì\x0007±3#vVÜÉ
Ö\x001e9!o¼sÙÝ\x001b)üø,'
®®Ñ±\x0008³ÊV\x0016©m¥«ëÔP5I
¡\x0012)<k_$FÝÒ
È\x00002m¥NjE+uÔím­mº®ë\x0008#qü3±O\x0015"üZO¾\x0018\x001a2ÂM4\x000bíÕ©*\x0013ÆRZû,u\x001a¬!UêÓUM_$\x0007mÎQItXç0°ÚÑÊ±-¹Í¦Ü¥_æ\x0018£å,}2gy-c®Ö/sÌí¶Kùc¡¡í²üÒQã:\x0011]zÛxW)#Öak2dÛ\x000e­ÔcÃ\x001a·ëÒËíÓúI;]¾Òvdµ9ÉÈeÖÆÐå2µ>Özh=¸º¹}d\9k¡íÓ{ÂÚ'Z\x0017kOÄtºì\x0019¥u\x001eÈy´\x000fÌ=óíºøÆÑËµMëåÅ9u.ô\x0014¼x;ÉQ¹Ä:».9Cç
g\x001d.ñ§}eÄT'wígUOòö´Eï-wo8g\x0015\x000fú®rÑGø"ÜI~\x0000\x0001\x001e¾&jàÊ\x001a
ñ®«\x0019uuW½fµ]½:\x000e
¾?ì\x001f×zBt5Â.#ðáÃSÂK¢§ç¯¯H¸s'0oì\x0008¿WB\x0001ì¼ÌaÌ¦E\x0013â\x001e3	fxÀtªN3M©n Èå\x0006\x0003Ä+\x0000¢ñ§[ë9J<ûólL±1\x0019êï\x0015ÊdÜ\x001eå§\x0012r4\x000e&¹ÁD\x000fÀa¼äâµLMHV­ùøÚ´Óhñ¢ýhbà&¤Ý8?`*m\x001c¶	ßtj4w}ÜÒvñ\x000bùvU¹éhéþ\x0011³é^UéÞa³éî~Sû­?µ=iØó¤í
¦v_[ÛµÃ\x001dí÷wvï\x001f2üK«©veyïÈs¦Ò£øþ>HØ²áW$¯|²
¿E\x0013$®ãL°ÏýößU¼}¬:¥ÂØ¬-1Þ\x0019S|­nnñÿ\x001b\x001b^Ý^×»á|}Öòý§-ÿëégo¦íªûY»»î±¾¼æafñafùåÌ?|{+cé§'¾Vö÷!\x0005»+ã×~Y²íò£\x0011\x0015õ­º\x001aÛôïº¢\x001e¶\x0010túé!2þUùØ·*"üùLââON'jÒ\x0016ú+r ¿´JSj|Yf¸?ªÔp?³ÂÐ¬[e¼ØP­¸~^Òÿú\x0005?~×ÏCì
CÀ+òöü\x0017\x0015BK·~~»éxgÁ\x0007_¢ÅÇQAÞ'h¤l/Ú÷Å¾GBÌfAÚ¿]Aï\x001d¨C\x000e\EÅ%Õè-í¿Ñ\x000bnÅÐò\x0015-­FËòÎ Qbré'Pü\x001fkÑÚ­\x0006´Tu\x000c)|rÓÖtì3öuÓ?êÐÆýØïò\x001b¨h~KÇô×\x001e§üæ±9O)XfrQ«éý&ó­ÏÚÛoî|b2<1ýûæ¢Y\x0003ð-\x0011(¹±\x0011°nØ Ø\x0004¥ãR`ÛdØ:zH¯²
Sõ
\x0008õ-bÝ`X1\x0010V¦¨aÙhX<8
\x0016ÆGBÁÀ\x0008\x0017\x0017a)ç\x000b\x000c\x0005"ÌÃ2+j,z\x0005ß·MÆë\x0019\x0008ù±ý@\x0017\x0016\x0008Ãþ\x001e¤\x000c¥ÂR\x001f­RÂ´(\x0015,Hx\x001eRcáýQ	\x0016¿¼]»cmCàÃ¬$xwø X×S\x0018ß\x001f
â5ûïÃ\x0010/¡|)"\x0018\x0012e~ Áç3VÒ;Äa\x0006`¤`ý$O\x0019¿>Dú\x0014õ"ò^@Ñ\x000bø÷\x001e\x0010è\x0005A^¢ô`/\x0008ñÐ\x001e\x0010F,Tb-\x0005ÃDaÔD¾÷ÖÝñ¬\x0011#¬\x0013Ç \x001a¬íTüOVÁïªaCf¢åýÛ1öé½áB}\x0003~37÷Íþ7¾Ë\x0017\x0012÷ù\x001cu8èñ;<Xn½Ócú(N\x001a[\x0004{ÚÐ@X:Dßç\x0017¬ï¼7ë\x001fcý}±et\x0012¼72\x001eVàß-Âú­¿SÄßµBü»f®æ9ÈÂqöîÛÖÄÙXï4	x÷Þý\x001aß§¾~zò\x0016\x0005I¢Ï\x000bëDA>\x001d\x0006|÷},NÈ0ßçû<ÿÔõ×\x0002é3,\x00104\x001báë\x0019\x000f\x001f>|xC¿=HñKßc>zé=È÷½\x0007¿&ÂÞAò§}fÔùùÒ(lm\x0000Æ^°úÄpGÞ\x0013\x00191YzÌS_Yú¢DÚ®'ÒÁïóÁr\x0019d\x0007\x0007Âè \b\x000elí,{\x001dEôÛûùYô<\x001a²£/KdþhÌp\x0005\x000cÄÿ4ØïXLPJlàºðÏJXW\x0018&A\x0018§NË°ÆxòbØ\x0010|µù(øÞß¦/DD7í\x0007«îÎzXr¬5Ùs7\x0006îÆÔSÿ=µånÌÜSoúÃkóöÃx¸³ÞøéN{²<=B¨0Ñ`Ío!×¼·ä>8rßÞ&ï\x0004»,1æ¤KBAÌqÒ#á÷Óu-¦o\x0012gÿhywæÙåé&cÃÓ\x0018­ö\x0013kÑ8pö\x0017Sz\lÏi½±À\x0011Ï/mn\x000cÉsCÙd­ç\x0003Ï_Öy§çÐ~ðü\x0012;;¬Ø²ìðæ:\x0013^\x001c`éãåqW±Nl\x000cÇ7±üp¹\x0017xqæÅu¯t\x00177ÈÚy¹as3ka-Bo,á\x00033é~Æ\x001dÂô±V1ÅrÁÝ¼âå57\x0017x÷\x000fã\]±¹<ß]ösX÷V·>us'å»}\øÍýz\x0012®®\x0001c\x0006«ÔP_\x0014\x000bÙáð¬}Aá~\x0000z\x0019V
ÑI­u\x001dQ'Û\x0016d>BV+2\x001e£åGâØ¦c¿VÄ)%7?O
B
\x0019á&cZx{uªÊdHU	%\x0013C\x001a.ÓTV9«<ªÏè~H\x000f;»~<?Òß¢w`KÎFk/e¶hóäÉ¶¬Ë\x001cúÄtðìºøÅñ¥å»}\/·î¡½.é>½}(õrö\x0018m£«dëåÎã.Èmê8vIh?i{´:ÊcKOè å\lúä®>9ÍçØu²CÅ-½&ÑuÒ²ôY`í³Ëþ2Î\x0008+.¢ç³g\\x0019">bzgEÎ®ÓñtÑïÆ\x001aöÞ\x0007Þh{ä:(_i¬ý\x0010ËSÑ5P¾°ôº\x0013z=´-Òw<+÷Xw\x0007\x001dW^>±ÌYïÂAø}QxðFf(\x0002áâ2
Ô®\x0016Þr
Ô`ºÞvòwj«-²\x0007wLóKlo\x000bëD="¸\x0010aÏ\x0011øðá	S´§g¯/É^¿Fþr(\x00009^0b\x0016îicL§ê$Óºaª\x0008sôøïF\x000c¾ûÔhL\x0012¾ô&(\x0001ò\x0001¦\x0010\x0008m¡?Ùß*g\x001fÛ9¸ªMn²IJÏè&\x0013ºa¼¼d#\x0017Ç!'X!Yòî?õ[N£E\x001b¡7RÊQ\x000c|sä\x0008¦à0æ\x0010\x0002I\x0015Eì\x001c}¾óÂÎõ?\x000fli2]þÈü½-¦\x000bûZMÆ}­m5\x001f=h¹°ýaËùÖ¶êíMæ\x0013\x001b~4¾ôzGù¸\x000b\x001d\x000bbNu¾(¯B\x0001pÐ¦·ÒÕê(R®ý\x000eåÏ;r]Æ9Hð¼9Uêòw3K\x000cMº\x000fê\x001agmºaYPÜxùõ­µ·'îªiÑï®ÿY@W^ûH[v©9s¡I_büiÜæ[ã·_º-ô\x000b2\x0015
úV]Å\x0016ÝÎKÍÚ2Có¨2ÃýQ;k\x001fd¾ýUMò\x000f\x000fh
*þ5ð÷'\x001bRËj\x001eýýrmê:\x0003øw\x001d;±8IâÄñ+\x0004ò.IY!v\x0012G¡¡G§\x0015\x0018y:@tÐi\x0014FÛ¥\x0004\x0002$\x0004(¢]Õ?6iVT6¶ºB\x001fcê
êZ\x0001Z\x001c§!\x0004\x001a:Q \x0011\x0004!øì\û:¹¾>çú\x0010-ýtÞßë<¾ëýço[\x000f\\x001c°®øÍ§ãgüüMíS&·:®ÙZ\x001dWmmö¾\x0012¼Ö²×~Ã² ëbzJï\x0019&µ÷¬DË#¹÷4döÚk:nÎÞs\x0002­Þq\x001cÕm?j_8ä;å\x00000ó\x001dTly\x0007åÄ½dp°G#H²âK4çýnÔp\x0008s°\x001b½¾ù4úI<\x001bï\x0000ãÈÆ_÷\x0011\x001a×ÜV­þ
Í\x0015g>´\x0007:ÑúßC¯Lú\x0004Ù3\x0012°\x001e\x000c>\x00071/~\x0016\x001eîA¬­ïC
Û.;W-é¿_µ¤PÅýsÞ¾?¯±ïæ»GïÞ½ö»»\x0003\x0017ö9Ñ¹_|ùÕAKa®îÇ\x0019j¨:\x0001Z¦åÃnLsE>ì²åEæ<hÅ²wâz%\x001b^\x0005/=fUÙé°<K\x000b5ãS¡:3e\x0008¶]\x001b$5©ðÓiÐT\x000bÍ¬N['ëÏë°£,\x0017¶å@ci\x000e.sñ<·]¬Ïm\x0005î¹!ú×ÂÅl\x000böíEfXýªå|bí
ÖG\x0015ö,,5%CJ\x000efümÄ_!&&r°2u\x0018pÿ\x0011D2ÊÄ\x0000Ò\x0008#\x0000±\x0011 .Läa \x0008\x0012e\x0018Ä\x0007IB\x0008¨$1HÔ\x0004\cø%a1ZwÇÍ\x0011|3Æ\x001aì\x0001î2?.\x0006f¤¨àù\x001c\x001dÔL\x0018Êgáä2yn'Î¯¬®uzXßkZsåu<6_\x0004Sñ{%e@m6À(Å}ë±®ñ\x0012\x0006*4ñ°:?ÃõmÐ6­`(_\x0007õ
ÃùÏÊxõ,x\x0001Ë«Ëòãë¸X,Æy­B£ldTã\x0010éüÉiû}a ¼\7\x0016óÔÌO£<ù%Álf2NH\x0019åÁ£®¯gQô\x0017æO¢V3l,\x001fÅx&ÔÕI\x001fô9fÑFø©A\x0010%J(¡ö\x0019~<$èþ\x0019Í\x0007\x000f\x0013\x00125b}H1gÆÔnë4\x001aF5¦ct!\x001eÄúpõ\x0004S$ÁÊõ7\x001dOÃ\x0014ÄJÁ ²x\x0005ãR\x0008¿¨Îë´~\x000c*9e\x001e¹\x001c6\x0012ãd`Â6\x001b0F\x000c[71Ãu#®§b\x0012Á#\x0011¼û\x0012EPSæÑÖ©Et©0I\¬Ít®OÌ\x0006¶\x0005Ò¯\x0016Ô\x0003õÛ_¿Pn ó\x0002=i~¤ä\x0004ë[$}	õÌÅ!\x0018[CÙH¡\x0006_üÅ7\x0019£\x0007î¾û¾³w}èîs%\x001fá	Èsùãü1õ\x000c½Îï£Ùâo¿ØZg/\x000c¯õgI°Nh\x0007Éo/\x001d´Ø0d|ë±"Ì5ÑæRöEh^O^uÂþ\x0004*\x001a7Âù\x0012kÓÎ­¿ó%ÔËÏ{Ôqì»¿ýöª\x000bÏ±ÈØ}¤Í\x0017óª×O[ôÎü¥Årf}Î\x0018Å\x001fÑûJ\x001dõï\x001c÷EèûC	ÉnÊ\x001d öyä\x0013Î\x001duÿI¶¼U4\x0019Ô{HyÄî\x0008ÉfÚÙ"¾)´ýg|ý¥kÒþ\x0006¢¨¦ÐGGj³ùy"#cUFè~Ù\x0000<è]t®\x001fîëÙ`ÇRa,þ
b\x0000Ê¤\x0000V\Z8¬"%mÌBYo\x000e¯óZ/õíã¯-Æ¶ÍUIáä6³\x000c}St¿«HsÏ^¤\x0019häa¨m/âµ¸ñb
Ë £Xº'»õYaÂªTét\x0004°l\x000cë\x0012Àï³HÉã\x0016?ó<m\x000bW·ðêb²,\x0014;|ÖHõ\x0008mñ/\x001dÇ¶Kq½_Ê¼Û®=áÕ=cÖ\x0000ñÈ\x001bj\x0013Æ=ý|Ýü¾¡ºPùÎ#é\x0011ö	ý\x0016Ú#¦S(ï£P\x0007-IÐ\x0016/h¶\x0013bDÛ+a\x001c½ì\x0011³Ð'ôE\x0018±Xb(ôÛg_\x0008ý¤¶WÜgd§ðÌÈ|ë´ý$Þ\x0017gp¯hº}ôÐâCØ[þ¾Rm'a¡\x000eÁ\x0012Ï\x0014éÞ#BIG['v}î-)¶¤¸ãr*ÆßþØ òã+)pq½\x0011çs½ Çãrýp¾wxò=.;¹y/¼_fv"e8è/"\x0005\x0013°%Q¢\x0004NL:b\x000cÿEpÏßhQø¿Ë\x0017jåðl"¸X\x0014 \x000bEX@B%Î|\x0001?\x000cy\x001cÏ\x0004ÈÜ\x0000©J 3\x0017ó4¦Xÿ§à·/cR»¿\x001b÷À¶gÆ\x0003äáqlxM\x0016¦L	0'ÞÍì\x0000xÂ¬ \x0019$3xL'P\x001füE3k\x000cõG\x0006îü\x001bZ±òh¶êOH\x0001Gð]!ñ\x0001æ/\x001cG\x0011#ÿ\x0008%%~ô©'P¶ñsgqÖ\x0017Nkö\x0017ÎÒ)'ïÌküîÎ»+¿qnÖ\x001cGzå_jéQ$\x001dZÿ\x0001E>§Ã|\x001ci[ÚÑêÅ§Ð4ê<Áô\x000f\x0007ä[¾¾òøÞ\x001bökÖ\x0016Çé»:/ÏÚÞýíüÞÎe[¿=·¤©ë»ªï§µv\µáñ'ºþýtcÏgñØÒ^GÍ¶\x001f±ã{ì7J0SYÚ0»í}\x0016Ç÷Í\x001dW*q»d_çMËþî~ë\x001bçnYÙú\x000e÷ü6{µÅ~}êîÎ%m}6¬{\x0001+¿Õ~½³Ï~Ãº¹ãJAöö¸äÞ3¶÷¬\x0005×!ýÒ¿¤Õë\x0015»>EÏï8ê>v.¯ù\x0003®mBjØ}|\x0013ó\x001e\x0017»£ô8h>Dñ¯EÕ{Pã¡óhËo»Ð¦Ò\x0013(_4æ\x0002\x0019ºcH³§\x0003­Ùt\x0006-9\x0018Ú¼4¼ÿo8Ð>¶Íú\x001cMvím :¸õÆc(å-\x0007Z¨\x001b5\x001cìF[ÞëFõ\x001b®Þ¯yîöà%ýUb<×?øTí­{ËÞþ_ÿÉ#\x0003÷®½ug «e`Ð±vÿÞu\x001bÍÐjË|ØeË(Í\x0015,ù®r«5\x001b6=nµ9i°Â j
ª3TPcHÚÌ\x0014¨\x001d\x001a\x0011gi¡Á2Ñ¥oKSY.g\x000f\x000fp|ôÄí×S²`]Þ¥¿:3\x0015j2#ãÏ£B\x001d»w\x0013´°H¯I
\x0019\x0018ñ\x0017<f\x000e?ã]?f\x0004"1\x0011F:BÈÂ$6\x0002Ä<\x000c\x0014! \x000cø\x0010H\x0008\x0012U\x0008$\x0007ÛNÂ+\x0005ÑóîõH¼\x0017c\x0005\x0003ö[\x000fî2[&\x0001F	Õø½Ü89ÓvWæ»rQ¸ùÇ¹<×T\x000b¯=\x0005kóÝy®·ë¸\x001cÌÖçë D\x0015\x0007Y1Ënã(Æ*\x0003ëO&'ÀÏ

°\x0013ãì\x0016Z|Øo\x0005Öÿ\x001de9ð«\x001f5y\x0019.?Iþb±\x000cÏ\x0000y±1î8À?O¡äM6éÜ{Áæ\x001c\x0006ÆNÎz\x0018òÓhæ%a®Q\x0015\x0017Kÿ¹¬0;2ÊÁx½O!¯¬d¯Fô\x0017ÆO¢V3êúz\x0019\x001bOOl¥fö\x0005{´~ú\x000bcâ>+\x0017"üD#\x0012%J`1\Bcâ\x001d\x0012\x0019\x0014ÏDóÁÃDÒv$\x001bé3cØ¸Q¦ÃÚ"M:¥Îï£õ­\x000bVG }È\x000fÅ>\x0014ÄÉ <A\x0001åñ\x0004%q¥\x001b«]\x0016¯t{
Ïñ.ÜaÊùë2\x0004rê\x0002{l"¹\x000cØf#þÚw\x0018\x0013W7qídLb\x0010¨\x0003ì\x0013öÓêBÆaû\x000c\x00183W¦¬\x0013\x0013.b²Õ\x0001êW\x0007`³XTÏê\x0008É\x000cæ<\x0004²>\ÿüE~IÚpâ\x0018)\x0002Ù\x0017?R\x000bÃwÞÄ+MR0&|\x001bHuá»á%Sl¾p-¯.ÔïóFQ|à¯÷/C¸ô\x0006\x0012ba¢ù@+\Kòæ\x0007m\x001fq\x0016Û#>´u´=\x0013úKóxV¶øK²]Ì\x0017±X\x0011÷÷ÿì	lTÇ\x0019g½û|¬Y¯\x000fÍÚëÓ\x0010°Mð±k \\x0006+¡¶9\x0014Ã¤%MQR±\x0006l0\x0005SÒ¦QHH=\x0010¥	9	
4TP¢
À^ÛkÀW\x0000!Ä!\x0015+åþo½\x000b³óþÙ÷Ö\x0017(õJæ½þù¯yë¯Î¸\'qòäNTOj5¯¨E¾¦üÔ\x0001¯CM\x0016«G,ÿäÙz\x0010è÷g§æ}åç\x001b\x0004Í\x001f?ÆÚËû \x0012CÖ7E\x001d\x0008jS´OõÄYs­ ¾açðL\x0012o¼Í"Û¾û©YÑ\x001eå÷¥P·ÏÏY\x0010PM	Î\x0011Ñù#:\x0003üÉ*âà§\x0016g§¿¿2ÄLZË³,87Ê$pm"qmJ Ç[H4Ñ§íg\x0001_ì\x0006Blú\x000er\x0019°>v±qý\x001e@·hN&Ø7èÈ¢8ÃýÓ£#¨+=ênÍèÈ»çôÖ
ô»Éð\x0012Í¼»\x001f4dÆPç¨³Õ©!/[$\x0003tg\x0005ÁZ\x0012¬%=nm\x0006æCîÏ5ø¾crìX.¢\x001dÃtç"²þtûÈ³}Üº:ðöÉmvÐãg¶ß-+kcû¹6Nkpý6Vµï£³]\x0013³·ÕÉûÍûcç×Åb$ùÊøÄë·ñý\x0006Ä\x0017óG _á7"Ç#êçmãõcqPä\x0017Ë?â\x001b\x001a\x000f.nX-*ldsÉ®%È½(^l­¢ñGê	'6î¯\x0016\x0014µÅ\x0016Û#¢<!ú°üó¹ÄúÑzDÖó\x00177Qü}ÖccÔ\x000b\x001fÇGïH½`{·5\x000f\x0018\x000bÏ\x0003áÜ4Þp_\x001f\x001fG6[Ý÷y]\x0019s¯ùÞñ^¼2§¶ÒeÞ¾\x0016ü\x001a»i\x0003\x0005«)é£\x000fÍè);BCºZ{½Eê;ÆÂ	Ï\x0006\x0015E\x00102_y\x001aaÂy\x001eaN\x0017
Ì
*Ìè§N!ü\x000f¤\x0005Ã7¾ÔA"\x0013æ+[àAî\x001aNÈ\x00108#áÄ±x°\x0002£¡ï9#!Ó`¼\x0010ái½\x0014\x0000Ó=Ló¯©È»V¦\x000052	|\x0012m6¬ùåã+¾¡«ª¾¦«t'À^Qã\x0018þNIÂa\x001aSUC_r¦»û¼²\x001aõæþ¦ý¾¾ºð$ i\x000e0óø,ûknäþÚy+÷­\x000bí¹o¹ÚsöÕÞÎÞ[s3§ÒÕ:sk«³tkK]£¥¾¸¼¥~£µ®dk³ÔÑæ,Ë\+\­³vÕ_ÍßUw5¿²árÁö\x000bMóÊ\x001a_j\TU{mòÞ[9@¶=57ìUÎkv¸ZæT6¶ÍÚéº\¸íâ¥\x0005^ý;ë/\x0017È²Õ`Kõ¹\x001b9®\x0003ú·
\x001a\x0000Ä¶Ñõo=K\x0016]ºfÛ{®©8LWnÿ.8@óÂ·ÑPR
þ½\x0007|
|¦-~CPË;NZöáEºý\x000b´|ù):%øÃü·tcå9ú¢és\x001aÎ¾Ø/¨¹º¾|è\x0012­Xõ-®5W^æ öÔñ~#ÝzÐE\x001dh¦_¼ý hQûýÂ%wîÏðÇ¢ö\x0007Ó^¹ÕþÚûwÚ/~pïþ}ÿ½_WqåêQÇÊ¢a{ìCIÕø4²«uí0T\x0001\x0015yÃÉ\x001bYÉúg\x0012ÉêÔþ¤Äb"KÇ¤\x0005/~aÅEoþ"yÉºµ¥íÆÒ\x00043)M&¥©±ÝÂ±©îõY»v\x001bî¦ÛüõOH#of\x000f&/°\x0015bIq
øØM>ü?±rÐ\x00007Ó\x0007ÈPIO\x0012á\x000b$I×3$\x0003\x0000\Gî®\x0008êEô=¡\x0007ºHp7\x0010ÒIB»@X'0vðNÐ/@L\x0001\x0012ÑIÌ@$\x0010\x0005*\x0016°xö¯w/'÷Ð9ñ4`\x0005\x0012Àw\x000bª×lS\x0018Y`!?ÍL!;ò=Ï\x0000FÂ]Ô}÷7vWÂ½)ß©kÓàKÅï9¹\x0015áòó\K\x0014É1A`³|[IïÄK^k \x0012¤#ã"äQV°=ì8Rñ= ï4²Ã>¼6&¬\x0019\x001eïöOö_íNcQ\x0012KfÆÉèPÉ\x001d¼×zò¾÷¼å»Aþ=m÷Ö\x000fáêÍ»	»s"&N\x000c²^¹\x001aü\x001aûè]â¾>\x001a\x0012d6ëHß¯K?Ó
\x0006ë\x001aùÓ»ÁOÚ¶Þþõ[±Âð¤ëZ&öC
Ç\x0014%}ôÑG\x001f \x000b¦äI_}t/ñÿ¢¡Oº®úè>ôñTô}\x000f×Í­ÛaÔTÝ@XQ\x000bñ]èS\x001b\x000b´ß;Ö\x001d6a2Zä\x0003%ÎÓf\x0004Kd|?£q,áa÷<o§ÍãZ\x001e\x001fyï|V\x000f?\x0017Ñï\x001d\x001fo2ô`\x00046[á_T\x0007+é \x0019H÷hh#\x0000³§åáûÍH?6\x0017ÓB, Û,Û*Ç<\x00120i´MË¸YÅ^59-\x0005::£¯+v\x0004\x0012\x0017­yï¬\ 5\x0011¨Lgc«5æZýïÌZ?\x001dò9Åîõ$¢ÜÿîwNÎ*xGû1ï8º\x0006;îÕ¡{üÌÎeíeí~ÔÇÍã×fmTèDìâå1Dþ=Zà¾°ý¨^Ì.?9`õZ5Æ[1W¤Ë«Ð>>lm!kjIá3/ÔH'/ï/\x000eI\x0004ñEe\x001d¨èPÔ.¶_ø5\x0010þê·\x0007­oA\x000e\x0015y\x0012ù ²ßEkðzÕêÀß\x001eã÷h©éSÛï¢Ü¢µ(Ú\x0003H¾¾#k¨íOÔgAü\x0015õ*È\x000b¶§ýùØ(¨#\x0005~ô`µ%ªYtsÍ_\x001dk9\x000fD9Æj\x0002]GT\x001bØ8\x0010\x0003¤\x001bBÈ¥	äÂæ\x0004âÜ(èáñsÝ¦\x0004Ò¸ÎJÅË·üÓõ\x000b\x00072ôØ
Øô\x001däè\x001f?{ÉeÀÞyY~MÐbó½Ø±`ß\x0018`Ý¨pÝÕÃÃhSfÔ=gzÔÝó£#;È¾{^~Û\x000c¶ò}OºW\x0019MÆD2=âo/Äë\x000bÃ
d\x0014èÎ}À\x0016\x000f6¤õkð\x001dcßy|ú
\x001eY\x0003.£¶.+ÉxuçzÖsj<­÷Ù<\x001f\x0012D²\x0008'ç\x0019³ózgvÜÆõ?êcõðk óY[lR¯
\x0019÷ép]¢µ}dù>	÷QM\x001f\x000fk/j\x0013\x0016\x0013$\x000f6dìn^\x001f«WRêCs&\x0011Ôg¾°úÀê\x0001\x00057¬f\x0014kJD\x0019.g||bÂÕ½¢î5\x0014ñ÷\x000bQÙøg?1ÁüP³¯\x001d>÷èÞçt£õ$Ê¤>\x0017Ý3üÞgã'·èÜ\x0011Ô0º\x0010_óL¸Oâá¼Ók¼\x001b\x0008'ÎUIÄõ³DáÝ®|î`÷{¯\x001b\x001fRcW°^§aº~\x0014,é£\x000fí·P©«µ×Ø\x001d[¤ù\x0011`Ì\x000b¹\x0018&%Ï\x000bÓ	fsÌ
*Ìè§N¡\x001fäñIFB\x0006\x0005\x00132\x0010ÎC\x000b`\x0005rÂ:Æ\x000b\x0018¦Ã\x001f\x0002`
ðL\x0008!	p^Z\x0018a^\x001aèy6\x0014¾1a¾Íü\x001dÚü>\x0019æç\x0007ÈT
LaÜ	&í³2&Eÿü¯7ªÑ\x001fWÿ®Í<F\x0007aÏ|Ò	\x000eQ2ö(\x001dò\x0015þfÉïêXpÿ¾±\x0010Z-ëE|þÀðêéÛ#[wË^þíÌâß\x001cNYóçSC*Ï\\x001f»¯övöîó×óv4´Î¬¬ÿ®°¢±eNy³k£ÍYâh­+ñ´ÅæeåÍõË\x001c­Îbw_K}±»ß=îtËmms7¹T¸Zgï¬¿2m\x0017PÙÐV¸ýÒ¥"GsýR·|kÝrG[]ñÖ¶ÚRÐ±l[Sãâ\x001dÍsUsÃ¾·æföþ[¹ëë®\x000e³6bZÎêbZÎÂæïF¾}öáª#tõö¯hé¬w\x001ffn£\x0012ù\x001dø'çá³Às0ñ\x001b:êõtóG\x0017éM§éBéSª×:7ç\x0018\x001dv ¾¾¿®OüÆ 9¾þ_Ðÿ±_®±Q\x001dW\x0000>wÞõÚk/6¶÷
66 Ø<l¯Ij\x0008¸)$ÆÈ/ !ÅyBI m\x00101¶\x001bü¨ZEªJéV\x0010\x0015E­*\x0011Fm"\x0002~À\x001a\x0012 ÒÐ\x0016\x001cð£ÎÝ}wvæîÝÝëµ£ìJfî3gÎ9sÎÌÝÄ£½è±«¨ã\x000fÑÃSH%i¿±é\x001ddè¼v\x0018DíoºPË[.ÔÚñ9ÚU;4¶vËÐØ\x001a¾\x0015aMÍ7ÿ[ÝrçÞk=wï~ùáÁccèr[Ï\x001fÛ:*\x0016)»Js «,7bºËsáHy\x001etâ~KÑ<x¶À\x0001?ÊÉ¦¬ÙÐ`KzG
lyb¹ö£\x001f¨¿=¼¹ñîØÃ
·ïm®½Ø_¹åÝ¶úl³¢Ñ1\x000b\x001a3S#æ§3Ý¶Èá\x0017
^÷ÏKrà©EV÷zõsR A\x0006»¿lËâã
eIzp(8°â¯\x000f;7µÌÁàkÝýã¦\x0000EQN\x0001*\x0019QË&B´\x0011\x0010\x0017\x0001º0ÐI|\x0018\x0018Â !\x0004\x0012%â7b1)4\P)>\x000ff\x001a6ì·\x0005cÃýûtj¨ÊHæ\x0005VhwfÃÑ\x0015yn¦ò~óÝqËçÃsK³ 9×ì>«\x001b\x0018÷Ü6|Çómµ9	\x0012â Sé9Çy?¢\x0012/\x0019¯5\x0007ß\x001f\x0015¦xxl¡ÕíÃ+\x0016\x0015'~\x000eÿ=Óê\x0007{ó\x001dðHv\x001aö;Åí¿û¬	S÷li¼\x0016ßiàÅ\x000cÈ«pîI¾ö8Ï9ÎÿpwFÞY3åöý$÷´aÒ1ô1¢ñùçÕ\x0010ûEô345©,W®êÄâ¬r8¸é¶3Ú¿`1\x0016\x0002}\x00041bÄ!\x0015õ|¤î³+üÄ­BÊéÎ­\x0018ò1ëWH3Õ9c{ý·\x000c¼tA?\x0018¡ÈªC\x000eÝÚ\x0011méÄxº\x00003þRÎ×j Ü å\x0004¥ñ:7¾¾°¥ö½òB\x000bdHÝ~òü{¬°\x0015ØÀ³P«\x0004;¶Ù\x0006Ø½ð_ýfÜ&a\x00120^~¨Í5Rú¤|7æ¼Í|¬MmÁôÑd¤ÈIõ!\x001cÅl ç²Ù\x0014LO$þ\x0005i0Ý,\x001fBõIî}\x001b9Öcßø±p\x001aòÕ>ÙN\x0005\x001c½ï{\x0016Î³\x000bZ\x001b\x0003»\x0014]¾÷¿¼ÐC³ÝNÑí§SÄ\x0006¿1\x0011ßÉ¾¿\x000e\x000cÍ\x0006\x000f\x0001~k3öÏNó±g~¶Sò\x001a'±,?©²¤­´x	cÄ\x001f5¿(1dÆä~r\x0010\x0010OZÝ0ý\x0017ÎaÔ\x001cMG°ýñÛ[JÍÐü\x0012]ØgZ
\x0005Ñr1È¾ÓÆ©q`èdÙ%\x001b,_i¹!VSÌ½\x0017Ë\x000b\x0011\x001d´3\x001asJ¼ÈsXJ=Ûðr^\x0005ìg\x0010ÿ1dèfæ;i'\x0017¸vÐ\x001a²ïuhû/u¯g¶Í¬ý\x0012Æ\ép¦Àµ½6èÛmÁX½Xü¸±Ï\x0006¿\
ZPÀLú©0s°oKq§D	àÄ\x0014\x0013-Ùwª<Ï~rªÀ¹4=¤>r\x0000Y~-\x001c²EØÎÍÉjx¿Å¡E\x0003\x0005ÆÑþüY#\x0017òMd\x000f÷F/ú='{ÇM£¾ï]òX	¹
?#OwhE¢¢\x001c8(À1pª=\x0014«¼þ\x0008ùVÐ§QìEøì¤¼+\x0016è¥Ê«\x0002çúÞ±t¹á÷Ðg»\x0012µç}W¦\x0010Çµ6Y\x0003\x001fµdjvfê`±B #G¶jb\0§D°¾__Åè3ì¥ÙOú2ñLøU"|/b?êIÝ~k3|'ß\x000bõòÂµ\x0003Åâ®¢Ë
×ð³¶WÄ<Ò\x0016roÈ\x0011ö\x0003âFî+KRl¤Å¶/,9ZôË\x0001vyÇÚcF.	cÇÜwJ½ÑôÓr¬½dÔ@Àqbä«}¬z$kÌ#jÜ\x0018û\x0015DÜ\x0003l£b\x001d\x000bñ¹ï\x0011)7°\x0002ß	?+0ÁgûíÐ·Gx§[¡r×Oö?Ü\x0003Us#}$$µ l5\x00181¤¢-B
Çhdy\x0017M\x0016{/®:Ã\x0000?H\x0004Ø\x0018\x0002Õ4\x0012\x00006Hd=_ u\x000c¾\x001f\x0002U$\x0006\x000fkCdM\x0010\x001e$àß9ñ\x0014\x0006À¬ö`Çêñx<Àj\x0002þÝ*LQ\x001cÀ\<'C5Iº\x0017¾oÆX¼­Ùûn.Ö[®÷Ì¯dð=\x0006\x000f0¸?BVúZl×
-þîÝÚÛz\x00065¼z\x000e=Ùý1Úÿ\x0017©:ÚÓHmx\x0017é
gPöm¤\x001e\ObDPñ7´èwÑsMï£UAå	\x0014={ä\x0003Tu|\x0010µn>Êx}ÁÖ[pænâáó_/yÕuÇYûÒi»Z·\x0012öMÊæßÿ#ç\x0015×óÅ\x000b_\x0017¾ÔûÂ_\x000cÜ)~ùâ¿\x000b»û¾¬hÿÄUÓzm ®ýÊM/ÝXÕÝ÷ÅÊ#}_Üxà³ÊÖAWõ¡k}[Û>¹TûÂà§Õ\x001dnTu\¾¾\x000eËnn½ÞWèz_Cëµþ:~>në[oàgë¸iût î°ëúºî¾U\x001cíýªôHïÍò®ó7]¼U×/në½¹¤àj1ñÆ?añ5WZgïèöÿ_øóxcõë¨HÓãük¯§B\x000fî$â6½ÊÞÂql?¶'Fº ±ôÆsíY´ì¸\x000b\x001dz­\x001fíÍ~\x0017©óð»wPÂÑ\x000b¨¹ç*ê8x\x001e5èßF\x001a©kTEEoºP\x000b¿ÎñËèÐ\x001bWÐ'n×Ô|3¶¦vhl­\x0018[Æ\x001eÜ:4¶þØÝá\x001a\x0019ùò{#ýÝÃ£\x0017Û\x000fì©ì*Ê®²Ü°èÆ\x001c)Ïn\x000cÿÜæÌ}\x0005\x000ex<×\x0002ÛçÎ9)ThtÌú¬ÙPÓÕ]÷Õ7n\x001fAu;îÔî¸=\»ýöðm#ã[ën
m¬ùÉ³6~N#OfjDìÇv\x001cñÚ%'Ýå\x001e¿\x000f\x0016fÁÎt¨ç}ÐÖï*M\x0018>O\x001e²&Ãx
Ø8pc\x0002\x000eL\x001a7ù
ÏÉ"(eF%#j\x0019ÐÈ6\x000câd@\x0017"ú0\x000f\x0003C$A"\x0003RÆg6Æ±
j5\x001agÂtcÅþÁÓæ¨Pa2À\x000c8°,Ë}ç\x001c«Xà¾ä¾Óhw:ß?¸l.<gÆ¬T÷]\x001ep~ã÷Ûð½Îßë3P\x0010\x0007YJÎm´Îq_Ìø\x001cáãõä"\x001bt,ïUèw»ç[¦s9ï{\x0016<µÐ
?æþqÇ\x0004¹ÏøXlÃ1yÈj\x0002g¢n"\x0016ÓWáÜ<|ý%ç\x000cÆÝ\x0019}oÍûêÛr?\x0005»L>ªr#}©ÅråªNïû\x000cýÂø\x0019T|\x001c¥Ä;õ\x000f'´Ómo4~
£KxúiÉq\x0006©'\x0010=\x00181bÄn
RN÷Ù\x0015C~ÒÏ¢¸éÎ­\x0018ò¡8Çè\x0014çÍÈ¨ÞRY©ÌÀ+Bzç`òRÇÓCÐ\x0011L¿ù´õ"Y×7ßÂ\x0001,Ñi ,A\x000fË
\x001eJãu¾°õRêE86!ï\x00187Pô
t\x0012r¥\x0014½2:ÈÓ¨Àí¶cl^ìÜd1â~"\x0001í±Pæï\x00120&ÕkgªW&AD§¢e_0»åÐ\x0011N\x001cB§ù\x001b\x001e9}bõBÝ\x0003)¾é\x000bæ·T\x001b¦b,\x001cßÈ±\x0014ðÔóÔ¸°Þ}ý³\x0000Øc´g¿¾O·\x000c©G¸.y&Ñlµø"ê\x0017Ëf\x0011Û¨vr\x0014Dl÷ÓÉ%\x0019\x0007V\x000c&`Ä0`/,ÿXëNØFY#@¡\x0016/n¬ÅÌ/fÞÈ°ò@]d¨¾³bÆÈI¿6È>3sOÌ\x0016	¾ÅZ´Î\x0005sÄìcÕ-\x0019WZühvÐÖdÚ\x0007t»¨u)R_vÆÚÔ¤ÅUB~RÇ¬\bÕ
­Þ\x0003bBúMÉ!\x001d¤\x000e)c´²òV;bùEóë\x0001õ,ô\x001büc"6Y'ÞÖ\x0001ïÝ2m<\h¶ÂÀ­Ð·ÇB´Vpí³À\x0007µ6X¨ÑÁLúa7ÀÉQ\x0000\x0014+\x0001þÏ~¹\x0000Ey]\x0001ø.»\x000bË²»¼\x001fb\x0015\x0010A\x0008²\x000fT\x0014\x0011Dñ9mDD\x0004MZ«£	Fi;I3(¨(OÛNãh;é´cc2¾11­ÓjMS­1VÙå% `ªv&\x0002Q'Ûó³»øïÝ{ÿÝå,Ã7÷þç{î9çûßµbckFËkùº´±þ¾=f1.aØ\x0005¹NP\x00028
\x001eÿføÉgq
ÜèÓ«¢ì­ïGe\x0002úñ¤\É÷=ã¶\x0004\x0015ÖÇyÿ»4Ò-?P\x0012 \x000f\x0006ÖÒJy­ÄRfÑ\x0018ûZb\x000eYGCSlóõ4RëùüµúòÆåFò2Gf\x0019\x001fNn\x001eãt\x0013a¯\x0002\x0014\x00087&*?~;D6\x0005½Ü>]Â.i[gòGgêóm[¬Ié[éñ Î#|×I-õû}ZÚ³Êõµ¤².+Ç¤.Í69;«\x001c3|#sCê22\x001e+ßb øM_\x000f5­æÑæ0jÏªÈx\x0018ù§æP*ì\x000fM×*_\x0002þÒt¬rÍðËÂ\x0017\x0001ß,ö\x0012»=µj\x0011\x001fMWh_\x0005Ö£Õ¼Õ@K­1´Ú`óh¸?|í¼\x0017Ç¸ÑÙùÜ½MÞéD\x0013_f\x001f<øº8òÙSyø\x000b<`Â\x001ea¹Ø\x000fÇ\x00189qb\x000f.ÞX\x0014ÜÝ\x0007Sw#É¸Gäij%^\x0008ÙÃb\x0006<íg¡\x001d,°A¶\x0003Ì7£°dd1k'jøÙ\x0011\x0002ïÉ \x0008è§,Ë\x0003ÆL\x0002N6K\x000eßÜ2ÆKs\x0003`¿ÄØûþðÝ\x0018\x0008íxWxÏ½t7B:Ál\x001b¤
Y<fHug¥·äµ·>Ôý\x001d\x0017¾_·\x001dlÂ[·^ÅË~ò\x0005\x001f÷¦ ©ZÃSÏáÉÓXNÁ¹bq\x0012£Yçqü[ð»?¿s¥uX"¨OÌÔaMWðÒc­¸tÉç8	Î9ñ\x001c¥\x001d¿9¶úÚ½äÚÖo5éEûý\x0011ErÕ<
\x001f]úUë#m¡[³ûzWRñùÎØ
COr-PÞxovyÓ¹Õn]þ¡º¦á!È9¾\x0001Ýÿ%mýÒ\x0010¿Ûp/e_Ã7\x001cj}·ºÒp_»«ù«¬í·rKn7ät6®4Ò°²¤£)k·ßj^±»ñnfµ¡G½¯ñº¶¡G]¥ïN®¬¿\x000fmº\x0006¨Ðß×d´·û5_®½ÜQõ7¼v×_pá²?¾.Û]ÑA«Î½¹£ä2ó\x0002N:ÒK*õx½Ï'ØËf.Móò/â9ÇÛpÙ&¼%æ,\x000eA'èz~`³B×jÇ»Ê®á5ÓXfs
\x0018\x000f<U\x0006¼þh+Þqø\x0006~÷£\x0016\Rq\x001bo\ñðÙüGÏæ-·\x0001èÌ-xØ»â½\x0007ÿøSoogÕÓç-e-ÍÇJî_®DåÓ£\x001db\x000f°75\x0006í\x0016J4?@Å	\x0011h}T Z\x0013®D«<Q>ü&\å/G\x0005\x001c\x0001\x001e óBËÖ½îwÿáÒ5ç.ïz°0½³SÖÙóuÏÂ\x0007s
âÜ]NÍK®
öF«Æù
ü\x0008_T\x0014\x001böÎq86!8{;S&¢Mq¡¨ Ò\x000f­u\x0006ãç÷\x0019.\x001cÙ\x0001Þ(ÊUBàË#\x0014¾RÃFpÀ\x001b\x0019ÿDCË\x0008!\x001e\x0006$Ct¸\x000e\x0011n\x0003@6\x0004¸;|\x0010x\x000c\x0000Å\x0000ðt\x0010/\x0002¾|\x000c \x0002üàÐ\x0004,Ïø\x0008¿\x000bF\x0013îÝ\x0017\x000c\x0013ÆK^
óE[\x0013#ÐîéQ¨\x0012îÙ
`Ï¡»Çî·òiÑèäñhã¤`T\x00189¶ï.Í§¼¿¹±<\x0018Ëö÷B\x001e®hÈø\x000eG#·@X+B$B©*\x0005Ú\x0010\x001bÊ!G©\x001c¾÷¹Ürê&¢bÈûOá[»úb·ã/\x0000VC>rB}PªÒ\x0003Mûös$s1TDpõ\x0008(EÆ÷·\x0008
ßö]¼·Fó®\x001aÉ;ÊûÈ¯´L\x001aþ\x0002Ë\x000c\x000f~Gº¹x{sÇËù7?EA$¸­ÝÝÑ¼ËfÎt\x0019mßëÍçw¿w\x001díÚfá!÷\x00189qâÄ=x®ÃÑ~o9\x0019\x001eÜ³°x´ëËÉÐá{\x0008»
wÍ]¼$\x000bT(P ¬(DqG°e+×:º.K?Àõ*6®\x001fê"BIrW4C!GÓ<ÜÑ4hSL­ù/KáÉú\x0001\x0019UÞ¥\x001d¾ý\x0014\x000fÆ\x0018±ÖtS;ÉUBáWT\x0018\x0010m©
\x0007ü\x0001/ô\x0012odùL³ú\x0003?ß\x0013\x0018kòË·r¶m­kËw½ñÚ#}²µ5Ï¸\x001cõeÛV\\x0003õc 9\x001fÊ}°G6Tç`¨ãõGÆ3n>ï¡È0%|\x000ea§¿%æQdä<\x000b992ná\x000b%0!û\x0014ßhzd>¨±\x0012-\x0019U~ÉØ\x0019¹`®#°o¬µÉ=eí\x0001-o¬ü±öZ'\x0002þZÕÀ\x00185Odìd½±öQÀ\x0017ZïC¨HÀWÊ¾Òê¿>¹\x000e­©ùeÄÀÏ\x000b-\x000eÖ>XÙ¦Õ"Å6­O\x001dcå²_BgU\x001b¶Î,ëÜ2ß!\x00021ØzOÐjGèÑ\x001f;#§d>hûEÓ³Ú7¢¶¬r@©Uª¯¼96Ï(ãÌÑì°ügÊ\x0018ç¶v¿läÝ-Ú;Ið½"PK´¼\x0004C\x000bÿèðì ÔúV\x0008j(2\x0013lÙß\x0014¾*\x000eC\x0005\x0013¹Ûÿ»õÇ}p1M\x0016#¤\x00054¦VK<ÓZR×\x0016\x000eéK@_
-$Ç¯E\x0013=ÑÍ\x0003Qî¸=Qù´1Á§÷ú\x0014eo}<ÀµSTÆ¶ÿÙÜW\x001aâûxÖ<EÛ\x0012ß~\x0016ëùA~ 8K!Añ`ªäå|\x001f¸¾ç\x0017én£_&±¶ËZ¯¯\x001asÃaîëLôåÌ¬g\x001a·Ð\x0007ÔÀb7	ê¾\x0014§zx6V\x0017äÚ\x0017³gSÇÓçÏ×J¬íñ[«ù\x0014]+ß¥qôQìÐbâ¯ÉÇb])EN¬¯#×¡ÄB6\x001fÚ\Ò\x0017j\x001e)û@BÛ\x0003Z¼ZÂ&\x001dj<¾­½¶È\x0017%V¾o¬\x0018u,\x0019+«¸)¹¤æKÊ^'J°Î¤àþ\x0013µBæU'´8­r@ä\x0016\x000fßw²n©{FÛ7©u\x001c¬Z´µï6kÉ\x000eû4\x001bæ~
ô'¸ äcçî#GíC­ïñþgZ?\x0018é7£¼«uná/°|0¨ª°+B\x00189qb/¾ð ën$Ñï.Ïa\x001a\x0019,òt\x0014\x00168@¶\x0003ÌW°ç\x0000Y<æ\x000eL\x000fK^Áï\x0015  û¦t7e\x0000s\x00082L¤Éá=
$¸Á·7\x0010\x0005o¦	@4\x0010\x000fÏÉ`wü¥t\x001e³í$ÍAf	0STð5=0@¶úSqøëWß»ø¤hÿ»onÞ~`vÚøHÙÊÜu1UW¬M<#ÑI8W§\x0018ÀXÊ9\x001csè\x0006~g\x0001¿áû	ö\x0012Ô'æJë°xÛUs¢
-ý'fsîñg(óHíî©kÛ\x001ek2ö>ülT!?\x0014iüÛOR*ôÝSg¬­õUMÊfÿòPÐú®©UúnÍ«÷^yó>jùéOC²~0vÑ±#\x0001Å\x0017[c÷5<Ð½ûÅãÖ»\x001e¹áÜµ	[>oÙ\x000bsj\x000c=êêúnuyã[M+Jn7®ÜÞÑ[v£cayÓ9;[:\x00165wÌ«Ôß×]¾¸íÓØ·ÏÝµÔUú®>ª9\x000c]ºí­Qi\x0017oNÞqæE~ùY¼úµ\x000fqW)vG¿6ÅUggÎ\x0018y\x0014ÁüÂKx.Ç}
x£ÿ\x0019<Æf.aÜý4vÝöe_þwîoÂ[¢ÿ©ó@\x0016p\x0006+k\x000cxÃÉv¼sw=þ±×ÇXnkÿ³[&ÀQVw\x0000ÿ{$»M6sïÍ\x00059\x0004ÝÍI\x0011\x0012¢\x0001D,\x0018B\x0008D<@A¶f¤\x0008%!\x0014\x0014\x0006{M¥Ó\x0019lKT\x0004«8¶¢BQ($i\x0008ÇÖ¡Ü\x0003ÁAÂ¾¾oðíËû¾o\x001cRwg~ó¾wþ¯÷ÿe0M\x001fºªvö ÕÛ{ÐÊ?ö \x001fo;{òÒíÙ³oôM­íí«\x0016ÃyãvUã/ë¶=ûîÏoö\ïB=«·½²¬Í	ëGÃºÒh/Ëu³Æ\x0005+Æ`Qf\x001244Ð WÃ´d¨+)TÔN¯sÖ>¨u6ÏMq>Þ¬sÖÍJ¨­\x0018ã|{cþMôðôÿ^qìPrüÁ}RÍGïJ³;?1Ô^¾VÓ|\x0013Í©íìü°½ ºÑ\x0010\x000bsÓC¦\x0001³ +\x0015VÙ²`=Ö7PûøíÎq³²(\x000b\x0016Öc[ÂÒï\x0008\x001b\x0006ì·\x0006|Oæe¤¸}X t)\x0003fü¯ÃÂ\x000cf\x0012Ãþ\x0010\x000c3Ò!@6\x0004ÈÃ$j\x000e\x0011E\x0018(C@\x0015"1A \x000eØ\x0010#¾58Y\x00120)\x0018=ÆäÍAë\x0008åþH¾9&ì\x000f#Æ¹G!\x001a½\x0016\x0016å`µ}\x0014l(Ïu×ö0ëV@µ­ÔSÛÚJ³¡eB\x0006,Æ:°ïs\x0003¥Æ5fxßîô$¨ÖÅAaL4¤I\x0018·-æáò\x001deðú­T«'rMØlì³¼ ýåû?Ãúü\x0002\x000b<2Zë§F\x0005RÓ\x001a1MØ\x001fõÖ$\x001c\x000b¹Q²aõÅ`aõÂæ£ÖûfâÏ»¦ý?Ô«á¬QÁÔ$ý7£­.¤0¸Ä.YÂ^¹È/º±Qf<uZ\x0019ªïS÷¿\x0017=Ò6\x000cæOfµ2çãá"q+ÂÏ\x001d\x0008\x0011"D\x0008\x0004m\x001bô»\x0015ahÐ\x001fD¾_\x0011\x0006\x000fy\x001eXo
ý½1-]*Óc:ÞÓßÜu ´GG´ä¸Ð\x0019|çÒìà³)XÄdr[«D\x0002\x0013T
(U« $F	Å\x00125§ïþö\x0017³c\x0018¶u¯óûöùð­¹sN1w;F9£³¾8Æ³§Ô½O	yQR0a½Í\x0018\x000bãÁ÷Í¶)8\x000e\x001a¢%ÇÐìÓPÖùÚXï7ëg\x0013Ö-Q@L±=bz	\x0017\x001f\x0002Õ%\x0014\x001f\x000bé.\x0016\x0017!?c»MbcÄFÌ^¡±`t\x000fÆbú\x0006º?\x0010;hyCgs(\x001e£gó\x001c<½¸û\x000c§Ïù&ûÜ}$~û\x0018âl²"ea\x0006®£ÊäÈ3gòì±Ðô&eï"±¶×'<}2\x001e4\x001bI;ü0@\x0006MW\x0001X\x0008Ýü|EAúHì\x000cGÞ\x0013ø\x0004\x00133ê½%íã#~ÔPâ!$v\x0017ùî1-ödlüÖ\x000bèËµ«\x0007­æóÅ](Ç\x00025-N\x0016ÊÙ\x0016b
_ñ½\x001d¼ã4y|þâú\CÄQì¡Ýí\x0001~f8rÉ< ï\x0014Ï\x001bBæ_yìæ}sÎ\x0014ÊEÊûÃwx}\x001bÀ;*k\x0003r´k;á\x00132&B¹I½Û³iwZ×ÈøóÜ\x0001\x0016+F©LRÃ©§,Ðù´\x0011:²<mß\x0008=ß7Áë
\x0010ÍHàëôcÿ°6²¶\x0014Ê\x0000\x001cØ »\x0017\x001bÌ¿ßß\x0012ã6q;y\x001egs±ûåÖ÷íîsÚ|¬kM´\x001c^[d¹\x000eåk\=\x0005	_\x001dË×ú¸ul\x001cÛ&x¾q{\x001cÓ1N{\x0003·»{\\x0002:¯ýüÕÑª¶òDI\x00190PÀxdùäút"¿mn~úóÛåþØÈ³×!÷ø¥¿ÑÇ}°}Ì¤\x0010ûïÌ£cÑ\x0017	¿|(E6\x001e8gËèçÒdøÑÖÈýç\x001c<6ù}öðÏ·+ÃÁ'¯OèIÎqíáÊåµ»âOî>^]üLÄØN±ÕAêÇ¹C¤\x001cj¼H\x001f\x0012ë\x001dõ|úSï\x0014©·H\x001c\x001c\x0006øv6±Gô\x001eñ î:i\x0017é3¿ãç\x0017w3¨¹ÆsO\x0004}-÷?/6Ô8òÄj\x0017'Bñ ÞeBO\x0007Mg¹ÿ8õ
$ãå}O3ð{®e\x0002«?+JËÍýµ¼ëi\x0013o]÷yÆw·WJr¾¼®²ºPÈXzJªCXS\x0004\x0011"\x0004z!sçO\x000e+j2\x0007â\x0000¸ÌàazlàL#¨	ûE¸O-NuLÅT
\x00021\x0018_Ëa
¦ \x001aÀßB½\x0017#&_\x0001p¯w~2)Ä\x0019ìÚI1wöTz×M
ï\x0004ÁD\x0011* \x001cÛ[¡J*GÓLsÜ§»L¾¶"N.)Æ4Ó^¦ûõ\x0007\x0017­ïBßAð\x0006Î¯Ý\x0014v¹ à=ùÛnôß@-Åï£<ØÅ³\x0004\x0019½\x0007ÉZ 9oBkg\x001d@¥¼r8ìú<iÃ¡³ßÞÒÓë¿ãpfTÚL¬ñ8¨xtsÊ}'ï©iù!:ö^Ê ÖüdæÖ¿\x0019ëßêJ°õ7q¿X!7m^Ì¤¾ø\x0008$mhüWÖÇ|ïÀ¿sçíû{uËr©aÓbÆ¸ùIIÕß'­9rþ[:¯Ú6\x001e¿lûIÏ§ÓVí³öÄ§5\x001b;®86w_·¿ØqÅöÓã\x00176v]+ªyîUJ;Qj¯oOlÿ×åñì\x001cÞWô\x0012¦­ó¢£¾ç3Û³ýêÁö½hÁ×]3R[Q<´b{vbö\x0004è/\x0011?>`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=å´ýÛ¯tyI\x0018<àyòüGJáN\x0018@?\x0015\x001d0pN¸tÂ\x0019\x001aâ.À\x0017F¾*ðn\x0015­ª¢;:º.y¼.1!L2äÖã~;'le\x001eóg~v~6¾\x001eÚ\x001d&A\x000c</p><p>±
È\x0003aî~Tõ­hbñÎ.Üý)\x0002ÃZ[HX÷i´ù\x000f,\x000fzrèôÑ­zæ\x0016óê°u;U×ãt´eµ°<Í¼¾¾VQ9Å¤óÑ<ñÇ»wé\x0017æyhÁ¥'t°Ý\É>dçÖ²Úò@6ÈòógªwYÐ90ª\x0002y.)£­ÒÍ	>k\x0007R0ß¿~\x0014	\x0014rg\x001e^©ölgsæÏç\x0005 vä\x000f<\x0018ÿ\x0000\x0016ZW¬\x0008\x001aà\x0005]ÏßJöolF\x001fúG'=ýá\x0017üÄþEëE¼â\x0017ð»yf¶,-ÔR\x0017+}\x001dË:¡æä<¤"<«Í4¼4³sHXp¤3UÂÝQçöÂòÐieÁwÝ;<à\x0003:z×¡À¬\x0012ì\x0000\x001cü¤­fZ\x0010\x0013
\x001aê\x000bÂÏ&m¤\x001e\x0004Çïl\x000fô>÷Õ-ó\x001dRW½'eÍ-\x0002½`Mæ\x000f-ºR^ç\x0011ïíH\x0000³ªM</p><p>ä[\x00109ØýÕåÑX\x0017R\x0017dyLç§z\x0005òA0\x0017\x0013@\x000b'Ø[L1[GÞ«\x0016Îw\x0014½ Á`\x0000¤røóö.¹fKu.ìª£©b\x0000\x001f3IIÈ÷%I`öG30ÖUòÕÏà-ßB\x0014}ªö·¡hÀ÷·±\x0012<£Ì§>
øüë^´ÐÅøCã«ù¶»\x0007</p><p>ô\x001dÄs(<\x0003âÁ\x0010øÊ[üÔ¨ÁºúGé{»;{«<¹P\x0001ýñoø5\x0005'kÃ¶`qö\x0001öWUÃý]ÈÕøØ?¿äÿ\x0000Ö7üä§pz¤I¸óQÖyåÝ;É²IÈ\x0000\x0010\x001a1åèp*4ñIäÝ°»ß-àv\x001fã\x001d3q\x0008ï}\x0019µy÷ú@NÛ;(<:\x0003_QJ%÷\x00177!F°E\ÍM\x0002Ulÿ\x0000s×Ò²ùFcùFÑí?ôJ^\x000bÙüqëeNò:FßÏ	\x001fOÅ&e¾nq÷ÛimÆs]<4õH=Û\x0017*9½\x0000$câi{Í#cãùÊi£³Ìü,·yýïó7êX\x0019\x0005VþÔô¿¬ùDG\x0001È\x001céõßÓ;\x0001÷R¿ð_é\x0014L£¾öÎß¡ù)\x001fII\x00174þ7Ð³4}o®¤%c²(¡.fE\x0018;°
\x0019Ë{zã\x0018Ý±c>¶¨9¸'\x0002~^6;ÿ\x0000 ^mçð	n-WWYÖâóMiDjQD71¿ìXD<Ç\x001d3>S'Xÿ\x0000 ?ÎÐGÁ0cnrC@ä\x001f,`^ÿ\x0000ð]ÿ\x0000UæÝ>þôåµ\x001dzéCÁ$-\x0004yc2¯ùøÑ\x000fÀ6ix¥Ö7\x0004\x001f?ÑcéQX\x0002</p><p>Ó#\x001e<Xóü×;üÕÍ\x0005 \x000f0	¯xê»xr/ê&'##:øáTìAô4éãA¥\x0015v½}³Õ»\x0004\x0003±Úè\x001fä»Mw6\x001bÜô\x001e[V:Xµà^[ÈüëÍdË§[ª´r\x0005+¶\x0007(#î¯nÒÅ«&Læ\x001dAÄ\x001f\x0010H?\x0011ºÇ\x0003\x0001\x0018Ø\x001dÁô\x0015è\x000b\x0010)$I&×Ê*¦G(å\x001fd`mA\x000b-A)Þ8Þç~{ðª</p><p>àx¾ÐÇ\ú×çxvÜíËs·³ÁcË\x000cZza,cªà\x0000>UíZ\x0016fW8ê²O~<Ök[\x0015Ä¼¸æèqÔW\x001azUíá{_±aîÙ	QN|±{WÉ)agÞ8fùs7^</p><p>=âX¥â	 °´[GfçY\x0011¹\x0007/BÌ\x0000É\x0018=6É§LiÔO$\x0003Kaá\x001cDa¹Ï6L\x0008
"@]æ(ÞÇntvä¤>\x0008ìþÇ\x0000¶Fï>ÔO \x0005«
¶éñ÷¦fKÛ\x0005¼¤øÇ\x001bKÞºêµ¬õZÖ\x000eM\x0002ùY'Ú|(,}JiÄE\x001a2\x0016ÃL\x000eÌ¸ÛldU\x0015º	Ò õXÜòä7ýBséÚe½¤eP\x00009\x0000\x000c\</p><p>H¬´ÚòY]!·\x0012O+$^õ¦Z~T\x00122\x00122sÌß³\x001eô\x0013A{WÕ ºn'¯ÑGØNbÙ\x0018Ï@\x0007Ç­d\x0005A\x0014R6¿:]rLcvXó¶Äô\x0006½-G$^·áþþ\x0016ä`</p><p>)$*GU\x0015Ñ\x0001!éðsÀ\x001cìAqÔûTòY\x0004\x0015Ó;ªÙ³|u¯\x0002õ\x000b®I\x0004lCm\x0001½\x0014¥\x00029/id4-ÊA\x001d<`JÁbJñcg\x0018\x0007lã\x0019Û9\x0019¡dEï\x000fðÂXVu r£T0èw\x0007zq\x000eS¡6Ç\x0016VÒZ~\x0012p\x0004x\x0011hTG4äÔ¸\x000bwE(×L¥\x0018\x0002¸ÉÛ\x0007j³\ZW3\x0001Î\x0004w ê\x0004t:®3Ãã\x000fË
 QéÕ	ÓôÑ¬ô-V\x0018lb?ªÆXF\x0000ròg \x00003Ózì&L8ÎtsÏ|án%Æ´GøÄ©\x000eÓã¶	Ö\x0000\x0007v
\x0000\x0007á;Á	?´K\x0014·Òô·XÑ\x0019áRYT)oÍ¦äóó£³Y\x000e+(\x00178Ê@\x0004\x0007¯'+ä³ãQ5¸ð\x0010\x0000%¢È\x0000_ªÎhY|\x001b¡Û^é\x0012á%NóF\x001e(À\x0007ùc\x0019ÛsÐäTw\x001bâ³EÖ5å­iÕ\x0007gj¢uxó¯.©\x001e\x0015Ã¢\x0015ÎsAs·=*ê¾	`Ý·ÛcIÀV\x0016×÷Ê.ñÝ"³\x0010z1\x001b\x0001ÏÊ·\x000eÒæ?\x0017\x001cÍ8ÐGKßê\x000b[àxÍÉ\x0007î\x0000$\x001aÿ\x0000zÁ­.Ø.7X\x0005ë\x001bhû¨Ø)\x000b\x000e@ò\x0007­\x001dòã\x0003!. dÙçÔ¯xì,r\x0018\x0000\x0014
\x000e\r3A£ô,
}ñvß¦\x0007&3æ\x0002ÛO¸[\x0003`\x001avùço\x001dnLøòwù¼ÿ\x0000$/\x001ddïåä¤[\x0012Öõeòc\x00014¡¡nR¬3È àû/jÓ°r°p$/\x00196H: {ÙÛÊùF{C{®\´_JZy\x000bêÀ\x001a@\x001bu®¾\x001f\x0005o»-àÝ[¸s¸ÔmäI[¶\x0001xs\x0001ÔìXµr®ÖæCÞBààæ2Èå¨[~ \x0016íÀ°d</p><p>\x0010A;\x001f\x000ei\x0006\x001a;\x001eª<×{u[\x0018ÒÊïO0Å\x0011ÏuöI\x001d\x0015qa\x0007</p><p>\x0013zú_µOÀè° ¶\x0006ð§ÌïQÁûX\x0013^dÈ{S{f^1¸Í`\x0012A!X\x0000\x0008\x001eþØ¤rø`\x0012
§Ç)`åp§c´¸¹\x0001Ôt¸\x0013~Ï\x000f4ô¿Ö$×;û;àe±?g9ÛÔ\x001fQ\x000c
ªæ±t·²C	kØHp7cÄr6¶ºM±·d\x0007\x0018Ûû\x001e\x0014q½Ö
iÜ¦îyvç©XÑ½ÅÜ®\x001a&\x0004ªà\x000eÌzýÔP\x0002ô;¯	_RÅ\x000f¶½wòÅb\x0010wX$ðNªÜ\x0004å}>"µ!fò³Û¤e±(ñ`¯À{Ä¬$\x0015¡j\x0010XIÞº²çª6öö¬^ÛJ4\x0003Í	wZâÅÕÇt±¢\x0001çæqX¶*K¹¡	&Ú!}\x0012¤yÏ\ÿ\x0000E{Ën\x0010£ÝfËë¥¥¼äò;ÂIè­!\x0007ªåÛØÛ7\x0012®äè¢\x0007Øf+\x000fØ\x0019\x000c|>g7dh2¶¾\x0005ê;«Xâ= +AÛ\x0017\x0014kü/s\x0006 Û4\x0016Í\x0012\x0008Þ\x0018y²I ¨<¥S\x001eC}¬àÔ×i3³0äf>\x001b\x000bXX\x0000,eó$PØ×Ç­¦\x001dÁÄËc²rÞ\x001cðâ\\x001eúä\x0001¾`ºþ\x001d)<áXðNÓ,î\x0005Öl9ÕÊÕÙ¿JY§8<m¢î\x0011r?»¼ã§þjØß?"Ç\x000fù¥äûOóX±áß¼æö©ª\x0006íYñÅÓÍÕ¿÷±×8í\x0000ÿ\x0000«¿ÆÅõF·®\x0000?æßñR}oRü8ýå¿âõ¹OÜë\x000fh¶\Ç\x001cÖeGÄ¤Û~\x0015Ô2^\x001bÆc¾°>\x0012-\x000b\x0019¥Ü\x001aJé0?çF¡amà;Éàe±E<ewÆ|KÄW\x0016\x0016²]ÛÄÓºBËÞE\x0002Â	ävt\crÛ·6Ã|</p><p>×ø¸Vc¢ÈÆê!¤kc\x0003:\x0012Z<:ó½ÏÃcá¸lA\x001bÎ\\x000eÈ_Õ 8øò\x001b</p><p>ßÍJc7\x0016\x0018\x0003Ý Ð\\x000e:ú	ñéÉ)ö	Â÷\x001c\x0019­ëV\x0017O\x001c³Åj¼ï\x001b3).9ö,\x0014âÃd}¬ÓþÊá;\x0007"xCØÅFþ·P\x000f]üÓ~Öç3?\x0017\x001aXÁk]) à\x0001¦ú¼#¦ÛòMøÄíÈ'¢ó@

¹\x0002GM¼3ôM\x0007ú¨þmçþôV¹Øßcò\x001c·>ßþñwøÈþ´ç\x001f½Iþ1¿j>º,Rk¼M©w\x000bq{e,Ñ\x0018\x000có<\x0004òä\x001c3\x0014Tæ\x001bÄyÖÝÙØZr2dÒ\x001cøÜt\x000f2dåü-k=¯ÉpÅÂQds5½á\x001e
d<ü@ÔMyy$8¼¤E\x000b.æDx\x0000Î~Ë&çèíÚ\x0007\x0014ñÎ©}q¯¬YÃ\x0006\x00126Á\x0012H\\x001d¹3\x0015Uló3\x0015\x001f\x001aà\x0019ù9R=ÓÖì4è\x0000ßêJí\x0008ÀáÐDÌB×Hù7p¼qhi\x001d
\x000b$r\x0002ýÊ?âAÆ.'sz\x0015ähnz\x0001jvH\x0008ºO\6?ÜæþéCÿ\x00001¡tIgþiòÿ\x0000Ì/écLøûµNk¦ÊÎóª>\x001f®:U¡%SP\x0001ZÚîy\x001b(I\úÖV±;!\x0017²»ôÆkÆ½ÕH_0Ê\x0018bUÍdErXóBâh¢f\x0005r<ñý4\x0002¼ªBúºî\x000eW®+\x0010<\x0016a\x000b\x0004cÏ­d\x0002M\x000b$H11^\x0011IPÚP0Ê\x001fJõc¥\x000b·½å\x0005HÛ\x0019Í`[kÚ\x0008]\x0005\x0004Û®ût¬¹$Ð»R\x0004 \x0004ýÕá	KBû[dlmÐ×id\x001dHYiâ=|ñX/5Z\x0010Ò.w84,¨!\x0000ÿÓºz\x001f\x0019\x001e\x001cg·^W_3ÑüÂ¦ÍK]kô\x000båR¸<)ÆÜgn'·;ôxÏÚCè}½\x000fCQÎ°î¥£<XBp¤ÛV)T&·\x0017qÅ\x0006D^áòøðÆ\x000fæ\x001eÿ\x0000vNÕ#.HÉ(\x0015&íK´«\x001aöìG\x0005"l}\x0007_ûêk\x000f\x0018=À{-j|MýðO1±Ý;©¿­*\x001bÃöwº¥ó>\x0019uñ\x0012£úô®÷¶6zÇeæ\x0016IÇ\x0015Ñt,µ±µ¹$þ\x0008»'jºçïVAÔu·f¾³6ì«ñðA\x0003ÌÓr[\x0011wª~	äùAÃ`´¼Üh¢ E&»æ\x0003\Ò/¥¸\x000bMÝ7³ø¸ÆAwsu vl\x000e\x0006ÃßÊ~WtÚ\x0003õø¦Ð9ÇpEÅ\x001d45#ÁíÕ¹\x001c÷R6ÃwK Dfx\x0017niX³ñò¨ÇÎ×\x000b¤ù®.æ äHl$ò\x0000\x0001ðR"C\x000e¼¤r¨\x001d\x00052&ÖE¡6H\x0007çwZtB\x00114òî¸_é¯\x000c~)Vº¶	ãZÆq³[\x0001öë÷)c³ÞÌÆ²«w|ÎÈÄÌ|R{Õ_Ln|°7(É-l\x0013â×¹MIµdí¬#±Q\x001cj\x0015\x0007EQ>B\x0013ià\x0014°Y û\x0018Íb½¤%$¬F	\x0004ïû
bPÖÑ\x000bkìÏîîÿ\x00003ÿ\x0000è!H4xµDP"!\x0014!\x0008¡\x0008E\x0008B(B\x0011B\x0010\x0010P"!\x0014!\x0008¡\x0008E\x0008B(B\x0011B\x0010\x0010P*£Ä\%oxòrîÌÍ¹ê»ù\x001e¿.&ÉQ\x000f\x0017ÍOñ¹5dËÃKÈQùîUÿ\x00004k\x0007kYcNR<,3â\x001e¾ÞãÈÓ¶<\x001d÷Qs3J\x00055x{J¿Óð\óÛá\x001bv\x0007ØúRÒHÒ6\x001b¬¢uÓ$k*>Go³|\x0019¬Gsd¡\3ÆY\x0008ó\x0004\x001dÜEE½»©8\x0008Ù7¥\x0018öÚ\x001c<E¬\x0003Ë·9>\x0015òÀ÷÷òøôÆÆ/Ü&òJ\x0001¤ê\x000cwËe"Ís\x0003Å0,Ê\x0004Al¡SØuøW²X;¦äRAÄ¿ÒÎLxúºÔ\x0010]£K(\x000bãA^êB\x0012Ö9Ó®"U?f\x001cÈ\x000fUóÈö\x0015¬Û±\x0014£ÈÉ¬JPoÍ']¼ëpïîý².%ÀÏüÖ¥öÍõ )sãzéK½!}wo'à(\x001dM\x0014¼"ÐÄêÎ\x0015\x0001n¼Ì:\x000f¯P\x0016t».\x0003F¼Ã\x0018'Î¼\x0005zJÂL·égù¨µ¤/¥c>Uêò­\x000bèJTavÍ\x0007tU!dÚ©\x0007o¾±)@\x00102^~ös¾\x000b|(ª^½!?8N+k#\x001c§»ïD¤3;*\x000eê	\x0019ËmçüôÖq´\x0002\x000f[û\x0015ÿ\x0000ýá<?äùò¿\x0019¹qñI\x00193òrÛèpO\x000fD±ù\x00115ú¦%%²\x00106ÒÑëx46Ks#s\x0002 È{Ð2B·2ãÈò°\x0007\x0018Éæ¯u\x001dÐÐ\x0005~tßvK²Â.\x0016%ls÷Ñ6L¹\x0019Ä"cÄÍÆËtð:7eX-{b|D28Þ\x0018ØÃÜùè ð®£hÚÃÅo"\x0014È¤ðÈ@Á'ÔúýzÒ²0ÙY°\x000bÙDú8ÂÅà=·pÇ\x0011\x0008Ï\x0002fÎØ 1»</p><p>x\x001aù¤;\x0019^Ð\x0001sÈ4u<
EVÊîÓ^7\x0001KÄ°Â\x0015¤ý\x0000Ä;Èæp\x000fô</p><p>L9y¬A\x000eçä\x0014¿\x0000í\x000f\x0008íôúøÄP±ø1p\x0018Ùæ9ØmHòò\x001f6¼s6C#uì\x001a\x0018=f´HÈ»Ñl¡µï\x001dQ\x0001Ù_³¬@\x0017£/ÚÀû¼±ÔmzZ+Ýö§W°ýÃà_+îahåÍ\x0006SòçnL¹pñ\x000eã\x001d\x0003Al°eÑ\x0008h6Afj¶g¦]E,\x000c¢IF{ÜFòç,K;ÿ\x0000</p><p>ÇQ#×uh\x0007o>¾K­ðÊv{³c\x001b/¿\x0012&|·°H8e\x001f$¼B\%Ë4\x001c½ ¸5Ö@&o\x0016ÒÖÆÞ\x001bgnç\x0013 2\x0006Ùææ\x001cÞG\x0004a}Æk2Nþõ
\x0015Ë¢Ð;=Ù^ÌðÌN\x0013/ÈNHËá.ÊkóÙ8îçFÌdaÈm\x0016È\x0018÷FèCap-.>ð©lìZ dd\x000c^èªwÌUà ÝÏ/1\x001eXæ </p><p>Ì\x0013õtXíõõXñ\x000c\x000e\x000fÄq\x0018ì³Þ2^ÑI\x0006;xÆ~U1øÍvsÄbW5Ä\x0018Ä®kXI\x0007|ë
\x001bKº !¨c)È^ä±#Ç¾\x001fÂ\x0018ç>¦°sý|×¡­òçãä¥x?a;#4ík1\x001f\x0013¸°2Gñ\x0019\x001aY÷\x0019ó\x001föèicsÚØcÍPujy§\x0008óVáû\x0018mí§·UïÜ\x0001)-Îäò©Îrv$ôÀÁÊù`9lX)³Ú(R­~¸'	ÂàÜ2l\x001eé\x0012D\x0006Tb~úc'Éà¼éí\x0011¹Ò\x001a\x0005½\x0017Æl067ýôzlq¥Ë\x0012Û¸È\x000b(çdî,ã#/³\x0011ËlfG}ùxy§>¨Ûj¿\x001f%l³¸\x001fg\x001dÃ\x000cØðÃÇðå\x000ef{\x001d$¸ßqäi[ÊsØ]þêBÑ\x0011`$Àäo§Y\x001b{\x0002G\x0014©Óóe^`9XK\x000f´:©Æ6È\x0008¿©yCuÆøf;88o\x0012sc\x001cÈ\x001bqÞk2#Õ\x001c\x0018Ì{"\x0010åJ\x0003¤GK\x0010¹»áqiÕÈÐoQ¬bPÂB·êN$UåP \x00179\x0007*\x000eØÛâ+\x00177rõ®ÛÞ¤=\x0018fãCÙ¬8²\x001dookqò\x001b\x001bs!Ç{!\x0018ÑÇß¼HÉI²\x0007\x0007</p><p>eûÆÑ´>"µÓoæ»êXMÏ=Àµ-pªr#æy×noÒÃs}\x0000</p><p>q\x0003*®¶½¯ªKÕq7Wf·ò[öOeø\x001fh28ÞF{ñ\x001d,¹¼HãÈxM±¸­\x001dÍ`È¢0ómßCÍÆö1¬²»cÃ]qO"ÀÌÍmÍ\x000b\x000f\x0010\x0002Lçnm÷\x001b|)\x0007ÈI¯jÏºhßn/\x0017±ýÁ\x00139¬Â:²ø\x0001p\x0010|E7tÜÒøêk\x001eâ]Þ2A\x0004\x0016\x0002\x0017ÄZ=³Ly]å¹\x0012ý]yyyøXs\x0013XýP\x0007qu{\x0017\x000e~>*\x0017p>Îq\x001eû&FãI<Ü[%\x0008¸qwm9w\x000fh~[ËÙ4BnñÌd¯¸\x0008
¸§­5ÝSë\x0016³xÑ\x0004Qª«!,3Ë+|,	Ã`2ô>ÂF\x0017\x0018Û¸çÏõ¥ÛõúVé\x0017²ý*L\\x0019ÜÉ&\x0007cC\x000cqI\x0008@KY<òæ¸DðH\x0012\x001604	\x0005\x0003¤Ib
BÞ$ÂËe:©ÉU2!#çÅâöSL*ýBYÛa]\x00033ðÎ-Âñ"Å&dv{C\x0005½ðÀr1ä'M+/!ýçß®`vÑ\x001b¡×3SÑté\x000c×\x0013¤|²Ét^nðç</p><p>9 çÁ9#¢ zÖ
qåìÙ\x000e
æ|÷]\x001f´Ýà\x0019ïÈâ\x0019Ñã\x0016efñîó;åÏ\x000f\x000c>û\x0015Ð°eäq{Ú=H~«\x001e-çR.¥é,Öà\x0005hÚ%<âQ¹d\x0019çN|å[$\x0006Ç\x00038Å(âíÖ\x0001­4¹Ö\x000fc{&Ù°c-H¥Äk8D$Æc\x001eeåMx0äj{÷i,`Ç¥Gú´DÍ,P\x0005ä\x00120R2W\x0000\x0010}=)@½öTgµXÑbñ\x000c±Ë\x001d\x00132²\x001b\x001b¢qtf6Êö°°¸¸\x0016ZI$¶$î³tm\x001a+\x0015\x000cÄÉ&ä³t\x0006±{Öme-XÝu8r|Y¤Òb±\x000b,+Ï#\x001b£\x0013;Vâ\x0017º\x00068¶\x001eôæ8úÖGZ\x0002'áC+w°»Ã8Ü<{}àÔÊCv«	yiR0åèÙÀ9¾\x0007óÂwYkïÃvÝæ¢âGLq¼¶õ¦®f³ê§=Û_¹	=\x001dóê0E\x0000»7íY\x0016Üjñ}a\x0014Æ²áq·½$à\x001ahî²sôÐhô$lll«ç\x001aq|åÖ\x001b\x0012cÉ±' \x0007çÖ¶l\x000cAV|<\x0012L¹-b4éG©¤I®]yü\x0002´M3RÕ\x0005ôÈn6$(û>Ì|ÍAå=\x0017ÍBäËþö\x0008o@M¡:¬µ\x000eo	\x0000=}ýª=Â ¦Igê^yc5 ,$Bfq ·á£ÞÈØl\x001dÛRðÜl\x001f¤îkK\x0004¥ÙçÒt§\x0016÷\x000f«ôC)9ÀýV\x0000\x0004c\x0018ÅHOÁÍXæ¥áo\x0015ÑÙÄßÑ\x001elG%¬\x0000	\x001aí\x0019,h\x001b\x0001.ëh\x0000\x0000Ù(cFû»µrt.ÒtÝ}\x0015ÒPÃ IáüOñÍk/´Òt&\x0005G\x001e\x0001\x000e^øy\x0011¿îò\x000b0æ\x0000u=ëÌ.»¦µ9çñ\x0002}£\x0006T=E$R<OvB9bîß\x000b2\x001aÄ=¡ã\x001efÎÀ\x001cCIn¶\x0002tp÷\x0011ÛB\x0017Y\x001f²#é,]2»*W\x0001\x0001¿df77¾\x000fsÝ ,8\x0018\x001e#Ñ\x0014aÌ%¡À¡\x000bUâ~³32¡Ê\x000ch\x000c\x0003?Ô:7¿Föe=Âiå$¿¼q\x0000\x0010Öl\x001a6]2H"\x0019b\x0000\x001dIØP\x0013\x0017j8÷\x001dáíá±%Ä&ÄZÌhÈ\x0011²c;Zù\x0016½
y.\x0001ïÒÚ±T¢¾,íMá|*º\x00028\x0000n¾eÉ\x0008\x0000óñ\x0013ü\x0013NcÇ/òö¦Ék6æ|§\x001f\x0000\x001b|ÌÛ@ýë\x001c©O­\x001b»\x000f"LÅíçÝ»¯|wÛ4ÚÈ6ÌÂÞ6\x0018hÔä|¶'á°õ\x0006E[üÓ	g.ëCÁyÚ.å\x0006?Æö½Ú»Ì\x001aE\x0010ù´³Õ Ó£±FñZØò\x0001L=:õìPº\x0008vÍ(EóI5Ô´Uß=Ù\x0019\x0011«\x0017;¬\x0000\x000b	\x0008!	½\x0006oo1,\x0002;îN7'ÒÖ\)7¡«=[.ýR1«DÐ1¶Þ1öÂi£iGy,í&êë¡ä¾\x0012ÄÄ s uþ÷Vüµ\Òd¯©rsµèjô^.²úØ\x000c	ë°\x001euíÒÄ\x0004,k>!êYl×¾\x0001Õ¯C^º"\x0000wRÁN_\x0003Ðò6uÑñ£GéX/{mg0F+\x0014¸ÎÜÇÛÔ×­m¤)b#s·\x0000ç@ê´\x000b|\x00123Ò\x000e)mÒ\x0014°V&ºb«â\x0007Ê²&I	\x001bT°»Ð¿9n\x0000\ñÈI^QéÒ­p'ty¤¥Ù¤üëäj«K¾ç§ñ\x000cWÐ¬¡ôÜgãI>=)îBL´jâ×úé.\x0010P\x0008dò9Ü\x001f¬Úê\x0014üÒÙaj²Ït ¨\x0016Ê¾#úYöòÅ(Â\x0000óA6VcMu»ÛÂ¿:Eã~Î´^Ò­Ä\x001a\x001cÒ(Äs!å>¿e÷Û|ò°d'r¤IYiÙ-k§v\x001fÒO\x0012ìTºðe¦8ø^\x000bá/Ë\x0014v\x0003[\x000b_[\x0007\x0000HT>Úß\x0005»I¤J/ Üòl\x0001¿TcÈø\x0018\x0000£s±è6T\x001fÍ^\x0011é¿³Ý¶`Â1¦\x0000\x0000÷jtvhz³F\x0003Ø/r$\x0001s{AqÄ·Z\x0014Æ¡k$2	VV=<\x000e\x0001Þ	P;\x001bÀüV×7¡¬n(Îÿ\x0000æ2HÜN\ÉHè%·äâT£¨ví\x0007\x0011Û$7VöÝâ$H\x001dË,Ê±`*ó#rÊ9wS·L\x001aÀ\x0000\x000f3ìè¼tn=\x0007µrI=\x0002q\\x0017\x0017ß\x0001.%¬ÈA.»5(ÍìFéS]ú@T\x0016vs:wWWZ8Wð9ûJ¹Ïí±ô÷5è`i\x0007ÀRñÁî\x0004W3j\x000b\x0013Ð\x0015F=¸î¸ãîìË\x0001\x0003'¼\x0002Â´îÒãáÉãºµw\x0013FÜÈÊ£b=o¼\x001ffçabØ\x001c\x000fßaô\x001dÄ¸tL"\x0014àùu\x001aÿ\x0000AûûÇµq\x0017\x0013ë½¡0Æ\x001bA\x001c`i\x0002*äF\x000fè"®N9¼#'¦õ°ß$¸ÄÚÝ\x0019è§vU½÷\x0016Ë;ItxáÆp\x0005Ît&Ì§\x001d)~×ZÄ7\x0010\÷~WHzì_t]ð|\x0002L54¤´¸\x0001¼=í\x001fìá½âö{\x001d®#nþF:8¯jpa©e5bä1húÃeqøgmxB3gan[®ø\x0003rÛnIÉcf%¶\x001bÒ.Ýcv¨gi;SÚYÎNtÏB(\x0017\x0011M\x0017zZÖÖ6É:Z\x0000²MY%:áàV+Õ©®ÑnÍÐã\x0006±!\x0007d$^!Ô×BM23÷\x0010\x00102süÂ¡û\x0005¿\x0014ê(L·U°'s[\x000fµ>´­F-F\x001eaö})\x0019\x0005\x0014çjM;f'µÕf3`ÞÑ³ÀÆOÆìX+cªÍ'²9
\x0007P½Fö7Ëà¤\x001b\x001bgºé£½dä\x001d<\x0014¬X\x000bÈKN¥ó@ÎH\x001e[¯c:OÚ~éF;I°¾`å5#îã8!1¿Þ³vëÖ8ÙYRê1ËLÎßddgo*ÃAç[x¬È\x000bÍ&­r!\ù\x0003æqç^ëXRÀ¯¨ÃGçÀî½\x0008X09ÃÓÞµ^Ô\x001bÅwµÏ\x000bCí¿ï\x0017ûcþpBRÓ/Ý@AâÞ³ìà¼F\x001fúG'=5\x0017üÄþD%m\x0017\x0006 Í,à;ó?</p><p>ÙLE\x0005¸¹¶X\x001a48dkl\¹SÔ?zÙ\x000bÍ,\x001a\x000bR·«÷(ËAí?Lâ\x0006îÓ½IPb@Ë=ò3û*R\\x0007±·µ'-
#Íá²bQuS´`¯â¦m>K{¨IV\x000c¸Ùõ\x000cí%æTA\x0014,¶N±"\x0017Üó?êÿ\x0000«XòÙd\x0005¤îÒ4æçÒUÃ'r|yézRø×«ë´\x0001?À$<PkºS¾m\x001f\x001f\x0005\x0015IÅÑh×\x0016jW\x0006ktÞ%ñ+6Ç¾]²|¶©§bë½\x0003Ûb\x001aû«Rø§(\x0018ã\x0003[=Ryt\x001aOÓ½ì\x0014å¦q\x000c\x001a)5³÷8È<¤yz\x0010*</p><p>H
\x001d</p><p>\x0002XN-vÄ\x0012\x000f´{\x0013\x0003´>Öì;:\x001bÞ[³ÝÆ
2ÌOÙ]ñÐz
!³¸£x}\x001edò\x0002¾+qìïadíX{\x0001\x000c´\x001eã}wÒ4I5¾ãngq~2=j\x000c<KÆ}¤óM²ú¤\x0018<®@_	þ\x001cØ
TQZûøfgÍ\x0005£Äþw}tü^Èvw³;M ã[d_äÃ¿òÜRÚZÞ¯Á6µ>Äµ¦ï5Iæ»uå-\x001clXàõåy6\x0018öR)Ä\x001d~I¹ä>ÁnúO/ó#Ò¦/\x000e\x0006>\x001fÖôÔà#\x001fÉsïp)æ(d¢àÁGÖ `l\x0008\x001e*~Ò{\x0018ÐxE\x0012áíT6áC>\x0003àÈõ\x000båRÐpX!;7Uuvÿ\x0000G/¡h\GÒ\x001f\x0011Ï\x0004\x0019K\x001aw¨üáëûµ(ã!?¡Iz]µ°6Á\x00163ä\x0014|p\x0000©vÆ#Ø</p><p>ö</p><p>Z\x0004Ù\x000fê{ãââ\~°¡¾p\x0001À\x0019Î½´\x0016±	*ã"ÒDJ¦N\x0001Ç\</p><p>É±\x0019\x0016WIF³VÃªÉÐ \x0019nC\x0010\x000c\x0005Æ0=Mg/ÞöI\x0013|\x001avóJ¼K EÄ<¶ìXC\x000eêGëúûÒqLc6\x0012R´¬Ù!aÛ¨#Üz(\x0002NÌn¸_Rg¸2Z´ò¤«\x0016'ì°ô©ÿ\x00006fQ\x001bÒi\x001cÏi£ÉMËÄ\x0018øé¬\x0001ÚCI 8Pê	Ü\x0015bÅâÙ9H>X­hÝÚ%kÅ1õúÜ~lÌsËN£¤)F×_ux§?\x0006q¦~~¬dXû\Ç\x0005¾\x0015ì¸¯nõiÔL\x000fY:'4Y</p><p>sìµ9T\x0002lWÈúæ¡õ\x0016\x0014Þ\">jECÜQÂheÑ_\x0011à'¨ÛÎG%óM×³b´\x000b²©\x0005MÝ¯)W
IÃw\x000bÒ³õ\x0002!^yN1¾\x0000ø×fë"Ð\x0010\x00121i¢\x001cÅ{ÞL\x0016ÆÙ\x001bæ²Ø\x0014zô¤K^\x0017\x0010·{pÒgÄ##À1ÐzÓ£8"÷¬Z	N\x001d(<\x0015í'éNûÎ(SU \x0000(#Ë>ØDBth¦©;:ÎXºÆÄ!mÎGéR3NY²7»ÊÊøâÞ
m</p><p>àÝ²¬Ê\x0013\x000f\x0010\x001fÑXÇ9vÜb74Ù\x000b=f«¥òéi²·j\x001cÙô¥y§Í!$» ¶g»ÝAÈ_cækÒPB\x0017k§tÌ®F[\x001b(°³\x0008]W"X\x0014¼@±\x0003\x0019\x001eÞUç>k
ZW &ß\x000cjPë\x0001ð</p><p>O\x001eL±·ÚQö4áÑ%ë]­9\x0013\x001f<äRü\x0011^ï\x001b¶|oðì\x0000²õ9¥u[Xò>{Ò\x000f¸\x0019÷¬\x0000\x0000ÚÌ¾É¦vw\x001e</p><p>c\x001brñÂÐÅ6²Æ)Ü÷g±àöøV7{,]\x001dò^&¿\x0010èðé\x001dåÔ¤îÊÒ\x0000|.TmëJµäì° iÈqá°÷N}6êYÔÜ\x00009y<Ç@|±I»Á(7MÊBÓ®Î§;Ç8î1áwóø{R¥´6G5\x0014\x0016VÅ)43ZÝ©\x000c{©\x0017£¦|'ØúÐèÈ£ô%A\x0015ºQí\x0002¨Ý~7ÕTÍ'±íB×T[É\x001a.äNÎy\ó`vðþuÚ3»]>)¡úa»°U<×3Åà\x0013E%:h8»¾¾I\x0001²çµî
[½Kv\x000b\x0002¡\x0005bÁ\x001f")¯døü\>\x00072@ë2\x0017
 \x0011E­\x001e#ñS®;Á¥Í=´\x001a\x001b¹#{qð>+0ÒR\x000f\x0015h7õ¥¤9@-bTñ\x0012\x0006Êªq±ô§¼\x001fC<Ò8:¦yp :¹îßï\x001cOÉ\x0014Q¶®6\x0000l\x0000<<e\x00072»´¹æá<Ú¹Eb¸>LMGq\x001cfä÷Í\x0007H-;>­~e)ìl~íÕtî_ß_çKÇ\x0001:¯5Øf×\a<×1:%½¸*f9+Îq£\x001e-ºúT¯j;I\x000bâ\x0011´;V°h«2µÎ\x0013Â¥Æ¸ÕQ\x001b\x001fguü\x0012;Ê\x001aé\x0007z½¯Âëdµ¯v	«êW¼¢âÚBì\x0011\x0018³&GÜ§§Æp^ÙcaA¡á÷dú­\x0007¼#ðy³%ÔÚä\x0006äþdÓ&F<Û\x0001h¡`Fú¡ÍM}«}\x0018Ì0McÝ[Í\x001cAgëÝ»\x0001×`H9ý »¢µÎ\x0003Ûsç²P_\x001b¤s_9º¢<¬n¤³û2éÀsH\x000e\x0000\x0003Î\x0004Ýï/ç¾Àno`((5l8ªÆUÓ?(t\x0019EïØ\x0010¾E[\x0018é¶Çñn\x0012âe0Û¹½\x000e¾W¥1ç°i\x000fÒ9~è5¥~Ný\x001aèéº¾à­§\x0007ñ$º%µµÝ5ÄD*Ì\x0006	\x0005·9÷®AÄäfTÏ£Hs6\x0014	ò]\x001f\x000fï\x001167\x001b! \x0013âkÍ X@¿\x0015¨J¼Gt
ÄAZ\x0016Ê;¨æÁééLXòÆìNý\x0013i"lËÐâ?AJsÜÀe32\x0006/*]©-f·+&âµ¦Òi\x0001õ\x0019V\x001fÎï'1-ú¸=\x0000 \x000bKAzSª\x001d7ò*\x0015Ê67Ç¿µ&M%+m7xJY\x0005Ã»gG!\x001dXùÑ$·I\x0006±Î'èBí»AÓ²Áõç\x0019V_\x00178=\x000eÀS\x0001çIÎ \x0014¬2hÚ\x001eæ\x0010×\x0000ZMQ\x0007À¥½</p><p>î\x000bQ$`;ù{Ro\x0004sê¼e\x0015\x001cöwJÇº¹ñ.Aü6¬\x0001ñ^Õ¤×T±÷ßir²X]!! ,\x0018&í\x0006vùVw²ÆÐâ&Þ ýÔ:clzV\x000eJ\x0003²\x00133l_Q\x000b0\x0019d\x001c­N Æ¸§¤N\x0001&PnT@¸ÆÝ/\x0003.\x000e\x001ffý·È\x0015Ù}\x001fñæbcH@\x0012;S	å®H>Ú\x0015ì®d'¹.Çv¦ôN
3·^#Ó!XRóTaKÇ\x001b¶=ÙýÖMrX{i\x0003C\x0004\x0007"æµÇâEzêSöS</p><p>g\x0017\x0018èz\æ4=ÊUÙp?s\x0018¿"æö\x0003CÝIýWj\x000f~º\3^«\x0006Y[\x000cA\x0003\x0003\x0001\\x0001Ðc\x0003ÒµãÆ'3\x000còd\x0006Ã\x001f =ÕJ`pØDF\x0000À#"E¤\x001b÷Ý¯O\x00165¢+H°+Üoßv±un"ºÖnÚúâN{¦us'*\x0012ã\x0007\x0000»`yR9\x001cB\Lï6òAÕ@n*¶\x0000\x000e	x0Ù\x0018\x0001\x0015dìn÷&úø¤\x0019Ä\x000cga°\x0004\x0001gæ77Õwküi¨ñ-âj\x00177\x000c×q	*¸îÂA=zÓÌ¾3>\¢i\x001eKÛ@8\x0000Ò+qó\x0003V\x00182\x001cXÌ,`\x000cuÛI.\x0006Å\x001fOV.)Ý
-\x00004Ý´Û¾8ô¤\x000f\x0013w]××|±ÏÜÅÏ'_~¾yÎõ±~Ý³´éï<¯DwüÕ\x000c;!«WwçZä¯ç#åXüû±~\x001a_\x000bQÎÇZ¯</p><p>MqqgpÉ5Ð"weI\x0019òI92+nIÎFþõ\x0011Ç'ÄsÇçüâ@q=\x00089l9<+\x001f1¬d\x0005±îÀ	h\x001d?\x0000µ{/\x0014ïk\x0008i¶`\x000eGÁ6øc_¿à{{§IÜÜ\x0005e\x000fÈ³lF\x001dY</p><p>ÇñI0_ÞDí.¢.çù@%\x0017\x0010gw0ÔÛ\x0006¬·qæÒ</p><p>Cî}AÆÈ$Ç.D.\x001b5~\x001a¿}NÎáá»¤u\x000b.ÜÌ\x00191ÈÀ¶ü¥yAÆ\x0006Âãqq¤2±Ä8I\x0015½Ür÷R÷'ãåÄ Ìh\x0001 ÞÚE</p><p>7`×[´çî¶±¥í\x000e`ª\x0006ö¡BØÛÍ<8·\x000e(ã+w³¹»"	\x0001\x000e±ÆS±RÈ¡¹OB¹Ã
ELåö³'%¥~Ç\x001b\x0000</p><p>Áì¶\x0006\x000bÄj\x001bç9ô|@q"üút^\x000cØbÝáÔ:\x0013Wõt_]ðÁ°\x001dómáùùü¿\x001aÞ½\x001fpWºC !ºKc¾¥ÜÝì­ù.Wé+´l¿$ÙÔ\x001d%tÓÉ¾Òwò¯5\x0007,¦Cgª¹³è~5Þ)WËH®ðtÛá^±Bívb9\x000b=Vô\x000ezô¡bPÜ7¬AYÚ\x0010ó
óÉ&Èr\x0001Üz×ÖE\x000b¶XQý±A+\x0014,n^^k+¤/¨nÌwMöYN[Ëá^Ð\x000b"ëBQÛ¸\x0000\x000cz\x0003Xë\x0008Òòø#\x0018ñWk$/¸£2\x0011±\x001f\x001a-&J\x0017d=:ô \x000b@BéTï·V\x0018\x001b|ú×º´ìBÿÔ±úö£.á·µèâeò?</p><p>ÙâhqÜÒÔ$I¥òâ\x0008\x001b/Îs[^!ß`)¿¥ÉÅW,'µ-8\x001eÒxú\x0015\x0000íìv§®î[ÏÖ÷$KõmKF1`6âù+ \x0001­¿i7ô)Ú×µ»+~ækõB<R$Q¯Ç</p><p>>ýª\x001eF´î\x0005\x000f2¥\x001bâ7*\x0016y\x0004¶# ²vöÑ»ÔÀmù¤·i$%ÙÎ¼o$ÝçÞ¨Ï¸</p><p>ç¿®\x001aNwR</p><p>Æç\x001bz/¦jS\x001b0Bj½ê\x0002PàëRØ¹È®V(×Ãàx>©ÃÝÇnÖáN\x0019p\x0001'Ì:æ½ËÈyÚ¡Ãi=ÞîÔhn	>íÓëë¢Uäo³æ=j$X^º\x0010SKX¶úzHÄZÄ\x000fÖÆ3ëY\x00123O%Jp¤-§ÂÒÊøD\x0019,N\x0005$M§wAz\x0001w%\x001fk:Ô×ë\x001fÕ×ºÉ²òzí¿Ê¶=÷H?t¼mmÓ¯å¾ý\x0002VàÎ\x000c}cTLÎò	\x001bÄ\x0006Êª\x0001-Ëï^Ë57ö\x0016ê+ÇI©¡´6ê9|mm»µ</p><p>ª\x0015T\x0000=ô¨2Tç$Ù'\êÀ7w\x0011\x001fÂcÓ\x001eÔ«cµè6\x0006\x0000,õåHR_²¹Ç\x001euïvW§d. »Hî)õ\x001d~úð·Å&\S¨'v;µ0iÂÇXáæ\x0008q\x0004\x001d$\x001ei\x001f-µ
n	àò[v6T$edb0\x0019pz©Þía\x0004k¡	ÜótJu\x000ewvA-c¨A:#ÃæªÀÏÄÜ8¬·úÅíÜ¤þ¯Ê g`IÉ5-,r|Æ5£È\x0004Ó\x001b"G\x000f[yÄx£r\x000cqÇ\x0018\x0002¨1üþj_5+UÀ»ÐÊÛ~5\x0014\x001a<\x0002\ÈáÔüTGÊ]àßòqÿ\x0000UK<)Çrq\x0002\x0004i_ë*<KÌ@8ý!ì\x000fºtUìN¡»4|©Þ
ÿ\x0000'\x001fõSu¥eï\x000b×\x000czÑÝÐNu\x0015ÉpèÝÿ\x0000ÁÇýUùf)\x001cüÍa¤#QX|¥Þ
ÿ\x0000'\x001fõW\ºµÌcgrO1 \x0000°ÖQò{þN?ê®ï¯Ü(Ïzþþ#óJöÊ>Rï\x0006ÿ\x0000ú«¢]vXFò¿û£^èµî²;Á¿äãþªnGÅ·WRwq»³{1ÇÏÒîhYF²ï^\x0005ÓÉÇýTÄ<}ýKÄeº¹9ÀT$o%QÔÀu;W¬_ |º9Ê\x001cz7üÕP³Ú6¹­ÉÌ×RÚ[Ò(÷¬?ÞTèDÖô´ÅÓ¹ÝHY¢:6üã¿¸~2Ö¯\x0000X.î\x0017Ë¦s~»jÀµ£ Iºgô'âùK¼\x001bþN?ê§v©ê4VÍrÎÇv271Æäã4yÐK\x0007¸íeyòx7üÕSRê\x0017P(\x001dô02äÍ4 k#Å\x001f)wÉÇýUòuË¤Û½÷F½Ò\x0012B»Á¿äãþªàq\x0005Ïú«çøÆ½Ð\x0017ºÊ>Rï\x0006ÿ\x0000ú«¡õÛ¡¿|ÿ\x0000îy§Éy¨£å.ðoù8ÿ\x0000ª
×;c9c¹õ¥)bBNG	q6I$lM}M¦Ï\x0019ém¨Z±Eæ\x0001d\x001e~ãæ?\x001cVlu\x0014ÞfØH(~×K#\x0012Oíþ*]Å2\x0002Â\x0016\x0017\x0017¶¡-þHm®Tó\x0006n®1º¨ò-âòòß\x0004+à×zâÁæ¡åLsm\x0000ªK</p><p>V1Õ .i\x0014hÑ\x001ecØ«D=¡Øq\x0001ú®½\x0008èV\$\x001c`c¥lÄs\x0006¨¹x'Ì³úÝTÿ\x0000Üc©1I»Ë~0çö)TêcG·U³P«¨ìN=°MCè2\x001dýéÐªmÇ\x0013~>k?G×\x0018»¹ï\x0019vå@\x0002ç4m°NG¬¼}^Â½»©"ÞCv\x0007.\x0015=·&QjÅÑ¤i8
½¿\x000cF\\x0010³¿V;=?¦¥çÉbÑÝïÕ9\x0017Hh\x0002}3§Zw \x000f°2c\x001cÃãò¦ò`G\x000b 8ó=Rqðè\x0019!¬hÛ9àzÇõ¤®N)z«\x0016=ªBF	öpkÅ%Iúk_¬Iö}+\x001bXéBÃº¾T\x001dÔC,z\x0001Ð{@\x0016±pðY.½/Ok5æ¸nñó\x001eCáY=×Éd\x0002Íä\x001eA*=¹ºÝö_O<{Ö6¼Ói%s\x0004l¡\x0014aA\x001f\x0001bZòð	:uõ¢×´ÄÖóG[r\x0004§eß\x0014¬D^é	\G$ë\x001c´8\x0017Ùh;×ÆáÑù>Ò8</p><p>õGs¶O©¥&:ÉÈud<=Ä¤ÑªÛ¦ÞÄ­\x0014%\Ès#\x001e>Êjoi4Ù!êz¬3Íõwl?@½3Jµ·ºÁä;d¨cªè×ÐÐé\x0011ðç?tYdyæ2\x0017ìz/\x001a\x000b\x0012ód:jÕÐ\x0000(Rqé\x0017Ü**\x000er7Çøé\x0017¶ÒÍ6\x0015ñ«ë+\x0013ªÌæG]5ñ\x0011!é^2;^8©¼®)\x001cQK#ß\x001e;KbkKciqqk\x0001Ù ¸@æâIÜ° ·¹ÕKw¿\P\x000eX\x000f*ÉÔÔÚvU¾ÛØÚÒôö²\/"· èÌ:ãÚA\x0004¤\x0001_RÙ­º\x0005\x000b\x001få½\x0016JÇI^$I^`VBÖT]ÒO*a`ÀßrFøö÷£Ú@\Ç£ª±fQÌãÄþdz</p><p>\x000c$K\x0016z$Þ½xUÿ\x0000&ÆZ G6\x0001Æ~t»A>²Vâþo¾õàl!M\x000e1\x001aã \x0003rO­"÷\x0017\x0015$¨ÙI÷z\x001cz£¬\x0005R7\x0019ò÷¥#°PM;­í
yhçÍ7´.![»¦·TfdÏ¨ÀÚ:/VÊy\x001c¥ßXÐã[ò\x001d~	Ý}¨^Ú\x0006xãï0< uüiZÓÍ%$h³\¯©ý</p><p>\x0000ºÒu;¶ý9¡$yÉõÇJØc¦ý*-¹Z\x0014÷{\x0013*3NÜ[÷\x0000{:O®ÎtÍf8ûÝAÔ,¾.FÉÛ>gI\x0019Ù½\x0014³e2\x000bIqOê¨5mÌ+Ý×â¤¹oSÃjÎä\x0002J¡ÝA=H\x001eYó¨Zê¼«Ûu¼c"lvb¾Wº\x0008ç²"âckßóÖ@º,Ð¾As\x0015¢ð¯K­z\x0019J\x0011u__-¸\x0011ÇôUëñ>Õà²½ºBïab£¼l±ý\x0011^\x0001|dÒ\x00125ÕÛHyP|ÏJSBÃR\x00126£|°\x001c3\x0017Ô]þúU+\x0012W ZI¿½]</0ñ\x001dÈ\x001eBdeÜ\x000e /@´/\x0016,Ä­¬O3\x0000\x0013¿Ç¥-Ü×2\x0007µbé\x0000NzÐöú9®7nøÒádÔOsm\x001e\x001b¹ÎYñäÞ9-S7>+ÆÛÎéû2\x0019\x000fwë<ÔE\x0001<|ÊuKÇ9m\x0002\x0006\x0002óg\x0003ËÊ¢>q²\x001aÙD7ÿ\x0000G5VõÎ\x0017µÒ§[ËÎïPÏ2(\x0003Ðç­m8³¸´\x0006ºî¢ÒÒmO6wÈÐÖ°4ÑæIò$rO\x001e\x0002Õ%×tçîf~r9ßËze\x0010i\x0005ªbõ\x0004Ó\x00062O½ÖÐ4w7[óóRfkõV]út\x0015\x000eâJñ!H	!rNXô\x0014Õ*Ìâ­\x0016-nÒx¦\x0000¼BCåøÓ¤1¸\x0011ÑEeGa/\x000cÛ¼\x0008?\x0005Aâ»AÔ#\x000f\x0010h_\x0002'\x001b\x00126Û×5ÐÚá36)¾\x000eOB·cXHqk\x001c,¼n\x0007ðW·GÖÿ\x0000([Ç$¨`×-	êµ¡äÅ¥Æ¬ù­ëG¡ \x0010@&º>{®«¤³\[<Ê\x0006\x000bG#.G¡\x0000àÒL\x001d\x0013</p><p>-6	ø©l\x000e9Ã\x0018óK\x0010wÎîå|wíÐáiV.Ñµ4\x0004\x000b©Y±ç#Mbb\x001e	Ïzï\x0012°Éã\x0019\x0019FåÒow!ï
WoÕ½uI/Ú\x000e¥pá^òà\x0012q+~ã^ÇI÷äõ+Ün3n)\x001f\x001eäýíÝÞäQ>¦ëb|6ä­|ó§{s#¾<Ý\x001dü·&>Å¢V\x0019ü[#r%R9\x0019$|\x000f"òiVNÔ8ïRà÷2Ã\x0000î_ì±\x0004Ójáø¬Nþ</p><p>=ùb7QNxf\x0004yfý'ÂãËÍ9øJÒÞþ\x0018õ\x000bY¦u\x0007c\x0007ÓzK/Ô:FÀ'5«u\x00157ÞÉhº\x0004Å\x001a\x0007¨Oÿ\x0000ÊO¨lØHÇLTi\x0014»LÖx½5\x0008}O­b²-BèºHb\x0000)ËÊÒz)	\x0014¨ÔVHðT\x0003ÊÄí ì°¥ï$6³oÃÓ¥?8?6\x0017|Ô\x001apØ\ñuÉf
l\x0011\x0017\x0002G!V}«»¼{Ù9\x0014\x0000	ÜôÀþsXò	4.8
KD±3ééÞ:có¤ÃÏ\x001f\x000eµì\x0005®u97 Æ9'¸±¶G¼é\x0004Öª°<ý¿Ù\x000c¹¶Rº=íÛe¥Ø!÷ÏZu0°Öò\x001c¼ÖqÛ gN\x001dQ³æG`\x001bæI²wå~\x001d\x0002ÃÔ4i\x001eåf¼·,Ñ·æÝ÷Aü\yük\x0008å\x0015I¸D&mÑ´º8\x000b\x001b\x000eÅ>m`æ0ØVÏP§8ö¦¤Ræ6LÑc$d¨sëI»\x0019axÿ\x0000XHÓfaâ\x0007¦\x000f#ºõñØB8«¥à+yõ=.^DR\x001aKVñFåü¾j~\x0015)\x0004Ýá\x000cp¿4ÍëgÃ¹ÎlSmÉ¢OÂh\x0000Ç'\x0001ç¸\x001cuh\x001cM\x000f\x0010B²:<.Ã\x0005\x0018t8ß\x0015ð÷f²ðð &gvâ\x0001\x00061ÈùÜ½©8ne=)°Iræ¡\x00147Nõ+>hY\x0011\x000f¬WÛÔ×\HÚ|:[¨h[ªÈªè~*À\x0011ª·\x000eâ¹\x001c1â\idãâñ»âÂÓô¦í×d\x0005Æë§Y\x001fâÁ\x0018ý(\x000e+*[ä^¸ì{\x000e!ïÊßÎy_vpâ>j[ =Êã?\x000cV%å\x0001)ýø÷üÿ\x00007\x0012ÿ\x0000Y/7d?§&Úelu6Ñ\x001c|2´²VD¦òúOãìxo».vÿ\x00005á+=\D\x0004`w`\x0000ª\x0006\x0000\x001eÀt\x0014 4p­Âçy\x0019\x000fÉq|sãeÎqq'Ä\x0012JÃÒmâ¾ò\x0019\õê§çY½Ô²\x001e·$ÙcjÚ¿ä ÒLÊ`Ø\x0003¿1o@<ý«60¿`7G.iHã/4\x0012u§oÆ1Jfò¸u(à1Y93â¼.\x0007y63±H.Òl\x0007</p><p>-p¯qú\x0013í%µU&P¸\x0001ØøóÎ)9{òY°ÍîÔoCwên%\x0005\x0002<ñ¹\x0003s½6i!xæx¤\x0003Gº[ÂeLÆÇ\x0018S¶ÔåÀkÀR¯aa£cÚ¯4á,Ç\x001cÇ\x0000<zR`a%$º§ä¶c\x001b\x001f\x0017^_oZËU	&N#h\x0008ÝsÏÆlw¹Ùzd¤®½¿\x0015¢Gy{\x000cÒj\x000e¤É²\x0018ÎyGÇ\x001dk9\\x0018E$ËÈKÌX\x0008Ñ|ê®~ÁÑ}h|\x000fk Æ·</p><p>;ËiÇ?²±$¿nCÉ`Æ1ÓmÉ½\x001a6\x001by~tæ\x0012\x0013Ïá\x0003îùS\x001eÚÎºÐÉ\x0014\x0016eBAÇEøu\x000c%ûK\x0002êN#P$(_ò\x000b\x0007PçÖ@Ï3\x0000?4¬N\x0006}«	 nCK\x001eÐZyºg\x000b2\x0018Xö4óiÜ/\x0018/n^eIÚUæÃ±å>@ùhÖ6!¡\x00006\x0000l\x0012ØÐ¶\x00160\x0006´</p><p>\x0000l\x0002@§ê\x0002(þÚLTÙ	Ä÷÷\x001a\x0016ÖÌ#Áïdó\x0003ÑG©§\x0011&Ï¹!3¬Rq\x0019hÜôä:(÷JìæÃ¯#¼¶-Î¤÷Ç=æGZvsÝ'ýÊ6\x0018\×]ê\çÊÝ.ä
Ð{\x0013¹µTÓ\x000b)[ÀÞ.nÌ|FêóR"DÆµy¬©¯ÞýC(å\x0018\x0007Ôzô£E,Ý¾ë\x0002\x0013\x001b´kÔî­\x0010\x0004;»µ·êçÌÓÌy[\x0019²É!èDà7>T:$».Ì-å\x0016Â|Æ°8wæÃ\x0019O^Vòåö\x0014òN$wÓîLnyðNÙæ\x0017\x0010\x0007¬ÒÞ\Û\x0002¦[ÍFÏJQ!</p><p>9FqÐ\x0001ä\x0000ô¨0\x001cò¦Y\x001e\x001c7÷¨£ZÐcã;¥¸\x00058\x0000\x0019JBîB«}¬g|tÞ\x00111§Qh.åd\x000bOYÄ¦3\x0013^ñ\x00196X\x001cCIª²ÐhÑÈcÜ\x001a=?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Escape-Game-Avalanche](https://preventionhiver.sports.gouv.fr/Escape-Game-Avalanche)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Presse-Contact](https://preventionhiver.sports.gouv.fr/Presse-Contact)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-](https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://player.vimeo.com/api/player.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Espaces-prevention](https://preventionhiver.sports.gouv.fr/Espaces-prevention)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Mentions-legales-et-donnees-personnelles](https://preventionhiver.sports.gouv.fr/Mentions-legales-et-donnees-personnelles)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Jeux-educatifs](https://preventionhiver.sports.gouv.fr/Jeux-educatifs)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://player.vimeo.com/api/player.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Pied-de-page](https://preventionhiver.sports.gouv.fr/Pied-de-page)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Conseils](https://preventionhiver.sports.gouv.fr/Conseils)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Jeux-educatifs](https://preventionhiver.sports.gouv.fr/Jeux-educatifs)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Outils-de-communication](https://preventionhiver.sports.gouv.fr/Outils-de-communication)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602)
  
  
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
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Menu-BAS-](https://preventionhiver.sports.gouv.fr/-Menu-BAS-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Activites-aeriennes-](https://preventionhiver.sports.gouv.fr/-Activites-aeriennes-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-](https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr](https://preventionhiver.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Mentions-legales-et-donnees-personnelles](https://preventionhiver.sports.gouv.fr/Mentions-legales-et-donnees-personnelles)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-](https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/](https://preventionhiver.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Avant-une-sortie-](https://preventionhiver.sports.gouv.fr/-Avant-une-sortie-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Menu-cote-](https://preventionhiver.sports.gouv.fr/-Menu-cote-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Equipement-](https://preventionhiver.sports.gouv.fr/-Equipement-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Sliders-](https://preventionhiver.sports.gouv.fr/-Sliders-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
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

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr](https://preventionhiver.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/robots.txt](https://preventionhiver.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-peh-ete.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/](https://preventionhiver.sports.gouv.fr/)
  
  
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
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Pied-de-page](https://preventionhiver.sports.gouv.fr/Pied-de-page)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Mentions-legales-et-donnees-personnelles](https://preventionhiver.sports.gouv.fr/Mentions-legales-et-donnees-personnelles)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Jeux-educatifs](https://preventionhiver.sports.gouv.fr/Jeux-educatifs)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Jeux-educatifs](https://preventionhiver.sports.gouv.fr/Jeux-educatifs)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://player.vimeo.com/api/player.js`
  
  
  * Evidence: `<script src="https://player.vimeo.com/api/player.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Espaces-prevention](https://preventionhiver.sports.gouv.fr/Espaces-prevention)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Escape-Game-Avalanche](https://preventionhiver.sports.gouv.fr/Escape-Game-Avalanche)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-](https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://player.vimeo.com/api/player.js`
  
  
  * Evidence: `<script src="https://player.vimeo.com/api/player.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Outils-de-communication](https://preventionhiver.sports.gouv.fr/Outils-de-communication)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Conseils](https://preventionhiver.sports.gouv.fr/Conseils)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Presse-Contact](https://preventionhiver.sports.gouv.fr/Presse-Contact)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://s7.addthis.com/js/250/addthis_widget.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr](https://preventionhiver.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/](https://preventionhiver.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1609938602](https://preventionhiver.sports.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/ajaxCallback.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/ajaxCallback.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-03756a95.js?1612274732](https://preventionhiver.sports.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-03756a95.js?1612274732)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1609938602](https://preventionhiver.sports.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1609938602)
  
  
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
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Avant-une-sortie-](https://preventionhiver.sports.gouv.fr/-Avant-une-sortie-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-](https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Menu-cote-](https://preventionhiver.sports.gouv.fr/-Menu-cote-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Rubrique-1-](https://preventionhiver.sports.gouv.fr/-Rubrique-1-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/](https://preventionhiver.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Activites-aeriennes-](https://preventionhiver.sports.gouv.fr/-Activites-aeriennes-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Menu-BAS-](https://preventionhiver.sports.gouv.fr/-Menu-BAS-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-](https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Sliders-](https://preventionhiver.sports.gouv.fr/-Sliders-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr](https://preventionhiver.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Equipement-](https://preventionhiver.sports.gouv.fr/-Equipement-)
  
  
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
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/sitemap.xml](https://preventionhiver.sports.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Rubrique-1-](https://preventionhiver.sports.gouv.fr/-Rubrique-1-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr](https://preventionhiver.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/](https://preventionhiver.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Avant-une-sortie-](https://preventionhiver.sports.gouv.fr/-Avant-une-sortie-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Menu-BAS-](https://preventionhiver.sports.gouv.fr/-Menu-BAS-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-](https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Menu-cote-](https://preventionhiver.sports.gouv.fr/-Menu-cote-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/robots.txt](https://preventionhiver.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-](https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Sliders-](https://preventionhiver.sports.gouv.fr/-Sliders-)
  
  
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
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Skizzz-game,38](https://preventionhiver.sports.gouv.fr/Skizzz-game,38)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://i4d.com.fr/SkizzzGame/iframed?width=760`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Eco-Responsabilite](https://preventionhiver.sports.gouv.fr/Eco-Responsabilite)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/widget/jukebox?list[]=%2Fplaylist%2Fx1wo8r_Mountain-Riders_billy-et-willy%2F1&skin=seamless&autoplay=0&automute=0&info=1`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Videos](https://preventionhiver.sports.gouv.fr/Videos)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.wat.tv/embedframe/609441chuPP3r12961794`
  
  
  
  
Instances: 3
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=iframe src=http://i4d.com.fr/SkizzzGame/iframed?width=760</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/IMG/pdf/testez_votre_niveau_d_activite_physique.pdf](https://preventionhiver.sports.gouv.fr/IMG/pdf/testez_votre_niveau_d_activite_physique.pdf)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Memento-basse-definition](https://preventionhiver.sports.gouv.fr/Memento-basse-definition)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/pdf/mementopreventionhiver2019_esp`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Hors-piste](https://preventionhiver.sports.gouv.fr/Hors-piste)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/Adrenaline/Ski-freeride/Actualites/Comment-comprendre-et-gerer-les-risques-en-hors-piste/882139`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Conseils](https://preventionhiver.sports.gouv.fr/Conseils)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/pdf/preventionhiver2020_3conseils_a3_v5_gb`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Avant-une-sortie-](https://preventionhiver.sports.gouv.fr/-Avant-une-sortie-)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/pdf/preventionhiver2019_fichesactivitenordique-2`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Videos](https://preventionhiver.sports.gouv.fr/Videos)
  
  
  * Method: `GET`
  
  
  * Evidence: `tv/embedframe/609441chuPP3r12961794`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Preparez-vous](https://preventionhiver.sports.gouv.fr/Preparez-vous)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/1-preparationphysique700`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Outils-de-communication](https://preventionhiver.sports.gouv.fr/Outils-de-communication)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/pdf/preventionhiver2020_3conseils_a3_v5_1-2`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Presse-Contact](https://preventionhiver.sports.gouv.fr/Presse-Contact)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/pdf/20191218_cpcampagnenationalepreventionhiver`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/Jeux-educatifs](https://preventionhiver.sports.gouv.fr/Jeux-educatifs)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/doc/quizz_enfant_anglais-2`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Activites-aeriennes-](https://preventionhiver.sports.gouv.fr/-Activites-aeriennes-)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/vignette_qualite_location-2`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-](https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/1-preparationphysique700`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-](https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/doc/quizz_enfant_anglais-2`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p> ������鞞�)��ޞب�\x0018�z����޲</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/squelettes/prevhiver/plugins/FlexSlider/flexslider.less](https://preventionhiver.sports.gouv.fr/squelettes/prevhiver/plugins/FlexSlider/flexslider.less)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602](https://preventionhiver.sports.gouv.fr/prive/javascript/jquery.form.js?1609938602)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
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
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Avant-une-sortie-](https://preventionhiver.sports.gouv.fr/-Avant-une-sortie-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="fb_share">FB</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Rubrique-1-](https://preventionhiver.sports.gouv.fr/-Rubrique-1-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type='text/javascript'>/*<![CDATA[*/(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement);/*]]>*/</script>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Equipement-](https://preventionhiver.sports.gouv.fr/-Equipement-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="fb_share">FB</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr](https://preventionhiver.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="Partenaires" target="_self"><ul class="liste_sponsors">
		<li>
		<!--
<span class='spip_document_208 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/adsp-3.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_5 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/anena.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_6 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/anmsm.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_146 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo-association-rmcbfm-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_147 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_ajila.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_175 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_chamoniarde-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_103 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/decathlon.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
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
<span class='spip_document_8 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/esf.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_94 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoffm.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_10 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_ffs.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_9 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/fnssds.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_12 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_groupe_cmjn-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_13 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/maif_logo_prevention_rv90.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_102 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/meteofrance-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_15 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/nordic.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_149 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_snam_mountain_leader.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_148 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_usc.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_17 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/wedze_logo.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_234 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/code39.jpg' alt="" title="" class="ajustable" /><!-- </span> --></li>
	</ul>
</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-](https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="fb_share">FB</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Sliders-](https://preventionhiver.sports.gouv.fr/-Sliders-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="fb_share">FB</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Activites-aeriennes-](https://preventionhiver.sports.gouv.fr/-Activites-aeriennes-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="fb_share">FB</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/](https://preventionhiver.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="Partenaires" target="_self"><ul class="liste_sponsors">
		<li>
		<!--
<span class='spip_document_208 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/adsp-3.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_5 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/anena.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_6 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/anmsm.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_146 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo-association-rmcbfm-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_147 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_ajila.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_175 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_chamoniarde-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_103 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/decathlon.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
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
<span class='spip_document_8 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/esf.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_94 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logoffm.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_10 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_ffs.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_9 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/fnssds.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_12 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_groupe_cmjn-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_13 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/maif_logo_prevention_rv90.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_102 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/meteofrance-2.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_15 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/nordic.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_149 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_snam_mountain_leader.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_148 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/logo_usc.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_18 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/gif/separateur.gif' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_17 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/wedze_logo.jpg' alt="" title="" class="ajustable" /><!-- </span> --><!--
<span class='spip_document_234 spip_documents spip_documents_left'
 style='float:left;'>
-->
<img src='IMG/jpg/code39.jpg' alt="" title="" class="ajustable" /><!-- </span> --></li>
	</ul>
</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Menu-BAS-](https://preventionhiver.sports.gouv.fr/-Menu-BAS-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="fb_share">FB</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-](https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="fb_share">FB</a>`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Menu-cote-](https://preventionhiver.sports.gouv.fr/-Menu-cote-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="fb_share">FB</a>`
  
  
  
  
Instances: 11
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/robots.txt](https://preventionhiver.sports.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Avant-une-sortie-](https://preventionhiver.sports.gouv.fr/-Avant-une-sortie-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Menu-cote-](https://preventionhiver.sports.gouv.fr/-Menu-cote-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Rubrique-1-](https://preventionhiver.sports.gouv.fr/-Rubrique-1-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Sliders-](https://preventionhiver.sports.gouv.fr/-Sliders-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/sitemap.xml](https://preventionhiver.sports.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Menu-BAS-](https://preventionhiver.sports.gouv.fr/-Menu-BAS-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-](https://preventionhiver.sports.gouv.fr/-Pour-les-enfants-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr](https://preventionhiver.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-](https://preventionhiver.sports.gouv.fr/-Activites-aquatiques-)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/](https://preventionhiver.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/](https://preventionhiver.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1612274732`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/](https://preventionhiver.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1608728774`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/](https://preventionhiver.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1580112946`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/](https://preventionhiver.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `631330826`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/](https://preventionhiver.sports.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1609938602`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1612274732, which evaluates to: 2021-02-02 14:05:32</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionhiver.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionhiver.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionhiver.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionhiver.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://preventionhiver.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://preventionhiver.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
Instances: 5
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://preventionhiver.sports.gouv.fr/spip.php?page=recherche&recherche=ZAP</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [value] attribute </p><p></p><p>The user input found was:</p><p>page=recherche</p><p></p><p>The user-controlled value was:</p><p>recherche</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
