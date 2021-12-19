import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteTodoAction,
  finishTodoAction,
  updateTodoAction,
} from '../redux/actions/todoAction';
import { Button } from './Button';
import { Input } from './Input';
import { Modal } from './Modal';

interface Props {
  number: number;
  title: string;
  id: string;
  status: string;
}

export const Card: React.FC<Props> = ({ number, title, id, status }) => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [titleTodoUpdate, setTitleTodoUpdate] = useState('');

  const onChange = (evt: { target: { value: any } }) => {
    setTitleTodoUpdate(evt.target.value);
  };

  const onSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    setTitleTodoUpdate('');
    dispatch(updateTodoAction(titleTodoUpdate, id));
    setModal1(!modal1);
  };

  const dispatch = useDispatch();

  function clickOne() {
    setModal1(!modal1);
  }

  function clickTwo() {
    setModal2(!modal2);
  }

  function clickThree() {
    setModal3(!modal3);
  }

  function clickDelete() {
    dispatch(deleteTodoAction(id));
    setModal2(!modal2);
  }

  function clickDone() {
    dispatch(finishTodoAction('done', id));
    setModal3(!modal3);
  }

  return (
    <div
      className={`
        p-3 text-white rounded shadow-xl transition duration-500 ease-in-out
        ${status === 'active' ? 'bg-sky-600' : 'bg-gray-600'} 
      `}
    >
      <div className="md:flex justify-between items-center space-y-3 md:space-y-0 md:space-x-1">
        <div className="space-x-2">
          <table>
            <td className="font-extrabold">{number}.</td>
            <td className="capitalize pl-2">{title}</td>
          </table>
        </div>
        <div className="flex justify-between md:grid space-x-2 md:space-x-0 md:space-y-2">
          {status === 'active' && (
            <>
              <Button
                type="button"
                title="Edit"
                color="secondary"
                size="medium"
                block
                onClick={clickOne}
              />
              <Button
                type="button"
                title="Done"
                color="secondary"
                size="medium"
                block
                onClick={clickThree}
              />
            </>
          )}
          <Button
            type="button"
            title="Delete"
            color="secondary"
            size="medium"
            block
            onClick={clickTwo}
          />
        </div>
      </div>
      <Modal show={modal1} onClose={clickOne} title="edit todo">
        <form onSubmit={onSubmit} className="space-y-6">
          <Input onChange={onChange} defaultValue={title} />
          <div>
            <Button type="submit" title="edit" block />
          </div>
        </form>
      </Modal>
      <Modal show={modal2} onClose={clickTwo} title="want delete ?">
        <div className="space-x-2">
          <Button
            type="button"
            color="secondary"
            onClick={clickTwo}
            title="no"
            size="medium"
          />
          <Button
            type="button"
            title="yes"
            size="medium"
            onClick={clickDelete}
          />
        </div>
      </Modal>
      <Modal show={modal3} onClose={clickThree} title="want to finish ?">
        <div className="space-x-2">
          <Button
            type="button"
            color="secondary"
            onClick={clickThree}
            title="no"
            size="medium"
          />
          <Button type="button" title="yes" size="medium" onClick={clickDone} />
        </div>
      </Modal>
    </div>
  );
};
