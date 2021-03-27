import React, { ReactNode } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import styled from 'styled-components'

type Props = {
  children?: ReactNode
}

const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Layout = ({ children }: Props) => (
  <Content>
    <Head key='123'>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href={"https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"} rel="stylesheet"></link>
    </Head>
    <Navbar />
    {children}
    <Footer />
  </Content>
)

export default Layout;