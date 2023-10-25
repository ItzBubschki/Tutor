export function Feed() {
    const [posts, setPosts] = useState([
        { url: "https://tinyurl.com/ycy9h7aa", description: "A nice butterfly" },
        { url: "https://tinyurl.com/mtedzf6y", description: "My breakfast" },
        { url: "https://tinyurl.com/4btmc59d", description: "My latest drawing!" },
        { url: "https://tinyurl.com/5m27u9kw", description: "More pictures from my holidays" }
    ]);
    return (
        <div>
            {
                posts.map((post, index) => <Post imageUrl={post.url} description={post.description} key={index} />)
            }
        </div>
    )
}