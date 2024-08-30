//find database
db.movies.find();

// find specific data
db.movies.find({ year: 2018 });

db.movies.find({ title: "Dune" });
db.movies.find({ title: "Avatar" });

//Specify Conditions Using Query Operators
db.movies.find({ rated: { $in: ["PG", "PG-13"] } });
db.movies.find({ year: { $in: [2018, 2023] } });
db.movies.find({ year: { $in: [2018, 2020] } });

//Specify Logical Operators (AND)
db.movies.find({ countries: "Mexico", "imdb.rating": { $gte: 7 } });
db.movies.find({ cast: "Tom Hardy", runtime: { $gte: 121 } });
db.movies.find({ cast: "Tom Hardy", runtime: { $gte: 120 } });
db.movies.find({ cast: "Leonardo DiCaprio", runtime: { $gte: 100 } });

//Specify Logical Operators (OR)
db.movies.find({
  runtime: 122,
  $or: [{ year: { $gte: 2019 } }, { genres: "Drama" }],
});



// Social-User

//find database
db.users.find();

// find specific data
db.users.find({ Email: "Elsa2@yahoo.com" });

//Specify Conditions Using Query Operators
db.users.find({
  avatar: {
    $in: [
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5…",
    ],
  },
});
db.users.find({ PhoneNumber: { $in: ["291-342-4783", "820-466-3490"] } });

//Specify Logical Operators (AND)
db.users.find({
  name: "Tommy Miller",
  createdAt: { $gte: "2024-08-22T16:57:52.703Z" },
});

//Specify Logical Operators (OR)
db.users.find({
  createdAt: "2024-08-22T16:57:52.703Z",
  $or: [{ id: { $gte: 5 } }, { genres: "avatar" }],
});

//count + find
db.movies.find().count();

//data limit with find
db.movies.find().limit(5);

//show all data
db.movies.find().toArray();
