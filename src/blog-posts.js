const getPosts = () => {
    return([
        {
            title: "Web Geliştirmeye Başlangıç",
            slug: 'web-baslangic',
            intro: 'Merhaba bu yazımda size web siteleri geliştirmeye nasıl, neden başladığımı ve bu yolda nasıl ilerlediğimi anlatacağım. Eğer siz de web developmenta başlamak isteyip bir türlü başlayamıyorsanız veya başlamak aklınıza hiç gelmediyse bu yazının size yardımcı olabileceğini düşünüyorum.',
            text : require('./posts/yazi.md').default,
            date: '21 Agustos 2020'
        }
    ])
};

export default getPosts;