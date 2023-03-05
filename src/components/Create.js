// import Input from './Input'

import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const Create = () => (
    <Form>
        <Form.Field>
            <label>Gallery Title</label>
            <input placeholder='gallery title' />
        </Form.Field>
        <Form.Field>
            <label>Gallery Comments</label>
            <input placeholder='gallery comments' />
        </Form.Field>
        <Form.Field>
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
)

export default Create;