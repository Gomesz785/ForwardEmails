//Creation is by VScode fanboy **and** with help by the peope at the end, otherwise noted.

function autoForward() {
  
  var recipient = 'somebody@somebody.server';
  var interval = 180;          //  if the script runs every 5 minutes; change otherwise
  var date = new Date();
  var timeFrom = Math.floor(date.valueOf()/1000) - 60 * interval;
  var threads = GmailApp.search('from:(@somecorporation)');
  for 
   (var i = 0;
   i < threads.length;
   i++) {
    var nowThread = threads[i]
    var nowForward = nowThread.getMessages()[0]
    nowForward.forward(recipient);  // only the 1st message
  }
}


autoForward()

/*
https://stackoverflow.com/questions/62712785/in-gmail-using-google-apps-script-is-it-possible-to-forward-the-translated-ema; for help to structure creating
https://webapps.stackexchange.com/questions/95916/how-can-i-automatically-forward-gmail-emails-when-a-label-is-applied;
for majority of the things, mostly, 'threads.length'
*/
