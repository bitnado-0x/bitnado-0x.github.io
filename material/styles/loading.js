window.addEventListener('DOMContentLoaded', () => {
    // 动态点动画
    const dots = ["", ".", "..", "..."];
    let dotIdx = 3;
    const loadingDots = document.getElementById('loading-dots');
    let dotInterval = null;
    if (loadingDots) {
        dotInterval = setInterval(() => {
            dotIdx = (dotIdx + 1) % 4;
            loadingDots.textContent = dots[dotIdx];
        }, 200);
    }

    setTimeout(() => {
        const overlay = document.querySelector('.loading-overlay');
        if (overlay) overlay.classList.add('hide');
        if (dotInterval) clearInterval(dotInterval);
        setTimeout(() => {
            const mainContent = document.getElementById('main-content');
            if (mainContent) mainContent.classList.add('unblur');
        }, 300); // loading消失0.3秒后虚化消失
    }, 1900); // 1.9秒后loading淡出
});
