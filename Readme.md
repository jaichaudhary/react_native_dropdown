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
    npm install react_native_dropdown --save
```

or

```js
    yarn add react_native_dropdown
```

#### Demo

![](https://github.com/hoaphantn7604/file-upload/blob/master/document/dropdown/demo.gif)
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/dropdown/demo2.gif)

#### Dropdown types

```js
import { HandyDrop } from "react_native_dropdown";
```

and

```js
import { ModalDrop } from "react_native_dropdown";
```

#### Dropdown Props

| Props           | Params            | isRequire | Description                           |
| --------------- | ----------------- | --------- | ------------------------------------- |
| value           | Array             | Yes       | Data is a plain array                 |
| returnVal       | Callback function | Yes       | Gives us the slected data             |
| parentViewStyle | Object            | No        | Styling for the parent View           |
| modalViewStyle  | Object            | No        | Styling for the modal View            |
| textParentStyle | Object            | No        | Styling for the parent View of text   |
| selectTextStyle | Object            | No        | Styling for the `select an item` text |
| textStyle       | Object            | No        | Styling for the text in dropdown      |
