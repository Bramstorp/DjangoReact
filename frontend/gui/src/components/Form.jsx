import React from 'react';
import { Form, Input, Button } from 'antd';


class CustomForm extends React.Component {
  
  handleFormSubmit = (event) => {
    event.preventDefault()
    const title = event.target.elements.title.value
    const content = event.target.elements.content.value

    console.log(title, content)
  }

  formLayout = ('vertical');

  render() {
    return (
      <div>
        <Form onSubmitCapture={this.handleFormSubmit} layout={this.formLayout}>
          <Form.Item label="Title">
            <Input name="title" placeholder="Title placeholder" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="Content placeholder" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
};

export default CustomForm