import "./BlogsOverviewPage.css";
import posts from "../../constants/data.json";

function BlogsOverviewPage() {
    return (
        <>
            <div>
                <h1>Bekijk alle {posts.length} posts op het platform</h1>
            </div>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>
                        <span>
                            <a href={`/posts/${post.id}`}>{post.title}</a> ({post.author})
                        </span>
                        <p>
                            {post.comments} reacties - {post.shares} keer gedeeld
                        </p>
                    </li>
                })}
            </ul>
        </>

    )
}

export default BlogsOverviewPage;