
# ZAP Scanning Report

Generated on Mon, 29 Mar 2021 13:34:55


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 2 |
| Low | 7 |
| Informational | 5 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 2 | 
| X-Frame-Options Header Not Set | Medium | 2 | 
| Cookie No HttpOnly Flag | Low | 2 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cookie Without Secure Flag | Low | 2 | 
| Dangerous JS Functions | Low | 1 | 
| Feature Policy Header Not Set | Low | 4 | 
| Strict-Transport-Security Header Not Set | Low | 4 | 
| X-Content-Type-Options Header Missing | Low | 4 | 
| Base64 Disclosure | Informational | 5 | 
| Modern Web Application | Informational | 3 | 
| Non-Storable Content | Informational | 4 | 
| Storable and Cacheable Content | Informational | 2 | 
| Timestamp Disclosure - Unix | Informational | 14 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 2
  
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

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 2
  
### Solution
<p>Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive. </p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Cookie No HttpOnly Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-arlv.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-arlv.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
Instances: 2
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=8)
  
  
  * Method: `GET`
  
  
  * Evidence: `eval`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=12)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=8)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
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

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=8)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=12)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=8)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=12)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0o`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20000aaa35ed28755d0724156451ec0d41b22e22d88752042f8f145e2fd3ddbdd7c4086af3c6fb0a28004de28fc9f8d96d6a55094aadbe018a41637da1152f7d51c0aa606d5d60210b70eccdd82597b4d66e200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000d42e56a6f1e3ec79a931784244611cfc8c8df58246041748578976d48cd90f16081487153c0a2800d8c2e4b2bb3f30f584c21c08d5da33301dbaed2fc8c9d54fe92a3f0e4861e3f6d047afdb63bec312200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `QdcLXsbe6KhttJgqJlLL3fNyljz02YJBmWplbMUDwWKa7E3Lt+vthusTkhOvwD0h7zsXsvD/Dqqb6thZLbjEmr9A4tk=`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000e6af46273e5a5e52f98704481dce5d878bc55d6c789c3b62f29ab94d6d8e4a1508284e28c00a2800b1e463e30fc2faa155094aadbe018a419e219cf49835775f42c70c84e38b52b7cfbe448b98e99785200000000200000000`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>����\x0000\x0010JFIF\x0000\x0001\x0001\x0001\x0000\x0001\x0000\x0001\x0000\x0000��\x0000C\x0000\x0010\x000b\x000c\x000e\x000c</p><p>\x0010\x000e
\x000e\x0012\x0011\x0010\x0013\x0018(\x001a\x0018\x0016\x0016\x00181#%\x001d(</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20000aaa35ed28755d0724156451ec0d41b22e22d88752042f8f145e2fd3ddbdd7c4086af3c6fb0a28004de28fc9f8d96d6a55094aadbe018a41637da1152f7d51c0aa606d5d60210b70eccdd82597b4d66e200000000200000000";

window.cmxE=!!window.cmxE;try{(function(){(function(){})();var LJ=77;try{var zJ,sJ,_J=l(348)?1:0,jJ=l(567)?0:1,Jl=l(197)?1:0,ll=l(679)?0:1,Ll=l(892)?0:1;for(var Sl=(l(240),0);Sl<sJ;++Sl)_J+=l(390)?2:1,jJ+=l(723)?1:2,Jl+=l(504)?1:2,ll+=(l(390),2),Ll+=(l(730),3);zJ=_J+jJ+Jl+ll+Ll;window.I_===zJ&&(window.I_=++zJ)}catch(il){window.I_=zJ}var lL=!0;function O(J,L){J+=L;return J.toString(36)}
function LL(J){var L=82;!J||document[Z(L,200,187,197,187,180,187,190,187,198,203,165,198,179,198,183)]&&document[s(L,200,187,197,187,180,187,190,187,198,203,165,198,179,198,183)]!==s(L,200,187,197,187,180,190,183)||(lL=!1);return lL}function s(J){var L=arguments.length,z=[],_=1;while(_<L)z[_-1]=arguments[_++]-J;return String.fromCharCode.apply(String,z)}function oL(){}LL(window[oL[O(1086777,LJ)]]===oL);LL(typeof ie9rgb4!==O(1242178186122,LJ));
LL(RegExp("\x3c")[O(1372128,LJ)](function(){return"\x3c"})&!RegExp(O(42812,LJ))[O(1372128,LJ)](function(){return"'x3'+'d';"}));
var zL=window[s(LJ,174,193,193,174,176,181,146,195,178,187,193)]||RegExp(Z(LJ,186,188,175,182,201,174,187,177,191,188,182,177),Z(LJ,182))[Z(LJ,193,178,192,193)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),ZL=+new Date+(l(83)?6E5:600083),iL,jL,lo,Lo=window[s(LJ,192,178,193,161,182,186,178,188,194,193)],oo=zL?l(965)?18425:3E4:l(645)?8271:6E3;
document[s(LJ,174,177,177,146,195,178,187,193,153,182,192,193,178,187,178,191)]&&document[Z(LJ,174,177,177,146,195,178,187,193,153,182,192,193,178,187,178,191)](s(LJ,195,182,192,182,175,182,185,182,193,198,176,181,174,187,180,178),function(J){var L=19;document[Z(L,137,124,134,124,117,124,127,124,135,140,102,135,116,135,120)]&&(document[Z(L,137,124,134,124,117,124,127,124,135,140,102,135,116,135,120)]===O(1058781964,L)&&J[Z(L,124,134,103,133,136,134,135,120,119)]?lo=!0:document[s(L,137,124,134,124,
117,124,127,124,135,140,102,135,116,135,120)]===O(68616527647,L)&&(iL=+new Date,lo=!1,Oo()))});function Oo(){if(!document[Z(53,166,170,154,167,174,136,154,161,154,152,169,164,167)])return!0;var J=+new Date;if(J>ZL&&(l(390)?6E5:356254)>J-iL)return LL(!1);var L=LL(jL&&!lo&&iL+oo<J);iL=J;jL||(jL=!0,Lo(function(){jL=!1},l(43)?1:0));return L}Oo();var so=[l(686)?16798412:17795081,l(565)?2147483647:27611931586,l(704)?2147483647:1558153217];
function Z(J){var L=arguments.length,z=[];for(var _=1;_<L;++_)z.push(arguments[_]-J);return String.fromCharCode.apply(String,z)}function _o(J){var L=58;J=typeof J===O(1743045618,L)?J:J[s(L,174,169,141,174,172,163,168,161)](l(646)?45:36);var z=window[J];if(!z[Z(L,174,169,141,174,172,163,168,161)])return;var _=""+z;window[J]=function(J,L){jL=!1;return z(J,L)};window[J][Z(L,174,169,141,174,172,163,168,161)]=function(){return _}}for(var jo=(l(713),0);jo<so[O(1294399128,LJ)];++jo)_o(so[jo]);
LL(!1!==window[s(LJ,176,186,197,146)]);window.ii={JI:"08796598e801780030c2c51553657fb8d87a40b6b365fd51f683f68224d86207897f22c87a71158787f5ffdc064bf6b4170d3d4df29fe215fc5cdaffb10a5327f372ddae669cd908ec5eb7344ed337d636696d86e88bba9b3a22a743a38f9deea7cffaee1b8d3acc36b263799ed1eed37528d500218bb1ffecf3d030ddacd130"};function JO(J){var L=+new Date,z;!document[s(99,212,216,200,213,220,182,200,207,200,198,215,210,213,164,207,207)]||L>ZL&&(l(562)?698497:6E5)>L-iL?z=LL(!1):(z=LL(jL&&!lo&&iL+oo<L),iL=L,jL||(jL=!0,Lo(function(){jL=!1},l(284)?1:0)));return!(arguments[J]^z)}function l(J){return 443>J}
(function(){var J=/(\A([0-9a-f]{1,4}:){1,6}(:[0-9a-f]{1,4}){1,1}\Z)|(\A(([0-9a-f]{1,4}:){1,7}|:):\Z)|(\A:(:[0-9a-f]{1,4}){1,7}\Z)/ig,L=document.getElementsByTagName("head")[0],z=[];L&&(L=L.innerHTML.slice(0,1E3));while(L=J.exec(""))z.push(L)})();})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000e6af46273e5a5e52f98704481dce5d878bc55d6c789c3b62f29ab94d6d8e4a1508284e28c00a2800b1e463e30fc2faa155094aadbe018a419e219cf49835775f42c70c84e38b52b7cfbe448b98e99785200000000200000000";

window.cmxE=!!window.cmxE;try{(function(){(function(){})();var LJ=77;try{var zJ,sJ,_J=l(348)?1:0,jJ=l(567)?0:1,Jl=l(197)?1:0,ll=l(679)?0:1,Ll=l(892)?0:1;for(var Sl=(l(240),0);Sl<sJ;++Sl)_J+=l(390)?2:1,jJ+=l(723)?1:2,Jl+=l(504)?1:2,ll+=(l(390),2),Ll+=(l(730),3);zJ=_J+jJ+Jl+ll+Ll;window.I_===zJ&&(window.I_=++zJ)}catch(il){window.I_=zJ}var lL=!0;function O(J,L){J+=L;return J.toString(36)}
function LL(J){var L=82;!J||document[Z(L,200,187,197,187,180,187,190,187,198,203,165,198,179,198,183)]&&document[s(L,200,187,197,187,180,187,190,187,198,203,165,198,179,198,183)]!==s(L,200,187,197,187,180,190,183)||(lL=!1);return lL}function s(J){var L=arguments.length,z=[],_=1;while(_<L)z[_-1]=arguments[_++]-J;return String.fromCharCode.apply(String,z)}function oL(){}LL(window[oL[O(1086777,LJ)]]===oL);LL(typeof ie9rgb4!==O(1242178186122,LJ));
LL(RegExp("\x3c")[O(1372128,LJ)](function(){return"\x3c"})&!RegExp(O(42812,LJ))[O(1372128,LJ)](function(){return"'x3'+'d';"}));
var zL=window[s(LJ,174,193,193,174,176,181,146,195,178,187,193)]||RegExp(Z(LJ,186,188,175,182,201,174,187,177,191,188,182,177),Z(LJ,182))[Z(LJ,193,178,192,193)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),ZL=+new Date+(l(83)?6E5:600083),iL,jL,lo,Lo=window[s(LJ,192,178,193,161,182,186,178,188,194,193)],oo=zL?l(965)?18425:3E4:l(645)?8271:6E3;
document[s(LJ,174,177,177,146,195,178,187,193,153,182,192,193,178,187,178,191)]&&document[Z(LJ,174,177,177,146,195,178,187,193,153,182,192,193,178,187,178,191)](s(LJ,195,182,192,182,175,182,185,182,193,198,176,181,174,187,180,178),function(J){var L=19;document[Z(L,137,124,134,124,117,124,127,124,135,140,102,135,116,135,120)]&&(document[Z(L,137,124,134,124,117,124,127,124,135,140,102,135,116,135,120)]===O(1058781964,L)&&J[Z(L,124,134,103,133,136,134,135,120,119)]?lo=!0:document[s(L,137,124,134,124,
117,124,127,124,135,140,102,135,116,135,120)]===O(68616527647,L)&&(iL=+new Date,lo=!1,Oo()))});function Oo(){if(!document[Z(53,166,170,154,167,174,136,154,161,154,152,169,164,167)])return!0;var J=+new Date;if(J>ZL&&(l(390)?6E5:356254)>J-iL)return LL(!1);var L=LL(jL&&!lo&&iL+oo<J);iL=J;jL||(jL=!0,Lo(function(){jL=!1},l(43)?1:0));return L}Oo();var so=[l(686)?16798412:17795081,l(565)?2147483647:27611931586,l(704)?2147483647:1558153217];
function Z(J){var L=arguments.length,z=[];for(var _=1;_<L;++_)z.push(arguments[_]-J);return String.fromCharCode.apply(String,z)}function _o(J){var L=58;J=typeof J===O(1743045618,L)?J:J[s(L,174,169,141,174,172,163,168,161)](l(646)?45:36);var z=window[J];if(!z[Z(L,174,169,141,174,172,163,168,161)])return;var _=""+z;window[J]=function(J,L){jL=!1;return z(J,L)};window[J][Z(L,174,169,141,174,172,163,168,161)]=function(){return _}}for(var jo=(l(713),0);jo<so[O(1294399128,LJ)];++jo)_o(so[jo]);
LL(!1!==window[s(LJ,176,186,197,146)]);window.ii={JI:"084045900f017800032fff3ef615a209d87a40b6b365fd5109a81db1b266b8e31c9323311e69d01b0d6f8c1dbbeeab04ccece81bc1f930d3d005d7a3a80a167ed2457d1e965bc9907f2aa9b4b4600f2db9abf6677cee65010cabcdc4b29eb512bf1e5d25888fccb7c9af5745ba5a34aea7176116d2a9e697e40a86beed176426"};function JO(J){var L=+new Date,z;!document[s(99,212,216,200,213,220,182,200,207,200,198,215,210,213,164,207,207)]||L>ZL&&(l(562)?698497:6E5)>L-iL?z=LL(!1):(z=LL(jL&&!lo&&iL+oo<L),iL=L,jL||(jL=!0,Lo(function(){jL=!1},l(284)?1:0)));return!(arguments[J]^z)}function l(J){return 443>J}
(function(){var J=/(\A([0-9a-f]{1,4}:){1,6}(:[0-9a-f]{1,4}){1,1}\Z)|(\A(([0-9a-f]{1,4}:){1,7}|:):\Z)|(\A:(:[0-9a-f]{1,4}){1,7}\Z)/ig,L=document.getElementsByTagName("head")[0],z=[];L&&(L=L.innerHTML.slice(0,1E3));while(L=J.exec(""))z.push(L)})();})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000d42e56a6f1e3ec79a931784244611cfc8c8df58246041748578976d48cd90f16081487153c0a2800d8c2e4b2bb3f30f584c21c08d5da33301dbaed2fc8c9d54fe92a3f0e4861e3f6d047afdb63bec312200000000200000000";

window.cmxE=!!window.cmxE;try{(function(){(function(){})();var LJ=77;try{var zJ,sJ,_J=l(348)?1:0,jJ=l(567)?0:1,Jl=l(197)?1:0,ll=l(679)?0:1,Ll=l(892)?0:1;for(var Sl=(l(240),0);Sl<sJ;++Sl)_J+=l(390)?2:1,jJ+=l(723)?1:2,Jl+=l(504)?1:2,ll+=(l(390),2),Ll+=(l(730),3);zJ=_J+jJ+Jl+ll+Ll;window.I_===zJ&&(window.I_=++zJ)}catch(il){window.I_=zJ}var lL=!0;function O(J,L){J+=L;return J.toString(36)}
function LL(J){var L=82;!J||document[Z(L,200,187,197,187,180,187,190,187,198,203,165,198,179,198,183)]&&document[s(L,200,187,197,187,180,187,190,187,198,203,165,198,179,198,183)]!==s(L,200,187,197,187,180,190,183)||(lL=!1);return lL}function s(J){var L=arguments.length,z=[],_=1;while(_<L)z[_-1]=arguments[_++]-J;return String.fromCharCode.apply(String,z)}function oL(){}LL(window[oL[O(1086777,LJ)]]===oL);LL(typeof ie9rgb4!==O(1242178186122,LJ));
LL(RegExp("\x3c")[O(1372128,LJ)](function(){return"\x3c"})&!RegExp(O(42812,LJ))[O(1372128,LJ)](function(){return"'x3'+'d';"}));
var zL=window[s(LJ,174,193,193,174,176,181,146,195,178,187,193)]||RegExp(Z(LJ,186,188,175,182,201,174,187,177,191,188,182,177),Z(LJ,182))[Z(LJ,193,178,192,193)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),ZL=+new Date+(l(83)?6E5:600083),iL,jL,lo,Lo=window[s(LJ,192,178,193,161,182,186,178,188,194,193)],oo=zL?l(965)?18425:3E4:l(645)?8271:6E3;
document[s(LJ,174,177,177,146,195,178,187,193,153,182,192,193,178,187,178,191)]&&document[Z(LJ,174,177,177,146,195,178,187,193,153,182,192,193,178,187,178,191)](s(LJ,195,182,192,182,175,182,185,182,193,198,176,181,174,187,180,178),function(J){var L=19;document[Z(L,137,124,134,124,117,124,127,124,135,140,102,135,116,135,120)]&&(document[Z(L,137,124,134,124,117,124,127,124,135,140,102,135,116,135,120)]===O(1058781964,L)&&J[Z(L,124,134,103,133,136,134,135,120,119)]?lo=!0:document[s(L,137,124,134,124,
117,124,127,124,135,140,102,135,116,135,120)]===O(68616527647,L)&&(iL=+new Date,lo=!1,Oo()))});function Oo(){if(!document[Z(53,166,170,154,167,174,136,154,161,154,152,169,164,167)])return!0;var J=+new Date;if(J>ZL&&(l(390)?6E5:356254)>J-iL)return LL(!1);var L=LL(jL&&!lo&&iL+oo<J);iL=J;jL||(jL=!0,Lo(function(){jL=!1},l(43)?1:0));return L}Oo();var so=[l(686)?16798412:17795081,l(565)?2147483647:27611931586,l(704)?2147483647:1558153217];
function Z(J){var L=arguments.length,z=[];for(var _=1;_<L;++_)z.push(arguments[_]-J);return String.fromCharCode.apply(String,z)}function _o(J){var L=58;J=typeof J===O(1743045618,L)?J:J[s(L,174,169,141,174,172,163,168,161)](l(646)?45:36);var z=window[J];if(!z[Z(L,174,169,141,174,172,163,168,161)])return;var _=""+z;window[J]=function(J,L){jL=!1;return z(J,L)};window[J][Z(L,174,169,141,174,172,163,168,161)]=function(){return _}}for(var jo=(l(713),0);jo<so[O(1294399128,LJ)];++jo)_o(so[jo]);
LL(!1!==window[s(LJ,176,186,197,146)]);window.ii={JI:"08b4f92fc70178002c3a24f585f36b02d87a40b6b365fd51e435664078152edae887d042e08f085027d1495c6a12d87e55866b4abbbc49fd957c7cfb0cc37e4dae61d9e36b4627ba95e2c4cfd4d6d85700d5fb6eb5e6396bd55a18c9546fbb55e8590c8743d3191f1fe929780a7b81aaa114b1002e8646fd0e181610af4e813c"};function JO(J){var L=+new Date,z;!document[s(99,212,216,200,213,220,182,200,207,200,198,215,210,213,164,207,207)]||L>ZL&&(l(562)?698497:6E5)>L-iL?z=LL(!1):(z=LL(jL&&!lo&&iL+oo<L),iL=L,jL||(jL=!0,Lo(function(){jL=!1},l(284)?1:0)));return!(arguments[J]^z)}function l(J){return 443>J}
(function(){var J=/(\A([0-9a-f]{1,4}:){1,6}(:[0-9a-f]{1,4}){1,1}\Z)|(\A(([0-9a-f]{1,4}:){1,7}|:):\Z)|(\A:(:[0-9a-f]{1,4}){1,7}\Z)/ig,L=document.getElementsByTagName("head")[0],z=[];L&&(L=L.innerHTML.slice(0,1E3));while(L=J.exec(""))z.push(L)})();})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
Instances: 3
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>No links have been found while there are scripts, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `no-store`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/sitemap.xml](https://stop-violences-femmes.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=8)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=86400`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab20005f27deebfee083070dd17ac855696586f482478aae50a208d22dcad19bd8ee52?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=86400`
  
  
  
  
Instances: 2
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. </p>
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1743045618`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1294399128`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `16798412`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `16798412`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1743045618`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1058781964`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1058781964`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1294399128`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
Instances: 14
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>2147483647, which evaluates to: 2038-01-19 03:14:07</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
