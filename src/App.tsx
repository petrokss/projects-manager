import Header from "./components/Header";
import ProjectsList from "./components/ProjectsList";
import useProjects from "./hooks/useProjects";

function App() {
  const {
    projects,
    activeProject,
    createProject,
    deleteProject,
    updateProjectName,
    handleProjectBlur,
    handleProjectFocus,
  } = useProjects();

  return (
    <>
      <Header onClick={createProject} />
      <ProjectsList
        projects={projects}
        activeProject={activeProject}
        onProjectNameChange={updateProjectName}
        onProjectFocus={handleProjectFocus}
        onProjectBlur={handleProjectBlur}
        onProjectDelete={deleteProject}
      />
    </>
  );
}

export default App;
