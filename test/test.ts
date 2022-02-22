import SauceNao from '../src/index';

const sauce = new SauceNao({api_key: ''});

const imgs: Array<string> = [
    'https://cdn.discordapp.com/attachments/748430818652717106/944140031478595644/1.png',
    'https://cdn.discordapp.com/attachments/748430818652717106/944089394728542208/IMG_20220218_103333.jpg',
    'https://cdn.discordapp.com/attachments/937025118822092881/943764775945519174/pIgVP5z32ho.jpg'
]

sauce.find({url: imgs[0]}).then((data) => {
    console.log(data.header.status)
})
sauce.find({url: imgs[1]}).then((data) => {
    console.log(data.header.status)
})
sauce.find({url: imgs[2]}).then((data) => {
    console.log(data.header.status)
})