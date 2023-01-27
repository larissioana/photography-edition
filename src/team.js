import {TiSocialInstagram} from 'react-icons/ti';
import {FiFacebook} from 'react-icons/fi';

import image10 from './img/photographer1.jpg';
import image11 from './img/photographer5.jpg';
import image12 from './img/photographer.jpg';
import image13 from './img/photographer7.jpg';
import image14 from './img/team4.jpg';
import image16 from './img/team2.jpg';

export const data=[
    {
     id:1,
     image:image10,
     info:`My passion since I was a little child is photography. I'm a fashion photographer since 2015.`,
     name: 'Mathias',
     job:  'Fashion Photographer',
     icon:[<FiFacebook/>,<TiSocialInstagram/>]
    },
    {
        id:2,
        image:image11,
        info:`Hello, I'm Brigitte, portrait photographer. I travel around the world to photograph and I like most to photograph random people on the street.`,
        name: 'Brigitte',
        job: 'Portrait Photographer',
        icon:[<FiFacebook/>,<TiSocialInstagram/>]
       },
       {
        id:3,
        image:image12,
        info:'I love to organize photoshoot and to select the models.',
        name: 'Joaquin',
        job:  ' Editorial Photographer',
        icon:<TiSocialInstagram/>,
       },
       {
        id:4,
        image:image13,
        info:`I'm a fashion photographer with 8 years experience of photography.`,
        name: 'Anna',
        job:  ' Fashion Photographer',
        icon:<FiFacebook/>,
       },
       {
        id:5,
        image:image14,
        info:'I love to travel around the world and to create imagery. ',
        name: 'Theodore',
        job:  ' Landscape Photographer',
        icon:[<FiFacebook/>,<TiSocialInstagram/>]
       },
     
       {
        id:6,
        image:image16,
        info:'Photography allows me to pursue both my passion and my career. It allows me to be both artistic and technical.',
        name: 'Robertha',
        job:  ' Glamour Photographer',
        icon:[<FiFacebook/>,<TiSocialInstagram/>]
       },

]
