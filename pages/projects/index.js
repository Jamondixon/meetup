// our-domain.com/projects

import { Fragment } from "react";
import Link from 'next/link';

function ProjectsPage() {
    return (
        <Fragment>
            <h1 className='display-2 text-center'>Magnificent feats of software engineering</h1>
            <h2 className='text-center'>
                {/* <Link href='/projects/this-is-a-wonderful-framework'> */}
                <Link href='www.jamondixon.com/'>
                    Here is my very own website!
                </Link>
            </h2>
            <ul className='text-center list-unstyled'>
                <li>
                    <Link href='https://hopeful-raman-70b1e5.netlify.app/'>
                        Quesofinder
                    </Link>
                </li>
                <li>
                    <Link href='https://awesome-hypatia-163c1c.netlify.app/'>
                        Just Fling It
                    </Link>
                </li>
                <li>
                    <Link href='https://gracious-kilby-8e4aa8.netlify.app/'>
                        CryptoCurrent
                    </Link>
                </li>
            </ul>
        </Fragment>
        )
}


export default ProjectsPage;