
import { Link } from "react-router-dom"


export const Links = ({page, route}) => {
  return (
    <Link className="link" to={route}>{page}</Link>
  )
}
