function calculateResult() {
    let scores = { "ดิน": 0, "น้ำ": 0, "ลม": 0, "ไฟ": 0 };

    for (let i = 1; i <= 8; i++) {
        let answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            scores[answer.value]++;
        }
    }

    let highestElement = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    let elementText = document.getElementById("elementText");
    let elementImage = document.getElementById("elementImage");

    let descriptions = {
        "ดิน": "คุณเป็นคนมั่นคง น่าเชื่อถือ และให้ความสำคัญกับความเป็นจริง",
        "น้ำ": "คุณเป็นคนอ่อนโยน อ่อนไหว และมีความเข้าใจผู้อื่นสูง",
        "ลม": "คุณเป็นคนที่รักอิสระ คิดสร้างสรรค์ และปรับตัวเก่ง",
        "ไฟ": "คุณเป็นคนมีพลังงานสูง มุ่งมั่น และกล้าตัดสินใจ"
    };

    let images = {
        "ดิน": "images/earth.jpg",
        "น้ำ": "images/water.jpg",
        "ลม": "images/air.jpg",
        "ไฟ": "images/fire.jpg"
    };

    elementText.innerText = descriptions[highestElement];
    elementImage.src = images[highestElement];

    document.getElementById("result").classList.remove("hidden");
}
