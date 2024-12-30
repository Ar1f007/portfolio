import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
SyntaxHighlighter.registerLanguage('javascript', js);

const string = `/**
 * @FRONT-END
 * JavaScript        React
 * TypeScript        Next.js
 * Vue.js            Tailwind
 * Material UI       Next UI
 * Shadcn UI         Styled-components
 * Responsive Design
 */

/** 
 * @BACK-END
 * Node.js          Express
 * MongoDB          Mongoose
 * RESTful APIs
 */

/**
 * @STATE-MANAGEMENT
 * Redux            React Query
 * Valtio          

 * @CONTAINERS / OTHERS
 * Docker           Git/GitHub
 * Firebase         Render
 * Netlify          Vercel
 */

/**
 * @TESTING
 * E2E Testing      Unit Testing
 * Vitest           
 */
`;


export const Technologies = () => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atelierLakesideDark}
      showLineNumbers={true}
      showInlineLineNumbers={true}
      wrapLongLines={true}
      wrapLines={true}
      customStyle={{
        background: "transparent",
        fontSize: "16px",
        lineHeight: 1.8,
      }}
    >
      {string}
    </SyntaxHighlighter>
  );
};