const getPosts = () => {
    return([
        {
            title: "Ilk post",
            slug: 'first-post',
            intro: 'Ikinci postun basta gozukecek yeri',
            text : require('./posts/sa.md').default,
            date: '6 Agustos 2020'
        },
        {
            title: "Second post",
            slug: 'second-post',
            intro: 'Ikinci postun basta gozukecek yeri',
            text : require('./posts/secpost.md').default,
            date: '6 Agustos 2020'

        },
        {
            title: "Third post",
            slug: 'third-post',
            intro: 'Ikinci postun basta gozukecek yeri',
            text : require('./posts/ilkyazi/yazi.md').default,
            date: '6 Agustos 2020'
        }
    ])
};

export default getPosts;