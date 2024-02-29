// src/recoil/PopupState.js
import { atom, selector } from "recoil";

export const makeSchedule = atom({
  key: "makeSchedule",
  default: false,
});

export const makeTeam = atom({
  key: "makeTeam",
  default: false,
});

export const settingTeam = atom({
  key: "settingTeam",
  default: false,
});

//전체 화면 blur 관리용
export const popupOpen = selector({
  key: "popupOpen",
  get: ({ get }) => {
    const schedule = get(makeSchedule);
    const team = get(makeTeam);
    const teamSet = get(settingTeam);
    return schedule || team || teamSet;
  },
});
