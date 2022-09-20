import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstIsValid,
    hasError: firstHasError,
    inputBlurHandler: firstBlurHandler,
    valueChangeHandler: firstChangeHandler,
    reset: resetFirst,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastIsValid,
    hasError: lastHasError,
    inputBlurHandler: lastBlurHandler,
    valueChangeHandler: lastChangeHandler,
    reset: resetLast,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;



  if (firstIsValid && lastIsValid && emailIsValid )  {
    formIsValid = true;
  }

  const firstInputClasses = firstHasError
  ? "form-control invalid"
  : "form-control";
  const lastInputClasses = lastHasError
  ? "form-control invalid"
  : "form-control";
  const emailInputClasses = emailHasError
  ? "form-control invalid"
  : "form-control";

const submitHandler =  (event) => {
    event.preventDefault();
    if (!formIsValid) {
        return;
      }

    resetFirst();
    resetLast();
    resetEmail();

}

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input 
          type="text" 
          id="firstName"
          onChange={firstChangeHandler}
          onBlur={firstBlurHandler}
          value={firstName}

          />
        </div>
        {firstHasError && (
            <p className="error-text">Input must not be empty</p>
          )}
          </div>
          <div className="control-group">
          <div className={lastInputClasses}>
            <label htmlFor="lastName">Last Name</label>
            <input 
            type="text" 
            id="lastName"
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
            value={lastName}
  
            />
          </div>
          {lastHasError && (
              <p className="error-text">Input must not be empty</p>
            )}
            </div>
     
            <div className="control-group">
            <div className={emailInputClasses}>
              <label htmlFor="email">Email</label>
              <input 
              type="email" 
              id="email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={email}
    
              />
            </div>
            {emailHasError && (
                <p className="error-text">Please enter valid email</p>
              )}
              </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
