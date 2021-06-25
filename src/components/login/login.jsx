import React, { useEffect, useState } from 'react'
import './login.css'
// import { scope, head, container, content, row, col-xs-12 } from './login.module.css'
import spotify_logo from '../../spotify-icons-logos/spotify-icons-logos/logos/02_CMYK/02_PNG/Spotify_Logo_CMYK_Black.png'
import { useForm } from 'react-hook-form'

const redirect_uri = 'http://localhost:3000'

const client_id = "055b4453c95f4e049857502008b5dc0a"

const AUTH = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&response_type=token`

const Login = () => {
    const [user, setUser] = useState('')

    useEffect(() => {
        const userName = document.getElementById('login-user').value;
        sessionStorage.setItem('user', userName)
    })


    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => window.location.href = AUTH;

    return (
        <div className="scope">
            <div className="head">
                <img src={spotify_logo} width={200} height={60} />
            </div>
            <div className="container">
                <div className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <a className="btn btn-block btn-facebook" href="https://www.facebook.com/login"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>&nbsp;CONTINUA CON FACEBOOK</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <a className="btn btn-block btn-apple" href="https://support.apple.com/it-it/HT204053"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>&nbsp;CONTINUA CON APPLE</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <a className="btn btn-block btn-google" href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>&nbsp;CONTINUA CON GOOGLE</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="divider">
                                <strong className="divider-title">o</strong>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} action="post">
                        <div className="row">
                            <div className="col-xs-12">
                                <label htmlFor="login-username" className="control-label">Username</label>
                                <input {...register("User", { required: true })} className="form-control"  maxlength="10" type="text" name="User" id="login-user" placeholder="Username" autoCapitalize="off" autoComplete="off" autoFocus="autofocus" />
                                {errors.User && "User is required"}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <label htmlFor="login-password" className="control-label">Password</label>
                                <input {...register("password", { required: true, pattern: /(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/ })} className="form-control" type="password" name="password" id="login-password" placeholder="Password" autoComplete="off" autoFocus="autofocus" />
                                {errors.password && "Password is required"}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <p>
                                    <a className="reset-password-link" href="https://www.spotify.com/password-reset/">Hai dimenticato la password?</a>
                                </p>
                            </div>
                        </div>
                        <div className="row row-submit">
                            <div className="col-xs-12 col-sm-6">
                                <label className="ng-binding">
                                    <input type="checkbox" name="remember" id="login-remember" />&nbsp;Ricordami
                                </label>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <input type="submit" className="btn btn-block btn-green ng-binding" id="login-button" value="Accedi"></input>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-xs-12">
                                <div className="col-xs-12">
                                    <div className="divider2"></div>
                                </div>
                                <div class="row text-center mt-0">
                                    <h2 className="h4">Non hai un account?</h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <a className="btn btn-block btn-sub" href="">Iscriviti a Spotify</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login;