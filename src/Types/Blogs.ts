type APIBlogs = {
    blogs: Blog[];
}

type Blog = {
    id:      string;
    tag:     string;
    title:   string;
    content: string;
    date:    string;
    author:  string;
    image:   string;
}