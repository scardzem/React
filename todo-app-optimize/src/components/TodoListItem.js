import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdOutlineCheckBoxOutlineBlank,
} from 'react-icons/md';
import '../styles/TodoListItem.scss';
import cn from 'classnames';
const TodoListItem = ({ todo, onRemove, onChecked }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div
        className={cn('checkbox', { checked })}
        onClick={() => onChecked(id)}
      >
        {checked ? <MdCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
