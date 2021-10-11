// our-domain.com
import 'bootstrap/dist/css/bootstrap.css'
import { Fragment } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Jamon from '../public/prettty2jamon1.jpg';


function HomePage() {
    return (
        <Fragment>
        <h1 className='display-2 text-center'>Welcome to all things Jamon!</h1>
        <h2 className="display-6 text-center "> Hello there</h2>
            <p className='font-weight-light font-monospace m-4 p-4'>I am happy to see you have arrived at my page. Here you will find all of my musings. From software engineering projects to technology blogs to artwork and random things I may have found on the internet.</p>
        <div className='text-center'>
            <Image src={Jamon} alt="jamon" width={600} height={600} className='rounded mx-auto d-block'/>
        </div>
        <h4 className='text-center'>
            <Link href='/blogs'>
                Would you like to see some of my recent blogs?
            </Link>
        </h4>
        <h4 className='text-center'>
            <Link href='/projects'>
                How about some of the projects I have been working on?
            </Link>
        </h4>
        </Fragment>
        )
}

export default HomePage
