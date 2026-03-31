import React, { useEffect } from "react";
import * as S from "./utils/ProjectsCard";
import Image from "next/image";
import { ProjectsPresenterProps } from "No/containers/ProjectsContainer";
import {
  CardContent,
  CardHeader,
  CardTitle,
  ItemDesc,
} from "./utils/GlassSkillsCard";
import {
  GithubIcon,
  LinkWrapper,
  PortfolioLinkIcon,
} from "./utils/ProjectsCard";

export default function ProjectsPresenter({
  activeTab,
  setActiveTab,
  projects,
  tabs,
  selectedProject,
  setSelectedProject,
}: ProjectsPresenterProps) {
  const [activeImage, setActiveImage] = React.useState<string | null>(null);
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const handleImageClick = (imgSrc: string) => {
    setActiveImage(imgSrc);
    dialogRef.current?.showModal();
  };

  const isModalOpen = !!selectedProject || !!activeImage;

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedProject, activeImage]);

  return (
    <S.Section id="Projects">
      <S.Title>Projects</S.Title>

      {/* 탭 네비게이션 */}
      <S.FilterContainer>
        {tabs.map((tab) => (
          <S.Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </S.Tab>
        ))}
      </S.FilterContainer>

      <S.ProjectGrid>
        {projects.map((project) => (
          <S.ProjectItem
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >
            <CardHeader>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "200px",
                  marginBottom: "20px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardTitle style={{ color: "white" }}>{project.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <ItemDesc style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                {project.desc}
              </ItemDesc>
              <S.TagGroup>
                {project.tags.map((tag, index) => (
                  <S.Tag key={index}>{tag}</S.Tag>
                ))}
              </S.TagGroup>
            </CardContent>
          </S.ProjectItem>
        ))}
      </S.ProjectGrid>

      {selectedProject && (
        <S.ModalOverlay onClick={() => setSelectedProject(null)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseBtn onClick={() => setSelectedProject(null)}>X</S.CloseBtn>

            <S.ModalTitle>{selectedProject.title}</S.ModalTitle>

            <S.ModalHeader>
              <S.SectionTitle>프로젝트 설명</S.SectionTitle>
              <p>
                {selectedProject.detailDesc1.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>

              <LinkWrapper>
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <GithubIcon />
                    깃허브 바로가기
                  </a>
                )}
                {selectedProject.serviceUrl && (
                  <a
                    href={selectedProject.serviceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <PortfolioLinkIcon />
                    서비스 바로가기
                  </a>
                )}
              </LinkWrapper>
            </S.ModalHeader>
            <S.UnderLine />
            <S.ModalSection>
              <S.SectionTitle>주요 기능 소개</S.SectionTitle>
              <ul>
                {selectedProject.detailDesc2.split("\n").map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </S.ModalSection>

            {/* 서브 이미지 미리보기 */}
            <S.SubImageGrid>
              {selectedProject.subImages.map(
                (img, idx) =>
                  img && (
                    <img
                      key={idx}
                      src={img}
                      alt="sub"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        borderRadius: "8px",
                      }}
                      onClick={() => handleImageClick(img)}
                    />
                  ),
              )}
            </S.SubImageGrid>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
      {activeImage && (
        <S.LightboxDialog
          ref={dialogRef}
          onClick={() => dialogRef.current?.close()}
        >
          <div className="lightbox-container">
            <img src={activeImage} alt="Lightbox" />
          </div>
        </S.LightboxDialog>
      )}
    </S.Section>
  );
}
