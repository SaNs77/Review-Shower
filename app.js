// const reviews = [
//   {
//     id: 1,
//     name: "Sandesh Pokhrel",
//     job: "Web developer",
//     img: "images/imgsans.jpg",
//     text:
//       "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
//   },
//   {
//     id: 2,
//     name: "Santosh Sah",
//     job: "Web designer",
//     img: "images/imgsant.jpg",
//     text:
//       "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
//   },
//   {
//     id: 3,
//     name: "Sans Pkhrl",
//     job: "BOSS",
//     img: "images/imgsans1.jpg",
//     text:
//       "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
//   },
//   {
//     id: 4,
//     name: "Vishal Anand",
//     job: "Intern",
//     img: "images/imgvis.jpg",
//     text:
//       "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
//   },
// ];
const reviews = JSON.parse(localStorage.getItem("array"));

const image = document.getElementById("image-id");
const name = document.getElementById("name-id");
const job = document.getElementById("job-id");
const info = document.getElementById("info-id");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const random = document.querySelector(".random");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

next.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prev.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

random.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);

  showPerson();
});
function showPerson() {
  image.src = reviews[currentItem].img;
  name.textContent = reviews[currentItem].name;
  job.textContent = reviews[currentItem].job;
  info.textContent = reviews[currentItem].text;
}
//----------------------for Taking review-------------------------
const image11 = document.getElementById("img1");
const name11 = document.getElementById("name1");
const job11 = document.getElementById("job1");
const info11 = document.getElementById("info1");
const save = document.getElementById("save");

save.addEventListener("click", function () {
  var newPerson = {
    id: reviews.length + 1,
    name: name11.value,
    job: job11.value,
    img: image11.value,
    text: info11.value,
  };

  reviews.push(newPerson);
  location.reload();
  localStorage.setItem("array", JSON.stringify(reviews));
});
