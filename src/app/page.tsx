import Background from "./components/background";
import BlankSectionPrimary from "./components/blankSectionPrimary";
import Gatekeeper from "./components/gatekeeper";
import LandingSection from "./components/landingSection";
import SecondSection from "./components/secondSection";
import TimelineContainer from "./components/timelineContainer";

export default function Home() {
  return (
    <>
      <Background />
      <main>
        <Gatekeeper />
        <BlankSectionPrimary />
        <LandingSection />
        <BlankSectionPrimary />
        <BlankSectionPrimary />
        <SecondSection />
        <BlankSectionPrimary />
        <TimelineContainer />
        <BlankSectionPrimary />
      </main>
    </>
  );
}
