// Define and export a functional React component called "Handle"
// It receives a prop object named "handle"
export default function Handle(handle) {
    return (
        
        // Renders the handle text (e.g., @SarahSmith) inside a paragraph element
        <p>{handle.text}</p>
    );
}
