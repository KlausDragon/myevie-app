const challenges = require("../models/challenges");

const WEEKLY_TYPE = "weekly";
const DAILY_TYPE = "daily";

const NUM_PER_WEEK = 2;
const NUM_PER_DAY = 5;

function isOverIncrement(compDate, transformDate, increment) {
  const tempDate = new Date(transformDate);
  return tempDate.setDate(tempDate.getDate() + increment) < compDate;
}

function getTopOfDay(date) {
  const temp = new Date(date);
  temp.setUTCHours(0, 0, 0, 0);
  return temp;
}

function calculateReqExp(level) {
  return Math.floor(150 + 110 * ((level) ** 1.7));
}

function getProfileLevel(profileDoc, gain) {
  const { level, experience } = profileDoc;

  let addLevel = 0;
  gain += experience;
  while (calculateReqExp(level + addLevel) <= gain) {
    addLevel++;
    gain -= calculateReqExp(level + addLevel);
  }

  return {
    level: level + addLevel,
    exp: gain,
  };
}

async function generateChallenges() {
  const allChallenges = await challenges.find({ type: DAILY_TYPE });
  allChallenges.sort(() => Math.random() - 0.5);

  let new_challenges = [];
  for (let count = 0; count < NUM_PER_DAY; count++) {
    const { _id } = allChallenges[count];
    new_challenges.push(_id);
  }

  return new_challenges;
}

async function generateWeekly() {
  const allChallenges = await challenges.find({ type: WEEKLY_TYPE });
  allChallenges.sort(() => Math.random() - 0.5);

  let new_challenges = [];
  for (let count = 0; count < NUM_PER_WEEK; count++) {
    const { _id } = allChallenges[count];
    new_challenges.push(_id);
  }

  return new_challenges;
}

module.exports = {
  generateWeekly,
  isOverIncrement,
  getTopOfDay,
  calculateReqExp,
  getProfileLevel,
  generateChallenges,
};
