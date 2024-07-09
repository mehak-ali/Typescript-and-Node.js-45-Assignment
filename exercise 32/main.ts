let current_users = ["Ali Hassan","Aliyan","Ariba","Arisha","Mehak"]

let new_users =["Asif","Anaya","Ayat","Mehak","aliyan"]

new_users.forEach(new_one_user  =>{
    let our_condition = current_users.some(current_one_user => 
        current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase())
        if(our_condition){
        console.log(`sorry ${new_one_user} is already taken! `);
        
        }else{
            console.log(`This username ${new_one_user} is available! `);
            
        }
}
)

