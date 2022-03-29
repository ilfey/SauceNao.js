import {SauceNao} from '../src/index';

const sauce = new SauceNao();

const imgs: Array<string> = [
    'https://cdn.discordapp.com/attachments/748430818652717106/944089394728542208/IMG_20220218_103333.jpg',
]

sauce.find({url: imgs[0], api_key:''}).then((data) => {
    console.log(data.results);
})
