let countDownDiv = document.getElementById('countDown');



let countDown = 11;

let mainFunction = (callback)=> {
    setTimeout(()=>{
        if(countDown>=0){
            countDown--;
            
            countDownDiv.textContent = countDown;
        }
        callback();
    },1000)
    
    
}

let callback_1 = (callback)=> {
    setTimeout(()=>{
        if(countDown>=0){
            countDown--;
            
            countDownDiv.textContent = countDown;
        }
        callback();
    },1000)
}

let callback_2 = (callback)=> {
    setTimeout(()=>{
        if(countDown>=0){
            countDown--;
            
            countDownDiv.textContent = countDown;
        }
        callback();
    },1000)
}

let callback_3 = (callback)=> {
    
    setTimeout(()=>{
        if(countDown>=0){
            countDown--;
            
            countDownDiv.textContent = countDown;
        }
        callback();
    },1000)
}

let callback_4 = (callback)=> {
   
    setTimeout(()=>{
        if(countDown>=0){
            countDown--;
            
            countDownDiv.textContent = countDown;
        }
        callback();
    },1000)
}

let callback_5 = (callback)=> {
   
    setTimeout(()=>{
        if(countDown>=0){
            countDown--;
            
            countDownDiv.textContent = countDown;
        }
        callback();
    },1000)
}

let callback_6 = (callback)=> {
   
    setTimeout(()=>{
        if(countDown>=0){
            countDown--;
            
            countDownDiv.textContent = countDown;
        }
        callback();
    },1000)
}

let callback_7 = (callback)=> {
   
    setTimeout(()=>{
        if(countDown>=0){
            countDown--;
            
            countDownDiv.textContent = countDown;
        }
        callback();
    },1000)
}

let callback_8 = (callback)=> {
   
    setTimeout(()=>{
        if(countDown>=0){
            countDown--;
            
            countDownDiv.textContent = countDown;
        }
        callback();
    },1000)
}

let callback_9 = ()=> {
   
    setTimeout(()=>{
        if(countDown>=0){
            countDown--;
            
            countDownDiv.textContent = countDown;
        }
        if(countDown==1){
            setTimeout(()=>{
                countDownDiv.textContent = `Happy Independence Day`;
                countDownDiv.style.color = '#FFFAFF'
                countDownDiv.style.fontSize = '11vw'
                countDownDiv.style.fontWeight = 'bold'
            },500)
        }
        
    },1000)
}

mainFunction(()=>{
   
   
    
    callback_1(()=>{
      
        callback_2(()=>{
           
            callback_3(()=>{
                
                callback_4(()=>{
                    
                    callback_5(()=>{
                        
                        callback_6(()=>{
                           
                            callback_7(()=>{
                                
                                callback_8(()=>{
                                    callback_9()
                                })
                            })
                        }) 
                    })
                    
                })
            })
        })
    })
})