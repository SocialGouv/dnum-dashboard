
# ZAP Scanning Report

Generated on Sat, 3 Apr 2021 16:57:48


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
| PII Disclosure | High | 3 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 12 | 
| Source Code Disclosure - Perl | Medium | 5 | 
| Source Code Disclosure - PHP | Medium | 1 | 
| Vulnerable JS Library | Medium | 1 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Big Redirect Detected (Potential Sensitive Information Leak) | Low | 1 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 12 | 
| Dangerous JS Functions | Low | 8 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 6 | 
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
  
  
  
  
Instances: 3
  
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
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Baignade](https://preventionete.sports.gouv.fr/Baignade)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target="_blank" title="Facebook" href="//www.facebook.com/sharer.php?u=&t=Baignade" rel="nofollow" onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=700');return false;">
								<img  title="Facebook" src="squelettes/prevete/css/img/template/reseaux_sociaux/icon_facebook.png" />
							</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Meteo](https://preventionete.sports.gouv.fr/Meteo)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.meteofrance.com/previsions-meteo-montagne" target="_blank">prévisions montagne</a>`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Memento-prevention](https://preventionete.sports.gouv.fr/Memento-prevention)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="http://www.preventionete.sports.gouv.fr/IMG/pdf/PreventionEte2018_100x145_FR_BD5-2.pdf" target="_blank">mémento basse définition</a>`
  
  
  
  
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
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/2_PreventionEte_VTT_420x594_Sauts.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/2_PreventionEte_VTT_420x594_Sauts.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#zZdv`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/ReglesNavigation-2018-A4.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/ReglesNavigation-2018-A4.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#tcjP`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/pdf/Flyer-securite-Mediterranee.pdf](https://preventionete.sports.gouv.fr/IMG/pdf/Flyer-securite-Mediterranee.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#6Gru`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/jpg/regles_surf_ok.jpg](https://preventionete.sports.gouv.fr/IMG/jpg/regles_surf_ok.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#D2XX`
  
  
  
  
Instances: 5
  
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
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=¿Ëõ5Íu3åµf\x001b¿DA->è¡Ôz\x0007½·É¤Çø:kEÙßd<xÒ\x0015\x0005::\x0000ýÃ%cõ÷sÝìýÉ¤á\x001eß»\x000f\x0011×a]®\x0007\x0003Y\x0016K½1î\x000fgËò}\x0017£gÚ¸Kß÷Ãó¾Ð\x001fäß]MkJ \x0001YHJ@ï\x000e½=¿.ÚëZw\x0015v @\x000eî\x001f´CóGE\x0015F¹¢<³¤r	\x0004;Ú"\x0006\x001dúô\x001dçð×U9à¤¹£Å°ø<ïîWv¢úã8YoQ\x001dëò·\x001fØ­ÇÀ\x0019MåÉb{dj\x0017¯Ê0IÓÖÉ¿FB¤£cÇË@YÐXEóecÞ\x0019\x0002	÷\x000f(ÂQ.à\x001aú³"ãá§sÅZZt»¨ p!W¸#ÈoÇÎxùoi:IÔ99êÙz2\x001a)×ÌZÖ®\½Qý\x001f§87fäg\x001aáæ,üHxýä¦£\x0018É\x000bG\x001b×tëÎzÕT[w¾²áÅ*\x0000ÂCÃ\x0000=ÀïÓë¦\x001dO¶\x001bt8ò!6mg]g`Wö·=¤\\x000e\x001d:Ów±Jù_o¥N4µ]À.mÄ\x000e÷£´öÚü\x000f8[În»&b$ºG\x0015\x00130*À\x0007lá\x000f,Ç*Í\  r¢ \x0003Ðu6FSâ\x0002¦ºWå\x001dj-Tw^BI%)íGËNWP.Þ\x001bý¹ñöí­Þ\éZ\x001c1ÀXRÞ86)¾×××\x0017½,Ee\x0005ë6ßóßP?¢Q\x0018\x000c\H¯7È(t@£ÚoÏmìðßëh­±ð½ÚM.Ð<Ã¥Þ>è	»»~Mºm¿Ï®/ÂêÚ\x001a¡'{´ÕèðMÔw;v´Ö©QmÐ(o-\x0013màÛ¤¡¹T~4Ê<\x0004¥úúÁ;!ò^&nO\x0019J¿ÀÖö:95¶Eø¨Wéhq8Ç\x001bãüe\x0004máè4êÅ69$\x0002\x0017ákÍbÛ\x0000¾è\x0018E¯y¿Da\x001düuåæK$öK"þUd*DI>U(=Î^åY¦Y\x0010a	\x001c\x0012\x0000·Ãæ5¥¼çôÑãw;ëF\x000c	ø±âØZmª5hÞó\x0003ØSyL¦N¨\x0015¥Â®*\x0001|Èçà¡JP\x001f$é\x001c{Áß±:Ù3<|K¥P¾ÈÊïá«\x0010Üv#\x001aÓËáñÙfRù\x001c\x000f\x0000Gæú\x0015Ãg68I¸#Ks\x0011"%ÛOÆ<Æ×º²Ç^\x0013 V£\x0015Îp&d²©$åÌC)ÜO´ã|:y¿1½AæG\x0018Û\x0008à¦Ï4+MÈ6àoð\x0004PÖW</p><p>­¿1A|¸>P{}ñjÓ</p><p>'(Ý@|?§sÅJV¤ÿ\x0000\x0018¿Þ¬ý\x0012Òîz©\¨b8®Í±zq/O1ªI6æ\x000e»Äzê\x0014CÃ}Ù¨¯®=0Åõ¯£;¤ÙBÎaä2@%¹\x0008Az#ÉÔ\x0008\x000bjB\x001bZUck\x001f-=ºi½fôß¨MûQL^EO;)¢ ÛU¹¥ÆT´ÛÂ¿J^\x0010dóå¾0â»[_\x0019 \x0018Wä\\x0018@TQÄ\x0002¦AUvñQxäTGÄÝûQ×ÞË»³#»z'{6Wòþ=.ã¥k¶°ô\x0007W\x0018ë·
JChYòê¹±6\x0016÷Ú\x000fmÂÛ=YÊÇÅ¤'
-h\x001eß\x0007Á¾?Úµ$z-[a«\x0005P½\x001a(£E\x0015Çÿ\x0000«¯ðÀqÇüÃ«kF¯?H?FÃþüCUA:ÍúPíÿ\x0000õoÆ^©£Çÿ\x0000ßAþ®ãû)µE\x0019ûJ>¤}</p><p>¿ï}¹T~H=#ô?­ý ÖJÇN¡>ä>¿Û\x001d\x0014UZ(£E\x0015ÍÏ'ý$¡©©Ï7ôîWc\x000cLüdÄOù0\x0004ÅG8ÌÞ&­\x0016ü²ªSÖ\x000b\x0005\x0012èÊñ\x000f0\x0012 OV ìÇÈHÉ,=¥\x0015"þ^ÉUÁ¹</p><p>©êUPÂý®ùS\x001eàJ¾J¶f¦ø\x001eh®³k¤s\x0015ÌÄ¿ÊV\x0019ÔË$L\x0019|x4kÜ\x00058Tè¢\x0014Q¢ø>\x001f\>Øh¢¹Dôàþ\x001cîmÿ\x0000vr\x001böÈ®jñõwôiÛ?\x0017r¨WI?Jÿ\x0000Ôd¾4Íuyª9WÖ\x0014U³Ò÷³v@\x0012²å\x00018ö;8nc\x000fÜ7ê>ÀÖ´Ôëê\x0001\x0000.x\x0001tg°yk4s¦B\x0014o`´òçÌr¨¾â·\x000bpE£\x0016­/(8³&\\x001c^/\x001f\x0011j5©Ì?\x0018\x001d\x001e=¥c]7mñQÈ\x001fÊU\x0010(\x0019#@ÝwÕ\x0019özörévg§ëÈoLv\x001f1^Rf©1¥*Cd\x0007l\x0011â2âQ©\x0006à¦ÁC 
À¸höêN\x001fy&\x000eÊÉfq\x0018$ã¢ió":ü\x0014¬6âT­+#RU{(\x001b\x0015»x¿¸3</p><p>ÌJOâ¼i]¤ÌÍF¥\x000f)!\x000c².ö1\x0017@õ&k\x000bKÊ# \x0003ô\x0000\x001dÃÇVet¦½:îSebXÇÏ}	kBQSz²8âÀ\x0005II$\x0000NÜ\x0005WãÕ£u\x0002\x00038Íç\x001dâëhwEáN¡¥)7ÓÃåO~¤ªê/}[?rû\x001e£×"Âï°oÿ\x0000«ö\x001fU§Ú?üï§·åùMÀ|aU?t\x0017í{ÛËù=Î|\W'þZ\x0000\x001böv\x0013ÙÓnÐöí¯sç½þ5_ß\x001añÖ\x0015½I~ôïEeP)»·í\x001e¥\x0010\x000eÔw\x000f
jVÝf\x0014ÀhïÞaÛaßoo\x001d´\x001aÑ{í³(´TÇ(¾ïï°\x0017æ\x0001\x001e\x000eúæ´N¤X</p><p>T ÀL;T ôö\x0018\x000c"?XÃ£k\x0006Ý\x001c¯ó{jÑBù$\x0013w\x0001D bî\x001fr\x0006ê\x0002\x001e!ÓZ\x000eºàpl/Iî0î³ks÷iLÝ\x0002¨"Bl@){¶ß·Ú\x0001Ó»êë§ïî«NK.h¹¸\x0017¬ËvÊ\x0015>Òª\x0000\x001bNâQÑã9ÚªÒ,¸\x0001\x0002ÿ\x00007¹Yä§'yÅé¸\x000eÝDC`ðñ\x001dýQ\x0008K\x001a¦)Ï\x0012:Å!¤</p><p>n4Däø­il¡MyVI\x0001|8Ü_³¬«r7û\x0001\x0000ê\x000cp)ÖòH\x0007[É)Þ¯A\x0003\x001f´\x0007´:Á­6TÛs[ÇË\x0013|\x0017\x0019du¡?\x000b>\x0015×Ô\x0015OBCÏ\x0016ó7i¡~ú°'¹¬g\x0012Ý¥\x0001\x0002\x0001Cm¶\x0001\x0010í\x0001ê";éAO\x0012â¥\x0016ZOt·Ø\x000f-^ZAûæ:%)\x0008D®\x000bCPqÖ<ë\x001eSj¿\x0001Ü@\x0000Â"#Û±DL"o\x001dºn;ôðÐ\x0016x!\x001cM"¸[O­-vgÉÂ±3w\x001a9ª.\x0013qðmÒ(\x001c\x0018óáÜ®*n=n*éAØ:lM*DÇÊ|$³Àjlä÷&5§Kéq \x000b
7\x0016¿öiå\x0015âÜ\ýåßÉ\íÒ\x0001\x0011Ø{Öz\x0007xºbQè \x0008xé×\x001f§rÖØëÖlsO\x0013º­</p><p>:\x000bQCv\x0013qoO¶Ü\x000f*h&9g\x001f\x0002©Ä0©×QÜA%læaàx\x000fqÝ;P¨Åßm\x001dNvÀÇ¨\x0000ùJeMêNáeCIh*à"ÜO¿ØmMüÛæ<Á[!N$\x0003Þ',bD¢ oº"$fs\x0015=º\x0000\x0000ÙÓ;w\x0015\x0018\x0008éi$#o\x001f£Mù;Ós<</p><p>\x001fáA¿tÛ»æ<\x0007\x0011îû¦ï¬öy=þ³Xä\x0000ßt\x000f'$Ü\x0000Â"S¹\x0012íók;XÌ{\x0007SM$(tÝVFrÎ¥:²«ö¨¢M'\x00070DÓ9w1\x0000PÂ>Ñ1î0ýqÖÏÀ\x001f\x0001<<Â°øÒ\x0015ÞÔ»y¯û\x0015æ)ì§o@
¾ìR!\x001eîþ&\x0001ð(ÔÖ&$4±á¥Å\x0015öwG\x000f[­\x0005&9­\x0003ºnx\ù8ÜóøDÖ]6ÀÙ'.×ê\x00086óÞ®R~æíQIG</p><p>\x0007OxHQ\x000f­®îÇ0\x0010_óEµñO;lE\x001c¹Ò¬\x0018ëÐLdHs µY
¶	</p><p>\x0016<ì/~\x0007Îmä¹§\x000e#\x0012eÅ"ð\x0018Ã$(»NG\x0011õ¦%Sa\x001d\x0016:l\x0001@\x001fª=tÉÊï\x0000©©,Z]±\x0005\x0005Ô\x000b%µ^ô·\x000bhnéO\x0014Ç-2<B\x0007\x0015\x000f'.\x0003·ÉJ\x0015ßçübÄÉ+R\x001a·0\x0014ØJ\x0005\x00057Ü2-F &\x001ec¨\x001b@ù5§²·5½RtU<~µ¤î^õºômÿ\x0000µívä´*\x0017=¾^#´sú\x001c)VåÎVíüem\x000bkbRîwjG£\x0016ïË÷@«ütaÅaéÜ¡zõ×|¾ÊÇ¼\x0014\x0015²æxy\x000f"/ØiÓë\x000eãÆ¸\x0014¤ÍFt¸>È9^Ä\x001eÏ \x0003;vle_xÖt¡>´¥Mû`ÒE\x0018tD\x0003p8NÇy¤\x0002*!ÓÌ(\x0007P\x0001ÛLûW%\x0011ú /\x0000Gx>åIÞ®m¼­¶§dGRîV\x0014\x0007rÝ#ç<¼ôý¤ùt_1xÍë5ÈS¢ê=É\x001e11N\x001dÅò\Æ)Ì!â\x0002;é¶¦%Eá5%6<oÙR\äyðÂ¢\x0016ü`7W¦Üª³*`)Ó\x0003lbOØ;w\x0001zûÂ\x0002\x001bö°tjJûÈø\x0014£\x0011æ\x0012\x001dCÊ{|õ`e\x0004ÁÔà;|åñùCm\x0014ã\x0018\x001fk\x0000.ÕpTL¨û\x0004Ý¥
ÄÝv\x0000è\x001e:+r°K\x0011!)ö\x0002øøì`ùõÇmn6\x0008çX§
A/h\x0000î;o¸Ê>ÍjÈqMØ¦£-J¾£{yk\x0010º	\x0006(\x0018@
¹ºõ\x001d¼w\x0001Ö¹yÂoÙJ,<èu)</p><p>6Ô>}'H¡îû~Qù>®ºvS±Ê\x0017clP\x001d¶\x000f
Ç\ZõØ-I\x0016\x0007[(Pí\x0011\x0002õù¾®VFÜRbxU°û@~¾Ü(zk9â\x0008óTíz;ºqô>df*ZsGó¾ÁÉ#æoã¸$P/Ô×\x0018g\oÛC­0\x0010m\x000få|sº{<EÄ\x001a×éWmz_\x001e/²÷J¤¹Åôâç¶\x000f´Ë:Sè\x001d5ºª\x001a£E\x0014h¢\x0014T\x0010zÛ\x0018ÁZÄáÜ`(·¸n^áíêx0\x0011\x0012ï¶ûtßUýjQöþèsd\x000fÖ3fÝFìmå\x001d©? ¢ß±¿V\x0016\x000bõl`¸çc(Ü_Éæå\í&¦ç(	ú|Þ\x0003¯l\x0014xòtHrÀ^¯m·ì7ÕØwú.ºÜî\x001eYí¬+</p><p>Bù:t\x0011/´zèæk\x001aÕ{{ÕD@OÐ@v(À >ÐüÍp+\x000bÚ´÷k*é~Ï\x0011ù5Í`	vÜÏÎ¬º\x0000\x0006:e\x001e»]ü\x0004;}¿SI¯O[oÍ#[×O\x0002be%¦\x0013â ñ$ò\x001fB1ò\x0012²\x0008ÆÃÆÈÉÊ(@\±qÍLáÂí</p><p>rEÎ@î1PLÆ\x00001ÇËM2ê\x0014¥\x0011Öy3cÖò%¨ì ]KqA(H·Ó\x0002A>åuù#/Ì±ËÍ*°ÂK®<Tl\x0012</p><p>Ô|"Ã¶ÓyO\x0018×äÖ¢¤mY!C¬vÓØ÷\x0010D¿³­9MUÊ¬m»,¿pÃ\x0017×f\x0019\x001d\x0003\x0015fÅ|ådÄ=ý·
Výíi²vÌã¶»\x00071O\x0002[\x0005,$ùu\x001e`s¸5èWK?Uÿ\x0000[7ü\x0016w.þ\x001ffíÑâ&<âd\nÁEIa\x0017Z\x0001I¸</p><p>A$\\x0000Ù$ÿ\x0000Fv	¯1Ä\x0000\x001d!P\x001beþmãê½\x0001\x001d»\x0013]£ÁN1(Ý\x0000®¡Ê>ÝAo{gï5àâa%W#á\x000fÙUêÜíÿ\x0000Õ?Ñc\x0016Ù×¹å<R\x00081¡8 Aò\x0012ñó\x0011qÛYH¼ý! \x001b~°mç\x0001Ck\x001f\x0002r»\x0012äçf"e\x0013¸TÕz\x0015É\x0017äíØ\x000bå(SD\x0003o\x001d`Æ{mo8¹\x0011ò¶\x0012\x0013Ø8â_¶ÆúmnWçM½Íú¤ú`ðS{_yf ÏzÈcåH/¨\x0017/äi\x0007J}'iåNm/1â{äã:TE²j$*ÇâõX}îd(¢4Ù¹¯6vrC&`+f\x0012\x0005På(@Ý7°Û#Ú£¥û¾Jq¹W$bò/\x0012\x0014.Äwí`\x000f+¦}aýZ=é\x001düî!1·\x001eÔ\x001düz¥\x000091u-<{\x0014(çN×cÖ®ß²zÙÃ\x0017Ñë£æ®J«w-Ü!úbK²\;s\x0010\x000c\x0003ÝÔ§\x0001Ü\x0007mX¸2Q5Ëmaq
¼5 ¬vjô×Îºó\x0019wñ\x0010EQJu%/ê\x001dJ6óÉ ð\x0013\x0004Ó?wyN\x0000o\x001f\x001eð\x001e¡òõÒ¢#R\x001cÊPùæÙþè¬\x000fJiÇJ{;-ý£J´_¨;\x0000í±¿E¶Ûý}uv\x001b%=Ä\x0000ªè
!W\x0007¹Yd\x001f\x0017³ÃóÂ>Ñö\x0007Ë­Rò Ö_]\x001fºú\x001fµY´$71\x0000</p><p>a\x000e\x0001ÓÃåß¦ºx-\x000f¥åç ÍOî«>ÅáL*w\x0010G`.Á¸ûwù\x00045ÊZdý(®¦[k\x001dò
(P8\x00192\x001c¦\x0002õ\x0000î\x0000\x0010ê>Á7w»\x0006\x0019R´X\x0000x^ºxñùÜVQ\x0005V1öî1´G´\x000b¸ì\x001buðßZRã%ü\x0006U­UÙ+\x000eªÍöÕúJw\x0014L&\x0001\x0000\x0011\x0001\x001dÃo\x000f¬\x001d\x0007Y\x001c#\x0004~\x001eJáÄ¶ÒþÈþþçBÃËqô(\x0017\x0008\x0017nåÐ.ä\x0013L©\x0000{7í\x0013lc}Îý7ðß\\x0006@ïCñÄx(ÛO÷áb+Uç]
\x001a\x001eO]$ù®yyiðãÄúPYB+ÏPQmd®¢ïp!JéÀ\x0015düM²f0"\x0003°Ú:ÃYÌ2Ð ó<U¤ó·3Ã¶Õ-ôc0ÖÙß-í©¨rR\x00128\x0000O\x000eu$&M\x0013$²\x000eÛ´t¶Æ½`ñ"9rS\x0011Ä[æ\x0001Ûºbý#	VDå\x0012¨\x0006ê\x0003ªºã*U¤!K\x000f6®\x0004,XØ\x001e\x0016ãä=|\x001b8HË8ÉO¸\x0014÷i\x0017\x0007W\x001evµ¸×\x0017\x001e®¼
áæfÈ¸r9h|\x0005Ë>©1Q3ÈÌ7yb¨Ã86ýµ\x0019PÏbRØ\x000c¨\x0001S.­ÏI÷ÄÜæ\x0019Xl¥Éì\x001bpâØäxrWbãVî¡lÄmÜá\x0012ÊÆ={\x001bð</p><p><mèòyê6"\x000c\x001dî`\x0001\x001eßnÛMú}PÔ­ã;~&°Z@nöãz]Åö\x000fA\x0010\x001dÇa
Ãå\x001e/³Gç£¼</p><p>4¥E"{ÞïAÛ®ã×Çç×\x001e3¿º5¼ÊÖ«vUÐ	\x0000\x001b<\x0000zíí×dºáP\x0004ó5²="°oYLqM0!\x0007ßê\x001d7\x000eí×[öäiRÂ·ãÒG\x0016ÂdPÌ\x0012ÊÐíHZ\x001aÖ¸\x0005pÙ©$fiq\x0007</p><p>ô{Q t¹fäp)\x0013¸þZ\x0006?oi\x000c!\x0019õ+'\x0017Ó?'zÔU¤\èQ\x0000Þ\x0016¸÷yÓÛcDþ].K)ºEÀ&Âàp®Ær\x001f8¸ÕGW%E0Ép9#!b¼WiÍ6<I¤£î7÷tZz`\x0013c"ãÞ|2Î\x0019@\x0013¶\x0015Áp(	»6\x0001Úcv&~a©\x000c.4\x0019RÚ\x001ct\x00146\x001cY ^ãW\x0013À\x001bi* _MOdá\x000fòVãI*Ð\x0008½ãËÈ8¬£êWò9*_\x0016â k\x0012ù»ò|ºáÖW³4RÆµÊÕR\x0007Y\x0017\x0018KÓ\x0014l1,UJò*\x0014©\x0019e\x000eg#Ü!Ú^¯x?%nbU\x000e\x000e]1f¶\x000eÚV@C 	J®{ò>cH3óÌ<Ö¸@\x0019nÄSÌ\x001eÕé\x0004©#Î\x0000>p|ö®\ó>\x0015õ\x000eä¦,aÎ,Ö¤Öx¨©OehZÂ@¥ÏÝhöAÃ&lEZ|­\x001eäÕQmÙÊíîX»¸-'sôÃjåWµ°AX÷®\x0012\x0008BÂ\x001cR\x000f\x0007\x00144­D\x0010H\x0004_G\x0019Tæ²\x0004ç\x0010\x0017\x000eÂë¸*áÏP¹P\x0000ð\x0004=ñQä(S)ÉØba!ÈmÊr\x0008w\x0001;ì   ;ü©6$}\x0017
¯ÄcWTÃøÐÆ£ s\x001dzÆ¾)E£³vûÅl°üTÌb°Á¥¬k-+"ÂT\x0001Iy\x0000ùÁP\x0004{£`!´Ãu@ñ
¨ûÀóëô+ôu]e¸a[ó:¾]ÁIÞmû@Õª\x0002û\x0000\x000c¡ÄÃóëççÙ¹\x0008e­õ\x0019¡¦3]JÜ	BG$$IM \x0015é\x0017´a×ÚÏ«®ll*{T£\x001cÜ)>Z\x001dY:®ôh¢\x0014W\x001fþ®¿Ã\x0001Ç\x001fòC\x000e~­­\x001a¼ý ý\x001aw\x000fúwñ
U\x0004ë7éC·ÿ\x0000Õ¿\x0019z¦\x001fÿ\x0000}\x0007ú»ì¦Õ\x0014gí(úô*ÿ\x0000½öåýQú5 ôÒ\x0010þ·öY+\x001d:ûúÿ\x0000ltQUh¢\x0014T	úsï3ðUÑÍ¼4>'È<~\x0005°O)sìæ\x0011°AÞánó\x00196â­r#ÉhèwdEë'Ñ# TÄªy¥\x0015 þ¼°æo\x001fÔÌN¸üõÐ_íÕ\x0004q«/ËæÜpfÕ³Ç¦T¹ÍÑqãäì¤;³\x0003æ#\x001fÚÔ@*§pìQ[Ë¢4QF+àø}pûa¢å\x0013Óøs¹·ýÙÈoÛ"¹«ÇÕßÑ§nz ü]Ê¡]$ý*sÿ\x0000QøÓ5Õæ¨å_Z4QVÿ\x0000æ/¹\x001cÿ\x0000a>´ò\x001fæ\x000fÿ\x0000_÷¦³Åÿ\x00009oüb~¨aâ\x0002\x001cÍW\x0010¸6\x0005\x001bãÏ×\x0007!D¯hYc,Y¯Ä\x001a\x0019#±øs:ÜQëßØ!¿³^e{;5íF­áé;E;?åi\x0004ÿ\x0000Yõ¿\x0017¿«ÂmHÓðtq¾vZ¯ç]\è\x00127Ò\x0013Ô÷*·GÉpµ\x0018f8cÃð\x0013áéñN½Z~\x0017eïjÜ\x001a-Ò°Î\x001bÏpËÈÃ \x0015òcTlIÊwã@\\x001eHÓ)\x0001ú?p(\x0013ßó>m\Î7í\x000e¤ÖUíµb}_ì\x0003\x001bãëñµ§í2\x0013ÜÑ«øéåÆõo¨®tAx¸ã¥ÍçÓõã\x0019åß£º\x001bð:õó¿
>zÙÍNµ\x0010T^ú¶tâû\x0011ñÛ"Ãt\x000f\x001fýÚ<5Z}£ÿ\x0000Îú{ÿ\x0000¸\x000f*§Þ\x001b5½þïs¿\x0017\x0015É»WeòP/§R&\x001bì\x001e&\x0000Û¦ÿ\x0000>½ÐÆkÜþÚ®ÏíxÝ\x0006[JÉ\x0017âÒ?½\x0014¡AÉN	\x0013ËP¢÷L\x0000\x0000!Ô6(ïÔzëSm\x0008â,yV}»</p><p>vÆ\x0002íÛ¶ÁÝ¸\x0006Þ\x001bí·××\x0015®ò¼Eê\x0014§fñ\x0005CáLØ{»\x0003·b]fÂ°¥Ä ëp]"
\x001d6Hé\x0014¨%Óîº\x0000\x0000³näV_]kÙVôRÁÖ$ØÊ$r"\x0005\x0001\x0010\x001f\x000e½CZNF[&âÕª§YR\x0002Þõf{\x001fÜ?yOî|D¡òO\x001d
ÂuFÀ§ß­9o°\x0002 lO³
dª]ÅM\x0000\x000eã\x0007P\x0000\x001dÃìë)Ç>E»¾ý&¯`{Ô iôb£ïèö	U)\x0000ÂQ/nÄ\x0010\x001dÊ=Â\x001b\x0008u\x000ffµ\x001cO©»\x0019%kb:Þ·\x001d	çsæ¤·ÚÙLÄ!À½v(U»ë_u	@í:áPéÉW<å}R^¥ »ê^\x0007xhY4£ÖY6\x0016I	B\x0011®K(µM`m$tb@\x001b£¸}éT°¼ÉëG´\x000eI¯hf7\x001e	ç\x0006/</p><p>¿\x0000\x001eMèY\x0005wìîóçÄpò_ë\x0003Øwõgí\êùÎí®£â\x001aOP÷Ì5ÌõiñZPoT42¢5¤\x0011ªÄ\x0003Ã</p><p>yàêÌnÏ-1Ç¯LÅ¶¯»ÌúÁ\x001cõ\x0014±\x00086Àn÷«\x001d%ÊC\x0018»\x0014)ÃÓ^¤í<«}AÀÁÜxA­¹I@uV:AU¯ËÏ_#}hÚOtKtä:y¿\x001fð7V\x0016kÑÖÈ#ÆðQð®Æê\x0016¹í½i½ë\x0016é£:¢ \x0014È1\x0013&I3\x0015'w"\x0000%\x0012\x0016CßN9\x0013\x0014wÙ2à!÷[jeÇì¶â\x001f³è6=5ê©n
ý'&Jq¥mÆãÁ\\x00149pàHäxsíåkÖ¶*áì¿\x0019 ñÓçTÊÛ÷</p><p>¾[Í0îuÀî\x000e¡Ì©ÍÔzÖÓ\x0018á\x001d>\x0014t£ÃýeKyokt¨¨)\x0004ùn|½ª¾à\x0000ùG§Ì\x0003ìÜC o­¿\x0001kOâyÚõ\x001bñ=ßèp \x000cQ\x000fx6\x000f=¿T<\x0007XÕ\x000bIû\x0012«¹uä6²\x0013ä¹±÷9U&Ûqíè\x001eÏø}]n6\x0014\x0004¨Ý@V2I7<ê\x0018</p><p>\x001bûÃæÛY@Ø`pOj>SY\x001bkÄÕÄ
"ý¼|ÂÞÿ\x0000¨\x0010!Ìa\x0015;HP0QMAE2&@::Ý \x000c@0{¢ a\x000e¾\x001aÂêÖºB]<Ð~\x0012~«°[·ÍÆ¶Ó
æÚJÞIN£À\x001e</p><p>>K\x0003kßãÏ±µÜÆµ\x0008:´#k¶U¤UeJÊÜ<cv¯2Lï\x001f$W¢V$übj­÷Ügd¼ %Ý"¸\x001fwUo­\x001eÓ{?¥ì¯\x001cÓ­?#»à´vê7ì<íû\x0015&`ö*æ$f÷S©BMOuõ\x0001ð</p><p>\x0010@\x0017Pí<G\x000b|+¥\x0010ûX4ÃqQØr¼WÉ½nú¶¢Rù6eD\x0017"è¯pÉó(9v±Lªicã\x0003î\x0001! l>\õ\x0003ÚWªGÉks ¸Ø¦.ÐÊÊu$ñû \x001c.9\x000f~ô÷ºÞÅ%Qöª\x0011\x001687</p><p>SiSãn*Uô¨ü.\x0007îöW×\x0019\x000eøéÃÌ¿^²ÄøÊ*÷%â[dZÌèâo0OQå$\x001ccÛ\x0018s	ÔQ4X¹6â\x0000q\x001d¶ååçe\x000eeÖ·¿ÃÖ¢«þèz9öÓúîM\x0001À©Iåöf\x0017¥À\x0005­dê\x0003Qâ
»
½d«ÑyN\x0001G\x0016î:e\\x001aTÖ;êä+\x0011½3kÜcF]°uÅi%l1)uó>,«a!à$(û¸ñYýÕ·r£)¶2ÛZ\x0014\x000e¥pô~uc}¼ö\x001f!òm&ì¼«ºR	ï\x0011ðn,\x0005ÅÍø*Ü£®ê,LVS\x0013Î\x001ds3qsÅq.Ö¥,ýC\x0018|Ë\x001bxág\x0010än¹;\x001a	b\x0000\x0004\x0001·v®GL½·÷\x0006S8 \x0004ÏÅ%CSMä%&ß</p><p>ü4cáç¦»ø½­Ibdw1Ù¤¨ê}¾ 'µ§	µHÔHì\x001cþÛq¯\x001cK\x0002î¡¬øöAs%\x0017©\x0012\x001fOÐ%:j+?I2;­Én EXI¢ÕâGÜ½\x0000\x0013kÓõbu'\x0018ÞCkIiMi\x001aÙp»Äq²{@æ|ÔÆÜ7#·\x0000y¦l2®äRM¤\x0005[½<I\x0016\x001dµoKÈWLpñ\x0017tù±!{\x0014q\x000c±~vC\x0000\x0015Ä[Ã¸R\x001br*@!¦Ü¢:yä¶þ'(\x0003\x0000ëGáx|t!¿ìR^/?À¼\x001eãª@7\x00177A<xØr\x0017·\x0003b®wòïF4ämk \x0019¼%\x0006U;s+tQt²¦Y#\x0000±RJ\x001cEÔL o\À\x001bÅ\x0011
E[gÈÃ^d]+Æ«a7*	ò\x0011ÃX=­Ô¸\x0019U3\x0012pSS\x0000Z	oW/?n\x000e
:J¼Â\x0001;À¡Ü\x0001æ{Ä\x00107B\x000c^»D4Åñ¬\x0001)X¹µú56EÈ¢;á:ÉEÂÑÞO¿è¬r¦\x0005
Þ]À\x0007`ëÓm¾Î¶GØqDXûô¸Ìª/­rG·Þ¬YÌ\x0005ÜÃà\x0003öÇmc¥T¾$(_«%&å\x001d=\x0004<\x0003æùõæÔ»ZÔ£\x0005aAJ\x001c«\x000eáÒ}Ê\x0017cî !à\x001bn%þxGX}YdZâ\x001bP\x000f$Ý</p><p>Â¯÷!×ÛüÑêË·1KÞ²ß­´zªü¢YoÏV\x0003â?T~Þ¸õUùEefCeÀ8Õ²ãÔ¿PuÙ1W¨q\x001cët¼vò©Íôvÿ\x0000f_ç©ßØ$õâî5\x0005\x001eÛ½jAæ2XÏ</p><p>ôÏ&B½úVG/PÈ|lÔÚj¨j\x0014Q¢4QP3ë~pN© c\x0001[[Ä@¹ïaÐ:j¾«ÿ\x0000Ê\x0005ÐïñÙÏµRvSô3êÅ¿äøÏ\x001aç%\x0017\x0005\x0013{\x0015\x0000\x001f \x001bn\x0003ã×^Ù+ô×\x0003»k0Ýr{ÿ\x0000uùßgÕùõÖ»\x0003jÉ¤ý"\x0001\x0008-Èq\x0001\x0000ï1CqÜwÜGYRÊUÁâooß¥\x000b9\x0014</p><p>°¢`÷@»`Û]ü\x0005ù«¸Ó\x000b</p><p>t\r÷MghTö2	S\x000eæ(|Þ\x001dG\x\x000bòÞuÈí7â¨¤§ÍÎq\x000c\x000bÇ\x000eÃACAF<´ZæÝ&Þ·K®F%æ>µXß\x0014NVÑÆè\x0005\x00002«8ìE2\x001cê\x0014¢ÞÜ¹¼FÎÇHÜùW[b\x0013
jY\x0000\x0012\x0007$ß*tì
º:»¼!ô·`²©ºk \x0004·Å(lñ.8¿ \¨ÂÆ´û>rB\x000eF¤H§KU°5É\x0016òTlS\x001d îÈ\x000eV0ìQ³LlmTüaÄ|gzá\x001fý	\x0000Èé¿Kï½§PÝäò©ÝzÎõ\x0013,©)qÑÐâÃLê(.Âë\x0002ýÞÑÚxv\x0012+èËÙWØdtN\x00022\x0010ãDÉu
*Jeæ\x001c\x0001lÂq°5µ\x0004¹o\x0011ðOÙo`¤ò\x0006£Æç.×¦m \x001eÌµ¨S¢~õ]Ä\x0018í\x0010£cx$\x00051(5g\`²\x000e'±\x0013\x000f!$»§+©Ü'0ú¤¼ê\x0015¬©LÇW\x000f\x000bFÓ~\x0003¾ñ·i÷ëÑl\x0016ÔÛÙ\x001f(DZ'äþ×.8X*-"\x0010\x0000HáÊÏ¢\x0018y~aãY¨q\x0010)Þ\x001d\x001dGq\x0011(\x001cé}ð\x0007å&åùõ\x0014y\x001e!\x000e¸ÚY\x001cBõ\x0010æ\x001d´ù\x0013²m©\x000cC\x0007Æp÷PØÒ¢\x000fÓvY>scYÊ\x000en÷o¬Ò±õhlÛd»h*v!ªDvSy\x001fÛ\x0005 \x0019\x0000\x0002p^Ðn\x000c¡Ì\x0004.ÚbVMïQH¼Tªäxö,q÷?Ý¦nõÜx­··§î-Ôå£B\x0000<\x0017gAîz¯\x001f²-JàR\x000fíÖêelTÃ5n+ÁCL«s/\ò"Õt°cû
ávbÑî$ãäV¡ÖñÐ[\x001cR¾LW\x001eä</p><p>\x00056îFT(qÄH	\x000cé¶¾\x001a|èY²oÛqïUéöÓÜ[Ç(ïX·\x0007­àâÎgF6\x001b(H_8&LÆ86î¾j</p><p>½Ò£[kù5</p><p>~=\x000bÅÒbÓÇè¹\x0008º\x001cwU9<ÙÄ\x001cÊI#_§g\x0007LÄËå~4Íª$N*âØ«/\x0016sN¢fLèÀtW¯§YXØlº·^!:u\x00166âO \x0007Óp\x0002Æçyùíçú½v×Z±ogvtXø¾¿4ÊaQ»°²¬ jYh>Í`u¶»\x0014(]$éÞçd Þ\x001e2U¶ÏÙü ,´qÊú%ÊNR+²±oQ::fr9jà2K7P¦ û\x0007ªx¬¬\x000cþ8eñ/%øjH7\x0007\x0011Ûè¯½Á´ó»_;/og#»\x000b!\x0001Õ4ú$\x00026´pV {	\x001dÓÈÕêO\x0016\x0003_\x0002×ê\x0001Ð7Ò£I\x0001°ú­á^Zk\x0005ºR\x0010¡ªü\x000f`\x001có+|µNPå.Æ\x0013î#Ð\x0003oÍ\x001ddñ\x0018ò\x001aïw;M(Ù<T¥\x0000\x0011\x000f¾\x0007ptßmö\x001f<4¶\x0016VO\x000b\x0013Xî¿ô `õ^óÿ\x0000uÚ\x0001±zoÔzïõuÀâ\x0010,	ôÚ±.AiiBï\x001bpåîÒ\x0017</p><p>\x0007\x00071@@J\x0002>ÀÜÁ×§]\x0007CÐßo»mDù+iHt&ü	ó\x0013ÃÓW\x0013¶å*´þó~µÂÑè1¬¥À«í¸\x0010\x0013£\x000b\x0001\x001eØ5j\x0002nÝ\x0004Î²ï\x001b°Q~ûßû[§øÓ'-$\x000cc|5ß°XöVòÒþ6?«ã\ÌÌq´c¸</p><p>7ï¨\x0002JP\x0000*R¸\x001e ZµzýËù¨d[ËUñÕ?\x0019ÖåüMÏ\x0017ìló0ý\x0002ÍBñÿ\x0000\x001eüeÇèNB¦î\x0004Åî0y\x001duO÷\x0017´Öòðs\x0014Èc\x001aS`§<Ä\x000f!óööVYy÷áøh
eä\x0002Ó²R\x0016nBi\x0016UïÞÕktÁ:çöCUS</p><p>\dÐ\x0017!L<â]m(r:y\x0011\x00127Ie%\x001d6Ø>íd'\x0000ÜCqÔ9ëOQò!ÆÎb[(U®\x001bH)·;\x0005yi\x000cu\x001edLaÉÑBÜVÝãÄY:Ç\x0011pn\x0007m(#}DòÙ\x000cÁnDSf#aÔp´DVcâËxªëwë.\x000b\x0010ÊÙ±Ök\x001cä/ßDSOm±DuÆ?©{·\x001eÐyÂÔ[_n#æ<<¬Óº¡2DvÄ¶]È¶éR\x0014¸éa"Ü®¤^Ü¹[ÑjL9êÄØ£\x0014åF8¬S],Í\ãír\x001abécR»ÉUê\x001eí\x0008</p><p>KÞí5\x0013 =Î ·êlG¦-ÌSÓðÅ'\x0013nÏ jÓìOh¨RRÌ-ç\x001d\x000fF\x0001(õýô´y]Û£Þ°î\x0002ypçdo¯5fàF$¸@Ø+v©þDãé,{o¯Ë4q_°\x0003÷ÐãÎ±\x001d1U±\x0017Ø\x0001DÏ÷E
kuÐÄÍÎU\x0018-ITE8p\x0017àO\x001eCìÔÔ	°2;M¬¦\x001eCsq¯HmM¸ÉÔ7\x0004ùEøÊå>\x0018âpMMÀä\x0011ûÙË¿b·¼tÌ?vA8Ãà:µòP#(%jI\x0007´r\x001eá¾\x0010,¤¨\x001apã0\x0007Óbìa\x0000ê#¿°\x0003åë¬\-Ã¥rBWe-\x001a¨D\x0008pØ?<\x001bxý}\x0002¶£~çìÕÇaÿ\x0000B:î=5¶5\x000fMZ»!ì\x001e\x0006\x0001úÝt¦9</p><p>T¤Ã·\x000eQ\x000eö§pÕR*C\x000bÆÊ*¦â\x0018¥Y²(äX9\x001d \x0018§\x0010>áÓ]S\x001e\x0014¹	bpIh\x001aí¤\x001f)­¸aKÎ\x0015\x0005ÚÂÔùpï14ã+0~[zÝ\x0006ôØ» @äÆÂb«ôÎ.È¨ßYË\x0001ízÉ¼T¹ÝùFÜ¢tCäÓc{í[ke1ÉK!ö#ø8\x001ciAÄ\x0010m{Ý=kw\x0013L\x001c¢%:\ZK¡$_\x0014t¬\x001f1I5*Ò	Íñj³+ÕÖªÎÝ}\x00199Ë=âx¤Ý%o\x0002äáÅKUz0é\x001cAôJ\x000c¬Bo0\x0004è\x0010©\x001dB\x0002\x0011¢f\x001c()jÇnÌaaí\KyHà<Ä\x001béása{Sø6ËS¥Fe6\x0018gôdñ*Tg\x0000+I·\x0003ÈØrã~Þ\x000c'\x001e\x0014ñÓYSØ#êfjíÎÚâ~\x0013ãüoywfåóL#öäÄù¦\x001d\x0016Nëñ¸î)&©ÈäÛþ\x00193\x0010w&Ê8rÑ÷fáÄBÙÙCPåCÏ.6\x0014</p><p>{í,µ­a6	°ÒIÔk®<âÐ$äq¯8ú$%E\x000c\x0004iÖ\x0005%bÚ@\x0017ãÄÞÜ*\x000bÜÇIÃ\x0019xi¨ùäÁWðs\x000c\x001eBËÇ\x00150P@\x0013$gé "§aDH\x0005í)zêÉ@ù1ÇÜ}µ´àIH</p><p>Õm#½Ä\sóÔTVüWW\x0012CiCW·\x001d`\x000f-û=ÚÅH\x0001ÉéM°\x0018\x001a¸\x0003\x0000\x001cª\x0014\x0007É0Ê\x0010LCÃì\x001f\x001ePÃºsM0u6ú/çï\x000eU«ZÆ=ï/¾ßíM~\x001f¸Æ¼\x001f%ÿ\x0000­j³Ù¯Ïg.{÷ÿ\x0000\x00137\x000fÆS^ ûCñ´ÿ\x0000°X?\x001a]Y</p><p>¯th¢\x0014W\x001fþ®¿Ã\x0001Ç\x001fòC\x000e~­­\x001a¼ý ý\x001aw\x000fúwñ
U\x0004ë7éC·ÿ\x0000Õ¿\x0019z¦\x001fÿ\x0000}\x0007ú»ì¦Õ\x0014gí(úô*ÿ\x0000½öåýQú5 ôÒ\x0010þ·öY+\x001d:ûúÿ\x0000ltQUh¢\x0014T úç	º>]iYç»î0Æb\x000e7Jfü³XaÁJ(#"jè[B\x0002µ55lg@+Öü<¿ÐÕjs©%>õ\x0005LÕ\x0003L`(§Ò-*³\x001flíòndÈyfñÈ;}¯Ñ¹Û\x0008Çñ ã¬°ö³Miøó0é>1</p><p>;\x0018i\x0016ån³à#ÿ\x0000¤\x000eíu\x001c\x001cJQR¹¢4QF+àø}pûa¢å\x0013Óøs¹·ýÙÈoÛ"¹«ÇÕßÑ§nz ü]Ê¡]$ý*sÿ\x0000QøÓ5Õæ¨å_Z4Q^N\x000cB ±Ô ¨\x0012PÇ!KÜ'!Ha1\x0000¿\x0013\x00146ÛÛ¬O­
°·\x001c\x0005HJ	"×¸\x0003·müÝ¤©N%)6QP\x0000ù
ùÔ>Öùa²:Öü{Äz\x0006%Âð\x0015g¶\x0007rÙ\x0012b%ø¼@ïË?Ç\x0011\x0006víê­c\x0018ÅpR¨ *n;y³öÝ{ÅÜÈötÄmí¯Ç¸ë®9=æZ}JQqo¸Ì\x0014\x0003wTRT~Æøñ.\x0014(¦öeº'µö£pwO\2½ÁÛ	m¸-:¶t\x001d\x0008m\x000fNsà¥\x0001@\x0000\x000bd¦á\x0003­àuZãi¥Årg"e{ÅþÝjghh)µÐoV«F³²>9\x0010hM[¸YV`'P \x0001MØ\x0001°o©·ÙCnn|¶Ûg¬»×pds\x001b9
m²cÇm\x0012V\x0000i´Ù!GÃ\x0017(J\x0011Äé@¹¨ÃÚS5Ãî\x0007ºEµpìf\x000f	4+Æh)R$8¦\x0011róª%JH\x000bà	&âäÔêßU_¨Àõh\x000eî1Æ\x0013mûòL\x0011\x0000>Q4
?ªÓí\x001fþuÓßüMÀ|aU?t\x0014]\x001bØyz}ø¸®UÑ\x0012¦fèBm¸Å
{¡8+×^ÿ\x0000\x001a¯ïxó\x0006
¡3À}©\x001fÞ¸\x0006*b\x001f[ùºÔ²«oÔ¼Â²-Ú.	ô(í¸û4[ß¤ÉH-;£ÍÙÆ²Hn</p><p>\x0007]\x0000Á¿³®¹­\x0015ü\x0013ä¬\x0016:f\x0003\x0014ÝCå\x001dôq­~ç²)¸XâC\x0007p¡G`ñ\x000f\x0000ùõ×W\x001bR4jCÊBm`k6Ô\x0003\x001be\x0014ß·ôB>Ðùu±\x001cÝGe$df¬2-nt¢Qc\x0000\x0010Ê)¶æ\x001d÷Øw\x001fgÔÖà>O5#	W.~Ï52AB|Jn;\x0002¤ï\x0015I¿q@È\x0014 a\x0017^÷ÞÃm¼Íµ¡Ç=(NÂ^22
\x0016ÜðU¡HI\x0016¸&ö6í­¬Lø)q%0½\x001a<Ô:¥IOê\x0008Z\x0001åÝ¸\x001c=ê<ÏÇ¾8Ó¬\x0018EÇÍØg\¡j±1Zá0àSv©c\x001dEº|á'$l/ÅãõÖUºbQ2\x0014Â\x001a¥³½úV¥áö®]ì×É\x0019V\x001fvC\x0008\x000fëºx¤\x000b\x0003ssÌó75í\x001eÛýu>Øý·\x001eîÛîíTî½­\x0003[\x000cGðì¥º@Zô\x0002R	\x0000ò¸¹#\x0003\x0018Ü±ñ0ðÌ×Xñ\x00111ÆD5t«¡\x001d\x0018\x0007\Äd>YÚ¨¦\x0010!;»S
»vÛ^tÓ¦»w¢ûU==Úªö9¥]\x000buÐ££i\x0017P°áÛ_<ÞÒ¾Ñ{ãÚ£«9\x000e¸u2.*6ýÈ4ä|\x0018Å%hÔ\x000bÉF¥»+½cÄXvVL¥\x0012J\x0006?a</p><p>\x0005\x0002o¹z~{m¾ëçöéúMWboó|ß;¶®Óûúÿ\x0000lt</p><p>OöÄýOìô×5©F(þOæÆÔ\x0004
ñ\x001dàBûÆòÅ"</p><p>\x0000c\x0008ë¨Ý\x0003îÄ\x000b×æ×U6â\x001c·Å'÷'µ^à­¨jR^Ò¢¤²G{Hº­q`\x0000ãÏ¾*{ªÐÕú#H©K<¾=C)Ø¡XÜñN1ÊÏÜÄR\x0016;Èy\x0011Ù\x001a.ÑQT@õ¸Y\x0005\x001aµ\x0004»­ÛùeRûNûRFÚ­/aìu÷cÀúÄý¬ñ\x0016¿`\x0007ýÊ°=?Ù\x0010læg:GÊë°<\x001bP)\x001ack8\x000bqáÌ¬9F\x0013(²µ<³åô-\x000em\x0016WQkDúÿ\x0000LFO*ø\x000cº\x0004³0UÕiFdM1øvl"-Ò\x0000*i\x0010¡¶¼¦.V\/'Öüµ\x001dDÄ'Ý5ÓqGÜ«\x0006FQ¥-¶Ü\x0004\x0013`;\x0000½À\x0003²Ã|\x0005\x0002¶(À=¦/èD=W®µYBB\x0002ÐßrþÚ#jSzÏ\x0014ö\x001f(\x001f5¾n?G}ºm¿³p)ëÝ\x00045ÏYV |»9ûíù\x001aøØª°tÚB=Ë¶ï(UX½bíÛgÎ\x0000þa\ÇÈ7Y'­T!¶\x0010\x0012(\x001f'Mp4pá¤Fü}ßw²±ÇÈ-!ä:¨®%_
\x0002Å\Á'¹\x001b_\x001b4ö§«y \x0010aÚº\x0019R"£V9ÊªÕ$²\x0004j$\x000f½
æ\x00015Ê¬\x0019l_5Çj\x00135\x0001\x0012*°\x0014Ûis\x001câD\\x000bq\x0017î©«ø=·ÒÞäb1ó\x0010s.¥;\x0005¶ô¢C)JP7J·$é	\x0006ã\x0007{Ç(ñâa\x001b
:ÐÕÝfÚÜí ®µC%pÄÙr\x0015=Åx¹¸M\x000eõQ\x0002\x001eDL4BU¸ùME_\x001bÝ;W$ÆKo¼ã\x001e\x0012®ß£ky\x001d·\x000e=¾^ß6Õòû=Kf3¯\x0014áïý¥n\x0012\x0001*Òl-Ë</p><p>	çráCÈb¬'lÏè\x0019](\x0004g\x0005(õë\x0015w>Âhú½âï¥q4á³vÒë/\x000cE\x0004\x0013+\x0013í\x0000ô/£Ü1\x0012ôm±ÔËZl!\x001f\x0000òâá\x0003ÈxÞÞSMÙÛ{nîO²cIÆeVó@Û$^ä \_!)! ÞV\x001b\x0005jaýjË\x0010î&Á\x0016t\x0013\x0002ù¨éí]"»C\x001d«çHÈ=j¢­t\x0014Ô1v\x001dz;Ï`·F9¼¬'\x001a¦\x0016(R\x000f+[\x001f~¢¼\x0013!·åª&M%©	åb\x0008°\x001cH7!@bü.x^·\x001f¹¬ÓYc+Ã ;ò¦di\x0015?¤¼¤Q¯Ê.~áøã¢
Õ\x001f\x0011/`õ\x001e¬-Ó·¢¥>³\x0019 #UNÝ-ê\x0012ã°³ï¡V)Qæl\x0002nMþÄqÜCD &2\x0001¹\x0005òýáê){\x0008É\x000fº?(þÝD\x0013&+Å1û\x0001µXÇ12\x001bBVø\x000bãX³Å(nâGa\x0011ü÷_\x001dþMo Râ\x0006\x0001ä\x0015h´7Üÿ\x0000=ùðù¾RësáJøï¯M&ÝEª¯±M¹DÛ\x0008\x0007À»k4¦5-Åb\x0014b±#·\x0008Ûøýru×o1¥\x001eÛ\x001aÄv¢%S¡G¦Ûtön\x001f.+\x001a© a\x000f\x001dÿ\x0000®++\x001fl\x0015fcöÜC¦»'á\x000fM(\x0012-S©èíýïÌ¿ÏS¿°IëÅ(_§\x000fZÿ\x0000±\x0013\x0015éÞCôTéWò~Cãf¦ÓSåC´h¢\x0014Q¢\x000f[T~"·î\x0002ùî\x0001Ü>\x0001±àÇ¯PñÕ}Wÿ\x0000\x000b¡¿ã³\x0014j¥YH\x000eû\x001dõY³Û\x001f\x0019ñ\î}\x001c%/¾¢f(\x0007P!v8ôö\x000fË¯m\x0014
Ï¦¼®\x0010Skð¯j7í\x0005\x0007}·ÜGÙõ\x0003ç×\x00164zù¿Ýª\x000e\x0000S\x0008\x0006á¶Þ>>\x0000>ß[}¬RSèðÞR<«"ÊDJ"#¶ÚîkBTg$µ¥¾c{&W®)[g*±$\x0018µ.î¸]R5lo\x001eåÎíb\x0010\x0013ñ8\x001bf¹H*!=¦<\x0019N]µ\x001eèæ<µ¬£xos}\x001aç\x0002`\x000by¾`Q6ó0yû\x0007iô¤\x0016\x001dhÈ¦/ã>%ÀÌD_E+ØÑÔ°</p><p>ï\x0000\x0000K·]BrûHõ%ÍqÆºy	Å6ã$$¼ÚV/n6Pæ	\x001cÇ\x0013p=µéD\x001e~¯Og¨=GÝ©T¾»oXáøñISÍFRnÛÛÖSÀ\x0002«Þ°Q°4FÏ-\x000eñívãpxâRËyÉ ­Âéjpçb$y)/=\x0008Èv\x0019\x0014­ZGÆ Ù¤cdÓE·ÞÈQÕÙ¾Î}4ÙØ¶ ¹\x00124ìªx\x001f\x0015\x001aÈ·"=$Æ¼ùê·´\x0007Pò\x000ezZNÝÚ\x0004\x000b\x001b
VkQøN<´ü'UôÜyñçYY\x001aæ\x001bµ"£k.,j'9\x0000ã^I«¶ý¥í\x0002CÎÀ)n%tQ\x001d·\x001eº{åzO±e´\x001bÊa1í¤\x000eéðJxùx\x001fPÖ\x000bÚ·¯\x001b>W¬á7nàÆ8£räiA*çÄép,Ú@\x001cyS\x0001}àk+!¾?\x0005¸ó¤%\x001c$8XßzÙGî\x0004E\x0008ZÇ!-Tr¨\x0007ºá\x0003(Ìû	÷Ø6Õ\êç²\x000eÜ\unm«'Õ²ûRW=ÍÛ^¦{,þ·.¨còQ¶¯_"§?¶ÀðÓ\x000f"Yì\¶¸¸ñ·2xR\x0002ôÕï\x0005é+ã\x0018\x0017å¦f­«\x001b2ô\x0007'RÃ8¾lªüw\x001fq\x0005Ù\x0000p¦ND¤\x000bÃ-«ULÉª_0uI²Ø
Ã±T|³\x000biâ¢xÞË\x0007Z´6\x0003ç\x000ef½Zé®ñÙ¾×Û¹Å\x001b+\x0019þ`\x001e*BÁ{ÅH\x0004ÉØ:Íì\x0012ÞÊ\x0002ÜO
\x0007"DjB³D+FâDÓfª$òû\x0011Ü¾YÊmÔ\x000f86\x000567y½£¾úi9\x001a\x001c§S%å\x001f\x0019}z¼PU\x0004!Ä:¥²T¾â\x0016l¤rK\x0003±²\x0005¸RÆ|°ã»+[Uy\x0008é%þ\x0011Ä\x0004íZe¹\x0016¬dJd¡|«\x0016;¸±2J¶²ÇùklTW\x0014 ä(ëª¤äã;àK\x001a\x0018&ÉWæµÿ\x0000l</p><p>oî^/ubW%Q ¥ai}&Ò#<¸ÊøI\x0017¶­<Óp{*hø½b¥"!±\x0004\x001bù	ª)òy/Sr*8[\x0012ÃH\x0015\x000cÆÛBë\x0018T¿à\x0019SHÁ1ÖQÜ0\x001c¥\x0000\x000f,Fäû'õ^N7<¾OyN¦Y»$ù\x000feÉòßÉÃçjùòýk^Éù,Þ\x001c{Bí6[wucV"gã²\x0000CñÏ\x0016ç>\x0011Ñb¥\x0014ü+xÖ×5xÝdb»¼ %1GÜ\x0012a\x0001
Ç¨\x0008x|Úô%Ä¯ÕÕÿ\x0000\x0011Ý>Êùóiå%n0xÑI\x0005\x000eyR>\x0008\x0007ÑÂ¯Hr¨\x001dÅðßoµò}]d¬Ô¡IuTÄ\x0003À¥\x0000Ü½>ä\x00005Áµu6¥#\x0005N\x0006LÝ\x0004Çñ\x0001\x000f«áì
cuàÓg÷GiÉu°\x0003FÞ"¹zjîÛz¬cj¥úô\x000fa#\x0019]®×+â\x000b\rmúhýÜkE`P:®¬së¾iÄ¾\{B(àæ\x0000ì\x0001ºÃÔÖºk¶Ì÷È\x000f8\x0010{u\x0011aèï[*SÃ¶b¬zâC¨ü\x0013ÉWú^\x001cxöÛ¢ó8r</p><p>Ü½ÍIë9ëïó¼*kDD6*38³Q*\x0017=\x0007\x0013Ãº3iìÎÉ@!§í\x000e\x0013sð·I¹ÕP9<©Ý\x001b;»2ç9.H$\x0012\x0015s¡\x0017åaÚ ;mÈ-©#5º\x001fä\x0010ìÄ(JÀða¤q²tà²x$©)\x001cJJkA¹Ae\x0008"á,É<jÎe¥f0Ö{²9]ûÜIv\x0012«+ZÈ³f*Ò²¸K!HdxU\x000e°ÄHªGiS\x0003qDyì3 ãëQS}O`áÈ>>»´7V+}`¿ \x001dBRêÝ*;¶6²\x0017«Q	\x0004\x001e)¸>t°v:\x001fÙç)W)\x001aåÚ²¹âìÑ\x000f\x0016\x0005jìû,ºGQ«ÆÎ\x001b¶pÜThéº:j\x0008î\x001aHr;x÷þN²ç\x0001èýÑùDû«nevÖYÌ>Q¤´ú\x0015À(\x001b¨\x000eN§¶Ë¸±ãÄò\x0003OwÅ¶E#\x001dªc&mÊ¢Î\x0013\x0008v¤t</p><p>¢ç\x0015\x0004vèCo­¨Ð\x001cèe{¤Æ[[ú«l)çmdó<Ï£·\x001c¼¼Ý@¡r.¹*\x001cc¹\x001aéÉNQ\x000fF}\x001f<ÍÀ«ÇÊE¼^&Ë\x0008ô	Ú³7¨ªÞ\x0002\x001e\x0003¥tôûx\x0015\x0019ÃJe¡Ä(\x000eïæí§\x000e:\x0006ò\x0010Ô\x0008óq6ðNøvãmj	Rn/ÀÃ;Ö\x0008¥-4;&!ºP/\x0018æ\x0005Ò:ÙÆZX åh\x0016tZªÞJq\x001e.ÄfÎZ»IÑe£¨eQV-UA¸</p><p>\x001d§MëÓÍï»:IºQ%\x00164Þi|PFµ§É`8Ë\x0003¶yÙ»Ã1¶q¨ÅdÌ¶¢-wq¤ý<¤>s\x001c	6á¤Vy5ì^pÂ}¦l5;d\x001a§\x001a¥ö$Q<u¢ªõR\x0010Ý$ \x000eX ¼s¢*ÙMÌNáõ\x000fmîì/P¶Ûy¾½Q4é\x001dÜ}ãV"\x000c¨ùljeE±¸\x0006âÜÎí¥Llal\x001bÁ·pøïól\x001awµ§ÂHAº4z+}<\x0012\x0001ì¥Ó\x0006Gò¾à¢\x0000\x0005ö|Ý|7ßY\x0005mF<UW¿\x0004a\x0001÷	°Mý¡·MÇ];ÃÓ[%\*Ð"</p><p>@0Ì\x0011í\x0010÷Ónû:éRÜ8Ú±\x0019«\x001cíorO¢@Å?¸;ÇÚ\x001fð\x0000ÖºÛfC¦\x001bêÒ\x0016\x0007Ï]1EÍ\x001d´ýT¸³Rãó\x0019£'»ÆØïéy¼_+0U£Yo9·1²øb"Zí¢(0\x00076Ò\x0013</p><p>Ä\x0010?Ot7gä÷¤¨\x0006ÅÁ·ã¨.bÒ0I\x0017R¬IR¬t \x000e67)\x001ciÐ¸©N\x0011ì\x0012\x0011Ý@±*Zø\\x000eÀ\x0010\x0008*$ðºEêHð~S¹±ôøäÖFpÝíS2Ð¯>|î2Hµ4sã\x001c~±÷\x0019ÇnJ\x000531\x000fQ7ª§ð
÷\x0011\x001dC»\x0015'\x0019Ìà1§K°¤'7\x0016¿zúl\x000e\x001c	J®\x0001·{Ð)ÏË!G\x001b¸¤¹f\x000b&JçÅÕ\x0010\x0010£û .\x0000æI\x0015\x001d\x000fùKÉþ\x000eÁZ¸k\x001aÕxíqÄÙ\x0002ùQÌY\x001eW¢ÝæìË(ÆÊ¡`emwæÒ\x000e"!×\x0012j-\x0012*IºMD^Ñîî1û?\x0003½åµ½3ü®\x001ec(q¨Ëq^\x000b*RG¡´c¯UÉ¹\x001cEé«+tn,\x0014vö\x0010Gf[\x000f\x0010µ¨
Jãqr{\x0000<æLI,¾¤T\ÃÇ\x001eS¾¾g¬}¯¹×Z\x00026'.ÄOâ(Ð²YqnBa\x001c7ªì\x0001TòLð\x000fðç\x0000LÂs*>àÛ¿,¤MÙ·¨[nDö£½\x00108TÝºRêP¢J\x0014Xªß\x0008^âôâÅî\x0015n¶^ÃeÐÂ³­Ç[¡Ä[Q\x0008±)&ÄG\x0001ä6ì¨eUßÆÂ\x000bàI\x0004Jò(^\x001b\x0014C¹ÓQr¡Ó\x0004Ã·e\x000e ÕÕÂÇ\x0008Ì°àÿ\x0000u¿ïEfø¹Î_\x001as·ÈWè]èãûkßå\x001aÿ\x0000©j¾|=¾\x0016þÿ\x0000ÄÍÃñ×«>Ðfòöòì\x000c\x0017ÅJ®¬WÚ4QF+ÿ\x0000W_áãù!?VÖ^~~;ý;øªuô¡Ûÿ\x0000êß½SGÿ\x0000¾ý]ÇöSj3ö}Hú\x0015Þûrþ¨ý\x001azGé\x0008[ûA¬B}È}¶:(ª´QTäHUS4Ó!¢0\x0010!\x0000Lsæ\x0010)HRâ#Ð\x0003E\x0015\x000eüÛô¦äW\x0018rO,²¼<6V´Íc¦ø£\x0011oÍiÙÅÄ\x0016Am!Ýå\x000cuß¹©äÝ'-I&ê²þÆØñ&Öí"Æ0ùz(­³à;ÕIjâÖDÌ\x0010W»¬ÙC*ÚïY\x001f"\s*S#_º"Xì,Û[
_èFñ\x0008Åª4¢ãX¶A\x0006é Tû+uôQF(ÑE|\x001f\x000f®\x001fl4Q\¢zp\x000ew6ÿ\x0000»9
ûdW5xú»ú4íÏD\x001f¹T+¤¥Nê2_\x001afº¼Õ\x001c«ëF(ÑEkvZâN\x0000Í';ë=NÅÚ Â¸Q­[ZLcùÍÄü;ÏÜqÜ\x0017\x0005;õ\x0001Ô'Ô/g~u7SÛ\x0010Â2ª)>µ\x001büH)%IQq«x*$\x0015.\x000bñµK;#®\x001dNéúD|\x0006Qã¿\x0018¯ÿ\x0000FPµ¬ZwPH°úM'Èi9ÇN9[¸ñ//\x0002Ã0ÏÝpÀÂ\x0015µ:gb2\x0014¹K(õÊ¬&Ú&¹]ªÇ/$L</p><p>©Ý»úFèÇE÷\x000fFæ¿¸¥äúsêÄE% »\x0015å=â(¥Ôð-
)\x0008\x001a}\x001c/J½Uê¾\x000fªPXÉIÁFÇïÿ\x0000XÕ*lu¯D¶z\x0012\x0016ÒÒàP\x0007UÔJE¯[i«\x000bPE÷«Y»8Á\x001e\x000eÜ\x0008mþM ,ã¿ÖÕiöÿ\x0000;éïþ&à>0ªú	Á\x001bØÿ\x0000îû9ñq\#(o-\x001d0îDöØã¸î\x0001¶½Ðo5ïñ«þø×q¥¡XÖÀía?ÞÈ£$r{;vþxÆñÜ?ãkNÂÜýÑù½Ú¹úTCÀÃ·Ìc\x0007òu¸Å´qòÖ¿\x0012äÚ²å\x0005C°\x0000Þ>\x0001ò\x0000ï¾ÿ\x0000SYt§È+Mõ,6xÌ ëÌÜ\x000e S\x0008\x0014»x´}¾Ý\x001aSä\x0014©ÞÂk8ÄÀ\x0002"aè\x001dzõÛÝ\x0001éòu×:SnU ç\x0017N®ÚÏ7÷Ç¸¾ð	D\x0000CÚ;è\x0000\x000eUæÒãe \x000bú)C\x001c\x0006Lå\x0003¹]Âqßm\x0001¿qÇØPê?&»R\x001atAt­Ð4vÔÈæ\x000cÞ\x0015AqJ¦¨ÝkQÀFbUaÝ\x0008\x0014\x0000\x0005\x001b r{§U\x0003v</p><p>"DÈ;OM»zSS¯I\x0004÷ùHmxø(²UÞ±°½Ç\x0013Äq±¸í·¹}*DEGI\x0019Qó\x000ef\x0016Ô2*(e×\x00185N©Î}Ìcû\x0008Ï¦6ú\x001a:Å¶X	²DGïç:ù-Ký1YwØ¯¨ÒI%KÜ8ëx4{}ß÷yÖE.ÍúÏÔ\x00047û:°¬§£Ä^oEPe\x0015Hp\x0010`{=\x001eOr¯À»ô\x0000ß[ÜM&nup@\x0010.Â\x001bxë°¬K7>jöòú\x0011üÍscXµ¤p½\x001eR¡\x001fÌþ^\x001a5£Ë^ÿ\x0000\x000e²1@÷</p><p>\x0002;J\x001d¥ßmÍ¸\x0014<}ºÒu^¬Â~\x001b®ðó_É[H\x000b¼Ab] \x000bóáÈ\x0003ÙÇ³\x001eÚÚ~\x0012qÉß)¹'ñ ²\x0017\x0015u\x0017R×ªÂÖ>\2\x000eä\x0013]BÅZyÙÐ`D@§\x0015Ä\x0007p(í\x0019õ§{·Òý£#+\x001dz²\x0012ð\x0010V:Ö8[üäÀMNÞÏý-Éu[©0ð1>M°ëîX\x0010$÷Áàr\x0010lI qµo_3½\x000eù\x0010¬ýÏ-á\x001cÇ>ºw55F·GGS/¥jEE¼maÊj\x0012(Þ\x00161³vlZÁ\x0010D 	mx¡¹ö¤N^e\x000e\x0015Êæµ\x0005(jâtr-Ú\x0007\x001f çW«Èû±®çödu6V\x0018°C©	\x001c\x0002\x0005ô®ä\x0002\x0001{`*\x000eâm¹C\x0007X,\x00149fðgd²°÷ì7+Î$+lq"Ìmi²\x0015&nÔ)P|×á\ö\x001d\x0005ü\x0004bô*f(\x0016\x001dAÖ
UÚ\x0001#··ìª{lKs\x000eó$Ml9\x0019ád\x0012x¨%+åÍ&ÄXZ®s\x0012µê\x0005Ú\x000eNÏ\x001d§cAGÖ,\x001d`\x0017î\x0006\x0007!\x0015ÃöWæ+\x0008ó\x0018\x0014Z\x0015Ù4Õ3\x0000¤£
¤FæMñ_a´#½/ä·aùÞÃ3\x0011ËGNC\x0008µ# ¥\x001f\x00166wVyªÚMÀ'²úT8\x001e5C\x0007äÇA9+\x0007\x0015àT!v²déÈìs\x0004Bì'"Å\x001b#f_À}Öì\x0011ú£¶¹\x0012l¥Ø%¶\x0014;T«ÛÊx^þÔÇìÌÜ\x000fYI\x0014u8mÀXqO\x0005p ÒxXZÔäÔð$\x000cËs«\x0001aÈùtÄrÙ\x0017gÃø²Qµ52¨\x0000UG'dWuªÊ¢äJOI\x0015Ñöá§\x001e?l?_Äisåßmz|ÜÅ¿b</p><p>Ø¸pàS²Å§A66<]°>apx_c¦Ã\x0010ê¸blnÄ\x001eE6pùÓL¥Êº\x0014,\x0006ì\x0008U\x001d¬Þ;\x0017CH»]Få7x¦Q:cu\x0002\x0007 ½gÈ6ÖOoà$\x0016</p><p>*t+a\x001e@9\x001eß-(cöÆÝ!iKEÆÊn¤Iq(ánwaFéó+¬KBS+q\x0016zjjáFõ»`2üd¯\x000f(/²ñ\x0013/Ø8AÓ9È©IQ\x0006
Bv»n\x0005]Babn]03Ø¬®ÒËHÂîvÄ\ªÚîyöûµü\x001e\x001e9è\x0018ÏR8Å­\x0008.¬÷MÓ¥E$8Û°Z°ëa¬s5\x001céË</p><p>¼¢Ú´rêns\x0007å8|æ\x00111iv¨öZÁçYV¯Û±L²Æ/Þ(ú\x0010[Þ\x0012</p><p>x\x000b\x0005\7\x001c{;oD|\x000e\x001b$&*\kHJR¸¥+næßm\x000f\x0010âmÚ4ÜÛU«"ê¾ðØJ:vV>ÉúÎ9r$Q,Âÿ\x0000ò|¬J0-\x001c¼"o\x0014­\ZÈ8)\x001cCî\x0008\x0014 P\x000bóì3¾çÓ/¦\x001cuØO°\x001dh©EHm<ô·~	\x0000ñ²mov{§o+!²²/Éu\x000e½,).q</p><p>W¬:[â\x0002\x0002Sk(ö 8\x000e,q|Æ+Ç"/\x0019,¶ë½§IÒ*Vë@;É8)M¹G~¯Pr*\x0005±\x001eÀÛ-ñãs~~=A-Ip:
\x0012Oîn\x0008Óäì¹\x0002ü9\x001b,W;\x001bñÕBêb\x0001]ÏEyI\x0015@\x001f&V4æa0\x0006ý	Ìí\x0003\x001cCä8j´çqë[*àTn+Ò\x001dcsm8r	\x001a¼\x0000ß>7\x0003\x001f/a>ZZ«\x0017
åëu\x0001\x0010\x001f\x0010ö]52h%=ë\x0003ç©	\x0010a¤]7°¬z±\x0011LÀA\x001f\x001eá\x00110øl%\x0011\x0001Û]}voöÞù­È°ã\x0000BT8V
Ì\x001b!L¡æLP÷ö
<Dw\x001d½á
dndÕ8uX~5°b1ce\x000bÚÎëé(sB&\x0003\x0007»°\x0000øxu\x0001Ó\x0015ð¿Zÿ\x0000'\x0001ôß<Ò>B\x0008è\x0004'\x0010\x0003ûwv¨{ÿ\x0000 ý]uÔ¡Úo]\x0014Èdè½é1!\x001a ;\x00113\x0018àPØ\x0001°\x0007_`\x0007Ou(º\x0001&¸åÄR]Ê*À^Á(à`Ø\x0003äñÒ-¨_Ë]õ\x001d&äÔåú:ve\x0001è zÿ\x0000WÈß^)Bý8º×ü¥ø¯R¤ñöNéAÿ\x0000ìüÆÍM®§ºhÑE\x001a(£E\x0015\x0002>¹.\x000cÖÜ\x0013îio0u\x0010ÿ\x0000ÊÁ\x0007xxê¿é+ý`
@æ_Î|Qªr\x000e\x0006½ú®áà\x0004|gÆMsR\x0013«\x001bb{@Ca1T\x001dÀ<zuùC^Ûª+¥GµëÉç''Â \x0013kyê¯¥ÿ\x0000§©ÿ\x00007òõÓÕ\x001cò|ÿ\x0000ìÒ­*¾}^§+ºe÷ÄzxÇqê>;¶IB\x0002HãG­'ÏózkÐ$Äz\x0014Â#ó\x0018z\x0007Ëã®êKkaÖÝ:R¤Zþ9V´\x001eam´\x0002°AI·\x0010	±·gÕÙ\x0014;k½â©	#g·ã<}b¸Ñë\x0011,]KÊMd\x0017\x001f\x000bX£\x0002\x0010Ì»É\x00161Sä|çË!¼ lC\x001bbî!\x0012{Dî×vJ³\x000fâc>ìò\x001bÚÕ¨x½Ò´÷®/}CY\x000fcmê?´¦ÜÇo)âíÎËñ\x0008\x0008XehXWuI:x\qåYûK4(°xó\x0003ÃH\x0016B\x0017\x0006WS2ÇT÷LÙsE+fyÈ/U:ª*æBnÖüY\x0000(u\x0014M\x0006\x0004(bé~Î½;;\x0007`F-?åÒÐU¬]z\x0001:âUsÆükCÛ­\x0012zÏ×¬þg\x001câÇ<äHa³¡¤4Ê´'ÁJ4¥	RG$\x0004\\x0000\x0005&Ð0îxwÜ?=¸í×ç\x001fn¬*Ûh?ã$\x000f\x0010ÆÜ}ú©³\x0019\x0011Ùu¨¸¦Æ°O%ymå=¦²)\x001d0\x0002:íÝ¸xõü÷Nºîµ)ÑgIPóñú5 ¶Û_\x0015¤\x0013ç\x0017¬ük÷\x0011ÏÛËF¼YC\x0015F²-\x000et^¢d÷\x0002</p><p>.\x000b¹ä(û p1\x00047(Ã¬\x000e²Ëè
¼­±È(\x0002=ãX¡Îv\x0014%¥­\x0012@¶´\x0015§É¨\x001bÛÍÊSt*s¬ÎSÞT£F\ÑÒ2ÒuèÀ\x0016ÐòñQódl\x0015eÈ\x0005B£sbc\x0003&»Õ)¥²Æ(j:ê6ÊÚ[Ï
ò\x0006ìi¤c¤
R\x001bwÎ«_G.\x0017·¦õ÷t+}Cê\x001fKßwú_\x0015íjâ),Od\x001f²2ê\x0001Ð½)âB'oP«ñ¬ö+²þ,È\ÅÈ</p><p>éö"$¹\x000ba*¾QÊ¯\x001b£6Üà	½Dý§)¹Cî¶ò/«=1Ò-Ø­±JMZ£?ô®¤Ü\x000fowæí¯®ßdok
íÓ\x0016wÖÝq´å\x0019!¼\x0015X=</p><p>X\x0016Z|.idè°\x0001"É]k·{</p><p>AîÜÆ/i»b3:\x0014@À %\x001e¿[QÚtYd¨\x000f/\x001a¶\x001a["Ö\x0016­§ãI«¶k\x000c"6ÜE>Ó\x0018 \x00048¹°cÔHÏ3Pýá8~JÄê,G\x0008\x0014\x0000Âº%W´Ç\x00000m@Ë;Æv (\x0005Ôº\x0016\x000bîªöÔ,lR\x0008±<¨o«Û\x0003\x0017ºq\x000eBÌ\x0016Áf£9\x0014\x0005¼9	)ç/\x001f!:¯Á6\x001c\x0005NA×Þ:k'Uyñë$DmÚí1\x0003·^¥p`Ön\x0014¨\x0001º²lô\x001b\x0010ÃÔE¹÷×¸\x001d:Þ÷æÑºÙ\x0002ù8Í©\¸)é>oså¯Îµôâ_Gº±énY</p><p>fv\x0013(û
¦Ö»!gJ­èà+(Üàb\x000fhî\x0000a\x000ex\x0006úSä\x0015\x0018Ò<ÿ\x0000{\x0010\x0013	¶\x001fÏ\x0008´>]ôân²{/ZEu\x0012	\x0002þ_--"Ù;w\x0017\x0019\x001e;<rVm¼E\x0015\x001c}ì]>\x0013l`lE\x000e\x001f¤\x0001<ÑèAÖAÈc¤H iNÜq@¸\x001eíoâá=&J` \x0005I}A\x0008'\x001eK>@7­\x0000ävunæH×ÚcåÁµuÍ\x0015ñc¸ÀFc\x0019H\çÉ¯,\x000e±W²ÜåEX:ÊÇÜ\x0011l\x0006T \x0006@£¯#zÔ7÷Îê{*ò¸Kqm%</p><p>$¡:n5h=ÑË·»]7>R6*\x001aâ|&ÉÂEV\x001c$\x0012T<K§\x00166\x0016$</p><p>&B \x0005û\x001d»·1÷0c\x0018Â&1Îq\x00111DLa\x0011\x0011\x0011ë¨ËR\x0008\x0013á\x000eËð÷¹T&·~ê}J+QÔ«Å^R<·ò×â ª+\x0001< ¦ä\x00140* ©{N\x001dr	\x0003Þß\x001dØ\x001aè­,Ê^¿dßg.Ï(®\x0010Â\x001cÒ^BFe%c±È\x0000\x0004s7áæ©TÃ\x001ccÈÜ®Ätô³\x000c\5õ	³&\x0018o1¤ÐÏï÷¬6ÕY|iy9LúB»W>êU¬\x000bU\x0016Æ*\x0008\x001bV'mô£!¹¡GÈn¦\x001cF5V#B~ÈGe»A=£Éçåh¶®;òÑ³bã·nùxÇD|»é\x001fñkQâ´$|\x0005blG\x000e+¬\x0011Æî>`¨ïÄ\x001czgSÎL¯l3¨íÂÇî\x0003ZÂýº¯ÓQ5;\x001b2*
(û¢;ô´_fa6¶9(ÃCaµ§Zu<}ÃÀ\x001a}`¶ÝÚ÷\x0008vBx8¢Jíûn\x001d¶·.ÊÛ(ÓÌ\x001dHÐEU\x0000\x0012H\x000b ª;G ':ßö{Ô_¿·Ä<Cm)¼çÊ{R¥HÔ8§ÜäØ\x0000ôÚ¥Ì#ZÃÙðcð\x0008ã{ý0<ïÙæ¦ÏÔÇ\x0011ä¼áÅ&w¬\x001cÙ¼¦wÁ3\x0015üÝ\x0018»hÃû[H&+±ºQ\x001a¼*\x0005hþR	U\x001d4\x0014U\x0001:è\x0001\x0004§\x0003\x0006#g
V\x000b<\x0010|¤Ö½"è\x0004Ü(\x001eÁ{G\x001bÀT»6¶/|íô¯ÂhKaAÆÜ)MÒ¤ÌØ\x0010H·Û\Ú<¤goZ±c¨ÂÕ2+ÛDÎ+¬»9Êç</p><p>ò²\x0016=\x0019lÁÇÅ04ÜÁ\x000eÝIDCîdJ\x0011HeK­­"Aú­\x001fh¸o°òÓ\x001dHV«óãbO£ÝåUç\x0014§6NãT6¯èîf:¥\x0010Óíñ-B5¨X
V\x0017\x001aSÌÖµW#¢7T1</p><p> n	._)dÌB©\x001cDHª&7iì8\x0008{5t\x0000w\x000fw³Éæ§û2C\x0012\x0011  \x0015\x000f"»G¸iÔds\x0015!THJ\x001eÀÛq\x0010\x000f\x001eÐöka£r²úÊ>%m\x0016rû\x0001N¦\x0000\x0000\x0001¶éá°xm¶³ÚÝµÕRR{¾å[ªQ Tö\x001dÃÀvú¾!­\x0001þËûæµ<\x0006¯Á7½X9&\x0011G'q· \x0007A
üDCÃonñ-±\x0011JûKBâüxûµÕ."<\x0007\x0014Ûm2·q¿)qÎ\x0007\x001cÈ\x000c ã\x0018dnTÁÙ®.¢æéT=áYÛ¨\x0019\x0006°ÁrI8e ©|æÎÐ\x0012\x0001¶î(´ÐöëÛ«\x001b¹Q½vS>¶à!lcÜ%IRTx\x000e\x0004
ì=û\x0003pb\x000e<ÁÉ8Yd\x001b%:</p><p>\x000bO;\x001b\x0002&ö"Å$+RQ\»a</p><p>g\x001bêÜ=âÍâw)Ä+Pä\x001ecä
ºµ1»&ÂÃ\x001a\x0016\x000bªK(g°ª{\x0010LâªÂc,å"u\x001e£¥=¡Ü¹ýÜþöÞl¢\x0001õC\x0011
¤k	A7QQµy\x0004$\x000eÒM`Îäññ¶ë\x001bS\x0002¯\´!K#A+\x0004([ø[ÔO`°¥U¦âßQÉ8LÙ	0ï\x001f9½>¯Zä>%ÎV\x0015èøÿ\x0000(ÏRÙ4Ìï%ÃÅ</p><p>Ù xÁÙH©\"\x001bì \x0006SW\x000b?qô[¸§qÒr)·\x0016¨ÏÇNµ8uxjn÷²THI\x0003àðì­éÈÆoDÈSÇne%)}§\x0000 )"Úí\x0016½øß\x001eÄB-ñ\x000f§~4Ìå¯füyÈ\x000etf\x000ci3ááÇ,øØ®ü$5òÓ%vÍ&Ëìû"F\x0005f\x0004\x0004\x0008#¾á¹µÈû§«2¦cÞÇl¸ï&@/÷]yÆþ\x0002</p><p>/Ýl\x0013u\]D\x0001ËFda6cONjnçq6t'\x0010¯«\x000bXsàIæ*\x001eG\x0015BÍ\x0018¦ Ù´jÈ¤áå¡å¶2@\x0004D\x0004@J@\x0011ö\x0006ý5bã1ÿ\x0000·1ñPN>Ð'ýø¨Uàeáç²¶]íþÑUú\x0011z8\x000c«à>!dp\x0003õ\x0015êëç«ÙÔYÝþÁÔÝÃñW±\x001d\x0016{g\x000f'O°?\x00155*º±õ\x0000Q¢4Q\úºÿ\x0000\x000c\x0007\x001cÉ\x000c9ú¶´jóôôiÜ?éßÄ5T\x0013¬ß¥\x000eßÿ\x0000Vüeê<ýô\x001fêî?²TQ´£êGÐ«þ÷ÛõGèÔÒ?HCúßÚ
d¬tê\x0013îCëý±ÑEU¢¤ä"2j\x0014§!Êb\x001c(\x0018!Jb¦\x0001\x0003\x0014À;\x0008\x000fA
\x0014W0þ¡¸?¸»(Ç`~+[¹{r{ìkH¸d¼-ÁÞ\x001e§Ë:ËLqXÏÏó\x0006*¶[*òp\x000fZâÃ~½läbHÙFiÈ¡ñ(¤PP¥\x0015*^Õhøü)ïï\x0010å\x0013¬3e¶÷í¼¸ÁèñÃ&Þr\x0001!«5ÏÆ\x0018|6Â.\x001a\x0016£P¬ÁÇ°+D\x000cUÓfsª²ë</p><p>¢¤£E\x0014h¢\x0014WÁðúáöÃE\x0015Ê'§\x0007ðçsoû³ß¶EsW«¿£NÜôAø»BºIúTçþ£%ñ¦k«ÍQÊ¾´h¢\x0014Q¢4QF*.=\ÄKÅÆ\x000f\x0010È\x0011#ö+¶Õiö\x0017ÓÁÿ\x0000¼Ü\x0007Æ\x0015SïAþÓ½ÿ\x0000ð÷;ña\2p¡Ñj`\x001d»DvéÓÝ.½Ø\x001cÏ\x000bÿ\x0000Æ«ûã^0À</p><p>õ\x0006xÿ\x0000Ä£ûÑYo=_Ñµ<\x000f=mÙ^ZÈµ\ÞHw\x0007p÷7ßnôö\x000fË¬ÈFé­\x0017þ\x001f\x001aSÇËØûo°\x000fO\x000f\x00110']ëMÿ\x0000µ\x0013ä¥\x000bE|ÕJ=½½¦\x0000ñß}úüòh­\x0010oÎíÛ¼¾=Á¾ÿ\x0000ñ@\x0003¦Úæµ\x0014Ð'UøT1\x0003\x0015\x0002\x0018Nâ%PÝ¦&\x0000PÄÛ~ã¦QÜ\x000bíùt\x001eG÷Váç¬kJÐ¦Â\x0005Âb|\x001anòö\&>$l\x001aé2ÔíÛ\x0011@\x0005\x000b\x0005\x0018ç¸\x0017p{	\x0000(nÜÞ%ßK\x000c+Ùgm(\x001b\x0007¯p*3êfè",_³:¡cck\róZ\x001eMÔ\Ê\x001dU.ªÇ\Î\(eVTç\x0003\x0019C¨s\x0007qÌ©L"?.¥\x00140@`Y	·»n\x0017÷j¨>ó\x0007Õb>y>ÿ\x0000Þ²©öÓrì\x0001ÿ\x0000¢l";{v,\x0018þh\x001bPwP¤¥þ³m)ÒD7ïÇ~®J\x0010¤û\x0012õ\x0014\x0013ÃúA?ù£Y\x0014Ó÷\x00136ÿ\x0000\x0001Ûo`ù~mO±\x0005]P¼T·
¸Ù5|Ý}aÖð­\x0005ü\x001aÈ¤Ü\x0014 \x0018L!ãÓmü>¸k@\x001bV²Ý
ªÄ_íÕï\x001f/æ7\ø®V¢|µóË\x000fó?®|O5q©5ï±\x00015@60y \x0007)Ê"U\x0004v\x000eÓm¸.ÚÕ\x0011êÎªÉJî\x0005emN4û+R
Ã\x0007Ê8vñòyùûÒ\x0017 ÝN¼JW!îåM\x0005n\x000bÜjôß\x0013&/ZÖ\x0018À\x0012m£p9J~ùÙ\x0002ø§°øj{eHÖéÇÀ[Ës\x0019êÊ¦Ü\x0002ï£Hçr\x0012=åW¬¿«Ï\x0013sjn\x000c°R\x001bÊ.r\x0019ñ></p><p>A\x0001Ëq\x0000ýÁ\x001c\x0007\x0003jéê\x000fÃ®6|k|¹¨pÓíAE¿\x0013`%Io»(¡\x0015\x0014J+5¢ÉÉ"àë\x0000±R'±Ça\x0010Õ\x001bÇÃl;)öKø ¨k¹ä\x0002A$¡Wwvu{§\x001b<\x0016³9f\x000cÒ\x0014[nËsH\x0004ê</p><p>rçP1ÏKàNn²¯ðöÑì+Z¿É<Ínã*Nà\x0012\x0011äQÑr\x000eî\x0017jÛÑ?h¶2\x00072FØè	
¾újØû¯¨®µ\x000biáeËpC¥*m<xi*çÇÏg½T®½Iéÿ\x0000Q#éV\x00006ã.Y\x0019	N¦%§V«%+ñ\x0011Ä[R</p><p>\x001c4ª£f\x0001Ív\x001dé+\x0014ùæÑòO\x001ck\x001aß\x0016hñÕ°|anuÕo?ò±$lëF°*f;¹\x0006\x0015?(§:A\x0000\x0010±\x001bGØ¨\x000fÁ.ï9lâ\x0019t!¶~Ê§\x0012\x0005«\x000f\x000bvÕNkraÛRq\x0018é!ÜÈ\x0016\x0008bÁ\x000e$\x000fdsRE£m\H\x0017ä±Ü©U©FÍ1\x0002¦i\x0008¸<Z¹G1Ý¥æÔ_¹T+sù$d\x001929\x0007ÈvÙ\x0012nå\x0013í'h¢éÏ²'I¶Óm;mìE*</p><p>\x0001\x0007Uî\x0002Ç"xîS;tuQÆd)\x001aPì4­×lâÚP\x001aAm_J¤ñÓË*òÝº²\®w\x0015V=²ãf±&¹\x0008C´uô`\x0014\x0002TRjvðÈ6(B\x0011¸}]YÜ^ÐÁàSá`¡À×ö \x001fpÚ¢ÜôÜ\x0019cy²Pà\x0008+$\x001f)<>|êÀGÏcå"L
$!¤\x0019É°Q\x0012IêO\x001b(AMB\x0002iÊ{Æ\x0000"B>YÊc\x0014å1M¶ä}6ÃZÖêÉñHU\x0011Àéµ¬+G\x001f>T7\x001fRä¸½	¹+¿öªMþ\x000e*\x0003Ê\x0001®pç¢¶\x0008Ï|w®d,ó$clÉzs9jm9P~Ôíc ¥g]¼¯¢¥*U¨Ãªª^IöP{D\x0007·o\x001c}¡±¸­ÅÔî!ÍO0²´\x0000nGÂçÏI6çæ5ëËöFÙ»§±²ÙEH¸¦6T¶W­	</p><p>\x0002À´«\x0002¢\x0005\x0002­Ç{E¯!}:.\x001c</p><p>ÊTkû:ãéTmª6z°j+çù	hq\x001cóâáê5D+2úrÒ¢i4UT]\x001a0¥PÂ¸C°õ+ÙS/¶{\x0002Ê]</`\ùM¼À\x000e5\·çB²]%Ì¦RòP]ek\x0001Ç¬®ä\x0000Lr;j\x0008Ô³¤jRÉ\x001ai¤Ê\x0013ÑìQ\x0019\x0015f£l·e²Z.ùÂ\x0006<PüVÃí'ïo²%c\x0008@3\x0008\x0016Á\x0016ýñ\x001eOù@
[(Rµ'¿æ\x000e½+ö1è~_o>:¥JØ\x0012bÙ)6VåãÃÎ\x0005E]NÜ°±oú*ÃY¹ñ%j\x0016 \x0005\x0012Ú\x0012\x0000ã¤RH\x0016ò\Õ%2à</p><p>\x0000ìpP\x000fÜ\x0002"Qö\x0008\x0018£°\x000fòµ}RÃ®¥\x0012\x001aR^#Ó~7ªö¼\x000f±¼AË\x001bÞÞ\x001eïíp½H\x0017\x0013¬2\x0004Ç31-ÕSÊµ®DóDÞQ&\x0012Eû</p><p>\x001d{H'8oÊ:º\x0001\x000cfS1'»û~ÍZîä¤?·þO\x0016O«:U~a\­ÙÀñ­^Æü\x0008p\x0003\x000fA\x0000ý0ÞÃ\x0000{\x00004Ï1£(Ü q©Ûå	$s¬Z\x0004:·\x0001ñPý6ÖDA±ðmYÊÉjüO\x001a·5Ø÷\x001cÊo¹08ýrõùuÜã£Ûº8ÖÃy©%À.lO¼\x001bVþ\x0001ýp:}NÅòoöçÞ¥zÄUº¶w\x00077p\x0001</p><p>\x001b\x0000l!Ü;]¼>mi>ÉaÏ\x000c\x0012xy+qÄjP¹½Y¯<\x0006\x001f1R\x0014ÉD\x000c\x000fhpØ\x0004\x000f°l#¾º¶¥!aV5/ê6"Õpý¢æî\x0004ûG¯A>þ;|
m"Jµï\x000büÝµ¯¹Smèúb®i1>äÊÓÄ:ïÿ\x0000ß¨õé¯\x0016±ä«Û­GËÆ|LW©¯û&ô _'ä>6jkõ?TGF(ÑE\x001a(®ýx\x00142Xë\x001d\x001c¾%an\x0010ÿ\x0000ÏÀ\x0007òu\x0003Äÿ\x0000òt,åó\x0014j¤|é·±gVÏþ«øÉ®]\x0002AnËþf½ÐRF£é¯"H</p><p>E\x0002G:õ#ÅO¿³m½»ï¿Ö×]"±OjÕWÉ¼7i</p><p>*\x0000{\x0007rõ\x000eºÀ¨ú7­g\x0012¤,n*ô\x001ccÜEAAð\x0012ÁÐ|Dv\x0011ð×\x001e®ÂP¿\x001d:ÒSÃ#Øk´swu\x001ei\x0004M©äÁÒ2\x0011vË%Á³^mó	:Aë¸÷VvÔé£æK º\x0007tW¦î0\x000fx\x0014½¥\x0010\x0001\x001d'îg=X§ZmQKK</p><p>HPRðI\x0007É[{9/FÊ·=]fK\x0011^ï¡E*) Ý\x001c<¾Zo[;\x0000E\x0013y(£îmæ	</p><p>²ä\x0003:p>aª\\x001bÅC\x0018MÔwßK
ÁRYK*P-p\x0000°òÚÞji¿9O¨n²¥\Üªæä\x0013ÛY\x0004_\x001c{»\x0014îðß®Ûxüøë9KêwWt\x0000ò[öëIA</p><p>}N¶4¤Àñµf|o-01; 	»¶ßsmáÛ®Þ\x0007\x001b YÖïÀ r\x001c¥!HÔóLm\x000eÀße\x0007·Ýîð\x000f\x001eºÂèðÓ\x0014¥¶"÷Qµ9I®´\x0015U_9ÌlÍµ\x0018û;äÐ8£+\x0013Z`ñ7Uo(É\x001d#NI#ñÞY·\x0003&&1|CH¢ÇÈ,úê\x000b-`"Ó\x0003ØiQ-/\x0013\x000bÂ½y\x00174¸\x0007uM[Oh ûý´ÎXî\x0017:ÒÕy&\x0013SÊ"Ó±2Vr\x0013r¨V\x0016(d@\x0000±±Ö6åóÜ\x0014=Ár¡¸ôÔ}Õnbz±µ\x0017·§ #&ËDÃ¤\x0015²°./Ú°Gv×í«+ìí9¹ýzá\x0003«;yÅ?¤µ\x001cSqåÃ·Ù\x0008Mô´ê~Ú·-w</p><p>tÄ\x0011</p><p>sò5©ZåÁÏÀJ\x001e\x0002M\x0016î\x001c8{0É AbÜ.ôe\x0001dH©\x0014çP\x0015\x0002¦7MxÍ¸q3¶ÎåshÎI\x0019ÆRT,t`³ä½µ}l®¨ìÎ¢ìLoTvÆ\x001eØyH
ÍnAP\x00011Ö.­\Ç#Eø\x000fmoÕ:·FáÅ)\x000c½V¼òÆó)Uk1%U+Ê¿\x0015°ÕÍãxÙKÁ,\x0005Ï¶ZÜ¢«'\x0016¨8\x0008ðó\x001c]\x0018</p><p></p><p>\x0013±±1ÐRÃ\x000eÈyd­<¬4ü\x001f=¹Þ<l*\x0006Ü\x0019MÍ×lÛ¹MëºaBmò\x0015|±uôÜ\x0006\x0013«P¹>íªA8üÔcð5:®²ª¹uoÙ\x0003\x0015Òç\x0005]-\x0001.ÎRJäáàtéÖ6¿T6ðð\x000fH=7\x00122}/pYÜlÒÚ\x0001<t®äðìµ«çgõ¸ìXxhø@a´¥[£\x000b\x0019õ\x0004
ºÚ\x0000x\x0005}>µ+â-ÛÎ6MØ©\x0004Ào»o\x00010\x0007»·Í¶­×¬ù«Ë\x001f\x0000r½*\x00180W´ÃÔ</p><p>\x001bJ=</p><p>QÜÃ¶ûô(kUû"(\x000fyKµ«u\x0011\x001d/\x0016J{¡\x0017¿Ï«\x001c5#MÄ7ÉxNòÞ,A
1oUP½æG¬'6eÝÂÃY¨8~b¤S#\x0012wÕiö ÝR6þÅ0qê))A b\x0012~\x0010·h·:RÌøØ9YxÍ6\x0015ã6ÇU§@uZnéÔ³{$[áqÎ¡5J²s{_® fU<dÎ#\x0015Ó\x0018=EÊn~¥\x0010±ªÊI¢¢EQ¤¢u7R«\x0001ÈÎ7\x0000\x0012¼ÄÈFV)ÅÝ!H^7áe(ñô\÷«Ëw6¸z\x001ef+(ðô­6R\x00128Ü~j7¿;+e6ë¯åÊ\x0000b</p><p>¦å\x0002Gc(?ñIâ?6úÕ9®°¢ÂMP\x0017ÑûtË\x000b¨%Ä\x0010¢.8\x0013sÎÃ>Ên</p><p>ñ\x001c¹Mó\x001c·¡ÁÝ	 qP!\x0016ÜxÅw{i°·?k¥Á«°¢%\x0000\x0007\x0003´ÁÚ\x0003Ýjº	ÒøÙwFûÎ4§°Ae
2°\x0011¨pïzà  ßD­²:oÎIo1-\x0000bt\x0002t¸«qÒ\x0007?\x000cß½oËõO\ev}ëÅ+5HE¢vÌÄï£\x0013SâeX2\x001d¢ï÷\x0003høÃv\x0011ªbI\x0003¸\x0004CVõÜ¾;\x001cà}.!¶[\x001fclZÍ 'ÚõjÆ\x000f!q¸8ø«1JBt\x0004øh\x0016íI\x001c\x0012|ôà!_©YZ\x001f¥;8P\x0015KJ¯8;)\x0010À\x0002{,Ò[á\x000en¢#æ\x001ba\x000eâé%ÜÆc>éõVÐêÿ\x0000(²ý)\x0007´yH\x001d
;QÁàÙ\x000få</p><p>É7ðZ\x001clGaWo®Åóù§DUá\x0010\x0014¼Ú$Õ\x0014JXö¥0v6D\x0003tÑ/»¸îcS\x0008ë\x000bÕ\x0001Z	+RI*$Ü¨Ò{k3y	YT+Mç¸\x0000\x001c9z+bq¤÷ÔÑ«ª²NØ\x0019Ã'âtS.ÍÑ!Mî\x001c ©¸{K¸]µ\x0016n¬RäÌùM</p><p>°ø%\x0016å¦¿¥ý9Ç#+</p><p>óZÐV¥\x0015iºG0<õÎg¨Zv8ç5ï\x0008Ó©ì5\x001dñ1Ëñ·Õ\x0008\x001a÷0êÖcÎÑ2t~¨|stÞ×ddZ$C¹;®ç\x0002"\x0000\x001aÍ¹6îo|ô¥Äÿ\x0000(Ïã&j~°4ñ\x0000ñ\x0017?:£«`\x001cÌ4æ\x0007\x001ffæ1Ö-p´ñÐcd«¬8ð¨²Ê\x0003\x000cÇ1eDªo\x0019I×\x0012ºË$Æ(¼wÅÂNfÓAÁí8²ZVzVÊ	vQ©Ho\x0003j×í\x001fÛPÜË¶Z­\x0007;n°¨û÷¦®¥0ÛMNt*\x0013³¿n÷Ï«vÏÖòIÔG§Ëòxøï×®m°PÚ\'ëPÌ\x001e*)î§¿:¬ó.S\x0003\x0010\x0000v)M·¼?¡\x0011ðÛm(1\x000bÅ ê·\x001aÒ{2û _Ý¬"ó\x000eA\x0002H%÷·\x0003\x0008ø\x0007û\x0007úYù1?ºùÔþeæ¸^öóÒfBz@Ä6Ê\x0018\x0004\x0007·nãu\x0010\x0011ë®ÂkJXxk`*äy|Õ½Â´²\pY\x0001V½é0úÔ¯hl³q\x0011HÈ\x000eÕ\x0002\x0014«y$@\x00141Ql¶à©Î\x0004)</p><p>\x001b¶C@f!K\x0011\x0008²A6\x0008>]Gù{´+q)ÆTëC[i\x0017=¿8s·:ÁÜ²Ä\x0001"/Ô\x0002ª *#\x001d*»pla1\x0013t.\x0010d¢)ûû	\x0013w</p><p>B'(\x0006¸KJunG\x000f²¶­%.¨
Kò&ÿ\x0000\x000bÍ]äv3mÈq\x000e=â'PTt©E-óºä?±XWv\x0004Ý</p><p>©¨ÅÛ±Is®t>YqT\x0014ª</p><p>E±TP</p><p>±KÐ|ó\x0000\x0004\x0000uÄy+qèu¤EH$/RQpï\x001bÝVIYKHKâb«\x0014V	ä	µøì</p><p>²^M6ä#cµ2	e1\x0011]£õÄ\x000e\x001b@#¤Rp²f/P\x0013 \x001f\x0013keï\x0015Ø¬;\x000eB\x0016AV B·f¡Îýµ¬Ë!Õ¦B</p><p>_A·|\x0010£ÇïÆÔz´zP\x0000/ÍÈvþ%\x0000zííÒ%+\x0019\x0008Ú.ÛãþüVc(qrC'HTw@þàÕú\x0007ú9\x000eü3\x0010ð\x001b+\x000f¨5¦¾yý/âoûóü¦î\x001f¢½§ëáÔ½¯/Op'ÿ\x0000ªMY</p><p>¨ÑE\x001a(®?ý]\x0003?ä\x001cý[Z5yúAú4î\x001fôïâ\x001aª	ÖoÒoÿ\x0000«~2õM\x001e?þú\x000fõw\x001fÙMª(ÏÚQõ#èUÿ\x0000{íËú£ôjAé\x001f¤!ýoí\x0006²V:u	÷!õþØè¢ªÑE\x001a(®iýK*ö»G3ªy N@ä\óçÇ1O8yê
8U/\x000bz¯e\x0019õ­ì¯R¶\©ì9mH\x0008"Ù3®áµuëw)\x0015\x0012ªéS¢¥\x000bÒù¼n3¸NJ#0?\ë±Á%9aOæ^Fì9b\x0004\x0015O0Ò/9</p><p>\x0015*ÑÜVPã \x000bGvL\x0001R÷\x0014Th¢\x0014Q¢ø>\x001f\>Øh¢¹Dôàþ\x001cîmÿ\x0000vr\x001böÈ®jñõwôiÛ?\x0017r¨WI?Jÿ\x0000Ôd¾4Íuyª9WÖ\x0014Q¢h³ýròÕº´ð#¬5¬yl~("ä\x0019ÊFÂ¼vÉÈ·pS ¸"á"´à%6Û\x0008m¨Ó¬Ùü®Õé6äÜ¸7K\x0019\x0018Yo²å¢ZekBV\x0014B6RHò8Sç¦X|vàê&\x000f\x0007oÅÅËÊFiÔ\§Sn:­:¸$\\x0010GeQÇË<í×\x0006b+}èIX¬Øê£99 \x0008"Ô\x001eÊIÂ3vùÈ6nDÐCÎp©ØBK¾À\x0000\x001aç£YÌ®æé6ÛÜYÇÌì,7ßt¤¸ë!kYJ\x0012\x0002¥\x0012HJRò\x0000p®ÝPÃãvÿ\x0000Q³<;~\x000e*&VK,¢åZ\x001bmÕ%	Ô¢I°\x0000\Oi§RU1*-ý]?rº\x001bø~?Å~§-:­^Ñ¿ç<ÿ\x0000Äí¿ñTûÐ´ïü=ÎüXW\x001e\x0010M¨\x0001ö\x0000M ÛpÛî\x000b¯x2</p><p>Hù$[Å_÷Æ¼dc\x0001'ÂoûÑY´Uî0\x0007Ý\x001eÊ\x001fÈÖ¥\x0013þ/ËÙ[di6W\x0003YÆ/\x001eñ~ìþÐùCçÐ\x0006£dñ4 \x0014¬êáÇ¶³ÌU8nýÌ#ÚPÜ7\x0013\x0007¼bxÉ®¥h\x000b
5ÎÚÂìw×\x0019N%</p><p>-q\x0000Ûß¥Ks	N=\x0007a8¨oÓî¨\x0007·Y¼'G4¨\x0013æ4\x0002«\x0002.)TÔ\x000c'\x001e¿Û\x000eþñ@Å\x001d¿ã\x0017¨|¡® é?</p><p>ö·Éé®\x001cî(%\	MÀ=£Ê<£Î8WÛUâ"UydÙÑ!HÄó%¦\x000e_í\x0016;âVÞpw.!°e\x001eºYÁcJj?\x0005¾'Óä>57w>}­»TH\x000e¸)¿Ì?dTv¿²OIÙfÜ|D¼Û»|°d@Çè
Ú¦=\x0013dØ¥\x0004ÈO½zã,¢#*\x001b`\x0004©#æ÷*g§IÉÈ\$x\x001e\x0004s·+òòßÓç÷)¶\x0010\x0012Â\x001e\x0002\x001b{ztùµÅ­ÀÓ\YßÍh`\x000f¾\x000ce\x0004@=á/d\x000fM¾@ÛPFù·åm[þFÿ\x0000÷õwzOu{\x0013u\x0012üÆáÇûÁØ¬Â@\x0002TÙÛüþN¬L_¶®¨\x000fjïä5|\x0005(u\x0000Û[µ¢I<ë(Ûô ú¦ûzÆyÓðÇ£öM]\x0013\x0000	\x000c>?\x001f`\x0008ë\O*×UÀó×¿Ó»°vùv\x001d¾Î»\x0000\x000f*Æ5ÜóáÎ³õÌ¥¾q$\x001b\x0013*«îVts	\x0019²jb¥!0è?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Vulnerable JS Library
##### Medium (Medium)
  
  
  
  
#### Description
<p>The identified library jquery, version 3.2.1 is vulnerable.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
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
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr](https://preventionete.sports.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1609937405](https://preventionete.sports.gouv.fr/plugins-dist/mediabox/javascript/jquery.colorbox.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1609937405](https://preventionete.sports.gouv.fr/plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/ajaxCallback.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/ajaxCallback.js?1609937405)
  
  
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
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/plugins/](https://preventionete.sports.gouv.fr/plugins/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/IMG/jpg/PreventionEte2019_1024x768_Mer_Jetski3.jpg](https://preventionete.sports.gouv.fr/IMG/jpg/PreventionEte2019_1024x768_Mer_Jetski3.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/](https://preventionete.sports.gouv.fr/prive/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/local/](https://preventionete.sports.gouv.fr/local/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Avant-une-sortie,5](https://preventionete.sports.gouv.fr/Avant-une-sortie,5)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/IMG/pdf/LC_montagne_ete_2018_guideBDpages`
  
  
  
  
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
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Equitation](https://preventionete.sports.gouv.fr/Equitation)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Randonnee](https://preventionete.sports.gouv.fr/Randonnee)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Escalade](https://preventionete.sports.gouv.fr/Escalade)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Memento-prevention](https://preventionete.sports.gouv.fr/Memento-prevention)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/pdf/PreventionEte2018_100x145_FR_BD5`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/Via-ferrata](https://preventionete.sports.gouv.fr/Via-ferrata)
  
  
  * Method: `GET`
  
  
  * Evidence: `IMG/jpg/LogoFC_FFESSM-quadri-2`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>~��0o�u��\x000b���֠��޵���_?��x\x0010�j\x0007�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `later`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery.form.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://preventionete.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1609937405](https://preventionete.sports.gouv.fr/prive/javascript/jquery-migrate-3.0.1.js?1609937405)
  
  
  * Method: `GET`
  
  
  * Evidence: `bugs`
  
  
  
  
Instances: 19
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bLATER\b and was detected 2 times, the first in the element starting with: " * Requires jQuery v1.7.2 or later", see evidence field for the suspicious comment/snippet.</p>
  
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
  
  
  
* URL: [https://preventionete.sports.gouv.fr/squelettes/](https://preventionete.sports.gouv.fr/squelettes/)
  
  
  * Method: `GET`
  
  
  * Evidence: `403`
  
  
  
  
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
  
  
  * Evidence: `1609937405`
  
  
  
  
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
