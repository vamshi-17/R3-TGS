import React from "react";

import Header from "../../components/SearchPage/Header/Header";
import Navbar from "../../components/SearchPage/NavBar/Navbar";
import Search from "../../components/SearchPage/Search/Search";
import ScoreTable from "../../components/SearchPage/ScoreTable/ScoreTable";
import Comments from "../../components/SearchPage/Comments/Comments";
import Tabs from "../../components/SearchPage/Tabs/Tabs";
import Footer from "../../components/SearchPage/Footer/Footer";


const SearchPage = () => {

    return (
        <div>
            <Header/>
            <Navbar/>
            <main>
                <Search/>
            </main>


        </div>
    )
}

export default SearchPage;


/**
 * 

            <Navbar/>
            <main>
                <Search/>
                <ScoreTable/>
                <Comments/>
                <Tabs/>
            </main>
            <Footer/>

 */