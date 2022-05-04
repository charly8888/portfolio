type skills = Array<skill>

interface skill {
  description: string
  img: Array<string>
}
export const dataSkills: skills = [
  {
    description:
      'It attracts me because it is the area that has a direct relationship with the client. I consider it important to master native HTML, CSS and JAVASCRIPT. Regarding frameworks, I am specializing in REACT. I also work with libraries like Sass.',
    img: [
      '/icons/html.svg',
      '/icons/css.svg',
      '/icons/js.svg',
      '/icons/react.svg',
      '/icons/sass.svg',
    ],
  },
  {
    description:
      'I have done some project with the MERN stack. In the future I would like to delve deeper into these technologies',
    img: ['/icons/nodejs.svg', '/icons/mongo.svg'],
  },
  // {
  //   description:
  //     'He leído mucho sobre metodologías ágiles y dada mi experiencia en el deporte son formas de organizar equipos que me resultan familiares. SCRUM, por ejemplo, es una metodología que viene del rugby.',
  //   img: ['/icons/scrum.svg'],
  // },
]
