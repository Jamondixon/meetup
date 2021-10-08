// our-domain.com
import 'bootstrap/dist/css/bootstrap.css'
import { Fragment } from "react";
import Link from 'next/link';

function HomePage() {
    return (
        <Fragment>
        <h1 className=' display-2 text-center'>Welcome to all things Jamon!</h1>
        <h2 className="display-6  "> Hello there</h2>
            <p>I am happy to see you have arrived at my page. Here you will find all of my musings. From softeare engineering projects to technology blogs to artwork and random things I may have found on the internet.</p>
        <Link href='/news'>
            Would you like to see some of my recent blogs?
        </Link>
        <Link href='/news'>
            How about some of the projects I have been working on?
        </Link>
        </Fragment>
        )
}

export default HomePage
