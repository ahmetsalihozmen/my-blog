const getPosts = () => {
    return([
        {
            title: "Web Geliştirmeye Başlangıç",
            slug: 'web-baslangic',
            intro: 'Merhaba bu yazımda size web siteleri geliştirmeye nasıl, neden başladığımı ve bu yolda nasıl ilerlediğimi anlatacağım. Eğer siz de web developmenta başlamak isteyip bir türlü başlayamıyorsanız veya başlamak aklınıza hiç gelmediyse bu yazının size yardımcı olabileceğini düşünüyorum.',
            text : require('./posts/yazi.md').default,
            date: '21 Agustos 2020'
        },
        {
            title: "HDD ve SSD Nasıl Çalışır",
            slug: 'hdd-ssd-calisma',
            intro: 'Merhaba bu yazımda sizlere her gün kullandığımız telefon, bilgisayar gibi teknolojik aletlerin depolama birimlerinden olan HDD ve SSD komponentlerinin farkını ve yüzeysel olarak bu depolama birimlerinin çalışma mantığını anlatmaya çalışacağım.',
            text : require('./posts/ssdyazi.md').default,
            date: '9 Ekim 2020'
        },
        {
            title: "QR Kodu Nasıl Çalışır",
            slug: 'QRcode-calisma',
            intro: 'Merhaba bu yazımda sizlere gunluk hayatta reklam panolarında, broşürlerde ve aklımıza gelebilecek her yerde gördüğümüz QR kodlarının ne olduğunu ve nasıl bir yapıda hazırlandığını anlatacağım.            ',
            text : require('./posts/qrcode.md').default,
            date: '14 Ocak 2021'
        }
    ])
};

export default getPosts;