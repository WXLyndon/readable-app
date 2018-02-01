import React, { Component } from 'react';
import { connect } from 'react-redux';
import SinglePostPage from './SinglePostPage';
import { fetchAllComments } from '../actions/comments';
import { fetchPost } from '../actions/posts';

import SingleCommentPage from './SingleCommentPage';

class SinglePostDetailPage extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
    this.props.fetchAllComments(this.props.match.params.id);
  }

  render() {
    const { post, comments } = this.props;

    return (
      <div>
        <SinglePostPage {...post[0]} />

        {comments.length > 0 &&
          comments.map(comment => (
            <SingleCommentPage key={comment.id} {...comment} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    // post: state.posts.find(post => post.id === props.match.params.id),
    post: state.posts,
    comments: state.comments
  };
};

export default connect(mapStateToProps, { fetchPost, fetchAllComments })(
  SinglePostDetailPage
);
