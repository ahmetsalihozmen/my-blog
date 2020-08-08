const getPosts = () => {
    return([
        {
            title: "Ilk post",
            slug: 'first-post',
            text : require('./posts/sa.md').default,
            date: '6 Agustos 2020'
        },
        {
            title: "Second post",
            slug: 'second-post',
            text : require('./posts/secpost.md').default,
            date: '6 Agustos 2020'
        },
        {
            title: "Third post",
            slug: 'third-post',
            text : require('./posts/thirdpost.md').default,
            date: '6 Agustos 2020'
        }
    ])
};

export default getPosts;