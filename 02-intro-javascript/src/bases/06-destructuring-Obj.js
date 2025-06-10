const person = {
    name: 'Tony',
    age: '40',
    key: 'Ironman',
};
// const name = 'Other name';
// const { name:nameObject, age, key} = person
// console.log(name);
// console.log(nameObject);
// console.log(age);
// console.log(key);

const getContext = ({ name, age, key, range='Cap'}) => {
    // console.log(name, age, key, range);
    return {
        nameKey: key,
        years:age,
        latlng: {
            lat: 12.222,
            lng: 33.333,
        }
    }
};
const { nameKey, years, latlng: {lat, lng}} = getContext(person);
console.log(nameKey,years);
console.log(lat, lng);