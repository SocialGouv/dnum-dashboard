
# ZAP Scanning Report

Generated on Thu, 6 May 2021 02:12:43


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 5 |
| Low | 8 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| CSP: Wildcard Directive | Medium | 5 | 
| Reverse Tabnabbing | Medium | 11 | 
| Source Code Disclosure - Perl | Medium | 8 | 
| Source Code Disclosure - PHP | Medium | 1 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 12 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| CSP: Notices | Low | 5 | 
| Dangerous JS Functions | Low | 12 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 5 | 
| Base64 Disclosure | Informational | 12 | 
| Content-Type Header Missing | Informational | 5 | 
| Information Disclosure - Suspicious Comments | Informational | 20 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 6 | 
| Storable and Cacheable Content | Informational | 5 | 
| Timestamp Disclosure - Unix | Informational | 4 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 10 | 

## Alert Detail


  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>script-src, script-src-elem, script-src-attr, style-src, style-src-elem, style-src-attr, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, prefetch-src, form-action</p><p></p><p>The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://igas.gouv.fr/ecrire/](https://igas.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-request`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique333](https://igas.gouv.fr/spip.php?rubrique333)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-request`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique189](https://igas.gouv.fr/spip.php?rubrique189)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-request`
  
  
  
  
* URL: [https://igas.gouv.fr](https://igas.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-request`
  
  
  
  
* URL: [https://igas.gouv.fr/](https://igas.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-request`
  
  
  
  
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
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique259](https://igas.gouv.fr/spip.php?rubrique259)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.service-public.fr/" title="Site des services publics" target="_blank"><img src="squelettes/images/logo_services_publics.jpg" alt="Site des services publics" /></a>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique333](https://igas.gouv.fr/spip.php?rubrique333)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.service-public.fr/" title="Site des services publics" target="_blank"><img src="squelettes/images/logo_services_publics.jpg" alt="Site des services publics" /></a>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique189](https://igas.gouv.fr/spip.php?rubrique189)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.service-public.fr/" title="Site des services publics" target="_blank"><img src="squelettes/images/logo_services_publics.jpg" alt="Site des services publics" /></a>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique197](https://igas.gouv.fr/spip.php?rubrique197)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.service-public.fr/" title="Site des services publics" target="_blank"><img src="squelettes/images/logo_services_publics.jpg" alt="Site des services publics" /></a>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique337](https://igas.gouv.fr/spip.php?rubrique337)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.service-public.fr/" title="Site des services publics" target="_blank"><img src="squelettes/images/logo_services_publics.jpg" alt="Site des services publics" /></a>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique301](https://igas.gouv.fr/spip.php?rubrique301)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.service-public.fr/" title="Site des services publics" target="_blank"><img src="squelettes/images/logo_services_publics.jpg" alt="Site des services publics" /></a>`
  
  
  
  
* URL: [https://igas.gouv.fr](https://igas.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.service-public.fr/" title="Site des services publics" target="_blank"><img src="squelettes/images/logo_services_publics.jpg" alt="Site des services publics" /></a>`
  
  
  
  
* URL: [https://igas.gouv.fr/](https://igas.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.service-public.fr/" title="Site des services publics" target="_blank"><img src="squelettes/images/logo_services_publics.jpg" alt="Site des services publics" /></a>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique334](https://igas.gouv.fr/spip.php?rubrique334)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.service-public.fr/" title="Site des services publics" target="_blank"><img src="squelettes/images/logo_services_publics.jpg" alt="Site des services publics" /></a>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique319](https://igas.gouv.fr/spip.php?rubrique319)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.service-public.fr/" title="Site des services publics" target="_blank"><img src="squelettes/images/logo_services_publics.jpg" alt="Site des services publics" /></a>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique335](https://igas.gouv.fr/spip.php?rubrique335)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.service-public.fr/" title="Site des services publics" target="_blank"><img src="squelettes/images/logo_services_publics.jpg" alt="Site des services publics" /></a>`
  
  
  
  
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
  
  
  
* URL: [https://igas.gouv.fr/IMG/pdf/2019-121-rapport_dette_eps-d.pdf](https://igas.gouv.fr/IMG/pdf/2019-121-rapport_dette_eps-d.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#jyqdxdTdld`
  
  
  
  
* URL: [https://igas.gouv.fr/IMG/pdf/2020-014r.pdf](https://igas.gouv.fr/IMG/pdf/2020-014r.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#MpLV`
  
  
  
  
* URL: [https://igas.gouv.fr/IMG/pdf/2019-009-rapport_psc_agents_publics-d3.pdf](https://igas.gouv.fr/IMG/pdf/2019-009-rapport_psc_agents_publics-d3.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#ArI22`
  
  
  
  
* URL: [https://igas.gouv.fr/IMG/pdf/2019-104_r_tome_ii.pdf](https://igas.gouv.fr/IMG/pdf/2019-104_r_tome_ii.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#SYRVa2`
  
  
  
  
* URL: [https://igas.gouv.fr/IMG/pdf/2019-104r_synthese_d.pdf](https://igas.gouv.fr/IMG/pdf/2019-104r_synthese_d.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#IJHF`
  
  
  
  
* URL: [https://igas.gouv.fr/IMG/pdf/2014-037r_tome_1.pdf](https://igas.gouv.fr/IMG/pdf/2014-037r_tome_1.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#g9pT7`
  
  
  
  
* URL: [https://igas.gouv.fr/IMG/pdf/2020-007r1-tome_2_annexes.pdf](https://igas.gouv.fr/IMG/pdf/2020-007r1-tome_2_annexes.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#Pd5Y`
  
  
  
  
* URL: [https://igas.gouv.fr/IMG/pdf/2020-007r1-tome_1_rapport.pdf](https://igas.gouv.fr/IMG/pdf/2020-007r1-tome_1_rapport.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#pL4S`
  
  
  
  
Instances: 8
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#jyqdxdTdld</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://igas.gouv.fr/IMG/pdf/2019-009r1-_fph-o.pdf](https://igas.gouv.fr/IMG/pdf/2019-009r1-_fph-o.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=¤¢\x0002,A"\x0003K
\x0010L'a
')\x0007I
º\x0003\x0012ÓÂ©'Å%\x0005'o\x000eíÄî
P`7\x0001ëí\x000eDÄúòÔº2mp0[>ÒøºD´\x0012xøu\x001c\x0016lQÑ¨\x001dÝ-\x0015¶þ\5$²/35#¥ãÄ)â<ÔÜ]\x001fÒ_¯\x0004\x0016mÂhÅ37¤sPÝs8/ðaËvÂ\x000fÚ
\*wlÉS«Ç·¤* zÕÈÒ»FgQ\x001cÖs/¾»\x000f¨\x0000lq±ìð\x0008ºîyQ\x00192À»\x0011­\x0006D¡uy\x0017\x0001Ã\x000e´\x0004\x0003ÙðÊ@l¬(s1\x0017
c=DQâþª|ªPTµH­Ú©î®.¬"	\x000bðRQy0U\x000e\x000bµ* Âq\x0014¼ìíÿ<\x0000Ã\x0004¬\x001aÍ\x0005\x001bL\x0013·¶õõ¬\x0004[HUÑµ#9%*tXH²¢¼_@{\x0010Í\x0011ÍO0[àsÈ ösA\x0017û»ËµuË\x0013üóch×µX/\x0001%ËÍ\x000epË{ª`\x0004Îpk,½e§±ñ\x001c\x001aóNÓÓVÛWTß\x0019]BvÐµ·\x0013}ð\x0006#\x0004ûÌÏF«¥Ï\x000fúº[:u¨YL7u2hNû7`V¨¦)ÞÓÏÂ\x001bº­À\x0005w::Y#éÖÛ&4r:Ç¥Ñ]TnK¸7,º­];\x0015>,Ü®Zú£UíÚ
ã´(÷<¥ÿ\x0011o©\x0011\x000bü®\x00028Á\x000b\x0016¸7=þÎDeÄëiq}t7d¼5ÍÔ@hÕQ'Ðv\x0017Í\x001a\x0007&!;IVÿÁ+Òu.mË89i·k5â[\x0002w§ë%87\x00129\x001b@\x0000Ñ5s3½Yr\x0001ûÛïq{s÷Ëfý\x001eãÚ6W¦ \x0002À\x0012O\x000f\x000f`\x0013\x001eÇ\x001c,tN\x0013Õm\x0013Ë2NÜ¾kòCCDÃÌS(²KGH±þK
N·>ÿrÒK\x0000\x000cêh\x0015\x0017¬Eñ¥ÆGkzÂÒUaMÑÛkoPw ld´¾h°»a~Â§F%Ùç.q¹àEd5\x001b?ô:û±¿1·¿}ûÖ\x000f¸m?wÓègyWÃ`¥ìt\x000cúþ?Í\x0002¸Ë¿\x001d±¾äÜõàÒÏñfFXS!¤ö\x0008¬{áTtJ1\x0010®â\x000c$thö¹\x0007Üy÷§ozZp]Ó\x001d®°hH¡nÛ
;zVU´X\x0001uÍÐ¶\x0016Ëé¸e=
t¦¤¸\x001eöYÆÚr\x0017±Zêg9ºý:ä #üÙ+¤\x001dæÐáÈö\x0017-±½=7Ý	\x000eÝÊ¢Ã+«Àª²c9Nùê¼ÏªRXöy¼\x0007ä¼²
e\x000bâ\x001b\x0003·êz\x0005E³¬Ø\x001bR\x0012üùÑKõ#¯oXÙs4g!SY?aa½\x0005"Øô\x0013èÒvíøØ-\x001a;\x0010î¯á\x001e\x0012¿\x001ar\x001b¶µ§Se\x000cìB\x0015Ä\x0005Åû?\x0011B=È\x0008ëþyÖ¡\x0011âÔ³)âF\Â\x000c<]0\x0006Ë\x0016¦âÃ2\x0002üÃ©!¶	VË&Ö±·ÿ+\x0011\x0017ºmâ¸ÃÄöp\x0003\x0007¸5¾}£À¤\x0004B\x000clß(*\x0008ÄK#Ö£\x00188Ê

Ê&80i©\x0018$Ã<l@[ôChK¥!:ú\x000eÚrj\x0015ð(m©\x0004Bô(´%\x0001ëo³I\x000eàÅènpÊdVªR¯Q¾Fab[.w`WÚ;Öµr¬«\x0015\x000cWö$÷3«[\ÛÂñ ¡\x0000\x000b¾
v1ýÃ}aÀ§ÁSReÂ¾\x0018*.-=DOß~g~âpán7z×
Tò¬s`W\x001aÄq«\x0007.í	h]<\x0004­KSi´>µÞi\x0014­K\x0018÷(vû8¬çÏÑ
\x001eèI¹d\x0016Äs\x000cRp·\x000c/e#\x0001\^­¥ ð¶ó!¼\x000c_	¬OîõÀ\x0011FW|Ï\x0012
\x0007~vVµw_tP\x0015øÕB6M®\x0008äyî*(7\x0011wú&J×ñ¬µÔG	Úè&eD9ñïa-F53£ûûÅÏF§\x0005Ze¦ðKÙÄÄtç³ísyÝÎ\x0017>ÁÜ	­¯;ó\x0011\x0004,ÐÌ\x000e¬\x001b	ÒGÙw=X\x0012°IÀ*
aå@£Å¥¡gR?\x000eaªÌT®UÃ½7y\x0011FÚz5-Ôí\x0006¾ÙZ(zÐ¦\x0012Zp£@÷g\x000fØ'¨ÀûF¹l4iÒC³äY}uü\x001fÍ$/\x001cV\x001f|êgéx~Õ7[ÖMË#N¢Ô^\x0012
¼ôÐâð= Uóà/5XõüÏ¾\x001cBºw P¯½ÓÛË\x001fÃF\x0008\\¤ÖcØí*\x0008ÀT
¦­ZLóa·kCì(\x0003ìm×á=\x000e\x000b÷ë9k©E{Ïå­èÐ\x0019éÓ^¦Ê\x0005C\x0007wH	åï\x001f6?(#þ?¹;Èò
endstream
endobj
44 0 obj
<</Contents 45 0 R/CropBox[0 0 595.32 841.92]/Group<</CS/DeviceRGB/S/Transparency/Type/Group>>/MediaBox[0 0 595.32 841.92]/Parent 6132 0 R/Resources<</ExtGState<</GS7 6155 0 R/GS8 6156 0 R>>/Font<</F1 6159 0 R/F10 326 0 R/F17 345 0 R/F2 6162 0 R/F5 300 0 R/F6 302 0 R/F7 321 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/StructParents 95/Tabs/S/Type/Page>>
endobj
45 0 obj
<</Filter/FlateDecode/Length 7522>>stream
xÍ=Ms\x001b¹wWù?ðH¦í\x0006Ðh4¶TªÆÒlRÝÙÄ©=89Ð\x0014e³J"5\x0014éü¦½ìÝfaÎ¹ä¶xïá³\x001bM+fS£©\x001aÛì\x0006ð÷Ýo.6Ûåíl¾\x001d½¹ØngóOÑû7ïÖ\x000fyóî¯\x000f7?Î>.W³ír½zóÇÝ-<ú÷Åìf±9?\x001f]¾ý~ôÓëWeQÂM£Ø¨\x001cI-\x000bÁGMÅ
ÍGÅëWÿóÑêõ«Ëw¯_½¹f#]èzôîöõ+h\Ø©ª¨ØHé²¨ªÑ»{Óì?ªÑÇG326Ø|ÄGMôè\x000f?¼~õ~üÉT/&S1þñÇ\x0018ÿùÍÇï&\x0019½ûÝëWW\x0006Þ¿~uüü8«\x000b¥âùiÅ³\x0019
\x000f¸)´ø:àßþ0V?N¦ÚLDÿ\x0013Pó¼dzðYí\x0012O@ÇtxÀªPòëËr2el¬ñO$\x0011ö\x0006póÛ¡'$!Ü'`â\x0007 ËkØ£Óî¨ËBé_agD]\x0015ì	;óûÁ\x0001+^\x0008ök¬XÉ¢þêÖ\x0000a\x001f£wsC¢\x0019|\x0016\x0017¼þ5o:Ôü_[>\x001fz\x0012UY\x0017õ\x0013VßâË£«ß?zÓsï]®·Ûõ}ÿÕw½^o¿ýêc¬(«\x0016Ok
!Gé×¸5àô\x0007Ù·\x000c¼\x0017¥êwì
,2\x000b\x000fÉ\x0003\x001f\x001bòàÇG\x0006¶6÷6{Æµj]°^xÃï¥(ùÓ×T?zó#Ðûï¿ÿíÛQ9\x001c\x0011K8ÕHëGÖ,noáö]lGæB\x0016Íx\x000e\x0017ázõyR\x0017«í¤\x001a/Í¿Ö«ùs\x000fMd9}^L ¶×Íb÷3ü³Rã{Ór·Ýá \x0013Vïî\x0016füè\x001aWzü°Þmàýy7³ã>À¨%ô|\x0004ðöñb@$\x0001ü4ëzóÑ5\x0010Ú\x0000æv4øçz	øjÂd´m>ã²Ì\x000bÛw\x0016ÐÍr¢¨ÃÃzb\x0013\x0018
mqN·Ñ2#ì&\x001aó­¤:\x000c¹Ý­j`ùÝýÙLôá\x000eçs^\x0000öÌ"¸´K­\x0000ë\x000eM¼6hZÃBw[À\x0016WÌìÏD».\x000f³Í\x0016ÕãÍð3ø9eªhdßn&ÛUÍÃ©\x0000`úÿ;ü\x0006®Ü3£Spek\x001e%p ï*Ù·æÙf¶%²\x0004ª}\x001c§UÍ³bBÈò\x0000&¾|g\x000e¯]ül×&ìE°vf41\x0013dPÈ¹¢£ó¿\x0008ÌÃ¹ô#Ài©ÆÏzêë\x0003§^;¦33îUÉ®®Ëò¥®Íoaþ¯Î%½*Ëóieþ­åyMáÏF³\x0012þ¾v¿Í»\x0012F8¥8çþq\x001d~ëº²¸k]4ÀWçÊ¶\x0002@â\x000c¦E\x001c`?\x0012§©B[xV·ÒH\x0018ÒÎ½<gÒ0P\x0011¨H'ÖÔ4Yÿ[ug"nÓ+iËhùng\x00033/\x001bB	üV~íæï&ÌÀLLÄÐ.Î5Æ®\x0018õäÑº\x0010Eí¢i\x0004\x0001i.\x0011EUkKÜ\lkÜã*ô2»%âÝ²p\x0004$¾ÖÑ"
:uMÓë%\f¬)Tá| LìÙE\x001e7»3?\x0017£9¢ÑgøsCô\x0000\x0007uö\x0008ÀèÆèõðÄH\x0017È\x0002ðév¶\x001fKwFÐ\x0017ÿÄÁgÀ\x0018wÎÍ8È
pÅh³¿7\x000cc·Úo¡áÙ *\x000b­ûÐr\x0004'êìÛÄN>b<·ucÔÂæ \x0006
\x001dÁ
^\x001d:ÙE£u\x0016Ç^\Å\x001bE}ñïÇo
!ñ\x0008îõrõh®óÑÇ
·ÛÝr;Öc¼z\x001eîvøînØYòR\x0017µþú,g ;n`6\x001f\x0017@à8'£.ìV\x000bx3ºÙßÁß{s\x0014>Îð`\x0019|ô\x000b^Ç7p\x0016pH~\x001eÝ\x001b¥`qm\x0017ÇI&¥\x0008£J²Ómsî ðo;(ªéÕF?\x0013]EñO\x0016ÍF7\x0012É¤\x0016m?Øå\x001aå@`Só	ðÆj\x000cÚø£Á=¾Û\x0019Ç¨3³ÝÈ¼C\x0017£ÞÀíèlvp¾\x0006Øxåû\x001e¹K¹¥r]A°g©­ýÁW\x000e9²)ô\x000bUÔÒp
£P\x0003¸ÛßdvF\x000c®9×¢*ª®øù¾V9_u@ªºM/Èá%lÇ«òðþÃ	ÝF\x0000V'P­\x0018\x0017`"}¶å2.Á(Ù\x0003Ï\x000b\x0018K:	A¿RÏ¡]1ÃÀ¤8
2rJ\x0004Ó¬hX\x000f¼³]¿EpÚD¢:«$e2+ºOQ\x0010®I
½,ïÞyyV¢Ü¨\x0016:\x0010ÁsbkY¡Â¾U.=dCÛn\x000f¶³\x0007æ°-\x0018Úvû°¨3Ë4R¸Ó8¦  7\[ý@Ôè+ÔÄtªZÑ«K¯6!þ\x001b¯yèX½\x0010´³,Ñ\x0010NÓ\x0019µ¦v8¹Æj
ê|S\x0011\x0014LÔÝ\x0014u¯c¢Iõ½i\x001dÖÀËÐýe(%5/\x000bg\x0019\x0010·@\x0003\x0002é\x000f[â\x001c`Vã;{"\x001f5ªÃ=ÞÊ[4>8S³~\x0007Æ60
ÏrÐ¹Ý4UÅÃ|Z©\x0014\x000c\x0016ðøÒ\x000c¡-IT«I!\x0003æzõ89\x001cú\x0007<{ÂóÁ6×5ïÁÞÍbô£Él\x0003â\x0007ØRÊ5Û\x001a=\x000b\x0004jÌ\x000cðbta\x001e>l`¶#åìØ`ê\x0012®ìÌv¶®!^\x0011q7\x0017Hï*.g&ªX?\x001d#d­É/ã\x0004|ºà¼\x001fm\x000f\x0012\x0012¸åK\x001e#\x0003jvÎ¸eBZ\x0011#gÞ\x00044U,ºS\x001c.ýPµùÞ¥3%ö0û®¼°-¼=®Ø »\x0008­¥fZ³Ô\x00125U®\x0015\x0012ÂÅ¹~ú÷Ä\x0005[:ÃÞ\x001dèMÌ;îÅvÈR\x0005\x0019æp\x0018¸X\+H¼7Ü)nä<j9á=Y3eYË\x001f¡¤9Oìi,Ú\x0001·ç·?\x001d8ÒRs\x00123vU{Yá\x0005ÌiÅv9Ë\x0018é!\x001f¡\x0004Þ§B©¤Ý÷©Ï Hµ·­ÚQÌÿxÃ
ÅÍÿu@$ç¹Ëó´@\Ó
m·;ôÉÍ>©íárR@läu²`\x001dédÆuæícSdmEp\x0002\x0013ùä29þPYùDtädÍú9±\x0003ÞÄ\x0016Òt¥òà<
Ëe*åØÁzn'gQÕ:\x0016Û/Czª)TWå~Ø}¸[þ\x0004\x0006iÅÇ¿¿$\x001fÿ8Ûx¡À)@ÿ<\x0006#çíléô¢\x0019ú¡k9ÞìO \x000eÉBª¾ßî7à¤áÖC3\x0005T,ø\x0003Í¬gÍßÑ:»wz¬yè=A¦\x000fk22×wþ\x0017H\x0017Ú¡WÜüÍ@>iØmW«²*Xï&\x001d)å\x000c1\x0010#û\x0000âq'öäNüÓ\x000fÎÛ÷\x001dûVtã:o¡Ð\x0017î\x001aêàÆ8oâmný¦²|'Ù;ÄðªñG\x0014Ps
ñô=ç1+\x000f³º\x0002q·£&@H\x0002\x001fw2Õ\x0015Iìoó\x0019xå&r5â´B\x0012Î5½§¸Gxc4
HÏæ1\x0019ÅØ>o
??Ó"ÆÔ\x00114\x0012´tLAÉ0¤½ÇÇ||33
L4Il¶°/÷ÛÙ;ó~ù\x0008§çqqoT0\x0015PFäøñ\x0001\x001aàTf`¯Ä\x0001\x000b¦m·Øb4ÁØ+iTû4ABU\x0007\x001cTQðÀbÿ¾"h\x0000]nÈHvÔ\x0019ÍÍéÕ¼o'°IQ½ð¾üybP \x000c\x0015,V \x0011nZU\x001dE\x0015^Ý\x0004OQ6U¿mM*Ò÷ÀwoPQ
.8ÐH
ÞáTÀàßö`?C{òýoÉO-\x0007çÖ\x001c¹f\x000f¢(\x0012ág\x000c\x001a0s}T6*L\x001c\x000f>G³4ÔÖ×\x001f'\x0010ð¼jí!Á¨i:£±¯Ý¥ÏJs¼1¢ªTã-J\x000c3"\x0000t&ø}p¼Äz],loO	\x0018Yµß,CHÆ\x0006Ôx¡\x001bv%Í\x000c·)mÇÛ
E-Í£fõøO@<«0=¼û÷.lË<¸ÙQÃãülTw"n¥é 
Ò4Ä«´\x0002)§fpQKôs\x001aV8¸¥fE-ú6ì\x0004\x0016Z\x0016¼\x0017ÞìóÆG×Ñæ1Ík «Èn,ðO=\x0006Q[±[DüÅ\x001cÞ%­9Üx[ò¼ÓV¾\x0004
\x001b^)r\x001a"\x0005e\x0004e¥kp
c#";BÄj ÖN\x0003YCªB\x0019ÅÖ\x0018¹Êksa\x0004gWðS\x0002ªNMï\x0014Õ\x0013[\x0012hFåy[­jÕ\x00111ØF[ÊtäµªÁé^'yU9;s\x001dYplK°	ó¨\x000bÎS!\x000cg&qÃ²ëïw\x0007TF"f=\x001b{ì)Ê]ï\x0010K§{\x0001\x0002\x0005¿\x0015¡Ï6F|ÛÌ ærkk\x0013\x0007éíÍþÁ0II\x001e\x001f1h\x0005Î\x0017wÀxwKøÉ)\x0008¶a4,Êh/D\x0018+1<»k!Þ5­Û\x0018¡l\x0001Vñù\x001dðxÂIË\x0013+ÔîN!Õè¸éçñãy
òËz\x0000Î?ÁÖß>ÒòÁÿaø)pÆ\x000bÑ;\x001dîÉ\x000câ	N\x0000Ú\¥ý O\x0010tkª\x001ex\x0014§D\x0017øáÃ»x¥!Ãrà¥æ¢VªÁc#ª¦.ÎÄF4'è\x00019¼ÜÆFäá/ûÛ2ø\x0005¸»¹"k¹h\x001bPQ¶IM½dV-ô©\x0013 6 \x0019¬æmS´jE¿NkîMÈÎ|Löÿ¸\x0003Ê*.27~Û S±\x0015C¬Å¶\x000c\x0016"\x0015Ì¹!65õZD\x000e\x0019\x0002\x0013ÒÕx"\x0000Nù¢\x000c®\x000e+ó0yXèñ\x0013	Â
Yº¡WùðågvO\x001fH+Å\x000b\x0005#7¼\x0018ê§£%\x001a1=ÚV\x0017¢m=ü*\x0016ÌDV0³ý#ÂyÊµÛ('Übí²ãÕÎÛ!	¶ÁWßs¾¾\x0010û^uè%\x001a<^¼;©Ø}êè\x001aÇ.
'ªgæê":"ç
à¶óô3)¿2±Ô\x0012{N\x0012×dð\x0001ùÓÏ´<L]i\x0006\x0016¬<iB¦®t\x0005&¬\x001e¿XËæ6 b»ÁD¶g\x0014\x000fÄV\x0012ã2\x0007[H1ïT%*!ó;<æîwå\x0015=\x001f¨\x0013\x001fK{
ªy@ÔsÑY¹ÄÓ\x001eÊ2ç\x0002\x00086úÁ)È\x001c\x000b\x0008QËãæ\x0014R`)
Þ\x000bï\x000bf
ã\x001dd$Ö§È4\x0013\x0002\^§Yn^Êî\x0005ø¸\x0000	ÿ³Ñ0sP\x001bµwE`<ñÄ:\x00080>\x0012HK4\x001aÞa%\x0004\x001a¹z\x000f#KK»ÓC;d2<#Âòp\x0015\x000eJ[Î©Â1ë4«#ILZÜ5òÿ\x000c¡þÊ0Wg\x001aKg'«½ääy¶|V!ã ª\x0012µ{EÒf%4]zß¯¬P\x0012Ñö\QSéâGºF0\x0019\x000b$v.ºöô[4ºm\x0008c)\x000eoOô	Æ³t0b°Äð¸C§]\x0014Æ:Z"CÂKv¼N»D\Ù`öÐ\x0014\x000eÞZlD­4ø.\x001fâ\x0010`e!óòû\x0004ÝMlÊqGä¬Î¢]«Z+Òo?ì\x0010¹\x0012z¹\x0004É\x0012'*¿ÌéN¬»]\x0012dÕ!-Û>Ú\x0017;´½òeJö&õÅÉÉã± ûtøX8¨y\x001b`Uç\x0000\x0006t¼µ±KW^\x001eÜ6+j(çßÍSx8\x0004&|÷ÀûR`½\x0000vû_\x0018ºåâD\x000bÍ\x001a¡Í}Z÷\x0002üó¥I=/À¯³-WèüÅgèC+È\x0005\x001fÐ\x0011n_Q­\x0005©¬Ä°\x0000ÃírõhkDP\x0002%y}^\x0004`u!s&¾à\x0015G.\x0011ÀZ*#\x0003N(-kt§Z.(4Î^¶\x0011/%A \x001dS§NV¤Ó\x001dq\x001c{v\x0007¹^X4ú\x0000rjï	ªÂ Ë\x0010rÍýCóç\x001aÓ\x0019®qþmf¤\x001eZs|»	ç÷¯ü$|O7Éx\x0010Þj~¡Gnç"ä¶·HËxp\x000cTõÊØÔ'_K?÷8×GCÒ¤\x0018\x0010=¥µN¸û&Ü\x0003~òøÄÅ<Z\x0003âK¹^K\x000e|9C\x0019=×\x0013\x0006RÀoïíd\x0011T¶ã¦Y££s\x0005Tí\x0006uýÚDös\x001bÎËè®÷R"üËpýöI\x001cÛF:Ù®s÷V§w>j	£²ª=Â¿H%T\x0010»å\x0007e\x001a\x0001Ð\x001f1È46	«IW\x0003R¢
p\x000c\x0014\x0013ÃÉö¢ED0\x000e¸58²FGÚ¹¸¾8rºìÄáúµ5ÊÏë%P¼h\x001a(rx\x0017ò\x0014µ-
´"È¼HÎ¢ÖOdý+<Ñ¿),fL§lÉÿ§1±Z\x000eé6¢¡\x0003¤É7¥Ï\x0011h¢¾*jãU*Q\x001d¦	\x0012Ì¸>\x0010¹Ã¦uÕ»<=e[;lzPYÞ\x0015õ!¶%\x000co$e
¡óu\x0002¯VÅ4D¯õQ2d}ú\x0004DÄHy}^E¹"\x0007R ½!\x0007Gª!<º\x0007E=Ôó¢_h\x001c¿B¸Ð\x0001/©P\x00151;>|\x0017\x0013Ár\x000fÛÙ\x000b9|\x0010Néê\x0018=ìç\x0010^\x001b\x0015>\x00011Û¶æ\x0010x¸^=Nñú\x001ec1\x0013rë|$Ò%#öFQVQJ\x001eFÒÝáPñÍ¤§(y¢A1éAÜ>q9¸O\H\x0006rs×'®Oæ\x0013ï\x0001y²z\x0001=ð ^À$:1ÁAïöôû`b_\x000er.À¸^5c¦+I­âZh=\x000bö°Dù*ÙjË\x0005B¡Ù\x001câ¶q¬­-Ç°"\x001a"P8ËjyYTu\x000f²@Ä:\x0001«ä\x0012 ôì\x000fÔ/\x0013qN\x000fÖ^	\x0004Æ°Û,èùìn=a
Mz1¡ÉB(pZ´\x0017·þ'\x0016J9M¡
wÎò O`QÙÇ^w\x0010ü\x0005Ö\x0014I\x000eÙfBáðà/ñU\x0013H\x0014${WØÔ%g\x0004\x00115^aþ\x0017¾¦ð9pû¸Ô¥/´»
\x0015ÝSãýÝò3ÀÅô\x000ez\x0014\x0000Â`\x001b7àÍÎC~D×\x0019¨c|H\x0017hÖ°¸§¸ùS$?)	|yÔF²e°­ì(b\x0011Ýò4öeÓð¯\x0017$xU]iû	¯|·ÁÎ²ÛR\x001a`e~¸ó¸a£½a\x0019?í!VÔûü`g~1íF\x0018^Ê1¼´ã0aÔý|ixsc\x0007"qadßáÖ?Î70M¡ÉØ*(ÁÛÓ«d½ð¾ôÀcJî\x001b\x000e$«ÁiI:``??®+m­fR\x000b\x0008Ë/Õ0AåÁ»B%lð8QlV&¢%ÄÈ\x0019Ã;e½Yú\x001cõ(Ø¬\x000c¯+XBw2Hõ\x0018L8tÉÁõ³\x001b\x001a\x000eDs	f()çgõå_B\x0004~\x001bäñ$UÀ\x0007/ù\x0016>ÚßbEì¯ô\x0011Z¾\x001d \x000cïr\x0018(ï[;%_%\x0000 Àé\x0002
\x000eÚBoµÃ\x001a¾ôêÐßêû~ç¨ÆÛÆ\x001a\x0005\x0006Ú\x000cïVf|lOåITEH«vNýSÏ(Hó$iAÄt\x001e¥§dVÓñf\x0011|ö¦ÑÇÝj\x001ewWÒ3'\x001f `(ïÎs®W\x001fÆ]Q×´ô\x0001]¶}!\x0014ì\x0016WH"\x0003\x001du´CL3kÐ¡"\x0008ÑÀ®j«%À«xÏáHµB	/;\x0007B\x0004\x001d?ªZEBa$óÏá\x000bH\x000bøàG~\x000bNR°\x001aïÙ\x001ex¿`ÌU;\x0016öÇÃf
úQ40Õ\x000fò\x0003­7¼%AÂgWz&wºÿJC*`\x000f<T´þ\x001eL,-ÆÐUÈ\x0000\x001d\\x001bÄjsðä¥Ù½à{\x0016¼«>\x0018}å\x001e¤Ï¹³wEÕy½}i¿(H¡\x001b<Ñ¹\x0012PÞ¥grCÚêÁmK\ê¢ÊØTy2ÛR\x000fÈÙzà9Û\x0012\x0014oo"ûxF©X|g
\x0001P²\x001d\x000f\x0014W¥3Há÷\x0003(ítïjÇÛî{4îý/kBC«\x0005à«ÌäC\x0003\x0010wR«\x0013!<\x001bU	me\x000fÀÔã\x001cNTx«\x0013\x0010&}«æ¬{\x001atE¢Lì\x001b­\x000bÉ\x000c\x0014»¾"ß<¯¿ÜQús\x0019¥N\x0007H\©µ\x0015\x000e­åó{\x0013\x000fèç¼]Íí}¶4\x0008\x001aF¡J\x0000ÖòÀz\x001dUô\x000chyã£¡dG]¶\x000bHHÿÄ²\x001dhÅ·+[áÆ\x0015½:h»`\x0018j¢r!sºH¡%=ÿgÔpAÏÛÑÃR ï\x0001\x000b\x000fOáK-iM\x0014I\x0011Å»°2*\x001b²^­\x0016wÔ\x001d¦ó"ö
»
þí\x001a\x000b\x001aÌ·G~\x0014%\x0007ÙÜUºê[°¢*ø\x0010aå(\x0003ÄSÐeMßLNQ²WA¡À\x001ex\x0014Wã+¨¡Il\x001f¾õã¾)>+`ý³;ô1¤e) %9#à;B7B¹\x000fý\x0018¯ë>/4­²ß\x00172ï¨ä	M06q
\x0014lB5´Npsh\x0006õmS\x0016\x001eûà9ÁÔÉâ)ø5ïýÇ\x0016#÷y¦¨Çv\x0016Á[û\x0005\x0016lôÂ\x0004\¦ k¸ã^ØÏH\x0005\x001a}X¢)$ø\x0014Ònê¾ùâTÖP¸»\x0007Þ?O@2gñÕê\x0018=àâ;|´Ã
öxS_$UmÁçÄé³Fk¬Ko\x001fÀ¿/Cé -¶:AîMÃ Ìñ4\x0018Ì\x0016Ã7Zºî\x0003HV»:ö8\'Ñ0²tI[qFC; ÈÊQ°±!òÑG\x0007Å!2}-iÂYÓ ÌJt"\x0016¾zSYÈ^\x0015}Ç\x0010g\x0014\x0004Ðñ*;¹\x0008úÐÄ Y\x0005\x001fË{¶ã$\x0019Z÷³ð¬>\x0015jxUôr²cµáa¿äùTWI/¿\x001ag¬]ð\x0010}%¼!_ÉèÿEx\x0001¨/J,\x001d\x001bÁÉ\x000fyÌÅ\x0012>ç]`g\x001b=6\x000c\x0011«0iÖt7ð[\x001fÖx2æc«²Ûæ\x001dWÙ\x0010
\ ]R\x0017õ\x0010>+6Ò	ÔZàg8mñé¡\x000ft\x000bÑêª^XhÇð6»ñ
e÷-:Â\x001bûì\x0006c0Hè©Ç\x001cäGeERM}?Óg2ï 8\x001e3Ó@CË
þ¾ùr5±\x0003.BÛ\x0007B\x001ar¹ð\x0019	!\x0007µÌÈBõÁú7S8V4Ð­sÅ\x000bÃ|O³:Õ\x0001VI2\x000f\x000cîÂk\x001bG\x001b¹\x001cÈæa³\x0011Â½k«\x0007\\x0007ïµÆN\x001d¤Þ2%;ð}k±\x0014þ¾è>§KßÖ\x0002q~\ö LÂ%CPX1wn\x0015B«Z\x0013²þÈhú¡ÚBgeá±/æ\x001c\x001c¦Q÷\x0018\x000bqz{©&lî2\x000fÈ\x001afD-\x0011å\LÊgFR¯\x0012ÉdjÒ×}}½ù*Ôó=Ä9³uàõ1ö¬\x001e:t<¾Í¶®£\x0005Ô~ÍnW@þtµRª\x000eS½Êöã¨W­tä|\x0015±±ßôXpt\x0016¢^h,³ÄÊÔSié\x001e¹@Y,\x001drz;ÿs.Ã¹/Ä4åVì=áU4Ù\x0008
!ñjêÒmi8«\x0010\ØÀ\x0000»z®k¯\x00088\x0008*	ÿÏÓ°_T\x0015\x0016Uª¸\x000bYí§M\x0000{é¶ß£(ò½·8\x0010OÙ)_æCßW²»YwhÉÍ°\x001cê\x000f\x001a\x0013ð1³¾fKtØ2ôÇ~#á+É"*­ü\x0017\x001a[¯Êºì[çÞa\x0012ÓÖâB<)·\x0000âduD.Ó­\x000eK8Ø>CÏñ\$\x0017rõxÌ\x0019Lûíû"\x0019Çw´\x0004Ñ\x000ctn6\x001e­\x0002y¤\x001bF0Õ~v>EÜ)³\x0013·a\x0007®\x001aWÕÚä°WáF\x0016. Â\x0005bØ\x000e­»YÆnoãÜVôË\x0018ñkËëÚ÷¾Ýr\x00170&Îr{ÜÚÛÆK,íPG;Ý{Çºï7$ü%¾OcÅ-(ßZÓLoÄÄä¥ÀÑ§1Ñ%(ha\x0006->,f~®sÄ½ÜÒSTÐt*\x0006aSûX@F"\x0014:æ©EBaË\x0003\x001a$,)ã ©®½ÂX¾\x0002XÅysÖÁ[Ô%K³­\x0010oý(ó]ÓÉ\x001c{ÅÇ\x0008\x001cÅá§ºì
\x001fO:	vOÝ­©L»ðT6K1éh·ÅU½\x0005\x000f"Û½
_\x0004'\x0005kvqÄÚbIà ü9\x0015
KÙS§NxÀsÒdQ¤©\x0018ò\x001bj¹ZYæ¿ã«\x0007¹ËÔZwm'Ï¸0ã©\x0008SÄä¾ÂAu¤©D^Gêß©xòV0J¸OÕ$ÝÚJþÃ$S1£Y\x001aÒ=ÒÚºÊµ¨ü¾\x001e\x001a\x00023\x0007·²\x000fØO»ýè\x0007Ø|ÀÎT©èFÉÇw3ÿî~ñ¸ÃO:/&LÙgëÒGî\x0016è6Æí
deL¡ ×ã`àÑ¿áWÒÁ}\x0007\x0001lá\x001bA\x0016hë\x0011öý\x0007\x000e³Ä
"\x0018Õ`ç´ÞQ\x0005ê´ï· äðÑkDQñìÑ«]	û÷&"Qøóüî âïeÌöIÉê"1ø$w»_¦\x0015Ï¯kÑ]ñ=¯¸¶\x0016Ö\x0012\x0004ÃãUö²?0rÇ\x00151
'¯Å"AÂz¸	¥rÛÙ°<òrÕÖnü\x0018®N\x000b9r×_ËúÐ¢^]:d·g.¨\x001e54^\x0003\x001f\x0015mf,®ÇDÑ^³~ë\x0019¦à]L^%\x001b\x0017oÖÔÚÁ\x0006ådÐ.{&Á\x000f\x0000\x001fÉ¿`¡aÁ\x0012+P¼hê.\x0003µ\x001fS5¼j\x000fIhÉ\x0001ç»[N \x0012ë\x001e(ºc*\x0003³#wtLîèd¦Ù[T\x0010sÓ3éMìd|ÎÂÂ}i©ÞZq¨ð´\x0015¢kêÿ\x0001tjn
endstream
endobj
46 0 obj
<</Contents 47 0 R/CropBox[0 0 595.32 841.92]/Group<</CS/DeviceRGB/S/Transparency/Type/Group>>/MediaBox[0 0 595.32 841.92]/Parent 6132 0 R/Resources<</ExtGState<</GS7 6155 0 R/GS8 6156 0 R>>/Font<</F1 6159 0 R/F10 326 0 R/F17 345 0 R/F5 300 0 R/F6 302 0 R/F7 321 0 R/F8 306 0 R/F9 318 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/StructParents 96/Tabs/S/Type/Page>>
endobj
47 0 obj
<</Filter/FlateDecode/Length 8861>>stream
xÍ=Ëã6÷èÐm¤.6\x001e\x0004HÌtTD]åñÆÌnÏ¸7ö`û V±ÊPIÕ\x0012ÕaÓ^|÷Ïøh}Ã\\x0016	 EkZdMybº(\x0010DâÈ\x00172\x0013¯ßnëåÍ|QOÞ¼yý¶®ç\x001fªëÉ·¯ßoî¿ýþ§ûêõ»ùír=¯õëoö\x001fj(ús5¿®¶çç/¿||ùe\x000cþ+ËOØD\x0019I1)s\x00191ÙV/_üïLÖ/_\¼ùâõ\x0015ÌèÉû/ 2ð	/ò,çÂ°,Ï'ïïlµ¯¾)&·;Û2VØÞbQ\x0019\x0015ýý«/¾þ}v¦¦oggrúîÝLNÿÛþ\x0016Ó÷³ï'ïÿóåK\x000bïo/_Þ?ÁuV\x0014qÿnÅ½\x000c\x000f¸Ìü}À_5;Ëi\x001e¾\x0019Û\x00119ý/\x0005ãfð^Ùå³á\x0001\x0017Y¡~\x001f0c³3Î§\x0006ÿE\x0014á¯an¾\x001eºC[Ä}ÄL|\x0005hy\x0005k4îÊHÍ²Âü\x001bVFê<ãX¿\x000e\x000e¸\x0010äÿ\x0011\x0017*Ó¿»ô\x0013bÉÇäýÂ¢¥,\x0007ï\x0011ÐÿáÛ\x000f´ø×/îDÎt¦\x001f1ú\x000e]\þõÉë\x0004ß»ØÔõæ.Íú®6úóY\x001fç\x0019Ë;4­Ì¤äö»Ò\x0001»?ÈºõÀ+EÆ\x0014¼S9X\x001f<$½ð\x0010=°Ø¢ÃÃ6oó'\x001c«1\x0019OÂ\x001b~-%\x0013\x001f\x001fbýäõ;À÷¿~ñõ\x00136\x001c\x0012+Øù¤°ìGé£|[ðïO\x001a»ê\x0001YèLI§­­îgV$øÆ¶¬mãÅù°ÏFåP&ÏÏ¤Rsü{Ao|
#Î¹¿\x001cËò¸ÆçÂ¿ePÃ·©zÚ¸°µJu®¢6Êò³¸M LñP_Íþ\x00176qÉøå-ÉÏµýÉåùà»¦©\x001c\x0002Z)R\x0014)x~7S\x0016}`.¦umÅ5÷ãP\x001fàËé\x001d\x0008ró%HqëY>­g\L«õ¾\x001a~\x0006lOw$Obçîç[|âÓUeËµ/¯«\x001fíp¨;è°+ßÍôt¿°_@#Õ3j\x000eÊðpCEzújf>{7
3\x000b¸ä\x001a&£;\x000b«Ã­]£%uÞþ³[\x001d
Â>½q31ÝÚÚÊÎ\x001d\x0014®beWØ®%ÔÃ/¶v*x3³O7{Ð\x001cFà\x0015,ÏI
;ÈUmï·v\x001a:Ö\x001e×à]ÒEÆþ.\x0001«æºDN0\x001bV\x0016<5\x001bk»\x0018Â¨77\x0015,IýÊ­PÀY÷{Uá¤e¬çõ¾vo`í\x000fëÃv¾Ét×{àF©ÄÀxQäê\x0011\x0003ÓG\x0012ªÖ%m¹\x000bº\x001bxr\x0006SªhJóSUÁã)Í-Y5ejJ_Â¼0YÜ¦u\x0005Ø|=Ç¢õ`Ó_a9\x0007qV:êô~½\x0004Åýf³Ez¡=ÑÓj;ü\x0004r^dL$ºÒu^òéö·@Æ<­Ââj5¯ï\x0017p!è×rxpV¥\x0005c[/¸O³[¹aÏ÷°J?\x0012ß\x0002|¹q\x000c«Ve¸­¥	Ãw\\x0018å2Ññz7+\x000bñÒq«\x0015þ°,Éî\x000c\x0003Ûü4G|«ñÝ\x001e®Æ~í
ü²ß\x0001*\x0010ë\x001a^ÐÍí\x0006N¡!J² \x000f¤*ñ'+¯ZB§a^Õ±j+>2$Öð\x0005?7ô!W$>\x0007ÀË¬(\x0016ò~ÿaµü¸·LÃ\x000b
÷\x0007xDAªáÎøôÑ.ÐÞîÑjbyÒ®ÏÊ)0£k»Þ§	}ë&Ì¤Lt»%è£ÊKTÀs\x001e¯×5\x0018.\x001fT)/iy¢\x0006¬>#Ý[üy\x0019Âê	*Ç«ß\x000c\x0008\x000eUTåz'½cã)\x0014\x0018ÞÕ`zúÃe@P?¾Hó\x001aÇÛ\x0019çÑ
nYý\x0003<^±áy®PY©S¨\x0000Ï\x000e5¹5NàäGÆ	>¸qB\x001b«cã\x0018Í8\x00009¼èà\x0013	xo½\x0004"Øè\x000eÌh¿®\x001ckD^¹©+÷\x0002\x0005c^8*Wm?Áklg\x0001\x0012cN×þ\x001b {J\x0005¶\x0006Tqå4\x0016äÛ®9b×øMÿox¥Y\x0016â#Í=ë\x0005h2\x0004¸ÞìqðsË¹÷Ã¯¼,%W{\x0013õad}ß\x001eF\x0018¹±Àujä·Ë;;f\\x000eÊé7\x0007ývÆ­<]&wðbÛÆòÊÅÒjg\x0016?* ×3nq\x0014þyBE¡o°öccë=\x000cukÿÙmÖë
e;VL\x0001ù­¦º±B«Eå\x0016ØÁWç"+Eª#è+¹ÕÙð~AúÂÊò\/­\x0008"Ñð2P\x001arþc7yV&áý¬©\x0011èC/3ÒPûðJ0±$À¿XÅ4\x0016Ðû\x0016õzE\x001annp\x001fà\x000eX\x001eè
í=>Ë)ì\x0003\x0010\x000cÇXl[¨oÿXûD?,\x0019\x0008ô\x0003\x001akè\x0007­·Ëùç\x0004Ì¼òuíºt½µEKØõ+W\x000b9Öú\x0019\x001a]&ÖGj`¾ëÅò\x001eHÉ«ÓniJ9;­y\x00122\x0014}/ò'zö\x0006¥må\x0015\x000båå|æu$Ås÷S\x000f8pà¥ÿ¹\x0002å*Ù6
¯CÎ\x0007iß}g\x0006Õt\x0000ÎBL\x0019\x001dv\x001c\x0003ò\x001fø¾P»E«/N{)³\x0017®£a^¸aÊ\x0016\x0018Õjãt\x001b§ø\x0016ÝOMØ\x000fùeÿ\M\x0007±Û5ÐºÚSêz¦ý¹R4Ó¬Õ L«&±pý1E\x000b,
\x0018,®s"ê\x001fÇÉ*qI»sÀ@i\x000bKDÚ×Sªô}hëw\x0002ì=B[\x0018#\x000c\x000e\x0006c}ë~^¸IVtzÇ3z\´ÐIÔruWÝý½`N'ðËãC\x0003f\x0016NÊnÑEpo l9ÛM<\x0001lÚÐÍ+Cê\x0008XîpÚFÆ;¹A"&Ð\x00106TPÛI=Ç\x0016¢
ÒtÚè!\x0006Î.­A±wÓB\x0000»Ó×7\x001dö[\x001em6ÿ}w²T4\x0019®£xâé\x000e_=\x0016Î9Â&:Åì\Oý\x000fñ¡¢ËO³Â1LËWKË=U\x0014ë9ðñ}MÚ-\x0001Æ\x0003\x001c\x0006\x000fI¶ý
Ù(J¾X§ZccÀ¼¡*UûmKP\x001eØ-p\l\x0008kí\x0003#Ç*;dh\x0002ÕÒqê5\x0019\x0019\x001aöÅ×`\x0007%«®ýõ/|xE'àÞÀÍzaÁÛéØÉ¹ú\x0011ü]]­\x0017 ^8ö,Àcõ\x001eÏÂqh70xWåzï'²£P<í)ìC$Thð8ëaý1wºËî.bÞmÉªg=¦C¬\x00188dÞ") \x0006ÄÛ¼\x001e7ó\x0005RÑch\x001eÉ\x001a6/{À:x¼.
\x0014{çmea²<	ï\x000cEÃ|ú?(\x0012{³L)ð92þ\x001b±\x0015\x000c@ùö\x001f¥ÝÇí-ª¯xfå+¬æî5ÊA×ßl¯vÈ?ÛÞàaGa@ñ\x0017h=\x0016\x0007L\x001ek?8iè!@F½;iÊ¸Ùþ\x001fngdm»óêHÎ§ßM+<\x0001-Ý\x0018¡TLoàx\x0000ªâ;ã5e2ÙöZ§}ö÷\x001c¦C ¨ô\x001eÔ
-lÂ{<=^\x001fè\l\x000bT|Xè¤BÇ
¸n /\x0003tO®¨Á|'\x000fÅá\x001az¶ðÇ£ëoêºz¾ßÒà¡Þ\x000f\x001b«ae8´ûn\x0006³ð,VY2Ë5®áx-27\x0002\x0007Óy§\x0001\x0002gú\x0004§R\x000bX$åµç\x001dþâ±Â|z7B\x0007y®3õ`\x0007\x0017\x0016ê}µ¢3xNûBIÏ3ñ¹Ë5\x0007?dS,\x0013*ÑKÒ\x0014\x0006W¹*Á?.\x0005³¥1ç$Í\x0001Z\x0011¿`\x001e\x000bíÄ\x001d+"\x001aeØ³¼-ÚÒ×ä*\x0018 ;û=j)h\x0013þlÎµ{átÏH±ð2Ó\x0013\x0002Âi\x0018\x0000!Ö\x001ePçÔ$°\x0017\x0011F£Ïs\x0011´ç¦ª2ÏÔÃæ\x0014?}9Ù[6Ü\x0000
µb#W¬ûE^wµæ\x0005·(PxAK\x0005¸a55-\x0001¼¦t,])·@\x0017Ø2oéÃEüE\x0010÷T\x0007~Û´ÓØoëÃXsÔZPÂ½Øh;¥\x0013Ú¤,TW),Î\x001b¥91\x0010Z\x000cgqj¬_2lÃf\x0012\x000bæÍ(g^Ù=6\x0007Ä\x0013òewÜd\x001bö¬\x0014NU°Lõ¸P\x000cH¤{ó#+é>Âa\x0000`\x0019OÀûehBÎ\x000c»¨B\x001eÙ²Úþ\x0006|\x0004\x00175Û'XÁÀÝ \x0001\x000fèÁ!Ja	q\x0002à\x0016$a\x0010­@[ÄQÈÅÇþÌG9îapÜ3Î÷\x001f÷HÐW\x0013\x0000\x001bÁ°`á¸çtÞSF§-`ÄÁ]%\x001e¾hPæÞtSáiqÔ0|\x0006×5q¯>Î²_Â\x000fÞ¶YÁrX\x00028':AöMK^28]}ºuÈ­LÀt
 
Ä\x000b/Ã4z÷ùþ\x0003\x0013~û·8\x0012hZ\x0006D4rý¾ÍñA{¢ÔÁø\x0008S¢Õ\x0018úLkß\x001bÂÝP÷ðq_ÁEõÊ¾ÔÓý:Ø0±{«°ªò\x0006^ìcl\þ®±
°ª\x0008À¨ÉÈgÙ\x001e¸ô\x0003¦RîÜ\x0017ÏeýÀ ëÌömßñî\x0003\x001e\x000e;w¶û\x0011w+øâüì?Á8Á01¼\x000eiì\x001eU©Þ¡´\x001aê`\x001f@\x0010Îùæ£À6Y!S=1lªW\x000fµAð\x0004À>{ªF]\x0004
®\x0002Ö\x000cM\x000eyLtþ\x0013}Ý\x0008½® \x0008ÇQM¡Q¸§<¨U£xFuc0;:`£N´àÏ½Þ\x0011\x000eß¶ZqÊ¥\x0017ÚM\x0011\x0001ó\x001aZt
«»*ø\x0003îQÒè\x0005×0ê0Z\x0013)ô-\x001díy)\x0008¢\x0004×¹£È¶àÈ\x0011ùq(Ö<k\x001ex	ý´%	Oôá\x000eZàPÆ±\x0016$W\x0002í:1ÂK&Ã\x000bT¹$\x001e±"Ô¬\x0011¶îl¨ÚÝ#{·üèÚu]W'F}õû/æ4©þâ0©!KE/Àjþi<}2Õì\x0007¨!Ú4é!âCçÓù\x0012,­\x000eÃaÅ\x0001k®(
\x0011pÚûM)3ÝUP\x001f$åå¢¢6bìw­¯\x0012÷í³°yñ<3¦\x001c$\x001bó£x´è\x000f\x0010\x001b[%>çÎû5%2%\x00131\x0002j<vº¡#ô\x0012[²\x00189®\x0010\x0019ÐÒzl
\x000cv¨ð\x0018L\x0017ÁR%=\x0014b\x0012Z\x00077!Õ@-ð@Tû\x000fàñÁd?PMú\x0019õ°\x001b¸ÿÎþG«ñùp
Ý°Y®«"ém[ÒI\x0001_ÔàÑ\x0008%ãø~D\x001a#Â± õÂÃøX+
\x0002Ýúe\x0000ÙÜJZ\x000f=Ö¿õD^Á#/r)G#/äh\x0017	£E^$àý\x0005õ \x0017wo\x0005áÍC\Hº\x001dg¼½jÐ`K\x0000L\x0019nòÒ[,¼ø\x0015,3¢\x000fÕú5}þ®«ÙYá&²ÃÙlÉ¯.<Ö>.*Ð?ëù\x00124U\x0002o¦y}¸ÝÀGè;ëéºlÙ¤Ñ7i]­°\x0018éR?\x001dvæ¥x\x0000Þ/0]Q\x000b;uúðlb²ó¢\x0004§«';OÀ\x001bï0>\x0001Ðï\x0013#û\x0000\x000b\x0004lÕ5¥\x000f÷C0ñ(\x0013ÜwJÏ¹Êx\x0002Ü\x001bÆ¯\\x001b¢ð
\x001cH/ÃI_\x001f\x001c}½lõÖì¹Ì>$ã©V]ç\x0003'¢(æÌÄ:\x00077ï>Ê£<üÇ\x001d
÷N=s&¶oø8
Ò6ìèOpÉmÄÁN\x0001H¡Î_×y\x0002Ä\x0012·­¶\x000eÝ\x0017Æ¹Nöÿbp\x000f²î)Â¤\x00112lY-[\x0008C$ôzO"fö\x000f\x0008ö[\x0002GZçfå,\x0013Üh ®ÌÙ&6Ûz¾öéyäöí\x0018Or-e\x0012½¶=Ðª\x0018b
û\x0003Õ³ö1u°J	î\x0002\x001cÚÙ\x0002\x001c*y_Çg\x000cÀ×\x0014wÐØñ\x0004m\x0017Á:ÁâìÈã\¸¸Æ:5¦qX¥¯¬\M1÷#jzçö½lT@¿#Ü÷\x0012vÖ\x0015¤9ÅÑ~?½\x001f~ÿ¥O5~¥3X%ày·C;+$	î\x00138á\x000f5
.§«\x0015½×MÅwó-ø%6©\9î6Áä3ó Í\x0015L¥GÎãûù¶® «QF*ßº®H\x0018gô5Þ×Ê´!÷XTá»)´aÛB\x000f_35þ¢'ÅÙ9GÞðµâP9#×Ü\x001fæ &ßÉ­q+jnmVÂBb~F\x0008¶E"	o¾ÙA\x001c"×i\x0016N\x000c îµ
*0
&z\x0012\x0012\x0019ç1½¾\x0015ÓÃ8¹¿dY\x000fËÓ-aàO÷Ëw³WnÝm Øt\x0005þã>ë-\x0007tþ\x0019~\x0016pª:B¦
­!åE¢¿Ã\x000b\x001e9\x001cû§Àq\x0018£äe4E{\x0016Éú&5\x001c+\x001cÓ»&å \x0012¼\x000f3çjÎEa%¤\x0002¤#.
Ñ\x001f\x0014<A´ï·\x001b§Ã\x0007zoJò)§|<Ë\x001a	Ø*äáùmGí#d­ÃÌ¾\x001a%K^7FV>\x0003%©¬ÆÈ «@ÐN@¤\x0008\x0012(Ø\x000c¾Kr\x0003yClr¥ÀÌ\x001d	x\x0018\x0012C\x0004-ð4¾^×\x0011´¨ü¡©å\x00126ª%s°ïcq$ï\x001e7÷\x000e[\x0003¢)Ô\x0011ù@÷´g\x0013b\x000b\x0001Ë~ä[ØKØ$k¦Cr½´\x0015N$\x0019	x×w>¤f\x001dÒôPþËí¼\x000eÜMÔ¦û\x001a÷m»´Ñ§¢R\x0012¶M#kë¤ìñÙþ¬Â\x001d¢ïX¥åÐzj\x0002ù>ÙSgÜ¤\x0016eMoe]£Rð|®YÖr3ß\x0008<Ë\x00002¼¤KV§£Õ\x0012=aÖC\x0017õÞ5m¶Òt¥2&7ÅàVL@~þÄ '7
\x0016U§à
F<\x000fb`ÑA\x001dÛ®Ý~çÜíðÍ?}ÚT»VVF*¨<N­c\x0011ç#PºýðÆ[]B¦âD_\x001d\x0019ùÎkÐA^~7£ÇV\x0010£\x0018C{,Y¤z7´Âü¤	»
º!IÑñÉ¬CÔÜY³w?Rçe²\x000c1âÅáº\x0002êÞ89	:M\x001b|´~ï2½½ðò¬LÂÃ¤Rvn?ßõÐí+Mé\x001e3\x001aìR!ÉFÍ\x0005â©÷Tf\æi[\x0004FâùúçÛRø¬Ì\x001cSjúu¤\x0005A[Ë êlB\x0016R²Q\x0004³Å\x0006ó\x0018y³Xéa£\x0008ü«K`ßNxnëm«UAý(ß®­ñ+õ,Øéìó­öîÏ\x0014Y:Ã[#D½ô¼­\x0014(\x0006Ä£Ò®jQPÅðèe|\¸\x0011ÐYð,( Ûp¥Ns\x0010\x001e\x0016K\x0006÷<Ùk\x0002Þx'®	ïæÖN(ný\x0000\x0001	HWÑ'4v\x001a\x0005úSL
1îHÍÿà\x001dß£Ì(\x0016}W.MÕFr¨ÿ¼¢³öÔ§Åt±òI\x0013@À×Ü¶S6\x0011ú!Þ\x0019zºØ\x0002\x0010`
¹®nÒ\x0005\x0014d\x000c\x001bÁy\x0001eNÌä\x0018\x000eR4\x0001ÐÀ0µ\x0003Ñ;Anþ¤	¯\x0001Öç@\x001eO
 ë
ÛaE&ËTwa)
­¦%¸d\x0011ÞÇ³ñ}\x0001e-çÁÝÓ¢]'<r,ì@t\x001ea#Rã=¿\x0013ï¹\»ðÎ\x0016°:liÅ¥å®ÞÒ¥\x001cÝ­§¦·\x0007ñÑ>Þ!Õ*Üq¡¹\x001dùØÆÀ\x0002 §j\x0002þÔû\x000f]2xç´ß9\x0001\x000c\x001dv\x0013t\x001aª' rµä·I5s½@ÛÛ}µG²1<
YnaÊÔlá[XdÅk»5 í©
>Ò¿õx5ÊÏój,\x001f@ö\B°ÑñY9/Ã\x0001uîr"DÉÈ1\x0016\x0004Så\-\x001e7î!pLN¹â\x00187û<\x000cQÄyNìîT=*¼o.\x0014>d^bäâ{ë	±{g\x0016YÀß\x001bEeGil»Ã{ ®£ñøQ7Ñô9\x000eý¾\x000c®Ñ=¾å\x001cò7Æõ\x000c±¼b>\x0013\x001f\x001dèÇï
£?zÇN]2*Ntþ.&ÓA\x0017Q&óæ<|\x00101ûöU\x001cäã»®½s4Å\x000b5áB\x0004·\x001bx\x0014Ð\x000b3Úæº\x0000ÿN\x0006J\x0011 çÍüË\x001bï\x0001\x001f|)\x000c¦\x001c[öw\x0013\x0010|n«\x0019Pq8C\x0005\x0016¬¯&wD¡Qùøm[M®éx±»¥>U¤ºO÷[Ê4u
\x0001éI³©Ô8lW ¬U9îW;:\x00032Ñ ÜB¨eôõJ

§D¯:³\x0010¢´]B\x001bH,\x000cëmÑ#,ù\x0011=Ë\x0007÷ÒVófÇ\x0012Ë·E>v\x0002äh÷õÃ\x0018]Þ×$8Í}\x0010½|h¥üà±àiWñ5É]eÔ¶»\x001c£¹#ÅS)
:qÄÙy\x001eQ\x0016×ñ¯ì³úeØõ\x001báÊ>#\x0001Ï_ÙÇKº2ÇLï·\x0018w}MCîÞ°Æã%òrÙÞú\v©\x001d\x001cr Dc²²
Þ¶s¿B«9f´§;ãù$2ÈÞÆ!èR²gáÒ'\x000ct\x000e=i£"ÇÐ¶û^ì°ÆU\x000b¿ÆQßg+]séÛ"\x001f×2Ú3\x0017,òêóû\x0004FªñnwyûTäýuÛÀÀÏ\x001c;ërÝ\x0005÷Þh´Ñ\x0000\x0012ûPÈåÕ\x0005NøM\x001cÕÔ>ÖâÌ<\x001b»3Úq;¦áøëß¸\x0005ñ¤Ç÷æ²3\x0008Yhü¿+éfúâO³#r\x0001Ûúh4­¯e!!\x001d2¤F\x0006ß^\x0018#¤'6=BÌ¿	Í-Ká}÷U\x0005çÐsiÊ\x0006mÔ\x0006Mû°Ðå\x0016üI»éÑ\x000cR©ã
o½ñëë\x0004}×l\x001cÞïVnÚ2j\x0010Py|#léÄ÷ÖvBÞ\x001bq\x001f\x001f\x0006\x0018\x0018J§Éd\x0013C³j)rðMH¯gÙÚQÕ^0ç~;1L\Æén¯p­§ãsLiul¦\x0013Ã\x001aÃ1ðWKÀ³\x001cëæÒ\x0006\x0010!³Ñª¹µÌÙøX÷A×
!zå=V1[h\x0001¹9£kÎ05­U\x0004PiYZ\x0015çææ@Ú
^ä»ðjR¡½\x0007otÛ¬\x0017õ\x0012r6ceøV\À ý&ýë¶S\x000bÛ*;¹\x0001Ó¼\x0004×^\x001eK\x000eþ\x0006|\x0019÷;\x001bïRª\x0006,Ë|;ÙUþÈg2¿é÷u1¡Ss7FZ\x000ea­	x\x001c\x0001^\x0001I4\x0007\x001e_ÁI}f\x001e@hià?ê4Ërûf{Û<ÿÝ\x0011H]D¼úÔ5­ì¤=®\x0003#àHcÐZ\x000bzd\ÞìO¼µ7¬H\x000c\x0012XWä$sÏcÄj©"A\x0000\x0019ê[/4ø(Y'Fºl0íÊV	£Q\x001fbyÛÇ¤X©Å'FøeÑ×ûn$JyÞ\x0013ßãyiK%uP\x0008vBnln>1fÙÑY0°DB£180ätí\x0005^m"'³ºåÅæe&S#}5IÂ\x001d\x0012\x0019\x000e\x000e;+Vnó"µQáìBñ\x001c'y±\x001cw©\x0002E¬þ¡0q\x0007¬þ\x0003p}\x0012\x0013°tx¶­X>àCaic\x0012Ü\x0008.\x0014¶(OÂ\x001b>d
RlØ/RÓ¹=éië\x0003ü\x0010Ì}^ùû\x001f'Q
eÎ}á_(ÎÃv/½'Ïð^\x000c6bªS\x0014ò\x00166-ÑÂF÷¬Aébx{¡]CÍS½yØ¢ç}£m7ç77Kr;'ÉºÛºn\ömãM("d"ëøAá\x0001Ézw\x0008²<Öú5jVô®{ÉÃ«1N\x0019ÄýsEâ\x0015ôü½V½ë\x0013Í<ús½é7ø4ö3\x00120Z·Ét\x0004&ø¶ÏrwT»c7
"Uë|Rú(ß\x0010+ß\x001c!ÂëX¦
ýóÆ\x001bÌ´ä\x0013\x0002 09R0°°[¶äf('|£®)Ûêývé/!©ðuå®KªÏ¨.sÃtYO}ñý|G®îöC²:T.LU¢¡­\x0002´BúËbÖ»znÿç5ó
\x001eã=©ßËC¨H){Ô&ú=²ç±4Ü\©æoXóÇMI\x0001{B\x001a/\x0017\x001a\x001eGç£`\x00077%ú\x00077F°\x0005¤ðþ4\x0002<Y\x0011|àñySÀë·Ûzy3_Ô`\x0010x[×óÅ\x000fÕõäÛ×\x0017ºÞÜ}ÿúýO÷ÕëwóÛåz^/7ë×ßì?ÔPtµÙÔÕ¶k;xllMÒvÀüø6(RCJ
®<ò¿h^\x0000jÀ\x0016%À\x0013Áéor¬üè½\x0003LµóB\x0003ËãVUaÂª	@\x001b÷
\¿GO}lóÑnÝB¨SïR(Ó³\x0014\x0016¤¬¹9qLÛv#3Y\x0002Ô\x0002.
\x0018z\x001b>;Q\x0002ÖÛAa\x0015\x001c]\x0013°¬x©¦ËÅ
|ù¼45-¬ÜÅ)\x0019[\x0001\x00179	qöW9=@Éb[õÕ½Xÿ\x000c\x000cNÁW§Æa¼l«¥ºªÜ\x0005¢Ú\x000b\x000bdÒËR\x000e\x000b¶@W'Á<^rHkËû_éæ\x0006=],A¨ÆÂSý\x001aMG÷PH\x001e5ìÏ§5Å£hM^f}.Ô¨Só$ô\x001c\x000fîÕÓOjza½A3¢»\x000f\x0019­Þó\x000eñ.Ý²Qb/<á\x0006($­\x0003PY47GÑåDÁ3RÅÅWeV8ÙýÊÉn!m¸ûÖes=óÙRÌæ.Ëà8]õ\x0000ô\x001ed:Å{Ð\x0012[Ë0\x001boK¼vËCª®G±+j $ /Ü=È8\x0017%ýlÎ¡\x0007¦Ä§÷·qµ\x0001¹ÉÐÿÐo_Ù¥Ä
Ãa$õºôºÎãÊ]ßM£¤£%ùäCèOmüÿ\x0018õH\ÿü]^>jËòAâäú·¹ÔÃÓõmN#ì\x0005¢°Yh_F[\x000eÈ_
\x0016.
Sþj:ÕÛÊ\x0011®R¹û,Â9ÜhÍbÎ'¯ÁÃæB2ØçÁÕ£¹r:Ü¦@ò\x0008ª\x0007¦ëÚD¼Í®Zû Þùþ9Þ\x0014GCù²;fÕP&·+£\x0004Ñ¡waßåä\x0005îg\x001aîÜæm¢à§ò,ÞáðÚUà\x0011\x00058ZxéT:zg"Àîê³ð;\x0000G\x001dyZ7\x0014ã¸GäÀh0´\x0000<'8ú\x0010n<´ª·`ùúoV\x001bÚÚ\x0004Á!¡úha,h:ÅÚ¢v	²¶B	}PÁ\x0010S&º6°ÍË4(aGV\x0016Á\6èBtgF¸7%øÕ[\x000eø¸\x0004Ç¶\x000c5\x0017CHÐcàÅ¶¢´\x001d9}ÏM\x0003eÞ²Å¹¿]ÞadïY\x001e¥<ù¨¨#\x0007\x0017%8Á'æcXñ_Ò-\x0001k-\x0001Æígv\x0002µÿMC×\x0005æû<\x0019´áKWÕn±p]§/\x0014ßcn>\6
þ§L\x001c|zTó,­FÝÆ(©\x0019Zý\x001a\x0003.ìÓ V^EÛ	z\x0007§:'\\x001eÕÏ{ý¶Æ\x001dÔcÜl3 ÇCý]í¨O$Ä\x0005\x0001Ðó5wÛòâå9É­\x0007³øjO\x001dS~}\x001eÓÄ®HH×\x000cÅä±Ãþ½é¼",ú ¤³áùçôW$¯\x0007êLW 62¼¦G»\x0010B}Õñyñ\x0000#ÙfÇaðt­(N\x000fxH·\x000bÇµ\x0019-&º%~È´"Ö;~wm{Q%TÎYs/</Í\x0007eT¹À»ôz1z8Ý<JfgúøZ¿Xf?5×Q¿Ì\x000e>)ùð\x0001÷GB;æúMà\x0008\x0018ö<ÍÈ¬Ò'Y\x0012Ø\x0017p_ÓÝ]§ZúcEgdþð¶¶?ëçø~ý<AÊéê\x000fÀ²çÀ 0\x0001é2\x0008aúËê(h\x0011k\x0012[
ïVóÐÒfìÁ>®Föb
útÐÙ\x0010ÂÀqb6NN\x0005Ð\x0001&\x0005äùI\x0000Ã\x0010\x0019ýËÖ\x001cíqA·áÅaæ\x001c¡ìß»\x000ftOO¬éBõËhÒï¡Ö\x0006¼\x0001h(s\x000f¾Â\x0002hóf³\x0005\x0013ã\x001d\x001dþ\x0000Åf73ô-®ý°ssÌ²\x001b@\x0015 Äo3×i\x0018ä+D¿U\x0018/a(]¡Ù *MÝ½ÿ\x0008¿&õÚaß<#\x0006\x001d#Fâùê±FáñþÛíÑì\x001cxq·(}JTéïàÒ\x0010xY/7\x0014¿o?âÓÛ->8®ØÖ7±\x001a&8gæ\x0018Ð.øt,ÃæFDX 8\x0016ZÀ\x0003\x0012+~ÜW ¼áKé¶>Ö{G9\x000bÜÞ\x000fmú~ÀwÕ>^B÷ñÍòÇ\x0003>2\x0017Úá1=|\x0001nõsôk½«\x0000WVÑÇ8ìË\x0006?¨[Êf¤a\x0003¸88¼±.Z(Gð\x0007\x001eß¨q\x001c¡È³$Ö¢¥D;ôqÊ\x000b \x0012ûOg	\x0010­¸\Üz
	p"Â\x001a\x0019_};3®\x0000fíæÆe2wë\x0002>¼¼Û\;ºYB\@ÔPXÎ"\x00106zñq¿ùïWQ[\x0018á\x0018Ð\x0016[ZW3ÕÔl\x001c0Õ°«\x0004\x0010)Ù®\x0001\x000e£ö\x0008VôG8ÁÃ\x000cÐ¬À¿·ßPT¹DûUMU\x0007¦\x0002ÓO'Vo`TD*\x0005ËïíÎ,\x0013
ðÎ28ÝDÄv>ä¦³°û¥ÛÆSi
Ñ\x0017ï)ó0ú\x0017p¿P?Ë\x0001L¨÷È!\x001a1æ®Z;\ \x0014Àáá?È¡\x0016¨6ëéUuú=4Ý.óÜu Ñåç+\x0015ý°Èí\x000fSå\x0018l\x0001·?n¨âü?¤NNñ
endstream
endobj
48 0 obj
<</Contents 49 0 R/CropBox[0 0 595.32 841.92]/Group<</CS/DeviceRGB/S/Transparency/Type/Group>>/MediaBox[0 0 595.32 841.92]/Parent 6132 0 R/Resources<</ExtGState<</GS7 6155 0 R/GS8 6156 0 R>>/Font<</F1 6159 0 R/F10 326 0 R/F17 345 0 R/F5 300 0 R/F6 302 0 R/F7 321 0 R/F8 306 0 R/F9 318 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/StructParents 97/Tabs/S/Type/Page>>
endobj
49 0 obj
<</Filter/FlateDecode/Length 8672>>stream
xÍ]Ír\x001c7¾+BïÐÇî
u	¿õ3¡`\x0004)QölfµcÅîÁClÉím±9Í¦Â~¦½ì}^ÆGsbL\x0014ª
 hu,GÈ$«PHüf~ÈL<=Ý\x001f6ïV\x0017Ù³gOO\x000fÕÅëËÙ÷Oßì®ÿþôÍ/×ë§¯Wï7W«Ãfwõô»Û·\x0007xôízu¹ÞÌÎ^<ýãñ#Q\x0008ø¯®+9\x00133ÛØB«YmdÑ¨Ù~ýøÑÿÛìêñ£³7\x001f=})gMÑ³7ï\x001e?Âb&g²2³ª\x00111³7\x001f\±o¾«fïo\ÍX`ÿ\x001e\x001fÕÑ£¿}óøÑ÷ó¿-v~ºXêùë×\x000b=ÿ\x000f÷·¿Yü}öæß\x001f?:wôþóñ£ãÛ§dYTUÜ¾¶Yqkfã\x0013®Fð¿Y,\x001fï\x0016ËÆ5DÏÿ
CóJÈfôV¹éÒ\x000f\x0018åø«¢²&,Äb)å¼Áÿã\x0012Oalþ<v´t\x000b÷\x0001#ñ
,Ë0GÓÎ.EQ5ÀÌèÒ\x0014ò\x00013ójtÂ*´ü#z\Ù¢üäÔÏc\x001f³7\x0017nYêzôV4ªPå\x001fÑ}÷A©~_÷ÕØ0¢,Ê\x0007ô¾Çgç¯ÏfäÞÙîpØ}È¾»ÝáóE0=V\x0017ÚÎû®æ>`óG·\x0004½Z\x0015¢ÊÑ;V¥è!LÒÃåÝòPf|ÚÛò\x000böµi
¥7þ\j¡\x001eÞ?\õ³§¯a½¿zþç\x00173ñy¸I4ÄÂ>4³Ê\x001f[òF,L»\x0015ñwÜÏ(ëcFÂ&\x001aPÚÂ¨5àÈy/\x0013ÔÝ\x0012oê\x001eõ0\x000f®Ãõ¹ûW	ÑØeéþ\x0016úd)m\x0003o´û×gTÀ½kJü\x0013Ê\x001a.[	,{"ñgéþ
q&])sÂÕDß¶ß4/ø/é¿ç/O¤åOª¥R%Ô\x0004M8*I»TÚôN¤ßÏ|a÷\x0011ô­~éÿºD¿.ßgzÒHßvú Q0P¾\x0001Ð5xnã\x0012FÉR»eÖè[­µ)¯\x000f\x000b4g\x000b\x0018­ùv½hæ7\x001eìáÕûÑw¾QºÙÖ\¹æ\x0018×[­Y]-¤î4ìÂØÝ\x00022þ¸0óõÞ}¦æ·ûõ¢þìM2N÷xC\x0019÷\x0007Ý»\x001eìÜ\x0018_®·w0öø;tÜõs!Å|\x0003ï×ÐQUÍßºÇwWwÐ½wõUl\ïáÑ¥SÚ´Î4þÉøä(J!7SNÛ\x000c9\\·ûE3§¿\Ãd|ðËïÒé>ë	\x0000F\x0005\x0000ê
wÝ\x0014envÇ\x0017-ªÑÙÞ±,¨»ªe¦'²&Æ\ò\x000c9$Ë\x001aÿI\x001dqXÿÄx\x0016¼ü\x0014ù­\x0011ûÃ¯KÏ³S\x000c9°úA3\x001bEÒCû/:\x001dpBÊ=1HLÏËMe
[g¦p|f\x0000ág¨}ûÚq#Ú+?¸íSÏw\x001b°\x000e\-uÝ\x0014\x000bwäµ;.Ò¦¨\x0006P\x0017º[a:\x0012óa
1B°\x001cNª\x001eê¨\x0014ïQN¾§U ÊÖæ\x0004\x0001Èy\x000fqøÍÁU0ÐiOÀ+£ó\x001eí@Î\x000cÒü[H$\x000e¿«ùå-ü\x0004I\x0018$ÈB_d\x000fò\x0010YvË¥½\x0008¥A|Vz¾]ùJ®Wû\x0003ü&Üòtu\ùß¯÷\x001bWGéëð\x001f®é\x0015Ù\x001fW`üÚ¿\x0007i\x001bêñ-Ý®PR|
HC¹/ÒâìîÂmÑÛ=nK\x0004Hw¤\x000b8$ ~®¯®ºûYÚ\x000eôºÜ,*ÿàz
£	`íî\x0006R\x0001\x001cCYÖ\x0008Í\x0010Íl·ÖúÅ$\x0012\x0014¬1\x0000
Ý5\x0002\x0015ôb
Ù1"=ú¯w·{\x001aê-¬­u<<ãóFm¤m2mÁÅ}»uóÙ\x0003ö¼c:s{w½Ãòû¸oq{ð»5ué«ÀÞ÷qbQ\x0017M\x0013ß§¾!\x0003ö¢È\x000eóêã½Ò3c«b«£-Aº-ûõeì!\x0019SGý\x0004Á±\x0007\x0011\x001c1Í\x0017A#
L¸Uf¼#iDi¦ÉÏ¯8ÃnZVF\x0018æÜ	QÓþàAôS×\x000eú\x00148#u<ÿ*ª@$¤-VHv
¬46kÐjiWQ-zE\x0005Á\x0002\x0016éíO¿x¹\x00152juÓZJð]åm\x001dê\x0018ÃÂ¨ÂªlJ§ü÷WÊê£SðrLÉ¤U\x001ae\x0003 _V\x0007à-c¯%8¸u$Ù gaS+\x001d©\x0014\x0015Z@[Âghõá
{Î±e\x0005ÇewÂT\x0019"OY\x000câ÷è~sÚuJú\x0008-Ó@ÇýÔ~ö=òØ\x0013ÊwP_Mÿ*Ä±Â\x0003:nÈ\x001a\x0016SntXVu»®\x0015o\x0006ìY\x0015¸o,ï	²!Úøv±Ãj¶~0ÐÄ\x0017\ßf\x001eãó¨lí[cØð\x0016¬vå]ï÷¢²ÖÌ*\x0005)PO}\x001c33ø¾]V\x000fö¦OÏqÈ\x0019²Ü\x0018_XH\x0007ÕÌxxÅhä°\x0001táqÅ\x0001¬^»«\x000c\x0003Ueì\x0003ÚS\x000e\x000eäË²¨ÝóÚÂ9\\x000f:.\x0001;Z\x001d­\x001e\x001f;ÓHv(	èpà¡w\x0004f\x001b\x001cÌÈñN\x0017é`¦,e¡\x0007mþ¾²?jR'1nl£8¾\x0006Ñ4Êvð\x001ct(Uz\x0005
·\x0016ó¸íqë\x0014©
\x0003ö\x000cÊW\x0017\x000ez¯÷W`¤ôEcCþ1í®S«IT¬Òí&À%<?n"ä\x0018Ý\x0018Tkù°\x001e·1\x000eÙ\x000e\x001bïPXärXÅ\x0019ò.¬\x0002\x0019à¹/yæk\x0001lEKbwg,hâc)Î®*Îu?h\x0003Z~\x0011\x0008®K\x0007mf\x0011Mpl[6ÈIäE°¯®¯·\x001b0(ðåu¹\x001a\x001f\x0019WT©L\x0000QîW`A:Üz;\x0008Ø@T3¿\x0004áÒêåuk\x0013\x0001s\x0008\x0019=Ê?ØÄÃ<ÐT®°ù\x0016Føg\x001cô±\x0007µª
§|½Þß\x0000íÝÕ\x0015ØÆ¶ñ©¡°­M
=ÿ\x0000æ¡K\x0018TdVq£±ð\x000fóñåãP¥Í5\x001e\x001a´\x0002P\x00117ùzuãM£·Åjõé¶üäK²\x0012áÐ´¦MjÚê\x0017¯\x001d¿¥ã\x001d2×´	Äó§\x000c½Ëý\x000e¶)
·\x0003MFXMx<Ð@õ3-¯ýú\x0000û[Ñx¢£7µÑ¨¦È×ø°Íh	2ô&`¤\x001a\x001c½çh >\x001cÀ.¸¦eë¹kÄYG?õ\x0011Y\x001eôÏËA¼ ªðÇ\x001a\x001fWk·ß4­]ÆkpkJé­	ÁèÔU¤u°*T\x001dû!\x001b Y-C¢ïCæÞ¡')-N¿´ê^-\x0019ý^'[;:o5
òùäÏï\x000e«·\x000eÔ(ÇgEÄeµõhàÖýªýÞ!+¾^\x0017îoÁ|¾ÆßqÙÝ.ªùÁýY8ÃÌf\x0002t#àÄ,ÓÇ'Ø&0é\x001a³ÐO\x000euà\x00067ë)ö¥*T®Qà®c¾0|ºoK:¹cFs?R=Å¥û¢fåMc´ub\x0007´Ó`o¦Oq#úÓ^3tJÃBN\x001fÐ¨\x000f´úB\x0019ï2Ï\x0000ÒÇÁÀ\x0014ø¤">Içd\x0012c«teRöàè½?ð
\x0019\x001dPT½jÛz"ó8;Ã=ÀÓbð­wÊ«BáÖ¤Ia8[ïùY`Aü ckÔñd\x001dÅ!=%¥±ëîwÖ\x001a>Ïx6øà½étã\x0013\x0006~:®?Q*²ÀýÁwÞ\x0003\x0002Þû[uç¹ã\x0015k°\x001fÀÙ^ÎØþÙ¶6é¸6ÔCûS×Ö6¾#µ\x0014MQ«\ÿ\x000b\x00002
røõ4ø_ê\x001aAUþõîv¿_±Mç0\x0001ùZA\x0018V<Â&\x0012vx;G¡qÓ]~x0Ú*Go\x0002'7ðfÍï³ö¸O6\x0011Lq ò'ö\x0006:¸\x0011µxL×¢AWUÿ´R6\x0011\x001c\x001d\x0002ó9PmÛ\x0013sÏ¨û
jL Ojvæ\x0010[Òw\x0004'yRúÂúY¿Ùì\x001e\x001dw\x001b	
%[·y\x001d»F\x000eæ\x0017>ø¹ßÚF&\x001cÕîF_¥B;MÜ³ÎyQ´Àâ¢\x0007\x001c\x0018É¾S¿ìp\x001fÒñ¥<\Á\x0015bÛÕ\x0017Z+Ù^Ø\x0003ªÑ¸\x0015¸Âb¡Àò«àì_uÂ\x0011êò$øi	>\x000bÅåÕ¶OØv/Ôðû\x000bWÊÁ[ñ||[­ò¥Î,ñY6\x0016\x000cÕ¹¥\x0011&Zã\x0008Ûô\x001cOoÀvÍufPÆw!Ñ)ìô\x001cHh\x0005w\x000eè\x0019\*iãU\x001b1:ÿ\x0015Ö2¢ôåc®­ÎFÄ[\x0003:®ð\x0008þ\x000f>Êf\x0006\x0011Ì\x00033LWÁ\x0008;µ\x000c²E\x0001{ÀÖu\x0002CÑ\x0015À>ió\x0014(Ï=²9r×hØ¼ÝÏàôCjoØ°Q"\x0000p8{È\x001ds\x001f\x0003\x0000uQ7ÓDÒ¯¦.\x000b£\x0017\x0004v¬s\x000bï¢~÷Ñ>èZ\x0010;\x0004\x0004uF\x0012f\x0010J\x0015àWO\x000ffO¾=zL\x001fÛðþm=ýÁ^Gâ³îOEn''¾z\x0016¬íºFÉXÄu£à<Óàæ`"÷x3ùÆóêøÑ\x0006µçÍéµ3ÁÛ­Uã4£ú)¨Ñý\x0014¬5ErT('sTÈ\x001cO§B\x001e¬í*ZÁ6ØCZ|ÈTlÞÑ\x0003Ã²/5W\x0011èô¬@FÒRõ¢9\x0019ó\x000e\x001f\x0002à-ãw-\x001eeC\x0008Ý7¶õê\x0015'è ï®\x0007\x00081£äAckyDD/4\x0013+ó@;Ø¼ØN©Fa\x0013©åa\x0014î×Üò`\x0013§U&\x000c²\x0002\x000c>Í1A#d²ôÈ'ÂIýëý\x001aq/g`\x001b_mwþ¬Wé¯ÇNn~Ò$a»¨µ7ñ'¢ì.\x0003 §V&\x0005{áßñ¬.ÅÀ/(Ò8«Vn¶®AmC\x0012Jî'¶ü\x0012ühQ\x0004t*ù¥y@ãûÍF\x001bíèìÆZkÑqY%EÓ)4@\x0015?äJ#F"?öÒujjçC\x0019[´Ñ£6¸aÈ; ²[»wòL*\x001a>%ö\x0003£í;þ<*Ôh}ÅQüáåÀÝ#¦È\x0006Õñi§3\x0007ï­%õ×£ð¨\x0012¢
2Ûáô$È*L:Ï1b6¿X;`1¹Z»Ò\x0004Ì\x0018\x0000éhy~	ÆI©ÌÒÝqÊª\x0006Ópg×\x000b\x0008\x0000KH?\x0005\x00076\x0011·]Ï0o\x0000êQpñ?ë\x0003DMkwyç4«ýê°¾]Ôóý\x0004±`ºÂø«LOÆÄ­z|Ü*0m[«épkät¸5IïàcXd\Ö~\x0011t"µØ¥Ì\x0010L°É´\x0001ÿö\x000c=öØt½'_È\x0003þez\x000ew*\x0004ÉBÙÛ«õq³U%=å$\x001cUeú~¿B'8ÈÒ°\x0001ç;lK5¿;@»×h<cLt	ò±ØÖ_ñ§vmÆrôÕõjïØ\x0004V· /FIÄé¾\®o¨q7;´þHá\x001bCm½ôÍ¬ç\x001f7Ûí$çrVº½1ÑVLïË"·\x0015á\x0008XZ'Àú*\x001cnM\x0003-Ê¤o¹ØèÛ-zÃ­\x000eÁõÐ=wÖT^èÜ]T.\x0017\x0014^M.ÆO \x0014ÙþR\x0011ÖÂÒQüa\x0015ü!}\x000c|.pøóc`L
10¦QàÔ}ß¹¼À/¶\x0004¿ØÌH?Á¨æ««Õö\x0017vÕ
ÞÚ¡`dð]½Ý9Ù¾2ç\x0004\x0017P\x001aêá,Éuð\x0003åÑ!W°¨~çØÝÎ=\x000e.¨ë\x0017ôÙö6\x000e¤v¯(Òâ+ñ\x00147NÄª¡\x0016ºº@ÞÞ\x000c÷ëÀîÏ0jäÇæ\x0016õ\x0006\x0007à\x0006_ÖÈ+ÝËUðë/îàÒÍÓ\x0016êí&r\x000fÞµÞ\x000e\x0015Þø0]ÐÝáÇßø;\x0014;a6¡rô.?¬0RÙKýàwç§Ð)w\x000f\x0018\x001aÜþ\x001c)U\x0005wwO9Ñ¡äé\x000e»Ø\x000buìD\x001dÇeà6::`hÜu\bnÔ$\x0003ö\x0006|[aÚ\»Õºÿ\x0000î;¸D·ëÑ§ZjU\x0008åZ°ñt§º\x0000Á5E\x001eS\HcÀñ:3\x0017cª5ftµÆ¸QÓC]ìûªL­ÉL­IÓ\x0003}¬Ïdù	Ödô¶\x0013¦âC¾<Á,%bs3\x0015Õò8¢mãlü\x0008;	\x001d´ùþñq]h\x0012;Y5±\x000e×´Îì¡pì6\x001a;;4Ck4ïÐ\x000bÕÚßÃi!\x0019úyþMv\x001dcOÛºhÜÏZGã&6Bú0ÿ¨-¶k¤lêÔ\x0011@ÏübØã 	¹2}Ç»v0ó\x0013\x001aä\x001d¼l²Ûc\x0002|ãX@£*/\x0001CºZy½ö+08\x001ae!QÂàØ\x001eé°ÕW%#$Mz\x001c\x000f2ô2\x0014ñÓ=<!\x0015UÒø-CkÇ'e¨[\x000b§ñÖçèx[Ea2xµ\x0008Ñ&¾³í±\x0017iYWv-ûDfNJwûçl#¯¼=\ôºïwsëtÙÏY1Lþ§¾Ð6\x0012\x0016Â\Ódmä³ì$é!æQÆ«ìnG\x001fh§À6Ó×	"ß\x0001sMÞåÚëwÊtÕ\x0017z\x0006ª¨¶qüpÊ\x0002 ïý{äçGë°%f\x0005N8úÉ½XUk8\x0003^C©õØq\x0007Lô"¤P¥XLÿ\x0005\x000cÔ\x000e\x0015Ðn¢9÷ê\x0007ÈôAYèÐdï\x0004.\x001bí¡Æ;°Ú»\x0002X)&	t!¼HÇMâlì ê\x001c"¥\x0012³	º2Õ\x001es¼óÆzç~íÚíZ{Ìêí\x0004)5\x001b\x0004Õéá÷ÙòvÍCxIMü
²\x000eÒòÑM\x0005¾¬\x000fM;è£ÅqªÉÛÖÁøND\x0012¢fsí\x001bSi±£+-º2ERZÉ\x000cÉÉ²dèùàbJû­\x001aÁ¦Öd ã³½]'\x00118\x0014\x000cv:øã\x000eßÑI\x0005<i
\x001f\x0010×	\ù.6IA\x0011\x001f{È¹*£u¼\x0014>å+\x0001¥oV\x001f×!ìJx\x001b\x0014\x0006©«ºBCÕí\x0001¹*&K\x0000\x0013E(ë9ªªë(ý÷v»¾]È\x0001|%ÖE¼£'q4³\x0008§GÈ[}VUÊ"ë:jgÆFÍ÷wï\x0017øÁ\x0007J²jä|÷Ö\x001f=A½`Ùm¸'þ3ä÷îç+¨ö¯@ñ[8.©ý\x0004\x0019ed©åüÕóÿÉ{}êê~
 Sñ+U&\x0002{l?9;r®\x000fxhJÎn(#¦¡\x0015´òµD9O×¾\x000b¥øôì+Ð2´)z y\x0010³(\x0002Ñ~ë\x0010¥½\x001b\x0002Þ¾?lÏ£­\x0016µÛàÒª(Æ\x0004p8ùÅu\u\x0006ZJ¯UCÇß\x0012éXSh\x001dö¤ÿ\x000e­\x001cÝ¡J]&?æ¬Üdr\x0004R$?\x0018ì`ÙF¿\x0013J¤§g\x0011¹ó¸e«-eÜÙY)\x001e\x001eïùTw1vÃ
Ú¬a»cs\x000c'Ñde¬L¬Ó\x000e5ËÖ\x000bÚK¡p_sÖ\x0018W¸
Ü´\x0007îïT[ëÖÀ\x0014\x0019òÚj§6pïìÇûS.úoÉµ-òÕo÷a0\x0016ç©Æn*Ñºñý.m,x:V¥ïµEjùâEnD\x001c\x001fjç\x000cÔ\x000b\x0016\x001eïÈ*jQ/ãçï\x001aÆÖê¡;i}õ½Ó¥Ù°\x0013âf|\x000c3º¯ Å%ï\x0004Ù\x001bWb'pl\x000f.ë8xF%£¥Ù\x0015\x0011ÄALXÅQÖ\cbB¦ýÄ£°eä\x001d\x001dÌhñ\x000cvgÞØ¤äi[ñ­
Þ£æ 6-ap.%gM£ñ\x0006ôà¹i8ð$tÚ@[Þ¶®Û¦ÃTàA½\x0005\x000f5:ïþ)ø7Áí\x0017\x0002béÓ+n^\x0002\x001ct\x0010Ñ\x0010Î¿ð~Ax|\FWI¿\x001e<&,@û.H\x0011!ÿ­CJ!¨BÄWR}Ñnø\x0011óÙ6!Ñà./¢
«\$B{²[ã'ûQ\x0016\x0002ÙÒÃ5ªb_®ØÃÍ*¡Ø×b2Å>Cr²ÓÈ4=X@µÈ:× \x0015}x\x000ef÷z\x0014Ekè.8ÿ¢KéÛº½C¥¨ÀÓHÜÛcD\x00048&Lo\x001dãªrs2ÁM\x0016­,IzSÛîUYc×$ë/ÜXÂÎ\x0019zx\x0017Óû\x0015\x000f4¹+yÍÝÛ\x000f(\x0017Þy\x0005\x001e=cÖm\x0011°ÕøK0H\x001arÂË»\x0003\x0008ÊÖ!É=^m·wø\x0001»¯Á³Û	<,EQ½ÄFt°2ô}W!øà×~X[\x00089
×FöóDqÁ,8G¼\x0017IK.%^\x0002`éçö=º)Ü½!Vgz>»wmÀÐ¡çÝ½W\x000e"õo·àO½]ÏöxÏ\x001d¿Áûðøå&`©Øß\x000e¿ãe-5Ü\x001e³n\x000fOÜ\x000b÷Ü§¤»¼b/¶>Ì.\x000eH)al{èä­rÜ\x0015íã^üP\x001f²ü.0õ\x0010Àx¦\{W®Ù\x0003ÿÆ\x0005¨5`\x0015¸üGtÒUNvW ÔIupÀùñ\x0015\x000f\x0013Ê¢¿P3QØ¦q0\x001fH¾û7Ä\x0007\x000cä*¼à×\x000f­\x000bò¬Óå8ùÿnÂ\x001e7\x001eÃ}hrü£í\x001e-É2´þr$\x0014ìÑj:KËë'Á.(Ì§1\x000c\x0006Yù¬ý»®Éæq&(õ\x0001¢ºðiI7\x0004\x001b¤ÞÒ¬Ù{
8R½¥a\x001b\x001dÛçÈÔEzàäUe\¯hóÓw)Óç¡y¨Â­:D¦¡þcÿÎE|½%\x000fA¨IH\x0011§*\x001a\x001fº¬¸lÊj8|pPWÝ«
q³&ë^g\x0014È\x0002Ü©Àß*Ó\x0019ÖöG½\x000c	ÄN:¤ÏI¹ü)3tUç2\x001e\x001f®ð\x000ce|°ÜÅEúD¨aôÈdREµ\x000fÛ¯C)<o×e³I¨'¤\x0004i'V<ÊÞÌÐü­ºÉ\x0019:½\x0014Èl ò
\x0013Ý[t4\x001cê¶\x000er{\ëB=Zå}´¾]Tó×t\x001aYBþy°\x000cmAOÿ2Ã>~·òî\x0018\x000eì!\x0018Â\x0015»ò\x0017Ó\x0000\x0018ÀwÞ\x0010\x0002!ÖþêàÒ¿¹:x(Å5ù(®ø¯Ý{<,½Ø¬\x0001?m\x0017ôê\x0012¡\x000f\x0017¼vbõ¿¬=|ªüËÛ+¬«dÞüv¾qÏjWÅòø±îj^d\x0006ôÆÀpÒë\x0006)\x000c\x0014øa16ã¶\x000b/dÛ5®4Õ\x0010±Tåhá-8\x0002Íüã
&ëêâGô'<]×x>~\x000b§ÞpèoÛu\x0011Æ\x0010~ÙáÒ¸òkÎ\x000fê\x0007WÅ[÷¥ïÁwà®óÍµ\x000f~Â\x0000É5ò¤Ùt¤Î0³¼}iØÍ3pí\x00069<Ù\x0007åµJóbYÅ\x0015NÀËN`$\x0008ñÅ\x0019È~µëØ¼µªIô3°]&'Ú\x000ctÎÐ|\x000eË=Äè\x0008ß2î $;´ld#a\x001f¾¨;%ñ°6U)eÅàDËÜ$Á9ºÚQàîÖ>Äaº®mÝËÎ,÷)·\x0013Ñ\x001bÉ@÷ÏR:\x0003:\x0018*´Bv_p»	/Úº\x0017xúnçQ\x001a\x0010\x0008@\x001cI'°èÊe\x001dVèÜ}hpÙá\x001c ^¦Wp»S\x0003\x0018ë`·ãÏ\x000fº\x0003"Mé4¡ÌôÙåçëõCôMÙ -8¯o\x001e\x0003;©oÊºNÜ
<ººÙ\x001c©\x0017>è\x0016 \x00115\x000bwÉ\x0016\x0013Ùf~±\x0002)\x00062Ä¥{¶f\x0000\x0016ã'~\x000eE\x000f¡è\x0005ø\x0006
\x000f~6`ÈÁ(Ð»ÈÚJI\x0008ï\x0017\[_\x0008»G?Â¥7×`\x0006Þ\x001c{óNÓ³Í× !§G)\x0000ÎÍÍAÔf×\x0001p¿l\x0008K \x0000þÝyÄG=èõÔã\x0002?æ\x0000\x0012¯Öl²&{KHmç]£¡\x0015L"\x000e(CúêöwI·ßn\x0019çy²\«ÿóûàoÐ\\x0000Þþ\x0007Ýÿp@\x0008û¤\x0006²@\x0019¾}³1X¢è/º"eW((/DXLã»²ó®Ï;{³Ã\x001c{e=Jhu_¬O:ÒÆ¿Pm£\x0003Wí÷É\x00069Î÷\x0010p3ý¤Ûµ\x001e86Îò-\x0017]èS÷a\x0017¦U\·Ä\x001e#®Á\x001dÈ\x0015IhÕ\x0011õ9"@¸³)\x0014JïOÛÌ^ÖW¨¸Ë!Á \x000fAH\x001axßÛ\x000eM6Â\û\x001b§#iÛ\x0004dÃ­\x0019¬×Ë¾\x0014Í­Ö)±FË÷:îmAÑ`a´\x001fb+a´\x001dØ§gù©ãº\x001e¸\x0015\x00089FÆ¨ßµ\x001dtw3,;ß»\x001b\x0000!UÇÏæP8¡Ez6Ç\x0003JÍ\x0005Ï{Ò±IIÒ@ÉV\x0010f79R2*Kë9X\x0000ö{´\x000b0öxåjAÕ¨ÃÅðmÇ¸pì\x0015\x0003iàlhÄqpUzeôLt7|BsèmÍî¦\x000b\x001b <\x0014Þ zwØ®RåÙ÷Oî²:±¿õXv.nCl#\x0014Ðe»±öÉÛ´§LF\x0017ÐFø Ýë
Üå46KWgþÏSú³Æc+BÚíïÊ>pþþâA\x001bÜÔ,üñþ>6mJzrxá÷Tû;Më9[;&ÒÖvü3ÜÃ\x0004úvá\x0019@\x000bÂq\x0017¡¾¬¢\x000fYs\x0016õü7Ö\x0002ºVÅ`V¾jâ÷Õ@*\x0003ÖwÏ?Þ®=DOY\x001aÉÝÚÌ¯v­¼ÆÊ/;\ª"/rþ\x0013¬·ÛQ[º'
\x00143î\x0017\x001bÊ;u¡$\x0013÷\x001d\x0007\x001aW¤Ð±&Ç³\x000fjfÏ\x001aÑ¸PôY¤\x0014ý²É\x001e\x0013Á^-¼\x001dtÚí÷§nÌ64\x001aÂrm\x0018·¿?ÎÐú\x0013­µJÍÿwT²RBOÔÃj@«\x0004Í3M\x000cÿ\x000bÖ.YÒñ]|ìÎ¸,\x0014TE!k÷c
ÇÄmå¹n\x0010}<Z©¨Ü)áS"\x001e\x001cÃ\x0005ºÖmá\x001aâ5¢ÛC¹¾`\4$'÷¯cPêóàÞC'aI£ñq\x0016§í+ñ{ÒÊ¨g!\x001f\x0006)`UI5N)Däø\x000bä¥è\x000b`'\x001a´Í­ÂÝ\x001eÝ
c¤Ã¢Ó\x0015lõvÄGäô"ïÃ{oð±hÚZ²!ó\x000cZoAª,\x001e?Yª\x000fêúÙók¸	©CöÁI\x001dàwO¨.Wú×#¼±2\x001by²	IùL´Á@\x000f[2,A\x0011ò'½Ý9ú³úåUû
/EÕYÀ¬Ë/ê¶A×ÜG¶±Þ\x0016/ç°ÃÙi¹ä#xÅ¶­|\x0011ö²\x000cYX\x00047u;ÄûYuxGØ}D¡\x0005Ê±Z\x001d÷zP±ûÓð\x001d\x0006§´]E)â
-O/ã\x0006G»Mrþwhd\x0015íá³dÉþ`ð"HÌlðá1¡YÁþX\x0015EäÉ\x0011})UüÅ
¬-4·_ëïgu2ºoµePñ¢£6\x0005u\x001f)¹¢'ÝæQHÈ¨ÌÊ*Säöæ±`@\x0018´Åðpý\x0015á¡\x0016Âª[W	3§?¤Ï,±ó\x000cô\x0012c°\x001d`Z9txpoý»#oWê7YZ\x0001YjÒM\x001eyxÈ©3Mëãâ$7\x0015uTÁ\x0018ý/YÐ¿\x000cÓÀµîazë~)\x0003¦ß\x0004³ÆÆÁ{Óù<v\x0001þ¯\x000e`\x0007ÍâOà®3.JÔB\x0016uõe&U\x000b
\x0017n¤i=\x001c¬\x001f>`\x0012\x0001'×+/ï\x0016>ç*üäõï
a¾à'¨\x001amôü\x00194²üé6Þù9ìÁå\x0005°\x0003@\x0014øÉ/êx\x001e`?@YußþÆi\x0006Ú);}\x0018äWÚzq´þ\x0003!NAHß\x0013^¶YÉD@\x0018\x0003<Ýß*¤\x0006<;ÁC|\x0015R_Þ¶ßhtJ$eAÈû\x0006á\x0011õ}uQd·LU,ÎôOdjèIã4dÀ\x001e´\x0012Y\x000eD_ò]n!;àó\x0015ß£ß'(³Z\x0006\x0003
/Ë\x0018q16t\x001d\x001cw?èª\x0010:³Xõc\x001c\x0012kC¤] \x0007Å¡\x0004íe;0@y|õ/H;tÝ-í\x0007¤Õ\x0007\x000bJ<\x0005ß\x0005­\x00008Íööfó\x0011y1æÖø·?»¿2m õÝ¿¢£¬]K/y!Õ\x0014h¡qü³\x001e×y.Ü0lPJ£3ÅZ\x0015nNrôÇ5Ô¦&C\x000bÌ¥ÆGüs\ÏÊF\x0014öÁ=<ÂR,\x001fb)®maÊTßÙT|lÚå¤©¸ÖhÅØT\áJÊÐQl\x0014ä\x000fNvrx¢¬\x000eÌ"\x0012v~ÃÓÒ»\À>ÔZyO\x0019|+\x0010nÝ¹?ý:.l\x0014x»|¡H\x000c-¶+ÂP\x000b\x0019\x0015pg=Q\x001fûXE\x0012.¸O\x0013\x000bÊv,õíxB.]'w\x0002>|§Ý\x0007 iÙä,\x001b\x0014BU«¦Gµ
uûª \x0010ÅØdÕ\x0001`=3'e7!£ë¨²Á
ÔÂÌrzp±\x0002éè-m¸6¥×c?\ãi\x0006Hd\x0000÷T°1É£9ï¨4Ç%\x0017½_ÐV
£»é*\x0001	\x0004$['¯\x000e^Ý1²÷¿]ø\x0013.×\x0003ð¯\x0000é\x0011\x001c6¿-Ê4Ö_=\x001dá§Û\x001bT77ï0Öº£]¬0×Ç¨Û[¡Ã^f\x0008ÆeaJ\x000bLÒNÖ+]\x0016Z?°(ëÿ\x001f¿`\x000b
endstream
endobj
50 0 obj
<</Contents 51 0 R/CropBox[0 0 595.32 841.92]/Group<</CS/DeviceRGB/S/Transparency/Type/Group>>/MediaBox[0 0 595.32 841.92]/Parent 6132 0 R/Resources<</ExtGState<</GS7 6155 0 R/GS8 6156 0 R>>/Font<</F1 6159 0 R/F10 326 0 R/F2 6162 0 R/F3 6168 0 R/F5 300 0 R/F6 302 0 R/F7 321 0 R/F8 306 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/StructParents 98/Tabs/S/Type/Page>>
endobj
51 0 obj
<</Filter/FlateDecode/Length 7433>>stream
xÍ=]o\x001b9ï\x0001ò\x001fô²´;üè&Ù\x0007CØ3³ØÙÍí\x0004w\x000fÉ>hl%ÑA<²\x0014d~Ó½ÜOÚ·[¿ÜÓþcUlv7éx¢nO\x0006ÈÈR,²XU¬/V??ÛíWï\x0016WûÉééó³ý~qõay=yóüõöæïÏ_ÿz³|þjñ~µYìWÛÍó\x000e?ïá§ïëån>¿|1ùåé\x0013V0øÏ\x0018Í'lRÕU!ÅÄ¼¨Åd·|úä?ÿ8Ù<}rþúéç|R\x0017µ¼~÷ô	4f\x0013>áº,J>Ñ5+Êròú£möÝOzòþÖ
vïñ'\x0013ýô·ï>y3ýÛì¤ÍNäôÕ«þÕ~\x0017Ó×³¿O^ÿéé\x000b\x000bïß>9~~«Bëx~Í´âÙL\x0007lZ~\x0019ð\x000fßÍNJÂÃO³ÚNDNÿ\x0002¨ù\x001fÁx=ø¬ìvÉ\x0007 ãdxÀºÐÕ\x000136;á|ZãÿDøsÀÍ\x000fCOHrK¸\x000fÀÄw@°GãîT¬Ðõï°3R\x0005ÀÎü88`-
É\x0015ëªP_Üú	@±âcòúÊ¥4Ï¢\x0016P¿Çòm\x0007%~ÛòÅÐ(*Ô\x0003VßË\x001f_LgÎ½óí~¿ý?ú.·Ûý×\x001f}\x0017¬ìÈ4SÈjRÚ~Æ¯\x0001§?È¾%à\x0019Q0wì	"2	\x000fÉ\x0003¶ä!ªáa×öÜæ¸Öº.x\x0016Þð{)xøúê'Ï_\x0001½ÿøâ\x00136\x001c\x0011WÀåDÛã§R½\ÁÁ·Ý|©ér³Óýk»¹}\x0006gò\x0004\x000ei5]Ì8\x001eð±\x001dÔôÃb¦§\x001f¡çÍàxãJ\x0015¦ÊM÷8ºP)xÚ
¨\x001c¼S;ðåü¤´5×ðõÜ}esü¨è+s@ýëÛ_Õsh¬¡¡ýTs	5ã\x0017|~"[\x001djNjj\x001e	þ¦' ªh.¦WÍ )\x0002¶SS­\x0001Í\x0005=Á_\x001dHêÒþñÐÆ8Àö³.ç\Æp`Ô2\x001aú9g§8Ôg~t\p«kõÓ§î\x0017\x0016Íæg\x0017+Nö´.¾²X¼ó*\x001aÂ/FÎ¦ÈÊ*ú\x0019þ°Â ¯%Í&é¸¼TpôwÙf·ÜXÝv{\x0000¦þd|¹^Öû³ýs
Ì½\x001c6Ëýön;3V\x0004XÎ¾=³YÕ*]\x0018c1¼(©êÂ¨\x001c¼#ö«'®ùðâZÈB÷æüÆð¿\x001f¦*\x0001Q«¢29Ã\x001fÄö\x001c\x0016Ù\x0005þ\x0019\x0013N\x001aa¦\x001bû÷Ö2
étG?ëéõéò\x0016ì´1N
ÍçÔäPº ´-#Ùn%tï \x0010:fV|\\x0004³¿(Æùð"K²PU\x0006Ç#è­¥Îa
$$\x0013ö\x0005\x0019ùý«áA+^ðÌ¡Eªª`<\x0003nqýáÎ*F$l÷·^êÒ,êTôË\x0001¤ðçYåÛ¡NuØ£¾µgëõ¬nw¼Û/Vðu]Ôôí\x0014FZàHn\x0014~ä²UÏS²¨í¢U!ºr\x0014÷W*ÚßånpV=ã'JmWj2ànaw7û%n\x0013
%ÜEØ®oãôgu¡Í½\x001cãÇú9úÐeÁ2\x0003ýÍôílx¶C\x001eàðTa´%,<båá¡rkA2ñM-Ëáaó\x0012}Wa+ÙÐ[gfO\x0019\x001b\x0001¬ÔE§\\x0014­ÈõÝ¬Fñj¦úXWYJëà©\x001f\x0011ÛºÄC3
\x0001¦Ox=]¼\x0007mlc£°@\x0008ø`Q±ÝÝºSËLo»§íf\x0003\x0004k\x001a\x0004eå\x001düp½²#ú\x001b\x0016ëáÝ-²\x0006×Ù£¡PÚ¦UvË{B\x001a3íY{\x000fà\x0011\x0016ª¬ðËÂÓ3ï¡ý
4¡=ÐÈa
j
úÐÈÜ-¡Ô\x0016\x0011§é½\x001d¯B\x0014i<Ía{kû&\x000e\e;¾XÁ«i¼²Hùdi¼\x0005íp\x000c	jéÂ¤gÔ:-Ô±­\x0004l}\x0006\x001bcm«\x0014æÀýa\x0004puQg7{åÂê79x×Kâ%°Ã»wK/TÍÞ\x0011@»5´@¢#FrJëzi\x0005xÎ½Ãµ¶ÆÚWØ\x0008Â"ÉöTµ)dO[\x0001#[ê\x0004ú«W@Áþä2°·³b\x0004CÐJ\x0000¥Á!}KbpßÒ\x0002è¹ï\\x0012£92 Gó.eàýyx\x0011«À>MÃs\x001e#&çUðàOo¼óÎ\x0003®täRö\x0018kp>%s~mtèzVÎ'Þþ~Ñ@®\x001cd;\x0002\x0012`Zõ¡ø\x0000w\x0008\x001aæ»XÆe\x0014\x0004hü^0*ã"e3\x0013\x001d \x0007ÿe"ÿ\x0017xÆd\x0002$Æ\x000cÎ1\x001aâgQ\x0008P±\x000e\x00039ÙeàRii;\x0006¬þÃM®n\x0016Ay6UÕôz±´ JcØÌÚr\x001ap\x0010ÓÏFpb\x0012©Ì\¯Q\x0019ÇY¬\x0017»»`V©\x001a<f"Êbp®\x001fc½\x0010¬j°®\x0013\x001cæ\x0007û\x0019qÝ\x0010ª\x0013\x0012B:~Ø\x0019~²¹§Hç8®z#x\x0004)0\x001e\x000e \x001aÊ7\x0010<,`\x00100\x0018\x0017¡Có#òv]Uë	­-ðM'©\x0018ý\x0001/ÚËNø¯5\+Àç\x0015XÜ>9ÇqN.Í\x0002í$Lô8B¥U¹à$ÌÙÁ\x001eZ²B=ïKyÑ\x000e\x0007«&FëæÚ½Ç¤#ZØ§§í~½°Á·À-¥=æR(ö\x00198E<Hó\x000b*UµÑY;Ú£)
ÇD¡°®£!Êl\x0007C\x0010\x001c»5ê41Tt6(yÚÌ\x0015öRµZ­[Ç4\x0018±*sg§\x0011?ÞJ0(îâo`p\x0017Ow±tÕÅÓ;jãÉÇç«çu<ÖÃ\x0003å\x001eò búm-Í¯]kFEð\x0019\x0001\x0014­\x0015}S´.9\x001cõ÷\x000cH(kÓh %åkÄ)\x000cn¹Btº#\x0011^\x0010¿\x0004ôùçì¼li@Ø¡\x0002Ev\x0014\x001e\x0012\x001eDó±B\x0015h-\x0016^%A8¶}\x0019
ï\x0003/ì	³_o)ÖD´ÖÌD\x000b¡8¼£Â[mÉ\x001d\x001e!\x0003AT¦\x0010u\x000eÞ\x0018áIVT:\x0007ï¥U@QMUÓÃî*¸Ô¶³zúèA8R\x0017Mñä\x001aR\x000có<uÑ¡ì¶Èá^^a¶PÌbî\x00155¼£:p\x0019\x0013ôh\x0011÷Rð¢\x00149Ì\x000f\x001fr/E\x0005JJ\x0006Þ÷¯Ð;Ï¥YN`÷»Åõ\¯Ã[\x001c¢¨rÙ\x0000\x000e#ÑÆV¥1ùåÝ,vèã=lÐýmø¥-×ë\x0010]\x001f-ÿ£3\x0010\x0012l(Ù`E±\x001bkN¯õb\x0002Æ+¥îÁ\x0001T´ØÃú¨©\x0015\x0019¡=Ü\x0012\x0011x\x0010y*Þ\x0019\x001f\x000c
ïr­\x0019z\x0010Óx\x001b!5­\x0016p«*\x0003oH÷¡\x001cÜ}XÕ%¸§ûîC9û0\x0003r4÷a\x0006\x001ef§\x001d\x0018	ÝÈG\$·g\x0015\x0019x×ËÃç\x0011`V\x0007éò\x000e3=]®×\x0010Òð1Ai\x000f.\x000c\x001cÖr³¥ã\x000c\x0013ÕýÃ¥ûÄÕn\x0007B2¦nà\x0000ÜnÐ\x0017§,ìµ(\\x000cd
}ÿöá_Ð\x0018\x0007XQ,\x0012=|~Ïùô\x0017\x0010«¨~ïg\x0001D\x0010³1|3¹Ba °¤ái\³B³,TÚ©[¼~@¡,m	È\x0016Æ_Q\x0000Ôî\ªÍdÓ]\x0005ÇÑa{ñáJ\x0006×¯,\x0014Ï­b\x0004}^ ½÷oDl¢rE8	\x0011øêìÓ-\x0012¯EÒ0
\x0007¼%ÇéÍþ\x001e~ÔÓ·S=ü¹*«º¨«Ü\x0002\x0004J¥ 
d
J7Êy\x0007ÇK&ÁÁþ½:áSè$*\x0007
Í÷rÞs3SÌGlÃªoýÄ¾&QGÏñ\x0007Õò/¹;\x001bgè\x001c\x0010ì\x0005Íê\x0011\x001d0÷&»U2§ÆJ	kNÃG/×ä\x0019Ú8çÅ°m×\x001al\x0013«¤£	ÒÌ¡Q\x0012åc8.\x001cÛØ¿l}ÿKÈÃ%\x00107ÛÃ¤¸}¸^`^ýëÇ\x001733ýá	Z\x0005¯3(9.:IÏÒ\x0012²L;EûY¢ýL¦µ\x0002Ò9·d\x0004ÿ4Wð'hz{ê§\x0018bÇ, èôo£ýáíxÍ!&o¯BØí^ZcÉ
MÌ§­ÇÈq¥\x0008Zz\x001eCÚ\x0007å×Ù\x0007æ\x001eö-eQ%©çÒ;<\x0004\x001c9`,<¸*I¡\x000bü¨ÊùyÎÉ5\x0014ºijÇdèb{»KqäxgÎ\x0007J­dj
2\x0000Õ9«:\0¯;#FNtEÑ4"T¿#aóÛk­N
¿é¥Û\x0013nyÃh]8Kúgë¸õ¹óh\x001a¹|EÔ¦*5¿ÄÕèh^î¦Ý14¬SÌÄ%Ü¼J\x0013DñQ !\x0001u¥ýjµ\x0007VX\x0013\x0010à½ûc«á
\¥,ú\x0006n9\x00069ç\x000cÜæ¶É`|Z¹¦\x001eoÁÜªÐ&\x000bïÖ{³C,$£ÚÕCÚÜn±?øçû\x0011lÿC\x0015QÐÌW\x0002\x0003<\x0007ÏJ¥K
\x0003ù{º!ºèädq\x0000>¯&~î~s@¿\x001a
vµ.?³yÈ§ Ì¨\x0010ûÄÊÁá.B¬1NÇ\x0008÷¢Sé
\x0018àuÑ²è\x001e±À+ÿ$Í\ÈÔ
ó\x00102
Q³lF\x0014o/Ý\x001dâ^4Újµ¥kÍ«\x0011L\x0015:Kþ¨\x001e\x000b\x001a?½é\x0005¦|·û\x0017\x001f»^hÐÁ\x00149àígðà\x0008ÇÅ¿Î¨·»x l_ÇÝ¶\x0005å\x0013Ç;G
þ%Ý¦\x0013erpðìDÎª`5À°¿.63Lû\x0016\x0010\x0012 ¾Û+è»XÛoÍU=A«\x0019Mcx^/|4rÛê¸(\x001f'Jf÷çv{ \x0019\\x0000\x00179x\x0018$+ìFÈé\x000fë[¸v²¡+Èö×wÖü&rÕJS\x0017u2ý&Ç¡"E\\x001b\x0002\x0005Ey\x0015\x0015T0\x000f\x0017Rf<\x0019ÅK¸@Yå12êcPa¸6Øvf\8+J\x0012û*Ø\x000fî(82CÃÄ\J\x001d\x000fG~%Æü\x000fíÄ\x000fï\x001d
[¡­\x0008\x0019\x001dîxóÇªÆcJ·\x000eÁÁ÷M
\x000eÌ¾
\x001f4Â\x0014LæààÜ\x000cÊe+b%ôJD	l-\x0002\x0018]¦J­áBX\x0006+#\x001462\x001cªºeà¡P\x001d#§Ù\x0011TVF\x0000OA°?\x0003oãËTÔ.:ñqVº Ö&\º!#h*'XIixýuÃ\x000b¨M\x000bÐ0ÐÏùMèz¥®àBa²\x0010Õò\x0006k'Ptnøð
\Ö¨Mn\x0006#2Ìÿ#
ïÔWxj21\x0018`:éè2#MæQ\å©98dã\x001b:{SÂ\x0000\x000fªZ"ZY£e\x0008\x0008¸1¢¬Y	G\x001esn+\x000e®²óyk8îÐ¯\x0013%ÐY\x001cì;\x001c­öfgÝÕHã7d/¶Ój}o<®Ûª­;y·îºpB;ë¢ý|^µßâwÊ¾Ä{ÚÅ^-¼\x0007¼ñÅU-ÿ!y¹¹ÓØ¾\x0005öUX£0É¾\x001f°ªÔî=Þu¹F7¹s&ùÈÊÖY]¼r6Óõ\x000câ1üýD¬Fµ\x001eþ>
Ty\x0013<7ù\x0011ò{ ô©ÎÁ\x001bÒ¯\x0006w²z±}÷g5û3\x0003r4÷g\x0006Þ«õ¡±äwwxgë£%ÍOÀ1ÎhMÃÅÍî.\x0018d^/[·Øõ\x0000½¨ºOS\x001bü	ÛÝ>ò\x0010¸â\x00128fH \x0011(¹!äÞAêNtìà³dèÙõ>VþgúßÒ0à¼\x000cÉ;X\x0003'ÃJó\x0001\ ûo«
d¸¾ÕîÜ'7 ín±X%XO\x0016»ý\x001d\x0014±»nVúnf¦\x0007ôÜÜQ»\x001b+o\x0016»Éz	Å_~7ÁûÐ\x0013\x000b\x0007ö\x001cL»¦&` ¹¸\x0019Á±ª\x0001híéE\x000e) ô×	\x00081á"µ-²V\x0010!¾¯ª0t¼z3åÅqÕRªî,rb_Å±¢CvÁ:¹ñ%°ö\x0016héÛ»²ÊTeÕ£òÌþsW÷*«//ì')` <\x0018× áASíÂvØµ¤.»R\x000bºCy	Ã£BèG-\x00155Á\x0005>ªH½ª@ý°À@ù@Ëòëå{_Â$æîî\x0013õàa^x·ª±	-¡Â\x0011\x0011¾:6Ñ*×@q´Rco\x001d\x00030\x0010)60J+@AÂÕpß7sÃ%äy\x0018`\x001c¡r\x0010Ü\x0012jlN:`kå\x0015ì\x0008íTå ã÷ ÞL²ðûly\x0000£Ñ{JbÁU
HËR)B¦Rd@\x000eoäyÑ\x0007w\x0019_U\x000f\x00194Ã{Q\x0005\x0003c3³îãü@IãV`*o~Ýç¸Ì\x0010tcºå¹\x0004Kí\x000cZ7Ù>G¦"$±c$ÜÄ\x001a*Òð\x0014ôÊÀ»Yê¬7Ú//¾ûëOÑ×¡Z@Ð\x0005Ý\x00132­°Ð\x0014sªKüÚTLµ-±&\x000cäAï jâoo­\x0016i"¿\x0015µU\x001aÊÆ2ÁdYsÌx ×¾Ý«ÅnzÕÛÁõ#«÷ÄKd%
xµ½±ì\x000cnÐ\x0013C:_.¦¶æ«µÊ\x000céùa2¬\7F\x0011*\x00017\x000b2ð^¸¦#÷\x0012«°dà û¤¤<õp¼u
>Üô¥gwèÕX¤D\x0003ÊLkr\x001dRw\x001dóõ[¼Ñyâ\x001a\x000f!\x0005S4u\x001eËàüó·'»\x0015å[u[ D\x000cnÕ·\x0002üÂåÜÑø%¦d>õ4\x0004ÆÎ^¦KôGØí^3m¥x¨&	/Ù·	µÕÎ\x001d÷;\x0015h¸OÃ\x0002ì\x0007\x0000î»Ãçb\x0012(ÒÍ=\x001bþ\x001d\x001f\Z\x0015!7µ1ÊÂ©B§Á¡YZR\x0001¼?Q±
«\x0003eVê\x000bÄB¸\x0008Ï×::ÖoÃ\x0015!Ú[W ³Ú\x00136´Z/9¥@GY1w;\x0016ù\x001c ëíæ
.v0÷úÏ´Û|mv<\x001em¥\x0012ðZ\x000c¼áëÿÁ{¬xýëÓ%ä«dàÑ&ÿï¬r-W\x0015/¨¡v§Á£;ºäðI5XáïÑ°aÍû"üë\x0011ê.C¸©\x001cDd`[ð½\x0013¢QmÒqn\x0002\x000cïa\x000f\x001f;CÓ\x000f¨]³ß-\x001b\x0017øÝ\x0003h¿8|\x001eA3cp#=£ ~0\x000c_r\x001fÓc>ã¿7º|º\x0015ÍkkRMY\x0016ª ÔT?ª/å¢,Î\x0011it=lÕ¤Ti-¯¼ðÓT*\x0017ó¯\x0018
ó¬¢Z¿¥RM+r:|N\x0005ð{Z0ô·\x0018­M\x00026W\x001aêÍr·Ç7ßXI²I
\x0013¸L;\x0014µ!cxó¬\x0012\x001cs3S;Ö¥7ì[ô\x001eZÖ!+$\x0004$_¤_\x000fb¨®ÃäÿEx\x0001¨õ+Üè\x0008NzÈáoé2V¨:½ÀÞ6\x0006l\x0018(8auR¸\x0016oeV][Öh]ry0êcßmíö-TÙHm\x0005T»èo\x0005\x0017y\x000cS¢·nAU\x0012ßÇ)ÎºéªªÌúiyXct<oV\x0019 "éßþ§\x0005KÆ\x001f7{ª3\x000e?ï!Aa\x0019ìVö\;QQ×%EY+÷õ\x0016S*ÛØLß¯\x0016Ð¶×åg:Þ!°;xºÕÕ
ÎM7\x0007¸©mÕÞL¯¶\x001bhýi	6ÁÆ
)\x000eB²ÑåôYGbÐ\x0015Nf¼Þ©j{Hi5%aùeÝà
Z¬d\x000e÷õ	â\x0006.ôûB\x0018\x001c\x000bX]-Àe	p>&e@2ô£ñ:à\x0016nú_ï^LSg\x0007xÍg¢\x0010\x0006Y_°\x000b·\x0013¿6ç\x000bUÓ«\x000fÞ\x0007?Ã"qÇ\x001e\x0010uÇ&!E93¹Ô\x000b$¿J`pö ¡0>/1~]rRb(=ÆK\x000ez"£\x0014YXøÞîO«T#\x0014ØcLn¨fýß\x0016ì\x0002xå\x0005*\x0012¾å÷Vø¼°àø¿\x001f'~`h\x0004Ö[Õ\x0008a	\x0015D[æ{\x0012BÀÆø\x0017\x0005Êêvá9rµE^Ç*QA áÊhÎ3¶\x0007ûäÒ\x000eúáÚÆW\x0018u@<A¿;ÏCNà-ü!ê\x0008Û\x001bÊqÂ=ÞNáË\x0001Õ\x001aÄ{{w\x0004 ákÆí3	¼ù¡9ÀÕ\x001ft»,Âôpb» ¬\ÝBÎÚ\x001däÍ#*Ý¹Ö6áu_81üáÓN!JìÅ=QÏÝ1ò9HVÚÝ@²Ñ¶Þâ ¥;n¯0¯7¢èl\x0008ü@ìñþ0sÏ<-s,ÈpBB\x0013Ñ»ä\x0001ÁÔ°!ÆþQÁ\x001f\x0013²|ÂUs¢DÓ\x0018\x0012÷\x0012
/ñ\x001cî~/w\x0007¹\x0007ÖÕêÙ,ì±#9:3A5\x000fGì]¤\x0007píÛ/")ý\x0017ét¿`§ÿé8«!§íÏëÕûÀàÛUè\x0018\x001aù=Çïª\x000fû\x00197#±Eïê¡k»É*P}Y½s÷ëÚ	äyéQzí÷íao©Ó\x001bûÃ?HÕA\x001fñ\x000f®\x0002B#¥É£Ô7:öÂt\x001b\x000b ¨g°0,Æ\x0005×Pk(\x0003k\x0017¤\x0000\x001dpÃ\x0006âh\x0019Ð\x001b:~^ã\x00191(\«gìM\x0015éÂªòkÄ×M*¾¡ûe>×Då0Ú\x0016
[÷ESû\x000bÿB0N]7¿»
×uë¯®AÙd~(©K¼M\x0006)û>è«¯P,nYóÜ£óP¿Ø½\x0019o¸S ÞÚ@~'Õ\x0004ÝV\x0008½ý\x000b2È¡åvS\x0016\x001d¯\x0000iÐ\x000b¡ý«°Ý\x000b¸»H=Ç'²\x0019ËM\x0017}b\x0002\x0015þ\x001aÚ»Wv\x001b
ß;éuN¸3îk5\x0017ühaª¼Ws¾Áê<þ*a\x0014Û¤u\x0007úbÍÕBán+xJò+\x0013R4©9ñ&S!ÿ¦\x0014Ií
±óVG*c\x0001ã¢\x001d°Å¾°O\x0008\x001b·3S\x0003¥\x000c4\x0005ÔX·g)<÷\x000f\x001cØ:\x001e¿"ëíE% &\x0010\x0014.t?Pº£±ª]U$Â© .«¡üÊ0rCöm\x0002\x001cÑÙ\x000e`8"æ2\x000fÊU¸±ÃÅ|â¶ ³A®kB:À0ßÆ[°â­Ñ\x001dâòD[qw÷Ü\x001ah]\x0008'\x001f¸\x001eÍD\x0014Þ´\x001dÚ×^wèD'h¼¿<cv9HNºON0¶OëEáZÅ\x001b'Ó`LåÈ0\x0004¿{úD[åßÐ°Ô!\x0008Õ>\x0013Ã«>D\x0000aªb6éÍÏËõ\x0008ö\x000cZc:HL§ÅÀÃÌ42XÚBBÀ,í\x0010:àÝ.-Ì±ËyrÞn1:\x001e#ûä\x000eAµðÓ`1\x0012à\x001dl?èÂìïß¸æ\x0014Í"µjäO¡Ë¦:Jj\x0003ÒB´¥WDgM[ªÑÎSg\x000c;'ÞbMe«öLe\x000fó
\x0012\:ïHw¶ÆÇæÜV¸5Z59\x001cVøb?\x001cúC<(6µfß"0{ï_ucK04Çþ+gÇÀ¯×ÖÂ\x0007¼7ðµã\x0000!?Ã¯\x0000\x0000_A}Þ·³h©±Ë%\x0005 ë´WK¢È¿ú i:oýÎCn¹Ñ:%Ó9ø²p´gMëfOúè	pçaùøæ\x0004¡\x0007¶\x0010<©±\x0012ÞIJ^m3lÙáql\x0017÷YÆ5ªÍØþtÎ\x0016AOæ¦aý{ê¼NÒ¨
NH3éîô~VÈ\x0017jµÞ9\x0017æ¦\x0013\x0012ª9\x0008uêð¢
Í}^¶\x0015Ñ\x001eÄÚyþÂp8{ÃFÝµiª(Y²5(ÿA½Me]\x0018¡¥\x0001\x0007ü!ÁZá­lðàèzþÉàA-ñ¥íãZõÖ¨,\x0007+â=Ø#\x0014p¼ðoÊr'XcM\x001e{#¢;mÈC×&?íè°v¤¶F\x001a6ö\x0015'ð;¬ç9ö¼Ã]ª\x001eódpsxÞø(²ÄðÈO\x0013Ò\x001dÍ7ÔhèÆê¾\x0005íÈ3J´WÌ/\x0001Ê¼a\x0019{-XkÞ]ÕÓënÃj.\x0012^WRåØàØø.¬2\x000fë4(­\ÆÄ\x0012Ò­}òÌb|ªVâ\x0008 ÕÿD%\x0008ªczÓJi4Æ}óVÔÌa\x0011¨¬§«f©$µ\x000cdrbz;§¶¬\x0005M
ºÕýã\x0011\x000f#1\x0018ª4Ö²µZ\x001báJmíø&ÜkZÎ¸[µN¿*\x001aû\x0004þ-¤¡PÇ%èjI2ð"ú¶Æíq·-Êôô=4gÆÖO¬DÑí­_êÑ5³É
\x000e¾¹Íx¼-ª\x0012^Þ­y[T:\x000f«ÅÛ\x001e«²\x001bÝÚZ/|Iïk)at¯ÿL\x000eÐbT\x0016i±."%4Í\x0019²\x000b¶/\x000c"âþªÓN¶|æõ§Öõ\x001bx®}B·Ç\x001fû¤4Æ¬ì\x00188êä\x0016Q}Xañ*Dò\x0017!óè· ¨Ë¬¢hßÐy;27Á«¥OÐØ©6Ñý('Ja2Ä±\x0015Í:sR\x0015ÏÑÂí'&\x000eû\x000fªz\x001a\x0003xÒS\x0001=Î\x0000ëX^g>ïØRhq\x000eÌÅ#/j?fä<\_Ô\x001dýÛV\x0000q*vª&îáu¶¿<²µýIÑbpÓ¬n©ù\x0012ñÞRoÂLbX¥Q3Pä22,£¸k5\x0019X ûNÚrhH\x001c
"\x000cê·ó|BD\x000e±\x000fyG!u+\x0016	¼v2!Êö\x001c6¯¬9d÷>\x000chÿ?

endstream
endobj
52 0 obj
<</Contents 53 0 R/CropBox[0 0 595.32 841.92]/Group<</CS/DeviceRGB/S/Transparency/Type/Group>>/MediaBox[0 0 595.32 841.92]/Parent 6132 0 R/Resources<</ExtGState<</GS7 6155 0 R/GS8 6156 0 R>>/Font<</F1 6159 0 R/F10 326 0 R/F2 6162 0 R/F3 6168 0 R/F5 300 0 R/F6 302 0 R/F9 318 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/StructParents 99/Tabs/S/Type/Page>>
endobj
53 0 obj
<</Filter/FlateDecode/Length 6711>>stream
xÍ=ÛnÛXï\x0001ò\x000f|Y@ZD\x000cÏäán ÀòØ=½ØÞÉN2Ø¤\x001f\x0014Î¨!K\x001aY
º¿i_ö}jíWlU+©CÙmN\x001aH"\x000fOÕ¹Õ½¯Ï¶»ÅÍüj¼yóúl·_ý½¾N>¼~¿ÞüüúýoúõÛùçÅj¾[¬W¯ßí?íðÖëùu½NÙÎ¼|¥\x0019þ§TÉ,É«<\x0015<Q¥\x0015O¶õË\x0017ÿõÏÉêåÙû/^_²¤J«"yóò\x00056Î\x0012°R¦%e¥R&ïo¡Ù\x000fïÊäó\x001dôL
¶é
nýõ/>þ:ä£³ñDÞ¾\x001dÑ_à7\x001f½\x001fÿ¼ÿ·/.\x0000Þ¾|ñtü8+Ò²\x000cñóhØ$ý\x0003Vi%î\x0007üã\x000fãÔóðn<©\x0000\x00111ú\x000fÿá\x0019«zÇ
K<`:&ý\x0003.Ó2¿\x001fp'*ú?m\x0011ö\x001açæÇ¾\x0011\x0012\x000c6î\x0003fâ\x0007Ü¸FÃ®(²´¬¾ÁÊB¦ì\x0001+óSïK
ö-F\æiqïÒ'\x0008\x0005ÈGòþ
¶¥P½cQñ\x0017ßbøðBÁÿØðyßHÈ¬H\x0007¾EÎ×\x001d|o¶ÞíÖ·Ý¬ïr½Þ=õ1f²EÓT*òDÂ{ÊÐïeÝ"ð\x0014O³²\x000bÞS9X\x000c\x001eÈ(<Ú\x001et\x001b¶\x0007/ú]\x0001ßfÏ8ÖªJY'¼þ×Rdüáã£]¼~ûý§ó\x001fÿdÛÄ<\x0001¦×B$Çs(2W©R'\x000e"K
óq9J#Ê'ÍH\x001eA\x00046·|\x0008"O[{\x0011\x000cKÏ\x001f\x0000ù
ÐÃ2ËfðOÊé$ß¹åTâe\x000e·Õ´ÀË\x0002°\x0011S-d­á_-±	¾5\x0015ôÆTµZç\x001cþ1Ów©ïWx-4,üïPo|:!ÀL·îJ|t\x000eÿróH\x0019¹µ8N\x0010ºï^#È\x0019B\x0012Úº3|y¦;çúVEÔGØw\x0011¼%[ Jý»ÌzÁ\x0016\x0006is\x001a\x001dÄÒÃ{¦'ÓHÃ3\x0011ÀAçåe\x0004\x0017gù\x0008'¦»$àöãvÕ\x001fß±Chw ¾q\x001bnæãI1\x0002î7V£«Å877è÷z²i2\x0006¹ù\x001aj
Gõ.©o7Ðl	×ëßP­÷Ûq\x0005÷¿D»ë96NÞ¾;Ò¹Jd"âþQ=öDÇ(#{4eäQ²\x0008»<)#á{WH\x001e|¥ì©T±*ÓßÄS)âÑÐíf¼\x0007êßV=Ãe 1s~/ÜÍ¶¾]ÔÛ¾\x0003ñGyô\x001eà uâqÙÁ1J@EÍÊÑöp\x0007\x0007lq]÷\x000fç \x001dTÏ½ôÃ¶g÷B½&±ÂÓ,T@`úÅ#ÏÓ,¿\x0017\x000fMº4\x0006×\x001b\\x0008ZýrwÀû@\x000b¿\x0006m>Y6ú_ZÀ\x0005ÒI½Åh¿rÜåh³¦%6jtcÚ\­oou;è\x0000ï5 6õ\x0016_X¯Võ\x0012\x001fèyyF~\x0012=¿E\x0005Ô£81{·ë\x0005rWÄCp4jTï9r\x0006øµ©ñ\x0002F¦hdÀA89Éj½JðÕ+d7f"z^}h®Êû\x0007Ð'ßàý©u\x0014EJ~$ÚPåÏOå\x0012G Ë"ÍU'È§\x0011"\x0002Ïn±(<\x0014§äÔ\x0008[ÁºÈØ\x0005Hf
D±êD>edTº\x0005r\\x0005"­\x0002QÃ½
d¿*ÓïK\x0015<¬JÓ!77 5né:aSÆ{ÊÈ®U1e\ÿ&ØªÝU\x0019 ë:dº\x00036«lÊòà\x001fYEòr\x0005"¾\x0012z\x0014¨{Ï\x0000>~O\x00189Í\x000e¾ ÂY\x0011ZtUajaq\x0014öõÒÌÖ\x0019¡àñçM|Ôú
ç&=C´Â>Ï¦üÜ ÏµìçQ£ÆÞ8¬}²9÷\x001e?\x0005³]ÙVvÕ¦\è·çÃO\x001dÝ\¤ùÑ1Ú,ë\x0005ÄÕlÁ9\x0012Kü3ß#\x0015ý>þü\x000cÏëÕ\x000eþgÌÆùèº¦?Ë9ü\x0011hNÎGoÿ\x000co¼ßr´¬ï\x0004S\x0013b&Ð\x001fÐÜq1ªQB÷ÝÜâÕá\x001aÙØ\x0002^áÏ9þBê-|÷o©à\x000cÍ´ñ9y\x001aßÝàp\x001eÏ[O\x0000\x0015@@ó®uo­_+Ü	À
Ç¢l®\x000c\^AÓÖÆÀÖ5­÷'¸:¬\x000e7¦%ü\x000fW\x0013÷\x000cÏ(9Ä(»=\x0001¢\x0002\x0012¡ìD¯>åÄ#\x0005%j¯ºí	\x0000\x001ds¤)3N¹%\x0015¼YT;r®I!G²M4ñGJ\x000eO¡3vÁL\x00063M/á±¶hXªl¨\x000c\x0013\x001e\x0016°¦©£bgSËL,£Bß.i8®k>uÄXÞ3\x0017\x0006¢¡ÍÄ[T@@/"sg»2Àd\x0016Û¢¦,áWnfÌð\x0005Kü\x000b7\x000b}'ÉÑ®Ù±\x00068¿iÙ	ï_ú'2Ô\x0016{\x001e_L.\x0015K«\x0013GçÅÕ©ô5][Sg¡´+bRj´ø0\x0004\x0006Ø#J¦jA\x000f8KïðªLû\x001dð´\x00101áæ\x001có\x001drß·À\x001f&"#q\x0001\x0011çk¾pxÏ¸\x0017\x0016°ÁfÌÄh»¾©AK£ÆwÐ
±cù\x0001Û\x001fu\x000cýöÏMY¾þ\x000fÀ½\x0019°mÖ\x0005o[£ªüx½Gmu[¯Æb4 TK§\x0003
ñ5¬ÆþK?\x0000\x00022ãhh" M9Ù*¿ö¯\x0010J¸Õ5ôPÿ\x0013\x0011ÄsI?r'£Õ5ÔC§ÄÐíP3ä¥½Q:Û~ßSgÀXx×Z\x0001\x0015Ï(µ¢mHÕ±þ?'SÍÎ×%>\ºïö\x000bz8fÜ>ë{o0Y¥U\x0007nZÿ¶\x0002XUºÕ\x0015e°	ìª´gÄ YæUN£\x001a\x000bhË3­íf\x000cíÙÔÏx(:eZÞ{\x001aº¥LèZ-Îòüã¸ïu®RVvMûW\x0000¯Î»à
à\x0007Ò*»öÐè\x000cè¹ÓÌ\x001d\x0003Ôª5Òýz»ç,§\x0006t\x0000Ö[ÔÔç+²ù\x0012\x0017®Q}ó'äÊlz¸Y\x001eð\x0000éÄ9çNÛÛ¶ÎÖ\x001a\x000b}é\x0010Cc«\x0018ý\x0003®öÐeÿ\7\x0007Å¹\x0004|[¥Ò§\x001cD"\x0015c\x000fÖBÄ*a
KÂÞo¼±È2Üþi\x001aù\x0002ÞÀª¬C5j@)C(Ú\x0018(VÖhØ|¯E*íÅ'õòÂ\x0018ä
Ë·Õ±õí0¨Ua²À\x0000X:_ÑFÂp?DÞSY0eÀe«cÊ\x0017ÚèX\x0015ZFY.0¦Ê`HV¦\x001b8ºi¦ÁÐ\x0014øÝ¬VIv3é	ÃiM¦ÒN¿g¶\x0010ÚÊ¥J³(7kÉ-$ÖTS·XÒ\x0008=Îpz¯Þï\x0003\x0019\x001c\OÜ¬N°ñ%mÐ¥5÷ö\x0011ÓgeÌ\x0001¡1\x0006V²Ð}¸¦Ï¥\x0015ßô\x0006im$å-'-û¯Ç?<FÎhÒ03\x0017Çô¶6F+\x0011pùK?µ*×Æ¤Y\x001bV`Ì\x001e+ù3å-Bfk\x001a\x001bVñÆÉ\x0017½Ëò\x0015Éòñ}Ö«AönaÈó*ÍÄ7´0<\x0004á,\x000c
è¡\x0002Ø·`­ª´ì÷¦A\
	
l
\x000e*EÐr\x0005®ÝnM\x000e(²\x0016{\x0016ÚßÔûîg\x0005Le×Dn\x000f_ÐîþÛ|\x0017	iµµ D6×6\x0014'\x0008¢ðÖ\x0015\x0012ÏvÛù\x0012e5z¢\x0004Ôhýé®&ÓÀ\x0017ìñP+k.!íæf¬m\x0019Ó	¨ðLèKê	-úËÚZ<Ô}ëküqgCö\x0010¼³Æï\xN\x000fÀ©],UGcÂòÜP\x0013V¡b8DÃ,ÅJïE¡öÖ\x0002?î÷¤Ð\x001b\x001fqÝùè&%@Ü/ô
¾·\x001bø<å\x0014¶ÊRöqlîF@×LKã\x000bÄä¹Cv¢[¼ó	n¸4ØíÁ<>Bä Ã ¶»;\x001bg£
±ø>QÇÎ\x0010Mó~ûò°ÕæG\\x0002év,Ì,¼µQîÆÝ\x0001­\x0007ëí¢­5A«ký"yÍT°¯°2ªk¯\x0006Ç1k¤\x0003Þ\x0010VMæãÓ\x001a'é0Ý%L÷\x001eþ¢!\x0019(Ü	qÿÑNG6kÔ;·ÔÚ­ª?oH®BÙÿI`XUç\x001cÀ\x001eZ1Ô7;àõïº<\x0001oN«pk§\x0018)â3Sú\x000c§Ã\x0014Ñg\x0002rb°\x0013Â¦õ-fÌCAi©\x0002·½×¨­Õ\x0012«¬\x001eI'Q\x0013°6\x0012\x001615JÃ"wg+LèÈ&à\x0015 ©,!\x001biÈºL\x001dþÆUk^ÍÃ¡5\x001dÓÚéj4	çxÕÚÏq\FØùä¥\x001c @n;2(dn!Ì\x0014¶úÕVÑ\x000b¿\x0018CÀåßFK?Åü²\x0012\x0003Ðc¾7\x00127ò°\x0011FÔ@Ãnnly2p"}AKbí¹>\x0010à9F\x0016Qp¹D¯ÜbCQ¼\x0000¹`®'ë+µ¸ZïÇåH¿«MòØütÊø\x0006A|·®_Z=@'ó*\x000c¦HÝìùFà\x0002*o:ZÎñéµ~öìäçÄB!åÌÍë=á¢\x001cÿðwúÇqJwrLÄ\x0015£\x0003
}ur\x0006¹1W[éÍÀ[*\x0002æ¶«·Ë5q<vf\x001d\x0000Â6pÐ+Ú]¨MÁ$ôï0â[¯:>×ËÀ1k>\x0010 \x0018îàù¹µÚCÛõK\x0018	g&Dµ\x0003vïÒí%ÜqV¾Åé"¸Æ0o-­¦ò]°)	ÓQDTÝã¸²A\x0006\x001fC7'RV'ílYïZÑÄÓÎÌÛ2\x000bloS\x0019^7ÓÖR\x0011\x0018ÓALI¼ \x0012
ñ¹£\x001dpX\x001dZ\ßÂO«¾\x000e\x0011e\x0007\x0012t\x0007"¹=V0ñá»³Z Ö6VW°#<J)¦eÏ«æ\x0000»3aösÙhrmß&r\x0001@úwÅdØ´c M&í÷$\x0015
Ë
t\x001b°\x001bfÐÐÊ\x001b\x0008/e(\x001d5dEväÃoüðPC»C\x0015ÕÐ\x0006å¥2v!û?'¸jeÇÌ\x000cáÔä\x0002kqô\x000c/fâÍûMÐ<û\x0003YqO+\x001eÐ\x0015w\x000f\x0016=$
GÓjî\x0003\x000b[_N]v¬IîÅ\x001d¬vÃ]\x001a|®½7ö¾~ÏZbIª¥Ïÿ¥ßÉeº\x000bú[<]\x001dñ>FêùTbÛÕÌtG¯)\x0018Ï1ÕØ&Ó"y©\x0013Ï5\x0004a®m3JÕu»>m½Ñ9¶Yd"(\x001f·ôïËÜæíêv0xe_Ë4DçÂ¦ìê\x0001Ydù&¹éÁg\x001a7çÀä\x00123ÊH¾Ôs"`\x0000é4o.		=Î\x001c\x001f!òÒ\x000f¶w{ÀÐîs^xÝ)âÕzurÂb·\x0007!Ù¯k\x0012\x001c÷¿.~'ÕªNnP¤ \x0014±«\x001d\x0019Ø÷Û3Å¤Jóò~\û$¦Eïb\x0002k]\x001cs\x000fJ
)Ö\x0001²&gvS\x0007¼¿Q\x001e©6QRåÔ¸kë-Á[
\x0011o\x0018GS\x0007v ûZ.(²Ö\x000f\x0015"MÒ\x0019þ³|(b\x000c(\x0003!¡\x0003C\x0013Óµþ
Sû}\x0014\x0012áCFÆ­TòÉdZý%ÅY{Î´wfr\x001cÍÔòdAo7®Å\x0002§®\x000e1:ÝVVX ¨cÌÚõfP\x0002í{·0újÿæ\8+E\x0017\x001aZïÇ	Õ\x0006ooÊµÔDqÌ=ìaß¤Éæ.)ÆØH\x001bé3\x0013+Rå6!S[K[¢¹NÑ;>Â¤l[tDN4\x0002Z¤«¦Ð²\x0002Ï|¸p3ÑJJZ¥ÆDÍ0L"]J\x001d¢Õ\x000eL\x0011>Æ\x000e6\x001ciºØ\x0014\x001e\x0015\x0004«x\x0013DÁ(\x0019N
FÖ)°pg¨\x0010\x00117g¬c½{eyeÿ,/¯°:â1Ë«cyq%GÇááÎ¸\x000cmB§ö
3¦$îMX¤d\x0013'àlRÂ?N;\x0017þÒË¢Ì\x000e°3T¦aË\x000b\x0005\x000fí\x000bâôóvÀ\x0007½ \x0007\x0000-õ\x0000\x000cYa¾Â~¯\x0011C\x0018DÿIæÐÂ <£~Ì6®;\x0011³%\x001dAÆm ñ£ÞÌÀÑs$J\x0015bÛìÆ¸úgm\x0005±¶ø^ì¿Ì\x0018¨V©èÜûh\x0001ÇÈ_Ðè§\x0004tÀKÃ¨éH½Í9~^[ð)\x0012\x0002S±£1Á¦+Òd,øèßëÛçÞôïÔó\x0011z\x001dØô¿¢´ì\x001cýúÓ/ãÒ®¥ó\x0001ÝP(ü\x000f =\x0017$Æq\x0019BZWXÌ·\x0003ÞÅÔM\x0010Ùï¬-×u\x0012]3#_\x0016Ã&ÂqÅC\x000f1?1ÎÃ\x0015%ÂÅá\x0001q½Ôqö.O&¤Îx_Äù\x0011åg3M9µûÞmWß ù«pq»&:°\x001cóì<ó~{áÑ©É7Y­Ã	TÀítðqåÇ#Ê3ÍÚ±hÞW\x0005c:f}x_ÏßgÐ\x0003#\x0007\x001få(àiv¬ìWä$\x0016£¿[wo3=ïLÆ,GüÕÓê5F\x000f£äiÒÜ\x0000_æX\x001e¬\x0003Þ?õ\x000f\x000fkP\x0015Ã/&+,¦\x0013gOðbÒI\x0012YPJÆ\x0007ÖK/0)áO
ì\x0005+e\x000bë¥\x00166(>ðÕ¸ç²¡öè\x001bpàÀ\x0019\x001e¸ÊÝ£Ó\x0006¾ÕG\x0018®ôlk\x0003ãÀæÎµ	4^3&áiý( 2}KGL'9âgh¦-ò\x0010\x0014×i\x0007k0kçö(\x0011C.Ti§(\x001b\x001cÞ,Ìô­ònNBF\x000fJ^÷oË\x0004nuâÐ¿¨WÉ´ìçÚ+\x0017î\x0002òÑ×g¯Ê\x0001$°~\x001c¥\x0001b!èGá\x00111¹Aa\x001bîN]éH\x000c¢U\x0003xAÍ\x0010bÃ\x0003Ù·\x0013^ÿì\x000f¿_Ï8>í}ïGÖV9ÚÎ7\x001bíû?Ú¼(Ó¼sv·»\x0004#EðL¡NÅÔ\x0000)Üæ{\x0014=ÏwÌ§z·æaÁF~\8ëC
fÍë\x000095/\x000eïÈ×gëÒgË@d+¹AörÎM`óq,µmP9°¤{\ìÏ	::Yu\x0001sæ6+=h(MñÄòÅ\x0013\x0017KwéåÇ.ÉD÷\x001d¶n¸	\x0010æÌôÐÌ-í¿\x0013ö\x0018d?Å-\x0012 :à}Å cQ,)\0Ì ÚÕ:Ãô+\x001dºö]ØáÐÈ!m¨xBïb *\x0008\x001d¨
 Â&âð@\x000b_KU×^'\x0013Ôü³©ø'rmó¬Â\x001a\x001d\x001d8yè\x0012\x0007¿Asv¼¯WWÉféÌ	\x0014)®c£µ«\x001bqþ
Ë$\x0007E/®+×ðf*qPÊ¤\x0013Å5ÝA·ï¿ìQ\x0016Ñg[lÉ²uÂ\x001b Ø\x001c\x0013haîy|1É ê=\x0015\x001c\x000bÓHkü\x0016©à\x000fA`¸Tð\x0006t¿fDÝYµd¶ñiltºe3ïÉ*\x0008É
§`2kW°Ùë|ex0ÿR_Ñ¥ªnLc\x001dNv³\x0006ØëÃ¦¶åvjá\x000f(¹f7·cºud\x000e\x000bÕÌé½\x000cYá7µâÓ\x001eeÈ=ºÌ'æM¾øh5lÛÖ\x0012ò}\x001eá2Gºþ BZí¢\x001a"\x0014\x0014§a­ca1^»&3ÕTY\\x00184å°]BDá=ÖÍ\:Ý&L\x000b\x001cÜm\x001c}MS[$¨\x0014&#+\x0015\x0016{ESÝ\x00161i×¾1©\x0003DlH,h\x0010_Á!\x0012.
ì÷¯\x0003À«°vsÏãq*öÈ/`bUúÛ\x0017ßU=\x0000\x0001YU\x0008=`UíLñ5YYçK\x001dSx\x0008"\x000eeá
\x001fÀåö±yN Ü-ð\x0013DãÊ\x0014>E³ÌÀÉPËPJF ÈöQ>º1Y\x0014iAaú­XÐ©0iâM
\x0012¶6ÛÂÚ¬µØ¾ÛÛÄ\x001f¿I\x000ebayl)ú¿\x001d\x0006¦}¾\®)æzjsLä$Æ\x0018À\x0010,èS\x0013qxh\x0011ö\x0013®Îvà,cÎ\x001cqæK?5ì\x000etÏF\x001fqWª»Y¸L³º\x000bo)	>lo+ñ&V*¢Æ e&iYIL¼a£\x0008Og¶
÷\x0018ß8k\x0014¡ó)ð®\x0008x\x000bsã\x001c´£3Zqöó\x001ca:Xëã\x001aÐµ@û\x0008_ôµðãÓ\x0008
!ú\x0015Ý\x001bÄú7mÙ\x00015srL#e­-C}\x0017q\x0000öÄgYªIôI"8\x0011¥I~Üoþe\x001dô\x001a\x001e°61uöªt·r¯q\x0000\x000b\x0014Õ[o½ÙQ#]öú¸SA\x001d_ñ¨TÐï\x000c
øÙ.jôÕ<XÎu­%z\x0011s¸}¦&ÞÒ	òæ£\x000ftg7ß¶5ï$7©Òæ®C.73Ð\x000b\x001bÿÆJæëL´êý[éuKçÞã¹ª\x000fÍj\x0013êè]\x001fäwêÊ&êÛ\x0007\x0015t~µ¡Y?Ã
Ù\x000f®ÖÙ¿Ñ×¬ã1ñId*­:á
\x0010\x0000·D\x0017¼Öf3óïËí\x0017 fÜE\x0004\x0008¯´ÍÌ&rßÐ°ÿ\x0006U:ÐEÁUÐ´\x000bÜ\x0000*\x0010:íUßÃª@üÔå	\x0015\x0008ã++õ
U  0
Ô\x001eø×ô±ÇBØb\x0018?\x0015\k-\x001du¨.>ê\x0014_yH\x0015Ò9ë\x001aÐÓ"U¢§B¡ò\x0018\x0017ò:GÔà\x0005±ú\x0019¹õp¶\x0007\x0017:>ªQI\x000bòÂ¸\x0019:ÄÄÎ<\x0015È¸-\x000eÕpÒ\x001a\x00010üZûY£ -%I\x0018 -ÛYã%ks*ÃÑa®Ù4ì\x0001pÕnîë-ë*½å 4gUÊx|MI²LQÿ£\x0013\x0000û=»@ÂØ1Á
ó\x0003¹læâï\x0003	µõêÎÕ\x0008y\x0005\x000f+ªÄE<_²ð&y®Ãl9Ö\x0016E½Û\x0016$íFÚbñ<$Õ\x001eç¹\x000c
RÒ·^@o\x0014\x0019ãW ©ìkÿ8Â\x0008¹\x0006]ÿhÜ¢ü¬³Dk\x001a\x0012Â&_ä÷!8K²\x0018Õ8Ö´\x0012Ù¨\x000bmêª¥\x001dß3#Ü\x0006E é°\x001bÃuwp¥í\x0012åõÜ¢0ó\x001a5÷ÏC[{(³\x0016v©m\x00119^ú$Z+Ü*Ñ~\x001cÌ`h\x001eÉ0ó	pgØÏu\x0014¡?Dm\x0015#EWº_©¨ÿ\x000f¹2ü\x0000â1iùP±Á¢:@\x000e\x0016Ý\x0014[Â\x0017®r9\x0019GêÝ©\x0012[±l\x000f[îÝi&aÒñQ\x001dI:_¶hÎæõ¬ß|Ü%ïþðËvr\x0016ÍÈ/Sw-Ñbu³\x001dãwå\x0000%hyÉ1\x0004`Ý\x0011GÅ\x0007:à\x0011oE£Î\x0000J5Çrw\x001dp=¯ãÚðÄOiEÕl®°tW×¹ÀÌZÌ$Ë(«2R*Kî¥;b\x000c*ÎqÚAsºÇ¼Q\x0005\x0015¿%\x0002rgãkIR³XÏðC\x001bêÜ@MÂ«t'Ï¥yºDÎ\x0013-¶Ý\x001f¬éy3÷\x001aÚÆ²è÷´)\x0018\x0007µ±¹QñtÔ²)ÀvmQEISBÄKaV"IlaÝqn¿%D­´ÊW¢\x0007pØ>7+\x0010týãE¬H\x001e4þ8Ò¼µn¯÷Àq\x0019ýt\x0007<ðgã+\x0012ªX\x0012fÌ!U8ò{¨@jº\x0012i\x001doÃë}µG?
Õ
Ô²:Ê\x001d¾ÌI¢ÖÕ2é¯¹Á \x00182[;U!\x001aÐÓ\x000e ÛÖ\x0014BwØ,ÝÌ·ý É\x0017·­~k­ëÄ­Õ~· Û¿Î\x0000YÎ·pñ\x000eq>ÇêL\x000eZ;ú0\x001d JN\x0015iÙ5­Oøþ\x001fE§Ò
endstream
endobj
54 0 obj
<</Contents 55 0 R/CropBox[0 0 595.32 841.92]/Group<</CS/DeviceRGB/S/Transparency/Type/Group>>/MediaBox[0 0 595.32 841.92]/Parent 6132 0 R/Resources<</ExtGState<</GS7 6155 0 R/GS8 6156 0 R>>/Font<</F1 6159 0 R/F12 336 0 R/F13 335 0 R/F2 6162 0 R/F4 6171 0 R/F5 300 0 R/F6 302 0 R/F9 318 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/StructParents 100/Tabs/S/Type/Page>>
endobj
55 0 obj
<</Filter/FlateDecode/Length 6094>>stream
xÍ=ÛnÛH²ï\x0001ò\x000f|9´iö=\x0001ÛQ&9I²¶\x0007ça2\x000fEg´°%E¦\x00163u>i\x001eÇû¼\x001fpªª»y\x0013ÛV¬&ã\x0000$²ÙUÕ]]]·.\x001e¬ùõôª\x0008\x000eObzõ[>\x000b~9¼\®~=¼üc\x001f~~/¦Å|¹8¼Ø|.ðÒÛ|:Ë×ÇÇÁéë³àëË\x0017Q\x0018á¿4MX\x0010\x0005*S¡àA*Yñ`¿|ñ¿\x000b\x0016/_^¾|qø\x0005YÅÁåõË\x0017Ø8
XÀ\x0012\x0019J\x0016$Y\x0014J\x0019\ÞB³\x001f.àË\x001dôL
Ö_èRZ»tþÃË\x0017¿ÎÇ\x0007jt2>\x0010£\x001fÇbô\x0001~óÑåø×àò^¾\x0000¼¼|±?~ÅaÔñ«Ðªc\x0013ø\x0007x\x001cð»\x001fÆ\x0007RÃÅø \x0003DÄè=\x000eÍÿñeÞ±é\x0012;\x000cÇÀI¨Ç\x0001GÑø±QFÿ\x0013°C\x001cw¾\x0011\x0012\x000c\x0018wø\x0001Ùò
ÎQ¿3#â(L²ï03"!Ûaf~ò\x000e8á¡`ßâDñ£S\x001f \x0014\x0010\x001fÁå\x0015°¥H½cñÇß|x æßF>÷â0Þú\\x000e&?\x0005}ïtY\x0014Ë[÷Ö÷f¹,¾õ1\x0016F²%ÓÒP¨@Âs©¥Ð÷2o\x001dðR\x001eF\x000bÞ¾;X\x0017<\x0012ð=è2°\x0007OüÃÎ`ßf\x0003Òe!sÂó?"â»ÓG\\x001f\x001c~D~ÿéìÝë z\x001a\x0013Ë\x0000\x0004}\x001d\x000bP\x0006JC\éÎU¸çòçm¸±\x0008\x0013¹\x0003Üýæ\x0019Èå
°ÀÏYÚ\x0004\x001bò\x0000ÿ\x000cèò\x0006ÿ£_ð ðÛ£ý xR
\x0003Ðx6:c}áÇ±\x0002m\x0008¾\Nj÷_ÿL_RPUÔèÃ{h|Fúô;TX>ø¥K\x0019rµ;\x001dïÇþ&?¡\x001a5yiqà\x0017\x0011iT'\x0017ô^¿»øè\x0019c	«M|ÃÈ_è\x0001¦ÁÃ\x0001%ÔX6ºø\x0008?&gH\x0006µxcçâ\x001f?ûEXEY¦»#<¹\x0018§O^-\x001eWÈÂ$Ý	ßKË¼~4\x0002'ï_ÃÿÄæÈ0È(\x0011Çx÷\x001e\x001b'£×yY$!K¾\x0001qÒ9­½v­½Æß\x001cÉ\x0001¶>©(ÛO0Ñ\x0002\x001ar±3¶GQt\x001c{\x001d/\x0001k?Sß0^ï/pÙóÑ)þ3iFðµ^ï¾1¹øðÎÎúçµ%¸vÆØó£"ÐpwNÃòÝ1g¨ï¸Cý@¼Oë\x0015§\x0014x\x0014Äá;óM/\x0014Zá\x001f~>\x0007Ùïyù*X\x0010lw=O.\x0007ùÌ³ÝÁÿXúzÎÉ¯\x0000KC
QJrà÷ª©¹ÂæüçñL\x0019¶+\x0001zïQjÁçy<e\x0002í¾ÿ.>½+ÇËóØ\x0006#\x0011J¾\x0003þz]üô\x0011æ»ÔN`lI ÂúÙs;\x0008d¨Äî\x0018î1[V\x000b{²Õ"Ûæ1\â8
£]Èà!\x0003î\x0008÷6c¶\x0010IâEßÈÞ\x000bf\x000b\x0003cUìÁ¹ÞgÈ^ó»Õòn>NF\x0005râüºvÉÑÝr\x000e#·¿;}á\x000b0ëzZlèqû¤¹ß\x0001ß\x0016V\x0015\x0012nMGpÅ¶^h·*¶¼\x0007ó\x0005ômo\x0016FöÁMêqý×\x0018´\x0005swNÞÞÀsù-t\x000c1\x000e-UC¬"XÞ;\x000cñt\x0008¯\x001b \x0008Gé+þØ\x0000v÷Þ±c twì\x001es.ð§-Ó®Õa)ËÂèAÿBÃÃ`B\x001c9¶×\x0018©\x000eDR\x001eÊ]\x0010Ùwº ËB¾\x000bä\x001f§ßE¬WÍ=\x000cÆÕzìs«bº¸ÊõrJ·Ø@ãl´X"÷^ã¸ÁJ\x0013xSoïáëâ\x001e\x001f»îæWvÍ\x0012¬ùÚ;±=N,È	"Ö\x0003N°²\x0005\x001bÄ\x0016q\Ü KlD\x000eþ\x0004±\x0003w\x000bØåuóåç;|vý¯û~¼° »<ÆL2¸0Rð\x0010\x0013D¼Ñã\x0002Äà¸¬¾åf}·\x0001J}O\x0011\x0003\x0015,GQñ¹ñ\x000b>w#Q\x0014(ÖªùMÉø¯ûÊ-°Å«Ô	Ò¿+Ú0\x0003ÞÉX®çèÂÍ\x0012vC\x0019f¹þ¼Å%Ó6ß6ëq\x0006?}ãÇ\x000010z\x001cøí'Tºá©0UýÜ	\x000fVpÀ;'\x0011¼Ï\x0004¿ä8Ã[êø@Âg\x0016Ã÷Óã\x0003ßÓc¦èwln2ÀO@Ó\x0008¯Ã,1\x0017¸¹P>l;äÇ~3º&uuXÉÆºa¶¤\x0006¨ìi\íó\x0011ugïVxeÇ\x0010ð]h8'>§\x0008î1ãÕlÂêÀ'ú¡¨7D½\x001d\x0004²W
f~J¤Gµ.ê}b\x000b\x0018h¼ÊYTG\x001a\x0011¤ûuÂSs1\x0013\x001a8ü<åÇ\x0007Ü\x000e^rÌîd¨=¢í¬dSI.¶CÒ\x00136×ór\x001a5æHNôÜ\x0003êyMª14ï!\x0012K`·¦KÃ\x0006fVíÐ OiêÍZÁ±g\x001aO@4æÑS§Ú|ë^\x0013=oÀ\x0015æ·!ÞfÆ¤ÅËõþ,;Øç\x0000\x000fY¹¸XÙ¨Ñ§]ÆÔÇ±2Ý\x0011±§\x0008Ð¤UX>hÐÊp\x001dS
¦¹Èö\x0001×)¡a×B¢Ñ\x0019U'&Ò\x0002o\x001cÛáy2wº\x0005«³P¹8nO%¼\x0013^BÎ&\x0007¼0Àô'ÜÞæ¸y)¨uAøï\x0015ÝÔ»Úe°Ë0> N÷&"E±-j@Ø£Ùè¾~¾ñ¯"¨Pr'ì9ØÄwôgÕ\x0001­\x0018,
;¦\x001a·\x0019\x000e"ª\x000eëËS°¡ÁÚ¾×·Ëi(òõzùlW«Z¼ÒOÝLQñàºÿ\x0006Xü±\àÝl4Õ×ù\x0015Í\x001fêçÔ÷Í
è'ó
\x001f\x0015éÏõý
1[.H·/áI¦¿/é©xT`ëh´1Péæwüju\x0008ûÉå\x0006Téµn8Eì7ãìð
ÏÂ,Û»¯c\x001a¡\x00033#\x0005\x000e\x0004
Ñr±\x0000§èCYçä\P\x0001N\x001cù×ºÀN\x0010.,ý+½\x000cÓß\àþ«\x00072
\x0013^\x000fä\x0011\x0011g.xF+\x0010{Ó5:ÁìzÀù½ÉÇFèUlqS®AÓ¥xÅü8{;flô3,Ã³·ç¯èª\x0018¨Ð|röÖ´Ë\x000bº"F)]PæÁ\x000bxðÓ8´åhg×@iaf9Ò!b¾ó<\x0016\x00191cjËFÉWëû; UDýÀ³$ÏT"9<~A×"~'\x0019¨=\x00169:B\x0003\x001e1WÆ\x0013K\x0012©v@9ÞJ\x0015"CX\x001aª6\x0004\x0007Ð9,HJ¶ýoÌ\F$í\x0018-ÿ\x0016\x0016}¹à\x001dE<:Õ\x001376Aer\x001e$K
X\x001bE§Q¥E¨~ÅÇâ¨¦\x0000ÖU*®¥"Xª¸Öà*¥Óvaì²J96ÕZ¥¾*­VS`ëºðÄöI8y×ª¸Dgcò¦_Æ\x001fV·½.fÉê}º\x001cIÒ»#If\x0002³·\x001dI¢7G\x0003¤ÿef\x001cIÝðÑ%1¹6ïª5 Ñ±$ËFX#²tyT\x0016 ¶\x0010?nþNKóKÚí"Ë"Ìâåv¥èå)«å\x0016^t\x0006'#¶bqi\x0011^
Ã1¶kÍX`5Ç\x0008¶oÙZ2³¶*úmN+ã²æW°H«Æ\x0010=ÈëX´è{ç\x001b×
AL­
^ÇbWçJ´ïF=èºÑÔGT[ïÞ¥b<t²<i³Å³1ådavÕ\x0016«ÕÍ\x001cU/RÂî)pÀX<½$²C\x00176rÖ¦ÿ\x0007kT!Ha"Ã\x001eÌÊ?¬Ê\x0006êÅ+º´ï>IgÓÓ\x0015¼uasÍàò§\x0011¤\Â´ê\x001bv0»ÿ'÷\x0006ÈêfcµKÓ\x0001\x0010ößMù°!Xs	2B.îègª[b,GY\x0010¿ý\x0007\x0011¢n4ÉS4À~\x001f³g¢\x0010ÊXáö\x0014ß,Á4h¬H\x001an°"oÀxT3çç¤\x0016o+¿-]\x001eXm ýUÓîF5ÿ~&ì¶g½ës±À¬(\x0007±=\x001cLc<ëæC\x0005ã«4GVøïpåÓ¸Äú8d\x000b\x0017ÿ²\x0007àõpp\x0000\x0004jæÛ\x001eècÊ	\x000f\x000f0®È,î\x001d4OBéd«\x001eH\x0015Ñ\x0003ðh/Mä©ú^-7kíãºBq]LQ¤ã\x0002GqP
Hhye\x001dXÔÛjíë,Ñºq\x000fÍ?®×¦¯¡Íê\x0007b\x0014R1\x000cówÄ(ª¸\x0003Æ\x00160hÐ¥\x000b5\x0014 ²L8à´\x0015&0\x0016UC««Åâ2ºcñeü,©_hêN-\x0014£I-\x001c$¶£ e\x0008Aén¨é äÚ\x0014¤%\x0005æú¤\x001eÄháEûzô;
ë\x0014L0á\x001f\x001eqï
\x001eÏX¨\x0003d\x001f¾LâáM7\x000bê\x0008£6º
\x0003X\x000b½\x0015v,\x001eË=í°©æIÃöi\x0004Í@bý±7ÍPá:\x001d\x00072í¬#XNÖyº\x0016>ë¼V[!qõá\\x001b%¢ÚhHÊhésPÅD§\x000bÛ\x001cC\x00122/<XéDÃÒßXù@\x001c/j\x00079ºìfù¿ÈËj'ª\x0016yP¬A3ÿË\x0008^ï,\x001fIt_9\x0008¸-Vú_Iòµÿ¬\x000cLEw#ÕÃ ÄäAwÀû{/:­\x0010¾éër2©§9²\x0007XI&Ù
ìá2Ý¾Û³:qºtîr9Å:P¸\x000b\x0002=ðIo@¯æÌÿ\x001aÈ":Mëgò¥\x0012k#\x0017årü"j¬"¢ð\x001d5¯¬iDÇ\ÛÞ E\x000fõ¸2L½¹AÉTLë\x0011;´c©ÁQìt$á¦7µàJ\x001f6	êìÝãÐM"ÂX¸àõaÄa¸àÑ>176{¢urÂÎf±Éõ¼Pô\x001af\x001aÜúwã¨p\x0017ä#Ybj¯Qý
\x0007\x001aþêæ>1únxô\x000câlvGl;j\x00054®)w9§dÜ\x001csrSÍý¿M)£"lt\x0013¬Gò2	5*æè=
	ssV7ªg\x0001Ô\x0013Eè\x001e¦)Ðé\x0004;ÙÆ\x0017ã};J\x0012ä:\x0008ï£ö\x0003£z\x0001Ýðú¨ý °^O'¼Fí\x0007±o%.\x0015_=0¶}Ô~HC¸àùO>\x0010QJµ&¢O°\x0008½ï\x000ex³Ü¬\x001e\x000eeòC\x001fâ\x001evöö\x001cVT2ú\x0004Úê\x001dg	i	Ü6E\x000fÒ2
\x0007sÉÁ~\x001cnÊ¥`!sÊÉ\x001eÈ\x0013"d©S./Q>®élEéÞ\x0016B
B\x0007\x001aà+ïha4;Ñò?\x000c
öÞØ	Ïÿ4+.Cï³ìu§\x0016ir½#Ð)¢Z¸geV\x0010ÈOc¼f÷´ßLÉ°5©3Ô¸\x0019'#C\x001dûä©öêîg´»Ä©4 ½SÓk]8Akè\x0018\x001e´Ú\x000f7±ª|SfAs\x0015\x0006|ß"]\x001d²\x0013«\x0007¤®aëAVgY¨ðz\x0010L`*H>\x001c}\x0012${<\x001b{
Í(ò_\x000fÈJ\x000eKµ\x0002Å	¯Y©ºÚpôÅ\x000fqK¸À\x001eô\x0016eÀó\x0010Âú[N
\x0002'#æ_áa \x0005¦±\x000bn\x000f)¨²´\x001cðzH±\x0005

H\x001e'kÛ\x0001Oï5tf\x001dY1n¤.½½ø4FACS½Zß£ú{U¥´¹ót¿nÞ.±GùOéÿÒ/m\x0006³{¼ÊK+µ\x0011âKFÓëq:º¾_#\x0000ÿ²="YÛ5$R
\x001cH&\x001c\x000c1\x001f=ÀlÕQ\x000f\x001aÊeV #Nh'Hjý20[+r¯§å|,É×ÿê»'ó[á\x0011sLØJ+ièÖ-ÓÇ£{rAN)¦lR§áº\x001c%þ5oÅXø×h\x000fË\x0011lêX¹àù6\x001c¤©Ì£\x0003»éû\x0013¦Qho2ªË
Ôe4¸r=\!ßÖb\x0006¬\x000cÏkÎ±¸å\x001bn¶\Z9rÍm],\x0001é¸\x0019=Pü\x0001O¬ÿëåôÛ\x000cárO\x0007æ£Q¦ásXX2\x000b³ípO]OT=lÍ<ÆR\x001a\x000eà}ì]\x0019IËnx=lÍ"Ã­y0ò ©r#åð\x0006\x0019®Ü\x0003L\x0017ÌI6\x00024ÿK\x0017\x0014t@ò97Øìr!ÃÈ9Þ=Ð'âP>2¿5­çt~ãSèÁ·J9\\x0011u|S'¼ÿî\x0001Â8gúºÂà±÷0¸@'¨Ý,¿G\x0018|\x0017\x0004ú\x000b7 Ws¶òÝ"b­I\x0017¼ê`\x0014eÞeÇÝiEíãõ­QeVSýÌTjO\x001cÉsq»IãdI\x0011L\x001eÍ\x0010ô´ÆR<éÒÌ¨å\x0008,\x0017¯Ð4\x0011þµ
gQ\x000b>Bö¿nx=ìG)Ç½áèK\x0015CsÀmmEö´l	é¥bwÂ \x0018È$Ö\x0019l8¬\x0007{¨éQ¥\x0006£Ïz°\x001dÓM\x0019=&\x0011\x0010¦\x0014´Kté©><z2NÈ£7\x0018åv²\x000c6³i\x0014:åF\x000fäÜP»/c«Q~÷Ódv»gT\x001bx\x000bñ'ÄÏn(xÆtú\x0018&ý¬UiÊ{vmBl
\x0017£u\x0019þxÓz\x0017È	Õð_ò\x0007ÃptrÞÚ\x0015Ft+ç	ù½\x0013ª\x001c\x0003ÛG¬*&IÖ
¯õÅ\x0015ÉÁèãé\x0003ãiÙ¨\x0005k\x0007&í\x0018	níÏÆ\x0017\x000b\x0016h\x000bFÊR\x000f¢\x001föXÎ\x001d°{ª\x0011\x0018»áõà1ÂM6\x001e>Æ8\x0005L»ábªj\x0015Rð·ÐeáÂvðY\x0005\x001c\x0013®\x0003\x0017ÈJó\ÓêdU)¼RQåDá\x000f*M\x000c7>»¨ã<þÏ)Ì	s\x0010ì?@#\x0004¥\x0008\x000f6¡B
Ì±sÀÓ\x0001\x001f	£ÅÕ±9Z¬:ú\x0011j\x0016xMÏÆ4Mÿ¦\x0010ÝÙE,ýúTâ\x0019ÇøªÇÆÌÊü_ÿ¾XoÂq S\x0006\x0007\x000cô)sørU\x0005Üêît\x0014¼·ngtÊû¬<ûrU\x001eýE2u=/"zj¾¬¦k:Þ.ãÚâÃÌk*å®7TCÛèWØfºÒº5·Vk*ß3[kÊRsbèû\x001e©´üdè\x0004è8Ïf}1õZ<7¶J \x001e÷âÂY÷¡Y0¢Vð²£ú¢-ÈE½¾9µX¿VP kÕðó¼\x0006*º\x000e»q!Lj,Ì»Fd\x0017¢kõTÛ§î"]é\x000eþ±²\x0016y°}'e)Ú¹C.¨Ó×5ì[eUp
ÙÙòÏ_c*h¶Í¯Dg²åýë($cKZ\x0016\x0016¬joùæá¢m_e«NÔÈJÊê\x0003ß®ukÇ\x001eëÌ$¿ý^Ô]d^½Û=p}¸Á$½ùØ\x0001¯\x00077\x001fzùÙô©\x000c·0\x0007¼VÂÈª¢êuWlRÆ+}çO]lRùÏ;\x0014ÀSËÉ¿\x0019\x0007DJ\x0015^£/M±­\x0007¨¼\x0002)Xµ\x0013õT\x0000±ÿÌaôÎ¥\x0003\x0004ÞâNx}x\x0003E8àrÀZYêêr{9D \x00039{>\x0007ñ¸\x0012X»¾$\x0016òï\x0012ýÌ\x0005°\x0007@\x0004Û\x000bÿ8»qxx&¯+Îx³c\x0002Hj9õ{ÄÙwA ¿8{\x0003z5g_û8nþ\x0000¼
åñ·\x000eZé#®¿Ó\x000bªB\x0003¿æW·	|ÚÖ¹|k¬.gJro\x001dÕZ­³MUZÂr\x0015&ïÏä\x0010Võà°ü>9³UO£ª°-$E\x001a°f¢íhÐçeü`n¡3ÂyääÑä\x0015ë¿0[ñùÈRÎºr;Wù& PÍW$e³ßû¼º]41\x0006l\x001dàûHÏKñÈ\x0003ÞßÑrÅ
´ßGÏ\x001dßóà\x0019Ã\x001c= ÃILpÀë#CYbÆð`ôqÃ;áY'MÐ\x001däès¬¨SO°eØÂÈÄ\x0014q\x0018l<\x0004ËÐ\x0003=Ø|\x000bâ)öáè\x0013T\x0011Ë%µt\x001a¦¼õD\x0008SD\x0014Ã"²#e\x001d7!*²T÷
[ì=½¾_Y
êZ´½\x0007w\x0014@\x001báª\x001e^\x0000ë¯£Ø\x0006\}4ïÞ¼ÂÚ¬ÂìÌè¦®\x000f"Ñ
¯\x0007\x0018ê4\x001c}qB>±nxUà¡å\x001e:Cf{^¾o­qLÕû:ÆbªÌ£ìÅ'\x0015áæ\x0000}RÒ	¯\x001f\x0014wÎy?>`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=¤¢\x0002,A"\x0003K</p><p>\x0010L'a
')\x0007I</p><p>º\x0003\x0012ÓÂ©'Å%\x0005'o\x000eíÄî</p><p>P`7\x0001ëí\x000eDÄúòÔº2mp0[>ÒøºD´\x0012xøu\x001c\x0016lQÑ¨\x001dÝ-\x0015¶þ\5$²/35#¥ãÄ)â<ÔÜ]\x001fÒ_¯\x0004\x0016mÂhÅ37¤sPÝs8/ðaËvÂ\x000fÚ</p><p>\*wlÉS«Ç·¤* zÕÈÒ»FgQ\x001cÖs/¾»\x000f¨\x0000lq±ìð\x0008ºîyQ\x00192À»\x0011­\x0006D¡uy\x0017\x0001Ã\x000e´\x0004\x0003ÙðÊ@l¬(s1\x0017</p><p>c=DQâþª|ªPTµH­Ú©î®.¬"	\x000bðRQy0U\x000e\x000bµ* Âq\x0014¼ìíÿ<\x0000Ã\x0004¬\x001aÍ\x0005\x001bL\x0013·¶õõ¬\x0004[HUÑµ#9%*tXH²¢¼_@{\x0010Í\x0011ÍO0[àsÈ ösA\x0017û»ËµuË\x0013üóch×µX/\x0001%ËÍ\x000epË{ª`\x0004Îpk,½e§±ñ\x001c\x001aóNÓÓVÛWTß\x0019]BvÐµ·\x0013}ð\x0006#\x0004ûÌÏF«¥Ï\x000fúº[:u¨YL7u2hNû7`V¨¦)ÞÓÏÂ\x001bº­À\x0005w::Y#éÖÛ&4r:Ç¥Ñ]TnK¸7,º­];\x0015>,Ü®Zú£UíÚ
ã´(÷<¥ÿ\x0011o©\x0011\x000bü®\x00028Á\x000b\x0016¸7=þÎDeÄëiq}t7d¼5ÍÔ@hÕQ'Ðv\x0017Í\x001a\x0007&!;IVÿÁ+Òu.mË89i·k5â[\x0002w§ë%87\x00129\x001b@\x0000Ñ5s3½Yr\x0001ûÛïq{s÷Ëfý\x001eãÚ6W¦ \x0002À\x0012O\x000f\x000f`\x0013\x001eÇ\x001c,tN\x0013Õm\x0013Ë2NÜ¾kòCCDÃÌS(²KGH±þK</p><p>N·>ÿrÒK\x0000\x000cêh\x0015\x0017¬Eñ¥ÆGkzÂÒUaMÑÛkoPw ld´¾h°»a~Â§F%Ùç.q¹àEd5\x001b?ô:û±¿1·¿}ûÖ\x000f¸m?wÓègyWÃ`¥ìt\x000cúþ?Í\x0002¸Ë¿\x001d±¾äÜõàÒÏñfFXS!¤ö\x0008¬{áTtJ1\x0010®â\x000c$thö¹\x0007Üy÷§ozZp]Ó\x001d®°hH¡nÛ</p><p>;zVU´X\x0001uÍÐ¶\x0016Ëé¸e=
t¦¤¸\x001eöYÆÚr\x0017±Zêg9ºý:ä #üÙ+¤\x001dæÐáÈö\x0017-±½=7Ý	\x000eÝÊ¢Ã+«Àª²c9Nùê¼ÏªRXöy¼\x0007ä¼²</p><p>e\x000bâ\x001b\x0003·êz\x0005E³¬Ø\x001bR\x0012üùÑKõ#¯oXÙs4g!SY?aa½\x0005"Øô\x0013èÒvíøØ-\x001a;\x0010î¯á\x001e\x0012¿\x001ar\x001b¶µ§Se\x000cìB\x0015Ä\x0005Åû?\x0011B=È\x0008ëþyÖ¡\x0011âÔ³)âF\Â\x000c<]0\x0006Ë\x0016¦âÃ2\x0002üÃ©!¶	VË&Ö±·ÿ+\x0011\x0017ºmâ¸ÃÄöp\x0003\x0007¸5¾}£À¤\x0004B\x000clß(*\x0008ÄK#Ö£\x00188Ê</p><p></p><p>Ê&80i©\x0018$Ã<l@[ôChK¥!:ú\x000eÚrj\x0015ð(m©\x0004Bô(´%\x0001ëo³I\x000eàÅènpÊdVªR¯Q¾Fab[.w`WÚ;Öµr¬«\x0015\x000cWö$÷3«[\ÛÂñ ¡\x0000\x000b¾
v1ýÃ}aÀ§ÁSReÂ¾\x0018*.-=DOß~g~âpán7z×
Tò¬s`W\x001aÄq«\x0007.í	h]<\x0004­KSi´>µÞi\x0014­K\x0018÷(vû8¬çÏÑ</p><p>\x001eèI¹d\x0016Äs\x000cRp·\x000c/e#\x0001\^­¥ ð¶ó!¼\x000c_	¬OîõÀ\x0011FW|Ï\x0012
\x0007~vVµw_tP\x0015øÕB6M®\x0008äyî*(7\x0011wú&J×ñ¬µÔG	Úè&eD9ñïa-F53£ûûÅÏF§\x0005Ze¦ðKÙÄÄtç³ísyÝÎ\x0017>ÁÜ	­¯;ó\x0011\x0004,ÐÌ\x000e¬\x001b	ÒGÙw=X\x0012°IÀ*
aå@£Å¥¡gR?\x000eaªÌT®UÃ½7y\x0011FÚz5-Ôí\x0006¾ÙZ(zÐ¦\x0012Zp£@÷g\x000fØ'¨ÀûF¹l4iÒC³äY}uü\x001fÍ$/\x001cV\x001f|êgéx~Õ7[ÖMË#N¢Ô^\x0012
¼ôÐâð= Uóà/5XõüÏ¾\x001cBºw P¯½ÓÛË\x001fÃF\x0008\\¤ÖcØí*\x0008ÀT</p><p>¦­ZLóa·kCì(\x0003ìm×á=\x000e\x000b÷ë9k©E{Ïå­èÐ\x0019éÓ^¦Ê\x0005C\x0007wH	åï\x001f6?(#þ?¹;Èò</p><p>endstream
endobj
44 0 obj
<</Contents 45 0 R/CropBox[0 0 595.32 841.92]/Group<</CS/DeviceRGB/S/Transparency/Type/Group>>/MediaBox[0 0 595.32 841.92]/Parent 6132 0 R/Resources<</ExtGState<</GS7 6155 0 R/GS8 6156 0 R>>/Font<</F1 6159 0 R/F10 326 0 R/F17 345 0 R/F2 6162 0 R/F5 300 0 R/F6 302 0 R/F7 321 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/StructParents 95/Tabs/S/Type/Page>>
endobj
45 0 obj
<</Filter/FlateDecode/Length 7522>>stream</p><p>xÍ=Ms\x001b¹wWù?ðH¦í\x0006Ðh4¶TªÆÒlRÝÙÄ©=89Ð\x0014e³J"5\x0014éü¦½ìÝfaÎ¹ä¶xïá³\x001bM+fS£©\x001aÛì\x0006ð÷Ýo.6Ûåíl¾\x001d½¹ØngóOÑû7ïÖ\x000fyóî¯\x000f7?Î>.W³ír½zóÇÝ-<ú÷Åìf±9?\x001f]¾ý~ôÓëWeQÂM£Ø¨\x001cI-\x000bÁGMÅ</p><p>ÍGÅëWÿóÑêõ«Ëw¯_½¹f#]èzôîöõ+h\Ø©ª¨ØHé²¨ªÑ»{Óì?ªÑÇG326Ø|ÄGMôè\x000f?¼~õ~üÉT/&S1þñÇ\x0018ÿùÍÇï&\x0019½ûÝëWW\x0006Þ¿~uüü8«\x000b¥âùiÅ³\x0019
\x000f¸)´ø:àßþ0V?N¦ÚLDÿ\x0013Pó¼dzðYí\x0012O@ÇtxÀªPòëËr2el¬ñO$\x0011ö\x0006póÛ¡'$!Ü'`â\x0007 ËkØ£Óî¨ËBé_agD]\x0015ì	;óûÁ\x0001+^\x0008ök¬XÉ¢þêÖ\x0000a\x001f£wsC¢\x0019|\x0016\x0017¼þ5o:Ôü_[>\x001fz\x0012UY\x0017õ\x0013VßâË£«ß?zÓsï]®·Ûõ}ÿÕw½^o¿ýêc¬(«\x0016Ok</p><p>!Gé×¸5àô\x0007Ù·\x000c¼\x0017¥êwì
,2\x000b\x000fÉ\x0003\x001f\x001bòàÇG\x0006¶6÷6{Æµj]°^xÃï¥(ùÓ×T?zó#Ðûï¿ÿíÛQ9\x001c\x0011K8ÕHëGÖ,noáö]lGæB\x0016Íx\x000e\x0017ázõyR\x0017«í¤\x001a/Í¿Ö«ùs\x000fMd9}^L ¶×Íb÷3ü³Rã{Ór·Ýá \x0013Vïî\x0016füè\x001aWzü°Þmàýy7³ã>À¨%ô|\x0004ðöñb@$\x0001ü4ëzóÑ5\x0010Ú\x0000æv4øçz	øjÂd´m>ã²Ì\x000bÛw\x0016ÐÍr¢¨ÃÃzb\x0013\x0018</p><p>mqN·Ñ2#ì&\x001aó­¤:\x000c¹Ý­j`ùÝýÙLôá\x000eçs^\x0000öÌ"¸´K­\x0000ë\x000eM¼6hZÃBw[À\x0016WÌìÏD».\x000f³Í\x0016ÕãÍð3ø9eªhdßn&ÛUÍÃ©\x0000`úÿ;ü\x0006®Ü3£Spek\x001e%p ï*Ù·æÙf¶%²\x0004ª}\x001c§UÍ³bBÈò\x0000&¾|g\x000e¯]ül×&ìE°vf41\x0013dPÈ¹¢£ó¿\x0008ÌÃ¹ô#Ài©ÆÏzêë\x0003§^;¦33îUÉ®®Ëò¥®Íoaþ¯Î%½*Ëóieþ­åyMáÏF³\x0012þ¾v¿Í»\x0012F8¥8çþq\x001d~ëº²¸k]4ÀWçÊ¶\x0002@â\x000c¦E\x001c`?\x0012§©B[xV·ÒH\x0018ÒÎ½<gÒ0P\x0011¨H'ÖÔ4Yÿ[ug"nÓ+iËhùng\x00033/\x001bB	üV~íæï&ÌÀLLÄÐ.Î5Æ®\x0018õäÑº\x0010Eí¢i\x0004\x0001i.\x0011EUkKÜ\lkÜã*ô2»%âÝ²p\x0004$¾ÖÑ"
:uMÓë%\f¬)Tá| LìÙE\x001e7»3?\x0017£9¢ÑgøsCô\x0000\x0007uö\x0008ÀèÆèõðÄH\x0017È\x0002ðév¶\x001fKwFÐ\x0017ÿÄÁgÀ\x0018wÎÍ8È
pÅh³¿7\x000cc·Úo¡áÙ *\x000b­ûÐr\x0004'êìÛÄN>b<·ucÔÂæ \x0006</p><p>\x001dÁ</p><p>^\x001d:ÙE£u\x0016Ç^\Å\x001bE}ñïÇo
!ñ\x0008îõrõh®óÑÇ
·ÛÝr;Öc¼z\x001eîvøînØYòR\x0017µþú,g ;n`6\x001f\x0017@à8'£.ìV\x000bx3ºÙßÁß{s\x0014>Îð`\x0019|ô\x000b^Ç7p\x0016pH~\x001eÝ\x001b¥`qm\x0017ÇI&¥\x0008£J²Ómsî ðo;(ªéÕF?\x0013]EñO\x0016ÍF7\x0012É¤\x0016m?Øå\x001aå@`Só	ðÆj\x000cÚø£Á=¾Û\x0019Ç¨3³ÝÈ¼C\x0017£ÞÀíèlvp¾\x0006Øxåû\x001e¹K¹¥r]A°g©­ýÁW\x000e9²)ô\x000bUÔÒp
£P\x0003¸ÛßdvF\x000c®9×¢*ª®øù¾V9_u@ªºM/Èá%lÇ«òðþÃ	ÝF\x0000V'P­\x0018\x0017`"}¶å2.Á(Ù\x0003Ï\x000b\x0018K:	A¿RÏ¡]1ÃÀ¤8
2rJ\x0004Ó¬hX\x000f¼³]¿EpÚD¢:«$e2+ºOQ\x0010®I</p><p>½,ïÞyyV¢Ü¨\x0016:\x0010ÁsbkY¡Â¾U.=dCÛn\x000f¶³\x0007æ°-\x0018Úvû°¨3Ë4R¸Ó8¦  7\[ý@Ôè+ÔÄtªZÑ«K¯6!þ\x001b¯yèX½\x0010´³,Ñ\x0010NÓ\x0019µ¦v8¹Æj
ê|S\x0011\x0014LÔÝ\x0014u¯c¢Iõ½i\x001dÖÀËÐýe(%5/\x000bg\x0019\x0010·@\x0003\x0002é\x000f[â\x001c`Vã;{"\x001f5ªÃ=ÞÊ[4>8S³~\x0007Æ60</p><p>ÏrÐ¹Ý4UÅÃ|Z©\x0014\x000c\x0016ðøÒ\x000c¡-IT«I!\x0003æzõ89\x001cú\x0007<{ÂóÁ6×5ïÁÞÍbô£Él\x0003â\x0007ØRÊ5Û\x001a=\x000b\x0004jÌ\x000cðbta\x001e>l`¶#åìØ`ê\x0012®ìÌv¶®!^\x0011q7\x0017Hï*.g&ªX?\x001d#d­É/ã\x0004|ºà¼\x001fm\x000f\x0012\x0012¸åK\x001e#\x0003jvÎ¸eBZ\x0011#gÞ\x00044U,ºS\x001c.ýPµùÞ¥3%ö0û®¼°-¼=®Ø »\x0008­¥fZ³Ô\x00125U®\x0015\x0012ÂÅ¹~ú÷Ä\x0005[:ÃÞ\x001dèMÌ;îÅvÈR\x0005\x0019æp\x0018¸X\+H¼7Ü)nä<j9á=Y3eYË\x001f¡¤9Oìi,Ú\x0001·ç·?\x001d8ÒRs\x00123vU{Yá\x0005ÌiÅv9Ë\x0018é!\x001f¡\x0004Þ§B©¤Ý÷©Ï Hµ·­ÚQÌÿxÃ</p><p>ÅÍÿu@$ç¹Ëó´@\Ó
m·;ôÉÍ>©íárR@läu²`\x001dédÆuæícSdmEp\x0002\x0013ùä29þPYùDtädÍú9±\x0003ÞÄ\x0016Òt¥òà<
Ëe*åØÁzn'gQÕ:\x0016Û/Czª)TWå~Ø}¸[þ\x0004\x0006iÅÇ¿¿$\x001fÿ8Ûx¡À)@ÿ<\x0006#çíléô¢\x0019ú¡k9ÞìO \x000eÉBª¾ßî7à¤áÖC3\x0005T,ø\x0003Í¬gÍßÑ:»wz¬yè=A¦\x000fk22×wþ\x0017H\x0017Ú¡WÜüÍ@>iØmW«²*Xï&\x001d)å\x000c1\x0010#û\x0000âq'öäNüÓ\x000fÎÛ÷\x001dûVtã:o¡Ð\x0017î\x001aêàÆ8oâmný¦²|'Ù;ÄðªñG\x0014Ps</p><p>ñô=ç1+\x000f³º\x0002q·£&@H\x0002\x001fw2Õ\x0015Iìoó\x0019xå&r5â´B\x0012Î5½§¸Gxc4
HÏæ1\x0019ÅØ>o</p><p>??Ó"ÆÔ\x00114\x0012´tLAÉ0¤½ÇÇ||33</p><p>L4Il¶°/÷ÛÙ;ó~ù\x0008§çqqoT0\x0015PFäøñ\x0001\x001aàTf`¯Ä\x0001\x000b¦m·Øb4ÁØ+iTû4ABU\x0007\x001cTQðÀbÿ¾"h\x0000]nÈHvÔ\x0019ÍÍéÕ¼o'°IQ½ð¾üybP \x000c\x0015,V \x0011nZU\x001dE\x0015^Ý\x0004OQ6U¿mM*Ò÷ÀwoPQ
.8ÐH
ÞáTÀàßö`?C{òýoÉO-\x0007çÖ\x001c¹f\x000f¢(\x0012ág\x000c\x001a0s}T6*L\x001c\x000f>G³4ÔÖ×\x001f'\x0010ð¼jí!Á¨i:£±¯Ý¥ÏJs¼1¢ªTã-J\x000c3"\x0000t&ø}p¼Äz],loO	\x0018Yµß,CHÆ\x0006Ôx¡\x001bv%Í\x000c·)mÇÛ
E-Í£fõøO@<«0=¼û÷.lË<¸ÙQÃãülTw"n¥é 
Ò4Ä«´\x0002)§fpQKôs\x001aV8¸¥fE-ú6ì\x0004\x0016Z\x0016¼\x0017ÞìóÆG×Ñæ1Ík «Èn,ðO=\x0006Q[±[DüÅ\x001cÞ%­9Üx[ò¼ÓV¾\x0004
\x001b^)r\x001a"\x0005e\x0004e¥kp</p><p>c#";BÄj ÖN\x0003YCªB\x0019ÅÖ\x0018¹Êksa\x0004gWðS\x0002ªNMï\x0014Õ\x0013[\x0012hFåy[­jÕ\x00111ØF[ÊtäµªÁé^'yU9;s\x001dYplK°	ó¨\x000bÎS!\x000cg&qÃ²ëïw\x0007TF"f=\x001b{ì)Ê]ï\x0010K§{\x0001\x0002\x0005¿\x0015¡Ï6F|ÛÌ ærkk\x0013\x0007éíÍþÁ0II\x001e\x001f1h\x0005Î\x0017wÀxwKøÉ)\x0008¶a4,Êh/D\x0018+1<»k!Þ5­Û\x0018¡l\x0001Vñù\x001dðxÂIË\x0013+ÔîN!Õè¸éçñãy</p><p>òËz\x0000Î?ÁÖß>ÒòÁÿaø)pÆ\x000bÑ;\x001dîÉ\x000câ	N\x0000Ú\¥ý O\x0010tkª\x001ex\x0014§D\x0017øáÃ»x¥!Ãrà¥æ¢VªÁc#ª¦.ÎÄF4'è\x00019¼ÜÆFäá/ûÛ2ø\x0005¸»¹"k¹h\x001bPQ¶IM½dV-ô©\x0013 6 \x0019¬æmS´jE¿NkîMÈÎ|Löÿ¸\x0003Ê*.27~Û S±\x0015C¬Å¶\x000c\x0016"\x0015Ì¹!65õZD\x000e\x0019\x0002\x0013ÒÕx"\x0000Nù¢\x000c®\x000e+ó0yXèñ\x0013	Â
Yº¡WùðågvO\x001fH+Å\x000b\x0005#7¼\x0018ê§£%\x001a1=ÚV\x0017¢m=ü*\x0016ÌDV0³ý#ÂyÊµÛ('Übí²ãÕÎÛ!	¶ÁWßs¾¾\x0010û^uè%\x001a<^¼;©Ø}êè\x001aÇ.</p><p>'ªgæê":"ç
à¶óô3)¿2±Ô\x0012{N\x0012×dð\x0001ùÓÏ´<L]i\x0006\x0016¬<iB¦®t\x0005&¬\x001e¿XËæ6 b»ÁD¶g\x0014\x000fÄV\x0012ã2\x0007[H1ïT%*!ó;<æîwå\x0015=\x001f¨\x0013\x001fK{</p><p>ªy@ÔsÑY¹ÄÓ\x001eÊ2ç\x0002\x00086úÁ)È\x001c\x000b\x0008QËãæ\x0014R`)</p><p>Þ\x000bï\x000bf</p><p>ã\x001dd$Ö§È4\x0013\x0002\^§Yn^Êî\x0005ø¸\x0000	ÿ³Ñ0sP\x001bµwE`<ñÄ:\x00080>\x0012HK4\x001aÞa%\x0004\x001a¹z\x000f#KK»ÓC;d2<#Âòp\x0015\x000eJ[Î©Â1ë4«#ILZÜ5òÿ\x000c¡þÊ0Wg\x001aKg'«½ääy¶|V!ã ª\x0012µ{EÒf%4]zß¯¬P\x0012Ñö\QSéâGºF0\x0019\x000b$v.ºöô[4ºm\x0008c)\x000eoOô	Æ³t0b°Äð¸C§]\x0014Æ:Z"CÂKv¼N»D\Ù`öÐ\x0014\x000eÞZlD­4ø.\x001fâ\x0010`e!óòû\x0004ÝMlÊqGä¬Î¢]«Z+Òo?ì\x0010¹\x0012z¹\x0004É\x0012'*¿ÌéN¬»]\x0012dÕ!-Û>Ú\x0017;´½òeJö&õÅÉÉã± ûtøX8¨y\x001b`Uç\x0000\x0006t¼µ±KW^\x001eÜ6+j(çßÍSx8\x0004&|÷ÀûR`½\x0000vû_\x0018ºåâD\x000bÍ\x001a¡Í}Z÷\x0002üó¥I=/À¯³-WèüÅgèC+È\x0005\x001fÐ\x0011n_Q­\x0005©¬Ä°\x0000ÃírõhkDP\x0002%y}^\x0004`u!s&¾à\x0015G.\x0011ÀZ*#\x0003N(-kt§Z.(4Î^¶\x0011/%A \x001dS§NV¤Ó\x001dq\x001c{v\x0007¹^X4ú\x0000rjï	ªÂ Ë\x0010rÍýCóç\x001aÓ\x0019®qþmf¤\x001eZs|»	ç÷¯ü$|O7Éx\x0010Þj~¡Gnç"ä¶·HËxp\x000cTõÊØÔ'_K?÷8×GCÒ¤\x0018\x0010=¥µN¸û&Ü\x0003~òøÄÅ<Z\x0003âK¹^K\x000e|9C\x0019=×\x0013\x0006RÀoïíd\x0011T¶ã¦Y££s\x0005Tí\x0006uýÚDös\x001bÎËè®÷R"üËpýöI\x001cÛF:Ù®s÷V§w>j	£²ª=Â¿H%T\x0010»å\x0007e\x001a\x0001Ð\x001f1È46	«IW\x0003R¢</p><p>p\x000c\x0014\x0013ÃÉö¢ED0\x000e¸58²FGÚ¹¸¾8rºìÄáúµ5ÊÏë%P¼h\x001a(rx\x0017ò\x0014µ-
´"È¼HÎ¢ÖOdý+<Ñ¿),fL§lÉÿ§1±Z\x000eé6¢¡\x0003¤É7¥Ï\x0011h¢¾*jãU*Q\x001d¦	\x0012Ì¸>\x0010¹Ã¦uÕ»<=e[;lzPYÞ\x0015õ!¶%\x000co$e</p><p>¡óu\x0002¯VÅ4D¯õQ2d}ú\x0004DÄHy}^E¹"\x0007R ½!\x0007Gª!<º\x0007E=Ôó¢_h\x001c¿B¸Ð\x0001/©P\x00151;>|\x0017\x0013Ár\x000fÛÙ\x000b9|\x0010Néê\x0018=ìç\x0010^\x001b\x0015>\x00011Û¶æ\x0010x¸^=Nñú\x001ec1\x0013rë|$Ò%#öFQVQJ\x001eFÒÝáPñÍ¤§(y¢A1éAÜ>q9¸O\H\x0006rs×'®Oæ\x0013ï\x0001y²z\x0001=ð ^À$:1ÁAïöôû`b_\x000er.À¸^5c¦+I­âZh=\x000bö°Dù*ÙjË\x0005B¡Ù\x001câ¶q¬­-Ç°"\x001a"P8ËjyYTu\x000f²@Ä:\x0001«ä\x0012 ôì\x000fÔ/\x0013qN\x000fÖ^	\x0004Æ°Û,èùìn=a
Mz1¡ÉB(pZ´\x0017·þ'\x0016J9M¡</p><p>wÎò O`QÙÇ^w\x0010ü\x0005Ö\x0014I\x000eÙfBáðà/ñU\x0013H\x0014${WØÔ%g\x0004\x00115^aþ\x0017¾¦ð9pû¸Ô¥/´»
\x0015ÝSãýÝò3ÀÅô\x000ez\x0014\x0000Â`\x001b7àÍÎC~D×\x0019¨c|H\x0017hÖ°¸§¸ùS$?)	|yÔF²e°­ì(b\x0011Ýò4öeÓð¯\x0017$xU]iû	¯|·ÁÎ²ÛR\x001a`e~¸ó¸a£½a\x0019?í!VÔûü`g~1íF\x0018^Ê1¼´ã0aÔý|ixsc\x0007"qadßáÖ?Î70M¡ÉØ*(ÁÛÓ«d½ð¾ôÀcJî\x001b\x000e$«ÁiI:``??®+m­fR\x000b\x0008Ë/Õ0AåÁ»B%lð8QlV&¢%ÄÈ\x0019Ã;e½Yú\x001cõ(Ø¬\x000c¯+XBw2Hõ\x0018L8tÉÁõ³\x001b\x001a\x000eDs	f()çgõå_B\x0004~\x001bäñ$UÀ\x0007/ù\x0016>ÚßbEì¯ô\x0011Z¾\x001d \x000cïr\x0018(ï[;%_%\x0000 Àé\x0002
\x000eÚBoµÃ\x001a¾ôêÐßêû~ç¨ÆÛÆ\x001a\x0005\x0006Ú\x000cïVf|lOåITEH«vNýSÏ(Hó$iAÄt\x001e¥§dVÓñf\x0011|ö¦ÑÇÝj\x001ewWÒ3'\x001f `(ïÎs®W\x001fÆ]Q×´ô\x0001]¶}!\x0014ì\x0016WH"\x0003\x001du´CL3kÐ¡"\x0008ÑÀ®j«%À«xÏáHµB	/;\x0007B\x0004\x001d?ªZEBa$óÏá\x000bH\x000bøàG~\x000bNR°\x001aïÙ\x001ex¿`ÌU;\x0016öÇÃf
úQ40Õ\x000fò\x0003­7¼%AÂgWz&wºÿJC*`\x000f<T´þ\x001eL,-ÆÐUÈ\x0000\x001d\\x001bÄjsðä¥Ù½à{\x0016¼«>\x0018}å\x001e¤Ï¹³wEÕy½}i¿(H¡\x001b<Ñ¹\x0012PÞ¥grCÚêÁmK\ê¢ÊØTy2ÛR\x000fÈÙzà9Û\x0012\x0014oo"ûxF©X|g
\x0001P²\x001d\x000f\x0014W¥3Há÷\x0003(ítïjÇÛî{4îý/kBC«\x0005à«ÌäC\x0003\x0010wR«\x0013!<\x001bU	me\x000fÀÔã\x001cNTx«\x0013\x0010&}«æ¬{\x001atE¢Lì\x001b­\x000bÉ\x000c\x0014»¾"ß<¯¿ÜQús\x0019¥N\x0007H\©µ\x0015\x000e­åó{\x0013\x000fèç¼]Íí}¶4\x0008\x001aF¡J\x0000ÖòÀz\x001dUô\x000chyã£¡dG]¶\x000bHHÿÄ²\x001dhÅ·+[áÆ\x0015½:h»`\x0018j¢r!sºH¡%=ÿgÔpAÏÛÑÃR ï\x0001\x000b\x000fOáK-iM\x0014I\x0011Å»°2*\x001b²^­\x0016wÔ\x001d¦ó"ö
»</p><p>þí\x001a\x000b\x001aÌ·G~\x0014%\x0007ÙÜUºê[°¢*ø\x0010aå(\x0003ÄSÐeMßLNQ²WA¡À\x001ex\x0014Wã+¨¡Il\x001f¾õã¾)>+`ý³;ô1¤e) %9#à;B7B¹\x000fý\x0018¯ë>/4­²ß\x00172ï¨ä	M06q
\x0014lB5´Npsh\x0006õmS\x0016\x001eûà9ÁÔÉâ)ø5ïýÇ\x0016#÷y¦¨Çv\x0016Á[û\x0005\x0016lôÂ\x0004\¦ k¸ã^ØÏH\x0005\x001a}X¢)$ø\x0014Ònê¾ùâTÖP¸»\x0007Þ?O@2gñÕê\x0018=àâ;|´Ã</p><p>öxS_$UmÁçÄé³Fk¬Ko\x001fÀ¿/Cé -¶:AîMÃ Ìñ4\x0018Ì\x0016Ã7Zºî\x0003HV»:ö8\'Ñ0²tI[qFC; ÈÊQ°±!òÑG\x0007Å!2}-iÂYÓ ÌJt"\x0016¾zSYÈ^\x0015}Ç\x0010g\x0014\x0004Ðñ*;¹\x0008úÐÄ Y\x0005\x001fË{¶ã$\x0019Z÷³ð¬>\x0015jxUôr²cµáa¿äùTWI/¿\x001ag¬]ð\x0010}%¼!_ÉèÿEx\x0001¨/J,\x001d\x001bÁÉ\x000fyÌÅ\x0012>ç]`g\x001b=6\x000c\x0011«0iÖt7ð[\x001fÖx2æc«²Ûæ\x001dWÙ\x0010
\ ]R\x0017õ\x0010>+6Ò	ÔZàg8mñé¡\x000ft\x000bÑêª^XhÇð6»ñ</p><p>e÷-:Â\x001bûì\x0006c0Hè©Ç\x001cäGeERM}?Óg2ï 8\x001e3Ó@CË</p><p>þ¾ùr5±\x0003.BÛ\x0007B\x001ar¹ð\x0019	!\x0007µÌÈBõÁú7S8V4Ð­sÅ\x000bÃ|O³:Õ\x0001VI2\x000f\x000cîÂk\x001bG\x001b¹\x001cÈæa³\x0011Â½k«\x0007\\x0007ïµÆN\x001d¤Þ2%;ð}k±\x0014þ¾è>§KßÖ\x0002q~\ö LÂ%CPX1wn\x0015B«Z\x0013²þÈhú¡ÚBgeá±/æ\x001c\x001c¦Q÷\x0018\x000bqz{©&lî2\x000fÈ\x001afD-\x0011å\LÊgFR¯\x0012ÉdjÒ×}}½ù*Ôó=Ä9³uàõ1ö¬\x001e:t<¾Í¶®£\x0005Ô~ÍnW@þtµRª\x000eS½Êöã¨W­tä|\x0015±±ßôXpt\x0016¢^h,³ÄÊÔSié\x001e¹@Y,\x001drz;ÿs.Ã¹/Ä4åVì=áU4Ù\x0008
!ñjêÒmi8«\x0010\ØÀ\x0000»z®k¯\x00088\x0008*	ÿÏÓ°_T\x0015\x0016Uª¸\x000bYí§M\x0000{é¶ß£(ò½·8\x0010OÙ)_æCßW²»YwhÉÍ°\x001cê\x000f\x001a\x0013ð1³¾fKtØ2ôÇ~#á+É"*­ü\x0017\x001a[¯Êºì[çÞa\x0012ÓÖâB<)·\x0000âduD.Ó­\x000eK8Ø>CÏñ\$\x0017rõxÌ\x0019Lûíû"\x0019Çw´\x0004Ñ\x000ctn6\x001e­\x0002y¤\x001bF0Õ~v>EÜ)³\x0013·a\x0007®\x001aWÕÚä°WáF\x0016. Â\x0005bØ\x000e­»YÆnoãÜVôË\x0018ñkËëÚ÷¾Ýr\x00170&Îr{ÜÚÛÆK,íPG;Ý{Çºï7$ü%¾OcÅ-(ßZÓLoÄÄä¥ÀÑ§1Ñ%(ha\x0006->,f~®sÄ½ÜÒSTÐt*\x0006aSûX@F"\x0014:æ©EBaË\x0003\x001a$,)ã ©®½ÂX¾\x0002XÅysÖÁ[Ô%K³­\x0010oý(ó]ÓÉ\x001c{ÅÇ\x0008\x001cÅá§ºì
\x001fO:	vOÝ­©L»ðT6K1éh·ÅU½\x0005\x000f"Û½</p><p>_\x0004'\x0005kvqÄÚbIà ü9\x0015
KÙS§NxÀsÒdQ¤©\x0018ò\x001bj¹ZYæ¿ã«\x0007¹ËÔZwm'Ï¸0ã©\x0008SÄä¾ÂAu¤©D^Gêß©xòV0J¸OÕ$ÝÚJþÃ$S1£Y\x001aÒ=ÒÚºÊµ¨ü¾\x001e\x001a\x00023\x0007·²\x000fØO»ýè\x0007Ø|ÀÎT©èFÉÇw3ÿî~ñ¸ÃO:/&LÙgëÒGî\x0016è6Æí
deL¡ ×ã`àÑ¿áWÒÁ}\x0007\x0001lá\x001bA\x0016hë\x0011öý\x0007\x000e³Ä</p><p>"\x0018Õ`ç´ÞQ\x0005ê´ï· äðÑkDQñìÑ«]	û÷&"Qøóüî âïeÌöIÉê"1ø$w»_¦\x0015Ï¯kÑ]ñ=¯¸¶\x0016Ö\x0012\x0004ÃãUö²?0rÇ\x00151</p><p>'¯Å"AÂz¸	¥rÛÙ°<òrÕÖnü\x0018®N\x000b9r×_ËúÐ¢^]:d·g.¨\x001e54^\x0003\x001f\x0015mf,®ÇDÑ^³~ë\x0019¦à]L^%\x001b\x0017oÖÔÚÁ\x0006ådÐ.{&Á\x000f\x0000\x001fÉ¿`¡aÁ\x0012+P¼hê.\x0003µ\x001fS5¼j\x000fIhÉ\x0001ç»[N \x0012ë\x001e(ºc*\x0003³#wtLîèd¦Ù[T\x0010sÓ3éMìd|ÎÂÂ}i©ÞZq¨ð´\x0015¢kêÿ\x0001tjn</p><p>endstream
endobj
46 0 obj
<</Contents 47 0 R/CropBox[0 0 595.32 841.92]/Group<</CS/DeviceRGB/S/Transparency/Type/Group>>/MediaBox[0 0 595.32 841.92]/Parent 6132 0 R/Resources<</ExtGState<</GS7 6155 0 R/GS8 6156 0 R>>/Font<</F1 6159 0 R/F10 326 0 R/F17 345 0 R/F5 300 0 R/F6 302 0 R/F7 321 0 R/F8 306 0 R/F9 318 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/StructParents 96/Tabs/S/Type/Page>>
endobj
47 0 obj
<</Filter/FlateDecode/Length 8861>>stream</p><p>xÍ=Ëã6÷èÐm¤.6\x001e\x0004HÌtTD]åñÆÌnÏ¸7ö`û V±ÊPIÕ\x0012ÕaÓ^|÷Ïøh}Ã\\x0016	 EkZdMybº(\x0010DâÈ\x00172\x0013¯ßnëåÍ|QOÞ¼yý¶®ç\x001fªëÉ·¯ßoî¿ýþ§ûêõ»ùír=¯õëoö\x001fj(ús5¿®¶çç/¿||ùe\x000cþ+ËOØD\x0019I1)s\x00191ÙV/_üïLÖ/_\¼ùâõ\x0015ÌèÉû/ 2ð	/ò,çÂ°,Ï'ïïlµ¯¾)&·;Û2VØÞbQ\x0019\x0015ýý«/¾þ}v¦¦oggrúîÝLNÿÛþ\x0016Ó÷³ï'ïÿóåK\x000bïo/_Þ?ÁuV\x0014qÿnÅ½\x000c\x000f¸Ìü}À_5;Ëi\x001e¾\x0019Û\x00119ý/\x0005ãfð^Ùå³á\x0001\x0017Y¡~\x001f0c³3Î§\x0006ÿE\x0014á¯an¾\x001eºC[Ä}ÄL|\x0005hy\x0005k4îÊHÍ²Âü\x001bVFê<ãX¿\x000e\x000e¸\x0010äÿ\x0011\x0017*Ó¿»ô\x0013bÉÇäýÂ¢¥,\x0007ï\x0011ÐÿáÛ\x000f´ø×/îDÎt¦\x001f1ú\x000e]\þõÉë\x0004ß»ØÔõæ.Íú®6úóY\x001fç\x0019Ë;4­Ì¤äö»Ò\x0001»?ÈºõÀ+EÆ\x0014¼S9X\x001f<$½ð\x0010=°Ø¢ÃÃ6oó'\x001c«1\x0019OÂ\x001b~-%\x0013\x001f\x001fbýäõ;À÷¿~ñõ\x00136\x001c\x0012+Øù¤°ìGé£|[ðïO\x001a»ê\x0001YèLI§­­îgV$øÆ¶¬mãÅù°ÏFåP&ÏÏ¤Rsü{Ao|
#Î¹¿\x001cËò¸ÆçÂ¿ePÃ·©zÚ¸°µJu®¢6Êò³¸M LñP_Íþ\x00176qÉøå-ÉÏµýÉåùà»¦©\x001c\x0002Z)R\x0014)x~7S\x0016}`.¦umÅ5÷ãP\x001fàËé\x001d\x0008ró%HqëY>­g\L«õ¾\x001a~\x0006lOw$Obçîç[|âÓUeËµ/¯«\x001fíp¨;è°+ßÍôt¿°_@#Õ3j\x000eÊðpCEzújf>{7
3\x000b¸ä\x001a&£;\x000b«Ã­]£%uÞþ³[\x001d
Â>½q31ÝÚÚÊÎ\x001d\x0014®beWØ®%ÔÃ/¶v*x3³O7{Ð\x001cFà\x0015,ÏI</p><p>;ÈUmï·v\x001a:Ö\x001e×à]ÒEÆþ.\x0001«æºDN0\x001bV\x0016<5\x001bk»\x0018Â¨77\x0015,IýÊ­PÀY÷{Uá¤e¬çõ¾vo`í\x000fëÃv¾Ét×{àF©ÄÀxQäê\x0011\x0003ÓG\x0012ªÖ%m¹\x000bº\x001bxr\x0006SªhJóSUÁã)Í-Y5ejJ_Â¼0YÜ¦u\x0005Ø|=Ç¢õ`Ó_a9\x0007qV:êô~½\x0004Åýf³Ez¡=ÑÓj;ü\x0004r^dL$ºÒu^òéö·@Æ<­Ââj5¯ï\x0017p!è×rxpV¥\x0005c[/¸O³[¹aÏ÷°J?\x0012ß\x0002|¹q\x000c«Ve¸­¥	Ãw\\x0018å2Ññz7+\x000bñÒq«\x0015þ°,Éî\x000c\x0003Ûü4G|«ñÝ\x001e®Æ~í</p><p>ü²ß\x0001*\x0010ë\x001a^ÐÍí\x0006N¡!J² \x000f¤*ñ'+¯ZB§a^Õ±j+>2$Öð\x0005?7ô!W$>\x0007ÀË¬(\x0016ò~ÿaµü¸·LÃ\x000b</p><p>÷\x0007xDAªáÎøôÑ.ÐÞîÑjbyÒ®ÏÊ)0£k»Þ§	}ë&Ì¤Lt»%è£ÊKTÀs\x001e¯×5\x0018.\x001fT)/iy¢\x0006¬>#Ý[üy\x0019Âê	*Ç«ß\x000c\x0008\x000eUTåz'½cã)\x0014\x0018ÞÕ`zúÃe@P?¾Hó\x001aÇÛ\x0019çÑ</p><p>nYý\x0003<^±áy®PY©S¨\x0000Ï\x000e5¹5NàäGÆ	>¸qB\x001b«cã\x0018Í8\x00009¼èà\x0013	xo½\x0004"Øè\x000eÌh¿®\x001ckD^¹©+÷\x0002\x0005c^8*Wm?Áklg\x0001\x0012cN×þ\x001b {J\x0005¶\x0006Tqå4\x0016äÛ®9b×øMÿox¥Y\x0016â#Í=ë\x0005h2\x0004¸ÞìqðsË¹÷Ã¯¼,%W{\x0013õad}ß\x001eF\x0018¹±Àujä·Ë;;f\\x000eÊé7\x0007ývÆ­<]&wðbÛÆòÊÅÒjg\x0016?* ×3nq\x0014þyBE¡o°öccë=\x000cukÿÙmÖë</p><p>e;VL\x0001ù­¦º±B«Eå\x0016ØÁWç"+Eª#è+¹ÕÙð~AúÂÊò\/­\x0008"Ñð2P\x001arþc7yV&áý¬©\x0011èC/3ÒPûðJ0±$À¿XÅ4\x0016Ðû\x0016õzE\x001annp\x001fà\x000eX\x001eè
í=>Ë)ì\x0003\x0010\x000cÇXl[¨oÿXûD?,\x0019\x0008ô\x0003\x001akè\x0007­·Ëùç\x0004Ì¼òuíºt½µEKØõ+W\x000b9Öú\x0019\x001a]&ÖGj`¾ëÅò\x001eHÉ«ÓniJ9;­y\x00122\x0014}/ò'zö\x0006¥må\x0015\x000båå|æu$Ås÷S\x000f8pà¥ÿ¹\x0002å*Ù6</p><p>¯CÎ\x0007iß}g\x0006Õt\x0000ÎBL\x0019\x001dv\x001c\x0003ò\x001fø¾P»E«/N{)³\x0017®£a^¸aÊ\x0016\x0018Õjãt\x001b§ø\x0016ÝOMØ\x000fùeÿ\M\x0007±Û5ÐºÚSêz¦ý¹R4Ó¬Õ L«&±pý1E\x000b,</p><p>\x0018,®s"ê\x001fÇÉ*qI»sÀ@i\x000bKDÚ×Sªô}hëw\x0002ì=B[\x0018#\x000c\x000e\x0006c}ë~^¸IVtzÇ3z\´ÐIÔruWÝý½`N'ðËãC\x0003f\x0016NÊnÑEpo l9ÛM<\x0001lÚÐÍ+Cê\x0008XîpÚFÆ;¹A"&Ð\x00106TPÛI=Ç\x0016¢
ÒtÚè!\x0006Î.­A±wÓB\x0000»Ó×7\x001dö[\x001em6ÿ}w²T4\x0019®£xâé\x000e_=\x0016Î9Â&:Åì\Oý\x000fñ¡¢ËO³Â1LËWKË=U\x0014ë9ðñ}MÚ-\x0001Æ\x0003\x001c\x0006\x000fI¶ý</p><p>Ù(J¾X§ZccÀ¼¡*UûmKP\x001eØ-p\l\x0008kí\x0003#Ç*;dh\x0002ÕÒqê5\x0019\x0019\x001aöÅ×`\x0007%«®ýõ/|xE'àÞÀÍzaÁÛéØÉ¹ú\x0011ü]]­\x0017 ^8ö,Àcõ\x001eÏÂqh70xWåzï'²£P<í)ìC$Thð8ëaý1wºËî.bÞmÉªg=¦C¬\x00188dÞ") \x0006ÄÛ¼\x001e7ó\x0005RÑch\x001eÉ\x001a6/{À:x¼.</p><p>\x0014{çmea²<	ï\x000cEÃ|ú?(\x0012{³L)ð92þ\x001b±\x0015\x000c@ùö\x001f¥ÝÇí-ª¯xfå+¬æî5ÊA×ßl¯vÈ?ÛÞàaGa@ñ\x0017h=\x0016\x0007L\x001ek?8iè!@F½;iÊ¸Ùþ\x001fngdm»óêHÎ§ßM+<\x0001-Ý\x0018¡TLoàx\x0000ªâ;ã5e2ÙöZ§}ö÷\x001c¦C ¨ô\x001eÔ</p><p>-lÂ{<=^\x001fè\l\x000bT|Xè¤BÇ
¸n /\x0003tO®¨Á|'\x000fÅá\x001az¶ðÇ£ëoêºz¾ßÒà¡Þ\x000f\x001b«ae8´ûn\x0006³ð,VY2Ë5®áx-27\x0002\x0007Óy§\x0001\x0002gú\x0004§R\x000bX$åµç\x001dþâ±Â|z7B\x0007y®3õ`\x0007\x0017\x0016ê}µ¢3xNûBIÏ3ñ¹Ë5\x0007?dS,\x0013*ÑKÒ\x0014\x0006W¹*Á?.\x0005³¥1ç$Í\x0001Z\x0011¿`\x001e\x000bíÄ\x001d+"\x001aeØ³¼-ÚÒ×ä*\x0018 ;û=j)h\x0013þlÎµ{átÏH±ð2Ó\x0013\x0002Âi\x0018\x0000!Ö\x001ePçÔ$°\x0017\x0011F£Ïs\x0011´ç¦ª2ÏÔÃæ\x0014?}9Ù[6Ü\x0000</p><p>µb#W¬ûE^wµæ\x0005·(PxAK\x0005¸a55-\x0001¼¦t,])·@\x0017Ø2oéÃEüE\x0010÷T\x0007~Û´ÓØoëÃXsÔZPÂ½Øh;¥\x0013Ú¤,TW),Î\x001b¥91\x0010Z\x000cgqj¬_2lÃf\x0012\x000bæÍ(g^Ù=6\x0007Ä\x0013òewÜd\x001bö¬\x0014NU°Lõ¸P\x000cH¤{ó#+é>Âa\x0000`\x0019OÀûehBÎ\x000c»¨B\x001eÙ²Úþ\x0006|\x0004\x00175Û'XÁÀÝ \x0001\x000fèÁ!Ja	q\x0002à\x0016$a\x0010­@[ÄQÈÅÇþÌG9îapÜ3Î÷\x001f÷HÐW\x0013\x0000\x001bÁ°`á¸çtÞSF§-`ÄÁ]%\x001e¾hPæÞtSáiqÔ0|\x0006×5q¯>Î²_Â\x000fÞ¶YÁrX\x00028':AöMK^28]}ºuÈ­LÀt</p><p> </p><p>Ä\x000b/Ã4z÷ùþ\x0003\x0013~û·8\x0012hZ\x0006D4rý¾ÍñA{¢ÔÁø\x0008S¢Õ\x0018úLkß\x001bÂÝP÷ðq_ÁEõÊ¾ÔÓý:Ø0±{«°ªò\x0006^ìcl\þ®±
°ª\x0008À¨ÉÈgÙ\x001e¸ô\x0003¦RîÜ\x0017ÏeýÀ ëÌömßñî\x0003\x001e\x000e;w¶û\x0011w+øâüì?Á8Á01¼\x000eiì\x001eU©Þ¡´\x001aê`\x001f@\x0010Îùæ£À6Y!S=1lªW\x000fµAð\x0004À>{ªF]\x0004
®\x0002Ö\x000cM\x000eyLtþ\x0013}Ý\x0008½® \x0008ÇQM¡Q¸§<¨U£xFuc0;:`£N´àÏ½Þ\x0011\x000eß¶ZqÊ¥\x0017ÚM\x0011\x0001ó\x001aZt</p><p>«»*ø\x0003îQÒè\x0005×0ê0Z\x0013)ô-\x001díy)\x0008¢\x0004×¹£È¶àÈ\x0011ùq(Ö<k\x001ex	ý´%	Oôá\x000eZàPÆ±\x0016$W\x0002í:1ÂK&Ã\x000bT¹$\x001e±"Ô¬\x0011¶îl¨ÚÝ#{·üèÚu]W'F}õû/æ4©þâ0©!KE/Àjþi<}2Õì\x0007¨!Ú4é!âCçÓù\x0012,­\x000eÃaÅ\x0001k®(</p><p>\x0011pÚûM)3ÝUP\x001f$åå¢¢6bìw­¯\x0012÷í³°yñ<3¦\x001c$\x001bó£x´è\x000f\x0010\x001b[%>çÎû5%2%\x00131\x0002j<vº¡#ô\x0012[²\x00189®\x0010\x0019ÐÒzl</p><p>\x000cv¨ð\x0018L\x0017ÁR%=\x0014b\x0012Z\x00077!Õ@-ð@Tû\x000fàñÁd?PMú\x0019õ°\x001b¸ÿÎþG«ñùp</p><p>Ý°Y®«"ém[ÒI\x0001_ÔàÑ\x0008%ãø~D\x001a#Â± õÂÃøX+</p><p>\x0002Ýúe\x0000ÙÜJZ\x000f=Ö¿õD^Á#/r)G#/äh\x0017	£E^$àý\x0005õ \x0017wo\x0005áÍC\Hº\x001dg¼½jÐ`K\x0000L\x0019nòÒ[,¼ø\x0015,3¢\x000fÕú5}þ®«ÙYá&²ÃÙlÉ¯.<Ö>.*Ð?ëù\x00124U\x0002o¦y}¸ÝÀGè;ëéºlÙ¤Ñ7i]­°\x0018éR?\x001dvæ¥x\x0000Þ/0]Q\x000b;uúðlb²ó¢\x0004§«';OÀ\x001bï0>\x0001Ðï\x0013#û\x0000\x000b\x0004lÕ5¥\x000f÷C0ñ(\x0013ÜwJÏ¹Êx\x0002Ü\x001bÆ¯\\x001b¢ð
\x001cH/ÃI_\x001f\x001c}½lõÖì¹Ì>$ã©V]ç\x0003'¢(æÌÄ:\x00077ï>Ê£<üÇ\x001d
÷N=s&¶oø8</p><p>Ò6ìèOpÉmÄÁN\x0001H¡Î_×y\x0002Ä\x0012·­¶\x000eÝ\x0017Æ¹Nöÿbp\x000f²î)Â¤\x00112lY-[\x0008C$ôzO"fö\x000f\x0008ö[\x0002GZçfå,\x0013Üh ®ÌÙ&6Ûz¾öéyäöí\x0018Or-e\x0012½¶=Ðª\x0018b</p><p>û\x0003Õ³ö1u°J	î\x0002\x001cÚÙ\x0002\x001c*y_Çg\x000cÀ×\x0014wÐØñ\x0004m\x0017Á:ÁâìÈã\¸¸Æ:5¦qX¥¯¬\M1÷#jzçö½lT@¿#Ü÷\x0012vÖ\x0015¤9ÅÑ~?½\x001f~ÿ¥O5~¥3X%ày·C;+$	î\x00138á\x000f5
.§«\x0015½×MÅwó-ø%6©\9î6Áä3ó Í\x0015L¥GÎãûù¶® «QF*ßº®H\x0018gô5Þ×Ê´!÷XTá»)´aÛB\x000f_35þ¢'ÅÙ9GÞðµâP9#×Ü\x001fæ &ßÉ­q+jnmVÂBb~F\x0008¶E"	o¾ÙA\x001c"×i\x0016N\x000c îµ
*0</p><p>&z\x0012\x0012\x0019ç1½¾\x0015ÓÃ8¹¿dY\x000fËÓ-aàO÷Ëw³WnÝm Øt\x0005þã>ë-\x0007tþ\x0019~\x0016pª:B¦
­!åE¢¿Ã\x000b\x001e9\x001cû§Àq\x0018£äe4E{\x0016Éú&5\x001c+\x001cÓ»&å \x0012¼\x000f3çjÎEa%¤\x0002¤#.
Ñ\x001f\x0014<A´ï·\x001b§Ã\x0007zoJò)§|<Ë\x001a	Ø*äáùmGí#d­ÃÌ¾\x001a%K^7FV>\x0003%©¬ÆÈ «@ÐN@¤\x0008\x0012(Ø\x000c¾Kr\x0003yClr¥ÀÌ\x001d	x\x0018\x0012C\x0004-ð4¾^×\x0011´¨ü¡©å\x00126ª%s°ïcq$ï\x001e7÷\x000e[\x0003¢)Ô\x0011ù@÷´g\x0013b\x000b\x0001Ë~ä[ØKØ$k¦Cr½´\x0015N$\x0019	x×w>¤f\x001dÒôPþËí¼\x000eÜMÔ¦û\x001a÷m»´Ñ§¢R\x0012¶M#kë¤ìñÙþ¬Â\x001d¢ïX¥åÐzj\x0002ù>ÙSgÜ¤\x0016eMoe]£Rð|®YÖr3ß\x0008<Ë\x00002¼¤KV§£Õ\x0012=aÖC\x0017õÞ5m¶Òt¥2&7ÅàVL@~þÄ '7</p><p>\x0016U§à
F<\x000fb`ÑA\x001dÛ®Ý~çÜíðÍ?}ÚT»VVF*¨<N­c\x0011ç#PºýðÆ[]B¦âD_\x001d\x0019ùÎkÐA^~7£ÇV\x0010£\x0018C{,Y¤z7´Âü¤	»
º!IÑñÉ¬CÔÜY³w?Rçe²\x000c1âÅáº\x0002êÞ89	:M\x001b|´~ï2½½ðò¬LÂÃ¤Rvn?ßõÐí+Mé\x001e3\x001aìR!ÉFÍ\x0005â©÷Tf\æi[\x0004FâùúçÛRø¬Ì\x001cSjúu¤\x0005A[Ë êlB\x0016R²Q\x0004³Å\x0006ó\x0018y³Xéa£\x0008ü«K`ßNxnëm«UAý(ß®­ñ+õ,Øéìó­öîÏ\x0014Y:Ã[#D½ô¼­\x0014(\x0006Ä£Ò®jQPÅðèe|\¸\x0011ÐYð,( Ûp¥Ns\x0010\x001e\x0016K\x0006÷<Ùk\x0002Þx'®	ïæÖN(ný\x0000\x0001	HWÑ'4v\x001a\x0005úSL
1îHÍÿà\x001dß£Ì(\x0016}W.MÕFr¨ÿ¼¢³öÔ§Åt±òI\x0013@À×Ü¶S6\x0011ú!Þ\x0019zºØ\x0002\x0010`</p><p>¹®nÒ\x0005\x0014d\x000c\x001bÁy\x0001eNÌä\x0018\x000eR4\x0001ÐÀ0µ\x0003Ñ;Anþ¤	¯\x0001Öç@\x001eO
 ë
ÛaE&ËTwa)
­¦%¸d\x0011ÞÇ³ñ}\x0001e-çÁÝÓ¢]'<r,ì@t\x001ea#Rã=¿\x0013ï¹\»ðÎ\x0016°:liÅ¥å®ÞÒ¥\x001cÝ­§¦·\x0007ñÑ>Þ!Õ*Üq¡¹\x001dùØÆÀ\x0002 §j\x0002þÔû\x000f]2xç´ß9\x0001\x000c\x001dv\x0013t\x001aª' rµä·I5s½@ÛÛ}µG²1<</p><p>YnaÊÔlá[XdÅk»5 í©
>Ò¿õx5ÊÏój,\x001f@ö\B°ÑñY9/Ã\x0001uîr"DÉÈ1\x0016\x0004Så\-\x001e7î!pLN¹â\x00187û<\x000cQÄyNìîT=*¼o.\x0014>d^bäâ{ë	±{g\x0016YÀß\x001bEeGil»Ã{ ®£ñøQ7Ñô9\x000eý¾\x000c®Ñ=¾å\x001cò7Æõ\x000c±¼b>\x0013\x001f\x001dèÇï</p><p>£?zÇN]2*Ntþ.&ÓA\x0017Q&óæ<|\x00101ûöU\x001cäã»®½s4Å\x000b5áB\x0004·\x001bx\x0014Ð\x000b3Úæº\x0000ÿN\x0006J\x0011 çÍüË\x001bï\x0001\x001f|)\x000c¦\x001c[öw\x0013\x0010|n«\x0019Pq8C\x0005\x0016¬¯&wD¡Qùøm[M®éx±»¥>U¤ºO÷[Ê4u</p><p>\x0001éI³©Ô8lW ¬U9îW;:\x00032Ñ ÜB¨eôõJ</p><p>
§D¯:³\x0010¢´]B\x001bH,\x000cëmÑ#,ù\x0011=Ë\x0007÷ÒVófÇ\x0012Ë·E>v\x0002äh÷õÃ\x0018]Þ×$8Í}\x0010½|h¥üà±àiWñ5É]eÔ¶»\x001c£¹#ÅS)</p><p>:qÄÙy\x001eQ\x0016×ñ¯ì³úeØõ\x001báÊ>#\x0001Ï_ÙÇKº2ÇLï·\x0018w}MCîÞ°Æã%òrÙÞú\v©\x001d\x001cr Dc²²
Þ¶s¿B«9f´§;ãù$2ÈÞÆ!èR²gáÒ'\x000ct\x000e=i£"ÇÐ¶û^ì°ÆU\x000b¿ÆQßg+]séÛ"\x001f×2Ú3\x0017,òêóû\x0004FªñnwyûTäýuÛÀÀÏ\x001c;ërÝ\x0005÷Þh´Ñ\x0000\x0012ûPÈåÕ\x0005NøM\x001cÕÔ>ÖâÌ<\x001b»3Úq;¦áøëß¸\x0005ñ¤Ç÷æ²3\x0008Yhü¿+éfúâO³#r\x0001Ûúh4­¯e!!\x001d2¤F\x0006ß^\x0018#¤'6=BÌ¿	Í-Ká}÷U\x0005çÐsiÊ\x0006mÔ\x0006Mû°Ðå\x0016üI»éÑ\x000cR©ã
o½ñëë\x0004}×l\x001cÞïVnÚ2j\x0010Py|#léÄ÷ÖvBÞ\x001bq\x001f\x001f\x0006\x0018\x0018J§Éd\x0013C³j)rðMH¯gÙÚQÕ^0ç~;1L\Æén¯p­§ãsLiul¦\x0013Ã\x001aÃ1ðWKÀ³\x001cëæÒ\x0006\x0010!³Ñª¹µÌÙøX÷A×
!zå=V1[h\x0001¹9£kÎ05­U\x0004PiYZ\x0015çææ@Ú</p><p>^ä»ðjR¡½\x0007otÛ¬\x0017õ\x0012r6ceøV\À ý&ýë¶S\x000bÛ*;¹\x0001Ó¼\x0004×^\x001eK\x000eþ\x0006|\x0019÷;\x001bïRª\x0006,Ë|;ÙUþÈg2¿é÷u1¡Ss7FZ\x000ea­	x\x001c\x0001^\x0001I4\x0007\x001e_ÁI}f\x001e@hià?ê4Ërûf{Û<ÿÝ\x0011H]D¼úÔ5­ì¤=®\x0003#àHcÐZ\x000bzd\ÞìO¼µ7¬H\x000c\x0012XWä$sÏcÄj©"A\x0000\x0019ê[/4ø(Y'Fºl0íÊV	£Q\x001fbyÛÇ¤X©Å'FøeÑ×ûn$JyÞ\x0013ßãyiK%uP\x0008vBnln>1fÙÑY0°DB£180ätí\x0005^m"'³ºåÅæe&S#}5IÂ\x001d\x0012\x0019\x000e\x000e;+Vnó"µQáìBñ\x001c'y±\x001cw©\x0002E¬þ¡0q\x0007¬þ\x0003p}\x0012\x0013°tx¶­X>àCaic\x0012Ü\x0008.\x0014¶(OÂ\x001b>d
RlØ/RÓ¹=éië\x0003ü\x0010Ì}^ùû\x001f'Q</p><p>eÎ}á_(ÎÃv/½'Ïð^\x000c6bªS\x0014ò\x00166-ÑÂF÷¬Aébx{¡]CÍS½yØ¢ç}£m7ç77Kr;'ÉºÛºn\ömãM("d"ëøAá\x0001Ézw\x0008²<Öú5jVô®{ÉÃ«1N\x0019ÄýsEâ\x0015ôü½V½ë\x0013Í<ús½é7ø4ö3\x00120Z·Ét\x0004&ø¶ÏrwT»c7</p><p>"Uë|Rú(ß\x0010+ß\x001c!ÂëX¦</p><p>ýóÆ\x001bÌ´ä\x0013\x0002 09R0°°[¶äf('|£®)Ûêývé/!©ðuå®KªÏ¨.sÃtYO}ñý|G®îöC²:T.LU¢¡­\x0002´BúËbÖ»znÿç5ó
\x001eã=©ßËC¨H){Ô&ú=²ç±4Ü\©æoXóÇMI\x0001{B\x001a/\x0017\x001a\x001eGç£`\x00077%ú\x00077F°\x0005¤ðþ4\x0002<Y\x0011|àñySÀë·Ûzy3_Ô`\x0010x[×óÅ\x000fÕõäÛ×\x0017ºÞÜ}ÿúýO÷ÕëwóÛåz^/7ë×ßì?ÔPtµÙÔÕ¶k;xllMÒvÀüø6(RCJ</p><p>®<ò¿h^\x0000jÀ\x0016%À\x0013Áéor¬üè½\x0003LµóB\x0003ËãVUaÂª	@\x001b÷</p><p>\¿GO}lóÑnÝB¨SïR(Ó³\x0014\x0016¤¬¹9qLÛv#3Y\x0002Ô\x0002.
\x0018z\x001b>;Q\x0002ÖÛAa\x0015\x001c]\x0013°¬x©¦ËÅ</p><p>|ù¼45-¬ÜÅ)\x0019[\x0001\x00179	qöW9=@Éb[õÕ½Xÿ\x000c\x000cNÁW§Æa¼l«¥ºªÜ\x0005¢Ú\x000b\x000bdÒËR\x000e\x000b¶@W'Á<^rHkËû_éæ\x0006=],A¨ÆÂSý\x001aMG÷PH\x001e5ìÏ§5Å£hM^f}.Ô¨Só$ô\x001c\x000fîÕÓOjza½A3¢»\x000f\x0019­Þó\x000eñ.Ý²Qb/<á\x0006($­\x0003PY47GÑåDÁ3RÅÅWeV8ÙýÊÉn!m¸ûÖes=óÙRÌæ.Ëà8]õ\x0000ô\x001ed:Å{Ð\x0012[Ë0\x001boK¼vËCª®G±+j $ /Ü=È8\x0017%ýlÎ¡\x0007¦Ä§÷·qµ\x0001¹ÉÐÿÐo_Ù¥Ä
Ãa$õºôºÎãÊ]ßM£¤£%ùäCèOmüÿ\x0018õH\ÿü]^>jËòAâäú·¹ÔÃÓõmN#ì\x0005¢°Yh_F[\x000eÈ_</p><p>\x0016.</p><p>Sþj:ÕÛÊ\x0011®R¹û,Â9ÜhÍbÎ'¯ÁÃæB2ØçÁÕ£¹r:Ü¦@ò\x0008ª\x0007¦ëÚD¼Í®Zû Þùþ9Þ\x0014GCù²;fÕP&·+£\x0004Ñ¡waßåä\x0005îg\x001aîÜæm¢à§ò,ÞáðÚUà\x0011\x00058ZxéT:zg"Àîê³ð;\x0000G\x001dyZ7\x0014ã¸GäÀh0´\x0000<'8ú\x0010n<´ª·`ùúoV\x001bÚÚ\x0004Á!¡úha,h:ÅÚ¢v	²¶B	}PÁ\x0010S&º6°ÍË4(aGV\x0016Á\6èBtgF¸7%øÕ[\x000eø¸\x0004Ç¶\x000c5\x0017CHÐcàÅ¶¢´\x001d9}ÏM\x0003eÞ²Å¹¿]ÞadïY\x001e¥<ù¨¨#\x0007\x0017%8Á'æcXñ_Ò-\x0001k-\x0001Æígv\x0002µÿMC×\x0005æû<\x0019´áKWÕn±p]§/\x0014ßcn>\6</p><p>þ§L\x001c|zTó,­FÝÆ(©\x0019Zý\x001a\x0003.ìÓ V^EÛ	z\x0007§:'\\x001eÕÏ{ý¶Æ\x001dÔcÜl3 ÇCý]í¨O$Ä\x0005\x0001Ðó5wÛòâå9É­\x0007³øjO\x001dS~}\x001eÓÄ®HH×\x000cÅä±Ãþ½é¼",ú ¤³áùçôW$¯\x0007êLW 62¼¦G»\x0010B}Õñyñ\x0000#ÙfÇaðt­(N\x000fxH·\x000bÇµ\x0019-&º%~È´"Ö;~wm{Q%TÎYs/</Í\x0007eT¹À»ôz1z8Ý<JfgúøZ¿Xf?5×Q¿Ì\x000e>)ùð\x0001÷GB;æúMà\x0008\x0018ö<ÍÈ¬Ò'Y\x0012Ø\x0017p_ÓÝ]§ZúcEgdþð¶¶?ëçø~ý<AÊéê\x000fÀ²çÀ 0\x0001é2\x0008aúËê(h\x0011k\x0012[</p><p>ïVóÐÒfìÁ>®Föb</p><p>útÐÙ\x0010ÂÀqb6NN\x0005Ð\x0001&\x0005äùI\x0000Ã\x0010\x0019ýËÖ\x001cíqA·áÅaæ\x001c¡ìß»\x000ftOO¬éBõËhÒï¡Ö\x0006¼\x0001h(s\x000f¾Â\x0002hóf³\x0005\x0013ã\x001d\x001dþ\x0000Åf73ô-®ý°ssÌ²\x001b@\x0015 Äo3×i\x0018ä+D¿U\x0018/a(]¡Ù *MÝ½ÿ\x0008¿&õÚaß<#\x0006\x001d#Fâùê±FáñþÛíÑì\x001cxq·(}JTéïàÒ\x0010xY/7\x0014¿o?âÓÛ->8®ØÖ7±\x001a&8gæ\x0018Ð.øt,ÃæFDX 8\x0016ZÀ\x0003\x0012+~ÜW ¼áKé¶>Ö{G9\x000bÜÞ\x000fmú~ÀwÕ>^B÷ñÍòÇ\x0003>2\x0017Úá1=|\x0001nõsôk½«\x0000WVÑÇ8ìË\x0006?¨[Êf¤a\x0003¸88¼±.Z(Gð\x0007\x001eß¨q\x001c¡È³$Ö¢¥D;ôqÊ\x000b \x0012ûOg	\x0010­¸\Üz</p><p>	p"Â\x001a\x0019_};3®\x0000fíæÆe2wë\x0002>¼¼Û\;ºYB\@ÔPXÎ"\x00106zñq¿ùïWQ[\x0018á\x0018Ð\x0016[ZW3ÕÔl\x001c0Õ°«\x0004\x0010)Ù®\x0001\x000e£ö\x0008VôG8ÁÃ\x000cÐ¬À¿·ßPT¹DûUMU\x0007¦\x0002ÓO'Vo`TD*\x0005ËïíÎ,\x0013
ðÎ28ÝDÄv>ä¦³°û¥ÛÆSi</p><p>Ñ\x0017ï)ó0ú\x0017p¿P?Ë\x0001L¨÷È!\x001a1æ®Z;\ \x0014Àáá?È¡\x0016¨6ëéUuú=4Ý.óÜu Ñåç+\x0015ý°Èí\x000fSå\x0018l\x0001·?n¨âü?¤NNñ</p><p>endstream
endobj
48 0 obj
<</Contents 49 0 R/CropBox[0 0 595.32 841.92]/Group<</CS/DeviceRGB/S/Transparency/Type/Group>>/MediaBox[0 0 595.32 841.92]/Parent 6132 0 R/Resources<</ExtGState<</GS7 6155 0 R/GS8 6156 0 R>>/Font<</F1 6159 0 R/F10 326 0 R/F17 345 0 R/F5 300 0 R/F6 302 0 R/F7 321 0 R/F8 306 0 R/F9 318 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/StructParents 97/Tabs/S/Type/Page>>
endobj
49 0 obj
<</Filter/FlateDecode/Length 8672>>stream</p><p>xÍ]Ír\x001c7¾+BïÐÇî
u	¿õ3¡`\x0004)QölfµcÅîÁClÉím±9Í¦Â~¦½ì}^ÆGsbL\x0014ª</p><p> hu,GÈ$«PHüf~ÈL<=Ý\x001f6ïV\x0017Ù³gOO\x000fÕÅëËÙ÷Oßì®ÿþôÍ/×ë§¯Wï7W«Ãfwõô»Û·\x0007xôízu¹ÞÌÎ^<ýãñ#Q\x0008ø¯®+9\x00133ÛØB«YmdÑ¨Ù~ýøÑÿÛìêñ£³7\x001f=})gMÑ³7ï\x001e?Âb&g²2³ª\x00111³7\x001f\±o¾«fïo\ÍX`ÿ\x001e\x001fÕÑ£¿}óøÑ÷ó¿-v~ºXêùë×\x000b=ÿ\x000f÷·¿Yü}öæß\x001f?:wôþóñ£ãÛ§dYTUÜ¾¶Yqkfã\x0013®Fð¿Y,\x001fï\x0016ËÆ5DÏÿ</p><p>CóJÈfôV¹éÒ\x000f\x0018åø«¢²&,Äb)å¼Áÿã\x0012Oalþ<v´t\x000b÷\x0001#ñ
,Ë0GÓÎ.EQ5ÀÌèÒ\x0014ò\x00013ójtÂ*´ü#z\Ù¢üäÔÏc\x001f³7\x0017nYêzôV4ªPå\x001fÑ}÷A©~_÷ÕØ0¢,Ê\x0007ô¾Çgç¯ÏfäÞÙîpØ}È¾»ÝáóE0=V\x0017ÚÎû®æ>`óG·\x0004½Z\x0015¢ÊÑ;V¥è!LÒÃåÝòPf|ÚÛò\x000böµi</p><p>¥7þ\j¡\x001eÞ?\õ³§¯a½¿zþç\x00173ñy¸I4ÄÂ>4³Ê\x001f[òF,L»\x0015ñwÜÏ(ëcFÂ&\x001aPÚÂ¨5àÈy/\x0013ÔÝ\x0012oê\x001eõ0\x000f®Ãõ¹ûW	ÑØeéþ\x0016úd)m\x0003o´û×gTÀ½kJü\x0013Ê\x001a.[	,{"ñgéþ</p><p>q&])sÂÕDß¶ß4/ø/é¿ç/O¤åOª¥R%Ô\x0004M8*I»TÚôN¤ßÏ|a÷\x0011ô­~éÿºD¿.ßgzÒHßvú Q0P¾\x0001Ð5xnã\x0012FÉR»eÖè[­µ)¯\x000f\x000b4g\x000b\x0018­ùv½hæ7\x001eìáÕûÑw¾QºÙÖ\¹æ\x0018×[­Y]-¤î4ìÂØÝ\x00022þ¸0óõÞ}¦æ·ûõ¢þìM2N÷xC\x0019÷\x0007Ý»\x001eìÜ\x0018_®·w0öø;tÜõs!Å|\x0003ï×ÐQUÍßºÇwWwÐ½wõUl\ïáÑ¥SÚ´Î4þÉøä(J!7SNÛ\x000c9\\·ûE3§¿\Ãd|ðËïÒé>ë	\x0000F\x0005\x0000ê
wÝ\x0014envÇ\x0017-ªÑÙÞ±,¨»ªe¦'²&Æ\ò\x000c9$Ë\x001aÿI\x001dqXÿÄx\x0016¼ü\x0014ù­\x0011ûÃ¯KÏ³S\x000c9°úA3\x001bEÒCû/:\x001dpBÊ=1HLÏËMe</p><p>[g¦p|f\x0000ág¨}ûÚq#Ú+?¸íSÏw\x001b°\x000e\-uÝ\x0014\x000bwäµ;.Ò¦¨\x0006P\x0017º[a:\x0012óa
1B°\x001cNª\x001eê¨\x0014ïQN¾§U ÊÖæ\x0004\x0001Èy\x000fqøÍÁU0ÐiOÀ+£ó\x001eí@Î\x000cÒü[H$\x000e¿«ùå-ü\x0004I\x0018$ÈB_d\x000fò\x0010YvË¥½\x0008¥A|Vz¾]ùJ®Wû\x0003ü&Üòtu\ùß¯÷\x001bWGéëð\x001f®é\x0015Ù\x001fW`üÚ¿\x0007i\x001bêñ-Ý®PR|
HC¹/ÒâìîÂmÑÛ=nK\x0004Hw¤\x000b8$ ~®¯®ºûYÚ\x000eôºÜ,*ÿàz
£	`íî\x0006R\x0001\x001cCYÖ\x0008Í\x0010Íl·ÖúÅ$\x0012\x0014¬1\x0000
Ý5\x0002\x0015ôb</p><p>Ù1"=ú¯w·{\x001aê-¬­u<<ãóFm¤m2mÁÅ}»uóÙ\x0003ö¼c:s{w½Ãòû¸oq{ð»5ué«ÀÞ÷qbQ\x0017M\x0013ß§¾!\x0003ö¢È\x000eóêã½Ò3c«b«£-Aº-ûõeì!\x0019SGý\x0004Á±\x0007\x0011\x001c1Í\x0017A#</p><p>L¸Uf¼#iDi¦ÉÏ¯8ÃnZVF\x0018æÜ	QÓþàAôS×\x000eú\x00148#u<ÿ*ª@$¤-VHv</p><p>¬46kÐjiWQ-zE\x0005Á\x0002\x0016éíO¿x¹\x00152juÓZJð]åm\x001dê\x0018ÃÂ¨ÂªlJ§ü÷WÊê£SðrLÉ¤U\x001ae\x0003 _V\x0007à-c¯%8¸u$Ù gaS+\x001d©\x0014\x0015Z@[Âghõá
{Î±e\x0005ÇewÂT\x0019"OY\x000câ÷è~sÚuJú\x0008-Ó@ÇýÔ~ö=òØ\x0013ÊwP_Mÿ*Ä±Â\x0003:nÈ\x001a\x0016SntXVu»®\x0015o\x0006ìY\x0015¸o,ï	²!Úøv±Ãj¶~0ÐÄ\x0017\ßf\x001eãó¨lí[cØð\x0016¬vå]ï÷¢²ÖÌ*\x0005)PO}\x001c33ø¾]V\x000fö¦OÏqÈ\x0019²Ü\x0018_XH\x0007ÕÌxxÅhä°\x0001táqÅ\x0001¬^»«\x000c\x0003Ueì\x0003ÚS\x000e\x000eäË²¨ÝóÚÂ9\\x000f:.\x0001;Z\x001d­\x001e\x001f;ÓHv(	èpà¡w\x0004f\x001b\x001cÌÈñN\x0017é`¦,e¡\x0007mþ¾²?jR'1nl£8¾\x0006Ñ4Êvð\x001ct(Uz\x0005
·\x0016ó¸íqë\x0014©
\x0003ö\x000cÊW\x0017\x000ez¯÷W`¤ôEcCþ1í®S«IT¬Òí&À%<?n"ä\x0018Ý\x0018Tkù°\x001e·1\x000eÙ\x000e\x001bïPXärXÅ\x0019ò.¬\x0002\x0019à¹/yæk\x0001lEKbwg,hâc)Î®*Îu?h\x0003Z~\x0011\x0008®K\x0007mf\x0011Mpl[6ÈIäE°¯®¯·\x001b0(ðåu¹\x001a\x001f\x0019WT©L\x0000QîW`A:Üz;\x0008Ø@T3¿\x0004áÒêåuk\x0013\x0001s\x0008\x0019=Ê?ØÄÃ<ÐT®°ù\x0016Føg\x001cô±\x0007µª</p><p>§|½Þß\x0000íÝÕ\x0015ØÆ¶ñ©¡°­M</p><p>=ÿ\x0000æ¡K\x0018TdVq£±ð\x000fóñåãP¥Í5\x001e\x001a´\x0002P\x00117ùzuãM£·Åjõé¶üäK²\x0012áÐ´¦MjÚê\x0017¯\x001d¿¥ã\x001d2×´	Äó§\x000c½Ëý\x000e¶)</p><p>·\x0003MFXMx<Ð@õ3-¯ýú\x0000û[Ñx¢£7µÑ¨¦È×ø°Íh	2ô&`¤\x001a\x001c½çh >\x001cÀ.¸¦eë¹kÄYG?õ\x0011Y\x001eôÏËA¼ ªðÇ\x001a\x001fWk·ß4­]ÆkpkJé­	ÁèÔU¤u°*T\x001dû!\x001b Y-C¢ïCæÞ¡')-N¿´ê^-\x0019ý^'[;:o5
òùäÏï\x000e«·\x000eÔ(ÇgEÄeµõhàÖýªýÞ!+¾^\x0017îoÁ|¾ÆßqÙÝ.ªùÁýY8ÃÌf\x0002t#àÄ,ÓÇ'Ø&0é\x001a³ÐO\x000euà\x00067ë)ö¥*T®Qà®c¾0|ºoK:¹cFs?R=Å¥û¢fåMc´ub\x0007´Ó`o¦Oq#úÓ^3tJÃBN\x001fÐ¨\x000f´úB\x0019ï2Ï\x0000ÒÇÁÀ\x0014ø¤">Içd\x0012c«teRöàè½?ð</p><p>\x0019\x001dPT½jÛz"ó8;Ã=ÀÓbð­wÊ«BáÖ¤Ia8[ïùY`Aü ckÔñd\x001dÅ!=%¥±ëîwÖ\x001a>Ïx6øà½étã\x0013\x0006~:®?Q*²ÀýÁwÞ\x0003\x0002Þû[uç¹ã\x0015k°\x001fÀÙ^ÎØþÙ¶6é¸6ÔCûS×Ö6¾#µ\x0014MQ«\ÿ\x000b\x00002
røõ4ø_ê\x001aAUþõîv¿_±Mç0\x0001ùZA\x0018V<Â&\x0012vx;G¡qÓ]~x0Ú*Go\x0002'7ðfÍï³ö¸O6\x0011Lq ò'ö\x0006:¸\x0011µxL×¢AWUÿ´R6\x0011\x001c\x001d\x0002ó9PmÛ\x0013sÏ¨û
jL Ojvæ\x0010[Òw\x0004'yRúÂúY¿Ùì\x001e\x001dw\x001b	
%[·y\x001d»F\x000eæ\x0017>ø¹ßÚF&\x001cÕîF_¥B;MÜ³ÎyQ´Àâ¢\x0007\x001c\x0018É¾S¿ìp\x001fÒñ¥<\Á\x0015bÛÕ\x0017Z+Ù^Ø\x0003ªÑ¸\x0015¸Âb¡Àò«àì_uÂ\x0011êò$øi	>\x000bÅåÕ¶OØv/Ôðû\x000bWÊÁ[ñ||[­ò¥Î,ñY6\x0016\x000cÕ¹¥\x0011&Zã\x0008Ûô\x001cOoÀvÍufPÆw!Ñ)ìô\x001cHh\x0005w\x000eè\x0019\*iãU\x001b1:ÿ\x0015Ö2¢ôåc®­ÎFÄ[\x0003:®ð\x0008þ\x000f>Êf\x0006\x0011Ì\x00033LWÁ\x0008;µ\x000c²E\x0001{ÀÖu\x0002CÑ\x0015À>ió\x0014(Ï=²9r×hØ¼ÝÏàôCjoØ°Q"\x0000p8{È\x001ds\x001f\x0003\x0000uQ7ÓDÒ¯¦.\x000b£\x0017\x0004v¬s\x000bï¢~÷Ñ>èZ\x0010;\x0004\x0004uF\x0012f\x0010J\x0015àWO\x000ffO¾=zL\x001fÛðþm=ýÁ^Gâ³îOEn''¾z\x0016¬íºFÉXÄu£à<Óàæ`"÷x3ùÆóêøÑ\x0006µçÍéµ3ÁÛ­Uã4£ú)¨Ñý\x0014¬5ErT('sTÈ\x001cO§B\x001e¬í*ZÁ6ØCZ|ÈTlÞÑ\x0003Ã²/5W\x0011èô¬@FÒRõ¢9\x0019ó\x000e\x001f\x0002à-ãw-\x001eeC\x0008Ý7¶õê\x0015'è ï®\x0007\x00081£äAckyDD/4\x0013+ó@;Ø¼ØN©Fa\x0013©åa\x0014î×Üò`\x0013§U&\x000c²\x0002\x000c>Í1A#d²ôÈ'ÂIýëý\x001aq/g`\x001b_mwþ¬Wé¯ÇNn~Ò$a»¨µ7ñ'¢ì.\x0003 §V&\x0005{áßñ¬.ÅÀ/(Ò8«Vn¶®AmC\x0012Jî'¶ü\x0012ühQ\x0004t*ù¥y@ãûÍF\x001bíèìÆZkÑqY%EÓ)4@\x0015?äJ#F"?öÒujjçC\x0019[´Ñ£6¸aÈ; ²[»wòL*\x001a>%ö\x0003£í;þ<*Ôh}ÅQüáåÀÝ#¦È\x0006Õñi§3\x0007ï­%õ×£ð¨\x0012¢
2Ûáô$È*L:Ï1b6¿X;`1¹Z»Ò\x0004Ì\x0018\x0000éhy~	ÆI©ÌÒÝqÊª\x0006Ópg×\x000b\x0008\x0000KH?\x0005\x00076\x0011·]Ï0o\x0000êQpñ?ë\x0003DMkwyç4«ýê°¾]Ôóý\x0004±`ºÂø«LOÆÄ­z|Ü*0m[«épkät¸5IïàcXd\Ö~\x0011t"µØ¥Ì\x0010L°É´\x0001ÿö\x000c=öØt½'_È\x0003þez\x000ew*\x0004ÉBÙÛ«õq³U%=å$\x001cUeú~¿B'8ÈÒ°\x0001ç;lK5¿;@»×h<cLt	ò±ØÖ_ñ§vmÆrôÕõjïØ\x0004V· /FIÄé¾\®o¨q7;´þHá\x001bCm½ôÍ¬ç\x001f7Ûí$çrVº½1ÑVLïË"·\x0015á\x0008XZ'Àú*\x001cnM\x0003-Ê¤o¹ØèÛ-zÃ­\x000eÁõÐ=wÖT^èÜ]T.\x0017\x0014^M.ÆO \x0014ÙþR\x0011ÖÂÒQüa\x0015ü!}\x000c|.pøóc`L
10¦QàÔ}ß¹¼À/¶\x0004¿ØÌH?Á¨æ««Õö\x0017vÕ
ÞÚ¡`dð]½Ý9Ù¾2ç\x0004\x0017P\x001aêá,Éuð\x0003åÑ!W°¨~çØÝÎ=\x000e.¨ë\x0017ôÙö6\x000e¤v¯(Òâ+ñ\x00147NÄª¡\x0016ºº@ÞÞ\x000c÷ëÀîÏ0jäÇæ\x0016õ\x0006\x0007à\x0006_ÖÈ+ÝËUðë/îàÒÍÓ\x0016êí&r\x000fÞµÞ\x000e\x0015Þø0]ÐÝáÇßø;\x0014;a6¡rô.?¬0RÙKýàwç§Ð)w\x000f\x0018\x001aÜþ\x001c)U\x0005wwO9Ñ¡äé\x000e»Ø\x000buìD\x001dÇeà6::`hÜu\bnÔ$\x0003ö\x0006|[aÚ\»Õºÿ\x0000î;¸D·ëÑ§ZjU\x0008åZ°ñt§º\x0000Á5E\x001eS\HcÀñ:3\x0017cª5ftµÆ¸QÓC]ìûªL­ÉL­IÓ\x0003}¬Ïdù	Ödô¶\x0013¦âC¾<Á,%bs3\x0015Õò8¢mãlü\x0008;	\x001d´ùþñq]h\x0012;Y5±\x000e×´Îì¡pì6\x001a;;4Ck4ïÐ\x000bÕÚßÃi!\x0019úyþMv\x001dcOÛºhÜÏZGã&6Bú0ÿ¨-¶k¤lêÔ\x0011@ÏübØã 	¹2}Ç»v0ó\x0013\x001aä\x001d¼l²Ûc\x0002|ãX@£*/\x0001CºZy½ö+08\x001ae!QÂàØ\x001eé°ÕW%#$Mz\x001c\x000f2ô2\x0014ñÓ=<!\x0015UÒø-CkÇ'e¨[\x000b§ñÖçèx[Ea2xµ\x0008Ñ&¾³í±\x0017iYWv-ûDfNJwûçl#¯¼=\ôºïwsëtÙÏY1Lþ§¾Ð6\x0012\x0016Â\Ódmä³ì$é!æQÆ«ìnG\x001fh§À6Ó×	"ß\x0001sMÞåÚëwÊtÕ\x0017z\x0006ª¨¶qüpÊ\x0002 ïý{äçGë°%f\x0005N8úÉ½XUk8\x0003^C©õØq\x0007Lô"¤P¥XLÿ\x0005\x000cÔ\x000e\x0015Ðn¢9÷ê\x0007ÈôAYèÐdï\x0004.\x001bí¡Æ;°Ú»\x0002X)&	t!¼HÇMâlì ê\x001c"¥\x0012³	º2Õ\x001es¼óÆzç~íÚíZ{Ìêí\x0004)5\x001b\x0004Õéá÷ÙòvÍCxIMü</p><p>²\x000eÒòÑM\x0005¾¬\x000fM;è£ÅqªÉÛÖÁøND\x0012¢fsí\x001bSi±£+-º2ERZÉ\x000cÉÉ²dèùàbJû­\x001aÁ¦Öd ã³½]'\x00118\x0014\x000cv:øã\x000eßÑI\x0005<i
\x001f\x0010×	\ù.6IA\x0011\x001f{È¹*£u¼\x0014>å+\x0001¥oV\x001f×!ìJx\x001b\x0014\x0006©«ºBCÕí\x0001¹*&K\x0000\x0013E(ë9ªªë(ý÷v»¾]È\x0001|%ÖE¼£'q4³\x0008§GÈ[}VUÊ"ë:jgÆFÍ÷wï\x0017øÁ\x0007J²jä|÷Ö\x001f=A½`Ùm¸'þ3ä÷îç+¨ö¯@ñ[8.©ý\x0004\x0019ed©åüÕóÿÉ{}êê~
 Sñ+U&\x0002{l?9;r®\x000fxhJÎn(#¦¡\x0015´òµD9O×¾\x000b¥øôì+Ð2´)z y\x0010³(\x0002Ñ~ë\x0010¥½\x001b\x0002Þ¾?lÏ£­\x0016µÛàÒª(Æ\x0004p8ùÅu\u\x0006ZJ¯UCÇß\x0012éXSh\x001dö¤ÿ\x000e­\x001cÝ¡J]&?æ¬Üdr\x0004R$?\x0018ì`ÙF¿\x0013J¤§g\x0011¹ó¸e«-eÜÙY)\x001e\x001eïùTw1vÃ</p><p>Ú¬a»cs\x000c'Ñde¬L¬Ó\x000e5ËÖ\x000bÚK¡p_sÖ\x0018W¸</p><p>Ü´\x0007îïT[ëÖÀ\x0014\x0019òÚj§6pïìÇûS.úoÉµ-òÕo÷a0\x0016ç©Æn*Ñºñý.m,x:V¥ïµEjùâEnD\x001c\x001fjç\x000cÔ\x000b\x0016\x001eïÈ*jQ/ãçï\x001aÆÖê¡;i}õ½Ó¥Ù°\x0013âf|\x000c3º¯ Å%ï\x0004Ù\x001bWb'pl\x000f.ë8xF%£¥Ù\x0015\x0011ÄALXÅQÖ\cbB¦ýÄ£°eä\x001d\x001dÌhñ\x000cvgÞØ¤äi[ñ­</p><p>Þ£æ 6-ap.%gM£ñ\x0006ôà¹i8ð$tÚ@[Þ¶®Û¦ÃTàA½\x0005\x000f5:ïþ)ø7Áí\x0017\x0002béÓ+n^\x0002\x001ct\x0010Ñ\x0010Î¿ð~Ax|\FWI¿\x001e<&,@û.H\x0011!ÿ­CJ!¨BÄWR}Ñnø\x0011óÙ6!Ñà./¢</p><p>«\$B{²[ã'ûQ\x0016\x0002ÙÒÃ5ªb_®ØÃÍ*¡Ø×b2Å>Cr²ÓÈ4=X@µÈ:× \x0015}x\x000ef÷z\x0014Ekè.8ÿ¢KéÛº½C¥¨ÀÓHÜÛcD\x00048&Lo\x001dãªrs2ÁM\x0016­,IzSÛîUYc×$ë/ÜXÂÎ\x0019zx\x0017Óû\x0015\x000f4¹+yÍÝÛ\x000f(\x0017Þy\x0005\x001e=cÖm\x0011°ÕøK0H\x001arÂË»\x0003\x0008ÊÖ!É=^m·wø\x0001»¯Á³Û	<,EQ½ÄFt°2ô}W!øà×~X[\x00089</p><p>×FöóDqÁ,8G¼\x0017IK.%^\x0002`éçö=º)Ü½!Vgz>»wmÀÐ¡çÝ½W\x000e"õo·àO½]ÏöxÏ\x001d¿Áûðøå&`©Øß\x000e¿ãe-5Ü\x001e³n\x000fOÜ\x000b÷Ü§¤»¼b/¶>Ì.\x000eH)al{èä­rÜ\x0015íã^üP\x001f²ü.0õ\x0010Àx¦\{W®Ù\x0003ÿÆ\x0005¨5`\x0015¸üGtÒUNvW ÔIupÀùñ\x0015\x000f\x0013Ê¢¿P3QØ¦q0\x001fH¾û7Ä\x0007\x000cä*¼à×\x000f­\x000bò¬Óå8ùÿnÂ\x001e7\x001eÃ}hrü£í\x001e-É2´þr$\x0014ìÑj:KËë'Á.(Ì§1\x000c\x0006Yù¬ý»®Éæq&(õ\x0001¢ºðiI7\x0004\x001b¤ÞÒ¬Ù{
8R½¥a\x001b\x001dÛçÈÔEzàäUe\¯hóÓw)Óç¡y¨Â­:D¦¡þcÿÎE|½%\x000fA¨IH\x0011§*\x001a\x001fº¬¸lÊj8|pPWÝ«</p><p>q³&ë^g\x0014È\x0002Ü©Àß*Ó\x0019ÖöG½\x000c	ÄN:¤ÏI¹ü)3tUç2\x001e\x001f®ð\x000ce|°ÜÅEúD¨aôÈdREµ\x000fÛ¯C)<o×e³I¨'¤\x0004i'V<ÊÞÌÐü­ºÉ\x0019:½\x0014Èl ò</p><p>\x0013Ý[t4\x001cê¶\x000er{\ëB=Zå}´¾]Tó×t\x001aYBþy°\x000cmAOÿ2Ã>~·òî\x0018\x000eì!\x0018Â\x0015»ò\x0017Ó\x0000\x0018ÀwÞ\x0010\x0002!ÖþêàÒ¿¹:x(Å5ù(®ø¯Ý{<,½Ø¬\x0001?m\x0017ôê\x0012¡\x000f\x0017¼vbõ¿¬=|ªüËÛ+¬«dÞüv¾qÏjWÅòø±îj^d\x0006ôÆÀpÒë\x0006)\x000c\x0014øa16ã¶\x000b/dÛ5®4Õ\x0010±Tåhá-8\x0002Íüã</p><p>&ëêâGô'<]×x>~\x000b§ÞpèoÛu\x0011Æ\x0010~ÙáÒ¸òkÎ\x000fê\x0007WÅ[÷¥ïÁwà®óÍµ\x000f~Â\x0000É5ò¤Ùt¤Î0³¼}iØÍ3pí\x00069<Ù\x0007åµJóbYÅ\x0015NÀËN`$\x0008ñÅ\x0019È~µëØ¼µªIô3°]&'Ú\x000ctÎÐ|\x000eË=Äè\x0008ß2î $;´ld#a\x001f¾¨;%ñ°6U)eÅàDËÜ$Á9ºÚQàîÖ>Äaº®mÝËÎ,÷)·\x0013Ñ\x001bÉ@÷ÏR:\x0003:\x0018*´Bv_p»	/Úº\x0017xúnçQ\x001a\x0010\x0008@\x001cI'°èÊe\x001dVèÜ}hpÙá\x001c ^¦Wp»S\x0003\x0018ë`·ãÏ\x000fº\x0003"Mé4¡ÌôÙåçëõCôMÙ -8¯o\x001e\x0003;©oÊºNÜ
<ººÙ\x001c©\x0017>è\x0016 \x00115\x000bwÉ\x0016\x0013Ùf~±\x0002)\x00062Ä¥{¶f\x0000\x0016ã'~\x000eE\x000f¡è\x0005ø\x0006</p><p>\x000f~6`ÈÁ(Ð»ÈÚJI\x0008ï\x0017\[_\x0008»G?Â¥7×`\x0006Þ\x001c{óNÓ³Í× !§G)\x0000ÎÍÍAÔf×\x0001p¿l\x0008K \x0000þÝyÄG=èõÔã\x0002?æ\x0000\x0012¯Öl²&{KHmç]£¡\x0015L"\x000e(CúêöwI·ßn\x0019çy²\«ÿóûàoÐ\\x0000Þþ\x0007Ýÿp@\x0008û¤\x0006²@\x0019¾}³1X¢è/º"eW((/DXLã»²ó®Ï;{³Ã\x001c{e=Jhu_¬O:ÒÆ¿Pm£\x0003Wí÷É\x00069Î÷\x0010p3ý¤Ûµ\x001e86Îò-\x0017]èS÷a\x0017¦U\·Ä\x001e#®Á\x001dÈ\x0015IhÕ\x0011õ9"@¸³)\x0014JïOÛÌ^ÖW¨¸Ë!Á \x000fAH\x001axßÛ\x000eM6Â\û\x001b§#iÛ\x0004dÃ­\x0019¬×Ë¾\x0014Í­Ö)±FË÷:îmAÑ`a´\x001fb+a´\x001dØ§gù©ãº\x001e¸\x0015\x00089FÆ¨ßµ\x001dtw3,;ß»\x001b\x0000!UÇÏæP8¡Ez6Ç\x0003JÍ\x0005Ï{Ò±IIÒ@ÉV\x0010f79R2*Kë9X\x0000ö{´\x000b0öxåjAÕ¨ÃÅðmÇ¸pì\x0015\x0003iàlhÄqpUzeôLt7|BsèmÍî¦\x000b\x001b <\x0014Þ zwØ®RåÙ÷Oî²:±¿õXv.nCl#\x0014Ðe»±öÉÛ´§LF\x0017ÐFø Ýë</p><p>Üå46KWgþÏSú³Æc+BÚíïÊ>pþþâA\x001bÜÔ,üñþ>6mJzrxá÷Tû;Më9[;&ÒÖvü3ÜÃ\x0004úvá\x0019@\x000bÂq\x0017¡¾¬¢\x000fYs\x0016õü7Ö\x0002ºVÅ`V¾jâ÷Õ@*\x0003ÖwÏ?Þ®=DOY\x001aÉÝÚÌ¯v­¼ÆÊ/;\ª"/rþ\x0013¬·ÛQ[º'
\x00143î\x0017\x001bÊ;u¡$\x0013÷\x001d\x0007\x001aW¤Ð±&Ç³\x000fjfÏ\x001aÑ¸PôY¤\x0014ý²É\x001e\x0013Á^-¼\x001dtÚí÷§nÌ64\x001aÂrm\x0018·¿?ÎÐú\x0013­µJÍÿwT²RBOÔÃj@«\x0004Í3M\x000cÿ\x000bÖ.YÒñ]|ìÎ¸,\x0014TE!k÷c</p><p>ÇÄmå¹n\x0010}<Z©¨Ü)áS"\x001e\x001cÃ\x0005ºÖmá\x001aâ5¢ÛC¹¾`\4$'÷¯cPêóàÞC'aI£ñq\x0016§í+ñ{ÒÊ¨g!\x001f\x0006)`UI5N)Däø\x000bä¥è\x000b`'\x001a´Í­ÂÝ\x001eÝ</p><p>c¤Ã¢Ó\x0015lõvÄGäô"ïÃ{oð±hÚZ²!ó\x000cZoAª,\x001e?Yª\x000fêúÙók¸	©CöÁI\x001dàwO¨.Wú×#¼±2\x001by²	IùL´Á@\x000f[2,A\x0011ò'½Ý9ú³úåUû
/EÕYÀ¬Ë/ê¶A×ÜG¶±Þ\x0016/ç°ÃÙi¹ä#xÅ¶­|\x0011ö²\x000cYX\x00047u;ÄûYuxGØ}D¡\x0005Ê±Z\x001d÷zP±ûÓð\x001d\x0006§´]E)â</p><p>-O/ã\x0006G»Mrþwhd\x0015íá³dÉþ`ð"HÌlðá1¡YÁþX\x0015EäÉ\x0011})UüÅ</p><p>¬-4·_ëïgu2ºoµePñ¢£6\x0005u\x001f)¹¢'ÝæQHÈ¨ÌÊ*Säöæ±`@\x0018´Åðpý\x0015á¡\x0016Âª[W	3§?¤Ï,±ó\x000cô\x0012c°\x001d`Z9txpoý»#oWê7YZ\x0001YjÒM\x001eyxÈ©3Mëãâ$7\x0015uTÁ\x0018ý/YÐ¿\x000cÓÀµîazë~)\x0003¦ß\x0004³ÆÆÁ{Óù<v\x0001þ¯\x000e`\x0007ÍâOà®3.JÔB\x0016uõe&U\x000b
\x0017n¤i=\x001c¬\x001f>`\x0012\x0001'×+/ï\x0016>ç*üäõï</p><p>a¾à'¨\x001amôü\x00194²üé6Þù9ìÁå\x0005°\x0003@\x0014øÉ/êx\x001e`?@YußþÆi\x0006Ú);}\x0018äWÚzq´þ\x0003!NAHß\x0013^¶YÉD@\x0018\x0003<Ýß*¤\x0006<;ÁC|\x0015R_Þ¶ßhtJ$eAÈû\x0006á\x0011õ}uQd·LU,ÎôOdjèIã4dÀ\x001e´\x0012Y\x000eD_ò]n!;àó\x0015ß£ß'(³Z\x0006\x0003
/Ë\x0018q16t\x001d\x001cw?èª\x0010:³Xõc\x001c\x0012kC¤] \x0007Å¡\x0004íe;0@y|õ/H;tÝ-í\x0007¤Õ\x0007\x000bJ<\x0005ß\x0005­\x00008Íööfó\x0011y1æÖø·?»¿2m õÝ¿¢£¬]K/y!Õ\x0014h¡qü³\x001e×y.Ü0lPJ£3ÅZ\x0015nNrôÇ5Ô¦&C\x000bÌ¥ÆGüs\ÏÊF\x0014öÁ=<ÂR,\x001fb)®maÊTßÙT|lÚå¤©¸ÖhÅØT\áJÊÐQl\x0014ä\x000fNvrx¢¬\x000eÌ"\x0012v~ÃÓÒ»\À>ÔZyO\x0019|+\x0010nÝ¹?ý:.l\x0014x»|¡H\x000c-¶+ÂP\x000b\x0019\x0015pg=Q\x001fûXE\x0012.¸O\x0013\x000bÊv,õíxB.]'w\x0002>|§Ý\x0007 iÙä,\x001b\x0014BU«¦Gµ
uûª \x0010ÅØdÕ\x0001`=3'e7!£ë¨²Á</p><p>ÔÂÌrzp±\x0002éè-m¸6¥×c?\ãi\x0006Hd\x0000÷T°1É£9ï¨4Ç%\x0017½_ÐV</p><p>£»é*\x0001	\x0004$['¯\x000e^Ý1²÷¿]ø\x0013.×\x0003ð¯\x0000é\x0011\x001c6¿-Ê4Ö_=\x001dá§Û\x001bT77ï0Öº£]¬0×Ç¨Û[¡Ã^f\x0008ÆeaJ\x000bLÒNÖ+]\x0016Z?°(ëÿ\x001f¿`\x000b</p><p>endstream
endobj
50 0 obj
<</Contents 51 0 R/CropBox[0 0 595.32 841.92]/Group<</CS/DeviceRGB/S/Transparency/Type/Group>>/MediaBox[0 0 595.32 841.92]/Parent 6132 0 R/Resources<</ExtGState<</GS7 6155 0 R/GS8 6156 0 R>>/Font<</F1 6159 0 R/F10 326 0 R/F2 6162 0 R/F3 6168 0 R/F5 300 0 R/F6 302 0 R/F7 321 0 R/F8 306 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/StructParents 98/Tabs/S/Type/Page>>
endobj
51 0 obj
<</Filter/FlateDecode/Length 7433>>stream</p><p>xÍ=]o\x001b9ï\x0001ò\x001fô²´;üè&Ù\x0007CØ3³ØÙÍí\x0004w\x000fÉ>hl%ÑA<²\x0014d~Ó½ÜOÚ·[¿ÜÓþcUlv7éx¢nO\x0006ÈÈR,²XU¬/V??ÛíWï\x0016WûÉééó³ý~qõay=yóüõöæïÏ_ÿz³|þjñ~µYìWÛÍó\x000e?ïá§ïëån>¿|1ùåé\x0013V0øÏ\x0018Í'lRÕU!ÅÄ¼¨Åd·|úä?ÿ8Ù<}rþúéç|R\x0017µ¼~÷ô	4f\x0013>áº,J>Ñ5+Êròú£möÝOzòþÖ
vïñ'\x0013ýô·ï>y3ýÛì¤ÍNäôÕ«þÕ~\x0017Ó×³¿O^ÿéé\x000b\x000bïß>9~~«Bëx~Í´âÙL\x0007lZ~\x0019ð\x000fßÍNJÂÃO³ÚNDNÿ\x0002¨ù\x001fÁx=ø¬ìvÉ\x0007 ãdxÀºÐÕ\x000136;á|ZãÿDøsÀÍ\x000fCOHrK¸\x000fÀÄw@°GãîT¬Ðõï°3R\x0005ÀÎü88`-</p><p>É\x0015ëªP_Üú	@±âcòúÊ¥4Ï¢\x0016P¿Çòm\x0007%~ÛòÅÐ(*Ô\x0003VßË\x001f_LgÎ½óí~¿ý?ú.·Ûý×\x001f}\x0017¬ìÈ4SÈjRÚ~Æ¯\x0001§?È¾%à\x0019Q0wì	"2	\x000fÉ\x0003¶ä!ªáa×öÜæ¸Öº.x\x0016Þð{)xøúê'Ï_\x0001½ÿøâ\x00136\x001c\x0011WÀåDÛã§R½\ÁÁ·Ý|©ér³Óýk»¹}\x0006gò\x0004\x000ei5]Ì8\x001eð±\x001dÔôÃb¦§\x001f¡çÍàxãJ\x0015¦ÊM÷8ºP)xÚ</p><p>¨\x001c¼S;ðåü¤´5×ðõÜ}esü¨è+s@ýëÛ_Õsh¬¡¡ýTs	5ã\x0017|~"[\x001djNjj\x001e	þ¦' ªh.¦WÍ )\x0002¶SS­\x0001Í\x0005=Á_\x001dHêÒþñÐÆ8Àö³.ç\Æp`Ô2\x001aú9g§8Ôg~t\p«kõÓ§î\x0017\x0016Íæg\x0017+Nö´.¾²X¼ó*\x001aÂ/FÎ¦ÈÊ*ú\x0019þ°Â ¯%Í&é¸¼TpôwÙf·ÜXÝv{\x0000¦þd|¹^Öû³ýs
Ì½\x001c6Ëýön;3V\x0004XÎ¾=³YÕ*]\x0018c1¼(©êÂ¨\x001c¼#ö«'®ùðâZÈB÷æüÆð¿\x001f¦*\x0001Q«¢29Ã\x001fÄö\x001c\x0016Ù\x0005þ\x0019\x0013N\x001aa¦\x001bû÷Ö2</p><p>étG?ëéõéò\x0016ì´1N</p><p>ÍçÔäPº ´-#Ùn%tï \x0010:fV|\\x0004³¿(Æùð"K²PU\x0006Ç#è­¥Îa
$$\x0013ö\x0005\x0019ùý«áA+^ðÌ¡Eªª`<\x0003nqýáÎ*F$l÷·^êÒ,êTôË\x0001¤ðçYåÛ¡NuØ£¾µgëõ¬nw¼Û/Vðu]Ôôí\x0014FZàHn\x0014~ä²UÏS²¨í¢U!ºr\x0014÷W*ÚßånpV=ã'JmWj2ànaw7û%n\x0013</p><p>%ÜEØ®oãôgu¡Í½\x001cãÇú9úÐeÁ2\x0003ýÍôílx¶C\x001eàðTa´%,<båá¡rkA2ñM-Ëáaó\x0012}Wa+ÙÐ[gfO\x0019\x001b\x0001¬ÔE§\\x0014­ÈõÝ¬Fñj¦úXWYJëà©\x001f\x0011ÛºÄC3
\x0001¦Ox=]¼\x0007mlc£°@\x0008ø`Q±ÝÝºSËLo»§íf\x0003\x0004k\x001a\x0004eå\x001düp½²#ú\x001b\x0016ëáÝ-²\x0006×Ù£¡PÚ¦UvË{B\x001a3íY{\x000fà\x0011\x0016ª¬ðËÂÓ3ï¡ý</p><p>4¡=ÐÈa
j</p><p>úÐÈÜ-¡Ô\x0016\x0011§é½\x001d¯B\x0014i<Ía{kû&\x000e\e;¾XÁ«i¼²Hùdi¼\x0005íp\x000c	jéÂ¤gÔ:-Ô±­\x0004l}\x0006\x001bcm«\x0014æÀýa\x0004puQg7{åÂê79x×Kâ%°Ã»wK/TÍÞ\x0011@»5´@¢#FrJëzi\x0005xÎ½Ãµ¶ÆÚWØ\x0008Â"ÉöTµ)dO[\x0001#[ê\x0004ú«W@Áþä2°·³b\x0004CÐJ\x0000¥Á!}KbpßÒ\x0002è¹ï\\x0012£92 Gó.eàýyx\x0011«À>MÃs\x001e#&çUðàOo¼óÎ\x0003®täRö\x0018kp>%s~mtèzVÎ'Þþ~Ñ@®\x001cd;\x0002\x0012`Zõ¡ø\x0000w\x0008\x001aæ»XÆe\x0014\x0004hü^0*ã"e3\x0013\x001d \x0007ÿe"ÿ\x0017xÆd\x0002$Æ\x000cÎ1\x001aâgQ\x0008P±\x000e\x00039ÙeàRii;\x0006¬þÃM®n\x0016Ay6UÕôz±´ JcØÌÚr\x001ap\x0010ÓÏFpb\x0012©Ì\¯Q\x0019ÇY¬\x0017»»`V©\x001a<f"Êbp®\x001fc½\x0010¬j°®\x0013\x001cæ\x0007û\x0019qÝ\x0010ª\x0013\x0012B:~Ø\x0019~²¹§Hç8®z#x\x0004)0\x001e\x000e \x001aÊ7\x0010<,`\x00100\x0018\x0017¡Có#òv]Uë	­-ðM'©\x0018ý\x0001/ÚËNø¯5\+Àç\x0015XÜ>9ÇqN.Í\x0002í$Lô8B¥U¹à$ÌÙÁ\x001eZ²B=ïKyÑ\x000e\x0007«&FëæÚ½Ç¤#ZØ§§í~½°Á·À-¥=æR(ö\x00198E<Hó\x000b*UµÑY;Ú£)</p><p>ÇD¡°®£!Êl\x0007C\x0010\x001c»5ê41Tt6(yÚÌ\x0015öRµZ­[Ç4\x0018±*sg§\x0011?ÞJ0(îâo`p\x0017Ow±tÕÅÓ;jãÉÇç«çu<ÖÃ\x0003å\x001eò búm-Í¯]kFEð\x0019\x0001\x0014­\x0015}S´.9\x001cõ÷\x000cH(kÓh %åkÄ)\x000cn¹Btº#\x0011^\x0010¿\x0004ôùçì¼li@Ø¡\x0002Ev\x0014\x001e\x0012\x001eDó±B\x0015h-\x0016^%A8¶}\x0019
ï\x0003/ì	³_o)ÖD´ÖÌD\x000b¡8¼£Â[mÉ\x001d\x001e!\x0003AT¦\x0010u\x000eÞ\x0018áIVT:\x0007ï¥U@QMUÓÃî*¸Ô¶³zúèA8R\x0017Mñä\x001aR\x000có<uÑ¡ì¶Èá^^a¶PÌbî\x00155¼£:p\x0019\x0013ôh\x0011÷Rð¢\x00149Ì\x000f\x001fr/E\x0005JJ\x0006Þ÷¯Ð;Ï¥YN`÷»Åõ\¯Ã[\x001c¢¨rÙ\x0000\x000e#ÑÆV¥1ùåÝ,vèã=lÐýmø¥-×ë\x0010]\x001f-ÿ£3\x0010\x0012l(Ù`E±\x001bkN¯õb\x0002Æ+¥îÁ\x0001T´ØÃú¨©\x0015\x0019¡=Ü\x0012\x0011x\x0010y*Þ\x0019\x001f\x000c
ïr­\x0019z\x0010Óx\x001b!5­\x0016p«*\x0003oH÷¡\x001cÜ}XÕ%¸§ûîC9û0\x0003r4÷a\x0006\x001ef§\x001d\x0018	ÝÈG\$·g\x0015\x0019x×ËÃç\x0011`V\x0007éò\x000e3=]®×\x0010Òð1Ai\x000f.\x000c\x001cÖr³¥ã\x000c\x0013ÕýÃ¥ûÄÕn\x0007B2¦nà\x0000ÜnÐ\x0017§,ìµ(\\x000cd
}ÿöá_Ð\x0018\x0007XQ,\x0012=|~Ïùô\x0017\x0010«¨~ïg\x0001D\x0010³1|3¹Ba °¤ái\³B³,TÚ©[¼~@¡,m	È\x0016Æ_Q\x0000Ôî\ªÍdÓ]\x0005ÇÑa{ñáJ\x0006×¯,\x0014Ï­b\x0004}^ ½÷oDl¢rE8	\x0011øêìÓ-\x0012¯EÒ0</p><p>\x0007¼%ÇéÍþ\x001e~ÔÓ·S=ü¹*«º¨«Ü\x0002\x0004J¥ 
d
J7Êy\x0007ÇK&ÁÁþ½:áSè$*\x0007
Í÷rÞs3SÌGlÃªoýÄ¾&QGÏñ\x0007Õò/¹;\x001bgè\x001c\x0010ì\x0005Íê\x0011\x001d0÷&»U2§ÆJ	kNÃG/×ä\x0019Ú8çÅ°m×\x001al\x0013«¤£	ÒÌ¡Q\x0012åc8.\x001cÛØ¿l}ÿKÈÃ%\x00107ÛÃ¤¸}¸^`^ýëÇ\x001733ýá	Z\x0005¯3(9.:IÏÒ\x0012²L;EûY¢ýL¦µ\x0002Ò9·d\x0004ÿ4Wð'hz{ê§\x0018bÇ, èôo£ýáíxÍ!&o¯BØí^ZcÉ</p><p>MÌ§­ÇÈq¥\x0008Zz\x001eCÚ\x0007å×Ù\x0007æ\x001eö-eQ%©çÒ;<\x0004\x001c9`,<¸*I¡\x000bü¨ÊùyÎÉ5\x0014ºijÇdèb{»KqäxgÎ\x0007J­dj</p><p>2\x0000Õ9«:\0¯;#FNtEÑ4"T¿#aóÛk­N</p><p>¿é¥Û\x0013nyÃh]8Kúgë¸õ¹óh\x001a¹|EÔ¦*5¿ÄÕèh^î¦Ý14¬SÌÄ%Ü¼J\x0013DñQ !\x0001u¥ýjµ\x0007VX\x0013\x0010à½ûc«á
\¥,ú\x0006n9\x00069ç\x000cÜæ¶É`|Z¹¦\x001eoÁÜªÐ&\x000bïÖ{³C,$£ÚÕCÚÜn±?øçû\x0011lÿC\x0015QÐÌW\x0002\x0003<\x0007ÏJ¥K</p><p>\x0003ù{º!ºèädq\x0000>¯&~î~s@¿\x001a</p><p>vµ.?³yÈ§ Ì¨\x0010ûÄÊÁá.B¬1NÇ\x0008÷¢Sé
\x0018àuÑ²è\x001e±À+ÿ$Í\ÈÔ</p><p>ó\x00102
Q³lF\x0014o/Ý\x001dâ^4Újµ¥kÍ«\x0011L\x0015:Kþ¨\x001e\x000b\x001a?½é\x0005¦|·û\x0017\x001f»^hÐÁ\x00149àígðà\x0008ÇÅ¿Î¨·»x l_ÇÝ¶\x0005å\x0013Ç;G
þ%Ý¦\x0013erpðìDÎª`5À°¿.63Lû\x0016\x0010\x0012 ¾Û+è»XÛoÍU=A«\x0019Mcx^/|4rÛê¸(\x001f'Jf÷çv{ \x0019\\x0000\x00179x\x0018$+ìFÈé\x000fë[¸v²¡+Èö×wÖü&rÕJS\x0017u2ý&Ç¡"E\\x001b\x0002\x0005Ey\x0015\x0015T0\x000f\x0017Rf<\x0019ÅK¸@Yå12êcPa¸6Øvf\8+J\x0012û*Ø\x000fî(82CÃÄ\J\x001d\x000fG~%Æü\x000fíÄ\x000fï\x001d</p><p>[¡­\x0008\x0019\x001dîxóÇªÆcJ·\x000eÁÁ÷M</p><p>\x000eÌ¾
\x001f4Â\x0014LæààÜ\x000cÊe+b%ôJD	l-\x0002\x0018]¦J­áBX\x0006+#\x001462\x001cªºeà¡P\x001d#§Ù\x0011TVF\x0000OA°?\x0003oãËTÔ.:ñqVº Ö&\º!#h*'XIixýuÃ\x000b¨M\x000bÐ0ÐÏùMèz¥®àBa²\x0010Õò\x0006k'Ptnøð
\Ö¨Mn\x0006#2Ìÿ#
ïÔWxj21\x0018`:éè2#MæQ\å©98dã\x001b:{SÂ\x0000\x000fªZ"ZY£e\x0008\x0008¸1¢¬Y	G\x001esn+\x000e®²óyk8îÐ¯\x0013%ÐY\x001cì;\x001c­öfgÝÕHã7d/¶Ój}o<®Ûª­;y·îºpB;ë¢ý|^µßâwÊ¾Ä{ÚÅ^-¼\x0007¼ñÅU-ÿ!y¹¹ÓØ¾\x0005öUX£0É¾\x001f°ªÔî=Þu¹F7¹s&ùÈÊÖY]¼r6Óõ\x000câ1üýD¬Fµ\x001eþ></p><p>Ty\x0013<7ù\x0011ò{ ô©ÎÁ\x001bÒ¯\x0006w²z±}÷g5û3\x0003r4÷g\x0006Þ«õ¡±äwwxgë£%ÍOÀ1ÎhMÃÅÍî.\x0018d^/[·Øõ\x0000½¨ºOS\x001bü	ÛÝ>ò\x0010¸â\x00128fH \x0011(¹!äÞAêNtìà³dèÙõ>VþgúßÒ0à¼\x000cÉ;X\x0003'ÃJó\x0001\ ûo«
d¸¾ÕîÜ'7 ín±X%XO\x0016»ý\x001d\x0014±»nVúnf¦\x0007ôÜÜQ»\x001b+o\x0016»Éz	Å_~7ÁûÐ\x0013\x000b\x0007ö\x001cL»¦&` ¹¸\x0019Á±ª\x0001híéE\x000e) ô×	\x00081á"µ-²V\x0010!¾¯ª0t¼z3åÅqÕRªî,rb_Å±¢CvÁ:¹ñ%°ö\x0016héÛ»²ÊTeÕ£òÌþsW÷*«//ì')` <\x0018× áASíÂvØµ¤.»R\x000bºCy	Ã£BèG-\x00155Á\x0005>ªH½ª@ý°À@ù@Ëòëå{_Â$æîî\x0013õàa^x·ª±	-¡Â\x0011\x0011¾:6Ñ*×@q´Rco\x001d\x00030\x0010)60J+@AÂÕpß7sÃ%äy\x0018`\x001c¡r\x0010Ü\x0012jlN:`kå\x0015ì\x0008íTå ã÷ ÞL²ðûly\x0000£Ñ{JbÁU</p><p>HËR)B¦Rd@\x000eoäyÑ\x0007w\x0019_U\x000f\x00194Ã{Q\x0005\x0003c3³îãü@IãV`*o~Ýç¸Ì\x0010tcºå¹\x0004Kí\x000cZ7Ù>G¦"$±c$ÜÄ\x001a*Òð\x0014ôÊÀ»Yê¬7Ú//¾ûëOÑ×¡Z@Ð\x0005Ý\x00132­°Ð\x0014sªKüÚTLµ-±&\x000cäAï jâoo­\x0016i"¿\x0015µU\x001aÊÆ2ÁdYsÌx ×¾Ý«ÅnzÕÛÁõ#«÷ÄKd%</p><p>xµ½±ì\x000cnÐ\x0013C:_.¦¶æ«µÊ\x000céùa2¬\7F\x0011*\x00017\x000b2ð^¸¦#÷\x0012«°dà û¤¤<õp¼u
>Üô¥gwèÕX¤D\x0003ÊLkr\x001dRw\x001dóõ[¼Ñyâ\x001a\x000f!\x0005S4u\x001eËàüó·'»\x0015å[u[ D\x000cnÕ·\x0002üÂåÜÑø%¦d>õ4\x0004ÆÎ^¦KôGØí^3m¥x¨&	/Ù·	µÕÎ\x001d÷;\x0015h¸OÃ\x0002ì\x0007\x0000î»Ãçb\x0012(ÒÍ=\x001bþ\x001d\x001f\Z\x0015!7µ1ÊÂ©B§Á¡YZR\x0001¼?Q±
«\x0003eVê\x000bÄB¸\x0008Ï×::ÖoÃ\x0015!Ú[W ³Ú\x00136´Z/9¥@GY1w;\x0016ù\x001c ëíæ</p><p>.v0÷úÏ´Û|mv<\x001em¥\x0012ðZ\x000c¼áëÿÁ{¬xýëÓ%ä«dàÑ&ÿï¬r-W\x0015/¨¡v§Á£;ºäðI5XáïÑ°aÍû"üë\x0011ê.C¸©\x001cDd`[ð½\x0013¢QmÒqn\x0002\x000cïa\x000f\x001f;CÓ\x000f¨]³ß-\x001b\x0017øÝ\x0003h¿8|\x001eA3cp#=£ ~0\x000c_r\x001fÓc>ã¿7º|º\x0015ÍkkRMY\x0016ª ÔT?ª/å¢,Î\x0011it=lÕ¤Ti-¯¼ðÓT*\x0017ó¯\x0018</p><p>ó¬¢Z¿¥RM+r:|N\x0005ð{Z0ô·\x0018­M\x00026W\x001aêÍr·Ç7ßXI²I</p><p>\x0013¸L;\x0014µ!cxó¬\x0012\x001cs3S;Ö¥7ì[ô\x001eZÖ!+$\x0004$_¤_\x000fb¨®ÃäÿEx\x0001¨õ+Üè\x0008NzÈáoé2V¨:½ÀÞ6\x0006l\x0018(8auR¸\x0016oeV][Öh]ry0êcßmíö-TÙHm\x0005T»èo\x0005\x0017y\x000cS¢·nAU\x0012ßÇ)ÎºéªªÌúiyXct<oV\x0019 "éßþ§\x0005KÆ\x001f7{ª3\x000e?ï!Aa\x0019ìVö\;QQ×%EY+÷õ\x0016S*ÛØLß¯\x0016Ð¶×åg:Þ!°;xºÕÕ</p><p>ÎM7\x0007¸©mÕÞL¯¶\x001bhýi	6ÁÆ</p><p>)\x000eB²ÑåôYGbÐ\x0015Nf¼Þ©j{Hi5%aùeÝà
Z¬d\x000e÷õ	â\x0006.ôûB\x0018\x001c\x000bX]-Àe	p>&e@2ô£ñ:à\x0016nú_ï^LSg\x0007xÍg¢\x0010\x0006Y_°\x000b·\x0013¿6ç\x000bUÓ«\x000fÞ\x0007?Ã"qÇ\x001e\x0010uÇ&!E93¹Ô\x000b$¿J`pö ¡0>/1~]rRb(=ÆK\x000ez"£\x0014YXøÞîO«T#\x0014ØcLn¨fýß\x0016ì\x0002xå\x0005*\x0012¾å÷Vø¼°àø¿\x001f'~`h\x0004Ö[Õ\x0008a	\x0015D[æ{\x0012BÀÆø\x0017\x0005Êêvá9rµE^Ç*QA áÊhÎ3¶\x0007ûäÒ\x000eúáÚÆW\x0018u@<A¿;ÏCNà-ü!ê\x0008Û\x001bÊqÂ=ÞNáË\x0001Õ\x001aÄ{{w\x0004 ákÆí3	¼ù¡9ÀÕ\x001ft»,Âôpb» ¬\ÝBÎÚ\x001däÍ#*Ý¹Ö6áu_81üáÓN!JìÅ=QÏÝ1ò9HVÚÝ@²Ñ¶Þâ ¥;n¯0¯7¢èl\x0008ü@ìñþ0sÏ<-s,ÈpBB\x0013Ñ»ä\x0001ÁÔ°!ÆþQÁ\x001f\x0013²|ÂUs¢DÓ\x0018\x0012÷\x0012</p><p>/ñ\x001cî~/w\x0007¹\x0007ÖÕêÙ,ì±#9:3A5\x000fGì]¤\x0007píÛ/")ý\x0017ét¿`§ÿé8«!§íÏëÕûÀàÛUè\x0018\x001aù=Çïª\x000fû\x00197#±Eïê¡k»É*P}Y½s÷ëÚ	äyéQzí÷íao©Ó\x001bûÃ?HÕA\x001fñ\x000f®\x0002B#¥É£Ô7:öÂt\x001b\x000b ¨g°0,Æ\x0005×Pk(\x0003k\x0017¤\x0000\x001dpÃ\x0006âh\x0019Ð\x001b:~^ã\x00191(\«gìM\x0015éÂªòkÄ×M*¾¡ûe>×Då0Ú\x0016</p><p>[÷ESû\x000bÿB0N]7¿»</p><p>×uë¯®AÙd~(©K¼M\x0006)û>è«¯P,nYóÜ£óP¿Ø½\x0019o¸S ÞÚ@~'Õ\x0004ÝV\x0008½ý\x000b2È¡åvS\x0016\x001d¯\x0000iÐ\x000b¡ý«°Ý\x000b¸»H=Ç'²\x0019ËM\x0017}b\x0002\x0015þ\x001aÚ»Wv\x001b
ß;éuN¸3îk5\x0017ühaª¼Ws¾Áê<þ*a\x0014Û¤u\x0007úbÍÕBán+xJò+\x0013R4©9ñ&S!ÿ¦\x0014Ií</p><p>±óVG*c\x0001ã¢\x001d°Å¾°O\x0008\x001b·3S\x0003¥\x000c4\x0005ÔX·g)<÷\x000f\x001cØ:\x001e¿"ëíE% &\x0010\x0014.t?Pº£±ª]U$Â© .«¡üÊ0rCöm\x0002\x001cÑÙ\x000e`8"æ2\x000fÊU¸±ÃÅ|â¶ ³A®kB:À0ßÆ[°â­Ñ\x001dâòD[qw÷Ü\x001ah]\x0008'\x001f¸\x001eÍD\x0014Þ´\x001dÚ×^wèD'h¼¿<cv9HNºON0¶OëEáZÅ\x001b'Ó`LåÈ0\x0004¿{úD[åßÐ°Ô!\x0008Õ>\x0013Ã«>D\x0000aªb6éÍÏËõ\x0008ö\x000cZc:HL§ÅÀÃÌ42XÚBBÀ,í\x0010:àÝ.-Ì±ËyrÞn1:\x001e#ûä\x000eAµðÓ`1\x0012à\x001dl?èÂìïß¸æ\x0014Í"µjäO¡Ë¦:Jj\x0003ÒB´¥WDgM[ªÑÎSg\x000c;'ÞbMe«öLe\x000fó
\x0012\:ïHw¶ÆÇæÜV¸5Z59\x001cVøb?\x001cúC<(6µfß"0{ï_ucK04Çþ+gÇÀ¯×ÖÂ\x0007¼7ðµã\x0000!?Ã¯\x0000\x0000_A}Þ·³h©±Ë%\x0005 ë´WK¢È¿ú i:oýÎCn¹Ñ:%Ó9ø²p´gMëfOúè	pçaùøæ\x0004¡\x0007¶\x0010<©±\x0012ÞIJ^m3lÙáql\x0017÷YÆ5ªÍØþtÎ\x0016AOæ¦aý{ê¼NÒ¨</p><p>NH3éîô~VÈ\x0017jµÞ9\x0017æ¦\x0013\x0012ª9\x0008uêð¢</p><p>Í}^¶\x0015Ñ\x001eÄÚyþÂp8{ÃFÝµiª(Y²5(ÿA½Me]\x0018¡¥\x0001\x0007ü!ÁZá­lðàèzþÉàA-ñ¥íãZõÖ¨,\x0007+â=Ø#\x0014p¼ðoÊr'XcM\x001e{#¢;mÈC×&?íè°v¤¶F\x001a6ö\x0015'ð;¬ç9ö¼Ã]ª\x001eódpsxÞø(²ÄðÈO\x0013Ò\x001dÍ7ÔhèÆê¾\x0005íÈ3J´WÌ/\x0001Ê¼a\x0019{-XkÞ]ÕÓënÃj.\x0012^WRåØàØø.¬2\x000fë4(­\ÆÄ\x0012Ò­}òÌb|ªVâ\x0008 ÕÿD%\x0008ªczÓJi4Æ}óVÔÌa\x0011¨¬§«f©$µ\x000cdrbz;§¶¬\x0005M</p><p>ºÕýã\x0011\x000f#1\x0018ª4Ö²µZ\x001báJmíø&ÜkZÎ¸[µN¿*\x001aû\x0004þ-¤¡PÇ%èjI2ð"ú¶Æíq·-Êôô=4gÆÖO¬DÑí­_êÑ5³É
\x000e¾¹Íx¼-ª\x0012^Þ­y[T:\x000f«ÅÛ\x001e«²\x001bÝÚZ/|Iïk)at¯ÿL\x000eÐbT\x0016i±."%4Í\x0019²\x000b¶/\x000c"âþªÓN¶|æõ§Öõ\x001bx®}B·Ç\x001fû¤4Æ¬ì\x00188êä\x0016Q}Xañ*Dò\x0017!óè· ¨Ë¬¢hßÐy;27Á«¥OÐØ©6Ñý('Ja2Ä±\x0015Í:sR\x0015ÏÑÂí'&\x000eû\x000fªz\x001a\x0003xÒS\x0001=Î\x0000ëX^g>ïØRhq\x000eÌÅ#/j?fä<\_Ô\x001dýÛV\x0000q*vª&îáu¶¿<²µýIÑbpÓ¬n©ù\x0012ñÞRoÂLbX¥Q3Pä22,£¸k5\x0019X ûNÚrhH\x001c</p><p>"\x000cê·ó|BD\x000e±\x000fyG!u+\x0016	¼v2!Êö\x001c6¯¬9d÷>\x000chÿ?
</p><p>endstream
endobj
52 0 obj
<</Contents 53 0 R/CropBox[0 0 595.32 841.92]/Group<</CS/DeviceRGB/S/Transparency/Type/Group>>/MediaBox[0 0 595.32 841.92]/Parent 6132 0 R/Resources<</ExtGState<</GS7 6155 0 R/GS8 6156 0 R>>/Font<</F1 6159 0 R/F10 326 0 R/F2 6162 0 R/F3 6168 0 R/F5 300 0 R/F6 302 0 R/F9 318 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/StructParents 99/Tabs/S/Type/Page>>
endobj
53 0 obj
<</Filter/FlateDecode/Length 6711>>stream</p><p>xÍ=ÛnÛXï\x0001ò\x000f|Y@ZD\x000cÏäán ÀòØ=½ØÞÉN2Ø¤\x001f\x0014Î¨!K\x001aY</p><p>º¿i_ö}jíWlU+©CÙmN\x001aH"\x000fOÕ¹Õ½¯Ï¶»ÅÍüj¼yóúl·_ý½¾N>¼~¿ÞüüúýoúõÛùçÅj¾[¬W¯ßí?íðÖëùu½NÙÎ¼|¥\x0019þ§TÉ,É«<\x0015<Q¥\x0015O¶õË\x0017ÿõÏÉêåÙû/^_²¤J«"yóò\x00056Î\x0012°R¦%e¥R&ïo¡Ù\x000fïÊäó\x001dôL
¶é</p><p>nýõ/>þ:ä£³ñDÞ¾\x001dÑ_à7\x001f½\x001fÿ¼ÿ·/.\x0000Þ¾|ñtü8+Ò²\x000cñóhØ$ý\x0003Vi%î\x0007üã\x000fãÔóðn<©\x0000\x00111ú\x000fÿá\x0019«zÇ</p><p>K<`:&ý\x0003.Ó2¿\x001fp'*ú?m\x0011ö\x001açæÇ¾\x0011\x0012\x000c6î\x0003fâ\x0007Ü¸FÃ®(²´¬¾ÁÊB¦ì\x0001+óSïK</p><p>ö-F\æiqïÒ'\x0008\x0005ÈGòþ</p><p>¶¥P½cQñ\x0017ßbøðBÁÿØðyßHÈ¬H\x0007¾EÎ×\x001d|o¶ÞíÖ·Ý¬ïr½Þ=õ1f²EÓT*òDÂ{ÊÐïeÝ"ð\x0014O³²\x000bÞS9X\x000c\x001eÈ(<Ú\x001et\x001b¶\x0007/ú]\x0001ßfÏ8ÖªJY'¼þ×Rdüáã£]¼~ûý§ó\x001fÿdÛÄ<\x0001¦×B$Çs(2W©R'\x000e"K
óq9J#Ê'ÍH\x001eA\x00046·|\x0008"O[{\x0011\x000cKÏ\x001f\x0000ù
ÐÃ2ËfðOÊé$ß¹åTâe\x000e·Õ´ÀË\x0002°\x0011S-d­á_-±	¾5\x0015ôÆTµZç\x001cþ1Ów©ïWx-4,üïPo|:!ÀL·îJ|t\x000eÿróH\x0019¹µ8N\x0010ºï^#È\x0019B\x0012Úº3|y¦;çúVEÔGØw\x0011¼%[ Jý»ÌzÁ\x0016\x0006is\x001a\x001dÄÒÃ{¦'ÓHÃ3\x0011ÀAçåe\x0004\x0017gù\x0008'¦»$àöãvÕ\x001fß±Chw ¾q\x001bnæãI1\x0002î7V£«Å877è÷z²i2\x0006¹ù\x001aj
Gõ.©o7Ðl	×ëßP­÷Ûq\x0005÷¿D»ë96NÞ¾;Ò¹Jd"âþQ=öDÇ(#{4eäQ²\x0008»<)#á{WH\x001e|¥ì©T±*ÓßÄS)âÑÐíf¼\x0007êßV=Ãe 1s~/ÜÍ¶¾]ÔÛ¾\x0003ñGyô\x001eà uâqÙÁ1J@EÍÊÑöp\x0007\x0007lq]÷\x000fç \x001dTÏ½ôÃ¶g÷B½&±ÂÓ,T@`úÅ#ÏÓ,¿\x0017\x000fMº4\x0006×\x001b\\x0008ZýrwÀû@\x000b¿\x0006m>Y6ú_ZÀ\x0005ÒI½Åh¿rÜåh³¦%6jtcÚ\­oou;è\x0000ï5 6õ\x0016_X¯Võ\x0012\x001fèyyF~\x0012=¿E\x0005Ô£81{·ë\x0005rWÄCp4jTï9r\x0006øµ©ñ\x0002F¦hdÀA89Éj½JðÕ+d7f"z^}h®Êû\x0007Ð'ßàý©u\x0014EJ~$ÚPåÏOå\x0012G Ë"ÍU'È§\x0011"\x0002Ïn±(<\x0014§äÔ\x0008[ÁºÈØ\x0005Hf</p><p>D±êD>edTº\x0005r\\x0005"­\x0002QÃ½</p><p>d¿*ÓïK\x0015<¬JÓ!77 5né:aSÆ{ÊÈ®U1e\ÿ&ØªÝU\x0019 ë:dº\x00036«lÊòà\x001fYEòr\x0005"¾\x0012z\x0014¨{Ï\x0000>~O\x00189Í\x000e¾ ÂY\x0011ZtUajaq\x0014öõÒÌÖ\x0019¡àñçM|Ôú
ç&=C´Â>Ï¦üÜ ÏµìçQ£ÆÞ8¬}²9÷\x001e?\x0005³]ÙVvÕ¦\è·çÃO\x001dÝ\¤ùÑ1Ú,ë\x0005ÄÕlÁ9\x0012Kü3ß#\x0015ý>þü\x000cÏëÕ\x000eþgÌÆùèº¦?Ë9ü\x0011hNÎGoÿ\x000co¼ßr´¬ï\x0004S\x0013b&Ð\x001fÐÜq1ªQB÷ÝÜâÕá\x001aÙØ\x0002^áÏ9þBê-|÷o©à\x000cÍ´ñ9y\x001aßÝàp\x001eÏ[O\x0000\x0015@@ó®uo­_+Ü	À
Ç¢l®\x000c\^AÓÖÆÀÖ5­÷'¸:¬\x000e7¦%ü\x000fW\x0013÷\x000cÏ(9Ä(»=\x0001¢\x0002\x0012¡ìD¯>åÄ#\x0005%j¯ºí	\x0000\x001ds¤)3N¹%\x0015¼YT;r®I!G²M4ñGJ\x000eO¡3vÁL\x00063M/á±¶hXªl¨\x000c\x0013\x001e\x0016°¦©£bgSËL,£Bß.i8®k>uÄXÞ3\x0017\x0006¢¡ÍÄ[T@@/"sg»2Àd\x0016Û¢¦,áWnfÌð\x0005Kü\x000b7\x000b}'ÉÑ®Ù±\x00068¿iÙ	ï_ú'2Ô\x0016{\x001e_L.\x0015K«\x0013GçÅÕ©ô5][Sg¡´+bRj´ø0\x0004\x0006Ø#J¦jA\x000f8KïðªLû\x001dð´\x00101áæ\x001có\x001drß·À\x001f&"#q\x0001\x0011çk¾pxÏ¸\x0017\x0016°ÁfÌÄh»¾©AK£ÆwÐ
±cù\x0001Û\x001fu\x000cýöÏMY¾þ\x000fÀ½\x0019°mÖ\x0005o[£ªüx½Gmu[¯Æb4 TK§\x0003
ñ5¬ÆþK?\x0000\x00022ãhh" M9Ù*¿ö¯\x0010J¸Õ5ôPÿ\x0013\x0011ÄsI?r'£Õ5ÔC§ÄÐíP3ä¥½Q:Û~ßSgÀXx×Z\x0001\x0015Ï(µ¢mHÕ±þ?'SÍÎ×%>\ºïö\x000bz8fÜ>ë{o0Y¥U\x0007nZÿ¶\x0002XUºÕ\x0015e°	ìª´gÄ YæUN£\x001a\x000bhË3­íf\x000cíÙÔÏx(:eZÞ{\x001aº¥LèZ-Îòüã¸ïu®RVvMûW\x0000¯Î»à
à\x0007Ò*»öÐè\x000cè¹ÓÌ\x001d\x0003Ôª5Òýz»ç,§\x0006t\x0000Ö[ÔÔç+²ù\x0012\x0017®Q}ó'äÊlz¸Y\x001eð\x0000éÄ9çNÛÛ¶ÎÖ\x001a\x000b}é\x0010Cc«\x0018ý\x0003®öÐeÿ\7\x0007Å¹\x0004|[¥Ò§\x001cD"\x0015c\x000fÖBÄ*a
KÂÞo¼±È2Üþi\x001aù\x0002ÞÀª¬C5j@)C(Ú\x0018(VÖhØ|¯E*íÅ'õòÂ\x0018ä</p><p>Ë·Õ±õí0¨Ua²À\x0000X:_ÑFÂp?DÞSY0eÀe«cÊ\x0017ÚèX\x0015ZFY.0¦Ê`HV¦\x001b8ºi¦ÁÐ\x0014øÝ¬VIv3é	ÃiM¦ÒN¿g¶\x0010ÚÊ¥J³(7kÉ-$ÖTS·XÒ\x0008=Îpz¯Þï\x0003\x0019\x001c\OÜ¬N°ñ%mÐ¥5÷ö\x0011ÓgeÌ\x0001¡1\x0006V²Ð}¸¦Ï¥\x0015ßô\x0006im$å-'-û¯Ç?<FÎhÒ03\x0017Çô¶6F+\x0011pùK?µ*×Æ¤Y\x001bV`Ì\x001e+ù3å-Bfk\x001a\x001bVñÆÉ\x0017½Ëò\x0015Éòñ}Ö«AönaÈó*ÍÄ7´0<\x0004á,\x000c
è¡\x0002Ø·`­ª´ì÷¦A\
	</p><p>l
\x000e*EÐr\x0005®ÝnM\x000e(²\x0016{\x0016ÚßÔûîg\x0005Le×Dn\x000f_ÐîþÛ|\x0017	iµµ D6×6\x0014'\x0008¢ðÖ\x0015\x0012ÏvÛù\x0012e5z¢\x0004Ôhýé®&ÓÀ\x0017ìñP+k.!íæf¬m\x0019Ó	¨ðLèKê	-úËÚZ<Ô}ëküqgCö\x0010¼³Æï\xN\x000fÀ©],UGcÂòÜP\x0013V¡b8DÃ,ÅJïE¡öÖ\x0002?î÷¤Ð\x001b\x001fqÝùè&%@Ü/ô
¾·\x001bø<å\x0014¶ÊRöqlîF@×LKã\x000bÄä¹Cv¢[¼ó	n¸4ØíÁ<>Bä Ã ¶»;\x001bg£
±ø>QÇÎ\x0010Mó~ûò°ÕæG\\x0002év,Ì,¼µQîÆÝ\x0001­\x0007ëí¢­5A«ký"yÍT°¯°2ªk¯\x0006Ç1k¤\x0003Þ\x0010VMæãÓ\x001a'é0Ý%L÷\x001eþ¢!\x0019(Ü	qÿÑNG6kÔ;·ÔÚ­ª?oH®BÙÿI`XUç\x001cÀ\x001eZ1Ô7;àõïº<\x0001oN«pk§\x0018)â3Sú\x000c§Ã\x0014Ñg\x0002rb°\x0013Â¦õ-fÌCAi©\x0002·½×¨­Õ\x0012«¬\x001eI'Q\x0013°6\x0012\x001615JÃ"wg+LèÈ&à\x0015 ©,!\x001biÈºL\x001dþÆUk^ÍÃ¡5\x001dÓÚéj4	çxÕÚÏq\FØùä¥\x001c @n;2(dn!Ì\x0014¶úÕVÑ\x000b¿\x0018CÀåßFK?Åü²\x0012\x0003Ðc¾7\x00127ò°\x0011FÔ@Ãnnly2p"}AKbí¹>\x0010à9F\x0016Qp¹D¯ÜbCQ¼\x0000¹`®'ë+µ¸ZïÇåH¿«MòØütÊø\x0006A|·®_Z=@'ó*\x000c¦HÝìùFà\x0002*o:ZÎñéµ~öìäçÄB!åÌÍë=á¢\x001cÿðwúÇqJwrLÄ\x0015£\x0003
}ur\x0006¹1W[éÍÀ[*\x0002æ¶«·Ë5q<vf\x001d\x0000Â6pÐ+Ú]¨MÁ$ôï0â[¯:>×ËÀ1k>\x0010 \x0018îàù¹µÚCÛõK\x0018	g&Dµ\x0003vïÒí%ÜqV¾Åé"¸Æ0o-­¦ò]°)	ÓQDTÝã¸²A\x0006\x001fC7'RV'ílYïZÑÄÓÎÌÛ2\x000bloS\x0019^7ÓÖR\x0011\x0018ÓALI¼ \x0012
ñ¹£\x001dpX\x001dZ\ßÂO«¾\x000e\x0011e\x0007\x0012t\x0007"¹=V0ñá»³Z Ö6VW°#<J)¦eÏ«æ\x0000»3aösÙhrmß&r\x0001@úwÅdØ´c M&í÷$\x0015</p><p>Ë
t\x001b°\x001bfÐÐÊ\x001b\x0008/e(\x001d5dEväÃoüðPC»C\x0015ÕÐ\x0006å¥2v!û?'¸jeÇÌ\x000cáÔä\x0002kqô\x000c/fâÍûMÐ<û\x0003YqO+\x001eÐ\x0015w\x000f\x0016=$</p><p>GÓjî\x0003\x000b[_N]v¬IîÅ\x001d¬vÃ]\x001a|®½7ö¾~ÏZbIª¥Ïÿ¥ßÉeº\x000bú[<]\x001dñ>FêùTbÛÕÌtG¯)\x0018Ï1ÕØ&Ó"y©\x0013Ï5\x0004a®m3JÕu»>m½Ñ9¶Yd"(\x001f·ôïËÜæíêv0xe_Ë4DçÂ¦ìê\x0001Ydù&¹éÁg\x001a7çÀä\x00123ÊH¾Ôs"`\x0000é4o.		=Î\x001c\x001f!òÒ\x000f¶w{ÀÐîs^xÝ)âÕzurÂb·\x0007!Ù¯k\x0012\x001c÷¿.~'ÕªNnP¤ \x0014±«\x001d\x0019Ø÷Û3Å¤Jóò~\û$¦Eïb\x0002k]\x001cs\x000fJ
)Ö\x0001²&gvS\x0007¼¿Q\x001e©6QRåÔ¸kë-Á[
\x0011o\x0018GS\x0007v ûZ.(²Ö\x000f\x0015"MÒ\x0019þ³|(b\x000c(\x0003!¡\x0003C\x0013Óµþ
Sû}\x0014\x0012áCFÆ­TòÉdZý%ÅY{Î´wfr\x001cÍÔòdAo7®Å\x0002§®\x000e1:ÝVVX ¨cÌÚõfP\x0002í{·0újÿæ\8+E\x0017\x001aZïÇ	Õ\x0006ooÊµÔDqÌ=ìaß¤Éæ.)ÆØH\x001bé3\x0013+Rå6!S[K[¢¹NÑ;>Â¤l[tDN4\x0002Z¤«¦Ð²\x0002Ï|¸p3ÑJJZ¥ÆDÍ0L"]J\x001d¢Õ\x000eL\x0011>Æ\x000e6\x001ciºØ\x0014\x001e\x0015\x0004«x\x0013DÁ(\x0019N
FÖ)°pg¨\x0010\x00117g¬c½{eyeÿ,/¯°:â1Ë«cyq%GÇááÎ¸\x000cmB§ö
3¦$îMX¤d\x0013'àlRÂ?N;\x0017þÒË¢Ì\x000e°3T¦aË\x000b\x0005\x000fí\x000bâôóvÀ\x0007½ \x0007\x0000-õ\x0000\x000cYa¾Â~¯\x0011C\x0018DÿIæÐÂ <£~Ì6®;\x0011³%\x001dAÆm ñ£ÞÌÀÑs$J\x0015bÛìÆ¸úgm\x0005±¶ø^ì¿Ì\x0018¨V©èÜûh\x0001ÇÈ_Ðè§\x0004tÀKÃ¨éH½Í9~^[ð)\x0012\x0002S±£1Á¦+Òd,øèßëÛçÞôïÔó\x0011z\x001dØô¿¢´ì\x001cýúÓ/ãÒ®¥ó\x0001ÝP(ü\x000f =\x0017$Æq\x0019BZWXÌ·\x0003ÞÅÔM\x0010Ùï¬-×u\x0012]3#_\x0016Ã&ÂqÅC\x000f1?1ÎÃ\x0015%ÂÅá\x0001q½Ôqö.O&¤Îx_Äù\x0011åg3M9µûÞmWß ù«pq»&:°\x001cóì<ó~{áÑ©É7Y­Ã	TÀítðqåÇ#Ê3ÍÚ±hÞW\x0005c:f}x_ÏßgÐ\x0003#\x0007\x001få(àiv¬ìWä$\x0016£¿[wo3=ïLÆ,GüÕÓê5F\x000f£äiÒÜ\x0000_æX\x001e¬\x0003Þ?õ\x000f\x000fkP\x0015Ã/&+,¦\x0013gOðbÒI\x0012YPJÆ\x0007ÖK/0)áO</p><p>ì\x0005+e\x000bë¥\x00166(>ðÕ¸ç²¡öè\x001bpàÀ\x0019\x001e¸ÊÝ£Ó\x0006¾ÕG\x0018®ôlk\x0003ãÀæÎµ	4^3&áiý( 2}KGL'9âgh¦-ò\x0010\x0014×i\x0007k0kçö(\x0011C.Ti§(\x001b\x001cÞ,Ìô­ònNBF\x000fJ^÷oË\x0004nuâÐ¿¨WÉ´ìçÚ+\x0017î\x0002òÑ×g¯Ê\x0001$°~\x001c¥\x0001b!èGá\x00111¹Aa\x001bîN]éH\x000c¢U\x0003xAÍ\x0010bÃ\x0003Ù·\x0013^ÿì\x000f¿_Ï8>í}ïGÖV9ÚÎ7\x001bíû?Ú¼(Ó¼sv·»\x0004#EðL¡NÅÔ\x0000)Üæ{\x0014=ÏwÌ§z·æaÁF~\8ëC
fÍë\x000095/\x000eïÈ×gëÒgË@d+¹AörÎM`óq,µmP9°¤{\ìÏ	::Yu\x0001sæ6+=h(MñÄòÅ\x0013\x0017KwéåÇ.ÉD÷\x001d¶n¸	\x0010æÌôÐÌ-í¿\x0013ö\x0018d?Å-\x0012 :à}Å cQ,)\0Ì ÚÕ:Ãô+\x001dºö]ØáÐÈ!m¨xBïb *\x0008\x001d¨
 Â&âð@\x000b_KU×^'\x0013Ôü³©ø'rmó¬Â\x001a\x001d\x001d8yè\x0012\x0007¿Asv¼¯WWÉféÌ	\x0014)®c£µ«\x001bqþ
Ë$\x0007E/®+×ðf*qPÊ¤\x0013Å5ÝA·ï¿ìQ\x0016Ñg[lÉ²uÂ\x001b Ø\x001c\x0013haîy|1É ê=\x0015\x001c\x000bÓHkü\x0016©à\x000fA`¸Tð\x0006t¿fDÝYµd¶ñiltºe3ïÉ*\x0008É
§`2kW°Ùë|ex0ÿR_Ñ¥ªnLc\x001dNv³\x0006ØëÃ¦¶åvjá\x000f(¹f7·cºud\x000e\x000bÕÌé½\x000cYá7µâÓ\x001eeÈ=ºÌ'æM¾øh5lÛÖ\x0012ò}\x001eá2Gºþ BZí¢\x001a"\x0014\x0014§a­ca1^»&3ÕTY\\x00184å°]BDá=ÖÍ\:Ý&L\x000b\x001cÜm\x001c}MS[$¨\x0014&#+\x0015\x0016{ESÝ\x00161i×¾1©\x0003DlH,h\x0010_Á!\x0012.</p><p>ì÷¯\x0003À«°vsÏãq*öÈ/`bUúÛ\x0017ßU=\x0000\x0001YU\x0008=`UíLñ5YYçK\x001dSx\x0008"\x000eeá</p><p>\x001fÀåö±yN Ü-ð\x0013DãÊ\x0014>E³ÌÀÉPËPJF ÈöQ>º1Y\x0014iAaú­XÐ©0iâM
\x0012¶6ÛÂÚ¬µØ¾ÛÛÄ\x001f¿I\x000ebayl)ú¿\x001d\x0006¦}¾\®)æzjsLä$Æ\x0018À\x0010,èS\x0013qxh\x0011ö\x0013®Îvà,cÎ\x001cqæK?5ì\x000etÏF\x001fqWª»Y¸L³º\x000bo)	>lo+ñ&V*¢Æ e&iYIL¼a£\x0008Og¶</p><p>÷\x0018ß8k\x0014¡ó)ð®\x0008x\x000bsã\x001c´£3Zqöó\x001ca:Xëã\x001aÐµ@û\x0008_ôµðãÓ\x0008
!ú\x0015Ý\x001bÄú7mÙ\x00015srL#e­-C}\x0017q\x0000öÄgYªIôI"8\x0011¥I~Üoþe\x001dô\x001a\x001e°61uöªt·r¯q\x0000\x000b\x0014Õ[o½ÙQ#]öú¸SA\x001d_ñ¨TÐï\x000c</p><p>øÙ.jôÕ<XÎu­%z\x0011s¸}¦&ÞÒ	òæ£\x000ftg7ß¶5ï$7©Òæ®C.73Ð\x000b\x001bÿÆJæëL´êý[éuKçÞã¹ª\x000fÍj\x0013êè]\x001fäwêÊ&êÛ\x0007\x0015t~µ¡Y?Ã</p><p>Ù\x000f®ÖÙ¿Ñ×¬ã1ñId*­:á
\x0010\x0000·D\x0017¼Öf3óïËí\x0017 fÜE\x0004\x0008¯´ÍÌ&rßÐ°ÿ\x0006U:ÐEÁUÐ´\x000bÜ\x0000*\x0010:íUßÃª@üÔå	\x0015\x0008ã++õ
U  0</p><p>Ô\x001eø×ô±ÇBØb\x0018?\x0015\k-\x001du¨.>ê\x0014_yH\x0015Ò9ë\x001aÐÓ"U¢§B¡ò\x0018\x0017ò:GÔà\x0005±ú\x0019¹õp¶\x0007\x0017:>ªQI\x000bòÂ¸\x0019:ÄÄÎ<\x0015È¸-\x000eÕpÒ\x001a\x00010üZûY£ -%I\x0018 -ÛYã%ks*ÃÑa®Ù4ì\x0001pÕnîë-ë*½å 4gUÊx|MI²LQÿ£\x0013\x0000û=»@ÂØ1Á
ó\x0003¹læâï\x0003	µõêÎÕ\x0008y\x0005\x000f+ªÄE<_²ð&y®Ãl9Ö\x0016E½Û\x0016$íFÚbñ<$Õ\x001eç¹\x000c</p><p>RÒ·^@o\x0014\x0019ãW ©ìkÿ8Â\x0008¹\x0006]ÿhÜ¢ü¬³Dk\x001a\x0012Â&_ä÷!8K²\x0018Õ8Ö´\x0012Ù¨\x000bmêª¥\x001dß3#Ü\x0006E é°\x001bÃuwp¥í\x0012åõÜ¢0ó\x001a5÷ÏC[{(³\x0016v©m\x00119^ú$Z+Ü*Ñ~\x001cÌ`h\x001eÉ0ó	pgØÏu\x0014¡?Dm\x0015#EWº_©¨ÿ\x000f¹2ü\x0000â1iùP±Á¢:@\x000e\x0016Ý\x0014[Â\x0017®r9\x0019GêÝ©\x0012[±l\x000f[îÝi&aÒñQ\x001dI:_¶hÎæõ¬ß|Ü%ïþðËvr\x0016ÍÈ/Sw-Ñbu³\x001dãwå\x0000%hyÉ1\x0004`Ý\x0011GÅ\x0007:à\x0011oE£Î\x0000J5Çrw\x001dp=¯ãÚðÄOiEÕl®°tW×¹ÀÌZÌ$Ë(«2R*Kî¥;b\x000c*ÎqÚAsºÇ¼Q\x0005\x0015¿%\x0002rgãkIR³XÏðC\x001bêÜ@MÂ«t'Ï¥yºDÎ\x0013-¶Ý\x001f¬éy3÷\x001aÚÆ²è÷´)\x0018\x0007µ±¹QñtÔ²)ÀvmQEISBÄKaV"IlaÝqn¿%D­´ÊW¢\x0007pØ>7+\x0010týãE¬H\x001e4þ8Ò¼µn¯÷Àq\x0019ýt\x0007<ðgã+\x0012ªX\x0012fÌ!U8ò{¨@jº\x0012i\x001doÃë}µG?
Õ</p><p>Ô²:Ê\x001d¾ÌI¢ÖÕ2é¯¹Á \x00182[;U!\x001aÐÓ\x000e ÛÖ\x0014BwØ,ÝÌ·ý É\x0017·­~k­ëÄ­Õ~· Û¿Î\x0000YÎ·pñ\x000eq>ÇêL\x000eZ;ú0\x001d JN\x0015iÙ5­Oøþ\x001fE§Ò</p><p>endstream
endobj
54 0 obj
<</Contents 55 0 R/CropBox[0 0 595.32 841.92]/Group<</CS/DeviceRGB/S/Transparency/Type/Group>>/MediaBox[0 0 595.32 841.92]/Parent 6132 0 R/Resources<</ExtGState<</GS7 6155 0 R/GS8 6156 0 R>>/Font<</F1 6159 0 R/F12 336 0 R/F13 335 0 R/F2 6162 0 R/F4 6171 0 R/F5 300 0 R/F6 302 0 R/F9 318 0 R>>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/StructParents 100/Tabs/S/Type/Page>>
endobj
55 0 obj
<</Filter/FlateDecode/Length 6094>>stream</p><p>xÍ=ÛnÛH²ï\x0001ò\x000f|9´iö=\x0001ÛQ&9I²¶\x0007ça2\x000fEg´°%E¦\x00163u>i\x001eÇû¼\x001fpªª»y\x0013ÛV¬&ã\x0000$²ÙUÕ]]]·.\x001e¬ùõôª\x0008\x000eObzõ[>\x000b~9¼\®~=¼üc\x001f~~/¦Å|¹8¼Ø|.ðÒÛ|:Ë×ÇÇÁéë³àëË\x0017Q\x0018á¿4MX\x0010\x0005*S¡àA*Yñ`¿|ñ¿\x000b\x0016/_^¾|qø\x0005YÅÁåõË\x0017Ø8</p><p>XÀ\x0012\x0019J\x0016$Y\x0014J\x0019\ÞB³\x001f.àË\x001dôL
Ö_èRZ»tþÃË\x0017¿ÎÇ\x0007jt2>\x0010£\x001fÇbô\x0001~óÑåø×àò^¾\x0000¼¼|±?~ÅaÔñ«Ðªc\x0013ø\x0007x\x001cð»\x001fÆ\x0007RÃÅø \x0003DÄè=\x000eÍÿñeÞ±é\x0012;\x000cÇÀI¨Ç\x0001GÑø±QFÿ\x0013°C\x001cw¾\x0011\x0012\x000c\x0018wø\x0001Ùò
ÎQ¿3#â(L²ï03"!Ûaf~ò\x000e8á¡`ßâDñ£S\x001f \x0014\x0010\x001fÁå\x0015°¥H½cñÇß|x æßF>÷â0Þú\\x000e&?\x0005}ïtY\x0014Ë[÷Ö÷f¹,¾õ1\x0016F²%ÓÒP¨@Âs©¥Ð÷2o\x001dðR\x001eF\x000bÞ¾;X\x0017<\x0012ð=è2°\x0007OüÃÎ`ßf\x0003Òe!sÂó?"â»ÓG\\x001f\x001c~D~ÿéìÝë z\x001a\x0013Ë\x0000\x0004}\x001d\x000bP\x0006JC\éÎU¸çòçm¸±\x0008\x0013¹\x0003Üýæ\x0019Èå
°ÀÏYÚ\x0004\x001bò\x0000ÿ\x000cèò\x0006ÿ£_ð ðÛ£ý xR</p><p>\x0003Ðx6:c}áÇ±\x0002m\x0008¾\Nj÷_ÿL_RPUÔèÃ{h|Fúô;TX>ø¥K\x0019rµ;\x001dïÇþ&?¡\x001a5yiqà\x0017\x0011iT'\x0017ô^¿»øè\x0019c	«M|ÃÈ_è\x0001¦ÁÃ\x0001%ÔX6ºø\x0008?&gH\x0006µxcçâ\x001f?ûEXEY¦»#<¹\x0018§O^-\x001eWÈÂ$Ý	ßKË¼~4\x0002'ï_ÃÿÄæÈ0È(\x0011Çx÷\x001e\x001b'£×yY$!K¾\x0001qÒ9­½v­½Æß\x001cÉ\x0001¶>©(ÛO0Ñ\x0002\x001ar±3¶GQt\x001c{\x001d/\x0001k?Sß0^ï/pÙóÑ)þ3iFðµ^ï¾1¹øðÎÎúçµ%¸vÆØó£"ÐpwNÃòÝ1g¨ï¸Cý@¼Oë\x0015§\x0014x\x0014Äá;óM/\x0014Zá\x001f~>\x0007Ùïyù*X\x0010lw=O.\x0007ùÌ³ÝÁÿXúzÎÉ¯\x0000KC
QJrà÷ª©¹ÂæüçñL\x0019¶+\x0001zïQjÁçy<e\x0002í¾ÿ.>½+ÇËóØ\x0006#\x0011J¾\x0003þz]üô\x0011æ»ÔN`lI ÂúÙs;\x0008d¨Äî\x0018î1[V\x000b{²Õ"Ûæ1\â8
£]Èà!\x0003î\x0008÷6c¶\x0010IâEßÈÞ\x000bf\x000b\x0003cUìÁ¹ÞgÈ^ó»Õòn>NF\x0005râüºvÉÑÝr\x000e#·¿;}á\x000b0ëzZlèqû¤¹ß\x0001ß\x0016V\x0015\x0012nMGpÅ¶^h·*¶¼\x0007ó\x0005ômo\x0016FöÁMêqý×\x0018´\x0005swNÞÞÀsù-t\x000c1\x000e-UC¬"XÞ;\x000cñt\x0008¯\x001b \x0008Gé+þØ\x0000v÷Þ±c twì\x001es.ð§-Ó®Õa)ËÂèAÿBÃÃ`B\x001c9¶×\x0018©\x000eDR\x001eÊ]\x0010Ùwº ËB¾\x000bä\x001f§ßE¬WÍ=\x000cÆÕzìs«bº¸ÊõrJ·Ø@ãl´X"÷^ã¸ÁJ\x0013xSoïáëâ\x001e\x001f»îæWvÍ\x0012¬ùÚ;±=N,È	"Ö\x0003N°²\x0005\x001bÄ\x0016q\Ü KlD\x000eþ\x0004±\x0003w\x000bØåuóåç;|vý¯û~¼° »<ÆL2¸0Rð\x0010\x0013D¼Ñã\x0002Äà¸¬¾åf}·\x0001J}O\x0011\x0003\x0015,GQñ¹ñ\x000b>w#Q\x0014(ÖªùMÉø¯ûÊ-°Å«Ô	Ò¿+Ú0\x0003ÞÉX®çèÂÍ\x0012vC\x0019f¹þ¼Å%Ó6ß6ëq\x0006?}ãÇ\x000010z\x001cøí'Tºá©0UýÜ	\x000fVpÀ;'\x0011¼Ï\x0004¿ä8Ã[êø@Âg\x0016Ã÷Óã\x0003ßÓc¦èwln2ÀO@Ó\x0008¯Ã,1\x0017¸¹P>l;äÇ~3º&uuXÉÆºa¶¤\x0006¨ìi\íó\x0011ugïVxeÇ\x0010ð]h8'>§\x0008î1ãÕlÂêÀ'ú¡¨7D½\x001d\x0004²W
f~J¤Gµ.ê}b\x000b\x0018h¼ÊYTG\x001a\x0011¤ûuÂSs1\x0013\x001a8ü<åÇ\x0007Ü\x000e^rÌîd¨=¢í¬dSI.¶CÒ\x00136×ór\x001a5æHNôÜ\x0003êyMª14ï!\x0012K`·¦KÃ\x0006fVíÐ OiêÍZÁ±g\x001aO@4æÑS§Ú|ë^\x0013=oÀ\x0015æ·!ÞfÆ¤ÅËõþ,;Øç\x0000\x000fY¹¸XÙ¨Ñ§]ÆÔÇ±2Ý\x0011±§\x0008Ð¤UX>hÐÊp\x001dS</p><p>¦¹Èö\x0001×)¡a×B¢Ñ\x0019U'&Ò\x0002o\x001cÛáy2wº\x0005«³P¹8nO%¼\x0013^BÎ&\x0007¼0Àô'ÜÞæ¸y)¨uAøï\x0015ÝÔ»Úe°Ë0> N÷&"E±-j@Ø£Ùè¾~¾ñ¯"¨Pr'ì9ØÄwôgÕ\x0001­\x0018,</p><p>;¦\x001a·\x0019\x000e"ª\x000eëËS°¡ÁÚ¾×·Ëi(òõzùlW«Z¼ÒOÝLQñàºÿ\x0006Xü±\àÝl4Õ×ù\x0015Í\x001fêçÔ÷Í
è'ó</p><p>\x001f\x0015éÏõý</p><p>1[.H·/áI¦¿/é©xT`ëh´1Péæwüju\x0008ûÉå\x0006Téµn8Eì7ãìð
ÏÂ,Û»¯c\x001a¡\x00033#\x0005\x000e\x0004
Ñr±\x0000§èCYçä\P\x0001N\x001cù×ºÀN\x0010.,ý+½\x000cÓß\àþ«\x00072</p><p>\x0013^\x000fä\x0011\x0011g.xF+\x0010{Ó5:ÁìzÀù½ÉÇFèUlqS®AÓ¥xÅü8{;flô3,Ã³·ç¯èª\x0018¨Ð|röÖ´Ë\x000bº"F)]PæÁ\x000bxðÓ8´åhg×@iaf9Ò!b¾ó<\x0016\x00191cjËFÉWëû; UDýÀ³$ÏT"9<~A×"~'\x0019¨=\x00169:B\x0003\x001e1WÆ\x0013K\x0012©v@9ÞJ\x0015"CX\x001aª6\x0004\x0007Ð9,HJ¶ýoÌ\F$í\x0018-ÿ\x0016\x0016}¹à\x001dE<:Õ\x001376Aer\x001e$K
X\x001bE§Q¥E¨~ÅÇâ¨¦\x0000ÖU*®¥"Xª¸Öà*¥Óvaì²J96ÕZ¥¾*­VS`ëºðÄöI8y×ª¸Dgcò¦_Æ\x001fV·½.fÉê}º\x001cIÒ»#If\x0002³·\x001dI¢7G\x0003¤ÿef\x001cIÝðÑ%1¹6ïª5 Ñ±$ËFX#²tyT\x0016 ¶\x0010?nþNKóKÚí"Ë"Ìâåv¥èå)«å\x0016^t\x0006'#¶bqi\x0011^
Ã1¶kÍX`5Ç\x0008¶oÙZ2³¶*úmN+ã²æW°H«Æ\x0010=ÈëX´è{ç\x001b×
AL­
^ÇbWçJ´ïF=èºÑÔGT[ïÞ¥b<t²<i³Å³1ådavÕ\x0016«ÕÍ\x001cU/RÂî)pÀX<½$²C\x00176rÖ¦ÿ\x0007kT!Ha"Ã\x001eÌÊ?¬Ê\x0006êÅ+º´ï>IgÓÓ\x0015¼uasÍàò§\x0011¤\Â´ê\x001bv0»ÿ'÷\x0006ÈêfcµKÓ\x0001\x0010ößMù°!Xs	2B.îègª[b,GY\x0010¿ý\x0007\x0011¢n4ÉS4À~\x001f³g¢\x0010ÊXáö\x0014ß,Á4h¬H\x001an°"oÀxT3çç¤\x0016o+¿-]\x001eXm ýUÓîF5ÿ~&ì¶g½ës±À¬(\x0007±=\x001cLc<ëæC\x0005ã«4GVøïpåÓ¸Äú8d\x000b\x0017ÿ²\x0007àõpp\x0000\x0004jæÛ\x001eècÊ	\x000f\x000f0®È,î\x001d4OBéd«\x001eH\x0015Ñ\x0003ðh/Mä©ú^-7kíãºBq]LQ¤ã\x0002GqP</p><p>Hhye\x001dXÔÛjíë,Ñºq\x000fÍ?®×¦¯¡Íê\x0007b\x0014R1\x000cówÄ(ª¸\x0003Æ\x00160hÐ¥\x000b5\x0014 ²L8à´\x0015&0\x0016UC««Åâ2ºcñeü,©_hêN-\x0014£I-\x001c$¶£ e\x0008Aén¨é äÚ\x0014¤%\x0005æú¤\x001eÄháEûzô;
ë\x0014L0á\x001f\x001eqï</p><p>\x001eÏX¨\x0003d\x001f¾LâáM7\x000bê\x0008£6º
\x0003X\x000b½\x0015v,\x001eË=í°©æIÃöi\x0004Í@bý±7ÍPá:\x001d\x00072í¬#XNÖyº\x0016>ë¼V[!qõá\\x001b%¢ÚhHÊhésPÅD§\x000bÛ\x001cC\x00122/<XéDÃÒßXù@\x001c/j\x00079ºìfù¿ÈËj'ª\x0016yP¬A3ÿË\x0008^ï,\x001fIt_9\x0008¸-Vú_Iòµÿ¬\x000cLEw#ÕÃ ÄäAwÀû{/:­\x0010¾éër2©§9²\x0007XI&Ù</p><p>ìá2Ý¾Û³:qºtîr9Å:P¸\x000b\x0002=ðIo@¯æÌÿ\x001aÈ":Mëgò¥\x0012k#\x0017årü"j¬"¢ð\x001d5¯¬iDÇ\ÛÞ E\x000fõ¸2L½¹AÉTLë\x0011;´c©ÁQìt$á¦7µàJ\x001f6	êìÝãÐM"ÂX¸àõaÄa¸àÑ>176{¢urÂÎf±Éõ¼Pô\x001af\x001aÜúwã¨p\x0017ä#Ybj¯Qý
\x0007\x001aþêæ>1únxô\x000câlvGl;j\x00054®)w9§dÜ\x001csrSÍý¿M)£"lt\x0013¬Gò2	5*æè=
	ssV7ªg\x0001Ô\x0013Eè\x001e¦)Ðé\x0004;ÙÆ\x0017ã};J\x0012ä:\x0008ï£ö\x0003£z\x0001Ýðú¨ý °^O'¼Fí\x0007±o%.\x0015_=0¶}Ô~HC¸àùO>\x0010QJµ&¢O°\x0008½ï\x000ex³Ü¬\x001e\x000eeòC\x001fâ\x001evöö\x001cVT2ú\x0004Úê\x001dg	i	Ü6E\x000fÒ2
\x0007sÉÁ~\x001cnÊ¥`!sÊÉ\x001eÈ\x0013"d©S./Q>®élEéÞ\x0016B
B\x0007\x001aà+ïha4;Ñò?\x000c</p><p>öÞØ	Ïÿ4+.Cï³ìu§\x0016ir½#Ð)¢Z¸geV\x0010ÈOc¼f÷´ßLÉ°5©3Ô¸\x0019'#C\x001dûä©öêîg´»Ä©4 ½SÓk]8Akè\x0018\x001e´Ú\x000f7±ª|SfAs\x0015\x0006|ß"]\x001d²\x0013«\x0007¤®aëAVgY¨ðz\x0010L`*H>\x001c}\x0012${<\x001b{
Í(ò_\x000fÈJ\x000eKµ\x0002Å	¯Y©ºÚpôÅ\x000fqK¸À\x001eô\x0016eÀó\x0010Âú[N</p><p>\x0002'#æ_áa \x0005¦±\x000bn\x000f)¨²´\x001cðzH±\x0005

H\x001e'kÛ\x0001Oï5tf\x001dY1n¤.½½ø4FACS½Zß£ú{U¥´¹ót¿nÞ.±GùOéÿÒ/m\x0006³{¼ÊK+µ\x0011âKFÓëq:º¾_#\x0000ÿ²="YÛ5$R</p><p>\x001cH&\x001c\x000c1\x001f=ÀlÕQ\x000f\x001aÊeV #Nh'Hjý20[+r¯§å|,É×ÿê»'ó[á\x0011sLØJ+ièÖ-ÓÇ£{rAN)¦lR§áº\x001c%þ5oÅXø×h\x000fË\x0011lêX¹àù6\x001c¤©Ì£\x0003»éû\x0013¦Qho2ªË</p><p>Ôe4¸r=\!ßÖb\x0006¬\x000cÏkÎ±¸å\x001bn¶\Z9rÍm],\x0001é¸\x0019=Pü\x0001O¬ÿëåôÛ\x000cárO\x0007æ£Q¦ásXX2\x000b³ípO]OT=lÍ<ÆR\x001a\x000eà}ì]\x0019IËnx=lÍ"Ã­y0ò ©r#åð\x0006\x0019®Ü\x0003L\x0017ÌI6\x00024ÿK\x0017\x0014t@ò97Øìr!ÃÈ9Þ=Ð'âP>2¿5­çt~ãSèÁ·J9\\x0011u|S'¼ÿî\x0001Â8gúºÂà±÷0¸@'¨Ý,¿G\x0018|\x0017\x0004ú\x000b7 Ws¶òÝ"b­I\x0017¼ê`\x0014eÞeÇÝiEíãõ­QeVSýÌTjO\x001cÉsq»IãdI\x0011L\x001eÍ\x0010ô´ÆR<éÒÌ¨å\x0008,\x0017¯Ð4\x0011þµ
gQ\x000b>Bö¿nx=ìG)Ç½áèK\x0015CsÀmmEö´l	é¥bwÂ \x0018È$Ö\x0019l8¬\x0007{¨éQ¥\x0006£Ïz°\x001dÓM\x0019=&\x0011\x0010¦\x0014´Kté©><z2NÈ£7\x0018åv²\x000c6³i\x0014:åF\x000fäÜP»/c«Q~÷Ódv»gT\x001bx\x000bñ'ÄÏn(xÆtú\x0018&ý¬UiÊ{vmBl
\x0017£u\x0019þxÓz\x0017È	Õð_ò\x0007ÃptrÞÚ\x0015Ft+ç	ù½\x0013ª\x001c\x0003ÛG¬*&IÖ
¯õÅ\x0015ÉÁèãé\x0003ãiÙ¨\x0005k\x0007&í\x0018	níÏÆ\x0017\x000b\x0016h\x000bFÊR\x000f¢\x001föXÎ\x001d°{ª\x0011\x0018»áõà1ÂM6\x001e>Æ8\x0005L»ábªj\x0015Rð·ÐeáÂvðY\x0005\x001c\x0013®\x0003\x0017ÈJó\ÓêdU)¼RQåDá\x000f*M\x000c7>»¨ã<þÏ)Ì	s\x0010ì?@#\x0004¥\x0008\x000f6¡B</p><p>Ì±sÀÓ\x0001\x001f	£ÅÕ±9Z¬:ú\x0011j\x0016xMÏÆ4Mÿ¦\x0010ÝÙE,ýúTâ\x0019ÇøªÇÆÌÊü_ÿ¾XoÂq S\x0006\x0007\x000cô)sørU\x0005Üêît\x0014¼·ngtÊû¬<ûrU\x001eýE2u=/"zj¾¬¦k:Þ.ãÚâÃÌk*å®7TCÛèWØfºÒº5·Vk*ß3[kÊRsbèû\x001e©´üdè\x0004è8Ïf}1õZ<7¶J \x001e÷âÂY÷¡Y0¢Vð²£ú¢-ÈE½¾9µX¿VP kÕðó¼\x0006*º\x000e»q!Lj,Ì»Fd\x0017¢kõTÛ§î"]é\x000eþ±²\x0016y°}'e)Ú¹C.¨Ó×5ì[eUp</p><p>ÙÙòÏ_c*h¶Í¯Dg²åýë($cKZ\x0016\x0016¬joùæá¢m_e«NÔÈJÊê\x0003ß®ukÇ\x001eëÌ$¿ý^Ô]d^½Û=p}¸Á$½ùØ\x0001¯\x00077\x001fzùÙô©\x000c·0\x0007¼VÂÈª¢êuWlRÆ+}çO]lRùÏ;\x0014ÀSËÉ¿\x0019\x0007DJ\x0015^£/M±­\x0007¨¼\x0002)Xµ\x0013õT\x0000±ÿÌaôÎ¥\x0003\x0004ÞâNx}x\x0003E8àrÀZYêêr{9D \x00039{>\x0007ñ¸\x0012X»¾$\x0016òï\x0012ýÌ\x0005°\x0007@\x0004Û\x000bÿ8»qxx&¯+Îx³c\x0002Hj9õ{ÄÙwA ¿8{\x0003z5g_û8nþ\x0000¼
åñ·\x000eZé#®¿Ó\x000bªB\x0003¿æW·	|ÚÖ¹|k¬.gJro\x001dÕZ­³MUZÂr\x0015&ïÏä\x0010Võà°ü>9³UO£ª°-$E\x001a°f¢íhÐçeü`n¡3ÂyääÑä\x0015ë¿0[ñùÈRÎºr;Wù& PÍW$e³ßû¼º]41\x0006l\x001dàûHÏKñÈ\x0003ÞßÑrÅ</p><p>´ßGÏ\x001dßóà\x0019Ã\x001c= ÃILpÀë#CYbÆð`ôqÃ;áY'MÐ\x001däès¬¨SO°eØÂÈÄ\x0014q\x0018l<\x0004ËÐ\x0003=Ø|\x000bâ)öáè\x0013T\x0011Ë%µt\x001a¦¼õD\x0008SD\x0014Ã"²#e\x001d7!*²T÷</p><p>[ì=½¾_Y
êZ´½\x0007w\x0014@\x001báª\x001e^\x0000ë¯£Ø\x0006\}4ïÞ¼ÂÚ¬ÂìÌè¦®\x000f"Ñ
¯\x0007\x0018ê4\x001c}qB>±nxUà¡å\x001e:Cf{^¾o­qLÕû:ÆbªÌ£ìÅ'\x0015áæ\x0000}RÒ	¯\x001f\x0014wÎy?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 3.2.1 is vulnerable.</p>
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.js?1610461221)
  
  
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
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique319](https://igas.gouv.fr/spip.php?rubrique319)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique197](https://igas.gouv.fr/spip.php?rubrique197)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique335](https://igas.gouv.fr/spip.php?rubrique335)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://igas.gouv.fr/](https://igas.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique333](https://igas.gouv.fr/spip.php?rubrique333)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://igas.gouv.fr](https://igas.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique334](https://igas.gouv.fr/spip.php?rubrique334)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique189](https://igas.gouv.fr/spip.php?rubrique189)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique259](https://igas.gouv.fr/spip.php?rubrique259)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique337](https://igas.gouv.fr/spip.php?rubrique337)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="spip.php?page=recherche" method="get">`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique301](https://igas.gouv.fr/spip.php?rubrique301)
  
  
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

  
  
  
  
### Big Redirect Detected (Potential Sensitive Information Leak)
##### Low (Medium)
  
  
  
  
#### Description
<p>The server has responded with a redirect that seems to provide a large response. This may indicate that although the server sent a redirect it also responded with body content (which may include sensitive details, PII, etc.).</p>
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique319](https://igas.gouv.fr/spip.php?rubrique319)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique333](https://igas.gouv.fr/spip.php?rubrique333)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique263](https://igas.gouv.fr/spip.php?rubrique263)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique261](https://igas.gouv.fr/spip.php?rubrique261)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique260](https://igas.gouv.fr/spip.php?rubrique260)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique337](https://igas.gouv.fr/spip.php?rubrique337)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique262](https://igas.gouv.fr/spip.php?rubrique262)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/ecrire/](https://igas.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique335](https://igas.gouv.fr/spip.php?rubrique335)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique334](https://igas.gouv.fr/spip.php?rubrique334)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique301](https://igas.gouv.fr/spip.php?rubrique301)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique259](https://igas.gouv.fr/spip.php?rubrique259)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Ensure that no sensitive information is leaked via redirect responses. Redirect responses should have almost no content.</p>
  
### Other information
<p>Location header URI length: 19 [spip.php?article737].</p><p>Predicted response size: 319.</p><p>Response Body Length: 16,805.</p>
  
### Reference
* 

  
#### CWE Id : 201
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://igas.gouv.fr](https://igas.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-igas-portail.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-igas-portail.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://igas.gouv.fr/](https://igas.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-igas-portail.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-igas-portail.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://igas.gouv.fr/robots.txt](https://igas.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-igas-portail.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-igas-portail.cegedim.cloud-HTTP`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### CSP: Notices
##### Low (Medium)
  
  
  
  
#### Description
<p>Errors:</p><p>1:1: Unrecognised directive-name: "upgrade-insecure-request".</p><p></p>
  
  
  
* URL: [https://igas.gouv.fr/](https://igas.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-request`
  
  
  
  
* URL: [https://igas.gouv.fr](https://igas.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-request`
  
  
  
  
* URL: [https://igas.gouv.fr/ecrire/](https://igas.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-request`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique333](https://igas.gouv.fr/spip.php?rubrique333)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-request`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique189](https://igas.gouv.fr/spip.php?rubrique189)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `upgrade-insecure-request`
  
  
  
  
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
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article801](https://igas.gouv.fr/spip.php?article801)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article809](https://igas.gouv.fr/spip.php?article809)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article795](https://igas.gouv.fr/spip.php?article795)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article771](https://igas.gouv.fr/spip.php?article771)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article779](https://igas.gouv.fr/spip.php?article779)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article789](https://igas.gouv.fr/spip.php?article789)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article777](https://igas.gouv.fr/spip.php?article777)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article775](https://igas.gouv.fr/spip.php?article775)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article774](https://igas.gouv.fr/spip.php?article774)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article769](https://igas.gouv.fr/spip.php?article769)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 12
  
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
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique28](https://igas.gouv.fr/spip.php?rubrique28)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique3](https://igas.gouv.fr/spip.php?rubrique3)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique267](https://igas.gouv.fr/spip.php?rubrique267)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr](https://igas.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique197](https://igas.gouv.fr/spip.php?rubrique197)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique18](https://igas.gouv.fr/spip.php?rubrique18)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/](https://igas.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique20](https://igas.gouv.fr/spip.php?rubrique20)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique19](https://igas.gouv.fr/spip.php?rubrique19)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique189](https://igas.gouv.fr/spip.php?rubrique189)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique222](https://igas.gouv.fr/spip.php?rubrique222)
  
  
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
  
  
  
* URL: [https://igas.gouv.fr/robots.txt](https://igas.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique3](https://igas.gouv.fr/spip.php?rubrique3)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique189](https://igas.gouv.fr/spip.php?rubrique189)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://igas.gouv.fr](https://igas.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://igas.gouv.fr/sitemap.xml](https://igas.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique18](https://igas.gouv.fr/spip.php?rubrique18)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://igas.gouv.fr/](https://igas.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique19](https://igas.gouv.fr/spip.php?rubrique19)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique197](https://igas.gouv.fr/spip.php?rubrique197)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique28](https://igas.gouv.fr/spip.php?rubrique28)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique20](https://igas.gouv.fr/spip.php?rubrique20)
  
  
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
  
  
  
* URL: [https://igas.gouv.fr/plugins/](https://igas.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/squelettes/](https://igas.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/squelettes-dist/](https://igas.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/local/](https://igas.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/](https://igas.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article812](https://igas.gouv.fr/spip.php?article812)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L8xH11/puce-cebf5`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article808](https://igas.gouv.fr/spip.php?article808)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L8xH11/puce-cebf5`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article811](https://igas.gouv.fr/spip.php?article811)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L8xH11/puce-cebf5`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique19](https://igas.gouv.fr/spip.php?rubrique19)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/xlsx/copie_de_liste_rapports_publics_9-03-2021-2`
  
  
  
  
* URL: [https://igas.gouv.fr/](https://igas.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `PfVVY18/IVkNvUwqJlLL3fNyljz02YJhAQOMy5Z2rJDJ9bp4QF3rBC2ZbRJCwX25jmpk5+knbNS7nLcesXdD9mYK0Ds=`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article810](https://igas.gouv.fr/spip.php?article810)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L8xH11/puce-cebf5`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique18](https://igas.gouv.fr/spip.php?rubrique18)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/xlsx/copie_de_liste_rapports_publics_9-03-2021-2`
  
  
  
  
* URL: [https://igas.gouv.fr](https://igas.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `bBvTRus1gRqZh7oqJlLL3fNyljz02cZvGJYlAa+OgA/AvE6LSGhDcuXITNpFDeAHe0SSq5REQ9qhNXEZaZfCaH3ougA=`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique3](https://igas.gouv.fr/spip.php?rubrique3)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/xlsx/copie_de_liste_rapports_publics_9-03-2021-2`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique28](https://igas.gouv.fr/spip.php?rubrique28)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/xlsx/copie_de_liste_rapports_publics_9-03-2021-2`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique20](https://igas.gouv.fr/spip.php?rubrique20)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/xlsx/copie_de_liste_rapports_publics_9-03-2021-2`
  
  
  
  
* URL: [https://igas.gouv.fr/robots.txt](https://igas.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `KgR0PtgQQguJpngqJlLL3fNyljz02Q4fTuAOu/GEp5VzBZKEgO/ZHlgc2KiavlR2XVZ5q/rJDjISI4PmSclWDCzvRcg=`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>��\x001a��\x001ar\x0017��('z�^����}u���{�\x001em�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://igas.gouv.fr/plugins/](https://igas.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/](https://igas.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/squelettes/](https://igas.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/local/](https://igas.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/squelettes-dist/](https://igas.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 5
  
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
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?article420](https://igas.gouv.fr/spip.php?article420)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.form.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://igas.gouv.fr/prive/javascript/jquery.js?1610461221](https://igas.gouv.fr/prive/javascript/jquery.js?1610461221)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 20
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bQUERY\b and was detected 2 times, the first in the element starting with: "			options.data = q;		// data is the query string for 'post'", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique319](https://igas.gouv.fr/spip.php?rubrique319)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id='xiti-tag-noscript'>
		<img width='1' height='1' src='https://logs1412.xiti.com/hit.xiti?s=611499&amp;s2=&amp;p=igas_en_bref&amp;di=&amp;' alt='XiTi' />
	</div>
</noscript>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique337](https://igas.gouv.fr/spip.php?rubrique337)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id='xiti-tag-noscript'>
		<img width='1' height='1' src='https://logs1412.xiti.com/hit.xiti?s=611499&amp;s2=&amp;p=psychiatrie&amp;di=&amp;' alt='XiTi' />
	</div>
</noscript>`
  
  
  
  
* URL: [https://igas.gouv.fr](https://igas.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id='xiti-tag-noscript'>
		<img width='1' height='1' src='https://logs1412.xiti.com/hit.xiti?s=611499&amp;s2=&amp;p=page_squelettes/body.html_fr&amp;di=&amp;' alt='XiTi' />
	</div>
</noscript>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique334](https://igas.gouv.fr/spip.php?rubrique334)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id='xiti-tag-noscript'>
		<img width='1' height='1' src='https://logs1412.xiti.com/hit.xiti?s=611499&amp;s2=&amp;p=hopital&amp;di=&amp;' alt='XiTi' />
	</div>
</noscript>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique189](https://igas.gouv.fr/spip.php?rubrique189)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id='xiti-tag-noscript'>
		<img width='1' height='1' src='https://logs1412.xiti.com/hit.xiti?s=611499&amp;s2=&amp;p=focus_sur&amp;di=&amp;' alt='XiTi' />
	</div>
</noscript>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique301](https://igas.gouv.fr/spip.php?rubrique301)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id='xiti-tag-noscript'>
		<img width='1' height='1' src='https://logs1412.xiti.com/hit.xiti?s=611499&amp;s2=&amp;p=interview_cheffe_de_l_igas&amp;di=&amp;' alt='XiTi' />
	</div>
</noscript>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique335](https://igas.gouv.fr/spip.php?rubrique335)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id='xiti-tag-noscript'>
		<img width='1' height='1' src='https://logs1412.xiti.com/hit.xiti?s=611499&amp;s2=&amp;p=sante_et_societe&amp;di=&amp;' alt='XiTi' />
	</div>
</noscript>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique197](https://igas.gouv.fr/spip.php?rubrique197)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id='xiti-tag-noscript'>
		<img width='1' height='1' src='https://logs1412.xiti.com/hit.xiti?s=611499&amp;s2=&amp;p=l_igas&amp;di=&amp;' alt='XiTi' />
	</div>
</noscript>`
  
  
  
  
* URL: [https://igas.gouv.fr/](https://igas.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id='xiti-tag-noscript'>
		<img width='1' height='1' src='https://logs1412.xiti.com/hit.xiti?s=611499&amp;s2=&amp;p=page_squelettes/body.html_fr&amp;di=&amp;' alt='XiTi' />
	</div>
</noscript>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique333](https://igas.gouv.fr/spip.php?rubrique333)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id='xiti-tag-noscript'>
		<img width='1' height='1' src='https://logs1412.xiti.com/hit.xiti?s=611499&amp;s2=&amp;p=protection_de_l_enfance&amp;di=&amp;' alt='XiTi' />
	</div>
</noscript>`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique259](https://igas.gouv.fr/spip.php?rubrique259)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript>
	<div id='xiti-tag-noscript'>
		<img width='1' height='1' src='https://logs1412.xiti.com/hit.xiti?s=611499&amp;s2=&amp;p=l_igas_recrute&amp;di=&amp;' alt='XiTi' />
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
  
  
  
* URL: [https://igas.gouv.fr/prive/](https://igas.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://igas.gouv.fr/squelettes-dist/](https://igas.gouv.fr/squelettes-dist/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://igas.gouv.fr/local/](https://igas.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://igas.gouv.fr/squelettes/](https://igas.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
* URL: [https://igas.gouv.fr/ecrire/](https://igas.gouv.fr/ecrire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://igas.gouv.fr/plugins/](https://igas.gouv.fr/plugins/)
  
  
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
  
  
  
* URL: [https://igas.gouv.fr/spip.php?rubrique189](https://igas.gouv.fr/spip.php?rubrique189)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/robots.txt](https://igas.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/](https://igas.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr](https://igas.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://igas.gouv.fr/sitemap.xml](https://igas.gouv.fr/sitemap.xml)
  
  
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
  
  
  
* URL: [https://igas.gouv.fr/](https://igas.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1612432203`
  
  
  
  
* URL: [https://igas.gouv.fr/](https://igas.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1601544360`
  
  
  
  
* URL: [https://igas.gouv.fr/](https://igas.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1612455477`
  
  
  
  
* URL: [https://igas.gouv.fr/](https://igas.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1610461221`
  
  
  
  
Instances: 4
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1612432203, which evaluates to: 2021-02-04 09:50:03</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://igas.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://igas.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?page=login&url=%2Fecrire%2F](https://igas.gouv.fr/spip.php?page=login&url=%2Fecrire%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://igas.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://igas.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://igas.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?page=login&url=.%2F](https://igas.gouv.fr/spip.php?page=login&url=.%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `url`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://igas.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `recherche`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?page=login&url=.%2F](https://igas.gouv.fr/spip.php?page=login&url=.%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://igas.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://igas.gouv.fr/spip.php?page=recherche&recherche=ZAP](https://igas.gouv.fr/spip.php?page=recherche&recherche=ZAP)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
Instances: 10
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://igas.gouv.fr/spip.php?page=login&url=%2Fecrire%2F</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [input] tag [value] attribute </p><p></p><p>The user input found was:</p><p>page=login</p><p></p><p>The user-controlled value was:</p><p>login</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
