const input = require('sync-input');

function main() {
    const oneUSD = {
        USD: 1,
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        GBP: 0.75
    }
    console.log("Welcome to Currency Converter!");
    for (const [currency, rate] of Object.entries(oneUSD)) {
        console.log(`1 USD equals ${rate} ${currency}`);
    }

    doConversion(oneUSD);
}


function getCurrency(oneUSD, prompt) {
    const currency = input(prompt).toUpperCase();
    if (!Object.keys(oneUSD).includes(currency)) {
        console.log("Unknown currency");
        return
    }

    return currency.toUpperCase();
}


function doConversion(oneUSD) {
    console.log("What do you want to convert?");
    const from = getCurrency(oneUSD, "From: ");
    if (!from) {
        return
    }
    const to = getCurrency(oneUSD, "To: ");
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

    console.log(`Result: ${amount} ${from} equals ${calculateConversion(oneUSD, from, to, amount)} ${to}`);
}


function calculateConversion(oneUSD, from, to, amount) {
    return ((oneUSD[to] / oneUSD[from]) * amount).toFixed(4);
}

main();