import figmaIcon from '../assets/figma.svg'
import javascriptIcon from '../assets/javascript.svg'
import nodeIcon from '../assets/node.svg'
import portfolioPicture from '../assets/portfolio-picture.jpeg'
import pizzaOrderFormImage from '../assets/pizzaorderform.png'
import projectsImage from '../assets/projects.png'
import reactIcon from '../assets/react.svg'
import reduxIcon from '../assets/redux.svg'
import techMealsImage from '../assets/techmeals.png'
import vscodeIcon from '../assets/vscode.svg'

export const content = {
  en: {
    header: {
      themeLabels: {
        light: 'DARK MODE',
        dark: 'LIGHT MODE',
      },
      switchLabel: {
        prefix: '',
        accent: 'TÜRKÇE',
        suffix: "'YE GEÇ",
      },
      toast: {
        welcome: '🚀 Welcome!',
        langChange: '🌐 Language: English',
        darkOn: '🌙 Dark Mode',
        darkOff: '☀️ Light Mode',
        error: '⚠️ Sync Failed',
      },
    },
    hero: {
      greeting: 'Hi! 👋',
      title: {
        highlight: "I'm",
        desktopLines: [
          'Nurbeyza.',
          'a full-stack developer building scalable and',
          'user-focused digital products.',
          "Let's meet!",
        ],
        mobileMain:
          'Nurbeyza. a full-stack developer building scalable and user-focused digital products.',
        mobileClosing: "Let's meet!",
      },
      descriptionTop: {
        before: 'Currently focused on ',
        accentOne: 'full-stack development',
        middle: ' with ',
        accentTwo: 'React, Axios, and modern UI',
        after: '.',
      },
      descriptionBottom: 'Invite me to join your team ->',
      email: 'nurbbkaraman@gmail.com',
      socials: {
        linkedin: 'https://www.linkedin.com/in/nurbeyzakaraman',
        github: 'https://github.com/nurbeyzakaraman',
      },
      image: portfolioPicture,
    },
    skillsTitle: 'Skills',
    skills: [
      {
        name: 'JAVASCRIPT',
        icon: javascriptIcon,
      },
      {
        name: 'REACT',
        icon: reactIcon,
      },
      {
        name: 'REDUX',
        icon: reduxIcon,
      },
      {
        name: 'NODE',
        icon: nodeIcon,
      },
      {
        name: 'VS CODE',
        icon: vscodeIcon,
      },
      {
        name: 'FIGMA',
        icon: figmaIcon,
      },
    ],
    profile: {
      title: 'Profile',
      basicTitle: 'Basic Information',
      basicInfo: [
        { label: 'Birth date', value: '07/03/1997' },
        { label: 'City', value: 'İstanbul' },
        {
          label: 'Education',
          value: 'Workintech, Full-Stack Pro, 2026\n\nİstanbul University, Biology, 2022',
        },
        { label: 'Preferred role', value: 'Full-Stack Developer' },
      ],
      aboutTitle: 'About me',
      aboutText:
        'I graduated from Istanbul University in Biology, but software development has been an important part of my life for many years. With strong curiosity and a passion for learning, I developed my technical skills on my own and later turned that passion into a professional path by completing an intensive software program.',
      aboutText2:
        'I am currently focused on building scalable, user-focused applications and continuing to improve my skills in both frontend and backend technologies.',
    },
    projectsTitle: 'Projects',
    projectLinks: {
      github: 'View on GitHub',
      live: 'Go to app ->',
    },
    projects: [
      {
        title: 'Pizza Order Form',
        description:
          'A dynamic and customizable pizza ordering app where users can interact in real time. Complex state management makes it easy to handle pizza options and extra ingredients, while API integrations support a fast and reliable ordering flow.',
        tags: ['react', 'axios', 'css', 'vercel'],
        image: projectsImage,
        screenImage: pizzaOrderFormImage,
        github: 'https://github.com/nurbeyzakaraman/fsweb-s4-bonus-challenge-html-pizza-nurbeyzakaraman',
        live: 'https://fsweb-s4-bonus-challenge-html-pizza-tan.vercel.app/',
        card: 'blue',
      },
      {
        title: 'Technological Meals',
        description:
          'A responsive single-page application built for a fictional food delivery brand using React. Form flow and state were managed through prop lifting, API requests were handled with Axios, and reusable components were built while staying faithful to the Figma design.',
        tags: ['react', 'axios', 'cypress', 'tailwind css'],
        image: projectsImage,
        screenImage: techMealsImage,
        github: 'https://github.com/nurbeyzakaraman/fsweb-s8-challenge-pizza',
        live: 'https://fsweb8pizzavercel.vercel.app/',
        card: 'mint',
      },
    ],
    contact: {
      line1: "Let's work together on",
      line2: 'your next product.',
      links: [
        { label: 'Github', href: 'https://github.com/nurbeyzakaraman' },
        { label: 'Linkedin', href: 'https://www.linkedin.com/in/nurbeyzakaraman' },
        { label: 'Email', href: 'mailto:nurbbkaraman@gmail.com' },
      ],
    },
  },
  tr: {
    header: {
      themeLabels: {
        light: 'KARANLIK MOD',
        dark: 'AYDINLIK MOD',
      },
      switchLabel: {
        prefix: 'SWITCH TO ',
        accent: 'ENGLISH',
        suffix: '',
      },
      toast: {
        welcome: '🚀 Hoş geldiniz!',
        langChange: '🌐 Dil: Türkçe',
        darkOn: '🌙 Koyu Tema',
        darkOff: '☀️ Aydınlık Tema',
        error: '⚠️ Senkronizasyon Başarısız',
      },
    },
    hero: {
      greeting: 'Merhaba! 👋',
      title: {
        highlight: 'Ben',
        desktopLines: [
          'Nurbeyza. bir full-stack',
          'developer olarak ölçeklenebilir ve',
          'kullanıcı odaklı ürünler geliştiriyorum.',
          'Tanışalım!',
        ],
        mobileMain:
          'Nurbeyza. bir full-stack developer olarak ölçeklenebilir ve kullanıcı odaklı ürünler geliştiriyorum.',
        mobileClosing: 'Tanışalım!',
      },
      descriptionTop: {
        before: 'Şu anda ',
        accentOne: 'full-stack geliştirme',
        middle: ' alanında ',
        accentTwo: 'React, Axios ve modern arayüzler',
        after: ' üzerine odaklanıyorum.',
      },
      descriptionBottom: 'Ekibinize davet etmek isterseniz:',
      email: 'nurbbkaraman@gmail.com',
      socials: {
        linkedin: 'https://www.linkedin.com/in/nurbeyzakaraman',
        github: 'https://github.com/nurbeyzakaraman',
      },
      image: portfolioPicture,
    },
    skillsTitle: 'Yetenekler',
    skills: [
      {
        name: 'JAVASCRIPT',
        icon: javascriptIcon,
      },
      {
        name: 'REACT',
        icon: reactIcon,
      },
      {
        name: 'REDUX',
        icon: reduxIcon,
      },
      {
        name: 'NODE',
        icon: nodeIcon,
      },
      {
        name: 'VS CODE',
        icon: vscodeIcon,
      },
      {
        name: 'FIGMA',
        icon: figmaIcon,
      },
    ],
    profile: {
      title: 'Profil',
      basicTitle: 'Temel Bilgiler',
      basicInfo: [
        { label: 'Doğum tarihi', value: '07/03/1997' },
        { label: 'Şehir', value: 'İstanbul' },
        {
          label: 'Eğitim',
          value: 'Workintech, Full-Stack Pro, 2026\n\nİstanbul Üniversitesi, Biyoloji, 2022',
        },
        { label: 'Tercih edilen rol', value: 'Full-Stack Developer' },
      ],
      aboutTitle: 'Hakkımda',
      aboutText:
        'İstanbul Üniversitesi Biyoloji mezunuyum; ancak yazılım geliştirme uzun yıllardır hayatımın önemli bir parçası oldu. Güçlü bir merak ve öğrenme isteğiyle teknik becerilerimi kendi başıma geliştirdim ve bu tutkuyu yoğun bir yazılım geliştirme programını tamamlayarak profesyonel bir yola dönüştürdüm.',
      aboutText2:
        'Şu anda ölçeklenebilir, kullanıcı odaklı uygulamalar geliştirmeye odaklanıyor ve hem ön yüz hem de arka uç teknolojilerindeki uzmanlığımı sürekli olarak ilerletmeye devam ediyorum.',
    },
    projectsTitle: 'Projeler',
    projectLinks: {
      github: "GitHub'da inceleyin",
      live: 'Uygulamaya git ->',
    },
    projects: [
      {
        title: 'Pizza Sipariş Formu',
        description:
          'Kullanıcının gerçek zamanlı olarak etkileşimde bulunabildiği, dinamik ve özelleştirilebilir bir pizza sipariş uygulaması. Çeşitli pizza seçenekleri ve ekstra malzemeler state yönetimi ile rahatça kontrol edilirken, API entegrasyonları sipariş sürecini hızlı ve güvenilir hale getirir.',
        tags: ['react', 'axios', 'css', 'vercel'],
        image: projectsImage,
        screenImage: pizzaOrderFormImage,
        github: 'https://github.com/nurbeyzakaraman/fsweb-s4-bonus-challenge-html-pizza-nurbeyzakaraman',
        live: 'https://fsweb-s4-bonus-challenge-html-pizza-tan.vercel.app/',
        card: 'blue',
      },
      {
        title: 'Teknolojik Yemekler',
        description:
          'Tech Meals için geliştirilen bu projede React kullanılarak duyarlı bir tek sayfa uygulaması oluşturuldu. Prop lifting ile form ve state yönetimi sağlandı, Axios ile API istekleri yapıldı ve tekrar kullanılabilir bileşenlerle Figma tasarımına sadık, mobil öncelikli bir arayüz kuruldu.',
        tags: ['react', 'axios', 'cypress', 'tailwind css'],
        image: projectsImage,
        screenImage: techMealsImage,
        github: 'https://github.com/nurbeyzakaraman/fsweb-s8-challenge-pizza',
        live: 'https://fsweb8pizzavercel.vercel.app/',
        card: 'mint',
      },
    ],
    contact: {
      line1: 'Bir sonraki projeniz için',
      line2: 'birlikte çalışalım',
      links: [
        { label: 'Github', href: 'https://github.com/nurbeyzakaraman' },
        { label: 'Linkedin', href: 'https://www.linkedin.com/in/nurbeyzakaraman' },
        { label: 'Email', href: 'mailto:nurbbkaraman@gmail.com' },
      ],
    },
  },
}
