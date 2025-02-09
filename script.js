function calculateResult() {
    // เก็บคะแนนของแต่ละธาตุ
    let scores = { "ดิน": 0, "น้ำ": 0, "ลม": 0, "ไฟ": 0 };

    // ดึงค่าคำตอบจากแบบสอบถาม
    for (let i = 1; i <= 8; i++) {
        let answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            scores[answer.value]++; // เพิ่มคะแนนของธาตุที่เลือก
        }
    }

    // ค้นหาธาตุที่ได้คะแนนสูงสุด
    let maxScore = Math.max(...Object.values(scores));
    let topElements = Object.keys(scores).filter(element => scores[element] === maxScore);

    // ข้อความผลลัพธ์
    let resultText = "";
    let imageSrc = "";

    if (topElements.length === 1) {
        let element = topElements[0];
        resultText = getElementDescription(element);
        imageSrc = getElementImage(element);
    } else {
        resultText = `คุณมีลักษณะของธาตุ ${topElements.join(" และ ")} ผสมกัน!`;
        imageSrc = "images/mixed-elements.jpg"; // กรณีมีธาตุร่วม
    }

    // แสดงผลลัพธ์
    document.getElementById("elementText").innerHTML = resultText;
    document.getElementById("elementImage").src = imageSrc;
    document.getElementById("result").classList.remove("hidden");
}

// ฟังก์ชันคืนค่าคำอธิบายบุคลิกภาพของแต่ละธาตุ
function getElementDescription(element) {
    let descriptions = {
        "ดิน": `
            <h3>ธาตุดิน (Earth) – ผู้มั่นคงและหนักแน่น</h3>
            <strong>บุคลิกภาพ:</strong> มั่นคง เชื่อถือได้ จริงจัง รอบคอบ<br>
            <strong>จุดแข็ง:</strong> อดทน วางแผนดี ซื่อสัตย์<br>
            <strong>จุดอ่อน:</strong> ดื้อรั้น ไม่ชอบความเสี่ยง<br>
            <strong>คู่ที่เข้ากันได้:</strong> น้ำ, ลม
        `,
        "น้ำ": `
            <h3>ธาตุน้ำ (Water) – ผู้เข้าอกเข้าใจและอ่อนโยน</h3>
            <strong>บุคลิกภาพ:</strong> อ่อนไหว ละเอียดอ่อน เข้าใจผู้อื่น<br>
            <strong>จุดแข็ง:</strong> เห็นอกเห็นใจ ปรับตัวเก่ง<br>
            <strong>จุดอ่อน:</strong> อารมณ์แปรปรวน ตัดสินใจยาก<br>
            <strong>คู่ที่เข้ากันได้:</strong> ดิน, ไฟ
        `,
        "ลม": `
            <h3>ธาตุลม (Air) – ผู้คิดเร็วและรักอิสระ</h3>
            <strong>บุคลิกภาพ:</strong> ฉลาด ช่างคิด ชอบเรียนรู้<br>
            <strong>จุดแข็ง:</strong> ปรับตัวเก่ง มีความคิดสร้างสรรค์<br>
            <strong>จุดอ่อน:</strong> เบื่อง่าย ไม่ชอบอะไรซ้ำๆ<br>
            <strong>คู่ที่เข้ากันได้:</strong> ไฟ, ดิน
        `,
        "ไฟ": `
            <h3>ธาตุไฟ (Fire) – ผู้นำพลังและความมุ่งมั่น</h3>
            <strong>บุคลิกภาพ:</strong> มุ่งมั่น กล้าหาญ มีพลังสูง<br>
            <strong>จุดแข็ง:</strong> กล้าตัดสินใจ เป็นผู้นำ<br>
            <strong>จุดอ่อน:</strong> ใจร้อน ดื้อรั้น<br>
            <strong>คู่ที่เข้ากันได้:</strong> ลม, น้ำ
        `
    };
    return descriptions[element] || "ไม่พบข้อมูลของธาตุนี้";
}

// ฟังก์ชันคืนค่าภาพของแต่ละธาตุ
function getElementImage(element) {
    let images = {
        "ดิน": "images/earth.jpg",
        "น้ำ": "images/water.jpg",
        "ลม": "images/air.jpg",
        "ไฟ": "images/fire.jpg"
    };
    return images[element] || "images/default.jpg";
}
