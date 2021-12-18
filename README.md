# ForwardEmails
Forward e-mails (the first e-mails of threads) that satisfies the query added, to recipient(s).

```js
var threads = GmailApp.search('from:(@somecorporation)'); // queries "from:(@somecorporation)"
```
Performs a [search query](https://support.google.com/mail/answer/7190) to filter [Gmail threads](https://developers.google.com/gmail/api/guides/threads) that we want; Replace `from:(@somecorporation)` if wanted.

```js
for 
   (var i = 0; //declare i
   i < threads.length; // till i is less than threads.lenghth
   i++) { // add 1 to i
```
Declares `i` as 0; a for loop that will run `threads.lenghth` (count of `threads` ) and increment `i` by 1.

```js
var nowThread = threads[i] 
```
Declares `nowThread` as the `i`th thread (*first thread at the time when the loop starts*) of the `threads`.

```js
var nowForward = nowThread.getMessages()[0]
```
Declares `nowForward` as the 0th index of the `.getMessages` method done on `nowThread`.



### Shared link
https://script.google.com/d/1gTqBFgF8PTaseDCyUUSPo_wEeIo57gtu47DX6yoH3pWsYBQDX3yZ55eJ/edit?usp=sharing

### Acknowledgements
Creation is by Gomesz785 **and** with help by the peope following, otherwise noted.

 * https://stackoverflow.com/questions/62712785/in-gmail-using-google-apps-script-is-it-possible-to-forward-the-translated-ema
  *used as help on structure creating*
 * https://webapps.stackexchange.com/questions/95916/how-can-i-automatically-forward-gmail-emails-when-a-label-is-applied
  *used for majority of the things, mostly, 'threads.length'*
