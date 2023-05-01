// this is main array
let friendsNmae=['zeaul','karim','rasif','rakib','takmim']
console.log(friendsNmae)

// change tha name with this array
friendsNmae[2]='rahim';
console.log(friendsNmae)


// find the posigtion with this name
let posigtion=friendsNmae.indexOf('rakib')
console.log(posigtion)


// add the last element  
friendsNmae.push('rajib')
console.log(friendsNmae)

// add the first element 
friendsNmae.unshift('zehad')
console.log(friendsNmae);

//remove the first element with this array  
friendsNmae.shift('zehad')
console.log(friendsNmae);

//remove the last element with this array  
friendsNmae.pop('zehad')
console.log(friendsNmae);

// array slice

let names=['khan','ban','dan','gan','bannan','halan']
let partSlice=names.slice(2,5);
// console.log(partSlice);
names.splice(2, 0, "don", "bon");
console.log(names)
