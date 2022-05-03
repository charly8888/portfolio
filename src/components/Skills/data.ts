type skills = Array<skill>

interface skill {
  description: string
  img: Array<string>
}
export const dataSkills: skills = [
  {
    description: 'HOla me llamo alala',
    img: [
      '/public/icons/html.svg',
      '/public/icons/css.svg',
      '/public/icons/js.svg',
      '/public/icons/react.svg',
    ],
  },
  {
    description: 'descripcion',
    img: ['/public/icons/nodejs.svg', '/public/icons/mongo.svg'],
  },
  {
    description: 'metodologias',
    img: ['/public/icons/scrum.svg'],
  },
]
