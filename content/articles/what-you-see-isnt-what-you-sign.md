**The biggest crypto thefts of the last two years didn't break any code. They broke the screen.**

On 21 February 2025, people at the exchange Bybit approved what looked like a routine transfer between their own wallets. Their screens showed the right address and the right amount. What they actually signed handed control of the wallet to attackers. About $1.5 billion left within minutes.

Nobody cracked a password. Nobody found a bug in a smart contract. The people signing simply saw one thing and signed another. I spent the last few weeks researching why this keeps happening, and what it would take to stop it. Here's what I found, in plain words.

## The $1.5 billion click

Bybit kept most of its Ethereum in a multisig: a wallet that needs several people to approve every move, each using a hardware wallet. On paper, that's about as safe as crypto gets.

The attackers didn't go after Bybit. They went after the website Bybit's team used to approve transactions. A developer's computer at the company behind that website was hacked, and the attackers slipped a few lines of code into it ([BlockSec](https://blocksec.com/blog/bybit-incident-a-web2-breach-enables-the-largest-crypto-hack-in-history), [NCC Group](https://www.nccgroup.com/research/in-depth-technical-analysis-of-the-bybit-hack/)). The code did nothing for anyone else. It waited for Bybit.

When Bybit's signers opened the page, it showed a normal transfer. Behind the scenes, it sent their hardware wallets a different instruction: replace the wallet's inner workings with the attacker's. Three people approved it. The wallet did exactly what it was told.

The smart contracts worked perfectly. The multisig worked perfectly. The weak point was the moment a human looked at a screen and pressed Approve.

## It isn't only big exchanges

The same gap shows up everywhere.

- **October 2024, Radiant Capital, about $50 million.** Malware sat on several developers' computers. The website and a separate safety check both showed normal transactions. The hardware wallets signed a transfer of ownership instead ([Radiant post-mortem](https://medium.com/@RadiantCapital/radiant-post-mortem-fecd6cd38081)).
- **Every day, ordinary people.** "Wallet drainer" scams trick people into signing something that looks harmless. In 2025 they took about $84 million from more than 106,000 victims, down from $494 million in 2024 ([Scam Sniffer](https://drops.scamsniffer.io/scam-sniffer-2025-crypto-phishing-losses-fall-83-to-84-million/)).

The most common trick is a **permit**: a signature that looks like logging in or claiming a reward, but actually lets someone else spend your tokens. Permits caused about 38% of 2025's biggest drainer losses. Nothing moves when you sign one, so it feels safe. The money leaves later.

## Why your wallet can't just tell you

A transaction is an instruction written for a machine, not a person. To your wallet it looks like a long string of letters and numbers.

So most of the time, people approve things they can't read. This is called **blind signing**. Imagine signing a contract written in a language you don't speak, translated for you by the person who handed it over. If they're honest, fine. If they're not, you'll never know.

Hardware wallets were supposed to fix this, with their own small screen that a hacked computer can't touch. But a tiny screen showing machine code doesn't help much, and at Bybit and Radiant, the signers approved what their devices showed them.

## The preview: running it before you sign

The best idea so far is **simulation**. Before you sign, your wallet runs the transaction as a dry run and tells you what would change: "You'll lose 100 USDC. You'll get 0.03 ETH." Wallets like Rabby and MetaMask already do this.

It's a big step forward, with two catches.

**It usually happens on someone else's computer.** Rabby sends your transaction, your address and the site you're on to its own server to simulate it. MetaMask's security alerts send your requests to a MetaMask server too ([MetaMask](https://support.metamask.io/configure/wallet/security-alerts/)). That's the same privacy problem I wrote about in [my last article](/articles/your-wallet-has-already-told-someone): someone else learns what you're about to do.

**It can be fooled.** In January 2025, a victim saw a preview of a tiny, harmless "claim". The scammers changed their contract right after the preview ran. The victim signed about 30 seconds later and lost 143 ETH ([Scam Sniffer](https://drops.scamsniffer.io/transaction-simulation-spoofing-a-new-threat-in-web3)). Even Blockaid, which builds simulation tools, says simulation isn't a security solution on its own ([Blockaid](https://blockaid.io/blog/bypasses-how-attackers-evade-transaction-simulation)).

A preview is a photo of the parcel. It doesn't promise that what arrives is what was in the photo.

## Turning the preview into a promise

Some blockchains already go further. Instead of just showing you what should happen, they make sure nothing else can.

- **Stacks** lets your wallet attach a list of expected transfers to a transaction. If anything else moves, the whole thing fails ([Stacks docs](https://docs.stacks.co/post-conditions/implementation)).
- **Cardano** is built so that a transaction names exactly what goes in and what comes out. You know the result before you send it ([Cardano docs](https://developers.cardano.org/docs/developers/curriculum/fundamentals/core-concepts/transactions/)).
- **Ethereum** has a draft proposal, EIP-7906, that would let wallets attach checks like these to any transaction ([EIP-7906](https://eips.ethereum.org/EIPS/eip-7906)).
- **Linea**, an Ethereum network, now drops transactions that break an app's safety rules before they ever land in a block ([Linea docs](https://docs.linea.build/network/how-to/write-and-deploy-assertions.md)).

This is the difference between a photo of the parcel and checking the parcel at the door before you sign for it.

## A screen the app can't draw

Even a perfect preview is useless if a hacked app can draw a fake one. So where the preview appears matters as much as what it says.

You might think people could learn to spot the real screen. They can't, reliably. In 2007, researchers tested a bank login that showed each customer their own secret picture, so they'd know the page was real. The researchers quietly removed the pictures. Out of 60 participants who reached that step, 58 typed their password anyway ([study summary](https://it.slashdot.org/story/07/02/05/1323243/study-finds-bank-of-america-sitekey-is-flawed)).

Scammers know this. In March 2026, a fake game website drew a copy of a popular wallet's popup right inside the page to steal passwords ([Malwarebytes](https://www.malwarebytes.com/blog/scams/2026/03/fake-pudgy-world-site-steals-your-crypto-passwords)).

The fix is structural. Think of your browser asking "Allow this site to use your camera?" A website can't draw that box. It comes from the browser itself. Signing needs the same: a screen that only the system can draw, and that apps can't copy or cover. A hardware wallet's own screen is the strongest version of this, because even a hacked computer can't reach it.

## Speaking human: clear signing

The last piece is making that screen readable. **Clear signing** turns machine instructions into sentences like "Swap 100 USDC for at least 0.03 ETH on Uniswap".

It works through a standard called ERC-7730. Each app publishes a small file that explains, in plain words, what each of its functions does. In May 2026 the Ethereum Foundation took over looking after it, with support from wallets including MetaMask, Trezor and Ledger, who started it ([Ethereum Foundation](https://blog.ethereum.org/2026/05/12/clear-signing-announcement)).

Clear signing tells you what an action *means*. Simulation tells you what it will *do*. The safest screen shows both, and warns you loudly when they disagree: "This says swap, but 10,000 USDC is about to leave your wallet."

## Is this even the real app?

Bybit's problem started with a swapped website. One defence is **content addressing**: giving a piece of software a fingerprint based on its exact contents. Change one byte and the fingerprint changes. Uniswap has published one of these fingerprints for every release of its app since 2020 ([Uniswap](https://blog.uniswap.org/uniswap-interface-ipfs)).

A fingerprint proves you have the real code, not that the people who wrote it are honest. A scammer can fingerprint their own scam just as easily. So it's one layer, not the whole answer.

There's a nice surprise here, too. Most smart contracts already carry a fingerprint of their own instruction manual inside their code, added automatically when they're built ([Solidity docs](https://docs.soliditylang.org/en/latest/metadata.html)). A wallet can use it to make sure it's reading the contract the right way.

## What I'm building

This research shapes [Solizone](https://www.solizone.co), my independent project that lets developers write Solidity smart contracts on [Logos](https://logos.co). Solizone apps run inside Basecamp, the Logos desktop app, on your own computer.

Logos already has a careful signing system. Apps can ask for a signature, but only one dedicated approval app can approve it, and the keys never reach the app that asked. It also works with hardware wallets. What it doesn't have yet is a preview. That's what I'm adding for Solizone:

- **A preview from your own computer.** Every transaction runs as a dry run on your own copy of the chain, so nobody else learns what you're about to do.
- **Previews that expire.** If the chain moves on before you approve, the preview refreshes. A stale one can't be approved.
- **Previews that hold.** Solizone checks that what lands on the chain matches what you approved. If the result changed, the transaction is dropped instead of sent.
- **A link from each contract to its real app**, so a swapped app gets flagged.

I've also proposed a single approval screen for Basecamp itself, drawn by Basecamp rather than any app, that every chain on Logos could share.

Logos calls this approach **PriFi**, short for private finance: protecting every step of a transaction, not just the moment money moves. Signing is the step where most money has been lost.

## The takeaway

Blockchains made it very hard to cheat once a transaction is signed. They did much less to make sure you knew what you were signing.

If you use a crypto wallet today:

- **Read the preview every time.** If a "claim" or "login" shows no change to your balance, ask why it needs a signature at all.
- **Treat "unlimited" and "never expires" as alarms.** Most drainer permits ask for exactly that.
- **Use a hardware wallet for anything significant**, ideally one that shows readable text, not just numbers.
- **Clean up old permissions.** Apps you stopped using may still be allowed to spend your tokens. Approval-checking tools can show and remove them.

What you see should be what you sign. That shouldn't depend on you spotting a fake. It should come from how the system is built.

---

## Sources

- [BlockSec: Bybit incident, a Web2 breach enables the largest crypto hack in history](https://blocksec.com/blog/bybit-incident-a-web2-breach-enables-the-largest-crypto-hack-in-history)
- [NCC Group: In-depth technical analysis of the Bybit hack](https://www.nccgroup.com/research/in-depth-technical-analysis-of-the-bybit-hack/)
- [Radiant Capital post-mortem](https://medium.com/@RadiantCapital/radiant-post-mortem-fecd6cd38081)
- [Scam Sniffer: 2025 crypto phishing report](https://drops.scamsniffer.io/scam-sniffer-2025-crypto-phishing-losses-fall-83-to-84-million/)
- [Scam Sniffer: Transaction simulation spoofing](https://drops.scamsniffer.io/transaction-simulation-spoofing-a-new-threat-in-web3)
- [Blockaid: How attackers evade transaction simulation](https://blockaid.io/blog/bypasses-how-attackers-evade-transaction-simulation)
- [MetaMask: Security alerts](https://support.metamask.io/configure/wallet/security-alerts/)
- [Stacks docs: Post-conditions](https://docs.stacks.co/post-conditions/implementation)
- [Cardano developers: Transactions](https://developers.cardano.org/docs/developers/curriculum/fundamentals/core-concepts/transactions/)
- [EIP-7906: Transaction assertions via state diff opcode](https://eips.ethereum.org/EIPS/eip-7906)
- [Linea docs: Write and deploy assertions](https://docs.linea.build/network/how-to/write-and-deploy-assertions.md)
- [Slashdot: Study finds Bank of America SiteKey is flawed](https://it.slashdot.org/story/07/02/05/1323243/study-finds-bank-of-america-sitekey-is-flawed)
- [Malwarebytes: Fake Pudgy World site steals your crypto passwords](https://www.malwarebytes.com/blog/scams/2026/03/fake-pudgy-world-site-steals-your-crypto-passwords)
- [Ethereum Foundation: Clear signing announcement](https://blog.ethereum.org/2026/05/12/clear-signing-announcement)
- [Uniswap: Uniswap interface + IPFS](https://blog.uniswap.org/uniswap-interface-ipfs)
- [IPFS blog: The Bybit hack and IPFS](https://blog.ipfs.tech/2025-could-ipfs-prevent-bybit-hack/)
- [Solidity docs: Contract metadata](https://docs.soliditylang.org/en/latest/metadata.html)