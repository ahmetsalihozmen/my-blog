Merhaba bu yazımda sizlere gunluk hayatta reklam panolarında, broşürlerde ve aklımıza gelebilecek her yerde gördüğümüz QR kodlarının ne olduğunu ve nasıl bir yapıda hazırlandığını anlatacağım.

Aşağıdaki konu başlıklarına tıklayarak o konuyu anlattığım kısıma geçebilirsiniz.

[QR Kodu Nedir?](#m1)

[QR Kodun Yapısı Nasıldır?](#m2)

[QR Kodu Nasıl Kodlanır?](#m3)

<div id="m1"></div>

## QR Kodu Nedir?

Adını Türkçede Çabuk Tepki anlamına gelen Quick Response kelimelerinden alan QR kodları 2 boyutlu barkodlardır. Barkodlar sadece bir açıda okutulabilirken QR kodlarını istediğimiz açıda okutabiliriz. İlk kez 1994 de Japon bir otomobil firması tarafından dizayn edilmiştir. QR kodları bir veriyi verinin büyüklüğüne ve verinin türüne bağlı olarak görselleştirir. QR kodları çözümlendiği zaman kullanıcıyı internet adresine, e-posta adresine, telefon numarasına vb birçok bilgiye yönlendirebilir. 

<img src="./color-qrcode.png" alt="colorqr-image" width="650"/>

*(QR kod örnekleri)*

QR kodları gerekli parçaları olduktan sonra her renkte ve tasarımda yapılabilir. Ama çok renkli ve farklı tasarımdaki qr kodları iyi bir şekilde yapılamazsa qr kodunun okunması zorlaşabilir ya da veride bir kayıp olabilir. Bu yüzden en temel olan beyaz üzerine siyah ile yapılan qr kodları yaygın olarak kullanılır. QR kodunda bilgiler her hücrenin rengine göre 0 veya 1 olması sonucu tutulur.


<div id="m2"></div>

## QR Kodun Yapısı Nasıldır?

QR kodları 5 temel yapıdan oluşur.

1- <b>Versiyon bilgisi</b> oluşturulacak qr kodun hangi qr kod versiyonunu kullanacağını belirler. Günümüzde 40 tane qr kod versiyonu vardır. Genel olarak 1 ile 7 arasındaki versiyonlar kullanılır.

2- <b>Format bilgisi</b> qr koddaki hata düzeltme seviyesinin ne kadar büyük olacağını ve hangi mask patternın kullanılacağı bilgisini tutar.

3- Kodlanmış verinin olduğu bölgedir. Bu bölge kullanılan hata düzenleme seviyesine ve mask patterna göre değişir. Yazımın ilerleyen kısımlarında buranın nasıl oluştuğunu daha detaylı anlatacağım.

<img src="./qrcode.png" alt="qrcode-image" width="650" height="300"/>

*(QR kodunun yapısı)*

4- Gerekli desenleri üçe bölüyoruz

1. <b>Pozisyon belirleme desenleri</b> qr kodun üç köşesine konulur. Temel olarak QR kodun varlığını göstermeye yararlar. QR kodu okuyacak cihazın kodu doğru bir şekilde tanımasına ve kodun yazdırıldığı yönün belirlenmesini bu sayede kodun hızlı bir şekilde okunmasını sağlar. 

2. <b>Hizalama desenleri</b> kodun kavisli yerlerde de daha rahat okunmasını sağlar. Her qr kodda yoktur kodun büyüklüğü arttıkça eklenmesi kodun okunmasına yardımcı olur. Birden fazla eklenebilir.

3. <b>Zamanlama desenleri</b> sırasıyla siyah ve beyaz noktaların yerleştirilmesi sonucunda yapılır. Uzunluğu QR kodun ne kadar büyük olduğunu gösterir.

5- <b>Sessiz Bölge</b> optimal okunabilirliğe ulaşmak için QR kodunun etrafında bırakılması gereken boş alandır. Kodun çevresine genellikle 4 hücrelik bir boşluk bırakılarak oluşturulur.

Depolama alanı açısından qr kodları versiyonlarına göre değişirler. Versiyon ne kadar büyükse kodun alabileceği veri sayısı o kadar artar. 40. versiyonda maksimum 8 bit şeklinde 4296 karakter tutabilir.

Temel olarak qr kodları bu parçalardan oluşur. Bir sonraki bölümde bu bölümde detaylı olarak anlatmadığım kodlanmış verinin olduğu kısmı anlatacağım.  

<div id="m3"></div>

## QR Kodu Nasıl Kodlanır?

QR kodlarında kodlanmasında kullanılan algoritma aynıdır. Ama kullanılan formata ve versiyona göre kod değişebilir. Alttaki resimde de görebileceğimiz gibi veri sağ alltan kodlanmaya başlar ve belirli bir düzende devam eder. Temel olarak 4 parçaya bölüyoruz.

1- <b>Kodlama modu</b> buradaki seçilen desen qr kodun hangi tipte kodlandığını gösterir. Nümerik, alfanümerik ve byte tipinde kodlama bu tiplere örnektir.

2- <b>Mesaj uzunluğu</b> koddaki verinin ne kadar uzun olduğunu gösterir.

<img src="./encoding.png" alt="encoding-image" width="500" />

*(QR kodun kodlanma şekli)*

3- <b>Veri kısmı</b> istenilen verinin bulunduğu kısımdır yukarıdaki resimde her harfin 8 bitlik bir alan kapladığını ve veri bitene kadar belirli bir düzende kodlandığını görüyoruz. Veri kısmının sonuna verinin bittiğini belli edecek bir desen koyulur.

4- <b>Hata düzeltme</b> alanlarında Reed–Solomon hata düzeltmesi kullanılarak qr koda hasar gelse bile hasar çok büyük olmadığı sürece qr kodun okunabilmesini sağlar. Bu kısım format bilgisinin verildiği kısıma göre büyük ya da küçük olabilir. 

Bu kısımdan sonrq qr kodun kodlanması bitmiş olur. Artık okunmaya hazırdır. QR kodun okunması içinse qr kodu okuyucular kullanılır. Bu okuyucular kodun yapısını bilerek çok kısa sürede bir okuma gerçekleştirerek koddaki bilgiyi kullanıcıya ulaştırır. 

---

Günümüze kadar qr kodları genellikle bir siteye yönlendirilmek veya bir yazıyı tutmak için kullanılsa bile günümüzde kullanım alanları oldukça artmaya başladı. Bankacılık sektöründe ve marketlerdeki kasiyersiz kasalarda kullanımı yaygınlaşmaya başladı. Yakın bir gelecekte kullanımının çok daha fazla olacağına inanıyorum. 

<img src="./ahmetozmenqrcode.png" alt="ahmetqr-image"  />

Eğer siz de kendi qr kodlarınızı yapmak istiyorsanız bunun için [linkteki](https://www.the-qrcode-generator.com) siteye girip kendi qr kodlarınızı oluşturabilirsiniz.

Kaynakça:

- <https://www.qr-code-generator.com/qr-code-marketing/qr-codes-basics/>
- <https://en.wikipedia.org/wiki/QR_code>
- <https://www.unitag.io/qrcode>
