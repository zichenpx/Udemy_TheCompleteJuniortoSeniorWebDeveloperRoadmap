const googleSearch = require("./script.js");

dbMock = [
  "dog.com",
  "cheerepuff.com",
  "disney.com",
  "dogpictures.com"
]

describe("googleSearch", () => {
  
  it("it a silly test", () => {
    expect("hello").toBe("hello")
  })
  
  it("is searching google", () => {
    
    expect(googleSearch("testest", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual([ "dog.com", "dogpictures.com" ]);
    expect(googleSearch("cat", dbMock)).toEqual([]);
  })

  it("working with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  })

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  })

  it("contain", () => {
    // https://jestjs.io/docs/using-matchers#arrays-and-iterables
    expect(dbMock).toContain("dog.com");
  })
})
