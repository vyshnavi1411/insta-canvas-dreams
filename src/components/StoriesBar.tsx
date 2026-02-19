import type { Story } from "@/data/mockData";

const StoriesBar = ({ stories }: { stories: Story[] }) => {
  return (
    <div className="border-b border-border bg-background">
      <div className="flex gap-4 overflow-x-auto px-4 py-4 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
        {stories.map((story, i) => (
          <button key={story.id} className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className={!story.isSeen && i !== 0 ? "story-ring" : i === 0 ? "rounded-full border-2 border-border p-[2px]" : "rounded-full border-2 border-muted p-[2px]"}>
              <img
                src={story.user.avatar}
                alt={story.user.username}
                className="h-14 w-14 rounded-full bg-secondary object-cover"
              />
            </div>
            <span className="w-16 truncate text-center text-[11px]">
              {i === 0 ? "Your story" : story.user.username}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoriesBar;
