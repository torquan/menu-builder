import { Formik } from "formik";
import { Grid } from "@mui/material";
import NewsfeedForm from "./NewsfeedForm";

const NewsfeedData = () => {
  return (
    <Grid container>
      <Formik
        initialValues={{
          layout: {
            width: "100%",
            columns: 3,
            minWidthPost: 250,
            justifyContent: "center",
          },
          title: {
            fontFamily: "Helvetica,sans-serif",
            color: "black",
            fontSize: 24,
            maxLength: 140,
          },
          text: {
            fontFamily: "Helvetica,sans-serif",
            color: "black",
            fontSize: 16,
            maxLength: 250,
          },
          image: {
            height: 250,
            width: 200,
            borderWidth: 1,
            borderColor: "#666",
            borderRadius: 8,
            objectFit: "cover",
          },
        }}
        onSubmit={() => {}}
        enableReinitialize
      >
        {/*@ts-ignore*/}
        <NewsfeedForm />
      </Formik>
    </Grid>
  );
};

export default NewsfeedData;
