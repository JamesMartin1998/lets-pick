// Code based from Code Institute's Moments project
import React, { useEffect, useState } from 'react';
import CommentCreateForm from '../comments/CommentCreateForm';
import Comment from '../comments/Comment';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from '../../styles/PostPage.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { useParams } from 'react-router';
import { axiosReq } from '../../api/axiosDefaults';
import Post from './Post';
import InfiniteScroll from 'react-infinite-scroll-component';
import Asset from '../../components/Asset';
import { fetchMoreData } from '../../utils/utils';

function PostPage() {
  const { id } = useParams();

  const [post, setPost] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  const [vote1, setVote1] = useState(0);
  const [vote2, setVote2] = useState(0);

  // get post and comments data from API
  useEffect(() => {
    const handleMount = async () => {
      try {
        // destructure data and rename to post and comments
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className={`h-100 ${styles.Row}`}>
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <Post
          {...post.results[0]}
          setPosts={setPost}
          setVote1={setVote1}
          setVote2={setVote2}
          postPage
        />
        <Container className={styles.Container}>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            'Comments'
          ) : null}
          {comments.results.length ? (
            <InfiniteScroll
              children={comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  {...comment}
                  setPost={setPost}
                  setComments={setComments}
                />
              ))}
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
          ) : currentUser ? (
            <span>No comments yet... Leave a comment!</span>
          ) : (
            <span>No comments yet...</span>
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default PostPage;
