import { useState } from "react";
import "./App.css";
import SideBar from "./SideBar";
import NewProject from "./NewProject";
import NoProjectSelect from "./NoProjectSelect";
import SelectedProject from "./SelectedProject";
function App() {
  const [projectState, SetProjectState] = useState({
    SelectedProjectID: undefined,
    projects: [],
    tasks: [],
  });
  function handleAddTask(text) {
    SetProjectState((prevState) => {
      const taskId = Math.random();
      const newTasks = {
        text: text,
        projectId: prevState.SelectedProjectID,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTasks],
      };
    });
  }
  function handleDeleteTask(id) {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== prevState.id),
      };
    });
  }
  function addProjectHandler() {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        SelectedProjectID: null,
      };
    });
  }
  function handleAddedProject(projectData) {
    SetProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        SelectedProjectID: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  function handleCanceledproject() {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        SelectedProjectID: undefined,
      };
    });
  }
  function handleSelectProject(id) {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        SelectedProjectID: id,
      };
    });
  }
  function handleDeleteSelectedProject() {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        SelectedProjectID: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.SelectedProjectID
        ),
      };
    });
  }
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.SelectedProjectID
  );
  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      project={selectedProject}
      onDelete={handleDeleteSelectedProject}
      tasks={projectState.tasks}
    />
  );
  if (projectState.SelectedProjectID === null)
    content = (
      <NewProject onAdd={handleAddedProject} onCancel={handleCanceledproject} />
    );
  else if (projectState.SelectedProjectID === undefined)
    content = <NoProjectSelect onAddProject={addProjectHandler} />;
  return (
    <main className='h-screen my-8 flex gap-8'>
      <SideBar
        onSelectProject={handleSelectProject}
        onAddProject={addProjectHandler}
        projects={projectState.projects}
        selectedProjectId={projectState.SelectedProjectID}
      />
      {content}
    </main>
  );
}

export default App;
