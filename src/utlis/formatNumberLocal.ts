export function formatNumberLocal(number: number) {
    return number.toLocaleString('ru-RU', { maximumFractionDigits: 0 })
}