import Nav from "../components/Nav";
import "../scss/_challenges.scss";
import ChallengeModal from "../components/ChallengeModal";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

function Challenges() {
  const fullArr = [
    {
      challenge: {
        _id: "65ad15418f6faf5925c172e1",
        name: "Get Bottles",
        description: "Bottle Recycling!",
        objective: {
          object: "bottles",
          count: 8,
        },
        type: "daily",
        worth: 200,
      },
      isComplete: false,
    },
    {
      challenge: {
        _id: "65ad14d58f6faf5925c172df",
        name: "Dump Liter",
        description: "Clean Streets!",
        objective: {
          object: "garbage",
          count: 4,
        },
        type: "daily",
        worth: 100,
      },
      isComplete: false,
    },
    {
      challenge: {
        _id: "65ad15078f6faf5925c172e0",
        name: "Recycle Paper",
        description: "Aim for the right bin!",
        objective: {
          object: "paper materials",
          count: 10,
        },
        type: "daily",
        worth: 140,
      },
      isComplete: false,
    },
    {
      challenge: {
        _id: "65ad14388f6faf5925c172de",
        name: "Get Bottles",
        description: "Bottle Recycling!",
        objective: {
          object: "bottles",
          count: 5,
        },
        type: "daily",
        worth: 120,
      },
      isComplete: false,
    },
    {
      challenge: {
        _id: "65ad15678f6faf5925c172e2",
        name: "Reduce Plastic Usage",
        description: "Prefer the non-plastic variants of storage",
        objective: {
          object: "times avoided plastic bags",
          count: 2,
        },
        type: "daily",
        worth: 100,
      },
      isComplete: false,
    },
  ];

  const [showDialog, setShowDialog] = useState(null);

  return (
    <div className="challenges-wrapper">
      <h1>Eco Challenges</h1>
      <p>Click on each challenge to learn more!</p>
      <div className="challenges">
        {fullArr.map((challenge, index) => {
          return (
            <div className="challenge-item" key={`challenge-${index}`}>
              <Button className="question-mark">?</Button>
              <h2>{challenge.challenge.name}</h2>
              <Button onClick={() => setShowDialog(index)}>
                {challenge.challenge.type} challenge
              </Button>
              <ChallengeModal
                challenge={challenge.challenge}
                isOpen={showDialog === index}
                setShowDialog={setShowDialog}
              />
            </div>
          );
        })}
      </div>
      <Nav />
    </div>
  );
}

export default Challenges;
