//update method
db.movies.updateOne(
  { filter },
  { set: { updateData }, $currentDate: { lastUpdated: true } }
);

db.movies.updateOne(
  { title: "Twilight" },
  {
    $set: {
      plot: "A teenage girl risks everything–including her life–when she falls in love with a vampire.",
    },
    $currentDate: { lastUpdated: true },
  }
);

db.movies.updateMany(
  { rated: "PG-13" },
  {
    $set: {
      Meaning:
        "PG-13 movies are deemed suitable for viewers aged 13 and older, with some material that may be inappropriate for younger children.",
    },
    $currentDate: { lastUpdated: true },
  }
);
