import logo from '../logo.svg';

const Navbar =() =>{
    return (
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <a href='https://react.dev' className='navbar-brand ms-1'>
                <img src={logo} className='App-logo' alt='logo' />
                React
            </a>
        </nav>

    )
    
{/* <div className='navbar-nav me-auto'>
    <li className='nav-item'>
        <a href='##' className='nav-link'>
            관리자
        </a>
    </li>
</div>

<div className='navbar-nav ms-auto me-5'>
    <li className='nav-item'>
        <a href='##' className='nav-link'>
            로그인
        </a>
    </li>
</div> */}
}


export default Navbar;