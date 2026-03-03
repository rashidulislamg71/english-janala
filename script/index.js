const loadLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";

  fetch(url)
    .then((res) => res.json())
    .then((json) => displayLesson(json));
};

const loadLevelWord = (id) => {
  const url = ` https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dispalyLevelWords(data.data);
    });
};

const dispalyLevelWords = (words) => {
  const wordContainer = document.getElementById("word-container");

  wordContainer.innerHTML = "";

  words.forEach((element) => {
    console.log(element);
    const wordCard = document.createElement("div");
    wordCard.innerHTML = `
    
      <div class="text-center space-y-4 px-5 py-10 bg-white rounded-xl">
          <p class="font-bold">${element.word}</p>
          <p class=" text-sm">Meaning / Pronunciation</p>
          <p class="font-semibold font-bangla">${element.meaning} / ${element.pronunciation}</p>
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
       <button class = "btn btn-outline btn-primary " onclick = "loadLevelWord(${lesson.level_no})" href="">
       <i class="fa-solid fa-book-open "></i> Learn - ${lesson.level_no} </button>
      `;
    //4 append into container
    laveleContainer.append(btnDiv);
  }
};

loadLessons();
