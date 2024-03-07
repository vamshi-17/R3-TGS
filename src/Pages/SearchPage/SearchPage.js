import React from "react";

import Header from "../../components/SearchPage/Header/Header";
import Navbar from "../../components/SearchPage/NavBar/Navbar";
import Search from "../../components/SearchPage/Search/Search";
import ScoreTable from "../../components/SearchPage/ScoreTable/ScoreTable";
import Comments from "../../components/SearchPage/Comments/Comments";
import Footer from "../../components/SearchPage/Footer/Footer";
import Tabs from "../../components/SearchPage/Tabs/Tabs";

const SearchPage = () => {

    return (
        <div>
            <Header/>
            <Navbar/>
            <Search/>
            <section className="bg-search p-2">
                <ScoreTable/>
                <Comments/>
                <Tabs/>
            </section>
            <Footer/>

        </div>
    )
}

export default SearchPage;