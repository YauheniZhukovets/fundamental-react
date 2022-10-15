import React, {useEffect, useRef, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/postService";
import {getPageCount} from "../utils/pages";
import {Button} from "../Components/UI/button/Button";
import {Modal} from "../Components/UI/modal/Modal";
import {PostForm} from "../Components/PostForm";
import {PostFilter} from "../Components/PostFilter";
import {Loader} from "../Components/UI/loder/Loader";
import {PostList} from "../Components/PostList";
import {useObserver} from "../hooks/useObserver";
import {Select} from "../Components/UI/select/Select";


export const Posts = () => {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPage, setTotalPage] = useState(0)
    const [limit, seLimit] = useState(5)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()

    const [fetchPost, isPostLoading, errorFetchPost] = useFetching(async () => {
        const res = await PostService.getAll(limit, page)
        setPosts([...posts, ...res.data])

        const totalCount = res.headers['x-total-count']
        setTotalPage(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPage, isPostLoading, () => setPage(page + 1))

    useEffect(() => {
        fetchPost()
    }, [page, limit])


    const changePage = (page) => {
        setPage(page)
    }

    const addPost = (newPost) => {
        setPosts([newPost, ...posts])
        setModal(false)
    }

    const deletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId))
    }

    return (
        <div className='App'>

            <Button style={{marginTop: 20}}
                    onClick={() => setModal(true)}
            >
                Создать пост
            </Button>

            <Modal visible={modal} setVisible={setModal}>
                <PostForm createPost={addPost}/>
            </Modal>

            <hr style={{margin: '15px 0'}}/>

            <PostFilter filter={filter}
                        setFilter={setFilter}
            />

            <div style={{marginTop: 5}}>
                <Select value={limit}
                        onChange={value => seLimit(value)}
                        defaultValue={'Кол-во элементов'}
                        options={[
                            {value: 5, name: '5'},
                            {value: 8, name: '8'},
                            {value: 10, name: '10'},
                            {value: -1, name: 'Показать все'},
                        ]}
                />
            </div>


            {
                errorFetchPost &&
                <h1>Произошла ошибка: {errorFetchPost}</h1>
            }

            <PostList deletePost={deletePost}
                      posts={sortedAndSearchedPosts}
                      title={'Список постов'}
            />
            <div ref={lastElement}></div>

            {isPostLoading
                && <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Loader/>
                </div>}

            {/*<Pagination currentPage={page}
                        totalPage={totalPage}
                        onClickCallback={changePage}
            />*/}

        </div>)
}
