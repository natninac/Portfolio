

const firebaseConfig = {
    apiKey: "AIzaSyCut2FU0G-p7phGzL6-iUntebh_6HvJfDo",
    authDomain: "portfolio-contact-4aba4.firebaseapp.com",
    projectId: "portfolio-contact-4aba4",
    storageBucket: "portfolio-contact-4aba4.firebasestorage.app",
    messagingSenderId: "734177748318",
    appId: "1:734177748318:web:5239a88ca807c33f735bcf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        console.log('Form found');
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Form submitted');
            
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            try {
                console.log('Attempting to send to Firebase');
                const docRef = await db.collection("contacts").add({
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value,
                    timestamp: new Date()
                });
                console.log('Document written with ID: ', docRef.id);
                alert('Message sent successfully!');
                this.reset();
            } catch (error) {
                console.error("Error sending message:", error);
                alert('Error sending message. Please try again.');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }
        });
    } else {
        console.error('Contact form not found');
    }
});