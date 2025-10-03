const emp={
    name:'Aman',
    age:23,
    adharCardNo:887172368847,
    accNum:"100236659988552222",
    emailId:'amanatknees@gmail.com'
};

// emp.key=100;
// console.log(emp);


const empProxy=new Proxy(emp,{
    get(target,props){
        if(props==='adharCardNo'){
            console.log('Senstive Information');
            return 'xxxxxxxx8847'
        }
           if(props==='accNum'){
            console.log('Senstive Information');
            return 'xxxxxxxxxxxxxx8847'
        }
        return Reflect.get({...arguments});
    }
})

console.log(emp.accNum);















