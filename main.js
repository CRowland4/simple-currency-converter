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

    console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
    doConversion(oneUSD);

}


function doConversion(oneUSD) {
    console.log("Type the currency you wish to convert: USD");
    const to = input("To: ").toUpperCase();
    if (!Object.keys(oneUSD).includes(to)) {
        console.log("Unknown currency");
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

    console.log(`Result: ${amount} USD equals ${(oneUSD[to] * amount).toFixed(4)} ${to}`);
}


main();

