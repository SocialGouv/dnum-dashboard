
# ZAP Scanning Report

Generated on Mon, 5 Apr 2021 03:25:51


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 5 |
| Low | 9 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 7 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 3 | 
| Source Code Disclosure - Perl | Medium | 1 | 
| Source Code Disclosure - PHP | Medium | 1 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 10 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 3 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Dangerous JS Functions | Low | 6 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 12 | 
| Insufficient Site Isolation Against Spectre Vulnerability | Low | 9 | 
| Secure Pages Include Mixed Content | Low | 2 | 
| Strict-Transport-Security Header Not Set | Low | 12 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 9 | 
| Storable and Cacheable Content | Informational | 2 | 
| Timestamp Disclosure - Unix | Informational | 2 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 16 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://onpes.gouv.fr/IMG/pdf/Communique_de_presse_ONPES_3_.pdf](https://onpes.gouv.fr/IMG/pdf/Communique_de_presse_ONPES_3_.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `503503503503`
  
  
  
  
* URL: [https://onpes.gouv.fr/mesure-de-la-pauvrete.html](https://onpes.gouv.fr/mesure-de-la-pauvrete.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `5663136319001`
  
  
  
  
* URL: [https://onpes.gouv.fr/IMG/pdf/Lettre_no_1_2014.pdf](https://onpes.gouv.fr/IMG/pdf/Lettre_no_1_2014.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `500944722778556`
  
  
  
  
* URL: [https://onpes.gouv.fr/pauvrete-pourquoi-ne-baisse-t-elle.html](https://onpes.gouv.fr/pauvrete-pourquoi-ne-baisse-t-elle.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `5663136319001`
  
  
  
  
* URL: [https://onpes.gouv.fr/IMG/pdf/Lettre_ONPES_2_mars2016.pdf](https://onpes.gouv.fr/IMG/pdf/Lettre_ONPES_2_mars2016.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `574574574574`
  
  
  
  
* URL: [https://onpes.gouv.fr/pauvrete-conditions-de-vie-mesure.html](https://onpes.gouv.fr/pauvrete-conditions-de-vie-mesure.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `5663136319001`
  
  
  
  
* URL: [https://onpes.gouv.fr/IMG/pdf/Lettre_ONPES_4_Dec2015_v3.pdf](https://onpes.gouv.fr/IMG/pdf/Lettre_ONPES_4_Dec2015_v3.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `500519519556`
  
  
  
  
Instances: 7
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 503503</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://onpes.gouv.fr/colloques-53.html](https://onpes.gouv.fr/colloques-53.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/nouveautes.html](https://onpes.gouv.fr/nouveautes.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/les-missions-de-l-onpes.html](https://onpes.gouv.fr/les-missions-de-l-onpes.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass](https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr](https://onpes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/lib/](https://onpes.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/qu-est-ce-que-l-onpes.html](https://onpes.gouv.fr/qu-est-ce-que-l-onpes.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=spip_pass_ep](https://onpes.gouv.fr/spip.php?page=spip_pass_ep)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/l-onpes.html](https://onpes.gouv.fr/l-onpes.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/actualites.html](https://onpes.gouv.fr/actualites.html)
  
  
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
  
  
  
* URL: [https://onpes.gouv.fr/sous-pression-la-classe-moyenne-en.html](https://onpes.gouv.fr/sous-pression-la-classe-moyenne-en.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.oecd.org/fr/social/under-pressure-the-squeezed-middle-class-689afed1-en.htm" target="_blank"><em>Sous pression&nbsp;: la classe moyenne en perte de vitesse</em></a>`
  
  
  
  
* URL: [https://onpes.gouv.fr/une-personne-sur-dix-connait-des.html](https://onpes.gouv.fr/une-personne-sur-dix-connait-des.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="renvoi lien-externe" title="Ouvrir dans un nouvel onglet" href="https://www.gate.cnrs.fr/spip.php?article84" target="_blank" data-i18n="[title]produit.contenu.lien-externe-title">Logement social et accession &agrave; la propri&eacute;t&eacute;</a>`
  
  
  
  
* URL: [https://onpes.gouv.fr/s-attaquer-aux-dimensions-cachees.html](https://onpes.gouv.fr/s-attaquer-aux-dimensions-cachees.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.atd-quartmonde.org/nos-actions/penser-agir-ensemble/croisement-des-savoirs/" target="_blank">Croisement des Savoirs</a>`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://onpes.gouv.fr/IMG/pdf/Rapport_ONPES_2013_2014_BD-2.pdf](https://onpes.gouv.fr/IMG/pdf/Rapport_ONPES_2013_2014_BD-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#nH1J`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#nH1J</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://onpes.gouv.fr/IMG/pdf/Communique_de_presse_ONPES_3_.pdf](https://onpes.gouv.fr/IMG/pdf/Communique_de_presse_ONPES_3_.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=\"3ÎÞó/fÈ+ß\x000eN)áUõõ÷é)¡9=\x0015\x00177dÉ\x001b2ä6\x0019ò(+Jæ¹é¹~þ\x0013ü\x001c¿À/qc4)}\x0013nÆ<¿Ã{wâ.¯çãn×ùµ×÷y¼?LK?°0\þm¸B7»:ý×â÷X\x0012ÎUgèpWÀ¹"p®ùà:]îêô\x001fÃOÒËñÏ=å½g|nç+ÑàýU^¯öþ\x001a×môÞ+ø÷°\x0016Í®ÕuXïóm>ÅF?ËAõ\x0016Ýseí\x0019éÍaÌ=C\x0017½Zö){ÏHw{O\x000c¦Å`úuÃt\x001fúÃsiq\x0016é\x0018b0½\x001d\x0018R\x0001Qô¼\x0014V¦wbçoAÌ¥ÅªpM¸«\x0013wuÉ°²®ÒcU¡JÌP%fÔMðz¢ê\x0018¬Kçêê°ç{c\x001fïïý°¿÷\x000f\x0008Y>«Ógë\x000er½}æ\x0010¼\x0003â0¼Óg\x000f÷ówã\x0008÷?Ò{*¬jtMÝÕ¡YÏ­»>TÇë:^×ñºî\x0006ÜüìWá
?W¥:C¥:C¥:C\x0015«ZQ÷k×Y`Ý÷»æC®¿Ðëßb\x0011~\x0017.P%.Q%þ0Þ_\x0018ïç/©\x0004½2~ÌþÌ^.kÉÚõÜQ\x0019û¬í-²±Q\x0016®ëeÝgeÖ¹2i¹IÆ¼$czeÉ\x001d²d½,h\x0010ý¿\x0015ý_\x0014ýÏþò©p²5ú\x000fõêa+ù½µ.±LZ®&<é½§ð>÷¢­
\x001bTÏ
:×sjÖÎµ\\x000f\x001c°Ú~Ýk¹îµ\ýZhå/©SýV¾V-ZeÕYõfz³ÅÊ{ÕëoW³3jvF=YeõKÔ%jÁ\x0012«|Ã*¿Ryt¯uéWiÏ\x000fËu°å:Ø:\x001dl¹Ü\x001c\x0003:Ø:ùù°ü\x001c\x000fËÏåçÃ:Øºôµ¾÷3Ü\x001bÃ\x0006U}ª¾An\x000eèfët³u*ü\x0006\x0015~Ü|X7[.7\x001fKKÄý\x0012q¾DL÷ë'\x0019ý$#nûõXí\x0017§«ÄåBq¹P\.\x0014ýbmXÛ"Ö¶­~±Õ/®¶«-âj^\x0011S«t¸åbêa\x001dnÎ±A|,\x0014\x001fýâc	r¥8hÀó&´ÕáIJoÕ\x001dZÄÂ§Uó\x000eÕ¼C<¼BÕ.ª6SµYLüIåÞLÙ5*u\x0007e×PvØØ&6^W×«ÆëUãõbä\x001fÄÈ*Sesbe£8éQYTÖ&µIÌ´ª¦\x001bUÑ¬Ê¹^ElQ\x0011[¨¾ê[©½U\x0005lQ\x0001[TÀ\x0016\x0015°E\x0005l¡ìVU¯EÕkQéZT´¬*SÅrªXV\x0015kRÅT°¬
¶Q\x0005Û¨ZmT­rªSNuÊ©N9Õ©IujRT§ªRNUÊí©JMªQN5ÊªFë¹³FeéPY:¸´CkTÍªËf\x0015d³jÑ¡Zt¨\x000c\x001d*CÊÐÁ©fN5sªYUØ¬\x0002tpªSÍ2¿Skd~oñ-2¾EÆ·Èø\x0016\x0019ß$Ûd{N¶çd{N¶7Éölïàb³,ïå\x001d²¼Cw8\x0013÷ËsõáÍè$YV>gýPFÍQóeÔ\x000b|¾FÖìäë"¾Öóµ^¶äùÚÍ×¥<]ÊÓ¥2¢$\x000bJ¼¸\x0017×È\x0012?®\x0011ñ%Q>_Ï\x0017åóyq(/ò(/ÊçæôZJ§¥¢y'­ÒªVÝ¢z'½ºEòNúÔÓ§>õôé\x0016Í;EóN\x001aÕÓ¨>KEoIôÎ\x0017¹;í¹Þ\x001e_\x000c7Ø1;XéÕ\x000ek\x001f
ÍÍÑ;ìlW=vÖogýv6hWMê@ÞÎì¬ÉêvX]Õ5YÝ\x000e«k²ª\x001dV´Ãú­¨ßú­fÕì°~«é·&«(eû£ÃÝiÔ6ºS;õ¸S\x001f
ËgÔfw\x001bq·fwkv·Qwkv·fw\x001bu·fZ\x000cÓbØ]Gi1ìÎ£îÜãÎ=îÜCaw\x001fu÷Qwïq÷\x001ewov÷òù°Ç\x0019a³z¹#¼j×¯ºó;v¨eO©¸m*nù|ð§ñ[íS#{ÎPù=ÿ
ÓñÉs¢\x000f+×å'\x001d~Ò5þª|¶{c\Çª=ß\x001aö*vý
®?d\x001aÎic
ï²Ï\x0014%"TI«Q#¼>\x0016\x000bÂ kl\x001ew¦Å§Ûuò\x001aG¢c]ã%?y~Ã®õ´O¼þ×óýx¿Ô\x001aL@*<mW_¶ïÑqé¸åóõfú
[ÃÓÖð5¼d
/ÑòïÏÝâ°·¿ðù£åâ±\x001e\x0017øüýÞ+¹+ì¹\x0010\x001dd}CÖ4dMÛ¬iÛßàl·ú~ëÚn]Û­c»ul·íî=äÞCî=ä¾ÛÜwûns¿mî·Í½¶»Ï{lvõgìþÏv¾æmU6Cç%îT\x001c¯ª©ñ)ò³=^n´û)åÑó×êcÇkÜõ\x0019w}Æ]ùVr¥9ÂçÊUæXå±ÀgÿkÅ8ÞEw\x0003v:[Wóõëáâ=ÿºãUwþæø¿\x0018ý°uoöÉ?q­É¹`õ?K¥eo« åÎ¥Ô\x0002^ûîëÔZ@­\x0005öó¬«ÞàjK¹ØdvÛ@Á\x0005\x0014\ÀÉ&*.\x0011Y\x0019åhý=++²ö¸Ù\x001e7Ûãf®6Á6Á6·6üÊår\x0013þV9p£Ã\x0002{Ö¾7s¹i¼z\x001cJõvª·ÿ6bT\x0015Ù\x0019^´ê\x0001Ê·[ñ\x00153@ívj·[å\x0015\x000eP¹ÊíTn§r;Û©ÜNávw\x001a p;uÛ©ÛNÝvê¶ËªQUwî'zDØhx6Jè»LJ;£¤idµWC^õFGxUp)O
æN9¦Séc{~G7³\x000cãK:^^§Ëëtc:Ýy½¤ÛåÍè%sEÁL^ÒÝÆt·1ÝmÌÜ]2wt¶1mÌÜQÐÙòfN3¦Óé.cÑD½|§Ü«w\x0017ôìò\÷º»\x00168ø\x0010\x0007\x001f\x001a¯*\x0013uûä\x0001*É\x0007Bl\x0007ý>\x0015'OöVay¢\x0013Ü'\x001bUºÎV×)ÿÎµTÞ\x001d§Ç/\x0012\x0007È§BÉûåßÊúïm\x000eôª¼û\x0011»\x001f±ûñË¬pnh}ÛÎGì|d|×Í\x001e[°\x000eíèÝÙÙØÙHônw[KßQú¶Ñ·íí's÷Ý¥¶£îÐã\x000e=;?>`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=\"3ÎÞó/fÈ+ß\x000eN)áUõõ÷é)¡9=\x0015\x00177dÉ\x001b2ä6\x0019ò(+Jæ¹é¹~þ\x0013ü\x001c¿À/qc4)}\x0013nÆ<¿Ã{wâ.¯çãn×ùµ×÷y¼?LK?°0\þm¸B7»:ý×â÷X\x0012ÎUgèpWÀ¹"p®ùà:]îêô\x001fÃOÒËñÏ=å½g|nç+ÑàýU^¯öþ\x001a×môÞ+ø÷°\x0016Í®ÕuXïóm>ÅF?ËAõ\x0016Ýseí\x0019éÍaÌ=C\x0017½Zö){ÏHw{O\x000c¦Å`úuÃt\x001fúÃsiq\x0016é\x0018b0½\x001d\x0018R\x0001Qô¼\x0014V¦wbçoAÌ¥ÅªpM¸«\x0013wuÉ°²®ÒcU¡JÌP%fÔMðz¢ê\x0018¬Kçêê°ç{c\x001fïïý°¿÷\x000f\x0008Y>«Ógë\x000er½}æ\x0010¼\x0003â0¼Óg\x000f÷ówã\x0008÷?Ò{*¬jtMÝÕ¡YÏ­»>TÇë:^×ñºî\x0006ÜüìWá</p><p>?W¥:C¥:C¥:C\x0015«ZQ÷k×Y`Ý÷»æC®¿Ðëßb\x0011~\x0017.P%.Q%þ0Þ_\x0018ïç/©\x0004½2~ÌþÌ^.kÉÚõÜQ\x0019û¬í-²±Q\x0016®ëeÝgeÖ¹2i¹IÆ¼$czeÉ\x001d²d½,h\x0010ý¿\x0015ý_\x0014ýÏþò©p²5ú\x000fõêa+ù½µ.±LZ®&<é½§ð>÷¢­</p><p>\x001bTÏ
:×sjÖÎµ\\x000f\x001c°Ú~Ýk¹îµ\ýZhå/©SýV¾V-ZeÕYõfz³ÅÊ{ÕëoW³3jvF=YeõKÔ%jÁ\x0012«|Ã*¿Ryt¯uéWiÏ\x000fËu°å:Ø:\x001dl¹Ü\x001c\x0003:Ø:ùù°ü\x001c\x000fËÏåçÃ:Øºôµ¾÷3Ü\x001bÃ\x0006U}ª¾An\x000eèfët³u*ü\x0006\x0015~Ü|X7[.7\x001fKKÄý\x0012q¾DL÷ë'\x0019ý$#nûõXí\x0017§«ÄåBq¹P\.\x0014ýbmXÛ"Ö¶­~±Õ/®¶«-âj^\x0011S«t¸åbêa\x001dnÎ±A|,\x0014\x001fýâc	r¥8hÀó&´ÕáIJoÕ\x001dZÄÂ§Uó\x000eÕ¼C<¼BÕ.ª6SµYLüIåÞLÙ5*u\x0007e×PvØØ&6^W×«ÆëUãõbä\x001fÄÈ*Sesbe£8éQYTÖ&µIÌ´ª¦\x001bUÑ¬Ê¹^ElQ\x0011[¨¾ê[©½U\x0005lQ\x0001[TÀ\x0016\x0015°E\x0005l¡ìVU¯EÕkQéZT´¬*SÅrªXV\x0015kRÅT°¬</p><p>¶Q\x0005Û¨ZmT­rªSNuÊ©N9Õ©IujRT§ªRNUÊí©JMªQN5ÊªFë¹³FeéPY:¸´CkTÍªËf\x0015d³jÑ¡Zt¨\x000c\x001d*CÊÐÁ©fN5sªYUØ¬\x0002tpªSÍ2¿Skd~oñ-2¾EÆ·Èø\x0016\x0019ß$Ûd{N¶çd{N¶7Éölïàb³,ïå\x001d²¼Cw8\x0013÷ËsõáÍè$YV>gýPFÍQóeÔ\x000b|¾FÖìäë"¾Öóµ^¶äùÚÍ×¥<]ÊÓ¥2¢$\x000bJ¼¸\x0017×È\x0012?®\x0011ñ%Q>_Ï\x0017åóyq(/ò(/ÊçæôZJ§¥¢y'­ÒªVÝ¢z'½ºEòNúÔÓ§>õôé\x0016Í;EóN\x001aÕÓ¨>KEoIôÎ\x0017¹;í¹Þ\x001e_\x000c7Ø1;XéÕ\x000ek\x001f
ÍÍÑ;ìlW=vÖogýv6hWMê@ÞÎì¬ÉêvX]Õ5YÝ\x000e«k²ª\x001dV´Ãú­¨ßú­fÕì°~«é·&«(eû£ÃÝiÔ6ºS;õ¸S\x001f
ËgÔfw\x001bq·fwkv·Qwkv·fw\x001bu·fZ\x000cÓbØ]Gi1ìÎ£îÜãÎ=îÜCaw\x001fu÷Qwïq÷\x001ewov÷òù°Ç\x0019a³z¹#¼j×¯ºó;v¨eO©¸m*nù|ð§ñ[íS#{ÎPù=ÿ
ÓñÉs¢\x000f+×å'\x001d~Ò5þª|¶{c\Çª=ß\x001aö*vý
®?d\x001aÎic</p><p>ï²Ï\x0014%"TI«Q#¼>\x0016\x000bÂ kl\x001ew¦Å§Ûuò\x001aG¢c]ã%?y~Ã®õ´O¼þ×óýx¿Ô\x001aL@*<mW_¶ïÑqé¸åóõfú
[ÃÓÖð5¼d
/ÑòïÏÝâ°·¿ðù£åâ±\x001e\x0017øüýÞ+¹+ì¹\x0010\x001dd}CÖ4dMÛ¬iÛßàl·ú~ëÚn]Û­c»ul·íî=äÞCî=ä¾ÛÜwûns¿mî·Í½¶»Ï{lvõgìþÏv¾æmU6Cç%îT\x001c¯ª©ñ)ò³=^n´û)åÑó×êcÇkÜõ\x0019w}Æ]ùVr¥9ÂçÊUæXå±ÀgÿkÅ8ÞEw\x0003v:[Wóõëáâ=ÿºãUwþæø¿\x0018ý°uoöÉ?q­É¹`õ?K¥eo« åÎ¥Ô\x0002^ûîëÔZ@­\x0005öó¬«ÞàjK¹ØdvÛ@Á\x0005\x0014\ÀÉ&*.\x0011Y\x0019åhý=++²ö¸Ù\x001e7Ûãf®6Á6Á6·6üÊår\x0013þV9p£Ã\x0002{Ö¾7s¹i¼z\x001cJõvª·ÿ6bT\x0015Ù\x0019^´ê\x0001Ê·[ñ\x00153@ívj·[å\x0015\x000eP¹ÊíTn§r;Û©ÜNávw\x001a p;uÛ©ÛNÝvê¶ËªQUwî'zDØhx6Jè»LJ;£¤idµWC^õFGxUp)O</p><p>æN9¦Séc{~G7³\x000cãK:^^§Ëëtc:Ýy½¤ÛåÍè%sEÁL^ÒÝÆt·1ÝmÌÜ]2wt¶1mÌÜQÐÙòfN3¦Óé.cÑD½|§Ü«w\x0017ôìò\÷º»\x00168ø\x0010\x0007\x001f\x001a¯*\x0013uûä\x0001*É\x0007Bl\x0007ý>\x0015'OöVay¢\x0013Ü'\x001bUºÎV×)ÿÎµTÞ\x001d§Ç/\x0012\x0007È§BÉûåßÊúïm\x000eôª¼û\x0011»\x001f±ûñË¬pnh}ÛÎGì|d|×Í\x001e[°\x000eíèÝÙÙØÙHônw[KßQú¶Ñ·íí's÷Ý¥¶£îÐã\x000e=;?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 3.2.1 is vulnerable.</p>
  
  
  
* URL: [https://onpes.gouv.fr/prive/javascript/jquery.js?1616409304](https://onpes.gouv.fr/prive/javascript/jquery.js?1616409304)
  
  
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
  
  
  
* URL: [https://onpes.gouv.fr/lib/](https://onpes.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://onpes.gouv.fr/lib/](https://onpes.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/lib/#'>`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=spip_pass_ep](https://onpes.gouv.fr/spip.php?page=spip_pass_ep)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/spip.php?page=spip_pass_ep'>`
  
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/#'>`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=spip_pass_ep](https://onpes.gouv.fr/spip.php?page=spip_pass_ep)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="oubli_form" action="/spip.php?page=spip_pass_ep" method="post">`
  
  
  
  
* URL: [https://onpes.gouv.fr](https://onpes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id='formulaire_login' method='post' action='/#'>`
  
  
  
  
* URL: [https://onpes.gouv.fr](https://onpes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass](https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="oubli_form" action="/spip.php?lang=fr&amp;page=spip_pass" method="post">`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=spip_pass_ep](https://onpes.gouv.fr/spip.php?page=spip_pass_ep)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="searchform" action="spip.php?page=recherche" method="get">`
  
  
  
  
Instances: 10
  
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
  
  
  
* URL: [https://onpes.gouv.fr/twitter.html](https://onpes.gouv.fr/twitter.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/plan-du-site.html](https://onpes.gouv.fr/plan-du-site.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/ecrire/](https://onpes.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 27 [http://twitter.com/#!/ONPES].</p><p>Predicted response size: 327.</p><p>Response Body Length: 394.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-onpes-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-onpes-preprod.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://onpes.gouv.fr/robots.txt](https://onpes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-onpes-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-onpes-preprod.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://onpes.gouv.fr](https://onpes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-onpes-preprod.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-onpes-preprod.cegedim.cloud-HTTP`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://onpes.gouv.fr/prive/javascript/jquery.form.js?1616409304](https://onpes.gouv.fr/prive/javascript/jquery.form.js?1616409304)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://onpes.gouv.fr/plugins/tarteaucitron/lib/tarteaucitron/tarteaucitron.js](https://onpes.gouv.fr/plugins/tarteaucitron/lib/tarteaucitron/tarteaucitron.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://onpes.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1616409304](https://onpes.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1616409304)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://onpes.gouv.fr/prive/javascript/ajaxCallback.js?1616409304](https://onpes.gouv.fr/prive/javascript/ajaxCallback.js?1616409304)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://onpes.gouv.fr/squelettes/script/dimensions.js](https://onpes.gouv.fr/squelettes/script/dimensions.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://onpes.gouv.fr/prive/javascript/jquery.js?1616409304](https://onpes.gouv.fr/prive/javascript/jquery.js?1616409304)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://onpes.gouv.fr/nouveautes.html](https://onpes.gouv.fr/nouveautes.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass](https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/l-onpes.html](https://onpes.gouv.fr/l-onpes.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr](https://onpes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/les-missions-de-l-onpes.html](https://onpes.gouv.fr/les-missions-de-l-onpes.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/qu-est-ce-que-l-onpes.html](https://onpes.gouv.fr/qu-est-ce-que-l-onpes.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=spip_pass_ep](https://onpes.gouv.fr/spip.php?page=spip_pass_ep)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/colloques-53.html](https://onpes.gouv.fr/colloques-53.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/lib/](https://onpes.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/actualites.html](https://onpes.gouv.fr/actualites.html)
  
  
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
  
  
  
* URL: [https://onpes.gouv.fr/plugins/tarteaucitron_plus/lib/css/tarteaucitronplus.css](https://onpes.gouv.fr/plugins/tarteaucitron_plus/lib/css/tarteaucitronplus.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass](https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onpes.gouv.fr/robots.txt](https://onpes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onpes.gouv.fr/squelettes/css/style.css](https://onpes.gouv.fr/squelettes/css/style.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onpes.gouv.fr/prive/spip_style.css](https://onpes.gouv.fr/prive/spip_style.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onpes.gouv.fr/sitemap.xml](https://onpes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onpes.gouv.fr/plugins/videos/theme/css/videos.css](https://onpes.gouv.fr/plugins/videos/theme/css/videos.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onpes.gouv.fr/prive/themes/spip/reset.css](https://onpes.gouv.fr/prive/themes/spip/reset.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onpes.gouv.fr/plugins/oembed/css/oembed.css?1616409304](https://onpes.gouv.fr/plugins/oembed/css/oembed.css?1616409304)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=backend](https://onpes.gouv.fr/spip.php?page=backend)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onpes.gouv.fr/plugins-dist/mediabox/colorbox/black-striped/colorbox.css](https://onpes.gouv.fr/plugins-dist/mediabox/colorbox/black-striped/colorbox.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://onpes.gouv.fr/squelettes/css/style-login.css](https://onpes.gouv.fr/squelettes/css/style-login.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 12
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Insufficient Site Isolation Against Spectre Vulnerability
##### Low (Medium)
  
  
  
  
#### Description
<p>Cross-Origin-Opener-Policy header is a response header that allows a site to control if others included documents share the same browsing context. Sharing the same browsing context with untrusted documents might lead to data leak.</p>
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fspip.php%3Fpage%3Dspip_pass_ep](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fspip.php%3Fpage%3Dspip_pass_ep)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Opener-Policy`
  
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2F](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Opener-Policy`
  
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fspip.php%3Flang%3Dfr%26amp%3Bpage%3Dspip_pass](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fspip.php%3Flang%3Dfr%26amp%3Bpage%3Dspip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Opener-Policy`
  
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fspip.php%3Fpage%3Dspip_pass_ep](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fspip.php%3Fpage%3Dspip_pass_ep)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Embedder-Policy`
  
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fspip.php%3Fpage%3Dspip_pass_ep](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fspip.php%3Fpage%3Dspip_pass_ep)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Resource-Policy`
  
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fspip.php%3Flang%3Dfr%26amp%3Bpage%3Dspip_pass](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fspip.php%3Flang%3Dfr%26amp%3Bpage%3Dspip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Resource-Policy`
  
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fspip.php%3Flang%3Dfr%26amp%3Bpage%3Dspip_pass](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fspip.php%3Flang%3Dfr%26amp%3Bpage%3Dspip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Embedder-Policy`
  
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2F](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Embedder-Policy`
  
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2F](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cross-Origin-Resource-Policy`
  
  
  
  
Instances: 9
  
### Solution
<p>Ensure that the application/web server sets the Cross-Origin-Opener-Policy header appropriately, and that it sets the Cross-Origin-Opener-Policy header to 'same-origin' for documents.</p><p>'same-origin-allow-popups' is considered as less secured and should be avoided.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that supports the Cross-Origin-Opener-Policy header (https://caniuse.com/mdn-http_headers_cross-origin-opener-policy).</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy

  
#### CWE Id : 16
  
#### WASC Id : 14
  
#### Source ID : 3

  
  
  
  
### Secure Pages Include Mixed Content
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes mixed content, that is content accessed via HTTP instead of HTTPS.</p>
  
  
  
* URL: [https://onpes.gouv.fr/dimension-territoriale.html](https://onpes.gouv.fr/dimension-territoriale.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.observatoire-des-territoires.gouv.fr/observatoire-des-territoires/sites/default/files/images/Couverture_rapport_2018.jpg`
  
  
  
  
* URL: [https://onpes.gouv.fr/themes.html](https://onpes.gouv.fr/themes.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.observatoire-des-territoires.gouv.fr/observatoire-des-territoires/sites/default/files/images/Couverture_rapport_2018.jpg`
  
  
  
  
Instances: 2
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=img src=http://www.observatoire-des-territoires.gouv.fr/observatoire-des-territoires/sites/default/files/images/Couverture_rapport_2018.jpg</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://onpes.gouv.fr/local/](https://onpes.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/local/cache-js/](https://onpes.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Flib%2F](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Flib%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/local/cache-css/](https://onpes.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/plugins/](https://onpes.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/%22)%0A%09%09%09%09%09%09document.write((window.opener)%20?%20%22javascript:close()%22%20:%20%22./%22)%0A%09%09%09%09%09%09document.write(%22](https://onpes.gouv.fr/%22)%0A%09%09%09%09%09%09document.write((window.opener)%20?%20%22javascript:close()%22%20:%20%22./%22)%0A%09%09%09%09%09%09document.write(%22)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/prive/](https://onpes.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fnouveautes.html](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fnouveautes.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Factualites.html](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Factualites.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/squelettes-dist/](https://onpes.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/squelettes/](https://onpes.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/plugins-dist/](https://onpes.gouv.fr/plugins-dist/)
  
  
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

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `AvTKoGu6jlqAVgoqJlLL3fNyljz02SFKHmPSZhskmoAoXTnLwC0M/j6YLraXQhH5Nv8J+b0QNdsTo2W9wETp5FV8QVo=`
  
  
  
  
* URL: [https://onpes.gouv.fr/actualites.html](https://onpes.gouv.fr/actualites.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://onpes.gouv.fr/qu-est-ce-que-l-onpes.html](https://onpes.gouv.fr/qu-est-ce-que-l-onpes.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://onpes.gouv.fr](https://onpes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `TH9x4j7ggH9Q+6cqJlLL3fNyljz02QS926RYiOUfzSOq/F68BW0tMplPqmprQmNCORvWTdyTIlR6vej/aPhtGHfNLak=`
  
  
  
  
* URL: [https://onpes.gouv.fr/lib/](https://onpes.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://onpes.gouv.fr/nouveautes.html](https://onpes.gouv.fr/nouveautes.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass](https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Evidence: `y0PnyUCzM+1A4qyD6ftPQNnROcU7a/ZjeyfmcX30FQ28/RSXPSJtkRd08Jfq1bDhDEsOu6Ga/C9GCXQ=`
  
  
  
  
* URL: [https://onpes.gouv.fr/robots.txt](https://onpes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `L/p2Dh0cQSY/Ex8qJlLL3fNyljz02fU2LBTk/RCcKHOypUjmrDLkMPQAdmQ6vhQX4lYZ5Ej6FDPz7WhlQosUKbMNU6s=`
  
  
  
  
* URL: [https://onpes.gouv.fr/l-onpes.html](https://onpes.gouv.fr/l-onpes.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=spip_pass_ep](https://onpes.gouv.fr/spip.php?page=spip_pass_ep)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
* URL: [https://onpes.gouv.fr/colloques-53.html](https://onpes.gouv.fr/colloques-53.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/xhtml1/DTD/xhtml1-strict`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>\x0002�ʠk��Z�V</p><p>*&R���r�<��!J\x001ec�f\x001b$��(]9��-\x000c�>�.��B\x0011�6�	��\x00105�\x0013�e��D��U|AZ</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://onpes.gouv.fr/local/cache-js/](https://onpes.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/local/cache-css/](https://onpes.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/local/](https://onpes.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Flib%2F](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Flib%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/squelettes/](https://onpes.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/plugins-dist/](https://onpes.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/prive/](https://onpes.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fnouveautes.html](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Fnouveautes.html)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/%22)%0A%09%09%09%09%09%09document.write((window.opener)%20?%20%22javascript:close()%22%20:%20%22./%22)%0A%09%09%09%09%09%09document.write(%22](https://onpes.gouv.fr/%22)%0A%09%09%09%09%09%09document.write((window.opener)%20?%20%22javascript:close()%22%20:%20%22./%22)%0A%09%09%09%09%09%09document.write(%22)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/squelettes-dist/](https://onpes.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/plugins/](https://onpes.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Factualites.html](https://onpes.gouv.fr/oembed.api/?format=json&url=https%3A%2F%2Fonpes.gouv.fr%2Factualites.html)
  
  
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
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass](https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://onpes.gouv.fr/l-onpes.html](https://onpes.gouv.fr/l-onpes.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://onpes.gouv.fr/nouveautes.html](https://onpes.gouv.fr/nouveautes.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://onpes.gouv.fr](https://onpes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://onpes.gouv.fr/qu-est-ce-que-l-onpes.html](https://onpes.gouv.fr/qu-est-ce-que-l-onpes.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://onpes.gouv.fr/actualites.html](https://onpes.gouv.fr/actualites.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://onpes.gouv.fr/colloques-53.html](https://onpes.gouv.fr/colloques-53.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://onpes.gouv.fr/les-missions-de-l-onpes.html](https://onpes.gouv.fr/les-missions-de-l-onpes.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=spip_pass_ep](https://onpes.gouv.fr/spip.php?page=spip_pass_ep)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://onpes.gouv.fr/lib/](https://onpes.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected in the element starting with: "<script type="text/javascript">tarteaucitron.user.gajsUa = 'UA-5713943-2';</p><p>tarteaucitron.user.gajsMore = function () { /* add he", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass](https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
		<a href='spip.php?page=login&amp;lang=fr' title='Se connecter'>Se connecter</a>
	</noscript>`
  
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://onpes.gouv.fr/les-missions-de-l-onpes.html](https://onpes.gouv.fr/les-missions-de-l-onpes.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://onpes.gouv.fr/nouveautes.html](https://onpes.gouv.fr/nouveautes.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://onpes.gouv.fr/lib/](https://onpes.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://onpes.gouv.fr/l-onpes.html](https://onpes.gouv.fr/l-onpes.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://onpes.gouv.fr/actualites.html](https://onpes.gouv.fr/actualites.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://onpes.gouv.fr](https://onpes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=spip_pass_ep](https://onpes.gouv.fr/spip.php?page=spip_pass_ep)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://onpes.gouv.fr/qu-est-ce-que-l-onpes.html](https://onpes.gouv.fr/qu-est-ce-que-l-onpes.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
* URL: [https://onpes.gouv.fr/colloques-53.html](https://onpes.gouv.fr/colloques-53.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name="formulaire_recherche" id="formulaire_recherche"></a>`
  
  
  
  
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
  
  
  
* URL: [https://onpes.gouv.fr](https://onpes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://onpes.gouv.fr/local/cache-css/](https://onpes.gouv.fr/local/cache-css/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://onpes.gouv.fr/plugins-dist/](https://onpes.gouv.fr/plugins-dist/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://onpes.gouv.fr/plugins/](https://onpes.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://onpes.gouv.fr/ecrire/](https://onpes.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://onpes.gouv.fr/local/cache-js/](https://onpes.gouv.fr/local/cache-js/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://onpes.gouv.fr/local/](https://onpes.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://onpes.gouv.fr/lib/](https://onpes.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://onpes.gouv.fr/robots.txt](https://onpes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://onpes.gouv.fr/sitemap.xml](https://onpes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1593503282`
  
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616409304`
  
  
  
  
Instances: 2
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1593503282, which evaluates to: 2020-06-30 07:48:02</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://onpes.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `password`
  
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action_args`
  
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `session_remember`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass](https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `lang`
  
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `var_login`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://onpes.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass](https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `lang`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://onpes.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://onpes.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://onpes.gouv.fr/](https://onpes.gouv.fr/)
  
  
  * Method: `POST`
  
  
  * Parameter: `formulaire_action`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass](https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://onpes.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass](https://onpes.gouv.fr/spip.php?lang=fr&page=spip_pass)
  
  
  * Method: `GET`
  
  
  * Parameter: `lang`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=spip_pass_ep](https://onpes.gouv.fr/spip.php?page=spip_pass_ep)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://onpes.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://onpes.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
Instances: 16
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://onpes.gouv.fr/spip.php?page=recherche&recherche=Rechercher</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [label] tag [for] attribute </p><p></p><p>The user input found was:</p><p>page=recherche</p><p></p><p>The user-controlled value was:</p><p>recherche</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
