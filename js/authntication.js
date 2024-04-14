  const authenticationUi =document.getElementById('authenticationUi');
  const methodButton=document.getElementById('method');
  const actionButton=document.getElementById('action');
  const nameContainer=document.getElementById('nameContainer');
  const loginUserText=document.getElementById('user-welcome-text-loginCard')

  

  let clientwidth=document.body.clientWidth;
  
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
        if(blurPixels<2){
          increaseBlur=true
        }
       }
       
      
      authenticationUi.style.backdropFilter=`blur(${blurPixels}px)`
      console.log('blur',blurPixels);
    }
    let isloggingin=false;
    const handleMethodChange=()=>{
      
      isloggingin=!isloggingin
      console.log('islogged in',isloggingin);
      if(isloggingin){
        nameContainer.style.transition= 'opacity ease-in-out 0.2s, height  ease-in-out 0.5s'
          nameContainer.style.opacity='0'
          nameContainer.style.height='0'
           loginUserText.style.opacity='0'
          actionButton.style.color='#F8FCFF00'
          setTimeout(()=>{
            loginUserText.style.opacity='1'
            actionButton.innerText='login'
            actionButton.style.color='#F8FCFF'
            loginUserText.innerHTML='<h2>Welcome <span class="bright-green">back</span></h2>'
          },500)
          
         
          
      }
      else{
        loginUserText.style.opacity='0'
        nameContainer.style.transition='opacity ease-in-out 1s, height  ease-in-out 0.5s'
        nameContainer.style.opacity='initial'
        nameContainer.style.height='3em'
        actionButton.style.color='#F8FCFF00'
        loginUserText
        setTimeout(()=>{
          loginUserText.style.opacity='1'
          actionButton.innerText='Create Account'
          actionButton.style.color='#F8FCFF'
          loginUserText.innerHTML='<h2>Create a new  <span class="bright-green">Account</span></h2>'
        },500)
         

      }
    }
    
    function handleLoginClick(){
      console.log('hello  my fried')
    if(!isloggingin){
      handleMethodChange()
    }
    }
    methodButton.addEventListener('click',handleMethodChange)   