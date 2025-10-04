function throttle(func,limit){
    let inthrottle;
    return function(...args){
        if(!inthrottle){
        func.apply(this,args);
        inthrottle=true;
        setTimeout(()=>inthrottle=false,limit);
        }
    };
}

function onscroll(){
    console.log("Scroll event at :",new Date().toLocaleTimeString()); 
}

const throttledScroll=throttle(onscroll,1000);
window.addEventListener("scroll",throttledScroll);