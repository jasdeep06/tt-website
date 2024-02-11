import Nav from "../ui/landing/NavBar/nav"

export default function Layout({ children }) {
  return (
    <div>
        <Nav/>
      <div>{children}</div>
    </div>
  )
}
