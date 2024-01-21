import { Button } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import "../scss/_friends.scss";
import axios from "axios";
import { ProfileContext } from "..";
import Nav from "../components/Nav";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [type, setType] = useState(true);
  const profile = useContext(ProfileContext);
  useEffect(() => {
    const getFriends = async () => {
      axios
        .get(`${process.env.REACT_APP_SERVER}/friends/${profile.id}`)
        .then((res) => {
          setFriends(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getFriends();
  }, []);

  return (
    <div className="friend-list">
      <div className="button-container">
        <Button>List</Button>
        <Button>Add</Button>
      </div>
      {type && (
        <div className="friend-list">
          {friends.map((friend, index) => {
            return (
              <div className="friend-card" key={`${index}-friends`}>
                {friend["first_name"]}
              </div>
            );
          })}
        </div>
      )}
      {!type && <div className="friend-list"></div>}
      <Nav />
    </div>
  );
};

export default Friends;
