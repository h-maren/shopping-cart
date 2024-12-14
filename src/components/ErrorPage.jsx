import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
        <h1>Oops!</h1>
        <h2>This page is not found!</h2>
        <Link to="/">Go back to the homepage!</Link>
        </>
    )
}

export default ErrorPage;