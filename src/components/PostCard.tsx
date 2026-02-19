import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import type { Post } from "@/data/mockData";
import { formatCount } from "@/data/mockData";

const PostCard = ({ post }: { post: Post }) => {
  const [liked, setLiked] = useState(post.isLiked);
  const [saved, setSaved] = useState(post.isSaved);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showHeart, setShowHeart] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleDoubleClick = () => {
    if (!liked) {
      setLiked(true);
      setLikesCount(prev => prev + 1);
    }
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 800);
  };

  return (
    <article className="border-b border-border">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className={post.user.hasStory ? "story-ring" : ""}>
            <img
              src={post.user.avatar}
              alt={post.user.username}
              className="h-8 w-8 rounded-full bg-secondary object-cover"
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold">{post.user.username}</span>
            {post.user.isVerified && (
              <svg className="h-3.5 w-3.5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            )}
            <span className="text-xs text-muted-foreground">• {post.timeAgo}</span>
          </div>
        </div>
        <button className="text-foreground">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Image */}
      <div className="relative" onDoubleClick={handleDoubleClick}>
        <img src={post.image} alt="Post" className="w-full object-cover" />
        {showHeart && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="h-20 w-20 animate-like-pop fill-primary-foreground text-primary-foreground drop-shadow-lg" />
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 pt-3">
        <div className="flex items-center gap-4">
          <button onClick={toggleLike}>
            <Heart className={`h-6 w-6 transition-colors ${liked ? "fill-destructive text-destructive" : "text-foreground hover:text-muted-foreground"}`} />
          </button>
          <button>
            <MessageCircle className="h-6 w-6 text-foreground hover:text-muted-foreground" />
          </button>
          <button>
            <Send className="h-6 w-6 text-foreground hover:text-muted-foreground" />
          </button>
        </div>
        <button onClick={() => setSaved(!saved)}>
          <Bookmark className={`h-6 w-6 transition-colors ${saved ? "fill-foreground text-foreground" : "text-foreground hover:text-muted-foreground"}`} />
        </button>
      </div>

      {/* Likes & Caption */}
      <div className="px-4 pb-3 pt-2">
        <p className="text-sm font-semibold">{formatCount(likesCount)} likes</p>
        <p className="mt-1 text-sm">
          <span className="font-semibold">{post.user.username}</span>{" "}
          {post.caption}
        </p>
        <button className="mt-1 text-sm text-muted-foreground">
          View all {formatCount(post.comments)} comments
        </button>
      </div>
    </article>
  );
};

export default PostCard;
