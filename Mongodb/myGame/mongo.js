// Create a function that accepts the 4 attributes plus a 5th variable called db. This variable would reference the mongodb like in the shell. 
var mongo = function(db){ 
    db.monsters.instert
        ({"name": "Onyx", 
        "health": 180, 
        "last fought": "Dec 22, 2017", 
        "attacks": ["bind", "boulder", "guard"], 
        "db": "mongo"
})
};

    
    //Write the javascript code that would insert the four attributes into the “monster” collection as a new document.
db.monsters.instert({ "name": "Pikachu", "health": 115, 
    "last fought": "Dec 27, 2017", 
    "attacks": ["shock ", "tackle", "whip"], 
    "stats": {"attack": 22, "defense": 15}})
    
 // Write the code that would then console.log all the documents inside the collection.  
   console.log(db.monsters.find());
   
  //Write the command that will find your monster based on a name
  db.monsters.find({"name": "Pikachu"})
  
  