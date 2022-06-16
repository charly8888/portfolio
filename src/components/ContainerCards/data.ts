interface project {
  title: string
  siteURL: string
  github: string
  siteImage: string
  description: string
}
type data = project[]

export const projectsData: data = [
  {
    title: 'Shortcut App',
    siteURL: 'https://shortcuts-app-one.vercel.app/',
    github: 'https://github.com/charly8888/shortcutsApp',
    siteImage: '/images/shortcutApp.png',
    description: 'if bookmarks are boring for you, try this app',
  },
  {
    title: 'Upload images',
    siteURL: 'https://upload-images-german-dev.netlify.app/',
    github: 'https://github.com/charly8888/image-uploader',
    siteImage: '/images/upload-image.png',
    description:
      'Upload an image and share it through a link. (only available 24hs)',
  },
  {
    title: 'Interview steps',
    siteURL: 'https://cognizant-challenge.netlify.app/',
    github: 'https://github.com/charly8888/cognizant-challenge',
    siteImage: '/images/challenge-cognizant.png',
    description:
      'A website to manage our candidates based on what step they are in.',
  },
  {
    title: 'Space Tourism',
    siteURL: 'https://space-tourism-site-charly8888.netlify.app',
    github: 'https://github.com/charly8888/space-tourism-website',
    siteImage: '/images/space-tourism.png',
    description: 'A site about planets, astronauts and tecnology',
  },
  {
    title: 'Ecommerce',
    siteURL: 'https://e-comerce-challenge.netlify.app/',
    github: 'https://github.com/charly8888/challenge_e-commerce',
    siteImage: '/images/ecommerce.png',
    description:
      'E-commerce that provide an user and points for claim products',
  },
  {
    title: 'Robot Color',
    siteURL: 'https://robot-color.netlify.app/',
    github: 'https://github.com/charly8888/robot-colors',
    siteImage: '/images/robot.png',
    description:
      'This is my first project, I work in animations and interactions with the DOM',
  },
]
