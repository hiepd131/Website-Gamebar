import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword, clearErrors } from '../../actions/userActions'

const ResetPassword = ({ history,location }) => {

    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [passwordError, setPasswordError] = useState('');
    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, success, loading } = useSelector(state => state.forgotPassword)
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    
    useEffect(() => {
        // dispatch(forgotPassword('duonghiep131@gmail.com'))
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success('Cập nhật mật khẩu thành công')
            alert.info('Chuyển hướng tới đăng nhập sau 5 giây ...')
            setTimeout(function () {
                window.location = '/login'
            }, 5000);
            // history.push('/me')
        }

    }, [dispatch, alert,success, error, history])

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== newPassword) {
            setPasswordError('Mật khẩu mới và xác nhận mật khẩu phải giống nhau');
            return;
        } else {
            setPasswordError('');
            const formData = new FormData();
            formData.set('password', newPassword);
            
            dispatch(resetPassword(token, formData))
        }
    }

    return (
        <Fragment>
            <MetaData title={'Change Password'} />

            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mt-2 mb-5">Thay đổi mật khẩu</h1>
                        <div className="form-group">
                            <label for="password_field">Mật khẩu mới:</label>
                            <input
                                type="newPassword"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label for="new_password_field">Xác nhận mật khẩu mới:</label>
                            <input
                                type="newPassword"
                                id="new_password_field"
                                className="form-control"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            {passwordError && <div className="text-danger">{passwordError}</div>}
                        </div>

                        <button type="submit" className="btn update-btn btn-block mt-4 mb-3" disabled={loading ? true : false} >Xác nhận</button>
                    </form>
                </div>
            </div>

        </Fragment>
    )
}

export default ResetPassword
