// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostIdPage = () => {
    const params = useParams()
    // const []

    // useEffect(() => {

    // }, [])

    return (
        <div>
            <h1>Страница поста c ID = {params.id}</h1>
        </div>
    )
}

export default PostIdPage;