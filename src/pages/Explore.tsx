import { useState } from "react";
import { Search } from "lucide-react";
import { exploreImages } from "@/data/mockData";

const categories = ["All", "Travel", "Food", "Art", "Pets", "Fitness", "Nature"];

const Explore = () => {
  const [active, setActive] = useState("All");

  return (
    <div>
      {/* Search */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-3 rounded-lg bg-secondary px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto px-4 pb-3" style={{ scrollbarWidth: "none" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`flex-shrink-0 rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
              active === cat
                ? "bg-foreground text-background"
                : "bg-secondary text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-0.5">
        {exploreImages.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden ${i === 2 ? "row-span-2" : ""}`}
          >
            <img
              src={img}
              alt={`Explore ${i + 1}`}
              className={`w-full object-cover ${i === 2 ? "h-full" : "aspect-square"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
