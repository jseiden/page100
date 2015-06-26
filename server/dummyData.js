"use strict";
// var User = require("./../server/User/userModel.js");
var Book = require("./../server/Book/bookModel.js");

module.exports = function() {
 function errorHandler(err) {
    if (err) {
      console.log("error saving to db");
      console.log(err);
    }
  }

  var book5 = new Book({
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "drama",
    sample: "'Oh! She is the most beautiful creature I ever beheld! But there is one of her sisters sitting down just behind you, who is very pretty, and I dare say very agreeable. Do let me ask my partner to introduce you.'",
    amazonLink: "http://www.amazon.com/Pride-Prejudice-Dover-Thrift-Editions/dp/0486284735",
    image: "https://ia600802.us.archive.org/zipview.php?zip=/4/items/olcovers676/olcovers676-L.zip&file=6765535-L.jpg"
  });

  var book6 = newBook({
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    genre: "fantasy",
    sample: "Just then she heard something splashing about in the pool a little way off, and she swam nearer to make out what it was: at first she thought it must be a walrus or hippopotamus, but then she remembered how small she was now, and she soon made out that it was only a mouse that had slipped in like herself.",
    amazonLink: "http://www.amazon.com/Alices-Adventures-Wonderland-Lewis-Carroll/dp/1503222683/ref=sr_1_2?s=books&ie=UTF8&qid=1435218587&sr=1-2&keywords=alice%27s+adventures+in+wonderland",
    image: "https://ia700804.us.archive.org/zipview.php?zip=/30/items/olcovers712/olcovers712-L.zip&file=7129396-L.jpg"
  });

  var book7 = newBook({
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Drama",
    sample: "'It is only shallow people who do not judge by appearances. The true mystery of the world is the visible, not the invisible.... Yes, Mr. Gray, the gods have been good to you.  But what the gods give they quickly take away.  You have only a few years in which to live really, perfectly, and fully.'",
    amazonLink: "http://www.amazon.com/Picture-Dorian-Dover-Thrift-Editions/dp/0486278077/ref=sr_1_1?s=books&ie=UTF8&qid=1435218802&sr=1-1&keywords=the+picture+of+dorian+gray&pebp=1435218804665&perid=1CTK2MH2MZ732RGA437Q",
    image: "https://ia700805.us.archive.org/zipview.php?zip=/7/items/olcovers381/olcovers381-L.zip&file=3815998-L.jpg"
  });

  var book8 = newBook({
    title: "Dracula",
    author: "Bram Stroker",
    genre: "Horror",
    sample: "Hitherto I had noticed the backs of his hands as they lay on his knees in the firelight, and they had seemed rather white and fine; but seeing them now close to me, I could not but notice that they were rather coarse--broad, with squat fingers. Strange to say, there were hairs in the centre of the palm. The nails were long and fine, and cut to a sharp point.",
    amazonLink: "http://www.amazon.com/Dracula-Bram-Stoker/dp/1503261387/ref=sr_1_1?s=books&ie=UTF8&qid=1435218866&sr=1-1&keywords=dracula&pebp=1435218868922&perid=0STY5HMYFFXH29XD17WC",
    image: "https://ia700801.us.archive.org/zipview.php?zip=/34/items/olcovers126/olcovers126-L.zip&file=1260405-L.jpg"
  });

  var book9 = newBook({
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    sample: "Holmes dashed into the crowd to protect the lady; but just as he reached her he gave a cry and dropped to the ground, with the blood running freely down his face.",
    amazonLink: "http://www.amazon.com/Adventures-Sherlock-Holmes-Arthur-Conan/dp/150860102X/ref=sr_1_2?s=books&ie=UTF8&qid=1435219095&sr=1-2&keywords=the+adventures+of+sherlock+holmes",
    image: "http://www.penguinbooksindia.com/sites/default/files/book_image/9780143068600.jpg"
  });

  var book10 = newBook({
    title: "Metamorphosis",
    author: "Franz Kafka",
    genre: "Modernism",
    sample: "Gregor soon had the opportunity to test the strength of his decisions, as early the next morning, almost before the night had ended, his sister, nearly fully dressed, opened the door from the front room and looked anxiously in.",
    amazonLink: "http://www.amazon.com/The-Metamorphosis-Franz-Kafka/dp/1494312697",
    image: "https://ia700801.us.archive.org/zipview.php?zip=/34/items/olcovers126/olcovers126-L.zip&file=1260251-L.jpg"
  });

  var book11 = newBook({
    title: "Ulysses",
    author: "James Joyce",
    genre: "Modernism",
    sample: "He walked off quickly round the parapet. Stephen stood at his post, gazing over the calm sea towards the headland. Sea and headland now grew dim. Pulses were beating in his eyes, veiling their sight, and he felt the fever of his cheeks.",
    amazonLink: "http://www.amazon.com/Ulysses-James-Joyce/dp/1494405490/ref=sr_1_1?s=books&ie=UTF8&qid=1435219374&sr=1-1&keywords=ulysses&pebp=1435219376183&perid=0VQ77RPYQRHG24MAV1JV",
    image: "https://covers.openlibrary.org/b/id/7335145-L.jpg"
  });

  var book12 = newBook({
    title: "The Jungle Book",
    author: "Rudyard Kipling",
    genre: "Children",
    sample: "The whine had changed to a sort of humming purr that seemed to come from every quarter of the compass. It was the noise that bewilders woodcutters and gypsies sleeping in the open, and makes them run sometimes into the very mouth of the tiger.",
    amazonLink: "http://www.amazon.com/Jungle-Book-Rudyard-Kipling/dp/1503332543/ref=sr_1_1?s=books&ie=UTF8&qid=1435219586&sr=1-1&keywords=kipling+jungle+book&pebp=1435219587480&perid=0B71CG6TJNKXDJ57AHSS",
    image: "https://ia700807.us.archive.org/zipview.php?zip=/24/items/olcovers202/olcovers202-L.zip&file=2026223-L.jpg"
  });

  var book13 = newBook({
    title: "Heart of Darkness",
    author: "Joseph Conrad",
    genre: "Drama",
    sample: "The young fellow by my side growled. The pilgrims murmured at my back. She looked at us all as if her life had depended upon the unswerving steadiness of her glance.",
    amazonLink: "http://www.amazon.com/Heart-Darkness-Joseph-Conrad/dp/1503275922/ref=sr_1_1?s=books&ie=UTF8&qid=1435219771&sr=1-1&keywords=heart+of+darkness&pebp=1435219772690&perid=0PFMXW2274RMS86F3QG9",
    image: "https://ia700801.us.archive.org/zipview.php?zip=/4/items/olcovers302/olcovers302-L.zip&file=3025007-L.jpg"
  });

  var book14 = newBook({
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    genre: "American Literature",
    sample: "The wine was red wine, and had stained the ground of the narrow street in the suburb of Saint Antoine, in Paris, where it was spilled. It had stained many hands, too, and many faces, and many naked feet, and many wooden shoes.",
    amazonLink: "http://www.amazon.com/Tale-Cities-Dover-Thrift-Editions/dp/0486406512",
    image: "https://covers.openlibrary.org/b/id/7350922-L.jpg"
  });

  var book15 = new Book({
    title: "The Iliad",
    author: "Homer",
    genre: "Classics",
    sample: "The thunderer spoke, nor durst the queen reply; A reverent horror silenced all the sky. The feast disturb'd, with sorrow Vulcan saw His mother menaced, and the gods in awe;",
    amazonLink: "http://www.amazon.com/Iliad-Penguin-Classics-Deluxe-Edition/dp/0140275363",
    image: "https://ia800308.us.archive.org/zipview.php?zip=/34/items/olcovers40/olcovers40-L.zip&file=401279-L.jpg"
  });

  var book16 = new Book({
    title: "Les Misérables",
    author: "Victor Hugo",
    genre: "French <Historical></Historical>",
    sample: "The Bishop stepped forward. At the sound which he made in walking, the old man turned his head, and his face expressed the sum total of the surprise which a man can still feel after a long life",
    amazonLink: "http://www.amazon.com/Miserables-Signet-Classics-Victor-Hugo/dp/045141943X/ref=sr_1_2?s=books&ie=UTF8&qid=1435311415&sr=1-2&keywords=les+mis",
    image: "https://ia700802.us.archive.org/zipview.php?zip=/2/items/olcovers86/olcovers86-L.zip&file=869658-L.jpg"
  });

  var book17 = new Book({
    title: "Leaves of Grass",
    author: "Walt Whitman",
    genre: "Poetry",
    sample: "Come, said my soul,\nSuch verses for my Body let us write, (for we are one,)\nThat should I after return,",
    amazonLink: "http://www.amazon.com/Leaves-Grass-Original-Edition-Editions/dp/0486456765",
    image: "http://www.writeawriting.com/wp-content/uploads/2011/04/Why-did-wlat-whitman-write-Leaves-of-Grass.jpg"
  });

  var book18 = new Book({
    title: "Dubliners",
    author: "James Joyce",
    genre: "Short Story",
    sample: "The next morning after breakfast I went down to look at the little house in Great Britain Street. It was an unassuming shop, registered under the vague name of Drapery. ",
    amazonLink: "http://www.amazon.com/Dubliners-Dover-Thrift-Editions-James/dp/0486268705/ref=sr_1_1?s=books&ie=UTF8&qid=1435311929&sr=1-1&keywords=dubliners&pebp=1435311931483&perid=11VTCD5CEAA95F0RKJ1K",
    image: "https://ia700800.us.archive.org/BookReader/BookReaderPreview.php?id=dublinerstextcri00joyc&itemPath=%2F10%2Fitems%2Fdublinerstextcri00joyc&server=ia700800.us.archive.org&page=cover_w500_h500.jpg"
  });

  var book19 = new Book({
    title: "Siddhartha",
    author: "Hermann Hesse",
    genre: "Fiction",
    sample: "The Brahman fell silent, and remained silent for so long that the stars in the small window wandered and changed their relative positions, 'ere the silence was broken.",
    amazonLink: "http://www.amazon.com/Siddhartha-Dover-Thrift-Editions-Hermann/dp/0486406539",
    image: "https://ia700802.us.archive.org/zipview.php?zip=/4/items/olcovers645/olcovers645-L.zip&file=6456720-L.jpg"
  });

  var book20 = new Book({
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    genre: "Adventure",
    sample: "The new arrangement was quite to my liking. The whole schooner had been overhauled; six berths had been made astern out of what had been the after-part of the main hold; and this set of cabins was only joined to the galley and forecastle by a sparred passage on the port side.",
    amazonLink: "http://www.amazon.com/Treasure-Island-Dover-Thrift-Editions/dp/0486275590",
    image: "https://ia801405.us.archive.org/zipview.php?zip=/29/items/olcovers591/olcovers591-L.zip&file=5913855-L.jpg"
  });

    book5.save(errorHandler);
    book6.save(errorHandler);
    book7.save(errorHandler);
    book8.save(errorHandler);
    book9.save(errorHandler);
    book10.save(errorHandler);
    book11.save(errorHandler);
    book12.save(errorHandler);
    book13.save(errorHandler);
    book14.save(errorHandler);
    book15.save(errorHandler);
    book16.save(errorHandler);
    book17.save(errorHandler);
    book18.save(errorHandler);
    book19.save(errorHandler);
    book20.save(errorHandler);


};
