// pages/writeWords_content/writeWords_content.js
Page({
	data: {
		index:0,
		rate_word:'0%',
		wordsList:[
			{
				wordId: 10696,
				word: "yearly",
				soundMark: "'jɪrli",
				interpretation: [
				"adj.每年的",
				"adv.每年地；一年一次地"
				],
				sentences: [
				"The yearly conference will be held next month.",
				"年会下个月举行。",
				"Many Greek cities had to send yearly tribute to Athens.",
				"许多希腊城市不得不每年向雅典进贡。",
				"Property values appreciated yearly.",
				"财产价值每年都在增大。",
				"The meeting is held yearly.",
				"会议每年举行一次。"
				],
				inflexion: "名词复数: yearlies ",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 0,
				degree: 0
				},
				{
				wordId: 10697,
				word: "yell",
				soundMark: "jel",
				interpretation: [
				"n.大喊",
				"v.大叫"
				],
				sentences: [
				"Don't yell at me!",
				"别对我大喊大叫！",
				"You don't have to yell; I can hear you.",
				"你用不著喊，我听得见。",
				"She yelled out at her mischievous child.",
				"她对她淘气的孩子大喊大叫。",
				"We yelled our good-byes as the bus left.",
				"汽车离开时我们大喊再见。",
				"She let out a yell and ran home.",
				"她尖叫了一声跑回了家。"
				],
				inflexion: "名词: yeller 过去式: yelled 过去分词: yelled 现在分词: yelling 第三人称单数: yells ",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 1,
				degree: 0
				},
				{
				wordId: 10698,
				word: "yellow",
				soundMark: "'jeloʊ",
				interpretation: [
				"n.黄色；蛋黄；黄种人",
				"adj.黄色的",
				"v.（使）变黄"
				],
				sentences: [
				"The leaves turn yellow in autumn.",
				"秋天时叶子变黄。",
				"The leaves of the book had yellowed with age.",
				"书页因年久而变黄。",
				"She wore on her head a yellow kerchief.",
				"她头上带着一块黄色的头巾。",
				"Sunflowers are large flowers with yellow petals.",
				"向日葵是长着黄色花瓣的大花。",
				"Yellow is the prevailing color in her room.",
				"黄色是她房间的主色。",
				"The pages of the book began to yellow.",
				"书页开始发黄了。"
				],
				inflexion: "比较级: yellower 最高级: yellowest 名词: yellowness 过去式: yellowed 过去分词: yellowed 现在分词: yellowing 第三人称单数: yellows ",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 3,
				degree: 0
				},
				{
				wordId: 10699,
				word: "yes",
				soundMark: "jes",
				interpretation: [
				"n.是（表示肯定）",
				"adv.是；是的",
				"v.对…说是"
				],
				sentences: [
				"Yes, monsieur.",
				"是，先生。",
				"Yes, you're quite right.",
				"是的，你很对。",
				"Yes, I don't see why not.",
				"是的，我看不出有什么不好。",
				"Yes, it's still in my mind.",
				"是的，这事仍在我的记忆里。",
				"Answer yes or no.",
				"回答是或者不是。",
				"The boy kept yessing when his father was talking with him.",
				"那个男孩在他爸爸对他说话时连声说是。"
				],
				inflexion: "名词复数: yeses 过去式: yessed 过去分词: yessed 现在分词: yessing 第三人称单数: yeses ",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 2,
				degree: 0
				},
				{
				wordId: 10700,
				word: "yesterday",
				soundMark: "'jestərdeɪ",
				interpretation: [
				"n.昨天；近来",
				"adv.昨天；近来"
				],
				sentences: [
				"Yesterday was Friday.",
				"昨天是星期五。",
				"I saw him only yesterday.",
				"我昨天才见到他。",
				"She had an attack of indigestion yesterday.",
				"她昨天消化不良。"
				],
				inflexion: "",
				isCollect: null,
				studyNum: null,
				writeNum: null,
				testRequency: 1,
				degree: 0
				},
				{
				wordId: 10703,
				word: "young",
				soundMark: "jʌŋ",
				interpretation: [
				"n.青年人；幼崽",
				"adj.年轻的；初期的；没有经验的"
				],
				sentences: [
				"The young look is in fashion this year.",
				"今年时兴扮年轻人的样子。",
				"Those clothes she's wearing are much too young for her.",
				"她穿的那些衣服显得太年轻了。",
				"The evening is still young.",
				"晚间刚开始不久。",
				"He was young in this kind of work.",
				"他对这种工作经验不多。",
				"The young in our society need care and protection.",
				"我们社会的年轻人需要关怀和照顾。"
				],
				inflexion: "比较级: younger 最高级: youngest 名词: youngness ",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 3,
				degree: 0
				},
				{
				wordId: 10707,
				word: "yourself",
				soundMark: "jɔːr'self",
				interpretation: [
				"pron.你(们)自己；你(们)亲自"
				],
				sentences: [
				"Forget yourself and think of someone else for a change.",
				"别光想著你自己，你也为别人想一次。",
				"Please make yourself at home.",
				"请别客气。",
				"You've only yourself to blame.",
				"你只能怪你自己。",
				"Please don't blame yourself.",
				"请不要责怪你自己。"
				],
				inflexion: "",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 0,
				degree: 0
				},
				{
				wordId: 10710,
				word: "zebra",
				soundMark: "'zebrə",
				interpretation: [
				"n.斑马；斑马线"
				],
				sentences: [
				"Seemingly everyone likes the zebra.",
				"似乎每个人都喜欢斑马。",
				"The neck of the zebra was nipped by a lion.",
				"狮子咬断了那头斑马的脖子。",
				"There was only one big road to cross, but it had a zebra crossing.",
				"只有一条大路要过，但它有斑马线。"
				],
				inflexion: "",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 2,
				degree: 0
				},
				{
				wordId: 10713,
				word: "zinc",
				soundMark: "zɪŋk",
				interpretation: [
				"n. 锌",
				"vt. 在 ... 上镀锌"
				],
				sentences: [
				"The fusion of copper and zinc make the metal brass.",
				"铜和锌的熔化制成黄铜。",
				"Zinc is generally caustic to foliage.",
				"锌常对幼叶有腐蚀作用。"
				],
				inflexion: "简写符号: Zn 过去式: zinced/zincked 过去分词: zinced/zincked 现在分词: zincing/zincking 第三人称单数: zincs/zincks ",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 1,
				degree: 0
				},
				{
				wordId: 10717,
				word: "zoom",
				soundMark: "zuːm",
				interpretation: [
				"n.急速上升；嗡嗡声；(摄影)变焦",
				"v.急速上升；嗡嗡作响；（镜头）拉近（拉远）"
				],
				sentences: [
				"Overnight trading caused share prices to zoom up.",
				"一夜的交投使股票价格直线上升。",
				"We heard a jet plane zooming overhead.",
				"我们听见喷射机在头上嗡嗡作响。",
				"If you zoom out at this point, we shall get a view of the whole square.",
				"如果你在此地把镜头推远，我们将看到整个广场。",
				"The airplane' s zoom carried it above the clouds.",
				"飞机的陡直上升使它飞到云层之上。"
				],
				inflexion: "过去式: zoomed 过去分词: zoomed 现在分词: zooming 第三人称单数: zooms ",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 3,
				degree: 0
				},
				{
				wordId: 10718,
				word: "baby",
				soundMark: "'beɪbi",
				interpretation: [
				"n.婴儿；宝贝儿；孩子气的人",
				"adj.婴儿的；小型的",
				"vt.溺爱"
				],
				sentences: [
				"She gave birth to a fine healthy baby.",
				"她生了一个健康漂亮的婴儿。",
				"The mother rocked the baby to sleep in its cradle.",
				"母亲摇动摇篮使婴儿入睡。",
				"We've turned the smallest bedroom into a nursery for our new baby.",
				"我们已将最小的那间卧室改成新生婴儿的幼儿室。",
				"Baby, come on, let's go home, I'm tired.",
				"宝贝儿，快点儿，我们回家吧，我累了。",
				"Since 2001, organic baby food sales have jumped 63%.",
				"从2001年以来,有机婴儿食品销售额已上升63%25。",
				"Don't baby the boy.",
				"别惯这孩子。"
				],
				inflexion: "形容词: babyish 比较级: babier 最高级: babiest 名词: babyhood 名词复数: babies 过去式: babied 过去分词: babied 现在分词: babying 第三人称单数: babies ",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 2,
				degree: 0
				},
				{
				wordId: 10719,
				word: "bachelor",
				soundMark: "'bætʃələr",
				interpretation: [
				"n.单身汉；学士"
				],
				sentences: [
				"You have the alternative of marrying or remaining a bachelor.",
				"你可以结婚也可以仍做单身汉，任你选择。",
				"He remained a bachelor all his life.",
				"他终生未娶。",
				"Are you a Bachelor of Arts?",
				"你是文学学士吗？",
				"Bush graduated from Yale with a bachelor's degree in history in 1968,",
				"布什1968年从耶鲁大学毕业，获历史学学士学位，"
				],
				inflexion: "名词: backelordom ",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 3,
				degree: 0
				},
				{
				wordId: 10722,
				word: "backward",
				soundMark: "'bækwərd",
				interpretation: [
				"adj.向后的；落后的",
				"adv.向后"
				],
				sentences: [
				"He took a backward step and ran away.",
				"他向后退了一步,跑了。",
				"This part of the country is still backward.",
				"这个国家的这个地区仍很落后。",
				"Although he is clever, he is backward in giving his views.",
				"他虽然很聪明，却不善发表他的意见。",
				"He looked backward over his shoulder.",
				"他回头向后看。"
				],
				inflexion: "副词: backwardly 名词: backwardness ",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 3,
				degree: 0
				},
				{
				wordId: 10726,
				word: "badge",
				soundMark: "bædʒ",
				interpretation: [
				"n.象征；标记；徽章；证章",
				"vt.授给 ... 徽章"
				],
				sentences: [
				"Chains are a badge of slavery.",
				"锁链是奴役的标志。",
				"The olive leaf is a badge of peace.",
				"橄榄叶是和平的象征。",
				"What is that badge on your lapel?",
				"你翻领上的是什么徽章?",
				"He was awarded a merit badge for his bravery in the battle.",
				"他因为在战斗中的勇猛被授予一枚奖章。"
				],
				inflexion: "",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 2,
				degree: 0
				},
				{
				wordId: 10729,
				word: "bag",
				soundMark: "bæɡ",
				interpretation: [
				"n.袋；袋状物；包；一袋的量",
				"vi.（如袋子般）松垂",
				"vt.把 ... 装进袋子；使膨胀；猎杀"
				],
				sentences: [
				"He lost his travelling bag when he crossed the desert.",
				"他在穿越沙漠的时候丢失了他的旅行袋。",
				"The boxer's fist thumped into the punching bag.",
				"拳师猛击吊袋。",
				"He put his bag on the luggage rack.",
				"他把包放在行李架上。",
				"The cat had not been fed for weeks and was just a bag of bones.",
				"那只猫已有几个星期没喂食了，简直成了皮包骨。",
				"They bagged the potatoes to sell them.",
				"他们把土豆装入袋中出售。"
				],
				inflexion: "名词: bagful 过去式: bagged 过去分词: bagged 现在分词: bagging 第三人称单数: bags ",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 2,
				degree: 0
				},
				{
				wordId: 10730,
				word: "baggage",
				soundMark: "'bæɡɪdʒ",
				interpretation: [
				"n.行李"
				],
				sentences: [
				"Let me put your baggage in the trunk.",
				"我来把你的行李放在汽车后部的行李箱内。",
				"Our baggage has cleared customs.",
				"我们的行李已通过海关检查。"
				],
				inflexion: "",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 1,
				degree: 0
				},
				{
				wordId: 10731,
				word: "bait",
				soundMark: "beɪt",
				interpretation: [
				"n.饵；引诱",
				"v.以饵引诱；逗弄；中途休息"
				],
				sentences: [
				"The fish snapped at the bait.",
				"那鱼一下子咬住了鱼饵。",
				"Earth worms are often used as bait.",
				"蚯蚓常用作鱼饵。",
				"The steaming cake was a bait for the hungry boy.",
				"那热气腾腾的蛋糕对这个饥饿的男孩是个诱惑。",
				"As soon as I mentioned money he rose to the bait, and became really interested.",
				"我一提钱他便怦然心动，上了我的钩。",
				"They bait the mousetrap with stale cheese.",
				"他们用变质的乳酪作捕鼠夹的诱饵。"
				],
				inflexion: "名词: baiter 过去式: baited 过去分词: baited 现在分词: baiting 第三人称单数: baits ",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 0,
				degree: 0
				},
				{
				wordId: 10739,
				word: "ballot",
				soundMark: "'bælət",
				interpretation: [
				"n.投票；投票用纸",
				"vi.投票"
				],
				sentences: [
				"We should put it to a ballot.",
				"我们应该对此进行无记名投票。",
				"He was elected by ballot.",
				"他是由无记名投票选举的。",
				"The new act stipulates that election to union office shall be by secret ballot of members.",
				"新法规定工会职位的选举将由会员秘密投票方式进行。",
				"Each voter receives a unique ballot code.",
				"每一个投票人会收到一个独一的选票号码。",
				"They decided to ballot for competing lanes.",
				"他们决定抽签选择比赛跑道。"
				],
				inflexion: "名词: balloter 过去式: balloted 过去分词: balloted 现在分词: balloting 第三人称单数: ballots ",
				isCollect: 0,
				studyNum: 0,
				writeNum: 0,
				testRequency: 3,
				degree: 0
				}
		],
		message: '',
		error_msg:''
	},
	onLoad(){
		// var model = decodeURIComponent(options.wordsList);
		// var wordsList = JSON.parse(model);
		// console.log(wordsList);
		
		console.log(wordsList);
		this.setData({
			rate_word:(this.data.index+1)/(this.data.wordsList.length) *100+'%'
		});
	},
	onClickIcon() {
		wx.showToast({
		  icon: 'none',
		  title: '点击图标'
		});
	  },
	nextWord() {
		var that = this;
		if (that.data.index < this.data.wordsList.length - 1) {
			this.setData({
				index: that.data.index + 1,
			});
			this.setData({
				rate_word:(this.data.index+1)/(this.data.wordsList.length) *100+'%'
			});
		}
		else{
			setTimeout(function(){
				wx.reLaunch({
				url: './../writeWords/writeWords',
				})
				// that.setData({
				// 	isSelected:1
			   	// })  
			}, 2000);
			wx.showToast({
				title: '本轮学习结束啦',
				icon: 'none',
				duration: 2000
			})
			
		}
	}
})

