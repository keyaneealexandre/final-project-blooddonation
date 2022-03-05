import './Profile.css'
import BasicCard from './components/Card.js'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Profile = props => {
  return (
    <>
      <BasicCard text = "Age">
      </BasicCard>
    </>
  )
}


// make this component available to be imported into any other file
export default Profile