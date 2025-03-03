const currencySymbols = require("currency-symbol-map");

class MoneyFormatter {
  constructor(currency = "USD", separator = ",") {
    if (![".", ","].includes(separator)) {
      throw new Error("Separator must be either ',' or '.' — not whatever creative mess you just passed.");
    }

    this.currency = currency;
    this.separator = separator;
    this.formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    });
  }

  makeItPretty(amount) {
    if (typeof amount !== "number") {
      throw new Error("Oh, so now we're formatting non-numbers? Try again with an actual number.");
    }

    let formatted = this.formatter.format(amount);

    if (this.separator === ".") {
      formatted = formatted.replace(/,/g, ".").replace(/\./g, ",");
    }

    return formatted;
  }
}

let instance = null;

function makeItRain(currency = "USD", separator = ",") {
  if (!instance) {
    instance = new MoneyFormatter(currency, separator);
  }
  return instance;
}

module.exports = makeItRain;
