const form = document.getElementById('form');

const processorPrice = { "i7": 300, "r7": 250, "i5": 200 };
const ramPrice = { "8GB": 50, "16GB": 100, "32GB": 200, "64GB": 400 };
const storagePrice = { "HDD 2TB": 100, "SSD 1TB": 150, "NVME 512GB": 200 };
const gpuPrice = {
  "GTX 1660": 300,
  "RTX 2060": 400, "RTX 3060": 500, "RTX 3070": 700, "RTX 3080": 900,
  "RX 5700": 350, "RX 6700": 450, "RX 6800": 600, "RX 6900": 800
};
const coolingPrice = { air: 50, water: 100, none: 0 };

function radioValue(name) {
  const radios = document.getElementsByName(name);
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return '';
}

function checkBoxesValues(name) {
  const chks = document.getElementsByName(name);
  const res = [];
  for (let i = 0; i < chks.length; i++) {
    if (chks[i].checked) {
      res.push(chks[i].value);
    }
  }
  return res;
}

function calcPrice(e) {
  e.preventDefault();

  const processor = radioValue('processor');
  const ram = radioValue('ram');
  const gpu = document.getElementById('gpu').value;
  const storages = checkBoxesValues('storage');
  const cooling = radioValue('cool');
  const text = document.getElementById('text').value;
  const color = document.getElementById('color').value;
  let price = 0;
  price += processorPrice[processor];
  price += ramPrice[ram];
  price += gpuPrice[gpu];
  storages.forEach(storage => price += storagePrice[storage]);
  price += coolingPrice[cooling];
  console.log('Processor: ' + processor);
  console.log('RAM: ' + ram);
  console.log('Storage: ' + storages);
  console.log('GPU: ' + gpu);
  console.log('Cooling: ' + cooling);
  console.log('Text: ' + text);
  console.log('Color: ' + color);
  console.log('Total price: ' + price + '$')
}

form.addEventListener('submit', calcPrice);
