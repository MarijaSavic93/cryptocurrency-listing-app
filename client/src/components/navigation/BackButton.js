import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementRefreshCounter } from "../../redux/refreshSlice";
const BackButton = () => {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(incrementRefreshCounter());
        navigate('/');
    }
    const content = <button type="button" className="ms-5 btn btn-link text-dark" onClick={handleClick} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
                        </svg>
                    </button>;
                    
    return <>{location !== '/' && content} </>;
}
export default BackButton;