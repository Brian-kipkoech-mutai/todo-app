  const authenticationUi =document.getElementById('authenticationUi');
function response({credential}){
        
    const spited= credential.split('.');
    const encoded =spited[1];
    const decoded=atob(encoded);
    const json=JSON.parse(decoded);
    console.log('json',json);

    localStorage.setItem('usersData',JSON.stringify(json))
    


}
 
let deg=90;
let forward=true;
let backward=false
   function animateBackground(){
         
      if(deg==130){
        forward=false
        backward=true
        
      }
      if(deg==90){
        forward=true;
        backward=false;
      }

      if(forward){
        deg+=0.5;
    }
    if(backward){
        deg-=0.5
    }
    authenticationUi.style.background=`linear-gradient(${deg}deg,#162D4600,#182636,#040d16)`
    console.log(deg);
   }
    setInterval(()=>animateBackground(),100)