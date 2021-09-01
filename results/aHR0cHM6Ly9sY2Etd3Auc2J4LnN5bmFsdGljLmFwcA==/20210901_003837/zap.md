
# ZAP Scanning Report

Generated on Wed, 1 Sep 2021 00:25:23


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 6 |
| Low | 9 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Source Code Disclosure - Java | Medium | 1 | 
| Source Code Disclosure - Perl | Medium | 3 | 
| Sub Resource Integrity Attribute Missing | Medium | 11 | 
| X-Frame-Options Header Not Set | Medium | 11 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Cookie No HttpOnly Flag | Low | 3 | 
| Cookie without SameSite Attribute | Low | 3 | 
| Dangerous JS Functions | Low | 2 | 
| Incomplete or No Cache-control Header Set | Low | 11 | 
| Permissions Policy Header Not Set | Low | 11 | 
| Private IP Disclosure | Low | 12 | 
| Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s) | Low | 11 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 11 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Non-Storable Content | Informational | 1 | 
| Storable and Cacheable Content | Informational | 8 | 
| Storable but Non-Cacheable Content | Informational | 2 | 
| Timestamp Disclosure - Unix | Informational | 10 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 18 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/](https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/](https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/](https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-admin/admin-ajax.php](https://lca-wp.sbx.synaltic.app/wp-admin/admin-ajax.php)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/](https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/](https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/)
  
  
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
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/](https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://lecompteasso.associations.gouv.fr/login" target="_blank" class="elementor-button-link elementor-button elementor-size-xs" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon elementor-align-icon-right">
				<i aria-hidden="true" class="far fa-user"></i>			</span>
						<span class="elementor-button-text"></span>
		</span>
					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/](https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://lecompteasso.associations.gouv.fr/login" target="_blank" class="elementor-button-link elementor-button elementor-size-xs" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon elementor-align-icon-right">
				<i aria-hidden="true" class="far fa-user"></i>			</span>
						<span class="elementor-button-text"></span>
		</span>
					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://lecompteasso.associations.gouv.fr/login" target="_blank" class="elementor-button-link elementor-button elementor-size-xs" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon elementor-align-icon-right">
				<i aria-hidden="true" class="far fa-user"></i>			</span>
						<span class="elementor-button-text"></span>
		</span>
					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://lecompteasso.associations.gouv.fr/login" target="_blank" class="elementor-button-link elementor-button elementor-size-xs" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon elementor-align-icon-right">
				<i aria-hidden="true" class="far fa-user"></i>			</span>
						<span class="elementor-button-text"></span>
		</span>
					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/](https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://lecompteasso.associations.gouv.fr/login" target="_blank" class="elementor-button-link elementor-button elementor-size-xs" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon elementor-align-icon-right">
				<i aria-hidden="true" class="far fa-user"></i>			</span>
						<span class="elementor-button-text"></span>
		</span>
					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/](https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://lecompteasso.associations.gouv.fr/login" target="_blank" class="elementor-button-link elementor-button elementor-size-xs" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon elementor-align-icon-right">
				<i aria-hidden="true" class="far fa-user"></i>			</span>
						<span class="elementor-button-text"></span>
		</span>
					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://lecompteasso.associations.gouv.fr/login" target="_blank" class="elementor-button-link elementor-button elementor-size-xs" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon elementor-align-icon-right">
				<i aria-hidden="true" class="far fa-user"></i>			</span>
						<span class="elementor-button-text"></span>
		</span>
					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/](https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://lecompteasso.associations.gouv.fr/login" target="_blank" class="elementor-button-link elementor-button elementor-size-xs" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon elementor-align-icon-right">
				<i aria-hidden="true" class="far fa-user"></i>			</span>
						<span class="elementor-button-text"></span>
		</span>
					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-une-subvention/](https://lca-wp.sbx.synaltic.app/demander-une-subvention/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://lecompteasso.associations.gouv.fr/login" target="_blank" class="elementor-button-link elementor-button elementor-size-xs" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon elementor-align-icon-right">
				<i aria-hidden="true" class="far fa-user"></i>			</span>
						<span class="elementor-button-text"></span>
		</span>
					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://lecompteasso.associations.gouv.fr/login" target="_blank" class="elementor-button-link elementor-button elementor-size-xs" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon elementor-align-icon-right">
				<i aria-hidden="true" class="far fa-user"></i>			</span>
						<span class="elementor-button-text"></span>
		</span>
					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://lecompteasso.associations.gouv.fr/login" target="_blank" class="elementor-button-link elementor-button elementor-size-xs" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon elementor-align-icon-right">
				<i aria-hidden="true" class="far fa-user"></i>			</span>
						<span class="elementor-button-text"></span>
		</span>
					</a>`
  
  
  
  
Instances: 11
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - Java
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - Java</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-includes/js/dist/hooks.min.js?ver=a7edae857aab69d69fa10d5aef23a5de](https://lca-wp.sbx.synaltic.app/wp-includes/js/dist/hooks.min.js?ver=a7edae857aab69d69fa10d5aef23a5de)
  
  
  * Method: `GET`
  
  
  * Evidence: `class f{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=i(this,"actions"),this.addFilter=i(this,"filters"),this.removeAction=c(this,"actions"),this.removeFilter=c(this,"filters"),this.hasAction=s(this,"actions"),this.hasFilter=s(this,"filters"),this.removeAllActions=c(this,"actions",!0),this.removeAllFilters=c(this,"filters",!0),this.doAction=u(this,"actions"),this.applyFilters=u(this,"filters",!0),this.currentAction=l(this,"actions"),this.currentFilter=l(this,"filters"),this.doingAction=a(this,"actions"),this.doingFilter=a(this,"filters"),this.didAction=d(this,"actions"),this.didFilter=d(this,"filters")}}var h=function(){return new f};const p=h(),{addAction:m,addFilter:v,removeAction:A,removeFilter:_,hasAction:b,hasFilter:y,removeAllActions:g,removeAllFilters:F,doAction:k,applyFilters:x,currentAction:j,currentFilter:O,doingAction:I,doingFilter:T,didAction:w,didFilter:P,actions:S,filters:z}=p}}`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>class f{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=i(this,"actions"),this.addFilter=i(this,"filters"),this.removeAction=c(this,"actions"),this.removeFilter=c(this,"filters"),this.hasAction=s(this,"actions"),this.hasFilter=s(this,"filters"),this.removeAllActions=c(this,"actions",!0),this.removeAllFilters=c(this,"filters",!0),this.doAction=u(this,"actions"),this.applyFilters=u(this,"filters",!0),this.currentAction=l(this,"actions"),this.currentFilter=l(this,"filters"),this.doingAction=a(this,"actions"),this.doingFilter=a(this,"filters"),this.didAction=d(this,"actions"),this.didFilter=d(this,"filters")}}var h=function(){return new f};const p=h(),{addAction:m,addFilter:v,removeAction:A,removeFilter:_,hasAction:b,hasFilter:y,removeAllActions:g,removeAllFilters:F,doAction:k,applyFilters:x,currentAction:j,currentFilter:O,doingAction:I,doingFilter:T,didAction:w,didFilter:P,actions:S,filters:z}=p}}</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - Perl
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - Perl</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-content/uploads/2021/07/Marianne-BoldItalic.ttf](https://lca-wp.sbx.synaltic.app/wp-content/uploads/2021/07/Marianne-BoldItalic.ttf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#EOPp`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-content/uploads/2021/07/comptebenevole.png](https://lca-wp.sbx.synaltic.app/wp-content/uploads/2021/07/comptebenevole.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#T0SB`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-content/uploads/2021/07/Marianne-BoldItalic.eot](https://lca-wp.sbx.synaltic.app/wp-content/uploads/2021/07/Marianne-BoldItalic.eot)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#EOPp`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#EOPp</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11">`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel='stylesheet' id='google-fonts-1-css'  href='https://fonts.googleapis.com/css?family=Spectral%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=optional&#038;ver=5.8' type='text/css' media='all' />`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel='stylesheet' id='epkb-font-spectral-css'  href='https://fonts.googleapis.com/css?family=Spectral%3A200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic&#038;ver=5.8' type='text/css' media='all' />`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11">`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11">`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11">`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel='stylesheet' id='google-fonts-1-css'  href='https://fonts.googleapis.com/css?family=Spectral%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=optional&#038;ver=5.8' type='text/css' media='all' />`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel='stylesheet' id='google-fonts-1-css'  href='https://fonts.googleapis.com/css?family=Spectral%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=optional&#038;ver=5.8' type='text/css' media='all' />`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel='stylesheet' id='google-fonts-1-css'  href='https://fonts.googleapis.com/css?family=Spectral%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=optional&#038;ver=5.8' type='text/css' media='all' />`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel='stylesheet' id='google-fonts-1-css'  href='https://fonts.googleapis.com/css?family=Spectral%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=optional&#038;ver=5.8' type='text/css' media='all' />`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="profile" href="http://gmpg.org/xfn/11">`
  
  
  
  
Instances: 11
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 345
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/](https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/](https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-une-subvention/](https://lca-wp.sbx.synaltic.app/demander-une-subvention/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/](https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/](https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/](https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 11
  
### Solution
<p>Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive. </p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

  
#### CWE Id : 1021
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="elementor-search-form" role="search" action="https://lca-wp.sbx.synaltic.app" method="get">`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/](https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="elementor-search-form" role="search" action="https://lca-wp.sbx.synaltic.app" method="get">`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/](https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="elementor-search-form" role="search" action="https://lca-wp.sbx.synaltic.app" method="get">`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/](https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="elementor-search-form" role="search" action="https://lca-wp.sbx.synaltic.app" method="get">`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/](https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="elementor-search-form" role="search" action="https://lca-wp.sbx.synaltic.app" method="get">`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form id="epkb_search_form" style="width: 40%;" class="epkb-search epkb-search-form-3" method="get" action="">`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="elementor-search-form" role="search" action="https://lca-wp.sbx.synaltic.app" method="get">`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="elementor-search-form" role="search" action="https://lca-wp.sbx.synaltic.app" method="get">`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="elementor-search-form" role="search" action="https://lca-wp.sbx.synaltic.app" method="get">`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/](https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="elementor-search-form" role="search" action="https://lca-wp.sbx.synaltic.app" method="get">`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form class="elementor-search-form" role="search" action="https://lca-wp.sbx.synaltic.app" method="get">`
  
  
  
  
Instances: 11
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "s" ].</p>
  
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
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php?action=lostpassword](https://lca-wp.sbx.synaltic.app/wp-login.php?action=lostpassword)
  
  
  * Method: `GET`
  
  
  * Parameter: `wordpress_test_cookie`
  
  
  * Evidence: `Set-Cookie: wordpress_test_cookie`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php](https://lca-wp.sbx.synaltic.app/wp-login.php)
  
  
  * Method: `POST`
  
  
  * Parameter: `wordpress_test_cookie`
  
  
  * Evidence: `Set-Cookie: wordpress_test_cookie`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F](https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `wordpress_test_cookie`
  
  
  * Evidence: `Set-Cookie: wordpress_test_cookie`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the HttpOnly flag is set for all cookies.</p>
  
### Reference
* https://owasp.org/www-community/HttpOnly

  
#### CWE Id : 1004
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php](https://lca-wp.sbx.synaltic.app/wp-login.php)
  
  
  * Method: `POST`
  
  
  * Parameter: `wordpress_test_cookie`
  
  
  * Evidence: `Set-Cookie: wordpress_test_cookie`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F](https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `wordpress_test_cookie`
  
  
  * Evidence: `Set-Cookie: wordpress_test_cookie`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php?action=lostpassword](https://lca-wp.sbx.synaltic.app/wp-login.php?action=lostpassword)
  
  
  * Method: `GET`
  
  
  * Parameter: `wordpress_test_cookie`
  
  
  * Evidence: `Set-Cookie: wordpress_test_cookie`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 1275
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-content/plugins/elementor-pro/assets/lib/smartmenus/jquery.smartmenus.min.js?ver=1.0.1](https://lca-wp.sbx.synaltic.app/wp-content/plugins/elementor-pro/assets/lib/smartmenus/jquery.smartmenus.min.js?ver=1.0.1)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-includes/js/jquery/jquery.min.js?ver=3.6.0](https://lca-wp.sbx.synaltic.app/wp-includes/js/jquery/jquery.min.js?ver=3.6.0)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
Instances: 2
  
### Solution
<p>See the references for security advice on the use of these functions.</p>
  
### Reference
* https://angular.io/guide/security

  
#### CWE Id : 749
  
#### Source ID : 3

  
  
  
  
### Incomplete or No Cache-control Header Set
##### Low (Medium)
  
  
  
  
#### Description
<p>The cache-control header has not been set properly or is missing, allowing the browser and proxies to cache content.</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/](https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-sitemap.xml](https://lca-wp.sbx.synaltic.app/wp-sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/](https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/](https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/](https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/robots.txt](https://lca-wp.sbx.synaltic.app/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
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
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/](https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/](https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/](https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-admin/admin-ajax.php](https://lca-wp.sbx.synaltic.app/wp-admin/admin-ajax.php)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/](https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/](https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
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

  
  
  
  
### Private IP Disclosure
##### Low (Medium)
  
  
  
  
#### Description
<p>A private IP (such as 10.x.x.x, 172.x.x.x, 192.168.x.x) or an Amazon EC2 private hostname (for example, ip-10-0-56-78) has been found in the HTTP response body. This information might be helpful for further attacks targeting internal systems.</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/declarer-ses-activites-de-benevolat-via-le-compte-benevole/](https://lca-wp.sbx.synaltic.app/declarer-ses-activites-de-benevolat-via-le-compte-benevole/)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.2.9.0`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/](https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.2.12.0`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/](https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.2.9.0`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/lancement-du-passsport-dans-le-compte-asso-pour-permettre-aux-structures-de-se-faire-rembourser/](https://lca-wp.sbx.synaltic.app/actualites/lancement-du-passsport-dans-le-compte-asso-pour-permettre-aux-structures-de-se-faire-rembourser/)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.2.9.0`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/](https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.2.12.0`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-une-subvention/](https://lca-wp.sbx.synaltic.app/demander-une-subvention/)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.2.12.0`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/traiter-les-declarations-des-activites-de-benevolat/](https://lca-wp.sbx.synaltic.app/traiter-les-declarations-des-activites-de-benevolat/)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.2.12.0`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.2.9.0`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/le-compte-asso-fait-peau-neuve/](https://lca-wp.sbx.synaltic.app/actualites/le-compte-asso-fait-peau-neuve/)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.2.9.0`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/](https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.2.9.0`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.2.12.0`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/](https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/)
  
  
  * Method: `GET`
  
  
  * Evidence: `10.2.9.0`
  
  
  
  
Instances: 12
  
### Solution
<p>Remove the private IP address from the HTTP response body.  For comments, use JSP/ASP/PHP comment instead of HTML/JavaScript comment which can be seen by client browsers.</p>
  
### Other information
<p>10.2.9.0</p><p></p>
  
### Reference
* https://tools.ietf.org/html/rfc1918

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s)
##### Low (Medium)
  
  
  
  
#### Description
<p>The web/application server is leaking information via one or more "X-Powered-By" HTTP response headers. Access to such information may facilitate attackers identifying other frameworks/components your web application is reliant upon and the vulnerabilities such components may be subject to.</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: PHP/7.3.16`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-admin/admin-ajax.php](https://lca-wp.sbx.synaltic.app/wp-admin/admin-ajax.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: PHP/7.3.16`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-sitemap.xml](https://lca-wp.sbx.synaltic.app/wp-sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: PHP/7.3.16`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/robots.txt](https://lca-wp.sbx.synaltic.app/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: PHP/7.3.16`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/sitemap.xml](https://lca-wp.sbx.synaltic.app/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: PHP/7.3.16`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: PHP/7.3.16`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/decouvrir-le-compte-asso](https://lca-wp.sbx.synaltic.app/decouvrir-le-compte-asso)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: PHP/7.3.16`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: PHP/7.3.16`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: PHP/7.3.16`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-admin/](https://lca-wp.sbx.synaltic.app/wp-admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: PHP/7.3.16`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Evidence: `X-Powered-By: PHP/7.3.16`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to suppress "X-Powered-By" headers.</p>
  
### Reference
* http://blogs.msdn.com/b/varunm/archive/2013/04/23/remove-unwanted-http-response-headers.aspx
* http://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/](https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-sitemap.xml](https://lca-wp.sbx.synaltic.app/wp-sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/](https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/](https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/](https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/robots.txt](https://lca-wp.sbx.synaltic.app/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.</p>
  
### Other information
<p>This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.</p><p>At "High" threshold this scan rule will not alert on client or server error responses.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx
* https://owasp.org/www-community/Security_Headers

  
#### CWE Id : 693
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-une-subvention/](https://lca-wp.sbx.synaltic.app/demander-une-subvention/)
  
  
  * Method: `GET`
  
  
  * Evidence: `app/wp-content/uploads/2021/07/1200px-Republique-francaise-logo`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Evidence: `app/wp-content/uploads/2021/07/1200px-Republique-francaise-logo`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/](https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/)
  
  
  * Method: `GET`
  
  
  * Evidence: `app/wp-content/uploads/2021/07/1200px-Republique-francaise-logo`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `app/wp-content/uploads/2021/07/1200px-Republique-francaise-logo`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/](https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/)
  
  
  * Method: `GET`
  
  
  * Evidence: `app/wp-content/uploads/2021/07/1200px-Republique-francaise-logo`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/](https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/)
  
  
  * Method: `GET`
  
  
  * Evidence: `app/wp-content/uploads/2021/07/1200px-Republique-francaise-logo`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/](https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/)
  
  
  * Method: `GET`
  
  
  * Evidence: `app/wp-content/uploads/2021/07/1200px-Republique-francaise-logo`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Evidence: `app/wp-content/uploads/2021/07/1200px-Republique-francaise-logo`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `app/wp-content/uploads/2021/07/1200px-Republique-francaise-logo`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/](https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/)
  
  
  * Method: `GET`
  
  
  * Evidence: `app/wp-content/uploads/2021/07/1200px-Republique-francaise-logo`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `app/wp-content/uploads/2021/07/1200px-Republique-francaise-logo`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>j���{^���Z\x001av���mӿ��M)��^��劫���ڝƢ�異</p><p></p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/](https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/](https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/](https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/](https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bADMIN\b and was detected 6 times, the first in the element starting with: "<script type='text/javascript' id='jquery-core-js-extra'></p><p>/* <![CDATA[ */</p><p>var pp = {"ajax_url":"https:\/\/lca-wp.sbx.synaltic.ap", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-dc10550" target="_blank">
						<span class="elementor-screen-only">Linkedin</span>
						<i class="fab fa-linkedin"></i>					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/](https://lca-wp.sbx.synaltic.app/comment-gerer-mon-association/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-dc10550" target="_blank">
						<span class="elementor-screen-only">Linkedin</span>
						<i class="fab fa-linkedin"></i>					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="elementor-button-link elementor-button elementor-size-lg" role="button" id="gestion_association_fonctionnalites">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-text">En savoir plus sur les fonctionnalités</span>
		</span>
					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" class="elementor-button-link elementor-button elementor-size-lg" role="button" id="gestion_association_fonctionnalites">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-text">En savoir plus sur les fonctionnalités</span>
		</span>
					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/](https://lca-wp.sbx.synaltic.app/saisir-les-comptes-rendus-financiers/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-dc10550" target="_blank">
						<span class="elementor-screen-only">Linkedin</span>
						<i class="fab fa-linkedin"></i>					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/](https://lca-wp.sbx.synaltic.app/declarer-un-changement-de-situation-de-mon-association/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-dc10550" target="_blank">
						<span class="elementor-screen-only">Linkedin</span>
						<i class="fab fa-linkedin"></i>					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/](https://lca-wp.sbx.synaltic.app/comment-se-creer-un-compte/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-dc10550" target="_blank">
						<span class="elementor-screen-only">Linkedin</span>
						<i class="fab fa-linkedin"></i>					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-dc10550" target="_blank">
						<span class="elementor-screen-only">Linkedin</span>
						<i class="fab fa-linkedin"></i>					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-dc10550" target="_blank">
						<span class="elementor-screen-only">Linkedin</span>
						<i class="fab fa-linkedin"></i>					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-une-subvention/](https://lca-wp.sbx.synaltic.app/demander-une-subvention/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-dc10550" target="_blank">
						<span class="elementor-screen-only">Linkedin</span>
						<i class="fab fa-linkedin"></i>					</a>`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/](https://lca-wp.sbx.synaltic.app/demander-lattribution-dun-n-siren-siret/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-dc10550" target="_blank">
						<span class="elementor-screen-only">Linkedin</span>
						<i class="fab fa-linkedin"></i>					</a>`
  
  
  
  
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
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/sitemap.xml](https://lca-wp.sbx.synaltic.app/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/faq/](https://lca-wp.sbx.synaltic.app/faq/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/category/demarches-administratives/](https://lca-wp.sbx.synaltic.app/category/demarches-administratives/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/robots.txt](https://lca-wp.sbx.synaltic.app/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-sitemap.xml](https://lca-wp.sbx.synaltic.app/wp-sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/decouvrir-le-compte-asso](https://lca-wp.sbx.synaltic.app/decouvrir-le-compte-asso)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/actualites/](https://lca-wp.sbx.synaltic.app/actualites/)
  
  
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

  
  
  
  
### Storable but Non-Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, but will not be retrieved directly from the cache, without validating the request upstream, in response to similar requests from other users. </p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-admin/admin-ajax.php](https://lca-wp.sbx.synaltic.app/wp-admin/admin-ajax.php)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-admin/](https://lca-wp.sbx.synaltic.app/wp-admin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1629812242`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Evidence: `1629812241`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Evidence: `1630050378`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1629474274`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1630140888`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Evidence: `1629474274`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Evidence: `1629812242`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1629812241`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app](https://lca-wp.sbx.synaltic.app)
  
  
  * Method: `GET`
  
  
  * Evidence: `1630140888`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/](https://lca-wp.sbx.synaltic.app/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1630050378`
  
  
  
  
Instances: 10
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1629812242, which evaluates to: 2021-08-24 13:37:22</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php?action=lostpassword](https://lca-wp.sbx.synaltic.app/wp-login.php?action=lostpassword)
  
  
  * Method: `GET`
  
  
  * Parameter: `action`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php](https://lca-wp.sbx.synaltic.app/wp-login.php)
  
  
  * Method: `POST`
  
  
  * Parameter: `wp-submit`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php](https://lca-wp.sbx.synaltic.app/wp-login.php)
  
  
  * Method: `POST`
  
  
  * Parameter: `redirect_to`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php](https://lca-wp.sbx.synaltic.app/wp-login.php)
  
  
  * Method: `POST`
  
  
  * Parameter: `redirect_to`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php](https://lca-wp.sbx.synaltic.app/wp-login.php)
  
  
  * Method: `POST`
  
  
  * Parameter: `redirect_to`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F](https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `redirect_to`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F](https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `redirect_to`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php](https://lca-wp.sbx.synaltic.app/wp-login.php)
  
  
  * Method: `POST`
  
  
  * Parameter: `redirect_to`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F](https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `redirect_to`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F](https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `redirect_to`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php](https://lca-wp.sbx.synaltic.app/wp-login.php)
  
  
  * Method: `POST`
  
  
  * Parameter: `redirect_to`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F](https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `redirect_to`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php](https://lca-wp.sbx.synaltic.app/wp-login.php)
  
  
  * Method: `POST`
  
  
  * Parameter: `rememberme`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F](https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `redirect_to`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php](https://lca-wp.sbx.synaltic.app/wp-login.php)
  
  
  * Method: `POST`
  
  
  * Parameter: `redirect_to`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php?action=lostpassword](https://lca-wp.sbx.synaltic.app/wp-login.php?action=lostpassword)
  
  
  * Method: `GET`
  
  
  * Parameter: `action`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F](https://lca-wp.sbx.synaltic.app/wp-login.php?reauth=1&redirect_to=https%3A%2F%2Flca-wp.sbx.synaltic.app%2Fwp-admin%2F)
  
  
  * Method: `GET`
  
  
  * Parameter: `redirect_to`
  
  
  
  
* URL: [https://lca-wp.sbx.synaltic.app/wp-login.php](https://lca-wp.sbx.synaltic.app/wp-login.php)
  
  
  * Method: `POST`
  
  
  * Parameter: `redirect_to`
  
  
  
  
Instances: 18
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://lca-wp.sbx.synaltic.app/wp-login.php?action=lostpassword</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [form] tag [id] attribute </p><p></p><p>The user input found was:</p><p>action=lostpassword</p><p></p><p>The user-controlled value was:</p><p>lostpasswordform</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
