//in Post.jsx

export function Post({ imageUrl, description }) {
    return (
        <div>
            <img src={imageUrl} width="200px" height="100px" />
            <p style="font-size: 20;">{description}</p>
            <button style="color: white;background-color: red;">Delete</button>
        </div>
    )
}

//In Feed.jsx

export function Feed() {
    return (
        <div>
            <Post imageUrl="https://tinyurl.com/ycy9h7aa" description="A nice butterfly" />
            <Post imageUrl="https://tinyurl.com/mtedzf6y" description="My breakfast" />
            <Post imageUrl="https://tinyurl.com/4btmc59d" description="My latest drawing!" />
            <Post imageUrl="https://tinyurl.com/5m27u9kw" description="More pictures from my holidays" />
        </div>
    )
}