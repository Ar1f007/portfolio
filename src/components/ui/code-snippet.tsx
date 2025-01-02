"use client";

import { atelierDuneLight as lightStyle, atelierLakesideDark as darkStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { ComponentProps, FC } from 'react';
import { useTheme } from 'next-themes';

SyntaxHighlighter.registerLanguage('javascript', js);

interface CodeSnippetProps extends ComponentProps<typeof SyntaxHighlighter> {
  toggleStyle?: boolean;
}

const CodeSnippet: FC<CodeSnippetProps> = ({ children, ...rest }) => {
  const { theme } = useTheme();

  return (
    <SyntaxHighlighter
      language="javascript"
      style={theme == "dark" ? darkStyle : lightStyle}
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