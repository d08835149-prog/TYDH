const faqItems =
  document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

  const button =
    item.querySelector("button");

  const answer =
    item.querySelector(".answer");


  button.addEventListener("click", () => {

    const isOpen =
      item.classList.contains("open");


    faqItems.forEach(other => {

      other.classList.remove("open");

      other.querySelector(".answer")
        .style.maxHeight = null;

    });


    if (!isOpen) {

      item.classList.add("open");

      answer.style.maxHeight =
        answer.scrollHeight + "px";

    }

  });

});