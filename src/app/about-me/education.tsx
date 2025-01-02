import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
SyntaxHighlighter.registerLanguage('javascript', js);

const string = ` /**
  *-------------------
  * University
  *-------------------
  * Sylhet Metropolitan University, Bangladesh
  * from (2018 - 2022) 
  * Department: CSE
  * CGPA: 3.60 
  */

  /** 
   *-------------------
   * College
   *-------------------
   * M.C College, Sylhet
   * Background: Science
   * GPA: 5.00
  */

  /**
  *-------------------
  * High-School
  *-------------------
  * Sylhet Govt. Pilot High School, Sylhet
  * Background: Science
  * GPA: 5.00
  */`;

export const Education = () => {
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
  )
}