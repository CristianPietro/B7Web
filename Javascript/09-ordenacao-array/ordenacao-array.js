let cars = [
  {brand: 'fiat', year: 2022},
  {brand: 'BMW', year: 2018},
  {brand: 'ferrari', year: 2020}
]
cars.sort( (a, b) => {
  if(a.year > b.year){
    return 1
  }else if(a.year < b.year){
    return -1
  }else{
    return 0
  }
});

console.log(cars)
