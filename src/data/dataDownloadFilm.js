import React from 'react';
import {Image} from 'react-native';

const dataDownloadFilm = [
  //Narcos
  {
    name: 'Narcos',
    imageUrl: require('../assets/images/narcos_download.png'),
    episodes: 4,
    size: '5.02GB',
    type: ['drama', 'biographical', 'crime film', 'crime fiction'],
    star: 9.0,
    rating: '★★★★✰',
    abstract:
      'Netflix chronicles the rise of the cocaine trade in Colombia and the gripping real-life stories of drug kingpins of the late ‘80s in this raw, gritty original series.',
    trailer: 'link!!!',
    cast: [
      {
        name: 'Wagner Moura',
        image: 'link!!!',
      },
      {
        name: 'Pedro Pascal',
        image: 'link!!!',
      },
      {
        name: 'Boyd Holbrook',
        image: 'link!!!',
      },
    ],
  },
  //Tenet
  {
    name: 'Tenet ',
    imageUrl: {
      uri:
        'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    episodes: 1,
    size: '4.08GB',
    type: ['action', 'fiction'],
    star: 7.8,
    rating: '★★★★✰',
    abstract:
      'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
    cast: [
      {
        name: 'John David Washington',
        abstract:
          'John David Washington was born on July 28, 1984 in the USA. He is an actor and producer, known for BlacKkKlansman (2018), Tenet (2020) and The Book of Eli (2010).',
        image:
          'https://m.media-amazon.com/images/M/MV5BOTY4NDcyNDM5OF5BMl5BanBnXkFtZTgwMjk4Mzk0NTM@._V1_UY98_CR1,0,67,98_AL_.jpg',
      },
      {
        name: 'Robert Pattinson',
        abstract:
          'Robert Douglas Thomas Pattinson was born May 13, 1986 in London, England, to Richard Pattinson, a car dealer importing vintage cars, and Clare Pattinson (née Charlton), who worked as a booker at a model agency. He grew up in Barnes, southwest London with two older sisters.',
        image:
          'https://m.media-amazon.com/images/M/MV5BNzk0MDQ5OTUxMV5BMl5BanBnXkFtZTcwMDM5ODk5Mg@@._V1_UY317_CR12,0,214,317_AL_.jpg',
      },
      {
        name: 'Elizabeth Debicki',
        abstract:
          'Debicki was born in Paris, to a Polish father and an Australian mother of Irish descent, who were both dancers. When she was five, the family moved to Melbourne, where she grew up with two younger siblings. She became interested in ballet at an early age and trained as a dancer until deciding to switch to theatre',
        image:
          'https://m.media-amazon.com/images/M/MV5BMWRiNzczYzMtOGE1Yi00Njg0LWFkNTUtYzE3NmVkZDZkMjg5XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY317_CR21,0,214,317_AL_.jpg',
      },
    ],
  },
  //The Godfather
  {
    name: 'The Godfather ',
    imageUrl: {
      uri:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg',
    },
    episodes: 1,
    size: '4.02GB',
    type: ['crime', 'drama'],
    star: 9.2,
    rating: '★★★★✰',
    abstract:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    cast: [
      {
        name: 'Marlon Brando',
        abstract:
          'Marlon Brando is widely considered the greatest movie actor of all time, rivaled only by the more theatrically oriented Laurence Olivier in terms of esteem. Unlike Olivier, who preferred the stage to the screen, Brando concentrated his talents on movies after bidding the Broadway stage adieu in 1949, a decision for which he was severely criticized when his star began to dim in the 1960s and he was excoriated for squandering his talents. No actor ever exerted such a profound influence on succeeding generations of actors as did Brando.',
        image:
          'https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_UY98_CR30,0,67,98_AL_.jpg',
      },
      {
        name: 'Al Pacino',
        abstract:
          'Alfredo James He was born April 25, 1940 in Manhattan, New York City, to Italian-American parents, Rose (nee Gerardi) and Sal Pacino. They divorced when he was young. His mother moved them into his grandparents home in the South Bronx. Pacino found himself often repeating the plots and voices of characters he had seen in the movies. Bored and unmotivated in school, he found a haven in school plays, and his interest soon blossomed into a full-time career. Starting onstage, he went through a period of depression and poverty, sometimes having to borrow bus fare to succeed to auditions. He made it into the prestigious Actors Studio in 1966, studying under Lee Strasberg, creator of the Method Approach that would become the trademark of many 1970s-era actors.',
        image:
          'https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UX67_CR0,0,67,98_AL_.jpg',
      },
      {
        name: 'Elizabeth Debicki',
        abstract:
          'A masculine and enigmatic actor whose life and movie career have had more ups and downs than the average rollercoaster and whose selection of roles has arguably derailed him from achieving true superstar status, James Caan is New York-born and bred. He was born in the Bronx, to Sophie (Falkenstein) and Arthur Caan, Jewish immigrants from Germany. ...',
        image:
          'https://m.media-amazon.com/images/M/MV5BMTI5NjkyNDQ3NV5BMl5BanBnXkFtZTcwNjY5NTQ0Mw@@._V1_UX214_CR0,0,214,317_AL_.jpg',
      },
    ],
  },
  //Fast & Furious Presents: Hobbs & Shaw
  {
    name: 'Fast & Furious Presents: Hobbs & Shaw',
    imageUrl: {
      uri:
        'https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY268_CR1,0,182,268_AL_.jpg',
    },
    episodes: 1,
    size: '5.04GB',
    type: ['action', 'advanture', 'thriller'],
    star: 6.4,
    rating: '★★★✰✰',
    abstract:
      'Lawman Luke Hobbs (Dwayne "The Rock" Johnson) and outcast Deckard Shaw (Jason Statham) form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.',
    trailer: 'link!!!',
    cast: [
      {
        name: 'Dwayne Johnson',
        bio:
          'Dwayne Douglas Johnson, also known as The Rock, was born on May 2, 1972 in Hayward, California. He is the son of Ata Johnson (born Feagaimaleata Fitisemanu Maivia) and professional wrestler Rocky Johnson (born Wayde Douglas Bowles).',
        image: {
          uri:
            'https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg',
        },
      },
      {
        name: 'Jason Statham',
        bio:
          'Jason Statham was born in Shirebrook, Derbyshire, to Eileen (Yates), a dancer, and Barry Statham, a street merchant and lounge singer. He was a Diver on the British National Diving Team and finished twelfth in the World Championships in 1992.',
        image: {
          uri:
            'https://m.media-amazon.com/images/M/MV5BMTkxMzk2MDkwOV5BMl5BanBnXkFtZTcwMDAxODQwMg@@._V1_UX214_CR0,0,214,317_AL_.jpg',
        },
      },
      {
        name: 'Idris Elba',
        bio:
          'An only child, Idrissa Akuna Elba was born and raised in London, England. His father, Winston, is from Sierra Leone and worked at Ford Dagenham; his mother, Eve, is from Ghana and had a clerical duty. Idris attended school in Canning Town, where he first became involved in acting, before he dropped out.',
        image: {
          uri:
            'https://m.media-amazon.com/images/M/MV5BNzEzMTI2NjEyNF5BMl5BanBnXkFtZTcwNTA0OTE4OA@@._V1_UX214_CR0,0,214,317_AL_.jpg',
        },
      },
    ],
  },
  //One Flew Over the Cuckoo's Nest
  {
    name: `One Flew Over the Cuckoo's Nest`,
    imageUrl: {
      uri:
        'https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    episodes: 1,
    size: '5.04GB',
    type: [' drama '],
    star: 8.7,
    rating: '★★★★✰',
    abstract:
      'A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.',
    trailer: 'link!!!',
    cast: [
      {
        name: 'Jack Nicholson',
        bio:
          'Jack Nicholson, an American actor, producer, director and screenwriter, is a three-time Academy Award winner and twelve-time nominee. Nicholson is also notable for being one of two actors - the other being Michael Caine - who have received an Oscar nomination in every decade from the 1960s through the early 2000s. ',
        image: {
          uri:
            'https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY317_CR7,0,214,317_AL_.jpg',
        },
      },
      {
        name: 'Jason Statham',
        bio:
          'Jason Statham was born in Shirebrook, Derbyshire, to Eileen (Yates), a dancer, and Barry Statham, a street merchant and lounge singer. He was a Diver on the British National Diving Team and finished twelfth in the World Championships in 1992.',
        image: {
          uri:
            'https://m.media-amazon.com/images/M/MV5BMTkxMzk2MDkwOV5BMl5BanBnXkFtZTcwMDAxODQwMg@@._V1_UX214_CR0,0,214,317_AL_.jpg',
        },
      },
      {
        name: 'Idris Elba',
        bio:
          'An only child, Idrissa Akuna Elba was born and raised in London, England. His father, Winston, is from Sierra Leone and worked at Ford Dagenham; his mother, Eve, is from Ghana and had a clerical duty. Idris attended school in Canning Town, where he first became involved in acting, before he dropped out.',
        image: {
          uri:
            'https://m.media-amazon.com/images/M/MV5BNzEzMTI2NjEyNF5BMl5BanBnXkFtZTcwNTA0OTE4OA@@._V1_UX214_CR0,0,214,317_AL_.jpg',
        },
      },
    ],
  },
];

export default dataDownloadFilm;
