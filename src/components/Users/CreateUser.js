import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./CreateUser.module.css";

const CreateUser = ({ onCreateUser }) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const createUserHandler = (e) => {
    e.preventDefault();

    // Check if there is data, if not then ther is no submit
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "No data",
        message: "Complete the form with your data !!!",
      });
      return;
    }

    // +inputAge means that it's a number not a string
    if (+inputAge < 1) {
      setError({
        title: "Incorrect age",
        message: "Age should be more than 0 !!!",
      });
      return;
    }

    // Get data from nameChangeHandler, ageChangeHandler functions
    onCreateUser(inputName, inputAge);

    // Clear data once submitted also using value={inputName}... to make it work
    setInputName("");
    setInputAge("");
  };

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  // Set the modal to false to close it, call it on ErrorModal
  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={inputName}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="text"
            onChange={ageChangeHandler}
            value={inputAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateUser;
