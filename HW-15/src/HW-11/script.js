export default async function getRandomChinese(length) {
    let result = ' ';
    let count = 0;
    while (count < length) {
        const newPromise = new Promise((resolve) => {
            setTimeout(function() {
                resolve()
            }, length * 50 )
        })
            count ++;
            const newData = Date.now().toString();
            const lastNumbers = newData.slice(-5);
            const chineseNumbers = String.fromCharCode(lastNumbers);
            result += chineseNumbers;
            await newPromise;    
    }
      return result;
}

// getRandomChinese(4).then((resp => console.log(resp)));