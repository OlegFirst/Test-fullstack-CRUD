import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Registration = (props) => {
    return (
        <>
            <div className='Registration__Input-wrapper'>
                <input
                    className='Registration__Input'
                    type='text'
                    placeholder='Name'
                    name='name'
                    onChange={props.onChange}
                />
                <ErrorMessage
                    inputName='name'
                    error={props.error}
                />
            </div>

            <div className='Registration__Input-wrapper'>
                <input
                    className='Registration__Input'
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={props.onChange}
                />
                <ErrorMessage
                    inputName='email'
                    error={props.error}
                />
            </div>

            <div className='Registration__Input-wrapper'>
                <input
                    className='Registration__Input'
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={props.onChange}
                />
                <ErrorMessage
                    inputName='password'
                    error={props.error}
                />
            </div>
        </>
    )
};

export default Registration;