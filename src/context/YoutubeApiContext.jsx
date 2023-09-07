import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
// import FakeYoutube from "../api/fakeYoutube";

export const YoutubeApiContext = createContext();

// DI ( Dependency Injection )
const youtube = new Youtube();
// const youtube = new FakeYoutube();
export const YoutubeApiProvider = ({ children }) => {
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
};

export const useYoutubeApi = () => {
  return useContext(YoutubeApiContext);
};
