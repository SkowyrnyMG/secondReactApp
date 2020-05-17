import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as GithubIcon } from 'assets/github.svg';
import { ReactComponent as FacebookIcon } from 'assets/facebook.svg';
import { ReactComponent as LinkedinIcon } from 'assets/linkedin.svg';
import { ReactComponent as TwitterIcon } from 'assets/twitter.svg';

const StyledLink = styled.a`
  position: relative;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  svg {
    height: 4rem;
    width: 4rem;
  }

  :hover svg {
    fill: ${({ type, theme }) => theme.color[type]};
  }
`;

class SocialmediaIcon extends Component {
  state = {
    icon: {
      github: {
        type: GithubIcon,
      },
      facebook: {
        type: FacebookIcon,
      },
      linkedin: {
        type: LinkedinIcon,
      },
      twitter: {
        type: TwitterIcon,
      },
    },
  };

  render() {
    const { type, link } = this.props;
    const { icon } = this.state;

    const Tag = icon[type].type;

    return (
      <StyledLink icon={icon} type={type} href={link} target='_blank' rel='noopener noreferrer'>
        <Tag />
      </StyledLink>
    );
  }
}

SocialmediaIcon.propTypes = {
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialmediaIcon;
