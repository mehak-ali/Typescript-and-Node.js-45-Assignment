function makeSandwich(...items : string[]){
    console.log("\nMaking a sandwich with the following items:");

    items.forEach(singleItem => 
        console.log(singleItem)
        
    )
    console.log("\nNow Enjoy Sandwich");
    
    
}
makeSandwich("chicken","Egg")
makeSandwich("Bread","Butter","Cheese")
makeSandwich("chicken","Tomato","Egg","Bread","Butter","cheese","Mayo")