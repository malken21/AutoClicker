const selector = 'dev#test'; // ここにクリックしたい要素のセレクタを記入
const wait = 5000; // クリックするまでの待機時間 単位はミリ秒

// ページが読み込まれたら実行
window.addEventListener('load', () => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(async (element) => {
        if (element) {
            await sleep(5000); // 待機
            element.click(); // 要素をクリック
            console.log(`${selector} click !`);
        }
    })
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}