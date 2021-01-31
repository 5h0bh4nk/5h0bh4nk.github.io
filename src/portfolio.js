//icons from fontawesome
//coloured backgrounds of icons from simpleicons.org

const socialMediaLinks = [
    {
      name: "Github",
      link: "https://github.com/5h0bh4nk",
      fontAwesomeIcon: "fa-github-alt",
      backgroundColor: "#181717", 
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/shubhank-kulshreshtha-782627190",
      fontAwesomeIcon: "fa-linkedin", 
      backgroundColor: "#0077B5", 
    },
    {
      name: "Gmail",
      link: "mailto:kul.shubhank207@gmail.com",
      fontAwesomeIcon: "fa-google",
      backgroundColor: "#D14836", 
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/shubhank.kulshreshtha/",
      fontAwesomeIcon: "fa-facebook-f", 
      backgroundColor: "#1877F2", 
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/dekul_shubhank/",
      fontAwesomeIcon: "fa-instagram", 
      backgroundColor: "#E4405F",
    },
  ];


const projects=[
  {
    name: 'CHATTORE',
    title: 'A public chatroom',
    badges: ['mdl','firebase'],
    desc: 'A public chatroom which requires login authentication from google using firbase and also stores the chat in its database . It only allows verified users to send messages in chat and also displays their name and google profile photo along with their message .It currently shows only last 36 messages , which can be changed to a longer length .',
    repo_link: 'https://github.com/5h0bh4nk/CHATTORE',
    demo_link: 'https://chattore-bbdd8.web.app/',
  },
  {
    name: 'TrivalantE',
    title: 'A restuarant site',
    badges: ['html','css','bootstrap'],
    desc: 'This is a fully rendered restaurant site made using html, css and bootstrap . The basic aim was to learn grids in bootstrap while making a product for future use .',
    repo_link: 'https://github.com/5h0bh4nk/TrivalantE',
    demo_link: 'https://5h0bh4nk.github.io/TrivalantE/',
  },
  {
    name: 'Tic-Tac-Toe',
    title: 'The original game',
    badges: ['particlebg','react','reactstrap'],
    desc: 'The game we used to play on paper turns to pc and is multiplayer like childhood.I tried useHistory property of react to save all the moves of the player and game can be played from previous turns as well .',
    repo_link: 'https://github.com/5h0bh4nk/React-TICTAC',
    demo_link: 'https://xenodochial-wozniak-c8425a.netlify.app/',
  },
  {
    name: '14DeV',
    title: 'Devathon project',
    badges: ['php','html','css','bootstrap'],
    desc: 'This is a file management system which can be used in colleges to verify documents of students . There are multiple portals for admin as well as students in this . It allows students to submit a document and the admin account has privilige to verify , accept and reject the doc . ',
    repo_link: 'https://github.com/5h0bh4nk/14DeV',
    demo_link: ''
  },
];

export {
  socialMediaLinks,
  projects,
};