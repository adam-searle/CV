import TimelineEvent from "./timelineEvent";

// TimelineContainer.tsx
const TimelineContainer = () => {
  return (
    <div className="py-12 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <TimelineEvent
          title="Warcraft 3 map editor"
          year="2004"
          content="First Exploration into the world coding. Had fun learning about triggers,
          logical structures, creating some maps and testing them out online with other players"
          position="left"
        />
        <TimelineEvent
          title="Plymouth College of Art and Design - BA in Design for Games"
          year="2012-2015"
          content={
            <>
              Enjoyer of game design, 3D modelling, art, and level design.
              Developed a game,{" "}
              <a
                className="font-bold underline"
                href="https://play.google.com/store/apps/details?id=com.GladiusGames.Box&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bob
              </a>
              , using Unity and C# for the final major project.
            </>
          }
          position="right"
        />
        {/* <TimelineEvent
          title="First experience with LSD"
          year="2013"
          content="Simply, an unsought cure for depression. From a state of almost apathy and deep
          depression, a small spark was born, an ember, some curiosity, to see what would happen.
          And so I went, not with excitement, but an apathetic openness. And so I was given a piece
          of card, placed in the mouth. I was given a night of friendship, conversation, laughter,
          play. I was given a new perspective, a joy, and so from this ailment, I was cured."
          position="left"
        /> */}
        {/* <TimelineEvent
          title="Second LSD experience"
          year="2014"
          content="A deeper understanding of both self perception and the futility of being concerned
          what others think of you. A powerful reminder to appreciate what is in-front of you and to love
          what you have, the friends, the time, this. A deep realisation that things are as they should
          be, to relax, allow, enjoy."
          position="right"
        /> */}
        <TimelineEvent
          title="First Vipassana meditation retreat"
          year="2016"
          content="Witnessed where mind and matter meet, and saw there is no barrier,
          rather a continuous field of energy. Then, deep in meditation, I 'overheard', in my mind,
          an unseen council say: 'He's ready'. In replying 'Ready for what?' I then experienced a full 
          dissolving of the physical form, a state free from self, no point of reference. After some time,
          a point of reference manifested. And then the physical became apparent, layer by layer of subtle
          yet powerful energy. To observe the mind start again, to watch as the wheel slowly ground to a 
          start. The paradox of a desire to release; the very cause of grasping. And so my suffering 
          revealed, illusory and self generated."
          position="left"
        />
        {/* <TimelineEvent
          title="First surf post Vipassana"
          year="2016"
          content="Truly, heaven. I was seeking nothing, fully present. Not just surfing, 
          but every step, into the water, every paddle, each time the hand touches the water. 
          The nature, the beauty. And then, catching a wave, feeling it, not forcing it, 
          being one with the ocean. And also recognising in others something that before 
          had been in me, desperation, a constant focus on the future. But not now."
          position="right"
        /> */}
        <TimelineEvent
          title="MSc in Evolutionary and Adaptive Systems"
          year="2016-2017"
          content="Chosen out of a wish to learn, to discover more. Modules included:
          Neuroscience of Conciousness, Artifical Life, Object Oriented Programming, 
          Intelligence in Animals and Machines and more."
          position="left"
        />
        <TimelineEvent
          title="VR experience at Brighton Science Festival"
          year="2017"
          content="Created a VR dream experience exploring consciousness and perception.
          Included a flight experience, where you fly over a dream-like landscape and off into space.
          This was controlled by eye movements and head direction."
          position="right"
        />
        {/* <TimelineEvent
          title="First surf post second Vipassana"
          year="2017"
          content="Truly, hell. I was seeking the previous experience, forcing an attempt at presence. 
          Not surfing, struggling. Every stroke, every paddle, an effort. The wind(harsh), 
          the water(cold). And then, catching a wave, stumbling, trying, at odds with nature."
          position="left"
        /> */}
        <TimelineEvent
          title="Ultimate web designer & developer course"
          year="2018"
          content={
            <>
              Expanded on my coding skills, branching out into web development
              by taking an{" "}
              <a
                className="font-bold underline"
                href="https://www.udemy.com/course/web-developer-course/"
                target="_blank"
                rel="noopener noreferrer"
              >
                online course
              </a>
            </>
          }
          position="right"
        />
        <TimelineEvent
          title="Crowdfunder - Juniour web developer"
          year="2019"
          content="Started working for Crowdfunder. Met a steep but throughly enjoyable learning curve.
          Felt lucky to have found such an amazing place to work with such great people. Found myself
          starting to feel truly happy, doing something I loved for it's own purpose."
          position="left"
        />
        <TimelineEvent
          title="Driving home after a Vipassana"
          year="Circa 2020"
          content="Driving home after one vipassana or another: Laughter, beauty, feeling music so 
          deeply, in my very vibrational being. Seeing the frustration of other drivers, and laughing 
          at the futility of it. As if you can be somewhere else, as if generating anger and frustration 
          will get you 'there' faster. 'How can you be anywhere other than here'... an easy mistake to 
          make...especially when it appears that we are indeed going somewhere. Which of course, 
          we aren't, for after all, even when you get there, it's still here."
          position="right"
        />
        <TimelineEvent
          title="Hunted Cow - Game developer and designer"
          year="2020"
          content="Hired as a game developer, I quickly demonstrated my passion and creativty for game
          and also worked on the design side of things. Had a blast."
          position="left"
        />
        <TimelineEvent
          title="Masters of Pie - Software dev"
          year="2021"
          content="Worked as a software dev for a London based company. The focus was mostly around
          the Radical SDK developed in C# and .NET which facilitated real-time 2D and 3D data 
          collaboration. Also worked on some defence contract work using C# in Unity and got exposed to 
          C++."
          position="right"
        />
        {/* <TimelineEvent
          title="First psilocybin experience"
          year="2022"
          content="A deeply healing experience where I was shown the importance of the body,
           and how through years of physical stillness and meditation I had been neglecting 
           this part of life. Shown how the body stores emotional pain, and that this pain, 
           this tension, is simply where love is blocked, where love can't find a way through."
          position="left"
        /> */}
        <TimelineEvent
          title="200 hour Kundalini yoga teacher training"
          year="2022"
          content="An accidental expansion of perception beyond the senses, seeing visually 
          in the mind, the bubble and physical limit of the senses, and experiencing consciousness 
          slip beyond this. Leading again, to a release, being shown that nothing needs to change, 
          everything is exactly as it should be. It is only in the striving that we create suffering, 
          the more we see as wrong, the further we are from truth, from love, and the more suffering we 
          experience."
          position="right"
        />
        {/* <TimelineEvent
          title="Approx 50mg of psilocybin"
          year="2022"
          content="Influenced by other's fears, in search of something greater, with a desire to bring back 
          an answer, I felt a calling. 5g of mushrooms, taken alone, with offerings, while meditating 
          sitting, and then laying with eyes closed, I was lovingly healed. With love, I was shown 
          subtler and other realms of consciousness, all to be lovingly reminded; This is what is, 
          there is no answer other than this. Any thought or idea is not reality. Truth is in motion, 
          ideas are static, an attempt to hold onto what is already lost, but we grasp at water. 
          And yet, dispite their being no answer, still one was given: love. To return ready to give 
          love, share love, the cure for all ailments, true selfless love."
          position="left"
        /> */}
        <TimelineEvent
          title="Technical content writer"
          year="2022"
          content="Worked freelance as a technical content writer. Good exposure to various coding 
          environments and languages. Learned allot about SEO and marketing. Worked with some great
          people."
          position="right"
        />
        <TimelineEvent
          title="Dungeonfysh"
          year="2022"
          content={
            <>
              Solo developed an AI dungeon master. Implementing a basic combat
              system using D&D 5E rules. It is still a working prototype for any
              who want to try it.{" "}
              <a
                className="font-bold underline"
                href="https://dungeonfysh.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here!
              </a>
            </>
          }
          position="left"
        />
        <TimelineEvent
          title="MyWorld Website"
          year="2024"
          content={
            <>
              Lead/Solo Dev on a website for a scholarship grant scheme,
              featuring a 3d interactive globe. NextJS/THREEJS/Typescript.{" "}
              <a
                className="font-bold underline"
                href="myworldfilmgrant.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here!
              </a>
            </>
          }
          position="right"
        />
      </div>
    </div>
  );
};

export default TimelineContainer;
