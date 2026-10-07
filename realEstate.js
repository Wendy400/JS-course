const apartments = {
    name: "Sunset Apartments",
    location: "Nairobi",
    units: 35,
    amenities: ["Gym", "Swimming Pool", "Parking"],
    isAvailable: true,
}
// .........using (for in) to iterate in objects ......
for(const key in apartments){
   // console.log(`${key}: ${apartments[key]}`)
} 



for(const object in apartments){
   // console.log(`${object}`)

}


// canvas example

const property = {
  name: 'Broadway Apartments',
  address: {
    street1: '11 Broadway',
    city: 'New York',
    state: 'NY',
    zipCode: '10004'
  },
  amenities: ['Pool', 'Gym', 'Parking']
};

for (const key in property) {
  if (typeof property[key] === 'object') {
    console.log(`Nested data in ${key}:`);
    for (const subKey in property[key]) {
      console.log(`${subKey}: ${property[key][subKey]}`);
    }
  } else {
    console.log(`${key}: ${property[key]}`);
  }
}