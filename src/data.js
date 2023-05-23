import {FaPaintBrush} from 'react-icons/fa';
import {FaChartLine} from 'react-icons/fa';
import {BiCodeAlt} from 'react-icons/bi';


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'services',
      href: 'services',
    },
    {
      name: 'skills',
      href: 'skills',
    },
    
    {
      name: 'teams',
      href: 'teams',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  
  // My services
  
  export const service=[
  {
    icon:<FaPaintBrush size={50}  />,
    title:"Web Design",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim. "

  },
  {
    icon:<FaChartLine size={50}  />,
    title:"Advertising",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim."

  },
  {
    icon:<BiCodeAlt   size={50}  />,
    title:"Apps Design",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim."
    
  },
]

// teams Section

// craousal responsiveness

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};