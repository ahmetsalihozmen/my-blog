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
            intro: 'Merhaba bu yazımda sizlere gunluk hayatta reklam panolarında, broşürlerde ve aklımıza gelebilecek her yerde gördüğümüz QR kodlarının ne olduğunu ve nasıl bir yapıda hazırlandığını anlatacağım.',
            text : require('./posts/qrcode.md').default,
            date: '14 Ocak 2021'
        },
        {
            title: "Piller Nasıl Çalışır",
            slug: 'pil-calisma',
            intro: 'Merhabalar bu yazımda hayatımızdaki birçok cihazda kullanılan pillerin çalışma mantığını anlatacağım. Bunun yanında pillerin tarihininden, pillerin türlerinden ve günümüzde en çok kullanılan pil türlerinden bahsedeceğim.',
            text : require('./posts/pil.md').default,
            date: '28 Ocak 2021'
        },
        {
            title: "Blockchain Nedir",
            slug: 'blockchain',
            intro: 'Merhabalar bu yazımda son günlerde çok duyduğumuz kripto paraların çalışmasında temel bir rolu olan blockchain teknolojisini anlatacağım. Blockchain tek bir alanda kullanılmadığı için ben bu yazımda genel olarak kripto para sistemlerinde kullanımını ele alacağım.',
            text : require('./posts/blockchain.md').default,
            date: '11 Şubat 2021'
        },
        {
            title: "Çerezler (Cookies) Nedir",
            slug: 'cookies',
            intro: 'Merhabalar bu yazımda sizlere genellikle sitelere girdiğimizde bir uyarı sayesinde ismini duyduğumuz Türkçe olarak çerez, İngilizce olarak cookie dediğimiz veri saklama türünden bahsedeceğim.            ',
            text : require('./posts/cookie.md').default,
            date: '25 Şubat 2021'
        },
        {
            title: "Enigma Makinesi",
            slug: 'enigma-machine',
            intro: "Merhabalar bu yazımda tarihte şifreleme konusunda çok önemli bir yeri olan, Alan Turing'in bile şifrelerini çözmek için uğraştığı, hakkında belgeseller ve filmlerin çekildiği Enigma adlı makineden bahsedeceğim.",
            text : require('./posts/enigma.md').default,
            date: '11 Mart 2021'
        },
        {
            title: "Schrödinger’in Kedisi",
            slug: 'schrodinger',
            intro: "Merhaba bugün sizlere oldukça meşhur olan kuantum mekaniğinin büyük sistemlerde uygulandığında, ne olabileceğini açıklamak için kullanılan Schrödinger’in Kedisi düşünce deneyini anlatmaya çalışacağım.",
            text : require('./posts/schrodinger.md').default,
            date: '25 Mart 2021'
        },
        {
            title: "Turing Testi",
            slug: 'turing-testi',
            intro: "Merhaba bugün sizlere makineler düşününebilir mi sorusuna cevap vermek için yapılan, bilgisayar biliminin kurucusu sayılan Alan Turing'in bulduğu Turing testinden bahsedeceğim. ",
            text : require('./posts/turing.md').default,
            date: '8 Nisan 2021'
        }


    ])
};

export default getPosts;