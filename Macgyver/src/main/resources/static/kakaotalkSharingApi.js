function shareKakao(text) {
    // SDK 초기화 (단 한번만 하기 위해)
    if (!Kakao.isInitialized()) {
        Kakao.init('3bd6db7f70132a04246df82d95a29632');
    }

    // 예외처리 : 값이 없을 시
    if (!text || typeof text !== 'string') {
        alert('공유할 텍스트가 없습니다.')
        return;
    }

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '공유 메시지',
            description: text,
            imageUrl: 'https://via.placeholder.com/300',
            link: {
                mobileWebUrl: 'http://localhost:8080',
                webUrl: 'http://localhost:8080',
            },
        },
    });
}

export { shareKakao };