import axios from "axios";

let shuffle = unshuffled => unshuffled
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value);

const generateRandomImages = async (number) => {
    const {data} = await axios.get('https://picsum.photos/v2/list', {
        headers: {
            "Content-Type": "application/json"
        }
    });

    return shuffle(data).slice(0, number);
}

export default generateRandomImages;