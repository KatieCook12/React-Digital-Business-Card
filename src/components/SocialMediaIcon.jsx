// Define and export a functional React component named "SocialMediaIcons"
// It receives a prop object called "socialmediaicon"
export default function SocialMediaIcons(socialmediaicon) {
    return (
        
        // Container for styling and layout of the icon
        <div className="social-media-icons">

            {/* Render the social media icon image using props for src and alt */}
            <img
                className="social-media-icon"           // CSS class for sizing and styling
                src={socialmediaicon.img.src}           // Image source (icon file path)
                alt={socialmediaicon.img.alt}           // Alt text for accessibility
            />
        </div>
    );
}
