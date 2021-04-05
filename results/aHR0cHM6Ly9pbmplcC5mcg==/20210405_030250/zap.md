
# ZAP Scanning Report

Generated on Mon, 5 Apr 2021 02:55:59


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 4 |
| Low | 10 |
| Informational | 8 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 4 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Source Code Disclosure - Perl | Medium | 2 | 
| Sub Resource Integrity Attribute Missing | Medium | 14 | 
| Absence of Anti-CSRF Tokens | Low | 11 | 
| Application Error Disclosure | Low | 1 | 
| Cookie No HttpOnly Flag | Low | 1 | 
| Cookie Without SameSite Attribute | Low | 4 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 8 | 
| Dangerous JS Functions | Low | 11 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Secure Pages Include Mixed Content | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 1 | 
| Base64 Disclosure | Informational | 12 | 
| Charset Mismatch  | Informational | 12 | 
| Content-Type Header Missing | Informational | 1 | 
| Information Disclosure - Suspicious Comments | Informational | 10 | 
| Modern Web Application | Informational | 12 | 
| Storable and Cacheable Content | Informational | 9 | 
| Storable but Non-Cacheable Content | Informational | 2 | 
| Timestamp Disclosure - Unix | Informational | 5 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2021/03/FR55_STAPS.pdf](https://injep.fr/wp-content/uploads/2021/03/FR55_STAPS.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `670718604571709`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2021/03/FR54_JeunesQPV.pdf](https://injep.fr/wp-content/uploads/2021/03/FR54_JeunesQPV.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `579544533615488`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2021/03/FR54_JeunesQPV.pdf](https://injep.fr/wp-content/uploads/2021/03/FR54_JeunesQPV.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `670718604571709`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2021/03/INJEP_Liste-des-acquisitions-n-96-mars-2021.pdf](https://injep.fr/wp-content/uploads/2021/03/INJEP_Liste-des-acquisitions-n-96-mars-2021.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `586333461306562`
  
  
  
  
Instances: 4
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 670718</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: EUROPAY LUXEMBOURG S.C.</p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://injep.fr/veille-documentaire/](https://injep.fr/veille-documentaire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/experimenter/](https://injep.fr/experimenter/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-admin/admin-ajax.php](https://injep.fr/wp-admin/admin-ajax.php)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/publications/](https://injep.fr/publications/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/evenements/](https://injep.fr/evenements/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/secupress-8d6739e9/](https://injep.fr/secupress-8d6739e9/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
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
  
  
  
* URL: [https://injep.fr/veille-documentaire/](https://injep.fr/veille-documentaire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/thematique/jeunesse/](https://injep.fr/thematique/jeunesse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/thematique/education-populaire/](https://injep.fr/thematique/education-populaire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/publications/](https://injep.fr/publications/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/experimenter/](https://injep.fr/experimenter/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
* URL: [https://injep.fr/evenements/](https://injep.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.facebook.com/injep/" target="_blank"><i class="fa fa-facebook fa-2x" ></i></a>`
  
  
  
  
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
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2021/03/chiffres-a-la-une-or-barometre-sport.png](https://injep.fr/wp-content/uploads/2021/03/chiffres-a-la-une-or-barometre-sport.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#QQQR`
  
  
  
  
* URL: [https://injep.fr/wp-content/uploads/2020/09/bretagne-2048x1536.jpg](https://injep.fr/wp-content/uploads/2020/09/bretagne-2048x1536.jpg)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#vfbBq`
  
  
  
  
Instances: 2
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#QQQR</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='https://fonts.gstatic.com' crossorigin rel='preconnect' />`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel='shortlink' href='https://wp.me/bAmw6' />`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src='https://stats.wp.com/e-202113.js' defer></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src='https://stats.wp.com/e-202113.js' defer></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel='shortlink' href='https://wp.me/bAmw6' />`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link href='https://fonts.gstatic.com' crossorigin rel='preconnect' />`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3A400%2C500%2C700%7CMerriweather%3A400%2C700%2C900%2C400italic%2C700italic%2C900italic%7CMontserrat%3A400%2C700%7CInconsolata%3A400&#038;subset=latin%2Clatin-ext&#038;display=swap" />`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3A400%2C500%2C700%7CMerriweather%3A400%2C700%2C900%2C400italic%2C700italic%2C900italic%7CMontserrat%3A400%2C700%7CInconsolata%3A400&#038;subset=latin%2Clatin-ext&#038;display=swap" />`
  
  
  
  
Instances: 14
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Absence of Anti-CSRF Tokens
##### Low (Medium)
  
  
  
  
#### Description
<p>No Anti-CSRF tokens were found in a HTML submission form.</p><p>A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.</p><p></p><p>CSRF attacks are effective in a number of situations, including:</p><p>    * The victim has an active session on the target site.</p><p>    * The victim is authenticated via HTTP auth on the target site.</p><p>    * The victim is on the same local network as the target site.</p><p></p><p>CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.</p>
  
  
  
* URL: [https://injep.fr/evenements/](https://injep.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/veille-documentaire/](https://injep.fr/veille-documentaire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/experimenter/](https://injep.fr/experimenter/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/thematique/education-populaire/](https://injep.fr/thematique/education-populaire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/publications/](https://injep.fr/publications/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
* URL: [https://injep.fr/thematique/jeunesse/](https://injep.fr/thematique/jeunesse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form role="search" method="get" class="search" action="https://injep.fr/">`
  
  
  
  
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

  
  
  
  
### Application Error Disclosure
##### Low (Medium)
  
  
  
  
#### Description
<p>This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.</p>
  
  
  
* URL: [https://injep.fr/wp-admin/admin-post.php?_wpnonce=758b9cb26b&action=secupress_unlock_admin](https://injep.fr/wp-admin/admin-post.php?_wpnonce=758b9cb26b&action=secupress_unlock_admin)
  
  
  * Method: `POST`
  
  
  * Evidence: `HTTP/1.0 500 Internal Server Error`
  
  
  
  
Instances: 1
  
### Solution
<p>Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://injep.fr/injep-adm-login](https://injep.fr/injep-adm-login)
  
  
  * Method: `GET`
  
  
  * Parameter: `wordpress_test_cookie`
  
  
  * Evidence: `Set-Cookie: wordpress_test_cookie`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://injep.fr/injep-adm-login](https://injep.fr/injep-adm-login)
  
  
  * Method: `GET`
  
  
  * Parameter: `wordpress_test_cookie`
  
  
  * Evidence: `Set-Cookie: wordpress_test_cookie`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djepva-injep-portail.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djepva-injep-portail.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://injep.fr/robots.txt](https://injep.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djepva-injep-portail.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djepva-injep-portail.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djepva-injep-portail.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djepva-injep-portail.cegedim.cloud-HTTP`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js`
  
  
  * Evidence: `<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://stats.wp.com/e-202113.js`
  
  
  * Evidence: `<script src='https://stats.wp.com/e-202113.js' defer></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://code.jquery.com/jquery-1.11.3.min.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://platform.twitter.com/widgets.js`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://code.jquery.com/jquery-1.11.3.min.js`
  
  
  * Evidence: `<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://platform.twitter.com/widgets.js`
  
  
  * Evidence: `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js`
  
  
  * Evidence: `<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://stats.wp.com/e-202113.js`
  
  
  * Evidence: `<script src='https://stats.wp.com/e-202113.js' defer></script>`
  
  
  
  
Instances: 8
  
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
  
  
  
* URL: [https://injep.fr/wp-includes/js/jquery/jquery.min.js?ver=3.5.1](https://injep.fr/wp-includes/js/jquery/jquery.min.js?ver=3.5.1)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://injep.fr/publication/evaluation-de-la-politique-de-jeunesse-municipale-et-associative-de-sedan/](https://injep.fr/publication/evaluation-de-la-politique-de-jeunesse-municipale-et-associative-de-sedan/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/wp-content/themes/injep-theme/js/tarteaucitron/tarteaucitron.js](https://injep.fr/wp-content/themes/injep-theme/js/tarteaucitron/tarteaucitron.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/linstitut/missions/mission-observation-et-evaluation-moe/](https://injep.fr/linstitut/missions/mission-observation-et-evaluation-moe/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/publication/evaluation-de-la-phase-de-prefiguration-du-service-national-universel/](https://injep.fr/publication/evaluation-de-la-phase-de-prefiguration-du-service-national-universel/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/publication/lexperimentation-sociale-etapes-et-methodes-devaluation/](https://injep.fr/publication/lexperimentation-sociale-etapes-et-methodes-devaluation/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/publication/analyse-des-protocoles-de-suivi-et-devaluation-des-cites-educatives/](https://injep.fr/publication/analyse-des-protocoles-de-suivi-et-devaluation-des-cites-educatives/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/publication/evaluation-de-la-phase-de-prefiguration-du-service-national-universel-2/](https://injep.fr/publication/evaluation-de-la-phase-de-prefiguration-du-service-national-universel-2/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/publication/construire-une-demarche-devaluation-partagee-une-experimentation-dans-le-pas-de-calais/](https://injep.fr/publication/construire-une-demarche-devaluation-partagee-une-experimentation-dans-le-pas-de-calais/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/linstitut/linjep-missionne-pour-evaluer-le-snu/](https://injep.fr/linstitut/linjep-missionne-pour-evaluer-le-snu/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
* URL: [https://injep.fr/publication/evaluation-de-la-prefiguration-du-service-national-universel/](https://injep.fr/publication/evaluation-de-la-prefiguration-du-service-national-universel/)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
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
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/publications/](https://injep.fr/publications/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/veille-documentaire/](https://injep.fr/veille-documentaire/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-admin/admin-ajax.php](https://injep.fr/wp-admin/admin-ajax.php)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/evenements/](https://injep.fr/evenements/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/secupress-8d6739e9/](https://injep.fr/secupress-8d6739e9/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/experimenter/](https://injep.fr/experimenter/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
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
  
  
  
* URL: [https://injep.fr/experimenter/](https://injep.fr/experimenter/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/veille-documentaire/](https://injep.fr/veille-documentaire/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/sitemap.xml](https://injep.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/evenements/](https://injep.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/robots.txt](https://injep.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://injep.fr/publications/](https://injep.fr/publications/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public`
  
  
  
  
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
  
  
  
* URL: [https://injep.fr/evenement/jeunes-sans-diplomes-quels-rapports-au-travail-et-a-lemploi/](https://injep.fr/evenement/jeunes-sans-diplomes-quels-rapports-au-travail-et-a-lemploi/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.injep.fr/sites/default/files/styles/body/public/images/conf31mai-3.jpg?itok=V3tIXpGx`
  
  
  
  
* URL: [https://injep.fr/evenement/bande-dessinee-jeunesses-et-activites-corporelles/](https://injep.fr/evenement/bande-dessinee-jeunesses-et-activites-corporelles/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.injep.fr/sites/default/files/styles/body/public/images/conf-angouleme.jpg?itok=xvKs7t_1`
  
  
  
  
* URL: [https://injep.fr/injep_veille_actus/455-23-fevrier-2021/](https://injep.fr/injep_veille_actus/455-23-fevrier-2021/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://newsmailer.fr/templates/124/images/ministere-en-2018.gif`
  
  
  
  
* URL: [https://injep.fr/evenement/les-groupements-demployeurs-une-solution-pour-lavenir-du-secteur-associatif/](https://injep.fr/evenement/les-groupements-demployeurs-une-solution-pour-lavenir-du-secteur-associatif/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://www.injep.fr/sites/default/files/styles/body/public/images/img_3453.jpg?itok=4RqvwgH1`
  
  
  
  
* URL: [https://injep.fr/injep_veille_actus/454-3-fevrier-2021/](https://injep.fr/injep_veille_actus/454-3-fevrier-2021/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://newsmailer.fr/templates/124/images/ministere-en-2018.gif`
  
  
  
  
* URL: [https://injep.fr/injep_veille_actus/457-24-mars-2021/](https://injep.fr/injep_veille_actus/457-24-mars-2021/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://newsmailer.fr/templates/124/images/ministere-en-2018.gif`
  
  
  
  
* URL: [https://injep.fr/donnee/donnees-sur-les-accueils-collectifs-de-mineurs-sur-la-periode-2009-2010-a-2017-2018/](https://injep.fr/donnee/donnees-sur-les-accueils-collectifs-de-mineurs-sur-la-periode-2009-2010-a-2017-2018/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://mtsfp-vm-injep-preprod.accelance.net/wp-content/uploads/2018/12/1_0.jpg`
  
  
  
  
* URL: [https://injep.fr/injep_veille_actus/456-10-mars-2021/](https://injep.fr/injep_veille_actus/456-10-mars-2021/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://newsmailer.fr/templates/124/images/ministere-en-2018.gif`
  
  
  
  
* URL: [https://injep.fr/injep_veille_actus/453-20-janvier-2021/](https://injep.fr/injep_veille_actus/453-20-janvier-2021/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://newsmailer.fr/templates/124/images/ministere-en-2018.gif`
  
  
  
  
* URL: [https://injep.fr/evenement/les-rencontres-2017-les-nouvelles-jeunesses-de-la-democratie-une-revitalisation-de-la-participation-citoyenne/](https://injep.fr/evenement/les-rencontres-2017-les-nouvelles-jeunesses-de-la-democratie-une-revitalisation-de-la-participation-citoyenne/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://mtsfp-vm-injep-preprod.accelance.net/wp-content/uploads/2018/12/retour-renc2017-diapo.jpg`
  
  
  
  
* URL: [https://injep.fr/donnee/donnees-relatives-aux-accueils-collectifs-de-mineurs-annees-2007-2008-a-2016-2017/](https://injep.fr/donnee/donnees-relatives-aux-accueils-collectifs-de-mineurs-annees-2007-2008-a-2016-2017/)
  
  
  * Method: `GET`
  
  
  * Evidence: `http://mtsfp-vm-injep-preprod.accelance.net/wp-content/uploads/2018/09/graphique-accueil-loisirs2_0-1-1024x623.png`
  
  
  
  
Instances: 11
  
### Solution
<p>A page that is available over SSL/TLS must be comprised completely of content which is transmitted over SSL/TLS.</p><p>The page must not contain any content that is transmitted over unencrypted HTTP.</p><p> This includes content from third party sites.</p>
  
### Other information
<p>tag=img src=http://www.injep.fr/sites/default/files/styles/body/public/images/conf31mai-3.jpg?itok=V3tIXpGx</p><p>tag=img src=http://www.injep.fr/sites/default/files/styles/body_small/public/images/conf31mai-2.jpg?itok=BKSUlzx2</p><p>tag=img src=http://www.injep.fr/sites/default/files/styles/body/public/images/conf31mai-1.jpg?itok=8kS_Kii4</p><p></p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html

  
#### CWE Id : 311
  
#### WASC Id : 4
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://injep.fr/wp-admin/admin-post.php?_wpnonce=758b9cb26b&action=secupress_unlock_admin](https://injep.fr/wp-admin/admin-post.php?_wpnonce=758b9cb26b&action=secupress_unlock_admin)
  
  
  * Method: `POST`
  
  
  
  
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
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/robots.txt](https://injep.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `ZVZp7L6EO+CvkSIqJlLL3fNyljz02dJRrPWIQKHqIZz/y5CawFd0gPPizsliEDZpB1abWtRZwSDLq4ym+Gss+/6ZCwA=`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/publications/](https://injep.fr/publications/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/experimenter/](https://injep.fr/experimenter/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/evenements/](https://injep.fr/evenements/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `y1+6iXVQ9SaDxswqJlLL3fNyljz02cxl4TkSL0BXraAKVTpzvmBwlK3pZuCQtNJMTYiQzaz/M+3Ui4h6H5qIfFEAHZA=`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `vUPXuwFFhRP6dSoqJlLL3fNyljz02XxiyOkPyjduyiOdFDCl1mfQhDyqEkRoDG/yVUnkCsfQeAHxEDXnvyo2Ul7QKIk=`
  
  
  
  
* URL: [https://injep.fr/veille-documentaire/](https://injep.fr/veille-documentaire/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/wp-content/cache/min/1/wp-content/themes/injep-theme/IE/ie11`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
* URL: [https://injep.fr/thematique/jeunesse/](https://injep.fr/thematique/jeunesse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/channel/UCShs01H7M6fMT_pX0B7NojA`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>r��r\x0016���P$��MG�Ο1?�_@{6��</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Charset Mismatch 
##### Informational (Low)
  
  
  
  
#### Description
<p>This check identifies responses where the HTTP Content-Type header declares a charset different from the charset defined by the body of the HTML or XML. When there's a charset mismatch between the HTTP header and content body Web browsers can be forced into an undesirable content-sniffing mode to determine the content's correct character set.</p><p></p><p>An attacker could manipulate content on the page to be interpreted in an encoding of their choice. For example, if an attacker can control content at the beginning of the page, they could inject script using UTF-7 encoded text and manipulate some browsers into interpreting that text.</p>
  
  
  
* URL: [https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fpublication%2Fprofil-et-parcours-dinsertion-professionnelle-des-licencies-bac-3-de-staps%2F](https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fpublication%2Fprofil-et-parcours-dinsertion-professionnelle-des-licencies-bac-3-de-staps%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fmesurer%2Fenquete-nationale-2021-sur-lengagement-associatif-et-les-don%2F](https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fmesurer%2Fenquete-nationale-2021-sur-lengagement-associatif-et-les-don%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Ffocus%2Fdossier-les-pratiques-culturelles-des-jeunes-des-quartiers-populaires%2F](https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Ffocus%2Fdossier-les-pratiques-culturelles-des-jeunes-des-quartiers-populaires%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Flinstitut%2F](https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Flinstitut%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fpublication%2Fgenerations-desenchantees-jeunes-et-democratie%2F](https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fpublication%2Fgenerations-desenchantees-jeunes-et-democratie%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Ffocus%2Fdossier-le-rapport-des-jeunes-au-travail%2F](https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Ffocus%2Fdossier-le-rapport-des-jeunes-au-travail%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fpublication%2Fles-chiffres-cles-de-la-jeunesse-2021%2F](https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fpublication%2Fles-chiffres-cles-de-la-jeunesse-2021%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fmesurer%2Fmise-en-ligne-des-donnees-du-recensement-des-equipements-sportifs%2F](https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fmesurer%2Fmise-en-ligne-des-donnees-du-recensement-des-equipements-sportifs%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fexperimenter%2Fterritoires-ruraux-lancement-de-nouvelles-experimentations-pour-faciliter-linsertion-et-accroitre-lautonomie-des-jeunes%2F](https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fexperimenter%2Fterritoires-ruraux-lancement-de-nouvelles-experimentations-pour-faciliter-linsertion-et-accroitre-lautonomie-des-jeunes%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fexperimenter%2Fla-reunion-nouvelles-experimentations-en-faveur-de-linsertion-des-jeunes-et-du-developpement-de-la-vie-associative%2F](https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fexperimenter%2Fla-reunion-nouvelles-experimentations-en-faveur-de-linsertion-des-jeunes-et-du-developpement-de-la-vie-associative%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fmesurer%2Fmise-a-disposition-des-donnees-communales-sur-les-licences-et-les-clubs-sportifs%2F](https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Fmesurer%2Fmise-a-disposition-des-donnees-communales-sur-les-licences-et-les-clubs-sportifs%2F)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Ffocus%2Fles-evolutions-des-modeles-socio-economiques-associatifs%2F](https://injep.fr/wp-json/oembed/1.0/embed?format=xml&url=https%3A%2F%2Finjep.fr%2Ffocus%2Fles-evolutions-des-modeles-socio-economiques-associatifs%2F)
  
  
  * Method: `GET`
  
  
  
  
Instances: 12
  
### Solution
<p>Force UTF-8 for all text content in both the HTTP header and meta tags in HTML or encoding declarations in XML.</p>
  
### Other information
<p>There was a charset mismatch between the HTTP Header and the XML encoding declaration: [UTF-8] and [null] do not match.</p>
  
### Reference
* http://code.google.com/p/browsersec/wiki/Part2#Character_set_handling_and_detection

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://injep.fr/wp-admin/admin-post.php?_wpnonce=758b9cb26b&action=secupress_unlock_admin](https://injep.fr/wp-admin/admin-post.php?_wpnonce=758b9cb26b&action=secupress_unlock_admin)
  
  
  * Method: `POST`
  
  
  
  
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
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 10
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bUSER\b and was detected in the element starting with: "<script type="text/javascript"></p><p>    tarteaucitron.user.gtagUa = 'UA-65679656-1';</p><p>    tarteaucitron.user.gtagMore = function () {", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://injep.fr/wp-json/wp/v2/categories/4](https://injep.fr/wp-json/wp/v2/categories/4)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type=\"application\/ld+json\" class=\"yoast-schema-graph\">`
  
  
  
  
* URL: [https://injep.fr/rubrique_veille_actus/a-lire-au-centre-de-ressources/](https://injep.fr/rubrique_veille_actus/a-lire-au-centre-de-ressources/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" target="_blank">Voir le site</a>`
  
  
  
  
* URL: [https://injep.fr/rubrique_veille_actus/la-revue-de-presse/](https://injep.fr/rubrique_veille_actus/la-revue-de-presse/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" target="_blank">Voir le site</a>`
  
  
  
  
* URL: [https://injep.fr/rubrique_veille_actus/les-essentiels/](https://injep.fr/rubrique_veille_actus/les-essentiels/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" target="_blank">Voir le site</a>`
  
  
  
  
* URL: [https://injep.fr/wp-json/wp/v2/categories/3](https://injep.fr/wp-json/wp/v2/categories/3)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type=\"application\/ld+json\" class=\"yoast-schema-graph\">`
  
  
  
  
* URL: [https://injep.fr/wp-content/themes/injep-theme/js/jquery.flexslider-min.js?ver=1](https://injep.fr/wp-content/themes/injep-theme/js/jquery.flexslider-min.js?ver=1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a></a>`
  
  
  
  
* URL: [https://injep.fr/wp-json/wp/v2/categories/7](https://injep.fr/wp-json/wp/v2/categories/7)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type=\"application\/ld+json\" class=\"yoast-schema-graph\">`
  
  
  
  
* URL: [https://injep.fr/rubrique_veille_actus/a-lagenda/](https://injep.fr/rubrique_veille_actus/a-lagenda/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" target="_blank">Voir le site</a>`
  
  
  
  
* URL: [https://injep.fr/wp-json/wp/v2/categories/6](https://injep.fr/wp-json/wp/v2/categories/6)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type=\"application\/ld+json\" class=\"yoast-schema-graph\">`
  
  
  
  
* URL: [https://injep.fr/wp-json/wp/v2/categories/5](https://injep.fr/wp-json/wp/v2/categories/5)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type=\"application\/ld+json\" class=\"yoast-schema-graph\">`
  
  
  
  
* URL: [https://injep.fr/focus/dossier-discrimination-dorigines-les-travaux-et-les-enseignements-de-linjep/](https://injep.fr/focus/dossier-discrimination-dorigines-les-travaux-et-les-enseignements-de-linjep/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="more-link more-link-custom" href="#">Lire la suite...</a>`
  
  
  
  
* URL: [https://injep.fr/wp-includes/js/jquery/jquery.min.js?ver=3.5.1](https://injep.fr/wp-includes/js/jquery/jquery.min.js?ver=3.5.1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a id='"+S+"'></a>`
  
  
  
  
Instances: 12
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>No links have been found while there are scripts, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://injep.fr/publications/](https://injep.fr/publications/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/analyser/](https://injep.fr/analyser/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/linstitut/](https://injep.fr/linstitut/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr](https://injep.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/experimenter/](https://injep.fr/experimenter/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/mesurer/](https://injep.fr/mesurer/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/robots.txt](https://injep.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://injep.fr/sitemap.xml](https://injep.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://injep.fr/secupress-8d6739e9/](https://injep.fr/secupress-8d6739e9/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-cache`
  
  
  
  
* URL: [https://injep.fr/wp-admin/admin-ajax.php](https://injep.fr/wp-admin/admin-ajax.php)
  
  
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
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `171206062`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1617289088`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1617363513`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `65679656`
  
  
  
  
* URL: [https://injep.fr/](https://injep.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20160816`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>171206062, which evaluates to: 1975-06-05 13:14:22</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
