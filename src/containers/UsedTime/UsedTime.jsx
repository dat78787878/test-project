import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteData, getData } from '../../redux/usedTime/actions';
import Loading from '../../components/Loading/Loading';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import Paginatinon from '../../components/Pagination/Paginatinon';
import ModalTable from './ModalTable';
import Filter from './Filter';

const UsedTime = () => {
  const { usedTimeData, isLoading, isError } = useSelector((state) => state.usedTime);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [typeModal, setTypeModal] = useState('');
  const [positonEdit, setPosotionEdit] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(page));
  }, [page]);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    params.page ? (params.page = params.page) : (params.page = 1);
    setPage(params.page);
    dispatch(getData(params.page));
  }, [window.location.search]);

  const handleShowModalEdit = (index) => {
    setShow(true);
    setTypeModal('Edit');
    setPosotionEdit(index);
  };
  const handleShowModalDelete = (index) => {
    const _id = usedTimeData[index]._id;
    dispatch(deleteData([_id, index]));
  };

  const tableUsedTimeHeader = (
    <thead>
      <tr>
        <th colSpan={4}>UserName</th>
        <th colSpan={4}>IsFinished</th>
        <th colSpan={2}>Edit</th>
        <th colSpan={2}>Delete</th>
      </tr>
    </thead>
  );
  const tableUsedTimeBody = (
    <>
      <tbody>
        {isLoading && (
          <tr>
            <td colSpan={12}>
              <Loading />
            </td>
          </tr>
        )}
        {isError && (
          <tr>
            <td colSpan={12}>no data</td>
          </tr>
        )}
        {!isError &&
          !isLoading &&
          usedTimeData.map((val, index) => {
            return (
              <tr key={index + uuidv4()} style={{ height: '80px' }}>
                <td colSpan={4} key={index + uuidv4()}>
                  {val.title}
                </td>
                <td colSpan={4} key={index + uuidv4()}>
                  {String(val.is_finished)}
                </td>
                <td colSpan={2} key={index + uuidv4()}>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => handleShowModalEdit(index)}
                  />
                </td>
                <td colSpan={2} key={index + uuidv4()}>
                  <FontAwesomeIcon icon={faTrash} onClick={() => handleShowModalDelete(index)} />
                </td>
              </tr>
            );
          })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={12}>
            <Paginatinon totalPages={4} page={page} setPage={setPage} />
          </td>
        </tr>
      </tfoot>
    </>
  );

  return (
    <div className="usedTime">
      <ModalTable
        show={show}
        setShow={setShow}
        typeModal={typeModal}
        positonEdit={positonEdit}
        usedTimeData={usedTimeData}
        setTypeModal={setTypeModal}
      />
      <div className="padding-title ms-4">
        <Filter setShow={setShow} setTypeModal={setTypeModal} />
        <div className="usedTime-container">
          <Table striped bordered hover style={{ height: isLoading ? '500px' : '' }}>
            {tableUsedTimeHeader}
            {tableUsedTimeBody}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default UsedTime;
