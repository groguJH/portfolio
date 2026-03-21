import ProjectsPresenter from "No/components/presenters/ProjectsPresenter";
import {
  ProjectEntry,
  PROJECTS_DATA,
  TAB_TYPE,
  TabType,
} from "No/data/projects";
import React, { useMemo, useState } from "react";

export interface ProjectsPresenterProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  projects: ProjectEntry[];
  tabs: typeof TAB_TYPE;
  selectedProject: ProjectEntry | null;
  setSelectedProject: (project: ProjectEntry | null) => void;
}

export default function ProjectsContainer() {
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState<TabType>("Featured");
  // 탭 변경에 따른 필터링 로직 추가
  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return PROJECTS_DATA;
    if (activeTab === "Featured")
      return PROJECTS_DATA.filter((p) => p.isFeatured);
    return PROJECTS_DATA.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <ProjectsPresenter
      activeTab={activeTab}
      setActiveTab={handleTabChange}
      projects={filteredProjects}
      tabs={TAB_TYPE}
      selectedProject={selectedProject}
      setSelectedProject={setSelectedProject}
    />
  );
}
