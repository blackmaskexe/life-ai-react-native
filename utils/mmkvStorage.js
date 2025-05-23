import { MMKV } from "react-native-mmkv";

const mmkvStorage = new MMKV();

export default mmkvStorage;

// the following are the key value stores being used inside the app:

// coreHabits: array of the 3 habit objects that the user sets during onboarding
// activeHabits: array of all the habits that the user is currently doing
// moreHabits: array of all the potential / future habits that the user would want to do
// habitHistory: A database-like array of all the past completed habits from the user
