import RequestInstanceNames from "@/utils/request/types/request-instances.enum";
import { API } from "@/constant/api";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store/store";
import { IList } from "@/@types/list";
import { IStartupRes } from "@/@types/response/startupRes";
import useRequest from "./use-request";
import { IConfigsState, setConfigs } from "@/store/slices/configsSlice";

interface UseConfigsResult extends IConfigsState {
  setConfigs: () => Promise<IStartupRes | undefined>;
}

const useConfigs = (): UseConfigsResult => {
  const dispatch = useDispatch();
  const configsStates = useSelector<RootState, IConfigsState>(
    (state) => state.configs
  );

  const { get } = useRequest<IList<IStartupRes>>({
    instanceName: RequestInstanceNames.OptionalAuth,
  });

  const fetchAndSetConfigs = async (): Promise<IStartupRes | undefined> => {
    const result = await get(API.getInitializeConfigs);

    if (result) {
      dispatch(setConfigs(result.data));
    }

    return result?.data;
  };

  return {
    ...configsStates,
    setConfigs: fetchAndSetConfigs,
  };
};

export default useConfigs;
