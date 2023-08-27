import Form from 'react-bootstrap/Form';

function FormInput() {
  return (
    <Form>
      <Form.Group className="mb-2" controlId="formGroupEmail">
        <Form.Label>to</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    </Form>
  );
}

export default FormInput;