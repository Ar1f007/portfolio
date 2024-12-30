export const routes = {
  home: {
    title: "_hello",
    path: "/",
  },

  about: {
    title: "_about-me",
    path: "/about-me"
  },

  projects: {
    title: "_projects",
    path: "/projects"
  },


  contact: {
    title: "_contact",
    path: "/contact"
  },

  resume: {
    title: "_resume",
    path: "/resume"
  },

  linkedIn: {
    title: "linkedIn",
    path: "https://www.linkedin.com/in/ariful-hoque-al-amin/",
  },

  github: {
    title: "github",
    path: "https://github.com/Ar1f007",
  },

  discord: {
    title: "discord",
    path: "https://discordapp.com/users/775979350641344512",
  },

  telegram: {
    title: "telegram",
    path: "https://t.me/ar1f_007"
  },

  messenger: {
    title: "messenger",
    path: "https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F100011449247883%2F%3Fhandler%3Dm.me"
  },

  instagram: {
    title: "instagram",
    path: "https://www.instagram.com/_4r1f/"
  },

} satisfies Record<string, { title: string; path: string; }>


export const navLinks = [
  {
    title: routes.home.title,
    path: routes.home.path,
  },
  {
    title: routes.about.title,
    path: routes.about.path,
  },
  {
    title: routes.projects.title,
    path: routes.projects.path,
  },
  {
    title: routes.contact.title,
    path: routes.contact.path,
  },
]