import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { login, forgotPassword, clearErrors } from '../../actions/userActions'

const Login = ({ history, location }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);
    const { message,error: forgotError,token } = useSelector(state => state.forgotPassword);
    const redirect = location.search ? location.search.split('=')[0] : '/'
    useEffect(() => {
        
        if (isAuthenticated) {
            history.push(redirect)
        }
        
        if (error && error !== 'Vui lòng đăng nhập') {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (message) {
            alert.success(message)
            dispatch(clearErrors());
        }
        
        if(forgotError){
            alert.error(forgotError)
            dispatch(clearErrors());
        }
        
    }, [dispatch, alert, isAuthenticated,token, error, history,message,forgotError, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    const handleForgotPassword = () => {
        if (email.trim()) {
            dispatch(forgotPassword(email))
        }
        else {
            alert.info('Hãy nhập vào email và thử lại')
        }
        // your code here
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Login'} />

                    <div className="row wrapper" style={{ minHeight: "calc(100vh - 430px)", marginTop: "40px" }}>
                        <div className="col-10 col-lg-5">
                            <form className="shadow-lg" >
                                <h1 className="mb-3" style={{ textAlign: "center" }}>ĐĂNG NHẬP</h1>
                                <div className="form-group">
                                    <label htmlFor="email_field">Email</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password_field">Mật khẩu</label>
                                    <input
                                        type="password"
                                        id="password_field"
                                        name="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    onClick={submitHandler}>
                                    ĐĂNG NHẬP
                                </button>

                                <Link to="/register" className="float-right mt-3">Bạn chưa có tài khoản?</Link>
                                <Link to="#!" className="float-left mt-3" onClick={handleForgotPassword}>Quên mật khẩu?</Link>
                            </form>
                        </div>
                    </div>


                </Fragment>
            )}
        </Fragment>
    )
}

export default Login
