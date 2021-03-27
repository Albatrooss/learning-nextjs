import Head from 'next/head';
import Link from 'next/link';

const AboutPage = () => (
  <>
    <Head>
      <title>Ninja List | About</title>
    </Head>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
)

export default AboutPage
