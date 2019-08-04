import Head from 'next/head'
import Navbar from '../components/navbar';

const Layput = (props) => (
    <div>
        <Head>
            <title>BlitzPrice</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div className="container">{props.children}</div>
    </div>
)

export default Layput;