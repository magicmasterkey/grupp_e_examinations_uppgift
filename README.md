# Grupp_E_Examinations_Uppgift
## Gruppmedlemmar
- Albin (magicmasterkey), Yousef (yousef0yousef), Bojan(Jeri-JeriJeri), Salma (salmaabdise)
## Kör projektet
Öppna index.html i Chrome via live server.
## Agil reflektion
- Hur delade ni upp arbetet?

- Albin skapade grund strukturen till sidans html och css, samt har tagit hand om det lite med administriva som code review och lösa merge conflicts.
- Yousef har skapat den största delen av nav och bokningssytemets funktionalitet.
- Bojan har tagit hand om utseende, innehåll och funktionalitet av sidans footer.
- Salma la grunden till popup/bokningsfunktion och hur det ser ut när man bokar , med bland annat popup som bekräftar vid bokning som senare vidareutvecklades.
  
- Vad prioriterade ni i backlog?

- Främst bokningshistoriken

- En utmaning och hur ni löste den.

- En utmaning var när vi ritade upp filmkorten igen efter ett köp, då slutade knapparna att fungera för att de tappade sina event listeners. Vi löste det genom att koppla på klick-händelserna på knapparna direkt varje gång funktionen körs.

## AI (om tillämpligt)
Kort beskrivning av AI-användning.

Vi använde AI för att hjälpa oss med felsökning i koden när vi fastnade:
1. Vi hade ett fel i JavaScript där koden såg helt rätt ut men ändå inte fungerade. Vi frågade AI och upptäckte att vi hade missat att skriva `querySelector` istället för `querySelectorAll` när vi hämtade flera element.
2. Yousef använde först `change` eventet på vårt inputfält för att räkna priset, men då uppdaterades inte priset förrän man tryckte Enter eller klickade utanför. AI tipsade oss om att byta till `input` eventet, så nu ändras totalsumman direkt när man skriver.
3. När popupen öppnades hamnade textmarkören till vänster om siffran 1. AI hjälpte oss med att använda `.select()` på inputfältet så att siffran markeras direkt och blir enkel att ändra.
4. Yousef använde AI för att få en enkel förklaring till varför man sätter startvärdet `, 0` i `reduce()`.

Vi har också tagit hjälp av dokumentation från MDN Web Docs och W3Schools för att kolla upp saker som array metoder och CSS media queries.
