import React from 'react';
import {useState,useEffect} from 'react';
import {fetchPosts} from '../api/fetchPosts';
import {Post} from './Post';
import { PaginationButtonsList } from './PaginationButtonsList';
import { Loader } from './Loader';

const PostList = () => {
    const [redButton, setRedButton]= useState(1);
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
        setRedButton(e.target.value);
        setPage(e.target.value);
    }
    return (
        <>
        {isLoading&&<Loader id={loader}></Loader>}
        {!isLoading&&post.map((item,i)=>{
           return <Post className={post} title={item.title} body={item.body} id={i} key={i}></Post>
        })}
        {!isLoading&&<PaginationButtonsList redButton={redButton} handleChange={handleChange} page={page}></PaginationButtonsList>}
        </>
    )
}

export { PostList }