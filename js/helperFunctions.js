  // this  is a  date  function helping us filter today's  date  it's a helper function for  today's (dataset.filter) in index.js
   const  dateFunction=(dataset='05/05/2024 10:25 AM')=>{
 
     const currentDateData = new Date().toString().split(' ').splice(0,3);

     const  dataCellDateDate= new  Date(dataset).toString().split(' ').splice(0,3);

   return  currentDateData.every((_elem,i)=>currentDateData[i]===dataCellDateDate[i])
}

 export default dateFunction;