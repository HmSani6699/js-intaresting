// function add(name, newFunction) {
//     // console.log(newFunction);
//     newFunction(name)
// }

// function addFunction(name) {
//     console.log(name, 'Good Morning')
// }
// function goodAftarnone(name) {
//     console.log(name, 'Good Aftarnone')
// }

// add('Md: Sani', addFunction)
// add('Md: Sani', goodAftarnone)

//-----------------------------------------------------
function myInfo(addfunction, nana) {
    // console.log(nmae)
    addfunction(nana)
};

function greetMorning(nana) {
    console.log('Good Morning', nana)
};
function greetAftarnone(nana) {
    console.log('Good Morning', nana)
};

myInfo(greetMorning, 'Nana vai');
myInfo(greetAftarnone, 'Nana vai');