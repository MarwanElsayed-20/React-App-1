import React from "react";
import "../Form/form.css";

export default function Form({ showLabel }) {
  return (
    <>
      <form
        action=""
        className="w-50 p-3 mx-auto mt-5 ng-valid ng-touched ng-submitted ng-dirty"
      >
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            userName:
          </label>
          <input
            type="text"
            className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"
            id="formGroupExampleInput"
            placeholder="userName"
            onKeyUp={(e) => {
              showLabel(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput1" className="form-label">
            userAge:
          </label>
          <input
            type="text"
            className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"
            id="formGroupExampleInput1"
            placeholder="userAge"
            onKeyUp={(e) => {
              showLabel(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            userEmail:
          </label>
          <input
            type="text"
            className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"
            id="formGroupExampleInput2"
            placeholder="userEmail"
            onKeyUp={(e) => {
              showLabel(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput3" className="form-label">
            userPassword:
          </label>
          <input
            type="text"
            className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"
            id="formGroupExampleInput3"
            placeholder="userPassword"
            onKeyUp={(e) => {
              showLabel(e);
            }}
          />
        </div>
        <button className="btn mt-4 text-white">send message</button>
      </form>
    </>
  );
}
