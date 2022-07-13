
import CheckOut from '../modules/Checkout/pages/CheckOut';

import {Navigate} from 'react-router'
const CheckoutLayout = (props) => {
    if(!localStorage.getItem('user')) {
        return <Navigate to="/login"/>
    }
    return (
        <div>
            <CheckOut/>
        </div>
    )
};

export default CheckoutLayout;