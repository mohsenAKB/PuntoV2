"use client";

import { FC, JSX, ReactNode, useEffect, useState } from "react";
import { startupAction } from "@/actions/startup";
import useAuth from "@/hook/use-auth";
import useConfigs from "@/hook/use-configs";

interface StartupProviderProps {
  children?: ReactNode;
}

const StartupProvider: FC<StartupProviderProps> = ({
  children,
}): JSX.Element => {
  const [isFetchingEnded, setIsFetchingEnded] = useState<boolean>(false);
  // const { setUser } = useAuth();
  const { setConfigs } = useConfigs();
  const setInitialUser = async (): Promise<void> => {
    // setUser(startup?.user_profile);
    const logs = await setConfigs();
    console.log("logs", logs);

    setIsFetchingEnded(true);
  };

  useEffect(() => {
    setInitialUser();
  }, []);

  return <>{isFetchingEnded ? children : null}</>;
};

export default StartupProvider;
