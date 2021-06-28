export function date(){
    let text = '';
    let date = new Date();
    let hr = date.getHours()
    if (hr < 12) {
        return text = 'Buongiorno'
    } else if (hr > 12 && hr < 18) {
        return text = 'Buon pomeriggio'
    } else {
        return text = 'Buonasera'
    }
}

