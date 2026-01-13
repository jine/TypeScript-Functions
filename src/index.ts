// Steg 1
// NOTE: Skipping variables for this exercise

// Vanlig funktion, med returtyp
function calculateArea(width: number, height: number): number {
    return width * height;
}
console.log("calculateArea = " + calculateArea(1, 10));

// Arrow function, med returtyp
const calculateAreaArrow = (width: number, height: number): number => {
    return width * height;
};
console.log("calculateAreaArrow = " + calculateAreaArrow(2, 10));

// Arrow function, utan block, med returtyp
const calculateAreaArrow2 = (width: number, height: number): number => width * height;
console.log("calculateAreaArrow2 = " + calculateAreaArrow2(3, 10));

// Anonymous function, med returtyp
const calculateAreaAnonymous = function(width: number, height: number): number {
    return width * height;
};
console.log("calculateAreaAnonymous = " + calculateAreaAnonymous(4, 10));

// Anonymous arrow function, utan returtyp
const calculateAreaTiny = (width: number, height: number) => width * height;
console.log("calculateAreaTiny = " + calculateAreaTiny(5, 10));




// Steg 2

// Funktion med standardvärde och valfri parameter
const greet = (name: string, greeting: string = "Hej", isShouting?: boolean): string => {
    let finalGreeting = `${greeting}, ${name}`;
    if (isShouting) {
        finalGreeting = finalGreeting.toUpperCase();
    }
    return finalGreeting;
}


console.log("Alice: " + greet("Alice"));
console.log("Bob: " + greet("Bob", "God morgon"));
console.log("Charlie: " + greet("Charlie", "Hallå", true));


// Steg 3

// Funktion med union type, som kan ta antingen en sträng eller en array av strängar
const countStrings = (input: string | string[]): number =>  {
    if(Array.isArray(input)) {
        return input.length;
    } else {
        return 1;
    }
}

console.log("Count single string: " + countStrings("Hello"));
console.log("Count string array: " + countStrings(["Hello", "World", "TypeScript"]));



// Steg 4

// Pass by value vs pass by reference
const price: number = 100;
const product: { name: string; price: number } = { name: "Produkten", price: 100 };

const applyDiscount = (p: number, prod: { name: string; price: number }): void => {
    p = 50; // p är en pass by value
    prod.price = 50; // prod skickas som referens
}

applyDiscount(price, product);

console.log("After applyDiscount - price:", price);
console.log("After applyDiscount - product price:", product);




// Steg 5
const shoppingCart: { item: string; quantity: number; pricePerUnit: number }[] = [
    { item: "Trådlösa hörlurar", quantity: 2, pricePerUnit: 1299 },
    { item: "Laddare", quantity: 2, pricePerUnit: 199 },
    { item: "Powerbank", quantity: 1, pricePerUnit: 299 }
];

 // Som objekt, ospecifierat, går att skicka in vilket objekt som helst då
// function calculateTotal(cart: object[]): number {

// Specifierat objekt går bara att skicka in rätt objekt
const calculateTotal = (cart: { item: string; quantity: number; pricePerUnit: number }[]): number => {

    let total = 0;

    for (const product of cart) {
        console.log(`Köper ${product.quantity}st ${product.item} för ${product.pricePerUnit}kr/st (Totalt ${product.quantity * product.pricePerUnit}kr)`);
        total += product.quantity * product.pricePerUnit;
    }

    return total;
}

console.log(`Totalsumma: ${calculateTotal(shoppingCart)}kr`);