const fruits = [{"name": "Orange"}, {"name": "Peach"}, {"name": "Banana"}, {"name": "Apple"}, {"name": "Shwepps"}, {"name": "Avocado"}, {"name": "Mango"}];
//create a comparison sort function
const sorted = fruits.sort(function (x, y) {
    //store a lowercase value of the name property, converting the names to lowercase to avoid case-insensitivity sorting
    const nameA = x.name.toLowerCase();
    const nameB = y.name.toLowerCase();

    if(nameA < nameB) {
        return -1 //if nameA is less than nameB, indicates that a should be before b in the sorted array
    } if (nameA > nameB) {
        return 1  // if nameA is greater than nameB, indicates that a should be after b in the sorted array
    } else {
        return 0 // if nameA is equal to nameB, remains unchanged
    }
})

console.log(sorted);