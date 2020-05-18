import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogTemplate from 'template/BlogTemplate';
import PostPreview from 'components/molecules/PostPreview/PostPreview';
import { connect } from 'react-redux';
import { getData } from 'store/actions/blogActions';

class BlogPage extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { posts } = this.props;
    return (
      <>
        <BlogTemplate>
          {posts.map(({ id, link, title }) => (
            <PostPreview key={id} id={id} link={link} title={title} />
          ))}
        </BlogTemplate>
      </>
    );
  }
}

BlogPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  fetchData: PropTypes.func.isRequired,
};

BlogPage.defaultProps = {
  posts: null,
};

const mapStateToProps = (state) => {
  return {
    posts: state.blog.posts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
