import post1 from "@/assets/post1.jpg";
import post2 from "@/assets/post2.jpg";
import post3 from "@/assets/post3.jpg";
import post4 from "@/assets/post4.jpg";
import post5 from "@/assets/post5.jpg";
import post6 from "@/assets/post6.jpg";
import post7 from "@/assets/post7.jpg";
import post8 from "@/assets/post8.jpg";
import post9 from "@/assets/post9.jpg";

export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio?: string;
  postsCount: number;
  followers: number;
  following: number;
  isVerified?: boolean;
  hasStory?: boolean;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
  isLiked: boolean;
  isSaved: boolean;
}

export interface Story {
  id: string;
  user: User;
  isSeen: boolean;
}

const avatarUrl = (seed: string) =>
  `https://api.dicebear.com/9.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

export const currentUser: User = {
  id: "me",
  username: "yourprofile",
  displayName: "Your Name",
  avatar: avatarUrl("yourprofile"),
  bio: "📸 Photography | ✈️ Travel | 🎨 Art\nLiving life one post at a time ✨",
  postsCount: 42,
  followers: 1234,
  following: 567,
  isVerified: false,
  hasStory: true,
};

export const users: User[] = [
  { id: "1", username: "sarah.travels", displayName: "Sarah Chen", avatar: avatarUrl("sarah"), postsCount: 312, followers: 45200, following: 892, isVerified: true, hasStory: true },
  { id: "2", username: "mike_photo", displayName: "Mike Rodriguez", avatar: avatarUrl("mike"), postsCount: 189, followers: 12300, following: 445, isVerified: false, hasStory: true },
  { id: "3", username: "foodie.jane", displayName: "Jane Kim", avatar: avatarUrl("jane"), postsCount: 567, followers: 89100, following: 234, isVerified: true, hasStory: false },
  { id: "4", username: "urban.lens", displayName: "Alex Thompson", avatar: avatarUrl("alex"), postsCount: 98, followers: 5600, following: 312, isVerified: false, hasStory: true },
  { id: "5", username: "puppy.love", displayName: "Emma Wilson", avatar: avatarUrl("emma"), postsCount: 234, followers: 156000, following: 123, isVerified: true, hasStory: true },
  { id: "6", username: "art.daily", displayName: "Leo Park", avatar: avatarUrl("leo"), postsCount: 445, followers: 34500, following: 567, isVerified: false, hasStory: false },
  { id: "7", username: "beach.vibes", displayName: "Mia Santos", avatar: avatarUrl("mia"), postsCount: 156, followers: 23400, following: 345, isVerified: false, hasStory: true },
  { id: "8", username: "cozy.autumn", displayName: "Olivia Brown", avatar: avatarUrl("olivia"), postsCount: 278, followers: 67800, following: 456, isVerified: true, hasStory: true },
];

export const posts: Post[] = [
  { id: "p1", user: users[0], image: post1, caption: "Golden hour at my favorite café ☕✨ Nothing beats the warmth of a quiet afternoon.", likes: 2341, comments: 89, timeAgo: "2h", isLiked: false, isSaved: false },
  { id: "p2", user: users[1], image: post2, caption: "Mountains calling 🏔️ This view was worth every step of the hike.", likes: 5672, comments: 234, timeAgo: "4h", isLiked: true, isSaved: true },
  { id: "p3", user: users[2], image: post3, caption: "Sunday brunch done right 🥑🍳 Recipe in bio!", likes: 12300, comments: 567, timeAgo: "6h", isLiked: false, isSaved: false },
  { id: "p4", user: users[3], image: post4, caption: "City lights after midnight 🌃 The streets tell stories.", likes: 890, comments: 45, timeAgo: "8h", isLiked: false, isSaved: false },
  { id: "p5", user: users[4], image: post5, caption: "Meet our newest family member! 🐕💛 Say hi to Biscuit!", likes: 34500, comments: 1200, timeAgo: "12h", isLiked: true, isSaved: true },
  { id: "p6", user: users[5], image: post6, caption: "New piece finished today 🎨 Emotions on canvas.", likes: 4560, comments: 178, timeAgo: "1d", isLiked: false, isSaved: false },
  { id: "p7", user: users[6], image: post7, caption: "Paradise found 🏝️ Crystal clear waters and zero worries.", likes: 8900, comments: 345, timeAgo: "1d", isLiked: false, isSaved: true },
  { id: "p8", user: users[7], image: post8, caption: "Sweater weather is the best weather 🍂🧣", likes: 6700, comments: 234, timeAgo: "2d", isLiked: true, isSaved: false },
];

export const stories: Story[] = [
  { id: "s0", user: { ...currentUser, username: "Your story" }, isSeen: false },
  ...users.filter(u => u.hasStory).map((u, i) => ({ id: `s${i + 1}`, user: u, isSeen: i > 3 })),
];

export const exploreImages = [post1, post2, post3, post4, post5, post6, post7, post8, post9];

export const suggestedUsers = users.slice(0, 5);

export const formatCount = (n: number): string => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
};
