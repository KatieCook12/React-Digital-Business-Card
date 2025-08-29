// Define and export a functional React component named "ProfileImage"
export default function ProfileImage({ imageUrl, alt }) {
  return (

    // This <div> displays the profile image
    <div
      className="profile-image"
      style={{
        background: `url('${imageUrl}') lightgray -82.229px -105.26px / 201.081% 251.351% no-repeat`
      }}
      role="img"
      aria-label={alt}
    />
  );
}