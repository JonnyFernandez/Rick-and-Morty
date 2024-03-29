import { useForm } from 'react-hook-form';

import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContex';

const LoginPage = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signin, isAutenticated, errors: signinrErrors } = useAuth()


    useEffect(() => {
        if (isAutenticated) navigate('/home')
    }, [isAutenticated])



    const onSubmit = async (values) => {
        signin(values)
    };
    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center' >
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                {
                    signinrErrors.length >= 1 ? signinrErrors.map((item, i) => <div key={i} className='bg-red-500 p-2 text-white text-center'>{item}</div>) : ''
                }
                <h1 className='text-3xl font-bold'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type='email'
                        {...register('email', { required: true })}
                        className='w-full bg-zinc-700 text-black px-4 py-2 rounded-md my-2'
                        placeholder='Email'
                    />
                    {errors.email && <p className='text-red-500'>email is required</p>}
                    <input
                        type='password'
                        {...register('password', { required: true })}
                        className='w-full bg-zinc-700 text-black px-4 py-2 rounded-md my-2'
                        placeholder='Password'
                    />
                    {errors.password && <p className='text-red-500'>password is required</p>}


                    <button type='submit' className='bg-sky-500 text-white px-7 py-2 rounded-md my-2'>Login</button>
                </form>
                <p className='flex gap-x-2 justify-between'>Don´t have acount? <Link className='text-sky-500' to={'/register'}>Sign up</Link> </p>
            </div>

        </div>
    );
}

export default LoginPage