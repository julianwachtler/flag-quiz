const flags = [
    {
      flag: 'de.png',
      answer: 'Deutschland',
    },
    {
      flag: 'fr.png',
      answer: 'Frankreich'
    },
    {
      flag: 'us.png',
      answer: 'USA',
      answer: 'Vereinigte Staaten'
    },
    {
      flag: 'gb.png',
      answer: 'Vereinigtes Königreich',
      answer: 'England',
      answer: 'UK',
      answer: 'Großbritannien'
    },
    {
        flag: 'it.png',
        answer: 'Italien'
    },
    {
        flag: 'es.png',
        answer: 'Spanien'
    },
    {
        flag: 'ch.png',
        answer: 'Schweiz'
    },
    {
        flag: 'at.png',
        answer: 'Österreich'
    },
    {
        flag: 'nl.png',
        answer: 'Niederlande'
    },
    {
        flag: 'be.png',
        answer: 'Belgien'
    },
    {
        flag: 'dk.png',
        answer: 'Dänemark'
    },
    {
        flag: 'se.png',
        answer: 'Schweden'
    },
    {
        flag: 'no.png',
        answer: 'Norwegen'
    },
    {
        flag: 'fi.png',
        answer: 'Finnland'
    },
    {
        flag: 'ru.png',
        answer: 'Russland'
    },
    {
        flag: 'pl.png',
        answer: 'Polen'
    },
    {
        flag: 'cz.png',
        answer: 'Tschechien'
    },
    {
        flag: 'hu.png',
        answer: 'Ungarn'
    },
    {
        flag: 'ro.png',
        answer: 'Rumänien'
    },
    {
        flag: 'gr.png',
        answer: 'Griechenland'
    },
    {
        flag: 'tr.png',
        answer: 'Türkei'
    },
    {
        flag: 'cn.png',
        answer: 'China'
    },
    {
        flag: 'jp.png',
        answer: 'Japan'
    },
    {
        flag: 'in.png',
        answer: 'Indien'
    },
    {
        flag: 'br.png',
        answer: 'Brasilien'
    },
    {
        flag: 'ca.png',
        answer: 'Kanada'
    },
    {
        flag: 'au.png',
        answer: 'Australien'
    },
    {
        flag: 'za.png',
        answer: 'Südafrika'
    },
    {
        flag: 'eg.png',
        answer: 'Ägypten'
    },
    {
        flag: 'ng.png',
        answer: 'Nigeria'
    },
    {
        flag: 'dz.png',
        answer: 'Algerien'
    },
    {
        flag: 'ar.png',
        answer: 'Argentinien'
    },
    {
        flag: 'co.png',
        answer: 'Kolumbien'
    },
    {
        flag: 'mx.png',
        answer: 'Mexiko'
    },
    {
        flag: 'pe.png',
        answer: 'Peru'
    },
    {
        flag: 've.png',
        answer: 'Venezuela'
    },
    {
        flag: 'cl.png',
        answer: 'Chile'
    },
    {
        flag: 'sa.png',
        answer: 'Saudi-Arabien'
    },
    {
        flag: 'ae.png',
        answer: 'VAE',
        answer: 'Vereinigte Arabische Emirate'
    },
    {
        flag: 'il.png',
        answer: "Israel"
    },
    {
        flag: 'ir.png',
        answer: 'Iran'
    },
    {
        flag: 'iq.png',
        answer: 'Irak'
    },
    {
        flag: 'pk.png',
        answer: 'Pakistan'
    },
    {
        flag: 'af.png',
        answer: 'Afghanistan'
    },
    {
        flag: 'bd.png',
        answer: 'Bangladesch'
    },
    {
        flag: 'lk.png',
        answer: 'Sri Lanka'
    },
    {
        flag: 'th.png',
        answer: 'Thailand'
    },
    {
        flag: 'vn.png',
        answer: 'Vietnam'
    },
    {
        flag: 'my.png',
        answer: 'Malaysia'
    },
    {
        flag: 'id.png',
        answer: 'Indonesien'
    },
    {
        flag: 'ph.png',
        answer: 'Philippinen'
    },
    {
        flag: 'kr.png',
        answer: 'Südkorea'
    },
    {
        flag: 'kp.png',
        answer: 'Nordkorea'
    },
    {
        flag: 'tw.png',
        answer: 'Taiwan'
    },
    {
        flag: 'hk.png',
        answer: 'Hongkong'
    },
    {
        flag: 'sg.png',
        answer: 'Singapur'
    },
    {
        flag: 'nz.png',
        answer: 'Neuseeland'
    },
    {
        flag: 'cu.png',
        answer: 'Kuba'
    },
    {
        flag: 'do.png',
        answer: 'DR',
        answer: 'Dominikanische Republik'
    },
    {
        flag: 'jm.png',
        answer: 'Jamaika'
    },
    {
        flag: 'ht.png',
        answer: 'Haiti'
    },
    {
        flag: 'cr.png',
        answer: 'Costa Rica'
    },
    {
        flag: 'pa.png',
        answer: 'Panama'
    },
    {
        flag: 'gt.png',
        answer: 'Guatemala'
    },
    {
        flag: 'hn.png',
        answer: 'Honduras'
    },
    {
        flag: 'ni.png',
        answer: 'Nicaragua'
    },
    {
        flag: 'sv.png',
        answer: 'El Salvador'
    },
    {
        flag: 'bz.png',
        answer: 'Belize'
    },
    {
        flag: 'bs.png',
        answer: 'Bahamas'
    },
    {
        flag: 'tt.png',
        answer: 'Trinidad',
        answer: 'Trinidad und Tobago'
    },
    {
        flag: 'bb.png',
        answer: 'Barbados'
    },
    {
        flag: 'ag.png',
        answer: 'Antigua',
        answer: 'Antigua und Barbuda'
    },
    {
        flag: 'lc.png',
        answer: 'St. Lucia',
    },
    {
        flag: 'dm.png',
        answer: 'Dominica'
    },
    {
        flag: 'gd.png',
        answer: 'Grenada'
    },
    {
        flag: 'kn.png',
        answer: 'St. Kitts',
        answer: 'St. Kitts und Nevis'
    },
    {
        flag: 'vc.png',
        answer: 'St. Vincent',
        answer: 'St. Vincent und die Grenadinen'
    },
    {
        flag: 'gy.png',
        answer: 'Guyana'
    },
    {
        flag: 'sr.png',
        answer: 'Suriname'
    },
    {
        flag: 'ws.png',
        answer: 'Samoa'
    },
    {
        flag: 'sb.png',
        answer: 'Salomonen'
    },
    {
        flag: 'fj.png',
        answer: 'Fidschi'
    },
    {
        flag: 'vu.png',
        answer: 'Vanuatu'
    },
    {
        flag: 'to.png',
        answer: 'Tonga'
    },
    {
        flag: 'tv.png',
        answer: 'Tuvalu'
    },
    {
        flag: 'nr.png',
        answer: 'Nauru'
    },
    {
        flag: 'ki.png',
        answer: 'Kiribati'
    },
    {
        flag: 'mh.png',
        answer: 'Marshallinseln'
    },
    {
        flag: 'pw.png',
        answer: 'Palau'
    },
    {
        flag: 'fm.png',
        answer: 'Mikronesien'
    },
    {
        flag: 'cg.png',
        answer: 'Kongo'
    },
    {
        flag: 'cd.png',
        answer: 'DR Kongo',
        answer: 'Demokratische Republik Kongo'
    },
    {
        flag: 'cm.png',
        answer: 'Kamerun'
    },
    {
        flag: 'ga.png',
        answer: 'Gabun'
    },
    {
        flag: 'cf.png',
        answer: 'Zentralafrika',
        answer: 'ZAR',
        answer: 'Zentralafrikanische Republik'
    },
    {
        flag: 'td.png',
        answer: 'Tschad'
    },
    {
        flag: 'gq.png',
        answer: 'Äquatorialguinea',
    },
    {
        flag: 'km.png',
        answer: 'Komoren'
    },
    {
        flag: 'dj.png',
        answer: 'Dschibuti'
    },
    {
        flag: 'er.png',
        answer: 'Eritrea'
    },
    {
        flag: 'et.png',
        answer: 'Äthiopien'
    },
    {
        flag: 'so.png',
        answer: 'Somalia'
    },
    {
        flag: 'ug.png',
        answer: 'Uganda'
    },
    {
        flag: 'ke.png',
        answer: 'Kenia'
    },
    {
        flag: 'tz.png',
        answer: 'Tansania'
    },
    {
        flag: 'rw.png',
        answer: 'Ruanda'
    },
    {
        flag: 'bi.png',
        answer: 'Burundi'
    },
    {
        flag: 'mg.png',
        answer: 'Madagaskar'
    },
    {
        flag: 'mu.png',
        answer: 'Mauritius'
    },
    {
        flag: 'sc.png',
        answer: 'Seychellen'
    },
    {
        flag: 'zm.png',
        answer: 'Sambia'
    },
    {
        flag: 'zw.png',
        answer: 'Simbabwe'
    },
    {
        flag: 'mw.png',
        answer: 'Malawi'
    },
    {
        flag: 'ls.png',
        answer: 'Lesotho'
    },
    {
        flag: 'bw.png',
        answer: 'Botswana'
    },
    {
        flag: 'sz.png',
        answer: 'Swasiland',
        answer: 'Eswatini'
    },
    {
        flag: 'na.png',
        answer: 'Namibia'
    },
    {
        flag: 'xk.png',
        answer: 'Kosovo'
    },
    {
        flag: 'rs.png',
        answer: 'Serbien'
    },
    {
        flag: 'me.png',
        answer: 'Montenegro'
    },
    {
        flag: 'mk.png',
        answer: 'Mazedonien',
        answer: 'Nordmazedonien'
    },
    {
        flag: 'al.png',
        answer: 'Albanien'
    },
    {
        flag: 'bg.png',
        answer: 'Bulgarien'
    },
    {
        flag: 'md.png',
        answer: 'Moldawien'
    },
    {
        flag: 'ua.png',
        answer: 'Ukraine'
    },
    {
        flag: 'by.png',
        answer: 'Weißrussland',
        answer: 'Belarus'
    },
    {
        flag: 'pl.png',
        answer: 'Polen'
    },
    {
        flag: 'va.png',
        answer: 'Vatikan',
        answer: 'Vatikanstadt'
    },
    {
        flag: "sm.png",
        answer: "San Marino"
    },
    {
        flag: "mt.png",
        answer: "Malta"
    },
    {
        flag: "ad.png",
        answer: "Andorra"
    },
    {
        flag: "lu.png",
        answer: "Luxemburg"
    },
    {
        flag: 'li.png',
        answer: 'Liechtenstein'
    },
    {
        flag: 'uz.png',
        answer: 'Usbekistan'
    },
    {
        flag: 'tm.png',
        answer: 'Turkmenistan'
    },
    {
        flag: 'tj.png',
        answer: 'Tadschikistan'
    },
    {
        flag: 'kg.png',
        answer: 'Kirgisistan'
    },
    {
        flag: 'kz.png',
        answer: 'Kasachstan'
    },
    {
        flag: 'sy.png',
        answer: 'Syrien'
    },
    {
        flag: 'jo.png',
        answer: 'Jordanien'
    },
    {
        flag: 'lb.png',
        answer: 'Libanon'
    },
    {
        flag: 'ss.png',
        answer: 'Südsudan'
    },
    {
        flag: 'sd.png',
        answer: 'Sudan'
    },
    {
        flag: 'pg.png',
        answer: 'Papua Neuguinea',
        answer: 'Papua-Neuguinea'
    },
    {
        flag: 'ie.png',
        answer: 'Irland'
    },
    {
        flag: 'is.png',
        answer: 'Island'
    },
    {
        flag: 'ge.png',
        answer: 'Georgien'
    },
    {
        flag: 'bf.png',
        answer: 'Burkina Faso'
    },
    {
        flag: 'mm.png',
        answer: 'Myanmar',
    },
    {
        flag: 'cy.png',
        answer: 'Zypern'
    },
    {
        flag: 'bt.png',
        answer: 'Bhutan'
    },
    {
        flag: 'ne.png',
        answer: 'Niger'
    },
    {
        flag: 'np.png',
        answer: 'Nepal'
    },
    {
        flag: 'tn.png',
        answer: 'Tunesien'
    },
    {
        flag: 'mr.png',
        answer: 'Mauretanien'
    },
    {
        flag: 'az.png',
        answer: 'Aserbaidschan'
    },
    {
        flag: 'ly.png',
        answer: 'Libyen'
    },
    {
        flag: 'mv.png',
        answer: 'Malediven'
    },
    {
        flag: 'om.png',
        answer: 'Oman'
    },
    {
        flag: 'mc.png',
        answer: 'Monaco'
    },
    {
        flag: 'ye.png',
        answer: 'Jemen'
    },
    {
        flag: 'kw.png',
        answer: 'Kuwait'
    },
    {
        flag: 'uy.png',
        answer: 'Uruguay'
    },
    {
        flag: 'bn.png',
        answer: 'Brunei'
    },
    {
        flag: 'ba.png',
        answer: 'Bosnien',
        answer: 'Bosnien und Herzegowina'
    },
    {
        flag: 'st.png',
        answer: 'São Tomé und Príncipe',
        answer: 'Sao Tome und Principe'
    },
    {
        flag: 'mz.png',
        answer: 'Mosambik'
    },
    {
        flag: 'lr.png',
        answer: 'Liberia'
    },
    {
        flag: 'la.png',
        answer: 'Laos'
    },

    {
        flag: 'kh.png',
        answer: 'Kambodscha'
    },
    {
        flag: 'py.png',
        answer: 'Paraguay'
    },
    {
        flag: 'sk.png',
        answer: 'Slowakei'
    },
    {
        flag: 'cv.png',
        answer: 'Kap Verde'
    },
    {
        flag: 'si.png',
        answer: 'Slowenien'
    },
    {
        flag: 'ee.png',
        answer: 'Estland'
    },
    {
        flag: 'sl.png',
        answer: 'Sierra Leone'
    },
    {
        flag: 'ao.png',
        answer: 'Angola'
    },
    {
        flag: 'bh.png',
        answer: 'Bahrain'
    },
    {
        flag: 'gn.png',
        answer: 'Guinea'
    },
    {
        flag: 'ml.png',
        answer: 'Mali'
    },
    {
        flag: 'sn.png',
        answer: 'Senegal'
    },
    {
        flag: 'bj.png',
        answer: 'Benin'
    },
    {
        flag: 'tg.png',
        answer: 'Togo'
    },
    {
        flag: 'gw.png',
        answer: 'Guinea-Bissau'
    },
    {
        flag: 'lt.png',
        answer: 'Litauen'
    },
    {
        flag: 'bo.png',
        answer: 'Bolivien'
    },
    {
        flag: 'gh.png',
        answer: 'Ghana'
    },
    {
        flag: 'am.png',
        answer: 'Armenien'
    },
    {
        flag: 'ec.png',
        answer: 'Ecuador'
    },
    {
       flag: 'pt.png',
       answer: 'Portugal'
    },
    {
        flag: 'ma.png',
        answer: 'Marokko'
    },
    {
        flag: 'mn.png',
        answer: 'Mongolei'
    },
    {
        flag: 'lv.png',
        answer: 'Lettland'
    },
    {
        flag: 'qa.png',
        answer: 'Katar'
    },
    {
        flag: 'gm.png',
        answer: 'Gambia'
    },
    {
        flag: 'ps.png',
        answer: 'Palästina'
    }
  ];
  
  let results = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledFlags = shuffleArray(flags);

function createFlagCards() {
  const flagsElement = document.getElementById('flags');

  shuffledFlags.forEach((flag, index) => {
    const flagCard = document.createElement('div');
    flagCard.className = 'flag-card';

    const imgElement = document.createElement('img');
    imgElement.src = `flags/${flag.flag}`;
    imgElement.alt = 'Flagge';

    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'input-wrapper';

    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.placeholder = 'Flaggen-Namen';
    inputElement.setAttribute('data-index', index);
    inputElement.addEventListener('keydown', handleInputKeydown.bind(null, index));

    inputWrapper.appendChild(inputElement);
    flagCard.appendChild(imgElement);
    flagCard.appendChild(inputWrapper);

    flagsElement.appendChild(flagCard);

    if ((index + 1) % 4 === 0) {
      flagsElement.appendChild(document.createElement('br'));
    }
  });
}

let timerInterval;
let timerStarted = false;
let timerSeconds = 0;   

function startTimer() {
  timerStarted = true;
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  timerStarted = false;
  clearInterval(timerInterval);
}

function updateTimer() {
  timerSeconds++;
  document.getElementById('timer').textContent = formatTime(timerSeconds);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

function padZero(number) {
  return number.toString().padStart(2, '0');
}


function handleInputKeydown(currentIndex, event) {
  const key = event.key;
  const inputElement = event.target;

    if(!timerStarted) {
        startTimer();
    }

  if (key === 'Enter') {
    const nextIndex = currentIndex + 1;
    const nextInput = document.querySelector(`input[data-index="${nextIndex}"]`);

    if (nextInput) {
      nextInput.focus();
    } else {
      inputElement.blur();
      evaluateQuiz();
    }
  } else if (key === 'ArrowLeft') {
    const prevIndex = currentIndex - 1;
    const prevInput = document.querySelector(`input[data-index="${prevIndex}"]`);

    if (prevInput) {
      prevInput.focus();
    }
  } else if (key === 'ArrowRight') {
    const nextIndex = currentIndex + 1;
    const nextInput = document.querySelector(`input[data-index="${nextIndex}"]`);

    if (nextInput) {
      nextInput.focus();
    }
  }
}

const checkAnswersBtn = document.getElementById('checkAnswersBtn');
const inputFields = document.querySelectorAll('.flag-card input');
const flagsContainer = document.getElementById('flags');
checkAnswersBtn.addEventListener('click', checkAnswers);

function checkAnswers() {
    const inputElements = document.querySelectorAll('.flag-card input');
    const results = []; // Lokale Variable
  
    inputElements.forEach((input) => {
      const index = parseInt(input.getAttribute('data-index'), 10);
      const userAnswer = input.value.trim();
  
      const result = {
        flag: shuffledFlags[index].flag,
        answer: shuffledFlags[index].answer,
        userAnswer: userAnswer,
        isCorrect: userAnswer.toLowerCase() === shuffledFlags[index].answer.toLowerCase()
      };
      stopTimer();
      results.push(result);
    });
  
    inputElements.forEach((input, index) => {
      const userInput = input.value.trim().toLowerCase();
      const correctAnswer = shuffledFlags[index].answer.toLowerCase();
  
      if (userInput === correctAnswer) {
        input.parentNode.parentNode.classList.add('correct');
      } else {
        input.parentNode.parentNode.classList.add('incorrect');
        input.value = correctAnswer; // Hinzufügen des richtigen Ergebnisses
      }
    });
  
    displayResults();
    calculateScore();
  }
  

const resultsTable = document.getElementById('resultTable');
const scoreText = document.getElementById('scoreText');
const prozentText = document.getElementById('prozentText');

function displayResults() {
    resultsContainer.innerHTML = '';
  
    results.forEach((result) => {
      const resultItem = document.createElement('div');
      resultItem.className = 'result-item';
  
      const flagImage = document.createElement('img');
      flagImage.src = `flags/${result.flag}`;
      flagImage.alt = 'Flagge';
  
      const answerText = document.createElement('span');
      answerText.textContent = result.answer;
  
      const correctnessText = document.createElement('span');
      correctnessText.textContent = result.isCorrect ? 'Richtig' : 'Falsch';
  
      resultItem.appendChild(flagImage);
      resultItem.appendChild(answerText);
      resultItem.appendChild(correctnessText);
  
      resultsContainer.appendChild(resultItem);
    });
  
    resultsContainer.style.display = 'block';
  }
  

function calculateScore() {
    const totalFlags = shuffledFlags.length;
    let correctFlags = 0;
  
    results.forEach((result) => {
      if (result.isCorrect) {
        correctFlags++;
      }
    });
  
    const percentage = ((correctFlags / totalFlags) * 100).toFixed(1); 
    const score = `${correctFlags} von ${totalFlags} möglichen Punkten erreicht (${percentage}%)`;
    const prozent = `Das sind ${percentage}%`;
    scoreText.textContent = score;


  }

const newQuizBtn = document.getElementById('newQuizBtn');
newQuizBtn.addEventListener('click', createNewQuiz);

function createNewQuiz() {
  stopTimer();
  location.reload();
}

createFlagCards();
