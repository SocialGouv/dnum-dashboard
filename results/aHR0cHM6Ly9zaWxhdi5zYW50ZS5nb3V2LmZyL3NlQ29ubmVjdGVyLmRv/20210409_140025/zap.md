
# ZAP Scanning Report

Generated on Fri, 9 Apr 2021 13:54:33


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 6 |
| Low | 10 |
| Informational | 9 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 7 | 
| Cross-Domain Misconfiguration | Medium | 1 | 
| Session ID in URL Rewrite | Medium | 1 | 
| Sub Resource Integrity Attribute Missing | Medium | 1 | 
| Vulnerable JS Library | Medium | 2 | 
| X-Frame-Options Header Not Set | Medium | 4 | 
| Absence of Anti-CSRF Tokens | Low | 3 | 
| Cookie No HttpOnly Flag | Low | 3 | 
| Cookie Without SameSite Attribute | Low | 6 | 
| Cookie Without Secure Flag | Low | 6 | 
| Dangerous JS Functions | Low | 4 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 8 | 
| In Page Banner Information Leak | Low | 3 | 
| Strict-Transport-Security Header Not Set | Low | 11 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 6 | 
| Charset Mismatch (Header Versus Meta Content-Type Charset) | Informational | 1 | 
| Information Disclosure - Suspicious Comments | Informational | 13 | 
| Loosely Scoped Cookie | Informational | 3 | 
| Modern Web Application | Informational | 9 | 
| Non-Storable Content | Informational | 2 | 
| Storable and Cacheable Content | Informational | 9 | 
| Timestamp Disclosure - Unix | Informational | 9 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 1 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/datepicker/ui/jquery.ui.datepicker.js](https://silav.sante.gouv.fr/js/datepicker/ui/jquery.ui.datepicker.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1](https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/datepicker/ui/jquery.ui.datepicker-fr.js](https://silav.sante.gouv.fr/js/datepicker/ui/jquery.ui.datepicker-fr.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/datepicker/jquery.ui.widget.js](https://silav.sante.gouv.fr/js/datepicker/jquery.ui.widget.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do?login_error=1](https://silav.sante.gouv.fr/seConnecter.do?login_error=1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  
  
Instances: 7
  
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

  
  
  
  
### Cross-Domain Misconfiguration
##### Medium (Medium)
  
  
  
  
#### Description
<p>Web browser data loading may be possible, due to a Cross Origin Resource Sharing (CORS) misconfiguration on the web server</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that sensitive data is not available in an unauthenticated manner (using IP address white-listing, for instance).</p><p>Configure the "Access-Control-Allow-Origin" HTTP header to a more restrictive set of domains, or remove all CORS headers entirely, to allow the web browser to enforce the Same Origin Policy (SOP) in a more restrictive manner.</p>
  
### Other information
<p>The CORS misconfiguration on the web server permits cross-domain read requests from arbitrary third party domains, using unauthenticated APIs on this domain. Web browser implementations do not permit arbitrary third parties to read the response from authenticated APIs, however. This reduces the risk somewhat. This misconfiguration could be used by an attacker to access data that is available in an unauthenticated manner, but which uses some other form of security, such as IP address white-listing.</p>
  
### Reference
* http://www.hpenterprisesecurity.com/vulncat/en/vulncat/vb/html5_overly_permissive_cors_policy.html

  
#### CWE Id : 264
  
#### WASC Id : 14
  
#### Source ID : 3

  
  
  
  
### Session ID in URL Rewrite
##### Medium (High)
  
  
  
  
#### Description
<p>URL rewrite is used to track user session ID. The session ID may be disclosed via cross-site referer header. In addition, the session ID might be stored in browser history or server logs.</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1](https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1)
  
  
  * Method: `GET`
  
  
  * Evidence: `jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03`
  
  
  
  
Instances: 1
  
### Solution
<p>For secure content, put session ID in a cookie. To be even more secure consider using a combination of cookie and URL rewrite.</p>
  
### Reference
* http://seclists.org/lists/webappsec/2002/Oct-Dec/0111.html

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script id="dtjsagentdw" type="text/javascript" src="'+
Ig+'">`
  
  
  
  
Instances: 1
  
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
<p>The identified library jquery, version 1.7 is vulnerable.</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/js/jQuery/jquery-1.7.js](https://silav.sante.gouv.fr/js/jQuery/jquery-1.7.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `jquery-1.7.js`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/jQuery/1.8/jquery-ui.min.js](https://silav.sante.gouv.fr/js/jQuery/1.8/jquery-ui.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.effects.core.js, jquery.effects.blind.js, jquery.effects.bounce.js, jquery.effects.clip.js, jquery.effects.drop.js, jquery.effects.explode.js, jquery.effects.fade.js, jquery.effects.fold.js, jquery.effects.highlight.js, jquery.effects.pulsate.js, jquery.effects.scale.js, jquery.effects.shake.js, jquery.effects.slide.js, jquery.effects.transfer.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js`
  
  
  
  
Instances: 2
  
### Solution
<p>Please upgrade to the latest version of jquery.</p>
  
### Other information
<p>CVE-2020-11023</p><p>CVE-2020-11022</p><p>CVE-2015-9251</p><p>CVE-2019-11358</p><p>CVE-2012-6708</p><p></p>
  
### Reference
* https://nvd.nist.gov/vuln/detail/CVE-2012-6708
* https://github.com/jquery/jquery/issues/2432
* http://research.insecurelabs.org/jquery/test/
* http://blog.jquery.com/2016/01/08/jquery-2-2-and-1-12-released/
* http://bugs.jquery.com/ticket/11290
* https://blog.jquery.com/2019/04/10/jquery-3-4-0-released/
* https://nvd.nist.gov/vuln/detail/CVE-2019-11358
* https://nvd.nist.gov/vuln/detail/CVE-2015-9251
* https://github.com/jquery/jquery/commit/753d591aea698e57d6db58c9f722cd0808619b1b
* https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/
* 

  
#### CWE Id : 829
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1](https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do?login_error=1](https://silav.sante.gouv.fr/seConnecter.do?login_error=1)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do?login_error=1](https://silav.sante.gouv.fr/seConnecter.do?login_error=1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="j_spring_security_check" method="post" onkeypress="if (event.keyCode == 13) submit()">`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="j_spring_security_check" method="post" onkeypress="if (event.keyCode == 13) submit()">`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1](https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<form action="j_spring_security_check" method="post" onkeypress="if (event.keyCode == 13) submit()">`
  
  
  
  
Instances: 3
  
### Solution
<p>Phase: Architecture and Design</p><p>Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.</p><p>For example, use anti-CSRF packages such as the OWASP CSRFGuard.</p><p></p><p>Phase: Implementation</p><p>Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.</p><p></p><p>Phase: Architecture and Design</p><p>Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.</p><p>Note that this can be bypassed using XSS.</p><p></p><p>Use the ESAPI Session Management control.</p><p>This control includes a component for CSRF.</p><p></p><p>Do not use the GET method for any request that triggers a state change.</p><p></p><p>Phase: Implementation</p><p>Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.</p>
  
### Other information
<p>No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF] was found in the following HTML form: [Form 1: "j_username" "j_password" ].</p>
  
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
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/robots.txt](https://silav.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://silav.sante.gouv.fr/robots.txt](https://silav.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/robots.txt](https://silav.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
Instances: 6
  
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
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/robots.txt](https://silav.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `dtCookie`
  
  
  * Evidence: `Set-Cookie: dtCookie`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/robots.txt](https://silav.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
Instances: 6
  
### Solution
<p>Whenever a cookie contains sensitive information or is a session token, then it should always be passed using an encrypted channel. Ensure that the secure flag is set for cookies containing such sensitive information.</p>
  
### Reference
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html

  
#### CWE Id : 614
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/js/jQuery/jquery-1.7.js](https://silav.sante.gouv.fr/js/jQuery/jquery-1.7.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/validationForm.js](https://silav.sante.gouv.fr/js/validationForm.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/jQuery/1.8/jquery-ui.min.js](https://silav.sante.gouv.fr/js/jQuery/1.8/jquery-ui.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `evAl`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://silav.sante.gouv.fr/js/validationForm.js](https://silav.sante.gouv.fr/js/validationForm.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/ajoutAdresse.js](https://silav.sante.gouv.fr/js/ajoutAdresse.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/lang/en.js](https://silav.sante.gouv.fr/js/lang/en.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/detailsProspection.js](https://silav.sante.gouv.fr/js/detailsProspection.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1](https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/traitementSystematique.js](https://silav.sante.gouv.fr/js/traitementSystematique.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/onglets.js](https://silav.sante.gouv.fr/js/onglets.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/calendar.js](https://silav.sante.gouv.fr/js/calendar.js)
  
  
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
  
  
  
* URL: [https://silav.sante.gouv.fr/css/silav.css](https://silav.sante.gouv.fr/css/silav.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/css/jquery.ui.datepicker.css](https://silav.sante.gouv.fr/css/jquery.ui.datepicker.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/css/jquery-ui.css](https://silav.sante.gouv.fr/css/jquery-ui.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do?login_error=1](https://silav.sante.gouv.fr/seConnecter.do?login_error=1)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1](https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/css/calendar.css](https://silav.sante.gouv.fr/css/calendar.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 8
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### In Page Banner Information Leak
##### Low (High)
  
  
  
  
#### Description
<p>The server returned a version banner string in the response content. Such information leaks may allow attackers to further target specific issues impacting the product and version in use.</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/js/datepicker/ui/jquery.ui.datepicker.js](https://silav.sante.gouv.fr/js/datepicker/ui/jquery.ui.datepicker.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Tomcat/7.0.42`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/datepicker/jquery.ui.widget.js](https://silav.sante.gouv.fr/js/datepicker/jquery.ui.widget.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Tomcat/7.0.42`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/datepicker/ui/jquery.ui.datepicker-fr.js](https://silav.sante.gouv.fr/js/datepicker/ui/jquery.ui.datepicker-fr.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Tomcat/7.0.42`
  
  
  
  
Instances: 3
  
### Solution
<p>Configure the server to prevent such information leaks. For example:</p><p>Under Tomcat this is done via the "server" directive and implementation of custom error pages.</p><p>Under Apache this is done via the "ServerSignature" and "ServerTokens" directives.</p>
  
### Other information
<p>There is a chance that the highlight in the finding is on a value in the headers, versus the actual matched string in the response body.</p>
  
### Reference
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/08-Testing_for_Error_Handling/

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/js/validationForm.js](https://silav.sante.gouv.fr/js/validationForm.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/css/calendar.css](https://silav.sante.gouv.fr/css/calendar.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/onglets.js](https://silav.sante.gouv.fr/js/onglets.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/aide.do?page=MentionsLegales](https://silav.sante.gouv.fr/aide.do?page=MentionsLegales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1](https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/css/jquery-ui.css](https://silav.sante.gouv.fr/css/jquery-ui.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/css/silav.css](https://silav.sante.gouv.fr/css/silav.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/css/jquery.ui.datepicker.css](https://silav.sante.gouv.fr/css/jquery.ui.datepicker.css)
  
  
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
  
  
  
* URL: [https://silav.sante.gouv.fr/css/jquery.ui.datepicker.css](https://silav.sante.gouv.fr/css/jquery.ui.datepicker.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/css/jquery-ui.css](https://silav.sante.gouv.fr/css/jquery-ui.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/validationForm.js](https://silav.sante.gouv.fr/js/validationForm.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/css/silav.css](https://silav.sante.gouv.fr/css/silav.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/aide.do?page=MentionsLegales](https://silav.sante.gouv.fr/aide.do?page=MentionsLegales)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/css/calendar.css](https://silav.sante.gouv.fr/css/calendar.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/onglets.js](https://silav.sante.gouv.fr/js/onglets.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1](https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
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

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/aide.do?page=MentionsLegales](https://silav.sante.gouv.fr/aide.do?page=MentionsLegales)
  
  
  * Method: `GET`
  
  
  * Evidence: `/S/GTS_PDFA1/Type/OutputIntent`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/jQuery/jquery-1.7.js](https://silav.sante.gouv.fr/js/jQuery/jquery-1.7.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `D27CDB6E-AE6D-11cf-96B8-444553540000`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  * Evidence: `/ruxitagentjs_ICA2SVfqru_10211210318124316`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do?login_error=1](https://silav.sante.gouv.fr/seConnecter.do?login_error=1)
  
  
  * Method: `GET`
  
  
  * Evidence: `/ruxitagentjs_ICA2SVfqru_10211210318124316`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/ruxitagentjs_ICA2SVfqru_10211210318124316`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1](https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1)
  
  
  * Method: `GET`
  
  
  * Evidence: `/ruxitagentjs_ICA2SVfqru_10211210318124316`
  
  
  
  
Instances: 6
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�/�M/�\x000cP5�<�{󮶛�"{^�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Charset Mismatch (Header Versus Meta Content-Type Charset)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check identifies responses where the HTTP Content-Type header declares a charset different from the charset defined by the body of the HTML or XML. When there's a charset mismatch between the HTTP header and content body Web browsers can be forced into an undesirable content-sniffing mode to determine the content's correct character set.</p><p></p><p>An attacker could manipulate content on the page to be interpreted in an encoding of their choice. For example, if an attacker can control content at the beginning of the page, they could inject script using UTF-7 encoded text and manipulate some browsers into interpreting that text.</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 1
  
### Solution
<p>Force UTF-8 for all text content in both the HTTP header and meta tags in HTML or encoding declarations in XML.</p>
  
### Other information
<p>There was a charset mismatch between the HTTP Header and the META content-type encoding declarations: [ISO-8859-1] and [utf-8] do not match.</p>
  
### Reference
* http://code.google.com/p/browsersec/wiki/Part2#Character_set_handling_and_detection

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/js/DD_roundies.js](https://silav.sante.gouv.fr/js/DD_roundies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `SELECT`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/datepicker/jquery.ui.core.js](https://silav.sante.gouv.fr/js/datepicker/jquery.ui.core.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `where`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/datepicker/jquery.ui.core.js](https://silav.sante.gouv.fr/js/datepicker/jquery.ui.core.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `Db`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/DD_roundies.js](https://silav.sante.gouv.fr/js/DD_roundies.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/datepicker/jquery.ui.core.js](https://silav.sante.gouv.fr/js/datepicker/jquery.ui.core.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `user`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/datepicker/jquery.ui.core.js](https://silav.sante.gouv.fr/js/datepicker/jquery.ui.core.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/calendar.js](https://silav.sante.gouv.fr/js/calendar.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/jQuery/1.8/jquery-ui.min.js](https://silav.sante.gouv.fr/js/jQuery/1.8/jquery-ui.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `SELECT`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/datepicker/jquery.ui.core.js](https://silav.sante.gouv.fr/js/datepicker/jquery.ui.core.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/datepicker/jquery.ui.core.js](https://silav.sante.gouv.fr/js/datepicker/jquery.ui.core.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `TODO`
  
  
  
  
Instances: 13
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bSELECT\b and was detected in the element starting with: "		var allowed = {BODY: false, TABLE: false, TR: false, TD: false, SELECT: false, OPTION: false, TEXTAREA: false};", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Loosely Scoped Cookie
##### Informational (Low)
  
  
  
  
#### Description
<p>Cookies can be scoped by domain or path. This check is only concerned with domain scope.The domain scope applied to a cookie determines which domains can access it. For example, a cookie can be scoped strictly to a subdomain e.g. www.nottrusted.com, or loosely scoped to a parent domain e.g. nottrusted.com. In the latter case, any subdomain of nottrusted.com can access the cookie. Loosely scoped cookies are common in mega-applications like google.com and live.com. Cookies set from a subdomain like app.foo.bar are transmitted only to that domain by the browser. However, cookies scoped to a parent-level domain may be transmitted to the parent, or any subdomain of the parent.</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/robots.txt](https://silav.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
### Solution
<p>Always scope cookies to a FQDN (Fully Qualified Domain Name).</p>
  
### Other information
<p>The origin domain used for comparison was: </p><p>silav.sante.gouv.fr</p><p>dtCookie=v_4_srv_9_sn_EE53D2D91DDA00B5C0ECCDCA169867C3_perc_100000_ol_0_mul_1_app-3Aea7c4b59f27d43eb_1</p><p></p>
  
### Reference
* https://tools.ietf.org/html/rfc6265#section-4.1
* https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html
* http://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_cookies

  
#### CWE Id : 565
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" onclick="redirectToAction();" style="text-color:#5c9ccc">
					J'ai oublié mon mot de passe
				</a>`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script id="dtjsagentdw" type="text/javascript" src="'+
Ig+'">`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do?login_error=1](https://silav.sante.gouv.fr/seConnecter.do?login_error=1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" onclick="redirectToAction();" style="text-color:#5c9ccc">
					J'ai oublié mon mot de passe
				</a>`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/jQuery/1.8/jquery-ui.min.js](https://silav.sante.gouv.fr/js/jQuery/1.8/jquery-ui.min.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a></a>`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type="text/javascript" src="/ruxitagentjs_ICA2SVfqru_10211210318124316.js" data-dtconfig="app=ea7c4b59f27d43eb|rcdec=1209600000|featureHash=ICA2SVfqru|vcv=2|rdnt=1|uxrgce=1|srcss=1|bp=3|srmcrv=10|cuc=nswg67k7|mel=100000|dpvc=1|lastModification=1616634505867|dtVersion=10211210318124316|srmcrl=1|tp=500,50,0,1|uxdcw=1500|vs=2|agentUri=/ruxitagentjs_ICA2SVfqru_10211210318124316.js|reportUrl=/rb_0f794a36-04b7-4dc0-945e-58f1e10300bb|rid=RID_2418|rpid=1308188785|domain=sante.gouv.fr"></script>`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1](https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="#" onclick="redirectToAction();" style="text-color:#5c9ccc">
					J'ai oublié mon mot de passe
				</a>`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/datepicker/jquery.ui.core.js](https://silav.sante.gouv.fr/js/datepicker/jquery.ui.core.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a>`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/jQuery/jquery-1.7.js](https://silav.sante.gouv.fr/js/jQuery/jquery-1.7.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( document.getElementById( id ) ) {
		Expr.find.ID = function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);

				return m ?
					m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ?
						[m] :
						undefined :
					[];
			}
		};

		Expr.filter.ID = function( elem, match ) {
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");

			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );

	// release memory in IE
	root = form = null;
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function( match, context ) {
			var results = context.getElementsByTagName( match[1] );

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/js/calendar.js](https://silav.sante.gouv.fr/js/calendar.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class='DynarchCalendar-focusLink' href='#'></a>`
  
  
  
  
Instances: 9
  
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
  
  
  
* URL: [https://silav.sante.gouv.fr/sitemap.xml](https://silav.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/robots.txt](https://silav.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://silav.sante.gouv.fr/css/calendar.css](https://silav.sante.gouv.fr/css/calendar.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/aide.do?page=MentionsLegales](https://silav.sante.gouv.fr/aide.do?page=MentionsLegales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/css/jquery.ui.datepicker.css](https://silav.sante.gouv.fr/css/jquery.ui.datepicker.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/css/silav.css](https://silav.sante.gouv.fr/css/silav.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1](https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/css/jquery-ui.css](https://silav.sante.gouv.fr/css/jquery-ui.css)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js](https://silav.sante.gouv.fr/ruxitagentjs_ICA2SVfqru_10211210318124316.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=31536000`
  
  
  
  
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

  
  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  * Evidence: `1776939167`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1](https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1)
  
  
  * Method: `GET`
  
  
  * Evidence: `211059893`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1308188785`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/sitemap.xml](https://silav.sante.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `1562760395`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/](https://silav.sante.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1209600000`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1](https://silav.sante.gouv.fr/seConnecter.do;jsessionid=19DE0F1F11DEB898BEA233CD5CC03C03.lv-silavc1)
  
  
  * Method: `GET`
  
  
  * Evidence: `1209600000`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/robots.txt](https://silav.sante.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `1114399172`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  * Evidence: `300207106`
  
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do](https://silav.sante.gouv.fr/seConnecter.do)
  
  
  * Method: `GET`
  
  
  * Evidence: `1209600000`
  
  
  
  
Instances: 9
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>1776939167, which evaluates to: 2026-04-23 10:12:47</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://silav.sante.gouv.fr/seConnecter.do?login_error=1](https://silav.sante.gouv.fr/seConnecter.do?login_error=1)
  
  
  * Method: `GET`
  
  
  * Parameter: `login_error`
  
  
  
  
Instances: 1
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://silav.sante.gouv.fr/seConnecter.do?login_error=1</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [meta] tag [content] attribute </p><p></p><p>The user input found was:</p><p>login_error=1</p><p></p><p>The user-controlled value was:</p><p>ie=edge, chrome=1</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
