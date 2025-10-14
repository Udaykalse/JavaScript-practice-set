function fetchData(){
    return new Promise((res)=>{
        setTimeout(()=>res("data Loaded"),1000);
    });
};

async function load() {
    const result=await fetchData();
    console.log(result);
};

load();

