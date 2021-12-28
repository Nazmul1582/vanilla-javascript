const digitalClock = () => {
    let showTime = document.querySelector('#showTime');
    const date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormat = 'AM';
    
    if(hours == 0){
        hours = 12
    }else if(hours > 12){
        hours = hours - 12;
        timeFormat = 'PM'
    }else if( hours == 12){
        timeFormat = "PM"
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    let time = `${hours}:${minutes}:${seconds} `+ timeFormat;
    showTime.innerText = time;

    setInterval(digitalClock, 1000);
}

digitalClock()