import { Camera } from "lucide-react";

const Create = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-20">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-border">
        <Camera className="h-10 w-10 text-muted-foreground" />
      </div>
      <h2 className="mt-6 text-xl font-bold">Create new post</h2>
      <p className="mt-2 text-sm text-muted-foreground text-center">
        Share photos and videos with your followers
      </p>
      <button className="mt-6 rounded-lg bg-accent px-8 py-2 text-sm font-semibold text-accent-foreground">
        Select from device
      </button>
    </div>
  );
};

export default Create;
