import React, { useContext, useCallback } from "react";
import { RouteContext } from "../context/RouteProvider";

export default function useRoutes() {
  const { dispatch, state } = useContext(RouteContext);

  const navigate = useCallback(
    (url) => {
      dispatch({
        type: "NAVIGATE",
        payload: url,
      });
    },
    [dispatch],
  );

  const goback = useCallback(() => {
    dispatch({
      type: "GOBACK",
    });
  }, [dispatch]);

  const currentPath = state.history[state.index];

  return {
    navigate,
    goback,
    currentPath,
  };
}