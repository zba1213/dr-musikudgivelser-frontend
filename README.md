# Musikudgivelser frontend

Åbn denne mappe i VS Code. Start API'et, installér udvidelsen **Live Server**, og vælg **Open with Live Server** på `index.html`. Åbn [http://localhost:5500](http://localhost:5500). Vue og Axios indlæses fra jsDelivr, så browseren skal have internetadgang.

API'ets baseadresse står i `config.js`. Brug den lokale adresse til udvikling og API'ets HTTPS-adresse i den kopi, du publicerer til Azure.

## Azure via FTPS

1. Brug en separat Windows App Service til frontenden. Vælg **FTPS Only** og aktivér både SCM og FTP Basic Auth Publishing Credentials.
2. Find hostnavn, brugernavn og adgangskode i **Deployment Center → FTPS credentials**. Forbind med en FTP-klient, der bruger eksplicit FTP over TLS.
3. Upload `index.html`, `style.css`, `app.js` og den Azure-konfigurerede `config.js` til `/site/wwwroot`.
4. Sæt `FrontendOrigin` på API-appen til frontendens faktiske HTTPS-origin. Åbn frontendens HTTPS-adresse og kontrollér, at tabellen vises.

[Azure App Service og FTPS](https://learn.microsoft.com/en-us/azure/app-service/deploy-ftp)
