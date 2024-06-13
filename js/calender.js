document.addEventListener('DOMContentLoaded', () => {
       

    const fetchDataFromLocalStorage = () => {
        const dataSet = JSON.parse(localStorage.getItem("dataSet"))||[];
        const cleanedData = dataSet.map(task=> {
            return {
              title: task.taskTitle,
              start: new Date(task.taskDate).toISOString(),
              description: task.taskDescription,
              category: task.category,
              priority: task.taskPriority,
              completed: task.completed,
            };
        })
        return cleanedData;
    }

    const updateUi = (title,description,time) => {
        const titleTxt = document.getElementById("task-title");
        const descriptionTxt = document.getElementById("task-description");
        const timeTxt = document.getElementById("data_time");
        titleTxt.innerText = title;
        descriptionTxt.innerText = description;
        timeTxt.innerHTML = new Date(time).toString();

        
    }

    const calendarEl = document.getElementById('calendar');
     const calendar = new FullCalendar.Calendar(calendarEl, {
       initialView: "dayGridMonth",
       headerToolbar: {
         left: "prev,next today",
         center: "title",
         right: "dayGridMonth,timeGridWeek,timeGridDay",
       },
       events: fetchDataFromLocalStorage(),
         eventColor: " #797bdf",
         borderColor:'#444444',
         eventClick: function (info) {
           updateUi(
             info.event.title,
             info.event.extendedProps.description,
             info.event.start
           );
         
       },
     });
    calendar.render();

})
