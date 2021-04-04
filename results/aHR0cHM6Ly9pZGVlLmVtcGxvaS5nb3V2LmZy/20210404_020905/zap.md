
# ZAP Scanning Report

Generated on Sun, 4 Apr 2021 02:04:23


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 0 |
| Low | 5 |
| Informational | 5 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Application Error Disclosure | Low | 2 | 
| Cookie Without SameSite Attribute | Low | 5 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 1 | 
| Strict-Transport-Security Header Not Set | Low | 5 | 
| X-Content-Type-Options Header Missing | Low | 1 | 
| Base64 Disclosure | Informational | 3 | 
| Content-Type Header Missing | Informational | 5 | 
| Non-Storable Content | Informational | 9 | 
| Storable and Cacheable Content | Informational | 2 | 

## Alert Detail


  
  
  
  
### Application Error Disclosure
##### Low (Medium)
  
  
  
  
#### Description
<p>This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  * Evidence: `HTTP/1.0 500 Internal Server Error`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece)
  
  
  * Method: `GET`
  
  
  * Evidence: `HTTP/1.0 500 Internal Server Error`
  
  
  
  
Instances: 2
  
### Solution
<p>Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Cookie Without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr](https://idee.emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgefp-simuap.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgefp-simuap.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/](https://idee.emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgefp-simuap.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgefp-simuap.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/](https://idee.emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr](https://idee.emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `JSESSIONID`
  
  
  * Evidence: `Set-Cookie: JSESSIONID`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/robots.txt](https://idee.emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-dgefp-simuap.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-dgefp-simuap.cegedim.cloud-HTTP`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 16
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Incomplete or No Cache-control and Pragma HTTP Header Set
##### Low (Medium)
  
  
  
  
#### Description
<p>The cache-control and pragma HTTP header have not been set properly or are missing allowing the browser and proxies to cache content.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/robots.txt](https://idee.emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/](https://idee.emploi.gouv.fr/PortailIDEE/jsp/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/sitemap.xml](https://idee.emploi.gouv.fr/sitemap.xml)
  
  
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

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/robots.txt](https://idee.emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 1
  
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
  
  
  
* URL: [https://idee.emploi.gouv.fr/](https://idee.emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `tXekaP01Vv5nd88qJlLL3fNyljz02TmcxTqMRadj+5dCt4R51scUMaU2HOm9reXvXQPSwN2ind9/mT92t3IRg3I5/o4=`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr](https://idee.emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `LmPfuwJCY9N2/GUqJlLL3fNyljz02TAHjlBPWlhJ0dyrquiyddp28CPZBbb6qJXTs+Pxw8i7iMdHgTHSnVDV0pktaBU=`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/robots.txt](https://idee.emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `wTxI+HhDZE8eG/gqJlLL3fNyljz02eNv4GmusyeDEuHsGd8UT3tt/4LJm4p2x2OtkcVTRNBpszdRGHJd8YvNxCT4oZM=`
  
  
  
  
Instances: 3
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>�w�h�5V�gw�*&R���r�<��9��:�E�c��B��y��\x00141�6\x001c齭��]\x0003��ݢ���?v�r\x0011�r9��</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/](https://idee.emploi.gouv.fr/PortailIDEE/jsp/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?action=login&page=mylutece)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/sitemap.xml](https://idee.emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure each page is setting the specific and appropriate content-type value for the content being delivered.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx

  
#### CWE Id : 345
  
#### WASC Id : 12
  
#### Source ID : 3

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [http://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp](http://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [http://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](http://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
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

  
  
  
  
### Non-Storable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.</p>
  
  
  
* URL: [https://idee.emploi.gouv.fr/](https://idee.emploi.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr](https://idee.emploi.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login](https://idee.emploi.gouv.fr/PortailIDEE/jsp/site/Portal.jsp?page=mylutece&action=login)
  
  
  * Method: `GET`
  
  
  * Evidence: `500`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/PortailIDEE](https://idee.emploi.gouv.fr/PortailIDEE)
  
  
  * Method: `GET`
  
  
  * Evidence: `302`
  
  
  
  
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
  
  
  
* URL: [https://idee.emploi.gouv.fr/robots.txt](https://idee.emploi.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://idee.emploi.gouv.fr/sitemap.xml](https://idee.emploi.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 2
  
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
