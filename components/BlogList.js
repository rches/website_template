import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogList = props => {
    let leadText;
    return (
        <>
            <ul>
                {props.allBlogs.map(post => (
                    <Link
                        key={post.slug}
                        href={{ pathname: `/blog/${post.slug}` }}
                    >
                        <a>
                            <li>
                                <div className="post__info">
                                    <h3>{post.document.data.title}</h3>
                                    <p>
                                        <ReactMarkdown
                                            source={`${post.document.content.slice(
                                                0,
                                                150
                                            )}...`}
                                        />
                                    </p>
                                </div>
                            </li>
                        </a>
                    </Link>
                ))}
            </ul>
        </>
    );
};

export default BlogList;
