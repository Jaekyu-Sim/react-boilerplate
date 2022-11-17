import React from "react";
import Header from "../components/Header";

const HomePage = () => {


    return(
        <div>
            <Header></Header>
            <button>
                <a href="/TestPage1">To Page 1</a>
            </button>
            <button>
                <a href="/TestPage2">To Page 2</a>
            </button>
        </div>
    )
}
export default HomePage;