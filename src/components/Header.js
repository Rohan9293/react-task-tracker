import PropTypes from 'prop-types'
import Button from './Button'



const Header = ({title,onAdd,showadd}) => {
  
   
  
    return (
   <header className='header'>
    <h1 >{title}</h1>
    <Button  color={showadd ? 'red':'green'} text={showadd ? 'Close' :'Add'}  onCLick={onAdd}/>
   
   </header>
  )
}

Header.defaultProps = {
    title:'Task Tracker'
}

Header.propTypes={
    title:PropTypes.string.isRequired,
}



export default Header