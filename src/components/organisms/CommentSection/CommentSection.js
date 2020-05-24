import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/molecules/Input/Input';
import Comment from 'components/organisms/CommentSection/Comment';
import Loading from 'components/molecules/Loading/Loading';
import { ReactComponent as SendButton } from 'assets/send.svg';
import { connect } from 'react-redux';
import { addComment as addCommentAction, getComments as getCommentsAction } from 'store/actions/blogActions';

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.primaryColorLightest};
  padding: 2rem 5rem;
  border-radius: 1rem;
  width: 80rem;
`;

const StyledInput = styled(Input)`
  margin-right: 1rem;
`;

const StyledCommentBox = styled.div`
  padding-top: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const StyledSendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: none;
  border: none;
  outline: none;
  display: inline-block;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.color.primaryColor};
    width: 4rem;
    height: 4rem;
    transition: all 0.25s;

    :hover,
    :focus {
      fill: ${({ theme }) => theme.color.primaryColorDark};
      transform: rotate(90deg);
    }
  }
`;

class CommentSection extends Component {
  state = {
    comment: '',
  };

  componentDidMount() {
    const { getComments, id } = this.props;

    getComments(id);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    const { id, addComment, getComments, userId } = this.props;

    e.preventDefault();
    addComment(id, this.state, userId);
    setTimeout(() => {
      getComments(id);
    }, 200);

    this.setState({ comment: '' });
  };

  render() {
    const { comments, userId, isLoading } = this.props;
    const { comment } = this.state;

    return (
      <StyledWrapper>
        {isLoading && <Loading />}
        {userId ? (
          <StyledForm action='submit' onSubmit={(e, newComment) => this.handleSubmit(e, newComment)}>
            <StyledInput
              id='comment'
              placeholder='your comment...'
              onChange={(e) => this.handleChange(e)}
              value={comment}
              maxLength='455'
            />
            <StyledSendButton>
              <SendButton />
            </StyledSendButton>
          </StyledForm>
        ) : (
          'You have to be logged in to comment blog posts!'
        )}
        <StyledCommentBox>
          {comments !== null && comments.length > 0
            ? comments
                .map((singleComment) => (
                  <Comment comment={singleComment.comment} user={singleComment.userId} key={singleComment.key} />
                ))
                .reverse()
            : 'There is nothing here yet... '}
        </StyledCommentBox>
      </StyledWrapper>
    );
  }
}

CommentSection.propTypes = {
  id: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
  addComment: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  userId: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

CommentSection.defaultProps = {
  comments: null,
  userId: null,
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (id, comment, user) => dispatch(addCommentAction(id, comment, user)),
  getComments: (postId) => dispatch(getCommentsAction(postId)),
});

const mapStateToProps = (state) => {
  return {
    comments: state.blog.comments,
    userId: state.auth.currentUser.email,
    isLoading: state.blog.isLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
