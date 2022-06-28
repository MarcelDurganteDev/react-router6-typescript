import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface IAboutPageProps {}

const IAboutPage: React.FC<IAboutPageProps> = (props) => {
    const [message, setMessage] = useState('');

    // look for parameters in the URL after '/' (not from '?') using a hookParams
    const { number } = useParams();

    useEffect(() => {
        if (number) {
            setMessage('This is number ' + number);
        } else {
            setMessage('No number was provided');
        }
    }, [number]);

    return (
        <div>
        <p>This is the ABOUT PAGE</p>
        <p>{message}</p>
        </div>
    );
};

export default IAboutPage;
