const words = [
  {name: 'Cat', image: require('../assets/img/word_puzzle/cat_1.jpg')},
  {name: 'Fox', image: require('../assets/img/word_puzzle/fox_1.png')},
  {name: 'Crab', image: require('../assets/img/word_puzzle/crab_1.jpg')},
  {name: 'Deer', image: require('../assets/img/word_puzzle/deer_1.jpg')},
  {name: 'Horse', image: require('../assets/img/word_puzzle/horse_1.jpg')},
  {name: 'Lion', image: require('../assets/img/word_puzzle/lion_1.jpg')},
  {name: 'Bee', image: require('../assets/img/word_puzzle/bee_1.jpg')},
  {name: 'Bison', image: require('../assets/img/word_puzzle/bison_1.jpg')},
  {name: 'Lemur', image: require('../assets/img/word_puzzle/lemur_1.jpg')},
  {name: 'Moth', image: require('../assets/img/word_puzzle/moth_1.jpg')},
  {name: 'Auk', image: require('../assets/img/word_puzzle/auk_1.jpg')},
  {name: 'Wren', image: require('../assets/img/word_puzzle/wren_1.png')},
  {name: 'Owl', image: require('../assets/img/word_puzzle/owl_1.jpg')},
  {name: 'Stork', image: require('../assets/img/word_puzzle/stork_1.jpg')},
  {name: 'Fowl', image: require('../assets/img/word_puzzle/fowl_1.jpg')},
  {name: 'Skuas', image: require('../assets/img/word_puzzle/skuas_1.jpg')},
  {name: 'Grous', image: require('../assets/img/word_puzzle/grouse_1.jpg')},
  {name: 'Bulbul', image: require('../assets/img/word_puzzle/bulbul_1.jpg')},
  {name: 'Ibis', image: require('../assets/img/word_puzzle/ibis_1.jpg')},
  {name: 'Tit', image: require('../assets/img/word_puzzle/tit_1.jpg')},
  {name: 'Fig', image: require('../assets/img/word_puzzle/fig_1.png')},
  {name: 'Tea', image: require('../assets/img/word_puzzle/tea_1.png')},
  {name: 'Peas', image: require('../assets/img/word_puzzle/peas_1.png')},
  {name: 'Guava', image: require('../assets/img/word_puzzle/guava_1.jpg')},
  {name: 'Orange', image: require('../assets/img/word_puzzle/orange_1.jpg')},
  {name: 'Kiwi', image: require('../assets/img/word_puzzle/kiwi_1.jpg')},
  {name: 'Coffee', image: require('../assets/img/word_puzzle/coffee_1.jpg')},
  {name: 'Lemon', image: require('../assets/img/word_puzzle/lemon_1.jpg')},
  {name: 'Cookie', image: require('../assets/img/word_puzzle/cookie_1.jpg')},
  {name: 'Mango', image: require('../assets/img/word_puzzle/mango_1.jpg')},
  {name: 'Jet', image: require('../assets/img/word_puzzle/jet_1.png')},
  {name: 'Ship', image: require('../assets/img/word_puzzle/ship_1.png')},
  {name: 'Van', image: require('../assets/img/word_puzzle/van_1.jpg')},
  {name: 'Tractor', image: require('../assets/img/word_puzzle/tractor_1.jpg')},
  {name: 'Bicycle', image: require('../assets/img/word_puzzle/bicycle_1.jpg')},
  {name: 'Scooter', image: require('../assets/img/word_puzzle/scooter_1.jpg')},
  {name: 'Tree', image: require('../assets/img/word_puzzle/tree_1.jpg')},
  {name: 'Candle', image: require('../assets/img/word_puzzle/candle_1.jpg')},
  {name: 'Bubble', image: require('../assets/img/word_puzzle/bubble_1.jpg')},
  {name: 'BAll', image: require('../assets/img/word_puzzle/ball_1.jpg')},
  {name: 'Orchid', image: require('../assets/img/word_puzzle/orchid_1.jpg')},
  {name: 'Poppy', image: require('../assets/img/word_puzzle/poppy_1.jpg')},
  {name: 'Aster', image: require('../assets/img/word_puzzle/aster_1.jpg')},
  {name: 'Clover', image: require('../assets/img/word_puzzle/clover_1.jpg')},
  {name: 'Daisy', image: require('../assets/img/word_puzzle/daisy_1.jpg')},
  {name: 'Peony', image: require('../assets/img/word_puzzle/peony_1.jpg')},
  {name: 'Crocus', image: require('../assets/img/word_puzzle/crocus_1.jpg')},
  {name: 'Allium', image: require('../assets/img/word_puzzle/allium_1.jpg')},
  {name: 'Iris', image: require('../assets/img/word_puzzle/iris_1.png')},
  {name: 'Pansy', image: require('../assets/img/word_puzzle/pansy_1.jpg')},
];

export const generateRandomString = (length, originWord) => {
  let rStr = '';
  for (let i = 0; i < length - originWord.length; i++) {
    let ch = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    rStr += ch;
  }
  rStr += originWord;
  rStr = rStr
    .split('')
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join('');
  return rStr.toUpperCase();
};

var quizIdList = [];

export const getNextQuiz = (quizId = -1) => {
  if (quizId == -1) {
    // start new game
    quizIdList = [];
    while (quizIdList.length < 10) {
      var r = Math.floor(Math.random() * words.length);
      if (quizIdList.indexOf(r) === -1) quizIdList.push(r);
    }
  }

  quizId++;
  console.log({...words[quizIdList[quizId]], id: quizId});
  return {...words[quizIdList[quizId]], id: quizId};
};
