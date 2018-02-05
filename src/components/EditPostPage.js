import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { fetchEditPost } from '../actions/postsActions';

class EditPostPage extends Component {
  render() {
    const post = this.props.posts.filter(
      post => post.id === this.props.match.params.id
    );

    return (
      <div>
        <PostForm
          postInfo={post[0]}
          onSubmit={content => {
            this.props.fetchEditPost(content.id, content);
            this.props.history.push('/');
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
});

export default connect(mapStateToProps, { fetchEditPost })(EditPostPage);
