// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 1,
		content:
			"测试文档",
		date: "2025-11-21T18:27:00Z",
		images: ["/images/diary/望舒客栈.webp", "/images/diary/风起地.webp"],
	},
	{
		id: 3,
		content:
			"1.更改内容至projec.ts或astro文件，下次注意重点更改尘世之外内容（主体为timeline.ts）。\n2.利用npm run build来生成dist文件夹。\n3.将dist文件夹内的内容上传至服务器。",
		date: "2025-12-02T19:24:00Z",
	},
	{
		id: 4,
		content:
			" 1.更改内容至timeline.ts或astro文件,重点更改尘世之外内容2.添加友链从15到21个3.添加“如何正确添加友链”文章一篇",
		date: "2025-12-03T17:19:00Z",
	},
	{
		id: 5,
		content:
			" 1.添加音乐曲目至14首 2.更改博客主题文字架构 3.添加新网站至projects.ts",
		date: "2025-12-03T18:29:00Z",
	},
	{
		id: 6,
		content:
			" 1.更改（优化）音乐曲目（播放器）至14首  2.添加新友链至21位 3.添加文章“音乐（播放器）的优化/相册的更新方法/《于舟》 4、添加两个相册 ",
		date: "2025-12-16T21:43:00Z",
	},
	{
		id: 7,
		content:
			" 1.添加文章《Mizuki托管至Cloudflare Pages》2.优化全部文章/更新一篇日记 3.config.ts网址标头更改 4.注意下次重点更新文章Git部分 ",
		date: "2025-12-16T21:43:00Z",
	},
	{
		id: 8,
		content:
			" 1.优化文章《如何使用Github-全球最大的同性交友网站》2.优化全部文章/更新一篇日记 3.config.ts/assets/images/avatar.webp更改 4.重点更新文章Git部分 ",
		date: "2025-12-25T11:05:00Z",
	},
];

// 获取日记统计数据
export const getDiaryStats = () => {
	const total = diaryData.length;
	const hasImages = diaryData.filter(
		(item) => item.images && item.images.length > 0,
	).length;
	const hasLocation = diaryData.filter((item) => item.location).length;
	const hasMood = diaryData.filter((item) => item.mood).length;

	return {
		total,
		hasImages,
		hasLocation,
		hasMood,
		imagePercentage: Math.round((hasImages / total) * 100),
		locationPercentage: Math.round((hasLocation / total) * 100),
		moodPercentage: Math.round((hasMood / total) * 100),
	};
};

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = diaryData.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取最新的日记
export const getLatestDiary = () => {
	return getDiaryList(1)[0];
};

// 根据ID获取日记
export const getDiaryById = (id: number) => {
	return diaryData.find((item) => item.id === id);
};

// 获取包含图片的日记
export const getDiaryWithImages = () => {
	return diaryData.filter((item) => item.images && item.images.length > 0);
};

// 根据标签筛选日记
export const getDiaryByTag = (tag: string) => {
	return diaryData
		.filter((item) => item.tags?.includes(tag))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	diaryData.forEach((item) => {
		if (item.tags) {
			item.tags.forEach((tag) => tags.add(tag));
		}
	});
	return Array.from(tags).sort();
};

export default diaryData;
