// our-domain.com/news

import { Fragment } from "react";
import Link from 'next/link';

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href='/news/this-is-a-wonderful-framework'>
                    This is a wonderful framework
                    </Link>
                </li>
                <li>First time using it</li>
                <li>Yeeeehaw</li>
                <li>Wow</li>
            </ul>
        </Fragment>
        )
}


export default NewsPage;
