# ForwardEmails
Forward e-mails (the first e-mails of threads) that satisfies the query added, to recipient


We fist need to make a [search query](https://support.google.com/mail/answer/7190) to filter out some [Gmail threads](https://developers.google.com/gmail/api/guides/threads) to forward.

```js
var threads = GmailApp.search('from:(@somecorporation)'); 
```
queries "from:(@somecorporation)"

```js
  for //loop
   (var i = 0; //declare i
   i < threads.length; // till i is less than the count of results of the query
   i++) { // add 1 to i
   var nowThread = threads[i] //next thread
   var nowForward = nowThread.getMessages()[0] //mesage to forward
   nowForward.forward(recipient);  //forwarding
  }
```


### Shared link
https://script.google.com/d/1gTqBFgF8PTaseDCyUUSPo_wEeIo57gtu47DX6yoH3pWsYBQDX3yZ55eJ/edit?usp=sharing

### Acknowledgements
Creation is by Gomesz785 **and** with help by the peope following, otherwise noted.

 * https://stackoverflow.com/questions/62712785/in-gmail-using-google-apps-script-is-it-possible-to-forward-the-translated-ema
  *used as help on structure creating*
 * https://webapps.stackexchange.com/questions/95916/how-can-i-automatically-forward-gmail-emails-when-a-label-is-applied
  *used for majority of the things, mostly, 'threads.length'*
  
  
