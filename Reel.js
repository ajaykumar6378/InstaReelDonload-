    const downloadBtn = document.getElementById('downloadBtn');
        const inputLink = document.getElementById('inputLink');
        const reelPreview = document.getElementById('reelPreview');
        downloadBtn.addEventListener('click', () => {
            const url = inputLink.value.trim();
            if(!url || !url.includes('instagram.com/reel/')) {
                alert('कृपया सही Instagram reel लिंक डालें।');
                return;
            }
            reelPreview.innerHTML = `
                <iframe src="https://www.instagram.com/p/${extractShortCode(url)}/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                <br><br>
                <a href="${url}" class="btn btn-success" target="_blank" rel="noopener noreferrer">Download</a>
            `;
        });
        function extractShortCode(url) {
            const parts = url.split('/');
            return parts[parts.indexOf('reel') + 1];
        }