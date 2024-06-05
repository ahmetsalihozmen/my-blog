export const blogPosts = [
    {
        title: "My Journey Into Web Development",
        slug: 'web-development',
        image: '/webdev.webp',
        imageAvg: 'rgba(73, 46, 45, 0.3)',
        intro: 'Hello, in this article, I will tell you how and why I started developing websites and how I progressed on this path.',
        text : require('./posts/yazi_eng.md').default,
        date: '21 August 2020'
    },
    {
        title: "How HDD and SSD Works",
        slug: 'hdd-ssd-works',
        image: '/hddssd.webp',
        imageAvg: 'rgba(126, 145, 149, 0.3)',
        intro: 'Hello, in this article, I will try to explain the differences between HDD and SSD components, which are storage units in technological devices such as phones and computers that we use daily, and the basic working principles of these storage units.',
        text : require('./posts/ssdyazi_eng.md').default,
        date: '9 October 2020'
    },
    {
        title: "What is QR Code",
        slug: 'qrcode',
        image: '/qr.webp',
        imageAvg: 'rgba(65, 100, 117, 0.3)',
        intro: 'Hello, in this article, I will explain what QR codes are, which we see in our daily lives on billboards, brochures, and almost everywhere, and how they are structured.',
        text : require('./posts/qrcode_eng.md').default,
        date: '14 January 2021'
    },
    {
        title: "How Batteries Work",
        slug: 'batteries',
        intro: 'Hello, in this article, I will explain the working principle of batteries, which are used in many devices in our daily lives. Additionally, I will talk about the history of batteries, the types of batteries, and the most commonly used battery types today.',
        image: '/battery.png',
        imageAvg: 'rgba(130, 160, 168, 0.3)',
        text : require('./posts/pil_eng.md').default,
        date: '28 January 2021'
    },
    {
        title: "What is Blockchain",
        slug: 'blockchain',
        image: '/blockchain.webp',
        imageAvg: 'rgba(186, 213, 220, 0.3)',
        intro: 'Hello, in this article, I will explain blockchain technology, which plays a fundamental role in the functioning of cryptocurrencies that we have been hearing a lot about lately.',
        text : require('./posts/blockchain_eng.md').default,
        date: '11 February 2021'
    },
    {
        title: "What is Cookies",
        slug: 'cookies',
        image: '/cookies.webp',
        imageAvg: 'rgba(157, 136, 115, 0.3)',
        intro: 'Hello, in this article, I will talk about a type of data storage that we often hear about through warnings when we visit websites, known as cookies.',
        text : require('./posts/cookie_eng.md').default,
        date: '25 February 2021'
    },
    {
        title: "Enigma Machine",
        slug: 'enigma-machine',
        image: '/enigma.webp',
        imageAvg: 'rgba(80, 79, 78, 0.3)',
        intro: "Hello, in this article, I will talk about the Enigma machine, which holds a very important place in the history of encryption. Even Alan Turing tried to break its codes, and documentaries and movies have been made about it.",
        text : require('./posts/enigma_eng.md').default,
        date: '11 March 2021'
    },
    {
        title: "Schrödinger’s Cat",
        slug: 'schrodinger',
        intro: "Hello, today I will try to explain the Schrödinger's Cat thought experiment, which is used to explain what can happen when quantum mechanics, which is quite famous, is applied to large systems.",
        image: '/sch-cat.webp',
        imageAvg: 'rgba(112, 88, 75, 0.3)',
        text : require('./posts/schrodinger_eng.md').default,
        date: '25 March 2021'
    },
    {
        title: "Turing Test",
        slug: 'turing-test',
        intro: 'Hello, today I will talk about the Turing test, created by Alan Turing, considered the father of computer science.',
        imageAvg: 'rgba(88, 70, 48, 0.3)',
        image: '/turing.webp',
        text : require('./posts/turing_eng.md').default,
        date: '8 April 2021'
    }
]

export const getPost = (postName) => {
    return blogPosts.find(post => post.slug === postName)
}

export default blogPosts;