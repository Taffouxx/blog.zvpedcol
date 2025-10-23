const CONFIG = {
  // profile setting
  profile: {
    name: "Вітаємо у нашому блогі!",
    image: "/logo.png", // замените на файл с логотипом колледжа (в папке public)
    role: "Офіційний сайт",
    bio: "Офіційний блог Жовтоводьського Фахового Педагогічного Коледжу ДОР.",
    email: "zvpedkoledzh@gmail.com",       // при возможности
    linkedin: "",  // если есть
    github: "",
    instagram: "https://instagram.com/mycollege", // если есть
  },
  projects: [
    {
      name: "Студентські Проєкти",
      href: "https://studentprojects.mycollege.edu.ua"
    }
  ],
  blog: {
    title: "Блог Жовтоводьського Фахового Педагогічного Коледжу ДОР",
    description: "Новини, події та освітні матеріали Жовтоводьського Фахового Педагогічного Коледжу ДОР.",
    scheme: "system", // светлая/тёмная в зависимости от системы
  },
  link: "https://zvpedcol.fun",
  since: 2025,
  lang: "uk-UA",
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // можно позже заменить на свой генератор или статику
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Коментарі",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "",
    },
  },
  isProd: process.env.VERCEL_ENV === "production",
  revalidateTime: 300, // обновление каждые 5 минут
}

module.exports = { CONFIG }
