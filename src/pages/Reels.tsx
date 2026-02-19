import { useState } from "react";
import { Heart, MessageCircle, Send, Music } from "lucide-react";
import { posts, formatCount } from "@/data/mockData";

const Reels = () => {
  const [currentReel, setCurrentReel] = useState(0);
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  const reelPosts = posts.slice(0, 5);

  return (
    <div className="relative -mt-[1px]">
      {/* Header */}
      <div className="sticky top-[53px] z-10 flex items-center justify-between px-4 py-2 bg-background border-b border-border">
        <h1 className="text-lg font-bold">Reels</h1>
        <button className="text-foreground">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>

      {/* Reels */}
      <div className="flex flex-col">
        {reelPosts.map((post, i) => (
          <div key={post.id} className="relative aspect-[9/16] max-h-[calc(100vh-120px)] overflow-hidden bg-foreground">
            <img
              src={post.image}
              alt="Reel"
              className="h-full w-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

            {/* Right actions */}
            <div className="absolute right-3 bottom-20 flex flex-col items-center gap-5">
              <button
                onClick={() => setLiked(prev => ({ ...prev, [i]: !prev[i] }))}
                className="flex flex-col items-center gap-1"
              >
                <Heart className={`h-7 w-7 ${liked[i] ? "fill-destructive text-destructive" : "text-background"}`} />
                <span className="text-xs text-background font-medium">{formatCount(post.likes)}</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <MessageCircle className="h-7 w-7 text-background" />
                <span className="text-xs text-background font-medium">{formatCount(post.comments)}</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <Send className="h-7 w-7 text-background" />
              </button>
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-4 left-3 right-16">
              <div className="flex items-center gap-2 mb-2">
                <img src={post.user.avatar} alt="" className="h-8 w-8 rounded-full" />
                <span className="text-sm font-semibold text-background">{post.user.username}</span>
                <button className="rounded-md border border-background/60 px-3 py-0.5 text-xs font-semibold text-background">
                  Follow
                </button>
              </div>
              <p className="text-sm text-background/90 line-clamp-2">{post.caption}</p>
              <div className="mt-2 flex items-center gap-2">
                <Music className="h-3 w-3 text-background/70" />
                <span className="text-xs text-background/70">Original audio · {post.user.username}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
