import React from "react";
import { View, Text, Modal, ScrollView, TouchableOpacity } from "react-native";

const ModalDrop = ({
  value,
  returnVal,
  textStyle,
  modalViewStyle,
  parentViewStyle,
  textParentStyle,
  selectTextStyle,
}) => {
  return (
    <View>
      <Modal transparent={true} visible={true}>
        <View
          style={[
            {
              backgroundColor: "#000000aa",
              flex: 1,
              justifyContent: "center",
            },
            parentViewStyle,
          ]}
        >
          <View
            style={[
              {
                backgroundColor: "white",
                paddingVertical: 20,
                margin: 40,
                borderRadius: 8,
                maxHeight: 300,
              },
              modalViewStyle,
            ]}
          >
            <ScrollView contentContainerStyle={[textParentStyle]}>
              <TouchableOpacity
                onPress={() => {
                  returnVal("");
                }}
              >
                <Text
                  style={[
                    {
                      fontSize: 15,
                      textAlign: "center",
                      paddingVertical: 10,
                      color: "grey",
                    },
                    selectTextStyle,
                  ]}
                >
                  Select an item
                </Text>
              </TouchableOpacity>
              {value.map((val, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      returnVal(val);
                    }}
                  >
                    <Text
                      style={[
                        {
                          fontSize: 15,
                          textAlign: "center",
                          paddingVertical: 10,
                          marginTop: 5,
                        },
                        textStyle,
                      ]}
                    >
                      {val}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalDrop;
