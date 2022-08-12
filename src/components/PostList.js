import React from 'react';
import {useState,useEffect} from 'react';
import {fetchPosts} from '../api/fetchPosts';
import {Post} from './Post';
import { PaginationButtonsList } from './PaginationButtonsList';


const PostList = () => {
    const [page, setPage]=useState(1);
    const [post,setPost]=useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const limit=5;
    useEffect(()=>{
        setIsLoading(true);
        fetchPosts(page,limit).then((res)=>{
            setIsLoading(false);
            setPost([...res.data])
        })
    },[page]);
    function handleChange(e){
        setPage(e.target.value);
    }
    return (
        <>
        {isLoading&&<h1>Loading...</h1>}
        {!isLoading&&post.map((item,i)=>{
           return <Post title={item.title} body={item.body} id={i} key={i}></Post>
        })}
        {!isLoading&&<PaginationButtonsList handleChange={handleChange} page={page}></PaginationButtonsList>}
        </>
    )
}

export { PostList }