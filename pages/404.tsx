import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ALink, Text, Title } from '../theme/components';

const Four04 = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <Title>Oooops....</Title>
            <Text align='center'>That page cannot be found..</Text>
            <Text align='center'>Go back to the <Link href='/'><ALink>Homepage</ALink></Link></Text>
        </>
    )
}

export default Four04;