import Head from 'next/head';
import { Text, Title } from '../../theme/components';
import { ResponseData } from '../../interfaces';

export const getStaticPaths = async () => {
    const res: Response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: ResponseData[] = await res.json();

    return {
        paths: data.map(ninja => ({ 
            params: {
                id: ninja.id.toString()
            }
        })),
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const id = context.params.id;
    const res: Response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data: ResponseData = await res.json();

    return {
        props: {
            ninja: data
        }
    }
}

interface Props {
    ninja: ResponseData
}

const Details: React.FC<Props> = ({ ninja }) => {
    return (
        <>
            <Head>
                <title>Ninja List | {ninja.name}</title>
            </Head>
            <Title>{ninja.name}</Title>
            <Text align='center'>{ninja.email}</Text>
            <Text align='center'>{ninja.phone}</Text>
            <Text align='center'>{ninja.address.street}</Text>
            <Text align='center'>{ninja.address.city}</Text>
        </>
    );
}

export default Details;