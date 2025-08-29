// Define and export a functional React component named ContactDetails
// It receives a prop object called "contactdetails"
export default function ContactDetails(contactdetails) {
    return (

        // Container for a single line of contact information (icon + text)
        <div className="details-container">
            
            {/* Icon wrapper with background and padding */}
            <div className="image-container">
                <img
                
                    // The source of the icon image (e.g., phone, email, etc.)
                    src={contactdetails.img.src}

                    // Alternative text for accessibility
                    alt={contactdetails.img.alt}

                    // CSS class to style the icon
                    className="contact-icon"
                />
            </div>

            {/* Displays the contact detail text (e.g., phone number, email) */}
            <p className="contact-details">{contactdetails.details}</p>
        </div>
    );
}
