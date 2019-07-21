import React from 'react';

import PropTypes from 'prop-types';

import { Divider, Dropdown } from 'react-materialize';

const ProjectActions = ({ children, projectOwnerId, userId, onGet, onDelete, ...rest }) => {
  const isUserProjectOwner = projectOwnerId === userId;

  let actions = [
    <a href="#!" onClick={onGet} key="get_embed">
      Get
    </a>,
  ];

  /* <a href="#!" key="edit_project">
        Edit
      </a>, */

  if (isUserProjectOwner) {
    actions = [
      ...actions,
      <Divider key="divider" />,
      <a href="#!" onClick={onDelete} className="red-text" key="delete_project">
        Delete
      </a>,
    ];
  }

  return (
    <Dropdown trigger={children} {...rest}>
      {actions}
    </Dropdown>
  );
};

ProjectActions.defaultProps = { userId: '' };

ProjectActions.propTypes = {
  children: PropTypes.node.isRequired,
  projectOwnerId: PropTypes.string.isRequired,
  userId: PropTypes.string,
  onGet: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProjectActions;
