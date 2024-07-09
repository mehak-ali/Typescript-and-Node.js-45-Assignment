let guestlist=['mehak','areeba','fazila','hira']

//person who did'nt come
let dontcome =  guestlist[0]

console.log(dontcome, 'nahi aa saktii')

//remove old guest and add old guest
guestlist.splice(0, 1,'aliza');

guestlist.forEach(guest => console.log(`salam ${guest},  would you like to dinner with me?`))
