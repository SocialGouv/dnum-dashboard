
# ZAP Scanning Report

Generated on Sat, 3 Apr 2021 17:37:30


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 2 |
| Low | 6 |
| Informational | 5 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 2 | 
| X-Frame-Options Header Not Set | Medium | 2 | 
| Cookie No HttpOnly Flag | Low | 2 | 
| Cookie Without SameSite Attribute | Low | 3 | 
| Cookie Without Secure Flag | Low | 2 | 
| Feature Policy Header Not Set | Low | 3 | 
| Strict-Transport-Security Header Not Set | Low | 3 | 
| X-Content-Type-Options Header Missing | Low | 4 | 
| Base64 Disclosure | Informational | 5 | 
| Modern Web Application | Informational | 3 | 
| Non-Storable Content | Informational | 4 | 
| Storable and Cacheable Content | Informational | 1 | 
| Timestamp Disclosure - Unix | Informational | 10 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
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
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `TS01cf5a77`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77`
  
  
  
  
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
  
  
  * Parameter: `TS01cf5a77_28`
  
  
  * Evidence: `Set-Cookie: TS01cf5a77_28`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dicom-arlv.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dicom-arlv.cegedim.cloud-HTTP`
  
  
  
  
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

  
  
  
  
### Feature Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000c3bcd7a5bda5f5926d412d6dbd20db91aad539f3b80f5484db7827086572c535?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000c3bcd7a5bda5f5926d412d6dbd20db91aad539f3b80f5484db7827086572c535?type=12)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
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
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000c3bcd7a5bda5f5926d412d6dbd20db91aad539f3b80f5484db7827086572c535?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000c3bcd7a5bda5f5926d412d6dbd20db91aad539f3b80f5484db7827086572c535?type=12)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000c3bcd7a5bda5f5926d412d6dbd20db91aad539f3b80f5484db7827086572c535?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000c3bcd7a5bda5f5926d412d6dbd20db91aad539f3b80f5484db7827086572c535?type=8)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000c3bcd7a5bda5f5926d412d6dbd20db91aad539f3b80f5484db7827086572c535?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000c3bcd7a5bda5f5926d412d6dbd20db91aad539f3b80f5484db7827086572c535?type=12)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `RVmT8439XYpOB/0qJlLL3fNyljz02eTkJISRWgzDOcz1HfEg3OlDM9LdWZW7jLMLnwahKATiCRTzyClxcnKWxkn8+J8=`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000b120521fc68bc3bfe858ea7a7725e4214dd67356204fe3c6ba4802c91e5adc5d08e4b51c5a0a28004d581f5232abbbd4bc1782f1379299fcdbac9848fbe757708b89cd239cdb9beafad29802dd4ac1a0200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000c3bcd7a5bda5f5926d412d6dbd20db91aad539f3b80f5484db7827086572c535?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000c3bcd7a5bda5f5926d412d6dbd20db91aad539f3b80f5484db7827086572c535?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0o`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000f9b86404c3833a893a6a09f602667c87b4cbfca50290520fe1dd117ba462aabd08384584b40a28006388cd5024146ea6716de4286db497f1829183aa416b73e0b59188cf83dd7d2ad5039a46d348e522200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20003294c5fce18b77862a57efd71126f1b62713359adc65616bc5135c0f8c3f608a083be26a260a2800443271a0f5bd4df2483bfd02b5cd8e6843592ded1e8cc7a335bd80171117872b5d86e2f6e0be79ad200000000200000000`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>EY���]�N\x0007�*&R���r�<����$��Z\x000c�9��\x001d� ��C3��Y����\x000b�\x0006�(\x0004�	\x0014��)qrr��I���</p>
  
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
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab20003294c5fce18b77862a57efd71126f1b62713359adc65616bc5135c0f8c3f608a083be26a260a2800443271a0f5bd4df2483bfd02b5cd8e6843592ded1e8cc7a335bd80171117872b5d86e2f6e0be79ad200000000200000000";

window.iiVe=!!window.iiVe;try{(function(){(function(){var I={decrypt:function(I){try{return JSON.parse(function(I){I=I.split("l");var l="";for(var O=0;O<I.length;++O)l+=String.fromCharCode(I[O]);return l}(I))}catch(O){}}};return I={configuration:I.decrypt("123l34l97l99l116l105l118l101l34l58l34l110l111l34l44l34l100l101l98l117l103l103l105l110l103l34l58l34l110l111l34l44l34l109l111l100l117l108l101l49l34l58l34l101l110l97l98l108l101l100l34l44l34l109l111l100l117l108l101l50l34l58l34l101l110l97l98l108l101l100l34l44l34l109l111l100l117l108l101l51l34l58l34l101l110l97l98l108l101l100l34l44l34l109l111l100l117l108l101l52l34l58l34l101l110l97l98l108l101l100l34l125")}})();
var JI=10;try{var oI,ZI,sI=J(178)?1:0,_I=J(52)?1:0,Ij=J(637)?0:1,jj=J(951)?0:1,lj=J(894)?0:1,Zj=J(931)?0:1,_j=J(502)?0:1,JJ=J(420)?0:1;for(var lJ=(J(549),0);lJ<ZI;++lJ)sI+=J(105)?2:1,_I+=(J(262),2),Ij+=(J(797),2),jj+=(J(572),2),lj+=J(132)?2:1,Zj+=J(976)?1:2,_j+=J(390)?1:2,JJ+=J(152)?3:2;oI=sI+_I+Ij+jj+lj+Zj+_j+JJ;window.jJ===oI&&(window.jJ=++oI)}catch(oJ){window.jJ=oI}var OJ=!0;function L(I,l){I+=l;return I.toString(36)}
function zJ(I){var l=24;!I||document[z(l,142,129,139,129,122,129,132,129,140,145,107,140,121,140,125)]&&document[z(l,142,129,139,129,122,129,132,129,140,145,107,140,121,140,125)]!==L(68616527642,l)||(OJ=!1);return OJ}function z(I){var l=arguments.length,O=[];for(var S=1;S<l;++S)O.push(arguments[S]-I);return String.fromCharCode.apply(String,O)}function Z(I){var l=arguments.length,O=[],S=1;while(S<l)O[S-1]=arguments[S++]-I;return String.fromCharCode.apply(String,O)}function _J(){}
zJ(window[_J[Z(JI,120,107,119,111)]]===_J);zJ(typeof ie9rgb4!==L(1242178186189,JI));zJ(RegExp("\x3c")[z(JI,126,111,125,126)](function(){return"\x3c"})&!RegExp(L(42879,JI))[L(1372195,JI)](function(){return"'x3'+'d';"}));
var Il=window[Z(JI,107,126,126,107,109,114,79,128,111,120,126)]||RegExp(Z(JI,119,121,108,115,134,107,120,110,124,121,115,110),L(8,JI))[L(1372195,JI)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),Jl=+new Date+(J(790)?693738:6E5),ll,Ll,ol,sl=window[Z(JI,125,111,126,94,115,119,111,121,127,126)],Sl=Il?J(414)?44417:3E4:J(344)?6E3:4392;
document[Z(JI,107,110,110,79,128,111,120,126,86,115,125,126,111,120,111,124)]&&document[z(JI,107,110,110,79,128,111,120,126,86,115,125,126,111,120,111,124)](z(JI,128,115,125,115,108,115,118,115,126,131,109,114,107,120,113,111),function(I){var l=71;document[z(l,189,176,186,176,169,176,179,176,187,192,154,187,168,187,172)]&&(document[Z(l,189,176,186,176,169,176,179,176,187,192,154,187,168,187,172)]===Z(l,175,176,171,171,172,181)&&I[z(l,176,186,155,185,188,186,187,172,171)]?ol=!0:document[z(l,189,176,
186,176,169,176,179,176,187,192,154,187,168,187,172)]===L(68616527595,l)&&(ll=+new Date,ol=!1,IL()))});function IL(){if(!document[z(39,152,156,140,153,160,122,140,147,140,138,155,150,153)])return!0;var I=+new Date;if(I>Jl&&(J(339)?6E5:539962)>I-ll)return zJ(!1);var l=zJ(Ll&&!ol&&ll+Sl<I);ll=I;Ll||(Ll=!0,sl(function(){Ll=!1},J(260)?1:0));return l}IL();var jL=[J(716)?15644932:17795081,J(850)?2147483647:27611931586,J(34)?1558153217:817345780];
function oL(I){var l=49;I=typeof I===z(l,164,165,163,154,159,152)?I:I[Z(l,165,160,132,165,163,154,159,152)](J(962)?26:36);var O=window[I];if(!O[z(l,165,160,132,165,163,154,159,152)])return;var S=""+O;window[I]=function(I,l){Ll=!1;return O(I,l)};window[I][Z(l,165,160,132,165,163,154,159,152)]=function(){return S}}for(var OL=(J(400),0);OL<jL[Z(JI,118,111,120,113,126,114)];++OL)oL(jL[OL]);zJ(!1!==window[z(JI,115,115,96,111)]);window._l={JL:"086b7f9bd6017800bae3790d8b5a8fbfd5ca739f48dc1f40ee976bc813a9f097b29983e2338edd1010941e88e54ef3c3e85952eeef6e787cbcf3995589f8fda5a74cfdc479d3e9ca3c68f6f28487573be78b0994fb513fac80d5155ab8e27764516fc97320185014d3825d946486f6868098dd71239d147bbeb52b7c852e7d29"};
function zL(I){var l=+new Date,O;!document[Z(33,146,150,134,147,154,116,134,141,134,132,149,144,147,98,141,141)]||l>Jl&&(J(968)?550528:6E5)>l-ll?O=zJ(!1):(O=zJ(Ll&&!ol&&ll+Sl<l),ll=l,Ll||(Ll=!0,sl(function(){Ll=!1},J(112)?1:0)));return!(arguments[I]^O)}function J(I){return 386>I}(function ZL(l){l&&"number"!==typeof l||("number"!==typeof l&&(l=1E3),l=Math.max(l,1),setInterval(function(){ZL(l-10)},l))})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000f9b86404c3833a893a6a09f602667c87b4cbfca50290520fe1dd117ba462aabd08384584b40a28006388cd5024146ea6716de4286db497f1829183aa416b73e0b59188cf83dd7d2ad5039a46d348e522200000000200000000";

window.iiVe=!!window.iiVe;try{(function(){(function(){var I={decrypt:function(I){try{return JSON.parse(function(I){I=I.split("l");var l="";for(var O=0;O<I.length;++O)l+=String.fromCharCode(I[O]);return l}(I))}catch(O){}}};return I={configuration:I.decrypt("123l34l97l99l116l105l118l101l34l58l34l110l111l34l44l34l100l101l98l117l103l103l105l110l103l34l58l34l110l111l34l44l34l109l111l100l117l108l101l49l34l58l34l101l110l97l98l108l101l100l34l44l34l109l111l100l117l108l101l50l34l58l34l101l110l97l98l108l101l100l34l44l34l109l111l100l117l108l101l51l34l58l34l101l110l97l98l108l101l100l34l44l34l109l111l100l117l108l101l52l34l58l34l101l110l97l98l108l101l100l34l125")}})();
var JI=10;try{var oI,ZI,sI=J(178)?1:0,_I=J(52)?1:0,Ij=J(637)?0:1,jj=J(951)?0:1,lj=J(894)?0:1,Zj=J(931)?0:1,_j=J(502)?0:1,JJ=J(420)?0:1;for(var lJ=(J(549),0);lJ<ZI;++lJ)sI+=J(105)?2:1,_I+=(J(262),2),Ij+=(J(797),2),jj+=(J(572),2),lj+=J(132)?2:1,Zj+=J(976)?1:2,_j+=J(390)?1:2,JJ+=J(152)?3:2;oI=sI+_I+Ij+jj+lj+Zj+_j+JJ;window.jJ===oI&&(window.jJ=++oI)}catch(oJ){window.jJ=oI}var OJ=!0;function L(I,l){I+=l;return I.toString(36)}
function zJ(I){var l=24;!I||document[z(l,142,129,139,129,122,129,132,129,140,145,107,140,121,140,125)]&&document[z(l,142,129,139,129,122,129,132,129,140,145,107,140,121,140,125)]!==L(68616527642,l)||(OJ=!1);return OJ}function z(I){var l=arguments.length,O=[];for(var S=1;S<l;++S)O.push(arguments[S]-I);return String.fromCharCode.apply(String,O)}function Z(I){var l=arguments.length,O=[],S=1;while(S<l)O[S-1]=arguments[S++]-I;return String.fromCharCode.apply(String,O)}function _J(){}
zJ(window[_J[Z(JI,120,107,119,111)]]===_J);zJ(typeof ie9rgb4!==L(1242178186189,JI));zJ(RegExp("\x3c")[z(JI,126,111,125,126)](function(){return"\x3c"})&!RegExp(L(42879,JI))[L(1372195,JI)](function(){return"'x3'+'d';"}));
var Il=window[Z(JI,107,126,126,107,109,114,79,128,111,120,126)]||RegExp(Z(JI,119,121,108,115,134,107,120,110,124,121,115,110),L(8,JI))[L(1372195,JI)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),Jl=+new Date+(J(790)?693738:6E5),ll,Ll,ol,sl=window[Z(JI,125,111,126,94,115,119,111,121,127,126)],Sl=Il?J(414)?44417:3E4:J(344)?6E3:4392;
document[Z(JI,107,110,110,79,128,111,120,126,86,115,125,126,111,120,111,124)]&&document[z(JI,107,110,110,79,128,111,120,126,86,115,125,126,111,120,111,124)](z(JI,128,115,125,115,108,115,118,115,126,131,109,114,107,120,113,111),function(I){var l=71;document[z(l,189,176,186,176,169,176,179,176,187,192,154,187,168,187,172)]&&(document[Z(l,189,176,186,176,169,176,179,176,187,192,154,187,168,187,172)]===Z(l,175,176,171,171,172,181)&&I[z(l,176,186,155,185,188,186,187,172,171)]?ol=!0:document[z(l,189,176,
186,176,169,176,179,176,187,192,154,187,168,187,172)]===L(68616527595,l)&&(ll=+new Date,ol=!1,IL()))});function IL(){if(!document[z(39,152,156,140,153,160,122,140,147,140,138,155,150,153)])return!0;var I=+new Date;if(I>Jl&&(J(339)?6E5:539962)>I-ll)return zJ(!1);var l=zJ(Ll&&!ol&&ll+Sl<I);ll=I;Ll||(Ll=!0,sl(function(){Ll=!1},J(260)?1:0));return l}IL();var jL=[J(716)?15644932:17795081,J(850)?2147483647:27611931586,J(34)?1558153217:817345780];
function oL(I){var l=49;I=typeof I===z(l,164,165,163,154,159,152)?I:I[Z(l,165,160,132,165,163,154,159,152)](J(962)?26:36);var O=window[I];if(!O[z(l,165,160,132,165,163,154,159,152)])return;var S=""+O;window[I]=function(I,l){Ll=!1;return O(I,l)};window[I][Z(l,165,160,132,165,163,154,159,152)]=function(){return S}}for(var OL=(J(400),0);OL<jL[Z(JI,118,111,120,113,126,114)];++OL)oL(jL[OL]);zJ(!1!==window[z(JI,115,115,96,111)]);window._l={JL:"08be6d37170178002b4204c6f342bfcdd5ca739f48dc1f407578c27c9f0dfc9e37ebc06330a16a13b4f38ed6bed386c070d09f98588a49cc28c6503e2a9eef6d4c33b8958baa21a7473fc9df4ee8d8c532eb02a55ab7f10cbb5dd36f7792081dfd6f3a4c22ebb7e20ef13cfacf644bde3b90949c25237ceecd55216c7818dd2a"};
function zL(I){var l=+new Date,O;!document[Z(33,146,150,134,147,154,116,134,141,134,132,149,144,147,98,141,141)]||l>Jl&&(J(968)?550528:6E5)>l-ll?O=zJ(!1):(O=zJ(Ll&&!ol&&ll+Sl<l),ll=l,Ll||(Ll=!0,sl(function(){Ll=!1},J(112)?1:0)));return!(arguments[I]^O)}function J(I){return 386>I}(function ZL(l){l&&"number"!==typeof l||("number"!==typeof l&&(l=1E3),l=Math.max(l,1),setInterval(function(){ZL(l-10)},l))})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000b120521fc68bc3bfe858ea7a7725e4214dd67356204fe3c6ba4802c91e5adc5d08e4b51c5a0a28004d581f5232abbbd4bc1782f1379299fcdbac9848fbe757708b89cd239cdb9beafad29802dd4ac1a0200000000200000000";

window.iiVe=!!window.iiVe;try{(function(){(function(){var I={decrypt:function(I){try{return JSON.parse(function(I){I=I.split("l");var l="";for(var O=0;O<I.length;++O)l+=String.fromCharCode(I[O]);return l}(I))}catch(O){}}};return I={configuration:I.decrypt("123l34l97l99l116l105l118l101l34l58l34l110l111l34l44l34l100l101l98l117l103l103l105l110l103l34l58l34l110l111l34l44l34l109l111l100l117l108l101l49l34l58l34l101l110l97l98l108l101l100l34l44l34l109l111l100l117l108l101l50l34l58l34l101l110l97l98l108l101l100l34l44l34l109l111l100l117l108l101l51l34l58l34l101l110l97l98l108l101l100l34l44l34l109l111l100l117l108l101l52l34l58l34l101l110l97l98l108l101l100l34l125")}})();
var JI=10;try{var oI,ZI,sI=J(178)?1:0,_I=J(52)?1:0,Ij=J(637)?0:1,jj=J(951)?0:1,lj=J(894)?0:1,Zj=J(931)?0:1,_j=J(502)?0:1,JJ=J(420)?0:1;for(var lJ=(J(549),0);lJ<ZI;++lJ)sI+=J(105)?2:1,_I+=(J(262),2),Ij+=(J(797),2),jj+=(J(572),2),lj+=J(132)?2:1,Zj+=J(976)?1:2,_j+=J(390)?1:2,JJ+=J(152)?3:2;oI=sI+_I+Ij+jj+lj+Zj+_j+JJ;window.jJ===oI&&(window.jJ=++oI)}catch(oJ){window.jJ=oI}var OJ=!0;function L(I,l){I+=l;return I.toString(36)}
function zJ(I){var l=24;!I||document[z(l,142,129,139,129,122,129,132,129,140,145,107,140,121,140,125)]&&document[z(l,142,129,139,129,122,129,132,129,140,145,107,140,121,140,125)]!==L(68616527642,l)||(OJ=!1);return OJ}function z(I){var l=arguments.length,O=[];for(var S=1;S<l;++S)O.push(arguments[S]-I);return String.fromCharCode.apply(String,O)}function Z(I){var l=arguments.length,O=[],S=1;while(S<l)O[S-1]=arguments[S++]-I;return String.fromCharCode.apply(String,O)}function _J(){}
zJ(window[_J[Z(JI,120,107,119,111)]]===_J);zJ(typeof ie9rgb4!==L(1242178186189,JI));zJ(RegExp("\x3c")[z(JI,126,111,125,126)](function(){return"\x3c"})&!RegExp(L(42879,JI))[L(1372195,JI)](function(){return"'x3'+'d';"}));
var Il=window[Z(JI,107,126,126,107,109,114,79,128,111,120,126)]||RegExp(Z(JI,119,121,108,115,134,107,120,110,124,121,115,110),L(8,JI))[L(1372195,JI)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),Jl=+new Date+(J(790)?693738:6E5),ll,Ll,ol,sl=window[Z(JI,125,111,126,94,115,119,111,121,127,126)],Sl=Il?J(414)?44417:3E4:J(344)?6E3:4392;
document[Z(JI,107,110,110,79,128,111,120,126,86,115,125,126,111,120,111,124)]&&document[z(JI,107,110,110,79,128,111,120,126,86,115,125,126,111,120,111,124)](z(JI,128,115,125,115,108,115,118,115,126,131,109,114,107,120,113,111),function(I){var l=71;document[z(l,189,176,186,176,169,176,179,176,187,192,154,187,168,187,172)]&&(document[Z(l,189,176,186,176,169,176,179,176,187,192,154,187,168,187,172)]===Z(l,175,176,171,171,172,181)&&I[z(l,176,186,155,185,188,186,187,172,171)]?ol=!0:document[z(l,189,176,
186,176,169,176,179,176,187,192,154,187,168,187,172)]===L(68616527595,l)&&(ll=+new Date,ol=!1,IL()))});function IL(){if(!document[z(39,152,156,140,153,160,122,140,147,140,138,155,150,153)])return!0;var I=+new Date;if(I>Jl&&(J(339)?6E5:539962)>I-ll)return zJ(!1);var l=zJ(Ll&&!ol&&ll+Sl<I);ll=I;Ll||(Ll=!0,sl(function(){Ll=!1},J(260)?1:0));return l}IL();var jL=[J(716)?15644932:17795081,J(850)?2147483647:27611931586,J(34)?1558153217:817345780];
function oL(I){var l=49;I=typeof I===z(l,164,165,163,154,159,152)?I:I[Z(l,165,160,132,165,163,154,159,152)](J(962)?26:36);var O=window[I];if(!O[z(l,165,160,132,165,163,154,159,152)])return;var S=""+O;window[I]=function(I,l){Ll=!1;return O(I,l)};window[I][Z(l,165,160,132,165,163,154,159,152)]=function(){return S}}for(var OL=(J(400),0);OL<jL[Z(JI,118,111,120,113,126,114)];++OL)oL(jL[OL]);zJ(!1!==window[z(JI,115,115,96,111)]);window._l={JL:"0863934e650178005e3a6d1d94b75c86d5ca739f48dc1f4025e75bd8afa97e08344eb9ec99d11f66771ec80b1561e378c075217a4eb663085539e7f3cf2e08ab02f3578a8df882255dd882d0a493fbb71e4aa69ab2cb0a0aec7fad2ce758761afae7ee1a701b3d822bb5644c1012e2a52804da6fb889ac49992a63cc0432f730"};
function zL(I){var l=+new Date,O;!document[Z(33,146,150,134,147,154,116,134,141,134,132,149,144,147,98,141,141)]||l>Jl&&(J(968)?550528:6E5)>l-ll?O=zJ(!1):(O=zJ(Ll&&!ol&&ll+Sl<l),ll=l,Ll||(Ll=!0,sl(function(){Ll=!1},J(112)?1:0)));return!(arguments[I]^O)}function J(I){return 386>I}(function ZL(l){l&&"number"!==typeof l||("number"!==typeof l&&(l=1E3),l=Math.max(l,1),setInterval(function(){ZL(l-10)},l))})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000c3bcd7a5bda5f5926d412d6dbd20db91aad539f3b80f5484db7827086572c535?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000c3bcd7a5bda5f5926d412d6dbd20db91aad539f3b80f5484db7827086572c535?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=86400`
  
  
  
  
Instances: 1
  
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
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `15644932`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `817345780`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `15644932`
  
  
  
  
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
  
  
  * Evidence: `817345780`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
Instances: 10
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>2147483647, which evaluates to: 2038-01-19 03:14:07</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
