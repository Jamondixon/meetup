// our-domain.com/projects

import { Fragment } from "react";
import Link from 'next/link';

function ProjectsPage() {
    return (
        <Fragment>
            <h1>Magnificent feats of software engineering</h1>
            <h2>
                {/* <Link href='/projects/this-is-a-wonderful-framework'> */}
                <Link href='https://jamondixon.com/'>
                    Here is my very own website!
                </Link>
            </h2>
            <ul>
                <li>
                    <Link href='https://jamondixon.medium.com/next-up-next-js-7b5eca81d212'>
                        Next up...Next.js
                    </Link>
                </li>
                <li>
                    <Link href='https://medium.com/codex/how-do-you-stack-up-f9280ff4636f'>
                        How do you stack up?
                    </Link>
                </li>
                <li>
                    <Link href='https://medium.com/geekculture/react-vs-vue-js-b5d82e7af861'>
                        React vs. Vue.js
                    </Link>
                </li>
                <li>
                    <Link href='https://jamondixon.medium.com/the-biggest-o-of-them-all-notation-93352775acc7'>
                    The BIGGEST O of them all(notation)
                    </Link>
                </li>
            </ul>
        </Fragment>
        )
}


export default ProjectsPage;