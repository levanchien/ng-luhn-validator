# ng-luhn-validator

[Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) for typescript

# Installation

```bash
npm i ng-luhn-validator
```

## Usage
```typescript
import { luhnValidate } from 'ng-luhn-validator';

luhnValidate('1234567890123456'); // return false
luhnValidate('5233756540063299'); // return true
```