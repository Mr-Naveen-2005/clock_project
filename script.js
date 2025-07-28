
function updatedate(){
    /*function to get current time and date*/
    const now=new Date(); 
    /* functions to get the hour,minutes,second  from the Date()*/
    let hour=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();
    let da=now.getDate();
    let mo=now.getMonth();
    let ye=now.getFullYear();
    let ampm;
    let y=now.getDay();
    /* padding the seconds,month,mintues*/
    if (sec<10){
        sec='0'+sec;
    }
    if(min<10){
        min='0'+min;
    }
    if (mo<10){
        mo=mo+1;
        mo='0'+mo;
    }
    /*for find am or pm and convert 24 hour into 12 hour format*/
  
    if(hour>12){
        ampm="PM";
        hour=hour%12;
        hour='0'+hour;
    }
    else if(hour==12){
        ampm="PM";
    }
   else {
        ampm='AM';
    }

    let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let f =days[y-1];
    /*to put the values got from the Date() in the time format*/
    const  timestring = `${hour}:${min}:${sec} ${ampm}`;
    const  datestring=`${da}/${mo}/${ye} ${f}`;
    /* to add the formated string for time and date by its id*/
    document.getElementById('date').innerText=datestring;
    document.getElementById('time').innerText= timestring;
}


/*to call the function to update the time every second*/
setInterval(updatedate,1000);

/*calling the function*/

updatedate();