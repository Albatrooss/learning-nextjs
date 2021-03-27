import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Nav = styled.nav`
    margin: 10px auto 80px;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border-bottom: 1px solid #ddd;

    & a {
        margin-left: 12px;
    }
`;
const Logo = styled.div`
    margin-right: auto;
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo>
                <Image src='/new_logo.svg' width={120} height={100} />
            </Logo>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/ninjas'><a>Ninja Listing</a></Link>
        </Nav>
    )
}

export default Navbar;