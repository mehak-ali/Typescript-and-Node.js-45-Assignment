function show_megicians(magicians) {
    magicians.forEach(function (name) {
        console.log(name);
    });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var megicians_names = ["Ali", "Aliyan", "Asif"];
//let great_magicians = make_great(megicians_names)
//show_megicians(great_magicians)
