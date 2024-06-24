const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are a type of collapsible interface that allows users to toggle the display of sections of content.",
  },
  {
    id: "2",
    question: "How do accordions work?",
    answer:
      "Accordions work by expanding and collapsing content when the user clicks on the accordion header.",
  },
  {
    id: "3",
    question: "What are the benefits of using accordions?",
    answer:
      "Accordions are a great way to manage large amounts of content and provide an organized and user-friendly experience.",
  },
  {
    id: "4",
    question: "How do I create an accordion component?",
    answer:
      "You can create an accordion component using HTML, CSS, and JavaScript. There are also many libraries and frameworks available that provide pre-built accordion components.",
  },
];

// put data in accordion

const accordionWrapper = document.querySelector(".accordion");

function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map(
      (dataItem) => `<div class="accordion_item">
        <div class="accordion_title">
        <h3>${dataItem.question}
        
        </h3>
        <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div class="accordion_content">
        
        <p>${dataItem.answer}</p>
        </div>
        </div>`
    )
    .join(" ");
}

createAccordionData();

const getAccordionTitle = document.querySelectorAll(".accordion_title");

getAccordionTitle.forEach((currentItem) =>
  currentItem.addEventListener("click", (e) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let getAlreadyAddedActiveClassed = document.querySelectorAll(".active");
      getAlreadyAddedActiveClassed.forEach((currentActiveitem) =>
        currentActiveitem.classList.remove("active")
      );
      currentItem.classList.add("active");
    }
  })
);
