import React, { useState } from 'react';
import styles from './LoginPopup.module.css';
import { Checkbox, FormControlLabel, Button } from '@material-ui/core';
import POST from '../../../Requests/POST';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';

const LoginPopup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const attemptLogin = async () => {
        const response = await POST('/auth/local', {
            identifier: email,
            password
        }, null);
        console.log(response)
        if (response.statusCode) {
            toast.error(response.data[0].messages[0].message)
        }
        else {
            if (check) {
                localStorage.setItem('JWTTOKEN', response.jwt);
                localStorage.setItem('user', response.user);
                setRedirect(true);
                toast.info('Successfully Logged In!');
            }
            else {
                sessionStorage.setItem('JWTTOKEN', response.jwt);
                sessionStorage.setItem('user', response.user);
                setRedirect(true);
                toast.info('Successfully Logged In!');
            }

        }

    }
    if (redirect) {
        return <Redirect to="/dashboard" />
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.label}>Sign in</div>
            <div>
                <div className={styles.inputContainer}>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                </div>
                <div className={styles.inputContainer}>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <div className={styles.loginOptions}>
                    <div className={styles.check}>
                        <FormControlLabel
                            control={
                                <Checkbox

                                    name="stayLoggedIn"
                                    color="primary"
                                    onChange={(e) => setCheck(e.target.checked)}
                                    checked={check}
                                />
                            }
                            label="Stay Logged In"
                        />
                    </div>
                    <div className={styles.link}>Forgot Password?</div>

                </div>
                <div className={styles.btnContainer}>
                    <Button variant="contained" color="primary" style={{ width: "100%" }} onClick={() => attemptLogin()}>
                        Sign in
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LoginPopup;