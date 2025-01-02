"use client"

import CodeSnippet from './code-snippet';
// passion: [
//   'Optimizing performance',
//   'Creating responsive designs',
//   'Experimenting with new frameworks'
// ],

const codeBlocks = [
  `const I = {
  am: 'a Frontend Developer',
  expertise: ['TypeScript', 'React', 'Next.js', 'Vue', 'Remix', 'Node.js'],
  experience: '2+ years in web development',
  goal: 'To continuously enhance user experiences 
  through better design and performance'
}`,

  `const I = {
  am: 'a Frontend Dev by day, football fan by night',
  hobbies: ['Writing clean code', 'Debugging', 'Experimenting with new tech'],
  achievements: [
    'Improved page load speed by 80%',
    'Successfully restructured complex UIs from scratch',
    'Built and maintained an intricate admin panel application',
  ],
  favoriteTeam: "Manchester United"
}`
];



export default function CodeBlocks() {

  return (
    <>
      {codeBlocks.map((codeStr, i) => (
        <div key={i} className="py-8 px-2 border rounded-md">
          <CodeSnippet
            wrapLines={true}
            showLineNumbers={false}
          >
            {codeStr}
          </CodeSnippet>
        </div>
      ))}
    </>
  )
}

