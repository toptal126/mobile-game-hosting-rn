import React from 'react';
import {Modal, View, Text} from 'react-native';
import {styles} from '../screens/style/components/Modal';

export const PuzzleModal = ({
  modalTitle,
  visibility,
  setVisibility,
  modalImage,
  modalText,
  showWarning,
  warningText,
  buttonNo,
  buttonYes,
}) => {
  return (
    <Modal
      animationType="spring"
      transparent={true}
      visible={visibility}
      onRequestClose={() => {
        console.log('Modal has been closed.');
        setVisibility(!visibility);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
          </View>
          <View style={styles.modalBody}>
            <View>{modalImage}</View>
            <Text style={styles.modalText}>{modalText}</Text>
            {showWarning && (
              <Text style={[styles.modalText, styles.warningText]}>
                {warningText}
              </Text>
            )}
          </View>
          <View style={styles.modalFooter}>
            {buttonNo}
            {buttonYes}
          </View>
        </View>
      </View>
    </Modal>
  );
};
