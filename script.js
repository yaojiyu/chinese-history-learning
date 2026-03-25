const dynasties = [
    {
        name: "夏",
        time: "约公元前2070年 — 约公元前1600年",
        founder: "禹",
        capital: "阳城、斟鄩等",
        events: "大禹治水、家天下制度确立（启继位）、夏历。",
        impact: "中国历史上第一个世袭制王朝，标志着原始社会向奴隶社会的转变，开启了华夏文明的新纪元。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Erlitou_bronze_vessel.jpg/640px-Erlitou_bronze_vessel.jpg",
        quiz: [
            {
                question: "中国第一个世袭制王朝是哪个？",
                options: ["夏朝", "商朝", "周朝"],
                answer: "夏朝"
            },
            {
                question: "“家天下”制度是从谁开始的？",
                options: ["禹", "启", "汤"],
                answer: "启"
            }
        ]
    },
    {
        name: "商",
        time: "约公元前1600年 — 公元前1046年",
        founder: "汤",
        capital: "亳、殷（盘庚迁殷）",
        events: "甲骨文出现、青铜器盛行（司母戊鼎）、内外服制。",
        impact: "中国历史上第一个有直接文字记载的王朝，青铜文明达到顶峰，奠定了中华文化的基础。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hou_Mu_Wu_Ding.jpg/512px-Hou_Mu_Wu_Ding.jpg",
        quiz: [
            {
                question: "商朝最著名的文字是什么？",
                options: ["金文", "甲骨文", "小篆"],
                answer: "甲骨文"
            },
            {
                question: "哪位商王将都城迁至殷，从而稳定了统治？",
                options: ["商汤", "盘庚", "纣王"],
                answer: "盘庚"
            }
        ]
    },
    {
        name: "西周",
        time: "公元前1046年 — 公元前771年",
        founder: "周武王",
        capital: "镐京（西安）",
        events: "分封制、宗法制、礼乐制度、国人暴动。",
        impact: "确立了影响中国数千年的宗法等级社会结构，提出了“天命”与“德治”的思想雏形。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Western_Zhou_ritual_bronze_vessel.jpg/512px-Western_Zhou_ritual_bronze_vessel.jpg",
        quiz: [
            {
                question: "西周为了巩固统治，在政治上实行什么制度？",
                options: ["郡县制", "分封制", "行省制"],
                answer: "分封制"
            }
        ]
    },
    {
        name: "东周",
        time: "公元前770年 — 公元前256年",
        founder: "周平王",
        capital: "洛邑（洛阳）",
        events: "春秋五霸、战国七雄、百家争鸣、商鞅变法、铁器牛耕使用。",
        impact: "社会大变革时期，思想文化空前繁荣，确立了中国传统文化的基本格局，完成了由奴隶制向封建制的过渡。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Warring_States_Period_glass_bead.jpg/512px-Warring_States_Period_glass_bead.jpg",
        quiz: [
            {
                question: "思想文化空前繁荣的“百家争鸣”发生在哪个时期？",
                options: ["西周", "东周", "秦朝"],
                answer: "东周"
            }
        ]
    },
    {
        name: "秦",
        time: "公元前221年 — 公元前207年",
        founder: "秦始皇（嬴政）",
        capital: "咸阳",
        events: "统一六国、书同文、车同轨、郡县制、万里长城、焚书坑儒。",
        impact: "中国历史上第一个统一的中央集权封建国家，奠定了中国两千多年政治制度的基本框架。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Terracotta_warriors_in_Xian.jpg/640px-Terracotta_warriors_in_Xian.jpg",
        quiz: [
            {
                question: "秦朝为巩固统一，在全国推行的制度是？",
                options: ["分封制", "郡县制", "宗法制"],
                answer: "郡县制"
            }
        ]
    },
    {
        name: "汉",
        time: "公元前202年 — 公元220年",
        founder: "汉高祖（刘邦）",
        capital: "长安、洛阳",
        events: "文景之治、汉武帝大一统（罢黜百家独尊儒术）、丝绸之路、蔡伦改进造纸术。",
        impact: "中国封建社会的第一个鼎盛时期，汉族、汉字、汉文化正式定型，对后世及世界产生深远影响。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Han_Dynasty_painted_pottery_official.jpg/512px-Han_Dynasty_painted_pottery_official.jpg",
        quiz: [
            {
                question: "汉武帝为了加强思想控制，采取了什么措施？",
                options: ["焚书坑儒", "百家争鸣", "罢黜百家，独尊儒术"],
                answer: "罢黜百家，独尊儒术"
            }
        ]
    },
    {
        name: "三国",
        time: "220年 — 280年",
        founder: "曹丕（魏）、刘备（汉）、孙权（吴）",
        capital: "洛阳、成都、建业",
        events: "赤壁之战、官渡之战、三顾茅庐、屯田制。",
        impact: "中国历史上著名的割据时期，虽然政治分裂，但促进了局部地区的开发和民族大融合。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Red_Cliffs_in_Huangzhou_by_Wu_Yuanzhi.jpg/640px-Red_Cliffs_in_Huangzhou_by_Wu_Yuanzhi.jpg",
        quiz: [
            {
                question: "奠定三国鼎立局面的关键战役是？",
                options: ["官渡之战", "赤壁之战", "夷陵之战"],
                answer: "赤壁之战"
            }
        ]
    },
    {
        name: "两晋",
        time: "266年 — 420年",
        founder: "司马炎（西晋）",
        capital: "洛阳、建康",
        events: "八王之乱、五胡乱华、衣冠南渡、王与马共天下。",
        impact: "政权更迭频繁，门阀政治达到顶点，北方民族大迁徙促进了江南地区的开发和文化融合。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Seven_Sages_of_the_Bamboo_Grove.jpg/640px-Seven_Sages_of_the_Bamboo_Grove.jpg",
        quiz: [
            {
                question: "导致西晋灭亡，北方陷入长期混乱的历史事件是？",
                options: ["八王之乱", "五胡乱华", "国人暴动"],
                answer: "五胡乱华"
            }
        ]
    },
    {
        name: "南北朝",
        time: "420年 — 589年",
        founder: "多个政权",
        capital: "建康、平城、洛阳等",
        events: "北魏孝文帝改革（汉化）、玄学流行、佛教盛行（石窟艺术）。",
        impact: "民族大融合的重要时期，为隋唐的大一统奠定了坚实的物质和文化基础。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Longmen_Grottoes_Fengxian_Temple.jpg/640px-Longmen_Grottoes_Fengxian_Temple.jpg",
        quiz: [
            {
                question: "北魏孝文帝改革的核心措施是？",
                options: ["推行汉化", "建立均田制", "迁都洛阳"],
                answer: "推行汉化"
            }
        ]
    },
    {
        name: "隋",
        time: "581年 — 618年",
        founder: "隋文帝（杨坚）",
        capital: "大兴（长安）",
        events: "统一全国、开创科举制、开凿大运河、三省六部制雏形。",
        impact: "结束了长期的分裂局面，其政治制度和工程建设对唐朝及后世产生了深远影响。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Anji_Bridge.jpg/640px-Anji_Bridge.jpg",
        quiz: [
            {
                question: "对后世影响深远的选官制度——科举制，始于哪个朝代？",
                options: ["汉朝", "隋朝", "唐朝"],
                answer: "隋朝"
            }
        ]
    },
    {
        name: "唐",
        time: "618年 — 907年",
        founder: "唐高祖（李渊）",
        capital: "长安",
        events: "贞观之治、开元盛世、安史之乱、唐诗繁荣、丝绸之路鼎盛。",
        impact: "中国封建社会的最高峰，国力强盛，文化高度发达且极具包容性，是当时世界公认的中心。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tang_Dynasty_tri-color_glaze_pottery_figurine.jpg/512px-Tang_Dynasty_tri-color_glaze_pottery_figurine.jpg",
        quiz: [
            {
                question: "唐朝由盛转衰的标志性事件是？",
                options: ["玄武门之变", "安史之乱", "黄巢起义"],
                answer: "安史之乱"
            }
        ]
    },
    {
        name: "五代十国",
        time: "907年 — 960年",
        founder: "多个政权",
        capital: "多个",
        events: "节度使割据、政权频繁交替、南方经济相对稳定发展。",
        impact: "唐末藩镇割据的延续，虽是分裂时期，但经济中心继续南移，为宋朝的统一做了铺垫。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Five_Dynasties_and_Ten_Kingdoms.png/640px-Five_Dynasties_and_Ten_Kingdoms.png",
        quiz: [
            {
                question: "五代十国时期，中国的政治状况特点是？",
                options: ["大一统", "南北对峙", "分裂割据"],
                answer: "分裂割据"
            }
        ]
    },
    {
        name: "宋",
        time: "960年 — 1279年",
        founder: "宋太祖（赵匡胤）",
        capital: "汴京（开封）、临安（杭州）",
        events: "陈桥兵变、重文轻武、澶渊之盟、活字印刷术、指南针、宋词。",
        impact: "中国历史上经济、文化、科技高度发达的时期，被誉为“东方的文艺复兴”。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Along_the_River_During_the_Qingming_Festival.jpg/640px-Along_the_River_During_the_Qingming_Festival.jpg",
        quiz: [
            {
                question: "活字印刷术是哪个朝代由谁发明的？",
                options: ["唐朝 毕昇", "宋朝 毕昇", "明朝 蔡伦"],
                answer: "宋朝 毕昇"
            }
        ]
    },
    {
        name: "元",
        time: "1271年 — 1368年",
        founder: "元世祖（忽必烈）",
        capital: "大都（北京）",
        events: "行省制度、马可·波罗来华、元曲、宣政院管理西藏。",
        impact: "中国历史上第一个由少数民族建立的大一统王朝，确立了行省制，极大地促进了多民族国家的统一和发展。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Yuan_Dynasty_banknote.jpg/640px-Yuan_Dynasty_banknote.jpg",
        quiz: [
            {
                question: "元朝为了有效管理广阔的疆域，在地方实行什么制度？",
                options: ["郡县制", "分封制", "行省制"],
                answer: "行省制"
            }
        ]
    },
    {
        name: "明",
        time: "1368年 — 1644年",
        founder: "明太祖（朱元璋）",
        capital: "应天（南京）、北京",
        events: "废丞相、郑和下西洋、戚继光抗倭、万里长城修筑、四大名著成熟。",
        impact: "封建君主专制空前加强，海上贸易一度繁荣，是中国古代封建制度向近代转型的关键期。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Forbidden_City_in_Beijing.jpg/640px-Forbidden_City_in_Beijing.jpg",
        quiz: [
            {
                question: "“郑和下西洋”是哪个朝代的壮举？",
                options: ["宋朝", "元朝", "明朝"],
                answer: "明朝"
            }
        ]
    },
    {
        name: "清",
        time: "1636年 — 1912年",
        founder: "皇太极（清）、努尔哈赤（后金）",
        capital: "北京",
        events: "康乾盛世、军机处设立、闭关锁国、雅片战争、辛亥革命。",
        impact: "中国封建社会的最后余晖，奠定了现代中国的基本版图，但在世界近代化浪潮中逐渐落伍。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/The_Qianlong_Emperor_in_Ceremonial_Armour_on_Horseback.jpg/512px-The_Qianlong_Emperor_in_Ceremonial_Armour_on_Horseback.jpg",
        quiz: [
            {
                question: "标志着中国近代史开端的事件是？",
                options: ["康乾盛世", "闭关锁国", "鸦片战争"],
                answer: "鸦片战争"
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('dynasty-timeline');
    const infoArea = document.getElementById('dynasty-info');
    const welcomeMsg = document.getElementById('welcome-message');
    const contentCard = document.getElementById('content-display');
    const quizModal = document.getElementById('quiz-modal');
    let currentDynastyIndex = -1;
    
    // 初始化时间轴
    dynasties.forEach((d, index) => {
        const btn = document.createElement('button');
        btn.className = 'dynasty-btn';
        btn.textContent = d.name;
        btn.onclick = () => showDynasty(index);
        timeline.appendChild(btn);
    });

    function showDynasty(index) {
        currentDynastyIndex = index;
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
            document.getElementById('dynasty-image').src = d.image;
            document.getElementById('dynasty-time').textContent = d.time;
            document.getElementById('dynasty-founder-capital').textContent = d.founder + " | " + d.capital;
            document.getElementById('dynasty-events').textContent = d.events;
            document.getElementById('dynasty-impact').textContent = d.impact;
            
            contentCard.style.opacity = '1';
            contentCard.classList.add('fade-in');
            
            setTimeout(() => contentCard.classList.remove('fade-in'), 500);
        }, 300);
    }

    // 语音朗读功能
    document.getElementById('read-aloud-btn').onclick = () => {
        if (currentDynastyIndex === -1) return;
        const d = dynasties[currentDynastyIndex];
        const text = `${d.name}朝。存续时间：${d.time}。建立者与都城：${d.founder}，${d.capital}。重要事件与制度：${d.events}。历史地位与影响：${d.impact}`;
        speak(text);
    };

    // 问答游戏功能
    document.getElementById('start-quiz-btn').onclick = () => {
        if (currentDynastyIndex === -1) return;
        const d = dynasties[currentDynastyIndex];
        const quizContainer = document.getElementById('quiz-questions');
        
        document.getElementById('quiz-title').textContent = `${d.name}朝知识挑战`;
        quizContainer.innerHTML = '';

        d.quiz.forEach((q, index) => {
            const questionEl = document.createElement('div');
            questionEl.className = 'question-item';
            
            const questionText = document.createElement('p');
            questionText.textContent = `${index + 1}. ${q.question}`;
            questionEl.appendChild(questionText);
            
            const optionsGroup = document.createElement('div');
            optionsGroup.className = 'options-group';
            
            q.options.forEach(option => {
                const optionBtn = document.createElement('button');
                optionBtn.className = 'option-btn';
                optionBtn.textContent = option;
                optionBtn.onclick = (event) => checkAnswer(event, option, q.answer);
                optionsGroup.appendChild(optionBtn);
            });
            
            questionEl.appendChild(optionsGroup);
            quizContainer.appendChild(questionEl);
        });

        quizModal.classList.add('visible');
        quizModal.style.display = 'flex';
    };

    document.getElementById('close-quiz-btn').onclick = () => {
        quizModal.classList.remove('visible');
        setTimeout(() => quizModal.style.display = 'none', 300);
    };

    function checkAnswer(event, selected, correct) {
        const optionButtons = event.target.parentElement.childNodes;
        optionButtons.forEach(btn => btn.disabled = true); // 禁止重复点击

        if (selected === correct) {
            event.target.classList.add('correct');
        } else {
            event.target.classList.add('wrong');
            optionButtons.forEach(btn => {
                if (btn.textContent === correct) {
                    btn.classList.add('correct');
                }
            });
        }
    }

    function speak(text) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
});