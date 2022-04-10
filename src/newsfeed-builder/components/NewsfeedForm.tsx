import React, { useState } from "react";
import { connect, Form } from "formik";
import { FormikContextType } from "formik/dist/types";
import {
  AlertTitle,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { NewsfeedPreview } from "./NewsfeedPreview";
import { Alert } from "@mui/lab";
import {NewsfeedSettings} from "./types";
import FontFamilySelect from "./FontFamilySelect";

function TabPanel(props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const NewsfeedForm = ({
  formik,
}: {
  formik: FormikContextType<NewsfeedSettings>;
}) => {
  const values = formik.values as FormikContextType<NewsfeedSettings>["values"];
  const { handleChange, handleSubmit } = formik;
  const [tab, setTab] = useState(0);

  return (
    <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <NewsfeedPreview settings={values} />

      <Tabs
        value={tab}
        onChange={(event, newTabIndex) => setTab(newTabIndex)}
        aria-label="basic tabs example"
      >
        <Tab label="Layout" {...a11yProps(0)} />
        <Tab label="Titel" {...a11yProps(1)} />
        <Tab label="Bild" {...a11yProps(1)} />
        <Tab label="Beschreibung" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={tab} index={0}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <TextField
              type={"string"}
              name={"layout.width"}
              label={"Gesamtbreite Newsfeed (mit Einheit: px, %, ...)"}
              value={values.layout.width}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              type={"number"}
              name={"layout.columns"}
              label={"max. Anzahl Säulen"}
              value={values.layout.columns}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              type={"number"}
              name={"layout.minWidthPost"}
              label={"Mindestbreite Post (in px)"}
              value={values.layout.minWidthPost}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id={"layout-justify-content-label"}>
                Ausrichtung
              </InputLabel>
              <Select
                labelId={"layout-justify-content-label"}
                name={"layout.justifyContent"}
                value={values.layout.justifyContent}
                onChange={handleChange}
                fullWidth
                // this does not display the label, but it creates the gap in the border.. -.-
                label={"Ausrichtung"}
              >
                <MenuItem value={"flex-start"}>linksbündig</MenuItem>
                <MenuItem value={"center"}>zentriert</MenuItem>
                <MenuItem value={"flex-end"}>rechtsbündig</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tab} index={1}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <FontFamilySelect
              key="title-font-family-select"
              name={"title.fontFamily"}
              value={values.title.fontFamily}
              onChange={handleChange}
              fullWidth
              label={"Schriftart"}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              type={"color"}
              name={"title.color"}
              label={"Schriftfarbe"}
              value={values.title.color}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              type={"number"}
              name={"title.fontSize"}
              label={"Schriftgröße (in px)"}
              value={values.title.fontSize}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <Typography id="title-max-length-slider" gutterBottom>
              maximale Länge
            </Typography>
            <Slider
              defaultValue={4}
              aria-labelledby="title-max-length-slider"
              name={"title.maxLength"}
              value={values.title.maxLength}
              onChange={handleChange}
              step={1}
              min={0}
              max={200}
            />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tab} index={2}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id={"image-object-fit-label"}>Anzeige Methode</InputLabel>
              <Select
                labelId={"image-object-fit-label"}
                name={"image.objectFit"}
                value={values.image.objectFit}
                onChange={handleChange}
                fullWidth
                // this does not display the label, but it creates the gap in the border.. -.-
                label={"Anzeige Methode"}
              >
                <MenuItem value={"cover"}>ausfüllend</MenuItem>
                <MenuItem value={"contain"}>vollständig</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <TextField
              type={"number"}
              name={"image.height"}
              label={"Höhe (in px)"}
              onChange={handleChange}
              value={values.image.height}
              fullWidth
            />
          </Grid>


          <Grid item xs={6}>
            <TextField
              type={"number"}
              name={"image.borderWidth"}
              label={"Rahmen Breite (in px)"}
              onChange={handleChange}
              value={values.image.borderWidth}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              type={"color"}
              name={"image.borderColor"}
              label={"Rahmen Farbe"}
              onChange={handleChange}
              value={values.image.borderColor}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Typography id="border-radius-slider" gutterBottom>
              Kanten Radius
            </Typography>
            <Slider
              defaultValue={4}
              aria-labelledby="border-radius-slider"
              name={"image.borderRadius"}
              value={values.image.borderRadius}
              onChange={handleChange}
              step={1}
              marks
              min={0}
              max={20}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={tab} index={3}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <FontFamilySelect
              key="text-font-family-select"
              name={"text.fontFamily"}
              label={"Schriftart"}
              value={values.text.fontFamily}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type={"color"}
              name={"text.color"}
              label={"Schriftfarbe"}
              value={values.text.color}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              type={"number"}
              name={"text.fontSize"}
              label={"Schriftgröße (in px)"}
              value={values.text.fontSize}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <Typography id="text-max-length-slider" gutterBottom>
              maximale Länge
            </Typography>
            <Slider
              defaultValue={4}
              aria-labelledby="text-max-length-slider"
              name={"text.maxLength"}
              value={values.text.maxLength}
              onChange={handleChange}
              step={1}
              min={0}
              max={500}
            />
          </Grid>
        </Grid>
      </TabPanel>

      <Grid container rowSpacing={2}>
        <Grid item xs={12} /> <Grid item xs={12} />
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <Alert variant="outlined" severity="info" sx={{ maxWidh: "200px" }}>
              <AlertTitle>Tipp</AlertTitle>
              Am der Kante der Vorschau unten rechts kann die Größe des
              Containers verändert werden, um die Anzeige in verschiedenen
              Bildschirmgrößen zu testen.
            </Alert>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant={"contained"}
              type={"submit"}
              // sx={{ height: "fit-content" }}
            >
              Speichern
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
};

// @ts-ignore
export default connect<PostEditorFormProps>(NewsfeedForm);
