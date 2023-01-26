import {AiFillHome,AiFillMessage} from 'react-icons/ai'
import { FaCamera,FaPhotoVideo } from 'react-icons/fa'
import {MdOutlinePhoneIphone} from 'react-icons/md';
import {SiFacebook,SiInstagram} from 'react-icons/si';
import {FiGithub} from 'react-icons/fi';
//Images
import image from './img/clock.png';
import image1 from './img/teamwork.png';
import image2 from './img/money.png';
import image3 from './img/diaphragm.png';
import image4 from './img/cities1.jpg';
import image5 from './img/black-and-white9.jpg';
import image6 from './img/nature.jpg';
import image7 from './img/portraits0.jpg';
import image9 from './img/sunset0.jpg';
import city from './img/cities.jpg';
import cities from './img/cities0.jpg';
import city1 from './img/cities9.jpg';
import city2 from './img/cities2.jpg';
import city3 from './img/cities3.jpg';
import city4 from './img/cities4.jpg';
import city5 from './img/cities5.jpg';
import city6 from './img/cities6.jpg';
import city7 from './img/cities7.jpg';
import city8 from './img/cities8.jpg';
import city9 from './img/cities10.jpg';
import city10 from './img/cities11.jpg';
import city11 from './img/cities12.jpg';
import city12 from './img/cities13.jpg';
import nature0 from './img/nature0.jpg';
import nature1 from './img/nature1.jpg';
import nature2 from './img/nature2.jpg';
import nature3 from './img/nature3.jpg';
import nature4 from './img/nature4.jpg';
import nature5 from './img/nature5.jpg';
import nature6 from './img/nature6.jpg';
import nature7 from './img/nature7.jpg';
import nature8 from './img/nature8.jpg';
import nature9 from './img/nature9.jpg';
import nature10 from './img/nature10.jpg';
import nature11 from './img/nature11.jpg';
import sunset from './img/sunset.jpg';
import sunset1 from './img/sunset1.jpg';
import sunset2 from './img/sunset2.jpg';
import sunset3 from './img/sunset3.jpg';
import sunset4 from './img/sunset4.jpg';
import sunset5 from './img/sunset5.jpg';
import sunset6 from './img/sunset6.jpg';
import sunset7 from './img/sunset7.jpg';
import sunset8 from './img/sunset8.jpg';
import sunset9 from './img/sunset9.jpg';
import sunset10 from './img/sunset10.jpg';
import sunset11 from './img/sunset11.jpg';
import blackWhite from './img/black-and-white.jpg';
import blackWhite1 from './img/black-and-white1.jpg';
import blackWhite2 from './img/black-and-white2.jpg';
import blackWhite3 from './img/black-and-white3.jpg';
import blackWhite4 from './img/black-and-white4.jpg';
import blackWhite5 from './img/black-and-white5.jpg';
import blackWhite6 from './img/black-and-white6.jpg';
import blackWhite7 from './img/black-and-white7.jpg';
import blackWhite8 from './img/black-and-white8.jpg';
import blackWhite9 from './img/black-and-white10.jpg';
import blackWhite10 from './img/black-and-white11.jpg';
import blackWhite11 from './img/black-and-white12.jpg';
import portrait from './img/portraits.jpg';
import portrait1 from './img/portraits1.jpg';
import portrait2 from './img/portraits2.jpg';
import portrait3 from './img/portraits3.jpg';
import portrait4 from './img/portraits4.jpg';
import portrait5 from './img/portraits5.jpg';
import portrait6 from './img/portraits6.jpg';
import portrait7 from './img/portraits7.jpg';
import portrait8 from './img/portraits8.jpg';
import about from './img/team1.jpg';
import about1 from './img/team3.jpg';
import about2 from './img/team4.jpg';
import editorial from './img/editorial.jpg';
import editorial1 from './img/editorial1.jpg';
import editorial2 from './img/editorial2.jpg';
import editorial3 from './img/editorial3.jpg';
import editorial4 from './img/editorial4.jpg';
import editorial5 from './img/editorial5.jpg';
import editorial6 from './img/editorial6.jpg';
import editorial7 from './img/editorial7.jpg';
import editorial8 from './img/editorial8.jpg';
import editorial9 from './img/editorial9.jpg';
import editorial10 from './img/editorial10.jpg';
import editorial11 from './img/editorial11.jpg';
import editorial12 from './img/editorial12.jpg';
import editorial13 from './img/editorial13.jpg';
import editorial14 from './img/editorial14.jpg';
import editorial15 from './img/editorial15.jpg';
import editorial16 from './img/editorial16.jpg';



export const editorialPhotography=[
    editorial,editorial1,editorial2,editorial3,
    editorial4,editorial5,editorial6,editorial7,
    editorial8,editorial9,editorial10,editorial11,
    editorial12,editorial13,editorial14,editorial15,editorial16,
    
  

]
export const aboutSection=[
    {id:1,image:about},
    {id:2,image:about1},
    {id:3,image:about2}
]
export const AboutUs=()=>{
    return [
    {
        id:1,
        mainImage:image4,
        title:'Popular Destinations',
        url:'/portfolio/cities',

        secondaryImage:[
            {id:2,
            image:city},
            {id:3,
            image:cities},
            {id:4,
            image:city3},
            {id:5,
            image:city2},
            {id:6,
            image:city4},
            {id:7,
            image:city5},
            {id:8,
            image:city6},
            {id:9,
            image:city7},
            {id:10,
            image:city8},
            {id:11,
            image:city9},
            {id:12,
            image:city1}

            ],
            thirdImage:[
                {
                    id:13,
                    image:city10
                },
                {
                    id:14,
                    image:city11
                },
                {
                    id:15,
                    image:city12
                }
            ]
        
            
        },
    
    {
        id:16,
        mainImage:image6,
        title:'Nature',
        url:'/portfolio/nature',
        secondaryImage:[
           {id:17,
            image:nature0},
            {id:18,
            image:nature1},
            {id:19,
            image:nature2},
            {id:20,
            image:nature3},
            {id:21,
            image:nature4},
            {id:22,
            image:nature5},
            {id:23,
            image:nature6},
            {id:24,
            image:nature7},
            {id:25,
            image:nature8},
           ],
           thirdImage:[
            {
                id:26,
                image:nature9
            },
            {
                id:27,
                image:nature10
            },
            {
                id:28,
                image:nature11
            }
           ]
    },
    {
        id:29,
        mainImage:image9,
        title:'Sunset',
        url:'/portfolio/sunset',
        secondaryImage:[
            {
                id:30,
                image:sunset,
            },
            {
                id:31,
                image:sunset1,
            },
            {
                id:32,
                image:sunset2,
            },
            {
                id:33,
                image:sunset6,
            },
            {
                id:34,
                image:sunset4,
            },
            {
                id:35,
                image:sunset5,
            },
            {
                id:36,
                image:sunset3,
            },
            {
                id:37,
                image:sunset7,
            },
            {
                id:38,
                image:sunset8,
            },
          

        ],
        thirdImage:[
            {
                id:39,
                image:sunset9,
            },
            {
                id:40,
                image:sunset10
            },
            {
                id:41,
                image:sunset11
            }
        ]
    },
    {
        id:42,
        mainImage:image5,
        title:'Black & White',
        url:'/portfolio/black-and-white',
        secondaryImage:[
            {
                id:43,
                image:blackWhite
            },
            {
                id:44,
                image:blackWhite1
            },
            {
                id:45,
                image:blackWhite2
            },
            {
                id:46,
                image:blackWhite3
            },
            {
                id:47,
                image:blackWhite4
            },
            {
                id:48,
                image:blackWhite5
            },
            {
                id:49,
                image:blackWhite6
            },
            {
                id:50,
                image:blackWhite7
            },
            {
                id:51,
                image:blackWhite8
            },
          
        ],
        thirdImage:[
            {
                id:52,
                image:blackWhite9
            },
            {
                id:53,
                image:blackWhite10
            },
            {
                id:54,
                image:blackWhite11
            }
        ]
    },
    {
        id:55,
        mainImage:image7,
        title:'Fashion & Beauty',
        url:'/portfolio/fashion-&-beauty',
        secondaryImage:[
            {
                id:56,
                image:portrait,
            },
            {
                id:57,
                image:portrait1,
            },
            {
                id:58,
                image:portrait2,
            },
            {
                id:59,
                image:portrait3,
            },
            {
                id:60,
                image:portrait4,
            },
            {
                id:61,
                image:portrait5,
            },
            {
                id:62,
                image:portrait6,
            },
        ],
        thirdImage:[
            {
                id:63,
                image:portrait7
            },
            {
                id:64,
                image:portrait8
            }
        ]
       
    },
   
   
]
}


export const links=[
    {
       id:1,
       url:'/',
       label:'Home',
       icon:<AiFillHome/>
       
    },
    {
        id:2,
        url:'/portfolio',
        label:'Portfolio',
        icon:<FaCamera/>
    },
    {
        id:5,
        url:'/editorial-photography',
        label:'Fashion editorials',
        icon:<FaPhotoVideo/>},
    {
        id:3,
        url:'/connect-with-us',
        label:'Connect with us',
        icon:<MdOutlinePhoneIphone/>
    },
    {
        id:4,
        url:'/contact',
        label:'Contact',
        icon:<AiFillMessage/>
    },
   ];

   export const services=[
    {
        id:1,
        image:image,
        title:'Efficient',
        desc:'Lorem ipsum dolor, sit amet.'
    },
    {
        id:2,
        image:image1,
        title:'Teamwork',
        desc:'Lorem ipsum dolor, sit amet.'
    },
    {
        id:3,
        image:image2,
        title:'Money',
        desc:'Lorem ipsum dolor, sit amet.'
    },
    {
        id:4,
        image:image3,
        title:'Diaphragm',
        desc:'Lorem ipsum dolor, sit amet.'
    },

];

export const socialLinks=[
    {
        id:1,
        url:'https://github.com/larissioana/photography-edition.git',
        icon:<FiGithub/>
    },
    {
        id:2,
        url:'https://www.instagram.com',
        icon:<SiInstagram/>
    },
    {
        id:3,
        url:'https://www.facebook.com',
        icon:<SiFacebook/>
    },

]

