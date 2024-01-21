import Nav from "../components/Nav";
import "../scss/_challenges.scss";
import ChallengeModal from "../components/ChallengeModal";
import { useState, useEffect, useContext } from "react";
import { Button } from "@chakra-ui/react";
import { ProfileContext } from "../index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Challenges() {
  const profile = useContext(ProfileContext);
  const [challenges, setChallenges] = useState(null);
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(null);

  useEffect(() => {
    const getChallenges = async () => {
      try {
        if (!profile.id) {
          navigate("/login");
          return;
        }
        const getChallenges = await axios.get(
          `${process.env.REACT_APP_SERVER}/challenge/${profile.id}`
        );
        setChallenges(getChallenges.data);
      } catch (err) {
        navigate("/login");
      }
    };
    getChallenges();
  }, [showDialog]);

  if (!challenges) return null;

  return (
    <div className="challenges-wrapper">
      <h1>Eco Challenges</h1>
      <p>Click on each challenge to learn more!</p>
      <div className="challenges">
        {challenges["daily"].map((challenge, index) => {
          return (
            <div className="challenge-item" key={`challenge-${index}`}>
              <Button className="question-mark">?</Button>
              <h2>{challenge.challenge.name}</h2>
              {!challenge.isComplete && (
                <Button onClick={() => setShowDialog(index)}>
                  {challenge.challenge.type} challenge
                </Button>
              )}
              <ChallengeModal
                challenge={challenge.challenge}
                isOpen={showDialog === index}
                setShowDialog={(inp) => setShowDialog(inp)}
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
