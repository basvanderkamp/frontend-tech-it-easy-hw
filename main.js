// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//1a
const tvTypes = inventory.map((inventory) => {
  return inventory.name;
});
console.log(tvTypes);



//1b
const soldOut = inventory.filter((inventory) => {
  return inventory.sold === inventory.originalStock;
})
console.log(soldOut);




//1c

const hasAmbilight = inventory.filter((inventory) => {
  return inventory.options.ambiLight;
})
console.log(hasAmbilight);



//1d
inventory.sort((a, b) => a.price - b.price);
console.log(inventory);



//2a
let amountSold = 0;
for (let i = 0; i < inventory.length; i++) {
  amountSold += inventory[i].sold;
}
console.log(amountSold);



//2b
document.getElementById(verkocht);
verkocht.textContent = amountSold;
verkocht.style.color = "green";



//2c
let amountBought = 0;
for (let i = 0; i < inventory.length; i++) {
  amountBought += inventory[i].originalStock;
}
console.log(amountBought);



//2d
document.getElementById(gekocht);
gekocht.textContent = amountBought;
gekocht.style.color = "blue";



//2e
let amountAvailable = 0;
amountAvailable = amountBought - amountSold;
console.log(amountAvailable);

document.getElementById(opVoorraad);
opVoorraad.textContent = amountAvailable;
opVoorraad.style.color = "red";



//3a en b

function tvBrands(arr) {
  const tvBrand = arr.map((inventory) =>{
    return inventory.brand;
  });
  const listOfBrands = document.createDocumentFragment();
  for (let brand of tvBrand) {
    const li = document.createElement('li')
    li.textContent = Brand;
    listOfBrands.appendChild(li);
  }
  const container = document.getElementById('BrandList');
  container.appendChild(listOfBrands);
}

tvBrands(inventory);






//4a
function tvNames(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}``;
}
console.log(tvNames(inventory[0]));


//4b
function tvPrice(tv) {
    return '€' + tv.price + ',-';
}
console.log(tvPrice(inventory[0]));



//4c
function tvData(tv) {
  let container = "";

  for (let i = 0; i < tv.availableSizes.length; i++) {
      const inch = tv.availableSizes[i];
      const cm = tv.availableSizes[i] * 2.54;
      container =`${container}${inch} inch (${cm}) cm | `;
    }
  return container;
}
console.log(tvData(inventory[5]));




//4d en e printen in console
function print(arr) {
  let result = "";
  arr.map((input) => {
    const result1 = tvNames(input);
    const result2 = tvPrice(input);
    const result3 = tvData(input);
    result +=  result1 + "\n" + result2 + "\n" + result3 + "\n";
  });
  return result;
}

console.log(print(inventory));

//bonus opdracht 2
//4d en e printen op pagina

function printAllDetails(Array) {
  Array.map((tv) => {
    const ListOfTv = document.createDocumentFragment();

    const tableRowElementName = document.createElement('tr');
    tableRowElementName.textContent = tvNames(tv);
    ListOfTv.appendChild(tableRowElementName);

    const tableRowElementPrice = document.createElement('tr');
    tableRowElementPrice.textContent = tvPrice(tv);
    ListOfTv.appendChild(tableRowElementPrice);

    const tableRowElementSize = document.createElement('tr');
    tableRowElementSize.textContent = tvData(tv);
    ListOfTv.appendChild(tableRowElementSize);

    const container = document.getElementById('selected-tv-info');
    container.appendChild(ListOfTv);
  });
}
printAllDetails(inventory);









//bonus 1b
function giveTvName(arr) {
  const soldOut = arr.filter((inventory) => {
    return inventory.sold === inventory.originalStock;

  });

  printAllDetails(soldOut)
}


//1c
  function giveAmbilight(arr) {
    const hasAmbilight = arr.filter((inventory) => {
      return inventory.options.ambiLight;
    });
    printAllDetails(hasAmbilight);
  }

//1d
  function sortOnPrice(arr) {
    arr.sort((a, b) => a.price - b.price);
    printAllDetails(arr);
  }












