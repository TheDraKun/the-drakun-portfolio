import { Project, ExperienceItem, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'candy-world-sol',
    title: 'Solitaire Candy World',
    imageUrl: 'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/candy-world-sol/Sol-demo.mp4',
    screenshots: [
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/candy-world-sol/sol-1.webp',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/candy-world-sol/Gameplay_Album.mp4',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/candy-world-sol/Gameplay_Backpack.mp4',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/candy-world-sol/Gameplay_Harvest.mp4',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/candy-world-sol/Gameplay_Powerups.mp4',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/candy-world-sol/Gameplay_SeasonPass.mp4'
    ],
    category: 'Casual, Tripeaks',
    organization: 'Super Huge Studios',
    date: '2024',
    link: 'https://play.google.com/store/apps/details?id=com.superhugestudios.candyworld.free.harvest&hl=en_IN',
    description: 'Solitaire Candy World is a vibrant card adventure blending classic solitaire with delightful candy-themed Tripeak puzzles. Journey through hundreds of handcrafted levels, unlock new features, and meet charming characters in a relaxing, visually rich world.\n\n With over 50,000 downloads on the Play Store, Candy World Solitaire has delighted a growing community of players worldwide.',
    rolesContributions: 'As a core team member on Solitaire Candy World, I focused on designing and implementing progression systems, including win streaks, a season pass, power-ups, and collectible albums. I also worked to improve game performance and optimize load times, making sure the experience was smooth for players. In addition, I integrated analytics and notification systems to help the team better understand player engagement and retention.',
    role: 'Core Developer',
    tags: ['Key Title', 'Unity', 'C#', 'Live-Ops', 'Systems Design'],
    metrics: ['70K+ DLs', '4.9 Stars']
  },
  {
    id: 'cat-wool',
    title: 'Cat Wool',
    imageUrl: 'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/icons/cat-wool/App-Icon_1024.png',
    screenshots: [
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/cat-wool/cw_1.webp',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/cat-wool/cw_2.webp',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/cat-wool/cw-vid-1.mp4',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/cat-wool/cw-vid-2.mp4'      
    ],
    category: 'Puzzle, Hyper-Casual',
    organization: 'Super Huge Studios',
    date: 'November, 2025',
    link: 'https://play.google.com/store/apps/details?id=com.superhuge.catwool&hl=en_IN',
    description: 'Cat Wool is a relaxing puzzle game where players sort colorful wool onto cute cats, aiming to complete each level with the best moves possible. The game features handcrafted levels, charming animations, and a soothing atmosphere.',
    rolesContributions: 'As one half of the duo behind Cat Wool’s core gameplay, I was responsible for bringing the game’s data to life on screen. I took charge of translating data into dynamic visuals—spawning the puzzle grid and wool, and animating every move and effect. I also built a custom toolkit for level creation, which made it much faster and easier for the team to design and test new puzzles.',
    role: 'Unity Developer',
    tags: ['Puzzle', 'Tooling', 'Animation']
  },
  {
    id: 'shootopia',
    title: 'Shootopia',
    imageUrl: 'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/icons/shootopia/shootopia.png',
    screenshots: [
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/shootopia/arcade_shooter_shtpia.mp4',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/shootopia/shooting_range_shtpia.mp4',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/shootopia/Shootopia_Demo_15May2025.mp4',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/shootopia/Shootopia_Demo_21_Feb-2025.mp4'
      // 'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/shootopia/Demo_21-02-2025.MOV',
    ],
    category: 'Action',
    organization: 'Super Huge Studios',
    date: 'December, 2024',
    link: '#',
    description: 'Shootopia is an Immersive Virtual Arcade Shooting System with Projection Project featuring Shooting Range (turn-based, precision scoring) and Arcade Shooter (real-time, rarity-based rewards).',
    rolesContributions: 'I built the core framework to support different arcade game modes. I created both Shooting Range and Arcade Shooter, each with their own gameplay, scoring, and interface. I added multiplayer turn management, round progression, and scoring for Shooting Range, and reward and movement systems for Arcade Shooter.',
    role: 'Lead Developer',
    tags: ['WebSockets', 'Arcade', 'Shooter']
  },
  {
    id: 'cube-survivor',
    title: 'Cube Survivor',
    imageUrl: 'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/icons/cube-survivor/cs.png',
    screenshots: [
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/cube-survivor/cube-survivor-ad-vid.mp4',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/cube-survivor/cst_p1.webp',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/cube-survivor/cst_p2.webp',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/cube-survivor/cst_p3.webp',

    ],
    category: 'Action, Survival',
    organization: 'Flick Game Studio',
    date: 'January, 2023',
    link: '#',
    description: 'Cube Survivor is a fast-paced action game where players fend off waves of monsters using a magical cube with a range of powerups.',
    rolesContributions: 'As a game developer, I collaborated with the designer to create diverse power-ups and dynamic gameplay. I rebuilt the enemy horde system using Navmesh AI for massive wave attacks, fine-tuned enemy behaviors, and contributed to sound engineering and UI development.',
    role: 'Unity Developer',
    tags: ['Action', 'VFX', 'UI', 'Navmesh', 'AI Horde', 'Attack']
  },
  {
    id: 'deliver3d',
    title: 'Deliver 3D',
    imageUrl: 'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/icons/deliver3d/d3d.webp',
    screenshots: [
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/deliver3d/deliver-3d-ad-vid.mp4',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/deliver3d/d3_f.webp',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/deliver3d/d3_r1.webp',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/deliver3d/d3_r2.webp'


    ],
    category: 'Driving, Simulation',
    organization: 'Flick Game Studio',
    date: 'March, 2023',
    link: 'https://play.google.com/store/apps/details?id=com.flickgames.deliver3d',
    description: 'Deliver 3D is an engaging delivery simulation game where players navigate through challenging routes to complete deliveries on time.',
    rolesContributions: 'Created core gameplay mechanics like the Tap move system and package collection. I developed the Investment Valley idle tycoon feature, which required careful planning and balancing.',
    role: 'Game Developer',
    tags: ['One-Touch Controls', 'Traffic Dodging']
  },
  {
    id: 'lets-deliver',
    title: 'Lets Deliver',
    imageUrl: 'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/icons/lets-deliver/ld.png',
    screenshots: [
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/lets-deliver/ld_f.webp',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/lets-deliver/ld_r1.webp',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/lets-deliver/ld_r2.webp'
    ],
    category: 'Puzzle, Strategy',
    organization: 'Flick Game Studio',
    date: 'May, 2023',
    link: 'https://play.google.com/store/apps/details?id=com.flickgames.letsdeliver',
    description: 'Lets Deliver is a puzzle-style package delivery management game where players run their own delivery service.',
    rolesContributions: 'As my first studio project, I worked with the designer to create a visually soothing, puzzle-style delivery game. The biggest challenge was developing the car movement system using Bézier curves and splines.',
    role: 'Junior Developer',
    tags: ['Puzzle', 'Strategy', 'Splines']
  },
  {
    id: 'battle-of-apes',
    title: 'Battle of Apes',
    imageUrl: 'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/icons/battle-of-apes/boa.png',
    screenshots: [
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/battle-of-apes/boa-ad-vid.mp4',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/battle-of-apes/boa_r1.webp',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/battle-of-apes/boa_r2.webp',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/battle-of-apes/boa_r3.webp'

    ],
    category: 'Action, Strategy',
    organization: 'Flick Game Studios',
    date: 'September, 2023',
    link: 'https://play.google.com/store/apps/details?id=com.battle.of.apes',
    description: 'Battle of Apes is a strategic action game where players command troops of primates in intense battles. Featuring tactical gameplay, unit management, and strategic resource allocation in epic primate warfare.',
    rolesContributions: 'For Battle of Apes, I led game and level design while also contributing to development. I oversaw gameplay mechanics, level layouts, and collaborated with a 3D artist to shape the art style. I managed the transition from a fast-paced runner to a strategic merging grid (Merge mechanics), and crafted UI elements with backend integration.',
    role: 'Lead Game & Level Designer',
    tags: ['Strategy', 'Action', 'C#', 'Merge']
  },
  {
    id: 'mega-suv',
    title: 'Mega SUV Car Ramp',
    imageUrl: 'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/icons/mega-suv/msuv.webp',
    screenshots: [
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/mega-suv/mr_r1.webp',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/mega-suv/mr_r2.webp',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/mega-suv/mr_r3.webp'
    ],
    category: 'Racing, Stunt',
    organization: 'Flick Game Studio',
    date: 'October, 2022',
    link: '#',
    description: 'Mega SUV Car Ramp is an adrenaline-fueled experience where players control an SUV through challenging ramps, loops, and obstacles.',
    rolesContributions: 'Programmed vehicle controls, ramp physics, obstacles, and scoring systems. Developed high-intensity stunt mechanics for massive aerial jumps and precision landings.',
    role: 'Unity Developer',
    tags: ['Physics', 'Racing', 'UI', 'Stunt']
  },
  {
    id: 'botster-brawl',
    title: 'Botster Brawl',
    imageUrl: 'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/icons/botster-brawl/BB.jpg',
    screenshots: [
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/botster-brawl/BB_Banner.png',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/botster-brawl/BB_T.png',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/botster-brawl/BB_1.png',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/botster-brawl/BB_2.png',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/botster-brawl/BB_3.png',
      'https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/screenshots/botster-brawl/BB_4.png',
    ],
    category: 'Action',
    organization: 'Independent Project',
    date: 'Re-work in Progress',
    link: '#',
    description: 'Botster Brawl is an ambitious multiplayer top-down shooter currently undergoing a complete rework.',
    rolesContributions: 'Redesigning and developing the multiplayer networking, new combat mechanics, and robot customization. Building tools for arena design.',
    role: 'Independent Developer',
    tags: ['Networking', 'Shooter', 'Tools']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Super Huge Studios",
    role: "Unity Game Developer",
    period: "Jun 2024 - Present",
    location: "Bengaluru, India",
    achievements: [
      "PROJECT: Candy World Solitaire",
      "Delivered gameplay features and technical art achieving 70K+ downloads, a 4.9-star rating, and high retention (D1-42%, D7-17%).",
      "Implemented and maintained Live-ops features (Win Streaks, Season Passes, Albums) using MVC architecture, driving a 35-minute average playtime.",
      "Engineered a reusable Particle Attractor System using DOTween and object pooling, improving runtime performance by 70%.",
      "Developed a dynamic IAP strategy system delivering personalized offer packs based on player performance and in-game economy state.",
      "PROJECT: Hybrid-Casual Mobile Games (Cat Wool, Gem Clicker)",
      "Shipped complete games from prototype to production within 2–3 weeks cycles.",
      "Built procedural-level generation tools and data-driven systems to scale level creation workflows (2x faster pipeline).",
      "PROJECT: Shootopia – Arcade Shooter",
      "Led Unity front-end development for two arcade shooter titles.",
      "Implemented a WebSocket-based real-time aiming system with 0.05 ms accuracy."
    ]
  },
  {
    company: "Flick Game Studio",
    role: "Junior Game Developer",
    period: "Jan 2022 - Feb 2024",
    location: "Hyderabad, India",
    achievements: [
      "Contributed to the development of 20+ published mobile titles with over 30K+ total downloads.",
      "Implemented modular UI systems and core gameplay loops across various genres (Hyper-casual, Puzzle, Racing).",
      "Integrated third-party SDKs for Ads (AdMob/AppLovin) and In-App Purchases (Unity IAP)."
    ]
  }
];

export const SKILL_CATEGORIES: (SkillCategory & { icon: string; color: string })[] = [
  {
    category: "Core Engineering",
    icon: "fas fa-code",
    color: "#E80368",
    skills: ["Unity Engine", "C# Language", "OOP & SOLID", "Data Structures", "Algorithms", "Git / Version Control", "CI/CD Pipelines"]
  },
  {
    category: "Systems & Architecture",
    icon: "fas fa-cubes",
    color: "#E80368",
    skills: ["MVC Architecture", "State Machines", "Observer Pattern", "Gameplay Systems", "Progression Design", "Rapid Prototyping"]
  },
  {
    category: "Optimization & Tools",
    icon: "fas fa-microchip",
    color: "#E80368",
    skills: ["Performance Profiling", "Unity Profiler", "Object Pooling", "DOTween", "Editor Scripting", "Addressables", "VFX Optimization"]
  },
  {
    category: "Product & Live-Ops",
    icon: "fas fa-gamepad",
    color: "#E80368",
    skills: ["IAP & Ads Integration", "Win Streaks & Seasons", "Dynamic Economy", "Personalized Offers", "Firebase / Amplitude", "Play Store / App Store"]
  }
];