function changeBg(type) {
    var result = document.querySelector('#result');
    var description = document.querySelector('#description');
    
    if (type === 'kor') {
        result.innerHTML = '<img src="images/kor.jpg" alt="한식 이미지">';
        description.innerHTML = `
            <h3>한식 (Korean Food)</h3>
            <p>한국 전통 음식은 발효된 재료와 다양한 채소를 사용합니다. 김치, 된장찌개, 불고기 등이 대표적입니다.</p>
            <p><strong>대표 메뉴:</strong> 비빔밥, 불고기, 김치찌개</p>
        `;
    } else if (type === 'chi') {
        result.innerHTML = '<img src="images/chi.jpg" alt="중식 이미지">';
        description.innerHTML = `
            <h3>중식 (Chinese Food)</h3>
            <p>중국 음식은 다양한 조리법과 향신료를 사용하여 풍부한 맛을 자랑합니다. 탕수육, 짜장면 등이 유명합니다.</p>
            <p><strong>대표 메뉴:</strong> 짜장면, 탕수육, 마파두부</p>
        `;
    } else if (type === 'jap') {
        result.innerHTML = '<img src="images/jap.jpg" alt="일식 이미지">';
        description.innerHTML = `
            <h3>일식 (Japanese Food)</h3>
            <p>일본 음식은 신선한 재료와 섬세한 맛을 강조합니다. 스시, 라멘, 사시미 등이 대표적입니다.</p>
            <p><strong>대표 메뉴:</strong> 스시, 라멘, 텐동</p>
        `;
    }
}
