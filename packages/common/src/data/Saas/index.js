import imgBlogEx from '../../assets/image/saas/blogHeader/header.png';

import BlogImage1 from '../../assets/image/saas/blog-img/NissanJuke_SansNom_Blanc.png';
import BlogImage2 from '../../assets/image/saas/blog-img/RenaultScenic_SansNom_Blanc.png';
import BlogImage3 from '../../assets/image/saas/blog-img/RenaultMegane_SansNom_Blanc.png';
import BlogImage4 from '../../assets/image/saas/blog-img/RenaultCaptur_SansNom_Blanc.png';


import Image1 from '../../assets/image/saas/carouselImg/Peugeot_208_Tech_Edition.png';
import Image2 from '../../assets/image/saas/carouselImg/citroen-c3.png';
import Image3 from '../../assets/image/saas/carouselImg/renault-clio.png';
import Image4 from '../../assets/image/saas/carouselImg/peugeot-3008.png';
import Image5 from '../../assets/image/saas/carouselImg/dacia-sandero.png';
import Image6 from '../../assets/image/saas/carouselImg/renaultcaptur_flipped.png';

export const ARTICLE_BLOG = [
  {
    imageUrl: imgBlogEx,
    titre: 'Pour nous présenter',
    date:'1er Janvier 2020',
    article: `Non ipsa architecto et distinctio. Qui maxime facilis aut laudantium. Eum consequatur velit dolorem est soluta.
    Praesentium delectus accusamus animi perferendis dolore ipsam labore reiciendis. Quos veritatis quisquam eum velit ut quia.Corporis possimus quam veniam odit sed nostrum. Et est et placeat consectetur. \n
    Sed ullam earum odit. Excepturi tenetur autem omnis enim quia non sed. Maiores sit laudantium provident eum vitae deserunt beatae qui. Suscipit in deserunt et incidunt quisquam nihil. \n
    Enim et et deserunt. Consequatur quisquam iste nobis officiis sit suscipit autem consequatur.Praesentium similique harum repellendus fugiat totam et expedita ut. Amet earum rem accusamus perferendis dolore perspiciatis incidunt.`,
  },
  {
    imageUrl:'https://via.placeholder.com/446x150.png',
    titre: 'Pour nous présenter un peu plus',
    date:'1er Janvier 2020',
    article:`Non ipsa architecto et distinctio. Qui maxime facilis aut laudantium. Eum consequatur velit dolorem est soluta.
    Praesentium delectus accusamus animi perferendis dolore ipsam labore reiciendis. Quos veritatis quisquam eum velit ut quia.Corporis possimus quam veniam odit sed nostrum. Et est et placeat consectetur. \n
    Sed ullam earum odit. Excepturi tenetur autem omnis enim quia non sed. Maiores sit laudantium provident eum vitae deserunt beatae qui. Suscipit in deserunt et incidunt quisquam nihil. \n
    Enim et et deserunt. Consequatur quisquam iste nobis officiis sit suscipit autem consequatur.Praesentium similique harum repellendus fugiat totam et expedita ut. Amet earum rem accusamus perferendis dolore perspiciatis incidunt.`,
  },

];

export const CAROUSEL_SLIDES = [
        { image:Image1,
          marque:"Peugeot 208 1.2",
          modele:"PureTech 110ch E6.c",
          sousmodele:"Allure 5p",
          prix:"13 290€",
          },
        { image:Image2,
          marque:"Citroën C3",
          modele:"PureTech 83ch Feel",
          sousmodele:"S&S E6.d",
          prix:"10 990€",
          
          },
        { image:Image3,
          marque:"Renault Clio 0.9 TCe",
          modele:"90ch energy Intens 5p Euro6c",
          sousmodele:"Allure 5p",
          prix:"12 790€",
          
          },
        { image:Image4,
          marque:"Peugeot 3008 1.2",
          modele:"PureTech 130ch GT Line",
          sousmodele:"S&S 113g",
          prix:"25 990€",
          },
        { image:Image5,
          marque:"Dacia Sandero 0.9",
          modele:"TCe 90ch Stepway - 18",
          prix:"11 990€",
          },
        { image:Image6,
          marque:"Renault Captur 1,3",
          modele:"TCe 150ch FAP Intens EDC",
          prix:"16 990€",
          },
]

export const BLOG = [
  {
    id: 1,
    title: 'Retrouvez nos véhicules neufs',
    thumbnail_url: BlogImage1,
    postLink: '/nos-offres#neufs',
  },
  {
    id: 2,
    title: 'Retrouvez nos véhicules d\'occasion',
    thumbnail_url: BlogImage2,
    postLink: '/nos-offres#occasions',
  },
  {
    id: 3,
    title: 'Découvrez notre offre de reprise',
    thumbnail_url: BlogImage3,
    postLink: '/reprise-et-financement',
  },
  {
    id: 4,
    title: 'Découvrez nos modes de financement',
    thumbnail_url: BlogImage4,
    postLink: 'reprise-et-financement#financement',
  },
]

export const OffresPamaga = [
  {
    id: 1,
    icon: 'flaticon-clean',
    title: 'Véhicules neufs',
    path:'#neufs',
  },
  {
    id: 2,
    icon: 'flaticon-lease',
    title: 'Véhicules d’occasions',
    path:'#occasions',
  },
  {
    id: 3,
    icon: 'flaticon-rental-car',
    title: 'LOA',
    path:'#loa',
  },
];
export const Features = [
  {
    id: 1,
    icon: 'flaticon-wallet',
    title: 'Règlement',
    description:
      '',
  },
  {
    id: 2,
    icon: 'flaticon-edit',
    title: 'Garantie',
    description:
      '',
  },
  {
    id: 3,
    icon: 'flaticon-garage',
    title: 'Livraison',
    description:
      '',
  },
];

export const Footer_Data = [
  {
    title: 'PAGES ',
    menuItems: [
      {
        url: '/',
        text: 'Accueil',
      },
      {
        url: '/nos-offres',
        text: 'Nos offres',
      },
      {
        url: '/reprise-et-financement',
        text: 'Reprise et Financement ',
      },
      {
        url: '/blog',
        text: 'Blog',
      },
    ],
  },
  {
    title: 'INFORMATIONS',
    menuItems: [
      {
        url: '/politique-de-confidentialite',
        text: 'Politique de confidentialité',
      },
      {
        url: '/conditions-generales-d-utilisation',
        text: 'CGU',
      }
    ],
  },
  // {
  //   title: 'INFORMATIONS DE CONTACT',
  //   menuItems: [
  //     {
  //       url: '#',
  //       text: 'Adresse: 8-10 rue des blés, 93210 Saint-Denis',
  //     },
  //     {
  //       url: '#',
  //       text: 'Tel: +33 7 57 45 55 66',
  //     },
  //     {
  //       url: '#',
  //       text: 'Mail : contact@pamagacar.com',
  //     },
  //   ],
  // },
];


export const Timeline = [
  {
    title: 'Je trouve mon véhicule',
    description:
      'Pamaga Car, vous offre le choix parmi l’intégralité des gammes de véhicules que nous distribuons. Consultez notre catalogue',
  },
  {
    title: 'Je finance mon projet',
    description:
      'Avec Pamaga Car, financez votre projet comme vous le souhaitez. Crédit classique ou location avec option d’achat, nos conseillers sont disponibles pour vous guider dans la meilleure façon d’acquérir votre nouvelle voiture.',
  },
  {
    title: 'Je réceptionne ma nouvelle voiture',
    description:
      'L’acquisition d’une nouvelle voiture est un moment d’exception. Avec Pamaga Car, vous avez la possibilité de récupérer votre véhicule en agence, ou de vous faire livrer sur le lieu de votre choix. Notre équipe est là pour faire de ce moment, une expérience inoubliable.',
  },
];


export const MENU_ITEMS = [
  {
    label: 'Accueil',
    path: '/',
    offset: '70',
  },
  {
    label: 'Nos offres',
    path: '/nos-offres',
    offset: '70',
    dropdown:true,
   
  },
  {
    label: 'Reprise et financement',
    path: '/reprise-et-financement',
    offset: '70',
  },
  {
    label: 'Blog',
    path: '/blog',
    offset: '70',
  },
];

export const SKILLS = [
  {
    title: 'La sécurité et la fiabilité',
    description:
      'PAMAGA CAR vous assure la fiabilité de tous les véhicules proposés en effectuant un contrôle rigoureux des véhicules d’occasion avant de vous les proposer.',
  },
  {
    title: 'Économie et bonne affaire',
    description:
      'Grâce à notre réseau national et européen, nous vous trouvons le véhicule de votre choix correspondant aux options et km désirés, adapté à votre budget.',
  },
];
export const FINANCEMENT = [
  {
    title: 'LOA',
    description:
      ' <> <ul> <li>- Vous aimez changer de voiture régulièrement </li>    <li>    - Vous souhaitez bénéficier d’une garantie tous le long de votre usage du véhicule      </li>    <li>        - Vous ne souhaitez pas vous occuper de la revente de votre véhicule        </li>      </ul>   Avec l’option LOA, c’est simple, vous pouvez garder, changer ou revendre votre véhicule. C’est  vous qui décidez comment vous souhaitez mettre fin au contrat.   </>  ',
  },
  {
    title: 'Économie et bonne affaire',
    description:
      'Grâce à notre réseau national et européen, nous vous trouvons le véhicule de votre choix correspondant aux options et km désirés, adapté à votre budget.',
  },
];


