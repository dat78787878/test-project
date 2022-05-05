import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postData, putData } from '../../redux/usedTime/actions';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ModalTable = ({ show, setShow, typeModal, positonEdit, usedTimeData, setTypeModal }) => {
  const listOption = ['true', 'false'];
  const initvalues = {
    title: '',
    is_finished: 'false',
  };
  const [initData, setInitData] = useState(initvalues);
  const notifyS = () => toast.success('Success');
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeModal === 'Edit') {
      const data = usedTimeData[positonEdit];
      setInitData({
        titleI: data.title,
        is_finishedI: data.is_finished,
      });
    }
  }, [positonEdit, usedTimeData, typeModal]);

  const onHide = () => {
    setTypeModal('');
    setInitData(initvalues);
    setShow(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initData,
    validationSchema: Yup.object({
      titleI: Yup.string()
        .required('Required!')
        .min(2, 'Mininum 2 characters')
        .max(255, 'Maximum 255 characters'),
      is_finishedI: Yup.string().required('Required!'),
    }),
    onSubmit: (values) => {
      const todo = {
        title: values.titleI,
        is_finished: values.is_finishedI,
      };
      if (typeModal === 'Add') {
        dispatch(postData(todo));
        values.titleI = '';
        values.is_finishedI = '';
      }
      if (typeModal === 'Edit') {
        const _id = usedTimeData[positonEdit]._id;
        const todoE = { ...todo, _id };
        dispatch(putData([todoE, positonEdit]));
      }
      onHide();
      notifyS();
    },
  });

  return (
    <div className="modalShowTable">
      <ToastContainer />
      <Modal
        show={show}
        onHide={onHide}
        dialogClassName="modal-custom-table"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title>{typeModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <div className="modal-contain">
              <div className="modal-item">
                <div className="modal-text-title">Title</div>
                <input
                  className={
                    formik.errors.titleI && formik.touched.titleI
                      ? 'modal-text-input error-input'
                      : 'modal-text-input'
                  }
                  value={formik.values.titleI}
                  onChange={formik.handleChange}
                  placeholder="Title"
                  name="titleI"
                />
                {formik.touched.titleI && formik.errors.titleI && <p>{formik.errors.titleI}</p>}
              </div>
              <div className="modal-item">
                <div className="modal-text-title">Finished</div>
                <Form.Select
                  onChange={formik.handleChange}
                  name="is_finishedI"
                  className={
                    formik.errors.is_finishedI && formik.touched.is_finishedI ? 'error-input' : ''
                  }
                  value={formik.values.is_finishedI}
                >
                  <option>Please select</option>
                  {listOption.map((val, index) => {
                    return (
                      <option key={index + uuidv4()} value={val}>
                        {val}
                      </option>
                    );
                  })}
                </Form.Select>
                {formik.touched.is_finishedI && formik.errors.is_finishedI && (
                  <p>{formik.errors.is_finishedI}</p>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-end modal-buton">
              <Button variant="secondary" data-testid="btnCancel" onClick={onHide}>
                Cancel
              </Button>
              <Button
                variant="success"
                className="modal-buton-ok"
                data-testid="btnOK"
                type="submit"
              >
                OK
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalTable;
