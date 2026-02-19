import { useState } from "react";
import { Settings, Grid3X3, Bookmark, UserSquare2, ChevronDown } from "lucide-react";
import { currentUser, exploreImages, formatCount } from "@/data/mockData";

const tabs = [
  { id: "posts", icon: Grid3X3 },
  { id: "saved", icon: Bookmark },
  { id: "tagged", icon: UserSquare2 },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <div className="flex items-center gap-1">
          <h1 className="text-lg font-bold">{currentUser.username}</h1>
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-5">
          <button>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <button>
            <Settings className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Profile info */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-6">
          <div className="story-ring">
            <img
              src={currentUser.avatar}
              alt={currentUser.username}
              className="h-20 w-20 rounded-full bg-secondary"
            />
          </div>
          <div className="flex flex-1 justify-around text-center">
            <div>
              <p className="text-lg font-bold">{currentUser.postsCount}</p>
              <p className="text-xs text-muted-foreground">posts</p>
            </div>
            <div>
              <p className="text-lg font-bold">{formatCount(currentUser.followers)}</p>
              <p className="text-xs text-muted-foreground">followers</p>
            </div>
            <div>
              <p className="text-lg font-bold">{formatCount(currentUser.following)}</p>
              <p className="text-xs text-muted-foreground">following</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm font-semibold">{currentUser.displayName}</p>
          <p className="mt-1 whitespace-pre-line text-sm">{currentUser.bio}</p>
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex gap-2">
          <button className="flex-1 rounded-lg bg-secondary py-1.5 text-sm font-semibold">
            Edit profile
          </button>
          <button className="flex-1 rounded-lg bg-secondary py-1.5 text-sm font-semibold">
            Share profile
          </button>
        </div>
      </div>

      {/* Story highlights placeholder */}
      <div className="flex gap-4 overflow-x-auto border-b border-border px-4 pb-4" style={{ scrollbarWidth: "none" }}>
        {["Travel", "Food", "Art", "Life"].map((h) => (
          <div key={h} className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-secondary">
              <span className="text-lg">✨</span>
            </div>
            <span className="text-[11px]">{h}</span>
          </div>
        ))}
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border">
            <svg className="h-6 w-6 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <span className="text-[11px]">New</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        {tabs.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-1 flex justify-center py-3 transition-colors ${
              activeTab === id
                ? "border-b-2 border-foreground text-foreground"
                : "text-muted-foreground"
            }`}
          >
            <Icon className="h-5 w-5" strokeWidth={1.5} />
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-0.5">
        {exploreImages.slice(0, 9).map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden">
            <img src={img} alt={`Post ${i + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
