import Head from 'next/head'
import Link from 'next/link'
import { Title, Text, AButton } from '../theme/components';

const IndexPage = () => (
  <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <Title>Homepage</Title>
    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae officia quaerat animi minus iure labore libero eligendi aliquid, assumenda tempore ipsam, rem quis recusandae odit itaque tenetur harum sequi blanditiis.</Text>
    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae officia quaerat animi minus iure labore libero eligendi aliquid, assumenda tempore ipsam, rem quis recusandae odit itaque tenetur harum sequi blanditiis.</Text>
    <Link href='/ninjas'><AButton>Ninja Listing</AButton></Link>
  </>
)

export default IndexPage
