// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "game" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "current-study",
		title: "崩坏三-HonKai Impact",
		description:
			"为世界所有美好而战.",
		type: "game",
		startDate: "2025-04-02",
		location: "Shanghai",
		organization: "MIHOYO",
		skills: ["destruction","lily","salvation"],
		icon: "material-symbols:school",
		color: "#ef4a2dff",
		featured: true,
	},
	{
		id: "current-study",
		title: "原神-Genshin Impact",
		description:
			"只要你不失去崇高，整个世界都将为你敞开.",
		type: "game",
		startDate: "2021-05-04",
		location: "Shanghai",
		organization: "MIHOYO",
		skills: ["Brother and sister", "exploration", "open world"],
		icon: "material-symbols:school",
		color: "#1b89e2ff",
		featured: true,
	},
	{
		id: "current-study",
		title: "绝区零-ZenlessZoneZero",
		description:
			"世界全剧终，欢迎来到新艾利都",
		type: "game",
		startDate: "2024-07-14",
		location: "Shanghai",
		organization: "MIHOYO",
		skills: ["doomsday", "salvation", "hollow"],
		icon: "material-symbols:school",
		color: "#4de4b4ff",
		featured: true,
	},
	{
		id: "current-study",
		title: "星布谷地-Starbound",
		description:
			"一起创造更美好的明天.",
		type: "achievement",
		startDate: "2026-1-15",
		location: "shanghai",
		organization: "MIHOYO",
		skills: ["create", "socialize","AI"],
		icon: "material-symbols:emoji-events",
		color: "#8a5cd8ff",
	},
	{
		id: "current-study",
		title: "我的世界-Minecraft",
		description:
			"创造你想拥有的世界.",
		type: "education",
		startDate: "2017-09-05",
		location: "USA",
		organization: "Mojang",
		skills: ["creative", "survival, ", "leisure"],
		icon: "material-symbols:school",
		color: "#b2d524ff",
		featured: true,
	},

];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "game").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "game");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
