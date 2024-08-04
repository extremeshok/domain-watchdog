# Domain Watchdog

Domain Watchdog is a standalone web application that collects open access information about domain names, helping users
track the history and changes associated with domain names.

## Why use it?

- **Historical Tracking**: Know the history of a domain name, from its inception to its release into the public domain.
- **Detailed Monitoring**: Follow the evolution of a domain name and the entities that manage it in detail.
- **Reverse Directory**: Discover domain names associated with an entity registered with a registrar.
- **Auto-purchase Domain**: You want the domain name of your dreams, but it is already taken? Domain Watchdog detects
  the deletion of the domain name on WHOIS and can trigger the purchase of the domain name via a provider's API

Although the RDAP and WHOIS protocols allow you to obtain precise information about a domain, it is not possible to
perform a reverse search to discover a list of domain names associated with an entity. Additionally, accessing a
detailed history of events (ownership changes, renewals, etc.) is not feasible with these protocols.

## How it works?

### RDAP search

The latest version of the WHOIS protocol was standardized in 2004 by RFC 3912.[^1] This protocol allows anyone to
retrieve key information concerning a domain name, an IP address, or an entity registered with a registry.

ICANN launched a global vote in 2023 to propose replacing the WHOIS protocol with RDAP. As a result, registries and
registrars will no longer be required to support WHOIS from 2025 (*WHOIS Sunset Date*).[^2]

Domain Watchdog uses the RDAP protocol, which will soon be the new standard for retrieving information concerning domain
names. The data is organized in a SQL database to minimize space by ensuring an entity is not repeated.

### Watchlist

A watchlist is a list of domain names, triggers and possibly an API connector from a provider.
They allow you to follow the life of the listed domain names and send you a notification when a change has been
detected.

If a domain has expired and a connector is listed on the Watchlist, then Domain Watchdog will try to order it via the
connector provider's API.

Note: If the same domain name is present on several Watchlists, on the same principle as the raise condition, it is not
possible to predict in advance which user will win the domain name. The choice is left to chance.


> [!NOTE]
> ## Useful documentation
> - [RFC 7482 : Registration Data Access Protocol (RDAP) Query Format](https://datatracker.ietf.org/doc/html/rfc7482)
> - [RFC 7483 : JSON Responses for the Registration Data Access Protocol (RDAP)](https://datatracker.ietf.org/doc/html/rfc7483)
> - [RFC 7484 : Finding the Authoritative Registration Data (RDAP) Service](https://datatracker.ietf.org/doc/html/rfc7484)

## Licensing

This source code of this project is licensed under *GNU Affero General Public License v3.0 or later*.
Contributions are welcome as long as they do not contravene the Code of Conduct.

[^1]: RFC 3912 : WHOIS Protocol Specification. (2004). IETF Datatracker. https://datatracker.ietf.org/doc/html/rfc3912
[^2]: 2023 Global Amendments to the Base gTLD Registry Agreement (RA), Specification 13, and 2013 Registrar
Accreditation Agreement (RAA) - ICANN. (2023). https://www.icann.org/resources/pages/global-amendment-2023-en
