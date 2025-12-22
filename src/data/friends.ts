// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
	},
	{
		id: 2,
		title: "Mizuki Docs",
		imgurl:
			"http://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg",
		desc: "Mizuki User Manual",
		siteurl: "https://docs.mizuki.mysqil.com",
		tags: ["Docs"],
	},
	
	{
		id: 3,
		title: "Tailwind CSS",
		imgurl: "https://avatars.githubusercontent.com/u/67109815?v=4&s=640",
		desc: "A utility-first CSS framework for rapidly building custom designs",
		siteurl: "https://tailwindcss.com",
		tags: ["CSS", "Framework"],
	},
	{
		id: 4,
		title: "TypeScript",
		imgurl: "https://avatars.githubusercontent.com/u/6154722?v=4&s=640",
		desc: "TypeScript is JavaScript with syntax for types",
		siteurl: "https://www.typescriptlang.org",
		tags: ["Language", "JavaScript"],
	},
	{
		id: 5,
		title: "React",
		imgurl: "https://www.fangpi.net/static/img/logo.png",
		desc: "一个免费的音乐下载网站",
		siteurl: "https://www.fangpi.net/",
		tags: ["Framework", "JavaScript"],
	},
	{
		id: 6,
		title: "放屁音乐网",
		imgurl: "https://avatars.githubusercontent.com/u/7565578?v=4&s=640",
		desc: "The web's most comprehensive resource for web developers",
		siteurl: "https://developer.mozilla.org",
		tags: ["免费", "音乐"],
	},
	{
		id: 7,
		title: "GitHub",
		imgurl: "https://avatars.githubusercontent.com/u/9919?v=4&s=640",
		desc: "The world's largest same-sex communication website",
		siteurl: "https://github.com",
		tags: ["交友", "交流"],
	},
	
	{
		id: 8,
		title: "樱花动漫",
		imgurl: "https://n.sinaimg.cn/sinakd20240307s/37/w1080h1357/20240307/f244-a04148dc3b24fb354c22ef75f22c0a30.png",
		desc: "免费无广看动漫",
		siteurl: "https://yhdm.org.cn/",
		tags: ["动漫", "网站"],
	},
	{
		id: 9,
		title: "雨祁的link",
		imgurl: "https://tencentcdna.production.link3.cc/profile_images/1716876687233",
		desc: "雨祁的个人link",
		siteurl: "https://link3.cc/qtya",
		tags: ["Link", "House"],
	},
	{
		id: 10,
		title: "可可影视",
		imgurl: "https://img.maiyadi.com/20/imgfile/20250605/05113825qlcc.png",
		desc: "免费看大片",
		siteurl: "https://www.kkys02.com/",
		tags: ["影视", "看剧爽"],
	},
	{
		id: 11,
		title: "123导航",
		imgurl: "https://1231888.com/ico/qudongman.png",
		desc: "各类方便好用的导航网站",
		siteurl: "https://1231888.com/",
		tags: ["导航", "便捷"],
	},
	{
		id: 12,
		title: "果核剥壳",
		imgurl: "https://1231888.com/ico/guohe.png",
		desc: "一个强大的资源分享网站",
		siteurl: "https://www.ghxi.com/",
		tags: ["工具", "资源","免费"],
	},
	{
		id: 13,
		title: "RunningHub",
		imgurl: "https://www.runninghub.cn/_nuxt/avatar-8.04Gtl8Jg.png",
		desc: "强大的AI交互网站",
		siteurl: "https://www.runninghub.cn/",
		tags: ["AI", "交互"],
	},
	{
		id: 14,
		title: "驱动检查",
		imgurl: "https://iconfont.alicdn.com/p/illus/preview_image/iMGsOR8U8HfW/557ecb21-864b-4dec-b802-7e729dc22eb5.png",
		desc: "用户驱动检查索引工具",
		siteurl: "https://help.ldmnq.com/docs/PQ917d",
		tags: ["驱动", "索引","科技"],
	},
	{
		id: 15,
		title: "破解资源",
		imgurl: "https://1231888.com/ico/yiqiyuan.png",
		desc: "畅享免费游戏",
		siteurl: "https://www.gamer520.com/",
		tags: ["资源", "免费"],
	},
	{
		id: 16,
		title: "小游戏集合",
		imgurl: "https://1231888.com/wp-content/uploads/2020/01/ywdh-logo-ico.png",
		desc: "摸鱼小游戏合集",
		siteurl: "https://www.flysheep6.com/archives/category/%e5%b0%8f%e6%b8%b8%e6%88%8f-%e7%8b%ac%e7%ab%8b%e6%b8%b8%e6%88%8f",
		tags: ["小游戏", "资源"],
	},
	{
		id: 17,
		title: "萌娘百科",
		imgurl: "https://storage.moegirl.org.cn/moegirl/commons/6/65/Manjuu_logo3.png",
		desc: "萌娘百科，中文维基百科全站镜像",
		siteurl: "https://zh.moegirl.org.cn/Mainpage",
		tags: ["百科", "网站"],
	},
	{
		id: 18,
		title: "辅助吧",
		imgurl: "https://iconfont.alicdn.com/p/illus/preview_image/iMGsOR8U8HfW/75f86f56-364a-43f8-8444-c128292be2f3.png",
		desc: "有惊喜，直入便是",
		siteurl: "https://www.fuzhu86.net/",
		tags: ["科技", "资源","免费"],
	},
	{
		id: 19,
		title: "壁纸汇",
		imgurl: "https://iconfont.alicdn.com/p/illus/preview_image/iMGsOR8U8HfW/93306a13-76fd-4691-9617-c6444a407d77.png",
		desc: "海量4k壁纸",
		siteurl: "https://www.bizhihui.com/",
		tags: ["精美", "壁纸"],
	},
	{
		id: 20,
		title: "枫的主题社",
		imgurl: "https://iconfont.alicdn.com/p/illus/preview_image/iMGsOR8U8HfW/ab29a954-606f-4be7-9f45-871dff49a0ad.png",
		desc: "win的美化工具",
		siteurl: "https://winmoes.com/tools/12948.html",
		tags: ["美化", "工具"],
	},
	{
		id: 21,
		title: "AFOP",
		imgurl: "https://scarefree.cn/img/afop.png",
		desc:"偏居一隅-养老休闲整合包",
		siteurl: "https://scarefree.cn/p9/",
		tags: ["Minecraft", "休闲"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
