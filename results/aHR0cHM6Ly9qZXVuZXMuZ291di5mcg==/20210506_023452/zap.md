
# ZAP Scanning Report

Generated on Thu, 6 May 2021 02:28:21


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 5 |
| Low | 9 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 12 | 
| Source Code Disclosure - PHP | Medium | 1 | 
| Sub Resource Integrity Attribute Missing | Medium | 12 | 
| Vulnerable JS Library | Medium | 2 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 12 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 12 | 
| Dangerous JS Functions | Low | 9 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Secure Pages Include Mixed Content | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 12 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 19 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 6 | 
| Storable and Cacheable Content | Informational | 4 | 
| Storable but Non-Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 15 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 4 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9716](https://jeunes.gouv.fr/spip.php?article9716)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9424](https://jeunes.gouv.fr/spip.php?article9424)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique65](https://jeunes.gouv.fr/spip.php?rubrique65)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/extensions/](https://jeunes.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1015](https://jeunes.gouv.fr/spip.php?rubrique1015)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique202](https://jeunes.gouv.fr/spip.php?rubrique202)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1010](https://jeunes.gouv.fr/spip.php?rubrique1010)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1012](https://jeunes.gouv.fr/spip.php?rubrique1012)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1020](https://jeunes.gouv.fr/spip.php?rubrique1020)
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9018](https://jeunes.gouv.fr/spip.php?article9018)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/share.php?u=https://jeunes.gouv.fr/spip.php?article9018" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1020](https://jeunes.gouv.fr/spip.php?rubrique1020)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="btn-inscrire" title="Ouvrir les alertes presse de sports.gouv.fr, nouvelle fenêtre" target="_blank" href="http://www.sports.gouv.fr/presse/#sl-inscription">S'INSCRIRE</a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1015](https://jeunes.gouv.fr/spip.php?rubrique1015)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/share.php?u=https://jeunes.gouv.fr/spip.php?rubrique1015" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article8482](https://jeunes.gouv.fr/spip.php?article8482)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/share.php?u=https://jeunes.gouv.fr/spip.php?article8482" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique65](https://jeunes.gouv.fr/spip.php?rubrique65)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="btn-inscrire" title="Ouvrir les alertes presse de sports.gouv.fr, nouvelle fenêtre" target="_blank" href="http://www.sports.gouv.fr/presse/#sl-inscription">S'INSCRIRE</a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9424](https://jeunes.gouv.fr/spip.php?article9424)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/share.php?u=https://jeunes.gouv.fr/spip.php?article9424" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article8831](https://jeunes.gouv.fr/spip.php?article8831)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/share.php?u=https://jeunes.gouv.fr/spip.php?article8831" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1010](https://jeunes.gouv.fr/spip.php?rubrique1010)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/share.php?u=https://jeunes.gouv.fr/spip.php?rubrique1010" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique202](https://jeunes.gouv.fr/spip.php?rubrique202)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/share.php?u=https://jeunes.gouv.fr/spip.php?rubrique202" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9716](https://jeunes.gouv.fr/spip.php?article9716)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043415851#:~:text=Copier%20le%20texte-,D%C3%A9cret%20n%C2%B0%202021%2D498%20du%2023%20avril%202021%20modifiant,l'%C3%A9tat%20d'urgence%20sanitaire" target="_blank"> par le décret n&#176;&nbsp;2021-498 du 23 avril 202 </a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article8385](https://jeunes.gouv.fr/spip.php?article8385)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/share.php?u=https://jeunes.gouv.fr/spip.php?article8385" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1012](https://jeunes.gouv.fr/spip.php?rubrique1012)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.facebook.com/share.php?u=https://jeunes.gouv.fr/spip.php?rubrique1012" title="Partager sur Facebook" target="_blank"><img src="squelettes/images/icon_facebook.png" alt="Partager sur Facebook" border="0" /></a>`
  
  
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/IMG/arton9827.png?1620053665](https://jeunes.gouv.fr/IMG/arton9827.png?1620053665)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?==??Ó\x000f÷Çåóé|:3-G^îùó\x0013ý|XOôþíáùùp> ñ¨\x001f¸Á=(z}j_¡ö¦{Ë?èXÏ)Zùîþ~Yø,òùî¾|fh)\x0007µ\x0011ÍâËB\x000f§óóº®ÇÇ;\x0011õôæññt8\x001e\x000e$Bë\x0003\x001d\x000etw¼#¢çÓóýÝýétZe]x¹¿¿_\x000eËz^Î§ïÞ~ÿáÓçóîîèñþ@D§óùn¡cÙÄå\x0013\x0001ËR6ÌÊÃýòôôéùDËB÷Çû#Éùü|º;<Þ\x001dya9×çÓºÊá@Ëáx8òÝÝz>ÓPXh90\x001dkù\x001a\x0000óÂËB´N§§ûçÏOga\x0012=T¢¾Jµ\x0010Ñ©lìú]{"zó(«¬Ï²\x0008ÿððöp8<ó\x001fÿøÇ¿û\x001fþû¿ù«¿~xûöíÓJÂ\x001f>~º»¿çåp<Þ\x001dïçUNçõÝûïÎëùúé§?üüáã?ù§¿ýÕ¯~C,§Óz¼?¼yûöø>\x0011ËÛw\x000fò ëúôüôÓ~úøéS9fíxw·\x001c\x0016ZøáÍCÙ]ZÏ\x001fîîßÜ	­¼H9
æ¼òËáw¿û÷~úé§§ç§ãáXP-Ëòþ»÷ççUV~¸{óþûï~ûß}÷Ã÷ÿ ¿?,üþý\x000foå¼þüñ\x0003ù»\x001f¾ÿáûïOÏ§óoÿÍÝýãýý#\x001fèé|:Ë*||Ëòéùóç§çÓy}ûæ»ÇÇ\x001f?}þ|~~~8<üó¿úçËáðøÃB\x000b\x0011=Þ¿ùÝ_üÅóçÏÌÇõ´2³ç§óýñîï¿gw\x000f\x000f\x000bñ÷ßw¤åùáóq¹\x0013Ç7Å3¬wÓJ+Éù|~÷æq9Þ­Ìå¼d>Þ=Ö»\x0007¢ûûrÜÏýÃ=\x001f\x000e÷ï~þðóÓóóïÏ\x001eï?|÷þáÈ$ë_þîwÿ£¿þg¿ùõ¯þÿð_þÍßüÍ\x001fÿøÇ÷ïÞ?Oÿíóÿý¿þgÿÇwo\x001e\x001eÞ½§§\x0013Éa9òñß½Ã|zx8~þüó÷·ÿ¿eY~ýë\x001f?ü|ÿ?þQÎËO>>?ÿôÓÏoß¾¿»{ü÷~ûo>X\x001eßüôéÃÓßÿýéiùîá»ù/þÃÿÍÿòý\x001fÿ«ÿñÃ÷ÿÙþ\x0012ºÿýßÿýýÝýr Z~8¾ùÛÿá÷§eùøó§õôDt\x00169Ö'>~åï~úð¯ÿ?ÿúãÏÿËÿêÿýãw?üæW¿úñû\x001füÕ÷wßýøôùã§Ï²ä$÷ßñÂ´\x0008IHÖ¬"\x0007aâÈ©l·§²ðÃÌ²I\x000eµìÚ?Üá«ÏÄ´²Ô3(ù´,\x0007:Óýï¨Ì@<úð,Ot8¼yÿxwøðó\x0007>äùÚv·òVÿñQ\x000eËÓYéx¸\x0017ûL?>`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?==??Ó\x000f÷Çåóé|:3-G^îùó\x0013ý|XOôþíáùùp> ñ¨\x001f¸Á=(z}j_¡ö¦{Ë?èXÏ)Zùîþ~Yø,òùî¾|fh)\x0007µ\x0011ÍâËB\x000f§óóº®ÇÇ;\x0011õôæññt8\x001e\x000e$Bë\x0003\x001d\x000etw¼#¢çÓóýÝýétZe]x¹¿¿_\x000eËz^Î§ïÞ~ÿáÓçóîîèñþ@D§óùn¡cÙÄå\x0013\x0001ËR6ÌÊÃýòôôéùDËB÷Çû#Éùü|º;<Þ\x001dya9×çÓºÊá@Ëáx8òÝÝz>ÓPXh90\x001dkù\x001a\x0000óÂËB´N§§ûçÏOga\x0012=T¢¾Jµ\x0010Ñ©lìú]{"zó(«¬Ï²\x0008ÿððöp8<ó\x001fÿøÇ¿û\x001fþû¿ù«¿~xûöíÓJÂ\x001f>~º»¿çåp<Þ\x001dïçUNçõÝûïÎëùúé§?üüáã?ù§¿ýÕ¯~C,§Óz¼?¼yûöø>\x0011ËÛw\x000fò ëúôüôÓ~úøéS9fíxw·\x001c\x0016ZøáÍCÙ]ZÏ\x001fîîßÜ	­¼H9</p><p>æ¼òËáw¿û÷~úé§§ç§ãáXP-Ëòþ»÷ççUV~¸{óþûï~ûß}÷Ã÷ÿ ¿?,üþý\x000foå¼þüñ\x0003ù»\x001f¾ÿáûïOÏ§óoÿÍÝýãýý#\x001fèé|:Ë*||Ëòéùóç§çÓy}ûæ»ÇÇ\x001f?}þ|~~~8<üó¿úçËáðøÃB\x000b\x0011=Þ¿ùÝ_üÅóçÏÌÇõ´2³ç§óýñîï¿gw\x000f\x000f\x000bñ÷ßw¤åùáóq¹\x0013Ç7Å3¬wÓJ+Éù|~÷æq9Þ­Ìå¼d>Þ=Ö»\x0007¢ûûrÜÏýÃ=\x001f\x000e÷ï~þðóÓóóïÏ\x001eï?|÷þáÈ$ë_þîwÿ£¿þg¿ùõ¯þÿð_þÍßüÍ\x001fÿøÇ÷ïÞ?Oÿíóÿý¿þgÿÇwo\x001e\x001eÞ½§§\x0013Éa9òñß½Ã|zx8~þüó÷·ÿ¿eY~ýë\x001f?ü|ÿ?þQÎËO>>?ÿôÓÏoß¾¿»{ü÷~ûo>X\x001eßüôéÃÓßÿýéiùîá»ù/þÃÿÍÿòý\x001fÿ«ÿñÃ÷ÿÙþ\x0012ºÿýßÿýýÝýr Z~8¾ùÛÿá÷§eùøó§õôDt\x00169Ö'>~åï~úð¯ÿ?ÿúãÏÿËÿêÿýãw?üæW¿úñû\x001füÕ÷wßýøôùã§Ï²ä$÷ßñÂ´\x0008IHÖ¬"\x0007aâÈ©l·§²ðÃÌ²I\x000eµìÚ?Üá«ÏÄ´²Ô3(ù´,\x0007:Óýï¨Ì@<úð,Ot8¼yÿxwøðó\x0007>äùÚv·òVÿñQ\x000eËÓYéx¸\x0017ûL?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9709](https://jeunes.gouv.fr/spip.php?article9709)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9424](https://jeunes.gouv.fr/spip.php?article9424)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1015](https://jeunes.gouv.fr/spip.php?rubrique1015)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article8831](https://jeunes.gouv.fr/spip.php?article8831)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9018](https://jeunes.gouv.fr/spip.php?article9018)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9696](https://jeunes.gouv.fr/spip.php?article9696)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique202](https://jeunes.gouv.fr/spip.php?rubrique202)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9716](https://jeunes.gouv.fr/spip.php?article9716)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article8482](https://jeunes.gouv.fr/spip.php?article8482)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article8385](https://jeunes.gouv.fr/spip.php?article8385)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1012](https://jeunes.gouv.fr/spip.php?rubrique1012)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1010](https://jeunes.gouv.fr/spip.php?rubrique1010)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
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
<p>The identified library jquery, version 3.2.1 is vulnerable.</p>
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `* jQuery JavaScript Library v3.2.1`
  
  
  
  
* URL: [https://jeunes.gouv.fr/squelettes/javascript/jquery-1.4.2.js](https://jeunes.gouv.fr/squelettes/javascript/jquery-1.4.2.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `jquery-1.4.2.js`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1012](https://jeunes.gouv.fr/spip.php?rubrique1012)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1010](https://jeunes.gouv.fr/spip.php?rubrique1010)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1020](https://jeunes.gouv.fr/spip.php?rubrique1020)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/extensions/](https://jeunes.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9424](https://jeunes.gouv.fr/spip.php?article9424)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique202](https://jeunes.gouv.fr/spip.php?rubrique202)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1015](https://jeunes.gouv.fr/spip.php?rubrique1015)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9716](https://jeunes.gouv.fr/spip.php?article9716)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="block-search" action="spip.php" method="get">`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique65](https://jeunes.gouv.fr/spip.php?rubrique65)
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article5926](https://jeunes.gouv.fr/spip.php?article5926)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/ecrire/](https://jeunes.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article5923](https://jeunes.gouv.fr/spip.php?article5923)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article5931](https://jeunes.gouv.fr/spip.php?article5931)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article5922](https://jeunes.gouv.fr/spip.php?article5922)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article5933](https://jeunes.gouv.fr/spip.php?article5933)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article5928](https://jeunes.gouv.fr/spip.php?article5928)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article5930](https://jeunes.gouv.fr/spip.php?article5930)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3406](https://jeunes.gouv.fr/spip.php?article3406)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article5924](https://jeunes.gouv.fr/spip.php?article5924)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article5934](https://jeunes.gouv.fr/spip.php?article5934)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article6003](https://jeunes.gouv.fr/spip.php?article6003)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 42 [http://www.experimentation.jeunes.gouv.fr/].</p><p>Predicted response size: 342.</p><p>Response Body Length: 409.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://jeunes.gouv.fr/robots.txt](https://jeunes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-jeunes.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-jeunes.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-jeunes.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-jeunes.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-bcomjs-jeunes.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-bcomjs-jeunes.cegedim.cloud-HTTP`
  
  
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1012](https://jeunes.gouv.fr/spip.php?rubrique1012)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article8385](https://jeunes.gouv.fr/spip.php?article8385)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article8482](https://jeunes.gouv.fr/spip.php?article8482)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1015](https://jeunes.gouv.fr/spip.php?rubrique1015)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article8831](https://jeunes.gouv.fr/spip.php?article8831)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1010](https://jeunes.gouv.fr/spip.php?rubrique1010)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9696](https://jeunes.gouv.fr/spip.php?article9696)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9018](https://jeunes.gouv.fr/spip.php?article9018)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9424](https://jeunes.gouv.fr/spip.php?article9424)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9716](https://jeunes.gouv.fr/spip.php?article9716)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique202](https://jeunes.gouv.fr/spip.php?rubrique202)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://apis.google.com/js/plusone.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
		{lang: 'fr'}
	</script>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9709](https://jeunes.gouv.fr/spip.php?article9709)
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/ajaxCallback.js?1613638620](https://jeunes.gouv.fr/prive/javascript/ajaxCallback.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://jeunes.gouv.fr/squelettes/javascript/jquery-1.4.2.js](https://jeunes.gouv.fr/squelettes/javascript/jquery-1.4.2.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique276](https://jeunes.gouv.fr/spip.php?rubrique276)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://jeunes.gouv.fr/plugins-dist/jquery_ui/prive/javascript/ui/jquery-ui.js?1613638620](https://jeunes.gouv.fr/plugins-dist/jquery_ui/prive/javascript/ui/jquery-ui.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
* URL: [https://jeunes.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-3f2fbcf8.js?1616488117](https://jeunes.gouv.fr/local/cache-js/jsdyn-javascript_porte_plume_start_js-3f2fbcf8.js?1616488117)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://jeunes.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1613638620](https://jeunes.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://jeunes.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1613638620](https://jeunes.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/extensions/](https://jeunes.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9424](https://jeunes.gouv.fr/spip.php?article9424)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique65](https://jeunes.gouv.fr/spip.php?rubrique65)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique202](https://jeunes.gouv.fr/spip.php?rubrique202)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9716](https://jeunes.gouv.fr/spip.php?article9716)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1015](https://jeunes.gouv.fr/spip.php?rubrique1015)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1012](https://jeunes.gouv.fr/spip.php?rubrique1012)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1010](https://jeunes.gouv.fr/spip.php?rubrique1010)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1020](https://jeunes.gouv.fr/spip.php?rubrique1020)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1012](https://jeunes.gouv.fr/spip.php?rubrique1012)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/sitemap.xml](https://jeunes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `no-cache, must-revalidate`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1010](https://jeunes.gouv.fr/spip.php?rubrique1010)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/robots.txt](https://jeunes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1020](https://jeunes.gouv.fr/spip.php?rubrique1020)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/extensions/](https://jeunes.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1015](https://jeunes.gouv.fr/spip.php?rubrique1015)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9716](https://jeunes.gouv.fr/spip.php?article9716)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique202](https://jeunes.gouv.fr/spip.php?rubrique202)
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3391](https://jeunes.gouv.fr/spip.php?article3391)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/embed/video/xewda3`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article8701](https://jeunes.gouv.fr/spip.php?article8701)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.jeunes.gouv.fr//IMG/UserFiles/Images/Capture d’écran 2019-05-23 à 18.31.01.png`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3250](https://jeunes.gouv.fr/spip.php?article3250)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/embed/video/xhrf63`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article8360](https://jeunes.gouv.fr/spip.php?article8360)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.jeunes.gouv.fr//IMG/UserFiles/Images/brexit_logo_couleur_rvb.jpg`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3893](https://jeunes.gouv.fr/spip.php?article3893)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/embed/video/xfs2fi`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3457](https://jeunes.gouv.fr/spip.php?article3457)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/embed/video/xbenah`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article4213](https://jeunes.gouv.fr/spip.php?article4213)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.dailymotion.com/embed/video/xns7ex`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3118](https://jeunes.gouv.fr/spip.php?article3118)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://3452220.fls.doubleclick.net/activityi;src=3452220;type=jeune105;cat=2013-570;ord=1;num=9637804840935.812?`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article8081](https://jeunes.gouv.fr/spip.php?article8081)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.jeunes.gouv.fr//IMG/UserFiles/Images/Kake_colos2018_DECOUVERTE.jpg`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3217](https://jeunes.gouv.fr/spip.php?article3217)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.jeunes.gouv.fr//IMG/UserFiles/Images/infographie-ivg_2017-f4429.jpg`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article4541](https://jeunes.gouv.fr/spip.php?article4541)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.jeunes.gouv.fr//IMG/UserFiles/Images/960_320_jean-michel_blanquer.jpg`
  
  
  
  
Instances: 11
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=iframe src=http://www.dailymotion.com/embed/video/xewda3</p><p>tag=iframe src=http://www.dailymotion.com/embed/video/xewda3</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://jeunes.gouv.fr/squelettes-dist/](https://jeunes.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3048](https://jeunes.gouv.fr/spip.php?article3048)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3046](https://jeunes.gouv.fr/spip.php?article3046)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/local/](https://jeunes.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3370](https://jeunes.gouv.fr/spip.php?article3370)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/plugins/](https://jeunes.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/squelettes/](https://jeunes.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/](https://jeunes.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3947](https://jeunes.gouv.fr/spip.php?article3947)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article5341](https://jeunes.gouv.fr/spip.php?article5341)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/lib/](https://jeunes.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3369](https://jeunes.gouv.fr/spip.php?article3369)
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1010](https://jeunes.gouv.fr/spip.php?rubrique1010)
  
  
  * Method: `GET`
  
  
  * Evidence: `squelettes/images/BADGE_QRcode-60pix`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `WRqG9jhNlf50NFkqJlLL3fNyljz02XC1mu+clyrqGM8+kvb68If9GLfTDOGDoxwzJfb/OVcfoCiJkKPmGiAoVhZp/+o=`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1020](https://jeunes.gouv.fr/spip.php?rubrique1020)
  
  
  * Method: `GET`
  
  
  * Evidence: `squelettes/images/BADGE_QRcode-60pix`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1015](https://jeunes.gouv.fr/spip.php?rubrique1015)
  
  
  * Method: `GET`
  
  
  * Evidence: `squelettes/images/BADGE_QRcode-60pix`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `squelettes/images/BADGE_QRcode-60pix`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1012](https://jeunes.gouv.fr/spip.php?rubrique1012)
  
  
  * Method: `GET`
  
  
  * Evidence: `squelettes/images/BADGE_QRcode-60pix`
  
  
  
  
* URL: [https://jeunes.gouv.fr/extensions/](https://jeunes.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `squelettes/images/BADGE_QRcode-60pix`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique65](https://jeunes.gouv.fr/spip.php?rubrique65)
  
  
  * Method: `GET`
  
  
  * Evidence: `squelettes/images/BADGE_QRcode-60pix`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique202](https://jeunes.gouv.fr/spip.php?rubrique202)
  
  
  * Method: `GET`
  
  
  * Evidence: `squelettes/images/BADGE_QRcode-60pix`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9716](https://jeunes.gouv.fr/spip.php?article9716)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/jorf/id/JORFTEXT000042475143`
  
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `EeXz2VFI6DBdbBoqJlLL3fNyljz02TECtXQHlk0Mhp0l/RVwD03p8U/NekI7RNpymVsuZ+gOwK7iwbuqWj2KQaozaIU=`
  
  
  
  
* URL: [https://jeunes.gouv.fr/robots.txt](https://jeunes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `TLf3Gg1arobPGAUqJlLL3fNyljz02cwc0A1j0L3wUWYdZU457TvwL6pjwgsgPv86/nFDondmWBrfNufQrLEREtwVEVI=`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�����mz�♨\x001e��@\x000ca?A\x0017(u�Ҙ�</p>
  
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
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article5341](https://jeunes.gouv.fr/spip.php?article5341)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3947](https://jeunes.gouv.fr/spip.php?article3947)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/lib/](https://jeunes.gouv.fr/lib/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3369](https://jeunes.gouv.fr/spip.php?article3369)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3048](https://jeunes.gouv.fr/spip.php?article3048)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/squelettes-dist/](https://jeunes.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/plugins/](https://jeunes.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/squelettes/](https://jeunes.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3046](https://jeunes.gouv.fr/spip.php?article3046)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/local/](https://jeunes.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article3370](https://jeunes.gouv.fr/spip.php?article3370)
  
  
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
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.form.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620](https://jeunes.gouv.fr/prive/javascript/jquery.js?1613638620)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
Instances: 19
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSERNAME\b and was detected 2 times, the first in the element starting with: "		username: null,", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9424](https://jeunes.gouv.fr/spip.php?article9424)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr](https://jeunes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique65](https://jeunes.gouv.fr/spip.php?rubrique65)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1015](https://jeunes.gouv.fr/spip.php?rubrique1015)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique202](https://jeunes.gouv.fr/spip.php?rubrique202)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?article9716](https://jeunes.gouv.fr/spip.php?article9716)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1012](https://jeunes.gouv.fr/spip.php?rubrique1012)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/extensions/](https://jeunes.gouv.fr/extensions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a title='Etudes et Formations'>Etudes et Formations</a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1020](https://jeunes.gouv.fr/spip.php?rubrique1020)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="zoom_magnify" href="#" title="Changer la taille de police">a<span class="big-letter">a</span></a>`
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?rubrique1010](https://jeunes.gouv.fr/spip.php?rubrique1010)
  
  
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
  
  
  * Evidence: `1618219034`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616488116`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1618490821`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1619430768`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1620053665`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1613643925`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1617352255`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1619599856`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616488117`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1619760042`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1576775137`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1619687105`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1616691284`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1613638620`
  
  
  
  
* URL: [https://jeunes.gouv.fr/](https://jeunes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1613646227`
  
  
  
  
Instances: 15
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1618219034, which evaluates to: 2021-04-12 09:17:14</p>
  
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
  
  
  
  
* URL: [https://jeunes.gouv.fr/spip.php?page=recherche&recherche=Rechercher](https://jeunes.gouv.fr/spip.php?page=recherche&recherche=Rechercher)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
Instances: 4
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://jeunes.gouv.fr/spip.php?page=recherche&recherche=Rechercher</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [name] attribute </p><p></p><p>The user input found was:</p><p>page=recherche</p><p></p><p>The user-controlled value was:</p><p>recherche</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
