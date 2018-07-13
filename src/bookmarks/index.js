import React from "react";
import {
  List,
  Edit,
  Create,
  Datagrid,
  DisabledInput,
  LongTextInput,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  Filter
} from "react-admin";

import LinkField from "./components/LinkField";

const styles = {
  input: { width: "100%" }
};

const BookmarksFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" />
  </Filter>
);

export const BookmarksList = props => (
  <List title="Bookmarks" filters={<BookmarksFilter />} {...props}>
    <Datagrid>
      <LinkField source="link" />
      <TextField source="description" />
      <EditButton />
    </Datagrid>
  </List>
);

export const BookmarksEdit = props => (
  <Edit title="Edit Bookmark" {...props}>
    <SimpleForm>
      <DisabledInput source="id" style={styles.input} />
      <TextInput
        source="title"
        style={styles.input}
        validation={{ required: true }}
      />
      <TextInput
        source="link"
        style={styles.input}
        validation={{ required: true }}
      />
      <LongTextInput source="description" />
    </SimpleForm>
  </Edit>
);

export const BookmarksCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        source="title"
        style={styles.input}
        validation={{ required: true }}
      />
      <TextInput
        source="link"
        style={styles.input}
        validation={{ required: true }}
      />
      <LongTextInput source="description" />
    </SimpleForm>
  </Create>
);
