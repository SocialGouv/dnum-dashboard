
# ZAP Scanning Report

Generated on Tue, 31 Aug 2021 21:11:39


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 0 |
| Low | 1 |
| Informational | 3 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Cookie without SameSite Attribute | Low | 3 | 
| Base64 Disclosure | Informational | 3 | 
| Content-Type Header Missing | Informational | 4 | 
| Non-Storable Content | Informational | 4 | 

## Alert Detail


  
  
  
  
### Cookie without SameSite Attribute
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.</p>
  
  
  
* URL: [https://extranet.lafrancesengage.fr/robots.txt](https://extranet.lafrancesengage.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djevpa-lfse.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djevpa-lfse.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/](https://extranet.lafrancesengage.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djevpa-lfse.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djevpa-lfse.cegedim.cloud-HTTP`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr](https://extranet.lafrancesengage.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `BIGipServerpool-djevpa-lfse.cegedim.cloud-HTTP`
  
  
  * Evidence: `Set-Cookie: BIGipServerpool-djevpa-lfse.cegedim.cloud-HTTP`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.</p>
  
### Reference
* https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site

  
#### CWE Id : 1275
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://extranet.lafrancesengage.fr/robots.txt](https://extranet.lafrancesengage.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `Xq/M2dVj1+cPjKIqJlLL3fNyljz02anIl6DwGa0h/j2GNbiitZUTdtO1CdhlPE2ztfFceEdbXHw2isW98tkaUSP90n8=`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/](https://extranet.lafrancesengage.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `ciXQCbfOUGJwNRwqJlLL3fNyljz02awZgs7BnL4hahwZqkkZUsqfFOLeH2DJpS1WnBg5+PEyGYPyTZViLs57X0w1Pis=`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr](https://extranet.lafrancesengage.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `U/K9Ml3v9n7RUg4qJlLL3fNyljz02Ua0gLKU8PPyjOSmvByzi0seK17WjNPRj76zr6kxdyWfcp0OoprHfdgS7Tec5Jg=`
  
  
  
  
Instances: 3
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>^����c��\x000f��*&R���r�<�٩ȗ��\x0019�!�=�5����\x0013vӵ	�e<M���\xG[\|6�Ž��\x001aQ#��</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content-Type Header Missing
##### Informational (Medium)
  
  
  
  
#### Description
<p>The Content-Type header was either missing or empty.</p>
  
  
  
* URL: [https://extranet.lafrancesengage.fr/robots.txt](https://extranet.lafrancesengage.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/sitemap.xml](https://extranet.lafrancesengage.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr](https://extranet.lafrancesengage.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/](https://extranet.lafrancesengage.fr/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
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
  
  
  
* URL: [https://extranet.lafrancesengage.fr/](https://extranet.lafrancesengage.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `401`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/sitemap.xml](https://extranet.lafrancesengage.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `401`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr/robots.txt](https://extranet.lafrancesengage.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `401`
  
  
  
  
* URL: [https://extranet.lafrancesengage.fr](https://extranet.lafrancesengage.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `401`
  
  
  
  
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
