// Importing React library
import React from 'react';

// Importing custom components and image assets
import TriangleBackground from './components/TriangleBackground';
import ProfileImage from './components/ProfileImage';
import Header from './components/Header';
import ContactDetails from './components/ContactDetails';
import ProfilePicture from './images/sarah-smith-marketing-manager.jpg'
import EmailIcon from './images/email-icon.svg';
import FacebookIcon from './images/facebook-icon.svg';
import InstagramIcon from './images/instagram-icon.svg';
import LaptopIcon from './images/laptop-icon.svg';
import PhoneIcon from './images/phone-icon.svg';
import TikTokIcon from './images/tiktok-icon.svg';
import XIcon from './images/x-icon.svg';
import Button from './components/Button';
import SocialMediaIcons from './components/SocialMediaIcon';
import Handle from './components/Handle';

// Main App component
function App() {
    return (
        <>
            {/* Main business card container */}
            <div className="business-card">

                {/* Top section side of the card containing user's information */}
                <section className="information">

                    {/* Profile picture and header (name + title) */}
                    <div className='profile-information' aria-label='Profile information'>

                        {/* Renders user's photo */}
                        <ProfileImage
                            imageUrl= {ProfilePicture}
                            alt="Sarah Smith smiling at the camera with glasses"
                        />

                        {/* Displays name and job title */}
                        <Header
                            name="Sarah Smith"
                            title="Marketing Manager"
                        />
                    </div>

                    {/* Contact details: phone, email, website */}
                    <div className='contact-details-container' aria-label='Contact details'>
                        <ContactDetails
                            img={{
                                src: PhoneIcon,
                                alt: "White phone icon"
                            }}
                            details="(123) 456-7891"
                        />
                        <ContactDetails
                            img={{
                                src: EmailIcon,
                                alt: "White email icon"
                            }}
                            details="contact@sarahsmith.com"
                        />
                        <ContactDetails
                            img={{
                                src: LaptopIcon,
                                alt: "White laptop icon"
                            }}
                            details="sarahsmith.com"
                        />
                    </div>

                    {/* Button to visit website */}
                    <Button />
                </section>

                {/* Footer section with social media icons and handle */}
                <footer className='footer'>

                    {/* Social media icons: Instagram, TikTok, X (Twitter), Facebook */}
                    <div className="social-media-icons-container">
                        <SocialMediaIcons
                            img={{
                                src: InstagramIcon,
                                alt: "White Instagram icon"
                            }}
                        />
                        <SocialMediaIcons
                            img={{
                                src: TikTokIcon,
                                alt: "White TikTok icon"
                            }}
                        />
                        <SocialMediaIcons
                            img={{
                                src: XIcon,
                                alt: "White X icon"
                            }}
                        />
                        <SocialMediaIcons
                            img={{
                                src: FacebookIcon,
                                alt: "White Facebook icon"
                            }}
                        />
                    </div>

                    {/* User's social media handle */}
                    <Handle text="@sarahsmith" />
                </footer>
            </div>

            {/* Background container */}
            <div className="background-wrapper">
                <TriangleBackground /> {/* Renders decorative triangle background */}
            </div>
        </>
    );
}

export default App;
