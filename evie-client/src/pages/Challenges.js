import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import "../scss/_challenges.scss";
import { useState, useEffect, useContext } from "react";
import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { ProfileContext } from "../index";
import axios from "axios";

function Challenges() {

  const profile = useContext(ProfileContext);
  const [challenges, setChallenges] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getChallenges = async () => {
      try {
        if (!profile.id) {
          navigate('/login');
          return;
        }
        const getChallenges = await axios.get(`${process.env.REACT_APP_SERVER}/challenge/${profile.id}`);
        setChallenges(getChallenges.data);
      } catch (err) {
        navigate('/login');
      }
    }
    getChallenges();
  }, [])

  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const {
    isOpen: isBottlesModalOpen,
    onOpen: onBottlesModalOpen,
    onClose: onBottlesModalClose,
  } = useDisclosure();

  const {
    isOpen: isInfoModalOpen,
    onOpen: onInfoModalOpen,
    onClose: onInfoModalClose,
  } = useDisclosure();

  const {
    isOpen: isSuccessModalOpen,
    onOpen: onSuccessModalOpen,
    onClose: onSuccessModalClose,
  } = useDisclosure();

  // ------------------------------

  const {
    isOpen: isCarFreeModalOpen,
    onOpen: onCarFreeModalOpen,
    onClose: onCarFreeModalClose,
  } = useDisclosure();

  const {
    isOpen: isCarFreeInfoModalOpen,
    onOpen: onCarFreeInfoModalOpen,
    onClose: onCarFreeInfoModalClose,
  } = useDisclosure();

  // ------------------------------

  const {
    isOpen: isRecyclingPlantModalOpen,
    onOpen: onRecyclingPlantModalOpen,
    onClose: onRecyclingPlantModalClose,
  } = useDisclosure();

  const submitBottlesRecycled = () => {
    if (count > 0) {
      console.log("Bottles recycled: ", count);
      onBottlesModalClose();
      onInfoModalClose();
      onSuccessModalOpen();
    } else {
      console.log("No bottles recycled.");
      onBottlesModalClose();
      onInfoModalClose();
    }
  };

  const submitCarFreeDay = () => {
    if (document.getElementById("car-free").checked) {
      console.log("Car-free day!");
      onCarFreeModalClose();
      onCarFreeInfoModalClose();
      onSuccessModalOpen();
    } else {
      console.log("Not car-free day.");
      onCarFreeInfoModalClose();
      onCarFreeModalClose();
    }
  };

  const submitRecyclingPlant = () => {};

  return (
    <div className="challenges-wrapper">
      <h1>Eco Challenges</h1>
      <p>Click on each challenge to learn more!</p>
      <div className="challenges">
        <div className="challenge-item bottle-recycle">
          <Button className="question-mark" onClick={onInfoModalOpen}>
            ?
          </Button>
          <Modal isOpen={isInfoModalOpen} onClose={onInfoModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Challenge Information</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>For each item recycled, you will gain 50 EXP.</Text>
                <Text as="i">
                  *This is a daily challenge. Check-in every day to log the
                  number of items recycled.
                </Text>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onBottlesModalOpen} backgroundColor="#78944c">
                  Click here to log!
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <h2>Bottles Recycled</h2>
          <Button onClick={onBottlesModalOpen}>daily challenge</Button>
          <Modal isOpen={isBottlesModalOpen} onClose={onBottlesModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                Enter the number of bottles or cans you recycled today.
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex justify="center" align="center">
                  <Button onClick={handleDecrement} backgroundColor="#78944c">
                    -
                  </Button>
                  <Text fontSize="2xl" mx={4}>
                    {count}
                  </Text>
                  <Button onClick={handleIncrement} backgroundColor="#78944c">
                    +
                  </Button>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button
                  backgroundColor="#78944c"
                  mr={3}
                  onClick={submitBottlesRecycled}
                >
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Modal isOpen={isSuccessModalOpen} onClose={onSuccessModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Good work! Evie is growing...</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Keep participating to watch her evolve.</Text>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={() => {
                    onSuccessModalClose();
                    if (isInfoModalOpen || isBottlesModalOpen) {
                      onInfoModalClose();
                      onBottlesModalClose();
                    }
                    if (isCarFreeInfoModalOpen || isCarFreeModalOpen) {
                      onCarFreeInfoModalClose();
                      onCarFreeModalClose();
                    }
                    setTimeout(() => {
                      navigate("/myEvie");
                    }, 200);
                  }}
                  backgroundColor="#78944c"
                >
                  View MyEvie
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className="challenge-item car-free-day">
          <Button className="question-mark" onClick={onCarFreeInfoModalOpen}>
            ?
          </Button>
          <Modal
            isOpen={isCarFreeInfoModalOpen}
            onClose={onCarFreeInfoModalClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Challenge Information</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>For every car-free day, you will gain 1000 EXP.</Text>
                <Text as="i">*This is a weekly challenge.</Text>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onCarFreeModalOpen} backgroundColor="#78944c">
                  Click here to log!
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <h2>Car-Free Day</h2>
          <Button onClick={onCarFreeModalOpen}>weekly challenge</Button>
          <Modal isOpen={isCarFreeModalOpen} onClose={onCarFreeModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>
                  Did you refrain from driving today? If so, check the box
                  below:
                </p>
                <label for="car-free">Car-Free Day </label>
                <input type="checkbox" name="car-free" id="car-free" />
              </ModalBody>
              <ModalFooter>
                <Button
                  backgroundColor="#78944c"
                  mr={3}
                  onClick={submitCarFreeDay}
                >
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className="challenge-item recycling-plant">
          <div className="question-mark">?</div>
          <h2>Recycling Plant</h2>
          <Button onClick={onRecyclingPlantModalOpen}>weekly challenge</Button>
          <Modal
            isOpen={isRecyclingPlantModalOpen}
            onClose={onRecyclingPlantModalClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>...</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p></p>
                <input type="text" name="name" />
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={submitRecyclingPlant}
                >
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Challenges;
