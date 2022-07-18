type tech =
  | 'css.svg'
  | 'docker.svg'
  | 'firebase.svg'
  | 'html.svg'
  | 'js.svg'
  | 'jwt.svg'
  | 'mongo.svg'
  | 'nextjs.svg'
  | 'nodejs.svg'
  | 'react.svg'
  | 'sass.svg'
  | 'tail.svg'
interface project {
  title: string
  siteURL: string
  github: string
  siteImage: string
  description: string
  typeOfProject: string
  technologies: Array<tech>
}
type data = project[]

export const projectsData: data = [
  {
    title: 'Shortcut App',
    siteURL: 'https://shortcuts-app-one.vercel.app/',
    github: 'https://github.com/charly8888/shortcutsApp',
    siteImage: '/images/shortcutApp.png',
    description:
      'This is, without a doubt, the project I am most proud of. It is a website where you can save links or texts and group them by folders; all this trying to imitate an operating system. The idea is that it replaces the default layout when opening a new tab. The site still has a long way to go. Notifications, improve colors/design, better performance, refactor the code, etc... but at the moment it can be said that this is the final version 1.0 and it meets the minimum that I would like.',
    typeOfProject: 'FS',
    technologies: ['css.svg', 'html.svg', 'js.svg', 'jwt.svg'],
  },
  {
    title: 'Upload images',
    siteURL: 'https://upload-images-german-dev.netlify.app/',
    github: 'https://github.com/charly8888/image-uploader',
    siteImage: '/images/upload-image.png',
    description:
      'A "devchallenges.io" challenge. My first fullstack project that consists of uploading an image to the cloud and being able to share it through a link valid for 24 hours',
    typeOfProject: 'FS',
    technologies: [
      'css.svg',
      'html.svg',
      'js.svg',
      'nodejs.svg',
      'react.svg',
      'tail.svg',
    ],
  },
  {
    title: 'Interview steps',
    siteURL: 'https://cognizant-challenge.netlify.app/',
    github: 'https://github.com/charly8888/cognizant-challenge',
    siteImage: '/images/challenge-cognizant.png',
    description:
      'This was a mini challenge that involves managing our candidates based on the step they are at.',
    typeOfProject: 'F',
    technologies: ['css.svg', 'html.svg', 'js.svg', 'react.svg'],
  },
  {
    title: 'Space Tourism',
    siteURL: 'https://space-tourism-site-charly8888.netlify.app',
    github: 'https://github.com/charly8888/space-tourism-website',
    siteImage: '/images/space-tourism.png',
    description:
      'This is a front-end coding challenge from @frontendmentor. It contains information about people, planets and technology.',
    typeOfProject: 'F',
    technologies: ['css.svg', 'html.svg', 'js.svg', 'react.svg'],
  },
  {
    title: 'Ecommerce',
    siteURL: 'https://e-comerce-challenge.netlify.app/',
    github: 'https://github.com/charly8888/challenge_e-commerce',
    siteImage: '/images/ecommerce.png',
    description:
      'this is an "Aerolab" front-end coding challenge.They provided me with a REST API with a user, history and points; and I had to make the front and logic the same as the figma they provided me.',
    typeOfProject: 'F',
    technologies: ['css.svg', 'html.svg', 'js.svg', 'react.svg'],
  },
  {
    title: 'Robot Color',
    siteURL: 'https://robot-color.netlify.app/',
    github: 'https://github.com/charly8888/robot-colors',
    siteImage: '/images/robot.png',
    description:
      `This is my first project, I worked in animations and interactions with the DOM. I'am a bit embarrassed about the code. It's amazing how much I repeat code. But hey, it's my first project and I have a special affection for it.`,
    typeOfProject: 'F',
    technologies: ['css.svg', 'html.svg', 'js.svg'],
  },
]
