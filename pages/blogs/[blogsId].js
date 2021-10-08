import { useRouter } from 'next/router'

// our-domain.com/blogs/whatever

function DetailPage() {
    const router = useRouter();

    const blogsID = router.query.blogsId;

    // send a request to the backend api
    // to fetch the news item with newsId

    return <h1>The Detail Page</h1>
}

export default DetailPage
