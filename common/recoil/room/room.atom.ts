import { atom } from "recoil";

export const DEFAULT_ROOM = {
  id: "",
  users: new Map(),
  usersMoves: new Map(),
  movesWithoutUser: [],
  myMoves: [],
};

export const roomAtom = atom<ClientRoom>({
  key: "rooms",
  default: DEFAULT_ROOM,
});
