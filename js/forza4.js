let click = document.getElementById('click').addEventListener('click', function() { newImg('click' ) } );
let click1 = document.getElementById('click1').addEventListener('click', function() { newImg( 'click1' ) });
let click2 = document.getElementById('click2').addEventListener('click', function() { newImg( 'click2' ) });
let click3 = document.getElementById('click3').addEventListener('click', function() { newImg( 'click3' ) });
let click4 = document.getElementById('click4').addEventListener('click', function() { newImg( 'click4' ) });
let click5 = document.getElementById('click5').addEventListener('click', function() { newImg( 'click5' ) });
let click6 = document.getElementById('click6').addEventListener('click', function() { newImg( 'click6' ) });
let incrementEl = 6;
let incrementEl1 = 6;
let incrementEl2 = 6;
let incrementEl3 = 6;
let incrementEl4 = 6;
let incrementEl5 = 6;
let incrementEl6 = 6;
let defaultNumbersEl = 43;
let defaultNumbersEl1 = 44;
let defaultNumbersEl2 = 45;
let defaultNumbersEl3 = 46;
let defaultNumbersEl4 = 47;
let defaultNumbersEl5 = 48;
let defaultNumbersEl6 = 49;

let isTrue = true
let isArr = [];

// creo un nuovo arr
function arr(_arr) {
  return {
    "_arr": _arr
  };
}

// creo un nuovo turn
function turn(_turn) {
  return {
    "_turn": _turn
  };
}

// funzione che indrizza al vincitore
function navigationToWin(link) {
  const _isTrue = isTrue ? "WOODY" : "TRUMP";
  const locationIsWin = link ? alert(_isTrue) : alert("PAREGGIO");
  location.assign(link ? link : "https://media4.giphy.com/avatars/William_Redgrove_Illustration/gCKztJA3fVgq.gif")
  return locationIsWin;
}

// funzione che crea un idx
function idx(defaultNumbersEl, incrementMax) {
  const validaDefaultNumbers = defaultNumbersEl > -1;
  const validaIncrementoMax = defaultNumbersEl <= incrementMax;
  const valida = validaDefaultNumbers && validaIncrementoMax;
  if(valida) return defaultNumbersEl-=6;
}

// funzione che crea un obj
function obj(incrementPos, _indice, turn) {
  const obj = {
      'pos': incrementPos,
      'indice': _indice,
      'turn': !turn ? 'Woody' : 'Trump'
  };
  return obj;
}

// funzione che modifica un array
function objToArray(incrementEl, arr, obj) {
  const valida = incrementEl > -1;
  if(valida) arr.push(obj);
  return arr;
}

// funzione che crea una variantObj
function variantObj(incrementEl, defaultNumbersEl, incrementPos, _idx, turn, _arr) {
  const _obj = obj(incrementPos, _idx, turn);
  const _objToArray = objToArray(incrementEl, _arr, _obj);
  const isControlWin = controlWin(_objToArray, turn);
  const isTurn = turn ? newImgAzzurro(incrementEl, incrementPos, turn) : newImgVerde(incrementEl, incrementPos, turn);
  const isLink = turn ? "https://media0.giphy.com/media/jUgOxnun3QPq0UbjDx/giphy.gif" : "https://media2.giphy.com/media/OWvUqE2hH7MuA/source.gif"
  const result = isControlWin ? _objToArray.length === 42 && !turn ? navigationToWin("") : navigationToWin(isLink) : isTurn;
  return result;
}

// applico la teoria dei giochi
function variantObjGameTheory() {

  let possibleTrump = ['click', 'click1', 'click2', 'click3', 'click4', 'click5', 'click6'];
  const generateNumber = (Math.random() * 6).toFixed(0);

}

// funzione che crea un nuovoImg
function newImg (pos) {

    let _turn = turn(isTrue)._turn;
    let _arr = arr(isArr)._arr;
    let _idx;

    switch(pos) {
        case 'click':
        incrementEl--;
        defaultNumbersEl--;
        _idx = idx(defaultNumbersEl, 43);
        defaultNumbersEl = _idx;
        variantObj(incrementEl, defaultNumbersEl, 0, _idx, _turn, _arr);
        break;
        case 'click1':
        incrementEl1--;
        defaultNumbersEl1--;
        _idx = idx(defaultNumbersEl1, 44);
        defaultNumbersEl1 = _idx;
        variantObj(incrementEl1, defaultNumbersEl1, 1, _idx, _turn, _arr);
        break;
        case 'click2':
        incrementEl2--;
        defaultNumbersEl2--;
        _idx = idx(defaultNumbersEl2, 45);
        defaultNumbersEl2 = _idx;
        variantObj(incrementEl2, defaultNumbersEl2, 2, _idx, _turn, _arr);
        break;
        case 'click3':
        incrementEl3--;
        defaultNumbersEl3--;
        _idx = idx(defaultNumbersEl3, 46);
        defaultNumbersEl3 = _idx;
        variantObj(incrementEl3, defaultNumbersEl3, 3, _idx, _turn, _arr);
        break;
        case 'click4':
        incrementEl4--;
        defaultNumbersEl4--;
        _idx = idx(defaultNumbersEl4, 47);
        defaultNumbersEl4 = _idx;
        variantObj(incrementEl4, defaultNumbersEl4, 4, _idx, _turn, _arr);
        break;
        case 'click5':
        incrementEl5--;
        defaultNumbersEl5--;
        _idx = idx(defaultNumbersEl5, 48);
        defaultNumbersEl5 = _idx;
        variantObj(incrementEl5, defaultNumbersEl5, 5, _idx, _turn, _arr);
        break;
        case 'click6':
        incrementEl6--;
        defaultNumbersEl6--;
        _idx = idx(defaultNumbersEl6, 49);
        defaultNumbersEl6 = _idx;
        variantObj(incrementEl6, defaultNumbersEl6, 6, _idx, _turn, _arr);
        break;
        default:
    }

}

// funzione che crea un img
function img(el, pos, img, bool) {
  isTrue = bool;
  let increment = 'el' + el + '_' + pos;
  let imgPos = document.getElementById(increment);
  return imgPos.outerHTML=img;
}

// funzione che crea un newImgColor
function newImgColor(el, pos, newImgColor, turn) {
  let validaEl = el > -1;
  let valida = validaEl && turn;
  if( valida ) return img(el, pos, newImgColor, false);
  else if(!validaEl) return false;
  else return img(el, pos, newImgColor, true);
}

// funzione che crea un newImgAzzurro
function newImgAzzurro (el, pos, turn) {

    let newImgAzzurro = '<td><img src="./img/azzurro.png" alt="" /></td> ';

    newImgColor(el, pos, newImgAzzurro, turn);

}

// funzione che crea un newImgVerde
function newImgVerde (el, pos, turn) {

    let newImgVerde = '<td><img src="./img/verde.png" alt="" /></td>';

    newImgColor(el, pos, newImgVerde, turn);

}

// funzione che filtra e verifica se è avanzato un certo tipo di range
function rangeByControlMoves(sortingArray, prev, next, type) {
  let resultRange = [];
  switch(type) {
    case '+':
    resultRange = sortingArray.filter(i => i >= prev && i < prev+next)
    break;
    case '-':
    resultRange = sortingArray.filter(i => i <= prev && i > prev-next)
    break;
    default:
  }
  console.log("_range", resultRange)
  return resultRange;
}

// funzione che valida l'increment
function controlMoves(sortingArray, increment) {

    let _i;

    let _array, uniq, isNoValid;

    _array = [];
    uniq = [];
    isNoValid = true;

    // controllo i laterali
    switch (increment.toString()) {
      // +6
      case "6":
            if (sortingArray.includes(1) && sortingArray.includes(7)) {
              isNoValid = false;
            }
            if (sortingArray.includes(8) && sortingArray.includes(14)) {
              isNoValid = false;
            }
            if (sortingArray.includes(15) && sortingArray.includes(21)) {
              isNoValid = false;
            }
            if (sortingArray.includes(22) && sortingArray.includes(28)) {
              isNoValid = false;
            }
            if (sortingArray.includes(29) && sortingArray.includes(35)) {
              isNoValid = false;
            }
            if (sortingArray.includes(36) && sortingArray.includes(42)) {
              isNoValid = false;
            }
        break;
      // +1
      case "1":
          if(sortingArray.includes(1)) {
            isNoValid = rangeByControlMoves(sortingArray, 1, 4, '+').length === 4 ? true : false;
            if(isNoValid) {
              break;
            }
          }
          if (sortingArray.includes(7) || sortingArray.includes(8)) {
            isNoValid = rangeByControlMoves(sortingArray, 7, 4, '-').length === 4 || rangeByControlMoves(sortingArray, 8, 4, '+').length === 4 ? true : false;
            if(isNoValid) {
              break;
            }
          }
          if (sortingArray.includes(14) || sortingArray.includes(15)) {
            isNoValid = rangeByControlMoves(sortingArray, 14, 4, '-').length === 4 || rangeByControlMoves(sortingArray, 15, 4, '+').length === 4 ? true : false;
            if(isNoValid) {
              break;
            }
          }
          if (sortingArray.includes(21) || sortingArray.includes(22)) {
            isNoValid = rangeByControlMoves(sortingArray, 21, 4, '-').length === 4 || rangeByControlMoves(sortingArray, 22, 4, '+').length === 4 ? true : false;
            if(isNoValid) {
              break;
            }
          }
          if (sortingArray.includes(28) || sortingArray.includes(29)) {
            isNoValid = rangeByControlMoves(sortingArray, 28, 4, '-').length === 4  || rangeByControlMoves(sortingArray, 29, 4, '+').length === 4 ? true : false;
            if(isNoValid) {
              break;
            }
          }
          if (sortingArray.includes(35) || sortingArray.includes(36)) {
            isNoValid = rangeByControlMoves(sortingArray, 35, 4, '-').length === 4 || rangeByControlMoves(sortingArray, 36, 4, '+').length === 4 ? true : false;
            if(isNoValid) {
              break;
            }
          }
          if(sortingArray.includes(42)) {
            isNoValid = rangeByControlMoves(sortingArray, 42, 4, '-').length === 4 ? true : false;
            if(isNoValid) {
              break;
            }
          }
        break;

      default:

    }

    console.log("Processing", isNoValid)

    if(sortingArray.length >= 4 && isNoValid) {

        // prendo tutto il length da sortingArray
        for(let i = 0; i<= sortingArray.length; i++) {

            // dal primo elemento in poi quello cercato lo assegnerò a _i
            // => 1, 2, 3, 4
            // => 1 FATTO
            // => 2 FATTO
            _i = sortingArray[i];

            // prendo un elemento incrementabile a partire da y<=i
            // => 1
            // => 2

            // se l'elemento incrementabile esiste
            // y = 1
            // y = 2
            // => 1+1 === 2
            // => 2+1 === 3
            if( sortingArray.includes(_i)
                && sortingArray.includes(_i+(increment*1))
                && sortingArray.includes(_i+(increment*2))
                && sortingArray.includes(_i+(increment*3))) {

                 console.log("TRUE");

                 // se la condizione è verificata lo inserisco in un' _array
                 // => _array.push(1);
                 // => _array.push(2);

                _array.push(_i, _i+(increment*1), _i+(increment*2), _i+(increment*3));

                 // controllo se le coppie dei num laterali orizontali siano +6
                _array = _array[0] && _array[1] && _array[2] && _array[3]
                            ?  _array.concat("YOU WIN")
                            :  _array

                _array = _array.reduce((arr, el) => arr.includes(el) ? arr : arr.concat(el), []);

                console.log("..._Array", _array);

                const _newI = [_i, _i+(increment*1), _i+(increment*2), _i+(increment*3)];

                uniq = uniq.concat(_newI).reduce((arr, el) => arr.includes(el) ? arr : arr.concat(el), []);

                console.log("......Uniq", uniq);

                const _valid =  uniq[0] && uniq[1] && uniq[2] && uniq[3]
                                    ? uniq[0] +increment === uniq[1]
                                        ? uniq[1] +increment === uniq[2]
                                            ? uniq[2] +increment === uniq[3]
                                                ? uniq.concat("YOU WIN")
                                                : uniq
                                            : uniq
                                        : uniq
                                    : uniq;

                console.log("....Valid", _valid);

                uniq = _valid;

             }

        }

    } else {

        console.log("......Not Working");

    }

    console.log(".....Array", _array);

    const validator = sortingArray[0] && sortingArray[1] && sortingArray[2] && sortingArray[3]
                        ? sortingArray[0] +increment === sortingArray[1]
                              ? sortingArray[1] +increment === sortingArray[2]
                                  ? sortingArray[2] +increment === sortingArray[3] && isNoValid
                                  : false
                              : false
                        : false;

    const _win = _array.includes('YOU WIN') && uniq.includes('YOU WIN');

    console.log("....Win", _win);

    return validator || _win;
}

// funzione che valida il win
function controlWin (array, turn) {

    const _array = !turn ? array.filter(el => el.turn === "Woody") : array.filter(el => el.turn === "Trump")

    const sortingArray = _array.map(el => el.indice).sort((a, b) => a-b);

    const player = !turn ? "WOODY" : "TRUMP";

    console.log("sortingArray " + player, sortingArray);

    const validArrayHorizontal = controlMoves(sortingArray, 1); // controllo per ogni elemento solo se va ad avanzare a +1 a quello successivo
    // => [44, 45, 46, 47] true

    const validArrayVertical = controlMoves(sortingArray, 7); // controllo per ogni elemento solo se va ad avanzare a +7 a quello verticale
    // => [23, 30, 37, 44] true

    const validArrayDiagonalDx = controlMoves(sortingArray, 6); // controllo per ogni elemento solo se va ad avanzare a +6 a quello diagonale di destra
    // => [26, 32, 38, 44] true

    const validArrayDiagonalSx = controlMoves(sortingArray, 8); // controllo per ogni elemento solo se va ad avanzare a +8 a quello diagonale di sinistra
    // => [22, 30, 38, 46] true

    const _diagonal_sx = validArrayDiagonalSx; // +8
    const _diagonal_dx = validArrayDiagonalDx; // +6
    const _horizontal = validArrayHorizontal; // +1
    const _vertical = validArrayVertical; // +7
    const _draw = sortingArray.length === 21 && !turn; //full array

    const _result = _diagonal_sx || _diagonal_dx || _horizontal || _vertical || _draw;

    return _result;

}
