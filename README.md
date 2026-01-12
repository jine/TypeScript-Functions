# Workshop: Funktioner, Logik & Referense

## Steg 1: Syntax-omvandlingen (Gammalt till Nytt)
Vi börjar med att öva på den moderna syntaxen som är standard idag.

- [ ] Skriv en **gammaldags** namngiven funktion (med nyckelordet `function`) som heter `calculateArea`. Den ska ta `width` och `height` (numbers) och returnera arean.
- [ ] Skriv sedan **om** exakt samma funktion till en modern **Arrow Function** (`const calculateArea = ...`) under den gamla.
- [ ] **Utmaning:** Prova att göra Arrow-funktionen så kort som möjligt. Kan du skriva den på en enda rad med **Implicit Return**? (Utan måsvingar `{ }` och `return`).
- [ ] Anropa funktionen, spara svaret i en variabel och logga det i konsolen.

---

## Steg 2: Flexibla Parametrar
Här ska vi bygga en funktion som är "snäll" mot användaren genom att ha valfria inställningar.

- [ ] Skapa en funktion som heter `greetUser`.
- [ ] Den ska ta tre parametrar:
    1.  `name` (string, obligatorisk).
    2.  `greeting` (string). Denna ska ha ett **Default Value** satt till `"Hej"`.
    3.  `isShouting` (boolean). Denna ska vara **Optional** (`?`).
- [ ] **Logiken:**
    * Funktionen ska returnera en sträng.
    * Om `isShouting` är sant, returnera hela meningen med STORA BOKSTÄVER (`.toUpperCase()`).
    * Annars, returnera den vanliga hälsningen (t.ex. *"Hej Luna"*).
- [ ] **Testa:** Anropa funktionen på tre olika sätt och logga resultaten:
    1.  Bara med namn.
    2.  Med namn och en egen hälsning (t.ex. "Tjena").
    3.  Med namn, egen hälsning och `true` för att skrika.

---

## Steg 3: Detektiven (Type Guards)
Nu ska vi öva på att hantera data som kan vara av olika typer, precis som i ett API-svar.

- [ ] Skapa en funktion som heter `countStrings`.
- [ ] Den ska ta emot **en** parameter som heter `input`.
- [ ] Typen på input ska vara en **Union Type**: `string | string[]` (alltså *antingen* en sträng *eller* en lista av strängar).
- [ ] **Logiken:**
    * Använd `Array.isArray(input)` för att kolla vad det är för data.
    * Om det är en **Array**: Returnera antalet ord i listan (längden).
    * Om det är en **Sträng**: Returnera siffran `1`.
- [ ] Testa att anropa med `["Äpple", "Banan"]` (Borde bli 2).
- [ ] Testa att anropa med `"Ensam sträng"` (Borde bli 1).

> 💡 **Tips:** VS Code kommer hjälpa dig inuti if-satsen. När du vet att det är en array kan du använda array-metoder!

---

## Steg 4: Minnes-experimentet (Objekt vs Primitiver)
Här ska vi bevisa skillnaden på *Pass-by-Value* och *Pass-by-Reference*. Detta är viktigt för att inte råka skapa buggar i React senare.

- [ ] Skapa en variabel `price` (number) med värdet `100`.
- [ ] Skapa ett objekt `product` med egenskapen `{ price: 100 }`.
- [ ] Skriv en funktion som heter `applyDiscount(p, prod)`. Den ska ta emot ett nummer och ett produkt-objekt.
- [ ] **Inuti funktionen:**
    * Ändra numret `p` till `50`.
    * Ändra objektet `prod.price` till `50`.
- [ ] Anropa funktionen med dina variabler.
- [ ] **Viktigt:** Logga både `price` och `product.price` *efter* anropet.
- [ ] Skriv en kommentar i koden: Vilken av dem ändrades "på riktigt" och varför?

---

## Steg 5: Slutuppgift – "Varukorgen" 
Nu knyter vi ihop objekt, arrayer och funktioner.

- [ ] Skapa en lista (Array) med objekt som simulerar en varukorg. Varje objekt i listan ska ha:
    * `name` (string)
    * `price` (number)
- [ ] Skapa en funktion `calculateTotal`.
    * Den ska ta emot varukorgen som parameter.
    * Den ska loopa igenom listan och returnera totalsumman.
- [ ] Skapa en funktion `addProduct`.
    * Den ska ta emot varukorgen och en **ny** produkt (ett objekt med namn och pris).
    * Den ska lägga till (`push`) den nya produkten i listan.
- [ ] **Simulera ett köp:**
    1.  Logga totalen (bör vara t.ex. 0 eller vad du startade med).
    2.  Anropa `addProduct` för att lägga till en "Kaffe" för 40kr.
    3.  Logga totalen igen för att se att den ökat.

---
