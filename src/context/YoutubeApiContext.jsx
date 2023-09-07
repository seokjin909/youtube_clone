import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
// import FakeYoutubeClient from "../api/fakeYoutubeClient";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();

// DI ( Dependency Injection)
const client = new YoutubeClient();
// const client = new FakeYoutubeClient();
const youtube = new Youtube(client);
export const YoutubeApiProvider = ({ children }) => {
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
};

export const useYoutubeApi = () => {
  return useContext(YoutubeApiContext);
};
