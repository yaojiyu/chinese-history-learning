const dynasties = [
    {
        name: "夏",
        time: "约公元前2070年 — 约公元前1600年",
        founder: "禹",
        capital: "阳城、斟鄩（河南偃师）",
        events: "1. 大禹治水：禹采用疏导之法，平定洪水，标志着王权的建立。2. 世袭制确立：禹死后，其子启继位，打破了禅让传统，确立了‘家天下’。3. 二里头文化：河南二里头遗址被认为与夏朝中晚期文化相吻合，出土了中国最早的青铜爵。4. 生产力：已进入奴隶制社会，开始使用原始农具和简单的青铜器。",
        impact: "中国历史上第一个世袭制王朝，标志着原始社会向阶级社会的转变。它确立的世袭制度影响了中国此后四千年的政治格局，是华夏文明的摇篮。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Chinese_Bronze_Jue.jpg/640px-Chinese_Bronze_Jue.jpg",
        quiz: [
            {
                question: "中国第一个世袭制王朝是哪个？",
                options: ["夏朝", "商朝", "周朝", "秦朝"],
                answer: "夏朝"
            },
            {
                question: "‘家天下’制度是从谁开始的？",
                options: ["禹", "启", "桀", "汤"],
                answer: "启"
            }
        ]
    },
    {
        name: "商",
        time: "约公元前1600年 — 公元前1046年",
        founder: "汤",
        capital: "亳、殷（盘庚迁殷，今河南安阳）",
        events: "1. 盘庚迁殷：商朝中期的重大转折，迁都后商朝从此稳定并走向繁荣。2. 甲骨文：刻在龟甲兽骨上的占卜文字，是中国已知最早的成熟文字。3. 青铜鼎盛：代表作‘后母戊鼎’重达875公斤，是古代青铜器之冠。4. 内外服制：一种早期的国家管理制度，分为王畿内和王畿外。",
        impact: "商朝是中国有直接文字记载的信史时代的开始。其高度发达的青铜文明和祭祀文化，奠定了中华文明在艺术、信仰和制度上的早期基础。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hou_Mu_Wu_Ding.jpg/640px-Hou_Mu_Wu_Ding.jpg",
        quiz: [
            {
                question: "商朝最著名的、刻在龟甲兽骨上的文字是什么？",
                options: ["金文", "甲骨文", "小篆", "大篆"],
                answer: "甲骨文"
            },
            {
                question: "哪位商王将都城迁至殷，使商朝保持了长期稳定？",
                options: ["商汤", "盘庚", "武丁", "纣王"],
                answer: "盘庚"
            }
        ]
    },
    {
        name: "西周",
        time: "公元前1046年 — 公元前771年",
        founder: "周武王",
        capital: "镐京（今陕西西安）",
        events: "1. 武王伐纣：牧野之战大败商军，建立周朝。2. 分封制：将土地分封给宗亲和功臣，形成‘众星捧月’的政治格局。3. 宗法制：以血缘亲疏确立继承权，核心是嫡长子继承制。4. 井田制：当时的土地国有制度。5. 礼乐制：通过严格的礼仪规范社会等级。",
        impact: "确立了影响中国数千年的宗法文化与政治框架。‘天命’观的提出，标志着中国政治思想从神权向德治的演变，对儒家思想产生了决定性影响。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Western_Zhou_ritual_bronze_vessel.jpg/640px-Western_Zhou_ritual_bronze_vessel.jpg",
        quiz: [
            {
                question: "西周为了巩固统治，在政治上实行什么制度？",
                options: ["郡县制", "分封制", "行省制", "三省六部制"],
                answer: "分封制"
            },
            {
                question: "周武王灭商的关键战役是？",
                options: ["涿鹿之战", "牧野之战", "巨鹿之战", "长平之战"],
                answer: "牧野之战"
            }
        ]
    },
    {
        name: "东周",
        time: "公元前770年 — 公元前256年",
        founder: "周平王",
        capital: "洛邑（今河南洛阳）",
        events: "1. 春秋争霸：齐桓公、晋文公等相继称霸，王室衰微。2. 战国混战：七国兼并战争不断，社会发生剧变。3. 商鞅变法：在秦国推行法家思想，奠定秦国统一基础。4. 百家争鸣：儒、墨、道、法、兵等学派竞相迸发，思想极度活跃。5. 生产工具：铁制农具和牛耕开始推广。",
        impact: "中国历史上最深刻的社会转型期。它打破了旧的宗法制度，确立了中央集权制的萌芽，造就了中华民族思想文化的‘轴心时代’。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Warring_States_Period_bronze_vessel.jpg/640px-Warring_States_Period_bronze_vessel.jpg",
        quiz: [
            {
                question: "春秋战国时期，思想文化空前繁荣的局面被称为？",
                options: ["罢黜百家", "百家争鸣", "独尊儒术", "文字狱"],
                answer: "百家争鸣"
            },
            {
                question: "使秦国国力大增，为统一六国奠定基础的改革是？",
                options: ["管仲改革", "商鞅变法", "吴起变法", "李悝变法"],
                answer: "商鞅变法"
            }
        ]
    },
    {
        name: "秦",
        time: "公元前221年 — 公元前207年",
        founder: "秦始皇（嬴政）",
        capital: "咸阳",
        events: "1. 统一六国：结束长达数百年的分裂。2. 皇帝制度：首创‘皇帝’称号，权力高度集中。3. 郡县制：废分封，全国设郡县。4. 统一标准化：书同文、车同轨、统一度量衡。5. 万里长城：修筑抵御匈奴的长城。6. 暴政与起义：沉重的徭役引发陈胜吴广起义。",
        impact: "中国历史上第一个大一统的中央集权封建帝国。秦朝确立的政治体制、官僚体系和领土规模，奠定了此后两千多年中国历史的基调。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Terracotta_warriors_in_Xian.jpg/640px-Terracotta_warriors_in_Xian.jpg",
        quiz: [
            {
                question: "秦朝在地方推行的制度是？",
                options: ["分封制", "郡县制", "行省制", "三省六部制"],
                answer: "郡县制"
            },
            {
                question: "秦始皇统一后，作为全国规范文字的是？",
                options: ["甲骨文", "金文", "小篆", "隶书"],
                answer: "小篆"
            }
        ]
    },
    {
        name: "汉",
        time: "公元前202年 — 公元220年",
        founder: "汉高祖（刘邦）",
        capital: "长安、洛阳",
        events: "1. 文景之治：推行休养生息，开启封建社会第一个治世。2. 汉武帝集权：‘罢黜百家，独尊儒术’，盐铁官营。3. 丝绸之路：张骞出使西域，开启中西经贸文化交流。4. 造纸术：东汉蔡伦改进造纸术，文化传播革命。5. 科学技术：张衡发明候风地动仪。",
        impact: "汉朝是中国最强盛的时期之一。汉族、汉字、汉文化的命名均源于此。它开辟的陆上丝绸之路，使中国开始在世界舞台上展现巨大的文化吸引力。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Han_Dynasty_pottery_warrior.jpg/640px-Han_Dynasty_pottery_warrior.jpg",
        quiz: [
            {
                question: "汉武帝接受董仲舒建议，在思想上采取的措施是？",
                options: ["焚书坑儒", "百家争鸣", "‘罢黜百家，独尊儒术’", "文字狱"],
                answer: "‘罢黜百家，独尊儒术’"
            },
            {
                question: "被誉为连接东西方贸易与文化的桥梁是？",
                options: ["京杭大运河", "丝绸之路", "灵渠", "都江堰"],
                answer: "丝绸之路"
            }
        ]
    },
    {
        name: "三国",
        time: "220年 — 280年",
        founder: "曹丕（魏）、刘备（汉）、孙权（吴）",
        capital: "洛阳、成都、建业（今南京）",
        events: "1. 官渡之战：曹操统一北方。2. 赤壁之战：孙刘联军击败曹操，奠定鼎立基础。3. 诸葛亮治蜀：发展西南经济，平定南中。4. 魏国屯田：解决军粮供应，恢复农业生产。5. 吴国海运：孙权派卫温到达夷洲（今台湾）。",
        impact: "英雄史诗般的时代，虽然政权割据，但各国为求自强积极开发边远地区（如江南、西南），促进了局部地区的开发和民族大融合。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Red_Cliffs_in_Huangzhou_by_Wu_Yuanzhi.jpg/640px-Red_Cliffs_in_Huangzhou_by_Wu_Yuanzhi.jpg",
        quiz: [
            {
                question: "奠定三国鼎立局面的关键战役是？",
                options: ["官渡之战", "赤壁之战", "巨鹿之战", "淝水之战"],
                answer: "赤壁之战"
            }
        ]
    },
    {
        name: "两晋",
        time: "266年 — 420年",
        founder: "司马炎（西晋）",
        capital: "洛阳、建康（今江苏南京）",
        events: "1. 太康之治：西晋短暂的统一与繁荣。2. 八王之乱：统治阶层激烈内斗导致国力迅速衰落。3. 衣冠南渡：北方人口大规模南迁，促进了南方大开发。4. 淝水之战：东晋以少胜多大败前秦，保住南方汉文化。5. 门阀士族：琅琊王氏等大士族左右政局。",
        impact: "中国历史上的大分裂、大迁徙时期。北方民族入主中原导致文化碰撞，南方开发则使中国经济重心开始出现南移趋势，思想上玄学与佛道兴起。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Seven_Sages_of_the_Bamboo_Grove_brick_relief.jpg/640px-Seven_Sages_of_the_Bamboo_Grove_brick_relief.jpg",
        quiz: [
            {
                question: "导致西晋灭亡，北方陷入长期混乱的主要原因是？",
                options: ["黄巾起义", "八王之乱与五胡乱华", "陈胜吴广起义", "安史之乱"],
                answer: "八王之乱与五胡乱华"
            }
        ]
    },
    {
        name: "南北朝",
        time: "420年 — 589年",
        founder: "多个政权（刘裕、拓跋珪等）",
        capital: "建康、平城、洛阳等",
        events: "1. 北魏孝文帝改革：强制推行汉服、汉姓、汉话，极大促进民族融合。2. 宗教盛行：佛教广泛传播，开凿龙门、云冈等石窟艺术。3. 农业成就：贾思勰撰写《齐民要术》，中国现存最早最完整的农书。4. 数学：祖冲之将圆周率精确到小数点后七位。",
        impact: "民族大交融的深度时期。南北文化的碰撞与互补，不仅丰富了中华文化的内涵，也为隋唐大一统王朝的崛起积累了雄厚的制度和物质力量。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Longmen_Grottoes_Fengxian_Temple.jpg/640px-Longmen_Grottoes_Fengxian_Temple.jpg",
        quiz: [
            {
                question: "北魏孝文帝改革的核心目标是？",
                options: ["扩充军队", "推行汉化，促进融合", "废除科举", "迁都长安"],
                answer: "推行汉化，促进融合"
            }
        ]
    },
    {
        name: "隋",
        time: "581年 — 618年",
        founder: "隋文帝（杨坚）",
        capital: "大兴（今陕西西安）",
        events: "1. 统一全国：589年灭陈，结束近三百年的大分裂。2. 科举制诞生：隋炀帝设进士科，开启中国一千多年人才选拔制度。3. 大运河开凿：全长两千多公里，极大便利了南北交通与交流。4. 三省六部制：进一步完善中央集权官僚体制。",
        impact: "短暂却极其伟大的过渡王朝。它创立的科举制、三省六部制以及大运河，为唐朝的长期繁荣奠定了坚实的政治与经济基础。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Anji_Bridge.jpg/640px-Anji_Bridge.jpg",
        quiz: [
            {
                question: "中国历史上对选官制度影响最深远的科举制，始于哪个朝代？",
                options: ["汉朝", "隋朝", "唐朝", "宋朝"],
                answer: "隋朝"
            },
            {
                question: "隋朝开凿的、沟通南北交通的重要工程是？",
                options: ["都江堰", "郑国渠", "京杭大运河", "灵渠"],
                answer: "京杭大运河"
            }
        ]
    },
    {
        name: "唐",
        time: "618年 — 907年",
        founder: "唐高祖（李渊）",
        capital: "长安（今陕西西安）",
        events: "1. 贞观之治：唐太宗任人唯贤，开创盛世。2. 开元盛世：唐朝国力达到封建时代巅峰。3. 武周夺权：武则天成为中国唯一正统女皇。4. 安史之乱：藩镇叛乱导致唐朝由盛转衰。5. 文化巅峰：诗歌繁荣（李杜），书法绘画名家辈出。6. 对外交流：玄奘西行取经，鉴真东渡传法。",
        impact: "中国封建社会的最高峰。唐朝以其强大的国力、灿烂的文化和开放的心态，成为当时世界的经济文化中心，对周边文明产生了深远的影响。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tang_Dynasty_Tri-color_Glazed_Pottery_Horse.jpg/640px-Tang_Dynasty_Tri-color_Glazed_Pottery_Horse.jpg",
        quiz: [
            {
                question: "唐朝由盛转衰的标志性事件是？",
                options: ["玄武门之变", "安史之乱", "黄巢起义", "朱温篡唐"],
                answer: "安史之乱"
            },
            {
                question: "唐太宗时期出现的治世局面被称为？",
                options: ["开皇之治", "贞观之治", "开元盛世", "康乾盛世"],
                answer: "贞观之治"
            }
        ]
    },
    {
        name: "五代十国",
        time: "907年 — 960年",
        founder: "多个政权（朱温、李存勖等）",
        capital: "多个",
        events: "1. 藩镇割据：唐末军阀混乱状态的延续。2. 中原五代更替：后梁、后唐、后晋、后汉、后周。3. 幽云十六州丢失：石敬瑭割让，致使北方门户大开。4. 南方相对安定：吴、南唐、吴越等十国经济文化持续发展。",
        impact: "唐宋之间的分裂过渡期。虽然政治动荡，但南方的稳定发展使中国经济中心进一步南移，为宋朝的经济大繁荣做好了铺垫。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Five_Dynasties_painting_of_Deer_in_a_maple_forest.jpg/640px-Five_Dynasties_painting_of_Deer_in_a_maple_forest.jpg",
        quiz: [
            {
                question: "五代十国时期的本质是？",
                options: ["农民起义", "藩镇割据的延续", "民族战争", "科举制废除"],
                answer: "藩镇割据的延续"
            }
        ]
    },
    {
        name: "宋",
        time: "960年 — 1279年",
        founder: "宋太祖（赵匡胤）",
        capital: "汴京（开封）、临安（杭州）",
        events: "1. 陈桥兵变：宋太祖黄袍加身，建立宋朝。2. 重文轻武：通过‘杯酒释兵权’，确立文人治国政策。3. 澶渊之盟：与辽朝达成和平协议。4. 科技革命：活字印刷术、指南针应用，火药武器化。5. 城市生活：‘瓦子’勾栏兴起，取消宵禁。6. 经济中心南移：‘苏湖熟，天下足’。",
        impact: "中国历史上经济、文化、科技最发达的时期。虽然军事上相对被动，但宋朝在市民文化、海外贸易和学术思想上达到了古代中国的新高度。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Along_the_River_During_the_Qingming_Festival_%28Kaifeng%29.jpg/640px-Along_the_River_During_the_Qingming_Festival_%28Kaifeng%29.jpg",
        quiz: [
            {
                question: "北宋为了加强中央集权，实行的基本国策是？",
                options: ["重农抑商", "重武轻文", "重文轻武", "闭关锁国"],
                answer: "重文轻武"
            },
            {
                question: "活字印刷术的发明者是？",
                options: ["蔡伦", "毕昇", "沈括", "郭守敬"],
                answer: "毕昇"
            }
        ]
    },
    {
        name: "元",
        time: "1271年 — 1368年",
        founder: "元世祖（忽必烈）",
        capital: "大都（今北京）",
        events: "1. 蒙古征服：建立横跨欧亚的帝国。2. 灭宋：崖山之战。3. 行省制确立：建立行省作为地方最高行政机构。4. 民族融合：回族正式形成。5. 对外贸易：海上丝绸之路繁荣。6. 西藏管理：宣政院正式管辖西藏。",
        impact: "第一个由少数民族建立的全国大一统王朝。元朝极大拓宽了中国版图，强化了对边疆地区的直接管辖，促进了东西方文明的直接对话。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Kublai_Khan.jpg/640px-Kublai_Khan.jpg",
        quiz: [
            {
                question: "元朝为了管理辽阔的疆域，在地方实行什么制度？",
                options: ["郡县制", "分封制", "行省制", "三省六部制"],
                answer: "行省制"
            },
            {
                question: "哪个机构的设立标志着西藏正式归属中央管辖？",
                options: ["西域都护府", "宣政院", "驻藏大臣", "伊犁将军"],
                answer: "宣政院"
            }
        ]
    },
    {
        name: "明",
        time: "1368年 — 1644年",
        founder: "明太祖（朱元璋）",
        capital: "应天（南京）、北京",
        events: "1. 皇权强化：废除丞相，设立锦衣卫、东厂。2. 郑和下西洋：最远到达非洲东岸。3. 边疆防卫：大规模修筑长城，抵御蒙古和女真。4. 文学成就：白话小说流行，《三国》《西游》等成书。5. 科技总结：宋应星《天工开物》、李时珍《本草纲目》。",
        impact: "明朝是中国封建制度高度完善并趋于保守的时期。它一方面展示了宏大的航海成就，另一方面也逐渐陷入了严密的专制统治，封建社会开始走向衰落。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Forbidden_City_in_Beijing.jpg/640px-Forbidden_City_in_Beijing.jpg",
        quiz: [
            {
                question: "明朝初期，为了加强皇权，朱元璋废除了什么职位？",
                options: ["尚书", "丞相", "中书令", "节度使"],
                answer: "丞相"
            },
            {
                question: "派遣郑和七次下西洋的明朝皇帝是？",
                options: ["明太祖", "明成祖", "明仁宗", "明宣宗"],
                answer: "明成祖"
            }
        ]
    },
    {
        name: "清",
        time: "1636年 — 1912年",
        founder: "皇太极（改国号为清）、顺治入关",
        capital: "北京",
        events: "1. 康乾盛世：中国版图基本奠定。2. 专制顶峰：雍正设立军机处。3. 思想压制：大兴文字狱。4. 闭关锁国：严格限制对外交流。5. 近代危机：鸦片战争后沦为半殖民地半封建社会。6. 救亡图存：洋务运动、百日维新、辛亥革命。",
        impact: "中国封建王朝的终结。它既达到了专制主义中央集权的极致，也经历了从传统走向现代的剧烈阵痛。辛亥革命的爆发，宣告了两千多年君主专制的结束。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/The_Qianlong_Emperor_in_Ceremonial_Armour_on_Horseback.jpg/640px-The_Qianlong_Emperor_in_Ceremonial_Armour_on_Horseback.jpg",
        quiz: [
            {
                question: "标志着中国两千多年封建君主专制制度终结的事件是？",
                options: ["洋务运动", "戊戌变法", "辛亥革命", "五四运动"],
                answer: "辛亥革命"
            },
            {
                question: "清朝实行的、导致中国在近代逐渐落后于世界的政策是？",
                options: ["重农抑商", "闭关锁国", "休养生息", "独尊儒术"],
                answer: "闭关锁国"
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

    // 增加“综合测试”按钮到时间轴末尾
    const finalQuizBtn = document.createElement('button');
    finalQuizBtn.className = 'dynasty-btn final-quiz-nav-btn';
    finalQuizBtn.textContent = "🏆 终极综合大考";
    finalQuizBtn.style.backgroundColor = "#bc6c25";
    finalQuizBtn.onclick = () => startFinalQuiz();
    timeline.appendChild(finalQuizBtn);

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
            
            // 处理 events 字符串，将其转换为带换行的列表
            const eventsHtml = d.events.split(/\d\.\s/).filter(s => s.trim()).map((s, i) => `<li>${s.trim()}</li>`).join('');
            document.getElementById('dynasty-events').innerHTML = `<ul>${eventsHtml}</ul>`;
            
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

    // 问答游戏功能（单朝代）
    document.getElementById('start-quiz-btn').onclick = () => {
        if (currentDynastyIndex === -1) return;
        const d = dynasties[currentDynastyIndex];
        renderQuiz(`${d.name}朝知识挑战`, d.quiz);
    };

    // 综合测试逻辑
    function startFinalQuiz() {
        // 随机从所有朝代中抽取 15 道题，增加难度
        const allQuestions = dynasties.flatMap(d => d.quiz);
        const shuffled = allQuestions.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 15);
        renderQuiz("🏆 中国古代史全能挑战（随机15题）", selected);
    }

    function renderQuiz(title, questions) {
        const quizContainer = document.getElementById('quiz-questions');
        document.getElementById('quiz-title').textContent = title;
        quizContainer.innerHTML = '';

        questions.forEach((q, index) => {
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
    }

    document.getElementById('close-quiz-btn').onclick = () => {
        quizModal.classList.remove('visible');
        setTimeout(() => quizModal.style.display = 'none', 300);
    };

    function checkAnswer(event, selected, correct) {
        const optionButtons = event.target.parentElement.childNodes;
        optionButtons.forEach(btn => btn.disabled = true); 

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