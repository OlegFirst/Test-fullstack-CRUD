const ErrorMessage = ({ inputName, error }) => {
    if (inputName === error.inputName) {
        return (
            <span className='text-red-700'>{error.message}</span>
        )
    }

    return null;
};

export default ErrorMessage;