async function fetchData() {
    try{
        // const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const respo=await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data=await respo.json();
        console.log(data);
    }catch(error){
        console.error("Error:- ",error);
    };
    
};

fetchData();