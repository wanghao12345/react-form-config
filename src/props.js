import React, { Fragment } from 'react'

import {
    Button,
    Form, 
    Input,
    Select
} from 'antd';

export const getFormItems = (items = []) => {
    return (
        <Fragment>
            {
                items.map((child, index) => {
                    return (
                        <Form.Item
                            key={`form-item-${index}`}
                            {...child}
                        >
                            {
                                (child.type).toLocaleLowerCase() === 'input' ? (
                                    <Input />
                                ) : 
                                (child.type).toLocaleLowerCase() === 'password' ? (
                                    <Input.Password />
                                ) : 
                                (child.type).toLocaleLowerCase() === 'select' ? (
                                    <Select>
                                        {
                                            child.options.map(opt => <Select.Option key={opt.value} value={opt.value}>{opt.label}</Select.Option>)
                                        }
                                    </Select>
                                ) : ''
                            }
                        </Form.Item>
                    )
                })
            }
        </Fragment>
    )
}