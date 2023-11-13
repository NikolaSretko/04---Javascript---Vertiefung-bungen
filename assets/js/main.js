//=========================================================
//      Lev1_1_js-vertiefung_this_object-object
//=========================================================
// let person = {
//     vorname: "Anton",
//     nachname: "Fish",
//     fullName() {
//         return `Vorname:${this.vorname}  Nachname:${this.nachname} `;
//     }
// };
// console.log(person.fullName());
//=========================================================
//      Lev1_2_js-vertiefung_this_object-object
//=========================================================
// // 1. JavaScript-Objekt erstellen, um die Informationen über eine Person zu speichern
// let person = {
//     vorname: 'Anton',       // Vorname der Person
//     nachname: 'Fish',       // Nachname der Person
//     alter: 34,              // Alter der Person
//     familienstand: 'ledig', // Familienstand der Person
//     groesse: '178cm',       // Größe der Person
//     profil: function () {
//         // Funktion, die eine formatierte Zeichenkette mit den Informationen erstellt
//         return `Name: ${this.vorname}<br>Nachname: ${this.nachname}<br>Alter: ${this.alter}<br>Familienstand: ${this.familienstand}<br>Größe: ${this.groesse}`;
//     }
// };

// // 2. HTML-Element für die Person aus dem DOM abrufen
// let personElement = document.getElementById("person");

// // 3. Stilisierung des HTML-Elements für eine ansprechende Darstellung
// personElement.style.fontFamily = 'Arial, sans-serif'; // Schriftart
// personElement.style.fontSize = '18px';                // Schriftgröße
// personElement.style.color = '#e2e5e2';                 // Schriftfarbe
// personElement.style.backgroundColor = '#2e6464';      // Hintergrundfarbe
// personElement.style.display = 'flex';                  // Flexbox-Anordnung
// personElement.style.alignItems = 'left';              // Ausrichtung der Elemente
// personElement.style.justifyContent = 'flex-start';    // Ausrichtung der Elemente
// personElement.style.border = '1px solid #ccc';         // Rahmen
// personElement.style.borderRadius = '16px';            // Abrundung der Ecken
// personElement.style.boxShadow = '4px 4px 10px 10px';   // Schatten
// personElement.style.padding = '10px';                 // Innenabstand
// personElement.style.width = '300px';                  // Breite des Elements
// personElement.style.height = '200px';                 // Höhe des Elements
// personElement.style.textAlign = 'left';               // Textausrichtung

// // 4. Anzeige der Personendaten im HTML-Element
// personElement.innerHTML = person.profil();
//=========================================================
//      Lev1_3_js-vertiefung_this_object-object
//=========================================================
// let personFunction = {
//     fullName: function () {
//         return `${this.vorname} ${this.nachname} `;
//     }
// };
// let personObjekt = {
//     vorname: "Anton",
//     nachname: "Nüssler"
// };

// let anzeigeImHTMLDokument = `<p>${personFunction.fullName.call(personObjekt)}</p>`;
// document.getElementById("person").innerHTML = anzeigeImHTMLDokument;
// //----------------------Style----------------------------- 
// // Zugriff auf das DOM-Element
// let personElement = document.getElementById("person");

// // Styling anwenden
// personElement.style.fontSize = '24px';
// personElement.style.color = '	#353f3a';
//=========================================================
//      Lev1_4_js-vertiefung_this_object-object
// //=========================================================
// function fahrrad() {
//     console.log(this.name);
// }

// let name = "Canyon";
// let obj1 = { name: "Merida", fahrrad: fahrrad };
// let obj2 = { name: "Scott", fahrrad: fahrrad };

// fahrrad();
// obj1.fahrrad();
// obj2.fahrrad();
//=========================================================