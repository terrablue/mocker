export default class {
  static someStaticProperty = "ssp";
  someProperty = "sp";

  static someStaticFunction() {
    return "ssf";
  }

  someFunction() {
    return "sf";
  }

  static get someStaticGetter() {
    return "ssg";
  }

  get someGetter() {
    return "sg";
  }

  static set someStaticSetter(parameter) {
    // no return
  }

  set someSetter(parameter) {
    // no return
  }
}
