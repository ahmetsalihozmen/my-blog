Hello, in this article, I will explain blockchain technology, which plays a fundamental role in the functioning of cryptocurrencies that we have been hearing a lot about lately. Since blockchain is not used in just one field, I will generally discuss its use in cryptocurrency systems in this article.

You can click on the following topics to jump to the section where I explain them:

[History of Blockchain][#m1]

[Public Blockchain][#m2]

[How Blockchain Works][#m3]

<div id="m1"></div>

## History of Blockchain

The foundation of blockchain technology was laid by cryptography experts Sturat Haber and Scott Stornetta in 1991. In these studies, the information to be stored was first hashed to create a block. These blocks are kept with a timestamp, a piece of data that records when the information was recorded. As a result of keeping these blocks in a list, the data is stored.
<br></br>

<img src="./bitcoin.png" alt="bitcoin-image"/>

<br></br>
On October 31, 2008, a group or individual named Satoshi Nakamoto published a paper titled "Bitcoin: A Peer-to-Peer Electronic Cash System." Today, money transfer transactions are carried out through a traditional method where a third institution is involved and approves the transactions. This paper described a system where transactions could be conducted more securely, without a central authority, anonymously, and without involving a third institution. This system was fundamentally built on blockchain technology. The currency used within this system is Bitcoin, the first cryptocurrency most of us have heard of.

<div id="m2"></div>

## Public Blockchain

A public blockchain is a type of blockchain. As I mentioned at the beginning of my article, I will discuss the blockchain technology used in cryptocurrencies. Cryptocurrencies generally use public blockchains. In cryptocurrencies, transactions are carried out by looking at the blockchain, where all information such as how much money someone has sent and received is kept. By looking at this list, the balance of individuals is calculated. In a public blockchain, the list of blocks is shared with everyone. Since the list with blocks is stored by everyone, if someone tries to alter the list to increase their balance, it will be deemed incorrect because it does not match the other lists in the system. Thus, transactions are recorded securely. Bitcoin, Ethereum, Litecoin, and similar cryptocurrencies use public blockchain.

<img src="./blocktype.png" alt="type-image" />
Advantages:

* Everyone can participate in the public blockchain.
* The security increases with the number of participants.
* It is a transparent system that everyone can see.

Disadvantages:

* The transaction speed can be slow.
* The system slows down as more people join.

<div id="m3"></div>

## How Blockchain Works

In cryptocurrency systems, blockchain is the main structure. Each block contains the amount of money sent, the public keys of the sender and receiver, a timestamp, the previous hash, and a value called nonce. These pieces of information are hashed according to a certain rule when used or changed. However, to ensure security, hashing the information inside is not enough. Each user in a cryptocurrency system has their own wallet. For this wallet, the user is given two keys: a private key and a public key. The public key is generated as a result of processing the private key. The public key is the key we can share with everyone. It functions similarly to the IBAN information we use today, appearing as the receiver or sender information during transactions.

<img src="./blocks.png" alt="blockchain-image" />

<br></br>

The private key, on the other hand, is information that only the wallet owner should know. When the user creates a new transaction, a new hash is generated using the transaction information and the private key. This hash is called a signature. To ensure the security of the transaction, besides the initial hashing, the signature value is also checked. The sender's public key, transaction information, and signature value are checked by an algorithm to see if they match each other. If this check is passed, the transactions in this block are approved, and the block is added to the blockchain.

These processes generally require significant computational power, so the confirmation time of transactions in cryptocurrencies can vary depending on the algorithm used. For example, in Bitcoin, the total time for transaction confirmation and block creation is on average 10 minutes. The computers performing these calculations are rewarded differently depending on the system. For example, in the Bitcoin system, the user performing the calculations is rewarded with a certain amount of Bitcoin for creating a block and also receives a transaction fee for the performed transaction.

---

With the increasing popularity of cryptocurrencies, making transactions with them has become much easier. If you want to own a cryptocurrency wallet, all you need to do is visit the site of the cryptocurrency that interests you and create a new wallet. However, if this seems difficult to you and you only want to trade cryptocurrencies, this is now much easier. You can easily create an account and trade on sites like Coinbase and Binance. Finally, if you want to see how blockchain works in a detailed and modeled way, you can check out this site: [Anders Brownworth Blockchain Demo](https://andersbrownworth.com/blockchain).

Source:

* <https://andersbrownworth.com/blockchain/>

* <https://data-flair.training/blogs/blockchain-tutorial/>

* <https://101blockchains.com/types-of-blockchain/>

* <https://www.btcturk.com/bilgi-platformu/blockchain-blokzinciri-teknolojisi-nedir/>