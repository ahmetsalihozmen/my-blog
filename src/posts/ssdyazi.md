Merhaba bu yazımda sizlere her gün kullandığımız telefon, bilgisayar gibi teknolojik aletlerin depolama birimlerinden olan HDD ve SSD komponentlerinin farkını ve yüzeysel olarak bu depolama birimlerinin çalışma mantığını anlatmaya çalışacağım.

Aşağıdaki konu başlıklarına tıklayarak o konuyu anlattığım yere gidebilirsin.

[Depolama Birimlerinin İşlevi Nedir](#m1)

[HDD Nedir ve Nasıl Çalışır](#m2)

[SSD Nedir ve Nasıl Çalışır](#m3)

[HDD ve SSD Arasındaki Farklar](#m4)

<div id="m1"></div>

## Depolama Birimlerinin İşlevi Nedir?
Bu yazımda anlatacağım HDD ve SSD komponentleri birer depolama birimidir. Depolama birimlerinin ne işe yaradığını anlamak için çok basit olarak şu temel prensibi bilmemiz lazım. Bilgisayarlarda, telefonlarda vb teknolojik aletlerin içindeki programlar, fotoğraflar, videolar, oyunlar ve  aklınıza gelebilecek geriye kalan her şey sadece 0 ve 1 sayılarından oluşur. Buna en kolay örnek olarak teknolojik cihazlarımızdaki sakladığımız fotoğrafları gösterebiliriz. Bildiğimiz gibi fotoğraflar piksellerin birleşmesinden oluşur. Bilgisayarlarımız da bir fotoğraftaki bütün pikselleri 0 ve 1 sayılarından oluşan bir dizi kullanarak saklar.
<img src="./matrix.png" alt="matrix-image" width="650"/>

*(Bu örnekte RGB bir fotoğrafın içindeki bir pikselin 0 ve 1 değerleri gözüküyor)*

HDD ve SSD birimleri ise bu fotoğrafları saklamak için bizim 0 ve 1 lerden oluşan dizimizdeki 0 ve 1 leri tek tek kendi yöntemleriyle içlerine kaydederler. Bu sayede 0 ve 1 lerden oluşan fotoğrafımız güvenli bir şekilde depolama birimimizde saklanır. 


<br></br>
<div id="m2"></div>

## HDD Nedir ve Nasil Calisir?

HDD yani uzun haliyle Hard Disk Drive piyasayada olmadığı zamanlarda gerekli bilgiler punched card adı verilen delikli kartlarda tutuluyordu. IBM şirketi 1956 yılında delikli kartların yerini alması için ilk hard diski olan IBM 350 adlı 3.75 MB alanlık HDD yi IBM 305 RAMAC adlı bilgisayarında kullandı. O zamandan bu zamana punched card yerini HDD ler almaya başladı.
<img src="./harddisk.jpg" alt="hard-image" width="650" />
HDD lerin bilgiyi tutmasını sağlayan birimleri mikroskobik mıknatıslanmış metal parçalardır. Günümüzde HDD lerde N (1) ve S (0) yönü olmak üzere iki farklı yön halinde mıktanıslanır. Bu yüzden HDD ler çok hassas bir şekilde kullanılmalı ve taşınmalıdır çünkü en küçük elektromanyetik değişimde diskin üzerindeki manyetik yönler değişebilir bu da bilgilerimizin kaybolmasına sebep olur. Peki HDD bu mikroskobik mıknatıslanmış parçaları nasıl okuyabiliyor?
 <img src="./readhead.webp" alt="head-image" width="650"/>

 Yukarıdaki fotoğrafta gördüğümüz model HDD içindeki diski okuyan iğnenin çok yakınlaştırılmış halinin bir örneği. Bu iğne okuma ve yazma ucu olarak 2 farklı parçadan oluşur. Ne zaman depolama biriminden bir şeye ulaşmak istersek iğnenin okuma ucu bize çok hızlı bir şekilde diskin içindeki manyetik değerleri okuyup bunları 0 ve 1 olarak geri gönderir. Yazma işlemleri için üzerinde bobin olan uç kullanılır yazma ucuna gelen sinyaller sayesinde çalışır. Eğer 0 olan bir bit 1 olacak ise bobinden oluşan manyetik alan S olan yönü N yapar. Eğer değişecek bit öncekiyle aynı ise manyetik alan yazılacak bit ile aynı yönde olduğu için bir değişim olmaz. Bu işlemler yapılırken disk büyük bir hızda dönmeye devam eder bu sayede veri hızlı bir şekilde okunur veya yazılır.
<br></br>
<div id="m3"></div>

## SSD Nedir ve Nasil Calisir?

SSD yani Solid State Drive ilk olarak 1991 de eski adıyla SunDisk yeni adıyla SanDisk adlı markayla birlikte piyasaya sürüldü. Bu SSD IBM in ThinkPad adlı laptopunda kullanıldı ve alanı sadece 20 MB boyutundaydı. 

<img src="./hucre.png" alt="head-image" width="650"/>

SSD lerin çalışma mantığı HDD lerden çok daha farklı. HDD de bilgiler elektromanyetik parçalarda tutulurken SSD lerde HDD deki parçalardan çok daha küçük olan yarıiletken hücrelerde tutulur. Bu yarıiletken hücreler SSD nin tipine göre şekil değiştirir. SLC (Single Level Cell) MLC (Multi Level Cell) ve TLC (Triple Level Cell) olmak üzere SSD çeşitleri vardır. SLC SSD ler bir hücresinde sadece 1 bit tutabilirler bu yüzden depolama alanları daha azdır ama çok daha hızlıdır ve bilgi daha güvenli bir şekilde korunur. MLC ve TLC de ise bir hücrede sırasıyla 2 ve 3 bit tutulur ve SLC hücrelere göre daha yavaş çalışırlar. Hücredeki bit sayısı arttıkça SSD daha yavaş çalışır ama depolama alanı çok daha fazla olur. O yüzden günlük hayatta kullandığımız bilgisayarlar ve telefonlarımızda ekonomik ve yüksek alan kapasitesi olduğu için MLC ve TLC SSD ler kullanılır. Peki bu hücrelerde bitler nasıl tutuluyor?

<img src="./cell.png" alt="head-image" width="650" height="500"/>
<br></br>

Yukarıda gördüğümüz fotoğraf bir TLC SSD hücresinin içini temsil ediyor. 3 biti saklamak için 8 farklı seviye kullanılıyor. Bu 8 seviyenin doluluk oranına göre bitler SSD ye kaydediliyor. SSD yazma işlemini yapacağı zaman istenilen bitlerin temsil edilmesi için hücre elektronları istenilen seviyeye görer hapsediyor. Örneğin yukarıdaki fotoğrafta 5 seviyeye elektron hapsedilmiş bu yüzden o hücrenin değeri 011 olmuş. Hapsedilen elektronlar biz istediğimiz sürece orada duruyor ve bu sayede bilgilerimiz kaydediliyor. Eğer biz telefonumuzdan ya da bilgisayarımızdan SSD de duran bir uygulamayı fotoğrafı silersek uygulamanın bulunduğu SSD hücrelerindeki elektronlar serbest bırakılıyor. Bu işlemlerin hepsi neredeyse atom seviyesinde olduğu için ve mekanik hiçbir işlem olmadığı için çok hızlı ve sessiz bir şekilde çalışır.
<br></br>
<div id="m4"></div>

## HDD ve SSD Arasındaki Fark Nedir?

Artık SSD ve HDD nin çalışma mantığını öğrendiğimize göre aralarındaki farklardan ve hangisini nerede kullanmanın mantıklı olacağından bahsedebiliriz.

- HDD ve SSD çalışma hızlarını kıyaslayacak olursak SSD HDD den daha hızlı bir parça. Çünkü içinde hiçbir mekanik bir parça yok ve yapılan işlemlerin hepsi elektron seviyesinde yapılıyor. HDD ise mekanik olarak disk ve okuma yazma ucu içerdiği için SSD ye oranla yavaş kalıyor.
- HDD ler SSD lere oranla daha sesli çalışıyorlar sebebi yine HDD lerin mekanik parçalar içermesinden dolayı kaynaklanıyor.
- HDD ler SSD lere oranla daha ucuzlar. 


<img src="./vs.jpg" alt="head-image" width="650"/>

Bu farkların sonucunda hangisinin daha iyi ya da daha kötü olduğu değil de hangisin nerede daha işe yarayacağını söylemek daha mantıklı olur. Çünkü SSD lerin çok daha verimli olduğu ortada ama işin içine fiyat girince herkesin seçimi kendi bütçesine bağlı oluyor. Eğer bilgisayarınızı genellikle fotoğraf video gibi dosyalar kaydetmek için ve düzenli olarak bilgisayar ile işiniz yoksa HDD sizin için doğru tercih olabilir. Çünkü  bütçenizi çok yüksek tutmak istemiyorsanız ve büyük bir performans beklentiniz yoksa HDD sizin için en mantıklısı. Çünkü bu yazıyı yazdığım sene 2020 de 1 TB HDD 256 GB SSD ile aynı fiyatta bu yüzden HDD almak bütçenize daha uygun olur. Ama bunun haricinde bilgisayarı düzenli olarak kullanıyorsanız kesinlikle SSD kullanmanızı tavsiye ederim. Çünkü HDD ler günlük hayatta işlerinizi çok yavaşlatıyor ve SSD lerin hızına hiçbir türlü yetişemiyor. Fiyat olarak SSD hala HDD den pahalı olmasına rağmen git gide SSD ler ucuzlamaya başlıyor ve kullanım sayıları artıyor. SSD nin HDD yerine geçmesi aynı zamanında HDD nin punch card yerine geçmesi gibi bir olay. Umarım çok yakın zamanda SSD lerin de yerine geçecek ve onlardan çok daha hızlı olacak depolama birimlerini günlük hayatımızda kullanırız. 

Umarım sizin için bilgilendirici bir yazı olmuştur. Eğer yazımda yanlış bir bilgi gördüyseniz veya aklınıza takılan bir şey varsa benimle mail yoluyla iletişime geçmekten çekinmeyin. Mail adresime yukarıdan ulaşabilirsiniz.

Kaynakça:

- [https://www.youtube.com/watch?v=5Mh3o886qpg&ab_channel=BranchEducation]
- [https://www.youtube.com/watch?v=NtPc0jI21i0&ab_channel=SeagateTechnology]
- [https://www.youtube.com/watch?v=wteUW2sL7bc&t=88s&ab_channel=TED-Ed]