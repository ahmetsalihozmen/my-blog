
Hello, in this article, I will explain what QR codes are, which we see in our daily lives on billboards, brochures, and almost everywhere, and how they are structured.

You can click on the following topics to jump to the section where I explain them:

[What is a QR Code?](#m1)

[How is a QR Code Structured?](#m2)

[How is a QR Code Encoded?](#m3)

<div id="m1"></div>

## What is a QR Code?

QR codes, which stand for Quick Response, are 2D barcodes. While barcodes can only be read in one direction, QR codes can be scanned from any angle. They were first designed by a Japanese automobile company in 1994. QR codes visualize data based on the size and type of the data. When decoded, QR codes can direct the user to a web address, email address, phone number, and many other types of information.

<img src="./color-qrcode.png" alt="colorqr-image" width="650"/>

*(Examples of QR codes)*

As long as the necessary parts are present, QR codes can be made in any color and design. However, if multi-colored and uniquely designed QR codes are not made correctly, they may be difficult to read or result in data loss. Therefore, the most commonly used QR codes are black on a white background. In a QR code, information is stored based on whether each cell is black (1) or white (0).

<div id="m2"></div>

## How is a QR Code Structured?

QR codes consist of five basic components.

1- <b>Version Information</b> determines which version of the QR code will be used. There are 40 QR code versions, with versions 1 to 7 being the most commonly used.

2- <b>Format Information</b> contains information about the error correction level and which mask pattern will be used.

3- The Encoded Data Area changes based on the error correction level and mask pattern used. I will explain how this area is formed in more detail later in this article.

<img src="./qrcode.png" alt="qrcode-image" width="650" height="300"/>

*(Structure of a QR code)*

4- We divide the necessary patterns into three parts:

1. <b>Position Detection Patterns</b> are placed in three corners of the QR code. They help the device reading the QR code recognize it correctly and quickly determine the orientation.

2. <b>Alignment Patterns</b> help the QR code be read more easily, even on curved surfaces. These are not present in every QR code but are added as the code size increases to aid readability. Multiple alignment patterns can be included.

3. <b>Timing Patterns</b> consist of alternating black and white modules. The length of the timing pattern indicates the size of the QR code.

5- <b>The Quiet Zone</b> is the empty space around the QR code to ensure optimal readability. It usually consists of a 4-cell-wide margin around the code.

The storage capacity of QR codes varies based on their version. The larger the version, the more data the code can store. A version 40 QR code can hold up to 4296 characters in 8-bit format.

In the next section, I will detail the encoding process of the data area, which I did not explain in depth in this section.

<div id="m3"></div>

## How is a QR Code Encoded?

The algorithm used for encoding QR codes is consistent, but the code itself may vary depending on the format and version used. As seen in the image below, the data is encoded starting from the bottom right and continues in a specific pattern. We break it down into four main parts:

1- <b>Encoding Mode</b>: This pattern indicates the type of data encoded, such as numeric, alphanumeric, or byte.

2- <b>Message Length</b>: This shows the length of the data encoded.

<img src="./encoding.png" alt="encoding-image" width="500" />

*(Encoding of a QR code)*

3- <b>Data Area</b>: This part contains the desired data. In the image above, we see that each character occupies 8 bits and is encoded in a specific pattern until the data ends. A pattern is added at the end to indicate the end of the data.

4- <b>Error Correction</b>: Reed–Solomon error correction is used in this area, allowing the QR code to be read even if it is damaged, as long as the damage is not too extensive. The size of this part can vary based on the format information.

After this step, the QR code encoding is complete and ready to be scanned. QR code readers quickly read the code and deliver the encoded information to the user.

---

Although QR codes have traditionally been used to direct users to websites or store text, their applications have significantly expanded. They are increasingly used in the banking sector and cashier-less checkout systems in markets. I believe that their usage will continue to grow rapidly in the near future.

<img src="./ahmetozmenqrcode.png" alt="ahmetqr-image"  />

If you want to create your own QR codes, you can visit this [link](https://www.the-qrcode-generator.com) to generate your QR codes.

Source:

- <https://www.qr-code-generator.com/qr-code-marketing/qr-codes-basics/>
- <https://en.wikipedia.org/wiki/QR_code>
- <https://www.unitag.io/qrcode>
