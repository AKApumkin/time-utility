  let theYear;
  let theMonth;
  let theDay;
  let theHour;
  let theMinute;
  let theSeconds;
  let timeNow;

  // get date time in format YYYY-MM-DD HH:MM:SS 
  export function getDateTime(seconds:boolean, miliseconds?:any, getSpecificValue?:any) :string {
      formatDate(miliseconds);
      let secondsString:any = "";
      if(seconds === true){
          secondsString =  " " + theHour + ":" + theMinute + ":" + theSeconds;
      }
      // get specific value
      if(getSpecificValue === "hour") {
        return theHour;
      }else if(getSpecificValue === "minutes") {
        return theMinute;
      }else if(getSpecificValue === "second") {
        return theSeconds;
      }else {
          return theYear + "-" + theMonth + "-" + theDay + secondsString;
      }
  }

  // get date time in format YYYY年 MM月 DD日 HH:MM:SS 
  export function getDateTimeChinese(seconds:boolean, miliseconds?:any) :string {
      formatDate(miliseconds);
      let secondsString:any = "";
      if(seconds === true) {
          secondsString =  " " + theHour + ":" + theMinute + ":" + theSeconds;
      } else {
        return theYear + "年 " + theMonth + "月 " + theDay + "日" + secondsString;
      }
  }

  // get datetime in miliseconds, and change to the begining of the day YYYY-MM-DD 00:00:00 in miliseconds
  export function getDateTimeDayStart(
    standardTime: boolean,
    passTheYear?:any,
    passTheMonth?:any,
    passTheDay?:any) :string {
      formatDate();
      if(passTheYear && passTheMonth && passTheDay) {
          theYear = passTheYear;
          theMonth = passTheMonth;
          theDay = passTheDay;
      }
      let beginning:any = new Date(theYear, theMonth -1, theDay, 0, 0, 0);
      if(standardTime === true) {
          beginning = beginning.getTime();
      }
      return beginning;
  }

  // get datetime in miliseconds for the end of the day
  export function getDateTimeDayEnd(standardTime:boolean, passTheYear?:any, passTheMonth?:any, passTheDay?:any) :string {
      formatDate();
      if(passTheYear && passTheMonth && passTheDay) {
          theYear = passTheYear;
          theMonth = passTheMonth;
          theDay = passTheDay;
      }
      let end:any = new Date(theYear, theMonth -1 , theDay ,23,59,59);
      if(standardTime === true) {
          end = end.getTime();
      }
      return end;
  }
  
  // date format
  function formatDate(miliseconds?:any) {
      let testDate = new Date();
      if(!miliseconds || miliseconds === "" || miliseconds === null) {
          miliseconds = new Date();
      }else if( miliseconds === testDate) {
          // do nothing
      }else {
          miliseconds = new Date(miliseconds);
      }
      let _UT8Offset = 8*60*60000; // UTC + 8 offset
      let _userOffset = miliseconds.getTimezoneOffset()*60000; // user offset
      let _UT8Time:any = new Date(miliseconds.getTime()+_UT8Offset+_userOffset); 

      timeNow = _UT8Time.getTime(); // gets datetime now in miliseconds
      theYear = _UT8Time.getFullYear();
      theMonth = dateIntegrety(_UT8Time.getMonth() + 1);
      theDay = dateIntegrety(_UT8Time.getDate());
      theHour = dateIntegrety(_UT8Time.getHours());
      theMinute = dateIntegrety(_UT8Time.getMinutes());
      theSeconds = dateIntegrety(_UT8Time.getSeconds());
  }
  // ensure the date always returns with a 0 even if the number is less than 10 
  function dateIntegrety(date:any) :string { 
      if(date.toString().length < 2) {
        date = "0" + date;
      }
      return date; 
  }
  
