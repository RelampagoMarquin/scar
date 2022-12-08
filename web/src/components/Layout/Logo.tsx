import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom'
import LogoIMG from '../../Img/ScarLogo1.svg'
import '../../Css/Styles.css'

export function Logo(){

    return(
        <Link to='/'><img src={LogoIMG} id='LogoIMG'/></Link>
    )

}

export default Logo