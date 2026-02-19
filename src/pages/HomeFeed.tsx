import StoriesBar from "@/components/StoriesBar";
import PostCard from "@/components/PostCard";
import { stories, posts, suggestedUsers, formatCount } from "@/data/mockData";

const HomeFeed = () => {
  return (
    <div>
      <StoriesBar stories={stories} />

      {/* Posts */}
      <div>
        {posts.slice(0, 3).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Suggestions */}
      <div className="border-b border-border px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-muted-foreground">Suggested for you</span>
          <button className="text-xs font-semibold text-foreground">See All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {suggestedUsers.map((user) => (
            <div
              key={user.id}
              className="flex w-36 flex-shrink-0 flex-col items-center gap-2 rounded-lg border border-border bg-card p-4"
            >
              <div className={user.hasStory ? "story-ring" : ""}>
                <img src={user.avatar} alt={user.username} className="h-14 w-14 rounded-full bg-secondary" />
              </div>
              <div className="text-center">
                <p className="flex items-center gap-0.5 text-xs font-semibold">
                  {user.username}
                  {user.isVerified && (
                    <svg className="h-3 w-3 text-accent" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  )}
                </p>
                <p className="text-[11px] text-muted-foreground">{formatCount(user.followers)} followers</p>
              </div>
              <button className="w-full rounded-lg bg-accent py-1.5 text-xs font-semibold text-accent-foreground">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* More posts */}
      <div>
        {posts.slice(3).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomeFeed;
