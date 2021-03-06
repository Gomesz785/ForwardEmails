# ForwardEmails
Forward e-mails (the first e-mails of threads) that satisfies the query added, to recipient(s).

```js
var threads = GmailApp.search('from:(@somecorporation)'); // queries "from:(@somecorporation)"
```
Performs a [search query](https://support.google.com/mail/answer/7190)([reference](https://developers.google.com/gmail/api/v1/reference/users/threads)) to filter [Gmail threads](https://developers.google.com/gmail/api/guides/threads) that we want; Replace `from:(@somecorporation)` if wanted.

```js
for 
   (var i = 0; //declare i
   i < threads.length; // till i is less than threads.lenghth
   i++) { // add 1 to i
```
Declares `i` as 0; a for loop that will run `threads.lenghth` (count of `threads`) and increment `i` by 1.

```js
var nowThread = threads[i] 
```
Declares `nowThread` as the `i`th thread (*first thread at the time when the loop starts*) of the `threads`.

```js
var nowForward = nowThread.getMessages()[0]
```
Declares `nowForward` as the 0th index of the `.getMessages` method done on `nowThread`.

```js
nowForward.forward(recipient)
```
Forwards the message `nowForward`.

###  Notes
This was done as a hybrid way of coding, meaning that for some parts: I used my learned stuff, and the documentation, and the others: Copied directly and modified, then learned about them. Also,  used this to showcase how I will explain things (in the README.md).


### Shared link
https://script.google.com/d/1gTqBFgF8PTaseDCyUUSPo_wEeIo57gtu47DX6yoH3pWsYBQDX3yZ55eJ/edit?usp=sharing

### Acknowledgements
Creation is by Gomesz785 **and** with help by the people following, otherwise noted.

 * https://stackoverflow.com/questions/62712785/in-gmail-using-google-apps-script-is-it-possible-to-forward-the-translated-ema
  *used as help on structure creating*
 * https://webapps.stackexchange.com/questions/95916/how-can-i-automatically-forward-gmail-emails-when-a-label-is-applied
  *used for the majority of the things, mostly, 'threads.length'*
