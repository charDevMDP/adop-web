import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, title, description }) {
    return (
        <div className="flex flex-col md:h-screen w-full md:relative absolute">

        <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/logo.ico" />
      </Head>

            <div><Navbar session={null} /></div>

            {children}
 
            <div><Footer /></div>
        </div>
    )
  }

  Layout.defaultProps = {
      title: 'Adop',
      description: 'Adopweb - adopcion de mascotas'
  }