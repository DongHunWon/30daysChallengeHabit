export default function saveBtn() {
    const mainContents = document.querySelector(".main-contents");
    const { x, y, width, height } =  mainContents.getBoundingClientRect();
    html2canvas(document.body).then((canvas) => {
        // body 이미지에서 main-contents 이미지 자르기 (밑에 버튼 제거)
        const imgData = canvas.getContext("2d").getImageData(x, y, width, height);
        const cv = document.createElement("canvas");
        cv.width = width;
        cv.height = height - 40;
        cv.getContext("2d").putImageData(imgData, 0, 0);

        const a = document.createElement("a");
        a.href = cv.toDataURL("image/jpeg");
        a.download = "challenge.jpg";
        a.click();
    });
}