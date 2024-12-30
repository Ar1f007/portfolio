"use client";

// import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { xcode as defaultStyle, atelierLakesideDark as darkStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { ComponentProps, FC } from 'react';
import { useTheme } from 'next-themes';
SyntaxHighlighter.registerLanguage('javascript', js);

interface CodeSnippetProps extends ComponentProps<typeof SyntaxHighlighter> {
  toggleStyle?: boolean;
}

const CodeSnippet: FC<CodeSnippetProps> = ({ toggleStyle = false, children, ...rest }) => {

  const { theme } = useTheme();

  return (
    <SyntaxHighlighter
      language="javascript"
      style={toggleStyle ? theme == "dark" ? darkStyle : defaultStyle : defaultStyle}
      showLineNumbers={true}
      wrapLongLines={true}
      customStyle={{
        background: "transparent",
        fontSize: "16px",
        lineHeight: 1.8,
      }}
      {...rest}
    >
      {children}
    </SyntaxHighlighter>
  )
}
export default CodeSnippet