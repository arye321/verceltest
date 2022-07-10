
import { useSession, signIn, signOut } from "next-auth/react"
import { useTheme } from 'next-themes'
import ThemeSwitch from "./comp/ThemeSwitch"

export default function Component() {
  const { theme, setTheme } = useTheme()
  const { data: session } = useSession()
  if(session) {
    return <>
      <ThemeSwitch />
      <br/>
      <br/>

      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>

<ThemeSwitch />
<br/>
      <br/>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}