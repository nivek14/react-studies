import React from 'react'

import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';
import PostDetail from '../../components/PostDetail/PostDetail';
import { Link } from "react-router-dom";
import styles from "./Search.module.css";

const Search = () => {

    const query = useQuery();
    const search = query.get("q");

    const { documents: posts } = useFetchDocuments("posts", search);

    return (
        <div className={styles.search_container}>
            <h2>Search</h2>
            <div className={styles.noposts}>
                {posts && posts.lenght === 0 && (
                    <>
                        <p>Não foram encontrados posts</p>
                        <Link to="/" className='btn btn-dark'>
                            voltar
                        </Link>
                    </>
                )}
                {posts && posts.map((post) => { <PostDetail key={post.id} post={post} /> })}
            </div>
        </div>
    )
}

export default Search