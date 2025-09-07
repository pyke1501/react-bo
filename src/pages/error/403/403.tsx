import { useNavigate } from 'react-router'
import { PATH } from '../../../configs/path'

function Error403() {
  const navigate = useNavigate();

  function gotoLogin() {
    window.localStorage.clear();
    navigate(PATH.LOGIN);
  }


  return (
    <div>
      Error403
      <button onClick={gotoLogin}>Go to login</button>
    </div>
  )
}

export default Error403