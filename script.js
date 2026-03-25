const dynasties = [
    {
        name: "夏",
        time: "约公元前2070年 — 约公元前1600年",
        founder: "禹",
        capital: "阳城、斟鄩等",
        events: "大禹治水、家天下制度确立（启继位）、夏历。",
        impact: "中国历史上第一个世袭制王朝，标志着原始社会向奴隶社会的转变，开启了华夏文明的新纪元。"
    },
    {
        name: "商",
        time: "约公元前1600年 — 公元前1046年",
        founder: "汤",
        capital: "亳、殷（盘庚迁殷）",
        events: "甲骨文出现、青铜器盛行（司母戊鼎）、内外服制。",
        impact: "中国历史上第一个有直接文字记载的王朝，青铜文明达到顶峰，奠定了中华文化的基础。"
    },
    {
        name: "西周",
        time: "公元前1046年 — 公元前771年",
        founder: "周武王",
        capital: "镐京（西安）",
        events: "分封制、宗法制、礼乐制度、国人暴动。",
        impact: "确立了影响中国数千年的宗法等级社会结构，提出了“天命”与“德治”的思想雏形。"
    },
    {
        name: "东周",
        time: "公元前770年 — 公元前256年",
        founder: "周平王",
        capital: "洛邑（洛阳）",
        events: "春秋五霸、战国七雄、百家争鸣、商鞅变法、铁器牛耕使用。",
        impact: "社会大变革时期，思想文化空前繁荣，确立了中国传统文化的基本格局，完成了由奴隶制向封建制的过渡。"
    },
    {
        name: "秦",
        time: "公元前221年 — 公元前207年",
        founder: "秦始皇（嬴政）",
        capital: "咸阳",
        events: "统一六国、书同文、车同轨、郡县制、万里长城、焚书坑儒。",
        impact: "中国历史上第一个统一的中央集权封建国家，奠定了中国两千多年政治制度的基本框架。"
    },
    {
        name: "汉",
        time: "公元前202年 — 公元220年",
        founder: "汉高祖（刘邦）",
        capital: "长安、洛阳",
        events: "文景之治、汉武帝大一统（罢黜百家独尊儒术）、丝绸之路、蔡伦改进造纸术。",
        impact: "中国封建社会的第一个鼎盛时期，汉族、汉字、汉文化正式定型，对后世及世界产生深远影响。"
    },
    {
        name: "三国",
        time: "220年 — 280年",
        founder: "曹丕（魏）、刘备（汉）、孙权（吴）",
        capital: "洛阳、成都、建业",
        events: "赤壁之战、官渡之战、三顾茅庐、屯田制。",
        impact: "中国历史上著名的割据时期，虽然政治分裂，但促进了局部地区的开发和民族大融合。"
    },
    {
        name: "两晋",
        time: "266年 — 420年",
        founder: "司马炎（西晋）",
        capital: "洛阳、建康",
        events: "八王之乱、五胡乱华、衣冠南渡、王与马共天下。",
        impact: "政权更迭频繁，门阀政治达到顶点，北方民族大迁徙促进了江南地区的开发和文化融合。"
    },
    {
        name: "南北朝",
        time: "420年 — 589年",
        founder: "多个政权",
        capital: "建康、平城、洛阳等",
        events: "北魏孝文帝改革（汉化）、玄学流行、佛教盛行（石窟艺术）。",
        impact: "民族大融合的重要时期，为隋唐的大一统奠定了坚实的物质和文化基础。"
    },
    {
        name: "隋",
        time: "581年 — 618年",
        founder: "隋文帝（杨坚）",
        capital: "大兴（长安）",
        events: "统一全国、开创科举制、开凿大运河、三省六部制雏形。",
        impact: "结束了长期的分裂局面，其政治制度和工程建设对唐朝及后世产生了深远影响。"
    },
    {
        name: "唐",
        time: "618年 — 907年",
        founder: "唐高祖（李渊）",
        capital: "长安",
        events: "贞观之治、开元盛世、安史之乱、唐诗繁荣、丝绸之路鼎盛。",
        impact: "中国封建社会的最高峰，国力强盛，文化高度发达且极具包容性，是当时世界公认的中心。"
    },
    {
        name: "五代十国",
        time: "907年 — 960年",
        founder: "多个政权",
        capital: "多个",
        events: "节度使割据、政权频繁交替、南方经济相对稳定发展。",
        impact: "唐末藩镇割据的延续，虽是分裂时期，但经济中心继续南移，为宋朝的统一做了铺垫。"
    },
    {
        name: "宋",
        time: "960年 — 1279年",
        founder: "宋太祖（赵匡胤）",
        capital: "汴京（开封）、临安（杭州）",
        events: "陈桥兵变、重文轻武、澶渊之盟、活字印刷术、指南针、宋词。",
        impact: "中国历史上经济、文化、科技高度发达的时期，被誉为“东方的文艺复兴”。"
    },
    {
        name: "元",
        time: "1271年 — 1368年",
        founder: "元世祖（忽必烈）",
        capital: "大都（北京）",
        events: "行省制度、马可·波罗来华、元曲、宣政院管理西藏。",
        impact: "中国历史上第一个由少数民族建立的大一统王朝，确立了行省制，极大地促进了多民族国家的统一和发展。"
    },
    {
        name: "明",
        time: "1368年 — 1644年",
        founder: "明太祖（朱元璋）",
        capital: "应天（南京）、北京",
        events: "废丞相、郑和下西洋、戚继光抗倭、万里长城修筑、四大名著成熟。",
        impact: "封建君主专制空前加强，海上贸易一度繁荣，是中国古代封建制度向近代转型的关键期。"
    },
    {
        name: "清",
        time: "1636年 — 1912年",
        founder: "皇太极（清）、努尔哈赤（后金）",
        capital: "北京",
        events: "康乾盛世、军机处设立、闭关锁国、雅片战争、辛亥革命。",
        impact: "中国封建社会的最后余晖，奠定了现代中国的基本版图，但在世界近代化浪潮中逐渐落伍。"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('dynasty-timeline');
    const infoArea = document.getElementById('dynasty-info');
    const welcomeMsg = document.getElementById('welcome-message');
    const contentCard = document.getElementById('content-display');
    
    // 初始化时间轴
    dynasties.forEach((d, index) => {
        const btn = document.createElement('button');
        btn.className = 'dynasty-btn';
        btn.textContent = d.name;
        btn.onclick = () => showDynasty(index);
        timeline.appendChild(btn);
    });

    function showDynasty(index) {
        const d = dynasties[index];
        
        // 更新按钮状态
        const buttons = document.querySelectorAll('.dynasty-btn');
        buttons.forEach((btn, i) => {
            if (i === index) btn.classList.add('active');
            else btn.classList.remove('active');
        });

        // 切换内容动画
        contentCard.style.opacity = '0';
        
        setTimeout(() => {
            welcomeMsg.style.display = 'none';
            infoArea.style.display = 'block';
            
            document.getElementById('dynasty-name').textContent = d.name + "朝";
            document.getElementById('dynasty-time').textContent = d.time;
            document.getElementById('dynasty-founder-capital').textContent = d.founder + " | " + d.capital;
            document.getElementById('dynasty-events').textContent = d.events;
            document.getElementById('dynasty-impact').textContent = d.impact;
            
            contentCard.style.opacity = '1';
            contentCard.classList.add('fade-in');
            
            // 移除动画类以便下次使用
            setTimeout(() => contentCard.classList.remove('fade-in'), 500);
        }, 300);
    }

    // 语音朗读功能
    const readBtn = document.getElementById('read-aloud-btn');
    readBtn.onclick = () => {
        const name = document.getElementById('dynasty-name').textContent;
        const time = document.getElementById('dynasty-time').textContent;
        const fc = document.getElementById('dynasty-founder-capital').textContent;
        const events = document.getElementById('dynasty-events').textContent;
        const impact = document.getElementById('dynasty-impact').textContent;
        
        const text = `${name}。存续时间：${time}。建立者与都城：${fc}。重要事件与制度：${events}。历史地位与影响：${impact}`;
        
        speak(text);
    };

    function speak(text) {
        // 取消当前所有朗读
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = 0.9; // 语速稍微放慢
        utterance.pitch = 1.0;
        
        window.speechSynthesis.speak(utterance);
    }
});