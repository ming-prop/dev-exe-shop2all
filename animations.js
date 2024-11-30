// Function to open the modal with the product details
function openModal(productId) {
    const modal = document.getElementById('product-modal');
    const productInfo = document.getElementById('product-info');
    const modalContent = document.querySelector('.modal-content');

    // Example of adding product info dynamically (You can replace this with actual product data)
    if (productId === 'netflix-1') {
        productInfo.innerHTML = `
            <h2>Lifetime Netflix Account</h2>
            <p>Description: 2-3 profiles, can be used in up to 2-3 devices at a time (Standard Plan 1080p FULL HD)</p>
            <p>Price: ₹350 FOR LIFETIME!</p>
            <p>Stock: 50</p>
        `;
    }
    // Add more conditions for other products here

    // Show the modal
    modal.style.display = 'flex';
    
    // GSAP for smooth animation on modal content
    gsap.to(modalContent, {
        opacity: 1,
        scale: 1,
        duration: 0.5
    });
    modalContent.classList.add('show'); // Add show class for CSS transition
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    const modalContent = document.querySelector('.modal-content');

    gsap.to(modalContent, {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        onComplete: () => {
            modal.style.display = 'none';
        }
    });
    modalContent.classList.remove('show'); // Remove show class
}


