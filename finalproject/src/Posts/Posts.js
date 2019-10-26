import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as postsActions from './posts.actions';
import { Link } from 'react-router-dom';

const posts = {
    "results": [
        {
            id: 1,
            username: "zamarrowski",
            picture: "https://picsum.photos/id/231/500/500",
            likes: 25,
            comments: [
                {
                    username: "jacobo",
                    content: "Foton!!!"
                }
            ]
        },
        {
            id: 2,
            username: "pekerod",
            picture: "https://picsum.photos/id/221/500/500",
            likes: 13,
            comments: []
        }
    ]
}


const Posts = props => {
    useEffect(() => {
        console.log(posts.results)
        props.setPosts(posts.results);
    }, []);

    const like = id => {
        let posts = props.posts.map(post => {
            if(post.id === id) {
                post.likes ++
            }
            return post
        })
        props.setPosts(posts)
    }

    return <>
        <h1>Posts</h1>
        <Link to="/account">Account</Link>
        <ul>
            {props.posts.map((post) => (
                <li key={post.id}>
                    <img src={post.picture} width="300"/>
                    <p>Likes: {post.likes}</p>
                    <button onClick={()=>like(post.id)}>Like!!</button>
                    {post.comments.map((content) => (
                        <div key={post.id}>
                        <p >{content.username}</p>
                        <p>{content.content}</p>
                        </div>
                    ))}
                </li>
            ))}
        </ul>
    </>

};

const mapStateToProps = state => {
    return {
        posts: state.posts.posts //state.reducer.prop
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPosts: posts => dispatch(postsActions.setPosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)