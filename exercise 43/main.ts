function show_megicians(magicians: string[]){
    magicians.forEach(name => console.log(name)
    
        
    );
}
function make_great(magicians: string[]){
    return magicians.map(name => `The great ${name}`)
}

let megicians_names = ["Ali","Aliyan","Asif"]
let copy_magicians_names = megicians_names.slice()

let copy_great_magicians = make_great(copy_magicians_names)

console.log("\noriginal Array\n");
show_megicians(megicians_names)
console.log("\ncopied Array\n");
console.log(copy_great_magicians);
