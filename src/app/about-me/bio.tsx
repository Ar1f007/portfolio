import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

// Defining the bio strings
const desktopBio = `/**
  *  Hello! I’m Ariful Hoque Al Amin.
  *  I’m a frontend developer with over two years of experience,
  *  specializing in creating clean and responsive web applications.
  *  Based in Sylhet, Bangladesh, I currently work for a UK-based company.
  * 
  *  I am proficient in TypeScript, React, and Next.js, 
  *  and I have explored Vue as well as modern CSS frameworks 
  *  like Material UI and Next UI. My experience includes 
 *  using state management tools such as Redux, React Query, and Valtio.
 * 
 *  In addition to my frontend expertise, I have a solid 
 *  background in backend technologies, including Node.js 
 *  and Express, enabling me to build full-stack applications 
 *  and REST APIs as needed.
 * 
 *  I am passionate about creating intuitive user interfaces 
 *  and am dedicated to continuously improving my skills 
 *  to stay current with the latest web development practices.
 */`;

const mobileBio = `/**
  Hello! I’m Ariful Hoque Al Amin, but you can call me Arif.
  I’m a frontend developer with over two years of experience,
  specializing in creating clean and responsive web applications.
  Based in Sylhet, Bangladesh, I currently work for a UK-based company.

  I am proficient in TypeScript, React, and Next.js, 
  and I have explored Vue as well as modern CSS frameworks 
  like Material UI and Next UI. My experience includes 
  using state management tools such as Redux, React Query, and Valtio.

  In addition to my frontend expertise, I have a solid 
  background in backend technologies, including Node.js 
  and Express, enabling me to build full-stack applications 
  and REST APIs as needed.

  I am passionate about creating intuitive user interfaces 
  and am dedicated to continuously improving my skills 
  to stay current with the latest web development practices.
*/`;

export const Bio = () => {
  return (
    <>
      <div className='hidden md:block'>
        <SyntaxHighlighter
          language="javascript"
          style={atelierLakesideDark}
          showLineNumbers={true}
          wrapLongLines={true}
          customStyle={{
            background: "transparent",
            fontSize: "16px",
            lineHeight: 1.8,
          }}
        >
          {desktopBio}
        </SyntaxHighlighter>
      </div>
      <div className='md:hidden'>
        <SyntaxHighlighter
          language="javascript"
          style={atelierLakesideDark}
          showInlineLineNumbers={true}
          wrapLongLines={true}
          customStyle={{
            background: "transparent",
          }}
        >
          {mobileBio}
        </SyntaxHighlighter>
      </div>
    </>
  )
}