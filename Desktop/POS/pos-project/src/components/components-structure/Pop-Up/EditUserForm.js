import React from "react";
import "../../components-style/Form.css";
import { Button } from "../Reusable components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditUserForm = ({
  setOppen,
  userData,
  setUserData,
  Editable_user,
  index,
}) => {
  const closeForm = () => {
    setOppen(false);
  };
  console.log(Editable_user);

  const userForm = useFormik({
    initialValues: {
      discount_percentage: Editable_user.discount_percentage,
    },
    validationSchema: Yup.object({
      discount_percentage: Yup.number().required("Required"),
    }),
    onSubmit: (value) => {
      let newArr = [...userData];
      newArr[index].discount_percentage = value.discount_percentage;
      setUserData(newArr);
      closeForm();
    },
  });
  return (
    <div className="modalBackground">
      <div className="modalContainer EditUser">
        <div className="titleCloseBtn ">
          <Button text="X" onClick={() => closeForm()} />
        </div>
        <div className="title">
          <h2>
            Edit User <i class="fa-solid fa-user"></i>
          </h2>
        </div>
        <div className="body">
          <form onSubmit={userForm.handleSubmit}>
            <div className="providerUserDiscount">
              <div className="dis-container">
                {" "}
                <lable>Discount percentage</lable>
                <input
                  type="number"
                  id="discount_percentage"
                  name="discount_percentage"
                  className="login-input discount_percentage"
                  onChange={userForm.handleChange}
                  onBlur={userForm.handleBlur}
                  value={userForm.values.discount_percentage}
                />
                {userForm.touched.discount_percentage &&
                userForm.errors.discount_percentage ? (
                  <p style={{ color: "red" }}>
                    {userForm.errors.discount_percentage}
                  </p>
                ) : null}
              </div>
              <div className="percentage">%</div>
            </div>
            <div className="button-container">
              <Button
                type="submit"
                text="Save"
                buttonStyle="btn--outline add"
                buttonSize="btn--small "
                icon=<i class="fa-solid fa-floppy-disk"></i>
              />
              <Button
                text="Cancel"
                buttonStyle="btn--outline cancel"
                buttonSize="btn--small"
                onClick={() => closeForm()}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;
