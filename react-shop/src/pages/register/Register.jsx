import { useEffect, useState } from 'react';
import User from '../../model/User'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerService } from '../../service/auth.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Register.css';

const Register =() =>{
    const [user, setUser] = useState(new User('', '', ''));
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const currentUser = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser?.id){
            navigate('/profile');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setUser((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    
    const handleRegister=(e) =>{
        e.preventDefault();
        setSubmitted(true);
    
        if (!user.username || !user.password || !user.name){
            return;
        }
    
        setLoading(true);
    
        registerService(user)
        .then((ok) => {
            navigate("/login")
        })
        .catch((error)=>{
            console.log(error);
            if(error?.response?.status ===409){
                setErrorMessage("username 또는 password가 틀립니다.");
            }else{
                setErrorMessage("예상하지 못한 에러가 발생했습니다.")
            }    
            setLoading(false);
        });
    }
    return (
        <div className='container mt-5'>
            <div className='card ms-auto me-auto p-3 shadow-lg custom-card'>
                <FontAwesomeIcon icon={faUserCircle} className='ms-auto me-auto user-icon' />
                {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
                <form onSubmit={handleRegister} noValidate className={submitted ? 'was-validated':''}>
                    <div className='form-group mb-2'>
                        <label htmlFor='name'>이 름</label>
                        <input type='text' name='name' className='form-control'
                            placeholder='name' value={user.name} onChange={handleChange} required />
                        <div className='invalid-feedback'>이름을 입력해주세요</div>   
                        </div>   
                    <button className='btn btn-info text-white w-100 mt-3' disabled={loading}>
                        가입하기
                    </button>
                    </form>
            </div>
        </div>
    )
}

export default Register;