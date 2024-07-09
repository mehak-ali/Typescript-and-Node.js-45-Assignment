var guestlist = ['mehak', 'areeba', 'fazila', 'hira'];
//person who did'nt come
var dontcome = guestlist[0];
console.log(dontcome, 'nahi aa saktii');
//remove old guest and add old guest
guestlist.splice(0, 1, 'aliza');
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ",  would you like to dinner with me?")); });
