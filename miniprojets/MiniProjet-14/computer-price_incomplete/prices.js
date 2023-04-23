const form = document.getElementById('form');

/* computer pieces prices */
const processorPrice = { "i7": 300, "r7": 250, "i5": 200 };
const ramPrice = { "8GB": 50, "16GB": 100, "32GB": 200, "64GB": 400 };
const storagePrice = { "HDD 2TB": 100, "SSD 1TB": 150, "NVME 512GB": 200 };
const gpuPrice = {
  "GTX 1660": 300,
  "RTX 2060": 400, "RTX 3060": 500, "RTX 3070": 700, "RTX 3080": 900,
  "RX 5700": 350, "RX 6700": 450, "RX 6800": 600, "RX 6900": 800
};
const coolingPrice = { air: 50, water: 100, none: 0 };

/* TODO: Calculate the price of the selected config */