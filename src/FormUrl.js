import React from "react";

export const useForm = (initialValue, initialData, onSubmit, urlValidator) => {
  const [values, setValues] = React.useState(initialValue);
  const [formData, setFormData] = React.useState(initialData);
  const [touched, setTouched] = React.useState(false);

  const onSubmission = () => {
    Event.preventDefault();

    try {
      urlValidator.validateSync(values.submissionLink);
    } catch (e) {
      setFormData({ ...formData, urlError: e.message, validUrl: false });
      setTouched(true);

      return;
    }
    onSubmit();
    setFormData({
      ...formData,
      validUrl: true,
      showPopup: false,
    });
    setValues({ ...values, submissionLink: "" });
    setTouched(false);
  };
  const handleBlur = () => {
    setTouched(true);
  };

  const onInputChange = (event) => {
    setValues({ ...values, submissionLink: event.target.value });

    try {
      urlValidator.validateSync(values.submissionLink);
      setFormData({ ...formData, validUrl: true });
      setTouched(false);
    } catch (e) {
      setFormData({ ...formData, urlError: e.message, validUrl: false });
      console.log(e.message);
      return;
    }
  };
  const onShowPopup = () => {
    setFormData({ ...formData, showPopup: true });
  };
  const onPopupClose = () => {
    setFormData({
      ...formData,
      validUrl: true,
      showPopup: false,
    });
    setValues({ ...values, submissionLink: "" });
    setTouched(false);
  };

  return {
    formData,
    onInputChange,
    onShowPopup,
    onPopupClose,
    onSubmission,
    touched,
    values,
    handleBlur,
  };
};
