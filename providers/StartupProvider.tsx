"use client";

import { FC, JSX, ReactNode, useEffect, useState } from "react";
import { startupAction } from "@/actions/startup";

interface StartupProviderProps {
  children?: ReactNode;
}

const StartupProvider: FC<StartupProviderProps> = ({
  children,
}): JSX.Element => {
  const [isFetchingEnded, setIsFetchingEnded] = useState<boolean>(false);

  const setInitialUser = async (): Promise<void> => {
    const startup = await startupAction();
    console.log(startup, "startup");

    setIsFetchingEnded(true);
  };

  useEffect(() => {
    setInitialUser();
  }, []);

  return <>{isFetchingEnded ? children : null}</>;
};

export default StartupProvider;
