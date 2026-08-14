import React from 'react';
import FieldsTable from './FieldsTable';

export default function RequestBodyFields({ fields, contentType }) {
  return (
    <FieldsTable
      title="Request Body"
      fields={fields}
      note={contentType ? <>Content-Type: <code>{contentType}</code></> : null}
    />
  );
}
