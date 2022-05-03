type skills = Array<skill>

interface skill {
  description: string
  img: Array<string>
}
export const dataSkills: skills = [
  {
    description:
      'Me atrae porque es el área que tiene relación directa con el cliente. Considero importante dominar HTML, CSS y JAVASCRIPT nativos. En cuanto a frameworks, me estoy especializando en REACT. También trabajo con librerias como Sass.',
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
      'He realizado algún proyecto con el stack MERN. En el futuro me gustaría profundizar más en estas tecnologías',
    img: ['/icons/nodejs.svg', '/icons/mongo.svg'],
  },
  // {
  //   description:
  //     'He leído mucho sobre metodologías ágiles y dada mi experiencia en el deporte son formas de organizar equipos que me resultan familiares. SCRUM, por ejemplo, es una metodología que viene del rugby.',
  //   img: ['/icons/scrum.svg'],
  // },
]
