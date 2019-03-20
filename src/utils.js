import dateFormat from 'dateformat';

export function parseDate(date) {
    return {
        ymd: dateFormat(date, 'yyyy-mm-dd'),
        time: dateFormat(date, 'H:MM:ss')
    }
}
