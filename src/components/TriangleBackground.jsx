// Define and export a functional React component named "TriangleBackground"
export default function TriangleBackground() {
  return (
    <>

      {/* First triangle SVG with purple gradient background */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="600" 
        height="237" 
        viewBox="0 0 600 237" 
        fill="none" 
        className="triangle-background"
      >

        {/* Triangle path filled with a vertical purple gradient */}
        <path 
          d="M0 0H600V237L0 117V0Z" 
          fill="url(#paint0_linear_56_4)" 
        />
        <defs>

          {/* Define vertical linear gradient for the first triangle */}
          <linearGradient 
            id="paint0_linear_56_4" 
            x1="300" 
            y1="0" 
            x2="300" 
            y2="237" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7244D1" />
            <stop offset="1" stop-color="#7244D1" stop-opacity="0.70" />
          </linearGradient>
        </defs>
      </svg>

      {/* Second triangle SVG with gray/white gradient background */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="600" 
        height="583" 
        viewBox="0 0 600 583" 
        fill="none" 
        className="triangle-background-1"
      >

        {/* Triangle path filled with a vertical white/gray gradient */}
        <path 
          d="M0 0H600V344.5L1.12057e-05 582.5L0 0Z" 
          fill="url(#paint0_linear_56_43)" 
        />
        <defs>
          
          {/* Define vertical linear gradient for the second triangle */}
          <linearGradient 
            id="paint0_linear_56_43" 
            x1="300" 
            y1="541.5" 
            x2="300" 
            y2="0" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EDEDED" stop-opacity="0"/>
            <stop offset="0.756532" stop-color="#E8E8E8"/>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
