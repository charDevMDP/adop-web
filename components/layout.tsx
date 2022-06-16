import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, title, description }) {
    return (
        <div className="flex flex-col h-screen w-full md:relative absolute bg-[#fffaf5]  ">

        <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/logo.ico" />
      </Head>

            <div className="max-w-7xl self-auto flex flex-col w-full mx-auto">     
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
  }

  Layout.defaultProps = {
      title: 'Adop',
      description: 'Adopweb - adopcion de mascotas'
  }