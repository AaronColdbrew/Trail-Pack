// This component returns a form control that allows a user to input a certain amount of text.
// It receives an object in the form of {value: x, error: y} (and a setState). It returns the form control.
// It can be used to create new items or edit existing items.

import React from "react";
import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

export default function DisplayText({
  title = "",
  text,
  onTextChange,
  onFocusChange,
  error,
  style,
}) {
  return (
    <View style={style}>
      <TextInput
        mode="outlined"
        label={title}
        value={text}
        error={!!error}
        onChangeText={(x) => {
          onTextChange(x);
        }}
        onFocus={() => onFocusChange(true)}
        onBlur={() => onFocusChange(false)}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
    </View>
  );
}
