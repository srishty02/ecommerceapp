import React, { useEffect, useState } from 'react';

const NewsletterBox = () => {
    const [subscribed, setSubscribed] = useState(false);
    const [email, setEmail] = useState('');
    const [subscriptionDate, setSubscriptionDate] = useState(null);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('subscriptionData'));
        if (storedData?.email && storedData?.timestamp) {
            setSubscribed(true);
            setSubscriptionDate(storedData.timestamp);
        }
    }, []);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (email.trim()) {
            const timestamp = new Date().toLocaleString();
            const subscriptionData = {
                email: email.trim(),
                timestamp,
            };
            localStorage.setItem('subscriptionData', JSON.stringify(subscriptionData));
            setSubscribed(true);
            setSubscriptionDate(timestamp);
        }
    };

    const handleUnsubscribe = () => {
        localStorage.removeItem('subscriptionData');
        setSubscribed(false);
        setEmail('');
        setSubscriptionDate(null);
    };

    return (
        <div className="text-center bg-gradient-to-r from-violet-500 to-indigo-400 p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <p className="text-2xl font-medium text-gray-800">Subscribe now & get 10% off</p>
            <p className="text-gray-700 mt-3">Stay updated with our latest offers and promotions.</p>

            {!subscribed ? (
                <form
                    onSubmit={onSubmitHandler}
                    className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 p-2 rounded-md"
                >
                    <input
                        className="w-full sm:flex-1 outline-none p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Enter your email for subscription"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold px-8 py-3 rounded-md transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 shadow-md"
                    >
                        SUBSCRIBE
                    </button>
                </form>
            ) : (
                <div className="mt-6">
                    <p className="text-violet-900 font-semibold text-lg">
                        ✅ Thanks for subscribing to our service!
                    </p>
                    <p className="text-white-1000 mt-2 text-sm">
                        Subscribed on: <strong>{subscriptionDate}</strong>
                    </p>
                    <button
                        onClick={handleUnsubscribe}
                        className="mt-4 text-red-600 hover:underline text-sm"
                    >
                        Unsubscribe
                    </button>
                </div>
            )}
        </div>
    );
};

export default NewsletterBox;