const top27 = [
  {
    title: 'The Shawshank Redemption',
    releaseYear: 1994,
    genre: 'Drama',
    runTime: 142,
    rating: 'R',
    description: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    director: 'Frank Darabont',
    streamingService: 'Netflix',
    boxArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
  },
  {
    title: 'The Godfather',
    releaseYear: 1972,
    genre: 'Drama',
    runTime: 175,
    rating: 'R',
    description: `Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.`,
    director: 'Francis Ford Coppola',
    streamingService: 'Paramount+',
    boxArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wWJbBo5yjw22AIjE8isBFoiBI3S.jpg'
  },
  {
    title: 'The Dark Knight',
    releaseYear: 2008,
    genre: 'Action',
    runTime: 152,
    rating: 'PG-13',
    description: `Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.`,
    director: 'Christopher Nolan',
    streamingService: 'Netflix',
    boxArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    releaseYear: 2003,
    genre: 'Fantasy',
    runTime: 201,
    rating: 'PG-13',
    description: `Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.`,
    director: 'Peter Jackson',
    streamingService: 'HBO Max',
    boxArt: 'https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/lord-of-the-rings-the-return-of-the-king-2003/large_j6NCjU6Zh7SkfIeN5zDaoTmBn4m.jpg'
  },
  {
    title: 'Schindler\'s List',
    releaseYear: 1993,
    genre: 'History',
    runTime: 195,
    rating: 'R',
    description: 'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.',
    director: 'Steven Spielberg',
    streamingService: 'Unavailable to Stream',
    boxArt: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
  },
  {
    title: 'The Godfather: Part II',
    releaseYear: 1974,
    genre: 'Drama',
    runTime: 202,
    rating: 'R',
    description: `In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.`,
    director: 'Francis Ford Coppola',
    streamingService: 'Paramount+',
    boxArt: 'https://e.snmc.io/i/300/s/32162dc6995a4284dd237e7eb32f750c/6436714'
  },
  {
    title: '12 Angry Men',
    releaseYear: 1957,
    genre: 'Drama',
    runTime: 96,
    rating: 'Unrated',
    description: '',
    director: 'Sidney Lumet',
    streamingService: 'Amazon Prime',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/e02s4wmTAExkKg0yF4dEG98ZRpK.jpg'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    releaseYear: 2001,
    genre: 'Fantasy',
    runTime: 178,
    rating: 'PG-13',
    description: `Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.`,
    director: 'Peter Jackson',
    streamingService: 'HBO Max',
    boxArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg'
  },
  {
    title: 'Pulp Fiction',
    releaseYear: 1994,
    genre: 'Crime',
    runTime: 154,
    rating: 'R',
    description: `A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.`,
    director: 'Quentin Tarantino',
    streamingService: 'Showtime',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg'
  },
  {
    title: 'Inception',
    releaseYear: 2010,
    genre: 'Action',
    runTime: 148,
    rating: 'PG-13',
    description: `Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person's idea into a target's subconscious.`,
    director: 'Christopher Nolan',
    streamingService: 'HBO Max',
    boxArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg'
  },
  {
    title: 'The Lord of the Ring: The Two Towers',
    releaseYear: 2002,
    genre: 'Fantasy',
    runTime: 179,
    rating: 'PG-13',
    description: `Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.`,
    director: 'Peter Jackson',
    streamingService: 'HBO Max',
    boxArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg'
  },
  {
    title: 'Fight Club',
    releaseYear: 1999,
    genre: 'Drama',
    runTime: 139,
    rating: 'R',
    description: `A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.`,
    director: 'David Fincher',
    streamingService: 'Unavailable to Stream',
    boxArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'
  },
  {
    title: 'Forrest Gump',
    releaseYear: 1994,
    genre: 'Drama',
    runTime: 142,
    rating: 'PG-13',
    description: `A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.`,
    director: 'Robert Zemeckis',
    streamingService: 'Amazon Prime',
    boxArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/saHP97rTPS5eLmrLQEcANmKrsFl.jpg'
  },
  {
    title: 'The Good, the Bad and the Ugly',
    releaseYear: 1966,
    genre: 'Western',
    runTime: 178,
    rating: 'R',
    description: `While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.`,
    director: 'Sergio Leone',
    streamingService: 'Unavailable to Stream',
    boxArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg'
  },
  {
    title: 'Interstellar',
    releaseYear: 2014,
    genre: 'Sci-Fi',
    runTime: 169,
    rating: 'PG-13',
    description: 'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
    director: 'Christopher Nolan',
    streamingService: 'Paramount+',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
  },
  {
    title: 'The Matrix',
    releaseYear: 1999,
    genre: 'Action',
    runTime: 136,
    rating: 'R',
    description: 'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.',
    director: 'Lana Wachowski, Lilly Wachowski',
    streamingService: 'HBO Max',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'
  },
  {
    title: 'Goodfellas',
    releaseYear: 1990,
    genre: 'Crime',
    runTime: 145,
    rating: 'R',
    description: `The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.`,
    director: 'Martin Scorcese',
    streamingService: 'HBO Max',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg'
  },
  {
    title: 'Star Wars - The Empire Strikes Back',
    releaseYear: 1980,
    genre: 'Sci-Fi',
    runTime: 124,
    rating: 'PG',
    description: `The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.`,
    director: 'Irvin Kershner',
    streamingService: 'Disney+',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/y8kozeXuFDRKGCBRJGfZY0KbGi1.jpg'
  },
  {
    title: 'One Flew Over the Cuckoo\'s Nest',
    releaseYear: 1975,
    genre: 'Drama',
    runTime: 133,
    rating: 'R',
    description: `While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy, inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.`,
    director: 'Milos Forman',
    streamingService: 'HBO Max',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg'
  },
  {
    title: 'Seven Samurai',
    releaseYear: 1954,
    genre: 'Action',
    runTime: 207,
    rating: 'Unrated',
    description: `A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.`,
    director: 'Akira Kurosawa',
    streamingService: 'HBO Max',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/iAq0sq42vKTLneVGqHn1D4GzgrM.jpg'
  },
  {
    title: 'It\'s a Wonderful Life',
    releaseYear: 1946,
    genre: 'Family',
    runTime: 130,
    rating: 'PG',
    description: `A holiday favourite for generations... George Bailey has spent his entire life giving to the people of Bedford Falls. All that prevents rich skinflint Mr. Potter from taking over the entire town is George's modest building and loan company. But on Christmas Eve the business's $8,000 is lost and George's troubles begin.`,
    director: 'Frank Capra',
    streamingService: 'Amazon Prime',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/bSqt9rhDZx1Q7UZ86dBPKdNomp2.jpg'
  },
  {
    title: 'Spider-Man: No Way Home',
    releaseYear: 2021,
    genre: 'Action',
    runTime: 148,
    rating: 'PG-13',
    description: `Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.`,
    director: 'Jon Watts',
    streamingService: 'Unavailable to Stream',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'
  },
  {
    title: 'City of God',
    releaseYear: 2002,
    genre: 'Crime',
    runTime: 130,
    rating: 'R',
    description: `Buscapé was raised in a very violent environment. Despite the feeling that all odds were against him, he finds out that life can be seen with other eyes...`,
    director: 'Fernando Meirelles',
    streamingService: 'HBO Max',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg'
  },
  {
    title: 'The Pianist',
    releaseYear: 2002,
    genre: 'Biography',
    runTime: 150,
    rating: 'R',
    description: `The true story of pianist Władysław Szpilman's experiences in Warsaw during the Nazi occupation. When the Jews of the city find themselves forced into a ghetto, Szpilman finds work playing in a café; and when his family is deported in 1942, he stays behind, works for a while as a laborer, and eventually goes into hiding in the ruins of the war-torn city.`,
    director: 'Roman Polanski',
    streamingService: 'Unavailable to Stream',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg'
  },
  {
    title: 'Spirited Away',
    releaseYear: 2001,
    genre: 'Animation',
    runTime: 125,
    rating: 'PG',
    description: `A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.`,
    director: 'Hayao Miyazaki',
    streamingService: 'HBO Max',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg'
  },
  {
    title: 'Star Wars - A New Hope',
    releaseYear: 1977,
    genre: 'Sci-Fi',
    runTime: 121,
    rating: 'PG',
    description: `Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.`,
    director: 'George Lucas',
    streamingService: 'Disney+',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg'
  },
  {
    title: 'Beauty and the Beast',
    releaseYear: 1991,
    genre: 'Animation',
    runTime: 84,
    rating: 'G',
    description: `Follow the adventures of Belle, a bright young woman who finds herself in the castle of a prince who's been turned into a mysterious beast. With the help of the castle's enchanted staff, Belle soon learns the most important lesson of all -- that true beauty comes from within.`,
    director: 'Gary Trousdale',
    streamingService: 'Disney+',
    boxArt: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7oCAPOphDKpIaxTrnukmDrZ8XKD.jpg'
  },
]

module.exports = top27