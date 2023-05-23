import { navigation } from '../data'
import { Link } from 'react-scroll'




function Nav(props) {


    return (
        <div className=' flex space-x-10 capitalize z-10 '>
            {navigation.map((item, index) =>{
                return (
                    <div className={`${props.bg ? ' hover:text-black ': 'hover:text-tertiary'} text-white text-[18px] font-medium  cursor-pointer hover:scale-105 duration-200  key={index}}`}>
                        <Link to={item.href} activeClass='active' smooth={true}
                        className="transition-all duration-3000"
                        >
                        {item.name}

                        </Link>


                    </div>
                )
            })}


        </div>
    )
}

export default Nav
