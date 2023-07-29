/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
    const stripe = Stripe(
        'pk_test_51NVyi0SHeBqQQqAxIeg7wk50AWLhoW5c9zrxtRUG8RU6zg2P3skkhyTwKl0vvpYyNdSqjQJ4KZmi2BrMvC3S1WzW00W9s0xwgX'
    );
    try {
        // 1) Get checkout session from API
        const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
        // console.log(session);

        // 2) Create checkout form + charge credit card
        // await stripe.redirectToCheckout({
        //     sessionId: session.data.session.id,
        // });
        window.location.replace(session.data.session.url);
    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }
};
