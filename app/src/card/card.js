import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UISCardWrapper = styled.div`
  padding: 0 1rem;

  border: 4px dotted yellowgreen;
`;

export class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  };

  static defaultProps = {
    data: [{ id: 1, name: 'Item #1' }],
  };

  render() {
    return (
      <UISCardWrapper>
        <header>
          <h3>{this.props.title}</h3>

          {this.props.data.map(x => (
            <h4 key={x.id}>{x.name}</h4>
          ))}
        </header>

        <div>
          <p>Card Content</p>
          <button type="button">Action</button>
        </div>

        <footer>
          <h4>Footer</h4>
        </footer>
      </UISCardWrapper>
    );
  }
}

export default Card;
