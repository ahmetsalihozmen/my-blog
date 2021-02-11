Merhabalar bu yazımda son günlerde çok duyduğumuz kripto paraların çalışmasında temel bir rolu olan blockchain teknolojisini anlatacağım. Blockchain tek bir alanda kullanılmadığı için ben bu yazımda genel olarak kripto para sistemlerinde kullanımını ele alacağım.

Aşağıdaki konu başlıklarına tıklayarak o konuyu anlattığım kısıma geçebilirsiniz.

[Blockchain Tarihi](#m1)

[Public Blockchain](#m2)

[Blockchain Nasıl Çalışır](#m3)

<div id="m1"></div>

## Blockchain Tarihi

Blockchain teknolojisinin temeli 1991 yıllarında Sturat Haber ve Scott Stornetta adlı kriptografi uzmanları tarafından yapılan çalışmalarla atılmıştır. Bu çalışmalarda ilk olarak saklanmak istenen bilgiler hashlenerek bir blok oluşturur. Oluşturulan bu bloklar her biri kendine özel timestamp denilen verinin ne zaman kaydedildiğini yazan bir veri ile tutulur. Bu blokların liste şeklinde tutulması sonucunda veriler saklanır.
<br></br>

<img src="./bitcoin.png" alt="bitcoin-image"/>


<br></br>
31 Ekim 2008 tarihinde Satoshi Nakamoto adlı grup ya da kişi "Bitcoin: A Peer-to-Peer Electronic Cash System" adlı makaleyi yayınladı. Günümüzde para aktarma işlemleri geleneksel yol olan 3. bir kurumun dahil edilip işlemlere onay vermesi sonucu yapılır. Bu makale bunun haricinde daha güvenilir, bir merkeze bağlı olmayan, anonim bir şekilde işlemlerin yapıldığı ve 3. bir kurum dahil edilmeyen bir elektronik işlem yapma sistemini anlatıyordu. Bu sistem temel olarak blockchain teknolojisi üzerine kuruluydu. Bu sistemin içerisinde kullanılan para biriminin ismi artık neredeyse hepimizin duyduğu ilk kripto para birimi olan <b>Bitcoin</b>.


<div id="m2"></div>

## Public Blockchain

Public blockchain bir blokchain türüdür. Yazımın başında da dediğim gibi kripto paralarda kullanılan blockchain teknolojisini anlatacağım. Kripto paralar genellikle public blockchain kullanır. Kripto paralarda işlemler blockchaine bakılarak yapılır kime ne kadar para gelmiş ne kadar para yollamış gibi bütün bilgiler bu listede tutulur. Bu listeye bakılarak kişilerin bakiyesi hesaplanır. Public blockchain de blokların tutulduğu liste herkesle paylaşılır. Blokların olduğu liste herkeste yüklü olduğu için eğer birisi listede değişim yaparak kendi bakiyesini arttırmaya çalışırsa sistemdeki diğer listelerle uyuşmadığı için o işlem doğru sayılmaz. Bu sayede işlemler güvenli bir şekilde kayıt edilir. Public blockchaini Bitcoin, Ethereum, Litecoin vb kripto paralar kullanır. 

<img src="./blocktype.png" alt="type-image"  />

Avantajları:

* Herkes public blockchaine katılabilir.

* Sisteme katılan kişi sayısına göre güvenliği daha da artar.

* Şeffaf ve herkesin görebildiği bir sistemdir.

Dezavantajlar:

* İşlem hızında yavaşlık olur.

* Ne kadar kişi katılırsa sistem o kadar yavaşlar.


<div id="m3"></div>

## Blockchain Nasıl Çalışır

Kripto para sistemlerinde blockchain ana yapıdır. Her blok  yollanan para miktarını, yollayicinin ve alıcının public keylerini, timestamp, önceki hashi ve nonce adlı bir değeri içerisinde barındırır. Bu bilgilerin kullanılması veya değişmesi sonucunda bu bilgiler belirli bir kurala göre hashlenir. Ama güvenliği sağlamak için sadece içerideki bilginin hashlenmesi yetmez. Her kripto para sisteminde kullanıcının kendi cüzdanı vardır. Bu cüzdan için kullanıcıya private ve public olmak üzere iki tane key verilir. Public key private keyin işleme girmesi sonucu oluşur. Public key herkesle paylaşabildiğimiz keydir. Public key günümüzde kullandığımız IBAN bilgisi gibi, para yollarken veya para alırken işlemlerde gözüken alıcı veya yollayıcı bilgisidir. 

<img src="./blocks.png" alt="blockchain-image"  />

<br></br>

Private key ise sadece cüzdanın sahibi kişinin bilmesi gereken bir bilgidir. Kullanıcı yeni bir işlem yaptığında işlem bilgilerinin ve private keyin kullanılmasıyla yeni bir hash oluşturulur. Bu hashe signature denir. İşlemin güvenli olması için ilk hashlemenin yanında signature değeri de kontrol edilir. Göndericinin public keyi, işlem bilgileri ve signature değeri bir algortimayla birbirlerine uygun olup olmadıkları kontrol edilir. Eğer bu kontrolden de geçer ise bu bloktaki işlemler onay alır ve blok blockchaine eklenir.

Bu işlemler genellikle büyük bir işlem gücü ister bu yüzden kripto paralarda onay işleminin süresi kullanılan algoritmaya göre değişebilir. Örneğin bitcoinde işlem onay süresi ve blok yapım süresi toplamda ortalama 10 dakikadır. Bu işlemi yapan bilgisayarlar ise sistemine göre farklı bir şekilde ödüllendirilir. Örneğin bitcoin sisteminde hesaplamaları yapan kullanıcıya hem blok oluşturduğu için bir miktar bitcoin ile ödüllendirilir hem de yapılan işlem için bir işlem ücreti alır. 

---

Gün geçtikçe popülaritesi artan kripto paralarla işlem yapmak artık çok daha kolay. Eğer siz de bir kripto para cüzdanına sahip olmak istiyorsanız yapmanız gereken şey ilginizi çeken kripto paranın sitesine girip yeni bir cüzdan kayıdı oluşturmak. Ama eğer bunu yapmak size zor geliyor ve sadece kripto paralar üzerinden al sat işlemi yapmak istiyorsanız bu artık çok daha kolay. Btcturk ve binance gibi sitelerden kayıt oluşturup rahat bir şekilde işlem yapabilirsiniz. Son olarak eğer blockchainin nasıl çalıştığını modelli ve detaylı bir şekilde görmek istiyorsanız <https://andersbrownworth.com/blockchain/> bu siteye bakıp nasıl çalıştığını kendiniz de görebilirsiniz.

Kaynakça:

* <https://andersbrownworth.com/blockchain/>

* <https://data-flair.training/blogs/blockchain-tutorial/>

* <https://101blockchains.com/types-of-blockchain/>

* <https://www.btcturk.com/bilgi-platformu/blockchain-blokzinciri-teknolojisi-nedir/>
