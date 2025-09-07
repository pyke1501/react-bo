import AccessControl from "../../components/AccessControl"
import TextButton from "../../components/button/TextButton"
import { httpRequest } from "../../services/initRequest";

/* fetch or axios
*/
function Dashboard() {

  async function fetchUser() {
    try {
      const res = await httpRequest('/api/user', {
        method: 'GET'
      });
      console.log('res: ', res)

      // show/hide loading or handle error or auto refresh token, token expired
    } catch(e) {
      console.log('e: ', e)
    }
  }

  return (
    <div>
      <AccessControl resource="dashboard/action/delete">
        <TextButton>
          Delete
        </TextButton>
      </AccessControl>
    
      <TextButton>
        Update
      </TextButton>
      <TextButton>
        Create
      </TextButton>
      <TextButton>
        Edit
      </TextButton>

      <TextButton
        onClick={fetchUser}
      >
        Fetch User
      </TextButton>
    </div>
  )
}

export default Dashboard