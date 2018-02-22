//Write the command that will find all monsters with an attack lower than 10
var mongo = function(db){ 
    db.monsters.find({
        "stats.attack": {"$lt": 10}})
};

//Write the command that will find all monsters with a level above 5 but below 15 inclusive
db.monsters.find({
"Level": {"$gt": 5, "$lt": 15}})

//Write the command to find monsters that do not have the “bite” attack.
db.monsters.find({
"attacks.bite": false})

//Write the command to find monsters with levels less than 6 but only return the name, level and health attributes
db.monsters.find({
"Level": {"$lt": 6}, 
"type": false, "attacks": false, "stats": false, "style": false})

//Write the command to find all monsters who attack is between 10 and 20 but do not include the monsters health or style
db.monsters.find({
"stats.attack": {"$gt": 10, "$lt": 20}, 
"healt": false, "style": false})

//Write the command to find out how many monsters are in the collection.
db.monsters.find().count()

//Write the command to sort the collection by the monsters level with the highest level at the top and the lowest at the bottom
db.monsters.find().sort({"Level": -1})