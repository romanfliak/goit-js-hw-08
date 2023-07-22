import throttle from "lodash.throttle";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".feedback-form");
    const emailInput = form.querySelector("input[name='email']");
    const messageInput = form.querySelector("textarea[name='message']");
  
    const saveFormData = throttle(() => {
      const formData = {
        email: emailInput.value,
        message: messageInput.value,
      };
      localStorage.setItem("storageKey", JSON.stringify(formData));
    }, 500);
  
    const loadFormData = () => {
      const savedFormData = JSON.parse(localStorage.getItem("feedback-form-state"));
      if (savedFormData) {
        emailInput.value = savedFormData.email;
        messageInput.value = savedFormData.message;
      }
    };
  
    const clearFormData = () => {
      localStorage.removeItem("feedback-form-state");
    
      console.log("Form submitted with data:", {
        email: emailInput.value,
        message: messageInput.value,
      });
    };
    emailInput.addEventListener("input", saveFormData);
    messageInput.addEventListener("input", saveFormData);
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      clearFormData();
    });
  
    loadFormData();
  });
  