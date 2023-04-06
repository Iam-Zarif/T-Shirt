import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <h1>Hey You listen to me : {data.length}</h1>
        </div>
    );
};

export default Home;