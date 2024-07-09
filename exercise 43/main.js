function show_megicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var megicians_names = ["Ali", "Aliyan", "Asif"];
var copy_magicians_names = megicians_names.slice();
var copy_great_magicians = make_great(copy_magicians_names);
console.log("\noriginal Array\n");
show_megicians(megicians_names);
console.log("\ncopied Array\n");
console.log(copy_great_magicians);
