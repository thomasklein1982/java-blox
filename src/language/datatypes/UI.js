import { createAttribute } from "../helper/createAttribute";
import { createConstructor } from "../helper/createConstructor";
import { createMethod } from "../helper/createMethod";

export function defineUIClazzes(Java){
  defineJComponent(Java.datatypes.JComponent,Java);
  defineJButton(Java.datatypes.JButton,Java);
  defineJLabel(Java.datatypes.JLabel,Java);
  defineJTextArea(Java.datatypes.JTextArea,Java);
  defineJTextField(Java.datatypes.JTextField,Java);
  defineJCheckBox(Java.datatypes.JCheckBox,Java);
  defineJCombobox(Java.datatypes.JCombobox,Java);
}

function defineJComponent(Clazz,Java){
  window.JComp=Clazz;
  createMethod({
    name: 'setValue',
    args: [
      {name: 'v', type: 'String'}
    ]
  },Clazz,false,false,Java);
  createMethod({
    name: 'setVisible',
    args: [
      {name: 'v', type: 'boolean'}
    ]
  },Clazz,false,false,Java);
  createMethod({
    name: 'getValue',
    returnType: 'String'
  },Clazz,false,false,Java);
  createMethod({
    name: 'isVisible',
    returnType: 'boolean'
  },Clazz,false,false,Java);
  createMethod({
    name: 'setX',
    args: [
      {name: 'v', type: 'double'}
    ]
  },Clazz,false,false,Java);
  createMethod({
    name: 'setY',
    args: [
      {name: 'v', type: 'double'}
    ]
  },Clazz,false,false,Java);
  createMethod({
    name: 'setWidth',
    args: [
      {name: 'v', type: 'double'}
    ]
  },Clazz,false,false,Java);
  createMethod({
    name: 'setHeight',
    args: [
      {name: 'v', type: 'double'}
    ]
  },Clazz,false,false,Java);
  createMethod({
    name: 'getX',
    returnType: 'double'
  },Clazz,false,false,Java);
  createMethod({
    name: 'getY',
    returnType: 'double'
  },Clazz,false,false,Java);
  createMethod({
    name: 'getWidth',
    returnType: 'double'
  },Clazz,false,false,Java);
  createMethod({
    name: 'getHeight',
    returnType: 'double'
  },Clazz,false,false,Java);
  createMethod({
    name: 'setStyle',
    args: [
      {name: 'key', type: 'String'},
      {name: 'value', type: 'String'}
    ]
  },Clazz,false,false,Java);
  createMethod({
    name: 'getStyle',
    returnType: 'String',
    args: [
      {name: 'key', type: 'String'}
    ]
  },Clazz,false,false,Java);
  createMethod({
    name: 'setAlign',
    args: [
      {name: 'align', type: 'String'}
    ]
  },Clazz,false,false,Java);
  createMethod({
    name: 'setAlignContent',
    args: [
      {name: 'align', type: 'String'}
    ]
  },Clazz,false,false,Java);
  // createAttribute({
  //   name: "value",
  //   type: Java.datatypes.String,
  // },Clazz,false,Java);
  // createAttribute({
  //   name: "visible",
  //   type: Java.datatypes.boolean,
  // },Clazz,false,Java);
}

function defineJButton(Clazz,Java){
  createConstructor ({
    args: [
      {type: 'String', name: 'label'}, {type: 'double', name: 'x'}, {type: 'double', name: 'y'}, {type: 'double', name: 'width'}, {type: 'double', name: 'height'}
    ]
  },Clazz,Java);
  Clazz.superClazz=Java.datatypes.JComponent;
  
}

function defineJLabel(Clazz,Java){
  createConstructor ({
    args: [
      {type: 'String', name: 'text'}, {type: 'double', name: 'x'}, {type: 'double', name: 'y'}, {type: 'double', name: 'width'}, {type: 'double', name: 'height'}
    ]
  },Clazz,Java);
  Clazz.superClazz=Java.datatypes.JComponent;
  
}

function defineJTextField(Clazz,Java){
  createConstructor ({
    args: [
      {type: 'String', name: 'type'}, {type: 'String', name: 'placeholder'}, {type: 'double', name: 'x'}, {type: 'double', name: 'y'}, {type: 'double', name: 'width'}, {type: 'double', name: 'height'}
    ]
  },Clazz,Java);
  Clazz.superClazz=Java.datatypes.JComponent;
  
}

function defineJTextArea(Clazz,Java){
  createConstructor ({
    args: [
      {type: 'String', name: 'placeholder'}, {type: 'double', name: 'x'}, {type: 'double', name: 'y'}, {type: 'double', name: 'width'}, {type: 'double', name: 'height'}
    ]
  },Clazz,Java);
  Clazz.superClazz=Java.datatypes.JComponent;
  
}

function defineJCombobox(Clazz,Java){
  createConstructor ({
    args: [
      {type: {baseType: 'String', dimension: 1}, name: 'options'}, {type: 'double', name: 'x'}, {type: 'double', name: 'y'}, {type: 'double', name: 'width'}, {type: 'double', name: 'height'}
    ]
  },Clazz,Java);
  Clazz.superClazz=Java.datatypes.JComponent;
  
}

function defineJCheckBox(Clazz,Java){
  createConstructor ({
    args: [
      {type: 'String', name: 'label'}, {type: 'double', name: 'x'}, {type: 'double', name: 'y'}, {type: 'double', name: 'width'}, {type: 'double', name: 'height'}
    ]
  },Clazz,Java);
  Clazz.superClazz=Java.datatypes.JComponent;
  
}