import { useState, useEffect, FC, } from "react";
import { Spinner, Alert } from "reactstrap";
import { fetchRockets } from "../api";
import { useDispatch } from "react-redux";
import RocketGrid from "../Components/RocketGrid";
import { storeRockets } from "../store/ducks/rockets";
import useRocket from '../CustomHooks/useRockets'

const DashBoard: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [showError, setShowError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const rockets = useRocket();

  const getAssets = async () => {
    setIsLoading(true);
    try {
      const rocketList = await fetchRockets();
      dispatch(storeRockets(rocketList.data));
      setShowError(false);
    } catch (err) {
      setShowError(true);
      setErrorText(err.response.data);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAssets();
  }, []);

  return (
    <div>


      {isLoading ? (
        <div className="spinner"><Spinner type="grow" color="primary" /></div>
      ) : (
        <RocketGrid rockets={rockets} />
      )}
      {showError && (
        <Alert color="primary">Ooops! Server says - {errorText}</Alert>
      )}
    </div>
  );
}

export default DashBoard;
