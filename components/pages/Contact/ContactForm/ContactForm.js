import "./ContactForm.css";

const ContactForm = () => {
  return `
    <div class="contact-form-container">
        <div class="img-contant-container">
            <img src="/images/contact.svg" alt="contact-svg" />
        </div>
        <div class="form-container">
            <form>
                <input type="text" id="name" placeholder="Name:"> 
                <input type="email" id="email" placeholder="Email:"> 
                <textarea id="message" rows="4" cols="50" placeholder="Message:"></textarea>
                <button class="btn-primary"><i class="fas fa-paper-plane"></i> Send message</button>
            </form>
        </div>
    </div>
    `;
};

export default ContactForm;
