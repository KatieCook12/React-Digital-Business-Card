// Define and export a functional React component named "Header"
// It receives a prop object called "header" containing 'name' and 'title'
export default function Header(header) {
    return (

        // Semantic HTML5 <header> element used to group the name and job title
        <header className="header">

            {/* Name section with a horizontal stroke line underneath */}
            <div className="name-div">
                
                {/* Display the person's name */}
                <h1 className="name">{header.name}</h1>

                {/* Decorative horizontal line */}
                <div className="stroke"></div>
            </div>

            {/* Display the job title below the name */}
            <h2 className="job-title">{header.title}</h2>
        </header>
    );
}
