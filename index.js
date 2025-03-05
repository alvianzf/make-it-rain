const currencySymbols = require("currency-symbol-map");

class MoneyFormatter {
  constructor(currency = "USD", separator = ",", useSymbol = true) {
    if (![".", ","].includes(separator)) {
      throw new Error("Separator must be either ',' or '.' — not whatever creative mess you just passed.");
    }

    this.currency = currency;
    this.separator = separator;
    this.useSymbol = useSymbol;
    this.fixIt();
  }

  fixIt() {
    this.formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: this.currency,
      minimumFractionDigits: 2,
    });
  }

  swapMoney(newCurrency) {
    if (typeof newCurrency !== "string" || newCurrency.length !== 3) {
      throw new Error("Nice try. Use a real 3-letter currency code.");
    }
    this.currency = newCurrency.toUpperCase();
    this.fixIt();
  }

  useWhat(symbol = true) {
    this.useSymbol = symbol;
  }

  makeItPretty(amount) {
    if (typeof amount !== "number") {
      throw new Error("Oh, so now we're formatting non-numbers? Genius.");
    }

    let formatted = this.formatter.format(amount);

    if (this.separator === ".") {
      formatted = formatted.replace(/,/g, ".").replace(/\./g, ",");
    }

    if (!this.useSymbol) {
      let symbol = currencySymbols.getSymbol(this.currency) || "";
      formatted = formatted.replace(symbol, this.currency);
    }

    return formatted;
  }

  whatNow() {
    return this.currency;
  }
}

let instance = null;

function makeItRain(currency = "USD", separator = ",", useSymbol = true) {
  if (!instance) {
    instance = new MoneyFormatter(currency, separator, useSymbol);
  }
  return instance;
}

module.exports = makeItRain;
