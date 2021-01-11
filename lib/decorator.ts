// https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators

import "reflect-metadata";

export const formatMetadataKey = Symbol("format");

export const ClassDecorator = (desc: string) => {
  console.log("ClassDecorator(): evaluated");

  return (target: Function) => {
    console.log("ClassDecorator(): called");
    console.log("ClassDecorator(): target", target);
  }
}

export const PropertyDecorator = (desc: string) => {
  console.log("PropertyDecorator(): evaluated");

  return (target: Object, propertyKey: string) => {

    console.log("PropertyDecorator(): called");
    console.log("PropertyDecorator(): target", target);
    console.log("PropertyDecorator(): propertyKey", propertyKey);
  }
}

export const MethodDecorator = (desc: string) => {
  console.log("MethodDecorator(): evaluated");

  return (target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    Reflect.defineMetadata(formatMetadataKey, desc, target, propertyKey);

    console.log("MethodDecorator(): called");
    console.log("MethodDecorator(): target", target);
    console.log("MethodDecorator(): propertyKey", propertyKey);
    console.log("MethodDecorator(): descriptor", descriptor);
  }
}
