import SideBar from './sidbar'
import TopBar from './topbar'

const GlobalComponent = (WrappedComponent: React.ComponentType, setTheme:(theme : string) => void)  => {
  return (props : any) => (
    <div className="dark:bg-gray-900 min-h-screen">
        <SideBar/>
        <TopBar setTheme={setTheme}/>
        <WrappedComponent {...props} />
    </div>
  )
}

export default GlobalComponent