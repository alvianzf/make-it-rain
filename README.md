# 💸 make-it-rain 💸  
### The Only Money Formatter You'll Ever Need (Probably)  

So, you've finally decided that numbers should look nice? **Wow, groundbreaking.**  
Instead of manually adding commas and dots like a caveman, let **`make-it-rain`** handle the **tough** job of making your numbers **actually readable**.  

## 🚀 Why Use This?  
Because:  
✅ You want your app to look like it knows what money is.  
✅ You're too lazy to format numbers manually (same).  
✅ You finally realized not everyone uses the same thousands separator.  
✅ You enjoy writing `toLocaleString()` 50 times per project? No? Didn’t think so.  

## 📦 Installation  
Oh no, another package to install? **Deal with it.**  
```sh
npm install make-it-rain
```

or if you're feeling edgy:

```sh
yarn add make-it-rain
```
## 🛠️ Usage
Initialize this life-changing formatter once, then flex on your ugly numbers forever.

```js
const makeItRain = require("make-it-rain");

const money = makeItRain("EUR", "."); // Set it and forget it

console.log(money.makeItPretty(1234567.89)); // €1.234.567,89
console.log(money.makeItPretty(99.99)); // €99,99
console.log(money.makeItPretty(1000000)); // €1.000.000,00
```
## 🎩 Features (That Should Have Existed in JavaScript Already)
- One-time setup: Set currency & separator once, use it everywhere.
- Formats numbers beautifully: Because nobody likes reading 1000000.00.
- Handles separators like a champ: Pick , or ., because the world can't agree.
- Errors when you mess up: Because I'm not letting you pass "lol" as a number.

## ❌ What This Won’t Do
- Convert currency: This isn't a forex exchange, buddy.
- Fix your bad financial decisions: Your debt is still your problem.
- Magically make you rich: But hey, your numbers will look expensive.

## 

| Method | Description |
|--------|-------------|
|`makeItRain(currency, separator)` | Initializes the formatter once. Currency = any ISO currency code, separator = `,` or `.` |
| `makeItPretty(amount)` | Takes a number and makes it visually acceptable.|

## 🏆 Contributing
Want to contribute? Cool. Fork it, break it, fix it, and submit a PR.

## 📜 License
MIT – Because I'm not here to sue you.

## ⭐ Pro Tip
Use this package and pretend you’re rich. You’re welcome.

This README will **ensure** your package is taken *seriously* while also making people question their life choices. 