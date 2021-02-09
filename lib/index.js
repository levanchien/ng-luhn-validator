"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCreditCard = void 0;
function checkCreditCard(str) {
    if (!str) {
        str = '';
    }
    str = str.toString();
    str = str.replace(/\D/g, '');
    var isEven = false;
    var sum = 0;
    for (var i = str.length - 1; i >= 0; i -= 1) {
        var num = Number.parseInt(str[i], 10);
        if (isEven) {
            num *= 2;
            num = num > 9 ? (num - 9) : num;
        }
        sum += num;
        isEven = !isEven;
    }
    return sum % 10 === 0;
}
exports.checkCreditCard = checkCreditCard;
