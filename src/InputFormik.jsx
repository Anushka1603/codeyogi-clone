import { useField } from "formik";
import React from "react";

const InputFormik = (InComp) => {
  return function ({ name, ...rest }) {
    const [field, meta] = useField(name);

    return (
      <>
        <InComp name={name} {...meta} {...field} {...rest} />{" "}
      </>
    );
  };
};
export default InputFormik;
