  // this  is a  date  function helping us filter today's  date  it's a helper function for  today's (dataset.filter) in index.js
   const  dateFunction=(dataset='05/05/2024 10:25 AM')=>{
 
     const currentDateData = new Date().toString().split(' ').splice(0,3);

     const  dataCellDateDate= new  Date(dataset).toString().split(' ').splice(0,3);

   return  currentDateData.every((_elem,i)=>currentDateData[i]===dataCellDateDate[i])
}

 export default dateFunction;


//  'this   function is for  populating the  #task-view container with stored data or captured data'
export const populatingFunction=(todaysData,indexPageData,taskIcons,superscript,taskBackground)=>{
  $('.middle').html(indexPageData[1])
   
    let html=''
    todaysData.forEach(({taskTitle,taskDescription,taskTime,taskPriority,category})=>{
       

     
   const cellTemplate = `<section id="task-cell-container" >
   <div>
       <div class="circle"></div>
   </div>
   <div  class="task-detail-container">
         <section>${taskTitle}</section>
         <section class="taskCell-bottom-container">
           <span>today At  ${taskTime}</span>
           <section class="taskCell-bottom-right-data">
               <section style="background-color:${taskBackground[category]};" >
                     ${taskIcons[category]}
                   <span>${category}</span>
               </section>
               <section>
                   <i class="fas fa-flag"  ></i>
                   <span>${ superscript[taskPriority]}<span>
               </section>
           </section>
         </section>
   </div>
</section>`

 html+=cellTemplate
     
   })
    
 
   $('#task-container').html( html);
 
}
