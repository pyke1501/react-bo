import AccessControl from "../../components/AccessControl"
import TextButton from "../../components/button/TextButton"

function Dashboard() {
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
    </div>
  )
}

export default Dashboard