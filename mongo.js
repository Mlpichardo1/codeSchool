// LESSON 1
// Open source NoSQL database// Mongo stands for Humongous
// Database Document Oriented
// Mongo is a group of collections



























//  LESSON 5 Detecting Damage
db.wands.aggregate([{"$group": {"_id": "$damage.magic", "wand_count": {"$sum": 1}}}])

// how much it would cost to buy all the wands for each vendor
db.wands.aggregate([{"$group": {"_id": "$maker", "total_cost": {"$sum": "$price"}}}])

// Buyers Guide
db.wands.aggregate([{"$group": {"_id": "$maker", 
                                "total_wands": {"$sum": 1}, 
                                "max_magic": {"$max": "$damage.magic"}, 
                                "lowest_price": {"$min": "$price"}
                               }}])
// Lower Level
db.wands.aggregate([{"$match": {"powers": "Air Bolt"}},
                   {"$group": {"_id": "$maker", "lowest_level": {"$min": "$level_required"} }}
                    ])
// Averages
db.wands.aggregate([
  {"$match": {"price": {"$lt": 50}}},
  {"$group": {"_id": "$maker", "average_magic": {"$avg": "$damage.magic"}}},
  {"$match": {"average_magic": {"$gt": 40}}}
])

// Decisions.....MAKERs
db.wands.aggregate([
  {"$match": {"level_required": {"$lte": 5}}},
  {"$project": {"maker": true, "damage.magic": true, "_id": false}},
  {"$group": {"_id": "$maker", "max_damage": {"$max": "$damage.magic"}}},
  {"$sort": {"max_damage": -1}},
  {"$limit": 4}
])