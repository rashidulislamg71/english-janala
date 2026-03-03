const loadLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";

  fetch(url)
    .then((res) => res.json())
    .then((json) => displayLesson(json));
};

const displayLesson = (lessons) => {
  // get the container and emnty
 
  const laveleContainer = document.getElementById("lavleContainner");
    laveleContainer.innerHTML = "";
  // get into every lessons
  for(let lesson of lessons.data){
    console.log(lesson)
      // create element
      const btnDiv = document.createElement("div");
      btnDiv.innerHTML = `
       <button class = "btn  btn-outline btn-primary " href="">
       <i class="fa-solid fa-book-open "></i> Learn - ${lesson.level_no} </button>
      
      `
      // append into container
      laveleContainer.append(btnDiv)
    
  }


};

loadLessons();
