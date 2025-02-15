import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex bottom-0 left-64 w-full justify-center items-center bg-white p-4'>
        <Link to="">
        <span > v6.3.0-prod-846 |
Privacy Policy |
Terms Of Service</span>
        </Link>
    </div>
  )
}

export default Footer