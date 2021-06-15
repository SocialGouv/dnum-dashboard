
# ZAP Scanning Report

Generated on Tue, 15 Jun 2021 10:14:58


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 6 |
| Low | 9 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 9 | 
| CSP: Wildcard Directive | Medium | 5 | 
| Reverse Tabnabbing | Medium | 11 | 
| Source Code Disclosure - Perl | Medium | 4 | 
| Source Code Disclosure - PHP | Medium | 2 | 
| Sub Resource Integrity Attribute Missing | Medium | 4 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 10 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 9 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 4 | 
| CSP: Notices | Low | 5 | 
| Dangerous JS Functions | Low | 10 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 9 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 9 | 
| Information Disclosure - Suspicious Comments | Informational | 19 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 7 | 
| Storable and Cacheable Content | Informational | 4 | 
| Timestamp Disclosure - Unix | Informational | 15 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 8 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://www.agencedusport.fr/IMG/pdf/2021_guide_le_compte_asso_faire_une_demande_fonds_territorial_de_solidarite.pdf](https://www.agencedusport.fr/IMG/pdf/2021_guide_le_compte_asso_faire_une_demande_fonds_territorial_de_solidarite.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `503503503503`
  
  
  
  
* URL: [https://www.agencedusport.fr/IMG/pdf/agence_du_sport_-_soutien_aux_federations.pdf](https://www.agencedusport.fr/IMG/pdf/agence_du_sport_-_soutien_aux_federations.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `578577206811`
  
  
  
  
* URL: [https://www.agencedusport.fr/IMG/pdf/agence_du_sport_-_soutien_aux_federations.pdf](https://www.agencedusport.fr/IMG/pdf/agence_du_sport_-_soutien_aux_federations.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `4338555654986320`
  
  
  
  
* URL: [https://www.agencedusport.fr/IMG/pdf/2021_guide_le_compte_asso_faire_une_demande_emploi.pdf](https://www.agencedusport.fr/IMG/pdf/2021_guide_le_compte_asso_faire_une_demande_emploi.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `503503503503`
  
  
  
  
* URL: [https://www.agencedusport.fr/IMG/pdf/accompagnement_athletes_vf.pdf](https://www.agencedusport.fr/IMG/pdf/accompagnement_athletes_vf.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `4338555654986320`
  
  
  
  
* URL: [https://www.agencedusport.fr/IMG/pdf/2021_guide_le_compte_asso_completer_les_informations_administratives.pdf](https://www.agencedusport.fr/IMG/pdf/2021_guide_le_compte_asso_completer_les_informations_administratives.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `503503503503`
  
  
  
  
* URL: [https://www.agencedusport.fr/IMG/pdf/34871_connecting_digital_with_sport_final_v3.pdf](https://www.agencedusport.fr/IMG/pdf/34871_connecting_digital_with_sport_final_v3.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `578577206811`
  
  
  
  
* URL: [https://www.agencedusport.fr/IMG/pdf/accompagnement_athletes_vf.pdf](https://www.agencedusport.fr/IMG/pdf/accompagnement_athletes_vf.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `578577206811`
  
  
  
  
* URL: [https://www.agencedusport.fr/IMG/pdf/2021_guide_le_compte_asso_faire_une_demande_aa-jan.pdf](https://www.agencedusport.fr/IMG/pdf/2021_guide_le_compte_asso_faire_une_demande_aa-jan.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `503503503503`
  
  
  
  
Instances: 9
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 503503</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>script-src, script-src-elem, script-src-attr, style-src, style-src-elem, style-src-attr, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, prefetch-src, form-action</p><p></p><p>The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://www.agencedusport.fr/ecrire/](https://www.agencedusport.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.agencedusport.fr/Organigramme-254](https://www.agencedusport.fr/Organigramme-254)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.agencedusport.fr](https://www.agencedusport.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-253](https://www.agencedusport.fr/Presentation-253)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://www.agencedusport.fr/Chiffres-Cles-256](https://www.agencedusport.fr/Chiffres-Cles-256)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.mozilla.org/firefox/new/?scene=2#download-fx" target="_blank">Firefox</a>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Ambition-Bleue-332](https://www.agencedusport.fr/Ambition-Bleue-332)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.mozilla.org/firefox/new/?scene=2#download-fx" target="_blank">Firefox</a>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Le-programme-ORfevre-bras-de-levier-des-projets-de-performance](https://www.agencedusport.fr/Le-programme-ORfevre-bras-de-levier-des-projets-de-performance)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.mozilla.org/firefox/new/?scene=2#download-fx" target="_blank">Firefox</a>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Organigramme-254](https://www.agencedusport.fr/Organigramme-254)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.mozilla.org/firefox/new/?scene=2#download-fx" target="_blank">Firefox</a>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-259](https://www.agencedusport.fr/Presentation-259)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.mozilla.org/firefox/new/?scene=2#download-fx" target="_blank">Firefox</a>`
  
  
  
  
* URL: [https://www.agencedusport.fr](https://www.agencedusport.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.mozilla.org/firefox/new/?scene=2#download-fx" target="_blank">Firefox</a>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Budget-2019](https://www.agencedusport.fr/Budget-2019)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.mozilla.org/firefox/new/?scene=2#download-fx" target="_blank">Firefox</a>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Subventions-associations-263](https://www.agencedusport.fr/Subventions-associations-263)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.mozilla.org/firefox/new/?scene=2#download-fx" target="_blank">Firefox</a>`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.mozilla.org/firefox/new/?scene=2#download-fx" target="_blank">Firefox</a>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Subventions-equipements-296](https://www.agencedusport.fr/Subventions-equipements-296)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.mozilla.org/firefox/new/?scene=2#download-fx" target="_blank">Firefox</a>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-253](https://www.agencedusport.fr/Presentation-253)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.mozilla.org/firefox/new/?scene=2#download-fx" target="_blank">Firefox</a>`
  
  
  
  
Instances: 11
  
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
  
  
  
* URL: [https://www.agencedusport.fr/IMG/pdf/ff_athle_projet_federal.pdf](https://www.agencedusport.fr/IMG/pdf/ff_athle_projet_federal.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#gbA0`
  
  
  
  
* URL: [https://www.agencedusport.fr/IMG/pdf/note_de_cadrage_2021_ff_club_omnisports.pdf](https://www.agencedusport.fr/IMG/pdf/note_de_cadrage_2021_ff_club_omnisports.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#FraL`
  
  
  
  
* URL: [https://www.agencedusport.fr/IMG/pdf/annexe_2021_-_federations_psf_labellisation.pdf](https://www.agencedusport.fr/IMG/pdf/annexe_2021_-_federations_psf_labellisation.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#7cAnF`
  
  
  
  
* URL: [https://www.agencedusport.fr/IMG/rubon28.png?1608024725](https://www.agencedusport.fr/IMG/rubon28.png?1608024725)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#c9xK`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#gbA0</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://www.agencedusport.fr/IMG/pdf/ff_epgv_-_note_de_cadrage_2021_.pdf](https://www.agencedusport.fr/IMG/pdf/ff_epgv_-_note_de_cadrage_2021_.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=\x0010]Ã-\x0007oWvuEJï]:÷¤É©d\x0018¡ìòÒ£kóä§\x0007mÈÚ øIZûõ~º@ñ¶z"è²\x0004l`BÚZîdsPÄú\x000cãaâòI\x0013&ô× ÌÆ1¢ã\x0015¶|ô¡\4\x0008vA¶E\x001eü7¯C5\x001dh5|!rS\x000c\x0005­\G%ü¤ÛÖC\x0004V´Ø³[ÆÑ³Ã¿ÓÑÃ:%yúÖCRa>ç)¿¶õ\x0010K­Qpûn\x001b&T]\x0002¤éº\x000e\x0005\x0008>«¥\x0000T\x0007 T\x0012\x000e/éÐÿ¨Hµ(u÷¡4\x0018¢À5IÀ¹\x001fÀ

\x001aÛàH>npBæ-\x000e`®yÐ\x0001Ä½\x00100)r\x0000V\x001fÒ\x0010w\x00040ú;ñH¡Ú×{Wðb¸\x000e\x0012)^È\x0012]%$a+\x0000Á§Ø¹v=ú	\x0016Ñ\x0004:\x0014©\x0002M\x0001Â\x0014Á'¡!_}Âw)\x0013ÔY\x0011¶í<\x0006ó1\x001e04,á<«9Æ\x0017Ò¶:\x0018\x0003ø¶´í>(*dx\x001d\x000eh&Åk«\x0004½[\x001fAÀúH}V7ù>&\x0019\x0012°m!¿£èa£H~7Ú\x0016âç|Ý÷À5Ða1Jù\x0016\x0002ke\x0003\x0004ÇÆ}£\x0016æ0ôÀ+Å¶FAòeÓ\x0014v{Eë\x000e<ùlYS4å¨Cýk\x001bð·$ÀJ!\x001bïOÛÞ-E/\x001c:¼¡\x0013\x0005ÅÚ\x0014X\x0003\x00019\x0000\x001f\x0004®4·äÁýþ¬\x0001ÓPÉx\x0014Þ\x0015N\x001f6¥ ­Gâ\x000bÐR~tM	\x0002ô6% èI\x0000hÓÖ¶@\x0008ÐûðÅÚ\x00153ð\x001c×KÖK=\x000b&\x0018j&\x0001K\x001a ç*åmk©i5Ãô\x0001Aùº`P\x0012y²As£CYp5÷_¿îÉoWTuÅí&¡\x0002v\x0001Ò£ôîB
KoíNÉß	
:5ni?=\x0017BoõqP:¤$ã"ÎBl\x0010\x0010ÛàAh\x0016\x001bÑ6õÓ¶x$\x0007ª|uWAÃÀÐæ1jÐ%ö]u{Pøûhõe¿ãÙ|^NJø}J$´!ìX?Ã$Ñ$(ý\x0004­\x0000¶§vÌlsFÍ\x0006Ð-ÏÎk¨ÚÔËa³¬×=þC/ç\x0004QJ0\x0001à\x0014ÙÁ±\x0015Ñ>\x0017v¡µÔ±Õ°Ùñ-o\x0008Ù\x001c\x000fÒbÁ·jåº«/af§N|u \x001e´[1m\x0016ç\x0017v\x0011\x0019·¤)ÇUYÛöl$È$ø#\x0001'eqp>nªu~\x0014ýÑ/UYÇÙFx6Ï\x001a\x001c®¬Ð·Éºï«oe}O X2D6\x0005XÅ·3q%\x0018Ä³ñ¸4Nä=«lñéZ'HZTäxzÏéÞÈ5@h\x0003\x0004W\x000f+ó%VÐ[\x0005ù¸r¼ pqS8 ­çÁ{í©>[ô9êµewX&d«® =\I¼ñ%-\x0012èZ\x0015\x001cÀ\x000c]¯\x0013ogPÄò^\x0005¼{rÖ¨\x00122\x0001hòK=\x0005Ap
§à9 NNd
P£C;\x0004\x0008Ò\x001a\x0006\x0008®K
Õã¤ÊÐZ£³u6y]WH %Í$*Äâ"º±â¢zZBs\x000eµæO\x0019!ö?@ð5]\x0000á®\x001abu\x0008N/âZíá\x0002©±Ac ô5Âª\x0015f9IðÁý´)R6íÙáãå·EDw\x00100¶¸\x000c\x0012§](\x0014\x0008®%Um±Àa#ÜUU\x0004G«
¦|\x0007-Q©*?5BUå'x¤ª
õÕÉB\x0004[?^=êN¨6\x001d
7\x0007ÿ°íÞ#Tn\x0005Ôl«§=\x000b[È*Þsûä\x0014"]U=@	âÑ\x0004Ù^B1Û8·\x0004I\x0002¤f-û	¢ï\x0012 èW`°
hÕLEF×M9-0¼QQ4ð·Ý^\x0002\x0002â@\x0019\x001eì\x0004ê%lÞ	\x000bÑ-@X¸(\x0006ü´± kÍm\x001d\x000c`£@xIÛ.ÂÌ£mñ¸z\x0000x#\x0016â¼Æöº·ö\x00144\x0007l
lI0±¹\x0003±/Fxþ8\x0001¬\x0008Oä	¥\x0000NI"ÍO\x0010B»)³Øñ©{1i:(ÆÁ\x001cìt³Î+wê\x0003tØ¿ä\x0014\x0001=æ{¶qDhõ$\x001d\x001dp§H°²Ö|ÝÂAÌ7\x0008V-æ\x0005:\x000f\x0015\x001e "õ\x0006\x0017o~¿£0\x0012ä÷\VcãøÔvj7-"R\x0001{ t£{ãcæ\x0011t¥ (©\x0015Fzg\x0002;Uap\x0011Æ¸¢æka}bá
¹Êz]jn\x0017\x0001`à9vØ±q]
ñlM`\x0010ë¶X\x0018¼¢ÈfAqW!ì\x0019\x001e*\x001a 8*£q\x0011ÍëÂFü,IüqD}nÈ\\x0018·8D¬\x001bN­×<DÀ3ä)ô 
_Èó$>é\x001b\x0005¤Zp¬$)è¬ÃF¸ë\x0016vÚïq\x000b1èq²v«\x0001j\x0012ÚO.\x0019 ¸`\x0002^ ¤*Ù2ÎVDì?\x0004\x0000Oò\x00136eK\çÖEÝökÒÏ6Ýª©Tï²	§Ôñ)\x0004Àò\x000cZ~\x0004&\x0018u}[³.Í¦Ó\x001c:
xÃlð%ÉöÁ³\x0000ói\x000f;´#°¶DÎ!Ð\x0019\x0018\x0006ò¹\x001c\x001eI×H4D\x0005Kqp]ïÚNÄb\»ZlÄÕâêõ¹\x0010ûÌJÃ\x0006z×[Ç4'\x001bæm=Ó\x0015øn·\x001e¶+ÑÁ+Üj¹­ô¥h×
+¥|\x0000fÀªGó²^ 2`:ÝLü\x001f\x0001\x001aåÖ®ò3C`ºòDñï%\x0008\x0005#B0t<(P\x0005Að"0VPxÐF ÅÁr\x0014Ñ\x0007p×âèßgq¤Â\x0007b ²8üÔ\x0008-\x000e?Aº\x001eo\x0001õ}1pä¦ç\x001ah<ñ4\;gÚÝP¸j*Ö!F«9zÂêOdcer«ù\x0019|ZnÌuÌp\x001dÐÌ\x0005z0Q\x001cÓb{\x0000ûãuO2``«)\x0019AÄ\x0008à\x0002#9\x001cAÍw Åä<¸mo7åëæn°hÚ\x001eÛ~..h\x000cZ~[\x0017¡\x000fmÓ\x000b²½/\x0013_{Õ\x0005)` rAåa0ÅHíq«\x0001\x0014m×R¬\x000b8l»
à\x0012Èyú¥R)0?5ÂEì'H×|-@0Ô}
kgéz\x0005¸ÙiRFa\x0007«\x0010us4\wÒ\x0000Á)x#TeÐ
wwpRèà C®\x00198ý¬Ð6};Ýör]ß\x0002\x0004éÚ¾\x001d6Â]ÉIp2\x0003gé	Û;\x0007¨\x0011JN?AºÖo\x0001Ðû
Ë\x0008ö6c£\x0010)i\x0013M»·Ó\x0004Op\x000b{	>iÊÖökK\lèÄýß\|\x0012þ·qPp\x0002JN\x0002/ ·^pãjhÏªþgkÎÆ\x0013±3jèÌFavó\x0010Aº6p>j§è\x0001ç£K×\x0000ÎGíY]Õ½\x0008Xû«CX.@´¼þ«gXÆÖ\x0004ª3>Ï\x0010èÆn·6%[ÖU\x000b\x0003\x000eÞvà«AIÑ¼8Å¾\x001b\x00070Jâjhy\x0000ñÆÍÒ¦¨Î\x0011X\x0016}\x001d`_ôitg\x000380sÃâ\x0004;®\x0010år\x0000ËÆ
_FÍ÷ß
¼¯gÑbF°Ó\x0001¨\x001cÀ\x0013ÄãÂ\x0006N$G\x000bC'¡ÃÖ\x0012ª&\x000c\x0019\x000e7P\x001f|k+\x0002<¡3ø/_än\x0017kcG"Á¨2\x0016B¸`Jô_î\x0006Õ¨©:ª\x0008Oôßc\x0013DG¾«Oë\x0002r\x000c\x0004¿û\x0008¿|ø\x0012
gÓa^¹}é\x0014\x0010§\x001cª¹å±Ï\x001c7Ëa¾ôù¹ìä{k{roéxÛrm+\x0017ªh,Qè.rÀÔýiÃøßÆåºã{ó\x001d~ù=!©!N\x0010¤|\x0000[$Ý\x0014 ë\x0000Ú\x0004e¦a3\x000f¼Ý¦\x0012cEÒ\ù¼ôÝ;àÊ\x000f\x0017úÀ½öGe2íÒ)Göß\x001f	\x0001åS»\x000e/]S/?IÂþ¨^\x0016Ø³boÇKh\x0004\x0007û
ÌD´6~\x000eË9\x001eq\x0010\x0008!\x001ac{HÓ 8ÞlôG;8Þ\x0004_~Ê¶k,èj]$·C\x0013I¢®­Pm4Cµ@\x0018\x001b\x001e\x0001m\x0001ê\x0003ÿv½9r°iµ½ü1\x000e ®a®MUè­L¦$é"-4\x0000~\x0003T]Ü\x0003#\x001eüQÄcAq\x0014Æþ\x000cñr\x0007MÐ¤\x0008LíWh\x0015Sf,\x0011\x000cð a°+	»IöHB@ÑÂI%¡$¥$ô\x0013¼2ZOÐÝ\x0010\x0004\x001a¼]ÙæÂh,7\x0014B\x001aÏø\x000b°td Íoûb\x0017õà{~zN(J!°mo¬\x0013ÙîIº"zî3o6\x0012O¶\x0007å²5d$ï%BùÕJ°±²ió+\x0012Ë\x0014ºå\x0007øxRg#ØV)Yr¨ì¦îÃC%òEi¶ÔÊÜS\x000c\x0015yñ¤\x001cÏ$\x0008.\x000e|Ië\x000cmÅî¯7ïµí©%Ò'\x0007Ð>Ê\x001dàsú\x0017§9¦`½üÓ\åY¬B/½Ô½Ò¢Õ>\x00118$â@C\dW«\x0015\x000f³¶8t­Y1	mµí¤p\x0015¡Tê\x000eNrà\x0001æ|Êîÿ\x0001ã2Å¸
endstream
endobj
215 0 obj
<</Filter/FlateDecode/Length 5581>>
stream
xÍ]ÛnÛJ}\x000fà#ÝhÓ¬;9m\x0018ð%ÎÁIOú$8óô"Ó\x0000[R$*H¾©?¡¦\x001f[1µw\x0015/ª,détÈ\x0012/µ7ë²¯«6Ï.\x0017åä~4.£óó³Ë²\x001c¿\x0016wÑ§³«YYÎþ~öñç¼8{?zLGåd6=û°úRÂ¡ÛÙ¬,\x0016\x0017\x0017ÑÕÍutöö\x001e¯_}{ý*Ò$Õÿ$ID.\x0012F£$§Ñ¢xýêÿþ\x0014M_¿ÊI¢"}iÄ\x0012\x001e±%"Ò(ÆO¯_ýò4z(X\x001aÝÌ¢¿F±É4Ë\x0014Ñ÷ø\x001a½ú¨ï½%Ò­}¼ý \x0005ý;ëtûG\x001f 5Æfð\æBE\x0007}çÛ\x000f$Å§Ø=ÿÛÛ×¯>Å·ë»\x0013\x0011¯\x0017£S\x001aëÞ?ÓèVÿþ{ôñ^¿z£é¿_¶Ã/a4á|/Ã\x001e6ÏÓT\x0010Ýÿ·\x0017§LçüÃk}Xê¿æé¿*M¯¤¹D\x000b¼Rá\x001f]ôyÝî'HHÖõqâñÉ)GðQuùI\x0016G½º|GJX"»óø\x001eøúúóÅËÉ·U18w'Bvæ®(\x0007gHDt¡ñî¨"zûóÇOÓSawYè;ÆdBº÷ÝïC³£/Ìº³3{AWMK½\x0006°Ó&bh\x000eU¨îKaðñËhÂºwX\x0014éI¦?tWE'²ú¶ï`ûÔ°ÃõG}ÙÏQÕ]¹¯x\x001c¯\%ªk·¢Å¢tãO1e\x0003s&Ò¬»2N[¬ñ¡Y#Ywâ÷\x0014å	í#x¶§¾s9?³^\x0006~A;ÀZi1=02eê<95mb¦æà'õªÉÿ\x0013ù"ôÖàlQÒ}\x001c?Ñtæ	ï1ÿf>Â®\x001f;4"º±ÌáêO\x0019~" \x001fõ¢6$gBB
ÅÙ>j<\x00165B\x000ex¶èÍ»ë(:{\x000fw×¿ÜD©
w¼t.r\x0007\x001f\x0019ª^¥8¸Æ[h'\õtÂ]38â&Ùw¹¥\x000ez$z1ù\x0008^ÏÀû\x0003ço\x00124UÏ.×Ë\x0008\x0008ß¬ç#ÍÄ\x0002¾ÅS¡½ªá9ñra¤Õ=O\x001cD©ßé3³«Sz\x000e\x0001 4eôâcØGÿWú¿ Q¿Ùçê\x0008ÊÓDzûâtø§=Cð\x001d\x000cz±\x0008@Vä	õÝ'bÈð"F¦É%bH\x0001ã¤w\x0014ùâ¤¬ÅK\x0000,÷S\x000cÑ·æZ7½ßÖ\x000f\x0010\x0015ñt´ú\x0011v&T\x001eö¬;+v\A.F¬Æ³Úf|\x0001#lxF´$è\x0019á4QºWõ§Ï\\x0007Wë¾¦\x0014æÃ¯\x000c"¦ÀØý\x001cín\x000f¦"¾#+!j£i\x000bÐVæ±´åMÁþfÊ°·y¤-þÍöDF\x0014K!ä&Ü~T\x000f¼ï´é0sÚvØÆ\x0005B;>8ZU\x0003*Ï³\x0017_b¹0ãg6F¥j¡>-l\ò7÷tÝç%Ý2m$\x00048T
Ï¸T\x00023@°,³.ÕöÑ:´\x0005-BÐíKo!²É\x001aM\x0015,Ù¬õ\x0016¨d\x001f=ZÙ\x0001Kô¶È¶8"\x0002âÐT\x000f9øÑs·ódú\x0014_\x000eÍ\x000fåìÑ?cÈ\x000fÞIZ\x0013õè£»¡gµ`}ú\x0008\x001d¡§µ\x0010n¿û4Òãö}¢-Çr\x001d{öþë	.'ðýÛªÐ?¢Ë»~ùþ]¦@ßéy¹.Ð¡ý\x001c_¾¿ÔÌ>\x0019Ã<\x0007Írti±¥±S\x0001\x001e\x001d*C"a·µa}\x0001jÃÍk<êPYuhÔºÌ1êUÛAúí ¬³"õ\x0018BR÷²¦ztCH÷\x001a~KÇ~ÎÒ©\x001bð1Ð­ÜIbÏézPø³\x001c4
xm­ç.i¸ÈyekµF¾ÕBÞÌ®K<+\x001fÜ\x0007ìâ®±Ëg8Q\x000c0 F\x0018P© c8|*[a°}ÔÌÚ_ÿ­å(ºæÅ2BxÏlz"\x0000èÃã\x0002$íbºÖ¿Ñ\x0005ð-\x0005\x0005Õù­vß\u\x0010I¤æ\x000eS3úd¦Ä/MH×ÐCXúR&¢C\x0008ª£\x0007­"ædób&ºzÏþ@4Zö07É¶³òGÂ<ô>"lnU\x0016Ñh\x000c¦M\Ïïð1Yö3i,)-4¥¥iÔ\x001fûtó,\x0011Çëy$¥>zwkiØÇÅãl>\x0007YW<iÙVL{bò¼È\x001cDb\x001aÝ¾\x0017«EtW\x0000WËhÞ/üíb1mÂø8X×m'ß2Zbgµè×ïF\x0000dãqTQiCó".ûo]Lr	èc\x000f\x0011@'&Ã«\x001e¥\x00128ÚÔä\x0019\x0005LÔaôv%0\x001fÐb ÚÖ¦¸d
\x000en­ëÔ¯»lu>>gÈhæÔNÿÜ¬OpårX¹0Eç!\x0012\x0018ÜI\x001d°"\x0011Í{â;t	G¡å|pc¡&)µ°\x0010zTNó<~\x001c>SI\x0004Ó\x0013ÁÍMPR¦\ä$¢ØsûWÿV@]hF!É\x0000×~e@ì\x0008w7M¼\x000c'Ï\x0010
\x000f÷äù94n¯Æá\x001aÖ4l ò\x00012¡Ú«Q§÷Ñÿ|\x0002\x001dÅÓõ¸\x0008KbD\x0001èÄÍÀ\x0012¦ü¤\x001cmN%þàñxö4_¸*\x001aÝ¤ñr¾\x001e\x0007\x0010L¢-åävr?µùmLä*¾C]\x000b\x001fvÎ\x00106\x0007_ç#Íñ¢y¬e´(&dW³L\x0003d"µ\x0007ÛÖIðidFj\x0005Ï
«\x001aa\x000f"\x001eÝã\x0018#\x001c0Ûkæ»Yÿe¹è\x000bÅw®wn³ßs\\x0008L\x0010Äüu*\x0004\x0008Ô"\x0014ò
¡`OffÇ½«uB½/\x001bÍ¡$Hë=1F¢Xø\x0003mÚÀûQ\x0008\x0004ö\x0004³©%¤ªý5Ø¾°í¥·
çØ\x0006uãæ¼>VÝ\x0002\x000fd\x0006ñ2{?k?9^û¯l»)\x001c\x0017ÕÍÃK(\x001a	åUËÙd\x001a@(q*Ì7\x0003¬TÎRÔNzFæÁ*1+F[Êz`
~\x001aãTÖ+ª,\x000bÜ1\x0005ÿª¯`q-\x001cÉËs5:\x0000=\x0018KççV]Ì\x0017Æv2ad.f= O¤îÂè×Ùô\x0001=OcB\x000coÆhEêéøfU!»ÖFÐÊõ×\x001bmÝ\x000f\x0010\x001fw`®pÍ¸¹	àM@ÂLÛÒnz{­è\x001eI`ßÔÌpý¾\x00135<'7Y
O\x0008r¶½zÑce¿\x00040í\x0015Ä\x000fà¥\x000cB#zvhçb/yð4´Èèj, ¥\x0018ÙCúaV	\x0001\x0008XÀlµÄí\x000fÍáùêËãd\x0001\x0004i"Ç&Æ¨.\x00040C©\x0004\x000fybav©êõ2ÄÊÏ\x0004ÄuÛø\x0017\µ$(P¡\x0004Ú\x0010~&\x0010Ý=¯åææT\x0012HË½X4\x000c=\x0011<«c!ÑûP\x0006XÚJ×kì\x0000ê«qY+.-ÞàÆâ·¿GãÙt\àQ3¯0ÉAÄè\x0000>Ý³+Àí\x0011JA\x0013<?Ëh÷'Ý!8\x0005Iób¼`Ç¼;Ý!\x0018ÂX^ÌDWÔ¢?Ý!´=Íîp\x000cüõ\x0010¼~ÔK\x0008
õ/Kmó¡ÿ1.æè
£9\x0018Íg«EôX\x0018ÝÒ\x001fÏáH\x000bd(£Ý\x000cj3¹ÑUð±¾O\x0010rù\x0017j¸ÑxðÚ§yOÖ\\x0004K9$f¼ó_¶½iãx·
Á5í
\x001b3~oÛ§¶\x000euÖÚOPÝUµõMàÚÜ´U;Þ¢U¤·\x001cbÖ\x001c«îG\x001f\ØûÓ_\x0008ií§×\x0001ÜcáZ?hºï®õáS0g8%àRwQ\x000c¹ÒôZ\x0018ÿr\x001d\x0002sÏA¹i£èÈa\x000fQ¨xæ%\DkÊgv\x0019´âH°$Xµ\x000cmÜÉ*Òm5\x001e(8·A'\×W¶¡+C\x0008Ä\x0001oÇ½lAp+½jÅì®l(]\x0006Ú@¤g\x001eóÍ<+ÛaLH<\x0007jrÞ\x000bsä\x0011s8d ]«(þ¡ån\x0013ÑÑx\x001aÿ+@°	ðÈÇ[4\x001càÆ¾®\x0002åk\x0006»iô0
á\x0002VKúNð\x0018
pð.z\x0006h\x000e¡1.ÛA`§\x000e¥@ÐáwqÐJçé\x0016 ±L\x0012áékòo$\x0002Ü*\x0006ª¤äÙ ÒÔµ§÷~ô}V¹8ÆèY¢ûSeìB3p[ôìDêR\x0002aC7w{µw×´¸_{CM]!¨úv\x000c¨¿=\x00047\x0014x0¹ÖC>òæ>µw\x0015ã7\x001bvåñ6ìzº.Ü]\x000fÁÐ\x001bv\x000f[\x0012»ò +\x001eå\x0019y °(ËQådHyà"¦fOØµ6R\x0002D£q×çq\x000cÒúò8û[\x000fëôÝ\x00197|î\x0006\x0000qi\x0007OvøÜ
çYíS{Bo~\x0014\x0015||þ\x0018(\x000eJ\x0004îÝÏL\x0015bR7/'^õ Z\ÛßûB°Ý\x0003ý®Ð'×âÑ^à>Ú5â/¡\x001fS³g	:T¤ª^ñ\x001ce*T\x001dZÑ-ª\x0012j\x0006Yª\x0019ê\x0014'Õ@fòÑ{7Y\x0016\x0006\x0004EÝ`1Å\x001fÚS~\x001cáþ
0\x0005\x0017T?ø>_Ì\x0002T'a\x0000¹pòáGkÒ´@2¢\x0002ÉH\x0013{Ð¬\x0003Ò!3?ªï`yuÙ°\x0004\x001c\x0015×ÖTJ\x001b(!"ü\x0000×CÚí1Fe\x001bÑ\x0003\x0016ehâ¶M\x001að\x0010oÁ*Hª¬¸ì¢òèÎ¬ZR&LÒ\x001ce\x0012\x0011>\x0015à¨
4ª\x0008Øz-"ßeêÜSçÏ8\x000f\x0004l\x000cà³ç\x0014\x0002ÑÞp:t\x000b«æ\x0000·s\x0003ãT&e\x0006%ÀB`\x001d'y¢v­Â·?ÖO¸si²( Tü×b¥W\x000bßB\x0004ÿ÷ +Ç½4\x001e\x0002\x0015Ê\x0001`ã¡÷\x0010ô\x0014P:ì\x0001w\x000bntM)î×\x001ei\x0008\x001fh¿úp
\x0001Ë´úÃI\x0010\x0017`»x
¡¦Y-\x001fI\x001dQ6\x0007\x00053¡6\x000c!WÕ©Rç?Ë7ðÝÖïµÁæJ@kQ¿\x000eÝh'\x0000ÐJ\x0004Wy\x0006Àì¢9\x0001ú\x00069»\x001f\x0019F\x0001\x00104JØFèáeZ ijf;I\x001a'Mtà¤\x0015\x0001¢L\x001b°Äû¼\x0001&?\x0013\x0004P\x000fÞÉ¿1¡j3eÒ2\x001a²
o=©
ð\Û%pÛÔ\x00156¹ÎV;\x0011ÒÝ°Pk)T\x0019Ï%UïxÈìr­\x0017Jf¬Á\x0007K\x0010Dcx\x0006\x000bÍÊeÿrÏÏ(h;k"½)G_\x001e'Ë8e7]\x0013ô­á\x0006®»ëh\x0004\x0001ë^ÙSÌ¹håÜ­ÍsÙj¬\x000fVLVsÂ
Ü
g^§ÞÍtÀ}1A2r*É¨o\x0008\x0016KpÑ
Æa\x001a\x0004cÉÌ{2<ôûWq\x0010Ì!Xg6^F\x0010ZoÓ»Ñ´4ë D¢ÈDùøù\x001c¿ùï÷7!,Q.\x0018Xh\x001eÂ!\x001eTH°<\x0004\x0003¢\d \x0014\x000e{Â]S´ëfþ½¦(Ëðý\x0011Ç6E=dÃ2<\x0004/\x0001\x0019UEÿlþÚnªÆÕ\x0016¦jyøiËà¶£Þ\x000eVÐ
}½jÅ\x0018\x001a°U}/miõÚBÈ,J×\x0001Ed)h\x000c
m{-Ï\x001b\x001ekÐ¨\x000cÚ©¢%VIíj=ms0\x0010ü\x0003DôÎ%Zà\x0000
\x000f±S(82BK0Ë>F&¨Ù\x0019i¾Þpÿÿla«,à\E´:7öÕÂDÞG2ýµ;9øÙâit\x0002oT
@Ya\x0005\x001d'å6\x0012b\x0016Àw Y
ÁoÏSïÚÃ×\x000eeZoÉ\x000e\x000cY<\x00141ø¬\x0003Ö\x001dR91ÜàqPåP6téPÆD]Æç\x0015³à%N¤U\x001b´]Øç+L¿+ZE­Ú×ØSM3uÑª_e92ãä­$Ú?¸(\x001b¬¨­¶È ðWÕèXJ´ÿÖ-Ö\x0018V§íÈZR¢LÁrîÈÎyR¢Á{{þ¨\x001erð#{Øà¥D\x0005½\x0000ù	SJTÉtçéÃ\[\x000f³E9õ²Ul2¥\x0000ôíÌÛÒ\x0004gã©Ë]¾àýT´;_»Ùt
V×tÜ¿¦Ë\x0016kÚÚP=X\x001bH-\x0012Y\x0017Ú»:¦¾ ®Ï¹_Él\x0016èd°¯V\x001eV 
^¡\x0019`õÑí
"ÚµÈ±ó¶¬	sEcMl\Sw¿Ø*7¾Ù¡b¹åÂ_r\x001d$¼bÃ¶á;ÜÔÍ´¬^Uq¤êÊ ®ÊÍù+w²á7Ò¼/À/ÝI³®u;ß\x0019+\x0001,Û!ð%eªÐê{
P$+G¯¿[WaYSyü²¦Ý¸}AMSQ@
Ö5MõzR~\x0001Ì\x0007¯iJjÞ\x0015ñ54hMSªX\x001a¼|øT\x0012g=pHa'Åp\x0015MÝä¦öåÑ´2Oó¦¢)C\x0014Ù$ðz\x001fc­\x0019$«Ò\x0000¦{DYáê~û
E?õ¥©ôð3L­ÑÜEV/\x0005â¼GÛÈ0·\x0019s8v¥jTHÃÜ,ëg"âUi¿ÜF°ÛIM¼Ù,{ÿí\x000fÎB¦V :»u9^Læõ.%\x00031¦ Öw1Ã1\x000f ¸yeeè¡ÇÁyõL¯2ªKRÌÊ\x0000{Õ¹¤ÞÅvÞÆH4Ù*õ!ê½~
ÄW¬I\ *#\x0014Ðl\x0003X[¶\x000b¯¯ó\x0004BÅ×Xã&DöpD{x\x0008%Cüà\x0006l×\x000cR\x0005ÝÕÝPCd«#²Ù°É¶\x0000`¼\x001a×
\x001b+ZçS'øÊºÔg\x000bÎdkÐmÖ\x0002bÜ\x001að­Å¤!FMnðjK\x001eT»¸*È
\x001e«¯ÌZ²«JM\x001c\x001d6g*·
?\x000b!8À¤o\x0006Ü£Ê\x001a\x0007iã>÷Í¸)B.DS\x0012~üj\x0004ëÃÊ\x001cñ
¬\x000e*[\x0017Í¢ù\x001c_\x0002ï¿Þà+Oð`fªöañ\x000fÜa\x001an{+Õq7ÁÕFÇõ¬¯í-Ý\x000b}ê"®E
h&¬æÐ\x0013n\x0007ôØ³ µÛ\x0012Â ½½Öðõ¥­]\x000eµ\x001cw'ÚMS:l¶ª
7H|jÇÄÃÂ#V+ã¶Z\x0019Ðî&Ë¹Y\x0002!X\x0011rr³1E¿ô¬éì&\x000eo©òôDb{Yê§Ø\x0016\x0008\x0001*fÑÄÓÏaÐ1æ\x0016ß4Ã}>Ë	Î°"º_ß­\x0017XàèñÏ¸¯ñ\x001fÑ/!
ãñÄ?óCì\x0013ê\x0019ïûß·¿]Âp¿{\x0017\x0002MÀíñ®«T¦¦â\x000f!àÌG<HG#\x000cÜGï
,«÷oG¹úO(³\x0015ÀpAÍâaà©Ûrg÷¶I-ËFS\x000c»}µ6þ6ZÑÙá\x0016 ÆXØñ\x0016?\x00149ÞoápE\x0010¼g/*õP\x000eñ®ù%z®Õ·¨C	îÚ2Ã¿´Þ\x0005×q7-\x001f~£8Éd;°´.·Õëo1)ÑÚÙ¨ï\x001a(\x000e~\x0008¦dli\x0005n¯0\x001b@1,òu\x0000¯Avö\x0011ð	\x000f Þ®ª[T/\x0012\x0008^Ü¶ÍØ¾â¶$CdtSÜvORbÈª\x0005­#ª\x00074d¡]Û\x0015Pi÷ÙáüP. ÆìÂnSøc
ÌîgÓ=Ð"\x0007-Ôª/¦ìîÂõdà]
\x0019\x0019\wö´KÙ\x0010Ñ5\x0017çÏ>\x0011;Ê\x0004M?¹I\x0006,Tã!¸]bvxòLÏA\x001fu¬f\x001bByf~èSºçK[+ÇYÈ6À\x000c¥Poú&\x001fßÞ.ÚÝÈ¶%;¯ã¯G¨m;¼¥ânUÏ(-êzaöA0\x001fá{ØãÀã§\x0000µ¡:g¼\x0001\x0003B¤ñ¸CD°¹\x0014¾\x0015±\x0011FMx]¦Îða2oWà\x000f_S\x001cÊg¹^Ó\x0016PÞ»(\x0006ÉZYqïyB*q5ãâ¯´ÞAWe{°Â.­\x000e²ÖÖðãë
Q\x00050\x00030®{\x001c\x001eL¢¦0Ev?\x001bÓ\x000fÌ'ÐO4Çª\x000cn^~ê]\x0000xø\x0014vJ!\x001dêXò2mÊ)7yêªjÕ#6;iTX¥¾Zx&Ùmò¤/Ûm\x0018"õ
\x0001g¨P{\x0010æÂ\x001dP{6Dv\x0002_ÙîaiR¿ÿ<\­[\x000fi\x0006ù\x0016ß\x000b
endstream
endobj
216 0 obj
<</Filter/FlateDecode/Length 6431>>
stream
xÍ]ÝrÛ8²¾OUÞòVL\x0013¿$÷¸\å8?5[3»ÙIÎÙ½`$Úa\x001dRHÊ<Óyó2s9ºÚWXt\x0003d	%ÐLªbÙ\x0014ÉþÐ\x0000\x001aÝîÆÕmÕ\x0014÷Ù¸	®¯¯n&\x001bÉ'Á/W¯çM3ýëêÓ÷E~õ!{(Ê¬)æåÕÇåç\x0006.½Ï¼º¹	^¿¹\x000b®Þúå¯/_DA\x0014Fê$\x0011\x0013HEÈhp\x0012¦4¨ò/þçOAùòEJÂ8P·\x0006,ä\x0001Ki\x0006ê\x0007¡ÁxöòÅÕ\x000f³ì!gQðf\x001eü]¿\x0014_\x0019%ILÔ3®¾þ¤}Ç8\x0014Á§û/\x0008R A\x001cÁ}êý\x0006fð6ÆIxª~¦"\x000eª\x0007õäû$ÂVìÿóû/~¹"FQ¬ðøF\ë_PòKªþ\x0016ê\x0002¿SÔüMÔ
L?öä>u]¾»¹d×x_Ç¤úLô#\½êµÔ·HqwÆø!Ô\x001d\®\x001fÆOMøæ_Á§¿¼|ñV±át¶=¶Ñ(
¥|o\x000enæåE<
.\x0006ÆDX(Î>\\ÒÑï\x0017lT\x0017_ùàè\x0004\x000fEwåM0É÷ß/ÄhV^\Qvq©6ÅÀ0\x0019IÂwùU±oxÞ1&CÒwÿ\x0018\x001aº1é
\x0007E`¬^8VÓ`ª&ÂÀØ¤"ØSÍE¢\x0007VQåC\x0003Ó0î>;\x0007\x001fR	
Y÷!\x0015\x0004\x0017\x001c~(V\x0005\x0017²ýí¹GÝ?pC¹Tµ\x000fß¥\x0003÷Ð8\x0013~ÌJìTDÏ©`p`©zþ3p¹\x0002Òyå
.\x0015qîQq\x0018\x000f!\x0016)\x001f\x0018w_Ô®\x0003Jg43G­øiwæ°¡áP\x001eÒAä®\x0007¤ïÀÈ¥èü\x0004\x001b\x001cY¬¨\x001eÝàpD(º¸ý\x0015ÓëÂ$#\x0016Æ½Ñn/õ\x0003ã£¤\x0017>od¤`é\x0007\x0006D½,±Øú1	¹\x0013\x0000õÀ+1!\x0005ç¢Æ8,sç¢FÈ\x0011m\x000bÞþt\x0017\x0004W\x001fÀôÓÝ\x000foÈø¢ÊXýä©±Lq0È4T\x0001Ö\x0000A\x0003®¸'Õ\x0002AÝÿÉò6bÞvê`åV%¸\x000eÆ1\x000fI²Û,pè$ý|(6F¦\x000c®ØIö\x001e¤m.ws%¤fà\(U2áÍj©\x0015\lòY^6h\x001e.¿õ\x0004G,à¨\x001aPÑ\x000eà±ö½QÄèÍ%7\x000e/pp¡\x0007­g\x0007Ù\x0018Fy\x0014J'Ã.ï!ÊÙ\x0001?A?ä\x0007²"
©ìss\x000e?\x000be\x0014y\x0012Ú(úVz)øóêÁ\x0003\x0008¡,"ê\x0000Q\x0000Ù9¸CËlév\x0002"ÝNú\x000fr"äqý»7²YÇm\x0003bÔ\x000f(UÇèCí\x0012\x0018o-ûW­úÐ\x001eT><TzúéPß~Ë/\x001eÆi^\x0007ö1´£z\x001b£»_íðÛV*«
ºF¸
ÑÃÌÊ]¥ù&\x000eî\x001e×årX@Txê\x0014\x0007\x001cwFø\x0013	];ðjk\x0015ýä\x0000=²ßNðv<^æ\x0005ÈÝ©üq\x0004>êS²ñØ\x0003\x0016ÉB¸°Ìg\x000bÔô\x001eÊ|\x0006yy¡4@&¹ú½¾¸\x0004[û2¦£\x0005@Î«\x001a>æe×0ñõWYÓxPVÒ\x0018\Ú\x000eäyQ69@©=è¨
Ôl¤ÁÃ\x0018\x0001\x001fÎõzvðÆ3¦ìiéjü\x0012Wmì\x000fÕ\x00012\x001dÝÞ\x000fÏ¦Er	DJtdÝ÷ÜC²Ò\x0012õc{óÇjô¨zÞà@_ãÑóòa\x0003Yóå
1ÕÊ\x0003D®4
FÏ(U¸Äo\x0007ÁIV"\x0019Ñ4WÊe­ùq7]Â\x0004þ\\x000f\x000f\x0007¬wî\x001c¡¤*ñÁÞ.Á·\x001fÞÿãU°À=óÊ\x0007uAA\x0003qP×\x00132\x000f\x0016UÖ\x0014_zff\x0013à}¶\x0000
\x0003veÆ©\x0004¿,û;1­RSB$\x0003f^3À6\x001f\x0015\x001aúA½9²\x001a\x0017÷ÅW->¦³²C¤\x000b\x0007&0I ÈAð¿|\x0010da|d\x0003÷T«dpÕJ¦ _OµrÐó§Z9\x0008þÍ\x0001}ê X=de\x0001±D8Ó\x001b½$QàWó%NðKj4§¬ê\x001bÅcî²'\x0012\x0017¼1À*\x0016
ØÆÖ\x0007HÑèWý1Éa¡ jþ?®´>\x0001?fZ
¬_ÁwB¿e>UÍâk¾ê\x0015VMFu6õ+xP77oÆ¡õ/\x0012`·9}Ï\x0014æÒ\x001eÊi\x000c;/ç\x001bãçÄA¯©2ìÔFó:[ê5Eýúqqaú¸òÁ\x001dáG²Ø	\x0003\x0004?fe³z¥Ç..iK=þ|i\x001d2N 6m\x000fW\x0013àä¶ÓöÑXe×8¨ÕË*ø[5ÙÈ2+Ç\x001eT\x0005¢\x001eômNÑSç èAW\x0000\x001d\x001fÛÂ=e!\x001d^Y\x0002¶tÏ¦+XÉyT\x0015¬ôþ»)`AÃu±\x001b\x000cQV\x0010\çl3á^;=eu,*À³ykÆ2ñ1Æµð¶àÀà4*Sô\x001dä\x001e\x000cSJp'àl<§$vµõ\x0017-+z°ÕÁ½2ÊG«ÉªÊßB´\x0004ÿ
;AØ\x0013Ùl
Xë£ZïBlù
ÂÂ}-\x001cZ;ô\x001f|ÐÝ]ãA`qä¦÷¡?T&Æ^é¼3\x001f>"54khÔÁ[ þá}ÏÀu+aBÚÙæ\x0000\x0017$tó°rÁá£·\x001fL\x0012
¿
pºo	µó¸ZéÝÇóõþ\x001fZ¸\x000f%\x001aOå\x0018#©ö7ùõ$M!È\x000bC¬Á+°®9èa2ÎìÂT®¨MÐ2ÉYc\x0011:Í+bê{\x0012_ë¿\x00045i]¯uô\x000b<Åï0/LÄ7rýrÌ:÷éçSó<DËôMÿ²JPq}v\x0006yÝ\x0014\x0015t2aËEõ[Ýö¸ñuª\x0016Æèd`4RÃÄMÝCtùyZ[â8"
¤ûìqÞ\x0006<\x0015µ²%ñz2æËJïxy3$y\x0014²= ÷ój©É\x0004\x001an\x000c¬Ðz\x0018Q\x0007gåf×(<wè¤1ló¤k$Ò\x0001$ 4î#ùX¨ÆF\x0015k\x001aØV"\x0011\x001dMVª»¼Øû»°à`\x001dé«\x0007ÚÄ\x001aQê\x0002w1a-a<\x0003)ÿªET\x001b§§ÓWo\x0014Ù\x001fm¥b+õ\x0014\x0003áwÛ÷F×æMÔÜ\x0012Ó¼õµù7O¤	\`\x001ba)°ÀX¢\x0016eï¦ÀQ±\x0016yÕ\x000e\x000bTÖaÈH½.ÎËÙô°§\x0002N\x000elÛ@
ÍÇ¬¾ò\x0000#%.\x0010>\x001arHr\x0010Ì§Óvª	c£r3\x001f*¨Ö\x0004lH¶B\x0004Fs\x000fN.q/ÒÁ\x0005Ü\x0007\x0006\x001e R6¯àg/Û]µ\x0008ó1(0è:æi\x001b\x0018z\x001dp4\x0002\x0008®,Üy9ÆX×Q\x0016¹\x001cÝãV)ØÈS\x001f»¸\x0012½v^¶Ó\x0003\x0004×ÓTñâ#tÎ\x0002X¤Ã°}(Ë\x001c\x0017;\x0016\x000fæ7Iã\x0003\x0004?úp;±\x0003\x0004³r½\x0013\x000fÎ\x0017ÎFw\x0010*Ñ4à1#r~_åúKì\x001c5}y;2õ>XéÁa:sÑ»)%\x0000UFD£e\x0000\x0013¥\´s8\x001eAç®­ùÕ¯>c«Ò\x001dïÚ÷\x0007z\x0012­\x0010G¿ÿ×L¡Å¼Â¾\x0012z6Á\x001e)æì,\x001fÎ$9@ð+ì\x0000\x0016zD\x0014\x0010Tâ!P\x0010\x000e¥\x0010\x001c\x0008¦KAÞ\x0013`M\x0001ërÒÆ'D­\x001csø£d&±É E}ê¥p5É\x001eæ\x0018í\x0008?pL¾$ÐÛú²zýlxñ¢\x0016&øÑ\x0006\x0005Zf¸ZéÃa\x00106\x000eÈÑùÒ©Î"â"jx_ç¯åÉh\x0005üþºTÿ[\x0016è\x0006o¿¬ÐGEa^±g ÉáÎUæ\x0004>[Öã%¢ÏÖ¡ \x001b\x0001C\x000bíøÉ²ò`+èÐ¨ñ²5+(äT:(zP\x001fÌìc[²Ò8«&\x0005ø\x001f=¸IÔ\x000eªÏz&Ï$\x0011\x0012³$OF2|¢\x0010øÄÉH:&T(E@·
\x0000¢(\x0015Oá°MªRG~\x0010,f:eåÉ6óñ\x0018m2ÖoÌð\x001d`\­f7\x0000s´O\x0003ÖWÄo³i=)¨Á§âx38\x000e\x0012\x0011\x0008u8\x0015Èê1Î\x0017`\x0013æ=wå¬ ÔÔ\x0016²Ãð|.5zzÆY!)zòö1pÀbNåÍ/½}	6(¤¡8\x0019I?AjÃA\x0019Ø:'\x0002\x0004æ¸GÒÊ\x0013ª\x0016ý\x000eó©ùR¨Éåî.)Zç¥cÇ©_@ù8º¡ñB\x0016Lþ\x0000ã±´\x000bãÆE3\x001f\x001eì2 Fßó\x0012¬»¼YõcmÃ&Zrr?Á\x0018§q\x0008·ý#BÎ°BÑ©@>¬ÔLªÙoMåA(
µ ¦§.]X
LçjM_N\x00059½¿L2í!ïÀ7\x000c~µôÂ\x0017¥ëPcºyxYJð­c\x000c9\x0007ý<V=	¸´FYC\x001c(S(ß#°Ðá»WûÍF«ùÐ=ýÙeÈpõ`ÒÁ×Emâ\x0008³Ècøªß±¨|8(p¨xÂ%fÇa¯3ÓtÌü\x0003nKUx\x0004Eà`[Ã§½Ò¯£¾\x001aÎI\x0004ÂS(îÃ\x0013ø\x0011§é&·þ¹¯5ÇÔ×]»7\x0008êþbë¯:ÜbPèA Oº¥}Ãú{|øÉ-w\x000c\x001eÁØ»6		ó@$©o8Ó¶\x0006\x001d¶o;W×Ò\x0014^\x0008¦mWÓ®i"áþÐ\x0008ÂÚ7¢¤3\x001eÐYHïH]£	£h/\x0016Yð()Ð\x001dÎíÀp`S.éÁ\x001e\â\x0006\x0008RßA¥L¤ó¸Þr\x0003ì£ï@S7ª5¥3Ã¦°×?@E\x001dTBéÃÝAåÁx^6©YÀGÍ|ÙèäCHXg½Ë8ìáe\x000c×ÂÎ!$O\x0001T\x0016òcÑÏ\x0008´`SÊ^\x0019\x000cÃXÛ\x0001Üüû`ú;È²\x001dBÆ¡^È\x0013PNýÅz}\x0003.ÖOïq¬Ö´û6jÀ\x0010ùµ¢F©[Q£ÝC\x001f]\x001aÔë>¿¢&¡zç!]\x000coxF\x001bk_rHÙ\x0012I¬	%QDN¸Át\x000fÜ°Aòä\x0016Iû\x0016Éé7µhp,\x0018Ýpk$¬ßÑ~otÃ­[\£mø\x0018UÎ1\x001dôT³\x000e¿'ÅÙÆ:©dØ§/¿µ)\x0003J¶1\x0019ÍGÖ\x001d\x000cêÎ(7WU	16\x0003¬MÀ°\x0008õØ®\x0018ÿì§ÄÝ!P3\x0016¦f»ìp56Ú}\x001fsOô\x001aÚ4\x0001}ôäiÔy\x001bÓVSÞ¥¬.íê\x000cq×àäPàÂ\x0012óí¯\x0006§b\x000f®+{ÉNîÉÌÔá°|!8°hkdôô°[Ê°qØ	u1ÇÛÁðüº=	Jgû\x0010\x0000îÔa>Ûó£Ú£ÚL£;s$\x0014ÕÏBüæÅ<Ùä\x000fHüxÍ*K%"î\x001c_\x0010©¦\x0018}¯x/\x001bÖ{\x0008;"X/ÛÇ¨sÐx!;9\x0008gB°³²ÐY?\x0018²	q|\x0015\x0016UQ\x0003×_Ê\x001c\x0008VÝ>\x0017; l\x000bu±ASÿ
ÎÊ¦63\x00126)=í§P\x0019êÞY ±º®çe¢=ÄVÆàø·#òR·
O
²Óó\x0010ÞhêÄSè§p  ÆÝïåPAô\x0014+è4Å#ªyu[í×á±\x0008,uîÀâ¡íAd^\x0010m*6N{ï^YÖ7ôY¯©º¬éóM]öÖÙ§\x001ds êh«Ò(Æ\x0017hÖ@Þ\x000e^
0/¾dÕø·)\x000e;¬½ã@\x001c;4%0ç\x001c\x0008Á\x001178IFÐz>4ï¦Õ¹ ÙµbJ
%Ò l;\x0019³
þÀ\x001fyð¨X¨5~\x0011=Öl\x00020pr'/\x0001\x001dä,CIÍáÇ¨m¢ð8\x0001ß\x001eKeàöö¶ÒU\x0004¹³óå²l\x0014\x0005!\x0007(\x000eÏY8ß+ur¶}n§ÉÛÇµoßrìXÀÛfÆ\x0019Ã%\x000243½ Q\x001aÆ.z>3Jgq7ðGÐÔ!k\x000c¶2ÆhM\x0005~y\x001fpb´`\x001cp|¤I*!\x0005ÂÜNÐÝ~,æÓ\x001cZ_°¬Q¨ÃhÈÃõQØIJÛg\x001b\x0006T&àr\x0010ôQ\x001a.&JI>®û3¼c4É¡\x0019\x001e3eÊo[ÉyßVzO¦·\x001a\x001c\x0012ÜvÚlÎVL×¾èÝ\x0019wViÑÖ\x000fSW ßí\x001eÊïðÑÌÇ\x0004d\x0011qC÷áI8láÚéù¨â¬sªjßþôë\x0018\x000cthúé\x0012óçvz\x001e' àÎ\x0002ëa£\x0003\x0012Ù\x001cÄ³ÏGÁ/ÎÄp\x0000\x000eº¨Ñ|lýJÏZt_¬ñì!ßÊ\x0014×Û³
Xþ`½µ\x0013ÔÞ¹`ý{\è,~\x001f\x0012 \x000eÓ3¶\x0018­fç\x0000ð!â\x0008E÷ØQ-Üq¬cé¼C2Ç¶üÉ8;=2ÎNð\x0019#Â\x0008áA%èýwRJz\x0002êº.\x001e¤\x000f\x0018~Âs<ÐFØ%:ç®ð°
Pu\x001d¬È¦\x0017\x0013Cì&¦°\x0017s\x001f¥ß(ÄñÊ#ÿþÄï\x0018\x0000eóc¤i¨ºñ.6\x000e\x001b>ªÑ­í
?æ:\x0008\x0004f\x0002F£j\x0000\x000fNÉt}¥b¼\x0016\x0010Û¢+\x0000x¸:kì\x0008´:ºf§0n±}®ôÙ@5NÐò&hÏ\x000bò1ÁÁ[/ÁÁÍLCÒñ >\x0013¤ê\x0011y\x0014\x0017w·c\x0005
'Rõ4Ñ§\x0008F\x0011s®°îW¶\x0011\x0006ÅO\x0002½¨{0\x001d\x0011zsò\x001cî~À¢+E\x0014Dù\x0019\x0008]×AÏ_\x0005^\x0007ÁO\x001e\x0008\x0012û\x0005vsÔZô¦\x000f{i\x0003ÜN|lª£­\x0015¤kÛá\x0011<\×­Yi}*/\x0003\x000f^Q(,¯\x0006\x0003]¡\x000e\x0005Ùc>F7°\x0002¸>M-\x001cug\x000c\x000b8i{»Îk­à>à´\x0013\x0019Çc[\x001cW
Ï¢K).×)Äì£~*Úò§ÊâÌµbéörÛ¡zP [.röç³blÈ¼DÔhZüNo}\x0008\x0015á$÷--t5&\x001fÓ\x001bSìì½\x001cg) 6zÛ1\x0002^Î-æ\x0012,\x001b{SÿÏKØê¥\x0010:HGû®£ÊM\x0008"\x0014úÅPD(ï»UDx]\x0004ë\x001a¾:PQ$ÛW\x00053¡PX8Ærèø¥Ög¯¶åÕçíN\dÏ\x0008V»\x0001m\x0008Ã\x0016\x0014sûÿW*Ñº\x0007\x0013.d¦î¤^Ë6±2`ýÃ_!ÐÊ(©ëòêK~½ä©îüî\x001d¬fpB¨©\x0016\x0008H2üTv\ñP®\x0014(\x000f¡o°ÀPOÒJ/en&xP ÞENëf>ÌJ¡ãyíd{W5¶
;ey)\x0018
5î\x001d7b*¿7 r(ßÈ¹u°udª\x000b}+Ä^+Ñ¤ezäöæ\x0012NËPù\x001c?9\x0001b]#]ÝÞ\
s\x001fH>}_{Æ!ñÎÔÓ~:+\x0003¼\x0008 µzÆ\x000er¿\x0006· Tªi{\x0008¥®²\x0018LVã|öY»_\x0002\x001aÁL'©\x0012T¯@<\x0005P4÷nm=<®·u<Äó(\x0001}Ò\x001esÿê(£°NXif­Ë*æ>ÔhK\x001a\x001cûZtÇ°¤\x0003Z´d]Ò{Ø§ðj÷\x0008U:\x0019å\x0007\x001d6æXÝ¸û½äE1ò\x001c¥ÉñèªÐaEµ1^ó&hæK<HeÛ¦]èóU|XÚ¸óx\x0004h\x001fÂâ.ä\x0011Äëµ@Ùò´j£~·Üqæ­j/.}<do\x001b¨{À!ÉS B	\x001e£\x0000\x0015lÒ4>àÁ\x001cò´I=;YÒåÄ\x0017>ä]\x0015Tà\x0017ÏÎÎ­pe\x001fóS\x001fâp\x0004º©è~i© æ hµàÏ\x0017~\x0012iU§Ñ£xµ=\x0003ÊÖ>ÈQ	,W\x0018´T\x0007p\x0000e¾ÔïfÖÔëY3*\x0005nz85\x0003÷ä(N7x ÀJû\x001c÷S²rëó¼¥Ù\x0018Å=\x0014Ì\x000cúü¸Ä\x000e¿´*`Gàõ±¨+A\x0001²åyâv9C9¦Ä3wJøðGKQÈ7:}\x000f¿Á\x0008sèùÃ÷°#ª\x0004#Tª6Æ;nþ8«¬SºÎWÃ¤àu ÞØÁ;4Ûô\x001dë\l^s¨ðØ3w\x0019DºµÇ6ß\x001f]{÷ØEÛ)\x0017E%¤áC	²¶ÎøI%_ØÐå«)C»Ãù<8\x0018dXg<\x0017@ã\x00182Ö\x0015\x0002h\x001c\x0003Ö/\x0016Yð Ù\x0019ÏÐ\x0015Ð\x0010à>é\x0007bN\x0014ëâJ]!õWvö\x000b ¦=ºlð!¤4¸;¼\x000cîF¤î'=8=æË
ÊM³á\x000bÖIP\x0016;Cû9¯\x0017\x0017x´Vö\x0019Úá#¨r­TëpÂ\x0007l\x000f\x000b1<o«3`,À¦Ì\x0019<#èmùX@à×¼,á¸\x0002HÏh2}Ç?GðçÏ\x001fUãúoãî\x0014jS\x000cëÞ^\x000c'ù]É\x001då0Æ¯Ýã67\x001c_8Ë'ã \x0012Òã
ÇñîîMÒ
\x001büüZwÉµtj}Ç3:õú5´eIu](·è\x000eÓIxÇ3hÖ¯9¨á\x001f¾«EÂYAnóýÑ\x0015äøð\x001ei¨ðÅO\x000fuáCº\x0001
\x0012®ñIEÆÆâ\x000eïøPÆ:tgWx.i\x0007ÁÁ^\x0012
HwhöHå\x0019\x0006zÙ£ýø\x0013\x0019ïÞ\x0006\x0013°v¾øåÎH¨æÎXO(Ü\x0007ÖpB·B \x000fo î~{[À1\x0004É\x001eß>¾®GéE&Ùd¬Xd\x001aJ\x00179¡È\x000e·\x0010;|ä\x0005%n\x0018_f¢ÆHa:,Ö\x0017_ãyòÃGC@l\x001fx`ìX4Å¬\x0000ùTã¾;DÌÆ£Iï½#\x001bw¨º\x0014%nî´ÀP\x0011fÂC8Fp[Jõ\x0002±ä`¼Ï\x0013d§j \x0013y»),ÈùÓ(\x00187\x001b\x0002: O×)4Arø>a\x0011\x001eðäè\x000c«\x000bQ¹u,²ÉêU\x0017øhkÉ¤U-DÔ&nnÇÈòÅ4\x001b£Ç<÷QãvÛùæ4\x0017ô\x0000ÁMLÕÔ¯Ì¸]¿j¾X>`.ÞWoØìEút~¶D}aÏé£åk\x000f\x001dCÔ½\x0011uPÇ¤\x0008Ô¦Æ¹Xyõ°ê+\x0010­K}ÄÐh\x0001	T­Ö\x0010Óüué#*.\x001eûÈBg\x00117ØÉju\x0017?Y=âxã#u5¹
eÇt9ÇÏS\x000f\x0018!Ë"raô6Î±\x0002¬q\x001e£ïñö¡õ\x001f°ÀÔ

endstream
endobj
217 0 obj
<</Filter/FlateDecode/Length 6023>>
stream
xÍ]ÝÛ¸¾\x000fwÐ¥û`Z-þKg\x0000$8=@ÎNcöbf.\x0014[ÝñÂ\x001dI\x000e&o;ãye\x0015%ÿv["}6@ìnIÍúT,\x0016«ÅâÝ}ÕLòq\x0013½yswß4ùøK1~¹{·hÅü·»ÇïËâîSþ<-ófº(ï~Z}nàÒÅ¢)ª·o£w?>`
  
  
  
  
* URL: [https://www.agencedusport.fr/IMG/pdf/2021_guide_d_utilisateur_comptes_rendus_financier.pdf](https://www.agencedusport.fr/IMG/pdf/2021_guide_d_utilisateur_comptes_rendus_financier.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=ÙUÌÉ/-E´ÔGï\x0004Q\x0018\x0018i«\x0015I
K
¥©©Ù+Fh=\x001f\x001eó
*+óÅb^jZÚý\x0011bi&z\x001a33sbL&Ë¾ò#É\x0015´.>ý \x0005ÿp¶*Ä4:\x0007ìúÖ«%ÐøÚÈ}X\QZz-ùå\x0012$|tó=4Ii]u©T*ÈHO¯î\x0018'\x0002\x0001®xÿÏ\x0000Òæç0r\x001fO$Ô\x0000\x0018Vúr*I/+°ó\x00075±k_§Ù¶%÷sÿ\x001e®Àc\x0002ªÅbpxyyÒÊ2Éß\x0008®\x0000øÑ®º\x001c\x0016W(à\x0001¯9Xct\x000cW\x0007&\x001eÖ\x000bÅ²Òâüä´\x0005=è ËÐ^Çâr\x0005">a×ÐáØ·úé4aUm±D*fd¤ovG³ÀÇîV>¬dýúé,^­qwI*¾®%&\x0008\x0007]×~x±¤\x000bÅ­Þã¹}ÜÓñ`Lùq\x0005ÛCM9{Ä­ö÷\x000cNµ×¥¤åÈlq\x000fÞÄ\x0015\x0004=º¬/XËÓö1Ïãbfe÷ê>Á\x0015äÝé{Õ$\x0013Ô?e\x001cW\x0000FÐQÓ6¼\x0019ß-õÜ+.-+\x0012I¤E\x0005Ü\x0014+\x0008£êªb©¬¸L\x0002¢»d
É
ÖÅÊÆÚ|ËÌÈæ.\x0013\x000cööD\x0017Í\x0015EÜ\N×hBË1® à4Ý¾Îcr\6SZu×âú\x0005åw\x0014W@\x0002Ï\x0005íÑý[×K\x0004<éÀBBâ\x0007Ð&iV×\x000cô÷¸WËMÉÓ .ý\x0002=¶b> ´µ3=YüJ³\x0007ºH¯qéüL½'\x0014ã
Ü¦µk\x000c=QxmëÎ\x0012TZý¡×õÂ[}ëÑ­ø{\x0017»Êrª_?}è©={\x001eÖ\x0015øíªôËé»D´0­ôeç\x0016\x0019ãÂageVË¨:®5láQ)ïö\x0008L®pÿÃ2zÓÀ
æwT³Ï?ÖÇî\x0016BÔ|ú\x0015²ð
C¥©røË°®p~+H:Ël0z\x000eûðÅÎjAÝk·ßïAM=
\x0005ÂæÁýp\x0005þKÜÔ\x001b{â\x000f\x000fE¢Þæ`3GÖå;+@wf¯\NßF"éqõ5#³Òì÷û<Îùþ[×rÜAröht\x001b\x001c¶\x001b¶e\x0019ÉÏ\x000fê¥15~nBÐ¿M)ÌÌ^¶&\x001c\x000c9uùô¤¾Ý½ºhçÖ²ëúÂû®BnÛ¤*Z:²\x001f0­°Ù"\x0015\x000f³9äôLÖê\x001e±Ñ£\x0018MJ8ñýëéw'´ø1Ê°?v_&i\x001cé.\x001e^{^ý¿\x0008® `^få\x00086	
´n
K)O5\x0011Õûô$Ö\x000e\x001a\x001bH ½õ`BAÈ3él¶%¼/\x001fjÉÜ²ûc<Æ¸ÀböÝ7ëûÄCy©?k\x0013Ê,Â~×Ëû\x0015åeÅl~ÞÐT¹ Ó J;³tB=~\x000c\x0004Wp}K½&$\x00189üE­¸kjû¾\x0011«+ÀÃäCh\x0015öjqï+°.^¦KõäcÚGH	\x001cì(Z\x0017\x001eá7±ã¹\x0002ßîd6·ÔèÂ¢àò×ÂúÑ@¤(\x0004þïx®@Xèß_Ê(!Ô5ð BÜ;»zOÕ\x0015É-½\x0010RÅf<[2&p\x0005e?f>&$o¾*c¿\x0006ù§C1ÂdÊH-ò\x001bf/$	-DÖ'\x001f»Ï\x0010Ý\x0001ù¶k«ïÿá\x0012ãõ\x001bWsrr6­áx®öåéòï\x0002D\x0011å
Â^k\x0015'­x\x0008"nå¤°×îgUy-Ãä^ùQ\x0019IÉïc\x000f
®µm\x0003¿ÑW+Þ§Î7é,r)\x0001\x0010å
üO®sj{>\x001bðÓ\x001dùº>s®÷ß:ó\x0013L¤\x0003é¯ò~L5ÖÁ.íôcÇtÀ¦|MÏ3\x0011®F3q73ÿ¶+´?ÿ²æ«R3qÐ-\x001f<Ë(F}xÐ¼\x0011«­\x0005(»ö\x001fô=Ä¾¼×²ÍNËÙ&ø+tcà\x001a»ÌèÁÐÝ¹äïO¿UÀU\x001dî·\x0015¦]zµbØ\x000fÚj3/e\x0015>ôöî\E>N¯ô\x000fòjD>Î`\x0017éá@pÓÌ\x000b;þ°¯=´jÄÈ\x0010` !éô.é2uíIÜZà(#\x001a²õWqJ^¬á+(ùëYÞéHå|ÐÑZÂ\x001bÚ@°C­p$ºÙã¸\x0002<ì}Põ|Óµ\x001fvTð8 HÁ+GÎ\x001eªÿ\x001f¿Ë\x0014µ\x000cE¸~¹KûÆÝuÄ\x0015üéÇ
òÂü¢GódO<Wp%-MqQõ<nä]<ÅÎ+".¬xüv)±\x000bQcÁ/Kè\x0015\x0003
üd®à§óç§wàÄ\\x0006îï'u\x0001È\x00150¿¥Üs\x00103â¤KÓ»P\x001anÝ\x0002='w\x000b	Ìu\x0016\x0014¶\x0008\x001f£ç¸j°)CÖN\x0016Z(&\x001e~÷EÆßÇ\x0015J/µ\x0012ëY§úíËB;t2Wð\x0013«þ\x0015é§6únd=\x0006×\x001då
äoZ3ÅMÿmÓÉ®¯3"·smöþÈ¬ð\x0010KÖHÄC£ÍÂ¢ö\x0005à
Î'\x0015\x0008%F¶Ng\\x0007¶åÕMgdò¶'C|æÍk_þ\x0004®\x0000÷õV	díãñw\x0004^ÔNýÄk²6\x0010?uó=ç.¤®\x001a¡t\x0002`\x0011úÃ\x0015$9wx9Ì\x000f\x001a¸téf/ãÄ/@{k\x00187ÿNä
dÛ\x0006eêå\x001cß\x001dºS|÷ÍrwÙ\x0001WðSgÊÊ	ei'\x0014Òô5pKÚÇX\x0011¹'"ë
,«ý9¼*"ÝÂT#·¯\x0016tÄOò±u\x0005Ñì\x0002nHïÌ?fzªxU	Éá¦¥3\x0015\x0010fßê?{ö§w
;Ô\x0003þÃO[DÚ{ô\x0005<ÎÌ.itøø]\x0010·Ax\)y:\x001dÙ0¬\x000c%ýA\vsfC\x001b$ÄIp\x0005W503q­¼íJMçÁ7É$r\x0005?ý~\x0018yMÝÍÝ\x0004\x000eö\ç4=_òûýN¦Þ>®$\x0019\x001ao¿~ó\x0015\æ·çeô®\x001d\x0004Ý¸\x0002¯ùÃw§XDoµøTSÓ³Or\x0005-C\x001eT]Ö»`Hä
ö§òï\x000c\x001e\\x0016Fd)\x0003Ëð!Í°ÏV}&RW\x0010
Àa·IB?7¹\x000b]Öÿwo\x0012j.\x001ez{[Xt
\x001cl\x0016_}¹d>ÖsF¹ðLg¹°\x000cÁÁ6YfËÈö1g\x0000+ @ÂçBÈ»¹¶055ÑÑXY\x0010ÿ"A|ÒÎ}Q\ÛH"õÇoºçtÊÉ+²{ñ
¼¹+)ì|Gþ\x001bÇB\x00159_\x000eõp+ÐN?üÓk&ªdß%1T¶iýmÆÕ«²ÚÖ5­=ÁsÜw$i·g"l4²=L§A®Àºüü÷ß]4R]øÃÕ¸7!\x0018×³R®\x0014ÕÝ[Ñ\x0010+ÿ ·{.'¿<]L¿Û<è±mf|K3ÆÝ++À\x000c³ýþlEm=¼àFå¹³ß*}\x001fá
n¼Q\x001d\x0015äbgõ_¿øöJÒ¯ÿòGþgD	öÉ\ÁÙ³ðáÖhg<ö©á×÷[n
33Ymî\x0013¸°\x0017©\x0017¦Ü\x001eØ8\x0018ûêë¿}ñß\x0017®þôÍ¿£]>­\x000br¶\x000b§~8wåò?þî÷3ºx!ûQmnÒf\x0013ÝÄzoÒ«\x001dÚÞ°)ÇiI\x0005¶¸kã¹ Û61Ð{ïNS\x0001+5»¬;¸k\x0017úR®&]¯oW\x0018G\x0003BîÅÉcN"-4-v9T}\x0013ùfMÙÓ\x0017¶ÜûÕ¡Ìä+Å7ï¯î\x001eZooå:»KþáÕMþà
4ïÚÏI«mÔÕþ¯ø\x0017B­
4dU=oE9ÙIÏkõàøæë\x001b¬\x001bðu]Y
q¬~+ðìæ\¸ )#4§á&ýÜ©½ø¦°P@¾:33=Ñ~³05·ZGl"F\x0001ëü°" F\x0006[Úv:C+Ð¹Ü­yYæ-û\x001e
#Õ:\\x0007\\x00015ë¯º:n5Ý¼öýùiÍ\x0001WyTqSè¢\x0003S®#o1\x000bzÑ\x000f\x0013\x0003÷ZïÜ(bfÖÄ\x0015UØ2^\x001aCÜ=4ë&¶ÕÖmnúUnÑÉ\x0015
¹9+ð|å´³o5\x001e¿aA$ª2:¬q\Á¾Y½ÖûäasSmê]³ÚD® ©yp<Í³þ<³¨\x0007¬râ¸\x0002\ù¦üôyz=15¥ÂKW\x0005z?ä
þB«°~C%¿j\x000cÄs\x0005\x0019W\x0018Ë{G\x001eZr\x0005Î½ÅÔ¯¾-o \x001d@Ý¥¯Î¿Y79ô+yIÜâºé
ýl
w\x001awú_!4Ò/j\x001c\ÃÝF)+y|'>é>+ðjssSè+¿tßd\x0017Ø}Øzÿ­ô²§QkÚKº @}a?¢®\x0010e1D×¦7\x000fÕ«¬ö7ºLø·
ñ×©B+<ÿ²&ãÆÈ\x0019îM\x0016­\x0010ñbG¸?\x000cÈ#¯\Ñ/¾øêÛ¨¼QòÕyÚÉîÎÑ.\x0008bÏú\x000eÞ\x0016\x0015<ù°\x001f´Us²,D3ë(W\x0010ôXï³SyÏ\x0017HNc©·á»Ët²Éüß]\x0010\x0002CÞ\x0018íHNJ«iíÞ±\x001c^é\x000f4Ðjºç¢Ó±r¥´ÁuÛª\x001dîíimn\x0010&ùÿì}\x0007s\x001bIæº¸¸ÝÛÙÛ¹ëîéi©[Ý²ô\x0006 @Þ;\x0010 §è(G&EIDR\x0012%Q$\x0008 ÷0·exYU( @#3-íôÌÕ\x0017
\x0005YÌÊÊ|ùòeæïÕO¬ 8WPÐ7{°\x00051
ñUÆ\x001fEÀDôö²Ï|Ó2µ¢îGq\x0005Aûæù¯¾iÅy¢æÊK\x0004ã
\x0016NªM-\x001fú|[=ú$Á\x0015G+wÛYÕýn¯«¡à\x0008®à{vó»¥wàßÌõ\x001e&W°ù\x0004Há
¾ùË\x000f×¦'9éç\x001eH\x0013F(ÔpöÔ¥§Äºwä}výü½ÉÁåçOòïÈÞÃ\x0015°¹<{üþ]ì¡¨P4«A÷#Ý¬Ì©å¸I«_ýþdW\x000f^ó\x001eñÏ§/Ì)<\x0001ÓjAú¹\x001añÀ²Òr
Eî´0³ñ¥GÀºÁÍøX®;ðü-\ûó\x000fË\x0016ßñ\\x0001ãúsÒ9ªsõûì\x001aW\x0010:Ì\x0015Üjc^¤bT¼¼Éç\x000eÍÇño2\x0018ü\x0000Î	ú¦©Ñ¡¾ZæéÚÞW\x0004WÀí#zYÄ§8Þ\x0004tVýlS~%\x0010?¯î\x0017\x0016ÿDå
\x0010¿µùR²\x0006\K\x000b3F\x0007;ê
ÎTu\x0003ÓhLq8}ñ;rpl´.cäÝ®csúôÏg[ñÁëbWÛÉÿ\x001bU\x0012ÏÇØ\x0015Ã\x000f\x000fp\x0005º@ä\x0006/oì

ëË«\x0015\x000e?+øê\x001cëéË·¸¶¬ZÝTr+ ÎÊy¸\x0011×«ü\x0001Á\x0015¼\x0010Ì*÷rQåïÒyTkv$W\x0010Ü³<8=6Ô×À>SÞú\x000cÚ/ÕdL¼Ò\x0012E`'ëësª`Ô-TÀ©µâ/£PXTÀXÃy~óÊúñ`üò·ôûß×´v¯7\x0014ef×^MÑG¢Á7ó¿ä-\x0011{¢¸¿?üÛÏéi9Ba×Ø\x0019WT® ·¨í\x0015ÞM%\x0012O
+\x001f\x0012å}õçSii\x0017þóþËð`s ¾,ë/UB¬
\x001a9\x0017\x0018ü\x0010i\x001dç
V¾?È\x0015 «·«Ù\x0018±Cp\x0005`Ö/M¥3ª­¾p\x000fÐ\x0013+Ø~<.¸x
¶®.(7\x0010g\x0014÷¡Ã5$W\x0000\x0015Ò©Û×\x0007ºÛNúî
«]\x0017ëO÷I6êÇ£ÕÃ\x0018í¬}w/÷Bºx`Be=è'+Î\x0015Ä<ÝEZq|îÊ8S8úbÿ£As\x00054hÐøâBÝeg.­$=Ì\x0004íòÂsgÉT*\x0005ñOí\x000eEÕWÒ\x001a.Sß\x001f­æÝx\x001dÿ\x0005[S¹\x0002ý«Ë?\x0014µ9¨Ôz3~Ç\x001f\x0003Òçå9i·_'\x000fâ\Áør|~åV?ã°1®À¾zû[FS2\x0013)2Û\x0006#_òä
v^ËÄ"\x001c\x000bµ\x0016ÿ84»Hovú®ïXÔy\x001b+M¯¿Ïä,­Ëã¯¨µ>Ì1+:[J	®àÒË#\x001c\x0000J'Ú+/Î!H»4Ëmrà÷ë¨\\x0001¶ñw!Á\x0015_!ý¨ûÌk99y×\x001e.ªªå\x0007E¥Çq\x0005äN\x0017£b8@YÒcç
\x0018m{\x0010ä·É2ÎdnÇ\x0003O\x0010÷FÕP,´0\Ï\x001d§zxyÍ\x00159\¢Lá©ÿTA¹ú\x0003L<iMÔ\x0005|+pk^efçM>~§T¨\x0017'º1®`\x001foVßÒü-NÖùÁ
ÐD(\x0002{¬ëCâ\x000bÌÝuåZ6/Ý&ÛQ¥\x000f\x0013ûcaßÊãÛå¬ÜÖ[¯(\x0007JÎÝY1\x0012¿-o¾Â¹\x0002Íñ|VÇ:Ù¸*¥ºõ({ØÃhLZÐÜTÊ}µ£ï.ËÇ}\x0005Ls{ç)'H\x0013\A@ÇÌÎ¿÷2©9ÎãN\x0000¢pù\x0013o°]\x00158è¨+8ùÜHè7.<]X|¹ëO.t\x0008®\x0000,-K\x0013Y
WTó}¼ÑçÐ~4Î\x0015 Ðë	azu÷µMVÙÉÎOá
ð½\x000b·Y~íbs&£JFÙ
Y7ªy£wn+Ôê×7à
Sñi-ÈÄ©ß\x001eínÊdU\x0011GS`(¢<\x0011V°+ÅW@]ã
Âû¨âAwùÅÙÅ\x001b\x001díS+û±½\x0004WðâZ\x0013£¾ëdK£Ýé*,<Ä\x0015d;#Gr\x0005ÊG¢ÌÊQ9)p­Þ\x0012ÅÏ\x0015|Ëíz\x001fW]²m?ää
¼fIÎü·	
Qèü\x0011¬uàXX)yÊ+Ë.ê¹K1 °|n43¿áùòR­¿ÌÏ"¸jnú¢î£¸·$W_}Çl"¸üvrOr\x0005û8×dØ~×Á+Í+íñRÖÀë3]\x0019õý	­Ó\x0018l1\x0018ÜëàöÅW\x001fÇs\x0005zAnÈ$'\x0018¼D&*­9\x0012Cp® tìTóCÕõ·0® =½Iöw+Ø'|\x0011\x0018¶\x0006Ûk3\x0018M\x0006_tõnWVãP2O½
;¢!óÙÝÑÂÌÌëÏS¶½f{­¿,Çè²NsU®úÍ­\x001cNå£ÅUµRý°­¢ä
ra<¹ÔTÓu\x0019t\x001fìßËé\x0005-{!¤à
`ÉíÖ"Ñ%âÇ÷Æó9|£\x001f\x000e¹T¬\x001fÎlSÝÀÞrÖèS5+@Â®jfïEQù÷ÜA\x0000¯ÜlÉj\x001c¼P\ï\x000c£º·Siù\x0015Úøjç}w\x0010äÏ¯æ\x0014ÕÎ½ªUª{üâÃ\AHñ0Á\x0015°¸
»\x0002¢Ð#Q¡è\x001aç
ò\x001e­Ç0f_úÃ)¶l[A\x000e[zHc­7÷ë\x000bs\x0007ï%"S"FÛ|ü®DÐ¶Uu+Nñ\x000fs\x0005ì\x001eîGjO\2\x001fà
bug\x0012\\x0001sâ\x0005É\x00158$ßf\x001dÍ\x0015ÜlÍ»8r\x0006;\x0014ß$W {7YXuÿù²Z¥|2\à
\x0017âÅ"¹\x0002ÕÂXQõõø;\x0016h)=s+¨äd¼Ò'ûµW¿TSxíÞó\x001d¥zgáR+(,ìñÄÏÂÄÆê2ÞÚìëS¹ÚåíÄ¸£
QÆªW×Ê*á
ÂûÞ­»iå\x0003ògã
½\x000f¢hÊ\x0015\x001c\x0007Áß7·\x0019³Uq\x0005/¯53Å×]Òâaõ0W`Z}Å*^x\x0007Tnñr}E\x001bÆ\x0015UgÞx­%\x0012 °Mr\x0005E\x0002Âa\x0011+@~i/\x001e'»¹ce"­¤í1Ñ=ç¦\x0018E\x0012K
3\x0001ù5ù\x0005s;Nü\Aº	`\x0018N®Ô?å\x000eÂà}\x0019\x0004Å&Ì;aöR.^gW¶ÅÃÂ\x000c+³`\x001c
ã
 °óÝwknª
	\odwÞÃäà
À(~§«ªtðÁ´9Ir\x0005k\x000fºÓÛ&ïYÏ±*ñ ,ðñZ+gzÊ+ø}o×w4rY5ç\x0002É\x0015ÇçÒ	®\x0000ë*\x0001Ïâ"ffßÃëq® êî(ÍíYJ´¯ÅuèäÕñ ¹\x0002\x001a4h|	ÀP\x000c\x001f¾Å\x000ePU¤x¬KÎÀÑð^geîÄëøb
\x0001ÓDtß­}V¸\x0008èîëÞþÂ,o'N\x0011\x001dÛ\x0017NeëÁªä
|æÕ4¶dQ8e(ªqÓìNz`Þ]m.ê#	\x001búÏÇ¸°k'ót¶z/É·Ãí;\x000b,¦Ð³\x000f½½ÔP:8\x001f#=î\x0001¹csþÉÉUr
x·¡¶bÅ\x0007+ÈQùl\x001cjü#ô\x000bµxÄºe#ãÌ\x000fr\x0005¿\x00024æ».*áM¼\x0004\x000f÷Öoåu{ð\x0011äÞß\x001fÁ\x0015h\h¼DõÙX}>ûh®À£}Çf\x0016.\x0019R\x0018é¤¿\x0002\x0014NÓ\x001b¯ãq\x0010âþ
b~\x0003çÌÙ\x0005;ùNÄÝV9½|\x0002æ0¬ºÑÀÁýêýè¶2ïÂãC{4É\x0015lÎ\x0008\x000bZ	ÖÐîbf+ º9SÑØ)@ÈÃÖ¢Îy5äÚbär¤ä\x0015Ë\x0003ÍhÛ~Ìf©q­T7>ÅWur®ÿp® dYf3Ê7¬\x00012}çIFFÑOu\x001c¾»ÝÕÔÚÍ-\x0012\x00114ËúÝ®Q_<à
ÐÐXCáÐìZ<ÇT=Cà\x0018D²ZpÈ^sþñ66\x000b»Ô³i\x000fy\x0014Op\x0005PÐÊ=Á`2^ckÌ8Wm\x0015|Ó\x0002Q¯¶ôäù\x0003\\x0001)Éð¤¸dd.¹@Ó<¿RX1],@!Ùt\x0007Á\x0015ø\x0014sÌ"Þn\x0010+­[³øÍ?§l¡°ÿj#÷ò\x001bcâ	är9[vèx®`\x001fñ©r3Ò\x0019LöªÉGå
DyÝqïcj¥*Ï8ÿ1\Oû]XaÂwªBÆ?¥[Éö"$þ+¹\x0002(°+(ÌJlë \x0008BÝVÃºÌ3f?¹!\x0004'êØ}Oq\x0011\x0011·ñÇ¾¹Í}$t[ÈixC\x000c+Ô@Qá­·ñ-Ý8WF&øÅÝwWðÝ%tõ\x0017~aÛ\x0008~\x0007áH® .í£6ï'	Åí·C¾Ç¬1ûbd\x0003aä
 §S'³ÇÅEå
\x0002»ììMR,(\x0002\x0013þ
2¾ÿã\x001aëqhØÅc]¸+µ¼+ ßºO?Ør9·\x001f\x0017p\x001a\x0013Ö\x001bA¨6\x00025¾¹ÝrÆl¶7#½î2±ô1½¾VÜé \x000fzÙbü²3°Â£e§ëç
`¿WZ±n%KÆ:Òg·)\x0007³\x000fq\x0005`Øj)b/%å áKE·ÞhÁbgº£Ý:\x0015B|q"· ÒàC¨\\x0001S¹&ýì¹÷ù+\x0000K îÒsýØ	#|\x001b¢pøéX#w
¯øû¸©öÜ{Ø»HÌÛÏ=Ep\x0005/'«à§½áÕ\x001bõ	®à§3gp\x001a
òYÊÎýøÌ\x0010ÙOå
PÈUváìKMüä\x0017\x0018å¨z\x001e³®29zO,Ït\x0017\x0008n\x0011\x0017ßôK?}Kp\x0005Ñó?¼5\x0012\x001f2Ö]8}+ø6_èÂïxuÏÎ+³\x0005b\x0001Ã[\x000e«¸\x0015\x0018uÊþò?\x0012\ÁO¥\x0003Û\x0002G=ù\x001b@ñ\x000fs\x0005\x001b÷»\x000b\x001aF¼	\x000bLÁ\Á£Rþ-ÌA\x0007\x0002\x0005¯Öd½+\x0008è_2ÕÄT!²§aø]Ê\x001d\x00048xÏ\x0016Þ$C½ ûÛ³Ì¦\x001bÄYñ¥ëµ	®àç³2©¹uÓ?I\x001d\x0010ìVrì·êxË\x001e\x0018¼TÏÆ2xWG¹\x0002\x0014ñU¤Ïg2ð!ã#¹\x0002ôngQëÍ·b¬M
	®À¶:Í(\x0015I\x0012\x001bFRÞ=Ì\x0015<\x001b¯­\x001d_ÀóÜæåT`ç
ößÞn)ëÄy$Ô¹5óc6ß\x001fCä
 ¼[­tFð\x001cÂWë\x0019S\x001bn2oxa¬Q	\x0013I×\x0006Q¶Áz¡ö¤ø+HàÓý\x0015 Q{Mæù;R\x0013èêãÂ²;Ë	÷DèÃ¾ò®{ñ¨Çû6\x000cVä5ßpÇ-0¢[¹ÅRãý"É\x0015`\x001eNåi?å;Er\x0005èüp ±\x000beê¨ÎËyºmÇK\x0005úï9+Ø«>ý
\x000f	\x0011´måùö½\A¼äúéüÊ\x0001ê\x001c¼\x0010{9Î+ï\x0014ï´\x0011?rª{4h®\x0006
\x001a_\x0002AË¨¾¬I \x0010eÅÍ½Ó©\x001e©QüUu!³'\x0010òªÚF¬¾\x0018\x0018DÝlÏcpù"a}MÜ\x0015\x0006fóî0¯¨ºN$\x0014²FæeØ$?áÛ\x0010-ßëc°JAz^CõÀåÅè>²>?!n»862TWQÒ?³B=#\x0010v«óÊ\x001b[ÛÄ­\x0002^6[\x000c¦(
­Ï\x000e3X%ÍB!¯±¦gä	u4\zx½­»gdx ¡¼lèî2í¥Z»êØ%
B\x0011¿¦Z°¤t\x0002«k\}[Ç\x0017\x001cî/ë1&¹³YÊ\x001b½1\x000fGÍ»©Ò¢¢\x0006\x001eß\ß$À'£Ðí
&§B$\x0016ñÛ¥9Ù\x001fÉ\x0015\x0000x+ùç³¥Ö\x0010\x0012²KrJª\x001bZÄ-B¾8#{+ð[7ÊrÓ\x0005Ý=\x001d"\x0001¯¢°òÊQ\\x0001t[õOd4Âø¿1s âÛ0ºWujjÉ¦ú6T>\x001dJ/êI:\x0002Bc/Gë«Çâ\x0017\x001auµ²n»\x000c)@aÙÓ\x001bùùù
\x0002ac}Õ3;Á\x0015xôïØY9­\x0017û»Ä"^\x0003·¤{2¶\x001f]º,îè\x001b\x001b\x0019¨­`]}²\x0015q\x001b/õ·õ\x000e\x000c÷wJ8õÛ\x0007rXúàJ13_ØÜT×8\x001dB~÷àZ[ÏÅáþ²²û\x0012ª\x0002\x0006­ÛÂòâÊ:^k«XÜÍ?Cø6î\x0016s\x0004 ÚÖë)k[$æ8&È+,\x0016µ5ÝÄ~×°ùÃ7íä'P\x0001^1§¬\x001adÀoðS|\x001bº4+%õMBase¹\x001aÜgÛi)-\x0003\x0010EUelÁÈ\x000cÁ6X¤wÎs:?è(Á\x0015òÏõp¿gµá¯'Ï\x0015¼ý¥#UÞ;4(ji+ÎËMá
¼ú¶¾¡6ae`â9lÛ¬æ\x00144»ûº[EâÆl.Æ\x0015 \x0011ç@C!·¢V$\x0016\x000bøíé?gmùÁLGÙ×%î\x001f\x001aîim®¨\x0014k<1t¾¥¥kdtDÐXÍ\x001bº\x0013Þs®\x0000\x0013íµÆ´ªK~Ð])\Áë­\x000cvuïPH$*/Êþ\x0018®\x0000	Z;*Xå¼¶ëó\x0012\x0014.\î(,)\x0005]»©¾ºw\x0006;Áþ+¹\x0002ÐÙ-kó¥¬úf¡ßÈë\x0019w\x0006\x0011½äak[+¨¬°¶\8<\x001bNNõ\x0011ÅÂÕ\x000byÁa±°¥º0sp\x000e[+¹ZNn90\x0006Í
#·ÞÅöéôÒáñ«FÒ·¡Û°Æ¯-­\x0007\x0016²¹YÄ;°î}$W`¿é\x0011w\x000c
´\x000b«ÊZÆ¨»å(\x0014z~³£ °\x001c(mc}å¥ÉUè\x0018®\x0000,ç®	Ê9+Ïb©\\x0001\x0010ûÚã«\x0005¬"\x0010ë\x0017ÝãóA\x0018ã
²>Ç\x00135Ä-\x0015ÅÌºÎI7îÛðH®\x0000hø`KëÀÐXOk]\x0011æ]\x0013³öOoö°¹eá­¯\x001eÀhìÉõ¾®þá\x0015\x0015¿¼UïS0ÛËÊáÖ`\x0003 )?ùx\x0003ãfµKwXyýýíBAsMvãÍc¹\x0002õkeÂëÔíÚõé®ª®û	Ï"\x0004WUÚHØÀÁËK/îäUôQ=Wì<\x001d+j\x0000KÛ×Ò/(gsJ@êªÊJª\x001a\x0017·Uv
W\x0000æý/®ñ~÷/ÿz+øÏiø\x0004¥ù¥
\x0003&7>2f"æ´¤£ÙûhðWPX\x0013/awß4õ\x000còÕ­|nWHÀ¯J'¸\x0002·f©_ÕÈ\x0017m¼t+È<Ý äaC3Uñ\x001e^Ç\x0014®\x0000TD·|SXÔÐ,à77:'Ü\x0010ªy}WÔÒ=:6Â«©h»þzc	\x000eY;kX%5â¶V±@UEÄL|}CÇäò[Z\x0004üÖâìÃ\Á¹ü²&°¥¥qcQÙà¨çZk\x0019»¤JÔ*æó»òÎ¥\x0013\Á%\x0011»Ïk\x0006"k®ËeTHLØmÃ\\x0001f\x000bËª@·i\x0016]§èH®@¿rÍ`¶÷
v¶\x0004µÌ÷p\x0005ûHäÁX\x000b[.\x0004#®_qæoÃ=ýrm!è×<Ð¯GYv\x0019VË\x000bóÛû{»Ú:õY$Wß\x0004ß"(.dÆ\x0017ð¥0²ùäf)SÏ\x0017ðAg\x0018¼G\x0012\x0018\x0010Åf|×ã0W\x0000ðl¤òûÜ&\x0007æ# +ø?là\x000b\x0008m¹¹°AÍÓ­[­-áV74·¹P\x0007/ðm\x0008\x001e·\x0015\x0016U	US]ÍåÙWª\x0017?ýþ$$L¾Ø1lÌròó[{\x0007»Ú¢\x0006\x0016~®`?æ5
ó««\x001a\x001a\x0005¢æ\x00126k^õÓ#¹\x0002ùã¡¸cä }#3½ÜCÑ(»ü\x0019³ Ù\x0011´µ²µõÀð\x0014sÙíW\x001e\x0006!ôc¸\x001fÌæ\x0013Emm±M=õâÛPÿf"«P´µþ¢¤¸É\x0014LZ\x0007×æCVE+áÑåX®\x0000¿7*®b\x0017\x0016\x0003»T_S^R^3/5\x0010\x0006Ê\x0015QCù|üßÿû#î  1WK\x0011ûþZJ
¶]-æpyB¸µ_O+x4ÔÀ,k\x0018ì¿(lád¥¿+X\x001aèìé\x0019\x0019¸XWZqíÉ\x00165çoÃð±«©´¤ª\x001eô¡JÞ2å¦ê\x0007As\x00054hÐø"@ »Y»¾ºº"YUê-\x0007Nc@CÝ5ÉÊêÁ\x0016³Â1vgeeeS¡àXØ ÚHVU&G<\x000f(¨PkB±ø\x000bv³fueE*Ûvy±3èÞÝ\®¬Hä:+t8ø2©d}[í\x000føµZ3I_ \x000e\x0016ËdcËáIY&`¹mH±*è,8wPØ¯ØÚÀ>¡5EÈp}î]T\x0015\x0008î\x0006Ü[k«k;zb{Ãã0¯K%µ
3\x0019Î\x000føë\x0012éuÏç0i\x001dx-Anó\x001eó\x0008à·´\x00162ü\x0013\x0002éUÛ\x00167VÙÇ¾¹¾º&»}\x0001½Zln{ÇtÅxv
«\x0012 O](àÑé\x001dà\x000fa¯Mr¼\x0010µj¶VR°\x001dÁÑÀZeJdä2ª4fP\x0006Ô¦U9¼äB\x0017
ÈÖäAJëúMK¹U{Ä\x000c\x001b
)*ÿQn¦ðÏ"N vÉÊÚ¦\x0002¤\x0001\x0012S«õ¸³AdÏª¬¬l©A¿Sou\x0006\VÙ\x001aÖ¬*ã.¶¨Gb\x0016\x0002\x0008|u}s×Ø+]\x0016­tuEº¾E<\x000cîÙdë\x0006Zc\x000e¼öÍµÕõ-U \x001cRjÈø\x0017\x0008ì0k±¦ÜØ²{\x000f®\x0019Q8jTa²ÚRÇcír.#oÕ\bCaj{\x001d|TmÂJnÑíØÉ­í×¹©Tc²S;\x0004t
|\x0015è9(*BxÜ
Ü\x0016W\x000e=>ú<mJ©bA­ÆH(sØmR\x0019DßØÕ©í\x001e¼¥à°z{\x0003t4Ýë²¾\x0008\x0016àI#ÇVHÌ¤Ù`õÝNZKÀg7®­Jdru \x001cÐiLñ\x0015¶ßµ³!\x0005syC\x0006µ\x001a¢Â\x0011z\x001bkJÙ¶\x0013§P G.[Ç:²R\x001fa
\x0010téþP3#~µÖHÈÁ·kÐÙðc-(dÖ¨î\x0000f
	°\x000f»\x001e·CoÇrNÊÓaPØÈ¦GN¥¨5è³VPæ\x001dBÃQÈ¦WÚ­o*öüøÍK¦&é8$jÔhÀz\x0001EbÚ-Ü§WX©Ð\x0004\x000f[+$¢VjÈni#¦VÒu"Ð\x001bè)Í5L+\x0014ºÔpUX¼B\x0013P\x0018ÉªÖâò:Ì»{q	\x000bL\x001fÈÁ?Ab!Íö:h ´oÓ'@Øë\x0000Ö\x000c(¹Ë\x001f\x0012Ü³(Ms\x0003Qù\x0016t\x0007\x0008Hrg\x0013t\x0019Ù¶Êw \x0004x\x0019¬\x0006\x0015øëÚ¦Ü\x0013Àòñ»Lj\x000b¹jUÜ§DÔï\x0004=B¦Ä\x001aÚ y¨=\x0017E\V\x001dhbÐ¹ìxtBau¶Òäul\x0000
:Q|'\x00172iTÎDxR\x0008\x0004Ìø6V\x0006Ùö^ q\x000b²aj³ãÆ\x001fºw@³dµfç6íewN­Xµ
`\x0004t6Ò\x0017
\x0002YAûbÖÞ\x0016öY
\x000elièu\x0018´¶v½vn7å!\x0014t©4¦$"f|è! íØmFµ\x001a\x001dsß¡VÆo\x0004¡pD¯ÂÒ¯o)Ýd÷÷Yõ½¤ÝÂMéª/Õ¨½»\x000fÉv4¤DÝ\x0016­ÉîÇÅæVht	5\x000cºL\x001a3v\x0005iGxqm]Â"b&Q\x000e\x0006J¥a7ì5\x001bx6½\x0014ta6\x0004D9zÅâ \x0014t6\x001b\x0010õÆ¼2UÊDÓB3akU
-,`q4àÚÞÀô|[\x0018ø(Â	º·7¤RÜã\x000fè5p\\x001dÂZÅ&ÈBos{ìF3ÅÂ¼j)\x001bu4@¯\x0014z{â:[,è\x0001\x001dJ²&³{Ã\x0016\x001a?$îZôÞ@@¯ÜZYÉãÓxwp\x0011­9iNªÑ\x0007:T\x000c8¨T\x001a`0\x0011JD¢ÐYÃ~\x000e§Ù}\x000e£ÆêË\x0015\x000eíÈãAOÓ+AuÖÍNïQãÂW6í#~Ïb\x001fÒ^º¦¸ð71á\x0007À|\x0003\x0008ß$*âö[f`íÁ \x001c¨Q\x0004$\x0006\x000b\x000cç¶½\x0014)¡1ß¨ä\x0012~ÿ"ä¶jt\x000eü¨WX§&îÙíG¼V\x0018PPAcuá¯G½ g% 2\x001fô\x001bØÃ\x0014\x0000¨_(\x001aÐªâ\x001eÁ\x0004Ì¬\x0003\x001djecKáI2\x000c2EP		
Ùj :¹Æ\x001c
8µ¦xTkBþ &FG|Ï\x0002¬©ÕjCü\x0000\x0018UÊ\x0000QÞHFÑ{[ê]\x00120ñÓ(\x0015!\x0008¶\x001b5k`r&*õ¶X<°cD)\x001f'a#Ú\x000b\x0003\x0005]ÖµDA%«æ=ê8:¤05\x0008íÈäv»U­µ¦(4\x0014Rª4DlG`»2eâs`´U«!ÒÂ)I
1Àºº|É
°Ç¦³&C\x0018¡pX.]qà',-k3EÕÝö\x0003G>P¬¦`1®2ØC\x001eÞ±
`\x0012¦ÚZ_®ÑcÏ¤%n­U[{dÓÝ6-î Àç4ÉÖ°ùÆh?Ð5÷l:0vÆ«Í]l$
­ùp\x0017~\x000fh®\x0006
\x001a4h|6 ±Åë¢«ºO\x0018þ>\x0001Ç¢~gáVGIÛíO\x0008>ôÑp©^\x000bÛ/y\x000fzä§Aã7\x0001+¨r~8áçÁl/»kzíÃéh|\x0008\x0004Wà8þ¯\x0006Æ\x0015\x000c=þpº à\ÁÀ!ß©\x001fG¿Ü \x0018ðÿÃ©ÿ?\x0000	Ýêo]7}8åo	4W@\x0006
\x001a4h|*ò5¥\x000cn}§Êyp;\x0006xxMk\x0015yÍ\x0007w+¿\x0018V\x000e>Üüp:\x001a\x001fGù¸ª®Ûõ\x001bà
Vfz\x001a®<ÿpº XÖgjkÆ?Á©\x001c
\x001a¿\x0001Ð\\x0001
\x001a4hÐ A\x0006
\x001a4hÐ A
+ A\x0006
\x001a4hÐ A\x0006
\x001a4hPAs\x00054hÐ A\x0006
\x001a4hÐ A\x0006
*h®\x0006
\x001a4hÐ A\x0006
\x001a4hÐ A\x0005Í\x0015Ð AÆ?2PÄ XÓ;þ®üï¡¨nGbÚ;\x0014æ\x0006¿\x001fD¼»Ò
U\x000edA\x0006ÿz`\x0011·Ü¡/\x0011¥Æo\x0019¨×ª©-1G+ AÆo
hÄ½´¡OdÃ±°Å Ëå\x001a½Ù\x001fI\x0006\x0019¼&\x000c7X´Ú\x0000%~:\x0002t*S<5\x0002ïí\x0015
¹B¥uy©1²}f\x001d"6£z\x0007Fo
Pãã\x0008{Jü¯r¥ÊæòR+ÄÂ6£\x000e\x0014O­3\x0004a\x0011ÉL
d\x001c
ì-{DX_«ÙàRã$añwÐad\x001fèµ*ìr¹Ö`@Âï&E\x0005¼«ÁCrÙô\x000eÒ\x001d6
¾hÔø"hhoWøBE\x0004Ýv5ÞÈ¡ M(\x0002$¦\x0003iö|¡ã\x001a,\x001at«öcþx\x0004ÂvYöì5ë§ú4xÒþ®[\x001fóIÒ?8á>\x0018¸
Tûrbìì\x000bFµòêZûFlþ*G äÞÝ\x001bÿîbjEüÖú®½/=j\\x001c¹¹ò¾vÃl<\x001a¿õDÅp7*öijD\x001f6vÞýÛ\x0006½ÔKî÷L½þ[à£\x0011
ztj¥\¡0Z\x001dÑOý}\x0004PX¿³eõ½Ï×ÈmWÄ-Ú¾çÿ+ZéñG2Ç_]Æ¿g Æí]OøÃ	¿0dÏ&.ÍËÀ0ä°\x0018\x001dÞ0\x0012ñ\x0019,6\x0018Å[£^­µ¦é£\x0001Jéð\x0010#{Ì 'F9Ùy\x0002D\ÛÕ­×Ð\x000fé\x0007
G-&}èC¶æW\x0000
¸,]ßÇ+ªþÕµ¼V÷ËF¼?»tyNö1)
«\x000fº&_½?ÍÞFÑû9Êu4Lks\x001d7\x0016ù#ê3\x0001ëãþ5ùk_]\x001dùph××!W©}©\x0013H÷®N­µ|\x000en\x0019ÝÝ=®Ä\x001cúl3\x0002+ AÆo
¨C]Ý\x0013\x001emè`~zqãÀ	znt×ææ2Ë*Ê\x0018¹y#\x000fæzå^÷ÉÓlÈ
îáü|c9É¸:6gþÁ `j\x001fxx­Ë-¯(â°¬²\x0012=a¶m²G\x001cF\x0017ûJ 9ÿë¢Új63»¤¡[ëL/mÏ\x000cøËùªÚÊ²¢ì<æÄómâyÈ¥\x001b\x0014Uçå1Ê+«Ø,nM»Â\x001eÄ3÷õ\x0016r§WÍ\x001ct¯¯\x0016W\Á\x000e\x0001õ%\x000bjjþ±¼2Ù5µ5ø¿^\x0013XÅ{T\x0019çO2K*kjªyÙ\x0015­}åo÷
^©\x000f¬ÉÐ\x0017£5u£/\x0013\x0014BÈ¥dþtnËH®þr*«øJðµÒ±¢]Üogä¾\cÁÙ«]Üìâ²ª\x0012\x000e£ ¨êÁ;õa6!àÐõ4äÿG~ëÁ¿\x001c\x0007$öìúÅéeÓ^cÙw\x0014æÜ\x001fÒ£ã\x00145ï¾oÎlL6Wu.\x001e½ÿ,pÊÒØåÚ½£'£æõÙêÖ\x001b<QY\x001fÝYú+&'\x001eÓúâòÖ'¿v\x0008!·ñ]í×gt4Ð\x0007íåÂÙ\x000f-þáçÃ5¢++`ªXýó÷O'\x000c ß²y±gÄ\x0011ü\x001añ1ØëctLÿmËð1:äü<6·¬´0» â¥ü×­Á!ßÕÖ¦¹­÷e"hÿþL`å*J99\x000cÎ7ªOýÈeAÖÈ\x000bã¯(å\x0017CñêÝá\x000bd\x001c¹ÞR3¿y\ÇÉþ¢÷\x001dóÇÏÅ\x001bÍÕã/Ðð\x001e~ku7¤K+mvG@÷32Ïûu6ßCé7¿þ·ÿÝyGÿfMÿ×ßs+*Á´óÚã¬DÈòæëô¦\x000fn\@nC%ëÜÚ\x0017¢PÄ¥[);ÿMiËã¦2CãbþÑóe
ÄÒDuÝØq«ï\x0014l?\x001eÈkzNÖ9¹ósëh(\x0016Æ²\x0005·ù#¼>ÝÕ1¹úkòßj(ïúÁd«÷»þù}uù¹:ù(æ\x0012ç~ÿÇ\x001f+M_ó}\x0012(¼õxüÒ½uø3Í¢h®\x0006
\x001a_\x0008±X\x0014Fh$\x001c\x000cbp|\x0011@±\x0018ÿC¡\x0010qr\x0000EàH8¥Èq\x001dÃøv\x001c¦ä\x0000\x0012«^\-k»î	ôÉ©cýn\x001e[h
ÁÄ;±(9¢B{Ýõ¥M
åcOÄ­û\Ñm"!XüÏuñ'Þ\x001f¥w:Ï³\x0005j'¾é"ÖççNÝØÅ\x000cw
WÀøz`\x001a Àh}^çÝUj·gJZîàßFm3ßªÁ²CCãµ¹UÝÓ~b_\x001e-Ov.êÜ\x000bÃÎ\x0015\x0014Ï)R¤ìQ19\x001c
[Ç¢1O]Æ'7\x000e.v`(\x001aÂ\x0004\x001cSg<aýóSù
ö@|©~1r®f\x0004¤\\x0011Õ\x000c=KYä\x001cÁ\x0015À;\x000f{Nf4\x0018=Ä\x0012\x001a1­?ÉÎd,\x0019R6êCNµ¨<¿mlðÌ1\\x0001\x0014\x0004ÁP8\x0002\x001a"P\x0018(G8$örP$\x0016Å%µ\x0002£Ñ\x0018\x0002CáCõBà\x0018QY\x0018&2àú\x0013\x000e®Ú\x0008®À\x0005Cxú\x0008%\x000f\x0014ECàs¤\x0016\x0011\5§\x000c\x001f2\x0012R¹Ã*
*\x0015\x0005ú}+DÔ('ø9\x001b¡êXn1Ê3\x0018\x0006¨£}#Á\x0015`"L¤3=(\x0010E\x0014"~Â\x001eâo\x0011U\x0006ñÂ\x000f\x001eÔAaûÊ¼º=0Þ\x0008YQ²\x0005O¢Ñd}¡h$\x0006¼¡¥_ÚG\x001fv;'BT<6x%\x0006ch
Ê\x0015 D+S«}\x001d´õ\x0001û@¦$\x0010\x001eäHàxóE©\\x0001Ù(ä@r\x0005¨k-#vá¦\x0001Æ\x000cT8\x0016%­\x0019¥v¸5ãPO\x0010\x0010%\x000cEbÉ²\x0011
kæAF
(C"¤ð)5
'e\x0002$u\x0006(²Oµ«Á 5{*WÔ¥#V>ØBIÆ0m\x0004\x001fB°2'$\x000cÅ»aì@=Âé(°3d\x0008e'ºö¡êà\x0002\x001däz_]ª/íBÐ0~Ü¶£\x0010^*Ò\x001a @þÚ>\x0015!eN|Z°\x0018©xà\x0007P_,pZoéD{Ußc¢ÏhÞÞø1S\x0014!ó·r¢í@Ã%\x001b73+@à\x0003Æ\x0001o&\a\x0012\x001c5j^\x0012Ö0\ÈÁÖÁ
\x000fªI"2êá\x00060D\x001d^AÎ l0&0\x0004Åf\x0007«z§¡0­¤\x0002$r>Ø(ÉÉav\x0000·\x000fa 
ðC2\x0013BE\x0010\x001f¸
ü¢ì·\x0006¬©õ qêÿcï,\x001bK²\x0005ÿOmÄFìFììÎ}ÓÓ3ÕPU]h\x00123³-Ë¶,3ÈÌ\x000ce\x0006dfv\x0019Ê,3$K²ÅWW{A%CÃî÷Á\x0019þ`Ë÷&Ì<'Ï/O¦î<Ü\x001e<=w|\x001aÏ?K\x0015µÛB^øµÃíÏ
"¸\x0004:Þ¹~ã}Ö^\x001a)\x0016
îYÁ?i§wÏò_T\x0002¬îNýY§n\x0006ðÓ¬\x0000ôªt__£ME\x0005nó\x001f`ðhñLÏÇ\x0011ZÍ\x0004Äª-
O{\x0015À´¢õÉ\x0013@Tßð*@H\x000e_\x001c%4Q\x0001xyàë\x0014ï³Î>õ¼û¤ê@Yw²;\x0002&{ ¶DYoðûv¿Æóg\x0005í{DZ\x0001Û_Èxû)ÇÂ.\x0010il
Ý³\x0002t¥a6ß[\x0016X9Pý\x000fÕÚ,,héOØk¿\x00045\x001f©cÅ\x0015®g\x0015þbg6Å¦DùÑ5´ÈäG08	^VàQÈ÷\x000b!\x0010\x0006\x001b1"è,@%P'\x0004\x0008ÁüÄ¿þßÒ\x000b+xI/é%ýk­0QXXQ,á3± "?ùÈ\x0004k­åö¬Ì²¶Â\x0004\x0001B\x001bÒ\x0018ÝUU\x0014#\x0010\x00088,="i\x001d
;?\x001bÿ\x001e\x000fßÎ¹B2	ÃaÙ\x0011éÇ&õb=\x0019ôýÏ¡ÒÈ8õÂ¾¯0íj'\x001dþh\x0017ïê[·(®|çÛ8®\x0004]\x0016ÆMb\x0018_s
;ñvÃ=þc\x000f}×¹zyÿ&\x0008ôg\x000bd%³Às¬Àí\x001e)\x0008/\x001dð/Î\x0015¸­Í ÿFü ëÉ\x000cÊÛÑù/K¬±\x001fÔ\x001bÚÿXV\x0000Ù¢°ÔÁ=ÿÿ;n\x000f\x00138\x000c6C\x0008	M.Q\x0003ZÖdÊ§u¤ÕNS©U2\x0008îßÃ
\Ö\x0004æÛÖUÿpA`°P"+\x0019\x000cxÏnÚ=¾º½\
{\x0015\x0018\x000e\x0016xl\x001a	\x000bÃbsÚ¿BãÃiÖ×dDa	0lZM\x0015±t\x000b*&Îç°>à;\x0017Ï »C\x0002</7F%\x0005½ÿT;®¯g\x001b©´P\x000c64ìsÍø\x0001ôf¢EÀã	\x0018ªX±|\x0012\x0010Üxµ9H\x000bæ+³ä421äcPvË´\x0003ÉD¿?\x001fÍ¢à	¸P\x0002«wñ\x0018úÌ°ÝGÁSâ\x0013\x0015Ð¡!a¹­SèAð5\x000fÃã¼È¬x\x0016Ê
@»QUH"àpD\x0002\x001f³£m¿~£S$MÏÏI¤Qð\x001fÉ=3Kù	\x00142öÓgLý\x0004Ú¡®áz\x001aÆá²CqÔ±MøÈËnV\x0015+B(Tf2%*Y\x0001è\é*§é\x001c.3\x0004ÇX8\x001bu8Ó\x0010\x0016U	gs6f·\x0016+pØòþUÐi\x001eªÉ$`18l¨0­úÚï´C»-g¼ÿÛOÐT©\x0017O lWj©P»ñ\x0004,®^>Eo:\x000cp¶n<¯T'JF.¶'ù~\x000c"Êäñ{~ø\x0008¸ë*L¦Ó,\x001a	ÇP\x001cßÂ\x00194Ä³:\x0017NÐÿ)éñíþ«IV°=ÙÊ% âñDNó$ºÉk\x0015ÐKË³ù,\x001a&$.I?»ó<[\x001dàñdQ¸wÿøË[\íÀ·\x001aO×â8Ä0\x001cÎd%	Ä(+pÞ©Ë$<\x0016Ò$Ä*cÀy\x001c\x000f+°\¬MlAÿ°ß\x001ceÇq,\x001e
\x0017ÄÍiuÂK5[®[/âÐ±a¡Xzô!¢Í¾¶¤Ç¤\x0015¤D	HDìPbçÂ1ïÑ×\x001e\x001e\x0008	È	ÞCây@ÇPm
* I(¾0\x0007,áVÔ\x0005áiÅ\x0019Qb2	\x0013¥t/\x001e!`\x0014ÐLµ3hD\x0002\x001e\x0017J¤«fva¯Ü~\x0011.^:ó(\x0013HGÅuÂÁK\x000bªìø²\x0002\x0005\x0007ÃL\x001dÝ÷ò=+\x0000m-Ù\x0012\x001c\x0001Åb\x0013
Znl\x0001KÞÓþ\x0008>?J&Ã¿ûîÿ¼Æ6\x000cÍfM$?¦»¡LÀDU
Bºåt¥Eû\x0007G$W
|Eh7&K03^Ö3úE\x0011U=\x0001\x0017Ú\x0010U+\x000f\x0017\x0010q\x0018\x000c=°nm»ºd\x001c\x000e¥°eóû7þ\x0015©\x0011å÷>\x00082\x001fÎ\x0008Ød.Åå÷,ºìl1¾iÉãJì×°¤·\x0000í\x0000A¤\x0014F¤Õ
®Â\x0015sè³%ìfÇÓëûd<\x0012]\x001cµ¯¿×j~¬Àm8\x000bû+ï\x001aé¦ñÆ\x001c"	2HX\x0002'jf\x0007ñýî¶xL\x000e
èuÞä³\x001aWà:øXÝtQ,\x000eÃâ1\x0018\vã(¬l'©ðnU=af6ú7J¿¿àS/j¨£!õ¢é\x0013\x0008\x0014¹Ù±T*1èÃ§/Ã.ÿwà¶6YQW/ä1qa)4ÍÕ\x001d,MÛm]¶Æä²¡TEÑÕ\x001dÔéÎ¨¾hè#bb²üá»w8¦,!cùôÎ\x0005Ü5(X\x0002¬\x000cRJ;Ç\x000fÜ}a\x0014VÕ\x0008¸LH]±b×Ïàé\x000c©\x001c1ÁeB)±\x0005\x0017·v¨ÕeQ¼®þ~\x0016\x0019KÍ¿µsØÔ%Øl\x0019vÇÙ\x000c\x001aË	\x000eÅV
¬\x0003.sUú?¿û7P&+Rù;V\x0017ßúXLºËþ\x001cmÚwÙ.bìac\x0008îtg±Û \x0001pôUÍ0w\Ö¾êT\x001c\x0016²\x0012Áä\x0012;²\x0002îpf\x001eÞ\x000bðg\x0005R	»£1î\x0001e¶¥HiZ¥ó{X\x0001h¹.K
\x000f	ÅP\x0018ìÔü´\x001f½¬àp¡G\x0015$+
\x001cÀO²µ¡
&$\x001c6ó\x0013<¾<ï²Oµå¡z\x000eÏäOîèàukL¾°8GÉ ÃB>pÓ\x0002g§ÛnÖ\x001eÞ\Lå>Å
ÀåR2'áñ$þØ\x0016l8\x001c:M,N â°$jíð\x001a`¶©Æ<*ÁaS0äÕSx¡¥\x0019)gÇå¤G %Ö§àÐúñmäI`w¦Aæ)îSxÇhÖ\x0006\x001dÉò´gxZÝcpsuRNTf´	¬\x0010\x000cmx
]\x001e¹öfZ\x0019ðdÇÐ¸ò\x0013¸¸ÂOÌ\x0014)T\x001c6\x0018Oë?@µÜÚ`5.,\x0018O¡c²øO(+°è\x000f\x000bâ¹\x0018<k¨PùEogêrw~dzq¦\BÂ\x0004\x0013Å3ó\x0013I2!\x0001\x001f\x0012D\x0014Ì a ¹BÎg°¸\x0014\x0002FP EEº\x00071,b(\x0006OçR\x0013¥d\x0015³½0\x0006Ë\x0003KT\x001eÞ@\x000b-`²2:®l\x000eúïdUlQ½Z\x0019ÍÆ±\x0004³·®»S¥	É3\x000cO)í} ¦\x000cG\x000b\x0011,l(È\x0012È±l\x000f+\x0000í\x0003UI¨ÂH*½4\x0007ôèbgfta­AZºöH³;?º¨¶Ï ¬À|0ÍcÁª\x000f	+ì]-Ðí1\x00171ÝS\x0002Õ"±xH¥QJéxXSEäµûÓ\x0008hÑÕ\x0017CfrØT,Ywvû\x001fp\x0008å\x0015¼¤ôþ5ÉV(x'Èí7ö©2\x0019/«\x0007r\x0013Û³Þ¾¡B\x0016
pA\x000b"p«+Pe|B\x0000X\x001f¬ r`íîe\x0005\x0017ßzÙá)\x0017·\x000e\x0017`ÿÚÈÏélÙFO© ¡É\x000e\x0006 \x0004ÌÍJa(û¥sDwç3§ *+¢ab×e¹ÎàÏx­«"\x0006_2\x0002;hG³õaÂ<Ø\x0008Ù÷	¯i\x001b\x0017\x0000g\x0013e%\x0016àiV`ºØQð¨ÝK\x0001\x0017ÈøXËaiÉ&(j¡\x000fOçëè\x000c} Â®I"§ôlþqV@gE¦W#©mpÖ\x0001ã\x00157G+4\x001cv=0V\x001e\x0004\x0001Õár¹Û\x00036;\x001fx\x0018p®>IÕ\x000b½`:]á\x0010X\x0007ð"\x0014f\x0005aôèJ¤vøÅ#V`5\x001c²ß¿ß\x000c<í¿?^ù&²ìñPx\x0015ØÔ©ÜÁm¸npú\x0013\x0018¯N.é\x0007`¤oNeªV`?\x0004Ý¯\x001e3¬6\x0010¤\x001d qwèóû×êsèSùõæãºÁ\x000e­\x0013J¤Ü\x0005$7\x0000Þ\x0005»Z¢R#v®ï \x0012¶G+ÉÒRRrµ9øù\x0007·´P&ùø¸c°ÖËd!»g	ÎÙvµ\x0014ò{iq\x001a¶û>¼Û¿v	ï,ß	?MÚÜ®Ûl\x0011éËè\x0016R\x0007}:ã
Ê
\x0016TYÄj
úØ¹;Z\x001e$È·»@ýFç»\x000f\x001fÇ·¡²ó¥ÖûÓO3'P­\G³
,N:êÁ\x00006\x0013¹¦.äÅ6@Rß\x001d/ÇòÌð\x000e\x0007°Öó&Æ\x0015øüÚ"QöØ\x0003YÁÿø¯ÊG·\x001c\x0004ö&ké²b\x000bCk:'£uÙs6EW4Y\x0001x.év&h\x000cÑÖ\x0002ek>[Ä15ZË¬\x0000Þ\x0005®W\x000f\x000fæ 4?¬v¸^£-¢Þ\x00067+°_-R\x0008üo§F¨ôÛó56ðõÊ\x0001³Ð?+ê¦ L\x0001ÇmC</·\x000böóÁíß.¡Âo\x000ef9Ô\x000bÿNuË¢éÅ½+ð\x0010²ßåñáÇÃ¬`c¨\x001fWe7Ñ¬ª4fjÃO\x000eÞ3\x0008÷\x00006;<e\x001cV}DèOóðrÎËù×	o\x00119m\x00039Â¸ÚE\x0017Â
>\x0004K\x000eolÐÃ×ëÝ?ÑS.·S¿)d	\x0017
 ÎWTiiP\x0005&ë8±Ez¨'Ö"¼: jwEóïÅGFx'Z»Õ\x001bL\x001a\x001d·Ç\x000b\x001c:åì\x0016ÞÜ×íCp+çwÏ³\x0002åwoèã»Zx"ùIØË
ÀÍÎ,vF»Õ\x0001K²2]2°æW¾3OèX<Dj8ýJ\x0008ÂóÜ¬!÷ÄêQ³\x0003VÕ6Ã>#4tñÌ\x000cUÆªÛ0h#[×Ï²\x0002ì¯!Zx
\x0000§smTv\x000cäªZô»,"E£\x0003E\x000e¦êXYþ*\x00110\x001eDSÂÒu«o/Ìi·Â¥»nv'ØLá±\x0019Ü\x0019Ì£&· TÈ¬\x001cÞ²^o	ÉÔÙ#xäØ
\x0007B2aL£
d\x0005¸÷ô\x001b¸æþÃÕÇ
 )=XÊQ¶A\x001f^Î7à\x0005\x0019·p%OÕ8rÄµý7YS\x001fR7\x000c9£ôip×ä¶D~þE¨l5!Ò»!z\x0011±»=êe9ä3\x0007V/¾zYÕÍtLýyÛß\x001f\x0003n+$Dzj+2³ÃqôvØÂ 
ÞÜÛ] \x000ek=YA\x000eëg\ø¾ÞWU&3§g\x0005¦ k¹%MÛm·e2zÍ¸Æ
ÜU\x0013Équ°2\x0001òèò\x0011w`ÎÅ\x0011Øºé}¨Õùì0¨\x0010É\x0018ÍÇ
@\x0000\x000e6§íî0\x001by~ërÜ\x001cF°B®\x001eª\x0007Óó¤q£+pc\x0005Ç¿Ä)ªFÑLrù¡\x001d\x0006ÇSsçp¬,J¿4Ù\x0011;\x0011à§¡¬À÷ç\x0003V°¸·ÇÆ²N\x0011³?×Ñ2ßïÇ
þü:§´\x001c5¦³[§þÙNÖ%+Uw°º°ÍÖÆý\x0017\x00158õ\x001b|¦h\x0019ÖQÀébk03Ã_ñ<É
°\x001f¸Ûö\x0007ó(qµ\x000e\x0017´\x0018h£\x0012O\x000cð\x0000ÓiFÞ\x0007\x000bõNHù®½}ó\x000e6%\x0000lJb(?
ì?qìiV\x0000ÞCqÛ7°Þ\x0006H·;nK"É_fO ?¬×ë\\x001a¤CÌ÷ÊÙå\x001a-(\x001fuÁ¬ ôÏ¯é{úºÙ\x001aÀp£.ï@óù*@92 v\x0019D<tIJã-$
»¹)×£ñï×¹:Á÷¸8t`ìsÂMûö|Må"9\x0003;#e,y±Ñ\x0001³¿üÂÙ7ÀZÎp0N E\x001c\x0019ì¦ã\x00056½qØÓù×ú\x0011f\x0005 µ%MX?y #\x001bW9áký·`ÉÉ	}:Y\x001eý\x00036ü@o=U\x001f\x000f)g´>\x000e8\x000e\x0001ÒÝúl!«eöØí²ÕÅQ2;6¡¡\x00078LUÑøwÞ¸\x0002»\x001d\x001däº\x0004ZqÿÚ\x0003Vðö\x0013áð\x0006\x0016(`mJeåvoÁºßt\x0018ÅdN\x0004S³fr0õ;ð2àî:\x0011²Ãñ\x001a¶¢ô\x00062\x0018Nº@\x001a÷%à¢ÅÎLEíàdU\BÝ<ÒâØåQ\x001f+ð©>½fÍ\x0012aV@}û§äê\x0011d\x0012óí\x0019ÒÒ\x0001\x0000é$§#\x0010^ a*HÓ²àñýÇcé¦\x0017Vð^ÒKú×$[¡Ú4}þá:xEQ@îÿr{\x0016-®Á\x001bJ\x000e\x0014GÕÎyvómÚ\x001d\x0011\x0003³¦¿g\x0005#µq\x0018Q
IÍ%ñ?²RmNpS]&Hl~\x001c\x00078¬Ç\x000bùé±x\x000c¹cn\x001f.Ô¤¡`
ªTªö41.ºb\x0004}rg¸\x001b[nrXR\x0004Yª\x0015¤ì]ì\x001bÚ6\x0015Näà¤§öà¾~ÀÉDÌ?Þ\x00045®?\x0008\x0017Üè*þñïoH\x0014rÐ»éÑ\x0008µ8ýB\x0017dê\x0003k\LëXûã¬!J(Vu¨ ¾©\x0015\x0015à^\x0007ãD\È÷¯	ãg"XAí±f|¨¯Cõ\x0005ÿ4±\x001bpBÁz:O¥Gìë\x001dßº²\x0018)è«_«ñüä6¤!ý¬àæùË\x0007¬à`¢ê¤øQÏ<Ç
À£y\x0015À¨lV\x001f\!W6Ùu)\x001cRLn
ÚãÜ¨\x0016x]\x0007Ø-;k_ûÕ=ªÊÔWÈÀ0î\x000e1YcÕ»élÊÜ
ÔmÒY¼õËûó~{ù!\x0004YS;[}eÎç×"ÿWLbôgQ\x0006&\x0011BVµfãþ\x0018	\x0013VÑ\x0004¿ÒÞÞûá¹\x000b«a»É¢£\x0003\x0004zR9i}»vÀäo_£Å\x0001³\x0015Q\x0008+pGáë§<ÃÞi=¥þ;²\x0003úN&/ö
éÌ»ÉWÁÑh±¶Ó¯"±\x0012
qÙï6\x0016çú{:Ë3"é[·£K)Q6ynÞp-1(+pZk\x000b3}Ý\x001d%É\x0002´Ñ\x0012È
þWhÞsÇ½+ËÊEåYÈãÈ\x001aý¿[â|2®hFOÆ,udqsT¾®)\x0008ßüõü\x0019Vàª×\x000c?îháêëôxOW{\x001a\x001b\x001bÛ\x0000{Ó¿\x0015ì\x000e\x0016
b=cÖf9/h\x000fa\x0005w<¶Ô\x0014Z»\x0008ýÒÄÈi2ÞÞ­7rDéþ·}7\x001a\x0006½|Î\x001ap©!AØëpÍ©\x0004^\>*d:=®ÍïÎG¬\x0000\x0004t§{cýª¶fÊûÿ=täDX\x0001¡yÆÓ­GCiÙ\x0013\x0000Â
Øé\x001d¨_ç¸Û	ÆÈ¡)y2[
åÕ#£®¥¡ìí_áà¢¶l.MîéÊðÏ²\x0000¤¶¢Î!¦5{K¿ÅNîë7*(	u¾ÆUÆ\x0011JÆ\x000e~\x0015`\x001eÇzX\x0001`ËgÕ¢\x0015È¦

Ô~O¹\x001a¸ÙMãH7'Z¨ü,xL5ØOµ;ôëå¶÷¢\x001c_8sw>OÙ6÷<+s3º<ZO¥tÞÄ¾áükó?B8h\x0005Úkò>8»º\x0000h7':\x0013"¹xNìê)¢j@ÇñÖÊÐ@Oku>HÔ\x0018Ü6Ã\x001e9~i\x001d7.+bûÚzòµ-D\àkx{.?
Ré¬ ¥këqàðRòÕ«w®þôæ'ARÕ5\x0012qÕ+Jh[ñ\x000cCóU4\x000f;²oû
V`»¢à\x0013\x000b¿ -Ó>$õí¸m'\x0012\x0012}póáñuãÁ¸O½¨\x0010õ2{a1hîÕ\x000bä5§0©:?W\x0011¸­1§<6âF3ÌâE[¢=\x001cìT©")¯KG40+È\x0012ÆUÝ_eÙÅÌUsÜ)Å¡²Ü:Tþ©\x0011ÈQ\x0015Èèù#èÃÁja®ÚÓtÝù\x001csJF{[4´	·ZH¯8ôf\x001cÀ
¶\x0007úÔªÚ_È¢cÓi¼æÇ'÷]NëþÆb¯ZU­ü\x001a¥5»nv'y\ù¹\x0015´^-`#§çNK\x0006;«{íavHúuV°¡µµ¦qKFÜ)=B°plìóg\x0005yWÑÔ\x001aÓå}¿B·«X\x001cÜ4ë¹çánè/\x0008+8®Å	\x001aº5×¼ûwÿ}
O²\x0002§Õ´¹4ÓÛÓU+\x000bfÛ\x0001w_©4¡aÆ+\x0010òÏ±\x0013§[·\x0016L,\x0017¢µ\¶&\x0005MµþÄ÷\x0016=\x0013Wàê)¡	å\x001dCózd\x000c[ové?¾)oC»ºý)\x000cÕÀ\x000eaenª·K\x001bÅ\x0012dv;\x0011Vð1¦Ò35Ì;\x0012nô©\x0011ØnÀÉÊü·©k\x0014!âäb4»x*;¥Û?,k®.\ßþn=äG\x0016@Ózo¢ê'¼Ð3Ù«³ qbtn\x000c\x0014ÄÕz_µ%1£\x001a­f´
ë«ÛÛ·¥\x0005Mb\x001ecîØc¬\x000c]Dq¼Î\x0006³\x0002Rz\x000búávo\x0016OÑfEÞ<oHõèOãõñìØPWgk8\x001eS3¸ã´êÅZ5xJøÖ\x0017æe\x0005ËùièÉxnPzûü\x0003V ÈéEé¸»\x0012þ=·®\x001dmø±bXsßþÛ­\x0010,OZ\x001c×lµ\x000ce\x0005M\x0019,¦ÂcqÊÓÅ!1þ}\x0006³/£¦£i\x000c
¾,kw¸DQ2 ;¾g\x0005 ãhs\x0019Q}¹X\x0012e×\x0000³\x0002Ú\x000fï7½\x0001i×»SáLJZióÊþã[£A³þbnz¬K¥1?ä¨·\x001e=ðÓ\x000b+xI/é%ýk\x0012Ì
Zg½«ëïñ2£
f\x0005ì\ee®äcÓÇ{uè\x000f$¬ÐoÚ{VÐ_*¥Çæ\x000c ?Ó+;É~\x0015 	t9÷¦\x001b_\x0013 \x0007Özò)U5ÕÕ5Õå%ÙXf$z½Ë°Ë£ó§\x0016Ä\x000cÆ·+4'SLÈçAÖ?£É²Èð¼qç£3\x0008=\x001bz½î,OÊ,S¯=Xot\x0015sbk.õúõ±\x0006\x0012/á\x0006a"w\x0007cx¦äÐà¿SàH¡½Q­@Jþ¶HÈk¿¿ ko¬R\x0018U\x0007ÛÈß}\x0006ÎfNn]\í*èXõÎU\x000c\x0002¶ºt~|vÿàØäÔ\x0000'ö\x0015¸A[®Ü4¹\x0013Îiô®~Ï\x0019\x0004À¢¥¿íÛñw=]51âüG}ò\x001c+ë§??è¨Éã³Y5ý«NË¥EPÖvúz|ãÄà0\x001cåÉE\x0019%õÃ£ãsê
\x001f+àrå\x0017\x0012J\x000e}îÊ\x0006\~#³yÛÚ{9otfàYiýÞÜ&'×üC.\x001eÜmLYn{¥¶÷xë0­³\x0001í>6/æÜ\x0003!A¥ Aµá¸X&°\x0005»U½k¥I°\x0002 Hõu(`¿b¾
;@X\x0001GªEÆ\x001aÌ
ðñè\x0003ö³%±$\x0003jU·\x0017%æåÕ¶vW§³y%·n[[¢0§Ãs xý
Ëï+0®J%¢¢:ÕÄèhG©\x001fù\x0015xÎïÀÉÚ\x0014Ç¤Õúä¹²~âß­þ¬`®%EXxßw¥²õó§\x000fXAe<þWXÁÉJ(Bö¥­\x000fjBU\x0014Kñ\x0015@.ös¬`³;[¨òuJ!Ìé× ¬\x0000;sä)~¹E²»ã\x0005!VXÕ¸}zãöKvÎfyCkÀÎ4ä¾\x0002 VeñÉayëÔ\x000f©=`\x0005ÎÉú<i´²«htt\ù\x0015Ðº½Lïx$ÝÇ
xSH\x000eón\x0008Â
öF+	¤\x0018µ·¬Ñ%¨]õ)TqÆ}GÌ­\x001fºýÒ:ÑæýËLú4¬Ñ®ö\x0016R¼\x000b`7B\x0017\x000b÷\x001f°î\x000c®ÂË
ø\x0005½îG	e\x0005 Óª\x0014|HªêñUàÛ¿sä6îÏ8ÜÔ´Â&Í92ÍÍ\x001a,^´¯÷\x000cúùúÒBßóýÅÂ\x0007¬`¸:ÆÇ
øÙ^\x0016á¼¥q5ºã©ÈR_\x0005&æVnú\x0008Àv×Y \x0015\x0017©Aà®:N]902:ÚÓD¡5\x0006xFÕÅS«g¯6ú#3U§p8S\x001f\x001cYê{½«P\x000c9¬ bòôqAKuJazÛ^·¨.cFf\x001bq©R²S»=\x0017Òº-\x0006Æ
A\x001aØ\x00158ô\x0019bF\x0000+0(üún_Ó4\x0017w0+`ò§\x000f\x001f~Ë
¬^0êÅ
\x00184}\^\x001c:f!×;EÌ
JgÎÑ¿L\x0007\x0013,®ðøÎµ;ÞÄãÅ¶©\x0007GÇ§ÓD¼¬ <§åïU\x001f+\x0000í¦DîÇôÚ^_%×\x000eµ0+fzYýÎP\x0008f\x0005®ýÉ\x0016\x001eOÞ¦\x001e\x0018\x001dRJ<¬ÀKHäa\x0005\x0015¨I$äT\x000eÏô5|¤Ic\x0005\x000eÓyI8µ°\x0016zrV]ó\x0016­¼\x001eÇMA@µtö­%EZ:\x0006Éwì¹ó%\0\x0010hõ¼é7XÞ­_ïÀó¯ÖzÅ	5&\x0007\x0018À
=\x0000ärCTÞÉn9ú\x001ea\x0005»Ãe\x0004rl¯·nc£Ëþ¶ù1+0_¬'#ªZFÆÆ\x001b2PVÐU Hiý>\x0000:mI\x000e\x001fÁ¬\x0000Ï\x0016{LËÖ\x001aGÿ#¬\x0000ÊÇº¿6_©àñ£æ÷tfÝ\x0006éUPÛ°oÍ\ÜXn\x000eæ%baySÏøèXcLäe\x0005Ädï\x0001\x0019Ë®\x0014a\x0005;£8E¿4J#\x0015\x0005ÞÜFWvÎ\x0003ã
îï6´AÞnd¡ÎáÞ\x001a(zÏû\x0006ÛäÂªÅ\x0001n\x000c\x0014\x0012R|÷
:ÒiAý\x001b\x0011.Á'Öù¢dÀ÷\x0015¸nöø\x001cOËwú	"¹Ö
³\x0002v'~`»7KÐ>q²Ð\x0012	©J\x0010Ü\x001a®¦KUêÑT\x0016\x0005f\x0005kþ/o·¼âÜ\x001c,#À¬\x0000¼Xêá°¢»úFÆ§
äÄÇ¬ ¢Ætì¦3Þ\x001f ©ãmÎÄáµß¼6¬}"n<zr¹9\x0006e\x00055¤¬:\x0004æ7\x0002®\x0018EYËnÊ\x0016`ûv
EÑ\x0002Háß\x001eyXËy[¥$çT
Bª¯L§yY\x0001áü>\x000fI{:ÞY+\x0013±\x0013*\x0006÷1<àá\»X mìì×d\x0014ûÂ
^ÒKzIÿ­Pð!¡~\x0012½po0\x001f\x001f[m\x0003Ü\x0001¬Àí¨\x000e£÷Å¯
Ðé2Øw÷ú;ÛÃUØR£÷x\x0018\x0008G?º·û+ø±uÖÀe¦\x000b¸?â©Ý\x001dþ³ö,1}xÛã\x001aÛò\x0018FãWÁ\x0002M©(y4[^é[+TDq\x0013¾h½ßv{¹Å
û8¶\x000f\x001b'Ï \o°µó\x0000~\x0006ÁnªIà¤4Ã\x0001fn§Q) å·ÍÚ=·Gs­A\x0014ùù-üàH<¶¨×\x0013Dæ²·fS\x0017à¿þð}\x0005àù|ógBg¹w\x0007\x001d·\x0017Râ»y$JÛ¦ß \x0005\x001f²\x0002Èºud3Ãå,Aäá­GÎ¿ënCÐ9]@®0X=\x000f\x001aO¾\x0019Ôþõ'.1~\x0015xvµ&J¸²X[ÒÃ3Û\x0017¼ý
BãâtAÅ`gÜ ·ô]ÌÔ¼¢=Ë
ÜöK9Ú±poo¶ÕdNò©ÉÓ§\x000f.
{\x00158õ\x001a	3³ç9©\x0001"¯\x0018¶ûÂ°aK'p_»\x001c·)Ïª
£Ûv!c26à\x0011\x0005)*Èè\x0019Áò¨ØA¤CÁÝ¡Ø\x0018Óõ¬àdªúsd\x0011zÃàBK\x0006Yrë\x0006\x0017ÛÒ\x0004éí¨|¯T\x001fì}½sCKNF·ÁñJ9'üWX\x0001¸Ðª\x0014)[}ç+\x001fHàr¦\x001c]vàÉb'ªCÀ\x0001`¹\x0010á0³G\x0006È-\x000fç3§\x0010"\x0004å?£¬`º^!-ïÐÝ¹ì¦YDhÖº(\x0002\x001aWÐL+\x001fD/£7÷\x001c+0í\x000cPY±'FäjÛóx\x0016¡gËø\x001c+Øî)L¬|úgûu"Ù\x000c\x0002T\x001090Ù$Ëëò}EU \x001c\x0002YãRNe
lÀ~§éûþ¿ÿQV\x0000{s¬hÎæ_Ö\x00124±3[ÍN*\x000b¨ý:ç\x0015-\x0019uW-Úer(W£µ\m\x000c3X3d¯Ðe7ÄP\x0006¶tnÇU
Û¿Ìb]Éø1úw°\x0002h¶\x0014DÄÔN9<W=\x000f_ë)Nÿ2\x001e@>\x0003YÁÝÅ2&^\x001eë²ßdIèÍ3û\x0007¨\x000cÇ©ÖÉ\x0002ØÊ#?yYAÔÏìLtÔö¦èLFç0\x001eÏàpâKß)®ÒîcËA`¶)]ßí0¬¾ÃÑ!}v½ÖG$a5ÈîºåF¢*/Ù¹\x000c÷²áhF\x0010\x001dÞ"Qù\x000eS\x0008ß<wô;Y\x0001z\x0006\x0001rx\x000b£Ù¹Ý°O½¥.`'Ôß!Ýd:YfiÛ\x0006\x0017äF\x0011ÃG\x0006X\x0014¶k
\x0003÷!\x0015æ* ¤ï¿Öz\x00158õ;\x0012\x000e{úzùMV !EyÜ±µÞ"~Lù\x001däMÈØEÃ{H«ïìWO²®\²c\x0011¶]%Ih÷ d\x0000<É
\wµÑAOÎYÜ\x001f\x0015\x0018æÈÁâKD­é¾u¤\x0008
NÀx\x000cyÍ\x000bç\x0001\x0006är}FC9îÕBÓk$®\x0000mNDVM:~\x000c[º'çÎ\C² ­éñwþº\x0007+p9\x000cR|<S8þ>VàîÌá¥5Î"²\x0002\x000fÇ*þ+Â
ûcL|W\x001fP·û}Ä
6ûK\x0018ò/6ä\x0016Çõd\x0015l\x000cqã*Ly°êvÈ\x001f1{w®ÿOVàI.çHBQ5â4kãh\x001dÏ7  ]½Ø¢àg£¡>@o®ÿ<+Ðn	áG÷\x00079ÝC1²çÈ¬@»=L¤Å\[î\x0015®\x001b¹¯àï¤x\x0003¢å\x001c-:³ye¾Ü\x0018 1ã¯<vçñêgø\x000cÓX\x0018Å«\x001añ,uÚÓDiM\x0016×o°\x0002\x0010pd\x000bß5 {Oõ*D¬\x0019Ü\x0001\x001dæ,ÞÇÖed\x000f\x0005\x0004ú¥\x001f\x0013Ü MÈICÃ2Ù§_a\x0005.ûm\x0004Û´pá:î\x0000ÝéÒIñä1
rÙÓÜÀ@YÁ×¦4IN»åþà÷\x0015(¾B/ïöfÓÄq,qÞ
øXM¿üî
ï\x0006\x0011ÔåªHÆ?Å
¼ý¦Û%½'ß_ü\x000b-E\x00049ÝÈ\x0016\x0003`É\x0011}|a\x0005/é%½¤ÿÄÉV\x0018%\x000bÂsK**K³¡Ñ]#è~À
ÜvÃ^¬WZ]Q,\x0015CÖ\x0001Qq^Çi¾.O\x0011JäéU5Õ9éªá\x001d(\x0007#´ø¤ÐK\x001aT\x000bûíø¯Iòøò|	^Ö·j9\x001a'òuV
\x0005\x000fÇ+ÈZt±t8ÛòúûW>cäÝêËüx!O"/ª¨(-Ì\x000cç1²ÛÐÕÂ3w\x001böÞ\x0002yx0sÀÝ¦yì'Â&r¥¡noNÆaÈâÓÊ«ªrItº`dý\x0002}ïîb3ÏÆ¥UÕV¥*"ø\x0019(£¶jeàèÌ²êÚjè§©gÄd³Á÷\x0015Èè'Õµ]Z«3à{\x0010\ÖH²}Ñ·ª\x0016{µIðÎîVej\x001c@xÌ
lËØ×ôúÚñµ:9\x0011SRß´yjDYADz	Zt£
*Úí2_åGsù\x0011ò¢òÊ,×4ùä\x0017ð=Ã
C\x001du-}½Ù´ê!h5¢ßÿ\x001aÎç¤d\x0017U×V*\x0013³7.Íæ³\x00151]ÝÔÞX \x0010=\x001fW\x00005w}¨Áâæ\x0014ôLî.KK¶\,/¯ª.)È¬èó/þIV\x0000Õj©«Ë\x0013çC]U^PÚfsº\x000cÛ}$\x0002UZY]\x0012Íû¿ì}÷W\x001bYïõÎ;gßî9»;³ÓÓ3=½=¦\x001dÚdP\x0016H@"\x0007s091ÁX\x001cM\x0010\x0002D@\x0008rÎYÅ»%	lÜnw\x000e3õ±°KU7~ÓýÜ×i\x0018â±[HiÙ}ý@ê²Ó¢\\x0001~Ê(äÊæö¾¾ÎìdÔµ3(p¶á\x000fs\x0005Ë-Ll\Ï\x0018kt =JÀ¦uaCsCÂU6¶\x000f
öVÑ\x0012\x0013à=\x0008\x001aá"&\x0011Ýÿ5Ò×CA§ä¾+\x0000QÇyM\x0016¹ ²\x0001ôZSmÙÒaÄl²G½\x001dû0¾oì\x0015G¤ò9M#Y¥õ\x0003\x0003\x0003U\x0005)yÝÓð¶q¿k²µ\x0008C-é\x001b\x001ch©+%G?è\x000ep\x0005\x0017Ûô¤\x0004Ò\x0018sêHzÓ~W\x0007ó]8bö(Þ×RAxP4\x0002s\x0005ÇK\x00038<¹½·¿»½¹0\x0013ÿÎ³
ýWÍÅYEÕ}ý½µÅY¹Õ#YÜ»¹óÕ¡'±ìÜÜ¼¼Ú1¹9ü)X\x0006RH ÇÞ.Ð>qé³
:q
55·ª± ¯¹¦löf©\x0004H®\x0000rÕÐÈÅ,ú«¦o?ûP®\x00004ÚLwU\x001aµ \x0013®uã³1x\x0001Ç*¯ËKÎ-©ï\x001fèm®«åFÜµ'jü:
SRÓ28ØG­\x001dY\x000fvõØ\x0018%ÂêþþÚ§´¬º6x\x0001F\x0004hR~ï`KSeFâÃ\x001f³®\x00004Ãi\x000e)©¤úYO}UÓ(bÞ÷tùy\\x0002&'777/·º}\x000cÞ<\x0015É\x00151ìÒ@qr~%0Å
å4Ju?lZ!/Þ\x001cEÌé\x001d\x0018èh®¦áâJ®×\x0015|ó$¹¼±e ¯;m\x001eÝ\x0004î÷9çz\x000b	\x0019O{\x0006ú;[ë{¯Ó å¶²úÞ¾þRR2mC¬÷yôE¸èò\x0017ÌñçÕ\x0005ÙÑØ Wpå3f$|\x001eËS\x0005.p¼ÎçÕ¤Ür á
å9\x0015\x0003ð1h\x001fÂ\x0015\x0000hDK	1D±Éãwhë\x000bRkA+u\x0017Ð(õ£ë\x0001Erµç\x00122áí­«{zãlCµpJªjj\x0007[UÒxfö¼+Í\x000b;`^ºBæ\x0005hÙ{¹Þ¬¤DRvsgo_g#\x0016G\x0012À$pGjãÒYLv{}\x0015>ö»î»¸Ãù\x001e4.û%{V¢²:4YÉ¨òºV \x0000µÍ|þ\x001dë
¼Ûcõ±iE,æd{}5!î»ws\x0005n´8\x0005UÖ9Ì~9Xþ\x001a\x0004¯+¸òZûKÒ2KÛ'ç7oÎÖwj9DLMÏ\x0008sl\x0000ñ\x0018L^+°«	ñßFeÔ!Bwºã6>MÃäU4&km¥ÛÂZó½\\x0001p¯{rÿû»T\x0019Îaæó
ºz\x001e¾Ä\x000f_ög<Ý \x0012Éµ-]\x0003}¥¥'\x0006Î6ô;§:+Ò\x0003eëjkly¹\x001cÑ¯FizâWå­ý¡\x0004\x0017ÖeG¯	8bç0}l°³4\x0014\x001bà
¼6u[iZ^uó@OINrùÈ\x001aòÏá
 \x0017{ clÍ\x001c\x001fÊ¦f0v.@¥\x00138,¹¹«·¯§½¾£_mõÉ\x0005Ì¤ÄáW¡fZj\x001cåÙ;¹\x0002¿Û2Þ§\x0014\x0003\x000bó¬®]lt94Âr
9¿¦¹¿¿¯©¶bñ4òÈ£»¸\x0002¿ÇÆêÈKÎ,\x0001\x0000Ï;0¾\x0005\x001f\x001a3×\x0011J\x0001&hp°ï)\x0015_=¼\x000c\x001aÄï2\x000eVg¤\x0017×\x000c\x000c
5WÆ>\x000fm(ßMO#Ã^¸³\x0001LÙº0^]½w]o¹¿\x0008O+`2[\x001bjp±Ñ\x0003ó`T\x000b)¸\x0013(tz+Ts^\x0006&©|\x0014´òñT[Tr.Áîj®%'}_ûn®\x0000^Ów¸Æ×´÷ô÷vVµô\x001bÂ=Î\x0015ý@Énï­}6\x0019\x0017ä
<\x0016YM\x000e1¯´¡o ·©®~ázq]è\x0010Wpå·=ùÃÿ­a\x001c\x0002e¸á
|.]!&¦¢s\x0014ôiuAVt\x0012þm®àrµgðùÔôdw}YúÓ>Ç-ãç3\x0013H\x0005t&³½¹<%îq+Â\x0015 @à·\x000bWk\x001an|õ¿±È`M	eÆàSôhó8"rs[µ\x001bÓLöÌá&4Â	\x001bïøÜ¶5\x0006>»ÂÑ[~Ò/\x0013î°X¬Ûp×mÓóÖ\x0017Y\x000c:száX
û\x001aâxkÿ2|nÃçÒ/¬ðÃC¿º¶ª±F8^Èç\x0012ïo±Y\x000cöÌâÂxóÜas9ð«~¯3§¾^wï4Ê×VÖ-aid¢­}éõõ¾Ã­å\x0003Yh.Þã0ò7\x0015ÑELëµ\x001b·WçètúòæþÍ(\x000f\x0014wgc~é\x0015®Ýí;\x0017¬Òo±l\x0004¾Ömáp¹FGè+Z´È\x0011¸Ãæ\}výÚü\x0014sröDa\x0014\x000bwÔ·®ï\{+«§ÊÛ\x0000@/ÞgÝdÂ>\x000b\x001c»}Ä¿y65·\x0014º)\x0011òís'\x0019\x000cö,h1ý»®çñ8õ¯7ÞÞp
YTg\x000bÓt:s/r^Ïã4©W\x0017¦ÀC@\x00148å\x000c2\
gXÌÙ¥
£ÃÊçîyüÇ¢ärù¡JCþC.G\x0017"üjÉþ\x0014\x001bgIn\x0008,Éð¹O÷6`L/¬^êÃÃL»±Ó\x0013ûë+FWèÚAÍÅÁ4\x001bÔjF$Õh×mVðO¥FåÙ,5»ÂµÜÐC~ôÇf1×øb»îw¤\x000e¶»Ë¢ÙXa°§®EÔmºän\x001d\x0004¿óÚ5skP\x0002\x000eýöÎ!\\x0011È¯ìrÎ¯ñLFõ._\x0012\x0014+Iµ8Ã}­±\x000e·øËA|]ðæâÀjRòö¤ æ6íùë]ø\x000e+z#ð¯°wyk° -rø&ÇGfÉ[L&kOª\x000fÔÆq´½Â 3Ö\x0005â\x0014¼N\x000b}\x0001ÄT3Z´+\x000en`\x0007­Ê_c0§ÏÃ\x0003\x0005ê#â¯3\x0019pkXµBÁE`*Çï\x0006\x0012Âb2V·íF\x0019G 
\x0017\x0012ÛÊYØ\x0008é\x0013ø·Îb2Á×\x000cÿzU{=÷g¸\x0010\x001cé!óYavþìêöÑñÑá`¸Ý\x001dq\x0017I }\x0004@W¶vãÅÎ"£Çnà­Ã2¼¸Î·Fd
©NxûâÛõ0àMîò\x000ccræHª½Üç*áË\x0017|ÇÜ
>TY»ê Ø×ú\x0003®(tº©ßkYYåÍç¹\x0000Á¤\x00039h,×-iæq\x0005`,¬ï"ï#\x0011L5\x0012ë&ä"\x001eèÖÕ]ñÍ½\×-\x0012l0étP>·ý`sÁ`m	eóý=\x0019<Ö]\x001en	ï\x0018\x0011\x001b\x0015BÎah¥
0\x001bËst\x0006há\x0003ëÖ4zuÂÒÒéµ`¾¨KÏí^¼Õµm«;ÌB¾³=P\x0018Æ2÷Àvý\x001cò»·¶n\x001dë.Ebxày@/¤4Í¶aÒûg7æ\x0008ò{Ïvm[¾Ô-Rºº2kÎçf@ïÌ.¯)¡ÅTvýåÜ$srnE¡7
ù<Ëµ®v_oìJoY`¿Wr\x0008ò¢/q\x000f\x001cA3âw\x001fíl\x0006I×SÁê©æ^rÈ\x0013d\x0003´©`sE\x0018¸Çç´l¯-2Yì\x001dáí\x001dM\x0017tR"VzÈ\x000b\x000e\x0016Ä{k'êkÐËWæ)cq÷\x0003Ýç³ïp¶4¶»&aór\x00184/B©\x001e¼ë¶(¸\óÚ\x001dlrôá\x0004´ÏÚKèÞ¸Ø]\x0003\x0014x·Ð\x001a4c\x0003\x0014µ{"W\x001dHT\x0016Ø3\x001eí\x001c\x0007FU×ß:\x000e¸K¬É\x0005y IÝVÝÚâ\x000c\x0010uÞ±Ã
S=â]Î.ÔÚ\x0016åÙvÀ5û½\x0003Î"H'©%gJ\x0013hÏãÍ°!ïx3¤\x000e6í\x0005è£©¹eµÅr´#°\x00074ËmQ-M³¦Vøák\x0001LJñ,\x001bøç×z»uKà
þæw\x001fpVvÂE7\wÔ!!\x0001A\x0002gyÎdq\x000f"\x000cZ"àoùOE±º-eÓcçíl\x0006Ûx¾¶#\x000c®èQ\x0008¹GÒ [î\x0008w¥\x000b\á\x001bW(Õù)Öìò¦ÁjÞØ\x0012\ë\x0007\x00080(\x001b\x0010àóH\x0001ö»mËÓ7	.rx._y*dÁún±\x0019À0+¨ÁÀ\x000eÀA\x0011½ut]\x0017qms;äV ßsizÓPÃ%Ö\x001cßX³ðÏ\x000f¶@.LöìÑM\x0004u\x0005\x0014âYØ1OïåpÝýÞËã- #Ë[Çfý9ÿ\x0014¾æÆ¢:YÛ?¿i;\x001ew×\x001e`rý^çñÎk\x0010«,¬\x000bì\x0001\x0002ò\x001f\x0008Q\x0018Ë=[äÖ!·{\x001aê\x0002M³Å\x0013]×Ã}v\x0000ç8µðZ\x00118	Ê¤\x001c_è'|ØÊñNnÌ\x0002ð\x0002üµy\x0010iÈMgû|EûÌê3Ð\x0005¬éE¹1ä"\x000c2\x0010=XV³üh{O\x0016¬¯]wÁ;\x0008ìêòÚwVLî*gÂ3e¨Ô= p+[GF­lû\x0018®20\GÜ% äÀpi/E'pÐ\x0008iÄ»ÀFT¿s\x0016Á¦\x0002\x000f»0Ã¢³&yGR÷kÚ|Ò£-\x0010nðOÍ\x001aé04 ÷:L¼%`ð\x00177xæHÏ«¿<\x0002þ4PK\x0008h±2p©\x0007´\x001eg'x]'dLÎÃ¦ïxw\x0017>Ç¾1·v³çÓaT®-\x0002yc,®ó,®\x0008¡»o\x000bØdÖöñþâH¬àv~\x001a\x0010®\x0000\x0001\x0002\x0004÷\x0003+ o]¾ÿÅH@p@¹ø%±Ìvç\x00145\x0002\x0004\x0008þá\x0010M&duZàÄ!¿Ï³9\\x001dyoéï\x00110WÐÀøµr×í¤fw=Á&usåv­ÿ\x001cã\x001bà
æ?ZùþÅ\x0011ä
¶Þ>Á\x000c\x0001\x0002\x0004\x0008~	 \\x0001\x0002\x0004\x0008î\x0007?+ðØò\x001e=|Ð9ut÷~d\x0004\x0008\x0010ü+Ãg\x001d¬ÌJÏ ææäegfäwÊÍïÜÂû{Á¯Ë\x0015\¹
\x0003\x0005©TjnnnNFfny»ÒþÖìå\x0000á
>&\x0010®\x0000\x0001\x0002\x0004¿*\x0010®\x0000\x0001\x0002\x0004÷\x0004\x000f|\x000bü\x000eø!·Ëiw8ß¼ø\x000f\x0001\x0002\x0004\x0008\x0002ü^§Ãa·\x0003;áòýSX
¿×ãòÜ±êø\x0017\x0003äûMê÷º]\x001eßûßCð£\x0000yàæügs\x0004\x0008\x0010ü\x001ep\x0005\x0008\x0010 @\x0000\x0001\x0002\x0004\x0008\x0010 @\x0000\x0001p \\x0001\x0002\x0004\x0008\x0010 @\x0000\x0001\x0002\x0004\x0008\x0010 @ \x001c\x0008W\x0000\x0001\x0002\x0004\x0008\x0010 @\x0000\x0001\x0002\x0004\x0008\x0010 \x0008\x0007Â\x0015 @\x0000\x0001\x0002\x0004\x0008\x0010üòpZ
Z\x0015Ùàw\x000c¿G-W½u\x001c\x0002\x0004\x0008Þ\x0006dÑ«¶·®®þm\x0003á
\x0010 @pOðºvgø]¼ÃîðC÷\x001dQøOVéÓ{Îå'BÆcL¬~íRü(@>¯Ãn³Z­vëg÷\x001adÕªMÎ÷\x001f®îó¸á,­V3p<B\x001a÷O>lÍ­éí{©³ÿ§ÆýZ¼\x000eµZ÷ëüç5³FF\x001aç\x0015äwØl`<áq9ÜËÎ!¿×nµ¾q\x0008Ïë²×\x0002â÷º­·°\x0005¿º\x000b?51wò^ñ\x0002	:\÷zi\x0002ä´Û½?¾Ñ!wo>ªâùÆ½
¨×axÙÛ¥vÿWýö¥ámíÞ±Êº'\x000cuQÂ\x000fÂÇ\x001e[ÝWÝý#äWËå¿ÇQéô@³Hï¼§Äíª½±\x0019ë{4={Î²{ ¯Çeÿx = \x001bEQÚþUÌ,äu\x0001¯t
ð¡ðy\NWDãÃ¦Õf\x000b¸Ñïöû<7ôæ\x0018UðÃ\x0011\x001c´\x0002Ã\x0015fjmN(29»=è­o;
çî¾Î\x001dòÙlÖ7àñ|ÜÎ0yó½+´\x0000\x0001c¸}Ë°;îÔu×\x001dÌè¦\x001f\x000b>«Nmt|Ä\x0004ßß&ËÂÆnJî/û\x0000Â\x0015 @à0Óöé\x000bó\x0017Óþ?ÒXï9[ßrGNYßö=çò\x0013Á\x001fÏ£µ.ýÚ¥x? §n°:ëÁÃG11¾~\x0018ÇØÿ¬äü®\x0017O;V¤?ül);%áÁ¨Øï\x001f}û8sî'8\x0012e_ýSclûIl|Äð[æðÝÇÜåû( YòFÛß«MµÍÛûø¹ÞªDZ85;GÑD»®Æê\x001b¦à\x0017­héëÿóoù=+aoû\x0017»2þí\x000f­Ã-"iüô/_Æ&&$À\x001cÉ;ò\x000e^Rkß;V\x0011M7\x0012ëF?B¥î._²9ñå\x001f?_:7ÿÈ/Ô;\x0013\x0005
/¬®û\x001dv¸M\x0019±ODï\x0008xMTâ@÷CïhùQDÔt\x0003CÏxYz\x0007ûøÎß|NSVüÿòô\x001f¦k³bù1lI$ü^çü\x0016÷?»\x000bå¨/~¼`|(Ç¬ô
í{GÿÊõ/ñF¦Bný(C,ËX¾}ùüÒ¯\x0003ß9oAq\x000få²*\x0005)	©òw¶¶c{mÕóËQ	\x0010»Û}Ã{úáºo¿{\x0014\x0013õèÁ£èI\x0002<n\x000cüûþ\x0006\x000ciLôw1èô#Ó,'$\x0005«#ë»?ü#:&`i\x0013Ò¨\x001d\x0011j:yüÅèØø¸\x0007\x000f\x001e÷ÍÜ®!ÜSu©\x000fóûCÿ5³(\x0004Âãoÿö\x001fþ<Úô¡Q8ÕV2\x001al0¯EÖQöÍwâb£A|QÓ;e\x000eN(Aþö¯p5\x0006g¨&vý)þ+ú­ú\x001aÄ[y¤Äo\x001e~\x001f\x0013ýøÛ	Ó{ÊØÇ²ô¦ùû³nk£M-/7<\x001fC÷¤'["í}Ño\x0000á
\x0010 @pOi}ú$úIF\x0003ëÚð"\Áï+8lÅç÷Ý~\x0008|^·Ãùs'HçÝ£zo:æ\x0011jfW\x0006\x0005à±Û]	÷}÷øÍs\x0005>¸)¹1Ä\x000f4;J«\x001d¹\ßÀ5W á¿L,\x0018\x0002\x000fÂ¹øXt|,Õr]LYRB&¤bð7\AF1Ý	ðî<~\x0003\ß³ÅhÇ\x0016gá°\x001f0$|¯V|\x000cü3q\x0005W?É øôÙÔ¼0l´«÷bÒË?ø³»ð[â
,-Tòü¡æcåþK\x0008ñ\x0003rèê©\x0018ÞG«edâï®²G±A¤VÿrkÙ<*2\x0001NNÞU"«Óæ(ZGÀuC>Ó\x0011XE Ý\x0018*ì\x000b\x001aRÉJ4>_aóEr\x0005Q<¥\x0005ºÓØNq$Ò¾Ò\x0005'èÐd<þ}l
þâÔ2éiÉ©ûÐ¢àç§+]ñ¥C7IÝp\x0005>§¾*ù\x001fE=ðÍ¬ÀËÛtÝE)ÔæIøc+H~\=º\x0015l¼;¹\x0002£\x0013óÝãWÜó@ý Óéö~ÔëYßãk>Fò\x001f%!µ«6)4~ÄÞ\x000b+@\x0000Á=a¦µ¤e|*ÈÚ
.(½å
ÜVÍxG	\x0016\x0006*ú&Í.N¸L£Öè®£¡RÜ0Wqå³¯uñh\x0014PÓ;\x001d\÷:TM\x001df¼*Í§$&$\x0014µ2;óù4RB|lÁ³\x0011Ã\x0017à
²É\x0005M\x00054\x0014*W{(#4x©¸ªe¬	ï[×^gq(\x000c:¿ºWm°ß\x0002fuM?«¡$\x0007B}Ê\x0004gÈ¯8\É§&£Qhbzö¼à\x0012.SWUºw=Ï5ÛWØÈ>\x0000ÿØ¨l§¿î.£&ÄÑ\x000e
·Üo\x0018WàÝdvA\x0001p5]t£+¢\x0000²å¢Ül\x001a5î»¿\x001d\x0015ú\¦¢§ËT\x0012Ü<\x000e¿³·XA\x0004åOIÏ]\x0010H\x0003\x0005ôVâ±\x0012Ghþl¥/ç\x0019C\x0000\x001e\x000b§\x001aJ\x0007ÙÏ*ó±D<¥s¢
åÂÏ&ãQh4­¬ãL\x001b\x0011Ióé
)\x0015/ÞØ4àÖ6QSI©X,®}rÛï÷>/Å
qC«µ'+éé\x0015 d°*Ë\x000b(\x0018T\x00121º¸\x0007Sè~çDeF÷\x0016\x001c·õWfN­,VÐRÈé
êÛÊ3Xª\x0018ç¾¹|ÛxBÎÊ\x0017ë= l \x0016WóGÄúAçÊwÊ¡¥\x0012PII)UzÿÕÅúPù`h´è03c3áJq\x0005ÊÃ×9\x0014\x0014
QX{ª\x0007Nº¦ÞåW\x001d84ºoZt³ßµ=5F\x0000ý)kcÝp+ì°ZÊ:[+\x000b°¤\x0004BÚú.¼¤nS¸@ï¢ññ(lëè²50sàÒ\x001c\x0016çPRI$\x0014.elåØ\x0017\x0018¸\x0015g\x0015ð¶Ød\bEóHo5íOÿN+\x001b¥Â¡9­ÌOG£P¤ÌÂÕ#x>È¡äR²jé]5$":\x001eëfm\x0005§$lÒíÂ,r*Æ\x0018;\x0012\x0008¬Ä¡&Â&Ö
rôç«ÙÙ\x0015\x001a \x000b>÷òØ³ÔT\x0012\x0001YÞ£°¸LrA\x001eæ\x001f|õ=Fc\x001fÍÑBÝÉA
#e×ézÑ*-³òf\x000c2\N\x0018Ü¸¼ò9V_vAû`ñU=SA­t\x001ad}
Åè$T"
ÿbå4¬i\IÊ\?5^Er\x0005Iéµí9è1!ø®xu8¿º
ã
\x0018ï"z¬*Qc~Z\x0012\x001aEÉ«ì«K\x000fq\x0005\x0001A\x0002\x0016\x0003\x000b,ÆÌ\x001b+åßæ
 ñeW%JÀ£òéÖÀ6\x0007·E=Ú^Å¢18|y'Ë\x0016D;í¬|6ÐU[Ã$ÅaS\x000eÔo,Åìî(lÖLâÛCBÈ¡í®)Â\x00039ÃáÊZYð²ZÈ²ö*\x001d\x0001ÚWØô\aké±Ê[²SÓR0IØ®W\x001c\x0017\x0010\x0017\x0010Z\x0017f¼b0h¤ÄXZíÚ\x0006wÏe\x0019lÄ PI	uCënèÊe
Ôå\x0001{%¦17ÏÂõ\x0008\x001c%úÁÀX:\x0019\x0018XÝÇ\x000e®dð¹Íì®2\x000c°Â¸äém§/À\x0015d`;óh¤¤¤øüúa
6&~cq¤\x0019@H¡ôöµEá\_%Ü\x0004åE£°©Ùs<	ÜN\x001eCiö+\x0016« ;-.6¾al¿ÂÈÏ Å%$µ²m Þ¥\x0011Ö<Í\x0000¢Åá»çøÁjOÖsÈX\x0014\x0016WPÕV
r\x0005>¸¼J&Ð8bßÔ®\x0017®¸¹\x0008\x0013u\x000clSZSP¶2GÏHÆÐ:ÙàeÓ%¯$+\x0005NJË©Ø\x0018nëï5t?%ýÏ§%Qhõ¯6AÓ.\x000fÊòÓÂ2_®\x001cÀ
å³WR\x0017Å!C}8ÝNíw[Õ\x001dEÿ/\x000cÒ\x0005a?ÿ9M%r%ãÒr\x0005RxÜ¤9.ª\x001d\x000fýîRRóS~7\Ë¤xþ¬\x0008\x0003<\x001f\x0006S=4oó\x0006ÍKkYûpkE~Ð¼¬háB9/»k¨Ôì\x000c2ö/ø,£°G\x0013ÆÙ\x0002\x0019 ·\x0015Å'&\x0012)9Ým5¸´ªúG+y\x0014B\x0012:VÜ$RG2DA®À¨fÓÌ Úwoæy\x0006	è;D«>ÑÀ/s^Ô÷¾¬}F%bSrv¥Æ`ÛÒ
+_
7	8t\x0007cÓ\x0015èJNÜRLÃ`0äå}YPÛLRAU\x0016\x0005A%S\x000b·%ÈÕì>	w2\x0008}nM¿Ì\x00087QUÙ5Q_J\x0005!fqNµÚã¬(Ê¦¿\x001aÊÍLID%¶¾4\x0004\x0016ÈûÍÒÆ²\2\x0019¢ñ²çfgm¯1©)\x0011æ`ígü'L£µ{|Û$ïªÍÇ ÑøL\x0006'°
ÐqO-\x0018h\x0003a@B\x0012º¢g&èïÜÚºL2ìæð3»ò;òs²¸k,*	WÃP«2òv?ÛNI#\x0011q)95Ç*×&«£Äý×_¿ÊÈ¤õ¿>	¯ÆÙ\x00063+
¸\x0002\x00021­hçLï4QQdéµu[\x0019,©\x001cÝ\x0004º3=HÂ\x0001×\x0003ÊÃ2Â:y\x0005\x001f³·\x0016\x0004+û³ñ\x001dodJÚ3ç×^T6Lì\x0004Ûÿxº6±øù\x001b4À\x0015\Ïþk\x0005_£ÉGjÇ\x001b\Á®ê\x001dó8\x0001®à@å\x000eö`k^tÍ$øËþt[QÛäîË²1^ø\x0017â×Ýñ¥Ïoþ{Ã\x0015¨÷ßÆå[Â6\x0011Y/w¨\x00037À\x0015Ä½\Y#`Ð\x001bbXïâ
ÜuiÙí3o­Úð_
ærÒa±Ï*i¼µÙ\x0007t\x0013\x001eKN}Ö?ô,/'wû½®r<Nz½{b±+«½\x000f¯+`×\x0016µl³\x000fº}6­y|¦¯<))¹«<Öùç­ÉX\x0014\x001a¯\x001fY\x000e®\x0018kÈê(Í¡$%&e>m`yä3ºÇ\x0016\x001a\x000b1ÉäÕ3\x000bp¯Ïk	Àæc	­#\x000b B|\x001e\x000e³\x0013O  0äü\x0006i PÔ8y$\x0010\x0003Pò«p\l\x0016×t
6\x0012pI±è\x0014öÖÿÊ·IoýòÓ?ÇâÓòò{L Ã
¥x`AÓæø^°å\x0004Ô!\x0013¨C=Ëqå\x0013.½Ì\x0004ÎDÄS
Eª\x001fÃ\x001dß\x0002á
\x0010 @pOi}Ú½(<ßx\x0019\¨ýû
Wàï,¦6hô\x0006NÝS\3Êõ8Te\x0014Ò0\x0010ã9/1Opg&·he £ í\¥Ó«/Û²Ñ}¯¥ ®¬Ïe\x0003\x001a½V~z@(íUj
zõY1&Í\x0007¸\x0002Ê_\x0012òÀWF~m¼\Ðeö^éE³\x000f>ý¶¾\x000e2µ»|Ó5
%O Q\x0019ôÙöìÜð=°;#Ô¿Åæ\x001cËµF£~ëU\x000bÖ sxÿ$\x00134'¸0\x001a\x00078<å@a\x0005£»ÂL\x0014ï:ºaµeTLðÁ?8ÿÆ/ñ$\x0006É\x0013F$ßp\x0005W¤ÜS¹V¯
§72ù·ÙûLu\x0019©c\x001bbÓ©äÓ¿%V9=þ+§,ûû\x0007òS¥Ædu@6	>:aiÿÂ`4íÎ¥\x0012R÷5nÈï-yrj\x000fq\x0005ómäê±\x001dà4\x000eéåÅÒöÎ :;S½\x0018b)*}\x00161!¸}ª\x0000}°ü¢Z5\x0016>+åÖ\x0014§`³+:8{§®ë}â~§Y*W,Vùñ*>	{n»º\íÀ\x0016?\x000fD4Ðê@qQïÏe¬H\x001dz-4\x0018* DÙS^ù\x001dÃ\x0005¸g\x001b0«ÐùeBV©àTn4í¯õ*ißc\x0016EoDÀE\x001d'¥¤´\x001eVôà/\x0015tVoµ»¬[d<iA \x0001ÕW©t ³å®¼Î¹Ð|Nÿ\x0000Ç\x0018×\S{\x0006Æw \x0005véõÉeÏí^Hs<ÿäÁ7m£K\x001aÁî¼­½lIÎ¨\x0012+u@6\x0006\x0012±\x000eAý7_V|\x001eEÙ=\x0003mh8ïÊj²­#t[å¿ÿgÛ4_g4j.	±MøÄ\x000c\x0010íËT\x0016+\x0008X¨Ôl¹Õï2^\x001e}Õ2¤Ôè,V»å|\x0013L8V;]n/äs4R\x0012GVE R'\x001czJz±Üæ·Ë×¿øamA{*×° £Up|éµêÎ\x0015j«Õ&Z\x001dÆgkÝW6­(ÔD\x001a¸ÌâE\x0012)\x001f~×ïW+.5\x0006³Õ¤oËOèX\x0010\x00029ÙgÖa+\x0007N§7bï·ß P¨´F«Õ4^E)\x001aÙò9Ô\x0015\x0019¤¹£@\ìã¢ñ§\x0006×éêsJ^+¬\x001a\x0019\x0018é÷®\x0000­ôW§\x0015w±Aïèµ\x001a-lµ÷õº\x0007á\\x0001Ú~¹Ö/y\x0001\x0002r?¯Ìe¯nÑÒÐ7\A\x0002®lz\x0001Æò\x001aÇ\x0018>ò÷;ûÆVt\x0006úòä)æÌj+\x0010-\x0003Ñ\x001e°\x0018ÒÖlLÿª4¼zw¬+ð¹\x0014rÎh6\x001bÔy¿Ï,àÑL{~î³	5è­b X9¾\x0003·Çjúî!qK$\x0003\x0002 ÞxñMrµÃûF<\x000eãN®@ºÒ^6¦\x0002ýª×ªTFP
»|3\x0011%«ÁW-yO{üðwû¥Df²Z
\x0017Û¨Äô\x0003íÊ¡¥á\x001fÒ^Â\x0018tªÆ¬¸®%0\x0000ñ\x000b\x0018
èÜ\x0016Y :£\x001d<ô¦¼Úçsà-Õ\x0005\x001f\x0017(4ÞÊ³ÛtIzô\x001fU/Öu\x0006#°EØ¤)\x0012Tsg¢!£vX«7ê'DìÜ\x001aæ
ÑØ>5°ÌzÍPujéÐ\x001aP®óáÔJ©FgÔk\x0017{¿!IM^^cn=6\x0008è]ùÊ£¯ÅGg4\x00013«SR\x001fÿ)»ñ%0rLlüÂ= \x0014&©\i¶X/÷\x0017ñ\x0018Ô\x0001/(ÉIxÀæ\x0016ºØ_Å|óu+\æs\x0019ü¦âp	L\x0012\x001bý>§úýß\x000f\x000fq§}ûMVÝ\x000bRk¶9ý\x001es\x0011!~z÷\x000cÄ´{\x000b¤¬Zý­\x000cúÍ¢¥$\x0012E¢sº<>¯C[\x0012ÿb\x00156PÊ³]Z
q\x0001TÜg\x001b* NBûAó\x0012\x001b'!È¯\x0015Í|ø\x0014¨'âT
È¦Q*Ô:«Õ²ÔWB­a¬T{Ì¡Ðï\x000e	\x0016~¨Øõ\x001câ
 \x0017£1§°¡\x0005-¬U¶æ£±\x000f\x0002æ¥òoQé»bEÐ¼Dg5\x0002ó"Y\x001bÁçvè­\x000eYSòýØA¸\ù÷\x0018¸Â\x000eX\x0004tê\x00175iQ0§ç0g%ãÖuÕs^6\x0000a
à¾ÞpA	ôÝ\x0000ôýU\x001d-p\x001d\x0008ôënâW¨b\\x0003J²6\J)\x0019µû¯\x0017Ü¯ÿ:°¼¯7\x001aµÒ]ü\x0013Â>\x0018ÅxÌ}åímðP)\NBÑ.M.¿CU>úú\x0008tåùöËhbÑuÛt6å.61ýP¦\x0001Ò<ÕY\Ô6ã½mæ_£²dj#w¢>5¯×\x001a1\x0014täGRÔ3\x0003jªSwä\x0010êè°¯ÜÖ\x000bÒd¶¨O¹É¸¤\x0003\x001døÆúð¿skú%rÙjwh%TÜCÎ¥3°SÞ7VÙ8þ\x001a(LÈ!¡ðB\x000fö\x000eú¬µ	\x001ej¤G4|Â¼\x0018&Ì\x0003n\x000e:Ùá2\x001eM¼eÖþøÙÕ}gpÊ\x000e³rð0=è«\x000cj\x0019\x0008?¬f#«Û3\x000fÒzÞØ£ô2½ÕùÆù*\x0016­R©Ò[­æ×Ãµªq×>PDè[S\x0004TTWBJY\x0012éä|&Ry\x0001wªº«Ð6u\x0008]ù8/*Kº\x0015@£ô\x001a)bÿ>äµ=Ë@¯Ê\.å\x000eV©\x000cq\x000eÃYaJ\x000cµª»wæôÊpÃ\x0015ø=N.£	S\x000fB²H®à«ÎqvÀÖ.\x0008Ä«úo¹\x0002Èª\x0016§¡p/aÙ<ÆÖbê¼ÈàÔ\x0008Ðâðwq\x0005{\x0012tåPDâNM1	ûjO\x001bÜ0)²ð\x0019ÏóÛ
.ÿ\x001d\K[@ÂðÞÜt`S\x001fÓRH\x001c\x0011P\x001fýÚpefí=L_]Ç1i\x0007\x0017* uÛ]\x000f¾þ\x0007÷Òå÷:ó¢£$×ç<Ì4§ÔMìÂKÔ&F¯k»fwì}Ü7¿\x0003Ãí?éÌ(íiÚI+É1\x0013|xÖ`°àkTa×9°:ÕLKvZ\x0003\x000b¸íÑÊYC\x0010\x0015\x0000a¸Xé#\x0014µ_ªõzõySNÊÐê©Ã(LN\x0002»lÔ+jÇï2\x0017¦¥ÌíI.\x0008ØÏ{-nèluà/þ?{gþF¶öûÿêþt×ºk½÷]÷÷í÷îtgèÄ)qÂ\x0001E\x0014ÇhCP£Q\x0019\x001dAA@E\x0005YqFÅYÄ\x0001Å\x0001\x0004¡¼U\x0014 \x001aí$§»O÷9]ßEQÃ®½ýìO=ÏÞ±ãkàF£N=\x0018)?³zÜÃò\x000cÌÀÞî\x0013LÖR\Ñ.\x0006Ï²·PØ³\x0000\x0005\x00076\x000c_s\x0000«
`>=Ö¾Å<B*xKùr\x0018^¨\x0010V\x0008\x0011¢ßI>V°åuY8ÌRú8pcÀ½X\x0001`=.Æ§(÷ü\x0010ûre()§òÂá\x0005ûÄ·­RÐ\\x001f(Èê>§\x0007`UÇ{ç|â5á2j {ÞZð®Ü~é±2SäZø8\x0003õ\x0005\x000cå®\x0015\x0014\x0014åðFïå:&=Ksæ¼Ø\x0014ÿô278wÂ\x0014XBTù<9Ðô#`\x000b\x0019ú©Ù\x0005øO\x0002ø3`ÙË@ãç®u3¬"Z`'/£<¡M±ñ8+ÈD×ö~>\x0008²þO\x001cøÖ\x0006[ËbÞwÝîä15\x0016fvi\x001c\x000eÇá\_t\x000e\x0011J\x000f´\x001ffÇ$\x0004¦ü:¡%tù½0¯µû\x001d®U¼ý\x000b¬ £\x000f\x0003p¯ù ?\x0003=y`?"½J­ö\x0015Áè`k"ªàøn>ïõÅ±|- ¬ÀQ\x0007^ãéfmivT\x0012÷r\x0001ìÞ\x001dGèÔ­\x000b»×¦¯ÌÆ)¶×Ç3O£\x0003±®w\x001dò»¬àïD±æ~¹8t\x0019èÝËûÛCXAòÓðÕÀó[\x001e&¥\x0013zC;»_f\x0005{SìÈäÒ\x0019¸¸\x0015ì\x001f¢sOÌ.Ãº4)&sßzÿ\x001dË$Ðá}[Rß2Açz¦ï\x0003ª¶Ï¿ëÕJrjùUoä´\x001c¡ÿ\x001e¾\x0013(Àivu6U\x000c}\x0002¼\x0017'ºå%µ¼72\x0019·uîr\x0018÷ñoþ{üÈ¿«óx\x0001Ks\x0010\ÆÕ§?ÆMÏú*å\x0008:!I±c¶\x001eMþýi¶?ì\x0005¸üÏUî}ÝgGÚå)aW<&CgXAòÓ°`\x0011Ý²\x0002ðÈ6óÎÖú¼ZÝ\T	U-Q\x0013æ¡\x001c\x0004·Ãº¿³¹8?Ç"äå4¼wS[D\x0013A­r©â8<\x0000PBäú«.\x0011ý pÙ\x000eÒ\x0013Á¡¢ùó\x0003~\x0015Ð<¶ãô7è}Ç¡_Ì+®Õ\x001bBYÁËÈO$"D¤u2\x000fBâÞ\x0001ãF2&cU\x000f\x000fÇ<S­p\\x0001«*®ÜwÏb\x0004õP\x000e\x0002`»ºØÚXS¤>ï5Ü8õi\x0019\x0013»Føkûðy\x0006Áâô.óKpÅöº´Q\x0016ç\x0003±¯\x000f²\x0002ËÎ(\x001ag\x000cÉ÷O¾7þÞen\x0005*\x0002Û\x001f!³!9å\x0013üPÍçúõÕ%µZò*yF{yc;+ÄÅòýI\x0001]\x0015@Ömj.À²TÇ!'Ðb\x0013ºÐáT³ù?p\x0016o\x0012\x0014W\x0010ýwõ¿ºòê\x000bº&ön\x001cÕYq8r¸¬\x001ab	¼\x0005\x0015d¥tûç\x00159_\x001eÀæ}¼t¹ù\x001fAï{\x0001ÞèØ\x001fLÉÖÜó¼\x001cRpR³\x001eBjHsãº¨Ã§öÌùù´ÿé_ð}\x0006¬]osXpçòäpmuqF>FE­\ÜxÇ¿G½µø\x0002xÀx{NZ \x0007\x000148àËê±¡¸¤äÅcg(+ÀD$mùKÆq ü.,mr\x0016*ÑY9/.)qéä8ö'3óà\x001c«ýñ\x0017¨wÁ$m/~Û5þ +vÖ*$>\x0000\x000e¸\x000eµÛË\x000bjAg\x00156«ýú«Y\x0001`Ñf§cU\x0007þzgólTA½Ù\x0005±\x0002TÍ\x001dób²{÷§{SO¯¬6£¾\x0016\x001f?¼\x0015\x0012úå6S
Ó:§ýÓÈ\x001c©8)éP\x000eÂá\x001c÷ib1\¯fÄ]áè,)¤Þg\x00057\x001e§U·³µ4?ÇùXõ\x0011Ê\x0016T¶eäÃ¶\x000b4Ûô¢\x0016°Ù\x0019÷gS"S\x0003/Á½éñ\x0013{\x0017Öelü\x001bÞ¨ÿlø°g²íËË-\x0005úM8`jc¾{­¹¼-õ\x0011Â¬zø;\x0019·19­\x001a¼f5;\x000f[?è/9í\x0004>¿éüN2ímdbÇ\x001fþt8Ý\x001dQÔêû\x0008\\x001dkÖVÔ\x0013¢ä¤}\x0007Ä
|7\x001ah}«£Â´\x0008\x000eý\x0000\x001d\x0015Ï\x0011ù\x001aÈ²\x0018\x001dÅ?\x0007{7?cÖ
¾R\x0005l¬²\x001c\x0006Ü\x0003\x001e°ÖiV\x0017g\x0015\x00024*ÜcÍúéo²M0°\x0002ÃªÛ\x0003
æ<\®ëv]\x001bÌ­ù<\x0007\x0001p; :³\x0008Ö94ç
p<Ó\x001d_Ò\x000eöígËüÂOç\x000e¸)'ëCß|Kp%l»ë¼&\x001b;¸ôYÖ¾OÃ°°Ô)h÷©¢äè¡CøTÖKýØ =7#
WT»q\x000c\x0016Ý\x0014ã?þþsVVV~AaAYÍÂ>4Â½Ë
þVTSOô\x0019ÛÁÉ»\x001d´i;6êYb\x001a\x001eK|Ä\x001d×Àù|]NÄK§Á"È}>²u\x001bð\x0018+çä§~ì¹sp×\x0005!#5{\x0018`\x0005×^Ç9± <´h¹ØÆÜc\x0005V}fzBßÊý$©m%ýUZ¹¿"t¼L)Ðßò&`W¯\x0011Ã\x001dû|\x000b\x0012÷­¬à?â*\x0002ÄªÖAß©TÌê´¦q7Ä
Âi\x0012Úótö§7Å\x0016wCHyÇô»	^gëÛ¸w"øáÒëðY\x0011·í¬&/ù\x0003µwmû\x0010\x0002âp~0,¾ÀßzF{Çfi/\x001d»ã78ßcð\x001e'Çæ\x001d^9oªÌô@\x000eõmÄÓN¡¯zÏMÕáÈ|
Ä
|7¶Û){¶Ý­¥\x0005õ í-¾ûM3\x001d ¬\x0000\x0011"D¿`V\x0000~°m`"£¦÷õE4Áâ5j³Ò\x0013ÕámGÊ*6ØnÚétl©Áf§äÇö¯¾®§%?<³üS\x0017£\x000bþ'ÛñBq\x0005Q\Õ\x0001ôKQJñw&ü¦²\x0000+(ªè\x0008LHeÙOOÃ©\x000e¯/6ÅÏ0\x001f×&m+z+\x000b\x001e¹_6\x0017ô¦f\x0017åSü´áÆsRJ\x001fß5nJ)	U·H¼ÿ#(Z¹Ç
HY\x0001V_Ö1ñy\x0004YAçû8LiCð\x0002§îäç\x001e,\x0008±)ÊªjB\x0003eyß\x0017Æi?ÌNÅÏèàî\x0018Ø\x0015×b+\x0006\x0003xÃÉ#d\x0007×î²\x0002@LÊ\x0008²\x001c\x001c}c7e¦
6[Âªçq\x0005tz \x0004ÆÌ\x000f¥ý¹íW\x0002J\x0011º¦\x0017,\x0008%«¹¬¬Îb2;[QÑ/\x0016|wÝ[¥Év3\x000b\x001aA¯Ò¼#ù[RUðç3ý,è.+èÿl¦Dàª&1;ûÙê\x0015!¬ õyZÐmfÈ$Cw\x000ce\x0005×gë)?Ýa\x0005\x001aiË³8|°´»øc×Na]Tm¼JO\x001f!\x0011_\x0013ÜY<±\x0006óLßlªÄ¿Ëµ\x0006û\x0000+9
\x000cKÉµ}Û&¥×½­¨ëb±¹ÄW	\x00190+È}\x0013L\x001e\x000fe\x0005Nýä}\x001fÕÑÉð;t`t@¬ ¶<p`S]frÏìuYxÄê÷UÝ=,fKCtJ:Ì
B(È
{³åy¹Ä\x000e&³]\x001dó\x000b¬À¬×\x0010Þ\x0015ÕSèìnfS16\x001bb\x00057¦ýÙô´bÝA+ëÆzö¢H\Ùm«©¶=¦õø¤¬MÃCÓG\x0015ù`]\x0006Iº;Ûûñ\x0013wÆkÕ²Çr\x0010Ü'	i¸­\x000bø\x0003+}\x0015>V\x0000Z°Ì÷kë-FP±\x0002@«\x0012\x0015\x0015S\x0019,°p²P?B¬À²ÅdÌ\x0007Ö\x0002\x0000?¤\x001d\x0010+À4øù¡×s\x0010ý-¬\x0000A«aÑjñ¸¬~¥Óë æGa+\x00192ä¨\x001d^ZØ]V
^	C{\x0008³,b×ïÖÍ²ª@Öqö>+E°n\x000c\x001eÜs¾¬#w\x0006\x001fæäÖ\x0013¼7_ÁPci×Ä\x001e`5\x0014¦¾*kh\x000fþdfË\x0000±Ü´\x0005¿93ïÈÑ'6{O),\x000c\x0018(¾qúÒÎàYxÍøÚÁe\x0015ä`y«~RÑö|d\x0003vìm=ey>Và3\x001aÞ×f¤»\x0016\x001f\x001b±rqãØ\x0012>I«
Äi8¹4Á:\x0000¸'ØJÊ	t&X\x001eÔ×ñ÷YARÖ²ÞWuþÿ{\x0011ßÙé¿þáÓ¨¥PVp¹>ü\x0004S\x001büj]×*¿Ç
\x0016xõÇYãê¨±ª¸º©Ãên©-HËü\x0015Xw\x0013\x001fa\x0005ó´tÌê©0lÝ\x0018Î©09!V\x001d\x0018¡ÃæÅd÷zìÆÎ\x000f9¸¼ÒêêÎ\x0001å45ç%!'¹70hºÔ\x000cÁó\x0015ì*Z¿Î\x0008>S®@\x001ej¦î±kÃfMyáG2Íd6¿Åáý¬ »²{\x0006ÞÁ¾;QÜ
³´×Á\x0011\x001a1\x0013b\x0005&ÝlbØË¦öQeôivý\x0012?úç\x0004ZÐÒ2ÏoC¶¹âptiðòD3V\x000fÔÛ\x0016Ñü\x0013:t3\x0005ÄÏXAô´/\x0015â\x0006ZsaøôzèP\x0003·e\x001dÝ=lz[\Üë\x0000+X¿ò×ü;¬àj=êUd\x0003%PÛ»Ùk'V\x0015Äæì\x001ba\x0003cççùXGÑý©ÌW?\x001d-ñ1¯\x0002¬ r-\x0000=¬Ày±]S[O\x0005m+Tÿ\x0005Vàµ6U\x0014|hjëa²huoQ\x0010+¸q[õØ7	Z«OÌk\x001cZ\x0004nì½å\x0018tA]°|¤Êu·í¸\x0008mn>\x0017à\x001aï|\x0017/©ª®\x0002ÿd'gê\x000b]wÊã0÷×çæ}ä»|¬àev½v_«?3\x0006\x0017jùú\x001cd\x000cZ<·µ½¦ÊBÅMïû_\x001c[ÊRp\x0005ðÙß\x0017¤¤×ñºö\x0018+ÐNtåBm²Û¨ÍÁ$(µÖ +.lSÁM¯­gGÝe\x0005\x001e35\x0007C\x0011oÜ»ÀUaÓSTV°ÜzJËmAxTíÅ\x0005dZ\x0001`ÖáqèÏX\x0001 lÄþ\x0002+ø9\x0012øËò)5:·ª9x®y(\x0017µ«ô
\x001dr>}ç³®ý¿pxæ8\x0004<UæVnG]æÏ¹5-Á\x001f*\x0016¡\«SÅ`wnfÆ»ô\x0013kw¢ëÇ×i·Ê Ø~=»ãØ² çyy\x0015\â¾ÿ@\x000e\x001asÎòÎ\x0015Dlýý§íl÷ceI
±Ãì¦Ugâ\x0011V\x0008\x0011¢?¬\x0000ì\x0005¶Å-\x0011Y\x00158L
à26\x0014¤³güo¯vä-é¥-Ð@Õe¢â¸Ê©Ø+_w2LÎýÐ3u;ç®ïÃW°Üäj6ü#Ëî\x0004ØéÌÞ{¬`MDÅUuÛï\x001d: 5;÷\x000føß@×êdLÎÖ¹Ó°.AW}\x000e-à¹®ÏDõÏénìgïr\x0012F÷}v\x0017pÓò%+P¶¶+\Þ/`~ÚÜ7}çwX\x0001èæðÃÒ\x0008F\x001fèu5ä¤qUÇ×]\x0016ûlÞ'\x000bx,ÔÌ +xKºö]¹M¿Ã¤®]x®4¼ðzK w¿7áNÈ\x0004<Àñ\x000c+¼vãÔ%¾DkN¡®Üz¢Éÿ\x0011\x001eR/òðïZÙÄ\x0012"\x001fºq»q+æ%ú\x0018vP½®þÌÚ~ÕY\x0001X ôÒÂ¶sÛ]\x001fë\x0011V°3ÆHÉ%]L6½§lËùÐ\x000b/õdØ\x0010¿ø¿wXÁÉ\x0010ÿpy{³Ð~°)ve\x0001Yx¯j|\x0005+øÏ	½ÏÇõºùÄÜjÎÌõÙ\x001aê9úÐ×WÛö§£Ñ\x000f±\x0002ýbZFú®	:ÇªE%j¯chã¬À|4ýêU.Ìv.4#	´ÇYs¤.÷=Kí;M@Ã¬`[LD×²îÝø\x001c§,³\x0011\x001e\x000e\x0003£Ôb_\\x0001Ø*¯ZÊpìñéÄl£/ªVD+¨bß)\x001fÏYI|xõ¡ù¨¿È
ÀFº)Å\x0017ã³ætW7_Ç
nl9©i\x0013¾´VÐg\x001e©KÏóå \x0016À~¤YÎ
¬Ô,\x000c}Ìçãy\x001c5é?A¬À{Uíóc+àx¢5¦¸\x0015\x001cÆþJVà?ßÑR\x0016\x0006³bpí)ÈI¥¬ k
Móuu\x0018®ÒC Ïs½\x0016~\x0015x­ÝeøFþrH\x000eÌiy\x0006V¼z\x0012<\èI\x001fd\x00057\x001eKGizëèNà'¾ÿÝÆ¦Ä\x0001ÿ\x0002\x0019[Ò\x0016|)ýÚ\x000b(;KßÒäð.&ÍHXr¦Îä>Û\x001aKL*=wÂË_:HùqÝSÚ/³\x0002çÞgè]_fîõÑbZÂË\x001bàjõE\x0004\x000e\x0001p]~JM¤	ÖÝ£Äï_o¡:è8^NF'ý\x0002+p].Gà
ÖÀ ó^	è¦ð¹G\x0016_2¬ÅF`õ\x000eø²]ìôOC\x000b`Ûë.MëRÃ¯½æÌ8\x0015ìþ\x0018_y/ðH«l*n7.ó±8\x0015®ð\x0013òÈðFvüûè´s\x0010g Ï_ôÇ¬4fT2mYÛ´WUR¥½zá\x0002¶ÞªìOü5ø¯mE{R*Ä
Î6$1)\x0015\x0016÷mÅºó«»¬`W­\x001b÷\x001boù¬Àu¹2\x001bOe9RãSs6\x0003)0÷&r;¦Ç\x0014Ð\w¯î+XÁ³f}ÉDwy¨>µ¶\x000f\x001a\x001c=;:#×Åv\x0006:ú!Vp\\x00169wâ;ç¼8\x0019=¶i¸c\x0018\x001ed\x0005NmÜ\x000bôÖ\x0019ôì¬Ç+XÔ³ÇY\x0001°ÄªÊ¬\x001fZ\x0000àî©YM3\x0014M¸Ç
\x000c3-y4ß»c`UDMð±\x0002Ðaà×ãÈRua
\x000eÊé¸\x0001¦Y\x0005$Ñ\x001dóå5·\x0014¤·HÖ?QtÞb±kFiºù¸Ü\x0013[ho+Z³ÞvÙîÍW\x0010Ð·ÏWàÝÐ¢r®]^¯E[¿\x0012d\x000e(CmÏä·Ö±\x0002«a\x001d\x0013\x00196¹gò_"àYt$d\x0011 h¸\x0010V\x0000ZîÚjÌ=V\x00009ÿÓ«4ÂíN\x00159Z\x001cDá>^»\x001f¶ûJJbq\x0017ììY\x0016QQ0+x\x001bó|éÒ÷\x001c<fRFü×±\x0002O_]VãúãÖUúô=k
2®\x000e=ÇÖ8<@(+u\x001d0¸ró\x0017r^§\DØ\x0001ûÄ$Ì»»Ê#¬à¬\x001aÎ×ÀÖ]\x001a\Öß\x001e\x001b¸¹Ç
VIÕ,ø¸s=\x001fðE\x0008+@\x0008ÑB·¬à\x0006{¥9ýùÿú.\x0006ÛP«êMLIï\x001dH\x0004ìDTüH`±#ï\x0008{\x0011^@\x0019ÿ4\x001fÌç&&Õuper)»2¶\x00039á_f\x0005íùOãS(Ì\x0001DPO©çÌ\x001dÑ=V\x0000ö³5y	okÛ%rÙ\x0000»C Ø\x000eu\x0008ÕìÂ\x001f^$6Ð92éHyZ|eû\x0013¸ñ8Í]Õ©Yµírñ©0±r\x0001:y^Ç\x0008±8® AªsZëRÂ×}\x001d+p\læ¥ÆÔR¹CïTú£\x0007ýZ\x0011·$ q\x0004\x0002¡¦¦#Q»à\x001c\x0010V\x0000ú-yèÒÆ6\Ú^Wþ¶Ñ\x0008e\x0013z\x0007êÓÒß5eR\x0016­	õ:2È
¾{\x0015×ÐÖ#\x000eWå¤\x00146\x000b]Ð¾×ä¬Ä¼\x001aªH*ã÷v1dK¡\x0017°4Ú÷Æ\x0018¾êÈëÔ\x000eý»¨ºn¡zjô>ÿÙs\Áçò\x001d6ìu<\x0006ôR ?½nEGirñ'LÆmÿ-ß¹°
+p\x000e	y¨¸ôBFïL4Djj×Y<±\x0002å¸:;®Ð"I9tî©ãÆ~4ü:¶+\x0010\x000b\x0007ª
2<¹Ã
\x0000Ç\x0015½&3£´qD&\x001fæ1Ù\x0002\x0015Ø\x001b?Æ
@¦\x0014XIcÉ\x0015²^\x0006U´
½ú2+xñ\x001d®´rH,í£×ÇÄç£\x0018å(?&48:?)­-Í\x0008{ý\x0015\x0000¶£¢¤xbdY³ç\x0001¼ãÝ\x0015qø
ÞD4ÜÏè\x001a\x0006=î\x0007YÝ¸	`¦ç"B.æ%ê\x0017â
<Ë¼ºô\x000fªy5¯«1!üY\x0015\x00184¢°W©ãsêÝCSÐÁØ ¿IÈWÎ©%Üö´ø§Y$\x0011ìðîÑÃ_çü£EóáB~bRM;\x0007n£>\x000e0?Ô\x0010Ã\x001d\x001a\x0019\x0019êÏ\x0006F 7_Å
n\x0000kIäÆäÓÌ7y\x0015Ä¥|\x0010)ärèR{\x001a:\x0006\x0007&X©9å\x0002tÛð\x0014ÎA0ëÔ¹	>!»µ\x0018Am4FàÊåþ\x0003ÊµçWÃyiåTµzÕR\x001dùÃÿtÏBÏzoº7	Ó+\x0010øÄ×±ÒM(þù×°óm5_¨XZY\x001efóª@wÞc7¼O«hîÈdý¬¶áÙm¯ÃØ\x0013]Iå«ç'	E/Â£\x001fe\x0005àoeøMtl'/\x0015
ñÅjpà«·'¦âY<!hô(
ÌóüúY¡ââ:Ø|l¤ÄØ\x0002G
n#%36\x0001[Ð38"\x0019æ¤&£\x0016 K{µ?\x001cÐÎ\x0015È%ê\x0012lTlÎä\x0006\x0016vC.¾
¾nRyBN£\x0001\x001cì\x0015\x0000¦ÂèW QT4å<\x0005Å\x0015%Úý\x001eK e²îÆØð\x00174Áº×}U\x0016÷²#V|ªÌ\x000e\x000bÿ\x0005V\x0000ºû\x0002".¥ N 
\x0007ÙÝ]Ð:p­Ííà)V7\x000e<\x001e§¸­\x0004]Ò(Ë8mµ	\x0019{ÐhÑ³Ø×ð*©L,÷³¨8Ô«\x0014\x001f+pvR~~ÆU¨Ö·uA'\x001f\x001cGD%§\x0016FÙ9©QI¾\x001c\x0004«a3ýõ\x001bJÏ\x0010XD\x001f*²~
K}\x0015ã¦1FRzN¿P"æ3cbâ¾Ä«ã
,å¸Âò\x000f`GPßÜ¶svç'k#Ñ1	l°\x0001ôâ^c>B³Ð8ÍÝ\x001fR°oÅ
¹ ¿ËSÝI,»Ë
´3¬¨¸1ZÒ×E=Ç5~\x001b+\x0000G(sý¤Ô<î0x
CÍ]Wv÷×.n©LÉz7$IûZ¹#ö´}ý¬\x001e\x001b_ÔØ\x0001w»	hÁ/³¸\x001f\x0012³\x000b9C"Ao[|T¢|Ë\x0008îX¬ì\x001cRÏj\x000bÂ^D|Î
n\W¤ü¤2òàâòÓ\x000b¬[Qiy¬\x0001¡T,h'3¡ä¬\x0007Y\x0001pU\x0012\x001bQß#RO6¿Ë}öó/Å\x0015Ìt¡
eS*\x0011¯##!\x0012çc\x0005i-ìÇ(¾bzc÷4xç×û/Dã³£\x0002N.öul1
~.¶\x001dqøOa)å,8¿ÞjØ(HBÕ¶]C'+59ßWõFÇ%2z\x0005ÒAl)8 Þa'wÆ\x0011ð>æ6óÕ\x001a\x0005·Ô	VANgJR<{\x001ab¡_Á
Ñú\x0005°a^½SmBæ6\x0004<úÔð¶ÑÝ-y{Î\x0007®=äôÊdl\x0017Þð\x0018+\x0000¿.í¥Ð¹R©¨ø\x0001\x0015Wnú\x0019Ý-+&z=®H|ò¿ÿÏýu\x0010\Ö³²äð¤Ü\x000eÎTÄo!Ó7OÌ\x001eûe[\x0005:³,QÈù½~þâ\x001ad?ÅÇF4vô\÷âåëÙ\x0003\x0007x%ýu÷$Ð`R\x001bã£"¾\x0015Ü\îLâ\x0012ÑDF\x001fØýu·6-\x001eAå×U\x001a\x0011oã\x000eu>#*¼kü\x0000Ø{\x0008+\x0000ød\x0011\x001d\x001bEììÉÄÝ­ôùí3íTÄ\x001dP-¬NËû3±­sØ¨¦\x0016Õ\x000b¥rá\x0000«gpÊîy\x0015\x0000öÞª´¬ÚÎ\x0015³çæp¶\x000fJ§÷	¤\x0012!Þ±{áºÇ
\x000eÔ¼×ñXéôÏÄ%½LCâ
\x0010!BôçÐÎÜØÂÞí,ë¶\x0013
­w\x0006Ï{\x0006\x0000\x0017\x0007«Ý­\x0014j;kóä*Øá8¯Ox´uÃ­\x0019sÅ<\x0006HâðÇL¾ÑÙ¼´\x0017^ÚàÆëZ\x000bÔháÍÙÑ¥}ÐïòêÇ4'&µG"SdªMø-í|%
½<·ýjR2@&\x0012;8Czã·jvq\x0001Eº:>L&GÀ~3à&zÝö\x0005Å\x0000©Ô'Q]\x0007F
 {6)ìin¦HÕ[\x0007«SªuhD|¸,\x001d]Ô}^&'\x001a¹tÎ?ÁÓr&\x0019ì!\x0011I=|Ù¹ù¶s³®\x0013Þ¿ç\x0008å3³3ÓjlTx\x001bp_\x0005#¦>ÜcSIyd2e@6s\x001d|Cé2
±H\x0014bnK§\;YA\x001eA´45B¥P\x0004c·si{ì\x000b£\x0003\x0014\x0012±9°­¿»¢²~{ÝEjnnëf¯\x001fú\x0003 ¯Ïözé-Ô\x000eæªV¿8*\x000eúéë3#\x001c¾:4DvkNJ#\x0011»\x0006dçþÇíZQðU\x0007\x0010è\x0000\x0007¢\x001aýCí\x001fáXW)Zhd"6,SA3ÛÎ\x0006¢s«Çi=\x0017°CjpY/Ç\x0004PéqÓ°ókØg´QÚû'\x0006Ù \x0004~çÔÏ\x0013\x001b}±
^·cujBjnep6\x0000t;»Â¡ñ\x0007{L×õù(ÙÜLd
ÈÎ|³\x001dj&ÄjáólX0æ\x0008É÷Å\x0015Äm\x001bvÙtZkWö\x000c.\x001aÀr²Íl%·töìÍÉ\x0014\x0017VÛn\x0012óúBaÓÁ
£Ò#ëne¢F¢¶2f5ÐðÄe>`ðÆ\x0002g²O$>ç\x0016¸Ô­tÒH­Ì~Á0%Wõâ^\x00119.÷B\x0005xíà/ÈúÉÂÉeý¦Zí[^\x0001l;ÓBR3Eµ{qû2ÂãÔÌ-#½8^\x001d]ô\x0007ð;­§¼Nª&´U^é%¼®f"=4
\x0007·nm²J¦uöl\x001cÔ%E!\x0014î]Ü¶¯µéámÿ}®\x001d¨á[3â
_¸°Ë\x0002uF¨ÌÏwf¨`\x0015ô«U}oêK¯sS%£QÈ<ù\x0002è½K¦´ðÕB\x0016£\x001f¶\x0018JÓÝ<Î·gC´\x0008ÆfRíÜ"_Ø>ZP¬\x001eùËïbµ»\x0006ÞËf ®nÎ
¦ýä\x0013ð^õ÷Ê{/!ÍIµÆû¡\x0010vãÁ A"\x0012»y²Ss \x0018	!\x0017ÜÈè\x0013ê. 
ã4\x001dõwµ[é{g\x000b³C£
¬årÑöÒßbVÆg×a¬
ÖmT\x0012µMµ¡÷½®ô\x001aöWí4"¥E®Út,à±_û{UnsF±ìè\x0006®Ï÷¹6"2<¶`\x0005
×¾4:zry)í§¨\x001dó;ÛÁÎé.«\x0003¬ýGÆóÉ\x0011\x0005\°Û¹<!$77³G¦®a:á±M×\x0003Ù(ÓÃ¬ís¸-¸VG%+¾É·-§;ìN*X¶ëºyÄ?¤öØ¦E}djËØâÞþÊÚ·VíbÓA¥µ35úåQ98&\x0000-°Û
­îá2
D§\x0004x6ÕV2ÖÉ\Ú¹·JÅÍù®ºFá.{ ÎÇ»¡PÁÇ1\x00086ÉÀ\x001bp¯kyt\x0010´í\x0003£\x000b'{Ë9øY\x0003§Û**¹ydzó¶¹\x0003îýe%¸9¨8?ÕÊGá\x0015`:ÔOÚÙ³~9*\x001a®ïWÆ\x0007»ý\x0015\x0003|R»\x000bV
­½{æÄg^\x0002Íg^ìnK¬nî\x001c\x0016óZÃã
.\x001d¡\x0018àr\x001f2\x0002½â³³#±|\x000e\x001eoVteJL\x0001\x001bL7wëÐx§\x001c,\x0007LÁ¨=º\x0006x\\x001b*±ïñM\x001fkF\x0017¶Àº¿ V.ûÁµûR+ÏÚn:\x001aî\x0005gNW\x0006tF\x001b|-Ug\x000bXèíS+:­óºö&Z©DJ\x001bc~çäÞÒ6Û:+ª=-Ø÷-¾s¼*©ýÙgnÓ¡Hª²Þp¶·1c+\x001a\x0001Nmï^
$#8G\x0003Ý­`\Ü=\\x001fù\x0016æptsÏ\x001c·oô\x001dF\x001d\x001b¬´\9¼ü®aw	Z(J\µ\x000eë¢'6ù»C÷ÚdÉ×¥]\x001bv9`Ûg­íë\x0017FÅ¾:ë\x00121¹À»låTÀ\x0011ùJÃ»1%¤ÈýâÃ­iÿáÊ(DÍko
\x0004\x0000èVÆÀ>±{P~¬ßÏÌ\x0007nÑ&b¦wo\x0013ðÝ×\x0017²A°ëifñå\x0006¸z\x0003À¹n\x0005tÀB^Ø=\x000b§w[%^?¹	ÑvqptÉ¤ß\x0019b·Ghëâl\x001d\x001bá\x0017ß¦¥¾Ñ;¯\x0003n \x0006´\x0003\x0003ã¾ûwIÙ aì`Èî`)û\x0005_(4\x0004zLûs=±\x0005¥@µsÇ _jçF\x0014\x001a¸r]î/ð+Á¯Î·\x0017DÊµÀ-\x0003 åç±:Drhü"0½\x0012xjEÿÖù­cÔÎS©üÏW:\x0005¼½Åñ\x000e\x001a©ÜÂ\x0013O|ÏÅë²-C¶¨Ù¿«7ßkþ.óé «ÖÑ³±¹OX\x0001´õJ1À\x0004¥ÑùíýUÕ4dZ\x0001ÃºR2µ\x001fjÙ¯õk=Ò;kpÛ/\x000e¹t°á&Ì¾d®ÒNéâø0LnX;w;^\x0018QïÝù¡IÏç0P4YÝ^uFÌ\x0003Ë\x001dô\x0010Vuçð\x0005[åú¬\x00044/­l\x000e²óR·\x0004\x001a®àå\x0008x+\x001d\x0000ëá\x0010³µ>\x0004OIb:Úà0ZÀÛ\x0019\\x0002]\x001e\x0000Ãy°9x]Ûj9LdÝ¢aW¦Ü@æ6D\x0008\x0011¢_#5»¸6úG}GÑIè\x000b¸¦^\x000550°úy\x0008âWËÇ
jdÿ´\x0005ÿYÁC!ø\x0010!Bô\x000fè²\x00125±çç´\x001eóvl<þ~Ö_B\x0010+=x(a\x001f\x0011¢oåà\x0015üvê*µþ]°\x0002D\x0010!º§?\x0015ØÏv\x0008eùµ
$"©ð>»¬ñÀìúòÏ\x001e\x0015Â
~w!¬\x0000\x0011"D¿©¼3´ì¢Òæf\x0012±©±  ·[ºêù\x0015Èø_V\x0008+@ôÛ	a\x0005ÿ\x0010V\x0008\x0011"D÷d3\~\x001eûöÏãÚ¤ÛÛÞÚÚÚ;ÐÛ\x001eJþ¶£]\x0019ôg×E7ó%Àë:Ú;Dh\x000c"D~+\x0001\x001e÷ÅÉáöÖæÖÎÞéåý°ê¿¼§º\x0003ë×v\x0010AòºôÇG¡\x000bdÿ&2\x001e\x0018­Î/ï÷/+\x0015 B\x0008\x0011"D\x0010!B\x0008\x0011"DB°\x0002D\x0010!B\x0008\x0011"D\x0010!B\x0008Q¨\x0010V\x0008\x0011"D\x0010!B\x0008\x0011"D\x0010!
\x0015Â
\x0010!Bô'Ô_57ó[Ó¿³\x0000äñ"z\Hõøk	yÞÿB\x001a¢[ý«V\x0006\x0015 BèO%Àmï(IzT¨¿öÏ\x0015w}º5 _øµè5\x0003Êå/ï÷¸<ök»ó\x0015Õÿ09/«°a±¹M\x0017vÿ¼OWºYñôöïws¾Ý\x000bÛÃßy]\x0016ýá¯þ´\x0002Ü\x0016Ë#·ó'ÐÒpc,`ú\x00150\x0017;Ü»+Aÿ\x00032ÿÎµè\x000fÑùÞâÈìæWíêvZ¬¿ñ,Ù¿ýñö'ÑåæoyNÖe±rÙùëÜUÓÁ²|Lóo6§ùxmp|åËûvÎí¾þCªU\x0017ýôÉèî·,\x0007à6Gäë_³\x000e´¼P"»°ýÙ¯ÒÕñ:_ùUµâ1oE¿zJè\x0008nÙ[\x001eÚø½\x0016Ìqõ2±ÜüHã\x0004À>úúÏØG\x000eùk_ÜM§P®\x001cü\x0013®çå¾ÈN-÷\x001bËnsÎÉé6f?é?üG
0`Ø\x001c;øCp\x0003Â
\x0010!Bô{\x0008p^I¸-Y\x0019©	(T|RæàÌîÝï=Êâ\x001fG¢P¨¸ø¸Òzú¡É×yÓ\x001cb
s\3Æz×Ìºò-\x0001 _äeåõ\x001c«XáÅmàOY\x001f8s_éú\x001867\x000cfxz[\Ò4¸ô+/ã\x0005xÚ+ÑÏ#£ÁRC¡j[¸çÖÿÏÞw~%mûþ[ïÛ½ãûî9çv÷éê®ÐÕ]ZeÎ\x00083\x0001s\x0016s\x000ee¨2ç\x0015\x0001A$("ArNÛ·	"TYÕ]§ºÞ9ï
çðÀÞk¯5×\3üÖk\\x0001ïÛzz÷üÑúÛ&NÇ¬#h.\x0016KsYãÞofK*aÏ§No\x001eüÉr±Ã\x0011ö/kÐe9K#}áM\x001aYûx,æâÿúû.Ü¦ËÚ¢ì¬Ô´T\x0018®øPaüø\x001a§^Ì.`ò/jÙ"z÷\x0004Qù\x001bYK¥o(Eî3þñW¿Ùã<ÆF\x001anL`|!]\x0019 °\x0007?>`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=\x0010]Ã-\x0007oWvuEJï]:÷¤É©d\x0018¡ìòÒ£kóä§\x0007mÈÚ øIZûõ~º@ñ¶z"è²\x0004l`BÚZîdsPÄú\x000cãaâòI\x0013&ô× ÌÆ1¢ã\x0015¶|ô¡\4\x0008vA¶E\x001eü7¯C5\x001dh5|!rS\x000c\x0005­\G%ü¤ÛÖC\x0004V´Ø³[ÆÑ³Ã¿ÓÑÃ:%yúÖCRa>ç)¿¶õ\x0010K­Qpûn\x001b&T]\x0002¤éº\x000e\x0005\x0008>«¥\x0000T\x0007 T\x0012\x000e/éÐÿ¨Hµ(u÷¡4\x0018¢À5IÀ¹\x001fÀ</p><p></p><p>\x001aÛàH>npBæ-\x000e`®yÐ\x0001Ä½\x00100)r\x0000V\x001fÒ\x0010w\x00040ú;ñH¡Ú×{Wðb¸\x000e\x0012)^È\x0012]%$a+\x0000Á§Ø¹v=ú	\x0016Ñ\x0004:\x0014©\x0002M\x0001Â\x0014Á'¡!_}Âw)\x0013ÔY\x0011¶í<\x0006ó1\x001e04,á<«9Æ\x0017Ò¶:\x0018\x0003ø¶´í>(*dx\x001d\x000eh&Åk«\x0004½[\x001fAÀúH}V7ù>&\x0019\x0012°m!¿£èa£H~7Ú\x0016âç|Ý÷À5Ða1Jù\x0016\x0002ke\x0003\x0004ÇÆ}£\x0016æ0ôÀ+Å¶FAòeÓ\x0014v{Eë\x000e<ùlYS4å¨Cýk\x001bð·$ÀJ!\x001bïOÛÞ-E/\x001c:¼¡\x0013\x0005ÅÚ\x0014X\x0003\x00019\x0000\x001f\x0004®4·äÁýþ¬\x0001ÓPÉx\x0014Þ\x0015N\x001f6¥ ­Gâ\x000bÐR~tM	\x0002ô6% èI\x0000hÓÖ¶@\x0008ÐûðÅÚ\x00153ð\x001c×KÖK=\x000b&\x0018j&\x0001K\x001a ç*åmk©i5Ãô\x0001Aùº`P\x0012y²As£CYp5÷_¿îÉoWTuÅí&¡\x0002v\x0001Ò£ôîB</p><p>KoíNÉß	</p><p>:5ni?=\x0017BoõqP:¤$ã"ÎBl\x0010\x0010ÛàAh\x0016\x001bÑ6õÓ¶x$\x0007ª|uWAÃÀÐæ1jÐ%ö]u{Pøûhõe¿ãÙ|^NJø}J$´!ìX?Ã$Ñ$(ý\x0004­\x0000¶§vÌlsFÍ\x0006Ð-ÏÎk¨ÚÔËa³¬×=þC/ç\x0004QJ0\x0001à\x0014ÙÁ±\x0015Ñ>\x0017v¡µÔ±Õ°Ùñ-o\x0008Ù\x001c\x000fÒbÁ·jåº«/af§N|u \x001e´[1m\x0016ç\x0017v\x0011\x0019·¤)ÇUYÛöl$È$ø#\x0001'eqp>nªu~\x0014ýÑ/UYÇÙFx6Ï\x001a\x001c®¬Ð·Éºï«oe}O X2D6\x0005XÅ·3q%\x0018Ä³ñ¸4Nä=«lñéZ'HZTäxzÏéÞÈ5@h\x0003\x0004W\x000f+ó%VÐ[\x0005ù¸r¼ pqS8 ­çÁ{í©>[ô9êµewX&d«® =\I¼ñ%-\x0012èZ\x0015\x001cÀ\x000c]¯\x0013ogPÄò^\x0005¼{rÖ¨\x00122\x0001hòK=\x0005Ap</p><p>§à9 NNd</p><p>P£C;\x0004\x0008Ò\x001a\x0006\x0008®K
Õã¤ÊÐZ£³u6y]WH %Í$*Äâ"º±â¢zZBs\x000eµæO\x0019!ö?@ð5]\x0000á®\x001abu\x0008N/âZíá\x0002©±Ac ô5Âª\x0015f9IðÁý´)R6íÙáãå·EDw\x00100¶¸\x000c\x0012§](\x0014\x0008®%Um±Àa#ÜUU\x0004G«</p><p>¦|\x0007-Q©*?5BUå'x¤ª</p><p>õÕÉB\x0004[?^=êN¨6\x001d
7\x0007ÿ°íÞ#Tn\x0005Ôl«§=\x000b[È*Þsûä\x0014"]U=@	âÑ\x0004Ù^B1Û8·\x0004I\x0002¤f-û	¢ï\x0012 èW`°
hÕLEF×M9-0¼QQ4ð·Ý^\x0002\x0002â@\x0019\x001eì\x0004ê%lÞ	\x000bÑ-@X¸(\x0006ü´± kÍm\x001d\x000c`£@xIÛ.ÂÌ£mñ¸z\x0000x#\x0016â¼Æöº·ö\x00144\x0007l
lI0±¹\x0003±/Fxþ8\x0001¬\x0008Oä	¥\x0000NI"ÍO\x0010B»)³Øñ©{1i:(ÆÁ\x001cìt³Î+wê\x0003tØ¿ä\x0014\x0001=æ{¶qDhõ$\x001d\x001dp§H°²Ö|ÝÂAÌ7\x0008V-æ\x0005:\x000f\x0015\x001e "õ\x0006\x0017o~¿£0\x0012ä÷\VcãøÔvj7-"R\x0001{ t£{ãcæ\x0011t¥ (©\x0015Fzg\x0002;Uap\x0011Æ¸¢æka}bá
¹Êz]jn\x0017\x0001`à9vØ±q]
ñlM`\x0010ë¶X\x0018¼¢ÈfAqW!ì\x0019\x001e*\x001a 8*£q\x0011ÍëÂFü,IüqD}nÈ\\x0018·8D¬\x001bN­×<DÀ3ä)ô 
_Èó$>é\x001b\x0005¤Zp¬$)è¬ÃF¸ë\x0016vÚïq\x000b1èq²v«\x0001j\x0012ÚO.\x0019 ¸`\x0002^ ¤*Ù2ÎVDì?\x0004\x0000Oò\x00136eK\çÖEÝökÒÏ6Ýª©Tï²	§Ôñ)\x0004Àò\x000cZ~\x0004&\x0018u}[³.Í¦Ó\x001c:</p><p>xÃlð%ÉöÁ³\x0000ói\x000f;´#°¶DÎ!Ð\x0019\x0018\x0006ò¹\x001c\x001eI×H4D\x0005Kqp]ïÚNÄb\»ZlÄÕâêõ¹\x0010ûÌJÃ\x0006z×[Ç4'\x001bæm=Ó\x0015øn·\x001e¶+ÑÁ+Üj¹­ô¥h×</p><p>+¥|\x0000fÀªGó²^ 2`:ÝLü\x001f\x0001\x001aåÖ®ò3C`ºòDñï%\x0008\x0005#B0t<(P\x0005Að"0VPxÐF ÅÁr\x0014Ñ\x0007p×âèßgq¤Â\x0007b ²8üÔ\x0008-\x000e?Aº\x001eo\x0001õ}1pä¦ç\x001ah<ñ4\;gÚÝP¸j*Ö!F«9zÂêOdcer«ù\x0019|ZnÌuÌp\x001dÐÌ\x0005z0Q\x001cÓb{\x0000ûãuO2``«)\x0019AÄ\x0008à\x0002#9\x001cAÍw Åä<¸mo7åëæn°hÚ\x001eÛ~..h\x000cZ~[\x0017¡\x000fmÓ\x000b²½/\x0013_{Õ\x0005)` rAåa0ÅHíq«\x0001\x0014m×R¬\x000b8l»</p><p>à\x0012Èyú¥R)0?5ÂEì'H×|-@0Ô}
kgéz\x0005¸ÙiRFa\x0007«\x0010us4\wÒ\x0000Á)x#TeÐ
wwpRèà C®\x00198ý¬Ð6};Ýör]ß\x0002\x0004éÚ¾\x001d6Â]ÉIp2\x0003gé	Û;\x0007¨\x0011JN?AºÖo\x0001Ðû
Ë\x0008ö6c£\x0010)i\x0013M»·Ó\x0004Op\x000b{	>iÊÖökK\lèÄýß\|\x0012þ·qPp\x0002JN\x0002/ ·^pãjhÏªþgkÎÆ\x0013±3jèÌFavó\x0010Aº6p>j§è\x0001ç£K×\x0000ÎGíY]Õ½\x0008Xû«CX.@´¼þ«gXÆÖ\x0004ª3>Ï\x0010èÆn·6%[ÖU\x000b\x0003\x000eÞvà«AIÑ¼8Å¾\x001b\x00070Jâjhy\x0000ñÆÍÒ¦¨Î\x0011X\x0016}\x001d`_ôitg\x000380sÃâ\x0004;®\x0010år\x0000ËÆ</p><p>_FÍ÷ß</p><p>¼¯gÑbF°Ó\x0001¨\x001cÀ\x0013ÄãÂ\x0006N$G\x000bC'¡ÃÖ\x0012ª&\x000c\x0019\x000e7P\x001f|k+\x0002<¡3ø/_än\x0017kcG"Á¨2\x0016B¸`Jô_î\x0006Õ¨©:ª\x0008Oôßc\x0013DG¾«Oë\x0002r\x000c\x0004¿û\x0008¿|ø\x0012
gÓa^¹}é\x0014\x0010§\x001cª¹å±Ï\x001c7Ëa¾ôù¹ìä{k{roéxÛrm+\x0017ªh,Qè.rÀÔýiÃøßÆåºã{ó\x001d~ù=!©!N\x0010¤|\x0000[$Ý\x0014 ë\x0000Ú\x0004e¦a3\x000f¼Ý¦\x0012cEÒ\ù¼ôÝ;àÊ\x000f\x0017úÀ½öGe2íÒ)Göß\x001f	\x0001åS»\x000e/]S/?IÂþ¨^\x0016Ø³boÇKh\x0004\x0007û
ÌD´6~\x000eË9\x001eq\x0010\x0008!\x001ac{HÓ 8ÞlôG;8Þ\x0004_~Ê¶k,èj]$·C\x0013I¢®­Pm4Cµ@\x0018\x001b\x001e\x0001m\x0001ê\x0003ÿv½9r°iµ½ü1\x000e ®a®MUè­L¦$é"-4\x0000~\x0003T]Ü\x0003#\x001eüQÄcAq\x0014Æþ\x000cñr\x0007MÐ¤\x0008LíWh\x0015Sf,\x0011\x000cð a°+	»IöHB@ÑÂI%¡$¥$ô\x0013¼2ZOÐÝ\x0010\x0004\x001a¼]ÙæÂh,7\x0014B\x001aÏø\x000b°td Íoûb\x0017õà{~zN(J!°mo¬\x0013ÙîIº"zî3o6\x0012O¶\x0007å²5d$ï%BùÕJ°±²ió+\x0012Ë\x0014ºå\x0007øxRg#ØV)Yr¨ì¦îÃC%òEi¶ÔÊÜS\x000c\x0015yñ¤\x001cÏ$\x0008.\x000e|Ië\x000cmÅî¯7ïµí©%Ò'\x0007Ð>Ê\x001dàsú\x0017§9¦`½üÓ\åY¬B/½Ô½Ò¢Õ>\x00118$â@C\dW«\x0015\x000f³¶8t­Y1	mµí¤p\x0015¡Tê\x000eNrà\x0001æ|Êîÿ\x0001ã2Å¸</p><p>endstream</p><p>endobj</p><p>215 0 obj</p><p><</Filter/FlateDecode/Length 5581>></p><p>stream</p><p>xÍ]ÛnÛJ}\x000fà#ÝhÓ¬;9m\x0018ð%ÎÁIOú$8óô"Ó\x0000[R$*H¾©?¡¦\x001f[1µw\x0015/ª,détÈ\x0012/µ7ë²¯«6Ï.\x0017åä~4.£óó³Ë²\x001c¿\x0016wÑ§³«YYÎþ~öñç¼8{?zLGåd6=û°úRÂ¡ÛÙ¬,\x0016\x0017\x0017ÑÕÍutöö\x001e¯_}{ý*Ò$Õÿ$ID.\x0012F£$§Ñ¢xýêÿþ\x0014M_¿ÊI¢"}iÄ\x0012\x001e±%"Ò(ÆO¯_ýò4z(X\x001aÝÌ¢¿F±É4Ë\x0014Ñ÷ø\x001a½ú¨ï½%Ò­}¼ý \x0005ý;ëtûG\x001f 5Æfð\æBE\x0007}çÛ\x000f$Å§Ø=ÿÛÛ×¯>Å·ë»\x0013\x0011¯\x0017£S\x001aëÞ?ÓèVÿþ{ôñ^¿z£é¿_¶Ã/a4á|/Ã\x001e6ÏÓT\x0010Ýÿ·\x0017§LçüÃk}Xê¿æé¿*M¯¤¹D\x000b¼Rá\x001f]ôyÝî'HHÖõqâñÉ)GðQuùI\x0016G½º|GJX"»óø\x001eøúúóÅËÉ·U18w'Bvæ®(\x0007gHDt¡ñî¨"zûóÇOÓSawYè;ÆdBº÷ÝïC³£/Ìº³3{AWMK½\x0006°Ó&bh\x000eU¨îKaðñËhÂºwX\x0014éI¦?tWE'²ú¶ï`ûÔ°ÃõG}ÙÏQÕ]¹¯x\x001c¯\%ªk·¢Å¢tãO1e\x0003s&Ò¬»2N[¬ñ¡Y#Ywâ÷\x0014å	í#x¶§¾s9?³^\x0006~A;ÀZi1=02eê<95mb¦æà'õªÉÿ\x0013ù"ôÖàlQÒ}\x001c?Ñtæ	ï1ÿf>Â®\x001f;4"º±ÌáêO\x0019~" \x001fõ¢6$gBB
ÅÙ>j<\x00165B\x000ex¶èÍ»ë(:{\x000fw×¿ÜD©
w¼t.r\x0007\x001f\x0019ª^¥8¸Æ[h'\õtÂ]38â&Ùw¹¥\x000ez$z1ù\x0008^ÏÀû\x0003ço\x00124UÏ.×Ë\x0008\x0008ß¬ç#ÍÄ\x0002¾ÅS¡½ªá9ñra¤Õ=O\x001cD©ßé3³«Sz\x000e\x0001 4eôâcØGÿWú¿ Q¿Ùçê\x0008ÊÓDzûâtø§=Cð\x001d\x000cz±\x0008@Vä	õÝ'bÈð"F¦É%bH\x0001ã¤w\x0014ùâ¤¬ÅK\x0000,÷S\x000cÑ·æZ7½ßÖ\x000f\x0010\x0015ñt´ú\x0011v&T\x001eö¬;+v\A.F¬Æ³Úf|\x0001#lxF´$è\x0019á4QºWõ§Ï\\x0007Wë¾¦\x0014æÃ¯\x000c"¦ÀØý\x001cín\x000f¦"¾#+!j£i\x000bÐVæ±´åMÁþfÊ°·y¤-þÍöDF\x0014K!ä&Ü~T\x000f¼ï´é0sÚvØÆ\x0005B;>8ZU\x0003*Ï³\x0017_b¹0ãg6F¥j¡>-l\ò7÷tÝç%Ý2m$\x00048T</p><p>Ï¸T\x00023@°,³.ÕöÑ:´\x0005-BÐíKo!²É\x001aM\x0015,Ù¬õ\x0016¨d\x001f=ZÙ\x0001Kô¶È¶8"\x0002âÐT\x000f9øÑs·ódú\x0014_\x000eÍ\x000fåìÑ?cÈ\x000fÞIZ\x0013õè£»¡gµ`}ú\x0008\x001d¡§µ\x0010n¿û4Òãö}¢-Çr\x001d{öþë	.'ðýÛªÐ?¢Ë»~ùþ]¦@ßéy¹.Ð¡ý\x001c_¾¿ÔÌ>\x0019Ã<\x0007Írti±¥±S\x0001\x001e\x001d*C"a·µa}\x0001jÃÍk<êPYuhÔºÌ1êUÛAúí ¬³"õ\x0018BR÷²¦ztCH÷\x001a~KÇ~ÎÒ©\x001bð1Ð­ÜIbÏézPø³\x001c4
xm­ç.i¸ÈyekµF¾ÕBÞÌ®K<+\x001fÜ\x0007ìâ®±Ëg8Q\x000c0 F\x0018P© c8|*[a°}ÔÌÚ_ÿ­å(ºæÅ2BxÏlz"\x0000èÃã\x0002$íbºÖ¿Ñ\x0005ð-\x0005\x0005Õù­vß\u\x0010I¤æ\x000eS3úd¦Ä/MH×ÐCXúR&¢C\x0008ª£\x0007­"ædób&ºzÏþ@4Zö07É¶³òGÂ<ô>"lnU\x0016Ñh\x000c¦M\Ïïð1Yö3i,)-4¥¥iÔ\x001fûtó,\x0011Çëy$¥>zwkiØÇÅãl>\x0007YW<iÙVL{bò¼È\x001cDb\x001aÝ¾\x0017«EtW\x0000WËhÞ/üíb1mÂø8X×m'ß2Zbgµè×ïF\x0000dãqTQiCó".ûo]Lr	èc\x000f\x0011@'&Ã«\x001e¥\x00128ÚÔä\x0019\x0005LÔaôv%0\x001fÐb ÚÖ¦¸d</p><p>\x000en­ëÔ¯»lu>>gÈhæÔNÿÜ¬OpårX¹0Eç!\x0012\x0018ÜI\x001d°"\x0011Í{â;t	G¡å|pc¡&)µ°\x0010zTNó<~\x001c>SI\x0004Ó\x0013ÁÍMPR¦\ä$¢ØsûWÿV@]hF!É\x0000×~e@ì\x0008w7M¼\x000c'Ï\x0010
\x000f÷äù94n¯Æá\x001aÖ4l ò\x00012¡Ú«Q§÷Ñÿ|\x0002\x001dÅÓõ¸\x0008KbD\x0001èÄÍÀ\x0012¦ü¤\x001cmN%þàñxö4_¸*\x001aÝ¤ñr¾\x001e\x0007\x0010L¢-åävr?µùmLä*¾C]\x000b\x001fvÎ\x00106\x0007_ç#Íñ¢y¬e´(&dW³L\x0003d"µ\x0007ÛÖIðidFj\x0005Ï
«\x001aa\x000f"\x001eÝã\x0018#\x001c0Ûkæ»Yÿe¹è\x000bÅw®wn³ßs\\x0008L\x0010Äüu*\x0004\x0008Ô"\x0014ò</p><p>¡`OffÇ½«uB½/\x001bÍ¡$Hë=1F¢Xø\x0003mÚÀûQ\x0008\x0004ö\x0004³©%¤ªý5Ø¾°í¥·
çØ\x0006uãæ¼>VÝ\x0002\x000fd\x0006ñ2{?k?9^û¯l»)\x001c\x0017ÕÍÃK(\x001a	åUËÙd\x001a@(q*Ì7\x0003¬TÎRÔNzFæÁ*1+F[Êz`</p><p>~\x001aãTÖ+ª,\x000bÜ1\x0005ÿª¯`q-\x001cÉËs5:\x0000=\x0018KççV]Ì\x0017Æv2ad.f= O¤îÂè×Ùô\x0001=OcB\x000coÆhEêéøfU!»ÖFÐÊõ×\x001bmÝ\x000f\x0010\x001fw`®pÍ¸¹	àM@ÂLÛÒnz{­è\x001eI`ßÔÌpý¾\x00135<'7Y</p><p>O\x0008r¶½zÑce¿\x00040í\x0015Ä\x000fà¥\x000cB#zvhçb/yð4´Èèj, ¥\x0018ÙCúaV	\x0001\x0008XÀlµÄí\x000fÍáùêËãd\x0001\x0004i"Ç&Æ¨.\x00040C©\x0004\x000fybav©êõ2ÄÊÏ\x0004ÄuÛø\x0017\µ$(P¡\x0004Ú\x0010~&\x0010Ý=¯åææT\x0012HË½X4\x000c=\x0011<«c!ÑûP\x0006XÚJ×kì\x0000ê«qY+.-ÞàÆâ·¿GãÙt\àQ3¯0ÉAÄè\x0000>Ý³+Àí\x0011JA\x0013<?Ëh÷'Ý!8\x0005Iób¼`Ç¼;Ý!\x0018ÂX^ÌDWÔ¢?Ý!´=Íîp\x000cüõ\x0010¼~ÔK\x0008
õ/Kmó¡ÿ1.æè
£9\x0018Íg«EôX\x0018ÝÒ\x001fÏáH\x000bd(£Ý\x000cj3¹ÑUð±¾O\x0010rù\x0017j¸ÑxðÚ§yOÖ\\x0004K9$f¼ó_¶½iãx·</p><p>Á5í</p><p>\x001b3~oÛ§¶\x000euÖÚOPÝUµõMàÚÜ´U;Þ¢U¤·\x001cbÖ\x001c«îG\x001f\ØûÓ_\x0008ií§×\x0001ÜcáZ?hºï®õáS0g8%àRwQ\x000c¹ÒôZ\x0018ÿr\x001d\x0002sÏA¹i£èÈa\x000fQ¨xæ%\DkÊgv\x0019´âH°$Xµ\x000cmÜÉ*Òm5\x001e(8·A'\×W¶¡+C\x0008Ä\x0001oÇ½lAp+½jÅì®l(]\x0006Ú@¤g\x001eóÍ<+ÛaLH<\x0007jrÞ\x000bsä\x0011s8d ]«(þ¡ån\x0013ÑÑx\x001aÿ+@°	ðÈÇ[4\x001càÆ¾®\x0002åk\x0006»iô0
á\x0002VKúNð\x0018</p><p>pð.z\x0006h\x000e¡1.ÛA`§\x000e¥@ÐáwqÐJçé\x0016 ±L\x0012áékòo$\x0002Ü*\x0006ª¤äÙ ÒÔµ§÷~ô}V¹8ÆèY¢ûSeìB3p[ôìDêR\x0002aC7w{µw×´¸_{CM]!¨úv\x000c¨¿=\x00047\x0014x0¹ÖC>òæ>µw\x0015ã7\x001bvåñ6ìzº.Ü]\x000fÁÐ\x001bv\x000f[\x0012»ò +\x001eå\x0019y °(ËQådHyà"¦fOØµ6R\x0002D£q×çq\x000cÒúò8û[\x000fëôÝ\x00197|î\x0006\x0000qi\x0007OvøÜ
çYíS{Bo~\x0014\x0015||þ\x0018(\x000eJ\x0004îÝÏL\x0015bR7/'^õ Z\ÛßûB°Ý\x0003ý®Ð'×âÑ^à>Ú5â/¡\x001fS³g	:T¤ª^ñ\x001ce*T\x001dZÑ-ª\x0012j\x0006Yª\x0019ê\x0014'Õ@fòÑ{7Y\x0016\x0006\x0004EÝ`1Å\x001fÚS~\x001cáþ</p><p>0\x0005\x0017T?ø>_Ì\x0002T'a\x0000¹pòáGkÒ´@2¢\x0002ÉH\x0013{Ð¬\x0003Ò!3?ªï`yuÙ°\x0004\x001c\x0015×ÖTJ\x001b(!"ü\x0000×CÚí1Fe\x001bÑ\x0003\x0016ehâ¶M\x001að\x0010oÁ*Hª¬¸ì¢òèÎ¬ZR&LÒ\x001ce\x0012\x0011>\x0015à¨
4ª\x0008Øz-"ßeêÜSçÏ8\x000f\x0004l\x000cà³ç\x0014\x0002ÑÞp:t\x000b«æ\x0000·s\x0003ãT&e\x0006%ÀB`\x001d'y¢v­Â·?ÖO¸si²( Tü×b¥W\x000bßB\x0004ÿ÷ +Ç½4\x001e\x0002\x0015Ê\x0001`ã¡÷\x0010ô\x0014P:ì\x0001w\x000bntM)î×\x001ei\x0008\x001fh¿úp
\x0001Ë´úÃI\x0010\x0017`»x
¡¦Y-\x001fI\x001dQ6\x0007\x00053¡6\x000c!WÕ©Rç?Ë7ðÝÖïµÁæJ@kQ¿\x000eÝh'\x0000ÐJ\x0004Wy\x0006Àì¢9\x0001ú\x00069»\x001f\x0019F\x0001\x00104JØFèáeZ ijf;I\x001a'Mtà¤\x0015\x0001¢L\x001b°Äû¼\x0001&?\x0013\x0004P\x000fÞÉ¿1¡j3eÒ2\x001a²
o=©
ð\Û%pÛÔ\x00156¹ÎV;\x0011ÒÝ°Pk)T\x0019Ï%UïxÈìr­\x0017Jf¬Á\x0007K\x0010Dcx\x0006\x000bÍÊeÿrÏÏ(h;k"½)G_\x001e'Ë8e7]\x0013ô­á\x0006®»ëh\x0004\x0001ë^ÙSÌ¹håÜ­ÍsÙj¬\x000fVLVsÂ</p><p>Ü</p><p>g^§ÞÍtÀ}1A2r*É¨o\x0008\x0016KpÑ
Æa\x001a\x0004cÉÌ{2<ôûWq\x0010Ì!Xg6^F\x0010ZoÓ»Ñ´4ë D¢ÈDùøù\x001c¿ùï÷7!,Q.\x0018Xh\x001eÂ!\x001eTH°<\x0004\x0003¢\d \x0014\x000e{Â]S´ëfþ½¦(Ëðý\x0011Ç6E=dÃ2<\x0004/\x0001\x0019UEÿlþÚnªÆÕ\x0016¦jyøiËà¶£Þ\x000eVÐ
}½jÅ\x0018\x001a°U}/miõÚBÈ,J×\x0001Ed)h\x000c
m{-Ï\x001b\x001ekÐ¨\x000cÚ©¢%VIíj=ms0\x0010ü\x0003DôÎ%Zà\x0000
\x000f±S(82BK0Ë>F&¨Ù\x0019i¾Þpÿÿla«,à\E´:7öÕÂDÞG2ýµ;9øÙâit\x0002oT</p><p>@Ya\x0005\x001d'å6\x0012b\x0016Àw Y</p><p>ÁoÏSïÚÃ×\x000eeZoÉ\x000e\x000cY<\x00141ø¬\x0003Ö\x001dR91ÜàqPåP6téPÆD]Æç\x0015³à%N¤U\x001b´]Øç+L¿+ZE­Ú×ØSM3uÑª_e92ãä­$Ú?¸(\x001b¬¨­¶È ðWÕèXJ´ÿÖ-Ö\x0018V§íÈZR¢LÁrîÈÎyR¢Á{{þ¨\x001erð#{Øà¥D\x0005½\x0000ù	SJTÉtçéÃ\[\x000f³E9õ²Ul2¥\x0000ôíÌÛÒ\x0004gã©Ë]¾àýT´;_»Ùt</p><p>V×tÜ¿¦Ë\x0016kÚÚP=X\x001bH-\x0012Y\x0017Ú»:¦¾ ®Ï¹_Él\x0016èd°¯V\x001eV 
^¡\x0019`õÑí
"ÚµÈ±ó¶¬	sEcMl\Sw¿Ø*7¾Ù¡b¹åÂ_r\x001d$¼bÃ¶á;ÜÔÍ´¬^Uq¤êÊ ®ÊÍù+w²á7Ò¼/À/ÝI³®u;ß\x0019+\x0001,Û!ð%eªÐê{</p><p>P$+G¯¿[WaYSyü²¦Ý¸}AMSQ@</p><p>Ö5MõzR~\x0001Ì\x0007¯iJjÞ\x0015ñ54hMSªX\x001a¼|øT\x0012g=pHa'Åp\x0015MÝä¦öåÑ´2Oó¦¢)C\x0014Ù$ðz\x001fc­\x0019$«Ò\x0000¦{DYáê~û
E?õ¥©ôð3L­ÑÜEV/\x0005â¼GÛÈ0·\x0019s8v¥jTHÃÜ,ëg"âUi¿ÜF°ÛIM¼Ù,{ÿí\x000fÎB¦V :»u9^Læõ.%\x00031¦ Öw1Ã1\x000f ¸yeeè¡ÇÁyõL¯2ªKRÌÊ\x0000{Õ¹¤ÞÅvÞÆH4Ù*õ!ê½~
ÄW¬I\ *#\x0014Ðl\x0003X[¶\x000b¯¯ó\x0004BÅ×Xã&DöpD{x\x0008%Cüà\x0006l×\x000cR\x0005ÝÕÝPCd«#²Ù°É¶\x0000`¼\x001a×</p><p>\x001b+ZçS'øÊºÔg\x000bÎdkÐmÖ\x0002bÜ\x001að­Å¤!FMnðjK\x001eT»¸*È
\x001e«¯ÌZ²«JM\x001c\x001d6g*·
?\x000b!8À¤o\x0006Ü£Ê\x001a\x0007iã>÷Í¸)B.DS\x0012~üj\x0004ëÃÊ\x001cñ
¬\x000e*[\x0017Í¢ù\x001c_\x0002ï¿Þà+Oð`fªöañ\x000fÜa\x001an{+Õq7ÁÕFÇõ¬¯í-Ý\x000b}ê"®E</p><p>h&¬æÐ\x0013n\x0007ôØ³ µÛ\x0012Â ½½Öðõ¥­]\x000eµ\x001cw'ÚMS:l¶ª</p><p>7H|jÇÄÃÂ#V+ã¶Z\x0019Ðî&Ë¹Y\x0002!X\x0011rr³1E¿ô¬éì&\x000eo©òôDb{Yê§Ø\x0016\x0008\x0001*fÑÄÓÏaÐ1æ\x0016ß4Ã}>Ë	Î°"º_ß­\x0017XàèñÏ¸¯ñ\x001fÑ/!</p><p>ãñÄ?óCì\x0013ê\x0019ïûß·¿]Âp¿{\x0017\x0002MÀíñ®«T¦¦â\x000f!àÌG<HG#\x000cÜGï
,«÷oG¹úO(³\x0015ÀpAÍâaà©Ûrg÷¶I-ËFS\x000c»}µ6þ6ZÑÙá\x0016 ÆXØñ\x0016?\x00149ÞoápE\x0010¼g/*õP\x000eñ®ù%z®Õ·¨C	îÚ2Ã¿´Þ\x0005×q7-\x001f~£8Éd;°´.·Õëo1)ÑÚÙ¨ï\x001a(\x000e~\x0008¦dli\x0005n¯0\x001b@1,òu\x0000¯Avö\x0011ð	\x000f Þ®ª[T/\x0012\x0008^Ü¶ÍØ¾â¶$CdtSÜvORbÈª\x0005­#ª\x00074d¡]Û\x0015Pi÷ÙáüP. ÆìÂnSøc</p><p>ÌîgÓ=Ð"\x0007-Ôª/¦ìîÂõdà]</p><p>\x0019\x0019\wö´KÙ\x0010Ñ5\x0017çÏ>\x0011;Ê\x0004M?¹I\x0006,Tã!¸]bvxòLÏA\x001fu¬f\x001bByf~èSºçK[+ÇYÈ6À\x000c¥Poú&\x001fßÞ.ÚÝÈ¶%;¯ã¯G¨m;¼¥ânUÏ(-êzaöA0\x001fá{ØãÀã§\x0000µ¡:g¼\x0001\x0003B¤ñ¸CD°¹\x0014¾\x0015±\x0011FMx]¦Îða2oWà\x000f_S\x001cÊg¹^Ó\x0016PÞ»(\x0006ÉZYqïyB*q5ãâ¯´ÞAWe{°Â.­\x000e²ÖÖðãë
Q\x00050\x00030®{\x001c\x001eL¢¦0Ev?\x001bÓ\x000fÌ'ÐO4Çª\x000cn^~ê]\x0000xø\x0014vJ!\x001dêXò2mÊ)7yêªjÕ#6;iTX¥¾Zx&Ùmò¤/Ûm\x0018"õ
\x0001g¨P{\x0010æÂ\x001dP{6Dv\x0002_ÙîaiR¿ÿ<\­[\x000fi\x0006ù\x0016ß\x000b</p><p>endstream</p><p>endobj</p><p>216 0 obj</p><p><</Filter/FlateDecode/Length 6431>></p><p>stream</p><p>xÍ]ÝrÛ8²¾OUÞòVL\x0013¿$÷¸\å8?5[3»ÙIÎÙ½`$Úa\x001dRHÊ<Óyó2s9ºÚWXt\x0003d	%ÐLªbÙ\x0014ÉþÐ\x0000\x001aÝîÆÕmÕ\x0014÷Ù¸	®¯¯n&\x001bÉ'Á/W¯çM3ýëêÓ÷E~õ!{(Ê¬)æåÕÇåç\x0006.½Ï¼º¹	^¿¹\x000b®Þúå¯/_DA\x0014Fê$\x0011\x0013HEÈhp\x0012¦4¨ò/þçOAùòEJÂ8P·\x0006,ä\x0001Ki\x0006ê\x0007¡ÁxöòÅÕ\x000f³ì!gQðf\x001eü]¿\x0014_\x0019%ILÔ3®¾þ¤}Ç8\x0014Á§û/\x0008R A\x001cÁ}êý\x0006fð6ÆIxª~¦"\x000eª\x0007õäû$ÂVìÿóû/~¹"FQ¬ðøF\ë_PòKªþ\x0016ê\x0002¿SÔüMÔ
L?öä>u]¾»¹d×x_Ç¤úLô#\½êµÔ·HqwÆø!Ô\x001d\®\x001fÆOMøæ_Á§¿¼|ñV±át¶=¶Ñ(</p><p>¥|o\x000enæåE<</p><p>.\x0006ÆDX(Î>\\ÒÑï\x0017lT\x0017_ùàè\x0004\x000fEwåM0É÷ß/ÄhV^\Qvq©6ÅÀ0\x0019IÂwùU±oxÞ1&CÒwÿ\x0018\x001aº1é</p><p>\x0007E`¬^8VÓ`ª&ÂÀØ¤"ØSÍE¢\x0007VQåC\x0003Ó0î>;\x0007\x001fR	
Y÷!\x0015\x0004\x0017\x001c~(V\x0005\x0017²ýí¹GÝ?pC¹Tµ\x000fß¥\x0003÷Ð8\x0013~ÌJìTDÏ©`p`©zþ3p¹\x0002Òyå
.\x0015qîQq\x0018\x000f!\x0016)\x001f\x0018w_Ô®\x0003Jg43G­øiwæ°¡áP\x001eÒAä®\x0007¤ïÀÈ¥èü\x0004\x001b\x001cY¬¨\x001eÝàpD(º¸ý\x0015ÓëÂ$#\x0016Æ½Ñn/õ\x0003ã£¤\x0017>od¤`é\x0007\x0006D½,±Øú1	¹\x0013\x0000õÀ+1!\x0005ç¢Æ8,sç¢FÈ\x0011m\x000bÞþt\x0017\x0004W\x001fÀôÓÝ\x000foÈø¢ÊXýä©±Lq0È4T\x0001Ö\x0000A\x0003®¸'Õ\x0002AÝÿÉò6bÞvê`åV%¸\x000eÆ1\x000fI²Û,pè$ý|(6F¦\x000c®ØIö\x001e¤m.ws%¤fà\(U2áÍj©\x0015\lòY^6h\x001e.¿õ\x0004G,à¨\x001aPÑ\x000eà±ö½QÄèÍ%7\x000e/pp¡\x0007­g\x0007Ù\x0018Fy\x0014J'Ã.ï!ÊÙ\x0001?A?ä\x0007²"
©ìss\x000e?\x000be\x0014y\x0012Ú(úVz)øóêÁ\x0003\x0008¡,"ê\x0000Q\x0000Ù9¸CËlév\x0002"ÝNú\x000fr"äqý»7²YÇm\x0003bÔ\x000f(UÇèCí\x0012\x0018o-ûW­úÐ\x001eT><TzúéPß~Ë/\x001eÆi^\x0007ö1´£z\x001b£»_íðÛV*«
ºF¸
ÑÃÌÊ]¥ù&\x000eî\x001e×årX@Txê\x0014\x0007\x001cwFø\x0013	];ðjk\x0015ýä\x0000=²ßNðv<^æ\x0005ÈÝ©üq\x0004>êS²ñØ\x0003\x0016ÉB¸°Ìg\x000bÔô\x001eÊ|\x0006yy¡4@&¹ú½¾¸\x0004[û2¦£\x0005@Î«\x001a>æe×0ñõWYÓxPVÒ\x0018\Ú\x000eäyQ69@©=è¨</p><p>Ôl¤ÁÃ\x0018\x0001\x001fÎõzvðÆ3¦ìiéjü\x0012Wmì\x000fÕ\x00012\x001dÝÞ\x000fÏ¦Er	DJtdÝ÷ÜC²Ò\x0012õc{óÇjô¨zÞà@_ãÑóòa\x0003Yóå
1ÕÊ\x0003D®4
FÏ(U¸Äo\x0007ÁIV"\x0019Ñ4WÊe­ùq7]Â\x0004þ\\x000f\x000f\x0007¬wî\x001c¡¤*ñÁÞ.Á·\x001fÞÿãU°À=óÊ\x0007uAA\x0003qP×\x00132\x000f\x0016UÖ\x0014_zff\x0013à}¶\x0000</p><p>\x0003veÆ©\x0004¿,û;1­RSB$\x0003f^3À6\x001f\x0015\x001aúA½9²\x001a\x0017÷ÅW->¦³²C¤\x000b\x0007&0I ÈAð¿|\x0010da|d\x0003÷T«dpÕJ¦ _OµrÐó§Z9\x0008þÍ\x0001}ê X=de\x0001±D8Ó\x001b½$QàWó%NðKj4§¬ê\x001bÅcî²'\x0012\x0017¼1À*\x0016</p><p>ØÆÖ\x0007HÑèWý1Éa¡ jþ?®´>\x0001?fZ
¬_ÁwB¿e>UÍâk¾ê\x0015VMFu6õ+xP77oÆ¡õ/\x0012`·9}Ï\x0014æÒ\x001eÊi\x000c;/ç\x001bãçÄA¯©2ìÔFó:[ê5Eýúqqaú¸òÁ\x001dáG²Ø	\x0003\x0004?fe³z¥Ç..iK=þ|i\x001d2N 6m\x000fW\x0013àä¶ÓöÑXe×8¨ÕË*ø[5ÙÈ2+Ç\x001eT\x0005¢\x001eômNÑSç èAW\x0000\x001d\x001fÛÂ=e!\x001d^Y\x0002¶tÏ¦+XÉyT\x0015¬ôþ»)`AÃu±\x001b\x000cQV\x0010\çl3á^;=eu,*À³ykÆ2ñ1Æµð¶àÀà4*Sô\x001dä\x001e\x000cSJp'àl<§$vµõ\x0017-+z°ÕÁ½2ÊG«ÉªÊßB´\x0004ÿ</p><p>;AØ\x0013Ùl</p><p>Xë£ZïBlù
ÂÂ}-\x001cZ;ô\x001f|ÐÝ]ãA`qä¦÷¡?T&Æ^é¼3\x001f>"54khÔÁ[ þá}ÏÀu+aBÚÙæ\x0000\x0017$tó°rÁá£·\x001fL\x0012
¿</p><p>pºo	µó¸ZéÝÇóõþ\x001fZ¸\x000f%\x001aOå\x0018#©ö7ùõ$M!È\x000bC¬Á+°®9èa2ÎìÂT®¨MÐ2ÉYc\x0011:Í+bê{\x0012_ë¿\x00045i]¯uô\x000b<Åï0/LÄ7rýrÌ:÷éçSó<DËôMÿ²JPq}v\x0006yÝ\x0014\x0015t2aËEõ[Ýö¸ñuª\x0016Æèd`4RÃÄMÝCtùyZ[â8"
¤ûìqÞ\x0006<\x0015µ²%ñz2æËJïxy3$y\x0014²= ÷ój©É\x0004\x001an\x000c¬Ðz\x0018Q\x0007gåf×(<wè¤1ló¤k$Ò\x0001$ 4î#ùX¨ÆF\x0015k\x001aØV"\x0011\x001dMVª»¼Øû»°à`\x001dé«\x0007ÚÄ\x001aQê\x0002w1a-a<\x0003)ÿªET\x001b§§ÓWo\x0014Ù\x001fm¥b+õ\x0014\x0003áwÛ÷F×æMÔÜ\x0012Ó¼õµù7O¤	\`\x001ba)°ÀX¢\x0016eï¦ÀQ±\x0016yÕ\x000e\x000bTÖaÈH½.ÎËÙô°§\x0002N\x000elÛ@</p><p>ÍÇ¬¾ò\x0000#%.\x0010>\x001arHr\x0010Ì§Óvª	c£r3\x001f*¨Ö\x0004lH¶B\x0004Fs\x000fN.q/ÒÁ\x0005Ü\x0007\x0006\x001e R6¯àg/Û]µ\x0008ó1(0è:æi\x001b\x0018z\x001dp4\x0002\x0008®,Üy9ÆX×Q\x0016¹\x001cÝãV)ØÈS\x001f»¸\x0012½v^¶Ó\x0003\x0004×ÓTñâ#tÎ\x0002X¤Ã°}(Ë\x001c\x0017;\x0016\x000fæ7Iã\x0003\x0004?úp;±\x0003\x0004³r½\x0013\x000fÎ\x0017ÎFw\x0010*Ñ4à1#r~_åúKì\x001c5}y;2õ>XéÁa:sÑ»)%\x0000UFD£e\x0000\x0013¥\´s8\x001eAç®­ùÕ¯>c«Ò\x001dïÚ÷\x0007z\x0012­\x0010G¿ÿ×L¡Å¼Â¾\x0012z6Á\x001e)æì,\x001fÎ$9@ð+ì\x0000\x0016zD\x0014\x0010Tâ!P\x0010\x000e¥\x0010\x001c\x0008¦KAÞ\x0013`M\x0001ërÒÆ'D­\x001csø£d&±É E}ê¥p5É\x001eæ\x0018í\x0008?pL¾$ÐÛú²zýlxñ¢\x0016&øÑ\x0006\x0005Zf¸ZéÃa\x00106\x000eÈÑùÒ©Î"â"jx_ç¯åÉh\x0005üþºTÿ[\x0016è\x0006o¿¬ÐGEa^±g ÉáÎUæ\x0004>[Öã%¢ÏÖ¡ \x001b\x0001C\x000bíøÉ²ò`+èÐ¨ñ²5+(äT:(zP\x001fÌìc[²Ò8«&\x0005ø\x001f=¸IÔ\x000eªÏz&Ï$\x0011\x0012³$OF2|¢\x0010øÄÉH:&T(E@·</p><p>\x0000¢(\x0015Oá°MªRG~\x0010,f:eåÉ6óñ\x0018m2ÖoÌð\x001d`\­f7\x0000s´O\x0003ÖWÄo³i=)¨Á§âx38\x000e\x0012\x0011\x0008u8\x0015Èê1Î\x0017`\x0013æ=wå¬ ÔÔ\x0016²Ãð|.5zzÆY!)zòö1pÀbNåÍ/½}	6(¤¡8\x0019I?AjÃA\x0019Ø:'\x0002\x0004æ¸GÒÊ\x0013ª\x0016ý\x000eó©ùR¨Éåî.)Zç¥cÇ©_@ù8º¡ñB\x0016Lþ\x0000ã±´\x000bãÆE3\x001f\x001eì2 Fßó\x0012¬»¼YõcmÃ&Zrr?Á\x0018§q\x0008·ý#BÎ°BÑ©@>¬ÔLªÙoMåA(</p><p>µ ¦§.]X
LçjM_N\x00059½¿L2í!ïÀ7\x000c~µôÂ\x0017¥ëPcºyxYJð­c\x000c9\x0007ý<V=	¸´FYC\x001c(S(ß#°Ðá»WûÍF«ùÐ=ýÙeÈpõ`ÒÁ×Emâ\x0008³Ècøªß±¨|8(p¨xÂ%fÇa¯3ÓtÌü\x0003nKUx\x0004Eà`[Ã§½Ò¯£¾\x001aÎI\x0004ÂS(îÃ\x0013ø\x0011§é&·þ¹¯5ÇÔ×]»7\x0008êþbë¯:ÜbPèA Oº¥}Ãú{|øÉ-w\x000c\x001eÁØ»6		ó@$©o8Ó¶\x0006\x001d¶o;W×Ò\x0014^\x0008¦mWÓ®i"áþÐ\x0008ÂÚ7¢¤3\x001eÐYHïH]£	£h/\x0016Yð()Ð\x001dÎíÀp`S.éÁ\x001e\â\x0006\x0008RßA¥L¤ó¸Þr\x0003ì£ï@S7ª5¥3Ã¦°×?@E\x001dTBéÃÝAåÁx^6©YÀGÍ|ÙèäCHXg½Ë8ìáe\x000c×ÂÎ!$O\x0001T\x0016òcÑÏ\x0008´`SÊ^\x0019\x000cÃXÛ\x0001Üüû`ú;È²\x001dBÆ¡^È\x0013PNýÅz}\x0003.ÖOïq¬Ö´û6jÀ\x0010ùµ¢F©[Q£ÝC\x001f]\x001aÔë>¿¢&¡zç!]\x000coxF\x001bk_rHÙ\x0012I¬	%QDN¸Át\x000fÜ°Aòä\x0016Iû\x0016Éé7µhp,\x0018Ýpk$¬ßÑ~otÃ­[\£mø\x0018UÎ1\x001dôT³\x000e¿'ÅÙÆ:©dØ§/¿µ)\x0003J¶1\x0019ÍGÖ\x001d\x000cêÎ(7WU	16\x0003¬MÀ°\x0008õØ®\x0018ÿì§ÄÝ!P3\x0016¦f»ìp56Ú}\x001fsOô\x001aÚ4\x0001}ôäiÔy\x001bÓVSÞ¥¬.íê\x000cq×àäPàÂ\x0012óí¯\x0006§b\x000f®+{ÉNîÉÌÔá°|!8°hkdôô°[Ê°qØ	u1ÇÛÁðüº=	Jgû\x0010\x0000îÔa>Ûó£Ú£ÚL£;s$\x0014ÕÏBüæÅ<Ùä\x000fHüxÍ*K%"î\x001c_\x0010©¦\x0018}¯x/\x001bÖ{\x0008;"X/ÛÇ¨sÐx!;9\x0008gB°³²ÐY?\x0018²	q|\x0015\x0016UQ\x0003×_Ê\x001c\x0008VÝ>\x0017; l\x000bu±ASÿ
ÎÊ¦63\x00126)=í§P\x0019êÞY ±º®çe¢=ÄVÆàø·#òR·
O</p><p>²Óó\x0010ÞhêÄSè§p  ÆÝïåPAô\x0014+è4Å#ªyu[í×á±\x0008,uîÀâ¡íAd^\x0010m*6N{ï^YÖ7ôY¯©º¬éóM]öÖÙ§\x001ds êh«Ò(Æ\x0017hÖ@Þ\x000e^
0/¾dÕø·)\x000e;¬½ã@\x001c;4%0ç\x001c\x0008Á\x001178IFÐz>4ï¦Õ¹ ÙµbJ
%Ò l;\x0019³
þÀ\x001fyð¨X¨5~\x0011=Öl\x00020pr'/\x0001\x001dä,CIÍáÇ¨m¢ð8\x0001ß\x001eKeàöö¶ÒU\x0004¹³óå²l\x0014\x0005!\x0007(\x000eÏY8ß+ur¶}n§ÉÛÇµoßrìXÀÛfÆ\x0019Ã%\x000243½ Q\x001aÆ.z>3Jgq7ðGÐÔ!k\x000c¶2ÆhM\x0005~y\x001fpb´`\x001cp|¤I*!\x0005ÂÜNÐÝ~,æÓ\x001cZ_°¬Q¨ÃhÈÃõQØIJÛg\x001b\x0006T&àr\x0010ôQ\x001a.&JI>®û3¼c4É¡\x0019\x001e3eÊo[ÉyßVzO¦·\x001a\x001c\x0012ÜvÚlÎVL×¾èÝ\x0019wViÑÖ\x000fSW ßí\x001eÊïðÑÌÇ\x0004d\x0011qC÷áI8láÚéù¨â¬sªjßþôë\x0018\x000cthúé\x0012óçvz\x001e' àÎ\x0002ëa£\x0003\x0012Ù\x001cÄ³ÏGÁ/ÎÄp\x0000\x000eº¨Ñ|lýJÏZt_¬ñì!ßÊ\x0014×Û³</p><p>Xþ`½µ\x0013ÔÞ¹`ý{\è,~\x001f\x0012 \x000eÓ3¶\x0018­fç\x0000ð!â\x0008E÷ØQ-Üq¬cé¼C2Ç¶üÉ8;=2ÎNð\x0019#Â\x0008áA%èýwRJz\x0002êº.\x001e¤\x000f\x0018~Âs<ÐFØ%:ç®ð°</p><p>Pu\x001d¬È¦\x0017\x0013Cì&¦°\x0017s\x001f¥ß(ÄñÊ#ÿþÄï\x0018\x0000eóc¤i¨ºñ.6\x000e\x001b>ªÑ­í
?æ:\x0008\x0004f\x0002F£j\x0000\x000fNÉt}¥b¼\x0016\x0010Û¢+\x0000x¸:kì\x0008´:ºf§0n±}®ôÙ@5NÐò&hÏ\x000bò1ÁÁ[/ÁÁÍLCÒñ >\x0013¤ê\x0011y\x0014\x0017w·c\x0005</p><p>'Rõ4Ñ§\x0008F\x0011s®°îW¶\x0011\x0006ÅO\x0002½¨{0\x001d\x0011zsò\x001cî~À¢+E\x0014Dù\x0019\x0008]×AÏ_\x0005^\x0007ÁO\x001e\x0008\x0012û\x0005vsÔZô¦\x000f{i\x0003ÜN|lª£­\x0015¤kÛá\x0011<\×­Yi}*/\x0003\x000f^Q(,¯\x0006\x0003]¡\x000e\x0005Ùc>F7°\x0002¸>M-\x001cug\x000c\x000b8i{»Îk­à>à´\x0013\x0019Çc[\x001cW
Ï¢K).×)Äì£~*Úò§ÊâÌµbéörÛ¡zP [.röç³blÈ¼DÔhZüNo}\x0008\x0015á$÷--t5&\x001fÓ\x001bSìì½\x001cg) 6zÛ1\x0002^Î-æ\x0012,\x001b{SÿÏKØê¥\x0010:HGû®£ÊM\x0008"\x0014úÅPD(ï»UDx]\x0004ë\x001a¾:PQ$ÛW\x00053¡PX8Ærèø¥Ög¯¶åÕçíN\dÏ\x0008V»\x0001m\x0008Ã\x0016\x0014sûÿW*Ñº\x0007\x0013.d¦î¤^Ë6±2`ýÃ_!ÐÊ(©ëòêK~½ä©îüî\x001d¬fpB¨©\x0016\x0008H2üTv\ñP®\x0014(\x000f¡o°ÀPOÒJ/en&xP ÞENëf>ÌJ¡ãyíd{W5¶</p><p>;ey)\x0018</p><p>5î\x001d7b*¿7 r(ßÈ¹u°udª\x000b}+Ä^+Ñ¤ezäöæ\x0012NËPù\x001c?9\x0001b]#]ÝÞ\</p><p>s\x001fH>}_{Æ!ñÎÔÓ~:+\x0003¼\x0008 µzÆ\x000er¿\x0006· Tªi{\x0008¥®²\x0018LVã|öY»_\x0002\x001aÁL'©\x0012T¯@<\x0005P4÷nm=<®·u<Äó(\x0001}Ò\x001esÿê(£°NXif­Ë*æ>ÔhK\x001a\x001cûZtÇ°¤\x0003Z´d]Ò{Ø§ðj÷\x0008U:\x0019å\x0007\x001d6æXÝ¸û½äE1ò\x001c¥ÉñèªÐaEµ1^ó&hæK<HeÛ¦]èóU|XÚ¸óx\x0004h\x001fÂâ.ä\x0011Äëµ@Ùò´j£~·Üqæ­j/.}<do\x001b¨{À!ÉS B	\x001e£\x0000\x0015lÒ4>àÁ\x001cò´I=;YÒåÄ\x0017>ä]\x0015Tà\x0017ÏÎÎ­pe\x001fóS\x001fâp\x0004º©è~i© æ hµàÏ\x0017~\x0012iU§Ñ£xµ=\x0003ÊÖ>ÈQ	,W\x0018´T\x0007p\x0000e¾ÔïfÖÔëY3*\x0005nz85\x0003÷ä(N7x ÀJû\x001c÷S²rëó¼¥Ù\x0018Å=\x0014Ì\x000cúü¸Ä\x000e¿´*`Gàõ±¨+A\x0001²åyâv9C9¦Ä3wJøðGKQÈ7:}\x000f¿Á\x0008sèùÃ÷°#ª\x0004#Tª6Æ;nþ8«¬SºÎWÃ¤àu ÞØÁ;4Ûô\x001dë\l^s¨ðØ3w\x0019DºµÇ6ß\x001f]{÷ØEÛ)\x0017E%¤áC	²¶ÎøI%_ØÐå«)C»Ãù<8\x0018dXg<\x0017@ã\x00182Ö\x0015\x0002h\x001c\x0003Ö/\x0016Yð Ù\x0019ÏÐ\x0015Ð\x0010à>é\x0007bN\x0014ëâJ]!õWvö\x000b ¦=ºlð!¤4¸;¼\x000cîF¤î'=8=æË</p><p>ÊM³á\x000bÖIP\x0016;Cû9¯\x0017\x0017x´Vö\x0019Úá#¨r­TëpÂ\x0007l\x000f\x000b1<o«3`,À¦Ì\x0019<#èmùX@à×¼,á¸\x0002HÏh2}Ç?GðçÏ\x001fUãúoãî\x0014jS\x000cëÞ^\x000c'ù]É\x001då0Æ¯Ýã67\x001c_8Ë'ã \x0012Òã</p><p>ÇñîîMÒ
\x001büüZwÉµtj}Ç3:õú5´eIu](·è\x000eÓIxÇ3hÖ¯9¨á\x001f¾«EÂYAnóýÑ\x0015äøð\x001ei¨ðÅO\x000fuáCº\x0001
\x0012®ñIEÆÆâ\x000eïøPÆ:tgWx.i\x0007ÁÁ^\x0012</p><p>HwhöHå\x0019\x0006zÙ£ýø\x0013\x0019ïÞ\x0006\x0013°v¾øåÎH¨æÎXO(Ü\x0007ÖpB·B \x000fo î~{[À1\x0004É\x001eß>¾®GéE&Ùd¬Xd\x001aJ\x00179¡È\x000e·\x0010;|ä\x0005%n\x0018_f¢ÆHa:,Ö\x0017_ãyòÃGC@l\x001fx`ìX4Å¬\x0000ùTã¾;DÌÆ£Iï½#\x001bw¨º\x0014%nî´ÀP\x0011fÂC8Fp[Jõ\x0002±ä`¼Ï\x0013d§j \x0013y»),ÈùÓ(\x00187\x001b\x0002: O×)4Arø>a\x0011\x001eðäè\x000c«\x000bQ¹u,²ÉêU\x0017øhkÉ¤U-DÔ&nnÇÈòÅ4\x001b£Ç<÷QãvÛùæ4\x0017ô\x0000ÁMLÕÔ¯Ì¸]¿j¾X>`.ÞWoØìEút~¶D}aÏé£åk\x000f\x001dCÔ½\x0011uPÇ¤\x0008Ô¦Æ¹Xyõ°ê+\x0010­K}ÄÐh\x0001	T­Ö\x0010Óüué#*.\x001eûÈBg\x00117ØÉju\x0017?Y=âxã#u5¹</p><p>eÇt9ÇÏS\x000f\x0018!Ë"raô6Î±\x0002¬q\x001e£ïñö¡õ\x001f°ÀÔ
</p><p>endstream</p><p>endobj</p><p>217 0 obj</p><p><</Filter/FlateDecode/Length 6023>></p><p>stream</p><p>xÍ]ÝÛ¸¾\x000fwÐ¥û`Z-þKg\x0000$8=@ÎNcöbf.\x0014[ÝñÂ\x001dI\x000e&o;ãye\x0015%ÿv["}6@ìnIÍúT,\x0016«ÅâÝ}ÕLòq\x0013½yswß4ùøK1~¹{·hÅü·»ÇïËâîSþ<-ófº(ï~Z}nàÒÅ¢)ª·o£w?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://www.agencedusport.fr/LES-METIERS-DE-L-AGENCE-290](https://www.agencedusport.fr/LES-METIERS-DE-L-AGENCE-290)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://player.vimeo.com/api/player.js"></script>`
  
  
  
  
* URL: [https://www.agencedusport.fr/-Actualites-](https://www.agencedusport.fr/-Actualites-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://player.vimeo.com/api/player.js"></script>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Plan-heritage-pour-les-Jeux-Olympiques-et-Paralympiques](https://www.agencedusport.fr/Plan-heritage-pour-les-Jeux-Olympiques-et-Paralympiques)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
* URL: [https://www.agencedusport.fr/-Actualites-](https://www.agencedusport.fr/-Actualites-)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275)
  
  
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
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-253](https://www.agencedusport.fr/Presentation-253)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://www.agencedusport.fr](https://www.agencedusport.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://www.agencedusport.fr/Organigramme-254](https://www.agencedusport.fr/Organigramme-254)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://www.agencedusport.fr/Organigramme-254](https://www.agencedusport.fr/Organigramme-254)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-253](https://www.agencedusport.fr/Presentation-253)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://www.agencedusport.fr/Organigramme-254](https://www.agencedusport.fr/Organigramme-254)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="#" method="post" accept-charset="utf-8">`
  
  
  
  
* URL: [https://www.agencedusport.fr](https://www.agencedusport.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-253](https://www.agencedusport.fr/Presentation-253)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="#" method="post" accept-charset="utf-8">`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://www.agencedusport.fr/FAQ](https://www.agencedusport.fr/FAQ)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/Vous-cherchez-a-mediatiser-votre-92](https://www.agencedusport.fr/Vous-cherchez-a-mediatiser-votre-92)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/Vous-etes-une-collectivite-90](https://www.agencedusport.fr/Vous-etes-une-collectivite-90)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/http-www-cnds-sports-gouv-fr-IMG-pdf-note_de_service_equipements_2018-3-pdf](https://www.agencedusport.fr/http-www-cnds-sports-gouv-fr-IMG-pdf-note_de_service_equipements_2018-3-pdf)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/http-www-cnds-sports-gouv-fr-IMG-pdf-ca201802-03_textesadoptes-pdf](https://www.agencedusport.fr/http-www-cnds-sports-gouv-fr-IMG-pdf-ca201802-03_textesadoptes-pdf)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/Les-chiffres-cles-du-CNDS](https://www.agencedusport.fr/Les-chiffres-cles-du-CNDS)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/Vous-avez-un-projet-innovant](https://www.agencedusport.fr/Vous-avez-un-projet-innovant)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/ecrire/](https://www.agencedusport.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/Vous-etes-une-association-89](https://www.agencedusport.fr/Vous-etes-une-association-89)
  
  
  * Method: `GET`
  
  
  
  
Instances: 9
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 38 [https://www.agencedusport.fr/-DEFIDEC-].</p><p>Predicted response size: 338.</p><p>Response Body Length: 405.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://www.agencedusport.fr](https://www.agencedusport.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-cnds.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-cnds.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://www.agencedusport.fr/robots.txt](https://www.agencedusport.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-cnds.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-cnds.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-cnds.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-cnds.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://www.agencedusport.fr/LES-METIERS-DE-L-AGENCE-290](https://www.agencedusport.fr/LES-METIERS-DE-L-AGENCE-290)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://player.vimeo.com/api/player.js`
  
  
  * Evidence: `<script src="https://player.vimeo.com/api/player.js"></script>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Plan-heritage-pour-les-Jeux-Olympiques-et-Paralympiques](https://www.agencedusport.fr/Plan-heritage-pour-les-Jeux-Olympiques-et-Paralympiques)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://platform.twitter.com/widgets.js`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
* URL: [https://www.agencedusport.fr/-Actualites-](https://www.agencedusport.fr/-Actualites-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://player.vimeo.com/api/player.js`
  
  
  * Evidence: `<script src="https://player.vimeo.com/api/player.js"></script>`
  
  
  
  
* URL: [https://www.agencedusport.fr/-Actualites-](https://www.agencedusport.fr/-Actualites-)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://platform.twitter.com/widgets.js`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure JavaScript source files are loaded from only trusted sources, and the sources can't be controlled by end users of the application.</p>
  
### Reference
* 

  
#### CWE Id : 829
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### CSP: Notices
##### Low (Medium)
  
  
  
  
#### Description
<p>Warnings:</p><p>1:1: The upgrade-insecure-requests directive is an experimental directive that will be likely added to the CSP specification.</p><p></p>
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-253](https://www.agencedusport.fr/Presentation-253)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.agencedusport.fr/ecrire/](https://www.agencedusport.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.agencedusport.fr/Organigramme-254](https://www.agencedusport.fr/Organigramme-254)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
* URL: [https://www.agencedusport.fr](https://www.agencedusport.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-requests`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://www.agencedusport.fr/plugins/tarteaucitron/lib/tarteaucitron/tarteaucitron.js](https://www.agencedusport.fr/plugins/tarteaucitron/lib/tarteaucitron/tarteaucitron.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://www.agencedusport.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-57048917.js?1618497582](https://www.agencedusport.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-57048917.js?1618497582)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/ajaxCallback.js?1619682275](https://www.agencedusport.fr/prive/javascript/ajaxCallback.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.agencedusport.fr/Subvention-part-equipement](https://www.agencedusport.fr/Subvention-part-equipement)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.agencedusport.fr/Vos-correspondants-en-region](https://www.agencedusport.fr/Vos-correspondants-en-region)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.agencedusport.fr/Subvention-part-territoriale](https://www.agencedusport.fr/Subvention-part-territoriale)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.agencedusport.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1619682275](https://www.agencedusport.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://www.agencedusport.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1619682275](https://www.agencedusport.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://www.agencedusport.fr/Le-programme-ORfevre-bras-de-levier-des-projets-de-performance](https://www.agencedusport.fr/Le-programme-ORfevre-bras-de-levier-des-projets-de-performance)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/Subventions-equipements-296](https://www.agencedusport.fr/Subventions-equipements-296)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-253](https://www.agencedusport.fr/Presentation-253)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/Subventions-associations-263](https://www.agencedusport.fr/Subventions-associations-263)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr](https://www.agencedusport.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/Budget-2019](https://www.agencedusport.fr/Budget-2019)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/Ambition-Bleue-332](https://www.agencedusport.fr/Ambition-Bleue-332)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/Chiffres-Cles-256](https://www.agencedusport.fr/Chiffres-Cles-256)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/Organigramme-254](https://www.agencedusport.fr/Organigramme-254)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-259](https://www.agencedusport.fr/Presentation-259)
  
  
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
  
  
  
* URL: [https://www.agencedusport.fr/Budget-2019](https://www.agencedusport.fr/Budget-2019)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.agencedusport.fr](https://www.agencedusport.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.agencedusport.fr/Ambition-Bleue-332](https://www.agencedusport.fr/Ambition-Bleue-332)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-259](https://www.agencedusport.fr/Presentation-259)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.agencedusport.fr/sitemap.xml](https://www.agencedusport.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.agencedusport.fr/Chiffres-Cles-256](https://www.agencedusport.fr/Chiffres-Cles-256)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.agencedusport.fr/Organigramme-254](https://www.agencedusport.fr/Organigramme-254)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.agencedusport.fr/robots.txt](https://www.agencedusport.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-253](https://www.agencedusport.fr/Presentation-253)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.agencedusport.fr/Subventions-equipements-296](https://www.agencedusport.fr/Subventions-equipements-296)
  
  
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
  
  
  
* URL: [https://www.agencedusport.fr/squelettes-dist/](https://www.agencedusport.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/local/cache-css/](https://www.agencedusport.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/plugins/](https://www.agencedusport.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/plugins-dist/](https://www.agencedusport.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/](https://www.agencedusport.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/lib/](https://www.agencedusport.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/local/cache-js/](https://www.agencedusport.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/squelettes/](https://www.agencedusport.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/local/](https://www.agencedusport.fr/local/)
  
  
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
  
  
  
* URL: [https://www.agencedusport.fr/Ambition-Bleue-332](https://www.agencedusport.fr/Ambition-Bleue-332)
  
  
  * Method: `GET`
  
  
  * Evidence: `Heritage-et-Societe-Paris-2024`
  
  
  
  
* URL: [https://www.agencedusport.fr/robots.txt](https://www.agencedusport.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `PUL5e2zHMibkgBsqJlLL3fNyljz02cRe3qN9jx5uazBicqTPnEx2g3zbq9dxgwGadlQXu8JeeavfOSeEhjAEelL6eSo=`
  
  
  
  
* URL: [https://www.agencedusport.fr/Chiffres-Cles-256](https://www.agencedusport.fr/Chiffres-Cles-256)
  
  
  * Method: `GET`
  
  
  * Evidence: `Heritage-et-Societe-Paris-2024`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `W6LrzPULhzSCzBQqJlLL3fNyljz02c7r5MH9BC2blDZWXItXvhiqPeWUFZ0bC9dfhD4F5PkZTXkv8LBbAu0+jkzK6uM=`
  
  
  
  
* URL: [https://www.agencedusport.fr/Organigramme-254](https://www.agencedusport.fr/Organigramme-254)
  
  
  * Method: `GET`
  
  
  * Evidence: `Heritage-et-Societe-Paris-2024`
  
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-259](https://www.agencedusport.fr/Presentation-259)
  
  
  * Method: `GET`
  
  
  * Evidence: `Heritage-et-Societe-Paris-2024`
  
  
  
  
* URL: [https://www.agencedusport.fr/sitemap.xml](https://www.agencedusport.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/-Conferences-regionales-du-sport-47-`
  
  
  
  
* URL: [https://www.agencedusport.fr/Budget-2019](https://www.agencedusport.fr/Budget-2019)
  
  
  * Method: `GET`
  
  
  * Evidence: `Heritage-et-Societe-Paris-2024`
  
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-253](https://www.agencedusport.fr/Presentation-253)
  
  
  * Method: `GET`
  
  
  * Evidence: `Heritage-et-Societe-Paris-2024`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Heritage-et-Societe-Paris-2024`
  
  
  
  
* URL: [https://www.agencedusport.fr/Subventions-equipements-296](https://www.agencedusport.fr/Subventions-equipements-296)
  
  
  * Method: `GET`
  
  
  * Evidence: `Heritage-et-Societe-Paris-2024`
  
  
  
  
* URL: [https://www.agencedusport.fr](https://www.agencedusport.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `JstybdiSK0ZYSFsqJlLL3fNyljz02Q/+r9a2R62P7FAhQBqWnuxR/Fn/s1MxDEQ3kWcNOtLrwcqbhIravhzzpf+Ub8I=`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>\x001d�⵨\x001e��~J�"z׾=����</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://www.agencedusport.fr/local/cache-js/](https://www.agencedusport.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/local/](https://www.agencedusport.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/squelettes/](https://www.agencedusport.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/squelettes-dist/](https://www.agencedusport.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/](https://www.agencedusport.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/local/cache-css/](https://www.agencedusport.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/lib/](https://www.agencedusport.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/plugins-dist/](https://www.agencedusport.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/plugins/](https://www.agencedusport.fr/plugins/)
  
  
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
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery-migrate-3.0.1.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery-migrate-3.0.1.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery-migrate-3.0.1.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery-migrate-3.0.1.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275](https://www.agencedusport.fr/prive/javascript/jquery.form.js?1619682275)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
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
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-259](https://www.agencedusport.fr/Presentation-259)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id="select" class="regionbloc1_noselect" >
		<ul>
			<li>Choisir...</li>
			
			<li><a href="Subvention-part-equipement">Subvention part équipement</a></li>			
			<li><a href="Subvention-part-territoriale">Subvention part territoriale</a></li>			
		</ul>
	</div>
</noscript>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Subventions-equipements-296](https://www.agencedusport.fr/Subventions-equipements-296)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id="select" class="regionbloc1_noselect" >
		<ul>
			<li>Choisir...</li>
			
			<li><a href="Subvention-part-equipement">Subvention part équipement</a></li>			
			<li><a href="Subvention-part-territoriale">Subvention part territoriale</a></li>			
		</ul>
	</div>
</noscript>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Organigramme-254](https://www.agencedusport.fr/Organigramme-254)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id="select" class="regionbloc1_noselect" >
		<ul>
			<li>Choisir...</li>
			
			<li><a href="Subvention-part-equipement">Subvention part équipement</a></li>			
			<li><a href="Subvention-part-territoriale">Subvention part territoriale</a></li>			
		</ul>
	</div>
</noscript>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Budget-2019](https://www.agencedusport.fr/Budget-2019)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id="select" class="regionbloc1_noselect" >
		<ul>
			<li>Choisir...</li>
			
			<li><a href="Subvention-part-equipement">Subvention part équipement</a></li>			
			<li><a href="Subvention-part-territoriale">Subvention part territoriale</a></li>			
		</ul>
	</div>
</noscript>`
  
  
  
  
* URL: [https://www.agencedusport.fr](https://www.agencedusport.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
		<div id="bloc_noscript_msg">
			<p class="noscript_p_title">Pour une meilleure expérience de navigation, veuillez activer javascript.</p>
		</div>
	</noscript>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Le-programme-ORfevre-bras-de-levier-des-projets-de-performance](https://www.agencedusport.fr/Le-programme-ORfevre-bras-de-levier-des-projets-de-performance)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id="select" class="regionbloc1_noselect" >
		<ul>
			<li>Choisir...</li>
			
			<li><a href="Subvention-part-equipement">Subvention part équipement</a></li>			
			<li><a href="Subvention-part-territoriale">Subvention part territoriale</a></li>			
		</ul>
	</div>
</noscript>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Chiffres-Cles-256](https://www.agencedusport.fr/Chiffres-Cles-256)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id="select" class="regionbloc1_noselect" >
		<ul>
			<li>Choisir...</li>
			
			<li><a href="Subvention-part-equipement">Subvention part équipement</a></li>			
			<li><a href="Subvention-part-territoriale">Subvention part territoriale</a></li>			
		</ul>
	</div>
</noscript>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Ambition-Bleue-332](https://www.agencedusport.fr/Ambition-Bleue-332)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id="select" class="regionbloc1_noselect" >
		<ul>
			<li>Choisir...</li>
			
			<li><a href="Subvention-part-equipement">Subvention part équipement</a></li>			
			<li><a href="Subvention-part-territoriale">Subvention part territoriale</a></li>			
		</ul>
	</div>
</noscript>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Subventions-associations-263](https://www.agencedusport.fr/Subventions-associations-263)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id="select" class="regionbloc1_noselect" >
		<ul>
			<li>Choisir...</li>
			
			<li><a href="Subvention-part-equipement">Subvention part équipement</a></li>			
			<li><a href="Subvention-part-territoriale">Subvention part territoriale</a></li>			
		</ul>
	</div>
</noscript>`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
		<div id="bloc_noscript_msg">
			<p class="noscript_p_title">Pour une meilleure expérience de navigation, veuillez activer javascript.</p>
		</div>
	</noscript>`
  
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-253](https://www.agencedusport.fr/Presentation-253)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id="select" class="regionbloc1_noselect" >
		<ul>
			<li>Choisir...</li>
			
			<li><a href="Subvention-part-equipement">Subvention part équipement</a></li>			
			<li><a href="Subvention-part-territoriale">Subvention part territoriale</a></li>			
		</ul>
	</div>
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
  
  
  
* URL: [https://www.agencedusport.fr/ecrire/](https://www.agencedusport.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://www.agencedusport.fr/local/cache-js/](https://www.agencedusport.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://www.agencedusport.fr/local/cache-css/](https://www.agencedusport.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://www.agencedusport.fr/local/](https://www.agencedusport.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://www.agencedusport.fr/plugins-dist/](https://www.agencedusport.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://www.agencedusport.fr/plugins/](https://www.agencedusport.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://www.agencedusport.fr/lib/](https://www.agencedusport.fr/lib/)
  
  
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

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/sitemap.xml](https://www.agencedusport.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr](https://www.agencedusport.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.agencedusport.fr/robots.txt](https://www.agencedusport.fr/robots.txt)
  
  
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
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1622134897`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `57048917`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1548932308`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1619528325`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1573555897`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1619682275`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1608024725`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1573546756`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1622641048`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1623075397`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1618497582`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1620816695`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `70995536`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1575654883`
  
  
  
  
* URL: [https://www.agencedusport.fr/](https://www.agencedusport.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1621599791`
  
  
  
  
Instances: 15
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1622134897, which evaluates to: 2021-05-27 17:01:37</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-253](https://www.agencedusport.fr/Presentation-253)
  
  
  * Method: `POST`
  
  
  * Parameter: `select_region`
  
  
  
  
* URL: [https://www.agencedusport.fr/spip.php?page=recherche&recherche](https://www.agencedusport.fr/spip.php?page=recherche&recherche)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://www.agencedusport.fr/spip.php?page=recherche&recherche](https://www.agencedusport.fr/spip.php?page=recherche&recherche)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://www.agencedusport.fr/spip.php?page=recherche&recherche](https://www.agencedusport.fr/spip.php?page=recherche&recherche)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://www.agencedusport.fr/Presentation-253](https://www.agencedusport.fr/Presentation-253)
  
  
  * Method: `POST`
  
  
  * Parameter: `select_region`
  
  
  
  
* URL: [https://www.agencedusport.fr/spip.php?page=login&url=%2Fecrire%2F](https://www.agencedusport.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://www.agencedusport.fr/spip.php?page=recherche&recherche](https://www.agencedusport.fr/spip.php?page=recherche&recherche)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://www.agencedusport.fr/spip.php?page=login&url=%2Fecrire%2F](https://www.agencedusport.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
Instances: 8
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://www.agencedusport.fr/Presentation-253</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [a] tag [href] attribute </p><p></p><p>The user input found was:</p><p>select_region=Subvention-part-equipement</p><p></p><p>The user-controlled value was:</p><p>subvention-part-equipement</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
