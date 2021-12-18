//Creation is by VScode fanboy **and** with help by the peope at the end, otherwise noted.

function autoForward() {
  var threads = GmailApp.search('from:(@somecorporation)'); // queries "from:(@somecorporation)"
  for //loop
   (var i = 0; //declare i
   i < threads.length; // till i is less than the count of results of the query
   i++) { // add 1 to i
    var nowThread = threads[i] //next thread
    var nowForward = nowThread.getMessages()[0] //mesage to forward
    nowForward.forward(recipient);  //forwarding
  }
}


autoForward() //run

/*
https://stackoverflow.com/questions/62712785/in-gmail-using-google-apps-script-is-it-possible-to-forward-the-translated-ema; for help to structure creating
https://webapps.stackexchange.com/questions/95916/how-can-i-automatically-forward-gmail-emails-when-a-label-is-applied;
for majority of the things, mostly, 'threads.length'
*/
