## react_native_dropdown

A React Native dropdown component easy to customize for both iOS and Android.

## Features

- Multiple Dropdown types in one package
- Easy to use
- Consistent look and feel on iOS and Android
- Customizable font size, colors and styling
- Implemented with javascript

## Getting started

```js
npm install @jaichaudhary/react_native_dropdown --save
```

or

```js
yarn add @jaichaudhary/react_native_dropdown
```

#### Dropdown types

```js
import { HandyDrop } from "react_native_dropdown";
```

and

```js
import { ModalDrop } from "react_native_dropdown";
```

## Demo

#### HandyDrop
![HandyDrop](https://user-images.githubusercontent.com/59798109/164994468-4fe5b0a1-09d8-4df8-8b85-00316e3d8c2f.gif)

#### ModalDrop
![ModalDrop](https://user-images.githubusercontent.com/59798109/164994478-fecd21ca-0f79-4907-9907-b55f4c2c6a99.gif)

#### Example

```js
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [output, setOutput] = useState("");
  const arr = [
    "text",
    "kill me!",
    "hello ji",
    "text",
    "kill me!",
    "hello ji",
    "text",
    "kill me!",
    "hello ji",
    "text",
    "kill me!",
    "hello ji",
  ];
  const returnVal = (val) => {
    setOutput(val);
    setIsOpen(false);
  };
  return (
    <View contentContainerStyle={{ flex: 1 }}>
      <View
        style={{
          displya: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{output}</Text>
        <TouchableOpacity
          style={{ backgroundColor: "pink", padding: 10 }}
          onPress={() => {
            setIsOpen(true);
          }}
        >
          <Text>Click here!</Text>
        </TouchableOpacity>
        {isOpen && (
          <HandyDrop value={arr} returnVal={returnVal} />
          // <ModalDrop
          //   value={arr}
          //   returnVal={returnVal}
          //   // modalViewStyle={{backgroundColor: 'yellow'}}
          // />
        )}
      </View>
    </View>
  );
};
```

## Dropdown Props

| Props           | Params            | isRequire | Description                           |
| --------------- | ----------------- | --------- | ------------------------------------- |
| value           | Array             | Yes       | Data is a plain array                 |
| returnVal       | Callback function | Yes       | Gives us the slected data             |
| parentViewStyle | Object            | No        | Styling for the parent View           |
| modalViewStyle  | Object            | No        | Styling for the modal View            |
| textParentStyle | Object            | No        | Styling for the parent View of text   |
| selectTextStyle | Object            | No        | Styling for the `select an item` text |
| textStyle       | Object            | No        | Styling for the text in dropdown      |
