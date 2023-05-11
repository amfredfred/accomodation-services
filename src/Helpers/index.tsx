import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const mean = (arr: number[] = []): number => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) total += arr[i];
    return (total / arr.length) ?? 0;
}

export const timeFrom = (from: number, to?: number) => dayjs(to ?? Date.now()).to(from)
export const toLocalTime = (time: number | Date | string) => new Date(time).toLocaleTimeString()
export const sub = (num0: number, num1: number) => (num0 - num1)
export const add = (num0: number, num1: number) => (num0 + num1)
export const mul = (num0: number, num1: number) => (num0 * num1)
export const div = (num0: number, num1: number) => (num0 / num1)
export const sum = (num: number[] = [0]) => num?.reduce((prev: number, current: number) => add(prev, current))


export const wait = /*@devfred*/ async (seconds?: number) => new Promise((resolved) => setTimeout(() => resolved('continue'), seconds || 1000))

export const timeLocal = (time: Date | string | number) => {
    if (!time) return '---'
    const _time = new Date(time).getTime()
    const _validity = new Date(_time).toISOString()
    const _month_day_time =
        _validity.slice(8, 10) // Day
            .concat(_validity.slice(4, 8)) //8 // Month
            .concat(_validity.slice(0, 4)) //Year
            .concat(', ')
            .concat(_validity.slice(12, 19))
    return _month_day_time
}
export const timeLocalDate = (time: Date | string | number) => {
    if (!time) return '---'
    const _time = new Date(time).getTime()
    const _validity = new Date(_time).toISOString()
    const _month_day_time =
        _validity.slice(8, 10) // Day
            .concat(_validity.slice(4, 8)) //8 // Month
            .concat(_validity.slice(0, 4)) //Year
    // .concat(', ')
    // .concat(_validity.slice(12, 19))
    return _month_day_time
}

export const sumCosts = (from: any, to: any, price: any) => {
    let subT = sub(new Date(from).getTime(), new Date(to as any).getTime())
    const subTotal = mul(Math.ceil(div(subT, (1000 * 3600 * 24))), price)
    return { subTotal, subT }
}

export const getLocale = () => window.navigator.language
export const fmtNumCompact = (val: number | string): string => Intl.NumberFormat(getLocale(),).format(Number(val))
// { notation: "compact" }