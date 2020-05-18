import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostTemplate from 'template/PostTemplate';
import axios from 'axios';

class PostPage extends Component {
  state = {
    title: '',
    link: '',
    content: '',
  };

  componentDidMount() {
    const { location } = this.props;
    const postId = location.pathname.substring(6);
    axios.get(`https://advblogv2.firebaseio.com/response/${postId}.json`).then(({ data }) => {
      const { title, link, content } = data;
      this.setState({
        title,
        link,
        content,
      });
    });
  }

  render() {
    const { title, link, content } = this.state;
    return <PostTemplate title={title} link={link} content={content} />;
  }
}

PostPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PostPage;
