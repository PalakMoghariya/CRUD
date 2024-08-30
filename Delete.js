//for Delete Database

//delete first document
db.teachers.deleteOne({school_name:"XYZ High School"})

//delete all selected document
db.teachers.deleteMany({school_name:"XYZ High School"})

//clear data from collection
db.teachers.deleteMany({})