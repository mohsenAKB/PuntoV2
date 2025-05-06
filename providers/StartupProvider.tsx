"use client";

import { FC, JSX, ReactNode, useEffect, useState } from "react";
import { startupAction } from "@/actions/startup";
import useAuth from "@/hook/use-auth";

interface StartupProviderProps {
  children?: ReactNode;
}

const StartupProvider: FC<StartupProviderProps> = ({
  children,
}): JSX.Element => {
  const [isFetchingEnded, setIsFetchingEnded] = useState<boolean>(false);
  const { setUser } = useAuth();
  const setInitialUser = async (): Promise<void> => {
    const startup = await startupAction();
    setUser(startup?.user_profile);
    setIsFetchingEnded(true);
  };

  useEffect(() => {
    setInitialUser();
  }, []);

  return <>{isFetchingEnded ? children : null}</>;
};

export default StartupProvider;
