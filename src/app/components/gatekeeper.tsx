// Gatekeeper.tsx
"use client";

import React, { useState, useRef, useEffect, use } from "react";
import Fysh from "./fysh";

let responseCount = 0;

const Gatekeeper = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [warningAcknowledged, setWarningAcknowledged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("...");
  const [isLanding, setIsLanding] = useState(false);
  const [isStandingUp, setIsStandingUp] = useState(false);
  const [animationsDone, setAnimationsDone] = useState(false);
  const [testPassed, setTestPassed] = useState(false);
  const [hideFysh, setHideFysh] = useState(false);
  const [mouthImage, setMouthImage] = useState("/fysh/mouthClosed.png");

  //Make sure we scroll to top of page on start(handles refreshes)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []); // The empty dependency array ensures this runs only once on mount

  useEffect(() => {
    const scrollToElement = () => {
      const element = document.getElementById("intro");
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.scrollY;
        const middle = absoluteElementTop - window.innerHeight / 2;
        window.scrollTo({
          top: middle,
          behavior: "smooth",
        });
      }
    };

    if (testPassed) {
      document.body.style.overflow = "auto";
      setTimeout(() => {
        scrollToElement();
        setTimeout(() => {
          setHideFysh(true);
        }, 500);
      }, 1000);
    } else {
      document.body.style.overflow = "hidden";
    }
  });

  const handleOkayClick = () => {
    setWarningAcknowledged(true);
    setLoading(true); // Start the animations
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        setIsLanding(true); // Begin landing animation

        // After landing animation, trigger standing up animation
        setTimeout(() => {
          setIsLanding(false);
          setIsStandingUp(true);

          // Reset after the standing up animation is complete
          setTimeout(() => {
            setIsStandingUp(false);
            setAnimationsDone(true);
          }, 2000); // Duration of the standing up animation
        }, 300); // Duration of the landing animation
      }, 1500); // Initial delay in milliseconds

      return () => clearTimeout(timer);
    }
  }, [loading]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleEnterKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const input = userInput.trim().toLowerCase();
      handleResponse(input);
    }
  };

  const handleResponse = (userInput: string) => {
    responseCount++;
    if (responseCount > 1) {
      if (userInput.toLowerCase().includes("fuck")) {
        respond(3);
        //Add logic for animation, hide input/response.
        setTestPassed(true);
        return;
      }
      if (responseCount === 2) {
        respond(1);
        return;
      }
      respond(Math.floor(Math.random() * 3));
      return;
    }
    respond(0);
  };

  const respond = (response: number) => {
    const fysh1 = new Audio("/sounds/fysh1.mp3");
    const fuckyoutest = new Audio("/sounds/fuckyoutest.mp3");
    const fuckyou = new Audio("/sounds/fuckyou.mp3");
    const followMe = new Audio("/sounds/followme.mp3");
    const responses = [
      ["Fuck you shit-head-fuck-face-fuck-head.", fysh1],
      [
        "Fuck you shit-head-fuck-face, get the fuck outa my face. (I think it's a test)",
        fuckyoutest,
      ],
      ["Fuck you!", fuckyou],
      ["Hehehe, follow me fuck-head.", followMe],
    ];
    setResponse(responses[response][0].toString());
    let sound = responses[response][1] as HTMLAudioElement;
    sound.play();
    if (response === 1) {
      mouthMovement(sound, 2.8);
      return;
    }
    mouthMovement(sound);
  };

  const mouthMovement = (sound: HTMLAudioElement, duration?: number) => {
    const open = "/fysh/mouthO.png";
    const half = "/fysh/mouthHalf.png";
    const closed = "/fysh/mouthClosed.png";
    const mouthStates = [open, half, closed];
    let index = 0;

    const interval = setInterval(() => {
      setMouthImage(mouthStates[index]);
      index = (index + 1) % mouthStates.length;

      if (duration && duration > 0) {
        if (sound.currentTime >= duration) {
          clearInterval(interval);
          setMouthImage(closed); // Reset to closed mouth
          return;
        }
      }
      if (sound.ended) {
        clearInterval(interval);
        setMouthImage(closed); // Reset to closed mouth when audio ends
      }
    }, 100); // Adjust this interval to match the rhythm of the speech
  };

  return (
    <div className="bg-primary h-screen w-screen">
      {!warningAcknowledged && (
        <div className="flex flex-col justify-center items-center h-screen">
          <p className="text-quaternary">Fair warning - Profanity ahead</p>
          <button
            onClick={handleOkayClick}
            className="mt-4 p-2 border-2 border-quaternary rounded-lg text-quaternary bg-secondary focus:border-secondary focus:outline-none"
          >
            Okay
          </button>
        </div>
      )}

      {warningAcknowledged && (
        <div className="flex flex-col justify-center items-center h-screen">
          <Fysh
            className={`${
              hideFysh ? "hidden" : loading ? "hidden" : "animate-slamIn"
            }`}
            isLanding={isLanding}
            isStandingUp={isStandingUp}
            testPassed={testPassed}
            mouthImage={mouthImage}
          />
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleEnterKeyPress}
            className={`${
              !animationsDone ? "opacity-0" : testPassed ? "hidden" : "reveal"
            } text-center mt-4 p-2 border-2 border-primary rounded-lg text-secondary bg-quaternary focus:border-secondary focus:outline-none`}
          />
          <p
            className={`${
              !animationsDone ? "opacity-0" : testPassed ? "hidden" : "reveal"
            }`}
          >
            {response}
          </p>
        </div>
      )}
    </div>
  );
};

export default Gatekeeper;
