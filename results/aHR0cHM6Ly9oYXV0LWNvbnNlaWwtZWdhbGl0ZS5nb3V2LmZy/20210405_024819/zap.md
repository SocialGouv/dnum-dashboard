
# ZAP Scanning Report

Generated on Mon, 5 Apr 2021 02:43:00


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
| PII Disclosure | High | 9 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 12 | 
| Source Code Disclosure - PHP | Medium | 4 | 
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce-pekin-25-geneve-2019.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce-pekin-25-geneve-2019.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `503596596596`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/declaration_commune_-_10_ans_loi_cope-zimmermann-2.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/declaration_commune_-_10_ans_loi_cope-zimmermann-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `581388556621265265`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_etatdeslieux-sexisme-vf-2.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_etatdeslieux-sexisme-vf-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `504552553316`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/20201118_discours_brigitte_gresy_remise_rapport_diplomatie_fe_ministe.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/20201118_discours_brigitte_gresy_remise_rapport_diplomatie_fe_ministe.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `586586586586586586`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/cp_indicateurs_diplo_fe_ministe_cp_hce_mars_2021.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/cp_indicateurs_diplo_fe_ministe_cp_hce_mars_2021.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `586586586586586586`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/guide_parite-maj-v-longue-2019-v3bis.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/guide_parite-maj-v-longue-2019-v3bis.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `586586586586`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport_etat_des_lieux_du_sexisme_2019-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `503596596596`
  
  
  
  
Instances: 7
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 503596</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: </p>
  
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
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport_parite_gouvernance-20191217-2.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport_parite_gouvernance-20191217-2.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `370444370556500`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport-diplomatie_feministe-v4.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/rapport-diplomatie_feministe-v4.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=%ÍO\x000e\x0002éST	iTSª²7%­ \x001bcO­\x0016M¤*wS¬íM±¸¹ÎNUÖ\x0016ÑéºØ¬Lªâô\x0014[%V\x0015'§è*Émyj©ª¤:}¦T	L;:\x0005°­\x0008Y*)\x0011×gíñL°L À\x000esØÜ\x0018QØ,©<?\x000eo¤\x0011Ã4Z\x000c\x0017²\x0010ÃGøa=ÏTI.FÉ\x0011Vò?·ÿ\x0018\~XÖíËWÍ¶nngß6/ÇoÆc¥®Ô«W¯Ä/×¯Å`(¨?ÞÃ×\x0012ú)Ç\x0006\x000e?ÓcÒ®ËUå\x0007ï-hø­\x000f~Ã\x000fÊ¢qÓzå6RCçáÍ4æá×Tù\x001a9*á1F¦'IHúQB°ÃzE\x001fS?w:Ã²¬ý"K©
®[K(¢\x0018~:ÃaxÖ·hMxñ«_³f±\Ê\x0011NÏÚÍ94\x0008þrW­<\x0014Ór1?\x000e/üÖ_¶Î[Ê\x001cFÂÝ¸óqø)Ý¢Ô>¹ãZ\x0016øR\x001as»360°#(ø×´aÁ\x000cËå¿àr'r*´\x0001\x0000qdM)+F:IÓÏ£CÛ¸/ÛÒ|0
"w°Ür{ßÐ`½\x0015\Ve­ze\x0015wÃ«kï\x0014ð&0¦à\x0018ßu;P1pü\x0017\x0002Âæíçk\x00110a\x001d8Ü°\x0003î5\x0011
DÁi.\x0010c~=ì\x0011\x0006öw	Ág\x001cìÇá\x0015¡\x0011S\x000539kJ·T!õ\x0010õbNU!r7â\x0017i!I\x00073\x0015K©þ°l§6oö\x00027:)Uêat³@L·M(êÜ\x0017lÖNá(\x0018.\x0010è7A!,\x001a\x000e{}^Å~\x0016{×Ô|n?&æÌ·Íæø´\x001få\x001d·¶@Á¨\x0018\x0006\x0019\x0000`p£Èµ\x0005\x0002\x0003m\x0012d\x0008>¥ÿ-ZÅ¡@\x0019q1\x000fÛÒ\x0008~=+Aùü\x0012JNæË·ÁÂé;\x0014}Ù³
\x001aV\x0003\x001eÈìZ\x000cQ{NùûD~.{\x0013ô­bìãÙL¤®ö ­µ\x0010Üv\x001fÜ:?\x0000÷_HµOÑ+ò"R=\x0010á\x0013\x0014¸Ä0ê\x0015\x0012ÏÔÁÃ4\x001c")à[´â\x0011Y¨b4¶ûÈ\x0004Pê>\x0001L·âV\x0016Dä¼!%!!-V\x0002&Ì]\x001bÙ{D\x0011ù\x001dJ@nL{gµ¦9\x001d©þ± y)ë\x000eÁPÏÂ6,-\x0017\x0002u'pÓfåî·x¦ÀâP\x0003ºÜ2L*¸:µÙìIA	k"³?·aÓvØ°\x001fâ\x001d±µÏh\x000eqÖífÍUg»2å_ß+ýLLBù\x0002N\x001dÐ\x0017:\x000báÏ
æÓâJð	±CÖí\x001adSß7¾xÞ\x001bA¢|/h<Ñ­ä\x0002ç\x001d±Z½p\x0016Ô ¶h§¤±ÜWý¼{Qäp$
bÐ"&ûÇ\x001b²ôïFdÏbµ´íCô)\x000c\x000e\x000bë-\x001c\x0006ëü»}H}xÓ5A`So:Æ\x001e\x0002\x000cñ>FX§	Å¹éÖù¤\x000fòØ½	ædøO¨\x0008ü~}ý\x0006*Ú©6ÆNn\x0000\x001eu#¶íúÅ=¦ù9P\x0002&ó\x0010
ªò#¢ÿH5µáÔÏÚ¤!å6"úåÊµh \x000bÂnóÿ
fí\x001eÛ\x0000"*eú#^\x0006.hUyÂÊÆí9\x0016Zè\x0002Å`×nÁdo\x001b\x0007M¦\x0011w\x0017\x0000ÙAGºYìÉ{fÆ^&ØÓØkJeÄL\x001cñ.2l¨ö¹Ûb|
^¨];ïÌÉh;Þ£k\x0008Ã\x0007z\x0016C3Ý\x001cìõö\x001al8\x001b\x000ey8J­ÃD-=@éÚTÖPÒr´
àì½0qmú-\x0003¤:\x0005ñ
C\x0019K³¨M¹âµÏÍÚµ§,2ïül\x0001ê\x000eì®T!Fyb%¨1Ò:æ1EÁ{7ydp©íÇ\x0002!ú=\x001e/àÏÛÇ\x001c7àEÍ*íí£>n\x001fñ:vÌ<¦p;\x0003Wcl\x001e
H>GÂÎYÍûW:È×\x0004$8]&zö7Ä¯\x001b±tÍ\x0004©=ú\x000e)Ã=Ó²ØyïÙpº¾£\x001e½@[uÒcí¸§æ\x000b¸¸Ý}ClW÷\x0012Å\x0005 v\x00163\x001dõü¨g\x0010/ä#¹##g¤ýÞè¸\x0008^d}àÒâÓí}Óý=ïPÀ³ýðÌ\x001bÓ\x0018ð)
R£¿Íw¼³vÄ\x0016\x0007\x0017ßÝ\x0005\x0006ào	D\x0007L4Ö.¬éG¢gé×ãyQ½öÀZ|\x001bãM\x00046[ùs_¸èÒxÂö£'zp\x0018;æ¡L£\x0005
97]Ëðµ\x0003/Ö
 "G¸rµ_ãù¶\x0019\x0008 ´'ï¹¦,Çò@UZk¸Éö©ª,Kb\x0017\x001eWº¨"W\x0000úEtjSOUæ)ªÒÐ\x001d®Êò$¯L%LVÂbÀzÄUWt;Ü

ú¹æ'Sêà¨A[êÙéìðV²ñ\x0014×®Ãq`«¯ÖÄ\x001dÍÎÃúµ÷züA\x001aË:5!æ×£Oð\x0015õ\x0010»þ&u Êïä\x0005Ût¢\x0005p\x0005Özt\x0014þ¦ep±NbÈñ¢LÖGrr\x000ewÇËJ«­ãõ`êÍb^£
y q\x0012uBAPN\x0010×<bèî@ErTA]Ñ¸=ÏÁåTÿJ :uÞ\x0012%\x0006¦éAÁÇ6.¸õ|õ_ß\x0008£ÈÄÓ!à#¨\x001eF\x0002e\x000có8ÓæxA`Q<»\x0012\x001aK0ÿU'àwc\x000c\x001a"3
1³f:Aß\x001c¡Pô¡³Þ!nØrÁi¥\x0018§}\x0011ñxdJIç~f\x0016\x0001\x000c\x0008DsÞ\x0012\x0005í\x000f(\x0010²iïH\x0011äweÂ%ØÄw$ö9£3&ñºMdSh\x0012ÍM\x0012g§\x001bDw\x001aä@*v\x0006=/ûçàY~y°
)g4À,u\x000e)=únºò\o+¦Xä).Q¾\x0000\x0008OO$ë¥\x0008Ee\x0003g"t¾=¯\x0004;Oå»UÁ\x0014ùß\x0001õiO|fG|\x001c9piTß\x0011T	Ù|"üÃr\x0001\x001d\x0013ÙðÍêûóu\x000b"K{²¥h+º6ñ\x0004øPß]#«òÞyB¡¨Ç:m\x0011ÑëÇPî¯@Ëk'mNÃfp½=ðTüC\x0002_oÝWÚ¨_ç9ç&9\x001fwnÎEà$r\x001b
¶ÀÇt6|4 ­X³'·PEÜ\x0002\x0004Æev«ßþ
êÛAPªj\x000e«z
¹ ×¾\x000bØêù&Á»Ç
ðaA,\x0017³8fg\x0014W]\x001c×ÈÇ,\x0018.~'å'Ã{ôª\x001a¯gÅ6ÿ¢\x0017Æ³×ÊTÙc§Á¿àdSº÷xâ\x0011Á0Ç\x000f\x0008\x0008T§Ý¬Ü=\x0018|xöÆ5ÒÊbE|$5­)	ÿRádos]$½\x0004
ö9\\x00109U2\x0005Ö)Ä{2\x001ct­\x0008hàÖC¹¿ð\x001f´ð'\x0001Û\x0004\x000c·³/P,!)\x0015\x001c}tNû\x0008.½aÜoð\x0010\x001a\x0004ó	(Ûó,¿Á/âZ\x001eÊ´\x0015Ü\x0013ë\x001d\x0000ý\x0008\x001aÍáXÇÆKmT'@\x000bü\x0003N³»òìHjµ«\x0001¶ù\x0011ëx4\x0005×¶$\x001d\x001d¾â²)±\x000f7oA~\x001e£:\x001eêHçæ÷þ
p \x0018^½ÁsÖ¹Ì3<h  SG|V\x0007ý½	M\x000b\x0007
¥òà
ö@>·g±ñZp¼\x001c^~ùíÅö\x0000[*Rÿ[VHè\x0010Ë\x0017\x0010ßP»ÕÅHï×Â'°]lí.ÓY\x0016âÇÌ<hZí\x0002­Rív\x0016µü\x0013 ¼#p\êÿ±^Åº	Ã@tïW0b¡\x0006%N\x0014\x0003\x0013\x0003­:\x0018*uèØfH¨\x0014ÔÏï;ß9ÓD ª\x000b±-ä;ûÞ{÷ÌVOç¶\x0010	yç=ãy¤\x0014¨ÚöIåØ|«2,¼Ù_zs¥\x0004Ônp{\x001b>²kðP\x001d\¦\x00191S\x001eØLv§\x001d<CÓeÛpõ
önÿ`¢Ôø\x0007¼0
¯¾Ï`¸<\x001e\ËsÕU$HÇ\x0016ü»-ª0Õªt\x0012,òÌ¹4F)üÖ\x0018\x0001i\x001889ÃÚÉ¤|ÿ{Y¤ñü@\x001b	ðBÔq7ë.¯ê\x0003ãE\x001a\x0004ÖÈî7¥ÿ\x000fæ]åCÄL9À0ÒyØÏ&üëgûa9\x0012è¼è+À4V&X9õ\x0017vë¶ð\x001eÏªî¸²\x0010½\x0005û_V\x000eÛzöÌi"»fØ\x001avÊDq×Nû~{yTZ§²-\x0012\x001b#\x0003Ksõ¸¢4|¿ûÍ¢\x001b§º2=ì^\x001f~\x0004\x0018\x0000Öõ\x0013
endstream
endobj
173 0 obj
<</CS/DeviceCMYK/S/Transparency/Type/Group>>
endobj
174 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceRGB/DecodeParms<</BitsPerComponent 8/Colors 3/Columns 1347>>/Filter/FlateDecode/Height 300/Intent/RelativeColorimetric/Length 183369/Name/X/SMask 181 0 R/Subtype/Image/Type/XObject/Width 1347>>stream
Hì×}P\x0014ç\x001d\x0007ð\x001b\x001d\x001c3ÓtÚtÚ´\x0013Û0M3:Ó¦M§fÚØq:ÓÚLß\x001d_\x0000Q$¸(/§ø\x0012pÙZ$câ{41kd/M\x0000MfÔUÔJVWÂ
 w\x0007·wÀ\x0001ÇñzÈËÝÉÁq÷,=î@\x0011ÎxÅ,&ßÏ?\x000c{Ïó{~ûÌþö÷ìà \x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000Àà
 ¨\x0008\x0000/XÈ>OíD\x0000 |þ\x0012\x001e\x0018\x0018@G\x0006\x0000\x0000ÿMQ«W¯æççÍfµs\x0001ð]»v-//Ï`0¨\x0008\x0000¯¬¬eY£ÑèïÎjç\x0002\x0000\x0000\x0000Sÿ¨]RR¢v.\x0000\x0010¾\x0013'Ndee¢¨v"\x0000\x0010¾ÔÔÔ¢¢"BÚ¹\x0000\x0000\x0000ÀÔ¥(ÊáÃi...V;\x0017\x0000\x0008ßÑ£G322
\x000b\x000bÕN\x0004\x0000ÂwîÜ¹ë×¯\x0013BÔÎ\x0005\x0000\x0000\x0000¦.EQXe\x0018F$µs\x0001ðq\x001cGÓ´ \x0008j'\x0002\x0000áãy¢(Q\x0014	!jç\x0002\x0000\x0000\x0000S¢(,Ë2\x000c#IÚ¹\x0000@ø8£iZ\x0010\x0004µ\x0013\x0001ðñ<OQ(\x0010µs\x0001\x0000\x0000©KQ\x0014e\x0019$Ií\\x0000 |\x001cÇÑ4-\x0008Ú\x0000@øx§(J\x0014EBÚ¹\x0000\x0000\x0000ÀÔ¥(
Ë²\x000cÃH¤v.\x0000\x0010>ãh\x0016\x0004AíD\x0000 |<ÏS\x0014%"!Dí\\x0000\x0000\x0000`êR\x0014eYa$IR;\x0017\x0000\x0008\x001fÇq4M\x000b v"\x0000\x0010>ç)\x0012E\x0010¢v.\x0000\x0000\x00000u)Â²,Ã0$}Q+»òÅ,üXÁÀÃâ8¦iA\x0010ÔNäQ@AÀW\x0005Ïó\x0014E¢H\x0008yë ¦\x0000\x0000\x0000\x001eo¢°,Ë0$I\x0013ðùzí\x0016,\x001beÓ8Æ*Ùliìp?Ô¤«Ñ\Zµ ÷ryóÝ~ß$ÜÆ\x0003á=áý\x001d¶\x0006¹B/×Xí½þ\x001bäu\x001eàuÙ,U\x0006]Î`47:\x0007/ß[ÔÓÝd1WWê+kj­vWè[&®fSey±¡¥{àÁ\x001f<ÝmõUúÛ:No²v=ÜnÃW\x0005Çq4M\x000b0ñ\x0001GG»ÍRgkjïê\x000b]\x000f;¶jSeUJ7ù\x001fÝ^â\x001b4TËz}Mc{wâÜ=íõ&£®¼\_)×µ:F\x0016\x001bùÛßU'\x001bM\x0006Q®oí\x000eù@+ÄQSq»ôsÕ>¦\x001e\x0006=®\x0006SUyNo¬nwz\x001f\x000c
ðxãy¢(Q\x0014	!!\x0007x\x001dö:³¡rT}V«-õ¶Ö®»£z§×ao´X­
Ív×\x001b"×ÙÑ:&NìïöÆêfgIÃUFÜöÆÚÊ
]Eliq\x000c\x001d××ÓÖ`ª4\x0018ªFK§gdî½\x0012íënjðwCÿü*s}[/\x0019;Àm·Ê²Ù¨7X¬­	ÞT\x0000\x0000\x0000àÿ¾eYa\x0018IBðõ÷Õ]þûÆu«\x0013W§¦¦&''%\x0012¿båæì6å!z-±]:þûoi^óÜê÷?÷\x001f1&çN\x0006\x0015o_·E_*Ý(n\x001b\x00087ì¾¥ýÛâu;/YC\x001ed&Ïm¯¹yé_{·oJYA­ÛóñµêvGðÆ\x0014âq4UGZª6>våú
[ßÎýÔÜÑç\x001b³eJ¯áô¾õq\x000be²gÊ{î]öºZ+?;wøÍôUËDGÇ¬HÍ|çÔJ«}²v
¾48£iZ\x0010	GxêùSlæÚ
»ßæn´øB\x0016­½èÄ>&meBVt¿Ø_OÛ¶ïJC_¿µð­ëÆ¤³§\x001d!\x0002(×e»]|æèÞ-)«¢\x0017-OLßÅ]ºUßé\x000e>³^½¶0ÿÝ-k¨¤¸\x0015Tò7/­ïñ	Cíå\x001fnúÓ_´Ü²®û?x»ët\x0005\x001f\x001cHO_¼4&6qÝ³euö¾±ó\x0001\x001eW<ÏS\x0014%"!¡«òrî×Ç'kµ)CÅ¤Õ®ÛµóÝ
¤\x0016§\x0004J»]¾ùÉî×¬m.îê³.cáýé8ÚÑm=J¤Ö¬ÏÓuö\x000cäu6×Þäs÷em\\x0019\x0015\x0015\x001d\x0015µzóëG>)]#¹z{jK/\x001cÙå¯Ð\x0015q¯®JÜôÎéW·;\x0005ªø<\x000eáÓd§kãb£¢%¬Mß{©¤É1\Áþ·G{õg¹\x0007äÄUËãÒ¶î8vñ?V'Ú\x001d\x0000\x0000@\x0008¢°,Ë0$I¡Gx{]úã³Ò\x0004M>ÿÂ\x000b¿]WGB}\x0013æªø^þSæÙ\x001f/xÏâà¤\x0012\x000e§\øÏèù/E¾DÉd0\x0010¶]\x001f÷=æ\x0007sç\x001f«õx'o¥Ñ|ýö³\x0019¿úá7\x00023=bFÄôà>-ß_n\x001f:¸Út'µ³gN\x000blÞ´À'ùEÖekÔ!É{×Y{euä¬\x001aÍ·\x0017nÞ_|ÿÃÅp|íâ\x0004fM1sæ`ðEiÙ¥=ävàñÅq\x001cMÓ L8¢élô\x001f_ô???·àd½7dÑ6óûñµîÿwö¯ÿpJ¾ë?úùlÿ§ã2¸\x0010\x0001ÜÎº\x000b±ß|2"\x0010!bÆázXr¬¨Þåÿ½S¾xpÍHüÀ­yöÅWöÜ£
Økn\x001cZúLàqy[ÎõÎàe\x000cºnïüÝ/g\x0005CFD\x0004çÿ,å@|çÿÙ:©çy¢DQ$\x0013´Ç[9K H5#"Ø[Ñæ\x001aØpåTúlÿ¥'~³«¤¡Ó;>£ôdö²9Ã\x0013§O\x001b]ì_ûúS»nØ:<ã'Õ\x001cß\x0010ó\piy\x000f÷»9N>V;ÔîÁ^ÝWæ}?\x0018r¸À5Io3\x0006
ÔÕªçVEÎ\x001cî\x0011#ÝR{«Ñ5ô>j7ð{c¾«\x0019Õ-5//<Tâ¼í\x0005\x0000\x0000øÒP\x0014eYa$I
=ÂçvÉ'|z¨[Ï]²ußÞ=»F¼¾ý\x001f;ÞûàbMïC¬Xsþ`fb\x001cõF^ýÀ`¨/pußØ\x00107_£5oÉAÛð¥ÿ²_æAM¥I\x0000\x0005\x0015(°\x0000«â¦\x0000\x000f\x0012ä\x0010E·¸drh\x0004\x000f<g]Ä\x0018@ ²2(G\x0014\x0002\x0003\x0002ré°D\x0010E\x0003\x0012Å5

¢\x001cB3@ $@B®ý^¢ÖV\x0011§¶vfj×÷ûë¥»¿þú}ùúu÷Äãê¢äCÇRÒrèC\x0002ño¹Ù\x0017\x0016æúëÍÐ+Àáè8úG\x0013³3\x0012üUÁ\x0003vÄ¥7RÙl×£\x000cÅP³:äàøØ\x001d[å­¶^qÛ\x0008W\x001eT8ùún\x000eV_WKnf\x0015\x0014GbpäÎº?+Ü×\x0002uÖzÉ£Ôæí1EëÇKÞþ\x001eïðíB&ñx<JýªÅØ½ð
àúØyxW\x000e%Ê2}?%x#\x0006ØXÅ_¹ªHô´Ôó«Y·;9"Aoù:;#pOq	åì%ËE³Ì¢½Úêð÷\x00089{x4DÑ«»­y13?T_\x0010«\x0005\x001ayUÈvïéóñ\x001eîkj¥ó±ª~H1¶Ì÷5åÅù¢U?
\x0001nÄ\x0002\x001aW®øÌ@'\x0013àÜÄÉ÷ø%Ò\x000fGÜµÕä³@lz^I\x0005\x0001áÛB¡àp8\x001a&H\x001aðegÃ\x001c Hs9:".ùbZj*ñDä¦ufp&¨¨£LN4t\x0001³áæ²¤
\x001a\x0010J;0³upZIzðÚ*S¢À"5U(HLIOO³=5ýtpn~Éþ3/rcüíÀ\x0012=ãÓ\x000b\x000b¯à­ÍÁOC÷P\x0002u
´\x000bý\x00151nÖ é¬q\x000bM$\x0012Âí5Qp\x001f¹ZÝ\x000bÊeÏ\x0002E54ÚK¸JÊßï!\x000f\x001aB¨bÊdC¼¿)Ò~ã\x0001|ÜÉ]\x001ehðqX_?"\x0012þ.\x0015\x001c\x0001\x0001\x0001\x0001\x0001á\x001bF*H$\x0002À`0[çy]E\x0018\x0003PO\x0003c\x0013i\x001fE<îôg8S\x001c.oA \x0014µS\x001f6?º÷àÁ³×=C<|\x0008å¼~ÚÒÔXßHÞþ~RáLÄîzx+3%\x0011.TÕÔ6!ù\x0012Æ§\x0007v'­²0/;33;¿ä6õõ\x0008_!æöu2ëîÑ\x001f3{8\x00121ûÃëg\x000fó\x0017]#ó¶;©ÛÀ\x0000¢më\x0012]ÖÜüôí¸H4Õ×Æ¨¿UYþfBôelYä0©µ7³²r²³Èåõ¯\x0006¸Z\x001c©DÌíNo|ôìÝÐÌ¼û¡®8/7'+¿¨îå)¡²³ðÇº*¢\x0015Çî$R'_:7ÞÓz=Vo9èV\	\x0005Ï&x=ÍßÁjTpNÃ+¶x¨ù§dO¸sQ	Ïûç\x0000x»!zùÅ03´á§©\x0005lO\x0018\x001cE@²F¬×j tÇjáÊ\x0002^_é÷Vêï´Ç¿âoGø\x0003B&ñx<JýªÅxCx3¸Nv\x001e>\x0003b²Æýàb>¤éä¦j?;õIöÔôôP´(ì-w´3 k\B\x0005{Éòéç9^zð=ÆÄdÖ´KdÝôúËµÔÄõBesÓíëp£ÒD%Vw²¦\x0017Zo&F\x000b®jj\x001aV=º Íud;lf¨£\x0003}ÁX@ãÊ\x0004ã\x00151N¦ªÞãë\x0006\x0004\x000bl\x0016³ÐÇp\x00050Z\x0017}¡êýâou\x0008\x0008ÿC(\x0014
\x000e£Ñh\x0012D©\x0001yël-\x0004GÞê\x001bcB\x000c*qGSÉù]\x000eòq)xÒ» ÒË5 vPfëà´h©\x001f~[UÊ.~\x0006+w^ë\x0019\x001eãrg8d\x0004ù>=/.Ù^òä\+
laa\x001fS6>Ëç\x0002ýW\x0001ë¦¤|ÑÇ|u¦pBî>UÒ67ÙßVzD[G\x001d\x0008\x000e¦ßz?ÖÝtU^
!­¤F@Æïo­I\x000e\x0005*\x0001\x0005-\x001f¹£Íùq®às ®édqÝe\x0018à\x001cedv´Å\x0015(?
\x0004\x0004\x0004\x0004\x0004?-R©D"\x0011\x0008\x0004\x0006¡ÜB<Ïë*²Ä\x0018bë¶?©vøßu\x000b«X0û®f¿¿ûºµ\x001eþÇS
ÛU´;ÈÇÑÎ"â{bí;\x0001hÃÙ-äÓ\x0007°\x001eÎkím,­lìWoô\x000eÛwøIï¨@îcÓG#ÅG\x0006z­²Ä\x0018ëë\x001bÛ®v÷:\x001cßÄ\x0003\x0013HUÚ\x0019{\x0007ì¾c?³Dbù\x0000ÒYqí´³\x0007ö\x0000ñnßBOEÔvguU\x0015\x0008RÓÐ4\ë¶	ýÍ\x001bi ]
su<|2¸(W:jJ/DîØê±Á\x0006mdddl¹Æe³\x001f6-¿¢\x001f\x000eB$fÝ=\x0014\x0015ììé\x001f\x001a\x0019µ7Ô×\x0001F`l\x001d¼°ç¯ßy»´\x0013.ò&º\x001aÈ¹ééù7\x001fäGÂ\x001f£\x001c7Ô\x0005Ë\x00042½»»%?\x0014\x0003:\x0013È9Ú
#£Oïà­5 ej{x2Ig11H\x0003rvî	°1\x0006óy`\x001cÁQ¸	^\x001eòÚ\x0000´«¼÷VtM/ðFèÉ!ëõ!È&4¦èí¯ÿ÷\x0011þHÉd<\x001eO¥R¿j1~/<À\x0019\';\x000fÊ\x0001±DªÄ}ÿbðz]hoPF\x0012µD(ì-w´3 k\B9{~3úªºàFÎ«ÛzØpÆðYí\x0019Öúp+ÿ]F=ý~éûÀ£.&:&\x0004ZA[Ir¸\x0005\x0004ikÚarD²ûÛ,ÞF`×(Uø«C, Á#\x0013/Îvs²\x00029²*êbU§X.ëMs£Qó<J¬gý7§ð\x0006BÁáp4\x001aM"Q>ºòeI;m UK\x0013Ä_¤Wµç=!\x0018Ûkïge²1zYÒ\x0006
\x0008¥\x001dÙ:8½´|Éøm)\x0011ö
\x0006} Qð\x001f&\x0019li¨¹q|»ªuJ!j:\x0012±\x0019ìÙâA\x0017òÚOZiCÉÄ\x001bLàR²Èúy;\x0006$(MÈx::3ÚVKÊÍ¾q³kD¾ßÿâF¸<æÍ\x0005-\x001fºèÅç¼@~\x001bèù\x0017öñá7{[\x0016\x0005Z\x000f}³\x001dÅ3\x000bâ_\x000c\x0001\x0001\x0001\x0001\x0001áOT*%H\x0004\x0002Á`(·\x0010Ïóº,1\x0006pw½v3öTZnæå\x001f\x0014ü=9õZÅ\x001dúGØß\x0015í«\x0007Wd-kç}W\x000bsþú\x0017}¸
W5Ù}¡¸'å\x000f3\x0013°p®¢gåî\x0013\x0018èíb\x000e«!ÿ3·Ã @Ow<Èô[	K9y\x0005lßâ`¡%/ð[ãêgû®\x001fÂ®\x0000\x0001¬vù©O$\x000f /³âAÇ ï\x0010ÿf®»rO°:j\x0019°WS¬]¶Fæ·Ï,°UÚ¶ä\x001e!ècæÞýã¬ßzÜ­ÅÆm~Þîæòg]«MÄ²v¾L"ê+]og\x000c)Ðwð\x000b\x000eòZ³r<¨m{þÅ~¹\x00075uåqü\x000cd\x0012\x0006:\x0010\x0006\x00115\x0003DÌ\x0016y
7º:Ò®\x0011d\x0011\x0005\x001f5ø(>ð¢1\x0014ZVQªh]ã#¬¸	>v5B\x0006hX\x001bAL\x0011\x0014#5DBR!@ \x0018ì¹\x0011Ymö\x001fÞÏ÷w¿çßùÝû;ç÷;(·R
ý6_*3Î´[s?Rú°¥®lO0Ü\x0007\x0001Dqo5j B-+Éã\x0004lðÓÖ\x000bd]FCsàÀÚå)éÂ»?ç/ePmÀTæv®´çõº;?nr#\x0002'Jä\x001dY©1\x0013I\x0018|PØ¢ÿã_\x001fc<ÁãñØl¶X,\x001eS¡\x0012%0\x0019ðo¦E\x00157\x001b\x0011\x0015º,{\x0011\x0003\x0016ÞTúÂ'Ï=e\x0001ÖÞ\x0005W+ªÚ`e>¬Wð}éPàÉJç«ßëÓ°ªöÊ\x0001æd[¸hÐ\x001eá½ZÉ¹ïc\x0001 9ÓvÔô\x000cÁ.eèñå}«ý\x0000 Ý*UC¶îôANâ¶½?^¾úïïç9ØÚ\x0000\x0010/éCçBûå{§ÃCÆ-öÛ\x0002Ù\x0010jÓËsBi®pöéË¿9S÷ÃÀø\x0010
,\x0016K" \x0008bU \x0015e.¦\x00030ÅmEþ£æÎçmm
yya.k\x001eÅru\x0005ªTèÌæÎÊ¢@[@tÉ«nÕX¹½\x0006\x001e\x0014g¯ð·]à7\x0007¹§ÏðÎ>uê$÷\x0004ï|±H®\x0019¹hßÉ ²<+&\x0018\x001e\x0007ä èï*;Ì½÷S<)$\x0000"6î\x0017µÀ÷FCoM\x001aÍ\x001dZ»r«z3ÚÐt<\x001aê2mc¼³áÚ±
p[ÉË.6÷¢\x0017\ÓÕ¼­3qÀ~o¦ø¹vøC1®1L\.ÃáH¥Rë
£N+/ R&\x0002ë\x0004nª\x0018QvJR\x0013Þzk\x0017¹£PÒ
ß©\x001b¯LqÛW*~í\x001f]îuºÝ¦3·ëÕ?\x0015¤£¯í)[Ôµ¶Ê¥zOwõð\x0011tàêÑ]«>\x0007Â\x0014(GêùD7£\x0004l¸ \x0018în}(:\x0018\x0015ê	'ðð<q£ª¡¥ßlî¸â\x0017rA¡7µ¢_\x00068A	Égn|þízü\x000eoõß|ÉDè\x0004uVJµ\x0016\x0019n¾\x0014\x0016@
\x0007úÜUGEÍêçuWöÌ¦O\x0016Fì
aÇ{Ù÷ìîéÌ\x0004Ë.q3·\x0014Üj×÷×ü=Â\x0001\x0000<\x0008>róq7Ô¨j9\x0011dÔâ[úøA×£jëT£EñÆÖ¿ÐÀuA*WÚ3:'Òp2m×Û1wÛz@ðþ\x001e
ãO\x0006Çc³Ùb±xLJÀdÀ\x001f\x001e\x0016UÜlD¬Õéê²ìEÁnV\x0012}æ¢Í¥ð§3èø¾tX¹{²Òùïù	MÚ\x0006Ñ?¶Ì±\x001c\x001dvS³ErEmÉ\x000fë \x0003D'µUªAØ¥èê/î]	[	\x0012Ùb1
ý=ZÝK
Ý
g¿&Ûãà	/é³ÌgÔ÷VdÌ£Ú\x0003à\x0015»ñH.U\x001e7\x000cÛ\x0004@IH:.û\x0003ÁÃÀøT\x0010
,\x0016K" \x0008bU \x0015e.ù\x0002\x0000[G¿¸­\x0019YßqØkbý§»X\x0012ÕÆÙ{KY£
Ê:$E\x0019¶è\x0010WÝª1ü~\x0007ÅÙ_\x0007ZIvâä9'\x001f\x000f\x000c[_ý5Æ¾\x0007ÿÚ\x0012áêXÅùo7hïï¢»Ã|\y´v\x0010j\x000c\x0006­ý9Õ\x0016ìÜ*ÍÃ
ªºë»æZ\\x0010}£iÀØrýÈzoøèB`\x00166õÀSÀüôÊáÍÞð\x0010\x0008æ¿\x0018ü¸xb`````WL&\x0013Ëåp8R©ÔºÂ¨ÓÊ\x000b¨\x0014´\x001aÇ\x0013Iö\x000ed2Ùq\x0004;\x001c±$>·zô¾o½¹wÃü	ÿ¯\x0007¼ÒÏW·Ñ;[^=\x000f\x000f/dàu¦TÙgèiK/l&à¡%øXií\x0003©àÛp"\x0000¯N?ê\x001a@ç\x001aèhþ¹¼ðÒmÙ6£¹åüe4X­3"ùJÑÒÔó8\x0014£ø'óhÅ¡ý)yi0\x0000Câµ¸Ó)Ø¾Ò\x000b)~¡E!³þIÖìYÎP\x0011¶,§üÅd¨v\x001bë¯Ð©Þ\x000cn]¿Ny1"À\x001d\x0016H1É\x0014#æ\x0005\x0011p\¨ó]Ô·ß=¼k±eÛ\x0004ósÏa[Tsm8\x0019F\x000eæÝwCªF\x0013a±\x001d)køut8bÐRfÓ\x0008ÀuA*WÚóêãÍ]×ÒãÃÑØ»¸:/wäl\x0007\x001ffD%s+:>ðScsx<\x001eÍ\x0016Åc*T¢\x0004&\x0003þ?ô°¨âf#b²"Qe/
fIv;\x0007GG\x0007\x000b0Ñ'G­K+WÃTÖ7ñ}é°eðd¥óÕïrG/\x0017íO6\x00176v\x0013)É\x001bzÌ/\x001fñ³\x0012fÀür¢®«Ré`Öê\x001e_Üä\x0003\x0000ì±ön×àh³aèmXN\x000b ¬|IÅh2\x001aºïì\x0013àf¥õ %nâÉ>2p\x0018\x0018\x0012B¡ÅbI$\x0012\x0004A¬
´²¢Ì\x0004ß·\x0013À\x0006O \x0012ðø	®ëÊ\x0017:TÖz»(#Ð\x0016\x0010\x001dbòª[5ßÏ3ð 8{e\x0000:`û\x0019ÌsKºÛ\x0013q\x0013è³gåÃÖW\x0005LÐ¢ÝADô\x0006\x0007ÄMéWA£¡ÿþN;	èÝyU½¨Á ±½¨¶\x0000,dçViÞXº±dm\¨Åq²³çúgZhlº|(å\x000b\x001cÀ¹\x0010cÎ+5/¡åéÃ½¡e\x0012)æ|c·îãâ1^1L\.ÃáH¥Rë
£N+/ R&Â+wþeÏ\x0006ôº¾Þ×hú´\x0003CÃo¨»JH
x][ì\x0012Ô¶\x000c Vúiå¡8<ÎæU½A"ÙHD\x0002nD¶íWKK\x0005éAD@p¶áò\x0013µîµk&\x00041Yº¢D\x001a\x0000\x0014F$_i0ZLõ<N"\x0005à(þÉ|%ZqtW¬Y\x000c\x0014§YÌ}JÄlt
¶¯ô\x0002`_hbÈ4\x001eú2d\x0012\x0000~ñÉ×ÚF\x001dV\x000bv®	Û\x0016w¥\x000fµO\x0005\x0014\x0000Ün;ÛeñÁlV\x001caFÂnÄ?.IÔ9v\x001c[ÊÒVÍ\x001dÙ\x000fÁ+QvëQsû½ÿd;Àéñ_åÝnì\x0016U0'\x000cÃà±¶ð~Kÿè\x0004¡W2F\x0000®\x000bR¹Ò\x001eËâ©ýjô\x001c¸\x0003 fê­VÝN[/È\x0008¡;\x0003à\x0011½îäó\x000fúÒ\x0018ã\x001d\x001eÇf³Åbñ
(	s\x0004ÐÃ¢
ÉD]½(À\x0019Ø1"·\x0017ÿÒÕÞdA¡xªléT÷\x001bÍ&½^Á÷¥Ãðd¥óÕc;SËÛ\x0018íã¦\x0003ÞÅ1úxí\x000b\x001dÚ\x0015ôÞ;\x0019\x000b\x0000Îº®ZZtuÿc¿LÊ²8~\x000bJ
¨h	\x0014 Õl5@\x0003²\x000b B)6¸\x000e\x0012¡\x0003Ð6j\x0011D\x0008l¢h\x001c;(¢\x0000ÚJl\x0018Û6\x0010»kD{\x0006PY$¬YØ_\x0012\x0012\x001eIæ¾è¡gjz>t·ï÷)yçÜÿ½ï¾{î9§*+b\x0019\x0000z61÷ù\x0012ùÛá(ì\x0013¨DC\x0002¼#¼)¥ì±wÂ²ug7­°\x0007ÿeXd1÷Ø4\x001cß\x001aL&D"±ÙlB¡Ñ\x0001áÒ¹À¨!\x0018oß îÀþ/\x0012\x0012('Ï3ê[ú¥èÌ¨î\x0006zª§>Ð]¸ùôÃî\x0011ôC\x001dñóÊ¬ð%\x0000,2	-á¼êxÃë¡\x000e\x001dþê\x001bÉ½\x0018j½[\x0012á¤3O\x000b\x000b=[Rúõ\x0017\x0012ì1?Mr´Ñ\x0007 (±°\x0011»\x001d¦PìlG\x0000`\x0013¹àáÈÌðÐ}¨ãVkÝæêæ\x0011©zu-Õ\x0005±Î0í¾úfT\x0006´Ý(Úç¬\x0005\x0008æËÞá#rÍ«ÁÁÁÁÁÁùXQ*T*599Ãáhö"­evÖ¦0én>ÁøE9Þßòc×Î\x0016×F\x0001§¿kÆº×Ia+«0p6÷DJ~Qnf^~Ñ³gÏ\x0014Ð\x001eòzÖ\LtÐ\x0006ó\x000c#®u¤êy\x0011DØùäy\x001b\x0004Q©zèûÃ\x001daÉ°bmMjJ]_´§GØ\x0002-+÷¸ÎIX¹\x000cÝÞ¾\x001c\x0000\x0013¯ü\x000eø^Ë\x0000ãPÄb\x0000,ÜVÑÛ'T/3ý½
\x0001X\x001a\x001aWÕ6»bÁÃv\x0000\x00188x¤ÞåIÚ+}=¬á<a	\x0005\x0015ê¶Úä\x0007û\x0016÷mQu\x0003s¼õØ£½Ä\x0000]ìå\x000c-]¾¤sºÆ¦f,CÍu%»L`3\x0003Ö4¼\x001eODMu\x0005ë\x000c¶OúV¾lVCÖí[ã¨\x0003Ì\x0012¨\x001cÌS©êe&­^¼\x0000\x0000ç­ñ×F¦ýµ!k\x00000\x000b<Óó\x0002çcF£Éd\x00165§ .,Ø\x0013\x001eÓ%¾5ý]w²7»\x001b\x0001c¿Ð¼\x001f§>4+äòö
W'\x0018\x0010ö¤
¡F	%Ú}ûX°9v\x0005|âùÙQÆÏ|Éi¼élÚN\x0018\x000eFÆ?\x0018ÃèB[\x0018yQ0Fç\x001bÙ\x001e|"Ì6\x001bèh/J4$h\x0003àM)e½¯w´<«¿Çjäp¸Üú¯C\,aKãw §®ï?l\x0010\x000eÎï\x0001&I"Øl¶B¡Ðèpé©;`>´²	/ÕÝ'\x0014\x0008øý|@4<ÈÞ\x001bÑÝ@O]®\x000fô\x0016Rz\x0011å:âçY»Í_*\x0007&Ð±)5øO3ÑvçBÂZ\x0003\x0018`Þ'\x001bS/ßo\x001btjrèQ¬µ¥\x001eL²\x0011éf((èúÖÅÜ\x0004+\x001er\x001bG \x000f*ë¾³ÑÇ\x0005ËÀÊ+(£¶Y(]0«ì¯\x0003´Ì\x0016ìdðÆ±ÇoÅ\x0007Âôl½µäÙ°\x0004Õ¸\x001e\x001c\x001c\x001c\x001c\x001c\x0016¥RI¥R9\x001cf))ÒZfgm
ón`lJ}B5)\x0013¿\x0003AÄRlºäï¡R¢lM±\x0004ÿ\x0016Û\x001d\x0005Ì\x0017\x0008¬\x0018:~:·\x0015`ÉÛ|Ù5©BGú[~(MLLËÎ­àöu=ªÌÛh\x000c¶]äõ&\x0001&&züÝÉH_ÿÍ[w\x001e{Þßtnÿn;\x0000L­.x¨ç\x001a¬Iù\x001cö$z¶Ëã*:'a!!ü!zÛ
uB¬\x001f^:\x0010\x0001\x0004\x000b·Uôö	¢ë¤·\x0015\x0000Zö\x0001\x0011_Ï¨ -Õû6yÁQ.\x0015¯Ä\x0013U>îÐÅ6ì`\x0019\x001f³CÝöSÁ~°oqß\x0016U7 iÿd¼Ä0K.\x0014oï÷çÂq±H(èíãÊUâ¾'5\x0014_l'\x000cÜh?uÀ2æÉ­ÂÅ\x000b6*}Ò5ú®êR £uûÖ8ê\x0000ó \x0004*gX­­\x0018bgú¸.õxJ«º°\x0012?=·Þ\x00136.fë§;ýçÇù\x0003A£ÑÈd2ÅÓCP\x0017\x0016\x000c\x00068­\x0008¨hÈ¥\x0013R\x0018y\x001bÆ\x0012©\x000c\x001e1á÷Ù¡îF`áÏ2ÔPÊ+äòö
W'\x0018\x0010ö¤
¡\x0006\x0007©¨¹ËÇjú\x0016X¾)ò*|Øj©Æ[ª\x000böêÃ°5qO¯íÁB½&7j\x001eÐ¶²ÜQÞLÎÊ £½\*Ñ\x0000e¼)¥ì±imTöº.?ãH\x001cñ ~\x001f\Ù/ÜãOÐÉ=Rý\x001a¯óqþ\x00080L\x0012Äf³\x0015
F\x0007K?¾Ý\x0001hÙXÅÔÏ­ÓÝ@Oõ$\x0000Ý\x0005AE
mBd
!\x00082·å*ÕXSev¸3Ìf»«øÒÿ.|$¯J3#í\x000c±èÖÕ'¯=h\x0013\x000e
\x0007úCÃc¨¸ãä\x0006\x0007sì!\x0019<JÞy+ÉÐP\x000fæ¿ìk]*Õ¤ éb¿úr0òÚt+JD\x0002~O¿\x0000Q¨Æ[o\x0014Åº@ÝúïyRjQø%ToftÈ5ï\x0006\x000e\x000e\x000e\x000e\x000eÎGR©¤R©ÉÉÉ\x001c\x000eG³Ç\x0014i-³³6éÕÞsm\r~Q^nö[2)i9%èÏD0Eóª²W~
»N`f»\x0018ó¹¿5a\x001e\x0000Z7¤3\x001eH\x0015b^}Ñ\x0012,{\x001b\x0007\x0016_»É¸X±'`±¥ýôM"tìEMN:½\x0004}^|ùÊÙôè \x0007õ\x0003û½î¤hwÌhí³'óÒå+e§\x000e\x0005/±\x0005¼½g\Eç$Ìð¬È-«0\x0017\x000bÈôs%7Z\x0010W}´\x0018)n+éí°\x0008@\x001a3bW\x001aÃA\x000b
Ý3´òòóiQ¶XMBðHiC\x0014hWÕjw+\x0000lÂ\x000eñ±ºí§ý`ßâ¶5ªvàÃÍA^\Zo0_W½R\x0003\x0007×¯2²()GÉIñ_åÜl|%AE?ß¢ª­{\x00149\x0011³Ã\x000bû£³ôÂ#ÞÈÔ;%\x0005:r;Þ×A\x0007X\x0004\x001d¢6\x000eO\x001bØVEûb©½ó¾Ü¿_>\x0016ég5\x001fn«G\x0008ùÛáÿÿqÀù\x001dC£ÑÈd2ÅÓCP\x0017\x0016ì\x001d'+û]	9ù'rOädgeeÁ0¦äºò\\x000cOÜÝ-\x001eF@ßo]ê}
u³B.o¯pu\x0001aOJ©\x0010~`Úê³CÁ[­\EÎÍ?||äpüñª¦¶7gÞ¢î\x0002\x001cC\x000e\x0017RO&l_c¥>ßÄò¶	ôÝèh/J4$ÀhõJ£5LOJZ/n7m\x0001°tÝòÍÕoNì\x000f¾4¢ò\x0019í¿z\x0007qp~\x00030L\x0012Äf³\x0015
Í­+Â¥\x001fßá\x0008µé®ë\x0002\x0019:Nw\x0003ý¸×\x0002 ¥ã\x0018\x0014s4#+?ÿ\x0004\x0016ìÙXÈgPÒj]¯çíiÙbáöÊ~É:ïÓ_ûOöë>¶ó\x0003ø(c9\x0008\x0003J\x0006Q()h!\x00102Du¼T@òR\x00081àZÊKv¼\\x000f\x0006d+\x0013e¼m¥Ü´ÞVµ\x0014
q4¬b\x001c\Xn­Ö´A«\x0016J\x0006ój8ñËÙ>?÷Ø!Á	¶:y\V~ÿ|÷<Ï}ïäßý[R8¼»ºuzýzö\x0017{öïew½¶9räý*\x001fvWüÙpÃ\x001b5qÉ®·Þ9ºýqáæ¹êÍ\x000b5¡óöù\x0014\x0014>lÊ¥;ùë\x0012v×.fëö£\x0015µmªRûç£ëu³?a\x000f<ÎÎ)Ê	÷¨y\x0017ë\¾Ø\x000f\x0003\x0000\x0000\x0000xra9cYVåØ#^wÍ»#2,T<\x0019\x0005KN}í±ßüyNüLºvÿ_!wå¾¹æpO\x001e3{mé-§ßUûûçg\x0016\x000cÕEOÕY2Çm*\x0015k]¡ïÞßÏ\x0016çf\x000fÓ÷Y;sìÔ§k:p°¾ôàÆðçC/uè\x0010S\x0012¥\x001f¿®ìn \x0018
\x0005¾Ú³qÁ£ó\x0005Çª[ÿuþõµO¯¼I§jýámJË­ËuÉÑ×H6LX¾ã`E;¹Õ`ýyä*#my×\x001e¾y²u¨=<÷é\x00145nÑêr{ÿg£v6q¢8¹Ïr½²¶\x001cû¸+\x0014ê¬«Ü=uü¤AÎXò&/ânw)8j)¤:­ÓFMË­oW>è9Üvy÷¦ùÃÓú,l\x0018½|ÿáë¥\x0001O6ç\x0019\x0011E1î\x0008{ù²¹\x0013â±5eÖi\x001ar\}cÁx#¥+¹·"ÆÆ\x0019ùýµ§Ç"È§V3\x001f8\x001e;ÿÝ£sÍ¸Ñâ»ÿÙ\x0007;ù9zLòÒ7Q0ª\x001eTgã?N¬0wüSvóÒÃz@ªz÷Òê\x0005QµD
²ddÎ9Xö·Æÿõñ\x000100\x0008@Ó´$I\x0008ÅþvuUî^ü\x0014i½Öç\x001c¾`¼u\x001a®¿¿g!N½SÏTUW^8ôÓÑ¤2ÍÅgZ<ê·å"õÙuqýsb÷»Ñ¹k.yIåÚ®¬+Þ§¼M\x0019E{ÏW4B/½3âÄÉë¯Hº³\x001b¾\x001dÝðtCY¼á¬#ry\x0000\x0000\x0000\x0000DÃ\x0018s\x001cÇ²¬,Ë±G Å÷Ü¼\x001cÞöd*Vñë¶ÒMy9¤í.xyßµ\x00062-\x0018r~º½¨ ttÓôÅ\x001b.:É±ÀÝ\x000b%ÏO}:=9%5Õh\x0018µtWÙ-§g³¢8ï\Ù?77Ûj1¤
úäü¢ý§>këÞß\x0007ê®\x001dßñ¬Áh4L©ÆY¯ü\x0013wèµ¥\x0005é¹EÛ.Õ\x0005"cn|hÓìl*Ig±ff®üã×íwÍ\x0014;íÙ÷üjä2JkÍåßmj2Í\x0016]\x0012µhã«5;U¶òÙÓÆRTá»ÏG>RÈ»o/CQÓ×lÚû?\x001b_{X2?+Ãj4£\x001fÅdYXò^¥3\x0012=ÐPQ2i|ÉbÐé3&L|«~\x0010B}÷%8è©|³xòpÝè\x0015¯óU\x001dN¨Íï1+&ZõFÅb1èu3_:péV\x000bìj@?<Ï3\x000c#bÜ\x0011«/\x0016O';ë~Ul1êL#\x000b§ì,ï\x0008Úo\x001cYù£ljä¼UÇä\x0018_\x0011È\x001f¸÷á´I¤ 6¾q¹­ÿiíóÖZ­Ö´4³Å\x0012U\x000e\x0016³É0vÕò[á\x0012òØom[aM7¦(jÆ
åw~\x000b©-_¾³nDF:e^þ3Uî¨\x0004õ×N®û\x0003*IoNMM\x001b<dò\x0016þfc\x0017\x0003øÎ\x0010\x0004¦iI\x0010Q«úì¯VO¤\x0006çM|õR»?\x0018o¦g\x000fÌÊ2¢k1RÁFóÔßVØîU\x001f_7J\x001f3þî{ÕoËEÌv¢x~~1¥Ïi¦A\x0019\x0005\x000b_æ¾èëªùdËª9\x0014dTès;Ëªí®ðñÚOË^)
wÞèé\x0016Ò:Ó
ÃÖÊÿög»\x001dÛ5|Ùl4ê²f¼°ïÂ=_BÏ\x0011\x0000\x0000\x0000ø®Ã\x0018s\x001cÇ²¬,Ëq\x0007!Õãq»âðxês»Ãc¼>¿Ú½«ÆAßÃi^¯Ò}\x000c©\x0001ß\x0003½ÑVgkhjqty}jïY¤ú½]möÆ\x0006­±ÙÑÞé
¨Áó8¨z]\x001d÷\x001bm¶&{»ËëWÉZÇåö5zG¸íÍ
õ¶\x0016§7\x0010Äd9ÇExÕÞ
\x0011FAÕïîêlmj"+5·w¸@°7\x0004R½\x001e2Ã£ôÜ\x00049\x0014P¼ä.¼O}ük!|	¯;ö³!\x0011{Âã`Àër´4ûn¶·¹ü}ïº÷\x0006ý
y^nÅ\x0017\x0008â¾×\x0008¸:\x001f´4ÖÛÈci}Ðåö\x0007cÍ\x0007O8ç\x0019\x0011E1î\x0008¬*7v\x0019»=È\x001f\x001c«È¿Tu\x000fo\x0003Ï\x001f£ Hu)ñ^\x0014JO5cRS\x001eGKC­ÞÖÚöË\x001fQY¤fHe)ê¨û\x000cy\x00118Û\x001dMdr­ù\x001b·\x00121\x001dÿ[ Ð4-I\x0012B(æ\x0000R\x0002¤WòÄjJ½Â­Î\x001b¯q{Â];\x0018®vW¤þw5\x0014îØï\x000f¯¯÷AZËÙÖÚÔS¡\x000fû]¸÷úbÎ&ó\x0015µ§«áðf¢³ì\x0002êlö¶\x000e\x000fÔ7\x0000\x0000\x0000\x0010\x0007Æã8eeYÖ:\x000b\x0000 q<Ï3\x000c#¢ÖA\x0000\x0000\x0013\x0004¦iI\x0010BZg\x0001\x0000\x0000\x0000ÀÀ1æ8eYYµÎ\x0002\x0000H\x001cÏó\x000cÃ¢¨u\x0010\x0000@â\x0004A iZ$ÖY\x0000\x0000\x0000\x00000pa9cYVe­³\x0000\x0000\x0012Çó<Ã0¢(j\x001d\x0004\x00008A\x0010h$	!¤u\x0016\x0000\x0000\x0000\x0000\x000c\\x0018cãXeYë,\x0000Äñ<Ï0(Z\x0007\x0001\x0000$N\x0010\x0004¦%IB\x0008i\x0005\x0000\x0000\x0000\x0000\x0003\x0017Æã8eeYÖ:\x000b\x0000 q<Ï3\x000c#¢ÖA\x0000\x0000\x0013\x0004¦iI\x0010BZg\x0001\x0000\x0000\x0000ÀÀ1æ8eYYµÎ\x0002\x0000H\x001cÏó\x000cÃ¢¨u\x0010\x0000@â\x0004A iZ$ÖY\x0000\x0000\x0000\x00000pa9cYVe­³\x0000\x0000\x0012Çó<Ã0¢(j\x001d\x0004\x00008A\x0010h$	!¤u\x0016\x0000\x0000\x0000\x0000\x000c\\x0018cãXeYë,\x0000Äñ<Ï0(Z\x0007\x0001\x0000$N\x0010\x0004¦%IB\x0008i\x0005\x0000\x0000\x0000\x0000\x0003\x0017Æã8eeYÖ:\x000b\x0000 q<Ï3\x000c#¢ÖA\x0000\x0000\x0013\x0004¦iI\x0010BZg\x0001\x0000\x0000\x0000ÀÀ1æ8eYYµÎ\x0002ÀØ/ÿß4î3ÿUû\x0003ªíIî\x000f«ØÐ&¹hóRzV¼©Ôëb2;¤ê8©Q66 Y`RÏvá;\x000c8\x0014'øÎ\x001f¾ø\x000e\x000eccªn^Ù\x000fv\x001a=$Ë&µ}!\>ñéyë¥HV¤ã}çÞÏçyPËétZ,ÅÅEÚFP(Tç
Ã}}}\x000cÃìïïÓöB¡P(\x0014êõÕÁÁÃá\x0018\x001e\x001eN$\x0012´½ P¨Îåt:-\x0016Ëââ"m#(\x0014ªsÃá¾¾>aö÷÷i{A¡P(\x0014
õúêààÀáp\x000c\x000f\x000f'\x0012	Ú^P(Tçr:\x0016eqq¶\x0011\x0014
Õ¹Âáp__\x001fÃ0ûûû´½ P¨W¦\x0003Ú\x0006P(ÔÔ¥K:=òQ*}¶\x0011\x0014
Õ¹þâò\x000c\x000ffØ8m#(\x0014ªsÍÎþýÔ©wâ\¶\x0011\x0014
õJõõ?jìléÞ< \x001a¤û·+óÖ\x000fß\x001b8õ³kO«k1ê\x0010MX\x0001æÚÿÞ[ o\x0006Ñ\x0000\x0008ïøÇ¿6ÿò§ÿh¯\x0008\x0011ê~\x0010
h·¸2WÄ ëÍ\x0002{é¼õ'oýðêÏ\x0015²së÷±Ðzdå	Ô \x001a\x0003\x001dû__m<|øMK¶UöÆ\x0019>|\x000eA\x0010D
[p3ç~3`0\x0019¿ï°\x000fÞûº%D\x000b Êw¼ïGý#[¿§n\x0006Ñ\x0002\x0008¯å=ãÛ?~ã¼Íý\x0003u?\x0006@»¶/úGîø>à1È:åóöÓ¿xó\x0007ß»ø»wã!;ÜÑÔ-!Ýæ\x0013.t¹n½ãµð3í?iûA4cæ\<tv[Y}øÍ
ý³!ßç¼«K×\x0011\x0004AÔ &\x0003«k#¿}§ÿç¿^²\x00153!ê\x0010ø>&ÖÒ7¨;A´\x0000Âk\x001d~÷éGÎ\x000b\x001få u?H×\x0011®çxüæDôÚÂ\x0012ë\x0013i%|áÜûo½ùë³¡Üí;¶%¤»\x0008É\x0000,kÉÙÉÿÃ\Â/,auÌ5Hñ×_m\x001c\x001c\x001c´T¨¹SE¦B8\x0004A\x00105(y¾²\x0016?3:4h6Ýð9¶ËËÔ-!Ú`\x0002ÖôüÅ\x0012XlËËö3_õ¿ís¯Ôý \x001aÀÃÿ,\x001e\x001a¯\x0016±ÄúäK%ãt5\x001azü/×âí;¶%¤Ëä\x0013Òêâ
ëacå5\x0016þ¤o	Ñ5öÁî¿[êÔÜ©ËB\x0014Ær\x0004A\x00105({Ä6:4h6\x0005}º¦n	Ñ\x0004Â3\x0001kzþbµ%Ö'\x0010^»Í2ÐßëuMÖJKÔý Ýp²\x0010\x0014ÇCãJ\x0001K¬O\x001aszÂhèñ{¦d}´\x0008Ðwt\x0013ÂK¹Hq³Á±r»Ä<}KfÀý`·ÙR§æN]\x0016¢Ô=#\x0008rb \x001c4\x0019ÛèÐ Ù\x0014ô9`\x0017 o	Ñ\x0002Â1\x0001+¬\x0000Õb¾\x0019D\x0003 ¼ve ¿×ë¬pËÓ#\x0018¤8\x001e\x001aW
Xb}Ò¨dÓ\x0013FCß3%··<º%¤Ë\x0010^ÊE²
E\x0006K¬o`ÆÞÛm¶Ô©¹S(uÏ\x0008\x0018\x0008\x0007MÆ6:4h6\x0005}\x000eØ\x0005è[B´pLÀ
+@µ¢o\x0006Ñ\x0000\x0008¯Ýf\x0019èïõº&k%Üòô\x0008ád!\x0006)Æ\x0002X4*\x0019çôÑÐã÷LÉ"[\x000e!¼d\x00197\x001b\x001c+\x000cXßÀ½·Ûl©Ss§.\x000bQê\x0011\x000491\x0010\x000emthÐl
ú\x001c°\x000bÐ·h\x0001á\x0015Vj1Eß\x000c¢\x0001\x0010^»Í2ÐßëuMÖJ¸åé\x0011ÂÉB\x000cR\x001c\x000f+\x0005,±>iT2Îé	£¡ÇïE\x0016·<\x001dBx)\x0017É2n68V\x0016\x0019,±¾\x0019{o·ÙR§æN]\x0016¢Ô=#\x0008rb \x001c4\x0019ÛèÐ Ù\x0014ô9`\x0017 o	Ñ\x0002Â1\x0001+¬\x0000Õb¾\x0019D\x0003 ¼ve ¿×ë¬pËÓ#\x0018¤8\x001e\x001aW
Xb}Ò¨dÓ\x0013FCß3%,ny:ðR.eÜlp¬,2Xb}\x00033öÞn³¥NÍº,D©{F\x0010äÄ@8h2¶Ñ¡A³)èsÀ.@ß\x0012¢\x0005c\x0002VX\x0001ªÅ\x0014}3\x0006@xí6Ë@¯×5Y+á§G\x0008'\x000b1Hq<4®\x0014°Äú¤QÉ8§'\x001e¿gJ\x0016YÜòt\x0008á¥\$Ë¸ÙàXYd°Äú\x0006fì½ÝfK;uYR÷ ÈpÐdl£CfSÐç]¾%D\x000b\x0008Ç\x0004¬°\x0002T)úf\x0010
ðÚmþ^¯k²VÂ-O\x0010N\x0016bâxh\)`õI£qNO\x0018
=~Ï,²¸åé\x0010ÂK¹Hq³Á±²È`õ
ÌØ{»Í:5wê²\x0010¥î\x0019A\x0013\x0003á ÉØF\x0006Í¦ Ï\x0001»\x0000}K\x0016\x0010	Xa\x0005¨\x0016SôÍ \x001a\x0000áµÛ,\x0003ý½^×d­[\x001e!,Ä ÅñÐ¸RÀ\x0012ëF%ã0\x001azü)YdqËÓ!r,ãfceÁ\x0012ë\x001b±÷v-ujîÔe!zÔ\x0003óÚzz[NÕòÏ}6ßÓE^!\x001a¿\x0014IlÉËrªVà_éaBR\x000e
\x000b¿)¥7KKUïN8åy¥ÜR[¥ÄSÌ)Ï\x001fï!å3ß*ñg¯IéF%½µPõÇ\x0014u9\x0005\x0015ìàp`$øß[TK©sè\x0013nc=]ª*O¦ûpÏ\x001dòsV;x¯c9´Ä¯
&c\x001b\x001d\x001a4>\x0007ì\x0002Ýÿö×\x0005ÕOÖ
Uÿ¸Ú\x001dõv\x0010¥ÔT\x001bíãÎJÉ?Î\x0005\x0007	Ý\WÝ1^\x0007\x0008Ç\x0004¬°\x0002T)úf%Ï×ÖSÛ»0Ó~	ÿÓ/ÒØvCkß2é#?9¾Zj÷Ì|ûOè{[Ò·ú^»Ö'j¾ðÚmþ^¯k²VÒ`ËËó\x001bíù!½ÙY_ê0ù§õ²ÿ¶ò\x001a\x0007ºoP»^Ø¹,Ä ÅñÐ8|äôý\x001coøQáÊËiaÌPÔ	Ð\x0007$\x0008òòñyl©þ$ìO\x000f3O\x001e¢z${=³rNO\x0018
=~Ï,²ÝïBík±½\x0008tøÙ«+ÖKóÿ Ãc·än=V{\x0008/å"YÆÍ\x0006ÇÊ"s2.\x001aÂWÏeù\x0005\x001ar{Ç½f³xä^óxiçýÅ¼Ä4H\x000f±÷v-ujîÔe!zèÓò¼ù<=e~ÖÿÅýg>\x001b¶¼:ÏÎ\Nrsy!®hvPJVçâ7»êN¦n¯ç»±-ª!¿´Ol\x0010Vúÿe+âíÄç\x001e>\x0016\x0016ï³Ç¾»RH(\x0005^º\x0017ÛåD>ÀÎ^eÙÙò£$V×\x0015rQyíè`r
a[lØÅ°sÕoýnµ\x0018½»p%|Õ¹03¯êà·ØüÒõ\x0019\x001fÏÍÈ*ÜqkK7¸Ù+±è¬¼Æ®Ä¼·g¼	þó,d-ß~M\x0019fÕHfÁs{>ËF+¯þJ%ü¦Ä\x001f:<@w«\x001f|¶ãö\x001fê«5¨©3
gdt´ãÎ8q·\x001díêl\x0019wªXÑiÕÕ-¬\x0017¨"\x0003\x0015
tÝ®R,""Þê\x0005¨\x0010¹&\x001ar\x0004\x0003	$'9ÉÉ@Èå\x000b	\x0001ÔþèÚ_Ý/êv\x0016Bá²g2\x00039ç=ßù÷}¾ç	ª|\x0018ì¼~Eqÿk1?Å\x000bR«Q%\x0010òÒü¼S\x001c&\x0019dp×W¹\x000c|¤çq¯ ÕÐ\x000fx;0`~î§¦)o\x001f\x001e\x0012ª\x000ci7ÇdzÓ\x0017ñØÕà\x0004y=ø61" )%<óàô±P*åì2\x0010\x0001¼vÍü/&Ð:á\x0011\5ö\x0019åLA+Ñt¯RÝÁkQ#\x0012¯\x001bñ\x0006ãÓp5¡\x0002wÖu°Ì5Ån\x000c[D\x0003òVQ\x0007\x0013´¥\x001bÌ\x0010K&dªàW\x0002\x0005Üm:Í²é|\x0001\x0001\x000cï­ò¢Ü¬4\x0006¥ÒG;å¡*÷`Ï.|Ò¢ÕÉVE\x0008
\x00056\x001b\x0019E\x0015n48,1 Ë\x0008Í¤Â\x0001V\x0002:^\x001fm\x001eTj± \x0001Ë\x0018²4Í\x0013Àaj)Vt\\x0007Éeþ×3ÍV«Ù!«-æÖ±(÷iMímÍ\x0010Ôã´«|fþ\x00150µs°·¿·Çz(U0ódÖ\x0014ôUj¸¢vF+u J\x0014á*4©Lðjð½\x0004\x0002ÜÓÔ7¹\x000e,H ÔX{#éØAÖ£j\x0015
sÊÃ\x0015¡\x001e}÷£n>k`@æ
ÕA\x0006
ùÒ/üè	dõ\x0011!iÈ$Õà1à
ü\x0003¼Ü¦é\x0000\x0011F¯NgÌ\x0016\x0006PØ9$1Ê©\x0010çªÛ*\x000f3Å³\x0000/¡\x001dÁ 0\}ú¶Æ»´Æ»­¬&\x0008\x0012\x00126õS"\x0016\x0002Dc\x0012D@áÑd².;>å-8Ò.æ3\x0015 2\x0006O\x000c\x000e°ß
:fì\x0006ç\x0013ÀcÿøÃû¼ø~ÜeNUÊChmê\x0007ç\x0013$¦ÕµÚ,çu¤òOCO+I/þ¦VÈÇì³³Q¨Êkë5\x0008ogÅí=zöq\x0017Ïî@<s°`FÌ=ÊN*¿búe8\x0005o
yL¬Ë)\x0007¿øª#Ù\x0003ö$\x0006;\x0007ºT]T2ÅjFÜ°¤ê|~rê\x0017¥d'¡\x0002½k\j\x001dÓîÿ3ÐàQ\¢\x0017ÜÏ?và\x001ftzÙèëçú×ãî§e\x001eÚ\x001fXtlv\x0006áºQ\x0018Hîñ?O\x001eO/Ð8DhCÚUK¥ ^þ[JvI
f\x0013³¯¤§Å§^«©7ÙC«ó\x000b¸\x0006\x0005=¬:°
ujì:nóÃ'¿â\x0008ø#®¹µ\x001f¨ÂeîÕrj:zøýFÈMìmÿÉ"\x0019³¸T²a\x0008rN/§J·IÐ×Þ |Â°`ÓPìÃ%\x0006aUÁ±\x0003çîS4º)^`@@dÊKóórNqd\x0005Â[ßëTi(¥¥'ãâOd\£t8m¡ÝÂnàÃìZ¤\x001b5C¸¸i^
ö"ä²ì¤ÓgÎsT
ïx\x0006\x000cvôs%í
æ\x0016\x001cSø¬ìÓ	g¿,¦$Ó(ÆÂ\x0001ª³Ë@\x0004ðÚy[$ì±A6Ím¸R°ïã¢£6lÞ²iGlÜÙâ2&g\x0019±itÔ¡\x0014×_Ìß½ÿxÖ£^Ã:ÿÇÔ>#~3/åh\x001aU"uá <3;9£ô>Õãö;\x001bÜÂ¬«\x0013wó]|!\x0001\x000cï­ò¢Ü¬4\x0006¥ÒGYfG\©«\x001b8áhA\x0015½¿_>\x0012¤Oðª\x001cÕry\x001a¶×\x001ejpxEV?V}<>¥Y,!&%48xp\x0005p vrLDXÏ.jYvÖôJN÷kÎ)P¥Ë"\x0003S¬è¸îÁçö$
qàÛiììaÜ¾YztÏÎè\x001b·DoÜ²s÷gç.ÔÑzlxj3ÿ\x0012ÊQJÇ¯.KÙ¹7ñ~kÇI1òëÙÇÔÞ¡N%£$ißájö\x0013\x001dQ5\J=q¡\x001a\x0007\x0017cJB×ÚÙRÏa²\x001cÿ/BmS<\x001b64ÖÞH:võ¨ÚeÂò`½Ï zP\x0012w$>©ª­ÍhQù°ào\x0000§\x0002:¹OÂµá¡\x000b£¬'PKÑ§1q÷ØÜÁ!å$\x0006[Já\x001c\x0014"í\x000fx¢.Ó òC$¡e\x001fúë\x0015*×jf^vÎÂÎ!QN8W{\x000f+Å³\x0000\x001cv\x001a:¥mwï\HOÝ\x0011½yÓÖ¨uÑ»þr*ïËF:Mß?7óÇ.)<,HÚ\x0013\x001bwêVÓcÔ¥$\¼Ü\x0004\x0003£0#9ýk}Üz»Ó\x0003C1WÐ9:¬¶kyJà\x0006¥½¸%t78¯\x0000\x001eûÇ\x001f^ü\x0014ÜçÅ÷ã.tªR^§ÞÂ¹\px5´tÙ»'Û"\x0002_n&ìÅd\x0004RºrydRa­ ÷;ç¬X\x0017\x000f¡uªéKûI\x0011Kö\x0015Þ\x0016«$cÄ\H«Ç®u®>°uÍ	rLçð«r\x0018¼&jâV½·/ëZ«ð;W w÷¹µ\x0006Ö¥ü½ë¯+2\x000cÊÇ}HgArÜo?Ú\x001ep©=vHPòIÔÚ\x0003ÇÏ½#\x0001Ý2ª\x001awHäô¯·G,Ý~\x000cidã¯¶\x0002Ý\x0016©¶!cýª·ÖÆ¬â
Æ\x001cAp©Ü\x0016¢êÈû+7|váæË\x0010Rf\x0019õ â\x001bFnZ}ðºÅÖS4ê\x001dÒÚ´üþ\x0010ëüÏÛùçÑÒ~nÓ?\x001eÉ,\x001c\x001c\x0019ÄU¬ÛÛ"ßþ]\x0006Æñy9 ý?G\x0008¹
~¹bù\x0007Óú$Ï\x001d\x0013ZÎCèÜêÆÚó\x0007HK6³Õ}\x0004¦D^&n5Ê¿¸'jÃ#k@\x0017£0 XÁ*Ý±hÉÇ5RDötNº}\x0006d\x0001)/ÍÏË9ÅaA\x0016\x0008oýñá®o÷m$HW½wèÁ<}\x0010û»ña©¢¥$ñ­\x0015Q\x001a:ÙxHN\x000c4!¦\x001aUÜLùÃ\x0007ûã©0<ò\x0006Êïsk`rFê¶èÈ]×0\x0007<fc¤o{õÎÔÂÇç³£³A´]\x0006"×\x001ePæ\x0015\x001e;âDhäâ\x0004Ð/¤Å\x0011ËÖïùd×ÆE¤Eà?ËjZy8¡\x000e¤K(üÜB/NÜ\x001eAüðÄ
]åôb\óÔ@­8\x0013³xåê»\x0002±Xé±ÛÞÞSëñiÝæ¶sß}'±°6\x001aXÉ\x0017\x0012ÀðÞ*/ÊÍJcP*}DxS\x001eüÔ+æUäìõ\x0013³\x0014}Û'ð8z\x0007GÜF^oU2\x0014yN·9t!\x001f+¸f\_#o÷µë¾éØ­º8ø©G"¸whÅªmå4Ó â_Ãüëû¿fkÂ\x001d¶\x0017èÒÂ7¨Òe)Vt\÷àá¥8ðà*ßKÎZ¼È?¸¬Ú¼+áðöeKDø[(æïW\x001bÌ\x000eM NÀÔÏ1^KYÚJÒoVü¹ [÷oê«4¨©s
3Ó©S\x0019p\F#¶3:T\x001d\x0015¯ZÇÖz]ju¬^[ëVÄ;jÝ\x0010-e\x0007Y4  B\x0010\x0012JÙ×@\x0008\x00120\x0010=@àdß\x0017rÑÎtÆû£ýÕûìADÇ¡3Þ3ß|9çýÞïyç]Ùª³Z`\x001f{B-¿\x0004¦ÔµOèEPþõ¨°lØª\x0010«Ç(8¶wÝÞýgËLæÿ\x001b!O¤µUQ'\x0012Ê
(<SZ0%#u\x0017_\x0008r>]Ë%\x000f³¦uoVX\#
É:n|¼,âß)8qä-l\x001f#Q+¢\x0017\x0004\x0007§4\x0013¥r®ýM\x0019kÓC²¡Ò\x000bÁÁ\x001boã{\x0011ö-ôò¸õ¡+¶§×I¥l»fþ\x0010û«3GÙ09×²ç3ÄÃ2« §gö¯\x000b\x0005	^ñáÚ#ÇÎükçÚð¥ØÏµ[Î\x0014Õi\x0015s&O5ß £Beg¼¿å|B\x000bæu®Qb<ä\x0013Nm\x000eßx*\x0016'³ÊÔ\×àð\x0003¡µ÷ù3õKòñÐåÛî5HFØSï~ý\x0016è±ÿüãÅ_oö¼øÝad½ÊE'QPî§ÜåÕ\x000fB·$>f\x000b\\x0012æZÔV\\x0013\x001d¶xïùAÆ4hMU`3PÝJ°Ãó\x0014PÄý\x0012\x0001V-ßªáY\\x0004¯iø °¬\x001b(RQ2N«þùÆÁÓ	\x000fÄ\x0012¦}Ä¬\x0002sÍ*ì[?S\x0008(\x0007V§5ßæ\kö÷-z©º;ñò;6í»!1Ifã\x001bSLoa\x000eõH%\x0010æ\x001asÆu_÷Õ<®N%ÂÆÌ¸/"\x001d-B'96-O/¢\x0008hDI5\x0000çuH÷Í=[O^Àµ<³üÇP
è:Î\x001d\x0015Ï¡g ÄÃÁ¡»3\x0008°\x0010r8§<p´\x0011\x001d&¥\x001d¾ØÐM¶ÍÝ)yð±ëf\x0005[Pñí'á;ÈÀËõ\x0012O
\x0000Äü
\x0000í&>\x000bíû\x001dF+Q*h51[W-Ø\x0018úpD/Åì\x0004Doq\x001d\x000f1°\x0017¼ÿ*1ôÆjÎn_³ó\B¡Â>jA!\x0005L¤SÈ¤,ß\x001c§òQÅÉ%¿8bd@0vy_xmô\x0003Ùbv'F®M\x0007+\x0004ÕQKB\x000e$â{¹ð³À\x0005¸¡\x001f~\ye×Â°o\x0007e°Qëi\x00150\x001acÑÇ¬ù|CÌ\x001a!Ú|é`äC1wäV©\x001bgïÑ\x001a\x000f[°}îÉëº÷upÈ\x0017iU\x0000úö¥réä<vS\x0015×í9\x0006 2×½üqp³\x000bñ\x0019\x0013©|²Â>÷Ãd&n ÉäÝM»~ÜA\x0000³ÀÛeªYõ!Æ.>±o½«mXºê£!¦
åZüc­\x0019\,\x001b`\x0018ò¦M,¸=ûHèc\x000fÛ$£°Cã\x0001Ð\x0003\x0018~¨*x¹®Lâº²uÊ£\x0013a¢Qù¾Å"ëúw&\x0011ÏÞ\x0011ðÅ¬NíØµ)¦Òlà[T,)³Ië\x0016XæYøÌ\x000fH@¸r£uÖlæñÊ\x0016xî|.%Â&áÀ\x0008`Ñ¼«
-¸Üõýê  ÷\x0016nÎ"Ôò\x0004C\x001a9¤\x001b§\x000bûJîF ò
Äd>\x0003m\x0000Fu\x000c(³+K{B	ÆFÝP~âù·ò9¨à¥d¸Nü¼¹è§\x0003\x000b?ü\x0008Oe>D/ s\x0006º\x0010fÒñ(£):råÖË9îçV\x001b\x0016\x000f7\x0002óÕ»²xòÒc¯oo(\x0003<Oã ÿ\x0017×â®\x001f\x0008ò<¸úæQTdSy=\x0017\x0001[´b¤kàîþ\x0005!û	½dIlõ¦SÕ+ê»WÈ\x0012lEdp\x0017c¤Ä"ïþuçUò7Î{f\x001d¦Å}µlõ©J²bãÐÂãH\x0017Dí\x0011¦ÿé®Òï²\x001cX\x0019Uésì¥6		ðê-ç94\x0018&! bNoY=¯!O'ù\x000e%\x0015nNÝ¶àý  ðKY\x0005ð\x0000\x0010²f!ç4WÄF®\x000c\x000e
;t±4	ÙUÅTîhZ=xµb\x0013RMH¿ôõ7ñT)G?cRðExZA¡×\\x0006]mj}ûÈ\x0004ß<òTB'2éTc3	¦\x001eÝ½íÈÄºi'ïyÏ¥\x0004¼\x0013kÚ$­­*:yØTn@áyò¬\x0006)J­(>³Î-ã¨\x0002\x0002Ñlõ«\x0008N!\x0007'ÄÝÇªy&-­ü.båç7sË6©Õ\x000bÝëj§	á[\x0015,¨ÖG³
Ø½×Ô>ûÌ2°eÌGÇC\x000fe\x0013\x0018Bø¹£öÁÔæa6M7	;©ø¼Òògfl\x000fë0Ç´³å\x0019MÝü\x000b«3GÙ09×²ç1Äóî'è\x000fGÛnþsÃâ Å\x000eÆÞ£óhÊ±aõ8KÉkÂ;\x0008´rýÆZ\x0006K"î!NíkÀ\Z´BÒ\x001aÿÕéØì~:Õ\x0006T\x001fpWË\x0002³pzë\x001dgo\x0017\x0019¤fßà\x0000OÛ ¡_\x000f-^qüQçø8<¥öÌsTwf\x0001\x000cÿüãÅ_oö¼øÝad½ÊE'QPò3N¹ê EaÙuõ£
\x001dC\x001eÒk¢Ã\x0016\x0016ÑHg9&\x0006x\x0014BmSýè\x0018Û\x0008\x0001sÙ$}\x001cjl&ài0]ò,r
¨ÜÕ¥èí©Îy\x0011Ëëìb²ImÒöÆ¤[yÅø>:uÊèª5Ã,P\x000b;IÓ¯GÇýRU×4*çØB£\x001b\x001bÝ-ôÆôû8\{?Å¨\x0016N+\x0006í¥eÙ?f%ÜÌÏ/èeÒÒí¦!§}gÓ
s;ñ\x0015¸Ä´Ô¸¼â"Ê Õb\x0016[\x0002nëÌ:°yéí¸Ú_aá°\x001e#÷[Ø¤\x0018\x0018h+§öÆÆ\x0011­´A,ëèî!í]Ìü´Øû¹-\x001dDµoÑ!(ÜZzâÀÆð%{®ü\S%\x001ca\x0018-ý­UO©=Z\x0005O.Í8\x0016±zý®//fôö·\x000fÃ¤Ç­-
\x0008wÈ\x0004Ü\x0006\x0013\x0013ÊÓ	\x001d­õl\x000eÝnfq9GB\x0016íÎ ÀBÈ¡áÙô|³rÝV½y¿¤\x0001\x000fYÍbó¬\x0001Õl²'¶¢\x0007ñYwêÉí\x0003¥'"Vïºë%àÖ&5ÿ75
"åÜÎJ+|PÔ\x000f1ì\x0000%õLªÛM|¨ôÚ¹~r\x000e¯T²i¸]kV\x001d¾Y­±H¬*®\x0003¥2¥\x0015¹IwÓnápwª\x001bj¸#Né\x0001\x0000U|ÐÈ\x0019E¤ªûY?æd¥ÿÒÜ$\x001aáN«aÙ@uuò¾µËC¶\x001eü®D\x0014
\x0007ÙåÄö&n\x0002rÓ\x0008,Zb¸®	\x0014w'+«¶­e\x0014\x0015ÛÕÀ,×$#CO©}=ºq
±$);9>\x0007×ÑKT\x0008|}ã\x000cnë¥¦>f[QQæíÔ¤\x0007¥`\x0011\x000c \x0002}BÜÑZruOðEË÷%çUJ¥l\x001f\x0002*Fødpëêáß\x000b^u»¨Êþ\x001fñå\x001aÓTÆñF\x0019qÌè\x0012\x0011@\¹\x0008\x0006\x001c\x0015\x0001Ì¨\x0018o\x0011uð¶Ù(\\x0014k¡¥\k¹S -½Ò\x001e(Z,·\x0002íiOopÊµ\x0017JKéMÌ$ÌÝO»o1&;ãn2\x001fºÙçC?´oN÷ù?ÿßÄlÔ|\å=,"¶üeZiA^'Î*~±«×\x000cð¤½\x0018\x001eà\x001b\x0018PßÃÖ 2»eÚ\x000eHz\x0015¯J\x0010ª\x0008Ý\x000c&º\x0000Û­Ú«\x0012%pyÇ®³\x0005íRµô£å7£ëXëF#|ª\x0004\x0016Ï\x000f·¿Á§\x0014d7uaåä]ýé;®5Ô>'Aµopù¹/^×\x0013Gà	«Y³¾Ø\x000b\x000cwtÓ»\x0014ª±UOHTØ
R³Ëí ¾\x001d~»¤G]ñ\x001ay\x0002Îd?±ð²H\x001c\x0010;Ì_È\x0007¥\x0011®À¿ÌH{ àA\x0016ð\x0005xT^{-êÐÉóïæg]\x000bØº#±®Ce\x001fV<\x000eî0É,s\x0002\x0011¥¦w o\x0016º=¨¶º4\x000e÷5²ÙL­vxAIkzu#\x001cã³çèõF*[?\x000f¯Û¢åó#äÎêâÜÌÒ2BÏ\x0000É8ã9\x0010(]Ê\x0010r;\x0003t°T\x000bÆ`|õ×!z´¨\x001c,ùu\x001b¢\x001b£AME5ØlB\x0019®NA\x0017Uà%Ä\Vða\x0012\x00114wV\x0017\x0010³\x0008eX22)\·\x0002WçÆ©¤'ç£\x0003\x000f_Êbr(èx\x0018j\x0013\x000b!Tç9\x0016lÈ
§B7Ff\x0012óKó3°b:g^U»,Lä\x0006Uÿ(¯	\x001aà/"\x001cNc~eaFMu5Ôßo]S{ZdR­e\x0006Ík.­*ÎÆy$FÓÌL¸?Ï\x0017¯CÆ'\x0008à\Ñxùd/sUróSÏíÞöµßý×\x0014T'sn"Û¢vÆ§Eï·\x0000ßJ,jæ¬¹\x0010£Ï§tÌ bqW\x0019	ÛÔÞ\x0006ken«ÖªèársÒ\x001ed¿xIa±æ¨{Õ×È{0$ºÁ·\x001d×Ø4\x0002é¨·¦øqìN¿C$±ÄjQ1eÝ)\x0010Yõ`	Wf}¿÷ñÄ;ÏËÄ£|Ií¶ÂÚ!2W	4^N`òXóF-¸úÿ¼ÿO\x0005Ä[[Qþä\x001eÞ\x0008ØÕWcCu¬Gßù\x0005]®ª|r\x0014J­\x001cNý¼úÙ×Æ(,FÇL¼
h\x001f ´\x0011^øÔ7\x0003"Á´zDÉ#àï\x001f÷Ùê{;'\x001f\x001a\x0015é\x0017\x0015nrÝ6\x0008í\x0015¹Eù\x0019Êþwv§Ç¯fù¬9\x0004µ÷
0%¼ªªÂ&
M\x0005óÑajo7E®m\x0000'ì*\x0003\x0002º\x0008$\\x0016¾¤¨Ü
k§lfµ\x0013¼­\x0019q¯!èp\x0017»¡ä56\x001b_×ØÒ,\x001a\x001f\x0005«oÝ"E'Û^?N\x000cÁl÷;q
õY\x000cãaKA_xþ)\x0010²Ê¨âô·cË\x000b3\x000bJrÛh´Ù%ø\x0013¨X\x0000¨ô6ðøÐ\x001czÇ,¯*|ú§1{ôÀ³<X¢t\x00017D\x0005rbés\i^\x0003¹U"\x001bvyWÈ&M/\x0005*\x000b«\x001cfo^±\x0017Ëµ:m\x0018k!Þ;¶\x0015ù1§v\x0004\x001ewn)\x000fo/Ã+ªÖ!{0¤ô%\x000b@\x00052A1z;Ëkp­Tz\x0016vXQ;:0DÅa³\x001f¦¥=khkWÍª\x001cÕA7såGãU\x000bL\x0013_M`²\x001bÙu)-[ó»ys\x0006Ä\x0000sßqÚ\x0006|qjf¨\x001c\x0016\x0018\x0014qêÎ«¾~\x000e\x000cÞraÉo+©+É.Ã©\x001d9àSJ§éÞ?^\x001bvÚ^|ó2Äl¶\x0019`ï¥<dÃ>%&f$\x001d8pðVVÝ\x000bßîúævN)¼\x0000RÀ§éB2V?,\x0018â¯,+?Í}np×ÌãÒ\x0015IÝ»ÖÖìïü|w¹B\x0016ôêfaà_zßÊo¼o\x0013Bøõøµ¤Æáñ~#Ì:Ú'aÉ²AõqåKïüì}uf	î\x0011	u@PØºúÚ^hY¯Ø°Áz5Zñð´ïþ\x000bx\x0012eqaÂ \x0006èÍRdÒj\x001d+\x000ff~Ù][HÈMÃ\x0015\x0015Ò \x0008àýÏ¶O"­½\x0010S:Ñ§xÛP_V+l#S5èÃ¦ö¬/\x0013ò^/\x001eë©\x0007i\x0002_SÓP7(\x0016ÚÁo½\x0013MÈ*@8\x0019\x0003\x0016ýé½+ön\x0001­Á«³\x0010>6x\x0007fOÂÃ|¡
ô\x0016²\x0012hù½U¹,&æ]	Â`¶%¸E\x0015é\x0011C\x001dý}t©¸½\x0011[]_\x000fÓº¦µ/
Ò\x0008Øôçõ-\x001d`Üv­Ã¸¹rA\x0017RWò¢¸¨*FÃ¾Uµ°Ú\x0016F7\x0003k\x0016\x001dwÕg&À|µ7ø\x0016Í3."\x001b\x0016Øp¡V\µgxÚi\x0014¥Fâ}pòF\x0001ÆþÇßýç\x001f{~ýÛ\x0007~ê¿\x001då´Î\x0018¸¼§wú{zy\x001f\x0006søÔ_É}"·\x000bä5©eºëÞ¾¼_D»ÕtvñS±÷Þ"ã\x0016³ÒiV»\x0016\x0013´ìS'#* Á^³1Ïe\x0012FFI¾z6ôÈ¾0_ßcþG#ãâS\x001eÜ¼s12ÐïÄ®í{¿õ?ø(µM<
 j}
\x0019%¯n\x000e

	:sîzB`Ðð¸<@ätN/kù©ñ	ñ±ç¢C÷ûú\x0006ÄÄ?k6¨»^<¾\x001a\x0013\x001cp",8"2"|_À©\x001f~,hbhQxÝò»0¢pÛ\x0010#Â¡½ºpòèÁÐÈèÃ\x0011BÏßxVIY2)QNú¸ÃÀSÀãÿçÈ§MÜùYøsó c\x0011*¼\x001aw+³)ZÑI·Ï=\x001fw)þdh`È7»ü÷îÛ\x001fv&ñA\x0005E·$[2\x001fEîÝâñÙíðx2G24Ô~åÖý\x0002²I/f<
Ûÿ\x0015fÛ¶m{ÂR
§ÐîÇ\x0017b/=oë\x0011\x00007w,+mK\x0013HûÝKq×ÊÛº­.¹\x0012Â]Üé{¶\x000ck¤¿¸Ô\x000b\x0013]-\x0019I±aG\x000eÇÄ^\x000f>\x0019\x001cðS>¹ü{$Û\x000cA3Ý%\x0019×£ü\x001f\x000b:\x001fs4"êè\x0000í1Ïð-6ÔmYÕÌ¿$\x000e9\x0010\x001ay<"<\x000c40:1©Æ=@ûo\x0007¾·«¤¤Ô¢£\x0002ï¾Y6É§©\x000f®¦·üù2i2Oã8Ñ`\x00062\x0016ÂÒ#¥@ÞWzß \x001b«`\x0019\x0015dUP:^\x0008\x000c¢\x0007(T\x0019\x0014\x0001\x001cÊQ(TJ\x000b¥ tdDÚrS®aX7ÙdþÙýk÷qg³3»É&Ì¾yþ|óæ÷>Ïïû|¾ßí
ÕPW\x0010&$ )4ºcQ p4Uvôt·A»0÷fg®P]\x0018-eQ>\x0014\x0011Û\x0007\x0019\x0000\x000bÄ&¿\x0008X5CE<\x0013ã¹Ûñ\x0007\x0008¡±ÊGµ5\x0010Q´²©«{sÝ²by9X\x0015/!£ \x0018\x0016'âahâ±/\x0014Ýcúeûø¶åiùU\x0005ÉGpp\x0010\x0010\x001eíîç\x000fÇÒÂr®OY+RÂã\x000bCÙ\x0000H Ì[À§{ÃX\x0012ÉÃgóK#[©(_ðÝ\x000càFH¸ñ¸usõc?×\x0016'­=\x0005×®í\x0014ä\x000b=zíÁØÞóT\x0019Æ'á\x0011¾d\x0001\x000c\x0011Ðø¬¼úÞ×\x001bv½éñI	Åw÷í\x0003N\x0001ìà¼'íVÝË\x00192j B\x000cJ$o\x0008H\x000fÉ,V÷\x000f|Ø\x00186·\x0015¹ºqÕÃãÃ?þû½\x0005\x001c^¥¼\x0014Çã\x0007e\x001c,+ÀtTèÔ²6
0£µ¥q[ïÝ;Ù2&\x000eâD\x0002/"Êã\x0017UWXìµ·ÝwãÙìØ*µÚ¾\x0004øÌ1ÇìàlïM1xîî#íÍû¾êÛ\x001c\x0016'¤¡``W7ldFqÃúÊo¼\x001fàÃmÆ¢üÙ§;ZT@\x0016Ø/\x00048ìÆukg4À\x001b\x001ez¾ì©£Dî{\x0018DN©×:Æ×ì¦y½Õ¨Ê`"÷»C;ck\x000b¦\x0005K×ÓT)',¯±«¹_u!Ö\x0007thO¹¾âóõ5KkÇ-E\x0018\x0007ôÅòØÔ\x0000\x000c\x0016§¤åÓYL\x0019{Ûx!S.f0i"\x0016\x001a\x0002\x0006{BU)QÇR3_\x001cVíPU"%\x0012(\x000c\x0001Câh²«¯tÚUÇÔÜp]ã¥8)\x001d0CxL<6\x0010âLR<×j\x001dó\x0006M~\x000c
rr>àìÂ3\x0015Ñækáòô\x000b½;@ímÎM9ÎÅ\x0004\x0010H\x0018"Oð
"sâ\x0014EÚaÝÖæåeEq,É\x0017Ê$d4\x0002\x0003vxû@)¢È²úwÆÅþÞJeBÁÂéb\x001e\x000f
#`ðG2¿Tui¶~½è>­ì£¶\x0002 \x0002¬/Lüî\ûµéÐò÷ô#\x001fk4\x0003v}í£»\x001e]\x0003ÖµUû¢äjiá½Þ\x0001ÍcøM×ÝT:3&FÊBûyæL8y»£û»¶ëÉ2f ÜWÈ#
ùt8
\x0017Ðc\x001c\´í8\x001d\x00157#\x0005\x000c4\x0014Áf\x0012\x0008\x0002
Ö\x001f\x0006öF\x0006ÜÓèç=7ºXÖ`³´V\x001d§À=\\]¼§rn¦5½¥8>.Df1Ñl*\x000cEäÉS¿ÖëçöuFVxï\x0014]ÎÊ8Ù\÷`ó×Ôø¤ÚY\x0019¨Í
!ú\x0012xi%ßO4fa<@è[O[\x001cI`ó¬ÌèFªNHùEÕßX&×`k\x001d^ÔÄii\x0005¥]Ú\x0006%ßÛ}WÇ\x000eÄéÊæ×ºUssµ"&î ²¨Ä@\x0006\x001eg§çTZ¨å0ëUr¢Y46G{º¹y
Ï?©½ßp[!\x000e\x000e<8´<gl¾¦Là\x0008\x0018\x000c\x001cÌ!ÑX^Ø\x0019UcÛâêÔòw]}Å)GE\x0004\x0014Ê¡²¸\x000c7\x0014Å;"»ßÚ±`×´ç§z|¾·Q\\x0011×ú
­
\x0019òH¹²©\x0007¸lÛËCÛyg¤\x0014<\x0001
\x001cLDô	Ä\x0013¥±\x0017ëÔ¯Ö7¦æÌ/TÉ"±H\x0014"¦Ñ°XÃp\x000fO\x001f,{ôJåkþÃêÐx{yÏÄøÑÄ\x001cN@\x0000\x0005\x0019À+ò\x001b:Vk¼_9Ñ>º2;\x000c¨xäÕ­µùý\x001cñ>Öcr²µè\x0002Ûë\x0000«êÓÎÏ·~I@öÑ­¥á>Uñ½\x001b_7½xiÖ\x000c%\x0008y\x001cJ	\Üèâî©ñÙ¾2eJ\x00080Bª²0\x000e\x0014\x0016=ëPÛl\x0013?.Ì5U&EJðp$!P¸8\x000c8xÐYY×2³0>Vs%'2:&»Âf\x001bP
eÃ]\x000f\x001erÇòeçtÓCÃ5¹YQ4\x001c\x0011G¤\x0013ÄL\x0018\x0002C
»¤îé]\\x0018_û½ûö/¹9,µÕ%ò¸pu}åÕ¸o)onb{º¡<Kè\x0005%?lÕ\x0016à.\x0008qRi»vbÀ\x000bóæ·MgS£ÃRr
-{ó2m«óNIeÉ\x0019
\x0003]\x0003eQxð®ý9äL
?q§U³aý}è=ö\x0000ö\x0005î±oÀ°Ç¾®â\x0004}\À@Á®òsE\x000fFZ.ñ\x0018Ì\x0012u§m¶¿ÿÑåìü}Y_ªº5?,9\x0000»Us&E\x0012A¬P\x0001Ù\x000b$±y×ªj,ïuæoóOÂ<Ýö\x000cf¤=li6´\x0016&ò\x0005iÕêw¦?Ù:ëî
fãqHÈ®ó\x0012ðä\x00139×Õý¯·W?Õ©sââ%|%¤ã¼Á(w°?t$3¿¾·gÕh\x001fyV(\x0013ãá\x0014.E"0¡p4<ûaãô´ac~fa7-Ï¼~kxnì(\µ\x001aömÄû[vÓº}hÁø Òýs?lÜíg­\x001b\x000eËú/«lÎü­Ïø²¢°0¿¥_³d7Ï´^ÍKRé4	\x0017\x000bu\x0007< ¥MµºnUiªA@!Y(i\x0010eD¤\x0017×¨w­¦iÃR_xAÎÀÀ0(?ºáO¦\x00180\x0017Wâbùû5ËÂ6 8\x0008¢¾ê\x001chéº\x001dáå¶ã\x000eÂBý­Cu73E4*\x0006Jð¸081\x0008\x001b[ÙÙ»¹ð\x0004å\x000bðØûëOÿßþ²½2«ÿoZ_²½º\x001bÍCPOëLuy"\x0013Lü\x0002ÅüaÙ¸8Qè\x0003¢%}õ\oÚ\x001c­ªJÃ99ó¾Õk\x0017æÍëóã[ß·wß?\x0001tðü³\x0016Ëìäß5ÞË;²ÛQ\x000ftpLD^JrßÓ[\x00003VþEr\x000c\x001f\x0001òð@\x000b¯|³d\x001f]6Uç\x0006¢|}(áñ¼[z=á¸è\x001fÌù3û\x001eÇabÂI0eH	bË\x0010Dì(©-¸"ÄRÄ\x0012¨%¥ªÒs´zJP\x000eµ´äZ\x0010®¶Øc¹Zû?ÜGÏ¹gÎ¹÷W3÷Î|yçï÷ûù|Þ¯÷Û\x001a0´öI¯P|\ÚUË\x001bÐ\x0010\x0000ZØx\x0007øÆ$qÿVØÐS\x0018¦\x000f\x0018¡\x0008NÌÊJ¡ F2\x0006®R»ÑjÿEðñóÐPS

	à\èììÜÛÒÌâd:	\x0003ð!\x000fF'4£µ\x0015Én\x0018\x0004\x0002fJNþÔ¿öQyò;Y~ÄÏÝX8Á×8¦ØU´U8\\x001cÄÊ.0")Ë\x000cr$Âõ\x0001brßÌz ¡:J@@1îñâIõÔH\x0005ÛßÒ\x0014ß¼½55V\x0016ã6¡±\x0011%Õ­jÍè ¼\x0001>±ªM~v¤>úaxæê}L
mÓ+Z¶NUKòÊ+&^emÊÕóµþ®ò(ç«úî~IÂ¼zi ÎÍÂ\x001cgHîRìmÌÿáiuÚù/cÃH\x0014\x0004aqàòyÕUY¾äM\x0003\x0002é£õ£÷ÁáòhPáp\x0014\x001aO[U'\x0008÷t6×ÃÑY]Ã¯öwÕfÖ?tK³Í7\x0012Ü\ñMZíüæÌg]³O\x0003¯o³`\x0000söà	ó\x001aj¹¡>\x0014°màÒýë»+Úñ¦âp'PÔ]B\x000b¤âl~\x000c
m4À\x0006dÖO÷¸Á6&F¦xk§Âüöö»\x000c\x000bÀ*½µwø§óÊÞª(
\x000c¼b:3©²¢¨4/ÖÃ\x0006a\x0008\x0000¬Â¶å\x000f\x000bç\x001f8î?Â}X\x0014«¸0\x001bFAê\x0019b\x001dò\x0015õá_º\x001a,¢òhýu=ß\x0007Ã¢\x001ch\x0019|ncM^\x0012ËÓ\x0002\x0000\yOGG×çÖ]gX\x0019@0dgFbÉã¡#\x0011?>`
  
  
  
  
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
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_cp_actes_sexistes_durant_le_suivi_gynecologique_et_obstetrical_20180628-3.pdf](https://haut-conseil-egalite.gouv.fr/IMG/pdf/hce_cp_actes_sexistes_durant_le_suivi_gynecologique_et_obstetrical_20180628-3.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `<?=@K>ÂÁs.Lûj<¦M\x0004Sõõ\x001f\x0002'N\x0006\x0018®ÕBl\x000cG\x0017:?³
ÆZþÆ?UhåÇáw(êUôZsYåVíA#\x000bÇ¥BÏa;ë\x0011,K6FÉ8\x0002g\x000eNâ¾,,\x000f§\x0006Q.:5Ö\x0015¶ã­1t
\x0004Þ\x0005W4\x0014¡\x0015X\x0000¼(;\x001db¤	¿0!ÿø¶6Õ/.LM\x000b¨\x001fTpüàðòBÓ\x0006ª8\x0004~]Ë	\x0016Îb\x0019ì·(i\x0016Ö3èõô^bérJÜÂ*Î\x0006L\x0015LEL\x0012$Ç5´Ô2\x000f<cQ\x0002GdHdY
©	e\x0004«¹ÆÂàlU¼,#G¦ê\x0003j V`ÌHåj\x0014R\x001bÊ
V\x0008Mè
IB¥Q&*åèXBÚ²Í±\x0019Ó\x001c¡L\x0007£ÈÒ³\x0019I nm+1å)õ ¼(ô3´X
\x001f==<½;zw\x001cJë0\x001b\x0019.mEÒãë
V¨áÊ¤\x000c\x0017Iï\x000c¹ÔjO\x000fdßÜ7\x0015®På(å
5\x001c´\x0010·×Õ
ÎÆB\\x001f\x0003õ\x0002V!c«ë¶,?Y/Ù(\x0018;y]qö­\x00036ÔêïOí]`}y÷Û:Ïµ\x0013©ÉÑã~¸zÍg±þþ3\x000fF=Ë]9.Óÿâ]É/Ò~¬Û\x001bæº¶WÛ~\x001bnÅZò»{ªíò×ËÊVZ\x001ecÝü®_Ø-½\x0011\x000f\x0002­Çí\x0014_ïztkCñÞáù)R7¢´À¸2DòT-r­\x001fååYbTj´óz²û»·\x000eLù¡ÃÁ©vÅ{'DGefï÷_ãT\x001cWg`ê¿dâ¯\x0011µCMû\ÛÉ5g?æJ@Û3¶£\x001e,\x001ez×ÞâÊ¡ª 2Ëáå¶3o\x000f{ùhÌÓ±kãñ\x0019/û\x000b¯¶\x001f\YR¿aRÎG»ÄÏo÷¿Tþ.¹|IçªâÚÝ,\x0002\x0018þ²+TÁEÊÃ\x0003\x0016ËfsqlG9Q\x000eÍÏ\x0014^d¬ÑdurwÏ«³ÜrÞÕ@ïnòÌtd;6Æ8®%y\x0014\x0007ÜX8Fuu­ÉN\x001fåSîUîQD1Ýåª´Oz»Ó¶¢k*AÝÜ\x0000\x0016²T\x001bGRD	¹ x\x001e¬ÔcÁ¿<Â\x0001\x001cgC\x0012Xær\x000bªU³}\x0013Æ¢ðnÀÐü\¥®Þy\x0005QPõI}ûkô`kéä¼Rç¹û\x000b×áç­ûÕo\x0012ÑÀk¿lØ±º9ÆdøqH[wÌoÓíãs\x0006³7}ÝÕ×n`tüÓ©~ÅU÷îÍÃNEÎ\x001dàðóê¶\x0003ò7lu{Þá§Æã]Ûíü}@õ¢êK7£´û¶\x001e\x001e÷òhñyMÎg;YYùµ}Ýµ\x000fða-UÈjdüX|ßùÉ¹í'{°ùÃÊr&}îÇÿ\x0012ÏøÒ\x001d)?]wúºS®ô N4(lS¨þÐ%·¶ëuílrþDóàÄì¸qv,;i»\x0004-\x001ccègà\x0018©¾ÝVùaÀNIìYÁÛr«\x000e\x000f#\x0007ÛÉ.Ú^¹½Ç3õèãkË|\x0015Ó­æ¶ÛÆIô\x001eÎÒ£)g@Cøø\x0002É¢
b+x¯ïPo\x001fÙûöë.ø©áHëCç#ï\x0017t­\x000e[æ²\x0006ÏV±fwÓ»q)ì%]Roí[ÓtrÄÛÀFnyðo\x00052Vtx¶mA»3®rÊBËF÷á):Å©¯ïGo W\x0007niwoÙ:ÿ[á}Ïz/ªÎL°©ë²»KcÞoéùoÍî:­ßø¸4|{ KÉ¼5MçÂÖ¶×ëþ £mEÙÝ!»\x001d/bã\x000cÇ§2.YG\x0015\x001cý.)jqI\x0016Q´3ºP\x001d¨våNå\x000eEößrFZí*!÷3Cî\x0007Iü\x0013\x000fäÔü)\x000fôúÜ\x0003á,\x0017Êº< \x000cÄÜÈ;^H\x001dú°ÓbîÞYØÁ½õõG^è]Ô¾í_ã\x0019O\x0019\x001e~©±:7ûúð\x0012ãÍczì\x000b­Ð8¾ÕUmç$\x0019÷|W·c~7âäA1ì©ßUf>·
µrp{¦fÿzwYÉC¦&9÷Òo¥ñÅµêo&kòÛ¬]6ô¼Í¯g´\x001fÙß-ÛªW·ËOªÅó¹åó
åÊ\x000füSSdïæ/¸ôÖ0Ò©Læ±/µitÑ¾Sí]FñÎÙ3[\x001dûvçÝ~¦6'oÿ|ÎË­w ©¿þ|#+\x0012\x001fÏ=õ[@ã\x000bñ¸«gÆ,Ë\x0019©¬]80ò¶Û\±Ñ2ÞßùÒô5\x001d¸£/WÅþÇ¢\x0015Mþ×S¤\x0011\x0008\x0001¿Ó!@\x001f«Å¦úûO2<\x0013ðJþ !PWc$\x0000YÍ¾-4¶\x000fjù| ¼½DÚ±£ïg\x001f\x0014¸Im)k\x001aÙô«\x001f!Hí¨Öô4l\x000fËÌÔHºek3UJM\x001e\x000c\x000f\x001d})©¢|ðàAI=à\x0017Ðã£?\ÊY{k³îv~6ÀªÝy£Q¿V¬æ8üMSI¿eÛ\x0016UH\x0002Æ\x000cªXP1cGêî	yÖå\x001c¸üì·EÖ3LL¬:\x001fßæ¼ÿu}|ö½¹ö»&%;îä²_T\x001díTÛ³Q\x0010à7×eu»\x000fzOè~k¢þî²´HÙºÂ1KG¸æö»_º5¡sY¨µç`²duã,gó»]æËMFD³\x0015Kl|Ã_¯zü#ëÕÙý=ª&ßßéAÄ\x00036|X®\x0019°Ñüä\~;;,jæ\x0008¥ïî¾F\ÿÁÚwË\x0013\x0005¼?\x0017\x000cz¼­ó0³\òò«}\x001bÆ4mªÿîü*KU¬Ý'¼eöT\x0015çûãU\ãï\x001b¸QI\x0015¬ 
* _âdA\x0019U0o¼AÌé¬ÇJÕâ6Ælé?]{b©êß?`ã(*Ü\x0013ÖL{>ÏÜûá\x000eÜáb®áóØ\x0011\x001eK\x0016\x000bO\x0004°gMq¼Ó]»gO¢æ¸T\x001cüþÂÉÎ®öP69¤w=~rÍuökÒi]\x0018d¥ìn2\x001ah®¬y:èáPÉÀ_ãGo\cqÌÙ×Ñub©Ñ\x0014G}ù²×\x0011Öoí7}\x001e¶.#Èû¡°Õ;IiâA¯ö>
;º·ñ\x0010õ^"åO²)ioÙÿ\x0017\x001bÖ§ão\x0010[c^l¾v,ê¢÷Ñ°m[vFÚçðfÛ1ïðZ_Ûù·+soåc§SºÖþì3åF7£Jï\x0014«+Þ7ÏY·+{Çzúeô·\x0016Ço\x0017Tüpö®=ë­#Wf]1êT<'{ÉªËAT8\x00086\x0007\x001bA°t`
f³Öðò!ÖÒÄ¶»\x0004ÿTH |À~ÁKêëå%õ\x001bx\x0010â=|CBÁÊO·\x000cÆ!n\x0008¢dêd°\x0015Ðq\x000cÐ\x0012\x0002
n"!=3#¡3Á·8û\x001e`Ð/ÄlCÙÑbXê¶$(Ðæ\x0003îFBQR ù2a$á¡Hrð¤dÚ\x0006m@è£ü\x0003ç\x001c\x001c_åüd§­ï0x@ÝÂí[¼ó\±C¼_äÇ·¯xu¿¶öüæ\x001fæVp×ßV\x0018Vö[á½\x0006+k\x001e¥N\x001enµ;ô÷\x0004|r­Ù¹Âd,pTðK#¿\x0001ïänüÞeç\x001dßÍ
rnÎ#\x0003½B^¤nèù²­ÚÖþDw\x000bÛAÛÂÊÎ.;m|Ä¢ëHNú³\x0012»àáÝ\x001fÖ\x001c/Mì¨õz_\x0011|wô\x0016\x001b÷\x001d+¯¿XÚ°ÀN¿)ZÚ-ÒoÜÆèÆÛ\x000fä9®}ÝÁÝ°«ß¨îß­J¾=Î>¹ÕÝ>³\x000f
\x000e\x000bY:pâä9\x000bjFÿÊWD}U:ÒßyUâü
®ÿpfYê{õR¼ô7Úø´ØÚÆ),ó$|÷yY!Þ\x0001èÃékûpâ¿#¼\x0018qøL\x0002n
â\x000b 0\x0012¥¨6z¤\x0019iâøÆ¹oÜ1UÄú;¯Ê;´2{Wû6¼²hébÂ"E¶\x0002,\x001cË\x0006éz\x0010Ö\x0012¢\x000fÊ;zRú-\x001b,6E_¢0&¿uã9{Ç¦_B¯3ÒÉñ=~á­z+S\x001cs#~÷ëÕíTõ³¶\x0013ÎÞ:<8¼²Úâ§w¿\x001d¼­×!\x000ewV·¾îY¾Ñç3­\x001eðâª¾¹óèÝÖ'KÎüèùbÖuí¤\x0005Ãúö\x000eíèÔIb\x0015áû~l¬éW­§?ùßá>L|÷`ÆOQrEyïòü\x0006Åö\x0006§
MÇ¶\x001d©8ydøÔ¬çuWÖ\x0016fp¯*,vV¾*:Àï>ÿ©Ó:eþæZçU\x0012[¯ØXÌKg¼cO©-{±ß²uTÀ.»\x000bÔÊºx#ëQÓî<Í7Ü5Ì_äûtNíìI\x0003È¡ìØ£§Î¯¾tsì¬QmßmÍX1ã\x0019½yX\x0007C}ªí	B\x0015\x001dÆ\x0004²O ?t©øââ¿%d|}\x001d½<½|`¶ä\x000böFàÑ\x001b>R\x001cL;ñö?Ü\x0012Õ\x0017ÌõÛ\x0010[ñ¬¶áúéµ%ÓÎû/j=õ`\[ÜÍªk×MJ©¾¼Ù~´ðØ±\x0015}g
³7¾ÿöeEÕ/2r6<~´Üÿè¡!±]×V©=VÆ\x0017ÈòÆ¿ÈTr:ãÚÑ%?/\x001fd#Û5E±t®ÙäUq\x0005§\x0013ï\\x0019¼8°îýÕ\x001c\x0007·`
»s~ìè\x0012Ã_¢mÝ\x001b(<>éjÅùðÒ´:y]iJÙìaýú\x001bÞs?\x001b\x00133lxØ2µëÝ\x0013{°0Í9Á»\¶2Ëô^ÿ\x0007Ê\x000fq[Rg<l?È×oê½M\x000c¿éEòò\x000b×ù#4s°ù>uÞ¯Ã{¼qw¤ø\x001c3Z:ºp«ñÞªÓ6Ø=Z=BöÈ7¨ËAzKTÏ\x0006\x001aþEîò1\x0018<ºº:;¼~à#«\x0001\x0016\x001cÛe\x000b×úñÃ7"ßjXÛ,XJ\x0015,\x001eÿÕ(²T³ü?\x0011ÿ¾Ü,ô¥\x0013¿`ª;\x0015X\x001ePî_ÔI'ñKo¦2¿¬T%¬uÏRe&dË5jwè\x0000Ðþí{ p N&\x001aDu£º¶d¢¬"Onnnî×è*T_\x0012Ô|-'ô»ô¸ÄoAì|¸\x000ce\x0003ëXcÕ»³\x0007ú¯w_û]ø²Ç¶7)wÅïì,s\x0003V$ço-\x00197%öYÐ¡	\x000b\x0014c'\x000e\x001aShòrúBÅ¾Ø:VÖONi­ö¬\³ýöÒK³\x0017Í\x001aÙÅªf06¸úÍD§ËÃ<ßwÌ\x001fVvyå»\x0017ÏºY®ì¹¾×ÕY~ÆÑüÞOK[ï!§Ç\x0018)ûÂA§¦î½T[ygêhW½-j²õ"ï\x0015u\x001fÖ\x0014?XíÛu{Pê-ÉÓ\x001e{Æm¸ÿ4rËÒ^{\x0014ûÂ½.\x001d¿ÇQ\x0019¡Ú^»\x0017ü\x001a4´øÊzÁøC\x000e»Ü¾ó]L;\x001eyì¿-r­
9r 0:zíÏõ·Ükë\x001f¤/ñÍ\x0016'@Ø<ÊÂqª ú¿&8~\x0012à?\x001ec\x0017Ü£LZ\x0016Ôv¸K°Ña;\f©ç\x0013RîÉ9`ýãPªGé¶Rm>v$¥ÀoÏÈÖh1ûï\x001fíh`\x001f;âJ-\·Rét\x0011I\x0013¨ør¿ñ>_}½èãÇßx©g©ÓxoÚ¶&/+3I%ËJÎû|7I\x0016âØúËÑÃ¯.½<«Mþ\x0006ËÌV7/öª:5ÁýdHÜì\x001d/F\x001cêÕ8\x000b÷Ã}4çåzñûgp+E?Jæ\Þ\x001aÒ©>ÎøÊ~ëm¿ÜÝ\x001fßw{ýÕa&Òó £å§^â/îïxÞ·â}Åñ­÷\x0003Ú<ÖãuÿAQÅGV<ÀÛNZ{bæÞ{Gzüpo¸Õ¨"Õgõ.É§Ûï^?Ðyõ¥Æþ'²\x000e´Mµä­ï«Ôã\x000cv2Â&¼	©^óÌßÖAtÍ¢MLuÄ55N\x0017^jÂv÷J·;:ëµ\x0015[\x0017\x001aD«9\x000b~%.÷ÜÅ­Y¸ÁtçjÖÝ9oíVF<¯{©­y\x001dwdEß]Éª½\x0005¡k?\x001c
Ø\x0011¦Ü¥`[T¿û8c\x001ci!þ\x0000TÝæô/9ÔüÊQªÃ£\x0019`(S>2×µ=áÇvp`z--l©>\ïÁ\x0002ï\x0001<¤¾CAüÕ1=#Ò |ZÚúvsïÎö5þÇ9Që$ÕWL`ÓoöÏO2~>tLì0>Fø\x001cPòïï[ÓoÞ\x00063ß\\x0008é½Á~#7ªè²ýû¾¬²yïWì¼Àüýï§îm\x0014u°/³îÒWûb3Ú¨\EëMçt\x000cñ_ÜÉáT¡Ï\x0005?\x000fè\x0017{Å½`¥©ÓÒÊ©³ÎòÛ\x0016\x000cÌßrêÈ\x0003ý{{½*ÏñÏwZd\x0012´-Tá^s¿´2[µzÉ[KËáì\x0014Ï;;MÕïº\x001cwÎ\VÏ¼¼èù	ÖÓ\x0013\x001b}bCWþ~ê¨Ãê\x0017Ý-§öÀÏô\üúÀÃõª	YU­ÞX×iÖ\x0004Ï¾zÅiÒÎe\x000fJ:ÞÎxyMÛÄ`Çí¯Ü:w\x001euÖñ6\x0007\x001f°;}µòÿ\x0000çÕ\x001cH
endstream
endobj
85 0 obj
<</Filter/FlateDecode/Length 225>>
stream
x]ÁjÃ0\x000cï~
\x001d»CqºK{\x0008­cC»²l\x000fàØJfXd£8¼ýd/t0
òÿâ·ô¹}iÉ'Ð7\x000e¶Ã\x0004'Ç8-B£'u¨Ày¶®Üv2Qi»uN8µ4\x0004U× ßE\x0013¯°{r¡Ç\x0007¥ßØ!{\x001aa÷yî¤ï\x0018¿qBJP©¦\x0001\x000cºx5\x0013.Ø¾u¢û´îùs|¬\x0011á±ôß068£±ÈFTu%Õ@ý*Õ($÷Oß¨~°_³ûxÊîêùXÜÛ{æò÷î¡ìÂ,yÊ\x000eJ\x001cÁ\x0013Þ×\x0014CÌT>?\x0014!oP
endstream
endobj
86 0 obj
<</Filter/FlateDecode/Length 12220/Length1 24332>>
stream
xÌ{	\TUûÿsîa\x001böMàÂ°o3\x000b(ê à¢\x0002*¨%Ã0À(0\x00133¨R¹à\x0012o-òªõ¦¶\x000c.[Ùæ«íùË¬LåU+-+Láþ{f00\x000cìÓûù¿çr¿÷9ÏYå<çÌ9Ã\x001d \x0000à \x0002.3oÌ¨ãqq\x0001\x0000\x0019;\x0000\x0002
Æåçþ\x0015³\x0017\x000b-XëÐ<URá?Ê\x0000È\x000b2%s|A]ñým\x0000â\x0014¼/è*µ¦¸GãÚ\x0001\x0002W`iºZ\x000b\x0017sèÆÃ\x00007±\Tj*«¼gðy\x0016 è<æ×iÍ&ð\x0003\x0007·	ûSUÔÃÇ\x0000â1+>T^R9gÌä\x0017\x0001p\x000cC%ËËõÚO·haßqXa Àpmfb¾\x0004óaå9!£o\x0001\x0018Ì2
£N{ôâ\x0019\x0000I°NC¥vñ\x0008ú/Å
\¶RJ1q6@ÿÑ\x0000®i&£ÙÂ\x0001öñPnªÖ¦l~n8võY3\x0008¾\x0012\x0003¬Î»2i¦kÚ\x0015Y viãè×\x0008Ï£RÅ<ß1LvNæYGZ_Hø9v\x000cCÒ±õfìÜ­Î4r\x000e@
U]0@\x0001*Ô\x000fâõ¶>DGI\x0013J×1\x001bn{²ÍPÊ¸;±b1aTÂ¥·õ\x000cùã38Ð\â.í\x0012¯è\x0018Ieä·JEG¡\x0012¿ÙòÌ\x0016h\x0013ï\x0000íí½ü¯&i ÿ·úf/CÖ_i'*\x0001Ãß­Ë_MìË0ëÿ·\x000e=¤\x0003RBàñ»ðîôÙíÝrk{ï§¤ï"{K\x0004X"fYwNg_zý*ãA\x00062¾\x0003×5\x0007D9È\x0011\x001dÁ\x0011Ñ	øvp\x0006gD\x0017pAt\x0005Wþ&Îu\x0005¢\x001b¸!º;¢\x0007x z'¢\x0017xó7À¢\x000fø ¢\x001cþ7\9ý\x0010ýÁ\x001f1\x0000\x0002øëÐ\x000fú!\x0006B\x0010r\x0010¯C0\x0004#rÀ!@\x0008b("*AÉÿ
a\x0010\x0018\x000e\x0011\x0011\x0014#!¿\x0006Q\x0010\x0018
Ñ1\x0010\x0018\x000b±üU8ÄxH@L\x0000\x0015¢¢\x001aÔü\x0015HDÄ$HBLdþ2ôþH\x000fH\x000fA(¦@
b*¤ò¿À`\x00188\x0004 ¦A\x001aÿ3\x000caÃ`8âpÐð?\x0006ñgHtÄ\x00110\x00021\x00032	Y0\x0012q$â/Á(\x00188â\x0018\x00188\x0016Æ"fC6â8\x00188\x001erø\x001f!\x0007& N\x0013a\x0012ÿ\x0003L¢\x000b¹y\x000fùa
\x0011¦ÀTÄ©PX\x0000\x0014§Á4þ\x0002çtÄ\x00190\x0003ñ\x001e¸\x0017ñ^É\x000f3¡\x0008±\x0008´ZÄï \x0018Ö\x000e±\x0004J£RÄR(C,rþ[(\x0007\x0003¢\x0001f!ÎB<\x000f³a6b\x0005T VB\x0015\x000eªÀ´\x0011L&¸\x000f9÷A5b5E3\x0011-`A¬Zþ,ÔB\x001db\x001dÌA\x0003õõ0\x0017q.Ìãÿ\x0003ó(Îù÷Ã\x0002Ä\x0005ð\x0000â\x0003°o°\x0008q\x00114 6Àü\x0019xâCð\x0010âÃ°\x0018q1,A\\x0002K\x0011Â2þ4,FÄFX¸\x001cñ\x0014¬\x0015+a%â*xÿ\x0006\x001e&Ä&ø\x0007rþ\x0001"ý(¬F\
!>x\x0012\x001eÇ\x0011×ÀZÄµð\x0004ÿ5<\x0001O">	ë\x0010×ÁSOÁÓüWð4â×ð\x000c<ô³°\x001eéõÐt3ü\x0013ñ°\x0001q\x0003lä¿°	q\x0013<ø\x001cÅçá_ÿ\x0017\x0010_Ía\x000b\x0002¶ÀVÄ­ð"ÿ\x0005¼\x0008/!ý\x0012â\x0017ð2¼ø
X\x0011­ÐÂ\x001f\x0016Ø¸
¶#n\x001d;`'ÿ9ìW\x0011_]» \x0015±\x0015v#î×øÿ×`\x000fâ\x001ex\x001dñuØË\x001f½°\x000fq\x001fìGÎ~8ô\x00018x\x0010Þ@|\x0003Þä?7á\x0010â!x\x000bñ-xÿ\x0014Þw\x0010ßwó.¼ô{p\x0018ñ0ü\x001bñßp\x0004ñ\x0008\x001cE<
ï#¾\x000f\x001fòÀ\x0007\x0014?\x0010?ùácø\x0004ñ\x0013ø\x0014ñSøÿ\x0008>cH\x001fÏ\x0011ÿ\x000fñ#ø\x001c#\x001e/\x0010¿\x0013üp\x0002¾Dü\x0012¾Bü
¾æ?¯á\x001bÄp
ñ\x001bÄ÷á\x0014Fú4A<\x0003mÈiÿ þ\x0007Î"óüQ8\x0007ß"§ø-|Ç\x001fïà{Äïá\x0002â\x0005¸x\x0011~@ü\x0001.!þ\x0008?ñÿKð3Ò?Qü\x0019~AÎ/p\x0019ñ2\á\x000fÃ\x0015¸ôUø\x0015ékp\x001dñWø
ñ:â{¸ï¹ô
¸x\x0013ÚÓ\x000e\x001dü»ÐA\x0000'\x0004QXÛqÿë(
þ\x001fvXwNòÙân¹>ô'î½J\x001fÍ\x0006¾·øß³ÁÙI\x001bä»±Á©gvwd½÷#é»È^«\x0003Ú rì{\x000bÙÝµîOþ>\x001b\x0014®ò»´Áµg¶ÃäzL}\x0018ª>&7jØ¹ï-þ÷lðpsD\x001b$wa[ÏlùäzLw1\x0005{I^ÎÀä\x000eÎí)yöÌvü\©\x000ffö1ùz» 
²;8·§äÝ3»ûrÕq½)ØK
ðU 
\x000e\x001e}oáÛ3»»Ö}\x0018×»\x0008ß^R`\x001bÀÁ«ï-\x0002zfw_r\x0015½÷ó÷ÙÀ\x0005z 
r¾·\x0008ì­èëClÞásæ/¤ O´Áñ.l\x0008ê­èë
w±ôÂÞ¸Mp¼Cô=³Ý»åî°xuMw±ôb"üÐ\x0006;\x0004HO)¢gvw­ï°xuMw±ô\x0012¢ûáÎÅ%¤ï-¢{fw×Ú¯÷~ú0T}LIñAhâ\x000e\x0001ÒSïÝ}ÉíClÞÅ\x0014ì%
Lâp³ï\x0016Ù÷\x0016I=³»k}ß5Ýásæ/¤Á\x0003hû\x001d\x0002¤§4 gv¿n¹àÞû¹e¤14
w^ª¾·\x0018Ú3ë\x000bë½>ÙÇ\x0019;Hß;8·§Ù3»û\x0000¢zï'´ï"{IyÙI¸ô\x001fÒ÷\x0016Ù=³»Gã\x001d&~×t5ú/¤\x0019yp\x0007\x0019Þ÷\x0016y=³»kØ{?1}\x0017ÙK*)HÃmsð¨¾·(è­î\x001bØ{?	}\x0017Ù{bìÿ\x0019ôÄM8&â·\x0004ºþ#\x0011þð¿C!/ºoWÔ=³»»nrßû»sówtB\x00084 /~DB/¿Tr©úÒ.\x0007¸\x0014ò{Îõý:x»4üáÃ¦
\x00192h@ÿä¤Dµ*!>.6&:*2"<L\x0019\x001aÂ\x0005\x0007\x0005ö\x000bð÷óõñöòôpwS¸º8;9Ê\x001ddRXÄ2\x0004â²#8kDU\x0014¡\x001c=:^È+µÈÐva\x0014Y9dì^ÇÊ\x0015Ñj\÷\x001a¬Yz[M­¦æVM¢àÒ ->ËRrÖ£J®LTôÊLe!g½Héñ\x0016EÐ3fBB°\x0005å[ÉYI\x0011e\x001dY[ÞUýµ8Ê3\x0019zy|\x001c´È\x001dtDÊê£4µ\x0010a\x0012OÖà\x0016\x0006dÎ¨Õ_eõSf
*XÙð,muâ¤¬ÌÂø8+ÉÐ)­ \x001cau¥U ±J2¬R*3\x0008æÀr®%î@ãV\x0005\x0014\x0017Å:(K´3
¬¬¶Pá\x0016r3­>sÛ|Ïbçî\x0019\x0005Kº\x0006°Y¾\x0006NÈ66.á¬Í
º\x0008XX}`[&|dQãH\x0014½\x0002½Ç¡4æáÂ\x0002+y\x0018Er%U6ûôÊ,S4³:(G(Ë\x001bg\x0015áØø7Z!·>d¿¿f7ÿ
øgqù\x0005Ê\x0010ëð\x0000e¡6³_'4æÖo÷Óp~ÝKâãZ\x0014n6Ç¶¸¸Ú	'ç®þV\x0019¥huÊÎ½åY"h¤\x001c\x0011aåt\x001cjR DR\x0004Ð§@£.\x0005«a*$ØÊZ#b°:d\x00145*\x0006\x000b|¡½U\x001c®PrW\x0000#@yñBwÖÎ+®@
qr+Ö°¼¶ÆÆZcb\x0010fà¢Ãh~@|\m+®4)8| û`"úV[8Xî\x000f	\x0011\x0006xy«\x00061c]8©Àç 8`\x001bhT±V¦H(9ÐYâ5Y(YØYr«y\x0012#y\x0007Ì^VYÄ­?W·GVù`+ñþb½­<;O=iZ\x0001ÕXd÷mv~·­<åV²zd\x0014°\x0001b\x0002XZA9ãVe!Sàd\x0015ã\x0006uI«TQI9\x001biU\x0014¶a¡<$¤ZùKB+úø½]MëàØîù!ÝòÝÔsjdQaQ\x0004?­±QÞ­\x000c'ø\x0016%Y:©ECæM+Ø­À½àÒüm\x000ca2F\x0014¶aYÁn\x000eNÊenq\x001c'ä `Àncd´(`7.Ñ\x000bi©2h^×Jòd<\x0002ºVÆÆSP\x001e¦xhÉwO÷d"ñ`"ÀH¼±ÞL\x0013(\x000e§¨\x0012QmS\x0005\x0007·2	ÛGÜ¶Àh|i\x001cOù\x0007'Fº\x0007§E
y\x001fÍèào¶ø\x0005Â{kdRðÒ´¤à\x0007ñVá]y¡^äè`c¤±Ò¸Ø¸D4\x0008¼Ó¡»LÓJÎ¼:ÙÓÁÓaPS+Ù¯I6í6m6IJ¤MS¥M#¥M\x0003¥M	Ò¦XiS¸´)Lê)s)d.2'\&Id"\x0019#\x0003g+ÿ&Vøö(D$ Ò
F@á\x001f\x000c`È\x0018\x0018\x000bV\x000f6ÉÎ\x001bA²­\x0007t]ÌY¯æ)[\x001cGV¬\x001cA¬îÙ?Â×\x0012Ý*ås­b³­ÒÓ\x000bZ\x0008YU\+³\x0014=_ÐJxõp°î\x0006BøW\x0006Øà];Üw¸û0·Ô=@\x001dcO¾±]SöÄú×!Ôà1*X¶KWK\x0005n\x001er(·Ià6Q®o uMv^uK`¡5I øÀB²=}§f°î\x0016)³ôx\x0017Y×ûZ\x0017\x0016s\f§}A(*Ö\x000bO­ÞºS©Ï´j\Kú¼\x001eç	ÅéÊÌ\x0016_Ð2O£ÏÜ®IÏRj3\x000bwC\x000e)nYÕMÜ²Nq»!\x0014ÿ±ÇVR,t\x0019#HÌYÕÄUBq q q 1GC%f\x0019\x0001XÐ"\x00118Ùés;ã(Ç±(
\x0008)\x001cá­0
£\x00033$ÄwAÀk"á:G\ûðsÔ\x0019o¡(>=>](Â\x0011\X{ï!!\x0001¯\x0017ìE
d»)G@lMìmÉ,$ðÍ2d
7j²?À,Üæ\x001e\x0014[\x0018\x000bâ{ Q<\x000eñîÇ>&\x001cNùSö»­£¿(
ÊYüÂ×i;ì·-iñÌu/YÆÂ\x001bp	ö\x0018\x0008\x0007ø\x000fA\x0007\x0005L\x001d\x0003ÆÂ#°\x000b\x000eÀ×xd+Á\x0010÷'óã\x0015xly\x0010!UäÏïqp^æ
Þxê\x001cL \x0001/(gÉ0\x0006\x000fIñ0\x0004·¤Ë \x001aq\x0012ò¯\x0014,!xØº\x0007¥?\x0006OÁ>x\x001fN\x001fö\x0000Ç\ã÷@\x0006\x001eMt0\x000fvÃ×â\x0011âåà\x0001ÿÁf8\x0008ÿ!	d\x0013ùýßÉ\x001fá¿ÇVÑxB\x0019\x0008Ó72àQø'Öû\x0017üQ²\x001by~\x001eÿ\x0002ÿ.ï3a+Z}\x0010ÞBYW	G¦\x0010\x001dó<[ßñ\x001b_Åo¥;R/A{¼ÒÑ\x001c°ÀsXó\x0018Ü \x000ex5à:9Ñu¸ñ>ÂLÁ³v,ê7\x0019*a\x0001,hÅ:X\x000f¯Ày2£ä\x0007ÆYÈì\x0017OæHs\x001cö·Æâ¯
o
A\x0008j;\x0015fãzð\x0004¬ÁÿDYðº\x0004íd \x0019B1$<B\x0016çÈ¯L,s¹Áº°®l\x001c[È\x0016±óÙÓìu¸}BÇÚ\x000fùü\x001cô%.GèÏpôZ&äÃ\x000c0\x0019ê`>,DíVáÕÞÛ\x0015ý¹\x001f¯7á+8×Y8\x000f\x0017\x0008CÄh£Äà¥Æk\x0008Ñ±d2IÊ¬%¯V²¼E¾#þÌ@&Àä2e±0Miaö3mÌ/¨å`65³\x000f°[Ù7ØwÙÙ/0êÇ´"¨FôÈ*úLtItYÔ!\x0006±\x0012¯\x0004±VÜÜ¾¡#»c:\x001fÁ\x000fáù|\x0013^çÑÇAÂÛL\x0010öLÄQÕ	oÕ U&¸\x000f¯zôÝÃhÑ\x001ax\x0016}'xïUh×1Jß\x0010Þ¡\x000fá\x000b´ï+8-¼%Î\x0011ìó"!$$¢QxMÃqª%óÉB²¬C?·x\x001d _¢\x001dhá\x0014¦¹©eæ3+µÌSÌnæ\x0000s\x000cGg%8\x0012¾ì(6ÊNgïe-ì\x001aö	öIöYv=ÛÊ\x001e`ß\x00161¢Á¢¢jÑ¢&Ñ\x0006Ñ+¢wD¾\x0014«ÅCÄxYÅ;Å{Åg%î\x0000II¤U*ÕËÎÉ:`;¼\x0003-°óö#\x0013YJ\x0014¤\x0005^"çX\x0011»9Â\x00140Ì1Ò úDâ\x0008¤\x0011\x0010¯*ø\x00195\x000c$\x001f3ÈTVG¦¡ÿ\x001aH)\x000eÏ°ýØ
ìX8"®"yìDR\x0002y¢µpSü&hÅÌ6\x00117²íä:³\x0015Êa\x00153»}3_H\ lbÇ¹\x001fÒ Zä\x000fÇTÑn\x0012ÎD3û¥/V\x0018&°©ì`+æ6±gPÍ<+ù\x000e´ìi?§pnå2Ïãp|)Úµ³¯`ûa\x0018ÙÔá\x0006ÅL\x0011éÇl"ãÚ\x001flÿ}_OüÓ\x0000íníéL\x0006FÜd~\x000b³\x000f~µ\x001d×EßÀ>æ\x0004LÆUCGgÎÏ8÷êp¥\x00027\x0019gOy¸pm*Ããe\x0019Y! T§=±HÇ\"Ö±,ãï \x0015é\x0008øÉ¢S|cs\x0014ÓÆ·§å(®¦W´§Áð´ö4áNT'»¸¸à&Ç\x001e¸©\x0011Ã
àD\x0007èëÈ|\x001bÆõÔ	|aÐ. Î\x001eR\x001c¡V²`w¢ÂÑ¿\x0004jäý\x0013Eý=fúéWøÆ*®¶µ·µÁðö«iÃ{jj¢ÚCÉF\x000cè?09	\x000f¨R\x000fO2Ô}(¢@2B¥N\x00173é	ñééñ	é¤\x001dà1nÜ8¿\x001bo&¤§'$h4¶×¢ñøë½\x0014çýfÍ¸\x0014HaFÊE­ §ÉÇÉgÈ+äóå\x0012ÉÔA.:AÆ°N"G<\x0004\x0002å\x0012O¹\B\x0018
\x0013$	H\x0003e\x000e\x000e\x00121:LÞÊXvhD¬Üi?s\x001fîf^ÂÕN('×·;
óS\nó¿xÑ\x0017=æqxZZZª
Ý&^\x0010»äþCK\x0012|\x0007qO\x0015.áOj¸ÜC<${C\x0008{fsIûÞòö=å[çÛ\x001f"ÃÙýdåo;Äã:Ìºö Û©_ò!Z¨ãøQª©ªZÕbÈU\x0019ä\x0010\x001a\x001a¬\x000cò\x000b
W\x0006E2Ê Y¨R¡\x000cò
UrÊ Pe+ÿ]> â|\x0013TªVbÔh||=}||½±ÏH\x001fo$½½Ñ*\x001f/ç\x0013Ï$ø\x0010ÖÏ×ÛQEF8àNOõ\x0019äù$úøøs	ñÁÜ\x0011WÂ\x0008È\x0015®~êÄ#!é;q\x0007CC\x0007£F,}æY ³ ø"-M@Ta¨ÝRÝ\x0004'¸¥vsMç\x000e,QMî	!n>ÞÉÉ^!\x0003\x0006
\x001càÖ?B©\x001c\x0010BH2T*ñº­°aí\x0003Â'ª;¢ÔSÂ¼s¦ùâúu´ª©aÞýÂ'ªÚ\x000f¨§*½Û¯Ì7çÜ\x001f\x001c\x0013\x001eÞ«fk-¹á7Nhæfã-ö\x001bËl\x0011}+H4\x000c\x001aMÐÜ\x0018\x0012\x001dÛ\x000f\x0017Í\x0018Ø
pN	`\x0011«CÃ®­$Dãì$#ê$¥c*:É©Hw%/å®Dø%q{«qWEø¥¤^	)§\x001añòEEûÅ¶\x001cÁM0|üÅá\x0017/*ÒÒÜ¨|Ri\DDFØfð
N\x0007ÌFF(C%^Þ>Þ\x0002\x000flSd Dà%'¡fX´F%¬²fãÞY#\x0012Ã½Ýüæ©43g½z.7·ãÛ}/~{ïë<ýÌÓ¥ó«BýÙÊûæ
È©\x001d\x001d?,T-w]ìî3>!®²rYmí£\x001d'/Y
ï5HüßÜµkÿ»ëò\x001eUQÏtÄÓ3=
^ÔD\x0005i\x0002½É  0lº³40ÉËQä\x0012ãÃ-u»êÀ6\x0011â\x0017%jJ9øE·\x0012U8ñ1F.¶¡©6´\x001fM§¶»	\x000b@F½&.(Rî\x0019\x0011î\x001a\x001e\x001aá\x0011\x0011î\x0014\x0015\x000er¥\x000b\x0017N<\x0011"\x001dÃÂI\x0002!Ø=0\x001c0ZHl¬"ÆÍ¢E0&¿^ãîÝ/ Â'Üß7pµ¨·ßjÔ`
¡î¢A¸®(\x0007Òx\x001ad÷ªºõô¶{/Æ×áà­^\x0012yCÃÛ§k§\x001bW4"n`bCÞý/Ï~~9)xPÍµ5QeÌ¢\x000f\x001ezpÃõÛ×¾íëF¦/«È>´ùãå\x0003^µ}gù	s}\x0019\x001c!d7°dÆÅA
þÎ\x0012?'ç\x001fCõ"6§MAG\x001e#¾ËbÇ8¶öcÇX{I·=ðO&ÛU\x000bçþ\x001b\x0017yên.&êO®=Ëuúë¢\x001bþLí­o]g@ç÷ÔÂ\x001eSo§\x0019üÜyØN³¸rÌ°Ó¢.uÄø\x0019¹ÂNãç\x0010<a§e¸o¶Ó\x000e¸\x001fÞn§åOí´#$ËvÚ	\x0008;íLÖ2vÚ\x0005\x0012ØKÂ·ë"\ÀI\x0014Di±ð\x001bQ\x0002¥%?ÒRÊ\x001fKi\x0019¥§QZxñ©U4ËN\x0013p\x0012÷·Ó\x000c¸-v\q¨\x0016u©#\x0006_qB¼ÎNË B¼ÅN;À\x0008ñvZÎh$îvÚ\x0011Jd¹vÚ	Je¯Úig¦Í¡v\x0019N@iy\x0017\x001bÄ\x0014N3(íÔï"ÐN\x0015V\x0008ú;Í§´\x0007ÒîNöìRßúÁF{wáûÑ¶OS:Ê²õ\x0019Ø¥Np\x0017:Ö·Ù\x001bOéVuÑYÖ¥§.|'»þùõ&}©V§ç6sùåzn¼±ÊhA\x0016a¬6\x0019«µ\x0016±3Uè\x0012¸L­EûgÒ+*¸\CY¹ÅÌåêÍúêZ}Ig½ÁyõÅÆ
np­¾Ú,ÔML\x0018¤æ¢Æ\x001btÕF³±Ô\x0012«/«©ÐVO±\x0017\x000fHP«mMÆçß\x001aËªµ¦òú®,=Y­­3Tq\x0013JK
hFbjJj~¹ÁÌ\x001a«,\x000eAk¨2sùJ½ËÑ×q¹ÆJm\x00157ªZ¯Íé´&E[aæ´U%\±N_­Óõq\©¡¬¦Zoc\x0017kÍ\x0006\x001dgª©ÒYjlZezK¹¾«3XÊ9-
©¨Ðëh±«Ôb\x0019A§­àÌ²*[7eú*}5rL5è2³hàtåÚj­ÎF'pÜdä\x001a«9³Þb\x0011ÌéÖÐYgÐWY\x000ch$Wg¬MyZ3\x0015_iª@óÐ\ÃVúNpA
V2Tqf\x000bÖÖVP§\x0013Ê-\x0016Ó`ª®®.¡ÒîË\x0004ìEUn©¬PUZ\x001fõ©*Í3mÝ$\x0008Ü>¶¨ÓW WOäLÈ\x001f3rLFzþ	9ÜÜ¸1\x0019Y9yY\ú¨Ü¬¬ñY9ùÎrgy*\x0015\x001akÐ\x001dõ\
ºÈrkhÑv¾ºÒ`±èqê©áYÇ¥S/
\x0019Sµ±¤Fg\x0011ì¯+7èÊ»´Å§¡JWQSMÑg%\x0006³©\x0002\x0005\x0008.5U\x001bìq\x000eÅqé\x0014n¬ª¨ç¢\x000cÑ¾²Xhõ{_Uµ{TV/\x0011F\x0014\x0003ÊRm qÒE<6¿Õ×\x0010ªA\x0001¥XôÂÌª6 Ô\x0012c]UQÛU(*­µ©aö\x001ai<\x001ak,¦\x001a\x000bW¢¯\x0015f\x0002Ö)×Wn³èOGRÈ©*°qÙ6\x0003F¨J<çUàY²\x001esÅPOñ³f\x0016æ¿\x0015~Cs«<\x000f,ø¬\x0012Äj(a×±-ì^v?Þ»Ù×Ø\x0017!\x001fÛßê`¹\x000e\x001clÆ;\x001fO¿\x0002=\x001e{\x0012z³ØkqAû6QÔ"ß@kpÈ©Àö	HeR¾ö/÷.ü\x001e\x0008¹È)ÃÖ\x00160Ó\x001ez¬[Xòþ\x0006£¥õhs1òÖi½jlÓÙo"j7\x0008ÔHEak\x0003j[%f¼K±h*¡\x000cj°µà©)·µ\x001e­Õxu2\x001e­û£]6\x001a±¯jz\x0012/Çüjé©¿zu(©
Ûp0\x0001õ)¥úé©Ö©·àG\x0003õD)íËÎNii[3íÕÚé)Ï:ê9#\x0005ÁQ(K×lÚZÐÎ@ÛWÐ\x0016¶8á0gÄýB\x001dÁëqT®ú§ÚÞgíbZGÐW\x001aäê°Ïncj¡þÐã³öËQ{\x001cG#EGýYeº.­á¨î¶vö>uTcJ-³[Þ© ¥Ê°Õ1QMt¤\x0005NÄ6¼r:ÊZ*Ï6ÒBìr0Ù^¯Æ%Gs\x0016*Õ6:wÖ¦S\x00033r\x000cT\x000b¡´Ôî:Úßì.õ´v½mÖWÒ\x0019d\x001b=Ûè
>ãì²^»Î(¨±÷d Þ2wé]"E°­ZaÂy¡Â«^	Øc÷¸L°ë¢¢õ+Q
Ñu´T3!gÝ´I¸U÷ï!D`½®¾\x001c!ù0\x0006Fâ«@O@®0sF"£ü,ää!
ëÉ(\x0003Yx§Ü|p\x00069½\x000b©\x000fmcZÏ\x001aûØ[zk¶Ñ2ÑX©¤±k¡ë\x0010ÿõ]Æ)\x000b#h\x001cÊü=:KLt½)A):Ú£mÔê¨,\x001d	=Éµå
tVU`Û\x0012»T[tÐr\x0013]³ê»Ä ËpÛ*a+[ßn¹P£RQØ.\x001az:¾²zÒ«ê\x000f}÷ÝK¿÷^rkfÙÖ\x0015\x000bÕü÷U gë
öUåv½tñ`Í\x0016\x000b×ùI#ôo³µ®sUt½ÓÞÑR§µÝ¼j[Ãvü}U\x0013¼j¡kö¯ÇO¡ÎÜÖO9jS/cô×gRg®&:Ú£ù¶ùÓ¹;ÐÒ:ùSt7¡ï¶»ÐwÛ?ÐuE\x0014$J\x0014eF"¦bm-Ú(xOÐ,]ø.]V¬íÐÌÜñçé,}óÉ\x001d\x0008ÏÓÚ^ô\x001d ¼\x0014iI9 MÝ\x0010"qY<zñ5g"e\x001b\x0002¢\x0015Î\x0010è¨vc]XÆ_\x000cj­D\x001e+!"Ò0!¢æ<õ$u\\x0017N¿
A\x000bû	?ÇÆk\x0002\x0006 .`zêøaÂ¥\x000eéÒÈó½Q#âÇ
<vÿìXÿW¶=\x001bõïYÍ
^'Õ
ì!¼ãY0bÔ~¿ÇO®Ì\x001dqíDåhçÄMjç[ª\x00121*µh9U,x0ÓÒ\x0013½Ô\x001eBFæá4\x0015·úê*.CkÒ'zªÝ\x0005¶ÔÃ1³¦ºX[UkÀ#L¢+ö\¹$¿\[gÑ'\x0006ª\x0003\x0004£§Áeè«é\x0011\x001e\x0012ÕB1ëám/¦§,¶Ò$ìw3ÒÕA>ÎêäÄ$u5MÓ|\x0013lrRòÔ\x0001©ÓÔy]è£ö²ÉwÁ !\x000fÏNqÜ*]Bb¬:Ú&(´³âò:eåáy\x0013·­fAh\x0003	íê\x0015"\x0006¶¸\x0002òåL\x0003!°ùð¶MGr¯Èï_öâK;r~:yÐuvïÆ~_ì¹~8yëCêe\x0005\x000bVýÕÀg]÷taÎÏuÏ/0¦í_ýókå+\x001e;¼77~ëè¡W^ýì\x0001ÌúßT³6]Û¸îyÿwS\x000fË=ãRtAÓoÁnç¯¿³ãä½3çÎJL`\äñÂ(îýD³óÔø£sú'?îþ¤ûî¯ËU[Îy£qEÌËCî}°`ª±fÚ%÷\x001cVx¥­è»üòªC\x001doýj·Ômmèü\x0013Ã"?
sa}â{?
õ;qhû¨uþ3Úî½òÃüîßZL\x001e¹2Þñë\x000fC§¼ðøÑÖ¾üÃkÎ¿´?Þ|£¼ùeÏ!Û\x001cÜÃ°\x0018ø\x001b\x0017P/ú\Ý_"Ã\x0015¥¢Ô\x0011ê°Î¼,öµ\x001f\x0015:³)\x0001Oî\x0006á0+\x0015hì\x0004z\x0010Âdj	>\x0018\x0002êt\x0017,\x001a¬NQ\x000flîß´Xmo®«®èÖZe®¡µh¤\x0006ÔòN-XÚE`º
²W\x0008%¨!æÝD\x0018üÔ>ñÍz8åç¥c ¥Ä'Æ\x000fH¾mV°\x0016ÁØÙ×¿+x#³_â²ú'c×ìox\x001cë7î¨µ± ê¤,zã½ï\x001e^íqNëüã¨H\x0015¤XÛÞ[³îÓÐb¯kÃ\x0007L0%.üiyÊíçÏ¯\x000f&¯É	ûxsdÎÜwiÓyÿÜ{ÇïýjOìÃÃv>³óø©©ü¾\x001do-¸òÓ³ÖvÄ~2$7  %òÚð±8yu\x0003sÎ>¿½ôéçÑK}Ä\x000e÷®«]zû<þ¯Ì?NGuJ×é8µBUêxÐÞ
eúê^§ä¶Q£¿ú¤|îC¾¥5÷,8Ôº^\x0017Á\x000fÍxz¾["|²ùxM¤¡=g77ã\x0013ùõæ§h?\x000f:Ñözòìw~üjã ýªÕN¯æ\x0005Í_:`¦¸1«£6çdÞÂ
¸g^^:cìÚÔ×\x0008\x001d4nüýo\x0007\x001f:6ùÛEÃwænÛBæþ¼aËÊ\x0001\x001dëÏÞ3K¼~èì3û×\x001cè8Rt]sNÚùý¢IUÏÅüüj£"êâ#_J\x0017O\7o¬ÌY\x001dxXñììkß\x0016¼,Ú¬yr[ÔùG¼_L;gÌþdÀ3;%Û×Äí\x0019z®þûÊ¹×½ÏF¼ôÊOæíÒÄ=ÞZ¿¥ãÓÜ­Ñ\x0005#.¤\x0006må}¶pOXùç°0C±dálû<¬^ôÎ_N·¦$GÇdÛdSÇ¨£#Ã\x0016Þi2ZÌæxN?o:ý.þd\x0006J\x000eôi\x0006ö¿}\x0006
£¼dé\ÂMÿ¦þ½\x0006õ¡öÝ~köþ\x0003ÞÜ{ôèÛ]>ç¯?\¬v{ë%àÓG¿ù4çÑ2?kßÄ£\x000f[èóà¿"Wy¼q¸õtöÈS¦?ðñ\x0001a	?\x001bVV^ÛsØûñN\x0003åuÇ¿²xÉAsÓ¯Ë,s[7>1omËµG¢ï\x001bP\x00130:ýK;¹ücuÍk\x001btv\x000f\x001a/Õìqxêøu·É\x0011ë´Iûæ2Öy÷mxsyhÜ\x0006Ô¾þ¨yÆõÝgÇyÉGÚ>þ´Â\x0018WkÑÜ°·+ýqÍ\x0007¦ï»ì¼àËæo¬½Ïpðé	£Ô\x0003BZ6¼â_\x0016{|Õ\x0018é¼Ï}·Ïwúç\x001diË^R7Üq	øÍ¶\x0004¸ÂAX¶Ôí£aWu\x0017NjºzL+©snÿ¿êÍ3¬lã		\x001d/\x0010TIh*¨L Ð¥HY¤ª\x0014\x0010¤( "Í\x0002	HSDÔP¥\x0004¤#E ¢\x0014éM\x0014Á+°à^:"J]\x0015\x0000\x0002{Õg?íÝg?å9s23çÌyÏïüÿïaå\x0012Õôô
ð¦åVáûpûáH\x0005\x00054|+yº=Ü\x0003\x0008müç5éY$\x0002\x0010Ù\x0018&¾íz¬§§\x000f\ý¼§·«O\x0000
\x000f
h\x0000\x0004\x0000ô&\x001ed\x0001¤¬\x001cr³ø7´èOrº'µ^cJsûÒâýí©¼hVIÇ2)«)\x0019pÕ&\x0019É\x00191ö²î/4\x0002f
}[ÌúæÞÝ	\x0013I\x000bu.kp\x000ft\x0014ë\x0015V\x001ed\x0007ß«¯>èä"Ø¥x ­ÜJ²V{E\x0015\x0013w oBî´^Æp(ûã¤Óæ\x000eÄdû~Ç&\x0013\x001f8)%\x0019\x000b!Ä¹ÓòÆc¥ùÆT\x0012pÜöVôø4a46ü÷\x000f·é\x001a\x0005»«ÍE\x0006W+NÝ6,ZÉ	<ãcXÌ×\x001eÇ¼\x000f\x0001²¼aï~¬\x000fcT¶X³^¾ëÌÂý`aù¡BÉà\x0007í[zZ\x0014LZ-é\x0008êÍ\x0011ð¶Qn­úÈ)
1\i)ûq]\x0019ÚäF.@È\x0002\x0008\x0019´y	\x0012\x0000B|0u×\x0007WïT1ËÜ÷
®¯µ½ÿÿãGü\x0018_§\x0002iµ&z>ïðûJ°ø¿ý8çmìeÓRYÛTéc#bZ\x0014Ç\x0010s\x001f-o\x001d(O×ivüðõu»Ò<y3×Uñ3j-íùô\x0017EF«¤qx¹=^\x0019ñ¹Ö|íÒ\x001cæ<\x00017r¼PÏß,8ø\x0014OEI°ã27\x0013úhéåÇ\x0016zhÊ2®\x0010w\x001a=uzÉÒYlÓñzà+\x001cÉ\x001c!LÚ/`Ð#L5\x001bü\x0016òÀz¡ô×fË\x0019¼^\x0013Ö¬â\x0001d\x001flíFïG¦Ëñ
\x0005è\x0003##¹~Ã¾é .7µÚòQoÕa¹Ý\x0004Ýú\x000fÿöJ\x0008:{\x0014Ú|B\x000eãa ´ËÂq­»ÇLM»CÈ<Û«\x001f¦\x0018~ë|ZÎËt*\x0015QÅAñ¦0pcM4ª\x0001	\x0017pöÕÓ÷>úf\x0012ÿ.$\x0000òT½B¢Q($&à©ÿ\x0004Bö\x001f%\x0003\x0017À¹a7X,\x001dÎ¹P¥\x000fõ>\x001cëK\x0008Õl0bñNg<=¾µåg-ûY7e©7ý®b\x0000b£\x001b\x0002;kðëâ¦F×M\x0001ü{ì¢i$ÏÚáÑUCkªÆ3u¯Ä%|;\x0011k\x001dR\x0016­w(Äû\x0003\x000eêszp-¬¥ÉÚÚÞÒkq\x0019_Ø+Ø¤wÄÆ'\x001c
¹53î¡×M\x0005\x001f\x001bq\x0002GÖò¾"ºøk-Â0Ë8·_T\x001e¢KpbJg t\x0016Ü´\x0017÷Û#Ú¦Á¿Ç¤\x0002ÔÙÅÕÈ¯váÌ\x001c	¡uRã}MK¢\x0013¼²\x0016õ5CkìÂ}aÊìÁ\x0005òP2}Õ
©n¹\l5>2}<@¢àw)\x0019N5¿ªFPËÈeQÝc¿Ü¬÷×ÂêB#o%×º0Å¼\x001c\x0006¹´xVY:Ç9¡}èà¤é\x0004ØQºøEeXñl¸°$Ö³\x001a{L"Xú<$¤Ã!ÿ\x000c¼À\x00187
8\x000f/t\x0010\x0008\x0008ºnQÿ\x0005årK|Ö·mö6»7º.µw¹ö³)\x0001àß:\x000eÊ¶\x0005d
:Oµë uu]ø¬û\x000em}K`Ñ\x0003\x0010êÏy¹1ÜðÛyúÊ)VVÔ\x000b"R5Òñh\x000fSÎg\x0007|ó!È\x0017®úóò¹½!ÝÃ
\x0016¦¹åüíc³é-*toëæ\x000c\x0004¾Zâ
õÏß\x0010f²-»rãá5«ÇBí¤nÒm¹ØÁµd;}=c\x0005IE¸ \x0019úë%\x001b[Ï\x0006®tÀ*2¾wþ\x00100\x001dÓiÃøôÒ\x0003ð!É¢ÕfXEcF{ãÉ«^ó­ý\x0005D\x000fÆ\x0001<ÿÃÜ¥°:fYÉB×ÀÒZé\x0012g¬âp&÷x®Ê\x0012ùÄ=ô\ÌB@õ\x0011â5Ýê\x0008\x0013*¶\x001e
ä|d§Ì½U{3Â\x0010zÞ¦éyoÞß.Åúï]~à\x0015Ã gUj'ÅÉ\x000e\x0010éå¨(\x0013ÜÀ\x0018vj\x001bí½k\x0010þ»\x000cÅ?\x0005\x0019ÛìS@É¡äin	MÕFÔâaZ\x0011ðùKú±Y\x000fùIýJ¢\x000eB\x001c¦È&c®vh°«\x0014Ý«"rõmØ!Û¥Þ\x0005\x0011nå}¥¢\x0017X³ôcíD¹&?/¥/xø\x0016}¹«ÜT_sÜF­ ìd¶#Á!ì¸à\x0011Aêòøµ)íå]\x0013N_G^Qxr\x001cod-¡KËy´ß"õHë×\x0001_ñCZ\x0000h´÷Ò\x0005\x0012gpæ\x0011kKÄ@F¯iâéV\k¢[ÒM»c\x0006\x00132ÝÖÖv'±ç\x000ef=\x000e=ºë\x001a?o\x001bS_R¶\x0017ÏÁ´ëí}÷÷ûMÐ«Úz<·\x0013J\x0016\î¾\x001ed>{Ê'Õïð\x0015÷ø©ñGÛßÝõ\x0002\x0007ºu\x0001põ\x0001×²®Ù!ÄL½Ã\x000cZSåÙ$"oRÈõï¼Ë6\x000cfÞ¸ç7í0\x00114ägØy§àùí/vT\x000cJ \x0003Ôà\x001fRìs÷ïàß÷bAÃøi\x0001\x001aÀtÕtå0Å\x001dÆïÌ·ë¬;?/wWÚQÍmòs2´	@jìË®\x001bB£\x001dNT\x0013P\x0007Ô¶(]ÜÎ}äï¯÷þþ>?ò7\x001fHd\x0004n[3\x000f×!ºæñ²åî:{2\x0005Af»úd+>¹íZF\x0008ø©f¹\x0004> ]²Ó¬\x000fIÆ_06¹Hä^\x000c9÷:ã©M+W§äéÝUXî¬È\x001aÊ\x0008¹|>%ö¬`\x0005È¢üS¨dÜr¯D ]R_öòÂº@¡¹ö=ÝX\x000c\x0015³Þì<2\¤
zÝ\x001aL²tÙ¢\x0012¼©Ííbâ@WXF
½°\x000e;Õº\x001f>V£hº\x000fÃgV].5¿OÖ­Â?5E½i`ÀA\x0019ü=×t\x001f'Oi\x0008ï¿Ç\x0012¼x¼áÀÈhõ/£²\x00013¢Wn²\x001d,3¶n¬;beUð²cX¦¶cúL\x001a:\x0000I¶Q±ÙD\x0007\x0006\x0003ò\x000c\x001cÿ\x0000øí4v:a\x0002àÞZP÷\x0010úõd;mÝ\x001czf\x0008mgæÚôí\x0012+ò_ÀÎZ\x001e@lûD(:o%\x0007÷v|±\x0002_ÛÿJW\x0006­k]{x\x000cðÞq
\x001bÒ	pLÇ\x0004Ëÿ`ç\x001d\x000eÒÞÚkùÉ®;Y2Xü§±í³õ\x000eÒÿªI(\x0011\x000cjå÷Þ]Ôö5 <±DT_:%¡="ù\x001ex!ÈE ]®\x001cÑã¶7¦NÍ0~¬7 \x0003U\x001eÍZ\x0003Q#ÏAd\x0013B]n`Ã\x0015=M\x0013²=BY«à\x001a\x000fbü(\x0017\x0019~yËßö®¶8ãù¢qj\x0004L9-\x001e\x0011Úl:m9"\x000c&)qr­Në¥°½ªªLl\x0015\x000c¡t^õ:9wqÉµ÷t?BÔ©G\x001am¢]8­3p\x0013SÃQZàÕ\x0011\x0014I\x0011yùK\x0004ÐZ1_mýÅI/\x00044Ã2úL°!Zd&A-HIºSÚàÝyó¾Nù\x0011faxê-$ÿk«J\x001eaðxMI\x0014¥Q3÷ÊÕ8Ê\x001eú*\x0014L¤Ê""xy{Ä\x0018Dð4õÐ\x0004-¼Oý%IÍ\x001f¤RÙ\x00186\x001a@G¥Lúqogì±noí©¡·UCd§­÷Ô\x0005^Vöm;ê\x0004¿;B\x000f\x0006å0L\x0014¥\x000fJE	Ù\x0003#Wãz\x0010\x0002î¦Zºo»\x000ei¶­Øz\x0018ô$½×¨¿£D±ô?fï¯¿÷J¹ù±\x001e\x001eÍÐ/^ê::õÃW»\x001b\x001e­½¯{Ù´f	\x000eñ/ìG\x0004¹¢\x001e©Ëä¨\x0006>8B§¾Ò\x001b
TºÞY\x001aæ5'&È4áîWcë\x0006~d!¯ÔÑÍ/÷j:ô1@<Wõ\x0013RgC«Ð÷ái\x0015cÃÕõãh ^oåâþ9ÑsC@Ú=©ñ0>$\x0005Þ\x0010Yg¬©2St3\x0003©êäGI%
\x0002YSN\x000eÙæli\x0004{¡þàëµ\x0010,\x0011¿t;\x0006\x0002åÝ/>ûín¾ÁqE­ôTgd\x000e\x0016'¶º¬p"Å6\x0018xn¦2SB\x000fé\x001f¸ñ_AO
endstream
endobj
87 0 obj
[ 0[ 600]  120[ 460] ] 
endobj
88 0 obj
[ 278] 
endobj
89 0 obj
[ 226] 
endobj
90 0 obj
<</Filter/FlateDecode/Length 77077/Length1 169476>>
stream
xì]	xÕ¹>ç}K&!		\x0003Ì\x001f@BÂnXlì[\x0018L\x0000!É$\x0019ÉædB\x0000A#¸Ð»¨UÔªU\Á%î(nµnµ¶Z­\x0016[Ûj\x0015«u©E!÷=ÿ7'\x0004\\x001eïs{k{ïwÞ÷|ç;ßö´#0Î\x0018KÇ-.­Sñeç§Ã²q\x0013c®me³J\x0015J¾±ª\x0018ãOÍ_rUc¹±\x000bó\x0018SÆTÿyÿ'_1eÝvÆt\x001fV,^T\x0019ªº±KTÆ¯±WTúf=ùÖ\x001fzRTÀXÅêEEãþñÎýë\x0011ë5¼µ&ÐìoK»mÀû"ÞÝu\x00115zõ\x0013/3vÒ\x000eÆ\x000cëÛ\x001a?ÿ|±QuY\x00065øÛÛØ`æÁû3QßÙÐ´¡¾à÷_ÂØªÛáÿrcÐ_÷§#'"þ*OjÁqñuä/E~xcsd}Ö\x0016Ý\x0014¼«±uká\x0016>ÃX×3(Ïlj
ø\x0017´à0cµ]
-oö¯oË\x001e=\x001cmá=(W[üÍÁÜuK>ÿ\x0001Æ2ÚZÛ#½.ú\x0017|!ÊÛÂÁ¶µw)G\x0018\x001búÃL­áÚåû»\x001bÖ$OûeH\x000f¾¿é9ÁO\x000e»rã\x000egùÀt/²\x0016¦0J¨gdG\x0018ÂºëËCvY>Ð"õKºÂ<-b\x0006Í 0'+bAÆRvà½>ï@©Ù°Ó0\x001e!\x0012ë^bç(ÌÌd¢(z¢)½^v{¯Ö\x0002¤\x0005ªÊ¼\x0010»¨
¦k\LçuZÐû\x000cI¢§t´5üEöÿ>\x0019_e·ÿÐmH¤Dú¿ô\x0013XÍ\x000fÝDú'åY¶ónC"%R"%R"%Ò¿*)Wsë\x000fÝÿ´¤ÈÎû¡ÛHHHHHHHHHHHô/Nº8\x0006Ç¿\x0015\x0016F\x000eJYÍôl9òN<:­ÄÁ±\x0005¬\x000e\x001e»z{ã\x0016µ÷~ÆXïßÙ½|Po \x001eÍÞÿMº¹º+ å>>þ[hÈ+ñï¬)ì»\x0013ï\x0017ï#þwù ï(Ûþ?mÊ¿8éþ©ÑþWV·¢nÍêW­\Q]å[V¹tÉâE\x000b\x0017Ì7wÎìò²ÒY3½3¦8mêÉÅ'LXT8º /7g¸g;3-Åì°Y-fÑ ×)\x0015yÊkÔhnMTë={´È{ü0øû\x0019j¢*LåÇúDÕ\x001aÍM=ÖÓ\x000bÏúã<½äéíóäNu\x001a6º@-ó¨ÑçK=j\x000f_±¤
úüROµ\x001a=¨é\x0005Öçj\x0019\x00072ÙÙ¨¡e6ªQ^£EË×5vÕ"Þ\x001eµÄS\x0012´.`{¬6H\x001bT4ÏÓ¶çMçPòÊ¦ìQÙ!^\x001bÕåùë¢Tº²³«5\x001b+ÑbE%Q\x0016K
6³óÔ=\x0005ûº·÷8YmM¾½ÎSç_U\x0015ÕùQ©[WÖÝ}n4%?:ÒS\x001a\x001d¹ñLt9\x0018-ðEó=\x00086oiß\x000bxÔãô¨Ý14Þsðc-þ¸Åãü	)ºØ7L(¡mh!ú-Úr^Õ"\x0013íZREyÕºbÌ[_\x001dUjDÉ>Yî\x0013%]²¤¯z'[LUYMüÏºÆÌhW­:º\x0000£¯ýÉÁ\x001f«Q]nMm Q°?Øí)-¥q[V\x0015õBxýñ¾í\x0019S\x0004
:\x0011\x0012Ã°¤*Zäi¦yf\x0003\x000cªPeV%^-V\x0012e5x­hQY©hZÖ]SJ
\x0014±<Kªîgã{\x000fì ºög\x0013XµhG4£\x0004[Ö]UW\x001fu×¸ê°>ëÕ*WvÔ[á«öT\x0005«Å,yÑ\x0007ðºlíZ-ôí8oé,znÊ1«UKW-f\x000b\x0006µ\x001c\x001fYÓPàÄtiY1£³¦©UÜÅ¤\x001bÞ\x0012÷\x0010ê8ÈèrJf"¨Z2Û]Mé;ä·É\x00135÷å¡¯Môom\x001ay\x0006TË¥ý\x001axLPC¼ñhßÜNEEüÅ¨a\x0016Ó9[\x0016ér°saS\x0010F3YÌT£l±Zå	zª=XCÞÅU¢ob¬µùWé·dE6ÛñU²ì\x001c\x0017S.Ê²Q,3J	Ö`y¾KN«¯Ðò}ÙÙÇ\x0015ÏÅj·Ù3¯²[\x0004÷Ä\x00032\x0015;\x00086æÎñW:\x0001[³\x001c§§ÜïQjy·¿§·«¶{×ÛÝVVÓ8EÄðÌ©ëöTVMsim]ZµÙµQ¼*ÍãóÍ\x001a]³gÖ\x001e\x000fß¶do«\Qu¿1uÛ²ªÂYÕ{£¬ê~1¯fUU\x0018EF\x0015\x0019\x0011i)2fÍßu¿±.­T¯\x0019´| 3Íf6Î\x0002=
ÙÒ¦À¦'W³IÊlÄ\x0010ã¸-SëÄôlªnì®©\x0016e`*ñG¹g:*é{¸b´G­à¬¨Í3KØg\x0008û\x000c²\x001bÝÁ38\x0006GIÝ5\x001eSXPUÌÅi)êDHµ§·wYUöó®ÕÙXj«\x0015UQK>Î~CÎ\øU\x0008ÔÀ\\x0011í
øE;¯JÔ5åÌ	TcÙÊp\x0013µ %\x001e\x0001\x001eåZ\x001d±\x001cQ)¹Á\x0004jõ»vUG«óÅK«BÕÚrvFÙlÏ\x0014L;Å4ä\x0017\x0015Uw§zÆi{\x0013[Ás® \x000bÚÆ*«ÈâB\x0016/«¦A2ÙÑò\x0007E\x001a\x0015£­gJ,u:K­.²\x0004q$ês\x001a¬®x!\x0013ÝÒåØ\x001cÖ¨¥\x0010\x0001ñGh[¡Ø\x001cSu55^Ë\x001bwÀ»Q\x001bZÛo(ã\x00150:(#Ú?ç¢©Âõ1\x0011fI\x000f[êYE4ZdBqÔ3ÇÃêÛ`ñ\x0014ËÊfqFØâ1 «IôÜq×å,ëé½Å³!»_\x001a]à\x0011?\x001cÄÂd®û±°Yu÷ñèÊüÑ\x0005æã­\x000eÍÜÝmv|s\x0005\x001a/³£Q-ÃO
Æb\x0016Ú£u·%ÏØ*Å\x0016)Î¢K3¤8]ÍRlâ4)6J±AõRtJ±N\x000e)"R´Kqª\x0014mR´JÑ"E³\x0014MR¬â\x0014)BR4JÑ E½\x0014A)ê¤\x0008HQ+_\x001a)ÖH±Z¥X%ÅJ)VHQ-E\x0014'I±\
\x0014Ë¤¨b©\x0014K¤X,Å")\x0016J±@ùRÌb®\x0014s¤-E\x0014åRIQ*E\x0014³¤)W\x0019RLâD)¦I1U)RL¢X\x0013¤$ÅD)&H1^qRb\x0014ER\x0014J1Z\x0002)ò¥\x0018%ÅH)ò¤\x0018!E®\x00149R\x000cÂ#Å0)²¥P¥pK1T!R\x000cÂ%Å )²¤Èb \x0014\x0019R¤K&Å\x0000)R¥HÂ)E²\x0014IR8¤°KaÂ*E
³\x0014&)R\x0018¤ÐK¡BKÁâ÷JqDÃR|%ÅR\x001câ\x001fR|!Åß¥ø\Ï¤øTO¤ø\x0014\x001fKñ\x0014âC)\x000eJñ\x0014ïKñ\x0017)Þâ])þ,Å¤ø£\x0014ïHñ\x0007)~/ÅÛR\x001câwR¼%ÅRüV7¤x]ßHñ\x0014¯Jñk)~%Å+RüR¥ø\x0014/Iñ¢\x0014/Hñ¼\x0014ÏIñs)âgR<#ÅÓR<%ÅR<!Å~)\x001eâ1)öIñ¨\x0014Hñ°\x0014\x000fIñ \x0014\x000fHq¿\x0014=RÜ'Å½RÜ#ÅÝRì"&Å\x001e)¢RÜ%ÅRÜ!ÅíRìâ6)nâ§RÜ"ÅÍRÜ$ÅO¤¸Q\x001b¤¸^]R\'ÅµRüXk¤¸Z«¤Ø)ÅR\!ÅåR\&Å¥R\"ÅÅR\$Å\x000e).â\x0002)Îb»\x0014çIÑ-Å¤Ø&Å¹R#ÅÙRÈk\x000f×\x001e.¯=\^{¸¼öpyíáòÚÃåµËk\x000f×\x001e.¯=\^{¸¼öpyíáòÚÃåµËk\x000f×\x001e\x001eBÞ¸¼ÿpyÿáòþÃåýËû\x000f÷\x001f.ï?\Þ¸¼ÿpyÿáòþÃåýËû\x000f÷\x001f.ï?\Þ¸¼ÿpyÿáòþÃåýËû\x000f÷\x001f.ï?\Þ¸¼ÿpyÿáòþÃåýËû\x000f÷\x001f.ï?\^{¸¼öpyíáò¶ÃåmËÛ\x000e·\x001d.o;\Þv¸¼ípyÛáò¶ÃKö
[slèt7îÌ±¡é -;36t
¨rg\x0010\x001e\x001bj\x0007m¦Ü&¢Ó6\x0012m
	Z\x001f\x001bR\x0002ê$ZGÔAe\x0011Êµ\x0013ÉxjlÈ,P\x001bQ+Q\x000b¹4\x00135\x0011­
.\x0003B\x0014"j$j ª
.\x0005\x0005)WG\x0014 ª%ò\x0013Õ\x0010­!ZMõN¦Ü*¢D+ªªN"ZNä#ZFTI´h	Ñb¢ED\x000b\x0016\x0010Í'G47æ\x0003C4;æ\x000bª *¹æÊb®ù R¢\x0012¢YT6êyfP½éD'\x0012M#Ï©DS¨úd¢b¢\x0013&\x0011M¤`\x0013ÆSqDcÆP°"¢Bª7¨(h\x0014ÑH¢<¢\x0011\x0014:(b\x000e'ò\x0010
£ÐÙD*Õs\x0013
%\x001aB4ÈE4(6h!((36h\x0011h Q\x0006\x0019ÓÒÈ8((ÊDÉdL"r\x0010Ù©ÌFd%²PÈDde-\x0006\x0019bYK@z"\x001d\x0019\x0015Êq"¦\x0011ï%:¢¹ðÃûèK¢CTö\x000fÊ}Aôw¢Ï>e.\x0003}\x001aË¬\x0004}B¹¿\x0011}Lô\x0011ýr\x001f\x0012\x001d$úÊÞ'ú\x000b\x0019ß#zèÏD"?Rî\x001dÊýr¿'zè\x0000ýè-2¾Iô[¢7^'ßPî5¢Wc\x0003O\x0002ý:6p9èWD¯ñD/\x0013ýè%ryè\x00052>Oô\x001cÑÏ%\x0011=CÆ§"zè	¢ýäù8å\x001e#ÚGô(=Bô0\x0019\x001f"zè\x0001¢ûzÈó>ÊÝKt\x000fÑÝD{c\x00193@±XÆJÐ\x001e¢(Ñ]Dw\x0012ÝAt;Ñn¢Ûb\x00198¯ù­\x0014å§D·PÙÍD7\x0011ýèF¢\x001b®'ÚEt\x001d\x0005»¢üè\x001a*»è*¢DWR+(w9ÑeDRÙ%\x0014åb¢¨l\x0007ÑD\x0017\x0010O´<Ï£\7Ñ¶\x0011KtN,Ý\x000f:;^\x000b:hk,½\x001e´èÌXº\x000fÔ\x0015KÇaÌÏ¥O\x0002N´ªo¢z§\x0011m¥×6PõõDDë:"Dí\x0014:LÕO%j¥\x0007@­\x0014¬<Ö\x0012B\x0014¢zD
Ô²zª\x001e$ª#Ï\x0000Q-¨h
ÑjêôÉÔ²UD+©Ó+(t5½¨è$jîrz¢,#ª$ZJ´$æ\x0005-¥7,¥å½0¶\x0015´ 6\x001a4\æ\x0011Í¥á^ÀçPn6Q\x0005\x0019Ëci§ÊbiçJcigJbi] Y±ÔrÐL"/Ñ\x000c¢é±Tü|ç'RnZ,¥\x001a4hJ,E,ÉDÅ±
Ð	±*Ð¤XÊ
ÐD*@4>R\x0000\x001aGcc)¢ccb)bo\x0016\x0011\x0015RõÑô\x0002¢|
6h$\x0005Ë#\x001aAK\x0013K\x0011£4ÈC1QÌl
¦R\x00147ÑPª7h0h\x0010QVÌy2(3æ\
\x001a\x0018s®\x0001e\x0010¥\x0013¥\x0011
 J¥
)TÁIÆd¢$"\x0007<mäi%£ÈLd"2§<õdÔ\x0011)Dy{kÝ\x0002G\x0003îÃÉuî¯ ¿\x0004\x000e\x0001ÿí\x000bØþ\x000e|\x000e|\x0006|
û'ÀßPö1ò\x001f\x0001\x0005>\x0004\x000eÂþ\x0001ð>Êþü{À»À?%5¸ÿÔè~\x0007ø\x0003ð{àmØ\x000e\x0007¼\x0005¼üoÁo\x0000¯\x0003¿\x0001^s¬u¿ê\x0018ëþ5øW&÷+\÷/¡áÈw¿\x0004¼\x0008¼òça{ÎÑìþ9ô³Ð?~ÆqûiGÈý£Ñý¤£Áý\x0004êîG¼ÇÇ\x0000oï>|>
<\x0002<l?Õý=ì~ÐÞî~À\x001eqß\x000fô\x0000÷Á~/p\x000fÊîFÙ^ØbÀ\x001e 
ÜeÛà¾Ó¶Ñ}mûvÛf÷nÛéîÛ[\x0002·\x00007\x00037ÙF»\x0002¾\x0011¸\x0001u®\x0007ï²­u_\x0007}-ôk ¯F¬«\x0010k'b]	Û\x0015ÀåÀeÀ¥À%ÀÅ¨w\x0011âí°.t_h]ä¾ÀÚà>ßz{»õ\x0016÷Ùº\x001c÷Yºb÷V^ìÞâëò¹»Ëwo³ïôÝ}¶ÍÜ¶ÙµyÞæÓ6ïÞüÆfoªÑºÉ·ÑwÚî¾
¾NßúÝ¾\x0007sX½r¶woÝî\x000e¾#­#Ò¡û´ïîà¥\x001d|L\x0007WX³CíÐÙ#¾°¯}wØÇÂÃ]áhX?5\x001a>\x0010VX[{z÷í
»½Â\x000egù©¾V_ÛîV_K}³ï\x001440TÜàkÜÝà«/®ó\x0005w×ù\x0002Åµ>qoMñÉ¾Õ»Oö­*^á[¹{¯º¸Êw\x0012ü\x0017/óùv/óU\x0016/ñ-Ý½Ä·¨x¡o!ì\x000bçùæïç[<Û7g÷l_Eq¹¯\x000cgÕÁ:§hÀÂÁh	sñYc\^×\x0001×G.=sE]û\ºÔäAîAÊÈä,^²(·fua.9óÅLÅ9² <yà\x00037ð¯\x0003õ\x0003¼\x0003G\x0016³\x000cg¡K\x0017}ËX°¬\ã\x0019¥Äc'j}]áÉ-ONçÉéît¥ÌÎYÊRté:_t*ÉÉ<9¹7Yñ&Ã=9É¤Þ$7iì	åÉ\x000e·C\x0011\x001f½\x000e]×\x00018Â¾xYy²ÍmS|3ll×6£¤Ük\x001b=¦é¸Ê9ãNÎ,ZÁÓÝåØ×{3¸ãçùeùùózÌlé¼¨yñÊ(ß\x0016Í©\x0014Þ%+¢ÆmQæ[±²j\x000fç\x0017TïáJÉ²hølµüÙçÏf
\x0017\x001dRY\x0015Ý5¤z^´\x000bÂ+D/\x0004\x001b²'ÍªÎ_ÝÞÑ\x001fYÕí|í\x000fr¼CäòQüi /\x000e-Ïò¿3\x001bhM;RD\x001a#ß]ëß=ñ\x001fº\x0001ÿùi\x000f\x0013_2Ù«Åê­À\x0016àL \x000b8\x00038\x001dØ\x000cl\x0002N\x00036\x0002\x001bõ@'°\x000eè\x0000"@;p*Ð\x0006´\x0002-@3Ð\x0004¬\x0005N\x0001B@#Ð\x0000Ô\x0003A \x000e\x0008\x0000µ\x001f¨\x0001Ö\x0000«UÀJ`\x0005P
T\x0001'\x0001Ë\x0001\x001f°\x000c¨\x0004\x0002KÅÀ"`!°\x0000\x000fÌ\x0003æ\x0002sÙ@\x0005P\x000e\x0001¥@	0\x000b	x\x0019ÀtàD`\x001a0\x0015\x0002L\x0006\x0013IÀD`\x00020\x001e\x0018\x0007\x0005Æ\x0000E@!0\x001a(\x0000òQÀH \x000f\x0018\x0001ä\x00029ÀpÀ\x0003\x000c\x0003²\x0001\x0015p\x0003C!À`À\x0005\x000c\x0002²L` \x0001¤\x0003iÀ\x0000 \x0015H\x0001@2\x00048\x0000;`\x0003¬\x00050\x0003&À\x0008\x0018\x0000ýÌ^|ê\x0000\x0005à\x0000cu\x001c6~\x00048\x000c|\x0005|	\x001c\x0002þ\x0001|\x0001ü\x001dø\x001cø\x000cø\x0014ø\x0004ø\x001bð1ð\x0011ðWàCà ð\x0001ð>ð\x0017à=à]àÏÀ?\x0002ï\x0000\x0000~\x000f¼
\x001c\x0000~\x0007¼\x0005¼	ü\x0016x\x0003x\x001dø
ð\x001að*ðkàWÀ+À/_\x0000/\x0001/\x0002/\x0000Ï\x0003Ï\x0001?\x0007\x0005~\x0006<\x0003<
<\x0005<	<\x0001ì\x0007\x001e\x0007\x001e\x0003ö\x0001\x0002\x0000\x000f\x0003\x000f\x0001\x000f\x0002\x000f\x0000÷\x0003=À}À½À=ÀÝÀ^ \x0006ì\x0001¢À]ÀÀ\x001dÀíÀnà6àVà§À-ÀÍÀMÀO\x001b\x001bë]ÀuÀµÀk««ÀÀ\x0015ÀåÀeÀ¥À%ÀÅÀEÀ\x000eàBà\x0002à|`;p\x001eÐ
ü\x0008Ø\x0006\x000b\x0003ÍêfvqìýÏ±ÿ9ö?ÇþçØÿ\x001cûcÿsìýÏ±ÿ9ö?ÇþçØÿ\x001cûcÿsìýÏÃ\x0000Î\x00003ã\x000cà8\x00038Î\x00003ã\x000cà8\x00038Î\x00003ã\x000cà8\x00038Î\x00003ã\x000cà8\x00038Î\x00003ã\x000cà8\x00038Î\x00003ã\x000cà8\x00038Î\x00003ã\x000cà8\x00038Î\x00003ã\x000cà8\x00038ö?ÇþçØÿ\x001c{cïsì}½Ï±÷9ö>ÇÞçØû\x001c{cïÿÐçðxªþ¡\x001bð\x001f2×¬fÌt-cG.9æ[ÙÙ)¬uá9Ï.a²7X-Û
µíb7³[Y=Æ~Æ^ýg~\x0015üÈ\x0006C3³ëîcF6±ÞC½\x0007Ü\x000cô\x0018úY.An^=jéuö~xíÃ#ô:ô\x0018SU«ëP^õ\x0013~¸÷\x0010~¾"ß;Iäs¡µ\x001a\x001f®=r×[\x001b%l\x0005[ÉV±Y
ó£ÿu¬02kY\x0013kf-Z®\x0005e
ø¬Gn
¼phú¨W+k\x0003Â,Â:Ø:<mÐíñ(;UËw°N<ëÙ\x0006¶Æ6±ÍñÏNÍ²	%\x001bµüzàtv\x0006fæL¶ESÉ²ÅÎÆ¬Ë¶±\x001f}gîG}ªÇ¶c/`\x0017~«>ÿÜ\x000e<\x0017±±\x001e.e±ËÙX\x0017W³k³^¡Ù¯b×²ë°fDÙe°\§)Qú\x0010{ÝÃîdw±{µ±\x000c`ÔhDä¸ÔkcØ1Ø\x001ení×b\x001a¿Î¾Ñ:\x001d}\x0017}ë÷t=ì[úÕX\x0017\x001fGá¹\x0015\x0014æADÙ|ÜHì@\x001fH\x001fí\x0011å.ÓúÔÚT¾Ë*Çã~#sµ\x0013êxë·éËÙ±\x0003¯Ç§\x0018U¡n&u¦ûÛ¯íóÝ¥åod?a7a.nÑd²Ü\x000c}\x000bû)ööml7»\x001dÏQÝ_\x0011ßÉîÐf.Êö°\x0018ÛËîÆLÞËîc=ý»Ê¾É¾7nõYîg\x000f°\x0007±B\x001eaûpÒ<GZ\x001eíÑ¸õ	ÍFùÇÙ~ä\x0017åbOãzý=Ç^dO"÷öù\x000cr/±Ù/Ù«Ü\x0001õ\x000bö\x001e>\x000f³\x000cï°$61Ã\x0003\x0018çkØj<\x0006JíºqèMf\x000bØB¶ò!æÀû\x000c6ßsOzi©y´é\x0011ü(WËq^âMÖ+û\x0006
á¹o¢ñ|]Ê\x001e>úî\x0019¦óqÍqø­Ã/\x0014\x001d~ë`êä¢¼èÍ·ßzÛùñ\x000b)Æ¿ýÊÛcÇðì\x0014
iIÉfô\x000c+T&È4~ü¸éÊÄ	¹aIf0ééºñã*º4i®<×½üÕ
Ý¢ÃFåtÏåã
C\x0007%§9\x0006epfêèi9ÎÊ9Ó
t&£Î`6å0kØ¼¦²a¯R¤g\x000cI5Sd¤\x000fI1\x001d~Ãtèo¤/KôM_^ª3N]5c¸îJ«YÑ\x001b=C3³FMÍ³<ySo\x001bàLÉ0RSìy¥«\x000e>XÄ\x0018N±\x000e/`ÝÞ{È\x0011Æn÷:k¦·MW\x001ccÆ\x000c,*²\x0016ff\x000eêé}w¯/\x0000´79Î\x000e?ßk×øÝ½6ÁJwèð±v»5\x0013îVg²ø£Õ
/k&\¬\x000fàw\x0010Ö»Ï\x000c\x001b>i-s £(sl¡Ñ·ÄíKõ\x0019|l\x0006RêÀÉ)ãgð¢WòßÖ~\x0004K\x0019ïìS)O,\x001a?>`
  
  
  
  
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
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p><?=%ÍO\x000e\x0002éST	iTSª²7%­ \x001bcO­\x0016M¤*wS¬íM±¸¹ÎNUÖ\x0016ÑéºØ¬Lªâô\x0014[%V\x0015'§è*Émyj©ª¤:}¦T	L;:\x0005°­\x0008Y*)\x0011×gíñL°L À\x000esØÜ\x0018QØ,©<?\x000eo¤\x0011Ã4Z\x000c\x0017²\x0010ÃGøa=ÏTI.FÉ\x0011Vò?·ÿ\x0018\~XÖíËWÍ¶nngß6/ÇoÆc¥®Ô«W¯Ä/×¯Å`(¨?ÞÃ×\x0012ú)Ç\x0006\x000e?ÓcÒ®ËUå\x0007ï-hø­\x000f~Ã\x000fÊ¢qÓzå6RCçáÍ4æá×Tù\x001a9*á1F¦'IHúQB°ÃzE\x001fS?w:Ã²¬ý"K©
®[K(¢\x0018~:ÃaxÖ·hMxñ«_³f±\Ê\x0011NÏÚÍ94\x0008þrW­<\x0014Ór1?\x000e/üÖ_¶Î[Ê\x001cFÂÝ¸óqø)Ý¢Ô>¹ãZ\x0016øR\x001as»360°#(ø×´aÁ\x000cËå¿àr'r*´\x0001\x0000qdM)+F:IÓÏ£CÛ¸/ÛÒ|0</p><p>"w°Ür{ßÐ`½\x0015\Ve­ze\x0015wÃ«kï\x0014ð&0¦à\x0018ßu;P1pü\x0017\x0002Âæíçk\x00110a\x001d8Ü°\x0003î5\x0011
DÁi.\x0010c~=ì\x0011\x0006öw	Ág\x001cìÇá\x0015¡\x0011S\x000539kJ·T!õ\x0010õbNU!r7â\x0017i!I\x00073\x0015K©þ°l§6oö\x00027:)Uêat³@L·M(êÜ\x0017lÖNá(\x0018.\x0010è7A!,\x001a\x000e{}^Å~\x0016{×Ô|n?&æÌ·Íæø´\x001få\x001d·¶@Á¨\x0018\x0006\x0019\x0000`p£Èµ\x0005\x0002\x0003m\x0012d\x0008>¥ÿ-ZÅ¡@\x0019q1\x000fÛÒ\x0008~=+Aùü\x0012JNæË·ÁÂé;\x0014}Ù³</p><p>\x001aV\x0003\x001eÈìZ\x000cQ{NùûD~.{\x0013ô­bìãÙL¤®ö ­µ\x0010Üv\x001fÜ:?\x0000÷_HµOÑ+ò"R=\x0010á\x0013\x0014¸Ä0ê\x0015\x0012ÏÔÁÃ4\x001c")à[´â\x0011Y¨b4¶ûÈ\x0004Pê>\x0001L·âV\x0016Dä¼!%!!-V\x0002&Ì]\x001bÙ{D\x0011ù\x001dJ@nL{gµ¦9\x001d©þ± y)ë\x000eÁPÏÂ6,-\x0017\x0002u'pÓfåî·x¦ÀâP\x0003ºÜ2L*¸:µÙìIA	k"³?·aÓvØ°\x001fâ\x001d±µÏh\x000eqÖífÍUg»2å_ß+ýLLBù\x0002N\x001dÐ\x0017:\x000báÏ</p><p>æÓâJð	±CÖí\x001adSß7¾xÞ\x001bA¢|/h<Ñ­ä\x0002ç\x001d±Z½p\x0016Ô ¶h§¤±ÜWý¼{Qäp$
bÐ"&ûÇ\x001b²ôïFdÏbµ´íCô)\x000c\x000e\x000bë-\x001c\x0006ëü»}H}xÓ5A`So:Æ\x001e\x0002\x000cñ>FX§	Å¹éÖù¤\x000fòØ½	ædøO¨\x0008ü~}ý\x0006*Ú©6ÆNn\x0000\x001eu#¶íúÅ=¦ù9P\x0002&ó\x0010</p><p>ªò#¢ÿH5µáÔÏÚ¤!å6"úåÊµh \x000bÂnóÿ
fí\x001eÛ\x0000"*eú#^\x0006.hUyÂÊÆí9\x0016Zè\x0002Å`×nÁdo\x001b\x0007M¦\x0011w\x0017\x0000ÙAGºYìÉ{fÆ^&ØÓØkJeÄL\x001cñ.2l¨ö¹Ûb|
^¨];ïÌÉh;Þ£k\x0008Ã\x0007z\x0016C3Ý\x001cìõö\x001al8\x001b\x000ey8J­ÃD-=@éÚTÖPÒr´</p><p>àì½0qmú-\x0003¤:\x0005ñ</p><p>C\x0019K³¨M¹âµÏÍÚµ§,2ïül\x0001ê\x000eì®T!Fyb%¨1Ò:æ1EÁ{7ydp©íÇ\x0002!ú=\x001e/àÏÛÇ\x001c7àEÍ*íí£>n\x001fñ:vÌ<¦p;\x0003Wcl\x001e
H>GÂÎYÍûW:È×\x0004$8]&zö7Ä¯\x001b±tÍ\x0004©=ú\x000e)Ã=Ó²ØyïÙpº¾£\x001e½@[uÒcí¸§æ\x000b¸¸Ý}ClW÷\x0012Å\x0005 v\x00163\x001dõü¨g\x0010/ä#¹##g¤ýÞè¸\x0008^d}àÒâÓí}Óý=ïPÀ³ýðÌ\x001bÓ\x0018ð)
R£¿Íw¼³vÄ\x0016\x0007\x0017ßÝ\x0005\x0006ào	D\x0007L4Ö.¬éG¢gé×ãyQ½öÀZ|\x001bãM\x00046[ùs_¸èÒxÂö£'zp\x0018;æ¡L£\x0005</p><p>97]Ëðµ\x0003/Ö
 "G¸rµ_ãù¶\x0019\x0008 ´'ï¹¦,Çò@UZk¸Éö©ª,Kb\x0017\x001eWº¨"W\x0000úEtjSOUæ)ªÒÐ\x001d®Êò$¯L%LVÂbÀzÄUWt;Ü</p><p>
ú¹æ'Sêà¨A[êÙéìðV²ñ\x0014×®Ãq`«¯ÖÄ\x001dÍÎÃúµ÷züA\x001aË:5!æ×£Oð\x0015õ\x0010»þ&u Êïä\x0005Ût¢\x0005p\x0005Özt\x0014þ¦ep±NbÈñ¢LÖGrr\x000ewÇËJ«­ãõ`êÍb^£
y q\x0012uBAPN\x0010×<bèî@ErTA]Ñ¸=ÏÁåTÿJ :uÞ\x0012%\x0006¦éAÁÇ6.¸õ|õ_ß\x0008£ÈÄÓ!à#¨\x001eF\x0002e\x000có8ÓæxA`Q<»\x0012\x001aK0ÿU'àwc\x000c\x001a"3</p><p>1³f:Aß\x001c¡Pô¡³Þ!nØrÁi¥\x0018§}\x0011ñxdJIç~f\x0016\x0001\x000c\x0008DsÞ\x0012\x0005í\x000f(\x0010²iïH\x0011äweÂ%ØÄw$ö9£3&ñºMdSh\x0012ÍM\x0012g§\x001bDw\x001aä@*v\x0006=/ûçàY~y°
)g4À,u\x000e)=únºò\o+¦Xä).Q¾\x0000\x0008OO$ë¥\x0008Ee\x0003g"t¾=¯\x0004;Oå»UÁ\x0014ùß\x0001õiO|fG|\x001c9piTß\x0011T	Ù|"üÃr\x0001\x001d\x0013ÙðÍêûóu\x000b"K{²¥h+º6ñ\x0004øPß]#«òÞyB¡¨Ç:m\x0011ÑëÇPî¯@Ëk'mNÃfp½=ðTüC\x0002_oÝWÚ¨_ç9ç&9\x001fwnÎEà$r\x001b</p><p>¶ÀÇt6|4 ­X³'·PEÜ\x0002\x0004Æev«ßþ
êÛAPªj\x000e«z</p><p>¹ ×¾\x000bØêù&Á»Ç
ðaA,\x0017³8fg\x0014W]\x001c×ÈÇ,\x0018.~'å'Ã{ôª\x001a¯gÅ6ÿ¢\x0017Æ³×ÊTÙc§Á¿àdSº÷xâ\x0011Á0Ç\x000f\x0008\x0008T§Ý¬Ü=\x0018|xöÆ5ÒÊbE|$5­)	ÿRádos]$½\x0004</p><p>ö9\\x00109U2\x0005Ö)Ä{2\x001ct­\x0008hàÖC¹¿ð\x001f´ð'\x0001Û\x0004\x000c·³/P,!)\x0015\x001c}tNû\x0008.½aÜoð\x0010\x001a\x0004ó	(Ûó,¿Á/âZ\x001eÊ´\x0015Ü\x0013ë\x001d\x0000ý\x0008\x001aÍáXÇÆKmT'@\x000bü\x0003N³»òìHjµ«\x0001¶ù\x0011ëx4\x0005×¶$\x001d\x001d¾â²)±\x000f7oA~\x001e£:\x001eêHçæ÷þ
p \x0018^½ÁsÖ¹Ì3<h  SG|V\x0007ý½	M\x000b\x0007</p><p>¥òà</p><p>ö@>·g±ñZp¼\x001c^~ùíÅö\x0000[*Rÿ[VHè\x0010Ë\x0017\x0010ßP»ÕÅHï×Â'°]lí.ÓY\x0016âÇÌ<hZí\x0002­Rív\x0016µü\x0013 ¼#p\êÿ±^Åº	Ã@tïW0b¡\x0006%N\x0014\x0003\x0013\x0003­:\x0018*uèØfH¨\x0014ÔÏï;ß9ÓD ª\x000b±-ä;ûÞ{÷ÌVOç¶\x0010	yç=ãy¤\x0014¨ÚöIåØ|«2,¼Ù_zs¥\x0004Ônp{\x001b>²kðP\x001d\¦\x00191S\x001eØLv§\x001d<CÓeÛpõ
önÿ`¢Ôø\x0007¼0
¯¾Ï`¸<\x001e\ËsÕU$HÇ\x0016ü»-ª0Õªt\x0012,òÌ¹4F)üÖ\x0018\x0001i\x001889ÃÚÉ¤|ÿ{Y¤ñü@\x001b	ðBÔq7ë.¯ê\x0003ãE\x001a\x0004ÖÈî7¥ÿ\x000fæ]åCÄL9À0ÒyØÏ&üëgûa9\x0012è¼è+À4V&X9õ\x0017vë¶ð\x001eÏªî¸²\x0010½\x0005û_V\x000eÛzöÌi"»fØ\x001avÊDq×Nû~{yTZ§²-\x0012\x001b#\x0003Ksõ¸¢4|¿ûÍ¢\x001b§º2=ì^\x001f~\x0004\x0018\x0000Öõ\x0013
endstream
endobj
173 0 obj
<</CS/DeviceCMYK/S/Transparency/Type/Group>>
endobj
174 0 obj
<</BitsPerComponent 8/ColorSpace/DeviceRGB/DecodeParms<</BitsPerComponent 8/Colors 3/Columns 1347>>/Filter/FlateDecode/Height 300/Intent/RelativeColorimetric/Length 183369/Name/X/SMask 181 0 R/Subtype/Image/Type/XObject/Width 1347>>stream</p><p>Hì×}P\x0014ç\x001d\x0007ð\x001b\x001d\x001c3ÓtÚtÚ´\x0013Û0M3:Ó¦M§fÚØq:ÓÚLß\x001d_\x0000Q$¸(/§ø\x0012pÙZ$câ{41kd/M\x0000MfÔUÔJVWÂ
 w\x0007·wÀ\x0001ÇñzÈËÝÉÁq÷,=î@\x0011ÎxÅ,&ßÏ?\x000c{Ïó{~ûÌþö÷ìà \x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000\x0000Àà
 ¨\x0008\x0000/XÈ>OíD\x0000 |þ\x0012\x001e\x0018\x0018@G\x0006\x0000\x0000ÿMQ«W¯æççÍfµs\x0001ð]»v-//Ï`0¨\x0008\x0000¯¬¬eY£ÑèïÎjç\x0002\x0000\x0000\x0000Sÿ¨]RR¢v.\x0000\x0010¾\x0013'Ndee¢¨v"\x0000\x0010¾ÔÔÔ¢¢"BÚ¹\x0000\x0000\x0000ÀÔ¥(ÊáÃi...V;\x0017\x0000\x0008ßÑ£G322</p><p>\x000b\x000bÕN\x0004\x0000ÂwîÜ¹ë×¯\x0013BÔÎ\x0005\x0000\x0000\x0000¦.EQXe\x0018F$µs\x0001ðq\x001cGÓ´ \x0008j'\x0002\x0000áãy¢(Q\x0014	!jç\x0002\x0000\x0000\x0000S¢(,Ë2\x000c#IÚ¹\x0000@ø8£iZ\x0010\x0004µ\x0013\x0001ðñ<OQ(\x0010µs\x0001\x0000\x0000©KQ\x0014e\x0019$Ií\\x0000 |\x001cÇÑ4-\x0008Ú\x0000@øx§(J\x0014EBÚ¹\x0000\x0000\x0000ÀÔ¥(</p><p>Ë²\x000cÃH¤v.\x0000\x0010>ãh\x0016\x0004AíD\x0000 |<ÏS\x0014%"!Dí\\x0000\x0000\x0000`êR\x0014eYa$IR;\x0017\x0000\x0008\x001fÇq4M\x000b v"\x0000\x0010>ç)\x0012E\x0010¢v.\x0000\x0000\x00000u)Â²,Ã0$}Q+»òÅ,üXÁÀÃâ8¦iA\x0010ÔNäQ@AÀW\x0005Ïó\x0014E¢H\x0008yë ¦\x0000\x0000\x0000\x001eo¢°,Ë0$I\x0013ðùzí\x0016,\x001beÓ8Æ*Ùliìp?Ô¤«Ñ\Zµ ÷ryóÝ~ß$ÜÆ\x0003á=áý\x001d¶\x0006¹B/×Xí½þ\x001bäu\x001eàuÙ,U\x0006]Î`47:\x0007/ß[ÔÓÝd1WWê+kj­vWè[&®fSey±¡¥{àÁ\x001f<ÝmõUúÛ:No²v=ÜnÃW\x0005Çq4M\x000b0ñ\x0001GG»ÍRgkjïê\x000b]\x000f;¶jSeUJ7ù\x001fÝ^â\x001b4TËz}Mc{wâÜ=íõ&£®¼\_)×µ:F\x0016\x001bùÛßU'\x001bM\x0006Q®oí\x000eù@+ÄQSq»ôsÕ>¦\x001e\x0006=®\x0006SUyNo¬nwz\x001f\x000c
ðxãy¢(Q\x0014	!!\x0007x\x001dö:³¡rT}V«-õ¶Ö®»£z§×ao´X­
Ív×\x001b"×ÙÑ:&NìïöÆêfgIÃUFÜöÆÚÊ</p><p>]Eliq\x000c\x001d××ÓÖ`ª4\x0018ªFK§gdî½\x0012íënjðwCÿü*s}[/\x0019;Àm·Ê²Ù¨7X¬­	ÞT\x0000\x0000\x0000àÿ¾eYa\x0018IBðõ÷Õ]þûÆu«\x0013W§¦¦&''%\x0012¿båæì6å!z-±]:þûoi^óÜê÷?÷\x001f1&çN\x0006\x0015o_·E_*Ý(n\x001b\x00087ì¾¥ýÛâu;/YC\x001ed&Ïm¯¹yé_{·oJYA­ÛóñµêvGðÆ\x0014âq4UGZª6>våú
[ßÎýÔÜÑç\x001b³eJ¯áô¾õq\x000be²gÊ{î]öºZ+?;wøÍôUËDGÇ¬HÍ|çÔJ«}²v
¾48£iZ\x0010	GxêùSlæÚ
»ßæn´øB\x0016­½èÄ>&meBVt¿Ø_OÛ¶ïJC_¿µð­ëÆ¤³§\x001d!\x0002(×e»]|æèÞ-)«¢\x0017-OLßÅ]ºUßé\x000e>³^½¶0ÿÝ-k¨¤¸\x0015Tò7/­ïñ	Cíå\x001fnúÓ_´Ü²®û?x»ët\x0005\x001f\x001cHO_¼4&6qÝ³euö¾±ó\x0001\x001eW<ÏS\x0014%"!¡«òrî×Ç'kµ)CÅ¤Õ®ÛµóÝ</p><p>¤\x0016§\x0004J»]¾ùÉî×¬m.îê³.cáýé8ÚÑm=J¤Ö¬ÏÓuö\x000cäu6×Þäs÷em\\x0019\x0015\x0015\x001d\x0015µzóëG>)]#¹z{jK/\x001cÙå¯Ð\x0015q¯®JÜôÎéW·;\x0005ªø<\x000eáÓd§kãb£¢%¬Mß{©¤É1\Áþ·G{õg¹\x0007äÄUËãÒ¶î8vñ?V'Ú\x001d\x0000\x0000@\x0008¢°,Ë0$I¡Gx{]úã³Ò\x0004M>ÿÂ\x000b¿]WGB}\x0013æªø^þSæÙ\x001f/xÏâà¤\x0012\x000e§\øÏèù/E¾DÉd0\x0010¶]\x001f÷=æ\x0007sç\x001f«õx'o¥Ñ|ýö³\x0019¿úá7\x00023=bFÄôà>-ß_n\x001f:¸Út'µ³gN\x000blÞ´À'ùEÖekÔ!É{×Y{euä¬\x001aÍ·\x0017nÞ_|ÿÃÅp|íâ\x0004fM1sæ`ðEiÙ¥=ävàñÅq\x001cMÓ L8¢élô\x001f_ô???·àd½7dÑ6óûñµîÿwö¯ÿpJ¾ë?úùlÿ§ã2¸\x0010\x0001ÜÎº\x000b±ß|2"\x0010!bÆázXr¬¨Þåÿ½S¾xpÍHüÀ­yöÅWöÜ£</p><p>Økn\x001cZúLàqy[ÎõÎàe\x000cºnïüÝ/g\x0005CFD\x0004çÿ,å@|çÿÙ:©çy¢DQ$\x0013´Ç[9K H5#"Ø[Ñæ\x001aØpåTúlÿ¥'~³«¤¡Ó;>£ôdö²9Ã\x0013§O\x001b]ì_ûúS»nØ:<ã'Õ\x001cß\x0010ó\piy\x000f÷»9N>V;ÔîÁ^ÝWæ}?\x0018r¸À5Io3\x0006</p><p>ÔÕªçVEÎ\x001cî\x0011#ÝR{«Ñ5ô>j7ð{c¾«\x0019Õ-5//<Tâ¼í\x0005\x0000\x0000øÒP\x0014eYa$I</p><p>=ÂçvÉ'|z¨[Ï]²ußÞ=»F¼¾ý\x001f;ÞûàbMïC¬Xsþ`fb\x001cõF^ýÀ`¨/pußØ\x00107_£5oÉAÛð¥ÿ²_æAM¥I\x0000\x0005\x0015(°\x0000«â¦\x0000\x000f\x0012ä\x0010E·¸drh\x0004\x000f<g]Ä\x0018@ ²2(G\x0014\x0002\x0003\x0002ré°D\x0010E\x0003\x0012Å5</p><p></p><p>¢\x001cB3@ $@B®ý^¢ÖV\x0011§¶vfj×÷ûë¥»¿þú}ùúu÷Äãê¢äCÇRÒrèC\x0002ño¹Ù\x0017\x0016æúëÍÐ+Àáè8úG\x0013³3\x0012üUÁ\x0003vÄ¥7RÙl×£\x000cÅP³:äàøØ\x001d[å­¶^qÛ\x0008W\x001eT8ùún\x000eV_WKnf\x0015\x0014GbpäÎº?+Ü×\x0002uÖzÉ£Ôæí1EëÇKÞþ\x001eïðíB&ñx<JýªÅØ½ð
àúØyxW\x000e%Ê2}?%x#\x0006ØXÅ_¹ªHô´Ôó«Y·;9"Aoù:;#pOq	åì%ËE³Ì¢½Úêð÷\x00089{x4DÑ«»­y13?T_\x0010«\x0005\x001ayUÈvïéóñ\x001eîkj¥ó±ª~H1¶Ì÷5åÅù¢U?
\x0001nÄ\x0002\x001aW®øÌ@'\x0013àÜÄÉ÷ø%Ò\x000fGÜµÕä³@lz^I\x0005\x0001áÛB¡àp8\x001a&H\x001aðegÃ\x001c Hs9:".ùbZj*ñDä¦ufp&¨¨£LN4t\x0001³áæ²¤
\x001a\x0010J;0³upZIzðÚ*S¢À"5U(HLIOO³=5ýtpn~Éþ3/rcüíÀ\x0012=ãÓ\x000b\x000b¯à­ÍÁOC÷P\x0002u</p><p>´\x000bý\x00151nÖ é¬q\x000bM$\x0012Âí5Qp\x001f¹ZÝ\x000bÊeÏ\x0002E54ÚK¸JÊßï!\x000f\x001aB¨bÊdC¼¿)Ò~ã\x0001|ÜÉ]\x001ehðqX_?"\x0012þ.\x0015\x001c\x0001\x0001\x0001\x0001\x0001á\x001bF*H$\x0002À`0[çy]E\x0018\x0003PO\x0003c\x0013i\x001fE<îôg8S\x001c.oA \x0014µS\x001f6?º÷àÁ³×=C<|\x0008å¼~ÚÒÔXßHÞþ~RáLÄîzx+3%\x0011.TÕÔ6!ù\x0012Æ§\x0007v'­²0/;33;¿ä6õõ\x0008_!æöu2ëîÑ\x001f3{8\x00121ûÃëg\x000fó\x0017]#ó¶;©ÛÀ\x0000¢më\x0012]ÖÜüôí¸H4Õ×Æ¨¿UYþfBôelYä0©µ7³²r²³Èåõ¯\x0006¸Z\x001c©DÌíNo|ôìÝÐÌ¼û¡®8/7'+¿¨îå)¡²³ðÇº*¢\x0015Çî$R'_:7ÞÓz=Vo9èV\	\x0005Ï&x=ÍßÁjTpNÃ+¶x¨ù§dO¸sQ	Ïûç\x0000x»!zùÅ03´á§©\x0005lO\x0018\x001cE@²F¬×j tÇjáÊ\x0002^_é÷Vêï´Ç¿âoGø\x0003B&ñx<JýªÅxCx3¸Nv\x001e>\x0003b²Æýàb>¤éä¦j?;õIöÔôôP´(ì-w´3 k\B\x0005{Éòéç9^zð=ÆÄdÖ´KdÝôúËµÔÄõBesÓíëp£ÒD%Vw²¦\x0017Zo&F\x000b®jj\x001aV=º Íud;lf¨£\x0003}ÁX@ãÊ\x0004ã\x00151N¦ªÞãë\x0006\x0004\x000bl\x0016³ÐÇp\x00050Z\x0017}¡êýâou\x0008\x0008ÿC(\x0014</p><p>\x000e£Ñh\x0012D©\x0001yël-\x0004GÞê\x001bcB\x000c*qGSÉù]\x000eòq)xÒ» ÒË5 vPfëà´h©\x001f~[UÊ.~\x0006+w^ë\x0019\x001eãrg8d\x0004ù>=/.Ù^òä\+</p><p>laa\x001fS6>Ëç\x0002ýW\x0001ë¦¤|ÑÇ|u¦pBî>UÒ67ÙßVzD[G\x001d\x0008\x000e¦ßz?ÖÝtU^
!­¤F@Æïo­I\x000e\x0005*\x0001\x0005-\x001f¹£Íùq®às ®édqÝe\x0018à\x001cedv´Å\x0015(?
\x0004\x0004\x0004\x0004\x0004?-R©D"\x0011\x0008\x0004\x0006¡ÜB<Ïë*²Ä\x0018bë¶?©vøßu\x000b«X0û®f¿¿ûºµ\x001eþÇS</p><p>ÛU´;ÈÇÑÎ"â{bí;\x0001hÃÙ-äÓ\x0007°\x001eÎkím,­lìWoô\x000eÛwøIï¨@îcÓG#ÅG\x0006z­²Ä\x0018ëë\x001bÛ®v÷:\x001cßÄ\x0003\x0013HUÚ\x0019{\x0007ì¾c?³Dbù\x0000ÒYqí´³\x0007ö\x0000ñnßBOEÔvguU\x0015\x0008RÓÐ4\ë¶	ýÍ\x001bi ]</p><p>su<|2¸(W:jJ/DîØê±Á\x0006mdddl¹Æe³\x001f6-¿¢\x001f\x000eB$fÝ=\x0014\x0015ììé\x001f\x001a\x0019µ7Ô×\x0001F`l\x001d¼°ç¯ßy»´\x0013.ò&º\x001aÈ¹ééù7\x001fäGÂ\x001f£\x001c7Ô\x0005Ë\x00042½»»%?\x0014\x0003:\x0013È9Ú
#£Oïà­5 ej{x2Ig11H\x0003rvî	°1\x0006óy`\x001cÁQ¸	^\x001eòÚ\x0000´«¼÷VtM/ðFèÉ!ëõ!È&4¦èí¯ÿ÷\x0011þHÉd<\x001eO¥R¿j1~/<À\x0019\';\x000fÊ\x0001±DªÄ}ÿbðz]hoPF\x0012µD(ì-w´3 k\B9{~3úªºàFÎ«ÛzØpÆðYí\x0019Öúp+ÿ]F=ý~éûÀ£.&:&\x0004ZA[Ir¸\x0005\x0004ikÚarD²ûÛ,ÞF`×(Uø«C, Á#\x0013/Îvs²\x00029²*êbU§X.ëMs£Qó<J¬gý7§ð\x0006BÁáp4\x001aM"Q>ºòeI;m UK\x0013Ä_¤Wµç=!\x0018Ûkïge²1zYÒ\x0006
\x0008¥\x001dÙ:8½´|Éøm)\x0011ö</p><p>\x0006} Qð\x001f&\x0019li¨¹q|»ªuJ!j:\x0012±\x0019ìÙâA\x0017òÚOZiCÉÄ\x001bLàR²Èúy;\x0006$(MÈx::3ÚVKÊÍ¾q³kD¾ßÿâF¸<æÍ\x0005-\x001fºèÅç¼@~\x001bèù\x0017öñá7{[\x0016\x0005Z\x000f}³\x001dÅ3\x000bâ_\x000c\x0001\x0001\x0001\x0001\x0001áOT*%H\x0004\x0002Á`(·\x0010Ïóº,1\x0006pw½v3öTZnæå\x001f\x0014ü=9õZÅ\x001dúGØß\x0015í«\x0007Wd-kç}W\x000bsþú\x0017}¸
W5Ù}¡¸'å\x000f3\x0013°p®¢gåî\x0013\x0018èíb\x000e«!ÿ3·Ã @Ow<Èô[	K9y\x0005lßâ`¡%/ð[ãêgû®\x001fÂ®\x0000\x0001¬vù©O$\x000f /³âAÇ ï\x0010ÿf®»rO°:j\x0019°WS¬]¶Fæ·Ï,°UÚ¶ä\x001e!ècæÞýã¬ßzÜ­ÅÆm~Þîæòg]«MÄ²v¾L"ê+]og\x000c)Ðwð\x000b\x000eòZ³r<¨m{þÅ~¹\x00075uåqü\x000cd\x0012\x0006:\x0010\x0006\x00115\x0003DÌ\x0016y
7º:Ò®\x0011d\x0011\x0005\x001f5ø(>ð¢1\x0014ZVQªh]ã#¬¸	>v5B\x0006hX\x001bAL\x0011\x0014#5DBR!@ \x0018ì¹\x0011Ymö\x001fÞÏ÷w¿çßùÝû;ç÷;(·R</p><p>ý6_*3Î´[s?Rú°¥®lO0Ü\x0007\x0001Dqo5j B-+Éã\x0004lðÓÖ\x000bd]FCsàÀÚå)éÂ»?ç/ePmÀTæv®´çõº;?nr#\x0002'Jä\x001dY©1\x0013I\x0018|PØ¢ÿã_\x001fc<ÁãñØl¶X,\x001eS¡\x0012%0\x0019ðo¦E\x00157\x001b\x0011\x0015º,{\x0011\x0003\x0016ÞTúÂ'Ï=e\x0001ÖÞ\x0005W+ªÚ`e>¬Wð}éPàÉJç«ßëÓ°ªöÊ\x0001æd[¸hÐ\x001eá½ZÉ¹ïc\x0001 9ÓvÔô\x000cÁ.eèñå}«ý\x0000 Ý*UC¶îôANâ¶½?^¾úïïç9ØÚ\x0000\x0010/éCçBûå{§ÃCÆ-öÛ\x0002Ù\x0010jÓËsBi®pöéË¿9S÷ÃÀø\x0010</p><p>,\x0016K" \x0008bU \x0015e.¦\x00030ÅmEþ£æÎçmm</p><p>yya.k\x001eÅru\x0005ªTèÌæÎÊ¢@[@tÉ«nÕX¹½\x0006\x001e\x0014g¯ð·]à7\x0007¹§ÏðÎ>uê$÷\x0004ï|±H®\x0019¹hßÉ ²<+&\x0018\x001e\x0007ä èï*;Ì½÷S<)$\x0000"6î\x0017µÀ÷FCoM\x001aÍ\x001dZ»r«z3ÚÐt<\x001aê2mc¼³áÚ±
p[ÉË.6÷¢\x0017\ÓÕ¼­3qÀ~o¦ø¹vøC1®1L\.ÃáH¥Rë</p><p>£N+/ R&\x0002ë\x0004nª\x0018QvJR\x0013Þzk\x0017¹£PÒ</p><p>ß©\x001b¯LqÛW*~í\x001f]îuºÝ¦3·ëÕ?\x0015¤£¯í)[Ôµ¶Ê¥zOwõð\x0011tàêÑ]«>\x0007Â\x0014(GêùD7£\x0004l¸ \x0018în}(:\x0018\x0015ê	'ðð<q£ª¡¥ßlî¸â\x0017rA¡7µ¢_\x00068A	Égn|þízü\x000eoõß|ÉDè\x0004uVJµ\x0016\x0019n¾\x0014\x0016@</p><p>\x0007úÜUGEÍêçuWöÌ¦O\x0016Fì</p><p>aÇ{Ù÷ìîéÌ\x0004Ë.q3·\x0014Üj×÷×ü=Â\x0001\x0000<\x0008>róq7Ô¨j9\x0011dÔâ[úøA×£jëT£EñÆÖ¿ÐÀuA*WÚ3:'Òp2m×Û1wÛz@ðþ\x001e</p><p>ãO\x0006Çc³Ùb±xLJÀdÀ\x001f\x001e\x0016UÜlD¬Õéê²ìEÁnV\x0012}æ¢Í¥ð§3èø¾tX¹{²Òùïù	MÚ\x0006Ñ?¶Ì±\x001c\x001dvS³ErEmÉ\x000fë \x0003D'µUªAØ¥èê/î]	[	\x0012Ùb1
ý=ZÝK
Ý
g¿&Ûãà	/é³ÌgÔ÷VdÌ£Ú\x0003à\x0015»ñH.U\x001e7\x000cÛ\x0004@IH:.û\x0003ÁÃÀøT\x0010</p><p>,\x0016K" \x0008bU \x0015e.ù\x0002\x0000[G¿¸­\x0019YßqØkbý§»X\x0012ÕÆÙ{KY£</p><p>Ê:$E\x0019¶è\x0010WÝª1ü~\x0007ÅÙ_\x0007ZIvâä9'\x001f\x000f\x000c[_ý5Æ¾\x0007ÿÚ\x0012áêXÅùo7hïï¢»Ã|\y´v\x0010j\x000c\x0006­ý9Õ\x0016ìÜ*ÍÃ
ªºë»æZ\\x0010}£iÀØrýÈzoøèB`\x00166õÀSÀüôÊáÍÞð\x0010\x0008æ¿\x0018ü¸xb`````WL&\x0013Ëåp8R©ÔºÂ¨ÓÊ\x000b¨\x0014´\x001aÇ\x0013Iö\x000ed2Ùq\x0004;\x001c±$>·zô¾o½¹wÃü	ÿ¯\x0007¼ÒÏW·Ñ;[^=\x000f\x000f/dàu¦TÙgèiK/l&à¡%øXií\x0003©àÛp"\x0000¯N?ê\x001a@ç\x001aèhþ¹¼ðÒmÙ6£¹åüe4X­3"ùJÑÒÔó8\x0014£ø'óhÅ¡ý)yi0\x0000Câµ¸Ó)Ø¾Ò\x000b)~¡E!³þIÖìYÎP\x0011¶,§üÅd¨v\x001bë¯Ð©Þ\x000cn]¿Ny1"À\x001d\x0016H1É\x0014#æ\x0005\x0011p\¨ó]Ô·ß=¼k±eÛ\x0004ósÏa[Tsm8\x0019F\x000eæÝwCªF\x0013a±\x001d)køut8bÐRfÓ\x0008ÀuA*WÚóêãÍ]×ÒãÃÑØ»¸:/wäl\x0007\x001ffD%s+:>ðScsx<\x001eÍ\x0016Åc*T¢\x0004&\x0003þ?ô°¨âf#b²"Qe/</p><p>fIv;\x0007GG\x0007\x000b0Ñ'G­K+WÃTÖ7ñ}é°eðd¥óÕïrG/\x0017íO6\x00176v\x0013)É\x001bzÌ/\x001fñ³\x0012fÀür¢®«Ré`Öê\x001e_Üä\x0003\x0000ì±ön×àh³aèmXN\x000b ¬|IÅh2\x001aºïì\x0013àf¥õ %nâÉ>2p\x0018\x0018\x0012B¡ÅbI$\x0012\x0004A¬</p><p>´²¢Ì\x0004ß·\x0013À\x0006O \x0012ðø	®ëÊ\x0017:TÖz»(#Ð\x0016\x0010\x001dbòª[5ßÏ3ð 8{e\x0000:`û\x0019ÌsKºÛ\x0013q\x0013è³gåÃÖW\x0005LÐ¢ÝADô\x0006\x0007ÄMéWA£¡ÿþN;	èÝyU½¨Á ±½¨¶\x0000,dçViÞXº±dm\¨Åq²³çúgZhlº|(å\x000b\x001cÀ¹\x0010cÎ+5/¡åéÃ½¡e\x0012)æ|c·îãâ1^1L\.ÃáH¥Rë</p><p>£N+/ R&Â+wþeÏ\x0006ôº¾Þ×hú´\x0003CÃo¨»JH
x][ì\x0012Ô¶\x000c Vúiå¡8<ÎæU½A"ÙHD\x0002nD¶íWKK\x0005éAD@p¶áò\x0013µîµk&\x00041Yº¢D\x001a\x0000\x0014F$_i0ZLõ<N"\x0005à(þÉ|%ZqtW¬Y\x000c\x0014§YÌ}JÄlt</p><p>¶¯ô\x0002`_hbÈ4\x001eú2d\x0012\x0000~ñÉ×ÚF\x001dV\x000bv®	Û\x0016w¥\x000fµO\x0005\x0014\x0000Ün;ÛeñÁlV\x001caFÂnÄ?.IÔ9v\x001c[ÊÒVÍ\x001dÙ\x000fÁ+QvëQsû½ÿd;Àéñ_åÝnì\x0016U0'\x000cÃà±¶ð~Kÿè\x0004¡W2F\x0000®\x000bR¹Ò\x001eËâ©ýjô\x001c¸\x0003 fê­VÝN[/È\x0008¡;\x0003à\x0011½îäó\x000fúÒ\x0018ã\x001d\x001eÇf³Åbñ</p><p>(	s\x0004ÐÃ¢
ÉD]½(À\x0019Ø1"·\x0017ÿÒÕÞdA¡xªléT÷\x001bÍ&½^Á÷¥Ãðd¥óÕc;SËÛ\x0018íã¦\x0003ÞÅ1úxí\x000b\x001dÚ\x0015ôÞ;\x0019\x000b\x0000Îº®ZZtuÿc¿LÊ²8~\x000bJ</p><p>¨h	\x0014 Õl5@\x0003²\x000b B)6¸\x000e\x0012¡\x0003Ð6j\x0011D\x0008l¢h\x001c;(¢\x0000ÚJl\x0018Û6\x0010»kD{\x0006PY$¬YØ_\x0012\x0012\x001eIæ¾è¡gjz>t·ï÷)yçÜÿ½ï¾{î9§*+b\x0019\x0000z61÷ù\x0012ùÛá(ì\x0013¨DC\x0002¼#¼)¥ì±wÂ²ug7­°\x0007ÿeXd1÷Ø4\x001cß\x001aL&D"±ÙlB¡Ñ\x0001áÒ¹À¨!\x0018oß îÀþ/\x0012\x0012('Ï3ê[ú¥èÌ¨î\x0006zª§>Ð]¸ùôÃî\x0011ôC\x001dñóÊ¬ð%\x0000,2	-á¼êxÃë¡\x000e\x001dþê\x001bÉ½\x0018j½[\x0012á¤3O\x000b\x000b=[Rúõ\x0017\x0012ì1?Mr´Ñ\x0007 (±°\x0011»\x001d¦PìlG\x0000`\x0013¹àáÈÌðÐ}¨ãVkÝæêæ\x0011©zu-Õ\x0005±Î0í¾úfT\x0006´Ý(Úç¬\x0005\x0008æËÞá#rÍ«ÁÁÁÁÁÁùXQ*T*599Ãáhö"­evÖ¦0én>ÁøE9Þßòc×Î\x0016×F\x0001§¿kÆº×Ia+«0p6÷DJ~Qnf^~Ñ³gÏ\x0014Ð\x001eòzÖ\LtÐ\x0006ó\x000c#®u¤êy\x0011DØùäy\x001b\x0004Q©zèûÃ\x001daÉ°bmMjJ]_´§GØ\x0002-+÷¸ÎIX¹\x000cÝÞ¾\x001c\x0000\x0013¯ü\x000eø^Ë\x0000ãPÄb\x0000,ÜVÑÛ'T/3ý½
\x0001X\x001a\x001aWÕ6»bÁÃv\x0000\x00188x¤ÞåIÚ+}=¬á<a	\x0005\x0015ê¶Úä\x0007û\x0016÷mQu\x0003s¼õØ£½Ä\x0000]ìå\x000c-]¾¤sºÆ¦f,CÍu%»L`3\x0003Ö4¼\x001eODMu\x0005ë\x000c¶OúV¾lVCÖí[ã¨\x0003Ì\x0012¨\x001cÌS©êe&­^¼\x0000\x0000ç­ñ×F¦ýµ!k\x00000\x000b<Óó\x0002çcF£Éd\x00165§ .,Ø\x0013\x001eÓ%¾5ý]w²7»\x001b\x0001c¿Ð¼\x001f§>4+äòö</p><p>W'\x0018\x0010ö¤</p><p>¡F	%Ú}ûX°9v\x0005|âùÙQÆÏ|Éi¼élÚN\x0018\x000eFÆ?\x0018ÃèB[\x0018yQ0Fç\x001bÙ\x001e|"Ì6\x001bèh/J4$h\x0003àM)e½¯w´<«¿Çjäp¸Üú¯C\,aKãw §®ï?l\x0010\x000eÎï\x0001&I"Øl¶B¡Ðèpé©;`>´²	/ÕÝ'\x0014\x0008øý|@4<ÈÞ\x001bÑÝ@O]®\x000fô\x0016Rz\x0011å:âçY»Í_*\x0007&Ð±)5øO3ÑvçBÂZ\x0003\x0018`Þ'\x001bS/ßo\x001btjrèQ¬µ¥\x001eL²\x0011éf((èúÖÅÜ\x0004+\x001er\x001bG \x000f*ë¾³ÑÇ\x0005ËÀÊ+(£¶Y(]0«ì¯\x0003´Ì\x0016ìdðÆ±ÇoÅ\x0007Âôl½µäÙ°\x0004Õ¸\x001e\x001c\x001c\x001c\x001c\x001c\x0016¥RI¥R9\x001cf))ÒZfgm</p><p>ón`lJ}B5)\x0013¿\x0003AÄRlºäï¡R¢lM±\x0004ÿ\x0016Û\x001d\x0005Ì\x0017\x0008¬\x0018:~:·\x0015`ÉÛ|Ù5©BGú[~(MLLËÎ­àöu=ªÌÛh\x000c¶]äõ&\x0001&&züÝÉH_ÿÍ[w\x001e{Þßtnÿn;\x0000L­.x¨ç\x001a¬Iù\x001cö$z¶Ëã*:'a!!ü!zÛ</p><p>uB¬\x001f^:\x0010\x0001\x0004\x000b·Uôö	¢ë¤·\x0015\x0000Zö\x0001\x0011_Ï¨ -Õû6yÁQ.\x0015¯Ä\x0013U>îÐÅ6ì`\x0019\x001f³CÝöSÁ~°oqß\x0016U7 iÿd¼Ä0K.\x0014oï÷çÂq±H(èíãÊUâ¾'5\x0014_l'\x000cÜh?uÀ2æÉ­ÂÅ\x000b6*}Ò5ú®êR £uûÖ8ê\x0000ó \x0004*gX­­\x0018bgú¸.õxJ«º°\x0012?=·Þ\x00136.fë§;ýçÇù\x0003A£ÑÈd2ÅÓCP\x0017\x0016\x000c\x00068­\x0008¨hÈ¥\x0013R\x0018y\x001bÆ\x0012©\x000c\x001e1á÷Ù¡îF`áÏ2ÔPÊ+äòö</p><p>W'\x0018\x0010ö¤</p><p>¡\x0006\x0007©¨¹ËÇjú\x0016X¾)ò*|Øj©Æ[ª\x000böêÃ°5qO¯íÁB½&7j\x001eÐ¶²ÜQÞLÎÊ £½\*Ñ\x0000e¼)¥ì±imTöº.?ãH\x001cñ ~\x001f\Ù/ÜãOÐÉ=Rý\x001a¯óqþ\x00080L\x0012Äf³\x0015</p><p>F\x0007K?¾Ý\x0001hÙXÅÔÏ­ÓÝ@Oõ$\x0000Ý\x0005AE
mBd</p><p>!\x00082·å*ÕXSev¸3Ìf»«øÒÿ.|$¯J3#í\x000c±èÖÕ'¯=h\x0013\x000e</p><p>\x0007úCÃc¨¸ãä\x0006\x0007sì!\x0019<JÞy+ÉÐP\x000fæ¿ìk]*Õ¤ éb¿úr0òÚt+JD\x0002~O¿\x0000Q¨Æ[o\x0014Åº@ÝúïyRjQø%ToftÈ5ï\x0006\x000e\x000e\x000e\x000e\x000eÎGR©¤R©ÉÉÉ\x001c\x000eG³Ç\x0014i-³³6éÕÞsm\r~Q^nö[2)i9%èÏD0Eóª²W~</p><p>»N`f»\x0018ó¹¿5a\x001e\x0000Z7¤3\x001eH\x0015b^}Ñ\x0012,{\x001b\x0007\x0016_»É¸X±'`±¥ýôM"tìEMN:½\x0004}^|ùÊÙôè \x0007õ\x0003û½î¤hwÌhí³'óÒå+e§\x000e\x0005/±\x0005¼½g\Eç$Ìð¬È-«0\x0017\x000bÈôs%7Z\x0010W}´\x0018)n+éí°\x0008@\x001a3bW\x001aÃA\x000b
Ý3´òòóiQ¶XMBðHiC\x0014hWÕjw+\x0000lÂ\x000eñ±ºí§ý`ßâ¶5ªvàÃÍA^\Zo0_W½R\x0003\x0007×¯2²()GÉIñ_åÜl|%AE?ß¢ª­{\x00149\x0011³Ã\x000bû£³ôÂ#ÞÈÔ;%\x0005:r;Þ×A\x0007X\x0004\x001d¢6\x000eO\x001bØVEûb©½ó¾Ü¿_>\x0016ég5\x001fn«G\x0008ùÛáÿÿqÀù\x001dC£ÑÈd2ÅÓCP\x0017\x0016ì\x001d'+û]	9ù'rOädgeeÁ0¦äºò\\x000cOÜÝ-\x001eF@ßo]ê}
u³B.o¯pu\x0001aOJ©\x0010~`Úê³CÁ[­\EÎÍ?||äpüñª¦¶7gÞ¢î\x0002\x001cC\x000e\x0017RO&l_c¥>ßÄò¶	ôÝèh/J4$ÀhõJ£5LOJZ/n7m\x0001°tÝòÍÕoNì\x000f¾4¢ò\x0019í¿z\x0007qp~\x00030L\x0012Äf³\x0015</p><p>Í­+Â¥\x001fßá\x0008µé®ë\x0002\x0019:Nw\x0003ý¸×\x0002 ¥ã\x0018\x0014s4#+?ÿ\x0004\x0016ìÙXÈgPÒj]¯çíiÙbáöÊ~É:ïÓ_ûOöë>¶ó\x0003ø(c9\x0008\x0003J\x0006Q()h!\x00102Du¼T@òR\x00081àZÊKv¼\\x000f\x0006d+\x0013e¼m¥Ü´ÞVµ\x0014</p><p>q4¬b\x001c\Xn­Ö´A«\x0016J\x0006ój8ñËÙ>?÷Ø!Á	¶:y\V~ÿ|÷<Ï}ïäßý[R8¼»ºuzýzö\x0017{öïew½¶9räý*\x001fvWüÙpÃ\x001b5qÉ®·Þ9ºýqáæ¹êÍ\x000b5¡óöù\x0014\x0014>lÊ¥;ùë\x0012v×.fëö£\x0015µmªRûç£ëu³?a\x000f<ÎÎ)Ê	÷¨y\x0017ë\¾Ø\x000f\x0003\x0000\x0000\x0000xra9cYVåØ#^wÍ»#2,T<\x0019\x0005KN}í±ßüyNüLºvÿ_!wå¾¹æpO\x001e3{mé-§ßUûûçg\x0016\x000cÕEOÕY2Çm*\x0015k]¡ïÞßÏ\x0016çf\x000fÓ÷Y;sìÔ§k:p°¾ôàÆðçC/uè\x0010S\x0012¥\x001f¿®ìn \x0018</p><p>\x0005¾Ú³qÁ£ó\x0005Çª[ÿuþõµO¯¼I§jýámJË­ËuÉÑ×H6LX¾ã`E;¹Õ`ýyä*#my×\x001e¾y²u¨=<÷é\x00145nÑêr{ÿg£v6q¢8¹Ïr½²¶\x001cû¸+\x0014ê¬«Ü=uü¤AÎXò&/ânw)8j)¤:­ÓFMË­oW>è9Üvy÷¦ùÃÓú,l\x0018½|ÿáë¥\x0001O6ç\x0019\x0011E1î\x0008{ù²¹\x0013â±5eÖi\x001ar\}cÁx#¥+¹·"ÆÆ\x0019ùýµ§Ç"È§V3\x001f8\x001e;ÿÝ£sÍ¸Ñâ»ÿÙ\x0007;ù9zLòÒ7Q0ª\x001eTgã?N¬0wüSvóÒÃz@ªz÷Òê\x0005QµD
²ddÎ9Xö·Æÿõñ\x000100\x0008@Ó´$I\x0008ÅþvuUî^ü\x0014i½Öç\x001c¾`¼u\x001a®¿¿g!N½SÏTUW^8ôÓÑ¤2ÍÅgZ<ê·å"õÙuqýsb÷»Ñ¹k.yIåÚ®¬+Þ§¼M\x0019E{ÏW4B/½3âÄÉë¯Hº³\x001b¾\x001dÝðtCY¼á¬#ry\x0000\x0000\x0000\x0000DÃ\x0018s\x001cÇ²¬,Ë±G Å÷Ü¼\x001cÞöd*Vñë¶ÒMy9¤í.xyßµ\x00062-\x0018r~º½¨ ttÓôÅ\x001b.:É±ÀÝ\x000b%ÏO}:=9%5Õh\x0018µtWÙ-§g³¢8ï\Ù?77Ûj1¤
úäü¢ý§>këÞß\x0007ê®\x001dßñ¬Áh4L©ÆY¯ü\x0013wèµ¥\x0005é¹EÛ.Õ\x0005"cn|hÓìl*Ig±ff®üã×íwÍ\x0014;íÙ÷üjä2JkÍåßmj2Í\x0016]\x0012µhã«5;U¶òÙÓÆRTá»ÏG>RÈ»o/CQÓ×lÚû?\x001b_{X2?+Ãj4£\x001fÅdYXò^¥3\x0012=ÐPQ2i|ÉbÐé3&L|«~\x0010B}÷%8è©|³xòpÝè\x0015¯óU\x001dN¨Íï1+&ZõFÅb1èu3_:péV\x000bìj@?<Ï3\x000c#bÜ\x0011«/\x0016O';ë~Ul1êL#\x000b§ì,ï\x0008Úo\x001cYù£ljä¼UÇä\x0018_\x0011È\x001f¸÷á´I¤ 6¾q¹­ÿiíóÖZ­Ö´4³Å\x0012U\x000e\x0016³É0vÕò[á\x0012òØom[aM7¦(jÆ
åw~\x000b©-_¾³nDF:e^þ3Uî¨\x0004õ×N®û\x0003*IoNMM\x001b<dò\x0016þfc\x0017\x0003øÎ\x0010\x0004¦iI\x0010Q«úì¯VO¤\x0006çM|õR»?\x0018o¦g\x000fÌÊ2¢k1RÁFóÔßVØîU\x001f_7J\x001f3þî{ÕoËEÌv¢x~~1¥Ïi¦A\x0019\x0005\x000b_æ¾èëªùdËª9\x0014dTès;Ëªí®ðñÚOË^)</p><p>wÞèé\x0016Ò:Ó
ÃÖÊÿög»\x001dÛ5|Ùl4ê²f¼°ïÂ=_BÏ\x0011\x0000\x0000\x0000ø®Ã\x0018s\x001cÇ²¬,Ëq\x0007!Õãq»âðxês»Ãc¼>¿Ú½«ÆAßÃi^¯Ò}\x000c©\x0001ß\x0003½ÑVgkhjqty}jïY¤ú½]möÆ\x0006­±ÙÑÞé
¨Áó8¨z]\x001d÷\x001bm¶&{»ËëWÉZÇåö5zG¸íÍ
õ¶\x0016§7\x0010Äd9ÇExÕÞ
\x0011FAÕïîêlmj"+5·w¸@°7\x0004R½\x001e2Ã£ôÜ\x00049\x0014P¼ä.¼O}ük!|	¯;ö³!\x0011{Âã`Àër´4ûn¶·¹ü}ïº÷\x0006ý</p><p>y^nÅ\x0017\x0008â¾×\x0008¸:\x001f´4ÖÛÈci}Ðåö\x0007cÍ\x0007O8ç\x0019\x0011E1î\x0008¬*7v\x0019»=È\x001f\x001c«È¿Tu\x000fo\x0003Ï\x001f£ Hu)ñ^\x0014JO5cRS\x001eGKC­ÞÖÚöË\x001fQY¤fHe)ê¨û\x000cy\x00118Û\x001dMdr­ù\x001b·\x00121\x001dÿ[ Ð4-I\x0012B(æ\x0000R\x0002¤WòÄjJ½Â­Î\x001b¯q{Â];\x0018®vW¤þw5\x0014îØï\x000f¯¯÷AZËÙÖÚÔS¡\x000fû]¸÷úbÎ&ó\x0015µ§«áðf¢³ì\x0002êlö¶\x000e\x000fÔ7\x0000\x0000\x0000\x0010\x0007Æã8eeYÖ:\x000b\x0000 q<Ï3\x000c#¢ÖA\x0000\x0000\x0013\x0004¦iI\x0010BZg\x0001\x0000\x0000\x0000ÀÀ1æ8eYYµÎ\x0002\x0000H\x001cÏó\x000cÃ¢¨u\x0010\x0000@â\x0004A iZ$ÖY\x0000\x0000\x0000\x00000pa9cYVe­³\x0000\x0000\x0012Çó<Ã0¢(j\x001d\x0004\x00008A\x0010h$	!¤u\x0016\x0000\x0000\x0000\x0000\x000c\\x0018cãXeYë,\x0000Äñ<Ï0(Z\x0007\x0001\x0000$N\x0010\x0004¦%IB\x0008i\x0005\x0000\x0000\x0000\x0000\x0003\x0017Æã8eeYÖ:\x000b\x0000 q<Ï3\x000c#¢ÖA\x0000\x0000\x0013\x0004¦iI\x0010BZg\x0001\x0000\x0000\x0000ÀÀ1æ8eYYµÎ\x0002\x0000H\x001cÏó\x000cÃ¢¨u\x0010\x0000@â\x0004A iZ$ÖY\x0000\x0000\x0000\x00000pa9cYVe­³\x0000\x0000\x0012Çó<Ã0¢(j\x001d\x0004\x00008A\x0010h$	!¤u\x0016\x0000\x0000\x0000\x0000\x000c\\x0018cãXeYë,\x0000Äñ<Ï0(Z\x0007\x0001\x0000$N\x0010\x0004¦%IB\x0008i\x0005\x0000\x0000\x0000\x0000\x0003\x0017Æã8eeYÖ:\x000b\x0000 q<Ï3\x000c#¢ÖA\x0000\x0000\x0013\x0004¦iI\x0010BZg\x0001\x0000\x0000\x0000ÀÀ1æ8eYYµÎ\x0002ÀØ/ÿß4î3ÿUû\x0003ªíIî\x000f«ØÐ&¹hóRzV¼©Ôëb2;¤ê8©Q66 Y`RÏvá;\x000c8\x0014'øÎ\x001f¾ø\x000e\x000eccªn^Ù\x000fv\x001a=$Ë&µ}!\>ñéyë¥HV¤ã}çÞÏçyPËétZ,ÅÅEÚFP(Tç</p><p>Ã}}}\x000cÃìïïÓöB¡P(\x0014êõÕÁÁÃá\x0018\x001e\x001eN$\x0012´½ P¨Îåt:-\x0016Ëââ"m#(\x0014ªsÃá¾¾>aö÷÷i{A¡P(\x0014</p><p>õúêààÀáp\x000c\x000f\x000f'\x0012	Ú^P(Tçr:\x0016eqq¶\x0011\x0014</p><p>Õ¹Âáp__\x001fÃ0ûûû´½ P¨W¦\x0003Ú\x0006P(ÔÔ¥K:=òQ*}¶\x0011\x0014</p><p>Õ¹þâò\x000c\x000ffØ8m#(\x0014ªsÍÎþýÔ©wâ\¶\x0011\x0014</p><p>õJõõ?jìléÞ< \x001a¤û·+óÖ\x000fß\x001b8õ³kO«k1ê\x0010MX\x0001æÚÿÞ[ o\x0006Ñ\x0000\x0008ïøÇ¿6ÿò§ÿh¯\x0008\x0011ê~\x0010
h·¸2WÄ ëÍ\x0002{é¼õ'oýðêÏ\x0015²së÷±Ðzdå	Ô \x001a\x0003\x001dû__m<|øMK¶UöÆ\x0019>|\x000eA\x0010D
[p3ç~3`0\x0019¿ï°\x000fÞûº%D\x000b Êw¼ïGý#[¿§n\x0006Ñ\x0002\x0008¯å=ãÛ?~ã¼Íý\x0003u?\x0006@»¶/úGîø>à1È:åóöÓ¿xó\x0007ß»ø»wã!;ÜÑÔ-!Ýæ\x0013.t¹n½ãµð3í?iûA4cæ\<tv[Y}øÍ</p><p>ý³!ßç¼«K×\x0011\x0004AÔ &\x0003«k#¿}§ÿç¿^²\x00153!ê\x0010ø>&ÖÒ7¨;A´\x0000Âk\x001d~÷éGÎ\x000b\x001få u?H×\x0011®çxüæDôÚÂ\x0012ë\x0013i%|áÜûo½ùë³¡Üí;¶%¤»\x0008É\x0000,kÉÙÉÿÃ\Â/,auÌ5Hñ×_m\x001c\x001c\x001c´T¨¹SE¦B8\x0004A\x00105(y¾²\x0016?3:4h6Ýð9¶ËËÔ-!Ú`\x0002ÖôüÅ\x0012XlËËö3_õ¿ís¯Ôý \x001aÀÃÿ,\x001e\x001a¯\x0016±ÄúäK%ãt5\x001azü/×âí;¶%¤Ëä\x0013Òêâ</p><p>ëacå5\x0016þ¤o	Ñ5öÁî¿[êÔÜ©ËB\x0014Ær\x0004A\x00105({Ä6:4h6\x0005}º¦n	Ñ\x0004Â3\x0001kzþbµ%Ö'\x0010^»Í2ÐßëuMÖJKÔý Ýp²\x0010\x0014ÇCãJ\x0001K¬O\x001aszÂhèñ{¦d}´\x0008Ðwt\x0013ÂK¹Hq³Á±r»Ä<}KfÀý`·ÙR§æN]\x0016¢Ô=#\x0008rb \x001c4\x0019ÛèÐ Ù\x0014ô9`\x0017 o	Ñ\x0002Â1\x0001+¬\x0000Õb¾\x0019D\x0003 ¼ve ¿×ë¬pËÓ#\x0018¤8\x001e\x001aW</p><p>Xb}Ò¨dÓ\x0013FCß3%··<º%¤Ë\x0010^ÊE²
E\x0006K¬o`ÆÞÛm¶Ô©¹S(uÏ\x0008\x0018\x0008\x0007MÆ6:4h6\x0005}\x000eØ\x0005è[B´pLÀ</p><p>+@µ¢o\x0006Ñ\x0000\x0008¯Ýf\x0019èïõº&k%Üòô\x0008ád!\x0006)Æ\x0002X4*\x0019çôÑÐã÷LÉ"[\x000e!¼d\x00197\x001b\x001c+\x000cXßÀ½·Ûl©Ss§.\x000bQê\x0011\x000491\x0010\x000emthÐl</p><p>ú\x001c°\x000bÐ·h\x0001á\x0015Vj1Eß\x000c¢\x0001\x0010^»Í2ÐßëuMÖJ¸åé\x0011ÂÉB\x000cR\x001c\x000f+\x0005,±>iT2Îé	£¡ÇïE\x0016·<\x001dBx)\x0017É2n68V\x0016\x0019,±¾\x0019{o·ÙR§æN]\x0016¢Ô=#\x0008rb \x001c4\x0019ÛèÐ Ù\x0014ô9`\x0017 o	Ñ\x0002Â1\x0001+¬\x0000Õb¾\x0019D\x0003 ¼ve ¿×ë¬pËÓ#\x0018¤8\x001e\x001aW</p><p>Xb}Ò¨dÓ\x0013FCß3%,ny:ðR.eÜlp¬,2Xb}\x00033öÞn³¥NÍº,D©{F\x0010äÄ@8h2¶Ñ¡A³)èsÀ.@ß\x0012¢\x0005c\x0002VX\x0001ªÅ\x0014}3\x0006@xí6Ë@¯×5Y+á§G\x0008'\x000b1Hq<4®\x0014°Äú¤QÉ8§'\x001e¿gJ\x0016YÜòt\x0008á¥\$Ë¸ÙàXYd°Äú\x0006fì½ÝfK;uYR÷ ÈpÐdl£CfSÐç]¾%D\x000b\x0008Ç\x0004¬°\x0002T)úf\x0010
ðÚmþ^¯k²VÂ-O\x0010N\x0016bâxh\)`õI£qNO\x0018
=~Ï,²¸åé\x0010ÂK¹Hq³Á±²È`õ
ÌØ{»Í:5wê²\x0010¥î\x0019A\x0013\x0003á ÉØF\x0006Í¦ Ï\x0001»\x0000}K\x0016\x0010	Xa\x0005¨\x0016SôÍ \x001a\x0000áµÛ,\x0003ý½^×d­[\x001e!,Ä ÅñÐ¸RÀ\x0012ëF%ã0\x001azü)YdqËÓ!r,ãfceÁ\x0012ë\x001b±÷v-ujîÔe!zÔ\x0003óÚzz[NÕòÏ}6ßÓE^!\x001a¿\x0014IlÉËrªVà_éaBR\x000e
\x000b¿)¥7KKUïN8åy¥ÜR[¥ÄSÌ)Ï\x001fï!å3ß*ñg¯IéF%½µPõÇ\x0014u9\x0005\x0015ìàp`$øß[TK©sè\x0013nc=]ª*O¦ûpÏ\x001dòsV;x¯c9´Ä¯
&c\x001b\x001d\x001a4>\x0007ì\x0002Ýÿö×\x0005ÕOÖ</p><p>Uÿ¸Ú\x001dõv\x0010¥ÔT\x001bíãÎJÉ?Î\x0005\x0007	Ý\WÝ1^\x0007\x0008Ç\x0004¬°\x0002T)úf%Ï×ÖSÛ»0Ó~	ÿÓ/ÒØvCkß2é#?9¾Zj÷Ì|ûOè{[Ò·ú^»Ö'j¾ðÚmþ^¯k²VÒ`ËËó\x001bíù!½ÙY_ê0ù§õ²ÿ¶ò\x001a\x0007ºoP»^Ø¹,Ä ÅñÐ8|äôý\x001coøQáÊËiaÌPÔ	Ð\x0007$\x0008òòñyl©þ$ìO\x000f3O\x001e¢z${=³rNO\x0018
=~Ï,²ÝïBík±½\x0008tøÙ«+ÖKóÿ Ãc·än=V{\x0008/å"YÆÍ\x0006ÇÊ"s2.\x001aÂWÏeù\x0005\x001ar{Ç½f³xä^óxiçýÅ¼Ä4H\x000f±÷v-ujîÔe!zèÓò¼ù<=e~ÖÿÅýg>\x001b¶¼:ÏÎ\Nrsy!®hvPJVçâ7»êN¦n¯ç»±-ª!¿´Ol\x0010Vúÿe+âíÄç\x001e>\x0016\x0016ï³Ç¾»RH(\x0005^º\x0017ÛåD>ÀÎ^eÙÙò£$V×\x0015rQyíè`r</p><p>a[lØÅ°sÕoýnµ\x0018½»p%|Õ¹03¯êà·ØüÒõ\x0019\x001fÏÍÈ*ÜqkK7¸Ù+±è¬¼Æ®Ä¼·g¼	þó,d-ß~M\x0019fÕHfÁs{>ËF+¯þJ%ü¦Ä\x001f:<@w«\x001f|¶ãö\x001fê«5¨©3
gdt´ãÎ8q·\x001díêl\x0019wªXÑiÕÕ-¬\x0017¨"\x0003\x0015</p><p>tÝ®R,""Þê\x0005¨\x0010¹&\x001ar\x0004\x0003	$'9ÉÉ@Èå\x000b	\x0001ÔþèÚ_Ý/êv\x0016Bá²g2\x00039ç=ßù÷}¾ç	ª|\x0018ì¼~Eqÿk1?Å\x000bR«Q%\x0010òÒü¼S\x001c&\x0019dp×W¹\x000c|¤çq¯ ÕÐ\x000fx;0`~î§¦)o\x001f\x001e\x0012ª\x000ci7ÇdzÓ\x0017ñØÕà\x0004y=ø61" )%<óàô±P*åì2\x0010\x0001¼vÍü/&Ð:á\x0011\5ö\x0019åLA+Ñt¯RÝÁkQ#\x0012¯\x001bñ\x0006ãÓp5¡\x0002wÖu°Ì5Ån\x000c[D\x0003òVQ\x0007\x0013´¥\x001bÌ\x0010K&dªàW\x0002\x0005Üm:Í²é|\x0001\x0001\x000cï­ò¢Ü¬4\x0006¥ÒG;å¡*÷`Ï.|Ò¢ÕÉVE\x0008</p><p>\x00056\x001b\x0019E\x0015n48,1 Ë\x0008Í¤Â\x0001V\x0002:^\x001fm\x001eTj± \x0001Ë\x0018²4Í\x0013Àaj)Vt\\x0007Éeþ×3ÍV«Ù!«-æÖ±(÷iMímÍ\x0010Ôã´«|fþ\x00150µs°·¿·Çz(U0ódÖ\x0014ôUj¸¢vF+u J\x0014á*4©Lðjð½\x0004\x0002ÜÓÔ7¹\x000e,H ÔX{#éØAÖ£j\x0015</p><p>sÊÃ\x0015¡\x001e}÷£n>k`@æ</p><p>ÕA\x0006</p><p>ùÒ/üè	dõ\x0011!iÈ$Õà1à
ü\x0003¼Ü¦é\x0000\x0011F¯NgÌ\x0016\x0006PØ9$1Ê©\x0010çªÛ*\x000f3Å³\x0000/¡\x001dÁ 0\}ú¶Æ»´Æ»­¬&\x0008\x0012\x00126õS"\x0016\x0002Dc\x0012D@áÑd².;>å-8Ò.æ3\x0015 2\x0006O\x000c\x000e°ß
:fì\x0006ç\x0013ÀcÿøÃû¼ø~ÜeNUÊChmê\x0007ç\x0013$¦ÕµÚ,çu¤òOCO+I/þ¦VÈÇì³³Q¨Êkë5\x0008ogÅí=zöq\x0017Ïî@<s°`FÌ=ÊN*¿búe8\x0005o</p><p>yL¬Ë)\x0007¿øª#Ù\x0003ö$\x0006;\x0007ºT]T2ÅjFÜ°¤ê|~rê\x0017¥d'¡\x0002½k\j\x001dÓîÿ3ÐàQ\¢\x0017ÜÏ?và\x001ftzÙèëçú×ãî§e\x001eÚ\x001fXtlv\x0006áºQ\x0018Hîñ?O\x001eO/Ð8DhCÚUK¥ ^þ[JvI
f\x0013³¯¤§Å§^«©7ÙC«ó\x000b¸\x0006\x0005=¬:°
ujì:nóÃ'¿â\x0008ø#®¹µ\x001f¨ÂeîÕrj:zøýFÈMìmÿÉ"\x0019³¸T²a\x0008rN/§J·IÐ×Þ |Â°`ÓPìÃ%\x0006aUÁ±\x0003çîS4º)^`@@dÊKóórNqd\x0005Â[ßëTi(¥¥'ãâOd\£t8m¡ÝÂnàÃìZ¤\x001b5C¸¸i^
ö"ä²ì¤ÓgÎsT</p><p>ïx\x0006\x000cvôs%í
æ\x0016\x001cSø¬ìÓ	g¿,¦$Ó(ÆÂ\x0001ª³Ë@\x0004ðÚy[$ì±A6Ím¸R°ïã¢£6lÞ²iGlÜÙâ2&g\x0019±itÔ¡\x0014×_Ìß½ÿxÖ£^Ã:ÿÇÔ>#~3/åh\x001aU"uá <3;9£ô>Õãö;\x001bÜÂ¬«\x0013wó]|!\x0001\x000cï­ò¢Ü¬4\x0006¥ÒGYfG\©«\x001b8áhA\x0015½¿_>\x0012¤Oðª\x001cÕry\x001a¶×\x001ejpxEV?V}<>¥Y,!&%48xp\x0005p vrLDXÏ.jYvÖôJN÷kÎ)P¥Ë"\x0003S¬è¸îÁçö$
qàÛiììaÜ¾YztÏÎè\x001b·DoÜ²s÷gç.ÔÑzlxj3ÿ\x0012ÊQJÇ¯.KÙ¹7ñ~kÇI1òëÙÇÔÞ¡N%£$ißájö\x0013\x001dQ5\J=q¡\x001a\x0007\x0017cJB×ÚÙRÏa²\x001cÿ/BmS<\x001b64ÖÞH:võ¨ÚeÂò`½Ï zP\x0012w$>©ª­ÍhQù°ào\x0000§\x0002:¹OÂµá¡\x000b£¬'PKÑ§1q÷ØÜÁ!å$\x0006[Já\x001c\x0014"í\x000fx¢.Ó òC$¡e\x001fúë\x0015*×jf^vÎÂÎ!QN8W{\x000f+Å³\x0000\x001cv\x001a:¥mwï\HOÝ\x0011½yÓÖ¨uÑ»þr*ïËF:Mß?7óÇ.)<,HÚ\x0013\x001bwêVÓcÔ¥$\¼Ü\x0004\x0003£0#9ýk}Üz»Ó\x0003C1WÐ9:¬¶kyJà\x0006¥½¸%t78¯\x0000\x001eûÇ\x001f^ü\x0014ÜçÅ÷ã.tªR^§ÞÂ¹\px5´tÙ»'Û"\x0002_n&ìÅd\x0004RºrydRa­ ÷;ç¬X\x0017\x000f¡uªéKûI\x0011Kö\x0015Þ\x0016«$cÄ\H«Ç®u®>°uÍ	rLçð«r\x0018¼&jâV½·/ëZ«ð;W w÷¹µ\x0006Ö¥ü½ë¯+2\x000cÊÇ}HgArÜo?Ú\x001ep©=vHPòIÔÚ\x0003ÇÏ½#\x0001Ý2ª\x001awHäô¯·G,Ý~\x000cidã¯¶\x0002Ý\x0016©¶!cýª·ÖÆ¬â</p><p>Æ\x001cAp©Ü\x0016¢êÈû+7|váæË\x0010Rf\x0019õ â\x001bFnZ}ðºÅÖS4ê\x001dÒÚ´üþ\x0010ëüÏÛùçÑÒ~nÓ?\x001eÉ,\x001c\x001c\x0019ÄU¬ÛÛ"ßþ]\x0006Æñy9 ý?G\x0008¹
~¹bù\x0007Óú$Ï\x001d\x0013ZÎCèÜêÆÚó\x0007HK6³Õ}\x0004¦D^&n5Ê¿¸'jÃ#k@\x0017£0 XÁ*Ý±hÉÇ5RDötNº}\x0006d\x0001)/ÍÏË9ÅaA\x0016\x0008oýñá®o÷m$HW½wèÁ<}\x0010û»ña©¢¥$ñ­\x0015Q\x001a:ÙxHN\x000c4!¦\x001aUÜLùÃ\x0007ûã©0<ò\x0006Êïsk`rFê¶èÈ]×0\x0007<fc¤o{õÎÔÂÇç³£³A´]\x0006"×\x001ePæ\x0015\x001e;âDhäâ\x0004Ð/¤Å\x0011ËÖïùd×ÆE¤Eà?ËjZy8¡\x000e¤K(üÜB/NÜ\x001eAüðÄ
]åôb\óÔ@­8\x0013³xåê»\x0002±Xé±ÛÞÞSëñiÝæ¶sß}'±°6\x001aXÉ\x0017\x0012ÀðÞ*/ÊÍJcP*}DxS\x001eüÔ+æUäìõ\x0013³\x0014}Û'ð8z\x0007GÜF^oU2\x0014yN·9t!\x001f+¸f\_#o÷µë¾éØ­º8ø©G"¸whÅªmå4Ó â_Ãüëû¿fkÂ\x001d¶\x0017èÒÂ7¨Òe)Vt\÷àá¥8ðà*ßKÎZ¼È?¸¬Ú¼+áðöeKDø[(æïW\x001bÌ\x000eM NÀÔÏ1^KYÚJÒoVü¹ [÷oê«4¨©s
3Ó©S\x0019p\F#¶3:T\x001d\x0015¯ZÇÖz]ju¬^[ëVÄ;jÝ\x0010-e\x0007Y4  B\x0010\x0012JÙ×@\x0008\x00120\x0010=@àdß\x0017rÑÎtÆû£ýÕûìADÇ¡3Þ3ß|9çýÞïyç]Ùª³Z`\x001f{B-¿\x0004¦ÔµOèEPþõ¨°lØª\x0010«Ç(8¶wÝÞýgËLæÿ\x001b!O¤µUQ'\x0012Ê
(<SZ0%#u\x0017_\x0008r>]Ë%\x000f³¦uoVX\#</p><p>É:n|¼,âß)8qä-l\x001f#Q+¢\x0017\x0004\x0007§4\x0013¥r®ýM\x0019kÓC²¡Ò\x000bÁÁ\x001boã{\x0011ö-ôò¸õ¡+¶§×I¥l»fþ\x0010û«3GÙ09×²ç3ÄÃ2« §gö¯\x000b\x0005	^ñáÚ#ÇÎükçÚð¥ØÏµ[Î\x0014Õi\x0015s&O5ß £Beg¼¿å|B\x000bæu®Qb<ä\x0013Nm\x000eßx*\x0016'³ÊÔ\×àð\x0003¡µ÷ù3õKòñÐåÛî5HFØSï~ý\x0016è±ÿüãÅ_oö¼øÝad½ÊE'QPî§ÜåÕ\x000fB·$>f\x000b\\x0012æZÔV\\x0013\x001d¶xïùAÆ4hMU`3PÝJ°Ãó\x0014PÄý\x0012\x0001V-ßªáY\\x0004¯iø °¬\x001b(RQ2N«þùÆÁÓ	\x000fÄ\x0012¦}Ä¬\x0002sÍ*ì[?S\x0008(\x0007V§5ßæ\kö÷-z©º;ñò;6í»!1Ifã\x001bSLoa\x000eõH%\x0010æ\x001asÆu_÷Õ<®N%ÂÆÌ¸/"\x001d-B'96-O/¢\x0008hDI5\x0000çuH÷Í=[O^Àµ<³üÇP</p><p>è:Î\x001d\x0015Ï¡g ÄÃÁ¡»3\x0008°\x0010r8§<p´\x0011\x001d&¥\x001d¾ØÐM¶ÍÝ)yð±ëf\x0005[Pñí'á;ÈÀËõ\x0012O
\x0000Äü</p><p>\x0000í&>\x000bíû\x001dF+Q*h51[W-Ø\x0018úpD/Åì\x0004Doq\x001d\x000f1°\x0017¼ÿ*1ôÆjÎn_³ó\B¡Â>jA!\x0005L¤SÈ¤,ß\x001c§òQÅÉ%¿8bd@0vy_xmô\x0003Ùbv'F®M\x0007+\x0004ÕQKB\x000e$â{¹ð³À\x0005¸¡\x001f~\ye×Â°o\x0007e°Qëi\x00150\x001acÑÇ¬ù|CÌ\x001a!Ú|é`äC1wäV©\x001bgïÑ\x001a\x000f[°}îÉëº÷upÈ\x0017iU\x0000úö¥réä<vS\x0015×í9\x0006 2×½üqp³\x000bñ\x0019\x0013©|²Â>÷Ãd&n ÉäÝM»~ÜA\x0000³ÀÛeªYõ!Æ.>±o½«mXºê£!¦</p><p>åZüc­\x0019\,\x001b`\x0018ò¦M,¸=ûHèc\x000fÛ$£°Cã\x0001Ð\x0003\x0018~¨*x¹®Lâº²uÊ£\x0013a¢Qù¾Å"ëúw&\x0011ÏÞ\x0011ðÅ¬NíØµ)¦Òlà[T,)³Ië\x0016XæYøÌ\x000fH@¸r£uÖlæñÊ\x0016xî|.%Â&áÀ\x0008`Ñ¼«
-¸Üõýê  ÷\x0016nÎ"Ôò\x0004C\x001a9¤\x001b§\x000bûJîF ò</p><p>Äd>\x0003m\x0000Fu\x000c(³+K{B	ÆFÝP~âù·ò9¨à¥d¸Nü¼¹è§\x0003\x000b?ü\x0008Oe>D/ s\x0006º\x0010fÒñ(£):råÖË9îçV\x001b\x0016\x000f7\x0002óÕ»²xòÒc¯oo(\x0003<Oã ÿ\x0017×â®\x001f\x0008ò<¸úæQTdSy=\x0017\x0001[´b¤kàîþ\x0005!û	½dIlõ¦SÕ+ê»WÈ\x0012lEdp\x0017c¤Ä"ïþuçUò7Î{f\x001d¦Å}µlõ©J²bãÐÂãH\x0017Dí\x0011¦ÿé®Òï²\x001cX\x0019Uésì¥6		ðê-ç94\x0018&! bNoY=¯!O'ù\x000e%\x0015nNÝ¶àý  ðKY\x0005ð\x0000\x0010²f!ç4WÄF®\x000c\x000e</p><p>;t±4	ÙUÅTîhZ=xµb\x0013RMH¿ôõ7ñT)G?cRðExZA¡×\\x0006]mj}ûÈ\x0004ß<òTB'2éTc3	¦\x001eÝ½íÈÄºi'ïyÏ¥\x0004¼\x0013kÚ$­­*:yØTn@áyò¬\x0006)J­(>³Î-ã¨\x0002\x0002Ñlõ«\x0008N!\x0007'ÄÝÇªy&-­ü.båç7sË6©Õ\x000bÝëj§	á[\x0015,¨ÖG³
Ø½×Ô>ûÌ2°eÌGÇC\x000fe\x0013\x0018Bø¹£öÁÔæa6M7	;©ø¼Òògfl\x000fë0Ç´³å\x0019MÝü\x000b«3GÙ09×²ç1Äóî'è\x000fGÛnþsÃâ Å\x000eÆÞ£óhÊ±aõ8KÉkÂ;\x0008´rýÆZ\x0006K"î!NíkÀ\Z´BÒ\x001aÿÕéØì~:Õ\x0006T\x001fpWË\x0002³pzë\x001dgo\x0017\x0019¤fßà\x0000OÛ ¡_\x000f-^qüQçø8<¥öÌsTwf\x0001\x000cÿüãÅ_oö¼øÝad½ÊE'QPò3N¹ê EaÙuõ£</p><p>\x001dC\x001eÒk¢Ã\x0016\x0016ÑHg9&\x0006x\x0014BmSýè\x0018Û\x0008\x0001sÙ$}\x001cjl&ài0]ò,r</p><p>¨ÜÕ¥èí©Îy\x0011Ëëìb²ImÒöÆ¤[yÅø>:uÊèª5Ã,P\x000b;IÓ¯GÇýRU×4*çØB£\x001b\x001bÝ-ôÆôû8\{?Å¨\x0016N+\x0006í¥eÙ?f%ÜÌÏ/èeÒÒí¦!§}gÓ
s;ñ\x0015¸Ä´Ô¸¼â"Ê Õb\x0016[\x0002nëÌ:°yéí¸Ú_aá°\x001e#÷[Ø¤\x0018\x0018h+§öÆÆ\x0011­´A,ëèî!í]Ìü´Øû¹-\x001dDµoÑ!(ÜZzâÀÆð%{®ü\S%\x001ca\x0018-ý­UO©=Z\x0005O.Í8\x0016±zý®//fôö·\x000fÃ¤Ç­-
\x0008wÈ\x0004Ü\x0006\x0013\x0013ÊÓ	\x001d­õl\x000eÝnfq9GB\x0016íÎ ÀBÈ¡áÙô|³rÝV½y¿¤\x0001\x000fYÍbó¬\x0001Õl²'¶¢\x0007ñYwêÉí\x0003¥'"Vïºë%àÖ&5ÿ75
"åÜÎJ+|PÔ\x000f1ì\x0000%õLªÛM|¨ôÚ¹~r\x000e¯T²i¸]kV\x001d¾Y­±H¬*®\x0003¥2¥\x0015¹IwÓnápwª\x001bj¸#Né\x0001\x0000U|ÐÈ\x0019E¤ªûY?æd¥ÿÒÜ$\x001aáN«aÙ@uuò¾µËC¶\x001eü®D\x0014</p><p>\x0007ÙåÄö&n\x0002rÓ\x0008,Zb¸®	\x0014w'+«¶­e\x0014\x0015ÛÕÀ,×$#CO©}=ºq</p><p>±$);9>\x0007×ÑKT\x0008|}ã\x000cnë¥¦>f[QQæíÔ¤\x0007¥`\x0011\x000c \x0002}BÜÑZruOðEË÷%çUJ¥l\x001f\x0002*Fødpëêáß\x000b^u»¨Êþ\x001fñå\x001aÓTÆñF\x0019qÌè\x0012\x0011@\¹\x0008\x0006\x001c\x0015\x0001Ì¨\x0018o\x0011uð¶Ù(\\x0014k¡¥\k¹S -½Ò\x001e(Z,·\x0002íiOopÊµ\x0017JKéMÌ$ÌÝO»o1&;ãn2\x001fºÙçC?´oN÷ù?ÿßÄlÔ|\å=,"¶üeZiA^'Î*~±«×\x000cð¤½\x0018\x001eà\x001b\x0018PßÃÖ 2»eÚ\x000eHz\x0015¯J\x0010ª\x0008Ý\x000c&º\x0000Û­Ú«\x0012%pyÇ®³\x0005íRµô£å7£ëXëF#|ª\x0004\x0016Ï\x000f·¿Á§\x0014d7uaåä]ýé;®5Ô>'Aµopù¹/^×\x0013Gà	«Y³¾Ø\x000b\x000cwtÓ»\x0014ª±UOHTØ
R³Ëí ¾\x001d~»¤G]ñ\x001ay\x0002Îd?±ð²H\x001c\x0010;Ì_È\x0007¥\x0011®À¿ÌH{ àA\x0016ð\x0005xT^{-êÐÉóïæg]\x000bØº#±®Ce\x001fV<\x000eî0É,s\x0002\x0011¥¦w o\x0016º=¨¶º4\x000e÷5²ÙL­vxAIkzu#\x001cã³çèõF*[?\x000f¯Û¢åó#äÎêâÜÌÒ2BÏ\x0000É8ã9\x0010(]Ê\x0010r;\x0003t°T\x000bÆ`|õ×!z´¨\x001c,ùu\x001b¢\x001b£AME5ØlB\x0019®NA\x0017Uà%Ä\Vða\x0012\x00114wV\x0017\x0010³\x0008eX22)\·\x0002WçÆ©¤'ç£\x0003\x000f_Êbr(èx\x0018j\x0013\x000b!Tç9\x0016lÈ
§B7Ff\x0012óKó3°b:g^U»,Lä\x0006Uÿ(¯	\x001aà/"\x001cNc~eaFMu5Ôßo]S{ZdR­e\x0006Ík.­*ÎÆy$FÓÌL¸?Ï\x0017¯CÆ'\x0008à\Ñxùd/sUróSÏíÞöµßý×\x0014T'sn"Û¢vÆ§Eï·\x0000ßJ,jæ¬¹\x0010£Ï§tÌ bqW\x0019	ÛÔÞ\x0006ken«ÖªèársÒ\x001ed¿xIa±æ¨{Õ×È{0$ºÁ·\x001d×Ø4\x0002é¨·¦øqìN¿C$±ÄjQ1eÝ)\x0010Yõ`	Wf}¿÷ñÄ;ÏËÄ£|Ií¶ÂÚ!2W	4^N`òXóF-¸úÿ¼ÿO\x0005Ä[[Qþä\x001eÞ\x0008ØÕWcCu¬Gßù\x0005]®ª|r\x0014J­\x001cNý¼úÙ×Æ(,FÇL¼</p><p>h\x001f ´\x0011^øÔ7\x0003"Á´zDÉ#àï\x001f÷Ùê{;'\x001f\x001a\x0015é\x0017\x0015nrÝ6\x0008í\x0015¹Eù\x0019Êþwv§Ç¯fù¬9\x0004µ÷
0%¼ªªÂ&</p><p>M\x0005óÑajo7E®m\x0000'ì*\x0003\x0002º\x0008$\\x0016¾¤¨Ü</p><p>k§lfµ\x0013¼­\x0019q¯!èp\x0017»¡ä56\x001b_×ØÒ,\x001a\x001f\x0005«oÝ"E'Û^?N\x000cÁl÷;q</p><p>õY\x000cãaKA_xþ)\x0010²Ê¨âô·cË\x000b3\x000bJrÛh´Ù%ø\x0013¨X\x0000¨ô6ðøÐ\x001czÇ,¯*|ú§1{ôÀ³<X¢t\x00017D\x0005rbés\i^\x0003¹U"\x001bvyWÈ&M/\x0005*\x000b«\x001cfo^±\x0017Ëµ:m\x0018k!Þ;¶\x0015ù1§v\x0004\x001ewn)\x000fo/Ã+ªÖ!{0¤ô%\x000b@\x00052A1z;Ëkp­Tz\x0016vXQ;:0DÅa³\x001f¦¥=khkWÍª\x001cÕA7såGãU\x000bL\x0013_M`²\x001bÙu)-[ó»ys\x0006Ä\x0000sßqÚ\x0006|qjf¨\x001c\x0016\x0018\x0014qêÎ«¾~\x000e\x000cÞraÉo+©+É.Ã©\x001d9àSJ§éÞ?^\x001bvÚ^|ó2Äl¶\x0019`ï¥<dÃ>%&f$\x001d8pðVVÝ\x000bßîúævN)¼\x0000RÀ§éB2V?,\x0018â¯,+?Í}np×ÌãÒ\x0015IÝ»ÖÖìïü|w¹B\x0016ôêfaà_zßÊo¼o\x0013Bøõøµ¤Æáñ~#Ì:Ú'aÉ²AõqåKïüì}uf	î\x0011	u@PØºúÚ^hY¯Ø°Áz5Zñð´ïþ\x000bx\x0012eqaÂ \x0006èÍRdÒj\x001d+\x000ff~Ù][HÈMÃ\x0015\x0015Ò \x0008àýÏ¶O"­½\x0010S:Ñ§xÛP_V+l#S5èÃ¦ö¬/\x0013ò^/\x001eë©\x0007i\x0002_SÓP7(\x0016ÚÁo½\x0013MÈ*@8\x0019\x0003\x0016ýé½+ön\x0001­Á«³\x0010>6x\x0007fOÂÃ|¡</p><p>ô\x0016²\x0012hù½U¹,&æ]	Â`¶%¸E\x0015é\x0011C\x001dý}t©¸½\x0011[]_\x000fÓº¦µ/
Ò\x0008Øôçõ-\x001d`Üv­Ã¸¹rA\x0017RWò¢¸¨*FÃ¾Uµ°Ú\x0016F7\x0003k\x0016\x001dwÕg&À|µ7ø\x0016Í3."\x001b\x0016Øp¡V\µgxÚi\x0014¥Fâ}pòF\x0001ÆþÇßýç\x001f{~ýÛ\x0007~ê¿\x001då´Î\x0018¸¼§wú{zy\x001f\x0006søÔ_É}"·\x000bä5©eºëÞ¾¼_D»ÕtvñS±÷Þ"ã\x0016³ÒiV»\x0016\x0013´ìS'#* Á^³1Ïe\x0012FFI¾z6ôÈ¾0_ßcþG#ãâS\x001eÜ¼s12ÐïÄ®í{¿õ?ø(µM<</p><p> j}
\x0019%¯n\x000e

	:sîzB`Ðð¸<@ätN/kù©ñ	ñ±ç¢C÷ûú\x0006ÄÄ?k6¨»^<¾\x001a\x0013\x001cp",8"2"|_À©\x001f~,hbhQxÝò»0¢pÛ\x0010#Â¡½ºpòèÁÐÈèÃ\x0011BÏßxVIY2)QNú¸ÃÀSÀãÿçÈ§MÜùYøsó c\x0011*¼\x001aw+³)ZÑI·Ï=\x001fw)þdh`È7»ü÷îÛ\x001fv&ñA\x0005E·$[2\x001fEîÝâñÙíðx2G24Ô~åÖý\x0002²I/f<
Ûÿ\x0015fÛ¶m{ÂR</p><p>§ÐîÇ\x0017b/=oë\x0011\x00007w,+mK\x0013HûÝKq×ÊÛº­.¹\x0012Â]Üé{¶\x000ck¤¿¸Ô\x000b\x0013]-\x0019I±aG\x000eÇÄ^\x000f>\x0019\x001cðS>¹ü{$Û\x000cA3Ý%\x0019×£ü\x001f\x000b:\x001fs4"êè\x0000í1Ïð-6ÔmYÕÌ¿$\x000e9\x0010\x001ay<"<\x000c40:1©Æ=@ûo\x0007¾·«¤¤Ô¢£\x0002ï¾Y6É§©\x000f®¦·üù2i2Oã8Ñ`\x00062\x0016ÂÒ#¥@ÞWzß \x001b«`\x0019\x0015dUP:^\x0008\x000c¢\x0007(T\x0019\x0014\x0001\x001cÊQ(TJ\x000b¥ tdDÚrS®aX7ÙdþÙýk÷qg³3»É&Ì¾yþ|óæ÷>Ïïû|¾ßí
ÕPW\x0010&$ )4ºcQ p4Uvôt·A»0÷fg®P]\x0018-eQ>\x0014\x0011Û\x0007\x0019\x0000\x000bÄ&¿\x0008X5CE<\x0013ã¹Ûñ\x0007\x0008¡±ÊGµ5\x0010Q´²©«{sÝ²by9X\x0015/!£ \x0018\x0016'âahâ±/\x0014Ýcúeûø¶åiùU\x0005ÉGpp\x0010\x0010\x001eíîç\x000fÇÒÂr®OY+RÂã\x000bCÙ\x0000H Ì[À§{ÃX\x0012ÉÃgóK#[©(_ðÝ\x000càFH¸ñ¸usõc?×\x0016'­=\x0005×®í\x0014ä\x000b=zíÁØÞóT\x0019Æ'á\x0011¾d\x0001\x000c\x0011Ðø¬¼úÞ×\x001bv½éñI	Åw÷í\x0003N\x0001ìà¼'íVÝË\x00192j B\x000cJ$o\x0008H\x000fÉ,V÷\x000f|Ø\x00186·\x0015¹ºqÕÃãÃ?þû½\x0005\x001c^¥¼\x0014Çã\x0007e\x001c,+ÀtTèÔ²6
0£µ¥q[ïÝ;Ù2&\x000eâD\x0002/"Êã\x0017UWXìµ·ÝwãÙìØ*µÚ¾\x0004øÌ1ÇìàlïM1xîî#íÍû¾êÛ\x001c\x0016'¤¡``W7ldFqÃúÊo¼\x001fàÃmÆ¢üÙ§;ZT@\x0016Ø/\x00048ìÆukg4À\x001b\x001ez¾ì©£Dî{\x0018DN©×:Æ×ì¦y½Õ¨Ê`"÷»C;ck\x000b¦\x0005K×ÓT)',¯±«¹_u!Ö\x0007thO¹¾âóõ5KkÇ-E\x0018\x0007ôÅòØÔ\x0000\x000c\x0016§¤åÓYL\x0019{Ûx!S.f0i"\x0016\x001a\x0002\x0006{BU)QÇR3_\x001cVíPU"%\x0012(\x000c\x0001Câh²«¯tÚUÇÔÜp]ã¥8)\x001d0CxL<6\x0010âLR<×j\x001dó\x0006M~\x000c
rr>àìÂ3\x0015Ñækáòô\x000b½;@ímÎM9ÎÅ\x0004\x0010H\x0018"Oð
"sâ\x0014EÚaÝÖæåeEq,É\x0017Ê$d4\x0002\x0003vxû@)¢È²úwÆÅþÞJeBÁÂéb\x001e\x000f</p><p>#`ðG2¿Tui¶~½è>­ì£¶\x0002 \x0002¬/Lüî\ûµéÐò÷ô#\x001fk4\x0003v}í£»\x001e]\x0003ÖµUû¢äjiá½Þ\x0001ÍcøM×ÝT:3&FÊBûyæL8y»£û»¶ëÉ2f ÜWÈ#</p><p>ùt8</p><p>\x0017Ðc\x001c\´í8\x001d\x00157#\x0005\x000c4\x0014Áf\x0012\x0008\x0002</p><p>Ö\x001f\x0006öF\x0006ÜÓèç=7ºXÖ`³´V\x001d§À=\\]¼§rn¦5½¥8>.Df1Ñl*\x000cEäÉS¿ÖëçöuFVxï\x0014]ÎÊ8Ù\÷`ó×Ôø¤ÚY\x0019¨Í</p><p>!ú\x0012xi%ßO4fa<@è[O[\x001cI`ó¬ÌèFªNHùEÕßX&×`k\x001d^ÔÄii\x0005¥]Ú\x0006%ßÛ}WÇ\x000eÄéÊæ×ºUssµ"&î ²¨Ä@\x0006\x001eg§çTZ¨å0ëUr¢Y46G{º¹y</p><p>Ï?©½ßp[!\x000e\x000e<8´<gl¾¦Là\x0008\x0018\x000c\x001cÌ!ÑX^Ø\x0019UcÛâêÔòw]}Å)GE\x0004\x0014Ê¡²¸\x000c7\x0014Å;"»ßÚ±`×´ç§z|¾·Q\\x0011×ú
­
\x0019òH¹²©\x0007¸lÛËCÛyg¤\x0014<\x0001
\x001cLDô	Ä\x0013¥±\x0017ëÔ¯Ö7¦æÌ/TÉ"±H\x0014"¦Ñ°XÃp\x000fO\x001f,{ôJåkþÃêÐx{yÏÄøÑÄ\x001cN@\x0000\x0005\x0019À+ò\x001b:Vk¼_9Ñ>º2;\x000c¨xäÕ­µùý\x001cñ>Öcr²µè\x0002Ûë\x0000«êÓÎÏ·~I@öÑ­¥á>Uñ½\x001b_7½xiÖ\x000c%\x0008y\x001cJ	\Üèâî©ñÙ¾2eJ\x00080Bª²0\x000e\x0014\x0016=ëPÛl\x0013?.Ì5U&EJðp$!P¸8\x000c8xÐYY×2³0>Vs%'2:&»Âf\x001bP
eÃ]\x000f\x001erÇòeçtÓCÃ5¹YQ4\x001c\x0011G¤\x0013ÄL\x0018\x0002C</p><p>»¤îé]\\x0018_û½ûö/¹9,µÕ%ò¸pu}åÕ¸o)onb{º¡<Kè\x0005%?lÕ\x0016à.\x0008qRi»vbÀ\x000bóæ·MgS£ÃRr</p><p>-{ó2m«óNIeÉ\x0019
\x0003]\x0003eQxð®ý9äL</p><p>?q§U³aý}è=ö\x0000ö\x0005î±oÀ°Ç¾®â\x0004}\À@Á®òsE\x000fFZ.ñ\x0018Ì\x0012u§m¶¿ÿÑåìü}Y_ªº5?,9\x0000»Us&E\x0012A¬P\x0001Ù\x000b$±y×ªj,ïuæoóOÂ<Ýö\x000cf¤=li6´\x0016&ò\x0005iÕêw¦?Ù:ëî
fãqHÈ®ó\x0012ðä\x00139×Õý¯·W?Õ©sââ%|%¤ã¼Á(w°?t$3¿¾·gÕh\x001fyV(\x0013ãá\x0014.E"0¡p4<ûaãô´ac~fa7-Ï¼~kxnì(\µ\x001aömÄû[vÓº}hÁø Òýs?lÜíg­\x001b\x000eËú/«lÎü­Ïø²¢°0¿¥_³d7Ï´^ÍKRé4	\x0017\x000bu\x0007< ¥MµºnUiªA@!Y(i\x0010eD¤\x0017×¨w­¦iÃR_xAÎÀÀ0(?ºáO¦\x00180\x0017Wâbùû5ËÂ6 8\x0008¢¾ê\x001chéº\x001dáå¶ã\x000eÂBý­Cu73E4*\x0006Jð¸081\x0008\x001b[ÙÙ»¹ð\x0004å\x000bðØûëOÿßþ²½2«ÿoZ_²½º\x001bÍCPOëLuy"\x0013Lü\x0002ÅüaÙ¸8Qè\x0003¢%}õ\oÚ\x001c­ªJÃ99ó¾Õk\x0017æÍëóã[ß·wß?\x0001tðü³\x0016Ëìäß5ÞË;²ÛQ\x000ftpLD^JrßÓ[\x00003VþEr\x000c\x001f\x0001òð@\x000b¯|³d\x001f]6Uç\x0006¢|}(áñ¼[z=á¸è\x001fÌù3û\x001eÇabÂI0eH	bË\x0010Dì(©-¸"ÄRÄ\x0012¨%¥ªÒs´zJP\x000eµ´äZ\x0010®¶Øc¹Zû?ÜGÏ¹gÎ¹÷W3÷Î|yçï÷ûù|Þ¯÷Û\x001a0´öI¯P|\ÚUË\x001bÐ\x0010\x0000ZØx\x0007øÆ$qÿVØÐS\x0018¦\x000f\x0018¡\x0008NÌÊJ¡ F2\x0006®R»ÑjÿEðñóÐPS</p><p>
	à\èììÜÛÒÌâd:	\x0003ð!\x000fF'4£µ\x0015Én\x0018\x0004\x0002fJNþÔ¿öQyò;Y~ÄÏÝX8Á×8¦ØU´U8\\x001cÄÊ.0")Ë\x000cr$Âõ\x0001brßÌz ¡:J@@1îñâIõÔH\x0005ÛßÒ\x0014ß¼½55V\x0016ã6¡±\x0011%Õ­jÍè ¼\x0001>±ªM~v¤>úaxæê}L
mÓ+Z¶NUKòÊ+&^emÊÕóµþ®ò(ç«úî~IÂ¼zi ÎÍÂ\x001cgHîRìmÌÿáiuÚù/cÃH\x0014\x0004aqàòyÕUY¾äM\x0003\x0002é£õ£÷ÁáòhPáp\x0014\x001aO[U'\x0008÷t6×ÃÑY]Ã¯öwÕfÖ?tK³Í7\x0012Ü\ñMZíüæÌg]³O\x0003¯o³`\x0000söà	ó\x001aj¹¡>\x0014°màÒýë»+Úñ¦âp'PÔ]B\x000b¤âl~\x000c
m4À\x0006dÖO÷¸Á6&F¦xk§Âüöö»\x000c\x000bÀ*½µwø§óÊÞª(</p><p>\x000c¼b:3©²¢¨4/ÖÃ\x0006a\x0008\x0000¬Â¶å\x000f\x000bç\x001f8î?Â}X\x0014«¸0\x001bFAê\x0019b\x001dò\x0015õá_º\x001a,¢òhýu=ß\x0007Ã¢\x001ch\x0019|ncM^\x0012ËÓ\x0002\x0000\yOGG×çÖ]gX\x0019@0dgFbÉã¡#\x0011?></p>
  
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
  
  
  * Evidence: `ucSBFLCzzcv++zMqJlLL3fNyljz02aHJAzRbzsmNfXDXvzw15BOh5Wzkz5+VgfXTsx68pq2bcw+A4FRgt9HrB78y8kU=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `U8EdklhKADEqjhAqJlLL3fNyljz02Ui3RLw7vIlt53vxLhz8UtvQ/GUZJtHM6K+qwXVo/mu6AH8/KDY2ycaQnSvrA8s=`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/](https://haut-conseil-egalite.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `local/cache-vignettes/L101xH141/arton1645-143fc`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr/faq/](https://haut-conseil-egalite.gouv.fr/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/v2/p/Contact/Liste-des-CIDFF/73`
  
  
  
  
* URL: [https://haut-conseil-egalite.gouv.fr](https://haut-conseil-egalite.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `Im+tlxRPETK7rKkqJlLL3fNyljz02fM+fx6czmhT8k/3y++WMR7mAnPJgJUsQ+PnTBslbAjGP+YiVAU5GfE9NGIjMiQ=`
  
  
  
  
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
<p>�ā\x0014������3*&R���r�<�١�\x00034[�ɍ}p׿<5�\x0013��l�ϟ���ӳ\x001e����s\x000f��T`���\x0007�2�E</p>
  
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
  
  
  * Evidence: `1617545148`
  
  
  
  
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
  
  
  * Evidence: `1613654067`
  
  
  
  
Instances: 6
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1617545148, which evaluates to: 2021-04-04 14:05:48</p>
  
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
