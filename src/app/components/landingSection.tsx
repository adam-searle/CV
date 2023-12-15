// LandingSection.tsx
const LandingSection = () => {
  // Use flex utilities to center content, apply padding, and set the background color
  return (
    <div className="h-screen flex flex-col justify-center items-center p-8 bg-primary">
      <h1 className="text-6xl font-bold text-quaternary text-center">
        Adam Searle
      </h1>
      <p className="text-tertiary text-center text-sm m-4">
        adam-searle@hotmail.com
      </p>
      <p id="intro" className="text-secondary text-center text-xl w-5/6 p-t">
        Explore the milestones of my journey: a blend of professional
        development in software, game, and web technologies, and personal growth
        through meditation, surfing, and introspective experiences. This space
        is a candid chronicle of my path through the world of coding and key
        experiences that have shaped my perspective along the way.
      </p>
    </div>
  );
};

export default LandingSection;
