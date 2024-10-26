const submit_message = document.querySelector("form");
submit_message.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thankyou for reaching out to me!");
    submit_message.reset();
})