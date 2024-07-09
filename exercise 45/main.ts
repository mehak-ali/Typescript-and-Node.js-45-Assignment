function Create_car(manufacturer, model,...options){
    let car ={
        manufacturer:manufacturer,
        model:model,

    }
    options.forEach(option => {
        let [Key,value]=option.split(":")
        car[Key.trim()]= value.trim()
    }) 
return car
}
let my_car = Create_car("Toyota","corolla","color:Black","Sunroof:true")
console.log(my_car);
