import { renderHook, act } from "@testing-library/react";
import useProjects from "../hooks/useProjects";

describe("useProjects hook", () => {
  it("creates a new project", () => {
    const { result } = renderHook(() => useProjects());
    const initialProjectsLength = result.current.projects.length;
    act(() => {
      result.current.createProject();
    });
    expect(result.current.projects.length).toBe(initialProjectsLength + 1);
  });

  it("updates the name of an active project", () => {
    const { result } = renderHook(() => useProjects());
    act(() => {
      result.current.createProject();
    });
    const newName = "New Project Name";
    const mockEvent = {
      target: { value: newName },
    } as React.ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.updateProjectName(mockEvent);
    });
    expect(result.current.projects[0].name).toBe(newName);
  });

  it("sets activeProject to null on handleProjectBlur", () => {
    const { result } = renderHook(() => useProjects());
    act(() => {
      result.current.createProject();
    });
    act(() => {
      result.current.handleProjectBlur();
    });
    expect(result.current.activeProject).toBeNull();
  });

  it("deletes a project", () => {
    const { result } = renderHook(() => useProjects());
    act(() => {
      result.current.createProject();
    });
    const initialProjectsLength = result.current.projects.length;
    const projectIdToDelete = result.current.projects[0].id;
    act(() => {
      result.current.deleteProject(projectIdToDelete);
    });
    expect(result.current.projects.length).toBe(initialProjectsLength - 1);
    expect(
      result.current.projects.find((p) => p.id === projectIdToDelete)
    ).toBeUndefined();
  });
});
