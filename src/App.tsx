import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Login from "./auth/login"
import GlobalComponent from "./components/gobalcomponent"
import Kudos from "./pages/worklife/kudos"
import FeedBack from "./pages/worklife/feedback"
import Tasks from "./pages/todo/tasks"
import AddTask from "./components/addtask"
import Enage from "./pages/engage"
import RequestFeedback from "./pages/worklife/feedback/requestfeedback"
import Givefeedback from "./pages/worklife/feedback/givefeedback"
import Documents from "./pages/documents"
import People from "./pages/people"
import Request from "./pages/requesthub/request"
import { useEffect, useState } from "react"
import PersonalInfo from "./profile/personalinfo"
import ForgotPassword from "./auth/forgotpassword"


function App() {
  const [theme,setTheme] = useState(localStorage.getItem("theme") || "light")
  const HomeComponent = GlobalComponent(Home,setTheme)
  const FeedbackComponent = GlobalComponent(FeedBack,setTheme)
  const KudosComponent = GlobalComponent(Kudos,setTheme)
  const TaskComponent = GlobalComponent(Tasks,setTheme);
  const EngageComponent = GlobalComponent(Enage,setTheme);
  const DocumentComponent = GlobalComponent(Documents,setTheme)
  const PeopleComponent = GlobalComponent(People,setTheme);
  const RequestHubComponent = GlobalComponent(Request,setTheme);
  const ProfileComponent = GlobalComponent(PersonalInfo, setTheme) 


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark")
    }
  },[theme])
  return (
    <>

      <Routes>

        <Route path="/" element = {<HomeComponent />}/>
        <Route path="/engage" element = {<EngageComponent />}/>
        <Route path="/kudos" element={<KudosComponent/>} />
        <Route path="/feedback" element={<FeedbackComponent/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/received" element={<RequestFeedback/>} />
        <Route path="/people" element={<PeopleComponent/>} />
        <Route path="/hub-request" element={<RequestHubComponent />} />
        <Route path="/give-feedback" element={<Givefeedback/>} />
        <Route path="/tasks" element={<TaskComponent/>} />
        <Route path="/documents" element={<DocumentComponent/>} />
        <Route path="/tasks/addtask" element={<AddTask/>} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App
