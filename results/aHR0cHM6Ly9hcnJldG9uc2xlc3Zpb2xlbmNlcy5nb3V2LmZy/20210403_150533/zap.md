
# ZAP Scanning Report

Generated on Sat, 3 Apr 2021 14:59:35


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 7 |
| Low | 10 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 7 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 12 | 
| Source Code Disclosure - Perl | Medium | 1 | 
| Source Code Disclosure - PHP | Medium | 1 | 
| Sub Resource Integrity Attribute Missing | Medium | 9 | 
| Vulnerable JS Library | Medium | 3 | 
| X-Frame-Options Header Not Set | Medium | 3 | 
| Absence of Anti-CSRF Tokens | Low | 12 | 
| Cookie No HttpOnly Flag | Low | 4 | 
| Cookie Without SameSite Attribute | Low | 5 | 
| Cookie Without Secure Flag | Low | 4 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 9 | 
| Dangerous JS Functions | Low | 5 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 12 | 
| Strict-Transport-Security Header Not Set | Low | 11 | 
| X-Content-Type-Options Header Missing | Low | 5 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 12 | 
| Information Disclosure - Suspicious Comments | Informational | 12 | 
| Modern Web Application | Informational | 12 | 
| Non-Storable Content | Informational | 3 | 
| Storable and Cacheable Content | Informational | 8 | 
| Timestamp Disclosure - Unix | Informational | 12 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 12 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/2020-10/Synth%C3%A8se%20%C3%A9tude%20DAV%20morts%20violentes%20au%20sein%20du%20couple%202019.pdf](https://arretonslesviolences.gouv.fr/sites/default/files/2020-10/Synth%C3%A8se%20%C3%A9tude%20DAV%20morts%20violentes%20au%20sein%20du%20couple%202019.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `565566488567`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/2020-11/Lettre%20n%C2%B016%20-%20Les%20violences%20au%20sein%20du%20couple%20et%20les%20violences%20sexuelles%20en%202019.pdf](https://arretonslesviolences.gouv.fr/sites/default/files/2020-11/Lettre%20n%C2%B016%20-%20Les%20violences%20au%20sein%20du%20couple%20et%20les%20violences%20sexuelles%20en%202019.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `565566488567`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/2020-10/Synth%C3%A8se%20%C3%A9tude%20DAV%20morts%20violentes%20au%20sein%20du%20couple%202019.pdf](https://arretonslesviolences.gouv.fr/sites/default/files/2020-10/Synth%C3%A8se%20%C3%A9tude%20DAV%20morts%20violentes%20au%20sein%20du%20couple%202019.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `5475547711725478`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/2020-10/Synth%C3%A8se%20%C3%A9tude%20DAV%20morts%20violentes%20au%20sein%20du%20couple%202019.pdf](https://arretonslesviolences.gouv.fr/sites/default/files/2020-10/Synth%C3%A8se%20%C3%A9tude%20DAV%20morts%20violentes%20au%20sein%20du%20couple%202019.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `674675250676`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/2020-10/Synth%C3%A8se%20%C3%A9tude%20DAV%20morts%20violentes%20au%20sein%20du%20couple%202019.pdf](https://arretonslesviolences.gouv.fr/sites/default/files/2020-10/Synth%C3%A8se%20%C3%A9tude%20DAV%20morts%20violentes%20au%20sein%20du%20couple%202019.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `670672252673`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/2020-10/Synth%C3%A8se%20%C3%A9tude%20DAV%20morts%20violentes%20au%20sein%20du%20couple%202019.pdf](https://arretonslesviolences.gouv.fr/sites/default/files/2020-10/Synth%C3%A8se%20%C3%A9tude%20DAV%20morts%20violentes%20au%20sein%20du%20couple%202019.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `571573252574`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/2020-10/Synth%C3%A8se%20%C3%A9tude%20DAV%20morts%20violentes%20au%20sein%20du%20couple%202019.pdf](https://arretonslesviolences.gouv.fr/sites/default/files/2020-10/Synth%C3%A8se%20%C3%A9tude%20DAV%20morts%20violentes%20au%20sein%20du%20couple%202019.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `579575489581514356`
  
  
  
  
Instances: 7
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 565566</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/plan-angela](https://arretonslesviolences.gouv.fr/focus/plan-angela)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/de-nouveaux-outils-disposition-pour-lutter-contre-les-violences-conjugales](https://arretonslesviolences.gouv.fr/focus/de-nouveaux-outils-disposition-pour-lutter-contre-les-violences-conjugales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/violences-conjugales-le-gouvernement-se-mobilise](https://arretonslesviolences.gouv.fr/focus/violences-conjugales-le-gouvernement-se-mobilise)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/violences-conjugales-le-gouvernement-se-mobilise](https://arretonslesviolences.gouv.fr/focus/violences-conjugales-le-gouvernement-se-mobilise)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/la-synthese-de-letude-sur-les-morts-violentes-au-sein-du-couple-en-2019](https://arretonslesviolences.gouv.fr/focus/la-synthese-de-letude-sur-les-morts-violentes-au-sein-du-couple-en-2019)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/plan-angela](https://arretonslesviolences.gouv.fr/focus/plan-angela)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/8emes-rencontres-interprofessionnelles-de-la-miprof](https://arretonslesviolences.gouv.fr/focus/8emes-rencontres-interprofessionnelles-de-la-miprof)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/foire-aux-questions-plan-angela](https://arretonslesviolences.gouv.fr/focus/foire-aux-questions-plan-angela)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/de-nouveaux-outils-disposition-pour-lutter-contre-les-violences-conjugales](https://arretonslesviolences.gouv.fr/focus/de-nouveaux-outils-disposition-pour-lutter-contre-les-violences-conjugales)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://twitter.com/arretonsles" target="_blank" aria-label="Se rendre sur notre page Twitter">Twitter</a>`
  
  
  
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/2020-12/VFF_Livret_KINE_Anna_Elisa_D%C3%A9c2020.pdf](https://arretonslesviolences.gouv.fr/sites/default/files/2020-12/VFF_Livret_KINE_Anna_Elisa_D%C3%A9c2020.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#5O3FgFe`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#5O3FgFe</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/2020-11/Lettre%20n%C2%B016%20-%20Les%20violences%20au%20sein%20du%20couple%20et%20les%20violences%20sexuelles%20en%202019.pdf](https://arretonslesviolences.gouv.fr/sites/default/files/2020-11/Lettre%20n%C2%B016%20-%20Les%20violences%20au%20sein%20du%20couple%20et%20les%20violences%20sexuelles%20en%202019.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=oYflöÒoþ\x0013ñ»üÄiéïíÅ÷âø£Ø8«"Îj\x0007ZòOïÿZ¼ü«Úæ]Õª«\x0003\x001ah
[øy\x0000Wko©±éÏ\x0017%ÿ¶nµ:6+\x001bÇ¶\x0003UZñ\x0003±)Å×Zâ[jl\x001e[ÿóB¼xYÚ(9f\x001f¿ÎïWë\x0007jÖ\b\Rî4kÀ»\x001a^Û	´í\x0006Ú­
Í©Êýgñúa¦\x001aÈ»PrL¾Ü>´\x000f.®B^î\x0002k9\x0013SI>«â³j>«á³§¿Å/mÊ«¯®Ë	ÕuG:[£Ó°&JÙ.3¥ÖâÐë&V¿#ó½©áed|ÁW²\x000e\x001eï¾Ê\x001aËµ_ÉÉÓQ)PÇæVØJ®\x001aÛamè^|Ö´9¢ÐèÔ ¶F´ùo\x0005fHK6L­ø¬Ïjø¬Ïê6]\x001a\x001b×½¶\ºù%v1§ãRÏÉ'Ý!|U:ÊâgråÕTW[]«R\x0013*þPPÒ\x0005ÕO^\x0017?v+¯;: \x001fk°\x0004VVëµª¾Ü"Ö¯ÝrknSc"Æ­¹M²-mÎíæ?-Â¶âÃÔ|VÃgµ|Ö­\x001cHMì*¹m?ÕÀRI<\x001ffà³F6«Ul§*öS\x0015Ë©åTÅrªr!U±ªØ/÷ÅÏ&kc=Ö¸&®¸¦!ÖÍj¬kÙTëµ¬_@µÜ.ø&~÷)»µÕVdÙ¶\x0017¿@.¯«íòyUv\Åç*\x0017ûj*|åz¿,3¡rµ©®+åe|ûñ^Ø¶Ëjiõ£ÿ1æÿ\x0000Î\x000f:!
endstream
endobj
3524 0 obj
<<
/Type /ObjStm
/N 328
/First 3030
/Filter /FlateDecode
/Length 3570
>>
stream
x[QË%·
}ß_1ÿ cË%\x0008R(ÍCHúVúÒ%\x0014BSB
é¿ï9s=Íøzâñöa÷ú+\x001fK:¬ñÌÍ)¶}Ë©l%o9ï\x0007>Ò$áªn©âÛ¯RÅ§lYù½n9\x001c¶Iá÷eÊë\x0015(Oßá{Ù7Ý1\x000fXZø}lê¼7\x0013`lVù½n5aØV/e«Äºy¡oÎyX+°F.i\x000bê%±¥}Ç\x0004èv\x0005\x0002¤Ó\x001e¼"[J4©\x0018\x00064ªÔ-qå\
\x0006\x0015æ\x0015§Ä\x0005\x0018®(\x000c/;\x0015¥ÐÜ\x001d\x0003Ç,\x0005 Â¬®Wl³l¸\x0015«[p\x0016+=\x0003kRu\\x0001zrúÑì\x0006£\x000cÈ±c\x00019°r6 Gð
,Ù³`ì^ñ\x0017'¤ÄYP7\x0019qèÏ\x001dWh	mÊÔ);f\x001c®!\x000fUèCüW\x000bÆ+8n¤«Ò6ÎrêM ¸âÔºÐþJ?ûN,\x0008Ò¤\x001aÊ	.¼B9¢R@ egNP'ûÎï\x0003\x0003\x0006B$\x000cÈhäMP\x001d\x0003*\x000e÷É\x0011là¢2<"²cÁ¨\x0018è~Ä\x0008ý\x000c
¤SP.¥\x0012\x001e8
?Ëj\\x0007\x0006?Ë?\x000c
ÿ0.\x0008÷Á=¼\x0002äZ9\x000bÈ\x000e?\x000bÔ\x0015WÎ\x0002hpjÂ%A.à\x0000(¾9 (;(\x0012¦Qâ÷(Iy\x0005)h\x0001â¬0 \x00054\x0014ò È<èNsw\x000cææ­\x0014*«¥ÀÏð\x0004\x0006ð¨ Å"/\x0004¹W´ò
-q\x0016³
~&åÅâ\x0008­T&\x000eW\x000fªÀ-qø)I'ÀlÝA\x0000T\x0013¾k1 bÐRû\x0002^\x0001\x000bgozø\x000f1
- \x0018RP!Ç´P1jA°	|¤
\x0004\x001a¨R1ä \x001a=\x001cT+$
ÈFò\x0011
Z\x0011\x0000ä\x0015fX\x0008;\x0014\x0017¤FâWX"È\x0005rP_V¤
b	VÄò¯á\x000c\x000et³L®Æ¬\x0015h`G4!¦0ÕM\x0010Ô\x0002Û¬À£\x001c4,\x0004ÈfÊEA§)\x0017\x00051ð.\x0016E2qQÈ1\x0000V\x0019\x0000\x0008\«øKæ\x000c\x0000\x0004¹\x001eñ\x0001\x0003\x00169h\x0001·	2\x000e,±d¢ÜírP©sÝêýÊ\x0018dVq·Z\x0010 ø¨\x0005j²²VEx*¬­JoAoÔO8	qXíà\x0013Â,±¨5Q\x0018³ªQ\x0018È¾S80 Eà¬:r\x0014ä£þÂµY+¯Øæ\x000cuE°ù\x000eX
=\x0001\x0015q2@Òæ\x0019j*f:+±"ÆÙÏÀu¦ÐÉé	\x001f½dî\x000bu@rÚ¤éô¼B'§ç\x0011VÓó qCÔ!¬6¯\¸\x000eUW å\x0019h\x0018\x0018\x0003
Èx\x0005ÈÁØ\x0001Ë\x001eÁ`,[ì\x000c+°\x000c\x0011\x0006£a@5À"ª\x0017¦Wn6GTb·aYRè\x001dGxÁà§×8HÁ\x001f$ÜX@QËq\x0005Õ/¨¦"ÇP\x0005±\x0004ô\x000ecÞÀ#a\x0010Tø:*\x0002@Q¢bA\x0017\x000c~EÉ\x00087^Á¬ > >qìz\x0008\x000eÛ¹í± \x001axäN 1iOÂkÃ¦Ã\x000cÁ»¯%Êq§`åH;k%Ê1\x0015jå\x0005\x0008Á\x0011ü\x001er%Ò±óbåÞ\x0001£Ê\x0000"A\x0006\x0011Ä\x0011R#25¨X\x0013^ãHÇ}¹\x0006#x\x000eäêÄsè\«Å±ë\x00139\x0018¸¨>C#cp\x0002\x000fåÕ\x0019\x001c\x0019GX7±3áv\x0011µ
îù,«\x0008^ìÕO !Ø9"Ja(Ñ©\x0000yíU\x0018åÄ#¾\x0013ÏÀ®ïÄ3ÐÐÇ¨îL\x0002âUdÓÏz8
½\x0006»\x0016d"FÎÔà\x001a\x0001ý¾O@óÄ\x000e\x000b·\x001a\x0010N>ò\x001e\\x0003(9±çAÅEË²óÛ£yaÀ#\x0018Á'Î.
}\x000e³.sðt¬2s\x001c	È\x0011!s
FKt\x0019Ð\¢\x0008æ'»¡#e#Z.DæJ.Df»âB­Ø¯ 9¢ÿk\x0004ý¼NØi\x0018\x001d(í\x0015ýÇ\x0008Ã¾§¬\x000f\x0018qãdÏrÄo\x0005¬8Û8l\x001fÁö
\x0004f°[£ì°·\x0013f#\x0015û5èRgÌýÂµâÿêDa\x0006uÀê,f\x0018\x001dy+lñß\x001aGGRc
ìÛvÚF3 }\x0001!\x00189Gà(¨_aóÂ> \x0015nAM\x000b+tP?(ÏkD., l:\x000bt°ÙDçüf·Y\x0014ñ\x001dGsiÂ\x0002ÁÆÓ¨ßÑy²R³bam{\x001fÐ3¸\x0006m
vÅ*Ã5"³ðp
\x000f\x001f>ÿüÃgÚþ"ýðÙ·Ûg_øìë£Çß·o0ü~«Çè/>üO\x0012\x0001ÇkâýÀ7¯yþýk¢\x000eâå
@\x0000ò\x0005À¦Ý	ÖÄ¿yÛ ®Ýú2]?\x000fëç2Y\x0007hS@]\x0001lZ`O\x0006Õn}®_Çõc\x0010ó+ L\x0019¡\x001bÀ¦Õ	ödPtëO\x0019!\x0019\x001dö\x000eqJ\x0014Ý 6µN°'Rê\x0014r$#G2º4å+bTFn\x0010Z'Ø£I](3RY\x0016åíøKrClÌ¥Nm\x0005±©w=z¡Kþ\x0012S\x0005|P@÷\x0011±KgÍ3DM+M­\x0013ìÑ¤.ýuZùUF\x0005Æ\x0002ºÖ)K:²tØÔ:ÁLÊ]þë%\x001dY²\x001bv	mSldé\x000eQ\x001bK¶ÄRîòß¦,ÙÈÝø´Kh²d#KwÖX²5º2aSld©ÞùôX§,Õ¥;Dk,Õ5ºòP§,Õ¥zãÓ®<Ô)Kudé\x0016±±T×XêÊC²TGüÆ§]yð)K>²tX\x001bK¾ÄtåÁ§,ùÈ>®<ø%\x001fYºAlj`&uåÁ§,ùÈR>®<Ä¥\x0018YºAlj`&uå!f,.òtæ¥ÄHCÜ\x0010Û%tL\x001b¹\x0018\x001b¹\x001bÄ¦Þ	öèkþóÈz¦Àp?ÆØ\x0001Ñ;ÄYwÆó\x0015ÄZ'Ø£IÑ) S\x0005Ê¨ÀXö\x000eqÆ\x0012Ïï\x0017\x0010Z'ØIåÿ<þ)0²FÜ!NYJ#K7M­\x0013ìÑ$é\x0014²Fî\x0010K8e),ÝERj,¥5®eBò¥ñlCò
KÖ!NY\x001a\x000f\x0017î\x0010Z'Ø£I]yÈSòÈR¾AìÊÃôxAÆã;Ä¦Ö	öØp4RÛIÉyÀpÞ÷²çÝÜy\x000btÞ7ÍöÙ¡mÝÙ\x000b
Ä¹ë[ÕY¬Ï
w3Î\x0000<Y;MmæüîÇ¿ÿçeÑÝÙUò»¿ýðñ%é£ó[iüö_ßýó*sïíÊÞôàFÓºh«<_&LÃJ.aõÕ\x001f_\x0013nNád@ÖõTdZÞQË4«%Pu@µ?r=@ Ú:íi,¡Ö\x0001uvÜ%×s	ª\x000f¨S¶Ê\x001a[ñªS¶Ê\x0012[-<Ï:Cà$ítóéÓsñ\x0006Íî°w=Çl=Ç,/4sÚ	dsÁñÌûõÙÌìÎf>þòóß~üåo0/\x0011ûåO?ÿV92ùrdÝþ®³04]\x0017µuÑº.êë¢±,Z÷uÑ´.×Ee]t­ºÎV]g«®³U×Ùªëlù:[¾Î¯³åëlIknDÏâõj¤5;b­\x001aX«\x0006ÖªE;Ö\x000cµêñ:¢;^Py}6¼Ö,ImxµáÕ×\x000e¤5SÒ9]ªÞÙpTÖB\x001do"½*ÞYáÚÚ×Cà¯¿ûþc&R\x0011éJp_\x000fEFÉ+¿z¹'¾Ñ®/ºÛDX:XHeÉk2jÊ\x0013I[¬Ë¾,\x0019ËÝãº\x0007Ñ´.×EßSÍSñ÷®S/7^7âïí¤æ:\x0013_§-­óÖKëÌåuæò:sy¹<0'³|ì\x001e9¨ÌÒ¬{ð úÞÙkVºìë¢ïÍµøy\x0006þ«¸¦xÇÎÌë¢\x001fD\x0007ötªsYGÖuQ[\x0013ýò·Ï¿è\x000eeÿðïÿýÓÇmà:ÏÿÏyñ	óÞÏCÕfÕ¦;¹|\x0010Íë¢ÝÆWg\x0019Ü
>v¤Ö©\x0007l]ôý\x000eZ}w)éS}cY´;Êy\x0010Më¢y]TÖEí/f¥Cu\x001dy(¤1ÛXµ®!_2I?%\x0003/G\x0016Ç\x0012¶Ï\x0002£;)x\x0010MovÚ^fâ¹Cékï\x0015ÕÒT²üÞÅXê|M@K³bÑÝ¶ÏE¯.®4\x001dßnªõzÿëIõñç\x001aÞ,Ï0#ßßïÜÁ6\x0005OÈî¾§úx*:ãÊÌ8¿?ë©7\x000fSg\ÌóeØ¦à	ùhÜÛmS½dëhtðdYÔeI[¬¯óÇ[é¯ÏÔ>óo8ò\x000eÃ\x001dx©`Cë1qåeÚP÷æ\x000c\Ë^
ù ôÞÖ¸;\x0019O\x0000n3aÿhéî	}UîðATÖEËº¨®Úºh]\x0017õuÑX\x0016íî\x0003\x001fD×ÙÊëlåu¶ò:[y­¼ÎV}D\x001d¿)y}Jû,íSÛ§µÏÚ>½}¶ùí¾·\x0007\x001a^{?ßÛ{òÞ\x001e¨zºß»üæfÁsY¯©Ýí¬§Æ²h÷:×hZ\x0017Íë¢².ZÖEu]ô½oö<\x0013÷ë>ÿz°æró\x0006ØûË\á1è\x001djSí\x0004kâW\x001b;\x001dÖ#FÖ#¦¬GLY²\x001e1Z*·w	<·Ôm¿\x0004ñöî·W'<·R[)h\x000f\x0005½=\x0014ôön·g¡Þ\x001e\x0012z÷ãKÊç\x001bb®¯¼LR¾È§¤|w{ïeV\x0017»Ûû\x0007Q[\x0017­ë¢¾.\x001aË¢ÞÞWñö<ÚÛ/\x000e¼=öÒ8+¿QËMy.kå¹Ý\x001düñÊ×çK§ÚÞ¬í¥ÄÖ´\x001d?|m5çÖÒâ.q×¾¿¾úÀG1\x000cb.}h~ïCãòôûýäz\x0004ö)óÞn\x000cBÊLT×E£å[È=W!ãR\_i\ÅÝ\x0006\x001a>Wcxñ*n~áó¶7ÇåTú\x0006ô\x001aü\x000f¢ÑB9ÊðJÙ\x001eÑ!Û\x001cyø\x001dÐ\x001db÷Ä(ÊÜYeÉYÝ]D\^L¹\x001cÞ\x000e¼Ì\x001ddB¿í¹\x000er\x001e¬ã¯un!»TÑ9=ºFOR:§G§ôü\x0017­þ|\x001e
endstream
endobj
3525 0 obj
<<
/Type /ObjStm
/N 295
/First 2979
/Filter /FlateDecode
/Length 3343
>>
stream
x[»å¸
Íç+ô\x0007#ïª­9ÙuæràÈËÿ\x001fùàHP-[·)!i±©#¼ARî(cÛ·Q÷-g\dë	\x0017ÝD\x001b®iZqÍ¡Ê¦yàZ7\x001dk[JkßR3ÜØ²m4Ù2h¶oeÇ|\x001a[)À7ÝÚ\x000e6­l-w\ëÖá\x0012Ø\x0002×ÚÖà
\x001e	÷;xv»ß7Ù\x0015.\x0018àÏ"
V=c\x0000¾£\x0017È,\x000fà\x000e¤ïu¤F\x0002'è0úØ$ï <v\x000c
(÷Á\x0000e°\x0002[a:ï 3@¹fÐ\x0019 \M,*-)\x001e6\x000e(÷\x000c:\x0003»1Üw\x001e	\\x0007HmJ6Ýé\x0000ººìûn&UÎÁ¨ k#ÝTs0°F;¤Õ\x0004r\x0018
ÍÁ\x0015s
£Ê9ð(ð\x0005FàQ`IÀ£*çÀ£VÎG\x0013ÎG¥1\x0002®&©G¯6\x0007ò:sà1
çdKæ\x0006\x0012FÍÇ\x0012\x001c`£Qån°{=|ºAÕ¨\x000e,²v¨Ì\x001dC åÂ9ð(Ô-G¡n	<ªp\x000e<já\x001cx´sÕÏtS§n\x0008¸ÔÍeð\x0018;çÀcdÎ!<wê\x0013F\x0016í;\x0005æ4!Mx$DNT
OåDÕ\x0010µ9Sµ\0*CÔ\x0017s)¦\x0010b+[\x0014aÌªs`Öv\x0013\x0000\x001aäV-\x0018å68\x0007n\x0016J\x0018ÛØ2¬G6nÑ\x001däé9ÁÈs5\x000b\x0002ÛF\x0019#\x0006\x000e´*ÊÀ
Zèï°RIÉ\x0014GÆDç#K¦óá÷\x0019ðl)\x000cNdl)t år¥\x0003ño©\x000c0DciÊ» Ò\x00188°_éb\x0012\x0000R:\x0013\x0000Ê SÑÅ\x000fÌõ­ît\x0016ò¹\x001eÁ\x0004æUÄ(#­«0HÎUw£\x000cµªV\x0000Y[\x0013\x001dÔ®©rÝêá\x0019¨Z¤Áj\x0011£ÔEÜ\x0018e¤~=<L¯Î\x0011kc "³k+F\x0019é_;\x0003\x000cî©	,¯\x0003ù*È<è},\x0001¹LÁêfXÛ\x001c8¬xrD	Ö:5¯b¸µTùDÃ:(¶yËÆÃ\x001ekåxv`Tm}
­\x0012\x0007µJ\x001cþm8\x0018¢5ãG0¢,p@£íÍ¶\x00178¯Ñö4ï´½en·\x0002á}CîØ]¤ofwáÚÎ\x0005I\x0010 ])Ú\x0016aÑnËoOw±n3lEë\x0008r\x001bG\x0011Ò\x0003bv\x0016c¯\x0016X1jv\x0017iÞò.x4ó¯`\x0011èÝü+HøÞ;ïÚÞ ¼\x000b\x001e\X\x0005i>vêf»ÇNÝ\x0006ÃHauYºÝE\x000f¥n¶É)uÃ"0¸ a#°Ýwÿ9ñ.\x0016÷LÝl¿+Ô
\x001e\x001cº\x0015Û\x000bmAÂÝÏîr£nÅv8êVl§¢nÅ¶ªÁ»¶£$Þå\x0006Â»«?	r\x000f¡v\x000ckÓ\x0002C.Ø¶\x001dI¡TÐü§*\x0017§D\x0015%s\x0010ÀÕ.\x0013Ð¹zÕc·´Åt+×\x001b£ÛåÃ\x0000f\x001f¬\x0006\x00068Rª\x001eL]Ïd5ºÜú ée+¬pÃæV*Aì/%µ4Æ,Ã01\x001d\x0018#}bÛ;\x001cm,úáA{&Êt.=¢ÊvnáþpÚÅò\l\x0005ì\x001euméBÃ7Z¨U·5F(^¯\x0004ð­2BÃ
¡móÊB,©ÔVa\x000cyÐ Ô¦¶Òàj+\x00056oá\x00136¤\x000cv,À"lÖ%'+,\x0000H(ÓX-5Û£D\x0015Ò1âj§Ã.Z	3ñ´\x0016²0q*²TÔfa£Ñ\x0008\x0007=\x000eB\x0018fÊg\x000ftSKM\x0015ìåRÛò1íg\x0018\x0016\x001b5öÉ"\x001dºì6¤5ýÈÝL\x0016Ãf{µ\x0010Ç¾bâX¦¤d¦	0Ìæyµ="e\x001eÑ,FSÉ&\x0005|*,XMdaâTâ,Â\x0010\x000e&+\x0016\x001bcX·¿j\x0001z£±\x001aÍÊ6´\x0008ÂÉN|FG±`h§Ê¶¶\x001blH¬ñÉäI\x0005³\x001eX;3&&±íÐ\x0000\x001b\x0016ZÝTÁ^oòZö`³7ÉÌô9¤fÌ\x001c²Ã3´Y\x0016»­16æn¤v(ÈÃ¬¬æ&\x001cMõÇß~ûñóïÛ?¥þëÇÏ?·üøù\x0007Oìûö\x000bÃÿ Õ8üý÷\x001f\x0017vðXÿëxà\x001fã\x0013iÜ`Ò&º$5æ
É>Ìké\x0015É1¬kå
IÝ'}M²½")\x0007âÏÿýû¿Ä´¥Tÿ*Á\x001ak/VãÕ\x000bI,\x000b\x0008Ïé¼ÖózÎý¼êyÍçõÄ\x0013WO\=qõÄÕ\x0013WOÜ!ý)Ö/?h&ÓÒ:9-ï±ö
z\Îk½Y´å;úÕ·ËÑ)­\x001e°ý=Ö^\x000f©Ïxèû+é§üéË,O{\x0000+\x0001¬¾ÇÚkþ¡Þ\x0019¿ý»~Ïí\x000fê¦)Îz[\x0003Ø\x0012ÀÖ÷X+T\x001cêéÔOïWÞMS°µ\x0017z\x0000;Þcóþ\x001ek¯±z§wÇéÝñÊ»y
º±´lÖ\x00006\x0005°ù=ÖEz§wÇá]VÞèû×¨ch%X[\x0004Ü\x0003`¼N%\x000f²\x000fÞ¹yÌü6.{\x0004,\x0011°\x0006À¬ÛJv\x001f¸·å·KøÉÒÌ%GÀ%\x0002®\x00010§îmqoË+o9\x0014eí\x001e\x0001\x0000¸î\x00010+¨§îmqoë+o×9\x0014uiæª\x0011ps\x0000Ì2ð©¤{[ÝÛúÊÛu\x000eE]û¤FÀ-\x0002î\x00010kÙ§îmuo§wÞC1-ÍÜö\x0008X"`
Y?to'÷vzåí6bZ¹å\x0008¸DÀ5\x0000fWáTÒ½ÜÛù·[_\x0019ØbXÉ7Gã\x001aÌ\x001eÆ)Íý\x0015ú4çk¿`ø	Ü¦~fóÃÌµÃ_{Þµ\x000b\ëâµR\¹sEÓeßK§wÃ6çF.+íû\x001e\x0001K\x0000Ì¦Ï)÷¥@ÿj`\x0016óo|ô«¿Ëò¾Ïiñ\x0000Î\x00010;RìÅ£¤è;%æ*ËêM¯\x0011p\x000bÙ+;\x0005/>¸½¨Ö`N£²|î#\x0000\x001e{\x0000Ì.Þ)¸;£ÞÖ\x001a9`\x001fr\x001a\x0001§\x0000ýÅSpwÆQÿyÖ`Ö]k\x0000ÌÎç)¸;£¾Kæ1GëCu®GÀ#\x0000fOö\x0010¼¹3Ú»LÆº=3zH8	¡5n\x001e?Íýq¯º}£Ä\x001c±ëê\x0018HÐ%n\x001eBÍ]r/¾}£Ä\x001c´ëÚ\x0017èÐ=ö(êîþ.¥eã¶¯3Oö\x0010Z"è½{\x0014uwIÕ"sÜuòI
¡s\x0004½w¢á.\x0019/\x0013[æ¸\x001dëä\x001aB·\x0008z\x001f\x001eEÃ]2^&¶Ìq;ÖÉ'#Ö=Þ¯\x0013¯\x0017æìãWJ|íøðs¥dSü=¡Åh²ßÎøß$i¾NK»\x000fü<[ü=¦ú\x0011½ú+NspspspwpwðpðpðYØt}ú2õøÁËÒf9.\x0011´xQRü%GöûR"û'ß×¯¾uÆO=¡gt\x000f¡G\x0004=µx\x001eÑâ\x0015Lñ*ø x¹Oä¾|´ÚÔ1â×GKA5N!t Ekêâ5?[§ý\x001bÝçÐ<ªhßËWCè\x0016B÷\x0008ZôÌxñ×}ñÂè[¿Ï\x0001ªkkç=\x0010Z#hQ÷»W8Ä«¢/ýç¸Lkkç\x001cB\x0010ºFÐÜï^Ô\x0011/\x0001Jzé÷¹Å$éÁ7=\x001e\x0011ôÜ"zBKr¿{\x001dK¼\x000e(é¥ßç>äµµçFÓ#:Ð9ì~Ïî÷ì~Ï/ý>7$?ø¦Ð-î\x0011´ø\x0001J¼ü'Ùýßú}Ë²¶öÜrzDK\x0008­\x0011´øQûÝ«pR^ú}n;IY[{î;=¢K\x0008]#hñ2£xÙNü¼,÷/é¾Ñ}Ëúà\x001eB\x0008zî\x001d=¡¥ºßýÍ@¼à'\x001f
~\x001fu\x001bPòP;Pè\x0014Bç\x0008Z¼B(^!ê~¯/ý>w¡¤=ø¦Ð-î\x0011´øk4÷»\x0017ê¤½õûøú\x0016ÔÖ\x0006[7h	¡5N\x0011´xéR¼\x000e(þ,^\x0010\x000f\x0005ÁV;_K¯w¯ëýã:_'ÓëvY®
üÚÍ®¥ýZç®¤¿2à
KÕÇ×ô¹ç$\x000f¥Å¹sô\x0016/DÊú£\x001cÅÉ/ôoïÛ\x000feÂ¹áôî!ô Å\x000bâ\x0005Ké\x001e;ýÃ"óIý¹ù$cÚs\x000bé\x0011­\x0011´x\x0001H/\x001bã^ú¬Ärc]»Hè\x0012A\x0017¯dxzÛGÞß(1/àGÑð{±Z\x0008Ý#hñÂýøä\x001cÜ¾\x000fÿF)u__=·\x001eÑ\x0012@ów1§ìÙ\x0007·ÏJ>*¡s\x0017J×ßæéÜJzDç\x0000?Ø9e¿\ò.±uîB©,OçVÒ#º\x0005Ðü%Ñ!»×÷TÞ%¶Î](eòéÜJzBÏ­¤\x00074âtÊî.w­s\x0017Je|:·\x001eÑ)æo¯\x000eÙ½ô¦ú.±uîB©®Sun%=¢k\x0000Í\x001f²»Kî_\x0007~£Ä\x001c·ë\x000fótn%=¢G\x0000Í_«²_.yØs\x0017J×Å6U	¡5æÏè\x000eÙ½§éebÏ­\x001aMëT[5è\x0012@ó÷}§ìîô2±o­\x001aMël[5è\x001eB\x0000¿T<õ¢úá_ó½_üq¯\x0017ïáI¿Î:~úö¾­xïSý{}õzÛG½\x0007¢þ³z\x001f@½:®þ²¢^@Õ©\úíÛÎM)ÍëÎ³Þ¿z´Ñ~ ûµE«y½>Ì=§\x00074ñyzãÞ7ü,ÐQ\x000f_òé¢ãg²sê>t¹o'ÉÎ9úù«½ÿ\x0003_ì5\x0004
endstream
endobj
3526 0 obj
<<
/Type /ObjStm
/N 298
/First 3049
/Filter /FlateDecode
/Length 3592
>>
stream
x[Ëª4·\x0011Þ§è7ø%J%18l²1vv!\x000b\x0018\x00130q0\x000e8o¯ª[JkZ£nÍ:=¥RÝ/j\x000f\x001c7·ùÀ¼E¯ÓEÿêGV\x0000\x001f\x0012\x0015([ð\x000c ¹-$ÅÅ\x0007¹ @Ø(*r¢rQ n\x000c\x0019t%)6\x000e,\x001b\x0003\x000f@Þ3ä²%V&Äm©(²øMH9°IVd¡-\x0007eC\x0018\x000cÚ¸\x0015¯Ë#o%) ûxÛU°ÖgåQô\x000bÛwÿW?2ö"o\x0002â\x000bJ\x0006dôJ7cÈºU\x0006)vÊX\x0006e6ý¨rØ4!p2\x0015©ÄÉtT,¦¤\x0002d1-\x0015ìMM\x0005ä³é©\x00009¢
ñ¬\x0017SU-8ã¹d@¦¬¢ÚWm\x0011\x0018\x001dT\x0004ç\x0001é2µB\x0008ª0r\x0004H!\x0017·@ª2r\x000cHlEÚBô^!PÉa7v¦u<cVz°>T¯ÊÁxn
Ã\x001e9(\x0007\x001e\x001cdØ\x0001\x0010v+Á ìVT»\x0004ñÁ®õ	ú*\x001blmÞk+
 U,\x0005·\x0011XU\x0008\x001e¥¦\x0006\x0004R\x0014@ð)2N!\x000cEg+°G*oÀ\x001e±Ø
ìÁ¤òÂ(ÄÆ3Ø¥\x0014+Â\x001eI-
ª\x001b¡\aK\x0012µ4\x0011ö\x00105\x0005\x0000åh+°G6\x0007!ìQ­À\x001eækDyÎÛ\x0002È´eÑ;}\x0016\x001d 6màYp
Å\x0000\x0007E¿Ä·\x0000ð\x001dÕ"\x0001RW¥¶L£\x0010/&Ó(\&7¼¨Ñ¤ÒB1íý³:<1v(A¿eÐÛùx¼ó\x0008\x001eeïl\x0003Ä¶Â#<£ê\x0002\x0006cs}ÂFL¦QÄ>i\x0014Í\x000c\x0002=\x000bm5\x000e³ñ§AÎ¦elÄÉÛ·\x0001ñ¢/æ\x0019\x0008k¶è $\x0001JWÀìÙ ìQre\+¸\x001bb\x0010ú-\x0004¢{äI÷\x00127îÁn
¤{@9ÉR\x0002ÁÃ\x0013u
\x0012uá)\x001a\x001eþMÑð\x0010àAÌ#\x0011ï)G"¼Ò.\x0011â\x001d&2\x0008ßJR\x001f§¬k#"5eõpx
\x0012z}_sbàPb±\x001dá¥P\x000bxðC±¼\x0015¡v	ð\x0014¯iTÅ\x000e2Å\x0013\x0004\x00146¯B\x000b«^ \x001caM@\x0004G¨^ \x001c0¥R"§\x000f#\x001f­Àn?M³ÅxÆÚ¢ÚÕ@¢9*Â\x0014Ùi`<[\x001cG,{ã\x000f¡ý.eAÖ8F\x0014\x0000#¥fã\x000cÕi¼& lY(Â\x0019r\x0014{´Îê/\x0011\x001f`Ê¨`¤\x001a5rJ\x0005ÁS±\x0015ØMÔ/@ê\x0007\x0011Î³FTD^ÈÙ:LK°µà Øn\x000808>+\x0017MÏ\x001eõ$(\x0015P<\´è£ EÙâVë\x0001ô\x000fÄR¸7 eE¹-Lö\x000cE­n \x0014JRe0<¥$
\x0014ë\x0016\x0001·°Vì5ZJV!\x0019ÞS²\x001auo\x000bdõ¼R²­\x0000²s*\x001b«\x0008Îí dkOEAuK{\x0017¼*¯ ªÕ\x000f¦{¤ ÛS¥«îáo\x0017£=Uº±\x0015;Ç&<g\x001b±:Kê´æsÎr+kÕs\x0016â¬eÏ	ÛSÝÍJ k\x0004»\x001cí©î=ÕÝÊ.Ò-Ùv\x0003]¯v\x0000ÖóàU_\x00084o\x001dO\x001a\x0000V¿\x0000\x0006+ýö\x0014,ö\x0014\x000b¼	ÔvÞ\x0004JZA¼	tí®9ó3o\x0002YSâM ä\x0007\x0013(©Ãz\x0013(éÿþ\x0010HqM dS¦5\x0012¤2\x001d\±§Zæ½\x0006¦eÆà³Ñ\x0015ëP¢v\x0013JAÛ!oE+hUÝy
\x0001*]BJ×\x001c\x0011ùNAU­å§p8 µ_ê\x001aâ¬õQºâöV\x0014dëqì©µ\x001dÎîý>õÖ\x001eèw²÷\x000clíÍÞ\x0016ØS²\x001e@;Då\x0014qÎ
ZÕV­[+DÖ=ÛR¿7\x0016VN$ì1*®\x00153usÙkØþÔÊAQ1Éä\x0016kk¦[±,mìéM¬a
{\x0005°§É¼ê!ì9[e³²VÔBÅT1²'96P,)diIÓ·e#\x0013Ó_P\x001be\x0012k\x0008÷D¦\x0012Ë¢dÂ«2¢\x0015\x0019Ñ\\x001dc6Pé²2%V\x001b,ÆE±â.¦ºU4ëª\x001eÊ1\åAÔÜ¢-FÌÑ@ÝÍÂIÿhádÝM,Y>>¾úêãË·¿Â;\x0008
ÿwûøòýöå/üøòíÞBãÙÇ×_4Ä@iÇùvGAP/ßþ\x0000½`Û\x0000ñ¬ôdó
YyH6wd»![\x001e-=Ù0'ðlt=ÙxCö¡É¢ïÉÞ,=4Y\x000c=Ù\x001b¥&Ô\x001b¥&±'{c2yj2Þq¾ÿ÷\x000fÿ:(O­éªçãÆÆb6Þ\x0007Ü'\x000ciò?VD9\x0000v\x0015\x0008\x0015¨8{ø¶k!Òº¹asfêf¦Î&ÏÁ¦ÊeÍU\x000b}¸Üh!]< _­§îòØñ1Ç¶c]Ì<p\x0011CÜGt¦9ý\x001c\x001eí#:ó
Ùøl\x001fÑùÆ*ù¡U¸è\nÈædû.~N¶¸d¹'{c²òÔd}Ü\x001b§&ë\x0003©Ü¬<5Y_7ËÉÊSuá¦'U3²z¦õlr=Ù¹ÉôXì\x0019YßLOÖ
/IJgYJÔó1·±æYÒÃ¼'\x000cÕôÛò_KT-µ´dÐÂ·\x0005\\x000bæÔÍ
ã4S7ã4u6y¦%ãÛ¾úz×F9Ô÷§þô_<£¿Õ_|U¸¿YÐ¥\x001bl;\x000cÝ%ñWÇÒ¾+ýÔÓ÷\x0000zú¬ôdç}È>#{²ó>O\x000fuísA¸Q²¿öyC²Òç0ïóôhù\x0019Ù>\x0017\x001b&Ð½1Yxh2é3F¸1Yxh2é*®\x001eÏÉ>5Y\x001fntc2zj²>ÊèÆdôÔd}ÑÉè©Éú(£\x001bÑS×Üw,s\x001f?sl{Í±ç¾øÌ*5¶´×\x0012UK--\x0019´ðm\x0001×B¤9usÃæ8ÍÔÍ8MMÛù$û^m7%¦\x001cj(rììâ±³¯ÕØ·\x001akÊ\x0014KU@­ñ\IþðË?þ»3qÕgé\x0004úáï?ï\x0015\x0006®û\\x0013çsj¦%ì¸Í\x000bØö\x001aìÐJ5g\x001dmõ\x001dØÿ¥ÿñ÷ßþþËï\x0007ÍÁh|l´cóëoï5Õg\x000e¾\x0018YÂÎKØe\x0005»¸%l¿m/\x0014\x000fo­aÆÕ.õ8¸ötÞØG)Ý3»\x0014zMf<\x001dL0Eõ"ÎÇ\x0018ª 48Y£4¢ß;rº\x0010ÒuB\x0018­6çteïP¯¤WÍ¤ÙªóP:ª¦\x001a{?;XtNòÓdSäÂÐ´¢aìUySÿRÍ\x00002è¹÷3Á\x0017ú}$Ý»<àJ¶2Ú(ö¦+i\x000cµ¯¹9â<öµ\x0018CSÉ(¦äi]ÀhÖkf:^bx^Â¦\x0005l{aHZEÎg1Îd4È\x001eôo\x0013	FõW\x001bäiÓaµcm×\x0008\x000eö¯ç-t\x001c\x0002öôû§Þy\x0001Û®-\x001cÜ\x000c\x001aò\x00017U¾Fºwêý4ñ£××5bê4Í£	|æ/åÏ/M_*^\x001aò§ÒåÐãùRúüÒÏk>¯aZÓðî°µ\x0015)µ¬ë\x0011Þ»9#:c.b%b¨ÈD\x0015\x0015\x0018'ß<j4»\x0003÷yòíËR§!ï°ý\x0012vXÂ¦\x0005l»tX£¶õ¬JÍùå<ÒS}\x0019¥¨ó¹û,Õû®¯ó³aòe\x0005;¸\x0005l»Nu8 WàM\x001cÝ5ÇVú÷"\x0007ß³5/\x000fÑ½Ñ{t~'\x000f§Ltî\x0014ý´\x001d¥@KØq\x0001Û®íêö5¨}|#²\x001ft½\x0007ý\x0007"sÏÖüd(vç¯\x001d\x00132ÂN\x000fH=\x0013Ó,`Û»#Oú7¼á²ò÷>úæ¬Dn	Û/`ÛÁCÒTwa\x0012\x0006\x0015à /2õ®L7®LoÚáH#Ç¥g[\x0013´r\x001c ½ÔÕó¦vÒÆ÷6\x001e¶á£5ä­"¶¼Ý²YË(-Î¯7Çiêl"\x001dêùá§\x001fÃQp/üw~Àç«CÁù\x001d\x0007é®£|¾æ3¢Þ\x0004\x0005§k\x0001{}\x0007Èç³ôÈ\x000c7.àò\x0002nZÀµ®fF®Ó+×Ë",oõ4é8]gº¦­Qÿxí\x001egº=-¼vç7Fé²\x0015Ë\x0014×nê¥ÞÞWl~ µb¾&ÜðÜ÷,e\x001cVi\x00059® ó
rZA\x0015ä¼\\x0016û>ò\x000eyÅaÅaÅaÅaÅaÅaÉ\\x0014×\x0013\x001a®G\x001d\GHÎ±\x0002\ËêI
çF§f·:xr\x001du¸TÊµ\x000er\x001d~¸\x000e?\Þ\x000c\x0000\x0007Õÿî>)×Ó¤Ð÷]\¦JìÛ®;d¿\x001cVi\x00059® ó
rZA\x0015ä¼¼bÁ¸bÁ¸bAû\x001dyvª,©N½©ÞüIµ\x001dLu\x000eNõ%irRFç\x0008°T§¸T_¦îºÍ)xô'\x0017\x0003Î\x001e\x0006O\lÍúûÊÉÏËoz7z&?h\x0003Ø\x0006ô·öÀWÓ
²¬ ç\x0015ä²l¿Ù}¤\x0015)T¯©~©x)¼5É`"8¶~Ðq½8Íõ\x001d\x0011×kÒ\¯us}ãÁÒJK+$-\x0016çWët¬uFJf$q§If08{Ó¡\x001b\x001cÅõÓ
å7\x001eâ^\x000e=ÎWþ.¹¸2Û¦H9\x001f\x000fXòofj\x0019c_gêÆÎùëû\x001bæ_P çrEO½¬S\û=9\x000c®ÓÉ \x0003uñ,aªÉ¼k?üÚ9	×\x0017¸#Nªlô±â»cÅõÌìõæSÅy¯T78¿ümGýâ\x0007ã©t×\x001dëQÿÕ#N£ZUÐÜT~\x00059¬ K½K%A*ðæ\x001a!Â (
\x0005~½®!ç\x001b£\x0003«N\x001bd©ïj®×*dpÌå/EódÕÖ
²PuÏÁÕ¼!;¯7$¦y¡\x001f?ï¥ÞxîØK¸ÄiègÖ\x001bdû\x0001äÁÎõbÅà/ìL½º\x001ftoíç\x0007;×\x0017ôccÕ[Rï\x0014J½úxÈÞví\x0013Óà`6\â"æ©l}\Ìíç¡;;<°|\x001c\¹Ä\x0005Ï-ßÇÅ\x001cÙ~z°3°üK\ðÐÿ\x0003¯ ý
endstream
endobj
3527 0 obj
<<
/Type /ObjStm
/N 275
/First 2822
/Filter /FlateDecode
/Length 3422
>>
stream
x¥[Ë®ä¶\x0011ÝÏWè\x000fo²\x0000Ã\x0003'l\x0006cï,ìd`\x0004pbÃ\x0018\x0003ößçJÓj±ÉÖí¯kØUÅÃzäk.[|ÍyIÿ¯èÿeñ)hoø¯\x0016·¨DXB+$ü\x0012£\x0007dDÐ¢<eÉNyÒ³þTâ¥@\x0000D[$\x0010Õ-5)\x0011*_Z¬$âÒ\x0012yH`5-Ò¸B½JaFÇ?µÕ\x0007Â.àõTÅ\!/Bu\x0010òEü\x0010\x000bAPUòäã\x0002R!Â\x0006,+ú\x0006-+|.8at\x000cªZ¢QB\x000cZ\x0015ü³\x0005\x001dÃ¼­(\x001f(ñ*\x001bàÔBJW\x0004õ\x0001PIUPUÇÒ\x0012×±\x000c©XBÔÜ\x001cd×u,!ùÄ1H¤¢\x0014$²\x0013Rð]¦
\x001a\x0015SÊJô®C«S}·2\x000eç\x0018 a\x000c³5"m0ShM)Ì!QÅ¼R9\x001b@F\x0017r *\x0017¥F]Qó\x0005\x0014Ò$\x0000_9VA\x0015òÀHR*Êúk\x0003Eo5(I\x0006\x0004Z¢\x0017\x001a\x001c\x0010sæl	ZÊ"c¡Õ\x001ab5Ö@	Æ¨:¯!"bcÑ\x0015Q\x001c%À\x001c¥P\x0002\x0011×µ	(z°\x0005·¤à\x00153²#\x0014®7%E¯®­ ²òµ%%ÕpLIç@0¤¤	9Á`n9Öt,,©\x0004\x001dCÆ\x0014
\x0008Í\x001aü¤áØ\x0012ôqJO\x0007$\x0004\x0005|¢c	Z¤\x0010325;¯cx*ÌóNÇ2¨u¬-\x0019aGJ@1²\x001bÂ"\x0007µ)þcRK\x0006PLºS 
2æHêéÌ^Ç*(E¬ÏE\x0011 rä¢^Å\Z\x001c²¬\x0012  ËP\x0006\x0005YMò%ä¦vAdQ¿!|²¨/Ä(\x001cÀäE×V\x0011uÅs\x001dx)Ù#^`Ø¢ùKU%ÓB\x0002ÏÂ\x0002 ø ©¤ »¦$|T\x0018H  +Ì\x0019,O\ÀâÕÑ3\x0002`îÌ±¼TU¢,5(D\x0011P
,6È¬mÄ?U³Q0\x0011ê,ç?P3©\x000fÆAe$Rø£²´>\x0006?(èÓ:(ðB%\x000b¨´ u\x000e\x0014IXÏAúk\x0006%J\x0015ÔRÆ©À3È\x001b"@È#\x0016\x0000\x0013ÁD\x0000o!o\x0000Þw\x0000Þý\x0000ÙÓX@A\x001f\x0013\x000cT]\x001a\x001dà\x0019Me\x0002\x000f£§é<:Î\x0001UFB*,¢MDØg¢ÓU¶\x0005«'\x0005OV[\x0016\x0014 ã¼¬ûµ]°@p(UÙ\x0002\x000f²LlPWXi\x0004Ë\x0012aÒ6á*d69¯¶J"¸Æ\x0012\x001cI\x0006Ð\x0002\x0012Z\
:Ê\x001eü$É&=G\x0019\x000e\x0004I
%\x000eul\x0007 #\x001bRda×.Å¾\x0004\x0012Ös,A#p°cÄ­MÀÑ¯ ©WDG¡\x0017 t4l:¥x\x001f9ZTè4²¬ñ®)\x0000\x0003ÙH®}\x0006³¡¯sÁáö!zÎç ¼ì lÔ`ð$\x0013\x0019X\x001e<Ë\x0014È S0\x001c´3¤Þ¦p\x0018ÄÈUÀñì3HB%)FÏÞàPò¦°Z\x000e$ð¢û9$­ãY=Ðÿ\x001cõ7\x0014UCT@6åÅÄ!Ej`\x000e©)I1]\x0006#25¤Þ\x0012äl\x000cwÄP=Û0Ó8p\x001b\x0003\x001b\x0008my
"°Âa6ªß\x0008\x001a¤®Ù.H8lÐ±\x00124îâº6\x0016n4Â¶uztBb`+l0 ¡7²Ãl$310§crJ\x0006\x0012ÏPF?T\x000c\x001cÍäº¹ñ\x00139[QK2c¥%=nÔý\x001c¢\x0002¤¶xÏÔ¬òÁ'Î&NIêe%\x0002ÉÙD7)Ü\x0019&$\x0006ÉLÛ\x0014ÏÆ¨\x0012Ê8ê\x0019©Å/±@ÔM%·%Å\x0016í\x0018XÍÐ?\x000c$\x0019´i\x000eJ\x000c³å¤$õf\x0006¢góOèYÝ¦çî3±d\x0005­Î©j ró\x0006¢nln°Ò	\x0015úÝ»¯¾z÷þïË?Bûç»÷ß-ï?¼{ÿaÝ\x0013»å#èà_%¿þúÝÎß\x0013\x0007ÉÈ=ôÇUöûoWa¬õ^"ÈÊòÝ¯?üo¡fî\x0008gÈ¬[÷
<\x0005'ú{8¨#8á\x0000gÌ¬ç\x0015N	OÁÁ`³\x0005\x0004#²\x0011öÓ:ë¦ìãª,v°ÆÓÚÒpmé¸¶!³s68\x001dÏ|VOpÆ/G8\x0013Ï\x0017ó|éx¾\x0007§ÞÃ©cÏ\x001fóbÌ¬ç¹\x0015Níx¾\x0007ç\x0017uhÿtÌ1³!78ù)8é\x0017µ\x000eá\x001cóbÌ¬Ã
N{
Eã\x001e\x0007»\x0007öµï³Nó"òbcz\x00087ÚTkÊî\x0018×õ9ÿòË¿ÿÜ4ÆÛPøáÇ?­¼î\\x0007Rº¸1=2>¿
×Ê\x0015æz¹]a\x000bÌÙ]aöWÃ\x0015æx9]`Ö»5¤Ås³ k.Í\³,h\x0016b\x0005GLÜÛ§?>`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=oYflöÒoþ\x0013ñ»üÄiéïíÅ÷âø£Ø8«"Îj\x0007ZòOïÿZ¼ü«Úæ]Õª«\x0003\x001ah
[øy\x0000Wko©±éÏ\x0017%ÿ¶nµ:6+\x001bÇ¶\x0003UZñ\x0003±)Å×Zâ[jl\x001e[ÿóB¼xYÚ(9f\x001f¿ÎïWë\x0007jÖ\b\Rî4kÀ»\x001a^Û	´í\x0006Ú­
Í©Êýgñúa¦\x001aÈ»PrL¾Ü>´\x000f.®B^î\x0002k9\x0013SI>«â³j>«á³§¿Å/mÊ«¯®Ë	ÕuG:[£Ó°&JÙ.3¥ÖâÐë&V¿#ó½©áed|ÁW²\x000e\x001eï¾Ê\x001aËµ_ÉÉÓQ)PÇæVØJ®\x001aÛamè^|Ö´9¢ÐèÔ ¶F´ùo\x0005fHK6L­ø¬Ïjø¬Ïê6]\x001a\x001b×½¶\ºù%v1§ãRÏÉ'Ý!|U:ÊâgråÕTW[]«R\x0013*þPPÒ\x0005ÕO^\x0017?v+¯;: \x001fk°\x0004VVëµª¾Ü"Ö¯ÝrknSc"Æ­¹M²-mÎíæ?-Â¶âÃÔ|VÃgµ|Ö­\x001cHMì*¹m?ÕÀRI<\x001ffà³F6«Ul§*öS\x0015Ë©åTÅrªr!U±ªØ/÷ÅÏ&kc=Ö¸&®¸¦!ÖÍj¬kÙTëµ¬_@µÜ.ø&~÷)»µÕVdÙ¶\x0017¿@.¯«íòyUv\Åç*\x0017ûj*|åz¿,3¡rµ©®+åe|ûñ^Ø¶Ëjiõ£ÿ1æÿ\x0000Î\x000f:!</p><p>endstream</p><p>endobj</p><p>3524 0 obj</p><p><<</p><p>/Type /ObjStm</p><p>/N 328</p><p>/First 3030</p><p>/Filter /FlateDecode</p><p>/Length 3570</p><p>>></p><p>stream</p><p>x[QË%·
}ß_1ÿ cË%\x0008R(ÍCHúVúÒ%\x0014BSB</p><p>é¿ï9s=Íøzâñöa÷ú+\x001fK:¬ñÌÍ)¶}Ë©l%o9ï\x0007>Ò$áªn©âÛ¯RÅ§lYù½n9\x001c¶Iá÷eÊë\x0015(Oßá{Ù7Ý1\x000fXZø}lê¼7\x0013`lVù½n5aØV/e«Äºy¡oÎyX+°F.i\x000bê%±¥}Ç\x0004èv\x0005\x0002¤Ó\x001e¼"[J4©\x0018\x00064ªÔ-qå\</p><p>\x0006\x0015æ\x0015§Ä\x0005\x0018®(\x000c/;\x0015¥ÐÜ\x001d\x0003Ç,\x0005 Â¬®Wl³l¸\x0015«[p\x0016+=\x0003kRu\\x0001zrúÑì\x0006£\x000cÈ±c\x00019°r6 Gð</p><p>,Ù³`ì^ñ\x0017'¤ÄYP7\x0019qèÏ\x001dWh	mÊÔ);f\x001c®!\x000fUèCüW\x000bÆ+8n¤«Ò6ÎrêM ¸âÔºÐþJ?ûN,\x0008Ò¤\x001aÊ	.¼B9¢R@ egNP'ûÎï\x0003\x0003\x0006B$\x000cÈhäMP\x001d\x0003*\x000e÷É\x0011là¢2<"²cÁ¨\x0018è~Ä\x0008ý\x000c
¤SP.¥\x0012\x001e8</p><p>?Ëj\\x0007\x0006?Ë?\x000c</p><p>ÿ0.\x0008÷Á=¼\x0002äZ9\x000bÈ\x000e?\x000bÔ\x0015WÎ\x0002hpjÂ%A.à\x0000(¾9 (;(\x0012¦Qâ÷(Iy\x0005)h\x0001â¬0 \x00054\x0014ò È<èNsw\x000cææ­\x0014*«¥ÀÏð\x0004\x0006ð¨ Å"/\x0004¹W´ò</p><p>-q\x0016³
~&åÅâ\x0008­T&\x000eW\x000fªÀ-qø)I'ÀlÝA\x0000T\x0013¾k1 bÐRû\x0002^\x0001\x000bgozø\x000f1
- \x0018RP!Ç´P1jA°	|¤</p><p>\x0004\x001a¨R1ä \x001a=\x001cT+$
ÈFò\x0011
Z\x0011\x0000ä\x0015fX\x0008;\x0014\x0017¤FâWX"È\x0005rP_V¤
b	VÄò¯á\x000c\x000et³L®Æ¬\x0015h`G4!¦0ÕM\x0010Ô\x0002Û¬À£\x001c4,\x0004ÈfÊEA§)\x0017\x00051ð.\x0016E2qQÈ1\x0000V\x0019\x0000\x0008\«øKæ\x000c\x0000\x0004¹\x001eñ\x0001\x0003\x00169h\x0001·	2\x000e,±d¢ÜírP©sÝêýÊ\x0018dVq·Z\x0010 ø¨\x0005j²²VEx*¬­JoAoÔO8	qXíà\x0013Â,±¨5Q\x0018³ªQ\x0018È¾S80 Eà¬:r\x0014ä£þÂµY+¯Øæ\x000cuE°ù\x000eX</p><p>=\x0001\x0015q2@Òæ\x0019j*f:+±"ÆÙÏÀu¦ÐÉé	\x001f½dî\x000bu@rÚ¤éô¼B'§ç\x0011VÓó qCÔ!¬6¯\¸\x000eUW å\x0019h\x0018\x0018\x0003
Èx\x0005ÈÁØ\x0001Ë\x001eÁ`,[ì\x000c+°\x000c\x0011\x0006£a@5À"ª\x0017¦Wn6GTb·aYRè\x001dGxÁà§×8HÁ\x001f$ÜX@QËq\x0005Õ/¨¦"ÇP\x0005±\x0004ô\x000ecÞÀ#a\x0010Tø:*\x0002@Q¢bA\x0017\x000c~EÉ\x00087^Á¬ > >qìz\x0008\x000eÛ¹í± \x001axäN 1iOÂkÃ¦Ã\x000cÁ»¯%Êq§`åH;k%Ê1\x0015jå\x0005\x0008Á\x0011ü\x001er%Ò±óbåÞ\x0001£Ê\x0000"A\x0006\x0011Ä\x0011R#25¨X\x0013^ãHÇ}¹\x0006#x\x000eäêÄsè\«Å±ë\x00139\x0018¸¨>C#cp\x0002\x000fåÕ\x0019\x001c\x0019GX7±3áv\x0011µ</p><p>îù,«\x0008^ìÕO !Ø9"Ja(Ñ©\x0000yíU\x0018åÄ#¾\x0013ÏÀ®ïÄ3ÐÐÇ¨îL\x0002âUdÓÏz8
½\x0006»\x0016d"FÎÔà\x001a\x0001ý¾O@óÄ\x000e\x000b·\x001a\x0010N>ò\x001e\\x0003(9±çAÅEË²óÛ£yaÀ#\x0018Á'Î.
}\x000e³.sðt¬2s\x001c	È\x0011!s
FKt\x0019Ð\¢\x0008æ'»¡#e#Z.DæJ.Df»âB­Ø¯ 9¢ÿk\x0004ý¼NØi\x0018\x001d(í\x0015ýÇ\x0008Ã¾§¬\x000f\x0018qãdÏrÄo\x0005¬8Û8l\x001fÁö
\x0004f°[£ì°·\x0013f#\x0015û5èRgÌýÂµâÿêDa\x0006uÀê,f\x0018\x001dy+lñß\x001aGGRc
ìÛvÚF3 }\x0001!\x00189Gà(¨_aóÂ> \x0015nAM\x000b+tP?(ÏkD., l:\x000bt°ÙDçüf·Y\x0014ñ\x001dGsiÂ\x0002ÁÆÓ¨ßÑy²R³bam{\x001fÐ3¸\x0006m
vÅ*Ã5"³ðp
\x000f\x001f>ÿüÃgÚþ"ýðÙ·Ûg_øìë£Çß·o0ü~«Çè/>üO\x0012\x0001ÇkâýÀ7¯yþýk¢\x000eâå</p><p>@\x0000ò\x0005À¦Ý	ÖÄ¿yÛ ®Ýú2]?\x000fëç2Y\x0007hS@]\x0001lZ`O\x0006Õn}®_Çõc\x0010ó+ L\x0019¡\x001bÀ¦Õ	ödPtëO\x0019!\x0019\x001dö\x000eqJ\x0014Ý 6µN°'Rê\x0014r$#G2º4å+bTFn\x0010Z'Ø£I](3RY\x0016åíøKrClÌ¥Nm\x0005±©w=z¡Kþ\x0012S\x0005|P@÷\x0011±KgÍ3DM+M­\x0013ìÑ¤.ýuZùUF\x0005Æ\x0002ºÖ)K:²tØÔ:ÁLÊ]þë%\x001dY²\x001bv	mSldé\x000eQ\x001bK¶ÄRîòß¦,ÙÈÝø´Kh²d#KwÖX²5º2aSld©ÞùôX§,Õ¥;Dk,Õ5ºòP§,Õ¥zãÓ®<Ô)Kudé\x0016±±T×XêÊC²TGüÆ§]yð)K>²tX\x001bK¾ÄtåÁ§,ùÈ>®<ø%\x001fYºAlj`&uåÁ§,ùÈR>®<Ä¥\x0018YºAlj`&uå!f,.òtæ¥ÄHCÜ\x0010Û%tL\x001b¹\x0018\x001b¹\x001bÄ¦Þ	öèkþóÈz¦Àp?ÆØ\x0001Ñ;ÄYwÆó\x0015ÄZ'Ø£IÑ) S\x0005Ê¨ÀXö\x000eqÆ\x0012Ïï\x0017\x0010Z'ØIåÿ<þ)0²FÜ!NYJ#K7M­\x0013ìÑ$é\x0014²Fî\x0010K8e),ÝERj,¥5®eBò¥ñlCò
KÖ!NY\x001a\x000f\x0017î\x0010Z'Ø£I]yÈSòÈR¾AìÊÃôxAÆã;Ä¦Ö	öØp4RÛIÉyÀpÞ÷²çÝÜy\x000btÞ7ÍöÙ¡mÝÙ\x000b
Ä¹ë[ÕY¬Ï</p><p>w3Î\x0000<Y;MmæüîÇ¿ÿçeÑÝÙUò»¿ýðñ%é£ó[iüö_ßýó*sïíÊÞôàFÓºh«<_&LÃJ.aõÕ\x001f_\x0013nNád@ÖõTdZÞQË4«%Pu@µ?r=@ Ú:íi,¡Ö\x0001uvÜ%×s	ª\x000f¨S¶Ê\x001a[ñªS¶Ê\x0012[-<Ï:Cà$ítóéÓsñ\x0006Íî°w=Çl=Ç,/4sÚ	dsÁñÌûõÙÌìÎf>þòóß~üåo0/\x0011ûåO?ÿV92ùrdÝþ®³04]\x0017µuÑº.êë¢±,Z÷uÑ´.×Ee]t­ºÎV]g«®³U×Ùªëlù:[¾Î¯³åëlIknDÏâõj¤5;b­\x001aX«\x0006ÖªE;Ö\x000cµêñ:¢;^Py}6¼Ö,ImxµáÕ×\x000e¤5SÒ9]ªÞÙpTÖB\x001do"½*ÞYáÚÚ×Cà¯¿ûþc&R\x0011éJp_\x000fEFÉ+¿z¹'¾Ñ®/ºÛDX:XHeÉk2jÊ\x0013I[¬Ë¾,\x0019ËÝãº\x0007Ñ´.×EßSÍSñ÷®S/7^7âïí¤æ:\x0013_§-­óÖKëÌåuæò:sy¹<0'³|ì\x001e9¨ÌÒ¬{ð úÞÙkVºìë¢ïÍµøy\x0006þ«¸¦xÇÎÌë¢\x001fD\x0007ötªsYGÖuQ[\x0013ýò·Ï¿è\x000eeÿðïÿýÓÇmà:ÏÿÏyñ	óÞÏCÕfÕ¦;¹|\x0010Íë¢ÝÆWg\x0019Ü</p><p>>v¤Ö©\x0007l]ôý\x000eZ}w)éS}cY´;Êy\x0010Më¢y]TÖEí/f¥Cu\x001dy(¤1ÛXµ®!_2I?%\x0003/G\x0016Ç\x0012¶Ï\x0002£;)x\x0010MovÚ^fâ¹Cékï\x0015ÕÒT²üÞÅXê|M@K³bÑÝ¶ÏE¯.®4\x001dßnªõzÿëIõñç\x001aÞ,Ï0#ßßïÜÁ6\x0005OÈî¾§úx*:ãÊÌ8¿?ë©7\x000fSg\ÌóeØ¦à	ùhÜÛmS½dëhtðdYÔeI[¬¯óÇ[é¯ÏÔ>óo8ò\x000eÃ\x001dx©`Cë1qåeÚP÷æ\x000c\Ë^
ù ôÞÖ¸;\x0019O\x0000n3aÿhéî	}UîðATÖEËº¨®Úºh]\x0017õuÑX\x0016íî\x0003\x001fD×ÙÊëlåu¶ò:[y­¼ÎV}D\x001d¿)y}Jû,íSÛ§µÏÚ>½}¶ùí¾·\x0007\x001a^{?ßÛ{òÞ\x001e¨zºß»üæfÁsY¯©Ýí¬§Æ²h÷:×hZ\x0017Íë¢².ZÖEu]ô½oö<\x0013÷ë>ÿz°æró\x0006ØûË\á1è\x001djSí\x0004kâW\x001b;\x001dÖ#FÖ#¦¬GLY²\x001e1Z*·w	<·Ôm¿\x0004ñöî·W'<·R[)h\x000f\x0005½=\x0014ôön·g¡Þ\x001e\x0012z÷ãKÊç\x001bb®¯¼LR¾È§¤|w{ïeV\x0017»Ûû\x0007Q[\x0017­ë¢¾.\x001aË¢ÞÞWñö<ÚÛ/\x000e¼=öÒ8+¿QËMy.kå¹Ý\x001düñÊ×çK§ÚÞ¬í¥ÄÖ´\x001d?|m5çÖÒâ.q×¾¿¾úÀG1\x000cb.}h~ïCãòôûýäz\x0004ö)óÞn\x000cBÊLT×E£å[È=W!ãR\_i\ÅÝ\x0006\x001a>Wcxñ*n~áó¶7ÇåTú\x0006ô\x001aü\x000f¢ÑB9ÊðJÙ\x001eÑ!Û\x001cyø\x001dÐ\x001db÷Ä(ÊÜYeÉYÝ]D\^L¹\x001cÞ\x000e¼Ì\x001ddB¿í¹\x000er\x001e¬ã¯un!»TÑ9=ºFOR:§G§ôü\x0017­þ|\x001e</p><p>endstream</p><p>endobj</p><p>3525 0 obj</p><p><<</p><p>/Type /ObjStm</p><p>/N 295</p><p>/First 2979</p><p>/Filter /FlateDecode</p><p>/Length 3343</p><p>>></p><p>stream</p><p>x[»å¸
Íç+ô\x0007#ïª­9ÙuæràÈËÿ\x001fùàHP-[·)!i±©#¼ARî(cÛ·Q÷-g\dë	\x0017ÝD\x001b®iZqÍ¡Ê¦yàZ7\x001dk[JkßR3ÜØ²m4Ù2h¶oeÇ|\x001a[)À7ÝÚ\x000e6­l-w\ëÖá\x0012Ø\x0002×ÚÖà</p><p>\x001e	÷;xv»ß7Ù\x0015.\x0018àÏ"</p><p>V=c\x0000¾£\x0017È,\x000fà\x000e¤ïu¤F\x0002'è0úØ$ï <v\x000c</p><p>(÷Á\x0000e°\x0002[a:ï 3@¹fÐ\x0019 \M,*-)\x001e6\x000e(÷\x000c:\x0003»1Üw\x001e	\\x0007HmJ6Ýé\x0000ººìûn&UÎÁ¨ k#ÝTs0°F;¤Õ\x0004r\x0018
ÍÁ\x0015s
£Ê9ð(ð\x0005FàQ`IÀ£*çÀ£VÎG\x0013ÎG¥1\x0002®&©G¯6\x0007ò:sà1</p><p>çdKæ\x0006\x0012FÍÇ\x0012\x001c`£Qån°{=|ºAÕ¨\x000e,²v¨Ì\x001dC åÂ9ð(Ô-G¡n	<ªp\x000e<já\x001cx´sÕÏtS§n\x0008¸ÔÍeð\x0018;çÀcdÎ!<wê\x0013F\x0016í;\x0005æ4!Mx$DNT
OåDÕ\x0010µ9Sµ\0*CÔ\x0017s)¦\x0010b+[\x0014aÌªs`Öv\x0013\x0000\x001aäV-\x0018å68\x0007n\x0016J\x0018ÛØ2¬G6nÑ\x001däé9ÁÈs5\x000b\x0002ÛF\x0019#\x0006\x000e´*ÊÀ
Zèï°RIÉ\x0014GÆDç#K¦óá÷\x0019ðl)\x000cNdl)t år¥\x0003ño©\x000c0DciÊ» Ò\x00188°_éb\x0012\x0000R:\x0013\x0000Ê SÑÅ\x000fÌõ­ît\x0016ò¹\x001eÁ\x0004æUÄ(#­«0HÎUw£\x000cµªV\x0000Y[\x0013\x001dÔ®©rÝêá\x0019¨Z¤Áj\x0011£ÔEÜ\x0018e¤~=<L¯Î\x0011kc "³k+F\x0019é_;\x0003\x000cî©	,¯\x0003ù*È<è},\x0001¹LÁêfXÛ\x001c8¬xrD	Ö:5¯b¸µTùDÃ:(¶yËÆÃ\x001ekåxv`Tm}</p><p>­\x0012\x0007µJ\x001cþm8\x0018¢5ãG0¢,p@£íÍ¶\x00178¯Ñö4ï´½en·\x0002á}CîØ]¤ofwáÚÎ\x0005I\x0010 ])Ú\x0016aÑnËoOw±n3lEë\x0008r\x001bG\x0011Ò\x0003bv\x0016c¯\x0016X1jv\x0017iÞò.x4ó¯`\x0011èÝü+HøÞ;ïÚÞ ¼\x000b\x001e\X\x0005i>vêf»ÇNÝ\x0006ÃHauYºÝE\x000f¥n¶É)uÃ"0¸ a#°Ýwÿ9ñ.\x0016÷LÝl¿+Ô
\x001e\x001cº\x0015Û\x000bmAÂÝÏîr£nÅv8êVl§¢nÅ¶ªÁ»¶£$Þå\x0006Â»«?	r\x000f¡v\x000ckÓ\x0002C.Ø¶\x001dI¡TÐü§*\x0017§D\x0015%s\x0010ÀÕ.\x0013Ð¹zÕc·´Åt+×\x001b£ÛåÃ\x0000f\x001f¬\x0006\x00068Rª\x001eL]Ïd5ºÜú ée+¬pÃæV*Aì/%µ4Æ,Ã01\x001d\x0018#}bÛ;\x001cm,úáA{&Êt.=¢ÊvnáþpÚÅò\l\x0005ì\x001euméBÃ7Z¨U·5F(^¯\x0004ð­2BÃ
¡móÊB,©ÔVa\x000cyÐ Ô¦¶Òàj+\x00056oá\x00136¤\x000cv,À"lÖ%'+,\x0000H(ÓX-5Û£D\x0015Ò1âj§Ã.Z	3ñ´\x0016²0q*²TÔfa£Ñ\x0008\x0007=\x000eB\x0018fÊg\x000ftSKM\x0015ìåRÛò1íg\x0018\x0016\x001b5öÉ"\x001dºì6¤5ýÈÝL\x0016Ãf{µ\x0010Ç¾bâX¦¤d¦	0Ìæyµ="e\x001eÑ,FSÉ&\x0005|*,XMdaâTâ,Â\x0010\x000e&+\x0016\x001bcX·¿j\x0001z£±\x001aÍÊ6´\x0008ÂÉN|FG±`h§Ê¶¶\x001blH¬ñÉäI\x0005³\x001eX;3&&±íÐ\x0000\x001b\x0016ZÝTÁ^oòZö`³7ÉÌô9¤fÌ\x001c²Ã3´Y\x0016»­16æn¤v(ÈÃ¬¬æ&\x001cMõÇß~ûñóïÛ?¥þëÇÏ?·üøù\x0007Oìûö\x000bÃÿ Õ8üý÷\x001f\x0017vðXÿëxà\x001fã\x0013iÜ`Ò&º$5æ
É>Ìké\x0015É1¬kå
IÝ'}M²½")\x0007âÏÿýû¿Ä´¥Tÿ*Á\x001ak/VãÕ\x000bI,\x000b\x0008Ïé¼ÖózÎý¼êyÍçõÄ\x0013WO\=qõÄÕ\x0013WOÜ!ý)Ö/?h&ÓÒ:9-ï±ö</p><p>z\Îk½Y´å;úÕ·ËÑ)­\x001e°ý=Ö^\x000f©Ïxèû+é§üéË,O{\x0000+\x0001¬¾ÇÚkþ¡Þ\x0019¿ý»~Ïí\x000fê¦)Îz[\x0003Ø\x0012ÀÖ÷X+T\x001cêéÔOïWÞMS°µ\x0017z\x0000;Þcóþ\x001ek¯±z§wÇéÝñÊ»y</p><p>º±´lÖ\x00006\x0005°ù=ÖEz§wÇá]VÞèû×¨ch%X[\x0004Ü\x0003`¼N%\x000f²\x000fÞ¹yÌü6.{\x0004,\x0011°\x0006À¬ÛJv\x001f¸·å·KøÉÒÌ%GÀ%\x0002®\x00010§îmqoË+o9\x0014eí\x001e\x0001\x0000¸î\x00010+¨§îmqoë+o×9\x0014uiæª\x0011ps\x0000Ì2ð©¤{[ÝÛúÊÛu\x000eE]û¤FÀ-\x0002î\x00010kÙ§îmuo§wÞC1-ÍÜö\x0008X"`
Y?to'÷vzåí6bZ¹å\x0008¸DÀ5\x0000fWáTÒ½ÜÛù·[_\x0019ØbXÉ7Gã\x001aÌ\x001eÆ)Íý\x0015ú4çk¿`ø	Ü¦~fóÃÌµÃ_{Þµ\x000b\ëâµR\¹sEÓeßK§wÃ6çF.+íû\x001e\x0001K\x0000Ì¦Ï)÷¥@ÿj`\x0016óo|ô«¿Ëò¾Ïiñ\x0000Î\x00010;RìÅ£¤è;%æ*ËêM¯\x0011p\x000bÙ+;\x0005/>¸½¨Ö`N£²|î#\x0000\x001e{\x0000Ì.Þ)¸;£ÞÖ\x001a9`\x001fr\x001a\x0001§\x0000ýÅSpwÆQÿyÖ`Ö]k\x0000ÌÎç)¸;£¾Kæ1GëCu®GÀ#\x0000fOö\x0010¼¹3Ú»LÆº=3zH8	¡5n\x001e?Íýq¯º}£Ä\x001c±ëê\x0018HÐ%n\x001eBÍ]r/¾}£Ä\x001c´ëÚ\x0017èÐ=ö(êîþ.¥eã¶¯3Oö\x0010Z"è½{\x0014uwIÕ"sÜuòI</p><p>¡s\x0004½w¢á.\x0019/\x0013[æ¸\x001dëä\x001aB·\x0008z\x001f\x001eEÃ]2^&¶Ìq;ÖÉ'#Ö=Þ¯\x0013¯\x0017æìãWJ|íøðs¥dSü=¡Åh²ßÎøß$i¾NK»\x000fü<[ü=¦ú\x0011½ú+NspspspwpwðpðpðYØt}ú2õøÁËÒf9.\x0011´xQRü%GöûR"û'ß×¯¾uÆO=¡gt\x000f¡G\x0004=µx\x001eÑâ\x0015Lñ*ø x¹Oä¾|´ÚÔ1â×GKA5N!t Ekêâ5?[§ý\x001bÝçÐ<ªhßËWCè\x0016B÷\x0008ZôÌxñ×}ñÂè[¿Ï\x0001ªkkç=\x0010Z#hQ÷»W8Ä«¢/ýç¸Lkkç\x001cB\x0010ºFÐÜï^Ô\x0011/\x0001Jzé÷¹Å$éÁ7=\x001e\x0011ôÜ"zBKr¿{\x001dK¼\x000e(é¥ßç>äµµçFÓ#:Ð9ì~Ïî÷ì~Ï/ý>7$?ø¦Ð-î\x0011´ø\x0001J¼ü'Ùýßú}Ë²¶öÜrzDK\x0008­\x0011´øQûÝ«pR^ú}n;IY[{î;=¢K\x0008]#hñ2£xÙNü¼,÷/é¾Ñ}Ëúà\x001eB\x0008zî\x001d=¡¥ºßýÍ@¼à'\x001f</p><p>~\x001fu\x001bPòP;Pè\x0014Bç\x0008Z¼B(^!ê~¯/ý>w¡¤=ø¦Ð-î\x0011´øk4÷»\x0017ê¤½õûøú\x0016ÔÖ\x0006[7h	¡5N\x0011´xéR¼\x000e(þ,^\x0010\x000f\x0005ÁV;_K¯w¯ëýã:_'ÓëvY®
üÚÍ®¥ýZç®¤¿2à</p><p>KÕÇ×ô¹ç$\x000f¥Å¹sô\x0016/DÊú£\x001cÅÉ/ôoïÛ\x000feÂ¹áôî!ô Å\x000bâ\x0005Ké\x001e;ýÃ"óIý¹ù$cÚs\x000bé\x0011­\x0011´x\x0001H/\x001bã^ú¬Ärc]»Hè\x0012A\x0017¯dxzÛGÞß(1/àGÑð{±Z\x0008Ý#hñÂýøä\x001cÜ¾\x000fÿF)u__=·\x001eÑ\x0012@ów1§ìÙ\x0007·ÏJ>*¡s\x0017J×ßæéÜJzDç\x0000?Ø9e¿\ò.±uîB©,OçVÒ#º\x0005Ðü%Ñ!»×÷TÞ%¶Î](eòéÜJzBÏ­¤\x00074âtÊî.w­s\x0017Je|:·\x001eÑ)æo¯\x000eÙ½ô¦ú.±uîB©®Sun%=¢k\x0000Í\x001f²»Kî_\x0007~£Ä\x001c·ë\x000fótn%=¢G\x0000Í_«²_.yØs\x0017J×Å6U	¡5æÏè\x000eÙ½§éebÏ­\x001aMëT[5è\x0012@ó÷}§ìîô2±o­\x001aMël[5è\x001eB\x0000¿T<õ¢úá_ó½_üq¯\x0017ïáI¿Î:~úö¾­xïSý{}õzÛG½\x0007¢þ³z\x001f@½:®þ²¢^@Õ©\úíÛÎM)ÍëÎ³Þ¿z´Ñ~ ûµE«y½>Ì=§\x00074ñyzãÞ7ü,ÐQ\x000f_òé¢ãg²sê>t¹o'ÉÎ9úù«½ÿ\x0003_ì5\x0004</p><p>endstream</p><p>endobj</p><p>3526 0 obj</p><p><<</p><p>/Type /ObjStm</p><p>/N 298</p><p>/First 3049</p><p>/Filter /FlateDecode</p><p>/Length 3592</p><p>>></p><p>stream</p><p>x[Ëª4·\x0011Þ§è7ø%J%18l²1vv!\x000b\x0018\x00130q0\x000e8o¯ª[JkZ£nÍ:=¥RÝ/j\x000f\x001c7·ùÀ¼E¯ÓEÿêGV\x0000\x001f\x0012\x0015([ð\x000c ¹-$ÅÅ\x0007¹ @Ø(*r¢rQ n\x000c\x0019t%)6\x000e,\x001b\x0003\x000f@Þ3ä²%V&Äm©(²øMH9°IVd¡-\x0007eC\x0018\x000cÚ¸\x0015¯Ë#o%) ûxÛU°ÖgåQô\x000bÛwÿW?2ö"o\x0002â\x000bJ\x0006dôJ7cÈºU\x0006)vÊX\x0006e6ý¨rØ4!p2\x0015©ÄÉtT,¦¤\x0002d1-\x0015ìMM\x0005ä³é©\x00009¢</p><p>ñ¬\x0017SU-8ã¹d@¦¬¢ÚWm\x0011\x0018\x001dT\x0004ç\x0001é2µB\x0008ª0r\x0004H!\x0017·@ª2r\x000cHlEÚBô^!PÉa7v¦u<cVz°>T¯ÊÁxn</p><p>Ã\x001e9(\x0007\x001e\x001cdØ\x0001\x0010v+Á ìVT»\x0004ñÁ®õ	ú*\x001blmÞk+</p><p> U,\x0005·\x0011XU\x0008\x001e¥¦\x0006\x0004R\x0014@ð)2N!\x000cEg+°G*oÀ\x001e±Ø</p><p>ìÁ¤òÂ(ÄÆ3Ø¥\x0014+Â\x001eI-
ª\x001b¡\aK\x0012µ4\x0011ö\x00105\x0005\x0000åh+°G6\x0007!ìQ­À\x001eækDyÎÛ\x0002È´eÑ;}\x0016\x001d 6màYp</p><p>Å\x0000\x0007E¿Ä·\x0000ð\x001dÕ"\x0001RW¥¶L£\x0010/&Ó(\&7¼¨Ñ¤ÒB1íý³:<1v(A¿eÐÛùx¼ó\x0008\x001eeïl\x0003Ä¶Â#<£ê\x0002\x0006cs}ÂFL¦QÄ>i\x0014Í\x000c\x0002=\x000bm5\x000e³ñ§AÎ¦elÄÉÛ·\x0001ñ¢/æ\x0019\x0008k¶è $\x0001JWÀìÙ ìQre\+¸\x001bb\x0010ú-\x0004¢{äI÷\x00127îÁn</p><p>¤{@9ÉR\x0002ÁÃ\x0013u
\x0012uá)\x001a\x001eþMÑð\x0010àAÌ#\x0011ï)G"¼Ò.\x0011â\x001d&2\x0008ßJR\x001f§¬k#"5eõpx</p><p>\x0012z}_sbàPb±\x001dá¥P\x000bxðC±¼\x0015¡v	ð\x0014¯iTÅ\x000e2Å\x0013\x0004\x00146¯B\x000b«^ \x001caM@\x0004G¨^ \x001c0¥R"§\x000f#\x001f­Àn?M³ÅxÆÚ¢ÚÕ@¢9*Â\x0014Ùi`<[\x001cG,{ã\x000f¡ý.eAÖ8F\x0014\x0000#¥fã\x000cÕi¼& lY(Â\x0019r\x0014{´Îê/\x0011\x001f`Ê¨`¤\x001a5rJ\x0005ÁS±\x0015ØMÔ/@ê\x0007\x0011Î³FTD^ÈÙ:LK°µà Øn\x000808>+\x0017MÏ\x001eõ$(\x0015P<\´è£ EÙâVë\x0001ô\x000fÄR¸7 eE¹-Lö\x000cE­n \x0014JRe0<¥$
\x0014ë\x0016\x0001·°Vì5ZJV!\x0019ÞS²\x001auo\x000bdõ¼R²­\x0000²s*\x001b«\x0008Îí dkOEAuK{\x0017¼*¯ ªÕ\x000f¦{¤ ÛS¥«îáo\x0017£=Uº±\x0015;Ç&<g\x001b±:Kê´æsÎr+kÕs\x0016â¬eÏ	ÛSÝÍJ k\x0004»\x001cí©î=ÕÝÊ.Ò-Ùv\x0003]¯v\x0000ÖóàU_\x00084o\x001dO\x001a\x0000V¿\x0000\x0006+ýö\x0014,ö\x0014\x000b¼	ÔvÞ\x0004JZA¼	tí®9ó3o\x0002YSâM ä\x0007\x0013(©Ãz\x0013(éÿþ\x0010HqM dS¦5\x0012¤2\x001d\±§Zæ½\x0006¦eÆà³Ñ\x0015ëP¢v\x0013JAÛ!oE+hUÝy</p><p>\x0001*]BJ×\x001c\x0011ùNAU­å§p8 µ_ê\x001aâ¬õQºâöV\x0014dëqì©µ\x001dÎîý>õÖ\x001eèw²÷\x000clíÍÞ\x0016ØS²\x001e@;Då\x0014qÎ</p><p>ZÕV­[+DÖ=ÛR¿7\x0016VN$ì1*®\x00153usÙkØþÔÊAQ1Éä\x0016kk¦[±,mìéM¬a
{\x0005°§É¼ê!ì9[e³²VÔBÅT1²'96P,)diIÓ·e#\x0013Ó_P\x001be\x0012k\x0008÷D¦\x0012Ë¢dÂ«2¢\x0015\x0019Ñ\\x001dc6Pé²2%V\x001b,ÆE±â.¦ºU4ëª\x001eÊ1\åAÔÜ¢-FÌÑ@ÝÍÂIÿhádÝM,Y>>¾úêãË·¿Â;\x0008
ÿwûøòýöå/üøòíÞBãÙÇ×_4Ä@iÇùvGAP/ßþ\x0000½`Û\x0000ñ¬ôdó
YyH6wd»![\x001e-=Ù0'ðlt=ÙxCö¡É¢ïÉÞ,=4Y\x000c=Ù\x001b¥&Ô\x001b¥&±'{c2yj2Þq¾ÿ÷\x000fÿ:(O­éªçãÆÆb6Þ\x0007Ü'\x000ciò?VD9\x0000v\x0015\x0008\x0015¨8{ø¶k!Òº¹asfêf¦Î&ÏÁ¦ÊeÍU\x000b}¸Üh!]< _­§îòØñ1Ç¶c]Ì<p\x0011CÜGt¦9ý\x001c\x001eí#:ó
Ùøl\x001fÑùÆ*ù¡U¸è\nÈædû.~N¶¸d¹'{c²òÔd}Ü\x001b§&ë\x0003©Ü¬<5Y_7ËÉÊSuá¦'U3²z¦õlr=Ù¹ÉôXì\x0019YßLOÖ
/IJgYJÔó1·±æYÒÃ¼'\x000cÕôÛò_KT-µ´dÐÂ·\x0005\\x000bæÔÍ
ã4S7ã4u6y¦%ãÛ¾úz×F9Ô÷§þô_<£¿Õ_|U¸¿YÐ¥\x001bl;\x000cÝ%ñWÇÒ¾+ýÔÓ÷\x0000zú¬ôdç}È>#{²ó>O\x000fuísA¸Q²¿öyC²Òç0ïóôhù\x0019Ù>\x0017\x001b&Ð½1Yxh2é3F¸1Yxh2é*®\x001eÏÉ>5Y\x001fntc2zj²>ÊèÆdôÔd}ÑÉè©Éú(£\x001bÑS×Üw,s\x001f?sl{Í±ç¾øÌ*5¶´×\x0012UK--\x0019´ðm\x0001×B¤9usÃæ8ÍÔÍ8MMÛù$û^m7%¦\x001cj(rììâ±³¯ÕØ·\x001akÊ\x0014KU@­ñ\IþðË?þ»3qÕgé\x0004úáï?ï\x0015\x0006®û\\x0013çsj¦%ì¸Í\x000bØö\x001aìÐJ5g\x001dmõ\x001dØÿ¥ÿñ÷ßþþËï\x0007ÍÁh|l´cóëoï5Õg\x000e¾\x0018YÂÎKØe\x0005»¸%l¿m/\x0014\x000fo­aÆÕ.õ8¸ötÞØG)Ý3»\x0014zMf<\x001dL0Eõ"ÎÇ\x0018ª 48Y£4¢ß;rº\x0010ÒuB\x0018­6çteïP¯¤WÍ¤ÙªóP:ª¦\x001a{?;XtNòÓdSäÂÐ´¢aìUySÿRÍ\x00002è¹÷3Á\x0017ú}$Ý»<àJ¶2Ú(ö¦+i\x000cµ¯¹9â<öµ\x0018CSÉ(¦äi]ÀhÖkf:^bx^Â¦\x0005l{aHZEÎg1Îd4È\x001eôo\x0013	FõW\x001bäiÓaµcm×\x0008\x000eö¯ç-t\x001c\x0002öôû§Þy\x0001Û®-\x001cÜ\x000c\x001aò\x00017U¾Fºwêý4ñ£××5bê4Í£	|æ/åÏ/M_*^\x001aò§ÒåÐãùRúüÒÏk>¯aZÓðî°µ\x0015)µ¬ë\x0011Þ»9#:c.b%b¨ÈD\x0015\x0015\x0018'ß<j4»\x0003÷yòíËR§!ï°ý\x0012vXÂ¦\x0005l»tX£¶õ¬JÍùå<ÒS}\x0019¥¨ó¹û,Õû®¯ó³aòe\x0005;¸\x0005l»Nu8 WàM\x001cÝ5ÇVú÷"\x0007ß³5/\x000fÑ½Ñ{t~'\x000f§Ltî\x0014ý´\x001d¥@KØq\x0001Û®íêö5¨}|#²\x001ft½\x0007ý\x0007"sÏÖüd(vç¯\x001d\x00132ÂN\x000fH=\x0013Ó,`Û»#Oú7¼á²ò÷>úæ¬Dn	Û/`ÛÁCÒTwa\x0012\x0006\x0015à /2õ®L7®LoÚáH#Ç¥g[\x0013´r\x001c ½ÔÕó¦vÒÆ÷6\x001e¶á£5ä­"¶¼Ý²YË(-Î¯7Çiêl"\x001dêùá§\x001fÃQp/üw~Àç«CÁù\x001d\x0007é®£|¾æ3¢Þ\x0004\x0005§k\x0001{}\x0007Èç³ôÈ\x000c7.àò\x0002nZÀµ®fF®Ó+×Ë",oõ4é8]gº¦­Qÿxí\x001egº=-¼vç7Fé²\x0015Ë\x0014×nê¥ÞÞWl~ µb¾&ÜðÜ÷,e\x001cVi\x00059® ó</p><p>rZA\x0015ä¼\\x0016û>ò\x000eyÅaÅaÅaÅaÅaÅaÉ\\x0014×\x0013\x001a®G\x001d\GHÎ±\x0002\ËêI</p><p>çF§f·:xr\x001du¸TÊµ\x000er\x001d~¸\x000e?\Þ\x000c\x0000\x0007Õÿî>)×Ó¤Ð÷]\¦JìÛ®;d¿\x001cVi\x00059® ó</p><p>rZA\x0015ä¼¼bÁ¸bÁ¸bAû\x001dyvª,©N½©ÞüIµ\x001dLu\x000eNõ%irRFç\x0008°T§¸T_¦îºÍ)xô'\x0017\x0003Î\x001e\x0006O\lÍúûÊÉÏËoz7z&?h\x0003Ø\x0006ô·öÀWÓ</p><p>²¬ ç\x0015ä²l¿Ù}¤\x0015)T¯©~©x)¼5É`"8¶~Ðq½8Íõ\x001d\x0011×kÒ\¯us}ãÁÒJK+$-\x0016çWët¬uFJf$q§If08{Ó¡\x001b\x001cÅõÓ
å7\x001eâ^\x000e=ÎWþ.¹¸2Û¦H9\x001f\x000fXòofj\x0019c_gêÆÎùëû\x001bæ_P çrEO½¬S\û=9\x000c®ÓÉ \x0003uñ,aªÉ¼k?üÚ9	×\x0017¸#Nªlô±â»cÅõÌìõæSÅy¯T78¿ümGýâ\x0007ã©t×\x001dëQÿÕ#N£ZUÐÜT~\x00059¬ K½K%A*ðæ\x001a!Â (
\x0005~½®!ç\x001b£\x0003«N\x001bd©ïj®×*dpÌå/EódÕÖ
²PuÏÁÕ¼!;¯7$¦y¡\x001f?ï¥ÞxîØK¸ÄiègÖ\x001bdû\x0001äÁÎõbÅà/ìL½º\x001ftoíç\x0007;×\x0017ôccÕ[Rï\x0014J½úxÈÞví\x0013Óà`6\â"æ©l}\Ìíç¡;;<°|\x001c\¹Ä\x0005Ï-ßÇÅ\x001cÙ~z°3°üK\ðÐÿ\x0003¯ ý</p><p>endstream</p><p>endobj</p><p>3527 0 obj</p><p><<</p><p>/Type /ObjStm</p><p>/N 275</p><p>/First 2822</p><p>/Filter /FlateDecode</p><p>/Length 3422</p><p>>></p><p>stream</p><p>x¥[Ë®ä¶\x0011ÝÏWè\x000fo²\x0000Ã\x0003'l\x0006cï,ìd`\x0004pbÃ\x0018\x0003ößçJÓj±ÉÖí¯kØUÅÃzäk.[|ÍyIÿ¯èÿeñ)hoø¯\x0016·¨DXB+$ü\x0012£\x0007dDÐ¢<eÉNyÒ³þTâ¥@\x0000D[$\x0010Õ-5)\x0011*_Z¬$âÒ\x0012yH`5-Ò¸B½JaFÇ?µÕ\x0007Â.àõTÅ\!/Bu\x0010òEü\x0010\x000bAPUòäã\x0002R!Â\x0006,+ú\x0006-+|.8at\x000cªZ¢QB\x000cZ\x0015ü³\x0005\x001dÃ¼­(\x001f(ñ*\x001bàÔBJW\x0004õ\x0001PIUPUÇÒ\x0012×±\x000c©XBÔÜ\x001cd×u,!ùÄ1H¤¢\x0014$²\x0013Rð]¦
\x001a\x0015SÊJô®C«S}·2\x000eç\x0018 a\x000c³5"m0ShM)Ì!QÅ¼R9\x001b@F\x0017r *\x0017¥F]Qó\x0005\x0014Ò$\x0000_9VA\x0015òÀHR*Êúk\x0003Eo5(I\x0006\x0004Z¢\x0017\x001a\x001c\x0010sæl	ZÊ"c¡Õ\x001ab5Ö@	Æ¨:¯!"bcÑ\x0015Q\x001c%À\x001c¥P\x0002\x0011×µ	(z°\x0005·¤à\x00153²#\x0014®7%E¯®­ ²òµ%%ÕpLIç@0¤¤	9Á`n9Öt,,©\x0004\x001dCÆ\x0014
\x0008Í\x001aü¤áØ\x0012ôqJO\x0007$\x0004\x0005|¢c	Z¤\x0010325;¯cx*ÌóNÇ2¨u¬-\x0019aGJ@1²\x001bÂ"\x0007µ)þcRK\x0006PLºS 
2æHêéÌ^Ç*(E¬ÏE\x0011 rä¢^Å\Z\x001c²¬\x0012  ËP\x0006\x0005YMò%ä¦vAdQ¿!|²¨/Ä(\x001cÀäE×V\x0011uÅs\x001dx)Ù#^`Ø¢ùKU%ÓB\x0002ÏÂ\x0002 ø ©¤ »¦$|T\x0018H  +Ì\x0019,O\ÀâÕÑ3\x0002`îÌ±¼TU¢,5(D\x0011P</p><p>,6È¬mÄ?U³Q0\x0011ê,ç?P3©\x000fÆAe$Rø£²´>\x0006?(èÓ:(ðB%\x000b¨´ u\x000e\x0014IXÏAúk\x0006%J\x0015ÔRÆ©À3È\x001b"@È#\x0016\x0000\x0013ÁD\x0000o!o\x0000Þw\x0000Þý\x0000ÙÓX@A\x001f\x0013\x000cT]\x001a\x001dà\x0019Me\x0002\x000f£§é<:Î\x0001UFB*,¢MDØg¢ÓU¶\x0005«'\x0005OV[\x0016\x0014 ã¼¬ûµ]°@p(UÙ\x0002\x000f²LlPWXi\x0004Ë\x0012aÒ6á*d69¯¶J"¸Æ\x0012\x001cI\x0006Ð\x0002\x0012Z\</p><p>:Ê\x001eü$É&=G\x0019\x000e\x0004I
%\x000eul\x0007 #\x001bRda×.Å¾\x0004\x0012Ös,A#p°cÄ­MÀÑ¯ ©WDG¡\x0017 t4l:¥x\x001f9ZTè4²¬ñ®)\x0000\x0003ÙH®}\x0006³¡¯sÁáö!zÎç ¼ì lÔ`ð$\x0013\x0019X\x001e<Ë\x0014È S0\x001c´3¤Þ¦p\x0018ÄÈUÀñì3HB%)FÏÞàPò¦°Z\x000e$ð¢û9$­ãY=Ðÿ\x001cõ7\x0014UCT@6åÅÄ!Ej`\x000e©)I1]\x0006#25¤Þ\x0012äl\x000cwÄP=Û0Ó8p\x001b\x0003\x001b\x0008my
"°Âa6ªß\x0008\x001a¤®Ù.H8lÐ±\x00124îâº6\x0016n4Â¶uztBb`+l0 ¡7²Ãl$310§crJ\x0006\x0012ÏPF?T\x000c\x001cÍäº¹ñ\x00139[QK2c¥%=nÔý\x001c¢\x0002¤¶xÏÔ¬òÁ'Î&NIêe%\x0002ÉÙD7)Ü\x0019&$\x0006ÉLÛ\x0014ÏÆ¨\x0012Ê8ê\x0019©Å/±@ÔM%·%Å\x0016í\x0018XÍÐ?\x000c$\x0019´i\x000eJ\x000c³å¤$õf\x0006¢góOèYÝ¦çî3±d\x0005­Î©j ró\x0006¢nln°Ò	\x0015úÝ»¯¾z÷þïË?Bûç»÷ß-ï?¼{ÿaÝ\x0013»å#èà_%¿þúÝÎß\x0013\x0007ÉÈ=ôÇUöûoWa¬õ^"ÈÊòÝ¯?üo¡fî\x0008gÈ¬[÷
<\x0005'ú{8¨#8á\x0000gÌ¬ç\x0015N	OÁÁ`³\x0005\x0004#²\x0011öÓ:ë¦ìãª,v°ÆÓÚÒpmé¸¶!³s68\x001dÏ|VOpÆ/G8\x0013Ï\x0017ó|éx¾\x0007§ÞÃ©cÏ\x001fóbÌ¬ç¹\x0015Níx¾\x0007ç\x0017uhÿtÌ1³!78ù)8é\x0017µ\x000eá\x001cóbÌ¬Ã
N{</p><p>Eã\x001e\x0007»\x0007öµï³Nó"òbcz\x00087ÚTkÊî\x0018×õ9ÿòË¿ÿÜ4ÆÛPøáÇ?­¼î\\x0007Rº¸1=2>¿
×Ê\x0015æz¹]a\x000bÌÙ]aöWÃ\x0015æx9]`Ö»5¤Ås³ k.Í\³,h\x0016b\x0005GLÜÛ§?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-harcelements-violences-dans-les-transports](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-harcelements-violences-dans-les-transports)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/accueillir-une-victime-de-violences-au-sein-du-couple](https://arretonslesviolences.gouv.fr/je-suis-professionnel/accueillir-une-victime-de-violences-au-sein-du-couple)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-mariage-force](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-mariage-force)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-de-formation](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-de-formation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/femmes-en-situation-de-handicap](https://arretonslesviolences.gouv.fr/je-suis-professionnel/femmes-en-situation-de-handicap)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-violences-au-sein-du-couple](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-violences-au-sein-du-couple)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-harcelement-violences-dans-les-relations-professionnelles](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-harcelement-violences-dans-les-relations-professionnelles)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/violences-sexuelles](https://arretonslesviolences.gouv.fr/je-suis-professionnel/violences-sexuelles)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-mutilations-sexuelles-feminines](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-mutilations-sexuelles-feminines)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
Instances: 9
  
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
<p>The identified library jquery, version 3.4.1 is vulnerable.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/themes/sigv2/js/bundle.js?qobt8x](https://arretonslesviolences.gouv.fr/themes/sigv2/js/bundle.js?qobt8x)
  
  
  * Method: `GET`
  
  
  * Evidence: `{jquery:"3.4.1"`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/js/js_Am3OAZ-3nUhK2DY5Bhi5SOePEcHxDXQQEikmvFa0_lU.js](https://arretonslesviolences.gouv.fr/sites/default/files/js/js_Am3OAZ-3nUhK2DY5Bhi5SOePEcHxDXQQEikmvFa0_lU.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `/*! jQuery v3.4.1`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/js/js_iMfJ9yYpxYKH-7wGiXBMh4l9eVChZ2auWEcZdvUeuxs.js](https://arretonslesviolences.gouv.fr/sites/default/files/js/js_iMfJ9yYpxYKH-7wGiXBMh4l9eVChZ2auWEcZdvUeuxs.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `/*! jQuery v3.4.1`
  
  
  
  
Instances: 3
  
### Solution
<p>Please upgrade to the latest version of jquery.</p>
  
### Other information
<p>CVE-2020-11023</p><p>CVE-2020-11022</p><p></p>
  
### Reference
* https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles/associations](https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles/associations)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 3
  
### Solution
<p>Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive. </p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="user-login-form" data-drupal-selector="user-login-form" action="/index.php/user/login/" method="post" id="user-login-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="user-pass" data-drupal-selector="user-pass" action="/user/password/" method="post" id="user-pass" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-harcelements-violences-dans-les-transports](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-harcelements-violences-dans-les-transports)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="webform-submission-form webform-submission-add-form webform-submission-outils-de-formation-form webform-submission-outils-de-formation-add-form webform-submission-outils-de-formation-node-86-form webform-submission-outils-de-formation-node-86-add-form js-webform-details-toggle webform-details-toggle col-xs-12 col-md-8 col-tbl-8 nocolpadding" data-drupal-selector="webform-submission-outils-de-formation-node-86-add-form" novalidate="" action="/je-suis-professionnel/outils-harcelements-violences-dans-les-transports" method="post" id="webform-submission-outils-de-formation-node-86-add-form" accept-charset="UTF-8" data-webform-id="outils_de_formation"
                                data-component="webform">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-de-formation](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-de-formation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="webform-submission-form webform-submission-add-form webform-submission-outils-de-formation-form webform-submission-outils-de-formation-add-form webform-submission-outils-de-formation-paragraph-415-form webform-submission-outils-de-formation-paragraph-415-add-form js-webform-details-toggle webform-details-toggle col-xs-12 col-md-8 col-tbl-8 nocolpadding" data-drupal-selector="webform-submission-outils-de-formation-paragraph-415-add-form" novalidate="" action="/je-suis-professionnel/outils-de-formation" method="post" id="webform-submission-outils-de-formation-paragraph-415-add-form" accept-charset="UTF-8" data-webform-id="outils_de_formation"
                                data-component="webform">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-harcelement-violences-dans-les-relations-professionnelles](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-harcelement-violences-dans-les-relations-professionnelles)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="webform-submission-form webform-submission-add-form webform-submission-outils-de-formation-form webform-submission-outils-de-formation-add-form webform-submission-outils-de-formation-node-83-form webform-submission-outils-de-formation-node-83-add-form js-webform-details-toggle webform-details-toggle col-xs-12 col-md-8 col-tbl-8 nocolpadding" data-drupal-selector="webform-submission-outils-de-formation-node-83-add-form" novalidate="" action="/je-suis-professionnel/outils-harcelement-violences-dans-les-relations-professionnelles" method="post" id="webform-submission-outils-de-formation-node-83-add-form" accept-charset="UTF-8" data-webform-id="outils_de_formation"
                                data-component="webform">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/accueillir-une-victime-de-violences-au-sein-du-couple](https://arretonslesviolences.gouv.fr/je-suis-professionnel/accueillir-une-victime-de-violences-au-sein-du-couple)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="webform-submission-form webform-submission-add-form webform-submission-outils-de-formation-form webform-submission-outils-de-formation-add-form webform-submission-outils-de-formation-node-107-form webform-submission-outils-de-formation-node-107-add-form js-webform-details-toggle webform-details-toggle col-xs-12 col-md-8 col-tbl-8 nocolpadding" data-drupal-selector="webform-submission-outils-de-formation-node-107-add-form" novalidate="" action="/je-suis-professionnel/accueillir-une-victime-de-violences-au-sein-du-couple" method="post" id="webform-submission-outils-de-formation-node-107-add-form" accept-charset="UTF-8" data-webform-id="outils_de_formation"
                                data-component="webform">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-mariage-force](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-mariage-force)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="webform-submission-form webform-submission-add-form webform-submission-outils-de-formation-form webform-submission-outils-de-formation-add-form webform-submission-outils-de-formation-node-88-form webform-submission-outils-de-formation-node-88-add-form js-webform-details-toggle webform-details-toggle col-xs-12 col-md-8 col-tbl-8 nocolpadding" data-drupal-selector="webform-submission-outils-de-formation-node-88-add-form" novalidate="" action="/je-suis-professionnel/outils-mariage-force" method="post" id="webform-submission-outils-de-formation-node-88-add-form" accept-charset="UTF-8" data-webform-id="outils_de_formation"
                                data-component="webform">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="user-login-form" data-drupal-selector="user-login-form" action="/user/login/" method="post" id="user-login-form" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-violences-au-sein-du-couple](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-violences-au-sein-du-couple)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="webform-submission-form webform-submission-add-form webform-submission-outils-de-formation-form webform-submission-outils-de-formation-add-form webform-submission-outils-de-formation-node-17-form webform-submission-outils-de-formation-node-17-add-form js-webform-details-toggle webform-details-toggle col-xs-12 col-md-8 col-tbl-8 nocolpadding" data-drupal-selector="webform-submission-outils-de-formation-node-17-add-form" novalidate="" action="/je-suis-professionnel/outils-violences-au-sein-du-couple" method="post" id="webform-submission-outils-de-formation-node-17-add-form" accept-charset="UTF-8" data-webform-id="outils_de_formation"
                                data-component="webform">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="user-pass" data-drupal-selector="user-pass" action="/index.php/user/password/" method="post" id="user-pass" accept-charset="UTF-8">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/violences-sexuelles](https://arretonslesviolences.gouv.fr/je-suis-professionnel/violences-sexuelles)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="webform-submission-form webform-submission-add-form webform-submission-outils-de-formation-form webform-submission-outils-de-formation-add-form webform-submission-outils-de-formation-node-82-form webform-submission-outils-de-formation-node-82-add-form js-webform-details-toggle webform-details-toggle col-xs-12 col-md-8 col-tbl-8 nocolpadding" data-drupal-selector="webform-submission-outils-de-formation-node-82-add-form" novalidate="" action="/je-suis-professionnel/violences-sexuelles" method="post" id="webform-submission-outils-de-formation-node-82-add-form" accept-charset="UTF-8" data-webform-id="outils_de_formation"
                                data-component="webform">`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-mutilations-sexuelles-feminines](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-mutilations-sexuelles-feminines)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="webform-submission-form webform-submission-add-form webform-submission-outils-de-formation-form webform-submission-outils-de-formation-add-form webform-submission-outils-de-formation-node-87-form webform-submission-outils-de-formation-node-87-add-form js-webform-details-toggle webform-details-toggle col-xs-12 col-md-8 col-tbl-8 nocolpadding" data-drupal-selector="webform-submission-outils-de-formation-node-87-add-form" novalidate="" action="/je-suis-professionnel/outils-mutilations-sexuelles-feminines" method="post" id="webform-submission-outils-de-formation-node-87-add-form" accept-charset="UTF-8" data-webform-id="outils_de_formation"
                                data-component="webform">`
  
  
  
  
Instances: 12
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "edit-name" "edit-pass" "form_build_id" "form_id" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that the HttpOnly flag is set for all cookies.</p>
  
### Reference
* https://owasp.org/www-community/HttpOnly

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-arlv.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-arlv.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without Secure Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the secure flag, which means that the cookie can be accessed via unencrypted connections.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `TS01cf5a77_26`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_26`
  
  
  
  
Instances: 4
  
### Solution
<p>Whenever a cookie contains sensitive information or is a session token, then it should always be passed using an encrypted channel. Ensure that the secure flag is set for cookies containing such sensitive information.</p>
  
### Reference
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html

  
#### CWE Id : 614
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cross-Domain JavaScript Source File Inclusion
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes one or more script files from a third-party domain.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/accueillir-une-victime-de-violences-au-sein-du-couple](https://arretonslesviolences.gouv.fr/je-suis-professionnel/accueillir-une-victime-de-violences-au-sein-du-couple)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js?hl=fr`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/femmes-en-situation-de-handicap](https://arretonslesviolences.gouv.fr/je-suis-professionnel/femmes-en-situation-de-handicap)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js?hl=fr`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-de-formation](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-de-formation)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js?hl=fr`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-mutilations-sexuelles-feminines](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-mutilations-sexuelles-feminines)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js?hl=fr`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-violences-au-sein-du-couple](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-violences-au-sein-du-couple)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js?hl=fr`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-harcelement-violences-dans-les-relations-professionnelles](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-harcelement-violences-dans-les-relations-professionnelles)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js?hl=fr`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/violences-sexuelles](https://arretonslesviolences.gouv.fr/je-suis-professionnel/violences-sexuelles)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js?hl=fr`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-mariage-force](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-mariage-force)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js?hl=fr`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-harcelements-violences-dans-les-transports](https://arretonslesviolences.gouv.fr/je-suis-professionnel/outils-harcelements-violences-dans-les-transports)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.google.com/recaptcha/api.js?hl=fr`
  
  
  * Evidence: `<script src="https://www.google.com/recaptcha/api.js?hl=fr" async defer></script>`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/themes/sigv2/js/bundle.js?qobt8x](https://arretonslesviolences.gouv.fr/themes/sigv2/js/bundle.js?qobt8x)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/js/js_CUdzpImh63bOY45-ccnKJkqldpZo8v0F4tQJGqJE_-s.js](https://arretonslesviolences.gouv.fr/sites/default/files/js/js_CUdzpImh63bOY45-ccnKJkqldpZo8v0F4tQJGqJE_-s.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab20008e77c3c1de20c9edb0ce51bd1e70187711a91872c22e5b578e350a9f0195f171?type=8](https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab20008e77c3c1de20c9edb0ce51bd1e70187711a91872c22e5b578e350a9f0195f171?type=8)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/js/js_iMfJ9yYpxYKH-7wGiXBMh4l9eVChZ2auWEcZdvUeuxs.js](https://arretonslesviolences.gouv.fr/sites/default/files/js/js_iMfJ9yYpxYKH-7wGiXBMh4l9eVChZ2auWEcZdvUeuxs.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sites/default/files/js/js_Am3OAZ-3nUhK2DY5Bhi5SOePEcHxDXQQEikmvFa0_lU.js](https://arretonslesviolences.gouv.fr/sites/default/files/js/js_Am3OAZ-3nUhK2DY5Bhi5SOePEcHxDXQQEikmvFa0_lU.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/de-nouveaux-outils-disposition-pour-lutter-contre-les-violences-conjugales](https://arretonslesviolences.gouv.fr/focus/de-nouveaux-outils-disposition-pour-lutter-contre-les-violences-conjugales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab20008e77c3c1de20c9edb0ce51bd1e70187711a91872c22e5b578e350a9f0195f171?type=8](https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab20008e77c3c1de20c9edb0ce51bd1e70187711a91872c22e5b578e350a9f0195f171?type=8)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab20008e77c3c1de20c9edb0ce51bd1e70187711a91872c22e5b578e350a9f0195f171?type=12](https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab20008e77c3c1de20c9edb0ce51bd1e70187711a91872c22e5b578e350a9f0195f171?type=12)
  
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sitemap.xml](https://arretonslesviolences.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `must-revalidate, no-cache, private`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/plan-angela](https://arretonslesviolences.gouv.fr/focus/plan-angela)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/violences-conjugales-le-gouvernement-se-mobilise](https://arretonslesviolences.gouv.fr/focus/violences-conjugales-le-gouvernement-se-mobilise)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/la-synthese-de-letude-sur-les-morts-violentes-au-sein-du-couple-en-2019](https://arretonslesviolences.gouv.fr/focus/la-synthese-de-letude-sur-les-morts-violentes-au-sein-du-couple-en-2019)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/de-nouveaux-outils-disposition-pour-lutter-contre-les-violences-conjugales](https://arretonslesviolences.gouv.fr/focus/de-nouveaux-outils-disposition-pour-lutter-contre-les-violences-conjugales)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=43200, public`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.jpg](https://arretonslesviolences.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.css](https://arretonslesviolences.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.jpeg](https://arretonslesviolences.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.js](https://arretonslesviolences.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.png](https://arretonslesviolences.gouv.fr/core/*.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.js$](https://arretonslesviolences.gouv.fr/core/*.js$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.css$](https://arretonslesviolences.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/profiles/*.css$](https://arretonslesviolences.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.gif](https://arretonslesviolences.gouv.fr/core/*.gif)
  
  
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

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles/associations](https://arretonslesviolences.gouv.fr/associations-de-lutte-contre-les-violences-sexistes-et-sexuelles/associations)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab20008e77c3c1de20c9edb0ce51bd1e70187711a91872c22e5b578e350a9f0195f171?type=12](https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab20008e77c3c1de20c9edb0ce51bd1e70187711a91872c22e5b578e350a9f0195f171?type=12)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab20008e77c3c1de20c9edb0ce51bd1e70187711a91872c22e5b578e350a9f0195f171?type=8](https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab20008e77c3c1de20c9edb0ce51bd1e70187711a91872c22e5b578e350a9f0195f171?type=8)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.</p>
  
### Other information
<p>This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.</p><p>At "High" threshold this scan rule will not alert on client or server error responses.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx
* https://owasp.org/www-community/Security_Headers

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `5waQcNOYbFuIgWMqJlLL3fNyljz02cmLAaSarlxM1w6Svyszs67DOM076wJG2QoELyxBY4qov57Q9dG/8YCO3svLmiE=`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_0hHz8SUrag7aEh1DKXBaPRDOUqJ6plYpg3kkXMhm9R8`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_0hHz8SUrag7aEh1DKXBaPRDOUqJ6plYpg3kkXMhm9R8`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000b4573fc60a6627f78dd7f15377f21fdb5a7ac08c46dbbf0f3f6c135f51ca097b0820b6224b0a28004528f5f2a0bbc0a4da4975bf086702f7ca841de7f21e52e5426bfb1007f5627b6e00e06877a8f239200000000200000000`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000d75da85b5497bee46882ddab68886025d02375c7cf7fdfb9af876fecb4111e2e08d2f785270a2800c2e5432115e8bb1b2b5feddfc350a7b2cd9b232588b858fc82f730f0dbbb7427dc82886bd380f9f8200000000200000000`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_0hHz8SUrag7aEh1DKXBaPRDOUqJ6plYpg3kkXMhm9R8`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_0hHz8SUrag7aEh1DKXBaPRDOUqJ6plYpg3kkXMhm9R8`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab20008e77c3c1de20c9edb0ce51bd1e70187711a91872c22e5b578e350a9f0195f171?type=12](https://arretonslesviolences.gouv.fr/TSPD/08eeb285a9ab20008e77c3c1de20c9edb0ce51bd1e70187711a91872c22e5b578e350a9f0195f171?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0o`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_0hHz8SUrag7aEh1DKXBaPRDOUqJ6plYpg3kkXMhm9R8`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/de-nouveaux-outils-disposition-pour-lutter-contre-les-violences-conjugales](https://arretonslesviolences.gouv.fr/focus/de-nouveaux-outils-disposition-pour-lutter-contre-les-violences-conjugales)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_DIRUb-IjDs6XuNJgksyKeFfglZienxMsOamKeCCfPT8`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000de6cf899fa5059edb951c4799665b999662df6ba58fa3cbce24d30235ea19a3908ceb5d40c0a2800a9f5a88f3062d75fb09aabe289adbede92aeb5bcb81f862befbd5b296dde5dfb5751cc2a1b3a4858200000000200000000`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/sites/default/files/css/css_0hHz8SUrag7aEh1DKXBaPRDOUqJ6plYpg3kkXMhm9R8`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�\x0006�pӘl[��c*&R���r�<��ɋ\x0001���\L�\x000e��+3���8�;�\x0002F�</p><p>\x0004/,Ac������ѿ���˚!</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.png](https://arretonslesviolences.gouv.fr/core/*.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.gif](https://arretonslesviolences.gouv.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/profiles/*.js](https://arretonslesviolences.gouv.fr/profiles/*.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.jpg](https://arretonslesviolences.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.css$](https://arretonslesviolences.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.css](https://arretonslesviolences.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.svg](https://arretonslesviolences.gouv.fr/core/*.svg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.jpeg](https://arretonslesviolences.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.js](https://arretonslesviolences.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/profiles/*.css$](https://arretonslesviolences.gouv.fr/profiles/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/profiles/*.css](https://arretonslesviolences.gouv.fr/profiles/*.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.js$](https://arretonslesviolences.gouv.fr/core/*.js$)
  
  
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
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
Instances: 10
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bFROM\b and was detected 122 times, the first in the element starting with: "<!-- BEGIN OUTPUT from 'themes/sigv2/templates/layout/html.html.twig' -->", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
Instances: 2
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected in the element starting with: "<script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/index.php\/","scriptPath":null", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/plan-angela](https://arretonslesviolences.gouv.fr/focus/plan-angela)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000b4573fc60a6627f78dd7f15377f21fdb5a7ac08c46dbbf0f3f6c135f51ca097b0820b6224b0a28004528f5f2a0bbc0a4da4975bf086702f7ca841de7f21e52e5426bfb1007f5627b6e00e06877a8f239200000000200000000";

window.Hmxv=!!window.Hmxv;try{(function(){(function(){var s=-1,s={O:++s,oo:"false"[s],S:++s,_j:"false"[s],OS:++s,s1:"[object Object]"[s],iJ:(s[s]+"")[s],Ij:++s,_J:"true"[s],IS:++s,zS:++s,Oo:"[object Object]"[s],o:++s,i_:++s,iLS:++s,_LS:++s};try{s.Sj=(s.Sj=s+"")[s.zS]+(s._I=s.Sj[s.S])+(s.Lo=(s.si+"")[s.S])+(!s+"")[s.Ij]+(s.iI=s.Sj[s.o])+(s.si="true"[s.S])+(s.lJ="true"[s.OS])+s.Sj[s.zS]+s.iI+s._I+s.si,s.Lo=s.si+"true"[s.Ij]+s.iI+s.lJ+s.si+s.Lo,s.si=s.O[s.Sj][s.Sj],s.si(s.si(s.Lo+'"\\'+s.S+s.zS+s.S+s.oo+"\\"+s.IS+s.O+"("+s.iI+"\\"+s.S+s.i_+
s.S+"\\"+s.S+s.o+s.O+s._J+s._I+s.oo+"\\"+s.IS+s.O+"\\"+s.S+s.o+s.i_+"\\"+s.S+s.zS+s.S+"\\"+s.S+s.zS+s.o+s.iJ+s._I+"\\"+s.S+s.o+s.i_+"['\\"+s.S+s.o+s.O+s._j+"\\"+s.S+s.i_+s.S+"false"[s.OS]+s._I+s._j+s.iJ+"']\\"+s.IS+s.O+"===\\"+s.IS+s.O+"'\\"+s.S+s.o+s.Ij+s.iI+"\\"+s.S+s.o+s.OS+"\\"+s.S+s.zS+s.S+"\\"+s.S+s.zS+s.o+"\\"+s.S+s.IS+s.i_+"')\\"+s.IS+s.O+"{\\"+s.S+s.OS+"\\"+s.S+s.S+"\\"+s.S+s.o+s.o+s._j+"\\"+s.S+s.o+s.OS+"\\"+s.IS+s.O+s._J+s.iJ+"\\"+s.S+s.o+s.o+s.Oo+"\\"+s.S+s.i_+s.S+s.lJ+"\\"+s.S+s.zS+s.OS+
"\\"+s.S+s.zS+s.Ij+"\\"+s.S+s.o+s.O+"\\"+s.IS+s.O+"=\\"+s.IS+s.O+"\\"+s.S+s.o+s.i_+"\\"+s.S+s.zS+s.S+"\\"+s.S+s.zS+s.o+s.iJ+s._I+"\\"+s.S+s.o+s.i_+"['\\"+s.S+s.o+s.O+s._j+"\\"+s.S+s.i_+s.S+"false"[s.OS]+s._I+s._j+s.iJ+"'].\\"+s.S+s.o+s.OS+s._J+"\\"+s.S+s.o+s.O+"false"[s.OS]+s._j+s.Oo+s._J+"(/.{"+s.S+","+s.IS+"}/\\"+s.S+s.IS+s.i_+",\\"+s.IS+s.O+s.oo+s.lJ+"\\"+s.S+s.zS+s.o+s.Oo+s.iI+"\\"+s.S+s.zS+s.S+s._I+"\\"+s.S+s.zS+s.o+"\\"+s.IS+s.O+"(\\"+s.S+s.i_+s.O+")\\"+s.IS+s.O+"{\\"+s.S+s.OS+"\\"+s.S+s.S+
"\\"+s.S+s.S+"\\"+s.S+s.S+"\\"+s.S+s.o+s.OS+s._J+s.iI+s.lJ+"\\"+s.S+s.o+s.OS+"\\"+s.S+s.zS+s.o+"\\"+s.IS+s.O+"(\\"+s.S+s.i_+s.O+"\\"+s.IS+s.O+"+\\"+s.IS+s.O+"\\"+s.S+s.i_+s.O+").\\"+s.S+s.o+s.Ij+s.lJ+s.s1+"\\"+s.S+s.o+s.Ij+s.iI+"\\"+s.S+s.o+s.OS+"("+s.OS+",\\"+s.IS+s.O+s.IS+")\\"+s.S+s.OS+"\\"+s.S+s.S+"\\"+s.S+s.S+"});\\"+s.S+s.OS+"}\\"+s.S+s.OS+'"')())()}catch(_){s%=5}})();var Ss=40;
try{var js,Ls,os=S(319)?0:1,Zs=S(957)?0:1;for(var sS=(S(946),0);sS<Ls;++sS)os+=S(489)?1:2,Zs+=S(631)?2:3;js=os+Zs;window.JJ===js&&(window.JJ=++js)}catch(SS){window.JJ=js}var iS=!0;function I(s){var _=arguments.length,J=[],z=1;while(z<_)J[z-1]=arguments[z++]-s;return String.fromCharCode.apply(String,J)}
function LS(s){var _=75;!s||document[l(_,193,180,190,180,173,180,183,180,191,196,158,191,172,191,176)]&&document[l(_,193,180,190,180,173,180,183,180,191,196,158,191,172,191,176)]!==L(68616527591,_)||(iS=!1);return iS}function l(s){var _=arguments.length,J=[];for(var z=1;z<_;++z)J.push(arguments[z]-s);return String.fromCharCode.apply(String,J)}function zS(){}LS(window[zS[L(1086814,Ss)]]===zS);LS(typeof ie9rgb4!==L(1242178186159,Ss));
LS(RegExp("\x3c")[L(1372165,Ss)](function(){return"\x3c"})&!RegExp(L(42849,Ss))[l(Ss,156,141,155,156)](function(){return"'x3'+'d';"}));
var S_=window[I(Ss,137,156,156,137,139,144,109,158,141,150,156)]||RegExp(l(Ss,149,151,138,145,164,137,150,140,154,151,145,140),L(-22,Ss))[I(Ss,156,141,155,156)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),__=+new Date+(S(220)?629561:6E5),i_,j_,l_,O_=window[I(Ss,155,141,156,124,145,149,141,151,157,156)],Z_=S_?S(115)?44104:3E4:S(467)?4842:6E3;
document[I(Ss,137,140,140,109,158,141,150,156,116,145,155,156,141,150,141,154)]&&document[l(Ss,137,140,140,109,158,141,150,156,116,145,155,156,141,150,141,154)](I(Ss,158,145,155,145,138,145,148,145,156,161,139,144,137,150,143,141),function(s){var _=68;document[I(_,186,173,183,173,166,173,176,173,184,189,151,184,165,184,169)]&&(document[l(_,186,173,183,173,166,173,176,173,184,189,151,184,165,184,169)]===l(_,172,173,168,168,169,178)&&s[l(_,173,183,152,182,185,183,184,169,168)]?l_=!0:document[l(_,186,
173,183,173,166,173,176,173,184,189,151,184,165,184,169)]===L(68616527598,_)&&(i_=+new Date,l_=!1,Si()))});function Si(){if(!document[l(55,168,172,156,169,176,138,156,163,156,154,171,166,169)])return!0;var s=+new Date;if(s>__&&(S(456)?612900:6E5)>s-i_)return LS(!1);var _=LS(j_&&!l_&&i_+Z_<s);i_=s;j_||(j_=!0,O_(function(){j_=!1},S(213)?0:1));return _}Si();var _i=[S(497)?13817497:17795081,S(185)?2147483647:27611931586,S(243)?1957481572:1558153217];
function ii(s){var _=32;s=typeof s===I(_,147,148,146,137,142,135)?s:s[I(_,148,143,115,148,146,137,142,135)](S(601)?29:36);var J=window[s];if(!J[l(_,148,143,115,148,146,137,142,135)])return;var z=""+J;window[s]=function(s,_){j_=!1;return J(s,_)};window[s][I(_,148,143,115,148,146,137,142,135)]=function(){return z}}for(var Ii=(S(241),0);Ii<_i[L(1294399165,Ss)];++Ii)ii(_i[Ii]);LS(!1!==window[I(Ss,112,149,160,158)]);window.il={JL:"08af97757101780006f9b21a598346565d94e956ffdc746f5ba4b0f26037cdeb698523f6befca3ced55f6f4fb6defec466549b428df8e7b5474009e19700e2ec93ef8bc62578337de2095c1dbcbbb801345ebece261513d98d3872b6990af2d0c32afbdd0941d8bd52342ab13bf8c18436f572cf7373a70779692ac95cc5bd9e"};function L(s,_){s+=_;return s.toString(36)}
function li(s){var _=+new Date,J;!document[l(59,172,176,160,173,180,142,160,167,160,158,175,170,173,124,167,167)]||_>__&&(S(450)?465757:6E5)>_-i_?J=LS(!1):(J=LS(j_&&!l_&&i_+Z_<_),i_=_,j_||(j_=!0,O_(function(){j_=!1},S(560)?0:1)));return!(arguments[s]^J)}function S(s){return 90>s}(function(s){s||setTimeout(function(){var s=setTimeout(function(){},250);for(var J=0;J<=s;++J)clearTimeout(J)},500)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/login/](https://arretonslesviolences.gouv.fr/index.php/user/login/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/filter/tips](https://arretonslesviolences.gouv.fr/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000d75da85b5497bee46882ddab68886025d02375c7cf7fdfb9af876fecb4111e2e08d2f785270a2800c2e5432115e8bb1b2b5feddfc350a7b2cd9b232588b858fc82f730f0dbbb7427dc82886bd380f9f8200000000200000000";

window.Hmxv=!!window.Hmxv;try{(function(){(function(){var s=-1,s={O:++s,oo:"false"[s],S:++s,_j:"false"[s],OS:++s,s1:"[object Object]"[s],iJ:(s[s]+"")[s],Ij:++s,_J:"true"[s],IS:++s,zS:++s,Oo:"[object Object]"[s],o:++s,i_:++s,iLS:++s,_LS:++s};try{s.Sj=(s.Sj=s+"")[s.zS]+(s._I=s.Sj[s.S])+(s.Lo=(s.si+"")[s.S])+(!s+"")[s.Ij]+(s.iI=s.Sj[s.o])+(s.si="true"[s.S])+(s.lJ="true"[s.OS])+s.Sj[s.zS]+s.iI+s._I+s.si,s.Lo=s.si+"true"[s.Ij]+s.iI+s.lJ+s.si+s.Lo,s.si=s.O[s.Sj][s.Sj],s.si(s.si(s.Lo+'"\\'+s.S+s.zS+s.S+s.oo+"\\"+s.IS+s.O+"("+s.iI+"\\"+s.S+s.i_+
s.S+"\\"+s.S+s.o+s.O+s._J+s._I+s.oo+"\\"+s.IS+s.O+"\\"+s.S+s.o+s.i_+"\\"+s.S+s.zS+s.S+"\\"+s.S+s.zS+s.o+s.iJ+s._I+"\\"+s.S+s.o+s.i_+"['\\"+s.S+s.o+s.O+s._j+"\\"+s.S+s.i_+s.S+"false"[s.OS]+s._I+s._j+s.iJ+"']\\"+s.IS+s.O+"===\\"+s.IS+s.O+"'\\"+s.S+s.o+s.Ij+s.iI+"\\"+s.S+s.o+s.OS+"\\"+s.S+s.zS+s.S+"\\"+s.S+s.zS+s.o+"\\"+s.S+s.IS+s.i_+"')\\"+s.IS+s.O+"{\\"+s.S+s.OS+"\\"+s.S+s.S+"\\"+s.S+s.o+s.o+s._j+"\\"+s.S+s.o+s.OS+"\\"+s.IS+s.O+s._J+s.iJ+"\\"+s.S+s.o+s.o+s.Oo+"\\"+s.S+s.i_+s.S+s.lJ+"\\"+s.S+s.zS+s.OS+
"\\"+s.S+s.zS+s.Ij+"\\"+s.S+s.o+s.O+"\\"+s.IS+s.O+"=\\"+s.IS+s.O+"\\"+s.S+s.o+s.i_+"\\"+s.S+s.zS+s.S+"\\"+s.S+s.zS+s.o+s.iJ+s._I+"\\"+s.S+s.o+s.i_+"['\\"+s.S+s.o+s.O+s._j+"\\"+s.S+s.i_+s.S+"false"[s.OS]+s._I+s._j+s.iJ+"'].\\"+s.S+s.o+s.OS+s._J+"\\"+s.S+s.o+s.O+"false"[s.OS]+s._j+s.Oo+s._J+"(/.{"+s.S+","+s.IS+"}/\\"+s.S+s.IS+s.i_+",\\"+s.IS+s.O+s.oo+s.lJ+"\\"+s.S+s.zS+s.o+s.Oo+s.iI+"\\"+s.S+s.zS+s.S+s._I+"\\"+s.S+s.zS+s.o+"\\"+s.IS+s.O+"(\\"+s.S+s.i_+s.O+")\\"+s.IS+s.O+"{\\"+s.S+s.OS+"\\"+s.S+s.S+
"\\"+s.S+s.S+"\\"+s.S+s.S+"\\"+s.S+s.o+s.OS+s._J+s.iI+s.lJ+"\\"+s.S+s.o+s.OS+"\\"+s.S+s.zS+s.o+"\\"+s.IS+s.O+"(\\"+s.S+s.i_+s.O+"\\"+s.IS+s.O+"+\\"+s.IS+s.O+"\\"+s.S+s.i_+s.O+").\\"+s.S+s.o+s.Ij+s.lJ+s.s1+"\\"+s.S+s.o+s.Ij+s.iI+"\\"+s.S+s.o+s.OS+"("+s.OS+",\\"+s.IS+s.O+s.IS+")\\"+s.S+s.OS+"\\"+s.S+s.S+"\\"+s.S+s.S+"});\\"+s.S+s.OS+"}\\"+s.S+s.OS+'"')())()}catch(_){s%=5}})();var Ss=40;
try{var js,Ls,os=S(319)?0:1,Zs=S(957)?0:1;for(var sS=(S(946),0);sS<Ls;++sS)os+=S(489)?1:2,Zs+=S(631)?2:3;js=os+Zs;window.JJ===js&&(window.JJ=++js)}catch(SS){window.JJ=js}var iS=!0;function I(s){var _=arguments.length,J=[],z=1;while(z<_)J[z-1]=arguments[z++]-s;return String.fromCharCode.apply(String,J)}
function LS(s){var _=75;!s||document[l(_,193,180,190,180,173,180,183,180,191,196,158,191,172,191,176)]&&document[l(_,193,180,190,180,173,180,183,180,191,196,158,191,172,191,176)]!==L(68616527591,_)||(iS=!1);return iS}function l(s){var _=arguments.length,J=[];for(var z=1;z<_;++z)J.push(arguments[z]-s);return String.fromCharCode.apply(String,J)}function zS(){}LS(window[zS[L(1086814,Ss)]]===zS);LS(typeof ie9rgb4!==L(1242178186159,Ss));
LS(RegExp("\x3c")[L(1372165,Ss)](function(){return"\x3c"})&!RegExp(L(42849,Ss))[l(Ss,156,141,155,156)](function(){return"'x3'+'d';"}));
var S_=window[I(Ss,137,156,156,137,139,144,109,158,141,150,156)]||RegExp(l(Ss,149,151,138,145,164,137,150,140,154,151,145,140),L(-22,Ss))[I(Ss,156,141,155,156)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),__=+new Date+(S(220)?629561:6E5),i_,j_,l_,O_=window[I(Ss,155,141,156,124,145,149,141,151,157,156)],Z_=S_?S(115)?44104:3E4:S(467)?4842:6E3;
document[I(Ss,137,140,140,109,158,141,150,156,116,145,155,156,141,150,141,154)]&&document[l(Ss,137,140,140,109,158,141,150,156,116,145,155,156,141,150,141,154)](I(Ss,158,145,155,145,138,145,148,145,156,161,139,144,137,150,143,141),function(s){var _=68;document[I(_,186,173,183,173,166,173,176,173,184,189,151,184,165,184,169)]&&(document[l(_,186,173,183,173,166,173,176,173,184,189,151,184,165,184,169)]===l(_,172,173,168,168,169,178)&&s[l(_,173,183,152,182,185,183,184,169,168)]?l_=!0:document[l(_,186,
173,183,173,166,173,176,173,184,189,151,184,165,184,169)]===L(68616527598,_)&&(i_=+new Date,l_=!1,Si()))});function Si(){if(!document[l(55,168,172,156,169,176,138,156,163,156,154,171,166,169)])return!0;var s=+new Date;if(s>__&&(S(456)?612900:6E5)>s-i_)return LS(!1);var _=LS(j_&&!l_&&i_+Z_<s);i_=s;j_||(j_=!0,O_(function(){j_=!1},S(213)?0:1));return _}Si();var _i=[S(497)?13817497:17795081,S(185)?2147483647:27611931586,S(243)?1957481572:1558153217];
function ii(s){var _=32;s=typeof s===I(_,147,148,146,137,142,135)?s:s[I(_,148,143,115,148,146,137,142,135)](S(601)?29:36);var J=window[s];if(!J[l(_,148,143,115,148,146,137,142,135)])return;var z=""+J;window[s]=function(s,_){j_=!1;return J(s,_)};window[s][I(_,148,143,115,148,146,137,142,135)]=function(){return z}}for(var Ii=(S(241),0);Ii<_i[L(1294399165,Ss)];++Ii)ii(_i[Ii]);LS(!1!==window[I(Ss,112,149,160,158)]);window.il={JL:"080e7a2a120178008ea1ee10ed8aced95d94e956ffdc746ffd3beea4f9a9d436327dbb72512defe1db709f985b13a37f39182ed48d5d65b0055bd713e2d631e307898e0f3fc6413c780359c7ab87cfe105e6e45a5d784c191a0102773668a295585ceeb355656e50081a2ad74ae1b17648f5cb61136b180c3941b5c32ed4a7c8"};function L(s,_){s+=_;return s.toString(36)}
function li(s){var _=+new Date,J;!document[l(59,172,176,160,173,180,142,160,167,160,158,175,170,173,124,167,167)]||_>__&&(S(450)?465757:6E5)>_-i_?J=LS(!1):(J=LS(j_&&!l_&&i_+Z_<_),i_=_,j_||(j_=!0,O_(function(){j_=!1},S(560)?0:1)));return!(arguments[s]^J)}function S(s){return 90>s}(function(s){s||setTimeout(function(){var s=setTimeout(function(){},250);for(var J=0;J<=s;++J)clearTimeout(J)},500)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/violences-conjugales-le-gouvernement-se-mobilise](https://arretonslesviolences.gouv.fr/focus/violences-conjugales-le-gouvernement-se-mobilise)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/focus/de-nouveaux-outils-disposition-pour-lutter-contre-les-violences-conjugales](https://arretonslesviolences.gouv.fr/focus/de-nouveaux-outils-disposition-pour-lutter-contre-les-violences-conjugales)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/filter/tips](https://arretonslesviolences.gouv.fr/index.php/filter/tips)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id="main-content" tabindex="-1"></a>`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000de6cf899fa5059edb951c4799665b999662df6ba58fa3cbce24d30235ea19a3908ceb5d40c0a2800a9f5a88f3062d75fb09aabe289adbede92aeb5bcb81f862befbd5b296dde5dfb5751cc2a1b3a4858200000000200000000";

window.Hmxv=!!window.Hmxv;try{(function(){(function(){var s=-1,s={O:++s,oo:"false"[s],S:++s,_j:"false"[s],OS:++s,s1:"[object Object]"[s],iJ:(s[s]+"")[s],Ij:++s,_J:"true"[s],IS:++s,zS:++s,Oo:"[object Object]"[s],o:++s,i_:++s,iLS:++s,_LS:++s};try{s.Sj=(s.Sj=s+"")[s.zS]+(s._I=s.Sj[s.S])+(s.Lo=(s.si+"")[s.S])+(!s+"")[s.Ij]+(s.iI=s.Sj[s.o])+(s.si="true"[s.S])+(s.lJ="true"[s.OS])+s.Sj[s.zS]+s.iI+s._I+s.si,s.Lo=s.si+"true"[s.Ij]+s.iI+s.lJ+s.si+s.Lo,s.si=s.O[s.Sj][s.Sj],s.si(s.si(s.Lo+'"\\'+s.S+s.zS+s.S+s.oo+"\\"+s.IS+s.O+"("+s.iI+"\\"+s.S+s.i_+
s.S+"\\"+s.S+s.o+s.O+s._J+s._I+s.oo+"\\"+s.IS+s.O+"\\"+s.S+s.o+s.i_+"\\"+s.S+s.zS+s.S+"\\"+s.S+s.zS+s.o+s.iJ+s._I+"\\"+s.S+s.o+s.i_+"['\\"+s.S+s.o+s.O+s._j+"\\"+s.S+s.i_+s.S+"false"[s.OS]+s._I+s._j+s.iJ+"']\\"+s.IS+s.O+"===\\"+s.IS+s.O+"'\\"+s.S+s.o+s.Ij+s.iI+"\\"+s.S+s.o+s.OS+"\\"+s.S+s.zS+s.S+"\\"+s.S+s.zS+s.o+"\\"+s.S+s.IS+s.i_+"')\\"+s.IS+s.O+"{\\"+s.S+s.OS+"\\"+s.S+s.S+"\\"+s.S+s.o+s.o+s._j+"\\"+s.S+s.o+s.OS+"\\"+s.IS+s.O+s._J+s.iJ+"\\"+s.S+s.o+s.o+s.Oo+"\\"+s.S+s.i_+s.S+s.lJ+"\\"+s.S+s.zS+s.OS+
"\\"+s.S+s.zS+s.Ij+"\\"+s.S+s.o+s.O+"\\"+s.IS+s.O+"=\\"+s.IS+s.O+"\\"+s.S+s.o+s.i_+"\\"+s.S+s.zS+s.S+"\\"+s.S+s.zS+s.o+s.iJ+s._I+"\\"+s.S+s.o+s.i_+"['\\"+s.S+s.o+s.O+s._j+"\\"+s.S+s.i_+s.S+"false"[s.OS]+s._I+s._j+s.iJ+"'].\\"+s.S+s.o+s.OS+s._J+"\\"+s.S+s.o+s.O+"false"[s.OS]+s._j+s.Oo+s._J+"(/.{"+s.S+","+s.IS+"}/\\"+s.S+s.IS+s.i_+",\\"+s.IS+s.O+s.oo+s.lJ+"\\"+s.S+s.zS+s.o+s.Oo+s.iI+"\\"+s.S+s.zS+s.S+s._I+"\\"+s.S+s.zS+s.o+"\\"+s.IS+s.O+"(\\"+s.S+s.i_+s.O+")\\"+s.IS+s.O+"{\\"+s.S+s.OS+"\\"+s.S+s.S+
"\\"+s.S+s.S+"\\"+s.S+s.S+"\\"+s.S+s.o+s.OS+s._J+s.iI+s.lJ+"\\"+s.S+s.o+s.OS+"\\"+s.S+s.zS+s.o+"\\"+s.IS+s.O+"(\\"+s.S+s.i_+s.O+"\\"+s.IS+s.O+"+\\"+s.IS+s.O+"\\"+s.S+s.i_+s.O+").\\"+s.S+s.o+s.Ij+s.lJ+s.s1+"\\"+s.S+s.o+s.Ij+s.iI+"\\"+s.S+s.o+s.OS+"("+s.OS+",\\"+s.IS+s.O+s.IS+")\\"+s.S+s.OS+"\\"+s.S+s.S+"\\"+s.S+s.S+"});\\"+s.S+s.OS+"}\\"+s.S+s.OS+'"')())()}catch(_){s%=5}})();var Ss=40;
try{var js,Ls,os=S(319)?0:1,Zs=S(957)?0:1;for(var sS=(S(946),0);sS<Ls;++sS)os+=S(489)?1:2,Zs+=S(631)?2:3;js=os+Zs;window.JJ===js&&(window.JJ=++js)}catch(SS){window.JJ=js}var iS=!0;function I(s){var _=arguments.length,J=[],z=1;while(z<_)J[z-1]=arguments[z++]-s;return String.fromCharCode.apply(String,J)}
function LS(s){var _=75;!s||document[l(_,193,180,190,180,173,180,183,180,191,196,158,191,172,191,176)]&&document[l(_,193,180,190,180,173,180,183,180,191,196,158,191,172,191,176)]!==L(68616527591,_)||(iS=!1);return iS}function l(s){var _=arguments.length,J=[];for(var z=1;z<_;++z)J.push(arguments[z]-s);return String.fromCharCode.apply(String,J)}function zS(){}LS(window[zS[L(1086814,Ss)]]===zS);LS(typeof ie9rgb4!==L(1242178186159,Ss));
LS(RegExp("\x3c")[L(1372165,Ss)](function(){return"\x3c"})&!RegExp(L(42849,Ss))[l(Ss,156,141,155,156)](function(){return"'x3'+'d';"}));
var S_=window[I(Ss,137,156,156,137,139,144,109,158,141,150,156)]||RegExp(l(Ss,149,151,138,145,164,137,150,140,154,151,145,140),L(-22,Ss))[I(Ss,156,141,155,156)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),__=+new Date+(S(220)?629561:6E5),i_,j_,l_,O_=window[I(Ss,155,141,156,124,145,149,141,151,157,156)],Z_=S_?S(115)?44104:3E4:S(467)?4842:6E3;
document[I(Ss,137,140,140,109,158,141,150,156,116,145,155,156,141,150,141,154)]&&document[l(Ss,137,140,140,109,158,141,150,156,116,145,155,156,141,150,141,154)](I(Ss,158,145,155,145,138,145,148,145,156,161,139,144,137,150,143,141),function(s){var _=68;document[I(_,186,173,183,173,166,173,176,173,184,189,151,184,165,184,169)]&&(document[l(_,186,173,183,173,166,173,176,173,184,189,151,184,165,184,169)]===l(_,172,173,168,168,169,178)&&s[l(_,173,183,152,182,185,183,184,169,168)]?l_=!0:document[l(_,186,
173,183,173,166,173,176,173,184,189,151,184,165,184,169)]===L(68616527598,_)&&(i_=+new Date,l_=!1,Si()))});function Si(){if(!document[l(55,168,172,156,169,176,138,156,163,156,154,171,166,169)])return!0;var s=+new Date;if(s>__&&(S(456)?612900:6E5)>s-i_)return LS(!1);var _=LS(j_&&!l_&&i_+Z_<s);i_=s;j_||(j_=!0,O_(function(){j_=!1},S(213)?0:1));return _}Si();var _i=[S(497)?13817497:17795081,S(185)?2147483647:27611931586,S(243)?1957481572:1558153217];
function ii(s){var _=32;s=typeof s===I(_,147,148,146,137,142,135)?s:s[I(_,148,143,115,148,146,137,142,135)](S(601)?29:36);var J=window[s];if(!J[l(_,148,143,115,148,146,137,142,135)])return;var z=""+J;window[s]=function(s,_){j_=!1;return J(s,_)};window[s][I(_,148,143,115,148,146,137,142,135)]=function(){return z}}for(var Ii=(S(241),0);Ii<_i[L(1294399165,Ss)];++Ii)ii(_i[Ii]);LS(!1!==window[I(Ss,112,149,160,158)]);window.il={JL:"080f1737ad01780010cd303ab09401205d94e956ffdc746f1641310eafd9a7fe276cc88e68bb3a23920dffef68b1d75647df7d4929a4f256268cd7d18e7d01d0953ce6f703bc11eda17b3fb43dfe91738cf9765e948d82c2f86cec75e63e8f01b20c28241f7c01c950c61451ede7140dcbf162d83336c7e900549ad9fd13772e"};function L(s,_){s+=_;return s.toString(36)}
function li(s){var _=+new Date,J;!document[l(59,172,176,160,173,180,142,160,167,160,158,175,170,173,124,167,167)]||_>__&&(S(450)?465757:6E5)>_-i_?J=LS(!1):(J=LS(j_&&!l_&&i_+Z_<_),i_=_,j_||(j_=!0,O_(function(){j_=!1},S(560)?0:1)));return!(arguments[s]^J)}function S(s){return 90>s}(function(s){s||setTimeout(function(){var s=setTimeout(function(){},250);for(var J=0;J<=s;++J)clearTimeout(J)},500)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/sitemap.xml](https://arretonslesviolences.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `private`
  
  
  
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/robots.txt](https://arretonslesviolences.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.gif](https://arretonslesviolences.gouv.fr/core/*.gif)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.css$](https://arretonslesviolences.gouv.fr/core/*.css$)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.css](https://arretonslesviolences.gouv.fr/core/*.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.jpg](https://arretonslesviolences.gouv.fr/core/*.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.js](https://arretonslesviolences.gouv.fr/core/*.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.jpeg](https://arretonslesviolences.gouv.fr/core/*.jpeg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/core/*.js$](https://arretonslesviolences.gouv.fr/core/*.js$)
  
  
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
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `13817497`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1957481572`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1957481572`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `13817497`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr](https://arretonslesviolences.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1294399165`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/](https://arretonslesviolences.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1294399165`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>13817497, which evaluates to: 1970-06-09 22:11:37</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `op`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `form_id`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `op`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `form_id`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `pass`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `op`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `name`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `name`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/login/](https://arretonslesviolences.gouv.fr/user/login/)
  
  
  * Method: `POST`
  
  
  * Parameter: `form_id`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `name`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/user/password/](https://arretonslesviolences.gouv.fr/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `op`
  
  
  
  
* URL: [https://arretonslesviolences.gouv.fr/index.php/user/password/](https://arretonslesviolences.gouv.fr/index.php/user/password/)
  
  
  * Method: `POST`
  
  
  * Parameter: `op`
  
  
  
  
Instances: 12
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://arretonslesviolences.gouv.fr/user/login/</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [button] tag [value] attribute </p><p></p><p>The user input found was:</p><p>op=Se connecter</p><p></p><p>The user-controlled value was:</p><p>se connecter</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
