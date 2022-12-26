import React from "react";
import { Modal } from "antd";

import { IModal } from "./modal.types";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  setIsModalOpen,
  setIsModalOpen2,
  setIsModalOpen3,
  setIsModalOpen4,
} from "../../../redux/modal/modal.slice";
import { selectModal } from "../../../redux/modal/modal.selectors";
import { setGetId } from "../../../redux/getId/getId.slice";

const ModalContainer: React.FC<IModal> = ({
  title,
  children,
  form,
  success,
  loading,
  reset = true,
}) => {
  const dispatch = useAppDispatch();
  const { isModalOpen, isModalOpen2, isModalOpen3, isModalOpen4 } =
    useAppSelector(selectModal);
  const onCancelModal = () => {
    form?.resetFields();
    if (isModalOpen) {
      dispatch(setIsModalOpen(false));
    } else if (isModalOpen2) {
      dispatch(setIsModalOpen2(false));
    } else if (isModalOpen3) {
      dispatch(setIsModalOpen3(false));
    } else {
      dispatch(setIsModalOpen4(false));
    }
    dispatch(setGetId(null));
  };
  const handleOk = () => {
    form?.submit();
  };
  React.useEffect(() => {
    if (success) {
      form?.resetFields();
      if (isModalOpen) {
        dispatch(setIsModalOpen(false));
      } else if (isModalOpen2) {
        dispatch(setIsModalOpen2(false));
      } else if (isModalOpen3) {
        dispatch(setIsModalOpen3(false));
      } else {
        dispatch(setIsModalOpen4(false));
      }
      dispatch(setGetId(null));
    }
  }, [success, form]);
  React.useEffect(() => {
    if (reset) {
      form?.resetFields();
    }
  }, [reset]);
  return (
    <Modal
      title={title}
      open={isModalOpen || isModalOpen2 || isModalOpen3 || isModalOpen4}
      onCancel={onCancelModal}
      onOk={handleOk}
      confirmLoading={loading}
      cancelText="Отмена"
      okText="Сохранить"
    >
      {children}
    </Modal>
  );
};

export default ModalContainer;
