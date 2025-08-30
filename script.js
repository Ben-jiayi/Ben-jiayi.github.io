// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 图片数据
    const photos = [
        'assets/myphotograph1.jpg',
        'assets/myphotograph2.jpg',
        'assets/myphotograph3.jpg',
        'assets/myphotograph4.jpg',
        'assets/myphotograph5.jpg',
        'assets/myphotograph6.jpg',
        'assets/myphotograph7.jpg',
        'assets/ourphotograph1.jpg',
        'assets/yourgift1.jpg',
        'assets/yourphotograph1.jpg',
        'assets/yourphotograph2.jpg',
        'assets/yourphotograph3.jpg',
        'assets/yourphotograph4.jpg',
        'assets/yourphotograph5.jpg'
    ];

    // 情诗数据
    const poems = [
        {
            title: '未缔约浪漫',
            content: '第七次望向商场拐角\n父亲口袋里的手机正劫持\n佳期——直到墨镜中浮现倩影\n你从预案里捧出晴空：\n蓝与白绞合的玫瑰\n你递来花束的芳香正校准\n我心脏跳动的频率\n\n怡然垂首对望的5秒间\n所有时区坍缩成单线程\n倘若重逢需遍历\n所有地铁站名的隐喻…\n我该把哪帧晨光\n押注在末班车倒计时？\n\n云层突然开始搬运星群\n而你的绯红脸颊\n正把暮色熨烫成\n永不褪色的船票\n开往二十二世纪'
        },
        {
            title: '火的隔离带',
            content: '当第17朵春花坠向草地时\n你的笑靥突然在光斑里返航\n这抹甜度漫过脚踝的刹那\n我正将"好想见你"夯进微信对话框的\n第三道防洪堤\n指尖悬停在信息裂缝中央\n\n此刻应启动逃避主义策略：\n把《爱在黎明破晓前》的票根\n夹进《写作是门手艺》的扉页褶皱\n让表格结构数据绞杀\n胸腔里膨胀的冲动\n\n——直到所有坍缩的"见面"\n被编译成英雄联盟的进度条\n可那列待发送的叙事列车呢？\n它正托运三件沉重货箱：\n货单A： 孵化中的个人IP\n在自媒体荒漠长出仙人掌刺\n货单B： 未淬火的未来焦虑\n于实习证明褶皱里持续氧化\n货单C： 我俩的故事草稿\n被蝉鸣钉死在七月的沥青上\n\n当键盘在子夜停止演奏\n空调吐出23℃的低温结界\n我在愣神中想象\n低温能否让想念结晶\n直到休眠的屏幕突然咳嗽——\n弹出蓝光通知：\n"下次见面程序已加载\n启动温度：37.2℃恒温"'
        },
        {
            title: '原野生长',
            content: '我曾测绘过逻辑的峭壁\n在理性等高线上标记爱的禁区\n直到你眼波漫过堤岸——\n\n佳木猝然攻陷所有荒原\n冰封的季风开始解译：\n混沌宇宙里也有温柔守恒\n而月光沿着爱的星轨\n垂落怡然伸展的藤须'
        },
        {
            title: '方寸海',
            content: '手腕上的能量石，\n微微发烫，\n脖颈上的项链，\n轻轻晃动。\n蓝色的衬衫，\n裹着纯净的轮廓，\n至于那绺叛逃的卷发——\n哦，那是你灵魂的逗号，\n在理性长句中偷偷换气。\n\n滔滔不绝的言语里，\n思想如深海静流。\n垂首一笑，\n星河便在眼底奔涌。\n\n开阔地、理性地、\n一针见血地、不断清醒着地。\n每一句判断都带着，\n手术刀般的精确，\n而真理是唯一被允许的出血。\n\n不安的脉络在深海里重新安稳，\n隐秘在枝叶阴影下的细心，\n悬在唇齿的克制，\n成为颠簸世界，\n心照不宣的避风港。\n\n当所有华丽的词句褪去颜色，\n当热闹的比喻都安静下来，\n心跳声忽然变得好大声——\n它轻轻说：\n"真好，\n遇见你。"'
        },
        {
            title: 'what\'s a soulmate?',
            content: 'What\'s a soul mate?\n什么是灵魂伴侣？\n何为灵魂伴侣？\nlt\'s a-- Well, it\'s like a best friend, but more.\n他就像是你最好的朋友，但不仅仅是这样。\n似挚友，然更甚\nlt\'s the person in the world who knows you better than anyone else.\n他比世界上的任何人都要了解你\n是颦蹙间知你忧苦，嗔笑中懂你喜怒之人\nSomeone who makes you a better person.\n他能让你成为更好的人\n从怯离别到笑沧桑\nActually, they don\'t make you better, you do that yourself because they inspire you.\n事实上，让你变得更好的人不是他，是你自己。因为他一直在支持你\n你愿独受疾苦，无惧无退。只因他浅笑颔首，星眸无双\nA soul mate is someone who you carry with you forever.\n他永远与你同行\n念你之心似东流无歌\nlt\'s the one person who-- Who knew you and accepted you and believed in you before anyone else did or when no one else would.\n只有他...了解你、支持你，第一个相信你，在其他人都不相信你时。\n他知你，敬你...信你与他人信你之前抑或无人信你之际\nAnd no matter what happens, you\'ll always love them.\n并且无论发生什么你会永远爱他\n桑田碧海，斗转星移，爱他之心，念念难忘\nNothing can ever change that.\n没有什么可以改变\n至死不渝'
        },
        {
            title: '誓堡垣',
            content: '苔丝在晨露中等待，\n克莱尔却用世俗丈量她的洁白。\n当亚蕾的吻落下时，\n月光碎了一地——\n回头路被勇敢的匕首指引，\n只求短暂的二次生命。\n\n呼啸山庄的风永不停止，\n凯瑟琳在窗棂间徘徊：\n希斯克利夫是她的骨血，\n埃德加却是安稳的港湾。\n灵魂与体面的拉锯中，\n爱成了最痛的抉择。\n\n面纱后的凯蒂数着日子，\n瓦尔特的沉默比湄公河更深。\n当霍乱成为最后的告白，\n她才读懂：\n最深沉的爱，\n往往藏在最克制的眼神里。\n\n以心为垣，以爱为誓。\n纵使世俗如墙，\n一路颠沛流离、生死一霎，\n真心终将找到它的归处。'
        }
    ];

    // 初始化时光相册
    initPhotoGallery(photos);

    // 初始化情诗盲盒
    initPoetryBox(poems);

    // 初始化图片查看器
    initImageViewer();

    // 从song.html获取歌曲ID
    async function getSongsFromHtml() {
        try {
            // 由于浏览器安全限制，我们不能直接读取本地文件
            // 这里模拟从song.html中提取歌曲ID
            return [
                { id: '1879563782', name: '起风了' },
                { id: '2734883504', name: '这世界那么多人' },
                { id: '1984388548', name: '慢慢喜欢你' },
                { id: '1457750955', name: '我好像在哪见过你' }
            ];
        } catch (error) {
            console.error('获取歌曲数据失败:', error);
            return [];
        }
    }

    // 初始化专属音乐盒
    async function initMusicBox() {
        const songs = await getSongsFromHtml();
        if (songs.length === 0) {
            console.error('没有找到歌曲数据');
            return;
        }

        const musicPlayer = document.querySelector('.music-player');
        let currentSongIndex = 0;


        // 创建音乐播放器控制区
        const controlsContainer = document.createElement('div');
        controlsContainer.className = 'controls-container';

        // 上一首按钮
        const prevButton = document.createElement('button');
        prevButton.className = 'control-button prev-button';
        prevButton.innerHTML = '<i class="fas fa-step-backward"></i> 上一首';

        // 下一首按钮
        const nextButton = document.createElement('button');
        nextButton.className = 'control-button next-button';
        nextButton.innerHTML = '下一首 <i class="fas fa-step-forward"></i>';

        controlsContainer.appendChild(prevButton);
        controlsContainer.appendChild(nextButton);
        musicPlayer.appendChild(controlsContainer);

        // 创建音乐播放器容器
        const playerContainer = document.createElement('div');
        playerContainer.className = 'player-container';
        musicPlayer.appendChild(playerContainer);

        // 播放指定歌曲
        function playSong(index) {
            currentSongIndex = index;

            // 清空播放器容器
            playerContainer.innerHTML = '';

            // 创建新的播放器iframe
            const iframe = document.createElement('iframe');
            iframe.frameBorder = 'no';
            iframe.border = '0';
            iframe.marginWidth = '0';
            iframe.marginHeight = '0';
            iframe.width = '330';
            iframe.height = '86';
            iframe.src = `//music.163.com/outchain/player?type=2&id=${songs[index].id}&auto=1&height=66`;
            iframe.title = songs[index].name;

            playerContainer.appendChild(iframe);
        }

        // 上一首歌曲
        prevButton.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
            playSong(currentSongIndex);
        });

        // 下一首歌曲
        nextButton.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            playSong(currentSongIndex);
        });

        // 随机播放一首歌曲
        const randomIndex = Math.floor(Math.random() * songs.length);
        playSong(randomIndex);
    }

    // 调用初始化函数
    initMusicBox();
});

// 初始化时光相册
function initPhotoGallery(photos) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevButton = document.getElementById('prev-photo');
    const nextButton = document.getElementById('next-photo');
    const pauseButton = document.getElementById('pause-slider');
    
    let currentSlide = 0;
    let isPaused = false;
    let slideInterval;

    // 创建图片滑块
    photos.forEach((photo, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.dataset.index = index;
        
        const img = document.createElement('img');
        img.src = photo;
        img.alt = `照片 ${index + 1}`;
        img.dataset.src = photo;
        
        // 添加点击事件，打开图片查看器
        img.addEventListener('click', () => {
            openImageViewer(photo);
        });
        
        slide.appendChild(img);
        sliderWrapper.appendChild(slide);
    });

    // 显示当前幻灯片
    function showSlide(index) {
        currentSlide = index;
        const slideWidth = sliderWrapper.clientWidth;
        sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    // 下一张幻灯片
    function nextSlide() {
        currentSlide = (currentSlide + 1) % photos.length;
        showSlide(currentSlide);
    }

    // 上一张幻灯片
    function prevSlide() {
        currentSlide = (currentSlide - 1 + photos.length) % photos.length;
        showSlide(currentSlide);
    }

    // 开始自动轮播
    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    // 暂停自动轮播
    function pauseSlideInterval() {
        clearInterval(slideInterval);
    }

    // 切换暂停/播放状态
    function togglePause() {
        isPaused = !isPaused;
        if (isPaused) {
            pauseSlideInterval();
            pauseButton.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            startSlideInterval();
            pauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        }
    }

    // 添加事件监听器
    prevButton.addEventListener('click', () => {
        pauseSlideInterval();
        prevSlide();
        if (!isPaused) startSlideInterval();
    });

    nextButton.addEventListener('click', () => {
        pauseSlideInterval();
        nextSlide();
        if (!isPaused) startSlideInterval();
    });

    pauseButton.addEventListener('click', togglePause);

    // 窗口大小改变时重新计算
    window.addEventListener('resize', () => {
        showSlide(currentSlide);
    });

    // 启动自动轮播
    startSlideInterval();
}

// 初始化情诗盲盒
function initPoetryBox(poems) {
    const poemTitle = document.getElementById('poem-title');
    const poemContent = document.getElementById('poem-content');
    const randomButton = document.getElementById('random-poem');
    const searchInput = document.getElementById('poetry-search-input');
    const searchButton = document.getElementById('search-button');

    // 显示随机情诗
    function showRandomPoem() {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const randomPoem = poems[randomIndex];
        
        poemTitle.textContent = randomPoem.title;
        poemContent.textContent = randomPoem.content;
        
        // 添加淡入动画
        poemDisplay.classList.add('fade-in');
        setTimeout(() => {
            poemDisplay.classList.remove('fade-in');
        }, 500);
    }

    // 搜索情诗
    function searchPoem(keyword) {
        if (!keyword.trim()) {
            showRandomPoem();
            return;
        }
        
        const keywordLower = keyword.toLowerCase();
        const filteredPoems = poems.filter(poem => 
            poem.title.toLowerCase().includes(keywordLower) || 
            poem.content.toLowerCase().includes(keywordLower)
        );
        
        if (filteredPoems.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredPoems.length);
            const foundPoem = filteredPoems[randomIndex];
            
            poemTitle.textContent = foundPoem.title;
            poemContent.textContent = foundPoem.content;
        } else {
            poemTitle.textContent = '未找到';
            poemContent.textContent = '没有找到包含关键词 "' + keyword + '" 的情诗，请尝试其他关键词。';
        }
        
        // 添加淡入动画
        poemDisplay.classList.add('fade-in');
        setTimeout(() => {
            poemDisplay.classList.remove('fade-in');
        }, 500);
    }

    // 获取poemDisplay元素
    const poemDisplay = document.querySelector('.poem-display');
    
    // 添加CSS动画样式
    const style = document.createElement('style');
    style.textContent = `
        .poem-display.fade-in {
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0.5;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // 添加事件监听器
    randomButton.addEventListener('click', showRandomPoem);
    searchButton.addEventListener('click', () => {
        const keyword = searchInput.value;
        searchPoem(keyword);
    });

    // 回车键搜索
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const keyword = searchInput.value;
            searchPoem(keyword);
        }
    });

    // 初始化显示一首随机情诗
    showRandomPoem();
}



// 初始化图片查看器
function initImageViewer() {
    const modal = document.getElementById('image-viewer');
    const modalImg = document.querySelector('.modal-image');
    const closeBtn = document.querySelector('.close');

    // 打开图片查看器
    window.openImageViewer = function(imageSrc) {
        modal.style.display = 'block';
        modalImg.src = imageSrc;
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    };

    // 关闭图片查看器
    function closeImageViewer() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // 恢复背景滚动
    }

    // 点击关闭按钮
    closeBtn.addEventListener('click', closeImageViewer);

    // 点击模态框外部区域关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeImageViewer();
        }
    });

    // ESC键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeImageViewer();
        }
    });
}

// 添加一些额外的交互效果
function addExtraEffects() {
    // 页面滚动时的视差效果
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const decorativeElements = document.querySelectorAll('.decorative-bg .heart');
        
        decorativeElements.forEach((element, index) => {
            const speed = 0.05 + index * 0.02;
            element.style.transform = `translate(${scrollPosition * speed}px, ${scrollPosition * speed * 0.5}px) rotate(45deg)`;
        });
    });

    // 模块进入视口时的动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // 为所有模块添加观察
    const modules = document.querySelectorAll('.module');
    modules.forEach(module => {
        module.style.opacity = '0';
        module.style.transform = 'translateY(30px)';
        module.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(module);
    });
}

// 当页面完全加载时执行额外效果
window.addEventListener('load', addExtraEffects);