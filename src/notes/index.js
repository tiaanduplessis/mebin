import React from "react";
import {
  List,
  Edit,
  Create,
  Datagrid,
  RichTextField,
  DisabledInput,
  FileField,
  FileInput,
  EditButton,
  SimpleForm,
  TextInput,
  Filter
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const styles = {
  input: { width: "100%" }
};

const NotesFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" />
  </Filter>
);

export const NotesList = props => (
  <List title="Notes" filters={<NotesFilter />} {...props}>
    <Datagrid>
      <RichTextField source="note" />
      <EditButton />
    </Datagrid>
  </List>
);

export const NotesEdit = props => (
  <Edit title="Edit Note" {...props}>
    <SimpleForm>
      <DisabledInput source="id" style={styles.input} />
      <RichTextInput source="note" validation={{ required: true }} />
      <FileInput source="files" label="Related files" multiple>
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);

export const NotesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <RichTextInput source="note" validation={{ required: true }} />
      <FileInput source="files" label="Related files" multiple>
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);
