import React, { Component } from 'react';
import { ExtraContentsWrapper, ItemList } from '../../components';

class ExtraContentsContainer extends Component {
    render() {
      return (
        <ExtraContentsWrapper>
          <ItemList/>
        </ExtraContentsWrapper>
      );
    }
}

export default ExtraContentsContainer;