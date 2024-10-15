AI Mindfulness

AI Mindfulness är en applikation som använder en stor språkmodell för att erbjuda användare ett personligt och anpassat mindfulness-program. Tjänsten ger användarna möjlighet att svara på korta frågor om deras välbefinnande och dagliga utmaningar, och baserat på deras svar genererar AI
ett skräddarsytt dagligt schema med övningar och meditationer. Applikationen syftar till att förbättra mental hälsa, stärka minnet och förbereda användare för vardagliga utmaningar.

*** Målgrupp ***
Tjänsten riktar sig till individer som vill förbättra sin mentala hälsa och få hjälp med mindfulness och meditation. Målgruppen inkluderar:

Studenter som söker stresshantering.
Yrkesverksamma som vill förbättra sin produktivitet.
Vem som helst som är intresserad av att utforska mindfulness-tekniker.
Teknologi och krav
Tjänsten använder en stor språkmodell och modern AI-teknik baserad på maskininlärning. Den kan köras antingen lokalt på kursledarens MacBook eller som en webbtjänst.

*** Krav på tjänsten ***
Användning av en stor språkmodell eller molnbaserad AI.
Delvis utvecklad med AI-stöd.
Grundläggande dokumentation som beskriver tjänstens funktion, målgrupp, och etiska överväganden.
Etiska och säkerhetsöverväganden
Under utvecklingen av AI Mindfulness har vi tagit hänsyn till följande etiska frågor:

Integritet: Användardata hanteras med största sekretess och lagras säkert.
Användarsäkerhet: Tjänsten är utformad för att vara trygg och användarvänlig.
Bias i AI: Jag strävar efter att minimera bias i AI-modellen genom att noggrant välja träningsdata och testa resultaten.
Utvecklingsöverväganden
Under utvecklingen har vi gjort flera avvägningar:

Funktionalitet vs. användarvänlighet: Prioritering av en enkel och intuitiv användarupplevelse.
Tidsbegränsningar: Givet den korta utvecklingstiden, kan vissa funktioner fortfarande ha buggar och brister, men tjänsten är fullt användbar.

*** Installation ***
-- Krav
Node.js: För att köra backend med Express. Ladda ner här.
npm: Ingår med Node.js, används för att installera beroenden.
Git: För att klona repositoryt från GitHub. Ladda ner här.
React och TypeScript: Används för frontend-utveckling.
MongoDB: För datalagring av användardata. Se till att ha en MongoDB-databas konfigurerad.
Konfigurera din .env-fil:
Skapa en .env-fil i projektroten och lägg till dina API-nycklar för AI och behörigheter för MongoDB.
Notera att .env-filen finns i .gitignore för att skydda känslig information.
Applikationen bör nu vara tillgänglig på http://localhost:3000. Om du behöver tillgång till .env-filen, vänligen kontakta mig så kan jag skicka den till dig.
