import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Title } from "../../theme/components";
import { ResponseData } from '../../interfaces';

export const getStaticProps = async () => {
    const res: Response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: ResponseData[] = await res.json();

    return {
        props: { ninjas: data }
    }
}

interface Props {
    ninjas: ResponseData[]
}

const Single = styled.a`
    padding: 2px 16px;
    background: #fff;
    display: block;
    margin: 20px 19px;
    border-left: 8px solid #fff;

    &:hover {
        border-left: 8px solid #4979FF;
        cursor: pointer;
    }
`;

const Ninjas = ({ ninjas }: Props) => {
    console.log('ninjas: ', ninjas)
    return (
        <>
            <Head>
                <title>Ninja List | Ninjas</title>
            </Head>
            <Title>Ninjas</Title>
            {ninjas.map(ninja =>
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                    <Single><h3>{ninja.name}</h3></Single>
                </Link>
            )}
        </>
    )
}
export default Ninjas;