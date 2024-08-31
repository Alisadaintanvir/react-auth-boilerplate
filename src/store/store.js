import { create } from "zustand";

const useStore = create((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (status) => set({ isLoggedIn: status }),

  user: null,
  setUser: (userData) => set({ user: userData }),
}));

export default useStore;
