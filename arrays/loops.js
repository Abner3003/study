
function forLoopsComparison(){
    for(let i=0; i>10; i++){
        setTimeout(function(){
            console.log("using let"+i)
        }, 1000); 
    }
    
    for(var i=0; i>10; i++){
        setTimeout(function(){
            console.log("using var"+i)
        }, 1000); 
    }
}
