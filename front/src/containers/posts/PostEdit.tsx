import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput
} from "react-admin";

const PostTitle = ({ record }: { record?: any }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export default props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <TextInput source="title" />

      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);
