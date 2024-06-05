Hello, in this article, I will talk about the Enigma machine, which holds a very important place in the history of encryption. Even Alan Turing tried to break its codes, and documentaries and movies have been made about it.

Click on the following topics to jump to the respective section.

[History and Structure of Enigma](#m1)

[How Enigma Works](#m2)

<div id="m1"></div>


## History and Structure of Enigma

Enigma is an encryption machine used to encode a message and decode messages encoded by itself when operated with the correct settings. Enigma was first produced in Germany at the end of World War I by Arthur Scherbius. Initially, it was mainly used in the private sector to securely transmit information. The first versions produced had only 3 or 4 rotors.

<img src="./enigma.jpg" alt="enigma-image" />

<br/>
Over time, with the outbreak of World War II, the German army decided to use Enigma for secret communications within the military. To make the rotor-only version of Enigma more secure, a component with 26 sockets was added to the bottom of Enigma, one for each letter, to change the encryption of letters. This made breaking the codes even more difficult. As a result, during World War II, the United States and the United Kingdom jointly gathered the best scientists, mathematicians, and engineers in the field to develop a system to break Enigma's codes. This team, with the help of Alan Turing and Gordon Welchman, used a machine called "Bombe" to quickly find Enigma's daily settings.

<div id="m2"></div>
<br/>


## How Enigma Works

The use of Enigma to encrypt a message or to decrypt an encrypted message is the same. For Enigma to work correctly, both the person encrypting the message and the person wanting to decrypt this encrypted message must set the machine to the same settings. Once the machine is set to the correct settings, you enter the text you want to encrypt, and a text of the same length as the original text is produced. When you want to decrypt a message, you enter the encrypted text, and you get the original text in the end. The basic principle of the machine is to convert one letter to another. That is, encryption is not done by the word but specifically by the letter. Each letter is converted to a different letter based on the settings. Enigma operates based on three main settings.

* The value of the rotors

* The order of the rotors

* The configuration of the sockets

<h4>1-Value of the Rotors:</h4>

Enigma typically has 3 rotors. Each rotor has a value. These values are numbers between 1 and 26. Sometimes letters from A to Z are used instead of these numbers, but this doesn't create a difference in the system because the German alphabet has 26 letters. To make it easier to understand, I will use numerical values in the explanation. Let's assume the values of our rotors are (5 12 24). Every time a value is entered, Enigma will increment the value of the rightmost rotor by 1. So, if a letter is typed into the machine, the values will change to (5 12 25), and if another letter is typed, the values will change to (5 13 0), similar to the odometer in cars. The values of the letters always change based on these three values. Even if the same letter is entered three times in a row, the encrypted letters will be different. In this way, 17,576 different value configurations can be set.

<img src="./enigma-rotor.png" alt="enigma-rotor-image" width=600 height=400 />

*(A rotor using letter values instead of numbers)*

<br/>
<h4>2-Order of the Rotors:</h4>

Each rotor is not identical. The three rotors have different internal structures. There are three types of rotors: I, II, and III. These rotors can be interchanged among each other. For example, the rotors can be arranged in the order (I II III) or (II III I). This allows for 6 different configurations of the rotors. When combining the values and the order of the rotors, the machine can be set in 105,456 different ways. When we see this number, it might seem that a group of people could find the correct setting within a day by trying each setting. However, the next level of setting greatly increases the complexity of Enigma.

<h4>3-Configuration of the Sockets:</h4>

<br/>
<img src="./enigma-plugboard.jpg" alt="enigma-plugboard-image" width=600  />


*(The part with the sockets)*

As you can see in the image above, Enigma has 26 sockets. In the picture, the letter A is connected to J, and the letter S is connected to O. As a result of these connections, the values of the letters are swapped with each other's values. According to the example in the picture, if the user presses the letter A, it takes the value of the letter J. Similarly, pressing J will take the value of A. In the picture, we only see two pairs, but during the war, the German army increased the complexity by using 10 pairs. Finally, when all values are included, the machine can be set in 158,962,555,217,826,360,000 ≈ 2^67 different ways. This makes it highly unlikely to find the setting by trial and error.

---

As you can see, Enigma was a very good encryption machine for its time, but this does not change the fact that it had major issues. The biggest problem with Enigma was that both parties needed to set the same settings. The settings were provided as a monthly list indicating which setting to use on which day to the departments using the machine. However, if this list fell into the hands of an enemy through an agent or any other means, it created a significant issue for the side using the machine. Therefore, delivering the list securely required significant effort and attention.



*(A real settings list)*

Overall, Enigma held an important place in both the private sector and the military for its time. If you are interested in such topics, I recommend watching the movie "The Imitation Game," which talks about Alan Turing and Enigma. If you want to use Enigma yourself, you can try the Enigma simulation from the link.

Source:

* <https://en.wikipedia.org/wiki/Enigma_machine>

*  <https://www.youtube.com/watch?v=d2NWPG2gB_A&t=303s&ab_channel=Computerphile>