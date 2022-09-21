import React from 'react';
import NavigationBar from '../A-Navigation/NavigationBar';
import Cards from '../B-Card/Cards';
import MainList from '../C-List/MainList';

const Home = () => {
    return (
        <div>
            <h1>This is Home Component</h1>
            <NavigationBar />
            <Cards />
            <MainList />

        </div>
    );
};

export default Home;