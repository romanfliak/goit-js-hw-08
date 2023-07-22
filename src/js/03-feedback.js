import throttle from "lodash.throttle";


    const form = document.querySelector(".feedback-form");
    const emailInput = form.querySelector("input[name='email']");
    const messageInput = form.querySelector("textarea[name='message']");
    const storageKey = 'feedback-form-state';
    
    
    const savedFormData = throttle(() => {
      const formData = {
        email: emailInput.value,
        message: messageInput.value,
      };
      localStorage.setItem("storageKey", JSON.stringify(formData));
    }, 500);
  form.addEventListener('input', savedFormData)
    
  const loadFormData = () => {
      const savedFormData = JSON.parse(localStorage.getItem(storageKey));
      if (savedFormData) {
        emailInput.value = savedFormData.email || '';
        messageInput.value = savedFormData.message || '';
      }
    };
  form.addEventListener('submit', event =>{
    event.preventDefault();
    console.log({
    email: messageInput.value,
    message : messageInput.value,
    })
   localStorage.removeItem(storageKey);
   emailInput.value = '';
   messageInput.value = ''
  })
    loadFormData();
  