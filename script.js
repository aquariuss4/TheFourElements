function calculateResult() {
    let scores = { "ดิน": 0, "น้ำ": 0, "ลม": 0, "ไฟ": 0 };
    let form = document.getElementById("quizForm");

    // นับคะแนนแต่ละธาตุ
    let answers = form.querySelectorAll("input[type='radio']:checked");
    answers.forEach((ans) => {
        scores[ans.value]++;
    });

    // หาธาตุที่มีคะแนนสูงสุด
    let maxElement = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    // แสดงผลลัพธ์
    let resultText = document.getElementById("elementText");
    let resultImage = document.getElementById("elementImage");

    let elementData = {
        "ดิน": { text: "คุณเป็นคนมั่นคง อดทน และมีความรับผิดชอบสูง", image: "images/earth.jpg" },
        "น้ำ": { text: "คุณอ่อนโยน เข้าใจผู้อื่น และปรับตัวเก่ง", image: "images/water.jpg" },
        "ลม": { text: "คุณเป็นคนอิสระ มีความคิดสร้างสรรค์ และชอบเรียนรู้สิ่งใหม่ ๆ", image: "images/air.jpg" },
        "ไฟ": { text: "คุณกระตือรือร้น มีพลังงานสูง และเต็มไปด้วยความมุ่งมั่น", image: "images/fire.jpg" }
    };

    resultText.textContent = elementData[maxElement].text;
    resultImage.src = elementData[maxElement].image;

    document.getElementById("result").classList.remove("hidden");
}
