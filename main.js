const input = require('sync-input');
const oneUSD = {
        USD: 1,
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        GBP: 0.75
    }

function main() {
    console.log("Welcome to Currency Converter!");
    for (const [currency, rate] of Object.entries(oneUSD)) {
        console.log(`1 USD equals ${rate} ${currency}`);
    }

    while (true) {
        console.log("What do you want to do?");
        console.log("1-Convert currencies 2-Exit program");
        let action = input();

        if (action === "1") {
            doConversion();
        } else if (action === "2") {
            console.log("Have a nice day!");
            return
        } else {
            console.log("Unknown input");
        }

    }
}


function getCurrency(prompt) {
    const currency = input(prompt).toUpperCase();
    if (!Object.keys(oneUSD).includes(currency)) {
        console.log("Unknown currency");
        return
    }

    return currency.toUpperCase();
}


function doConversion() {
    console.log("What do you want to convert?");
    const from = getCurrency("From: ");
    if (!from) {
        return
    }
    const to = getCurrency("To: ");
    if (!to) {
        return
    }

    const amount = input("Amount: ");
    if (amount < 1) {
        console.log("The amount cannot be less than 1");
        return
    } else if (isNaN(Number(amount))) {
        console.log("The amount has to be a number");
        return
    }

    console.log(`Result: ${amount} ${from} equals ${calculateConversion(from, to, amount)} ${to}`);
}


function calculateConversion(from, to, amount) {
    return ((oneUSD[to] / oneUSD[from]) * amount).toFixed(4);
}

main();