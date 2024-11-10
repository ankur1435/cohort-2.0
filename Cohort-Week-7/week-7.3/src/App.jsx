import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobskAtom, messagingAtom, networkAtom, notificationsAtom } from './atoms'

function App() {
  return(
    <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </div>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobskAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationsAtom);

  return (
    <div>
      <button>Home</button> 

      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationAtomCount})</button>

      <button>Me</button>
    </div> 
  )
}

export default App
