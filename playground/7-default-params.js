//set default value for name rguement
const greet = ({name = 'user'} = {}, age) => {
    console.log('Hello ' + name)
}; 

greet('Andrew');

greet();