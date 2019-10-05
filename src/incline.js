// Функция для склонения (изменения падежа и числа) имён существительных в зависимости от их количества.
export default function (count, forms) {
    const cases = [2, 0, 1, 1, 1, 2];
    return forms[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[(count % 10 < 5) ? count % 10 : 5]];
}
