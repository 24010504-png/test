document.addEventListener('DOMContentLoaded', () => {
    // ページ内のすべての「続きを読む」ボタンを取得
    const readMoreButtons = document.querySelectorAll('.read-more-button');

    readMoreButtons.forEach(button => {
        // 各ボタンに対応するコンテンツコンテナを取得
        const container = button.closest('.read-more-container');
        const content = container.querySelector('.read-more-content');

        // 初期状態ではコンテンツを制限
        content.classList.add('initial-hide');

        button.addEventListener('click', () => {
            // コンテンツの表示状態を切り替える
            if (content.classList.contains('initial-hide')) {
                content.classList.remove('initial-hide');
                content.classList.add('expanded'); // 高さを解除するクラス
                button.textContent = '∧閉じる'; // ボタンのテキストを変更
                // グラデーションを非表示にする
                content.style.setProperty('--after-height', '0px'); 
            } else {
                content.classList.remove('expanded');
                content.classList.add('initial-hide');
                button.textContent = '∨続きを読む'; // ボタンのテキストを元に戻す
                // グラデーションを再表示する
                content.style.setProperty('--after-height', '30px'); 
            }
        });
    });
});