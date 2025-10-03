// const user = {
//     name: 'Uday',
//     greet: function () {
//         setTimeout(
//             function () {
//                 console.log(`Hi, I am ${this.name}`);
//             }, 1000
//         )
//     }
// };

const user = {
    name: 'Uday',
    greet: function () {
        setTimeout(
             () =>{
                console.log(`Hi, I am ${this.name}`);
            }, 1000
        )
    }
};

user.greet();