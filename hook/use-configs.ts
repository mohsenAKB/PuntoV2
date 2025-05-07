
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IStartupRes } from "@/@types/response/startupRes";
import { IConfigsState, setConfigs } from "@/store/slices/configsSlice";
import { startupAction } from "@/actions/startup";

interface UseConfigsResult extends IConfigsState {
  setConfigs: () => Promise<IStartupRes | undefined>;
}

const useConfigs = (): UseConfigsResult => {
  const dispatch = useDispatch();
  const configsStates = useSelector<RootState, IConfigsState>(
    (state) => state.config
  );

  const fetchAndSetConfigs = async (): Promise<IStartupRes | undefined> => {
    const result = await startupAction();
    if (result) {
      dispatch(setConfigs(result));
    }

    return result;
  };

  return {
    ...configsStates,
    setConfigs: fetchAndSetConfigs,
  };
};

export default useConfigs;
