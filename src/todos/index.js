import React from "react";
import {
  List,
  Edit,
  Create,
  Datagrid,
  DisabledInput,
  FileField,
  LongTextInput,
  FileInput,
  SelectInput,
  TextField,
  BooleanInput,
  BooleanField,
  EditButton,
  SimpleForm,
  TextInput,
  Filter,
  SelectField
} from "react-admin";
import { DateInput } from "react-admin-date-inputs";

import DateField from "./components/DateField";

const styles = {
  input: { width: "100%" }
};

const priorityChoices = [
  { id: "low", name: "Low" },
  { id: "medium", name: "Medium" },
  { id: "high", name: "High" }
];

const TodosFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" />
    <TextInput label="title" source="title" />
  </Filter>
);

export const TodosList = props => (
  <List title="TODO" filters={<TodosFilter />} {...props}>
    <Datagrid>
      <TextField source="title" />
      <TextField source="description" />
      <DateField source="dueDate" />
      <SelectField source="priority" choices={priorityChoices} />
      <BooleanField source="completed" />
      <EditButton />
    </Datagrid>
  </List>
);

export const TodosEdit = props => (
  <Edit title="Edit TODO" {...props}>
    <SimpleForm>
      <DisabledInput source="id" style={styles.input} />
      <TextInput
        source="title"
        style={styles.input}
        validation={{ required: true }}
      />
      <LongTextInput source="description" />
      <DateInput
        disablePast
        source="dueDate"
        label="Due date"
        options={{ format: "DD/MM/YYYY" }}
      />
      <SelectInput
        source="priority"
        style={styles.input}
        choices={priorityChoices}
      />
      <BooleanInput source="completed" />
      <FileInput source="files" label="Related files" multiple>
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);

export const TodosCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        source="title"
        style={styles.input}
        validation={{ required: true }}
      />
      <LongTextInput source="description" />
      <DateInput
        disablePast
        source="dueDate"
        label="Due date"
        options={{ format: "DD/MM/YYYY" }}
      />
      <SelectInput
        source="priority"
        style={styles.input}
        choices={priorityChoices}
      />
      <BooleanInput source="completed" />
      <FileInput source="files" label="Related files" multiple>
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);
