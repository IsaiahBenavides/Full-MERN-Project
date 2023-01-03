import { useState } from "react";
import Posts from "../../components/Posts/Posts.js";

export default function HomePage({currentPosts, setCurrentPosts}) {

    return(
        <>
            <h1>HomePage</h1>
            <Posts currentPosts={currentPosts} setCurrentPosts={setCurrentPosts}/>
        </>
    )
}