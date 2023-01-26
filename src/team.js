import {TiSocialInstagram} from 'react-icons/ti';
import {FiFacebook} from 'react-icons/fi';

import image10 from './img/photographer1.jpg';
import image11 from './img/photographer5.jpg';
import image12 from './img/photographer.jpg';
import image13 from './img/photographer7.jpg';
import image14 from './img/team4.jpg';
import image15 from './img/team1.jpg';
import image16 from './img/team2.jpg';

export const data=[
    {
     id:1,
     image:image10,
     info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     name: 'Mathias',
     job:  'Fashion Photographer',
     icon:[<FiFacebook/>,<TiSocialInstagram/>]
    },
    {
        id:2,
        image:image11,
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        name: 'Brigitte',
        job: 'Portrait Photographer',
        icon:[<FiFacebook/>,<TiSocialInstagram/>]
       },
       {
        id:3,
        image:image12,
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        name: 'Joaquin',
        job:  ' Editorial Photographer',
        icon:<TiSocialInstagram/>,
       },
       {
        id:4,
        image:image13,
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name: 'Anna',
        job:  ' Fashion Photographer',
        icon:<FiFacebook/>,
       },
       {
        id:5,
        image:image14,
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        name: 'Theodore',
        job:  ' Landscape Photographer',
        icon:[<FiFacebook/>,<TiSocialInstagram/>]
       },
       {
        id:6,
        image:image15,
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name: 'Clarissa',
        job:  ' Conceptual Photographer',
        icon:[<FiFacebook/>,<TiSocialInstagram/>]
       },
       {
        id:7,
        image:image16,
        info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        name: 'Robertha',
        job:  ' Glamour Photographer',
        icon:[<FiFacebook/>,<TiSocialInstagram/>]
       },

]
