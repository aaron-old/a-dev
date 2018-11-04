import React from 'react';
import App, { Container } from 'next/app';

import Page from '../components/Page';

export default class AaronDev extends App {

    static async getInitialProps({ Component, router, ctx}) {
        let pageProps = {}
        if(Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return {pageProps}
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Page>
                    <Component {...pageProps}/>    
                </Page>
            </Container>
        )
    }
}