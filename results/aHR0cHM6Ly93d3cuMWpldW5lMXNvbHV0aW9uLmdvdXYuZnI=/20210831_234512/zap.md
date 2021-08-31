
# ZAP Scanning Report

Generated on Tue, 31 Aug 2021 23:39:07


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 5 |
| Low | 5 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Source Code Disclosure - Perl | Medium | 1 | 
| Source Code Disclosure - PHP | Medium | 2 | 
| Sub Resource Integrity Attribute Missing | Medium | 9 | 
| Absence of Anti-CSRF Tokens | Low | 12 | 
| Application Error Disclosure | Low | 4 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 8 | 
| Incomplete or No Cache-control Header Set | Low | 11 | 
| Permissions Policy Header Not Set | Low | 11 | 
| Base64 Disclosure | Informational | 11 | 
| Information Disclosure - Suspicious Comments | Informational | 12 | 
| Modern Web Application | Informational | 12 | 
| Retrieved from Cache | Informational | 11 | 
| Storable and Cacheable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 9 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 4 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr](https://www.1jeune1solution.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/cgu](https://www.1jeune1solution.gouv.fr/cgu)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/maintenance-pole-emploi](https://www.1jeune1solution.gouv.fr/maintenance-pole-emploi)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/mentions-legales](https://www.1jeune1solution.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/deposer-offre](https://www.1jeune1solution.gouv.fr/emplois/deposer-offre)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/accessibilite](https://www.1jeune1solution.gouv.fr/accessibilite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois](https://www.1jeune1solution.gouv.fr/emplois)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale](https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/confidentialite](https://www.1jeune1solution.gouv.fr/confidentialite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/stages](https://www.1jeune1solution.gouv.fr/stages)
  
  
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

  
#### CWE Id : 693
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/apprentissage](https://www.1jeune1solution.gouv.fr/apprentissage)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc285="" href="https://www.alternance.emploi.gouv.fr/portail_alternance/jcms/hl_6238/simulateur-alternant" target="_blank" class="btn-clean btn apprentice-simulation__card__action">Accéder au simulateur</a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/stages](https://www.1jeune1solution.gouv.fr/stages)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc108="" href="https://www.gouvernement.fr/" target="_blank" class="link">Gouvernement</a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/cgu](https://www.1jeune1solution.gouv.fr/cgu)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc108="" href="https://www.gouvernement.fr/" target="_blank" class="link">Gouvernement</a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale](https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc108="" href="https://www.gouvernement.fr/" target="_blank" class="link">Gouvernement</a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc128="" target="_blank" class="btn card__btn ng-star-inserted" href="https://reseau.intercariforef.org/dispo-1-jeune-1-solution/cartographie-des-effectifs-apprentis-sans-contrat" aria-label="Ouvrir le lien de Je recrute un apprenti">
        <mat-icon _ngcontent-sc128="" role="img" svgicon="arrow_next" class="mat-icon notranslate card__btn__icon mat-icon-no-color" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="arrow_next"><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M0.75 0.75L6.00005 6.00007L0.749998 11.2501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></mat-icon>
      </a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/mentions-legales](https://www.1jeune1solution.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc108="" href="https://www.gouvernement.fr/" target="_blank" class="link">Gouvernement</a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/accessibilite](https://www.1jeune1solution.gouv.fr/accessibilite)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc108="" href="https://www.gouvernement.fr/" target="_blank" class="link">Gouvernement</a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois](https://www.1jeune1solution.gouv.fr/emplois)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc142="" target="_blank" aria-label="La bonne boite, vous recherchez un job ?" class="info-company__links-item__link" href="https://labonneboite.pole-emploi.fr/">
        <h3 _ngcontent-sc142="" class="info-company__links-item__title">Vous cherchez un job&nbsp;?</h3>

        <img _ngcontent-sc142="" alt="Logo de La bonne boite" loading="lazy" class="info-company__links-item__logo" src="https://imaginary.wizbii.com/resize?url=https%3A%2F%2Fstorage.googleapis.com%2Fwizbii-images%2F1jeune1solution%2Fla_bonne_boite%2Fla_bonne_boite.png&amp;type=auto&amp;width=198&amp;nocrop=true" srcset="https://imaginary.wizbii.com/resize?url=https%3A%2F%2Fstorage.googleapis.com%2Fwizbii-images%2F1jeune1solution%2Fla_bonne_boite%2Fla_bonne_boite.png&amp;type=auto&amp;width=198&amp;nocrop=true 1x, https://imaginary.wizbii.com/resize?url=https%3A%2F%2Fstorage.googleapis.com%2Fwizbii-images%2F1jeune1solution%2Fla_bonne_boite%2Fla_bonne_boite.png&amp;type=auto&amp;width=396&amp;nocrop=true 2x, https://imaginary.wizbii.com/resize?url=https%3A%2F%2Fstorage.googleapis.com%2Fwizbii-images%2F1jeune1solution%2Fla_bonne_boite%2Fla_bonne_boite.png&amp;type=auto&amp;width=594&amp;nocrop=true 3x, https://imaginary.wizbii.com/resize?url=https%3A%2F%2Fstorage.googleapis.com%2Fwizbii-images%2F1jeune1solution%2Fla_bonne_boite%2Fla_bonne_boite.png&amp;type=auto&amp;width=792&amp;nocrop=true 4x">
      </a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/deposer-offre](https://www.1jeune1solution.gouv.fr/emplois/deposer-offre)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc214="" href="https://www.pole-emploi.fr/informations/informations-legales-et-conditio/conditions-generales-dutilisatio.html" target="_blank" class="link">CGUs</a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr](https://www.1jeune1solution.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc128="" target="_blank" class="btn card__btn ng-star-inserted" href="https://reseau.intercariforef.org/dispo-1-jeune-1-solution/cartographie-des-effectifs-apprentis-sans-contrat" aria-label="Ouvrir le lien de Je recrute un apprenti">
        <mat-icon _ngcontent-sc128="" role="img" svgicon="arrow_next" class="mat-icon notranslate card__btn__icon mat-icon-no-color" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="arrow_next"><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M0.75 0.75L6.00005 6.00007L0.749998 11.2501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></mat-icon>
      </a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/confidentialite](https://www.1jeune1solution.gouv.fr/confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc108="" href="https://www.gouvernement.fr/" target="_blank" class="link">Gouvernement</a>`
  
  
  
  
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
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/assets/images/hero/woman_2.png](https://www.1jeune1solution.gouv.fr/assets/images/hero/woman_2.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#RQOn`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#RQOn</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - PHP
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - PHP</p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/assets/images/hero/man_2.png](https://www.1jeune1solution.gouv.fr/assets/images/hero/man_2.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=KKË\x001aP¤oBw
ãDÂ
¤\x0014\x001b/ý\x0015)Sï£ú¤¦\x000cUöÊºÿï6\x0003dï£jæA°ªoªÞú²Jm n\x0016ìþ8`\x0011®µÐ`ï¨l¢}ÀVÃ´¾Å\x0001\éïis¼ãpJèÒ)È7U¡@orTe\x001cTÉÎ-øy³\x0018¾\x0013Ï¼Gvû46Ï\x001bH©ÅñØÅ\x0012×ýô;ÒøÙÎ@\x000eã@4x
\x0007{·ÐHóÞá>æ¤ÿVC\x0015E2ÍQÜáÏ÷\ªå=`\x0010\x0012S$P!#ì\x00145¹Ofd\x0007ß%QÇ!JwÈØø¡óÀðªW\x000eØ2ñ!:fº¨E¥_Ðöjm®\x0015&\x0005\<HY\x0005o÷©¨ê'û:ë\x0003\x0002éß\x0010f=P\x000fìlT´Bv\x000ch	¤\x001cµnl&Þ­MµDJÓ\x000b¾×)Yäõ¥ù|s\x0016\½°=&©
N\x0013ì\x0004ób@$]A^M:°±FìjyQPkÈEõê¦Q¥ÒlraòØ³lS°gÉ#IãÅ£hðB$±=©_R2"
ªË\x000b\x0006ÿ¸G	8\x0002hßÉ\x0014+áþ\x000fEÆõ7YØ%oëøá\x000c\x000f"4¡C\x0019ý\x0000¬\x001fÃøÌ=^õ8ü\x0017¶&øuIÔô÷]ò¶ó@]z^4;¢\x0013uER\x001cÐ»\x001b~y¬£±CþX¶Ón¯ÇÚ}ùÕ;{çòÈwö¸cT´¯Ðj-:P§S½w¨G<îzâùt GW ½ä\x0019C\x0015ÎRÖ<\x0018\x001bñ-Ðb"%b\x0015÷D5>ê>È¢{\x001b99Üé\x0014ã¼\x0000×H)ør½b½{$¸ÕÛ_'\x0002ÿ:_ßÿùÏï¸Ï?vs\x000e?\x000f@hIêðßeTÏM\x001b9¼¦©ÿu\x0016è í^Ù®ñ\x0006I«¶S5Û%[!³ä\x001cÚRw
#qûÎ8T½\x000fulðëå	\x0007ð²¡Ê\x0012Ji\x001cÅÔï\x0004\x0014-"Y×¡\Oð|T9ð$8\x001b+àÒ}@§¼9Zÿ»x\x0001Þû*á}ÐÂ®joàìfÃÖ×ú V¥\x0005ë\x001c\x0017ÚÂj\x0005ÄB\x0005\T\x000eéù7Èðªgå=®]Á0þ» Y\x0005Ù2\x0002ö'ª¡ÈPÅh6P\x000bÙ\x001a«P}\x000cÍr¢l\x0008Þ\x0016h\x0011~\x0006vË)ü"z\x0007ôg\x0015°\x0008	ñ`äÕ'\x000ek'U\x001d\x001cM-5ÉP»ï-"´4ÒY÷£n\x0013Û\x0016øNS"dêÄdÃxßhÊªë¨¶Å\x000c1=.Ì\ÐnèT ðp_P
úAå\x0007\x0016Ï\x0005\x001eÎãëÌm\x0001¼\x001cö¶Ø+>ýMò)\x0010Î¤©4Öê6+WýY´tâpkõ\x000b\x0019~\x0002Z\x0013&®$t\x0012ÏåÓÁ]Û³æUÌ5mD\x0001Ä±I)V~jc¥QýÊ£
jöõÍþyüwVkZÎ\x0013ñÙ&MÉ·\x001aüpÏâªÌ\x0018¤Óô3aõ{q\x000bßÂ5tI$ã\x0015<bw_#¾_*ù#@·ü¹\x001eH$ø!µ	 ?(é\x0014\x0003?£L\x0015Oí»>]±Îñ½Ryû8õüú³P@¿\x0006 \x0001R&d\x001a¢ã\x0015YSáQ`\x0017ñoEûìHº¿õö¨ß×Í\x0015\x0006/\x000f´\x0019|Ðv³+ö«+ î¿¸Óããl)\x0003á7HS¢×û(tV 5k+Ã0¡ü²^Ä! \x0002ö\x0018CöÙÎ1\x0013ZÜFÜCÂÖÃg\x0000Ï«Ó	²JR]q\x001f=©ð¸þý÷ïËfòÙ¼¾DÀÉ¯\x001fßÿ£%7\x0007Ä\x001crb`!¡/$(a\x001a¸":\x0007\x00136ÇuQ\x000f=ÉK_µÒà\x0007¼Þ\x001eÌö\x001aád_¬¯ÎÎEE¯Ñ¾¥0ã²\x000cx\x0004ëÓ[3É·z
\x0004É7çCcn7É×\x0018 õº«×¶
>æ\x0006D\x000bH5ºÅõvr
îÎL®s¸\x0007³÷ªÏb\x0015À\x0011²]­\x0008\x001dø¢e³Ea¬2$%56áÛI_G¯(\x0003¬\x000b\x001eßçx¹\x001cÓ«Í\x0001­©	¯\x0000¥-D%ÚÅ\x0010ýk$kÆ«J.Í¦C=\x0010ºmsÅÑÐù\x0000ÞÇS¯ØÕ"s¨RcÈJ\x000b\x0016u~ô\x0007àgÃÙï\x0002uYØ?6ß×LM\x0008§úç¯Ò¾w-P´\x0003²Ð\x0005Ë\x0003v\x0006´oI\x0015\x000f®ªUÔä\x000fÃ*5\x001bh¥Á¦o	|\x0013äØêqm&ºÿ\x0008p\x0017\x000bã(T¹\x000cÒ\x001d~g§[¡ÿx­Sç_y»¿|53:Öd«à,xÆcVCØÐÔ&\x0003®·©ðÀÏª-\x0017m°HÀ*»!7MZ¥í\x0006B ¶Uø	\x00042ë$ñ<\x0002åÄ¬(\x0008*<Hê?#'\x0011s\x000b$í,Ã,\x001b¾ûà\x0018¤¤{\x0019~\x0012°ÔV[Å¿K}cúäz¬©\x0005ÃÒ}´°íä?s{lbñWÄëúæHÄ\x00061[ j#»X\x0015 @¿vzû{!ã\x0003<9V	y(T³ìÓg\x001c\x0010\x001d½\x001d{cÍJúð)ìõ2¦³:ñØáråaîm¤ö¿<Ñô}ax	íÂ w)Vâø$úÂÌ÷ãóÍ]\x0016ëõÁ\>Q\x0012iÚ/TUÅsuà\x0005Ð\x0015ÍWØÏ¡X\x0003º\x0010½ðÓ\x0006		¹{\x0005h*"×\x0014\x0013DòÏdÊv$B«¯1$Éé×íg?ûëDà_Çëüá?9Æú{Ç¢.Çâqä\x000b>þw°»\x001b4ºÁ¢ç\x0006äÆÃË3ÅË·j6{\x0001Y}PS\x0012\x001cJ°¡1éÊ
R\x00010&²uý,?¼gô^Q=\x001f\x001b!«Ò}¨\x001cd¨öäO/ÈÌ_a|Ô\x0004;ú?»æ{¢0]øò¨Pb\x0004¦Nr}O\x001a\x0005$1©×èu\x00077¡ÒæS5tôYÃ\x0011\x0010-67Ø2P2¤(Æõvª
DXD%ª>:HU¾q\x0000°èðéQùµyß"¸2S7\x001c¬ûý@\x0018\x001b:îQ$!1yTumÂ{\x0011ðM÷=/A'À\x0007§\x00130uýBcý=â;¿~ "iÜ[y6hî
>Æ¤%ñ(ü¿\x0001\x000f¢òK$òñOií\x0001\x0014Á§V\x0002Aàý;Û#§@ÂRÝ·fÄP\x001d\x0013\x0013\x001fJÖÊÁ}ºzò1^\x0019Ê\x0014MäýÏRÑ1iÍÉtÔ!Ã¬îc@\x0005N;\x0008±RkZC´ªÝ¬ñ)T]w\x001cD#Ê ïE´\x000büE^I 0Åbd5Õ\x0005bì"Ñ³ Î?s
\x0002õ2%ZøMñU e#qès]\x0005¯£ëýFBéH²nÒ¡àÿ4Z-w\x001e5fUH*øÀ\x0010§.klñD\x0012÷\x0012¹!A\x001eS
OT£äÊo±$\x001epo¢\x0016ßÍdÁMÏ\x0016÷°Så4HF\ÿ\x000c¿1\x0014\x0019Û\x0010¾\x0019,¬ªìÓãú³¥"E\x0008Ì¿krE\x0001\x0010K7\x0019K$hºñ³\x001fÀ~®+Æ´ûï]<6Ë»ÄßÅcx\x000còµåþ\x00043\x000eg¨\x001a0yc[\x0000æM\x000b½+\x0002!\x000bDÐ\x000f{\x0012\x000f»ÉEÝÒHÐÔRÜà}Î8 ¤\x0005RÛ;Ö\x0012\x0011Ñ±X\x000eTRUN_­1¯ÛÿäÏþì³ó\x0012ø*\x0012§§ßzúp¿ýÃ£×Uèàµ¡R*mÎSùXê^1ð³¢Î\x000bº+\x0007zÎSs\x0008my¿Ê\x0017ùEÎX»\x000ceÐ*p×.\x001dhã\x0010S\x0012áz¹8sôè½y;þ\x001c\x0019hâAx{¡/xN\x0001I3PF?rÓ÷
HÖÉ+U¶¯Ýæ \x0008élõ'=þ½cÂb\x0019ð¨AÎ\x0018ò7ZÚò{G5&\x001e²6K\x0016\x001amS%µ	Ñ¨\x001a7Ú\x0007AâÐÐxg\x0012ÍÜZ&,Á}\x0015>a¹\x000e=8!f\x0006¬Ö§qïÄ!E ïc³¯èýô8,úÈ\x001c\x0014Ãà@èÝ¿×\x0003¦Md\x0014ô\x0012)`bE¼ÀNUFÄ\x0007ð\x0003\x0014ýÐ\x000b+\x000cU}¬¯\x000f\x0002ÀÛ\x00059È]À[<,&ÅB"±Àf+h\x000eòÁ*îÓ:\x0016èNß©å¶6XÍIÏ\x001c\x0006öÈ|ÁàÏYÎ|!×/x\x000bB´|ÿ<_ßXøõ'ýï²f\x001c4H¤\x0006C¨t×íL°ð\\x001c%\x000bb¥úÏÌË2zúÖÈü\x0015(?°p\x0014g\x001fë'~ ÚfU{%\x0006\x000eUñyH"ÜÇHê¶±´$Y<ói\x0006Þ\x001bßãT»!¹+g\x0017H\x001b\x0019D¨\x001bÆTIØä²\x0002.B\üÏà\x0016Zçì\x0004þ®¸\x001a1õÐ¿OÏJh5,Êä\x001ch2>Âï\x0017Å£#=_¸\x001d­´21-qpY£%±
².§ëæÿõÏð½õ{ñvT°cxl'vø>\x0015?åZJÐ÷/\x0007\x0012±(ÁK·\x0018dÕ9\x0015s5\x0004 Ôì×\x0001Â1Q\x0018%Ñìk\x0013C¹\x0012ï\x001fÐ6ß[Ç{\\x000b\x0016K$J\x0008%¦÷¦d»¨HÂOtµÀªÇHDUàÄTÌ¸wÑ6jC\x0019ÅAäáÑ±h\x001eÁe}ÂóØêãú§×ÏîÜý*\x0012ûý¿Ñöúw²\x0008"\x001ee}ñÂ!Ë0paÓb²X\x0018mÀÇq&-.nøË8TQ= ¾
ÒmÃÞu».S\x0018ÌW¥\x0005\x0000ª\x001cAº]S·<\x0000ö\x0011Ë}ï7ôÍw\x0005­Ffi*\x0002\x0012ðqWë \x000eýv\x0004Éè¢×¥d\x0006&7­
b\\x001cìÑ$¤Ìß9Æ\x0015Ççàêpfr±ÛÙå­ªââ°\x001fA¦\x0011Z¸¯qJÚ®6ß\x0013\x001fùL¤,\¡¿\x000c\x00046¯-Z\x0002Ñ+g¬Ê«Ì~p:!\x000b4ÖQÀdÌg¹°\x0017¾KJF]fã®0!\x0019\x000f±¡\x0011Uâ÷ç÷tTM\x001eäüx\x0012@ü\x0017üZ=8\x0017¢à\x00162$õY9\x001cÇØ\x0011È/O|Çñ§ïÖÄc	\x0013#È÷iÜ]Pg\x001aUiø.ðÐK'Þ¤­\x0008jÞH±³²\x001aÏÔÌ¢Wis%\x0012E)@Z9µT¼ä;\x0013¬uØäÁ3qz\x0017Õ\x00141T
êM|6íÔËu[ÑÚwykúØ£ø9U ÕÛ·;§´þä.ØH\x0016m\x0006<	©UÎ\x001e\x0006çÏÙ\x0018Q)\x0006[?ªÊ0¬Á¥{\x000f\x001f*!!\x0006±ÁßºbH\x000eáxOÀ\x0010Ü¬i!ÇÈ\x000f¤	wT¸ÈER>\x0012àkø;K­ÂCª\x0015è±­01â\x000fªñ'Ùû.yÆ\x0007µa øñ\x0004¡\x0014
Mz\x0018'¶Tà\x000fQPùËír³~\x0007dÁÆ Ê\x0012	tïB\x0003;-ÜW¶´ :ÑLP\x000bP°\x0015\x0012GG$R±âuòBRÍC\x0004*zkÀÛ¯\x000cµ$UX\x0014SPQÌº\x0010yÈ=\x0010ÄX\x001cä
2Ä±\x0003å­øî¾2ZNÎõT'ÔFg\x00034Ï¥¨9ª
HyÅ\x0001ñ=äí§o¾áäÉ½¿ùæå¯\x0013
¯ô§úïX\x0000¿\x0001hH=B»6CU¸\x0013~Hs:ú<þ\x0000¯Ôb¤\x0015h\x00002Dx{D
Ã¦?ªËî\x0015}´\x0018¤ÂÌóæw\x001dXIyJ¡R\x0018W\x000c4o{R\x0002âÿ<'\x0019õêÛ®Ä°»#\x0002g{ÒèF×[8Æ%][\x0019\x0015vôøwÍÏå4=p¦Gì=Vj8É\x0015aÁ}½ô\x0018\x001b IÞE\x0008º)(c@Sêãúv!\x001cü\x001e;m¨ê\x001eI·MÞ)èp£²ÿ/¤¨¢Ò\x001c\x001cÔDê¢C£Yô%Â¥1$iC²7|Q{<<ðP%©¸CY¾ãGÀòáN)Sÿ^<Z\x0004IëÁQ¦E³E(@V\x000b¥((\x000e\x000caßúì\x0013ní\x0016Ýªø \x0011Ì®\x0015	Í¶ËÙkºh\x0018¤<V:L²¥Dx´XÄw¨ºG\x000bôçm\x001c¤Y\x0010oÁ¾bB\x0003Mº\x0007Þ++Pß;p(Ô\x0001õÑÉzØä°	ÆEÓÉP·Ã¢\x001fÚÿ(G5\x0017Ï]\x0004ÒX»Ã>ZÁ9P®ua/\x001d´Ð4¡ìÖU½ÙT\x0018õg6P§®\x0011gt
ÏS\x0007)yE¥¥G\x001f¤Ö>\x000eYÿð\x0016ÈN£ê\x0004úÊ\x0004Ì\x000f½ÎDÇ@0#\x0002cJô&Gb¯¹\x000b¡ÿ¤~°cÈÂ$\x0001{äB¨ÝãT\x0007
@#+ÜC:ïVÐ£¿òP¾¨\x0000B2-,ÙêìPJm\x000fÎ?`ìßü0*è	µó¾ø÷Å\x0000µ%¼Aút$ÏnpäÁÕ£A$PÇÿ¹æEõ\x001eÎ¡IïBË=\x000bî¯|Ïøø}\x0000¯!%
\x001cãú½ï§\x000bT-þü\x0016µl=\x0001Á\x0018h7ÌzpB£%ND\x000cÿ\RQM} C\x0011{é`X\x0003{Î$\x0012' kO¶p¤ôq@ýgÝ\x001aøWýúéO·zÿÇÏOKzó|À/®áMÔo'C\x00122p+\x0002Ò®
ÃnYÆÔ+¸\x0005gåKD'\x0005\x0005þ'Z\x000eË\x0001.·>4óè?9YÐ\x000f\x0001I
ªNl'=î\x0014jeR\x0010Uy'lîê\x0001\x001c®Ö\x0007_  E2QÆxOßþýû\x0010^\x0003ÌÆE\x0008;.ÖIh%ô\x0019ìbÔ+\x0007wHÙØ»ÇaýÐtÁÆ\x0000*3ÑÀ\x0019\x0006BþÍí\x0007¿"Ïp§+)Â).²dG=|<Q\x0008àíZ\x0007L<f\x000bDÛ\x0002eØ\x001c¦\x0014vËD\x000eÔ?V\x0000Âg0Å@Ýu1&(\x0004XÓ YG\x0000u\x001eÁ,ûÈU¶\x0001<\x0004f>úÂxd0I¹ zJÄ/§¤FHQÀ¡s:`¸î${gHÆ.Là¤b·\x0002Z\x0014tkã\x0001À~1\x0002\x001bÉ\x001eú 6\x0012éðïá-öÂ1NØQ©5)D.ã`Í£X#9óA1\x0018ÓÝÈàêfì4Ý§Îq®XuÝj8Únü;8U-Txÿù|Û8°±~å¡1_Ñ\x0012TßÏt(ðÞð÷ÚDüÒdq\x0013¶nð\x0019}à©\x001a²`i\x001f<\x0002üû	1áÞ¤d´hM]1çÈGAÕ¸¯I'²Åg\x0000Ù©\x000f )\x000em¯yQ\x0012ÔpØÂÏ~Y'Ù\x0002éâÓpIÞ*	Ñb'ÂqqûBYa\x000cro\x0001Ë\ËYP| Mß\x0015\x00157\x000f£@
bæ\x0003¨}\x001a%UÈ"	â°ö\x0016x,D\x001f1t§ð'_0¾',P\x000e\\x0016rdºeÎÑ¬UßPDu¶\x0017}Ýùx`ú,È°l'òbBo\x0015mYÿ?\x0018ñ\x001a«\x0005 ÏBÉ°N\x0010÷ö9¹\x0013xM4\x001bâ@:Î¡aòEXR#Ùs{g<\x0007Ð¸.ÏR\x0008QNên[ÛÛoØçöúâ-ÿÓÿôû§cqÿûo¾¬C²íWÕîÇCºÝîGÏh\x001dP/Î)
Õ¿ú8\x000bzÜèÿ[VÆ1ºOuÚa;«º\x001få´\x001coQ/t¯: Lð÷·£×º&?Í6¬ì|Nõ#áú\x0003ûòþèÃBV\x0000\x0001)\x0007â\x000bM9\x0016
ÃÉ\x001c3
\x001aMÒò^vW¥¾9Pª\x001e½\x0007·m2KâÆ&\x0004É\x001d2`q&¯<¨ ì£Êç]Òq ªoL|\x000bX\x0011î[+,`MÇÉ²H?øbP
\x000edËª@\x0005\x0003{àT;p}\x001a\x0001û³\x0007'§öÁ\x0018Wjêåùuúý\x0011BÐaæIÛ>Ð\x0001¿gÞ#O:Pè0G¶qÖ¡
Ã\x001c#ÊÑ\x0000Ø²ê3¨\x000c\x0006;[
S^%2c:M°\x000cÔÄè\x0011P5J\x0017\x0007ê²C·\x0004£$R#Èp÷\x000f2¯=d<äxøð> \x001a(¤{8Îá~\x0008vy§~º§9gG¾Û\x0019\x0017\x0011¦º¸\x0007K¹ª·à ¿±Å`d\x0003\x0019Ñ@lLµ\x000bðô´Ãg\x0003¼Z9\x0016C$Ïtú|_CµÆ(mÚr#IÊÓ@ÿÉcB}xÿÝ=¹ü¾ù_Ù\x001e\x000f^Ëh;mR\x0010,Ñ¯ÐµÌ\x0016@üïà.¨ú[5Ü(»'7\x000bâ\x0007Í°<i¤P\x000c;*Ã°3\x001a\x0015äm½-\x0014\x0002\x0005V¶W®QbôD½²\x0007~Ð\x001d´K²g!0h]\x0016öø3\x0013\x0014-\x0016\x0015©5ÂiÞ\x0012ðsD\x0000ÎØ2äÛp-'jøÃ\x000bí«åBw^\x0002$¢\x0002\x001a;ì9ÈªV:ø\x0008øÇÕ6\x0014¿w}¢tuAÕ^âQ¨ò&¥vz\x0015Ð¦m+4\x000bQ¥µhÊ¥Iâ+\x0013QÑPÀ\x0004Â"O\x0015­)w\x0013ìRöDì	e
\x0007~fT®kGCR
Eö\x001cÞ7c&Çñ×À£Ï¡\x0014×
¡ \x0010k\x0007"ðó?ûìÎÝ/\x001e\x0011Ø¶ÿúqþþñ°\x0007§7OP\x0000øMÜ^Ìs\x001b\x0019\«hÆße\x000fq©Î\x0005`Çáþ´0ØGÃ1+x\x0004ïÀ_X\x0008q°%.\x0007\x0004c8{¥±àá½ä\x0002\x00192ßÐ\x0010ð¤°ýÛî7Î' Ôo\x0016½Ê!éCâ¼]­ 5çÒç\x0001ï"\x0016í"õì1d¦Óxm4B´\x001cà@¸.£u\x0010ðC3/÷>|ÿÌ
UTID\x0015\x0016­èÙ\x0013ö,\x00039a«BüpzH\x0011'\x001f`ÂàH\x0016vBñøÈº&©\x0010A'ì\x0008\x001bY]C­ÑÇ5µkppµ\x0007{Ç&óVÅ©@BO\x001bQ¨+ä\x0005\x0000U(I^å©?ÉYd@\x0010H\x000b¡\x0005-AXÌp§u.«\x000bÝ\x0019¸\x0015P\x0000ä\x0017N/KÒ½#Äû=jâ;\x0015\x001d^úþ³eY\x0006\x001f	JL´ôG\x0000klõµ	±²\x001dExZ,Uy1Õû%\x000bÖ¯ÀçïNçµ,kmÿó.in)rD¤âÅ\x0015*n¥\x000c¼Lfâu/¹FÛ_Ñõç¡ò\x0019½ÙÞÇú`¡5fx&ÄKaRè­ ,Ï?Uk\x000c$-ÍëÿlW\x0011ù§D´
\x0004\x00136Ý¡d\x0000µì\ëlÃÔÑfð7t7Q >à2P\x0011£¢Ã\x0017b9Í(y1O
1*Â\x0007­ÊÌ\x000cS}E¿\x000eHU;Ñ9}I"7º\x000f¦d)Cv¥P^ãp¬cú³u¤Ã\x000f9(N
Ý\x0008Á÷Ä6LÆl´®ü?@\x001cTìòä*Ù­_R\x0011J>îòkA§×[³>«`óûFÔ\x000eòÝWHµ³9\x0014\x000fq´Ä$\x0001\x0004¡ÏÊ~\x001bÞ0$Lïr@Ä '!Y=\x00156ÜCð×LØ^R°îLv¶\x0005\x0008;d	ßÙçöúâ\x0013_¾{ùÝãý±\x001dYLô7o\x000fèìÈ4sÃøNt«ÅµIîC©sêéÀóC\x0000=¸Î>v·Ù·$Gq\x0012ÝÖ\x0012ÙáF\x0019\x0010@Ê>¡·Ðú\x0003ÊõM\x001a½SÙ[ú+¥èÝíp*ôÙÕ^\x0008h.\x000eØÉK \l}Âï\x000c66LN|\x0015\x0006ßD6K¾"K	ít$\x0010 &eV-\x0002²©7ªC\x000f\x0015«æ\x0018Ì®üî5A
\x0015¯Øpa\x0019\x001bVÕ\\x0002í\x0017ys\x001b\x0013L¼¬«T\x000eê«ð@:veéÝ]úrÀÞn3þÎ\x0010|Áv¯L\x000e`\x001d,]>½\x000eüÞSö	£)üÃÈð¦Ô-\x0012#¿5°*=ªAh²%7ô±½\x0018º"\x0002Uô¹SÁAm\x000c<)Ò'ç\x0013\x0011Î¢\x001a¯©ï/ôÀ¤&·£äE\x0015KÆ\x00015	\x0019\x0013D÷¿\är\x000fÊSººùó"\x000bGôô}=»d«Þ%3t.@WïÛFðF÷\x001fûly¿
½ÆL¦u,\x0019.F77)6DÛ¹6#)(ÃÉûvÁúiþDâ¡jJ¸Çhà\x001eí¯ð¯'àÿ¾A!Âß}Üï\x0003EÀ\x0012\x000cb£ªÈ\x0018÷ó³ü
Ì\x0006ã<ì­¡FBaÁûD©1\x0011°8ÖâÏj»ãYWùxÂæÅ\x0000\x001côyR\x001eí\x0003_+@§JjÉ4vYm6¶\x0000ow¶Cº½M\x0003£R®ápöòw\x0017ç¦íÓqoÜS¾|â\x001e[§­ó¦D\x0016É¯Ér2m*¼ÿKk-%ª´`ÄZÌ	µÎ5.\x001d1Ö»»Èxüã÷ìr¼Ç"kóô Hw*sü>Pí¢d.ËK1ÖÙ\x0019I>`kZÔÊï\x001a+à-
\\x0003¨\x0011"\x0006\x0019[¹\x000b¢ko@\x0018Î6$cd^r»\<E9:	K·ÏìõE'\x0002?ûÙÏò±\x001eþþÑÛwÌ6\x0015ð\x0013T\x000eØï@aè7A­i\x001a=ÀI\x0010
Y\x001cË°"Í©×¯ÿjÅ{{·LTTmøa(ÍµµAúâi\x0019ª¤ãPyò¾VV¬ôØø}\x0007t\x0016\x001ap\x001avl£òU²\x0008<\x000cÔ¾\x0001½_íÁo×Æ-røCÃAPj\x0003Ù!W´\x0017\x001eýL IAcP\x001cDB\x0011"G{¥\x0018.±	a$ÔI²\x000c´"íÃ¯Ýä9P+a9õ{;ù 0\x0017\x0001\x001eÁ©à[cÅs\x0019×Od¤½.6½épØe{|ü­ëaÅÛ\x0019ôªH^\x001cTÄ\x0015Yä-±ÂÍ
QxCX\x001f	L|¿]¤ÔÚøï\x001eáð{^Õ¼\x0006Ó,\x0000Üà-­<üÓìÊÇû#²ª\x001a4\x001e¯¨m:\x001cÌQ¢jÌ\x0013\x0002¯s`U\x0013ßÀù\x0010¸}KrÅ\x0001ÒIÐ+«ÁpÑDB\x0005) \x0013Y_ð|J¦nÛß\x001f¼\x001a÷?èjlº»ñD/'MNL$Ê	r\x000e®M¤~9\x000eÚ4[\x0001Db0Q"ë\x0013J\x0014ÙÝ"¹¯:TÂ\x0005ÑBZ\x001a¸®\x001ebíß0ôæux\x001bäS¢\x001c~\x0001%\x0013¼Æ:Eu¬gW¦±Ç¿ÚÓó\x001b»<\x0011AB¡ÐHã|¤².FGìkÂ0Åð°¬øå{Úµþ¸»ÅªvÊý<\x0001Û\x001c\x0002Â9\×±º\x0007l;êàì{Xk¿Þ°ïÐ\x0002ô)ü\x0003øsÎMBkr\x0013\x0017\x0000oºØ\x0018\x000c¦D\x0004\x000620í1ã³Ü\x0012Gr\x000b@uOdíD¸4\x0012qJhvÍÐèBM¢àê÷-t©DÚàzKc¢ "¤ù
!{®RÛT\x0019®ùÂ!VÚKqÖÑ"Õ|\x0002ô\x000fS\x001cD\x0019þK%¯­xBàsPì÷r}ö'¼¯ëÿ:\x0011øWùúOþ?+½½ü£ã!?\x001dCBÖ·,Ðl¾yó­»`hJÖ\x001d\x00017©jò\x0003°ÊðD­²AJ* ¹\x0003ØÞbhK ûñý÷ÍªtÜË²cAX)\x0003îòß§u1ÝÃ\òÀ¢ÒHUrMjaz\x0006<(5
 Ð\x0010×á%`\x0016\x0017\x001f\x00069ÓLH³\x0007 \x00185\x00120Â ,"$\x0002ª!¡\x000cAìÞf¼W$\x0005Uðq<
ÁUr-\x0011y_Ôë
bÀ»£¿®C0ÈI¦k
-ø\x000f!ÍJãÿ±í\x0000äa.qXN\x0007S`©
À (Õ0ÖaP÷êgku@è\x0008f¬	ÿÙ\x0014zT\x001bJ6ÝùBc\x000cï
« ûíJ\x001a93ý.yÙ\x0015\x0007\x001f\x0006 ä<H\x001cz\x001br¹é\x000b¡Mª\x000cÀï§Å!\x0019	ÙxF¤@Ò \x001b¹\x0016Z	D\x0006\x0000¹ï×W9IÐ\x000f\x0002$aÙëMÈ\x0012%o1aÓ{ûp¤T\x00009ìâ2ÊñV¨MeÒÔt(¤ í'WK¾7dW¼9\x0006\x0004\x0005[Vy4·:qa\x0012\x000bì\x0013Í\x0015\x0001a
pÞí¯ÑÎA\x0002\x001b°¾\x0011y ?G$óåå=fÄ(ä¡(ÐÓÇ3û+\x001dñ\x001a^\x001bÆdÜuñO\x0007BùíÛ\x001fâà^×çÑÿÆ!O\x0012N¶jhu\x001dí&Ü·\x0018^\x0014KtÐ9êÀÖ\x000cáþªÊ\x0016ßãø³'·|^,x¹Çüp]4/+Ñ7ª)8Ô¯ÑUT9SÁ//ÇQw!\x000c\x0013®0rBbë¨kí$ªMã-\x0003xHfµN\x001d}ð¯ã;\x0014H[j\x0016æSqÈGû¦Yx¡\x0010-ò\x0016á\x000e\x000eõ
ø\x0012ÍÈiP;À\x0013\x001bL4HRÚä4â\x0008ý+X K£=¸\x000bUmÕæ\x0004Ó¸í.I²`¶ÉÈ\x0011¤PL¶$å>zl\x0007Úé\x0002Î%ëÇg\x000178®\x0005\x000fâõõã_Ë\x0007ÿU¾åÿú¼õô\x000f\x0007¼L\x0008$¯Åe0¶±\x000eemL¶IêS\x0006Ó7ØÀèWÃø%AÞçÄ¨ç\x000bÑ\x001bë´}¸Å&ªØ\x0017UL\x001dô
Ã¯L
®Î\x0017ÿJhÿùB6~B5`rÛÙ#`Üø³¯£_YÕ_ÌåÌþ¥_6À %qãG¿\x0013±m\x001f Eô_ÐÅ&T F¿ÂÌho5­Ï÷×E!^IÌú¢>ú½`÷VöJk8\x0010W	\x000eÿÖÆó\x0018r°@\x0005T.Åá\x0019\x00064@ÄTIHØÀ²l¸tý\x0013\Økq²hV\x0012\x0004I*F|/éîùÞS"JY(+gð/6N"\x001eäm¿[°½òAK¬ÊwÌ\x000f$*ZT-\x000ewBêq¶+ÎÃµÙL>l*a¢Üe¥ÌàUÒ©×häÉo\x0012/¥©õ1ÈkÐr_Y\x00015ÊÃ¶}{?ÖúC\x0004?>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/assets/images/hero/man_1.png](https://www.1jeune1solution.gouv.fr/assets/images/hero/man_1.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=£/x\x000eø\x00118um»ÕRhf`CÄ½\x000ftÊûÛß\x0005ð\x0000dPuÃ®!\x000bÅñ6ë\x001aÕmuC´Ñ(3¬X\x0019Â?Cøzcm\x0010\x001aFÀ$\x0010Û(2Ùê\x0001¨] X ÛÐ=´\x0019j£hA_\x001a\x0011¬Z5HujÅÓYÕ5Øè4Ø6'\x000e=ÑÅ®så¹\x000fÎ®½ü±¯\x001fÿûÖ=Nñ×øø·ø5OK\x000cq\x0003ñÝ°m%÷á;Æáä\x000fô¦á\x0019ñw\x001cM§a©Á\x0004qüØÿÂ\x0000ËÇ[?wÉÝØÜtµBQ¨"]hõÖö¡
1XN2ÔrÒi(è\x0001[ñ\x001eFwJ\x0016\x000b\x0005~Þ8àËË³j}FÇ\x000b2MØ¢¨\x0018b)\x001aO\0ä«@\x001cM\x0014ö£|¦R: RÈZú´ïï·\x0007î3w\x000fÜQÏ\x001bÌpN»\x0007Zà=ÒaçM\x001bCI¼ÆnÖ
N§4qx<õ\x001b\x0005ÈÅ»dHf-\6">wN=£\x0005«â¡¥ñ¨/´Ï×hÆ.Q\x0007]uºêØ£èbpèõkÁ\x001b··Ü±[\x000f)]Ë¹RÒu\x001cÁQÛ®\x0015(LR»¯å:I¸\x0017ésîáAË=qíº¸h|«\x0005tÓEwzuÕ½ôåWÜúÚ;ÜÞR\x0006PfªÌðóîàðH\x001dkÆ\x0016(\x001aê!m#\x0010Z1´
M\x0006®\x0005Âe+ÁÜü\¯C\x0013 \#\x000bj0«;[¾TùiÏÒ%ûGûÖDëÄóÆ\x0006Cíg\x00026H6lÖ(\x0013< ¬æ@\x0000&\x0010ªð*\x001b\x000cxãT`\x001c¾
z(/º¨7æ\x0002½C@@·ÀE[ \x000flC
ÈV _ Ï
|;4üqÈyP\x001c®V*Rh¥"á\x0005¥Ç¢î=¨
&¨&\x0010óSÂÅ{ÛL¶W°såùE\x000cM\x0004£Òâ\x001e¢ÌH§ãípr%Ig>V¹ôÅ_Þ|µã¾E`ü5<~-"&\x0010»T¬O î4j\x000cÿ±\x000bßox~4\x0008&Ñ Ï ²¬\x0004íM£\x0001¢W/^vÎgÓt³¥qXôC{\x001f\x001e\x001céÁ&\x0018\x0006Æ\x0007\x000f:M\x0005b\x0015ÉláLð°\x0007Æã!OKÉ¯­,XÑ.©Ô\x001294EÍ¸Ø<hÓ\x0002\x000cc \x000eà^5
)ðóåH7\x0013\x0016\x001fÕGîã7¶ÜÐ ZË\x0016\x000e­³ÛÆãÖìwIowö¶¤-û=>®«J\x000fErxtìÑ5^\x0019]/Q5D\x0005\x001f\x000bzLF\x001eºh©1Ç×¡¤¤·át¤óW³\x0005¢ñÖ¾\x000boèÊ¼\x0005«&påÂàØhÏ^ÒcÏRè¦¥ÊLð!kueßA³m
ÿ¡ßûÈÇÝG>önfÆøa»¾÷\x001fÜw£vÝ6\x00197¿vÚO	IY¸±kÜ²â!\x00126\x0002&\-\x001d\x0004ä\.\x0013@IXÀQü¸o?fÔQ6£vfüA³}£$ÍD\x0018\x0016\x000c\x0003y9È\x0011ml¼}9\x0006gÜ§Õ\x001biZo\x0010v0Ý\x001fôFãØn^ÜýÀê\x000b8À\x0005j¸\x000b5 4ú\x001ch¼¡\x0005òv³£Þù|Ö.\x0003Úæ&JÇ´\x0003þú[à¶\x0002\x0002ùd4ÕàW¿\x0011Ñ£Â\x0010J¶ÍÞ¿¡â Ø7t\x0004ÄÕæ\x00146Ó©qð ~\x000cî¡J´\x001bh¢7¸g#Ð´n\x000böqÍÞsî ^'³
¨\,âû/\x001b\x0000á\x0008ÖV7H\x001cu»çæò©\x001f»ðêÏo|kú"\x0004ã¯Áñ\x0016?¼¿\x001fýy1\x001eë÷\x0013õv;9laï;ûñØ_6Lö\x000e\x0019ñc¦]\x0010ìw¢(Æîqj\x0019¢ æ®]Ú=<j¸*º[V­R|â\x001e\x001cu4ú¾$íg×\x0015ÇlwÛB£4YÀÝ«\x0015!(P1ßóFQ¬ÍVô}tÀ1\x000cxlUJy¡Þ\x000c
	IßÐ\x0011¦9ÛjöÁ9u»Ã¤ûôÝ=×6´Ú0$NàØÞßsó3³â	%£:ò\x0016\x0008Ð(\x0004\x0008Ð¤¬´ßb\x0018\x001f¦CÀý²è\x0003ßPÀÔ
F\x0003± ¹\x0016va´Py]ôÌíVÏaº\x0003\x0017*¤n¹\-HmB§Ûâ©UW°`úÅ×\x001f\x0006~¢EÌ-\x0018z>³TscKù§
Ð¡!fÒä©[¨Ý|%«©"?õ³\x001fsa2'¿;·niâÅùåëS®T­º/¾ô\x0015Û\x0008û¬\x001f»j¹\x0008µcôB\x0019Å\x0015èhn0¾·Ý¡. \x0019`\x0012£#p¬Ûí%\x000bÔ NôÙÐ*'û¬j0è\x0007®z¯a¦\x0001úµ=PSY]\x0016Ë¥²eoï@#0 *VJ±
¡	£L2!\x001e U5ÅG2\x000eªÖÊ|Ñz?Ô\x000cCãá¡\x0014<§tÔ
tnh±kµ
í7l\x001eAm¦
êç¹\x0016½§\x0006
"|\x0006\x001aW¬\x0016 M\x0011MÚ\x0014ì÷xæÐ*3 \x001aA»u¬	|LÆ¢¢`¨g£ÝíFÝNò¸\x0002ÆJü¬\x000cdÕÂôñ¨9bd6[­µs¹ÿû/}ûýÜþü·\§ÞI0þ<Â\x000f8öcü¤h\x001b<¹¯¹XÉíÇûùt¿ß½ÔKLÿÔ(ü\x000b»|<\x0004}CÀRKDã¨bKª:xÏ\x0000[ègÖÖ]eqÅ
&]U§	d%
"
K­@µ¾4çfÿ\x001dYjØï\x001cK'ì-\x0019×\x0012a/oC#®¬Ì[PÏ\x0008u\x001c)\x0001VlAä\x000c\x001df9ù;à-!\x0003/®\x0011ÄzÿÊÝºÛ°ßÞ?T0$ýe!ÍÔjâÑýÊðÆû±\x0005~¯°=^Â¶x\x000f¬\x0018ÌÎ×¦êN+ ~°s±2\x0001¥\x0002~ñÐHy-p/¡³\x00026*RÀ¬¾ÚÜãâ;uá\ðh§aø-æ\x0016í5@_aÏMò\x0018
|çW2òð\x0000­.Ï ¹JºôOÒY2îN­Î\x0018%Ç·=uYÏâésîá½Û®O¸"~ËY5Ã\x0010tå+:ìÔe\x000cgÒ§6×=°lÄæPÍ\x001cé|FáÖãÔÒ~èÔ\x0010­øY8TGòu\x0013ØØ\x0010\x0002¡I§b\Ì8à0J\x0004\x001d{\x0006ØÔøÝl:\x0013ÂI¨-\x0000\x001a\x001aÎ\x0004pûî\x0007ðÔ2c²ÏÒëÚS&KÒ¤~\fÃª¹a´+´êøY\x0014\x000b)\x0015\x0019cãÑ8ì\x000f\x0007\x000c.D¢\x0006ï\x001dÚ\x001eH^7\x0018ÊX¨a\x001bS»Ûo\x000e¦1¤ï3Ð*Æ\x0001EM¾ûo\x0012º©Sà»\x001dy?h
}\x000cø>¾$2\x001dbc²ÀÍs:)Ó\x0006Àó¼_?\x0019%âWÆ½£;\x001f8ý÷_ü\x0016B}\x0012ÿãàÃ/¼\x0010ìG´DÊ
u½Æ½T»?k%\x0006\x001fì\x0005á=
\x0012ÿajÝPÉÀ\x00021ì\x001fü%\x0013+FãÉ[ó¹Y<=õô'ÜÛ~Î5-e¬XÐÚ³ÅXbV\x0015DaXÐ÷Cm\x001dîZÕ½!\x00045\x0011E7\x0008\x0012ÓÐKÐÆÑ\x0005¸²]Yw\x0005
wä%"¸ÛkËü'OÑ.­?20Ç{ÂÎg§5t?ý{îÞaÓuàAmAS\x0005ß5î7ø@C}\x001an	g)y'B\x0004ä!x¼uñ èC:³¶â\x000eö÷Î #ðõº@\x0011Ñ¶ÏJµ¾e}¦Z³Í¨#ÿànw Ôi>)zWkeCæK§WE\x0007pM¬MíZ¤-§»\x000bcyRå6Å4ÛlÊù¤[«¸Ï|áe÷WïºÕSgUx\x001a ùµ;clµÛ1^üÌé5wëæ
7_Â0(®I3þ
ù°oÏÒ|\x0015ðøñ(Ò\x0019Ç\x001d\x001a=\x0005õf#7u\x001f>ó!õo\x001b.\x00145Þ{H@äwj\x00128¨¹&Ææ¨á¬è¾	²\x0014é,R#Ç\x0014~Æ¾2µÀÃ)"·@´ö\x001cP\x000f d¨Ý\x000f
â-\x0004Yþíä\x000c$s\x0012\x001f¥.ÍvG.@\x0002³ÏøbBÐ(\x001d°ý¤¥zª	-ÆÛw;Ý\x0007h\x0010W·2\x0003AÔo	\x001b?Îx8IQR¨{èÀdCfc\x0007Ac*ßü«Q\x0010%c¢ºè<ä¾\x0017rù 7\x001aÎ\x000fØRepô?óK\x0007ßJæB'Áø·xÈ[sõjð©í\x001f6äi\x000cFOw\x0013áûéíMsÆ$&,(\x001b×ê«Ê¤ FìLD\x001f\x0007d\x0019+z]¼rM,}ÒG{xg+9W5b³\x0001%à§.<¢ ÔªË&S\x0013dF¸1!Â\x0016Kß¨\x000b.´]\U\x0000¦Ü\x0002S3\x0014[.\x001bEaô\x0004¦ëIÆèhV·Î|s·å~åö\x0015\x0016c2ø¡"N`>¤¬0kÎ\x001eÇÄ8Fü'H=)È¡Ðä\x000ftÀÆY¼\x001f|ëÊÂÔ\x000f¼\x0016\x001bFZþ\x0007dcCA¡®\x000f[\x00132:Þ3\x0017ä´®ÆÌ:®¡H¬1I{çóá£Ýã\x0000\x000b:þv\x000f\x001bîì²\x0005Àvm
ºü\x0017ò@.uøûþÊg¿êâÙ«í}Zz'V\x000b.-¹0¿qbÜuILsÆS!zÑ
QÃqÒ\x0010+ÁÙè\x0001£s\x0012\x0004~3H!ñ\x0015Uç¯æÌÙÆ\x0002ÄEíÏ\x0004CÜØ\x0008xBÚö\x000cEÅ®0ehÓ`zúÂ6*\x000bê\x0019C¤c{ùDh× H%è´KèÚà
GÀµ
4È\x0015r±AÔyI«u('7Ì¦âÏFòa?K{»+\x0014O³\x0008²¸f£\x001d'£IÔ\x0016È\x0003ãk}\x0010·sÈZU\x0014·{®I!4à\x000c½¤\x0012þÉ"4Lè¤±ë\x0005çX
\x0011\x001aø`àsð\x0016¡âÆqÚëvú¯MÇC\x0005]£bÔ\x0004x\x001b­:òG\x0014\x0016lNdQd}|¬L"\x0008úãñqWsãáÿð\x000e¾U\x0004ãßâa8ö\x0013FM|j{;Ö©×\x0013ýi­5lÿgÃû°­o·-;HÄ¦!\x0005f]ecé[«(1ò\x0006îQÁØùYm³]½æ&É,PÙ\x001dYú×ã\x0001´¯ßxøÐµ:C××z\x0003Wû\x001eÚ\x0005\x0006tX\x001cÝ~G\x001e¶(\x001eÎÍ×ÜJ­¨Qõ4d0Á¢Å7¸(ÉZ\x0012~Îi1Kåé¨û\x0005CÃºyß
_Y×µ@R6ô»sQ|\ô\x0001\²x<¥CoÉñ@P-Ì´\x000b¢bh\x0003û7#ÝW^Ù3º\x0003ô´øS2â©ªí-\x000cÊ+U5¬Ð\x000cÑ\x001d@UtÄ_\x0007S_}\x0006Þ«\x0001¿ÜÊÌ\\x0018+\x0003&X.\x0004»<Wu;n\x001cd4Õz¯.Ózaøx,/Ï¸»o>tÛ\x0016´Ï­¸ºUî\x000f_/º\x0003+\x000cn\x001fõÝÛ¿îîß¼iEOo\x0001Y°M\x0006\x0008Ï@\x001aÎ\x0007Cñ\x0014[<§mÌ\x000cJ%P@\x00170!\x001b\x0013$ü<ø< f+x!\x0013\x000bdT¿_ªb\x001aMíâ!I\x001b\x0017{° .=£!ao0µë¬ 9±sÈxOi¡V^Ë6*
|Ò\x0010OÏÇ²"\x0019²
\ÀÈ(:ô\x000fúF_Pp<<8
¡:¤@\x000e×\x001b¨@g\x000134Z,à\x001a«mÙ}ÍF¢\x001b\x000etFcI¿\x001eC\x0011£ÂçéSúìl0ÆO\x0007lª2·û\x000cB(Ï
õTÔìNfHXyÚµbªÈ¾Õ!ÈÈ¸¸ÿlGÇÇZ#Þ ¨Ï/,Äê;×\x0006O½vÿK¿ôèõæ·äí$\x0018ÿ\x0016\x000fÑ\x00137nÄ>ÛÊ¥Ãaòz76þ/ñØ\x000fâ©µî(\x000cº¶Fð\x0011ë\x0006âêð9\x0000å\x0012Ôdï\x0012yþNÅ\x001b\x000b¹hÅ+Oj æX\x0013«\x0018È'\x000c!d\x0012î\x0001cãí·»¦õ\x00182êðB\x0008ÄÍ*VD«x:Á\x00026<,%ÂK\x0017\x000c5\x0012\x001cè
CM)LögØL»»û\x001d÷K·vÜ^»Ï IÙW²(w-xÖÛeÒÇ\x0005x\x0016\x0003H%pÑ<û³¶²¢ÿ¯æ3¨P5ñcèèÃRs®Vq¶P#ß\x000c¿¨à\x001e{ý±P4_oØÂ\x0003I\x001d\x001c\x001cÓ¬\x001a'Û0$¬*gÜ6íÄNYP¸þÜ3ÁÃ¦ñãSûùºqÚ
wz!ãzSCÛ\x0016Ü\x001a4\x0018¿l¨z&r+KU÷èÁ®ÛÜ¯»}ÆóFo´-\x00007íÖª1wï\x0015$\x0017\ÎîÛÆ£ûnÑ2\x0014º\x0007+å¢ä°\x0005Û\x0000¾qàÆæi\x0008î0éw\x000c\x001aËÅ`Ö
W\x0014')
^CY ¶H\x0018WLçößx\x0002®W¶²Ô¦ÄÄ®\x0015Þ*âZACO?Iß;v»ë§ØÛ@z%3(D1¶\x001bÔÌÕ¬ñÖ\ù*ä\x001cÄ}^ 79»¯t:R@´ß\x000f !àiÅ\x0001\x001bOL0F_Ì¹Ñ°A°ÙXÐ\x0017\x001dAQû2 @·#¯
53\x0012/¬¶pý\x001b\x0011WÁ:æ\x0007b~oè]ª\x0010;w\x001cøÒvßQÉÐX\x0004UÇòàw ò:=/oìØ{däÍ2ÒHäJ¥óÆÉL^*¯}åãoôÜ7ùq\x0012\x000b\x0007E»\x0017mI|rÏÍZýÐ0\x001dü?
£¼?\x001eKeF8²\x0000Ü`Ü
\x001abO\x0010F3È¦Q%ÛóÅ<p©a·¾rÊ-YAÉÖÐ4\x000ec\x0004\x0005­ÝzG-À¤´üÛ\x0010¿\x0000\x0016,
\x0003\x0015P+ZZíÛ:Øw\x0015CÀP\x0014pÎ\x001a\x001c
ZK%\x0015`4ÂÒH
¸µç>wg[	þN©¢\x0005PV»F"1ÙP\x0017\x0006=\x0000y´¦~\x0004OÏ­Ì/¨Y\x0001¦¥ª±O¶YXÂ\x0014\x001e¤~tt(\x0016¯ãU\x0000Ç[²à<êäü\x001aäè¸Á\x000c8¥÷Te4EF\x0002C¨9¦63jÞ\x0016=f8ç.^t©\x0005ÄT\x0019ëu8åÖÐ\x0016lê;\x0002åë\x001bP¹´ÂbÍ}îó¯º¯Ü¼'\x0003ýX:¡Êý¹\x0005\x000b~v\x000e¯?Úw\x001føwº/|æÓnq¶*TÆâ@mÅÂ\x0010ZÂøL¥/8ÙAû2(U¨\x0010%\x0002\x0015Ø~vzÃàE ²t?¤ãÎ7à*ÖQSó\x0005ï©Z5¨Ôø×¤ºö\T¼âàë\x0016´C\x000b¦pÕ¢6r\x0002bJPÓç´]\x000b(\x0010Ø\x0015þì~\x0005Ãþ@&ªd"Ð\x0005£ÔÁt:ºÁØ\x0002:ò6Î\x0013º\x000e¬3
þ\x0004T¦Ø¹\x000f\x0013=dJ\x001f÷\x0014\x001b\t\x0017=Æ\x0013©ØÇ¾\x0001FJ ©7ÚtôN:z6\x0002¦bOµ\x0011·DÉà"¤ÝoþP¼&hcáI\x0013\x000cj\x00109TVoÐOí×/Û½Üøý¥å[ßìÖ'Áø·pÌdH½öhëiÿ¯ØãòçÆa|Õ\x0002oÐbz®=#8C\x000bÈ\x0014é¼Om \x0014Ô}\x0012Zç [Í\x001b6\x0004îÏ>ç\x000eûp³ØBÕ P²\x0002N11v\x000e[nÉÐªE¶82±Ð\x001d·TØ¥Ó$HáEg¬=@æywqqÖPuJ(9ËàK^¯Tb»9t~pìv-Å¦·n\x001c`à»¸bè¬c£ù½ñ½?\x000b\x00133wºØp|#ÕOEÃ?Y| j¬-Y@#Ù@Ý\x0013W.»=Cê(\x0001@d\x000b\x000bÑTb+òXæ?7[K¡h4\x001d	³(«VèÉgòVlÌy\x001a$q§ÏÛ÷S2'Bþ´g©øY£ z\x0013ßÆ±\x0019(-içµÚØÚêÜÄ^~sË+sîâù\x0015w÷þ4Ð\x000byCÂ»nb¯;ì6,{\x0018	Õ£\x0000!«i"\x0019î\x0013X³¯UQÍ]¨T=¡ª ,bÌCæ\x0011HïÑ\x000emü+¢EQÌðÊtÓ\x0011Ð@ÅÐ1×æ3¡1!Þ74çâ½kÐ\x00148ß0JñeÒÏ(&û±&s0\x0002+ÄM^\x0017 ph\x0010{/\x0005åÇ\x0003D±ä¤\x000bïè°®@
MqdÕ\x0019bPÍØÎV«v^}ý·ì@íµ\x0016Í>ï=2õ^(öìÁÛKKl÷Â,Ï/\x001ahîkÆ¾ÇA÷(ª5 %æ\x001aj\x0014\x0015\:Ó©1È²¯3$÷PôÊT;?¤¨Ùîê9\x000b$°\x000e¡Hò^	óÙ»¿þÒof
òI0þ\x000f<þß\x001fü£ùV¬óûZãñÿ8¥ß\x0013Æ©\x001e©\x001a-½¶f\x0008ÂØ92%c\x001cñÅýÈãa\x001a!\x0003Ð-A\x0002\x001eÇkTîÙgw{ÇM\x0005³ý#W#E\x000eXH-wÜJÖíZÁ®u©»&DÐ[°`Ø^Í\x00124°*¤9bÙRô3Æ\x0019gä0f»tJÍ\x001apºúI÷¢\x0005§!Ð±KÇÐ)é!\x0005$¡ÑñC)%ª\x0001õÁk"oªXê
\x0007\x000e§:cµÃãº.2¦ùùyý7Ü±¦\x0013ÛgÙÝßwûÆ\x001bV\x000bVAOz­ê~ý@íÓÞO#)DÏ¤hô¦ÓÉ@i*{\x000cØ$è&LRvîôÙó®X«é¼*¬k3`ÂáÈiq7¾ Y6Ä0´|õÂ)qêw¢¸yoÇ\x0016}ÂuÛCwÔnÚùäÜJ%í^yt(	\ld«\x0004>o0a¬Ñ)SP¦¡ÅÚÌ¬¼ ì:Ä,PÆ\x0019j@
âi\x0007P1\x0010n·7\x0010\x0012¶\x00172ß@\x0016\x0019
ÂuLôñ»qÆ*¡Ê°\x00135D\x0019¤si\x0019 ¡Ä°\x0002h`)P¨.Ä±/h¦³ÈØT\x0013ËAÂ ú'æû±Ið½IñC
b_»ÝQV\x0003ÿ\x000f½Bð³s	ÊåZ4,Õ6!Û\x0014\x0002I\x001cíÙäg\x0014cÛ\x0011EÁ5V7ü²\x0005M\x0014\x0012ÐQÚT0¯fªUEÓ0]\x0005%ÉPªtÄ¼\x000628Î§\x0016UãxÜÉ`\x0012´å/TØìR9>t\x0006ÍE\x0013U\x0018ãÕl¡|¦7l¿ú+?ü\x001bß¬\x0005½`ü\x001fp|èC\x001fÏôã¿§\x0015Nÿ§A,~ÚBFlL»§-zØÃ®q¿4]ô\x0019$×5¯ïìE#Í	
Jûpæ
=B!Hó`?}6ÌÎÎ\x000b\x0001¦ï¶[P8j\x001cÚ¢:VÀâçZG;.>\x001eÉ*ñqÓ\x00003\x0004\x0002\x000b\x000fûpkKë3e\x0005cw¤v8cesEw¿p¯î6\x000c\x001aê04Eý[\=ÂÐ\x0011re«\x001f+ 6,ø£s\x0005¥Æ×c¼;\x000b¶`eHp 	\x0005#!Z©C¯\x0006©ï\x001bòÌF*Ç(\x0019UT<ÿ-\x001aéÃfÄ×÷\x000fw5,\x0013\x001eóÁ	Ï^,VÜÚ¥óÚ\x000eÝ­#µK£xÀÞùÍ÷>À\x0017jþÔ\YhòÛW_»c\x0008ºéÎ®Í»-Ë\x001c\x000eÝi£pØ\x001eìî»\x000bçN¹Gwn»õåEWF\x0019¢û2		8d\x001c S\x000c×GÌ¤K'bL\x001fø-U-¨&Ñ\x000e\x000f\x0014\x0010\x0008"o©?\x0011Ì\x0002®qú T*KöÇL¦¥A6 ¤5\x001d\x0014\x000b§kÈ\x0013{MÙ\R\x000c³ë/3\x001f\x000b¤j¸@²\x0006\x000f
µ¢#\x001c^kL\x0016 ýòGqS¢I Shy¦X¦gi\x001c\x0014\x0001í\x001eK¥ R©vÎÁîÞ+Ù5¶\x001dZPEÍ¡g
\x0002õfìÙ1ðÏ­þ&cR ÖÁ¦M\x0008CiÙ|)¶õU[Hêóú\x0006¬$naDWÑTs6+²\x0010¤Hjäáº£á÷±\x0016%SHúÉ2Xtj\x0012k\x0010õ)~\x0017øsär¨PÂÅD&ùÂÍ/|âÁ«-÷Mx\x0004ãÿãréh2ýëÝ qmÌâ¤©\x000bãf,\x0010÷\x000c­Qø¢¿ÛïyÅZÌ·N#y\x0014!y\x001c
ô\x001cý¨ $=ïyÇ»I*­VÒÍÃº\x0002R!qåäÄ\x001d¶z
ÎÇ{.c«/~O­³p°\x0018íhL\x0005VûØmìíhBÆÙù\x0019·X-J´tsw²@|ìêQÐ¥Ñã¨QW ì\x0018\x0007¬`¬ñî¾Ðq
\x0005$Ìyd\x001ff\x0006\x001d(:æY£+¦ò\x001eèKâò Ó¶óB>\x0007oÌµxóþ]ã­óøËâ	\x0008l..6»\x001b\x001ae\x0016$ãè9×©Z\x0011iî(êýAQ £¢¡îxºhAñöqwëþ¶\x0015öJ°EOA&\x0019ê{¥BÆÕìÚSÆïì\x001e¹Ï}ù¦P\x0018ÙÃÍ{wÝqÈO*»\x0017¿ôº«Ú¦uãK_pç×W%e#\x0010 -Æ
Ç3ß¶<ñQÜ¢4ê¸\x0015ËtÖMã+ÖÏAGL½A» V7,UËâÍ	dX_6êõÐP"o\x0002[ s(ûC3\x0008ÙS¾P\x0008äpg¨»ÝêÈ×¡g¼u*Ùk\x0005S5a\x000cB¤~tç
{\x0003Éæì½c\x0014òhÖ5-äBt»t\x0008\x001a]¡Î¹x\x0014 ñÉÈæÒ±mhH\x0013	r3µj`(6!p'u]§ºG¥R\x001e´c\x0006®\x001a\x0015b\x001bDØïqþc\x0005dîßý\x0007\x000fÞ\x001ahÊ\x001a\x0000UÓ	*»S{®¦ïðtN
DÈä\x0016ò\x001e\x000bó³òµ>ª×m\x0014\x0002.ÊH u\x0014:'qí\x0003àÄ,#"ëCb\x0007>64}fl4ô\x001fò+\x001fÙ|eà¾É`ü<þ¹¡âí^â\x000föâ©?9²\\x0010uÄ4²¼d´\x0011ÅºÀ\x001e2Ô\x0013\x0008Ùûr¨D;oÞ­#ôNÙh\x0007\x0001\x001bÕÁ;Gxw÷P\x001cðÃ­\x001d¥\x0005\x000bZÇ\x0007ÛîÖÆ\x001bØk&-xÒ)	YéêGFòËµY\x0015äpukYú}`é[Ö\x0010ÆÙù²[Àþ\x000f{©ûêVCsE¢µ\x000fæ,3å7\x0012O&¢"ZL\x000ekq\x001cä,0Í\x0001í(\x001cw×\x0002ÐQ\x0005êÀ_µ`]1dÜLìA¼,xè{\x001e	É]Z;mEª74¢ÅvÔu\x0007NáL«åÑ$-\x000bº¡:\x0001A[ÅbYÒª®tËqYeºrÝÝº·%iÜîîCÕµ²ºê\x000e\x000f-\x001d\x001fé<Rö53åFG\x0011T66÷ÜÄ\x0002è©Åª{´±mTKÌe,{iÚæÖ²M/f×5nP¤0í\x0004?\x0004JNÇ\x000bÑv\x001ez×üÀ7VÝîöN`7 p\x0018m(6\x0015\x001a\x001b\x0010\x0007V°3dË|»±øÔt\x00002 ð@7>\x00132c2fØ7~Äà~¡$(îBÇêÈé3J\x000cÂ¶\x0000ßëô´©ÚÐe\x000eOcè\x0005%i)'ì=q»\x0003\x00004Muêij´½\x001e.t\x0016\x0003ß(\x0012ª¢Ýh\x00063ósV\x000f(j¡ëÍ\x0006e\x0008ÈÛ\x001b3%åó\x0003å¡l!\x0016÷ª\x000b6.C¨\x0014¹\x0014øQØÆ\x000bµ\x0012Nýx-6n$QG\x0019\x0007Ï\x0010¢èÜÕênÈzqiÁíííE\x0016\x0001>'U£ÙÕæÎðÕd"­àì4ÐÖ2³"<õ0\x001dKg/Æ³±{¿÷m\x0017îþüo.þø$\x0018ÿ&ç/=;×èMÿn*yÎ1ß\x000cIZ(ßU
0'\x0010¡¯Di á\x001fOä«âÊ\x001e£¢ÞFÉ\x000f¢-/ZPÙ?F÷åö,¸ iÃ×x%t[¡RÜ|0r³¥rh|'t\x0006i¬è\x0010¤_¤E[Ðp\x0004@¦yÑ¼6ºÅ åî·\x0017º&Ò+Ôlq\x001f\x001e\x001ei\x0001\x000cäO0\x0016ï\x0007÷Ka,öÓ7\x0018·\x0003ú`Ñ.¯\x001b%ò`sËÒÊÈ¡ÌP\x0018\x001cn×~EFá¢âöî®§k\x0002/ÚÇ¼\x0008nÑXóï²\x0015òÐáâ¾\x0006ÎeU-wÆ3 AwY6\x000b®?÷ÛÙ©K®LXÑk0u«kKÆÿvÔê,o`\x000b²Õ\x0012)ïÔÕ
i£\x0001²ú¶A
e¦\x000fÂ¬\x001b\x0001ý·q_½¿çö\x000fö]}oË]½xÞO ¡)'}\x0011LYüNF7}úpÃHÛB\x0013-HÊP*¥¬§\x0013ûO·wr£ùb\x001c"
ñ\x000eÞ\x001fA ¦¼Ý76A&¬ðúíf+)¼\x001d8Ù1'\x000eZÀ#s8}\x000bÔo\x001eÑd:øg=«\x0005ñ|èy½!gæìA]\x0001¡¦HöÃÝßÛ\x0017]e\x0005E\x000bä£©Õ<d¡É³IgBo.Äô\x0004ò6ÑAØÙ5 ~¡çq:öÔ\x0001\x001b¦¿Ä4­k\x0010!r\x0005z%h\x0014¯Ú`¾!V±cM\x0003!Ä¿\x0004ºä¸Õöt\x001eó\x001c¡N\x0018\x0015pj\x000eêõ|\x0013TL*±§ÂÂI©9\x001e_v­Äíë³ïºÿÒöKß4-Ó1wrü¦î8xv\x0010w×qZ\x0013\x001e\x0007^5ÛÄûÎëE¡\x000b@\x0005¤jBÅÎ»²²P	@%P £
bf¸xþÂ\x0014cR>\x0017Ö\x000b\x0003-Ðl\x0001*ýòÆxÏäÔ@R»,Þ³Æ'Â­ñ\x0008äGSß\x0010Áû?sù¬)È×@¨ö\x001eíqÜÝ7npÛªÔ½áHçwñ\x0018·8{ ÑøväK<õ\x0016HÅÐPÉèA8(uwo×PhÆ(\x0019-ª\x0005û	æ9RÓuEJ
"Å\x0018ÕÄB¹ª
\x0004îÔîöºQC½}C¤\x0004	h\x0010©¥Û©\x0002òqß!\x000c:M3È®IÏ®E³3tó3
ð=\x000bÊÛ°5jQOÆuW9ß"m¯yÿÁ\x0015\x0010Õ\x0014\x0011SÀpêZüÉ}ÁÝÞÜv\x0007{neqQ*\x0006t¶|þ²\x0015N.\x0002Jpî4Û¡\x0002ït\x001aÔëÁÎÎ®è§£C¥òÈó\x0010<À³s¯ ~2yÜÚb2'pUªU5TpÏiÍ¦XE4
Hr6YJ¢jÐt¾Èè±ÛÛÝ\x000f
}[aqIºÇ;.'\x0016Ü¦\x0001ê×ç{2\x0004\x001a¦±(\x0007ÃÆÐHc,OGSã©ã@ò\x0010\x000fæqK\x001eË\x0004ø^\x0017c©vpjm5\Xs§O¯*\x0014
!,ËFUÍÔ*ËÓÙÙ\x0002lµ\
WWC\x001aHX'dW´º³\x001aÚÖõGÓh@ù\x0014VAÇÞ¡pªJ\x0006ÊáqqÖjPýªÝ\x0017º$wr~ø´ôìY44ô#üo\x0005=ôßÔ\x0007RÅÊÕDðgæó[§Ãÿ]ë7öq\x0013Ç?ÿÐ?ïôoüñýñô»:V\x0015Ø1\x0014\x0005áMX\x0008¹ Â¾·$Ô×'Ñ%\x0016\x0006F"Ð\x0001j\x001aùûè®_»\x001eÄoÌXº³±­Ùc5ãÌ2®¦,·,-3\x0012@ò4b½Õ@¢$y\x0015\x000f'i%\x0013ð5C!\x0017\x0012\x0007mç¢(øW·®øÞ`\x0005\x0006~Áø@=^kö çÄÅ
\ÑÒGRQP\x0014úZ\x0019â@sØ&1\x001c\x000fÕ\x0012
1\x0010\x001aÙb¾èÎ­¬¸T.§\x0001¤Ð%÷\x001f>t[jò\x0019O//K/:üANXm¦v¤1>\x0001\x00107ÈÈ¥c\x000b\x001a8¿eSq£äÁSÏ?\x0017´º\x0016Líû¸ÃÑ·\x0001ikB\x001d[9Fj\x0017Ze~ÎÐ{ I\x0012\x001bÛ»îÓ_¼©\x0002a¥s¿ò¹ÜíÛ÷Ü{.¯¸W\x001fl\x0002Â\uqI)ü¬\x0005\x001a\x0003C?Ñ	×h¶¾çs`©z@\x0003\x0002üpÛ8N>\x001bûÅ¹e\x001c\x001b·N7\x0011OÊ¸§¿\x0015øz¶±k¶\x001d¶¾$^\x0016\x001f`\x000có%	ìt\x0002j\x0007\x0013Ñ\x000f\x0013\x0015½xèÊóNlã\x0000õ\x0006zßAh»¬;	ü)ãf:]g
\x0018ÄóH¥c¼®÷N\x001a\x0017îï½]sy%MF!­ÐP@{\x0014ËÅ`o_t
E¯ß
 [ØöÁý/V*Rr\x000cez3G±Tð\x0012G×Ël\x000eEû\x0000×»2Á \x001a àë\x000c\x0004t
ËÐ\x000e ì¤\x0003ý¿e\x001cd½f÷ön>\x0013<q±P\x0011ï_·ë¬\x000c\x0001}¡$ÕQAJ<w`{ñZ2\x001byæì¾Y\x001aBNñoâøÀÙjöhÚÿ³ÝDò25r\x0002hp"D\x00171hXµhÐcBUó¤öeo5\x0010r¨\x00145-õB(ÞíÛÞóÞémã\x0013>>4ôº8;ëf*\x0005+dì[:n¯5ì¹-\x001a~\x0016nÐ8iÚSÕbJUÈ×A±¤pØ¸%s¶
½v¡»»s¤áI¹«µE1\x0010\x0014ô,°\x0012$÷\x000e÷å#mª\x0014C\x0019´RW¸â\x0015ä\x0008<Ò!Ëûaè\x0016\x0017\x0017$a;¤ÙÀÞÿ¡·\x0007Æy3\x001b­i\x0014Â3®kÃa³òü¡»\x001cª~¿ëXü\x0004Z­¬	\x00144\x001dHm¹\(\x0005\x0014\x0004O_½\x001a<ØØwóVt+äq`K;\ÚðÅØ=j\x0019%÷±ý[±¢}?[É¸Ï|á
g¢6©¯¾þ¦¡ä¦-\x0010´ÜaÛÐ\x0015;¯¿$~6">S %GÂs\x001c,£\x0011¢G\x0016T§Á£\x0012X	\x0012\x0016\x0008B¼\x0019@9»Ó¨8«k\x0001@Bñ.=\x0002\x00176Á4h@G\x0000ÛP\T-0µ½\x0008@&îQw_¾
Ê%ùFHUA\x0001Ø²¨ N¢
ª>\x0003È°\x0003Ù\x0013¥Ô\x001dJË8w«<;v âÚÜLL@\x000c¾Ûû33/è¶ÛaÆ
wï<àµcF[\x0004\x0014tá±Ñw$cË\x0014Ï-þMª~T\x000fpã¹´,'`ëâÂ\hÅµH£P&$®Ø®'ÏýÜlÕ7z¨~0ô4S6­g\x0003j\x000c]£uìæffµ®äß\x001d\x000b4m<ð¾ÛpÅ\x0004f?8$P\x0007'ÈÜ2Vã¥Ògì_bþ=·¿\x0019è;9þ½ÇñdZ³ |-a(2	j\x0013f,ÑÔûÀzÀ¸RrõÛ;\x0017ñzq\x0005ËÇ\x000f.Â3dÓ7~%\x0011K\x001b¢¼óÈÒeP\x0000Í\x0015¶0)ø-\x0018ïyßPnìÇ\x001fÅ|\x000b-HË\x0000\x0019æôo\x0019ØDºåÐm£çµô\x001a\x000eQM¶8'¶\x0006ö~\x0016 ÓyïÔ6ê$S£Cà(å½\x0002\x0018>Æ\x000e\x0013fC* a0d\x0005\x001aA¦¶ÈsîùÜkwï\x0018]Q³¢¡\x0005¶\x0017Ü¦\x0005×ãÆ±O1¦O\x0004^Yàb¢h²¬ZSÓ¤ÚÀòÌõj·úâ~Ç#]SÔ\x0016\x0019».g¯\
PBÀ!r
c=f¼%kÛÞÝw§V\x0016ØÑ_¿ãs¬czÏ^»+\x000e2\x00117Z jíÐ\x0002x<å¾°ænï\x0018uñðewþÌYYwÒn2!fA®A\x0011®XæRâF\x001fÞ\x0018\x0014ñ3&ð±É¢±¦R«ùhBµýnÏ¾\x0019\x0013ÚZ jð±@ÝÅO\x0018#!C³\x0004¢´mhõÃÃ0c¿Ëí\x001ba»\x0019\x0006³F
\x001cí\x001f44c¯¯É\x001f ädd4\x0019(»
\x0006ÑFßh4BoÒ\x000eËV¬Õ(*éÄ\x0013Lõ\x0008\x0013j³×Æ Ldl/ÏJ·Õ,¨wÂV¸ñp\x0003ÿ0o²½þO\¥x\x0018¦Ï
\x000eö\x000f\x0015è«3ÕÐg`^a\x0006º6ã\x0015\x000f¼Õ\x00076m\x00036Ú&c­ÓC\x0002×e²\x0019<4ÂyË¬ê\x0007\x0007È¥½g	\x001eËv½	Úêàëu\x0004Pè\x001eÄÇ`Ïè-\ûèþL0S\x000f
Ë¶V§¯Í÷é)Kii¢6\x0000\x0001M(\x0014 Ï\x001a\x001dÝñhiÇ?r6qø²úíà\x001b|Êô	2þM\x001cï»òÔÛvºÝÿ¼eq5+ÚD\x001c)Õn\x0014	ü[nUðÂ\x0004\x001eµÊ³@ig"jø \x000c
x,\x0019¢ú¼0¿àÖ\x000c½yïaÐH¥Ë5ûþÐ=2ÎôpgÛ¥U.ôFB\x0014û\x000e-MÆ¶+\x0018O¤Ûh
\x0004>\x0015\x0014ÏèÞãçi\x001b=6N\x0011_¾ü\x000c\x0002\x001f¨óæ|e\x0018ò\/íÍ\x00195^\x00182¨Ø,.ÍFþ\x0002¡\x00165Úåº½.²(Îîêù³jî¸·ñÈ\x001dØ@±îüê)\x0005z&hNhC¦\x0005z<êü
¥²Å¹±ç¸#]rLsàRnþÔYwsëP\x0013¡nßñ\x0004Cäpo³Îfbn±V Å:Ì2Á£» \x00066M ÚÝß\x0013}\x0002°½m\´Ý¢ç}Nï¯LÅ6J¼0 \x0011@w¶b\x001a¥Ô\x001f\x0004P
l@Hì\x000e\x000e\x000e5°MN4y
£¢±\x0000\x0004#uG}Àf
"%#ò\x0006?\x00168\x001aÞË\x0001c&àq(÷Ê\x00107<\x000cÜ	ÜvOcÈØÔ8c_÷6yCÑMÝÏd&)kMàx8æ
YÌ:\x00026zZ±{'@ïÖfA\x001dµ\x0005>ËðÐddÕ¹j\x000côx¼8IÉ\x0007Ù¡§×È¼h8	ù=ûL!\x0014\x0016:p:à676_ß\x000fv­à¹·`çÓ\x000ehäÙ·`ÍfA+;ZcuÅ\x0019\x0008aÄS§Ý
¶¶·z³\x0015ðl-,Ìê:Á\x0001\x001fÛæM7bÎºÀwáQzQ\x0006éE®j$>\x0019Ý=¼?ÅgâjOàÇ6æNSÏµÜÝðM	¼rB«!üL¾ØøìÜµ/}ò\x001b\îv\x0012ÿ=Ç?üáØpëð\x001cÃ\x000fNRIäLBFìÞãi4\x0004²Û\x0015rE@Vzii¯\x0002RÞpªÅä»Ú<¿\x000cÊ¸réâ´¼´\x0018{°±ëNÍÌ¸x1[Ô\x0016ïÞ¿ç2~ü*Î¤À)+4»\x001dUöAÈ¶¸½_®
CY=Ì4j\x0010D	zÑÀèkõºà\x0007­yJ\x0014\x0014\x0019×¼¡\x0010h\x000f¹¦Ùû0Þ'cFT\x0008>"\x0013èYNÆü\x0004ê-ÂógÖÎ)¨7ìõö,XáK»heÆ^¯+hö\x001c\x0014;ïÏx£D,)d|¨Sêo\x0005Å\x00076½|)P\x001cº\x000b×pVÉÒ"MI68\x0014âaÊFÑè
ZÅQ0lïì¸'.B\x0012¾óÁ\x000f-Uå>ÄÝÖî{°±éÞ{yÁí\x001c´\x000céÞr\x0017Ï^pë+K
Â\_®9E;#QCxØV»£\x0019É\x0004IdWõ£#¡bùF[\x0006C\x0000îõü°R2\x001d~\x0017\x001e^zaû<V(S×\x0005ÉPÜêh\x001c.­¯\x0004XÒº\x001c¥F±Ra4ß¬7å\x001fÌærÖb^§HQJÞÀS73?\x0013t[\x001dL$x[µPÇÄ\x0015\x000fØÁL<èd\½\x0011Ñûú\x0016éW±ìïìuÛ\x0016WbÙb>`\x0006\x0015p]Ë\x0018\x000c,\x0004¡H÷¥/}EÈx{{; xÚ½¥éÆ\x0010µSoÛÏãWR13\x001b?k\x0008ç& Ø87?çVWWhu\x000e\x000fìú\x0019(ù\x0011T)73;C\x0017Æ6ñï©ïüVGFI°ív}6Ùh4M\x001d\x001bOÏ}Òtp{^É´à\x00131¯}gæ\x001e°QÜh\x0018&ö:­õZÜ½ô+ê\x0007\x001f|#wç\x0004ãÏñ\x001dÙ'Æý¥Ã©;3{\x000f	f©µyêÛ~Ñuò0<6AQGTÒË­ð§\x0018G\x0013t¡7D701C#Û§î\x001dÏ=3©Ob±Gæ1é\x0002uÆUã\x0013\x000b¢ÛÛòÈúq=Bá\x0000ª\x000e~\x0001É¤h\x0006¦\x0001O£!¦l\x000e \x001f§3T¦\x0010×úú;²îÈa`ÊØ$\x000c[8ÿÙê¬Ô\x0012¨<ðdS'=ìõÈB¼'f?½¶\x0002}»Õt+k+:\x0007F³¿qï®\x0015ì<jº~ñ²	(/Ø àÕ[Ý\x0016	:j2x`ééBf<©tíÈéöê\x0007nåÔº;ý¦u,ÍØKÆTqÇ³óh\x0018¤dWYÈwm±êú¶xSù\x000cÁÅml\x001dWtÁÄÝ¾sßÂÝ{¸é¶v\x001e¹¹rÍ½ãùgÄc\x000eì=â&,@uû=5b0\x000b.20\x0006áéÜ\x000f-
k2rO7§ º\x00160ZVÍ/©ØI\x0001\x0007aaqÑ\x001d\x001fÕú\x0008Ö ­Z%Ò5'$Ç\x001aN´ÈQ
©£ââòýå\x0014röð¯Àµ\x000eD7\x0005)J2¬.¡¢ÝTmÏµ¹ZÐ<:\x000eyÆð 3¯`&\x001dÜÓÙùÙØé\x000bgT\¼{û»ûàa@6CÚOÖÓ<n1hL&XY^rK++Á¼Õ1Î?\x0017,,Ì\x0005¶\x0019\x0005ó\x0016h±Ä¤ê\x0007¡Ô.MÆ²gôÑææ¡é-9ãáÍ±²²¤éÓö,\x0006·îÜ\x000bðnn8sö£	\x0006ßÇ3ó\x001eO\x0019G	\x0015R8Ð7M%³öÌzé[I÷wkwÇû©\x0018½þ\x001c'>ÓË©\x00031Ãh¯Òp:¿¾¿ûOÜy½í¾A`üï9¾÷êõÓÇãá_èÆã\x0005%ùz\x0002]$ü\x0014Á\x0016\x0019U\x0018!hª[(BÄèo\x0013\x00119HtPóåì{îíï\x000co<Ú\x001dÙ¢EÆ#®×\x001eêÛ\x0016ÜF\x0001\x0010\x0018ýÏÆÔèQ«ÎF7\x0004\x00141Ø\x001a@I\x0004\x0012\x001aM@n\x0016ï,säØ\x0000\x0018>òÚg¾\x000enG»Êù­ÌÍé¡Ç#¡hTB*îÇ­Kðßëj\x0003¡âß2¤\x001c¦\x0010SðãóÐ!ud4Åîî®\x0005Ïºh\x00006ËçÎËIM\x0003&ñ8pN\ßÓë®I0[· 3drÉÔk®³V¸Ég\x000b¢\x0001F¡}¤»ôÔÛÜWol;Û§W.¹}Òôm\x0019O	`jn×û\x0015Î¬ÎÓÂ\x001c\x000e,ÐÍÏUÜw·ÝkoÞb`{{ßÝypß=¹^q7n?p-\x000b¨ßöîwièç\x0018u\x0000>\x00144VÐ\x0018\x0010·O\x000e\x0013p\x000fG!&:!Ó)ØA9q»¶\x0011
#«I\x0019÷ C¶àÊ\x0006Î\x0014[S¦kU\x00077Ê5Ö6\x001eÓÿáTf*\x0001²F;pÿ@.\x0013\x0016\x0003ß
<\x00106!|¬uÜ´@W\x000cÔF>hP©mfêª³\x0007\x0000Î:d^\x001d>\x001fCÿ~\x00011·º\x0005çíÝ `AÔxÚ cAyóá#hàÎÝ»Ñâø=/"s\x000c××V\x0002Û<4Oc¦SyX\x0010¼#£¡\x0000¹dÜ+Üú5·8·\x0010\x0012 É2lSRó\x0012Ü5M1øN°ÉÓØ-«\x0013\x0008Ý3ñ¸~¬iÖs¹\x0017VGP÷!\x001b²\x001c(\x001e§Ñ
úá[J¤@\x0011Ta\x0019ÑÔnî\x0003]ãh\x0000Å[Ö\x0015k§§lû¼ÿyþÊk?qãÆ7äü¼`üï8Ø§_¼øäwíö\x0007?\x0014/\x0016âèfE5¥9ºÌ49×wØÁo%<¿å\x001b2&
8\x001d®àº\x000cÊ£×\x001e¦óWÝß=gÁÒ=è\x0002:ÏZ{»nbHvO\x0006HcÊäBMYðÅ;oL\x001f\x0002\x0019HMÁ"¤ý¸hE9V\x000bã¼ÕcÌ\x001eàfºÕ\x000c\x001dvíÁAz\x001f\x0014\x0018è|ÃHG#\x0008\x0013@dõ
}Ñªö4Ñê[FGÔíu·\x000c½\x001fÚcÎ\x001cH\x001b$Å{b´C'\x001e\x0005°¬\x001b\x0019xY¬®nÜi³ÑV:-\x000bÍFGa³ÕRþµ³®\x0017ÏkRHË>çÑ1ÁeàYYp(j³Ùm\x0002GV8\u3Õ¢6X*\x001eüÂ'>«HÀíÖm7\x001d´lÓØwûFW<iÔÇmB\x0014#\x0019=¥VrÆ$Ùy4\x001bÍpßRqxV\x0002qßOÏ\x0010
DñðøøHÁ\x0016\x0004çúÀ»Û½B#\x001a{T³\x0000L±É\x0010"¨7ÀûÂ*àyñ&J¯VLÕ`Oî\x000fAi2ô÷I Ñn0Á\x0000´âsÌìPµ¬Ü$O¤\x0005]\x001e
Îe
\x0005dhaÓ\x0010'\x0003]\x0017¥åÅ©\x0019{»{\x0004Çàµ×ßP\x001b>K©Pvë¶Y2/Ñ\x0001ïS¶ÏÁ¤iÛ\x0018Û's"¼"8ÇJµ\x0004k"úà\x001cª\x0013F\x001c-ÁQ>(vý¸°¸`¾
¬¼á£Í-
Áââ|°´¸`ÔÆ^À`\x0001Z¿¥Þa\x0014T£É$kM\x0000IhìVWEr²\x0006¿¡]#\x0019Û\x000f0*ëÞíîï:äv<#d¬d*N|ÆVMv\x001cKTÒÔ/~üá+u÷
x\x0004ãÇ\x0011¼ðÃabô_´\x0012Ég\x0006 \x001a
ôU+²ë êdC
%z oÇ\x0003#2,æi
é:¸\x0011T\x0003ÿ\x000e+É³W®/½q;Û\x0003]Bÿ\x001bQ\x001f;\x000fî\x001aEá\x0018#HËÙå[¥yé75\x0017\x000cy-Çè\x0017	ÚP\x001dSißÆ
¯iTødC¬ðs\x0004E|¤tÒ=3\x0017ÏÓ`}¡w\x0003C³ÌY Y]÷íÔlàþ¶÷öÄcÖ
ñì\x001f\x001d\x0008Y_¾pQJ£¦ñÍöïrÕKù¦\x0013ùJtÑ\x0013\x001b?\x000c\x001d\x0003?Ê$"Ó¤>¦5Z4ÌA£¡æúÛßá&\x0018#bF}\x001cZ\x0010K\x0019¥#q,T
ÁTâ×^Ó]¿²îJöYïÝßtK«\x000bVäk\x0005¯¾~Ï
\x000fÕ4r°³å.¯Î\x000f·ö\x000bgN»+ç/
É¢\x000b&æd¨>\x0006Ædô\x001e`ÎO\x0013\x0007æ4 Ò¹9mz\x0005M\x0019©X*ßÐ5'\x0018qïAÖ ]\x0015ñRq\x0010<\x001a\x0008Iå	ÜÜw+\x000e±·Äd\x0018iyzêÊK\x0006Ô\x0012\x0015Èµ7\x0014\x001bëZöQ\x000fr2!TtÇitÆ\x0003râéË\x0017r\x0001ç
¦mfÁîö®6êåÅØÊ©%ÞÆ\x001d\x001e\x001c\x0005õ#CÂ÷8"HâEaç²ÄZ¦\x0010´
	pç³âm\x0008(à5)DC\x0005ù®ÃQ(W8%	\x001f<	]ìC%¥ËªpùóÍ¤²!AöâÅóÒ¼\x0017
9÷èÑFðèÑ&S_åµU·¼¸huñ0¸ùæm\x000bôU\x0019ôs½ØÉ²hV	#\x0003*tÄòd±
Ú\x0004
R6-ß\x0010Ö"àÆ\x0012\x0015ní¾UíÙâocÐ\x001a)òíï{ÏS¯¼ø
Oñ¿ãø¾§Þvq«×ùKD¢J*\x0007r¤²\x0016¢\x0016ÁNSq`Sê\x0014W\x0001/ªfëáT`z_V\x0012\x000b\x0000ÈÏ_8!¬-¯\x0004ÿÊ+ö ú~þ\x0001\x001e·\x0018§ìo»
\x000bLhÜ[\x001emÑýÆ¨¤8c{&Sþ\x000e\øÖë>öIúÂ\x0002¡L`üàLíiA\x0006µà\x0013,#pÆõØëæ­°a6^Ñ#jÍx\x0003µ\x001a%EæÆæ¦¥ÿ\x000f\½Õ\x0014w÷ÀþÍÏ=÷ôÓnÉ¸QÒDÄø3Æb\x001aa\x001c\x0005ÝÅÅY+\x001d)ÍäóÃë
'SUÂ±\x0019]_]ÖyÔ­HC;÷i£9ñ¡Ð®m\x001eq{½¼+ÏÍz?\x0005
{öBeÛ0¶·¶õZO_?#?ß\!ëæ«Áë7n»×ï?Òuxt÷¦mTS·³w\x0018¼ë¹çÜyC ¼Ý\x0018\x0013\x0004Ñ\x0006TË·óÜ¶àM«\x001fÕ\x001d BéËÐÜiÃ75E¦èþSlZ³×dãc£zÜ\x001d§®=\x000bn\x000fÊ\x0019J\x001dõûáT\x00127Ñ\x0008\x0002ÝÿYû\*Dao¯ÎÖÔè±-Ìë±Ø¤XGÊNà'\x0006Ê\x0005\x0005g\x0002n¹ZòÁÙ \x0002J\x000f\x000bº®:;ã­X}æÝÛwÝÛ÷ýºQ\x0012÷î[AmÙx×î\x000càÕNÀ\x00124P#mÐjÜ0D\x0000Âþ>:¨h¨\x000bù,=¥mRí{³s/Z\x0006`:Ë¡o¨@Ì\x0006Ú¨{i¡Xd\x001au2¦ftÉ±mÜÝ¿ùæ-qÐçÎ£Ñ$¼ÿà¾](17×t<2L»¶\x000bój<Bvéó©
Ñ2ÃÇ«\x0002+øy»flª\x0006ÛU\x00170j/Ì\x0017ª\x000bÝø§¾ãO|èèÅo°bÞI0þàÝ\x0017®Ïþxò\x001bI\x001câid¤ü*\x0015ù!xdàÇ«\x0003O\x0013!2¤-¡¸§.¦B¬)ÉÚ|Èµ«×\7
6¶\x000fäåÛFßEãÐ¥lBgôhì°¹\x0001JÊyé\x001aEZ¥\x001c2ÆÇ^Oæß"1ï¶\x001a	QèLC
\®jhuiaAVuã
	fè¡é<#Øìç÷Û{øhÃ\x001d\x001bêØ°$îÁÆºé\x0008@ûö7\x0006Bö:$¡¬ Ó\x000eÜÅÂÎ\x0013d\\x000b¯\x000b,@\x0003üi_M¥5!xÛRÊ\x001fÿãöö1i\x001bçùÌ;ÞiEÃ©\x0010\x0016\x0005¬!Õ\x0018lÌ&Ã¯µØëFsÐàQÉgÂG\x001b\x0007¦J\x0001#^½yÏ\x001dÚfqt°ãº¶Øk¹»`|Å6!Òç¥ýd\x0005\x0014x6¬ÀT2j¤`\x000bT\x0018\x0002­8Ü6(Ù@>ïç
BMP\x0008Å»ëêq§\x001cAyÑ3\x00069Ð2 k\x0010ªdÒkjáGe
\x001f³²Ë¯\x0005£Èbks;LÚ÷è,\x000bs\x001f(\x0011ºâA*ðY\x0011L\x0005E1'm(\x0004âÐ{°bHóÐ6­m·¹µãö\x000eö¥ù>²@½lh\x0018+OÐ&YÅÚ§°Çì©!gÀø¦l*¨\x001fÖµ\x0019-hÒ4(¿Ó\x001fGÉ6\x0000\x0014\x0019z¦¾ßíËã{Å³V®\x0003(0êôSÀ´ß¿¦ðI \*ë««Rõ@<²{qhY]Û`}ms¤}g0HÛs_,Z¡÷¶jQ³SÜ)`M¶¬Èº²°0\x0005}\x001bm\x00160\x0018A^Èé¬,^å»´t0MÆÓ»ç_øÒÏlßú\x000cr\x0012ã¯ÿè¦[ÍÁjÇÓïØÃ8P@¼HÆ@\x0015<\x001c&*lñpóoíÊN|xFY\x0007J$\x0015£ª+[ÆD´(¯\½âúñT°o\x001cj)\x00150ì4
\x00027T\x0000£K\x000bÃ\x001a¥g	iSÅu6;-7_­Q\¡ ¦6RÚC/µSw§d\x0010x\x000f\x000c;ßÅ¹yKÅóBz,H\x001c½¡oon[àgâ4Å±]Kcw0Ð©7-èÕÅÖj3nffFÈ¹xq)8¦ú}ÍkÃ¯\x0017Y\x0005R\x00166\x0004\x001d
9¨J&Sy\x0005Y<\x0015ðbX]Y±ï\x001fëç×××]ª2k\x001bOÏ-ÍW4Ç@¡!s£
¬ØM8W°<\x000eÕ ðîç®¸û\x001bÛ<rçÎ¯¸oÜuøåì·pUÛtYÛ .»à®]º$764r4·à»>ÖiüGé¤ß­N[Áàì¯ÄtÍñe@Ëýå<áJ\x001fû\x0002spÝÒ\x0004OußÉe1N\x001bÿa~v`£\x0014|e\x0014U*R`\x000béÂ³ & 	JÐ£3MÃ=·aâNqx¨sÁt<\x0012-A`æû\x000f\x001e<\x0012
½xå\x0012(Ú=z¸¡îµ]Û4Aý UZ®/\x0018´¼´¤,ºq?àÀËÞÕ¡1ÖóUÌi>Þhä]áÚV(ªÄ>'sò¼½è4,\x0018:W»¶Ñ1tòA%\x0014­@\x0008åÒi6­è9\x000861x\x0015§9ê\x001c¼\x001eÎoS
ÝöTFmñáÒÒ\x0005àSûF7=àù\x0003)[\x00110)&d\x0002¹eN\x0014\x0018ñ ¨f\x00198{x\x0010\x0015Ñt!ÒA.
m²\x0007!N£ÑLÒ¨¼x1ñÅ\x001bGî\x001bè8	Æ¿ÁñùËíiðm\x0004n\x0005Ý.²Ç4\x0000\x000fþ
ú}|À×¢® ÈÀW±5¶"_"¥Ý\x00195®©\x0018ö`>ÿ®çÝ£F/ØÜÞs5&Øï\x001fî<r\x00055¶\x001a¸M&ä\x0015á;b
¸¤°ÃGà¢bLpÑdiY^Fé´fë'o}:µ¸¤/ÐëÄ]Ç^·i\x0001\x0006yßÐ
´\x0003
\x0011\x0004UÒB4ÂçÖO¹¼qnå|ÉïPt\x0010Ù\x001f>6]g#@Ù\x0001
BúFj\x00179Ò1Ã®j¿¿±½c×"c\x000bmÇoXx:dò\x0018¥ð¢xö½ï2Êd"ÅÄÞîo5·\x0005E6÷Nhbîp¿î.Y6Ôã\x0003ÒÌlÙ8æûç?ñSîö£\x0007öý\x001d×0d|õòewnmÍOx¶ÖÈ~¶bAp¤É+	M.\x0019¨âÄµ\x000c</>
º@x`iîîÎ¶
vðÁ\x001dV
\x0015Ø\x0019èß0ZdÇ½ÆKnß+\x001f\x0006}5\x0014K\x0005\x001a:¦t\x001cjrEÑ\x000c|³\x00053ÎA\x0013:\x000cé¢ÚP[p Vi)6úÌ=uÅJAygk×m<ÚvËF; \x0007?2$Ë5&@a?	Jsç-+8ujER°|.bÃ¨ºî³¬7íY(\x001a=0ng J\x00160Ô:\x0005\x001clÃ 'ó$fñYeZµÕ-âQ V£=Ø\x0000x:\x0011C\x0013ß5Ä
½ÂFDØnwD×$í¹åó°f²éLN&Bh#£j\x0015Âm34@´¶¾ææfæÂV«\x0011<x´å¢uå\x0001ONzñãFK·f\x001b_ÁS\x0001Ô¢
HQÇCù!¦ãä4¼ù{¯üW^¼ÿâ7LôI0þ
\x000f{òÖt ¤
4¡1Ùç|íA"ðcQG\x001b\x0005D\x000bÇ7&$\x000fÅ+¾??æyf\x0002íóÏ¿ÃÝÙ·ê¸m\x0001\x000cÚ¡\x000bÛ
7C[´\x0005¾ÑÔ\x0017ðø=\x0011á\x000fÀ\x001cÄÂr>\x001f\x001a§lèc\x0018£²\x000còÕ¤éÉHçJÀ,\x001b
\x001e³T\x001cg²v$oÛ3´û`gÇ\x001dZ\x001a¿e)-)\x001d\x001c2r¡Ó+Ëî©+WÔL¡*~ÌÏeS'\x0014,æ}±LZ Eµ¡\x000e=Ð\x0016èÝâTUÓãÒ
ÓàqÔ<Þ\x0013z'¼/ \x00183ÐkÍ\x001aW\x0018\x000b\x0013îÒõk®¶´¢÷ÈYq¯¨*yR-À\x0014  ø£¶¡ô±ã3øÃëù\&8¶ ø¯?ò1··³á\x001aG{Æ%_wÏ]R6bè\x0007Ý®÷¹¤\x0011Gi1\x000b\x001ec\x000bNCv+5-²3d\x0015¤v\x0018ëOd
P&>x9É©Ð\x001aWÊ~bö)\x000b\x0014ÐF^ö\x0016\x0008¡\x0011h_F!B\x0010ÓJ¦[±-ð\x0013\x0007\x0008®l¡\x0001+ÏÕ±e!­\x0006zð 
jÞ\x000fDÞ°Ì\x0000þ\x0014¥	üz¿;\x0010­rúìi\x0015\x0016)4îY\x0010ÞØx¤-AíÔòmR³Ò³[] ä}à­\x001a\x000côcjð9><bÐ\x0006!¤àå:jäàþ@e$½ÌÏÀÂHÝ]Q9Muó¡|HÉDhD[¶ª¢
Ú:p
äY)%ÐM£{ö~\x001a#ó¡|1·\x00152sF_\x0014CL«XS\x0007G\x0001Sð¾CIÞRÎP´,N\x000fí3ã!\x000emQ±õB\x000c×\x0011«Oºÿ*¶q\x0016-\x001bêt»|^M\x001fAÝÃ\x0006P+WP§Æõ_üÄö7îø$\x0018ÿ:\x0007ª¢]xâû[Aâ\x0007ÆVÅR3Ýhô&%âJ\x001be<®n1/]®ð©­w§òS %ÆW³Ããix_ÛÛ}6üüëw\x0003F\x0007-ÍÍØbzàÊÎKä(\x0018\x0012ì	HÒ£\x0013÷¸8xÉPN8vpe.3ò\x0006ëP
B5èGíÏòÌ¥öc\x000bÆC×0´¾m(¨Åôb;\x001f
z«K*p¤â¾Ñ\x0002\x001bºa\x0017¹laàMÚ¤ßi®^"­H\x0004PCW.e·ºmYc¦Uù¦³¯¦b\x0018È\x0016Ç5®\x001bhO«_Å¬[¾pÁm\x001e¶4®ÎÙ
;\x0004§V£k|aÅ¹q_J»Æ~Ïûu)¬?ÇBnÈïäxöå×ÞÔ}!\x0008_»tk\x0011"=\x0014bq×ëÇ\x0015
ããFh×\x0000`\x001cíX÷UýÃv:L³&z­ëÐ+_R)Ýuw©£ î@É$ÕY\x0008?\x0006u²\x0013mKò\x0006\x0012M¦q2S'\x0014kèA·xPx±±DÍgäÿn=\x000c'\x000c=Mªy	\x001d|\x000f~ø\x0015ä@õg.s\x0016¨\x001e=xè¶và7Eÿ,//ÃÇº\x0005ãôÉø\x001cjæ°`Ü>nÈ0\x001e\x000eO6I\x0013hx	xü7\x0000¼~ÄO5ü3)®Æ\x000e¨\x0016(¢}ÆímÛ\x0017'd\x0016!^È\#57É\x001c?.Ç9{>Âù\x0019m\jâZAkÑC÷h./\x0003¥±\x0005u¦aCSTís\x0014­èGå¾\x0015
\x001b\x0006\x001eÆQ9ôÖ}@»lY\x001f\x001b$(Ý~7H°	ØÑÉh½\x0000\x0000\x001c\x0012ËVÖ\x0005>Í­A¯V\x0008bûüÞ\x001f¹ócî\x001b£w\x0012cæ{~4]¶ÿ\x0007ÓéÓ¡í¾,tvp	v"
jRJ¸P\x0001@A)\x0010mÆì¼,d/ZV\x0019¬¾¨Gcò«×/½~ÛM- ,ÎX\x0001ë`ÏÅ\x001bú`G{à}\x000f|Ó@LÝp,Hl3Ï,-\x0007\x0016P\x0003F=\x0019Ð¹à\x0015Q4\x0014\x0007æPýW­\x0017RzíÁ}W·sÞ3D\x0001¿nÁoÍ
(y|)ÔÆí='ÿÅ 5\x0019p]#\x0005Æm- \x0018q:æâ¤ë°\x0006,x¸ëxJSl2ÇÃ\·$\x0001\x000b'ÚåØÈpçB\x0001n9a?_\x0005í$\x0002è\x000cÄ\x000f'¾\x000bëÀóÜq¯	
1IwßRÔÓkónmyÖ\x0002ðXS´­Ò\x001fä\x000bðÁÃÁ¾òQ+«îòÚz(Ê\x0004-¬m²©´ LSü\x001d,sæsr/Is1\x001f\x001aMÆ\x0011M3W.A³¨ß"QJ\x001d\x0004~\x0016\x0008\x0014.Ö¥ bî;\3\x001eÁ\x0014¾R¾¦\x0010²	ó|ø)\x001f\x0001üÔ
oÍ$=½d\x0017)]:§ñIÿÖ Þþ
õÃ%6HtÅtË]ºzÕÒöU·¿³'ý£}£tv\x0004\x0000àÇg¬.\x0000zÇ×\x0019Z\x0001
9Ù\§Ý\x0014('ÐÏ/ÎK;
R&¨\x001aZÔÀT\x0002$(4\x001dqÜü×2
&Dg\x001cªA.ðmãp±\x0011\x0018\x0004yC¾FYl\x001aÃá$¤¡\x0005Ïñá¶Û\x0006´{\x0013ÈÇÆC\x001f[q{P©únÕ÷ 9ÖÐ×6?(\x0010\x000b°Ù\x0019½®e\x0006Á¦\x0005_Ú²ñ5¡ÉimmEÀãÑÆ¦\x000cúÙN­,\x0014¡\x000cÀð¹U«u\x000c-ëdy"î%ñD*keÎöéþ'¿QF4\x0004ã_çxïÕs³0ø\x000b ï"ºÉÉ\x0011ÿÊ% A?\x000e4-^Õîê:\x0004¬&ÙÊÜOã@P
\x001aÌi°ó¯¿òÅ¯\x0006³VTa^Ûðp_È\x0017½'\x0012,R0\x0002;Aÿ¦s\x000f¯\x00078ZK?ógÎ¸7\x001f>\x0010O[ñUoKW\x000f# oÏ¶sy´¿ë\x001e\x001d\x001c¨ÈxýÜY\x0015ò@Ý^:²âÚxì\x000bÍVSÿMqù%\x000c\x0005£0Õéw\x0015PÊ\x0002\x0015<A%pËF5é¶B}\x0011ÎáQÓ{rðéã~Á¥Eé¤\x0015°z¤XÛÖÒ¥ëFe ç2\x000eëgÅ¦À\x0016 g9ãD\x000fÕ¸ñ]\x001fxëÙ¦C\x001a{[{Õs+±ÿåÇÿ±\x001bÚï<wùj³â\x000e\x001a,CdS¹ä\x0019\x0002&°\x001a\x0013³ÅL[.sµ\x0003øXK¡½\x0017\x000b\x0015H§Ñ©þææfUÜ[^ZVM +jjè-HqÄÕµö7¬\x0016

î¶ÙJZ\x0006M,Ï0b7ÞlkA6\x0015µÐûéÒ^+c\x001b½~H:Ï\x0006Ây¼úê+(>ÿwvm\x001dÜxß=°?l\x000bËKnvnQÀ\x0001\x0001ã»\x0006Ácà3Ví \x00169--/\x0007ÆW\x001bÿÚ
,ó üø±öAvâ½Uèe«\x001bÐt
\x0004	$\x0008¯·ðÇUØ{!Â\x000bgóy²ª|9¬\x0000ÍL>AÀ5³ © Ïë±av9n\x001bÑ\x001eöÙ²º\x0016IîÏØ¯9£¨B>\x0003
 æ\x0011\x0012ÔÎÂ\x001aN­\x0016bùÚêC&·e\x001b\x0014Á\x0016 Â&Ñnu%d
!¹ä5ðã\x0006ñÃåw'ãÂL|ús¿²s{ß}\x0003\x001c'Áø×9¾ûÚÛ/Õã?7µ
ZdJOoÆ>Ø:ï\x001c\x0005_\x000c\x001a¦X2UÓÂ@)ªÒ³oþÀ\x0000í±W]\x000c½óÕ¶¼zÝej3Áýí}7k©þÀbÛNp«p°\x001dP\x0005H!¼èµ@Ë/M#>zÍPåæÞ¾ÞQysyÏ5ö:.JC¾q÷®
xï|ú\x0019¯°÷oÒõdÁ\x0002ô<À*ó¸®:ºò0f'}ÖH\x001d?áX\x0002]1#f\x000ci\x0010`³ÉW\x0017¤\x0012¢74ÏÎ(\x0005=ìò.\x001eIâT¬Z+[º;\x0010u¢Ùev
Ñá:{Þ¥òeÉàpÃá
C\x0018\x0014\x0019Ð\x00104x#åzíÍ;îÛßý´[Y2ÊÃxc\x0002ÍÎæ¶+ÌTbo¾qÓ½ø¿ìÞÿí/\x0018Ç\x001dLv?lñO	\x0004H\x0002fbôÄ¨~OZ^&\x001c\x001aºªÐF¤á1IÁ®Í\x0008(Òv² 6GW¨Qffgtïg\x0016æ]Ûø\¸×P#ÆjÆP;´¡N(&2\x0006\x0014\x000ct®\x0005^~\x0011«U6À£Á±LTt¥@kH¶\«ÄðÃØÚÚÜ÷êg\¿Ó	Þxã
wïá=e)\x0014\x0014±$k\x001aEY4DçÍë±ò^1QPÞ]ÐÎY­p»h)@â\|®7¢Ð&Þ*Ðõ\x0007 ·Ç¢¯lÈ·PÊã-\x0011b~/é!ò8ì\x0001º\x0012AvÇÃO· çEà&¢G¦SC\x001a|"\x0016¨¡cö\x0011ûù¦ÑHöþ1ßp\x0012«qña)_\x000c­Ð\x001b¬,.ú \x000bÂ%~%§ÖN9îû¡ñÌVø2d¡\x0006o­ÏPÁ­\x0002µQR&øñ\5}éÿöÞ'iþ\x001d§*Nñ¯s|ÛÙ'ß¿?\x0018üi6\x0013CâÄM\x0007Áù \x0014óÅ¸XL\x000f;]kAd\x000cãçs%ýÔåW-ÈÚÐRÁDÔéÆïÑ-uáÊU·o\x000fî\x0003«\x0013@'­ºLoè0bzÂcm&|0ÜtÊ\x0012¿ôï£\x0003\x0005á¥gs\x0016\x001cA`h	$+|C£±ßPuÓ\x0016öS¯Ø&`çc\x000fdß\x0016å!*#÷~Ã\x001dk"4\x000ef´\x0005[Á¶\x00114\x0007\x0005\x001bA6å§?°1e4]")^s\x001f\x001d2¾ïgàÁG3ÕcÁÎCþ\x001dCø_Ln¼³\x001c4Çâü¬Û»ôìóFX@KP\x0018L\x00025íwJ¯cQ¡gßAµsïyÇnãÁ®\x0005\x000b[´Ù{ãµáú¥³ÁGácîôâjXbcÅ¦èf\x0001w ñáx\x0010c~\x001dvF-H\x0012ÆAzÌ=åZö\x0002á\x0016¢\x0013Ø\x0008f³Æã÷lS\x000b5§-ëåð©é#.¾;\x0016µ6sou	j\x0004XÌy²¹´ÐnÆÛi\x0006V¼
ÚÖTQÔ~àG`ªÎÎ
à²qûöF;Ì¹.;\Ö¾üòWÝÎÞ®Î\x0013·l\x001b¦+GíÖ<\x001b¾ÝÚ{MÀçÏ.ÌFlFï\x0001_Ë=AS\x000cj­\x001a=Fàµ\x000c Àsa¥\x0013Î²\x0017\x0010ó¹e\x0007j\x0004¯±»±\x0013ªi\x0008?\x0011£\x0004¸öõ°`ÁâîÁ>\x0001<\x0016ÒÔ!#}Ûì¸þö>òg\x000eå«\x0012j¬\x0016¾\x001aÐFtóLXð4)Ô¦Û4Ô*cÞ6¿\:=MÂ)Ûu)ä\x000b
È\x0000mãÍëö]8VÊ\x0011&R£Û\x0007pp\x001dÈ\x00184\x000eÌl?Ê(a\x0014Ì8¾ÕûèÇ÷Þì»ßáã$\x0018ÿ#t\x001f}üÜÞ\x001fÜ\x001b¾½5Âim¤Eý8È'Þ\Þw\Å­ò÷<(EÈ\x001b×K·\d?\x0019÷j¤ýíá­Ö\x0016\x001câü\x0007»»îÍwÜb­êFÇû
`t²í×\x000fñ,öñ=NzËÉ\x0014é\x001b#eH7ç\x0016Ü±!&\x001a(\x000eìçé°]_Ô{=Øz$Tsj~Þm\x0018Ï¶¾²ê\x0016
M K£ÁO\x0006Yh.±O\x0003o.ðóðhtP\x0007TÉ[Z¢\x0008`\x0014\x0014@eP\x001ep èwáO\x0007ÑÈ©>{`tCJÈ¢Ü´lQÉÜ\x001cN<H©­úÔ©SnæÔºf"çÊy×¶Å35èNp6p¤ ¼ýÀý¾ï~/TNJµ»së\x0001SBõ3+®{Ô
g1·¨3\x001aöu^T\x000e\x000e\x000f(Ö\x0005£ÉT\x0003DI¿\x0019\x0004"EÝrøS+îw´áá2\x0006jBAÁ\x0008%6ÆùÅ\x0005µ\x0003Ã	k"dR\x0013QJ8©\x0005Qàç÷Q\x0017HwÛîHBW©íZgB< ðçN_\x0002\x0014ÈÑÑ±\x0000s¹Z\x0013·\x000fmb[ðèÑ#·lE*\x0002ÿ\x0015ç6·6¼k:ÿp<î3\x00122
\x001aQ@ èÐO­røA\x0010|
\x0000ÐÆ`\x001b5\x001bEa«ø;\x0018\x0004
Òiõ¤½\x0016_\x001dø9vý	â8×ñ
1JÊÏùê³xç¡ä¢T\x0016\x0018\x0008] \x0002Â" Ýjh`*R5h)f$ÊEUJámãÐä\x0013T2t\x0019ÊÓf*$hv^ýÞ0\x0008\x0018ºj\?\x0019öyÂÀÏnrêäËå¦§×Öàú\x0011ê\x0018ÛØ\x000f¥¡©Í*»sò\x0008Gk]ÑsÊfµh%`Út·k¼ò¸Vrñ}z÷Í-÷;|\x0004ã_s,ÿé\x001fJ\x001c\x001cÞþv"ye\x001cÄS]\x0007\x0011\x0012e
OÁÁMUÁeqÀ\x0007#
\x001aEVÒi|{¬Ü,8a\x001eã¥n\x001eeËB$mãÙöö]9n|[0\x0011-ÁÏÓr<k\x0001ß{kjHL2+\x001eH!1ö²\x0005äýûþö\x0015'\x001azO\x000207x°7¬°Ó2\x0014tÕ
;\x001d[´ ¦iL¥§-\x001aJ>²`UGYÌÍÙ9á\x0019L»*\x000elðØ\x0004÷*¼#ÅJFÞØëÑÍÇ¸\x001b\x0019\x0002Ù÷\x000f­\x0004®R,«j
SLÐiÁm#3^FÝdö;Gõ¦\x00103ÿ©w¿Ë8ë>\x000b©r2s;»uï]\x0001H¶WzõÕÝåKgÜéóëîõ\x001bo\x001ag[uÓ\x0001)ü»uçn¸¶º\x001c4w\x000f4`4¹R©RZ
¸v\\±\x0018ëF\x0000Rmè\x0008Ô\x0004bF\x0003\x001fÛm\x001fP¹f¶è½¡;*xÂ·¨Ûý\x001dDÓ´EÏØ÷ \x001e@°e\x000b¶*LZ`ã\x001eeó9\x0019è0\x0004\x0014)ËPiº\x0015×ÁN-æ\x0007¿Æ§þ:­f`Yô¾Á®m ÉÈ[ä¶\x0015í\x001em<DJ¦÷ÀHèñ O¼,&*\x001eDg¡*8³~l)d\x0013CÈ¹\x001a\x0014ä,xeí@¢]æò\x0019À\x0018¨ñØ}ßô"Ê\x000b1\x000fsR\x001ajÌõ©\x000bpÞÑL>ý,&OF\x001dèüýahFIu%Å;~\x000bcçà9¢À\x0019
£×îO\x0019ÁÅ¨²+£`fçkºopðÖÌÉ\x0000iäé#Cî-djni6\x001aa.OC\x0015$
ý/ÌÏ\x00074ü¡nÚß?\x0010ÇÎ5^__3¾ë¶v·
,Y\x0006µè\x001eíìºå
YOç/oü¹ÿì_ü~gG3\x0004ã_s|ÿÙåâápüç»ÉÄòØ\x0016âHH×Û\x001eÒ	ê
¢y^^ª\x0016*\x0000\x000f4¬s${J?ñc¤YvÎyyX,j@*TláÌº)\x001cG-W\x000e¢\x00134Î\x0007.:xâñ[ï\x0017«\x0011Cb5g\x0005@&wp~´?cìþÈRµm&1\x0018rm\x0018²ØØßwëK«ÒÕ27NÒ)JW »áP×f¡µÚMCäu"\x0000a)ðºéåÅyqÕy\x000btóÑ´@ê¡¤ü\x000e^Ì\x0016ü\x0008RÙ¼dm¡|ÓB!\x000cËdßhNÓ]{ò	[5}y£Yàp»Ã±ø[Ñ&S\x0016³\x0005æ»f\x0014\x000bóæË¯»õ³knkóÀ}ôt®_	\x000cnÓQ\x00057\x0015@cºf,Ö\x0018Æ9a4eE¾»\x0011-\x0001:fÃ H2ñ^ #ûÖíB¡è\x000b{	?Hý1'ë\x000b³.\x001a}?Õ'(\x00062\x00008q\å!í\x00014\x0005:Òû0Ñká\x0019\x001cWã\x0004Im³{ýÆë®h\x0001\x000cSy
w»Ô\x0011r9\x0005ÂxÌÿ\x000c	Ï\x001c\x0001\x0013Tº0¿äVW\x001c©»:\x0006K9{ÏD ywc\x0014$Î~3Qñ·P\x0005 Q4ÌU£cââ¬ã¢ÔÀ!\x0016Ü1\x0012Fd~Ã¡\x0006wZm\x0019L\x0005ÉêSkGA2#ªCúìñÄ×M\x0018Z«©\x0002g\x0010S¨Ç\x0013÷76'²K«³\x0018ú\x0007\x0014;Í®¦°\x001d\x001f\x001eÛæ\x0013íáý\x00045ÌÀw!\x0019/,¤Ä\x0004î©¥>èíÞ\x0006zÝ=e:La#>wú4jP÷Æ·\x000c¸ìxômoÕÀL!õ-Sk?òÑGotÜïàq\x0012Íñ½\ÙíõÿOqQAçH¸à¯\x0002lä\x001fLÐOÓ×åa<\x0014ê¥p*@+@³h\x0017Vw+¹jµèÚ\x0016\x000cv\x001fm¸iûÈ\x0010é@\x0005IXì
#·03+þÒ¯UÌQ\x001aJãbZ8IqÆ U,/Ûöà5-8Â\x00113Ù\x0003ÔzõÂ\x0005?*¸!
´\x0016Ñ\x0010(@ÐÿÒð E`g3d¢m¶ÏCº\x0008JsQ\x001dßCwk4Ð &ØÏ'lñµº-·³¿oc\ÛÒSZ§iVÉ¤sÆ\x0015Ï)³X2´^ï\x0018r²
kÖí\x001b?~ÜQÇ^­\4´\x001e¸ý7?ëyúY·²º`\ñ\x0003W,EÇ¼òú-W´×<U)N;\x0018I$ÿh;¦\x0019Ûu	à±Çq\x000ctN³\x0004H@|lEJxqxS²\x000cÚ}+÷D\x000e¡
µÞKtÞ\x0010ã¢âjV\x001c+*\x0015ÌÄG¥9ñ¬2Ù½©8UqmQMh2\x0005¾Ïìâ,ºÚÌ¡P¸\x000f¯½òQ"j9g4Ôe6\x0004GùöÒnMÎ@Lú3)m"bUÍ)8ßa\x0005J\x0001?\x0004ÍnK\x00139´¹Ø³\x0014ð\x0007\x0005\x000bÁlú«\x001aÇÅ9Îod¬À?\x0007±w 
 8øe%4ý%\x0010=\x0001\x001a½w÷¾:\x000fyo®ºöèË¦5 \x0000i\¯Ý	=mÁØ¬®CçÍ\x001a¡Q#·uÒ®iÞ
]5Â°^ðÅ0d\x001er\x001d9%(\x001ch'²,/ÇëÉÞøc½'4\x0012mß++òÒØÝ£+ñÐ®é¬;cE>wÕÖK­Re³_½r:hõ~æwÞÜq¿ÇI0þ5Ç{/>ùìþ`ü'÷ûý\x0004È\x0002\x001e:[Ï\x0017"\x0003/\x0007Ð÷äi;õJ
3\x0008È´+{F}Kf\\x0008saéQ\x0006\x0013{0Ü®-ÀUÌãá¿ê9\x0004&T\x000b¶syC\x0006 7_\x001b*ðao	"©\x0018z¢Ï\x0017\x0012¾ñÙj\x0014rF\x0003å\x0017O­Ùû¬kA\x0010¸A»l\x001a¼\x001e\x001b\x0006é¤¦TÓ1\x0006&Æðã6\x001fozä=3b\x0016À NHÁ9È÷\x0005AÏÅë\x0004çü±¤>\x0003©}Á\x0002\x0016sýZ­o\x0002±`²ræëiqâRÎõìd±Êä\x001aË¼È6ó\x000b¿èÞ÷®'L××æÝ\x0017>ûeMØÚÜ5>½áKùpØn©)\x0002\x001d+Ü§q§\x00150\x0003º­:ýn\x000cÊÅxG\x0005\x001cx\RlÙCN¦u¨÷ÈõÜï±ºèH	Vd\x000cÜO¸R&V3ôRSéÜ2¾_zs\x000bàÇx9Ë>U­Íê¬âfâ\x001b\x001fP\x001bÐK
m\x001b@Ðl\x001cËú\x0014÷3\x0002!ð\x0000yÚ­7n»S§×Å1o<zènß¹-\x000e\x0017z÷ä½Añd\x000erL[v4ïægçÝ¹óç\x001cþ\x001c\x0004]6Ïý}uSBM\x0018wkh¶:k°¨5Îm\x0018µ³AX\x0010Czqã\x0004j®\x0011Ï	¹eÏ)×g\x0019=¯&oàÊöúrµÆç¼Ô\x000fÍ<\x001b!¶¡sN9}â\x001a¥ÐèÓ°c(·k?)ØÊ2iö:\x0007÷ïÞc+MR´PKF×îx{Wûo\x0015B¥B\x000c/d\x0010¾½N\x000c®öjÍä«Î\x0004³LÐ\x001e£Â±n:\x001d¹_»áR(l]¬,Ì'òaøå÷¦/ÞxqÿwÎZó$\x0018ÿã\x000bO|Çnð¶-
B\x0012ãÛGò\x0000\x0019ðoMÇH$Õ!ëJÐEèù`uláEa\x000fNºÆ±\x001eÆÇmiõ´F\x001f]<{Ê½øÏ¹¬Ñ\x0013NI¬þô«aÁ\x000f?\x0005\x0016,\x000f o q>\x001d¶\x0007öÏ³Æi\x0012\x00058Z=
é¢xà¿Å½êm/»\x000c~®Û%Ü\x001e\x0005)LSBY#Ê«wh¢ç7}\x001aA=h :g©/TE*F	Åbi\x000bÛ-³1ügN0¡fÔ[Ê}K\x0017éîÒxu{ÍS\x0017.º\x0007;=gÙ´£\x0003¬3º£C£k,[ÈÚ¦ðâg¾(éâug<¢\x0005V£\x0012¨ÞÙ"º½±ëÞ÷þw¹ã­)èÈ6\x0017&9#±\x0011D;~loÿ °â\x0018Å-626\x001e
H2H'£¡X§.³>úXO/±qÊt¦ðV@\x0012\x0013:m"\x001aæi¨
ý0¿CÏLæ\x0013×\x0000O\x0015zÓYp)(¸Ð*\x000cB\x0006Ñö\x000cÒ\(ã1ÒP®å«¯¼ê\x0016Ve´ôÊ+_u\x000f\x001f>tI¢æ9Ü66tÂ0n4\x0010´ÄÕKWÜúéU¸mµy\x0014å)lhO\x00012±`×òþ\x0017\x0016¼ôùSI¡kíÌ­"ÿm»÷x4#E$;àR]É»ÖyOn¡¸êFôE@T"lÒÐ\x0017e«;p\x0012=M+ñN¼\x000eYÇÔ>\x0007×\x0011 ôÒ!×Û©ÇK]¤âæG\x0001
¦@ö)ó £ãOV
î«¦Ù\x0018¯­Ñg²#\x0008ôA\x0005ágÏ¥²eZu»ÿË¦ñÅV½|ñ6]ê\x001dãÀ¶¶ÙÙ·WJ±Wÿâ\x000f~ßýðâï_ÅI0þU\x0007ÃGÇ\x000fö¿«ÛýÎ\x00156ÔFiAªñDE¯(0Fèà&N2z yð:Ýv4éÃ\x000f
Å­à\,UÝ(v\x000bµ²«ÍVÝg?÷YWÑ¦¸9óÓ@ã,¹Ú\h<§æùÉ\x0005#Ý,\x0016¦f»Å\x0008Úmé]s©~tR=ÿöÐÍ\x001b2©\x001a\x0017;³µs@ò\x0006\x0005å%
\x0010¤îtÌMevïé\x0014\x001ez\x001a\x001eº}\x000bîF¥,/ÌËÄ£ô\x0002\x0010#ÿÀÃ\x000bª\x0019\x0005\x000bÆä\x0011@÷ëûA>
GÓa{\x0018"´\x0015æbÒ>·ÜùKW]{v{VÈkZ\x001a½°¼àvw\x000fn)\x0019R\x001eºí
÷ÚÍ×Ý\x001fúÞ÷\x001e9szÞÝ}óÙû½vã¦{öÏ¸Þî«\x001f\x001c\x0016ÈWÉ®\x0011\x001dïæÖvnU²6\x000bÂ¸!i"»\x0018
£
Õ®ác\x001aQTR4:%¡,\x000cùË¡öuºò"Ðd<).YwLN¦Jl¢ æ|.\x00132·eÁ?\x0006aÊ\WÇ\x0001
/	\x0012\x000c*E÷t
óæ£­ðÉçÞ\x0016`tsûÎnck3\x0018\x0013÷æüvÜ+tØ _6ôS+§ÔmÆ4æn³úñPpÉ4]h:t³Ñ¾7½j,\x0010-àÄéÛÝî©E³\x000e|z®èUA³Fìù¼9cþpï{öü°¹ÑÊN¶ef(Ð#Ý®=ÇPcÍF3òÐVAS\x0019Á\x0015j\x000cÌ½æwPØpíe4Ì åtÀÔkFB2\x001eòR=À	¿\x000f-Å\x0003íÃ¡2YûØ+Y\x0002¨,m\x0004\x0013Yf\x0006Õj5Õ´v§e\x001bSÝq«£=³NSÛ9ª\x0017ÓðÝ©qðç~ïïÙÿð:>	Æ¿êøËîøÁÞ\x000fµ\x0013gSù¢
r\x0014ªà1\x0013D\¢þÄãÂ\x001aG ]×EÈô%c©dÙÒ¥Î`(Ô*Í:+É\x0019â[s	[\x0014¯|é+.Gw=ìhÑÔ\x0001ºß£ë\x000e\x0004]w¤Ò =(\x0003
-\x001ac\x001eóÆCT'B\x0019#IÎ¨-]Ys\x0008Ü\x001d\x000bDYP\x0005âÄKº¨|ûÂPLç¹¾vZJÀc0y¦RÖ¢¤ÍZHuÑeÞ2Ì§ \x0004õ \x0019_"\x001bbÄ6\x0018·wpÀ\x0006\x000eÉoF¨\x0006ìûWÞíì4d/9;W\x001c°ÙômÆ){\x001a_¹yÃÒËy5X\x000cçæJîKû²\x0005I»v¶é¬ÎVÜí×^~\x0008Õ°0\x001eÐ^\x001bÛÜÚ
r4i(Ø\x0012C\x0015
ÑÃAëÈÇP\x0010Í-\x0014Ì\x0019ªñ\x0001:ÂÞ`&¥\x000b3îl3\x0005
ò}\x0002\x0012è\x0010\x0006M(ÃI{Ì\x0012¶ùT\x001b(Bê\x0004öÛÙb\x000e©\x0017¥Õ\x0005Y§
­ROØ¶B\x0012nqg.^\x0008Ðh¿üòËnÏ¸vÆ*äßD
Z\x001e\x000c½í.55ê¬\x0018]\x0006r_ÙØ;p©ös r6&µc3Ö6ùã£2\x0018djhÈÿm#O $,ÎFö^¸ÔqÀCEÈüÊ>\x000c!\x0002\x001cï\x0007
\x001dq° \x000e\x0016Ïe¹¨Ù³°³µ¥
î\x0018c$´×\dêÈÄFf¦lJ<ß@r\x0002\x0010øf¤ä\x0005>¥2&\x0013-&¿\x0017(AãÖ-·vzMãÀØÌØ¨8\x0007¸nî\x001d\x001b- LÇxø@Ý4NJG!\x000e2
Ìø=æL²A \x0003\x0004Õ×»íêa«ÿôü6âcÛ7~Û[¤Oñ¯:ûÕÜQ¿û§\x001a.v~Hñ zPÅ	÷½´IÆ~\x0011ÇÅ\x001f3	Æ\x000e\x000cFÞÛÀ\x001b¢;-å§DÐ6[Õwéâi\x0005Æ{\x0016THÿYàxAÐªIÀÒl;ûÿ@¾\x00109¥Õí\x001f\x00069sVJÝF<¬ÓÈ\x0008~`L`¥3\x000e
¡oáØ\x0002.Å!ÌÃyHùLt#!ûB¯KP¥4\x0019}VÞ\x0013×¬ý>´;²ÕP«V¢¶\x0007zÖ
[}+F\x0015¬øFãD"\x000b\x0007û±Zyf´«dÁ\x0012»ã\x0002úÚúY{â
nû\x0008é^Q-Ùd\x001epµBFÜÞëoÞq?ü\x0003/ØÏt,S0ê`:p·_¿ãf\x0017ÝóÏ]s^¿!`'3ÿ¾ñ¡]ÆÕ[Y=©&\x0002^\x0006\x0013´Ó ÷Q´\x0011Ñ(gµDLA·~tèÇS\x0019ÒDÚFqæ	\x0010<\x0008¶f¸Yî©´h\x001f\x0013CL[t*\x0008	æyÛÈØÙ iÒh\x001e\x001fËSÓ­¸´l4\x001cË£\x0001¾óäjîÂ¥KÚÐîß»ïî\x0018*F\x0019U©÷¿\x0008ä \x0007\x001d4¸mæ\x0017ÎÍÍ«ø4g(ÏÓ&\x0015\x000bGRoð<úó
ýðPû»mÁ\x000bTÎ/£rI\x0014b\x001e\»\x0013ö3)mHq\x0015cù\¬\x001fP·Mg
9\x001dÏ9S´¹ÖµÙ\x0019u\x0012bûäû°°¼¤dc [Ñ¢õAál0Èì\x0000
ø8{ÿd_\x0004\x0007ôp¾,SC¦4­ú©&©ùùøÃ\x0018T\x0013\x0006\x0011Ö"kMï±Í¬¼aìüd9\x001a\x0006Æ¿?Ö.\x00074/M£)çÐ[d¡©¤_{÷\x001e<5êåóçÃz«³Ô-fãþ\x001dïûÌ¿|ùÓ¿­æó'ÁøW\x001dßqùó­QïÏ\x001fNÆ³qC)¡Ô®P\x0008é"\x000fZ Ãçwí¡ÅQy¾\x001dÈ¼<"öÍ\x000f~\x0018©ßµ|¥s\x00157;[vK\x000b³îþ£
÷ð7D_ Dgá3íâ±:#-£\x001fO0}\x0003Ã¤!L2\x0002§!<ªåLv7\x0006ÝÎ\x0015îr\x001f¾\x0005%y.\x0007^"`Zà]2$°¹·«ª8:\x000f¤ú\x0011ÓçëÃ\x001b[8QÊ\x001bÁSÀ¡õï\x001f\x001c\x001eã&îYÓ/@À1ßa\x00082Áwàðð@ú\x000flyûC<fKîêsÏºWïmZJ±t¸èâ9ü»*ÈT]øâ«7,HÏê\§Ó;wzÎÝ²
ksgÛ]¿|Þ=|ó¥õ\x001bJyáû\x0016\x0016\x0016¬°ÓÑ|7Ð¾¡iõ\x0004hB³\x0005\x0000æ\x0003j3\x0010\x000cÙ\x0007\x0003\x001f´äÿá\x0007J\x0015c×yÖ¸ÄAÔIHP;YÚ«dü§5âI­½lL¼
¼I\x0010×%ô°\x0000sË °\x00054òä
y8m²\x0000>4þmÏ>«×~ýÆkîÞý»®d\x001b\x001c×i¹ûÄç\x0013x\x0006}¯r!\x001b³MÎ­YQÀ\x0002²\x0004ý\x0011ôRÉ´<&fæf£Ã0/ P\x0010\x001e«3Ð?ËP.G\x0007Gz\x001fg\x0004\x0004Ùb¥$\x001ce\x0004¸þ\x001e=Ðùh¤\x0011~é¬øö\x0001õ	Ùj&íyÎ\x0008ÑNUv3ZÆî}ý¨NÇïJLEc¦!¾ \x000cXÍxËM}\x0000¼Q-Ñl¦}¿I°y@Gp\x001f\x0011x½7¨e8Lªá9\x001fI¹ä\x000bæÒ%Gt\x0014Ï+×Î6äb!­
Õö>è5?Ò6\
áívS¾*¶&g}{,¿íÎæ^÷{g^ýäæí¡ûm:Nñ¯:>pñêúÑ`ð#ãt:\x001fÑÎØ«
Üô­	ÏoñyÑ<4dO,\x001aÒc©\x0001\x000c
\x000bÍX\x0000ÐÌ;º¼,hÍ/®º¶!Òg¸(Áü-Ê®UÑµ\x0012`I'SïêÆ{0æ×c\x001c(EÃ\x001aé"È(g\x0008â8^¬B\×\x00153\x0019½ßÌÂ\x001f49õ~\x0004²zy£7\x000c14\x001dUÖ-uëãeÁdiç'Nó»´ïòbº²=\x000bÀ\x0013yýv\x000c¤½ûU<*®`¼Òî»¸¡?þ\x001bd\x0018õÊ\x0017WWÜÌÒ\x0015à\x000e\`TøÊ©\x0005£\x000cÚjtÉ\x001b±sPw»ßÿö«®Ñ©\x001bñ¹k«îçþãîåW^V'$\x0006ü\x0007#w¸\x0007 ÚJµ\x0016ÀÏWëE;K
âq¥\x001f%\x0000Å¶À"\x0006²*6>\x0002+×x"ç2ü\x001bBwùÚ5W§³Ï\x001cm,ÜG\x0005¬È\x001f\x0004/
Re&jÓìÀÂG50\x001a\x000côÚ òd.\x0013O¦Þ;è+Û!\x001aGG\x0001-»d'g­xDáôæ\x001b7%\x000fä<\x0016íÚÀ¡PÌðüh\x0013UQ*&kÔùù\x0005\x001bÚm~\x000e;JÐ#Þ\x0016VÄ\x000c\x0008¤\x0018ààlîW±Îs(:À
âÁÕHðCqk4úô|;6ÎpÞiÐ)Ë±à®ïÃ7#ÇãóVçf½·\x0008ç¶ÚùY|ò¯¶sÊä\x001eûµdDýøY?¢oö\x0014ÀÁH-ïz¬.! j/£"#®ùÅÀ\x0017RÅ½\x0012ïJ·#é¯Uxk\x0002ä`"5ª£¤L r¾;T\x0005x/e,È)Ð7k©Xkç4ï³\x0001+\x0006ívÚX½NSÍn÷ùV"ýàÜW?½uã·E|\x0012Õñç®?u8þÑ©E)nÿHÁ×KÀ\x0014$ïñÊÇFò\x000c¬ôÜb_â\x001d8\x0016øéÊ\x0004\x000fK¿\u~Õ\x001d\x001b\x0007wýòi[l}w°	z=âÑüÀRc(§³©ÒúÈËö±PY\x000bËïðð\x0015
én2\x0001·-h¶CJ!\x0010\x000eÎvübQã±'\x0001©8Ó\x000e0'ð\x000ce>V\x0017\x001e\x0008
ý*È+Ô.jVÁk\x0011èÃHµQ4>Ý·\x001cÇå\x001a\x0006\x0012J\x0003mA"e\x0001ðØ\x0016òBTüI¸ªëÙ'®¹ÝÃ¾;¶\x0005|îì"cLÜÖ\x0005­¡\x0015mbT§Å<tÏ[q[Ç=wjyÆÎ{è>õé/¸û\x001cc.éýøx5tX-ÌYZ\x000bÊ" X\x0000VñæàÐ
{\x0016ú\x0011Çw\x0001Ü¢ñ¾ò? \x0018\x0012¢6 \x0010Ú.3ªö\x0011µÁ	W
ÄtýY¸\x0015ðÇ\x0004AÃµÚL´ªCûód¬ÉÊÇGÇ\x0001­Ë´AïÞ½ãîÞ¿gtNBð{ûî«_ýÛ;ØsUÛX×¾\x0011=!ò{ðFòÞ÷/\x0014Ð¦Ãmæ\x0015TÙTØlæVîq+ÌØgßÚØrq)Xð8ôÏ4\x0006Æ<°ÐÜ±6Y|#ú¾$\x0014\x0017AÎ¤ëhe\x0014dÏ\x0006\x001bLC´·v£Zm×öóR,00\x0014cùñ8HhJùØ#Þ®WhºGÓOÒ¼\x0016e\x0018\x000cvXè7uìc)\x000cË/Ùëî|3\x0004åÐ®\x0015ê¥U\x0006Í²!\x0001Zz\x0011\x0018!ë Ð¬©ÝìÙµ%¨}6ü©\x001b
ï%\x000fZæ²) 5'\x000b\x000bß¼}/8}fY©íý½ç\x0002CCììõ/ÿÜ½W¿î\x0001ù$\x0018ÿªãý|î`8üýÍé$\x0001O\x00075Á·åÁzÜMG1M¨*áÛy\x0018 \x0013¨ã/xp éÕ\x000c«¸×æ¤á][]Pµûè¡k\x0018\x0017§º­õ9qÁÞ:2§	\x001ct·yí«\x000fúTèñ\x0001FÛ°Êp¥Xô\x0008Ê¾^Ì(ë8ÄÙ¢@KLå\x001b\x0003-­\x0014\x0003A¼¤å
§Î3ê\x0012²H3cÏ¸[½»£\x00166´\x000b
\x001caä®ä\x0008ßYy%ÐÒéiá·{m-$Æ}ä¢B\x0016>\x0018L]:ë¾úê-CáKQ:¶o©\x001a\x0017\x000bÇî+¯½áÞÿüÓ.`2Þå%K\x001f-¨ä£\x001fu|§{úâ9\x00173´¬Ê¾]\x0007:Ø@Z\x001do>£\x0005{tt,\x001bGf¿Q\x0018ôE°±­VC¦N^\x0015cÈøèh±~Å.Ï\x0006»¯È°@v·&¨=\x0002&¥'»m¦m\XbÂ\x001fÛæ\x001b\x0014ª¥`ß\x0016>þ
\x0013mÎöXê7ÇÃ\x000fô;Ï½Ó\x00160ïÛ¿É¤H÷á=ríé¹òmÉSqÜ\x000cG%rO¡o@3Uß®MàÌÌÎ-_Ê£WF_§\x0000\x0007ÅO2é[·c*¾z\x0003ÏK@×Ô\x001aÍÒë+0ã\x000f^\x0017Á:ä\x0006'R\x0010U7YBÚû2\x000b%Ë8#´Ó_·¨1^'nÆøí¸Ðh\¯A±ß³\x000c#¬Úµ\x001e\x000fFamFNv^úf\x0001¹ÓéÉ\x0004;W\x0014\x0016d$©NÙ{ÁL­JËw n\x0015»b\x000cÊDÚh6T¤\x0004Ö\x001cZm²<=ã¶	£á\x0000\x001a"PoèUIöìY[s÷ïÞ
êÍn°º¼Ü?>`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=KKË\x001aP¤oBw</p><p>ãDÂ
¤\x0014\x001b/ý\x0015)Sï£ú¤¦\x000cUöÊºÿï6\x0003dï£jæA°ªoªÞú²Jm n\x0016ìþ8`\x0011®µÐ`ï¨l¢}ÀVÃ´¾Å\x0001\éïis¼ãpJèÒ)È7U¡@orTe\x001cTÉÎ-øy³\x0018¾\x0013Ï¼Gvû46Ï\x001bH©ÅñØÅ\x0012×ýô;ÒøÙÎ@\x000eã@4x
\x0007{·ÐHóÞá>æ¤ÿVC\x0015E2ÍQÜáÏ÷\ªå=`\x0010\x0012S$P!#ì\x00145¹Ofd\x0007ß%QÇ!JwÈØø¡óÀðªW\x000eØ2ñ!:fº¨E¥_Ðöjm®\x0015&\x0005\<HY\x0005o÷©¨ê'û:ë\x0003\x0002éß\x0010f=P\x000fìlT´Bv\x000ch	¤\x001cµnl&Þ­MµDJÓ\x000b¾×)Yäõ¥ù|s\x0016\½°=&©
N\x0013ì\x0004ób@$]A^M:°±FìjyQPkÈEõê¦Q¥ÒlraòØ³lS°gÉ#IãÅ£hðB$±=©_R2"</p><p>ªË\x000b\x0006ÿ¸G	8\x0002hßÉ\x0014+áþ\x000fEÆõ7YØ%oëøá\x000c\x000f"4¡C\x0019ý\x0000¬\x001fÃøÌ=^õ8ü\x0017¶&øuIÔô÷]ò¶ó@]z^4;¢\x0013uER\x001cÐ»\x001b~y¬£±CþX¶Ón¯ÇÚ}ùÕ;{çòÈwö¸cT´¯Ðj-:P§S½w¨G<îzâùt GW ½ä\x0019C\x0015ÎRÖ<\x0018\x001bñ-Ðb"%b\x0015÷D5>ê>È¢{\x001b99Üé\x0014ã¼\x0000×H)ør½b½{$¸ÕÛ_'\x0002ÿ:_ßÿùÏï¸Ï?vs\x000e?\x000f@hIêðßeTÏM\x001b9¼¦©ÿu\x0016è í^Ù®ñ\x0006I«¶S5Û%[!³ä\x001cÚRw
#qûÎ8T½\x000fulðëå	\x0007ð²¡Ê\x0012Ji\x001cÅÔï\x0004\x0014-"Y×¡\Oð|T9ð$8\x001b+àÒ}@§¼9Zÿ»x\x0001Þû*á}ÐÂ®joàìfÃÖ×ú V¥\x0005ë\x001c\x0017ÚÂj\x0005ÄB\x0005\T\x000eéù7Èðªgå=®]Á0þ» Y\x0005Ù2\x0002ö'ª¡ÈPÅh6P\x000bÙ\x001a«P}\x000cÍr¢l\x0008Þ\x0016h\x0011~\x0006vË)ü"z\x0007ôg\x0015°\x0008	ñ`äÕ'\x000ek'U\x001d\x001cM-5ÉP»ï-"´4ÒY÷£n\x0013Û\x0016øNS"dêÄdÃxßhÊªë¨¶Å\x000c1=.Ì\ÐnèT ðp_P
úAå\x0007\x0016Ï\x0005\x001eÎãëÌm\x0001¼\x001cö¶Ø+>ýMò)\x0010Î¤©4Öê6+WýY´tâpkõ\x000b\x0019~\x0002Z\x0013&®$t\x0012ÏåÓÁ]Û³æUÌ5mD\x0001Ä±I)V~jc¥QýÊ£</p><p>jöõÍþyüwVkZÎ\x0013ñÙ&MÉ·\x001aüpÏâªÌ\x0018¤Óô3aõ{q\x000bßÂ5tI$ã\x0015<bw_#¾_*ù#@·ü¹\x001eH$ø!µ	 ?(é\x0014\x0003?£L\x0015Oí»>]±Îñ½Ryû8õüú³P@¿\x0006 \x0001R&d\x001a¢ã\x0015YSáQ`\x0017ñoEûìHº¿õö¨ß×Í\x0015\x0006/\x000f´\x0019|Ðv³+ö«+ î¿¸Óããl)\x0003á7HS¢×û(tV 5k+Ã0¡ü²^Ä! \x0002ö\x0018CöÙÎ1\x0013ZÜFÜCÂÖÃg\x0000Ï«Ó	²JR]q\x001f=©ð¸þý÷ïËfòÙ¼¾DÀÉ¯\x001fßÿ£%7\x0007Ä\x001crb`!¡/$(a\x001a¸":\x0007\x00136ÇuQ\x000f=ÉK_µÒà\x0007¼Þ\x001eÌö\x001aád_¬¯ÎÎEE¯Ñ¾¥0ã²\x000cx\x0004ëÓ[3É·z</p><p>\x0004É7çCcn7É×\x0018 õº«×¶</p><p>>æ\x0006D\x000bH5ºÅõvr
îÎL®s¸\x0007³÷ªÏb\x0015À\x0011²]­\x0008\x001dø¢e³Ea¬2$%56áÛI_G¯(\x0003¬\x000b\x001eßçx¹\x001cÓ«Í\x0001­©	¯\x0000¥-D%ÚÅ\x0010ýk$kÆ«J.Í¦C=\x0010ºmsÅÑÐù\x0000ÞÇS¯ØÕ"s¨RcÈJ\x000b\x0016u~ô\x0007àgÃÙï\x0002uYØ?6ß×LM\x0008§úç¯Ò¾w-P´\x0003²Ð\x0005Ë\x0003v\x0006´oI\x0015\x000f®ªUÔä\x000fÃ*5\x001bh¥Á¦o	|\x0013äØêqm&ºÿ\x0008p\x0017\x000bã(T¹\x000cÒ\x001d~g§[¡ÿx­Sç_y»¿|53:Öd«à,xÆcVCØÐÔ&\x0003®·©ðÀÏª-\x0017m°HÀ*»!7MZ¥í\x0006B ¶Uø	\x00042ë$ñ<\x0002åÄ¬(\x0008*<Hê?#'\x0011s\x000b$í,Ã,\x001b¾ûà\x0018¤¤{\x0019~\x0012°ÔV[Å¿K}cúäz¬©\x0005ÃÒ}´°íä?s{lbñWÄëúæHÄ\x00061[ j#»X\x0015 @¿vzû{!ã\x0003<9V	y(T³ìÓg\x001c\x0010\x001d½\x001d{cÍJúð)ìõ2¦³:ñØáråaîm¤ö¿<Ñô}ax	íÂ w)Vâø$úÂÌ÷ãóÍ]\x0016ëõÁ\>Q\x0012iÚ/TUÅsuà\x0005Ð\x0015ÍWØÏ¡X\x0003º\x0010½ðÓ\x0006		¹{\x0005h*"×\x0014\x0013DòÏdÊv$B«¯1$Éé×íg?ûëDà_Çëüá?9Æú{Ç¢.Çâqä\x000b>þw°»\x001b4ºÁ¢ç\x0006äÆÃË3ÅË·j6{\x0001Y}PS\x0012\x001cJ°¡1éÊ
R\x00010&²uý,?¼gô^Q=\x001f\x001b!«Ò}¨\x001cd¨öäO/ÈÌ_a|Ô\x0004;ú?»æ{¢0]øò¨Pb\x0004¦Nr}O\x001a\x0005$1©×èu\x00077¡ÒæS5tôYÃ\x0011\x0010-67Ø2P2¤(Æõvª
DXD%ª>:HU¾q\x0000°èðéQùµyß"¸2S7\x001c¬ûý@\x0018\x001b:îQ$!1yTumÂ{\x0011ðM÷=/A'À\x0007§\x00130uýBcý=â;¿~ "iÜ[y6hî</p><p>>Æ¤%ñ(ü¿\x0001\x000f¢òK$òñOií\x0001\x0014Á§V\x0002Aàý;Û#§@ÂRÝ·fÄP\x001d\x0013\x0013\x001fJÖÊÁ}ºzò1^\x0019Ê\x0014MäýÏRÑ1iÍÉtÔ!Ã¬îc@\x0005N;\x0008±RkZC´ªÝ¬ñ)T]w\x001cD#Ê ïE´\x000büE^I 0Åbd5Õ\x0005bì"Ñ³ Î?s</p><p>\x0002õ2%ZøMñU e#qès]\x0005¯£ëýFBéH²nÒ¡àÿ4Z-w\x001e5fUH*øÀ\x0010§.klñD\x0012÷\x0012¹!A\x001eS</p><p>OT£äÊo±$\x001epo¢\x0016ßÍdÁMÏ\x0016÷°Så4HF\ÿ\x000c¿1\x0014\x0019Û\x0010¾\x0019,¬ªìÓãú³¥"E\x0008Ì¿krE\x0001\x0010K7\x0019K$hºñ³\x001fÀ~®+Æ´ûï]<6Ë»ÄßÅcx\x000còµåþ\x00043\x000eg¨\x001a0yc[\x0000æM\x000b½+\x0002!\x000bDÐ\x000f{\x0012\x000f»ÉEÝÒHÐÔRÜà}Î8 ¤\x0005RÛ;Ö\x0012\x0011Ñ±X\x000eTRUN_­1¯ÛÿäÏþì³ó\x0012ø*\x0012§§ßzúp¿ýÃ£×Uèàµ¡R*mÎSùXê^1ð³¢Î\x000bº+\x0007zÎSs\x0008my¿Ê\x0017ùEÎX»\x000ceÐ*p×.\x001dhã\x0010S\x0012áz¹8sôè½y;þ\x001c\x0019hâAx{¡/xN\x0001I3PF?rÓ÷</p><p>HÖÉ+U¶¯Ýæ \x0008élõ'=þ½cÂb\x0019ð¨AÎ\x0018ò7ZÚò{G5&\x001e²6K\x0016\x001amS%µ	Ñ¨\x001a7Ú\x0007AâÐÐxg\x0012ÍÜZ&,Á}\x0015>a¹\x000e=8!f\x0006¬Ö§qïÄ!E ïc³¯èýô8,úÈ\x001c\x0014Ãà@èÝ¿×\x0003¦Md\x0014ô\x0012)`bE¼ÀNUFÄ\x0007ð\x0003\x0014ýÐ\x000b+\x000cU}¬¯\x000f\x0002ÀÛ\x00059È]À[<,&ÅB"±Àf+h\x000eòÁ*îÓ:\x0016èNß©å¶6XÍIÏ\x001c\x0006öÈ|ÁàÏYÎ|!×/x\x000bB´|ÿ<_ßXøõ'ýï²f\x001c4H¤\x0006C¨t×íL°ð\\x001c%\x000bb¥úÏÌË2zúÖÈü\x0015(?°p\x0014g\x001fë'~ ÚfU{%\x0006\x000eUñyH"ÜÇHê¶±´$Y<ói\x0006Þ\x001bßãT»!¹+g\x0017H\x001b\x0019D¨\x001bÆTIØä²\x0002.B\üÏà\x0016Zçì\x0004þ®¸\x001a1õÐ¿OÏJh5,Êä\x001ch2>Âï\x0017Å£#=_¸\x001d­´21-qpY£%±</p><p>².§ëæÿõÏð½õ{ñvT°cxl'vø>\x0015?åZJÐ÷/\x0007\x0012±(ÁK·\x0018dÕ9\x0015s5\x0004 Ôì×\x0001Â1Q\x0018%Ñìk\x0013C¹\x0012ï\x001fÐ6ß[Ç{\\x000b\x0016K$J\x0008%¦÷¦d»¨HÂOtµÀªÇHDUàÄTÌ¸wÑ6jC\x0019ÅAäáÑ±h\x001eÁe}ÂóØêãú§×ÏîÜý*\x0012ûý¿Ñöúw²\x0008"\x001ee}ñÂ!Ë0paÓb²X\x0018mÀÇq&-.nøË8TQ= ¾</p><p>ÒmÃÞu».S\x0018ÌW¥\x0005\x0000ª\x001cAº]S·<\x0000ö\x0011Ë}ï7ôÍw\x0005­Ffi*\x0002\x0012ðqWë \x000eýv\x0004Éè¢×¥d\x0006&7­
b\\x001cìÑ$¤Ìß9Æ\x0015Ççàêpfr±ÛÙå­ªââ°\x001fA¦\x0011Z¸¯qJÚ®6ß\x0013\x001fùL¤,\¡¿\x000c\x00046¯-Z\x0002Ñ+g¬Ê«Ì~p:!\x000b4ÖQÀdÌg¹°\x0017¾KJF]fã®0!\x0019\x000f±¡\x0011Uâ÷ç÷tTM\x001eäüx\x0012@ü\x0017üZ=8\x0017¢à\x00162$õY9\x001cÇØ\x0011È/O|Çñ§ïÖÄc	\x0013#È÷iÜ]Pg\x001aUiø.ðÐK'Þ¤­\x0008jÞH±³²\x001aÏÔÌ¢Wis%\x0012E)@Z9µT¼ä;\x0013¬uØäÁ3qz\x0017Õ\x00141T</p><p>êM|6íÔËu[ÑÚwykúØ£ø9U ÕÛ·;§´þä.ØH\x0016m\x0006<	©UÎ\x001e\x0006çÏÙ\x0018Q)\x0006[?ªÊ0¬Á¥{\x000f\x001f*!!\x0006±ÁßºbH\x000eáxOÀ\x0010Ü¬i!ÇÈ\x000f¤	wT¸ÈER>\x0012àkø;K­ÂCª\x0015è±­01â\x000fªñ'Ùû.yÆ\x0007µa øñ\x0004¡\x0014
Mz\x0018'¶Tà\x000fQPùËír³~\x0007dÁÆ Ê\x0012	tïB\x0003;-ÜW¶´ :ÑLP\x000bP°\x0015\x0012GG$R±âuòBRÍC\x0004*zkÀÛ¯\x000cµ$UX\x0014SPQÌº\x0010yÈ=\x0010ÄX\x001cä</p><p>2Ä±\x0003å­øî¾2ZNÎõT'ÔFg\x00034Ï¥¨9ª</p><p>HyÅ\x0001ñ=äí§o¾áäÉ½¿ùæå¯\x0013
¯ô§úïX\x0000¿\x0001hH=B»6CU¸\x0013~Hs:ú<þ\x0000¯Ôb¤\x0015h\x00002Dx{D
Ã¦?ªËî\x0015}´\x0018¤ÂÌóæw\x001dXIyJ¡R\x0018W\x000c4o{R\x0002âÿ<'\x0019õêÛ®Ä°»#\x0002g{ÒèF×[8Æ%][\x0019\x0015vôøwÍÏå4=p¦Gì=Vj8É\x0015aÁ}½ô\x0018\x001b IÞE\x0008º)(c@Sêãúv!\x001cü\x001e;m¨ê\x001eI·MÞ)èp£²ÿ/¤¨¢Ò\x001c\x001cÔDê¢C£Yô%Â¥1$iC²7|Q{<<ðP%©¸CY¾ãGÀòáN)Sÿ^<Z\x0004IëÁQ¦E³E(@V\x000b¥((\x000e\x000caßúì\x0013ní\x0016Ýªø \x0011Ì®\x0015	Í¶ËÙkºh\x0018¤<V:L²¥Dx´XÄw¨ºG\x000bôçm\x001c¤Y\x0010oÁ¾bB\x0003Mº\x0007Þ++Pß;p(Ô\x0001õÑÉzØä°	ÆEÓÉP·Ã¢\x001fÚÿ(G5\x0017Ï]\x0004ÒX»Ã>ZÁ9P®ua/\x001d´Ð4¡ìÖU½ÙT\x0018õg6P§®\x0011gt
ÏS\x0007)yE¥¥G\x001f¤Ö>\x000eYÿð\x0016ÈN£ê\x0004úÊ\x0004Ì\x000f½ÎDÇ@0#\x0002cJô&Gb¯¹\x000b¡ÿ¤~°cÈÂ$\x0001{äB¨ÝãT\x0007</p><p>@#+ÜC:ïVÐ£¿òP¾¨\x0000B2-,ÙêìPJm\x000fÎ?`ìßü0*è	µó¾ø÷Å\x0000µ%¼Aút$ÏnpäÁÕ£A$PÇÿ¹æEõ\x001eÎ¡IïBË=\x000bî¯|Ïøø}\x0000¯!%
\x001cãú½ï§\x000bT-þü\x0016µl=\x0001Á\x0018h7ÌzpB£%ND\x000cÿ\RQM} C\x0011{é`X\x0003{Î$\x0012' kO¶p¤ôq@ýgÝ\x001aøWýúéO·zÿÇÏOKzó|À/®áMÔo'C\x00122p+\x0002Ò®
ÃnYÆÔ+¸\x0005gåKD'\x0005\x0005þ'Z\x000eË\x0001.·>4óè?9YÐ\x000f\x0001I</p><p>ªNl'=î\x0014jeR\x0010Uy'lîê\x0001\x001c®Ö\x0007_  E2QÆxOßþýû\x0010^\x0003ÌÆE\x0008;.ÖIh%ô\x0019ìbÔ+\x0007wHÙØ»ÇaýÐtÁÆ\x0000*3ÑÀ\x0019\x0006BþÍí\x0007¿"Ïp§+)Â).²dG=|<Q\x0008àíZ\x0007L<f\x000bDÛ\x0002eØ\x001c¦\x0014vËD\x000eÔ?V\x0000Âg0Å@Ýu1&(\x0004XÓ YG\x0000u\x001eÁ,ûÈU¶\x0001<\x0004f>úÂxd0I¹ zJÄ/§¤FHQÀ¡s:`¸î${gHÆ.Là¤b·\x0002Z\x0014tkã\x0001À~1\x0002\x001bÉ\x001eú 6\x0012éðïá-öÂ1NØQ©5)D.ã`Í£X#9óA1\x0018ÓÝÈàêfì4Ý§Îq®XuÝj8Únü;8U-Txÿù|Û8°±~å¡1_Ñ\x0012TßÏt(ðÞð÷ÚDüÒdq\x0013¶nð\x0019}à©\x001a²`i\x001f<\x0002üû	1áÞ¤d´hM]1çÈGAÕ¸¯I'²Åg\x0000Ù©\x000f )\x000em¯yQ\x0012ÔpØÂÏ~Y'Ù\x0002éâÓpIÞ*	Ñb'ÂqqûBYa\x000cro\x0001Ë\ËYP| Mß\x0015\x00157\x000f£@</p><p>bæ\x0003¨}\x001a%UÈ"	â°ö\x0016x,D\x001f1t§ð'_0¾',P\x000e\\x0016rdºeÎÑ¬UßPDu¶\x0017}Ýùx`ú,È°l'òbBo\x0015mYÿ?\x0018ñ\x001a«\x0005 ÏBÉ°N\x0010÷ö9¹\x0013xM4\x001bâ@:Î¡aòEXR#Ùs{g<\x0007Ð¸.ÏR\x0008QNên[ÛÛoØçöúâ-ÿÓÿôû§cqÿûo¾¬C²íWÕîÇCºÝîGÏh\x001dP/Î)
Õ¿ú8\x000bzÜèÿ[VÆ1ºOuÚa;«º\x001få´\x001coQ/t¯: Lð÷·£×º&?Í6¬ì|Nõ#áú\x0003ûòþèÃBV\x0000\x0001)\x0007â\x000bM9\x0016
ÃÉ\x001c3</p><p>\x001aMÒò^vW¥¾9Pª\x001e½\x0007·m2KâÆ&\x0004É\x001d2`q&¯<¨ ì£Êç]Òq ªoL|\x000bX\x0011î[+,`MÇÉ²H?øbP
\x000edËª@\x0005\x0003{àT;p}\x001a\x0001û³\x0007'§öÁ\x0018Wjêåùuúý\x0011BÐaæIÛ>Ð\x0001¿gÞ#O:Pè0G¶qÖ¡</p><p>Ã\x001c#ÊÑ\x0000Ø²ê3¨\x000c\x0006;[
S^%2c:M°\x000cÔÄè\x0011P5J\x0017\x0007ê²C·\x0004£$R#Èp÷\x000f2¯=d<äxøð> \x001a(¤{8Îá~\x0008vy§~º§9gG¾Û\x0019\x0017\x0011¦º¸\x0007K¹ª·à ¿±Å`d\x0003\x0019Ñ@lLµ\x000bðô´Ãg\x0003¼Z9\x0016C$Ïtú|_CµÆ(mÚr#IÊÓ@ÿÉcB}xÿÝ=¹ü¾ù_Ù\x001e\x000f^Ëh;mR\x0010,Ñ¯ÐµÌ\x0016@üïà.¨ú[5Ü(»'7\x000bâ\x0007Í°<i¤P\x000c;*Ã°3\x001a\x0015äm½-\x0014\x0002\x0005V¶W®QbôD½²\x0007~Ð\x001d´K²g!0h]\x0016öø3\x0013\x0014-\x0016\x0015©5ÂiÞ\x0012ðsD\x0000ÎØ2äÛp-'jøÃ\x000bí«åBw^\x0002$¢\x0002\x001a;ì9ÈªV:ø\x0008øÇÕ6\x0014¿w}¢tuAÕ^âQ¨ò&¥vz\x0015Ð¦m+4\x000bQ¥µhÊ¥Iâ+\x0013QÑPÀ\x0004Â"O\x0015­)w\x0013ìRöDì	e
\x0007~fT®kGCR</p><p>Eö\x001cÞ7c&Çñ×À£Ï¡\x0014×
¡ \x0010k\x0007"ðó?ûìÎÝ/\x001e\x0011Ø¶ÿúqþþñ°\x0007§7OP\x0000øMÜ^Ìs\x001b\x0019\«hÆße\x000fq©Î\x0005`Çáþ´0ØGÃ1+x\x0004ïÀ_X\x0008q°%.\x0007\x0004c8{¥±àá½ä\x0002\x00192ßÐ\x0010ð¤°ýÛî7Î' Ôo\x0016½Ê!éCâ¼]­ 5çÒç\x0001ï"\x0016í"õì1d¦Óxm4B´\x001cà@¸.£u\x0010ðC3/÷>|ÿÌ
UTID\x0015\x0016­èÙ\x0013ö,\x00039a«BüpzH\x0011'\x001f`ÂàH\x0016vBñøÈº&©\x0010A'ì\x0008\x001bY]C­ÑÇ5µkppµ\x0007{Ç&óVÅ©@BO\x001bQ¨+ä\x0005\x0000U(I^å©?ÉYd@\x0010H\x000b¡\x0005-AXÌp§u.«\x000bÝ\x0019¸\x0015P\x0000ä\x0017N/KÒ½#Äû=jâ;\x0015\x001d^úþ³eY\x0006\x001f	JL´ôG\x0000klõµ	±²\x001dExZ,Uy1Õû%\x000bÖ¯ÀçïNçµ,kmÿó.in)rD¤âÅ\x0015*n¥\x000c¼Lfâu/¹FÛ_Ñõç¡ò\x0019½ÙÞÇú`¡5fx&ÄKaRè­ ,Ï?Uk\x000c$-ÍëÿlW\x0011ù§D´</p><p>\x0004\x00136Ý¡d\x0000µì\ëlÃÔÑfð7t7Q >à2P\x0011£¢Ã\x0017b9Í(y1O
1*Â\x0007­ÊÌ\x000cS}E¿\x000eHU;Ñ9}I"7º\x000f¦d)Cv¥P^ãp¬cú³u¤Ã\x000f9(N</p><p>Ý\x0008Á÷Ä6LÆl´®ü?@\x001cTìòä*Ù­_R\x0011J>îòkA§×[³>«`óûFÔ\x000eòÝWHµ³9\x0014\x000fq´Ä$\x0001\x0004¡ÏÊ~\x001bÞ0$Lïr@Ä '!Y=\x00156ÜCð×LØ^R°îLv¶\x0005\x0008;d	ßÙçöúâ\x0013_¾{ùÝãý±\x001dYLô7o\x000fèìÈ4sÃøNt«ÅµIîC©sêéÀóC\x0000=¸Î>v·Ù·$Gq\x0012ÝÖ\x0012ÙáF\x0019\x0010@Ê>¡·Ðú\x0003ÊõM\x001a½SÙ[ú+¥èÝíp*ôÙÕ^\x0008h.\x000eØÉK \l}Âï\x000c66LN|\x0015\x0006ßD6K¾"K	ít$\x0010 &eV-\x0002²©7ªC\x000f\x0015«æ\x0018Ì®üî5A
\x0015¯Øpa\x0019\x001bVÕ\\x0002í\x0017ys\x001b\x0013L¼¬«T\x000eê«ð@:veéÝ]úrÀÞn3þÎ\x0010|Áv¯L\x000e`\x001d,]>½\x000eüÞSö	£)üÃÈð¦Ô-\x0012#¿5°*=ªAh²%7ô±½\x0018º"\x0002Uô¹SÁAm\x000c<)Ò'ç\x0013\x0011Î¢\x001a¯©ï/ôÀ¤&·£äE\x0015KÆ\x00015	\x0019\x0013D÷¿\är\x000fÊSººùó"\x000bGôô}=»d«Þ%3t.@WïÛFðF÷\x001fûly¿
½ÆL¦u,\x0019.F77)6DÛ¹6#)(ÃÉûvÁúiþDâ¡jJ¸Çhà\x001eí¯ð¯'àÿ¾A!Âß}Üï\x0003EÀ\x0012\x000cb£ªÈ\x0018÷ó³ü
Ì\x0006ã<ì­¡FBaÁûD©1\x0011°8ÖâÏj»ãYWùxÂæÅ\x0000\x001côyR\x001eí\x0003_+@§JjÉ4vYm6¶\x0000ow¶Cº½M\x0003£R®ápöòw\x0017ç¦íÓqoÜS¾|â\x001e[§­ó¦D\x0016É¯Ér2m*¼ÿKk-%ª´`ÄZÌ	µÎ5.\x001d1Ö»»Èxüã÷ìr¼Ç"kóô Hw*sü>Pí¢d.ËK1ÖÙ\x0019I>`kZÔÊï\x001a+à-
\\x0003¨\x0011"\x0006\x0019[¹\x000b¢ko@\x0018Î6$cd^r»\<E9:	K·ÏìõE'\x0002?ûÙÏò±\x001eþþÑÛwÌ6\x0015ð\x0013T\x000eØï@aè7A­i\x001a=ÀI\x0010</p><p>Y\x001cË°"Í©×¯ÿjÅ{{·LTTmøa(ÍµµAúâi\x0019ª¤ãPyò¾VV¬ôØø}\x0007t\x0016\x001ap\x001avl£òU²\x0008<\x000cÔ¾\x0001½_íÁo×Æ-røCÃAPj\x0003Ù!W´\x0017\x001eýL IAcP\x001cDB\x0011"G{¥\x0018.±	a$ÔI²\x000c´"íÃ¯Ýä9P+a9õ{;ù 0\x0017\x0001\x001eÁ©à[cÅs\x0019×Od¤½.6½épØe{|ü­ëaÅÛ\x0019ôªH^\x001cTÄ\x0015Yä-±ÂÍ
QxCX\x001f	L|¿]¤ÔÚøï\x001eáð{^Õ¼\x0006Ó,\x0000Üà-­<üÓìÊÇû#²ª\x001a4\x001e¯¨m:\x001cÌQ¢jÌ\x0013\x0002¯s`U\x0013ßÀù\x0010¸}KrÅ\x0001ÒIÐ+«ÁpÑDB\x0005) \x0013Y_ð|J¦nÛß\x001f¼\x001a÷?èjlº»ñD/'MNL$Ê	r\x000e®M¤~9\x000eÚ4[\x0001Db0Q"ë\x0013J\x0014ÙÝ"¹¯:TÂ\x0005ÑBZ\x001a¸®\x001ebíß0ôæux\x001bäS¢\x001c~\x0001%\x0013¼Æ:Eu¬gW¦±Ç¿ÚÓó\x001b»<\x0011AB¡ÐHã|¤².FGìkÂ0Åð°¬øå{Úµþ¸»ÅªvÊý<\x0001Û\x001c\x0002Â9\×±º\x0007l;êàì{Xk¿Þ°ïÐ\x0002ô)ü\x0003øsÎMBkr\x0013\x0017\x0000oºØ\x0018\x000c¦D\x0004\x000620í1ã³Ü\x0012Gr\x000b@uOdíD¸4\x0012qJhvÍÐèBM¢àê÷-t©DÚàzKc¢ "¤ù</p><p>!{®RÛT\x0019®ùÂ!VÚKqÖÑ"Õ|\x0002ô\x000fS\x001cD\x0019þK%¯­xBàsPì÷r}ö'¼¯ëÿ:\x0011øWùúOþ?+½½ü£ã!?\x001dCBÖ·,Ðl¾yó­»`hJÖ\x001d\x00017©jò\x0003°ÊðD­²AJ* ¹\x0003ØÞbhK ûñý÷ÍªtÜË²cAX)\x0003îòß§u1ÝÃ\òÀ¢ÒHUrMjaz\x0006<(5</p><p> Ð\x0010×á%`\x0016\x0017\x001f\x00069ÓLH³\x0007 \x00185\x00120Â ,"$\x0002ª!¡\x000cAìÞf¼W$\x0005Uðq<
ÁUr-\x0011y_Ôë
bÀ»£¿®C0ÈI¦k</p><p>-ø\x000f!ÍJãÿ±í\x0000äa.qXN\x0007S`©</p><p>À (Õ0ÖaP÷êgku@è\x0008f¬	ÿÙ\x0014zT\x001bJ6ÝùBc\x000cï</p><p>« ûíJ\x001a93ý.yÙ\x0015\x0007\x001f\x0006 ä<H\x001cz\x001br¹é\x000b¡Mª\x000cÀï§Å!\x0019	ÙxF¤@Ò \x001b¹\x0016Z	D\x0006\x0000¹ï×W9IÐ\x000f\x0002$aÙëMÈ\x0012%o1aÓ{ûp¤T\x00009ìâ2ÊñV¨MeÒÔt(¤ í'WK¾7dW¼9\x0006\x0004\x0005[Vy4·:qa\x0012\x000bì\x0013Í\x0015\x0001a
pÞí¯ÑÎA\x0002\x001b°¾\x0011y ?G$óåå=fÄ(ä¡(ÐÓÇ3û+\x001dñ\x001a^\x001bÆdÜuñO\x0007BùíÛ\x001fâà^×çÑÿÆ!O\x0012N¶jhu\x001dí&Ü·\x0018^\x0014KtÐ9êÀÖ\x000cáþªÊ\x0016ßãø³'·|^,x¹Çüp]4/+Ñ7ª)8Ô¯ÑUT9SÁ//ÇQw!\x000c\x0013®0rBbë¨kí$ªMã-\x0003xHfµN\x001d}ð¯ã;\x0014H[j\x0016æSqÈGû¦Yx¡\x0010-ò\x0016á\x000e\x000eõ</p><p>ø\x0012ÍÈiP;À\x0013\x001bL4HRÚä4â\x0008ý+X K£=¸\x000bUmÕæ\x0004Ó¸í.I²`¶ÉÈ\x0011¤PL¶$å>zl\x0007Úé\x0002Î%ëÇg\x000178®\x0005\x000fâõõã_Ë\x0007ÿU¾åÿú¼õô\x000f\x0007¼L\x0008$¯Åe0¶±\x000eemL¶IêS\x0006Ó7ØÀèWÃø%AÞçÄ¨ç\x000bÑ\x001bë´}¸Å&ªØ\x0017UL\x001dô
Ã¯L</p><p>®Î\x0017ÿJhÿùB6~B5`rÛÙ#`Üø³¯£_YÕ_ÌåÌþ¥_6À %qãG¿\x0013±m\x001f Eô_ÐÅ&T F¿ÂÌho5­Ï÷×E!^IÌú¢>ú½`÷VöJk8\x0010W	\x000eÿÖÆó\x0018r°@\x0005T.Åá\x0019\x00064@ÄTIHØÀ²l¸tý\x0013\Økq²hV\x0012\x0004I*F|/éîùÞS"JY(+gð/6N"\x001eäm¿[°½òAK¬ÊwÌ\x000f$*ZT-\x000ewBêq¶+ÎÃµÙL>l*a¢Üe¥ÌàUÒ©×häÉo\x0012/¥©õ1ÈkÐr_Y\x00015ÊÃ¶}{?ÖúC\x0004?></p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/reset-normalize.04254734784e5ced8efa.css">`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/main-es2015.a4ce80bd5ba650e1e71b.js" type="module"></script>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/runtime-es2015.34435aec4debd6a24ed5.js" type="module"></script>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/polyfills-es2015.3c04ecf33fbd0eb48718.js" type="module"></script>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/polyfills-es5.2693bdca41aa03fca8a5.js" nomodule="" defer=""></script>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/vendor-es2015.f31720ecfdd9babf5733.js" type="module"></script>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/vendor-es5.f31720ecfdd9babf5733.js" nomodule="" defer=""></script>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/main-es5.a4ce80bd5ba650e1e71b.js" nomodule="" defer=""></script>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/runtime-es5.34435aec4debd6a24ed5.js" nomodule="" defer=""></script>`
  
  
  
  
Instances: 9
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 345
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/jobs-ete](https://www.1jeune1solution.gouv.fr/jobs-ete)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form _ngcontent-sc188="" novalidate="" class="search-container ng-tns-c188-1 search-container--collapse ng-star-inserted ng-untouched ng-pristine ng-valid">`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/formations](https://www.1jeune1solution.gouv.fr/formations)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form _ngcontent-sc185="" novalidate="" class="search-container ng-tns-c185-0 search-container--collapse ng-untouched ng-pristine ng-valid ng-star-inserted">`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/apprentissage](https://www.1jeune1solution.gouv.fr/apprentissage)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form _ngcontent-sc185="" novalidate="" class="search-container ng-tns-c185-0 search-container--collapse ng-untouched ng-pristine ng-invalid ng-star-inserted">`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/service-civique](https://www.1jeune1solution.gouv.fr/service-civique)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form _ngcontent-sc188="" novalidate="" class="search-container ng-tns-c188-2 search-container--collapse ng-untouched ng-pristine ng-valid ng-star-inserted">`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale](https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form _ngcontent-sc286="" novalidate="" class="autocomplete-form ng-untouched ng-pristine ng-valid">`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/entreprises/inscription](https://www.1jeune1solution.gouv.fr/entreprises/inscription)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form _ngcontent-sc284="" novalidate="" ngxsform="companyForm.form" class="company-register__form ng-tns-c284-0 ng-untouched ng-pristine ng-invalid">`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois?page=2](https://www.1jeune1solution.gouv.fr/emplois?page=2)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form _ngcontent-sc185="" novalidate="" class="search-container ng-tns-c185-1 search-container--collapse ng-star-inserted ng-untouched ng-pristine ng-valid">`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/stages](https://www.1jeune1solution.gouv.fr/stages)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form _ngcontent-sc185="" novalidate="" class="search-container ng-tns-c185-1 search-container--collapse ng-untouched ng-pristine ng-valid ng-star-inserted">`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois](https://www.1jeune1solution.gouv.fr/emplois)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form _ngcontent-sc185="" novalidate="" class="search-container ng-tns-c185-1 search-container--collapse ng-star-inserted ng-untouched ng-pristine ng-valid">`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois?page=3](https://www.1jeune1solution.gouv.fr/emplois?page=3)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form _ngcontent-sc185="" novalidate="" class="search-container ng-tns-c185-1 search-container--collapse ng-star-inserted ng-untouched ng-pristine ng-valid">`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois?page=1](https://www.1jeune1solution.gouv.fr/emplois?page=1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form _ngcontent-sc185="" novalidate="" class="search-container ng-tns-c185-1 search-container--collapse ng-star-inserted ng-untouched ng-pristine ng-valid">`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/evenements](https://www.1jeune1solution.gouv.fr/evenements)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form _ngcontent-sc185="" novalidate="" class="search-container ng-tns-c185-0 search-container--collapse ng-untouched ng-pristine ng-valid ng-star-inserted">`
  
  
  
  
Instances: 12
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "mat-input-274" ].</p>
  
### Reference
* http://projects.webappsec.org/Cross-Site-Request-Forgery
* http://cwe.mitre.org/data/definitions/352.html

  
#### CWE Id : 352
  
#### WASC Id : 9
  
#### Source ID : 3

  
  
  
  
### Application Error Disclosure
##### Low (Medium)
  
  
  
  
#### Description
<p>This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.</p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/cgu/1.0](https://www.1jeune1solution.gouv.fr/cgu/1.0)
  
  
  * Method: `GET`
  
  
  * Evidence: `HTTP/1.1 500 Internal Server Error`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/mentions-legales/1.0](https://www.1jeune1solution.gouv.fr/mentions-legales/1.0)
  
  
  * Method: `GET`
  
  
  * Evidence: `HTTP/1.1 500 Internal Server Error`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/accessibilite/1.0](https://www.1jeune1solution.gouv.fr/accessibilite/1.0)
  
  
  * Method: `GET`
  
  
  * Evidence: `HTTP/1.1 500 Internal Server Error`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/confidentialite/1.0](https://www.1jeune1solution.gouv.fr/confidentialite/1.0)
  
  
  * Method: `GET`
  
  
  * Evidence: `HTTP/1.1 500 Internal Server Error`
  
  
  
  
Instances: 4
  
### Solution
<p>Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cross-Domain JavaScript Source File Inclusion
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes one or more script files from a third-party domain.</p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/runtime-es2015.34435aec4debd6a24ed5.js`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/runtime-es2015.34435aec4debd6a24ed5.js" type="module"></script>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/runtime-es5.34435aec4debd6a24ed5.js`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/runtime-es5.34435aec4debd6a24ed5.js" nomodule="" defer=""></script>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/vendor-es2015.f31720ecfdd9babf5733.js`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/vendor-es2015.f31720ecfdd9babf5733.js" type="module"></script>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/polyfills-es2015.3c04ecf33fbd0eb48718.js`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/polyfills-es2015.3c04ecf33fbd0eb48718.js" type="module"></script>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/main-es5.a4ce80bd5ba650e1e71b.js`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/main-es5.a4ce80bd5ba650e1e71b.js" nomodule="" defer=""></script>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/main-es2015.a4ce80bd5ba650e1e71b.js`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/main-es2015.a4ce80bd5ba650e1e71b.js" type="module"></script>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/polyfills-es5.2693bdca41aa03fca8a5.js`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/polyfills-es5.2693bdca41aa03fca8a5.js" nomodule="" defer=""></script>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/vendor-es5.f31720ecfdd9babf5733.js`
  
  
  * Evidence: `<script src="https://storage.googleapis.com/wizbii-application-assets/1jeune1solution/2ae184e89d38fb79d05cea4b3762dac3e1704a17/fr/vendor-es5.f31720ecfdd9babf5733.js" nomodule="" defer=""></script>`
  
  
  
  
Instances: 8
  
### Solution
<p>Ensure JavaScript source files are loaded from only trusted sources, and the sources can't be controlled by end users of the application.</p>
  
### Reference
* 

  
#### CWE Id : 829
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Incomplete or No Cache-control Header Set
##### Low (Medium)
  
  
  
  
#### Description
<p>The cache-control header has not been set properly or is missing, allowing the browser and proxies to cache content.</p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/confidentialite](https://www.1jeune1solution.gouv.fr/confidentialite)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/robots.txt](https://www.1jeune1solution.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/maintenance-pole-emploi](https://www.1jeune1solution.gouv.fr/maintenance-pole-emploi)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr](https://www.1jeune1solution.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/sitemap.xml](https://www.1jeune1solution.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale](https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/deposer-offre](https://www.1jeune1solution.gouv.fr/emplois/deposer-offre)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/cgu](https://www.1jeune1solution.gouv.fr/cgu)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/accessibilite](https://www.1jeune1solution.gouv.fr/accessibilite)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/mentions-legales](https://www.1jeune1solution.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 11
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Permissions Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Permissions Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Permissions Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr](https://www.1jeune1solution.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/confidentialite](https://www.1jeune1solution.gouv.fr/confidentialite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/stages](https://www.1jeune1solution.gouv.fr/stages)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/maintenance-pole-emploi](https://www.1jeune1solution.gouv.fr/maintenance-pole-emploi)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois](https://www.1jeune1solution.gouv.fr/emplois)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/cgu](https://www.1jeune1solution.gouv.fr/cgu)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale](https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/mentions-legales](https://www.1jeune1solution.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/deposer-offre](https://www.1jeune1solution.gouv.fr/emplois/deposer-offre)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/accessibilite](https://www.1jeune1solution.gouv.fr/accessibilite)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Permissions-Policy header.</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
* https://developers.google.com/web/updates/2018/06/feature-policy
* https://scotthelme.co.uk/a-new-security-header-feature-policy/
* https://w3c.github.io/webappsec-feature-policy/
* https://www.smashingmagazine.com/2018/12/feature-policy/

  
#### CWE Id : 693
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois](https://www.1jeune1solution.gouv.fr/emplois)
  
  
  * Method: `GET`
  
  
  * Evidence: `XEhglCMjBlWcyEYV3qDcEn4pfFNFuedrwj62P0DoF3Y`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/accessibilite](https://www.1jeune1solution.gouv.fr/accessibilite)
  
  
  * Method: `GET`
  
  
  * Evidence: `XEhglCMjBlWcyEYV3qDcEn4pfFNFuedrwj62P0DoF3Y`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/maintenance-pole-emploi](https://www.1jeune1solution.gouv.fr/maintenance-pole-emploi)
  
  
  * Method: `GET`
  
  
  * Evidence: `38e0-r9CKPBCiCcgT9Ec3y3IwkLPBB7Q`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `XEhglCMjBlWcyEYV3qDcEn4pfFNFuedrwj62P0DoF3Y`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/robots.txt](https://www.1jeune1solution.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `13c-76+XNY304F3Lj+NcB6bkc8EaCCI`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/mentions-legales](https://www.1jeune1solution.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `XEhglCMjBlWcyEYV3qDcEn4pfFNFuedrwj62P0DoF3Y`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale](https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale)
  
  
  * Method: `GET`
  
  
  * Evidence: `XEhglCMjBlWcyEYV3qDcEn4pfFNFuedrwj62P0DoF3Y`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/cgu](https://www.1jeune1solution.gouv.fr/cgu)
  
  
  * Method: `GET`
  
  
  * Evidence: `XEhglCMjBlWcyEYV3qDcEn4pfFNFuedrwj62P0DoF3Y`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/deposer-offre](https://www.1jeune1solution.gouv.fr/emplois/deposer-offre)
  
  
  * Method: `GET`
  
  
  * Evidence: `XEhglCMjBlWcyEYV3qDcEn4pfFNFuedrwj62P0DoF3Y`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr](https://www.1jeune1solution.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `XEhglCMjBlWcyEYV3qDcEn4pfFNFuedrwj62P0DoF3Y`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/confidentialite](https://www.1jeune1solution.gouv.fr/confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `XEhglCMjBlWcyEYV3qDcEn4pfFNFuedrwj62P0DoF3Y`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>\H`�##\x0006U��F\x0015ޠ�\x0012~)|SE��k�>�?@�\x0017v</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/0614284](https://www.1jeune1solution.gouv.fr/emplois/0614284)
  
  
  * Method: `GET`
  
  
  * Evidence: `FROM`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois](https://www.1jeune1solution.gouv.fr/emplois)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/0614309](https://www.1jeune1solution.gouv.fr/emplois/0614309)
  
  
  * Method: `GET`
  
  
  * Evidence: `FROM`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/0614308](https://www.1jeune1solution.gouv.fr/emplois/0614308)
  
  
  * Method: `GET`
  
  
  * Evidence: `FROM`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/jobs-ete](https://www.1jeune1solution.gouv.fr/jobs-ete)
  
  
  * Method: `GET`
  
  
  * Evidence: `FROM`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/0614326](https://www.1jeune1solution.gouv.fr/emplois/0614326)
  
  
  * Method: `GET`
  
  
  * Evidence: `FROM`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `DB`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/0614316](https://www.1jeune1solution.gouv.fr/emplois/0614316)
  
  
  * Method: `GET`
  
  
  * Evidence: `FROM`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/0614304](https://www.1jeune1solution.gouv.fr/emplois/0614304)
  
  
  * Method: `GET`
  
  
  * Evidence: `FROM`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/0614289](https://www.1jeune1solution.gouv.fr/emplois/0614289)
  
  
  * Method: `GET`
  
  
  * Evidence: `FROM`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/0614293](https://www.1jeune1solution.gouv.fr/emplois/0614293)
  
  
  * Method: `GET`
  
  
  * Evidence: `FROM`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/0614318](https://www.1jeune1solution.gouv.fr/emplois/0614318)
  
  
  * Method: `GET`
  
  
  * Evidence: `FROM`
  
  
  
  
Instances: 12
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bFROM\b and was detected in the element starting with: "<script id="1jeune1solution-state" type="application/json">{&q;G.https://job-v2.api.www.1jeune1solution.gouv.fr/v1/pe/auth/priva", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/stages/stage-futur-developpeur-sap-specialisation-digitale-ou-metier-h-f-toulouse](https://www.1jeune1solution.gouv.fr/stages/stage-futur-developpeur-sap-specialisation-digitale-ou-metier-h-f-toulouse)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc198="" class="btn internship-offer-view__btn ng-star-inserted" aria-label="Postuler à l'offre Stage : Futur développeur SAP- Spécialisation Digitale ou Métier H/F - Toulouse">
        Postuler maintenant
      </a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/stages/business-developer-93](https://www.1jeune1solution.gouv.fr/stages/business-developer-93)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc230="" class="btn internship-offer-view__btn ng-star-inserted" aria-label="Postuler à l'offre Business Developer">
        Postuler maintenant
      </a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/stages/business-developer-92](https://www.1jeune1solution.gouv.fr/stages/business-developer-92)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc314="" class="btn internship-offer-view__btn ng-star-inserted" aria-label="Postuler à l'offre Business Developer">
        Postuler maintenant
      </a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/mentorat](https://www.1jeune1solution.gouv.fr/mentorat)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc330="" ngxscrollto="#participer" aria-label="Trouver un mentor." class="btn-clean btn mentoring-hero__content__actions__btn">
            Je trouve un mentor
          </a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/stages/stage-mise-a-jour-base-de-donnees](https://www.1jeune1solution.gouv.fr/stages/stage-mise-a-jour-base-de-donnees)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc230="" class="btn internship-offer-view__btn ng-star-inserted" aria-label="Postuler à l'offre Stage Mise à jour Base de données">
        Postuler maintenant
      </a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/stages/graphiste-designer-h-f](https://www.1jeune1solution.gouv.fr/stages/graphiste-designer-h-f)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc230="" class="btn internship-offer-view__btn ng-star-inserted" aria-label="Postuler à l'offre Graphiste / Designer (H/F)">
        Postuler maintenant
      </a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/stages/stage-commerce-vendeur-se-technicien-ne-h-f-64](https://www.1jeune1solution.gouv.fr/stages/stage-commerce-vendeur-se-technicien-ne-h-f-64)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc230="" class="btn internship-offer-view__btn ng-star-inserted" aria-label="Postuler à l'offre STAGE COMMERCE - Vendeur-se / Technicien-ne (H/F)">
        Postuler maintenant
      </a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/stages/stage-business-developer-h-f-59](https://www.1jeune1solution.gouv.fr/stages/stage-business-developer-h-f-59)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc314="" class="btn internship-offer-view__btn ng-star-inserted" aria-label="Postuler à l'offre Stage business developer - H/F">
        Postuler maintenant
      </a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/stages/assistant-community-manager-darty-f-h-1](https://www.1jeune1solution.gouv.fr/stages/assistant-community-manager-darty-f-h-1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc230="" class="btn internship-offer-view__btn ng-star-inserted" aria-label="Postuler à l'offre Assistant Community Manager Darty F/H">
        Postuler maintenant
      </a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/stages/assistant-e-marketing-anglais-courant-une-3e-langue-est-souhaitee](https://www.1jeune1solution.gouv.fr/stages/assistant-e-marketing-anglais-courant-une-3e-langue-est-souhaitee)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc198="" class="btn internship-offer-view__btn ng-star-inserted" aria-label="Postuler à l'offre Assistant(e) Marketing - Anglais courant, une 3è langue est souhaitée">
        Postuler maintenant
      </a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/stages/assistant-e-marketing-anglais-courant-une-3e-langue-est-souhaitee-1](https://www.1jeune1solution.gouv.fr/stages/assistant-e-marketing-anglais-courant-une-3e-langue-est-souhaitee-1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc198="" class="btn internship-offer-view__btn ng-star-inserted" aria-label="Postuler à l'offre Assistant(e) Marketing - Anglais courant, une 3è langue est souhaitée">
        Postuler maintenant
      </a>`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/entreprises/inscription](https://www.1jeune1solution.gouv.fr/entreprises/inscription)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a _ngcontent-sc281="" class="btn">Rejoindre la mobilisation</a>`
  
  
  
  
Instances: 12
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Retrieved from Cache
##### Informational (Medium)
  
  
  
  
#### Description
<p>The content was retrieved from a shared cache. If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance. </p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/confidentialite](https://www.1jeune1solution.gouv.fr/confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/deposer-offre](https://www.1jeune1solution.gouv.fr/emplois/deposer-offre)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/cgu](https://www.1jeune1solution.gouv.fr/cgu)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr](https://www.1jeune1solution.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `hit cached`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale](https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/accessibilite](https://www.1jeune1solution.gouv.fr/accessibilite)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/sitemap.xml](https://www.1jeune1solution.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/mentions-legales](https://www.1jeune1solution.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/maintenance-pole-emploi](https://www.1jeune1solution.gouv.fr/maintenance-pole-emploi)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/robots.txt](https://www.1jeune1solution.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
Instances: 11
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request.</p>
  
### Other information
<p>The presence of the 'Age' header indicates that that a HTTP/1.1 compliant caching server is in use.</p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois/deposer-offre](https://www.1jeune1solution.gouv.fr/emplois/deposer-offre)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/mentions-legales](https://www.1jeune1solution.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/sitemap.xml](https://www.1jeune1solution.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale](https://www.1jeune1solution.gouv.fr/je-recrute/evenement/mission-locale)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/robots.txt](https://www.1jeune1solution.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/maintenance-pole-emploi](https://www.1jeune1solution.gouv.fr/maintenance-pole-emploi)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/accessibilite](https://www.1jeune1solution.gouv.fr/accessibilite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr](https://www.1jeune1solution.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/cgu](https://www.1jeune1solution.gouv.fr/cgu)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/confidentialite](https://www.1jeune1solution.gouv.fr/confidentialite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
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
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `365000000`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `000414371`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `22851031`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `571428571`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `32610521`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `15724800`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `000156141`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `0801010808`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/](https://www.1jeune1solution.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `00792423`
  
  
  
  
Instances: 9
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>365000000, which evaluates to: 1981-07-26 12:53:20</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois?page=10](https://www.1jeune1solution.gouv.fr/emplois?page=10)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois?page=10](https://www.1jeune1solution.gouv.fr/emplois?page=10)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois?page=10](https://www.1jeune1solution.gouv.fr/emplois?page=10)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
* URL: [https://www.1jeune1solution.gouv.fr/emplois?page=1](https://www.1jeune1solution.gouv.fr/emplois?page=1)
  
  
  * Method: `GET`
  
  
  * Parameter: `page`
  
  
  
  
Instances: 4
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://www.1jeune1solution.gouv.fr/emplois?page=10</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [svg] tag [width] attribute </p><p></p><p>The user input found was:</p><p>page=10</p><p></p><p>The user-controlled value was:</p><p>100%</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
