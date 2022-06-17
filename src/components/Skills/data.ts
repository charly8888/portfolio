type skills = Array<skill>

interface skill {
  description: string
  img: Array<Array<string>>
}
export const dataSkills: skills = [
  {
    description:
      'It attracts me because it is the area that has a direct relationship with the client. I consider it important to master native HTML5, CSS3 and JavaScript. Regarding frameworks, I am specializing in REACT. I also work with libraries like Sass.',
    img: [
      [
        '/icons/html.svg',
        'https://developer.mozilla.org/en-US/docs/Web/HTML',
        'HTML5',
      ],
      [
        '/icons/css.svg',
        'https://developer.mozilla.org/en-US/docs/Web/CSS',
        'CSS3',
      ],
      [
        '/icons/js.svg',
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        'JavaScript',
      ],
      ['/icons/react.svg', 'https://es.reactjs.org', 'ReactJS'],
      ['/icons/sass.svg', 'https://sass-lang.com/', 'SASS'],
    ],
  },
  {
    description:
      'I have done some project with the MERN stack. In the future I would like to delve deeper into these technologies.',
    img: [
      ['/icons/nodejs.svg', 'https://nodejs.org', 'NodeJS'],
      ['/icons/mongo.svg', 'https://www.mongodb.com', 'MongoDB'],
    ],
  },
]
