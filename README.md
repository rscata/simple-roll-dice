# Simple Roll Dice

A simple dice rolling library

# Install
```
npm i simple-roll-dice
```

# Usage

```javascript
const DiceMod = require("simple-roll-dice");
let diceMod = new DiceMod.DiceMod();
console.log(diceMod.roll("2d6"));
```

## roll parameter, example (`2d6`)

 - 2 - number of dice
 - 6 - number of faces

Will return dice, and their sum.