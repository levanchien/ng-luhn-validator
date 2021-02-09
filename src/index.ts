export function checkCreditCard(str: string): boolean {
    if (!str) {
        str = '';
    }
    str = str.toString();
    str = str.replace(/\D/g, '');

    let isEven = false;
    let sum = 0;
    for (let i = str.length - 1; i >= 0; i -= 1) {
        let num = Number.parseInt(str[i], 10);
        if (isEven) {
            num *= 2;
            num = num > 9 ? (num - 9) : num;
        }
        sum += num 
        isEven = !isEven;
    }
    return sum % 10 === 0;
}