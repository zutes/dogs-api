var dogList = [
  {
    name: 'Cockapoo',
    types: ['toy', 'mini', 'maxi'],
    image: 'https://images.dog.ceo/breeds/cockapoo/bubbles2.jpg'
  },
  {
    name: 'Eskimo',
    types: ['american', 'canadian'],
    image: 'https://images.dog.ceo/breeds/eskimo/n02109961_10021.jpg' 
  },
  {
    name: 'Pointer',
    types: ['italian', 'german', 'brittany', 'english', 'irish'],
    image: 'https://images.dog.ceo/breeds/husky/n02110185_10844.jpg'
  }
];

/*
for (var i = 0; i < dogList.length; i++) {
  document.write(dogList[i].name + '  ')
}
*/

dogList.forEach(function(dog) {
  console.log(dog.name + ' has these types: ' + dog.types)
});