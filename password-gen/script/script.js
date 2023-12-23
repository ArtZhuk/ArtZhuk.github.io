// DOM elements
const displayBar = document.querySelector('.main__display-bar');
const display = document.querySelector('.main__password-display');
const copyToClipboard = document.querySelector('.btn--copy-clb');
const generateBtn = document.querySelector('.btn--gen-pswd');
const slider = document.querySelector('.range-bar__input');
const sliderValue = document.querySelector('.range-bar__length-display');
const checkboxBtns = document.querySelectorAll('.main__checkboxes .btn--checkbox');

// Password settings and general assets
const settings = {
  length: Number(slider.value),
};
for (const btn of checkboxBtns) {
  settings[btn.id] = btn.getAttribute('aria-checked') === 'true'? true : false;
};

sliderValue.textContent = settings.length;

const uppercase = [...Array(26)].map((el, i) => String.fromCharCode(i + 65));
const lowercase = uppercase.map(el => el.toLowerCase());
const numbers = [...Array(10)].map((el, i) => i);
const symbols = [...Array(15)].map((el, i) => String.fromCharCode(i + 33));


// Binding Event listeners
// Generate password button
generateBtn.addEventListener('click', generatePassword);

// Clipboard copy logic
copyToClipboard.addEventListener('click', e => {
  const parent = e.currentTarget.parentElement;
  const text = display.textContent;
  const copyTag = document.createElement('div');
  copyTag.classList.add('copy-tag');
  navigator.clipboard.writeText(text).then(() => {
    copyTag.textContent = 'Copied'
  }, () => {
    copyTag.textContent = 'Failed'
  });
  parent.appendChild(copyTag);
  setTimeout(() => {
    parent.removeChild(copyTag)
  }, 1000)
});

// Slider
slider.addEventListener('input', e => {
  sliderValue.textContent = e.target.value
});
slider.addEventListener('change', e => {
  settings.length = Number(e.target.value);
});

// Checkboxes
for (const btn of checkboxBtns) {
  btn.addEventListener('click', function (e) {
    if (e.target.getAttribute('aria-checked') === 'true') {
      // Implementing logic for preventing no checked checkboxes to emerge
      for (const btn of checkboxBtns) {
        if (btn != this && btn.getAttribute('aria-checked') === 'true') {
          e.target.setAttribute('aria-checked', false);
          e.target.textContent = 'Off';
          settings[e.target.id] = false;
          break;
        }
      }
      return
    } else {
      e.target.setAttribute('aria-checked', true);
      e.target.textContent = 'On';
      settings[e.target.id] = true
    }
  })
};

// Function declarations
function random(num) {
  return Math.floor(Math.random() * (num + 1))
};

function randomArrElemment(arr) {
  return arr[random(arr.length - 1)]
};

function generatePassword() {
  const res = [];
  const password = [];

  if (settings.uppercase) {
    res.push(uppercase);
    password.push(randomArrElemment(uppercase));
  };
  if (settings.lowercase) {
    res.push(lowercase);
    password.push(randomArrElemment(lowercase));
  };
  if (settings.numbers) {
    res.push(numbers);
    password.push(randomArrElemment(numbers));
  };
  if (settings.symbols) {
    res.push(symbols);
    password.push(randomArrElemment(symbols));
  };

  for (let i = password.length; i < settings.length; i++) {
    const char = randomArrElemment(randomArrElemment(res));
    password.push(char);
  };

  shuffle(password);
  const printIt = printPassword();
  printIt(password);
};

// Shuffes an array randomly using Fisher-Yates algorithm
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let spare = arr[i];
    let rnd = random(i);
    arr[i] = arr[rnd];
    arr[rnd] = spare;
  }
  return arr
};

function printPassword() {
  display.textContent = '';
  let i = 0;
  // for (let i = 0; i < password.length; i++) {

  //   setTimeout(function () {
  //     display.innerHTML += password[i]
  //   }, 100*i );
  // }
  return function printing(passcode) {
    if (i < passcode.length) {
      display.textContent += passcode[i]
    };
    i++;
    setTimeout(printing, 60, passcode);
  }
};