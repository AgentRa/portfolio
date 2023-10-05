import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';
import {
  Button,
  ButtonGroup,
  Container,
  Desc,
  Label,
  Member,
  MemberImage,
  MemberName,
  Members,
  Tag,
  Tags,
  Wrapper,
  Title,
  Date,
  Image,
  MemberPosition,
} from './styled';

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: 'absolute',
              top: '10px',
              right: '20px',
              cursor: 'pointer',
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project?.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          {project.members && (
            <>
              <Label>Members</Label>
              <Members>
                {project?.members.map((member) => (
                  <Member>
                    <MemberImage src={member.img} />
                    <MemberName>{member.name}</MemberName>
                    <MemberPosition>{member.position}</MemberPosition>
                    {member.github && (
                      <a href={member.github} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <GitHub />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <LinkedIn />
                      </a>
                    )}
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            {project?.github && (
              <Button dull href={project?.github} target="new">
                View Code
              </Button>
            )}
            {project?.webapp && (
              <Button href={project?.webapp} target="new">
                View Live App
              </Button>
            )}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;
