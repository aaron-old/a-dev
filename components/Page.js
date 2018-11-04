import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './Style/Global';

const theme = {}

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles>
        {this.props.children}
        </GlobalStyles>
      </ThemeProvider>
    )
  }
}
