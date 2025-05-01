import { useCallback } from "react";
import axios from "axios";
import { videoApi } from "../index.js";

const useUpdateViews = () => {
  const updateViews = useCallback(async (videoid) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      };

      const response = await axios.post(`${videoApi}/update_views/${videoid}`, {}, config);
      console.log("View update successful:", response.data);
    } catch (error) {
      console.error("Error updating views:", error.message);
    }
  }, []);

  return updateViews;
};

export default useUpdateViews;
