  const authenticationUi =document.getElementById('authenticationUi');
   
  
  let clientwidth=document.body.clientWidth
  
  let intervalsID=setInterval(()=>backdropanimation(),300)

window.addEventListener('resize',()=>{
    clientwidth=document.body.clientWidth
console.log('clientwidth',clientwidth);

    intervalsID =setInterval(()=>backdropanimation(),300)

})
//response WebToken from google;
function response({credential}){
        
    const spited= credential.split('.');
    const encoded =spited[1];
    const decoded=atob(encoded);
    const json=JSON.parse(decoded);
    console.log('json',json);

    localStorage.setItem('usersData',JSON.stringify(json))
    


}
  //  function to control the background  blur filter //
   let blurPixels=9
  let increaseBlur=true

    function backdropanimation(){
      if(blurPixels>=9){
        increaseBlur=false
      }
      increaseBlur ? blurPixels+=0.1:blurPixels-=0.1;
       if(clientwidth>1000){
        if(blurPixels<=0){
          
            clearInterval(intervalsID)
            
        }
       }
        if(clientwidth<1000){
        if(blurPixels<=2){
          increaseBlur=true
        }
       }
       
     console.log('blur',blurPixels);
      authenticationUi.style.backdropFilter=`blur(${blurPixels}px)`
          
    }
    
    // let intervalsID=setInterval(()=>backdropanimation(),timeSpan)