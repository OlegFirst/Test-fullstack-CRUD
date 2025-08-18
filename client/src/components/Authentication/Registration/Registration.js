const Registration = (props) => {
    return (
        <>
            <input
                className='Registration__Input'
                type='text'
                placeholder='Name'
                name='name'
                onChange={props.onChange}
            />

            <input
                className='Registration__Input'
                type='email'
                placeholder='Email'
                name='email'
                onChange={props.onChange}
            />

            <input
                className='Registration__Input'
                type='password'
                placeholder='Password'
                name='password'
                onChange={props.onChange}
            />
        </>
    )
};

export default Registration;