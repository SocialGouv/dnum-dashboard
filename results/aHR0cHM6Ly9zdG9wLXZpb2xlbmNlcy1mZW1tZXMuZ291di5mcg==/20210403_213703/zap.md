
# ZAP Scanning Report

Generated on Sat, 3 Apr 2021 21:31:04


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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=8)
  
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=12)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=8)
  
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=12)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=8)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=8)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=12)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000b04e7bbd1ab3f5e5f35679ebe705c10cecff5b53bbc5b070453ae59c81bbde9508d58904b10a280084c45b1dfc7f0cff0fa842b995d25fc638ea5c66e25d443548bfc0a9697c69cf3e26b17e983f9e77200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/robots.txt](https://stop-violences-femmes.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `YaBFHPo3VWwPf+gqJlLL3fNyljz02UGPojkKVmr1Yl7NnPvGc+a5qsSr7WZ0yLeQSElNJ+XTIYuRQvjy7st6EDrngfc=`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000511de8597a24544ddb1e8a891022ae3d4dd846214a7449255692070619cebede0825c394c00a2800d77f8a754016572b0fa842b995d25fc67d5ce76c8cc79b8df7d91e52546f43d3bb15e696c4f3feac200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000d81ce9fe481b2d7d4c214aa06edaf4fbf97d1d2fe63c346b0680a1d474f748a708cd92d14f0a28005ab79f6f01b27eec1f0e88560360440a2c05afda56070e4cf967991bb041959ea745cb69bea10209200000000200000000`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0o`
  
  
  
  
Instances: 5
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�]u�Mu�Mt�M��M4�M��M4�M9�M4�M4�mw���s���M4�޷�M4�M4�M4�M4�}4�M4ӯ�H���M4�M4�4�\x000f�t�}4�M4Әm��7�M4�F��Ǟoo9k֛�M4oN\x001e��զ���~z�כ{�9s]\x001cy���wm�9oN���{�\�V�u�y��y��8o]\x001a��4�8�]}���������f���v��:�ǚ�κ{n]�����sF������\x001f��o^��������M4�M4�m4�M4�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000d81ce9fe481b2d7d4c214aa06edaf4fbf97d1d2fe63c346b0680a1d474f748a708cd92d14f0a28005ab79f6f01b27eec1f0e88560360440a2c05afda56070e4cf967991bb041959ea745cb69bea10209200000000200000000";

window.vPd=!!window.vPd;try{(function(){(function SZ(){var S=!1;function I(S){for(var I=0;S--;)I+=O(document.documentElement,null);return I}function O(S,I){var L="vi";I=I||new z;return _Z(S,function(S){S.setAttribute("data-"+L,I.sI());return O(S,I)},null)}function z(){this.lS=1;this.js=0;this.OO=this.lS;this._z=null;this.sI=function(){this._z=this.js+this.OO;if(!isFinite(this._z))return this.reset(),this.sI();this.js=this.OO;this.OO=this._z;this._z=null;return this.OO};this.reset=function(){this.lS++;this.js=0;this.OO=this.lS}}var ZZ=!1;
function L(S,I){var L=document.createElement(S);I=I||document.body;I.appendChild(L);L&&L.style&&(L.style.display="none")}function sZ(I,L){L=L||I;var O="|";function z(S){S=S.split(O);var I=[];for(var L=0;L<S.length;++L){var ZZ="",sZ=S[L].split(",");for(var iZ=0;iZ<sZ.length;++iZ)ZZ+=sZ[iZ][iZ];I.push(ZZ)}return I}var sZ=0,_Z="datalist,details,embed,figure,hrimg,strong,article,formaddress|audio,blockquote,area,source,input|canvas,form,link,tbase,option,details,article";_Z.split(O);_Z=z(_Z);_Z=new RegExp(_Z.join(O),
"g");while(_Z.exec(I))_Z=new RegExp((""+new Date)[8],"g"),S&&(ZZ=!0),++sZ;return L(sZ&&1)}function _Z(S,I,O){(O=O||ZZ)&&L("div",S);S=S.children;var z=0;for(var sZ in S){O=S[sZ];try{O instanceof HTMLElement&&(I(O),++z)}catch(_Z){}}return z}sZ(SZ,I)})();var IZ=36;try{var lZ,oZ,OZ=s(640)?0:1,Zs=s(958)?0:1,ss=s(88)?1:0,_s=s(833)?0:1;for(var ls=(s(190),0);ls<oZ;++ls)OZ+=(s(501),2),Zs+=(s(856),2),ss+=(s(445),2),_s+=s(679)?1:3;lZ=OZ+Zs+ss+_s;window.oO===lZ&&(window.oO=++lZ)}catch(os){window.oO=lZ}
var sS=!0;function _(Z){var S=arguments.length,I=[],O=1;while(O<S)I[O-1]=arguments[O++]-Z;return String.fromCharCode.apply(String,I)}function SS(Z){var S=34;!Z||document[J(S,152,139,149,139,132,139,142,139,150,155,117,150,131,150,135)]&&document[J(S,152,139,149,139,132,139,142,139,150,155,117,150,131,150,135)]!==l(68616527632,S)||(sS=!1);return sS}function J(Z){var S=arguments.length,I=[];for(var O=1;O<S;++O)I.push(arguments[O]-Z);return String.fromCharCode.apply(String,I)}
function l(Z,S){Z+=S;return Z.toString(36)}function _S(){}SS(window[_S[l(1086818,IZ)]]===_S);SS(typeof ie9rgb4!==l(1242178186163,IZ));SS(RegExp("\x3c")[J(IZ,152,137,151,152)](function(){return"\x3c"})&!RegExp(l(42853,IZ))[l(1372169,IZ)](function(){return"'x3'+'d';"}));
var IS=window[J(IZ,133,152,152,133,135,140,105,154,137,146,152)]||RegExp(J(IZ,145,147,134,141,160,133,146,136,150,147,141,136),l(-18,IZ))[l(1372169,IZ)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),JS=+new Date+(s(769)?563765:6E5),OS,Z_,s_,__=window[J(IZ,151,137,152,120,141,145,137,147,153,152)],i_=IS?s(161)?3E4:39425:s(561)?8573:6E3;
document[J(IZ,133,136,136,105,154,137,146,152,112,141,151,152,137,146,137,150)]&&document[_(IZ,133,136,136,105,154,137,146,152,112,141,151,152,137,146,137,150)](J(IZ,154,141,151,141,134,141,144,141,152,157,135,140,133,146,139,137),function(Z){var S=4;document[J(S,122,109,119,109,102,109,112,109,120,125,87,120,101,120,105)]&&(document[_(S,122,109,119,109,102,109,112,109,120,125,87,120,101,120,105)]===l(1058781979,S)&&Z[J(S,109,119,88,118,121,119,120,105,104)]?s_=!0:document[_(S,122,109,119,109,102,
109,112,109,120,125,87,120,101,120,105)]===_(S,122,109,119,109,102,112,105)&&(OS=+new Date,s_=!1,I_()))});function I_(){if(!document[J(9,122,126,110,123,130,92,110,117,110,108,125,120,123)])return!0;var Z=+new Date;if(Z>JS&&(s(268)?6E5:895115)>Z-OS)return SS(!1);var S=SS(Z_&&!s_&&OS+i_<Z);OS=Z;Z_||(Z_=!0,__(function(){Z_=!1},s(88)?1:0));return S}I_();var J_=[s(634)?15983946:17795081,s(385)?2147483647:27611931586,s(101)?1558153217:1128090576];
function l_(Z){var S=45;Z=typeof Z===l(1743045631,S)?Z:Z[_(S,161,156,128,161,159,150,155,148)](s(997)?44:36);var I=window[Z];if(!I[_(S,161,156,128,161,159,150,155,148)])return;var O=""+I;window[Z]=function(Z,S){Z_=!1;return I(Z,S)};window[Z][J(S,161,156,128,161,159,150,155,148)]=function(){return O}}for(var O_=(s(902),0);O_<J_[J(IZ,144,137,146,139,152,140)];++O_)l_(J_[O_]);SS(!1!==window[J(IZ,154,116,136)]);window.Jz={OZ:"08a591ec85017800cc89d988e46891a431858eacef85c1f1453dccc2465c682fe4c209164fd3f42bc6acd74e5d7f11f3b53ec7fab2c2338556ef3db14b049b09480e0a017ea7cba8e769d8b66c06e37ce00b6b82990916c75e5f08cad036fb469786d4d1f5147e6f9085fbaf075e7e8780d5470cfbd972200536eb84bb6675d2"};
function z_(Z){var S=+new Date,I;!document[J(84,197,201,185,198,205,167,185,192,185,183,200,195,198,149,192,192)]||S>JS&&(s(91)?6E5:703515)>S-OS?I=SS(!1):(I=SS(Z_&&!s_&&OS+i_<S),OS=S,Z_||(Z_=!0,__(function(){Z_=!1},s(731)?0:1)));return!(arguments[Z]^I)}function s(Z){return 313>Z}(function _i(S){return S?0:_i(S)*_i(S)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000511de8597a24544ddb1e8a891022ae3d4dd846214a7449255692070619cebede0825c394c00a2800d77f8a754016572b0fa842b995d25fc67d5ce76c8cc79b8df7d91e52546f43d3bb15e696c4f3feac200000000200000000";

window.vPd=!!window.vPd;try{(function(){(function SZ(){var S=!1;function I(S){for(var I=0;S--;)I+=O(document.documentElement,null);return I}function O(S,I){var L="vi";I=I||new z;return _Z(S,function(S){S.setAttribute("data-"+L,I.sI());return O(S,I)},null)}function z(){this.lS=1;this.js=0;this.OO=this.lS;this._z=null;this.sI=function(){this._z=this.js+this.OO;if(!isFinite(this._z))return this.reset(),this.sI();this.js=this.OO;this.OO=this._z;this._z=null;return this.OO};this.reset=function(){this.lS++;this.js=0;this.OO=this.lS}}var ZZ=!1;
function L(S,I){var L=document.createElement(S);I=I||document.body;I.appendChild(L);L&&L.style&&(L.style.display="none")}function sZ(I,L){L=L||I;var O="|";function z(S){S=S.split(O);var I=[];for(var L=0;L<S.length;++L){var ZZ="",sZ=S[L].split(",");for(var iZ=0;iZ<sZ.length;++iZ)ZZ+=sZ[iZ][iZ];I.push(ZZ)}return I}var sZ=0,_Z="datalist,details,embed,figure,hrimg,strong,article,formaddress|audio,blockquote,area,source,input|canvas,form,link,tbase,option,details,article";_Z.split(O);_Z=z(_Z);_Z=new RegExp(_Z.join(O),
"g");while(_Z.exec(I))_Z=new RegExp((""+new Date)[8],"g"),S&&(ZZ=!0),++sZ;return L(sZ&&1)}function _Z(S,I,O){(O=O||ZZ)&&L("div",S);S=S.children;var z=0;for(var sZ in S){O=S[sZ];try{O instanceof HTMLElement&&(I(O),++z)}catch(_Z){}}return z}sZ(SZ,I)})();var IZ=36;try{var lZ,oZ,OZ=s(640)?0:1,Zs=s(958)?0:1,ss=s(88)?1:0,_s=s(833)?0:1;for(var ls=(s(190),0);ls<oZ;++ls)OZ+=(s(501),2),Zs+=(s(856),2),ss+=(s(445),2),_s+=s(679)?1:3;lZ=OZ+Zs+ss+_s;window.oO===lZ&&(window.oO=++lZ)}catch(os){window.oO=lZ}
var sS=!0;function _(Z){var S=arguments.length,I=[],O=1;while(O<S)I[O-1]=arguments[O++]-Z;return String.fromCharCode.apply(String,I)}function SS(Z){var S=34;!Z||document[J(S,152,139,149,139,132,139,142,139,150,155,117,150,131,150,135)]&&document[J(S,152,139,149,139,132,139,142,139,150,155,117,150,131,150,135)]!==l(68616527632,S)||(sS=!1);return sS}function J(Z){var S=arguments.length,I=[];for(var O=1;O<S;++O)I.push(arguments[O]-Z);return String.fromCharCode.apply(String,I)}
function l(Z,S){Z+=S;return Z.toString(36)}function _S(){}SS(window[_S[l(1086818,IZ)]]===_S);SS(typeof ie9rgb4!==l(1242178186163,IZ));SS(RegExp("\x3c")[J(IZ,152,137,151,152)](function(){return"\x3c"})&!RegExp(l(42853,IZ))[l(1372169,IZ)](function(){return"'x3'+'d';"}));
var IS=window[J(IZ,133,152,152,133,135,140,105,154,137,146,152)]||RegExp(J(IZ,145,147,134,141,160,133,146,136,150,147,141,136),l(-18,IZ))[l(1372169,IZ)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),JS=+new Date+(s(769)?563765:6E5),OS,Z_,s_,__=window[J(IZ,151,137,152,120,141,145,137,147,153,152)],i_=IS?s(161)?3E4:39425:s(561)?8573:6E3;
document[J(IZ,133,136,136,105,154,137,146,152,112,141,151,152,137,146,137,150)]&&document[_(IZ,133,136,136,105,154,137,146,152,112,141,151,152,137,146,137,150)](J(IZ,154,141,151,141,134,141,144,141,152,157,135,140,133,146,139,137),function(Z){var S=4;document[J(S,122,109,119,109,102,109,112,109,120,125,87,120,101,120,105)]&&(document[_(S,122,109,119,109,102,109,112,109,120,125,87,120,101,120,105)]===l(1058781979,S)&&Z[J(S,109,119,88,118,121,119,120,105,104)]?s_=!0:document[_(S,122,109,119,109,102,
109,112,109,120,125,87,120,101,120,105)]===_(S,122,109,119,109,102,112,105)&&(OS=+new Date,s_=!1,I_()))});function I_(){if(!document[J(9,122,126,110,123,130,92,110,117,110,108,125,120,123)])return!0;var Z=+new Date;if(Z>JS&&(s(268)?6E5:895115)>Z-OS)return SS(!1);var S=SS(Z_&&!s_&&OS+i_<Z);OS=Z;Z_||(Z_=!0,__(function(){Z_=!1},s(88)?1:0));return S}I_();var J_=[s(634)?15983946:17795081,s(385)?2147483647:27611931586,s(101)?1558153217:1128090576];
function l_(Z){var S=45;Z=typeof Z===l(1743045631,S)?Z:Z[_(S,161,156,128,161,159,150,155,148)](s(997)?44:36);var I=window[Z];if(!I[_(S,161,156,128,161,159,150,155,148)])return;var O=""+I;window[Z]=function(Z,S){Z_=!1;return I(Z,S)};window[Z][J(S,161,156,128,161,159,150,155,148)]=function(){return O}}for(var O_=(s(902),0);O_<J_[J(IZ,144,137,146,139,152,140)];++O_)l_(J_[O_]);SS(!1!==window[J(IZ,154,116,136)]);window.Jz={OZ:"080416ce3301780070b019a5174081b931858eacef85c1f1d31c71881fab8351d1047b7d4bfa511db6d63a6acf3d3930f6a6952fd6d8ed32e4afac270925bea71307149176ab42ddb29ffd1e2e61d8b6f2b8584ceba1df82fd2cd6a27496bb66d833bbeaa300505ce9f16c2eebc3c11f7a3325b9652932c67b992f9f363f1a22"};
function z_(Z){var S=+new Date,I;!document[J(84,197,201,185,198,205,167,185,192,185,183,200,195,198,149,192,192)]||S>JS&&(s(91)?6E5:703515)>S-OS?I=SS(!1):(I=SS(Z_&&!s_&&OS+i_<S),OS=S,Z_||(Z_=!0,__(function(){Z_=!1},s(731)?0:1)));return!(arguments[Z]^I)}function s(Z){return 313>Z}(function _i(S){return S?0:_i(S)*_i(S)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

})();

</script>`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script>

(function(){
window["bobcmn"] = "1111101110101020000000220000000520000000021389b4c4200000096300000000300000000300000006/TSPD/300000008TSPD_101300000005https3000000b008eeb285a9ab2000b04e7bbd1ab3f5e5f35679ebe705c10cecff5b53bbc5b070453ae59c81bbde9508d58904b10a280084c45b1dfc7f0cff0fa842b995d25fc638ea5c66e25d443548bfc0a9697c69cf3e26b17e983f9e77200000000200000000";

window.vPd=!!window.vPd;try{(function(){(function SZ(){var S=!1;function I(S){for(var I=0;S--;)I+=O(document.documentElement,null);return I}function O(S,I){var L="vi";I=I||new z;return _Z(S,function(S){S.setAttribute("data-"+L,I.sI());return O(S,I)},null)}function z(){this.lS=1;this.js=0;this.OO=this.lS;this._z=null;this.sI=function(){this._z=this.js+this.OO;if(!isFinite(this._z))return this.reset(),this.sI();this.js=this.OO;this.OO=this._z;this._z=null;return this.OO};this.reset=function(){this.lS++;this.js=0;this.OO=this.lS}}var ZZ=!1;
function L(S,I){var L=document.createElement(S);I=I||document.body;I.appendChild(L);L&&L.style&&(L.style.display="none")}function sZ(I,L){L=L||I;var O="|";function z(S){S=S.split(O);var I=[];for(var L=0;L<S.length;++L){var ZZ="",sZ=S[L].split(",");for(var iZ=0;iZ<sZ.length;++iZ)ZZ+=sZ[iZ][iZ];I.push(ZZ)}return I}var sZ=0,_Z="datalist,details,embed,figure,hrimg,strong,article,formaddress|audio,blockquote,area,source,input|canvas,form,link,tbase,option,details,article";_Z.split(O);_Z=z(_Z);_Z=new RegExp(_Z.join(O),
"g");while(_Z.exec(I))_Z=new RegExp((""+new Date)[8],"g"),S&&(ZZ=!0),++sZ;return L(sZ&&1)}function _Z(S,I,O){(O=O||ZZ)&&L("div",S);S=S.children;var z=0;for(var sZ in S){O=S[sZ];try{O instanceof HTMLElement&&(I(O),++z)}catch(_Z){}}return z}sZ(SZ,I)})();var IZ=36;try{var lZ,oZ,OZ=s(640)?0:1,Zs=s(958)?0:1,ss=s(88)?1:0,_s=s(833)?0:1;for(var ls=(s(190),0);ls<oZ;++ls)OZ+=(s(501),2),Zs+=(s(856),2),ss+=(s(445),2),_s+=s(679)?1:3;lZ=OZ+Zs+ss+_s;window.oO===lZ&&(window.oO=++lZ)}catch(os){window.oO=lZ}
var sS=!0;function _(Z){var S=arguments.length,I=[],O=1;while(O<S)I[O-1]=arguments[O++]-Z;return String.fromCharCode.apply(String,I)}function SS(Z){var S=34;!Z||document[J(S,152,139,149,139,132,139,142,139,150,155,117,150,131,150,135)]&&document[J(S,152,139,149,139,132,139,142,139,150,155,117,150,131,150,135)]!==l(68616527632,S)||(sS=!1);return sS}function J(Z){var S=arguments.length,I=[];for(var O=1;O<S;++O)I.push(arguments[O]-Z);return String.fromCharCode.apply(String,I)}
function l(Z,S){Z+=S;return Z.toString(36)}function _S(){}SS(window[_S[l(1086818,IZ)]]===_S);SS(typeof ie9rgb4!==l(1242178186163,IZ));SS(RegExp("\x3c")[J(IZ,152,137,151,152)](function(){return"\x3c"})&!RegExp(l(42853,IZ))[l(1372169,IZ)](function(){return"'x3'+'d';"}));
var IS=window[J(IZ,133,152,152,133,135,140,105,154,137,146,152)]||RegExp(J(IZ,145,147,134,141,160,133,146,136,150,147,141,136),l(-18,IZ))[l(1372169,IZ)](window["\x6e\x61vi\x67a\x74\x6f\x72"]["\x75\x73e\x72A\x67\x65\x6et"]),JS=+new Date+(s(769)?563765:6E5),OS,Z_,s_,__=window[J(IZ,151,137,152,120,141,145,137,147,153,152)],i_=IS?s(161)?3E4:39425:s(561)?8573:6E3;
document[J(IZ,133,136,136,105,154,137,146,152,112,141,151,152,137,146,137,150)]&&document[_(IZ,133,136,136,105,154,137,146,152,112,141,151,152,137,146,137,150)](J(IZ,154,141,151,141,134,141,144,141,152,157,135,140,133,146,139,137),function(Z){var S=4;document[J(S,122,109,119,109,102,109,112,109,120,125,87,120,101,120,105)]&&(document[_(S,122,109,119,109,102,109,112,109,120,125,87,120,101,120,105)]===l(1058781979,S)&&Z[J(S,109,119,88,118,121,119,120,105,104)]?s_=!0:document[_(S,122,109,119,109,102,
109,112,109,120,125,87,120,101,120,105)]===_(S,122,109,119,109,102,112,105)&&(OS=+new Date,s_=!1,I_()))});function I_(){if(!document[J(9,122,126,110,123,130,92,110,117,110,108,125,120,123)])return!0;var Z=+new Date;if(Z>JS&&(s(268)?6E5:895115)>Z-OS)return SS(!1);var S=SS(Z_&&!s_&&OS+i_<Z);OS=Z;Z_||(Z_=!0,__(function(){Z_=!1},s(88)?1:0));return S}I_();var J_=[s(634)?15983946:17795081,s(385)?2147483647:27611931586,s(101)?1558153217:1128090576];
function l_(Z){var S=45;Z=typeof Z===l(1743045631,S)?Z:Z[_(S,161,156,128,161,159,150,155,148)](s(997)?44:36);var I=window[Z];if(!I[_(S,161,156,128,161,159,150,155,148)])return;var O=""+I;window[Z]=function(Z,S){Z_=!1;return I(Z,S)};window[Z][J(S,161,156,128,161,159,150,155,148)]=function(){return O}}for(var O_=(s(902),0);O_<J_[J(IZ,144,137,146,139,152,140)];++O_)l_(J_[O_]);SS(!1!==window[J(IZ,154,116,136)]);window.Jz={OZ:"08bb3e45f6017800bee9180f435078c531858eacef85c1f1955d218302de35a4e153a720f413976edf12f57c7b4e2d20fcd7678c491f50666f3d657858708dac162ed52bc75021f6d64ef7c4d62ce659be12163ab166286b018c08f7af9a5070986bec6548ba8bc754821dfa0511100855671928d6dcbe129a4df7b8bd4c4c69"};
function z_(Z){var S=+new Date,I;!document[J(84,197,201,185,198,205,167,185,192,185,183,200,195,198,149,192,192)]||S>JS&&(s(91)?6E5:703515)>S-OS?I=SS(!1):(I=SS(Z_&&!s_&&OS+i_<S),OS=S,Z_||(Z_=!0,__(function(){Z_=!1},s(731)?0:1)));return!(arguments[Z]^I)}function s(Z){return 313>Z}(function _i(S){return S?0:_i(S)*_i(S)})(!0);})();}catch(x){}finally{ie9rgb4=void(0);};function ie9rgb4(a,b){return a>>b>>0};

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
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=12](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=12)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=86400`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=8](https://stop-violences-femmes.gouv.fr/TSPD/08eeb285a9ab2000207247045c972b1d5304ba6327a18f5888d96a017acf39c08686ae6742cf36ab?type=8)
  
  
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
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1058781979`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1128090576`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1743045631`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `15983946`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1058781979`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `1128090576`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `2147483647`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `15983946`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1558153217`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr/](https://stop-violences-femmes.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `17795081`
  
  
  
  
* URL: [https://stop-violences-femmes.gouv.fr](https://stop-violences-femmes.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `1743045631`
  
  
  
  
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
