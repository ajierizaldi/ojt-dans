const TimeNow = () => {
    if (new Date().getHours() < 12) {
        return 'Selamat Pagi'
    } else if (new Date().getHours() < 15) {
        return 'Selamat Siang'
    } else if (new Date().getHours() < 18) {
        return 'Selamat Sore'
    } else {
        return 'Selamat Malam'
    }
}

export default TimeNow