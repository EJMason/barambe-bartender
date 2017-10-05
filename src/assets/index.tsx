
export const assets = {
  images: {
    banner: 'https://i.imgur.com/HnPsGrh.jpg',
    banner2: 'https://i.imgur.com/gZypt9Y.jpg',
    logo: 'https://i.imgur.com/mvywlbT.png',
  },
  text: {
    about: {
      headerTxt: 'Disclaimer',

      disclaimer: 'Barambe Bartender is a fully functional application \
        to showcase the abilities and talents of developers EJ Mason, Yuriy Lemberg \
        and Andrew Tran. Everything works, so go ahead and explore the app, but it \
        is not intended to use in an actual restaurant.',
      body_client: 'It has a fully functional front end built with React.js, Redux, with \
        Typescript. The back end was built on Node.js with Typescript and a MongoDB persistence layer. \
        Other tools and features include jest for BDD/TDD, JSON web tokens for sessions \
        and security, Redis caching, winston monitoring, NGINX reverse proxy, and Socketcluster \
        server for realtime ordering between bartenders and customers.',
      body_app: 'The customer application is built as a native mobile application for \
        android and iPhone with react native.',
      more: 'Click the links below to see the source code for the different microservices! '
    }
  }
};

export const developers = [
    {
      name: 'EJ Mason',
      fade: 'one',
      img: 'https://avatars2.githubusercontent.com/u/6167137?v=4&s=460',
      links: {
        github: 'https://github.com/ejmason',
        linkedin: 'https://www.linkedin.com/in/eliotmason/',
        stack: 'https://stackoverflow.com/users/3109222/ej-mason?tab=profile',
        email: 'eliotjunior@gmail.com'
      }
    },
    {
      name: 'Andrew Tran',
      fade: 'two',
      img: 'https://avatars2.githubusercontent.com/u/18064859?v=4&s=460',
      links: {
        github: 'https://github.com/LeatherGreenGargoyle',
        linkedin: 'https://www.linkedin.com/in/drewvtran/',
        stack: '#',
        email: '#'
      }
    },
    {
      name: 'Yuriy Lemberg',
      fade: 'three',
      img: 'https://avatars2.githubusercontent.com/u/5579150?v=4&s=460',
      links: {
        github: 'https://github.com/ylemberg',
        linkedin: 'https://www.linkedin.com/in/yuriylemberg/',
        stack: '#',
        email: '#'
      }
    }
  ];
