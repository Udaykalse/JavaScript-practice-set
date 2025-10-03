// Question 16: Categorize Data (reduce for Grouping)

function categorizeNumbers(arr){
    return arr.reduce((cate,num)=>{
        if(num%2===0){
            cate.even.push(num);
        }else{
            cate.odd.push(num);
        }
        return cate;
    },{even:[],odd:[]});
};

const numList=[1,2,3,4,5,6,7,8,9,0];
const categories=categorizeNumbers(numList);
console.log(categories);