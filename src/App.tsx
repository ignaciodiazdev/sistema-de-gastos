import { FormGasto } from "./components/FormGasto";
import { SidebarNav } from "./components/SidebarNav"
import { DarkThemeToggle } from "flowbite-react";

function App() {

  return (
    <main className="bg-white dark:bg-black px-4 md:px-32">
        <header className="flex justify-between py-2 align-middle">
          <DarkThemeToggle /> 
          <SidebarNav/>
        </header>
        <section className="">
          <FormGasto/>
        </section>
    </main>
  )
}

export default App
