document.addEventListener("DOMContentLoaded", () => {
  const faqData = [
    {
      question: "What is Bestzone?",
      answer: "Bestzone is your one-stop shop for clothes, books, watches, and accessories."
    },
    {
      question: "How can I track my order?",
      answer: "After placing an order, you'll receive a tracking link on your email."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, UPI, net banking, and COD in selected locations."
    },
    {
      question: "Can I return or exchange a product?",
      answer: "Yes, products can be returned/exchanged within 7 days of delivery under eligible conditions."
    }
  ];

  const faqContainer = document.getElementById("faq-container");

  faqData.forEach((item) => {
    const faqItem = document.createElement("div");
    faqItem.classList.add("faq-item");

    const question = document.createElement("div");
    question.classList.add("faq-question");
    question.textContent = item.question;

    const answer = document.createElement("div");
    answer.classList.add("faq-answer");
    answer.textContent = item.answer;

    question.addEventListener("click", () => {
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });

    faqItem.appendChild(question);
    faqItem.appendChild(answer);
    faqContainer.appendChild(faqItem);
  });

  document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("notification").style.display = "none";
});

});
