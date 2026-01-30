export const blogPosts = [
    {
        title: {
            en: "My Journey Into Web Development",
            tr: "Web Geliştirmeye Başlangıcım"
        },
        slug: 'web-development',
        image: '/webdev.webp',
        imageAvg: 'rgba(73, 46, 45, 0.3)',
        intro: {
            en: 'Hello, in this article, I will tell you how and why I started developing websites and how I progressed on this path.',
            tr: 'Merhaba, bu yazımda size web siteleri geliştirmeye nasıl, neden başladığımı ve bu yolda nasıl ilerlediğimi anlatacağım.'
        },
        text: {
            en: require('./posts/yazi_eng.md').default,
            tr: require('./posts/yazi_tr.md').default
        },
        date: '21 August 2020'
    },
    {
        title: {
            en: "How HDD and SSD Works",
            tr: "HDD ve SSD Nasıl Çalışır"
        },
        slug: 'hdd-ssd-works',
        image: '/hddssd.webp',
        imageAvg: 'rgba(126, 145, 149, 0.3)',
        intro: {
            en: 'Hello, in this article, I will try to explain the differences between HDD and SSD components, which are storage units in technological devices such as phones and computers that we use daily, and the basic working principles of these storage units.',
            tr: 'Merhaba bu yazımda sizlere her gün kullandığımız telefon, bilgisayar gibi teknolojik aletlerin depolama birimlerinden olan HDD ve SSD komponentlerinin farkını ve yüzeysel olarak bu depolama birimlerinin çalışma mantığını anlatmaya çalışacağım.'
        },
        text: {
            en: require('./posts/ssdyazi_eng.md').default,
            tr: require('./posts/ssdyazi_tr.md').default
        },
        date: '9 October 2020'
    },
    {
        title: {
            en: "What is QR Code",
            tr: "QR Kod Nedir"
        },
        slug: 'qrcode',
        image: '/qr.webp',
        imageAvg: 'rgba(65, 100, 117, 0.3)',
        intro: {
            en: 'Hello, in this article, I will explain what QR codes are, which we see in our daily lives on billboards, brochures, and almost everywhere, and how they are structured.',
            tr: 'Merhaba bu yazımda sizlere gunluk hayatta reklam panolarında, broşürlerde ve aklımıza gelebilecek her yerde gördüğümüz QR kodlarının ne olduğunu ve nasıl bir yapıda hazırlandığını anlatacağım.'
        },
        text: {
            en: require('./posts/qrcode_eng.md').default,
            tr: require('./posts/qrcode_tr.md').default
        },
        date: '14 January 2021'
    },
    {
        title: {
            en: "How Batteries Work",
            tr: "Piller Nasıl Çalışır"
        },
        slug: 'batteries',
        intro: {
            en: 'Hello, in this article, I will explain the working principle of batteries, which are used in many devices in our daily lives. Additionally, I will talk about the history of batteries, the types of batteries, and the most commonly used battery types today.',
            tr: 'Merhabalar bu yazımda hayatımızdaki birçok cihazda kullanılan pillerin çalışma mantığını anlatacağım. Bunun yanında pillerin tarihininden, pillerin türlerinden ve günümüzde en çok kullanılan pil türlerinden bahsedeceğim.'
        },
        image: '/battery.png',
        imageAvg: 'rgba(130, 160, 168, 0.3)',
        text: {
            en: require('./posts/pil_eng.md').default,
            tr: require('./posts/pil_tr.md').default
        },
        date: '28 January 2021'
    },
    {
        title: {
            en: "What is Blockchain",
            tr: "Blockchain Nedir"
        },
        slug: 'blockchain',
        image: '/blockchain.webp',
        imageAvg: 'rgba(186, 213, 220, 0.3)',
        intro: {
            en: 'Hello, in this article, I will explain blockchain technology, which plays a fundamental role in the functioning of cryptocurrencies that we have been hearing a lot about lately.',
            tr: 'Merhabalar bu yazımda son günlerde çok duyduğumuz kripto paraların çalışmasında temel bir rolu olan blockchain teknolojisini anlatacağım. Blockchain tek bir alanda kullanılmadığı için ben bu yazımda genel olarak kripto para sistemlerinde kullanımını ele alacağım.'
        },
        text: {
            en: require('./posts/blockchain_eng.md').default,
            tr: require('./posts/blockchain_tr.md').default
        },
        date: '11 February 2021'
    },
    {
        title: {
            en: "What is Cookies",
            tr: "Çerezler (Cookies) Nedir"
        },
        slug: 'cookies',
        image: '/cookies.webp',
        imageAvg: 'rgba(157, 136, 115, 0.3)',
        intro: {
            en: 'Hello, in this article, I will talk about a type of data storage that we often hear about through warnings when we visit websites, known as cookies.',
            tr: 'Merhabalar bu yazımda sizlere genellikle sitelere girdiğimizde bir uyarı sayesinde ismini duyduğumuz Türkçe olarak çerez, İngilizce olarak cookie dediğimiz veri saklama türünden bahsedeceğim.'
        },
        text: {
            en: require('./posts/cookie_eng.md').default,
            tr: require('./posts/cookie_tr.md').default
        },
        date: '25 February 2021'
    },
    {
        title: {
            en: "Enigma Machine",
            tr: "Enigma Makinesi"
        },
        slug: 'enigma-machine',
        image: '/enigma.webp',
        imageAvg: 'rgba(80, 79, 78, 0.3)',
        intro: {
            en: "Hello, in this article, I will talk about the Enigma machine, which holds a very important place in the history of encryption. Even Alan Turing tried to break its codes, and documentaries and movies have been made about it.",
            tr: "Merhabalar bu yazımda tarihte şifreleme konusunda çok önemli bir yeri olan, Alan Turing'in bile şifrelerini çözmek için uğraştığı, hakkında belgeseller ve filmlerin çekildiği Enigma adlı makineden bahsedeceğim."
        },
        text: {
            en: require('./posts/enigma_eng.md').default,
            tr: require('./posts/enigma_tr.md').default
        },
        date: '11 March 2021'
    },
    {
        title: {
            en: "Schrödinger's Cat",
            tr: "Schrödinger'in Kedisi"
        },
        slug: 'schrodinger',
        intro: {
            en: "Hello, today I will try to explain the Schrödinger's Cat thought experiment, which is used to explain what can happen when quantum mechanics, which is quite famous, is applied to large systems.",
            tr: "Merhaba bugün sizlere oldukça meşhur olan kuantum mekaniğinin büyük sistemlerde uygulandığında, ne olabileceğini açıklamak için kullanılan Schrödinger'in Kedisi düşünce deneyini anlatmaya çalışacağım."
        },
        image: '/sch-cat.webp',
        imageAvg: 'rgba(112, 88, 75, 0.3)',
        text: {
            en: require('./posts/schrodinger_eng.md').default,
            tr: require('./posts/schrodinger_tr.md').default
        },
        date: '25 March 2021'
    },
    {
        title: {
            en: "Turing Test",
            tr: "Turing Testi"
        },
        slug: 'turing-test',
        intro: {
            en: 'Hello, today I will talk about the Turing test, created by Alan Turing, considered the father of computer science.',
            tr: 'Merhaba bugün sizlere makineler düşününebilir mi sorusuna cevap vermek için yapılan, bilgisayar biliminin kurucusu sayılan Alan Turing\'in bulduğu Turing testinden bahsedeceğim.'
        },
        imageAvg: 'rgba(88, 70, 48, 0.3)',
        image: '/turing.webp',
        text: {
            en: require('./posts/turing_eng.md').default,
            tr: require('./posts/turing_tr.md').default
        },
        date: '8 April 2021'
    }
]

// Helper function to get localized post
export const getLocalizedPost = (post, language = 'en') => {
    if (!post) return null;
    
    return {
        ...post,
        title: typeof post.title === 'object' ? post.title[language] || post.title.en : post.title,
        intro: typeof post.intro === 'object' ? post.intro[language] || post.intro.en : post.intro,
        text: typeof post.text === 'object' ? post.text[language] || post.text.en : post.text,
    };
}

export const getPost = (postName, language = 'en') => {
    const post = blogPosts.find(post => post.slug === postName);
    return getLocalizedPost(post, language);
}

export default blogPosts;
