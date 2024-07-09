function show_megicians(magicians: string[]){
    magicians.forEach(name => {console.log(name);
    
        
    });
}
function make_great(magicians: string[]){
    return magicians.map(name => `The great ${name}`)
}

let megicians_names = ["Ali","Aliyan","Asif"]

//let great_magicians = make_great(megicians_names)
//show_megicians(great_magicians)