import React, { FC, useState } from 'react';
import { View, Modal, TextInput, Button } from 'react-native';
type NameModalProps = {
    onSubmit: (name: string) => void;
  };

const NameModal: FC<NameModalProps> = ({onSubmit }) => {
  const [name, setName] = useState('');
  const [visible,setVisible] = useState(true)
  const handleSubmit = () => {
    setName('');
    onSubmit(name)
    setVisible(false)
  };

  return (
    <Modal visible={visible} animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            style={{
              marginBottom: 10,
              padding: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
              width: 200,
            }}
          />
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </Modal>
  );
};

export default NameModal;
