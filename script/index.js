const loadLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";

  fetch(url)
    .then((res) => res.json())
    .then((json) => displayLesson(json));
};

const removeActive = () => {
  const lessionButtons = document.querySelectorAll(".lesson-btn");
  lessionButtons.forEach((btn)=> btn.classList.remove("active"));
};

const loadLevelWord = (id) => {
  const url = ` https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`lesson-btn-${id}`);
      clickBtn.classList.add("active");
      dispalyLevelWords(data.data);
    });
};

const dispalyLevelWords = (words) => {
  const wordContainer = document.getElementById("word-container");

  wordContainer.innerHTML = "";

  if (words.length == 0) {
    wordContainer.innerHTML = `
    <div class="col-span-full font-bangla text-center p-10 space-y-5 bg-white rounded-xl" >
    <img class = "m-auto" src = "./assets/alert-error.png" />
        <p class="text-sm text-gray-400">এই Lesson এ এখনো কোনো Vocabuliry যুক্ত করা হয়নি।</p>
        <h3 class="text-2xl font-bolo ">Next Lesson এ যান।</h3>
       </div>

       `;
  }

  words.forEach((element) => {
    const wordCard = document.createElement("div");
    wordCard.innerHTML = `
    
      <div class="text-center space-y-4 px-5 py-10 bg-white rounded-xl">
          <p class="font-bold">${element.word ? element.word : "অর্থ পাওয়া যায়নি"}</p>
          <p class=" text-sm">Meaning / Pronunciation</p>
          <p class="font-semibold font-bangla">${element.meaning ? element.meaning : " অর্থ পাওয়া যায়নি"} / ${element.pronunciation ? element.pronunciation : " Pronunciation পাওয়া যায়নি"}</p>
          <div class="flex justify-between items-center w-full mt-4">
            <button class="btn">
              <i class="fa-solid fa-circle-info"></i>
            </button>
            <button class="btn">
              <i class="fa-solid fa-volume-low"></i>
            </button>
          </div>
        </div>
    
    `;

    wordContainer.append(wordCard);
  });
};

const displayLesson = (lessons) => {
  //1 get the container and emnty

  const laveleContainer = document.getElementById("lavleContainner");
  laveleContainer.innerHTML = "";
  //2 get into every lessons
  for (let lesson of lessons.data) {
    //3 create element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
       <button id = "lesson-btn-${lesson.level_no}" class = "btn btn-outline btn-primary lesson-btn " onclick = "loadLevelWord(${lesson.level_no})" href="">
       <i class="fa-solid fa-book-open "></i> Learn - ${lesson.level_no} </button>
      `;
    //4 append into container
    laveleContainer.append(btnDiv);
  }
};

loadLessons();
