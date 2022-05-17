const googleDtabase = [
  "cat.com",
  "souprecipres.com",
  "flowers.com",
  "animals.com",
  "catpicture.com",
  "mygavouritecats.com"
  // "dog.com",
  // "cheerepuff.com",
  // "disney.com",
  // "dogpictures.com"
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput);
  })
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch("cat", googleDtabase));
// console.log(googleSearch("dog", googleDtabase));
// console.log(googleSearch("soup", googleDtabase));

module.exports = googleSearch;